<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-23T22:37:52+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "no"
}
-->
# Bygg et romspill Del 1: Introduksjon

![Animasjon av romspill som viser gameplay](../../../../6-space-game/images/pewpew.gif)

Akkurat som NASAs oppdragskontroll koordinerer flere systemer under en romferd, skal vi bygge et romspill som demonstrerer hvordan ulike deler av et program kan fungere sømløst sammen. Mens vi lager noe du faktisk kan spille, vil du lære essensielle programmeringskonsepter som gjelder for ethvert programvareprosjekt.

Vi skal utforske to grunnleggende tilnærminger til organisering av kode: arv og komposisjon. Dette er ikke bare akademiske konsepter – de er de samme mønstrene som driver alt fra videospill til banksystemer. Vi skal også implementere et kommunikasjonssystem kalt pub/sub som fungerer som kommunikasjonsnettverkene som brukes i romfartøy, og lar ulike komponenter dele informasjon uten å skape avhengigheter.

Ved slutten av denne serien vil du forstå hvordan du bygger applikasjoner som kan skaleres og utvikles – enten du utvikler spill, nettapplikasjoner eller andre programvaresystemer.

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/29)

## Arv og komposisjon i spillutvikling

Når prosjekter blir mer komplekse, blir organisering av kode kritisk. Det som begynner som et enkelt skript kan bli vanskelig å vedlikeholde uten riktig struktur – akkurat som Apollo-oppdragene krevde nøye koordinering mellom tusenvis av komponenter.

Vi skal utforske to grunnleggende tilnærminger for organisering av kode: arv og komposisjon. Hver har sine unike fordeler, og det å forstå begge hjelper deg med å velge riktig tilnærming for ulike situasjoner. Vi skal demonstrere disse konseptene gjennom vårt romspill, der helter, fiender, power-ups og andre objekter må samhandle effektivt.

