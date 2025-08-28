<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-26T22:49:36+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "sv"
}
-->
# Carbon Trigger-webbläsartillägg: Färdig kod

Med hjälp av tmrows API C02 Signal för att spåra elförbrukning, skapa ett webbläsartillägg så att du kan få en påminnelse direkt i din webbläsare om elförbrukningen i ditt område. Att använda detta tillägg kan hjälpa dig att fatta beslut om dina aktiviteter baserat på denna information.

![tilläggsskärmdump](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.sv.png)

## Kom igång

Du behöver ha [npm](https://npmjs.com) installerat. Ladda ner en kopia av denna kod till en mapp på din dator.

Installera alla nödvändiga paket:

```
npm install
```

Bygg tillägget med webpack:

```
npm run build
```

För att installera på Edge, använd menyn med 'tre punkter' i det övre högra hörnet av webbläsaren för att hitta panelen Tillägg. Därifrån väljer du 'Ladda upp okomprimerat tillägg' för att lägga till ett nytt tillägg. Öppna mappen 'dist' när du blir ombedd, och tillägget kommer att laddas. För att använda det behöver du en API-nyckel för CO2 Signal API ([skaffa en via e-post här](https://www.co2signal.com/) - ange din e-postadress i rutan på den här sidan) och [koden för din region](http://api.electricitymap.org/v3/zones) som motsvarar [Electricity Map](https://www.electricitymap.org/map) (i Boston, till exempel, använder jag 'US-NEISO').

![installation](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.sv.png)

När API-nyckeln och regionen har angetts i tilläggets gränssnitt, bör den färgade punkten i webbläsarens tilläggsfält ändras för att återspegla energiförbrukningen i ditt område och ge dig en indikator på vilka energikrävande aktiviteter som kan vara lämpliga att utföra. Konceptet bakom detta 'punkt'-system inspirerades av [Energy Lollipop-tillägget](https://energylollipop.com/) för utsläpp i Kalifornien.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiska översättningar kan innehålla fel eller inexaktheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.