<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-23T22:39:19+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "no"
}
-->
# Nettleserutvidelsesprosjekt del 2: Koble til en API, bruk lokal lagring

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/25)

## Introduksjon

Husker du nettleserutvidelsen du begynte å lage? Akkurat nå har du et fint skjema, men det er i utgangspunktet statisk. I dag skal vi gi det liv ved å koble det til ekte data og gi det hukommelse.

Tenk på Apollo-misjonens kontrollsystemer - de viste ikke bare statisk informasjon. De kommuniserte konstant med romfartøyet, oppdaterte med telemetridata og husket kritiske misjonsparametere. Det er den typen dynamisk oppførsel vi skal bygge i dag. Utvidelsen din vil koble seg til internett, hente ekte miljødata og huske innstillingene dine til neste gang.

API-integrasjon kan høres komplisert ut, men det handler egentlig bare om å lære koden din å kommunisere med andre tjenester. Enten du henter værdata, sosiale medieoppdateringer eller informasjon om karbonavtrykk som vi skal gjøre i dag, handler det om å etablere disse digitale forbindelsene. Vi skal også utforske hvordan nettlesere kan lagre informasjon - på samme måte som biblioteker har brukt kortkataloger for å huske hvor bøker hører hjemme.

Ved slutten av denne leksjonen vil du ha en nettleserutvidelse som henter ekte data, lagrer brukerpreferanser og gir en smidig opplevelse. La oss komme i gang!

✅ Følg de nummererte segmentene i de relevante filene for å vite hvor du skal plassere koden din.

## Sett opp elementene som skal manipuleres i utvidelsen

Før JavaScript kan manipulere grensesnittet, trenger det referanser til spesifikke HTML-elementer. Tenk på det som et teleskop som må rettes mot bestemte stjerner - før Galileo kunne studere Jupiters måner, måtte han finne og fokusere på Jupiter selv.

I filen `index.js` skal vi lage `const`-variabler som fanger referanser til hvert viktig skjemaelement. Dette er likt hvordan forskere merker utstyret sitt - i stedet for å lete gjennom hele laboratoriet hver gang, kan de direkte få tilgang til det de trenger.

