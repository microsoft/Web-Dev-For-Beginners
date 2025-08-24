<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-23T22:52:59+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート5: スコアとライフ

## 講義前クイズ

[講義前クイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

このレッスンでは、ゲームにスコアを追加し、ライフを計算する方法を学びます。

## 画面にテキストを描画する

ゲームのスコアを画面に表示するには、テキストを画面に配置する方法を知る必要があります。その答えは、canvasオブジェクトの`fillText()`メソッドを使用することです。また、使用するフォント、テキストの色、さらにはテキストの配置（左揃え、右揃え、中央揃え）など、他の要素も制御できます。以下は、画面にテキストを描画するコード例です。

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ [キャンバスにテキストを追加する方法](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text)についてさらに学び、自分のテキストをもっと魅力的にしてみましょう！

## ゲームの概念としてのライフ

ゲームにおけるライフの概念は単なる数字です。宇宙ゲームの文脈では、ダメージを受けるたびに1つずつ減るライフを設定するのが一般的です。数字ではなく、ミニシップやハートのようなグラフィックで表現すると、より視覚的にわかりやすくなります。

## 作成するもの

ゲームに以下を追加しましょう：

- **ゲームスコア**: 敵の船を1隻撃破するごとに、ヒーローにポイントが与えられます。1隻につき100ポイントを提案します。ゲームスコアは画面の左下に表示されます。
- **ライフ**: 自分の船には3つのライフがあります。敵の船が衝突するたびにライフが1つ減ります。ライフスコアは画面の右下に表示され、以下のグラフィックで構成されます ![ライフ画像](../../../../6-space-game/5-keeping-score/solution/assets/life.png)。

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

`your_work`フォルダでプロジェクトを開始するには、以下を入力します：

```bash
cd your-work
npm start
```

上記のコマンドでHTTPサーバーが`http://localhost:5000`で起動します。ブラウザを開き、そのアドレスを入力してください。現在のところ、ヒーローとすべての敵が表示され、左右の矢印キーを押すとヒーローが移動し、敵を撃つことができます。

### コードを追加する

1. **必要なアセットをコピー**します。`solution/assets/`フォルダから`your-work`フォルダに`life.png`アセットを追加します。`window.onload`関数に`lifeImg`を追加してください：

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
  
2. **変数を追加**します。合計スコア（0）と残りのライフ（3）を表すコードを追加し、これらのスコアを画面に表示します。

3. **`updateGameObjects()`関数を拡張**します。敵との衝突を処理するように`updateGameObjects()`関数を拡張します：

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **ライフとポイントを追加**します。 
   1. **変数を初期化**します。`Hero`クラスの`this.cooldown = 0`の下にライフとポイントを設定します：

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **変数を画面に描画**します。これらの値を画面に描画します：

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

   1. **ゲームループにメソッドを追加**します。これらの関数を`window.onload`関数の`updateGameObjects()`の下に追加してください：

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **ゲームルールを実装**します。以下のゲームルールを実装します：

   1. **ヒーローと敵の衝突ごとに**、ライフを1つ減らします。
   
      `Hero`クラスを拡張してこの減算を行います：

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **レーザーが敵に当たるごとに**、ゲームスコアを100ポイント増やします。

      `Hero`クラスを拡張してこの加算を行います：
    
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

この作業が終わると、画面の右下に小さな「ライフ」シップが表示され、左下にポイントが表示されます。また、敵と衝突するとライフが減り、敵を撃つとポイントが増えるのが確認できるはずです。よくできました！ゲームはほぼ完成です。

---

## 🚀 チャレンジ

コードはほぼ完成しています。次のステップを想像できますか？

## 講義後クイズ

[講義後クイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## 復習と自己学習

ゲームスコアとライフを増減させる方法をいくつか調べてみましょう。[PlayFab](https://playfab.com)のような興味深いゲームエンジンがあります。これらを使用することでゲームがどのように向上するか考えてみましょう。

## 課題

[スコアリングゲームを作る](assignment.md)

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてお考えください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解について、当社は責任を負いません。