<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-26T22:47:12+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "sv"
}
-->
# Webbläsartillägg Carbon Trigger: Komplett kod

Med hjälp av tmrows CO2-signal-API för att spåra elförbrukning kan du skapa ett webbläsartillägg som ger dig en påminnelse direkt i din webbläsare om elförbrukningen i din region. Att använda detta ad hoc-tillägg hjälper dig att fatta beslut om dina aktiviteter baserat på denna information.

![extension screenshot](../../../../../translated_images/sv/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Komma igång

Du behöver ha [npm](https://npmjs.com) installerat. Ladda ner en kopia av denna kod till en mapp på din dator.

Installera alla nödvändiga paket:

```
npm install
```

Bygg tillägget med webpack:

```
npm run build
```

För att installera i Edge, använd menyn med 'tre punkter' i det övre högra hörnet av webbläsaren för att hitta panelen Tillägg. Därifrån väljer du 'Ladda upp packat' för att ladda ett nytt tillägg. Öppna mappen 'dist' när du blir ombedd, så laddas tillägget. För att använda det behöver du en API-nyckel för CO2-signal-API:t ([få en här via e-post](https://www.co2signal.com/) - ange din e-postadress i rutan på denna sida) och [koden för din region](http://api.electricitymap.org/v3/zones) som motsvarar [Electricity Map](https://www.electricitymap.org/map) (i Boston, till exempel, använder jag 'US-NEISO').

![installing](../../../../../translated_images/sv/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

När API-nyckeln och regionen har angetts i tilläggets gränssnitt, bör färgpunkten i webbläsarens tilläggsfält ändras för att återspegla energiförbrukningen i din region och ge dig en indikation på vilka högenergikrävande aktiviteter som är lämpliga för dig. Konceptet bakom detta "punkt"-system fick jag från [Energy Lollipop-tillägget](https://energylollipop.com/) för utsläpp i Kalifornien.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.