<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-26T22:31:04+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "sv"
}
-->
# Bygga en webbläsartillägg

Att bygga webbläsartillägg är ett roligt och intressant sätt att tänka på prestandan för dina appar samtidigt som du skapar en annan typ av webbresurs. Den här modulen innehåller lektioner om hur webbläsare fungerar och hur man distribuerar ett webbläsartillägg, hur man bygger ett formulär, anropar en API och använder lokal lagring, samt hur man bedömer prestandan för din webbplats och förbättrar den.

Du kommer att bygga ett webbläsartillägg som fungerar på Edge, Chrome och Firefox. Detta tillägg, som är som en miniwebbplats anpassad för en mycket specifik uppgift, kontrollerar [C02 Signal API](https://www.co2signal.com) för en given regions elförbrukning och koldioxidintensitet och ger en avläsning av regionens koldioxidavtryck.

Detta tillägg kan användas ad hoc av en användare när en API-nyckel och regionskod har matats in i ett formulär för att bestämma lokal elförbrukning och därmed erbjuda data som kan påverka en användares beslut om elförbrukning. Till exempel kan det vara bättre att skjuta upp att köra en torktumlare (en aktivitet med hög koldioxidintensitet) under en period med hög elförbrukning i din region.

### Ämnen

1. [Om webbläsaren](1-about-browsers/README.md)
2. [Formulär och lokal lagring](2-forms-browsers-local-storage/README.md)
3. [Bakgrundsuppgifter och prestanda](3-background-tasks-and-performance/README.md)

### Krediter

![ett grönt webbläsartillägg](../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.sv.png)

## Krediter

Idén till denna webbkoldioxidutlösare föreslogs av Asim Hussain, ledare på Microsoft för Green Cloud Advocacy-teamet och författare till [Green Principles](https://principles.green/). Det var ursprungligen ett [webbplatsprojekt](https://github.com/jlooper/green).

Strukturen för webbläsartillägget påverkades av [Adebola Adenirans COVID-tillägg](https://github.com/onedebos/covtension).

Konceptet bakom "punkt"-ikonsystemet föreslogs av ikonstrukturen för webbläsartillägget [Energy Lollipop](https://energylollipop.com/) för utsläpp i Kalifornien.

Dessa lektioner skrevs med ♥️ av [Jen Looper](https://www.twitter.com/jenlooper)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiserade översättningar kan innehålla fel eller inexaktheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.