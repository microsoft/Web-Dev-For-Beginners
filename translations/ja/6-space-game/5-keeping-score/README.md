<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-28T17:52:36+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート5: スコアとライフ

## 講義前のクイズ

[講義前のクイズ](https://ff-quizzes.netlify.app/web/quiz/37)

このレッスンでは、ゲームにスコアを追加し、ライフを計算する方法を学びます。

## 画面にテキストを描画する

ゲームのスコアを画面に表示するには、テキストを画面に配置する方法を知る必要があります。その答えは、キャンバスオブジェクトの`fillText()`メソッドを使用することです。また、使用するフォントやテキストの色、さらにはテキストの配置（左揃え、右揃え、中央揃え）なども制御できます。以下は、画面にテキストを描画するコードの例です。

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ [キャンバスにテキストを追加する方法](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text)についてさらに詳しく学び、自分のゲームをもっと魅力的にしてみましょう！

## ゲームコンセプトとしてのライフ

ゲームにおけるライフの概念は単なる数字です。宇宙ゲームの文脈では、ダメージを受けるたびに1つずつ減るライフを設定するのが一般的です。数字ではなく、ミニシップやハートのようなグラフィカルな表現を表示すると、より分かりやすくなります。

## 作成するもの

ゲームに以下を追加しましょう：

- **ゲームスコア**: 敵の船を1隻撃破するごとに、ヒーローにポイントが与えられます。1隻につき100ポイントを提案します。ゲームスコアは画面の左下に表示されます。
- **ライフ**: 自分の船には3つのライフがあります。敵の船が衝突するたびにライフが1つ減ります。ライフスコアは画面の右下に表示され、以下のグラフィックで構成されます ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.ja.png)。

## 推奨手順

`your-work`サブフォルダに作成されたファイルを見つけてください。以下の内容が含まれているはずです：

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

`your_work`フォルダでプロジェクトを開始するには、以下を入力してください：

```bash
cd your-work
npm start
```

上記のコマンドでHTTPサーバーが`http://localhost:5000`で起動します。ブラウザを開き、そのアドレスを入力してください。現在の状態では、ヒーローとすべての敵が表示され、左右の矢印キーを押すとヒーローが移動し、敵を撃つことができます。

### コードを追加する

1. **必要なアセットをコピーする**: `solution/assets/`フォルダから`your-work`フォルダに`life.png`アセットをコピーします。`window.onload`関数に`lifeImg`を追加してください：

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. `lifeImg`をアセットのリストに追加します：

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **変数を追加する**: 合計スコア（0）と残りのライフ（3）を表すコードを追加し、これらのスコアを画面に表示します。

3. **`updateGameObjects()`関数を拡張する**: `updateGameObjects()`関数を拡張して敵との衝突を処理します：

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **ライフとポイントを追加する**: 
   1. **変数を初期化する**: `Hero`クラスの`this.cooldown = 0`の下にライフとポイントを設定します：

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **変数を画面に描画する**: これらの値を画面に描画します：

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

   1. **ゲームループにメソッドを追加する**: `updateGameObjects()`の下にこれらの関数を`window.onload`関数に追加してください：

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **ゲームルールを実装する**: 以下のゲームルールを実装します：

   1. **ヒーローと敵の衝突ごとにライフを減らす**:
   
      `Hero`クラスを拡張してライフを減らす処理を追加します：

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **レーザーが敵に当たるごとにゲームスコアを100ポイント増やす**:

      `Hero`クラスを拡張してスコアを増やす処理を追加します：
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        衝突イベントエミッターにこれらの関数を追加します：

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

✅ JavaScript/Canvasで作られた他のゲームを調べてみましょう。それらの共通点は何でしょうか？

この作業が終わると、画面の右下に小さな「ライフ」シップが表示され、左下にポイントが表示されます。敵と衝突するとライフが減り、敵を撃つとポイントが増えるのが確認できるはずです。よくできました！ゲームはほぼ完成です。

---

## 🚀 チャレンジ

コードはほぼ完成しています。次のステップを想像できますか？

## 講義後のクイズ

[講義後のクイズ](https://ff-quizzes.netlify.app/web/quiz/38)

## 復習と自己学習

ゲームスコアとライフを増減させる方法をいくつか調べてみましょう。[PlayFab](https://playfab.com)のような興味深いゲームエンジンがあります。これらを使用することでゲームがどのように向上するか考えてみてください。

## 課題

[スコアリングゲームを作る](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。