<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-28T04:03:04+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "cs"
}
-->
# Vytvořte vesmírnou hru, část 1: Úvod

![video](../../../../6-space-game/images/pewpew.gif)

## Kvíz před lekcí

[Kvíz před lekcí](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Dědičnost a kompozice ve vývoji her

V předchozích lekcích nebylo třeba příliš řešit návrhovou architekturu aplikací, které jste vytvářeli, protože projekty byly velmi malé. Jakmile však vaše aplikace rostou co do velikosti a rozsahu, stávají se architektonická rozhodnutí důležitějšími. Existují dva hlavní přístupy k vytváření větších aplikací v JavaScriptu: *kompozice* nebo *dědičnost*. Oba přístupy mají své výhody a nevýhody, ale pojďme si je vysvětlit v kontextu hry.

✅ Jedna z nejslavnějších knih o programování se zabývá [návrhovými vzory](https://en.wikipedia.org/wiki/Design_Patterns).

Ve hře máte `herní objekty`, což jsou objekty, které existují na obrazovce. To znamená, že mají umístění v kartézském souřadnicovém systému, charakterizované souřadnicemi `x` a `y`. Při vývoji hry si všimnete, že všechny vaše herní objekty mají standardní vlastnosti, které jsou společné pro každou hru, kterou vytvoříte, konkrétně prvky, které jsou:

- **založené na umístění** Většina, ne-li všechny herní prvky, jsou založené na umístění. To znamená, že mají souřadnice `x` a `y`.
- **pohyblivé** Jedná se o objekty, které se mohou přesunout na nové místo. Typicky jde o hrdinu, monstrum nebo NPC (nehratelnou postavu), ale například ne o statický objekt, jako je strom.
- **sebedestruktivní** Tyto objekty existují pouze po určitou dobu, než se nastaví k odstranění. Obvykle je to reprezentováno booleanem `dead` nebo `destroyed`, který signalizuje hernímu enginu, že tento objekt by již neměl být vykreslován.
- **s časovým omezením** 'Časové omezení' je typická vlastnost krátkodobých objektů. Typickým příkladem je text nebo grafický efekt, jako je exploze, který by měl být viditelný jen několik milisekund.

✅ Přemýšlejte o hře jako Pac-Man. Dokážete v této hře identifikovat čtyři výše uvedené typy objektů?

### Vyjádření chování

Vše, co jsme popsali výše, jsou chování, která mohou herní objekty mít. Jak je tedy zakódujeme? Toto chování můžeme vyjádřit jako metody spojené buď s třídami, nebo objekty.

**Třídy**

Myšlenkou je použít `třídy` ve spojení s `dědičností`, abychom přidali určité chování třídě.

✅ Dědičnost je důležitý koncept k pochopení. Přečtěte si více v [článku MDN o dědičnosti](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Vyjádřeno pomocí kódu, herní objekt může typicky vypadat takto:

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

✅ Věnujte pár minut tomu, abyste si představili hrdinu z Pac-Mana (například Inky, Pinky nebo Blinky) a jak by byl napsán v JavaScriptu.

**Kompozice**

Jiný způsob, jak řešit dědičnost objektů, je použití *kompozice*. Poté objekty vyjadřují své chování takto:

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

**Který vzor bych měl použít?**

Je na vás, který vzor si vyberete. JavaScript podporuje oba tyto přístupy.

--

Další vzor běžný ve vývoji her řeší problém správy uživatelského zážitku a výkonu hry.

## Vzor Pub/Sub

✅ Pub/Sub znamená 'publish-subscribe' (publikovat-odebírat)

Tento vzor se zabývá myšlenkou, že různé části vaší aplikace by o sobě neměly vědět. Proč? Protože je mnohem snazší pochopit, co se obecně děje, pokud jsou jednotlivé části oddělené. Také je snazší náhle změnit chování, pokud je to potřeba. Jak toho dosáhneme? Zavedením několika konceptů:

- **zpráva**: Zpráva je obvykle textový řetězec doplněný volitelným obsahem (daty, která upřesňují, o čem zpráva je). Typická zpráva ve hře může být `KEY_PRESSED_ENTER`.
- **vydavatel**: Tento prvek *publikuje* zprávu a odesílá ji všem odběratelům.
- **odběratel**: Tento prvek *naslouchá* konkrétním zprávám a provádí určitou akci v důsledku přijetí této zprávy, například vystřelení laseru.

Implementace je poměrně malá, ale jde o velmi silný vzor. Zde je ukázka, jak může být implementován:

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

Pro použití výše uvedeného kódu můžeme vytvořit velmi malou implementaci:

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

Výše propojujeme událost klávesnice, `ArrowLeft`, a odesíláme zprávu `HERO_MOVE_LEFT`. Nasloucháme této zprávě a v důsledku toho pohybujeme `hrdinou`. Síla tohoto vzoru spočívá v tom, že posluchač událostí a hrdina o sobě navzájem nevědí. Můžete přemapovat `ArrowLeft` na klávesu `A`. Navíc by bylo možné udělat něco úplně jiného na `ArrowLeft` provedením několika úprav funkce `on` v eventEmitteru:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Jakmile se vaše hra stane složitější, tento vzor zůstává stejně jednoduchý a váš kód zůstává čistý. Je opravdu doporučeno tento vzor přijmout.

---

## 🚀 Výzva

Přemýšlejte o tom, jak může vzor pub-sub vylepšit hru. Které části by měly emitovat události a jak by na ně měla hra reagovat? Teď máte šanci být kreativní a přemýšlet o nové hře a o tom, jak by se její části mohly chovat.

## Kvíz po lekci

[Kvíz po lekci](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Recenze a samostudium

Zjistěte více o Pub/Sub [přečtením tohoto článku](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Zadání

[Navrhněte koncept hry](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.