<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "41be8d35e7f30aa9dad10773c35e89c4",
  "translation_date": "2025-08-28T03:59:10+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "hu"
}
-->
# Űrjáték készítése 2. rész: Hős és szörnyek rajzolása a vászonra

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/31)

## A vászon (Canvas)

A vászon egy HTML elem, amely alapértelmezetten nem tartalmaz semmilyen tartalmat; egy üres lap. Neked kell tartalommal megtöltened, azaz rajzolnod rá.

✅ Olvass [többet a Canvas API-ról](https://developer.mozilla.org/docs/Web/API/Canvas_API) az MDN-en.

Általában így deklaráljuk, az oldal törzsének részeként:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

A fenti példában beállítjuk az `id`, `width` és `height` értékeket.

- `id`: ezt állítsd be, hogy hivatkozni tudj rá, amikor interakcióba lépsz vele.
- `width`: ez az elem szélessége.
- `height`: ez az elem magassága.

## Egyszerű geometriai alakzatok rajzolása

A vászon egy derékszögű koordináta-rendszert használ a rajzoláshoz. Ezért x- és y-tengelyeket használ annak kifejezésére, hogy valami hol helyezkedik el. A `0,0` hely a bal felső sarok, míg a jobb alsó sarok az, amit a vászon SZÉLESSÉGÉNEK és MAGASSÁGÁNAK állítottál be.

![a vászon rácsa](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.hu.png)  
> Kép forrása: [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Ahhoz, hogy rajzolni tudj a vászon elemre, a következő lépéseket kell végrehajtanod:

1. **Szerezz egy hivatkozást** a vászon elemre.
2. **Szerezz egy hivatkozást** a vászon elemhez tartozó kontextus elemre.
3. **Hajts végre egy rajzolási műveletet** a kontextus elem segítségével.

A fenti lépésekhez tartozó kód általában így néz ki:

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

✅ A Canvas API főként 2D alakzatokra fókuszál, de 3D elemeket is rajzolhatsz egy weboldalra; ehhez például a [WebGL API-t](https://developer.mozilla.org/docs/Web/API/WebGL_API) használhatod.

A Canvas API-val rengeteg dolgot rajzolhatsz, például:

- **Geometriai alakzatokat**: már megmutattuk, hogyan lehet téglalapot rajzolni, de ennél sokkal többet is lehet.
- **Szöveget**: bármilyen betűtípussal és színnel rajzolhatsz szöveget.
- **Képeket**: például .jpg vagy .png formátumú képeket is megjeleníthetsz.

✅ Próbáld ki! Már tudod, hogyan kell téglalapot rajzolni, meg tudsz rajzolni egy kört is az oldalon? Nézd meg néhány érdekes Canvas rajzot a CodePen-en. Itt van egy [különösen lenyűgöző példa](https://codepen.io/dissimulate/pen/KrAwx).

## Kép eszköz betöltése és megjelenítése

Egy kép eszközt úgy tölthetsz be, hogy létrehozol egy `Image` objektumot, és beállítod a `src` tulajdonságát. Ezután figyelned kell a `load` eseményt, hogy tudd, mikor áll készen a használatra. A kód így néz ki:

### Eszköz betöltése

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Eszköz betöltési minta

Ajánlott a fentieket egy olyan szerkezetbe csomagolni, mint az alábbi, hogy könnyebb legyen használni, és csak akkor próbálj manipulálni vele, amikor teljesen betöltődött:

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

Ahhoz, hogy játékeszközöket rajzolj a képernyőre, a kódod így nézhet ki:

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

## Most kezdheted el a játékod építését

### Mit kell építeni

Egy weboldalt kell készítened egy vászon elemmel. A vászonnak egy fekete képernyőt kell megjelenítenie `1024*768` méretben. Két képet biztosítottunk számodra:

- Hős hajó

   ![Hős hajó](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.hu.png)

- 5*5 szörny

   ![Szörny hajó](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.hu.png)

### Ajánlott lépések a fejlesztés megkezdéséhez

Keresd meg a `your-work` almappában létrehozott fájlokat. Ezeknek a következőket kell tartalmazniuk:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Nyisd meg ennek a mappának a másolatát a Visual Studio Code-ban. Helyi fejlesztési környezetet kell beállítanod, lehetőleg Visual Studio Code-dal, NPM-mel és Node-dal telepítve. Ha még nincs `npm` telepítve a számítógépeden, [itt van, hogyan teheted meg](https://www.npmjs.com/get-npm).

Indítsd el a projektedet úgy, hogy navigálsz a `your_work` mappába:

```bash
cd your-work
npm start
```

A fenti parancs egy HTTP szervert indít el a `http://localhost:5000` címen. Nyiss meg egy böngészőt, és írd be ezt a címet. Egyelőre egy üres oldal jelenik meg, de ez hamarosan megváltozik.

> Megjegyzés: a képernyőn történő változások megtekintéséhez frissítsd a böngészőt.

### Kód hozzáadása

Add hozzá a szükséges kódot a `your-work/app.js` fájlhoz az alábbiak megoldásához:

1. **Rajzolj** egy vásznat fekete háttérrel  
   > Tipp: adj hozzá két sort a megfelelő TODO alá az `/app.js` fájlban, beállítva a `ctx` elemet feketére, a bal felső koordinátákat 0,0-ra, a magasságot és szélességet pedig a vászon méretéhez igazítva.
2. **Töltsd be** a textúrákat  
   > Tipp: add hozzá a játékos és az ellenség képeit az `await loadTexture` használatával, és add meg a kép elérési útját. Egyelőre még nem fogod látni őket a képernyőn!
3. **Rajzold meg** a hőst a képernyő közepén, az alsó felében  
   > Tipp: használd a `drawImage` API-t a heroImg képernyőre rajzolásához, beállítva a `canvas.width / 2 - 45` és `canvas.height - canvas.height / 4)` értékeket.
4. **Rajzolj** 5*5 szörnyet  
   > Tipp: Most már kikommentelheted a kódot, hogy az ellenségeket a képernyőre rajzolja. Ezután menj a `createEnemies` függvényhez, és építsd ki.

   Először állíts be néhány konstansot:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    majd hozz létre egy ciklust, amely az ellenségek tömbjét rajzolja a képernyőre:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Eredmény

A kész eredménynek így kell kinéznie:

![Fekete képernyő hőssel és 5*5 szörnnyel](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.hu.png)

## Megoldás

Próbáld meg először magad megoldani, de ha elakadsz, nézd meg a [megoldást](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## 🚀 Kihívás

Megtanultál rajzolni a 2D-re fókuszáló Canvas API-val; nézd meg a [WebGL API-t](https://developer.mozilla.org/docs/Web/API/WebGL_API), és próbálj meg egy 3D objektumot rajzolni.

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/32)

## Áttekintés és önálló tanulás

Tudj meg többet a Canvas API-ról, ha [elolvasod róla](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Feladat

[Játssz a Canvas API-val](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.