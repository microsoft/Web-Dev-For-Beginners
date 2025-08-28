<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-28T18:38:33+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်း တည်ဆောက်ခြင်း အပိုင်း ၅: အမှတ်နှင့် အသက်

## သင်ခန်းစာမတိုင်မီ မေးခွန်း

[သင်ခန်းစာမတိုင်မီ မေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/37)

ဒီသင်ခန်းစာမှာ သင်သည် ဂိမ်းအမှတ်များ ထည့်သွင်းနည်းနှင့် အသက်တွက်ချက်နည်းကို လေ့လာမည်ဖြစ်သည်။

## မျက်နှာပြင်ပေါ်တွင် စာသားရေးဆွဲခြင်း

ဂိမ်းအမှတ်ကို မျက်နှာပြင်ပေါ်တွင် ပြသနိုင်ရန် စာသားကို မျက်နှာပြင်ပေါ်တွင် ထားနိုင်ရမည်။ ဒီအတွက် `fillText()` method ကို canvas object ပေါ်တွင် အသုံးပြုနိုင်သည်။ သင်သည် စာသားအတွက် font, အရောင်၊ alignment (left, right, center) စသည်တို့ကိုလည်း ထိန်းချုပ်နိုင်သည်။ အောက်တွင် မျက်နှာပြင်ပေါ်တွင် စာသားရေးဆွဲထားသော ကုဒ်ကို ဖော်ပြထားသည်။

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ [Canvas ပေါ်တွင် စာသားထည့်သွင်းနည်း](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) အကြောင်း ပိုမိုလေ့လာပါ၊ သင့်စိတ်ကြိုက် ပိုမိုလှပအောင် ပြင်ဆင်နိုင်ပါသည်။

## အသက် - ဂိမ်းအတွင်း အယူအဆ

ဂိမ်းအတွင်း အသက်ဆိုသည်မှာ ကိန်းဂဏန်းတစ်ခုသာဖြစ်သည်။ အာကာသဂိမ်းအနေဖြင့် သင်၏ သင်္ဘောထိခိုက်မှုအခါတွင် အသက်တစ်ခုစီ လျော့နည်းသွားမည့် အသက်အရေအတွက်ကို သတ်မှတ်ထားလေ့ရှိသည်။ ကိန်းဂဏန်းအစား သင်္ဘောငယ်များ သို့မဟုတ် နှလုံးပုံများဖြင့် ပုံသဏ္ဍာန်ဖော်ပြနိုင်ပါက ပိုမိုကောင်းမွန်ပါသည်။

## ဘာတွေ တည်ဆောက်မလဲ

သင့်ဂိမ်းတွင် အောက်ပါအရာများကို ထည့်သွင်းပါ။

- **ဂိမ်းအမှတ်**: ရန်သူသင်္ဘောတစ်စင်းကို ဖျက်ဆီးတိုင်း သင်္ဘောပိုင်ရှင်သည် အမှတ် ၁၀၀ ရရှိရမည်။ ဂိမ်းအမှတ်ကို ဘေးဘက်အောက်ခြေတွင် ပြသရမည်။
- **အသက်**: သင်၏ သင်္ဘောတွင် အသက် ၃ ခု ရှိသည်။ ရန်သူသင်္ဘောနှင့် တိုက်မိတိုင်း အသက်တစ်ခု လျော့နည်းသွားမည်။ အသက်အရေအတွက်ကို ဘေးဘက်အောက်ခြေတွင် ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.my.png) ပုံဖြင့် ပြသရမည်။

## အကြံပြု လုပ်ဆောင်မှုအဆင့်များ

`your-work` sub folder တွင် ဖန်တီးထားသော ဖိုင်များကို ရှာပါ။ အောက်ပါအရာများ ပါဝင်ရမည်-

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

သင့် project ကို `your_work` folder မှ စတင်ရန် အောက်ပါ command ကို ရိုက်ထည့်ပါ-

```bash
cd your-work
npm start
```

အထက်ပါ command သည် `http://localhost:5000` တွင် HTTP Server တစ်ခု စတင်မည်။ Browser တစ်ခုဖွင့်ပြီး အဆိုပါလိပ်စာကို ထည့်သွင်းပါ။ ယခုအချိန်တွင် သင်္ဘောပိုင်ရှင်နှင့် ရန်သူများကို မြင်ရမည်။ ဘယ်နှင့်ညာ အရိုးများကို နှိပ်လိုက်ပါက သင်္ဘောပိုင်ရှင် သွားလာနိုင်ပြီး ရန်သူများကို ပစ်ခတ်နိုင်သည်။

### ကုဒ်ထည့်သွင်းခြင်း

