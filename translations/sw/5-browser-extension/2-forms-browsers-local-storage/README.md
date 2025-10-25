<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-24T19:45:28+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "sw"
}
-->
# Mradi wa Kiendelezi cha Kivinjari Sehemu ya 2: Unganisha API, tumia Hifadhi ya Ndani

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/25)

## Utangulizi

Unakumbuka kiendelezi cha kivinjari ulichokuwa ukijenga? Kwa sasa una fomu inayovutia, lakini ni ya static tu. Leo tutaihuisha kwa kuunganisha na data halisi na kuipa uwezo wa kukumbuka.

Fikiria kompyuta za kudhibiti misheni ya Apollo - hazikuonyesha tu taarifa za kudumu. Zilikuwa zikiwasiliana mara kwa mara na chombo cha anga, zikiweka data ya telemetry, na kukumbuka vigezo muhimu vya misheni. Hiyo ndiyo aina ya tabia ya nguvu tunayoijenga leo. Kiendelezi chako kitafikia mtandao, kuchukua data halisi ya mazingira, na kukumbuka mipangilio yako kwa mara nyingine.

Kuunganisha API kunaweza kuonekana kuwa ngumu, lakini ni kama kufundisha msimbo wako jinsi ya kuwasiliana na huduma nyingine. Ikiwa unachukua data ya hali ya hewa, mlisho wa mitandao ya kijamii, au taarifa za alama ya kaboni kama tutakavyofanya leo, yote ni kuhusu kuanzisha miunganisho hii ya kidijitali. Pia tutachunguza jinsi vivinjari vinavyoweza kuhifadhi taarifa - sawa na jinsi maktaba zilivyotumia katalogi za kadi kukumbuka mahali vitabu vinapohifadhiwa.

Mwisho wa somo hili, utakuwa na kiendelezi cha kivinjari kinachochukua data halisi, kuhifadhi mapendeleo ya mtumiaji, na kutoa uzoefu laini. Hebu tuanze!

✅ Fuata sehemu zilizoorodheshwa kwa namba kwenye faili husika ili kujua wapi pa kuweka msimbo wako.

## Sanidi vipengele vya kudhibiti katika kiendelezi

Kabla ya JavaScript yako kudhibiti kiolesura, inahitaji marejeleo ya vipengele maalum vya HTML. Fikiria kama darubini inavyohitaji kuelekezwa kwenye nyota fulani - kabla ya Galileo kusoma miezi ya Jupiter, alihitaji kuipata na kuielekeza Jupiter yenyewe.

Katika faili yako ya `index.js`, tutaunda `const` zinazokamata marejeleo ya kila kipengele muhimu cha fomu. Hii ni sawa na jinsi wanasayansi wanavyoweka lebo kwenye vifaa vyao - badala ya kutafuta maabara nzima kila wakati, wanaweza kufikia moja kwa moja wanachohitaji.

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

**Hii ndiyo msimbo unavyofanya:**
- **Inakamata** vipengele vya fomu kwa kutumia `document.querySelector()` na vichagua vya darasa la CSS
- **Inaunda** marejeleo ya sehemu za kuingiza jina la eneo na API key
- **Inaanzisha** miunganisho na vipengele vya kuonyesha matokeo ya data ya matumizi ya kaboni
- **Inasanidi** ufikiaji wa vipengele vya UI kama viashiria vya kupakia na ujumbe wa makosa
- **Inahifadhi** kila marejeleo ya kipengele katika `const` kwa matumizi rahisi katika msimbo wako

## Ongeza wasikilizaji wa matukio

Sasa tutafanya kiendelezi chako kijibu vitendo vya mtumiaji. Wasikilizaji wa matukio ni njia ya msimbo wako ya kufuatilia mwingiliano wa mtumiaji. Fikiria kama waendeshaji wa simu za mapema - walikuwa wakisikiliza simu zinazoingia na kuunganisha nyaya sahihi wakati mtu alitaka kufanya mawasiliano.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Kuelewa dhana hizi:**
- **Inaambatisha** msikilizaji wa kuwasilisha kwenye fomu inayochochea wakati watumiaji wanapobonyeza Enter au kuwasilisha
- **Inaunganisha** msikilizaji wa kubonyeza kwenye kitufe cha kufuta ili kuweka upya fomu
- **Inapitisha** kitu cha tukio `(e)` kwa kazi za kushughulikia kwa udhibiti wa ziada
- **Inaita** kazi ya `init()` mara moja ili kusanidi hali ya awali ya kiendelezi chako

