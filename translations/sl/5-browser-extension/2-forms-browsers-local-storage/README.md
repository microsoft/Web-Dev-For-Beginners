<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T12:49:20+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "sl"
}
-->
# Projekt razširitve brskalnika, 2. del: Klic API-ja, uporaba lokalnega shranjevanja

## Kviz pred predavanjem

[Kviz pred predavanjem](https://ff-quizzes.netlify.app/web/quiz/25)

### Uvod

V tej lekciji boste klicali API tako, da boste oddali obrazec svoje razširitve brskalnika in prikazali rezultate v razširitvi. Poleg tega se boste naučili, kako lahko shranite podatke v lokalno shrambo brskalnika za prihodnjo uporabo.

✅ Sledite oštevilčenim segmentom v ustreznih datotekah, da boste vedeli, kam postaviti svojo kodo.

### Priprava elementov za manipulacijo v razširitvi:

Do zdaj ste že ustvarili HTML za obrazec in `<div>` za rezultate v svoji razširitvi brskalnika. Od zdaj naprej boste delali v datoteki `/src/index.js` in postopoma gradili svojo razširitev. Oglejte si [prejšnjo lekcijo](../1-about-browsers/README.md) za navodila o nastavitvi projekta in procesu gradnje.

V datoteki `index.js` začnite z ustvarjanjem nekaj `const` spremenljivk za shranjevanje vrednosti, povezanih z različnimi polji:

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

Vsa ta polja so referencirana prek njihovih CSS razredov, kot ste jih nastavili v HTML-ju v prejšnji lekciji.

### Dodajanje poslušalcev dogodkov

Nato dodajte poslušalce dogodkov za obrazec in gumb za ponastavitev, ki ponastavi obrazec, tako da se ob oddaji obrazca ali kliku na gumb za ponastavitev nekaj zgodi. Na dnu datoteke dodajte klic za inicializacijo aplikacije:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Opazite skrajšano obliko za poslušanje dogodkov oddaje ali klika in kako se dogodek posreduje funkcijama `handleSubmit` ali `reset`. Ali lahko napišete ekvivalent te skrajšane oblike v daljši obliki? Katero obliko raje uporabljate?

### Izdelava funkcij `init()` in `reset()`:

Zdaj boste ustvarili funkcijo, ki inicializira razširitev, imenovano `init()`:

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

V tej funkciji je nekaj zanimive logike. Če jo preberete, lahko ugotovite, kaj se dogaja?

- Dva `const` preverjata, ali ima uporabnik shranjen APIKey in kodo regije v lokalni shrambi.
- Če je katera od teh vrednosti `null`, prikažite obrazec tako, da spremenite njegov slog na 'block'.
- Skrijte rezultate, nalaganje in gumb za ponastavitev ter nastavite besedilo napake na prazno vrednost.
- Če obstajata ključ in regija, začnite rutino za:
  - klic API-ja za pridobitev podatkov o ogljični porabi,
  - skrijte območje rezultatov,
  - skrijte obrazec,
  - prikažite gumb za ponastavitev.

Preden nadaljujete, je koristno spoznati zelo pomemben koncept, ki je na voljo v brskalnikih: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage je uporaben način za shranjevanje nizov v brskalniku kot par `ključ-vrednost`. Ta vrsta spletnega shranjevanja se lahko manipulira z JavaScriptom za upravljanje podatkov v brskalniku. LocalStorage ne poteče, medtem ko se SessionStorage, druga vrsta spletnega shranjevanja, izbriše, ko se brskalnik zapre. Različne vrste shranjevanja imajo prednosti in slabosti.

> Opomba - vaša razširitev brskalnika ima svojo lokalno shrambo; glavno okno brskalnika je ločen primerek in se obnaša ločeno.

Svoj APIKey nastavite na vrednost niza, na primer, in lahko vidite, da je nastavljen v Edgeu, če "pregledate" spletno stran (z desnim klikom na brskalnik lahko pregledate) in odprete zavihek Aplikacije, da vidite shrambo.

![Podokno lokalne shrambe](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.sl.png)

✅ Razmislite o situacijah, kjer NE bi želeli shranjevati določenih podatkov v LocalStorage. Na splošno je shranjevanje API ključev v LocalStorage slaba ideja! Vidite zakaj? V našem primeru, ker je naša aplikacija namenjena zgolj učenju in ne bo objavljena v trgovini z aplikacijami, bomo uporabili to metodo.

Opazite, da uporabljate spletni API za manipulacijo LocalStorage, bodisi z uporabo `getItem()`, `setItem()` ali `removeItem()`. Ta funkcionalnost je široko podprta v brskalnikih.

Preden zgradite funkcijo `displayCarbonUsage()`, ki se kliče v `init()`, ustvarite funkcionalnost za obdelavo začetne oddaje obrazca.

### Obdelava oddaje obrazca

Ustvarite funkcijo `handleSubmit`, ki sprejme argument dogodka `(e)`. Ustavite propagacijo dogodka (v tem primeru želimo ustaviti osvežitev brskalnika) in pokličite novo funkcijo `setUpUser`, pri čemer posredujete argumenta `apiKey.value` in `region.value`. Na ta način uporabite dve vrednosti, ki sta pridobljeni prek začetnega obrazca, ko sta ustrezni polji izpolnjeni.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Osvežite spomin - HTML, ki ste ga nastavili v prejšnji lekciji, ima dve vnosni polji, katerih `vrednosti` so zajete prek `const`, ki ste jih nastavili na vrhu datoteke, in obe polji sta `obvezni`, zato brskalnik prepreči uporabnikom vnos praznih vrednosti.

### Nastavitev uporabnika

Nadaljujte s funkcijo `setUpUser`, kjer nastavite vrednosti lokalne shrambe za `apiKey` in `regionName`. Dodajte novo funkcijo:

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

Ta funkcija prikaže sporočilo o nalaganju, medtem ko se kliče API. Na tej točki ste prišli do ustvarjanja najpomembnejše funkcije te razširitve brskalnika!

### Prikaz ogljične porabe

Končno je čas za poizvedbo API-ja!

Preden nadaljujete, se pogovorimo o API-jih. API-ji ali [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html) so ključni element v orodjarni spletnega razvijalca. Zagotavljajo standardne načine za programe, da komunicirajo in sodelujejo med seboj. Na primer, če gradite spletno mesto, ki mora poizvedovati bazo podatkov, je morda nekdo ustvaril API, ki ga lahko uporabite. Medtem ko obstaja veliko vrst API-jev, je eden najbolj priljubljenih [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Izraz 'REST' pomeni 'Representational State Transfer' in vključuje uporabo različno konfiguriranih URL-jev za pridobivanje podatkov. Raziščite različne vrste API-jev, ki so na voljo razvijalcem. Katera oblika vam je najbolj všeč?

V tej funkciji je nekaj pomembnih stvari. Najprej opazite ključno besedo [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Pisanje funkcij tako, da delujejo asinhrono, pomeni, da čakajo na dokončanje dejanja, kot je vračanje podatkov, preden nadaljujejo.

Tukaj je kratek video o `async`:

[![Async in Await za upravljanje obljub](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async in Await za upravljanje obljub")

> 🎥 Kliknite zgornjo sliko za video o async/await.

Ustvarite novo funkcijo za poizvedbo API-ja C02Signal:

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

To je velika funkcija. Kaj se tukaj dogaja?

- Po najboljših praksah uporabite ključno besedo `async`, da se funkcija obnaša asinhrono. Funkcija vsebuje blok `try/catch`, saj bo vrnila obljubo, ko API vrne podatke. Ker nimate nadzora nad hitrostjo, s katero bo API odgovoril (morda sploh ne bo odgovoril!), morate to negotovost obravnavati z asinhronim klicem.
- Poizvedujete API co2signal za pridobitev podatkov o vaši regiji, pri čemer uporabljate svoj API ključ. Za uporabo tega ključa morate uporabiti vrsto avtentikacije v parametrih glave.
- Ko API odgovori, dodelite različne elemente njegovih podatkov o odgovoru delom zaslona, ki ste jih nastavili za prikaz teh podatkov.
- Če pride do napake ali če ni rezultata, prikažete sporočilo o napaki.

✅ Uporaba asinhronih programskih vzorcev je še eno zelo uporabno orodje v vaši orodjarni. Preberite [o različnih načinih](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function), kako lahko konfigurirate to vrsto kode.

Čestitamo! Če zgradite svojo razširitev (`npm run build`) in jo osvežite v podoknu razširitev, imate delujočo razširitev! Edina stvar, ki še ne deluje, je ikona, kar boste popravili v naslednji lekciji.

---

## 🚀 Izziv

V teh lekcijah smo razpravljali o več vrstah API-jev. Izberite spletni API in podrobno raziščite, kaj ponuja. Na primer, si oglejte API-je, ki so na voljo v brskalnikih, kot je [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Kaj po vašem mnenju naredi API odličen?

## Kviz po predavanju

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/26)

## Pregled in samostojno učenje

V tej lekciji ste spoznali LocalStorage in API-je, oba zelo uporabna za profesionalnega spletnega razvijalca. Ali lahko razmislite, kako ti dve stvari delujeta skupaj? Razmislite, kako bi zasnovali spletno mesto, ki bi shranjevalo elemente za uporabo z API-jem.

## Naloga

[Posvojite API](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.