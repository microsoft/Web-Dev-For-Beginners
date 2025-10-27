<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-24T21:48:50+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie vesmírnej hry, časť 1: Úvod

![Animácia vesmírnej hry zobrazujúca hru](../../../../6-space-game/images/pewpew.gif)

Rovnako ako riadiace stredisko NASA koordinuje viacero systémov počas vesmírneho štartu, vytvoríme vesmírnu hru, ktorá ukáže, ako môžu rôzne časti programu spolupracovať bez problémov. Pri vytváraní niečoho, čo si môžete skutočne zahrať, sa naučíte základné programovacie koncepty, ktoré sa dajú aplikovať na akýkoľvek softvérový projekt.

Preskúmame dva základné prístupy k organizácii kódu: dedičnosť a kompozíciu. Tieto koncepty nie sú len akademické – sú to rovnaké vzory, ktoré poháňajú všetko od videohier až po bankové systémy. Implementujeme tiež komunikačný systém nazývaný pub/sub, ktorý funguje ako komunikačné siete používané vo vesmírnych lodiach, umožňujúce rôznym komponentom zdieľať informácie bez vytvárania závislostí.

Na konci tejto série pochopíte, ako vytvárať aplikácie, ktoré môžu rásť a vyvíjať sa – či už vyvíjate hry, webové aplikácie alebo akýkoľvek iný softvérový systém.

## Kvíz pred prednáškou

[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/quiz/29)

## Dedičnosť a kompozícia v hernom vývoji

Ako projekty rastú na komplexnosti, organizácia kódu sa stáva kľúčovou. To, čo začína ako jednoduchý skript, sa môže stať ťažko udržiavateľným bez správnej štruktúry – podobne ako misie Apollo vyžadovali dôkladnú koordináciu medzi tisíckami komponentov.

Preskúmame dva základné prístupy k organizácii kódu: dedičnosť a kompozíciu. Každý má svoje výhody a pochopenie oboch vám pomôže vybrať správny prístup pre rôzne situácie. Tieto koncepty si ukážeme prostredníctvom našej vesmírnej hry, kde hrdinovia, nepriatelia, vylepšenia a ďalšie objekty musia efektívne spolupracovať.

