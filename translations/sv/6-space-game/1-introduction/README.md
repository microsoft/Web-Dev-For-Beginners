<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-23T21:48:34+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "sv"
}
-->
# Bygg ett rymdspel Del 1: Introduktion

![Animering av rymdspel som visar spelupplevelse](../../../../6-space-game/images/pewpew.gif)

Precis som NASAs kontrollcenter koordinerar flera system under en rymduppskjutning, ska vi bygga ett rymdspel som visar hur olika delar av ett program kan fungera smidigt tillsammans. Genom att skapa något du faktiskt kan spela, kommer du att lära dig viktiga programmeringskoncept som gäller för alla mjukvaruprojekt.

Vi kommer att utforska två grundläggande sätt att organisera kod: arv och komposition. Dessa är inte bara akademiska begrepp – de är samma mönster som driver allt från videospel till banksystem. Vi kommer också att implementera ett kommunikationssystem kallat pub/sub som fungerar som kommunikationsnätverk som används i rymdfarkoster, vilket gör det möjligt för olika komponenter att dela information utan att skapa beroenden.

I slutet av denna serie kommer du att förstå hur man bygger applikationer som kan skalas och utvecklas – oavsett om du utvecklar spel, webbapplikationer eller något annat mjukvarusystem.

## Quiz före föreläsningen

