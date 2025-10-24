<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-24T15:18:18+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "ja"
}
-->
# ブラウザー拡張プロジェクト パート2: APIを呼び出し、ローカルストレージを使用する

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/25)

## はじめに

以前作り始めたブラウザー拡張を覚えていますか？現在は見た目の良いフォームができていますが、基本的には静的な状態です。今日は、実際のデータに接続し、記憶を持たせることでこれを活性化させます。

アポロ計画のミッションコントロールコンピューターを考えてみてください。固定情報を表示するだけではありませんでした。宇宙船と絶えず通信し、テレメトリーデータを更新し、重要なミッションパラメーターを記憶していました。今日はそのような動的な動作を構築します。あなたの拡張機能はインターネットにアクセスし、実際の環境データを取得し、次回のために設定を記憶します。

API統合は複雑に聞こえるかもしれませんが、実際にはコードに他のサービスと通信する方法を教えるだけです。天気データ、ソーシャルメディアフィード、または今日扱う炭素排出量情報を取得する場合でも、すべてこれらのデジタル接続を確立することに関するものです。また、ブラウザーが情報を保持する方法についても探ります。これは、図書館がカードカタログを使用して本の場所を記憶していた方法に似ています。

このレッスンの終わりまでに、実際のデータを取得し、ユーザーの設定を保存し、スムーズな体験を提供するブラウザー拡張機能を作成できるようになります。それでは始めましょう！

✅ 適切なファイル内の番号付きセグメントに従ってコードを配置してください。

## 拡張機能で操作する要素を設定する

JavaScriptがインターフェースを操作する前に、特定のHTML要素への参照が必要です。これは、望遠鏡が特定の星に向けられる必要があるのと似ています。ガリレオが木星の衛星を研究する前に、まず木星を見つけて焦点を合わせる必要がありました。

`index.js`ファイル内で、重要なフォーム要素への参照をキャプチャする`const`変数を作成します。これは、科学者が機器にラベルを付ける方法に似ています。実験室全体を毎回検索する代わりに、必要なものに直接アクセスできます。

