<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "41be8d35e7f30aa9dad10773c35e89c4",
  "translation_date": "2025-08-27T22:32:00+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "sl"
}
-->
# Zgradite vesoljsko igro, 2. del: Narišite junaka in pošasti na platno

## Predhodni kviz

[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/31)

## Platno

Platno je HTML element, ki privzeto nima vsebine; je prazna površina. Na njem morate risati, da ga zapolnite.

✅ Preberite [več o API-ju za platno](https://developer.mozilla.org/docs/Web/API/Canvas_API) na MDN.

Tukaj je primer, kako je običajno deklarirano kot del telesa strani:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Zgoraj nastavljamo `id`, `width` in `height`.

- `id`: nastavite to, da lahko pridobite referenco, ko želite z njim interagirati.
- `width`: to je širina elementa.
- `height`: to je višina elementa.

## Risanje preproste geometrije

Platno uporablja kartezični koordinatni sistem za risanje. Zato uporablja x-os in y-os za izražanje lokacije nečesa. Lokacija `0,0` je zgornji levi položaj, spodnji desni pa je tisto, kar ste nastavili kot ŠIRINO in VIŠINO platna.

![mreža platna](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.sl.png)
> Slika iz [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Za risanje na element platna morate slediti naslednjim korakom:

1. **Pridobite referenco** na element platna.
1. **Pridobite referenco** na element Context, ki se nahaja na elementu platna.
1. **Izvedite operacijo risanja** z uporabo elementa Context.

Koda za zgornje korake običajno izgleda takole:

```javascript
// draws a red rectangle
//1. get the canvas reference
canvas = document.getElementById("myCanvas");

//2. set the context to 2D to draw basic shapes
ctx = canvas.getContext("2d");

//3. fill it with the color red
ctx.fillStyle = 'red';

//4. and draw a rectangle with these parameters, setting location and size
ctx.fillRect(0,0, 200, 200) // x,y,width, height
```

✅ API za platno se večinoma osredotoča na 2D oblike, vendar lahko na spletno stran narišete tudi 3D elemente; za to lahko uporabite [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

S pomočjo API-ja za platno lahko narišete različne stvari, kot so:

- **Geometrijske oblike**, že smo pokazali, kako narisati pravokotnik, vendar je še veliko več, kar lahko narišete.
- **Besedilo**, lahko narišete besedilo s katero koli pisavo in barvo, ki jo želite.
- **Slike**, lahko narišete sliko na podlagi slikovnega vira, kot je .jpg ali .png.

✅ Poskusite! Zdaj, ko veste, kako narisati pravokotnik, ali lahko narišete krog na stran? Oglejte si nekaj zanimivih risb na platnu na CodePen. Tukaj je [posebej impresiven primer](https://codepen.io/dissimulate/pen/KrAwx).

## Naložite in narišite slikovni vir

Slikovni vir naložite tako, da ustvarite objekt `Image` in nastavite njegovo lastnost `src`. Nato poslušate dogodek `load`, da veste, kdaj je pripravljen za uporabo. Koda izgleda takole:

### Nalaganje vira

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Vzorec nalaganja vira

Priporočljivo je, da zgornje zavijete v konstrukcijo, kot je prikazano spodaj, da je lažje za uporabo in da poskušate z njim manipulirati šele, ko je popolnoma naložen:

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // image loaded and ready to be used
      resolve(img);
    }
  })
}

// use like so

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

Za risanje igralnih virov na zaslon bi vaša koda izgledala takole:

```javascript
async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
  ctx.drawImage(monsterImg, 0,0);
}
```

## Zdaj je čas, da začnete graditi svojo igro

### Kaj zgraditi

Zgradili boste spletno stran z elementom platna. Prikazati mora črn zaslon `1024*768`. Na voljo imate dve sliki:

- Junakov ladja

   ![Junakov ladja](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.sl.png)

- 5*5 pošasti

   ![Pošastna ladja](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.sl.png)

### Priporočeni koraki za začetek razvoja

Poiščite datoteke, ki so bile ustvarjene za vas v podmapi `your-work`. Vsebujejo naj naslednje:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Odprite kopijo te mape v Visual Studio Code. Potrebujete lokalno razvojno okolje, po možnosti z Visual Studio Code, NPM in Node nameščenimi. Če na vašem računalniku ni nastavljen `npm`, [tukaj je, kako to storiti](https://www.npmjs.com/get-npm).

Začnite svoj projekt tako, da se premaknete v mapo `your_work`:

```bash
cd your-work
npm start
```

Zgornje bo zagnalo HTTP strežnik na naslovu `http://localhost:5000`. Odprite brskalnik in vnesite ta naslov. Trenutno je prazna stran, vendar se bo to spremenilo.

> Opomba: za ogled sprememb na zaslonu osvežite brskalnik.

### Dodajte kodo

Dodajte potrebno kodo v `your-work/app.js`, da rešite spodnje:

1. **Narišite** platno s črnim ozadjem
   > namig: dodajte dve vrstici pod ustrezen TODO v `/app.js`, nastavite element `ctx`, da bo črn, zgornje/leve koordinate na 0,0 ter višino in širino, da bosta enaki platnu.
2. **Naložite** teksture
   > namig: dodajte slike igralca in sovražnika z uporabo `await loadTexture` in podajte pot do slike. Na zaslonu jih še ne boste videli!
3. **Narišite** junaka na sredino zaslona v spodnji polovici
   > namig: uporabite API `drawImage`, da narišete heroImg na zaslon, nastavite `canvas.width / 2 - 45` in `canvas.height - canvas.height / 4)`;
4. **Narišite** 5*5 pošasti
   > namig: zdaj lahko odstranite komentarje iz kode za risanje sovražnikov na zaslon. Nato pojdite v funkcijo `createEnemies` in jo dokončajte.

   Najprej nastavite nekaj konstant:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    nato ustvarite zanko za risanje matrike pošasti na zaslon:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Rezultat

Končni rezultat naj izgleda takole:

![Črn zaslon z junakom in 5*5 pošasti](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.sl.png)

## Rešitev

Najprej poskusite rešiti sami, vendar če se zataknete, si oglejte [rešitev](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## 🚀 Izziv

Naučili ste se risanja z API-jem za platno, ki je osredotočen na 2D; poglejte si [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) in poskusite narisati 3D objekt.

## Zaključni kviz

[Zaključni kviz](https://ff-quizzes.netlify.app/web/quiz/32)

## Pregled in samostojno učenje

Več o API-ju za platno se naučite z [branjem o njem](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Naloga

[Preizkusite API za platno](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.