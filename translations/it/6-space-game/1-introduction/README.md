<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-22T23:40:18+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "it"
}
-->
# Costruire un Gioco Spaziale Parte 1: Introduzione

![Animazione del gioco spaziale che mostra il gameplay](../../../../6-space-game/images/pewpew.gif)

Proprio come il controllo missione della NASA coordina più sistemi durante un lancio spaziale, costruiremo un gioco spaziale che dimostra come le diverse parti di un programma possano lavorare insieme senza problemi. Creando qualcosa che puoi effettivamente giocare, imparerai concetti di programmazione essenziali che si applicano a qualsiasi progetto software.

Esploreremo due approcci fondamentali per organizzare il codice: ereditarietà e composizione. Questi non sono solo concetti accademici – sono gli stessi schemi che alimentano tutto, dai videogiochi ai sistemi bancari. Implementeremo anche un sistema di comunicazione chiamato pub/sub che funziona come le reti di comunicazione utilizzate nelle navicelle spaziali, permettendo ai diversi componenti di condividere informazioni senza creare dipendenze.

Alla fine di questa serie, comprenderai come costruire applicazioni che possono scalare e evolversi – che tu stia sviluppando giochi, applicazioni web o qualsiasi altro sistema software.

## Quiz Pre-Lettura

[Quiz pre-lettura](https://ff-quizzes.netlify.app/web/quiz/29)

## Ereditarietà e Composizione nello Sviluppo di Giochi

Man mano che i progetti crescono in complessità, l'organizzazione del codice diventa fondamentale. Ciò che inizia come uno script semplice può diventare difficile da gestire senza una struttura adeguata – proprio come le missioni Apollo richiedevano un'attenta coordinazione tra migliaia di componenti.

Esploreremo due approcci fondamentali per organizzare il codice: ereditarietà e composizione. Ognuno ha vantaggi distinti, e comprendere entrambi ti aiuta a scegliere l'approccio giusto per situazioni diverse. Dimostreremo questi concetti attraverso il nostro gioco spaziale, dove eroi, nemici, potenziamenti e altri oggetti devono interagire in modo efficiente.

✅ Uno dei libri di programmazione più famosi mai scritti riguarda i [design patterns](https://en.wikipedia.org/wiki/Design_Patterns).

In ogni gioco, ci sono `oggetti di gioco` – gli elementi interattivi che popolano il mondo del gioco. Eroi, nemici, potenziamenti ed effetti visivi sono tutti oggetti di gioco. Ognuno esiste in specifiche coordinate dello schermo usando valori `x` e `y`, simili al tracciamento di punti su un piano cartesiano.

Nonostante le loro differenze visive, questi oggetti spesso condividono comportamenti fondamentali:

- **Esistono da qualche parte** – Ogni oggetto ha coordinate x e y in modo che il gioco sappia dove disegnarlo
- **Molti possono muoversi** – Gli eroi corrono, i nemici inseguono, i proiettili volano attraverso lo schermo
- **Hanno una durata** – Alcuni rimangono per sempre, altri (come le esplosioni) appaiono brevemente e scompaiono
- **Reagiscono agli eventi** – Quando le cose collidono, i potenziamenti vengono raccolti, le barre della salute si aggiornano

✅ Pensa a un gioco come Pac-Man. Riesci a identificare i quattro tipi di oggetti elencati sopra in questo gioco?

### Esprimere il Comportamento Attraverso il Codice

Ora che hai compreso i comportamenti comuni che gli oggetti di gioco condividono, esploriamo come implementare questi comportamenti in JavaScript. Puoi esprimere il comportamento degli oggetti attraverso metodi associati a classi o oggetti individuali, e ci sono diversi approcci tra cui scegliere.

**L'Approccio Basato su Classi**

Le classi e l'ereditarietà forniscono un approccio strutturato per organizzare gli oggetti di gioco. Come il sistema di classificazione tassonomica sviluppato da Carl Linneo, si parte da una classe base contenente proprietà comuni, per poi creare classi specializzate che ereditano questi fondamenti aggiungendo capacità specifiche.

✅ L'ereditarietà è un concetto importante da comprendere. Scopri di più nell'[articolo di MDN sull'ereditarietà](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Ecco come puoi implementare gli oggetti di gioco usando classi e ereditarietà:

```javascript
// Step 1: Create the base GameObject class
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}
```

**Analizziamo questo passo per passo:**
- Stiamo creando un modello di base che ogni oggetto di gioco può utilizzare
- Il costruttore salva dove si trova l'oggetto (`x`, `y`) e di che tipo è
- Questo diventa la base su cui tutti gli oggetti di gioco si costruiranno

```javascript
// Step 2: Add movement capability through inheritance
class Movable extends GameObject {
  constructor(x, y, type) {
    super(x, y, type); // Call parent constructor
  }

  // Add the ability to move to a new position
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

**In questo caso, abbiamo:**
- **Esteso** la classe GameObject per aggiungere funzionalità di movimento
- **Chiamato** il costruttore del genitore usando `super()` per inizializzare le proprietà ereditate
- **Aggiunto** un metodo `moveTo()` che aggiorna la posizione dell'oggetto

```javascript
// Step 3: Create specific game object types
class Hero extends Movable {
  constructor(x, y) {
    super(x, y, 'Hero'); // Set type automatically
  }
}

class Tree extends GameObject {
  constructor(x, y) {
    super(x, y, 'Tree'); // Trees don't need movement
  }
}

// Step 4: Use your game objects
const hero = new Hero(0, 0);
hero.moveTo(5, 5); // Hero can move!

const tree = new Tree(10, 15);
// tree.moveTo() would cause an error - trees can't move
```

**Comprendere questi concetti:**
- **Crea** tipi di oggetti specializzati che ereditano comportamenti appropriati
- **Dimostra** come l'ereditarietà consente l'inclusione selettiva delle funzionalità
- **Mostra** che gli eroi possono muoversi mentre gli alberi rimangono fermi
- **Illustra** come la gerarchia delle classi previene azioni inappropriate

✅ Prenditi qualche minuto per immaginare un eroe di Pac-Man (Inky, Pinky o Blinky, per esempio) e come potrebbe essere scritto in JavaScript.

**L'Approccio della Composizione**

La composizione segue una filosofia di design modulare, simile a come gli ingegneri progettano le navicelle spaziali con componenti intercambiabili. Invece di ereditare da una classe genitore, si combinano comportamenti specifici per creare oggetti con esattamente le funzionalità di cui hanno bisogno. Questo approccio offre flessibilità senza vincoli gerarchici rigidi.

```javascript
// Step 1: Create base behavior objects
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
};
```

**Ecco cosa fa questo codice:**
- **Definisce** un oggetto base `gameObject` con proprietà di posizione e tipo
- **Crea** un oggetto comportamento separato `movable` con funzionalità di movimento
- **Separa** le responsabilità mantenendo indipendenti i dati di posizione e la logica di movimento

```javascript
// Step 2: Compose objects by combining behaviors
const movableObject = { ...gameObject, ...movable };

// Step 3: Create factory functions for different object types
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  };
}

