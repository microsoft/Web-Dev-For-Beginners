<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-26T22:48:16+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "no"
}
-->
# Karbon Trigger Nettleserutvidelse: Fullført kode

Ved å bruke tmrow sin CO2 Signal API for å spore strømforbruk, bygger vi en nettleserutvidelse som gir deg en påminnelse om hvor belastet strømforbruket i ditt område er. Ved å bruke denne utvidelsen kan du ta beslutninger om aktivitetene dine basert på denne informasjonen.

![Utvidelse skjermbilde](../../../../../translated_images/no/extension-screenshot.0e7f5bfa110e92e3.webp)

## Kom i gang

Du må installere [npm](https://npmjs.com). Last ned en kopi av denne koden til en mappe på datamaskinen din.

Installer alle nødvendige pakker:

```
npm install
```

Bygg utvidelsen med webpack:

```
npm run build
```

For å installere på Edge, bruk 'tre prikker'-menyen øverst til høyre i nettleseren for å finne utvidelsespanelet. Derfra velger du 'Last inn upakket' for å laste inn en ny utvidelse. Åpne 'dist'-mappen ved prompten, og utvidelsen vil bli lastet inn. For å bruke den trenger du en API-nøkkel fra CO2 Signal ([få den via e-post her](https://www.co2snal.com/) - skriv inn e-posten din i boksen på denne siden) og [kode for ditt område](http://api.electricitymap.org/v3/zones) fra [Electricity Map](https://www.electricitymap.org/map) (for eksempel, i Boston bruker jeg 'US-NEISO').

![installering](../../../../../translated_images/no/install-on-edge.78634f02842c4828.webp)

Når API-nøkkelen og området er lagt inn i utvidelsesgrensesnittet, bør den fargede prikken i nettleserutvidelseslinjen endre seg for å reflektere energiforbruket i ditt område og gi deg en indikator på hvilke energiintensive aktiviteter som passer for deg. Konseptet bak dette 'prikk'-systemet ble inspirert av [Energy Lollipop Extension](https://energylollipop.com/) for utslipp i California.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.