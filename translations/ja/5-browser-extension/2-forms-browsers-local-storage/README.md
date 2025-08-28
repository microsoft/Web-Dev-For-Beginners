<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-28T17:51:13+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "ja"
}
-->
# ブラウザ拡張プロジェクト パート2: APIの呼び出しとローカルストレージの使用

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/25)

### はじめに

このレッスンでは、ブラウザ拡張のフォームを送信してAPIを呼び出し、その結果をブラウザ拡張内に表示する方法を学びます。また、ブラウザのローカルストレージにデータを保存し、後で参照・使用する方法についても学びます。

✅ 適切なファイル内の番号付きセグメントに従ってコードを配置してください。

### 拡張機能で操作する要素を設定する

ここまでで、ブラウザ拡張のフォームと結果を表示する`<div>`のHTMLを作成しました。これ以降は、`/src/index.js`ファイルで作業を進め、拡張機能を少しずつ構築していきます。プロジェクトのセットアップやビルドプロセスについては[前回のレッスン](../1-about-browsers/README.md)を参照してください。

`index.js`ファイルで作業を開始し、まず各フィールドに関連付けられた値を保持するための`const`変数を作成します。

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

これらのフィールドは、前回のレッスンでHTMLで設定したCSSクラスによって参照されます。

### リスナーを追加する

次に、フォームとリセットボタンにイベントリスナーを追加します。これにより、ユーザーがフォームを送信したりリセットボタンをクリックしたりすると何かが起こります。また、ファイルの末尾にアプリを初期化する呼び出しを追加します。

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ フォーム送信やクリックイベントをリスニングするための簡略化された記述方法に注目してください。このイベントがhandleSubmitやreset関数に渡される仕組みを確認できます。この簡略化された記述を長い形式で書き換えることはできますか？どちらの形式が好みですか？

### init()関数とreset()関数を構築する

次に、拡張機能を初期化する関数であるinit()を構築します。

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

この関数には興味深いロジックがあります。内容を読み解いてみてください。

- 2つの`const`が設定され、ユーザーがローカルストレージにAPIKeyと地域コードを保存しているかどうかを確認します。
- どちらかがnullの場合、フォームのスタイルを変更して表示を'block'にします。
- 結果、ローディング、clearBtnを非表示にし、エラーテキストを空文字列に設定します。
- キーと地域が存在する場合、以下のルーチンを開始します：
  - APIを呼び出して炭素使用量データを取得
  - 結果エリアを非表示
  - フォームを非表示
  - リセットボタンを表示

次に進む前に、ブラウザで利用可能な非常に重要な概念について学ぶことが役立ちます：[LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)。LocalStorageは、ブラウザ内で文字列を`key-value`ペアとして保存する便利な方法です。このタイプのウェブストレージは、JavaScriptを使用してブラウザ内のデータを管理するために操作できます。LocalStorageは期限切れになりませんが、もう一つの種類であるSessionStorageはブラウザを閉じるとクリアされます。これらのストレージの種類には、それぞれ利点と欠点があります。

> 注意 - ブラウザ拡張には独自のローカルストレージがあります。メインブラウザウィンドウは別のインスタンスであり、別々に動作します。

APIKeyを文字列値として設定すると、Edgeで「ウェブページを検査」することで確認できます（ブラウザを右クリックして検査を選択）。その後、アプリケーションタブに移動してストレージを確認します。

![ローカルストレージペイン](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.ja.png)

✅ LocalStorageにデータを保存しない方が良い状況について考えてみてください。一般的に、APIキーをLocalStorageに保存するのは良くないアイデアです！その理由がわかりますか？今回の場合、アプリは学習目的のみで使用され、アプリストアに公開されることはないため、この方法を使用します。

Web APIを使用してLocalStorageを操作する際には、`getItem()`、`setItem()`、または`removeItem()`を使用します。これらはほとんどのブラウザで広くサポートされています。

`displayCarbonUsage()`関数を構築する前に、初期フォーム送信を処理する機能を構築しましょう。

### フォーム送信を処理する

