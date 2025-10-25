<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-24T22:19:25+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "ro"
}
-->
# Proiect Extensie Browser Partea 3: Învață despre Sarcini de Fundal și Performanță

Te-ai întrebat vreodată ce face ca unele extensii de browser să fie rapide și receptive, în timp ce altele par lente? Secretul constă în ceea ce se întâmplă în culise. În timp ce utilizatorii navighează prin interfața extensiei tale, există o lume întreagă de procese de fundal care gestionează în tăcere preluarea datelor, actualizările de pictograme și resursele sistemului.

Aceasta este ultima noastră lecție din seria de extensii de browser, și vom face ca tracker-ul tău de amprentă de carbon să funcționeze fără probleme. Vei adăuga actualizări dinamice ale pictogramelor și vei învăța cum să identifici problemele de performanță înainte ca acestea să devină o problemă. Este ca și cum ai regla o mașină de curse - mici optimizări pot face o diferență uriașă în modul în care funcționează totul.

Până la final, vei avea o extensie finisată și vei înțelege principiile de performanță care separă aplicațiile web bune de cele excelente. Hai să explorăm lumea optimizării browserului.

## Chestionar Pre-Lecție

[Chestionar pre-lecție](https://ff-quizzes.netlify.app/web/quiz/27)

### Introducere

În lecțiile anterioare, ai construit un formular, l-ai conectat la un API și ai abordat preluarea asincronă a datelor. Extensia ta prinde contur frumos.

Acum trebuie să adăugăm ultimele retușuri - cum ar fi să facem ca pictograma extensiei să-și schimbe culoarea în funcție de datele despre carbon. Asta îmi amintește de cum NASA a trebuit să optimizeze fiecare sistem de pe nava spațială Apollo. Nu își puteau permite niciun ciclu sau memorie irosită, deoarece viețile depindeau de performanță. Deși extensia noastră de browser nu este chiar atât de critică, principiile sunt aceleași - codul eficient creează experiențe mai bune pentru utilizatori.

## Bazele Performanței Web

Când codul tău rulează eficient, oamenii pot *simți* diferența. Știi acel moment când o pagină se încarcă instantaneu sau o animație curge lin? Aceasta este performanța bună în acțiune.

Performanța nu este doar despre viteză - este despre crearea unor experiențe web care se simt naturale, în loc de greoaie și frustrante. În primele zile ale calculatoarelor, Grace Hopper obișnuia să țină un nanosecund (o bucată de fir de aproximativ 30 cm) pe biroul ei pentru a arăta cât de departe călătorește lumina într-o miliardime de secundă. Era modul ei de a explica de ce fiecare microsecundă contează în calculatoare. Hai să explorăm instrumentele de detectare care te ajută să descoperi ce încetinește lucrurile.

> "Performanța site-ului web se referă la două lucruri: cât de repede se încarcă pagina și cât de repede rulează codul de pe ea." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Subiectul despre cum să faci site-urile tale extrem de rapide pe toate tipurile de dispozitive, pentru toți utilizatorii, în toate situațiile, este, fără surpriză, vast. Iată câteva puncte de reținut pe măsură ce construiești fie un proiect web standard, fie o extensie de browser.

Primul pas în optimizarea site-ului tău este să înțelegi ce se întâmplă de fapt în culise. Din fericire, browserul tău vine cu instrumente puternice de detectare integrate.

Pentru a deschide Instrumentele pentru Dezvoltatori în Edge, dă clic pe cele trei puncte din colțul din dreapta sus, apoi mergi la Mai Multe Instrumente > Instrumente pentru Dezvoltatori. Sau folosește scurtătura de tastatură: `Ctrl` + `Shift` + `I` pe Windows sau `Option` + `Command` + `I` pe Mac. Odată ajuns acolo, dă clic pe fila Performanță - aici vei face investigația.

**Iată trusa ta de detectiv pentru performanță:**
- **Deschide** Instrumentele pentru Dezvoltatori (le vei folosi constant ca dezvoltator!)
- **Accesează** fila Performanță - gândește-te la ea ca la un tracker de fitness pentru aplicația ta web
- **Apasă** butonul de Înregistrare și urmărește acțiunea paginii tale
- **Studiază** rezultatele pentru a identifica ce încetinește lucrurile

Hai să încercăm asta. Deschide un site web (Microsoft.com funcționează bine pentru asta) și apasă butonul 'Înregistrare'. Acum reîncarcă pagina și urmărește cum profiler-ul capturează tot ce se întâmplă. Când oprești înregistrarea, vei vedea o defalcare detaliată a modului în care browserul 'scrie', 'redă' și 'pictează' site-ul. Îmi amintește de cum controlul misiunii monitorizează fiecare sistem în timpul unei lansări de rachetă - primești date în timp real despre exact ce se întâmplă și când.

![Profiler Edge](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.ro.png)

✅ Documentația [Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) are multe detalii suplimentare dacă vrei să aprofundezi.

> Sfat util: Golește memoria cache a browserului înainte de testare pentru a vedea cum se comportă site-ul pentru vizitatorii pentru prima dată - de obicei este destul de diferit față de vizitele repetate!

Selectează elemente din cronologia profilului pentru a mări evenimentele care se întâmplă în timp ce pagina ta se încarcă.

Obține o imagine de ansamblu a performanței paginii tale selectând o parte din cronologia profilului și uitându-te la panoul de rezumat:

![Snapshot Profiler Edge](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.ro.png)

Verifică panoul Jurnal de Evenimente pentru a vedea dacă vreun eveniment a durat mai mult de 15 ms:

![Jurnal Evenimente Edge](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.ro.png)

✅ Familiarizează-te cu profiler-ul tău! Deschide instrumentele pentru dezvoltatori pe acest site și vezi dacă există blocaje. Care este cel mai lent activ care se încarcă? Cel mai rapid?

## Ce să cauți când profilezi

Rularea profiler-ului este doar începutul - adevărata abilitate constă în a ști ce îți spun de fapt acele grafice colorate. Nu-ți face griji, vei învăța să le citești. Dezvoltatorii experimentați au învățat să identifice semnele de avertizare înainte ca acestea să devină probleme majore.

Să vorbim despre suspecții obișnuiți - problemele de performanță care tind să se strecoare în proiectele web. Așa cum Marie Curie trebuia să monitorizeze cu atenție nivelurile de radiație în laboratorul ei, trebuie să fim atenți la anumite modele care indică probleme în curs de dezvoltare. Identificarea acestora din timp te va salva pe tine (și pe utilizatorii tăi) de multă frustrare.

**Dimensiunile activelor**: Site-urile web au devenit din ce în ce mai "grele" de-a lungul anilor, iar o mare parte din această greutate suplimentară provine de la imagini. Este ca și cum am fi îndesat din ce în ce mai multe lucruri în valizele noastre digitale.

✅ Verifică [Internet Archive](https://httparchive.org/reports/page-weight) pentru a vedea cum au crescut dimensiunile paginilor de-a lungul timpului - este destul de revelator.

**Iată cum să îți optimizezi activele:**
- **Comprimă** imaginile! Formatele moderne precum WebP pot reduce dramatic dimensiunile fișierelor
- **Servește** dimensiunea potrivită a imaginii pentru fiecare dispozitiv - nu este nevoie să trimiți imagini mari de desktop către telefoane
- **Minimizează** CSS-ul și JavaScript-ul - fiecare byte contează
- **Folosește** încărcarea întârziată astfel încât imaginile să se descarce doar când utilizatorii derulează la ele

**Traversări DOM**: Browserul trebuie să construiască Modelul Obiectului Documentului pe baza codului pe care îl scrii, așa că este în interesul unei performanțe bune a paginii să păstrezi etichetele la minimum, folosind și stilizând doar ceea ce este necesar pentru pagină. În acest sens, CSS-ul excesiv asociat cu o pagină ar putea fi optimizat; stilurile care trebuie utilizate doar pe o pagină nu trebuie incluse în foaia de stil principală, de exemplu.

**Strategii cheie pentru optimizarea DOM:**
- **Minimizează** numărul de elemente HTML și niveluri de imbricare
- **Elimină** regulile CSS neutilizate și consolidează eficient foile de stil
- **Organizează** CSS-ul pentru a încărca doar ceea ce este necesar pentru fiecare pagină
- **Structurează** HTML-ul semantic pentru o mai bună analiză de către browser

**JavaScript**: Fiecare dezvoltator de JavaScript ar trebui să fie atent la scripturile care blochează redarea și care trebuie încărcate înainte ca restul DOM-ului să poată fi traversat și afișat în browser. Ia în considerare utilizarea `defer` cu scripturile tale inline (așa cum se face în modulul Terrarium).

**Tehnici moderne de optimizare JavaScript:**
- **Folosește** atributul `defer` pentru a încărca scripturile după analiza DOM-ului
- **Implementează** divizarea codului pentru a încărca doar JavaScript-ul necesar
- **Aplică** încărcarea întârziată pentru funcționalitățile non-critice
- **Minimizează** utilizarea bibliotecilor și cadrelor grele, dacă este posibil

✅ Testează câteva site-uri pe un [site de testare a vitezei](https://www.webpagetest.org/) pentru a afla mai multe despre verificările comune care se fac pentru a determina performanța site-ului.

Acum că ai o idee despre cum browserul redă activele pe care le trimiți, să vedem ultimele lucruri pe care trebuie să le faci pentru a finaliza extensia ta:

### Creează o funcție pentru calcularea culorii

Acum vom crea o funcție care transformă datele numerice în culori semnificative. Gândește-te la ea ca la un sistem de semafor - verde pentru energie curată, roșu pentru intensitate mare de carbon.

Această funcție va lua datele despre CO2 de la API-ul nostru și va determina ce culoare reprezintă cel mai bine impactul asupra mediului. Este similar cu modul în care oamenii de știință folosesc codarea culorilor în hărțile de căldură pentru a vizualiza modele complexe de date - de la temperaturile oceanului la formarea stelelor. Adaugă acest lucru în `/src/index.js`, imediat după acele variabile `const` pe care le-am configurat mai devreme:

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

**Hai să descompunem această funcție ingenioasă:**
- **Configurează** două array-uri - unul pentru nivelurile de CO2, altul pentru culori (verde = curat, maro = poluat!)
- **Găsește** cea mai apropiată potrivire pentru valoarea reală de CO2 folosind o sortare inteligentă a array-ului
- **Preia** culoarea corespunzătoare folosind metoda findIndex()
- **Trimite** un mesaj scriptului de fundal al Chrome cu culoarea aleasă
- **Folosește** șiruri de caractere template (acele ghilimele inversate) pentru o formatare mai curată
- **Organizează** totul cu declarații const

API-ul `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) este ca sistemul nervos al extensiei tale - gestionează toate comunicările și sarcinile din culise:

> "Folosește API-ul chrome.runtime pentru a prelua pagina de fundal, a returna detalii despre manifest și a asculta și răspunde la evenimentele din ciclul de viață al aplicației sau extensiei. Poți folosi acest API și pentru a converti calea relativă a URL-urilor în URL-uri complet calificate."

**De ce este util API-ul Chrome Runtime:**
- **Permite** diferitelor părți ale extensiei să comunice între ele
- **Gestionează** munca de fundal fără a bloca interfața utilizatorului
- **Administrează** evenimentele ciclului de viață al extensiei
- **Facilitează** transmiterea mesajelor între scripturi

✅ Dacă dezvolți această extensie de browser pentru Edge, s-ar putea să te surprindă faptul că folosești un API Chrome. Versiunile mai noi ale browserului Edge rulează pe motorul browserului Chromium, astfel încât poți profita de aceste instrumente.

> **Sfat util**: Dacă vrei să profilezi o extensie de browser, deschide instrumentele pentru dezvoltatori din interiorul extensiei, deoarece aceasta este propria instanță separată a browserului. Acest lucru îți oferă acces la metrici de performanță specifice extensiei.

### Setează o culoare implicită pentru pictogramă

Înainte să începem să preluăm date reale, să oferim extensiei noastre un punct de plecare. Nimănui nu-i place să vadă o pictogramă goală sau care pare stricată. Vom începe cu o culoare verde, astfel încât utilizatorii să știe că extensia funcționează din momentul instalării.

În funcția ta `init()`, să configurăm acea pictogramă verde implicită:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Ce realizează această inițializare:**
- **Setează** o culoare verde neutră ca stare implicită
- **Oferă** feedback vizual imediat când extensia se încarcă
- **Stabilește** modelul de comunicare cu scriptul de fundal
- **Asigură** că utilizatorii văd o extensie funcțională înainte ca datele să se încarce

### Apelează funcția, execută apelul

Acum să conectăm totul astfel încât, atunci când sosesc date noi despre CO2, pictograma ta să se actualizeze automat cu culoarea potrivită. Este ca și cum ai conecta circuitul final într-un dispozitiv electronic - dintr-o dată toate componentele individuale funcționează ca un sistem unitar.

Adaugă această linie imediat după ce obții datele despre CO2 de la API:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Ce realizează această integrare:**
- **Conectează** fluxul de date API cu sistemul de indicator vizual
- **Declanșează** actualizările pictogramei automat când sosesc date noi
- **Asigură** feedback vizual în timp real bazat pe intensitatea actuală a carbonului
- **Menține** separarea preocupărilor între preluarea datelor și logica de afișare

Și, în final, în `/dist/background.js`, adaugă ascultătorul pentru aceste apeluri de acțiune de fundal:

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

**Ce face acest script de fundal:**
- **Ascultă** mesajele de la scriptul principal (ca un recepționer care preia apeluri)
- **Procesează** cererile 'updateIcon' pentru a schimba pictograma din bara de instrumente
- **Creează** pictograme noi din mers folosind API-ul Canvas
- **Desenează** un cerc simplu colorat care arată intensitatea actuală a carbonului
- **Actualizează** bara de instrumente a browserului cu pictograma proaspătă
- **Folosește** OffscreenCanvas pentru o performanță lină (fără blocarea interfeței utilizatorului)

✅ Vei învăța mai multe despre API-ul Canvas în lecțiile [Space Game](../../6-space-game/2-drawing-to-canvas/README.md).

**Este timpul să testezi extensia ta:**
- **Construiește** totul cu `npm run build`
- **Reîncarcă** extensia ta în browser (nu uita acest pas)
- **Deschide** extensia și urmărește cum pictograma își schimbă culorile
- **Verifică** cum răspunde la date reale despre carbon din întreaga lume

Acum vei ști dintr-o privire dacă este un moment bun pentru a spăla rufele sau dacă ar trebui să aștepți pentru energie mai curată. Tocmai ai construit ceva cu adevărat util și ai învățat despre performanța browserului pe parcurs.

## Provocarea Agentului GitHub Copilot 🚀

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Îmbunătățește capacitățile de monitorizare a performanței extensiei de browser prin adăugarea unei funcții care urmărește și afișează timpii de încărcare pentru diferite componente ale extensiei.

**Prompt:** Creează un sistem de monitorizare a performan
Iată o misiune interesantă de detectiv: alege câteva site-uri open source care există de ani de zile (cum ar fi Wikipedia, GitHub sau Stack Overflow) și analizează istoricul lor de commit-uri. Poți identifica momentele în care au făcut îmbunătățiri de performanță? Ce probleme au continuat să apară?

**Abordarea ta de investigare:**
- **Caută** mesaje de commit care conțin cuvinte precum „optimizează,” „performanță” sau „mai rapid”
- **Observă** tiparele - continuă să rezolve aceleași tipuri de probleme?
- **Identifică** cauzele comune care încetinesc site-urile
- **Împărtășește** ce descoperi - alți dezvoltatori pot învăța din exemple reale

## Test de evaluare după lecție

[Test de evaluare după lecție](https://ff-quizzes.netlify.app/web/quiz/28)

## Recapitulare și studiu individual

Ia în considerare abonarea la un [newsletter despre performanță](https://perf.email/)

Investighează câteva dintre modurile în care browserele evaluează performanța web, analizând filele de performanță din instrumentele lor web. Găsești diferențe majore?

## Temă

[Analizează un site pentru performanță](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.