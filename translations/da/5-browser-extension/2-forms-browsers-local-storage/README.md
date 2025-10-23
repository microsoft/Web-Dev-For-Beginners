<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-23T22:13:42+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "da"
}
-->
# Browserudvidelsesprojekt del 2: Kald en API, brug lokal lagring

## Quiz før forelæsning

[Quiz før forelæsning](https://ff-quizzes.netlify.app/web/quiz/25)

## Introduktion

Kan du huske den browserudvidelse, du begyndte at bygge? Lige nu har du en flot formular, men den er i bund og grund statisk. I dag vil vi give den liv ved at forbinde den til rigtige data og give den hukommelse.

Tænk på Apollo-missionens kontrolcomputere - de viste ikke bare fast information. De kommunikerede konstant med rumfartøjet, opdaterede med telemetridata og huskede kritiske missionparametre. Det er den slags dynamisk adfærd, vi bygger i dag. Din udvidelse vil hente data fra internettet, indsamle reelle miljødata og huske dine indstillinger til næste gang.

API-integration kan lyde komplekst, men det handler i bund og grund om at lære din kode at kommunikere med andre tjenester. Uanset om du henter vejroplysninger, sociale mediefeeds eller information om CO2-aftryk, som vi vil gøre i dag, handler det om at etablere disse digitale forbindelser. Vi vil også udforske, hvordan browsere kan gemme information - ligesom biblioteker har brugt kortkataloger til at huske, hvor bøger hører hjemme.

Ved slutningen af denne lektion vil du have en browserudvidelse, der henter rigtige data, gemmer brugerpræferencer og giver en glidende oplevelse. Lad os komme i gang!

✅ Følg de nummererede segmenter i de relevante filer for at vide, hvor du skal placere din kode.

## Opsæt elementerne til manipulation i udvidelsen

Før din JavaScript kan manipulere grænsefladen, skal den have referencer til specifikke HTML-elementer. Tænk på det som et teleskop, der skal pege på bestemte stjerner - før Galileo kunne studere Jupiters måner, måtte han finde og fokusere på Jupiter selv.

I din `index.js`-fil opretter vi `const`-variabler, der fanger referencer til hvert vigtigt form-element. Dette er ligesom hvordan videnskabsfolk mærker deres udstyr - i stedet for at søge gennem hele laboratoriet hver gang, kan de direkte få adgang til det, de har brug for.

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

**Hvad denne kode gør:**
- **Fanger** form-elementer ved hjælp af `document.querySelector()` med CSS-klassevælgere
- **Opretter** referencer til inputfelter for regionnavn og API-nøgle
- **Etablerer** forbindelser til resultatvisningselementer for data om CO2-forbrug
- **Opsætter** adgang til UI-elementer som indlæsningsindikatorer og fejlmeddelelser
- **Gemmer** hver elementreference i en `const`-variabel for nem genbrug i din kode

## Tilføj event listeners

Nu får vi din udvidelse til at reagere på brugerhandlinger. Event listeners er din kodes måde at overvåge brugerinteraktioner på. Tænk på dem som operatører i de tidlige telefoncentraler - de lyttede efter indgående opkald og forbandt de rigtige kredsløb, når nogen ville ringe.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Forståelse af disse begreber:**
- **Tilføjer** en submit listener til formularen, der aktiveres, når brugere trykker på Enter eller klikker på send
- **Forbinder** en kliklistener til nulstillingsknappen for at nulstille formularen
- **Sender** hændelsesobjektet `(e)` til håndteringsfunktioner for yderligere kontrol
- **Kalder** `init()`-funktionen med det samme for at opsætte udvidelsens starttilstand

✅ Bemærk den korte pilfunktion-syntaks, der bruges her. Denne moderne JavaScript-tilgang er mere elegant end traditionelle funktionsudtryk, men begge fungerer lige godt!

## Byg initialiserings- og nulstillingsfunktionerne

Lad os oprette initialiseringslogikken for din udvidelse. `init()`-funktionen er som et skibs navigationssystem, der kontrollerer sine instrumenter - den bestemmer den aktuelle tilstand og justerer grænsefladen derefter. Den kontrollerer, om nogen har brugt din udvidelse før og indlæser deres tidligere indstillinger.

`reset()`-funktionen giver brugerne en frisk start - ligesom hvordan videnskabsfolk nulstiller deres instrumenter mellem eksperimenter for at sikre rene data.

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

**Hvad der sker her:**
- **Henter** gemt API-nøgle og region fra browserens lokale lagring
- **Kontrollerer**, om det er en førstegangsbruger (ingen gemte legitimationsoplysninger) eller en tilbagevendende bruger
- **Viser** opsætningsformularen for nye brugere og skjuler andre grænsefladeelementer
- **Indlæser** gemte data automatisk for tilbagevendende brugere og viser nulstillingsmuligheden
- **Administrerer** brugergrænsefladens tilstand baseret på tilgængelige data

**Vigtige begreber om lokal lagring:**
- **Bevarer** data mellem browsersessioner (i modsætning til session storage)
- **Gemmer** data som nøgle-værdi-par ved hjælp af `getItem()` og `setItem()`
- **Returnerer** `null`, når der ikke findes data for en given nøgle
- **Tilbyder** en enkel måde at huske brugerpræferencer og indstillinger

> 💡 **Forståelse af browserlagring**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) er som at give din udvidelse en vedvarende hukommelse. Tænk på, hvordan det gamle bibliotek i Alexandria opbevarede skriftruller - information forblev tilgængelig, selv når forskere forlod og vendte tilbage.
>
> **Vigtige egenskaber:**
> - **Bevarer** data, selv efter du lukker din browser
> - **Overlever** computer-genstarter og browsernedbrud
> - **Tilbyder** betydelig lagerplads til brugerpræferencer
> - **Giver** øjeblikkelig adgang uden netværksforsinkelser

