// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const serverUrl = 'http://localhost:5000/api';
const storageKey = 'savedState';

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
// API interactions
// ---------------------------------------------------------------------------

async function sendRequest(api, method, body) {
  try {
    const response = await fetch(serverUrl + api, {
      method: method || 'GET',
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}

async function getAccount(user) {
  return sendRequest('/accounts/' + encodeURIComponent(user));
}

async function createAccount(account) {
  return sendRequest('/accounts', 'POST', account);
}

async function createTransaction(user, transaction) {
  return sendRequest('/accounts/' + user + '/transactions', 'POST', transaction);
}

// ---------------------------------------------------------------------------
// Global state
// ---------------------------------------------------------------------------

let state = {
  user: null,
  account: null
};

function updateState(newState) {
  state = newState;
  localStorage.setItem(storageKey, JSON.stringify(state));
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

  const newState = {
    ...state,
    user: data.user
  };
  updateState(newState);

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

  const newState = {
    ...state,
    user: result.user
  };
  updateState(newState);

  navigate('/dashboard');
}

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

async function updateAccountData() {
  const user = state.user;

  if (!user) {
    return logout();
  }

  const data = await getAccount(user);

  if (data.error) {
    if (data.error === 'User does not exist') {
      return logout();
    }
    return updateElement('dashboardError', data.error);
  }

  const newState = {
    ...state,
    account: data
  };
  updateState(newState);
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
  const data = await createTransaction(state.user, jsonData);

  if (data.error) {
    return updateElement('transactionError', data.error);
  }

  // Update local state with new transaction
  const newState = {
    ...state,
    account: {
      ...state.account,
      balance: state.account.balance + data.amount,
      transactions: [...state.account.transactions, data]
    }
  }
  updateState(newState);

  // Update display
  updateDashboard();
}

async function cancelTransaction() {
  const dialog = document.getElementById('transactionDialog');
  dialog.classList.remove('show');
}

function logout() {
  const newState = {
    user: null,
    account: null
  };
  updateState(newState);

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
    updateState(JSON.parse(savedState));
  }

  // Update route for browser back/next buttons
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
