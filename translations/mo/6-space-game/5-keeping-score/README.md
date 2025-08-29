<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-28T23:36:09+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "mo"
}
-->
# 建造太空遊戲第五部分：分數與生命

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/37)

在本課中，你將學習如何在遊戲中添加分數並計算生命。

## 在螢幕上繪製文字

為了能夠在螢幕上顯示遊戲分數，你需要知道如何在螢幕上放置文字。答案是使用畫布物件的 `fillText()` 方法。你還可以控制其他方面，例如使用什麼字體、文字的顏色，甚至文字的對齊方式（左、右、居中）。以下是一些在螢幕上繪製文字的程式碼。

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ 閱讀更多關於[如何在畫布上添加文字](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text)的內容，並隨意讓你的文字看起來更有趣！

## 生命作為遊戲概念

在遊戲中，生命的概念只是一個數字。在太空遊戲的背景下，通常會分配一組生命，當你的飛船受到傷害時，生命會逐一減少。如果能用迷你飛船或心形圖案來顯示生命的圖形表示，而不是僅僅用數字，會更好。

## 要建造什麼

讓我們在你的遊戲中添加以下內容：

- **遊戲分數**：每摧毀一艘敵方飛船，英雄應獲得一些分數，我們建議每艘飛船獲得100分。遊戲分數應顯示在左下角。
- **生命**：你的飛船有三條生命。每當敵方飛船與你碰撞時，你會失去一條生命。生命分數應顯示在右下角，並由以下圖形表示 ![生命圖像](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.mo.png)。

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

你可以通過輸入以下指令在 `your_work` 資料夾中啟動你的專案：

```bash
cd your-work
npm start
```

上述指令將在地址 `http://localhost:5000` 上啟動一個 HTTP 伺服器。打開瀏覽器並輸入該地址，現在它應該渲染英雄和所有敵人，當你按下左右箭頭時，英雄會移動並可以擊落敵人。

### 添加程式碼

1. **複製所需資產** 從 `solution/assets/` 資料夾到 `your-work` 資料夾；你需要添加一個 `life.png` 資產。將 lifeImg 添加到 window.onload 函數中：

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. 將 `lifeImg` 添加到資產列表中：

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **添加變數**。添加代表你的總分數（0）和剩餘生命（3）的程式碼，並在螢幕上顯示這些分數。

3. **擴展 `updateGameObjects()` 函數**。擴展 `updateGameObjects()` 函數以處理敵人碰撞：

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **添加生命和分數**。 
   1. **初始化變數**。在 `Hero` 類中的 `this.cooldown = 0` 下設置生命和分數：

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

   1. **將方法添加到遊戲循環**。確保你在 `updateGameObjects()` 下將這些函數添加到你的 window.onload 函數中：

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **實現遊戲規則**。實現以下遊戲規則：

   1. **每次英雄與敵人碰撞**，扣除一條生命。
   
      擴展 `Hero` 類以執行此扣除：

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **每次雷射擊中敵人**，遊戲分數增加100分。

      擴展 Hero 類以執行此增量：
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        將這些函數添加到你的碰撞事件發射器中：

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

✅ 做一些研究，探索其他使用 JavaScript/Canvas 創建的遊戲。它們有哪些共同特點？

完成這些工作後，你應該能在右下角看到小型的“生命”飛船，在左下角看到分數，並且當你與敵人碰撞時生命計數會減少，當你擊中敵人時分數會增加。做得好！你的遊戲幾乎完成了。

---

## 🚀 挑戰

你的程式碼幾乎完成了。你能想像下一步該做什麼嗎？

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/38)

## 回顧與自學

研究一些可以增減遊戲分數和生命的方法。有一些有趣的遊戲引擎，例如 [PlayFab](https://playfab.com)。使用其中一個引擎如何能提升你的遊戲？

## 作業

[建造一個計分遊戲](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。