✅ En av de mest berømte programmeringsbøkene som noen gang er skrevet handler om [designmønstre](https://en.wikipedia.org/wiki/Design_Patterns).

I ethvert spill har du `spillobjekter` – de interaktive elementene som fyller spillverdenen din. Helter, fiender, power-ups og visuelle effekter er alle spillobjekter. Hvert eksisterer på spesifikke skjermkoordinater ved bruk av `x` og `y` verdier, likt som å plotte punkter på et koordinatplan.

Til tross for deres visuelle forskjeller, deler disse objektene ofte grunnleggende oppførsel:

- **De eksisterer et sted** – Hvert objekt har x- og y-koordinater slik at spillet vet hvor det skal tegnes
- **Mange kan bevege seg rundt** – Helter løper, fiender jager, kuler flyr over skjermen
- **De har en levetid** – Noen blir værende for alltid, andre (som eksplosjoner) dukker opp kort og forsvinner
- **De reagerer på ting** – Når ting kolliderer, samles power-ups, helsebarer oppdateres

✅ Tenk på et spill som Pac-Man. Kan du identifisere de fire objekttypene som er nevnt ovenfor i dette spillet?

### Uttrykke oppførsel gjennom kode

Nå som du forstår de vanlige oppførslene spillobjekter deler, la oss utforske hvordan vi implementerer disse oppførslene i JavaScript. Du kan uttrykke objektoppførsel gjennom metoder knyttet til enten klasser eller individuelle objekter, og det finnes flere tilnærminger å velge mellom.

**Den klassebaserte tilnærmingen**

Klasser og arv gir en strukturert tilnærming til organisering av spillobjekter. Som det taksonomiske klassifikasjonssystemet utviklet av Carl Linnaeus, starter du med en grunnklasse som inneholder vanlige egenskaper, og deretter oppretter du spesialiserte klasser som arver disse grunnleggende egenskapene mens de legger til spesifikke kapabiliteter.

✅ Arv er et viktig konsept å forstå. Lær mer i [MDNs artikkel om arv](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Slik kan du implementere spillobjekter ved hjelp av klasser og arv:

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

**La oss bryte dette ned steg for steg:**
- Vi lager en grunnleggende mal som hvert spillobjekt kan bruke
- Konstruktøren lagrer hvor objektet er (`x`, `y`) og hva slags ting det er
- Dette blir grunnlaget som alle spillobjektene dine vil bygge på

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

**I det ovennevnte har vi:**
- **Utvidet** GameObject-klassen for å legge til bevegelsesfunksjonalitet
- **Kalt** foreldrekonstruktøren ved hjelp av `super()` for å initialisere arvede egenskaper
- **Lagt til** en `moveTo()`-metode som oppdaterer objektets posisjon

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

**Forstå disse konseptene:**
- **Oppretter** spesialiserte objekttyper som arver passende oppførsel
- **Demonstrerer** hvordan arv tillater selektiv funksjonalitet
- **Viser** at helter kan bevege seg mens trær forblir stasjonære
- **Illustrerer** hvordan klassehierarkiet forhindrer upassende handlinger

✅ Ta noen minutter til å forestille deg en Pac-Man-helt (Inky, Pinky eller Blinky, for eksempel) og hvordan det ville bli skrevet i JavaScript.

**Komposisjonstilnærmingen**

Komposisjon følger en modulær designfilosofi, likt hvordan ingeniører designer romfartøy med utskiftbare komponenter. I stedet for å arve fra en foreldreklasse, kombinerer du spesifikke oppførsler for å lage objekter med akkurat den funksjonaliteten de trenger. Denne tilnærmingen gir fleksibilitet uten stive hierarkiske begrensninger.

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

**Her er hva denne koden gjør:**
- **Definerer** et grunnleggende `gameObject` med posisjons- og typeegenskaper
- **Oppretter** et separat `movable` oppførselsobjekt med bevegelsesfunksjonalitet
- **Skiller** bekymringer ved å holde posisjonsdata og bevegelseslogikk uavhengig

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

**I det ovennevnte har vi:**
- **Kombinert** grunnleggende objektegenskaper med bevegelsesoppførsel ved hjelp av spread-syntaks
- **Opprettet** fabrikkfunksjoner som returnerer tilpassede objekter
- **Muliggjort** fleksibel objektopprettelse uten stive klassehierarkier
- **Tillatt** objekter å ha akkurat de oppførslene de trenger

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Viktige punkter å huske:**
- **Komponerer** objekter ved å blande oppførsler i stedet for å arve dem
- **Gir** mer fleksibilitet enn stive arvhierarkier
- **Tillater** objekter å ha akkurat de funksjonene de trenger
- **Bruker** moderne JavaScript spread-syntaks for ren objektkombinasjon 
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

**Bryter ned hva som skjer her:**
- **Oppretter** et sentralt hendelseshåndteringssystem ved hjelp av en enkel klasse
- **Lagrer** lyttere i et objekt organisert etter meldingstype
- **Registrerer** nye lyttere ved hjelp av `on()`-metoden
- **Sender** meldinger til alle interesserte lyttere ved hjelp av `emit()`
- **Støtter** valgfrie datalaster for å sende relevant informasjon

### Sette alt sammen: Et praktisk eksempel

Ok, la oss se dette i aksjon! Vi skal bygge et enkelt bevegelsessystem som viser hvor rent og fleksibelt pub/sub kan være:

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

**Her er hva denne koden gjør:**
- **Definerer** et konstantobjekt for å forhindre skrivefeil i meldingsnavn
- **Oppretter** en instans av hendelsesutstederen for å håndtere all kommunikasjon
- **Initialiserer** et helteobjekt ved startposisjonen

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

**I det ovennevnte har vi:**
- **Registrert** hendelseslyttere som reagerer på bevegelsesmeldinger
- **Oppdatert** heltens posisjon basert på bevegelsesretningen
- **Lagt til** konsolllogging for å spore endringer i heltens posisjon
- **Skilt** bevegelseslogikken fra inputhåndteringen

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

**Forstå disse konseptene:**
- **Kobler** tastaturinput til spillhendelser uten tett kobling
- **Muliggjør** at inputsystemet kan kommunisere med spillobjekter indirekte
- **Tillater** flere systemer å reagere på de samme tastaturhendelsene
- **Gjør** det enkelt å endre tastebindinger eller legge til nye inputmetoder

> 💡 **Profftips**: Det vakre med dette mønsteret er fleksibiliteten! Du kan enkelt legge til lydeffekter, skjermrystelser eller partikkeffekter ved bare å legge til flere hendelseslyttere – ingen behov for å endre eksisterende tastatur- eller bevegelseskode.
> 
**Her er hvorfor du vil elske denne tilnærmingen:**
- Å legge til nye funksjoner blir superenkelt – bare lytt etter hendelsene du bryr deg om
- Flere ting kan reagere på den samme hendelsen uten å komme i konflikt
- Testing blir mye enklere fordi hver del fungerer uavhengig
- Når noe går galt, vet du nøyaktig hvor du skal lete

### Hvorfor Pub/Sub skalerer effektivt

Pub/sub-mønsteret opprettholder enkelhet når applikasjoner vokser i kompleksitet. Enten det gjelder å håndtere dusinvis av fiender, dynamiske UI-oppdateringer eller lydsystemer, håndterer mønsteret økt skala uten arkitektoniske endringer. Nye funksjoner integreres i det eksisterende hendelsessystemet uten å påvirke etablert funksjonalitet.

> ⚠️ **Vanlig feil**: Ikke opprett for mange spesifikke meldingstyper tidlig. Start med brede kategorier og finjuster dem etter hvert som spillets behov blir tydeligere.
> 
**Beste praksis å følge:**
- **Grupperer** relaterte meldinger i logiske kategorier
- **Bruker** beskrivende navn som tydelig indikerer hva som skjedde
- **Holder** meldingsdatalaster enkle og fokuserte
- **Dokumenterer** meldingstypene dine for samarbeid i teamet

---

## GitHub Copilot Agent Challenge 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Lag et enkelt system for spillobjekter ved hjelp av både arv og pub/sub-mønsteret. Du skal implementere et grunnleggende spill der ulike objekter kan kommunisere gjennom hendelser uten å kjenne direkte til hverandre.

**Oppgave:** Lag et JavaScript-spillsystem med følgende krav: 1) Lag en grunnleggende GameObject-klasse med x-, y-koordinater og en type-egenskap. 2) Lag en Hero-klasse som utvider GameObject og kan bevege seg. 3) Lag en Enemy-klasse som utvider GameObject og kan jage helten. 4) Implementer en EventEmitter-klasse for pub/sub-mønsteret. 5) Sett opp hendelseslyttere slik at når helten beveger seg, mottar nærliggende fiender en 'HERO_MOVED'-hendelse og oppdaterer posisjonen sin for å bevege seg mot helten. Inkluder console.log-utsagn for å vise kommunikasjonen mellom objektene.

Lær mer om [agent-modus](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Utfordring

Tenk over hvordan pub-sub-mønsteret kan forbedre spillarkitekturen. Identifiser hvilke komponenter som bør sende ut hendelser og hvordan systemet bør reagere. Design et spillkonsept og kartlegg kommunikasjonsmønstrene mellom komponentene.

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/30)

## Gjennomgang og selvstudium

Lær mer om Pub/Sub ved å [lese om det](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Oppgave

[Mock opp et spill](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.