<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-28T17:53:40+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート6: 終了と再スタート

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/39)

ゲームの「終了条件」を表現する方法はいくつかあります。ゲームの制作者として、なぜゲームが終了したのかを決めるのはあなた次第です。これまで作ってきた宇宙ゲームを例にすると、以下のような理由が考えられます：

- **`N` 隻の敵船を撃破**: ゲームをレベルごとに分ける場合、`N` 隻の敵船を撃破することでレベルをクリアするというのはよくあるパターンです。
- **自分の船が破壊された**: 自分の船が破壊されるとゲームオーバーになるゲームもあります。もう一つの一般的な方法は「ライフ」の概念を導入することです。自分の船が破壊されるたびにライフが減り、すべてのライフを失うとゲームオーバーになります。
- **`N` ポイントを獲得**: ポイントを集めることが終了条件になることもあります。ポイントの獲得方法は自由ですが、敵船を撃破したり、破壊されたアイテムが落とすものを集めたりすることでポイントを得るのが一般的です。
- **レベルをクリア**: これには、`X` 隻の敵船を撃破、`Y` ポイントを獲得、特定のアイテムを収集するなど、複数の条件が含まれる場合があります。

## 再スタート

ゲームを楽しんでくれる人がいれば、再プレイしたいと思うはずです。ゲームがどんな理由で終了したとしても、再スタートの選択肢を提供するべきです。

✅ ゲームが終了する条件と、再スタートを促される方法について少し考えてみましょう。

## 作成する内容

以下のルールをゲームに追加します：

1. **ゲームの勝利条件**: 敵船をすべて撃破するとゲームに勝利します。また、勝利メッセージを表示してください。
1. **再スタート**: ライフをすべて失った場合やゲームに勝利した場合、ゲームを再スタートする方法を提供してください。注意！ゲームを再初期化し、以前のゲーム状態をクリアする必要があります。

## 推奨手順

`your-work` サブフォルダに作成されたファイルを確認してください。以下の内容が含まれているはずです：

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

プロジェクトを開始するには、`your_work` フォルダで以下を入力してください：

```bash
cd your-work
npm start
```

上記のコマンドで、`http://localhost:5000` アドレスでHTTPサーバーが起動します。ブラウザを開き、そのアドレスを入力してください。ゲームがプレイ可能な状態になっているはずです。

> ヒント: Visual Studio Codeで警告を避けるために、`window.onload` 関数を編集して `gameLoopId` をそのまま呼び出し（`let` を付けずに）、ファイルの先頭で独立して `let gameLoopId;` を宣言してください。

### コードを追加

1. **終了条件を追跡**: 敵の数やヒーロー船が破壊されたかどうかを追跡するコードを追加します。以下の2つの関数を追加してください：

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **メッセージハンドラーにロジックを追加**: `eventEmitter` を編集してこれらの条件を処理します：

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

1. **新しいメッセージタイプを追加**: 以下のメッセージをconstantsオブジェクトに追加してください：

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **再スタートコードを追加**: 選択したボタンを押すことでゲームを再スタートするコードを追加します。

   1. **キー押下 `Enter` を監視**: ウィンドウのeventListenerを編集してこのキー押下を監視します：

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **再スタートメッセージを追加**: 以下のメッセージをMessages定数に追加してください：

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **ゲームルールを実装**: 以下のゲームルールを実装します：

   1. **プレイヤーの勝利条件**: 敵船をすべて撃破したら、勝利メッセージを表示します。

      1. まず、`displayMessage()` 関数を作成します：

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. 次に、`endGame()` 関数を作成します：

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

   1. **再スタートロジック**: ライフをすべて失った場合やプレイヤーがゲームに勝利した場合、再スタート可能であることを表示します。また、再スタートキーが押されたときにゲームを再スタートします（どのキーを再スタートに割り当てるかは自由です）。

      1. `resetGame()` 関数を作成します：

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

     1. `initGame()` 内でゲームをリセットするために `eventEmitter` を呼び出すコードを追加します：

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. EventEmitterに `clear()` 関数を追加します：

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 おめでとうございます、キャプテン！ゲームが完成しました！よくやりました！ 🚀 💥 👽

---

## 🚀 チャレンジ

音を追加してみましょう！レーザーが命中したとき、ヒーローが死んだとき、または勝利したときなど、ゲームプレイを盛り上げる音を追加できますか？JavaScriptで音を再生する方法については、こちらの [サンドボックス](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) を参考にしてください。

## 講義後クイズ

[講義後クイズ](https://ff-quizzes.netlify.app/web/quiz/40)

## 復習と自己学習

新しいサンプルゲームを作成する課題がありますので、興味深いゲームをいくつか探索して、どのようなゲームを作るか考えてみましょう。

## 課題

[サンプルゲームを作成する](assignment.md)

---

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知おきください。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当方は一切の責任を負いません。