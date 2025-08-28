<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-23T22:56:34+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート3: 動きを追加する

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/33)

ゲームは、画面上でエイリアンが動き回るようになって初めて面白くなります！このゲームでは、以下の2種類の動きを使用します：

- **キーボード/マウスの動き**: ユーザーがキーボードやマウスを操作して画面上のオブジェクトを動かす場合。
- **ゲームによる動き**: ゲームが一定の時間間隔でオブジェクトを動かす場合。

では、画面上で物を動かすにはどうすればいいのでしょうか？それはすべてデカルト座標に関することです。オブジェクトの位置 (x, y) を変更し、画面を再描画します。

通常、画面上で「動き」を実現するには以下のステップが必要です：

1. **新しい位置を設定する**: オブジェクトが移動したように見えるために必要です。
2. **画面をクリアする**: 描画の間に画面をクリアする必要があります。背景色で塗りつぶした矩形を描画することでクリアできます。
3. **新しい位置でオブジェクトを再描画する**: これにより、オブジェクトをある位置から別の位置に移動させることができます。

以下はコードの例です：

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

✅ ヒーローを1秒間に何フレームも再描画することで、パフォーマンスコストが発生する理由を考えられますか？[このパターンの代替案](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)について読んでみましょう。

## キーボードイベントを処理する

イベントは特定のコードに紐付けて処理します。キーボードイベントはウィンドウ全体でトリガーされますが、マウスイベント（例えば `click`）は特定の要素をクリックすることに紐付けることができます。このプロジェクトではキーボードイベントを使用します。

イベントを処理するには、ウィンドウの `addEventListener()` メソッドを使用し、2つの入力パラメータを提供する必要があります。1つ目のパラメータはイベント名（例: `keyup`）、2つ目のパラメータはイベントが発生した結果として呼び出されるべき関数です。

以下は例です：

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

キーイベントでは、押されたキーを確認するために使用できる2つのプロパティがあります：

- `key`: 押されたキーの文字列表現（例: `ArrowUp`）
- `keyCode`: 数値表現（例: `37`）、これは `ArrowLeft` に対応します。

✅ キーイベントの操作はゲーム開発以外でも役立ちます。この技術の他の用途を考えてみてください。

### 特殊キー: 注意点

ウィンドウに影響を与える*特殊*なキーがあります。つまり、`keyup` イベントを監視していて、これらの特殊キーを使ってヒーローを移動させると、水平スクロールも実行されます。そのため、ゲームを構築する際にはこのブラウザの組み込み動作を*無効化*する必要があります。以下のようなコードが必要です：

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

上記のコードは、矢印キーとスペースキーの*デフォルト*動作を無効化します。この*無効化*メカニズムは、`e.preventDefault()` を呼び出すことで実現されます。

## ゲームによる動き

`setTimeout()` や `setInterval()` 関数を使用して、一定の時間間隔でオブジェクトの位置を更新することで、物を自動的に動かすことができます。以下はその例です：

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## ゲームループ

ゲームループは、定期的に呼び出される関数の概念です。ゲームループと呼ばれるのは、ユーザーに表示されるべきすべてのものがループ内で描画されるためです。ゲームループは、ゲームの一部であるすべてのゲームオブジェクトを使用し、それらを描画します。ただし、何らかの理由でゲームの一部ではなくなった場合は除外されます。例えば、敵がレーザーで撃たれて爆発した場合、その敵は現在のゲームループの一部ではなくなります（これについては後のレッスンで詳しく学びます）。

以下は典型的なゲームループをコードで表現したものです：

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

上記のループは、`200` ミリ秒ごとにキャンバスを再描画します。ゲームに最適な間隔を選択することができます。

## 宇宙ゲームの続き

既存のコードを拡張します。パートIで完成させたコードを使用するか、[パートIIのスターターコード](../../../../6-space-game/3-moving-elements-around/your-work)を使用してください。

- **ヒーローを動かす**: 矢印キーを使用してヒーローを動かせるようにコードを追加します。
- **敵を動かす**: 敵が一定の速度で上から下へ移動するようにコードを追加します。

## 推奨ステップ

`your-work` サブフォルダに作成されたファイルを見つけてください。以下が含まれているはずです：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

`your_work` フォルダでプロジェクトを開始するには以下を入力してください：

```bash
cd your-work
npm start
```

上記のコマンドは、`http://localhost:5000` アドレスでHTTPサーバーを開始します。ブラウザを開き、そのアドレスを入力してください。現在のところ、ヒーローとすべての敵が表示されるはずですが、まだ何も動いていません！

### コードを追加する

1. **専用のオブジェクトを追加する**: `hero`、`enemy`、`game object` を追加し、それぞれに `x` と `y` プロパティを持たせます。（[継承またはコンポジション](../README.md) の部分を思い出してください）。

   *ヒント* `game object` は `x` と `y` を持ち、キャンバスに自分自身を描画する能力を持つべきです。

   >ヒント: 以下のようにコンストラクタを定義した新しい GameObject クラスを追加し、キャンバスに描画してください：
  
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

2. **キーイベントハンドラを追加する**: キー操作（ヒーローを上下左右に移動）を処理するコードを追加します。

   *注意* デカルト座標系では、左上が `0,0` です。また、*デフォルト動作*を停止するコードを追加することを忘れないでください。

   >ヒント: onKeyDown 関数を作成し、それをウィンドウに紐付けます：

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   この時点でブラウザのコンソールを確認し、キー入力がログに記録されるのを確認してください。

3. **[Pub sub パターン](../README.md) を実装する**: 残りの部分を進める際にコードを整理するためにこれを使用します。

   この最後の部分を行うには：

   1. **ウィンドウにイベントリスナーを追加する**:

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

    1. **EventEmitter クラスを作成する**: メッセージを発行および購読するために使用します：

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

    1. **定数を追加**し、EventEmitter を設定します：

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

    1. **ゲームを初期化する**

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

1. **ゲームループを設定する**

   window.onload 関数をリファクタリングしてゲームを初期化し、適切な間隔でゲームループを設定します。また、レーザービームを追加します：

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

5. **敵を一定間隔で動かすコードを追加する**

    `createEnemies()` 関数をリファクタリングして敵を作成し、新しい gameObjects クラスに追加します：

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
    
    また、ヒーロー用に同様のプロセスを行う `createHero()` 関数を追加します。
    
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

    最後に、描画を開始する `drawGameObjects()` 関数を追加します：

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    敵がヒーローの宇宙船に向かって進み始めるはずです！

---

## 🚀 チャレンジ

ご覧の通り、関数や変数、クラスを追加していくとコードが「スパゲッティコード」になりがちです。コードをより読みやすくするために、どのように整理すればよいかを考え、スケッチしてみてください。たとえコードが1つのファイルに収まっていても構いません。

## 講義後クイズ

[講義後クイズ](https://ff-quizzes.netlify.app/web/quiz/34)

## 復習と自己学習

フレームワークを使用せずにゲームを作成していますが、ゲーム開発のためのJavaScriptベースのキャンバスフレームワークは多数存在します。これらについて[調べてみましょう](https://github.com/collections/javascript-game-engines)。

## 課題

[コードにコメントを追加する](assignment.md)

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知おきください。元の言語で記載された文書が公式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。