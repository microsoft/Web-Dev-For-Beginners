// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const serverUrl = 'http://localhost:5000/api'; // reserved for future server swap
const storageKey = 'savedAccount';
const accountsKey = 'accounts';
const schemaKey = 'schemaVersion';
const schemaVersion = 1;

// ---------------------------------------------------------------------------
// Intl helpers
// ---------------------------------------------------------------------------

const userLocale = navigator.language || 'en-IN';

function isIsoCurrency(code) {
  if (!code) return false;
  const c = String(code).trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(c)) return false;
  // Verify against supported values when available
  try {
    if (typeof Intl.supportedValuesOf === 'function') {
      return Intl.supportedValuesOf('currency').includes(c);
    }
  } catch {}
  return true; // fallback accept 3-letter code
}

function toCurrency(amount, currency) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return String(amount);
  const c = String(currency || '').trim();
  if (isIsoCurrency(c)) {
    // Accounting style shows negatives in parentheses if supported
    const fmt = new Intl.NumberFormat(userLocale, {
      style: 'currency',
      currency: c.toUpperCase(),
      currencySign: 'accounting',
      maximumFractionDigits: 2
    });
    return fmt.format(n);
  }
  // Fallback: symbol + localized number
  const num = new Intl.NumberFormat(userLocale, {
    maximumFractionDigits: 2
  }).format(n);
  return c ? `${c} ${num}` : num;
}

function toDate(dateStr) {
  // Expect yyyy-mm-dd; fallback to today if invalid
  const d = dateStr ? new Date(dateStr) : new Date();
  if (Number.isNaN(d.getTime())) return new Date();
  return d;
}

function formatDate(dateStr) {
  const d = toDate(dateStr);
  const fmt = new Intl.DateTimeFormat(userLocale, { dateStyle: 'medium' });
  return fmt.format(d);
}

// ---------------------------------------------------------------------------
// Storage and state
// ---------------------------------------------------------------------------

function safeParse(json, fallback) {
  try { return JSON.parse(json); } catch { return fallback; }
}

function getAccounts() {
  return safeParse(localStorage.getItem(accountsKey), []);
}

function saveAccounts(accounts) {
  localStorage.setItem(accountsKey, JSON.stringify(accounts));
}

function migrateSchema() {
  const v = Number(localStorage.getItem(schemaKey) || 0);
  if (v >= schemaVersion) return;
  let accounts = getAccounts();
  // Example migration scaffolding:
  // if (v < 1) { /* future migrations */ }
  saveAccounts(accounts);
  localStorage.setItem(schemaKey, String(schemaVersion));
}

function findAccount(user) {
  const accounts = getAccounts();
  return accounts.find(acc => acc.user === user) || null;
}

async function getAccount(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      const acc = findAccount(user);
      resolve(acc || { error: 'Account not found' });
    }, 60);
  });
}

function uuid() {
  // Works on HTTPS and localhost; fallback otherwise
  if (globalThis.crypto && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'tx-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
}

async function createAccount(accountJson) {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = safeParse(accountJson, null);
      if (!data) return resolve({ error: 'Malformed account data' });
      const user = String(data.user || '').trim();
      if (!user) return resolve({ error: 'Username required' });
      if (findAccount(user)) return resolve({ error: 'User already exists' });

      const currency = String(data.currency || 'INR').trim();
      const newAcc = {
        user,
        description: String(data.description || ''),
        balance: Number(data.balance || 0) || 0,
        currency: isIsoCurrency(currency) ? currency.toUpperCase() : currency,
        transactions: []
      };
      const accounts = getAccounts();
      accounts.push(newAcc);
      saveAccounts(accounts);
      resolve(newAcc);
    }, 80);
  });
}

async function createTransaction(user, transactionJson) {
  return new Promise(resolve => {
    setTimeout(() => {
      const tx = safeParse(transactionJson, null);
      if (!tx) return resolve({ error: 'Malformed transaction data' });

      const amount = Number(tx.amount);
      const object = String(tx.object || '').trim();
      const dateStr = tx.date || new Date().toISOString().slice(0, 10);

      if (!Number.isFinite(amount)) return resolve({ error: 'Amount must be a valid number' });
      if (!object) return resolve({ error: 'Object is required' });

      const accounts = getAccounts();
      const idx = accounts.findIndex(acc => acc.user === user);
      if (idx === -1) return resolve({ error: 'Account not found' });

      const newTx = {
        id: uuid(),
        date: dateStr,
        object,
        amount
      };

      // Update balance and push transaction
      accounts[idx].balance = (Number(accounts[idx].balance) || 0) + amount;
      accounts[idx].transactions = (accounts[idx].transactions || []);
      accounts[idx].transactions.push(newTx);

      saveAccounts(accounts);
      resolve(newTx);
    }, 80);
  });
}