```javascript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

**Dette gjør koden:**
- **Fanger opp** skjemaelementer ved hjelp av `document.querySelector()` med CSS-klassevelgere
- **Oppretter** referanser til inndatafeltene for regionnavn og API-nøkkel
- **Etablerer** forbindelser til resultatelementer for karbonbrukdata
- **Setter opp** tilgang til UI-elementer som lastindikatorer og feilmeldinger
- **Lagrer** hver elementreferanse i en `const`-variabel for enkel gjenbruk i koden din

## Legg til hendelseslyttere

Nå skal vi få utvidelsen din til å reagere på brukerhandlinger. Hendelseslyttere er kodens måte å overvåke brukerinteraksjoner på. Tenk på dem som operatørene i tidlige telefonsentraler - de lyttet etter innkommende samtaler og koblet de riktige kretsene når noen ønsket å ringe.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Forstå disse konseptene:**
- **Legger til** en submit-lytter til skjemaet som utløses når brukere trykker Enter eller klikker på send-knappen
- **Kobler** en klikklytter til klar-knappen for å tilbakestille skjemaet
- **Sender** hendelsesobjektet `(e)` til håndteringsfunksjoner for ekstra kontroll
- **Kaller** funksjonen `init()` umiddelbart for å sette opp den innledende tilstanden til utvidelsen din

✅ Legg merke til den korte pilfunksjonssyntaksen som brukes her. Denne moderne JavaScript-tilnærmingen er mer elegant enn tradisjonelle funksjonsuttrykk, men begge fungerer like bra!

## Bygg initialiserings- og tilbakestillingsfunksjoner

La oss lage initialiseringslogikken for utvidelsen din. Funksjonen `init()` er som et skips navigasjonssystem som sjekker instrumentene sine - den bestemmer den nåværende tilstanden og justerer grensesnittet deretter. Den sjekker om noen har brukt utvidelsen din før og laster inn deres tidligere innstillinger.

Funksjonen `reset()` gir brukerne en ny start - på samme måte som forskere tilbakestiller instrumentene sine mellom eksperimenter for å sikre rene data.

```javascript
function init() {
	// Check if user has previously saved API credentials
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	// Set extension icon to generic green (placeholder for future lesson)
	// TODO: Implement icon update in next lesson

	if (storedApiKey === null || storedRegion === null) {
		// First-time user: show the setup form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		// Returning user: load their saved data automatically
		displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
}

function reset(e) {
	e.preventDefault();
	// Clear stored region to allow user to choose a new location
	localStorage.removeItem('regionName');
	// Restart the initialization process
	init();
}
```

**Hva som skjer her:**
- **Henter** lagret API-nøkkel og region fra nettleserens lokale lagring
- **Sjekker** om dette er en førstegangsbruker (ingen lagrede legitimasjoner) eller en tilbakevendende bruker
- **Viser** oppsettskjemaet for nye brukere og skjuler andre grensesnittelementer
- **Laster** lagrede data automatisk for tilbakevendende brukere og viser tilbakestillingsalternativet
- **Håndterer** brukergrensesnittets tilstand basert på tilgjengelige data

**Viktige konsepter om lokal lagring:**
- **Beholder** data mellom nettleserøkter (i motsetning til sesjonslagring)
- **Lagrer** data som nøkkel-verdi-par ved hjelp av `getItem()` og `setItem()`
- **Returnerer** `null` når ingen data eksisterer for en gitt nøkkel
- **Gir** en enkel måte å huske brukerpreferanser og innstillinger på

> 💡 **Forstå nettleserlagring**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) er som å gi utvidelsen din vedvarende hukommelse. Tenk på hvordan det gamle biblioteket i Alexandria lagret skriftruller - informasjonen forble tilgjengelig selv når forskere kom og gikk.
>
> **Viktige egenskaper:**
> - **Beholder** data selv etter at du lukker nettleseren
> - **Overlever** datamaskinens omstart og nettleserens krasj
> - **Gir** betydelig lagringsplass for brukerpreferanser
> - **Tilbyr** umiddelbar tilgang uten nettverksforsinkelser

> **Viktig merknad**: Nettleserutvidelsen din har sin egen isolerte lokale lagring som er separat fra vanlige nettsider. Dette gir sikkerhet og forhindrer konflikter med andre nettsteder.

Du kan se de lagrede dataene dine ved å åpne nettleserens utviklerverktøy (F12), navigere til **Application**-fanen og utvide **Local Storage**-seksjonen.

![Lokal lagringspanel](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.no.png)

> ⚠️ **Sikkerhetsbetraktning**: I produksjonsapplikasjoner utgjør lagring av API-nøkler i LocalStorage sikkerhetsrisikoer siden JavaScript kan få tilgang til disse dataene. For læringsformål fungerer denne tilnærmingen fint, men ekte applikasjoner bør bruke sikker serverbasert lagring for sensitive legitimasjoner.

## Håndter skjemainnsending

Nå skal vi håndtere hva som skjer når noen sender inn skjemaet ditt. Som standard laster nettlesere siden på nytt når skjemaer sendes inn, men vi vil avskjære denne oppførselen for å skape en smidigere opplevelse.

Denne tilnærmingen speiler hvordan kontrollsenteret håndterer romfartøykommunikasjon - i stedet for å tilbakestille hele systemet for hver overføring, opprettholder de kontinuerlig drift mens de behandler ny informasjon.

Lag en funksjon som fanger opp skjemaets innsending og trekker ut brukerens inndata:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**I koden ovenfor har vi:**
- **Forhindret** standard skjemaoppførsel som ville oppdatert siden
- **Trukket ut** brukerens inndata fra API-nøkkel- og regionfeltene
- **Sendt** skjemaets data til funksjonen `setUpUser()` for behandling
- **Opprettholdt** en enkelt-sides applikasjonsopplevelse ved å unngå sideoppdateringer

✅ Husk at HTML-skjemaets felter inkluderer attributtet `required`, så nettleseren validerer automatisk at brukerne gir både API-nøkkel og region før denne funksjonen kjører.

## Sett opp brukerpreferanser

Funksjonen `setUpUser` er ansvarlig for å lagre brukerens legitimasjon og starte den første API-forespørselen. Dette skaper en smidig overgang fra oppsett til visning av resultater.

```javascript
function setUpUser(apiKey, regionName) {
	// Save user credentials for future sessions
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	
	// Update UI to show loading state
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	
	// Fetch carbon usage data with user's credentials
	displayCarbonUsage(apiKey, regionName);
}
```

**Steg for steg, her er hva som skjer:**
- **Lagrer** API-nøkkelen og regionnavnet i lokal lagring for fremtidig bruk
- **Viser** en lastindikator for å informere brukerne om at data hentes
- **Fjerner** eventuelle tidligere feilmeldinger fra visningen
- **Avslører** klar-knappen for brukere som ønsker å tilbakestille innstillingene senere
- **Starter** API-forespørselen for å hente ekte karbonbruksdata

Denne funksjonen skaper en sømløs brukeropplevelse ved å håndtere både datalagring og oppdateringer av brukergrensesnittet i én koordinert handling.

## Vis karbonbruksdata

Nå skal vi koble utvidelsen din til eksterne datakilder via API-er. Dette forvandler utvidelsen din fra et frittstående verktøy til noe som kan få tilgang til sanntidsinformasjon fra hele internett.

**Forstå API-er**

[API-er](https://www.webopedia.com/TERM/A/API.html) er hvordan forskjellige applikasjoner kommuniserer med hverandre. Tenk på dem som telegrafsystemet som koblet fjerne byer på 1800-tallet - operatører sendte forespørsler til fjerne stasjoner og mottok svar med den ønskede informasjonen. Hver gang du sjekker sosiale medier, stiller en stemmeassistent et spørsmål eller bruker en leveringsapp, fasiliterer API-er disse datautvekslingene.

**Viktige konsepter om REST API-er:**
- **REST** står for 'Representational State Transfer'
- **Bruker** standard HTTP-metoder (GET, POST, PUT, DELETE) for å samhandle med data
- **Returnerer** data i forutsigbare formater, vanligvis JSON
- **Tilbyr** konsistente, URL-baserte endepunkter for forskjellige typer forespørsler

✅ [CO2 Signal API](https://www.co2signal.com/) vi skal bruke gir sanntidsdata om karbonintensitet fra elektriske nettverk over hele verden. Dette hjelper brukere med å forstå miljøpåvirkningen av deres elektrisitetsbruk!

> 💡 **Forstå asynkron JavaScript**: Nøkkelordet [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) gjør det mulig for koden din å håndtere flere operasjoner samtidig. Når du ber om data fra en server, vil du ikke at hele utvidelsen din skal fryse - det ville være som om flykontrollen stoppet all drift mens de ventet på svar fra ett fly.
>
> **Viktige fordeler:**
> - **Opprettholder** utvidelsens responsivitet mens data lastes
> - **Lar** annen kode fortsette å kjøre under nettverksforespørsler
> - **Forbedrer** lesbarheten til koden sammenlignet med tradisjonelle callback-mønstre
> - **Muliggjør** elegant feilhåndtering for nettverksproblemer

Her er en rask video om `async`:

[![Async og Await for håndtering av løfter](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async og Await for håndtering av løfter")

> 🎥 Klikk på bildet over for en video om async/await.

Lag funksjonen for å hente og vise karbonbruksdata:

```javascript
// Modern fetch API approach (no external dependencies needed)
async function displayCarbonUsage(apiKey, region) {
	try {
		// Fetch carbon intensity data from CO2 Signal API
		const response = await fetch('https://api.co2signal.com/v1/latest', {
			method: 'GET',
			headers: {
				'auth-token': apiKey,
				'Content-Type': 'application/json'
			},
			// Add query parameters for the specific region
			...new URLSearchParams({ countryCode: region }) && {
				url: `https://api.co2signal.com/v1/latest?countryCode=${region}`
			}
		});

		// Check if the API request was successful
		if (!response.ok) {
			throw new Error(`API request failed: ${response.status}`);
		}

		const data = await response.json();
		const carbonData = data.data;

		// Calculate rounded carbon intensity value
		const carbonIntensity = Math.round(carbonData.carbonIntensity);

		// Update the user interface with fetched data
		loading.style.display = 'none';
		form.style.display = 'none';
		myregion.textContent = region.toUpperCase();
		usage.textContent = `${carbonIntensity} grams (grams CO₂ emitted per kilowatt hour)`;
		fossilfuel.textContent = `${carbonData.fossilFuelPercentage.toFixed(2)}% (percentage of fossil fuels used to generate electricity)`;
		results.style.display = 'block';

		// TODO: calculateColor(carbonIntensity) - implement in next lesson

	} catch (error) {
		console.error('Error fetching carbon data:', error);
		
		// Show user-friendly error message
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we couldn\'t fetch data for that region. Please check your API key and region code.';
	}
}
```

**Hva som skjer her:**
- **Bruker** den moderne `fetch()`-API-en i stedet for eksterne biblioteker som Axios for renere, avhengighetsfri kode
- **Implementerer** riktig feilsjekking med `response.ok` for å fange opp API-feil tidlig
- **Håndterer** asynkrone operasjoner med `async/await` for mer lesbar kodeflyt
- **Autentiserer** med CO2 Signal API ved hjelp av `auth-token`-headeren
- **Parser** JSON-responsdata og trekker ut informasjon om karbonintensitet
- **Oppdaterer** flere UI-elementer med formaterte miljødata
- **Gir** brukervennlige feilmeldinger når API-forespørsler mislykkes

**Viktige moderne JavaScript-konsepter demonstrert:**
- **Template literals** med `${}`-syntaks for ren strengformatering
- **Feilhåndtering** med try/catch-blokker for robuste applikasjoner
- **Async/await**-mønster for å håndtere nettverksforespørsler elegant
- **Objektdestrukturering** for å trekke ut spesifikke data fra API-responser
- **Metodekjeding** for flere DOM-manipulasjoner

✅ Denne funksjonen demonstrerer flere viktige webutviklingskonsepter - kommunikasjon med eksterne servere, håndtering av autentisering, behandling av data, oppdatering av grensesnitt og elegant håndtering av feil. Dette er grunnleggende ferdigheter som profesjonelle utviklere bruker regelmessig.

🎉 **Hva du har oppnådd:** Du har laget en nettleserutvidelse som:
- **Kobler** seg til internett og henter ekte miljødata
- **Beholder** brukerinnstillinger mellom økter
- **Håndterer** feil elegant i stedet for å krasje
- **Gir** en smidig, profesjonell brukeropplevelse

Test arbeidet ditt ved å kjøre `npm run build` og oppdatere utvidelsen din i nettleseren. Du har nå en funksjonell karbonavtrykkssporer. Neste leksjon vil legge til dynamisk ikonfunksjonalitet for å fullføre utvidelsen.

---

## GitHub Copilot Agent Challenge 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Forbedre nettleserutvidelsen ved å legge til forbedringer for feilhåndtering og brukeropplevelsesfunksjoner. Denne utfordringen vil hjelpe deg med å øve på å jobbe med API-er, lokal lagring og DOM-manipulasjon ved hjelp av moderne JavaScript-mønstre.

**Oppgave:** Lag en forbedret versjon av funksjonen displayCarbonUsage som inkluderer: 1) En retry-mekanisme for mislykkede API-forespørsler med eksponentiell tilbakefall, 2) Validering av regionkode før API-forespørselen gjøres, 3) En lastanimasjon med fremdriftsindikatorer, 4) Caching av API-responser i localStorage med utløpstidspunkter (cache i 30 minutter), og 5) En funksjon for å vise historiske data fra tidligere API-forespørsler. Legg også til riktige TypeScript-stil JSDoc-kommentarer for å dokumentere alle funksjonsparametere og returtyper.

Lær mer om [agent-modus](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Utfordring

Utvid forståelsen din av API-er ved å utforske rikdommen av nettleserbaserte API-er tilgjengelig for webutvikling. Velg en av disse nettleser-API-ene og bygg en liten demonstrasjon:

- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - Få brukerens nåværende posisjon
- [Notification API](https://developer.mozilla.org/docs/Web/API/Notifications_API) - Send skrivebordsvarsler
- [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) - Lag interaktive dra-grensesnitt
- [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) - Avanserte teknikker for lokal lagring
- [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API) - Moderne alternativ til XMLHttpRequest

**Forskningsspørsmål å vurdere:**
- Hvilke reelle problemer løser denne API-en?
- Hvordan håndterer API-en feil og kanttilfeller?
- Hvilke sikkerhetsbetraktninger finnes når man bruker denne API-en?
- Hvor bredt støttes denne API-en på tvers av forskjellige nettlesere?

Etter forskningen din, identifiser hvilke egenskaper som gjør en API brukervennlig og pålitelig.

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/26)

## Gjennomgang og selvstudium
Du lærte om LocalStorage og API-er i denne leksjonen, begge er svært nyttige for den profesjonelle webutvikleren. Kan du tenke på hvordan disse to tingene fungerer sammen? Tenk på hvordan du ville ha designet et nettsted som lagrer elementer som skal brukes av en API.

## Oppgave

[Adopter en API](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.