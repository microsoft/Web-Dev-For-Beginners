# Costruire un Gioco Spaziale parte 3: Aggiungere il Movimento

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/33?loc=it)

I giochi non sono molto divertenti finché non si hanno alieni che scorazzano per lo schermo! In questo gioco, si utilizzeranno due tipi di movimenti:

- **Movimento tastiera/mouse**: quando l'utente interagisce con la tastiera o il mouse per spostare un oggetto sullo schermo.
- **Movimento indotto dal gioco**: quando il gioco sposta un oggetto con un certo intervallo di tempo.

Quindi come si spostano le cose su uno schermo? Dipende tutto dalle coordinate cartesiane: si cambia la posizione (x, y) di un oggetto, poi si ridisegna lo schermo.

In genere sono necessari i seguenti passaggi per eseguire il *movimento* su uno schermo:

1. **Impostare una nuova posizione** per un oggetto; questo è necessario per percepire l'oggetto come se si fosse spostato.
2. **Cancellare lo schermo, lo** schermo deve essere cancellato tra un disegno e un altro. Si può cancellarlo disegnando un rettangolo che viene riempito con un colore di sfondo.
3. **Ridisegnare l'oggetto** in una nuova posizione. In questo modo si può finalmente spostare l'oggetto da una posizione all'altra.

Ecco come può apparire nel codice:

```javascript
//imposta la posizione dell'eroe
hero.x += 5;
// pulisce il rettangolo che ospita l'eroe
ctx.clearRect(0, 0, canvas.width, canvas.height);
// ridisegna lo sfondo del gioco e l'eroe
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Si riesce a pensare a un motivo per cui ridisegnare il proprio eroe con molti fotogrammi al secondo potrebbe far aumentare i costi delle prestazioni? Leggere le [alternative a questo modello](https://www.html5rocks.com/en/tutorials/canvas/performance/).

## Gestire eventi da tastiera

Gli eventi si gestiscono allegando eventi specifici al codice. Gli eventi della tastiera vengono attivati sull'intera finestra mentre gli eventi del mouse come un `clic` possono essere collegati al clic su un elemento specifico. Si useranno gli eventi della tastiera durante questo progetto.

Per gestire un evento è necessario utilizzare il metodo `addEventListener()` dell'oggetto window e fornirgli due parametri di input. Il primo parametro è il nome dell'evento, ad esempio `keyup`. Il secondo parametro è la funzione che dovrebbe essere invocata come risultato dell'evento in corso.

Ecco un esempio:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = rappresentazione stringa del tasto
  if (evt.key === 'ArrowUp') {
    // fa qualcosa
  }
})
```

Per gli eventi da tastiera ci sono due proprietà sull'evento che si possono usare usare per vedere quale tasto è stato premuto:

- `key`, questa è una rappresentazione di stringa del tasto premuto, ad esempio `ArrowUp`
- `keyCode`, questa è una rappresentazione numerica, ad esempio `37`, corrisponde a `ArrowLeft`.

✅ La manipolazione degli eventi da tastiera è utile al di fuori dello sviluppo del gioco. Quali altri usi possono venire in mente per questa tecnica?

### Tasti speciali: un avvertimento

Ci sono alcuni tasti *speciali* che influenzano la finestra. Ciò significa che se si sta ascoltando un evento `keyup` e si usano questi tasti speciali per muovere l'eroe, verrà eseguito anche lo scorrimento orizzontale. Per questo motivo si potrebbe  voler *disattivare* questo comportamento del browser integrato mentre si sviluppa il gioco. Serve un codice come questo:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Tasti freccia
    case 32:
      e.preventDefault();
      break; // Barra spazio
    default:
      break; // non bloccare altri tasti
  }
};

