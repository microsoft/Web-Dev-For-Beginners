<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T16:49:49+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "lt"
}
-->
# Naršyklės plėtinio projektas 2 dalis: API iškvietimas, vietinės saugyklos naudojimas

## Klausimai prieš paskaitą

[Klausimai prieš paskaitą](https://ff-quizzes.netlify.app/web/quiz/25)

### Įvadas

Šioje pamokoje iškviesite API, pateikdami savo naršyklės plėtinio formą, ir rodysite rezultatus plėtinyje. Be to, sužinosite, kaip galite saugoti duomenis naršyklės vietinėje saugykloje, kad galėtumėte juos naudoti ateityje.

✅ Sekite numeruotus segmentus atitinkamuose failuose, kad žinotumėte, kur įterpti savo kodą.

### Sukurkite elementus, kuriuos manipuliuosite plėtinyje:

Iki šiol jau sukūrėte HTML formą ir rezultatų `<div>` savo naršyklės plėtiniui. Nuo šiol dirbsite su `/src/index.js` failu ir po truputį kursite savo plėtinį. Peržiūrėkite [ankstesnę pamoką](../1-about-browsers/README.md), kad sužinotumėte, kaip nustatyti projektą ir vykdyti kūrimo procesą.

Dirbdami su `index.js` failu, pradėkite kurti keletą `const` kintamųjų, kad išsaugotumėte reikšmes, susijusias su įvairiais laukais:

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

Visi šie laukai yra nurodyti pagal jų CSS klasę, kaip tai buvo nustatyta HTML ankstesnėje pamokoje.

### Pridėkite klausytojus

Toliau pridėkite įvykių klausytojus formoje ir mygtuke „Išvalyti“, kuris atstato formą, kad, jei vartotojas pateikia formą arba paspaudžia atstatymo mygtuką, kažkas įvyktų. Pridėkite funkcijos, inicijuojančios programą, iškvietimą failo apačioje:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Atkreipkite dėmesį į sutrumpintą būdą klausytis pateikimo arba paspaudimo įvykio ir kaip įvykis perduodamas `handleSubmit` arba `reset` funkcijoms. Ar galite parašyti šio sutrumpinto formato ekvivalentą ilgesniu formatu? Kuris jums labiau patinka?

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

Šioje funkcijoje yra įdomi logika. Perskaitydami ją, ar galite suprasti, kas vyksta?

- Sukuriami du `const`, kad patikrintų, ar vartotojas vietinėje saugykloje išsaugojo APIKey ir regiono kodą.
- Jei kuris nors iš jų yra `null`, forma rodoma pakeičiant jos stilių į „block“.
- Paslepiami rezultatai, įkėlimo indikatorius ir mygtukas „Išvalyti“, o klaidos tekstas nustatomas kaip tuščias.
- Jei yra raktas ir regionas, pradedama rutina:
  - Iškviečiama API, kad gautų anglies naudojimo duomenis.
  - Paslepiama rezultatų sritis.
  - Paslepiama forma.
  - Parodomas atstatymo mygtukas.

Prieš tęsiant, naudinga sužinoti apie labai svarbią naršyklėse prieinamą koncepciją: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage yra naudingas būdas saugoti eilutes naršyklėje kaip `key-value` poras. Šio tipo žiniatinklio saugyklą galima valdyti naudojant JavaScript, kad būtų tvarkomi duomenys naršyklėje. LocalStorage neturi galiojimo pabaigos, o SessionStorage, kita žiniatinklio saugyklos rūšis, išvaloma uždarius naršyklę. Skirtingos saugyklos rūšys turi privalumų ir trūkumų.

> Pastaba - jūsų naršyklės plėtinys turi savo vietinę saugyklą; pagrindinis naršyklės langas yra atskira instancija ir veikia atskirai.

Jūs nustatote savo APIKey kaip eilutės reikšmę, pavyzdžiui, ir galite matyti, kad ji nustatyta Edge naršyklėje „inspektuojant“ tinklalapį (dešiniuoju pelės mygtuku spustelėkite naršyklę, kad inspektuotumėte) ir eidami į skirtuką „Applications“, kad pamatytumėte saugyklą.

![Vietinės saugyklos langas](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.lt.png)

✅ Pagalvokite apie situacijas, kai nenorėtumėte saugoti tam tikrų duomenų LocalStorage. Apskritai, API raktų saugojimas LocalStorage yra bloga idėja! Ar galite suprasti kodėl? Mūsų atveju, kadangi mūsų programa skirta tik mokymuisi ir nebus publikuojama programų parduotuvėje, naudosime šį metodą.

Atkreipkite dėmesį, kad naudojate Web API, kad manipuliuotumėte LocalStorage, naudodami `getItem()`, `setItem()` arba `removeItem()`. Tai plačiai palaikoma įvairiose naršyklėse.

Prieš kuriant `displayCarbonUsage()` funkciją, kuri yra iškviečiama `init()`, sukurkime funkcionalumą, kuris apdoroja pradinį formos pateikimą.

### Apdorokite formos pateikimą

Sukurkite funkciją, vadinamą `handleSubmit`, kuri priima įvykio argumentą `(e)`. Sustabdykite įvykio plitimą (šiuo atveju norime sustabdyti naršyklės atnaujinimą) ir iškvieskite naują funkciją `setUpUser`, perduodami argumentus `apiKey.value` ir `region.value`. Tokiu būdu naudojate dvi reikšmes, kurios gaunamos per pradinę formą, kai atitinkami laukai yra užpildyti.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Atgaivinkite savo atmintį - HTML, kurį sukūrėte paskutinėje pamokoje, turi du įvesties laukus, kurių `values` yra užfiksuoti per `const`, kurį nustatėte failo viršuje, ir jie abu yra `required`, todėl naršyklė sustabdo vartotojus nuo null reikšmių įvedimo.

### Nustatykite vartotoją

Toliau pereikime prie `setUpUser` funkcijos, kurioje nustatote vietinės saugyklos reikšmes apiKey ir regionName. Pridėkite naują funkciją:

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

Ši funkcija rodo įkėlimo pranešimą, kol API yra iškviečiama. Šiuo metu pasiekėte svarbiausią šio naršyklės plėtinio funkciją!

### Rodykite anglies naudojimą

Pagaliau atėjo laikas užklausti API!

Prieš tęsiant, turėtume aptarti API. API, arba [Programų sąsajos](https://www.webopedia.com/TERM/A/API.html), yra kritinis žiniatinklio kūrėjo įrankių elementas. Jie suteikia standartinius būdus programoms sąveikauti ir bendrauti tarpusavyje. Pavyzdžiui, jei kuriate svetainę, kuri turi užklausti duomenų bazę, kažkas galėjo sukurti API, kurį galite naudoti. Nors yra daug API tipų, vienas populiariausių yra [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Terminas „REST“ reiškia „Reprezentacinė būsenos perdavimo sąsaja“ ir apima įvairiai sukonfigūruotų URL naudojimą duomenims gauti. Atlikite nedidelį tyrimą apie įvairius API tipus, prieinamus kūrėjams. Koks formatas jums atrodo patrauklus?

Šioje funkcijoje yra svarbių dalykų, į kuriuos reikia atkreipti dėmesį. Pirmiausia, atkreipkite dėmesį į [`async` raktažodį](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Rašydami savo funkcijas taip, kad jos veiktų asinchroniškai, užtikrinate, kad jos lauktų veiksmo, pvz., duomenų grąžinimo, užbaigimo prieš tęsiant.

Štai trumpas vaizdo įrašas apie `async`:

[![Async ir Await pažadų valdymui](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async ir Await pažadų valdymui")

> 🎥 Spustelėkite aukščiau esančią nuotrauką, kad pamatytumėte vaizdo įrašą apie async/await.

Sukurkite naują funkciją, kad užklaustumėte C02Signal API:

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

- Laikantis geriausios praktikos, naudojate `async` raktažodį, kad ši funkcija veiktų asinchroniškai. Funkcija turi `try/catch` bloką, nes ji grąžins pažadą, kai API grąžins duomenis. Kadangi neturite kontrolės, kaip greitai API atsakys (ji gali visai neatsakyti!), turite tvarkyti šį neapibrėžtumą, iškviesdami ją asinchroniškai.
- Užklausiama co2signal API, kad gautų jūsų regiono duomenis, naudojant jūsų API raktą. Norėdami naudoti tą raktą, turite naudoti tam tikrą autentifikaciją savo antraštės parametruose.
- Kai API atsako, įvairūs jos atsakymo duomenų elementai priskiriami ekrano dalims, kurias nustatėte šiems duomenims rodyti.
- Jei įvyksta klaida arba nėra rezultato, rodomas klaidos pranešimas.

✅ Asinchroninių programavimo modelių naudojimas yra dar vienas labai naudingas įrankis jūsų įrankių dėžėje. Perskaitykite [apie įvairius būdus](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function), kaip galite konfigūruoti tokio tipo kodą.

Sveikiname! Jei sukursite savo plėtinį (`npm run build`) ir atnaujinsite jį plėtinių skydelyje, turėsite veikiantį plėtinį! Vienintelis dalykas, kuris neveikia, yra piktograma, ir tai ištaisysite kitoje pamokoje.

---

## 🚀 Iššūkis

Šiose pamokose aptarėme kelis API tipus. Pasirinkite žiniatinklio API ir išsamiai ištirkite, ką ji siūlo. Pavyzdžiui, pažvelkite į API, prieinamas naršyklėse, tokias kaip [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Kas, jūsų nuomone, sudaro puikų API?

## Klausimai po paskaitos

[Klausimai po paskaitos](https://ff-quizzes.netlify.app/web/quiz/26)

## Apžvalga ir savarankiškas mokymasis

Šioje pamokoje sužinojote apie LocalStorage ir API, abu labai naudingus profesionaliam žiniatinklio kūrėjui. Ar galite pagalvoti, kaip šie du dalykai veikia kartu? Pagalvokite, kaip sukurtumėte svetainę, kuri saugotų elementus, kuriuos naudoja API.

## Užduotis

[Pasirinkite API](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.