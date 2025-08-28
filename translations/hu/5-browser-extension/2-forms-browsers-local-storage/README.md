<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-28T03:50:37+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "hu"
}
-->
# Böngészőbővítmény projekt 2. rész: API hívása, helyi tárolás használata

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/25)

### Bevezetés

Ebben a leckében egy API-t fogsz meghívni a böngészőbővítményed űrlapjának beküldésével, és megjeleníted az eredményeket a bővítményben. Emellett megtanulod, hogyan tárolhatsz adatokat a böngésződ helyi tárolójában későbbi felhasználásra.

✅ Kövesd a megfelelő fájlokban található számozott szegmenseket, hogy tudd, hova kell elhelyezni a kódot.

### Az elemek beállítása a bővítmény manipulálásához:

Eddig elkészítetted a HTML-t az űrlaphoz és az eredmények `<div>` eleméhez a böngészőbővítményedben. Mostantól a `/src/index.js` fájlban kell dolgoznod, és lépésről lépésre építened a bővítményt. Tekintsd át az [előző leckét](../1-about-browsers/README.md), amely segít a projekt beállításában és a build folyamatban.

Az `index.js` fájlban kezdj azzal, hogy létrehozol néhány `const` változót, amelyek az egyes mezőkhöz kapcsolódó értékeket tárolják:

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

Ezeket a mezőket a CSS osztályuk alapján hivatkozod meg, ahogyan azt az előző leckében a HTML-ben beállítottad.

### Eseményfigyelők hozzáadása

Ezután adj eseményfigyelőket az űrlaphoz és a törlés gombhoz, amely visszaállítja az űrlapot, hogy ha a felhasználó beküldi az űrlapot vagy rákattint a törlés gombra, történjen valami. Add hozzá az alkalmazás inicializálására szolgáló hívást a fájl aljára:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Figyeld meg a rövidített szintaxist, amelyet az űrlap beküldésére vagy kattintási eseményre való figyeléshez használnak, és hogy az eseményt hogyan adják át a handleSubmit vagy reset függvényeknek. Meg tudnád írni ennek a rövidített szintaxisnak a hosszabb változatát? Melyiket részesíted előnyben?

### Az init() és reset() függvények felépítése:

Most létrehozod a bővítmény inicializálására szolgáló függvényt, amelyet init()-nek hívnak:

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

Ebben a függvényben érdekes logika található. Átolvasva látod, mi történik?

- két `const` változót állítasz be, hogy ellenőrizd, tárolt-e a felhasználó APIKey-t és régiókódot a helyi tárolóban.
- ha bármelyik érték null, az űrlapot megjeleníted úgy, hogy a stílusát 'block'-ra állítod.
- elrejted az eredményeket, a betöltést és a clearBtn-t, valamint az esetleges hibaüzenetet üres szövegre állítod.
- ha van kulcs és régió, elindítasz egy rutint:
  - API hívás a szén-dioxid használati adatok lekérésére
  - az eredmények területének elrejtése
  - az űrlap elrejtése
  - a visszaállítás gomb megjelenítése

Mielőtt továbbmennél, hasznos megismerni egy nagyon fontos böngészőben elérhető koncepciót: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). A LocalStorage hasznos módja annak, hogy sztringeket tárolj a böngészőben `key-value` párok formájában. Ez a fajta webes tárolás JavaScript segítségével manipulálható, hogy adatokat kezeljen a böngészőben. A LocalStorage nem jár le, míg a SessionStorage, egy másik fajta webes tárolás, törlődik, amikor a böngészőt bezárják. A különböző tárolási típusoknak vannak előnyei és hátrányai.

> Megjegyzés - a böngészőbővítményednek saját helyi tárolója van; a fő böngészőablak egy különálló példány, és külön viselkedik.

Az APIKey-t például sztring értékként állítod be, és láthatod, hogy az Edge böngészőben be van állítva, ha "megtekinted" egy weboldalt (jobb gombbal kattintva a böngészőben), és az Alkalmazások fülre mész, hogy lásd a tárolást.

![Helyi tároló panel](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.hu.png)

✅ Gondolj olyan helyzetekre, amikor NEM lenne célszerű adatokat tárolni a LocalStorage-ban. Általánosságban véve, API kulcsokat helyi tárolóban elhelyezni rossz ötlet! Látod, miért? A mi esetünkben, mivel az alkalmazásunk kizárólag tanulási célokat szolgál, és nem kerül alkalmazásboltba, ezt a módszert fogjuk használni.

Figyeld meg, hogy a Web API-t használod a LocalStorage manipulálására, akár `getItem()`, `setItem()`, vagy `removeItem()` segítségével. Széles körben támogatott a böngészőkben.

Mielőtt megépítenéd a `displayCarbonUsage()` függvényt, amelyet az `init()` hív meg, építsd ki az űrlap beküldésének kezelésére szolgáló funkciót.

