<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-29T08:14:46+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "da"
}
-->
# Byg et Rumspil Del 6: Afslut og Genstart

## Quiz før forelæsning

[Quiz før forelæsning](https://ff-quizzes.netlify.app/web/quiz/39)

Der er forskellige måder at udtrykke en *slutbetingelse* i et spil. Det er op til dig som spilskaber at definere, hvorfor spillet slutter. Her er nogle mulige grunde, hvis vi antager, at vi taler om det rumspil, du har bygget indtil videre:

- **`N` fjendtlige skibe er blevet ødelagt**: Det er ret almindeligt, hvis du opdeler et spil i forskellige niveauer, at du skal ødelægge `N` fjendtlige skibe for at fuldføre et niveau.
- **Dit skib er blevet ødelagt**: Der findes helt sikkert spil, hvor du taber, hvis dit skib bliver ødelagt. En anden almindelig tilgang er at have et koncept med liv. Hver gang dit skib bliver ødelagt, mister du et liv. Når alle liv er tabt, taber du spillet.
- **Du har samlet `N` point**: En anden almindelig slutbetingelse er, at du skal samle point. Hvordan du får point, er op til dig, men det er ret almindeligt at tildele point for forskellige aktiviteter som at ødelægge et fjendtligt skib eller måske samle genstande, som bliver *droppet*, når de ødelægges.
- **Fuldfør et niveau**: Dette kan involvere flere betingelser, såsom `X` fjendtlige skibe ødelagt, `Y` point samlet eller måske, at en specifik genstand er blevet samlet.

## Genstart

Hvis folk nyder dit spil, vil de sandsynligvis gerne spille det igen. Når spillet slutter af en eller anden grund, bør du tilbyde en mulighed for at genstarte.

✅ Tænk lidt over, under hvilke betingelser du synes, et spil slutter, og hvordan du bliver opfordret til at genstarte.

## Hvad skal bygges

Du skal tilføje følgende regler til dit spil:

1. **Vinde spillet**. Når alle fjendtlige skibe er blevet ødelagt, vinder du spillet. Derudover skal der vises en form for sejrsmeddelelse.
1. **Genstart**. Når alle dine liv er tabt, eller spillet er vundet, skal du tilbyde en måde at genstarte spillet på. Husk! Du skal reinitialisere spillet, og den tidligere spiltilstand skal ryddes.

## Anbefalede trin

Find de filer, der er blevet oprettet til dig i undermappen `your-work`. Den bør indeholde følgende:

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

Du starter dit projekt i mappen `your_work` ved at skrive:

```bash
cd your-work
npm start
```

Ovenstående vil starte en HTTP-server på adressen `http://localhost:5000`. Åbn en browser, og indtast den adresse. Dit spil bør være i en spilbar tilstand.

> tip: For at undgå advarsler i Visual Studio Code skal du redigere funktionen `window.onload` til at kalde `gameLoopId` som den er (uden `let`), og erklære `gameLoopId` øverst i filen uafhængigt: `let gameLoopId;`

### Tilføj kode

1. **Spor slutbetingelse**. Tilføj kode, der holder styr på antallet af fjender, eller om helteskibet er blevet ødelagt, ved at tilføje disse to funktioner:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Tilføj logik til meddelelseshåndterere**. Rediger `eventEmitter` til at håndtere disse betingelser:

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

1. **Tilføj nye meddelelsestyper**. Tilføj disse meddelelser til konstantobjektet:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Tilføj genstartskode** kode, der genstarter spillet ved tryk på en valgt knap.

   1. **Lyt efter tastetryk `Enter`**. Rediger din vindues `eventListener` til at lytte efter dette tryk:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Tilføj genstartsmeddelelse**. Tilføj denne meddelelse til dine meddelelseskonstanter:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementer spilleregler**. Implementer følgende spilleregler:

   1. **Spillerens sejrsbetingelse**. Når alle fjendtlige skibe er ødelagt, vis en sejrsmeddelelse.

      1. Først skal du oprette en funktion `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Opret en funktion `endGame()`:

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

   1. **Genstartlogik**. Når alle liv er tabt, eller spilleren har vundet spillet, vis, at spillet kan genstartes. Genstart desuden spillet, når genstartstasten trykkes (du kan selv bestemme, hvilken tast der skal bruges til genstart).

      1. Opret funktionen `resetGame()`:

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

     1. Tilføj et kald til `eventEmitter` for at nulstille spillet i `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Tilføj en `clear()`-funktion til EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Tillykke, Kaptajn! Dit spil er færdigt! Godt klaret! 🚀 💥 👽

---

## 🚀 Udfordring

Tilføj en lyd! Kan du tilføje en lyd for at forbedre din spiloplevelse, måske når der er et laserhit, eller når helten dør eller vinder? Tag et kig på denne [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) for at lære, hvordan man afspiller lyd ved hjælp af JavaScript.

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/40)

## Gennemgang & Selvstudie

Din opgave er at skabe et nyt eksempelspil, så udforsk nogle af de interessante spil derude for at se, hvilken type spil du kunne bygge.

## Opgave

[Byg et Eksempelspil](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.