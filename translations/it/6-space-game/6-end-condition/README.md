<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-25T22:37:08+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "it"
}
-->
# Costruire un Gioco Spaziale Parte 6: Fine e Riavvio

## Quiz Pre-Lettura

[Quiz pre-lettura](https://ff-quizzes.netlify.app/web/quiz/39)

Ci sono diversi modi per esprimere una *condizione di fine* in un gioco. Sta a te, come creatore del gioco, decidere perché il gioco è terminato. Ecco alcune ragioni, supponendo che stiamo parlando del gioco spaziale che hai costruito finora:

- **Distrutti `N` navi nemiche**: È abbastanza comune, se dividi un gioco in diversi livelli, che tu debba distruggere `N` navi nemiche per completare un livello.
- **La tua nave è stata distrutta**: Ci sono sicuramente giochi in cui perdi se la tua nave viene distrutta. Un altro approccio comune è avere il concetto di vite. Ogni volta che la tua nave viene distrutta, si perde una vita. Una volta perse tutte le vite, il gioco termina.
- **Hai raccolto `N` punti**: Un'altra condizione di fine comune è raccogliere punti. Come ottieni i punti dipende da te, ma è abbastanza comune assegnare punti a varie attività, come distruggere una nave nemica o raccogliere oggetti che vengono *lasciati cadere* quando vengono distrutti.
- **Completare un livello**: Questo potrebbe coinvolgere diverse condizioni, come `X` navi nemiche distrutte, `Y` punti raccolti o magari un oggetto specifico raccolto.

## Riavvio

Se le persone apprezzano il tuo gioco, è probabile che vogliano rigiocarlo. Una volta che il gioco termina per qualsiasi motivo, dovresti offrire un'opzione per riavviarlo.

✅ Pensa un po' alle condizioni in cui trovi che un gioco termina e poi a come ti viene chiesto di riavviarlo.

## Cosa costruire

Aggiungerai queste regole al tuo gioco:

1. **Vincere il gioco**. Una volta distrutte tutte le navi nemiche, vinci il gioco. Inoltre, mostra un messaggio di vittoria.
1. **Riavvio**. Una volta perse tutte le vite o vinto il gioco, dovresti offrire un modo per riavviare il gioco. Ricorda! Dovrai re-inizializzare il gioco e cancellare lo stato precedente del gioco.

## Passaggi consigliati

Trova i file che sono stati creati per te nella sottocartella `your-work`. Dovrebbe contenere quanto segue:

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

Avvia il tuo progetto nella cartella `your_work` digitando:

```bash
cd your-work
npm start
```

Questo avvierà un server HTTP all'indirizzo `http://localhost:5000`. Apri un browser e inserisci quell'indirizzo. Il tuo gioco dovrebbe essere in uno stato giocabile.

> suggerimento: per evitare avvisi in Visual Studio Code, modifica la funzione `window.onload` per chiamare `gameLoopId` così com'è (senza `let`), e dichiara `gameLoopId` all'inizio del file, indipendentemente: `let gameLoopId;`

### Aggiungi codice

1. **Traccia la condizione di fine**. Aggiungi codice che tiene traccia del numero di nemici o se la nave dell'eroe è stata distrutta aggiungendo queste due funzioni:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Aggiungi logica ai gestori di messaggi**. Modifica l'`eventEmitter` per gestire queste condizioni:

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

1. **Aggiungi nuovi tipi di messaggi**. Aggiungi questi Messaggi all'oggetto constants:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Aggiungi codice di riavvio** per riavviare il gioco alla pressione di un pulsante selezionato.

   1. **Ascolta la pressione del tasto `Enter`**. Modifica l'eventListener della tua finestra per ascoltare questa pressione:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Aggiungi messaggio di riavvio**. Aggiungi questo Messaggio al tuo constants Messages:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementa le regole del gioco**. Implementa le seguenti regole del gioco:

   1. **Condizione di vittoria del giocatore**. Quando tutte le navi nemiche sono distrutte, mostra un messaggio di vittoria.

      1. Per prima cosa, crea una funzione `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Crea una funzione `endGame()`:

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

   1. **Logica di riavvio**. Quando tutte le vite sono perse o il giocatore ha vinto il gioco, mostra che il gioco può essere riavviato. Inoltre, riavvia il gioco quando il tasto *riavvio* viene premuto (puoi decidere quale tasto mappare per il riavvio).

      1. Crea la funzione `resetGame()`:

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

     1. Aggiungi una chiamata all'`eventEmitter` per reimpostare il gioco in `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Aggiungi una funzione `clear()` all'EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Congratulazioni, Capitano! Il tuo gioco è completo! Ben fatto! 🚀 💥 👽

---

## 🚀 Sfida

Aggiungi un suono! Riesci ad aggiungere un suono per migliorare il gameplay, magari quando c'è un colpo laser, o l'eroe muore o vince? Dai un'occhiata a questo [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) per imparare come riprodurre suoni usando JavaScript.

## Quiz Post-Lettura

[Quiz post-lettura](https://ff-quizzes.netlify.app/web/quiz/40)

## Revisione & Studio Autonomo

Il tuo compito è creare un nuovo gioco di esempio, quindi esplora alcuni dei giochi interessanti là fuori per vedere che tipo di gioco potresti costruire.

## Compito

[Costruisci un Gioco di Esempio](assignment.md)

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di tenere presente che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un esperto umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.