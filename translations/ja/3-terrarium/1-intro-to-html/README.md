<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-24T15:03:59+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "ja"
}
-->
# テラリウムプロジェクト パート1: HTML入門

![HTML入門](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.ja.png)
> スケッチノート: [Tomomi Imura](https://twitter.com/girlie_mac)

HTML（HyperText Markup Language）は、これまで訪れたすべてのウェブサイトの基盤です。HTMLはウェブページの骨格のようなもので、コンテンツの配置、構成、各部分の意味を定義します。後にCSSが色やレイアウトでHTMLを「装飾」し、JavaScriptがインタラクティブ性を加えることで命を吹き込みますが、HTMLはすべての基盤となる構造を提供します。

このレッスンでは、仮想テラリウムインターフェースのHTML構造を作成します。この実践的なプロジェクトを通じて、基本的なHTMLの概念を学びながら、視覚的に魅力的なものを構築します。セマンティック要素を使ったコンテンツの整理、画像の操作、インタラクティブなウェブアプリケーションの基盤作りを学びます。

レッスン終了時には、植物の画像が整理された列に表示されるHTMLページが完成します。次のレッスンでスタイリングを行う準備が整います。最初はシンプルに見えるかもしれませんが、それがCSSで視覚的な仕上げを加える前のHTMLの役割です。

## レッスン前のクイズ

[レッスン前のクイズ](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **視聴して学ぶ**: この役立つビデオ概要をチェックしてください
> 
> [![HTML基礎ビデオ](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## プロジェクトのセットアップ

HTMLコードに取り掛かる前に、テラリウムプロジェクトの適切な作業スペースを設定しましょう。最初から整理されたファイル構造を作成することは、ウェブ開発の旅を通じて役立つ重要な習慣です。

### タスク: プロジェクト構造を作成する

テラリウムプロジェクト用の専用フォルダーを作成し、最初のHTMLファイルを追加します。以下の2つの方法があります:

**オプション1: Visual Studio Codeを使用する**
1. Visual Studio Codeを開く
2. 「ファイル」→「フォルダーを開く」をクリックするか、`Ctrl+K, Ctrl+O`（Windows/Linux）または`Cmd+K, Cmd+O`（Mac）を使用
3. `terrarium`という新しいフォルダーを作成し、それを選択
4. エクスプローラペインで「新しいファイル」アイコンをクリック
5. ファイル名を`index.html`にする

![VS Codeエクスプローラで新しいファイル作成を表示](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.ja.png)

**オプション2: ターミナルコマンドを使用する**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**これらのコマンドが達成すること:**
- プロジェクト用の新しいディレクトリ`terrarium`を**作成**
- テラリウムディレクトリに**移動**
- 空の`index.html`ファイルを**作成**
- 編集のためにVisual Studio Codeでファイルを**開く**

> 💡 **プロのヒント**: ファイル名`index.html`はウェブ開発で特別な意味を持ちます。誰かがウェブサイトを訪れると、ブラウザは自動的に`index.html`をデフォルトページとして表示します。つまり、`https://mysite.com/projects/`のようなURLは、URL内でファイル名を指定することなく`projects`フォルダーの`index.html`ファイルを自動的に提供します。

## HTMLドキュメント構造の理解

すべてのHTMLドキュメントは、ブラウザが正しく理解して表示するために必要な特定の構造に従います。この構造は正式な手紙のようなもので、特定の順序で必要な要素が含まれており、受信者（この場合はブラウザ）がコンテンツを適切に処理するのを助けます。

まず、すべてのHTMLドキュメントに必要な基本的な基盤を追加しましょう。

### DOCTYPE宣言とルート要素

HTMLファイルの最初の2行は、ブラウザへのドキュメントの「紹介」として機能します:

```html
<!DOCTYPE html>
<html></html>
```

**このコードが何をするか:**
- `<!DOCTYPE html>`を使用してドキュメントタイプをHTML5として**宣言**
- ページコンテンツをすべて含むルート`<html>`要素を**作成**
- 適切なブラウザレンダリングのための最新のウェブ標準を**確立**
- 異なるブラウザやデバイス間で一貫した表示を**保証**

> 💡 **VS Codeのヒント**: VS CodeでHTMLタグにカーソルを合わせると、MDN Web Docsからの使用例やブラウザ互換性の詳細などの役立つ情報が表示されます。

> 📚 **詳細を学ぶ**: DOCTYPE宣言は、ブラウザが「クイックスモード」に入るのを防ぎます。これは非常に古いウェブサイトをサポートするために使用されていました。現代のウェブ開発では、単純な`<!DOCTYPE html>`宣言を使用して[標準準拠のレンダリング](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)を保証します。

## 必須のドキュメントメタデータを追加する

HTMLドキュメントの`<head>`セクションには、ブラウザや検索エンジンが必要とする重要な情報が含まれていますが、訪問者が直接ページ上で見ることはありません。これは、ウェブページが適切に機能し、異なるデバイスやプラットフォームで正しく表示されるのを助ける「舞台裏」の情報です。

このメタデータは、ブラウザにページの表示方法、使用する文字エンコーディング、異なる画面サイズの処理方法を伝えます。プロフェッショナルでアクセス可能なウェブページを作成するために不可欠です。

### タスク: ドキュメントヘッドを追加する

開いている`<html>`タグと閉じている`<html>`タグの間にこの`<head>`セクションを挿入してください:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**各要素が達成することの内訳:**
- ブラウザタブや検索結果に表示されるページタイトルを**設定**
- 世界中で適切なテキスト表示を可能にするUTF-8文字エンコーディングを**指定**
- 最新バージョンのInternet Explorerとの互換性を**確保**
- デバイス幅に一致するビューポートを設定してレスポンシブデザインを**構成**
- コンテンツを自然なサイズで表示するための初期ズームレベルを**制御**

> 🤔 **考えてみてください**: `<meta name="viewport" content="width=600">`のようなビューポートメタタグを設定した場合、どうなるでしょうか？ページが常に幅600ピクセルに固定され、レスポンシブデザインが壊れてしまいます！[適切なビューポート設定](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag)についてさらに学びましょう。

## ドキュメントボディの構築

`<body>`要素には、ウェブページのすべての目に見えるコンテンツが含まれています。訪問者が見るものや操作するものすべてがここにあります。`<head>`セクションがブラウザに指示を与えたのに対し、`<body>`セクションには実際のコンテンツが含まれています: テキスト、画像、ボタン、その他のユーザーインターフェースを構成する要素です。

ボディ構造を追加し、HTMLタグがどのように連携して意味のあるコンテンツを作成するかを理解しましょう。

### HTMLタグ構造の理解

HTMLはペアタグを使用して要素を定義します。ほとんどのタグには、`<p>`のような開始タグと`</p>`のような終了タグがあり、その間にコンテンツが含まれます: `<p>Hello, world!</p>`。これにより、「Hello, world!」というテキストを含む段落要素が作成されます。

### タスク: ボディ要素を追加する

HTMLファイルを更新して`<body>`要素を含めてください:

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

**この完全な構造が提供するもの:**
- 基本的なHTML5ドキュメントフレームワークを**確立**
- 適切なブラウザレンダリングのための必須メタデータを**含む**
- 目に見えるコンテンツのための空のボディを**作成**
- 現代のウェブ開発のベストプラクティスに**従う**

これでテラリウムの目に見える要素を追加する準備が整いました。`<div>`要素をコンテナとして使用してコンテンツの異なるセクションを整理し、`<img>`要素を使用して植物の画像を表示します。

### 画像とレイアウトコンテナの操作

画像はHTMLでは特別な存在で、「セルフクローズ」タグを使用します。`<p></p>`のようにコンテンツを囲む要素とは異なり、`<img>`タグは`src`（画像ファイルパス）や`alt`（アクセシビリティ）のような属性を使用してタグ内に必要な情報をすべて含みます。

画像をHTMLに追加する前に、プロジェクトファイルを適切に整理し、画像フォルダーを作成して植物のグラフィックを追加する必要があります。

**まず、画像をセットアップします:**
1. テラリウムプロジェクトフォルダー内に`images`というフォルダーを作成
2. [ソリューションフォルダー](../../../../3-terrarium/solution/images)から植物画像をダウンロード（合計14枚の植物画像）
3. すべての植物画像を新しい`images`フォルダーにコピー

### タスク: 植物表示レイアウトを作成する

次に、`<body></body>`タグの間に植物画像を2列に整理して追加します:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.ja.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.ja.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.ja.png" />
		</div>
	</div>
</div>
```

**このコードで何が起こっているかをステップごとに説明:**
- すべてのコンテンツを保持する`id="page"`を持つメインページコンテナを**作成**
- 2つの列コンテナ: `left-container`と`right-container`を**確立**
- 左列に7つの植物、右列に7つの植物を**整理**
- 各植物画像を個別に配置するために`plant-holder`divで**ラップ**
- 次のレッスンでCSSスタイリングのために一貫したクラス名を**適用**
- 後でJavaScriptでの操作のために各植物画像にユニークなIDを**割り当て**
- 画像フォルダーを指す適切なファイルパスを**含む**

> 🤔 **考えてみてください**: 現在、すべての画像に同じaltテキスト「plant」が設定されています。これはアクセシビリティには理想的ではありません。スクリーンリーダーのユーザーは「plant」という言葉を14回繰り返し聞くことになり、各画像がどの植物を示しているのか分かりません。各画像に対してより良い、より具体的なaltテキストを考えることができますか？

> 📝 **HTML要素の種類**: `<div>`要素は「ブロックレベル」で幅全体を占めますが、`<span>`要素は「インライン」で必要な幅だけを占めます。これらの`<div>`タグをすべて`<span>`タグに変更した場合、何が起こると思いますか？

このマークアップを追加すると、植物が画面に表示されますが、まだ洗練されていません。それは次のレッスンでCSSが担当します！今のところ、コンテンツを適切に整理し、アクセシビリティのベストプラクティスに従った堅実なHTML基盤を持っています。

## アクセシビリティのためのセマンティックHTMLの使用

セマンティックHTMLとは、外観だけでなく、その意味や目的に基づいてHTML要素を選択することを意味します。セマンティックマークアップを使用すると、ブラウザ、検索エンジン、スクリーンリーダーなどの支援技術にコンテンツの構造と意味を伝えることができます。

このアプローチは、障害を持つユーザーにとってウェブサイトをよりアクセスしやすくし、検索エンジンがコンテンツをよりよく理解するのを助けます。これは、すべての人にとってより良い体験を生み出す現代のウェブ開発の基本原則です。

### セマンティックなページタイトルを追加する

テラリウムページに適切な見出しを追加しましょう。開いている`<body>`タグのすぐ後にこの行を挿入してください:

```html
<h1>My Terrarium</h1>
```

**セマンティックマークアップが重要な理由:**
- スクリーンリーダーがページ構造をナビゲートして理解するのを**助ける**
- コンテンツの階層を明確にすることで検索エンジン最適化（SEO）を**向上**
- 視覚障害や認知障害を持つユーザーのアクセシビリティを**強化**
- すべてのデバイスやプラットフォームでより良いユーザー体験を**提供**
- プロフェッショナルな開発のためのウェブ標準とベストプラクティスに**従う**

**セマンティック vs 非セマンティックの選択例:**

| 目的 | ✅ セマンティックな選択 | ❌ 非セマンティックな選択 |
|------|-------------------------|---------------------------|
| メイン見出し | `<h1>タイトル</h1>` | `<div class="big-text">タイトル</div>` |
| ナビゲーション | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| ボタン | `<button>クリックしてください</button>` | `<span onclick="...">クリックしてください</span>` |
| 記事コンテンツ | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **実際に見る**: [スクリーンリーダーがウェブページとどのように対話するか](https://www.youtube.com/watch?v=OUDV1gqs9GA)を視聴して、セマンティックマークアップがアクセシビリティにとって重要な理由を理解してください。適切なHTML構造がユーザーの効率的なナビゲーションを助ける様子に注目してください。

## テラリウムコンテナの作成

次に、植物が最終的に配置されるガラス容器であるテラリウム自体のHTML構造を追加しましょう。このセクションは重要な概念を示しています: HTMLは構造を提供しますが、CSSスタイリングがなければこれらの要素はまだ目に見えません。

テラリウムのマークアップでは、次のレッスンでCSSスタイリングを直感的で維持可能にする記述的なクラス名を使用します。

### タスク: テラリウム構造を追加する

最後の`</div>`タグの上（ページコンテナの閉じタグの前）にこのマークアップを挿入してください:

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

**このテラリウム構造を理解する:**
- スタイリング用のユニークなIDを持つメインテラリウムコンテナを**作成**
- 各視覚コンポーネント（上部、壁、土、底部）のための個別の要素を**定義**
- ガラスの反射効果（光沢要素）のためのネストされた要素を**含む**
- 各要素の目的を明確に示す記述的なクラス名を**使用**
- ガラスのテラリウム外観を作成するCSSスタイリングの準備を**整える**

>
**プロンプト:** セマンティックHTMLセクションを作成し、メイン見出し「植物ケアガイド」、サブセクション「水やり」「光の条件」「土壌ケア」を含む3つのセクションを作成してください。それぞれのセクションには植物ケア情報の段落を含めます。適切なセマンティックHTMLタグ（例: `<section>`, `<h2>`, `<h3>`, `<p>`）を使用して内容を構造化してください。

[agent modeについて詳しくはこちら](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)。

## HTMLの歴史チャレンジを探る

**ウェブ進化について学ぶ**

HTMLは、1990年にティム・バーナーズ＝リーがCERNで最初のウェブブラウザを作成して以来、大きく進化してきました。例えば、古いタグの一部である`<marquee>`は、現代のアクセシビリティ基準やレスポンシブデザインの原則に適合しないため、現在では非推奨となっています。

**この実験を試してみよう:**
1. `<h1>`タイトルを一時的に`<marquee>`タグで囲んでみてください: `<marquee><h1>My Terrarium</h1></marquee>`
2. ブラウザでページを開き、スクロール効果を観察してください
3. このタグが非推奨となった理由を考えてみましょう（ヒント: ユーザー体験とアクセシビリティについて考えてみてください）
4. `<marquee>`タグを削除し、セマンティックマークアップに戻してください

**振り返りの質問:**
- スクロールするタイトルは、視覚障害や動きに敏感なユーザーにどのような影響を与えるでしょうか？
- 同様の視覚効果をよりアクセシブルに実現するためのモダンなCSS技術は何でしょうか？
- 非推奨の要素ではなく、現在のウェブ標準を使用することがなぜ重要なのでしょうか？

[非推奨および廃止されたHTML要素](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements)についてさらに詳しく調べ、ウェブ標準がどのように進化してユーザー体験を向上させているかを理解してください。


## 講義後のクイズ

[講義後のクイズ](https://ff-quizzes.netlify.app/web/quiz/16)

## レビューと自己学習

**HTMLの知識を深める**

HTMLは30年以上にわたりウェブの基盤となり、単純な文書マークアップ言語からインタラクティブなアプリケーションを構築するための高度なプラットフォームへと進化してきました。この進化を理解することで、現代のウェブ標準をより深く理解し、より良い開発判断を下すことができます。

**おすすめの学習パス:**

1. **HTMLの歴史と進化**
   - HTML 1.0からHTML5までのタイムラインを調査する
   - 特定のタグが非推奨となった理由を探る（アクセシビリティ、モバイル対応性、保守性）
   - 新しいHTML機能や提案を調査する

2. **セマンティックHTMLの深掘り**
   - [HTML5セマンティック要素の完全リスト](https://developer.mozilla.org/docs/Web/HTML/Element)を学ぶ
   - `<article>`、`<section>`、`<aside>`、`<main>`を使用するタイミングを練習する
   - アクセシビリティを向上させるためのARIA属性について学ぶ

3. **モダンウェブ開発**
   - [レスポンシブウェブサイトの構築](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon)をMicrosoft Learnで探る
   - HTMLがCSSやJavaScriptとどのように統合されるかを理解する
   - ウェブパフォーマンスとSEOのベストプラクティスについて学ぶ

**振り返りの質問:**
- どの非推奨HTMLタグを発見し、それらが削除された理由は何でしたか？
- 将来のバージョンに向けて提案されている新しいHTML機能は何ですか？
- セマンティックHTMLはウェブアクセシビリティやSEOにどのように貢献しますか？


## 課題

[HTMLを練習しよう: ブログのモックアップを作成する](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は責任を負いかねますのでご了承ください。