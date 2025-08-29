<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T00:56:58+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "nl"
}
-->
# Browserextensieproject Deel 2: Een API aanroepen, gebruik maken van Local Storage

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/25)

### Introductie

In deze les leer je hoe je een API kunt aanroepen door het formulier van je browserextensie in te dienen en de resultaten in je extensie weer te geven. Daarnaast leer je hoe je gegevens kunt opslaan in de lokale opslag van je browser voor toekomstig gebruik en referentie.

✅ Volg de genummerde segmenten in de juiste bestanden om te weten waar je je code moet plaatsen.

### Stel de elementen in die je in de extensie wilt manipuleren:

Op dit punt heb je de HTML gebouwd voor het formulier en de resultaten `<div>` van je browserextensie. Vanaf nu werk je in het bestand `/src/index.js` en bouw je je extensie stap voor stap. Raadpleeg de [vorige les](../1-about-browsers/README.md) over het opzetten van je project en het bouwproces.

Werkend in je `index.js`-bestand, begin je met het maken van enkele `const`-variabelen om de waarden te bewaren die gekoppeld zijn aan verschillende velden:

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

Al deze velden worden gerefereerd via hun CSS-klasse, zoals je hebt ingesteld in de HTML in de vorige les.

### Voeg listeners toe

Voeg vervolgens event listeners toe aan het formulier en de knop om het formulier te wissen, zodat er iets gebeurt wanneer een gebruiker het formulier indient of op die resetknop klikt. Voeg ook de aanroep toe om de app te initialiseren onderaan het bestand:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Let op de verkorte notatie die wordt gebruikt om te luisteren naar een submit- of klikgebeurtenis, en hoe de gebeurtenis wordt doorgegeven aan de functies handleSubmit of reset. Kun je de equivalente langere versie van deze verkorte notatie schrijven? Welke versie heeft jouw voorkeur?

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

In deze functie zit interessante logica. Kun je zien wat er gebeurt?

- Twee `const` worden ingesteld om te controleren of de gebruiker een APIKey en regio-code heeft opgeslagen in de lokale opslag.
- Als een van deze null is, wordt het formulier weergegeven door de stijl ervan te veranderen naar 'block'.
- Verberg de resultaten, de laadindicator en de clearBtn en stel eventuele foutmeldingen in op een lege string.
- Als er een sleutel en regio bestaan, start een routine om:
  - De API aan te roepen om gegevens over koolstofgebruik op te halen.
  - Het resultatengebied te verbergen.
  - Het formulier te verbergen.
  - De resetknop weer te geven.

Voordat je verder gaat, is het handig om meer te leren over een belangrijk concept dat beschikbaar is in browsers: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage is een handige manier om strings in de browser op te slaan als een `key-value`-paar. Dit type webopslag kan worden gemanipuleerd door JavaScript om gegevens in de browser te beheren. LocalStorage verloopt niet, terwijl SessionStorage, een ander soort webopslag, wordt gewist wanneer de browser wordt gesloten. De verschillende soorten opslag hebben hun eigen voor- en nadelen.

> Opmerking - je browserextensie heeft zijn eigen lokale opslag; het hoofdvenster van de browser is een andere instantie en gedraagt zich afzonderlijk.

Je stelt je APIKey in met een stringwaarde, bijvoorbeeld, en je kunt zien dat deze is ingesteld in Edge door een webpagina te "inspecteren" (je kunt met de rechtermuisknop op een browser klikken om te inspecteren) en naar het tabblad Toepassingen te gaan om de opslag te bekijken.

![Local storage pane](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.nl.png)

✅ Denk na over situaties waarin je bepaalde gegevens NIET in LocalStorage zou willen opslaan. Over het algemeen is het een slecht idee om API-sleutels in LocalStorage te plaatsen! Kun je zien waarom? In ons geval, omdat onze app puur bedoeld is om te leren en niet zal worden gepubliceerd in een app store, gebruiken we deze methode.

Merk op dat je de Web API gebruikt om LocalStorage te manipuleren, door gebruik te maken van `getItem()`, `setItem()`, of `removeItem()`. Het wordt breed ondersteund in browsers.

Voordat je de functie `displayCarbonUsage()` bouwt die wordt aangeroepen in `init()`, laten we de functionaliteit bouwen om de initiële formulierinzending te verwerken.

### Verwerk de formulierinzending

