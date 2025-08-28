<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-28T17:54:32+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "ja"
}
-->
# JavaScriptの基本: メソッドと関数

![JavaScript Basics - Functions](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.ja.png)
> スケッチノート: [Tomomi Imura](https://twitter.com/girlie_mac)

## 講義前のクイズ
[講義前のクイズ](https://ff-quizzes.netlify.app)

コードを書くとき、常にコードが読みやすいことを心がける必要があります。一見矛盾しているように思えるかもしれませんが、コードは書かれる回数よりも読む回数の方が圧倒的に多いのです。開発者がメンテナンスしやすいコードを書くための重要なツールの1つが**関数**です。

[![Methods and Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

> 🎥 上の画像をクリックすると、メソッドと関数に関する動画が視聴できます。

> このレッスンは[Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)で受講できます！

## 関数

関数の基本は、必要に応じて実行できるコードのブロックです。同じタスクを何度も実行する必要がある場合に最適です。ロジックを複数の場所に重複させるのではなく（後で更新が必要になったときに困難になります）、1つの場所に集中させて必要なときに呼び出すことができます。さらに、関数を他の関数から呼び出すことも可能です。

関数に名前を付けることも重要です。一見些細なことのように思えるかもしれませんが、名前はコードのセクションを簡単にドキュメント化する方法を提供します。ボタンのラベルのようなものだと考えることができます。「タイマーをキャンセル」と書かれたボタンをクリックすれば、時計の動作が停止することがわかります。

## 関数の作成と呼び出し

関数の構文は以下のようになります:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

挨拶を表示する関数を作成したい場合、次のようになります:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

関数を呼び出す（または実行する）場合は、関数名の後に`()`を付けます。関数は定義される前でも後でも呼び出すことができる点に注意してください。JavaScriptコンパイラが関数を見つけてくれます。

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** 特殊なタイプの関数として**メソッド**があります。実は、すでに使用しています！例えば、上記のデモで`console.log`を使用したときに見ました。メソッドと関数の違いは、メソッドがオブジェクト（この場合は`console`）に付属しているのに対し、関数は自由に存在する点です。多くの開発者がこれらの用語を同じ意味で使うことがあります。

### 関数のベストプラクティス

関数を作成する際に覚えておくべきベストプラクティスがいくつかあります:

- 常にわかりやすい名前を使い、関数が何をするのかを明確にする
- **camelCasing**を使用して単語を結合する
- 関数を特定のタスクに集中させる

## 関数に情報を渡す

関数をより再利用可能にするために、情報を渡すことがよくあります。上記の`displayGreeting`の例を考えると、**Hello, world!**しか表示しません。あまり役に立つ関数とは言えません。これを少し柔軟にして、挨拶する人の名前を指定できるようにするには、**パラメータ**を追加します。パラメータ（**引数**とも呼ばれることがあります）は、関数に送られる追加情報です。

パラメータは定義部分の括弧内に記載され、カンマで区切られます:

```javascript
function name(param, param2, param3) {

}
```

`displayGreeting`を更新して名前を受け取り、それを表示するようにします。

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

関数を呼び出してパラメータを渡したい場合は、括弧内に指定します。

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## デフォルト値

関数をさらに柔軟にするために、パラメータを増やすことができます。しかし、すべての値を指定する必要がない場合はどうすればよいでしょうか？挨拶の例を続けると、名前は必須（誰に挨拶するかを知る必要があります）ですが、挨拶自体は必要に応じてカスタマイズできるようにしたいです。カスタマイズしたくない場合は、代わりにデフォルト値を提供します。パラメータにデフォルト値を設定するには、変数に値を設定するのと同じ方法で行います - `parameterName = 'defaultValue'`。完全な例を以下に示します:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

関数を呼び出す際に、`salutation`の値を設定するかどうかを選択できます。

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## 戻り値

これまでに作成した関数は常に[console](https://developer.mozilla.org/docs/Web/API/console)に出力されます。これは、他のサービスを呼び出す関数を作成する場合にはまさに求めているものかもしれません。しかし、計算を行い、その値を返して他の場所で使用したい場合はどうすればよいでしょうか？

これを実現するには、**戻り値**を使用します。戻り値は関数によって返され、文字列や数値などのリテラル値と同じように変数に格納できます。

関数が何かを返す場合、キーワード`return`が使用されます。`return`キーワードは返される値や参照を期待します。以下のように:

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

この関数を呼び出す際には、値を変数に格納します。これは、静的な値（例えば`const name = 'Christopher'`）を変数に設定するのとほぼ同じ方法です。

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## 関数を関数のパラメータとして使用する

プログラミングのキャリアを進めるにつれて、関数をパラメータとして受け取る関数に出会うことがあります。この便利な技法は、何かが発生するタイミングや完了するタイミングがわからない場合に、応答として操作を実行する必要があるときによく使用されます。

例として、[setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)を考えてみましょう。これはタイマーを開始し、完了したときにコードを実行します。どのコードを実行するかを指定する必要があります。関数を使うのにぴったりの仕事ですね！

以下のコードを実行すると、3秒後に**3秒が経過しました**というメッセージが表示されます。

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### 無名関数

作成したコードをもう一度見てみましょう。一度だけ使用される名前付き関数を作成しています。アプリケーションが複雑になるにつれて、一度しか呼び出されない関数をたくさん作成することが予想されます。これは理想的ではありません。実は、名前を付ける必要がない場合もあります！

関数をパラメータとして渡す場合、事前に作成するのを省略し、パラメータの一部として作成することができます。同じ`function`キーワードを使用しますが、パラメータとして構築します。

上記のコードを無名関数を使用するように書き換えてみましょう:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

新しいコードを実行すると、同じ結果が得られることがわかります。関数を作成しましたが、名前を付ける必要はありませんでした！

### ファットアロー関数

多くのプログラミング言語（JavaScriptを含む）で一般的なショートカットとして、**アロー**または**ファットアロー**関数と呼ばれるものを使用することができます。これは`=>`という特別な記号を使用し、矢印のように見えるため、この名前が付けられています！`=>`を使用することで、`function`キーワードを省略できます。

もう一度コードを書き換えて、ファットアロー関数を使用してみましょう:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### 各戦略を使用するタイミング

関数をパラメータとして渡す方法を3つ見てきましたが、それぞれをいつ使用するべきか疑問に思うかもしれません。関数を複数回使用することがわかっている場合は、通常通り作成します。1つの場所でのみ使用する場合は、無名関数を使用するのが一般的に最適です。ファットアロー関数を使用するか、従来の`function`構文を使用するかはあなた次第ですが、ほとんどの現代の開発者は`=>`を好む傾向があります。

---

## 🚀 チャレンジ

関数とメソッドの違いを1文で説明できますか？挑戦してみてください！

## 講義後のクイズ
[講義後のクイズ](https://ff-quizzes.netlify.app)

## 復習と自己学習

[アロー関数についてもう少し読む](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)価値があります。コードベースでますます使用されるようになっています。関数を作成し、それをこの構文で書き換える練習をしてみてください。

## 課題

[関数で遊ぼう](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当方は責任を負いません。