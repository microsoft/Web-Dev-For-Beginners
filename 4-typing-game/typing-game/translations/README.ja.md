# イベントを使ったゲームの作成

## レッスン前の小テスト

[レッスン前の小テスト](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21?loc=ja)

## イベント駆動型プログラミング

ブラウザベースのアプリケーションを作成するとき、私たちは、構築したものと対話するときに使用するグラフィカル・ユーザー・インターフェース (GUI) を提供します。ブラウザと対話する最も一般的な方法は、様々な要素をクリックしたり入力したりすることです。開発者として直面する課題は、ユーザーがこれらの操作をいつ実行するかわからないことです。

[イベント駆動型プログラミング](https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E9%A7%86%E5%8B%95%E5%9E%8B%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0)は、GUIを作成するために必要なプログラミングの種類の名前です。このフレーズを少し分解すると、ここでの核となる単語は **イベント** です。[イベント](https://www.merriam-webster.com/dictionary/event)は、Merriam-Webster によると、「何かが起こる」と定義されています。これは私たちの状況を完璧に説明しています。何かが起こりそうで、それに対応してコードを実行したいのですが、それがいつ行われるかはわかりません。

実行したいコードの節をマークする方法は、関数を作成することです。[手続き型プログラミング](https://ja.wikipedia.org/wiki/%E6%89%8B%E7%B6%9A%E3%81%8D%E5%9E%8B%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0)を考えると、関数は決まった順番で呼び出されます。これはイベント駆動型プログラミングでも同じことが言えそうです。違いは、関数が**どのように**呼ばれるかということです。

イベント (ボタンクリックやタイピングなど) を処理するために、**イベントリスナー** を登録します。イベントリスナーとは、イベントが発生するのを待ち受けて、それに応じて実行する関数のことです。イベントリスナーは、UI を更新したり、サーバーへの呼び出しを行ったり、ユーザーのアクションに反応して実行することができます。[addEventListener](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener) を使用してイベントリスナーを追加し、実行する関数を提供します。

> **注:** イベントリスナーを作成する方法は数多くあります。匿名の関数を使うこともできますし、名前付きの関数を作ることもできます。`click` プロパティを設定したり、`addEventListener` を使用したりと、様々なショートカットを使用することができます。今回の演習では `addEventLister` と匿名関数に焦点を当てます。また、`addEventListener` はすべてのイベントに対して動作し、イベント名をパラメータとして指定できるので、最も柔軟性があります。

### 共通イベント

アプリケーションを作成するときに聞くことができる[多数のイベント](https://developer.mozilla.org/ja/docs/Web/Events)があります。基本的に、ユーザーがページ上で何かをするとイベントが発生しますが、これはプレイヤーがあなたの意図した経験を得られるようにするうえで大きな力となります。幸いなことに、通常はほんの一握りのイベントしか必要ありません。ここでは、(ゲームを作成する際に使用する 2 つのイベントを含む) いくつかの一般的なイベントを紹介します:

- [click](https://developer.mozilla.org/ja/docs/Web/API/Element/click_event): ユーザーが何かをクリックした場合、通常はボタンやハイパーリンクをクリックします
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): ユーザーがマウスの右ボタンをクリックした場合
- [select](https://developer.mozilla.org/ja/docs/Web/API/Element/select_event): ユーザーがテキストをハイライトした場合
- [input](https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/input_event): ユーザーが何かテキストを入力した場合

## ゲームの作成

私たちは、JavaScript でイベントがどのように機能するかを探求するゲームを作成する予定です。私たちのゲームはプレイヤーのタイピングスキルをテストしますが、これはすべての開発者が持つべき最も過小評価されているスキルの一つです。私たちは皆、タイピングの練習をするべきです! ゲームの一般的な流れは以下のようになります。

- プレイヤーがスタートボタンをクリックすると、入力する名言が表示されます
- プレイヤーは、テキストボックスにできるだけ早く名言を入力します
  - 各単語が完成すると、次の単語が強調表示されます
  - プレイヤーにタイプミスがあった場合、テキストボックスが赤に更新されます
  - 名言が完了すると、経過時間とともに成功メッセージが表示されます

ゲームを作ってイベントを覚えましょう!

### ファイル構造

**index.html**、**script.js**、**style.css** の 3 つのファイルが必要です。まずはこれらを設定して、生活を少し楽にしていきましょう。

- コンソールまたはターミナルウィンドウを開き、以下のコマンドを実行して、作業用の新しいフォルダを作成します

```bash
# Linux または macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing game
```

- Visual Studio Code を開きます

```bash
code .
```

- Visual Studio Code のフォルダに以下の名前で3つのファイルを追加します
  - index.html
  - script.js
  - style.css

## ユーザーインターフェースの作成

要件を探ってみると、HTML ページには一握りの要素が必要になることがわかります。これはレシピのようなもので、いくつかの材料が必要です。

- ユーザーが入力するための名言を表示する場所
- 成功メッセージのようなメッセージを表示する場所
- 入力用のテキストボックス
- スタートボタン

これらのファイルにはそれぞれ ID が必要なので、JavaScript でそれらを扱うことができます。また、これから作成する CSS と JavaScript ファイルへの参照を追加します。

**index.html** という名前の新しいファイルを作成します。以下の HTML を追加します。

```html
<!-- index.html の中身 -->
<html>
<head>
  <title>タイピングゲーム</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>タイピングゲーム!</h1>
  <p>シャーロック・ホームズの名言を使ってタイピングの練習をしましょう。**スタート** をクリックしてください。</p>
  <p id="quote"></p> <!-- これで名言が表示されます。 -->
  <p id="message"></p> <!-- これは、すべてのステータスメッセージを表示します。 -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- 入力用のテキストボックス -->
    <button type="button" id="start">スタート</button> <!-- ゲームを開始します -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### アプリケーションの起動

物事がどのように見えるかを確認するためには、常に反復的に開発するのがベストです。アプリケーションを起動してみましょう。Visual Studio Code には [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) と呼ばれる素晴らしい拡張機能があり、アプリケーションをローカルにホストし、保存するたびにブラウザを更新します。

- リンクを辿り、**Install** をクリックして、[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) をインストールします
  - ブラウザで Visual Studio Code を開き、Visual Studioコードでインストールを実行するように促されます
  - プロンプトが表示されたら Visual Studio Code を再起動します
- インストールしたら、Visual Studio Code で Ctl-Shift-P (または Cmd-Shift-P) をクリックして、コマンドパレットを開きます
- **Live Server: Open with Live Server** と入力します
  - Live Server がアプリケーションのホスティングを開始します
- ブラウザを開き、**https://localhost:5500** に移動します
- これで作成したページが表示されるはずです!

機能を追加してみましょう。

## CSS の追加

HTML を作成したので、コアスタイリング用の CSS を追加してみましょう。プレイヤーが入力すべき単語をハイライトし、入力した内容が間違っている場合はテキストボックスに色をつけます。これには 2 つのクラスを使用します。

**style.css** という名前のファイルを新規作成し、以下の構文を追加します。

```css
/* style.css の中身 */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ CSS に関しては、あなたが好きなようにページをレイアウトすることができます。少し時間をかけて、より魅力的なページにしてみましょう。

- 別のフォントを選択します
- ヘッダーに色をつけます
- アイテムのサイズを変更します

## JavaScript

UI を作成したので、ロジックを提供する JavaScript に注目してみましょう。これをいくつかのステップに分けて説明します。

- [定数の作成](#定数の追加)
- [ゲームを開始するイベントリスナー](#開始ロジックの追加)
- [タイピングへのイベントリスナー](#タイピングロジックの追加)

しかし、まず、**script.js** という名前のファイルを新規作成します。

### 定数の追加

プログラミングの生活を少しでも楽にするために、いくつかのアイテムが必要になります。繰り返しになりますが、レシピに似ていますが、必要なものは以下の通りです。

- すべての名言のリストを含む配列
- 現在の名言のすべての単語を格納する空の配列
- プレイヤーが現在入力している単語のインデックスを格納するスペース
- プレイヤーがスタートをクリックした時間

UI 要素への参照も欲しいところです。

- テキストボックス (**typed-value**)
- 名言の表示 (**quote**)
- メッセージ (**message**)

```javascript
// script.js の中身
// すべての名言
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// 単語のリストと、プレイヤーが現在入力している単語のインデックスを格納します。
let words = [];
let wordIndex = 0;
// 開始時刻
let startTime = Date.now();
// ページ構成要素
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ 先に行き、あなたのゲームに多くの名言を追加します。

> **注:** `document.getElementById`を使用することで、コード内で必要なときにいつでも要素を取得することができます。これらの要素を定期的に参照することになるので、定数を使用して文字列リテラルのタイプミスを回避します。[Vue.js](https://jp.vuejs.org/) や [React](https://ja.reactjs.org/) などのフレームワークは、コードを集中管理するのに役立ちます。

1分ほどかけて、`const`, `let`, `var` の使い方のビデオを見てみましょう。

[![Types of variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Types of variables")

### 開始ロジックの追加

ゲームを始めるには、プレイヤーはスタートをクリックします。もちろん、プレイヤーがいつスタートボタンをクリックするかはわかりません。ここで[イベントリスナー](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener)の出番です。イベントリスナーを使うと、何か (イベント) が発生するのを待ち受けて、それに応じてコードを実行することができます。この例では、ユーザーがスタートをクリックしたときにコードを実行したいと思います。

ユーザーが **スタート** をクリックしたときに、名言を選択し、ユーザーインターフェースを設定し、現在の単語とタイミングのトラッキングを設定する必要があります。以下は追加する必要のある JavaScript です。スクリプトブロックの後で説明します。

```javascript
// script.js の最後の方に
document.getElementById('start').addEventListener('click', () => {
  // 名言の取得
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // 名言を言葉の配列に入れる
  words = quote.split(' ');
  // トラッキング用の単語インデックスをリセットする
  wordIndex = 0;

  // UI の更新
  // span 要素の配列を作成し、クラスを設定できるようにします。
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // 文字列に変換して、名言を表示する innerHTML として設定します。
  quoteElement.innerHTML = spanWords.join('');
  // 最初の単語を強調表示します。
  quoteElement.childNodes[0].className = 'highlight';
  // 前のメッセージをクリアします。
  messageElement.innerText = '';

  // テキストボックスの設定
  // テキストボックスをクリアします。
  typedValueElement.value = '';
  // フォーカスを合わせます。
  typedValueElement.focus();
  // イベントハンドラを設定します。

  // タイマーを開始します。
  startTime = new Date().getTime();
});
```

コードを分解してみましょう!

- 単語のトラッキングを設定します
  - [Math.floor](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) と [Math.random](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random) を使うと、`quotes` 配列から名言をランダムに選択することができます
  - `quote` を `words` の配列に変換することで、プレイヤーが現在入力している単語を追跡することができます
  - `wordIndex` は 0 に設定されます。プレイヤーは最初の単語から始めます
- UI を設定します
  - `spanWords` の配列を作成し、その中に `span` 要素内の各単語を格納します
    - これにより、ディスプレイ上の単語を強調表示することができます
  - 配列を `join` して文字列を作成し、これを用いて `quoteElement` の `innerHTML` を更新することができます
    - これにより、プレイヤーに名言が表示されます
  - 最初の `span` 要素の `className` を `highlight` に設定し、黄色で強調表示します
  - `innerText` を `''` に設定することで `messageElement` をクリーンにします
- テキストボックスを設定します
  - 現在の `typedValueElement` の `value` をクリアします
  - `focus` を `typedValueElement` に設定します
- `getTime` を呼び出してタイマーを起動します

### タイピングロジックの追加

プレイヤーが入力すると `input` イベントが発生します。このイベントリスナーは、プレイヤーが単語を正しく入力しているかどうかをチェックし、ゲームの現在の状態を処理します。**script.js** に戻り、最後に以下のコードを追加します。この後に分解していきます。

```javascript
// script.js の最後の方に
typedValueElement.addEventListener('input', () => {
  // 現在の単語を取得します
  const currentWord = words[wordIndex];
  // 現在の値を取得します
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // 文の終了
    // 成功を表示します
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // 単語の終了
    // 新しい単語用に 'typedValueElement' をクリアします
    typedValueElement.value = '';
    // 次の単語に移ります
    wordIndex++;
    // 名言内のすべての要素のクラス名をリセットします
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // 新しい単語を強調表示します
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // 現在正しく入力されている状態
    // 次の単語を強調表示します
    typedValueElement.className = '';
  } else {
    // エラー状態
    typedValueElement.className = 'error';
  }
});
```

コードを分解してみましょう! まず、現在の単語とプレイヤーがこれまでに入力した値を取得します。次にウォーターフォールロジックがあり、ここでは引用が完全であるかどうか、単語が完全であるかどうか、単語が正しいかどうか、(最後に) エラーがあるかどうかをチェックします。

- 名言が完成しており、`typepedValue` が `currentWord` と等しく、`wordIndex` が `words` の `length` よりも 1 つ小さい値であることを示している場合
  - 現在の時刻から `startTime` を引くことで `elapsedTime` を計算します
  - `elapsedTime` を 1,000 で割り、ミリ秒から秒に変換します
  - 成功メッセージを表示します
- 単語は完成しており、`typedValue` がスペース (単語の終わり) で終わり、`typedValue` が `currentWord` と同じであることを示している場合
  - 次の単語が入力されるように `typedElement` の `value` を `''` に設定します
  - 次の単語に移動するために `wordIndex` をインクリメントします
  - `quoteElement` のすべての `childNodes` をループして `className` を `''` に設定し、デフォルトの表示に戻します
  - 現在の単語の `className` を `highlight` に設定して、それを次のタイプの単語としてフラグを立てます
- 単語は現在 (完全ではないが) 正しく入力されており、`typedValue` で始まる `currentWord` で示される場合
  - `className` をクリアすることで `typedValueElement` がデフォルトで表示されるようにします
- ここまで来たら、エラーが発生しています
  - `typedValueElement` の `className` を `error` に設定します

## アプリケーションのテスト

最後までやりましたね! 最後のステップは、私たちのアプリケーションが動作することを確認することです。試してみてください。エラーがあっても心配しないでください。**すべての開発者** がエラーに遭遇します。メッセージを調べて、必要に応じてデバッグしていきましょう。

**スタート** をクリックして、入力を開始してください。前に見たアニメーションに少し似ているはずです。

![Animation of the game in action](../../../4-typing-game/images/demo.gif)

---

## 🚀 チャレンジ

より多くの機能を追加しましょう。

- 完了時に `input` イベントリスナーを無効にし、ボタンがクリックされたときに再度有効にします
- プレイヤーが名言を完了したときにテキストボックスを無効にします
- 成功メッセージを含むモーダルダイアログボックスを表示します
- [localStorage](https://developer.mozilla.org/ja/docs/Web/API/Window/localStorage) を使ってハイスコアを保存します

## レッスン後の小テスト

[レッスン後の小テスト](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22?loc=ja)

## 復習と自己学習

Web ブラウザを介して開発者が[利用できるすべてのイベント](https://developer.mozilla.org/ja/docs/Web/Events)を読んで、それぞれを使用するシナリオを検討してください。

## 課題

[新しいキーボードゲームを作成する](assignment.ja.md)
