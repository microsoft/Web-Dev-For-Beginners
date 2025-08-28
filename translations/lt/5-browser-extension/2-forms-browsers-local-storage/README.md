<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-28T11:30:56+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "lt"
}
-->
# Naršyklės plėtinio projektas 2 dalis: API iškvietimas, vietinės saugyklos naudojimas

## Klausimynas prieš paskaitą

[Klausimynas prieš paskaitą](https://ff-quizzes.netlify.app/web/quiz/25)

### Įvadas

Šioje pamokoje išmoksite iškviesti API, pateikdami savo naršyklės plėtinio formą ir rodydami rezultatus plėtinio lange. Be to, sužinosite, kaip galite saugoti duomenis naršyklės vietinėje saugykloje, kad galėtumėte juos naudoti ateityje.

✅ Vadovaukitės numeruotais segmentais atitinkamuose failuose, kad žinotumėte, kur įterpti savo kodą.

### Sukurkite elementus, kuriuos manipuliuosite plėtinyje:

Iki šio momento jau sukūrėte HTML formos ir rezultatų `<div>` savo naršyklės plėtiniui. Dabar turėsite dirbti su `/src/index.js` failu ir po truputį kurti savo plėtinį. Peržiūrėkite [ankstesnę pamoką](../1-about-browsers/README.md), kad prisimintumėte, kaip nustatyti projektą ir kaip vyksta kūrimo procesas.

Dirbdami su `index.js` failu, pradėkite nuo kelių `const` kintamųjų sukūrimo, kad išsaugotumėte reikšmes, susijusias su įvairiais laukais:

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

Visi šie laukai yra nurodyti pagal jų CSS klasę, kaip nustatėte HTML faile ankstesnėje pamokoje.

### Pridėkite klausytojus

Toliau pridėkite įvykių klausytojus prie formos ir mygtuko, kuris išvalo formą, kad, jei vartotojas pateiktų formą arba paspaustų išvalymo mygtuką, kažkas įvyktų. Taip pat pridėkite iškvietimą, kuris inicijuoja programą failo apačioje:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Atkreipkite dėmesį į trumpinį, naudojamą klausytis pateikimo ar paspaudimo įvykių, ir kaip įvykis perduodamas `handleSubmit` arba `reset` funkcijoms. Ar galite parašyti šio trumpinio ekvivalentą ilgesniu formatu? Kuris variantas jums labiau patinka?

### Sukurkite `init()` ir `reset()` funkcijas:

Dabar sukursite funkciją, kuri inicijuoja plėtinį, vadinamą `init()`:

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

Šioje funkcijoje yra įdomi logika. Perskaitykite ją ir pažiūrėkite, kas vyksta:

- Sukuriami du `const`, kurie patikrina, ar vartotojas saugojo APIKey ir regiono kodą vietinėje saugykloje.
- Jei kuris nors iš jų yra `null`, forma rodoma pakeičiant jos stilių į 'block'.
- Paslepiami rezultatai, įkėlimo indikatorius ir `clearBtn`, o klaidos tekstas nustatomas kaip tuščias.
- Jei yra raktas ir regionas, pradedama rutina:
  - Iškviečiama API, kad gautų anglies naudojimo duomenis.
  - Paslepiama rezultatų sritis.
  - Paslepiama forma.
  - Parodomas išvalymo mygtukas.

Prieš tęsiant, naudinga sužinoti apie labai svarbią naršyklių funkciją: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage yra naudinga priemonė saugoti eilutes naršyklėje kaip `key-value` poras. Šio tipo žiniatinklio saugyklą galima valdyti naudojant JavaScript. LocalStorage neturi galiojimo laiko, o SessionStorage, kita saugyklos rūšis, išvaloma uždarius naršyklę. Skirtingos saugyklos rūšys turi savo privalumų ir trūkumų.

> Pastaba - jūsų naršyklės plėtinys turi savo vietinę saugyklą; pagrindinis naršyklės langas yra atskira instancija ir veikia atskirai.

Jūs nustatote savo APIKey kaip eilutės reikšmę, pavyzdžiui, ir galite matyti, kad ji nustatyta Edge naršyklėje, "inspektuojant" tinklalapį (galite dešiniuoju pelės mygtuku spustelėti naršyklę, kad inspektuotumėte) ir eiti į skirtuką "Applications", kad pamatytumėte saugyklą.

![Vietinės saugyklos langas](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.lt.png)

✅ Pagalvokite apie situacijas, kai NENORĖTUMĖTE saugoti tam tikrų duomenų LocalStorage. Apskritai, API raktų saugojimas LocalStorage yra bloga idėja! Ar suprantate kodėl? Mūsų atveju, kadangi mūsų programa yra skirta tik mokymuisi ir nebus įkelta į programų parduotuvę, mes naudosime šį metodą.

Atkreipkite dėmesį, kad naudojate žiniatinklio API, kad manipuliuotumėte LocalStorage, naudodami `getItem()`, `setItem()` arba `removeItem()`. Tai plačiai palaikoma naršyklėse.

Prieš kuriant `displayCarbonUsage()` funkciją, kuri yra iškviečiama `init()` funkcijoje, sukurkime funkcionalumą, kuris apdoroja pradinį formos pateikimą.

### Apdorokite formos pateikimą

Sukurkite funkciją, vadinamą `handleSubmit`, kuri priima įvykio argumentą `(e)`. Sustabdykite įvykio plitimą (šiuo atveju norime sustabdyti naršyklės atnaujinimą) ir iškvieskite naują funkciją, `setUpUser`, perduodami argumentus `apiKey.value` ir `region.value`. Tokiu būdu naudojate dvi reikšmes, kurios gaunamos per pradinę formą, kai atitinkami laukai yra užpildyti.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Atsigaivinkite atmintį - HTML, kurį sukūrėte ankstesnėje pamokoje, turi du įvesties laukus, kurių `values` yra užfiksuoti per `const`, kuriuos nustatėte failo viršuje, ir jie abu yra `required`, todėl naršyklė neleidžia vartotojams įvesti tuščių reikšmių.

### Nustatykite vartotoją

Pereikime prie `setUpUser` funkcijos, kurioje nustatote vietinės saugyklos reikšmes `apiKey` ir `regionName`. Pridėkite naują funkciją:

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

Ši funkcija nustato įkėlimo pranešimą, kuris rodomas, kol API yra iškviečiama. Šiuo metu pasiekėte svarbiausią šio naršyklės plėtinio funkciją!

### Rodykite anglies naudojimą

Pagaliau atėjo laikas užklausti API!

Prieš tęsiant, turėtume aptarti API. API, arba [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), yra svarbi žiniatinklio kūrėjo įrankių dalis. Jos suteikia standartinius būdus programoms sąveikauti ir bendrauti tarpusavyje. Pavyzdžiui, jei kuriate svetainę, kuri turi užklausti duomenų bazę, kažkas galėjo sukurti API, kurią galite naudoti. Nors yra daug API tipų, vienas populiariausių yra [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Terminas 'REST' reiškia 'Representational State Transfer' ir apima įvairiai sukonfigūruotų URL naudojimą duomenims gauti. Atlikite nedidelį tyrimą apie įvairius API tipus, prieinamus kūrėjams. Koks formatas jums atrodo patraukliausias?

Šioje funkcijoje yra svarbių dalykų, į kuriuos reikia atkreipti dėmesį. Pirma, atkreipkite dėmesį į [`async` raktinį žodį](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Rašydami savo funkcijas taip, kad jos veiktų asinchroniškai, užtikrinate, kad jos lauktų veiksmo, pvz., duomenų gavimo, užbaigimo prieš tęsiant.

Štai trumpas vaizdo įrašas apie `async`:

[![Async ir Await valdyti pažadus](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async ir Await valdyti pažadus")

> 🎥 Spustelėkite aukščiau esančią nuotrauką, kad peržiūrėtumėte vaizdo įrašą apie async/await.

Sukurkite naują funkciją, skirtą užklausti C02Signal API:

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

Tai didelė funkcija. Kas čia vyksta?

- Vadovaujantis geriausia praktika, naudojate `async` raktinį žodį, kad ši funkcija veiktų asinchroniškai. Funkcija turi `try/catch` bloką, nes ji grąžins pažadą, kai API grąžins duomenis. Kadangi neturite kontrolės dėl API atsako greičio (ji gali visai neatsakyti!), turite valdyti šį neapibrėžtumą, iškviesdami ją asinchroniškai.
- Užklausiate co2signal API, kad gautumėte savo regiono duomenis, naudodami savo API raktą. Norėdami naudoti šį raktą, turite naudoti autentifikacijos tipą savo antraštės parametruose.
- Kai API atsako, priskiriate įvairius jos atsako duomenų elementus ekrano dalims, kurias nustatėte šiems duomenims rodyti.
- Jei yra klaida arba nėra rezultato, rodote klaidos pranešimą.

✅ Asinchroninio programavimo modelių naudojimas yra dar vienas labai naudingas įrankis jūsų arsenale. Perskaitykite [apie įvairius būdus](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function), kaip galite konfigūruoti tokio tipo kodą.

Sveikiname! Jei sukursite savo plėtinį (`npm run build`) ir atnaujinsite jį savo plėtinių lange, turėsite veikiantį plėtinį! Vienintelis dalykas, kuris neveikia, yra piktograma, ir tai ištaisysite kitoje pamokoje.

---

## 🚀 Iššūkis

Šiose pamokose aptarėme kelis API tipus. Pasirinkite vieną žiniatinklio API ir išsamiai ištirkite, ką ji siūlo. Pavyzdžiui, peržiūrėkite API, prieinamas naršyklėse, pvz., [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Kas, jūsų nuomone, sudaro puikią API?

## Klausimynas po paskaitos

[Klausimynas po paskaitos](https://ff-quizzes.netlify.app/web/quiz/26)

## Apžvalga ir savarankiškas mokymasis

Šioje pamokoje sužinojote apie LocalStorage ir API, abu labai naudingus profesionaliam žiniatinklio kūrėjui. Ar galite pagalvoti, kaip šie du dalykai veikia kartu? Pagalvokite, kaip sukurtumėte svetainę, kuri saugotų elementus, kuriuos naudotų API.

## Užduotis

[Pasirinkite API](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.