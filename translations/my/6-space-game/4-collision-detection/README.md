<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-28T18:39:05+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်း တည်ဆောက်ခြင်း အပိုင်း ၄: လေဆာထည့်သွင်းခြင်းနှင့် တိုက်မိမှုများကို စစ်ဆေးခြင်း

## သင်ခန်းစာမတိုင်မီ မေးခွန်းများ

[သင်ခန်းစာမတိုင်မီ မေးခွန်းများ](https://ff-quizzes.netlify.app/web/quiz/35)

ဒီသင်ခန်းစာမှာ JavaScript ကို အသုံးပြုပြီး လေဆာပစ်ပေါက်နည်းကို သင်ယူပါမယ်! ဂိမ်းမှာ အောက်ပါအရာ ၂ ခုကို ထည့်သွင်းပါမယ်-

- **လေဆာ**: ဒီလေဆာကို သင့်ရဲ့ ဟီးရိုးရဲ့ သင်္ဘောကနေ အပေါ်ဘက်ကို ပစ်ပေါက်ပါမယ်။
- **တိုက်မိမှု စစ်ဆေးခြင်း**: *ပစ်ပေါက်ခြင်း* စနစ်ကို အကောင်အထည်ဖော်ရာမှာ ဂိမ်းစည်းကမ်းများကို ထည့်သွင်းပါမယ်။
   - **လေဆာက ရန်သူကို ထိမိခြင်း**: ရန်သူဟာ လေဆာကို ထိမိရင် သေဆုံးပါမယ်။
   - **လေဆာက မျက်နှာပြင်အပေါ်ဘက်ကို ထိမိခြင်း**: လေဆာဟာ မျက်နှာပြင်အပေါ်ဘက်ကို ထိမိရင် ဖျက်သိမ်းပါမယ်။
   - **ရန်သူနှင့် ဟီးရိုး တိုက်မိခြင်း**: ရန်သူနှင့် ဟီးရိုး တိုက်မိရင် နှစ်ခုလုံး ဖျက်သိမ်းပါမယ်။
   - **ရန်သူက မျက်နှာပြင်အောက်ဘက်ကို ရောက်ခြင်း**: ရန်သူက မျက်နှာပြင်အောက်ဘက်ကို ရောက်ရင် ရန်သူနှင့် ဟီးရိုး နှစ်ခုလုံး ဖျက်သိမ်းပါမယ်။

အတိုချုံး来说ရင် သင် -- *ဟီးရိုး* -- ဟာ ရန်သူတွေကို မျက်နှာပြင်အောက်ဘက်ကို မရောက်ခင် လေဆာနဲ့ ပစ်ပေါက်ရပါမယ်။

✅ ကွန်ပျူတာဂိမ်းပထမဆုံးရေးသားခဲ့တဲ့ ဂိမ်းအကြောင်းကို သုတေသန လုပ်ကြည့်ပါ။ အဲဒီဂိမ်းရဲ့ လုပ်ဆောင်ချက်တွေက ဘာတွေလဲ?

အတူတူ ဟီးရိုးဖြစ်ကြရအောင်!

## တိုက်မိမှု စစ်ဆေးခြင်း

တိုက်မိမှုကို ဘယ်လို စစ်ဆေးမလဲ? ဂိမ်းအရာဝတ္ထုတွေကို လှုပ်ရှားနေတဲ့ စတုရန်းပုံစံအနေနဲ့ တွေးရပါမယ်။ ဘာကြောင့်လဲဆိုတော့ ဂိမ်းအရာဝတ္ထုကို ရေးဆွဲဖို့ အသုံးပြုတဲ့ ပုံရိပ်ဟာ စတုရန်းပုံစံဖြစ်ပါတယ်။ အဲဒါမှာ `x`, `y`, `width` နဲ့ `height` ရှိပါတယ်။

ဟီးရိုးနဲ့ ရန်သူ စတုရန်းပုံစံ ၂ ခု *ထိတွေ့*ရင် တိုက်မိမှု ဖြစ်ပါတယ်။ အဲဒီအချိန်မှာ ဘာဖြစ်ရမလဲဆိုတာက ဂိမ်းစည်းကမ်းတွေ အပေါ် မူတည်ပါတယ်။ တိုက်မိမှု စစ်ဆေးဖို့အတွက် အောက်ပါအရာတွေ လိုအပ်ပါတယ်-

1. ဂိမ်းအရာဝတ္ထုရဲ့ စတုရန်းပုံစံကို ရယူနိုင်တဲ့ နည်းလမ်းတစ်ခု:

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. နှိုင်းယှဉ်မှုလုပ်ဆောင်တဲ့ function တစ်ခု၊ ဒီ function ဟာ အောက်ပါအတိုင်း ဖြစ်နိုင်ပါတယ်-

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## အရာတွေကို ဘယ်လို ဖျက်သိမ်းမလဲ

ဂိမ်းမှာ အရာတွေကို ဖျက်သိမ်းဖို့အတွက် ဂိမ်းကို အဲဒီအရာကို မျက်နှာပြင်မှာ ထပ်မပုံဖော်ဖို့ ပြောရပါမယ်။ အဲဒါကို *သေဆုံး*အဖြစ် သတ်မှတ်ခြင်းအားဖြင့် လုပ်ဆောင်နိုင်ပါတယ်၊ ဥပမာ-

```javascript
// collision happened
enemy.dead = true
```

ပြီးရင် *သေဆုံး*အရာတွေကို မျက်နှာပြင်ပုံဖော်မယ့်အခါမှာ စီမံနိုင်ပါတယ်၊ ဥပမာ-

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## လေဆာကို ဘယ်လို ပစ်ပေါက်မလဲ

လေဆာပစ်ပေါက်ခြင်းဟာ key-event ကို တုံ့ပြန်ပြီး အပေါ်ဘက်ကို လှုပ်ရှားတဲ့ object တစ်ခုကို ဖန်တီးခြင်းဖြစ်ပါတယ်။ အဲဒီအတွက် အောက်ပါအဆင့်တွေ လိုအပ်ပါတယ်-

1. **လေဆာ object တစ်ခု ဖန်တီးပါ**: ဟီးရိုးရဲ့ သင်္ဘောအပေါ်ဘက်ကနေ ဖန်တီးပြီး မျက်နှာပြင်အပေါ်ဘက်ကို လှုပ်ရှားပါမယ်။
2. **key event နဲ့ code ကို ချိတ်ဆက်ပါ**: ကီးဘုတ်မှာ လေဆာပစ်ပေါက်ကို ကိုယ်စားပြုတဲ့ key တစ်ခုကို ရွေးချယ်ရပါမယ်။
3. **လေဆာပုံစံရှိတဲ့ ဂိမ်းအရာဝတ္ထုကို ဖန်တီးပါ**: key ကို နှိပ်တဲ့အခါ။

## လေဆာပစ်ပေါက်အတွက် Cooldown

လေဆာဟာ သင့်ရဲ့ key ကို နှိပ်တိုင်း ပစ်ပေါက်ရပါမယ်၊ ဥပမာ *space* key ကို။ ဂိမ်းမှာ အလွန်များပြားတဲ့ လေဆာတွေကို အတိုင်းမသိ ဖန်တီးမရအောင် ကန့်သတ်ဖို့ လိုအပ်ပါတယ်။ အဲဒီကန့်သတ်မှုကို *cooldown* timer ကို အသုံးပြုပြီး လေဆာကို အချိန် interval တစ်ခုအတွင်းမှာပဲ ပစ်ပေါက်နိုင်အောင် လုပ်ဆောင်ရပါမယ်။ အဲဒီနည်းလမ်းကို အောက်ပါအတိုင်း အကောင်အထည်ဖော်နိုင်ပါတယ်-

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ *cooldowns* အကြောင်းကို အာကာသဂိမ်း စီးရီးရဲ့ အပိုင်း ၁ မှာ ပြန်လည်သတိရပါ။

## ဘာကို တည်ဆောက်မလဲ

အရင်သင်ခန်းစာကနေ ရှိပြီးသား code ကို (သင့်ရဲ့ code ကို သန့်စင်ပြီး ပြန်လည်စီမံထားသင့်ပါတယ်) ယူပြီး တိုးချဲ့ပါမယ်။ အပိုင်း II မှ code ကို စတင်သုံးပါ၊ ဒါမှမဟုတ် [အပိုင်း III- starter](../../../../../../../../../your-work) မှ code ကို အသုံးပြုပါ။

> အကြံပြုချက်: သင်လုပ်ဆောင်မယ့် လေဆာဟာ assets folder မှာ ရှိပြီး သင့်ရဲ့ code မှာ reference လုပ်ထားပါတယ်။

- **တိုက်မိမှု စစ်ဆေးခြင်း** ထည့်သွင်းပါ၊ လေဆာဟာ တိုက်မိတဲ့အခါ အောက်ပါစည်းကမ်းတွေကို လိုက်နာရပါမယ်-
   1. **လေဆာက ရန်သူကို ထိမိခြင်း**: ရန်သူဟာ လေဆာကို ထိမိရင် သေဆုံးပါမယ်။
   2. **လေဆာက မျက်နှာပြင်အပေါ်ဘက်ကို ထိမိခြင်း**: လေဆာဟာ မျက်နှာပြင်အပေါ်ဘက်ကို ထိမိရင် ဖျက်သိမ်းပါမယ်။
   3. **ရန်သူနှင့် ဟီးရိုး တိုက်မိခြင်း**: ရန်သူနှင့် ဟီးရိုး တိုက်မိရင် နှစ်ခုလုံး ဖျက်သိမ်းပါမယ်။
   4. **ရန်သူက မျက်နှာပြင်အောက်ဘက်ကို ရောက်ခြင်း**: ရန်သူနှင့် ဟီးရိုး နှစ်ခုလုံး ဖျက်သိမ်းပါမယ်။

## အကြံပြုထားတဲ့ အဆင့်များ

`your-work` sub folder မှာ ဖန်တီးထားတဲ့ ဖိုင်တွေကို ရှာပါ။ အဲဒီ folder မှာ အောက်ပါအရာတွေ ပါဝင်သင့်ပါတယ်-

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

သင့်ရဲ့ project ကို `your_work` folder မှာ စတင်ဖို့အတွက် အောက်ပါ command ကို ရိုက်ပါ-

```bash
cd your-work
npm start
```

အထက်ပါ command ဟာ HTTP Server ကို `http://localhost:5000` မှာ စတင်ပါမယ်။ Browser ကို ဖွင့်ပြီး အဲဒီလိပ်စာကို ထည့်ပါ၊ အခုအချိန်မှာ ဟီးရိုးနဲ့ ရန်သူတွေကို ပြသပေမယ့် ဘာမှ မလှုပ်ရှားသေးပါဘူး။

### Code ထည့်သွင်းပါ

1. **ဂိမ်းအရာဝတ္ထုရဲ့ စတုရန်းပုံစံကို တည်ဆောက်ပါ**: တိုက်မိမှုကို စစ်ဆေးဖို့အတွက် အောက်ပါ code ဟာ `GameObject` ရဲ့ စတုရန်းပုံစံကို ရယူနိုင်ပါတယ်။ သင့်ရဲ့ `GameObject` class ကို ပြင်ဆင်ပါ-

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **တိုက်မိမှုကို စစ်ဆေးတဲ့ code ထည့်ပါ**: စတုရန်း ၂ ခု *ထိတွေ့*မိတာကို စစ်ဆေးတဲ့ function အသစ်တစ်ခုကို ဖန်တီးပါ-

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **လေဆာပစ်ပေါက်စနစ် ထည့်သွင်းပါ**
   1. **key-event message ထည့်ပါ**: *space* key ဟာ ဟီးရိုးရဲ့ သင်္ဘောအပေါ်မှာ လေဆာကို ဖန်တီးရပါမယ်။ `Messages` object မှာ constants ၃ ခုကို ထည့်ပါ-

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **space key ကို handle လုပ်ပါ**: `window.addEventListener` keyup function ကို ပြင်ဆင်ပြီး space key ကို handle လုပ်ပါ-

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **listeners ထည့်ပါ**: `initGame()` function ကို ပြင်ဆင်ပြီး space bar ကို နှိပ်တဲ့အခါ ဟီးရိုးက လေဆာပစ်နိုင်အောင်လုပ်ပါ-

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       နဲ့ `eventEmitter.on()` function အသစ်ကို ထည့်ပြီး ရန်သူဟာ လေဆာနဲ့ တိုက်မိတဲ့အခါ behavior ကို သတ်မှတ်ပါ-

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **object ကို လှုပ်ရှားပါ**: လေဆာဟာ မျက်နှာပြင်အပေါ်ဘက်ကို တဖြည်းဖြည်း လှုပ်ရှားရပါမယ်။ `GameObject` ကို extend လုပ်တဲ့ `Laser` class အသစ်ကို ဖန်တီးပါ-

      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **တိုက်မိမှုကို handle လုပ်ပါ**: လေဆာအတွက် တိုက်မိမှုစည်းကမ်းတွေကို အကောင်အထည်ဖော်ပါ။ `updateGameObjects()` function ကို ဖန်တီးပြီး တိုက်မိတဲ့ object တွေကို စစ်ဆေးပါ-

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      `updateGameObjects()` function ကို `window.onload` ရဲ့ game loop မှာ ထည့်သွင်းပါ။

   4. **လေဆာအတွက် cooldown ကို အကောင်အထည်ဖော်ပါ**: လေဆာကို အချိန် interval တစ်ခုအတွင်းမှာပဲ ပစ်နိုင်အောင်လုပ်ပါ။

      နောက်ဆုံးမှာ `Hero` class ကို ပြင်ဆင်ပြီး cooldown လုပ်နိုင်အောင်လုပ်ပါ-

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

ဒီအချိန်မှာ သင့်ရဲ့ဂိမ်းမှာ functionality ရှိပါပြီ! Arrow keys နဲ့ navigation လုပ်နိုင်ပြီး space bar နဲ့ လေဆာပစ်နိုင်ပါတယ်၊ ရန်သူတွေကို ထိမိရင် ဖျက်သိမ်းပါမယ်။ အောင်မြင်ပါတယ်!

---

## 🚀 စိန်ခေါ်မှု

ပေါက်ကွဲမှုကို ထည့်သွင်းပါ! [Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) မှ assets တွေကို ကြည့်ပြီး ရန်သူဟာ လေဆာနဲ့ တိုက်မိတဲ့အခါ ပေါက်ကွဲမှုကို ထည့်သွင်းကြည့်ပါ။

## သင်ခန်းစာပြီးနောက် မေးခွန်းများ

[သင်ခန်းစာပြီးနောက် မေးခွန်းများ](https://ff-quizzes.netlify.app/web/quiz/36)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

ဂိမ်းမှာ interval တွေကို စမ်းသပ်ကြည့်ပါ။ အဲဒီ interval တွေကို ပြောင်းလဲတဲ့အခါ ဘာဖြစ်မလဲ? [JavaScript timing events](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/) အကြောင်းပိုမိုဖတ်ရှုပါ။

## လုပ်ငန်းတာဝန်

[တိုက်မိမှုများကို စမ်းသပ်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။