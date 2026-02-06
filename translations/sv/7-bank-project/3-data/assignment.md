# Uppgift: Omstrukturering av kod och dokumentation

## Lärandemål

Genom att slutföra denna uppgift kommer du att öva på viktiga färdigheter inom mjukvaruutveckling som professionella utvecklare använder dagligen. Du kommer att lära dig att organisera kod för bättre underhåll, minska duplicering genom abstraktion och dokumentera ditt arbete för framtida utvecklare (inklusive dig själv!).

Ren och väl dokumenterad kod är avgörande för verkliga webbprojekt där flera utvecklare samarbetar och kodbaser utvecklas över tid.

## Uppgiftsöversikt

Din bankapps `app.js`-fil har vuxit avsevärt med funktioner för inloggning, registrering och dashboard. Det är dags att omstrukturera denna kod med professionella utvecklingsmetoder för att förbättra läsbarhet, underhåll och minska duplicering.

## Instruktioner

Omstrukturera din nuvarande `app.js`-kod genom att implementera dessa tre kärntekniker för omstrukturering:

### 1. Extrahera konfigurationskonstanter

**Uppgift**: Skapa en konfigurationssektion högst upp i filen med återanvändbara konstanter.

**Vägledning för implementering:**
- Extrahera serverns API-bas-URL (som för närvarande är hårdkodad på flera ställen)
- Skapa konstanter för felmeddelanden som förekommer i flera funktioner
- Överväg att extrahera routvägar och element-ID:n som används upprepade gånger

**Exempelstruktur:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Skapa en enhetlig begärandefunktion

**Uppgift**: Bygg en återanvändbar `sendRequest()`-funktion som eliminerar duplicerad kod mellan `createAccount()` och `getAccount()`.

**Krav:**
- Hantera både GET- och POST-begäranden
- Inkludera korrekt felhantering
- Stöd olika URL-slutpunkter
- Acceptera valfria data för begärandekroppen

**Vägledning för funktionssignatur:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Lägg till professionell koddokumentation

**Uppgift**: Dokumentera din kod med tydliga och hjälpsamma kommentarer som förklarar "varför" bakom din logik.

**Dokumentationsstandarder:**
- Lägg till funktionsdokumentation som förklarar syfte, parametrar och returvärden
- Inkludera inline-kommentarer för komplex logik eller affärsregler
- Gruppera relaterade funktioner tillsammans med sektionsrubriker
- Förklara eventuella icke-uppenbara kodmönster eller webbläsarspecifika lösningar

**Exempel på dokumentationsstil:**
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

## Framgångskriterier

Din omstrukturerade kod bör demonstrera dessa professionella utvecklingsmetoder:

### Exemplariskt genomförande
- ✅ **Konstanter**: Alla magiska strängar och URL:er är extraherade till tydligt namngivna konstanter
- ✅ **DRY-principen**: Gemensam begärandelogik är konsoliderad i en återanvändbar `sendRequest()`-funktion
- ✅ **Dokumentation**: Funktioner har tydliga JSDoc-kommentarer som förklarar syfte och parametrar
- ✅ **Organisation**: Koden är logiskt grupperad med sektionsrubriker och konsekvent formatering
- ✅ **Felhantering**: Förbättrad felhantering med den nya begärandefunktionen

### Tillräckligt genomförande
- ✅ **Konstanter**: De flesta upprepade värden är extraherade, med mindre hårdkodade värden kvar
- ✅ **Faktorisering**: Grundläggande `sendRequest()`-funktion skapad men kanske inte hanterar alla kantfall
- ✅ **Kommentarer**: Nyckelfunktioner är dokumenterade, även om vissa förklaringar kan vara mer kompletta
- ✅ **Läsbarhet**: Koden är generellt välorganiserad med vissa förbättringsområden

### Behöver förbättras
- ❌ **Konstanter**: Många magiska strängar och URL:er förblir hårdkodade i hela filen
- ❌ **Duplicering**: Betydande kodduplicering kvarstår mellan liknande funktioner
- ❌ **Dokumentation**: Saknade eller otillräckliga kommentarer som inte förklarar kodens syfte
- ❌ **Organisation**: Koden saknar tydlig struktur och logisk gruppering

## Testa din omstrukturerade kod

Efter omstrukturering, säkerställ att din bankapp fortfarande fungerar korrekt:

1. **Testa alla användarflöden**: Registrering, inloggning, dashboard-visning och felhantering
2. **Verifiera API-anrop**: Bekräfta att din `sendRequest()`-funktion fungerar för både kontoskapande och hämtning
3. **Kontrollera felscenarier**: Testa med ogiltiga inloggningsuppgifter och nätverksfel
4. **Granska konsolutdata**: Säkerställ att inga nya fel introducerades under omstruktureringen

## Inlämningsriktlinjer

Skicka in din omstrukturerade `app.js`-fil med:
- Tydliga sektionsrubriker som organiserar olika funktioner
- Konsekvent kodformatering och indragning
- Komplett JSDoc-dokumentation för alla funktioner
- En kort kommentar högst upp som förklarar din omstruktureringsmetod

**Bonusutmaning**: Skapa en enkel koddokumentationsfil (`CODE_STRUCTURE.md`) som förklarar din apps arkitektur och hur de olika funktionerna samverkar.

## Koppling till verkligheten

Denna uppgift speglar den typ av kodunderhåll som professionella utvecklare regelbundet utför. I branschen:
- **Kodgranskningar** utvärderar läsbarhet och underhållbarhet, precis som denna uppgift
- **Teknisk skuld** ackumuleras när kod inte regelbundet omstruktureras och dokumenteras
- **Teamsamarbete** är beroende av tydlig, väl dokumenterad kod som nya teammedlemmar kan förstå
- **Felsökning** är mycket enklare i välorganiserade kodbaser med korrekta abstraktioner

De färdigheter du övar på här - att extrahera konstanter, eliminera duplicering och skriva tydlig dokumentation - är grundläggande för professionell mjukvaruutveckling.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.