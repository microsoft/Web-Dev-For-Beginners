<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "056641280211e52fd0adb81b6058ec55",
  "translation_date": "2025-08-28T18:39:45+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်းတစ်ခုတည်ဆောက်ခြင်း အပိုင်း ၂: ဟီးရိုနှင့် မုဆိုးများကို Canvas ပေါ်တွင် ရေးဆွဲခြင်း

## မိန့်ခွန်းမတိုင်မီ စစ်တမ်း

[မိန့်ခွန်းမတိုင်မီ စစ်တမ်း](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Canvas သည် HTML element တစ်ခုဖြစ်ပြီး ပုံမှန်အားဖြင့် အကြောင်းအရာမပါရှိပါဘူး။ ဒါဟာ အလွတ်ဖြစ်ပြီး သင်ရေးဆွဲရမယ်။

✅ [Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) ကို MDN မှာ ပိုမိုလေ့လာပါ။

ဒါကို ပုံမှန်အားဖြင့် စာမျက်နှာရဲ့ body အပိုင်းမှာ ဒီလို သတ်မှတ်ပါတယ်။

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

အထက်မှာ `id`, `width` နဲ့ `height` ကို သတ်မှတ်ထားပါတယ်။

- `id`: သင်ရဲ့ interaction အတွက် reference ရယူနိုင်ဖို့ သတ်မှတ်ပါ။
- `width`: element ရဲ့ အကျယ်ကို သတ်မှတ်ပါ။
- `height`: element ရဲ့ အမြင့်ကို သတ်မှတ်ပါ။

## ရိုးရှင်းတဲ့ ဂျီဩမေတြီပုံစံများ ရေးဆွဲခြင်း

Canvas သည် Cartesian coordinate system ကို အသုံးပြုပြီး ပုံများကို ရေးဆွဲပါတယ်။ ဒါကြောင့် x-axis နဲ့ y-axis ကို အသုံးပြုပြီး တစ်ခုခုရဲ့ တည်နေရာကို ဖော်ပြပါတယ်။ `0,0` တည်နေရာသည် အပေါ်ဘက် ဘယ်ဖက်နေရာဖြစ်ပြီး အောက်ဘက်ညာဖက်သည် သင်သတ်မှတ်ထားသော Canvas ရဲ့ WIDTH နဲ့ HEIGHT ဖြစ်ပါတယ်။

![Canvas ရဲ့ grid](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.my.png)
> ပုံကို [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) မှာ ရယူထားပါတယ်။

Canvas element ပေါ်မှာ ရေးဆွဲဖို့ အောက်ပါအဆင့်များကို လိုအပ်ပါတယ်-

1. **Reference ရယူပါ** Canvas element အတွက်။
2. **Reference ရယူပါ** Canvas element ပေါ်မှာရှိတဲ့ Context element အတွက်။
3. **Drawing operation လုပ်ဆောင်ပါ** Context element ကို အသုံးပြုပြီး။

အထက်ပါအဆင့်များအတွက် Code သည် ပုံမှန်အားဖြင့် ဒီလိုပုံစံရှိပါတယ်-

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

✅ Canvas API သည် အဓိကအားဖြင့် 2D ပုံစံများကို အာရုံစိုက်ထားပြီး သင် 3D element များကိုလည်း ဝဘ်ဆိုဒ်ပေါ်မှာ ရေးဆွဲနိုင်ပါတယ်။ ဒီအတွက် [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) ကို အသုံးပြုနိုင်ပါတယ်။

Canvas API ကို အသုံးပြုပြီး အမျိုးမျိုးသောအရာများကို ရေးဆွဲနိုင်ပါတယ်-

- **ဂျီဩမေတြီပုံစံများ**၊ rectangle ရေးဆွဲပုံကို ပြထားပြီး အခြားသောအရာများကိုလည်း ရေးဆွဲနိုင်ပါတယ်။
- **စာသား**၊ သင်လိုချင်တဲ့ font နဲ့ အရောင်ကို အသုံးပြုပြီး စာသားကို ရေးဆွဲနိုင်ပါတယ်။
- **ပုံများ**၊ .jpg သို့မဟုတ် .png ကဲ့သို့သော ပုံ asset ကို အသုံးပြုပြီး ပုံကို ရေးဆွဲနိုင်ပါတယ်။

✅ စမ်းကြည့်ပါ! Rectangle ရေးဆွဲပုံကို သိပြီးသားဖြစ်လို့ Circle ကို စာမျက်နှာပေါ်မှာ ရေးဆွဲနိုင်ပါသလား? CodePen မှ Canvas ရေးဆွဲမှုများကို စိတ်ဝင်စားဖို့ ကြည့်ပါ။ [အလွန်အံ့ဩဖွယ်ကောင်းတဲ့ ဥပမာ](https://codepen.io/dissimulate/pen/KrAwx) တစ်ခုကို ဒီမှာ ကြည့်နိုင်ပါတယ်။

## ပုံ asset တစ်ခုကို Load လုပ်ပြီး ရေးဆွဲခြင်း

ပုံ asset ကို Load လုပ်ဖို့ `Image` object တစ်ခုကို ဖန်တီးပြီး `src` property ကို သတ်မှတ်ရပါမယ်။ ပြီးရင် `load` event ကို နားထောင်ပြီး အသုံးပြုနိုင်ဖို့ အဆင်သင့်ဖြစ်တဲ့အခါ သိရပါမယ်။ Code သည် ဒီလိုပုံစံရှိပါတယ်-

### Asset Load လုပ်ခြင်း

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Asset Load လုပ်ပုံစံ

အထက်ပါကို ဒီလိုပုံစံတစ်ခုအတွင်းမှာ ထည့်သွင်းဖို့ အကြံပြုပါတယ်၊ ဒါကြောင့် အသုံးပြုရလွယ်ကူပြီး အဆင်သင့်ဖြစ်တဲ့အခါမှ Manipulate လုပ်နိုင်ပါတယ်-

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

Game asset များကို Screen ပေါ်မှာ ရေးဆွဲဖို့ သင့်ရဲ့ Code သည် ဒီလိုပုံစံရှိပါတယ်-

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

## အခု သင့်ဂိမ်းကို တည်ဆောက်ဖို့ အချိန်ရောက်ပါပြီ

### ဘာကို တည်ဆောက်မလဲ

Canvas element ပါတဲ့ ဝဘ်စာမျက်နှာတစ်ခုကို တည်ဆောက်ပါ။ ဒါဟာ `1024*768` အနက်ရောင် Screen ကို Render လုပ်သင့်ပါတယ်။ သင့်ကို ပုံနှစ်ခုပေးထားပါတယ်-

- ဟီးရို ရေယာဉ်

   ![ဟီးရို ရေယာဉ်](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.my.png)

- 5*5 မုဆိုး

   ![မုဆိုး ရေယာဉ်](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.my.png)

### တည်ဆောက်မှုကို စတင်ဖို့ အကြံပြုထားသော အဆင့်များ

`your-work` sub folder အတွင်း ဖန်တီးထားသော ဖိုင်များကို ရှာပါ။ ဒါဟာ အောက်ပါအတိုင်း ပါဝင်သင့်ပါတယ်-

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

ဒီ folder ကို Visual Studio Code မှာ ဖွင့်ပါ။ သင့်မှာ Visual Studio Code, NPM နဲ့ Node တို့ပါဝင်တဲ့ Local Development Environment တစ်ခုရှိဖို့ လိုအပ်ပါတယ်။ သင့်ကွန်ပျူတာမှာ `npm` မရှိသေးရင် [ဒီမှာ](https://www.npmjs.com/get-npm) သင့်ရဲ့ setup ကို ပြုလုပ်ပါ။

သင့် project ကို `your_work` folder မှာ စတင်ပါ-

```bash
cd your-work
npm start
```

အထက်ပါသည် `http://localhost:5000` လိပ်စာမှာ HTTP Server တစ်ခုကို စတင်ပါမယ်။ Browser ကို ဖွင့်ပြီး အဲ့ဒီလိပ်စာကို ထည့်ပါ။ အခုတော့ Blank Page ဖြစ်နေပါတယ်၊ ဒါပေမယ့် အဲ့ဒါ ပြောင်းလဲလာပါမယ်။

> မှတ်ချက်- Screen ပေါ်မှာ ပြောင်းလဲမှုများကို ကြည့်ဖို့ Browser ကို Refresh လုပ်ပါ။

### Code ထည့်ပါ

`your-work/app.js` မှာ လိုအပ်သော Code ကို ထည့်ပြီး အောက်ပါအရာများကို ဖြေရှင်းပါ-

1. **Canvas** ကို အနက်ရောင်နောက်ခံနဲ့ ရေးဆွဲပါ
   > အကြံပြုချက်- `/app.js` မှာ သင့်တော်တဲ့ TODO အောက်မှာ `ctx` element ကို အနက်ရောင် သတ်မှတ်ပြီး Top/Left Coordinates ကို 0,0 နဲ့ Canvas ရဲ့ Height နဲ့ Width ကို သတ်မှတ်ပါ။
2. **Textures** ကို Load လုပ်ပါ
   > အကြံပြုချက်- Player နဲ့ Enemy ပုံများကို `await loadTexture` ကို အသုံးပြုပြီး ပုံလမ်းကြောင်းကို Passing လုပ်ပါ။ အခုတော့ Screen ပေါ်မှာ မမြင်ရသေးပါဘူး!
3. **ဟီးရို** ကို Screen ရဲ့ အောက်ခြေတစ်ဝက်မှာ အလယ်မှာ ရေးဆွဲပါ
   > အကြံပြုချက်- `drawImage` API ကို အသုံးပြုပြီး heroImg ကို Screen ပေါ်မှာ ရေးဆွဲပါ၊ `canvas.width / 2 - 45` နဲ့ `canvas.height - canvas.height / 4)` ကို သတ်မှတ်ပါ။
4. **5*5 မုဆိုးများ** ကို ရေးဆွဲပါ
   > အကြံပြုချက်- အခုတော့ မုဆိုးများကို Screen ပေါ်မှာ ရေးဆွဲဖို့ Code ကို Uncomment လုပ်နိုင်ပါပြီ။ နောက်တစ်ဆင့်မှာ `createEnemies` function ကို သွားပြီး အဲ့ဒါကို တည်ဆောက်ပါ။

   အရင်ဆုံး Constants များကို သတ်မှတ်ပါ-

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    ပြီးရင် မုဆိုးများ array ကို Screen ပေါ်မှာ ရေးဆွဲဖို့ Loop တစ်ခုကို ဖန်တီးပါ-

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## ရလဒ်

ပြီးဆုံးသော ရလဒ်သည် ဒီလိုပုံစံရှိသင့်ပါတယ်-

![အနက်ရောင် Screen ဟီးရိုနဲ့ 5*5 မုဆိုးများ](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.my.png)

## ဖြေရှင်းချက်

အရင်ဆုံး သင့်ကိုယ်တိုင် ဖြေရှင်းဖို့ ကြိုးစားပါ၊ ဒါပေမယ့် အကူအညီလိုအပ်ရင် [ဖြေရှင်းချက်](../../../../6-space-game/2-drawing-to-canvas/solution/app.js) ကို ကြည့်ပါ။

---

## 🚀 စိန်ခေါ်မှု

သင် Canvas API ကို အသုံးပြုပြီး 2D ပုံစံများကို ရေးဆွဲဖို့ သင်ယူပြီးသားဖြစ်ပါတယ်။ [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) ကို ကြည့်ပြီး 3D object တစ်ခုကို ရေးဆွဲကြည့်ပါ။

## မိန့်ခွန်းပြီးနောက် စစ်တမ်း

[မိန့်ခွန်းပြီးနောက် စစ်တမ်း](https://ff-quizzes.netlify.app/web/quiz/32)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

Canvas API အကြောင်းပိုမိုလေ့လာဖို့ [ဒီမှာဖတ်ပါ](https://developer.mozilla.org/docs/Web/API/Canvas_API)။

## အလုပ်ပေးစာ

[Canvas API ကို စမ်းသပ်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါရှိနိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှု ဝန်ဆောင်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။