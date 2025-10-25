<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-25T00:45:53+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "sl"
}
-->
# Projekt razširitve brskalnika, 2. del: Klic API-ja, uporaba lokalnega shranjevanja

## Predhodni kviz

[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/25)

## Uvod

Se spomnite razširitve brskalnika, ki ste jo začeli graditi? Trenutno imate lepo oblikovan obrazec, vendar je v bistvu statičen. Danes ga bomo oživili tako, da ga povežemo z resničnimi podatki in mu dodamo spomin.

Pomislite na računalnike za nadzor misije Apollo - niso prikazovali le fiksnih informacij. Nenehno so komunicirali z vesoljskimi plovili, posodabljali telemetrijske podatke in si zapomnili ključne parametre misije. Takšno dinamično vedenje bomo gradili danes. Vaša razširitev bo dostopala do interneta, pridobivala resnične okoljske podatke in si zapomnila vaše nastavitve za naslednjič.

Integracija API-ja se morda sliši zapleteno, vendar gre v bistvu za to, da naučite svojo kodo, kako komunicirati z drugimi storitvami. Ne glede na to, ali pridobivate podatke o vremenu, družbenih omrežjih ali informacijah o ogljičnem odtisu, kot bomo storili danes, gre za vzpostavljanje teh digitalnih povezav. Raziskali bomo tudi, kako brskalniki lahko ohranijo informacije - podobno kot knjižnice uporabljajo kartoteke za shranjevanje lokacij knjig.

Do konca te lekcije boste imeli razširitev brskalnika, ki pridobiva resnične podatke, shranjuje uporabniške nastavitve in zagotavlja gladko izkušnjo. Začnimo!

✅ Sledite oštevilčenim segmentom v ustreznih datotekah, da boste vedeli, kam postaviti svojo kodo.

## Priprava elementov za manipulacijo v razširitvi

Preden lahko vaš JavaScript manipulira z vmesnikom, potrebuje reference na specifične HTML elemente. Pomislite na to kot na teleskop, ki ga je treba usmeriti na določene zvezde - preden je Galileo lahko preučeval Jupitrove lune, je moral najti in se osredotočiti na Jupiter.

V datoteki `index.js` bomo ustvarili `const` spremenljivke, ki zajamejo reference na vsak pomemben element obrazca. To je podobno, kot da bi znanstveniki označili svojo opremo - namesto da bi vsakič iskali po celotnem laboratoriju, lahko neposredno dostopajo do tistega, kar potrebujejo.

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

**Kaj ta koda počne:**
- **Zajame** elemente obrazca z uporabo `document.querySelector()` in CSS razrednih selektorjev
- **Ustvari** reference na vnosna polja za ime regije in API ključ
- **Vzpostavi** povezave z elementi za prikaz rezultatov podatkov o porabi ogljika
- **Pripravi** dostop do UI elementov, kot so indikatorji nalaganja in sporočila o napakah
- **Shrani** vsako referenco elementa v `const` spremenljivko za enostavno ponovno uporabo v kodi

## Dodajanje poslušalcev dogodkov

Zdaj bomo poskrbeli, da vaša razširitev reagira na uporabniške akcije. Poslušalci dogodkov so način, kako vaša koda spremlja interakcije uporabnikov. Pomislite nanje kot na operaterje v zgodnjih telefonskih centralah - poslušali so dohodne klice in povezali prave kroge, ko je nekdo želel vzpostaviti povezavo.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Razumevanje teh konceptov:**
- **Pripne** poslušalca za oddajo obrazca, ki se sproži, ko uporabniki pritisnejo Enter ali kliknejo oddaj
- **Poveže** poslušalca za klik na gumb za čiščenje, da ponastavi obrazec
- **Posreduje** objekt dogodka `(e)` funkcijam za obdelavo za dodatni nadzor
- **Pokliče** funkcijo `init()` takoj, da nastavi začetno stanje vaše razširitve

