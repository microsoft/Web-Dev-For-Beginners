<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-28T04:00:23+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 6: Mwisho na Kuanzisha Tena

## Maswali ya Awali ya Somo

[Maswali ya awali ya somo](https://ff-quizzes.netlify.app/web/quiz/39)

Kuna njia tofauti za kuonyesha *hali ya mwisho* katika mchezo. Ni juu yako kama mtengenezaji wa mchezo kuamua ni kwa nini mchezo umeisha. Hapa kuna sababu kadhaa, tukizingatia tunazungumzia mchezo wa anga ambao umekuwa ukijenga hadi sasa:

- **`N` Meli za maadui zimeharibiwa**: Ni jambo la kawaida ikiwa unagawanya mchezo katika viwango tofauti kwamba unahitaji kuharibu `N` meli za maadui ili kukamilisha kiwango.
- **Meli yako imeharibiwa**: Kuna michezo ambapo unapoteza mchezo ikiwa meli yako imeharibiwa. Njia nyingine ya kawaida ni kuwa na dhana ya maisha. Kila wakati meli yako inaharibiwa, inapunguza maisha. Mara maisha yote yanapopotea, basi unapoteza mchezo.
- **Umekusanya `N` alama**: Hali nyingine ya kawaida ya mwisho ni kukusanya alama. Jinsi unavyopata alama ni juu yako, lakini ni jambo la kawaida kupeana alama kwa shughuli mbalimbali kama kuharibu meli ya adui au labda kukusanya vitu ambavyo vinaweza *kuanguka* wakati vinaharibiwa.
- **Kukamilisha kiwango**: Hii inaweza kuhusisha masharti kadhaa kama `X` meli za maadui zimeharibiwa, `Y` alama zimekusanywa au labda kwamba kipengele maalum kimekusanywa.

## Kuanzisha Tena

Ikiwa watu wanapenda mchezo wako, kuna uwezekano wa kutaka kuucheza tena. Mara mchezo unapomalizika kwa sababu yoyote, unapaswa kutoa chaguo la kuanzisha tena.

✅ Fikiria kidogo kuhusu masharti ambayo unadhani mchezo unamalizika, na kisha jinsi unavyohimizwa kuanzisha tena.

## Kitu cha Kujenga

Utakuwa unaongeza sheria hizi kwenye mchezo wako:

1. **Kushinda mchezo**. Mara meli zote za maadui zinapoharibiwa, unashinda mchezo. Zaidi ya hayo, onyesha ujumbe wa ushindi.
1. **Kuanzisha tena**. Mara maisha yako yote yanapopotea au mchezo unashinda, unapaswa kutoa njia ya kuanzisha tena mchezo. Kumbuka! Utahitaji kuanzisha upya mchezo na hali ya awali ya mchezo inapaswa kufutwa.

## Hatua Zinazopendekezwa

Tafuta faili ambazo zimeundwa kwako katika folda ndogo ya `your-work`. Inapaswa kuwa na yafuatayo:

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

Anzisha mradi wako katika folda ya `your_work` kwa kuandika:

```bash
cd your-work
npm start
```

Hii itaanzisha Seva ya HTTP kwenye anwani `http://localhost:5000`. Fungua kivinjari na ingiza anwani hiyo. Mchezo wako unapaswa kuwa katika hali inayoweza kuchezwa.

> kidokezo: ili kuepuka maonyo katika Visual Studio Code, hariri kazi ya `window.onload` ili kuita `gameLoopId` kama ilivyo (bila `let`), na tangaza `gameLoopId` juu ya faili, kwa kujitegemea: `let gameLoopId;`

### Ongeza Msimbo

1. **Fuata hali ya mwisho**. Ongeza msimbo unaofuatilia idadi ya maadui, au ikiwa meli ya shujaa imeharibiwa kwa kuongeza kazi hizi mbili:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Ongeza mantiki kwa wahandaji wa ujumbe**. Hariri `eventEmitter` kushughulikia hali hizi:

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

1. **Ongeza aina mpya za ujumbe**. Ongeza Ujumbe huu kwenye kitu cha constants:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Ongeza msimbo wa kuanzisha tena** msimbo unaoanzisha tena mchezo kwa kubonyeza kitufe kilichochaguliwa.

   1. **Sikiliza bonyeza kitufe `Enter`**. Hariri msikilizaji wa tukio la dirisha lako ili kusikiliza bonyeza hili:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Ongeza ujumbe wa kuanzisha tena**. Ongeza Ujumbe huu kwenye constants ya Ujumbe wako:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Tekeleza sheria za mchezo**. Tekeleza sheria zifuatazo za mchezo:

   1. **Hali ya ushindi wa mchezaji**. Wakati meli zote za maadui zimeharibiwa, onyesha ujumbe wa ushindi.

      1. Kwanza, unda kazi ya `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Unda kazi ya `endGame()`:

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

   1. **Mantiki ya kuanzisha tena**. Wakati maisha yote yanapopotea au mchezaji ameshinda mchezo, onyesha kwamba mchezo unaweza kuanzishwa tena. Zaidi ya hayo, anzisha tena mchezo wakati kitufe cha *kuanzisha tena* kinapobonyezwa (unaweza kuamua ni kitufe gani kinapaswa kuhusishwa na kuanzisha tena).

      1. Unda kazi ya `resetGame()`:

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

     1. Ongeza mwito kwa `eventEmitter` ili kuanzisha tena mchezo katika `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Ongeza kazi ya `clear()` kwa EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Hongera, Kapteni! Mchezo wako umekamilika! Umefanya kazi nzuri! 🚀 💥 👽

---

## 🚀 Changamoto

Ongeza sauti! Je, unaweza kuongeza sauti ili kuboresha uchezaji wa mchezo wako, labda wakati kuna pigo la leza, au shujaa anakufa au kushinda? Angalia [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) ili kujifunza jinsi ya kucheza sauti kwa kutumia JavaScript.

## Maswali ya Baada ya Somo

[Maswali ya baada ya somo](https://ff-quizzes.netlify.app/web/quiz/40)

## Mapitio na Kujisomea

Kazi yako ni kuunda mfano mpya wa mchezo, kwa hivyo chunguza baadhi ya michezo ya kuvutia huko nje ili kuona ni aina gani ya mchezo unaweza kujenga.

## Kazi

[Jenga Mfano wa Mchezo](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.