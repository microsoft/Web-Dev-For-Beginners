<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-23T23:07:01+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "tw"
}
-->
# 建立太空遊戲第六部分：結束與重新開始

## 課前測驗

[課前測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

在遊戲中，有多種方式可以表達*結束條件*。作為遊戲的創作者，您可以決定遊戲為什麼會結束。以下是一些可能的原因，假設我們正在討論您目前正在構建的太空遊戲：

- **摧毀了 `N` 艘敵方飛船**：如果您將遊戲分為不同的關卡，通常需要摧毀 `N` 艘敵方飛船才能完成一個關卡。
- **您的飛船被摧毀**：有些遊戲中，如果您的飛船被摧毀，您就會輸掉遊戲。另一種常見的方式是引入生命值的概念。每次飛船被摧毀時，會扣除一條生命值。一旦所有生命值都耗盡，遊戲就結束。
- **收集了 `N` 分**：另一個常見的結束條件是收集一定的分數。如何獲得分數取決於您，但通常會將分數分配給各種活動，例如摧毀敵方飛船，或者收集敵方飛船被摧毀後掉落的物品。
- **完成一個關卡**：這可能涉及多種條件，例如摧毀 `X` 艘敵方飛船、收集 `Y` 分數，或者收集特定的物品。

## 重新開始

如果玩家喜歡您的遊戲，他們可能會想要重玩一次。無論遊戲因為什麼原因結束，您都應該提供重新開始的選項。

✅ 想一想，您認為遊戲在什麼條件下會結束，然後玩家是如何被提示重新開始的。

## 要構建的內容

您將為遊戲添加以下規則：

1. **贏得遊戲**：當所有敵方飛船被摧毀時，您贏得遊戲。此外，顯示某種勝利訊息。
2. **重新開始**：當所有生命值耗盡或遊戲勝利時，您應該提供重新開始遊戲的方式。記住！您需要重新初始化遊戲，並清除之前的遊戲狀態。

## 建議步驟

找到在 `your-work` 子文件夾中為您創建的文件。它應該包含以下內容：

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

在 `your_work` 文件夾中啟動您的項目，輸入以下指令：

```bash
cd your-work
npm start
```

上述指令將在地址 `http://localhost:5000` 上啟動一個 HTTP 伺服器。打開瀏覽器並輸入該地址。您的遊戲應該處於可玩狀態。

> 提示：為了避免在 Visual Studio Code 中出現警告，編輯 `window.onload` 函數，直接調用 `gameLoopId`（不加 `let`），並在文件頂部獨立聲明 `gameLoopId`：`let gameLoopId;`

### 添加程式碼

1. **追蹤結束條件**：添加程式碼來追蹤敵方數量，或者英雄飛船是否被摧毀，通過添加以下兩個函數：

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

2. **添加邏輯到訊息處理器**：編輯 `eventEmitter` 以處理這些條件：

    ```javascript
    eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
        hero.incrementPoints();

        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });

    eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
        enemy.dead = true;
        hero.decrementLife();
        if (isHeroDead())  {
          eventEmitter.emit(Messages.GAME_END_LOSS);
          return; // loss before victory
        }
        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });
    
    eventEmitter.on(Messages.GAME_END_WIN, () => {
        endGame(true);
    });
      
    eventEmitter.on(Messages.GAME_END_LOSS, () => {
      endGame(false);
    });
    ```

3. **添加新的訊息類型**：將這些訊息添加到常量對象中：

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

4. **添加重新開始的程式碼**：編寫在按下選定按鍵時重新開始遊戲的程式碼。

   1. **監聽按鍵 `Enter`**：編輯您的窗口事件監聽器以監聽此按鍵：

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   2. **添加重新開始訊息**：將此訊息添加到您的 Messages 常量中：

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

5. **實現遊戲規則**：實現以下遊戲規則：

   1. **玩家勝利條件**：當所有敵方飛船被摧毀時，顯示勝利訊息。

      1. 首先，創建一個 `displayMessage()` 函數：

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      2. 創建一個 `endGame()` 函數：

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // set a delay so we are sure any paints have finished
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (win) {
              displayMessage(
                "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
                "green"
              );
            } else {
              displayMessage(
                "You died !!! Press [Enter] to start a new game Captain Pew Pew"
              );
            }
          }, 200)  
        }
        ```

   2. **重新開始邏輯**：當所有生命值耗盡或玩家贏得遊戲時，顯示可以重新開始遊戲的提示。此外，當按下*重新開始*按鍵時重新開始遊戲（您可以決定哪個按鍵對應於重新開始）。

      1. 創建 `resetGame()` 函數：

        ```javascript
        function resetGame() {
          if (gameLoopId) {
            clearInterval(gameLoopId);
            eventEmitter.clear();
            initGame();
            gameLoopId = setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "black";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              drawPoints();
              drawLife();
              updateGameObjects();
              drawGameObjects(ctx);
            }, 100);
          }
        }
        ```

      2. 在 `initGame()` 中添加對 `eventEmitter` 的調用以重置遊戲：

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

      3. 為 EventEmitter 添加一個 `clear()` 函數：

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 恭喜您，船長！您的遊戲已完成！幹得好！🚀 💥 👽

---

## 🚀 挑戰

添加音效！您能否為遊戲添加音效來增強遊戲體驗，例如當激光擊中、英雄死亡或勝利時？查看這個 [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) 來學習如何使用 JavaScript 播放音效。

## 課後測驗

[課後測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## 回顧與自學

您的作業是創建一個全新的樣本遊戲，因此請探索一些有趣的遊戲，看看您可能會構建什麼類型的遊戲。

## 作業

[建立一個樣本遊戲](assignment.md)

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。