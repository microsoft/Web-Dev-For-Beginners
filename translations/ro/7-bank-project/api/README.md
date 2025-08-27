<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-27T22:55:01+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "ro"
}
-->
# API Bancară

> API bancară construită cu [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API-ul este deja construit pentru tine și nu face parte din exercițiu.

Totuși, dacă ești interesat să înveți cum să construiești un API ca acesta, poți urmări această serie de videoclipuri: https://aka.ms/NodeBeginner (videoclipurile 17 până la 21 acoperă exact acest API).

De asemenea, poți arunca o privire la acest tutorial interactiv: https://aka.ms/learn/express-api

## Pornirea serverului

Asigură-te că ai instalat [Node.js](https://nodejs.org).

1. Clonează acest repo [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Deschide terminalul și navighează în folderul `Web-Dev-For-Beginners/7-bank-project/api`.
3. Rulează `npm install` și așteaptă să se instaleze pachetele (poate dura ceva timp, în funcție de calitatea conexiunii tale la internet).
4. După ce instalarea este finalizată, rulează `npm start` și ești gata de lucru.

Serverul ar trebui să înceapă să asculte pe portul `5000`.
*Acest server va rula împreună cu terminalul principal al aplicației bancare (ascultând pe portul `3000`), nu îl închide.*

> Notă: toate înregistrările sunt stocate în memorie și nu sunt persistente, astfel încât, atunci când serverul este oprit, toate datele sunt pierdute.

## Detalii API

Rută                                         | Descriere
---------------------------------------------|------------------------------------
GET    /api/                                 | Obține informații despre server
POST   /api/accounts/                        | Creează un cont, ex: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Obține toate datele pentru contul specificat
DELETE /api/accounts/:user                   | Șterge contul specificat
POST   /api/accounts/:user/transactions      | Adaugă o tranzacție, ex: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Șterge tranzacția specificată

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.