// Keep a frozen state object to avoid accidental mutations
let state = Object.freeze({
  account: null
});

function updateState(property, newData) {
  state = Object.freeze({ ...state, [property]: newData });
  // Persist active account only
  localStorage.setItem(storageKey, JSON.stringify(state.account));
}

// Cross-tab sync: refresh when accounts or active account change in another tab
window.addEventListener('storage', (e) => {
  if (e.key === accountsKey || e.key === storageKey) {
    if (state.account?.user) {
      refresh().catch(() => {});
    }
  }
});

// ---------------------------------------------------------------------------
// DOM helpers
// ---------------------------------------------------------------------------

function qs(id) {
  return document.getElementById(id);
}

function updateElement(id, textOrNode) {
  const el = qs(id);
  if (!el) return;
  while (el.firstChild) el.removeChild(el.firstChild);
  el.append(textOrNode);
}

// Resolve multiple possible IDs used by older markup
function setTextByAnyId(ids, text) {
  for (const id of ids) {
    const el = qs(id);
    if (el) { el.textContent = text; return true; }
  }
  return false;
}

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------

const routes = {
  '/dashboard': { title: 'My Account', templateId: 'dashboard', init: refresh },
  '/login': { title: 'Login', templateId: 'login', init: attachAuthHandlers }
};

function navigate(path) {
  // Store path in history state and URL
  history.pushState({ path }, '', path);
  updateRoute();
}

function updateRoute() {
  const path = history.state?.path || window.location.pathname;
  const route = routes[path] || routes['/dashboard'];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);

  // Attach handlers after DOM is rendered
  attachGlobalHandlers();

  if (typeof route.init === 'function') {
    Promise.resolve(route.init()).catch(err => console.error(err));
  }
  document.title = route.title;
}

// Browser back/forward
window.addEventListener('popstate', () => updateRoute());

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------

async function login() {
  const form = qs('loginForm');
  if (!form) return;
  if (!form.checkValidity()) { form.reportValidity(); return; }

  const user = String(form.user.value || '').trim();
  const data = await getAccount(user);
  if (data.error) return updateElement('loginError', data.error);

  updateState('account', data);
  navigate('/dashboard');
}

async function register() {
  const form = qs('registerForm');
  if (!form) return;
  if (!form.checkValidity()) { form.reportValidity(); return; }

  const data = Object.fromEntries(new FormData(form));
  data.user = String(data.user || '').trim();
  data.currency = String(data.currency || '').trim();
  data.description = String(data.description || '').trim();
  data.balance = Number(data.balance || 0) || 0;

  const jsonData = JSON.stringify(data);
  const result = await createAccount(jsonData);

  if (result.error) return updateElement('registerError', result.error);

  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
  const result = await createAccount(jsonData);

  if (result.error) {
    return updateElement('registerError', result.error);
  }

  updateState('account', result);
  navigate('/dashboard');
}

function attachAuthHandlers() {
  const loginForm = qs('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => { e.preventDefault(); login(); });
  }
  const registerForm = qs('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => { e.preventDefault(); register(); });
  }
}

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

async function updateAccountData() {
  const account = state.account;
  if (!account) return logout();

  const data = await getAccount(account.user);
  if (data.error) return logout();

  updateState('account', data);
}

async function refresh() {
  await updateAccountData();
  updateDashboard();
}

function updateDashboard() {
  const account = state.account;
  if (!account) return logout();

  // Description (support both #description and #transactions-description subtitles)
  setTextByAnyId(['description', 'transactions-description'], account.description || 'Transactions');

  // Balance and currency
  const balanceText = toCurrency(account.balance, account.currency);
  setTextByAnyId(['balance', 'balance-value'], balanceText);

  // Some markups use a separate currency span; keep it empty when using formatted output
  setTextByAnyId(['balance-currency', 'currency'], '');

  // Transactions (sorted by date desc, then by insertion order)
  const tbody = qs('transactions');
  if (!tbody) return;

  const frag = document.createDocumentFragment();
  const template = document.getElementById('transaction');

  const sorted = [...(account.transactions || [])]
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));

  for (const tx of sorted) {
    const row = template.content.cloneNode(true);
    const tr = row.querySelector('tr');
    const tds = tr.children;
    tds[0].textContent = formatDate(tx.date);
    tds[1].textContent = tx.object;
    tds[2].textContent = toCurrency(tx.amount, account.currency);
    if (tx.amount < 0) tr.classList.add('debit');
    if (tx.amount > 0) tr.classList.add('credit');
    frag.appendChild(row);
  }

  tbody.innerHTML = '';
  tbody.appendChild(frag);
}

