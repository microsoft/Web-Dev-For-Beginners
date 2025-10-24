<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-24T15:13:59+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート2: ヒーローとモンスターをキャンバスに描画する

Canvas APIは、ブラウザ内で動的でインタラクティブなグラフィックを作成するためのウェブ開発の最も強力な機能の1つです。このレッスンでは、空白のHTML `<canvas>` 要素をヒーローとモンスターでいっぱいのゲームワールドに変身させます。キャンバスをコードが視覚化されるデジタルアートボードと考えてみてください。

前回のレッスンで学んだ内容を基に、今回は視覚的な側面に深く掘り下げます。ゲームスプライトの読み込みと表示、要素の正確な位置決め、宇宙ゲームの視覚的基盤を作成する方法を学びます。これにより、静的なウェブページと動的でインタラクティブな体験の間のギャップを埋めることができます。

このレッスンの終わりまでに、ヒーローの船が正しく配置され、敵の編隊が戦闘準備を整えた完全なゲームシーンを作成できます。現代のゲームがブラウザでグラフィックをレンダリングする方法を理解し、自分のインタラクティブな視覚体験を作成するスキルを身につけることができます。それでは、キャンバスグラフィックを探求し、宇宙ゲームを生き生きとさせましょう！

## レクチャー前のクイズ