function createStatic(x, y, type) {
  return {
    ...gameObject,
    x,
    y,
    type
  };
}
```

**In questo caso, abbiamo:**
- **Combinato** le proprietà dell'oggetto base con il comportamento di movimento usando la sintassi spread
- **Creato** funzioni di fabbrica che restituiscono oggetti personalizzati
- **Abilitato** la creazione flessibile di oggetti senza gerarchie rigide di classi
- **Permesso** agli oggetti di avere esattamente i comportamenti di cui hanno bisogno

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Punti chiave da ricordare:**
- **Compone** gli oggetti mescolando i comportamenti invece di ereditarli
- **Fornisce** maggiore flessibilità rispetto alle gerarchie rigide di ereditarietà
- **Permette** agli oggetti di avere esattamente le funzionalità di cui hanno bisogno
- **Utilizza** la moderna sintassi spread di JavaScript per una combinazione pulita degli oggetti 
```

**Which Pattern Should You Choose?**

> 💡 **Pro Tip**: Both patterns have their place in modern JavaScript development. Classes work well for clearly defined hierarchies, while composition shines when you need maximum flexibility.
> 
**Here's when to use each approach:**
- **Choose** inheritance when you have clear "is-a" relationships (a Hero *is-a* Movable object)
- **Select** composition when you need "has-a" relationships (a Hero *has* movement abilities)
- **Consider** your team's preferences and project requirements
- **Remember** that you can mix both approaches in the same application

