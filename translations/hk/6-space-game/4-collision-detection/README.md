<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T15:02:51+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "hk"
}
-->
# 建立太空遊戲第4部分：加入雷射和偵測碰撞

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/35)

在這一課中，你將學習如何用 JavaScript 發射雷射！我們會為遊戲加入以下兩個功能：

- **雷射**：從英雄的飛船發射，垂直向上移動
- **碰撞偵測**：作為實現「射擊」功能的一部分，我們還會加入一些有趣的遊戲規則：
   - **雷射擊中敵人**：敵人被雷射擊中後會死亡
   - **雷射擊中螢幕頂部**：雷射擊中螢幕頂部後會被銷毀
   - **敵人與英雄碰撞**：敵人和英雄相撞後雙方都會被銷毀
   - **敵人到達螢幕底部**：敵人到達螢幕底部後，敵人和英雄都會被銷毀

簡而言之，你——*英雄*——需要在敵人到達螢幕底部之前，用雷射擊敗所有敵人。

✅ 做一些研究，了解第一個電腦遊戲是什麼？它的功能是什麼？

讓我們一起成為英雄吧！

## 碰撞偵測

我們該如何進行碰撞偵測？我們需要將遊戲中的物件視為移動的矩形。你可能會問，為什麼是矩形？因為用來繪製遊戲物件的圖像本身就是一個矩形：它有 `x`、`y`、`width` 和 `height`。

如果兩個矩形（例如英雄和敵人）*相交*，那麼就發生了碰撞。碰撞後應該發生什麼，則取決於遊戲的規則。要實現碰撞偵測，你需要以下幾點：

1. 一種方法來獲取遊戲物件的矩形表示，例如：

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. 一個比較函數，該函數可以像這樣：

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## 如何銷毀物件

要在遊戲中銷毀物件，你需要讓遊戲知道在某個時間間隔觸發的遊戲循環中不再繪製該物件。一種方法是當某些事情發生時，將遊戲物件標記為*死亡*，如下所示：

```javascript
// collision happened
enemy.dead = true
```

然後你可以在重新繪製螢幕之前，篩選出*死亡*的物件，如下所示：

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## 如何發射雷射

發射雷射的過程是響應按鍵事件並創建一個向某個方向移動的物件。因此，我們需要執行以下步驟：

1. **創建雷射物件**：從英雄飛船的頂部發射，創建後開始向螢幕頂部移動。
2. **綁定按鍵事件**：我們需要選擇鍵盤上的某個按鍵來代表玩家發射雷射。
3. **創建一個看起來像雷射的遊戲物件**：當按下按鍵時。

## 雷射的冷卻時間

雷射需要在每次按下按鍵（例如空格鍵）時發射。為了防止遊戲在短時間內生成過多雷射，我們需要解決這個問題。解決方法是實現所謂的*冷卻時間*，即一個計時器，確保雷射只能在一定時間間隔內發射一次。你可以這樣實現：

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ 回顧太空遊戲系列的第一課，提醒自己什麼是*冷卻時間*。

## 要建構的內容

你將使用上一課的程式碼（應該已經清理並重構過），並進一步擴展它。可以從第二部分的程式碼開始，或者使用 [第三部分的起始程式碼](../../../../../../../../../your-work)。

> 提示：你將使用的雷射已經在資產資料夾中，並且已在程式碼中引用。

- **加入碰撞偵測**，當雷射與某物件碰撞時，應遵循以下規則：
   1. **雷射擊中敵人**：敵人被雷射擊中後會死亡
   2. **雷射擊中螢幕頂部**：雷射擊中螢幕頂部後會被銷毀
   3. **敵人與英雄碰撞**：敵人和英雄相撞後雙方都會被銷毀
   4. **敵人到達螢幕底部**：敵人到達螢幕底部後，敵人和英雄都會被銷毀

## 推薦步驟

找到在 `your-work` 子資料夾中為你創建的檔案。它應該包含以下內容：

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

你可以通過輸入以下指令來啟動專案：

```bash
cd your-work
npm start
```

上述指令會在地址 `http://localhost:5000` 啟動一個 HTTP 伺服器。打開瀏覽器並輸入該地址，目前應該只會顯示英雄和所有敵人，暫時還沒有任何移動。

### 加入程式碼

1. **為遊戲物件設置矩形表示以處理碰撞** 以下程式碼允許你獲取 `GameObject` 的矩形表示。編輯你的 GameObject 類別以擴展它：

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **加入檢查碰撞的程式碼** 這將是一個新函數，用於測試兩個矩形是否相交：

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **加入雷射發射功能**
   1. **加入按鍵事件訊息**。按下*空格鍵*應該在英雄飛船的正上方創建一個雷射。在 Messages 物件中加入三個常數：

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **處理空格鍵**。編輯 `window.addEventListener` 的 keyup 函數以處理空格鍵：

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **加入監聽器**。編輯 `initGame()` 函數，確保當按下空格鍵時英雄可以發射雷射：

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       並加入一個新的 `eventEmitter.on()` 函數，確保當敵人與雷射碰撞時觸發行為：

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **移動物件**，確保雷射逐漸移動到螢幕頂部。你將創建一個新的 Laser 類別，繼承自 `GameObject`，如之前所做：

      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **處理碰撞**，實現雷射的碰撞規則。加入一個 `updateGameObjects()` 函數，用於測試碰撞物件是否命中：

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      確保將 `updateGameObjects()` 加入到 `window.onload` 的遊戲循環中。

   4. **實現雷射的冷卻時間**，確保雷射只能在一定時間間隔內發射。

      最後，編輯 Hero 類別以實現冷卻功能：

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

到這裡，你的遊戲已經具備了一些功能！你可以用方向鍵移動，用空格鍵發射雷射，並且當雷射擊中敵人時，敵人會消失。做得好！

---

## 🚀 挑戰

加入爆炸效果！查看 [Space Art 資源庫](../../../../6-space-game/solution/spaceArt/readme.txt) 中的遊戲資產，嘗試在雷射擊中外星人時加入爆炸效果。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/36)

## 回顧與自學

試著調整遊戲中的時間間隔。當你改變它們時會發生什麼？閱讀更多關於 [JavaScript 計時事件](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/) 的內容。

## 作業

[探索碰撞](assignment.md)

---

**免責聲明**：  
此文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤詮釋概不負責。