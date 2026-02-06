# Nettleserutvidelsen Carbon Trigger: Fullstendig kode

Ved å bruke CO2 Signal API fra tmrow for å spore strømforbruk, kan du lage en nettleserutvidelse som gir deg en påminnelse direkte i nettleseren om strømforbruket i din region. Bruken av denne spesialtilpassede utvidelsen vil hjelpe deg med å ta beslutninger om aktivitetene dine basert på denne informasjonen.

![extension screenshot](../../../../../translated_images/no/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Komme i gang

Du må ha [npm](https://npmjs.com) installert. Last ned en kopi av denne koden til en mappe på datamaskinen din.

Installer alle nødvendige pakker:

```
npm install
```

Bygg utvidelsen med webpack:

```
npm run build
```

For å installere i Edge, bruk menyen med 'tre prikker' øverst til høyre i nettleseren for å finne utvidelsespanelet. Derfra velger du 'Last inn pakket ut' for å legge til en ny utvidelse. Åpne mappen 'dist' når du blir bedt om det, og utvidelsen vil bli lastet inn. For å bruke den trenger du en API-nøkkel for CO2 Signal API ([få en her via e-post](https://www.co2signal.com/) – skriv inn e-posten din i feltet på denne siden) og [koden for din region](http://api.electricitymap.org/v3/zones) som tilsvarer [Electricity Map](https://www.electricitymap.org/map) (i Boston, for eksempel, bruker jeg 'US-NEISO').

![installing](../../../../../translated_images/no/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Når API-nøkkelen og regionen er lagt inn i utvidelsens grensesnitt, skal fargepunktet i nettleserens utvidelseslinje endre seg for å gjenspeile energiforbruket i din region og gi deg en indikasjon på hvilke aktiviteter med høyt energiforbruk som kan være passende for deg. Konseptet bak dette "punkt"-systemet fikk jeg fra [Energy Lollipop-utvidelsen](https://energylollipop.com/) for utslipp i California.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.