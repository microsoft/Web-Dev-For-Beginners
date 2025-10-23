<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-23T21:50:00+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "sv"
}
-->
# Webbläsartillägg Projekt Del 2: Anropa en API, använd Lokal Lagring

## Förföreläsningsquiz

[Förföreläsningsquiz](https://ff-quizzes.netlify.app/web/quiz/25)

## Introduktion

Kommer du ihåg det webbläsartillägg du började bygga? Just nu har du ett snyggt formulär, men det är i princip statiskt. Idag ska vi ge det liv genom att koppla det till verklig data och ge det minne.

Tänk på Apollo-uppdragskontrollens datorer - de visade inte bara fast information. De kommunicerade ständigt med rymdfarkosten, uppdaterades med telemetridata och kom ihåg kritiska uppdragsparametrar. Det är den typen av dynamiskt beteende vi bygger idag. Ditt tillägg kommer att nå ut på internet, hämta verklig miljödata och komma ihåg dina inställningar till nästa gång.

API-integrering kan låta komplext, men det handlar egentligen bara om att lära din kod att kommunicera med andra tjänster. Oavsett om du hämtar väderdata, sociala medieflöden eller information om koldioxidavtryck som vi ska göra idag, handlar det om att etablera dessa digitala kopplingar. Vi kommer också att utforska hur webbläsare kan lagra information - ungefär som hur bibliotek har använt kortkataloger för att komma ihåg var böcker hör hemma.

I slutet av denna lektion kommer du att ha ett webbläsartillägg som hämtar verklig data, lagrar användarpreferenser och ger en smidig upplevelse. Låt oss sätta igång!

✅ Följ de numrerade segmenten i de relevanta filerna för att veta var du ska placera din kod.

## Ställ in elementen att manipulera i tillägget

Innan din JavaScript kan manipulera gränssnittet behöver det referenser till specifika HTML-element. Tänk på det som ett teleskop som behöver riktas mot specifika stjärnor - innan Galileo kunde studera Jupiters månar, var han tvungen att lokalisera och fokusera på Jupiter själv.

I din `index.js`-fil skapar vi `const`-variabler som fångar referenser till varje viktigt formulärelement. Detta liknar hur forskare märker sin utrustning - istället för att söka genom hela laboratoriet varje gång kan de direkt komma åt det de behöver.

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

**Vad denna kod gör:**
- **Fångar** formulärelement med `document.querySelector()` och CSS-klassväljare
- **Skapar** referenser till inmatningsfält för regionnamn och API-nyckel
- **Etablerar** kopplingar till resultatvisningselement för koldioxidanvändningsdata
- **Ställer in** åtkomst till UI-element som laddningsindikatorer och felmeddelanden
- **Lagrar** varje elementreferens i en `const`-variabel för enkel återanvändning i din kod

## Lägg till händelselyssnare

Nu ska vi få ditt tillägg att reagera på användarens handlingar. Händelselyssnare är din kods sätt att övervaka användarinteraktioner. Tänk på dem som operatörerna i tidiga telefonväxlar - de lyssnade efter inkommande samtal och kopplade rätt kretsar när någon ville göra en anslutning.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Förstå dessa koncept:**
- **Fäster** en lyssnare för inskickning till formuläret som triggas när användare trycker på Enter eller klickar på skicka
- **Kopplar** en klicklyssnare till rensa-knappen för att återställa formuläret
- **Skickar** händelseobjektet `(e)` till hanteringsfunktioner för ytterligare kontroll
- **Anropar** funktionen `init()` direkt för att ställa in tilläggets initiala tillstånd

✅ Lägg märke till den korta pilfunktionssyntaxen som används här. Denna moderna JavaScript-metod är renare än traditionella funktionsuttryck, men båda fungerar lika bra!

## Bygg initialiserings- och återställningsfunktioner

Låt oss skapa initialiseringslogiken för ditt tillägg. Funktionen `init()` är som ett skepps navigationssystem som kontrollerar sina instrument - den avgör det aktuella tillståndet och justerar gränssnittet därefter. Den kontrollerar om någon har använt ditt tillägg tidigare och laddar deras tidigare inställningar.

Funktionen `reset()` ger användare en ny start - ungefär som hur forskare återställer sina instrument mellan experiment för att säkerställa ren data.

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

**Bryta ner vad som händer här:**
- **Hämtar** lagrad API-nyckel och region från webbläsarens lokala lagring
- **Kontrollerar** om detta är en förstagångsanvändare (inga lagrade uppgifter) eller återkommande användare
- **Visar** inställningsformuläret för nya användare och döljer andra gränssnittselement
- **Laddar** sparad data automatiskt för återkommande användare och visar återställningsalternativet
- **Hantera** användargränssnittets tillstånd baserat på tillgänglig data

**Nyckelkoncept om Lokal Lagring:**
- **Består** data mellan webbläsarsessioner (till skillnad från sessionslagring)
- **Lagrar** data som nyckel-värdepar med `getItem()` och `setItem()`
- **Returnerar** `null` när ingen data finns för en given nyckel
- **Ger** ett enkelt sätt att komma ihåg användarpreferenser och inställningar

> 💡 **Förstå Webbläsarlagring**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) är som att ge ditt tillägg ett bestående minne. Tänk på hur det antika biblioteket i Alexandria lagrade skriftrullar - informationen förblev tillgänglig även när forskare lämnade och återvände.
>
> **Nyckelkarakteristika:**
> - **Består** data även efter att du stänger din webbläsare
> - **Överlever** omstarter av datorn och webbläsarkrascher
> - **Ger** betydande lagringsutrymme för användarpreferenser
> - **Erbjuder** omedelbar åtkomst utan nätverksfördröjningar

