<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-26T22:49:52+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "no"
}
-->
# Nettleserutvidelse Carbon Trigger: Fullført kode

Ved å bruke CO2 Signal API fra tmrow for å spore strømforbruket, kan du lage en nettleserutvidelse som gir deg en påminnelse direkte i nettleseren om strømforbruket i ditt område. Bruken av denne ad hoc-utvidelsen hjelper deg med å ta beslutninger om aktivitetene dine basert på denne informasjonen.

![utvidelsesskjermbilde](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.no.png)

## Kom i gang

Du må ha [npm](https://npmjs.com) installert. Last ned en kopi av denne koden til en mappe på datamaskinen din.

Installer alle nødvendige pakker:

```
npm install
```

Bygg utvidelsen med webpack

```
npm run build
```

For å installere på Edge, bruk menyen med 'tre prikker' øverst til høyre i nettleseren for å finne panelet Utvidelser. Derfra velger du 'Last inn ukomprimert utvidelse' for å laste inn en ny utvidelse. Åpne mappen 'dist' når du blir bedt om det, og utvidelsen vil lastes inn. For å bruke den trenger du en API-nøkkel for CO2 Signal API ([få en her via e-post](https://www.co2signal.com/) - skriv inn e-posten din i feltet på denne siden) og [koden for ditt område](http://api.electricitymap.org/v3/zones) som tilsvarer [Elektrisitetskartet](https://www.electricitymap.org/map) (i Boston, for eksempel, bruker jeg 'US-NEISO').

![installasjon](../../../../../translated_images/install-on-edge.78634f02842c4828.no.png)

Når API-nøkkelen og regionen er lagt inn i utvidelsens grensesnitt, skal den fargede prikken i nettleserens utvidelseslinje endre seg for å gjenspeile energiforbruket i ditt område og gi deg en indikator på hvilke energikrevende aktiviteter det kan være passende å utføre. Konseptet bak dette 'prikk'-systemet ble inspirert av [utvidelsen Energy Lollipop](https://energylollipop.com/) for utslipp i California.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.