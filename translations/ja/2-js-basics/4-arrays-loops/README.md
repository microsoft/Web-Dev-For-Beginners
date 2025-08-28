<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f7f87871312cf6cc12662da7d973182",
  "translation_date": "2025-08-23T22:44:45+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "ja"
}
-->
# JavaScript 基礎: 配列とループ

![JavaScript Basics - Arrays](../../../../sketchnotes/webdev101-js-arrays.png)
> スケッチノート: [Tomomi Imura](https://twitter.com/girlie_mac)

## 講義前クイズ
[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/13)

このレッスンでは、ウェブ上でインタラクティブ性を提供する言語であるJavaScriptの基礎を学びます。このレッスンでは、データを操作するために使用される配列とループについて学びます。

[![配列](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "配列")

[![ループ](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "ループ")

> 🎥 上記の画像をクリックすると、配列とループに関する動画が視聴できます。

> このレッスンは [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon) でも受講できます！

## 配列

データを扱うことはどのプログラミング言語でも一般的なタスクであり、配列のような構造化された形式でデータが整理されていると、作業がはるかに簡単になります。配列を使うと、リストのような構造でデータを保存できます。配列の大きな利点の1つは、1つの配列に異なる種類のデータを保存できることです。

✅ 配列は私たちの身の回りにたくさんあります！例えば、ソーラーパネルの配列のような実生活の例を思い浮かべられますか？

配列の構文は、角括弧のペアです。

```javascript
let myArray = [];
```

これは空の配列ですが、配列はデータをすでに格納した状態で宣言することもできます。配列内の複数の値はカンマで区切られます。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

配列の値には、**インデックス**と呼ばれる一意の値が割り当てられます。インデックスは配列の先頭からの距離に基づいて割り当てられる整数です。上記の例では、文字列値 "Chocolate" のインデックスは0で、"Rocky Road" のインデックスは4です。インデックスを角括弧とともに使用して、配列の値を取得、変更、または挿入できます。

✅ 配列がゼロインデックスから始まることに驚きましたか？一部のプログラミング言語では、インデックスは1から始まります。この歴史については、[Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering) で読むことができます。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

インデックスを利用して値を変更することもできます。例えば、次のようにします：

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

また、指定したインデックスに新しい値を挿入することもできます：

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ 配列に値を追加するより一般的な方法は、array.push() のような配列演算子を使用することです。

配列内の項目数を調べるには、`length` プロパティを使用します。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ 自分で試してみましょう！ブラウザのコンソールを使って、自分で作成した配列を操作してみてください。

## ループ

ループを使用すると、繰り返しまたは**反復的**なタスクを実行でき、時間とコードを大幅に節約できます。各反復では、変数、値、条件が異なる場合があります。JavaScriptにはさまざまな種類のループがあり、それぞれに小さな違いがありますが、本質的には同じことを行います：データをループすることです。

### Forループ

`for` ループは、反復するために次の3つの部分が必要です：
- `counter` 通常、反復回数を数えるために数値で初期化される変数
- `condition` 比較演算子を使用して、`false` になったときにループを停止させる式
- `iteration-expression` 各反復の最後に実行され、通常はカウンター値を変更するために使用される

```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ このコードをブラウザのコンソールで実行してみてください。カウンター、条件、または反復式を少し変更するとどうなりますか？逆方向に実行してカウントダウンを作成できますか？

### Whileループ

`for` ループの構文とは異なり、`while` ループは条件だけを必要とし、その条件が `false` になるとループが停止します。ループ内の条件は通常、カウンターのような他の値に依存し、ループ中に管理する必要があります。カウンターの初期値はループの外で作成する必要があり、条件を満たすための式（カウンターの変更を含む）はループ内で維持する必要があります。

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ なぜforループを選ぶのか、またはwhileループを選ぶのか？17,000人の視聴者がStackOverflowで同じ質問をしました。その意見のいくつかは[こちらで興味深く読めます](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript)。

## ループと配列

配列はループと一緒に使用されることが多いです。ほとんどの条件はループを停止するために配列の長さを必要とし、インデックスもカウンター値として使用できます。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ 自分で作成した配列をブラウザのコンソールでループしてみてください。

---

## 🚀 チャレンジ

forやwhileループ以外にも配列をループする方法があります。[forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)、[for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of)、[map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map) などです。これらの技術の1つを使って、配列ループを書き直してみましょう。

## 講義後クイズ
[講義後クイズ](https://ff-quizzes.netlify.app/web/quiz/14)

## 復習と自己学習

JavaScriptの配列には、データ操作に非常に便利な多くのメソッドが付属しています。[これらのメソッドについて調べる](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) とともに、（push、pop、slice、spliceなど）自分で作成した配列で試してみてください。

## 課題

[配列をループする](assignment.md)

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知おきください。元の言語で記載された文書が公式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。