```javascript
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

**このコードが行うこと:**
- **キャプチャ**: CSSクラスセレクターを使用して`document.querySelector()`でフォーム要素を取得
- **作成**: 地域名とAPIキーの入力フィールドへの参照を作成
- **接続**: 炭素使用量データの結果表示要素への接続を確立
- **設定**: ローディングインジケーターやエラーメッセージなどのUI要素へのアクセスを設定
- **保存**: 各要素参照を`const`変数に保存し、コード全体で簡単に再利用可能にする

## イベントリスナーを追加する

次に、拡張機能がユーザーの操作に応答するようにします。イベントリスナーは、ユーザーの操作を監視するコードの方法です。これは、初期の電話交換機のオペレーターのようなものです。彼らは着信を聞き、誰かが接続を希望したときに適切な回線をつなげました。

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**これらの概念を理解する:**
- **添付**: ユーザーがEnterキーを押すか送信ボタンをクリックしたときにトリガーされるフォームの送信リスナーを添付
- **接続**: フォームをリセットするためのクリアボタンにクリックリスナーを接続
- **渡す**: イベントオブジェクト`(e)`をハンドラ関数に渡して追加の制御を可能にする
- **呼び出し**: 拡張機能の初期状態を設定するために`init()`関数を即座に呼び出す

✅ ここで使用されている簡潔なアロー関数構文に注目してください。このモダンなJavaScriptアプローチは従来の関数式よりも簡潔ですが、どちらも同様に機能します！

## 初期化とリセット関数を構築する

拡張機能の初期化ロジックを作成しましょう。`init()`関数は、船のナビゲーションシステムが計器をチェックするようなものです。現在の状態を判断し、それに応じてインターフェースを調整します。誰かが以前に拡張機能を使用したかどうかを確認し、以前の設定をロードします。

`reset()`関数は、ユーザーに新しいスタートを提供します。これは、科学者が実験間で計器をリセットしてクリーンなデータを確保する方法に似ています。

```javascript
function init() {
	// Check if user has previously saved API credentials
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	// Set extension icon to generic green (placeholder for future lesson)
	// TODO: Implement icon update in next lesson

	if (storedApiKey === null || storedRegion === null) {
		// First-time user: show the setup form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		// Returning user: load their saved data automatically
		displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
}

function reset(e) {
	e.preventDefault();
	// Clear stored region to allow user to choose a new location
	localStorage.removeItem('regionName');
	// Restart the initialization process
	init();
}
```

**ここで何が起こっているかを分解する:**
- **取得**: ブラウザーのローカルストレージから保存されたAPIキーと地域を取得
- **確認**: 初めてのユーザー（保存された資格情報がない）か、リピーターかを確認
- **表示**: 新しいユーザーにはセットアップフォームを表示し、他のインターフェース要素を非表示にする
- **ロード**: リピーターには保存されたデータを自動的にロードし、リセットオプションを表示
- **管理**: 利用可能なデータに基づいてユーザーインターフェースの状態を管理

**ローカルストレージに関する重要な概念:**
- **保持**: ブラウザーセッション間でデータを保持（セッションストレージとは異なる）
- **保存**: `getItem()`と`setItem()`を使用してキーと値のペアとしてデータを保存
- **返す**: 指定されたキーにデータが存在しない場合は`null`を返す
- **提供**: ユーザーの設定や好みを記憶する簡単な方法を提供

> 💡 **ブラウザーストレージの理解**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)は、拡張機能に永続的な記憶を与えるようなものです。古代のアレクサンドリア図書館が巻物を保存していたように、情報は学者が去って戻ってきても利用可能なままでした。
>
> **主な特徴:**
> - **保持**: ブラウザーを閉じた後もデータを保持
> - **生き残る**: コンピューターの再起動やブラウザーのクラッシュ後もデータを保持
> - **提供**: ユーザーの設定に十分なストレージスペース
> - **即時アクセス**: ネットワーク遅延なしでアクセス可能

> **重要な注意点**: ブラウザー拡張機能には、通常のウェブページとは別の独立したローカルストレージがあります。これによりセキュリティが向上し、他のウェブサイトとの競合を防ぎます。

保存されたデータは、ブラウザーの開発者ツール（F12）を開き、**Application**タブに移動して**Local Storage**セクションを展開することで確認できます。

![ローカルストレージペイン](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.ja.png)

> ⚠️ **セキュリティに関する考慮事項**: 実際のアプリケーションでは、LocalStorageにAPIキーを保存することはセキュリティ上のリスクを伴います。JavaScriptがこのデータにアクセスできるためです。学習目的ではこの方法で問題ありませんが、実際のアプリケーションでは、機密性の高い資格情報を安全なサーバー側ストレージに保存する必要があります。

## フォーム送信を処理する

次に、フォームが送信されたときに何が起こるかを処理します。デフォルトでは、ブラウザーはフォームが送信されるとページをリロードしますが、この動作をインターセプトしてスムーズな体験を作り出します。

このアプローチは、ミッションコントロールが宇宙船との通信を処理する方法に似ています。各送信のたびにシステム全体をリセットするのではなく、新しい情報を処理しながら連続的な操作を維持します。

フォーム送信イベントをキャプチャし、ユーザーの入力を抽出する関数を作成します:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**上記で行ったこと:**
- **防止**: ページをリフレッシュするデフォルトのフォーム送信動作を防止
- **抽出**: APIキーと地域フィールドからユーザー入力値を抽出
- **渡す**: フォームデータを`setUpUser()`関数に渡して処理
- **維持**: ページリロードを避けてシングルページアプリケーションの動作を維持

✅ HTMLフォームフィールドには`required`属性が含まれているため、ブラウザーはこの関数が実行される前にユーザーがAPIキーと地域の両方を提供することを自動的に検証します。

## ユーザー設定をセットアップする

`setUpUser`関数は、ユーザーの資格情報を保存し、最初のAPI呼び出しを開始する役割を果たします。これにより、セットアップから結果表示へのスムーズな移行が実現します。

```javascript
function setUpUser(apiKey, regionName) {
	// Save user credentials for future sessions
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	
	// Update UI to show loading state
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	
	// Fetch carbon usage data with user's credentials
	displayCarbonUsage(apiKey, regionName);
}
```

**ステップごとに何が起こっているか:**
- **保存**: APIキーと地域名をローカルストレージに保存して将来使用する
- **表示**: データが取得されていることをユーザーに知らせるローディングインジケーターを表示
- **クリア**: 表示から以前のエラーメッセージをクリア
- **表示**: ユーザーが後で設定をリセットできるようにクリアボタンを表示
- **開始**: 実際の炭素使用量データを取得するためのAPI呼び出しを開始

この関数は、データの永続性とユーザーインターフェースの更新を一貫して管理することで、シームレスなユーザー体験を提供します。

## 炭素使用量データを表示する

次に、拡張機能をAPIを通じて外部データソースに接続します。これにより、拡張機能がスタンドアロンツールから、インターネット全体のリアルタイム情報にアクセスできるものへと変わります。

**APIの理解**

[API](https://www.webopedia.com/TERM/A/API.html)は、異なるアプリケーションが互いに通信する方法です。これは、19世紀の電報システムのようなもので、オペレーターが遠隔地の駅にリクエストを送り、要求された情報を受け取る仕組みです。ソーシャルメディアをチェックしたり、音声アシスタントに質問したり、配達アプリを使用したりするたびに、APIがこれらのデータ交換を促進しています。

**REST APIに関する重要な概念:**
- **REST**は「表現状態転送」を意味する
- **使用**: 標準的なHTTPメソッド（GET、POST、PUT、DELETE）を使用してデータとやり取り
- **返す**: 一般的にJSON形式で予測可能なデータを返す
- **提供**: 異なる種類のリクエストに対する一貫したURLベースのエンドポイント

✅ 今回使用する[CO2 Signal API](https://www.co2signal.com/)は、世界中の電力網からリアルタイムの炭素強度データを提供します。これにより、ユーザーは自分の電力使用量が環境に与える影響を理解することができます！

> 💡 **非同期JavaScriptの理解**: [`async`キーワード](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)は、コードが複数の操作を同時に処理できるようにします。サーバーからデータを要求する際に、拡張機能全体が停止するのは望ましくありません。それは、航空管制が1機の飛行機の応答を待つ間、すべての操作を停止するようなものです。
>
> **主な利点:**
> - **維持**: データがロードされている間も拡張機能の応答性を維持
> - **許可**: ネットワークリクエスト中に他のコードを実行し続ける
> - **改善**: 従来のコールバックパターンと比較してコードの可読性を向上
> - **エラー処理**: ネットワーク問題に対する優雅なエラー処理を可能にする

以下は`async`に関する簡単な動画です:

[![非同期処理とAwaitによるPromise管理](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "非同期処理とAwaitによるPromise管理")

> 🎥 上の画像をクリックして`async/await`に関する動画をご覧ください。

炭素使用量データを取得して表示する関数を作成します:

```javascript
// Modern fetch API approach (no external dependencies needed)
async function displayCarbonUsage(apiKey, region) {
	try {
		// Fetch carbon intensity data from CO2 Signal API
		const response = await fetch('https://api.co2signal.com/v1/latest', {
			method: 'GET',
			headers: {
				'auth-token': apiKey,
				'Content-Type': 'application/json'
			},
			// Add query parameters for the specific region
			...new URLSearchParams({ countryCode: region }) && {
				url: `https://api.co2signal.com/v1/latest?countryCode=${region}`
			}
		});

		// Check if the API request was successful
		if (!response.ok) {
			throw new Error(`API request failed: ${response.status}`);
		}

		const data = await response.json();
		const carbonData = data.data;

		// Calculate rounded carbon intensity value
		const carbonIntensity = Math.round(carbonData.carbonIntensity);

		// Update the user interface with fetched data
		loading.style.display = 'none';
		form.style.display = 'none';
		myregion.textContent = region.toUpperCase();
		usage.textContent = `${carbonIntensity} grams (grams CO₂ emitted per kilowatt hour)`;
		fossilfuel.textContent = `${carbonData.fossilFuelPercentage.toFixed(2)}% (percentage of fossil fuels used to generate electricity)`;
		results.style.display = 'block';

		// TODO: calculateColor(carbonIntensity) - implement in next lesson

	} catch (error) {
		console.error('Error fetching carbon data:', error);
		
		// Show user-friendly error message
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we couldn\'t fetch data for that region. Please check your API key and region code.';
	}
}
```

**ここで何が起こっているかを分解する:**
- **使用**: 外部ライブラリではなくモダンな`fetch()`APIを使用して、依存関係のないクリーンなコードを実現
- **実装**: `response.ok`を使用してAPIの失敗を早期にキャッチする適切なエラーチェック
- **処理**: 非同期操作を`async/await`で処理し、コードフローをより読みやすくする
- **認証**: CO2 Signal APIに`auth-token`ヘッダーを使用して認証
- **解析**: JSONレスポンスデータを解析し、炭素強度情報を抽出
- **更新**: 複数のUI要素をフォーマットされた環境データで更新
- **提供**: API呼び出しが失敗した場合にユーザーフレンドリーなエラーメッセージを表示

**モダンJavaScriptの重要な概念を示す:**
- **テンプレートリテラル**: `${}`構文を使用してクリーンな文字列フォーマットを実現
- **エラー処理**: try/catchブロックを使用して堅牢なアプリケーションを構築
- **非同期処理**: ネットワークリクエストを優雅に処理する`async/await`パターン
- **オブジェクト分割代入**: APIレスポンスから特定のデータを抽出
- **メソッドチェーン**: 複数のDOM操作を効率的に実行

✅ この関数は、外部サーバーとの通信、認証の処理、データの処理、インターフェースの更新、エラーの優雅な処理など、いくつかの重要なウェブ開発の概念を示しています。これらはプロの開発者が定期的に使用する基本的なスキルです。

🎉 **達成したこと:** あなたは以下を実現するブラウザー拡張機能を作成しました:
- **接続**: インターネットに接続し、実際の環境データを取得
- **保持**: セッション間でユーザー設定を保持
- **エラー処理**: クラッシュする代わりにエラーを優雅に処理
- **提供**: スムーズでプロフェッショナルなユーザー体験

`npm run build`を実行し、ブラウザーで拡張機能を更新して作業をテストしてください。これで、機能的な炭素排出量トラッカーが完成しました。次のレッスンでは、拡張機能を完成させるために動的なアイコン機能を追加します。

---

## GitHub Copilot Agent チャレンジ 🚀

Agentモードを使用して以下のチャレンジを完了してください:

**説明:** エラー処理の改善とユーザー体験機能を追加してブラウザー拡張機能を強化
このレッスンでは、LocalStorageとAPIについて学びました。どちらもプロのウェブ開発者にとって非常に役立つものです。この2つがどのように連携するか考えてみてください。APIで使用するアイテムを保存するウェブサイトをどのように設計するか考えてみましょう。

## 課題

[APIを採用する](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてお考えください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解について、当社は責任を負いません。