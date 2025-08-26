<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-26T22:52:54+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "no"
}
-->
# Bank API

> Bank-API bygget med [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API-et er allerede bygget for deg og er ikke en del av oppgaven.

Men hvis du er interessert i å lære hvordan man bygger et API som dette, kan du følge denne serien med videoer: https://aka.ms/NodeBeginner (videoene 17 til 21 dekker akkurat dette API-et).

Du kan også ta en titt på denne interaktive veiledningen: https://aka.ms/learn/express-api

## Kjøre serveren

Sørg for at du har [Node.js](https://nodejs.org) installert.

1. Git-klon dette repoet [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Åpne terminalen din og naviger til mappen `Web-Dev-For-Beginners/7-bank-project/api`.
3. Kjør `npm install` og vent til pakkene er installert (dette kan ta litt tid avhengig av kvaliteten på internettforbindelsen din).
4. Når installasjonen er ferdig, kjør `npm start`, og du er klar.

Serveren skal begynne å lytte på port `5000`.
*Denne serveren vil kjøre sammen med hovedserveren for bankappen (som lytter på port `3000`), ikke lukk den.*

> Merk: Alle oppføringer lagres i minnet og blir ikke vedvarende, så når serveren stoppes, går all data tapt.

## API-detaljer

Rute                                         | Beskrivelse
---------------------------------------------|------------------------------------
GET    /api/                                 | Hent serverinformasjon
POST   /api/accounts/                        | Opprett en konto, f.eks.: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Hent all data for den spesifiserte kontoen
DELETE /api/accounts/:user                   | Fjern spesifisert konto
POST   /api/accounts/:user/transactions      | Legg til en transaksjon, f.eks.: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Fjern spesifisert transaksjon

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.