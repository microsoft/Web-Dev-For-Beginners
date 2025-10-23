<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-22T22:52:28+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "mo"
}
-->
# 建立太空遊戲第三部分：加入動作

想想你最喜歡的遊戲——吸引人的不僅僅是漂亮的圖形，而是所有事物如何移動並對你的操作做出反應。現在你的太空遊戲就像一幅美麗的畫作，但我們即將加入動作，讓它栩栩如生。

當 NASA 的工程師為阿波羅任務編寫導航電腦程式時，他們面臨著類似的挑戰：如何讓航天器響應飛行員的操作，同時自動進行航向修正？今天我們要學習的原理與此相似——管理玩家控制的移動以及自動系統行為。

在這節課中，你將學習如何讓太空船在螢幕上滑行、響應玩家指令，並創造流暢的移動模式。我們會將所有內容分解成易於理解的概念，循序漸進地學習。

到最後，你的玩家將能夠在螢幕上操控英雄飛船，而敵方飛船則在上方巡邏。更重要的是，你將理解驅動遊戲移動系統的核心原理。

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/33)

## 理解遊戲中的移動

當事物開始移動時，遊戲才真正活了起來，而這通常有兩種基本方式：

- **玩家控制的移動**：當你按下按鍵或點擊滑鼠時，某些東西會移動。這是你與遊戲世界之間的直接連接。
- **自動移動**：當遊戲本身決定移動事物時——例如那些敵方飛船需要在螢幕上巡邏，無論你是否在操作。

讓物件在電腦螢幕上移動比你想像的要簡單。還記得數學課上的 x 和 y 坐標嗎？這正是我們在這裡使用的。當伽利略在 1610 年追蹤木星的衛星時，他本質上是在做同樣的事情——通過時間繪製位置來理解運動模式。

在螢幕上移動物件就像創建翻頁動畫一樣——你需要遵循以下三個簡單步驟：

1. **更新位置**——改變物件應該所在的位置（例如向右移動 5 像素）
2. **清除舊的畫面**——清除螢幕，避免看到殘影
3. **繪製新的畫面**——將物件放置在新的位置

如果你足夠快地完成這些步驟，效果就像魔法一樣！你會得到流暢的移動，讓玩家感覺自然。

以下是程式碼的示例：

```javascript
// Set the hero's location
hero.x += 5;
// Clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

**這段程式碼的作用：**
- **更新**英雄的 x 坐標，向右移動 5 像素
- **清除**整個畫布區域，移除之前的畫面
- **填充**畫布背景為黑色
- **重新繪製**英雄圖像到新的位置

✅ 你能想到為什麼每秒多次重繪英雄可能會導致性能成本增加嗎？閱讀 [此模式的替代方案](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)。

## 處理鍵盤事件

這是將玩家輸入與遊戲動作連接的地方。當有人按下空格鍵發射雷射或點擊方向鍵躲避小行星時，你的遊戲需要檢測並響應這些輸入。

鍵盤事件發生在整個窗口層級，這意味著你的整個瀏覽器窗口都在監聽這些按鍵。另一方面，滑鼠點擊可以綁定到特定的元素（例如點擊按鈕）。對於我們的太空遊戲，我們將專注於鍵盤控制，因為這能給玩家帶來經典的街機感。

這讓我想起了 1800 年代的電報操作員，他們需要將摩斯電碼輸入翻譯成有意義的信息——我們正在做類似的事情，將按鍵轉換為遊戲指令。

要處理事件，你需要使用窗口的 `addEventListener()` 方法，並提供兩個輸入參數。第一個參數是事件的名稱，例如 `keyup`。第二個參數是事件發生時應調用的函數。

以下是一個示例：

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**這裡發生了什麼：**
- **監聽**整個窗口的鍵盤事件
- **捕獲**事件物件，其中包含有關按下了哪個鍵的信息
- **檢查**按下的鍵是否與特定鍵匹配（在此例中為向上箭頭）
- **執行**條件滿足時的程式碼

對於鍵盤事件，你可以使用事件上的兩個屬性來查看按下了哪個鍵：

- `key` - 這是按下的鍵的字串表示，例如 `'ArrowUp'`
- `keyCode` - 這是數字表示，例如 `37`，對應於 `ArrowLeft`

✅ 鍵盤事件操作在遊戲開發之外也很有用。你能想到這項技術的其他用途嗎？

### 特殊鍵：注意！

某些鍵具有內建的瀏覽器行為，可能會干擾你的遊戲。方向鍵會滾動頁面，空格鍵會向下跳——當有人試圖駕駛他們的太空船時，你不希望出現這些行為。

我們可以阻止這些預設行為，讓遊戲來處理輸入。這類似於早期的電腦程式員必須覆蓋系統中斷以創建自定義行為——我們只是在瀏覽器層面上進行操作。以下是方法：

```javascript
const onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

