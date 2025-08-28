<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-26T22:08:58+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "no"
}
-->
# Bygg et romspill del 6: Slutt og restart

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/39)

Det finnes ulike måter å uttrykke en *sluttbetingelse* i et spill. Det er opp til deg som skaper av spillet å definere hvorfor spillet har tatt slutt. Her er noen grunner, hvis vi antar at vi snakker om romspillet du har bygget så langt:

- **`N` fiendtlige skip er blitt ødelagt**: Det er ganske vanlig, hvis du deler opp et spill i ulike nivåer, at du må ødelegge `N` fiendtlige skip for å fullføre et nivå.
- **Ditt skip er blitt ødelagt**: Det finnes definitivt spill hvor du taper hvis skipet ditt blir ødelagt. En annen vanlig tilnærming er å ha et livsystem. Hver gang skipet ditt blir ødelagt, mister du et liv. Når alle liv er brukt opp, taper du spillet.
- **Du har samlet `N` poeng**: En annen vanlig sluttbetingelse er at du samler poeng. Hvordan du får poeng er opp til deg, men det er ganske vanlig å tildele poeng for ulike aktiviteter, som å ødelegge et fiendtlig skip eller samle gjenstander som *slippes* når de blir ødelagt.
- **Fullfør et nivå**: Dette kan innebære flere betingelser, som `X` fiendtlige skip ødelagt, `Y` poeng samlet, eller kanskje at en spesifikk gjenstand er blitt samlet.

## Restart

Hvis folk liker spillet ditt, vil de sannsynligvis ønske å spille det igjen. Når spillet tar slutt av en eller annen grunn, bør du tilby en mulighet til å starte på nytt.

✅ Tenk litt på under hvilke betingelser du opplever at et spill tar slutt, og hvordan du blir bedt om å starte på nytt.

## Hva du skal bygge

Du skal legge til disse reglene i spillet ditt:

1. **Vinne spillet**. Når alle fiendtlige skip er ødelagt, vinner du spillet. I tillegg skal du vise en slags seiersmelding.
1. **Restart**. Når alle liv er brukt opp eller spillet er vunnet, skal du tilby en måte å starte spillet på nytt. Husk! Du må reinitialisere spillet, og den tidligere spilltilstanden skal ryddes.

## Anbefalte steg

Finn filene som er opprettet for deg i undermappen `your-work`. Den skal inneholde følgende:

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

Start prosjektet ditt i mappen `your_work` ved å skrive:

```bash
cd your-work
npm start
```

Dette vil starte en HTTP-server på adressen `http://localhost:5000`. Åpne en nettleser og skriv inn den adressen. Spillet ditt skal være i en spillbar tilstand.

> tips: for å unngå advarsler i Visual Studio Code, rediger funksjonen `window.onload` til å kalle `gameLoopId` som den er (uten `let`), og deklarer `gameLoopId` øverst i filen, uavhengig: `let gameLoopId;`

### Legg til kode

1. **Spor sluttbetingelse**. Legg til kode som holder oversikt over antall fiender, eller om helteskipet er blitt ødelagt ved å legge til disse to funksjonene:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Legg til logikk i meldingshåndterere**. Rediger `eventEmitter` for å håndtere disse betingelsene:

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

1. **Legg til nye meldingstyper**. Legg til disse meldingene i constants-objektet:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Legg til restart-kode** som starter spillet på nytt ved trykk på en valgt knapp.

   1. **Lytt til tastetrykk `Enter`**. Rediger vinduets eventListener til å lytte etter dette tastetrykket:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Legg til restart-melding**. Legg til denne meldingen i Messages-objektet:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementer spillregler**. Implementer følgende spillregler:

   1. **Spillerens vinnbetingelse**. Når alle fiendtlige skip er ødelagt, vis en seiersmelding.

      1. Først, opprett en funksjon `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Opprett en funksjon `endGame()`:

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

   1. **Restart-logikk**. Når alle liv er brukt opp eller spilleren har vunnet spillet, vis at spillet kan startes på nytt. I tillegg skal spillet restartes når restart-tasten trykkes (du kan bestemme hvilken tast som skal brukes til restart).

      1. Opprett funksjonen `resetGame()`:

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

     1. Legg til et kall til `eventEmitter` for å resette spillet i `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Legg til en `clear()`-funksjon i EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Gratulerer, kaptein! Spillet ditt er ferdig! Godt jobbet! 🚀 💥 👽

---

## 🚀 Utfordring

Legg til lyd! Kan du legge til lyd for å forbedre spillopplevelsen, kanskje når det er et laser-treff, eller helten dør eller vinner? Ta en titt på denne [sandboxen](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) for å lære hvordan du spiller av lyd med JavaScript.

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/40)

## Gjennomgang og selvstudium

Oppgaven din er å lage et nytt eksempelspill, så utforsk noen interessante spill der ute for å se hva slags spill du kan bygge.

## Oppgave

[Bygg et eksempelspill](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.