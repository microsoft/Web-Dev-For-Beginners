<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-25T00:15:26+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "hr"
}
-->
# Projekt proširenja preglednika, dio 2: Pozivanje API-ja, korištenje lokalne pohrane

## Kviz prije predavanja

[Pre-kviz predavanja](https://ff-quizzes.netlify.app/web/quiz/25)

## Uvod

Sjećate li se proširenja za preglednik koje ste počeli izrađivati? Trenutno imate lijep obrazac, ali on je zapravo statičan. Danas ćemo ga oživjeti povezivanjem s pravim podacima i dodavanjem memorije.

Razmislite o računalima za kontrolu misije Apollo - nisu samo prikazivala fiksne informacije. Neprestano su komunicirala sa svemirskim letjelicama, ažurirala podatke o telemetriji i pamtila ključne parametre misije. Takvo dinamično ponašanje gradimo danas. Vaše proširenje će se povezati s internetom, dohvatiti stvarne podatke o okolišu i zapamtiti vaše postavke za sljedeći put.

Integracija API-ja može zvučati složeno, ali zapravo se radi o tome da naučite svoj kod kako komunicirati s drugim uslugama. Bez obzira dohvaćate li podatke o vremenu, feedove društvenih mreža ili informacije o ugljičnom otisku kao što ćemo danas, sve se svodi na uspostavljanje tih digitalnih veza. Također ćemo istražiti kako preglednici mogu pohraniti informacije - slično kao što su knjižnice koristile kartoteke za pamćenje gdje se knjige nalaze.

Na kraju ove lekcije imat ćete proširenje za preglednik koje dohvaća stvarne podatke, pohranjuje korisničke postavke i pruža glatko iskustvo. Krenimo!

✅ Slijedite numerirane segmente u odgovarajućim datotekama kako biste znali gdje postaviti svoj kod.

## Postavljanje elemenata za manipulaciju u proširenju

Prije nego što vaš JavaScript može manipulirati sučeljem, potrebno je referencirati specifične HTML elemente. Zamislite to kao teleskop koji treba biti usmjeren na određene zvijezde - prije nego što je Galileo mogao proučavati Jupiterove mjesece, morao je locirati i fokusirati se na Jupiter.

U vašoj datoteci `index.js`, kreirat ćemo `const` varijable koje hvataju reference na svaki važan element obrasca. To je slično tome kako znanstvenici označavaju svoju opremu - umjesto da svaki put pretražuju cijeli laboratorij, mogu izravno pristupiti onome što im treba.

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

**Što ovaj kod radi:**
- **Hvata** elemente obrasca koristeći `document.querySelector()` s CSS selektorima klase
- **Stvara** reference na polja za unos naziva regije i API ključa
- **Uspostavlja** veze s elementima za prikaz rezultata podataka o ugljičnoj potrošnji
- **Postavlja** pristup elementima korisničkog sučelja poput indikatora učitavanja i poruka o pogreškama
- **Pohranjuje** svaku referencu elementa u `const` varijablu za jednostavno ponovno korištenje u vašem kodu

## Dodavanje slušatelja događaja

Sada ćemo omogućiti vašem proširenju da reagira na korisničke radnje. Slušatelji događaja su način na koji vaš kod prati interakcije korisnika. Zamislite ih kao operatere u ranim telefonskim centralama - slušali su dolazne pozive i povezivali prave krugove kad je netko želio uspostaviti vezu.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Razumijevanje ovih koncepata:**
- **Dodaje** slušatelja za slanje obrasca koji se aktivira kada korisnici pritisnu Enter ili kliknu na slanje
- **Povezuje** slušatelja klikova na gumb za brisanje radi resetiranja obrasca
- **Prosljeđuje** objekt događaja `(e)` funkcijama za dodatnu kontrolu
- **Poziva** funkciju `init()` odmah kako bi postavila početno stanje vašeg proširenja

✅ Obratite pažnju na skraćenu sintaksu streličaste funkcije koja se ovdje koristi. Ovaj moderni pristup JavaScriptu je čišći od tradicionalnih izraza funkcija, ali oba jednako dobro funkcioniraju!

## Izrada funkcija za inicijalizaciju i resetiranje

Izradimo logiku inicijalizacije za vaše proširenje. Funkcija `init()` je poput navigacijskog sustava broda koji provjerava svoje instrumente - određuje trenutno stanje i prilagođava sučelje u skladu s tim. Provjerava je li netko već koristio vaše proširenje i učitava njihove prethodne postavke.

Funkcija `reset()` korisnicima pruža svježi početak - slično kao što znanstvenici resetiraju svoje instrumente između eksperimenata kako bi osigurali čiste podatke.

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

**Razlaganje onoga što se ovdje događa:**
- **Dohvaća** pohranjeni API ključ i regiju iz lokalne pohrane preglednika
- **Provjerava** je li ovo prvi put da korisnik koristi proširenje (nema pohranjenih podataka) ili se radi o povratnom korisniku
- **Prikazuje** obrazac za postavljanje za nove korisnike i skriva ostale elemente sučelja
- **Automatski učitava** spremljene podatke za povratne korisnike i prikazuje opciju za resetiranje
- **Upravlja** stanjem korisničkog sučelja na temelju dostupnih podataka

**Ključni koncepti o lokalnoj pohrani:**
- **Čuva** podatke između sesija preglednika (za razliku od sesijske pohrane)
- **Pohranjuje** podatke kao parove ključ-vrijednost koristeći `getItem()` i `setItem()`
- **Vraća** `null` kada ne postoje podaci za određeni ključ
- **Pruža** jednostavan način za pamćenje korisničkih preferencija i postavki

> 💡 **Razumijevanje pohrane u pregledniku**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) je poput davanja vašem proširenju trajne memorije. Zamislite kako je drevna Aleksandrijska knjižnica pohranjivala svitke - informacije su ostale dostupne čak i kad su se učenjaci vraćali.
>
> **Ključne karakteristike:**
> - **Čuva** podatke čak i nakon zatvaranja preglednika
> - **Preživljava** ponovno pokretanje računala i padove preglednika
> - **Pruža** značajan prostor za pohranu korisničkih preferencija
> - **Omogućuje** trenutni pristup bez kašnjenja mreže

