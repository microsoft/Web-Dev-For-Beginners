<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-24T22:20:08+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "ro"
}
-->
# Proiect de Extensie pentru Browser Partea 2: Apelarea unui API, utilizarea stocării locale

## Chestionar înainte de curs

[Chestionar înainte de curs](https://ff-quizzes.netlify.app/web/quiz/25)

## Introducere

Îți amintești extensia de browser pe care ai început să o construiești? În acest moment ai un formular arătos, dar este practic static. Astăzi îi vom da viață conectând-o la date reale și oferindu-i memorie.

Gândește-te la computerele de control ale misiunii Apollo - ele nu afișau doar informații fixe. Comunicau constant cu nava spațială, actualizau datele de telemetrie și rețineau parametrii critici ai misiunii. Acesta este tipul de comportament dinamic pe care îl construim astăzi. Extensia ta va accesa internetul, va prelua date reale despre mediu și își va aminti setările tale pentru data viitoare.

Integrarea API-urilor poate părea complexă, dar este, de fapt, doar o modalitate de a învăța codul să comunice cu alte servicii. Indiferent dacă preiei date despre vreme, fluxuri de social media sau informații despre amprenta de carbon, așa cum vom face astăzi, totul se rezumă la stabilirea acestor conexiuni digitale. Vom explora, de asemenea, cum browserele pot păstra informații - similar cu modul în care bibliotecile au folosit cataloage de fișe pentru a reține unde se află cărțile.

La sfârșitul acestei lecții, vei avea o extensie de browser care preia date reale, stochează preferințele utilizatorului și oferă o experiență fluidă. Să începem!

✅ Urmează segmentele numerotate din fișierele corespunzătoare pentru a ști unde să plasezi codul tău.

## Configurează elementele pentru manipulare în extensie

Înainte ca JavaScript-ul tău să poată manipula interfața, are nevoie de referințe la elemente HTML specifice. Gândește-te la asta ca la un telescop care trebuie să fie îndreptat către stele particulare - înainte ca Galileo să poată studia lunile lui Jupiter, trebuia să localizeze și să se concentreze pe Jupiter însuși.

În fișierul tău `index.js`, vom crea variabile `const` care capturează referințe la fiecare element important al formularului. Este similar cu modul în care oamenii de știință își etichetează echipamentele - în loc să caute prin întregul laborator de fiecare dată, pot accesa direct ceea ce au nevoie.

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

**Ce face acest cod:**
- **Capturează** elementele formularului folosind `document.querySelector()` cu selectori CSS
- **Creează** referințe la câmpurile de introducere pentru numele regiunii și cheia API
- **Stabilește** conexiuni cu elementele de afișare a rezultatelor pentru datele despre utilizarea carbonului
- **Configurează** accesul la elementele UI, cum ar fi indicatorii de încărcare și mesajele de eroare
- **Stochează** fiecare referință a elementului într-o variabilă `const` pentru reutilizare ușoară în codul tău

## Adaugă ascultători de evenimente

Acum vom face ca extensia ta să răspundă la acțiunile utilizatorului. Ascultătorii de evenimente sunt modalitatea prin care codul tău monitorizează interacțiunile utilizatorului. Gândește-te la ei ca la operatorii din schimburile telefonice timpurii - ascultau apelurile primite și conectau circuitele corecte atunci când cineva dorea să facă o conexiune.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Înțelegerea acestor concepte:**
- **Atașează** un ascultător de trimitere la formular, care se declanșează atunci când utilizatorii apasă Enter sau fac clic pe butonul de trimitere
- **Conectează** un ascultător de clic la butonul de ștergere pentru resetarea formularului
- **Transmite** obiectul eveniment `(e)` funcțiilor de gestionare pentru control suplimentar
- **Apelează** funcția `init()` imediat pentru a configura starea inițială a extensiei tale

✅ Observă sintaxa prescurtată a funcției săgeată utilizată aici. Această abordare modernă a JavaScript-ului este mai curată decât expresiile tradiționale ale funcțiilor, dar ambele funcționează la fel de bine!

## Construiește funcțiile de inițializare și resetare

Să creăm logica de inițializare pentru extensia ta. Funcția `init()` este ca sistemul de navigație al unei nave care își verifică instrumentele - determină starea curentă și ajustează interfața în consecință. Verifică dacă cineva a folosit extensia ta înainte și încarcă setările anterioare.

Funcția `reset()` oferă utilizatorilor un nou început - similar cu modul în care oamenii de știință își resetează instrumentele între experimente pentru a asigura date curate.

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

**Descompunerea a ceea ce se întâmplă aici:**
- **Recuperează** cheia API și regiunea stocate din stocarea locală a browserului
- **Verifică** dacă este un utilizator pentru prima dată (fără credențiale stocate) sau un utilizator care revine
- **Afișează** formularul de configurare pentru utilizatorii noi și ascunde alte elemente ale interfeței
- **Încarcă** automat datele salvate pentru utilizatorii care revin și afișează opțiunea de resetare
- **Gestionează** starea interfeței utilizatorului pe baza datelor disponibile

**Concepte cheie despre stocarea locală:**
- **Persistă** datele între sesiunile browserului (spre deosebire de stocarea sesiunii)
- **Stochează** datele ca perechi cheie-valoare folosind `getItem()` și `setItem()`
- **Returnează** `null` atunci când nu există date pentru o anumită cheie
- **Oferă** o modalitate simplă de a reține preferințele și setările utilizatorului

> 💡 **Înțelegerea stocării în browser**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) este ca și cum ai oferi extensiei tale o memorie persistentă. Gândește-te la modul în care vechea Bibliotecă din Alexandria stoca suluri - informațiile rămâneau disponibile chiar și atunci când savanții plecau și se întorceau.
>
> **Caracteristici cheie:**
> - **Persistă** datele chiar și după ce închizi browserul
> - **Supraviețuiește** restartării computerului și blocării browserului
> - **Oferă** spațiu de stocare substanțial pentru preferințele utilizatorului
> - **Asigură** acces instantaneu fără întârzieri de rețea