✅ Jedna z najslávnejších kníh o programovaní sa zaoberá [návrhovými vzormi](https://en.wikipedia.org/wiki/Design_Patterns).

V každej hre máte `herné objekty` – interaktívne prvky, ktoré zapĺňajú váš herný svet. Hrdinovia, nepriatelia, vylepšenia a vizuálne efekty sú všetko herné objekty. Každý z nich existuje na konkrétnych súradniciach obrazovky pomocou hodnôt `x` a `y`, podobne ako pri vykresľovaní bodov na súradnicovej rovine.

Napriek ich vizuálnym rozdielom tieto objekty často zdieľajú základné správanie:

- **Existujú niekde** – Každý objekt má súradnice x a y, aby hra vedela, kde ho nakresliť
- **Mnohé sa môžu pohybovať** – Hrdinovia bežia, nepriatelia prenasledujú, guľky lietajú po obrazovke
- **Majú životnosť** – Niektoré zostávajú navždy, iné (ako výbuchy) sa objavia na chvíľu a zmiznú
- **Reagujú na veci** – Keď sa veci zrazia, vylepšenia sa zbierajú, ukazovatele zdravia sa aktualizujú

✅ Premýšľajte o hre ako Pac-Man. Dokážete identifikovať štyri typy objektov uvedené vyššie v tejto hre?

### Vyjadrenie správania prostredníctvom kódu

Teraz, keď rozumiete spoločným správaním herných objektov, preskúmajme, ako implementovať tieto správania v JavaScripte. Správanie objektov môžete vyjadriť prostredníctvom metód pripojených buď k triedam, alebo jednotlivým objektom, pričom existuje niekoľko prístupov, z ktorých si môžete vybrať.

**Prístup založený na triedach**

Triedy a dedičnosť poskytujú štruktúrovaný prístup k organizácii herných objektov. Podobne ako taxonomický klasifikačný systém vyvinutý Carlom Linnaeusom, začnete základnou triedou obsahujúcou spoločné vlastnosti a potom vytvoríte špecializované triedy, ktoré zdedia tieto základy a pridajú špecifické schopnosti.

✅ Dedičnosť je dôležitý koncept, ktorý treba pochopiť. Viac sa dozviete v [článku MDN o dedičnosti](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Tu je spôsob, ako implementovať herné objekty pomocou tried a dedičnosti:

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

**Rozoberme si to krok za krokom:**
- Vytvárame základnú šablónu, ktorú môže použiť každý herný objekt
- Konštruktor ukladá, kde sa objekt nachádza (`x`, `y`) a aký typ objektu to je
- Toto sa stáva základom, na ktorom budú stavať všetky vaše herné objekty

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

**V uvedenom sme:**
- **Rozšírili** triedu GameObject, aby sme pridali funkciu pohybu
- **Zavolali** konštruktor rodiča pomocou `super()`, aby sme inicializovali zdedené vlastnosti
- **Pridali** metódu `moveTo()`, ktorá aktualizuje pozíciu objektu

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

**Pochopenie týchto konceptov:**
- **Vytvára** špecializované typy objektov, ktoré zdedia vhodné správanie
- **Ukazuje**, ako dedičnosť umožňuje selektívne zahrnutie funkcií
- **Dokazuje**, že hrdinovia sa môžu pohybovať, zatiaľ čo stromy zostávajú nehybné
- **Ilustruje**, ako hierarchia tried zabraňuje nevhodným akciám

✅ Venujte pár minút tomu, aby ste si predstavili hrdinu z Pac-Mana (napríklad Inky, Pinky alebo Blinky) a ako by bol napísaný v JavaScripte.

**Prístup založený na kompozícii**

Kompozícia nasleduje filozofiu modulárneho dizajnu, podobne ako inžinieri navrhujú vesmírne lode s vymeniteľnými komponentmi. Namiesto dedenia z rodičovskej triedy kombinujete špecifické správania, aby ste vytvorili objekty s presne takou funkcionalitou, akú potrebujú. Tento prístup ponúka flexibilitu bez rigidných hierarchických obmedzení.

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

**Čo tento kód robí:**
- **Definuje** základný `gameObject` s vlastnosťami pozície a typu
- **Vytvára** samostatný objekt správania `movable` s funkciou pohybu
- **Oddeluje** zodpovednosti tým, že udržiava údaje o pozícii a logiku pohybu nezávislé

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

**V uvedenom sme:**
- **Kombinovali** vlastnosti základného objektu s pohybovým správaním pomocou syntaxe spread
- **Vytvorili** továrenské funkcie, ktoré vracajú prispôsobené objekty
- **Umožnili** flexibilné vytváranie objektov bez rigidných hierarchií tried
- **Dovolili**, aby objekty mali presne tie správania, ktoré potrebujú

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Kľúčové body na zapamätanie:**
- **Kombinuje** objekty zmiešaním správaní namiesto ich dedenia
- **Poskytuje** väčšiu flexibilitu ako rigidné hierarchie dedičnosti
- **Dovoluje**, aby objekty mali presne tie funkcie, ktoré potrebujú
- **Používa** modernú syntax JavaScriptu pre čisté kombinovanie objektov 
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

**Rozbor toho, čo sa tu deje:**
- **Vytvára** centrálny systém správy udalostí pomocou jednoduchej triedy
- **Ukladá** poslucháčov do objektu organizovaného podľa typu správy
- **Registruje** nových poslucháčov pomocou metódy `on()`
- **Vysiela** správy všetkým zainteresovaným poslucháčom pomocou `emit()`
- **Podporuje** voliteľné dátové balíčky na odovzdávanie relevantných informácií

### Spojenie všetkého: Praktický príklad

Dobre, poďme si to ukázať v praxi! Vytvoríme jednoduchý systém pohybu, ktorý ukáže, aký čistý a flexibilný môže byť pub/sub:

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

**Čo tento kód robí:**
- **Definuje** objekt konštánt, aby sa predišlo preklepom v názvoch správ
- **Vytvára** inštanciu emitera udalostí na spracovanie všetkej komunikácie
- **Inicializuje** objekt hrdinu na počiatočnej pozícii

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

**V uvedenom sme:**
- **Registrovali** poslucháčov udalostí, ktorí reagujú na správy o pohybe
- **Aktualizovali** pozíciu hrdinu na základe smeru pohybu
- **Pridali** logovanie do konzoly na sledovanie zmien pozície hrdinu
- **Oddelili** logiku pohybu od spracovania vstupu

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

**Pochopenie týchto konceptov:**
- **Spojuje** vstup z klávesnice s hernými udalosťami bez pevného prepojenia
- **Umožňuje**, aby systém vstupu komunikoval s hernými objektmi nepriamo
- **Dovoluje**, aby viaceré systémy reagovali na rovnaké udalosti z klávesnice
- **Uľahčuje** zmenu klávesových skratiek alebo pridanie nových metód vstupu

> 💡 **Tip**: Krása tohto vzoru spočíva vo flexibilite! Môžete ľahko pridať zvukové efekty, trasenie obrazovky alebo časticové efekty jednoducho pridaním ďalších poslucháčov udalostí – nie je potrebné upravovať existujúci kód pre klávesnicu alebo pohyb.
> 
**Prečo si tento prístup zamilujete:**
- Pridávanie nových funkcií je veľmi jednoduché – stačí počúvať udalosti, ktoré vás zaujímajú
- Viaceré veci môžu reagovať na rovnakú udalosť bez toho, aby si navzájom prekážali
- Testovanie je oveľa jednoduchšie, pretože každá časť funguje nezávisle
- Keď sa niečo pokazí, presne viete, kde hľadať problém

### Prečo je pub/sub efektívny pri škálovaní

Vzor pub/sub si zachováva jednoduchosť, keď aplikácie rastú na komplexnosti. Či už ide o správu desiatok nepriateľov, dynamické aktualizácie UI alebo zvukové systémy, vzor zvláda zvýšenú škálu bez potreby zmien v architektúre. Nové funkcie sa integrujú do existujúceho systému udalostí bez ovplyvnenia už zavedených funkcií.

> ⚠️ **Bežná chyba**: Nevytvárajte príliš veľa špecifických typov správ hneď na začiatku. Začnite so širokými kategóriami a upravujte ich podľa potrieb vašej hry.
> 
**Najlepšie postupy, ktoré treba dodržiavať:**
- **Skupiny** súvisiace správy do logických kategórií
- **Používa** popisné názvy, ktoré jasne naznačujú, čo sa stalo
- **Udržuje** dátové balíčky jednoduché a zamerané
- **Dokumentuje** typy správ pre spoluprácu tímu

---

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vytvorte jednoduchý systém herných objektov pomocou dedičnosti a vzoru pub/sub. Implementujte základnú hru, kde rôzne objekty môžu komunikovať prostredníctvom udalostí bez toho, aby o sebe priamo vedeli.

**Úloha:** Vytvorte systém herných objektov v JavaScripte s nasledujúcimi požiadavkami: 1) Vytvorte základnú triedu GameObject s x, y súradnicami a vlastnosťou typu. 2) Vytvorte triedu Hero, ktorá rozširuje GameObject a môže sa pohybovať. 3) Vytvorte triedu Enemy, ktorá rozširuje GameObject a môže prenasledovať hrdinu. 4) Implementujte triedu EventEmitter pre vzor pub/sub. 5) Nastavte poslucháčov udalostí tak, aby keď sa hrdina pohne, blízki nepriatelia dostali udalosť 'HERO_MOVED' a aktualizovali svoju pozíciu, aby sa pohybovali smerom k hrdinovi. Zahrňte výpisy do konzoly, ktoré ukazujú komunikáciu medzi objektmi.

Viac o [režime agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) sa dozviete tu.

## 🚀 Výzva

Zvážte, ako môže vzor pub-sub zlepšiť architektúru hry. Identifikujte, ktoré komponenty by mali vysielať udalosti a ako by mal systém reagovať. Navrhnite koncept hry a načrtnite komunikačné vzory medzi jej komponentmi.

## Kvíz po prednáške

[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/30)

## Prehľad a samostatné štúdium

Dozviete sa viac o Pub/Sub [čítaním o ňom](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Zadanie

[Navrhnite hru](assignment.md)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.