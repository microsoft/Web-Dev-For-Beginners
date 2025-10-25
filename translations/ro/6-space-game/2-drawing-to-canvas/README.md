<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-24T22:16:40+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 2: Desenează Eroul și Monștrii pe Canvas

API-ul Canvas este una dintre cele mai puternice funcționalități ale dezvoltării web pentru crearea graficelor dinamice și interactive direct în browserul tău. În această lecție, vom transforma acel element HTML `<canvas>` gol într-o lume de joc plină de eroi și monștri. Gândește-te la canvas ca la o tablă digitală de artă unde codul devine vizual.

Ne bazăm pe ceea ce ai învățat în lecția anterioară, iar acum vom aprofunda aspectele vizuale. Vei învăța cum să încarci și să afișezi sprite-uri de joc, să poziționezi elementele cu precizie și să creezi fundația vizuală pentru jocul tău spațial. Acest lucru face trecerea de la paginile web statice la experiențe dinamice și interactive.

Până la sfârșitul acestei lecții, vei avea o scenă completă de joc cu nava eroului poziționată corect și formațiuni de inamici pregătite pentru luptă. Vei înțelege cum jocurile moderne redau grafica în browsere și vei dobândi abilități pentru a crea propriile experiențe vizuale interactive. Hai să explorăm grafica pe canvas și să aducem jocul tău spațial la viață!

## Test înainte de lecție

