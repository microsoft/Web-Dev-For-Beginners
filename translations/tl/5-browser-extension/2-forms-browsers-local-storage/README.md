<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-22T15:44:14+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "tl"
}
-->
# Proyekto ng Browser Extension Bahagi 2: Tumawag sa API, Gumamit ng Local Storage

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/25)

## Panimula

Naalala mo ba ang browser extension na sinimulan mong gawin? Sa ngayon, mayroon kang magandang form, ngunit ito ay static pa rin. Ngayon, bibigyan natin ito ng buhay sa pamamagitan ng pagkonekta sa totoong data at pagbibigay ng memorya.

Isipin ang mga computer ng Apollo mission control - hindi lang sila nagpapakita ng nakapirming impormasyon. Patuloy silang nakikipag-ugnayan sa spacecraft, ina-update gamit ang telemetry data, at naaalala ang mahahalagang parameter ng misyon. Ganitong uri ng dynamic na pag-uugali ang itatayo natin ngayon. Ang iyong extension ay makakakuha ng totoong environmental data mula sa internet at maaalala ang iyong mga setting para sa susunod.

Ang API integration ay maaaring mukhang kumplikado, ngunit ito ay talagang pagtuturo sa iyong code kung paano makipag-usap sa ibang mga serbisyo. Kung ikaw ay kumukuha ng data ng panahon, mga feed ng social media, o impormasyon tungkol sa carbon footprint tulad ng gagawin natin ngayon, ito ay tungkol sa pagtatatag ng mga digital na koneksyon. Susuriin din natin kung paano maaaring mag-imbak ng impormasyon ang mga browser - katulad ng kung paano ginamit ng mga library ang mga card catalog upang maalala kung saan naroroon ang mga libro.

Sa pagtatapos ng araling ito, magkakaroon ka ng browser extension na kumukuha ng totoong data, nag-iimbak ng mga kagustuhan ng user, at nagbibigay ng maayos na karanasan. Simulan na natin!

✅ Sundin ang mga naka-number na segment sa mga kaukulang file upang malaman kung saan ilalagay ang iyong code.

## I-set up ang mga elemento na gagamitin sa extension

Bago manipulahin ng iyong JavaScript ang interface, kailangan nito ng mga reference sa mga partikular na HTML element. Isipin ito na parang teleskopyo na kailangang itutok sa mga partikular na bituin - bago mapag-aralan ni Galileo ang mga buwan ng Jupiter, kailangan niyang hanapin at ituon ang Jupiter mismo.

Sa iyong `index.js` file, gagawa tayo ng mga `const` variable na kumukuha ng mga reference sa bawat mahalagang elemento ng form. Katulad ito ng kung paano nilalagyan ng label ng mga siyentipiko ang kanilang kagamitan - sa halip na maghanap sa buong laboratoryo sa bawat oras, maaari nilang direktang ma-access ang kanilang kailangan.

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

**Narito ang ginagawa ng code na ito:**
- **Kinukuha** ang mga elemento ng form gamit ang `document.querySelector()` na may CSS class selectors
- **Gumagawa** ng mga reference sa mga input field para sa pangalan ng rehiyon at API key
- **Nag-eestablish** ng mga koneksyon sa mga elemento ng display para sa carbon usage data
- **Nagse-set up** ng access sa mga UI element tulad ng loading indicators at error messages
- **Nag-iimbak** ng bawat reference ng elemento sa isang `const` variable para sa madaling paggamit sa buong code

## Magdagdag ng event listeners

Ngayon gagawin natin ang iyong extension na tumugon sa mga aksyon ng user. Ang mga event listener ay paraan ng iyong code upang subaybayan ang mga interaksyon ng user. Isipin ito na parang mga operator sa mga maagang telephone exchanges - nakikinig sila para sa mga papasok na tawag at ikinokonekta ang tamang circuit kapag may gustong tumawag.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Pag-unawa sa mga konsepto:**
- **Nag-a-attach** ng submit listener sa form na nagti-trigger kapag pinindot ng user ang Enter o ang submit button
- **Nagkokonekta** ng click listener sa clear button para i-reset ang form
- **Nagpapasa** ng event object `(e)` sa mga handler function para sa karagdagang kontrol
- **Tumatawag** sa `init()` function kaagad upang i-set up ang initial state ng iyong extension

