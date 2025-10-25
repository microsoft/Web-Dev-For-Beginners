<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-24T22:08:52+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "ro"
}
-->
# Proiect Terrarium Partea 1: Introducere în HTML

![Introducere în HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.ro.png)
> Sketchnote de [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, sau Limbajul de Marcare HyperText, este fundația fiecărui site web pe care l-ai vizitat vreodată. Gândește-te la HTML ca la scheletul care oferă structură paginilor web – definește unde se află conținutul, cum este organizat și ce reprezintă fiecare parte. În timp ce CSS va "îmbrăca" mai târziu HTML-ul cu culori și layout-uri, iar JavaScript îi va adăuga interactivitate, HTML oferă structura esențială care face totul posibil.

În această lecție, vei crea structura HTML pentru o interfață virtuală de terrarium. Acest proiect practic te va învăța conceptele fundamentale ale HTML în timp ce construiești ceva vizual atractiv. Vei învăța cum să organizezi conținutul folosind elemente semantice, să lucrezi cu imagini și să creezi fundația pentru o aplicație web interactivă.

La finalul acestei lecții, vei avea o pagină HTML funcțională care afișează imagini cu plante organizate în coloane, gata pentru a fi stilizată în lecția următoare. Nu te îngrijora dacă arată simplu la început – exact asta ar trebui să facă HTML înainte ca CSS să adauge finisajele vizuale.

## Test înainte de lecție

[Test înainte de lecție](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Urmărește și învață**: Vizionează acest videoclip util de prezentare
> 
> [![Videoclip despre Fundamentele HTML](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Configurarea proiectului

Înainte de a începe să scrii cod HTML, să configurăm un spațiu de lucru adecvat pentru proiectul terrarium. Crearea unei structuri de fișiere organizate de la început este un obicei esențial care te va ajuta pe parcursul călătoriei tale în dezvoltarea web.

### Sarcină: Creează structura proiectului

Vei crea un folder dedicat pentru proiectul terrarium și vei adăuga primul fișier HTML. Iată două abordări pe care le poți folosi:

**Opțiunea 1: Folosind Visual Studio Code**
1. Deschide Visual Studio Code
2. Click pe "File" → "Open Folder" sau folosește `Ctrl+K, Ctrl+O` (Windows/Linux) sau `Cmd+K, Cmd+O` (Mac)
3. Creează un folder nou numit `terrarium` și selectează-l
4. În panoul Explorer, click pe pictograma "New File"
5. Denumește fișierul `index.html`

![Explorer din VS Code arătând crearea unui fișier nou](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.ro.png)

**Opțiunea 2: Folosind comenzi în terminal**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Ce realizează aceste comenzi:**
- **Creează** un director nou numit `terrarium` pentru proiectul tău
- **Navighează** în directorul terrarium 
- **Creează** un fișier gol `index.html`
- **Deschide** fișierul în Visual Studio Code pentru editare

> 💡 **Sfat Pro**: Numele fișierului `index.html` este special în dezvoltarea web. Când cineva vizitează un site web, browserele caută automat `index.html` ca pagină implicită de afișat. Asta înseamnă că un URL precum `https://mysite.com/projects/` va afișa automat fișierul `index.html` din folderul `projects` fără a fi nevoie să specifici numele fișierului în URL.

## Înțelegerea structurii documentului HTML

Fiecare document HTML urmează o structură specifică pe care browserele trebuie să o înțeleagă și să o afișeze corect. Gândește-te la această structură ca la o scrisoare formală – are elemente necesare într-o anumită ordine care ajută destinatarul (în acest caz, browserul) să proceseze conținutul corect.

Să începem prin a adăuga fundația esențială de care are nevoie fiecare document HTML.

### Declarația DOCTYPE și elementul rădăcină

Primele două linii ale oricărui fișier HTML servesc drept "introducere" a documentului către browser:

```html
<!DOCTYPE html>
<html></html>
```

**Ce face acest cod:**
- **Declară** tipul documentului ca HTML5 folosind `<!DOCTYPE html>`
- **Creează** elementul rădăcină `<html>` care va conține tot conținutul paginii
- **Stabilește** standardele moderne web pentru o redare corectă în browser
- **Asigură** afișarea consistentă pe diferite browsere și dispozitive

> 💡 **Sfat VS Code**: Treci cu mouse-ul peste orice etichetă HTML în VS Code pentru a vedea informații utile din MDN Web Docs, inclusiv exemple de utilizare și detalii despre compatibilitatea cu browserele.

> 📚 **Află mai multe**: Declarația DOCTYPE previne ca browserele să intre în "modul de erori", care era folosit pentru a susține site-uri web foarte vechi. Dezvoltarea web modernă folosește declarația simplă `<!DOCTYPE html>` pentru a asigura [redarea conform standardelor](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

## Adăugarea metadatelor esențiale ale documentului

Secțiunea `<head>` a unui document HTML conține informații esențiale de care browserele și motoarele de căutare au nevoie, dar pe care vizitatorii nu le văd direct pe pagină. Gândește-te la aceasta ca la informațiile "din culise" care ajută pagina ta web să funcționeze corect și să apară corect pe diferite dispozitive și platforme.

Aceste metadate spun browserelor cum să afișeze pagina, ce codificare a caracterelor să folosească și cum să gestioneze diferite dimensiuni ale ecranului – toate esențiale pentru crearea unor pagini web profesionale și accesibile.

### Sarcină: Adaugă secțiunea Head a documentului

Inserează această secțiune `<head>` între etichetele `<html>` de deschidere și închidere:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Ce realizează fiecare element:**
- **Setează** titlul paginii care apare în filele browserului și în rezultatele căutării
- **Specifică** codificarea caracterelor UTF-8 pentru afișarea corectă a textului la nivel global
- **Asigură** compatibilitatea cu versiunile moderne ale Internet Explorer
- **Configurează** designul responsiv prin setarea viewport-ului să se potrivească cu lățimea dispozitivului
- **Controlează** nivelul inițial de zoom pentru a afișa conținutul la dimensiunea naturală

> 🤔 **Gândește-te la asta**: Ce s-ar întâmpla dacă ai seta o etichetă meta viewport astfel: `<meta name="viewport" content="width=600">`? Aceasta ar forța pagina să fie mereu lată de 600 de pixeli, stricând designul responsiv! Află mai multe despre [configurarea corectă a viewport-ului](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Construirea corpului documentului

Elementul `<body>` conține tot conținutul vizibil al paginii tale web – tot ceea ce utilizatorii vor vedea și cu care vor interacționa. În timp ce secțiunea `<head>` oferă instrucțiuni browserului, secțiunea `<body>` conține conținutul propriu-zis: text, imagini, butoane și alte elemente care creează interfața utilizatorului.

Să adăugăm structura corpului și să înțelegem cum funcționează etichetele HTML împreună pentru a crea conținut semnificativ.

### Înțelegerea structurii etichetelor HTML

HTML folosește etichete pereche pentru a defini elementele. Majoritatea etichetelor au o etichetă de deschidere, cum ar fi `<p>`, și o etichetă de închidere, cum ar fi `</p>`, cu conținut între ele: `<p>Bună, lume!</p>`. Acest lucru creează un element de paragraf care conține textul "Bună, lume!".

### Sarcină: Adaugă elementul Body

Actualizează fișierul HTML pentru a include elementul `<body>`:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

**Ce oferă această structură completă:**
- **Stabilește** cadrul de bază al documentului HTML5
- **Include** metadate esențiale pentru redarea corectă în browser
- **Creează** un corp gol pregătit pentru conținutul vizibil
- **Urmează** cele mai bune practici în dezvoltarea web modernă

Acum ești pregătit să adaugi elementele vizibile ale terrarium-ului. Vom folosi elemente `<div>` ca containere pentru a organiza diferite secțiuni de conținut și elemente `<img>` pentru a afișa imaginile plantelor.

### Lucrul cu imagini și containere de layout

Imaginile sunt speciale în HTML deoarece folosesc etichete "auto-închise". Spre deosebire de elementele precum `<p></p>` care înconjoară conținutul, eticheta `<img>` conține toate informațiile necesare în interiorul său, folosind atribute precum `src` pentru calea fișierului imaginii și `alt` pentru accesibilitate.

Înainte de a adăuga imagini în HTML, va trebui să organizezi fișierele proiectului corect, creând un folder de imagini și adăugând graficele plantelor.

**Mai întâi, configurează imaginile:**
1. Creează un folder numit `images` în interiorul folderului proiectului terrarium
2. Descarcă imaginile plantelor din [folderul soluție](../../../../3-terrarium/solution/images) (14 imagini cu plante în total)
3. Copiază toate imaginile plantelor în noul folder `images`

### Sarcină: Creează layout-ul de afișare a plantelor

Acum adaugă imaginile plantelor organizate în două coloane între etichetele `<body></body>`:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.ro.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.ro.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.ro.png" />
		</div>
	</div>
</div>
```

**Pas cu pas, iată ce se întâmplă în acest cod:**
- **Creează** un container principal al paginii cu `id="page"` pentru a conține tot conținutul
- **Stabilește** două containere de coloane: `left-container` și `right-container`
- **Organizează** 7 plante în coloana stângă și 7 plante în coloana dreaptă
- **Încadrează** fiecare imagine a plantei într-un div `plant-holder` pentru poziționare individuală
- **Aplică** nume de clase consistente pentru stilizare CSS în lecția următoare
- **Atribuie** ID-uri unice fiecărei imagini a plantei pentru interacțiune JavaScript ulterior
- **Include** căi corecte către folderul de imagini

> 🤔 **Reflectează**: Observă că toate imaginile au același text alt "plant". Acest lucru nu este ideal pentru accesibilitate. Utilizatorii de cititoare de ecran ar auzi "plant" repetat de 14 ori fără să știe ce plantă specifică arată fiecare imagine. Poți gândi texte alt mai descriptive pentru fiecare imagine?

> 📝 **Tipuri de elemente HTML**: Elementele `<div>` sunt "nivel bloc" și ocupă întreaga lățime, în timp ce elementele `<span>` sunt "inline" și ocupă doar lățimea necesară. Ce crezi că s-ar întâmpla dacă ai schimba toate aceste etichete `<div>` în etichete `<span>`?

Cu acest marcaj adăugat, plantele vor apărea pe ecran, deși nu vor arăta finisate încă – pentru asta este CSS în lecția următoare! Deocamdată, ai o fundație HTML solidă care organizează corect conținutul și urmează cele mai bune practici de accesibilitate.

## Utilizarea HTML semantic pentru accesibilitate

HTML semantic înseamnă alegerea elementelor HTML pe baza semnificației și scopului lor, nu doar pe baza aspectului. Când folosești marcaj semantic, comunici structura și semnificația conținutului tău către browsere, motoare de căutare și tehnologii asistive precum cititoarele de ecran.

Această abordare face ca site-urile tale să fie mai accesibile utilizatorilor cu dizabilități și ajută motoarele de căutare să înțeleagă mai bine conținutul tău. Este un principiu fundamental al dezvoltării web moderne care creează experiențe mai bune pentru toată lumea.

### Adăugarea unui titlu semantic al paginii

Să adăugăm un titlu adecvat paginii terrarium. Inserează această linie imediat după eticheta de deschidere `<body>`:

```html
<h1>My Terrarium</h1>
```

**De ce contează marcajul semantic:**
- **Ajută** cititoarele de ecran să navigheze și să înțeleagă structura paginii
- **Îmbunătățește** optimizarea pentru motoarele de căutare (SEO) prin clarificarea ierarhiei conținutului
- **Sporește** accesibilitatea pentru utilizatorii cu deficiențe de vedere sau diferențe cognitive
- **Creează** experiențe mai bune pentru utilizatori pe toate dispozitivele și platformele
- **Urmează** standardele web și cele mai bune practici pentru dezvoltarea profesională

**Exemple de alegeri semantice vs. non-semantice:**

| Scop | ✅ Alegere semantică | ❌ Alegere non-semantică |
|------|---------------------|-------------------------|
| Titlu principal | `<h1>Titlu</h1>` | `<div class="big-text">Titlu</div>` |
| Navigare | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Buton | `<button>Apasă aici</button>` | `<span onclick="...">Apasă aici</span>` |
| Conținut articol | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Vezi în acțiune**: Urmărește [cum interacționează cititoarele de ecran cu paginile web](https://www.youtube.com/watch?v=OUDV1gqs9GA) pentru a înțelege de ce marcajul semantic este crucial pentru accesibilitate. Observă cum structura corectă HTML ajută utilizatorii să navigheze eficient.

## Crearea containerului Terrarium

Acum să adăugăm structura HTML pentru terrarium-ul propriu-zis – recipientul de sticlă în care vor fi plasate plantele. Această secțiune demonstrează un concept important: HTML oferă structură, dar fără stilizare CSS, aceste elemente nu vor fi vizibile încă.

Marcajul terrarium-ului folosește nume de clase descriptive care vor face stilizarea CSS intuitivă și ușor de întreținut în lecția următoare.

### Sarcină: Adaugă structura Terrarium-ului

Inserează acest marcaj deasupra ultimei etichete `</div>` (înainte de eticheta de închidere a containerului paginii):

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

**Înțelegerea acestei structuri de terrarium:**
- **Creează** un container principal pentru terrarium cu un ID unic pentru stilizare
- **Definește** elemente separate pentru fiecare componentă vizuală (partea de sus, pereți, pământ, fund)
- **Include** elemente imbricate pentru efecte de reflexie a sticlei (elemente lucioase)
- **Folosește** nume de clase descriptive care indică clar scopul fiecărui element
- **Pregătește** structura pentru stilizarea CSS care va crea aspectul de terrarium din sticlă

> 🤔 **Observă ceva?**: Chiar dacă ai adăugat acest marcaj, nu vezi nimic nou pe pagină! Acest lucru ilustrează perfect cum HTML oferă structură, în timp ce CSS oferă aspect. Aceste etichete `<div>` există, dar nu au încă stilizare vizuală – asta urmează în lecția următoare!

---

## Provocarea Agentului GitHub Copilot

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Creează o structură HTML semantică pentru o secțiune de ghid de îngrijire a plantelor care ar putea fi adăugată la proiectul terrarium.
**Prompt:** Creează o secțiune HTML semantică care să includă un titlu principal "Ghid de Îngrijire a Plantelor", trei subsecțiuni cu titluri "Udare", "Cerințe de Lumină" și "Îngrijirea Solului", fiecare conținând un paragraf cu informații despre îngrijirea plantelor. Folosește taguri HTML semantice adecvate precum `<section>`, `<h2>`, `<h3>` și `<p>` pentru a structura conținutul corespunzător.

Află mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## Provocarea Istoriei HTML

**Învățând despre evoluția web-ului**

HTML a evoluat semnificativ de când Tim Berners-Lee a creat primul browser web la CERN în 1990. Unele taguri mai vechi, precum `<marquee>`, sunt acum depreciate deoarece nu se potrivesc bine cu standardele moderne de accesibilitate și principiile designului responsiv.

**Încearcă acest experiment:**
1. Înfășoară temporar titlul `<h1>` într-un tag `<marquee>`: `<marquee><h1>Terrariul Meu</h1></marquee>`
2. Deschide pagina în browser și observă efectul de derulare
3. Gândește-te de ce acest tag a fost depreciat (indiciu: gândește-te la experiența utilizatorului și accesibilitate)
4. Elimină tagul `<marquee>` și revino la marcajul semantic

**Întrebări de reflecție:**
- Cum ar putea afecta un titlu derulant utilizatorii cu deficiențe de vedere sau sensibilitate la mișcare?
- Ce tehnici moderne CSS ar putea obține efecte vizuale similare într-un mod mai accesibil?
- De ce este important să folosești standardele web actuale în locul elementelor depreciate?

Explorează mai multe despre [elementele HTML învechite și depreciate](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) pentru a înțelege cum evoluează standardele web pentru a îmbunătăți experiența utilizatorului.


## Test de verificare după lecție

[Test de verificare după lecție](https://ff-quizzes.netlify.app/web/quiz/16)

## Recapitulare și Studiu Individual

**Aprofundează cunoștințele despre HTML**

HTML a fost fundația web-ului timp de peste 30 de ani, evoluând de la un limbaj simplu de marcare a documentelor la o platformă sofisticată pentru construirea aplicațiilor interactive. Înțelegerea acestei evoluții te ajută să apreciezi standardele moderne ale web-ului și să iei decizii mai bune în dezvoltare.

**Căi de învățare recomandate:**

1. **Istoria și evoluția HTML**
   - Cercetează cronologia de la HTML 1.0 la HTML5
   - Explorează de ce anumite taguri au fost depreciate (accesibilitate, adaptabilitate pentru mobil, ușurința întreținerii)
   - Investighează funcționalități HTML emergente și propuneri

2. **Explorarea HTML semantic**
   - Studiază lista completă de [elemente semantice HTML5](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Exersează identificarea momentului potrivit pentru a folosi `<article>`, `<section>`, `<aside>` și `<main>`
   - Învață despre atributele ARIA pentru o accesibilitate îmbunătățită

3. **Dezvoltare web modernă**
   - Explorează [construirea site-urilor responsive](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) pe Microsoft Learn
   - Înțelege cum se integrează HTML cu CSS și JavaScript
   - Învață despre performanța web și cele mai bune practici SEO

**Întrebări de reflecție:**
- Ce taguri HTML depreciate ai descoperit și de ce au fost eliminate?
- Ce funcționalități HTML noi sunt propuse pentru versiunile viitoare?
- Cum contribuie HTML-ul semantic la accesibilitatea web și la SEO?


## Temă

[Exersează HTML-ul: Construiește un prototip de blog](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru neînțelegerile sau interpretările greșite care pot apărea din utilizarea acestei traduceri.