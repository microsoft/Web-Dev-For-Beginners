<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-25T00:42:07+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "sl"
}
-->
# Zgradite vesoljsko igro, 2. del: Narišite junaka in pošasti na platno

API za platno (Canvas API) je ena najmočnejših funkcij spletnega razvoja za ustvarjanje dinamične, interaktivne grafike neposredno v vašem brskalniku. V tej lekciji bomo prazni HTML element `<canvas>` spremenili v igričarski svet, poln junakov in pošasti. Platno si predstavljajte kot digitalno umetniško tablo, kjer koda postane vizualna.

Nadaljujemo tam, kjer smo končali v prejšnji lekciji, in se zdaj poglobimo v vizualne vidike. Naučili se boste, kako naložiti in prikazati igreče sprite, natančno pozicionirati elemente ter ustvariti vizualne temelje za vašo vesoljsko igro. To je most med statičnimi spletnimi stranmi in dinamičnimi, interaktivnimi izkušnjami.

Do konca te lekcije boste imeli popolno igričarsko sceno z vašim junakom, ki bo pravilno postavljen, ter formacije sovražnikov, pripravljene na boj. Razumeli boste, kako sodobne igre upodabljajo grafiko v brskalnikih, in pridobili veščine za ustvarjanje lastnih interaktivnih vizualnih izkušenj. Raziskujmo grafiko na platnu in oživimo vašo vesoljsko igro!

## Predhodni kviz

[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/31)

## Platno

Kaj točno je element `<canvas>`? To je rešitev HTML5 za ustvarjanje dinamične grafike in animacij v spletnih brskalnikih. Za razliko od običajnih slik ali videov, ki so statični, vam platno omogoča nadzor nad vsakim posameznim pikslom na zaslonu. To ga naredi popolnega za igre, vizualizacijo podatkov in interaktivno umetnost. Platno si predstavljajte kot programabilno risalno površino, kjer JavaScript postane vaš čopič.

Privzeto element platna na vaši strani izgleda kot prazen, prozoren pravokotnik. Toda prav v tem je potencial! Njegova prava moč se pokaže, ko uporabite JavaScript za risanje oblik, nalaganje slik, ustvarjanje animacij in omogočanje interakcij z uporabnikom. To je podobno kot pri pionirjih računalniške grafike v Bell Labs v 60-ih letih, ki so morali programirati vsak piksel, da so ustvarili prve digitalne animacije.

✅ Preberite [več o Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) na MDN.

Tukaj je, kako je običajno deklariran, kot del telesa strani:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Kaj ta koda počne:**
- **Nastavi** atribut `id`, da lahko v JavaScriptu sklicujete na ta specifični element platna
- **Določi** širino v pikselih za nadzor horizontalne velikosti platna
- **Ustvari** višino v pikselih za določitev vertikalnih dimenzij platna

## Risanje preproste geometrije

Zdaj, ko veste, kaj je element platna, raziščimo, kako dejansko risati na njem! Platno uporablja koordinatni sistem, ki vam je morda znan iz matematike, vendar ima eno pomembno posebnost, značilno za računalniško grafiko.

Platno uporablja kartezične koordinate z osjo x (horizontalno) in osjo y (vertikalno) za pozicioniranje vsega, kar narišete. Toda tukaj je ključna razlika: za razliko od koordinatnega sistema iz matematike se izhodiščna točka `(0,0)` začne v zgornjem levem kotu, pri čemer se vrednosti x povečujejo, ko se premikate desno, in vrednosti y povečujejo, ko se premikate navzdol. Ta pristop izvira iz zgodnjih računalniških zaslonov, kjer so elektronski žarki skenirali od zgoraj navzdol, kar je zgornji levi kot naredilo za naravno izhodišče.

