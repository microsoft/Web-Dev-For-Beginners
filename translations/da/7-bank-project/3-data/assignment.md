# Opgave om kodeomstrukturering og dokumentation

## Læringsmål

Ved at gennemføre denne opgave vil du øve essentielle softwareudviklingsfærdigheder, som professionelle udviklere bruger dagligt. Du vil lære at organisere kode for bedre vedligeholdelse, reducere duplikation gennem abstraktion og dokumentere dit arbejde for fremtidige udviklere (inklusive dig selv!).

Ren og vel-dokumenteret kode er afgørende for virkelige webudviklingsprojekter, hvor flere udviklere samarbejder, og kodebaser udvikler sig over tid.

## Opgaveoversigt

Din bankapps `app.js`-fil er vokset betydeligt med login-, registrerings- og dashboard-funktionalitet. Det er tid til at omstrukturere denne kode ved hjælp af professionelle udviklingsmetoder for at forbedre læsbarhed, vedligeholdelse og reducere duplikation.

## Instruktioner

Omstrukturer din nuværende `app.js`-kode ved at implementere disse tre kerneomstruktureringsmetoder:

### 1. Uddrag konfigurationskonstanter

**Opgave**: Opret en konfigurationssektion øverst i din fil med genanvendelige konstanter.

**Implementeringsvejledning:**
- Uddrag serverens API-base-URL (som i øjeblikket er hardkodet flere steder)
- Opret konstanter for fejlmeddelelser, der vises i flere funktioner
- Overvej at udtrække ruteveje og element-ID'er, der bruges gentagne gange

**Eksempelstruktur:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Opret en samlet forespørgselsfunktion

**Opgave**: Byg en genanvendelig `sendRequest()`-funktion, der eliminerer duplikatkode mellem `createAccount()` og `getAccount()`.

**Krav:**
- Håndter både GET- og POST-forespørgsler
- Inkluder korrekt fejlbehandling
- Understøt forskellige URL-endepunkter
- Accepter valgfri data til forespørgselskroppen

**Funktionssignaturvejledning:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Tilføj professionel kodedokumentation

**Opgave**: Dokumenter din kode med klare, nyttige kommentarer, der forklarer "hvorfor" bag din logik.

**Dokumentationsstandarder:**
- Tilføj funktionsdokumentation, der forklarer formål, parametre og returværdier
- Inkluder inline-kommentarer for kompleks logik eller forretningsregler
- Gruppér relaterede funktioner med sektionoverskrifter
- Forklar eventuelle ikke-indlysende kode mønstre eller browser-specifikke løsninger

**Eksempel på dokumentationsstil:**
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

## Succeskriterier

Din omstrukturerede kode bør demonstrere disse professionelle udviklingsmetoder:

### Eksemplarisk implementering
- ✅ **Konstanter**: Alle magiske strenge og URL'er er udtrukket til klart navngivne konstanter
- ✅ **DRY-princip**: Fælles forespørgselslogik er konsolideret i en genanvendelig `sendRequest()`-funktion
- ✅ **Dokumentation**: Funktioner har klare JSDoc-kommentarer, der forklarer formål og parametre
- ✅ **Organisering**: Kode er logisk grupperet med sektionoverskrifter og konsekvent formatering
- ✅ **Fejlbehandling**: Forbedret fejlbehandling ved hjælp af den nye forespørgselsfunktion

### Tilstrækkelig implementering
- ✅ **Konstanter**: De fleste gentagne værdier er udtrukket, med mindre hardkodede værdier tilbage
- ✅ **Faktorisering**: Grundlæggende `sendRequest()`-funktion oprettet, men håndterer muligvis ikke alle kanttilfælde
- ✅ **Kommentarer**: Nøglefunktioner er dokumenteret, selvom nogle forklaringer kunne være mere komplette
- ✅ **Læsbarhed**: Kode er generelt godt organiseret med nogle områder til forbedring

### Kræver forbedring
- ❌ **Konstanter**: Mange magiske strenge og URL'er forbliver hardkodede i hele filen
- ❌ **Duplikation**: Betydelig kodeduplikation forbliver mellem lignende funktioner
- ❌ **Dokumentation**: Manglende eller utilstrækkelige kommentarer, der ikke forklarer kodens formål
- ❌ **Organisering**: Kode mangler klar struktur og logisk gruppering

## Test af din omstrukturerede kode

Efter omstrukturering skal du sikre dig, at din bankapp stadig fungerer korrekt:

1. **Test alle brugerflows**: Registrering, login, dashboard-visning og fejlbehandling
2. **Bekræft API-kald**: Sørg for, at din `sendRequest()`-funktion fungerer for både oprettelse og hentning af konti
3. **Test fejlscenarier**: Test med ugyldige legitimationsoplysninger og netværksfejl
4. **Gennemgå konsoloutput**: Sørg for, at der ikke er introduceret nye fejl under omstruktureringen

## Retningslinjer for indsendelse

Indsend din omstrukturerede `app.js`-fil med:
- Klare sektionoverskrifter, der organiserer forskellige funktionaliteter
- Konsekvent kodeformatering og indrykning
- Komplet JSDoc-dokumentation for alle funktioner
- En kort kommentar øverst, der forklarer din omstruktureringsmetode

**Bonusudfordring**: Opret en simpel kodedokumentationsfil (`CODE_STRUCTURE.md`), der forklarer din apps arkitektur og hvordan de forskellige funktioner arbejder sammen.

## Forbindelse til den virkelige verden

Denne opgave afspejler den type kodevedligeholdelse, som professionelle udviklere regelmæssigt udfører. I industrien:
- **Koderevisioner** vurderer læsbarhed og vedligeholdelse som denne opgave
- **Teknisk gæld** akkumuleres, når kode ikke regelmæssigt omstruktureres og dokumenteres
- **Teamsamarbejde** afhænger af klar, vel-dokumenteret kode, som nye teammedlemmer kan forstå
- **Fejlrettelser** er meget lettere i velorganiserede kodebaser med korrekte abstraktioner

De færdigheder, du øver her - udtrækning af konstanter, eliminering af duplikation og skrivning af klar dokumentation - er fundamentale for professionel softwareudvikling.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.