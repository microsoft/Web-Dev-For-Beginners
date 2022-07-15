# スペースゲーム構築プロジェクト その 3: モーションの追加

## レッスン前の小テスト

[レッスン前の小テスト](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/33?loc=ja)

ゲームは、あなたが画面上を走り回るエイリアンを持っているまでは、あまり楽しいものではありません! このゲームでは、2種類の動きを使用しています。このゲームでは、2種類の動きを利用していきます。

- **キーボード/マウスの動き**: ユーザーがキーボードやマウスを操作して画面上のオブジェクトを移動させたとき
- **ゲームで誘導された動き**: ゲームが一定の時間間隔でオブジェクトを移動させたとき

では、どのようにして画面上で物を動かすのでしょうか? それはすべて直交座標に基づいています。オブジェクトの位置 (x,y) を変更してから、画面を再描画します。

通常、画面上で *移動* を行うには、以下の手順が必要です。

1. オブジェクトの**新しい位置を設定します**。これはオブジェクトが移動したと認識するために必要です
2. **画面をクリアします**が、これは描画の合間に画面をクリアする必要があります。背景色で塗りつぶす矩形を描くことでクリアできます
3. 新しい場所にオブジェクトを**再描画します**。これにより、ある場所から別の場所にオブジェクトを移動させることができます

 コードではこんな感じになります。

```javascript
// hero の場所を決めます。
hero.x += 5;
// hero がいる長方形をクリアします。
ctx.clearRect(0, 0, canvas.width, canvas.height);
// ゲームの背景と hero 描画し直します。
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ ヒーローを毎秒何フレームも描き直すとパフォーマンスコストが発生する理由が思いつきますか? [このパターンの代替案](https://www.html5rocks.com/ja/tutorials/canvas/performance/)を読んでみてください。

## キーボードイベントの処理

コードに特定のイベントをアタッチすることでイベントを処理します。キーボードイベントはウィンドウ全体でトリガーされますが、`click` のようなマウスイベントは特定の要素をクリックすることに接続することができます。このプロジェクトではキーボードイベントを使用します。

イベントを処理するには、ウィンドウの `addEventListener()` メソッドを使用し、2つの入力パラメータを指定する必要があります。最初のパラメータはイベントの名前で、例えば `keyup` のようなものです。2 番目のパラメータは、イベントの結果として呼び出される関数です。 

以下に例を示します。

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = キーの文字列表現
  if (evt.key === 'ArrowUp') {
    // 何か処理をします。
  }
})
```

キーイベントには、どのキーが押されたかを確認するために使用できる2つのプロパティがあります。

- `key`、これは押されたキーの文字列表現で、例えば `ArrowUp` のようなものです
- `keyCode`、これは数値表現であり、例えば `37` は `ArrowLeft` に対応します

✅ キーイベントの操作はゲーム開発以外でも有用です。他にはどのような用途が考えられますか?

### 特殊なキー： 注意事項

ウィンドウに影響を与える *特殊な* キーがあります。つまり、`keyup` イベントを聞いているときに、これらの特別なキーを使ってヒーローを動かした場合、水平スクロールも行われるということです。そのため、ゲームを構築する際には、このビルトインブラウザの動作を *shut-off* した方が良いかもしれません。このようなコードが必要です。

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // 矢印キー
    case 32:
      e.preventDefault();
      break; // スペース
    default:
      break; // 他のキーをブロックしないでください。
  }
};

