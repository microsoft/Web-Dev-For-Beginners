# Costruire un Gioco Spaziale Parte 6: Fine e Riavvio

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39?loc=it)

Esistono diversi modi per esprimere una *condizione di fine gioco*. Spetta al creatore del gioco dire perché il gioco è finito. Ecco alcuni motivi, si supponga di parlare del gioco spaziale costruito finora:

- Un  **numero `N` di astronavi nemiche sono state distrutte**: è abbastanza comune se il gioco viene diviso in diversi livelli che si debba distruggere `N` astronavi nemiche per completare un livello
- **La propria nave è stata distrutta**: ci sono sicuramente giochi in si perde la partita se la propria astronave viene distrutta. Un altro approccio comune è il concetto di vite. Ogni volta che una propria astronave viene distrutta, sottrae una vita. Una volta perse tutte le vite, si perde la partita.
- **Sono stati raccolti `N` punti**: un'altra condizione finale comune è che il giocatore raccolga punti. Il modo in cui ottenere punti dipende dallo sviluppatore, ma è abbastanza comune assegnare punti a varie attività come distruggere una astronave nemica o forse raccogliere elementi che vengono *rilasciati* quando gli oggetti vengono distrutti.
- **Completare un livello**: questo potrebbe coinvolgere diverse condizioni come `X` astronavi nemiche distrutte, `Y` punti raccolti o forse che è stato raccolto un oggetto specifico.

## Riavvio

Se le persone apprezzano il  gioco, è probabile che vogliano rigiocarlo. Una volta che il gioco finisce per qualsiasi motivo, si dovrebbe offrire un'alternativa per il riavvio.

✅ Si pensi alle condizioni per le quali si ritiene che un gioco finisca e poi a come  viene chiesto di riavviare

## Cosa costruire

Aggiungere queste regole al gioco:

1. **Vincere il gioco**. Una volta che tutte le navi nemiche sono state distrutte, si vince la partita. Mostrare inoltre una sorta di messaggio di vittoria.
1. **Riavvio**. Una volta perse tutte le vite o si è vinto il gioco, si dovrebbe offrire un modo per riavviare il gioco. Ricordare! Si dovrà reinizializzare il gioco e lo stato del gioco precedente dovrebbe essere cancellato.

## Passaggi consigliati

Individuare i file che già sono stati creati nella sottocartella `your-work`. Dovrebbe contenere le seguenti informazioni:

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

Si fa partire il progetto dalla cartella `your_work` digitando:

```bash
cd your-work
npm start
```

Quanto sopra avvierà un server HTTP all'indirizzo `http://localhost:5000`. Aprire un browser e inserire quell'indirizzo. Il gioco dovrebbe essere in uno stato giocabile.

> suggerimento: per evitare avvertimenti in Visual Studio Code, modificare la funzione `window.onload` per chiamare `gameLoopId` così com'è (senza `let`) e dichiarare gameLoopId all'inizio del file, indipendentemente: `let gameLoopId;`

### Aggiungere codice

1. **Tracciare la condizione di fine**. Aggiungere codice che tenga traccia del numero di nemici o se l'astronave dell'eroe è stata distrutta aggiungendo queste due funzioni:

   ```javascript
   function isHeroDead() {
     return hero.life <= 0;
   }

   function isEnemiesDead() {
     const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
     return enemies.length === 0;
   }
   ```

1. **Aggiungere logica ai gestori di messaggi**. Modificare `eventEmitter` per gestire queste condizioni:

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

1. **Aggiungere nuovi tipi di messaggi**. Aggiungere questi messaggi alle costanti assegnate agli oggetti:

   ```javascript
   GAME_END_LOSS: "GAME_END_LOSS",
   GAME_END_WIN: "GAME_END_WIN",
   ```

2. **Aggiungere il codice di riavvio** che fa ripartire il gioco con la semplice pressione di un pulsante selezionato.

   1. **Mettersi in ascolto per la pressione del tasto `Invio`**. Modificare l'eventListener di window per ascoltare questa pressione

   ```javascript
    else if(evt.key === "Enter") {
       eventEmitter.emit(Messages.KEY_EVENT_ENTER);
     }
   ```

   1. **Aggiungere messaggio di riavvio**. Aggiungere questo messaggio alle costanti in Messages:

      ```javascript
      KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
      ```

1. **Implementare le regole del gioco**. Implementare le seguenti regole di gioco:

   1. **Condizione di vittoria del giocatore**. Quando tutte le astronavi nemiche vengono distrutte, mostrare un messaggio di vittoria.

      1. Innanzitutto, creare una funzione `displayMessage()` :

      ```javascript
      function displayMessage(message, color = "red") {
        ctx.font = "30px Arial";
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.fillText(message, canvas.width / 2, canvas.height / 2);
      }
      ```

      1. Creare una funzione `endGame()` :

      ```javascript
      function endGame(win) {
        clearInterval(gameLoopId);

        // imposta un ritardo per assicurarsi che tutte sia stato disegnato
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

   1. **Logica di riavvio**. Quando tutte le vite sono perse o il giocatore ha vinto la partita, mostrare che il gioco può essere riavviato. Inoltre, riavviare il gioco quando viene premuto il tasto di *riavvio* (si può decidere quale tasto deve essere mappato per il riavvio).

      1. Creare la funzione `resetGame()` :

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

   1. Aggiungere una chiamata a `eventEmitter` per riazzerare il gioco in `initGame()`:

      ```javascript
      eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
        resetGame();
      });
      ```

   1. Aggiungere una funzione `clear()` a EventEmitter:

      ```javascript
      clear() {
        this.listeners = {};
      }
      ```

👽 💥 🚀 Congratulazioni, Capitano! Il gioco è completo! Ottimo lavoro! 🚀 💥 👽

---

## 🚀 Sfida

Aggiungere un suono! Si può aggiungere un suono per migliorare il gioco, magari quando un colpo di laser va a segno, o l'eroe muore o vince? Si dia un'occhiata a questo [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) per imparare a riprodurre il suono utilizzando JavaScript

## Quiz Post-Lezione

[Quiz post-lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40?loc=it)

## Revisione e Auto Apprendimento

Il compito è creare un nuovo gioco di esempio, quindi esplorare alcuni dei giochi interessanti esistenti per vedere che tipo di gioco si potrebbe costruire.

## Compito

[Creare un Gioco di Esempio](assignment.it.md)