> **Važna napomena**: Vaše proširenje za preglednik ima vlastitu izoliranu lokalnu pohranu koja je odvojena od uobičajenih web stranica. To pruža sigurnost i sprječava sukobe s drugim web stranicama.

Svoje pohranjene podatke možete pregledati otvaranjem Alata za razvoj preglednika (F12), navigacijom na karticu **Application** i proširivanjem odjeljka **Local Storage**.

![Local storage pane](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.hr.png)

> ⚠️ **Sigurnosno razmatranje**: U produkcijskim aplikacijama, pohrana API ključeva u LocalStorage predstavlja sigurnosne rizike jer JavaScript može pristupiti tim podacima. Za potrebe učenja, ovaj pristup je u redu, ali stvarne aplikacije trebaju koristiti sigurnu pohranu na strani servera za osjetljive podatke.

## Obrada slanja obrasca

Sada ćemo obraditi što se događa kada netko pošalje vaš obrazac. Po defaultu, preglednici ponovno učitavaju stranicu kada se obrasci pošalju, ali mi ćemo presresti ovo ponašanje kako bismo stvorili glatko iskustvo.

Ovaj pristup odražava način na koji kontrola misije obrađuje komunikaciju sa svemirskim letjelicama - umjesto da resetira cijeli sustav za svaku transmisiju, održavaju kontinuirani rad dok obrađuju nove informacije.

Kreirajte funkciju koja hvata događaj slanja obrasca i izvlači korisnički unos:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**U gore navedenom, mi smo:**
- **Spriječili** defaultno ponašanje slanja obrasca koje bi osvježilo stranicu
- **Izvukli** vrijednosti korisničkog unosa iz polja za API ključ i regiju
- **Proslijedili** podatke obrasca funkciji `setUpUser()` za obradu
- **Održali** ponašanje aplikacije na jednoj stranici izbjegavajući ponovno učitavanje stranice

