<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-28T04:00:46+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "hu"
}
-->
# Űrjáték készítése 6. rész: Befejezés és újrakezdés

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

Számos módja van annak, hogy kifejezzük egy játék *befejezési feltételét*. A játék készítőjeként rajtad múlik, hogy meghatározd, miért ér véget a játék. Íme néhány ok, ha feltételezzük, hogy az eddig épített űrjátékról van szó:

- **`N` ellenséges hajó megsemmisítése**: Gyakori, hogy egy játékot különböző szintekre osztanak, és egy szint teljesítéséhez meg kell semmisíteni `N` ellenséges hajót.
- **A hajód megsemmisült**: Vannak olyan játékok, ahol elveszíted a játékot, ha a hajód megsemmisül. Egy másik gyakori megközelítés az, hogy életek fogalmát vezetik be. Minden alkalommal, amikor a hajód megsemmisül, egy életet levonnak. Ha minden élet elfogy, akkor vége a játéknak.
- **`N` pontot gyűjtöttél**: Egy másik gyakori befejezési feltétel, hogy pontokat gyűjts. Az, hogy hogyan szerzel pontokat, rajtad múlik, de gyakori, hogy pontokat rendelnek különböző tevékenységekhez, például ellenséges hajó megsemmisítéséhez vagy tárgyak gyűjtéséhez, amelyeket a tárgyak *eldobnak*, amikor megsemmisülnek.
- **Egy szint teljesítése**: Ez több feltételt is magában foglalhat, például `X` ellenséges hajó megsemmisítése, `Y` pontok gyűjtése, vagy esetleg egy adott tárgy begyűjtése.

## Újrakezdés

Ha az emberek élvezik a játékodat, valószínűleg újra szeretnék játszani. Amikor a játék bármilyen okból véget ér, biztosítsd az újrakezdés lehetőségét.

✅ Gondolkodj el azon, hogy milyen feltételek mellett ér véget egy játék, és hogyan ösztönöznek az újrakezdésre.

## Mit kell építeni

A következő szabályokat fogod hozzáadni a játékodhoz:

1. **A játék megnyerése**. Ha minden ellenséges hajót megsemmisítettél, megnyered a játékot. Ezen kívül jeleníts meg valamilyen győzelmi üzenetet.
1. **Újrakezdés**. Ha minden életed elfogyott, vagy megnyerted a játékot, biztosítsd az újrakezdés lehetőségét. Ne feledd! Újra kell inicializálnod a játékot, és a korábbi játékállapotot törölni kell.

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

Indítsd el a projektedet a `your_work` mappában az alábbi parancs begépelésével:

```bash
cd your-work
npm start
```

Ez elindít egy HTTP szervert a `http://localhost:5000` címen. Nyiss meg egy böngészőt, és írd be ezt a címet. A játékodnak játszható állapotban kell lennie.

> Tipp: hogy elkerüld a figyelmeztetéseket a Visual Studio Code-ban, szerkeszd a `window.onload` függvényt úgy, hogy a `gameLoopId`-t hívja meg (a `let` nélkül), és deklaráld a `gameLoopId`-t a fájl tetején, külön: `let gameLoopId;`

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

1. **Új üzenettípusok hozzáadása**. Add hozzá ezeket az üzeneteket a constants objektumhoz:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Újrakezdési kód hozzáadása**. Adj hozzá kódot, amely újraindítja a játékot egy kiválasztott gomb megnyomásával.

   1. **Hallgatás az `Enter` billentyű lenyomására**. Szerkeszd az ablakod eventListener-jét, hogy figyeljen erre a lenyomásra:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Újrakezdési üzenet hozzáadása**. Add hozzá ezt az üzenetet az üzenetek constants objektumhoz:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Játékszabályok megvalósítása**. Valósítsd meg a következő játékszabályokat:

   1. **Játékos győzelmi feltétele**. Ha minden ellenséges hajót megsemmisítettél, jeleníts meg egy győzelmi üzenetet.

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

   1. **Újrakezdési logika**. Ha minden élet elfogyott, vagy a játékos megnyerte a játékot, jelenítsd meg, hogy a játék újrakezdhető. Ezen kívül indítsd újra a játékot, amikor az *újrakezdés* gombot megnyomják (te döntheted el, melyik gomb legyen az újrakezdéshez hozzárendelve).

      1. Hozz létre egy `resetGame()` függvényt:

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

Adj hozzá hangot! Tudsz hangot hozzáadni, hogy fokozd a játékélményt, például amikor lézer találat történik, vagy a hős meghal vagy győz? Nézd meg ezt a [sandboxot](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play), hogy megtanuld, hogyan lehet hangot lejátszani JavaScript segítségével.

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## Áttekintés és önálló tanulás

A feladatod, hogy készíts egy új mintajátékot, ezért fedezd fel néhány érdekes játékot, hogy inspirációt kapj, milyen típusú játékot építhetnél.

## Feladat

[Mintajáték készítése](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.