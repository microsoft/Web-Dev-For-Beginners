<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-25T00:14:40+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "hr"
}
-->
# Projekt proširenja preglednika, dio 3: Naučite o pozadinskim zadacima i performansama

Jeste li se ikada pitali zašto neka proširenja preglednika djeluju brzo i responzivno, dok druga izgledaju sporo? Tajna leži u onome što se događa iza kulisa. Dok korisnici klikaju po sučelju vašeg proširenja, cijeli svijet pozadinskih procesa tiho upravlja dohvaćanjem podataka, ažuriranjem ikona i sustavnim resursima.

Ovo je naša posljednja lekcija u seriji o proširenjima preglednika, i pobrinut ćemo se da vaš tracker ugljičnog otiska radi glatko. Dodati ćete dinamična ažuriranja ikona i naučiti kako uočiti probleme s performansama prije nego što postanu ozbiljni. To je poput podešavanja trkaćeg automobila - male optimizacije mogu napraviti ogromnu razliku u tome kako sve funkcionira.

Do kraja ove lekcije imat ćete uglađeno proširenje i razumjeti principe performansi koji razlikuju dobre web aplikacije od izvrsnih. Zaronimo u svijet optimizacije preglednika.

## Kviz prije predavanja

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/27)

### Uvod

U našim prethodnim lekcijama izradili ste obrazac, povezali ga s API-jem i bavili se asinkronim dohvaćanjem podataka. Vaše proširenje se lijepo oblikuje.

Sada trebamo dodati završne detalje - poput promjene boje ikone proširenja na temelju podataka o ugljiku. To me podsjeća na način na koji je NASA morala optimizirati svaki sustav na svemirskom brodu Apollo. Nisu si mogli priuštiti nikakvo rasipanje ciklusa ili memorije jer su životi ovisili o performansama. Iako naše proširenje za preglednik nije toliko kritično, isti principi vrijede - učinkovit kod stvara bolje korisničko iskustvo.

## Osnove web performansi

Kada vaš kod radi učinkovito, ljudi to mogu *osjetiti*. Znate onaj trenutak kada se stranica učita trenutno ili animacija teče glatko? To su dobre performanse na djelu.

Performanse nisu samo brzina - radi se o stvaranju web iskustava koja se osjećaju prirodno, umjesto nespretno i frustrirajuće. U ranim danima računalstva, Grace Hopper je poznato držala nanosekundu (komad žice dug oko 30 cm) na svom stolu kako bi pokazala koliko daleko svjetlost putuje u jednoj milijardinki sekunde. To je bio njezin način objašnjavanja zašto svaki mikrosekund u računalstvu ima značaj. Istražimo alate za detekciju koji vam pomažu otkriti što usporava stvari.

> "Performanse web stranice ovise o dvije stvari: koliko brzo se stranica učitava i koliko brzo kod na njoj radi." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Tema kako učiniti vaše web stranice nevjerojatno brzim na svim vrstama uređaja, za sve vrste korisnika, u svim vrstama situacija, nije iznenađujuće opsežna. Evo nekoliko točaka koje treba imati na umu dok gradite standardni web projekt ili proširenje za preglednik.

Prvi korak u optimizaciji vaše stranice je razumijevanje onoga što se zapravo događa "ispod haube". Srećom, vaš preglednik dolazi s moćnim alatima za detekciju ugrađenim.

Da biste otvorili Alate za razvoj u Edgeu, kliknite na tri točke u gornjem desnom kutu, zatim idite na Više alata > Alati za razvoj. Ili koristite prečac na tipkovnici: `Ctrl` + `Shift` + `I` na Windowsu ili `Option` + `Command` + `I` na Macu. Kada ste tamo, kliknite na karticu Performanse - tu ćete provoditi svoje istraživanje.

**Evo vašeg alata za detekciju performansi:**
- **Otvorite** Alate za razvoj (koristit ćete ih stalno kao programer!)
- **Idite** na karticu Performanse - zamislite je kao tracker za kondiciju vaše web aplikacije
- **Pritisnite** gumb za snimanje i promatrajte svoju stranicu u akciji
- **Proučite** rezultate kako biste uočili što usporava stvari

