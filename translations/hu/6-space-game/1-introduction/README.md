<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-28T04:02:39+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "hu"
}
-->
# Űrjáték készítése 1. rész: Bevezetés

![video](../../../../6-space-game/images/pewpew.gif)

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Öröklődés és kompozíció a játékfejlesztésben

Korábbi leckékben nem volt szükség az alkalmazások tervezési architektúrájának mélyebb átgondolására, mivel a projektek nagyon kis méretűek voltak. Azonban, ahogy az alkalmazások mérete és összetettsége növekszik, az architekturális döntések egyre fontosabbá válnak. Két fő megközelítés létezik nagyobb alkalmazások létrehozására JavaScriptben: *kompozíció* vagy *öröklődés*. Mindkettőnek vannak előnyei és hátrányai, de nézzük meg őket egy játék kontextusában.

✅ Az egyik leghíresebb programozási könyv a [tervezési mintákról](https://en.wikipedia.org/wiki/Design_Patterns) szól.

Egy játékban vannak `játékobjektumok`, amelyek a képernyőn létező objektumok. Ez azt jelenti, hogy van helyük egy derékszögű koordináta-rendszerben, amelyet egy `x` és `y` koordináta jellemez. Ahogy fejleszted a játékot, észre fogod venni, hogy minden játékobjektum rendelkezik egy standard tulajdonsággal, amely minden játékban közös, nevezetesen olyan elemekkel, amelyek:

- **helyalapúak** A legtöbb, ha nem minden, játékelem helyalapú. Ez azt jelenti, hogy van helyük, egy `x` és `y`.
- **mozgathatóak** Ezek olyan objektumok, amelyek új helyre tudnak mozogni. Ez általában egy hős, egy szörny vagy egy NPC (nem játékos karakter), de például nem egy statikus objektum, mint egy fa.
- **önmegsemmisítőek** Ezek az objektumok csak egy meghatározott ideig léteznek, mielőtt törlésre kerülnek. Általában ezt egy `halott` vagy `megsemmisült` logikai érték jelzi, amely azt mutatja a játékmotornak, hogy ezt az objektumot már nem kell megjeleníteni.
- **lehűlési idővel rendelkeznek** A 'lehűlési idő' tipikus tulajdonság a rövid életű objektumok között. Egy tipikus példa egy szövegrészlet vagy grafikai effekt, mint például egy robbanás, amelyet csak néhány milliszekundumig kell látni.

✅ Gondolj egy játékra, mint például a Pac-Man. Fel tudod ismerni a fent felsorolt négy objektumtípust ebben a játékban?

### Viselkedés kifejezése

Minden, amit fent leírtunk, olyan viselkedés, amelyet a játékobjektumok birtokolhatnak. Hogyan kódoljuk ezeket? Ezt a viselkedést osztályokhoz vagy objektumokhoz társított metódusokként fejezhetjük ki.

**Osztályok**

Az ötlet az, hogy `osztályokat` használjunk az `öröklődéssel` együtt, hogy egy bizonyos viselkedést hozzáadjunk egy osztályhoz.

✅ Az öröklődés egy fontos fogalom, amit érdemes megérteni. Tudj meg többet az [MDN öröklődésről szóló cikkéből](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Kód formájában kifejezve egy játékobjektum általában így nézhet ki:

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

✅ Szánj néhány percet arra, hogy újragondolj egy Pac-Man hőst (például Inky, Pinky vagy Blinky), és hogyan lehetne JavaScriptben megírni.

**Kompozíció**

Az objektumöröklődés kezelésének másik módja a *kompozíció* használata. Ekkor az objektumok így fejezik ki viselkedésüket:

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

**Melyik mintát válasszam?**

Rajtatok múlik, melyik mintát választjátok. A JavaScript mindkét paradigmát támogatja.

--

Egy másik, játékfejlesztésben gyakori minta a játék felhasználói élményének és teljesítményének kezelésére szolgál.

## Pub/sub minta

✅ A Pub/Sub jelentése 'publish-subscribe' (közzététel-feliratkozás)

Ez a minta azt az elképzelést valósítja meg, hogy az alkalmazás különböző részei ne ismerjék egymást. Miért van ez így? Ezáltal sokkal könnyebb átlátni, mi történik általánosságban, ha a különböző részek el vannak választva. Emellett könnyebb hirtelen megváltoztatni a viselkedést, ha szükséges. Hogyan érhetjük ezt el? Néhány fogalom bevezetésével:

- **üzenet**: Az üzenet általában egy szöveges karakterlánc, amelyhez opcionálisan egy adatcsomag (payload) társul, amely tisztázza, miről szól az üzenet. Egy tipikus üzenet egy játékban lehet például `KEY_PRESSED_ENTER`.
- **közzétevő**: Ez az elem *közzétesz* egy üzenetet, és elküldi azt minden feliratkozónak.
- **feliratkozó**: Ez az elem *figyel* bizonyos üzenetekre, és valamilyen feladatot hajt végre az üzenet fogadásának eredményeként, például lézert lő ki.

A megvalósítás mérete kicsi, de nagyon erős minta. Így lehet megvalósítani:

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

A fenti kódot használva létrehozhatunk egy nagyon kicsi implementációt:

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

A fentiekben összekapcsolunk egy billentyűzet eseményt, `ArrowLeft`, és elküldjük a `HERO_MOVE_LEFT` üzenetet. Figyelünk erre az üzenetre, és ennek eredményeként mozgatjuk a `hőst`. Ennek a mintának az ereje abban rejlik, hogy az eseményfigyelő és a hős nem ismerik egymást. Át lehet térképezni az `ArrowLeft`-et az `A` billentyűre. Emellett lehetséges valami teljesen mást csinálni az `ArrowLeft`-re, ha néhány módosítást végzünk az eventEmitter `on` függvényében:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Ahogy a játék bonyolultabbá válik, ez a minta ugyanazon a komplexitási szinten marad, és a kód tiszta marad. Nagyon ajánlott ezt a mintát alkalmazni.

---

## 🚀 Kihívás

Gondold át, hogyan javíthatja a pub-sub minta egy játékot. Mely részeknek kellene eseményeket kibocsátaniuk, és hogyan kellene a játéknak reagálnia rájuk? Most itt az alkalom, hogy kreatív legyél, és gondolj egy új játékra, valamint arra, hogyan viselkednének annak részei.

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Áttekintés és önálló tanulás

Tudj meg többet a Pub/Sub-ról [olvasd el róla](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Feladat

[Mock up egy játékot](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.