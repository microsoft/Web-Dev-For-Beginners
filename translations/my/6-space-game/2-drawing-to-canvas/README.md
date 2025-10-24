<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-24T16:55:13+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "my"
}
-->
# Space Game တည်ဆောက်ခြင်း အပိုင်း ၂: Hero နှင့် Monsters ကို Canvas ပေါ်တွင် ရေးဆွဲခြင်း

Canvas API သည် ဘရောက်ဇာတွင် တိုက်ရိုက် အသုံးပြုနိုင်သော dynamic, interactive graphics များကို ဖန်တီးရန်အတွက် ဝဘ်ဖွံ့ဖြိုးရေး၏ အင်အားကြီးသော အင်္ဂါရပ်များထဲမှ တစ်ခုဖြစ်သည်။ ဒီသင်ခန်းစာမှာတော့ blank HTML `<canvas>` element ကို hero နှင့် monsters များဖြင့် ပြည့်စုံသော ဂိမ်းကမ္ဘာတစ်ခုအဖြစ် ပြောင်းလဲသွားစေမှာ ဖြစ်ပါတယ်။ canvas ကို သင်၏ digital art board အဖြစ် သတ်မှတ်ပြီး code ကို visual အဖြစ် ပြောင်းလဲပေးနိုင်သောနေရာအဖြစ် စဉ်းစားပါ။

ယခင်သင်ခန်းစာတွင် သင်လေ့လာခဲ့သောအရာများကို အခြေခံပြီး ယခုအခါ visual အပိုင်းများကို ဆွေးနွေးသွားမည်ဖြစ်သည်။ သင်သည် game sprites များကို load လုပ်ခြင်းနှင့် ပြသခြင်း၊ elements များကို တိကျစွာ တည်နေရာချခြင်း၊ သင်၏ space game အတွက် visual foundation တည်ဆောက်ခြင်းတို့ကို လေ့လာနိုင်မည်ဖြစ်သည်။ static web pages နှင့် dynamic, interactive အတွေ့အကြုံများအကြား ချိတ်ဆက်မှုကို ဖန်တီးပေးမည်ဖြစ်သည်။

ဒီသင်ခန်းစာအဆုံးတွင် သင်၏ hero ship ကို မှန်ကန်စွာ တည်နေရာချပြီး ရန်သူများ၏ formation များကို တိုက်ပွဲအတွက် ပြင်ဆင်ထားသော game scene တစ်ခုကို ပြီးစီးထားမည်ဖြစ်သည်။ အခေတ်သစ်ဂိမ်းများသည် ဘရောက်ဇာများတွင် graphics များကို render လုပ်ပုံကို နားလည်ပြီး သင်၏ကိုယ်ပိုင် interactive visual အတွေ့အကြုံများကို ဖန်တီးနိုင်ရန် ကျွမ်းကျင်မှုများ ရရှိမည်ဖြစ်သည်။ Canvas graphics ကို စူးစမ်းပြီး သင်၏ space game ကို အသက်ဝင်စေကြပါစို့!

## သင်ခန်းစာမတိုင်မီ စမ်းမေးခွန်း

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

ဒီ `<canvas>` element က ဘာလဲ? HTML5 ရဲ့ dynamic graphics နှင့် animations များကို web browsers တွင် ဖန်တီးရန်အတွက် ဖြေရှင်းချက်တစ်ခုဖြစ်ပါတယ်။ static ဖြစ်သော ပုံများ သို့မဟုတ် ဗီဒီယိုများနှင့် မတူဘဲ canvas က screen ပေါ်တွင် ပေါ်လာသော အရာအားလုံးကို pixel အဆင့်အထိ ထိန်းချုပ်နိုင်စွမ်းပေးသည်။ ဒါကြောင့် ဂိမ်းများ၊ data visualizations နှင့် interactive art များအတွက် အထူးသင့်တော်သည်။ JavaScript ကို သင်၏ paintbrush အဖြစ် အသုံးပြုနိုင်သော programmable drawing surface အဖြစ် စဉ်းစားပါ။

