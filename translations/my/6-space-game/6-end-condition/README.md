<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-28T18:40:18+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်း တည်ဆောက်ခြင်း အပိုင်း ၆: အဆုံးနှင့် ပြန်စတင်ခြင်း

## မိန့်ခွန်းမတိုင်မီ စစ်ဆေးမှု

[မိန့်ခွန်းမတိုင်မီ စစ်ဆေးမှု](https://ff-quizzes.netlify.app/web/quiz/39)

ဂိမ်းတစ်ခုအတွက် *အဆုံးအခြေအနေ* ကို ဖော်ပြရန် နည်းလမ်းအမျိုးမျိုးရှိပါတယ်။ ဂိမ်းဖန်တီးသူအနေနဲ့ ဂိမ်းအဆုံးသတ်ရတဲ့အကြောင်းရင်းကို သတ်မှတ်ရမှာဖြစ်ပါတယ်။ အခုအထိ သင်တည်ဆောက်နေတဲ့ အာကာသဂိမ်းကို အခြေခံပြီး အောက်ပါအကြောင်းရင်းများကို တွေးဆနိုင်ပါတယ်-

- **`N` ရန်သူသင်္ဘောများကို ဖျက်ဆီးပြီးဖြစ်သည်**: ဂိမ်းကို အဆင့်အလိုက် ခွဲခြားထားတဲ့အခါ `N` ရန်သူသင်္ဘောများကို ဖျက်ဆီးရမည်ဆိုတာ အတော်လေးတွေ့ရပါတယ်။
- **သင့်သင်္ဘော ဖျက်ဆီးခံရပြီ**: သင့်သင်္ဘော ဖျက်ဆီးခံရတာနဲ့ ဂိမ်းရှုံးသွားတဲ့ ဂိမ်းတွေရှိပါတယ်။ တစ်ခြားနည်းလမ်းတစ်ခုကတော့ အသက်အရေအတွက်ကို သတ်မှတ်ထားတာပါ။ သင့်သင်္ဘော ဖျက်ဆီးခံရတိုင်း အသက်တစ်ခု လျော့သွားပြီး အသက်အားလုံးဆုံးရှုံးသွားရင် ဂိမ်းရှုံးသွားပါတယ်။
- **`N` အမှတ်များ စုဆောင်းပြီးဖြစ်သည်**: အမှတ်များ စုဆောင်းခြင်းကလည်း အဆုံးအခြေအနေတစ်ခုဖြစ်ပါတယ်။ အမှတ်ရရှိဖို့ နည်းလမ်းတွေက သင့်အပေါ်မူတည်ပြီး ရန်သူသင်္ဘော ဖျက်ဆီးခြင်း၊ သို့မဟုတ် ဖျက်ဆီးပြီးနောက် ကျန်ရှိတဲ့ ပစ္စည်းများကို စုဆောင်းခြင်းစသဖြင့် အမှတ်ပေးနိုင်ပါတယ်။
- **အဆင့်တစ်ခု ပြီးမြောက်ခြင်း**: ဥပမာအားဖြင့် `X` ရန်သူသင်္ဘောများ ဖျက်ဆီးပြီး၊ `Y` အမှတ်များ စုဆောင်းပြီး၊ သို့မဟုတ် သတ်မှတ်ထားတဲ့ ပစ္စည်းတစ်ခုကို ရရှိပြီးဖြစ်နိုင်ပါတယ်။

## ပြန်စတင်ခြင်း

လူတွေ သင့်ဂိမ်းကို နှစ်သက်ရင် ပြန်ကစားချင်ကြမှာပါ။ ဂိမ်းအဆုံးသတ်သွားတဲ့အခါ ပြန်စတင်နိုင်တဲ့ ရွေးချယ်မှုတစ်ခုကို ပေးသင့်ပါတယ်။

✅ ဂိမ်းတစ်ခုအဆုံးသတ်တဲ့အခြေအနေတွေကို တွေးပြီး ပြန်စတင်ဖို့ ဘယ်လိုအကြောင်းပြချက်တွေရှိနိုင်မလဲ စဉ်းစားကြည့်ပါ။

## ဘာတွေ တည်ဆောက်မလဲ

သင့်ဂိမ်းအတွက် အောက်ပါ စည်းမျဉ်းများကို ထည့်သွင်းပါမည်-

1. **ဂိမ်းအနိုင်ရခြင်း**: ရန်သူသင်္ဘောအားလုံး ဖျက်ဆီးပြီးဖြစ်သောအခါ ဂိမ်းအနိုင်ရသည်ဟု သတ်မှတ်ပါ။ ထို့အပြင် အနိုင်ရကြောင်း သတင်းစကားတစ်ခုကို ပြပါ။
1. **ပြန်စတင်ခြင်း**: အသက်အားလုံးဆုံးရှုံးသွားသောအခါ သို့မဟုတ် ဂိမ်းအနိုင်ရသောအခါ ပြန်စတင်နိုင်ရန် ရွေးချယ်မှုတစ်ခုကို ပေးပါ။ သတိပြုပါ! ဂိမ်းကို ပြန်စတင်ရန်အတွက် အစပိုင်းအခြေအနေကို ပြန်လည်သတ်မှတ်ရမည်ဖြစ်ပြီး ယခင်ဂိမ်းအခြေအနေများကို ရှင်းလင်းရမည်ဖြစ်သည်။

## အကြံပြုအဆင့်များ

`your-work` ဆိုတဲ့ sub folder ထဲမှာ ဖန်တီးထားတဲ့ ဖိုင်တွေကို ရှာပါ။ အောက်ပါအတိုင်း ပါဝင်ထားရမည်-

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

`your_work` folder ထဲမှာ သင့် project ကို စတင်ရန် အောက်ပါ command ကို ရိုက်ပါ-

```bash
cd your-work
npm start
```

အထက်ပါ command က `http://localhost:5000` လိပ်စာမှာ HTTP Server တစ်ခု စတင်ပေးပါမည်။ Browser တစ်ခုဖွင့်ပြီး အဆိုပါ လိပ်စာကို ထည့်သွင်းပါ။ သင့်ဂိမ်းကို ကစားနိုင်အောင် ပြင်ဆင်ထားရမည်။

> အကြံပြုချက်: Visual Studio Code မှာ warning မထွက်အောင် `window.onload` function ကို ပြင်ပြီး `gameLoopId` ကို `let` မပါဘဲ ခေါ်ပါ။ ထို့အပြင် ဖိုင်အပေါ်ဆုံးမှာ `let gameLoopId;` ကို သီးသန့်ကြေညာပါ။

### ကုဒ်ထည့်သွင်းခြင်း

1. **အဆုံးအခြေအနေကို ထိန်းသိမ်းပါ**: ရန်သူအရေအတွက် သို့မဟုတ် သင့်သင်္ဘော ဖျက်ဆီးခံရမှုကို ထိန်းသိမ်းရန် အောက်ပါ function နှစ်ခုကို ထည့်ပါ-

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Message handler တွင် logic ထည့်ပါ**: `eventEmitter` ကို ပြင်ပြီး အောက်ပါအခြေအနေများကို ကိုင်တွယ်ပါ-

    ```javascript
    eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
        hero.incrementPoints();

        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });

    eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
        enemy.dead = true;
        hero.decrementLife();
        if (isHeroDead())  {
          eventEmitter.emit(Messages.GAME_END_LOSS);
          return; // loss before victory
        }
        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });
    
    eventEmitter.on(Messages.GAME_END_WIN, () => {
        endGame(true);
    });
      
    eventEmitter.on(Messages.GAME_END_LOSS, () => {
      endGame(false);
    });
    ```

1. **Message အမျိုးအစားအသစ်များ ထည့်ပါ**: အောက်ပါ Messages များကို constants object ထဲထည့်ပါ-

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **ပြန်စတင်ရန် ကုဒ်ထည့်ပါ**: သတ်မှတ်ထားတဲ့ ခလုတ်ကို နှိပ်လိုက်ရုံနဲ့ ဂိမ်းကို ပြန်စတင်နိုင်အောင် ပြင်ဆင်ပါ။

   1. **`Enter` ခလုတ်ကို နားထောင်ပါ**: window ရဲ့ eventListener ကို ပြင်ပြီး အဆိုပါ ခလုတ်ကို နားထောင်ပါ-

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **ပြန်စတင် Message ထည့်ပါ**: Messages constant ထဲမှာ အောက်ပါ Message ကို ထည့်ပါ-

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **ဂိမ်းစည်းမျဉ်းများကို အကောင်အထည်ဖော်ပါ**: အောက်ပါ စည်းမျဉ်းများကို အကောင်အထည်ဖော်ပါ-

   1. **Player အနိုင်ရအခြေအနေ**: ရန်သူသင်္ဘောအားလုံး ဖျက်ဆီးပြီးဖြစ်သောအခါ အနိုင်ရကြောင်း သတင်းစကားကို ပြပါ။

      1. ပထမဦးစွာ `displayMessage()` function တစ်ခု ဖန်တီးပါ-

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. `endGame()` function တစ်ခု ဖန်တီးပါ-

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // set a delay so we are sure any paints have finished
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (win) {
              displayMessage(
                "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
                "green"
              );
            } else {
              displayMessage(
                "You died !!! Press [Enter] to start a new game Captain Pew Pew"
              );
            }
          }, 200)  
        }
        ```

   1. **ပြန်စတင် logic**: အသက်အားလုံးဆုံးရှုံးသွားသောအခါ သို့မဟုတ် Player အနိုင်ရသောအခါ ပြန်စတင်နိုင်ကြောင်း ပြပါ။ ထို့အပြင် *ပြန်စတင်* ခလုတ်ကို နှိပ်လိုက်ရုံနဲ့ ဂိမ်းကို ပြန်စတင်နိုင်အောင် ပြင်ဆင်ပါ။

      1. `resetGame()` function တစ်ခု ဖန်တီးပါ-

        ```javascript
        function resetGame() {
          if (gameLoopId) {
            clearInterval(gameLoopId);
            eventEmitter.clear();
            initGame();
            gameLoopId = setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "black";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              drawPoints();
              drawLife();
              updateGameObjects();
              drawGameObjects(ctx);
            }, 100);
          }
        }
        ```

     1. `initGame()` ထဲမှာ `eventEmitter` ကို ခေါ်ပြီး ဂိမ်းကို ပြန်စတင်ရန် call ထည့်ပါ-

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. EventEmitter ထဲမှာ `clear()` function တစ်ခု ထည့်ပါ-

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 ဂုဏ်ယူပါတယ်၊ ကပ္ပတိန်! သင့်ဂိမ်း ပြီးစီးပါပြီ! ကောင်းမွန်စွာ လုပ်ဆောင်နိုင်ခဲ့ပါတယ်! 🚀 💥 👽

---

## 🚀 စိန်ခေါ်မှု

အသံထည့်ပါ! သင့်ဂိမ်းကို ပိုမိုစိတ်လှုပ်ရှားစေဖို့ အသံတစ်ခု ထည့်နိုင်မလား? ဥပမာအားဖြင့် လေဆာထိမှန်တဲ့အခါ၊ သင်္ဘောပျက်စီးတဲ့အခါ သို့မဟုတ် အနိုင်ရတဲ့အခါ အသံထည့်ပါ။ JavaScript နဲ့ အသံဖွင့်နည်းကို သင်ယူဖို့ [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) ကို ကြည့်ပါ။

## မိန့်ခွန်းပြီးနောက် စစ်ဆေးမှု

[မိန့်ခွန်းပြီးနောက် စစ်ဆေးမှု](https://ff-quizzes.netlify.app/web/quiz/40)

## ပြန်လည်ဆန်းစစ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာမှု

သင့်တာဝန်မှာ ဂိမ်းအသစ်တစ်ခု ဖန်တီးရမှာဖြစ်ပါတယ်။ စိတ်ဝင်စားဖွယ် ဂိမ်းအမျိုးမျိုးကို စူးစမ်းပြီး သင်တည်ဆောက်ချင်တဲ့ ဂိမ်းအမျိုးအစားကို တွေးဆပါ။

## တာဝန်

[ဂိမ်းတစ်ခု ဖန်တီးပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မတိကျမှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရ အရင်းအမြစ်အဖြစ် ရှုလေ့လာသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။