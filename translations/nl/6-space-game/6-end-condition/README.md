<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-27T20:29:35+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtespel Deel 6: Einde en Herstart

## Quiz voor de les

[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/39)

Er zijn verschillende manieren om een *eindconditie* in een spel uit te drukken. Het is aan jou als maker van het spel om te bepalen waarom het spel eindigt. Hier zijn enkele redenen, ervan uitgaande dat we het hebben over het ruimtespel dat je tot nu toe hebt gebouwd:

- **`N` Vijandelijke schepen zijn vernietigd**: Het is vrij gebruikelijk dat je een spel in verschillende niveaus verdeelt en dat je `N` vijandelijke schepen moet vernietigen om een niveau te voltooien.
- **Je schip is vernietigd**: Er zijn zeker spellen waarin je verliest als je schip wordt vernietigd. Een andere veelvoorkomende aanpak is het concept van levens. Elke keer dat je schip wordt vernietigd, verlies je een leven. Zodra alle levens verloren zijn, verlies je het spel.
- **Je hebt `N` punten verzameld**: Een andere veelvoorkomende eindconditie is dat je punten verzamelt. Hoe je punten krijgt, is aan jou, maar het is vrij gebruikelijk om punten toe te kennen aan verschillende activiteiten, zoals het vernietigen van een vijandelijk schip of het verzamelen van items die worden *gedropt* wanneer ze worden vernietigd.
- **Voltooi een niveau**: Dit kan verschillende voorwaarden omvatten, zoals `X` vijandelijke schepen vernietigd, `Y` punten verzameld of misschien dat een specifiek item is verzameld.

## Herstarten

Als mensen je spel leuk vinden, willen ze het waarschijnlijk opnieuw spelen. Zodra het spel om welke reden dan ook eindigt, moet je een optie bieden om opnieuw te starten.

✅ Denk eens na over de voorwaarden waaronder een spel eindigt en hoe je wordt gevraagd om opnieuw te starten.

## Wat te bouwen

Je gaat deze regels aan je spel toevoegen:

1. **Het spel winnen**. Zodra alle vijandelijke schepen zijn vernietigd, win je het spel. Toon daarnaast een soort overwinningsbericht.
1. **Herstarten**. Zodra al je levens verloren zijn of het spel is gewonnen, moet je een manier bieden om het spel opnieuw te starten. Vergeet niet! Je moet het spel opnieuw initialiseren en de vorige spelstatus wissen.

## Aanbevolen stappen

Vind de bestanden die voor je zijn gemaakt in de submap `your-work`. Deze map zou het volgende moeten bevatten:

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

Start je project in de map `your_work` door het volgende in te typen:

```bash
cd your-work
npm start
```

Hiermee wordt een HTTP-server gestart op het adres `http://localhost:5000`. Open een browser en voer dat adres in. Je spel zou in een speelbare staat moeten zijn.

> tip: om waarschuwingen in Visual Studio Code te vermijden, bewerk de functie `window.onload` zodat deze `gameLoopId` aanroept zoals het is (zonder `let`), en declareer de gameLoopId bovenaan het bestand, onafhankelijk: `let gameLoopId;`

### Code toevoegen

1. **Eindconditie bijhouden**. Voeg code toe die het aantal vijanden bijhoudt of controleert of het heldenschip is vernietigd door deze twee functies toe te voegen:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Logica toevoegen aan berichtverwerkers**. Bewerk de `eventEmitter` om deze voorwaarden te verwerken:

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

1. **Nieuwe berichttypes toevoegen**. Voeg deze berichten toe aan het constants-object:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Herstartcode toevoegen**. Voeg code toe die het spel opnieuw start bij het indrukken van een geselecteerde knop.

   1. **Luister naar toetsdruk `Enter`**. Bewerk de eventListener van je venster om naar deze toetsdruk te luisteren:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Herstartbericht toevoegen**. Voeg dit bericht toe aan je Messages constant:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Spelregels implementeren**. Implementeer de volgende spelregels:

   1. **Winconditie voor speler**. Wanneer alle vijandelijke schepen zijn vernietigd, toon een overwinningsbericht.

      1. Maak eerst een functie `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Maak een functie `endGame()`:

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

   1. **Herstartlogica**. Wanneer alle levens verloren zijn of de speler het spel heeft gewonnen, toon dat het spel opnieuw kan worden gestart. Start het spel opnieuw wanneer de *herstart* toets wordt ingedrukt (je kunt zelf bepalen welke toets hiervoor wordt gebruikt).

      1. Maak de functie `resetGame()`:

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

     1. Voeg een oproep toe aan de `eventEmitter` om het spel opnieuw in te stellen in `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Voeg een functie `clear()` toe aan de EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Gefeliciteerd, Kapitein! Je spel is compleet! Goed gedaan! 🚀 💥 👽

---

## 🚀 Uitdaging

Voeg een geluid toe! Kun je een geluid toevoegen om je spelervaring te verbeteren, bijvoorbeeld wanneer er een laser wordt geraakt, of wanneer de held sterft of wint? Bekijk deze [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) om te leren hoe je geluid afspeelt met JavaScript.

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/40)

## Review & Zelfstudie

Je opdracht is om een nieuw voorbeeldspel te maken, dus verken enkele interessante spellen om te zien wat voor soort spel je zou kunnen bouwen.

## Opdracht

[Maak een voorbeeldspel](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.