> **Vigtig bemærkning**: Din browserudvidelse har sin egen isolerede lokale lagring, der er adskilt fra almindelige websider. Dette giver sikkerhed og forhindrer konflikter med andre websites.

Du kan se dine gemte data ved at åbne browserens Developer Tools (F12), navigere til fanen **Application** og udvide sektionen **Local Storage**.

![Lokal lagringspanel](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.da.png)

> ⚠️ **Sikkerhedsovervejelse**: I produktionsapplikationer udgør det sikkerhedsrisici at gemme API-nøgler i LocalStorage, da JavaScript kan få adgang til disse data. Til læringsformål fungerer denne tilgang fint, men rigtige applikationer bør bruge sikker server-side lagring til følsomme legitimationsoplysninger.

## Håndter formularindsendelse

Nu vil vi håndtere, hvad der sker, når nogen indsender din formular. Som standard genindlæser browsere siden, når formularer indsendes, men vi vil afbryde denne adfærd for at skabe en mere glidende oplevelse.

Denne tilgang afspejler, hvordan mission control håndterer rumfartøjskommunikation - i stedet for at nulstille hele systemet for hver transmission opretholder de kontinuerlig drift, mens de behandler ny information.

Opret en funktion, der fanger hændelsen med formularindsendelse og udtrækker brugerens input:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**I ovenstående har vi:**
- **Forhindret** den standardformularindsendelsesadfærd, der ville opdatere siden
- **Udtrukket** brugerens inputværdier fra API-nøgle- og regionsfelterne
- **Sendt** formulardataene til `setUpUser()`-funktionen til behandling
- **Opretholdt** single-page application-adfærd ved at undgå sideopdateringer

✅ Husk, at dine HTML-formularfelter inkluderer attributten `required`, så browseren validerer automatisk, at brugerne angiver både API-nøgle og region, før denne funktion kører.

## Opsæt brugerpræferencer

`setUpUser`-funktionen er ansvarlig for at gemme brugerens legitimationsoplysninger og igangsætte det første API-kald. Dette skaber en glidende overgang fra opsætning til visning af resultater.

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

**Trin for trin, her er hvad der sker:**
- **Gemmer** API-nøgle og regionsnavn i lokal lagring til fremtidig brug
- **Viser** en indlæsningsindikator for at informere brugerne om, at data hentes
- **Fjerner** eventuelle tidligere fejlmeddelelser fra visningen
- **Viser** nulstillingsknappen, så brugerne kan nulstille deres indstillinger senere
- **Starter** API-kaldet for at hente reelle data om CO2-forbrug

Denne funktion skaber en problemfri brugeroplevelse ved at administrere både databevaring og opdateringer af brugergrænsefladen i én koordineret handling.

## Vis data om CO2-forbrug

Nu vil vi forbinde din udvidelse til eksterne datakilder via API'er. Dette forvandler din udvidelse fra et selvstændigt værktøj til noget, der kan få adgang til realtidsinformation fra hele internettet.

**Forståelse af API'er**

