<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-10-11T12:14:32+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "et"
}
-->
# Kosmosemängu loomine, 1. osa: Sissejuhatus

![video](../../../../6-space-game/images/pewpew.gif)

## Eelloengu viktoriin

[Eelloengu viktoriin](https://ff-quizzes.netlify.app/web/quiz/29)

### Pärimine ja kompositsioon mänguarenduses

Varasemates tundides ei olnud vaja palju muretseda rakenduste arhitektuuri kujundamise pärast, kuna projektid olid väga väikese ulatusega. Kuid kui rakendused kasvavad suuruse ja ulatuse poolest, muutuvad arhitektuurilised otsused olulisemaks. JavaScriptis on suuremate rakenduste loomiseks kaks peamist lähenemisviisi: *kompositsioon* või *pärimine*. Mõlemal on omad plussid ja miinused, kuid selgitame neid mängu kontekstis.

✅ Üks kuulsamaid programmeerimisraamatuid räägib [disainimustritest](https://en.wikipedia.org/wiki/Design_Patterns).

Mängus on `mänguobjektid`, mis on ekraanil eksisteerivad objektid. See tähendab, et neil on asukoht kaardil, mida iseloomustavad `x` ja `y` koordinaadid. Mängu arendades märkad, et kõigil mänguobjektidel on standardne omadus, mis on ühine igale mängule, nimelt elemendid, mis on:

- **asukohapõhised** Enamik, kui mitte kõik, mänguelemendid on asukohapõhised. See tähendab, et neil on asukoht, `x` ja `y`.
- **liikuvad** Need on objektid, mis saavad liikuda uude asukohta. Tavaliselt on need kangelased, koletised või NPC-d (mitte-mängija tegelased), kuid mitte näiteks staatilised objektid nagu puud.
- **isehävitavad** Need objektid eksisteerivad ainult teatud aja jooksul, enne kui nad end kustutamiseks ette valmistavad. Tavaliselt esindab seda `dead` või `destroyed` boolean, mis annab mängumootorile märku, et seda objekti ei tohiks enam renderdada.
- **jahtumisaeg** 'Jahtumisaeg' on tüüpiline omadus lühiajaliste objektide seas. Tüüpiline näide on tekst või graafiline efekt, nagu plahvatus, mida peaks nägema vaid mõne millisekundi jooksul.

✅ Mõtle mängule nagu Pac-Man. Kas suudad tuvastada neli ülaltoodud objektitüüpi selles mängus?

### Käitumise väljendamine

Kõik, mida me ülal kirjeldasime, on käitumised, mida mänguobjektid võivad omada. Kuidas me neid kodeerime? Me saame väljendada seda käitumist meetoditena, mis on seotud kas klasside või objektidega.

**Klassid**

Idee on kasutada `klasse` koos `pärimisega`, et lisada klassile teatud käitumine.

✅ Pärimine on oluline kontseptsioon, mida mõista. Loe rohkem [MDN-i artiklist pärimise kohta](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Koodis väljendatuna võib mänguobjekt tavaliselt välja näha selline:

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

✅ Võta paar minutit, et kujutada ette Pac-Mani kangelast (näiteks Inky, Pinky või Blinky) ja kuidas seda JavaScriptis kirjutada.

**Kompositsioon**

Teine viis objektide pärimise käsitlemiseks on kasutada *kompositsiooni*. Siis väljendavad objektid oma käitumist järgmiselt:

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

**Millist mustrit peaksin kasutama?**

Valik on sinu. JavaScript toetab mõlemat paradigmat.

--

Teine mänguarenduses levinud muster käsitleb mängu kasutajakogemuse ja jõudluse haldamise probleemi.

## Pub/sub muster

✅ Pub/Sub tähistab 'publish-subscribe' (avaldamine-tellimine).

See muster käsitleb ideed, et sinu rakenduse erinevad osad ei peaks üksteisest teadlikud olema. Miks? See muudab üldise ülevaate saamise palju lihtsamaks, kui erinevad osad on eraldatud. Samuti muudab see käitumise äkilise muutmise lihtsamaks, kui seda vaja on. Kuidas me seda saavutame? Me teeme seda, luues mõned kontseptsioonid:

- **sõnum**: Sõnum on tavaliselt tekstistring, millele on lisatud valikuline sisu (andmed, mis selgitavad, millest sõnum räägib). Tüüpiline sõnum mängus võib olla `KEY_PRESSED_ENTER`.
- **avaldaja**: See element *avaldab* sõnumi ja saadab selle kõigile tellijatele.
- **tellija**: See element *kuulab* konkreetseid sõnumeid ja täidab selle sõnumi vastuvõtmise tulemusena mingi ülesande, näiteks laseb laserit.

Rakendus on küll väike, kuid muster on väga võimas. Siin on, kuidas seda saab rakendada:

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

Ülaltoodud koodi kasutamiseks saame luua väga väikese rakenduse:

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

Ülal ühendame klaviatuuri sündmuse, `ArrowLeft`, ja saadame `HERO_MOVE_LEFT` sõnumi. Kuulame seda sõnumit ja liigutame selle tulemusena `kangelast`. Selle mustri tugevus seisneb selles, et sündmuste kuulaja ja kangelane ei tea üksteisest. Sa saad `ArrowLeft` ümber kaardistada `A` klahvile. Lisaks oleks võimalik teha `ArrowLeft`-iga midagi täiesti erinevat, tehes mõned muudatused eventEmitteri `on` funktsioonis:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Kui asjad muutuvad keerulisemaks, kui sinu mäng kasvab, jääb see muster sama keerukuse tasemele ja sinu kood jääb puhtaks. Seda mustrit on tõesti soovitatav kasutada.

---

## 🚀 Väljakutse

Mõtle, kuidas pub-sub muster võiks mängu täiustada. Millised osad peaksid sündmusi avaldama ja kuidas peaks mäng neile reageerima? Nüüd on sinu võimalus olla loov, mõeldes välja uue mängu ja kuidas selle osad võiksid käituda.

## Järelloengu viktoriin

[Järelloengu viktoriin](https://ff-quizzes.netlify.app/web/quiz/30)

## Ülevaade ja iseseisev õppimine

Õpi pub/sub mustri kohta rohkem, [lugedes selle kohta](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Ülesanne

[Mock up a game](assignment.md)

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.