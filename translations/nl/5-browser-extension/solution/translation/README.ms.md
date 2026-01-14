<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-27T20:52:57+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "nl"
}
-->
# Carbon Trigger Browserextensie: Volledige Code

Gebruik de CO2 Signal API van tmrow om het elektriciteitsverbruik te monitoren en bouw een browserextensie waarmee je waarschuwingen kunt ontvangen over hoe zwaar het elektriciteitsverbruik in jouw regio is. Het gebruik van deze extensie helpt je om je activiteiten beter af te stemmen op deze informatie.

![screenshot van browserextensie](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.nl.png)

## Aan de Slag

Je moet [npm](https://npmjs.com) installeren. Download een kopie van deze code naar een map op je computer.

Installeer alle benodigde pakketten:

```
npm install
```

Bouw de extensie met webpack:

```
npm run build
```

Om de extensie in Edge te installeren, gebruik je het menu met de 'drie puntjes' in de rechterbovenhoek van de browser om het Extensies-paneel te vinden. Kies daar 'Load Unpacked' om een nieuwe extensie te laden. Open de 'dist'-map wanneer hierom wordt gevraagd en de extensie wordt geladen. Om de extensie te gebruiken, heb je een API-sleutel nodig voor de CO2 Signal API ([verkrijg er een via e-mail hier](https://www.co2signal.com/) - voer je e-mailadres in het veld op deze pagina in) en [de code voor jouw regio](http://api.electricitymap.org/v3/zones) die overeenkomt met [Electricity Map](https://www.electricitymap.org/map) (in Boston gebruik ik bijvoorbeeld 'US-NEISO').

![bezig met downloaden](../../../../../translated_images/install-on-edge.78634f02842c4828.nl.png)

Zodra de API-sleutel en regio zijn ingevoerd in de interface van de extensie, zal de gekleurde stip in de browserextensiebalk veranderen om het energieverbruik in jouw regio weer te geven en je een indicatie geven van welke zware activiteiten geschikt zijn om te doen. Het idee achter dit 'stip'-systeem is geïnspireerd door [de Energy Lollipop browserextensie](https://energylollipop.com/) voor de uitstoot in Californië.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.