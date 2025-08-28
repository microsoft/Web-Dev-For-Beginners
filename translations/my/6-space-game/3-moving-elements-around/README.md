<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-27T22:19:58+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်း တည်ဆောက်ခြင်း အပိုင်း ၃: လှုပ်ရှားမှု ထည့်သွင်းခြင်း

## မိန့်ခွန်းမတိုင်မီ မေးခွန်း

[မိန့်ခွန်းမတိုင်မီ မေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/33)

ဂိမ်းတွေဟာ အာလီယန်တွေ မျက်နှာပြင်ပေါ်မှာ လှုပ်ရှားနေမှ ပိုမိုပျော်ရွှင်စရာဖြစ်ပါတယ်! ဒီဂိမ်းမှာတော့ လှုပ်ရှားမှုအမျိုးအစားနှစ်မျိုးကို အသုံးပြုပါမယ်။

- **ကီးဘုတ်/မောက်စ် လှုပ်ရှားမှု**: အသုံးပြုသူက ကီးဘုတ် သို့မဟုတ် မောက်စ်ကို အသုံးပြုပြီး မျက်နှာပြင်ပေါ်မှာ အရာဝတ္ထုကို ရွှေ့လို့ရတဲ့အခါ။
- **ဂိမ်းကနေ ဖြစ်ပေါ်လာတဲ့ လှုပ်ရှားမှု**: ဂိမ်းက အချိန်အကွာအဝေးတစ်ခုအတွင်းမှာ အရာဝတ္ထုကို ရွှေ့လှုပ်ပေးတဲ့အခါ။

မျက်နှာပြင်ပေါ်မှာ အရာဝတ္ထုတွေကို ဘယ်လို ရွှေ့လှုပ်မလဲ? ဒါဟာ ကာတီရှီယန် ကိုဩဒိနိတ် (cartesian coordinates) ပေါ်မှာ အခြေခံထားပါတယ်။ အရာဝတ္ထုရဲ့ တည်နေရာ (x, y) ကို ပြောင်းပြီး မျက်နှာပြင်ကို ပြန်လည်ရေးဆွဲရပါတယ်။

မျက်နှာပြင်ပေါ်မှာ *လှုပ်ရှားမှု* ကို အောင်မြင်စေဖို့ 通常 အောက်ပါအဆင့်တွေ လိုအပ်ပါတယ်။

1. **တည်နေရာအသစ် သတ်မှတ်ပါ**: အရာဝတ္ထုကို ရွှေ့လို့ရတယ်လို့ ခံစားနိုင်ဖို့ လိုအပ်ပါတယ်။
2. **မျက်နှာပြင်ကို ရှင်းလင်းပါ**: မျက်နှာပြင်ကို ပြန်လည်ရေးဆွဲမည့်အခါ ရှင်းလင်းထားဖို့ လိုအပ်ပါတယ်။ ဒါကို နောက်ခံအရောင်ဖြင့် rectangle တစ်ခုကို ရေးဆွဲခြင်းဖြင့် ရှင်းလင်းနိုင်ပါတယ်။
3. **အရာဝတ္ထုကို တည်နေရာအသစ်မှာ ပြန်လည်ရေးဆွဲပါ**: ဒါကို လုပ်ဆောင်ခြင်းဖြင့် အရာဝတ္ထုကို တစ်နေရာမှ တစ်နေရာသို့ ရွှေ့လှုပ်ခြင်းကို အောင်မြင်စေပါတယ်။

ဒီလိုပုံစံနဲ့ ကုဒ်ထဲမှာ ရေးဆွဲနိုင်ပါတယ်။

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ သင်ရဲ့ ဟီးရိုကို frame တစ်ခုစီမှာ ပြန်လည်ရေးဆွဲရင် performance cost တက်လာနိုင်တဲ့ အကြောင်းရင်းကို တွေးမြင်နိုင်ပါသလား? [ဒီ pattern ရဲ့ အခြားရွေးချယ်စရာ](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas) အကြောင်းကို ဖတ်ရှုပါ။

## ကီးဘုတ် event ကို ကိုင်တွယ်ခြင်း