1. **လိုအပ်သော asset များကို ကူးယူပါ**။ `solution/assets/` folder မှ `your-work` folder သို့ `life.png` asset ကို ထည့်သွင်းပါ။ `lifeImg` ကို `window.onload` function ထဲတွင် ထည့်ပါ-

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. `lifeImg` ကို asset များစာရင်းထဲသို့ ထည့်ပါ-

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Variable များ ထည့်သွင်းပါ**။ စုစုပေါင်းအမှတ် (0) နှင့် ကျန်ရှိသော အသက် (3) ကို ကိုယ်စားပြုသော ကုဒ်ကို ထည့်သွင်းပြီး မျက်နှာပြင်ပေါ်တွင် ပြသပါ။

3. **`updateGameObjects()` function ကို တိုးချဲ့ပါ**။ ရန်သူနှင့် တိုက်မိမှုကို ကိုင်တွယ်ရန် `updateGameObjects()` function ကို တိုးချဲ့ပါ-

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **အသက်နှင့် အမှတ်များ ထည့်သွင်းပါ**။  
   1. **Variable များ Initialize လုပ်ပါ**။ `Hero` class တွင် `this.cooldown = 0` အောက်တွင် အသက်နှင့် အမှတ်များကို သတ်မှတ်ပါ-

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Variable များကို မျက်နှာပြင်ပေါ်တွင် ရေးဆွဲပါ**-

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Game loop ထဲသို့ Function များ ထည့်သွင်းပါ**။ `updateGameObjects()` အောက်တွင် အောက်ပါ function များ ထည့်သွင်းပါ-

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **ဂိမ်းစည်းမျဉ်းများ အကောင်အထည်ဖော်ပါ**။ အောက်ပါစည်းမျဉ်းများကို အကောင်အထည်ဖော်ပါ-

   1. **Hero နှင့် ရန်သူတိုက်မိမှုတိုင်း**တွင် အသက်တစ်ခု လျော့ပါ။

      `Hero` class ကို တိုးချဲ့ပြီး အသက်လျော့ပါ-

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Laser တစ်ခု ရန်သူကို ထိတိုင်း** ဂိမ်းအမှတ်ကို ၁၀၀ ဖြင့် တိုးပါ။

      `Hero` class ကို တိုးချဲ့ပြီး အမှတ်တိုးပါ-
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Collision Event Emitters တွင် အောက်ပါ function များ ထည့်သွင်းပါ-

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ JavaScript/Canvas အသုံးပြု၍ ဖန်တီးထားသော အခြားဂိမ်းများကို ရှာဖွေပါ။ ၎င်းတို့၏ ပုံမှန်လက္ခဏာများကို လေ့လာပါ။

ဒီအလုပ်အပြီးတွင် သင့်ဂိမ်းတွင် ဘေးဘက်အောက်ခြေတွင် သင်္ဘောငယ်များဖြင့် အသက်များကို မြင်ရမည်၊ အမှတ်များကို ဘေးဘက်အောက်ခြေတွင် မြင်ရမည်၊ ရန်သူနှင့် တိုက်မိတိုင်း အသက်လျော့သွားပြီး ရန်သူကို ပစ်တိုင်း အမှတ်တိုးသွားမည်ဖြစ်သည်။ ကောင်းစွာလုပ်ဆောင်နိုင်ပါပြီ! သင့်ဂိမ်းသည် အပြီးသတ်ရန် နီးကပ်နေပါပြီ။

---

## 🚀 စိန်ခေါ်မှု

သင့်ကုဒ်သည် အပြီးသတ်ရန် နီးကပ်နေပါပြီ။ နောက်ထပ်အဆင့်များကို သင်စိတ်ကူးနိုင်ပါသလား?

## သင်ခန်းစာပြီးနောက် မေးခွန်း

[သင်ခန်းစာပြီးနောက် မေးခွန်း](https://ff-quizzes.netlify.app/web/quiz/38)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

ဂိမ်းအမှတ်နှင့် အသက်များကို တိုးခြင်းနှင့် လျော့ခြင်းနည်းလမ်းများကို လေ့လာပါ။ [PlayFab](https://playfab.com) ကဲ့သို့သော စိတ်ဝင်စားဖွယ် ဂိမ်းအင်ဂျင်များကို လေ့လာပါ။ ၎င်းတို့ကို အသုံးပြုခြင်းက သင့်ဂိမ်းကို ဘယ်လိုတိုးတက်စေမည်နည်း?

## အိမ်စာ

[အမှတ်ပေးဂိမ်း တည်ဆောက်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် ရှုလေ့ရှိသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှားမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။