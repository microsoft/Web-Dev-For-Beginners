# Karbonutløser-nettleserutvidelse: Ferdig kode

Bygg en nettleserutvidelse som bruker tmrow sin CO2 Signal API for å spore strømforbruket i ditt område og vise det som en påminnelse i nettleseren. Ved å bruke denne utvidelsen kan du ta beslutninger om aktivitetene dine basert på denne informasjonen.

![utvidelse skjermbilde](../../../../../translated_images/no/extension-screenshot.0e7f5bfa110e92e3.webp)

## Kom i gang

Du må ha [npm](https://npmjs.com) installert. Last ned en kopi av denne koden til en mappe på datamaskinen din.

Installer alle nødvendige pakker.

```
npm install
```

Bygg utvidelsen med webpack.

```
npm run build
```

For å installere på Edge, finn "Utvidelser"-panelet via "tre prikker"-menyen øverst til høyre i nettleseren. Derfra velger du "Load Unpacked" for å laste inn den nye utvidelsen. Når du blir bedt om det, åpner du "dist"-mappen, og utvidelsen vil bli lastet inn. For å bruke den trenger du en API-nøkkel for CO2 Signal API ([få en her via e-post](https://www.co2signal.com/) - skriv inn e-posten din i boksen på denne siden) og en [kode for ditt område](http://api.electricitymap.org/v3/zones) som er kompatibel med [Electricity Map](https://www.electricitymap.org/map) (for eksempel bruker Boston 'US-NEISO').

![installering](../../../../../translated_images/no/install-on-edge.78634f02842c4828.webp)

Når du har lagt inn API-nøkkelen og området i utvidelsesgrensesnittet, vil en farget prikk vises i nettleserens utvidelseslinje. Denne prikken endrer farge for å reflektere energiforbruket i ditt område og gir deg en indikasjon på hvilke aktiviteter som krever energi det er passende å utføre. Konseptet med dette "prikk"-systemet ble inspirert av [Energy Lollipop-utvidelsen](https://energylollipop.com/) for utslipp i California.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.