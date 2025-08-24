<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-23T22:55:40+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "hk"
}
-->
# 建立太空遊戲第三部分：加入移動功能

## 課前測驗

[課前測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

遊戲中如果沒有外星人在螢幕上移動，會顯得很無趣！在這個遊戲中，我們將使用兩種類型的移動方式：

- **鍵盤/滑鼠移動**：當使用者透過鍵盤或滑鼠與遊戲互動時，移動螢幕上的物件。
- **遊戲驅動的移動**：當遊戲以一定的時間間隔自動移動物件。

那麼，我們如何在螢幕上移動物件呢？這一切都與笛卡兒座標有關：我們改變物件的位置 (x, y)，然後重新繪製螢幕。

通常，你需要以下步驟來實現螢幕上的*移動*：

1. **設定物件的新位置**：這是讓物件看起來已經移動的必要步驟。
2. **清除螢幕**：在每次繪製之間需要清除螢幕。我們可以透過繪製一個填滿背景顏色的矩形來清除螢幕。
3. **在新位置重新繪製物件**：這樣我們就能實現將物件從一個位置移動到另一個位置。

以下是程式碼的範例：

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ 你能想到為什麼每秒多次重繪你的英雄可能會導致效能問題嗎？閱讀有關[此模式的替代方案](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)。

## 處理鍵盤事件

你可以透過將特定事件附加到程式碼來處理事件。鍵盤事件會在整個視窗上觸發，而滑鼠事件（例如 `click`）則可以連結到點擊特定元素。我們將在整個專案中使用鍵盤事件。

要處理事件，你需要使用視窗的 `addEventListener()` 方法，並提供兩個輸入參數。第一個參數是事件的名稱，例如 `keyup`。第二個參數是事件發生時應該執行的函式。

以下是一個範例：

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

對於鍵盤事件，事件上有兩個屬性可以用來查看按下了哪個鍵：

- `key`：這是一個字串，表示按下的鍵，例如 `ArrowUp`。
- `keyCode`：這是一個數字表示，例如 `37`，對應於 `ArrowLeft`。

✅ 鍵盤事件的操作在遊戲開發之外也很有用。你能想到這種技術的其他用途嗎？

### 特殊鍵：注意事項

有一些*特殊*鍵會影響視窗。這意味著如果你正在監聽 `keyup` 事件，並使用這些特殊鍵來移動你的英雄，它也會執行水平滾動。因此，在構建遊戲時，你可能需要*關閉*這種內建的瀏覽器行為。你需要如下程式碼：

```javascript
let onKeyDown = function (e) {
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

上述程式碼將確保箭頭鍵和空格鍵的*預設*行為被關閉。當我們呼叫 `e.preventDefault()` 時，就實現了*關閉*機制。

## 遊戲驅動的移動

我們可以使用計時器（例如 `setTimeout()` 或 `setInterval()` 函式）讓物件自行移動，這些函式會在每個時間間隔更新物件的位置。以下是範例：

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## 遊戲迴圈

遊戲迴圈是一個概念，本質上是一個以固定間隔調用的函式。它被稱為遊戲迴圈，因為所有應該顯示給使用者的內容都會在這個迴圈中繪製。遊戲迴圈會使用遊戲中的所有物件，並繪製它們，除非某些物件不再屬於遊戲的一部分。例如，如果一個物件是被雷射擊中的敵人並爆炸，那麼它就不再屬於當前的遊戲迴圈（你會在後續課程中學到更多）。

以下是遊戲迴圈的典型程式碼表達方式：

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

上述迴圈每 `200` 毫秒調用一次以重新繪製畫布。你可以選擇最適合你遊戲的間隔。

## 繼續太空遊戲

你將使用現有的程式碼並進行擴展。可以從你在第一部分完成的程式碼開始，或者使用 [第二部分的起始程式碼](../../../../6-space-game/3-moving-elements-around/your-work)。

- **移動英雄**：你將新增程式碼，確保可以使用箭頭鍵移動英雄。
- **移動敵人**：你還需要新增程式碼，確保敵人以一定的速度從上到下移動。

## 推薦步驟

找到在 `your-work` 子資料夾中為你建立的檔案。它應該包含以下內容：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

你可以透過輸入以下指令啟動專案的 `your_work` 資料夾：

```bash
cd your-work
npm start
```

上述指令將在位址 `http://localhost:5000` 啟動一個 HTTP 伺服器。打開瀏覽器並輸入該位址，目前應該會顯示英雄和所有敵人；但它們還不會移動！

### 新增程式碼

1. **新增專用物件**：為 `hero`、`enemy` 和 `game object` 新增專用物件，它們應該具有 `x` 和 `y` 屬性。（記得參考 [繼承或組合](../README.md) 的部分）。

   *提示*：`game object` 應該是具有 `x` 和 `y` 屬性並能夠將自己繪製到畫布上的物件。

   >提示：從新增一個 GameObject 類別開始，並按照以下方式定義其建構函式，然後將其繪製到畫布上：
  
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

    現在，擴展這個 GameObject 來建立 Hero 和 Enemy。
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **新增鍵盤事件處理程式**：處理鍵盤導航（移動英雄上下左右）。

   *記住*：這是一個笛卡兒系統，左上角是 `0,0`。還要記得新增程式碼來停止*預設行為*。

   >提示：建立你的 onKeyDown 函式並將其附加到視窗：

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   此時檢查你的瀏覽器主控台，觀察按鍵記錄。

3. **實現** [Pub sub 模式](../README.md)，這將使你的程式碼在後續部分保持清晰。

   要完成這部分，你可以：

   1. **在視窗上新增事件監聽器**：

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

    1. **建立一個 EventEmitter 類別**，用於發布和訂閱訊息：

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
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **新增常數**並設置 EventEmitter：

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

    1. **初始化遊戲**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **設置遊戲迴圈**

   重構 window.onload 函式以初始化遊戲並在適當的間隔設置遊戲迴圈。你還將新增一個雷射光束：

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **新增程式碼**：以一定的間隔移動敵人。

    重構 `createEnemies()` 函式以建立敵人並將它們推入新的 gameObjects 類別：

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
    
    並新增一個 `createHero()` 函式，對英雄執行類似的過程。
    
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

    最後，新增一個 `drawGameObjects()` 函式以開始繪製：

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    你的敵人應該開始向你的英雄太空船進攻了！

---

## 🚀 挑戰

如你所見，當你開始新增函式、變數和類別時，程式碼可能會變成「意大利麵條式程式碼」。你如何更好地組織程式碼，使其更具可讀性？即使程式碼仍然位於一個檔案中，也試著設計一個系統來組織它。

## 課後測驗

[課後測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## 複習與自學

雖然我們在不使用框架的情況下編寫遊戲，但有許多基於 JavaScript 的畫布框架可用於遊戲開發。花些時間閱讀有關這些框架的資訊：[閱讀更多](https://github.com/collections/javascript-game-engines)。

## 作業

[為你的程式碼新增註解](assignment.md)

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。