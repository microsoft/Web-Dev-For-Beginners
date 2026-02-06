# Carbon Trigger Browser Extension: Färdig Kod

Använd tmrow:s C02 Signal API för att spåra elförbrukning och bygg en webbläsartillägg så att du kan få en påminnelse direkt i din webbläsare om hur tung elförbrukningen är i din region. Genom att använda detta tillägg spontant kan du fatta beslut om dina aktiviteter baserat på denna information.

![extension screenshot](../../../../translated_images/sv/extension-screenshot.0e7f5bfa110e92e3.webp)

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

För att installera på Edge, använd menyn med 'tre punkter' i det övre högra hörnet av webbläsaren för att hitta panelen för Tillägg. Därifrån väljer du 'Ladda upp packat' för att ladda ett nytt tillägg. Öppna mappen 'dist' när du blir ombedd, och tillägget kommer att laddas. För att använda det behöver du en API-nyckel för CO2 Signal:s API ([skaffa en här via e-post](https://www.co2signal.com/) - ange din e-post i rutan på denna sida) och koden för din region ([hitta den här](http://api.electricitymap.org/v3/zones)) som motsvarar [Electricity Map](https://www.electricitymap.org/map) (i Boston, till exempel, använder jag 'US-NEISO').

![installing](../../../../translated_images/sv/install-on-edge.78634f02842c4828.webp)

När API-nyckeln och regionen har angetts i tilläggets gränssnitt, bör den färgade pricken i webbläsartilläggsfältet ändras för att återspegla din regions energiförbrukning och ge dig en indikation på vilka energikrävande aktiviteter som är lämpliga att utföra. Konceptet bakom detta 'prick'-system fick jag från [Energy Lollipop-tillägget](https://energylollipop.com/) för utsläpp i Kalifornien.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiska översättningar kan innehålla fel eller inexaktheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.