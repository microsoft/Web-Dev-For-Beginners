<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-28T03:49:31+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "sw"
}
-->
# Mradi wa Kiongezi cha Kivinjari Sehemu ya 2: Kuita API, kutumia Hifadhi ya Ndani

## Jaribio Kabla ya Somo

[Jaribio kabla ya somo](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/25)

### Utangulizi

Katika somo hili, utaita API kwa kuwasilisha fomu ya kiongezi chako cha kivinjari na kuonyesha matokeo kwenye kiongezi chako. Zaidi ya hayo, utajifunza jinsi ya kuhifadhi data kwenye hifadhi ya ndani ya kivinjari chako kwa matumizi ya baadaye.

✅ Fuata sehemu zilizo na namba kwenye faili husika ili ujue wapi pa kuweka msimbo wako.

### Sanidi vipengele vya kudhibiti kwenye kiongezi:

Kufikia wakati huu, umeshajenga HTML ya fomu na `<div>` ya matokeo kwa ajili ya kiongezi chako cha kivinjari. Kuanzia sasa, utahitaji kufanya kazi kwenye faili `/src/index.js` na kujenga kiongezi chako hatua kwa hatua. Rejelea [somo lililopita](../1-about-browsers/README.md) kuhusu jinsi ya kusanidi mradi wako na mchakato wa ujenzi.

Ukifanya kazi kwenye faili yako ya `index.js`, anza kwa kuunda baadhi ya vigezo vya `const` kushikilia thamani zinazohusiana na sehemu mbalimbali:

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

Sehemu hizi zote zinarejelewa kwa darasa lao la CSS, kama ulivyoweka kwenye HTML katika somo lililopita.

### Ongeza wasikilizaji

Kisha, ongeza wasikilizaji wa matukio kwenye fomu na kitufe cha kufuta ambacho kinaseti upya fomu, ili kwamba mtumiaji akiwakilisha fomu au kubofya kitufe hicho cha kufuta, kitu fulani kitokee, na ongeza mwito wa kuanzisha programu mwishoni mwa faili:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Angalia njia fupi inayotumika kusikiliza tukio la kuwasilisha au kubofya, na jinsi tukio linavyopitishwa kwa kazi ya `handleSubmit` au `reset`. Je, unaweza kuandika njia sawa ya njia fupi hii kwa muundo mrefu? Unapendelea ipi?

### Jenga kazi ya init() na kazi ya reset():

Sasa utaenda kujenga kazi inayowasha kiongezi, inayoitwa init():

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

Katika kazi hii, kuna mantiki ya kuvutia. Ukiisoma, unaweza kuona nini kinatokea?

- `const` mbili zimewekwa ili kuangalia kama mtumiaji ameweka APIKey na msimbo wa eneo kwenye hifadhi ya ndani.
- Ikiwa mojawapo ya hizo ni `null`, onyesha fomu kwa kubadilisha mtindo wake kuwa 'block'.
- Ficha matokeo, kipakiaji, na `clearBtn` na weka maandishi yoyote ya kosa kuwa kamba tupu.
- Ikiwa kuna ufunguo na eneo, anza utaratibu wa:
  - kuita API kupata data ya matumizi ya kaboni
  - ficha eneo la matokeo
  - ficha fomu
  - onyesha kitufe cha kuweka upya

Kabla ya kuendelea, ni muhimu kujifunza kuhusu dhana muhimu inayopatikana kwenye vivinjari: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage ni njia muhimu ya kuhifadhi kamba kwenye kivinjari kama jozi ya `key-value`. Aina hii ya hifadhi ya wavuti inaweza kudhibitiwa na JavaScript ili kusimamia data kwenye kivinjari. LocalStorage haimaliziki muda wake, wakati SessionStorage, aina nyingine ya hifadhi ya wavuti, husafishwa kivinjari kinapofungwa. Aina mbalimbali za hifadhi zina faida na hasara katika matumizi yao.

> Kumbuka - kiongezi chako cha kivinjari kina hifadhi yake ya ndani; dirisha kuu la kivinjari ni mfano tofauti na linafanya kazi kando.

Unaweka APIKey yako kuwa na thamani ya kamba, kwa mfano, na unaweza kuona kwamba imewekwa kwenye Edge kwa "kukagua" ukurasa wa wavuti (unaweza kubofya kulia kivinjari ili kukagua) na kwenda kwenye kichupo cha Programu ili kuona hifadhi.

![Eneo la hifadhi ya ndani](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.sw.png)

✅ Fikiria kuhusu hali ambapo usingependa kuhifadhi data fulani kwenye LocalStorage. Kwa ujumla, kuweka API Keys kwenye LocalStorage ni wazo mbaya! Unaweza kuona kwa nini? Katika kesi yetu, kwa kuwa programu yetu ni ya kujifunza tu na haitachapishwa kwenye duka la programu, tutatumia njia hii.

Angalia kwamba unatumia Web API kudhibiti LocalStorage, ama kwa kutumia `getItem()`, `setItem()`, au `removeItem()`. Inasaidiwa sana kwenye vivinjari.

Kabla ya kujenga kazi ya `displayCarbonUsage()` inayoitwa kwenye `init()`, hebu tujenge utendaji wa kushughulikia uwasilishaji wa fomu ya awali.

