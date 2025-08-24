<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-23T22:55:17+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "tw"
}
-->
# 建立太空遊戲第三部分：加入動作

## 課前測驗

[課前測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

遊戲中有外星人在螢幕上移動才會更有趣！在這個遊戲中，我們將使用兩種移動方式：

- **鍵盤/滑鼠移動**：當使用者透過鍵盤或滑鼠與螢幕上的物件互動時。
- **遊戲引發的移動**：當遊戲以一定的時間間隔移動物件時。

那麼我們如何在螢幕上移動物件呢？這一切都與笛卡爾座標有關：我們改變物件的位置 (x, y)，然後重新繪製螢幕。

通常需要以下步驟來完成螢幕上的*移動*：

1. **設定物件的新位置**：這是讓物件看起來像移動過的必要步驟。
2. **清除螢幕**：在每次繪製之間需要清除螢幕。我們可以通過繪製一個填充背景色的矩形來清除螢幕。
3. **在新位置重新繪製物件**：通過這樣做，我們最終完成了將物件從一個位置移動到另一個位置。

以下是程式碼的示例：

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

✅ 你能想到為什麼每秒重繪你的英雄多幀可能會導致性能成本嗎？閱讀[此模式的替代方案](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)。

## 處理鍵盤事件

你可以通過將特定事件附加到程式碼來處理事件。鍵盤事件是在整個窗口上觸發的，而滑鼠事件（例如`click`）可以連接到點擊特定元素。我們將在整個專案中使用鍵盤事件。

要處理事件，你需要使用窗口的`addEventListener()`方法並提供兩個輸入參數。第一個參數是事件的名稱，例如`keyup`。第二個參數是事件發生時應該調用的函數。

以下是一個示例：

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

對於鍵盤事件，事件上有兩個屬性可以用來查看按下了哪個鍵：

- `key`：這是一個按鍵的字串表示，例如`ArrowUp`。
- `keyCode`：這是一個數字表示，例如`37`，對應於`ArrowLeft`。

✅ 鍵盤事件操作在遊戲開發之外也很有用。你能想到這種技術的其他用途嗎？

### 特殊鍵：注意事項

有一些*特殊*鍵會影響窗口。這意味著如果你正在監聽`keyup`事件並使用這些特殊鍵移動你的英雄，它也會執行水平滾動。因此，在構建遊戲時，你可能需要*關閉*這種內建的瀏覽器行為。你需要如下程式碼：

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

上述程式碼將確保箭頭鍵和空格鍵的*預設*行為被關閉。*關閉*機制發生在我們調用`e.preventDefault()`時。

## 遊戲引發的移動

我們可以通過使用計時器（例如`setTimeout()`或`setInterval()`函數）讓物件自行移動，這些計時器會在每個時間間隔更新物件的位置。以下是程式碼示例：

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## 遊戲循環

遊戲循環是一個概念，基本上是一個以固定間隔調用的函數。它被稱為遊戲循環，因為所有應該顯示給使用者的內容都會在循環中繪製。遊戲循環使用所有屬於遊戲的遊戲物件，繪製所有物件，除非某些原因使其不再屬於遊戲。例如，如果某個物件是被雷射擊中的敵人並爆炸，它就不再屬於當前的遊戲循環（你會在後續課程中學到更多）。

以下是遊戲循環的典型程式碼示例：

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

上述循環每`200`毫秒調用一次以重繪畫布。你可以選擇最適合你的遊戲的間隔。

## 繼續太空遊戲

你將擴展現有的程式碼。可以使用你在第一部分完成的程式碼，或者使用[第二部分的起始程式碼](../../../../6-space-game/3-moving-elements-around/your-work)。

- **移動英雄**：你將添加程式碼以確保可以使用箭頭鍵移動英雄。
- **移動敵人**：你還需要添加程式碼以確保敵人以一定速度從上到下移動。

## 推薦步驟

找到在`your-work`子資料夾中為你創建的檔案。它應包含以下內容：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

你可以通過輸入以下指令啟動你的專案：

```bash
cd your-work
npm start
```

上述指令將在地址`http://localhost:5000`啟動一個HTTP伺服器。打開瀏覽器並輸入該地址，現在它應該渲染英雄和所有敵人；目前還沒有任何移動！

### 添加程式碼

1. **為`hero`、`enemy`和`game object`添加專用物件**，它們應該具有`x`和`y`屬性。（記住[繼承或組合](../README.md)部分）。

   *提示*：`game object`應該是具有`x`和`y`屬性並能夠將自己繪製到畫布上的物件。

   >提示：首先添加一個新的GameObject類，其構造函數如下所示，然後將其繪製到畫布上：
  
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

    現在，擴展這個GameObject以創建Hero和Enemy。
    
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

2. **添加鍵盤事件處理程式**以處理鍵盤導航（移動英雄上下左右）。

   *記住*：這是一個笛卡爾系統，左上角是`0,0`。還要記得添加程式碼以停止*預設行為*。

   >提示：創建你的onKeyDown函數並將其附加到窗口：

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   此時檢查你的瀏覽器控制台，並觀察按鍵被記錄。

3. **實現**[Pub sub模式](../README.md)，這將使你的程式碼在接下來的部分中保持乾淨。

   要完成這部分，你可以：

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

    1. **創建一個EventEmitter類**以發布和訂閱消息：

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

    1. **添加常數**並設置EventEmitter：

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

1. **設置遊戲循環**

   重構window.onload函數以初始化遊戲並以適當的間隔設置遊戲循環。你還將添加一個雷射光束：

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

5. **添加程式碼**以使敵人在一定間隔內移動

    重構`createEnemies()`函數以創建敵人並將它們推入新的gameObjects類：

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
    
    並添加一個`createHero()`函數以對英雄執行類似的過程。
    
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

    最後，添加一個`drawGameObjects()`函數以開始繪製：

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    你的敵人應該開始向你的英雄飛船進攻！

---

## 🚀 挑戰

如你所見，當你開始添加函數、變數和類時，你的程式碼可能會變成「意大利麵條程式碼」。你如何更好地組織你的程式碼，使其更易讀？即使程式碼仍然位於一個檔案中，也請設計一個系統來組織你的程式碼。

## 課後測驗

[課後測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## 回顧與自學

雖然我們在不使用框架的情況下編寫遊戲，但有許多基於JavaScript的畫布框架可用於遊戲開發。花些時間閱讀[相關內容](https://github.com/collections/javascript-game-engines)。

## 作業

[為你的程式碼添加註解](assignment.md)

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而產生的任何誤解或錯誤解釋不承擔責任。