## Communication Patterns: The Pub/Sub System

As applications grow complex, managing communication between components becomes challenging. The publish-subscribe pattern (pub/sub) solves this problem using principles similar to radio broadcasting – one transmitter can reach multiple receivers without knowing who's listening.

Consider what happens when a hero takes damage: the health bar updates, sound effects play, visual feedback appears. Rather than coupling the hero object directly to these systems, pub/sub allows the hero to broadcast a "damage taken" message. Any system that needs to respond can subscribe to this message type and react accordingly.

✅ **Pub/Sub** stands for 'publish-subscribe'

### Understanding the Pub/Sub Architecture

The pub/sub pattern keeps different parts of your application loosely coupled, meaning they can work together without being directly dependent on each other. This separation makes your code more maintainable, testable, and flexible to changes.

**The key players in pub/sub:**
- **Messages** – Simple text labels like `'PLAYER_SCORED'` that describe what happened (plus any extra info)
- **Publishers** – The objects that shout out "Something happened!" to anyone who's listening
- **Subscribers** – The objects that say "I care about that event" and react when it happens
- **Event System** – The middleman that makes sure messages get to the right listeners

### Building an Event System

Let's create a simple but powerful event system that demonstrates these concepts:

```javascript
// Step 1: Create the EventEmitter class
class EventEmitter {
  constructor() {
    this.listeners = {}; // Store all event listeners
  }
  
  // Register a listener for a specific message type
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
  
  // Send a message to all registered listeners
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(listener => {
        listener(message, payload);
      });
    }
  }
}
```

**Analisi di ciò che accade qui:**
- **Crea** un sistema centrale di gestione degli eventi usando una semplice classe
- **Memorizza** i listener in un oggetto organizzato per tipo di messaggio
- **Registra** nuovi listener usando il metodo `on()`
- **Trasmette** messaggi a tutti i listener interessati usando `emit()`
- **Supporta** payload di dati opzionali per il passaggio di informazioni rilevanti

### Mettere Tutto Insieme: Un Esempio Pratico

Bene, vediamo tutto questo in azione! Costruiremo un semplice sistema di movimento che mostra quanto possa essere pulito e flessibile il pub/sub:

```javascript
// Step 1: Define your message types
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT',
  HERO_MOVE_RIGHT: 'HERO_MOVE_RIGHT',
  ENEMY_SPOTTED: 'ENEMY_SPOTTED'
};

// Step 2: Create your event system and game objects
const eventEmitter = new EventEmitter();
const hero = createHero(0, 0);
```

**Ecco cosa fa questo codice:**
- **Definisce** un oggetto di costanti per prevenire errori di battitura nei nomi dei messaggi
- **Crea** un'istanza di emettitore di eventi per gestire tutta la comunicazione
- **Inizializza** un oggetto eroe nella posizione di partenza

```javascript
// Step 3: Set up event listeners (subscribers)
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.moveTo(hero.x - 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});

eventEmitter.on(Messages.HERO_MOVE_RIGHT, () => {
  hero.moveTo(hero.x + 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});
```

**In questo caso, abbiamo:**
- **Registrato** listener di eventi che rispondono ai messaggi di movimento
- **Aggiornato** la posizione dell'eroe in base alla direzione del movimento
- **Aggiunto** registri di console per tracciare i cambiamenti di posizione dell'eroe
- **Separato** la logica di movimento dalla gestione degli input

