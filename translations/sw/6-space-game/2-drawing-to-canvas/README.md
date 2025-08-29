<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "056641280211e52fd0adb81b6058ec55",
  "translation_date": "2025-08-29T10:06:16+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 2: Chora Shujaa na Wadudu kwenye Canvas

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Canvas ni kipengele cha HTML ambacho kwa kawaida hakina maudhui; ni kama ubao mtupu. Unahitaji kuongeza maudhui kwa kuchora juu yake.

✅ Soma [zaidi kuhusu Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) kwenye MDN.

Hivi ndivyo inavyotangazwa kwa kawaida, kama sehemu ya mwili wa ukurasa:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Hapo juu tunasanidi `id`, `width`, na `height`.

- `id`: weka hii ili uweze kupata rejeleo unapohitaji kuingiliana nayo.
- `width`: hii ni upana wa kipengele.
- `height`: hii ni urefu wa kipengele.

## Kuchora Jiometri Rahisi

Canvas inatumia mfumo wa kuratibu wa Cartesian kuchora vitu. Kwa hivyo, inatumia mhimili wa x na mhimili wa y kueleza mahali kitu kilipo. Mahali `0,0` ni kona ya juu kushoto, na kona ya chini kulia ni kile ulichosema kuwa ni WIDTH na HEIGHT ya canvas.

![gridi ya canvas](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.sw.png)  
> Picha kutoka [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Ili kuchora kwenye kipengele cha canvas, utahitaji kupitia hatua zifuatazo:

1. **Pata rejeleo** la kipengele cha Canvas.  
2. **Pata rejeleo** la kipengele cha Context kinachokaa kwenye kipengele cha canvas.  
3. **Fanya operesheni ya kuchora** ukitumia kipengele cha context.  

Msimbo wa hatua zilizo hapo juu kwa kawaida huonekana kama hivi:

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

✅ Canvas API inazingatia zaidi maumbo ya 2D, lakini unaweza pia kuchora vipengele vya 3D kwenye tovuti; kwa hili, unaweza kutumia [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Unaweza kuchora vitu vya aina mbalimbali ukitumia Canvas API kama:

- **Maumbo ya Jiometri**, tayari tumeonyesha jinsi ya kuchora mstatili, lakini kuna mengi zaidi unayoweza kuchora.  
- **Maandishi**, unaweza kuchora maandishi kwa fonti na rangi yoyote unayotaka.  
- **Picha**, unaweza kuchora picha ukitumia mali ya picha kama .jpg au .png kwa mfano.  

✅ Jaribu! Unajua jinsi ya kuchora mstatili, je, unaweza kuchora duara kwenye ukurasa? Angalia baadhi ya michoro ya kuvutia ya Canvas kwenye CodePen. Hapa kuna [mfano wa kuvutia sana](https://codepen.io/dissimulate/pen/KrAwx).

## Pakia na Chora Mali ya Picha

Unapakia mali ya picha kwa kuunda kipengele cha `Image` na kuweka mali yake ya `src`. Kisha unasikiliza tukio la `load` ili kujua wakati iko tayari kutumika. Msimbo unaonekana kama huu:

### Pakia Mali

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Mfano wa Kupakia Mali

Inapendekezwa kufungia msimbo hapo juu katika muundo kama huu, ili iwe rahisi kutumia na uhakikishe unajaribu kuishughulikia tu inapokuwa imepakiwa kikamilifu:

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

Ili kuchora mali za mchezo kwenye skrini, msimbo wako ungeonekana kama huu:

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

## Sasa Ni Wakati wa Kuanza Kujenga Mchezo Wako

### Unachopaswa Kujenga

Utajenga ukurasa wa wavuti wenye kipengele cha Canvas. Kinapaswa kuonyesha skrini nyeusi `1024*768`. Tumekupa picha mbili:

- Meli ya Shujaa  

   ![Meli ya Shujaa](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.sw.png)

- Wadudu 5*5  

   ![Meli ya Wadudu](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.sw.png)

### Hatua Zinazopendekezwa za Kuanza Maendeleo

Tafuta faili ambazo zimeundwa kwa ajili yako kwenye folda ndogo ya `your-work`. Inapaswa kuwa na yafuatayo:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Fungua nakala ya folda hii kwenye Visual Studio Code. Unahitaji kuwa na mazingira ya maendeleo ya ndani yamewekwa, ikiwezekana na Visual Studio Code pamoja na NPM na Node. Ikiwa huna `npm` imewekwa kwenye kompyuta yako, [hapa kuna jinsi ya kufanya hivyo](https://www.npmjs.com/get-npm).

Anza mradi wako kwa kuhamia kwenye folda ya `your_work`:

```bash
cd your-work
npm start
```

Hapo juu kutaanzisha HTTP Server kwenye anwani `http://localhost:5000`. Fungua kivinjari na uweke anwani hiyo. Kwa sasa ni ukurasa mtupu, lakini hiyo itabadilika.

> Kumbuka: ili kuona mabadiliko kwenye skrini yako, safisha kivinjari chako.

### Ongeza Msimbo

Ongeza msimbo unaohitajika kwenye `your-work/app.js` ili kutatua yafuatayo:

1. **Chora** canvas yenye mandharinyuma meusi  
   > kidokezo: ongeza mistari miwili chini ya TODO inayofaa kwenye `/app.js`, ukisanidi kipengele cha `ctx` kuwa cheusi na kuratibu za juu/kushoto kuwa 0,0 na urefu na upana kuwa sawa na wa canvas.  
2. **Pakia** textures  
   > kidokezo: ongeza picha za mchezaji na adui ukitumia `await loadTexture` na kupitisha njia ya picha. Hutaona kwenye skrini bado!  
3. **Chora** shujaa katikati ya skrini katika nusu ya chini  
   > kidokezo: tumia API ya `drawImage` kuchora heroImg kwenye skrini, ukisanidi `canvas.width / 2 - 45` na `canvas.height - canvas.height / 4)`.  
4. **Chora** wadudu 5*5  
   > kidokezo: Sasa unaweza kuondoa maoni kwenye msimbo wa kuchora maadui kwenye skrini. Kisha, nenda kwenye kazi ya `createEnemies` na uijenge.  

   Kwanza, sanidi baadhi ya constants:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    kisha, unda kitanzi cha kuchora safu ya wadudu kwenye skrini:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Matokeo

Matokeo ya mwisho yanapaswa kuonekana kama hivi:

![Skrini nyeusi yenye shujaa na wadudu 5*5](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.sw.png)

## Suluhisho

Tafadhali jaribu kutatua mwenyewe kwanza, lakini ukikwama, angalia [suluhisho](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## 🚀 Changamoto

Umejifunza kuhusu kuchora kwa Canvas API inayolenga 2D; angalia [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API), na ujaribu kuchora kipengele cha 3D.

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/32)

## Mapitio na Kujisomea

Jifunze zaidi kuhusu Canvas API kwa [kusoma kuhusu hilo](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Kazi

[Cheza na Canvas API](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia huduma ya tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.