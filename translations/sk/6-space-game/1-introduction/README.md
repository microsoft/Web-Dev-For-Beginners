<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-29T11:12:28+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie vesmírnej hry, časť 1: Úvod

![video](../../../../6-space-game/images/pewpew.gif)

## Kvíz pred prednáškou

[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/quiz/29)

### Dedičnosť a kompozícia vo vývoji hier

V predchádzajúcich lekciách nebolo potrebné venovať veľkú pozornosť návrhovej architektúre aplikácií, ktoré ste vytvorili, pretože projekty boli veľmi malé. Avšak, keď vaše aplikácie narastú vo veľkosti a rozsahu, rozhodnutia o architektúre sa stávajú dôležitejšími. Existujú dva hlavné prístupy k vytváraniu väčších aplikácií v JavaScripte: *kompozícia* alebo *dedičnosť*. Obe majú svoje výhody a nevýhody, ale poďme si ich vysvetliť v kontexte hry.

✅ Jedna z najznámejších kníh o programovaní sa zaoberá [návrhovými vzormi](https://en.wikipedia.org/wiki/Design_Patterns).

V hre máte `herné objekty`, ktoré sú objekty existujúce na obrazovke. To znamená, že majú polohu v karteziánskom súradnicovom systéme, charakterizovanú súradnicami `x` a `y`. Pri vývoji hry si všimnete, že všetky vaše herné objekty majú štandardné vlastnosti, spoločné pre každú hru, ktorú vytvoríte, konkrétne prvky, ktoré sú:

- **založené na polohe** Väčšina, ak nie všetky, herné prvky sú založené na polohe. To znamená, že majú polohu, `x` a `y`.
- **pohyblivé** Sú to objekty, ktoré sa môžu presunúť na nové miesto. Typicky ide o hrdinu, monštrum alebo NPC (nehráčsku postavu), ale nie napríklad o statický objekt ako strom.
- **samodeštrukčné** Tieto objekty existujú len určitý čas, kým sa nenastavia na vymazanie. Zvyčajne je to reprezentované booleanom `dead` alebo `destroyed`, ktorý signalizuje hernému enginu, že tento objekt by sa už nemal vykresľovať.
- **s časovým obmedzením** 'Časové obmedzenie' je typická vlastnosť krátkodobých objektov. Typickým príkladom je text alebo grafický efekt, ako je explózia, ktorý by mal byť viditeľný len niekoľko milisekúnd.

✅ Premýšľajte o hre ako Pac-Man. Dokážete identifikovať štyri vyššie uvedené typy objektov v tejto hre?

### Vyjadrenie správania

Všetko, čo sme vyššie opísali, sú správania, ktoré môžu mať herné objekty. Ako ich teda zakódujeme? Toto správanie môžeme vyjadriť ako metódy priradené buď ku triedam alebo objektom.

**Triedy**

Myšlienka je použiť `triedy` v kombinácii s `dedičnosťou`, aby sme pridali určité správanie do triedy.

✅ Dedičnosť je dôležitý koncept na pochopenie. Viac sa dozviete v [článku MDN o dedičnosti](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Vyjadrené kódom, herný objekt môže typicky vyzerať takto:

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

✅ Venujte pár minút tomu, aby ste si predstavili hrdinu z Pac-Mana (napríklad Inky, Pinky alebo Blinky) a ako by bol napísaný v JavaScripte.

**Kompozícia**

Iný spôsob riešenia dedičnosti objektov je použitie *kompozície*. Potom objekty vyjadrujú svoje správanie takto:

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

**Ktorý vzor by som mal použiť?**

Je na vás, ktorý vzor si vyberiete. JavaScript podporuje oba tieto paradigmy.

--

Ďalší vzor, bežný vo vývoji hier, rieši problém správy používateľského zážitku a výkonu hry.

## Vzor Pub/Sub

✅ Pub/Sub znamená 'publish-subscribe' (publikovanie-odber).

Tento vzor rieši myšlienku, že rôzne časti vašej aplikácie by o sebe nemali vedieť. Prečo? Umožňuje to jednoduchšie pochopiť, čo sa deje vo všeobecnosti, ak sú rôzne časti oddelené. Tiež to uľahčuje náhle zmeny správania, ak je to potrebné. Ako to dosiahneme? Zavedením niekoľkých konceptov:

- **správa**: Správa je zvyčajne textový reťazec sprevádzaný voliteľným obsahom (údajmi, ktoré objasňujú, o čom správa je). Typická správa v hre môže byť `KEY_PRESSED_ENTER`.
- **vydavateľ**: Tento prvok *publikuje* správu a posiela ju všetkým odberateľom.
- **odberateľ**: Tento prvok *počúva* konkrétne správy a vykonáva určitú úlohu ako výsledok prijatia tejto správy, napríklad vystrelenie lasera.

Implementácia je pomerne malá, ale ide o veľmi silný vzor. Tu je, ako môže byť implementovaný:

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

Na použitie vyššie uvedeného kódu môžeme vytvoriť veľmi malú implementáciu:

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

Vyššie sme pripojili udalosť klávesnice, `ArrowLeft`, a poslali správu `HERO_MOVE_LEFT`. Počúvame túto správu a ako výsledok presunieme `hrdinu`. Silou tohto vzoru je, že poslucháč udalostí a hrdina o sebe nevedia. Môžete premapovať `ArrowLeft` na kláves `A`. Navyše by bolo možné urobiť niečo úplne iné na `ArrowLeft` jednoduchými úpravami funkcie `on` v eventEmitteri:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Keď sa veci komplikujú, keď vaša hra rastie, tento vzor zostáva rovnako zložitý a váš kód zostáva čistý. Je naozaj odporúčané prijať tento vzor.

---

## 🚀 Výzva

Premýšľajte o tom, ako môže vzor pub-sub zlepšiť hru. Ktoré časti by mali vysielať udalosti a ako by na ne mala hra reagovať? Teraz máte šancu byť kreatívni a premýšľať o novej hre a o tom, ako by sa jej časti mohli správať.

## Kvíz po prednáške

[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/30)

## Prehľad a samoštúdium

Dozviete sa viac o Pub/Sub [čítaním o ňom](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Zadanie

[Navrhnite hru](assignment.md)

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby na automatický preklad [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, upozorňujeme, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre dôležité informácie sa odporúča profesionálny ľudský preklad. Nezodpovedáme za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.