<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-26T22:50:22+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "sv"
}
-->
# Carbon Trigger-webbläsartillägg: kod för att komma igång

Signal C02-API från tmrow kommer att användas för att övervaka elförbrukningen och skapa ett webbläsartillägg så att du kan få en påminnelse direkt i din webbläsare om hur tung elförbrukningen är i din region. Användningen av detta skräddarsydda tillägg hjälper dig att bedöma dina aktiviteter baserat på denna information.

![skärmdump av tillägget](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.sv.png)

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

För att installera på Edge, använd menyn med "tre punkter" i det övre högra hörnet av webbläsaren för att hitta panelen Tillägg. Om det inte redan är aktiverat, slå på Utvecklarläge (längst ner till vänster). Välj "Ladda upp packat" för att ladda ett nytt tillägg. Öppna mappen "dist" vid prompten, och tillägget kommer att laddas. För att använda det behöver du en API-nyckel för CO2 Signal-API:t (du kan [få en via e-post här](https://www.co2signal.com/) - ange din e-postadress i rutan på den här sidan) och [koden för din region](http://api.electricitymap.org/v3/zones) som motsvarar [el-kartan](https://www.electricitymap.org/map) (i Boston, till exempel, "US-NEISO").

![installation](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.sv.png)

När API-nyckeln och regionen har angetts i tilläggets gränssnitt, bör den färgade punkten i webbläsartilläggsfältet ändras för att återspegla regionens energiförbrukning och ge en indikation på vilka aktiviteter med hög energiförbrukning som skulle vara lämpliga att utföra. Konceptet bakom detta "punkt"-system har inspirerats av [Energy Lollipop-tillägget](https://energylollipop.com/) för utsläpp i Kalifornien.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller brister. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.