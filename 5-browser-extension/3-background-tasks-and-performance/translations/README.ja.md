# ブラウザ拡張機能プロジェクト その 3: バックグラウンドタスクとパフォーマンスについて学ぶ

## レッスン前の小テスト

[レッスン前の小テスト](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/27?loc=ja)

### イントロダクション

このモジュールの最後の2つのレッスンでは、API からフェッチしたデータのフォームと表示領域を構築する方法を学びました。これは、Web 上でウェブプレゼンスを作成するための非常に標準的な方法です。非同期的にデータをフェッチする方法も学びました。ブラウザ拡張機能はほぼ完成しています。

拡張機能のアイコンの色を更新するなどのバックグラウンドタスクが残っているので、この機会にブラウザがこのようなタスクをどのように管理しているのかについて話しましょう。これらのブラウザタスクについて、Web 資産を構築する際のパフォーマンスとの関連で考えてみましょう。

## Web パフォーマンスの基礎

> "Web サイトのパフォーマンスには2つのことがあります: ページの読み込み速度と、その上のコードの実行速度です。" -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

どのようにしてあらゆるデバイス、あらゆるユーザー、あらゆる状況で、あなたのウェブサイトを燃えるように高速化するかという話題は、当然のことながら膨大なものになります。ここでは、標準的な Web プロジェクトまたはブラウザ拡張機能を構築する際に留意すべきポイントをいくつか紹介します。

サイトが効率的に動作していることを確認するために最初に行う必要があることは、そのパフォーマンスに関するデータを収集することです。これを行う最初の場所は、Web ブラウザの開発者ツールにあります。Edge では、「設定とその他」ボタン（ブラウザの右上にある3つの点のアイコン）を選択してから、「その他のツール」→「開発者ツール」に移動し、「パフォーマンス」タブを開きます。Windows ではキーボードショートカット `Ctrl` + `Shift` + `I`、Mac では `Option` + `Command` + `I` を使用して開発者ツールを開くこともできます。

