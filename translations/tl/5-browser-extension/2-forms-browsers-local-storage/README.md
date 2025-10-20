<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7e164d318e19925330cfcaeea954e7b5",
  "translation_date": "2025-10-20T21:11:53+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "tl"
}
-->
# Proyekto ng Browser Extension Bahagi 2: Tumawag sa API, gumamit ng Local Storage

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/25)

### Panimula

Sa araling ito, tatawag ka sa isang API sa pamamagitan ng pagsusumite ng form ng iyong browser extension at ipapakita ang mga resulta sa iyong browser extension. Bukod dito, matututunan mo kung paano mag-imbak ng data sa local storage ng iyong browser para sa hinaharap na paggamit.

✅ Sundin ang mga numerong segment sa mga naaangkop na file upang malaman kung saan ilalagay ang iyong code.

### I-set up ang mga elementong gagamitin sa extension:

Sa puntong ito, naitayo mo na ang HTML para sa form at resulta `<div>` ng iyong browser extension. Simula ngayon, kakailanganin mong magtrabaho sa file na `/src/index.js` at buuin ang iyong extension nang paunti-unti. Sumangguni sa [nakaraang aralin](../1-about-browsers/README.md) para sa pag-set up ng iyong proyekto at sa proseso ng pagbuo.

Sa pagtrabaho sa iyong `index.js` file, magsimula sa pamamagitan ng paglikha ng ilang `const` na mga variable upang hawakan ang mga halaga na nauugnay sa iba't ibang mga field:

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

Ang lahat ng mga field na ito ay tinutukoy sa pamamagitan ng kanilang css class, tulad ng itinakda mo sa HTML sa nakaraang aralin.

### Magdagdag ng mga listener

Susunod, magdagdag ng mga event listener sa form at sa clear button na nagre-reset ng form, upang kapag ang isang user ay nagsumite ng form o nag-click sa reset button, may mangyayari, at idagdag ang tawag upang i-initialize ang app sa ibaba ng file:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Pansinin ang pinaikling paraan na ginamit upang makinig sa isang submit o click event, at kung paano ipinapasa ang event sa handleSubmit o reset functions. Kaya mo bang isulat ang katumbas ng pinaikling ito sa mas mahabang format? Alin ang mas gusto mo?

### Buuin ang init() function at ang reset() function:

Ngayon ay bubuuin mo ang function na nag-i-initialize ng extension, na tinatawag na init():

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

Sa function na ito, mayroong ilang kawili-wiling lohika. Sa pagbabasa nito, makikita mo ba kung ano ang nangyayari?

- Dalawang `const` ang itinakda upang suriin kung ang user ay nag-imbak ng APIKey at region code sa local storage.
- Kung alinman sa mga ito ay null, ipakita ang form sa pamamagitan ng pagbabago ng estilo nito upang maipakita bilang 'block'.
- Itago ang mga resulta, loading, at clearBtn at itakda ang anumang error text sa isang walang laman na string.
- Kung mayroong key at rehiyon, simulan ang isang routine upang:
  - Tumawag sa API upang makuha ang data ng carbon usage.
  - Itago ang lugar ng resulta.
  - Itago ang form.
  - Ipakita ang reset button.

Bago magpatuloy, kapaki-pakinabang na matutunan ang tungkol sa isang napakahalagang konsepto na magagamit sa mga browser: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). Ang LocalStorage ay isang kapaki-pakinabang na paraan upang mag-imbak ng mga string sa browser bilang isang `key-value` pair. Ang ganitong uri ng web storage ay maaaring manipulahin ng JavaScript upang pamahalaan ang data sa browser. Ang LocalStorage ay hindi nag-e-expire, habang ang SessionStorage, isa pang uri ng web storage, ay nalilinis kapag isinara ang browser. Ang iba't ibang uri ng storage ay may mga kalamangan at kahinaan sa kanilang paggamit.

> Tandaan - Ang iyong browser extension ay may sariling local storage; ang pangunahing window ng browser ay isang hiwalay na instance at gumagana nang hiwalay.

Itakda ang iyong APIKey upang magkaroon ng string value, halimbawa, at makikita mo na ito ay nakatakda sa Edge sa pamamagitan ng "pag-inspect" ng isang web page (maaari mong i-right-click ang browser upang i-inspect) at pumunta sa Applications tab upang makita ang storage.

![Local storage pane](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.tl.png)

✅ Mag-isip tungkol sa mga sitwasyon kung saan HINDI mo gustong mag-imbak ng ilang data sa LocalStorage. Sa pangkalahatan, ang paglalagay ng API Keys sa LocalStorage ay isang masamang ideya! Nakikita mo ba kung bakit? Sa aming kaso, dahil ang aming app ay purong para sa pag-aaral at hindi ilalathala sa isang app store, gagamitin namin ang pamamaraang ito.

Pansinin na ginagamit mo ang Web API upang manipulahin ang LocalStorage, alinman sa pamamagitan ng paggamit ng `getItem()`, `setItem()`, o `removeItem()`. Malawak itong sinusuportahan sa iba't ibang browser.

Bago buuin ang `displayCarbonUsage()` function na tinatawag sa `init()`, buuin muna ang functionality upang hawakan ang paunang pagsusumite ng form.

### Hawakan ang pagsusumite ng form

Gumawa ng function na tinatawag na `handleSubmit` na tumatanggap ng argumentong event `(e)`. Pigilan ang event na magpatuloy (sa kasong ito, gusto nating pigilan ang browser na mag-refresh) at tawagan ang bagong function, `setUpUser`, na ipinapasa ang mga argumentong `apiKey.value` at `region.value`. Sa ganitong paraan, magagamit mo ang dalawang halaga na dinala sa pamamagitan ng paunang form kapag napunan ang mga naaangkop na field.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ I-refresh ang iyong memorya - ang HTML na itinakda mo sa nakaraang aralin ay may dalawang input field na ang mga `values` ay kinukuha sa pamamagitan ng `const` na itinakda mo sa itaas ng file, at pareho silang `required` kaya pinipigilan ng browser ang mga user na maglagay ng null values.

