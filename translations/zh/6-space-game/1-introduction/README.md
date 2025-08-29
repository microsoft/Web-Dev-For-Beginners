<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-29T14:47:35+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "zh"
}
-->
# 构建太空游戏第一部分：介绍

![video](../../../../6-space-game/images/pewpew.gif)

## 课前测验

[课前测验](https://ff-quizzes.netlify.app/web/quiz/29)

### 游戏开发中的继承与组合

在之前的课程中，由于项目规模较小，几乎不需要考虑应用程序的设计架构。然而，当你的应用程序规模和范围扩大时，架构决策就变得更加重要。在 JavaScript 中创建大型应用程序有两种主要方法：*组合* 或 *继承*。两者各有优缺点，但我们可以通过游戏的背景来解释它们。

✅ 最著名的编程书籍之一与[设计模式](https://en.wikipedia.org/wiki/Design_Patterns)有关。

在游戏中，你有 `游戏对象`，它们是屏幕上的对象。这意味着它们在笛卡尔坐标系中有一个位置，由 `x` 和 `y` 坐标来表示。当你开发游戏时，你会注意到所有的游戏对象都有一个标准属性，这些属性在你创建的每个游戏中都很常见，即：

- **基于位置** 大多数游戏元素都是基于位置的。这意味着它们有一个位置，即 `x` 和 `y`。
- **可移动** 这些对象可以移动到新位置。通常是英雄、怪物或 NPC（非玩家角色），但例如树这样的静态对象则不是。
- **自我销毁** 这些对象只存在一段时间，然后设置自己为删除状态。通常通过一个 `dead` 或 `destroyed` 的布尔值来表示，告诉游戏引擎该对象不再需要渲染。
- **冷却时间** “冷却时间”是短生命周期对象的典型属性。一个典型的例子是文本或图形效果（如爆炸），它们只需要显示几毫秒。

✅ 想想像吃豆人这样的游戏。你能在这个游戏中识别出上述四种对象类型吗？

### 表达行为

我们上面描述的都是游戏对象可以拥有的行为。那么我们如何编码这些行为呢？我们可以通过与类或对象相关联的方法来表达这些行为。

**类**

使用 `类` 和 `继承` 的想法可以为类添加特定的行为。

✅ 继承是一个重要的概念。可以通过[MDN关于继承的文章](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)了解更多。

通过代码表达，一个游戏对象通常看起来像这样：

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

✅ 花几分钟重新构想一个吃豆人英雄（例如 Inky、Pinky 或 Blinky），并思考它如何用 JavaScript 编写。

**组合**

处理对象继承的另一种方法是使用 *组合*。然后，对象可以这样表达它们的行为：

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

**我应该使用哪种模式？**

选择哪种模式完全取决于你自己。JavaScript 支持这两种范式。

--

在游戏开发中，还有一种常见模式用于处理游戏的用户体验和性能问题。

## 发布/订阅模式

✅ Pub/Sub 代表“发布-订阅”

这种模式解决了应用程序的不同部分不应该相互了解的问题。为什么呢？如果各部分是分离的，整体上会更容易理解发生了什么。同时，如果需要突然改变行为，也会更容易实现。我们如何做到这一点呢？通过建立以下概念：

- **消息**：消息通常是一个文本字符串，伴随一个可选的负载（用于说明消息内容的一段数据）。游戏中的典型消息可以是 `KEY_PRESSED_ENTER`。
- **发布者**：这个元素*发布*消息并将其发送给所有订阅者。
- **订阅者**：这个元素*监听*特定消息，并在接收到消息后执行某些任务，例如发射激光。

这种模式的实现虽然代码量很小，但却非常强大。以下是它的实现方式：

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

使用上述代码，我们可以创建一个非常小的实现：

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

在上面的代码中，我们连接了一个键盘事件 `ArrowLeft` 并发送了 `HERO_MOVE_LEFT` 消息。我们监听该消息并将 `hero` 移动作为结果。这种模式的优势在于事件监听器和英雄彼此互不知晓。你可以将 `ArrowLeft` 重新映射到 `A` 键。此外，通过对事件发射器的 `on` 函数进行一些编辑，还可以在 `ArrowLeft` 上实现完全不同的行为：

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

随着游戏规模的扩大和复杂性的增加，这种模式的复杂性保持不变，而你的代码仍然保持简洁。强烈推荐采用这种模式。

---

## 🚀 挑战

思考发布-订阅模式如何增强游戏。哪些部分应该发出事件，游戏应该如何对它们做出反应？现在是发挥创意的机会，想象一个新游戏以及它的各个部分可能如何表现。

## 课后测验

[课后测验](https://ff-quizzes.netlify.app/web/quiz/30)

## 复习与自学

通过[阅读相关内容](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon)了解更多关于发布/订阅模式的信息。

## 作业

[设计一个游戏](assignment.md)

---

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻译而成。尽管我们努力确保准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档作为权威来源。对于关键信息，建议使用专业人工翻译。因使用本翻译而引起的任何误解或误读，我们概不负责。