✅ Angalia sintaksia fupi ya kazi ya mshale inayotumika hapa. Njia hii ya kisasa ya JavaScript ni safi zaidi kuliko maelezo ya kazi za jadi, lakini zote zinafanya kazi sawa!

## Jenga kazi za uanzishaji na kuweka upya

Hebu tuunde mantiki ya uanzishaji kwa kiendelezi chako. Kazi ya `init()` ni kama mfumo wa urambazaji wa meli unaokagua vyombo vyake - inatambua hali ya sasa na kurekebisha kiolesura ipasavyo. Inakagua ikiwa mtu amewahi kutumia kiendelezi chako kabla na kupakia mipangilio yao ya awali.

Kazi ya `reset()` inawapa watumiaji mwanzo mpya - sawa na jinsi wanasayansi wanavyoweka upya vyombo vyao kati ya majaribio ili kuhakikisha data safi.

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

**Kufafanua kinachotokea hapa:**
- **Inachukua** API key iliyohifadhiwa na eneo kutoka hifadhi ya ndani ya kivinjari
- **Inakagua** ikiwa huyu ni mtumiaji wa mara ya kwanza (hakuna hati zilizohifadhiwa) au mtumiaji anayerejea
- **Inaonyesha** fomu ya usanidi kwa watumiaji wapya na kuficha vipengele vingine vya kiolesura
- **Inapakia** data iliyohifadhiwa moja kwa moja kwa watumiaji wanaorejea na kuonyesha chaguo la kuweka upya
- **Inasimamia** hali ya kiolesura cha mtumiaji kulingana na data inayopatikana

**Dhana muhimu kuhusu Hifadhi ya Ndani:**
- **Inahifadhi** data kati ya vikao vya kivinjari (tofauti na hifadhi ya kikao)
- **Inahifadhi** data kama jozi za funguo-thamani kwa kutumia `getItem()` na `setItem()`
- **Inarudisha** `null` wakati hakuna data inayopatikana kwa funguo fulani
- **Inatoa** njia rahisi ya kukumbuka mapendeleo na mipangilio ya mtumiaji

> 💡 **Kuelewa Hifadhi ya Kivinjari**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) ni kama kutoa kiendelezi chako kumbukumbu ya kudumu. Fikiria jinsi Maktaba ya kale ya Alexandria ilivyohifadhi maandiko - taarifa zilikuwa zinapatikana hata wakati wasomi waliondoka na kurudi.
>
> **Tabia muhimu:**
> - **Inahifadhi** data hata baada ya kufunga kivinjari chako
> - **Inadumu** hata baada ya kuwasha upya kompyuta na kivinjari kuanguka
> - **Inatoa** nafasi kubwa ya kuhifadhi mapendeleo ya mtumiaji
> - **Inatoa** ufikiaji wa haraka bila ucheleweshaji wa mtandao

> **Kumbuka Muhimu**: Kiendelezi chako cha kivinjari kina hifadhi yake ya ndani iliyotengwa ambayo ni tofauti na kurasa za kawaida za wavuti. Hii inatoa usalama na kuzuia migongano na tovuti nyingine.

Unaweza kuona data yako iliyohifadhiwa kwa kufungua Zana za Wasanidi wa Kivinjari (F12), kwenda kwenye kichupo cha **Application**, na kupanua sehemu ya **Local Storage**.

![Sehemu ya hifadhi ya ndani](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.sw.png)

> ⚠️ **Tahadhari ya Usalama**: Katika programu za uzalishaji, kuhifadhi API keys katika LocalStorage kuna hatari za usalama kwa kuwa JavaScript inaweza kufikia data hii. Kwa madhumuni ya kujifunza, njia hii inafanya kazi vizuri, lakini programu halisi zinapaswa kutumia hifadhi salama ya upande wa seva kwa hati nyeti.

## Shughulikia kuwasilisha fomu

Sasa tutashughulikia kinachotokea wakati mtu anawasilisha fomu yako. Kwa kawaida, vivinjari hurejesha ukurasa wakati fomu zinawasilishwa, lakini tutazuia tabia hii ili kuunda uzoefu laini zaidi.

Njia hii inafanana na jinsi udhibiti wa misheni unavyoshughulikia mawasiliano ya chombo cha anga - badala ya kuweka upya mfumo mzima kwa kila mawasiliano, wanadumisha operesheni inayoendelea wakati wa kuchakata taarifa mpya.