[Quiz före föreläsningen](https://ff-quizzes.netlify.app/web/quiz/29)

## Arv och komposition inom spelutveckling

När projekt växer i komplexitet blir kodorganisation avgörande. Det som börjar som ett enkelt skript kan bli svårt att underhålla utan rätt struktur – ungefär som hur Apollo-missionerna krävde noggrann samordning mellan tusentals komponenter.

Vi kommer att utforska två grundläggande sätt att organisera kod: arv och komposition. Varje har sina tydliga fördelar, och att förstå båda hjälper dig att välja rätt metod för olika situationer. Vi kommer att demonstrera dessa koncept genom vårt rymdspel, där hjältar, fiender, power-ups och andra objekt måste interagera effektivt.

✅ En av de mest kända programmeringsböckerna som någonsin skrivits handlar om [designmönster](https://en.wikipedia.org/wiki/Design_Patterns).

I vilket spel som helst har du `spelobjekt` – de interaktiva elementen som fyller din spelvärld. Hjältar, fiender, power-ups och visuella effekter är alla spelobjekt. Varje existerar på specifika skärmkoordinater med hjälp av `x` och `y`-värden, liknande att plotta punkter på ett koordinatplan.

Trots sina visuella skillnader delar dessa objekt ofta grundläggande beteenden:

- **De existerar någonstans** – Varje objekt har x- och y-koordinater så att spelet vet var det ska ritas
- **Många kan röra sig** – Hjältar springer, fiender jagar, kulor flyger över skärmen
- **De har en livslängd** – Vissa stannar kvar för alltid, andra (som explosioner) dyker upp kort och försvinner
- **De reagerar på saker** – När saker kolliderar, samlas power-ups in, hälsomätare uppdateras

✅ Tänk på ett spel som Pac-Man. Kan du identifiera de fyra objekttyperna som nämns ovan i detta spel?

### Att uttrycka beteende genom kod

Nu när du förstår de gemensamma beteenden som spelobjekt delar, låt oss utforska hur man implementerar dessa beteenden i JavaScript. Du kan uttrycka objektbeteende genom metoder som är kopplade till antingen klasser eller individuella objekt, och det finns flera tillvägagångssätt att välja mellan.

**Den klassbaserade metoden**

Klasser och arv ger ett strukturerat sätt att organisera spelobjekt. Precis som det taxonomiska klassificeringssystemet utvecklat av Carl von Linné, börjar du med en basklass som innehåller gemensamma egenskaper, och sedan skapar du specialiserade klasser som ärver dessa grunder samtidigt som de lägger till specifika funktioner.

✅ Arv är ett viktigt koncept att förstå. Läs mer i [MDNs artikel om arv](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Så här kan du implementera spelobjekt med hjälp av klasser och arv:

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

**Låt oss bryta ner detta steg för steg:**
- Vi skapar en grundläggande mall som varje spelobjekt kan använda
- Konstruktoren sparar var objektet är (`x`, `y`) och vilken typ av sak det är
- Detta blir grunden som alla dina spelobjekt kommer att bygga på

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

**I ovanstående har vi:**
- **Utökat** GameObject-klassen för att lägga till rörelsefunktionalitet
- **Anropat** föräldrakonstruktorn med `super()` för att initiera ärvda egenskaper
- **Lagt till** en `moveTo()`-metod som uppdaterar objektets position

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

**Att förstå dessa koncept:**
- **Skapar** specialiserade objekttyper som ärver lämpliga beteenden
- **Demonstrerar** hur arv möjliggör selektiv funktionalitet
- **Visar** att hjältar kan röra sig medan träd förblir stillastående
- **Illustrerar** hur klasshierarkin förhindrar olämpliga handlingar

✅ Ta några minuter och föreställ dig en Pac-Man-hjälte (Inky, Pinky eller Blinky, till exempel) och hur den skulle skrivas i JavaScript.

**Kompositionsmetoden**

Komposition följer en modulär designfilosofi, liknande hur ingenjörer designar rymdfarkoster med utbytbara komponenter. Istället för att ärva från en föräldraklass, kombinerar du specifika beteenden för att skapa objekt med exakt den funktionalitet de behöver. Denna metod erbjuder flexibilitet utan stela hierarkiska begränsningar.

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

**Här är vad denna kod gör:**
- **Definierar** ett grundläggande `gameObject` med position och typ-egenskaper
- **Skapar** ett separat `movable` beteendeobjekt med rörelsefunktionalitet
- **Separerar** ansvar genom att hålla positionsdata och rörelselogik oberoende

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

**I ovanstående har vi:**
- **Kombinerat** grundläggande objekt-egenskaper med rörelsebeteende med hjälp av spridningssyntax
- **Skapat** fabriksfunktioner som returnerar anpassade objekt
- **Möjliggjort** flexibel objektgenerering utan stela klasshierarkier
- **Tillåtit** objekt att ha exakt de beteenden de behöver

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Viktiga punkter att komma ihåg:**
- **Komponerar** objekt genom att blanda beteenden istället för att ärva dem
- **Ger** mer flexibilitet än stela arvshierarkier
- **Tillåter** objekt att ha exakt de funktioner de behöver
- **Använder** modern JavaScript-spridningssyntax för ren objektkombination 
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

**Bryter ner vad som händer här:**
- **Skapar** ett centralt händelsehanteringssystem med hjälp av en enkel klass
- **Lagrar** lyssnare i ett objekt organiserat efter meddelandetyp
- **Registrerar** nya lyssnare med hjälp av `on()`-metoden
- **Sänder** meddelanden till alla intresserade lyssnare med hjälp av `emit()`
- **Stöder** valfria datapaket för att skicka relevant information

### Sätta ihop allt: Ett praktiskt exempel

Okej, låt oss se detta i praktiken! Vi ska bygga ett enkelt rörelsesystem som visar hur rent och flexibelt pub/sub kan vara:

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

**Här är vad denna kod gör:**
- **Definierar** ett konstantobjekt för att förhindra stavfel i meddelandenamn
- **Skapar** en händelseutgivare-instans för att hantera all kommunikation
- **Initierar** ett hjälteobjekt vid startpositionen

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

**I ovanstående har vi:**
- **Registrerat** händelselyssnare som svarar på rörelsemeddelanden
- **Uppdaterat** hjälteobjektets position baserat på rörelseriktningen
- **Lagt till** konsolloggar för att spåra hjälteobjektets positionsförändringar
- **Separerat** rörelselogiken från inmatningshanteringen

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

**Att förstå dessa koncept:**
- **Kopplar** tangentbordsinmatning till spelhändelser utan hård koppling
- **Möjliggör** att inmatningssystemet kommunicerar med spelobjekt indirekt
- **Tillåter** flera system att reagera på samma tangentbordshändelser
- **Gör** det enkelt att ändra tangentbindningar eller lägga till nya inmatningsmetoder

> 💡 **Proffstips**: Det fina med detta mönster är flexibiliteten! Du kan enkelt lägga till ljudeffekter, skärmryckningar eller partikeleffekter genom att helt enkelt lägga till fler händelselyssnare – ingen anledning att ändra den befintliga tangentbords- eller rörelsekoden.
> 
**Här är varför du kommer att älska denna metod:**
- Att lägga till nya funktioner blir superenkelt – lyssna bara på de händelser du bryr dig om
- Flera saker kan reagera på samma händelse utan att störa varandra
- Testning blir mycket enklare eftersom varje del fungerar oberoende
- När något går fel vet du exakt var du ska leta

### Varför Pub/Sub skalar effektivt

Pub/sub-mönstret bibehåller enkelheten när applikationer växer i komplexitet. Oavsett om det handlar om att hantera dussintals fiender, dynamiska UI-uppdateringar eller ljudsystem, hanterar mönstret ökad skala utan arkitektoniska förändringar. Nya funktioner integreras i det befintliga händelsesystemet utan att påverka etablerad funktionalitet.

> ⚠️ **Vanligt misstag**: Skapa inte för många specifika meddelandetyper tidigt. Börja med breda kategorier och förfina dem när ditt spels behov blir tydligare.
> 
**Bästa praxis att följa:**
- **Grupperar** relaterade meddelanden i logiska kategorier
- **Använder** beskrivande namn som tydligt anger vad som hände
- **Håller** meddelandepaket enkla och fokuserade
- **Dokumenterar** dina meddelandetyper för samarbete i teamet

---

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Skapa ett enkelt system för spelobjekt med både arv och pub/sub-mönstret. Du ska implementera ett grundläggande spel där olika objekt kan kommunicera genom händelser utan att direkt känna till varandra.

**Uppgift:** Skapa ett JavaScript-spelsystem med följande krav: 1) Skapa en bas GameObject-klass med x-, y-koordinater och en typ-egenskap. 2) Skapa en Hero-klass som utökar GameObject och kan röra sig. 3) Skapa en Enemy-klass som utökar GameObject och kan jaga hjälten. 4) Implementera en EventEmitter-klass för pub/sub-mönstret. 5) Ställ in händelselyssnare så att när hjälten rör sig, får närliggande fiender ett 'HERO_MOVED'-meddelande och uppdaterar sin position för att röra sig mot hjälten. Inkludera konsolloggar för att visa kommunikationen mellan objekten.

Läs mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## 🚀 Utmaning

Fundera på hur pub-sub-mönstret kan förbättra spelarkitekturen. Identifiera vilka komponenter som bör sända händelser och hur systemet ska svara. Designa ett spelkoncept och kartlägg kommunikationsmönstren mellan dess komponenter.

## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/30)

## Granskning & Självstudier

Lär dig mer om Pub/Sub genom att [läsa om det](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Uppgift

[Skapa en spelmockup](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.