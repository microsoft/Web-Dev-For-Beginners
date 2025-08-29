<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-29T07:55:35+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "sv"
}
-->
# Bygg ett rymdspel del 6: Slut och starta om

## Quiz före föreläsning

[Quiz före föreläsning](https://ff-quizzes.netlify.app/web/quiz/39)

Det finns olika sätt att uttrycka ett *slutvillkor* i ett spel. Det är upp till dig som skapare av spelet att bestämma varför spelet har tagit slut. Här är några anledningar, om vi antar att vi pratar om rymdspelet du har byggt hittills:

- **`N` fiendeskepp har förstörts**: Det är ganska vanligt att dela upp ett spel i olika nivåer där du behöver förstöra `N` fiendeskepp för att klara en nivå.
- **Ditt skepp har förstörts**: Det finns definitivt spel där du förlorar om ditt skepp förstörs. Ett annat vanligt tillvägagångssätt är att ha ett koncept med liv. Varje gång ditt skepp förstörs förlorar du ett liv. När alla liv är slut förlorar du spelet.
- **Du har samlat `N` poäng**: Ett annat vanligt slutvillkor är att samla poäng. Hur du får poäng är upp till dig, men det är ganska vanligt att tilldela poäng för olika aktiviteter, som att förstöra ett fiendeskepp eller kanske samla föremål som *släpps* när de förstörs.
- **Klarat en nivå**: Detta kan innebära flera villkor, såsom att `X` fiendeskepp förstörts, `Y` poäng samlats eller kanske att ett specifikt föremål har samlats in.

## Starta om

Om folk gillar ditt spel kommer de troligtvis vilja spela det igen. När spelet tar slut av någon anledning bör du erbjuda ett alternativ att starta om.

✅ Fundera lite på under vilka villkor du tycker att ett spel tar slut, och hur du blir uppmanad att starta om.

## Vad du ska bygga

Du kommer att lägga till dessa regler i ditt spel:

1. **Vinna spelet**. När alla fiendeskepp har förstörts vinner du spelet. Visa dessutom någon form av segermeddelande.
1. **Starta om**. När alla dina liv är slut eller spelet är vunnet bör du erbjuda ett sätt att starta om spelet. Kom ihåg! Du måste initiera spelet på nytt och rensa det tidigare spelstatuset.

## Rekommenderade steg

Leta upp filerna som har skapats åt dig i undermappen `your-work`. Den bör innehålla följande:

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

Starta ditt projekt i mappen `your_work` genom att skriva:

```bash
cd your-work
npm start
```

Ovanstående startar en HTTP-server på adressen `http://localhost:5000`. Öppna en webbläsare och ange den adressen. Ditt spel bör vara i ett spelbart tillstånd.

> tips: för att undvika varningar i Visual Studio Code, redigera funktionen `window.onload` så att den anropar `gameLoopId` som den är (utan `let`), och deklarera `gameLoopId` högst upp i filen, separat: `let gameLoopId;`

### Lägg till kod

1. **Spåra slutvillkor**. Lägg till kod som håller koll på antalet fiender, eller om hjälteskeppet har förstörts genom att lägga till dessa två funktioner:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Lägg till logik i meddelandehanterare**. Redigera `eventEmitter` för att hantera dessa villkor:

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

1. **Lägg till nya meddelandetyper**. Lägg till dessa meddelanden i objektet constants:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Lägg till omstartskod**. Lägg till kod som startar om spelet vid tryck på en vald knapp.

   1. **Lyssna på knapptryck `Enter`**. Redigera din fönsters eventListener för att lyssna på detta tryck:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Lägg till omstartsmeddelande**. Lägg till detta meddelande i ditt meddelandekonstant:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementera spelregler**. Implementera följande spelregler:

   1. **Spelarens vinstvillkor**. När alla fiendeskepp är förstörda, visa ett segermeddelande.

      1. Skapa först en funktion `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Skapa en funktion `endGame()`:

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

   1. **Omstartlogik**. När alla liv är slut eller spelaren har vunnit spelet, visa att spelet kan startas om. Starta dessutom om spelet när *omstartsknappen* trycks (du kan bestämma vilken knapp som ska användas för omstart).

      1. Skapa funktionen `resetGame()`:

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

     1. Lägg till ett anrop till `eventEmitter` för att återställa spelet i `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Lägg till en funktion `clear()` i EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Grattis, Kapten! Ditt spel är klart! Bra jobbat! 🚀 💥 👽

---

## 🚀 Utmaning

Lägg till ett ljud! Kan du lägga till ett ljud för att förbättra spelupplevelsen, kanske när det sker en laserträff, eller när hjälten dör eller vinner? Ta en titt på denna [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) för att lära dig hur man spelar ljud med JavaScript.

## Quiz efter föreläsning

[Quiz efter föreläsning](https://ff-quizzes.netlify.app/web/quiz/40)

## Granskning & Självstudier

Din uppgift är att skapa ett nytt exempelspel, så utforska några av de intressanta spelen där ute för att se vilken typ av spel du kanske vill bygga.

## Uppgift

[Bygg ett exempelspel](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiska översättningar kan innehålla fel eller inexaktheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.