> **Notă importantă**: Extensia ta de browser are propria stocare locală izolată, separată de paginile web obișnuite. Acest lucru oferă securitate și previne conflictele cu alte site-uri web.

Poți vizualiza datele stocate deschizând Instrumentele pentru Dezvoltatori ale browserului (F12), navigând la fila **Application** și extinzând secțiunea **Local Storage**.

![Panoul de stocare locală](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.ro.png)

> ⚠️ **Considerație de securitate**: În aplicațiile de producție, stocarea cheilor API în LocalStorage prezintă riscuri de securitate, deoarece JavaScript poate accesa aceste date. În scopuri educative, această abordare este potrivită, dar aplicațiile reale ar trebui să utilizeze stocarea securizată pe server pentru credențiale sensibile.

## Gestionarea trimiterii formularului

Acum vom gestiona ce se întâmplă atunci când cineva trimite formularul tău. În mod implicit, browserele reîncarcă pagina atunci când formularele sunt trimise, dar vom intercepta acest comportament pentru a crea o experiență mai fluidă.

Această abordare reflectă modul în care centrul de control al misiunii gestionează comunicațiile cu navele spațiale - în loc să reseteze întregul sistem pentru fiecare transmisie, mențin o funcționare continuă în timp ce procesează informații noi.

Creează o funcție care să captureze evenimentul de trimitere a formularului și să extragă datele introduse de utilizator:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**În cele de mai sus, am:**
- **Prevenit** comportamentul implicit de trimitere a formularului care ar reîmprospăta pagina
- **Extras** valorile introduse de utilizator din câmpurile pentru cheia API și regiune
- **Transmis** datele formularului funcției `setUpUser()` pentru procesare
- **Menținut** comportamentul aplicației pe o singură pagină, evitând reîncărcările paginii

✅ Amintește-ți că câmpurile formularului HTML includ atributul `required`, astfel încât browserul validează automat că utilizatorii furnizează atât cheia API, cât și regiunea înainte ca această funcție să ruleze.

## Configurarea preferințelor utilizatorului

Funcția `setUpUser` este responsabilă pentru salvarea credențialelor utilizatorului și inițierea primului apel API. Aceasta creează o tranziție lină de la configurare la afișarea rezultatelor.

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

**Pas cu pas, iată ce se întâmplă:**
- **Salvează** cheia API și numele regiunii în stocarea locală pentru utilizare ulterioară
- **Afișează** un indicator de încărcare pentru a informa utilizatorii că datele sunt preluate
- **Șterge** orice mesaje de eroare anterioare de pe ecran
- **Dezvăluie** butonul de ștergere pentru ca utilizatorii să își poată reseta setările mai târziu
- **Inițiază** apelul API pentru a prelua date reale despre utilizarea carbonului

Această funcție creează o experiență fluidă pentru utilizator, gestionând atât persistența datelor, cât și actualizările interfeței utilizatorului într-o acțiune coordonată.

## Afișarea datelor despre utilizarea carbonului

Acum vom conecta extensia ta la surse externe de date prin API-uri. Acest lucru transformă extensia ta dintr-un instrument independent într-unul care poate accesa informații în timp real de pe internet.

**Înțelegerea API-urilor**

