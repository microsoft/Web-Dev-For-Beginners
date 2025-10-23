<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2025-10-23T01:08:02+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "nl"
}
-->
# Adopteer een API

## Overzicht

API's bieden eindeloze mogelijkheden voor creatieve webontwikkeling! In deze opdracht kies je een externe API en bouw je een browserextensie die een echt probleem oplost of waardevolle functionaliteit biedt aan gebruikers.

## Instructies

### Stap 1: Kies je API
Selecteer een API uit deze samengestelde [lijst van gratis openbare API's](https://github.com/public-apis/public-apis). Overweeg de volgende categorieën:

**Populaire opties voor beginners:**
- **Entertainment**: [Dog CEO API](https://dog.ceo/dog-api/) voor willekeurige hondenfoto's
- **Weer**: [OpenWeatherMap](https://openweathermap.org/api) voor actuele weersgegevens
- **Quotes**: [Quotable API](https://quotable.io/) voor inspirerende citaten
- **Nieuws**: [NewsAPI](https://newsapi.org/) voor actuele krantenkoppen
- **Leuke feiten**: [Numbers API](http://numbersapi.com/) voor interessante feiten over getallen

### Stap 2: Plan je extensie
Beantwoord deze planningsvragen voordat je begint met coderen:
- Welk probleem lost jouw extensie op?
- Wie is jouw doelgroep?
- Welke gegevens sla je op in de lokale opslag?
- Hoe ga je om met API-fouten of limieten?

### Stap 3: Bouw je extensie
Je extensie moet de volgende onderdelen bevatten:

**Vereiste functies:**
- Formulierinvoer voor eventuele benodigde API-parameters
- API-integratie met correcte foutafhandeling
- Lokale opslag voor gebruikersvoorkeuren of API-sleutels
- Een schone, responsieve gebruikersinterface
- Laadstatussen en gebruikersfeedback

**Codevereisten:**
- Gebruik moderne JavaScript (ES6+) functies
- Implementeer async/await voor API-aanroepen
- Voeg correcte foutafhandeling toe met try/catch-blokken
- Voeg betekenisvolle opmerkingen toe die je code uitleggen
- Volg een consistente code-indeling

### Stap 4: Test en verfijn
- Test je extensie met verschillende invoer
- Behandel randgevallen (geen internet, ongeldige API-reacties)
- Zorg ervoor dat je extensie werkt na het opnieuw opstarten van de browser
- Voeg gebruiksvriendelijke foutmeldingen toe

## Bonusuitdagingen

Til je extensie naar een hoger niveau:
- Voeg meerdere API-eindpunten toe voor uitgebreidere functionaliteit
- Implementeer gegevenscaching om API-aanroepen te verminderen
- Maak sneltoetsen voor veelvoorkomende acties
- Voeg functies toe voor het exporteren/importeren van gegevens
- Implementeer opties voor gebruikersaanpassing

## Inleververeisten

1. **Werkende browserextensie** die succesvol integreert met de gekozen API
2. **README-bestand** met uitleg:
   - Welke API je hebt gekozen en waarom
   - Hoe je de extensie installeert en gebruikt
   - Eventuele vereiste API-sleutels of instellingen
   - Screenshots van je werkende extensie
3. **Schone, becommentarieerde code** die moderne JavaScript-praktijken volgt

## Beoordelingscriteria

| Criteria | Uitmuntend (90-100%) | Voldoende (80-89%) | Ontwikkelend (70-79%) | Beginnend (60-69%) |
|----------|----------------------|--------------------|-----------------------|--------------------|
| **API-integratie** | Perfecte API-integratie met uitgebreide foutafhandeling en randgevallenbeheer | Succesvolle API-integratie met basisfoutafhandeling | API werkt, maar heeft beperkte foutafhandeling | API-integratie heeft aanzienlijke problemen |
| **Codekwaliteit** | Schone, goed becommentarieerde moderne JavaScript volgens best practices | Goede code structuur met voldoende opmerkingen | Code werkt, maar kan beter georganiseerd worden | Slechte codekwaliteit met minimale opmerkingen |
| **Gebruikerservaring** | Gepolijste interface met uitstekende laadstatussen en gebruikersfeedback | Goede interface met basisgebruikersfeedback | Basisinterface die voldoende functioneert | Slechte gebruikerservaring met verwarrende interface |
| **Lokale opslag** | Geavanceerd gebruik van lokale opslag met gegevensvalidatie en beheer | Correcte implementatie van lokale opslag voor belangrijke functies | Basisimplementatie van lokale opslag | Minimale of incorrecte toepassing van lokale opslag |
| **Documentatie** | Uitgebreide README met installatie-instructies en screenshots | Goede documentatie die de meeste vereisten dekt | Basisdocumentatie met enkele ontbrekende details | Slechte of ontbrekende documentatie |

## Tips om te beginnen

1. **Begin eenvoudig**: Kies een API die geen complexe authenticatie vereist
2. **Lees de documentatie**: Begrijp de eindpunten en reacties van je gekozen API grondig
3. **Plan je UI**: Schets de interface van je extensie voordat je begint met coderen
4. **Test regelmatig**: Bouw stapsgewijs en test elke functie terwijl je deze toevoegt
5. **Behandel fouten**: Ga er altijd van uit dat API-aanroepen kunnen mislukken en plan hierop vooruit

## Bronnen

- [Browserextensie Documentatie](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Fetch API Gids](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Lokale opslag Tutorial](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [JSON Parsing en Handling](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Veel plezier met het bouwen van iets nuttigs en creatiefs! 🚀

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.