ပုံမှန်အားဖြင့် canvas element သည် သင်၏ page ပေါ်တွင် blank, transparent rectangle တစ်ခုအဖြစ် ပေါ်လာသည်။ ဒါပေမယ့် အစွမ်းထက်မှုက ဒီမှာပဲ ရှိပါတယ်! JavaScript ကို အသုံးပြု၍ shapes များရေးဆွဲခြင်း၊ ပုံများ load လုပ်ခြင်း၊ animations ဖန်တီးခြင်း၊ အသုံးပြုသူ၏ အပြုအမူများကို တုံ့ပြန်စေခြင်းတို့ကို ပြုလုပ်နိုင်သောအခါ၌ ၎င်း၏ အစွမ်းထက်မှုကို တွေ့ရမည်။ ၁၉၆၀ ခုနှစ်များတွင် Bell Labs မှ computer graphics pioneers များက ပထမဆုံး digital animations များကို ဖန်တီးရန် pixel တစ်ခုချင်းစီကို program လုပ်ခဲ့သည့်နည်းလမ်းနှင့် ဆင်တူသည်။

✅ [Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) အကြောင်းကို MDN မှာ ပိုမိုလေ့လာပါ။

ဒါက typically page ရဲ့ body အစိတ်အပိုင်းအနေနဲ့ သတ်မှတ်ပုံပါ:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**ဒီ code က ဘာလုပ်သလဲဆိုရင်:**
- `id` attribute ကို သတ်မှတ်ပြီး JavaScript မှာ canvas element ကို ရယူနိုင်အောင်လုပ်ပေးသည်
- canvas ရဲ့ အလျားအတိုင်းအတာကို ထိန်းချုပ်ရန် pixel အနေနဲ့ `width` ကို သတ်မှတ်သည်
- canvas ရဲ့ အလျားလိုက်အတိုင်းအတာကို သတ်မှတ်ရန် pixel အနေနဲ့ `height` ကို သတ်မှတ်သည်

## ရိုးရှင်းသော Geometry ရေးဆွဲခြင်း

canvas element က ဘာလဲဆိုတာ သင်သိပြီးပြီဆိုရင်၊ အခုတော့ ၎င်းပေါ်မှာ တကယ်ရေးဆွဲတာကို စူးစမ်းကြည့်ရအောင်! canvas က coordinate system ကို အသုံးပြုပြီး သင်ရေးဆွဲသော အရာအားလုံးကို တည်နေရာချသည်။ ဒါပေမယ့် computer graphics အတွက် အထူးပြောင်းလဲမှုတစ်ခုရှိသည်။

canvas က Cartesian coordinates ကို အသုံးပြုပြီး x-axis (horizontal) နှင့် y-axis (vertical) ကို သင်ရေးဆွဲသော အရာအားလုံးကို တည်နေရာချရန် အသုံးပြုသည်။ ဒါပေမယ့် အရေးကြီးသော ကွဲပြားမှုတစ်ခုရှိသည်: math class မှ coordinate system နှင့် မတူဘဲ `(0,0)` ရဲ့ origin point က အပေါ်ဘက်-ဘယ်ဘက်ထောင့်မှာ စတင်ပြီး x-values ကညာဘက်သို့ တိုးလာပြီး y-values ကအောက်ဘက်သို့ တိုးလာသည်။ ဒီနည်းလမ်းက ၁၉၆၀ ခုနှစ်များတွင် electron beams က အပေါ်မှ အောက်သို့ scan လုပ်သော computer displays များမှ စတင်ခဲ့သည်။

