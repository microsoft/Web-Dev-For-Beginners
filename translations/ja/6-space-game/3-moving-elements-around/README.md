<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-24T15:13:05+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート3: 動きを追加する

お気に入りのゲームを思い浮かべてみてください。魅力的なのは美しいグラフィックだけではなく、すべてが動き、あなたの操作に反応することです。今のところ、あなたの宇宙ゲームは美しい絵画のようですが、これから動きを加えて命を吹き込みます。

NASAの技術者がアポロ計画の誘導コンピュータをプログラムしたとき、彼らは似たような課題に直面しました。宇宙船をパイロットの入力に反応させながら、自動的にコース修正を維持するにはどうすればよいか？今日学ぶ原則は、プレイヤーが操作する動きと自動システムの動作を管理するという点で、これらの概念を反映しています。

このレッスンでは、宇宙船を画面上で滑らかに動かし、プレイヤーの指示に反応し、スムーズな動きのパターンを作る方法を学びます。すべてを自然に積み重ねていけるように、わかりやすい概念に分解して説明します。

レッスンの終わりには、プレイヤーがヒーローの宇宙船を画面上で飛ばし、敵の船が上空を巡回するようになります。さらに重要なのは、ゲームの動きのシステムを支える基本原則を理解することです。

## レクチャー前のクイズ

