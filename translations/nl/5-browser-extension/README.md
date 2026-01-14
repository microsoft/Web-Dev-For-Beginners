<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-27T20:42:44+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "nl"
}
-->
# Een browserextensie bouwen

Het bouwen van browserextensies is een leuke en interessante manier om na te denken over de prestaties van je apps terwijl je een ander type webasset ontwikkelt. Deze module bevat lessen over hoe browsers werken, hoe je een browserextensie implementeert, hoe je een formulier bouwt, een API aanroept, lokale opslag gebruikt, en hoe je de prestaties van je website kunt beoordelen en verbeteren.

Je gaat een browserextensie bouwen die werkt op Edge, Chrome en Firefox. Deze extensie, die lijkt op een mini-website die is afgestemd op een zeer specifieke taak, controleert de [C02 Signal API](https://www.co2signal.com) voor het elektriciteitsverbruik en de koolstofintensiteit van een bepaalde regio, en geeft een meting van de koolstofvoetafdruk van die regio.

Deze extensie kan ad hoc door een gebruiker worden opgeroepen zodra een API-sleutel en regiocode zijn ingevoerd in een formulier om het lokale elektriciteitsverbruik te bepalen. Hierdoor kan data worden aangeboden die de elektriciteitskeuzes van een gebruiker kunnen beïnvloeden. Bijvoorbeeld, het kan beter zijn om het gebruik van een wasdroger (een koolstofintensieve activiteit) uit te stellen tijdens een periode van hoog elektriciteitsverbruik in jouw regio.

### Onderwerpen

1. [Over de browser](1-about-browsers/README.md)
2. [Formulieren en lokale opslag](2-forms-browsers-local-storage/README.md)
3. [Achtergrondtaken en prestaties](3-background-tasks-and-performance/README.md)

### Credits

![een groene browserextensie](../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.nl.png)

## Credits

Het idee voor deze web carbon trigger werd aangedragen door Asim Hussain, leider bij Microsoft van het Green Cloud Advocacy-team en auteur van de [Green Principles](https://principles.green/). Het was oorspronkelijk een [websiteproject](https://github.com/jlooper/green).

De structuur van de browserextensie is beïnvloed door [Adebola Adeniran's COVID-extensie](https://github.com/onedebos/covtension).

Het concept achter het 'dot'-icoonsysteem werd voorgesteld door de icoonstructuur van de [Energy Lollipop](https://energylollipop.com/) browserextensie voor emissies in Californië.

Deze lessen zijn geschreven met ♥️ door [Jen Looper](https://www.twitter.com/jenlooper)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we ons best doen om nauwkeurigheid te waarborgen, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.