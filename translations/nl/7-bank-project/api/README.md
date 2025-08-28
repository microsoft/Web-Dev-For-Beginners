<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-27T20:55:14+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "nl"
}
-->
# Bank API

> Bank API gebouwd met [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

De API is al voor je gebouwd en maakt geen deel uit van de oefening.

Als je echter wilt leren hoe je een API zoals deze kunt bouwen, kun je deze serie video's volgen: https://aka.ms/NodeBeginner (video's 17 tot en met 21 behandelen precies deze API).

Je kunt ook deze interactieve tutorial bekijken: https://aka.ms/learn/express-api

## De server starten

Zorg ervoor dat je [Node.js](https://nodejs.org) geïnstalleerd hebt.

1. Clone deze repository [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners) met Git.
2. Open je terminal en navigeer naar de map `Web-Dev-For-Beginners/7-bank-project/api`.
3. Voer `npm install` uit en wacht tot de pakketten zijn geïnstalleerd (dit kan even duren, afhankelijk van de kwaliteit van je internetverbinding).
4. Wanneer de installatie voltooid is, voer `npm start` uit en je bent klaar om te beginnen.

De server zou moeten starten en luisteren op poort `5000`.
*Deze server zal samen draaien met de hoofdserver van de bankapplicatie (luistert op poort `3000`), sluit deze niet af.*

> Opmerking: alle gegevens worden in het geheugen opgeslagen en niet permanent bewaard, dus wanneer de server wordt gestopt, gaan alle gegevens verloren.

## API details

Route                                        | Beschrijving
---------------------------------------------|------------------------------------
GET    /api/                                 | Haal serverinformatie op
POST   /api/accounts/                        | Maak een account aan, bijv.: `{ user: 'Yohan', description: 'Mijn budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Haal alle gegevens op voor het opgegeven account
DELETE /api/accounts/:user                   | Verwijder het opgegeven account
POST   /api/accounts/:user/transactions      | Voeg een transactie toe, bijv.: `{ date: '2020-07-23T18:25:43.511Z', object: 'Boek gekocht', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Verwijder de opgegeven transactie

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we ons best doen om nauwkeurigheid te garanderen, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.