[レクチャー前のクイズ](https://ff-quizzes.netlify.app/web/quiz/33)

## ゲームの動きを理解する

ゲームが生き生きとするのは、物が動き始めるときです。そして、基本的に動きが生まれる方法は2つあります：

- **プレイヤーが操作する動き**: キーを押したりマウスをクリックしたりすると、何かが動きます。これは、あなたとゲームの世界を直接つなぐものです。
- **自動的な動き**: ゲーム自体が物を動かす場合です。例えば、敵の船が画面を巡回するように、プレイヤーが何もしなくても動くものです。

コンピュータ画面上で物を動かすのは、思ったよりも簡単です。数学の授業で習ったx座標とy座標を覚えていますか？まさにそれを使います。1610年にガリレオが木星の衛星を追跡したとき、彼は基本的に同じことをしていました。時間をかけて位置をプロットし、動きのパターンを理解していたのです。

画面上で物を動かすのは、フリップブックアニメーションを作るようなものです。以下の3つの簡単なステップを実行する必要があります：

1. **位置を更新する** – オブジェクトの位置を変更する（例えば、右に5ピクセル移動する）
2. **古いフレームを消去する** – 画面をクリアして、ゴーストのような跡が残らないようにする
3. **新しいフレームを描画する** – オブジェクトを新しい位置に配置する

これを十分速く行えば、スムーズで自然な動きが実現します。

コードで表すと以下のようになります：

```javascript
// Set the hero's location
hero.x += 5;
// Clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

**このコードが行うこと:**
- ヒーローのx座標を5ピクセル更新して水平に移動
- 前のフレームを消すためにキャンバス全体をクリア
- 黒い背景色でキャンバスを塗りつぶす
- ヒーローの画像を新しい位置に再描画

✅ ヒーローを1秒間に何度も再描画すると、パフォーマンスコストが蓄積する理由を考えられますか？[このパターンの代替案](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)について読んでみてください。

## キーボードイベントを処理する

ここでは、プレイヤーの入力をゲームのアクションに結びつけます。スペースバーを押してレーザーを発射したり、矢印キーをタップして小惑星を避けたりするとき、ゲームはその入力を検出して反応する必要があります。

キーボードイベントはウィンドウレベルで発生します。つまり、ブラウザ全体がそのキー入力を聞いています。一方、マウスクリックは特定の要素に結びつけることができます（例えば、ボタンをクリックする場合）。宇宙ゲームでは、プレイヤーにクラシックなアーケード感を与えるために、キーボード操作に焦点を当てます。

これは、1800年代の電信技師がモールス信号の入力を意味のあるメッセージに変換しなければならなかった状況を思い起こさせます。私たちも似たようなことをしています。キー入力をゲームコマンドに変換しているのです。

イベントを処理するには、ウィンドウの`addEventListener()`メソッドを使用し、2つの入力パラメータを提供する必要があります。最初のパラメータはイベントの名前（例えば`keyup`）、2番目のパラメータはイベントが発生した結果として呼び出されるべき関数です。

例を以下に示します：

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**ここで何が起こっているか:**
- ウィンドウ全体でキーボードイベントをリッスン
- 押されたキーに関する情報を含むイベントオブジェクトをキャプチャ
- 押されたキーが特定のキー（この場合は上矢印キー）と一致するかをチェック
- 条件が満たされた場合にコードを実行

キーイベントに関しては、押されたキーを確認するためにイベントの2つのプロパティを使用できます：

- `key` - 押されたキーの文字列表現（例: `'ArrowUp'`）
- `keyCode` - 数値表現（例: `37`）、これは`ArrowLeft`に対応

✅ キーイベントの操作はゲーム開発以外でも役立ちます。この技術の他の用途を考えられますか？

### 特殊キー: 注意点！

一部のキーには、ゲームに干渉する可能性のある組み込みのブラウザ動作があります。矢印キーはページをスクロールし、スペースバーはページを下にジャンプします。これらの動作は、誰かが宇宙船を操縦しようとしているときには望ましくありません。

これらのデフォルト動作を防ぎ、ゲームが入力を処理できるようにします。これは、初期のコンピュータプログラマーがシステム割り込みをオーバーライドしてカスタム動作を作成した方法に似ています。以下のようにします：

```javascript
const onKeyDown = function (e) {
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

**この防止コードの理解:**
- 不要なブラウザ動作を引き起こす可能性のある特定のキーコードをチェック
- 矢印キーやスペースバーのデフォルトブラウザ動作を防止
- 他のキーは通常通り機能させる
- `e.preventDefault()`を使用してブラウザの組み込み動作を停止

## ゲームによる動き

次に、プレイヤーの入力なしで動くオブジェクトについて話しましょう。敵の船が画面を横切ったり、弾丸が直線的に飛んだり、背景の雲が漂ったりすることを考えてみてください。この自律的な動きは、誰も操作していなくてもゲームの世界を生き生きとさせます。

JavaScriptの組み込みタイマーを使用して、一定間隔で位置を更新します。この概念は、振り子時計が動作する仕組みに似ています。一定のメカニズムが一貫したタイミングでアクションを引き起こします。以下のように簡単に実現できます：

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**この動きのコードが行うこと:**
- 100ミリ秒ごとに実行されるタイマーを作成
- 敵のy座標を毎回10ピクセル更新
- 後で停止できるように間隔IDを保存
- 敵を画面上で自動的に下方向に移動

## ゲームループ

すべてを結びつける概念、それがゲームループです。もしゲームが映画だったら、ゲームループは映画のプロジェクターのようなもので、フレームを次々と表示してすべてがスムーズに動いているように見せます。

すべてのゲームには、このループが裏で動いています。これは、すべてのゲームオブジェクトを更新し、画面を再描画し、このプロセスを継続的に繰り返す関数です。これにより、ヒーロー、すべての敵、飛び回るレーザーなど、ゲームの状態全体を追跡します。

この概念は、ウォルト・ディズニーのような初期の映画アニメーターが、キャラクターをフレームごとに描き直して動きの錯覚を作り出した方法を思い起こさせます。私たちは同じことを、鉛筆ではなくコードで行っています。

ゲームループの典型的なコードは以下のようになります：

```javascript
const gameLoopId = setInterval(() => {
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
  }
  gameLoop();
}, 200);
```

**ゲームループの構造を理解する:**
- 前のフレームを消すためにキャンバス全体をクリア
- 背景を単色で塗りつぶす
- 現在の位置にあるすべてのゲームオブジェクトを描画
- スムーズなアニメーションを作るために200ミリ秒ごとにこのプロセスを繰り返す
- フレームレートを管理するために間隔のタイミングを制御

## 宇宙ゲームの続き

これから、以前に作成した静的なシーンに動きを加えます。スクリーンショットのような状態からインタラクティブな体験へと変えていきます。各部分が前の部分に基づいて構築されるように、ステップバイステップで進めます。

前回のレッスンで作成したコードを取得するか、必要に応じて[Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work)フォルダのコードから始めてください。

**今日作るもの:**
- **ヒーローの操作**: 矢印キーで宇宙船を画面上で操縦
- **敵の動き**: エイリアンの船が進行を開始

これらの機能を実装していきましょう。

## 推奨ステップ

`your-work`サブフォルダに作成されたファイルを見つけてください。以下が含まれているはずです：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

プロジェクトを`your-work`フォルダで開始するには、以下を入力します：

```bash
cd your-work
npm start
```

**このコマンドが行うこと:**
- プロジェクトディレクトリに移動
- アドレス`http://localhost:5000`でHTTPサーバーを開始
- ゲームファイルを提供してブラウザでテスト可能にする

上記のコマンドを実行すると、アドレス`http://localhost:5000`でHTTPサーバーが開始されます。ブラウザを開いてそのアドレスを入力してください。今のところ、ヒーローとすべての敵が表示されるはずですが、まだ動いていません！

### コードを追加する

1. **専用オブジェクトを追加**: `hero`、`enemy`、`game object`を作成し、それぞれに`x`と`y`プロパティを持たせます。（[継承または構成](../README.md)の部分を思い出してください）

   *ヒント* `game object`は`x`と`y`を持ち、キャンバスに自分自身を描画する能力を持つべきです。

   > **Tip**: 以下のように新しい`GameObject`クラスを追加し、そのコンストラクタを定義してキャンバスに描画してください：

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

    **この基本クラスの理解:**
    - すべてのゲームオブジェクトが共有する共通プロパティ（位置、サイズ、画像）を定義
    - オブジェクトが削除されるべきかどうかを追跡する`dead`フラグを含む
    - キャンバス上でオブジェクトを描画する`draw()`メソッドを提供
    - 子クラスがオーバーライドできるすべてのプロパティにデフォルト値を設定

    次に、この`GameObject`を拡張して`Hero`と`Enemy`を作成します：
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 75;
        this.type = "Hero";
        this.speed = 5;
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.type = "Enemy";
        const id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y);
            clearInterval(id);
          }
        }, 300);
      }
    }
    ```

    **これらのクラスの重要な概念:**
    - `extends`キーワードを使用して`GameObject`から継承
    - `super(x, y)`を使用して親コンストラクタを呼び出す
    - 各オブジェクトタイプに特定の寸法とプロパティを設定
    - `setInterval()`を使用して敵の自動移動を実装

2. **キーイベントハンドラを追加**してキー操作（ヒーローを上下左右に移動）を処理

   *覚えておいてください* これはデカルト座標系で、左上が`0,0`です。また、*デフォルト動作*を停止するコードを追加することを忘れないでください。

   > **Tip**: `onKeyDown`関数を作成し、ウィンドウにアタッチしてください：

   ```javascript
   const onKeyDown = function (e) {
     console.log(e.keyCode);
     // Add the code from the lesson above to stop default behavior
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

   window.addEventListener("keydown", onKeyDown);
   ```
    
   **このイベントハンドラが行うこと:**
   - ウィンドウ全体でkeydownイベントをリッスン
   - 押されたキーコードをログに記録して、どのキーが押されているかデバッグ
   - 矢印キーやスペースバーのデフォルトブラウザ動作を防止
   - 他のキーは通常通り機能させる
   
   この時点でブラウザコンソールを確認し、キー入力がログに記録される様子を確認してください。

3. **[Pub subパターン](../README.md)を実装**して、残りの部分を進める際にコードを整理

   Publish-Subscribeパターンは、イベント検出とイベント処理を分離することでコードを整理します。これにより、コードがよりモジュール化され、保守が容易になります。

   最後の部分を行うには、以下を実行できます：

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

   **このイベントシステムが行うこと:**
   - キーボード入力を検出し、それをカスタムゲームイベントに変換
   - 入力検出をゲームロジックから分離
   - 後でコントロールを変更してもゲームコードに影響を与えない
   - 複数のシステムが同じ入力に反応できるようにする

   2. **EventEmitterクラスを作成**してメッセージを発行・購読:

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
       
   3. **定数を追加**してEventEmitterをセットアップ:

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

   **セットアップの理解:**
   - タイポを防ぎ、リファクタリングを容易にするためにメッセージ定数を定義
   - 画像、キャンバスコンテキスト、ゲーム状態の変数を宣言
   - Pub-Subシステム用のグローバルイベントエミッターを作成
   - すべてのゲームオブジェクトを保持する配列を初期化

   4. **ゲームを初期化**

       ```javascript
       function initGame() {
         gameObjects = [];
         createEnemies();
         createHero();
       
         eventEmitter.on(Messages.KEY_EVENT_UP, () => {
           hero.y -= 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
           hero.y += 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
           hero.x -= 5;
         });
       
4. **ゲームループをセットアップ**

   `window.onload`関数をリファクタリングしてゲームを初期化し、適切な間隔でゲームループをセットアップします。また、レーザービームを追加します：

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      const gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100);
    };
    ```

   **ゲームセットアップの理解:**
   - ページが完全にロードされるのを待ってから開始
   - キャンバス要素とその2Dレンダリングコンテキストを取得
   - すべての画像アセットを非同期的に`await`でロード
   - 100ミリ秒間隔（10 FPS）でゲームループを開始
   - 各フレームで画面全体をクリア
- **敵のグリッドを作成**: ネストされたループを使用して敵を配置  
- **敵画像を割り当て**: 各敵オブジェクトに画像を設定  
- **敵を追加**: 各敵をグローバルなゲームオブジェクト配列に追加  

そして、ヒーローに対しても同様のプロセスを行う `createHero()` 関数を追加してください。

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
  
**ヒーロー作成の内容:**  
- **ヒーローを配置**: 画面の下部中央にヒーローを配置  
- **ヒーロー画像を割り当て**: ヒーローオブジェクトに画像を設定  
- **ヒーローを追加**: ヒーローを描画用のゲームオブジェクト配列に追加  

最後に、描画を開始するための `drawGameObjects()` 関数を追加してください:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**描画関数の理解:**  
- **ゲームオブジェクトを反復処理**: 配列内のすべてのゲームオブジェクトを処理  
- **`draw()` メソッドを呼び出す**: 各オブジェクトに対して描画メソッドを実行  
- **キャンバスコンテキストを渡す**: オブジェクトが自分自身を描画できるようにする  

敵がヒーローの宇宙船に向かって進み始めるはずです！  
}

    ```
    
    and add a `createHero()` function to do a similar process for the hero.
    
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
  