✅ Pansinin ang shorthand arrow function syntax na ginamit dito. Ang modernong JavaScript na approach na ito ay mas malinis kaysa sa tradisyunal na function expressions, ngunit pareho silang gumagana nang maayos!

## Bumuo ng initialization at reset functions

Gumawa tayo ng initialization logic para sa iyong extension. Ang `init()` function ay parang navigation system ng barko na nagche-check ng mga instrumento - tinutukoy nito ang kasalukuyang estado at ina-adjust ang interface nang naaayon. Tinitingnan nito kung may gumamit na sa iyong extension dati at ina-load ang kanilang mga nakaraang setting.

Ang `reset()` function ay nagbibigay sa mga user ng bagong simula - katulad ng kung paano nire-reset ng mga siyentipiko ang kanilang mga instrumento sa pagitan ng mga eksperimento upang matiyak ang malinis na data.

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

**Pagbubuo ng mga nangyayari dito:**
- **Kinukuha** ang naka-imbak na API key at rehiyon mula sa local storage ng browser
- **Tinitingnan** kung ito ay unang beses na user (walang naka-imbak na credentials) o bumabalik na user
- **Ipinapakita** ang setup form para sa mga bagong user at itinatago ang ibang mga elemento ng interface
- **Ina-load** ang naka-save na data nang awtomatiko para sa mga bumabalik na user at ipinapakita ang reset option
- **Pinamamahalaan** ang estado ng user interface batay sa available na data

**Mga pangunahing konsepto tungkol sa Local Storage:**
- **Nagpapanatili** ng data sa pagitan ng mga session ng browser (hindi tulad ng session storage)
- **Nag-iimbak** ng data bilang key-value pairs gamit ang `getItem()` at `setItem()`
- **Nagbabalik** ng `null` kapag walang data para sa isang partikular na key
- **Nagbibigay** ng simpleng paraan upang maalala ang mga kagustuhan at setting ng user

> 💡 **Pag-unawa sa Browser Storage**: Ang [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) ay parang pagbibigay ng persistent memory sa iyong extension. Isipin kung paano ang sinaunang Library of Alexandria ay nag-imbak ng mga scroll - nananatiling available ang impormasyon kahit na umalis at bumalik ang mga iskolar.
>
> **Mga pangunahing katangian:**
> - **Nagpapanatili** ng data kahit na isara mo ang browser
> - **Nananatili** kahit na i-restart ang computer o mag-crash ang browser
> - **Nagbibigay** ng malaking storage space para sa mga kagustuhan ng user
> - **Nag-aalok** ng instant access nang walang network delays

> **Mahalagang Paalala**: Ang browser extension mo ay may sariling hiwalay na local storage na iba sa regular na mga web page. Nagbibigay ito ng seguridad at pumipigil sa mga conflict sa ibang mga website.

Makikita mo ang iyong naka-imbak na data sa pamamagitan ng pagbukas ng Developer Tools ng browser (F12), pagpunta sa **Application** tab, at pag-expand sa **Local Storage** section.

![Local storage pane](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.tl.png)

> ⚠️ **Pagsasaalang-alang sa Seguridad**: Sa mga production application, ang pag-iimbak ng API keys sa LocalStorage ay may mga panganib sa seguridad dahil maa-access ng JavaScript ang data na ito. Para sa layunin ng pag-aaral, ang approach na ito ay maayos, ngunit ang mga totoong application ay dapat gumamit ng secure server-side storage para sa mga sensitibong credentials.

## Paano i-submit ang form

Ngayon, haharapin natin kung ano ang mangyayari kapag may nag-submit ng iyong form. Sa default, nire-reload ng mga browser ang page kapag na-submit ang mga form, ngunit i-intercept natin ang behavior na ito upang lumikha ng mas maayos na karanasan.

Ang approach na ito ay katulad ng kung paano hinahandle ng mission control ang komunikasyon ng spacecraft - sa halip na i-reset ang buong sistema para sa bawat transmission, pinapanatili nila ang tuloy-tuloy na operasyon habang pinoproseso ang bagong impormasyon.

Gumawa ng function na kumukuha ng event ng form submission at nag-eextract ng input ng user:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**Sa itaas, ginawa natin ang:**
- **Pinipigilan** ang default na behavior ng form submission na magre-refresh ng page
- **Kinukuha** ang mga input value ng user mula sa API key at region fields
- **Ipinapasa** ang data ng form sa `setUpUser()` function para sa pagproseso
- **Pinapanatili** ang single-page application behavior sa pamamagitan ng pag-iwas sa page reloads

