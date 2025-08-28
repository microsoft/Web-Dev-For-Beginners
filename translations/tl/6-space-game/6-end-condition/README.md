<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-28T15:45:59+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 6: Pagtapos at Pag-restart

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/39)

May iba't ibang paraan upang ipahayag ang *kondisyon ng pagtatapos* sa isang laro. Nasa iyo bilang tagalikha ng laro kung bakit ito magtatapos. Narito ang ilang mga dahilan, kung ipagpalagay natin na pinag-uusapan ang space game na iyong binubuo:

- **`N` Mga barko ng kalaban ang nawasak**: Karaniwan ito kung hinahati mo ang laro sa iba't ibang antas kung saan kailangan mong wasakin ang `N` mga barko ng kalaban upang makumpleto ang isang antas.
- **Ang iyong barko ay nawasak**: May mga laro kung saan talo ka kapag ang iyong barko ay nawasak. Isa pang karaniwang paraan ay ang konsepto ng "lives". Tuwing ang iyong barko ay nawasak, nababawasan ang isang buhay. Kapag naubos na ang lahat ng buhay, talo ka na sa laro.
- **Nakolekta mo ang `N` puntos**: Isa pang karaniwang kondisyon ng pagtatapos ay ang pagkolekta ng puntos. Paano ka makakakuha ng puntos ay nasa iyo, ngunit karaniwan itong ibinibigay sa iba't ibang aktibidad tulad ng pagwasak sa barko ng kalaban o pagkolekta ng mga item na bumabagsak kapag sila ay nawasak.
- **Nakumpleto ang isang antas**: Maaaring kabilang dito ang ilang mga kondisyon tulad ng `X` nawasak na barko ng kalaban, `Y` nakolektang puntos, o maaaring isang partikular na item ang nakolekta.

## Pag-restart

Kung nagustuhan ng mga tao ang iyong laro, malamang na gusto nilang ulitin ito. Kapag natapos ang laro sa anumang dahilan, dapat kang magbigay ng opsyon upang mag-restart.

✅ Mag-isip ng kaunti tungkol sa kung anong mga kondisyon ang nagtatapos sa isang laro, at kung paano ka hinihikayat na mag-restart.

## Ano ang gagawin

Idaragdag mo ang mga patakarang ito sa iyong laro:

1. **Pagpanalo sa laro**. Kapag ang lahat ng barko ng kalaban ay nawasak, panalo ka sa laro. Bukod dito, magpakita ng isang uri ng mensahe ng tagumpay.
1. **Pag-restart**. Kapag naubos na ang lahat ng iyong buhay o nanalo ka sa laro, dapat kang magbigay ng paraan upang mag-restart. Tandaan! Kailangan mong i-reinitialize ang laro at ang dating estado ng laro ay dapat na malinis.

## Mga Inirerekomendang Hakbang

Hanapin ang mga file na ginawa para sa iyo sa sub-folder na `your-work`. Dapat itong naglalaman ng sumusunod:

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

Simulan ang iyong proyekto sa folder na `your_work` sa pamamagitan ng pag-type:

```bash
cd your-work
npm start
```

Ang nasa itaas ay magpapasimula ng HTTP Server sa address na `http://localhost:5000`. Buksan ang browser at ilagay ang address na iyon. Ang iyong laro ay dapat nasa playable na estado.

> tip: upang maiwasan ang mga babala sa Visual Studio Code, i-edit ang function na `window.onload` upang tawagin ang `gameLoopId` nang direkta (nang walang `let`), at ideklara ang gameLoopId sa itaas ng file, nang hiwalay: `let gameLoopId;`

### Magdagdag ng Code

1. **Subaybayan ang kondisyon ng pagtatapos**. Magdagdag ng code na sumusubaybay sa bilang ng mga kalaban, o kung ang barko ng hero ay nawasak sa pamamagitan ng pagdaragdag ng dalawang function na ito:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Magdagdag ng lohika sa mga message handler**. I-edit ang `eventEmitter` upang pangasiwaan ang mga kondisyong ito:

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

1. **Magdagdag ng mga bagong uri ng mensahe**. Idagdag ang mga Mensaheng ito sa constants object:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Magdagdag ng restart code** na magre-restart ng laro sa pagpindot ng napiling button.

   1. **Makinig sa key press `Enter`**. I-edit ang eventListener ng iyong window upang makinig sa pindot na ito:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Magdagdag ng restart message**. Idagdag ang Mensaheng ito sa iyong Messages constant:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Ipapatupad ang mga patakaran ng laro**. Ipapatupad ang mga sumusunod na patakaran ng laro:

   1. **Kondisyon ng panalo ng manlalaro**. Kapag ang lahat ng barko ng kalaban ay nawasak, magpakita ng mensahe ng tagumpay.

      1. Una, gumawa ng function na `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Gumawa ng function na `endGame()`:

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

   1. **Lohika ng pag-restart**. Kapag naubos na ang lahat ng buhay o nanalo ang manlalaro sa laro, ipakita na maaaring i-restart ang laro. Bukod dito, i-restart ang laro kapag pinindot ang *restart* key (maaari mong piliin kung anong key ang itatalaga sa pag-restart).

      1. Gumawa ng function na `resetGame()`:

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

     1. Magdagdag ng tawag sa `eventEmitter` upang i-reset ang laro sa `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Magdagdag ng function na `clear()` sa EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Binabati kita, Kapitan! Kumpleto na ang iyong laro! Magaling! 🚀 💥 👽

---

## 🚀 Hamon

Magdagdag ng tunog! Kaya mo bang magdagdag ng tunog upang mapaganda ang gameplay ng iyong laro, marahil kapag may laser hit, o kapag namatay o nanalo ang hero? Tingnan ang [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) upang matutunan kung paano magpatugtog ng tunog gamit ang JavaScript.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/40)

## Review & Self Study

Ang iyong takdang-aralin ay gumawa ng bagong sample na laro, kaya mag-explore ng ilang mga kawili-wiling laro upang makita kung anong uri ng laro ang maaari mong buuin.

## Assignment

[Build a Sample Game](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, pakitandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa orihinal nitong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.