最後に、描画を開始するための `drawGameObjects()` 関数を追加してください:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
敵がヒーローの宇宙船に向かって進み始めるはずです！

---

## GitHub Copilot Agent チャレンジ 🚀

ゲームの完成度をさらに高めるためのチャレンジです: 境界線とスムーズな操作を追加しましょう。現在、ヒーローが画面外に飛び出してしまうことがあり、動きがぎこちないかもしれません。

**ミッション:** 宇宙船の操作をよりリアルに感じられるように、画面の境界線と滑らかな動きを実装してください。これは、NASAの飛行制御システムが宇宙船の安全な運用パラメータを超えないようにする仕組みに似ています。

**作成するもの:** ヒーローの宇宙船が画面内に留まるようにするシステムを作成し、操作を滑らかにしてください。プレイヤーが矢印キーを押し続けると、船が連続的に滑るように動くべきです。画面の境界に到達した際に視覚的なフィードバックを追加することも検討してください。例えば、プレイエリアの端を示す微妙なエフェクトなど。

[agent modeについて詳しくはこちら](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)。

## 🚀 チャレンジ

プロジェクトが大きくなるにつれて、コードの整理がますます重要になります。関数、変数、クラスが混在してファイルが混雑していることに気づいたかもしれません。これは、アポロミッションのコードを整理するエンジニアたちが、複数のチームが同時に作業できるように明確で維持可能なシステムを作成しなければならなかった状況を思い起こさせます。

