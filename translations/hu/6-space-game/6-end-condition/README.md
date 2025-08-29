<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-29T10:29:31+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "hu"
}
-->
# Űrjáték építése 6. rész: Befejezés és újrakezdés

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/39)

Egy játékban különböző módokon lehet kifejezni a *befejezési feltételt*. Mint a játék készítője, rajtad múlik, hogy meghatározd, miért ér véget a játék. Íme néhány ok, ha feltételezzük, hogy az eddig épített űrjátékról beszélünk:

- **`N` ellenséges hajó megsemmisült**: Gyakori, hogy ha egy játékot különböző szintekre osztasz, akkor egy szint teljesítéséhez `N` ellenséges hajót kell megsemmisíteni.
- **A hajód megsemmisült**: Vannak olyan játékok, ahol elveszíted a játékot, ha a hajód megsemmisül. Egy másik gyakori megközelítés az, hogy életek fogalmát vezeted be. Minden alkalommal, amikor a hajód megsemmisül, elveszítesz egy életet. Ha minden életed elfogyott, akkor vége a játéknak.
- **Összegyűjtöttél `N` pontot**: Egy másik gyakori befejezési feltétel, hogy pontokat gyűjts. Az, hogy hogyan szerzel pontokat, rajtad múlik, de gyakori, hogy pontokat rendelnek különböző tevékenységekhez, például egy ellenséges hajó megsemmisítéséhez vagy tárgyak gyűjtéséhez, amelyeket a tárgyak *eldobnak*, amikor megsemmisülnek.
- **Teljesítettél egy szintet**: Ez több feltételt is magában foglalhat, például `X` ellenséges hajó megsemmisítését, `Y` pont összegyűjtését, vagy esetleg egy adott tárgy megszerzését.

## Újrakezdés

Ha az emberek élvezik a játékodat, valószínűleg újra szeretnék játszani. Amikor a játék bármilyen okból véget ér, biztosíts egy lehetőséget az újrakezdésre.

✅ Gondold át, hogy milyen feltételek mellett ér véget egy játék, és hogyan ösztönöznek az újrakezdésre.

## Mit kell építeni

A következő szabályokat fogod hozzáadni a játékodhoz:

1. **A játék megnyerése**. Ha az összes ellenséges hajót megsemmisítetted, megnyered a játékot. Ezenkívül jeleníts meg valamilyen győzelmi üzenetet.
2. **Újrakezdés**. Ha minden életed elfogyott, vagy megnyerted a játékot, biztosíts egy lehetőséget a játék újrakezdésére. Ne feledd! Újra kell inicializálnod a játékot, és a korábbi játékállapotot törölni kell.

## Ajánlott lépések

Keresd meg azokat a fájlokat, amelyeket a `your-work` almappában hoztak létre számodra. Ezeknek a következőket kell tartalmazniuk:

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

A projektedet a `your_work` mappában indíthatod el az alábbi parancs beírásával:

```bash
cd your-work
npm start
```

A fenti parancs egy HTTP szervert indít a `http://localhost:5000` címen. Nyiss meg egy böngészőt, és írd be ezt a címet. A játékodnak játszható állapotban kell lennie.

> Tipp: hogy elkerüld a figyelmeztetéseket a Visual Studio Code-ban, szerkeszd a `window.onload` függvényt úgy, hogy a `gameLoopId`-t hívja meg (a `let` nélkül), és deklaráld a `gameLoopId`-t a fájl tetején külön: `let gameLoopId;`

### Kód hozzáadása

1. **Befejezési feltétel követése**. Adj hozzá kódot, amely nyomon követi az ellenségek számát, vagy hogy a hős hajó megsemmisült-e, az alábbi két függvény hozzáadásával:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Logika hozzáadása az üzenetkezelőkhöz**. Szerkeszd az `eventEmitter`-t, hogy kezelje ezeket a feltételeket:

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

1. **Új üzenettípusok hozzáadása**. Add hozzá ezeket az Üzeneteket a constants objektumhoz:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Újrakezdési kód hozzáadása**. Adj hozzá kódot, amely újraindítja a játékot egy kiválasztott gomb megnyomásakor.

   1. **Figyelj az `Enter` billentyű lenyomására**. Szerkeszd az ablakod eventListener-jét, hogy figyeljen erre a billentyűre:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Újrakezdési üzenet hozzáadása**. Add hozzá ezt az Üzenetet az Üzenetek konstanshoz:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Játékszabályok megvalósítása**. Valósítsd meg a következő játékszabályokat:

   1. **Játékos győzelmi feltétele**. Ha az összes ellenséges hajót megsemmisítetted, jeleníts meg egy győzelmi üzenetet.

      1. Először hozz létre egy `displayMessage()` függvényt:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Hozz létre egy `endGame()` függvényt:

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

   1. **Újrakezdési logika**. Ha minden életed elfogyott, vagy megnyerted a játékot, jelenítsd meg, hogy a játék újraindítható. Ezenkívül indítsd újra a játékot, amikor az *újrakezdés* gombot megnyomják (te döntöd el, melyik billentyű legyen az újrakezdéshez rendelve).

      1. Hozd létre a `resetGame()` függvényt:

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

     1. Adj hozzá egy hívást az `eventEmitter`-hez, hogy újraindítsa a játékot az `initGame()`-ben:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Adj hozzá egy `clear()` függvényt az EventEmitter-hez:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Gratulálok, Kapitány! A játékod elkészült! Szép munka! 🚀 💥 👽

---

## 🚀 Kihívás

Adj hozzá hangot! Tudsz hangot hozzáadni, hogy fokozd a játékélményt? Például, amikor egy lézer talál, vagy a hős meghal, vagy győz? Nézd meg ezt a [sandboxot](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play), hogy megtanuld, hogyan lehet hangot lejátszani JavaScript segítségével.

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/40)

## Áttekintés és önálló tanulás

A feladatod egy új minta játék létrehozása, ezért fedezz fel néhány érdekes játékot, hogy inspirációt kapj, milyen típusú játékot építhetnél.

## Feladat

[Minta játék építése](assignment.md)

---

**Felelősségkizárás**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével készült. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt a professzionális, emberi fordítás igénybevétele. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.