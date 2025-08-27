<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-26T23:03:16+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "da"
}
-->
# Refaktorer og kommenter din kode

## Instruktioner

Efterhånden som din kodebase vokser, er det vigtigt at refaktorere din kode regelmæssigt for at holde den læsbar og vedligeholdelsesvenlig over tid. Tilføj kommentarer og refaktorer din `app.js` for at forbedre kodekvaliteten:

- Ekstraher konstanter, som f.eks. serverens API-base-URL
- Faktoriser lignende kode: for eksempel kan du oprette en `sendRequest()`-funktion for at samle koden, der bruges i både `createAccount()` og `getAccount()`
- Omorganiser koden for at gøre den lettere at læse, og tilføj kommentarer

## Bedømmelseskriterier

| Kriterier | Fremragende                                                                                                                                                  | Tilstrækkelig                                                                                     | Kræver Forbedring                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|           | Koden er kommenteret, velorganiseret i forskellige sektioner og let at læse. Konstanter er ekstraheret, og en faktoriseret `sendRequest()`-funktion er oprettet. | Koden er ren, men kan stadig forbedres med flere kommentarer, ekstrahering af konstanter eller faktorisation. | Koden er rodet, ikke kommenteret, konstanter er ikke ekstraheret, og koden er ikke faktoriseret. |

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.