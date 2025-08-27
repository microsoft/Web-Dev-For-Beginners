<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-26T23:07:19+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "sv"
}
-->
# Förbättra routningen

## Instruktioner

Routdeklarationen innehåller för närvarande endast mall-ID:t som ska användas. Men när en ny sida visas behövs ibland lite mer. Låt oss förbättra vår routingimplementering med två ytterligare funktioner:

- Ge titlar till varje mall och uppdatera fönstertiteln med denna nya titel när mallen ändras.
- Lägg till ett alternativ för att köra viss kod efter att mallen ändras. Vi vill skriva ut `'Dashboard visas'` i utvecklarkonsolen varje gång dashboardsidan visas.

## Bedömningskriterier

| Kriterier | Exemplariskt                                                                                                                      | Tillräckligt                                                                                                                                                                              | Behöver förbättras                                     |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|           | De två funktionerna är implementerade och fungerar. Titel och kodtillägg fungerar också för en ny rutt som läggs till i `routes`-deklarationen. | De två funktionerna fungerar, men beteendet är hårdkodat och inte konfigurerbart via `routes`-deklarationen. Att lägga till en tredje rutt med titel och kodtillägg fungerar inte eller fungerar delvis. | En av funktionerna saknas eller fungerar inte korrekt. |

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller brister. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.