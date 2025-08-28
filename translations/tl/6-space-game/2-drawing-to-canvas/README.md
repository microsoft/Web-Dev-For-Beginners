<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "056641280211e52fd0adb81b6058ec55",
  "translation_date": "2025-08-28T15:45:37+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Part 2: I-drawing ang Hero at Monsters sa Canvas

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/31)

## Ang Canvas

Ang canvas ay isang HTML element na default na walang laman; ito ay isang blangkong espasyo. Kailangan mo itong punan sa pamamagitan ng pag-drawing dito.

✅ Basahin ang [karagdagang impormasyon tungkol sa Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) sa MDN.

Ganito karaniwang ideklara ang canvas bilang bahagi ng body ng pahina:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Sa itaas, itinatakda natin ang `id`, `width`, at `height`.

- `id`: itakda ito upang makakuha ng reference kapag kailangan mong makipag-ugnayan dito.
- `width`: ito ang lapad ng elemento.
- `height`: ito ang taas ng elemento.

## Pag-drawing ng simpleng geometry

Ang Canvas ay gumagamit ng cartesian coordinate system para mag-drawing ng mga bagay. Kaya't gumagamit ito ng x-axis at y-axis upang ipakita kung saan matatagpuan ang isang bagay. Ang lokasyon na `0,0` ay ang pinakataas na kaliwang posisyon, at ang pinakababa na kanan ay ang WIDTH at HEIGHT ng canvas na itinakda mo.

![grid ng canvas](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.tl.png)
> Larawan mula sa [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Para mag-drawing sa canvas element, kailangan mong sundin ang mga sumusunod na hakbang:

1. **Kumuha ng reference** sa Canvas element.
1. **Kumuha ng reference** sa Context element na nasa canvas element.
1. **Gumawa ng drawing operation** gamit ang context element.

Ang code para sa mga hakbang sa itaas ay karaniwang ganito ang hitsura:

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

✅ Ang Canvas API ay pangunahing nakatuon sa 2D shapes, ngunit maaari ka ring mag-drawing ng 3D elements sa isang website; para dito, maaari mong gamitin ang [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Maaari kang mag-drawing ng iba't ibang bagay gamit ang Canvas API tulad ng:

- **Mga geometrical shapes**, ipinakita na namin kung paano mag-drawing ng rectangle, ngunit marami pang iba ang maaari mong i-drawing.
- **Teksto**, maaari kang mag-drawing ng teksto gamit ang anumang font at kulay na gusto mo.
- **Mga imahe**, maaari kang mag-drawing ng imahe mula sa isang image asset tulad ng .jpg o .png halimbawa.

✅ Subukan ito! Alam mo na kung paano mag-drawing ng rectangle, kaya mo bang mag-drawing ng bilog sa isang pahina? Tingnan ang ilang mga kawili-wiling Canvas drawings sa CodePen. Narito ang isang [napaka-impressive na halimbawa](https://codepen.io/dissimulate/pen/KrAwx).

## Mag-load at mag-drawing ng image asset

Mag-load ka ng image asset sa pamamagitan ng paglikha ng `Image` object at pagtatakda ng `src` property nito. Pagkatapos, makinig sa `load` event upang malaman kung kailan ito handa nang gamitin. Ganito ang hitsura ng code:

### Mag-load ng asset

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Pattern sa pag-load ng asset

Inirerekomenda na balutin ang nasa itaas sa isang construct tulad nito, upang mas madali itong gamitin at tiyakin na magagamit mo lamang ito kapag ganap na itong na-load:

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

Para mag-drawing ng game assets sa screen, ganito ang magiging hitsura ng iyong code:

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

## Panahon na para simulan ang paggawa ng iyong laro

### Ano ang gagawin

Gagawa ka ng isang web page na may Canvas element. Dapat itong mag-render ng black screen na `1024*768`. Nagbigay kami sa iyo ng dalawang imahe:

- Hero ship

   ![Hero ship](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.tl.png)

- 5*5 monster

   ![Monster ship](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.tl.png)

### Mga inirerekomendang hakbang para simulan ang development

Hanapin ang mga file na ginawa para sa iyo sa `your-work` sub folder. Dapat itong maglaman ng sumusunod:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Buksan ang kopya ng folder na ito sa Visual Studio Code. Kailangan mong magkaroon ng lokal na development environment na naka-set up, mas mainam kung may Visual Studio Code na may NPM at Node na naka-install. Kung wala kang `npm` sa iyong computer, [narito kung paano ito gawin](https://www.npmjs.com/get-npm).

Simulan ang iyong proyekto sa pamamagitan ng pag-navigate sa `your_work` folder:

```bash
cd your-work
npm start
```

Ang nasa itaas ay magpapasimula ng HTTP Server sa address na `http://localhost:5000`. Buksan ang browser at ilagay ang address na iyon. Blangkong pahina pa ito ngayon, ngunit magbabago ito.

> Tandaan: upang makita ang mga pagbabago sa iyong screen, i-refresh ang iyong browser.

### Magdagdag ng code

Idagdag ang kinakailangang code sa `your-work/app.js` upang malutas ang mga sumusunod:

1. **Mag-drawing** ng canvas na may black background  
   > tip: magdagdag ng dalawang linya sa ilalim ng naaangkop na TODO sa `/app.js`, itakda ang `ctx` element na maging itim at ang top/left coordinates sa 0,0 at ang taas at lapad na katumbas ng canvas.
2. **Mag-load** ng textures  
   > tip: idagdag ang player at enemy images gamit ang `await loadTexture` at ipasa ang image path. Hindi mo pa makikita ang mga ito sa screen!
3. **Mag-drawing** ng hero sa gitna ng screen sa ibabang bahagi  
   > tip: gamitin ang `drawImage` API upang i-drawing ang heroImg sa screen, itakda ang `canvas.width / 2 - 45` at `canvas.height - canvas.height / 4)`;
4. **Mag-drawing** ng 5*5 monsters  
   > tip: Ngayon maaari mong i-uncomment ang code upang i-drawing ang mga enemies sa screen. Susunod, pumunta sa `createEnemies` function at buuin ito.

   Una, mag-set up ng ilang constants:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    pagkatapos, gumawa ng loop upang i-drawing ang array ng monsters sa screen:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Resulta

Ang tapos na resulta ay dapat ganito ang hitsura:

![Black screen na may hero at 5*5 monsters](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.tl.png)

## Solusyon

Subukan mo munang lutasin ito, ngunit kung mahirapan ka, tingnan ang isang [solusyon](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)

---

## 🚀 Hamon

Natutunan mo ang tungkol sa pag-drawing gamit ang 2D-focused Canvas API; tingnan ang [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API), at subukang mag-drawing ng 3D object.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/32)

## Review & Self Study

Matuto pa tungkol sa Canvas API sa pamamagitan ng [pagbabasa tungkol dito](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Assignment

[Maglaro gamit ang Canvas API](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.