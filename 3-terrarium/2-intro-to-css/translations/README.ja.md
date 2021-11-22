# テラリウムプロジェクト その2: CSS 入門

![Introduction to CSS](/sketchnotes/webdev101-css.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## レッスン前の小テスト

[レッスン前の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/17?loc=ja)

### イントロダクション

CSS (カスケードスタイルシート) は、Web 開発の重要な問題である、Web サイトの見栄えを良くする方法を解決します。また、CSS を使用してレスポンシブ ウェブ デザイン (RWD) を作成することもできます。CSS の仕様には、アプリケーションの洗練されたインタラクションを可能にするアニメーションや変換が含まれています。CSS Working Group は現在の CSS 仕様の維持を支援しており、[World Wide Web Consortium のサイト](https://www.w3.org/Style/CSS/members) でその活動を追うことができます。

> 注: CSS は Web 上のすべてのものと同様に進化する言語であり、すべてのブラウザが仕様の新しい部分をサポートしているわけではありません。常に [CanIUse.com](https://caniuse.com) を参照して実装を確認してください。

このレッスンでは、オンラインテラリウムにスタイルを追加し、カスケード、継承、セレクタの使用、配置、CSS を使ったレイアウトの作成など、CSS の概念について学びます。その過程で、テラリウムをレイアウトし、実際のテラリウムを作成していきます。

### 前提条件

テラリウムの HTML が完成し、スタイリングの準備が整っています。

### タスク

テラリウムのフォルダに `style.css` というファイルを作成します。そのファイルを `<head>` セクションにインポートしてください。

```html
<link rel="stylesheet" href="./style.css" />
```

---

## カスケード

カスケーディングスタイルシートは、スタイルの適用がその優先度によって導かれるように、スタイルが「カスケード」するという考えを取り入れています。Web サイトの作者によってセットされたスタイルはブラウザによってセットされたそれらより優先されます。「インライン」にセットされたスタイルは外部スタイルシートにセットされたものより優先されます。

### タスク

インラインスタイル "color: red" を `<h1>` タグに追加します。

```html
<h1 style="color: red">My Terrarium</h1>
```

次に、以下のコードを `style.css` ファイルに追加します。

```css
h1 {
 color: blue;
}
```

✅ Web アプリではどの色が表示されますか? なぜですか? スタイルを上書きする方法を見つけることはできますか? いつ、またはなぜそうしたくないのですか？

---

## 継承

スタイルは、先祖のスタイルから子孫へと継承され、入れ子になった要素は親のスタイルを継承するようになっています。

### タスク

body のフォントを指定されたフォントに設定し、入れ子になっている要素のフォントを確認します。

```css
body {
	font-family: helvetica, arial, sans-serif;
}
```

ブラウザのコンソールから「要素」タブを開き、h1 のフォントを観察してください。ブラウザ内で述べられているように、フォントは body から継承されています。

![inherited font](../images/1.png)

✅ 入れ子になったスタイルを別のプロパティを継承させることはできますか?

---

## CSS セレクタ

### タグ

これまでのところ、`style.css` ファイルにはいくつかのタグがスタイリングされているだけで、アプリはかなり変な感じになっています。

```css
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

このようにタグをスタイリングすることで、ユニークな要素をコントロールすることができますが、テラリウム内の多くの植物のスタイルをコントロールする必要があります。そのためには、CSS セレクタを利用する必要があります。

### id

左と右のコンテナをレイアウトするためのスタイルを追加します。左のコンテナと右のコンテナは1つしかないので、マークアップでは id が与えられます。スタイルを設定するには、`#` を使用します。

```css
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

ここでは、これらのコンテナを画面の左端と右端に絶対的な位置に配置し、それらが小さなモバイル画面のためにスケーリングできるように、それらの幅にパーセンテージを使用しています。

✅ このコードはかなり繰り返されているので、"DRY" (Don't Repeat Yourself) ではありません。マークアップを変更し、CSS をリファクタリングする必要があるでしょう。

```html
<div id="left-container" class="container"></div>
```

### クラス

上の例では、画面上の2つのユニークな要素にスタイルを設定しました。画面上の多くの要素にスタイルを適用したい場合は、CSS クラスを使用することができます。これを実行して、左右のコンテナに植物をレイアウトします。

HTML マークアップの各植物には、id とクラスの組み合わせがあることに注目してください。ここでの id は、テラリウムの植物の配置を操作するために後で追加する JavaScript によって使用されます。クラスはすべての植物にスタイルを与えています。

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

以下を `style.css` ファイルに追加します。

```css
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

このスニペットで注目すべきは、相対位置と絶対位置が混在していることです。高さをパーセンテージで処理する方法を見てみましょう。

プラントホルダーの高さを 13% に設定します。これは、すべての植物がスクロールせずに各垂直コンテナに表示されるようにするための良い数字です。

植物ホルダーを左に移動するように設定すると、植物がその容器の中でより中央に位置するようになります。画像は、それらをよりドラッグしやすいように、大量の透明な背景を持っているので、画面上でより良くフィットするように左に押される必要があります。

次に、植物自体には 150% の最大幅が与えられています。これにより、ブラウザのスケールダウンに合わせて植物を縮小することができます。ブラウザのサイズを変更してみてください。

また、注目すべきは、(植物が容器の上に座ってテラリウムの中に座っているように見えるように) 要素の相対的な高度を制御する z-index の使用です。

✅ なぜ、植物のホルダーと植物の CSS セレクターの両方が必要なのでしょうか？

## CSS ポジショニング

位置のプロパティ (静的位置、相対位置、固定位置、絶対位置、スティッキー位置があります) を混ぜるのは少し厄介ですが、適切に行うと、ページ上の要素をうまくコントロールすることができます。

絶対的な位置にある要素は、最も近い位置にある祖先からの相対的な位置に配置され、存在しない場合は、ドキュメントの本文に従って配置されます。

相対的に配置された要素は、CSS の指示に基づいて初期位置から離れた位置に配置されます。

今回のサンプルでは、`plant-holder` は相対的に配置された要素であり、絶対的に配置されたコンテナの中に配置されている。その結果、サイドバーのコンテナは左右に固定され、植物ホルダーは入れ子になってサイドバー内で調整され、植物を縦に並べるためのスペースが与えられています。

> 次のレッスンで説明するように、`plant` 自体も絶対位置を持っており、ドラッグ可能にするために必要です。

✅ サイドコンテナとプランターホルダーの配置の種類を入れ替えて実験してみてください。どうなるでしょうか?

## CSS レイアウト

ここでは、学んだことを活かして、CSS を使ってテラリウムを作っていきます。

まず、CSS を使って `.terarium` div の子要素を丸みを帯びた四角形にします。

```css
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

ここでは `border-radius` にもパーセンテージを使用していることに注意してください。ブラウザを縮小すると、瓶のコーナーも拡大縮小されているのがわかります。また、ジャー要素の幅と高さのパーセンテージと、各要素がビューポートの下部に固定されていることにも注目してください。

✅ 瓶の色と不透明度を変えてみてください。どうなりましたか？なぜですか？

---

## 🚀チャレンジ

瓶の左下の部分に「泡」のような輝きを加えて、よりガラスのように見えるようにします。`.jar-glossy-long` と `.jar-glossy-short` は反射光のように見えるようにスタイリングします。このようになります。

![finished terrarium](../images/terrarium-final.png)

レッスン後の小テストを完成させるには、この Learn モジュールを通ってください: [HTML アプリを CSS でスタイルを整える](https://docs.microsoft.com/ja-jp/learn/modules/build-simple-website/4-css-basics?WT.mc_id=academic-13441-cxa)

## レッスン後の小テスト

[レッスン後の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/18?loc=ja)

## 復習と自己学習

CSS は一見簡単そうに見えますが、アプリをすべてのブラウザとすべての画面サイズに完全に対応させようとすると、多くの課題があります。CSS グリッド と Flexbox は、この作業をもう少し構造化し、より信頼性の高いものにするために開発されたツールです。[Flexbox Froggy](https://flexboxfroggy.com/) と [Grid Garden](https://codepip.com/games/grid-garden/) をプレイして、これらのツールについて学びましょう。

## 課題

[CSS リファクタリング](assignment.ja.md)
