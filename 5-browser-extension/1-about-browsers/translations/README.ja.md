# ブラウザ拡張機能プロジェクト その 1: ブラウザのすべて

![Browser sketchnote](/sketchnotes/browser.jpg)
> Sketchnote by [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## レッスン前の小テスト

[レッスン前の小テスト](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/23?loc=ja)

### イントロダクション

ブラウザ拡張機能はブラウザに機能を追加するものです。しかし、拡張機能を作る前に、ブラウザがどのように機能するのかを少し学んでおく必要があります。

### ブラウザについて

この一連のレッスンでは、Chrome、Firefox、Edge ブラウザで動作するブラウザ拡張機能の構築方法を学びます。このパートでは、ブラウザがどのように動作するのかを理解し、ブラウザ拡張の要素を足場にしていきます。

しかし、ブラウザとは正確には何でしょうか? それは、エンドユーザーがサーバーからコンテンツにアクセスして Web ページに表示することを可能にするソフトウェアアプリケーションです。

✅ 少し歴史を紹介します: 最初のブラウザは 'WorldWideWeb' と呼ばれ、1990年にティモシー・バーナーズ・リー卿によって作成されました。

![early browsers](../images/earlybrowsers.jpg)
> いくつかの初期のブラウザは、[Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing) を経由しています。

ユーザーが URL (Uniform Resource Locator) アドレスを使用してインターネットに接続すると、通常は Hypertext Transfer Protocol を使用して `http` または `https` アドレスを経由して、ブラウザが Web サーバと通信して Web ページを取得します。

この時点で、ブラウザのレンダリングエンジンがユーザのデバイス (携帯電話、デスクトップ、ラップトップなど) にページを表示します。

ブラウザにはコンテンツをキャッシュする機能もあり、毎回サーバから取得する必要がありません。ブラウザは、ユーザーのブラウジング活動の履歴を記録したり、ユーザーの活動を保存するために使用される情報を含む小さなデータである「クッキー」を保存したりすることができます。

ブラウザについて覚えておくべき重要なことは、ブラウザはすべて同じではないということです。それぞれのブラウザには長所と短所があり、プロの Web 開発者は、Web ページをクロスブラウザでうまく動作させる方法を理解する必要があります。これには、携帯電話のような小さなビューポートやオフラインのユーザーへの対応も含まれます。

あなたが使いたいブラウザにブックマークしておくべき本当に便利な Web サイトは、[caniuse.com](https://www.caniuse.com) です。Web ページを作成する際には、caniuse のサポートされている技術のリストを利用すると、ユーザーを最大限にサポートすることができるので、非常に便利です。

✅ どのブラウザがあなたの Web サイトのユーザーに最も人気があるのか、どのようにして知ることができるでしょうか? アナリティクスをチェックする - Web 開発プロセスの一環として様々なアナリティクスパッケージをインストールすることができ、様々な人気のあるブラウザで最も使用されているブラウザを教えてくれます。

## ブラウザの拡張機能

なぜブラウザ拡張機能を作ろうと思ったのでしょうか? ブラウザの拡張機能は、何度も繰り返しがちな作業に素早くアクセスしたいときに便利なものです。例えば、対話する様々な Web ページの色をチェックする必要がある場合は、カラーピッカーブラウザ拡張機能をインストールするとよいでしょう。パスワードを覚えるのが面倒な場合は、パスワード管理ブラウザ拡張機能を使うとよいでしょう。

ブラウザ拡張機能は開発するのも楽しいものです。彼らは、有限のタスクを管理する傾向があり、それがうまく機能しています。

✅ お気に入りのブラウザ拡張機能は何ですか? どのようなタスクを実行しますか?

### 拡張機能のインストール

ビルドを始める前に、ブラウザ拡張機能のビルドとデプロイのプロセスを見てみましょう。ブラウザによってこのタスクを管理する方法は少し異なりますが、Chrome と Firefox では、Edge のこの例とプロセスは似ています。

![Edge ブラウザのスクリーンショットでは、edge://extensions のページと設定メニューを開いている様子が表示されています。](../images/install-on-edge.png)

本質的には、このプロセスになります。

- `npm build` を使って拡張機能をビルドします
- ブラウザの右上にある「設定とその他」ボタン (`...` アイコン) を使って、拡張機能ペインに移動します
- 新規インストールの場合は、`load unpacked` を選択してビルドフォルダ (私たちの場合は `/dist`) から新しい拡張機能をアップロードします
- または、既にインストールされている拡張機能をリロードする場合は `reload` をクリックします

✅ 各ブラウザに関連付けられたブラウザ拡張機能ストアにリリースされた拡張機能をインストールするには、それらの [ストア](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) に移動して、お好みの拡張機能をインストールしてください。

### 開始する

あなたの地域のカーボンフットプリントを表示し、地域のエネルギー使用量とエネルギー源を表示するブラウザ拡張機能を構築します。拡張機能には、CO2 Signal API にアクセスできるように API キーを収集するフォームがあります。

**必要なもの:**

- [API キー](https://www.co2signal.com/); このページのボックスにメールアドレスを入力します
- [電力地図](https://www.electricitymap.org/map) に対応する地域のコード (例えばボストンでは 'US-NEISO' を使用しています)
- [スターターコード](../../start)。`start`フォルダをダウンロードしてください。このフォルダでコードを完成させることになります。
- [NPM](https://www.npmjs.com) - NPM はパッケージ管理ツールです。ローカルにインストールすると、`package.json` ファイルに記載されているパッケージがインストールされ、Web アセットで使用されます。

✅ この[優れた Learn モジュール](https://docs.microsoft.com/ja-jp/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-13441-cxa)では、パッケージ管理の詳細を学ぶことができます。

コードベースに目を通してみてください。

dist
    -|manifest.json (ここに設定されているデフォルト)
    -|index.html (フロントエンド HTML マークアップはこちら)
    -|background.js (バックグラウンド JS はこちら)
    -|main.js (ビルド JS)
src
    -|index.js (あなたのJSコードはここにあります)

✅ API キーとリージョンコードが手元にあれば、後で使うときのためにノートのどこかに保存しておきましょう。

### 拡張機能の HTML を構築する

この拡張機能には2つのビューがあります。1つは API キーとリージョンコードを収集するためのものです。

![完成した拡張機能をブラウザで開いて、リージョン名と API キーを入力したフォームを表示したときのスクリーンショットです。](../images/1.png)

そして2つ目は、地域の炭素使用量を表示するためのものです。

![完成した拡張機能のスクリーンショットは、US-NEISO 地域の炭素使用量と化石燃料の割合の値を表示しています。](../images/2.png)

まずはフォーム用の HTML を構築し、CSS でスタイリングしてみましょう。

`/dist` フォルダにフォームと結果領域を作成します。`index.html` ファイルの中には、区切りのついたフォーム領域を作成します。

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
これは、保存した情報を入力し、ローカルストレージに保存するフォームです。

次に、結果領域を作成します。最終的なフォームタグの下に、いくつかの div を追加します。

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
この時点で、ビルドを試してみましょう。この拡張モジュールのパッケージの依存関係を必ずインストールしてください。

```
npm install
```

このコマンドは、Node Package Manager である npm を使用して、拡張機能のビルドプロセスに Webpack をインストールします。webpack はコードのコンパイルを処理するバンドルです。この処理の出力は `/dist/main.js` を見ることで見ることができます - コードがバンドルされていることがわかります。

とりあえず、拡張機能をビルドして、拡張機能として Edge にデプロイすると、フォームがきれいに表示されます。

これで、ブラウザ拡張機能を構築するための第一歩が踏み出せました。この後のレッスンでは、ブラウザ拡張機能をより機能的で便利なものにしていきます。

---

## 🚀 チャレンジ

ブラウザの拡張機能ストアを見て、ブラウザにインストールしてください。興味深い方法でそのファイルを調べることができます。あなたは何を発見しましたか？

## レッスン後の小テスト

[レッスン後の小テスト](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/24?loc=ja)

## 復習と自己学習

このレッスンでは、Web ブラウザの歴史について少し学びました。この機会に、Web ブラウザの歴史を読むことで、World Wide Web の発明者がどのように Web ブラウザの使用を想定しているかを学びましょう。役に立つサイトをいくつか紹介します。

[Web ブラウザの歴史](https://www.mozilla.org/firefox/browsers/browser-history/)

[Web の歴史](https://webfoundation.org/about/vision/history-of-the-web/)

[ティム・バーナーズ・リーのインタビュー](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## 課題 

[拡張機能のスタイル変更](assignment.ja.md)

