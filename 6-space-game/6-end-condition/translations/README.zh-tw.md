# 建立太空遊戲 Part 6：結束與重來

## 課前測驗

[課前測驗](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/39?loc=zh_tw)

有許多方式可以表達遊戲中的*結束狀態*。這都取決於你這位遊戲開發者，定義遊戲結束的理由。假設我們討論這款已經開發許久的太空遊戲，以下是遊戲結束的理由：

- **`N` 艘敵軍艦艇被擊毀**：如果你想將遊戲分成許多關卡，一種常見的方式是將每一關的破關門檻，定為擊毀 `N` 艘敵軍艦艇。
- **你的船艦已被擊毀**：一定有遊戲，只要你的船艦被擊毀一次時，便判定你輸了這場遊戲。另一種可行概念是加入生命值系統。每次你的船艦被擊毀時，會扣除一條生命。一但你損失了所有性命，你便輸了這場遊戲。
- **你已經取得 `N` 點分數**：另一種常見的結束狀態為分數門檻。取得分數的機制取決在你，常見的條件為摧毀敵艦、或是收集敵艦所*掉落*的道具。
- **完成關卡**：這或許會涉及到許多種狀態，好比說： `X` 艘艦艇已被擊毀、已取得 `Y` 點分數或是收集特定的道具。

## 重新遊戲

如果玩家很享受你的遊戲，他們會想再重新遊玩一次。一旦因任何原因結束遊戲時，你應該要提供重新遊戲的方法。

✅ 想想看，什麼條件下會結束一款遊戲，而它們又是如何提示你重新遊玩。

## 建立目標

你需要為你的遊戲新增這些規則：

1. **贏得遊戲**。 一旦所有敵軍艦艇被擊毀時，你便贏得這場遊戲。請額外地顯示勝利訊息。
1. **重新開始**。 一旦你損失了所有性命，或是贏得了勝利，你應該提供方法來重新遊戲。記住！你需要重新初始化你的遊戲，所有遊戲的歷史紀錄會被移除。

## 建議步驟

在你的 `your-work` 子資料夾中，確認檔案是否建立完成。它應該包括：

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

開始 `your_work` 資料夾中的專案，輸入：

```bash
cd your-work
npm start
```

這會啟動 HTTP 伺服器並發布網址 `http://localhost:5000`。開啟瀏覽器並輸入該網址。你的遊戲應該能被遊玩。

> 要點： 要避免在 Visual Studio Code 裡出現警告訊息，編輯函式 `window.onload` 以 is，而非 let 的方式呼叫 `gameLoopId`；並在檔案正上方獨立地宣告 gameLoopId： `let gameLoopId;`。

### 加入程式碼

1. **追蹤結束狀態**。 新增程式碼來追蹤敵人的數量，利用下列函式判斷英雄艦艇是否被擊毀：

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **加入訊息處理器**。 編輯 `eventEmitter` 以處理這些狀態：

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
          return; // 遊戲失敗，提前結束
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

1. **加入新的訊息**。 新增這些訊息到 Messages 常數中：

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **加入重新開始的功能** 在按下特定按鈕後，程式會重新開始遊戲。

   1. **監聽 `Enter` 按鈕之按壓**。 編輯視窗的 eventListener ，監聽按鍵的按壓：

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **加入重新遊戲的訊息**。 加入這段訊息到 Messages 常數中：

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **制定遊戲規則**。 編制下列的遊戲規則：

   1. **玩家勝利條件**。 當所有敵軍艦艇被擊毀時，顯示勝利訊息。

      1. 首先，建立函式 `displayMessage()`：

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. 建立函式 `endGame()`：

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // 設定延遲以確保所有圖像皆繪製完成
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

   1. **重新遊戲的邏輯**。 當玩家損失所有的性命，或是贏下這場遊戲，顯示遊戲重來的提示。此外，在*重新遊玩*按鍵被按壓時，重新遊戲(你可以自己決定任一個鍵盤按鍵)。

      1. 建立函式 `resetGame()`：

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

     1. 在 `initGame()` 內呼叫 `eventEmitter` 來重新設定遊戲：

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. 在 EventEmitter 加入函式 `clear()`：

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 恭喜你，艦長！你的遊戲已經完成了！幹得好！ 🚀 💥 👽

---

## 🚀 挑戰

加入遊戲音效！你能加入音效來提升遊戲品質嗎？或許在雷射擊中敵人，或是在英雄死亡、勝利時發出音效。看看這套[沙盒](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play)，了解如何使用 JavaScript 播放音效。

## 課後測驗

[課後測驗](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/40?loc=zh_tw)

## 複習與自學

你的功課是建立一款新的小遊戲。去探索一些有趣的遊戲，決定你想建造的遊戲類型。

## 作業

[建立一款遊戲](assignment.zh-tw.md)
