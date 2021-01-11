# スペースゲーム構築プロジェクト その 6: 終了と再起動

## レッスン前の小テスト

[レッスン前の小テスト](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/39?loc=ja)

ゲーム内での表現方法や *終了条件* の表現方法は様々です。なぜゲームが終了したのかは、ゲームを作る側のあなた次第です。ここでは、あなたが今まで作ってきた宇宙ゲームの話をしていると仮定して、いくつかの理由を挙げてみましょう。

- **`N` 隻の敵の宇宙船を撃破しました**: それはあなたがレベルを完了するために　N 隻の敵の宇宙船を破壊する必要があることを別のレベルにゲームを分割する場合はかなり一般的です
- **あなたの船が破壊されました**: 自分の船が破壊されるとゲームに負けるゲームは間違いなくあります。もう一つの一般的なアプローチは、ライフの概念を持っているということです。あなたの宇宙船が破壊されるたびに、それはライフを差し引きます。すべてのライフが失われると、ゲームを失うことになります
- **`N` ポイントを集めました**: もう一つの一般的な終了条件は、ポイントを集めることです。どのようにポイントを獲得するかはあなた次第ですが、敵の宇宙船を破壊したり、破壊された時にドロップするアイテムを集めたりと、様々な活動にポイントを割り当てるのが一般的です
- **レベルをクリアしました**: これには、`X` 隻の敵の宇宙船を破壊したり、`Y` ポイントを集めたり、特定のアイテムを集めたりするなど、いくつかの条件が含まれている場合があります

## 再起動

人々があなたのゲームを楽しめば、彼らはそれを再プレイしたいと思う可能性が高いです。何らかの理由でゲームが終了したら、再起動するための代替手段を提供すべきです。

✅ どのような条件でゲームが終了したか、そしてどのように再起動を促されるかを少し考えてみてください。

## 何を構築するか

これらのルールをゲームに追加していくことになります。

1. **ゲームの勝利**。全ての敵の宇宙船を撃破したらゲームの勝利です。さらに、何らかの勝利メッセージを表示します
1. **再起動すること**。全てのライフが失われたり、ゲームに勝利したら、ゲームを再起動する方法を提供する必要があります。覚えておいてください! ゲームを再初期化する必要があり、以前のゲームの状態をクリアする必要があります

## 推奨される手順

あなたのために作成されたファイルを `your-work` サブフォルダ内で探します。以下のファイルが含まれているはずです。

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

次のように入力して、`your_work` フォルダからプロジェクトを起動します。

```bash
cd your-work
npm start
```

上記のようにすると、`http://localhost:5000` というアドレスに HTTP サーバーが起動します。ブラウザを開いて、そのアドレスを入力してください。ゲームがプレイ可能な状態になっているはずです。

> ヒント: Visual Studio Code の警告を避けるためには、`window.onload` 関数を編集して `gameLoopId` をそのまま (`let` を省略して) 呼び出し、ファイルの先頭に gameLoopId を `let gameLoopId;` と独立して宣言します。

### コードの追加

1. **終了条件を追跡します**。敵の数を追跡したり、ヒーローの宇宙船が破壊されたかどうかを追跡するコードを追加します


    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **メッセージハンドラにロジックを追加します**。これらの条件を処理するために `eventEmitter` を編集します

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
          return; // 勝利前に敗北
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

1. **新しいメッセージタイプを追加します**。これらのメッセージを定数オブジェクトに追加します

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. 選択したボタンの押下でゲームを再起動する**再起動コードを追加します**

   1. **`Enter` キーの押下を待ち受けます**。この押下を待ち受けるために、ウィンドウの eventListener を編集します

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **再起動メッセージを追加します**。このメッセージをメッセージ定数に追加します

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **ゲームルールの実装** 以下のゲームルールを実装します

   1. **プレイヤーの勝利条件**。敵の宇宙船を全て撃破した場合、勝利のメッセージを表示します

      1. まず、関数 `displayMessage()` を作成します

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. 関数 `endGame()` を作成します

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // 塗り終わったことを確認するために遅延を設定します
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

   1. **再起動ロジック**。すべてのライフが失われたとき、またはプレイヤーが勝ったときに、ゲームを再起動できることを表示します。さらに、リスタートキーが押されるとゲームを再起動します (どのキーをリスタートにマッピングするかはあなたが決めることができます)

      1. 関数 `resetGame()` を作成します

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

     1. `initGame()` でゲームをリセットするために `eventEmitter` の呼び出しを追加します

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. EventEmitter に `clear()` 関数を追加します

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 おめでとうございます、隊長! あなたのゲームは完成しました! よくできました! 🚀 💥 👽

---

## 🚀 チャレンジ

音を追加しましょう!レーザーが当たった時や、ヒーローが死んだ時、勝った時など、ゲームを盛り上げるために音を追加することはできますか? JavaScript を使ってサウンドを再生する方法については、こちらの [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) をご覧ください。

## レッスン後の小テスト

[レッスン後の小テスト](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/40?loc=ja)

## 復習と自己学習

あなたの課題は新鮮なサンプルゲームを作成することです。だから、どんなゲームを作れそうかを確認するために、そこにある面白いゲームのいくつかを探索してください。

## 課題

[サンプルゲームを作る](assignment.ja.md)
