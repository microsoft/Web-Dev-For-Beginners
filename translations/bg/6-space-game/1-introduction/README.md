<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-27T22:24:02+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "bg"
}
-->
# Създаване на космическа игра Част 1: Въведение

![видео](../../../../6-space-game/images/pewpew.gif)

## Предварителен тест

[Предварителен тест](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29)

### Наследяване и композиция в разработката на игри

В предишните уроци не беше необходимо да се замисляте много за архитектурата на приложенията, които създавахте, тъй като проектите бяха с малък обхват. Но когато приложенията ви нарастват по размер и сложност, архитектурните решения стават по-важни. Има два основни подхода за създаване на по-големи приложения в JavaScript: *композиция* или *наследяване*. И двата подхода имат своите предимства и недостатъци, но нека ги обясним в контекста на игра.

✅ Една от най-известните книги за програмиране е свързана с [дизайн модели](https://en.wikipedia.org/wiki/Design_Patterns).

В една игра имате `обекти на играта`, които са обекти, съществуващи на екрана. Това означава, че те имат местоположение в декартова координатна система, характеризирано с `x` и `y` координати. Докато разработвате игра, ще забележите, че всички обекти на играта имат стандартни свойства, общи за всяка игра, която създавате, а именно елементи, които са:

- **базирани на местоположение** Повечето, ако не всички, елементи на играта са базирани на местоположение. Това означава, че те имат местоположение, `x` и `y`.
- **подвижни** Това са обекти, които могат да се преместят на ново местоположение. Обикновено това е герой, чудовище или NPC (неигрови персонаж), но не например статичен обект като дърво.
- **самоунищожаващи се** Това са обекти, които съществуват само за определен период от време, преди да се подготвят за изтриване. Обикновено това се представя чрез булева стойност `dead` или `destroyed`, която сигнализира на игровия двигател, че този обект вече не трябва да се визуализира.
- **с временно ограничение** 'Временно ограничение' е типично свойство за краткотрайни обекти. Типичен пример е текст или графичен ефект като експлозия, който трябва да се вижда само за няколко милисекунди.

✅ Помислете за игра като Pac-Man. Можете ли да идентифицирате четирите типа обекти, изброени по-горе, в тази игра?

### Изразяване на поведение

Всичко, което описахме по-горе, представлява поведение, което обектите на играта могат да имат. Как можем да кодираме това? Можем да изразим това поведение като методи, свързани с класове или обекти.

**Класове**

Идеята е да използваме `класове` в комбинация с `наследяване`, за да добавим определено поведение към даден клас.

✅ Наследяването е важна концепция за разбиране. Научете повече от [статията на MDN за наследяване](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Изразено чрез код, обект на играта обикновено изглежда така:

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

✅ Отделете няколко минути, за да си представите герой от Pac-Man (например Inky, Pinky или Blinky) и как би изглеждал в JavaScript.

**Композиция**

Друг начин за управление на наследяването на обекти е чрез използване на *композиция*. Тогава обектите изразяват своето поведение по следния начин:

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

**Кой модел да използвам?**

Изборът зависи от вас. JavaScript поддържа и двата подхода.

--

Друг модел, често срещан в разработката на игри, се занимава с проблема за управлението на потребителското изживяване и производителността на играта.

## Модел Pub/sub

✅ Pub/Sub означава 'публикуване-абониране'

Този модел разглежда идеята, че различните части на вашето приложение не трябва да знаят една за друга. Защо? Това прави много по-лесно да се разбере какво се случва като цяло, ако различните части са разделени. Също така улеснява внезапната промяна на поведението, ако е необходимо. Как постигаме това? Чрез установяване на някои концепции:

- **съобщение**: Съобщението обикновено е текстов низ, придружен от опционален полезен товар (част от данни, която уточнява за какво е съобщението). Типично съобщение в игра може да бъде `KEY_PRESSED_ENTER`.
- **публикуващ**: Този елемент *публикува* съобщение и го изпраща до всички абонати.
- **абонат**: Този елемент *слуша* конкретни съобщения и изпълнява определена задача в резултат на получаването на това съобщение, като например изстрелване на лазер.

Реализацията е доста малка по размер, но това е много мощен модел. Ето как може да бъде реализиран:

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

За да използваме горния код, можем да създадем много малка реализация:

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

Горе свързваме събитие от клавиатурата, `ArrowLeft`, и изпращаме съобщението `HERO_MOVE_LEFT`. Слушаме това съобщение и преместваме `hero` в резултат. Силата на този модел е, че слушателят на събития и героят не знаят един за друг. Можете да пренасочите `ArrowLeft` към клавиша `A`. Освен това е възможно да направите нещо напълно различно при `ArrowLeft`, като направите няколко редакции на функцията `on` на eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Когато нещата станат по-сложни с разрастването на играта ви, този модел остава със същата сложност, а кодът ви остава чист. Силно се препоръчва да възприемете този модел.

---

## 🚀 Предизвикателство

Помислете как моделът pub-sub може да подобри играта. Кои части трябва да излъчват събития и как играта трябва да реагира на тях? Сега е вашият шанс да бъдете креативни, като измислите нова игра и как нейните части могат да се държат.

## Финален тест

[Финален тест](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30)

## Преглед и самостоятелно обучение

Научете повече за Pub/Sub, като [прочетете за него](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Задание

[Създайте макет на игра](assignment.md)

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматизираните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия роден език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален човешки превод. Ние не носим отговорност за недоразумения или погрешни интерпретации, произтичащи от използването на този превод.