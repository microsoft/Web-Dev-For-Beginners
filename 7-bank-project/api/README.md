# Bank API

> Bank API built with [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

The API is already built for you and not part of the exercise.

However, if you're interested to learn how to build an API like this you can follow this series of videos: https://aka.ms/NodeBeginner (videos 17 through 21 covers this exact API).

You can also take a look at this interactive tutorial: https://aka.ms/learn/express-api

## Running the server

Make sure you have [Node.js](https://nodejs.org) installed.

1. Git clone this repo [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Open your terminal and navigate into the `Web-Dev-For-Beginners/7-bank-project/api` folder
2. Run `npm install` and wait for the packages to be installed(could take a while depending on the quality of your internet connection).
3. When the installation is over, run `npm start` and you are good to go.

The server should start listening on port `5000`.
*This server will be running together with the main bank app server terminal(listening on port `3000`), do not close it.*

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