**理解這段阻止程式碼：**
- **檢查**可能導致不必要瀏覽器行為的特定鍵碼
- **阻止**方向鍵和空格鍵的預設瀏覽器行為
- **允許**其他鍵正常運作
- **使用** `e.preventDefault()` 來停止瀏覽器的內建行為

## 遊戲自動移動

現在我們來談談不需要玩家輸入就能移動的物件。想想敵方飛船在螢幕上巡航、子彈沿直線飛行，或者背景中的雲朵漂移。這種自動移動讓你的遊戲世界即使在沒有人操作時也能感覺充滿活力。

我們使用 JavaScript 的內建計時器來定期更新位置。這個概念類似於擺鐘的工作原理——一個定期觸發一致、定時動作的機制。以下是簡單的示例：

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**這段移動程式碼的作用：**
- **創建**一個每 100 毫秒運行的計時器
- **更新**敵方的 y 坐標，每次移動 10 像素
- **儲存**間隔 ID，以便稍後需要時停止
- **自動移動**敵方物件向下

## 遊戲循環

這是將所有內容聯繫在一起的概念——遊戲循環。如果你的遊戲是一部電影，那麼遊戲循環就是電影放映機，以極快的速度展示一幀幀畫面，使一切看起來平滑移動。

每個遊戲背後都有一個這樣的循環在運行。它是一個函數，負責更新所有遊戲物件、重繪螢幕，並不斷重複這個過程。它跟蹤你的英雄、所有敵人、任何飛行中的雷射——整個遊戲狀態。

這個概念讓我想起了早期的電影動畫師，比如華特·迪士尼，他們不得不一幀一幀地重繪角色，以創造出運動的幻覺。我們正在做同樣的事情，只是用程式碼代替了鉛筆。

以下是遊戲循環的典型程式碼：

```javascript
const gameLoopId = setInterval(() => {
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
  }
  gameLoop();
}, 200);
```

**理解遊戲循環結構：**
- **清除**整個畫布，移除之前的畫面
- **填充**背景為純色
- **繪製**所有遊戲物件到它們當前的位置
- **每 200 毫秒重複**這個過程，創造流暢的動畫效果
- **管理**幀率，通過控制間隔時間

## 繼續開發太空遊戲

現在我們將為你之前建立的靜態場景加入動作。我們將把它從一個截圖轉變為一個互動式的體驗。我們會一步步地完成這些功能，確保每個部分都能自然地構建。

從我們上一課的程式碼開始（或者如果需要重新開始，可以使用 [第二部分的起始程式碼](../../../../6-space-game/3-moving-elements-around/your-work) 資料夾中的程式碼）。

**今天我們要完成的內容：**
- **英雄控制**：使用方向鍵操控你的太空船在螢幕上移動
- **敵方移動**：那些外星飛船將開始進攻

讓我們開始實現這些功能。

## 建議步驟

找到在 `your-work` 子資料夾中為你創建的檔案。它應該包含以下內容：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

你可以通過輸入以下指令在 `your-work` 資料夾中開始你的專案：

```bash
cd your-work
npm start
```

**這個指令的作用：**
- **進入**你的專案目錄
- **啟動**位於 `http://localhost:5000` 的 HTTP 伺服器
- **提供**你的遊戲檔案以便在瀏覽器中測試

上述指令將在地址 `http://localhost:5000` 啟動一個 HTTP 伺服器。打開瀏覽器並輸入該地址，現在應該可以渲染英雄和所有敵人；目前還沒有任何移動——但很快就會有！

### 添加程式碼