function addTransaction() {
  const dialog = qs('transactionDialog');
  if (!dialog) return;
  dialog.classList.add('show');

  // Reset form and set today
  const form = qs('transactionForm');
  if (form) {
    form.reset();
    form.date.valueAsDate = new Date();
    // Move focus to first field
    form.date.focus();
  }

  // Close handlers
  const backdrop = dialog.querySelector('[data-dismiss]') || dialog;
  backdrop.addEventListener('click', onDialogDismissClick);
  dialog.addEventListener('keydown', onDialogKeydown);
}

function onDialogDismissClick(e) {
  if (e.target?.hasAttribute?.('data-dismiss')) {
    cancelTransaction();
  }
}

function onDialogKeydown(e) {
  if (e.key === 'Escape') {
    cancelTransaction();
  }
}

async function confirmTransaction() {
  const form = qs('transactionForm');
  if (!form) return;

  // Inline validation
  const amountVal = Number(form.amount.value);
  const objectVal = String(form.object.value || '').trim();
  if (!Number.isFinite(amountVal)) {
    setFormError('transactionError', 'Amount must be a valid number');
    return;
  }
  if (!objectVal) {
    setFormError('transactionError', 'Object is required');
    return;
  }

  clearFormError('transactionError');

  const jsonData = JSON.stringify(Object.fromEntries(new FormData(form)));
  const data = await createTransaction(state.account.user, jsonData);

  if (data.error) {
    setFormError('transactionError', data.error);
    return;
  }

  // Update local state
  const newAccount = {
    ...state.account,
    balance: (Number(state.account.balance) || 0) + data.amount,
    transactions: [...(state.account.transactions || []), data]
  };
  updateState('account', newAccount);

  // Close dialog and update view
  cancelTransaction();
  updateDashboard();
}

function setFormError(id, message) {
  updateElement(id, message);
  const el = qs(id);
  if (el) el.focus();
}

function clearFormError(id) {
  const el = qs(id);
  if (el) el.textContent = '';
}

function cancelTransaction() {
  const dialog = qs('transactionDialog');
  if (!dialog) return;
  dialog.classList.remove('show');
  dialog.removeEventListener('keydown', onDialogKeydown);
  const opener = document.querySelector('button[onclick="addTransaction()"]');
  if (opener) opener.focus();
}

function logout() {
  updateState('account', null);
  navigate('/login');
}

// ---------------------------------------------------------------------------
// Global listeners
// ---------------------------------------------------------------------------

function attachGlobalHandlers() {
  // Intercept form submissions for inline handlers in markup
  const loginForm = qs('loginForm');
  if (loginForm && !loginForm.__wired) {
    loginForm.__wired = true;
    loginForm.addEventListener('submit', (e) => { e.preventDefault(); login(); });
  }
  const registerForm = qs('registerForm');
  if (registerForm && !registerForm.__wired) {
    registerForm.__wired = true;
    registerForm.addEventListener('submit', (e) => { e.preventDefault(); register(); });
  }
  const txForm = qs('transactionForm');
  if (txForm && !txForm.__wired) {
    txForm.__wired = true;
    txForm.addEventListener('submit', (e) => { e.preventDefault(); confirmTransaction(); });
  }
  const cancelBtn = document.querySelector('#transactionDialog [data-dismiss]');
  if (cancelBtn && !cancelBtn.__wired) {
    cancelBtn.__wired = true;
    cancelBtn.addEventListener('click', cancelTransaction);
  }
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

function init() {
  // Schema migration
  migrateSchema();

  // Restore active account
  const saved = safeParse(localStorage.getItem(storageKey), null);
  if (saved) updateState('account', saved);

  // Seed history state if missing
  if (!history.state || !history.state.path) {
    const initialPath = state.account ? '/dashboard' : '/login';
    history.replaceState({ path: initialPath }, '', initialPath);
  }

  // Initial route render
  updateRoute();
}

init();
