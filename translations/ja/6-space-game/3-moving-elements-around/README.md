<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-28T17:51:46+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "ja"
}
-->
# スペースゲームを作ろう パート3: 動きを追加する

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/33)

ゲームは、画面上でエイリアンが動き回るようになって初めて楽しくなります！このゲームでは、以下の2種類の動きを利用します：

- **キーボード/マウスの動き**: ユーザーがキーボードやマウスを操作して画面上のオブジェクトを動かす場合。
- **ゲームによる動き**: ゲームが一定の時間間隔でオブジェクトを動かす場合。

では、画面上で物を動かすにはどうすればいいのでしょうか？それはすべてデカルト座標に関することです。オブジェクトの位置 (x, y) を変更し、その後画面を再描画します。

通常、画面上で「動き」を実現するには以下の手順が必要です：

1. **新しい位置を設定する**: オブジェクトが動いたように見せるために必要です。
2. **画面をクリアする**: 描画の間に画面をクリアする必要があります。背景色で塗りつぶした長方形を描画することでクリアできます。
3. **新しい位置にオブジェクトを再描画する**: これにより、オブジェクトをある位置から別の位置に移動させることができます。

以下はコードでの例です：

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ 毎秒何フレームもヒーローを再描画すると、パフォーマンスコストが発生する理由を考えられますか？[このパターンの代替案](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)について読んでみてください。

## キーボードイベントの処理

イベントを処理するには、特定のイベントをコードに関連付けます。キーボードイベントはウィンドウ全体でトリガーされますが、マウスイベント（例えば `click`）は特定の要素をクリックすることに関連付けることができます。このプロジェクトではキーボードイベントを使用します。

イベントを処理するには、ウィンドウの `addEventListener()` メソッドを使用し、2つの入力パラメータを提供する必要があります。1つ目のパラメータはイベントの名前（例: `keyup`）、2つ目のパラメータはイベントが発生した結果として呼び出される関数です。

以下はその例です：

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

キーイベントでは、押されたキーを確認するためにイベントの2つのプロパティを使用できます：

- `key`: 押されたキーの文字列表現（例: `ArrowUp`）
- `keyCode`: 数値表現（例: `37`、これは `ArrowLeft` に対応）

✅ キーイベントの操作はゲーム開発以外でも役立ちます。この技術の他の用途を考えられますか？

### 特殊キー: 注意点

ウィンドウに影響を与える*特殊な*キーがあります。例えば、`keyup` イベントをリッスンしている場合、これらの特殊キーを使ってヒーローを移動させると、水平スクロールも実行されます。そのため、ゲームを構築する際には、このブラウザの組み込み動作を*無効化*する必要があるかもしれません。そのためには以下のようなコードが必要です：

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

上記のコードは、矢印キーとスペースキーの*デフォルト*の動作を無効化します。この*無効化*の仕組みは、`e.preventDefault()` を呼び出すことで実現されます。

## ゲームによる動き

`setTimeout()` や `setInterval()` のようなタイマーを使用して、一定の時間間隔でオブジェクトの位置を更新することで、オブジェクトを自動的に動かすことができます。以下はその例です：

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## ゲームループ

ゲームループとは、定期的に呼び出される関数の概念です。ゲームループと呼ばれるのは、ユーザーに見えるすべてのものがこのループ内で描画されるためです。ゲームループは、ゲームの一部であるすべてのゲームオブジェクトを使用して、それらを描画します。ただし、何らかの理由でゲームの一部ではなくなったオブジェクト（例えば、レーザーで撃たれて爆発した敵）は除外されます（これについては後のレッスンで詳しく学びます）。

以下は、コードで表現された典型的なゲームループの例です：

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

上記のループは、200ミリ秒ごとにキャンバスを再描画します。ゲームに最適な間隔を選択することができます。

## スペースゲームの続き

既存のコードを拡張します。パートIで完成させたコードを使用するか、[パートIIのスターターコード](../../../../6-space-game/3-moving-elements-around/your-work)を使用してください。

- **ヒーローを動かす**: 矢印キーを使用してヒーローを動かせるようにコードを追加します。
- **敵を動かす**: 敵が一定の速度で上から下に移動するようにコードを追加します。

## 推奨手順

`your-work` サブフォルダに作成されたファイルを見つけてください。以下の内容が含まれているはずです：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

プロジェクトを開始するには、`your_work` フォルダで以下を入力します：

```bash
cd your-work
npm start
```

上記のコマンドは、`http://localhost:5000` アドレスでHTTPサーバーを起動します。ブラウザを開いてそのアドレスを入力してください。現在のところ、ヒーローとすべての敵が表示されるはずですが、まだ何も動いていません！

### コードを追加

1. **専用のオブジェクトを追加**: `hero`、`enemy`、`game object` を追加し、それぞれに `x` と `y` のプロパティを持たせます。（[継承またはコンポジション](../README.md) の部分を思い出してください）。

   *ヒント*: `game object` は `x` と `y` を持ち、キャンバスに自分自身を描画する機能を持つべきです。

   > ヒント: 以下のようにコンストラクタを定義した新しい GameObject クラスを追加し、それをキャンバスに描画してみてください：
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    次に、この GameObject を拡張して Hero と Enemy を作成します。
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **キーイベントハンドラを追加**: キー操作（ヒーローを上下左右に移動）を処理するコードを追加します。

   *覚えておいてください*: これはデカルト座標系であり、左上が `0,0` です。また、*デフォルト動作*を停止するコードを追加することを忘れないでください。

   > ヒント: onKeyDown 関数を作成し、それをウィンドウにアタッチします：

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   この時点でブラウザのコンソールを確認し、キー入力がログに記録されているか確認してください。

3. **[Pub-Subパターン](../README.md)を実装**: これにより、残りの部分を進める際にコードをクリーンに保つことができます。

   この最後の部分を行うには、以下を実行します：

   1. **ウィンドウにイベントリスナーを追加**:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **EventEmitterクラスを作成**: メッセージを発行および購読するために使用します：

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **定数を追加**し、EventEmitter をセットアップ：

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **ゲームを初期化**:

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **ゲームループをセットアップ**

   window.onload 関数をリファクタリングしてゲームを初期化し、適切な間隔でゲームループをセットアップします。また、レーザービームを追加します：

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **敵を一定間隔で動かすコードを追加**

    `createEnemies()` 関数をリファクタリングして敵を作成し、新しい gameObjects クラスにプッシュします：

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    そして、ヒーロー用に同様のプロセスを行う `createHero()` 関数を追加します。
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    最後に、`drawGameObjects()` 関数を追加して描画を開始します：

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    敵がヒーローの宇宙船に向かって進み始めるはずです！

---

## 🚀 チャレンジ

ご覧の通り、関数や変数、クラスを追加していくとコードが「スパゲッティコード」になりがちです。コードをより読みやすくするために、どのように整理すればよいか考えてみてください。たとえ1つのファイルに収まる場合でも、コードを整理するシステムをスケッチしてみましょう。

## 講義後クイズ

[講義後クイズ](https://ff-quizzes.netlify.app/web/quiz/34)

## 復習と自己学習

フレームワークを使用せずにゲームを作成していますが、JavaScriptベースのキャンバスフレームワークはゲーム開発に多く存在します。これらについて[調べてみてください](https://github.com/collections/javascript-game-engines)。

## 課題

[コードにコメントを追加する](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてお考えください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。