<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-27T20:52:30+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "nl"
}
-->
# Carbon Trigger Browser-extensie: Voltooide Code

Met behulp van de CO2 Signal API van tmrow om het elektriciteitsverbruik te volgen, bouwen we een browser-extensie die je eraan herinnert hoe zwaar het elektriciteitsverbruik in jouw regio is. Door deze extensie te gebruiken, kun je op basis van deze informatie beslissingen nemen over je activiteiten.

![Extensie Screenshot](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.nl.png)

## Aan de slag

Je moet [npm](https://npmjs.com) installeren. Download een kopie van deze code naar een map op je computer.

Installeer alle benodigde pakketten:

```
npm install
```

Bouw de extensie met Webpack:

```
npm run build
```

Om te installeren in Edge, gebruik het 'drie-puntjes'-menu in de rechterbovenhoek van de browser om het extensiepaneel te vinden. Kies daar 'Ongepakte extensie laden'. Open de 'dist'-map in de prompt en de extensie wordt geladen. Om het te gebruiken, heb je een API-sleutel nodig voor de CO2 Signal API ([verkrijgbaar via e-mail hier](https://www.co2signal.com/) - voer je e-mailadres in het vak op die pagina in) en [de code voor jouw regio](http://api.electricitymap.org/v3/zones) van [Electricity Map](https://www.electricitymap.org/map) (bijvoorbeeld, in Boston gebruik ik 'US-NEISO').

![installeren](../../../../../translated_images/install-on-edge.78634f02842c4828.nl.png)

Zodra de API-sleutel en regio in de extensie-interface zijn ingevoerd, zou de gekleurde stip in de browser-extensiebalk moeten veranderen om het energieverbruik in jouw regio weer te geven. Dit geeft je een indicatie van welke energie-intensieve activiteiten geschikt zijn op dat moment. Het idee achter dit 'stip'-systeem is geïnspireerd door de [Energy Lollipop-extensie](https://energylollipop.com/) voor emissies in Californië.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.