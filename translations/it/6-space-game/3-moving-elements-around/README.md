<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-25T22:13:22+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "it"
}
-->
# Costruire un Gioco Spaziale Parte 3: Aggiungere Movimento

## Quiz Pre-Lezione

[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/33)

I giochi non sono molto divertenti finché non ci sono alieni che si muovono sullo schermo! In questo gioco, utilizzeremo due tipi di movimenti:

- **Movimento tramite tastiera/mouse**: quando l'utente interagisce con la tastiera o il mouse per spostare un oggetto sullo schermo.
- **Movimento indotto dal gioco**: quando il gioco sposta un oggetto a intervalli di tempo definiti.

Quindi, come facciamo a muovere le cose sullo schermo? Tutto si basa sulle coordinate cartesiane: cambiamo la posizione (x, y) dell'oggetto e poi ridisegniamo lo schermo.

Tipicamente, per ottenere il *movimento* sullo schermo, sono necessari i seguenti passaggi:

1. **Impostare una nuova posizione** per un oggetto; questo è necessario per percepire l'oggetto come se si fosse mosso.
2. **Pulire lo schermo**, lo schermo deve essere pulito tra un disegno e l'altro. Possiamo farlo disegnando un rettangolo riempito con un colore di sfondo.
3. **Ridisegnare l'oggetto** nella nuova posizione. In questo modo riusciamo finalmente a spostare l'oggetto da una posizione all'altra.

