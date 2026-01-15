<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-26T22:31:15+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "da"
}
-->
# Bygning af en browserudvidelse

At bygge browserudvidelser er en sjov og interessant måde at tænke over dine apps' ydeevne, samtidig med at du skaber en anden type webressource. Dette modul indeholder lektioner om, hvordan browsere fungerer, hvordan man implementerer en browserudvidelse, hvordan man bygger en formular, kalder et API og bruger lokal lagring, samt hvordan man vurderer og forbedrer ydeevnen på din hjemmeside.

Du vil bygge en browserudvidelse, der fungerer på Edge, Chrome og Firefox. Denne udvidelse, som er som et mini-websted skræddersyet til en meget specifik opgave, tjekker [C02 Signal API](https://www.co2signal.com) for en given regions elforbrug og CO2-intensitet og giver en vurdering af regionens CO2-aftryk.

Denne udvidelse kan bruges ad hoc af en bruger, når en API-nøgle og regionskode er indtastet i en formular, for at bestemme det lokale elforbrug og dermed give data, der kan påvirke brugerens beslutninger om elforbrug. For eksempel kan det være en fordel at udsætte brugen af en tørretumbler (en aktivitet med høj CO2-udledning) i perioder med højt elforbrug i din region.

### Emner

1. [Om browseren](1-about-browsers/README.md)
2. [Formularer og lokal lagring](2-forms-browsers-local-storage/README.md)
3. [Baggrundsopgaver og ydeevne](3-background-tasks-and-performance/README.md)

### Krediteringer

![en grøn browserudvidelse](../../../translated_images/da/extension-screenshot.0e7f5bfa110e92e3.png)

## Krediteringer

Idéen til denne webbaserede CO2-trigger blev foreslået af Asim Hussain, leder af Microsofts Green Cloud Advocacy-team og forfatter til [Green Principles](https://principles.green/). Det var oprindeligt et [webstedsprojekt](https://github.com/jlooper/green).

Strukturen af browserudvidelsen blev inspireret af [Adebola Adenirans COVID-udvidelse](https://github.com/onedebos/covtension).

Konceptet bag 'prik'-ikon-systemet blev foreslået af ikonstrukturen i [Energy Lollipop](https://energylollipop.com/) browserudvidelsen til Californiens emissioner.

Disse lektioner blev skrevet med ♥️ af [Jen Looper](https://www.twitter.com/jenlooper)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.