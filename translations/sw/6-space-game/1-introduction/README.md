<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-28T04:02:16+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 1: Utangulizi

![video](../../../../6-space-game/images/pewpew.gif)

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/29)

### Urithi na Muundo katika Utengenezaji wa Michezo

Katika masomo ya awali, hakukuwa na haja kubwa ya kufikiria kuhusu usanifu wa programu za programu ulizojenga, kwa kuwa miradi ilikuwa midogo kwa wigo. Hata hivyo, programu zako zinapokua kwa ukubwa na wigo, maamuzi ya usanifu yanakuwa muhimu zaidi. Kuna mbinu mbili kuu za kuunda programu kubwa katika JavaScript: *muundo* au *urithi*. Kuna faida na hasara kwa zote mbili, lakini hebu tuzieleze katika muktadha wa mchezo.

✅ Moja ya vitabu maarufu zaidi vya programu vilivyowahi kuandikwa inahusu [mifumo ya usanifu](https://en.wikipedia.org/wiki/Design_Patterns).

Katika mchezo, una `vitu vya mchezo` ambavyo ni vitu vinavyoonekana kwenye skrini. Hii inamaanisha vina eneo kwenye mfumo wa kuratibu wa Cartesian, unaojulikana kwa kuwa na kuratibu za `x` na `y`. Unapokua na mchezo, utagundua kuwa vitu vyote vya mchezo vina sifa za kawaida, zinazoshirikiana kwa kila mchezo unaounda, yaani vipengele ambavyo ni:

- **vinavyotegemea eneo** Karibu vitu vyote vya mchezo vinategemea eneo. Hii inamaanisha vina eneo, `x` na `y`.
- **vinavyohamishika** Hivi ni vitu vinavyoweza kuhamia eneo jipya. Kwa kawaida ni shujaa, mnyama au NPC (mhusika asiye mchezaji), lakini si kwa mfano, kitu kisichohamishika kama mti.
- **vinavyojiharibu** Vitu hivi vinaishi kwa muda maalum kabla ya kujiondoa. Kwa kawaida hii inawakilishwa na boolean ya `dead` au `destroyed` inayoiambia injini ya mchezo kuwa kitu hiki hakipaswi kuonyeshwa tena.
- **kupoa** 'Kupoa' ni sifa ya kawaida kati ya vitu vya muda mfupi. Mfano wa kawaida ni kipande cha maandishi au athari ya picha kama mlipuko ambao unapaswa kuonekana kwa milisekunde chache tu.

✅ Fikiria kuhusu mchezo kama Pac-Man. Je, unaweza kutambua aina nne za vitu vilivyoorodheshwa hapo juu katika mchezo huu?

### Kuelezea Tabia

Yote tuliyoelezea hapo juu ni tabia ambazo vitu vya mchezo vinaweza kuwa nazo. Kwa hivyo, tunaziwekaje kwenye msimbo? Tunaweza kuelezea tabia hizi kama mbinu zinazohusishwa na darasa au vitu.

**Darasa**

Wazo ni kutumia `darasa` pamoja na `urithi` ili kuongeza tabia fulani kwenye darasa.

✅ Urithi ni dhana muhimu kuelewa. Jifunze zaidi kupitia [makala ya MDN kuhusu urithi](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Ikiwa imeonyeshwa kupitia msimbo, kitu cha mchezo kinaweza kuonekana kama hivi:

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

✅ Chukua dakika chache kufikiria tena shujaa wa Pac-Man (Inky, Pinky au Blinky, kwa mfano) na jinsi ambavyo ingeandikwa katika JavaScript.

**Muundo**

Njia tofauti ya kushughulikia urithi wa vitu ni kwa kutumia *Muundo*. Kisha, vitu vinaelezea tabia zao kama hivi:

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

**Ni muundo upi unapaswa kutumia?**

Ni juu yako kuchagua muundo unaopendelea. JavaScript inasaidia paradigms zote mbili.

--

Muundo mwingine wa kawaida katika utengenezaji wa michezo unashughulikia tatizo la kushughulikia uzoefu wa mtumiaji wa mchezo na utendaji.

## Muundo wa Pub/Sub

✅ Pub/Sub inasimama kwa 'chapisha-jiandikishe'

Muundo huu unashughulikia wazo kwamba sehemu tofauti za programu yako hazipaswi kujua kuhusu kila moja. Kwa nini? Inafanya iwe rahisi zaidi kuona kinachoendelea kwa ujumla ikiwa sehemu mbalimbali zimetenganishwa. Pia inafanya iwe rahisi kubadilisha tabia ghafla ikiwa unahitaji. Tunafanikisha hili kwa kuanzisha dhana fulani:

- **ujumbe**: Ujumbe kwa kawaida ni mfuatano wa maandishi unaoambatana na mzigo wa hiari (kipande cha data kinachoeleza ujumbe unahusu nini). Ujumbe wa kawaida katika mchezo unaweza kuwa `KEY_PRESSED_ENTER`.
- **mchapishaji**: Kipengele hiki *huchapisha* ujumbe na kuutuma kwa wote waliojiandikisha.
- **mjiandikishaji**: Kipengele hiki *husikiliza* ujumbe maalum na hufanya kazi fulani kama matokeo ya kupokea ujumbe huu, kama vile kufyatua laser.

Utekelezaji ni mdogo kwa ukubwa lakini ni muundo wenye nguvu sana. Hivi ndivyo unavyoweza kutekelezwa:

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

Ili kutumia msimbo hapo juu tunaweza kuunda utekelezaji mdogo sana:

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

Hapo juu tunaunganisha tukio la kibodi, `ArrowLeft` na kutuma ujumbe wa `HERO_MOVE_LEFT`. Tunasikiliza ujumbe huo na kumsogeza `shujaa` kama matokeo. Nguvu ya muundo huu ni kwamba msikilizaji wa tukio na shujaa hawajui kuhusu kila mmoja. Unaweza kubadilisha `ArrowLeft` kuwa kitufe cha `A`. Zaidi ya hayo, inawezekana kufanya kitu tofauti kabisa kwenye `ArrowLeft` kwa kufanya mabadiliko machache kwenye kazi ya `on` ya eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Mambo yanapokuwa magumu zaidi wakati mchezo wako unakua, muundo huu hubaki sawa kwa ugumu na msimbo wako hubaki safi. Inapendekezwa sana kutumia muundo huu.

---

## 🚀 Changamoto

Fikiria jinsi muundo wa pub-sub unavyoweza kuboresha mchezo. Ni sehemu zipi zinapaswa kutoa matukio, na mchezo unapaswa kujibu vipi? Sasa ni nafasi yako kuwa mbunifu, ukifikiria mchezo mpya na jinsi sehemu zake zinaweza kuishi.

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/30)

## Mapitio na Kujisomea

Jifunze zaidi kuhusu Pub/Sub kwa [kusoma kuhusu hilo](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Kazi

[Chora mfano wa mchezo](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.