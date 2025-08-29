<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T15:21:34+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "tw"
}
-->
# 建立太空遊戲第 5 部分：分數與生命值

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/37)

在這一課中，你將學習如何在遊戲中加入分數計算以及生命值機制。

## 在螢幕上繪製文字

為了能夠在螢幕上顯示遊戲分數，你需要知道如何在螢幕上放置文字。答案是使用 canvas 物件的 `fillText()` 方法。你還可以控制其他方面，例如使用的字體、文字顏色，甚至是對齊方式（左對齊、右對齊、置中）。以下是一些在螢幕上繪製文字的程式碼。

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ 閱讀更多關於[如何在 canvas 上添加文字](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text)的內容，並隨意讓你的文字看起來更有特色！

## 生命值作為遊戲概念

在遊戲中，生命值的概念只是一個數字。在太空遊戲的情境中，通常會分配一組生命值，當你的飛船受到傷害時，生命值會逐一減少。如果能用圖形化的方式來表示生命值，例如小型飛船或愛心，而不是單純的數字，會更直觀。

## 要實現的功能

讓我們為你的遊戲新增以下功能：

- **遊戲分數**：每摧毀一艘敵方飛船，英雄應該獲得一些分數，我們建議每艘飛船 100 分。遊戲分數應顯示在左下角。
- **生命值**：你的飛船有三條生命值。每當敵方飛船與你碰撞時，你會失去一條生命值。生命值應顯示在右下角，並以以下圖形表示 ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.tw.png)。

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

上述指令會在地址 `http://localhost:5000` 啟動一個 HTTP 伺服器。打開瀏覽器並輸入該地址，現在應該會顯示英雄和所有敵人，當你按下左右方向鍵時，英雄會移動並能射擊敵人。

### 添加程式碼

1. **複製所需資源** 從 `solution/assets/` 資料夾複製到 `your-work` 資料夾；你需要添加一個 `life.png` 資源。在 `window.onload` 函數中添加 lifeImg：

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. 將 `lifeImg` 添加到資源列表中：

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **添加變數**。新增程式碼來表示你的總分數（0）和剩餘生命值（3），並將這些分數顯示在螢幕上。

3. **擴展 `updateGameObjects()` 函數**。擴展 `updateGameObjects()` 函數以處理敵人碰撞：

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **添加生命值和分數**。  
   1. **初始化變數**。在 `Hero` 類別中的 `this.cooldown = 0` 下，設置生命值和分數：

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **在螢幕上繪製變數**。將這些值繪製到螢幕上：

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **將方法添加到遊戲循環中**。確保在 `window.onload` 函數中的 `updateGameObjects()` 下添加這些函數：

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **實現遊戲規則**。實現以下遊戲規則：

   1. **每當英雄與敵人碰撞時**，扣除一條生命值。
   
      擴展 `Hero` 類別以執行此扣除：

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **每當雷射擊中敵人時**，遊戲分數增加 100 分。

      擴展 `Hero` 類別以執行此加分：
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        將這些函數添加到你的碰撞事件觸發器中：

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ 做一些研究，了解其他使用 JavaScript/Canvas 創建的遊戲。它們有哪些共同特點？

完成這些工作後，你應該能在右下角看到小型的「生命值」飛船，在左下角看到分數，並且當你與敵人碰撞時，生命值會減少；當你射擊敵人時，分數會增加。做得好！你的遊戲已接近完成。

---

## 🚀 挑戰

你的程式碼已接近完成。你能想像下一步該做什麼嗎？

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/38)

## 回顧與自學

研究一些方法來增減遊戲分數和生命值。有一些有趣的遊戲引擎，例如 [PlayFab](https://playfab.com)。使用這些引擎如何提升你的遊戲體驗？

## 作業

[建立一個計分遊戲](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。