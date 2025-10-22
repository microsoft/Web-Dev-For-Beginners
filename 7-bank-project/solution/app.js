// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const serverUrl = 'http://localhost:5000/api';
const storageKey = 'savedAccount';
const accountsKey = 'accounts'; // New key for all accounts
const themeKey = 'appTheme'; // <--- NEW: Constant for theme storage

// ---------------------------------------------------------------------------
// Theme Toggle Logic <--- NEW SECTION
// ---------------------------------------------------------------------------

window.toggleTheme = function() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark-mode');
  
  // Toggle visibility of sun/moon icons based on the active class
  const sun = document.getElementById('sun-icon');
  const moon = document.getElementById('moon-icon');
  if (sun && moon) {
      // If dark mode is active (isDark is true), hide the moon and show the sun
      moon.classList.toggle('hidden', isDark);
      sun.classList.toggle('hidden', !isDark);
  }

  // Save preference to local storage
  localStorage.setItem(themeKey, isDark ? 'dark' : 'light');
}

function applyThemeOnLoad() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem(themeKey);

  // Default to system preference if no saved theme is found
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let activateDark;
  if (savedTheme) {
    activateDark = savedTheme === 'dark';
  } else {
    activateDark = prefersDark;
  }

  if (activateDark) {
    html.classList.add('dark-mode');
  } else {
    html.classList.remove('dark-mode');
  }

  // Ensure correct icon is visible on load (needs to wait for DOM elements)
  // This logic runs again in updateRoute or dashboard refresh to ensure icons are set.
}

// Attach the function to run after the DOM content is loaded
document.addEventListener('DOMContentLoaded', applyThemeOnLoad);

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

  // Re-run icon setup after template is rendered
  applyThemeOnLoad(); // <--- UPDATED: Call applyThemeOnLoad here too, to set icon state

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

async function login() {
  const loginForm = document.getElementById('loginForm')
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
  updateElement('currency', account.currency);

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
 
  // START: FIX - FORMAT DATE
  // The date is typically stored as 'YYYY-MM-DD'. We convert it to 'MM/DD/YYYY' for display.
  const dateParts = transaction.date.split('-');
  const displayDate = dateParts[1] + '/' + dateParts[2] + '/' + dateParts[0]; 
  // END: FIX

  tr.children[0].textContent = displayDate; // Use displayDate
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  
  // Optionally highlight positive/negative transactions
  if (transaction.amount < 0) {
    tr.classList.add('negative');
  } else if (transaction.amount > 0) {
    tr.classList.add('positive');
  }

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

  // START: FIX - Handle Text vs. Node/Fragment Appending Robustly
  // When dealing with complex DOM nodes (like the DocumentFragment holding transactions),
  // we must use appendChild. For simple text (like balance/error), textContent is fine.
  if (textOrNode instanceof Node) {
    element.appendChild(textOrNode);
  } else {
    element.textContent = textOrNode;
  }
  // END: FIX
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
  
  // applyThemeOnLoad() is now called via DOMContentLoaded and updateRoute
  
  // Update route for browser back/next buttons
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
