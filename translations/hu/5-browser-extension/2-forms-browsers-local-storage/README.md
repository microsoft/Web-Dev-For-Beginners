<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-24T20:37:40+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "hu"
}
-->
# Böngészőbővítmény projekt 2. rész: API hívása, helyi tárolás használata

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/25)

## Bevezetés

Emlékszel arra a böngészőbővítményre, amit elkezdtél építeni? Jelenleg van egy szép megjelenésű űrlapod, de lényegében statikus. Ma életre keltjük, valódi adatokkal kapcsoljuk össze, és memóriát adunk neki.

Gondolj az Apollo küldetésirányító számítógépeire - nem csak rögzített információkat jelenítettek meg. Folyamatosan kommunikáltak az űrhajóval, frissítették a telemetriai adatokat, és megjegyezték a kritikus küldetésparamétereket. Ilyen dinamikus viselkedést építünk ma. A bővítményed eléri az internetet, valódi környezeti adatokat szerez, és megjegyzi a beállításaidat legközelebbre.

Az API integráció bonyolultnak tűnhet, de valójában csak arról szól, hogy megtanítjuk a kódot más szolgáltatásokkal kommunikálni. Legyen szó időjárási adatok lekéréséről, közösségi média hírcsatornákról vagy szénlábnyom információkról, mint amit ma fogunk csinálni, mindez a digitális kapcsolatok létrehozásáról szól. Emellett megvizsgáljuk, hogyan tudnak a böngészők információkat megőrizni - hasonlóan ahhoz, ahogy a könyvtárak kártyakatalógusokat használnak a könyvek helyének megjegyzésére.

Az óra végére lesz egy böngészőbővítményed, amely valódi adatokat kér le, tárolja a felhasználói preferenciákat, és zökkenőmentes élményt nyújt. Kezdjük!

✅ Kövesd a számozott szegmenseket a megfelelő fájlokban, hogy tudd, hova kell elhelyezni a kódot.

## Állítsd be a manipulálni kívánt elemeket a bővítményben

Mielőtt a JavaScript manipulálni tudná a felületet, szüksége van hivatkozásokra konkrét HTML elemekre. Gondolj rá úgy, mint egy teleszkóp, amelyet bizonyos csillagokra kell irányítani - mielőtt Galileo tanulmányozhatta volna Jupiter holdjait, először meg kellett találnia és fókuszálnia Jupiterre.

Az `index.js` fájlban létrehozunk `const` változókat, amelyek rögzítik a hivatkozásokat minden fontos űrlapelemre. Ez hasonló ahhoz, ahogy a tudósok címkézik a felszerelésüket - ahelyett, hogy minden alkalommal átkutatnák az egész laboratóriumot, közvetlenül hozzáférhetnek ahhoz, amire szükségük van.

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

**Ez a kód a következőket teszi:**
- **Rögzíti** az űrlapelemeket a `document.querySelector()` segítségével CSS osztályszelektorokkal
- **Létrehozza** a régió nevének és az API kulcsnak az input mezőire vonatkozó hivatkozásokat
- **Kapcsolatot létesít** a szénfelhasználási adatok eredménymegjelenítő elemeivel
- **Hozzáférést biztosít** a felhasználói felület elemeihez, mint például a betöltési jelzők és hibaüzenetek
- **Tárolja** az egyes elemhivatkozásokat egy `const` változóban, hogy könnyen újra felhasználható legyen a kódodban

## Eseményfigyelők hozzáadása

Most elérjük, hogy a bővítményed reagáljon a felhasználói műveletekre. Az eseményfigyelők a kódod módja arra, hogy figyelje a felhasználói interakciókat. Gondolj rájuk úgy, mint a korai telefonközpontok kezelőire - hallgatták a bejövő hívásokat, és összekapcsolták a megfelelő áramköröket, amikor valaki kapcsolatot akart létesíteni.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Ezeknek a fogalmaknak a megértése:**
- **Hozzáad** egy beküldési figyelőt az űrlaphoz, amely akkor aktiválódik, amikor a felhasználók Entert nyomnak vagy a beküldés gombra kattintanak
- **Kapcsolatot létesít** egy kattintási figyelőt a törlés gombhoz az űrlap visszaállításához
- **Átadja** az eseményobjektumot `(e)` a kezelőfüggvényeknek további vezérlés érdekében
- **Azonnal meghívja** az `init()` függvényt, hogy beállítsa a bővítmény kezdeti állapotát

✅ Figyeld meg a rövidített nyílfüggvény szintaxist, amelyet itt használnak. Ez a modern JavaScript megközelítés tisztább, mint a hagyományos függvénykifejezések, de mindkettő egyformán jól működik!

## Az inicializálási és visszaállítási függvények létrehozása