✅ Opazite skrajšano sintakso puščice, ki se tukaj uporablja. Ta sodoben pristop JavaScripta je bolj čist kot tradicionalni izrazi funkcij, vendar oba delujeta enako dobro!

## Izdelava funkcij za inicializacijo in ponastavitev

Ustvarimo logiko inicializacije za vašo razširitev. Funkcija `init()` je kot navigacijski sistem ladje, ki preverja svoje instrumente - določa trenutno stanje in ustrezno prilagaja vmesnik. Preveri, ali je nekdo že uporabljal vašo razširitev in naloži njihove prejšnje nastavitve.

Funkcija `reset()` uporabnikom omogoča svež začetek - podobno kot znanstveniki ponastavijo svoje instrumente med eksperimenti, da zagotovijo čiste podatke.

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

**Razčlenitev dogajanja:**
- **Pridobi** shranjen API ključ in regijo iz lokalnega shranjevanja brskalnika
- **Preveri**, ali gre za novega uporabnika (brez shranjenih poverilnic) ali za uporabnika, ki se vrača
- **Prikaže** obrazec za nastavitev za nove uporabnike in skrije druge elemente vmesnika
- **Samodejno naloži** shranjene podatke za uporabnike, ki se vračajo, in prikaže možnost ponastavitve
- **Upravlja** stanje uporabniškega vmesnika glede na razpoložljive podatke

**Ključni koncepti o lokalnem shranjevanju:**
- **Ohranja** podatke med sejami brskalnika (za razliko od shranjevanja sej)
- **Shranjuje** podatke kot ključ-vrednost pare z uporabo `getItem()` in `setItem()`
- **Vrne** `null`, ko za določen ključ ni podatkov
- **Ponuja** preprost način za zapomnitev uporabniških nastavitev in preferenc

> 💡 **Razumevanje shranjevanja v brskalniku**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) je kot dajanje trajnega spomina vaši razširitvi. Pomislite, kako je starodavna Aleksandrijska knjižnica shranjevala zvitke - informacije so ostale na voljo, tudi ko so učenjaki odšli in se vrnili.
>
> **Ključne značilnosti:**
> - **Ohranja** podatke tudi po zaprtju brskalnika
> - **Preživi** ponovne zagone računalnika in zrušitve brskalnika
> - **Ponuja** veliko prostora za shranjevanje uporabniških preferenc
> - **Omogoča** takojšen dostop brez zamud omrežja

> **Pomembna opomba**: Vaša razširitev brskalnika ima svoje izolirano lokalno shranjevanje, ki je ločeno od običajnih spletnih strani. To zagotavlja varnost in preprečuje konflikte z drugimi spletnimi mesti.

Shranjene podatke si lahko ogledate tako, da odprete orodja za razvijalce brskalnika (F12), se pomaknete na zavihek **Application** in razširite razdelek **Local Storage**.

![Pano lokalnega shranjevanja](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.sl.png)

> ⚠️ **Varnostni vidik**: V produkcijskih aplikacijah shranjevanje API ključev v LocalStorage predstavlja varnostna tveganja, saj JavaScript lahko dostopa do teh podatkov. Za namene učenja ta pristop deluje, vendar bi morale prave aplikacije za občutljive poverilnice uporabljati varno shranjevanje na strežniški strani.

## Obdelava oddaje obrazca

Zdaj bomo obdelali, kaj se zgodi, ko nekdo odda vaš obrazec. Privzeto brskalniki ob oddaji obrazcev ponovno naložijo stran, vendar bomo prestregli to vedenje, da ustvarimo bolj gladko izkušnjo.

Ta pristop je podoben temu, kako nadzor misije obravnava komunikacijo z vesoljskimi plovili - namesto da bi za vsako sporočilo ponastavili celoten sistem, ohranjajo neprekinjeno delovanje med obdelavo novih informacij.