[API-urile](https://www.webopedia.com/TERM/A/API.html) sunt modul în care diferite aplicații comunică între ele. Gândește-te la ele ca la sistemul de telegraf care conecta orașele îndepărtate în secolul al XIX-lea - operatorii trimiteau cereri către stații îndepărtate și primeau răspunsuri cu informațiile solicitate. De fiecare dată când verifici rețelele sociale, întrebi un asistent vocal ceva sau folosești o aplicație de livrare, API-urile facilitează aceste schimburi de date.

**Concepte cheie despre API-urile REST:**
- **REST** înseamnă 'Transfer de Stare Reprezentativă'
- **Folosește** metode HTTP standard (GET, POST, PUT, DELETE) pentru a interacționa cu datele
- **Returnează** date în formate previzibile, de obicei JSON
- **Oferă** puncte de acces consistente, bazate pe URL, pentru diferite tipuri de cereri

✅ API-ul [CO2 Signal](https://www.co2signal.com/) pe care îl vom folosi oferă date în timp real despre intensitatea carbonului din rețelele electrice din întreaga lume. Acest lucru ajută utilizatorii să înțeleagă impactul asupra mediului al consumului lor de energie electrică!

> 💡 **Înțelegerea JavaScript-ului asincron**: Cuvântul cheie [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) permite codului tău să gestioneze mai multe operațiuni simultan. Când soliciți date de la un server, nu vrei ca întreaga extensie să se blocheze - ar fi ca și cum controlul traficului aerian ar opri toate operațiunile în timp ce așteaptă răspunsul unui avion.
>
> **Beneficii cheie:**
> - **Menține** extensia receptivă în timp ce datele se încarcă
> - **Permite** alt cod să continue să ruleze în timpul cererilor de rețea
> - **Îmbunătățește** lizibilitatea codului comparativ cu modelele tradiționale de callback
> - **Permite** gestionarea grațioasă a erorilor pentru problemele de rețea

Iată un videoclip rapid despre `async`:

[![Async și Await pentru gestionarea promisiunilor](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async și Await pentru gestionarea promisiunilor")

> 🎥 Fă clic pe imaginea de mai sus pentru un videoclip despre async/await.

Creează funcția pentru a prelua și afișa datele despre utilizarea carbonului:

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

**Descompunerea a ceea ce se întâmplă aici:**
- **Folosește** API-ul modern `fetch()` în loc de biblioteci externe precum Axios pentru un cod mai curat, fără dependențe
- **Implementează** verificarea corectă a erorilor cu `response.ok` pentru a detecta eșecurile API devreme
- **Gestionează** operațiunile asincrone cu `async/await` pentru un flux de cod mai lizibil
- **Autentifică** cu API-ul CO2 Signal folosind antetul `auth-token`
- **Parcurge** datele JSON din răspuns și extrage informațiile despre intensitatea carbonului
- **Actualizează** mai multe elemente UI cu datele de mediu formatate
- **Oferă** mesaje de eroare prietenoase utilizatorului atunci când apelurile API eșuează

**Concepte moderne JavaScript demonstrate:**
- **Literaluri de șir** cu sintaxa `${}` pentru formatarea curată a șirurilor
- **Gestionarea erorilor** cu blocuri try/catch pentru aplicații robuste
- **Modelul async/await** pentru gestionarea grațioasă a cererilor de rețea
- **Destructurarea obiectelor** pentru a extrage date specifice din răspunsurile API
- **Lanțuri de metode** pentru multiple manipulări ale DOM-ului

✅ Această funcție demonstrează mai multe concepte importante de dezvoltare web - comunicarea cu servere externe, gestionarea autentificării, procesarea datelor, actualizarea interfețelor și gestionarea grațioasă a erorilor. Acestea sunt abilități fundamentale pe care dezvoltatorii profesioniști le folosesc în mod regulat.

🎉 **Ce ai realizat:** Ai creat o extensie de browser care:
- **Se conectează** la internet și preia date reale despre mediu
- **Persistă** setările utilizatorului între sesiuni
- **Gestionează** erorile grațios, în loc să se blocheze
- **Oferă** o experiență fluidă și profesională utilizatorului

Testează munca ta rulând `npm run build` și reîmprospătând extensia în browser. Acum ai un tracker funcțional pentru amprenta de carbon. Lecția următoare va adăuga funcționalitatea dinamică a pictogramei pentru a completa extensia.

---

## Provocarea Agentului GitHub Copilot 🚀

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Îmbunătățește extensia de browser prin adăugarea de îmbunătățiri în gestionarea erorilor și funcții pentru experiența utilizatorului. Această provocare te va ajuta să exersezi lucrul cu API-uri, stocarea locală și manipularea DOM-ului folosind modele moderne JavaScript.

**Cerere:** Creează o versiune îmbunătățită a funcției displayCarbonUsage care include: 1) Un mecanism de retry pentru apelurile API eșuate cu backoff exponențial, 2) Validarea introducerii codului regiunii înainte de a face apelul API, 3) O animație de încărcare cu indicatori de progres, 4) Cache-ul răspunsurilor API în localStorage cu timestamp-uri de expirare (cache pentru 30 de minute), și 5) O funcție pentru a afișa date istorice din apelurile API anterioare. Adaugă, de asemenea, comentarii JSDoc în stil TypeScript pentru a documenta toți parametrii funcției și tipurile de returnare.

Află mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## 🚀 Provocare

Extinde-ți înțelegerea
Ai învățat despre LocalStorage și API-uri în această lecție, ambele fiind foarte utile pentru un dezvoltator web profesionist. Te poți gândi cum funcționează aceste două lucruri împreună? Gândește-te cum ai putea structura un site web care să stocheze elemente ce vor fi utilizate de un API.

## Temă

[Adoptă un API](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.