Hozzuk létre a bővítményed inicializálási logikáját. Az `init()` függvény olyan, mint egy hajó navigációs rendszere, amely ellenőrzi a műszereit - meghatározza az aktuális állapotot, és ennek megfelelően állítja be a felületet. Ellenőrzi, hogy valaki használta-e már a bővítményedet, és betölti a korábbi beállításait.

A `reset()` függvény lehetőséget ad a felhasználóknak egy tiszta kezdésre - hasonlóan ahhoz, ahogy a tudósok visszaállítják a műszereiket a kísérletek között, hogy biztosítsák a tiszta adatokat.

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

**Ami itt történik:**
- **Lekéri** a böngésző helyi tárolójából az elmentett API kulcsot és régiót
- **Ellenőrzi**, hogy ez egy első alkalommal használó felhasználó-e (nincsenek elmentett hitelesítő adatok) vagy visszatérő felhasználó
- **Megjeleníti** a beállítási űrlapot új felhasználók számára, és elrejti a többi felületelemet
- **Automatikusan betölti** az elmentett adatokat visszatérő felhasználók számára, és megjeleníti a visszaállítási opciót
- **Kezeli** a felhasználói felület állapotát az elérhető adatok alapján

**Fontos fogalmak a helyi tárolásról:**
- **Megőrzi** az adatokat a böngésző munkamenetei között (ellentétben a munkamenet tárolással)
- **Tárolja** az adatokat kulcs-érték párok formájában a `getItem()` és `setItem()` segítségével
- **`null` értéket ad vissza**, ha egy adott kulcshoz nem létezik adat
- **Egyszerű módot biztosít** a felhasználói preferenciák és beállítások megjegyzésére

> 💡 **A böngésző tárolásának megértése**: A [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) olyan, mintha a bővítményednek tartós memóriát adnál. Gondolj arra, hogyan tárolta az ókori Alexandriai Könyvtár a tekercseket - az információ elérhető maradt, még akkor is, amikor a tudósok elmentek és visszatértek.
>
> **Fő jellemzők:**
> - **Megőrzi** az adatokat még akkor is, ha bezárod a böngészőt
> - **Túléli** a számítógép újraindítását és a böngésző összeomlását
> - **Jelentős tárolóhelyet biztosít** a felhasználói preferenciák számára
> - **Azonnali hozzáférést biztosít** hálózati késések nélkül

> **Fontos megjegyzés**: A böngészőbővítményednek saját, elkülönített helyi tárolása van, amely különáll a szokásos weboldalaktól. Ez biztonságot nyújt, és megakadályozza az ütközéseket más weboldalakkal.

A tárolt adataidat megtekintheted, ha megnyitod a böngésző Fejlesztői Eszközeit (F12), navigálsz az **Application** fülre, és kibővíted a **Local Storage** szekciót.

![Helyi tárolás panel](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.hu.png)

> ⚠️ **Biztonsági megfontolás**: Éles alkalmazásokban az API kulcsok helyi tárolásban történő tárolása biztonsági kockázatokat jelent, mivel a JavaScript hozzáférhet ezekhez az adatokhoz. Tanulási célokra ez a megközelítés megfelelő, de valódi alkalmazásoknak biztonságos szerveroldali tárolást kell használniuk az érzékeny hitelesítő adatokhoz.

## Az űrlap beküldésének kezelése

Most kezeljük, mi történik, amikor valaki beküldi az űrlapodat. Alapértelmezés szerint a böngészők újratöltik az oldalt, amikor az űrlapokat beküldik, de ezt a viselkedést megakadályozzuk, hogy zökkenőmentes élményt hozzunk létre.

Ez a megközelítés tükrözi, hogyan kezeli a küldetésirányítás az űrhajó kommunikációját - ahelyett, hogy minden egyes átvitelhez újraindítanák az egész rendszert, folyamatos működést tartanak fenn, miközben feldolgozzák az új információkat.

Hozz létre egy függvényt, amely rögzíti az űrlap beküldési eseményét, és kinyeri a felhasználó bemeneti adatait:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**A fentiekben:**
- **Megakadályozza** az alapértelmezett űrlap beküldési viselkedést, amely frissítené az oldalt
- **Kinyeri** a felhasználói bemeneti értékeket az API kulcs és régió mezőkből
- **Átadja** az űrlap adatokat a `setUpUser()` függvénynek feldolgozásra
- **Fenntartja** az egyoldalas alkalmazás viselkedést az oldal újratöltése nélkül

✅ Ne feledd, hogy az HTML űrlap mezőid tartalmazzák a `required` attribútumot, így a böngésző automatikusan ellenőrzi, hogy a felhasználók megadják-e az API kulcsot és a régiót, mielőtt ez a függvény futna.

## Felhasználói preferenciák beállítása