Isprobajmo ovo. Otvorite web stranicu (Microsoft.com dobro funkcionira za ovo) i kliknite gumb 'Snimanje'. Sada osvježite stranicu i promatrajte kako profiler bilježi sve što se događa. Kada zaustavite snimanje, vidjet ćete detaljan pregled kako preglednik 'skriptira', 'renderira' i 'slika' stranicu. Podsjeća me na način na koji kontrola misije prati svaki sustav tijekom lansiranja rakete - dobivate podatke u stvarnom vremenu o tome što se točno događa i kada.

✅ [Microsoftova dokumentacija](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) ima puno više detalja ako želite dublje istražiti.

> Savjet: Očistite predmemoriju preglednika prije testiranja kako biste vidjeli kako vaša stranica radi za posjetitelje koji je prvi put posjećuju - obično je to prilično drugačije od ponovljenih posjeta!

Odaberite elemente vremenske trake profila kako biste se približili događajima koji se događaju dok se vaša stranica učitava.

Dobijte snimku performansi vaše stranice odabirom dijela vremenske trake profila i pregledom sažetka:

Provjerite ploču dnevnika događaja kako biste vidjeli je li neki događaj trajao dulje od 15 ms:

✅ Upoznajte svoj profiler! Otvorite alate za razvoj na ovoj stranici i provjerite postoje li uska grla. Koji je resurs najsporije učitan? Koji najbrže?

## Na što obratiti pažnju prilikom profiliranja

Pokretanje profilera je tek početak - prava vještina je znati što vam ti šareni grafikoni zapravo govore. Ne brinite, brzo ćete se naviknuti na njihovo čitanje. Iskusni programeri naučili su prepoznati znakove upozorenja prije nego što postanu ozbiljni problemi.

Razgovarajmo o uobičajenim sumnjivcima - problemima s performansama koji se često uvuku u web projekte. Kao što je Marie Curie morala pažljivo pratiti razine zračenja u svom laboratoriju, mi moramo paziti na određene obrasce koji ukazuju na probleme u nastajanju. Rano otkrivanje ovih problema uštedjet će vam (i vašim korisnicima) puno frustracija.

**Veličine resursa**: Web stranice postaju sve "teže" tijekom godina, a velik dio te dodatne težine dolazi od slika. Kao da smo počeli trpati sve više i više u naše digitalne kofere.