### Shughulikia uwasilishaji wa fomu

Unda kazi inayoitwa `handleSubmit` inayokubali hoja ya tukio `(e)`. Zuia tukio lisiendelee (katika kesi hii, tunataka kuzuia kivinjari kisirejeshe upya) na uite kazi mpya, `setUpUser`, ukipitisha hoja `apiKey.value` na `region.value`. Kwa njia hii, unatumia thamani mbili zinazopatikana kupitia fomu ya awali wakati sehemu husika zimejazwa.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Kumbuka - HTML uliyoiweka kwenye somo lililopita ina sehemu mbili za kuingiza ambazo `values` zake zinakamatwa kupitia `const` ulizoweka juu ya faili, na zote ni `required` hivyo kivinjari kinazuia watumiaji kuingiza thamani tupu.

### Sanidi mtumiaji

Ukisonga mbele kwenye kazi ya `setUpUser`, hapa ndipo unapoweka thamani za hifadhi ya ndani kwa apiKey na regionName. Ongeza kazi mpya:

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

Kazi hii inaweka ujumbe wa kupakia kuonyesha wakati API inaitwa. Kufikia hatua hii, umefika kwenye hatua ya kuunda kazi muhimu zaidi ya kiongezi hiki cha kivinjari!

### Onyesha Matumizi ya Kaboni

Hatimaye, ni wakati wa kuuliza API!

Kabla ya kuendelea zaidi, tunapaswa kujadili API. API, au [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), ni kipengele muhimu katika zana ya msanidi wa wavuti. Zinatoa njia za kawaida kwa programu kuingiliana na kuwasiliana. Kwa mfano, ikiwa unajenga tovuti inayohitaji kuuliza hifadhidata, mtu anaweza kuwa ameunda API kwa ajili yako kutumia. Ingawa kuna aina nyingi za API, moja ya maarufu zaidi ni [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Neno 'REST' linamaanisha 'Representational State Transfer' na lina sifa ya kutumia URL zilizosanidiwa kwa njia mbalimbali kupata data. Fanya utafiti kidogo juu ya aina mbalimbali za API zinazopatikana kwa wasanidi. Ni muundo gani unakuvutia?

Kuna mambo muhimu ya kuzingatia kuhusu kazi hii. Kwanza, angalia neno [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Kuandika kazi zako ili zifanye kazi kwa njia isiyo ya moja kwa moja inamaanisha kwamba zinasubiri hatua fulani, kama vile data kurudishwa, kukamilika kabla ya kuendelea.

Hapa kuna video fupi kuhusu `async`:

[![Async na Await kwa kudhibiti ahadi](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async na Await kwa kudhibiti ahadi")

> 🎥 Bofya picha hapo juu kwa video kuhusu async/await.

Unda kazi mpya ya kuuliza API ya C02Signal:

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

Hii ni kazi kubwa. Nini kinaendelea hapa?

- Ukifuata mbinu bora, unatumia neno `async` kufanya kazi hii ifanye kazi kwa njia isiyo ya moja kwa moja. Kazi hiyo ina kizuizi cha `try/catch` kwani itarudisha ahadi wakati API inarudisha data. Kwa sababu huna udhibiti wa kasi ambayo API itajibu (inaweza isijibu kabisa!), unahitaji kushughulikia hali hii kwa kuiita kwa njia isiyo ya moja kwa moja.
- Unauliza API ya co2signal kupata data ya eneo lako, ukitumia API Key yako. Ili kutumia ufunguo huo, lazima utumie aina ya uthibitishaji kwenye vigezo vya kichwa.
- Mara API inapojibu, unapeleka vipengele mbalimbali vya data yake ya majibu kwenye sehemu za skrini yako ulizoweka kuonyesha data hii.
- Ikiwa kuna kosa, au ikiwa hakuna matokeo, unaonyesha ujumbe wa kosa.

✅ Kutumia mifumo ya programu isiyo ya moja kwa moja ni zana nyingine muhimu sana kwenye zana yako. Soma [kuhusu njia mbalimbali](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) unazoweza kusanidi aina hii ya msimbo.

Hongera! Ukijenga kiongezi chako (`npm run build`) na kukisasisha kwenye paneli ya viongezi, unayo kiongezi kinachofanya kazi! Kitu pekee ambacho hakifanyi kazi ni ikoni, na utarekebisha hilo kwenye somo lijalo.

---

## 🚀 Changamoto

Tumeelezea aina kadhaa za API hadi sasa katika masomo haya. Chagua API ya wavuti na utafiti kwa kina kile inachotoa. Kwa mfano, angalia API zinazopatikana ndani ya vivinjari kama [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Kwa maoni yako, ni nini kinachofanya API kuwa bora?

## Jaribio Baada ya Somo

[Jaribio baada ya somo](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/26)

## Mapitio na Kujisomea

Umejifunza kuhusu LocalStorage na API katika somo hili, vyote ni muhimu sana kwa msanidi wa wavuti wa kitaalamu. Je, unaweza kufikiria jinsi vitu hivi viwili vinavyofanya kazi pamoja? Fikiria jinsi unavyoweza kuunda tovuti ambayo ingeweza kuhifadhi vitu vya kutumiwa na API.

## Kazi

[Adopt an API](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.