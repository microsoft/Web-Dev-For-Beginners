<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T10:03:59+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "sw"
}
-->
# Mradi wa Kiendelezi cha Kivinjari Sehemu ya 2: Kuita API, kutumia Hifadhi ya Ndani

## Jaribio Kabla ya Somo

[Jaribio kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/25)

### Utangulizi

Katika somo hili, utaita API kwa kuwasilisha fomu ya kiendelezi cha kivinjari chako na kuonyesha matokeo ndani ya kiendelezi chako. Zaidi ya hayo, utajifunza jinsi ya kuhifadhi data katika hifadhi ya ndani ya kivinjari chako kwa marejeleo na matumizi ya baadaye.

✅ Fuata sehemu zilizoorodheshwa kwa namba katika faili husika ili kujua wapi pa kuweka msimbo wako.

### Sanidi vipengele vya kudhibiti katika kiendelezi:

Hadi kufikia sasa, umeshajenga HTML ya fomu na `<div>` ya matokeo kwa kiendelezi chako cha kivinjari. Kuanzia sasa, utahitaji kufanya kazi katika faili ya `/src/index.js` na kujenga kiendelezi chako hatua kwa hatua. Rejelea [somo la awali](../1-about-browsers/README.md) kuhusu jinsi ya kusanidi mradi wako na mchakato wa ujenzi.

Ukifanya kazi katika faili yako ya `index.js`, anza kwa kuunda baadhi ya `const` za kushikilia thamani zinazohusiana na sehemu mbalimbali:

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

Sehemu zote hizi zinarejelewa kwa darasa la css, kama ulivyoiweka katika HTML kwenye somo la awali.

### Ongeza wasikilizaji wa matukio

Kisha, ongeza wasikilizaji wa matukio kwenye fomu na kitufe cha kufuta ambacho kinaseti upya fomu, ili kwamba mtumiaji akiwakilisha fomu au kubonyeza kitufe hicho cha kufuta, kitu fulani kitokee, na ongeza mwito wa kuanzisha programu mwishoni mwa faili:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Angalia njia fupi inayotumika kusikiliza tukio la kuwasilisha au kubonyeza, na jinsi tukio linavyopitishwa kwa kazi ya `handleSubmit` au `reset`. Je, unaweza kuandika sawa na njia hii fupi kwa muundo mrefu? Unapendelea ipi?

### Jenga kazi ya `init()` na `reset()`:

Sasa utaenda kujenga kazi inayozindua kiendelezi, ambayo inaitwa `init()`:

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

Katika kazi hii, kuna mantiki ya kuvutia. Ukiisoma, unaweza kuona kinachotokea?

- `const` mbili zinatengenezwa ili kuangalia kama mtumiaji ameweka APIKey na msimbo wa eneo katika hifadhi ya ndani.
- Ikiwa mojawapo ya hizo ni `null`, onyesha fomu kwa kubadilisha mtindo wake kuwa 'block'.
- Ficha matokeo, kipakiaji, na `clearBtn` na weka maandishi ya kosa kuwa tupu.
- Ikiwa kuna ufunguo na eneo, anza utaratibu wa:
  - kuita API ili kupata data ya matumizi ya kaboni.
  - ficha eneo la matokeo.
  - ficha fomu.
  - onyesha kitufe cha kuweka upya.

Kabla ya kuendelea, ni muhimu kujifunza kuhusu dhana muhimu sana inayopatikana katika vivinjari: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage ni njia muhimu ya kuhifadhi maandishi katika kivinjari kama jozi ya `key-value`. Aina hii ya hifadhi ya wavuti inaweza kudhibitiwa na JavaScript ili kusimamia data katika kivinjari. LocalStorage haimaliziki muda wake, wakati SessionStorage, aina nyingine ya hifadhi ya wavuti, inafutwa kivinjari kinapofungwa. Aina mbalimbali za hifadhi zina faida na hasara katika matumizi yao.

> Kumbuka - kiendelezi chako cha kivinjari kina hifadhi yake ya ndani; dirisha kuu la kivinjari ni mfano tofauti na linafanya kazi kando.

Unaweka APIKey yako kuwa na thamani ya maandishi, kwa mfano, na unaweza kuona kuwa imewekwa kwenye Edge kwa "kukagua" ukurasa wa wavuti (unaweza kubonyeza kulia kivinjari kukagua) na kwenda kwenye kichupo cha Programu ili kuona hifadhi.

![Eneo la hifadhi ya ndani](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.sw.png)

✅ Fikiria hali ambapo usingependa kuhifadhi data fulani katika LocalStorage. Kwa ujumla, kuweka API Keys katika LocalStorage ni wazo mbaya! Unaweza kuona kwa nini? Katika kesi yetu, kwa kuwa programu yetu ni ya kujifunza tu na haitachapishwa kwenye duka la programu, tutatumia njia hii.

Angalia kuwa unatumia Web API kudhibiti LocalStorage, ama kwa kutumia `getItem()`, `setItem()`, au `removeItem()`. Inasaidiwa sana katika vivinjari vyote.