Ecco come potrebbe apparire in codice:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Riesci a pensare a un motivo per cui ridisegnare il tuo eroe molte volte al secondo potrebbe comportare costi di prestazioni? Leggi di più su [alternative a questo schema](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Gestire eventi della tastiera

Gli eventi vengono gestiti collegando specifici eventi al codice. Gli eventi della tastiera vengono attivati sull'intera finestra, mentre gli eventi del mouse, come un `click`, possono essere collegati al clic su un elemento specifico. Utilizzeremo eventi della tastiera per tutto il progetto.

Per gestire un evento, è necessario utilizzare il metodo `addEventListener()` della finestra e fornire due parametri di input. Il primo parametro è il nome dell'evento, ad esempio `keyup`. Il secondo parametro è la funzione che dovrebbe essere invocata quando l'evento si verifica.

Ecco un esempio:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Per gli eventi della tastiera ci sono due proprietà sull'evento che puoi utilizzare per vedere quale tasto è stato premuto:

- `key`, questa è una rappresentazione in stringa del tasto premuto, ad esempio `ArrowUp`.
- `keyCode`, questa è una rappresentazione numerica, ad esempio `37`, corrisponde a `ArrowLeft`.

✅ La manipolazione degli eventi della tastiera è utile anche al di fuori dello sviluppo di giochi. Quali altri utilizzi riesci a immaginare per questa tecnica?

### Tasti speciali: una nota importante

Ci sono alcuni *tasti speciali* che influenzano la finestra. Ciò significa che se stai ascoltando un evento `keyup` e utilizzi questi tasti speciali per muovere il tuo eroe, si verificherà anche uno scorrimento orizzontale. Per questo motivo potresti voler *disattivare* questo comportamento predefinito del browser mentre sviluppi il tuo gioco. Ti serve un codice come questo:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

Il codice sopra garantirà che i tasti freccia e la barra spaziatrice abbiano il loro comportamento *predefinito* disattivato. Il meccanismo di *disattivazione* avviene quando chiamiamo `e.preventDefault()`.

## Movimento indotto dal gioco

Possiamo far muovere gli oggetti autonomamente utilizzando timer come le funzioni `setTimeout()` o `setInterval()` che aggiornano la posizione dell'oggetto a ogni intervallo di tempo. Ecco come potrebbe apparire:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Il ciclo del gioco

Il ciclo del gioco è un concetto che consiste essenzialmente in una funzione che viene invocata a intervalli regolari. Si chiama ciclo del gioco perché tutto ciò che dovrebbe essere visibile all'utente viene disegnato nel ciclo. Il ciclo del gioco utilizza tutti gli oggetti del gioco che fanno parte del gioco, disegnandoli tutti a meno che, per qualche motivo, non facciano più parte del gioco. Ad esempio, se un oggetto è un nemico colpito da un laser e esplode, non fa più parte del ciclo del gioco corrente (imparerai di più su questo nelle lezioni successive).

Ecco come potrebbe apparire un ciclo del gioco, espresso in codice:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

Il ciclo sopra viene invocato ogni `200` millisecondi per ridisegnare il canvas. Hai la possibilità di scegliere l'intervallo migliore che ha senso per il tuo gioco.

## Continuare il Gioco Spaziale

Prenderai il codice esistente e lo estenderai. Puoi iniziare con il codice che hai completato durante la parte I o utilizzare il codice in [Parte II - starter](../../../../6-space-game/3-moving-elements-around/your-work).

- **Muovere l'eroe**: aggiungerai codice per assicurarti di poter muovere l'eroe utilizzando i tasti freccia.
- **Muovere i nemici**: dovrai anche aggiungere codice per assicurarti che i nemici si muovano dall'alto verso il basso a una velocità definita.

## Passaggi consigliati

Trova i file che sono stati creati per te nella sottocartella `your-work`. Dovrebbe contenere quanto segue:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Avvia il tuo progetto nella cartella `your_work` digitando:

```bash
cd your-work
npm start
```

Il comando sopra avvierà un server HTTP all'indirizzo `http://localhost:5000`. Apri un browser e inserisci quell'indirizzo, al momento dovrebbe mostrare l'eroe e tutti i nemici; nulla si muove - ancora!

### Aggiungere codice

1. **Aggiungi oggetti dedicati** per `hero`, `enemy` e `game object`, che dovrebbero avere proprietà `x` e `y`. (Ricorda la parte su [Ereditarietà o composizione](../README.md)).

   *SUGGERIMENTO*: `game object` dovrebbe essere quello con `x` e `y` e la capacità di disegnarsi su un canvas.

   > suggerimento: inizia aggiungendo una nuova classe GameObject con il suo costruttore delineato come segue, e poi disegnalo sul canvas:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    Ora, estendi questo GameObject per creare Hero e Enemy.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Aggiungi gestori di eventi per i tasti** per gestire la navigazione (muovi l'eroe su/giù sinistra/destra).

   *RICORDA*: è un sistema cartesiano, in alto a sinistra è `0,0`. Ricorda anche di aggiungere codice per interrompere il *comportamento predefinito*.

   > suggerimento: crea la tua funzione onKeyDown e collegala alla finestra:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Controlla la console del tuo browser a questo punto e osserva i tasti premuti che vengono registrati.

3. **Implementa** il [modello Pub/Sub](../README.md), questo manterrà il tuo codice pulito mentre segui le parti rimanenti.

   Per fare quest'ultima parte, puoi:

   1. **Aggiungere un listener di eventi** alla finestra:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **Creare una classe EventEmitter** per pubblicare e sottoscrivere messaggi:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Aggiungere costanti** e configurare l'EventEmitter:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **Inizializzare il gioco**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **Configura il ciclo del gioco**

   Rifattorizza la funzione window.onload per inizializzare il gioco e configurare un ciclo del gioco con un buon intervallo. Aggiungerai anche un raggio laser:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Aggiungi codice** per muovere i nemici a un certo intervallo.

    Rifattorizza la funzione `createEnemies()` per creare i nemici e aggiungerli alla nuova classe gameObjects:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    e aggiungi una funzione `createHero()` per fare un processo simile per l'eroe.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    e infine, aggiungi una funzione `drawGameObjects()` per iniziare il disegno:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    I tuoi nemici dovrebbero iniziare ad avanzare verso la tua navicella spaziale!

---

## 🚀 Sfida

Come puoi vedere, il tuo codice può trasformarsi in 'codice spaghetti' quando inizi ad aggiungere funzioni, variabili e classi. Come puoi organizzare meglio il tuo codice in modo che sia più leggibile? Disegna un sistema per organizzare il tuo codice, anche se risiede ancora in un unico file.

## Quiz Post-Lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/34)

## Revisione & Studio Autonomo

Anche se stiamo scrivendo il nostro gioco senza utilizzare framework, ci sono molti framework basati su JavaScript per lo sviluppo di giochi con canvas. Prenditi del tempo per fare [letture su questi](https://github.com/collections/javascript-game-engines).

## Compito

[Commenta il tuo codice](assignment.md)

**Disclaimer (Avvertenza)**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.