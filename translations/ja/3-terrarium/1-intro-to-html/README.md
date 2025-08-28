<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89f7f9f800ce7c9f149e98baaae8491a",
  "translation_date": "2025-08-28T17:56:25+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "ja"
}
-->
# テラリウムプロジェクト パート1: HTMLの紹介

![HTMLの紹介](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.ja.png)
> スケッチノート: [Tomomi Imura](https://twitter.com/girlie_mac)

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/15)

> 動画をチェック

> 
> [![GitとGitHubの基本動画](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

### はじめに

HTML（HyperText Markup Language）はウェブの「骨格」です。CSSがHTMLを「装飾」し、JavaScriptが命を吹き込むなら、HTMLはウェブアプリケーションの「体」です。HTMLの構文はその考えを反映しており、「head」、「body」、「footer」タグが含まれています。

このレッスンでは、HTMLを使って仮想テラリウムのインターフェースの「骨格」をレイアウトします。タイトルと3つの列を持つ構造を作ります。右と左の列にはドラッグ可能な植物が配置され、中央のエリアが実際のガラスのようなテラリウムになります。このレッスンの終わりには、列に植物が表示されますが、インターフェースは少し奇妙に見えるかもしれません。心配しないでください。次のセクションでCSSスタイルを追加してインターフェースを改善します。

### タスク

コンピュータ上で「terrarium」というフォルダを作成し、その中に「index.html」というファイルを作成してください。Visual Studio Codeで新しいウィンドウを開き、「フォルダを開く」をクリックして新しいフォルダに移動し、エクスプローラペインの小さな「ファイル」ボタンをクリックして新しいファイルを作成できます。

![VS Codeのエクスプローラ](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.ja.png)

または

Git Bashで以下のコマンドを使用してください:
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` または `nano index.html`

> index.htmlファイルはブラウザにフォルダ内のデフォルトファイルであることを示します。例えば、`https://anysite.com/test`のようなURLは、`test`というフォルダとその中の`index.html`を含むフォルダ構造で構築されている可能性があります。URLには`index.html`が表示される必要はありません。

---

## DocTypeとhtmlタグ

HTMLファイルの最初の行はDocTypeです。この行をファイルの最上部に配置する必要があるのは少し驚きですが、古いブラウザに現在のHTML仕様に従ってページを標準モードでレンダリングする必要があることを伝えます。

> ヒント: VS Codeでは、タグにカーソルを合わせるとMDNリファレンスガイドからその使用方法に関する情報を取得できます。

2行目には`<html>`タグの開始タグを記述し、その後すぐに終了タグ`</html>`を記述します。これらのタグはインターフェースのルート要素です。

### タスク

以下の行を`index.html`ファイルの最上部に追加してください:

```HTML
<!DOCTYPE html>
<html></html>
```

✅ DocTypeをクエリ文字列で設定することで決定されるいくつかの異なるモードがあります: [Quirks ModeとStandards Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)。これらのモードは通常使用されない古いブラウザ（Netscape Navigator 4やInternet Explorer 5）をサポートしていました。標準のDocType宣言を使用することをお勧めします。

---

## ドキュメントの「head」

HTMLドキュメントの「head」エリアには、ウェブページに関する重要な情報、いわゆる[メタデータ](https://developer.mozilla.org/docs/Web/HTML/Element/meta)が含まれています。ここでは、レンダリングされるウェブサーバーに以下の4つの情報を伝えます:

- ページのタイトル
- ページのメタデータ:
    - 使用される文字エンコーディングを示す「文字セット」
    - ブラウザ情報（`x-ua-compatible`を含む）、IE=edgeブラウザがサポートされていることを示す
    - ページが読み込まれたときのビューポートの動作に関する情報。ビューポートの初期スケールを1に設定することで、ページが最初に読み込まれたときのズームレベルを制御します。

### タスク

開いている`<html>`タグと閉じている`</html>`タグの間に「head」ブロックを追加してください。

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ ビューポートメタタグを次のように設定した場合、何が起こるでしょうか: `<meta name="viewport" content="width=600">`? [ビューポート](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag)についてさらに学んでください。

---

## ドキュメントの`body`

### HTMLタグ

HTMLでは、.htmlファイルにタグを追加してウェブページの要素を作成します。各タグは通常、次のように開始タグと終了タグを持ちます: `<p>hello</p>`（段落を示します）。インターフェースのボディを作成するには、`<html>`タグペアの内側に`<body>`タグを追加します。これでマークアップは次のようになります:

### タスク

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

これでページを構築し始めることができます。通常、ページ内の個別の要素を作成するために`<div>`タグを使用します。一連の`<div>`要素を作成し、それらに画像を含めます。

### 画像

閉じタグを必要としないHTMLタグの1つは`<img>`タグです。このタグには`src`要素があり、ページがアイテムをレンダリングするために必要な情報がすべて含まれています。

アプリ内に`images`というフォルダを作成し、その中に[ソースコードフォルダ](../../../../3-terrarium/solution/images)にあるすべての画像を追加してください。（植物の画像が14枚あります）

### タスク

以下の植物画像を`<body></body>`タグの間に2つの列として追加してください:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> 注意: SpansとDivs。Divsは「ブロック」要素と見なされ、Spansは「インライン」です。これらのdivをspanに変換した場合、何が起こるでしょうか？

このマークアップにより、植物が画面に表示されます。ただし、まだCSSでスタイルが設定されていないため、見た目はかなり悪いです。次のレッスンでCSSを使用してスタイルを設定します。

各画像には、画像が表示されない場合でも表示されるaltテキストがあります。これはアクセシビリティのために重要な属性です。アクセシビリティについては今後のレッスンでさらに学びますが、alt属性は画像を表示できない場合（接続が遅い、src属性にエラーがある、またはスクリーンリーダーを使用している場合など）に代替情報を提供します。

✅ 各画像に同じaltタグがあることに気づきましたか？これは良いプラクティスでしょうか？なぜそうではないのでしょうか？このコードを改善できますか？

---

## セマンティックマークアップ

一般的に、HTMLを書く際には意味のある「セマンティクス」を使用することが推奨されます。それはどういう意味でしょうか？それは、データやインタラクションの種類を表すために設計されたHTMLタグを使用することを意味します。例えば、ページのメインタイトルテキストには`<h1>`タグを使用するべきです。

以下の行を開いている`<body>`タグのすぐ下に追加してください:

```html
<h1>My Terrarium</h1>
```

ヘッダーを`<h1>`として、順序なしリストを`<ul>`としてレンダリングするなど、セマンティックマークアップを使用することで、スクリーンリーダーがページをナビゲートしやすくなります。一般的に、ボタンは`<button>`として記述し、リストは`<li>`として記述するべきです。特別にスタイル設定された`<span>`要素にクリックハンドラーを追加してボタンを模倣することは可能ですが、ボタンがページのどこにあるかを判断し、それと対話するための技術を使用する障害のあるユーザーにとっては、要素がボタンとして表示される方が良いです。この理由から、可能な限りセマンティックマークアップを使用するようにしてください。

✅ スクリーンリーダーがウェブページとどのように対話するかを[確認してください](https://www.youtube.com/watch?v=OUDV1gqs9GA)。セマンティックでないマークアップがユーザーをどのように苛立たせるかがわかりますか？

## テラリウム

インターフェースの最後の部分では、テラリウムを作成するためにスタイル設定されるマークアップを作成します。

### タスク:

最後の`</div>`タグの上に以下のマークアップを追加してください:

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

✅ このマークアップを画面に追加したにもかかわらず、何も表示されないのはなぜでしょうか？

---

## 🚀チャレンジ

HTMLにはまだ遊べる「古い」タグがいくつかありますが、[これらのタグ](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements)のような廃止されたタグをマークアップで使用するべきではありません。それでも、古い`<marquee>`タグを使用してh1タイトルを横スクロールさせることはできますか？（もし使用した場合は、後で必ず削除してください）

## 講義後クイズ

[講義後クイズ](https://ff-quizzes.netlify.app/web/quiz/16)

## 復習と自己学習

HTMLはウェブを今日の姿に成長させた「信頼できる」構築ブロックシステムです。古いタグと新しいタグについて少し学び、その歴史を調べてください。なぜ一部のタグが廃止され、一部が追加されたのかを理解できますか？将来どのようなタグが導入される可能性があるでしょうか？

ウェブとモバイルデバイス向けのサイト構築についてさらに学ぶには、[Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon)をご覧ください。

## 課題

[HTMLを練習: ブログのモックアップを作成](assignment.md)

---

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知ください。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当社は責任を負いません。