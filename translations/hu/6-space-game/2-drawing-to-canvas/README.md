<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-24T20:31:07+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "hu"
}
-->
# Űrjáték készítése 2. rész: Hős és szörnyek rajzolása a vászonra

A Canvas API a webfejlesztés egyik legerősebb eszköze, amely lehetővé teszi dinamikus, interaktív grafikák létrehozását közvetlenül a böngészőben. Ebben a leckében átalakítjuk azt az üres HTML `<canvas>` elemet egy játékvilággá, tele hősökkel és szörnyekkel. Gondolj a vászonra úgy, mint a digitális rajztábládra, ahol a kód vizuálissá válik.

Az előző leckében tanultakra építünk, és most a vizuális aspektusokba merülünk el. Megtanulod, hogyan töltsd be és jelenítsd meg a játék sprite-okat, hogyan helyezd el pontosan az elemeket, és hogyan hozd létre az űrjátékod vizuális alapját. Ez áthidalja a statikus weboldalak és a dinamikus, interaktív élmények közötti szakadékot.

A lecke végére egy teljes játékjelenetet fogsz létrehozni, ahol a hős hajó helyesen van pozícionálva, és az ellenséges formációk készen állnak a csatára. Megérted, hogyan renderelik a modern játékok a grafikát a böngészőkben, és készségeket szerzel saját interaktív vizuális élmények létrehozásához. Fedezzük fel a vászon grafikát, és keltsük életre az űrjátékodat!

## Előzetes kvíz

