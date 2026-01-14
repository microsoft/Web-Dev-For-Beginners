<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-26T22:49:03+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "no"
}
-->
# Carbon Trigger Nettleserutvidelse: Fullstendig Kode

Ved å bruke CO2 Signal API fra tmrow for å overvåke strømforbruk, kan du bygge en nettleserutvidelse som gir deg varsler om hvor tungt strømforbruket er i ditt område. Å bruke denne utvidelsen kan hjelpe deg med å ta informerte valg om aktivitetene dine basert på denne informasjonen.

![skjermbilde av nettleserutvidelsen](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.no.png)

## Kom i Gang

Du må installere [npm](https://npmjs.com). Last ned en kopi av denne koden til en mappe på datamaskinen din.

Installer alle nødvendige pakker:

```
npm install
```

Bygg utvidelsen med webpack:

```
npm run build
```

For å installere i Edge, bruk menyen med 'tre prikker' øverst til høyre i nettleseren for å finne panelet Utvidelser. Derfra velger du 'Load Unpacked' for å laste inn en ny utvidelse. Åpne 'dist'-mappen når du blir bedt om det, og utvidelsen vil bli lastet inn. For å bruke den, trenger du en API-nøkkel for CO2 Signal API ([få en her via e-post](https://www.co2signal.com/) - skriv inn e-posten din i boksen på denne siden) og [koden for ditt område](http://api.electricitymap.org/v3/zones) som samsvarer med [Electricity Map](https://www.electricitymap.org/map) (i Boston, for eksempel, bruker jeg 'US-NEISO').

![laster ned](../../../../../translated_images/install-on-edge.78634f02842c4828.no.png)

Når API-nøkkelen og området er lagt inn i utvidelsens grensesnitt, vil en farget prikk i nettleserens utvidelseslinje endre seg for å reflektere energiforbruket i ditt område og gi deg anbefalinger om passende aktiviteter basert på dette. Konseptet bak dette 'prikk'-systemet ble inspirert av [Energy Lollipop nettleserutvidelsen](https://energylollipop.com/) for utslipp i California.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.