![the canvas's grid](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.my.png)
> ပုံကို [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) မှ

canvas element ပေါ်မှာ ရေးဆွဲရန် သင်သည် canvas graphics အားလုံး၏ အခြေခံဖြစ်သော အဆင့်သုံးဆင့်ကို လိုက်နာရမည်။ ဒီအရာကို အကြိမ်ကြိမ်လုပ်ပြီးရင် အလွယ်တကူ ကျွမ်းကျင်သွားမည်:

1. **Canvas element ကို DOM မှ ရယူပါ** (အခြား HTML element တစ်ခုလိုပဲ)
2. **2D rendering context ကို ရယူပါ** – ဒီဟာက ရေးဆွဲရန် method အားလုံးပါဝင်သည်
3. **ရေးဆွဲပါ!** context ရဲ့ built-in methods ကို အသုံးပြုပြီး graphics များ ဖန်တီးပါ

ဒီဟာကို code မှာ ဘယ်လိုပုံစံရှိလဲဆိုရင်:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**ဒီအဆင့်တွေကို တစ်ဆင့်ချင်းစီ ဖော်ပြပါ:**
- canvas element ကို ၎င်း၏ ID ကို အသုံးပြုပြီး variable ထဲမှာ သိမ်းထားသည်
- 2D rendering context ကို ရယူသည် – ဒီဟာက ရေးဆွဲရန် toolkit ဖြစ်သည်
- canvas ကို `fillStyle` property ကို အသုံးပြုပြီး အနီရောင်ဖြင့် ဖြည့်ရန် ပြောသည်
- အပေါ်ဘက်-ဘယ်ဘက်ထောင့် (0,0) မှ စတင်ပြီး 200 pixels အကျယ်နှင့် အလျားရှိသော rectangle ကို ရေးဆွဲသည်

✅ Canvas API က 2D shapes တွေကို အဓိကထားပြီး အလုပ်လုပ်ပေမယ့်၊ 3D elements တွေကို web site ပေါ်မှာ ရေးဆွဲနိုင်ပါတယ်။ ဒီအတွက် [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) ကို အသုံးပြုနိုင်ပါတယ်။

Canvas API ကို အသုံးပြုပြီး အမျိုးမျိုးသောအရာများကို ရေးဆွဲနိုင်သည်:

- **Geometrical shapes**, rectangle ရေးဆွဲပုံကို ပြထားပြီး၊ အခြား shapes များကိုလည်း ရေးဆွဲနိုင်သည်။
- **Text**, သင်လိုချင်တဲ့ font နဲ့ color ကို အသုံးပြုပြီး text ရေးဆွဲနိုင်သည်။
- **Images**, .jpg သို့မဟုတ် .png အစရှိတဲ့ image asset ကို အသုံးပြုပြီး image ရေးဆွဲနိုင်သည်။

✅ စမ်းကြည့်ပါ! Rectangle ရေးဆွဲပုံကို သိပြီးသားဖြစ်တဲ့အတွက်၊ page ပေါ်မှာ circle ရေးဆွဲနိုင်ပါသလား? CodePen မှ Canvas drawings အတော်များများကို စူးစမ်းကြည့်ပါ။ ဒီမှာ [အထူးစိတ်ဝင်စားစရာကောင်းတဲ့ ဥပမာ](https://codepen.io/dissimulate/pen/KrAwx) တစ်ခုရှိပါတယ်။

## Image Asset ကို Load လုပ်ပြီး ရေးဆွဲခြင်း

ရိုးရှင်းတဲ့ shapes တွေကို ရေးဆွဲတာက စတင်ဖို့ အသုံးဝင်ပေမယ့်၊ ဂိမ်းအများစုက အမှန်တကယ် images တွေလိုအပ်ပါတယ်! Sprites, backgrounds, နှင့် textures တွေက ဂိမ်းတွေကို visual အလှတရားပေးတဲ့အရာတွေဖြစ်ပါတယ်။ canvas ပေါ်မှာ images တွေကို load လုပ်ပြီး ပြသခြင်းက geometric shapes ရေးဆွဲပုံနဲ့ မတူပေမယ့်၊ အဆင်ပြေတဲ့ နည်းလမ်းတစ်ခုရှိပါတယ်။

သင့်ရဲ့ sprite သို့မဟုတ် texture ကို သိမ်းထားမယ့် `Image` object တစ်ခုကို ဖန်တီးပြီး image ဖိုင်ကို load လုပ်ရမည် (ဒီဟာက asynchronous ဖြစ်ပြီး "background" မှာ ဖြစ်ပျက်နေသည်)၊ image ပြသရန် ပြင်ဆင်ပြီးရင် canvas ပေါ်မှာ ရေးဆွဲရမည်။ ဒီနည်းလမ်းက သင့် application ကို block မဖြစ်စေဘဲ image များကို မှန်ကန်စွာ ပြသရန် အာမခံပေးသည်။

### ရိုးရှင်းသော Image Loading

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**ဒီ code မှာ ဘာဖြစ်နေသလဲဆိုရင်:**
- sprite သို့မဟုတ် texture ကို သိမ်းထားမယ့် Image object အသစ်တစ်ခုကို ဖန်တီးသည်
- source path ကို သတ်မှတ်ပြီး ဘယ် image ဖိုင်ကို load လုပ်မလဲ ပြောသည်
- image ကို အသုံးပြုနိုင်ရန် ပြင်ဆင်ပြီးရင် load event ကို နားထောင်သည်

### Image Loading ကို ပိုမိုကောင်းမွန်စေရန် နည်းလမ်း

Professional developers များ အသုံးပြုသော image loading ကို handle လုပ်ရန် ပိုမိုကောင်းမွန်သော နည်းလမ်းတစ်ခုကို ဖော်ပြပါမည်။ JavaScript Promises ES6 standard ဖြစ်လာသောအခါတွင် လူကြိုက်များလာသော Promise-based function မှာ image loading logic အားလုံးကို wrap လုပ်ပြီး code ကို ပိုမိုစီမံခန့်ခွဲနိုင်စေပြီး error များကို gracefully handle လုပ်သည်:

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

**ဒီမှာ ဘာလုပ်ခဲ့သလဲဆိုရင်:**
- image loading logic အားလုံးကို Promise ထဲမှာ wrap လုပ်ပြီး ပိုမိုကောင်းမွန်စွာ handle လုပ်သည်
- error handling ကို ထည့်ပြီး အမှားဖြစ်ပေါ်သောအခါ သတိပေးသည်
- modern async/await syntax ကို အသုံးပြုပြီး ဖတ်ရန် ပိုမိုလွယ်ကူစေသည်
- try/catch blocks ကို ထည့်ပြီး loading hiccups များကို gracefully handle လုပ်သည်

image များကို load လုပ်ပြီးရင် canvas ပေါ်မှာ ရေးဆွဲတာက တကယ်တော့ အလွယ်တကူဖြစ်ပါတယ်:

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

**ဒီအဆင့်တွေကို တစ်ဆင့်ချင်းစီ ဖော်ပြပါ:**
- hero နှင့် monster images နှစ်ခုလုံးကို background မှာ await ကို အသုံးပြုပြီး load လုပ်သည်
- canvas element ကို ရယူပြီး 2D rendering context ကို ရယူသည်
- hero image ကို အလယ်မှာ တည်နေရာချရန် coordinate math အနည်းငယ်ကို အသုံးပြုသည်
- monster image ကို အပေါ်ဘက်-ဘယ်ဘက်ထောင့်မှာ တည်နေရာချပြီး ရန်သူ formation ကို စတင်သည်
- loading သို့မဟုတ် rendering အတွင်း error ဖြစ်ပေါ်နိုင်သောအခါ catch လုပ်သည်

## အခုတော့ သင့်ဂိမ်းကို တည်ဆောက်ဖို့ အချိန်ရောက်ပြီ

အခုတော့ သင်၏ space game ရဲ့ visual foundation ကို ဖန်တီးရန် အရာအားလုံးကို ပေါင်းစည်းပါမည်။ canvas ရဲ့ အခြေခံအကြောင်းအရာများနှင့် image loading techniques များကို သင်နားလည်ပြီးဖြစ်သောကြောင့်၊ ဒီလက်တွေ့အပိုင်းမှာ သင့်ကို game screen တစ်ခုကို sprite များကို မှန်ကန်စွာ တည်နေရာချပြီး တည်ဆောက်ရန် လမ်းညွှန်ပါမည်။

### ဘာကို တည်ဆောက်မလဲ

Canvas element ပါဝင်သော web page တစ်ခုကို တည်ဆောက်ပါ။ ၎င်းသည် `1024*768` အရွယ်အစားရှိသော အနက်ရောင် screen ကို render လုပ်သင့်သည်။ သင့်အား ပုံနှစ်ပုံကို ပေးထားပါသည်:

- Hero ship

   ![Hero ship](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.my.png)

- 5*5 monster

   ![Monster ship](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.my.png)

### Development စတင်ရန် အကြံပြုသော အဆင့်များ

`your-work` sub folder တွင် ဖန်တီးထားသော starter files များကို ရှာပါ။ သင့် project structure တွင် ပါဝင်သင့်သည်မှာ:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**သင်လုပ်ဆောင်ရမည့်အရာများ:**
- **Game sprites** တွေကို `assets/` folder မှာ သိမ်းထားပြီး အစီအစဉ်တကျ ဖြစ်စေသည်
- **Main HTML file** က canvas element ကို setup လုပ်ပြီး အားလုံးကို ပြင်ဆင်ထားသည်
- **JavaScript file** က သင့် game rendering magic အားလုံးကို ရေးသားရန်နေရာဖြစ်သည်
- **Package.json** က development server ကို setup လုပ်ပြီး locally မှာ စမ်းသပ်နိုင်သည်

ဒီ folder ကို Visual Studio Code မှာ ဖွင့်ပြီး development ကို စတင်ပါ။ Visual Studio Code, NPM, နှင့် Node.js တို့ပါဝင်သော local development environment တစ်ခုလိုအပ်ပါမည်။ သင့် computer မှာ `npm` setup မရှိသေးပါက [ဒီမှာ install လုပ်နည်း](https://www.npmjs.com/get-npm) ကို ကြည့်ပါ။

`your-work` folder ကို navigation လုပ်ပြီး development server ကို စတင်ပါ:

```bash
cd your-work
npm start
```

**ဒီ command က အလွန်အမင်းအကျိုးရှိတဲ့အရာတွေကို လုပ်ဆောင်ပါတယ်:**
- `http://localhost:5000` မှာ local server ကို စတင်ပြီး သင့်ဂိမ်းကို စမ်းသပ်နိုင်သည်
- သင့်ဖိုင်အားလုံးကို မှန်ကန်စွာ serve လုပ်ပြီး ဘရောက်ဇာက မှန်ကန်စွာ load လုပ်နိုင်သည်
- သင့်ဖိုင်တွေကို ပြောင်းလဲမှုရှိတဲ့အခါမှာ အလိုအလျောက် watch လုပ်ပြီး development ကို smooth ဖြစ်စေသည်
- အားလုံးကို စမ်းသပ်နိုင်တဲ့ professional development environment ကို ပေးသည်

> 💡 **မှတ်ချက်**: သင့်ဘရောက်ဇာမှာ အစမှာ blank page တစ်ခုပေါ်လာမယ် – ဒီဟာက မျှော်လင့်ထားတာပါ! Code ကို ထည့်သွင်းပြီး browser ကို refresh လုပ်ပါ။ NASA က Apollo guidance computer ကို တည်ဆောက်တဲ့နည်းလမ်းနဲ့ ဆင်တူတဲ့ iterative development approach ဖြစ်ပါတယ် – component တစ်ခုချင်းစီကို စမ်းသပ်ပြီး larger system ထဲမှာ ထည့်သွင်းခြင်း။

### Code ထည့်ပါ

`your-work/app.js` မှာ လိုအပ်သော code ကို ထည့်ပြီး အောက်ပါ tasks များကို ပြီးမြောက်စေပါ:

1. **Black background ရှိ canvas ကို ရေးဆွဲပါ**
   > 💡 **ဘယ်လိုလုပ်မလဲ**: `/app.js` မှာ TODO ကို ရှာပြီး line နှစ်ခုထည့်ပါ။ `ctx.fillStyle` ကို black သတ်မှတ်ပြီး `ctx.fillRect()` ကို (0,0) မှာ သင့် canvas dimensions နဲ့ စတင်ပါ။ အလွယ်တကူ!

2. **Game textures များကို load လုပ်ပါ**
   > 💡 **ဘယ်လိုလုပ်မလဲ**: `await loadAsset()` ကို အသုံးပြုပြီး player နှင့် enemy images ကို load လုပ်ပါ။ ၎င်းတို့ကို နောက်ပိုင်းမှာ အသုံးပြုနိုင်ရန် variables ထဲမှာ သိမ်းပါ။ သင် ၎င်းတို့ကို တကယ်ရေးဆွဲမချင်း မပေါ်လာပါဘူး!

3. **Hero ship ကို center-bottom position မှာ ရေးဆွဲပါ**
   > 💡 **ဘယ်လိုလုပ်မလဲ**: `ctx.drawImage

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။