<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-24T20:34:35+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "hu"
}
-->
# Űrjáték készítése 1. rész: Bevezetés

![Űrjáték animáció, amely a játékmenetet mutatja](../../../../6-space-game/images/pewpew.gif)

Ahogyan a NASA irányítóközpontja összehangolja a különböző rendszereket egy űrkilövés során, mi is egy olyan űrjátékot fogunk készíteni, amely bemutatja, hogyan működhetnek együtt egy program különböző részei zökkenőmentesen. Miközben egy valóban játszható dolgot hozunk létre, alapvető programozási koncepciókat tanulsz meg, amelyek bármilyen szoftverprojektben alkalmazhatók.

Két alapvető megközelítést fogunk megvizsgálni a kód szervezésére: az öröklődést és a kompozíciót. Ezek nem csupán elméleti fogalmak – ugyanazok a minták működtetik mindent a videojátékoktól kezdve a bankrendszerekig. Emellett megvalósítunk egy pub/sub nevű kommunikációs rendszert, amely hasonlóan működik, mint az űrhajók kommunikációs hálózatai, lehetővé téve a különböző komponensek számára, hogy információt osszanak meg anélkül, hogy függőségeket hoznának létre.

A sorozat végére megérted, hogyan lehet olyan alkalmazásokat építeni, amelyek skálázhatók és fejlődhetnek – legyen szó játékok, webalkalmazások vagy bármilyen más szoftverrendszer fejlesztéséről.

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/29)

## Öröklődés és kompozíció a játékfejlesztésben

Ahogy a projektek bonyolultabbá válnak, a kód szervezése kulcsfontosságúvá válik. Ami egyszerű szkriptként indul, nehezen karbantarthatóvá válhat megfelelő struktúra nélkül – hasonlóan ahhoz, ahogyan az Apollo-missziók gondos koordinációt igényeltek több ezer komponens között.

Két alapvető megközelítést fogunk megvizsgálni a kód szervezésére: az öröklődést és a kompozíciót. Mindegyiknek megvannak a maga előnyei, és mindkettő megértése segít kiválasztani a megfelelő megközelítést különböző helyzetekben. Ezeket a koncepciókat az űrjátékunkon keresztül fogjuk bemutatni, ahol hősöknek, ellenségeknek, erősítéseknek és más objektumoknak hatékonyan kell kölcsönhatásba lépniük.

