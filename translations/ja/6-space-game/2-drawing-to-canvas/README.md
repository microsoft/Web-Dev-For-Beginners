<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "056641280211e52fd0adb81b6058ec55",
  "translation_date": "2025-08-28T17:53:20+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート2: ヒーローとモンスターをキャンバスに描画する

## 講義前のクイズ

[講義前のクイズ](https://ff-quizzes.netlify.app/web/quiz/31)

## キャンバス

キャンバスはデフォルトではコンテンツがないHTML要素で、まっさらな状態です。描画することで内容を追加します。

✅ [Canvas APIについてもっと読む](https://developer.mozilla.org/docs/Web/API/Canvas_API)（MDN）

通常、キャンバスはページのbody部分で以下のように宣言されます：

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

上記では`id`、`width`、`height`を設定しています。

- `id`: キャンバスにアクセスして操作するための参照を取得するために設定します。
- `width`: 要素の幅を指定します。
- `height`: 要素の高さを指定します。

## 簡単な図形を描画する

キャンバスはデカルト座標系を使用して描画を行います。そのため、x軸とy軸を使って位置を表現します。座標`0,0`は左上の位置を示し、右下はキャンバスの幅と高さで指定した位置になります。

![キャンバスのグリッド](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.ja.png)
> 画像提供: [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

キャンバス要素に描画するには、以下の手順を踏む必要があります：

1. **キャンバス要素の参照を取得**する。
1. **キャンバス要素上のコンテキスト要素の参照を取得**する。
1. **コンテキスト要素を使って描画操作を実行**する。

上記の手順をコードで表すと以下のようになります：

```javascript
// draws a red rectangle
//1. get the canvas reference
canvas = document.getElementById("myCanvas");

//2. set the context to 2D to draw basic shapes
ctx = canvas.getContext("2d");

//3. fill it with the color red
ctx.fillStyle = 'red';

//4. and draw a rectangle with these parameters, setting location and size
ctx.fillRect(0,0, 200, 200) // x,y,width, height
```

✅ Canvas APIは主に2D図形に焦点を当てていますが、Webサイトに3D要素を描画することも可能です。その場合は[WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)を使用します。

Canvas APIを使えば以下のようなものを描画できます：

- **幾何学的な図形**: すでに長方形の描画方法を紹介しましたが、他にも多くの図形を描画できます。
- **テキスト**: 任意のフォントや色でテキストを描画できます。
- **画像**: .jpgや.pngなどの画像アセットを基に画像を描画できます。

✅ 試してみましょう！長方形の描き方を学びましたが、円をページに描画できますか？CodePenで興味深いCanvasの描画例を見てみましょう。こちらは[特に印象的な例](https://codepen.io/dissimulate/pen/KrAwx)です。

## 画像アセットを読み込んで描画する

画像アセットを読み込むには、`Image`オブジェクトを作成し、その`src`プロパティを設定します。その後、`load`イベントを監視して使用可能になったことを確認します。コードは以下のようになります：

### アセットの読み込み

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### アセット読み込みのパターン

上記を以下のような構造にラップすることを推奨します。これにより使いやすくなり、完全に読み込まれた後にのみ操作を試みることができます：

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // image loaded and ready to be used
      resolve(img);
    }
  })
}

// use like so

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

ゲームアセットを画面に描画するコードは以下のようになります：

```javascript
async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
  ctx.drawImage(monsterImg, 0,0);
}
```

## いよいよゲーム作りを始めましょう

### 作るもの

キャンバス要素を含むWebページを作成します。`1024*768`の黒い画面をレンダリングする必要があります。以下の2つの画像を提供しています：

- ヒーローの船

   ![ヒーローの船](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.ja.png)

- 5*5のモンスター

   ![モンスターの船](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.ja.png)

### 開発を始めるための推奨手順

`your-work`サブフォルダに作成されたファイルを見つけてください。このフォルダには以下が含まれているはずです：

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Visual Studio Codeでこのフォルダのコピーを開きます。ローカル開発環境がセットアップされている必要があります。推奨される環境は、Visual Studio Code、NPM、Nodeがインストールされていることです。コンピュータに`npm`がセットアップされていない場合は、[こちらで設定方法を確認してください](https://www.npmjs.com/get-npm)。

プロジェクトを開始するには、`your_work`フォルダに移動します：

```bash
cd your-work
npm start
```

上記の操作で、`http://localhost:5000`アドレスでHTTPサーバーが開始されます。ブラウザを開き、そのアドレスを入力してください。現在は空白のページですが、これから変わります。

> 注意: 画面上の変更を確認するには、ブラウザをリフレッシュしてください。

### コードを追加する

以下を解決するために`your-work/app.js`に必要なコードを追加してください：

1. **キャンバスを描画**して黒い背景を設定する
   > ヒント: `/app.js`の適切なTODOの下に2行追加し、`ctx`要素を黒に設定し、左上の座標を0,0に、キャンバスの高さと幅をキャンバスのサイズに等しく設定します。
2. **テクスチャを読み込む**
   > ヒント: `await loadTexture`を使用して画像パスを渡し、プレイヤーと敵の画像を追加します。まだ画面には表示されません！
3. **画面の下半分の中央にヒーローを描画する**
   > ヒント: `drawImage` APIを使用して`heroImg`を画面に描画し、`canvas.width / 2 - 45`と`canvas.height - canvas.height / 4`を設定します。
4. **5*5のモンスターを描画する**
   > ヒント: 敵を画面に描画するコードをコメント解除します。その後、`createEnemies`関数に移動して構築します。

   まず、いくつかの定数を設定します：

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    次に、モンスターの配列を画面に描画するループを作成します：

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## 結果

完成した結果は以下のようになります：

![黒い画面にヒーローと5*5のモンスター](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.ja.png)

## 解答

まずは自分で解決を試みてください。もし行き詰まった場合は、[解答](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)を確認してください。

---

## 🚀 チャレンジ

2Dに焦点を当てたCanvas APIについて学びました。[WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)を見て、3Dオブジェクトを描画してみてください。

## 講義後のクイズ

[講義後のクイズ](https://ff-quizzes.netlify.app/web/quiz/32)

## 復習と自己学習

Canvas APIについてもっと学ぶには、[こちらを読む](https://developer.mozilla.org/docs/Web/API/Canvas_API)のがおすすめです。

## 課題

[Canvas APIで遊んでみよう](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤った解釈について、当社は責任を負いません。