window.addEventListener('keydown', onKeyDown);
```

上記のコードでは、矢印キーとスペースキーの *デフォルト* の動作が確実にシャットオフされます。*shut-off* メカニズムは `e.preventDefault()` を呼び出すときに発生します。

## ゲームで誘導された動き

`setTimeout()` や `setInterval()` 関数のようなタイマーを使うことで、オブジェクトの位置を目盛りや時間間隔ごとに更新することができます。これは次のようなものです。

```javascript
let id = setInterval(() => {
  //敵を Y 軸で動かす
  enemy.y += 10;
})
```

## ゲームループ

ゲームループとは、基本的には一定の間隔で呼び出される関数の概念です。ユーザーに見えるべきものはすべてループに描画されるので、ゲームループと呼ばれています。ゲームループはゲームの一部であるすべてのゲームオブジェクトを利用し、何らかの理由でゲームの一部ではない場合を除いて、すべてのオブジェクトを描画します。例えば、あるオブジェクトがレーザーで撃たれて吹き飛んでしまった場合、そのオブジェクトは現在のゲームループの一部ではなくなります (これについては後のレッスンで詳しく説明します)。

ゲームループがどのようなものか、コードで表現すると次のようになります。

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

上記のループは `200` ミリ秒ごとに呼び出され、キャンバスを再描画します。あなたのゲームに合った最適な間隔を選択することができます。

## スペースゲームの続き

既存のコードを使って、それを拡張していきます。パート Ⅰ で完成させたコードから始めるか、[パートⅡのスターター](../your-work)のコードを使います。

- **ヒーローの移動**: 矢印キーを使ってヒーローを移動できるようにコードを追加します
- **敵を移動する**: また、敵が与えられたレートで上から下に移動することを確認するためにコードを追加する必要があります

## 推奨される手順

あなたのために作成されたファイルを `your-work` サブフォルダ内で探します。以下のファイルが含まれているはずです。

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

次のコマンドをタイピングして、あなたのプロジェクトを `your_work` フォルダから開始します。

```bash
cd your-work
npm start
```

上記は、アドレス `http://localhost:5000` の HTTP サーバーを起動します。ブラウザを開いてそのアドレスを入力すると、今はヒーローと全ての敵が表示されるはずです。ただしまだ何も動いていません。

### コードの追加

1. `hero` と `enemy`、`game object`のための**オブジェクトを追加し**、それらは `x` と `y` のプロパティを持っている必要があります。([継承や合成](../../translations/README.ja.md)の部分を覚えておいてください)

   *ヒント* `game object` は `x` と `y` を持ち、それ自身をキャンバスに描画する機能を持つものでなければなりません。

   > tip: 以下のようにコンストラクタを定義した新しい GameObject クラスを追加してから、キャンバスに描画します。
  
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

    次に、この GameObject を拡張して、ヒーローと敵を作成します。
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...x, y, type, speedが必要です。
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

2. (ヒーローを上下左右に動かす) キーナビゲーションを処理するための**キーイベントハンドラを追加します**

   *REMEMBER* これは直交座標系で、左上は `0,0` です。また、*デフォルトの動作*を止めるコードを追加することも忘れないでください*。

   > tip: onKeyDown 関数を作成して、それをウィンドウにアタッチします。

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   この時点でブラウザのコンソールを確認し、キー入力がログに記録されているかどうかを確認します。

3. [Pub Sub パターン](../../translations/README.ja.md)を**実装する**と、残りの部分に続くようにコードをきれいに保つことができます

   この最後の部分を行うには

   1. ウィンドウに**イベントリスナーを追加します**

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

    1. メッセージを発行して購読するための **EventEmitter クラスを作成します**

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

    1. **定数を追加**して EventEmitter を設定します

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

    1. **ゲームを初期化します**

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

1. **ゲームのループを設定します**

   window.onload 関数をリファクタリングしてゲームを初期化し、良い間隔でゲームループを設定します。レーザービームも追加します。

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

5. 一定間隔で敵を移動させる**コードを追加します**

    関数 `createEnemies()` をリファクタリングして敵を作成し、それを新しい gameObjects クラスにプッシュします。

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
    
    そして `createHero()` 関数を追加して hero にも同様の処理を行います。
    
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

    最後に `drawGameObjects()` 関数を追加して描画を開始します。

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    あなたの敵はあなたのヒーローの宇宙船で前進を開始する必要があります!

---

## 🚀 チャレンジ

ご覧のように、関数や変数、クラスを追加し始めると、あなたのコードは「スパゲッティコード」になってしまうことがあります。コードをより読みやすく整理するにはどうしたらいいでしょうか? 1つのファイルに存在していても、あなたのコードを整理するためのシステムをスケッチしてみましょう。

## レッスン後の小テスト

[レッスン後の小テスト](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/34?loc=ja)

## 復習と自己学習

フレームワークを使わずにゲームを書いているうちに、JavaScript を使ったゲーム開発用の canvas フレームワークがたくさん出てきました。時間をかけて[これらについて読む](https://github.com/collections/javascript-game-engines)。

## 課題

[コードをコメントする](assignment.ja.md)