パフォーマンスタブには、プロファイリングツールが含まれています。Web サイトを開いて (例えば https://www.microsoft.com を試してみてください)、「記録」ボタンをクリックし、サイトを更新します。いつでも録画を停止することができ、サイトを「スクリプト」、「レンダリング」、「ペイント」するために生成されたルーチンを見ることができます。

![Edge profiler](../images/profiler.png)

✅ Edge のパフォーマンスパネルの [Microsoft ドキュメント](https://docs.microsoft.com/ja-jp/microsoft-edge/edgehtml/?WT.mc_id=academic-13441-cxa) を参照してください。

> ヒント: Web サイトの起動時間を正確に把握するには、ブラウザのキャッシュをクリアしてください。

プロファイルのタイムラインの要素を選択すると、ページの読み込み中に発生するイベントをズームインできます。

プロファイルのタイムラインの一部を選択してサマリーペインを見ることで、ページのパフォーマンスのスナップショットを得ることができます。

![Edge プロファイラのスナップショット](../images/snapshot.png)

イベントログペインをチェックして、15ms 以上かかったイベントがあるかどうかを確認します。

![Edge イベントログ](../images/log.png)

✅ プロファイラを知りましょう! このサイトの開発者ツールを開いて、ボトルネックがないか確認してみましょう。最も読み込みが遅いアセットは? 一番速いのは?

## プロファイリングチェック

一般的には、本番環境にデプロイする際に厄介な驚きを避けるために、すべての Web 開発者がサイトを構築する際に注意すべき「問題点」がいくつかあります。

**アセットサイズ**: Web はここ数年で「重く」なり、その結果、遅くなっています。この重さのいくつかは、画像の使用に関係しています。

✅ ページの重さなどの歴史的な見方については、[Internet Archive](https://httparchive.org/reports/page-weight) を参照してください。

良い方法は、画像が最適化され、ユーザーにとって適切なサイズと解像度で配信されるようにすることです。

**DOM トラバーサル**: ブラウザはあなたが書いたコードに基づいて Document Object Model を構築しなければならないので、タグを最小限に抑え、ページが必要とするものだけを使用してスタイリングすることがページパフォーマンスの向上につながります。この点については、ページに関連する余分な CSS を最適化することができます。例えば、1 つのページでのみ使用する必要のあるスタイルは、メインのスタイルシートに含める必要はありません。

**JavaScript**: すべての JavaScript 開発者は、DOM の残りの部分を走査してブラウザに描画する前にロードしなければならない 'レンダーブロッキング' スクリプトに注意する必要があります。(テラリウムモジュールで行われているように) インラインスクリプトで `defer` を使うことを検討してください。

✅ [Site Speed Test の Web サイト](https://www.webpagetest.org/)でいくつかのサイトを試してみると、サイトのパフォーマンスを判断するために行われる一般的なチェックについて詳しく知ることができます。

これで、ブラウザが送信したアセットをどのようにレンダリングするかがわかったので、拡張機能を完成させるために必要な最後のいくつかのことを見てみましょう。

### 色を計算する関数の作成

`src/index.js` の中で作業し、`calculateColor()` という関数を、DOM にアクセスするために設定した一連の変数 `const` の後に追加します。

```javascript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

ここでは何をしているのでしょうか? 前回のレッスンで完了した API コールの値 (炭素強度) を渡して、その値が colors 配列のインデックスにどれだけ近いかを計算します。そして、最も近い色の値を chrome.runtime に送ります。

chrome.runtime には、あらゆる種類のバックグラウンドタスクを処理する [API](https://developer.chrome.com/extensions/runtime) があり、あなたの拡張機能はそれを利用しています。

> "chrome.runtime API を使用して、バックグラウンドページを取得したり、マニフェストの詳細を返したり、アプリや拡張機能のライフサイクルでイベントをリッスンして応答したりすることができます。また、この API を使用して URL の相対パスを完全修飾 URL に変換することもできます。"

✅ このブラウザ拡張を Edge 用に開発していると、chrome の API を使っていることに驚くかもしれません。新しい Edge ブラウザのバージョンは Chromium ブラウザエンジン上で動作しているので、これらのツールを活用することができます。

> ブラウザ拡張機能をプロファイル化したい場合は、拡張機能自体が独立したブラウザインスタンスであるため、拡張機能自体の中から開発ツールを起動してください。

### デフォルトのアイコンの色の設定

ここで、`init()` 関数の中で、アイコンをジェネリックグリーンに設定して、chrome の `updateIcon` アクションを再度呼び出して起動します。

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### 関数の呼び出し、呼び出しの実行

次に、C02Signal API が返すプロミスに追加して、先ほど作成した関数を呼び出します。

```javascript
//let CO2...
calculateColor(CO2);
```

最後に、`/dist/background.js` で、これらのバックグラウンドアクションの呼び出し用のリスナーを追加します。

```javascript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//エナジーロリポップの拡張機能から借りた、良い機能
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```
このコードでは、バックエンドのタスクマネージャに来るメッセージのリスナーを追加しています。'updateIcon' と呼ばれる場合、次のコードを実行して、Canvas API を使って適切な色のアイコンを描画しています。

✅ Canvas API については、[スペースゲームのレッスン](../../../6-space-game/2-drawing-to-canvas/translations/README.ja.md)で詳しく説明しています。

さて、拡張機能を再構築 (`npm run build`) して、リフレッシュして拡張機能を起動し、色の変化を見てみましょう。用事を済ませるのにも、お皿を洗うのにも良い時間帯でしょうか? これでわかりました!

おめでとうございます。あなたは便利なブラウザ拡張機能を構築し、ブラウザがどのように動作するのか、そのパフォーマンスをどのようにプロファイルするのかについて、より多くのことを学びました。

---

## 🚀 チャレンジ

オープンソースの Web サイトの中には、かなり昔からあるものもあり、それらの GitHub の歴史に基づいて、何年にもわたってどのようにパフォーマンスが最適化されてきたのかを調べてみましょう。最も一般的な問題点は何でしょうか?

## レッスン後の小テスト

[レッスン後の小テスト](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/28?loc=ja)

## 復習と自己学習

[パフォーマンスニュースレター](https://perf.email/)への登録を検討してみませんか?

Web ツールのパフォーマンスタブを見て、ブラウザが Web のパフォーマンスを評価する方法のいくつかを調査してください。大きな違いはありますか?

## 課題

[パフォーマンスのためにサイトを分析する](assignment.ja.md)

