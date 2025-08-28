<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-26T23:07:35+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "no"
}
-->
# Forbedre rutingen

## Instruksjoner

Ruteerklæringen inneholder for øyeblikket kun mal-ID-en som skal brukes. Men når en ny side vises, er det noen ganger behov for litt mer. La oss forbedre vår implementering av ruting med to ekstra funksjoner:

- Gi titler til hver mal og oppdater vindustittelen med denne nye tittelen når malen endres.
- Legg til et alternativ for å kjøre noe kode etter at malen endres. Vi ønsker å skrive ut `'Dashboard vises'` i utviklerkonsollen hver gang dashbordsiden vises.

## Vurderingskriterier

| Kriterier | Eksemplarisk                                                                                                                      | Tilfredsstillende                                                                                                                                                                        | Trenger forbedring                                     |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|           | De to funksjonene er implementert og fungerer. Tittel og kodekjøring fungerer også for en ny rute som legges til i `routes`-erklæringen. | De to funksjonene fungerer, men oppførselen er hardkodet og ikke konfigurerbar via `routes`-erklæringen. Å legge til en tredje rute med tittel og kodekjøring fungerer ikke eller fungerer delvis. | En av funksjonene mangler eller fungerer ikke riktig. |

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vennligst vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør betraktes som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.