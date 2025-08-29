<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-28T23:37:07+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "mo"
}
-->
# 建立太空遊戲第六部分：結束與重新開始

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/39)

在遊戲中有不同方式表達*結束條件*。作為遊戲的創作者，您可以決定遊戲結束的原因。以下是一些可能的原因，假設我們正在討論您目前正在建立的太空遊戲：

- **摧毀了 `N` 敵方飛船**：如果您將遊戲分成不同的關卡，通常需要摧毀 `N` 敵方飛船才能完成一個關卡。
- **您的飛船被摧毀**：有些遊戲中，如果您的飛船被摧毀，您就會輸掉遊戲。另一種常見的方式是引入生命值的概念。每次您的飛船被摧毀，生命值就會減少一次。一旦所有生命值耗盡，您就輸掉遊戲。
- **收集了 `N` 分數**：另一種常見的結束條件是收集分數。如何獲得分數取決於您，但通常會將分數分配給各種活動，例如摧毀敵方飛船，或者收集敵方飛船被摧毀後掉落的物品。
- **完成一個關卡**：這可能涉及多種條件，例如摧毀 `X` 敵方飛船、收集 `Y` 分數，或者收集特定物品。

## 重新開始

如果玩家喜歡您的遊戲，他們可能會想要重新玩一次。無論遊戲因何原因結束，您都應該提供重新開始的選項。

✅ 思考一下，您認為遊戲在什麼條件下結束，然後如何提示玩家重新開始。

## 要建立的內容

您將為遊戲添加以下規則：

1. **贏得遊戲**。當所有敵方飛船被摧毀時，您贏得遊戲。此外，顯示某種勝利訊息。
1. **重新開始**。當所有生命值耗盡或遊戲勝利時，您應提供重新開始遊戲的方式。記住！您需要重新初始化遊戲並清除之前的遊戲狀態。

## 建議步驟

找到在 `your-work` 子資料夾中為您建立的檔案。它應包含以下內容：

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

您可以通過輸入以下指令啟動 `your_work` 資料夾中的專案：

```bash
cd your-work
npm start
```

上述指令將在地址 `http://localhost:5000` 上啟動 HTTP 伺服器。打開瀏覽器並輸入該地址。您的遊戲應該處於可玩狀態。

> 提示：為避免在 Visual Studio Code 中出現警告，編輯 `window.onload` 函數以直接調用 `gameLoopId`（不使用 `let`），並在檔案頂部獨立宣告 `gameLoopId`：`let gameLoopId;`

### 添加程式碼

1. **追蹤結束條件**。添加程式碼以追蹤敵方數量，或英雄飛船是否被摧毀，通過添加以下兩個函數：

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **添加邏輯到訊息處理器**。編輯 `eventEmitter` 以處理以下條件：

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

1. **添加新的訊息類型**。將以下訊息添加到常數物件中：

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **添加重新開始程式碼**。添加在按下選定按鈕時重新開始遊戲的程式碼。

   1. **監聽按鍵 `Enter`**。編輯您的窗口事件監聽器以監聽此按鍵：

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **添加重新開始訊息**。將以下訊息添加到您的訊息常數中：

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **實現遊戲規則**。實現以下遊戲規則：

   1. **玩家勝利條件**。當所有敵方飛船被摧毀時，顯示勝利訊息。

      1. 首先，建立一個 `displayMessage()` 函數：

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. 建立一個 `endGame()` 函數：

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

   1. **重新開始邏輯**。當所有生命值耗盡或玩家贏得遊戲時，顯示可以重新開始遊戲的提示。此外，當按下*重新開始*按鍵時重新開始遊戲（您可以決定哪個按鍵映射到重新開始）。

      1. 建立 `resetGame()` 函數：

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

     1. 在 `initGame()` 中添加對 `eventEmitter` 的呼叫以重置遊戲：

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. 為 EventEmitter 添加一個 `clear()` 函數：

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 恭喜，隊長！您的遊戲已完成！做得好！ 🚀 💥 👽

---

## 🚀 挑戰

添加音效！您能否添加音效以增強遊戲體驗，例如激光擊中、英雄死亡或勝利時的音效？查看這個 [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) 以了解如何使用 JavaScript 播放音效。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/40)

## 回顧與自學

您的作業是建立一個全新的樣本遊戲，因此探索一些有趣的遊戲，看看您可能會建立什麼類型的遊戲。

## 作業

[建立樣本遊戲](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。