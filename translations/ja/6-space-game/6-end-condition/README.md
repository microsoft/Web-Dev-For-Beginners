<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-23T23:07:57+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート6: 終了と再スタート

## 講義前クイズ

[講義前クイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

ゲームにおける「終了条件」を表現する方法はいくつかあります。ゲームの制作者であるあなたが、ゲームが終了する理由を決めることができます。これまで作成してきた宇宙ゲームを例にすると、以下のような理由が考えられます：

- **`N` 隻の敵船を破壊した場合**: ゲームを異なるレベルに分ける場合、`N` 隻の敵船を破壊することでレベルをクリアするというのはよくあるパターンです。
- **自分の船が破壊された場合**: 自分の船が破壊されるとゲームオーバーになるゲームもあります。別の一般的な方法として「ライフ」の概念があります。自分の船が破壊されるたびにライフが減り、すべてのライフを失うとゲームオーバーになります。
- **`N` ポイントを獲得した場合**: ポイントを集めることが終了条件になることもあります。ポイントの獲得方法は自由ですが、敵船を破壊したり、破壊されたアイテムが落とすものを集めたりすることでポイントを得るのが一般的です。
- **レベルをクリアした場合**: これには、`X` 隻の敵船を破壊する、`Y` ポイントを集める、特定のアイテムを集めるなど、複数の条件が含まれる場合があります。

## 再スタート

ゲームを楽しんでくれる人は、再びプレイしたいと思うでしょう。どのような理由でゲームが終了したとしても、再スタートの選択肢を提供するべきです。

✅ ゲームがどのような条件で終了し、どのように再スタートを促されるかを少し考えてみましょう。

## 作成する内容

以下のルールをゲームに追加します：

1. **ゲームの勝利条件**: すべての敵船を破壊するとゲームに勝利します。また、勝利メッセージを表示します。
1. **再スタート**: すべてのライフを失った場合やゲームに勝利した場合、ゲームを再スタートする方法を提供します。注意！ ゲームを再初期化し、前回のゲーム状態をクリアする必要があります。

## 推奨手順

`your-work` サブフォルダに作成済みのファイルを見つけてください。以下の内容が含まれているはずです：

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

`your_work` フォルダでプロジェクトを開始するには、以下を入力します：

```bash
cd your-work
npm start
```

上記のコマンドで、アドレス `http://localhost:5000` でHTTPサーバーが起動します。ブラウザを開き、そのアドレスを入力してください。ゲームがプレイ可能な状態になっているはずです。

> ヒント: Visual Studio Codeで警告を避けるには、`window.onload` 関数を編集して `gameLoopId` をそのまま呼び出し（`let` を付けずに）、ファイルの先頭で `let gameLoopId;` を独立して宣言してください。

### コードを追加する

1. **終了条件を追跡する**: 敵の数やヒーロー船が破壊されたかどうかを追跡するコードを追加します。以下の2つの関数を追加してください：

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **メッセージハンドラーにロジックを追加する**: `eventEmitter` を編集して、以下の条件を処理します：

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

1. **新しいメッセージタイプを追加する**: 以下のメッセージを constants オブジェクトに追加します：

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **再スタートコードを追加する**: 選択したボタンを押すことでゲームを再スタートするコードを追加します。

   1. **`Enter` キーの押下をリッスンする**: ウィンドウの eventListener を編集して、このキー押下をリッスンします：

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **再スタートメッセージを追加する**: 以下のメッセージを Messages 定数に追加します：

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **ゲームルールを実装する**: 以下のゲームルールを実装します：

   1. **プレイヤーの勝利条件**: すべての敵船が破壊されたとき、勝利メッセージを表示します。

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

   1. **再スタートロジック**: すべてのライフを失った場合やプレイヤーがゲームに勝利した場合、再スタート可能であることを表示します。また、再スタートキーが押されたときにゲームを再スタートします（どのキーを再スタートに割り当てるかは自由です）。

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

     1. `initGame()` 内で `eventEmitter` を呼び出してゲームをリセットするコードを追加します：

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. EventEmitter に `clear()` 関数を追加します：

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 おめでとうございます、キャプテン！ゲームが完成しました！よくやりました！ 🚀 💥 👽

---

## 🚀 チャレンジ

音を追加してみましょう！レーザーが命中したときや、ヒーローが死んだとき、または勝利したときに音を追加してゲームプレイを強化できますか？JavaScriptで音を再生する方法を学ぶには、この [サンドボックス](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) を見てみましょう。

## 講義後クイズ

[講義後クイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## 復習と自己学習

新しいサンプルゲームを作成することが課題です。どのようなゲームを作るかを考えるために、興味深いゲームをいくつか探してみましょう。

## 課題

[サンプルゲームを作成する](assignment.md)

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を期すよう努めておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された原文が公式な情報源と見なされるべきです。重要な情報については、専門の人間による翻訳を推奨します。本翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。