# 建立太空遊戲 Part 5：分數與生命數

## 課前測驗

[課前測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37?loc=zh_tw)

在這堂課中，你會學習如何為遊戲加入計分功能與計算性命數。

## 在畫面上繪製文字

為了在畫面上顯示遊戲分數，你需要了解如何配置文字。答案是在 Canvas 物件上使用方法 `fillText()`。你也可以控制其他特徵，例如文字字型、文字顏色甚至文字對齊方向(左、右、置中)。下面是在畫面中繪製一些文字。

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ 閱讀更多關於[在畫布上建立文字](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text)，你可以自由地豐富你的文字！

## 性命，一個遊戲概念

遊戲中的生命概念只是一個數字。在太空遊戲中，在你的船艦受到攻擊時，扣除生命值是一種常見的方式。如果能以圖像的方式顯示生命值也是很好的方式，例如船艦圖示、心臟圖像，而非單純使用數字。

## 建立目標

我們在遊戲中新增下列功能：

- **遊戲分數**：當每一艘敵軍艦艇被摧毀時，英雄應該取得一些獎勵分數，我們建議一艘敵艦一百分。遊戲總分應該顯示在畫面的左下角。
- **生命值**：你的船艦有三條性命。在每一次敵軍艦艇撞擊你時，你會損失一條性命。生命數應該顯示在畫面的右下角，以下列圖像顯示出來。 ![性命圖片](../solution/assets/life.png)

## 建議步驟

在你的 `your-work` 子資料夾中，確認檔案是否建立完成。它應該包括：

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

開始 `your_work` 資料夾中的專案，輸入：

```bash
cd your-work
npm start
```

這會啟動 HTTP 伺服器並發布網址 `http://localhost:5000`。開啟瀏覽器並輸入該網址，現在它能顯示出英雄與所有的敵人，在你操作方向鍵後，英雄能移動並擊落敵人。

### 加入程式碼

1. 從資料夾 `solution/assets/` **複製你需要的檔案** 到資料夾 `your-work` 中。你會加入檔案 `life.png`。在函式 window.onload 中加入 lifeImg ： 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. 在檔案清單中加入 `lifeImg`：

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **新增變數**。 加入程式碼表達你的遊戲總分(0)和剩餘性命(3)，並顯示在畫面上。

3. **擴增函式 `updateGameObjects()`**。 擴增函式 `updateGameObjects()` 來處理敵軍碰撞：

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **加入 `life` 與 `points`**. 
   1. **初始化變數**。 在 `Hero` class 的 `this.cooldown = 0` 下方，設定性命與分數：

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **在畫面上顯示變數內容**。 在畫面上繪製這些數值：

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

   1. **在遊戲迴圈中加入呼叫**。 請確保你加入這些函式到 `updateGameObjects()` 下方的 window.onload 內：

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **制定遊戲規則**。 制定下列的遊戲規則：

   1. **在英雄與敵人發生碰撞時**，扣除一條生命。
   
      擴增 `Hero` class 來執行這段減法：

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **當雷射擊中敵人時**，增加遊戲總分一百分。

      擴增 Hero class 來執行這段加法：
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        加入這些函式到碰撞事件發送器中：

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

✅ 做點研究，探索其他使用到 JavaScript 與 Canvas 的遊戲。他們有什麼共同特徵？

在這個工作的尾聲，你應該能在右下方看到「性命」小船；左下方看到遊戲總分。當你碰撞到敵人時會扣除生命；當你擊落敵人時會增加分數。做得好！你的遊戲就快完成了。

---

## 🚀 挑戰

你的程式就快完成了。你能預測到下一步嗎？

## 課後測驗

[課後測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38?loc=zh_tw)

## 複習與自學

研究其他種增加與減少分數與生命數的方法。這邊有一些有趣的遊戲引擎，例如：[PlayFab](https://playfab.com)。使用這些引擎能如何增進你的遊戲？

## 作業

[建立計分遊戲](assignment.zh-tw.md)
