const assert = require('assert');
const http = require('http');
const app = require('./server');

function request(port, method, path, body) {
  const payload = body ? JSON.stringify(body) : null;

  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: '127.0.0.1',
        port,
        method,
        path,
        headers: payload
          ? {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(payload),
            }
          : {},
      },
      (res) => {
        let responseBody = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          responseBody += chunk;
        });
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            body: responseBody ? JSON.parse(responseBody) : null,
          });
        });
      }
    );

    req.on('error', reject);
    if (payload) {
      req.write(payload);
    }
    req.end();
  });
}

const server = app.listen(0, '127.0.0.1', async () => {
  const { port } = server.address();

  try {
    const before = await request(port, 'GET', '/api/accounts/test');
    const transaction = await request(
      port,
      'POST',
      '/api/accounts/test/transactions',
      {
        date: '2026-09-20',
        object: 'Balance deletion regression test',
        amount: 10,
      }
    );

    assert.strictEqual(transaction.statusCode, 201);

    const deletion = await request(
      port,
      'DELETE',
      `/api/accounts/test/transactions/${transaction.body.id}`
    );
    assert.strictEqual(deletion.statusCode, 204);

    const after = await request(port, 'GET', '/api/accounts/test');
    assert.strictEqual(after.body.balance, before.body.balance);
    assert.strictEqual(
      after.body.transactions.some(({ id }) => id === transaction.body.id),
      false
    );
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
