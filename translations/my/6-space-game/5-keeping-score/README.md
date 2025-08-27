<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-27T22:21:04+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်းတည်ဆောက်ခြင်း အပိုင်း ၅: အမှတ်ပေးခြင်းနှင့် အသက်များ

## မိန့်ခွန်းမတင်မီ မေးခွန်းများ

[မိန့်ခွန်းမတင်မီ မေးခွန်းများ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

ဒီသင်ခန်းစာမှာ သင်ဂိမ်းအတွက် အမှတ်ပေးခြင်းနှင့် အသက်တွက်ခြင်းကို ဘယ်လိုလုပ်ရမယ်ဆိုတာကို သင်ယူပါမယ်။

## မျက်နှာပြင်ပေါ်မှာ စာသားရေးခြင်း

ဂိမ်းအမှတ်ကို မျက်နှာပြင်ပေါ်မှာ ပြသနိုင်ဖို့အတွက် စာသားကို မျက်နှာပြင်ပေါ်မှာ ဘယ်လိုထားရမယ်ဆိုတာကို သိထားရပါမယ်။ အဖြေကတော့ canvas object ရဲ့ `fillText()` method ကို အသုံးပြုခြင်းဖြစ်ပါတယ်။ သင် font ဘယ်လိုသုံးမယ်၊ စာသားရဲ့ အရောင်၊ alignment (left, right, center) စတဲ့ အခြားသောအချက်တွေကိုလည်း ထိန်းချုပ်နိုင်ပါတယ်။ အောက်မှာ မျက်နှာပြင်ပေါ်မှာ စာသားရေးထားတဲ့ code ရှိပါတယ်။

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ [Canvas မှာ စာသားထည့်သွင်းပုံ](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) အကြောင်းကို ပိုမိုလေ့လာပါ၊ သင့်အတွက် ပိုမိုလှပတဲ့ပုံစံတစ်ခုကို ဖန်တီးနိုင်ပါတယ်။

## အသက် - ဂိမ်းအတွင်း အယူအဆ

ဂိမ်းအတွင်း အသက်ဆိုတာက ရေတွက်ချက်တစ်ခုသာဖြစ်ပါတယ်။ အာကာသဂိမ်းရဲ့ အကြောင်းအရာအနေနဲ့ သင့်ရဲ့ သင်္ဘောပျက်စီးတိုင်း အသက်တစ်ခုလျော့သွားမယ့် အသက်သတ်မှတ်ချက်ကို သတ်မှတ်ထားတာများပါတယ်။ ရေတွက်ချက်အစား သင်္ဘောငယ်များ သို့မဟုတ် နှလုံးပုံစံများကို အသက်အဖြစ် ပြသနိုင်ရင် ပိုမိုကောင်းမွန်ပါတယ်။

## ဘာတွေတည်ဆောက်မလဲ

သင့်ဂိမ်းမှာ အောက်ပါအချက်တွေကို ထည့်သွင်းပါ။

- **ဂိမ်းအမှတ်**: ရန်သူသင်္ဘောတစ်စင်းကို ဖျက်ဆီးတိုင်း သင်္ဘောပိုင်ရှင်ကို အမှတ်ပေးပါမယ်။ သင်္ဘောတစ်စင်းကို ၁၀၀ အမှတ်ပေးဖို့ အကြံပြုပါတယ်။ ဂိမ်းအမှတ်ကို အောက်ဘက်ဘယ်ဖက်မှာ ပြသပါမယ်။
- **အသက်**: သင့်သင်္ဘောမှာ အသက်သုံးခုရှိပါတယ်။ ရန်သူသင်္ဘောနဲ့ တိုက်မိတိုင်း အသက်တစ်ခုလျော့သွားပါမယ်။ အသက်အမှတ်ကို အောက်ဘက်ညာဖက်မှာ ပြသပြီး အောက်ပါပုံစံဖြစ်တဲ့ ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.my.png) ကို အသုံးပြုပါမယ်။

## အကြံပြုထားသော လုပ်ဆောင်မှုများ

`your-work` sub folder ထဲမှာ ဖန်တီးထားတဲ့ ဖိုင်တွေကို ရှာပါ။ အောက်ပါအချက်တွေပါဝင်ထားရပါမယ်။

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

သင့် project ကို `your_work` folder ထဲမှာ စတင်ဖို့အတွက် အောက်ပါ command ကို ရိုက်ပါ:

```bash
cd your-work
npm start
```

အထက်ပါ command က HTTP Server ကို `http://localhost:5000` မှာ စတင်ပါမယ်။ Browser ကို ဖွင့်ပြီး အဲဒီလိပ်စာကို ထည့်သွင်းပါ။ အခုအချိန်မှာ သင်္ဘောပိုင်ရှင်နဲ့ ရန်သူတွေကို ပြသထားပြီး သင့်ရဲ့ left နှင့် right arrow keys ကို နှိပ်လိုက်ရင် သင်္ဘောပိုင်ရှင်ကို ရွှေ့နိုင်ပြီး ရန်သူတွေကို ပစ်ခတ်နိုင်ပါတယ်။

