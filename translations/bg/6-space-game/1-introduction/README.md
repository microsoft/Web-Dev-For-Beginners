<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-24T22:56:30+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "bg"
}
-->
# Създаване на космическа игра Част 1: Въведение

![Анимация на космическа игра, показваща геймплей](../../../../6-space-game/images/pewpew.gif)

Точно както контролът на мисията на НАСА координира множество системи по време на космически полет, ние ще създадем космическа игра, която демонстрира как различни части на една програма могат да работят заедно безпроблемно. Докато създавате нещо, което наистина можете да играете, ще научите основни концепции за програмиране, които се прилагат към всеки софтуерен проект.

Ще разгледаме два основни подхода за организиране на код: наследяване и композиция. Това не са просто академични концепции – те са същите модели, които задвижват всичко, от видеоигри до банкови системи. Също така ще внедрим система за комуникация, наречена pub/sub, която работи като комуникационните мрежи, използвани в космическите кораби, позволявайки на различни компоненти да споделят информация без да създават зависимости.

До края на тази серия ще разберете как да изграждате приложения, които могат да се мащабират и развиват – независимо дали разработвате игри, уеб приложения или друг софтуер.

## Предварителен тест

[Предварителен тест](https://ff-quizzes.netlify.app/web/quiz/29)

## Наследяване и композиция в разработката на игри

С увеличаването на сложността на проектите, организацията на кода става критична. Това, което започва като прост скрипт, може да стане трудно за поддръжка без подходяща структура – подобно на това как мисиите на Аполо изискват внимателна координация между хиляди компоненти.

Ще разгледаме два основни подхода за организиране на код: наследяване и композиция. Всеки от тях има своите предимства, а разбирането на двата подхода ще ви помогне да изберете правилния за различни ситуации. Ще демонстрираме тези концепции чрез нашата космическа игра, където герои, врагове, бонуси и други обекти трябва да взаимодействат ефективно.

✅ Една от най-известните книги за програмиране е свързана с [дизайнерски модели](https://en.wikipedia.org/wiki/Design_Patterns).

Във всяка игра има `игрови обекти` – интерактивните елементи, които населяват игровия свят. Героите, враговете, бонусите и визуалните ефекти са всички игрови обекти. Всеки от тях съществува на определени координати на екрана, използвайки стойности `x` и `y`, подобно на поставянето на точки върху координатна равнина.

Въпреки визуалните си различия, тези обекти често споделят основни поведения:

- **Те съществуват някъде** – Всеки обект има x и y координати, за да знае играта къде да го нарисува
- **Много от тях могат да се движат** – Героите тичат, враговете преследват, куршумите летят по екрана
- **Те имат живот** – Някои остават завинаги, други (като експлозиите) се появяват за кратко и изчезват
- **Те реагират на неща** – Когато нещата се сблъскват, бонусите се събират, здравните ленти се обновяват

✅ Помислете за игра като Pac-Man. Можете ли да идентифицирате четирите типа обекти, изброени по-горе, в тази игра?

### Изразяване на поведение чрез код

Сега, когато разбирате общите поведения, които споделят игровите обекти, нека разгледаме как да внедрим тези поведения в JavaScript. Можете да изразите поведението на обектите чрез методи, прикрепени към класове или индивидуални обекти, и има няколко подхода, от които да избирате.

**Подход, базиран на класове**

Класовете и наследяването предоставят структурирано решение за организиране на игровите обекти. Подобно на таксономичната класификационна система, разработена от Карл Линей, започвате с базов клас, съдържащ общи свойства, след което създавате специализирани класове, които наследяват тези основи, като добавят специфични способности.

✅ Наследяването е важна концепция за разбиране. Научете повече от [статията на MDN за наследяването](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Ето как можете да внедрите игрови обекти, използвайки класове и наследяване:

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

**Нека разгледаме това стъпка по стъпка:**
- Създаваме основен шаблон, който всеки игрови обект може да използва
- Конструкторът запазва местоположението на обекта (`x`, `y`) и какъв тип е той
- Това става основата, върху която ще се изграждат всички ваши игрови обекти

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

**В горното сме:**
- **Разширили** класа GameObject, за да добавим функционалност за движение
- **Извикали** родителския конструктор, използвайки `super()`, за да инициализираме наследените свойства
- **Добавили** метод `moveTo()`, който обновява позицията на обекта

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

**Разбиране на тези концепции:**
- **Създава** специализирани типове обекти, които наследяват подходящи поведения
- **Демонстрира** как наследяването позволява селективно включване на функции
- **Показва**, че героите могат да се движат, докато дърветата остават неподвижни
- **Илюстрира** как йерархията на класовете предотвратява неподходящи действия

✅ Отделете няколко минути, за да си представите герой от Pac-Man (например Inky, Pinky или Blinky) и как би изглеждал в JavaScript.

**Подходът на композиция**

Композицията следва философията на модулния дизайн, подобно на това как инженерите проектират космически кораби с взаимозаменяеми компоненти. Вместо да наследявате от родителски клас, комбинирате специфични поведения, за да създадете обекти с точно необходимата функционалност. Този подход предлага гъвкавост без твърди йерархични ограничения.

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

**Ето какво прави този код:**
- **Определя** базов `gameObject` с свойства за позиция и тип
- **Създава** отделен обект за поведение `movable` с функционалност за движение
- **Разделя** отговорностите, като държи данните за позицията и логиката за движение независими

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

**В горното сме:**
- **Комбинирали** основните свойства на обекта с поведението за движение, използвайки синтаксис за разпръскване
- **Създали** фабрични функции, които връщат персонализирани обекти
- **Позволили** гъвкаво създаване на обекти без твърди йерархии на класовете
- **Позволили** на обектите да имат точно необходимите им поведения

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Основни точки за запомняне:**
- **Комбинира** обекти чрез смесване на поведения, вместо да ги наследява
- **Осигурява** повече гъвкавост от твърдите йерархии на наследяване
- **Позволява** на обектите да имат точно необходимите им функции
- **Използва** модерен синтаксис за разпръскване в JavaScript за чисто комбиниране на обекти 
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

**Разглеждане на това, което се случва тук:**
- **Създава** централизирана система за управление на събития, използвайки прост клас
- **Съхранява** слушатели в обект, организиран по тип съобщение
- **Регистрира** нови слушатели, използвайки метода `on()`
- **Излъчва** съобщения към всички заинтересовани слушатели, използвайки `emit()`
- **Поддържа** опционални данни за предаване на релевантна информация

### Съчетаване на всичко: Практически пример

Добре, нека видим това в действие! Ще създадем проста система за движение, която показва колко чист и гъвкав може да бъде pub/sub:

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

**Ето какво прави този код:**
- **Определя** обект с константи, за да предотврати грешки при имената на съобщенията
- **Създава** инстанция на event emitter за управление на цялата комуникация
- **Инициализира** герой на начална позиция

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

**В горното сме:**
- **Регистрирали** слушатели на събития, които реагират на съобщения за движение
- **Обновили** позицията на героя въз основа на посоката на движение
- **Добавили** логове в конзолата, за да следим промените в позицията на героя
- **Разделили** логиката за движение от обработката на входа

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

**Разбиране на тези концепции:**
- **Свързва** входа от клавиатурата със събитията в играта без силно свързване
- **Позволява** на системата за вход да комуникира с игровите обекти индиректно
- **Позволява** множество системи да реагират на едни и същи събития от клавиатурата
- **Улеснява** промяната на клавишните комбинации или добавянето на нови методи за вход

> 💡 **Полезен съвет**: Красотата на този модел е в неговата гъвкавост! Можете лесно да добавите звукови ефекти, трептене на екрана или частици, като просто добавите още слушатели на събития – без да се налага да променяте съществуващия код за клавиатура или движение.
> 
**Ето защо ще харесате този подход:**
- Добавянето на нови функции става изключително лесно – просто слушайте събитията, които ви интересуват
- Множество неща могат да реагират на едно и също събитие, без да си пречат
- Тестването става много по-лесно, защото всяка част работи независимо
- Когато нещо се обърка, знаете точно къде да търсите

### Защо Pub/Sub мащабира ефективно

Моделът pub/sub запазва простотата, докато приложенията стават по-сложни. Независимо дали управлявате десетки врагове, динамични актуализации на потребителския интерфейс или звукови системи, моделът се справя с увеличаването на мащаба без архитектурни промени. Новите функции се интегрират в съществуващата система за събития, без да засягат установената функционалност.

> ⚠️ **Честа грешка**: Не създавайте твърде много специфични типове съобщения в началото. Започнете с широки категории и ги уточнявайте, когато нуждите на играта станат по-ясни.
> 
**Най-добри практики за следване:**
- **Групирайте** свързани съобщения в логически категории
- **Използвайте** описателни имена, които ясно показват какво се е случило
- **Поддържайте** простота и фокусираност на данните в съобщенията
- **Документирайте** типовете съобщения за сътрудничество в екипа

---

## Предизвикателство с GitHub Copilot Agent 🚀

Използвайте режим Agent, за да завършите следното предизвикателство:

**Описание:** Създайте проста система за игрови обекти, използвайки както наследяване, така и модела pub/sub. Ще внедрите основна игра, в която различни обекти могат да комуникират чрез събития, без да знаят директно един за друг.

**Задача:** Създайте система за игра на JavaScript със следните изисквания: 1) Създайте базов клас GameObject с x, y координати и свойство за тип. 2) Създайте клас Hero, който разширява GameObject и може да се движи. 3) Създайте клас Enemy, който разширява GameObject и може да преследва героя. 4) Внедрете клас EventEmitter за модела pub/sub. 5) Настройте слушатели на събития, така че когато героят се движи, близките врагове да получават събитие 'HERO_MOVED' и да обновяват позицията си, за да се придвижат към героя. Включете console.log изявления, за да покажете комуникацията между обектите.

Научете повече за [режим Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) тук.

## 🚀 Предизвикателство

Помислете как моделът pub-sub може да подобри архитектурата на играта. Идентифицирайте кои компоненти трябва да излъчват събития и как системата трябва да реагира. Проектирайте концепция за игра и начертайте комуникационните модели между нейните компоненти.

## Следлекционен тест

[Следлекционен тест](https://ff-quizzes.netlify.app/web/quiz/30)

## Преглед и самостоятелно обучение

Научете повече за Pub/Sub, като [прочетете за него](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Задание

[Създайте макет на игра](assignment.md)

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматизираните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия роден език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален човешки превод. Ние не носим отговорност за недоразумения или погрешни интерпретации, произтичащи от използването на този превод.