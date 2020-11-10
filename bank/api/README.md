# Bank API

> Bank API built with [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

The API is already built for you and not part of the exercise.

However, if you're interested to learn how to build an API like this you can follow this series of videos: https://aka.ms/NodeBeginner (videos 17 through 21 covers this exact API).

You can also take a look at this interactive tutorial: https://aka.ms/learn/express-api

## Running the server

Make sure you have [Node.js](https://nodejs.org) installed.

1. Git clone this repo.
2. Open a terminal in `api` folder, then run `npm install`.
3. Run `npm start`.

The server should start listening on port `5000`.

> Note: all entries are stored in-memory and are not persisted, so when the server is stopped all data is lost.

## API details

Route                                        | Description
---------------------------------------------|------------------------------------
GET    /api/                                 | Get server info
POST   /api/accounts/                        | Create an account, ex: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Get all data for the specified account
DELETE /api/accounts/:user                   | Remove specified account
POST   /api/accounts/:user/transactions      | Add a transaction, ex: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Remove specified transaction

