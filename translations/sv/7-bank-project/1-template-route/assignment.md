<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-23T21:43:30+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "sv"
}
-->
# Förbättra routingen

## Instruktioner

Nu när du har byggt ett grundläggande routingsystem är det dags att förbättra det med professionella funktioner som förbättrar användarupplevelsen och ger bättre verktyg för utvecklare. Applikationer i verkligheten behöver mer än bara mallväxling – de kräver dynamiska sidtitlar, livscykelhooks och utbyggbara arkitekturer.

I denna uppgift kommer du att utöka din routingimplementation med två viktiga funktioner som ofta finns i produktionswebbapplikationer. Dessa förbättringar kommer att göra din bankapp mer polerad och ge en grund för framtida funktionalitet.

Routdeklarationen innehåller för närvarande endast mall-ID:t som ska användas. Men när en ny sida visas behövs ibland lite mer. Låt oss förbättra vår routingimplementation med två ytterligare funktioner:

### Funktion 1: Dynamiska sidtitlar
**Mål:** Ge titlar till varje mall och uppdatera fönstrets titel med denna nya titel när mallen ändras.

**Varför detta är viktigt:**
- **Förbättrar** användarupplevelsen genom att visa beskrivande webbläsarflikstitlar
- **Ökar** tillgängligheten för skärmläsare och hjälpmedelstekniker  
- **Ger** bättre bokmärkes- och webbläsarhistorikkontext
- **Följer** professionella webbdesignstandarder

**Implementeringsmetod:**
- **Utöka** routobjektet för att inkludera titelinformation för varje route
- **Modifiera** funktionen `updateRoute()` för att dynamiskt uppdatera `document.title`
- **Testa** att titlar ändras korrekt vid navigering mellan skärmar

### Funktion 2: Livscykelhooks för routes  
**Mål:** Lägg till en möjlighet att köra kod efter att mallen har ändrats. Vi vill skriva ut `'Dashboard visas'` i utvecklarkonsolen varje gång dashboardsidan visas.

**Varför detta är viktigt:**
- **Möjliggör** exekvering av anpassad logik när specifika routes laddas
- **Ger** hooks för analys, loggning eller initialiseringskod
- **Skapar** en grund för mer komplexa routebeteenden
- **Demonstrerar** observermönstret inom webbutveckling

**Implementeringsmetod:**
- **Lägg till** en valfri callback-funktionsegenskap till routkonfigurationer
- **Exekvera** callback-funktionen (om den finns) efter att mallrenderingen är klar
- **Säkerställ** att funktionen fungerar för alla routes med definierad callback
- **Testa** att konsolmeddelandet visas vid besök på dashboard

## Bedömningskriterier

| Kriterier | Exemplariskt                                                                                                                          | Tillräckligt                                                                                                                                                                                  | Behöver förbättras                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|           | De två funktionerna är implementerade och fungerar. Titel och kodtillägg fungerar också för en ny route som läggs till i routdeklarationen. | De två funktionerna fungerar, men beteendet är hårdkodat och inte konfigurerbart via routdeklarationen. Att lägga till en tredje route med titel och kodtillägg fungerar inte eller fungerar delvis. | En av funktionerna saknas eller fungerar inte korrekt. |

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.