✅ Az egyik leghíresebb programozási könyv a [tervezési mintákról](https://en.wikipedia.org/wiki/Design_Patterns) szól.

Bármely játékban vannak `játékobjektumok` – azok az interaktív elemek, amelyek benépesítik a játék világát. Hősök, ellenségek, erősítések és vizuális effektek mind játékobjektumok. Mindegyik konkrét képernyőkoordinátákon létezik `x` és `y` értékekkel, hasonlóan a pontok koordinátarendszerben való ábrázolásához.

Annak ellenére, hogy vizuálisan különböznek, ezek az objektumok gyakran osztoznak alapvető viselkedésekben:

- **Valahol léteznek** – Minden objektumnak van x és y koordinátája, hogy a játék tudja, hol rajzolja ki őket
- **Sokan mozoghatnak** – A hősök futnak, az ellenségek üldöznek, a golyók átszáguldanak a képernyőn
- **Van élettartamuk** – Néhány örökké marad, mások (például robbanások) rövid ideig jelennek meg, majd eltűnnek
- **Reagálnak dolgokra** – Amikor dolgok ütköznek, erősítések begyűjtődnek, az életcsíkok frissülnek

✅ Gondolj egy olyan játékra, mint a Pac-Man. Fel tudod ismerni a fenti négy objektumtípust ebben a játékban?

### Viselkedés kifejezése kóddal

Most, hogy megértetted a közös viselkedéseket, amelyeket a játékobjektumok osztanak, nézzük meg, hogyan lehet ezeket a viselkedéseket JavaScriptben megvalósítani. Az objektumok viselkedését kifejezheted osztályokhoz vagy egyedi objektumokhoz kapcsolt metódusokkal, és több megközelítés közül választhatsz.

**Az osztályalapú megközelítés**

Az osztályok és az öröklődés strukturált megközelítést kínálnak a játékobjektumok szervezésére. Akárcsak Carl Linnaeus taxonómiai osztályozási rendszere, egy alap osztállyal kezded, amely közös tulajdonságokat tartalmaz, majd létrehozol speciális osztályokat, amelyek öröklik ezeket az alapokat, miközben specifikus képességeket adnak hozzá.

✅ Az öröklődés fontos fogalom, amit érdemes megérteni. Tudj meg többet az [MDN öröklődésről szóló cikkéből](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Így valósíthatod meg a játékobjektumokat osztályok és öröklődés segítségével:

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

**Lépésről lépésre:**
- Egy alap sablont hozunk létre, amelyet minden játékobjektum használhat
- A konstruktor elmenti, hol van az objektum (`x`, `y`) és milyen típusú
- Ez lesz az alap, amelyre minden játékobjektum épül

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

**A fentiekben:**
- **Kiterjesztettük** a GameObject osztályt, hogy mozgási funkciót adjunk hozzá
- **Meghívtuk** a szülő konstruktorát a `super()` segítségével az örökölt tulajdonságok inicializálásához
- **Hozzáadtunk** egy `moveTo()` metódust, amely frissíti az objektum pozícióját

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

**Ezeknek a koncepcióknak a megértése:**
- **Speciális** objektumtípusokat hoz létre, amelyek megfelelő viselkedéseket örökölnek
- **Bemutatja**, hogyan teszi lehetővé az öröklődés a szelektív funkciók beépítését
- **Megmutatja**, hogy a hősök mozoghatnak, míg a fák mozdulatlanok maradnak
- **Illusztrálja**, hogyan akadályozza meg az osztályhierarchia a nem megfelelő műveleteket

✅ Gondold újra egy Pac-Man hős (például Inky, Pinky vagy Blinky) JavaScriptben való megírását.

**A kompozíciós megközelítés**

A kompozíció moduláris tervezési filozófiát követ, hasonlóan ahhoz, ahogyan a mérnökök cserélhető komponensekkel tervezik az űrhajókat. Ahelyett, hogy egy szülőosztályból örökölnél, specifikus viselkedéseket kombinálsz, hogy pontosan olyan objektumokat hozz létre, amelyekre szükséged van. Ez a megközelítés rugalmasságot kínál merev hierarchikus korlátok nélkül.

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

**Ez a kód:**
- **Meghatározza** az alap `gameObject`-et pozíció- és típus tulajdonságokkal
- **Létrehoz** egy külön `movable` viselkedési objektumot mozgási funkcióval
- **Elválasztja** az adatokat és a mozgási logikát egymástól

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

**A fentiekben:**
- **Kombináltuk** az alap objektumtulajdonságokat a mozgási viselkedéssel szórási szintaxis segítségével
- **Létrehoztunk** gyári függvényeket, amelyek testreszabott objektumokat adnak vissza
- **Lehetővé tettük** a rugalmas objektumkészítést merev osztályhierarchiák nélkül
- **Biztosítottuk**, hogy az objektumok pontosan a szükséges viselkedésekkel rendelkezzenek

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Fontos pontok:**
- **Komponálja** az objektumokat viselkedések keverésével, nem örökléssel
- **Nagyobb rugalmasságot** biztosít, mint a merev öröklési hierarchiák
- **Lehetővé teszi**, hogy az objektumok pontosan a szükséges funkciókkal rendelkezzenek
- **Modern JavaScript szórási szintaxist** használ a tiszta objektumkombinációhoz 
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

**Ami itt történik:**
- **Létrehoz** egy központi eseménykezelő rendszert egy egyszerű osztály segítségével
- **Tárolja** a hallgatókat egy objektumban, amelyet üzenettípus szerint szervez
- **Regisztrál** új hallgatókat az `on()` metódus segítségével
- **Közvetíti** az üzeneteket minden érdekelt hallgatónak az `emit()` segítségével
- **Támogatja** az opcionális adatcsomagokat a releváns információk továbbításához

### Minden összeáll: Egy gyakorlati példa

Rendben, nézzük meg ezt működés közben! Készítünk egy egyszerű mozgási rendszert, amely bemutatja, milyen tiszta és rugalmas lehet a pub/sub:

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

**Ez a kód:**
- **Meghatároz** egy konstans objektumot az üzenetnevek elírásának elkerülése érdekében
- **Létrehoz** egy eseménykibocsátó példányt az összes kommunikáció kezelésére
- **Inicializál** egy hős objektumot a kezdő pozícióban

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

**A fentiekben:**
- **Regisztráltunk** eseményhallgatókat, amelyek reagálnak a mozgási üzenetekre
- **Frissítettük** a hős pozícióját a mozgás irányának megfelelően
- **Hozzáadtunk** konzolnaplózást a hős pozícióváltozásainak nyomon követésére
- **Elválasztottuk** a mozgási logikát a bemeneti kezelésétől

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

**Ezeknek a koncepcióknak a megértése:**
- **Kapcsolja össze** a billentyűzet bemenetét a játék eseményeivel szoros összekapcsolás nélkül
- **Lehetővé teszi**, hogy a bemeneti rendszer közvetetten kommunikáljon a játékobjektumokkal
- **Lehetővé teszi**, hogy több rendszer reagáljon ugyanazokra a billentyűzet eseményekre
- **Egyszerűvé teszi** a billentyűkiosztás megváltoztatását vagy új bemeneti módszerek hozzáadását

> 💡 **Profi tipp**: Ennek a mintának a szépsége a rugalmasság! Könnyen hozzáadhatsz hanghatásokat, képernyőremegést vagy részecskeeffekteket, egyszerűen több eseményhallgatót hozzáadva – anélkül, hogy módosítanod kellene a meglévő billentyűzet- vagy mozgáskódot.
> 
**Ezért fogod szeretni ezt a megközelítést:**
- Új funkciók hozzáadása szuper egyszerűvé válik – csak hallgass azokra az eseményekre, amelyek érdekelnek
- Több dolog is reagálhat ugyanarra az eseményre anélkül, hogy zavarnák egymást
- A tesztelés sokkal egyszerűbbé válik, mert minden rész önállóan működik
- Ha valami elromlik, pontosan tudod, hol kell keresni

### Miért skálázható hatékonyan a Pub/Sub

A pub/sub minta egyszerűséget tart fenn, ahogy az alkalmazások bonyolultabbá válnak. Akár tucatnyi ellenséget, dinamikus UI frissítéseket vagy hangrendszereket kezel, a minta növekvő méret mellett is működik anélkül, hogy az architektúrát meg kellene változtatni. Az új funkciók integrálódnak a meglévő eseményrendszerbe anélkül, hogy befolyásolnák a már meglévő funkcionalitást.

> ⚠️ **Gyakori hiba**: Ne hozz létre túl sok specifikus üzenettípust már a kezdetekkor. Kezdj széles kategóriákkal, és finomítsd őket, ahogy a játékod igényei tisztázódnak.
> 
**Legjobb gyakorlatok:**
- **Csoportosítsd** a kapcsolódó üzeneteket logikai kategóriákba
- **Használj** leíró neveket, amelyek egyértelműen jelzik, mi történt
- **Tartsd** az üzenetcsomagokat egyszerűnek és fókuszáltnak
- **Dokumentáld** az üzenettípusokat a csapat együttműködése érdekében

---

## GitHub Copilot Agent kihívás 🚀

Használd az Agent módot a következő kihívás teljesítéséhez:

**Leírás:** Hozz létre egy egyszerű játékobjektum rendszert az öröklődés és a pub/sub minta használatával. Valósíts meg egy alapjátékot, ahol különböző objektumok eseményeken keresztül kommunikálnak anélkül, hogy közvetlenül ismernék egymást.

**Feladat:** Hozz létre egy JavaScript játék rendszert a következő követelményekkel: 1) Hozz létre egy alap GameObject osztályt x, y koordinátákkal és egy típus tulajdonsággal. 2) Hozz létre egy Hero osztályt, amely kiterjeszti a GameObject-et és képes mozogni. 3) Hozz létre egy Enemy osztályt, amely kiterjeszti a GameObject-et és képes üldözni a hőst. 4) Valósíts meg egy EventEmitter osztályt a pub/sub mintához. 5) Állíts be eseményhallgatókat, hogy amikor a hős mozog, a közeli ellenségek kapjanak egy 'HERO_MOVED' eseményt, és frissítsék pozíciójukat, hogy közelebb kerüljenek a hőshöz. Adj hozzá console.log állításokat, hogy megmutasd az objektumok közötti kommunikációt.

Tudj meg többet az [Agent módról](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) itt.

## 🚀 Kihívás

Gondold át, hogyan javíthatja a pub-sub minta a játék architektúráját. Azonosítsd, mely komponenseknek kell eseményeket kibocsátaniuk, és hogyan kell a rendszernek reagálnia. Tervezd meg egy játék koncepcióját, és térképezd fel a kommunikációs mintákat a komponensek között.

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/30)

## Áttekintés és önálló tanulás

Tudj meg többet a Pub/Sub-ról [itt olvasva](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Feladat

[Mock up egy játékot](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.