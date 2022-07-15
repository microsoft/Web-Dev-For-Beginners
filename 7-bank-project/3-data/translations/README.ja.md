# バンキングアプリを作ろう その 3: データの取得と利用方法

## レッスン前の小テスト

[レッスン前の小テスト](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/45?loc=ja)

### イントロダクション

すべての Web アプリケーションの中核には、*データ*があります。データには様々な形がありますが、その主な目的は常にユーザーに情報を表示することです。Web アプリケーションがますますインタラクティブで複雑になってきているため、ユーザーがどのように情報にアクセスして対話するかは、現在では Web 開発の重要な部分となっています。

このレッスンでは、サーバーから非同期にデータを取得し、このデータを使用して HTML をリロードせずに Web ページに情報を表示する方法を見ていきます。

### 前提条件

このレッスンでは、Web アプリの[ログインと登録フォーム](../../2-forms/translations/README.ja.md)の部分をビルドしておく必要があります。また、アカウントデータを取得するためには、ローカルに [Node.js](https://nodejs.org) と [サーバー API を実行する](../../api/translations/README.ja.md)をインストールする必要があります。

ターミナルで以下のコマンドを実行することで、サーバーが正常に動作していることを確認できます。

```sh
curl http://localhost:5000/api
# -> 結果として "Bank API v1.0.0" を返す必要があります。
```

---

## AJAX とデータ取得

従来の Web サイトでは、ユーザーがリンクをクリックしたり、フォームを使用してデータを送信したりした際に、HTML ページ全体をリロードすることで表示されるコンテンツを更新しています。新しいデータの読み込みが必要になるたびに、Web サーバはブラウザで処理する必要のある新しい HTML ページを返し、現在のユーザのアクションを中断し、リロード中のインタラクションを制限します。このワークフローは、*マルチページアプリケーション* または *MPA* とも呼ばれます。

![複数ページのアプリケーションでワークフローを更新する](../images/mpa.png)

Web アプリケーションがより複雑でインタラクティブになり始めた頃、[AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming))と呼ばれる新しい技術が登場しました。この技術は、Web アプリケーションが HTML ページをリロードすることなく、JavaScript を使ってサーバーから非同期にデータを送受信することを可能にし、結果として、より高速な更新とよりスムーズなユーザーのインタラクションを実現します。サーバーから新しいデータを受信すると、[DOM](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model) API を使用して現在の HTML ページを JavaScript で更新することもできます。時間の経過とともに、このアプローチは現在では [*シングルページアプリケーション* または *SPA*](https://en.wikipedia.org/wiki/Single-page_application) と呼ばれているものへと発展してきました。

![シングルページアプリケーションでワークフローを更新](../images/spa.png)

AJAX が最初に導入されたとき、データを非同期で取得できる唯一の API は [`XMLHttpRequest`](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) でした。しかし、現在のブラウザはより便利で強力な [`Fetch` API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API) を実装しており、Promise を使用し、JSON データを操作するのに適しています。

> 最新のブラウザはすべて `Fetch API` をサポートしていますが、もしあなたの Web アプリケーションをレガシーブラウザや古いブラウザで動作させたいのであれば、最初に [caniuse.com の互換性テーブル](https://caniuse.com/fetch) をチェックするのが良いでしょう。

### タスク

[前回のレッスン](../../2-forms/translations/README.ja.md)では、アカウントを作成するための登録フォームを暗示しました。ここでは、既存のアカウントを使ってログインし、そのデータを取得するコードを追加します。`app.js` ファイルを開き、新しい `login` 関数を追加します。

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

ここではまずフォーム要素を `getElementById()` で取得し、入力からユーザ名を `loginForm.user.value` で取得します。すべてのフォームコントロールは、フォームのプロパティとしてその名前 (HTML では `name` 属性を使って設定されています) によってアクセスすることができます。

登録の際に行ったことと同様の方法で、フォームコントロールにアクセスすることができます。サーバーリクエストを実行するために別の関数を作成しますが、今回はアカウントデータを取得します。

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

ここでは `fetch` API を使ってサーバから非同期にデータを要求しますが、今回はデータを問い合わせるだけなので、呼び出す URL 以外の余分なパラメータは必要ありません。デフォルトでは、`fetch` は [`GET`](https://developer.mozilla.org/ja/docs/Web/HTTP/Methods/GET) HTTP リクエストを作成します。

✅ `encodeURIComponent()` は URL の特殊文字をエスケープする関数です。この関数を呼び出さずに URL の `user` の値を直接使うと、どのような問題が発生する可能性があるのでしょうか?

それでは、`login` 関数を `getAccount` を使うように更新してみましょう。

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

まず、`getAccount` は非同期関数なので、これを `await` キーワードにマッチさせてサーバの結果を待つ必要があります。他のサーバからのリクエストと同様に、エラーが発生した場合にも対処しなければなりません。今のところ、エラーを表示するためのログメッセージを追加して、それをレイヤーに戻すだけです。

その後、データをどこかに保存しておく必要があるので、後でダッシュボードの情報を表示するためにデータを使用することができます。変数 `account` はまだ存在しないので、ファイルの先頭にグローバル変数を作成します。

```js
let account = null;
```

ユーザデータが変数に保存された後、既に持っている `navigate()` 関数を使って *ログイン* ページから *ダッシュボード* に移動することができます。

最後に、HTML を修正してログインフォームが送信されたときに `login` 関数を呼び出す必要があります。

```html
<form id="loginForm" action="javascript:login()">
```

すべてが正しく動作していることをテストします。新しいアカウントを登録して、同じアカウントを使ってログインしようとすることで、`register` 関数を完成させることができます。

次の部分に移る前に、関数の下部にこれを追加することで `register` 関数を完成させることもできます。

```js
account = result;
navigate('/dashboard');
```

✅ デフォルトでは、閲覧している Web ページよりも*同じドメインとポート*からしかサーバー API を呼び出すことができないことをご存知でしょうか? これはブラウザによって強制されたセキュリティメカニズムです。しかし待ってください、私たちの Web アプリは `localhost:3000` で動作していますが、サーバー API は `localhost:5000` で動作しています。[Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/ja/docs/Web/HTTP/CORS)と呼ばれる技術を使用することで、サーバーがレスポンスに特殊なヘッダを追加し、特定のドメインの例外を許可することで、クロスオリジンの HTTP リクエストを実行することが可能になります。

## データを表示するために HTML を更新する

ユーザーデータが手に入ったので、それを表示するために既存の HTML を更新しなければなりません。DOM から要素を取得する方法は既に知っていますが、例として `document.getElementById()` を使用します。ベースとなる要素ができたら、それを修正したり、子要素を追加したりするために使えるAPIをいくつか紹介します。

- 要素のテキストを変更するには、[`textContent`](https://developer.mozilla.org/ja/docs/Web/API/Node/textContent)プロパティを使用します。この値を変更すると、(あれば) すべての要素の子要素が削除され、提供されたテキストに置き換えられることに注意してください。このように、与えられた要素に空の文字列 `''` を代入することで、与えられた要素のすべての子を削除する効率的な方法でもあります。

- [`document.createElement()`](https://developer.mozilla.org/ja/docs/Web/API/Document/createElement) と [`append()`](https://developer.mozilla.org/ja/docs/Web/API/ParentNode/append) メソッドを使用すると、1つ以上の新しい子要素を作成して添付することができます

✅ 要素の [`innerHTML`](https://developer.mozilla.org/ja/docs/Web/API/Element/innerHTML) プロパティを使用して HTML の内容を変更することも可能ですが、これは [クロスサイトスクリプティング (XSS)](https://developer.mozilla.org/ja/docs/Glossary/Cross-site_scripting) 攻撃に対して脆弱なので避けるべきです。

### タスク

ダッシュボード画面に移る前に、*ログイン* ページでもう一つやるべきことがあります。現在、存在しないユーザ名でログインしようとすると、コンソールにメッセージが表示されますが、通常のユーザの場合は何も変わらず、何が起こっているのかわかりません。

必要に応じてエラーメッセージを表示できるように、ログインフォームにプレースホルダ要素を追加してみましょう。良い場所はログインの直前の `<button>` です。

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

この `<div>` 要素は空で、コンテンツを追加するまで何も表示されません。また、JavaScript で簡単に取得できるように `id` を与えています。

ファイル `app.js` に戻り、新しいヘルパー関数 `updateElement` を作成します。

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

これは非常に簡単で、要素 *id* と *text* が与えられると、一致する `id` で DOM 要素のテキスト内容を更新します。このメソッドを `login` 関数の先ほどのエラーメッセージの代わりに使ってみましょう。

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

無効なアカウントでログインしようとすると、このように表示されるはずです。

![ログイン中に表示されるエラーメッセージを示すスクリーンショット](../images/login-error.png)

これで、視覚的にはエラーテキストが表示されるようになりましたが、スクリーンリーダーで試してみると、何もアナウンスされないことに気づくでしょう。ページに動的に追加されたテキストをスクリーンリーダーでアナウンスするには、[ライブリージョン](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) と呼ばれるものを使用する必要があります。ここでは、アラートと呼ばれる特定のタイプのライブリージョンを使用するつもりです。

```html
<div id="loginError" role="alert"></div>
```

`register` 関数のエラーに対しても同様の動作を実装する (HTML の更新を忘れずに)。

## ダッシュボードに情報を表示する

先ほど見たのと同じテクニックを使って、ダッシュボード・ページにアカウント情報を表示してみましょう。

サーバから受け取ったアカウントオブジェクトはこんな感じです。

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> 注: 生活を楽にするためには、すでにデータが登録されている `test` アカウントを使用することができます。

### タスク

まずは HTML の「バランス」の部分を置き換えてプレースホルダ要素を追加してみましょう。

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

また、アカウントの説明を表示するためのセクションをすぐ下に追加します。

```html
<h2 id="description"></h2>
```

✅ アカウントの説明は、その下にあるコンテンツのタイトルとして機能するため、意味的には見出しとしてマークアップされます。アクセシビリティにとって[見出し構造](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility)がどのように重要であるかについて詳しく知り、他に何が見出しになり得るかを判断するためにページを批判的に見てみましょう。

次に、プレースホルダを埋めるための新しい関数を `app.js` に作成します。

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

まず、先に進む前に必要なアカウントデータがあることを確認します。次に、先ほど作成した `updateElement()` 関数を使って HTML を更新します。

> 残高表示をよりきれいにするために、メソッド [`toFixed(2)`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) を使用して、小数点以下2桁の値を強制的に表示します。

これで、ダッシュボードがロードされるたびに `updateDashboard()` 関数を呼び出す必要があります。既に [レッスン1の課題](../../1-template-route/translations/README.ja.md) を終了している場合は簡単ですが、そうでない場合は以下の実装を使用することができます。

このコードを `updateRoute()` 関数の最後に追加します。

```js
if (typeof route.init === 'function') {
  route.init();
}
```

ルート定義を更新します。

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

この変更により、ダッシュボードページが表示されるたびに関数 `updateDashboard()` が呼び出されるようになりました。ログインすると、アカウントの残高、通貨、説明が表示されるようになります。

## HTML テンプレートを使用してテーブルの行を動的に作成

[最初のレッスン](../../1-template-route/translations/README.ja.md)では、アプリのナビゲーションを実装するために HTML テンプレートを [`appendChild()`](https://developer.mozilla.org/ja/docs/Web/API/Node/appendChild) メソッドと一緒に使用しました。テンプレートは小さくして、ページの繰り返し部分を動的に埋め込むために使用することもできます。

同様のアプローチを使用して、HTML テーブルにトランザクションのリストを表示します。

### タスク

HTML `<body>` に新しいテンプレートを追加します。

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

このテンプレートは1つのテーブル行を表し、3つのカラムを入力します。*日付*、*オブジェクト*、トランザクションの*金額*です。

次に、この `id` プロパティをダッシュボードテンプレート内のテーブルの `<tbody>` 要素に追加すると、JavaScript を使って見つけやすくなります。

```html
<tbody id="transactions"></tbody>
```

HTML の準備ができたので、JavaScript のコードに切り替えて新しい関数 `createTransactionRow` を作成しましょう。

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

この関数はその名前が示す通りのことを行います。先ほど作成したテンプレートを使って新しいテーブルの行を作成し、トランザクションデータを使ってその内容を埋めます。先ほど作成したテンプレートを使って新しいテーブル行を作成し、トランザクションデータを使って内容を埋めます。

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

ここでは [`document.createDocumentFragment()`](https://developer.mozilla.org/ja/docs/Web/API/Document/createDocumentFragment) というメソッドを使用しています。これは新しい DOM フラグメントを作成し、その上で作業を行い、最終的にそれを HTML テーブルにアタッチする前のものです。

このコードが動作する前に、もう一つやらなければならないことがあります。というのは、現在のところ `updateElement()` 関数はテキストコンテンツのみをサポートしているからです。コードを少し変更してみましょう。

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

私たちは [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) メソッドを使用しています。これにより、テキストや [DOM Nodes](https://developer.mozilla.org/ja/docs/Web/API/Node) を親要素にアタッチすることができ、すべてのユースケースに最適です。

`test` アカウントを使ってログインしてみると、ダッシュボード上にトランザクションリストが表示されるはずです 🎉。

---

## 🚀 チャレンジ

ダッシュボードページを実際の銀行アプリのように見せるために一緒に作業しましょう。すでにアプリのスタイルを設定している場合は、[メディアクエリ](https://developer.mozilla.org/ja/docs/Web/CSS/Media_queries)を使用して、デスクトップとモバイルデバイスの両方でうまく機能する[レスポンシブデザイン](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)を作成してみてください。

ダッシュボードページのスタイリング例です。

![スタイリング後のダッシュボードの結果例のスクリーンショット](../../images/screen2.png)

## レッスン後の小テスト

[レッスン後の小テスト](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/46?loc=ja)

## 課題

[コードのリファクタとコメント](assignment.ja.md)
