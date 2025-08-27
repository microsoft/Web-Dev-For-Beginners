<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-26T22:35:07+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "da"
}
-->
# Browserudvidelsesprojekt del 2: Kald en API, brug lokal lagring

## Quiz før lektionen

[Quiz før lektionen](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/25)

### Introduktion

I denne lektion vil du kalde en API ved at indsende din browserudvidelses formular og vise resultaterne i din browserudvidelse. Derudover vil du lære, hvordan du kan gemme data i din browsers lokale lagring til fremtidig reference og brug.

✅ Følg de nummererede segmenter i de relevante filer for at vide, hvor du skal placere din kode.

### Opsæt elementerne til manipulation i udvidelsen:

På dette tidspunkt har du oprettet HTML til formularen og resultaternes `<div>` for din browserudvidelse. Fra nu af skal du arbejde i filen `/src/index.js` og bygge din udvidelse lidt efter lidt. Henvis til [den forrige lektion](../1-about-browsers/README.md) for at få din projektopsætning og byggeprocessen på plads.

Arbejd i din `index.js`-fil, og start med at oprette nogle `const`-variabler til at holde værdierne forbundet med forskellige felter:

```JavaScript
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

Alle disse felter refereres til via deres CSS-klasse, som du opsatte i HTML i den forrige lektion.

### Tilføj lyttere

Tilføj derefter event listeners til formularen og knappen, der nulstiller formularen, så der sker noget, hvis en bruger indsender formularen eller klikker på nulstillingsknappen. Tilføj også kaldet til at initialisere appen nederst i filen:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Bemærk den forkortede metode, der bruges til at lytte efter en submit- eller klikbegivenhed, og hvordan begivenheden sendes til handleSubmit- eller reset-funktionerne. Kan du skrive den tilsvarende lange version af denne forkortelse? Hvilken foretrækker du?

### Byg init()-funktionen og reset()-funktionen:

Nu skal du bygge funktionen, der initialiserer udvidelsen, kaldet init():

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

I denne funktion er der noget interessant logik. Når du læser igennem den, kan du se, hvad der sker?

- To `const` oprettes for at tjekke, om brugeren har gemt en APIKey og regionskode i lokal lagring.
- Hvis en af dem er null, vis formularen ved at ændre dens stil til at blive vist som 'block'.
- Skjul resultaterne, loading og clearBtn, og sæt eventuel fejltekst til en tom streng.
- Hvis der findes en nøgle og region, start en rutine for at:
  - Kalde API'en for at få data om kulstofbrug.
  - Skjule resultatområdet.
  - Skjule formularen.
  - Vise nulstillingsknappen.

Før du går videre, er det nyttigt at lære om et meget vigtigt koncept, der er tilgængeligt i browsere: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage er en nyttig måde at gemme strenge i browseren som et `key-value`-par. Denne type webopbevaring kan manipuleres af JavaScript til at administrere data i browseren. LocalStorage udløber ikke, mens SessionStorage, en anden slags webopbevaring, ryddes, når browseren lukkes. De forskellige typer lagring har fordele og ulemper ved deres brug.

> Bemærk - din browserudvidelse har sin egen lokale lagring; hovedbrowser-vinduet er en anden instans og opfører sig separat.

Du sætter din APIKey til at have en strengværdi, for eksempel, og du kan se, at den er sat i Edge ved at "inspicere" en webside (du kan højreklikke på en browser for at inspicere) og gå til fanen Applications for at se lagringen.

![Lokallagringspanel](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.da.png)

✅ Tænk over situationer, hvor du IKKE ville ønske at gemme nogle data i LocalStorage. Generelt er det en dårlig idé at placere API-nøgler i LocalStorage! Kan du se hvorfor? I vores tilfælde, da vores app udelukkende er til læring og ikke vil blive udgivet i en app-butik, vil vi bruge denne metode.

Bemærk, at du bruger Web API til at manipulere LocalStorage, enten ved at bruge `getItem()`, `setItem()` eller `removeItem()`. Det er bredt understøttet på tværs af browsere.

Før du bygger `displayCarbonUsage()`-funktionen, der kaldes i `init()`, lad os bygge funktionaliteten til at håndtere den indledende formularindsendelse.

### Håndter formularindsendelsen

Opret en funktion kaldet `handleSubmit`, der accepterer et event-argument `(e)`. Stop begivenheden fra at propagere (i dette tilfælde vil vi stoppe browseren fra at opdatere) og kald en ny funktion, `setUpUser`, med argumenterne `apiKey.value` og `region.value`. På denne måde bruger du de to værdier, der bringes ind via den indledende formular, når de relevante felter er udfyldt.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Frisk din hukommelse op - HTML'en, du opsatte i den sidste lektion, har to inputfelter, hvis `values` fanges via de `const`, du opsatte øverst i filen, og de er begge `required`, så browseren forhindrer brugere i at indtaste null-værdier.

### Opsæt brugeren

Videre til `setUpUser`-funktionen, her sætter du værdier for lokal lagring for apiKey og regionName. Tilføj en ny funktion:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

Denne funktion viser en loading-besked, mens API'en kaldes. På dette tidspunkt er du nået til at oprette den vigtigste funktion i denne browserudvidelse!

### Vis kulstofbrug

Endelig er det tid til at forespørge API'en!

Før vi går videre, bør vi diskutere API'er. API'er, eller [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), er et kritisk element i en webudviklers værktøjskasse. De giver standardmåder for programmer til at interagere og grænseflade med hinanden. For eksempel, hvis du bygger en hjemmeside, der skal forespørge en database, kan nogen have oprettet en API, du kan bruge. Mens der findes mange typer API'er, er en af de mest populære en [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Udtrykket 'REST' står for 'Representational State Transfer' og indebærer brug af forskelligt konfigurerede URL'er til at hente data. Lav lidt research om de forskellige typer API'er, der er tilgængelige for udviklere. Hvilket format tiltaler dig?

Der er vigtige ting at bemærke om denne funktion. Først, bemærk [`async`-nøgleordet](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). At skrive dine funktioner, så de kører asynkront, betyder, at de venter på, at en handling, såsom data, der returneres, bliver fuldført, før de fortsætter.

Her er en hurtig video om `async`:

[![Async og Await til håndtering af promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async og Await til håndtering af promises")

> 🎥 Klik på billedet ovenfor for en video om async/await.

Opret en ny funktion til at forespørge C02Signal API'en:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

Dette er en stor funktion. Hvad sker der her?

- Efter bedste praksis bruger du et `async`-nøgleord for at få denne funktion til at opføre sig asynkront. Funktionen indeholder et `try/catch`-blok, da den vil returnere et løfte, når API'en returnerer data. Fordi du ikke har kontrol over hastigheden, som API'en vil svare med (den kan muligvis slet ikke svare!), skal du håndtere denne usikkerhed ved at kalde den asynkront.
- Du forespørger co2signal API'en for at få data om din region ved hjælp af din APIKey. For at bruge den nøgle skal du bruge en type autentificering i dine header-parametre.
- Når API'en svarer, tildeler du forskellige elementer af dens responsdata til de dele af din skærm, du opsatte til at vise disse data.
- Hvis der opstår en fejl, eller hvis der ikke er noget resultat, viser du en fejlmeddelelse.

✅ Brug af asynkrone programmeringsmønstre er et andet meget nyttigt værktøj i din værktøjskasse. Læs [om de forskellige måder](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function), du kan konfigurere denne type kode.

Tillykke! Hvis du bygger din udvidelse (`npm run build`) og opdaterer den i din udvidelsespane, har du en fungerende udvidelse! Det eneste, der ikke fungerer, er ikonet, og det vil du rette i den næste lektion.

---

## 🚀 Udfordring

Vi har diskuteret flere typer API'er indtil videre i disse lektioner. Vælg en web-API og undersøg i dybden, hvad den tilbyder. For eksempel, kig på API'er, der er tilgængelige i browsere, såsom [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Hvad gør en API fremragende efter din mening?

## Quiz efter lektionen

[Quiz efter lektionen](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/26)

## Gennemgang & Selvstudie

Du lærte om LocalStorage og API'er i denne lektion, begge meget nyttige for den professionelle webudvikler. Kan du tænke over, hvordan disse to ting arbejder sammen? Tænk over, hvordan du ville arkitektere en hjemmeside, der gemmer elementer til brug af en API.

## Opgave

[Adoptér en API](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.