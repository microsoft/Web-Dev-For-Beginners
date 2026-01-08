<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2026-01-08T16:38:52+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "pcm"
}
-->
# Bank API

> Bank API wey dem build with [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

The API don already don build for you and no be part of the exercise.

But if you want learn how to build API like dis one, you fit follow dis kind video series: https://aka.ms/NodeBeginner (videos 17 reach 21 na dem cover dis exact API).

You fit also check dis interactive tutorial: https://aka.ms/learn/express-api

## Running the server

Make sure say you get [Node.js](https://nodejs.org) installed.

1. Git clone dis repo [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Open your terminal come waka inside `Web-Dev-For-Beginners/7-bank-project/api` folder
2. Run `npm install` come wait make packages install finish (e fit take small time depend on your internet speed).
3. After installation finish, run `npm start` come you ready.

The server suppose start dey listen for port `5000`.
*Dis server go dey run together wit di main bank app server terminal (wey dey for port `3000`), no close am.*

> Note: all di data dey saved na for memory, no dey permanent, so once server stop all data go lost.

## API details

Route                                        | Description
---------------------------------------------|------------------------------------
GET    /api/                                 | Collect info about di server
POST   /api/accounts/                        | Create account, ex: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Collect all info for di specified account
DELETE /api/accounts/:user                   | Delete di specified account
POST   /api/accounts/:user/transactions      | Add transaction, ex: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Delete di specified transaction

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dis dokument don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we try make am correct, make you sabi say automated translation fit get mistakes or no too clear. Di original dokument for im own language na di real correct one. If na important information, e better make professional human translator do am. We no go responsible for any wahala or wrong understanding wey fit show because of dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->