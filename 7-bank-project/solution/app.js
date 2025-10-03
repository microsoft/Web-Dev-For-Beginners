// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const serverUrl = 'http://localhost:5000/api';
const storageKey = 'savedAccount';
const accountsKey = 'accounts'; // New key for all accounts

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------

const routes = {
  '/dashboard': { title: 'My Account', templateId: 'dashboard', init: refresh },
  '/login': { title: 'Login', templateId: 'login' }
};

function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  updateRoute();
}

function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/dashboard');
  }

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);

  if (typeof route.init === 'function') {
    route.init();
  }

  document.title = route.title;
}

// ---------------------------------------------------------------------------
// API interactions (replaced with localStorage logic)
// ---------------------------------------------------------------------------

function getAccounts() {
  return JSON.parse(localStorage.getItem(accountsKey) || '[]');
}

function saveAccounts(accounts) {
  localStorage.setItem(accountsKey, JSON.stringify(accounts));
}

function findAccount(user) {
  const accounts = getAccounts();
  return accounts.find(acc => acc.user === user) || null;
}

async function getAccount(user) {
  // Simulate async
  return new Promise(resolve => {
    setTimeout(() => {
      const acc = findAccount(user);
      if (!acc) resolve({ error: 'Account not found' });
      else resolve(acc);
    }, 100);
  });
}

async function createAccount(accountJson) {
  return new Promise(resolve => {
    setTimeout(() => {
      let data;
      try {
        data = JSON.parse(accountJson);
      } catch (e) {
        return resolve({ error: 'Malformed account data' });
      }
      if (!data.user) return resolve({ error: 'Username required' });
      if (findAccount(data.user)) return resolve({ error: 'User already exists' });
      // Set up initial account structure
      const newAcc = {
        user: data.user,
        description: data.description || '',
        balance: 0,
        currency: data.currency || 'USD',
        transactions: []
      };
      const accounts = getAccounts();
      accounts.push(newAcc);
      saveAccounts(accounts);
      resolve(newAcc);
    }, 100);
  });
}

async function createTransaction(user, transactionJson) {
  return new Promise(resolve => {
    setTimeout(() => {
      const accounts = getAccounts();
      const idx = accounts.findIndex(acc => acc.user === user);
      if (idx === -1) return resolve({ error: 'Account not found' });
      const tx = JSON.parse(transactionJson);
      tx.amount = parseFloat(tx.amount);
      tx.date = tx.date || new Date().toISOString().slice(0, 10);
      accounts[idx].balance += tx.amount;
      accounts[idx].transactions.push(tx);
      saveAccounts(accounts);
      resolve(tx);
    }, 100);
  });
}

// ---------------------------------------------------------------------------
// Global state
// ---------------------------------------------------------------------------

let state = Object.freeze({
  account: null
});

function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
  localStorage.setItem(storageKey, JSON.stringify(state.account));
}

// ---------------------------------------------------------------------------
// Login/register
// ---------------------------------------------------------------------------

// Client-side validation for the login form
function validateLogin(form) {
  const user = form.user.value.trim();
  if (user === '') {
    updateElement('loginError', 'Username cannot be empty.');
    return false;
  }
  updateElement('loginError', ''); // Clear previous error
  return true;
}

// Client-side validation for the register form
function validateRegister(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  updateElement('registerError', ''); // Clear previous error

  if (data.user.trim() === '') {
    updateElement('registerError', 'Username is required.');
    return false;
  }
  if (data.currency.trim() === '') {
    updateElement('registerError', 'Currency is required.');
    return false;
  }
  return true;
}

async function login() {
  const loginForm = document.getElementById('loginForm');
  
  // Run client-side validation first
  if (!validateLogin(loginForm)) {
    return;
  }

  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return updateElement('loginError', data.error);
  }

  updateState('account', data);
  navigate('/dashboard');
}

async function register() {
  const registerForm = document.getElementById('registerForm');
  
  // Run client-side validation first
  if (!validateRegister(registerForm)) {
    return;
  }

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

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}

async function refresh() {
  await updateAccountData();
  updateDashboard();
}

function updateDashboard() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('balance-currency', account.currency); // Fixed ID for currency display

  // Update transactions
  const transactionsRows = document.createDocumentFragment();
  for (const transaction of account.transactions) {
    const transactionRow = createTransactionRow(transaction);
    transactionsRows.appendChild(transactionRow);
  }
  updateElement('transactions', transactionsRows);
}

function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}

function addTransaction() {
  const dialog = document.getElementById('transactionDialog');
  dialog.classList.add('show');

  // Reset form
  const transactionForm = document.getElementById('transactionForm');
  transactionForm.reset();

  // Set date to today
  transactionForm.date.valueAsDate = new Date();
}

async function confirmTransaction() {
  const dialog = document.getElementById('transactionDialog');
  dialog.classList.remove('show');

  const transactionForm = document.getElementById('transactionForm');

  const formData = new FormData(transactionForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const data = await createTransaction(state.account.user, jsonData);

  if (data.error) {
    return updateElement('transactionError', data.error);
  }

  // Update local state with new transaction
  const newAccount = {
    ...state.account,
    balance: state.account.balance + data.amount,
    transactions: [...state.account.transactions, data]
  }
  updateState('account', newAccount);

  // Update display
  updateDashboard();
}

async function cancelTransaction() {
  const dialog = document.getElementById('transactionDialog');
  dialog.classList.remove('show');
}

function logout() {
  updateState('account', null);
  navigate('/login');
}

// ---------------------------------------------------------------------------
// Utils
// ---------------------------------------------------------------------------

function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

function init() {
  // Restore state
  const savedState = localStorage.getItem(storageKey);
  if (savedState) {
    updateState('account', JSON.parse(savedState));
  }

  // Update route for browser back/next buttons
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