イベント引数`(e)`を受け取る`handleSubmit`という関数を作成します。このイベントが伝播するのを止め（この場合、ブラウザのリフレッシュを止めたい）、新しい関数`setUpUser`を呼び出し、`apiKey.value`と`region.value`の引数を渡します。この方法で、適切なフィールドが入力された際に初期フォームから取得された2つの値を使用します。

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ 復習 - 前回のレッスンで設定したHTMLには、`value`がキャプチャされる2つの入力フィールドがあり、これらはファイルの冒頭で設定した`const`によって取得されます。また、両方とも`required`属性が設定されているため、ブラウザはユーザーがnull値を入力するのを防ぎます。

### ユーザーを設定する

次に進み、`setUpUser`関数を構築します。ここでは、apiKeyとregionNameのローカルストレージ値を設定します。新しい関数を追加します。

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

この関数は、APIが呼び出される間に表示されるローディングメッセージを設定します。この時点で、このブラウザ拡張の最も重要な機能を作成する段階に到達しました！

### 炭素使用量を表示する

いよいよAPIをクエリする時が来ました！

進む前に、APIについて話しましょう。API、つまり[アプリケーションプログラミングインターフェース](https://www.webopedia.com/TERM/A/API.html)は、ウェブ開発者のツールボックスにおける重要な要素です。APIは、プログラム同士が標準的な方法で相互作用し、インターフェースを提供する仕組みを提供します。例えば、データベースをクエリする必要があるウェブサイトを構築している場合、誰かが使用するためのAPIを作成しているかもしれません。APIには多くの種類がありますが、その中でも人気があるのが[REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)です。

✅ 'REST'という用語は'Representational State Transfer'を意味し、さまざまに構成されたURLを使用してデータを取得する特徴があります。開発者が利用可能なAPIのさまざまな種類について少し調べてみてください。どの形式が魅力的に感じますか？

この関数について重要な点をいくつか挙げます。まず、[`async`キーワード](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)に注目してください。関数を非同期的に動作させることで、データが返されるなどのアクションが完了するまで待機してから処理を続行します。

`async`についての簡単な動画はこちらです：

[![非同期処理とAwaitによるPromise管理](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "非同期処理とAwaitによるPromise管理")

> 🎥 上の画像をクリックすると、async/awaitに関する動画が再生されます。

C02Signal APIをクエリする新しい関数を作成します：

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

この関数は大きなものです。何が行われているのでしょうか？

- ベストプラクティスに従い、`async`キーワードを使用してこの関数を非同期的に動作させます。この関数には`try/catch`ブロックが含まれており、APIがデータを返すとPromiseを返します。APIの応答速度を制御することはできないため（応答しない場合もあります）、非同期的に呼び出すことでこの不確実性を処理します。
- co2signal APIをクエリして地域のデータを取得し、APIキーを使用します。このキーを使用するには、ヘッダーのパラメータで認証を行う必要があります。
- APIが応答すると、その応答データのさまざまな要素を画面の対応する部分に割り当てます。
- エラーが発生した場合や結果がない場合は、エラーメッセージを表示します。

✅ 非同期プログラミングパターンを使用することは、ツールボックスにおける非常に有用なツールの一つです。[さまざまな構成方法](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)について読んでみてください。

おめでとうございます！拡張機能をビルド（`npm run build`）して拡張機能ペインでリフレッシュすると、動作する拡張機能が完成します！唯一動作していないのはアイコンで、次のレッスンで修正します。

---

## 🚀 チャレンジ

これまでのレッスンでいくつかの種類のAPIについて話しました。ウェブAPIを選び、その提供内容を詳しく調べてみましょう。例えば、ブラウザ内で利用可能な[HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API)を見てみてください。優れたAPIとは何だと思いますか？

## 講義後クイズ

[講義後クイズ](https://ff-quizzes.netlify.app/web/quiz/26)

## 復習と自己学習

このレッスンでは、LocalStorageとAPIについて学びました。どちらもプロフェッショナルなウェブ開発者にとって非常に有用です。これら2つがどのように連携するかについて考えてみてください。APIを使用するためにアイテムを保存するウェブサイトをどのように設計するかを考えてみましょう。

## 課題

[APIを採用する](assignment.md)

---

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてお考えください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当社は責任を負いません。