### Code ထည့်သွင်းခြင်း

1. **လိုအပ်သော assets များကို ကူးယူပါ**။ `solution/assets/` folder ထဲက `your-work` folder ထဲကို `life.png` asset ကို ထည့်သွင်းပါ။ `lifeImg` ကို window.onload function ထဲမှာ ထည့်သွင်းပါ:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. `lifeImg` ကို assets စာရင်းထဲမှာ ထည့်သွင်းပါ:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Variables ထည့်သွင်းပါ**။ အမှတ်စုစုပေါင်း (0) နှင့် အသက်ကျန် (3) ကို ကိုယ်စားပြု code ထည့်သွင်းပြီး မျက်နှာပြင်ပေါ်မှာ ပြသပါ။

3. **`updateGameObjects()` function ကို တိုးချဲ့ပါ**။ ရန်သူနဲ့ တိုက်မိမှုကို ကိုင်တွယ်နိုင်ဖို့ `updateGameObjects()` function ကို တိုးချဲ့ပါ:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **အသက်နှင့် အမှတ်များ ထည့်သွင်းပါ**။ 
   1. **Variables ကို Initialize လုပ်ပါ**။ `Hero` class ရဲ့ `this.cooldown = 0` အောက်မှာ အသက်နှင့် အမှတ်များကို သတ်မှတ်ပါ:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Variables များကို မျက်နှာပြင်ပေါ်မှာ ရေးပါ**။ အဲဒီ value တွေကို မျက်နှာပြင်ပေါ်မှာ ရေးပါ:

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

   1. **Game loop မှာ Methods ထည့်သွင်းပါ**။ `updateGameObjects()` အောက်မှာ ဒီ function တွေကို window.onload function ထဲမှာ ထည့်သွင်းပါ:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **ဂိမ်းစည်းကမ်းများကို အကောင်အထည်ဖော်ပါ**။ အောက်ပါဂိမ်းစည်းကမ်းများကို အကောင်အထည်ဖော်ပါ:

   1. **Hero နဲ့ ရန်သူတိုက်မိမှုတိုင်း** အသက်တစ်ခုလျော့ပါ။
   
      `Hero` class ကို တိုးချဲ့ပြီး အသက်လျော့ခြင်းကို လုပ်ဆောင်ပါ:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Laser တစ်ခု ရန်သူကို ထိတိုင်း** ဂိမ်းအမှတ်ကို ၁၀၀ အမှတ်တိုးပါ။

      Hero class ကို တိုးချဲ့ပြီး အမှတ်တိုးခြင်းကို လုပ်ဆောင်ပါ:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Collision Event Emitters ထဲမှာ ဒီ function တွေကို ထည့်သွင်းပါ:

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

✅ JavaScript/Canvas ကို အသုံးပြုပြီး ဖန်တီးထားတဲ့ အခြားဂိမ်းတွေကို ရှာဖွေပါ။ အဲဒီဂိမ်းတွေမှာ ဘာတွေကို ပုံမှန်တွေ့ရလဲ?

ဒီအလုပ်အပြီးမှာ သင့်ရဲ့ ဂိမ်းမှာ အောက်ဘက်ညာဖက်မှာ သင်္ဘောငယ်တွေကို အသက်အဖြစ် ပြသထားပြီး အမှတ်တွေကို အောက်ဘက်ဘယ်ဖက်မှာ ပြသထားရမယ်။ ရန်သူနဲ့ တိုက်မိတိုင်း အသက်ကျန်အရေအတွက် လျော့သွားပြီး ရန်သူကို ပစ်တိုင်း အမှတ်တိုးသွားရမယ်။ ကောင်းပြီ! သင့်ဂိမ်းက အပြီးသတ်နီးပါးဖြစ်နေပါပြီ။

---

## 🚀 စိန်ခေါ်မှု

သင့် code က အပြီးသတ်နီးပါးဖြစ်နေပါပြီ။ နောက်တစ်ဆင့်မှာ ဘာတွေလုပ်ဆောင်မလဲဆိုတာ စဉ်းစားနိုင်ပါသလား?

## မိန့်ခွန်းပြီးနောက် မေးခွန်းများ

[မိန့်ခွန်းပြီးနောက် မေးခွန်းများ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

ဂိမ်းအမှတ်နှင့် အသက်များကို တိုးခြင်းနှင့် လျော့ခြင်းလုပ်ဆောင်ပုံကို ရှာဖွေပါ။ [PlayFab](https://playfab.com) ကဲ့သို့သော စိတ်ဝင်စားဖွယ်ဂိမ်း engine တွေရှိပါတယ်။ ဒီအရာတွေကို သင့်ဂိမ်းမှာ အသုံးပြုရင် ဘယ်လိုတိုးတက်မှုတွေ ရနိုင်မလဲ?

## လုပ်ငန်းတာဝန်

[အမှတ်ပေးဂိမ်းတည်ဆောက်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။