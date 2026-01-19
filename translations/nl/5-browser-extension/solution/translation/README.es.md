<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-27T20:52:03+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "nl"
}
-->
# Browserextensie Carbon Trigger: Volledige code

Met behulp van de CO2-signaal-API van tmrow om het elektriciteitsverbruik te volgen, maak je een browserextensie zodat je direct in je browser een herinnering hebt over het elektriciteitsverbruik in jouw regio. Het gebruik van deze ad-hocextensie helpt je om beslissingen te nemen over je activiteiten op basis van deze informatie.

![extensie screenshot](../../../../../translated_images/nl/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Aan de slag

Je moet [npm](https://npmjs.com) geïnstalleerd hebben. Download een kopie van deze code naar een map op je computer.

Installeer alle benodigde pakketten:

```
npm install
```

Bouw de extensie met webpack:

```
npm run build
```

Om de extensie in Edge te installeren, gebruik je het menu met de 'drie puntjes' in de rechterbovenhoek van de browser om het Extensiepaneel te vinden. Selecteer daar 'Uitgepakte extensie laden' om een nieuwe extensie te laden. Open de map 'dist' wanneer hierom wordt gevraagd, en de extensie wordt geladen. Om het te gebruiken, heb je een API-sleutel nodig voor de CO2 Signal API ([verkrijg er hier via e-mail een](https://www.co2signal.com/) - voer je e-mailadres in het veld op deze pagina in) en de [code voor jouw regio](http://api.electricitymap.org/v3/zones) die overeenkomt met de [Electricity Map](https://www.electricitymap.org/map) (in Boston gebruik ik bijvoorbeeld 'US-NEISO').

![installeren](../../../../../translated_images/nl/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Zodra de API-sleutel en de regio in de extensie-interface zijn ingevoerd, zou het gekleurde punt in de extensiebalk van de browser moeten veranderen om het energieverbruik in jouw regio weer te geven. Het geeft je een indicatie van welke activiteiten met een hoog energieverbruik geschikt zijn. Het concept achter dit "puntensysteem" is geïnspireerd door de [Energy Lollipop-extensie](https://energylollipop.com/) voor de emissies in Californië.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.