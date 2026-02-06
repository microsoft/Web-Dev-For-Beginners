# Bank-API

> Bank-API byggd med [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API:et är redan färdigbyggt och är inte en del av övningen.

Men om du är intresserad av att lära dig hur man bygger ett API som detta kan du följa denna serie av videor: https://aka.ms/NodeBeginner (videor 17 till 21 täcker exakt detta API).

Du kan också ta en titt på denna interaktiva handledning: https://aka.ms/learn/express-api

## Starta servern

Se till att du har [Node.js](https://nodejs.org) installerat.

1. Klona detta repo [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Öppna din terminal och navigera till mappen `Web-Dev-For-Beginners/7-bank-project/api`.
3. Kör `npm install` och vänta tills paketen är installerade (det kan ta ett tag beroende på kvaliteten på din internetanslutning).
4. När installationen är klar, kör `npm start` och du är redo att köra.

Servern bör börja lyssna på port `5000`.
*Denna server kommer att köras tillsammans med huvudservern för bankappen (som lyssnar på port `3000`), stäng inte den.*

> Obs: alla poster lagras i minnet och sparas inte, så när servern stoppas förloras all data.

## API-detaljer

Route                                        | Beskrivning
---------------------------------------------|------------------------------------
GET    /api/                                 | Hämta serverinformation
POST   /api/accounts/                        | Skapa ett konto, ex: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Hämta all data för det angivna kontot
DELETE /api/accounts/:user                   | Ta bort det angivna kontot
POST   /api/accounts/:user/transactions      | Lägg till en transaktion, ex: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Ta bort den angivna transaktionen

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiska översättningar kan innehålla fel eller brister. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.