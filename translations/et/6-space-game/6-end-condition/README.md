<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-10-11T12:12:18+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "et"
}
-->
# Kosmoseteemalise mängu loomine, osa 6: Lõpp ja taaskäivitamine

## Loengu-eelne viktoriin

[Loengu-eelne viktoriin](https://ff-quizzes.netlify.app/web/quiz/39)

Mängus on erinevaid viise, kuidas väljendada *lõpu tingimust*. Mängu loojana on sinu otsustada, miks mäng lõpeb. Siin on mõned põhjused, kui eeldame, et räägime kosmoseteemalisest mängust, mida oled seni ehitanud:

- **`N` vaenlase laeva on hävitatud**: On üsna tavaline, et mäng jagatakse erinevateks tasemeteks, kus pead hävitama `N` vaenlase laeva, et tase läbida.
- **Sinu laev on hävitatud**: On mänge, kus kaotad, kui sinu laev hävitatakse. Teine levinud lähenemine on elude kontseptsioon. Iga kord, kui sinu laev hävitatakse, kaotad ühe elu. Kui kõik elud on otsas, kaotad mängu.
- **Oled kogunud `N` punkti**: Teine levinud lõpu tingimus on punktide kogumine. Kuidas punkte koguda, on sinu otsustada, kuid sageli antakse punkte erinevate tegevuste eest, näiteks vaenlase laeva hävitamise või esemete kogumise eest, mida hävitatud objektid maha jätavad.
- **Tase on läbitud**: See võib hõlmata mitmeid tingimusi, näiteks `X` vaenlase laeva hävitamine, `Y` punkti kogumine või võib-olla konkreetse eseme kogumine.

## Taaskäivitamine

Kui inimestele meeldib sinu mäng, tahavad nad seda tõenäoliselt uuesti mängida. Kui mäng mingil põhjusel lõpeb, peaksid pakkuma võimalust see uuesti käivitada.

✅ Mõtle veidi, millistel tingimustel mäng sinu arvates lõpeb ja kuidas sind taaskäivitamisele suunatakse.

## Mida ehitada

Sa lisad oma mängule järgmised reeglid:

1. **Mängu võitmine**. Kui kõik vaenlase laevad on hävitatud, võidad mängu. Lisaks kuvatakse mingi võiduteade.
1. **Taaskäivitamine**. Kui kõik sinu elud on otsas või mäng on võidetud, peaks olema võimalus mäng uuesti käivitada. Pea meeles! Pead mängu uuesti initsialiseerima ja eelmise mängu oleku tühjendama.

## Soovitatavad sammud

Leia failid, mis on sinu jaoks loodud kaustas `your-work`. See peaks sisaldama järgmist:

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
  
Alusta oma projekti kaustas `your_work`, tippides:

```bash
cd your-work
npm start
```
  
Ülaltoodu käivitab HTTP serveri aadressil `http://localhost:5000`. Ava brauser ja sisesta see aadress. Sinu mäng peaks olema mängitavas seisundis.

> vihje: et vältida hoiatusteateid Visual Studio Code'is, muuda `window.onload` funktsiooni nii, et see kutsuks `gameLoopId` ilma `let`-ita, ja deklareeri gameLoopId faili alguses eraldi: `let gameLoopId;`

### Lisa kood

1. **Lõpu tingimuse jälgimine**. Lisa kood, mis jälgib vaenlaste arvu või seda, kas kangelase laev on hävitatud, lisades need kaks funktsiooni:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```
  
1. **Lisa loogika sõnumite töötlejatele**. Muuda `eventEmitter`-it, et see töötleks neid tingimusi:

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
  
1. **Lisa uued sõnumitüübid**. Lisa need sõnumid constants objekti:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```
  
2. **Lisa taaskäivitamise kood**, mis käivitab mängu uuesti valitud nupu vajutamisel.

   1. **Kuula klahvivajutust `Enter`**. Muuda oma akna eventListener-it, et see kuulaks seda klahvivajutust:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```
  
   1. **Lisa taaskäivitamise sõnum**. Lisa see sõnum oma Messages konstandile:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```
  
1. **Rakenda mängureeglid**. Rakenda järgmised mängureeglid:

   1. **Mängija võidutingimus**. Kui kõik vaenlase laevad on hävitatud, kuva võiduteade.

      1. Kõigepealt loo funktsioon `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```
  
      1. Loo funktsioon `endGame()`:

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
  
   1. **Taaskäivitamise loogika**. Kui kõik elud on otsas või mängija on mängu võitnud, kuva teade, et mängu saab taaskäivitada. Lisaks käivita mäng uuesti, kui vajutatakse *taaskäivitamise* klahvi (saad ise otsustada, milline klahv taaskäivitamisele vastab).

      1. Loo funktsioon `resetGame()`:

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
  
     1. Lisa `eventEmitter`-i kõne mängu taaskäivitamiseks funktsiooni `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```
  
     1. Lisa EventEmitter-ile funktsioon `clear()`:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```
  
👽 💥 🚀 Palju õnne, kapten! Sinu mäng on valmis! Tubli töö! 🚀 💥 👽

---

## 🚀 Väljakutse

Lisa heli! Kas suudad lisada heli, et mängukogemust täiustada, näiteks kui laser tabab, kangelane sureb või võidab? Vaata seda [liivakasti](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play), et õppida, kuidas JavaScripti abil heli esitada.

## Loengu-järgne viktoriin

[Loengu-järgne viktoriin](https://ff-quizzes.netlify.app/web/quiz/40)

## Ülevaade ja iseseisev õppimine

Sinu ülesanne on luua uus näidismäng, seega uuri mõningaid huvitavaid mänge, et näha, millist tüüpi mängu võiksid ehitada.

## Ülesanne

[Loo näidismäng](assignment.md)

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.