Unda kazi inayokamata tukio la kuwasilisha fomu na kuchukua maingizo ya mtumiaji:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**Katika hapo juu, tumefanya:**
- **Inazuia** tabia ya kawaida ya kuwasilisha fomu ambayo ingeweza kuonyesha upya ukurasa
- **Inachukua** maadili ya maingizo ya mtumiaji kutoka sehemu za API key na eneo
- **Inapitisha** data ya fomu kwa kazi ya `setUpUser()` kwa uchakataji
- **Inadumisha** tabia ya programu ya ukurasa mmoja kwa kuepuka kuonyesha upya ukurasa

✅ Kumbuka kuwa sehemu za fomu yako ya HTML zinajumuisha sifa ya `required`, kwa hivyo kivinjari kinathibitisha moja kwa moja kwamba watumiaji wanatoa API key na eneo kabla ya kazi hii kuendeshwa.

## Sanidi mapendeleo ya mtumiaji

Kazi ya `setUpUser` inawajibika kwa kuhifadhi hati za mtumiaji na kuanzisha simu ya kwanza ya API. Hii inaunda mpito laini kutoka usanidi hadi kuonyesha matokeo.

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

**Hatua kwa hatua, kinachotokea hapa:**
- **Inahifadhi** API key na jina la eneo katika hifadhi ya ndani kwa matumizi ya baadaye
- **Inaonyesha** kiashiria cha kupakia ili kuwajulisha watumiaji kwamba data inachukuliwa
- **Inafuta** ujumbe wowote wa makosa uliopita kutoka kwa kiolesura
- **Inafichua** kitufe cha kufuta kwa watumiaji kuweka upya mipangilio yao baadaye
- **Inaanzisha** simu ya API kuchukua data halisi ya matumizi ya kaboni

Kazi hii inaunda uzoefu laini wa mtumiaji kwa kusimamia uhifadhi wa data na masasisho ya kiolesura cha mtumiaji kwa hatua moja iliyoratibiwa.

## Onyesha data ya matumizi ya kaboni

Sasa tutaiunganisha kiendelezi chako na vyanzo vya data vya nje kupitia API. Hii inabadilisha kiendelezi chako kutoka zana ya pekee kuwa kitu kinachoweza kufikia taarifa za wakati halisi kutoka mtandao mzima.

**Kuelewa API**