✅ Tandaan na ang iyong HTML form fields ay may `required` attribute, kaya awtomatikong tinitiyak ng browser na magbigay ang user ng parehong API key at rehiyon bago tumakbo ang function na ito.

## I-set up ang mga kagustuhan ng user

Ang `setUpUser` function ang responsable sa pag-save ng credentials ng user at pag-initiate ng unang API call. Ito ay lumilikha ng maayos na transition mula sa setup patungo sa pagpapakita ng resulta.

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

**Hakbang-hakbang, narito ang nangyayari:**
- **Sine-save** ang API key at pangalan ng rehiyon sa local storage para sa susunod na paggamit
- **Ipinapakita** ang loading indicator upang ipaalam sa user na kumukuha ng data
- **Nililinis** ang anumang naunang error messages mula sa display
- **Ipinapakita** ang clear button para sa user na i-reset ang kanilang mga setting sa hinaharap
- **Ini-initiate** ang API call upang kumuha ng totoong carbon usage data

Ang function na ito ay lumilikha ng seamless user experience sa pamamagitan ng pamamahala ng parehong data persistence at mga update sa user interface sa isang coordinated na aksyon.

## Ipakita ang carbon usage data

Ngayon, ikokonekta natin ang iyong extension sa mga external data sources sa pamamagitan ng APIs. Binabago nito ang iyong extension mula sa isang standalone tool patungo sa isang bagay na maaaring ma-access ang real-time na impormasyon mula sa internet.

**Pag-unawa sa APIs**

[APIs](https://www.webopedia.com/TERM/A/API.html) ang paraan kung paano nagkakaroon ng komunikasyon ang iba't ibang application sa isa't isa. Isipin ito na parang telegraph system na nagkonekta sa mga malalayong lungsod noong ika-19 na siglo - ang mga operator ay nagpapadala ng mga request sa malalayong istasyon at tumatanggap ng mga sagot na may hinihinging impormasyon. Sa tuwing nagche-check ka ng social media, nagtatanong sa voice assistant, o gumagamit ng delivery app, ang APIs ang nagpapadali sa mga data exchanges.

**Mga pangunahing konsepto tungkol sa REST APIs:**
- **REST** ay nangangahulugang 'Representational State Transfer'
- **Gumagamit** ng standard HTTP methods (GET, POST, PUT, DELETE) upang makipag-ugnayan sa data
- **Nagbabalik** ng data sa predictable formats, karaniwang JSON
- **Nagbibigay** ng consistent, URL-based endpoints para sa iba't ibang uri ng request

✅ Ang [CO2 Signal API](https://www.co2signal.com/) na gagamitin natin ay nagbibigay ng real-time carbon intensity data mula sa mga electrical grid sa buong mundo. Nakakatulong ito sa mga user na maunawaan ang environmental impact ng kanilang electricity usage!

> 💡 **Pag-unawa sa Asynchronous JavaScript**: Ang [`async` keyword](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) ay nagbibigay-daan sa iyong code na mag-handle ng maraming operasyon nang sabay-sabay. Kapag humihiling ka ng data mula sa server, ayaw mong mag-freeze ang buong extension - parang air traffic control na humihinto sa lahat ng operasyon habang naghihintay ng sagot mula sa isang eroplano.
>
> **Mga pangunahing benepisyo:**
> - **Pinapanatili** ang responsiveness ng extension habang naglo-load ang data
> - **Pinapayagan** ang ibang code na magpatuloy sa pag-execute habang may network requests
> - **Pinapaganda** ang readability ng code kumpara sa tradisyunal na callback patterns
> - **Nagbibigay** ng graceful error handling para sa mga network issues

Narito ang isang mabilis na video tungkol sa `async`:

[![Async and Await para sa pamamahala ng promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await para sa pamamahala ng promises")

> 🎥 I-click ang imahe sa itaas para sa video tungkol sa async/await.

Gumawa ng function upang kumuha at ipakita ang carbon usage data:

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

**Pagbubuo ng mga nangyayari dito:**
- **Gumagamit** ng modernong `fetch()` API sa halip na mga external libraries tulad ng Axios para sa mas malinis, dependency-free na code
- **Nagpapatupad** ng tamang error checking gamit ang `response.ok` upang ma-catch ang API failures nang maaga
- **Nagha-handle** ng asynchronous operations gamit ang `async/await` para sa mas nababasang code flow
- **Nag-aauthenticate** sa CO2 Signal API gamit ang `auth-token` header
- **Nagpa-parse** ng JSON response data at kumukuha ng carbon intensity information
- **Nag-a-update** ng maraming UI elements gamit ang formatted environmental data
- **Nagbibigay** ng user-friendly error messages kapag nabigo ang API calls

**Mga modernong JavaScript concepts na ipinakita:**
- **Template literals** gamit ang `${}` syntax para sa malinis na string formatting
- **Error handling** gamit ang try/catch blocks para sa mas robust na applications
- **Async/await** pattern para sa maayos na pag-handle ng network requests
- **Object destructuring** upang kumuha ng partikular na data mula sa API responses
- **Method chaining** para sa maraming DOM manipulations

✅ Ang function na ito ay nagpapakita ng ilang mahahalagang konsepto sa web development - pakikipag-ugnayan sa mga external server, pag-handle ng authentication, pagproseso ng data, pag-update ng interface, at maayos na pag-handle ng errors. Ito ay mga pangunahing kasanayan na regular na ginagamit ng mga propesyonal na developer.

🎉 **Ang iyong nagawa:** Nakagawa ka ng browser extension na:
- **Kumokonekta** sa internet at kumukuha ng totoong environmental data
- **Nagpapanatili** ng mga setting ng user sa pagitan ng mga session
- **Nagha-handle** ng errors nang maayos sa halip na mag-crash
- **Nagbibigay** ng maayos, propesyonal na user experience

Subukan ang iyong ginawa sa pamamagitan ng pag-run ng `npm run build` at pag-refresh ng iyong extension sa browser. Mayroon ka na ngayong functional carbon footprint tracker. Sa susunod na aralin, magdadagdag tayo ng dynamic icon functionality upang makumpleto ang extension.

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang browser extension sa pamamagitan ng pagdaragdag ng mga improvement sa error handling at mga feature para sa user experience. Ang hamon na ito ay makakatulong sa iyo na magpraktis sa paggamit ng APIs, local storage, at DOM manipulation gamit ang modernong JavaScript patterns.

**Prompt:** Gumawa ng mas pinahusay na bersyon ng displayCarbonUsage function na may kasamang: 1) Isang retry mechanism para sa mga nabigong API calls na may exponential backoff, 2) Input validation para sa region code bago gumawa ng API call, 3) Isang loading animation na may progress indicators, 4) Caching ng API responses sa localStorage na may expiration timestamps (cache para sa 30 minuto), at 5) Isang feature upang ipakita ang historical data mula sa mga nakaraang API calls. Magdagdag din ng tamang TypeScript-style JSDoc comments upang i-document ang lahat ng function parameters at return types.

