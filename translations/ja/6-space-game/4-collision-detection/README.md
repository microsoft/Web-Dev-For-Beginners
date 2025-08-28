<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-28T17:52:53+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート4: レーザーを追加して衝突を検出する

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/35)

このレッスンでは、JavaScriptを使ってレーザーを撃つ方法を学びます！ゲームに以下の2つを追加します：

- **レーザー**: ヒーローの船から垂直に上方向へ発射されるレーザー
- **衝突検出**: *撃つ*機能を実装する一環として、以下のゲームルールを追加します：
   - **レーザーが敵に命中**: レーザーが敵に当たると敵が消滅
   - **レーザーが画面上部に命中**: レーザーが画面上部に到達すると消滅
   - **敵とヒーローが衝突**: 敵とヒーローが衝突すると両方が消滅
   - **敵が画面下部に到達**: 敵が画面下部に到達すると敵とヒーローが消滅

つまり、あなた -- *ヒーロー* -- は敵が画面下部に到達する前にレーザーで全ての敵を倒さなければなりません。

✅ 最初に作られたコンピューターゲームについて少し調べてみましょう。その機能はどのようなものでしたか？

一緒にヒーローになりましょう！

## 衝突検出

衝突検出はどうやって行うのでしょうか？ゲームオブジェクトを動く矩形として考える必要があります。なぜかと言うと、ゲームオブジェクトを描画するために使用される画像は矩形だからです。矩形には `x`、`y`、`width`、`height` があります。

もし2つの矩形、つまりヒーローと敵が*交差*した場合、それは衝突です。その後に何が起こるべきかはゲームのルール次第です。衝突検出を実装するには以下が必要です：

1. ゲームオブジェクトの矩形表現を取得する方法、例えば以下のようなもの：

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. 比較関数、この関数は以下のように見えるかもしれません：

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## 物を破壊する方法

ゲーム内で物を破壊するには、ゲームにそのアイテムを一定間隔でトリガーされるゲームループで描画しないように指示する必要があります。その方法の一つは、何かが起こったときにゲームオブジェクトを*死んだ*とマークすることです。例えば以下のように：

```javascript
// collision happened
enemy.dead = true
```

その後、画面を再描画する前に*死んだ*オブジェクトを整理することができます。例えば以下のように：

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## レーザーを発射する方法

レーザーを発射するには、キーイベントに応答して特定の方向に移動するオブジェクトを作成することを意味します。そのため、以下の手順を実行する必要があります：

1. **レーザーオブジェクトを作成**: ヒーローの船の上部から作成され、作成時に画面上部に向かって移動を開始します。
2. **キーイベントにコードを紐付ける**: レーザーを撃つプレイヤーを表すキーボードのキーを選択する必要があります。
3. **レーザーのように見えるゲームオブジェクトを作成**: キーが押されたときに。

## レーザーのクールダウン

レーザーは例えば*スペースキー*を押すたびに発射される必要があります。しかし、短時間で大量のレーザーが生成されるのを防ぐために修正が必要です。この修正は、いわゆる*クールダウン*、つまりタイマーを実装することで、レーザーが一定間隔でしか発射されないようにすることです。以下の方法で実装できます：

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ 宇宙ゲームシリーズのレッスン1を参照して、*クールダウン*について思い出してください。

## 作成するもの

前回のレッスンで整理してリファクタリングした既存のコードを使用して拡張します。パートIIのコードから始めるか、[Part III- starter](../../../../../../../../../your-work)のコードを使用してください。

> ヒント: 作業するレーザーはすでにアセットフォルダにあり、コードで参照されています。

- **衝突検出を追加**: レーザーが何かに衝突した場合、以下のルールが適用されるべきです：
   1. **レーザーが敵に命中**: レーザーが敵に当たると敵が消滅
   2. **レーザーが画面上部に命中**: レーザーが画面上部に到達すると消滅
   3. **敵とヒーローが衝突**: 敵とヒーローが衝突すると両方が消滅
   4. **敵が画面下部に到達**: 敵が画面下部に到達すると敵とヒーローが消滅

## 推奨手順

`your-work` サブフォルダに作成されたファイルを見つけてください。以下が含まれているはずです：

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

プロジェクトを開始するには、`your_work` フォルダで以下を入力してください：

```bash
cd your-work
npm start
```

上記はHTTPサーバーをアドレス `http://localhost:5000` で開始します。ブラウザを開いてそのアドレスを入力してください。現在はヒーローと全ての敵が表示されるはずですが、まだ動いていません。

### コードを追加

1. **ゲームオブジェクトの矩形表現を設定して衝突を処理する** 以下のコードは `GameObject` の矩形表現を取得する方法を提供します。`GameObject` クラスを編集して拡張してください：

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **衝突をチェックするコードを追加** これは2つの矩形が交差しているかどうかをテストする新しい関数になります：

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **レーザー発射機能を追加**
   1. **キーイベントメッセージを追加**。*スペースキー*がヒーローの船のすぐ上にレーザーを作成するべきです。Messagesオブジェクトに3つの定数を追加してください：

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **スペースキーを処理**。`window.addEventListener` のkeyup関数を編集してスペースキーを処理してください：

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **リスナーを追加**。`initGame()` 関数を編集して、スペースキーが押されたときにヒーローが発射できるようにしてください：

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       また、敵がレーザーに衝突したときの動作を確保するために新しい `eventEmitter.on()` 関数を追加してください：

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **オブジェクトを移動**。レーザーが徐々に画面上部に移動するようにしてください。これまでと同様に `GameObject` を拡張する新しいLaserクラスを作成します：

      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **衝突を処理**。レーザーの衝突ルールを実装します。衝突するオブジェクトをテストする `updateGameObjects()` 関数を追加してください：

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      `updateGameObjects()` を `window.onload` のゲームループに追加することを忘れないでください。

   4. **レーザーのクールダウンを実装**。レーザーが一定間隔でしか発射されないようにします。

      最後に、ヒーロークラスを編集してクールダウンできるようにしてください：

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

これでゲームにいくつかの機能が追加されました！矢印キーで移動し、スペースキーでレーザーを発射し、敵に命中すると消えるようになりました。お疲れ様です！

---

## 🚀 チャレンジ

爆発を追加してみましょう！[Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) のゲームアセットを確認して、レーザーがエイリアンに命中したときに爆発を追加してみてください。

## 講義後クイズ

[講義後クイズ](https://ff-quizzes.netlify.app/web/quiz/36)

## 復習と自己学習

これまでのゲームの間隔を試してみましょう。間隔を変更するとどうなるか確認してください。[JavaScriptのタイミングイベント](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/)についてさらに学びましょう。

## 課題

[衝突を探る](assignment.md)

---

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知ください。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当方は一切の責任を負いません。