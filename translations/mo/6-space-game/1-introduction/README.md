<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-22T22:55:07+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "mo"
}
-->
# 建立太空遊戲第一部分：介紹

![太空遊戲動畫展示遊戲玩法](../../../../6-space-game/images/pewpew.gif)

就像 NASA 的任務控制在太空發射期間協調多個系統一樣，我們將建立一個太空遊戲，展示程式的不同部分如何無縫協作。在創建一個實際可以玩的遊戲的同時，您將學習適用於任何軟體專案的基本編程概念。

我們將探討組織程式碼的兩種基本方法：繼承和組合。這些不僅僅是學術概念——它們是從電子遊戲到銀行系統的所有事物的運作模式。我們還將實現一個名為 pub/sub 的通信系統，它的工作方式類似於航天器使用的通信網絡，允許不同的組件共享信息而不產生依賴性。

在本系列結束時，您將了解如何構建可以擴展和演變的應用程式——無論您是在開發遊戲、網頁應用程式還是其他任何軟體系統。

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/29)

## 繼承與組合在遊戲開發中的應用

隨著專案的複雜性增加，程式碼的組織變得至關重要。一開始可能只是簡單的腳本，但如果沒有適當的結構，維護起來會變得困難——就像阿波羅任務需要仔細協調數千個組件一樣。

我們將探討組織程式碼的兩種基本方法：繼承和組合。每種方法都有其獨特的優勢，了解這兩者有助於您在不同情況下選擇合適的方法。我們將通過我們的太空遊戲來演示這些概念，其中英雄、敵人、增強道具和其他物件必須高效地互動。

