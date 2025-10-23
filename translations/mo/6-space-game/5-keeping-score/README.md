<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-22T22:55:36+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "mo"
}
-->
# 建立太空遊戲第 5 部分：分數與生命值

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/37)

準備好讓你的太空遊戲更像一個真正的遊戲了嗎？讓我們來加入計分和管理生命值的功能——這是將早期街機遊戲如《太空侵略者》從簡單的演示轉變為令人上癮的娛樂的核心機制。這是讓你的遊戲真正變得可玩的關鍵。

## 在螢幕上繪製文字 - 遊戲的聲音

為了顯示你的分數，我們需要學習如何在畫布上渲染文字。`fillText()` 方法是你的主要工具——這與經典街機遊戲中用來顯示分數和狀態資訊的技術相同。

你可以完全控制文字的外觀：

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ 深入了解 [在畫布上添加文字](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - 你可能會對字體和樣式的創意空間感到驚訝！

## 生命值 - 不僅僅是一個數字

在遊戲設計中，「生命值」代表玩家的容錯空間。這個概念可以追溯到彈珠機，當時玩家可以使用多個球進行遊戲。在早期的電子遊戲如《小行星》中，生命值讓玩家可以冒險並從錯誤中學習。

視覺表現非常重要——用飛船圖標來顯示，而不是僅僅顯示「生命值：3」，可以立即產生視覺識別，這與早期街機機台使用圖像來跨越語言障礙進行溝通的方式類似。

## 建立遊戲的獎勵系統

現在我們將實現讓玩家保持參與的核心反饋系統：

- **計分系統**：每摧毀一艘敵方飛船可獲得 100 分（整數分數更容易讓玩家心算）。分數顯示在左下角。
- **生命值計數器**：你的英雄從三條生命開始——這是早期街機遊戲為了平衡挑戰性與可玩性而建立的標準。每次與敵人碰撞會損失一條生命。我們將使用飛船圖標在右下角顯示剩餘生命值 ![生命圖標](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.mo.png)。

## 開始構建吧！

首先，設置你的工作區。導航到 `your-work` 子文件夾中的文件。你應該會看到以下文件：

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

要測試你的遊戲，從 `your_work` 文件夾啟動開發伺服器：

```bash
cd your-work
npm start
```

這會在 `http://localhost:5000` 上運行一個本地伺服器。在瀏覽器中打開這個地址來查看你的遊戲。使用方向鍵測試控制，並嘗試射擊敵人以驗證一切是否正常運行。

### 開始編碼！

1. **獲取所需的視覺資產**。將 `solution/assets/` 文件夾中的 `life.png` 資產複製到你的 `your-work` 文件夾中。然後將 lifeImg 添加到你的 window.onload 函數中：

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. 別忘了將 `lifeImg` 添加到你的資產列表中：

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **設置遊戲變數**。添加一些代碼來追蹤你的總分（從 0 開始）和剩餘生命值（從 3 開始）。我們將在螢幕上顯示這些資訊，讓玩家隨時知道自己的狀態。

3. **實現碰撞檢測**。擴展你的 `updateGameObjects()` 函數，以檢測敵人何時與你的英雄碰撞：

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **為你的英雄添加生命值和分數追蹤功能**。 
   1. **初始化計數器**。在 `Hero` 類中的 `this.cooldown = 0` 下設置生命值和分數：

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **向玩家顯示這些值**。創建函數在螢幕上繪製這些值：

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

   1. **將這些函數整合到遊戲循環中**。在 `updateGameObjects()` 之後，將這些函數添加到你的 window.onload 函數中：

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **實現遊戲的後果與獎勵**。現在我們將添加讓玩家行動變得有意義的反饋系統：

   1. **碰撞會損失生命值**。每次你的英雄與敵人相撞時，你應該損失一條生命。
   
      將此方法添加到你的 `Hero` 類中：

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **射擊敵人獲得分數**。每次成功擊中可獲得 100 分，為準確射擊提供即時的正面反饋。

      使用此增量方法擴展你的 Hero 類：
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        現在將這些函數連接到你的碰撞事件中：

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

✅ 對用 JavaScript 和 Canvas 製作的其他遊戲感到好奇嗎？探索一下——你可能會對可能性感到驚訝！

在實現這些功能後，測試你的遊戲，看看完整的反饋系統如何運作。你應該會在右下角看到生命值圖標，在左下角看到分數，並觀察到碰撞會減少生命值，而成功射擊會增加分數。

你的遊戲現在擁有了讓早期街機遊戲如此吸引人的基本機制——明確的目標、即時的反饋，以及對玩家行動的有意義的後果。

---

## GitHub Copilot Agent 挑戰 🚀

使用 Agent 模式完成以下挑戰：

**描述：** 通過實現高分功能（具有持久存儲）和額外的得分機制來增強太空遊戲的計分系統。

**提示：** 創建一個高分系統，將玩家的最佳分數保存到 localStorage。為連續擊殺敵人（連擊系統）添加額外分數，並為不同類型的敵人設置不同的分數值。當玩家達到新高分時，顯示一個視覺指示，並在遊戲螢幕上顯示當前的高分。

## 🚀 挑戰

你現在擁有了一個具有計分和生命值功能的完整遊戲。考慮還有哪些額外功能可以提升玩家的遊戲體驗。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/38)

## 回顧與自學

想要探索更多嗎？研究不同的遊戲計分和生命值系統方法。有一些令人著迷的遊戲引擎，例如 [PlayFab](https://playfab.com)，可以處理計分、排行榜和玩家進度。整合這樣的工具如何能讓你的遊戲更上一層樓？

## 作業

[建立一個計分遊戲](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。