[Előzetes kvíz](https://ff-quizzes.netlify.app/web/quiz/31)

## A vászon

Mi is pontosan ez a `<canvas>` elem? Ez az HTML5 megoldása dinamikus grafikák és animációk létrehozására webes böngészőkben. A szokásos képekkel vagy videókkal ellentétben, amelyek statikusak, a vászon pixel szintű irányítást biztosít minden felett, ami a képernyőn megjelenik. Ez tökéletes játékokhoz, adatvizualizációkhoz és interaktív művészethez. Gondolj rá úgy, mint egy programozható rajzfelületre, ahol a JavaScript válik az ecseteddé.

Alapértelmezés szerint egy vászon elem egy üres, átlátszó téglalapként jelenik meg az oldaladon. De itt rejlik az igazi lehetőség! Az igazi ereje akkor mutatkozik meg, amikor JavaScript segítségével rajzolsz formákat, töltesz be képeket, hozol létre animációkat, és teszed azokat interaktívvá a felhasználói interakciók révén. Ez hasonló ahhoz, ahogyan a korai számítógépes grafikai úttörők a Bell Labs-nál az 1960-as években minden pixelt programozniuk kellett az első digitális animációk létrehozásához.

✅ Olvass [többet a Canvas API-ról](https://developer.mozilla.org/docs/Web/API/Canvas_API) az MDN-en.

Így szokásosan deklarálják, az oldal testének részeként:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Mit csinál ez a kód:**
- **Beállítja** az `id` attribútumot, hogy JavaScriptben hivatkozhass erre a konkrét vászon elemre
- **Meghatározza** a szélességet pixelben, hogy szabályozza a vászon vízszintes méretét
- **Megállapítja** a magasságot pixelben, hogy meghatározza a vászon függőleges dimenzióit

## Egyszerű geometria rajzolása

Most, hogy tudod, mi a vászon elem, nézzük meg, hogyan lehet ténylegesen rajzolni rá! A vászon egy koordináta rendszert használ, amely ismerős lehet a matematika órákról, de van egy fontos csavar, amely kifejezetten a számítógépes grafikára jellemző.

A vászon kartéziánus koordinátákat használ egy x-tengellyel (vízszintes) és egy y-tengellyel (függőleges), hogy pozícionálja mindazt, amit rajzolsz. De itt a kulcsfontosságú különbség: a matematikai órák koordináta rendszerével ellentétben az origó pont `(0,0)` a bal felső sarokban kezdődik, az x-értékek jobbra haladva növekednek, az y-értékek pedig lefelé haladva növekednek. Ez az 1960-as évek korai számítógépes kijelzőiből ered, ahol az elektronnyalábok felülről lefelé pásztáztak, így a bal felső sarok lett a természetes kiindulópont.

![a vászon rácsa](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.hu.png)
> Kép az [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) oldalról

Ahhoz, hogy rajzolj a vászon elemre, kövesd ugyanazt a háromlépéses folyamatot, amely minden vászon grafika alapját képezi. Ha ezt néhányszor megcsinálod, természetessé válik:

1. **Szerezz egy hivatkozást** a vászon elemedre a DOM-ból (pont úgy, mint bármely más HTML elemre)
2. **Szerezd meg a 2D renderelési kontextust** – ez biztosítja az összes rajzolási módszert
3. **Kezdj el rajzolni!** Használd a kontextus beépített módszereit a grafikáid létrehozásához

Így néz ki ez kódban:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Lépésről lépésre:**
- **Megfogjuk** a vászon elemet az ID-jával, és elmentjük egy változóba
- **Megkapjuk** a 2D renderelési kontextust – ez a rajzolási eszköztárunk
- **Megmondjuk** a vászonnak, hogy pirossal akarunk kitölteni dolgokat a `fillStyle` tulajdonság használatával
- **Rajzolunk** egy téglalapot a bal felső sarokból (0,0), amely 200 pixel széles és magas

✅ A Canvas API főként 2D formákra összpontosít, de 3D elemeket is rajzolhatsz egy weboldalra; ehhez használhatod a [WebGL API-t](https://developer.mozilla.org/docs/Web/API/WebGL_API).

A Canvas API-val rengeteg dolgot rajzolhatsz, például:

- **Geometriai formák**, már megmutattuk, hogyan rajzolj téglalapot, de sok más formát is rajzolhatsz.
- **Szöveg**, bármilyen betűtípussal és színnel rajzolhatsz szöveget.
- **Képek**, rajzolhatsz képet egy kép eszközből, például .jpg vagy .png formátumból.

✅ Próbáld ki! Tudod, hogyan kell téglalapot rajzolni, meg tudsz rajzolni egy kört az oldalra? Nézz meg néhány érdekes Canvas rajzot a CodePen-en. Itt van egy [különösen lenyűgöző példa](https://codepen.io/dissimulate/pen/KrAwx).

## Kép eszköz betöltése és rajzolása

Az alapvető formák rajzolása hasznos a kezdéshez, de a legtöbb játékhoz valódi képek kellenek! A sprite-ok, háttérképek és textúrák adják a játékok vizuális vonzerejét. A képek betöltése és megjelenítése a vásznon eltér a geometriai formák rajzolásától, de egyszerű, ha megérted a folyamatot.

Létre kell hoznunk egy `Image` objektumot, betölteni a kép fájlt (ez aszinkron módon történik, azaz "a háttérben"), majd a vászonra rajzolni, amint készen áll. Ez a megközelítés biztosítja, hogy a képek megfelelően jelenjenek meg anélkül, hogy blokkolnák az alkalmazást a betöltés közben.

### Alapvető kép betöltés

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Mi történik ebben a kódban:**
- **Létrehozunk** egy vadonatúj Image objektumot, hogy tároljuk a sprite-ot vagy textúrát
- **Megmondjuk**, melyik kép fájlt töltsük be a forrás útvonal beállításával
- **Figyelünk** a betöltési eseményre, hogy pontosan tudjuk, mikor áll készen a kép használatra

### Jobb módja a képek betöltésének

Íme egy robusztusabb módja a kép betöltésének, amelyet a profi fejlesztők gyakran használnak. A kép betöltését egy Promise-alapú függvénybe csomagoljuk – ez a megközelítés, amelyet a JavaScript Promises szabványossá válása óta népszerűsítettek az ES6-ban, rendezettebbé teszi a kódot, és elegánsan kezeli a hibákat:

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

**Mit tettünk itt:**
- **Becsomagoltuk** az összes kép betöltési logikát egy Promise-ba, hogy jobban kezeljük
- **Hozzáadtunk** hiba kezelést, amely ténylegesen megmondja, ha valami elromlik
- **Használtuk** a modern async/await szintaxist, mert sokkal olvashatóbb
- **Beépítettük** a try/catch blokkokat, hogy elegánsan kezeljük a betöltési problémákat

Miután a képek betöltődtek, a vászonra rajzolásuk valójában elég egyszerű:

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

**Lépésről lépésre:**
- **Betöltjük** a hős és szörny képeket a háttérben await segítségével
- **Megfogjuk** a vászon elemet, és megszerezzük a szükséges 2D renderelési kontextust
- **Pozícionáljuk** a hős képet középre néhány gyors koordináta matematikával
- **Elhelyezzük** a szörny képet a bal felső sarokban, hogy elkezdjük az ellenséges formációt
- **Elkapjuk** az esetleges hibákat, amelyek a betöltés vagy renderelés során történhetnek

## Most kezdj el játékot építeni

Most mindent összeállítunk, hogy létrehozzuk az űrjátékod vizuális alapját. Szilárd megértésed van a vászon alapjairól és a kép betöltési technikákról, így ez a gyakorlati rész végigvezet egy teljes játék képernyő létrehozásán, megfelelően pozícionált sprite-okkal.

### Mit építs

Hozz létre egy weboldalt egy vászon elemmel. Egy fekete képernyőt kell megjelenítenie `1024*768` méretben. Két képet biztosítottunk számodra:

- Hős hajó

   ![Hős hajó](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.hu.png)

- 5*5 szörnyek

   ![Szörny hajó](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.hu.png)

### Ajánlott lépések a fejlesztés megkezdéséhez

Keressétek meg az előkészített fájlokat, amelyeket a `your-work` almappában hoztunk létre. A projekt struktúrája a következőket tartalmazza:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Ezekkel dolgozol:**
- **Játék sprite-ok** az `assets/` mappában, hogy minden rendezett maradjon
- **A fő HTML fájlod** előkészíti a vászon elemet és mindent beállít
- **Egy JavaScript fájl**, ahol megírod az összes játék renderelési varázslatot
- **Egy package.json**, amely beállít egy fejlesztői szervert, hogy helyben tesztelhess

Nyisd meg ezt a mappát a Visual Studio Code-ban, hogy elkezdhesd a fejlesztést. Szükséged lesz egy helyi fejlesztői környezetre, amelyben Visual Studio Code, NPM és Node.js van telepítve. Ha nincs `npm` beállítva a számítógépeden, [itt van, hogyan telepítsd](https://www.npmjs.com/get-npm).

Indítsd el a fejlesztői szervert a `your-work` mappában:

```bash
cd your-work
npm start
```

**Ez a parancs néhány elég menő dolgot csinál:**
- **Elindít** egy helyi szervert a `http://localhost:5000` címen, hogy tesztelhesd a játékot
- **Kiszolgálja** az összes fájlodat megfelelően, hogy a böngésződ helyesen betölthesse őket
- **Figyeli** a fájljaid változásait, hogy zökkenőmentesen fejleszthess
- **Professzionális fejlesztői környezetet** biztosít a teszteléshez

> 💡 **Megjegyzés**: A böngésződ kezdetben üres oldalt fog mutatni – ez várható! Ahogy hozzáadsz kódot, frissítsd a böngészőt, hogy lásd a változásokat. Ez az iteratív fejlesztési megközelítés hasonló ahhoz, ahogyan a NASA építette az Apollo irányítógépet – minden komponenst tesztelve, mielőtt integrálták volna a nagyobb rendszerbe.

### Kód hozzáadása

Add hozzá a szükséges kódot a `your-work/app.js` fájlhoz, hogy elvégezd a következő feladatokat:

1. **Rajzolj egy vásznat fekete háttérrel**
   > 💡 **Így csináld**: Keresd meg a TODO-t az `/app.js` fájlban, és adj hozzá csak két sort. Állítsd be a `ctx.fillStyle`-t feketére, majd használd a `ctx.fillRect()`-et (0,0) kezdőponttal és a vászon méreteivel. Egyszerű!

2. **Játék textúrák betöltése**
   > 💡 **Így csináld**: Használd az `await loadAsset()`-et a játékos és ellenség képek betöltéséhez. Tárold őket változókban, hogy később használni tudd őket. Ne feledd – nem fognak megjelenni, amíg ténylegesen nem rajzolod őket!

3. **Rajzold meg a hős hajót középen, az alsó pozícióban**
   > 💡 **Így csináld**: Használd a `ctx.drawImage()`-et a hős pozícionálásához. Az x-koordinátához próbáld ki a `canvas.width / 2 - 45`-öt, hogy középre helyezd, és az y-koordinátához használd a `canvas.height - canvas.height / 4`-et, hogy az alsó területre helyezd.

4. **Rajzolj egy 5×5 ellenséges hajó formációt**
   > 💡 **Így csináld**: Keresd meg a `createEnemies` függvényt, és állíts be egy beágyazott ciklust. Néhány matematikai számítást kell végezned a távolság és pozíció meghatározásához, de ne aggódj – pontosan megmutatom, hogyan!

Először állíts be konstansokat a megfelelő ellenséges formáció elrendezéséhez:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Mit csinálnak ezek a konstansok:**
- **Beállítunk** 5 ellenséget soronként és oszloponként (egy szép 5×5-ös rács)
- **Meghatározzuk**, mennyi helyet hagyjunk az ellenségek között, hogy ne legyenek zsúfoltak
- **Kiszámítjuk**, milyen széles lesz az egész formáció
- **Kitaláljuk**, hol kezdődik és végződik, hogy a formáció középen legyen

Ezután hozz létre beágyazott ciklusokat az ellenséges formáció rajzolásához:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Mit csinál ez a beágyazott ciklus:**
- A külső ciklus **mozog** balról jobbra a formáción keresztül
- A belső ciklus **halad** fentről lefelé, hogy rendezett sorokat hozzon létre
- **Rajzolunk** minden ellenséges sprite-ot az általunk kiszámított pontos x,y koordinátákon
- Minden **egyenletesen elhelyezett**, hogy profi és rendezett legyen

## Eredmény

A kész eredménynek így kell kin

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget az ebből a fordításból eredő félreértésekért vagy téves értelmezésekért.