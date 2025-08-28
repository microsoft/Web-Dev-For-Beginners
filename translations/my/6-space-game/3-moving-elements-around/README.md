<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-28T18:37:46+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်း တည်ဆောက်ခြင်း အပိုင်း ၃: လှုပ်ရှားမှု ထည့်သွင်းခြင်း

## မိန့်ခွန်းမတိုင်မီ စစ်ဆေးမှု

[မိန့်ခွန်းမတိုင်မီ စစ်ဆေးမှု](https://ff-quizzes.netlify.app/web/quiz/33)

ဂိမ်းတွေဟာ အကောင်တွေ မျက်နှာပြင်ပေါ်မှာ လှုပ်ရှားနေမှ ပိုမိုစိတ်ဝင်စားဖွယ် ဖြစ်လာပါတယ်။ ဒီဂိမ်းမှာတော့ လှုပ်ရှားမှုနှစ်မျိုးကို အသုံးပြုသွားမှာဖြစ်ပါတယ်-

- **ကီးဘုတ်/မောက်စ် လှုပ်ရှားမှု**: အသုံးပြုသူက ကီးဘုတ် သို့မဟုတ် မောက်စ်ကို အသုံးပြုပြီး မျက်နှာပြင်ပေါ်မှာ အရာဝတ္ထုတစ်ခုကို လှုပ်ရှားစေခြင်း။
- **ဂိမ်းမှ ဖြစ်ပေါ်သော လှုပ်ရှားမှု**: ဂိမ်းက အချိန်အကွာအဝေးတစ်ခုအတွင်း အရာဝတ္ထုတစ်ခုကို လှုပ်ရှားစေခြင်း။

ဒါဆိုရင် မျက်နှာပြင်ပေါ်မှာ အရာဝတ္ထုတွေကို ဘယ်လို လှုပ်ရှားစေမလဲ? ဒါဟာ ကားတီးရှန်း ကိုဩဒိနိတ် (cartesian coordinates) အပေါ်မှာ အခြေခံထားတာပါ။ အရာဝတ္ထုရဲ့ တည်နေရာ (x, y) ကို ပြောင်းပြီး မျက်နှာပြင်ကို ပြန်ဆွဲရုံပါပဲ။

အများအားဖြင့် မျက်နှာပြင်ပေါ်မှာ *လှုပ်ရှားမှု* ကို အောင်မြင်စေဖို့ အောက်ပါအဆင့်တွေလိုအပ်ပါတယ်-

1. **အရာဝတ္ထုတစ်ခုအတွက် တည်နေရာအသစ် သတ်မှတ်ခြင်း**: အရာဝတ္ထုဟာ လှုပ်ရှားနေတယ်လို့ မြင်ရဖို့အတွက် လိုအပ်ပါတယ်။
2. **မျက်နှာပြင်ကို ရှင်းလင်းခြင်း**: မျက်နှာပြင်ကို ဆွဲခြင်းတိုင်းအကြားမှာ ရှင်းလင်းဖို့ လိုအပ်ပါတယ်။ ဒါကို နောက်ခံအရောင်နဲ့ ပြည့်စွက်ထားတဲ့ စတုရန်းကို ဆွဲခြင်းဖြင့် ရှင်းလင်းနိုင်ပါတယ်။
3. **အရာဝတ္ထုကို တည်နေရာအသစ်မှာ ပြန်ဆွဲခြင်း**: ဒါကို လုပ်ပြီးမှ အရာဝတ္ထုကို တစ်နေရာကနေ တစ်နေရာကို လှုပ်ရှားစေခြင်းကို အောင်မြင်စေပါတယ်။

ဒီဟာကို ကုဒ်အနေနဲ့ အောက်ပါအတိုင်း ဖြစ်နိုင်ပါတယ်-

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

✅ မိန့်ခွန်းကို တစ်စက္ကန့်လျှင် အများကြိမ် ပြန်ဆွဲရတာကြောင့် စွမ်းဆောင်ရည်အပေါ် သက်ရောက်မှုရှိနိုင်တဲ့ အကြောင်းရင်းတစ်ခုကို တွေးနိုင်ပါသလား? [ဒီပုံစံအတွက် အခြားရွေးချယ်စရာများ](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas) အကြောင်း ဖတ်ရှုပါ။

## ကီးဘုတ်ဖြင့် အဖြစ်အပျက်များကို ကိုင်တွယ်ခြင်း

အဖြစ်အပျက်တွေကို ကိုင်တွယ်ဖို့အတွက် သတ်မှတ်ထားတဲ့ အဖြစ်အပျက်တွေကို ကုဒ်နဲ့ ဆက်စပ်ရပါတယ်။ ကီးဘုတ်အဖြစ်အပျက်တွေဟာ တစ်ခုလုံးကို သက်ရောက်စေပြီး မောက်စ်အဖြစ်အပျက်တွေ (ဥပမာ `click`) ကတော့ သတ်မှတ်ထားတဲ့ အရာဝတ္ထုတစ်ခုကိုသာ သက်ရောက်စေပါတယ်။ ဒီပရောဂျက်တစ်ခုလုံးမှာတော့ ကီးဘုတ်အဖြစ်အပျက်တွေကို အသုံးပြုသွားမှာပါ။

အဖြစ်အပျက်တစ်ခုကို ကိုင်တွယ်ဖို့အတွက် `addEventListener()` ဆိုတဲ့ window method ကို အသုံးပြုရပြီး input parameter နှစ်ခုကို ထည့်သွင်းရပါတယ်။ ပထမ parameter က အဖြစ်အပျက်ရဲ့ အမည်ဖြစ်ပြီး (ဥပမာ `keyup`) ဒုတိယ parameter ကတော့ အဖြစ်အပျက်ဖြစ်ပေါ်တဲ့အခါ ခေါ်သုံးသင့်တဲ့ function ဖြစ်ပါတယ်။

ဥပမာအနေနဲ့-

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Key event တွေအတွက် အဖြစ်အပျက်မှာ အသုံးပြုနိုင်တဲ့ property နှစ်ခုရှိပါတယ်-

- `key`: ဒါဟာ ဖိထားတဲ့ key ရဲ့ string ကိုယ်စားပြုချက်ဖြစ်ပြီး (ဥပမာ `ArrowUp`)
- `keyCode`: ဒါဟာ နံပါတ်ကိုယ်စားပြုချက်ဖြစ်ပြီး (ဥပမာ `37`), `ArrowLeft` ကို ကိုယ်စားပြုပါတယ်။

✅ Key event manipulation ဟာ ဂိမ်းဖွံ့ဖြိုးတိုးတက်မှုအပြင် အခြားဘယ်လိုအသုံးဝင်မှုတွေ ရှိနိုင်တယ်လို့ တွေးနိုင်ပါသလဲ?

### အထူးသော key များ: သတိပြုရန်

အချို့သော *အထူး* key တွေဟာ window ကို သက်ရောက်စေပါတယ်။ ဒါကြောင့် `keyup` အဖြစ်အပျက်ကို နားထောင်နေတဲ့အခါ ဒီအထူး key တွေကို သုံးပြီး hero ကို လှုပ်ရှားစေမယ်ဆိုရင် horizontal scrolling ကိုလည်း လုပ်ဆောင်နိုင်ပါတယ်။ ဒီအကြောင်းကြောင့် ဂိမ်းကို တည်ဆောက်နေစဉ်မှာ ဒီ built-in browser behavior ကို *ပိတ်ထား* လိုက်ဖို့လိုပါတယ်။ ဒီလိုလုပ်ဖို့အတွက် အောက်ပါကုဒ်လိုမျိုး လိုအပ်ပါတယ်-

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

အထက်ပါကုဒ်ဟာ arrow key တွေ နဲ့ space key ရဲ့ *default* behavior ကို ပိတ်ထားစေမှာဖြစ်ပါတယ်။ ဒီ *ပိတ်ထားမှု* ကို `e.preventDefault()` ကို ခေါ်သုံးခြင်းဖြင့် ဖြစ်စေပါတယ်။

## ဂိမ်းမှ ဖြစ်ပေါ်သော လှုပ်ရှားမှု

`setTimeout()` သို့မဟုတ် `setInterval()` function တို့လို timer တွေကို အသုံးပြုပြီး အရာဝတ္ထုတစ်ခုရဲ့ တည်နေရာကို တစ်ခုချင်းစီ update လုပ်ခြင်းဖြင့် အရာဝတ္ထုတွေကို ကိုယ်တိုင် လှုပ်ရှားစေနိုင်ပါတယ်။ ဒီဟာကို အောက်ပါအတိုင်း ဖြစ်နိုင်ပါတယ်-

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## ဂိမ်း loop

ဂိမ်း loop ဆိုတာဟာ အချိန်အကွာအဝေးတစ်ခုအတွင်း ခေါ်သုံးတဲ့ function တစ်ခုဖြစ်ပါတယ်။ ဒါကို ဂိမ်း loop လို့ ခေါ်တာက အသုံးပြုသူအတွက် မြင်နိုင်တဲ့ အရာအားလုံးကို loop ထဲမှာ ဆွဲထားရလို့ပါ။ ဂိမ်း loop ဟာ ဂိမ်းရဲ့ အစိတ်အပိုင်းအားလုံးကို အသုံးပြုပြီး ဆွဲထားပါတယ်၊ သို့မဟုတ် တစ်ခုခုကြောင့် ဂိမ်းရဲ့ အစိတ်အပိုင်းတစ်ခုအနေနဲ့ မပါတော့ဘူးဆိုရင်တော့ မဆွဲတော့ပါဘူး။ ဥပမာအားဖြင့် ရန်သူတစ်ယောက်ဟာ laser နဲ့ ထိမှန်ပြီး ပေါက်ကွဲသွားရင်တော့ အဲ့ဒီအရာဟာ လက်ရှိဂိမ်း loop မှာ မပါတော့ပါဘူး (ဒီအကြောင်းကို နောက်ပိုင်းသင်ခန်းစာတွေမှာ ပိုမိုလေ့လာရမှာပါ)။

ဂိမ်း loop ဟာ ကုဒ်အနေနဲ့ အောက်ပါအတိုင်း ဖြစ်နိုင်ပါတယ်-

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

အထက်ပါ loop ဟာ `200` milliseconds တစ်ကြိမ်စီ ခေါ်သုံးပြီး canvas ကို ပြန်ဆွဲပါတယ်။ သင့်ဂိမ်းအတွက် make sense ဖြစ်တဲ့ interval ကို ရွေးချယ်နိုင်ပါတယ်။

## အာကာသဂိမ်းကို ဆက်လက်လုပ်ဆောင်ခြင်း

သင့်ရဲ့ ရှိပြီးသားကုဒ်ကို ယူပြီး တိုးချဲ့သွားပါမည်။ အပိုင်း I မှာ ပြီးစီးထားတဲ့ ကုဒ်ကို သုံးပါ၊ သို့မဟုတ် [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work) မှာ ရှိတဲ့ ကုဒ်ကို သုံးပါ။

- **Hero ကို လှုပ်ရှားခြင်း**: Arrow key တွေကို အသုံးပြုပြီး hero ကို လှုပ်ရှားနိုင်အောင် ကုဒ်ထည့်ပါ။
- **ရန်သူတွေကို လှုပ်ရှားစေခြင်း**: ရန်သူတွေကို အချိန်အကွာအဝေးတစ်ခုအတွင်း အပေါ်ကနေ အောက်ကို လှုပ်ရှားစေဖို့ ကုဒ်ထည့်ပါ။

## အကြံပြုအဆင့်များ

`your-work` sub folder ထဲမှာ ဖန်တီးထားတဲ့ ဖိုင်တွေကို ရှာပါ။ အောက်ပါအတိုင်း ပါဝင်ထားသင့်ပါတယ်-

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

`your_work` folder ထဲမှာ သင့် project ကို စတင်ဖို့အတွက် အောက်ပါ command ကို ရိုက်ပါ-

```bash
cd your-work
npm start
```

အထက်ပါ command ဟာ `http://localhost:5000` ဆိုတဲ့ လိပ်စာမှာ HTTP Server တစ်ခုကို စတင်ပါမည်။ Browser တစ်ခုကို ဖွင့်ပြီး အဲ့ဒီလိပ်စာကို ထည့်ပါ၊ အခုအချိန်မှာတော့ hero နဲ့ ရန်သူအားလုံးကို ပြသပေမယ့် ဘာမှ မလှုပ်ရှားသေးပါဘူး။

### ကုဒ်ထည့်ပါ

1. **Hero, Enemy, Game Object အတွက် အထူး object တွေ ထည့်ပါ**၊ သူတို့မှာ `x` နဲ့ `y` property တွေ ရှိသင့်ပါတယ်။ ([Inheritance or composition](../README.md) အပိုင်းကို သတိပြုပါ။)

   *အကြံပြုချက်*: `game object` ဟာ `x` နဲ့ `y` နဲ့ သူ့ကို canvas ပေါ်မှာ ဆွဲနိုင်စွမ်း ရှိသင့်ပါတယ်။

   >အကြံပြုချက်: အောက်ပါအတိုင်း constructor နဲ့ GameObject class အသစ်တစ်ခုကို စတင်ထည့်ပါ၊ ပြီးရင် canvas ပေါ်မှာ ဆွဲပါ-

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

2. **Key-event handler တွေ ထည့်ပါ** Hero ကို အပေါ်/အောက်/ဘယ်/ညာ လှုပ်ရှားစေဖို့။

   *သတိပြုရန်*: ဒါဟာ ကားတီးရှန်းစနစ်ဖြစ်ပြီး၊ အပေါ်ဘက်-ဘယ်ဘက်က `0,0` ဖြစ်ပါတယ်။ Default behavior ကို ပိတ်ဖို့လည်း သတိပြုပါ။

   >အကြံပြုချက်: သင့်ရဲ့ onKeyDown function ကို ဖန်တီးပြီး window နဲ့ ဆက်စပ်ပါ-

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   ဒီအချိန်မှာ သင့် browser console ကို စစ်ဆေးပြီး keystroke တွေကို ကြည့်ပါ။

3. **[Pub sub pattern](../README.md) ကို အကောင်အထည်ဖော်ပါ**၊ ဒီဟာက သင့်ကုဒ်ကို သန့်ရှင်းစေမှာဖြစ်ပါတယ်။

   ဒီအပိုင်းကို လုပ်ဖို့အတွက်-

   1. **Window မှာ event listener တစ်ခု ထည့်ပါ**:

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

    1. **EventEmitter class တစ်ခု ဖန်တီးပါ** message တွေကို publish နဲ့ subscribe လုပ်ဖို့:

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

    1. **ဂိမ်းကို စတင်ပါ**

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

   Window.onload function ကို Refactor လုပ်ပြီး ဂိမ်းကို စတင်ပြီး interval ကောင်းတစ်ခုမှာ ဂိမ်း loop ကို စတင်ပါ။ Laser beam ကိုလည်း ထည့်ပါ-

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

5. **ရန်သူတွေကို အချိန်အကွာအဝေးတစ်ခုမှာ လှုပ်ရှားစေဖို့ ကုဒ်ထည့်ပါ**

    `createEnemies()` function ကို Refactor လုပ်ပြီး ရန်သူတွေကို ဖန်တီးပြီး gameObjects class ထဲသို့ ထည့်ပါ:

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
    
    နောက်ပြီးတော့ Hero အတွက် `createHero()` function တစ်ခု ဖန်တီးပါ။

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

    နောက်ဆုံးမှာတော့ `drawGameObjects()` function တစ်ခု ထည့်ပြီး ဆွဲပါ-

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    သင့်ရဲ့ ရန်သူတွေဟာ သင့် hero spaceship ကို တိုက်ခိုက်ဖို့ စတင်လှုပ်ရှားပါလိမ့်မည်!

---

## 🚀 စိန်ခေါ်မှု

သင်မြင်နိုင်သလို သင့်ကုဒ်ဟာ function တွေ၊ variable တွေ၊ class တွေ ထည့်သွင်းလာတာနဲ့အမျှ 'spaghetti code' ဖြစ်လာနိုင်ပါတယ်။ သင့်ကုဒ်ကို ပိုမိုဖတ်ရှုရလွယ်ကူအောင် ဘယ်လို ပိုမိုကောင်းမွန်စွာ စီမံနိုင်မလဲ? Sketch တစ်ခုရေးပြီး သင့်ကုဒ်ကို စနစ်တကျ စီမံပါ၊ တစ်ဖိုင်ထဲမှာပဲ ရှိနေတယ်ဆိုရင်တောင်ပါ။

## မိန့်ခွန်းပြီးနောက် စစ်ဆေးမှု

[မိန့်ခွန်းပြီးနောက် စစ်ဆေးမှု](https://ff-quizzes.netlify.app/web/quiz/34)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

ကျွန်ုပ်တို့ ဂိမ်းကို framework မသုံးဘဲ ရေးသားနေသော်လည်း JavaScript-based canvas framework တွေ အများကြီး ရှိပါတယ်။ [ဒီ framework တွေ](https://github.com/collections/javascript-game-engines) အကြောင်း ဖတ်ရှုဖို့ အချိန်ယူပါ။

## လုပ်ငန်းတာဝန်

[သင့်ကုဒ်ကို မှတ်ချက်ထည့်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါရှိနိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာရှိသော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအမှားများ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။