```javascript
// Step 4: Connect keyboard input to events (publishers)
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowLeft':
      eventEmitter.emit(Messages.HERO_MOVE_LEFT);
      break;
    case 'ArrowRight':
      eventEmitter.emit(Messages.HERO_MOVE_RIGHT);
      break;
  }
});
```

**Comprendere questi concetti:**
- **Collega** l'input da tastiera agli eventi di gioco senza accoppiamento stretto
- **Abilita** il sistema di input a comunicare indirettamente con gli oggetti di gioco
- **Permette** a più sistemi di rispondere agli stessi eventi della tastiera
- **Rende** facile cambiare i tasti di controllo o aggiungere nuovi metodi di input

> 💡 **Consiglio Pro**: La bellezza di questo schema è la flessibilità! Puoi facilmente aggiungere effetti sonori, tremori dello schermo o effetti particellari semplicemente aggiungendo più listener di eventi – senza bisogno di modificare il codice esistente per la tastiera o il movimento.
> 
**Ecco perché amerai questo approccio:**
- Aggiungere nuove funzionalità diventa molto semplice – basta ascoltare gli eventi che ti interessano
- Più cose possono reagire allo stesso evento senza interferire tra loro
- Testare diventa molto più semplice perché ogni pezzo funziona indipendentemente
- Quando qualcosa si rompe, sai esattamente dove cercare

### Perché il Pub/Sub Scala Efficacemente

Il pattern pub/sub mantiene la semplicità man mano che le applicazioni crescono in complessità. Che si tratti di gestire dozzine di nemici, aggiornamenti dinamici dell'interfaccia utente o sistemi sonori, il pattern gestisce l'aumento della scala senza modifiche architetturali. Le nuove funzionalità si integrano nel sistema di eventi esistente senza influenzare la funzionalità già stabilita.

> ⚠️ **Errore Comune**: Non creare troppi tipi di messaggi specifici all'inizio. Inizia con categorie ampie e affinale man mano che le esigenze del tuo gioco diventano più chiare.
> 
**Migliori pratiche da seguire:**
- **Raggruppa** i messaggi correlati in categorie logiche
- **Usa** nomi descrittivi che indicano chiaramente cosa è successo
- **Mantieni** i payload dei messaggi semplici e mirati
- **Documenta** i tipi di messaggi per la collaborazione del team

---

## Sfida GitHub Copilot Agent 🚀

Usa la modalità Agent per completare la seguente sfida:

**Descrizione:** Crea un semplice sistema di oggetti di gioco utilizzando sia l'ereditarietà che il pattern pub/sub. Implementerai un gioco di base in cui diversi oggetti possono comunicare attraverso eventi senza conoscersi direttamente.

**Prompt:** Crea un sistema di gioco in JavaScript con i seguenti requisiti: 1) Crea una classe base GameObject con coordinate x, y e una proprietà di tipo. 2) Crea una classe Hero che estende GameObject e può muoversi. 3) Crea una classe Enemy che estende GameObject e può inseguire l'eroe. 4) Implementa una classe EventEmitter per il pattern pub/sub. 5) Configura i listener di eventi in modo che quando l'eroe si muove, i nemici vicini ricevano un evento 'HERO_MOVED' e aggiornino la loro posizione per avvicinarsi all'eroe. Includi dichiarazioni console.log per mostrare la comunicazione tra gli oggetti.

Scopri di più sulla [modalità agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## 🚀 Sfida

Considera come il pattern pub-sub può migliorare l'architettura del gioco. Identifica quali componenti dovrebbero emettere eventi e come il sistema dovrebbe rispondere. Progetta un concetto di gioco e mappa i modelli di comunicazione tra i suoi componenti.

## Quiz Post-Lettura

[Quiz post-lettura](https://ff-quizzes.netlify.app/web/quiz/30)

## Revisione & Studio Autonomo

Scopri di più sul Pub/Sub [leggendo a riguardo](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Compito

[Progetta un gioco](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.