Event တွေကို ကိုင်တွယ်ဖို့အတွက် အထူးသတ်မှတ်ထားတဲ့ event တွေကို ကုဒ်နဲ့ ချိတ်ဆက်ရပါတယ်။ ကီးဘုတ် event တွေဟာ တစ်ခုလုံး window ပေါ်မှာ ဖြစ်ပေါ်ပြီး မောက်စ် event တွေက `click` ကဲ့သို့ element တစ်ခုကို click လုပ်ခြင်းနဲ့ ချိတ်ဆက်နိုင်ပါတယ်။ ဒီ project တစ်ခုလုံးမှာ ကီးဘုတ် event တွေကို အသုံးပြုပါမယ်။

Event ကို ကိုင်တွယ်ဖို့အတွက် window ရဲ့ `addEventListener()` method ကို အသုံးပြုပြီး input parameter နှစ်ခုကို ပေးရပါမယ်။ ပထမ parameter က event ရဲ့ နာမည်ဖြစ်ပြီး ဥပမာ `keyup` ဖြစ်ပါတယ်။ ဒုတိယ parameter က event ဖြစ်ပေါ်တဲ့အခါ အလုပ်လုပ်သင့်တဲ့ function ဖြစ်ပါတယ်။

ဥပမာအနေနဲ့:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Key event တွေအတွက် event ရဲ့ property နှစ်ခုကို အသုံးပြုပြီး ဘယ် key ကို နှိပ်ထားတယ်ဆိုတာ သိနိုင်ပါတယ်။

- `key`: နှိပ်ထားတဲ့ key ရဲ့ string ကိုယ်စားပြုမှုဖြစ်ပြီး ဥပမာ `ArrowUp`
- `keyCode`: number ကိုယ်စားပြုမှုဖြစ်ပြီး ဥပမာ `37`, `ArrowLeft` ကို ကိုယ်စားပြုပါတယ်။

✅ Key event manipulation ဟာ ဂိမ်းတိုးတက်မှုအပြင် အခြားအရာတွေမှာလည်း အသုံးဝင်ပါတယ်။ ဒီနည်းလမ်းကို ဘယ်လိုအသုံးချနိုင်မလဲဆိုတာ တွေးကြည့်ပါ။

### အထူး key များ: သတိထားရမည့်အချက်

အချို့ *အထူး* key တွေဟာ window ကို အကျိုးသက်ရောက်စေပါတယ်။ ဒါဟာ သင် `keyup` event ကို နားထောင်ပြီး သင့်ဟီးရိုကို အထူး key တွေကို အသုံးပြု၍ ရွှေ့လျှောက်တဲ့အခါ horizontal scrolling ကိုလည်း လုပ်ဆောင်နိုင်ပါတယ်။ ဒီအကြောင်းကြောင့် သင့်ဂိမ်းကို တည်ဆောက်တဲ့အခါ browser ရဲ့ built-in behavior ကို *ပိတ်ထား* လိုတယ်။ ဒီလိုလုပ်ဖို့အတွက် သင့်မှာ ဒီလိုကုဒ်လိုအပ်ပါတယ်။

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

အထက်ပါကုဒ်ဟာ arrow-key တွေ နဲ့ space key ရဲ့ *default* behavior ကို ပိတ်ထားပါမယ်။ *ပိတ်ထား* mechanism ဟာ `e.preventDefault()` ကို ခေါ်တဲ့အခါ ဖြစ်ပေါ်ပါတယ်။

## ဂိမ်းကနေ ဖြစ်ပေါ်လာတဲ့ လှုပ်ရှားမှု

Timer တွေကို အသုံးပြုခြင်းဖြင့် အရာဝတ္ထုတွေကို ကိုယ်တိုင် ရွှေ့လှုပ်စေနိုင်ပါတယ်။ ဥပမာ `setTimeout()` သို့မဟုတ် `setInterval()` function တွေကို အသုံးပြုပြီး အချိန်တစ်ခုစီမှာ အရာဝတ္ထုရဲ့ တည်နေရာကို update လုပ်နိုင်ပါတယ်။ ဒီလိုပုံစံနဲ့ ရေးနိုင်ပါတယ်:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## ဂိမ်း loop