Du kan se din lagrade data genom att öppna webbläsarens utvecklarverktyg (F12), navigera till fliken **Application** och expandera sektionen **Local Storage**.

![Panel för lokal lagring](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.sv.png)

> ⚠️ **Säkerhetsövervägande**: I produktionsapplikationer utgör lagring av API-nycklar i LocalStorage säkerhetsrisker eftersom JavaScript kan komma åt denna data. För inlärningsändamål fungerar denna metod bra, men riktiga applikationer bör använda säker serverlagring för känsliga uppgifter.

## Hantera formulärinskickning

Nu ska vi hantera vad som händer när någon skickar in ditt formulär. Som standard laddar webbläsare om sidan när formulär skickas in, men vi kommer att avbryta detta beteende för att skapa en smidigare upplevelse.

Denna metod speglar hur uppdragskontroll hanterar rymdfarkostkommunikation - istället för att återställa hela systemet för varje överföring, upprätthåller de kontinuerlig drift medan de bearbetar ny information.

Skapa en funktion som fångar formulärinskickningshändelsen och extraherar användarens inmatning:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**I ovanstående har vi:**
- **Förhindrar** standardbeteendet för formulärinskickning som skulle uppdatera sidan
- **Extraherar** användarinmatningsvärden från API-nyckel- och regionfälten
- **Skickar** formulärdata till funktionen `setUpUser()` för bearbetning
- **Upprätthåller** en en-sidig applikationsbeteende genom att undvika siduppdateringar

✅ Kom ihåg att dina HTML-formulärfält inkluderar attributet `required`, så webbläsaren validerar automatiskt att användare tillhandahåller både API-nyckel och region innan denna funktion körs.

## Ställ in användarpreferenser

Funktionen `setUpUser` ansvarar för att spara användarens uppgifter och initiera det första API-anropet. Detta skapar en smidig övergång från inställning till att visa resultat.

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

**Steg för steg, här är vad som händer:**
- **Sparar** API-nyckeln och regionnamnet i lokal lagring för framtida användning
- **Visar** en laddningsindikator för att informera användare om att data hämtas
- **Rensar** eventuella tidigare felmeddelanden från visningen
- **Avslöjar** rensa-knappen för användare att återställa sina inställningar senare
- **Initierar** API-anropet för att hämta verklig koldioxidanvändningsdata

Denna funktion skapar en sömlös användarupplevelse genom att hantera både datalagring och gränssnittsuppdateringar i en samordnad åtgärd.

## Visa koldioxidanvändningsdata

Nu ska vi koppla ditt tillägg till externa datakällor via API:er. Detta förvandlar ditt tillägg från ett fristående verktyg till något som kan få tillgång till realtidsinformation från hela internet.

**Förstå API:er**

