<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-25T22:32:04+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "it"
}
-->
# Costruire un Gioco Spaziale Parte 1: Introduzione

![video](../../../../6-space-game/images/pewpew.gif)

## Quiz Pre-Lettura

[Quiz pre-lettura](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Ereditarietà e Composizione nello sviluppo di giochi

Nelle lezioni precedenti, non c'era molta necessità di preoccuparsi dell'architettura del design delle app che hai creato, poiché i progetti erano molto piccoli. Tuttavia, quando le tue applicazioni crescono in dimensioni e complessità, le decisioni architettoniche diventano una preoccupazione maggiore. Ci sono due approcci principali per creare applicazioni più grandi in JavaScript: *composizione* o *ereditarietà*. Entrambi hanno vantaggi e svantaggi, ma spieghiamoli nel contesto di un gioco.

✅ Uno dei libri di programmazione più famosi mai scritti riguarda i [design patterns](https://en.wikipedia.org/wiki/Design_Patterns).

In un gioco hai `oggetti di gioco`, che sono oggetti che esistono su uno schermo. Questo significa che hanno una posizione su un sistema di coordinate cartesiane, caratterizzata da una coordinata `x` e una `y`. Mentre sviluppi un gioco, noterai che tutti i tuoi oggetti di gioco hanno una proprietà standard, comune a ogni gioco che crei, ovvero elementi che sono:

- **basati sulla posizione** La maggior parte, se non tutti, gli elementi di gioco sono basati sulla posizione. Questo significa che hanno una posizione, un `x` e un `y`.
- **mobili** Questi sono oggetti che possono spostarsi in una nuova posizione. Tipicamente un eroe, un mostro o un NPC (un personaggio non giocante), ma non, ad esempio, un oggetto statico come un albero.
- **auto-distruttivi** Questi oggetti esistono solo per un periodo di tempo determinato prima di prepararsi per la cancellazione. Di solito questo è rappresentato da un booleano `dead` o `destroyed` che segnala al motore di gioco che questo oggetto non dovrebbe più essere renderizzato.
- **tempo di recupero** 'Tempo di recupero' è una proprietà tipica tra gli oggetti di breve durata. Un esempio tipico è un pezzo di testo o un effetto grafico come un'esplosione che dovrebbe essere visibile solo per pochi millisecondi.

✅ Pensa a un gioco come Pac-Man. Riesci a identificare i quattro tipi di oggetti elencati sopra in questo gioco?

### Espressione del comportamento

Tutto ciò che abbiamo descritto sopra è un comportamento che gli oggetti di gioco possono avere. Quindi, come lo codifichiamo? Possiamo esprimere questo comportamento come metodi associati a classi o oggetti.

**Classi**

L'idea è di utilizzare le `classi` in combinazione con l'`ereditarietà` per aggiungere un certo comportamento a una classe.

✅ L'ereditarietà è un concetto importante da comprendere. Scopri di più nell'[articolo di MDN sull'ereditarietà](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Espresso tramite codice, un oggetto di gioco può tipicamente apparire così:

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ Prenditi qualche minuto per immaginare un eroe di Pac-Man (Inky, Pinky o Blinky, ad esempio) e come sarebbe scritto in JavaScript.

**Composizione**

Un modo diverso di gestire l'ereditarietà degli oggetti è utilizzare la *Composizione*. In questo caso, gli oggetti esprimono il loro comportamento in questo modo:

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**Quale pattern dovrei usare?**

Sta a te decidere quale pattern scegliere. JavaScript supporta entrambi questi paradigmi.

--

Un altro pattern comune nello sviluppo di giochi affronta il problema di gestire l'esperienza utente e le prestazioni del gioco.

## Pattern Pub/Sub

✅ Pub/Sub sta per 'publish-subscribe'

Questo pattern affronta l'idea che le parti disparate della tua applicazione non dovrebbero conoscersi tra loro. Perché? Rende molto più facile capire cosa sta succedendo in generale se le varie parti sono separate. Inoltre, rende più semplice cambiare improvvisamente il comportamento se necessario. Come lo realizziamo? Lo facciamo stabilendo alcuni concetti:

- **messaggio**: Un messaggio è solitamente una stringa di testo accompagnata da un payload opzionale (un pezzo di dati che chiarisce di cosa tratta il messaggio). Un tipico messaggio in un gioco può essere `KEY_PRESSED_ENTER`.
- **publisher**: Questo elemento *pubblica* un messaggio e lo invia a tutti i subscriber.
- **subscriber**: Questo elemento *ascolta* messaggi specifici ed esegue un'azione come risultato della ricezione di questo messaggio, come sparare un laser.

L'implementazione è piuttosto piccola in termini di dimensioni, ma è un pattern molto potente. Ecco come può essere implementato:

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

Per utilizzare il codice sopra possiamo creare una piccola implementazione:

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Sopra colleghiamo un evento della tastiera, `ArrowLeft`, e inviamo il messaggio `HERO_MOVE_LEFT`. Ascoltiamo quel messaggio e spostiamo l'`eroe` di conseguenza. La forza di questo pattern è che il listener dell'evento e l'eroe non si conoscono tra loro. Puoi rimappare il tasto `ArrowLeft` al tasto `A`. Inoltre, sarebbe possibile fare qualcosa di completamente diverso su `ArrowLeft` apportando alcune modifiche alla funzione `on` dell'eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Man mano che le cose si complicano con la crescita del tuo gioco, questo pattern rimane invariato nella sua complessità e il tuo codice rimane pulito. È davvero consigliato adottare questo pattern.

---

## 🚀 Sfida

Pensa a come il pattern pub-sub può migliorare un gioco. Quali parti dovrebbero emettere eventi e come dovrebbe reagire il gioco a questi? Ora hai l'opportunità di essere creativo, pensando a un nuovo gioco e a come le sue parti potrebbero comportarsi.

## Quiz Post-Lettura

[Quiz post-lettura](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Revisione e Studio Autonomo

Scopri di più sul Pub/Sub [leggendo a riguardo](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Compito

[Progetta un gioco](assignment.md)

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.