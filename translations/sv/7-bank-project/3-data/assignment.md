<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-26T23:03:08+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "sv"
}
-->
# Refaktorera och kommentera din kod

## Instruktioner

När din kodbas växer är det viktigt att regelbundet refaktorera koden för att hålla den läsbar och underhållbar över tid. Lägg till kommentarer och refaktorera din `app.js` för att förbättra kodkvaliteten:

- Extrahera konstanter, som bas-URL för serverns API
- Återanvänd liknande kod: till exempel kan du skapa en funktion `sendRequest()` för att samla koden som används i både `createAccount()` och `getAccount()`
- Omorganisera koden för att göra den lättare att läsa, och lägg till kommentarer

## Bedömningskriterier

| Kriterier | Exemplariskt                                                                                                                                                 | Tillräckligt                                                                                     | Behöver förbättras                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|           | Koden är kommenterad, välorganiserad i olika sektioner och lätt att läsa. Konstanter är extraherade och en faktoriserad funktion `sendRequest()` har skapats. | Koden är ren men kan fortfarande förbättras med fler kommentarer, extrahering av konstanter eller faktorisering. | Koden är rörig, inte kommenterad, konstanter är inte extraherade och koden är inte faktoriserad. |

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller brister. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.