[レクチャー前のクイズ](https://ff-quizzes.netlify.app/web/quiz/31)

## キャンバスとは？

では、この `<canvas>` 要素とは一体何でしょうか？これは、HTML5がウェブブラウザで動的なグラフィックやアニメーションを作成するための解決策です。静的な画像や動画とは異なり、キャンバスは画面に表示されるすべてのピクセルを制御することができます。そのため、ゲーム、データの視覚化、インタラクティブなアートに最適です。キャンバスは、JavaScriptが絵筆となるプログラム可能な描画面と考えることができます。

デフォルトでは、キャンバス要素はページ上で空白の透明な長方形のように見えます。しかし、そこに可能性が秘められています！JavaScriptを使用して形状を描画したり、画像を読み込んだり、アニメーションを作成したり、ユーザーの操作に応答したりすることで、その真の力が発揮されます。これは、1960年代のBell Labsで初期のコンピュータグラフィックスの先駆者たちが最初のデジタルアニメーションを作成するためにピクセルをプログラムした方法に似ています。

✅ [Canvas APIについてさらに読む](https://developer.mozilla.org/docs/Web/API/Canvas_API) (MDN)

以下は、通常の宣言方法です。ページのbody部分に含まれます。

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**このコードが行うこと:**
- **`id`属性を設定**して、この特定のキャンバス要素をJavaScriptで参照できるようにします
- **ピクセル単位で幅を定義**してキャンバスの横幅を制御します
- **ピクセル単位で高さを設定**してキャンバスの縦の寸法を決定します

## 簡単な図形を描画する

キャンバス要素が何であるかを理解したところで、実際に描画してみましょう！キャンバスは、数学の授業で馴染みのある座標系を使用しますが、コンピュータグラフィックス特有の重要な違いがあります。

キャンバスは、x軸（水平）とy軸（垂直）を使用して描画するすべての位置を決定する直交座標系を使用します。しかし、重要な違いは次の通りです: 数学の座標系とは異なり、原点 `(0,0)` は左上隅から始まり、右に移動するにつれてx値が増加し、下に移動するにつれてy値が増加します。このアプローチは、電子ビームが上から下へスキャンする初期のコンピュータディスプレイに由来し、左上が自然な開始点となりました。

![キャンバスのグリッド](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.ja.png)
> 画像提供: [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

キャンバス要素に描画するには、キャンバスグラフィックの基礎を形成する同じ3ステップのプロセスを実行します。これを数回行うと、自然に身につきます:

1. **DOMからCanvas要素への参照を取得**（他のHTML要素と同じように）
2. **2Dレンダリングコンテキストを取得** – これがすべての描画メソッドを提供します
3. **描画を開始！** コンテキストの組み込みメソッドを使用してグラフィックを作成します

コードでは次のようになります:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**ステップごとに分解してみましょう:**
- キャンバス要素をIDで取得し、変数に保存します
- 2Dレンダリングコンテキストを取得します – これが描画メソッドのツールキットです
- `fillStyle`プロパティを使用してキャンバスに赤色を設定します
- 左上隅 (0,0) から始まる幅200ピクセル、高さ200ピクセルの矩形を描画します

✅ Canvas APIは主に2D形状に焦点を当てていますが、ウェブサイトに3D要素を描画することもできます。その場合は[WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)を使用するかもしれません。

Canvas APIを使用して描画できるものは以下の通りです:

- **幾何学的形状**: 矩形の描画方法をすでに示しましたが、描画できるものはもっとたくさんあります。
- **テキスト**: 任意のフォントや色でテキストを描画できます。
- **画像**: .jpgや.pngなどの画像アセットを基に画像を描画できます。

✅ 試してみましょう！矩形の描画方法を知っているので、ページに円を描画できますか？CodePenで興味深いCanvasの描画を見てみましょう。こちらは[特に印象的な例](https://codepen.io/dissimulate/pen/KrAwx)です。

## 画像アセットを読み込んで描画する

基本的な形状を描画するのは入門として役立ちますが、ほとんどのゲームには実際の画像が必要です！スプライト、背景、テクスチャはゲームに視覚的な魅力を与えます。キャンバスに画像を読み込んで表示する方法は、幾何学的形状を描画する方法とは異なりますが、プロセスを理解すれば簡単です。

`Image`オブジェクトを作成し、画像ファイルを読み込みます（これは非同期的に、つまり「バックグラウンドで」行われます）。その後、画像が準備できたらキャンバスに描画します。このアプローチにより、画像が正しく表示され、読み込み中にアプリケーションがブロックされることを防ぎます。

### 基本的な画像の読み込み

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**このコードで何が起こっているか:**
- 新しいImageオブジェクトを作成してスプライトやテクスチャを保持します
- 読み込む画像ファイルを指定するためにソースパスを設定します
- 画像が使用可能になったタイミングを正確に知るためにloadイベントを監視します

### 画像を読み込むより良い方法

プロの開発者がよく使用する、画像読み込みを処理するより堅牢な方法を紹介します。画像読み込みをPromiseベースの関数でラップします。このアプローチは、ES6でJavaScriptのPromiseが標準化された際に普及し、コードをより整理し、エラーを優雅に処理します:

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**ここで行ったこと:**
- 画像読み込みロジックをPromiseでラップし、より良い処理を可能にしました
- 問題が発生した場合に通知するエラーハンドリングを追加しました
- 読みやすいモダンなasync/await構文を使用しました
- try/catchブロックを含めて、読み込みの問題を優雅に処理しました

画像が読み込まれたら、キャンバスに描画するのは実際には非常に簡単です:

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**ステップごとに説明します:**
- awaitを使用してヒーローとモンスターの画像をバックグラウンドで読み込みます
- キャンバス要素を取得し、必要な2Dレンダリングコンテキストを取得します
- 簡単な座標計算を使用してヒーロー画像を中央に配置します
- モンスター画像を左上隅に配置して敵編隊を開始します
- 読み込みやレンダリング中に発生する可能性のあるエラーをキャッチします

## いよいよゲーム作りを始めよう

ここでは、すべてを組み合わせて宇宙ゲームの視覚的基盤を作成します。キャンバスの基本と画像読み込み技術についての確かな理解が得られたので、この実践的なセクションでは、適切に配置されたスプライトを使用して完全なゲーム画面を作成する方法を案内します。

### 作成するもの

キャンバス要素を含むウェブページを作成します。画面は `1024*768` の黒い背景を表示する必要があります。以下の2つの画像を提供しています:

- ヒーローの船

   ![ヒーローの船](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.ja.png)

- 5×5のモンスター

   ![モンスターの船](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.ja.png)

### 開発を始めるための推奨手順

`your-work` サブフォルダに作成されたスターターファイルを見つけてください。プロジェクト構造は以下のようになっています:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**あなたが扱うもの:**
- **ゲームスプライト**は `assets/` フォルダに保存され、すべてが整理されています
- **メインHTMLファイル**はキャンバス要素を設定し、すべてを準備します
- **JavaScriptファイル**はゲームのレンダリングマジックを記述する場所です
- **package.json**はローカル開発サーバーを設定し、ローカルでテストできるようにします

Visual Studio Codeでこのフォルダを開き、開発を開始してください。Visual Studio Code、NPM、Node.jsがインストールされたローカル開発環境が必要です。コンピュータに`npm`が設定されていない場合は、[インストール方法はこちら](https://www.npmjs.com/get-npm)をご覧ください。

`your-work` フォルダに移動して開発サーバーを開始します:

```bash
cd your-work
npm start
```

**このコマンドが行うこと:**
- **ローカルサーバーを起動**し、`http://localhost:5000`でゲームをテストできます
- **すべてのファイルを適切に提供**し、ブラウザが正しく読み込めるようにします
- **ファイルの変更を監視**し、スムーズに開発できます
- **プロフェッショナルな開発環境を提供**し、すべてをテストできます

> 💡 **注意**: ブラウザは最初は空白のページを表示します – これは予想通りです！コードを追加するにつれて、ブラウザをリフレッシュして変更を確認してください。この反復的な開発アプローチは、NASAがアポロ誘導コンピュータを構築した方法に似ています – 各コンポーネントを統合する前にテストします。

### コードを追加する

`your-work/app.js` に必要なコードを追加して、以下のタスクを完了してください:

1. **黒い背景のキャンバスを描画する**
   > 💡 **方法**: `/app.js` のTODOを見つけて、たった2行を追加します。`ctx.fillStyle`を黒に設定し、キャンバスの寸法で(0,0)から始まる`ctx.fillRect()`を使用します。簡単です！

2. **ゲームテクスチャを読み込む**
   > 💡 **方法**: `await loadAsset()` を使用してプレイヤーと敵の画像を読み込みます。後で使用できるように変数に保存します。覚えておいてください – 実際に描画するまで表示されません！

3. **ヒーローの船を中央下部に描画する**
   > 💡 **方法**: `ctx.drawImage()` を使用してヒーローを配置します。x座標には `canvas.width / 2 - 45` を試して中央に配置し、y座標には `canvas.height - canvas.height / 4` を使用して下部エリアに配置します。

4. **敵の船を5×5の編隊で描画する**
   > 💡 **方法**: `createEnemies` 関数を見つけてネストされたループを設定します。間隔と位置を計算するために少し数学が必要ですが、心配しないでください – 正確な方法をお見せします！

まず、適切な敵編隊レイアウトの定数を設定します:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**これらの定数が行うこと:**
- 1行と1列に5体の敵を設定します（きれいな5×5グリッド）
- 敵が窮屈に見えないように間隔を定義します
- 全体の編隊の幅を計算します
- 編隊が中央に見えるように開始点と終了点を計算します

次に、ネストされたループを作成して敵編隊を描画します:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**このネストされたループが行うこと:**
- 外側のループは編隊を左から右に移動します
- 内側のループは上から下に移動して整然とした行を作成します
- 各敵スプライトを計算した正確なx,y座標に描画します
- すべてが均等に間隔を空けられ、プロフェッショナルで整理された見た目になります

## 結果

完成した結果は以下のようになります:

![黒い画面にヒーローと5×5のモンスター](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.ja.png)

## 解答

まずは自分で解いてみてください。ただし、行き詰まった場合は[解答](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)を確認してください。

---

## GitHub Copilot Agent チャレンジ 🚀

Agentモードを使用して以下のチャレンジを完了してください:

**説明:** Canvas APIの技術を活用して、宇宙ゲームのキャンバスに視覚効果とインタラクティブな要素を追加してください。

**プロンプト:** `enhanced-canvas.html` という新しいファイルを作成し、背景にアニメーションする星、ヒーロー船の脈動するヘルスバー、ゆっくりと下に移動する敵船を表示するキャンバスを作成してください。ランダムな位置と不透明度を使用して星を描画し、ヘルスレベルに応じて色が変わるヘルスバー（緑 > 黄色 > 赤）を実装し、異なる速度で敵船が画面下に移動するアニメーションを含むJavaScriptコードを追加してください。

[Agentモードについてさらに学ぶ](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)はこちら。

## 🚀 チャレンジ

2Dに焦点を当てたCanvas APIについて学びましたが、[WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)を見て、3Dオブジェクトを描画してみてください。

## レクチャー後のクイズ

[レクチャー後のクイズ](https://ff-quizzes.netlify.app/web/quiz/32)

## 復習と自己学習

Canvas APIについてさらに学ぶには、[こちらを読んでください](https://developer.mozilla.org/docs/Web/API/Canvas_API)。

## 課題

[Canvas APIで遊んでみよう](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求していますが、自動翻訳には誤りや不正確さが含まれる可能性があります。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当社は責任を負いません。