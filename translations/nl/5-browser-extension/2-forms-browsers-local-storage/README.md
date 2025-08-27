<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-27T20:44:37+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "nl"
}
-->
# Browserextensieproject Deel 2: Een API aanroepen, gebruik maken van Local Storage

## Quiz vóór de les

[Quiz vóór de les](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/25)

### Introductie

In deze les leer je hoe je een API aanroept door het formulier van je browserextensie in te vullen en de resultaten in je extensie weer te geven. Daarnaast leer je hoe je gegevens kunt opslaan in de lokale opslag van je browser voor toekomstig gebruik.

✅ Volg de genummerde segmenten in de betreffende bestanden om te weten waar je je code moet plaatsen.

### Stel de elementen in die je in de extensie wilt manipuleren:

Tegen deze tijd heb je de HTML gebouwd voor het formulier en de `<div>` voor de resultaten van je browserextensie. Vanaf nu werk je in het bestand `/src/index.js` en bouw je je extensie stap voor stap verder uit. Raadpleeg de [vorige les](../1-about-browsers/README.md) om je project op te zetten en meer te leren over het bouwproces.

Werkend in je `index.js`-bestand, begin je met het aanmaken van enkele `const`-variabelen om de waarden vast te houden die horen bij verschillende velden:

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

Al deze velden worden gerefereerd via hun CSS-class, zoals je hebt ingesteld in de HTML in de vorige les.

### Voeg event listeners toe

Voeg vervolgens event listeners toe aan het formulier en de resetknop die het formulier reset, zodat er iets gebeurt als een gebruiker het formulier indient of op de resetknop klikt. Voeg ook de aanroep toe om de app te initialiseren onderaan het bestand:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Let op de verkorte notatie die wordt gebruikt om te luisteren naar een submit- of klikgebeurtenis, en hoe de gebeurtenis wordt doorgegeven aan de functies handleSubmit of reset. Kun je het equivalent van deze verkorte notatie in een langere vorm schrijven? Welke vorm heeft jouw voorkeur?

### Bouw de init()-functie en de reset()-functie uit:

Nu ga je de functie bouwen die de extensie initialiseert, genaamd init():

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

In deze functie zit interessante logica. Als je het doorleest, kun je zien wat er gebeurt?

- Twee `const` worden ingesteld om te controleren of de gebruiker een APIKey en regiocode heeft opgeslagen in de lokale opslag.
- Als een van deze null is, wordt het formulier weergegeven door de stijl ervan in te stellen op 'block'.
- De resultaten, de laadindicator en de resetknop worden verborgen en eventuele foutmeldingen worden leeggemaakt.
- Als er een sleutel en regio bestaan, wordt een routine gestart om:
  - De API aan te roepen om gegevens over koolstofgebruik op te halen.
  - Het resultatengebied te verbergen.
  - Het formulier te verbergen.
  - De resetknop weer te geven.

Voordat je verdergaat, is het handig om meer te leren over een belangrijk concept dat beschikbaar is in browsers: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage is een handige manier om strings op te slaan in de browser als een `key-value`-paar. Dit type webopslag kan worden gemanipuleerd met JavaScript om gegevens in de browser te beheren. LocalStorage verloopt niet, terwijl SessionStorage, een ander soort webopslag, wordt gewist wanneer de browser wordt gesloten. De verschillende soorten opslag hebben hun eigen voor- en nadelen.

> Opmerking - je browserextensie heeft zijn eigen lokale opslag; het hoofdvenster van de browser is een andere instantie en werkt afzonderlijk.

Je stelt bijvoorbeeld je APIKey in met een stringwaarde, en je kunt zien dat deze is ingesteld in Edge door een webpagina te "inspecteren" (je kunt met de rechtermuisknop op een browser klikken om te inspecteren) en naar het tabblad Toepassingen te gaan om de opslag te bekijken.

![Local storage pane](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.nl.png)

✅ Denk na over situaties waarin je bepaalde gegevens NIET in LocalStorage zou willen opslaan. Over het algemeen is het een slecht idee om API-sleutels in LocalStorage op te slaan! Kun je zien waarom? In ons geval, omdat onze app puur bedoeld is om te leren en niet zal worden gepubliceerd in een app store, gebruiken we deze methode.

Merk op dat je de Web API gebruikt om LocalStorage te manipuleren, ofwel met `getItem()`, `setItem()` of `removeItem()`. Het wordt breed ondersteund in browsers.

Voordat je de functie `displayCarbonUsage()` bouwt die wordt aangeroepen in `init()`, laten we de functionaliteit bouwen om de initiële formulierindiening af te handelen.

