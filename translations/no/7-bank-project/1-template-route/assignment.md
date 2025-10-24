<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-23T22:32:49+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "no"
}
-->
# Forbedre rutingen

## Instruksjoner

Nå som du har bygget et grunnleggende rutingssystem, er det på tide å forbedre det med profesjonelle funksjoner som forbedrer brukeropplevelsen og gir bedre verktøy for utviklere. Virkelige applikasjoner trenger mer enn bare malbytte – de krever dynamiske sidetitler, livssyklus-hooks og utvidbare arkitekturer.

I denne oppgaven skal du utvide rutingsimplementasjonen din med to essensielle funksjoner som ofte finnes i produksjonsklare webapplikasjoner. Disse forbedringene vil gjøre bankappen din mer polert og gi et grunnlag for fremtidig funksjonalitet.

Ruteerklæringen inneholder for øyeblikket kun mal-ID-en som skal brukes. Men når en ny side vises, trengs det ofte litt mer. La oss forbedre rutingsimplementasjonen vår med to ekstra funksjoner:

### Funksjon 1: Dynamiske sidetitler
**Mål:** Gi titler til hver mal og oppdater vindustittelen med denne nye tittelen når malen endres.

**Hvorfor dette er viktig:**
- **Forbedrer** brukeropplevelsen ved å vise beskrivende nettleserfanetitler
- **Øker** tilgjengeligheten for skjermlesere og hjelpemiddelteknologier  
- **Gir** bedre bokmerke- og nettleserhistorikkontekst
- **Følger** profesjonelle beste praksiser for webutvikling

**Implementeringsmetode:**
- **Utvid** ruteobjektet til å inkludere tittelinformasjon for hver rute
- **Endre** `updateRoute()`-funksjonen for å oppdatere `document.title` dynamisk
- **Test** at titlene endres riktig når du navigerer mellom skjermene

### Funksjon 2: Livssyklus-hooks for ruter  
**Mål:** Legg til en mulighet for å kjøre kode etter at malen er endret. Vi ønsker å skrive ut `'Dashboard vises'` i utviklerkonsollen hver gang dashbordsiden vises.

**Hvorfor dette er viktig:**
- **Muliggjør** kjøring av tilpasset logikk når spesifikke ruter lastes
- **Gir** hooks for analyse, logging eller initialiseringskode
- **Skaper** et grunnlag for mer komplekse rutebehaviorer
- **Demonstrerer** observermønsteret i webutvikling

**Implementeringsmetode:**
- **Legg til** en valgfri callback-funksjon som en egenskap i ruteoppsettet
- **Utfør** callback-funksjonen (hvis tilstede) etter at malrenderingen er fullført
- **Sørg for** at funksjonen fungerer for enhver rute med en definert callback
- **Test** at konsollmeldingen vises når du besøker dashbordet

## Vurderingskriterier

| Kriterier | Eksemplarisk                                                                                                                          | Tilfredsstillende                                                                                                                                                                                  | Trenger forbedring                                       |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|           | De to funksjonene er implementert og fungerer. Tittel og kodekjøring fungerer også for en ny rute som legges til i `routes`-erklæringen. | De to funksjonene fungerer, men oppførselen er hardkodet og ikke konfigurerbar via `routes`-erklæringen. Å legge til en tredje rute med tittel og kodekjøring fungerer ikke eller fungerer delvis. | En av funksjonene mangler eller fungerer ikke som den skal. |

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.