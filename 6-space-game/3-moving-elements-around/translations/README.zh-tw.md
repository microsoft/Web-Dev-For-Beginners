# 建立太空遊戲 Part 3：加入動作

## 課前測驗

[課前測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/33?loc=zh_tw)

有外星人在移動的遊戲才會好玩！在這款遊戲中，我們會建立兩種移動模式：

- **鍵盤滑鼠的移動**：當使用者控制鍵盤或滑鼠時，能移動畫面上的物件。
- **遊戲內建的移動**：遊戲能自動地在一定時間內，移動其中的物件。

那我們該如何移動畫面上的物件呢？這都取決於笛卡爾座標系：我們改變物件的座標 (x,y)，並在畫面上重新繪製出來。

通常你需要下列流程來*移動*畫面上的物件：

1. **設定物件的新地點**，你才能察覺到物件有所移動。
2. **清除畫面**，每一次的繪製間都需要將畫面清除乾淨。我們可以繪製一張背景色的矩形來覆蓋畫面。
3. **在新地點重新繪製物件**，我們就能移動物件，從 A 點移動到 B 點。

合理的程式碼如下所示：

```javascript
// 設定英雄位置
hero.x += 5;
// 利用矩形清除英雄
ctx.clearRect(0, 0, canvas.width, canvas.height);
// 重新繪製背景與英雄
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ 你能了解為什麼在同一秒內多次重新繪製英雄會影響效能的原因嗎？閱讀[其他種同目的之設計模式](https://www.html5rocks.com/en/tutorials/canvas/performance/)。

## 處理鍵盤事件

連接特定事件到程式中，你就能處理遊戲事件。鍵盤事件可以在視窗被選擇時觸發，而滑鼠事件如 `click`，則要點擊特定的物件。我們會在這個專案中，使用鍵盤物件。

要處理一種事件，需要使用視窗的 `addEventListener()` 方法，並提供給它兩個參數。第一個參數是事件的名稱，例如： `keyup`。第二個參數是回應事件結果的被呼叫函式。

下列是一種例子：

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = 按鍵字串
  if (evt.key === 'ArrowUp') {
    // 做某事
  }
})
```

鍵盤事件有兩個屬性來判別被按壓的按鍵：

- `key`，使用字串名稱表達該按鍵，例如： `ArrowUp`。
- `keyCode`，使用數字呈現，例如 `37` 會對應到 `ArrowLeft`。

✅ 除了遊戲開發以外，鍵盤事件也是十分實用的功能。你能想到其他使用相同技術的應用嗎？

### 特殊按鍵之限制

有許多*特殊*按鍵會影響視窗。這代表若我們正監聽著 `keyup` 事件，這個按鍵同時也會執行視窗的滾動行為。某些時候你會需要*關閉*這些瀏覽器中預設的行為，好比是建立這款遊戲時。你需要下列的程式：

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // 方向鍵
    case 32:
      e.preventDefault();
      break; // 空白鍵
    default:
      break; // 不阻止其他按鍵
  }
};

window.addEventListener('keydown', onKeyDown);
```

上述的程式碼能確保方向鍵與空白鍵關閉*預設*的行為。這個*關閉*機制會在我們呼叫 `e.preventDefault()` 時觸發。

## 遊戲內建的移動

我們可以讓物件自己移動，利用計時器如 `setTimeout()` 或是 `setInterval()` 這兩個函式，隨著秒數間隔更新物件的位置。如下方呈現：

```javascript
let id = setInterval(() => {
  // 在 y 軸上移動敵人
  enemy.y += 10;
})
```

## 遊戲迴圈

遊戲迴圈是個重要概念，定期地呼叫必須執行的函式。之所以被稱作遊戲迴圈也是基於所有東西會在一個迴圈中呈現給玩家。遊戲迴圈會利用到所有的遊戲物件，並依據各個情況與理由決定是否要繪製出它們。舉例來說，當一個敵人被雷射擊中，爆炸了。他就不應該存在於現在的遊戲迴圈中。你會在後續的課程學到更多此概念。

這是一個遊戲迴圈的基本格式，以程式碼表達如下：

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

上述的迴圈會每 `200` 毫秒重新繪製 Canvas。你能自由地判斷哪種時長更適合套用在你的遊戲中。

## 繼續我們的太空遊戲

你會利用現有的程式碼來擴增我們的專案。你可以使用你在 Part I 完成的程式，或是使用 [Part II - Starter](../your-work) 這包程式。

- **移動英雄**：你需要加入程式，確保你可以使用方向鍵來移動主角。
- **移動敵人**：你也需要加入程式，確保敵人能定期地由上往下移動。

## 建議步驟

在你的 `your-work` 子資料夾中，確認檔案是否建立完成。它應該包括：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

開始 `your_work` 資料夾中的專案，輸入：

```bash
cd your-work
npm start
```

這會啟動 HTTP 伺服器並發布網址 `http://localhost:5000`。開啟瀏覽器並輸入該網址，現在它能呈現英雄以及所有的敵人，但它們還沒辦法移動！

### 加入程式碼

1. **加入特定物件** `hero`、`enemy` 和 `game object`，它們皆有 `x` 與 `y` 位置屬性。(記得課程[繼承與組合](../../README.zh-tw.md)中的片段)。 

   *提示* `game object` 要有 `x` 和 `y`，以及繪製到畫布上的能力。

   >要點：開始建立 GameObject class ，結構如下所示，再繪製到畫布上：
  
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

    現在，延伸 GameObject 來建立英雄與敵人。
    
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

2. **加入鍵盤事件處理器**以處理鍵盤輸入(移動英雄的上下左右)

   *記住* 這是笛卡爾座標系，左上方為 `0,0`。也請記得關閉鍵盤的*預設行為*

   >要點：建立函式 onKeyDown 並連接到視窗中：

   ```javascript
    let onKeyDown = function (e) {
          console.log(e.keyCode);
            ...add the code from the lesson above to stop default behavior
          }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   這時候檢查你的瀏覽器命令欄，看看是否能偵測到鍵盤輸入。

3. **建立**[發布訂閱模式](../../README.zh-tw.md)，這能讓剩下的程式段落保持乾淨。

   要做到此步驟，你可以：

   1. **建立視窗的事件監聽者**：

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

    1. **建立 EventEmitter class** 以發布及訂閱訊息：

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

    1. **建立常數**並設定 EventEmitter：

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

1. **設定遊戲迴圈**

   重構函式 window.onload 來初始化遊戲，設定遊戲迴圈的定時間隔。你還需要加入雷射光：

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

5. **加入程式**來定期地移動敵人

    重構函式 `createEnemies()` 以建立敵人們，接到 gameObjects 中：

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
    
    新增函式 `createHero()` 來為英雄做相同的事情。
    
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

    最後，建立函式 `drawGameObjects()` 以開始繪製：

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    你的敵人開始會朝你的英雄艦艇前進！

---

## 🚀 挑戰

如你所見，在加入零零總總的函式、變數與 class 後，你的程式變成了「麵條式代碼(spaghetti code)」。你能有效的編排你的程式，讓它更容易被閱讀？勾劃出一個系統來組織你的程式碼，即使所有東西都在一個檔案中。

## 課後測驗

[課後測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/34?loc=zh_tw)

## 複習與自學

我們並沒有使用框架(frameworks)來編寫我們的遊戲，現在有許多 JavaScript 基底的 Canvas 框架，提供給遊戲開發使用。花點時間[閱讀這些框架](https://github.com/collections/javascript-game-engines)。

## 作業

[為你的程式做註解](assignment.zh-tw.md)