[Test înainte de lecție](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas-ul

Deci, ce este exact acest element `<canvas>`? Este soluția HTML5 pentru crearea graficelor și animațiilor dinamice în browserele web. Spre deosebire de imaginile sau videoclipurile obișnuite care sunt statice, canvas-ul îți oferă control la nivel de pixel asupra a tot ceea ce apare pe ecran. Acest lucru îl face perfect pentru jocuri, vizualizări de date și artă interactivă. Gândește-te la el ca la o suprafață de desen programabilă, unde JavaScript devine pensula ta.

În mod implicit, un element canvas arată ca un dreptunghi gol și transparent pe pagina ta. Dar aici se află potențialul! Puterea sa reală apare atunci când folosești JavaScript pentru a desena forme, a încărca imagini, a crea animații și a face lucrurile să răspundă la interacțiunile utilizatorului. Este similar cu modul în care pionierii graficii computerizate de la Bell Labs în anii 1960 trebuiau să programeze fiecare pixel pentru a crea primele animații digitale.

✅ Citește [mai multe despre API-ul Canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API) pe MDN.

Iată cum este de obicei declarat, ca parte a corpului paginii:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Ce face acest cod:**
- **Setează** atributul `id` pentru a putea referi acest element canvas specific în JavaScript
- **Definește** lățimea în pixeli pentru a controla dimensiunea orizontală a canvas-ului
- **Stabilește** înălțimea în pixeli pentru a determina dimensiunile verticale ale canvas-ului

## Desenarea Geometriei Simple

Acum că știi ce este elementul canvas, să explorăm cum să desenăm efectiv pe el! Canvas-ul folosește un sistem de coordonate care s-ar putea să-ți fie familiar din orele de matematică, dar există o răsturnare importantă specifică graficii computerizate.

Canvas-ul folosește coordonate carteziene cu o axă x (orizontală) și o axă y (verticală) pentru a poziționa tot ceea ce desenezi. Dar iată diferența cheie: spre deosebire de sistemul de coordonate din matematică, punctul de origine `(0,0)` începe în colțul din stânga sus, valorile x crescând pe măsură ce te deplasezi spre dreapta și valorile y crescând pe măsură ce te deplasezi în jos. Această abordare datează din primele afișaje computerizate, unde fasciculele de electroni scanau de sus în jos, făcând din colțul din stânga sus punctul de pornire natural.

![grila canvas-ului](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.ro.png)
> Imagine de la [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Pentru a desena pe elementul canvas, vei urma același proces în trei pași care formează baza tuturor graficelor pe canvas. Odată ce faci acest lucru de câteva ori, devine o a doua natură:

1. **Obține o referință** la elementul Canvas din DOM (la fel ca orice alt element HTML)
2. **Obține contextul de redare 2D** – acesta oferă toate metodele de desen
3. **Începe să desenezi!** Folosește metodele încorporate ale contextului pentru a crea grafica

Iată cum arată acest lucru în cod:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Să descompunem pas cu pas:**
- **Luăm** elementul canvas folosind ID-ul său și îl stocăm într-o variabilă
- **Obținem** contextul de redare 2D – acesta este setul nostru de instrumente plin de metode de desen
- **Spunem** canvas-ului că vrem să umplem lucrurile cu roșu folosind proprietatea `fillStyle`
- **Desenăm** un dreptunghi începând din colțul din stânga sus (0,0) care are 200 de pixeli lățime și înălțime

✅ API-ul Canvas se concentrează în principal pe forme 2D, dar poți desena și elemente 3D pe un site web; pentru aceasta, ai putea folosi [API-ul WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Poți desena o mulțime de lucruri cu API-ul Canvas, cum ar fi:

- **Forme geometrice**, am arătat deja cum să desenezi un dreptunghi, dar există mult mai multe pe care le poți desena.
- **Text**, poți desena un text cu orice font și culoare dorești.
- **Imagini**, poți desena o imagine bazată pe un fișier imagine, cum ar fi un .jpg sau .png, de exemplu.

✅ Încearcă! Știi cum să desenezi un dreptunghi, poți desena un cerc pe pagină? Aruncă o privire la câteva desene interesante pe Canvas pe CodePen. Iată un [exemplu deosebit de impresionant](https://codepen.io/dissimulate/pen/KrAwx).

## Încărcarea și Desenarea unui Fisier Imagine

Desenarea formelor de bază este utilă pentru început, dar majoritatea jocurilor au nevoie de imagini reale! Sprite-uri, fundaluri și texturi sunt cele care oferă jocurilor atractivitatea vizuală. Încărcarea și afișarea imaginilor pe canvas funcționează diferit față de desenarea formelor geometrice, dar este simplu odată ce înțelegi procesul.

Trebuie să creezi un obiect `Image`, să încarci fișierul imagine (acest lucru se întâmplă asincron, adică "în fundal") și apoi să îl desenezi pe canvas odată ce este gata. Această abordare asigură că imaginile tale se afișează corect fără a bloca aplicația în timpul încărcării.

### Încărcarea de Bază a Imaginilor

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Ce se întâmplă în acest cod:**
- **Creăm** un obiect nou de tip Image pentru a stoca sprite-ul sau textura
- **Spunem** ce fișier imagine să încarce prin setarea sursei
- **Ascultăm** evenimentul de încărcare pentru a ști exact când imaginea este gata de utilizare

### O Modalitate Mai Bună de a Încărca Imagini

Iată o modalitate mai robustă de a gestiona încărcarea imaginilor pe care dezvoltatorii profesioniști o folosesc frecvent. Vom încorpora logica de încărcare a imaginilor într-o funcție bazată pe Promises – această abordare, popularizată odată cu standardizarea Promises în JavaScript ES6, face codul mai organizat și gestionează erorile cu grație:

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**Ce am făcut aici:**
- **Am încorporat** toată logica de încărcare a imaginilor într-un Promise pentru a o gestiona mai bine
- **Am adăugat** gestionarea erorilor care ne spune efectiv când ceva nu merge bine
- **Am folosit** sintaxa modernă async/await pentru că este mult mai ușor de citit
- **Am inclus** blocuri try/catch pentru a gestiona cu grație orice probleme de încărcare

Odată ce imaginile tale sunt încărcate, desenarea lor pe canvas este de fapt destul de simplă:

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**Să analizăm pas cu pas:**
- **Încărcăm** atât imaginile eroului, cât și ale monstrului în fundal folosind await
- **Luăm** elementul canvas și obținem contextul de redare 2D de care avem nevoie
- **Poziționăm** imaginea eroului chiar în centru folosind câteva calcule rapide de coordonate
- **Plasăm** imaginea monstrului în colțul din stânga sus pentru a începe formațiunea inamică
- **Prindem** orice erori care ar putea apărea în timpul încărcării sau redării

## Acum Este Timpul să Începi Construirea Jocului Tău

Acum vom pune totul împreună pentru a crea fundația vizuală a jocului tău spațial. Ai o înțelegere solidă a fundamentelor canvas-ului și a tehnicilor de încărcare a imaginilor, așa că această secțiune practică te va ghida prin construirea unui ecran complet de joc cu sprite-uri poziționate corect.

### Ce să Construiești

Vei construi o pagină web cu un element Canvas. Ar trebui să afișeze un ecran negru de `1024*768`. Ți-am oferit două imagini:

- Nava eroului

   ![Nava eroului](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.ro.png)

- 5*5 monștri

   ![Nava monstrului](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.ro.png)

### Pași Recomandați pentru Începerea Dezvoltării

Localizează fișierele de început care au fost create pentru tine în subfolderul `your-work`. Structura proiectului tău ar trebui să conțină:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Ce ai la dispoziție:**
- **Sprite-urile jocului** se află în folderul `assets/` pentru a păstra totul organizat
- **Fișierul principal HTML** configurează elementul canvas și pregătește totul
- **Un fișier JavaScript** unde vei scrie toată magia de redare a jocului
- **Un package.json** care configurează un server de dezvoltare pentru a putea testa local

Deschide acest folder în Visual Studio Code pentru a începe dezvoltarea. Vei avea nevoie de un mediu de dezvoltare local cu Visual Studio Code, NPM și Node.js instalate. Dacă nu ai `npm` configurat pe computerul tău, [iată cum să-l instalezi](https://www.npmjs.com/get-npm).

Pornește serverul de dezvoltare navigând la folderul `your-work`:

```bash
cd your-work
npm start
```

**Această comandă face câteva lucruri destul de interesante:**
- **Pornește** un server local la `http://localhost:5000` pentru a putea testa jocul
- **Servește** toate fișierele corect pentru ca browserul să le poată încărca
- **Monitorizează** fișierele pentru modificări, astfel încât să poți dezvolta fără probleme
- **Îți oferă** un mediu de dezvoltare profesional pentru a testa totul

> 💡 **Notă**: Browserul tău va afișa inițial o pagină goală – este normal! Pe măsură ce adaugi cod, reîmprospătează browserul pentru a vedea modificările. Această abordare iterativă de dezvoltare este similară cu modul în care NASA a construit computerul de ghidare Apollo – testând fiecare componentă înainte de a o integra în sistemul mai mare.

### Adaugă cod

Adaugă codul necesar în `your-work/app.js` pentru a finaliza următoarele sarcini:

1. **Desenează un canvas cu fundal negru**
   > 💡 **Cum să faci**: Găsește TODO în `/app.js` și adaugă doar două linii. Setează `ctx.fillStyle` pe negru, apoi folosește `ctx.fillRect()` începând de la (0,0) cu dimensiunile canvas-ului. Simplu!

2. **Încarcă texturile jocului**
   > 💡 **Cum să faci**: Folosește `await loadAsset()` pentru a încărca imaginile jucătorului și ale inamicilor. Stochează-le în variabile pentru a le putea folosi mai târziu. Amintește-ți – nu vor apărea până nu le desenezi efectiv!

3. **Desenează nava eroului în poziția de jos-centru**
   > 💡 **Cum să faci**: Folosește `ctx.drawImage()` pentru a poziționa eroul. Pentru coordonata x, încearcă `canvas.width / 2 - 45` pentru a-l centra, iar pentru coordonata y folosește `canvas.height - canvas.height / 4` pentru a-l plasa în zona de jos.

4. **Desenează o formațiune de 5×5 nave inamice**
   > 💡 **Cum să faci**: Găsește funcția `createEnemies` și configurează un buclă imbricată. Va trebui să faci câteva calcule pentru spațiere și poziționare, dar nu-ți face griji – îți voi arăta exact cum!

Mai întâi, stabilește constantele pentru o dispunere corectă a formațiunii inamice:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Să descompunem ce fac aceste constante:**
- **Setăm** 5 inamici pe rând și coloană (o grilă frumoasă de 5×5)
- **Definim** cât spațiu să punem între inamici pentru a nu părea înghesuiți
- **Calculăm** cât de lată va fi întreaga formațiune
- **Determinăm** unde să începem și să terminăm pentru ca formațiunea să fie centrată

Apoi, creează bucle imbricate pentru a desena formațiunea inamică:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Ce face această buclă imbricată:**
- Bucla exterioară **se deplasează** de la stânga la dreapta pe formațiunea noastră
- Bucla interioară **merge** de sus în jos pentru a crea rânduri ordonate
- **Desenăm** fiecare sprite inamic la coordonatele exacte x,y pe care le-am calculat
- Totul rămâne **uniform spațiat** pentru a arăta profesional și organizat

## Rezultat

Rezultatul final ar trebui să arate astfel:

![Ecran negru cu un erou și 5*5 monștri](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.ro.png)

## Soluție

Te rog să încerci să rezolvi singur mai întâi, dar dacă te blochezi, aruncă o privire la o [soluție](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)

---

## Provocarea GitHub Copilot Agent 🚀

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Îmbunătățește canvas-ul jocului spațial adăugând efecte vizuale și elemente interactive folosind tehnicile API-ului Canvas pe care le-ai învățat.

**Prompt:** Creează un fișier nou numit `enhanced-canvas.html` cu un canvas care afișează stele animate pe fundal, o bară de sănătate pulsantă pentru nava eroului și nave inamice care se mișcă încet în jos. Include cod JavaScript care desenează stele sclipitoare folosind poziții și opacități aleatorii, implementează o bară de sănătate care își schimbă culoarea în funcție de nivelul de sănătate (verde > galben > roșu) și animă navele inamice să se miște pe ecran cu viteze diferite.

Află mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## 🚀 Provocare

Ai învățat despre desenarea cu API-ul Canvas axat pe 2D; aruncă o privire la [API-ul WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API) și încearcă să desenezi un obiect 3D.

## Test după lecție

[Test după lecție](https://ff-quizzes.netlify.app/web/quiz/32)

## Recapitulare & Studiu Individual

Află mai multe despre API-ul Canvas [citind despre el](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Temă

[Joacă-te cu API-ul Canvas](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.