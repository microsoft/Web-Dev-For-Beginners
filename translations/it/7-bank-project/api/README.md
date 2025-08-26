<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-26T00:05:28+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "it"
}
-->
# API Bancaria

> API bancaria costruita con [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

L'API è già stata costruita per te e non fa parte dell'esercizio.

Tuttavia, se sei interessato a imparare come costruire un'API come questa, puoi seguire questa serie di video: https://aka.ms/NodeBeginner (i video dal 17 al 21 coprono esattamente questa API).

Puoi anche dare un'occhiata a questo tutorial interattivo: https://aka.ms/learn/express-api

## Avviare il server

Assicurati di avere [Node.js](https://nodejs.org) installato.

1. Clona questo repository [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Apri il tuo terminale e naviga nella cartella `Web-Dev-For-Beginners/7-bank-project/api`.
3. Esegui `npm install` e attendi che i pacchetti vengano installati (potrebbe richiedere un po' di tempo a seconda della qualità della tua connessione internet).
4. Quando l'installazione è completata, esegui `npm start` e sei pronto per partire.

Il server dovrebbe iniziare ad ascoltare sulla porta `5000`.
*Questo server sarà in esecuzione insieme al terminale del server principale dell'app bancaria (che ascolta sulla porta `3000`), non chiuderlo.*

> Nota: tutte le voci sono memorizzate in memoria e non sono persistenti, quindi quando il server viene arrestato tutti i dati vengono persi.

## Dettagli dell'API

Route                                        | Descrizione
---------------------------------------------|------------------------------------
GET    /api/                                 | Ottieni informazioni sul server
POST   /api/accounts/                        | Crea un account, es: `{ user: 'Yohan', description: 'Il mio budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Ottieni tutti i dati per l'account specificato
DELETE /api/accounts/:user                   | Rimuovi l'account specificato
POST   /api/accounts/:user/transactions      | Aggiungi una transazione, es: `{ date: '2020-07-23T18:25:43.511Z', object: 'Acquistato un libro', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Rimuovi la transazione specificata

**Disclaimer (Avvertenza)**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.