[API](https://www.webopedia.com/TERM/A/API.html) ni jinsi programu tofauti zinavyowasiliana. Fikiria kama mfumo wa telegraph uliounganisha miji ya mbali katika karne ya 19 - waendeshaji walikuwa wakituma maombi kwa vituo vya mbali na kupokea majibu na taarifa iliyotakiwa. Kila wakati unapotazama mitandao ya kijamii, kuuliza msaidizi wa sauti swali, au kutumia programu ya usafirishaji, API zinawezesha ubadilishanaji huu wa data.

**Dhana muhimu kuhusu REST API:**
- **REST** inasimama kwa 'Representational State Transfer'
- **Inatumia** mbinu za kawaida za HTTP (GET, POST, PUT, DELETE) kuingiliana na data
- **Inarudisha** data katika miundo inayotabirika, kawaida JSON
- **Inatoa** sehemu za mwisho za URL zinazojulikana kwa aina tofauti za maombi

✅ [CO2 Signal API](https://www.co2signal.com/) tutakayotumia inatoa data ya wakati halisi ya nguvu ya kaboni kutoka kwa gridi za umeme duniani kote. Hii inasaidia watumiaji kuelewa athari za mazingira za matumizi yao ya umeme!

> 💡 **Kuelewa JavaScript Asynchronous**: Neno [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) linawezesha msimbo wako kushughulikia operesheni nyingi kwa wakati mmoja. Unapochukua data kutoka kwa seva, hutaki kiendelezi chako kizime kabisa - hiyo ingekuwa kama udhibiti wa trafiki ya anga kusimamisha operesheni zote wakati wa kusubiri ndege moja kujibu.
>
> **Faida muhimu:**
> - **Inadumisha** usikivu wa kiendelezi wakati data inapakia
> - **Inaruhusu** msimbo mwingine kuendelea kutekelezwa wakati wa maombi ya mtandao
> - **Inaboresha** usomaji wa msimbo ikilinganishwa na mifumo ya callback ya jadi
> - **Inaruhusu** kushughulikia makosa kwa neema kwa masuala ya mtandao

Hapa kuna video fupi kuhusu `async`:

[![Async na Await kwa kudhibiti ahadi](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async na Await kwa kudhibiti ahadi")

> 🎥 Bonyeza picha hapo juu kwa video kuhusu async/await.

Unda kazi ya kuchukua na kuonyesha data ya matumizi ya kaboni:

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

**Kufafanua kinachotokea hapa:**
- **Inatumia** API ya kisasa ya `fetch()` badala ya maktaba za nje kama Axios kwa msimbo safi, usio na utegemezi
- **Inatekeleza** ukaguzi sahihi wa makosa kwa `response.ok` ili kugundua kushindwa kwa API mapema
- **Inashughulikia** operesheni za asynchronous kwa `async/await` kwa mtiririko wa msimbo unaosomeka zaidi
- **Inathibitisha** na CO2 Signal API kwa kutumia kichwa cha `auth-token`
- **Inachambua** data ya majibu ya JSON na kuchukua taarifa ya nguvu ya kaboni
- **Inasasisha** vipengele vingi vya UI na data ya mazingira iliyopangwa
- **Inatoa** ujumbe wa makosa unaofaa kwa watumiaji wakati simu za API zinashindwa

**Dhana muhimu za kisasa za JavaScript zilizodhihirishwa:**
- **Template literals** na sintaksia ya `${}` kwa muundo safi wa maandishi
- **Kushughulikia makosa** na vizuizi vya try/catch kwa programu thabiti
- **Mfumo wa async/await** kwa kushughulikia maombi ya mtandao kwa neema
- **Object destructuring** kuchukua data maalum kutoka kwa majibu ya API
- **Method chaining** kwa manipulations nyingi za DOM

✅ Kazi hii inaonyesha dhana kadhaa muhimu za maendeleo ya wavuti - kuwasiliana na seva za nje, kushughulikia uthibitisho, kuchakata data, kusasisha kiolesura, na kushughulikia makosa kwa neema. Hizi ni ujuzi wa msingi ambao watengenezaji wa kitaalamu hutumia mara kwa mara.

🎉 **Ulichofanikiwa:** Umeunda kiendelezi cha kivinjari kinachofanya:
- **Kinaunganisha** na mtandao na kuchukua data halisi ya mazingira
- **Kinahifadhi** mipangilio ya mtumiaji kati ya vikao
- **Kinashughulikia** makosa kwa neema badala ya kuanguka
- **Kinatoa** uzoefu laini, wa kitaalamu wa mtumiaji

Jaribu kazi yako kwa kuendesha `npm run build` na kuonyesha upya kiendelezi chako kwenye kivinjari. Sasa una kifuatiliaji cha alama ya kaboni kinachofanya kazi. Somo linalofuata litaongeza utendaji wa ikoni ya nguvu ili kukamilisha kiendelezi.

---

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Boresha kiendelezi cha kivinjari kwa kuongeza maboresho ya kushughulikia makosa na vipengele vya uzoefu wa mtumiaji. Changamoto hii itakusaidia kufanya mazoezi ya kufanya kazi na API, hifadhi ya ndani, na manipulations za DOM kwa kutumia mifumo ya kisasa ya JavaScript.

**Kichocheo:** Unda toleo lililoboreshwa la kazi ya displayCarbonUsage inayojumuisha: 1) Utaratibu wa kurudia kwa simu za API zilizoshindwa na kurudi nyuma kwa kasi, 2) Uthibitishaji wa maingizo kwa msimbo wa eneo kabla ya kufanya simu ya API, 3) Uhuishaji wa kupakia na viashiria vya maendeleo, 4) Kuhifadhi majibu ya API katika LocalStorage na timestamps za kumalizika muda (hifadhi kwa dakika 30), na 5) Kipengele cha kuonyesha data ya kihistoria kutoka kwa simu za API za awali. Pia ongeza maoni sahihi ya JSDoc ya mtindo wa TypeScript ili kuandika vigezo vyote vya kazi na aina za kurudi.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## 🚀 Changamoto

Panua uelewa wako wa API kwa kuchunguza wingi wa API za kivinjari zinazopatikana kwa maendeleo ya wavuti. Chagua moja ya API hizi za kivinjari na jenga onyesho dogo:

- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - Pata eneo la sasa la mtumiaji
- [Notification API](https://developer.mozilla.org/docs/Web/API/Notifications_API) - Tuma arifa za desktop
- [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) - Unda kiolesura cha
Umejifunza kuhusu LocalStorage na API katika somo hili, vyote ni muhimu sana kwa msanifu wa wavuti wa kitaalamu. Je, unaweza kufikiria jinsi vitu hivi viwili vinavyofanya kazi pamoja? Fikiria jinsi unavyoweza kubuni tovuti ambayo ingeweka vitu vitakavyotumiwa na API.

## Kazi

[Chukua API](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya asili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.