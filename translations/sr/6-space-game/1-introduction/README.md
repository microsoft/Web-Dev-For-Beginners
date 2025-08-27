<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-27T22:24:25+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "sr"
}
-->
# Изградња свемирске игре, део 1: Увод

![video](../../../../6-space-game/images/pewpew.gif)

## Квиз пре предавања

[Квиз пре предавања](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Наслеђивање и композиција у развоју игара

У претходним лекцијама није било потребе да се превише бринете о дизајнерској архитектури апликација које сте правили, јер су пројекти били веома малог обима. Међутим, када ваше апликације почну да расту у величини и обиму, архитектонске одлуке постају значајније. Постоје два главна приступа за креирање већих апликација у JavaScript-у: *композиција* или *наслеђивање*. Оба приступа имају своје предности и мане, али хајде да их објаснимо у контексту игре.

✅ Једна од најпознатијих књига о програмирању односи се на [шаблоне дизајна](https://en.wikipedia.org/wiki/Design_Patterns).

У игри имате `објекте игре`, који су објекти који постоје на екрану. То значи да имају локацију у картезијанском координатном систему, коју карактеришу `x` и `y` координате. Како развијате игру, приметићете да сви ваши објекти игре имају стандардна својства, заједничка за сваку игру коју креирате, а то су елементи који су:

- **засновани на локацији** Већина, ако не и сви, елементи игре су засновани на локацији. То значи да имају локацију, `x` и `y`.
- **покретни** Ово су објекти који могу да се померају на нову локацију. То је обично херој, чудовиште или NPC (неконтролисани лик), али не, на пример, статичан објекат као што је дрво.
- **самоуништавајући** Ови објекти постоје само одређено време пре него што се припреме за брисање. Обично је то представљено као `мртав` или `уништен` булеан који сигнализира игри да овај објекат више не треба да се приказује.
- **са временским ограничењем** 'Временско ограничење' је типично својство краткотрајних објеката. Типичан пример је комад текста или графички ефекат попут експлозије који треба да се види само неколико милисекунди.

✅ Размислите о игри као што је Pac-Man. Можете ли идентификовати четири типа објеката наведена изнад у овој игри?

### Изражавање понашања

Све што смо горе описали представља понашање које објекти игре могу имати. Како то можемо кодирати? Ово понашање можемо изразити као методе повезане са класама или објектима.

**Класе**

Идеја је да се користе `класе` у комбинацији са `наслеђивањем` како би се одређено понашање додало класи.

✅ Наслеђивање је важан концепт за разумевање. Сазнајте више у [MDN чланку о наслеђивању](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Изражено кроз код, објекат игре обично изгледа овако:

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

✅ Одвојите неколико минута да замислите Pac-Man хероја (на пример, Inky, Pinky или Blinky) и како би био написан у JavaScript-у.

**Композиција**

Други начин руковања наслеђивањем објеката је коришћењем *композиције*. Тада објекти изражавају своје понашање на следећи начин:

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

**Који шаблон треба да користим?**

На вама је да одлучите који шаблон ћете користити. JavaScript подржава оба ова парадигме.

--

Још један шаблон који је чест у развоју игара бави се проблемом управљања корисничким искуством и перформансама игре.

## Pub/sub шаблон

✅ Pub/Sub означава 'објави-претплати се'

Овај шаблон се бави идејом да различити делови ваше апликације не би требало да знају једни за друге. Зашто је то важно? Олакшава разумевање шта се генерално дешава ако су различити делови раздвојени. Такође олакшава изненадну промену понашања ако је то потребно. Како то постижемо? Успостављамо неке концепте:

- **порука**: Порука је обично текстуални низ праћен опционим садржајем (комадом података који појашњава о чему се ради у поруци). Типична порука у игри може бити `KEY_PRESSED_ENTER`.
- **издавач**: Овај елемент *објављује* поруку и шаље је свим претплатницима.
- **претплатник**: Овај елемент *слуша* одређене поруке и извршава неки задатак као резултат примања те поруке, као што је испаљивање ласера.

Имплементација је прилично мала по величини, али је веома моћан шаблон. Ево како може бити имплементиран:

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

Да бисмо користили горњи код, можемо направити веома малу имплементацију:

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

Горе повезујемо догађај са тастатуре, `ArrowLeft`, и шаљемо поруку `HERO_MOVE_LEFT`. Слушамо ту поруку и као резултат померамо `хероја`. Снага овог шаблона је у томе што слушач догађаја и херој не знају једно за друго. Можете променити `ArrowLeft` у тастер `A`. Поред тога, могуће је урадити нешто потпуно другачије на `ArrowLeft` прављењем неколико измена у функцији `on` објекта eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Како ствари постају сложеније када ваша игра расте, овај шаблон остаје исте сложености, а ваш код остаје чист. Препоручује се усвајање овог шаблона.

---

## 🚀 Изазов

Размислите о томе како Pub-Sub шаблон може побољшати игру. Који делови би требало да емитују догађаје, а како би игра требало да реагује на њих? Сада је ваша шанса да будете креативни, размишљајући о новој игри и како би њени делови могли да се понашају.

## Квиз после предавања

[Квиз после предавања](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Преглед и самостално учење

Сазнајте више о Pub/Sub шаблону [читајући о њему](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Задатак

[Направите макету игре](assignment.md)

---

**Одрицање од одговорности**:  
Овај документ је преведен коришћењем услуге за превођење помоћу вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако се трудимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати меродавним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.