1. **添加專用物件** 用於 `hero`、`enemy` 和 `game object`，它們應該具有 `x` 和 `y` 屬性。（記住 [繼承或組合](../README.md) 的部分）。

   *提示* `game object` 應該是具有 `x` 和 `y` 屬性並能夠將自己繪製到畫布上的物件。

   > **提示**：首先添加一個新的 `GameObject` 類，並按照以下方式定義其建構函數，然後將其繪製到畫布上：

    ```javascript
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    **理解這個基礎類別：**
    - **定義**所有遊戲物件共享的通用屬性（位置、大小、圖像）
    - **包含**一個 `dead` 標誌，用於追蹤物件是否應被移除
    - **提供**一個 `draw()` 方法，用於在畫布上渲染物件
    - **設置**所有屬性的預設值，子類別可以覆蓋

    現在，擴展這個 `GameObject` 來創建 `Hero` 和 `Enemy`：
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 75;
        this.type = "Hero";
        this.speed = 5;
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.type = "Enemy";
        const id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y);
            clearInterval(id);
          }
        }, 300);
      }
    }
    ```

    **這些類別的關鍵概念：**
    - **使用** `extends` 關鍵字從 `GameObject` 繼承
    - **使用** `super(x, y)` 調用父類建構函數
    - **設置**每種物件類型的特定尺寸和屬性
    - **使用** `setInterval()` 為敵人實現自動移動

2. **添加鍵盤事件處理器** 以處理鍵盤導航（讓英雄上下左右移動）

   *記住* 這是一個笛卡爾坐標系，左上角是 `0,0`。還要記得添加程式碼以停止 *預設行為*

   > **提示**：創建你的 `onKeyDown` 函數並將其附加到窗口：

   ```javascript
   const onKeyDown = function (e) {
     console.log(e.keyCode);
     // Add the code from the lesson above to stop default behavior
     switch (e.keyCode) {
       case 37:
       case 39:
       case 38:
       case 40: // Arrow keys
       case 32:
         e.preventDefault();
         break; // Space
       default:
         break; // do not block other keys
     }
   };

   window.addEventListener("keydown", onKeyDown);
   ```
    
   **這個事件處理器的作用：**
   - **監聽**整個窗口的鍵盤按下事件
   - **記錄**按鍵碼，幫助你調試按下了哪些鍵
   - **阻止**方向鍵和空格鍵的預設瀏覽器行為
   - **允許**其他鍵正常運作
   
   此時檢查你的瀏覽器控制台，觀察按鍵被記錄的情況。

3. **實現** [Pub sub pattern](../README.md)，這將使你的程式碼在接下來的部分中保持清晰。

   發布-訂閱模式通過將事件檢測與事件處理分開來幫助組織程式碼。這使得程式碼更加模組化且易於維護。

   要完成這最後一部分，你可以：

   1. **在窗口上添加事件監聽器**：

       ```javascript
       window.addEventListener("keyup", (evt) => {
         if (evt.key === "ArrowUp") {
           eventEmitter.emit(Messages.KEY_EVENT_UP);
         } else if (evt.key === "ArrowDown") {
           eventEmitter.emit(Messages.KEY_EVENT_DOWN);
         } else if (evt.key === "ArrowLeft") {
           eventEmitter.emit(Messages.KEY_EVENT_LEFT);
         } else if (evt.key === "ArrowRight") {
           eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
         }
       });
       ```

   **這個事件系統的作用：**
   - **檢測**鍵盤輸入並將其轉換為自定義遊戲事件
   - **分離**輸入檢測與遊戲邏輯
   - **使得**日後更改控制方式變得容易，且不影響遊戲程式碼
   - **允許**多個系統響應同一輸入

   2. **創建一個 EventEmitter 類** 用於發布和訂閱消息：

       ```javascript
       class EventEmitter {
         constructor() {
           this.listeners = {};
         }
       
         on(message, listener) {
           if (!this.listeners[message]) {
             this.listeners[message] = [];
           }
           this.listeners[message].push(listener);
         }
       
   3. **添加常量** 並設置 EventEmitter：

       ```javascript
       const Messages = {
         KEY_EVENT_UP: "KEY_EVENT_UP",
         KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
         KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
         KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
       };
       
       let heroImg, 
           enemyImg, 
           laserImg,
           canvas, ctx, 
           gameObjects = [], 
           hero, 
           eventEmitter = new EventEmitter();
       ```

   **理解這個設置：**
   - **定義**消息常量，避免拼寫錯誤並使重構更容易
   - **聲明**圖像、畫布上下文和遊戲狀態的變數
   - **創建**一個全局事件發送器，用於發布-訂閱系統
   - **初始化**一個陣列，用於保存所有遊戲物件

   4. **初始化遊戲**

       ```javascript
       function initGame() {
         gameObjects = [];
         createEnemies();
         createHero();
       
         eventEmitter.on(Messages.KEY_EVENT_UP, () => {
           hero.y -= 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
           hero.y += 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
           hero.x -= 5;
         });
       
4. **設置遊戲循環**

   重構 `window.onload` 函數以初始化遊戲並在適當的間隔設置遊戲循環。你還會添加一個雷射光束：

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      const gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100);
    };
    ```

   **理解遊戲設置：**
   - **等待**頁面完全加載後再開始
   - **獲取**畫布元素及其 2D 渲染上下文
   - **異步加載**所有圖像資產，使用 `await`
   - **啟動**以 100 毫秒間隔運行的遊戲循環（10 FPS）
   - **清除**並重繪每幀的整個螢幕

5. **添加程式碼** 以讓敵人按一定間隔移動

    重構 `createEnemies()` 函數以創建敵人並將它們推入新的 gameObjects 類：

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```

    **敵人創建的作用：**
    - **計算**位置以將敵人置於螢幕中央
