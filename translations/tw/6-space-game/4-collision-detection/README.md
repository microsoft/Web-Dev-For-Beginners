<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-23T23:00:44+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "tw"
}
-->
# 建造太空遊戲第四部分：新增雷射並檢測碰撞

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/35)

在本課中，你將學習如何使用 JavaScript 發射雷射！我們將為遊戲新增以下兩項功能：

- **雷射**：雷射從英雄的飛船垂直向上發射
- **碰撞檢測**，作為實現射擊功能的一部分，我們還會加入一些有趣的遊戲規則：
   - **雷射擊中敵人**：敵人被雷射擊中後死亡
   - **雷射擊中螢幕頂部**：雷射擊中螢幕頂部後被銷毀
   - **敵人與英雄碰撞**：敵人與英雄相撞後雙方都被銷毀
   - **敵人到達螢幕底部**：敵人到達螢幕底部後，敵人和英雄都被銷毀

簡而言之，你——*英雄*——需要在敵人到達螢幕底部之前，用雷射擊中所有敵人。

✅ 做一些研究，了解第一個被編寫的電腦遊戲。它的功能是什麼？

讓我們一起成為英雄吧！

## 碰撞檢測

我們如何進行碰撞檢測？需要將遊戲物件視為移動的矩形。你可能會問為什麼？因為用來繪製遊戲物件的圖像是一個矩形：它有 `x`、`y`、`寬度` 和 `高度`。

如果兩個矩形（例如英雄和敵人）*相交*，就發生了碰撞。碰撞後應該發生什麼取決於遊戲規則。要實現碰撞檢測，你需要以下內容：

1. 一種獲取遊戲物件矩形表示的方法，例如：

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

2. 一個比較函數，該函數可以如下所示：

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## 我們如何銷毀物件

要在遊戲中銷毀物件，你需要讓遊戲知道在某個時間間隔觸發的遊戲迴圈中不再繪製該物件。一種方法是當某些事情發生時，將遊戲物件標記為*死亡*，如下所示：

```javascript
// collision happened
enemy.dead = true
```

然後你可以在重新繪製螢幕之前篩選出*死亡*的物件，如下所示：

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## 我們如何發射雷射

發射雷射意味著響應按鍵事件並創建一個向某個方向移動的物件。因此，我們需要執行以下步驟：

1. **創建雷射物件**：從英雄飛船的頂部開始，創建後立即向螢幕頂部移動。
2. **綁定按鍵事件**：我們需要選擇鍵盤上的某個按鍵來代表玩家發射雷射。
3. **創建看起來像雷射的遊戲物件**：當按下按鍵時。

## 雷射的冷卻時間

雷射需要在每次按下按鍵（例如 *空格鍵*）時發射。為了防止遊戲在短時間內生成過多雷射，我們需要解決這個問題。解決方法是實現所謂的*冷卻時間*，即一個計時器，確保雷射只能以一定頻率發射。你可以這樣實現：

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

✅ 回顧太空遊戲系列的第一課，提醒自己關於*冷卻時間*的內容。

## 要建造什麼

你將使用上一課的現有程式碼（應該已清理並重構），並進行擴展。可以選擇使用第二部分的程式碼或使用 [第三部分的起始程式碼](../../../../../../../../../your-work)。

> 提示：你將使用的雷射已經在你的資產資料夾中，並且已被程式碼引用。

- **新增碰撞檢測**，當雷射與某物件碰撞時，應遵循以下規則：
   1. **雷射擊中敵人**：敵人被雷射擊中後死亡
   2. **雷射擊中螢幕頂部**：雷射擊中螢幕頂部後被銷毀
   3. **敵人與英雄碰撞**：敵人與英雄相撞後雙方都被銷毀
   4. **敵人到達螢幕底部**：敵人到達螢幕底部後，敵人和英雄都被銷毀

## 建議步驟

找到在 `your-work` 子資料夾中為你創建的檔案。它應包含以下內容：

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

你可以通過輸入以下指令啟動你的專案：

```bash
cd your-work
npm start
```

上述指令將在地址 `http://localhost:5000` 上啟動 HTTP 伺服器。打開瀏覽器並輸入該地址，目前應該可以渲染英雄和所有敵人，但還沒有任何移動。

### 新增程式碼

1. **設置遊戲物件的矩形表示以處理碰撞** 以下程式碼允許你獲取 `GameObject` 的矩形表示。編輯你的 GameObject 類以擴展它：

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

2. **新增檢測碰撞的程式碼** 這將是一個新函數，用於測試兩個矩形是否相交：

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

3. **新增雷射發射功能**
   1. **新增按鍵事件訊息**。*空格鍵*應在英雄飛船上方創建雷射。在 Messages 物件中新增三個常數：

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

    1. **新增監聽器**。編輯 `initGame()` 函數以確保英雄在按下空格鍵時可以發射雷射：

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       並新增一個新的 `eventEmitter.on()` 函數以確保當敵人與雷射碰撞時的行為：

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **移動物件**，確保雷射逐漸移動到螢幕頂部。你將創建一個新的 Laser 類，該類擴展了 `GameObject`，如之前所做：

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

   1. **處理碰撞**，實現雷射的碰撞規則。新增一個 `updateGameObjects()` 函數，用於測試碰撞物件是否命中：

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

      確保將 `updateGameObjects()` 新增到 `window.onload` 的遊戲迴圈中。

   4. **實現雷射的冷卻時間**，確保雷射只能以一定頻率發射。

      最後，編輯 Hero 類以實現冷卻功能：

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

到此為止，你的遊戲已具備一些功能！你可以使用方向鍵移動，用空格鍵發射雷射，並且當雷射擊中敵人時，敵人會消失。做得好！

---

## 🚀 挑戰

新增爆炸效果！查看 [太空藝術資源庫](../../../../6-space-game/solution/spaceArt/readme.txt) 中的遊戲資產，嘗試在雷射擊中外星人時新增爆炸效果。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/36)

## 回顧與自學

嘗試調整遊戲中的時間間隔。當你改變它們時會發生什麼？閱讀更多關於 [JavaScript 計時事件](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/) 的內容。

## 作業

[探索碰撞](assignment.md)

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤讀概不負責。