✅ Zapamtite da vaša polja obrasca HTML-a uključuju atribut `required`, tako da preglednik automatski provjerava da korisnici unesu i API ključ i regiju prije nego što ova funkcija bude pokrenuta.

## Postavljanje korisničkih preferencija

Funkcija `setUpUser` odgovorna je za spremanje korisničkih vjerodajnica i pokretanje prvog API poziva. Ovo stvara glatki prijelaz od postavljanja do prikazivanja rezultata.

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

**Korak po korak, evo što se događa:**
- **Spremanje** API ključa i naziva regije u lokalnu pohranu za buduću upotrebu
- **Prikazivanje** indikatora učitavanja kako bi se korisnici obavijestili da se podaci dohvaćaju
- **Brisanje** svih prethodnih poruka o pogreškama s prikaza
- **Otkrivanje** gumba za brisanje kako bi korisnici kasnije mogli resetirati svoje postavke
- **Pokretanje** API poziva za dohvaćanje stvarnih podataka o ugljičnoj potrošnji

Ova funkcija stvara besprijekorno korisničko iskustvo upravljanjem i pohranom podataka i ažuriranjem korisničkog sučelja u jednoj koordiniranoj akciji.

## Prikaz podataka o ugljičnoj potrošnji

Sada ćemo povezati vaše proširenje s vanjskim izvorima podataka putem API-ja. Ovo transformira vaše proširenje iz samostalnog alata u nešto što može pristupiti informacijama u stvarnom vremenu s interneta.

**Razumijevanje API-ja**

