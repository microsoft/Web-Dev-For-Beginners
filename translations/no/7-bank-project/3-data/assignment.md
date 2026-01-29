# Oppgave: Refaktorering av kode og dokumentasjon

## Læringsmål

Ved å fullføre denne oppgaven vil du øve på essensielle ferdigheter innen programvareutvikling som profesjonelle utviklere bruker daglig. Du vil lære å organisere kode for bedre vedlikehold, redusere duplisering gjennom abstraksjon, og dokumentere arbeidet ditt for fremtidige utviklere (inkludert deg selv!).

Ren og godt dokumentert kode er avgjørende for virkelige webutviklingsprosjekter der flere utviklere samarbeider og kodebaser utvikler seg over tid.

## Oversikt over oppgaven

`app.js`-filen til din bankapplikasjon har vokst betydelig med funksjonalitet for innlogging, registrering og dashbord. Det er på tide å refaktorere denne koden ved å bruke profesjonelle utviklingspraksiser for å forbedre lesbarhet, vedlikeholdbarhet og redusere duplisering.

## Instruksjoner

Transformer din nåværende `app.js`-kode ved å implementere disse tre kjerneprinsippene for refaktorering:

### 1. Ekstraher konfigurasjonskonstanter

**Oppgave**: Opprett en konfigurasjonsseksjon øverst i filen med gjenbrukbare konstanter.

**Veiledning for implementering:**
- Ekstraher serverens API-base-URL (som for øyeblikket er hardkodet flere steder)
- Opprett konstanter for feilmeldinger som vises i flere funksjoner
- Vurder å ekstrahere ruteveier og element-ID-er som brukes gjentatte ganger

**Eksempelstruktur:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Lag en enhetlig forespørselsfunksjon

**Oppgave**: Bygg en gjenbrukbar `sendRequest()`-funksjon som eliminerer duplisert kode mellom `createAccount()` og `getAccount()`.

**Krav:**
- Håndter både GET- og POST-forespørsler
- Inkluder riktig feilhåndtering
- Støtt ulike URL-endepunkter
- Aksepter valgfri forespørselsdata i kroppen

**Veiledning for funksjonssignatur:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Legg til profesjonell kodedokumentasjon

**Oppgave**: Dokumenter koden din med klare, nyttige kommentarer som forklarer "hvorfor" bak logikken.

**Standarder for dokumentasjon:**
- Legg til funksjonsdokumentasjon som forklarer formål, parametere og returverdier
- Inkluder inline-kommentarer for kompleks logikk eller forretningsregler
- Gruppér relaterte funksjoner sammen med seksjonsoverskrifter
- Forklar eventuelle ikke-opplagte kode-mønstre eller nettleserspesifikke løsninger

**Eksempel på dokumentasjonsstil:**
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

## Suksesskriterier

Den refaktorerte koden din bør demonstrere disse profesjonelle utviklingspraksisene:

### Eksemplarisk implementering
- ✅ **Konstanter**: Alle magiske strenger og URL-er er ekstrahert til tydelig navngitte konstanter
- ✅ **DRY-prinsippet**: Felles forespørselslogikk er konsolidert i en gjenbrukbar `sendRequest()`-funksjon
- ✅ **Dokumentasjon**: Funksjoner har klare JSDoc-kommentarer som forklarer formål og parametere
- ✅ **Organisering**: Koden er logisk gruppert med seksjonsoverskrifter og konsekvent formatering
- ✅ **Feilhåndtering**: Forbedret feilhåndtering ved bruk av den nye forespørselsfunksjonen

### Tilfredsstillende implementering
- ✅ **Konstanter**: De fleste gjentatte verdier er ekstrahert, med noen mindre hardkodede verdier som gjenstår
- ✅ **Faktorisering**: Grunnleggende `sendRequest()`-funksjon opprettet, men kan mangle håndtering av alle kanttilfeller
- ✅ **Kommentarer**: Nøkkelfunksjoner er dokumentert, selv om noen forklaringer kan være mer fullstendige
- ✅ **Lesbarhet**: Koden er generelt godt organisert med noen områder for forbedring

### Trenger forbedring
- ❌ **Konstanter**: Mange magiske strenger og URL-er forblir hardkodet gjennom filen
- ❌ **Duplisering**: Betydelig kode-duplisering gjenstår mellom lignende funksjoner
- ❌ **Dokumentasjon**: Manglende eller utilstrekkelige kommentarer som ikke forklarer kodens formål
- ❌ **Organisering**: Koden mangler klar struktur og logisk gruppering

## Testing av den refaktorerte koden

Etter refaktorering, sørg for at bankapplikasjonen din fortsatt fungerer korrekt:

1. **Test alle brukerflyter**: Registrering, innlogging, dashbordvisning og feilhåndtering
2. **Bekreft API-kall**: Kontroller at `sendRequest()`-funksjonen fungerer for både opprettelse og henting av konto
3. **Test feilsituasjoner**: Test med ugyldige legitimasjoner og nettverksfeil
4. **Gjennomgå konsollutdata**: Sørg for at ingen nye feil ble introdusert under refaktoreringen

## Retningslinjer for innlevering

Send inn din refaktorerte `app.js`-fil med:
- Klare seksjonsoverskrifter som organiserer ulike funksjonaliteter
- Konsistent kodeformatering og innrykk
- Fullstendig JSDoc-dokumentasjon for alle funksjoner
- En kort kommentar øverst som forklarer din refaktoreringsmetode

**Bonusutfordring**: Lag en enkel kodedokumentasjonsfil (`CODE_STRUCTURE.md`) som forklarer appens arkitektur og hvordan de ulike funksjonene fungerer sammen.

## Relevans til virkeligheten

Denne oppgaven speiler typen kodevedlikehold som profesjonelle utviklere utfører regelmessig. I industrien:
- **Kodegjennomganger** vurderer lesbarhet og vedlikeholdbarhet som i denne oppgaven
- **Teknisk gjeld** akkumuleres når kode ikke refaktoreres og dokumenteres regelmessig
- **Teamsamarbeid** avhenger av klar, godt dokumentert kode som nye teammedlemmer kan forstå
- **Feilretting** er mye enklere i godt organiserte kodebaser med riktige abstraksjoner

Ferdighetene du øver på her - ekstrahering av konstanter, eliminering av duplisering og skriving av klar dokumentasjon - er grunnleggende for profesjonell programvareutvikling.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.