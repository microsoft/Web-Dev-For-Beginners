<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-23T01:06:16+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtespel Deel 1: Introductie

![Animatie van een ruimtespel met gameplay](../../../../6-space-game/images/pewpew.gif)

Net zoals de missiecontrole van NASA meerdere systemen coördineert tijdens een lancering, gaan we een ruimtespel bouwen dat laat zien hoe verschillende onderdelen van een programma naadloos kunnen samenwerken. Terwijl je iets maakt dat je daadwerkelijk kunt spelen, leer je essentiële programmeerconcepten die toepasbaar zijn op elk softwareproject.

We gaan twee fundamentele benaderingen verkennen om code te organiseren: overerving en compositie. Dit zijn niet alleen academische concepten – het zijn dezelfde patronen die alles aandrijven, van videogames tot banksystemen. Daarnaast implementeren we een communicatiesysteem genaamd pub/sub, dat werkt zoals de communicatienetwerken in ruimtevaartuigen, waardoor verschillende componenten informatie kunnen delen zonder afhankelijkheden te creëren.

Aan het einde van deze serie begrijp je hoe je applicaties kunt bouwen die schaalbaar en flexibel zijn – of je nu games, webapplicaties of andere softwaresystemen ontwikkelt.

## Quiz voor de les

[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/29)

## Overerving en Compositie in Game Development

Naarmate projecten complexer worden, wordt het organiseren van code cruciaal. Wat begint als een eenvoudig script kan moeilijk te onderhouden worden zonder een goede structuur – net zoals de Apollo-missies zorgvuldige coördinatie vereisten tussen duizenden componenten.

We gaan twee fundamentele benaderingen voor het organiseren van code verkennen: overerving en compositie. Elk heeft zijn eigen voordelen, en door beide te begrijpen kun je de juiste aanpak kiezen voor verschillende situaties. We demonstreren deze concepten via ons ruimtespel, waarin helden, vijanden, power-ups en andere objecten efficiënt met elkaar moeten samenwerken.