ဂိမ်း loop ဟာ အကြမ်းအားဖြင့် အချိန်အကွာအဝေးတစ်ခုစီမှာ ခေါ်ဆောင်ခံရတဲ့ function ဖြစ်ပါတယ်။ ဂိမ်း loop ဟာ အသုံးပြုသူအတွက် မြင်နိုင်တဲ့ အရာအားလုံးကို loop ထဲမှာ ရေးဆွဲပါတယ်။ ဂိမ်း loop ဟာ ဂိမ်းရဲ့ အစိတ်အပိုင်းဖြစ်တဲ့ game object တွေကို အသုံးပြုပြီး အရာအားလုံးကို ရေးဆွဲပေးပါတယ်။ ဥပမာ laser နဲ့ အာလီယန်ကို ထိမှန်ပြီး ပေါက်ကွဲသွားတဲ့အခါ အဲ့ဒီ object ဟာ လက်ရှိဂိမ်း loop ရဲ့ အစိတ်အပိုင်းမဖြစ်တော့ပါဘူး (ဒီအကြောင်းကို နောက်ပိုင်း သင်ခန်းစာတွေမှာ သင်ယူပါမယ်)။

ဂိမ်း loop ဟာ 通常 ကုဒ်အနေနဲ့ ဒီလိုပုံစံရှိပါတယ်:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

အထက်ပါ loop ဟာ canvas ကို ပြန်လည်ရေးဆွဲဖို့ `200` milliseconds တစ်ကြိမ်စီ ခေါ်ဆောင်ခံရပါတယ်။ သင့်ဂိမ်းအတွက် make sense ဖြစ်တဲ့ interval ကို ရွေးချယ်နိုင်ပါတယ်။

## အာကာသဂိမ်းကို ဆက်လက်တိုးတက်အောင်လုပ်ခြင်း

သင့်ရဲ့ ရှိပြီးသားကုဒ်ကို ယူပြီး တိုးချဲ့ပါမယ်။ အပိုင်း I မှာ ပြီးစီးထားတဲ့ကုဒ်ကို သို့မဟုတ် [အပိုင်း II- starter](../../../../6-space-game/3-moving-elements-around/your-work) မှာရှိတဲ့ကုဒ်ကို အသုံးပြုပါ။

- **ဟီးရိုကို ရွှေ့လျှောက်ခြင်း**: arrow key တွေကို အသုံးပြုပြီး ဟီးရိုကို ရွှေ့လျှောက်နိုင်ဖို့ ကုဒ်ထည့်ပါမယ်။
- **အာလီယန်တွေကို ရွှေ့လျှောက်ခြင်း**: အာလီယန်တွေကို အပေါ်မှ အောက်သို့ သတ်မှတ်ထားတဲ့အမြန်နှုန်းနဲ့ ရွှေ့လျှောက်နိုင်ဖို့ ကုဒ်ထည့်ပါမယ်။

## အကြံပြုအဆင့်များ

`your-work` sub folder ထဲမှာ ဖန်တီးထားတဲ့ ဖိုင်တွေကို ရှာပါ။ အောက်ပါအတိုင်း ပါဝင်ထားသင့်ပါတယ်။

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

သင့် project ကို `your_work` folder မှာ စတင်ဖို့အတွက်:

```bash
cd your-work
npm start
```

အထက်ပါအတိုင်း HTTP Server ကို `http://localhost:5000` လိပ်စာမှာ စတင်ပါမယ်။ Browser ကို ဖွင့်ပြီး အဲ့ဒီလိပ်စာကို ထည့်ပါ။ အခုအချိန်မှာ ဟီးရိုနဲ့ အာလီယန်တွေကို ပြသထားသင့်ပါတယ်။ ဒါပေမယ့် - အခုထိ ဘာမှ မရွှေ့လျှောက်သေးပါဘူး!

### ကုဒ်ထည့်ပါ

1. **`hero` နဲ့ `enemy` အတွက် အထူး object တွေ ထည့်ပါ**: `x` နဲ့ `y` property တွေပါဝင်သင့်ပါတယ်။ ([Inheritance or composition](../README.md) အပိုင်းကို သတိရပါ။)

   *အကြံပြုချက်*: `game object` ဟာ `x` နဲ့ `y` နဲ့ canvas ပေါ်မှာ ကိုယ်တိုင်ကို ရေးဆွဲနိုင်တဲ့ စွမ်းရည်ရှိသင့်ပါတယ်။

   >အကြံပြုချက်: အောက်ပါအတိုင်း GameObject class ကို ဖန်တီးပြီး canvas ပေါ်မှာ ရေးဆွဲပါ:

    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    အခုတော့ ဒီ GameObject ကို Hero နဲ့ Enemy ဖန်တီးဖို့ တိုးချဲ့ပါ။

    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Key-event handler တွေ ထည့်ပါ**: ဟီးရိုကို အပေါ်/အောက်/ဘယ်/ညာ ရွှေ့လျှောက်နိုင်ဖို့ ကီး navigation ကို handle လုပ်ပါ။

   *သတိရပါ*: ကာတီရှီယန်စနစ်မှာ အပေါ်-ဘယ်က `0,0` ဖြစ်ပါတယ်။ Default behavior ကို ပိတ်ထားဖို့ ကုဒ်ထည့်ဖို့လည်း သတိရပါ။

   >အကြံပြုချက်: သင့်ရဲ့ onKeyDown function ကို ဖန်တီးပြီး window နဲ့ ချိတ်ဆက်ပါ:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   ဒီအချိန်မှာ သင့် browser console ကို စစ်ဆေးပြီး keystroke တွေ log ဖြစ်နေတဲ့အခြေအနေကို ကြည့်ပါ။