Maak een functie genaamd `handleSubmit` die een event-argument `(e)` accepteert. Stop de gebeurtenis van propagatie (in dit geval willen we voorkomen dat de browser ververst) en roep een nieuwe functie aan, `setUpUser`, waarbij je de argumenten `apiKey.value` en `region.value` doorgeeft. Op deze manier gebruik je de twee waarden die via het initiële formulier worden binnengebracht wanneer de juiste velden zijn ingevuld.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Verfris je geheugen - de HTML die je in de vorige les hebt ingesteld, heeft twee invoervelden waarvan de `values` worden vastgelegd via de `const` die je bovenaan het bestand hebt ingesteld, en ze zijn beide `required`, zodat de browser gebruikers stopt van het invoeren van null-waarden.

### Stel de gebruiker in

Ga verder met de functie `setUpUser`, hier stel je de waarden voor lokale opslag in voor apiKey en regionName. Voeg een nieuwe functie toe:

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

Deze functie stelt een laadbericht in om te tonen terwijl de API wordt aangeroepen. Op dit punt ben je aangekomen bij het maken van de belangrijkste functie van deze browserextensie!

### Toon koolstofgebruik

Eindelijk is het tijd om de API te raadplegen!

Voordat we verder gaan, moeten we APIs bespreken. APIs, of [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), zijn een cruciaal onderdeel van de gereedschapskist van een webontwikkelaar. Ze bieden standaard manieren voor programma's om met elkaar te communiceren en te interfacen. Bijvoorbeeld, als je een website bouwt die een database moet raadplegen, heeft iemand mogelijk een API gemaakt die je kunt gebruiken. Hoewel er veel soorten APIs zijn, is een van de meest populaire een [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ De term 'REST' staat voor 'Representational State Transfer' en maakt gebruik van verschillende geconfigureerde URLs om gegevens op te halen. Doe wat onderzoek naar de verschillende soorten APIs die beschikbaar zijn voor ontwikkelaars. Welk formaat spreekt jou aan?

Er zijn belangrijke dingen om op te merken over deze functie. Ten eerste, let op het [`async` keyword](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Door je functies zo te schrijven dat ze asynchroon werken, wachten ze op een actie, zoals het retourneren van gegevens, voordat ze doorgaan.

Hier is een korte video over `async`:

[![Async en Await voor het beheren van promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async en Await voor het beheren van promises")

> 🎥 Klik op de afbeelding hierboven voor een video over async/await.

Maak een nieuwe functie om de C02Signal API te raadplegen:

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

- Volgens best practices gebruik je een `async` keyword om deze functie asynchroon te laten werken. De functie bevat een `try/catch`-blok omdat het een belofte zal retourneren wanneer de API gegevens retourneert. Omdat je geen controle hebt over de snelheid waarmee de API zal reageren (het kan helemaal niet reageren!), moet je deze onzekerheid asynchroon afhandelen.
- Je raadpleegt de co2signal API om gegevens over je regio op te halen, met behulp van je API-sleutel. Om die sleutel te gebruiken, moet je een soort authenticatie gebruiken in je headerparameters.
- Zodra de API reageert, wijs je verschillende elementen van de responsgegevens toe aan de delen van je scherm die je hebt ingesteld om deze gegevens weer te geven.
- Als er een fout is, of als er geen resultaat is, toon je een foutmelding.

✅ Het gebruik van asynchrone programmeerpatronen is een andere zeer nuttige tool in je gereedschapskist. Lees [over de verschillende manieren](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) waarop je dit type code kunt configureren.

Gefeliciteerd! Als je je extensie bouwt (`npm run build`) en deze ververst in je extensiepaneel, heb je een werkende extensie! Het enige dat nog niet werkt, is het pictogram, en dat fix je in de volgende les.

---

## 🚀 Uitdaging

We hebben tot nu toe verschillende soorten APIs besproken in deze lessen. Kies een web-API en onderzoek in detail wat deze biedt. Bekijk bijvoorbeeld de APIs die beschikbaar zijn binnen browsers, zoals de [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Wat maakt volgens jou een geweldige API?

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/26)

## Review & Zelfstudie

Je hebt in deze les geleerd over LocalStorage en APIs, beide zeer nuttig voor de professionele webontwikkelaar. Kun je bedenken hoe deze twee dingen samenwerken? Denk na over hoe je een website zou ontwerpen die items opslaat om te worden gebruikt door een API.

## Opdracht

[Adopteer een API](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.