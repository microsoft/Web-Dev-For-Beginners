<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-25T22:29:43+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "mo"
}
-->
# 建立太空遊戲第一部分：介紹

![video](../../../../6-space-game/images/pewpew.gif)

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/29)

### 繼承與組合在遊戲開發中的應用

在之前的課程中，由於專案範圍較小，並不需要太多考慮應用程式的設計架構。然而，當你的應用程式規模和範圍擴大時，架構設計的決策就變得更加重要。在 JavaScript 中，建立大型應用程式有兩種主要方法：*組合* 或 *繼承*。這兩者各有優缺點，但我們可以從遊戲的角度來解釋它們。

✅ 最著名的程式設計書籍之一與[設計模式](https://en.wikipedia.org/wiki/Design_Patterns)有關。

在遊戲中，你會有 `遊戲物件`，這些物件存在於螢幕上。這意味著它們在笛卡爾座標系統中有一個位置，具備 `x` 和 `y` 座標。當你開發遊戲時，你會注意到所有的遊戲物件都有一些標準屬性，這些屬性在你創建的每個遊戲中都是通用的，主要包括以下幾個元素：

- **基於位置** 大多數（如果不是全部）遊戲元素都是基於位置的。這意味著它們有一個位置，即 `x` 和 `y`。
- **可移動** 這些物件可以移動到新位置。通常是英雄、怪物或 NPC（非玩家角色），但例如像樹這樣的靜態物件則不屬於此類。
- **自我銷毀** 這些物件只存在一段時間，然後設置自己為刪除狀態。通常這是通過一個 `dead` 或 `destroyed` 的布林值來表示，告訴遊戲引擎該物件不再需要渲染。
- **冷卻時間** "冷卻時間" 是短暫存在的物件中常見的屬性。一個典型的例子是文字或圖形效果（如爆炸），它們只應顯示幾毫秒。

✅ 想想像吃豆人這樣的遊戲。你能在這個遊戲中識別出上述四種物件類型嗎？

### 表達行為

上述所有描述的都是遊戲物件可能具有的行為。那麼我們如何編碼這些行為呢？我們可以通過與類別或物件相關聯的方法來表達這些行為。

**類別**

使用 `類別` 結合 `繼承` 的概念，可以為類別添加特定的行為。

✅ 繼承是一個重要的概念。可以在 [MDN 的繼承文章](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) 中了解更多。

用程式碼表示，遊戲物件通常看起來像這樣：

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

✅ 花幾分鐘重新構想一下吃豆人的英雄（例如 Inky、Pinky 或 Blinky），並思考如何用 JavaScript 編寫它。

**組合**

另一種處理物件繼承的方法是使用 *組合*。然後，物件可以像這樣表達它們的行為：

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

**應該使用哪種模式？**

選擇哪種模式由你決定。JavaScript 支援這兩種範式。

--

在遊戲開發中，另一種常見的模式是解決遊戲的使用者體驗和效能問題。

## Pub/sub 模式

✅ Pub/Sub 代表 "發布-訂閱"

這種模式的核心理念是應用程式的不同部分不應該彼此了解。為什麼呢？這樣可以更容易了解整體情況，並且如果需要改變行為也會更加方便。我們如何實現這一點？我們通過建立以下概念來完成：

- **訊息**：訊息通常是一個文字字串，伴隨著一個可選的有效負載（用於說明訊息內容的一段資料）。遊戲中的典型訊息可以是 `KEY_PRESSED_ENTER`。
- **發布者**：這個元素*發布*訊息並將其發送給所有訂閱者。
- **訂閱者**：這個元素*監聽*特定訊息，並根據接收到的訊息執行某些任務，例如發射雷射。

這種模式的實現非常簡單，但它非常強大。以下是它的實現方式：

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

要使用上述程式碼，我們可以創建一個非常小的實現：

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

在上面的例子中，我們連接了一個鍵盤事件 `ArrowLeft`，並發送 `HERO_MOVE_LEFT` 訊息。我們監聽該訊息並移動 `hero` 作為結果。這種模式的優勢在於事件監聽器和英雄彼此並不相互了解。你可以將 `ArrowLeft` 重新映射到 `A` 鍵。此外，通過對 eventEmitter 的 `on` 函數進行一些編輯，也可以在 `ArrowLeft` 上執行完全不同的操作：

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

隨著遊戲規模的擴大，事情變得更加複雜，但這種模式的複雜性保持不變，並且你的程式碼保持乾淨。非常推薦採用這種模式。

---

## 🚀 挑戰

思考 Pub-Sub 模式如何增強遊戲。哪些部分應該發出事件，遊戲應如何對它們做出反應？現在是你發揮創意的時候，想出一個新遊戲並思考它的各個部分可能如何運作。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/30)

## 回顧與自學

透過[閱讀相關內容](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon)了解更多 Pub/Sub。

## 作業

[模擬一個遊戲](assignment.md)

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。