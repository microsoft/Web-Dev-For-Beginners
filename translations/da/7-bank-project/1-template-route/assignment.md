<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-26T23:07:26+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "da"
}
-->
# Forbedr routing

## Instruktioner

Ruteerklæringen indeholder i øjeblikket kun skabelon-ID'et, der skal bruges. Men når en ny side vises, er der nogle gange brug for lidt mere. Lad os forbedre vores routing-implementering med to ekstra funktioner:

- Giv titler til hver skabelon og opdater vinduets titel med denne nye titel, når skabelonen ændres.
- Tilføj en mulighed for at køre noget kode efter skabelonen ændres. Vi vil udskrive `'Dashboard is shown'` i udviklerkonsollen hver gang dashboardsiden vises.

## Bedømmelseskriterier

| Kriterier | Fremragende                                                                                                                       | Tilstrækkelig                                                                                                                                                                             | Kræver Forbedring                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|           | De to funktioner er implementeret og fungerer. Titel og kodeeksekvering fungerer også for en ny rute tilføjet i `routes`-erklæringen. | De to funktioner fungerer, men adfærden er hardkodet og ikke konfigurerbar via `routes`-erklæringen. Tilføjelse af en tredje rute med titel og kodeeksekvering fungerer ikke eller kun delvist. | En af funktionerne mangler eller fungerer ikke korrekt. |

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.