Ustvarite funkcijo, ki zajame dogodek oddaje obrazca in izlušči uporabnikov vnos:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**V zgornjem primeru smo:**
- **Preprečili** privzeto vedenje oddaje obrazca, ki bi osvežilo stran
- **Izluščili** vrednosti uporabniškega vnosa iz polj za API ključ in regijo
- **Posredovali** podatke obrazca funkciji `setUpUser()` za obdelavo
- **Ohranili** vedenje enostranske aplikacije z izogibanjem osvežitvi strani

✅ Ne pozabite, da vaša polja obrazca HTML vključujejo atribut `required`, zato brskalnik samodejno preveri, da uporabniki pred zagonom te funkcije zagotovijo tako API ključ kot regijo.

## Nastavitev uporabniških preferenc

Funkcija `setUpUser` je odgovorna za shranjevanje uporabniških poverilnic in začetek prvega klica API-ja. To ustvari gladek prehod od nastavitve do prikaza rezultatov.

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

**Korak za korakom, kaj se dogaja:**
- **Shrani** API ključ in ime regije v lokalno shranjevanje za prihodnjo uporabo
- **Prikaže** indikator nalaganja, da obvesti uporabnike, da se podatki pridobivajo
- **Počisti** morebitna prejšnja sporočila o napakah z zaslona
- **Razkrije** gumb za čiščenje, da lahko uporabniki pozneje ponastavijo svoje nastavitve
- **Začne** klic API-ja za pridobivanje resničnih podatkov o porabi ogljika

Ta funkcija ustvarja brezhibno uporabniško izkušnjo z upravljanjem tako trajanja podatkov kot posodobitev uporabniškega vmesnika v eni usklajeni akciji.

## Prikaz podatkov o porabi ogljika

Zdaj bomo povezali vašo razširitev z zunanjimi viri podatkov prek API-jev. To vašo razširitev spremeni iz samostojnega orodja v nekaj, kar lahko dostopa do informacij v realnem času z interneta.

**Razumevanje API-jev**

