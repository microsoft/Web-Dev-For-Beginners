<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0bb55e0b98600afab801eea115228873",
  "translation_date": "2025-08-23T23:43:50+00:00",
  "source_file": "5-browser-extension/1-about-browsers/README.md",
  "language_code": "ja"
}
-->
# ブラウザ拡張プロジェクト パート1: ブラウザについて

![ブラウザのスケッチノート](../../../../sketchnotes/browser.jpg)
> スケッチノート: [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## 講義前のクイズ

[講義前のクイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/23)

### はじめに

ブラウザ拡張機能は、ブラウザに追加の機能を提供します。しかし、拡張機能を作成する前に、ブラウザがどのように動作するかを少し学ぶ必要があります。

### ブラウザについて

このレッスンシリーズでは、Chrome、Firefox、Edgeブラウザで動作するブラウザ拡張機能の作成方法を学びます。このパートでは、ブラウザの仕組みを理解し、ブラウザ拡張機能の要素を構築していきます。

では、ブラウザとは何でしょうか？ブラウザは、エンドユーザーがサーバーからコンテンツを取得し、それをウェブページ上に表示するためのソフトウェアアプリケーションです。

✅ 少し歴史を振り返ると、最初のブラウザは「WorldWideWeb」と呼ばれ、1990年にティモシー・バーナーズ＝リー卿によって作られました。

![初期のブラウザ](../../../../5-browser-extension/1-about-browsers/images/earlybrowsers.jpg)
> 初期のブラウザの一部: [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

ユーザーがURL（Uniform Resource Locator）アドレスを使用してインターネットに接続するとき、通常は`http`または`https`アドレスを介してHypertext Transfer Protocolを使用します。ブラウザはウェブサーバーと通信し、ウェブページを取得します。

この時点で、ブラウザのレンダリングエンジンがウェブページをユーザーのデバイス（スマートフォン、デスクトップ、またはノートパソコンなど）に表示します。

ブラウザは、コンテンツをキャッシュして毎回サーバーから取得する必要がないようにしたり、ユーザーの閲覧履歴を記録したり、「クッキー」と呼ばれる小さなデータを保存してユーザーの活動情報を保持したりすることができます。

ブラウザについて重要な点は、すべてのブラウザが同じではないということです！各ブラウザにはそれぞれの強みと弱みがあり、プロのウェブ開発者はウェブページをクロスブラウザでうまく動作させる方法を理解する必要があります。これには、スマートフォンのような小さなビューポートや、オフラインのユーザーへの対応が含まれます。

ウェブページを作成する際に非常に役立つウェブサイトとして、[caniuse.com](https://www.caniuse.com)があります。このサイトでは、サポートされている技術のリストを確認でき、ユーザーを最適にサポートするために役立ちます。

✅ あなたのウェブサイトのユーザー層で最も人気のあるブラウザをどうやって知ることができますか？分析ツールをインストールすることで、ウェブ開発プロセスの一環として、どのブラウザが最も使用されているかを確認できます。

## ブラウザ拡張機能

なぜブラウザ拡張機能を作成したいのでしょうか？繰り返し行うタスクにすばやくアクセスするためにブラウザに追加する便利なツールだからです。例えば、さまざまなウェブページで色を確認する必要がある場合、カラーピッカーのブラウザ拡張機能をインストールするかもしれません。パスワードを覚えるのが苦手な場合は、パスワード管理のブラウザ拡張機能を使用するかもしれません。

ブラウザ拡張機能の開発は楽しいものです。通常、限られた数のタスクを効率的に管理することに特化しています。

✅ あなたのお気に入りのブラウザ拡張機能は何ですか？それらはどのようなタスクを実行しますか？

### 拡張機能のインストール

作成を始める前に、ブラウザ拡張機能の構築と展開のプロセスを確認してください。各ブラウザによってこのタスクの管理方法は少し異なりますが、ChromeやFirefoxと同様に、Edgeでの例は以下のようになります：

![Edgeブラウザのスクリーンショット。edge://extensionsページと設定メニューが開いている。](../../../../5-browser-extension/1-about-browsers/images/install-on-edge.png)

> 注: 開発者モードをオンにし、他のストアからの拡張機能を許可してください。

基本的なプロセスは以下のようになります：

- `npm run build`を使用して拡張機能をビルドする
- ブラウザで「設定とその他」ボタン（右上の`...`アイコン）を使用して拡張機能のペインに移動する
- 新しいインストールの場合、`load unpacked`を選択してビルドフォルダ（この場合は`/dist`）から新しい拡張機能をアップロードする
- または、すでにインストールされている拡張機能を再ロードする場合は`reload`をクリックする

✅ これらの手順は自分で作成した拡張機能に関するものです。各ブラウザに関連するブラウザ拡張機能ストアでリリースされた拡張機能をインストールするには、それらの[ストア](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home)に移動して、好きな拡張機能をインストールしてください。

### 始めましょう

あなたは、地域の炭素排出量を表示するブラウザ拡張機能を作成します。この拡張機能は、地域のエネルギー使用量とエネルギーの供給源を表示します。拡張機能には、APIキーを収集するフォームがあり、CO2 SignalのAPIにアクセスできます。

**必要なもの:**

- [APIキー](https://www.co2signal.com/) - このページのボックスにメールアドレスを入力すると、APIキーが送信されます
- [地域コード](http://api.electricitymap.org/v3/zones) - [Electricity Map](https://www.electricitymap.org/map)に対応するコード（例えば、ボストンでは「US-NEISO」を使用します）
- [スターターコード](../../../../5-browser-extension/start) - `start`フォルダをダウンロードし、このフォルダ内のコードを完成させます
- [NPM](https://www.npmjs.com) - NPMはパッケージ管理ツールです。ローカルにインストールすると、`package.json`ファイルに記載されているパッケージがウェブアセットで使用できるようになります

✅ パッケージ管理についてもっと学びたい場合は、この[優れた学習モジュール](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-77807-sagibbon)を参照してください。

コードベースを確認してみましょう：

dist
    -|manifest.json (デフォルト設定はこちら)
    -|index.html (フロントエンドのHTMLマークアップはこちら)
    -|background.js (バックグラウンドJSはこちら)
    -|main.js (ビルド済みJS)
src
    -|index.js (あなたのJSコードはこちら)

✅ APIキーと地域コードを準備したら、それらをメモに保存しておきましょう。

### 拡張機能のHTMLを作成する

この拡張機能には2つのビューがあります。1つはAPIキーと地域コードを収集するためのもの：

![完成した拡張機能のスクリーンショット。フォームに地域名とAPIキーの入力欄が表示されている。](../../../../5-browser-extension/1-about-browsers/images/1.png)

もう1つは地域の炭素使用量を表示するためのもの：

![完成した拡張機能のスクリーンショット。US-NEISO地域の炭素使用量と化石燃料の割合が表示されている。](../../../../5-browser-extension/1-about-browsers/images/2.png)

まず、フォームを作成し、CSSでスタイリングします。

`/dist`フォルダ内で、フォームと結果表示エリアを作成します。`index.html`ファイル内で、指定されたフォームエリアを埋めます：

```HTML
<form class="form-data" autocomplete="on">
	<div>
		<h2>New? Add your Information</h2>
	</div>
	<div>
		<label for="region">Region Name</label>
		<input type="text" id="region" required class="region-name" />
	</div>
	<div>
		<label for="api">Your API Key from tmrow</label>
		<input type="text" id="api" required class="api-key" />
	</div>
	<button class="search-btn">Submit</button>
</form>	
```
これは保存された情報が入力され、ローカルストレージに保存されるフォームです。

次に、結果表示エリアを作成します。最後のフォームタグの下にいくつかのdivを追加します：

```HTML
<div class="result">
	<div class="loading">loading...</div>
	<div class="errors"></div>
	<div class="data"></div>
	<div class="result-container">
		<p><strong>Region: </strong><span class="my-region"></span></p>
		<p><strong>Carbon Usage: </strong><span class="carbon-usage"></span></p>
		<p><strong>Fossil Fuel Percentage: </strong><span class="fossil-fuel"></span></p>
	</div>
	<button class="clear-btn">Change region</button>
</div>
```
この時点でビルドを試すことができます。拡張機能のパッケージ依存関係をインストールしてください：

```
npm install
```

このコマンドはnpm（Node Package Manager）を使用して、拡張機能のビルドプロセスに必要なwebpackをインストールします。ビルドプロセスの出力は`/dist/main.js`で確認できます。コードがバンドルされていることがわかります。

現時点では、拡張機能をビルドし、Edgeに拡張機能として展開すると、フォームがきれいに表示されるはずです。

おめでとうございます！ブラウザ拡張機能の作成に向けた最初のステップを踏み出しました。次のレッスンでは、さらに機能的で便利なものにしていきます。

---

## 🚀 チャレンジ

ブラウザ拡張機能ストアを見て、1つをブラウザにインストールしてみましょう。そのファイルを興味深い方法で調べることができます。何を発見しましたか？

## 講義後のクイズ

[講義後のクイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/24)

## 復習と自己学習

このレッスンでは、ウェブブラウザの歴史について少し学びました。この機会に、ワールドワイドウェブの発明者がその使用方法をどのように考えていたかについて、さらに学んでみましょう。役立つサイトには以下があります：

[ウェブブラウザの歴史](https://www.mozilla.org/firefox/browsers/browser-history/)

[ウェブの歴史](https://webfoundation.org/about/vision/history-of-the-web/)

[ティム・バーナーズ＝リーとのインタビュー](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## 課題

[拡張機能をリスタイルする](assignment.md)

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知ください。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当方は責任を負いません。