### I-set up ang user

Sa paglipat sa `setUpUser` function, dito mo itinatakda ang mga local storage value para sa apiKey at regionName. Magdagdag ng bagong function:

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

Ang function na ito ay nagtatakda ng loading message upang ipakita habang tinatawag ang API. Sa puntong ito, narating mo na ang paglikha ng pinakamahalagang function ng browser extension na ito!

### Ipakita ang Carbon Usage

Sa wakas, oras na upang mag-query sa API!

Bago magpatuloy, dapat nating talakayin ang mga API. Ang mga API, o [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), ay isang kritikal na elemento ng toolbox ng isang web developer. Nagbibigay ang mga ito ng mga standard na paraan para sa mga programa na makipag-ugnayan at makipag-interface sa isa't isa. Halimbawa, kung gumagawa ka ng isang website na kailangang mag-query sa isang database, maaaring may gumawa ng API para magamit mo. Bagama't maraming uri ng API, isa sa mga pinakasikat ay ang [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Ang terminong 'REST' ay nangangahulugang 'Representational State Transfer' at nagtatampok ng paggamit ng iba't ibang naka-configure na mga URL upang makuha ang data. Mag-research ng kaunti tungkol sa iba't ibang uri ng API na magagamit ng mga developer. Anong format ang mas gusto mo?

May mga mahalagang bagay na dapat tandaan tungkol sa function na ito. Una, pansinin ang [`async` keyword](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Ang pagsulat ng iyong mga function upang tumakbo nang asynchronous ay nangangahulugan na maghihintay sila para sa isang aksyon, tulad ng data na ibinalik, na makumpleto bago magpatuloy.

Narito ang isang mabilis na video tungkol sa `async`:

[![Async at Await para sa pamamahala ng mga pangako](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async at Await para sa pamamahala ng mga pangako")

> 🎥 I-click ang imahe sa itaas para sa isang video tungkol sa async/await.

Gumawa ng bagong function upang mag-query sa C02Signal API:

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

Ito ay isang malaking function. Ano ang nangyayari dito?

- Ayon sa pinakamahusay na kasanayan, ginagamit mo ang `async` keyword upang gawing asynchronous ang function na ito. Ang function ay naglalaman ng `try/catch` block dahil magbabalik ito ng pangako kapag ang API ay nagbalik ng data. Dahil wala kang kontrol sa bilis ng pagtugon ng API (maaaring hindi ito tumugon!), kailangan mong harapin ang kawalang-katiyakan na ito sa pamamagitan ng pagtawag dito nang asynchronous.
- Nag-query ka sa co2signal API upang makuha ang data ng iyong rehiyon, gamit ang iyong API Key. Upang magamit ang key na iyon, kailangan mong gumamit ng uri ng authentication sa iyong header parameters.
- Kapag tumugon ang API, itinalaga mo ang iba't ibang elemento ng response data nito sa mga bahagi ng iyong screen na itinakda mo upang ipakita ang data na ito.
- Kung may error, o kung walang resulta, magpapakita ka ng error message.

✅ Ang paggamit ng asynchronous programming patterns ay isa pang napaka-kapaki-pakinabang na tool sa iyong toolbox. Basahin [ang iba't ibang paraan](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) kung paano mo mai-configure ang ganitong uri ng code.

Binabati kita! Kung itatayo mo ang iyong extension (`npm run build`) at i-refresh ito sa iyong extensions pane, mayroon ka nang gumaganang extension! Ang tanging hindi gumagana ay ang icon, at aayusin mo ito sa susunod na aralin.

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang kumpletuhin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang browser extension sa pamamagitan ng pagdaragdag ng mga pagpapabuti sa error handling at mga tampok sa karanasan ng user. Ang hamon na ito ay makakatulong sa iyo na magsanay sa paggamit ng mga API, local storage, at DOM manipulation gamit ang modernong JavaScript patterns.

**Prompt:** Gumawa ng pinahusay na bersyon ng displayCarbonUsage function na kinabibilangan ng: 1) Isang retry mechanism para sa mga nabigong API calls na may exponential backoff, 2) Input validation para sa region code bago gumawa ng API call, 3) Isang loading animation na may progress indicators, 4) Caching ng mga API responses sa localStorage na may expiration timestamps (cache para sa 30 minuto), at 5) Isang tampok upang ipakita ang historical data mula sa mga nakaraang API calls. Magdagdag din ng tamang TypeScript-style JSDoc comments upang idokumento ang lahat ng mga parameter ng function at mga uri ng return.

## 🚀 Hamon

Napag-usapan natin ang ilang uri ng API sa mga araling ito. Pumili ng isang web API at mag-research nang malalim kung ano ang inaalok nito. Halimbawa, tingnan ang mga API na magagamit sa loob ng mga browser tulad ng [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Ano ang gumagawa ng isang mahusay na API sa iyong opinyon?

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/26)

## Review & Self Study

Natutunan mo ang tungkol sa LocalStorage at mga API sa araling ito, parehong napaka-kapaki-pakinabang para sa propesyonal na web developer. Maiisip mo ba kung paano gumagana ang dalawang bagay na ito nang magkasama? Isipin kung paano mo ididisenyo ang isang website na mag-iimbak ng mga item na gagamitin ng isang API.

## Assignment

[Adopt an API](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.