[API:er](https://www.webopedia.com/TERM/A/API.html) är hur olika applikationer kommunicerar med varandra. Tänk på dem som telegrafsystemet som kopplade avlägsna städer på 1800-talet - operatörer skickade förfrågningar till avlägsna stationer och fick svar med den begärda informationen. Varje gång du kollar sociala medier, ställer en fråga till en röstassistent eller använder en leveransapp, underlättar API:er dessa datautbyten.

**Nyckelkoncept om REST API:er:**
- **REST** står för 'Representational State Transfer'
- **Använder** standard HTTP-metoder (GET, POST, PUT, DELETE) för att interagera med data
- **Returnerar** data i förutsägbara format, vanligtvis JSON
- **Tillhandahåller** konsekventa, URL-baserade slutpunkter för olika typer av förfrågningar

✅ [CO2 Signal API](https://www.co2signal.com/) vi ska använda tillhandahåller realtidsdata om koldioxidintensitet från elektriska nät världen över. Detta hjälper användare att förstå miljöpåverkan av deras elförbrukning!

> 💡 **Förstå Asynkron JavaScript**: Nyckelordet [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) gör det möjligt för din kod att hantera flera operationer samtidigt. När du begär data från en server vill du inte att hela tillägget ska frysa - det skulle vara som att flygtrafikledningen stoppar all verksamhet medan de väntar på svar från ett flygplan.
>
> **Nyckelfördelar:**
> - **Upprätthåller** tilläggets responsivitet medan data laddas
> - **Tillåter** annan kod att fortsätta exekveras under nätverksförfrågningar
> - **Förbättrar** kodläsbarheten jämfört med traditionella callback-mönster
> - **Möjliggör** graciös felhantering för nätverksproblem

Här är en snabb video om `async`:

[![Async och Await för att hantera löften](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async och Await för att hantera löften")

> 🎥 Klicka på bilden ovan för en video om async/await.

Skapa funktionen för att hämta och visa koldioxidanvändningsdata:

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

**Bryta ner vad som händer här:**
- **Använder** den moderna `fetch()`-API:n istället för externa bibliotek som Axios för renare, beroendefri kod
- **Implementerar** korrekt felkontroll med `response.ok` för att fånga API-fel tidigt
- **Hantera** asynkrona operationer med `async/await` för mer läsbar kodflöde
- **Autentiserar** med CO2 Signal API med hjälp av `auth-token`-headern
- **Analyserar** JSON-svar och extraherar information om koldioxidintensitet
- **Uppdaterar** flera UI-element med formaterad miljödata
- **Tillhandahåller** användarvänliga felmeddelanden när API-anrop misslyckas

**Nyckelmoderna JavaScript-koncept som demonstreras:**
- **Mallsträngar** med `${}`-syntax för ren strängformatering
- **Felhantering** med try/catch-block för robusta applikationer
- **Async/await**-mönster för att hantera nätverksförfrågningar graciöst
- **Objektdestrukturering** för att extrahera specifik data från API-svar
- **Metodkedjning** för flera DOM-manipulationer

✅ Denna funktion demonstrerar flera viktiga webbutvecklingskoncept - kommunikation med externa servrar, hantering av autentisering, bearbetning av data, uppdatering av gränssnitt och hantering av fel graciöst. Dessa är grundläggande färdigheter som professionella utvecklare använder regelbundet.

🎉 **Vad du har åstadkommit:** Du har skapat ett webbläsartillägg som:
- **Kopplar** till internet och hämtar verklig miljödata
- **Består** användarinställningar mellan sessioner
- **Hantera** fel graciöst istället för att krascha
- **Tillhandahåller** en smidig, professionell användarupplevelse

Testa ditt arbete genom att köra `npm run build` och uppdatera ditt tillägg i webbläsaren. Du har nu en fungerande spårare för koldioxidavtryck. Nästa lektion kommer att lägga till dynamisk ikonfunktionalitet för att slutföra tillägget.

---

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Förbättra webbläsartillägget genom att lägga till förbättringar för felhantering och användarupplevelsefunktioner. Denna utmaning hjälper dig att öva på att arbeta med API:er, lokal lagring och DOM-manipulation med moderna JavaScript-mönster.

**Uppmaning:** Skapa en förbättrad version av funktionen displayCarbonUsage som inkluderar: 1) En återförsöksmekanism för misslyckade API-anrop med exponentiell backoff, 2) Inmatningsvalidering för regionskoden innan API-anropet görs, 3) En laddningsanimation med progressindikatorer, 4) Caching av API-svar i lokal lagring med utgångstidsstämplar (cache i 30 minuter), och 5) En funktion för att visa historiska data från tidigare API-anrop. Lägg också till korrekta TypeScript-stil JSDoc-kommentarer för att dokumentera alla funktionsparametrar och returtyper.

Läs mer om [agentläge](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## 🚀 Utmaning

Utöka din förståelse för API:er genom att utforska den stora mängden webbläsarbaserade API:er som finns tillgängliga för webbutveckling. Välj en av dessa webbläsar-API:er och bygg en liten demonstration:

- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - Hämta användarens aktuella plats
- [Notification API](https://developer.mozilla.org/docs/Web/API/Notifications_API) - Skicka skrivbordsnotifikationer
- [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) - Skapa interaktiva draggränssnitt
- [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) - Avancerade tekniker för lokal lagring
- [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API) - Modernt alternativ till XMLHttpRequest

**Forskningsfrågor att överväga:**
- Vilka verkliga problem löser detta API?
- Hur hanterar API:et fel och kantfall?
- Vilka säkerhetsöverväganden finns vid användning av detta API?
- Hur brett stöds detta API i olika webbläsare?

Efter din forskning, identifiera vilka egenskaper som gör ett API utvecklarvänligt och pålitligt.

## Efterföreläsningsquiz

[Efterföreläsningsquiz](https://ff-quizzes.netlify.app/web/quiz/26)

## Granskning & Självstudier
Du lärde dig om LocalStorage och API:er i denna lektion, båda mycket användbara för den professionella webbutvecklaren. Kan du fundera på hur dessa två saker fungerar tillsammans? Tänk på hur du skulle designa en webbplats som lagrar objekt för att användas av ett API.

## Uppgift

[Adoptera ett API](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.