✅ Een van de meest beroemde programmeerboeken ooit geschreven gaat over [design patterns](https://en.wikipedia.org/wiki/Design_Patterns).

In elk spel heb je `game objects` – de interactieve elementen die je spelwereld bevolken. Helden, vijanden, power-ups en visuele effecten zijn allemaal game-objecten. Elk bevindt zich op specifieke schermcoördinaten met behulp van `x`- en `y`-waarden, vergelijkbaar met het plotten van punten op een coördinatenvlak.

Ondanks hun visuele verschillen delen deze objecten vaak fundamenteel gedrag:

- **Ze bestaan ergens** – Elk object heeft x- en y-coördinaten zodat het spel weet waar het moet worden getekend
- **Veel kunnen bewegen** – Helden rennen, vijanden achtervolgen, kogels vliegen over het scherm
- **Ze hebben een levensduur** – Sommige blijven altijd, andere (zoals explosies) verschijnen kort en verdwijnen
- **Ze reageren op dingen** – Wanneer dingen botsen, worden power-ups verzameld, gezondheidsbalken bijgewerkt

✅ Denk aan een spel zoals Pac-Man. Kun je de vier hierboven genoemde objecttypen in dit spel identificeren?

### Gedrag uitdrukken via code

Nu je begrijpt welk gedrag game-objecten gemeen hebben, laten we onderzoeken hoe je dit gedrag kunt implementeren in JavaScript. Je kunt het gedrag van objecten uitdrukken via methoden die zijn gekoppeld aan klassen of individuele objecten, en er zijn verschillende benaderingen om uit te kiezen.

**De Klasse-gebaseerde Benadering**

Klassen en overerving bieden een gestructureerde aanpak om game-objecten te organiseren. Net zoals het taxonomische classificatiesysteem ontwikkeld door Carl Linnaeus, begin je met een basisklasse die gemeenschappelijke eigenschappen bevat, en vervolgens maak je gespecialiseerde klassen die deze basisprincipes erven terwijl ze specifieke mogelijkheden toevoegen.

✅ Overerving is een belangrijk concept om te begrijpen. Lees meer in [MDN's artikel over overerving](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Hier is hoe je game-objecten kunt implementeren met klassen en overerving:

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

**Laten we dit stap voor stap bekijken:**
- We maken een basis sjabloon die elk game-object kan gebruiken
- De constructor slaat op waar het object is (`x`, `y`) en wat voor soort ding het is
- Dit wordt de basis waarop al je game-objecten zullen voortbouwen

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

**In het bovenstaande hebben we:**
- **Uitgebreid** de GameObject-klasse om bewegingsfunctionaliteit toe te voegen
- **Aangeroepen** de ouderconstructor met behulp van `super()` om geërfde eigenschappen te initialiseren
- **Toegevoegd** een `moveTo()`-methode die de positie van het object bijwerkt

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

**Begrijp deze concepten:**
- **Creëert** gespecialiseerde objecttypen die geschikt gedrag erven
- **Toont** hoe overerving selectieve functietoewijzing mogelijk maakt
- **Laat zien** dat helden kunnen bewegen terwijl bomen stil blijven staan
- **Illustreert** hoe de klassenhiërarchie ongepaste acties voorkomt

✅ Neem een paar minuten de tijd om een Pac-Man held (Inky, Pinky of Blinky bijvoorbeeld) opnieuw te bedenken en hoe deze in JavaScript zou worden geschreven.

**De Compositiebenadering**

Compositie volgt een modulaire ontwerpfilosofie, vergelijkbaar met hoe ingenieurs ruimtevaartuigen ontwerpen met verwisselbare componenten. In plaats van te erven van een bovenliggende klasse, combineer je specifieke gedragingen om objecten te creëren met precies de functionaliteit die ze nodig hebben. Deze aanpak biedt flexibiliteit zonder rigide hiërarchische beperkingen.

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

**Dit doet deze code:**
- **Definieert** een basis `gameObject` met positie- en type-eigenschappen
- **Creëert** een apart `movable` gedrag-object met bewegingsfunctionaliteit
- **Scheidt** verantwoordelijkheden door positiegegevens en bewegingslogica onafhankelijk te houden

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

**In het bovenstaande hebben we:**
- **Gecombineerd** basisobjecteigenschappen met bewegingsgedrag met behulp van spread-syntaxis
- **Gecreëerd** fabrieksfuncties die aangepaste objecten retourneren
- **Mogelijk gemaakt** flexibele objectcreatie zonder rigide klassenhiërarchieën
- **Toegestaan** dat objecten precies het gedrag hebben dat ze nodig hebben

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Belangrijke punten om te onthouden:**
- **Combineren** van objecten door gedragingen te mixen in plaats van ze te erven
- **Biedt** meer flexibiliteit dan rigide overervingshiërarchieën
- **Maakt** het mogelijk dat objecten precies de functies hebben die ze nodig hebben
- **Gebruikt** moderne JavaScript spread-syntaxis voor schone objectcombinatie 
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

**Uitleg van wat hier gebeurt:**
- **Creëert** een centraal evenementbeheersysteem met een eenvoudige klasse
- **Slaat** luisteraars op in een object georganiseerd per berichttype
- **Registreert** nieuwe luisteraars met de `on()`-methode
- **Zend** berichten uit naar alle geïnteresseerde luisteraars met `emit()`
- **Ondersteunt** optionele gegevenspayloads om relevante informatie door te geven

### Alles samenvoegen: Een praktisch voorbeeld

Oké, laten we dit in actie zien! We bouwen een eenvoudig bewegingssysteem dat laat zien hoe schoon en flexibel pub/sub kan zijn:

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

**Dit doet deze code:**
- **Definieert** een constantenobject om typefouten in berichtnamen te voorkomen
- **Creëert** een event emitter-instantie om alle communicatie af te handelen
- **Initialiseert** een held-object op de startpositie

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

**In het bovenstaande hebben we:**
- **Geregistreerd** event listeners die reageren op bewegingsberichten
- **Bijgewerkt** de positie van de held op basis van de bewegingsrichting
- **Toegevoegd** console logging om de positieveranderingen van de held bij te houden
- **Gescheiden** de bewegingslogica van de invoerafhandeling

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

**Begrijp deze concepten:**
- **Verbindt** toetsenbordinvoer met game-evenementen zonder strakke koppeling
- **Maakt** het mogelijk dat het invoersysteem indirect communiceert met game-objecten
- **Staat toe** dat meerdere systemen reageren op dezelfde toetsenbordgebeurtenissen
- **Maakt** het eenvoudig om toetsbindingen te wijzigen of nieuwe invoermethoden toe te voegen

> 💡 **Pro Tip**: Het mooie van dit patroon is flexibiliteit! Je kunt eenvoudig geluidseffecten, schermschokken of deeltjeseffecten toevoegen door simpelweg meer event listeners toe te voegen – je hoeft de bestaande toetsenbord- of bewegingscode niet aan te passen.
> 
**Waarom je van deze aanpak zult houden:**
- Nieuwe functies toevoegen wordt super eenvoudig – luister gewoon naar de gebeurtenissen die je interesseren
- Meerdere dingen kunnen reageren op hetzelfde evenement zonder elkaar in de weg te zitten
- Testen wordt veel eenvoudiger omdat elk onderdeel onafhankelijk werkt
- Als er iets misgaat, weet je precies waar je moet zoeken

### Waarom Pub/Sub effectief schaalt

Het pub/sub-patroon behoudt eenvoud terwijl applicaties complexer worden. Of je nu tientallen vijanden beheert, dynamische UI-updates of geluidssystemen, het patroon kan omgaan met toenemende schaal zonder architecturale wijzigingen. Nieuwe functies integreren in het bestaande evenementen-systeem zonder de bestaande functionaliteit te beïnvloeden.

> ⚠️ **Veelgemaakte fout**: Maak niet te vroeg te veel specifieke berichttypen. Begin met brede categorieën en verfijn ze naarmate de behoeften van je spel duidelijker worden.
> 
**Beste praktijken om te volgen:**
- **Groeperen** van gerelateerde berichten in logische categorieën
- **Gebruik** beschrijvende namen die duidelijk aangeven wat er is gebeurd
- **Houd** berichtpayloads eenvoudig en gericht
- **Documenteer** je berichttypen voor samenwerking binnen het team

---

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Maak een eenvoudig game-object systeem met zowel overerving als het pub/sub-patroon. Je implementeert een basisgame waarin verschillende objecten via evenementen kunnen communiceren zonder direct van elkaar te weten.

**Opdracht:** Maak een JavaScript game-systeem met de volgende vereisten: 1) Maak een basis GameObject-klasse met x-, y-coördinaten en een type-eigenschap. 2) Maak een Hero-klasse die GameObject uitbreidt en kan bewegen. 3) Maak een Enemy-klasse die GameObject uitbreidt en de held kan achtervolgen. 4) Implementeer een EventEmitter-klasse voor het pub/sub-patroon. 5) Stel event listeners in zodat wanneer de held beweegt, nabije vijanden een 'HERO_MOVED'-evenement ontvangen en hun positie bijwerken om naar de held toe te bewegen. Voeg console.log-verklaringen toe om de communicatie tussen objecten te tonen.

Meer informatie over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) vind je hier.

## 🚀 Uitdaging

Denk na over hoe het pub-sub-patroon de game-architectuur kan verbeteren. Identificeer welke componenten evenementen zouden moeten uitzenden en hoe het systeem zou moeten reageren. Ontwerp een gameconcept en breng de communicatiepatronen tussen de componenten in kaart.

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/30)

## Review & Zelfstudie

Leer meer over Pub/Sub door [erover te lezen](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Opdracht

[Maak een mock-up van een game](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.