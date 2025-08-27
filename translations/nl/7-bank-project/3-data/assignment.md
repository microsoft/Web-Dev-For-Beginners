<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-27T21:00:53+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "nl"
}
-->
# Refactor en voorzie je code van commentaar

## Instructies

Naarmate je codebase groeit, is het belangrijk om je code regelmatig te refactoren om deze leesbaar en onderhoudbaar te houden. Voeg commentaar toe en refactor je `app.js` om de codekwaliteit te verbeteren:

- Haal constanten, zoals de basis-URL van de server-API, apart
- Bundel vergelijkbare code: bijvoorbeeld door een `sendRequest()`-functie te maken die de code groepeert die wordt gebruikt in zowel `createAccount()` als `getAccount()`
- Herorganiseer de code om deze makkelijker leesbaar te maken en voeg commentaar toe

## Beoordelingscriteria

| Criteria | Uitmuntend                                                                                                                                                     | Voldoende                                                                                         | Verbetering Nodig                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|          | Code is van commentaar voorzien, goed georganiseerd in verschillende secties en makkelijk te lezen. Constanten zijn apart gehaald en een gefactoriseerde `sendRequest()`-functie is gemaakt. | Code is schoon, maar kan nog verbeterd worden met meer commentaar, het apart halen van constanten of factorisatie. | Code is rommelig, niet van commentaar voorzien, constanten zijn niet apart gehaald en code is niet gefactoriseerd. |

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.