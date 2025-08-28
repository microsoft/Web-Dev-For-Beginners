<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-26T22:47:23+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "da"
}
-->
# Carbon Trigger Browser Extension: Fuld Kode

Ved at bruge tmrow's CO2-signal API til at spore elforbrug, kan du oprette en browserudvidelse, der giver dig en påmindelse direkte i din browser om elforbruget i din region. Brug af denne ad hoc-udvidelse vil hjælpe dig med at træffe beslutninger om dine aktiviteter baseret på denne information.

![extension screenshot](../../../../../translated_images/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.da.png)

## Kom godt i gang

Du skal have [npm](https://npmjs.com) installeret. Download en kopi af denne kode til en mappe på din computer.

Installer alle nødvendige pakker:

```
npm install
```

Byg udvidelsen med webpack:

```
npm run build
```

For at installere i Edge skal du bruge menuen med 'tre prikker' i øverste højre hjørne af browseren for at finde panelet Udvidelser. Derfra skal du vælge 'Indlæs udpakket' for at tilføje en ny udvidelse. Åbn mappen 'dist', når du bliver bedt om det, og udvidelsen vil blive indlæst. For at bruge den skal du have en API-nøgle til CO2 Signal API ([få en her via e-mail](https://www.co2signal.com/) - indtast din e-mail i feltet på denne side) og koden for din region ([find den her](http://api.electricitymap.org/v3/zones)) svarende til [Electricity Map](https://www.electricitymap.org/map) (i Boston bruger jeg for eksempel 'US-NEISO').

![installing](../../../../../translated_images/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.da.png)

Når API-nøglen og regionen er indtastet i udvidelsens grænseflade, bør farvepunktet i browserens udvidelsesbjælke ændre sig for at afspejle energiforbruget i din region og give dig en indikator for, hvilke aktiviteter med højt energiforbrug der ville være passende for dig. Konceptet bag dette "punkt"-system blev inspireret af [Energy Lollipop-udvidelsen](https://energylollipop.com/) for Californiens emissioner.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.