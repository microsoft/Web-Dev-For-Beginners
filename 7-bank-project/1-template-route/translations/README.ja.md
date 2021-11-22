# バンキングアプリを作ろう その 1: Web アプリの HTML テンプレートとルート

## レッスン前の小テスト

[レッスン前の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/41?loc=ja)

### イントロダクション

ブラウザに JavaScript が登場して以来、Web サイトはこれまで以上にインタラクティブで複雑になっています。Web 技術は現在では、ブラウザに直接実行される完全に機能的なアプリケーションを作成するために一般的に使用されており、[Web アプリケーション](https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A7%E3%83%96%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)と呼ばれています。Web アプリケーションは高度にインタラクティブであるため、ユーザーはアクションが実行されるたびに全ページのリロードを待ちたくありません。そのため、JavaScript は DOM を使用して HTML を直接更新し、よりスムーズなユーザーエクスペリエンスを提供するために使用されます。

このレッスンでは、HTML テンプレートを使用して、HTML ページ全体をリロードすることなく表示・更新できる複数の画面を作成し、銀行の Web アプリを作成するための基礎を構築していきます。

### 前提条件

このレッスンで構築する Web アプリをテストするためには、ローカルの Web サーバーが必要です。もし持っていない場合は、[Node.js](https://nodejs.org/ja) をインストールして、プロジェクトフォルダから `npx lite-server` コマンドを使用してください。これでローカルの Web サーバーが作成され、ブラウザでアプリを開くことができます。

### 準備

コンピュータ上に `bank` という名前のフォルダを作成し、その中に `index.html` というファイルを作成します。この HTML [ボイラープレート](https://en.wikipedia.org/wiki/Boilerplate_code) から始めます。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- ここで作業することになります。 -->
  </body>
</html>
```

---

## HTML テンプレート

Web ページに複数の画面を作成したい場合、表示したい画面ごとに1つの HTML ファイルを作成するのが1つの解決策です。しかし、この方法にはいくつかの不都合があります。

- 画面切り替えの際に HTML 全体を再読み込みしなければならず、時間がかかることがあります
- 画面間でデータを共有するのは難しいです

もう一つのアプローチは、HTML ファイルを一つだけ持ち、`<template>` 要素を使って複数の [HTML テンプレート](https://developer.mozilla.org/ja/docs/Web/HTML/Element/template)を定義することです。テンプレートはブラウザに表示されない再利用可能な HTML ブロックであり、JavaScript を使って実行時にインスタンス化する必要があります。

### タスク

ログインページとダッシュボードの 2 つの画面を持つ銀行アプリを作成します。まず、アプリの異なる画面をインスタンス化するために使用するプレースホルダ要素を HTML の body に追加します。

```html
<div id="app">Loading...</div>
```

JavaScript での検索が容易になるように、`id` を付与しています。

> ヒント: この要素の内容が置き換えられるので、アプリの読み込み中に表示される読み込みメッセージやインジケータを入れることができます。

次に、ログインページの HTML テンプレートを下に追加します。今のところ、私たちはそこにタイトルとナビゲーションを実行するために使用するリンクを含むセクションを置くだけです。

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

次に、ダッシュボードページ用に別の HTML テンプレートを追加します。このページには異なるセクションが含まれます。

- タイトルとログアウトリンクのあるヘッダー
- 銀行口座の当座預金残高
- 表に表示されるトランザクションのリスト

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> ヒント: HTML テンプレートを作成する際に、どのように見えるかを確認したい場合は、`<template>` と `</template>` の行を `<!-- -->` で囲んでコメントアウトすることができます。

✅ なぜテンプレートに `id` 属性を使うと思いますか? クラスのような他のものを使うことはできないのでしょうか?

## JavaScript でテンプレートを表示する

現在の HTML ファイルをブラウザで試してみると、`Loading...` と表示されて動かなくなるのがわかるでしょう。これは、HTML テンプレートをインスタンス化して表示するために JavaScript コードを追加する必要があるためです。

テンプレートのインスタンス化は通常3つのステップで行われます。

1. 例えば、[`document.getElementById`](https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById) を使用して、DOM 内のテンプレート要素を取得します
2. [`cloneNode`](https://developer.mozilla.org/ja/docs/Web/API/Node/cloneNode) を使用して、テンプレート要素のクローンを作成します
3. 例えば [`appendChild`](https://developer.mozilla.org/ja/docs/Web/API/Node/appendChild) を使用して、可視要素の下の DOM にアタッチします

✅ なぜ DOM にアタッチする前にテンプレートをクローンする必要があるのでしょうか? このステップをスキップしたらどうなると思いますか?

### タスク

プロジェクトフォルダに `app.js` という名前の新しいファイルを作成し、そのファイルを HTML の `<head>` セクションにインポートします。

```html
<script src="app.js" defer></script>
```

では、`app.js` で新しい関数 `updateRoute` を作成します。

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

ここで行うことは、上記の3つのステップとまったく同じです。テンプレートを `templateId` という名前でインスタンス化し、そのクローンされたコンテンツをアプリのプレースホルダ内に配置します。テンプレートのサブツリー全体をコピーするには、`cloneNode(true)` を使用する必要があることに注意してください。

テンプレートのサブツリー全体をコピーするには、`cloneNode(true)` を使用する必要があることに注意してください。

```js
updateRoute('login');
```

✅ このコード `app.innerHTML = '';` の目的は何ですか？これがないとどうなるのでしょうか?

## ルートの作成

Web アプリの話をするときに、**URL** を表示すべき特定の画面にマッピングする意図を *ルーティング* と呼んでいます。複数の HTML ファイルを持つ Web サイトでは、ファイルパスが URL に反映されるため、これは自動的に行われます。たとえば、プロジェクトフォルダにこれらのファイルがあるとします。

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

ルートに `mywebsite` を指定して Web サーバを作成した場合、URL のマッピングは以下のようになる。

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

しかし、私たちの Web アプリでは、すべての画面を含む単一の HTML ファイルを使用しているので、このデフォルトの動作は役に立ちません。この map を手動で作成し、JavaScript を使用して表示されるテンプレートの更新を実行する必要があります。

### タスク

URL パスとテンプレート間の [map](https://en.wikipedia.org/wiki/Associative_array) を実装するために、シンプルなオブジェクトを使用します。このオブジェクトを `app.js` ファイルの先頭に追加します。

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

では、`updateRoute` 関数を少し修正してみましょう。引数に `templateId` を直接渡すのではなく、まず現在の URL を見て、map を使って対応するテンプレート ID の値を取得したいと思います。URL からパス部分だけを取得するには、[`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname)を使うことができます。

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

ここでは、宣言したルートを対応するテンプレートにマッピングしてみました。ブラウザの URL を手動で変更することで正常に動作するか試してみてください。

✅ URL に未知のパスを入力するとどうなるでしょうか? どうすれば解決できるのでしょうか?

## ナビゲーションの追加

私たちのアプリの次のステップは、URL を手動で変更することなく、ページ間を移動する可能性を追加することです。これは2つのことを意味します。

  1. 現在の URL を更新する
  2. 新しい URL に基づいて表示されるテンプレートを更新する

2番目の部分はすでに `updateRoute` 関数で処理したので、現在の URL を更新する方法を見つけなければなりません。

JavaScript、特に [`history.pushState`](https://developer.mozilla.org/ja/docs/Web/API/History/pushState) を使う必要があります。これは HTML をリロードせずに URL を更新して閲覧履歴に新しいエントリを作成することができます。

> 注: HTML アンカー要素[`<a href>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/a)は単独で使用して異なる URL へのハイパーリンクを作成することができますが、ブラウザはデフォルトで HTML をリロードさせることになります。カスタム javascript でルーティングを扱う際には、クリックイベントの preventDefault() 関数を使用して、この動作を防ぐ必要があります。

### タスク

アプリ内でナビゲートするために使用できる新しい関数を作成してみましょう。

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

このメソッドは最初に与えられたパスに基づいて現在の URL を更新し、その後テンプレートを更新します。プロパティ `window.location.origin` は URL のルートを返すので、与えられたパスから完全な URL を再構築することができます。

これでこの関数ができたので、パスが定義されたルートにマッチしない場合の問題を解決することができます。一致するルートが見つからなかった場合は、既存のルートにフォールバックを追加して `updateRoute` 関数を修正する。

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

ルートが見つからない場合は、`login` ページにリダイレクトします。

リンクがクリックされたときに URL を取得し、ブラウザのデフォルトのリンク動作を防ぐための関数を作ってみましょう。

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

HTML の *Login* と *Logout* リンクにバインディングを追加してナビゲーションシステムを完成させましょう。

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

[`onclick`](https://developer.mozilla.org/ja/docs/Web/API/GlobalEventHandlers/onclick) 属性を使用して、`click` イベントを JavaScript コードにバインドし、ここでは `navigate()` 関数の呼び出しを行います。

これらのリンクをクリックしてみると、アプリの異なる画面間を移動できるようになるはずです。

✅ `history.pushState` メソッドは HTML5 標準の一部であり、[すべての最新ブラウザ](https://caniuse.com/?search=pushState)で実装されています。古いブラウザ用の Web アプリを構築している場合、この API の代わりに使用できるトリックがあります。パスの前に[ハッシュ (`#`)](https://en.wikipedia.org/wiki/URI_fragment) を使用すると、通常のアンカーナビゲーションで動作し、ページを再読み込みしないルーティングを実装することができます。その目的は、ページ内に内部リンクを作成することです。

## ブラウザの戻るボタンと進むボタンの扱い

`history.pushState` を使うと、ブラウザのナビゲーション履歴に新しいエントリが作成されます。ブラウザの *戻るボタン* を押すと、以下のように表示されることを確認することができます。

![ナビゲーション履歴のスクリーンショット](../history.png)

何度か戻るボタンをクリックしてみると、現在の URL が変わって履歴が更新されていますが、同じテンプレートが表示され続けています。

これは、履歴が変わるたびに `updateRoute()` を呼び出す必要があることを知らないからです。[`history.pushState` のドキュメント](https://developer.mozilla.org/ja/docs/Web/API/History/pushState)を見てみると、状態が変化した場合、つまり別の URL に移動した場合には、[`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)イベントが発生することがわかります。これを使ってこの問題を解決しましょう。

### タスク

ブラウザの履歴が変更されたときに表示されるテンプレートが更新されるようにするために、`updateRoute()` を呼び出す新しい関数をアタッチします。これは `app.js` ファイルの下部で行います。

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> 注: ここでは簡潔さのために `popstate` イベントハンドラを宣言するために [アロー関数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) を使用していますが、通常の関数でも同じように動作します。

これは、アロー関数についてのリフレッシュビデオです。

[![Arrow Functions](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Arrow Functions")

今度はブラウザの戻るボタンと進むボタンを使ってみて、今回表示されたルートが正しく更新されているかどうかを確認してみてください。

---

## 🚀 チャレンジ

このアプリのクレジットを表示する3ページ目のテンプレートとルートを追加します。

## レッスン後の小テスト

[レッスン後の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/42?loc=ja)

## 復習と自己学習

ルーティングは Web 開発の驚くほどトリッキーな部分の1つで、特に Web がページ更新の動作からシングルページアプリケーションのページ更新へと移行するにつれ、そのような部分が増えてきています。[Azure Static Web Apps プレビューでのルート](https://docs.microsoft.com/ja-jp/azure/static-web-apps/routes?WT.mc_id=academic-13441-cxa)がルーティングを扱うことについて少し読んでみてください。そのドキュメントに記載されているいくつかの決定が必要な理由を説明できますか？

## 課題

[ルーティングの改善](assignment.ja.md)