[API'er](https://www.webopedia.com/TERM/A/API.html) er, hvordan forskellige applikationer kommunikerer med hinanden. Tænk på dem som telegrafsystemet, der forbandt fjerne byer i det 19. århundrede - operatører sendte anmodninger til fjerne stationer og modtog svar med de ønskede oplysninger. Hver gang du tjekker sociale medier, stiller en stemmeassistent et spørgsmål eller bruger en leveringsapp, faciliterer API'er disse dataudvekslinger.

**Vigtige begreber om REST API'er:**
- **REST** står for 'Representational State Transfer'
- **Bruger** standard HTTP-metoder (GET, POST, PUT, DELETE) til at interagere med data
- **Returnerer** data i forudsigelige formater, typisk JSON
- **Tilbyder** konsistente, URL-baserede endpoints til forskellige typer anmodninger

✅ [CO2 Signal API](https://www.co2signal.com/), som vi vil bruge, giver realtidsdata om kulstofintensitet fra elektriske netværk verden over. Dette hjælper brugere med at forstå miljøpåvirkningen af deres elforbrug!

> 💡 **Forståelse af asynkron JavaScript**: [`async`-nøgleordet](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) gør det muligt for din kode at håndtere flere operationer samtidigt. Når du anmoder om data fra en server, vil du ikke have, at hele din udvidelse fryser - det ville være som om flyveledelsen stoppede alle operationer, mens de ventede på svar fra et fly.
>
> **Vigtige fordele:**
> - **Opretholder** udvidelsens responsivitet, mens data indlæses
> - **Tillader** anden kode at fortsætte med at køre under netværksanmodninger
> - **Forbedrer** kodens læsbarhed sammenlignet med traditionelle callback-mønstre
> - **Muliggør** elegant fejlhåndtering ved netværksproblemer

Her er en hurtig video om `async`:

[![Async og Await til håndtering af promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async og Await til håndtering af promises")

> 🎥 Klik på billedet ovenfor for en video om async/await.

Opret funktionen til at hente og vise data om CO2-forbrug:

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

**Hvad der sker her:**
- **Bruger** den moderne `fetch()`-API i stedet for eksterne biblioteker som Axios for renere, afhængighedsfri kode
- **Implementerer** korrekt fejltjek med `response.ok` for tidligt at fange API-fejl
- **Håndterer** asynkrone operationer med `async/await` for mere læsbar kodeflow
- **Autentificerer** med CO2 Signal API ved hjælp af `auth-token`-headeren
- **Parser** JSON-svardata og udtrækker information om kulstofintensitet
- **Opdaterer** flere UI-elementer med formaterede miljødata
- **Tilbyder** brugervenlige fejlmeddelelser, når API-kald mislykkes

**Vigtige moderne JavaScript-begreber demonstreret:**
- **Template literals** med `${}`-syntaks for ren strengformatering
- **Fejlhåndtering** med try/catch-blokke for robuste applikationer
- **Async/await**-mønster for elegant håndtering af netværksanmodninger
- **Objekt-destructuring** for at udtrække specifikke data fra API-svar
- **Metodekædning** til flere DOM-manipulationer

✅ Denne funktion demonstrerer flere vigtige webudviklingskoncepter - kommunikation med eksterne servere, håndtering af autentifikation, databehandling, opdatering af grænseflader og elegant håndtering af fejl. Dette er grundlæggende færdigheder, som professionelle udviklere regelmæssigt bruger.

🎉 **Hvad du har opnået:** Du har skabt en browserudvidelse, der:
- **Forbinder** til internettet og henter reelle miljødata
- **Bevarer** brugerindstillinger mellem sessioner
- **Håndterer** fejl elegant i stedet for at gå ned
- **Tilbyder** en glidende, professionel brugeroplevelse

Test dit arbejde ved at køre `npm run build` og opdatere din udvidelse i browseren. Du har nu en funktionel CO2-aftryk tracker. Den næste lektion vil tilføje dynamisk ikonfunktionalitet for at fuldende udvidelsen.

---

## GitHub Copilot Agent Challenge 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Forbedr browserudvidelsen ved at tilføje forbedringer til fejlhåndtering og brugeroplevelsesfunktioner. Denne udfordring vil hjælpe dig med at øve dig i at arbejde med API'er, lokal lagring og DOM-manipulation ved hjælp af moderne JavaScript-mønstre.

**Opgave:** Opret en forbedret version af displayCarbonUsage-funktionen, der inkluderer: 1) En genforsøgsmekanisme for mislykkede API-kald med eksponentiel backoff, 2) Inputvalidering for regionskoden før API-kaldet, 3) En indlæsningsanimation med statusindikatorer, 4) Caching af API-svar i localStorage med udløbstidsstempler (cache i 30 minutter), og 5) En funktion til at vise historiske data fra tidligere API-kald. Tilføj også korrekte TypeScript-stil JSDoc-kommentarer for at dokumentere alle funktionsparametre og returtyper.

Læs mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Udfordring

Udvid din forståelse af API'er ved at udforske de mange browserbaserede API'er, der er tilgængelige for webudvikling. Vælg en af disse browser-API'er og byg en lille demonstration:

- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - Få brugerens aktuelle placering
- [Notification API](https://developer.mozilla.org/docs/Web/API/Notifications_API) - Send desktop-notifikationer
- [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) - Opret interaktive trækgrænseflader
- [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) - Avancerede teknikker til lokal lagring
- [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API) - Moderne alternativ til XMLHttpRequest

**Forskningsspørgsmål at overveje:**
- Hvilke reelle problemer løser denne API?
- Hvordan håndterer API'en fejl og kanttilfælde?
- Hvilke sikkerhedsovervejelser findes der ved brug af denne API?
- Hvor bredt understøttes denne API på tværs af forskellige browsere?

Efter din forskning, identificer hvilke egenskaber der gør en API udviklervenlig og pålidelig.

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/26)

## Gennemgang & Selvstudie
Du har lært om LocalStorage og API'er i denne lektion, begge meget nyttige for den professionelle webudvikler. Kan du tænke over, hvordan disse to ting arbejder sammen? Overvej, hvordan du ville designe en hjemmeside, der gemmer elementer til brug af en API.

## Opgave

[Adoptér en API](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.