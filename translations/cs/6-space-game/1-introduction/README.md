<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-24T21:11:49+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "cs"
}
-->
# Vytvořte vesmírnou hru, část 1: Úvod

![Animace vesmírné hry ukazující hratelnost](../../../../6-space-game/images/pewpew.gif)

Stejně jako řídící středisko NASA koordinuje různé systémy během vesmírného startu, vytvoříme vesmírnou hru, která ukáže, jak různé části programu mohou spolupracovat bez problémů. Při tvorbě něčeho, co si skutečně můžete zahrát, se naučíte základní programovací koncepty, které se uplatní v každém softwarovém projektu.

Prozkoumáme dva základní přístupy k organizaci kódu: dědičnost a kompozici. Nejde jen o akademické koncepty – jsou to stejné vzory, které pohánějí vše od videoher po bankovní systémy. Také implementujeme komunikační systém nazvaný pub/sub, který funguje jako komunikační sítě používané ve vesmírných lodích, umožňující různým komponentám sdílet informace bez vytváření závislostí.

Na konci této série pochopíte, jak vytvářet aplikace, které mohou růst a vyvíjet se – ať už vyvíjíte hry, webové aplikace nebo jakýkoli jiný softwarový systém.

## Kvíz před přednáškou

[Kvíz před přednáškou](https://ff-quizzes.netlify.app/web/quiz/29)

## Dědičnost a kompozice ve vývoji her

Jak projekty rostou na složitosti, organizace kódu se stává klíčovou. Co začíná jako jednoduchý skript, se může stát obtížně udržovatelným bez správné struktury – podobně jako mise Apollo vyžadovaly pečlivou koordinaci mezi tisíci komponentami.

Prozkoumáme dva základní přístupy k organizaci kódu: dědičnost a kompozici. Každý má své specifické výhody a pochopení obou vám pomůže vybrat správný přístup pro různé situace. Tyto koncepty ukážeme prostřednictvím naší vesmírné hry, kde hrdinové, nepřátelé, power-upy a další objekty musí efektivně spolupracovat.

✅ Jedna z nejslavnějších programovacích knih vůbec se týká [designových vzorů](https://en.wikipedia.org/wiki/Design_Patterns).

V každé hře máte `herní objekty` – interaktivní prvky, které obývají váš herní svět. Hrdinové, nepřátelé, power-upy a vizuální efekty jsou všechny herní objekty. Každý z nich existuje na konkrétních souřadnicích obrazovky pomocí hodnot `x` a `y`, podobně jako při vykreslování bodů na souřadnicové rovině.

Navzdory jejich vizuálním rozdílům tyto objekty často sdílejí základní chování:

- **Existují někde** – Každý objekt má souřadnice x a y, aby hra věděla, kde ho vykreslit
- **Mnohé se mohou pohybovat** – Hrdinové běhají, nepřátelé pronásledují, střely létají po obrazovce
- **Mají životnost** – Některé zůstávají navždy, jiné (jako exploze) se objeví krátce a zmizí
- **Reagují na věci** – Když se věci srazí, power-upy se sbírají, ukazatele zdraví se aktualizují

✅ Zamyslete se nad hrou jako Pac-Man. Dokážete identifikovat čtyři typy objektů uvedené výše v této hře?

### Vyjádření chování prostřednictvím kódu

Nyní, když rozumíte běžnému chování, které herní objekty sdílejí, pojďme prozkoumat, jak toto chování implementovat v JavaScriptu. Chování objektů můžete vyjádřit prostřednictvím metod připojených buď ke třídám, nebo jednotlivým objektům, a existuje několik přístupů, ze kterých si můžete vybrat.

**Přístup založený na třídách**

Třídy a dědičnost poskytují strukturovaný přístup k organizaci herních objektů. Podobně jako taxonomický klasifikační systém vyvinutý Carlem Linnéem začínáte základní třídou obsahující běžné vlastnosti, poté vytváříte specializované třídy, které tyto základy dědí a přidávají specifické schopnosti.

✅ Dědičnost je důležitý koncept, který je třeba pochopit. Více se dozvíte v [článku MDN o dědičnosti](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Takto můžete implementovat herní objekty pomocí tříd a dědičnosti:

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

**Rozložme si to krok za krokem:**
- Vytváříme základní šablonu, kterou může použít každý herní objekt
- Konstruktor ukládá, kde se objekt nachází (`x`, `y`) a jaký typ věci to je
- Toto se stává základem, na kterém budou stavět všechny vaše herní objekty

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

**V uvedeném jsme:**
- **Rozšířili** třídu GameObject, abychom přidali funkci pohybu
- **Zavolali** rodičovský konstruktor pomocí `super()`, abychom inicializovali zděděné vlastnosti
- **Přidali** metodu `moveTo()`, která aktualizuje pozici objektu

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

**Pochopení těchto konceptů:**
- **Vytváří** specializované typy objektů, které dědí vhodné chování
- **Ukazuje**, jak dědičnost umožňuje selektivní zahrnutí funkcí
- **Ukazuje**, že hrdinové se mohou pohybovat, zatímco stromy zůstávají nehybné
- **Ilustruje**, jak hierarchie tříd zabraňuje nevhodným akcím

✅ Věnujte pár minut přemýšlení o hrdinovi z Pac-Mana (například Inky, Pinky nebo Blinky) a o tom, jak by byl napsán v JavaScriptu.

**Přístup založený na kompozici**

Kompozice následuje modulární designovou filozofii, podobně jako inženýři navrhují vesmírné lodě s vyměnitelnými komponenty. Místo dědění z rodičovské třídy kombinujete specifická chování, abyste vytvořili objekty s přesně tou funkcionalitou, kterou potřebují. Tento přístup nabízí flexibilitu bez rigidních hierarchických omezení.

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

**Co tento kód dělá:**
- **Definuje** základní `gameObject` s vlastnostmi pozice a typu
- **Vytváří** samostatný objekt chování `movable` s funkcí pohybu
- **Odděluje** záležitosti tím, že udržuje data o pozici a logiku pohybu nezávislé

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

**V uvedeném jsme:**
- **Kombinovali** základní vlastnosti objektu s chováním pohybu pomocí syntaxe spread
- **Vytvořili** tovární funkce, které vracejí přizpůsobené objekty
- **Umožnili** flexibilní tvorbu objektů bez rigidních hierarchií tříd
- **Umožnili**, aby objekty měly přesně ta chování, která potřebují

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Klíčové body k zapamatování:**
- **Kombinuje** objekty mícháním chování místo jejich dědění
- **Poskytuje** větší flexibilitu než rigidní hierarchie dědičnosti
- **Umožňuje**, aby objekty měly přesně ty funkce, které potřebují
- **Používá** moderní syntaxi spread v JavaScriptu pro čistou kombinaci objektů 
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

**Rozložení toho, co se zde děje:**
- **Vytváří** centrální systém správy událostí pomocí jednoduché třídy
- **Ukládá** posluchače do objektu organizovaného podle typu zprávy
- **Registruje** nové posluchače pomocí metody `on()`
- **Vysílá** zprávy všem zainteresovaným posluchačům pomocí `emit()`
- **Podporuje** volitelné datové balíčky pro předávání relevantních informací

### Spojení všeho dohromady: Praktický příklad

Dobře, podívejme se na to v praxi! Vytvoříme jednoduchý systém pohybu, který ukáže, jak čistý a flexibilní může být pub/sub:

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

**Co tento kód dělá:**
- **Definuje** objekt konstant, aby se zabránilo překlepům v názvech zpráv
- **Vytváří** instanci emitera událostí pro zpracování veškeré komunikace
- **Inicializuje** objekt hrdiny na výchozí pozici

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

**V uvedeném jsme:**
- **Registrovali** posluchače událostí, kteří reagují na zprávy o pohybu
- **Aktualizovali** pozici hrdiny na základě směru pohybu
- **Přidali** logování do konzole pro sledování změn pozice hrdiny
- **Oddělili** logiku pohybu od zpracování vstupu

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

**Pochopení těchto konceptů:**
- **Spojuje** vstup z klávesnice s herními událostmi bez těsného propojení
- **Umožňuje**, aby systém vstupu komunikoval s herními objekty nepřímo
- **Umožňuje**, aby více systémů reagovalo na stejné události z klávesnice
- **Usnadňuje** změnu klávesových vazeb nebo přidání nových metod vstupu

> 💡 **Tip**: Krása tohoto vzoru spočívá ve flexibilitě! Můžete snadno přidat zvukové efekty, otřesy obrazovky nebo částicové efekty jednoduše přidáním dalších posluchačů událostí – není třeba upravovat stávající kód pro klávesnici nebo pohyb.
> 
**Proč si tento přístup zamilujete:**
- Přidávání nových funkcí je velmi snadné – stačí poslouchat události, které vás zajímají
- Více věcí může reagovat na stejnou událost, aniž by si navzájem překážely
- Testování je mnohem jednodušší, protože každá část funguje nezávisle
- Když se něco pokazí, přesně víte, kde hledat problém

### Proč je pub/sub efektivní při škálování

Vzor pub/sub udržuje jednoduchost, i když aplikace rostou na složitosti. Ať už spravujete desítky nepřátel, dynamické aktualizace uživatelského rozhraní nebo zvukové systémy, tento vzor zvládá zvýšené nároky bez nutnosti změn v architektuře. Nové funkce se integrují do stávajícího systému událostí, aniž by ovlivnily již zavedenou funkcionalitu.

> ⚠️ **Častá chyba**: Nevytvářejte příliš mnoho specifických typů zpráv hned na začátku. Začněte se širokými kategoriemi a upravujte je podle potřeb vaší hry.
> 
**Doporučené postupy:**
- **Skupiny** souvisejících zpráv do logických kategorií
- **Používání** popisných názvů, které jasně naznačují, co se stalo
- **Udržování** datových balíčků jednoduchých a zaměřených
- **Dokumentování** typů zpráv pro spolupráci v týmu

---

## Výzva GitHub Copilot Agent 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Vytvořte jednoduchý systém herních objektů pomocí dědičnosti a vzoru pub/sub. Implementujte základní hru, kde různé objekty mohou komunikovat prostřednictvím událostí, aniž by o sobě přímo věděly.

**Zadání:** Vytvořte systém herních objektů v JavaScriptu s následujícími požadavky: 1) Vytvořte základní třídu GameObject s souřadnicemi x, y a vlastností typu. 2) Vytvořte třídu Hero, která rozšiřuje GameObject a může se pohybovat. 3) Vytvořte třídu Enemy, která rozšiřuje GameObject a může pronásledovat hrdinu. 4) Implementujte třídu EventEmitter pro vzor pub/sub. 5) Nastavte posluchače událostí tak, aby při pohybu hrdiny blízcí nepřátelé obdrželi událost 'HERO_MOVED' a aktualizovali svou pozici, aby se přiblížili k hrdinovi. Zahrňte příkazy console.log, které ukazují komunikaci mezi objekty.

Více o [režimu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) se dozvíte zde.

## 🚀 Výzva

Zvažte, jak může vzor pub-sub zlepšit architekturu hry. Identifikujte, které komponenty by měly vysílat události a jak by měl systém reagovat. Navrhněte koncept hry a zmapujte komunikační vzory mezi jejími komponentami.

## Kvíz po přednášce

[Kvíz po přednášce](https://ff-quizzes.netlify.app/web/quiz/30)

## Přehled & Samostudium

Zjistěte více o Pub/Sub [čtením o něm](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Zadání

[Navrhněte hru](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.