window.addEventListener('keydown', onKeyDown);
```

Il codice precedente assicurerà che i tasti freccia e la barra spaziatrice abbiano il loro comportamento *predefinito* disattivato. Il meccanismo *di disattivazione* si verifica quando si chiama `e.preventDefault()`.

## Movimento indotto dal gioco

E' possibile far muovere le cose da sole utilizzando timer come la funzione `setTimeout()` o `setInterval()` che aggiornano la posizione dell'oggetto a ogni tick o intervallo di tempo. Ecco come può apparire:

```javascript
let id = setInterval(() => {
  //sposta il nemico sull'asse y
  enemy.y += 10;
})
```

## Il ciclo di gioco

Il ciclo di gioco è un concetto che è essenzialmente una funzione che viene invocata a intervalli regolari. Si chiama ciclo di gioco poiché tutto ciò che dovrebbe essere visibile all'utente viene disegnato nel ciclo. Il ciclo di gioco utilizza tutti gli oggetti che fanno parte del gioco, disegnandoli tutti a meno che per qualche motivo non debbano più far parte del gioco. Ad esempio, se un oggetto è un nemico che è stato colpito da un laser ed esplode, non fa più parte del ciclo di gioco corrente (maggiori informazioni nelle lezioni successive).

Ecco come può apparire tipicamente un ciclo di gioco, espresso in codice:

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

Il ciclo precedente viene richiamato ogni `200` millisecondi per ridisegnare il canvas. Si ha la possibilità di scegliere l'intervallo migliore che abbia senso per il proprio gioco.

## Continuare il Gioco Spaziale

Si prenderà il codice esistente per estenderlo. Si inizia con il codice che si è completato durante la parte I o si usa il codice nella [parte II-starter](../your-work).

- **Muovere l'eroe**: si aggiungerà un codice per assicurarsi di poter muovere l'eroe usando i tasti freccia.
- **Muovere i nemici**: si dovrà anche aggiungere del codice per assicurarsi che i nemici si muovano dall'alto verso il basso a una determinata velocità.

## Passaggi consigliati

Individuare i file che già sono stati creati nella sottocartella `your-work` Dovrebbe contenere quanto segue:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Si fa partire il progetto nella cartella `your_work` digitando:

```bash
cd your-work
npm start
```

Quanto sopra avvierà un server HTTP all'indirizzo `http://localhost:5000`. Aprire un browser e inserire quell'indirizzo, in questo momento dovrebbe rendere l'eroe e tutti i nemici; niente si muove - ancora!

### Aggiungere codice

1. **Aggiungere oggetti dedicati** per `eroe`, `nemico` e `oggetto di gioco`, dovrebbero avere proprietà `x` e `y` . (Ricorda la parte su [ereditarietà o composizione](../../1-introduction/translations/README.it.md).

   *SUGGERIMENTO* l'`oggetto di gioco` (GameObject) dovrebbe essere quello con `x` e `y` e la capacità di disegnare se stesso sul canvas.

   > suggerimento: iniziare aggiungendo una nuova classe GameObject con il suo costruttore delineato come di seguito, quindi disegnarlo sul canvas:

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

   Ora, si estende questo GameObject per creare eroe (classe Hero) e nemico (clsse Enemy).

   ```javascript
   class Hero extends GameObject {
     constructor(x, y) {
       ...servono x, y, tipo, e velocità
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

2. **Aggiungere gestori di eventi di tastiera** per gestire la navigazione con i tasti (spostare l'eroe su/giù, sinistra/destra)

   *RICORDARE* che è un sistema cartesiano, la posizione in alto a sinistra è `0,0`. Ricordare anche di aggiungere il codice per interrompere *il comportamento predefinito*

   > suggerimento: creare la funzione onKeyDown e attaccarla all'oggetto window:

   ```javascript
    let onKeyDown = function (e) {
   	      console.log(e.keyCode);
   	        ...aggiungere il codice dalla lezione più sopra per fermare il comportamento predefinito
   	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```

   Controllare la console del browser a questo punto e osservare le sequenze di tasti che vengono registrate.

3. **Implementare** il [modello Pub/Sub](../../1-introduction/translations/README.it.md), questo manterrà il codice pulito mentre si seguono le parti rimanenti.

   Per fare quest'ultima parte, si può:

   1. **Aggiungere un event listener** all'oggetto window:

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

   1. **Creare una classe EventEmitter** per pubblicare e sottoscrivere i messaggi:

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

   1. **Aggiungere costanti** e impostare EventEmitter:

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

1. **Impostare il ciclo di gioco**

   Rifattorizzare la funzione window.onload per inizializzare il gioco e impostare un ciclo di gioco su un buon intervallo. Aggiungere anche un raggio laser:

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

5. **Aggiungere il codice** per spostare i nemici a un certo intervallo

   Rifattorizzare la funzione `createEnemies()` per creare i nemici e inserirli nella nuova classe gameObjects:

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

   e aggiungere una `funzione createHero()` per eseguire un processo simile per l'eroe.

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

   infine, aggiungere una funzione `drawGameObjects()` per avviare il disegno:

   ```javascript
   function drawGameObjects(ctx) {
     gameObjects.forEach(go => go.draw(ctx));
   }
   ```

   I nemici dovrebbero iniziare ad avanzare verso l'astronave dell'eroe!

---

## 🚀 Sfida

Come si può vedere, il proprio codice può trasformarsi in ["spaghetti code"](https://it.wikipedia.org/wiki/Spaghetti_code) quando si inizia ad aggiungere funzioni, variabili e classi. Come si puo organizzare meglio il codice in modo che sia più leggibile? Disegnare un sistema per organizzare il proprio codice, anche se risiede ancora in un file.

## Quiz Post-Lezione

[Quiz post-lezione](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/34?loc=it)

## Revisione e Auto Apprendimento

Mentre questo gioco viene scritto senza utilizzare infrastutture Javascript (framework), ci sono molti framework canvas basati su JavaScript per lo sviluppo di giochi. Ci si prenda un po' di tempo per [leggere qualcosa su questi](https://github.com/collections/javascript-game-engines).

## Compito

[Commentare il proprio codice](assignment.it.md)