3. **[Pub sub pattern](../README.md) ကို အကောင်အထည်ဖော်ပါ**: သင့်ကုဒ်ကို သန့်ရှင်းစေဖို့ အပိုင်းတွေကို ဆက်လက်လုပ်ဆောင်ပါ။

   ဒီနောက်ဆုံးအပိုင်းကို လုပ်ဆောင်ဖို့:

   1. **Event listener တစ်ခု ထည့်ပါ** window ပေါ်မှာ:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **EventEmitter class တစ်ခု ဖန်တီးပါ**: message တွေကို publish နဲ့ subscribe လုပ်နိုင်ဖို့:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Constants တွေ ထည့်ပြီး EventEmitter ကို စတင်ပါ**:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **ဂိမ်းကို initialize လုပ်ပါ**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **ဂိမ်း loop ကို စတင်ပါ**

   window.onload function ကို refactor လုပ်ပြီး ဂိမ်းကို initialize လုပ်ပါ။ အကောင်းဆုံး interval တစ်ခုမှာ game loop ကို စတင်ပါ။ Laser beam ကိုလည်း ထည့်ပါ:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **အာလီယန်တွေကို ရွှေ့လျှောက်ဖို့ ကုဒ်ထည့်ပါ**

    `createEnemies()` function ကို refactor လုပ်ပြီး အာလီယန်တွေကို ဖန်တီးပြီး gameObjects class ထဲ push လုပ်ပါ:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    နောက်ပြီး `createHero()` function ကို ဟီးရိုအတွက် အတူတူလုပ်ဆောင်ပါ။
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    နောက်ဆုံးမှာ `drawGameObjects()` function ကို ထည့်ပြီး ရေးဆွဲစတင်ပါ:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    သင့်အာလီယန်တွေဟာ သင့်ဟီးရို spaceship ကို တိုက်ခိုက်ဖို့ စတင်ရောက်လာပါပြီ!

---

## 🚀 စိန်ခေါ်မှု

သင့်ကုဒ်ဟာ function တွေ၊ variable တွေ၊ class တွေကို ထည့်သွင်းတဲ့အခါ 'spaghetti code' ဖြစ်လာနိုင်ပါတယ်။ သင့်ကုဒ်ကို ပိုမိုဖတ်ရှုရလွယ်ကူစေဖို့ ဘယ်လိုစနစ်တစ်ခုကို အကောင်းဆုံး စီမံနိုင်မလဲ? Sketch တစ်ခုရေးဆွဲပြီး သင့်ကုဒ်ကို စနစ်တကျ စီမံပါ။

## မိန့်ခွန်းပြီးနောက် မေးခွန်း

[မိန့်ခွန်းပြီးနောက် မေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/34)

## ပြန်လည်သုံးသပ်ခြင်း & ကိုယ်တိုင်လေ့လာခြင်း

Framework များမသုံးဘဲ ဂိမ်းကိုရေးသားနေစဉ်မှာ JavaScript-based canvas framework တွေ အများကြီးရှိပါတယ်။ [ဒီ framework တွေ](https://github.com/collections/javascript-game-engines) အကြောင်းကို ဖတ်ရှုဖို့ အချိန်ယူပါ။

## လုပ်ငန်းတာဝန်

[သင့်ကုဒ်ကို မှတ်ချက်ထည့်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်ခြင်းတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် ရှုလေ့လာသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်ခြင်းကို အကြံပြုပါသည်။ ဤဘာသာပြန်ကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။