- **建立**一個敵人網格，使用巢狀迴圈
- **分配**敵人圖片給每個敵人物件
- **添加**每個敵人到全局遊戲物件陣列中

接著，新增一個 `createHero()` 函數，對英雄角色進行類似的處理。

    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

**英雄角色創建的功能：**
- **定位**英雄角色於螢幕底部中央
- **分配**英雄圖片給英雄物件
- **添加**英雄到遊戲物件陣列中以進行渲染

最後，新增一個 `drawGameObjects()` 函數來開始繪製：

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

**理解繪製函數：**
- **迭代**陣列中的所有遊戲物件
- **呼叫**每個物件的 `draw()` 方法
- **傳遞**畫布上下文，讓物件能自行渲染

你的敵人應該開始向你的英雄飛船進攻了！
}
}
    ```
    
    and add a `createHero()` function to do a similar process for the hero.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

最後，新增一個 `drawGameObjects()` 函數來開始繪製：

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

你的敵人應該開始向你的英雄飛船進攻了！

---

## GitHub Copilot Agent 挑戰 🚀

這是一個能提升遊戲細緻度的挑戰：添加邊界和流暢的控制。目前你的英雄角色可以飛出螢幕，移動可能感覺不夠流暢。

**你的任務：** 讓你的飛船感覺更真實，實現螢幕邊界和流暢的移動。這類似於 NASA 的飛行控制系統，防止航天器超出安全操作範圍。

**需要完成的內容：** 創建一個系統，讓你的英雄飛船保持在螢幕內，並讓控制感覺更流暢。當玩家按住方向鍵時，飛船應該平滑滑行，而不是以離散步驟移動。考慮在飛船到達螢幕邊界時添加視覺反饋——例如一個微妙的效果來指示遊戲區域的邊緣。

了解更多關於 [agent 模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) 的資訊。

## 🚀 挑戰

隨著專案的擴展，代碼組織變得越來越重要。你可能已經注意到你的檔案充滿了混合在一起的函數、變數和類別。這讓我想起了阿波羅任務的工程師們如何創建清晰、可維護的系統，讓多個團隊能夠同時合作。

**你的任務：**
像軟體架構師一樣思考。如何組織你的代碼，讓六個月後的你（或你的隊友）能夠理解正在發生的事情？即使目前所有內容都保留在一個檔案中，你也可以創建更好的組織方式：

- **將相關函數分組**，並添加清晰的註解標題
- **分離關注點** - 將遊戲邏輯與渲染分開
- **使用一致的命名**規範來命名變數和函數
- **創建模組**或命名空間來組織遊戲的不同方面
- **添加文檔**，解釋每個主要部分的用途

**反思問題：**
- 當你回頭看代碼時，哪些部分最難理解？
- 你如何組織代碼以便其他人更容易貢獻？
- 如果你想添加新功能，例如能量提升或不同類型的敵人，會發生什麼？

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/34)

## 回顧與自學

我們一直在從零開始構建所有內容，這對學習來說非常棒，但這裡有個小秘密——有一些很棒的 JavaScript 框架可以幫助你完成很多繁重的工作。一旦你對我們涵蓋的基礎知識感到熟悉，就值得[探索可用的資源](https://github.com/collections/javascript-game-engines)。

把框架想像成一個裝滿工具的工具箱，而不是自己手工製作每一個工具。它們可以解決我們之前提到的許多代碼組織挑戰，還能提供一些需要花費數週時間才能自己構建的功能。

**值得探索的內容：**
- 遊戲引擎如何組織代碼——你會驚訝於它們使用的巧妙模式
- 讓畫布遊戲運行得更流暢的性能技巧  
- 現代 JavaScript 特性，讓你的代碼更簡潔、更易於維護
- 管理遊戲物件及其關係的不同方法

## 作業

[註解你的代碼](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。