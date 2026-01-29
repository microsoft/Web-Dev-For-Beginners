# Carbon Trigger Browserudvidelse: Færdiggjort kode

Ved hjælp af tmrow's CO2 Signal API til at overvåge elforbrug, kan du oprette en browserudvidelse, der giver dig en påmindelse direkte i din browser om elforbruget i dit område. Brug af denne ad hoc-udvidelse kan hjælpe dig med at træffe beslutninger om dine aktiviteter baseret på disse oplysninger.

![udvidelsesbillede](../../../../../translated_images/da/extension-screenshot.0e7f5bfa110e92e3.webp)

## Kom godt i gang

Du skal have [npm](https://npmjs.com) installeret. Download en kopi af denne kode til en mappe på din computer.

Installer alle nødvendige pakker:

```
npm install
```

Byg udvidelsen med webpack

```
npm run build
```

For at installere på Edge skal du bruge menuen med 'tre prikker' i øverste højre hjørne af browseren for at finde panelet Udvidelser. Derfra vælger du 'Indlæs udvidelse uden komprimering' for at tilføje en ny udvidelse. Åbn mappen 'dist' ved prompten, og udvidelsen vil blive indlæst. For at bruge den skal du have en API-nøgle til CO2 Signal API ([få en her via e-mail](https://www.co2signal.com/) - indtast din e-mail i feltet på denne side) og [koden for din region](http://api.electricitymap.org/v3/zones), som svarer til [Electricity Map](https://www.electricitymap.org/map) (i Boston, for eksempel, bruger jeg 'US-NEISO').

![installation](../../../../../translated_images/da/install-on-edge.78634f02842c4828.webp)

Når API-nøglen og regionen er indtastet i udvidelsens interface, bør den farvede prik i browserens udvidelsesbjælke ændre sig for at afspejle energiforbruget i dit område og give dig en indikator for, hvilke energikrævende aktiviteter det ville være passende at udføre. Konceptet bag dette 'prik'-system blev inspireret af [Energy Lollipop-udvidelsen](https://energylollipop.com/) for californiske emissioner.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.