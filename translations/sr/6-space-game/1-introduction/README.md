<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-24T23:42:13+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "sr"
}
-->
# Изградња свемирске игре, део 1: Увод

![Анимација свемирске игре која приказује игру](../../../../6-space-game/images/pewpew.gif)

Баш као што контролна мисија НАСА-е координира више система током лансирања свемирске летелице, ми ћемо направити свемирску игру која демонстрира како различити делови програма могу беспрекорно да раде заједно. Док креирате нешто што заиста можете играти, научићете основне концепте програмирања који се примењују на било који софтверски пројекат.

Истражићемо два основна приступа организовању кода: наслеђивање и композицију. Ово нису само академски концепти – то су исти обрасци који покрећу све, од видео игара до банкарских система. Такође ћемо имплементирати систем комуникације назван pub/sub који функционише као комуникационе мреже које се користе у свемирским летелицама, омогућавајући различитим компонентама да деле информације без стварања зависности.

До краја ове серије, разумећете како да изградите апликације које могу да се скалирају и развијају – било да развијате игре, веб апликације или било који други софтверски систем.

## Квиз пре предавања

[Квиз пре предавања](https://ff-quizzes.netlify.app/web/quiz/29)

## Наслеђивање и композиција у развоју игара

Како пројекти постају сложенији, организација кода постаје кључна. Оно што почиње као једноставан скрипт може постати тешко за одржавање без одговарајуће структуре – баш као што су мисије Аполо захтевале пажљиву координацију између хиљада компоненти.

Истражићемо два основна приступа за организовање кода: наслеђивање и композицију. Сваки има своје предности, а разумевање оба помаже вам да изаберете прави приступ за различите ситуације. Демонстрираћемо ове концепте кроз нашу свемирску игру, где хероји, непријатељи, појачања и други објекти морају ефикасно да интерагују.

✅ Једна од најпознатијих књига о програмирању односи се на [дизајн шаблоне](https://en.wikipedia.org/wiki/Design_Patterns).

У било којој игри, имате `game objects` – интерактивне елементе који попуњавају ваш свет игре. Хероји, непријатељи, појачања и визуелни ефекти су сви објекти игре. Сваки од њих постоји на одређеним координатама екрана користећи вредности `x` и `y`, слично као што се тачке постављају на координатни систем.

Упркос њиховим визуелним разликама, ови објекти често деле основна понашања:

- **Постоје негде** – Сваки објекат има x и y координате како би игра знала где да га нацрта
- **Многи могу да се крећу** – Хероји трче, непријатељи јуре, меци лете преко екрана
- **Имају животни век** – Неки остају заувек, други (као експлозије) се појављују накратко и нестају
- **Реагују на ствари** – Када се ствари сударају, појачања се прикупљају, здравствени барови се ажурирају

✅ Размислите о игри као што је Pac-Man. Можете ли идентификовати четири типа објеката наведена изнад у овој игри?

### Изражавање понашања кроз код

Сада када разумете заједничка понашања која деле објекти игре, хајде да истражимо како да имплементирамо ова понашања у JavaScript-у. Можете изразити понашање објекта кроз методе које су повезане са класама или појединачним објектима, а постоји неколико приступа које можете изабрати.

**Приступ заснован на класама**

Класе и наслеђивање пружају структуриран приступ организовању објеката игре. Као таксономски систем класификације који је развио Карл Лине, почињете са основном класом која садржи заједничке особине, а затим креирате специјализоване класе које наслеђују ове основе док додају специфичне способности.

✅ Наслеђивање је важан концепт за разумевање. Сазнајте више у [чланку MDN-а о наслеђивању](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Ево како можете имплементирати објекте игре користећи класе и наслеђивање:

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

**Хајде да ово разложимо корак по корак:**
- Креирамо основни шаблон који сваки објекат игре може користити
- Конструктор чува где се објекат налази (`x`, `y`) и какав је то објекат
- Ово постаје основа на којој ће се градити сви ваши објекти игре

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

**У горњем примеру, урадили смо следеће:**
- **Проширили** класу GameObject да додамо функционалност кретања
- **Позвали** родитељски конструктор користећи `super()` да иницијализујемо наслеђене особине
- **Додали** метод `moveTo()` који ажурира позицију објекта

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

**Разумевање ових концепата:**
- **Креира** специјализоване типове објеката који наслеђују одговарајућа понашања
- **Демонстрира** како наслеђивање омогућава селективно укључивање функција
- **Показује** да хероји могу да се крећу, док дрвеће остаје непомично
- **Илуструје** како хијерархија класа спречава неприкладне радње

✅ Одвојите неколико минута да поново замислите хероја из Pac-Man-а (на пример, Inky, Pinky или Blinky) и како би био написан у JavaScript-у.

**Приступ композиције**

Композиција следи филозофију модуларног дизајна, слично као што инжењери дизајнирају свемирске летелице са заменљивим компонентама. Уместо наслеђивања од родитељске класе, комбинујете специфична понашања да бисте креирали објекте са тачно оним функционалностима које су им потребне. Овај приступ нуди флексибилност без крутих хијерархијских ограничења.

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

**Ево шта овај код ради:**
- **Дефинише** основни `gameObject` са својствима позиције и типа
- **Креира** посебан објекат понашања `movable` са функционалношћу кретања
- **Одваја** бриге тако што одржава податке о позицији и логику кретања независним

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

**У горњем примеру, урадили смо следеће:**
- **Комбиновали** основна својства објекта са понашањем кретања користећи синтаксу ширења
- **Креирали** фабричке функције које враћају прилагођене објекте
- **Омогућили** флексибилно креирање објеката без крутих хијерархија класа
- **Дозволили** објектима да имају тачно она понашања која су им потребна

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Кључне тачке за памћење:**
- **Комбинује** објекте мешањем понашања уместо наслеђивања
- **Пружа** више флексибилности од крутих хијерархија наслеђивања
- **Дозвољава** објектима да имају тачно оне функције које су им потребне
- **Користи** модерну синтаксу ширења у JavaScript-у за чисту комбинацију објеката 
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

**Разлагање онога што се овде дешава:**
- **Креира** централни систем за управљање догађајима користећи једноставну класу
- **Чува** слушаоце у објекту организованом по типовима порука
- **Региструје** нове слушаоце користећи метод `on()`
- **Емитује** поруке свим заинтересованим слушаоцима користећи `emit()`
- **Подржава** опционалне податке за пренос релевантних информација

### Све на једном месту: Практичан пример

Добро, хајде да видимо како ово функционише! Направићемо једноставан систем кретања који показује како чист и флексибилан pub/sub може бити:

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

**Ево шта овај код ради:**
- **Дефинише** објекат константи да спречи грешке у именима порука
- **Креира** инстанцу емитера догађаја за управљање свом комуникацијом
- **Иницијализује** хероја на почетној позицији

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

**У горњем примеру, урадили смо следеће:**
- **Регистровали** слушаоце догађаја који реагују на поруке о кретању
- **Ажурирали** позицију хероја на основу правца кретања
- **Додали** конзолно логовање за праћење промена позиције хероја
- **Одвојили** логику кретања од обраде уноса

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

**Разумевање ових концепата:**
- **Повезује** унос са тастатуре са догађајима у игри без чврстог повезивања
- **Омогућава** систему уноса да индиректно комуницира са објектима игре
- **Дозвољава** више система да реагују на исте догађаје са тастатуре
- **Олакшава** промену везивања тастера или додавање нових метода уноса

> 💡 **Савет**: Лепота овог шаблона је у његовој флексибилности! Лако можете додати звучне ефекте, тресење екрана или честичне ефекте једноставним додавањем више слушалаца догађаја – нема потребе за модификовањем постојећег кода за тастатуру или кретање.
> 
**Ево зашто ће вам се свидети овај приступ:**
- Додавање нових функција постаје веома лако – само слушајте догађаје који вас занимају
- Више ствари може реаговати на исти догађај без међусобног мешања
- Тестирање постаје много једноставније јер сваки део ради независно
- Када нешто не ради, тачно знате где да потражите проблем

### Зашто се Pub/Sub добро скалира

Шаблон pub/sub одржава једноставност како апликације постају сложеније. Било да управљате десетинама непријатеља, динамичким ажурирањима корисничког интерфејса или звучним системима, шаблон се носи са повећаним обимом без архитектонских промена. Нове функције се интегришу у постојећи систем догађаја без утицаја на постојећу функционалност.

> ⚠️ **Честа грешка**: Немојте креирати превише специфичних типова порука на самом почетку. Почните са широким категоријама и прецизирајте их како потребе ваше игре постају јасније.
> 
**Најбоље праксе које треба следити:**
- **Групишите** повезане поруке у логичке категорије
- **Користите** описна имена која јасно указују на то шта се догодило
- **Одржавајте** једноставност и фокусираност садржаја порука
- **Документујте** типове порука за сарадњу у тиму

---

## Изазов GitHub Copilot Agent 🚀

Користите режим Agent да завршите следећи изазов:

**Опис:** Креирајте једноставан систем објеката игре користећи и наслеђивање и шаблон pub/sub. Имплементирајте основну игру у којој различити објекти могу комуницирати кроз догађаје без директног познавања једни других.

**Задатак:** Креирајте систем игре у JavaScript-у са следећим захтевима: 1) Креирајте основну класу GameObject са x, y координатама и својством типа. 2) Креирајте класу Hero која проширује GameObject и може се кретати. 3) Креирајте класу Enemy која проширује GameObject и може јурити хероја. 4) Имплементирајте класу EventEmitter за шаблон pub/sub. 5) Поставите слушаоце догађаја тако да када се херој помери, оближњи непријатељи примају догађај 'HERO_MOVED' и ажурирају своју позицију да би јурили хероја. Укључите изјаве console.log да покажете комуникацију између објеката.

Сазнајте више о [режиму агента](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) овде.

## 🚀 Изазов

Размислите како шаблон pub-sub може побољшати архитектуру игре. Идентификујте које компоненте треба да емитују догађаје и како систем треба да реагује. Дизајнирајте концепт игре и мапирајте комуникационе шаблоне између њених компоненти.

## Квиз после предавања

[Квиз после предавања](https://ff-quizzes.netlify.app/web/quiz/30)

## Преглед и самостално учење

Сазнајте више о Pub/Sub читајући [овде](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Задатак

[Направите макету игре](assignment.md)

---

**Одрицање од одговорности**:  
Овај документ је преведен помоћу услуге за превођење вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако се трудимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на изворном језику треба сматрати меродавним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.