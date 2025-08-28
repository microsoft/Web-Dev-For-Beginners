<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-26T23:03:24+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "no"
}
-->
# Refaktorer og kommenter koden din

## Instruksjoner

Etter hvert som kodebasen din vokser, er det viktig å refaktorisere koden ofte for å holde den lesbar og vedlikeholdbar over tid. Legg til kommentarer og refaktorer `app.js` for å forbedre kodekvaliteten:

- Ekstraher konstanter, som for eksempel serverens API-base-URL
- Faktoriser liknende kode: for eksempel kan du lage en `sendRequest()`-funksjon for å samle koden som brukes i både `createAccount()` og `getAccount()`
- Reorganiser koden for å gjøre den enklere å lese, og legg til kommentarer

## Vurderingskriterier

| Kriterier | Eksemplarisk                                                                                                                                                 | Tilfredsstillende                                                                                 | Trenger forbedring                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|           | Koden er kommentert, godt organisert i ulike seksjoner og lett å lese. Konstanter er ekstrahert, og en faktoriserte `sendRequest()`-funksjon er opprettet.    | Koden er ryddig, men kan fortsatt forbedres med flere kommentarer, ekstrahering av konstanter eller faktorisering. | Koden er rotete, ikke kommentert, konstanter er ikke ekstrahert, og koden er ikke faktorisert. |

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.