✅ Pogledajte [Internet Archive](https://httparchive.org/reports/page-weight) kako biste vidjeli kako su se veličine stranica povećavale tijekom vremena - prilično je zanimljivo.

**Evo kako optimizirati svoje resurse:**
- **Komprimirajte** slike! Moderni formati poput WebP-a mogu drastično smanjiti veličinu datoteka
- **Poslužite** odgovarajuću veličinu slike za svaki uređaj - nema potrebe slati ogromne slike za desktop na telefone
- **Minimizirajte** svoj CSS i JavaScript - svaki bajt je važan
- **Koristite** lijeno učitavanje kako bi se slike preuzimale samo kada korisnici zapravo dođu do njih

**Prolazi kroz DOM**: Preglednik mora izgraditi svoj Document Object Model na temelju koda koji napišete, pa je u interesu dobre performanse stranice držati oznake minimalnim, koristeći i stilizirajući samo ono što stranica treba. Na primjer, višak CSS-a povezanog sa stranicom mogao bi se optimizirati; stilovi koji se trebaju koristiti samo na jednoj stranici ne moraju biti uključeni u glavnu stilsku datoteku.

**Ključne strategije za optimizaciju DOM-a:**
- **Minimizirajte** broj HTML elemenata i razine ugniježđenja
- **Uklonite** neiskorištena pravila CSS-a i učinkovito konsolidirajte stilske datoteke
- **Organizirajte** CSS tako da učitava samo ono što je potrebno za svaku stranicu
- **Strukturirajte** HTML semantički za bolje parsiranje preglednika

**JavaScript**: Svaki JavaScript programer trebao bi paziti na 'skripte koje blokiraju renderiranje' koje se moraju učitati prije nego što ostatak DOM-a može biti obrađen i prikazan u pregledniku. Razmislite o korištenju `defer` s vašim inline skriptama (kao što je učinjeno u modulu Terrarium).

**Moderne tehnike optimizacije JavaScripta:**
- **Koristite** atribut `defer` za učitavanje skripti nakon parsiranja DOM-a
- **Primijenite** podjelu koda za učitavanje samo potrebnog JavaScripta
- **Koristite** lijeno učitavanje za funkcionalnosti koje nisu kritične
- **Minimizirajte** korištenje teških biblioteka i okvira kad god je to moguće

✅ Isprobajte neke stranice na [Site Speed Test website](https://www.webpagetest.org/) kako biste saznali više o uobičajenim provjerama koje se provode za određivanje performansi stranice.

Sada kada imate ideju o tome kako preglednik renderira resurse koje mu šaljete, pogledajmo posljednje stvari koje trebate učiniti kako biste dovršili svoje proširenje:

### Kreirajte funkciju za izračun boje

Sada ćemo kreirati funkciju koja pretvara numeričke podatke u značajne boje. Zamislite to kao sustav semafora - zeleno za čistu energiju, crveno za visoku intenzivnost ugljika.

Ova funkcija će uzeti podatke o CO2 iz našeg API-ja i odrediti koja boja najbolje predstavlja utjecaj na okoliš. Slično je tome kako znanstvenici koriste kodiranje bojama u toplinskim kartama za vizualizaciju složenih obrazaca podataka - od temperatura oceana do formiranja zvijezda. Dodajmo ovo u `/src/index.js`, odmah nakon onih `const` varijabli koje smo ranije postavili:

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**Razložimo ovu pametnu malu funkciju:**
- **Postavlja** dva niza - jedan za razine CO2, drugi za boje (zeleno = čisto, smeđe = prljavo!)
- **Pronalaženje** najbližeg podudaranja našoj stvarnoj vrijednosti CO2 pomoću pametnog sortiranja niza
- **Hvatanje** odgovarajuće boje pomoću metode findIndex()
- **Slanje** poruke Chromeovom pozadinskom skriptu s odabranom bojom
- **Korištenje** template literal-a (onih obrnutih navodnika) za čišće formatiranje stringova
- **Organiziranje** svega s const deklaracijama

API `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) je poput živčanog sustava vašeg proširenja - upravlja svim komunikacijama i zadacima iza kulisa:

> "Koristite chrome.runtime API za dohvaćanje pozadinske stranice, vraćanje detalja o manifestu i slušanje i odgovaranje na događaje u životnom ciklusu aplikacije ili proširenja. Također možete koristiti ovaj API za pretvaranje relativne putanje URL-ova u potpuno kvalificirane URL-ove."

**Zašto je Chrome Runtime API tako koristan:**
- **Omogućuje** komunikaciju između različitih dijelova vašeg proširenja
- **Upravlja** pozadinskim radom bez zamrzavanja korisničkog sučelja
- **Upravlja** događajima životnog ciklusa vašeg proširenja
- **Olakšava** razmjenu poruka između skripti

✅ Ako razvijate ovo proširenje za Edge, moglo bi vas iznenaditi da koristite Chrome API. Novije verzije preglednika Edge rade na Chromium pregledničkom motoru, pa možete iskoristiti ove alate.

> **Savjet**: Ako želite profilirati proširenje preglednika, pokrenite alate za razvoj unutar samog proširenja, jer je to vlastita zasebna instanca preglednika. To vam daje pristup metrikama performansi specifičnim za proširenje.

### Postavite zadanu boju ikone

Prije nego što počnemo dohvaćati stvarne podatke, dajmo našem proširenju početnu točku. Nitko ne voli gledati praznu ili pokvarenu ikonu. Počet ćemo sa zelenom bojom kako bi korisnici znali da proširenje radi od trenutka kada ga instaliraju.

U vašoj funkciji `init()`, postavimo tu zadanu zelenu ikonu:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Što ova inicijalizacija postiže:**
- **Postavlja** neutralnu zelenu boju kao zadano stanje
- **Pruža** trenutnu vizualnu povratnu informaciju kada se proširenje učita
- **Uspostavlja** komunikacijski obrazac s pozadinskom skriptom
- **Osigurava** da korisnici vide funkcionalno proširenje prije nego što se podaci učitaju

### Pozovite funkciju, izvršite poziv

Sada povežimo sve zajedno tako da se, kada stignu svježi podaci o CO2, vaša ikona automatski ažurira s odgovarajućom bojom. To je poput povezivanja završnog kruga u elektroničkom uređaju - odjednom svi pojedinačni dijelovi rade kao jedan sustav.

Dodajte ovu liniju odmah nakon što dobijete podatke o CO2 iz API-ja:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Ova integracija postiže:**
- **Povezuje** tok podataka iz API-ja sa sustavom vizualnih indikatora
- **Pokreće** automatska ažuriranja ikona kada stignu novi podaci
- **Osigurava** vizualnu povratnu informaciju u stvarnom vremenu na temelju trenutne intenzivnosti ugljika
- **Održava** odvajanje odgovornosti između dohvaćanja podataka i logike prikaza

I na kraju, u `/dist/background.js`, dodajte slušatelja za ove pozadinske akcijske pozive:

```javascript
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});