Alamin pa ang tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## 🚀 Hamon

Palawakin ang iyong pag-unawa sa APIs sa pamamagitan ng pag-explore sa iba't ibang browser-based APIs na available para sa web development. Pumili ng isa sa mga browser APIs na ito at gumawa ng maliit na demonstration:

- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - Kunin ang kasalukuyang lokasyon ng user
- [Notification API](https://developer.mozilla.org/docs/Web/API/Notifications_API) - Magpadala ng desktop notifications
- [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) - Gumawa ng interactive drag interfaces
- [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) - Advanced na local storage techniques
- [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API) - Modernong alternatibo sa XMLHttpRequest

**Mga tanong sa pananaliksik na dapat isaalang-alang:**
- Anong mga problema sa totoong mundo ang nilulutas ng API na ito?
- Paano hinahandle ng API ang errors at edge cases?
- Anong mga pagsasaalang-alang sa seguridad ang umiiral kapag ginagamit ang API na ito?
- Gaano kalawak ang suporta ng API na ito sa iba't ibang browser?

Pagkatapos ng iyong pananaliksik, tukuyin kung anong mga katangian ang nagpapaganda at maaasahan sa isang API para sa mga developer.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/26)

## Review & Self Study
Natutunan mo ang tungkol sa LocalStorage at APIs sa araling ito, parehong napakahalaga para sa propesyonal na web developer. Maiisip mo ba kung paano nagtutulungan ang dalawang ito? Isipin kung paano mo ididisenyo ang isang website na mag-iimbak ng mga item na gagamitin ng isang API.

## Takdang-Aralin

[Mag-ampon ng API](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.