<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-26T22:51:18+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "da"
}
-->
# Carbon Trigger Browser-udvidelse: Færdig kode

Byg en browser-udvidelse, der fungerer som en påmindelse om, hvor meget energi der bruges i dit område, ved at spore strømforbruget med tmrow's CO2 Signal API. Ved at bruge denne udvidelse ad hoc kan du træffe beslutninger om dine aktiviteter baseret på denne information.

![extension screenshot](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.da.png)

## Kom godt i gang

Du skal have [npm](https://npmjs.com) installeret. Download en kopi af denne kode til en mappe på din computer.

Installer alle nødvendige pakker.

```
npm install
```

Byg udvidelsen med webpack.

```
npm run build
```

For at installere på Edge skal du finde "Udvidelser"-panelet via "tre prikker"-menuen øverst til højre i browseren. Derfra vælger du "Load Unpacked" og indlæser den nye udvidelse. Når du bliver bedt om det, skal du åbne "dist"-mappen, og udvidelsen vil blive indlæst. For at bruge den skal du have en API-nøgle til CO2 Signal API ([få en her via e-mail](https://www.co2signal.com/) - indtast din e-mail i boksen på siden) og en [kode for din region](http://api.electricitymap.org/v3/zones), som er kompatibel med [Electricity Map](https://www.electricitymap.org/map) (for eksempel bruges 'US-NEISO' i Boston).

![installing](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.da.png)

Når du har indtastet API-nøglen og din region i udvidelsens interface, vil en farvet prik vises i browserens udvidelsesbjælke. Denne prik ændrer farve for at afspejle energiforbruget i dit område og hjælper dig med at vurdere, hvilke aktiviteter der kræver energi, der er passende at udføre. Konceptet med dette "prik"-system blev inspireret af [Energy Lollipop extension](https://energylollipop.com/) for emissioner i Californien.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.