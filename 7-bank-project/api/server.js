const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
const Tokens = require('csrf');
const pkg = require('./package.json');

// App constants
const port = process.env.PORT || 5000;
const apiPrefix = '/api';

// Store data in-memory, not suited for production use!
// Using Map instead of a plain object to prevent prototype pollution attacks.
const db = new Map([
  ['test', {
    user: 'test',
    currency: '$',
    description: `Test account`,
    balance: 75,
    transactions: [
      { id: '1', date: '2020-10-01', object: 'Pocket money', amount: 50 },
      { id: '2', date: '2020-10-03', object: 'Book', amount: -10 },
      { id: '3', date: '2020-10-04', object: 'Sandwich', amount: -5 }
    ],
  }]
]);

// Create the Express app & setup middlewares
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/(127(\.\d){3}|localhost)/}));
app.options('*', cors());

// ***************************************************************************

// API key for authentication (set API_SECRET env variable in production)
const apiKey = process.env.API_SECRET || crypto.randomBytes(32).toString('hex');
if (!process.env.API_SECRET) {
  console.log(`\n⚠️  No API_SECRET environment variable set.`);
  console.log(`   Generated temporary API key for this session: ${apiKey}\n`);
  console.log(`   Pass it via the X-API-Key request header.\n`);
}

// CSRF token utility (csrf package)
const csrfTokens = new Tokens();
const csrfSecret = process.env.CSRF_SECRET || crypto.randomBytes(32).toString('hex');

// Authentication middleware — validates X-API-Key header on every route
function authenticate(req, res, next) {
  const key = req.headers['x-api-key'];
  if (!key || key !== apiKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// CSRF protection middleware — validates X-CSRF-Token header on state-changing requests
function csrfProtect(req, res, next) {
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
    const token = req.headers['x-csrf-token'];
    if (!token || !csrfTokens.verify(csrfSecret, token)) {
      return res.status(403).json({ error: 'Forbidden: invalid CSRF token' });
    }
  }
  next();
}

// Sanitize object key to prevent prototype pollution attacks
function isSafeKey(key) {
  const blocked = ['__proto__', 'constructor', 'prototype'];
  return typeof key === 'string' && key.length > 0 && !blocked.includes(key);
}

// Configure routes
const router = express.Router();

// Require authentication and CSRF protection for all routes
router.use(authenticate);
router.use(csrfProtect);

// Get server infos
router.get('/', (req, res) => {
  return res.send(`${pkg.description} v${pkg.version}`);
});

// ----------------------------------------------

// Issue a CSRF token — clients must include this in the X-CSRF-Token header
// for all state-changing requests (POST, PUT, PATCH, DELETE)
router.get('/csrf-token', (req, res) => {
  return res.json({ csrfToken: csrfTokens.create(csrfSecret) });
});

// ----------------------------------------------

// Create an account
router.post('/accounts', (req, res) => {
  // Check mandatory request parameters
  if (!req.body.user || !req.body.currency) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  // Prevent prototype pollution via user-supplied account key
  if (!isSafeKey(req.body.user)) {
    return res.status(400).json({ error: 'Invalid username' });
  }

  // Check if account already exists
  if (db.has(req.body.user)) {
    return res.status(409).json({ error: 'User already exists' });
  }

  // Convert balance to number if needed
  let balance = req.body.balance;
  if (balance && typeof balance !== 'number') {
    balance = parseFloat(balance);
    if (isNaN(balance)) {
      return res.status(400).json({ error: 'Balance must be a number' });  
    }
  }

  // Create account
  const account = {
    user: req.body.user,
    currency: req.body.currency,
    description: req.body.description || `${req.body.user}'s budget`,
    balance: balance || 0,
    transactions: [],
  };
  db.set(req.body.user, account);

  return res.status(201).json(account);
});

// ----------------------------------------------

// Get all data for the specified account
router.get('/accounts/:user', (req, res) => {
  if (!isSafeKey(req.params.user)) {
    return res.status(400).json({ error: 'Invalid username' });
  }
  const account = db.get(req.params.user);

  // Check if account exists
  if (!account) {
    return res.status(404).json({ error: 'User does not exist' });
  }

  return res.json(account);
});

// ----------------------------------------------

// Remove specified account
router.delete('/accounts/:user', (req, res) => {
  if (!isSafeKey(req.params.user)) {
    return res.status(400).json({ error: 'Invalid username' });
  }
  const account = db.get(req.params.user);

  // Check if account exists
  if (!account) {
    return res.status(404).json({ error: 'User does not exist' });
  }

  // Removed account
  db.delete(req.params.user);

  res.sendStatus(204);
});

// ----------------------------------------------

// Add a transaction to a specific account
router.post('/accounts/:user/transactions', (req, res) => {
  if (!isSafeKey(req.params.user)) {
    return res.status(400).json({ error: 'Invalid username' });
  }
  const account = db.get(req.params.user);

  // Check if account exists
  if (!account) {
    return res.status(404).json({ error: 'User does not exist' });
  }

  // Check mandatory requests parameters
  if (!req.body.date || !req.body.object || !req.body.amount) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  // Convert amount to number if needed
  let amount = req.body.amount;
  if (amount && typeof amount !== 'number') {
    amount = parseFloat(amount);
  }

  // Check that amount is a valid number
  if (amount && isNaN(amount)) {
    return res.status(400).json({ error: 'Amount must be a number' });
  }

  // Generates an ID for the transaction
  const id = crypto
    .createHash('md5')
    .update(req.body.date + req.body.object + req.body.amount)
    .digest('hex');

  // Check that transaction does not already exist
  if (account.transactions.some((transaction) => transaction.id === id)) {
    return res.status(409).json({ error: 'Transaction already exists' });
  }

  // Add transaction
  const transaction = {
    id,
    date: req.body.date,
    object: req.body.object,
    amount,
  };
  account.transactions.push(transaction);

  // Update balance
  account.balance += transaction.amount;

  return res.status(201).json(transaction);
});

// ----------------------------------------------

// Remove specified transaction from account
router.delete('/accounts/:user/transactions/:id', (req, res) => {
  if (!isSafeKey(req.params.user)) {
    return res.status(400).json({ error: 'Invalid username' });
  }
  const account = db.get(req.params.user);

  // Check if account exists
  if (!account) {
    return res.status(404).json({ error: 'User does not exist' });
  }

  const transactionIndex = account.transactions.findIndex(
    (transaction) => transaction.id === req.params.id
  );

  // Check if transaction exists
  if (transactionIndex === -1) {
    return res.status(404).json({ error: 'Transaction does not exist' });
  }

  // Remove transaction
  account.transactions.splice(transactionIndex, 1);

  res.sendStatus(204);
});

// ***************************************************************************

// Add 'api` prefix to all routes
app.use(apiPrefix, router);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