✅ 最著名的編程書籍之一與[設計模式](https://en.wikipedia.org/wiki/Design_Patterns)有關。

在任何遊戲中，您都會有 `遊戲物件`——填充遊戲世界的互動元素。英雄、敵人、增強道具和視覺效果都是遊戲物件。每個物件都使用 `x` 和 `y` 值存在於特定的螢幕座標上，類似於在坐標平面上繪製點。

儘管它們在外觀上有所不同，但這些物件通常具有共同的基本行為：

- **它們存在於某處**——每個物件都有 x 和 y 座標，因此遊戲知道在哪裡繪製它
- **許多物件可以移動**——英雄奔跑，敵人追逐，子彈在螢幕上飛行
- **它們有壽命**——有些物件會永遠存在，其他物件（如爆炸）會短暫出現然後消失
- **它們會對事物做出反應**——當物件碰撞時，增強道具被收集，生命值條更新

✅ 想想像 Pac-Man 這樣的遊戲。您能在這個遊戲中識別出上述四種物件類型嗎？

### 通過程式碼表達行為

現在您已經了解了遊戲物件共享的常見行為，讓我們來探討如何在 JavaScript 中實現這些行為。您可以通過附加到類或單個物件的方法來表達物件行為，並且有幾種方法可供選擇。

**基於類的方式**

類和繼承提供了一種結構化的方法來組織遊戲物件。就像卡爾·林奈斯（Carl Linnaeus）開發的分類系統一樣，您可以從包含常見屬性的基類開始，然後創建繼承這些基礎並添加特定功能的專門類。

✅ 繼承是一個重要的概念。了解更多請參考 [MDN 的繼承文章](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)。

以下是如何使用類和繼承來實現遊戲物件：

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

**讓我們逐步解析：**
- 我們正在創建每個遊戲物件都可以使用的基本模板
- 建構函數保存物件的位置（`x`，`y`）以及物件的類型
- 這成為所有遊戲物件構建的基礎

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

**在上面的程式碼中，我們：**
- **擴展**了 GameObject 類以添加移動功能
- 使用 `super()` **調用**父建構函數以初始化繼承的屬性
- **添加**了一個 `moveTo()` 方法來更新物件的位置

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

**理解這些概念：**
- **創建**繼承適當行為的專門物件類型
- **展示**了繼承如何允許選擇性地包含功能
- **顯示**英雄可以移動，而樹木保持靜止
- **說明**類層次結構如何防止不適當的操作

✅ 花幾分鐘重新構想一個 Pac-Man 的英雄（例如 Inky、Pinky 或 Blinky），並思考如何用 JavaScript 編寫它。

**組合方式**

組合遵循模組化設計哲學，類似於工程師設計具有可互換組件的航天器。與其從父類繼承，不如通過組合特定行為來創建具有所需功能的物件。這種方法提供了靈活性，而不受嚴格的層次結構限制。

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

**這段程式碼的作用：**
- **定義**了一個基礎的 `gameObject`，具有位置和類型屬性
- **創建**了一個單獨的 `movable` 行為物件，具有移動功能
- **分離**關注點，保持位置數據和移動邏輯獨立

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

**在上面的程式碼中，我們：**
- 使用展開語法 **組合**了基礎物件屬性和移動行為
- **創建**了返回自定義物件的工廠函數
- **啟用**了靈活的物件創建，而不受嚴格的類層次結構限制
- **允許**物件擁有它們需要的行為

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**需要記住的關鍵點：**
- 通過混合行為而不是繼承來 **組合**物件
- 比僵化的繼承層次結構提供了更多的 **靈活性**
- **允許**物件擁有它們需要的功能
- 使用現代 JavaScript 的展開語法進行乾淨的物件組合

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

**解析這裡發生的事情：**
- 使用簡單的類 **創建**了一個中心事件管理系統
- **存儲**按消息類型組織的監聽器
- 使用 `on()` 方法 **註冊**新的監聽器
- 使用 `emit()` **廣播**消息給所有感興趣的監聽器
- 支援可選的數據負載以傳遞相關信息

### 整合：實際範例

好了，讓我們來看看這是如何運作的！我們將建立一個簡單的移動系統，展示 pub/sub 的清晰和靈活性：

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

**這段程式碼的作用：**
- **定義**了一個常量物件以防止消息名稱中的拼寫錯誤
- **創建**了一個事件發送器實例來處理所有通信
- **初始化**了一個位於起始位置的英雄物件

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

**在上面的程式碼中，我們：**
- **註冊**了響應移動消息的事件監聽器
- 根據移動方向 **更新**了英雄的位置
- 添加了控制台日誌以跟踪英雄的位置變化
- **分離**了移動邏輯和輸入處理

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

**理解這些概念：**
- **連接**鍵盤輸入到遊戲事件，而不需要緊密耦合
- **使能**輸入系統間接與遊戲物件通信
- **允許**多個系統對相同的鍵盤事件做出響應
- **使得**更改按鍵綁定或添加新的輸入方法變得容易

> 💡 **專業提示**：這種模式的美妙之處在於它的靈活性！您可以輕鬆添加音效、螢幕震動或粒子效果，只需添加更多的事件監聽器——無需修改現有的鍵盤或移動程式碼。
> 
**您會喜歡這種方法的原因：**
- 添加新功能變得非常簡單——只需監聽您關心的事件
- 多個事物可以對同一事件做出反應，而不會互相干擾
- 測試變得更加簡單，因為每個部分都能獨立工作
- 當某些東西出現問題時，您知道確切的問題所在

### 為什麼 Pub/Sub 能有效擴展

隨著應用程式的複雜性增加，pub/sub 模式保持了簡單性。無論是管理數十個敵人、動態 UI 更新還是音效系統，該模式都能在不進行架構更改的情況下處理規模的增長。新功能可以集成到現有的事件系統中，而不影響已建立的功能。

> ⚠️ **常見錯誤**：不要在早期創建過多的特定消息類型。從廣泛的類別開始，隨著遊戲需求的明確逐步完善它們。
> 
**最佳實踐：**
- **將**相關消息分組到邏輯類別中
- 使用描述性名稱 **清楚地指示**發生了什麼
- **保持**消息負載簡單且專注
- **記錄**您的消息類型以便團隊協作

---

## GitHub Copilot Agent 挑戰 🚀

使用 Agent 模式完成以下挑戰：

**描述：** 使用繼承和 pub/sub 模式創建一個簡單的遊戲物件系統。您將實現一個基本遊戲，其中不同物件可以通過事件進行通信，而不直接了解彼此。

**提示：** 使用以下要求創建一個 JavaScript 遊戲系統：1) 創建一個具有 x、y 座標和類型屬性的基礎 GameObject 類。2) 創建一個擴展 GameObject 並可以移動的 Hero 類。3) 創建一個擴展 GameObject 並可以追逐英雄的 Enemy 類。4) 實現一個用於 pub/sub 模式的 EventEmitter 類。5) 設置事件監聽器，當英雄移動時，附近的敵人接收到 'HERO_MOVED' 事件並更新其位置以追逐英雄。包括 console.log 語句以顯示物件之間的通信。

了解更多有關 [Agent 模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) 的信息。

## 🚀 挑戰

考慮 pub-sub 模式如何增強遊戲架構。確定哪些組件應該發送事件以及系統應如何響應。設計一個遊戲概念並繪製其組件之間的通信模式。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/30)

## 回顧與自學

通過[閱讀相關資料](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon)了解更多有關 Pub/Sub 的信息。

## 作業

[設計一個遊戲](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。