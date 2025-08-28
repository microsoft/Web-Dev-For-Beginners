<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-28T11:16:11+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "en"
}
-->
# Bank API

> Bank API built with [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

The API is already built and is not part of the exercise.

However, if you're interested in learning how to build an API like this, you can follow this video series: https://aka.ms/NodeBeginner (videos 17 through 21 cover this exact API).

You can also check out this interactive tutorial: https://aka.ms/learn/express-api

## Running the server

Ensure you have [Node.js](https://nodejs.org) installed.

1. Clone this repository [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Open your terminal and navigate to the `Web-Dev-For-Beginners/7-bank-project/api` folder.
3. Run `npm install` and wait for the packages to be installed (this may take some time depending on your internet connection).
4. Once the installation is complete, run `npm start` and you're all set.

The server should start listening on port `5000`.
*This server will run alongside the main bank app server terminal (listening on port `3000`), so do not close it.*

> Note: All entries are stored in memory and are not saved permanently, so all data will be lost when the server is stopped.

## API details

Route                                        | Description
---------------------------------------------|------------------------------------
GET    /api/                                 | Retrieve server information
POST   /api/accounts/                        | Create an account, e.g., `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Retrieve all data for the specified account
DELETE /api/accounts/:user                   | Delete the specified account
POST   /api/accounts/:user/transactions      | Add a transaction, e.g., `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Delete the specified transaction

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may include errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is advised. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.