Kabla ya kujenga kazi ya `displayCarbonUsage()` ambayo inaitwa katika `init()`, hebu tujenge utendaji wa kushughulikia kuwasilisha fomu ya awali.

### Shughulikia kuwasilisha fomu

Unda kazi inayoitwa `handleSubmit` inayokubali hoja ya tukio `(e)`. Zuia tukio kuenea (katika kesi hii, tunataka kuzuia kivinjari kisifanye upya) na uite kazi mpya, `setUpUser`, ukipitisha hoja `apiKey.value` na `region.value`. Kwa njia hii, unatumia thamani mbili zinazotolewa kupitia fomu ya awali wakati sehemu husika zimejazwa.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Kumbuka - HTML uliyoiweka katika somo la mwisho ina sehemu mbili za ingizo ambazo `values` zake zinakamatwa kupitia `const` ulizozitengeneza mwanzoni mwa faili, na zote ni `required` hivyo kivinjari kinazuia watumiaji kuingiza thamani tupu.

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

Kazi hii inaonyesha ujumbe wa kupakia ili kuonyesha wakati API inaitwa. Kufikia hatua hii, umefika kwenye uundaji wa kazi muhimu zaidi ya kiendelezi hiki cha kivinjari!

### Onyesha Matumizi ya Kaboni

Hatimaye, ni wakati wa kuuliza API!

Kabla ya kuendelea zaidi, tunapaswa kujadili API. API, au [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), ni kipengele muhimu katika zana ya msanidi wa wavuti. Zinatoa njia za kawaida kwa programu kuingiliana na kuwasiliana. Kwa mfano, ikiwa unajenga tovuti inayohitaji kuuliza hifadhidata, mtu anaweza kuwa ameunda API kwa ajili yako kutumia. Ingawa kuna aina nyingi za API, moja ya maarufu ni [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Neno 'REST' linamaanisha 'Representational State Transfer' na linahusisha kutumia URL zilizosanidiwa kwa njia mbalimbali ili kupata data. Fanya utafiti kidogo kuhusu aina mbalimbali za API zinazopatikana kwa wasanidi. Ni muundo gani unakuvutia?

Kuna mambo muhimu ya kuzingatia kuhusu kazi hii. Kwanza, angalia neno [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Kuandika kazi zako ili zifanye kazi kwa njia isiyo ya moja kwa moja inamaanisha kuwa zinangoja hatua fulani, kama vile data kurudishwa, kukamilika kabla ya kuendelea.

Hapa kuna video fupi kuhusu `async`:

[![Async na Await kwa kudhibiti ahadi](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async na Await kwa kudhibiti ahadi")

> 🎥 Bonyeza picha hapo juu kwa video kuhusu async/await.

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

- Kwa kufuata mbinu bora, unatumia neno `async` kufanya kazi hii ifanye kazi kwa njia isiyo ya moja kwa moja. Kazi hiyo ina kizuizi cha `try/catch` kwa kuwa itarudisha ahadi wakati API inarudisha data. Kwa sababu huna udhibiti wa kasi ambayo API itajibu (inaweza isijibu kabisa!), unahitaji kushughulikia hali hii kwa kuiita kwa njia isiyo ya moja kwa moja.
- Unauliza API ya co2signal kupata data ya eneo lako, ukitumia API Key yako. Ili kutumia ufunguo huo, unahitaji kutumia aina ya uthibitisho katika vigezo vya kichwa.
- Mara API inapojibu, unapeleka vipengele mbalimbali vya data yake ya majibu kwenye sehemu za skrini yako ulizozitengeneza kuonyesha data hii.
- Ikiwa kuna kosa, au ikiwa hakuna matokeo, unaonyesha ujumbe wa kosa.

✅ Kutumia mifumo ya programu isiyo ya moja kwa moja ni zana nyingine muhimu sana katika zana yako. Soma [mbinu mbalimbali](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) unazoweza kutumia kusanidi aina hii ya msimbo.

Hongera! Ukijenga kiendelezi chako (`npm run build`) na kukifanyia upya katika paneli ya viendelezi vyako, una kiendelezi kinachofanya kazi! Kitu pekee ambacho hakifanyi kazi ni ikoni, na utarekebisha hilo katika somo lijalo.

---

## 🚀 Changamoto

Tumeelezea aina kadhaa za API hadi sasa katika masomo haya. Chagua API ya wavuti na fanya utafiti wa kina kuhusu kile inachotoa. Kwa mfano, angalia API zinazopatikana ndani ya vivinjari kama [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Kwa maoni yako, ni nini kinachofanya API kuwa bora?

## Jaribio Baada ya Somo

[Jaribio baada ya somo](https://ff-quizzes.netlify.app/web/quiz/26)

## Mapitio na Kujisomea

Umejifunza kuhusu LocalStorage na API katika somo hili, vyote ni muhimu sana kwa msanidi wa wavuti wa kitaalamu. Je, unaweza kufikiria jinsi vitu hivi viwili vinavyofanya kazi pamoja? Fikiria jinsi unavyoweza kubuni tovuti inayohifadhi vitu vya kutumiwa na API.

## Kazi

[Adopt an API](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.