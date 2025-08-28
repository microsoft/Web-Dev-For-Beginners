<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4fa20c513e367e9cdd401bf49ae16e33",
  "translation_date": "2025-08-24T00:13:27+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "ja"
}
-->
# 銀行アプリを作る Part 4: 状態管理の概念

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/47)

### はじめに

ウェブアプリケーションが成長するにつれて、すべてのデータフローを追跡するのが難しくなります。どのコードがデータを取得し、どのページがそれを使用し、どこでいつ更新が必要なのか...コードが散らかり、保守が難しくなるのは簡単です。特に、アプリの異なるページ間でデータを共有する必要がある場合（例えば、ユーザーデータ）にこの問題は顕著です。*状態管理*の概念は、あらゆる種類のプログラムにおいて常に存在していましたが、ウェブアプリがますます複雑化する中で、開発中に考慮すべき重要なポイントとなっています。

この最終パートでは、これまでに作成したアプリを見直し、状態管理を再考します。これにより、ブラウザのリフレッシュをサポートし、ユーザーセッション間でデータを永続化できるようにします。

### 前提条件

このレッスンのために、ウェブアプリの[データ取得](../3-data/README.md)パートを完了している必要があります。また、[Node.js](https://nodejs.org)をインストールし、[サーバーAPI](../api/README.md)をローカルで実行してアカウントデータを管理できるようにする必要があります。

サーバーが正しく動作しているかどうかは、ターミナルで以下のコマンドを実行して確認できます。

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## 状態管理を再考する

[前回のレッスン](../3-data/README.md)では、現在ログインしているユーザーの銀行データを含むグローバル変数`account`を使用して、アプリ内での基本的な状態の概念を紹介しました。しかし、現在の実装にはいくつかの欠点があります。ダッシュボードページでページをリフレッシュしてみてください。何が起こりますか？

現在のコードには3つの問題があります：

- 状態が永続化されていないため、ブラウザをリフレッシュするとログインページに戻ってしまいます。
- 状態を変更する関数が複数あり、アプリが成長するにつれて変更を追跡するのが難しくなり、更新を忘れることが容易になります。
- 状態がクリアされないため、*ログアウト*をクリックしても、ログインページにいる間もアカウントデータが残っています。

これらの問題に1つずつ対処するようにコードを更新することもできますが、それではコードの重複が増え、アプリがより複雑で保守が難しくなります。あるいは、数分間立ち止まって戦略を再考することもできます。

> ここで本当に解決しようとしている問題は何でしょうか？

[状態管理](https://en.wikipedia.org/wiki/State_management)とは、以下の2つの特定の問題を解決するための良いアプローチを見つけることです：

- アプリ内のデータフローを理解しやすくするにはどうすればよいか？
- 状態データを常にユーザーインターフェースと同期させるにはどうすればよいか（その逆も）？

これらの問題に対処すれば、他の問題もすでに解決されているか、解決が容易になっている可能性があります。これらの問題を解決するためのアプローチは多数ありますが、ここでは**データとその変更方法を中央集約化する**という一般的な解決策を採用します。データフローは以下のようになります：

![HTML、ユーザーアクション、状態間のデータフローを示すスキーマ](../../../../7-bank-project/4-state-management/images/data-flow.png)

> データが自動的にビューを更新する部分については、[リアクティブプログラミング](https://en.wikipedia.org/wiki/Reactive_programming)のより高度な概念に関連しているため、ここでは取り上げません。深く掘り下げたい場合には良いフォローアップのテーマです。

✅ 状態管理にはさまざまなアプローチを持つ多くのライブラリがありますが、[Redux](https://redux.js.org)はその中でも人気のある選択肢です。使用されている概念やパターンを調べてみてください。大規模なウェブアプリで直面する可能性のある問題や、それをどのように解決できるかを学ぶ良い方法です。

### タスク

まずは少しリファクタリングを行います。`account`の宣言を以下のように置き換えます：

```js
let account = null;
```

以下に置き換えます：

```js
let state = {
  account: null
};
```

このアイデアは、アプリのすべてのデータを単一の状態オブジェクトに*中央集約化*することです。現在のところ状態には`account`しかありませんが、これにより将来の拡張が可能になります。

また、これを使用する関数も更新する必要があります。`register()`および`login()`関数では、`account = ...`を`state.account = ...`に置き換えます。

`updateDashboard()`関数の冒頭に以下の行を追加します：

```js
const account = state.account;
```

このリファクタリング自体は大きな改善をもたらしませんが、次の変更の基盤を築くことが目的です。

## データ変更の追跡

`state`オブジェクトをデータの保存に使用するようにしたので、次のステップは更新を中央集約化することです。これにより、変更内容とそのタイミングを追跡しやすくなります。

`state`オブジェクトに変更を加えないようにするために、それを[*不変*](https://en.wikipedia.org/wiki/Immutable_object)と見なすのも良いプラクティスです。つまり、全く変更できないということです。これにより、状態オブジェクトに何かを変更したい場合は新しい状態オブジェクトを作成する必要があります。この方法を採用することで、意図しない[*副作用*](https://en.wikipedia.org/wiki/Side_effect_(computer_science))を防ぐ保護が構築され、アプリに新しい機能（例えば、元に戻す/やり直しの実装）を追加する可能性が開かれます。また、デバッグが容易になります。例えば、状態に加えられたすべての変更をログに記録し、変更履歴を保持することで、バグの原因を理解することができます。

JavaScriptでは、[`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)を使用してオブジェクトの不変バージョンを作成できます。不変オブジェクトに変更を加えようとすると、例外が発生します。

✅ *浅い*不変オブジェクトと*深い*不変オブジェクトの違いを知っていますか？[こちら](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze)で読むことができます。

### タスク

新しい`updateState()`関数を作成します：

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

この関数では、新しい状態オブジェクトを作成し、[*スプレッド演算子*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals)を使用して前の状態からデータをコピーします。その後、[ブラケット記法](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties)を使用して状態オブジェクトの特定のプロパティを新しいデータで上書きします。最後に、`Object.freeze()`を使用してオブジェクトをロックし、変更を防ぎます。現在のところ状態には`account`プロパティしか保存されていませんが、このアプローチを使用すれば、状態に必要なプロパティをいくつでも追加できます。

また、初期状態が凍結されていることを確認するために、`state`の初期化を更新します：

```js
let state = Object.freeze({
  account: null
});
```

その後、`register`関数を更新し、`state.account = result;`の代わりに以下を使用します：

```js
updateState('account', result);
```

同様に、`login`関数では`state.account = data;`を以下に置き換えます：

```js
updateState('account', data);
```

次に、ユーザーが*ログアウト*をクリックしたときにアカウントデータがクリアされない問題を修正します。

新しい関数`logout()`を作成します：

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

`updateDashboard()`では、リダイレクト`return navigate('/login');`を`return logout();`に置き換えます。

新しいアカウントを登録し、ログアウトして再度ログインして、すべてが正しく動作することを確認してください。

> ヒント：ブラウザの開発ツールでコンソールを開き、`updateState()`の末尾に`console.log(state)`を追加することで、すべての状態変更を確認できます。

## 状態を永続化する

ほとんどのウェブアプリは、正しく動作するためにデータを永続化する必要があります。すべての重要なデータは通常、データベースに保存され、サーバーAPIを介してアクセスされます。例えば、今回のケースではユーザーアカウントデータが該当します。しかし、ブラウザで実行されているクライアントアプリにデータを永続化することも、ユーザーエクスペリエンスを向上させたり、読み込みパフォーマンスを改善したりするために興味深い場合があります。

ブラウザ内でデータを永続化したい場合、以下のような重要な質問を自分に問いかけるべきです：

- *データは機密性が高いか？* クライアントにユーザーパスワードなどの機密データを保存するのは避けるべきです。
- *このデータをどのくらいの期間保持する必要があるか？* このデータを現在のセッションでのみアクセスする予定なのか、それとも永続的に保存したいのか？

ウェブアプリ内で情報を保存する方法は、達成したいことに応じてさまざまです。例えば、検索クエリをURLに保存して、他のユーザーと共有可能にすることができます。また、[HTTPクッキー](https://developer.mozilla.org/docs/Web/HTTP/Cookies)を使用して、認証情報のようにサーバーと共有する必要があるデータを保存することもできます。

もう1つのオプションは、データを保存するためのブラウザAPIの1つを使用することです。その中でも特に興味深いのは以下の2つです：

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)：現在のウェブサイトに特化したデータを異なるセッション間で永続化するための[キー/値ストア](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)。保存されたデータは期限切れになりません。
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)：`localStorage`と同じように動作しますが、保存されたデータはセッションが終了すると（ブラウザが閉じられると）クリアされます。

これらのAPIはどちらも[文字列](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)のみを保存できることに注意してください。複雑なオブジェクトを保存したい場合は、[`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)を使用して[JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)形式にシリアライズする必要があります。

✅ サーバーを使用しないウェブアプリを作成したい場合、[`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API)を使用してクライアント側にデータベースを作成することも可能です。これは高度なユースケースや大量のデータを保存する必要がある場合に予約されていますが、使用するのはより複雑です。

### タスク

ユーザーが*ログアウト*ボタンを明示的にクリックするまでログイン状態を維持したいので、`localStorage`を使用してアカウントデータを保存します。まず、データを保存するために使用するキーを定義します。

```js
const storageKey = 'savedAccount';
```

次に、`updateState()`関数の末尾に以下の行を追加します：

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

これにより、ユーザーアカウントデータが永続化され、以前に中央集約化したすべての状態更新のおかげで常に最新の状態になります。この時点で、これまでのリファクタリングの恩恵を受け始めています🙂。

データが保存されるので、アプリが読み込まれたときにそれを復元することも必要です。初期化コードが増え始めるので、`app.js`の末尾にあった以前のコードを含む新しい`init`関数を作成するのが良いアイデアかもしれません：

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

ここでは保存されたデータを取得し、もしあれば状態をそれに応じて更新します。ページ更新中に状態に依存するコードがある可能性があるため、ルートを更新する*前*にこれを行うことが重要です。

また、アカウントデータを永続化するようになったので、*ダッシュボード*ページをアプリケーションのデフォルトページにすることもできます。データが見つからない場合、ダッシュボードはログインページにリダイレクトする処理を行います。`updateRoute()`では、フォールバックの`return navigate('/login');`を`return navigate('/dashboard');`に置き換えます。

アプリにログインしてページをリフレッシュしてみてください。ダッシュボードに留まるはずです。この更新により、すべての初期問題に対処しました...

## データをリフレッシュする

...しかし、新しい問題を作り出してしまったかもしれません。おっと！

`test`アカウントを使用してダッシュボードに移動し、次に以下のコマンドをターミナルで実行して新しいトランザクションを作成します：

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

その後、ブラウザでダッシュボードページをリフレッシュしてみてください。何が起こりますか？新しいトランザクションが表示されますか？

状態は`localStorage`のおかげで無期限に永続化されますが、それはログアウトして再度ログインするまで更新されないことも意味します！

これを修正する1つの戦略は、ダッシュボードが読み込まれるたびにアカウントデータを再読み込みすることです。これにより、古いデータを回避できます。

### タスク

新しい関数`updateAccountData`を作成します：

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

このメソッドは、現在ログインしていることを確認し、サーバーからアカウントデータを再読み込みします。

次に、`refresh`という名前の別の関数を作成します：

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

この関数はアカウントデータを更新し、その後ダッシュボードページのHTMLを更新します。これは、ダッシュボードルートが読み込まれたときに呼び出す必要があります。ルート定義を以下のように更新します：

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

これでダッシュボードをリロードしてみてください。更新されたアカウントデータが表示されるはずです。

---

## 🚀 チャレンジ

ダッシュボードが読み込まれるたびにアカウントデータを再読み込みするようになった今、*すべてのアカウントデータ*を永続化する必要がまだあると思いますか？

アプリが動作するために絶対に必要なものだけを`localStorage`に保存および読み込むように変更してみてください。
[講義後のクイズ](https://ff-quizzes.netlify.app/web/quiz/48)

## 課題

[「取引を追加」ダイアログを実装する](assignment.md)

課題を完了した後の例はこちらです:

![「取引を追加」ダイアログの例を示すスクリーンショット](../../../../7-bank-project/4-state-management/images/dialog.png)

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解について、当社は責任を負いません。