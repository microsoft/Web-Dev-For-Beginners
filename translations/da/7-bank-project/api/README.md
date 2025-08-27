<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-26T22:52:45+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "da"
}
-->
# Bank API

> Bank API bygget med [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API'en er allerede bygget for dig og er ikke en del af øvelsen.

Men hvis du er interesseret i at lære, hvordan man bygger en API som denne, kan du følge denne videoserie: https://aka.ms/NodeBeginner (videoerne 17 til 21 dækker præcis denne API).

Du kan også tage et kig på denne interaktive tutorial: https://aka.ms/learn/express-api

## Kør serveren

Sørg for, at du har [Node.js](https://nodejs.org) installeret.

1. Git-klon dette repo [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Åbn din terminal og naviger til mappen `Web-Dev-For-Beginners/7-bank-project/api`.
2. Kør `npm install` og vent på, at pakkerne bliver installeret (det kan tage lidt tid afhængigt af kvaliteten af din internetforbindelse).
3. Når installationen er færdig, kør `npm start`, og du er klar.

Serveren bør begynde at lytte på port `5000`.
*Denne server vil køre sammen med den primære bankapp-serverterminal (lytter på port `3000`), så luk den ikke.*

> Bemærk: alle poster gemmes i hukommelsen og bliver ikke vedvarende, så når serveren stoppes, går alle data tabt.

## API-detaljer

Rute                                         | Beskrivelse
---------------------------------------------|------------------------------------
GET    /api/                                 | Hent serverinfo
POST   /api/accounts/                        | Opret en konto, fx: `{ user: 'Yohan', description: 'Mit budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Hent alle data for den angivne konto
DELETE /api/accounts/:user                   | Fjern den angivne konto
POST   /api/accounts/:user/transactions      | Tilføj en transaktion, fx: `{ date: '2020-07-23T18:25:43.511Z', object: 'Købte en bog', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Fjern den angivne transaktion

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.