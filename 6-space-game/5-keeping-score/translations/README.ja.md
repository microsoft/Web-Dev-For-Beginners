# スペースゲーム構築プロジェクト その 5: スコアリングとライフ

## レッスン前の小テスト

[レッスン前の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/37?loc=ja)

このレッスンでは、ゲームに得点を加えてライフを計算する方法を学びます。

## 画面上にテキストを描画

ゲームのスコアを画面に表示できるようにするには、画面にテキストを配置する方法を知っておく必要があります。その答えは、canvas オブジェクトの `fillText()` メソッドを使用することです。また、使用するフォント、テキストの色、配置 (左、右、中央) などの他の要素を制御することもできます。以下は、画面上にテキストを描画するコードです。

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ [canvas にテキストを追加する方法](https://developer.mozilla.org/ja/docs/Drawing_text_using_a_canvas)について詳しくはこちらをご覧ください。そうすれば自由にファンシーな外観を作ることができます。


## ゲームの概念としてのライフ

ゲームにおけるライフの概念は数字でしかありません。スペースゲームの文脈では、自分の宇宙船がダメージを受けたときに一つずつ差し引かれるライフを割り当てるのが一般的です。これを数字ではなく、ミニシップやハートのようにグラフィカルに表現できるといいですね。

## 何を構築するか

以下のようなものをゲームに追加してみましょう。

- **ゲームのスコア**: 敵艦が破壊されるごとに、ヒーローにはいくつかのポイントが与えられるはずですが、私たちは1隻につき100ポイントをお勧めします。ゲームスコアは左下に表示されます
- **ライフ**: あなたの宇宙船には3つのライフがあります。敵の船が衝突するたびにライフを失います。ライフスコアは右下に表示され、次のグラフィックで作成されます。![life image](../solution/assets/life.png)

## 推奨される手順

あなたのために作成されたファイルを `your-work` サブフォルダ内で探します。以下のファイルが含まれているはずです。

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

次のように入力して、`your_work` フォルダからプロジェクトを起動します。

```bash
cd your-work
npm start
```

上記のようにすると、`http://localhost:5000` というアドレスに HTTP サーバーが起動します。ブラウザを開いてそのアドレスを入力すると、ヒーローと敵が表示され、左右の矢印を打つとヒーローが動き、敵を撃ち落とすことができます。

### コードの追加

1. `solution/assets/` フォルダから `your-work` フォルダに**必要なアセットをコピー**して、`life.png` アセットを追加します。lifeImg を window.onload 関数に追加します

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. アセットのリストに `lifeImg` を追加します

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **変数を追加します**。あなたの合計スコア (0) とその左に (3) のライフを表すコードを追加し、画面上にこれらのスコアを表示します

3. **`updateGameObjects()` 関数を拡張します**。`updateGameObjects()` 関数を拡張し、敵の衝突に対応するようにします

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **`life` と `points` を追加します**
   1. **変数を初期化します**。`Hero` クラスの `this.cooldown = 0` の下で、ライフとポイントを設定します

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **画面上に変数を描画します**。これらの値を画面に描画します

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

   1. **Game ループにメソッドを追加します**。`updateGameObjects()` の下の window.onload 関数にこれらの関数を追加します

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **ゲームのルールを実装します**。以下のゲームルールを実装します

   1. **ヒーローと敵の衝突ごとに**、ライフを差し引きます
   
      `Hero` クラスを拡張してこの差し引きを行います

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **レーザーが敵に当たるたびに**、ゲームスコアを100点アップさせます

      このインクリメントを行うために Hero クラスを拡張します
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        これらの機能を衝突イベントエミッタに追加します

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

✅ JavaScript/Canvas を使用して作成された他のゲームを少し調べてみてください。これらのゲームに共通する特徴は何ですか?

この作品が終わる頃には、右下に小さな「ライフ」の船、左下にポイントが表示され、敵と衝突するとライフカウントが減少し、敵を撃つとポイントが増加するのがわかるはずです。よくできました! これでゲームはほぼ完成です。

---

## 🚀 チャレンジ

あなたのコードはほぼ完成しています。次のステップをイメージできますか？

## レッスン後の小テスト

[レッスン後の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/38?loc=ja)

## 復習と自己学習

ゲームのスコアやライフを増減させる方法をいくつか研究してみましょう。[PlayFab](https://playfab.com) のような面白いゲームエンジンがあります。これらのエンジンを使用することで、どのようにゲームを強化することができるでしょうか？

## 課題

[スコアリングゲームの構築](assignment.ja.md)
