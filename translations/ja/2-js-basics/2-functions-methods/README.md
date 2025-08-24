<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-23T22:41:50+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "ja"
}
-->
# JavaScriptの基本: メソッドと関数

![JavaScript Basics - Functions](../../../../sketchnotes/webdev101-js-functions.png)
> スケッチノート: [Tomomi Imura](https://twitter.com/girlie_mac)

## 講義前クイズ
[講義前クイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

コードを書くとき、常にコードが読みやすいことを意識する必要があります。一見矛盾しているように思えるかもしれませんが、コードは書かれる回数よりも読む回数の方が圧倒的に多いのです。開発者がメンテナンスしやすいコードを書くための重要なツールの1つが**関数**です。

[![Methods and Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

> 🎥 上の画像をクリックすると、メソッドと関数に関する動画が視聴できます。

> このレッスンは[Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)でも受講できます！

## 関数

関数の基本は、必要に応じて実行できるコードのブロックです。同じタスクを何度も実行する必要がある場合に最適です。ロジックを複数の場所に重複して記述するのではなく（後で更新が難しくなります）、1か所に集中させて必要なときに呼び出すことができます。さらに、他の関数から関数を呼び出すことも可能です。

関数に名前を付けることも重要です。一見些細なことのように思えるかもしれませんが、名前を付けることでコードのセクションを簡単にドキュメント化できます。これはボタンにラベルを付けるようなものです。「タイマーをキャンセル」と書かれたボタンをクリックすれば、時計が停止することがわかります。

## 関数の作成と呼び出し

関数の構文は次のようになります：

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

例えば、挨拶を表示する関数を作成したい場合、次のようになります：

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

関数を呼び出す（または実行する）ときは、関数名の後に`()`を付けます。関数は定義される前でも後でも呼び出すことができる点に注目してください。JavaScriptのコンパイラがそれを見つけてくれます。

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** **メソッド**と呼ばれる特別な種類の関数があります。実は、すでに使っています！例えば、上記のデモで`console.log`を使用したときがそうです。メソッドと関数の違いは、メソッドがオブジェクト（この場合は`console`）に関連付けられているのに対し、関数は自由に存在する点です。多くの開発者がこれらの用語を混同して使うことがあります。

### 関数のベストプラクティス

関数を作成する際に覚えておくべきベストプラクティスがいくつかあります：

- 常にわかりやすい名前を付けて、関数が何をするのかを明確にする
- 複数の単語を組み合わせる場合は**キャメルケース**を使用する
- 関数は特定のタスクに集中させる

## 関数に情報を渡す

関数をより再利用可能にするために、情報を渡すことがよくあります。上記の`displayGreeting`の例を考えると、**Hello, world!**しか表示しません。これではあまり役に立つ関数とは言えません。例えば、挨拶する相手の名前を指定できるようにしたい場合、**パラメータ**を追加します。パラメータ（**引数**とも呼ばれることがあります）は、関数に送られる追加情報です。

パラメータは定義部分で括弧内にカンマ区切りで記述します：

```javascript
function name(param, param2, param3) {

}
```

`displayGreeting`を更新して名前を受け取り、それを表示するようにできます。

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

関数を呼び出してパラメータを渡すときは、括弧内に指定します。

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## デフォルト値

関数をさらに柔軟にするために、パラメータを増やすことができます。しかし、すべての値を必須にしたくない場合はどうすればよいでしょうか？挨拶の例を続けると、名前は必須（誰に挨拶するのかを知る必要があります）が、挨拶の内容はカスタマイズ可能にしたい場合があります。その場合、デフォルト値を提供します。パラメータにデフォルト値を設定するには、変数に値を設定するのと同じ方法で行います - `parameterName = 'defaultValue'`。完全な例を見てみましょう：

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

関数を呼び出すとき、`salutation`の値を設定するかどうかを選択できます。

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## 戻り値

これまでに作成した関数は常に[コンソール](https://developer.mozilla.org/docs/Web/API/console)に出力されます。これは、他のサービスを呼び出す関数を作成する場合には理想的です。しかし、計算を行い、その値を他の場所で使用するために返したい場合はどうすればよいでしょうか？

これを実現するには、**戻り値**を使用します。戻り値は関数から返され、文字列や数値のようなリテラル値と同じように変数に格納できます。

関数が何かを返す場合、`return`キーワードを使用します。`return`キーワードは返される値や参照を期待します：

```javascript
return myVariable;
```  

挨拶メッセージを作成してその値を呼び出し元に返す関数を作成できます。

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

この関数を呼び出すとき、その値を変数に格納します。これは、静的な値（例: `const name = 'Christopher'`）を変数に設定するのと同じ方法です。

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## 関数を関数のパラメータとして使用する

プログラミングのキャリアを進める中で、関数をパラメータとして受け取る関数に出会うことがあります。この便利なトリックは、何かがいつ発生するのか、または完了するのかがわからない場合に、何かに応答して操作を実行する必要があるときによく使われます。

例として、[setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)を考えてみましょう。これはタイマーを開始し、完了したときにコードを実行します。どのコードを実行するかを指定する必要があります。これは関数にぴったりの仕事です！

以下のコードを実行すると、3秒後に**3 seconds has elapsed**というメッセージが表示されます。

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### 無名関数

作成したコードをもう一度見てみましょう。一度だけ使用される名前付き関数を作成しています。アプリケーションが複雑になるにつれて、一度しか呼び出されない関数をたくさん作成することになるかもしれません。これは理想的ではありません。実は、名前を付ける必要がない場合もあります！

関数をパラメータとして渡す場合、事前に作成するのではなく、パラメータの一部として作成することができます。同じ`function`キーワードを使用しますが、パラメータとして構築します。

上記のコードを無名関数を使用するように書き換えてみましょう：

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

新しいコードを実行すると、同じ結果が得られることに気付くでしょう。関数を作成しましたが、名前を付ける必要はありませんでした！

### ファットアロー関数

多くのプログラミング言語（JavaScriptを含む）で一般的なショートカットとして、**アロー関数**または**ファットアロー関数**と呼ばれるものがあります。これは`=>`という特別な記号を使用します。この記号が矢印のように見えるため、この名前が付けられています！`=>`を使用することで、`function`キーワードを省略できます。

もう一度コードを書き換えて、ファットアロー関数を使用してみましょう：

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### 各戦略を使うタイミング

関数をパラメータとして渡す方法を3つ見てきましたが、それぞれをいつ使うべきか疑問に思うかもしれません。関数を複数回使用することがわかっている場合は、通常通り作成します。1か所でしか使用しない場合は、無名関数を使用するのが一般的です。ファットアロー関数を使うか、従来の`function`構文を使うかは好みの問題ですが、ほとんどの現代の開発者は`=>`を好む傾向があります。

---

## 🚀 チャレンジ

関数とメソッドの違いを1文で説明できますか？挑戦してみてください！

## 講義後クイズ
[講義後クイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## 復習と自己学習

[アロー関数についてもう少し読む](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)価値があります。コードベースでますます使用されるようになっています。関数を1つ書いてみて、その後この構文で書き直してみてください。

## 課題

[Fun with Functions](assignment.md)

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を期すよう努めておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された原文が正式な情報源と見なされるべきです。重要な情報については、専門の人間による翻訳を推奨します。本翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。