![mreža platna](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.sl.png)
> Slika iz [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Za risanje na element platna sledite istemu tristranskemu procesu, ki tvori osnovo vseh grafičnih elementov na platnu. Ko to storite nekajkrat, postane to povsem naravno:

1. **Pridobite referenco** na vaš element platna iz DOM-a (tako kot katerikoli drug HTML element)
2. **Pridobite 2D kontekst za upodabljanje** – ta zagotavlja vse metode za risanje
3. **Začnite risati!** Uporabite vgrajene metode konteksta za ustvarjanje vaše grafike

Tukaj je, kako to izgleda v kodi:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Razčlenimo to korak za korakom:**
- **Pridobimo** naš element platna z uporabo njegovega ID-ja in ga shranimo v spremenljivko
- **Pridobimo** 2D kontekst za upodabljanje – to je naš komplet orodij za risanje
- **Povemo** platnu, da želimo stvari zapolniti z rdečo barvo z uporabo lastnosti `fillStyle`
- **Narišemo** pravokotnik, ki se začne v zgornjem levem kotu (0,0) in je širok ter visok 200 pikslov

✅ Canvas API se večinoma osredotoča na 2D oblike, vendar lahko na spletni strani narišete tudi 3D elemente; za to lahko uporabite [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

S Canvas API lahko narišete vse vrste stvari, kot so:

- **Geometrijske oblike**, že smo pokazali, kako narisati pravokotnik, vendar je še veliko več, kar lahko narišete.
- **Besedilo**, lahko narišete besedilo s katero koli pisavo in barvo, ki jo želite.
- **Slike**, lahko narišete sliko na podlagi slikovne datoteke, kot je .jpg ali .png.

✅ Poskusite! Zdaj, ko veste, kako narisati pravokotnik, ali lahko na stran narišete krog? Oglejte si nekaj zanimivih risb na platnu na CodePen. Tukaj je [posebej impresiven primer](https://codepen.io/dissimulate/pen/KrAwx).

## Nalaganje in risanje slikovnih virov

Risanje osnovnih oblik je koristno za začetek, vendar večina iger potrebuje prave slike! Sprite, ozadja in teksture so tisto, kar daje igram vizualno privlačnost. Nalaganje in prikazovanje slik na platnu deluje drugače kot risanje geometrijskih oblik, vendar je preprosto, ko enkrat razumete postopek.

Ustvariti moramo objekt `Image`, naložiti našo slikovno datoteko (to se zgodi asinhrono, kar pomeni "v ozadju"), in jo nato narisati na platno, ko je pripravljena. Ta pristop zagotavlja, da se vaše slike pravilno prikažejo, ne da bi blokirale vašo aplikacijo med nalaganjem.

### Osnovno nalaganje slik

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Kaj se dogaja v tej kodi:**
- **Ustvarimo** povsem nov objekt Image za shranjevanje našega sprite ali teksture
- **Povemo**, katero slikovno datoteko naj naloži, tako da nastavimo pot do vira
- **Poslušamo** dogodek nalaganja, da vemo, kdaj je slika pripravljena za uporabo

### Boljši način nalaganja slik

Tukaj je bolj robusten način za obravnavo nalaganja slik, ki ga pogosto uporabljajo profesionalni razvijalci. Logiko nalaganja slik bomo ovili v funkcijo, ki temelji na obljubah (Promises) – ta pristop, populariziran, ko so obljube postale standard v ES6, naredi vašo kodo bolj organizirano in elegantno obravnava napake:

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

**Kaj smo tukaj naredili:**
- **Ovili** vso logiko nalaganja slik v obljubo, da jo lahko bolje obravnavamo
- **Dodali** obravnavo napak, ki nam dejansko pove, kdaj gre kaj narobe
- **Uporabili** sodobno sintakso async/await, ker je veliko bolj pregledna
- **Vključili** bloke try/catch za elegantno obravnavo morebitnih težav pri nalaganju

Ko so vaše slike naložene, je njihovo risanje na platno dejansko precej preprosto:

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

**Razčlenimo to korak za korakom:**
- **Naložimo** tako slike junaka kot pošasti v ozadju z uporabo await
- **Pridobimo** naš element platna in 2D kontekst za upodabljanje, ki ga potrebujemo
- **Pozicioniramo** sliko junaka točno na sredino z nekaj hitre matematične logike
- **Postavimo** sliko pošasti v zgornji levi kot, da začnemo formacijo sovražnikov
- **Ujamemo** morebitne napake, ki se lahko pojavijo med nalaganjem ali upodabljanjem

## Zdaj je čas, da začnete graditi svojo igro

Zdaj bomo vse skupaj združili, da ustvarimo vizualne temelje vaše vesoljske igre. Imate trdno razumevanje osnov platna in tehnik nalaganja slik, zato vas bo ta praktični del vodil skozi gradnjo popolnega igričarskega zaslona z ustrezno pozicioniranimi spriti.

### Kaj zgraditi

Zgradili boste spletno stran z elementom platna. Prikazati mora črn zaslon velikosti `1024*768`. Na voljo imate dve sliki:

- Junakov vesoljski ladji

   ![Junakova ladja](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.sl.png)

- 5*5 pošasti

   ![Ladja pošasti](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.sl.png)

### Priporočeni koraki za začetek razvoja

Poiščite začetne datoteke, ki so bile ustvarjene za vas v podmapi `your-work`. Struktura vašega projekta naj vsebuje:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Kaj imate na voljo:**
- **Sprite igre** se nahajajo v mapi `assets/`, da je vse organizirano
- **Vaša glavna HTML datoteka** pripravi element platna in vse nastavi
- **JavaScript datoteka**, kjer boste napisali vso magijo za upodabljanje igre
- **Datoteka package.json**, ki nastavi razvojni strežnik, da lahko lokalno testirate

Odprite to mapo v Visual Studio Code, da začnete z razvojem. Potrebovali boste lokalno razvojno okolje z nameščenimi Visual Studio Code, NPM in Node.js. Če na vašem računalniku nimate nastavljenega `npm`, [tukaj je, kako ga namestiti](https://www.npmjs.com/get-npm).

Zaženite svoj razvojni strežnik tako, da se premaknete v mapo `your-work`:

```bash
cd your-work
npm start
```

**Ta ukaz naredi nekaj precej kul stvari:**
- **Zažene** lokalni strežnik na `http://localhost:5000`, da lahko testirate svojo igro
- **Postreže** vse vaše datoteke pravilno, da jih brskalnik lahko naloži
- **Spremlja** vaše datoteke za spremembe, da lahko gladko razvijate
- **Omogoča** profesionalno razvojno okolje za testiranje vsega

> 💡 **Opomba**: Vaš brskalnik bo sprva prikazal prazno stran – to je pričakovano! Ko dodate kodo, osvežite brskalnik, da vidite spremembe. Ta iterativni razvojni pristop je podoben načinu, kako je NASA zgradila računalnik za vodenje Apolla – testiranje vsake komponente pred integracijo v večji sistem.

### Dodajte kodo

Dodajte zahtevano kodo v `your-work/app.js`, da dokončate naslednje naloge:

1. **Narišite platno s črnim ozadjem**
   > 💡 **Kako**: Poiščite TODO v `/app.js` in dodajte le dve vrstici. Nastavite `ctx.fillStyle` na črno, nato uporabite `ctx.fillRect()` od (0,0) z dimenzijami vašega platna. Enostavno!

2. **Naložite teksture igre**
   > 💡 **Kako**: Uporabite `await loadAsset()` za nalaganje slik igralca in sovražnika. Shranite jih v spremenljivke, da jih boste lahko kasneje uporabili. Ne pozabite – ne bodo se prikazale, dokler jih dejansko ne narišete!

3. **Narišite junakovo ladjo na sredino spodnjega dela zaslona**
   > 💡 **Kako**: Uporabite `ctx.drawImage()` za pozicioniranje junaka. Za x-koordinato poskusite `canvas.width / 2 - 45`, da ga centrirate, za y-koordinato pa uporabite `canvas.height - canvas.height / 4`, da ga postavite v spodnji del.

4. **Narišite formacijo 5×5 sovražnih ladij**
   > 💡 **Kako**: Poiščite funkcijo `createEnemies` in nastavite ugnezdeno zanko. Potrebovali boste nekaj matematičnih izračunov za razmik in pozicioniranje, vendar brez skrbi – pokazal vam bom, kako!

Najprej določite konstante za pravilno postavitev formacije sovražnikov:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Razčlenimo, kaj te konstante počnejo:**
- **Nastavimo** 5 sovražnikov na vrstico in stolpec (lepa mreža 5×5)
- **Določimo**, koliko prostora postaviti med sovražnike, da ne izgledajo preveč natlačeni
- **Izračunamo**, kako široka bo celotna formacija
- **Ugotovimo**, kje začeti in končati, da bo formacija videti centrirana

Nato ustvarite ugnezdene zanke za risanje formacije sovražnikov:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Kaj ta ugnezdena zanka počne:**
- Zunanja zanka **premika** od leve proti desni čez našo formacijo
- Notranja zanka **gre** od zgoraj navzdol, da ustvari urejene vrste
- **Narišemo** vsak sovražni sprite na točno določenih x,y koordinatah, ki smo jih izračunali
- Vse ostane **enakomerno razporejeno**, da izgleda profesionalno in organizirano

## Rezultat

Končni rezultat bi moral izgledati takole:

![Črn zaslon z junakom in 5×5 pošastmi](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.sl.png)

## Rešitev

Najprej poskusite sami rešiti nalogo, če pa se zataknete, si oglejte [rešitev](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## Izziv GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Izboljšajte platno vaše vesoljske igre z dodajanjem vizualnih učinkov in interaktivnih elementov z uporabo tehnik Canvas API, ki ste se jih naučili.

**Navodilo:** Ustvarite novo datoteko z imenom `enhanced-canvas.html` s platnom, ki prikazuje animirane zvezde v ozadju, utripajočo vrstico zdravja za junakovo ladjo in sovražne ladje, ki se počasi premikajo navzdol. Vključite JavaScript kodo, ki riše utripajoče zvezde z naključnimi pozicijami in prosojnostjo, implementira vrstico zdravja, ki spreminja barvo glede na raven zdravja (zelena > rumena > rdeča), ter animira sovražne ladje, da se premikajo po zaslonu z različnimi hitrostmi.

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.

## 🚀 Izziv

Naučili ste se risanja z 2D osredotočenim Canvas API; poglejte si [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) in poskusite narisati 3D objekt.

## Kviz po predavanju

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/32)

## Pregled in samostojno učenje

Preberite več o Canvas API [tukaj](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Naloga

[Preizkusite Canvas API](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatski prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.