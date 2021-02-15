# Costruire un Gioco Spaziale Parte 1: Introduzione

![video](../../images/pewpew.gif)

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/29?loc=it)

### Ereditarietà e Composizione nello sviluppo del gioco

Nelle lezioni precedenti, non c'era molto bisogno di preoccuparsi dell'architettura di progettazione delle app che sono state create, poiché i progetti erano di portata molto ridotta. Tuttavia, quando le dimensioni e l'ambito delle applicazioni aumentano, le decisioni sull'architettura diventano una preoccupazione maggiore. Esistono due approcci principali per creare applicazioni più grandi in JavaScript: *composizione* o *ereditarietà*. Ci sono pro e contro in entrambi, che verranno spiegiati dall'interno del contesto di un gioco.

✅ Uno dei libri di programmazione più famosi mai scritti ha a che fare con [i modelli di progettazione](https://it.wikipedia.org/wiki/Design_Patterns).

In un gioco ci sono `oggetti di gioco` che esistono su uno schermo. Ciò significa che hanno una posizione su un sistema di coordinate cartesiane, caratterizzati dall'avere una coordinata `x` e una `y` . Man mano che si sviluppa un gioco si noterà che tutti gli oggetti di gioco hanno una proprietà standard, comune a ogni gioco che si crea, ovvero elementi che sono:

- **basati sulla posizione** La maggior parte, se non tutti, gli elementi del gioco sono basati sulla posizione. Ciò significa che hanno una posizione, una `x` e una `y`.
- **mobili** Questi sono oggetti che possono spostarsi in una nuova posizione. Tipicamente un eroe, un mostro o un personaggio non giocante (NPC - Non Player Character), ma non, ad esempio, un oggetto statico come un albero.
- **autodistruggenti** Questi oggetti esistono solo per un determinato periodo di tempo prima che vengano contrassegnati per l'eliminazione. Di solito questo è rappresentato da un booleano `morto` o `distrutto` che segnala al motore di gioco che questo oggetto non dovrebbe più essere renderizzato.
- **raffreddamento** Il "raffreddamento" è una proprietà tipica tra gli oggetti di breve durata. Un classico esempio è un pezzo di testo o un effetto grafico come un'esplosione che dovrebbe essere visto solo per pochi millisecondi.

✅ Si pensi a un gioco come Pac-Man. Si riescono a identificare i quattro tipi di oggetti sopra elencati in questo gioco?

### Esprimere il comportamento

Quanto descritto sopra è il comportamento che possono avere gli oggetti di gioco. Allora come vanno codificati? Si può esprimere questo comportamento tramite metodi associati a classi o oggetti.

**Classi**

L'idea è di usare `classi` insieme all'`ereditarietà` per ottenere l'aggiunta di un determinato comportamento a una classe.

✅ L'ereditarietà è un concetto importante da comprendere. Ulteriori informazioni sull'[articolo di MDN sull'ereditarietà](https://developer.mozilla.org/it/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Espresso tramite codice, un oggetto di gioco può tipicamente avere questo aspetto:

```javascript

//Imposta la classe GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//Questa classe estenderà le proprietà di classe di GameObject
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//questo oggetto movibile può essere spostato nello schermo
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//classe specifica che estende la classe Movable, per poter approfittare di tutte le proprietà che eredita
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//questa classe, d'altro canto, eredita solo le proprietà di GameObject
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//un eroe può spostarsi...
const hero = new Hero();
hero.moveTo(5,5);

//ma un albero no
const tree = new Tree();
```

✅ Ci si prenda qualche minuto per rivedere un eroe di Pac-Man (Inky, Pinky o Blinky, per esempio) e come sarebbe scritto in JavaScript.

**Composizione**

Un modo diverso di gestire l'ereditarietà degli oggetti consiste nell'usare la *composizione*. Con questo sistema gli oggetti esprimono il loro comportamento in questo modo:

```javascript
//crea una costante gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...e una costante movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//poi la costante movableObject viene composta dalle costanti gameObject e movable
const movableObject = {...gameObject, ...movable};

//quindi si scrive una funzione per crear un nuovo eroe che eredita le proprietà di movableObject
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...e un oggetto statico che eredita solo le proprietà di gameObject
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//crea l'eroe e lo muove
const hero = createHero(10,10);
hero.moveTo(5,5);
//e crea un albero statico immobile
const tree = createStatic(0,0, 'Tree');
```

**Quale modello si dovrebbe usare?**

Dipende dallo sviluppatore quale modello scegliere. JavaScript supporta entrambi questi paradigmi.

--

Un altro modello comune nello sviluppo di giochi affronta il problema della gestione dell'esperienza utente e delle prestazioni del gioco.

## Modello pub/sub

✅ Pub/Sub sta per pubblica/sottoscrivi ('publish-subscribe')

Questo modello indirizza l'idea che parti disparate della propria applicazione non dovrebbero sapere l'una dell'altra. Perché? Rende molto più facile vedere cosa sta succedendo in generale se le varie parti sono separate. Inoltre, è più facile cambiare improvvisamente un comportamento se necessario. Come si realizza? Si fa stabilendo alcuni concetti:

- **messaggio**: un messaggio è solitamente una stringa di testo accompagnata da un payload opzionale (un dato che chiarisce di cosa tratta il messaggio). Un messaggio tipico in un gioco può essere `KEY_PRESSED_ENTER`.
- **publisher**: questo elemento *pubblica* un messaggio e lo invia a tutti i sottoscrittori.
- **subscriber**: questo elemento *ascolta* messaggi specifici e svolge alcune attività come risultato della ricezione di questo messaggio, come sparare con un laser.

L'implementazione è di dimensioni piuttosto ridotte ma è un modello molto potente. Ecco come può essere implementato:

```javascript
//imposta la classe EventEmitter che contiene i listener
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//quando un messaggio viene ricevuto, si fa gestire il suo payload al listener
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//quando un messaggio viene ricevuto, si invia a un listener con un payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

Per utilizzare il codice qui sopra si può creare un'implementazione molto piccola:

```javascript
//impostazione di una struttura di messaggio
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoca l'eventEmitter impostato sopra
const eventEmitter = new EventEmitter();
//imposta un eroe
const hero = createHero(0,0);
//fa in modo che eventEmitter sappia come monitorare i messages di pertinenza dell'eroe per spostarsi a sinistra, e agisce di conseguenza
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//imposta window per ascoltare un evento keyup, nello specifico se viene premuto freccia sinistra emette un messaggio che fa spostare l'eroe a sinistra
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Sopra si collega un evento della tastiera, `ArrowLeft` e si invia il messaggio `HERO_MOVE_LEFT` (spostamento a sinistra - n.d.t.). Questo messaggio viene recepito e come risultato si sposta l'eroe (`hero`). Il punto di forza di questo modello è che l'event listener e l'eroe non sanno nulla l'uno dell'altro. Si può rimappare `ArrowLeft` sul tasto `A`. Inoltre sarebbe possibile fare qualcosa di completamente diverso su `ArrowLeft` apportando alcune modifiche alla funzione `on` di eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Man mano che le cose diventano più complicate quando il gioco cresce, questo modello rimane lo stesso in termini di complessità e il proprio codice rimane pulito. Si consiglia vivamente di adottare questo modello.

---

## 🚀 Sfida

Pensare a come il modello pub/sub può migliorare un gioco. Quali parti dovrebbero emettere eventi e come dovrebbe reagire a questi il gioco? Ora si ha la possibilità di essere creativi, pensando a un nuovo gioco e a come potrebbero comportarsi le sue parti.

## Quiz Post-Lezione

[Quiz post-lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/30?loc=it)

## Revisione e Auto Apprendimento

Saperne di più su Pub/Sub [leggendo qui](https://docs.microsoft.com/it-it/azure/architecture/patterns/publisher-subscriber?WT.mc_id=academic-4621-cxa).

## Compito

[Produrre uno schizzo di un gioco](assignment.it.md)
