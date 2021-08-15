# スペースゲーム構築プロジェクト その 4: レーザーを追加して衝突を検出する

## レッスン前の小テスト

[レッスン前の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/35?loc=ja)

このレッスンでは、JavaScript でレーザーを撃つ方法を学びます! 私たちはゲームに2つのものを追加します。

- **レーザー**: このレーザーはあなたのヒーローの宇宙船から垂直に上向きに撃たれます
- **衝突検出**、発射する能力を実装する一環として、我々はまたいくつかの素敵なゲームのルールを追加します
   - **レーザーが敵に当たる**: レーザーが当たると敵が破壊される
   - **レーザーがトップ画面に当たる**: 画面上部に当たるとレーザーが破壊されます
   - **敵とヒーローの衝突**: 敵とヒーローがぶつかると破壊されます
   - **敵が画面の下に当たる**: 敵が画面下に当たると敵とヒーローが破壊されます

要するに、あなた - *ヒーロー* - は画面の下部に移動するために管理する前に、レーザーですべての敵をヒットする必要があります。

✅ これまでに書かれた最初のコンピュータゲームについて少し調べてみてください。その機能は何だったのでしょうか?

一緒にヒーローになりましょう!

## 衝突検出

どのようにして衝突を検出するのか? ゲームオブジェクトを移動する長方形と考える必要があります。なぜでしょうか? ゲームオブジェクトの描画に使われる画像は矩形です。`x`、`y`、`width`、`height` を持っています。

2 つの長方形、つまりヒーローと敵が交差すると、衝突します。そのときに何が起こるかは、ゲームのルール次第です。したがって、衝突検出を実装するためには以下のものが必要です。

1. ゲームオブジェクトの矩形表現を取得する方法。こんな感じです

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

2. 比較関数で、この関数は次のようになります

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## オブジェクトをどうやって破壊するか

ゲーム内のオブジェクトを破壊するには、一定の間隔で発生するゲームループの中で、このアイテムをペイントしないようにゲームに知らせる必要があります。これを行うには、以下のように、何かが起こったときにゲームオブジェクトを *dead* としてマークする方法があります。

```javascript
// 衝突が発生します
enemy.dead = true
```

その後、画面を再描画する前に、このように、*dead* オブジェクトをソートしていきます。

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## レーザーの撃ち方

レーザーを発射することは、キーイベントに反応して、特定の方向に移動するオブジェクトを作成することになります。そのため、以下のような作業を行う必要があります。

1. **レーザーオブジェクトを作成します**: ヒーローの船の上部から、作成時に画面の上部に向かって上向きに移動を開始します
2. **キーイベントにコードを添付します**: レーザーを撮影しているプレイヤーを表すキーボードのキーを選択する必要があります
3. キーを押すと**レーザーのように見えるゲームオブジェクトを作成します**

## レーザーのクールダウン

レーザーは、例えば*スペース*のように、キーを押すたびに発射する必要があります。短時間で多くのレーザーが発射されるのを防ぐために、この問題を解決する必要があります。これを修正するには、いわゆる *クールダウン*、タイマーを実装することで、レーザーはそれほど頻繁にしか発射することができないことを保証します。以下の方法で実装できます。

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
      // レーザーを作る
      this.cooldown = new Cooldown(500);
    } else {
      // 何もしない-まだクールダウンしていない。
    }
  }
}
```

✅ スペースゲームシリーズのレッスン1を参照して、*クールダウン*について思い出してください。

## 何を構築するか

前回のレッスンで使用した既存のコード (クリーンアップしてリファクタリングしたはずのコード) を使用して、それを拡張します。
パート II のコードから始めるか、[パートIII - スターター](../../your-work)のコードを使用してください。

> ヒント: 作業に使用するレーザーはすでにアセットフォルダにあり、コードで参照されています。

- **衝突検出を追加します**、レーザーが何かに衝突するときは、次のルールを適用する必要があります
   1. **レーザーが敵に当たる**: レーザーが当たると敵が破壊される
   2. **レーザーが画面上部に当たる**: レーザーが画面の上部に当たると破壊される
   3. **敵とヒーローの衝突**: 敵とヒーローがぶつかると破壊される
   4. **画面下に敵が当たる**: 敵が画面下部に当たると敵とヒーローが破壊される

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

次のコマンドをタイピングして、あなたのプロジェクトを `your_work` フォルダから開始します。

```bash
cd your-work
npm start
```

上記は、`http://localhost:5000` というアドレスで HTTP サーバを起動します。ブラウザを開いてそのアドレスを入力すると、今はヒーローと全ての敵が表示されるはずですが、まだ何も動いていません。

### コードの追加

1. **衝突を処理するためにゲームオブジェクトの矩形表現を設定する** 以下のコードでは、`GameObject` の矩形表現を取得することができます。GameObject クラスを編集して拡張します

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

2. **衝突をチェックするコードの追加** これは、2 つの矩形が交差するかどうかをテストする新しい関数になります

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

3. **レーザー発射機能の追加**
   1. **キーイベントメッセージを追加します**。*スペース*キーはヒーローの宇宙船の真上にレーザーを作成する必要があります。Messages オブジェクトに3つの定数を追加します

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **スペースキーを処理します**。スペースを扱うために、`window.addEventListener` のキーアップ関数を編集します

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **リスナーを追加します**。スペースバーがヒットした時にヒーローが発射できるように `initGame()` 関数を編集します

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       そして、敵がレーザーに衝突したときの動作を保証するために、新しい `eventEmitter.on()` 関数を追加します

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **オブジェクトを移動させ**、レーザーが徐々に画面上部に移動するようにします。先ほどと同じように `GameObject`を継承した Laser クラスを新たに作成します
   
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

   1. **衝突の処理**、レーザーの衝突ルールの実装 衝突したオブジェクトのヒットをテストする `updateGameObjects()` 関数を追加します

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // レーザーが当たる
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

      必ず `window.onload` のゲームループに `updateGameObjects()` を追加してください。

   4. レーザーに**クールダウンを実装**して、それがそんなに頻繁にしか発射できないようにします

      最後に、Hero クラスをクールダウンできるように編集します

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

この時点で、あなたのゲームはいくつかの機能を持っています! 矢印キーで移動したり、スペースバーでレーザーを発射したり、敵はあなたがそれらを打つときに消えることができます。よくできました!

---

## 🚀 チャレンジ

爆発を追加しましょう! [スペースアートレポ](../../solution/spaceArt/readme.txt)のゲームアセットを見て、レーザーがエイリアンに当たったときに爆発を追加してみてください。

## レッスン後の小テスト

[レッスン後の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/36?loc=ja)

## 復習と自己学習

これまでのゲームの間隔を実験してみてください。それらを変更するとどうなるでしょうか? [JavaScript のタイミングイベント](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/)についての詳細はこちら。

## 課題

[衝突を調べる](assignment.ja.md)
