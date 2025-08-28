<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-28T11:38:41+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "lt"
}
-->
# Sukurkite kosminį žaidimą 1 dalis: Įvadas

![video](../../../../6-space-game/images/pewpew.gif)

## Prieš paskaitą: testas

[Prieš paskaitą: testas](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Paveldėjimas ir kompozicija žaidimų kūrime

Ankstesnėse pamokose nebuvo didelio poreikio rūpintis programų architektūra, nes projektai buvo labai nedideli. Tačiau, kai jūsų programos auga ir tampa sudėtingesnės, architektūriniai sprendimai tampa svarbesni. Yra du pagrindiniai būdai kurti didesnes programas JavaScript kalboje: *kompozicija* arba *paveldėjimas*. Abu turi savo privalumų ir trūkumų, tačiau paaiškinkime juos žaidimo kontekste.

✅ Viena garsiausių programavimo knygų yra susijusi su [projektavimo šablonais](https://en.wikipedia.org/wiki/Design_Patterns).

Žaidime turite `žaidimo objektus`, kurie yra objektai, egzistuojantys ekrane. Tai reiškia, kad jie turi vietą kartėzietinėje koordinačių sistemoje, apibūdinamą `x` ir `y` koordinatėmis. Kurdamas žaidimą pastebėsite, kad visi jūsų žaidimo objektai turi standartines savybes, bendras kiekvienam žaidimui, būtent elementus, kurie yra:

- **vietos pagrindu** Dauguma, jei ne visi, žaidimo elementai yra vietos pagrindu. Tai reiškia, kad jie turi vietą, `x` ir `y`.
- **judantys** Tai objektai, kurie gali judėti į naują vietą. Paprastai tai herojus, monstras arba NPC (ne žaidėjo personažas), bet ne, pavyzdžiui, statinis objektas, kaip medis.
- **sunaikinantys save** Šie objektai egzistuoja tik tam tikrą laiką, kol jie pasiruošia ištrynimui. Paprastai tai yra `dead` arba `destroyed` logine reikšme, kuri signalizuoja žaidimo varikliui, kad šio objekto nebereikia rodyti.
- **atsinaujinantys** 'Atsinaujinimas' yra tipiška savybė trumpalaikiams objektams. Tipiškas pavyzdys yra tekstas arba grafinis efektas, kaip sprogimas, kuris turėtų būti matomas tik kelias milisekundes.

✅ Pagalvokite apie žaidimą Pac-Man. Ar galite identifikuoti keturis aukščiau išvardintus objektų tipus šiame žaidime?

### Elgesio išreiškimas

Visa tai, ką aprašėme aukščiau, yra elgesys, kurį žaidimo objektai gali turėti. Taigi, kaip mes tai užkoduojame? Šį elgesį galime išreikšti kaip metodus, susijusius su klasėmis arba objektais.

**Klasės**

Idėja yra naudoti `klases` kartu su `paveldėjimu`, kad pridėtume tam tikrą elgesį klasei.

✅ Paveldėjimas yra svarbi sąvoka, kurią reikia suprasti. Sužinokite daugiau [MDN straipsnyje apie paveldėjimą](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Išreikšta per kodą, žaidimo objektas paprastai gali atrodyti taip:

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

✅ Skirkite kelias minutes, kad įsivaizduotumėte Pac-Man herojų (pavyzdžiui, Inky, Pinky ar Blinky) ir kaip jis būtų parašytas JavaScript kalba.

**Kompozicija**

Kitas būdas tvarkyti objektų paveldėjimą yra naudojant *kompoziciją*. Tada objektai išreiškia savo elgesį taip:

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

**Kokį šabloną turėčiau naudoti?**

Pasirinkimas priklauso nuo jūsų. JavaScript palaiko abu šiuos paradigmus.

--

Kitas šablonas, dažnai naudojamas žaidimų kūrime, sprendžia žaidimo naudotojo patirties ir našumo valdymo problemą.

## Pub/sub šablonas

✅ Pub/Sub reiškia 'publikuoti-prenumeruoti'

Šis šablonas sprendžia idėją, kad skirtingos jūsų programos dalys neturėtų žinoti viena apie kitą. Kodėl? Tai leidžia lengviau suprasti, kas vyksta apskritai, jei įvairios dalys yra atskirtos. Taip pat lengviau staiga pakeisti elgesį, jei to reikia. Kaip tai pasiekti? Tai darome įgyvendindami keletą sąvokų:

- **žinutė**: Žinutė paprastai yra tekstinė eilutė, lydima pasirinktinio duomenų paketo (duomenų, kurie paaiškina, apie ką yra žinutė). Tipiška žinutė žaidime gali būti `KEY_PRESSED_ENTER`.
- **publikuotojas**: Šis elementas *publikuoja* žinutę ir siunčia ją visiems prenumeratoriams.
- **prenumeratorius**: Šis elementas *klausosi* specifinių žinučių ir atlieka tam tikrą užduotį gavęs šią žinutę, pavyzdžiui, paleidžia lazerį.

Įgyvendinimas yra gana mažas, tačiau tai labai galingas šablonas. Štai kaip jis gali būti įgyvendintas:

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

Norėdami naudoti aukščiau pateiktą kodą, galime sukurti labai mažą įgyvendinimą:

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

Aukščiau mes sujungiame klaviatūros įvykį, `ArrowLeft`, ir siunčiame `HERO_MOVE_LEFT` žinutę. Mes klausomės tos žinutės ir judiname `herojų` kaip rezultatą. Šio šablono stiprybė yra ta, kad įvykio klausytojas ir herojus nežino vienas apie kitą. Galite perkelti `ArrowLeft` į `A` klavišą. Be to, būtų galima padaryti kažką visiškai kitokio su `ArrowLeft`, atlikus kelis pakeitimus eventEmitter funkcijoje `on`:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Kai jūsų žaidimas tampa sudėtingesnis, šis šablonas išlieka tokio pat sudėtingumo, o jūsų kodas išlieka švarus. Labai rekomenduojama naudoti šį šabloną.

---

## 🚀 Iššūkis

Pagalvokite, kaip pub-sub šablonas gali pagerinti žaidimą. Kurios dalys turėtų siųsti įvykius, o kaip žaidimas turėtų į juos reaguoti? Dabar turite galimybę būti kūrybingi, sugalvodami naują žaidimą ir kaip jo dalys galėtų elgtis.

## Po paskaitos: testas

[Po paskaitos: testas](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Apžvalga ir savarankiškas mokymasis

Sužinokite daugiau apie Pub/Sub [skaitydami apie tai](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Užduotis

[Maketuokite žaidimą](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.