**ミッション:**  
ソフトウェアアーキテクトのように考えてください。6か月後にあなた（またはチームメイト）がコードの内容を理解できるようにするにはどうすればよいでしょうか？今はすべてを1つのファイルにまとめておくとしても、以下の方法でより良い整理が可能です:

- **関連する関数をグループ化**: 明確なコメントヘッダーを使用して整理  
- **関心の分離**: ゲームロジックと描画を分ける  
- **一貫した命名規則を使用**: 変数や関数の名前を統一  
- **モジュールや名前空間を作成**: ゲームの異なる側面を整理  
- **ドキュメントを追加**: 各主要セクションの目的を説明  

**振り返りの質問:**  
- 再びコードを見たときに、どの部分が最も理解しづらいですか？  
- 他の人がコードに貢献しやすくするにはどうすればよいですか？  
- パワーアップや異なる敵タイプなどの新しい機能を追加したい場合、どうなるでしょうか？

## 講義後のクイズ

[講義後のクイズ](https://ff-quizzes.netlify.app/web/quiz/34)

## 復習と自己学習

ゼロからすべてを構築してきましたが、これは学習には素晴らしい方法です。ただし、ここで少し秘密を教えます – JavaScriptのフレームワークには、あなたの作業を大幅に軽減してくれる素晴らしいものがあります。これまで学んだ基本に自信がついたら、[利用可能なものを探索する](https://github.com/collections/javascript-game-engines)価値があります。

フレームワークは、すべてのツールを手作りする代わりに、よく整備されたツールボックスを持つようなものです。コード整理の課題を解決するだけでなく、数週間かけて自分で構築する必要がある機能も提供してくれます。

**探索する価値のあること:**  
- ゲームエンジンがコードを整理する方法 – その巧妙なパターンに驚くでしょう  
- キャンバスゲームを滑らかに動作させるためのパフォーマンスのコツ  
- コードをよりクリーンで維持しやすくするモダンなJavaScriptの機能  
- ゲームオブジェクトとその関係を管理するさまざまなアプローチ  

## 課題

[コードにコメントを追加する](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は責任を負いません。