A `setUpUser` függvény felelős a felhasználó hitelesítő adatainak mentéséért és az első API hívás kezdeményezéséért. Ez zökkenőmentes átmenetet teremt a beállítás és az eredmények megjelenítése között.

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

**Lépésről lépésre, itt mi történik:**
- **Elmenti** az API kulcsot és a régió nevét a helyi tárolásba későbbi használatra
- **Megjelenít** egy betöltési jelzőt, hogy tájékoztassa a felhasználókat, hogy az adatok lekérése folyamatban van
- **Törli** az előző hibaüzeneteket a kijelzőről
- **Láthatóvá teszi** a törlés gombot, hogy a felhasználók később visszaállíthassák a beállításaikat
- **Kezdeményezi** az API hívást, hogy valódi szénfelhasználási adatokat kérjen le

Ez a függvény zökkenőmentes felhasználói élményt teremt azáltal, hogy egyszerre kezeli az adatok megőrzését és a felhasználói felület frissítését.

## Szénfelhasználási adatok megjelenítése

Most összekapcsoljuk a bővítményedet külső adatforrásokkal az API-kon keresztül. Ez átalakítja a bővítményedet egy önálló eszközből valami olyanná, amely valós idejű információkhoz fér hozzá az interneten keresztül.

**Az API-k megértése**

Az [API-k](https://www.webopedia.com/TERM/A/API.html) lehetővé teszik, hogy különböző alkalmazások kommunikáljanak egymással. Gondolj rájuk úgy, mint a távíró rendszerre, amely a 19. században összekötötte a távoli városokat - a kezelők kéréseket küldtek távoli állomásokra, és válaszokat kaptak a kért információkkal. Minden alkalommal, amikor közösségi médiát nézel, kérdést teszel fel egy hangasszisztensnek, vagy egy szállítási alkalmazást használsz, az API-k segítik ezeket az adatcseréket.

**Fontos fogalmak a REST API-król:**
- **REST** jelentése: 'Representational State Transfer'
- **Használja** a szabványos HTTP metódusokat (GET, POST, PUT, DELETE) az adatokkal való interakcióhoz
- **Adatokat ad vissza** előre meghatározott formátumokban, általában JSON-ban
- **Konzisztens, URL-alapú végpontokat biztosít** különböző típusú kérésekhez

✅ A [CO2 Signal API](https://www.co2signal.com/), amelyet használni fogunk, valós idejű szénintenzitási adatokat biztosít a világ elektromos hálózataiból. Ez segít a felhasználóknak megérteni az elektromos energiafogyasztásuk környezeti hatását!

> 💡 **Az aszinkron JavaScript megértése**: Az [`async` kulcsszó](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) lehetővé teszi, hogy a kódod egyszerre több műveletet kezeljen. Amikor adatokat kérsz egy szervertől, nem szeretnéd, hogy az egész bővítmény lefagyjon - ez olyan lenne, mintha a légi irányítás leállítaná az összes műveletet, miközben egy repülő válaszára vár.
>
> **Fő előnyök:**
> - **Fenntartja** a bővítmény válaszkészségét, miközben az adatok betöltődnek
> - **Lehetővé teszi**, hogy más kód tovább fusson a hálózati kérések közben
> - **Javítja** a kód olvashatóságát a hagyományos visszahívási mintákhoz képest
> - **Lehetővé teszi** a hálózati problémák elegáns hibakezelését

Itt egy gyors videó az `async`-ról:

[![Async és Await a promisek kezeléséhez](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async és Await a promisek kezeléséhez")

> 🎥 Kattints a fenti képre az async/await-ról szóló videóért.

Hozd létre a függvényt a szénfelhasználási adatok lekéréséhez és megjelenítéséhez:

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

**Ami itt történik:**
- **Használja** a modern `fetch()` API-t külső könyvtárak, például Axios helyett, tisztább, függőségmentes kód érdekében
- **Megvalósítja** a megfelelő hibakezelést a `response.ok` segítségével, hogy korán észlelje az API hibáit
- **Kezeli** az aszinkron műveleteket az `async/await` segítségével az olvashatóbb kódfolyam érdekében
- **Hitelesíti** a CO2 Signal API-t az `auth-token` fejléc használatával
- **Elemzi** a JSON válaszadatokat, és kinyeri a szénintenzitási információkat
- **Frissíti** a felhasználói felület több elemét formázott kör
Ebben a leckében megismerkedtél a LocalStorage és az API-k használatával, amelyek mindkettő nagyon hasznosak a professzionális webfejlesztők számára. El tudod képzelni, hogyan működhet ez a két dolog együtt? Gondolj arra, hogyan terveznél meg egy weboldalt, amely elemeket tárolna, hogy azokat egy API használhassa.

## Feladat

[Használj egy API-t](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.