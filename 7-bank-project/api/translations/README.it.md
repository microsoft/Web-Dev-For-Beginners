# API Bank

> Bank API è costruita con [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

L'API è già costruita e non fa parte dell'esercizio.

Tuttavia, se interessa imparare come creare un'API come questa, si può seguire questa serie di video: https://aka.ms/NodeBeginner (i video da 17 a 21 riguardano questa specifica API).

Si può anche dare un'occhiata a questo tutorial interattivo: https://aka.ms/learn/express-api

## Mettere in esecuzione il server

Assicurarsi di aver [installato](https://nodejs.org) Node.js.

1. Eseguire il comando `git clone` per questo repository.
2. Aprire un terminale nella cartella `api` , quindi eseguire `npm install`.
3. Eseguire `npm start`.

Il server dovrebbe mettersi in ascolto sulla porta `5000`.

> Nota: tutte le voci vengono archiviate in memoria e non sono persistenti, quindi quando il server viene arrestato tutti i dati vengono persi.

## Dettagli API

| Rotta | Descrizione |
---------------------------------------------|------------------------------------
| GET /api/ | Ottiene informazioni sul server |
| POST /api/accounts/ | Crea un account, ad es.: `{user: "Giovanni", description: "Il mio budget", currency: "EUR", balance: 100}` |
| GET /api/accounts/:user | Ottiene tutti i dati per l'account specificato |
| DELETE /api/accounts/: user | Rimuove l'account specificato |
| POST /api/account/:user/transactions | Aggiunge una transazione, ad es .: `{date: '2020-07-23T18:25:43.511Z', object: "Acquistato un libro", amount: -20}` |
| DELETE  /api/accounts/:user/transactions/:id | Rimuove la transazione specificata |