// Draw dynamic icon using Canvas API
// Borrowed from energy lollipop extension - nice feature!
function drawIcon(value) {
	// Create an offscreen canvas for better performance
	const canvas = new OffscreenCanvas(200, 200);
	const context = canvas.getContext('2d');

	// Draw a colored circle representing carbon intensity
	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	// Return the image data for the browser icon
	return context.getImageData(50, 50, 100, 100);
}
```

**Evo što ova pozadinska skripta radi:**
- **Sluša** poruke iz vaše glavne skripte (poput recepcionara koji prima pozive)
- **Obrađuje** zahtjeve 'updateIcon' za promjenu ikone na alatnoj traci
- **Stvara** nove ikone u hodu koristeći Canvas API
- **Crtanje** jednostavnog obojenog kruga koji pokazuje trenutnu intenzivnost ugljika
- **Ažurira** vašu alatnu traku preglednika svježom ikonom
- **Koristi** OffscreenCanvas za glatke performanse (bez blokiranja korisničkog sučelja)

✅ Više o Canvas API-ju naučit ćete u [lekcijama o svemirskoj igri](../../6-space-game/2-drawing-to-canvas/README.md).

**Vrijeme je za testiranje vašeg proširenja:**
- **Izgradite** sve s `npm run build`
- **Ponovno učitajte** svoje proširenje u pregledniku (ne zaboravite ovaj korak)
- **Otvorite** svoje proširenje i promatrajte kako se ikona mijenja u boji
- **Provjerite** kako reagira na stvarne podatke o ugljiku iz cijelog svijeta

Sada ćete na prvi pogled znati je li pravo vrijeme za pranje rublja ili biste trebali pričekati čišću energiju. Upravo ste izgradili nešto zaista korisno i naučili o performansama preglednika usput.

## Izazov GitHub Copilot Agent 🚀

Koristite način rada Agent za dovršavanje sljedećeg izazova:

**Opis:** Poboljšajte mogućnosti praćenja performansi proširenja preglednika dodavanjem značajke koja prati i prikazuje vrijeme učitavanja za različite komponente proširenja.

**Zadatak:** Kreirajte sustav za praćenje performansi proširenja preglednika koji mjeri i bilježi vrijeme potrebno za dohvaćanje podataka o CO2 iz API-ja, izračunavanje boja i ažuriranje ikone. Dodajte funkciju pod nazivom `performanceTracker` koja koristi Performance API za mjerenje ovih operacija i prikazuje rezultate u konzoli preglednika s vremenskim oznakama i metrikama trajanja.

Saznajte više o [načinu rada agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.

## 🚀 Izazov
Evo zanimljive detektivske misije: odaberite nekoliko open source web stranica koje postoje već godinama (poput Wikipedije, GitHuba ili Stack Overflowa) i istražite njihovu povijest commitova. Možete li uočiti gdje su napravili poboljšanja u performansama? Koji su se problemi stalno pojavljivali?

**Pristup istraživanju:**
- **Pretražite** poruke commitova za riječi poput "optimizacija," "performanse" ili "brže"
- **Pronađite** obrasce - popravljaju li stalno iste vrste problema?
- **Identificirajte** uobičajene uzroke koji usporavaju web stranice
- **Podijelite** što ste otkrili - drugi developeri mogu učiti iz primjera iz stvarnog svijeta

## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/28)

## Pregled i samostalno učenje

Razmislite o prijavi na [newsletter o performansama](https://perf.email/)

Istražite neke od načina na koje preglednici procjenjuju web performanse pregledavajući kartice performansi u njihovim web alatima. Primjećujete li neke značajne razlike?

## Zadatak

[Analizirajte stranicu za performanse](assignment.md)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.