[API-ji](https://www.webopedia.com/TERM/A/API.html) so način, kako različne aplikacije komunicirajo med seboj. Pomislite nanje kot na telegrafski sistem, ki je povezoval oddaljena mesta v 19. stoletju - operaterji so pošiljali zahteve oddaljenim postajam in prejemali odgovore z zahtevanimi informacijami. Vsakič, ko preverite družbena omrežja, vprašate glasovnega asistenta ali uporabite aplikacijo za dostavo, API-ji omogočajo te izmenjave podatkov.

**Ključni koncepti o REST API-jih:**
- **REST** pomeni 'Representational State Transfer'
- **Uporablja** standardne metode HTTP (GET, POST, PUT, DELETE) za interakcijo s podatki
- **Vrača** podatke v predvidljivih formatih, običajno JSON
- **Ponuja** dosledne URL-je za različne vrste zahtev

✅ [CO2 Signal API](https://www.co2signal.com/), ki ga bomo uporabili, ponuja podatke o ogljični intenzivnosti električnih omrežij po vsem svetu v realnem času. To pomaga uporabnikom razumeti okoljski vpliv njihove porabe električne energije!

> 💡 **Razumevanje asinhronega JavaScripta**: Ključna beseda [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) omogoča vaši kodi, da hkrati obravnava več operacij. Ko zahtevate podatke s strežnika, ne želite, da se vaša celotna razširitev zamrzne - to bi bilo, kot da bi letalski nadzor ustavil vse operacije, medtem ko čaka na odgovor enega letala.
>
> **Ključne prednosti:**
> - **Ohranja** odzivnost razširitve med nalaganjem podatkov
> - **Omogoča**, da druga koda nadaljuje izvajanje med omrežnimi zahtevami
> - **Izboljša** berljivost kode v primerjavi s tradicionalnimi vzorci povratnih klicev
> - **Omogoča** elegantno obravnavo napak pri težavah z omrežjem

Tukaj je kratek video o `async`:

[![Async in Await za upravljanje obljub](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async in Await za upravljanje obljub")

> 🎥 Kliknite na sliko zgoraj za video o async/await.

Ustvarite funkcijo za pridobivanje in prikaz podatkov o porabi ogljika:

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

**Razčlenitev dogajanja:**
- **Uporablja** sodobni `fetch()` API namesto zunanjih knjižnic, kot je Axios, za čistejšo kodo brez odvisnosti
- **Izvede** ustrezno preverjanje napak z `response.ok`, da zgodaj ujame neuspehe API-ja
- **Obravnava** asinhrone operacije z `async/await` za bolj berljiv potek kode
- **Avtenticira** z CO2 Signal API-jem z uporabo glave `auth-token`
- **Razčleni** podatke odgovora JSON in izlušči informacije o ogljični intenzivnosti
- **Posodobi** več UI elementov s formatiranimi okoljskimi podatki
- **Ponuja** uporabniku prijazna sporočila o napakah, ko klici API-ja ne uspejo

**Ključni sodobni koncepti JavaScripta, ki so prikazani:**
- **Predloge nizov** s sintakso `${}` za čisto oblikovanje nizov
- **Obravnava napak** z bloki try/catch za robustne aplikacije
- **Vzorec async/await** za elegantno obravnavo omrežnih zahtev
- **Razčlenjevanje objektov** za izluščenje specifičnih podatkov iz odgovorov API-ja
- **Verižna metoda** za več manipulacij DOM-a

✅ Ta funkcija prikazuje več pomembnih konceptov spletnega razvoja - komunikacijo z zunanjimi strežniki, obravnavo avtentikacije, obdelavo podatkov, posodabljanje vmesnikov in elegantno obravnavo napak. To so temeljne veščine, ki jih profesionalni razvijalci redno uporabljajo.

🎉 **Kaj ste dosegli:** Ustvarili ste razširitev brskalnika, ki:
- **Povezuje** z internetom in pridobiva resnične okoljske podatke
- **Ohranja** uporabniške nastavitve med sejami
- **Obravnava** napake elegantno, namesto da bi se zrušila
- **Ponuja** gladko, profesionalno uporabniško izkušnjo

Preizkusite svoje delo tako, da zaženete `npm run build` in osvežite svojo razširitev v brskalniku. Zdaj imate funkcionalen sledilnik ogljičnega odtisa. Naslednja lekcija bo dodala funkcionalnost dinamičnih ikon za dokončanje razširitve.

---

## Izziv z GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Izboljšajte razširitev brskalnika z dodajanjem izboljšav pri obravnavi napak in funkcij za uporabniško izkušnjo. Ta izziv vam bo pomagal pri vadbi dela z API-ji, lokalnim shranjevanjem in manipulacijo DOM-a z uporabo sodobnih vzorcev JavaScripta.

**Navodilo:** Ustvarite izboljšano različico funkcije displayCarbonUsage, ki vključuje: 1) Mehanizem za ponovni poskus pri neuspelih klicih API-ja z eksponentnim povratnim časom, 2) Validacijo vnosa za kodo regije pred izvedbo klica API-ja, 3) Animacijo nalaganja z indikatorji napredka, 4) Predpomnjenje odgovorov API-ja v lokalnem shranjevanju z časovnimi žigi poteka (predpomnjenje za 30 minut) in 5) Funkcijo za prikaz zgodovinskih podatkov iz prejšnjih klicev API-ja. Prav tako dodajte ustrezne komentarje v slogu TypeScript JSDoc za dokumentiranje vseh parametrov funkcij in vrst vrnjenih vrednosti.

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.

## 🚀 Izziv

Razširite svoje razumevanje API-jev z raziskovanjem bogastva API-jev, ki temeljijo na brskalniku in so na voljo za spletni razvoj. Izberite enega od
V tej lekciji ste se naučili o LocalStorage in API-jih, oboje zelo uporabno za profesionalnega spletnega razvijalca. Ali lahko razmislite, kako ti dve stvari delujeta skupaj? Razmislite, kako bi zasnovali spletno stran, ki bi shranjevala elemente za uporabo z API-jem.

## Naloga

[Posvojite API](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.