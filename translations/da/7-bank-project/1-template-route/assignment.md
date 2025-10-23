<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-23T22:07:34+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "da"
}
-->
# Forbedr Routing

## Instruktioner

Nu hvor du har bygget et grundlæggende routing-system, er det tid til at forbedre det med professionelle funktioner, der forbedrer brugeroplevelsen og giver bedre værktøjer til udviklere. Virkelige applikationer kræver mere end blot skift af skabeloner – de har brug for dynamiske sidetitler, livscyklus-hooks og udvidelige arkitekturer.

I denne opgave vil du udvide din routing-implementering med to essentielle funktioner, som ofte findes i produktionswebapplikationer. Disse forbedringer vil gøre din bankapp mere professionel og give et fundament for fremtidig funktionalitet.

Rute-deklarationen indeholder i øjeblikket kun skabelon-ID'et, der skal bruges. Men når en ny side vises, er der ofte behov for lidt mere. Lad os forbedre vores routing-implementering med to ekstra funktioner:

### Funktion 1: Dynamiske sidetitler
**Mål:** Giv titler til hver skabelon og opdater vinduets titel med denne nye titel, når skabelonen ændres.

**Hvorfor det er vigtigt:**
- **Forbedrer** brugeroplevelsen ved at vise beskrivende browserfanetitler
- **Øger** tilgængeligheden for skærmlæsere og hjælpemidler  
- **Giver** bedre bogmærkning og kontekst for browserhistorik
- **Følger** bedste praksis inden for professionel webudvikling

**Implementeringsmetode:**
- **Udvid** ruteobjektet til at inkludere titeloplysninger for hver rute
- **Modificer** funktionen `updateRoute()` til dynamisk at opdatere `document.title`
- **Test** at titler ændres korrekt, når der navigeres mellem skærme

### Funktion 2: Route Lifecycle Hooks  
**Mål:** Tilføj en mulighed for at køre noget kode efter skabelonen ændres. Vi ønsker at udskrive `'Dashboard vises'` i udviklerkonsollen hver gang dashboard-siden vises.

**Hvorfor det er vigtigt:**
- **Muliggør** udførelse af brugerdefineret logik, når specifikke ruter indlæses
- **Giver** hooks til analyse, logning eller initialiseringskode
- **Skaber** et fundament for mere komplekse ruteadfærd
- **Demonstrerer** observermønsteret i webudvikling

**Implementeringsmetode:**
- **Tilføj** en valgfri callback-funktion som egenskab til rute-konfigurationer
- **Udfør** callback-funktionen (hvis den er til stede) efter skabelonrendering er afsluttet
- **Sørg for** at funktionen virker for enhver rute med en defineret callback
- **Test** at konsolbeskeden vises, når dashboardet besøges

## Bedømmelseskriterier

| Kriterier | Fremragende                                                                                                                          | Tilstrækkelig                                                                                                                                                                                  | Kræver forbedring                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|           | De to funktioner er implementeret og fungerer. Titel og kodeudførelse fungerer også for en ny rute, der tilføjes i `routes`-deklarationen. | De to funktioner fungerer, men adfærden er hårdkodet og ikke konfigurerbar via `routes`-deklarationen. Tilføjelse af en tredje rute med titel og kodeudførelse fungerer ikke eller kun delvist. | En af funktionerne mangler eller fungerer ikke korrekt. |

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.