[API-ji](https://www.webopedia.com/TERM/A/API.html) su način na koji različite aplikacije međusobno komuniciraju. Zamislite ih kao telegrafski sustav koji je povezivao udaljene gradove u 19. stoljeću - operateri su slali zahtjeve udaljenim stanicama i primali odgovore s traženim informacijama. Svaki put kad provjeravate društvene mreže, postavljate pitanje glasovnom asistentu ili koristite aplikaciju za dostavu, API-ji omogućuju te razmjene podataka.

**Ključni koncepti o REST API-jima:**
- **REST** označava 'Representational State Transfer'
- **Koristi** standardne HTTP metode (GET, POST, PUT, DELETE) za interakciju s podacima
- **Vraća** podatke u predvidljivim formatima, obično JSON
- **Pruža** dosljedne URL-based krajnje točke za različite vrste zahtjeva

✅ [CO2 Signal API](https://www.co2signal.com/) koji ćemo koristiti pruža podatke o ugljičnoj intenzivnosti električnih mreža širom svijeta u stvarnom vremenu. Ovo pomaže korisnicima razumjeti utjecaj njihove potrošnje električne energije na okoliš!

> 💡 **Razumijevanje asinkronog JavaScripta**: Ključna riječ [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) omogućuje vašem kodu da istovremeno obrađuje više operacija. Kada zatražite podatke od servera, ne želite da cijelo proširenje zamrzne - to bi bilo kao da kontrola zračnog prometa zaustavi sve operacije dok čeka odgovor jednog aviona.
>
> **Ključne prednosti:**
> - **Održava** responzivnost proširenja dok se podaci učitavaju
> - **Omogućuje** nastavak izvršavanja drugog koda tijekom mrežnih zahtjeva
> - **Poboljšava** čitljivost koda u usporedbi s tradicionalnim obrascima povratnih poziva
> - **Omogućuje** graciozno rukovanje pogreškama u mreži

Evo kratkog videa o `async`:

[![Async i Await za upravljanje obećanjima](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async i Await za upravljanje obećanjima")

> 🎥 Kliknite na sliku iznad za video o async/await.

Kreirajte funkciju za dohvaćanje i prikaz podataka o ugljičnoj potrošnji:

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

**Razlaganje onoga što se ovdje događa:**
- **Koristi** moderni `fetch()` API umjesto vanjskih biblioteka poput Axiosa za čišći kod bez ovisnosti
- **Provodi** pravilnu provjeru pogrešaka s `response.ok` kako bi se rano otkrili neuspjesi API-ja
- **Rukuje** asinkronim operacijama s `async/await` za čitljiviji tijek koda
- **Autentificira** se s CO2 Signal API-jem koristeći zaglavlje `auth-token`
- **Parsira** JSON podatke odgovora i izvlači informacije o ugljičnoj intenzivnosti
- **Ažurira** više elemenata korisničkog sučelja formatiranim podacima o okolišu
- **Pruža** korisnički prihvatljive poruke o pogreškama kada API pozivi ne uspiju

**Ključni moderni JavaScript koncepti demonstrirani:**
- **Predlošci literala** sa sintaksom `${}` za čisto formatiranje stringova
- **Rukovanje pogreškama** s try/catch blokovima za robusne aplikacije
- **Async/await** obrazac za graciozno rukovanje mrežnim zahtjevima
- **Destrukturiranje objekata** za izdvajanje specifičnih podataka iz odgovora API-ja
- **Lančanje metoda** za višestruke manipulacije DOM-om

✅ Ova funkcija demonstrira nekoliko važnih koncepata web razvoja - komunikaciju s vanjskim serverima, rukovanje autentifikacijom, obradu podataka, ažuriranje sučelja i graciozno rukovanje pogreškama. Ovo su temeljne vještine koje profesionalni programeri redovito koriste.

🎉 **Što ste postigli:** Kreirali ste proširenje za preglednik koje:
- **Povezuje** se s internetom i dohvaća stvarne podatke o okolišu
- **Čuva** korisničke postavke između sesija
- **Rukuje** pogreškama graciozno umjesto da se ruši
- **Pruža** glatko, profesionalno korisničko iskustvo

Testirajte svoj rad pokretanjem `npm run build` i osvježavanjem vašeg proširenja u pregledniku. Sada imate funkcionalni alat za praćenje ugljičnog otiska. Sljedeća lekcija će dodati funkcionalnost dinamičnih ikona kako bi se proširenje dovršilo.

---

## Izazov GitHub Copilot Agent 🚀

Koristite Agent način rada za dovršavanje sljedećeg izazova:

**Opis:** Poboljšajte proširenje za preglednik dodavanjem poboljšanja u rukovanju pogreškama i značajki korisničkog iskustva. Ovaj izazov pomoći će vam da vježbate rad s API-jima, lokalnom pohranom i manipulacijom DOM-a koristeći moderne JavaScript obrasce.

**Zadatak:** Kreirajte poboljšanu verziju funkcije displayCarbonUsage koja uključuje: 1) Mehanizam ponovnog pokušaja za neuspjele API pozive s eksponencijalnim odgodama, 2) Validaciju unosa za kod regije prije nego što se izvrši API poziv, 3) Animaciju učitavanja s indikatorima napretka, 4) Predmemoriranje odgovora API-ja u lokalnoj pohrani s vremenskim oznakama isteka (predmemorija na 30 minuta), i 5) Značajku za prikaz povijesnih podataka iz prethodnih API poziva. Također dodajte odgovarajuće JSDoc komentare u stilu TypeScript-a za dokumentiranje svih parametara funkcije i tipova povratnih vrijednosti.

Saznajte više o [Agent načinu rada](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.

## 🚀 Izazov

Proširite svoje razumijevanje API-ja istraživanjem bogatstva API-ja preglednika dostupnih za web razvoj. Odaberite jedan od ovih API-ja preglednika i izradite malu demonstraciju:

- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - Dohvatite trenutnu lokaciju korisnika
- [Notification API](https://developer.mozilla.org/docs/Web/API/Notifications_API) - Pošaljite obavijesti
U ovoj lekciji ste naučili o LocalStorage i API-ima, oba vrlo korisna za profesionalnog web programera. Možete li razmisliti o tome kako ove dvije stvari rade zajedno? Razmislite o tome kako biste osmislili web stranicu koja bi pohranjivala stavke koje će koristiti API.

## Zadatak

[Usvojite API](assignment.md)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.