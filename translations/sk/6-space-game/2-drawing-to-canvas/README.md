<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "056641280211e52fd0adb81b6058ec55",
  "translation_date": "2025-08-29T11:11:42+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie vesmírnej hry, časť 2: Kreslenie hrdinu a monštier na plátno

## Kvíz pred prednáškou

[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/quiz/31)

## Plátno

Plátno je HTML element, ktorý nemá predvolene žiadny obsah; je to prázdne plátno. Musíte naň kresliť, aby ste ho naplnili.

✅ Prečítajte si [viac o Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) na MDN.

Takto sa zvyčajne deklaruje ako súčasť tela stránky:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Vyššie nastavujeme `id`, `width` a `height`.

- `id`: nastavte ho, aby ste mohli získať referenciu, keď budete potrebovať s plátnom pracovať.
- `width`: šírka elementu.
- `height`: výška elementu.

## Kreslenie jednoduchej geometrie

Plátno používa kartézsky súradnicový systém na kreslenie objektov. Používa os x a os y na vyjadrenie polohy objektu. Poloha `0,0` je v ľavom hornom rohu a pravý dolný roh je určený hodnotami WIDTH a HEIGHT plátna.

![mriežka plátna](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.sk.png)
> Obrázok z [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Na kreslenie na plátno musíte prejsť nasledujúcimi krokmi:

1. **Získať referenciu** na element plátna.
1. **Získať referenciu** na kontextový element, ktorý sa nachádza na plátne.
1. **Vykonať kresliacu operáciu** pomocou kontextového elementu.

Kód pre vyššie uvedené kroky zvyčajne vyzerá takto:

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

✅ Canvas API sa zameriava hlavne na 2D tvary, ale môžete tiež kresliť 3D objekty na webovú stránku; na to môžete použiť [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

S Canvas API môžete kresliť rôzne veci, ako napríklad:

- **Geometrické tvary**, už sme ukázali, ako nakresliť obdĺžnik, ale môžete kresliť oveľa viac.
- **Text**, môžete kresliť text s akýmkoľvek fontom a farbou, akú si želáte.
- **Obrázky**, môžete kresliť obrázky na základe obrazových súborov, ako napríklad .jpg alebo .png.

✅ Skúste to! Už viete, ako nakresliť obdĺžnik, dokážete nakresliť kruh na stránku? Pozrite si niektoré zaujímavé kresby na plátne na CodePen. Tu je [obzvlášť pôsobivý príklad](https://codepen.io/dissimulate/pen/KrAwx).

## Načítanie a kreslenie obrazového súboru

Obrazový súbor načítate vytvorením objektu `Image` a nastavením jeho vlastnosti `src`. Potom počúvate udalosť `load`, aby ste vedeli, kedy je pripravený na použitie. Kód vyzerá takto:

### Načítanie súboru

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Vzor načítania súboru

Odporúča sa obaliť vyššie uvedený kód do konštruktu, aby sa s ním ľahšie pracovalo a aby ste sa pokúsili manipulovať s ním iba vtedy, keď je úplne načítaný:

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

Na kreslenie herných prvkov na obrazovku by váš kód vyzeral takto:

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

## Teraz je čas začať budovať svoju hru

### Čo vytvoriť

Vytvoríte webovú stránku s elementom plátna. Mala by zobrazovať čiernu obrazovku `1024*768`. Poskytli sme vám dva obrázky:

- Loď hrdinu

   ![Loď hrdinu](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.sk.png)

- 5*5 monštrum

   ![Loď monštra](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.sk.png)

### Odporúčané kroky na začatie vývoja

Nájdite súbory, ktoré boli pre vás vytvorené v podpriečinku `your-work`. Mali by obsahovať nasledujúce:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Otvorte kópiu tohto priečinka vo Visual Studio Code. Mali by ste mať nastavené lokálne vývojové prostredie, ideálne s Visual Studio Code, NPM a Node. Ak nemáte na svojom počítači nastavený `npm`, [tu je návod, ako to urobiť](https://www.npmjs.com/get-npm).

Začnite svoj projekt navigáciou do priečinka `your_work`:

```bash
cd your-work
npm start
```

Vyššie uvedené spustí HTTP server na adrese `http://localhost:5000`. Otvorte prehliadač a zadajte túto adresu. Momentálne je to prázdna stránka, ale to sa zmení.

> Poznámka: aby ste videli zmeny na obrazovke, obnovte prehliadač.

### Pridanie kódu

Pridajte potrebný kód do `your-work/app.js`, aby ste vyriešili nasledujúce:

1. **Nakreslite** plátno s čiernym pozadím
   > tip: pridajte dva riadky pod príslušný TODO v `/app.js`, nastavte element `ctx` na čiernu farbu a horné/ľavé súradnice na 0,0, pričom výška a šírka budú rovnaké ako plátno.
2. **Načítajte** textúry
   > tip: pridajte obrázky hráča a nepriateľa pomocou `await loadTexture` a odovzdajte cestu k obrázku. Zatiaľ ich na obrazovke neuvidíte!
3. **Nakreslite** hrdinu do stredu obrazovky v dolnej polovici
   > tip: použite API `drawImage` na nakreslenie heroImg na obrazovku, nastavte `canvas.width / 2 - 45` a `canvas.height - canvas.height / 4)`;
4. **Nakreslite** 5*5 monštier
   > tip: Teraz môžete odkomentovať kód na kreslenie nepriateľov na obrazovku. Potom prejdite do funkcie `createEnemies` a doplňte ju.

   Najskôr nastavte niektoré konštanty:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    potom vytvorte slučku na nakreslenie poľa monštier na obrazovku:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Výsledok

Hotový výsledok by mal vyzerať takto:

![Čierna obrazovka s hrdinom a 5*5 monštrami](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.sk.png)

## Riešenie

Najskôr sa pokúste vyriešiť úlohu sami, ale ak sa zaseknete, pozrite si [riešenie](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## 🚀 Výzva

Naučili ste sa kresliť pomocou Canvas API zameraného na 2D; pozrite si [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) a skúste nakresliť 3D objekt.

## Kvíz po prednáške

[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/32)

## Prehľad a samostatné štúdium

Dozviete sa viac o Canvas API [čítaním o ňom](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Zadanie

[Hrajte sa s Canvas API](assignment.md)

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby na automatický preklad [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, upozorňujeme, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nezodpovedáme za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.