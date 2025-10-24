<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-24T15:16:48+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート5: スコアとライフ

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/37)

宇宙ゲームを本格的なゲームに仕上げる準備はできましたか？スコアを追加し、ライフを管理することで、初期のアーケードゲーム「スペースインベーダー」が単なるデモから中毒性のあるエンターテインメントへと変貌したように、あなたのゲームも本格的に遊べるものになります。

## 画面にテキストを描画する - ゲームの声

スコアを表示するためには、キャンバス上にテキストを描画する方法を学ぶ必要があります。`fillText()`メソッドがその主なツールです。これは、クラシックなアーケードゲームでスコアやステータス情報を表示するために使用された技術と同じです。

テキストの外観は完全にコントロール可能です:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ [キャンバスにテキストを追加する方法](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text)をさらに深く掘り下げてみましょう。フォントやスタイリングでどれだけクリエイティブになれるか、驚くかもしれません！

## ライフ - 単なる数字以上のもの

ゲームデザインにおいて、「ライフ」はプレイヤーのミスの余地を表します。この概念はピンボールマシンにまで遡り、複数のボールで遊べる仕組みがありました。初期のビデオゲーム「アステロイド」などでは、ライフがプレイヤーにリスクを取る許可を与え、失敗から学ぶ機会を提供しました。

視覚的な表現は非常に重要です。「ライフ: 3」と表示する代わりに、船のアイコンを表示することで、即座に視覚的な認識を生み出します。これは、初期のアーケードキャビネットが言語の壁を越えてアイコンでコミュニケーションを取った方法に似ています。

## ゲームの報酬システムを構築する

ここでは、プレイヤーを引きつけるコアフィードバックシステムを実装します:

- **スコアリングシステム**: 敵の船を破壊するたびに100ポイントが与えられます（丸い数字はプレイヤーが頭の中で計算しやすいです）。スコアは画面左下に表示されます。
- **ライフカウンター**: ヒーローは3つのライフでスタートします。これは初期のアーケードゲームで挑戦とプレイのバランスを取るために確立された標準です。敵との衝突ごとにライフが1つ減ります。残りのライフは画面右下に船のアイコンで表示されます ![ライフ画像](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.ja.png)。

## 作り始めましょう！

まずは作業環境をセットアップします。`your-work`サブフォルダ内のファイルに移動してください。以下のファイルが見つかるはずです:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

ゲームをテストするには、`your_work`フォルダから開発サーバーを起動してください:

```bash
cd your-work
npm start
```

これにより、ローカルサーバーが`http://localhost:5000`で実行されます。このアドレスをブラウザで開いてゲームを確認してください。矢印キーで操作をテストし、敵を撃ってすべてが正常に動作するか確認してください。

### コーディング開始！

1. **必要なビジュアルアセットを取得する**。`solution/assets/`フォルダから`life.png`アセットを`your-work`フォルダにコピーします。その後、`lifeImg`を`window.onload`関数に追加します:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. `lifeImg`をアセットリストに追加するのを忘れないでください:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **ゲーム変数を設定する**。合計スコア（初期値は0）と残りライフ（初期値は3）を追跡するコードを追加します。これらを画面に表示して、プレイヤーが常に状況を把握できるようにします。

3. **衝突検出を実装する**。`updateGameObjects()`関数を拡張して、敵がヒーローと衝突したときに検出できるようにします:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **ヒーローにライフとポイントの追跡機能を追加する**。 
   1. **カウンターを初期化する**。`Hero`クラスの`this.cooldown = 0`の下にライフとポイントを設定します:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **これらの値をプレイヤーに表示する**。画面にこれらの値を描画する関数を作成します:

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

   1. **ゲームループにすべてを組み込む**。これらの関数を`updateGameObjects()`の直後に`window.onload`関数に追加します:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **ゲームの結果と報酬を実装する**。ここでは、プレイヤーの行動に意味を持たせるフィードバックシステムを追加します:

   1. **衝突でライフを失う**。ヒーローが敵と衝突するたびにライフを失うようにします。
   
      このメソッドを`Hero`クラスに追加してください:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **敵を撃つとポイントを獲得する**。正確に撃つことで即座にポジティブなフィードバックを得られるように、成功したヒットごとに100ポイントを与えます。

      Heroクラスを以下のインクリメントメソッドで拡張してください:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        これらの関数を衝突イベントに接続します:

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

✅ JavaScriptとCanvasで作られた他のゲームについて興味がありますか？ぜひ探してみてください。可能性に驚くかもしれません！

これらの機能を実装した後、ゲームをテストして完全なフィードバックシステムが動作しているか確認してください。画面右下にライフアイコンが表示され、左下にスコアが表示され、衝突でライフが減り、成功したショットでスコアが増加する様子が確認できるはずです。

これで、初期のアーケードゲームを魅力的にした基本的なメカニクス、つまり明確な目標、即時のフィードバック、プレイヤーの行動に対する意味のある結果が備わったゲームが完成しました。

---

## GitHub Copilot Agent チャレンジ 🚀

Agentモードを使用して以下のチャレンジを完了してください:

**説明:** スコアリングシステムを強化し、ハイスコア機能を永続的に保存する仕組みとボーナススコアメカニズムを実装してください。

**プロンプト:** プレイヤーの最高スコアをlocalStorageに保存するハイスコアシステムを作成してください。敵を連続で倒した場合のボーナスポイント（コンボシステム）を追加し、敵の種類ごとに異なるポイント値を設定してください。プレイヤーが新しいハイスコアを達成した際に視覚的なインジケーターを表示し、現在のハイスコアをゲーム画面に表示してください。



## 🚀 チャレンジ

スコアとライフを備えた機能的なゲームが完成しました。プレイヤー体験を向上させるために追加できる機能について考えてみましょう。

## 講義後クイズ

[講義後クイズ](https://ff-quizzes.netlify.app/web/quiz/38)

## 復習と自己学習

さらに探求したいですか？ゲームのスコアリングやライフシステムに対するさまざまなアプローチを調査してみてください。[PlayFab](https://playfab.com)のようなスコアリング、リーダーボード、プレイヤーの進行を管理するゲームエンジンには興味深いものがあります。そのようなものを統合することで、ゲームがどのように次のレベルに進化するか考えてみてください。

## 課題

[スコアリングゲームを作る](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解について、当社は責任を負いません。