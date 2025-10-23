<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-23T22:12:09+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "da"
}
-->
# Byg et rumspil del 1: Introduktion

![Animation af rumspil, der viser gameplay](../../../../6-space-game/images/pewpew.gif)

Ligesom NASAs mission control koordinerer flere systemer under en rumopsendelse, skal vi bygge et rumspil, der demonstrerer, hvordan forskellige dele af et program kan arbejde sammen problemfrit. Mens vi skaber noget, du faktisk kan spille, vil du lære essentielle programmeringskoncepter, der gælder for ethvert softwareprojekt.

Vi vil udforske to grundlæggende tilgange til at organisere kode: arv og komposition. Disse er ikke bare akademiske begreber – det er de samme mønstre, der driver alt fra videospil til banksystemer. Vi vil også implementere et kommunikationssystem kaldet pub/sub, der fungerer som kommunikationsnetværkene, der bruges i rumfartøjer, og som tillader forskellige komponenter at dele information uden at skabe afhængigheder.

Ved slutningen af denne serie vil du forstå, hvordan man bygger applikationer, der kan skalere og udvikle sig – uanset om du udvikler spil, webapplikationer eller andre softwaresystemer.

## Quiz før forelæsning

[Quiz før forelæsning](https://ff-quizzes.netlify.app/web/quiz/29)

## Arv og komposition i spiludvikling

Når projekter vokser i kompleksitet, bliver kodeorganisation kritisk. Det, der begynder som et simpelt script, kan blive svært at vedligeholde uden ordentlig struktur – meget ligesom hvordan Apollo-missionerne krævede omhyggelig koordinering mellem tusindvis af komponenter.

Vi vil udforske to grundlæggende tilgange til at organisere kode: arv og komposition. Hver har sine unikke fordele, og forståelse af begge hjælper dig med at vælge den rigtige tilgang til forskellige situationer. Vi vil demonstrere disse koncepter gennem vores rumspil, hvor helte, fjender, power-ups og andre objekter skal interagere effektivt.

✅ En af de mest berømte programmeringsbøger nogensinde handler om [designmønstre](https://en.wikipedia.org/wiki/Design_Patterns).

I ethvert spil har du `spilobjekter` – de interaktive elementer, der befolker din spilverden. Helte, fjender, power-ups og visuelle effekter er alle spilobjekter. Hvert objekt eksisterer på specifikke skærmkoordinater ved hjælp af `x` og `y` værdier, ligesom at plotte punkter på et koordinatsystem.

På trods af deres visuelle forskelle deler disse objekter ofte grundlæggende adfærd:

- **De eksisterer et sted** – Hvert objekt har x- og y-koordinater, så spillet ved, hvor det skal tegnes
- **Mange kan bevæge sig rundt** – Helte løber, fjender jager, kugler flyver hen over skærmen
- **De har en levetid** – Nogle forbliver for evigt, andre (som eksplosioner) vises kortvarigt og forsvinder
- **De reagerer på ting** – Når ting kolliderer, samles power-ups op, og livsbjælker opdateres

✅ Tænk på et spil som Pac-Man. Kan du identificere de fire objekttyper, der er nævnt ovenfor, i dette spil?

### Udtryk adfærd gennem kode

Nu hvor du forstår de fælles adfærd, som spilobjekter deler, lad os udforske, hvordan man implementerer disse adfærd i JavaScript. Du kan udtrykke objektadfærd gennem metoder, der er knyttet til enten klasser eller individuelle objekter, og der er flere tilgange at vælge imellem.

**Den klassebaserede tilgang**

Klasser og arv giver en struktureret tilgang til at organisere spilobjekter. Ligesom det taksonomiske klassifikationssystem udviklet af Carl Linnaeus, starter du med en basisklasse, der indeholder fælles egenskaber, og derefter opretter du specialiserede klasser, der arver disse fundamenter, mens de tilføjer specifikke funktioner.

✅ Arv er et vigtigt koncept at forstå. Læs mere i [MDNs artikel om arv](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Her er, hvordan du kan implementere spilobjekter ved hjælp af klasser og arv:

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

**Lad os bryde dette ned trin for trin:**
- Vi opretter en grundlæggende skabelon, som hvert spilobjekt kan bruge
- Konstruktøren gemmer, hvor objektet er (`x`, `y`), og hvilken type det er
- Dette bliver fundamentet, som alle dine spilobjekter vil bygge på

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

**I ovenstående har vi:**
- **Udvidet** GameObject-klassen for at tilføje bevægelsesfunktionalitet
- **Kaldt** forældrekonstruktøren ved hjælp af `super()` for at initialisere arvede egenskaber
- **Tilføjet** en `moveTo()` metode, der opdaterer objektets position

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

**Forståelse af disse koncepter:**
- **Skaber** specialiserede objekttyper, der arver passende adfærd
- **Demonstrerer** hvordan arv tillader selektiv funktionalitet
- **Viser** at helte kan bevæge sig, mens træer forbliver stationære
- **Illustrerer** hvordan klassehierarkiet forhindrer upassende handlinger

✅ Tag et øjeblik til at forestille dig en Pac-Man helt (Inky, Pinky eller Blinky, for eksempel) og hvordan det ville blive skrevet i JavaScript.

**Kompositionsmetoden**

Komposition følger en modulær designfilosofi, ligesom ingeniører designer rumfartøjer med udskiftelige komponenter. I stedet for at arve fra en forældresklasse kombinerer du specifikke adfærd for at skabe objekter med præcis den funktionalitet, de har brug for. Denne tilgang tilbyder fleksibilitet uden stive hierarkiske begrænsninger.

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

**Her er, hvad denne kode gør:**
- **Definerer** et grundlæggende `gameObject` med position og type egenskaber
- **Opretter** et separat `movable` adfærdsobjekt med bevægelsesfunktionalitet
- **Adskiller** bekymringer ved at holde positionsdata og bevægelseslogik uafhængige

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

**I ovenstående har vi:**
- **Kombineret** basisobjektegenskaber med bevægelsesadfærd ved hjælp af spread-syntaks
- **Oprettet** fabrikfunktioner, der returnerer tilpassede objekter
- **Muliggjort** fleksibel objektoprettelse uden stive klassehierarkier
- **Givet** objekter præcis den adfærd, de har brug for

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Vigtige punkter at huske:**
- **Komponerer** objekter ved at blande adfærd i stedet for at arve dem
- **Tilbyder** mere fleksibilitet end stive arvhierarkier
- **Giver** objekter præcis de funktioner, de har brug for
- **Bruger** moderne JavaScript spread-syntaks for ren objektkombination 
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

**Nedbrydning af, hvad der sker her:**
- **Opretter** et centralt begivenhedsstyringssystem ved hjælp af en simpel klasse
- **Gemmer** lyttere i et objekt organiseret efter beskedtype
- **Registrerer** nye lyttere ved hjælp af metoden `on()`
- **Sender** beskeder til alle interesserede lyttere ved hjælp af `emit()`
- **Understøtter** valgfrie dataloads til at sende relevante oplysninger

### Sæt det hele sammen: Et praktisk eksempel

Okay, lad os se det i aktion! Vi bygger et simpelt bevægelsessystem, der viser, hvor rent og fleksibelt pub/sub kan være:

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

**Her er, hvad denne kode gør:**
- **Definerer** et konstantobjekt for at forhindre tastefejl i beskednavne
- **Opretter** en event emitter-instans til at håndtere al kommunikation
- **Initialiserer** et helteobjekt på startpositionen

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

**I ovenstående har vi:**
- **Registreret** begivenhedslyttere, der reagerer på bevægelsesbeskeder
- **Opdateret** heltens position baseret på bevægelsesretningen
- **Tilføjet** console logging for at spore ændringer i heltens position
- **Adskilt** bevægelseslogikken fra inputhåndteringen

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

**Forståelse af disse koncepter:**
- **Forbinder** tastaturinput til spilbegivenheder uden tæt kobling
- **Muliggør** inputsystemet at kommunikere med spilobjekter indirekte
- **Tillader** flere systemer at reagere på de samme tastaturbegivenheder
- **Gør** det nemt at ændre tastebindinger eller tilføje nye inputmetoder

> 💡 **Pro Tip**: Skønheden ved dette mønster er fleksibilitet! Du kan nemt tilføje lydeffekter, skærmrystelser eller partikeleffekter ved blot at tilføje flere begivenhedslyttere – ingen grund til at ændre den eksisterende tastatur- eller bevægelseskode.
> 
**Her er hvorfor du vil elske denne tilgang:**
- Det bliver super nemt at tilføje nye funktioner – lyt bare efter de begivenheder, du er interesseret i
- Flere ting kan reagere på den samme begivenhed uden at forstyrre hinanden
- Testning bliver meget enklere, fordi hver del fungerer uafhængigt
- Når noget går galt, ved du præcis, hvor du skal kigge

### Hvorfor Pub/Sub skalerer effektivt

Pub/sub-mønsteret opretholder enkelhed, når applikationer vokser i kompleksitet. Uanset om det handler om at administrere dusinvis af fjender, dynamiske UI-opdateringer eller lydsystemer, håndterer mønsteret øget skala uden arkitektoniske ændringer. Nye funktioner integreres i det eksisterende begivenhedssystem uden at påvirke etableret funktionalitet.

> ⚠️ **Almindelig fejl**: Opret ikke for mange specifikke beskedtyper tidligt. Start med brede kategorier og finjuster dem, efterhånden som dit spils behov bliver klarere.
> 
**Bedste praksis at følge:**
- **Grupperer** relaterede beskeder i logiske kategorier
- **Bruger** beskrivende navne, der tydeligt angiver, hvad der skete
- **Holder** beskedpayloads enkle og fokuserede
- **Dokumenterer** dine beskedtyper for samarbejde i teamet

---

## GitHub Copilot Agent Challenge 🚀

Brug Agent-mode til at fuldføre følgende udfordring:

**Beskrivelse:** Opret et simpelt spilobjektsystem ved hjælp af både arv og pub/sub-mønsteret. Du skal implementere et grundlæggende spil, hvor forskellige objekter kan kommunikere gennem begivenheder uden direkte at kende til hinanden.

**Prompt:** Opret et JavaScript-spilsystem med følgende krav: 1) Opret en base GameObject-klasse med x, y-koordinater og en type-egenskab. 2) Opret en Hero-klasse, der udvider GameObject og kan bevæge sig. 3) Opret en Enemy-klasse, der udvider GameObject og kan jage helten. 4) Implementer en EventEmitter-klasse til pub/sub-mønsteret. 5) Opsæt begivenhedslyttere, så når helten bevæger sig, modtager nærliggende fjender en 'HERO_MOVED'-begivenhed og opdaterer deres position for at bevæge sig mod helten. Inkluder console.log-udsagn for at vise kommunikationen mellem objekter.

Lær mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Udfordring

Overvej, hvordan pub-sub-mønsteret kan forbedre spilarkitekturen. Identificer hvilke komponenter der bør udsende begivenheder, og hvordan systemet skal reagere. Design et spilkoncept og kortlæg kommunikationsmønstrene mellem dets komponenter.

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/30)

## Gennemgang & Selvstudie

Lær mere om Pub/Sub ved at [læse om det](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Opgave

[Lav en mockup af et spil](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.