### Az űrlap beküldésének kezelése

Hozz létre egy `handleSubmit` nevű függvényt, amely elfogad egy esemény argumentumot `(e)`. Állítsd meg az esemény propagálását (ebben az esetben meg akarod akadályozni, hogy a böngésző frissüljön), és hívd meg egy új függvényt, a `setUpUser`-t, amelynek átadod az `apiKey.value` és `region.value` argumentumokat. Így használod azt a két értéket, amelyet az űrlap megfelelő mezőinek kitöltésekor hozol be.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Frissítsd az emlékezeted - az előző leckében beállított HTML-ben két bemeneti mező van, amelyek `value` értékeit a fájl tetején beállított `const` változók rögzítik, és mindkettő `required`, így a böngésző megakadályozza, hogy a felhasználók null értékeket adjanak meg.

### A felhasználó beállítása

Haladj tovább a `setUpUser` függvényhez, itt állítod be a helyi tároló értékeit az apiKey és regionName számára. Adj hozzá egy új függvényt:

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

Ez a függvény egy betöltési üzenetet állít be, amely megjelenik, amíg az API hívás megtörténik. Ezen a ponton elérkeztél a böngészőbővítmény legfontosabb funkciójának létrehozásához!

### Szén-dioxid használat megjelenítése

Végül itt az idő, hogy lekérdezd az API-t!

Mielőtt továbbmennénk, beszéljünk az API-król. Az API-k, vagyis [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), a webfejlesztők eszköztárának kritikus elemei. Szabványos módokat biztosítanak a programok közötti interakcióhoz és interfészhez. Például, ha egy weboldalt építesz, amelynek adatbázist kell lekérdeznie, valaki létrehozhatott egy API-t, amelyet használhatsz. Bár sokféle API létezik, az egyik legnépszerűbb a [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ A 'REST' kifejezés a 'Representational State Transfer' rövidítése, és különböző URL-ek konfigurálásával történő adatlekérést jelent. Végezz egy kis kutatást a fejlesztők számára elérhető API-k különböző típusairól. Melyik formátum tetszik neked?

Fontos dolgokat kell megjegyezni erről a függvényről. Először is, figyeld meg az [`async` kulcsszót](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Ha a függvényeidet aszinkron módon írod meg, akkor azok várnak egy művelet, például adat visszaadása befejezésére, mielőtt folytatnák.

Itt egy rövid videó az `async`-ról:

[![Async és Await ígéretek kezelésére](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async és Await ígéretek kezelésére")

> 🎥 Kattints a fenti képre egy videóért az async/await-ról.

Hozz létre egy új függvényt a C02Signal API lekérdezésére:

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

Ez egy nagy függvény. Mi történik itt?

- a legjobb gyakorlatokat követve az `async` kulcsszót használod, hogy ez a függvény aszinkron módon viselkedjen. A függvény tartalmaz egy `try/catch` blokkot, mivel ígéretet ad vissza, amikor az API adatokat küld. Mivel nincs kontrollod az API válaszának sebessége felett (lehet, hogy egyáltalán nem válaszol!), ezt a bizonytalanságot aszinkron módon kell kezelni.
- a co2signal API-t kérdezed le, hogy megszerezd a régiód adatait az API kulcsod használatával. Ahhoz, hogy ezt a kulcsot használd, egyfajta hitelesítést kell alkalmaznod a fejléc paramétereiben.
- amikor az API válaszol, az adatainak különböző elemeit hozzárendeled a képernyő azon részeihez, amelyeket az adatok megjelenítésére állítottál be.
- ha hiba van, vagy nincs eredmény, hibaüzenetet jelenítesz meg.

✅ Az aszinkron programozási minták használata egy másik nagyon hasznos eszköz a fejlesztői eszköztáradban. Olvass [a különböző módokról](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function), ahogyan ezt a típusú kódot konfigurálhatod.

Gratulálok! Ha build-elsz (`npm run build`) és frissíted a bővítményt az eszközök panelen, működő bővítményed van! Az egyetlen dolog, ami nem működik, az ikon, és ezt a következő leckében fogod kijavítani.

---

## 🚀 Kihívás

Eddig többféle API-t tárgyaltunk ezekben a leckékben. Válassz egy webes API-t, és kutasd fel részletesen, mit kínál. Például nézd meg a böngészőkben elérhető API-kat, mint például a [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Mi tesz egy API-t nagyszerűvé szerinted?

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/26)

## Áttekintés és önálló tanulás

Ebben a leckében a LocalStorage-ról és az API-król tanultál, amelyek mind nagyon hasznosak a profi webfejlesztő számára. Gondold át, hogyan működnek együtt ezek a dolgok. Gondold át, hogyan építenél fel egy weboldalt, amely elemeket tárolna, hogy egy API használhassa őket.

## Feladat

[Adoptálj egy API-t](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.