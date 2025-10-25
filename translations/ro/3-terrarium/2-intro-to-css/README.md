<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-24T22:08:01+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "ro"
}
-->
# Proiectul Terrarium Partea 2: Introducere în CSS

![Introducere în CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.ro.png)
> Sketchnote de [Tomomi Imura](https://twitter.com/girlie_mac)

Îți amintești cum arăta terrarium-ul tău HTML destul de simplu? CSS este ceea ce transformă acea structură simplă într-un design vizual atrăgător.

Dacă HTML-ul este ca și cum ai construi scheletul unei case, atunci CSS este tot ceea ce o face să se simtă ca acasă - culorile pereților, aranjamentul mobilierului, iluminarea și modul în care camerele se îmbină. Gândește-te cum Palatul Versailles a început ca o simplă cabană de vânătoare, dar atenția meticuloasă la decor și design l-a transformat într-una dintre cele mai magnifice clădiri din lume.

Astăzi, vom transforma terrarium-ul tău din funcțional în elegant. Vei învăța cum să poziționezi elementele cu precizie, să creezi layout-uri care se adaptează la diferite dimensiuni ale ecranului și să adaugi un aspect vizual care face ca site-urile web să fie captivante.

Până la sfârșitul acestei lecții, vei vedea cum stilizarea strategică cu CSS poate îmbunătăți dramatic proiectul tău. Hai să adăugăm puțin stil terrarium-ului tău.

## Test înainte de lecție

[Test înainte de lecție](https://ff-quizzes.netlify.app/web/quiz/17)

## Începem cu CSS

CSS este adesea considerat doar ca un mod de a "face lucrurile frumoase", dar are un scop mult mai larg. CSS este ca un regizor de film - controlezi nu doar cum arată totul, ci și cum se mișcă, cum răspunde la interacțiuni și cum se adaptează la diferite situații.

CSS-ul modern este remarcabil de capabil. Poți scrie cod care ajustează automat layout-urile pentru telefoane, tablete și computere desktop. Poți crea animații fluide care ghidează atenția utilizatorilor acolo unde este nevoie. Rezultatele pot fi destul de impresionante atunci când totul funcționează împreună.

> 💡 **Sfat util**: CSS evoluează constant cu funcții și capabilități noi. Verifică întotdeauna [CanIUse.com](https://caniuse.com) pentru a verifica suportul browserului pentru funcțiile CSS mai noi înainte de a le folosi în proiectele de producție.

**Iată ce vom realiza în această lecție:**
- **Creăm** un design vizual complet pentru terrarium-ul tău folosind tehnici moderne CSS
- **Explorăm** concepte fundamentale precum cascada, moștenirea și selectorii CSS
- **Implementăm** strategii de poziționare și layout responsive
- **Construim** containerul terrarium-ului folosind forme și stilizare CSS

### Prerechizite

Ar trebui să fi finalizat structura HTML pentru terrarium-ul tău din lecția anterioară și să fie pregătită pentru stilizare.

> 📺 **Resursă video**: Consultă acest tutorial video util
>
> [![Tutorial de bază CSS](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Configurarea fișierului CSS

Înainte să începem stilizarea, trebuie să conectăm CSS la HTML-ul nostru. Această conexiune spune browserului unde să găsească instrucțiunile de stilizare pentru terrarium-ul nostru.

În folderul terrarium, creează un fișier nou numit `style.css`, apoi conectează-l în secțiunea `<head>` a documentului HTML:

```html
<link rel="stylesheet" href="./style.css" />
```

**Ce face acest cod:**
- **Creează** o conexiune între fișierele HTML și CSS
- **Spune** browserului să încarce și să aplice stilurile din `style.css`
- **Folosește** atributul `rel="stylesheet"` pentru a specifica că este un fișier CSS
- **Face referire** la calea fișierului cu `href="./style.css"`

## Înțelegerea cascadei CSS

Te-ai întrebat vreodată de ce CSS se numește "Foi de stil în cascadă"? Stilurile se propagă ca o cascadă și, uneori, intră în conflict unele cu altele.

Gândește-te cum funcționează structurile de comandă militară - un ordin general ar putea spune "toți soldații să poarte verde", dar un ordin specific pentru unitatea ta ar putea spune "purtați uniforma de ceremonie albastră". Instrucțiunea mai specifică are prioritate. CSS urmează o logică similară, iar înțelegerea acestei ierarhii face debugging-ul mult mai ușor.

### Experimentarea cu prioritatea cascadei

Să vedem cascada în acțiune creând un conflict de stil. Mai întâi, adaugă un stil inline la tag-ul `<h1>`:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Ce face acest cod:**
- **Aplică** o culoare roșie direct elementului `<h1>` folosind stilizare inline
- **Folosește** atributul `style` pentru a încorpora CSS direct în HTML
- **Creează** regula de stil cu cea mai mare prioritate pentru acest element specific

Apoi, adaugă această regulă în fișierul `style.css`:

```css
h1 {
  color: blue;
}
```

**În cele de mai sus, am:**
- **Definit** o regulă CSS care vizează toate elementele `<h1>`
- **Setat** culoarea textului la albastru folosind un stylesheet extern
- **Creat** o regulă cu prioritate mai mică comparativ cu stilurile inline

✅ **Verificare cunoștințe**: Ce culoare apare în aplicația ta web? De ce câștigă acea culoare? Poți gândi scenarii în care ai dori să suprascrii stilurile?

> 💡 **Ordinea priorității CSS (de la cea mai mare la cea mai mică):**
> 1. **Stiluri inline** (atributul style)
> 2. **ID-uri** (#myId)
> 3. **Clase** (.myClass) și atribute
> 4. **Selectori de elemente** (h1, div, p)
> 5. **Setări implicite ale browserului**

## Moștenirea CSS în acțiune

Moștenirea CSS funcționează ca genetica - elementele moștenesc anumite proprietăți de la elementele părinte. Dacă setezi familia de fonturi pe elementul body, tot textul din interior va folosi automat același font. Este similar cu modul în care linia distinctivă a maxilarului familiei Habsburg a apărut de-a lungul generațiilor fără a fi specificată pentru fiecare individ.

Totuși, nu totul este moștenit. Stilurile textului, cum ar fi fonturile și culorile, se moștenesc, dar proprietățile de layout, cum ar fi marginile și bordurile, nu. La fel cum copiii pot moșteni trăsături fizice, dar nu alegerile vestimentare ale părinților.

### Observarea moștenirii fontului

Să vedem moștenirea în acțiune setând o familie de fonturi pe elementul `<body>`:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Ce se întâmplă aici:**
- **Setează** familia de fonturi pentru întreaga pagină vizând elementul `<body>`
- **Folosește** un set de fonturi cu opțiuni de rezervă pentru o mai bună compatibilitate cu browserul
- **Aplică** fonturi moderne de sistem care arată bine pe diferite sisteme de operare
- **Asigură** că toate elementele copil moștenesc acest font, cu excepția cazului în care este suprascris în mod specific

Deschide instrumentele de dezvoltare ale browserului (F12), navighează la fila Elements și inspectează elementul `<h1>`. Vei vedea că moștenește familia de fonturi de la body:

![font moștenit](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.ro.png)

✅ **Timp de experimentare**: Încearcă să setezi alte proprietăți moștenibile pe `<body>` cum ar fi `color`, `line-height` sau `text-align`. Ce se întâmplă cu titlul și celelalte elemente?

> 📝 **Proprietăți moștenibile includ**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Proprietăți non-moștenibile includ**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Stăpânirea selectorilor CSS

Selectorii CSS sunt modul tău de a viza elemente specifice pentru stilizare. Funcționează ca și cum ai da indicații precise - în loc să spui "casa", ai putea spune "casa albastră cu ușa roșie de pe strada Maple".

CSS oferă diferite moduri de a fi specific, iar alegerea selectorului potrivit este ca alegerea instrumentului adecvat pentru sarcină. Uneori trebuie să stilizezi fiecare ușă din cartier, iar alteori doar o ușă specifică.

### Selectori de elemente (Tag-uri)

Selectorii de elemente vizează elementele HTML după numele tag-ului. Sunt perfecți pentru setarea stilurilor de bază care se aplică pe scară largă pe pagină:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Înțelegerea acestor stiluri:**
- **Setează** o tipografie consistentă pe întreaga pagină cu selectorul `body`
- **Elimină** marginile și padding-ul implicite ale browserului pentru un control mai bun
- **Stilizează** toate elementele de titlu cu culoare, aliniere și spațiere
- **Folosește** unități `rem` pentru dimensiuni scalabile și accesibile ale fontului

Deși selectorii de elemente funcționează bine pentru stilizarea generală, vei avea nevoie de selectori mai specifici pentru a stiliza componente individuale, cum ar fi plantele din terrarium-ul tău.

### Selectori ID pentru elemente unice

Selectorii ID folosesc simbolul `#` și vizează elementele cu atribute `id` specifice. Deoarece ID-urile trebuie să fie unice pe o pagină, sunt perfecți pentru stilizarea elementelor individuale, speciale, cum ar fi containerele laterale ale plantelor din terrarium-ul nostru.

Să creăm stilizarea pentru containerele laterale ale terrarium-ului, unde vor fi plasate plantele:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Ce realizează acest cod:**
- **Poziționează** containerele la marginile extreme stânga și dreapta folosind poziționare `absolute`
- **Folosește** unități `vh` (înălțimea ferestrei) pentru o înălțime adaptabilă la dimensiunea ecranului
- **Aplică** `box-sizing: border-box` astfel încât padding-ul să fie inclus în lățimea totală
- **Elimină** unitățile `px` inutile din valorile zero pentru un cod mai curat
- **Setează** o culoare de fundal subtilă, mai ușor de privit decât griul intens

✅ **Provocare de calitate a codului**: Observă cum acest CSS încalcă principiul DRY (Don't Repeat Yourself). Poți să-l refaci folosind atât un ID, cât și o clasă?

**Abordare îmbunătățită:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### Selectori de clasă pentru stiluri reutilizabile

Selectorii de clasă folosesc simbolul `.` și sunt perfecți atunci când vrei să aplici aceleași stiluri la mai multe elemente. Spre deosebire de ID-uri, clasele pot fi reutilizate în întregul HTML, ceea ce le face ideale pentru modele de stilizare consistente.

În terrarium-ul nostru, fiecare plantă are nevoie de stiluri similare, dar și de poziționare individuală. Vom folosi o combinație de clase pentru stiluri comune și ID-uri pentru poziționare unică.

**Iată structura HTML pentru fiecare plantă:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.ro.png" />
</div>
```

**Elemente cheie explicate:**
- **Folosește** `class="plant-holder"` pentru stilizarea consistentă a containerului pentru toate plantele
- **Aplică** `class="plant"` pentru stilizarea și comportamentul comun al imaginilor
- **Include** un `id="plant1"` unic pentru poziționare individuală și interacțiune JavaScript
- **Oferă** text descriptiv alt pentru accesibilitate utilizatorilor de cititoare de ecran

Acum adaugă aceste stiluri în fișierul tău `style.css`:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Analiza acestor stiluri:**
- **Creează** poziționare relativă pentru containerul plantei pentru a stabili un context de poziționare
- **Setează** fiecare container de plante la o înălțime de 13%, asigurându-se că toate plantele se potrivesc vertical fără derulare
- **Deplasează** containerele ușor spre stânga pentru a centra mai bine plantele în interiorul lor
- **Permite** plantelor să se scaleze adaptiv cu proprietățile `max-width` și `max-height`
- **Folosește** `z-index` pentru a suprapune plantele peste alte elemente din terrarium
- **Adaugă** un efect subtil de hover cu tranziții CSS pentru o interacțiune mai bună cu utilizatorul

✅ **Gândire critică**: De ce avem nevoie de ambii selectori `.plant-holder` și `.plant`? Ce s-ar întâmpla dacă am încerca să folosim doar unul?

> 💡 **Model de design**: Containerul (`.plant-holder`) controlează layout-ul și poziționarea, în timp ce conținutul (`.plant`) controlează aspectul și scalarea. Această separare face codul mai ușor de întreținut și mai flexibil.

## Înțelegerea poziționării CSS

Poziționarea CSS este ca și cum ai fi regizorul unei piese de teatru - tu decizi unde stă fiecare actor și cum se mișcă pe scenă. Unii actori urmează formația standard, în timp ce alții au nevoie de poziționare specifică pentru efect dramatic.

Odată ce înțelegi poziționarea, multe provocări de layout devin gestionabile. Ai nevoie de o bară de navigare care să rămână în partea de sus în timp ce utilizatorii derulează? Poziționarea se ocupă de asta. Vrei un tooltip care apare într-o locație specifică? Tot poziționarea se ocupă de asta.

### Cele cinci valori de poziționare

| Valoare poziționare | Comportament | Caz de utilizare |
|---------------------|-------------|------------------|
| `static` | Flux implicit, ignoră top/left/right/bottom | Layout normal al documentului |
| `relative` | Poziționat relativ la poziția sa normală | Ajustări mici, crearea unui context de poziționare |
| `absolute` | Poziționat relativ la cel mai apropiat strămoș poziționat | Plasare precisă, suprapuneri |
| `fixed` | Poziționat relativ la fereastra de vizualizare | Bare de navigare, elemente plutitoare |
| `sticky` | Comută între relative și fixed în funcție de derulare | Anteturi care rămân fixate la derulare |

### Poziționarea în terrarium-ul nostru

Terrarium-ul nostru folosește o combinație strategică de tipuri de poziționare pentru a crea layout-ul dorit:

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**Înțelegerea strategiei de poziționare:**
- **Containere absolute** sunt scoase din fluxul normal al documentului și fixate la marginile ecranului
- **Containere relative** creează un context de poziționare în timp ce rămân în fluxul documentului
- **Plante absolute** pot fi poziționate precis în interiorul containerelor lor relative
- **Această combinație** permite plantelor să se așeze vertical în timp ce sunt poziționabile individual

> 🎯 **De ce contează acest lucru**: Elementele `plant` au nevoie de poziționare absolută pentru a deveni manipulabile în lecția următoare. Poziționarea absolută le scoate din fluxul normal al layout-ului, făcând interacțiunile drag-and-drop posibile.

✅ **Timp de experimentare**: Încearcă să schimbi valorile de poziționare și observă rezultatele:
- Ce se întâmplă dacă schimbi `.container` de la `absolute` la `relative`?
- Cum se schimbă layout-ul dacă `.plant-holder` folosește `absolute` în loc de `relative`?
- Ce se întâmplă când schimbi `.plant` la poziționare `relative`?

## Construirea terrarium-ului cu CSS

Acum vom construi un borcan de sticlă folosind doar CSS - fără imagini sau software grafic necesar.

Crearea unor efecte realiste de sticlă, umbre și adâncime folosind poziționare și transparență demonstrează capabilitățile vizuale ale CSS. Această tehn
Să construim borcanul terrarium pas cu pas. Fiecare parte folosește poziționare absolută și dimensiuni bazate pe procente pentru un design receptiv:

```css
.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 1rem;
  position: absolute;
  bottom: 0.5%;
  left: 20%;
  opacity: 0.5;
  z-index: 1;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 80.5%;
  left: 25%;
  opacity: 0.7;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
}

.dirt {
  width: 60%;
  height: 5%;
  background: #3a241d;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  bottom: 1%;
  left: 20%;
  opacity: 0.7;
  z-index: -1;
}
```

**Înțelegerea construcției terrariumului:**
- **Folosește** dimensiuni bazate pe procente pentru scalare receptivă pe toate dimensiunile ecranului
- **Poziționează** elementele absolut pentru a le stivui și alinia cu precizie
- **Aplică** valori diferite de opacitate pentru a crea efectul de transparență al sticlei
- **Implementează** stratificarea `z-index` astfel încât plantele să apară în interiorul borcanului
- **Adaugă** umbre subtile și un contur rotunjit rafinat pentru un aspect mai realist

### Design Receptiv cu Procente

Observați cum toate dimensiunile folosesc procente în loc de valori fixe în pixeli:

**De ce este important:**
- **Asigură** că terrariumul se scalează proporțional pe orice dimensiune de ecran
- **Menține** relațiile vizuale între componentele borcanului
- **Oferă** o experiență consistentă de la telefoane mobile la monitoare desktop mari
- **Permite** designului să se adapteze fără a rupe aspectul vizual

### Unități CSS în Acțiune

Folosim unități `rem` pentru conturul rotunjit, care se scalează relativ la dimensiunea fontului de bază. Acest lucru creează designuri mai accesibile care respectă preferințele utilizatorului în privința fonturilor. Aflați mai multe despre [unitățile relative CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths) în specificația oficială.

✅ **Experiment vizual**: Încercați să modificați aceste valori și observați efectele:
- Schimbați opacitatea borcanului de la 0.5 la 0.8 – cum afectează acest lucru aspectul sticlei?
- Ajustați culoarea pământului de la `#3a241d` la `#8B4513` – ce impact vizual are aceasta?
- Modificați `z-index` al pământului la 2 – ce se întâmplă cu stratificarea?

---

## Provocarea Agentului GitHub Copilot 🚀

Folosiți modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Creați o animație CSS care face ca plantele din terrarium să se legene ușor înainte și înapoi, simulând efectul unei brize naturale. Acest lucru vă va ajuta să exersați animațiile CSS, transformările și cadrele cheie, îmbunătățind în același timp atractivitatea vizuală a terrariumului.

**Indicație:** Adăugați animații cu cadre cheie CSS pentru a face plantele din terrarium să se legene ușor dintr-o parte în alta. Creați o animație de legănare care rotește fiecare plantă ușor (2-3 grade) la stânga și la dreapta cu o durată de 3-4 secunde și aplicați-o clasei `.plant`. Asigurați-vă că animația se repetă la infinit și are o funcție de easing pentru o mișcare naturală.

Aflați mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## 🚀 Provocare: Adăugarea Reflexiilor Sticlei

Pregătiți-vă să îmbunătățiți terrariumul cu reflexii realiste ale sticlei. Această tehnică va adăuga profunzime și realism designului.

Veți crea evidențieri subtile care simulează modul în care lumina se reflectă pe suprafețele de sticlă. Această abordare este similară cu modul în care pictorii renascentiști, precum Jan van Eyck, foloseau lumina și reflexia pentru a face sticla pictată să pară tridimensională. Iată ce urmăriți:

![finished terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.ro.png)

**Provocarea ta:**
- **Creați** forme ovale subtile, albe sau de culoare deschisă, pentru reflexiile sticlei
- **Poziționați**-le strategic pe partea stângă a borcanului
- **Aplicați** efecte adecvate de opacitate și blur pentru o reflexie realistă a luminii
- **Folosiți** `border-radius` pentru a crea forme organice, asemănătoare bulelor
- **Experimentați** cu gradienturi sau umbre pentru un realism sporit

## Test de Evaluare Post-Lecție

[Test de evaluare post-lecție](https://ff-quizzes.netlify.app/web/quiz/18)

## Extindeți-vă Cunoștințele CSS

CSS poate părea complex la început, dar înțelegerea acestor concepte de bază oferă o fundație solidă pentru tehnici mai avansate.

**Următoarele domenii de învățare CSS:**
- **Flexbox** - simplifică alinierea și distribuirea elementelor
- **CSS Grid** - oferă instrumente puternice pentru crearea de layout-uri complexe
- **Variabile CSS** - reduce repetarea și îmbunătățește mentenabilitatea
- **Design receptiv** - asigură funcționarea site-urilor pe diferite dimensiuni de ecran

### Resurse Interactive de Învățare

Exersați aceste concepte cu aceste jocuri captivante și interactive:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Stăpâniți Flexbox prin provocări distractive
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Învățați CSS Grid cultivând morcovi virtuali
- 🎯 [CSS Battle](https://cssbattle.dev/) - Testați-vă abilitățile CSS cu provocări de codare

### Învățare Suplimentară

Pentru o înțelegere cuprinzătoare a fundamentelor CSS, finalizați acest modul Microsoft Learn: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Temă

[Refactorizare CSS](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.