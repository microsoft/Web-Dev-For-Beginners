<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-23T01:00:48+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "nl"
}
-->
# Code Refactoring en Documentatie Opdracht

## Leerdoelen

Door deze opdracht te voltooien, oefen je essentiële vaardigheden in softwareontwikkeling die professionele ontwikkelaars dagelijks gebruiken. Je leert code te organiseren voor onderhoudbaarheid, duplicatie te verminderen door abstractie, en je werk te documenteren voor toekomstige ontwikkelaars (inclusief jezelf!).

Schone, goed gedocumenteerde code is cruciaal voor echte webontwikkelingsprojecten waar meerdere ontwikkelaars samenwerken en codebases in de loop van de tijd evolueren.

## Overzicht van de Opdracht

Het `app.js`-bestand van je bankapp is aanzienlijk gegroeid met functionaliteiten zoals inloggen, registreren en het dashboard. Het is tijd om deze code te refactoren met professionele ontwikkelpraktijken om de leesbaarheid, onderhoudbaarheid en duplicatie te verbeteren.

## Instructies

Transformeer je huidige `app.js`-code door deze drie kerntechnieken voor refactoring toe te passen:

### 1. Extract Configuratieconstanten

**Taak**: Maak een configuratiesectie bovenaan je bestand met herbruikbare constanten.

**Implementatierichtlijnen:**
- Haal de basis-URL van de server-API (momenteel hardcoded op meerdere plaatsen) eruit
- Maak constanten voor foutmeldingen die in meerdere functies voorkomen
- Overweeg het extraheren van routepaden en element-ID's die herhaaldelijk worden gebruikt

**Voorbeeldstructuur:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Maak een Gecombineerde Request Functie

**Taak**: Bouw een herbruikbare `sendRequest()`-functie die dubbele code tussen `createAccount()` en `getAccount()` elimineert.

**Vereisten:**
- Ondersteun zowel GET- als POST-verzoeken
- Zorg voor correcte foutafhandeling
- Ondersteun verschillende URL-eindpunten
- Accepteer optionele gegevens voor de request body

**Richtlijnen voor de functiehandtekening:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Voeg Professionele Code Documentatie Toe

**Taak**: Documenteer je code met duidelijke, nuttige opmerkingen die het "waarom" achter je logica uitleggen.

**Documentatiestandaarden:**
- Voeg functiedocumentatie toe die het doel, de parameters en de retourwaarden uitlegt
- Voeg inline opmerkingen toe voor complexe logica of bedrijfsregels
- Groepeer gerelateerde functies met sectiekoppen
- Leg eventuele niet voor de hand liggende codepatronen of browser-specifieke oplossingen uit

**Voorbeeld documentatiestijl:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Succescriteria

Je gerefactoreerde code moet deze professionele ontwikkelpraktijken demonstreren:

### Uitmuntende Implementatie
- ✅ **Constanten**: Alle magische strings en URL's zijn geëxtraheerd naar duidelijk benoemde constanten
- ✅ **DRY-principe**: Gemeenschappelijke request-logica is geconsolideerd in een herbruikbare `sendRequest()`-functie
- ✅ **Documentatie**: Functies hebben duidelijke JSDoc-opmerkingen die het doel en de parameters uitleggen
- ✅ **Organisatie**: Code is logisch gegroepeerd met sectiekoppen en consistente opmaak
- ✅ **Foutafhandeling**: Verbeterde foutafhandeling met behulp van de nieuwe request-functie

### Voldoende Implementatie
- ✅ **Constanten**: De meeste herhaalde waarden zijn geëxtraheerd, met enkele kleine hardcoded waarden die overblijven
- ✅ **Factorisatie**: Basis `sendRequest()`-functie gemaakt, maar mogelijk niet alle randgevallen afgedekt
- ✅ **Opmerkingen**: Belangrijke functies zijn gedocumenteerd, hoewel sommige uitleg completer kan zijn
- ✅ **Leesbaarheid**: Code is over het algemeen goed georganiseerd met enkele verbeterpunten

### Verbetering Nodig
- ❌ **Constanten**: Veel magische strings en URL's blijven hardcoded in het bestand
- ❌ **Duplicatie**: Aanzienlijke code duplicatie blijft bestaan tussen vergelijkbare functies
- ❌ **Documentatie**: Ontbrekende of onvoldoende opmerkingen die het doel van de code niet uitleggen
- ❌ **Organisatie**: Code mist duidelijke structuur en logische groepering

## Testen van je Gerefactoreerde Code

Zorg ervoor dat je bankapp nog steeds correct functioneert na het refactoren:

1. **Test alle gebruikersstromen**: Registratie, inloggen, dashboardweergave en foutafhandeling
2. **Controleer API-aanroepen**: Bevestig dat je `sendRequest()`-functie werkt voor zowel accountcreatie als -opvraging
3. **Test foutscenario's**: Test met ongeldige inloggegevens en netwerkfouten
4. **Controleer console-uitvoer**: Zorg ervoor dat er geen nieuwe fouten zijn geïntroduceerd tijdens het refactoren

## Richtlijnen voor Inleveren

Lever je gerefactoreerde `app.js`-bestand in met:
- Duidelijke sectiekoppen die verschillende functionaliteiten organiseren
- Consistente codeopmaak en inspringing
- Volledige JSDoc-documentatie voor alle functies
- Een korte opmerking bovenaan waarin je je refactoringsaanpak uitlegt

**Bonusuitdaging**: Maak een eenvoudige codedocumentatiebestand (`CODE_STRUCTURE.md`) dat de architectuur van je app uitlegt en hoe de verschillende functies samenwerken.

## Verbinding met de Praktijk

Deze opdracht weerspiegelt het soort codeonderhoud dat professionele ontwikkelaars regelmatig uitvoeren. In de industrie:
- **Code reviews** beoordelen de leesbaarheid en onderhoudbaarheid, zoals in deze opdracht
- **Technische schuld** stapelt zich op wanneer code niet regelmatig wordt gerefactoreerd en gedocumenteerd
- **Teamwerk** is afhankelijk van duidelijke, goed gedocumenteerde code die nieuwe teamleden kunnen begrijpen
- **Bugfixes** zijn veel eenvoudiger in goed georganiseerde codebases met correcte abstracties

De vaardigheden die je hier oefent - constanten extraheren, duplicatie elimineren en duidelijke documentatie schrijven - zijn fundamenteel voor professionele softwareontwikkeling.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.