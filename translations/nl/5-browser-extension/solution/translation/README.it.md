<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-27T20:53:56+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "nl"
}
-->
# Carbon Trigger Browserextensie: Code om te Starten

We zullen de Signal CO2 API van tmrow gebruiken om het elektriciteitsverbruik te monitoren en een browserextensie te maken. Zo kun je direct in je browser een herinnering krijgen over hoe zwaar het elektriciteitsverbruik in jouw regio is. Het gebruik van deze op maat gemaakte extensie helpt je om je activiteiten te evalueren op basis van deze informatie.

![screenshot van de extensie](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.nl.png)

## Aan de Slag

Zorg ervoor dat [npm](https://npmjs.com) is geïnstalleerd. Download een kopie van deze code naar een map op je computer.

Installeer alle vereiste pakketten:

```
npm install
```

Maak de extensie met webpack:

```
npm run build
```

Om de extensie in Edge te installeren, gebruik je het menu met de "drie puntjes" in de rechterbovenhoek van de browser om het Extensies-paneel te vinden. Als het nog niet is ingeschakeld, zet dan de Ontwikkelaarsmodus aan (linksonder). Selecteer "Uitgepakte extensie laden" om een nieuwe extensie te laden. Open de map "dist" in het prompt, en de extensie wordt geladen. Om het te gebruiken, heb je een API-sleutel nodig voor de CO2 Signal API (je kunt er [hier via e-mail een krijgen](https://www.co2signal.com/) - voer je e-mailadres in het veld op deze pagina in) en de [code voor jouw regio](http://api.electricitymap.org/v3/zones) die overeenkomt met de [elektriciteitskaart](https://www.electricitymap.org/map) (bijvoorbeeld, in Boston is dat "US-NEISO").

![installatie](../../../../../translated_images/install-on-edge.78634f02842c4828.nl.png)

Zodra de API-sleutel en de regio zijn ingevoerd in de interface van de extensie, zou het gekleurde puntje in de browserextensiebalk moeten veranderen om het energieverbruik van de regio weer te geven. Het biedt ook een aanwijzing over welke energie-intensieve activiteiten geschikt zijn om uit te voeren. Het concept achter dit "puntensysteem" is geïnspireerd door de [Energy Lollipop-extensie](https://energylollipop.com/) voor emissies in Californië.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.