### Verwerk de formulierindiening

Maak een functie genaamd `handleSubmit` die een gebeurtenisargument `(e)` accepteert. Stop de gebeurtenis van propagatie (in dit geval willen we voorkomen dat de browser ververst) en roep een nieuwe functie aan, `setUpUser`, waarbij je de argumenten `apiKey.value` en `region.value` doorgeeft. Op deze manier gebruik je de twee waarden die via het initiële formulier worden ingevoerd wanneer de betreffende velden zijn ingevuld.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Verfris je geheugen - de HTML die je in de vorige les hebt ingesteld, heeft twee invoervelden waarvan de `values` worden vastgelegd via de `const` die je bovenaan het bestand hebt ingesteld, en ze zijn beide `required`, zodat de browser voorkomt dat gebruikers null-waarden invoeren.

### Stel de gebruiker in

Ga verder met de functie `setUpUser`, waar je de waarden voor apiKey en regionName in de lokale opslag instelt. Voeg een nieuwe functie toe:

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

Deze functie stelt een laadbericht in dat wordt weergegeven terwijl de API wordt aangeroepen. Op dit punt ben je aangekomen bij het maken van de belangrijkste functie van deze browserextensie!

### Toon koolstofgebruik

Eindelijk is het tijd om de API aan te roepen!

Voordat we verder gaan, moeten we het hebben over API's. API's, of [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), zijn een cruciaal onderdeel van de gereedschapskist van een webontwikkelaar. Ze bieden standaardmanieren voor programma's om met elkaar te communiceren en te integreren. Als je bijvoorbeeld een website bouwt die een database moet raadplegen, kan iemand een API hebben gemaakt die je kunt gebruiken. Hoewel er veel soorten API's zijn, is een van de populairste een [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ De term 'REST' staat voor 'Representational State Transfer' en maakt gebruik van verschillende geconfigureerde URL's om gegevens op te halen. Doe wat onderzoek naar de verschillende soorten API's die beschikbaar zijn voor ontwikkelaars. Welke vorm spreekt jou het meest aan?

Er zijn belangrijke dingen om op te merken over deze functie. Ten eerste, let op het [`async`-sleutelwoord](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Door je functies asynchroon te schrijven, zorg je ervoor dat ze wachten op een actie, zoals het retourneren van gegevens, voordat ze doorgaan.

Hier is een korte video over `async`:

[![Async en Await voor het beheren van promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async en Await voor het beheren van promises")

> 🎥 Klik op de afbeelding hierboven voor een video over async/await.

Maak een nieuwe functie om de C02Signal API aan te roepen:

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

Dit is een grote functie. Wat gebeurt hier?

- Volgens best practices gebruik je het `async`-sleutelwoord om deze functie asynchroon te laten werken. De functie bevat een `try/catch`-blok omdat deze een belofte retourneert wanneer de API gegevens retourneert. Omdat je geen controle hebt over de snelheid waarmee de API reageert (of helemaal niet reageert!), moet je met deze onzekerheid omgaan door deze asynchroon aan te roepen.
- Je roept de co2signal API aan om gegevens van je regio op te halen, met behulp van je API-sleutel. Om die sleutel te gebruiken, moet je een vorm van authenticatie gebruiken in je headerparameters.
- Zodra de API reageert, wijs je verschillende elementen van de responsgegevens toe aan de delen van je scherm die je hebt ingesteld om deze gegevens weer te geven.
- Als er een fout is, of als er geen resultaat is, toon je een foutmelding.

✅ Het gebruik van asynchrone programmeerpatronen is een andere zeer nuttige vaardigheid in je gereedschapskist. Lees [over de verschillende manieren](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) waarop je dit type code kunt configureren.

Gefeliciteerd! Als je je extensie bouwt (`npm run build`) en deze vernieuwt in je extensiepaneel, heb je een werkende extensie! Het enige dat nog niet werkt, is het pictogram, en dat los je op in de volgende les.

---

## 🚀 Uitdaging

We hebben in deze lessen verschillende soorten API's besproken. Kies een web-API en onderzoek in detail wat deze biedt. Kijk bijvoorbeeld naar API's die beschikbaar zijn binnen browsers, zoals de [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Wat maakt volgens jou een goede API?

## Quiz na de les

[Quiz na de les](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/26)

## Herhaling & Zelfstudie

In deze les heb je geleerd over LocalStorage en API's, beide zeer nuttig voor de professionele webontwikkelaar. Kun je bedenken hoe deze twee dingen samenwerken? Denk na over hoe je een website zou ontwerpen die items opslaat om te worden gebruikt door een API.

## Opdracht

[Adopteer een API](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.