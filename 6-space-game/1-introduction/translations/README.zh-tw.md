# 建立太空遊戲 Part 1：簡介

![影片](../../images/pewpew.gif)

## 課前測驗

[課前測驗](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/29?loc=zh_tw)

### 遊戲開發中的繼承(Inheritance)與組合(Composition)

在之前的課程中，因為專案較小的規模，我們不需要去擔憂應用程式的設計結構。然而，當你的應用程式規模越來越大時，結構的選擇就是一大課題。在 JavaScript 中，有兩種大方向來建立龐大的應用程式：*組合(Composition)*與*繼承(Inheritance)*。它們有各自的優缺點，我們會藉由遊戲內容來進行說明。

✅ 其中一本有名的程式設計用書是有關於[設計模式](https://zh.wikipedia.org/wiki/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%EF%BC%9A%E5%8F%AF%E5%A4%8D%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%BD%AF%E4%BB%B6%E7%9A%84%E5%9F%BA%E7%A1%80)。

在遊戲中你會有`遊戲物件`，顯示在畫面中。這代表它們在笛卡爾座標系中有各自的位置，以 `x` 與 `y` 座標點定義。當你在開發遊戲時，你會注意到所有的遊戲物件都有一套標準的規範，和大多數的遊戲相似，通常會有這些元素：

- **適地性** 大多數遊戲元素都是建立在位置上的。這代表他們有各自的所在處，一組 `x` 與 `y`。
- **可移動的** 這些物件可以移動到新的位置。典型來說有英雄、怪物或是 NPC(Non Player Character)，但有些例外，好比是樹這種常駐物件。
- **可自毀的** 這些物件只能存在於一小段時間，接著它們就會自我刪除。通常這是`死亡`或是`被摧毀`的布林訊號傳遞給遊戲引擎，告知物件不再需要被描繪出來。
- **冷卻時間** 「冷卻時間」是存活週期短的典型物件屬性。好比是一段文字、爆炸的視覺特效，只能呈現數毫秒的時間。

✅ 想想看遊戲小精靈(Pac-Man)。你能辨別出符合上述清單的其中四種物件嗎？

### 行為表達

以上的敘述皆在表達遊戲物件所進行的行為。那我們該如何去編寫它們呢？我們可以使用方法(methods)連接 classes 或是物件(objects)來表達這些行為。

**Classes**

這個想法是結合 `classes` 與`繼承`的方式來在 class 中添加特定行為。

✅ 繼承是一個重要概念。在[有關繼承的 MDN 文章中](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)學習更多內容。

以程式碼來表達的話，一個遊戲物件通常會呈現這種形式：

```javascript

//設定 class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//這個 class 會繼承 GameObject 中 class 內容
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//這個可移動物件可以在畫面上移動
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//這是特定的 class 繼承 Movable class，它能使用所有繼承到的屬性內容
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//另一方面，這個 class 只繼承到 GameObject 的內容
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//英雄可以移動......
const hero = new Hero();
hero.moveTo(5,5);

//但樹木卻不能
const tree = new Tree();
```

✅ 花點時間重新構思小精靈(Pac-Man)的主角，或是 Inky、Pinky 與 Blinky 這幾隻鬼魂。它們該如何以 JavaScript 表現？

**組合**

另一種處理物件繼承的方式為*組合(Composition)*。物件以這種方式呈現它們的行為：

```javascript
//建立常數 gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...與常數 movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//常數 movableObject 是 gameObject 與 movable 的組合
const movableObject = {...gameObject, ...movable};

//利用函式建立新的英雄，繼承 movableObject 的內容
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...與常駐物件只繼承 gameObject 的屬性
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//建立可以移動的英雄
const hero = createHero(10,10);
hero.moveTo(5,5);
//和建立只能佇立於此的樹木
const tree = createStatic(0,0, 'Tree'); 
```

**我該使用哪一種設計模式？**

這都取決於你選擇何種設計模式。JavaScript 支援這兩種範例。

--

另一種在遊戲開發中常見的設計模式負責處理玩家的遊戲表現與遊戲體驗。

## 發布訂閱設計模式

✅ Pub/Sub 全名為 'publish-subscribe'

這個設計模式將應用程式內不同的模組分開處理，讓彼此不知道彼此的行為。為何要這樣做？這讓我們總觀上更輕易地了解各個模組的行為。也可以在你想要時輕易地改變模組的行為模式。我們該如何實踐它呢？我們先建立這幾個概念：

- **訊息**： 一個訊息通常會以文字字串與額外的負載(payload) ── 一組定義訊息內容的資料 ── 呈現。遊戲中典型的訊息可以是 `KEY_PRESSED_ENTER`。
- **發布者**： 這個元素*發布*訊息給所有的訂閱者。
- **訂閱者**： 這個元素*監聽*特定的訊息，並藉由執行某些任務以作為訊息的回應，例如發射雷射光。

實踐方法雖小，但這是功能強大的設計方式。這是它的建立方式：

```javascript
//設定 EventEmitter class 容納監聽者
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//當訊息接收時，讓監聽者處理它的負載
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//當訊息發出時，附上負載發給監聽者
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

利用上述程式我們建立一套小型實作內容：

```javascript
//設定訊息種類
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//調用你設定的 eventEmitter
const eventEmitter = new EventEmitter();
//設定英雄
const hero = createHero(0,0);
//讓 eventEmitter 監聽有關英雄往左移的訊息，並執行動作
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//設定遊戲視窗來監聽鍵盤事件，當左方向鍵按壓時，發出英雄往左移的訊息
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

我們連接了鍵盤事件 `ArrowLeft` 並傳遞 `HERO_MOVE_LEFT` 訊息。我們監聽該訊息並移動 `hero` 作為結果。這種開發方式讓事件監聽者與英雄區隔開來。你也可以將 `ArrowLeft` 換成 `A` 鍵。此外，我們能修改 eventEmitter 的 on 函式，讓 `ArrowLeft` 事件產生截然不同的行為。

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

當遊戲越來越豐富、物件越來越複雜時，這套設計方式能維持程式碼的整潔。由衷建議善用這套設計模式。

---

## 🚀 挑戰

想想看發布訂閱模式可以如何增進一款遊戲。哪一個部份該發送事件，而遊戲又該如何回應事件？現在你有機會發揮你的創意，思考一款新遊戲和它運作的模組。

## 課後測驗

[課後測驗](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/30?loc=zh_tw)

## 複習與自學

藉由[閱讀此連結](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber?WT.mc_id=academic-13441-cxa)來認識更多關於發布與訂閱的設計模式。

## 作業

[建立遊戲雛形](assignment.zh-tw.md)
