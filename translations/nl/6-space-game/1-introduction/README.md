<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-27T20:28:22+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtespel Deel 1: Introductie

![video](../../../../6-space-game/images/pewpew.gif)

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Overerving en Compositie in gameontwikkeling

In eerdere lessen hoefde je je niet veel zorgen te maken over de ontwerpstructuur van de apps die je bouwde, omdat de projecten erg klein van omvang waren. Maar naarmate je applicaties groter worden, worden architecturale beslissingen belangrijker. Er zijn twee belangrijke benaderingen om grotere applicaties in JavaScript te maken: *compositie* of *overerving*. Beide hebben voor- en nadelen, maar laten we ze uitleggen in de context van een spel.

✅ Een van de beroemdste programmeerboeken ooit geschreven gaat over [ontwerppatronen](https://en.wikipedia.org/wiki/Design_Patterns).

In een spel heb je `game objects`, objecten die op een scherm bestaan. Dit betekent dat ze een locatie hebben in een cartesiaans coördinatensysteem, gekarakteriseerd door een `x`- en `y`-coördinaat. Tijdens het ontwikkelen van een spel zul je merken dat al je game-objecten een standaard eigenschap hebben, gemeenschappelijk voor elk spel dat je maakt, namelijk elementen die:

- **locatie-gebaseerd** zijn. De meeste, zo niet alle, spelelementen zijn locatie-gebaseerd. Dit betekent dat ze een locatie hebben, een `x` en `y`.
- **beweegbaar** zijn. Dit zijn objecten die naar een nieuwe locatie kunnen bewegen. Dit is meestal een held, een monster of een NPC (non-player character), maar bijvoorbeeld niet een statisch object zoals een boom.
- **zelfvernietigend** zijn. Deze objecten bestaan slechts voor een bepaalde tijd voordat ze zichzelf klaarzetten voor verwijdering. Meestal wordt dit weergegeven door een `dead` of `destroyed` boolean die aangeeft aan de game-engine dat dit object niet langer gerenderd moet worden.
- **cool-down** hebben. 'Cool-down' is een typische eigenschap van kortlevende objecten. Een typisch voorbeeld is een stuk tekst of een grafisch effect zoals een explosie dat slechts enkele milliseconden zichtbaar moet zijn.

✅ Denk aan een spel zoals Pac-Man. Kun je de vier hierboven genoemde objecttypen in dit spel identificeren?

### Gedrag uitdrukken

Alles wat we hierboven beschreven, zijn gedragingen die game-objecten kunnen hebben. Maar hoe coderen we die? We kunnen dit gedrag uitdrukken als methoden die geassocieerd zijn met klassen of objecten.

**Klassen**

Het idee is om `klassen` te gebruiken in combinatie met `overerving` om bepaald gedrag aan een klasse toe te voegen.

✅ Overerving is een belangrijk concept om te begrijpen. Lees meer in [MDN's artikel over overerving](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

In code uitgedrukt kan een game-object er typisch zo uitzien:

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

✅ Neem een paar minuten om een Pac-Man-held (bijvoorbeeld Inky, Pinky of Blinky) opnieuw te bedenken en hoe deze in JavaScript zou worden geschreven.

**Compositie**

Een andere manier om objectovererving te behandelen is door gebruik te maken van *Compositie*. Objecten drukken hun gedrag dan als volgt uit:

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

**Welk patroon moet ik gebruiken?**

Het is aan jou welk patroon je kiest. JavaScript ondersteunt beide paradigma's.

--

Een ander patroon dat vaak voorkomt in gameontwikkeling, richt zich op het probleem van het beheren van de gebruikerservaring en prestaties van het spel.

## Pub/sub-patroon

✅ Pub/Sub staat voor 'publish-subscribe'

Dit patroon richt zich op het idee dat de verschillende delen van je applicatie niets van elkaar hoeven te weten. Waarom is dat? Het maakt het veel gemakkelijker om in het algemeen te begrijpen wat er gebeurt als de verschillende delen gescheiden zijn. Het maakt het ook eenvoudiger om gedrag plotseling te veranderen als dat nodig is. Hoe bereiken we dit? Door enkele concepten vast te stellen:

- **bericht**: Een bericht is meestal een tekststring, vergezeld van een optionele payload (een stukje data dat verduidelijkt waar het bericht over gaat). Een typisch bericht in een spel kan zijn `KEY_PRESSED_ENTER`.
- **publisher**: Dit element *publiceert* een bericht en stuurt het naar alle abonnees.
- **subscriber**: Dit element *luistert* naar specifieke berichten en voert een taak uit als gevolg van het ontvangen van dit bericht, zoals het afvuren van een laser.

De implementatie is vrij klein van omvang, maar het is een zeer krachtig patroon. Hier is hoe het kan worden geïmplementeerd:

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

Om de bovenstaande code te gebruiken, kunnen we een zeer kleine implementatie maken:

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

Hierboven verbinden we een toetsenbordgebeurtenis, `ArrowLeft`, en sturen het bericht `HERO_MOVE_LEFT`. We luisteren naar dat bericht en verplaatsen de `hero` als gevolg. De kracht van dit patroon is dat de event listener en de held niets van elkaar weten. Je kunt de `ArrowLeft` opnieuw toewijzen aan de `A`-toets. Daarnaast zou het mogelijk zijn om iets heel anders te doen bij `ArrowLeft` door een paar aanpassingen te maken aan de `on`-functie van de eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Naarmate je spel groeit en complexer wordt, blijft dit patroon even eenvoudig en blijft je code overzichtelijk. Het wordt sterk aanbevolen om dit patroon te gebruiken.

---

## 🚀 Uitdaging

Denk na over hoe het pub-sub-patroon een spel kan verbeteren. Welke onderdelen zouden gebeurtenissen moeten uitzenden, en hoe zou het spel daarop moeten reageren? Dit is je kans om creatief te worden en na te denken over een nieuw spel en hoe de onderdelen ervan zich zouden kunnen gedragen.

## Post-Lecture Quiz

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Review & Zelfstudie

Leer meer over Pub/Sub door [er meer over te lezen](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Opdracht

[Maak een mock-up van een spel](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.