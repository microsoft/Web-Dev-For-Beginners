<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-27T22:25:48+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "my"
}
-->
# အာကာသဂိမ်း တည်ဆောက်ခြင်း အပိုင်း ၆: အဆုံးသတ်ခြင်းနှင့် ပြန်စတင်ခြင်း

## မိန့်ခွန်းမတိုင်မီ စမ်းမေးခွန်း

[မိန့်ခွန်းမတိုင်မီ စမ်းမေးခွန်း](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

ဂိမ်းတစ်ခုမှာ *အဆုံးသတ်အခြေအနေ* ကို ဖော်ပြဖို့ နည်းလမ်းအမျိုးမျိုးရှိပါတယ်။ ဂိမ်းကို ဖန်တီးသူအနေနဲ့ ဂိမ်းအဆုံးသတ်ရတဲ့ အကြောင်းရင်းကို သတ်မှတ်ရမယ်။ အခုအထိ သင်တည်ဆောက်နေတဲ့ အာကာသဂိမ်းကို အခြေခံပြီး အောက်ပါအကြောင်းရင်းတွေကို တွေးဆနိုင်ပါတယ်-

- **`N` ရန်သူသင်္ဘောတွေ ဖျက်ဆီးပြီး**: ဂိမ်းကို အဆင့်အလိုက် ခွဲခြားထားတဲ့အခါမှာ `N` ရန်သူသင်္ဘောတွေ ဖျက်ဆီးရမယ်ဆိုတာ အတော်လေး ရိုးရိုးတွေ့ရပါတယ်။
- **သင့်သင်္ဘော ဖျက်ဆီးခံရပြီး**: သင့်သင်္ဘော ဖျက်ဆီးခံရရင် ဂိမ်းရှုံးရတဲ့ ဂိမ်းတွေ ရှိပါတယ်။ နောက်ထပ် ရိုးရိုးတွေ့ရတာကတော့ အသက်အရေအတွက်ကို သတ်မှတ်ထားတာပါ။ သင့်သင်္ဘော ဖျက်ဆီးခံရတိုင်း အသက်တစ်ခု လျော့သွားပါတယ်။ အသက်အားလုံးဆုံးသွားရင် ဂိမ်းရှုံးရပါတယ်။
- **`N` အမှတ်စုဆောင်းပြီး**: အမှတ်စုဆောင်းတာကို အဆုံးသတ်အခြေအနေအနေနဲ့ သတ်မှတ်ထားတဲ့ ဂိမ်းတွေ ရှိပါတယ်။ အမှတ်တွေကို ဘယ်လိုရမလဲဆိုတာ သင့်အပေါ်မှာ မူတည်ပါတယ်။ ရန်သူသင်္ဘော ဖျက်ဆီးတာ၊ သို့မဟုတ် ဖျက်ဆီးခံရတဲ့အခါမှာ *ကျန်ရှိတဲ့ပစ္စည်းတွေ* စုဆောင်းတာကို အမှတ်ပေးတာတွေ ရှိပါတယ်။
- **အဆင့်တစ်ခု ပြီးမြောက်ခြင်း**: ဒါဟာ `X` ရန်သူသင်္ဘော ဖျက်ဆီးပြီး၊ `Y` အမှတ်စုဆောင်းပြီး၊ သို့မဟုတ် သတ်မှတ်ထားတဲ့ ပစ္စည်းတစ်ခုကို စုဆောင်းပြီးဖြစ်နိုင်ပါတယ်။

## ပြန်စတင်ခြင်း

လူတွေ သင့်ဂိမ်းကို နှစ်သက်ရင် ပြန်ကစားချင်နိုင်ပါတယ်။ ဂိမ်းအဆုံးသတ်သွားတဲ့အခါမှာ ပြန်စတင်ဖို့ ရွေးချယ်စရာပေးသင့်ပါတယ်။

✅ ဂိမ်းအဆုံးသတ်ရတဲ့ အခြေအနေတွေကို တွေးကြည့်ပြီး ပြန်စတင်ဖို့ ဘယ်လို အကြောင်းပြချက်တွေ ရှိနိုင်မလဲ တွေးကြည့်ပါ။

## ဘာကို တည်ဆောက်မလဲ

သင့်ဂိမ်းမှာ အောက်ပါ စည်းကမ်းတွေ ထည့်သွင်းပါမယ်-

1. **ဂိမ်းအနိုင်ရခြင်း**: ရန်သူသင်္ဘောအားလုံး ဖျက်ဆီးပြီးရင် ဂိမ်းအနိုင်ရပါတယ်။ ထို့အပြင် အနိုင်ရတဲ့ မက်ဆေ့ဂျ်တစ်ခုကို ဖော်ပြပါ။
1. **ပြန်စတင်ခြင်း**: သင့်အသက်အားလုံးဆုံးသွားတဲ့အခါ သို့မဟုတ် ဂိမ်းအနိုင်ရတဲ့အခါ ပြန်စတင်ဖို့ ရွေးချယ်စရာပေးပါ။ သတိထားပါ! ဂိမ်းကို ပြန်စတင်ဖို့ အစအဆင့်တွေကို ပြန်စတင်ပြီး ယခင်ဂိမ်းအခြေအနေကို ရှင်းလင်းထားရပါမယ်။

## အကြံပြုအဆင့်များ

`your-work` sub folder ထဲမှာ ဖန်တီးထားတဲ့ ဖိုင်တွေကို ရှာပါ။ အောက်ပါအတိုင်း ပါဝင်ထားရပါမယ်-

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

သင့်ပရောဂျက်ကို `your_work` folder ထဲမှာ စတင်ဖို့ အောက်ပါ command ကို ရိုက်ပါ-

```bash
cd your-work
npm start
```

အထက်ပါ command က `http://localhost:5000` လိပ်စာမှာ HTTP Server ကို စတင်ပါမယ်။ Browser ကို ဖွင့်ပြီး အဲ့ဒီလိပ်စာကို ထည့်ပါ။ သင့်ဂိမ်းကို ကစားနိုင်တဲ့အခြေအနေမှာ ရှိရပါမယ်။

> tip: Visual Studio Code မှာ warning မရဖို့ `window.onload` function ကို `gameLoopId` ကို `let` မပါဘဲ ခေါ်ဖို့ ပြင်ဆင်ပါ၊ နောက်ဆုံးမှာ `let gameLoopId;` ကို ဖိုင်အပေါ်ဆုံးမှာ သီးသန့်ကြေညာပါ။

### Code ထည့်သွင်းပါ

1. **အဆုံးသတ်အခြေအနေကို ထိန်းသိမ်းပါ**: ရန်သူအရေအတွက်ကို သို့မဟုတ် သင့်သင်္ဘော ဖျက်ဆီးခံရတာကို ထိန်းသိမ်းဖို့ အောက်ပါ function နှစ်ခုကို ထည့်ပါ-

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Message handler တွေကို logic ထည့်ပါ**: `eventEmitter` ကို အောက်ပါအခြေအနေတွေကို handle လုပ်ဖို့ ပြင်ဆင်ပါ-

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

1. **Message အမျိုးအစားအသစ်တွေ ထည့်ပါ**: အောက်ပါ Messages တွေကို constants object ထဲမှာ ထည့်ပါ-

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **ပြန်စတင်ဖို့ code ထည့်ပါ**: သတ်မှတ်ထားတဲ့ button ကို နှိပ်ပြီး ဂိမ်းကို ပြန်စတင်နိုင်အောင် code ထည့်ပါ။

   1. **Key press `Enter` ကို နားထောင်ပါ**: window ရဲ့ eventListener ကို ပြင်ဆင်ပြီး key press ကို နားထောင်ပါ-

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **ပြန်စတင်မက်ဆေ့ဂျ် ထည့်ပါ**: Messages constant ထဲမှာ အောက်ပါ Message ကို ထည့်ပါ-

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **ဂိမ်းစည်းကမ်းတွေကို အကောင်အထည်ဖော်ပါ**: အောက်ပါဂိမ်းစည်းကမ်းတွေကို အကောင်အထည်ဖော်ပါ-

   1. **Player အနိုင်ရအခြေအနေ**: ရန်သူသင်္ဘောအားလုံး ဖျက်ဆီးပြီးရင် အနိုင်ရတဲ့ မက်ဆေ့ဂျ်ကို ဖော်ပြပါ။

      1. ပထမဆုံး `displayMessage()` function ကို ဖန်တီးပါ-

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. `endGame()` function ကို ဖန်တီးပါ-

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

   1. **ပြန်စတင် logic**: အသက်အားလုံးဆုံးသွားတဲ့အခါ သို့မဟုတ် player အနိုင်ရတဲ့အခါ ပြန်စတင်နိုင်ကြောင်း ဖော်ပြပါ။ ထို့အပြင် *ပြန်စတင်* key ကို နှိပ်တဲ့အခါ ဂိမ်းကို ပြန်စတင်ပါ (ဘယ် key ကို ပြန်စတင်ဖို့ သတ်မှတ်မလဲ သင်ဆုံးဖြတ်နိုင်ပါတယ်)။

      1. `resetGame()` function ကို ဖန်တီးပါ-

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

     1. `initGame()` function ထဲမှာ `eventEmitter` ကို ခေါ်ဖို့ code ထည့်ပါ-

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. EventEmitter ထဲမှာ `clear()` function ကို ထည့်ပါ-

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 ဂိမ်းပြီးမြောက်ပါပြီ၊ Captain! အလုပ်ကောင်းပါတယ်! 🚀 💥 👽

---

## 🚀 စိန်ခေါ်မှု

အသံထည့်ပါ! Laser hit ဖြစ်တဲ့အခါ၊ hero သေဆုံးတဲ့အခါ သို့မဟုတ် အနိုင်ရတဲ့အခါ အသံထည့်နိုင်မလား? JavaScript ကို အသုံးပြုပြီး အသံဖွင့်နည်းကို သင်ယူဖို့ [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) ကို ကြည့်ပါ။

## မိန့်ခွန်းပြီးနောက် စမ်းမေးခွန်း

[မိန့်ခွန်းပြီးနောက် စမ်းမေးခွန်း](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

သင့်တာဝန်က နမူနာဂိမ်းအသစ်တစ်ခု ဖန်တီးဖို့ ဖြစ်ပါတယ်။ ဘယ်လိုဂိမ်းမျိုးကို တည်ဆောက်နိုင်မလဲဆိုတာ သိဖို့ စိတ်ဝင်စားဖွယ် ဂိမ်းတွေကို စူးစမ်းကြည့်ပါ။

## တာဝန်

[နမူနာဂိမ်းတစ်ခု တည်ဆောက်ပါ](assignment.md)

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် ရှုလေ့လာသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။