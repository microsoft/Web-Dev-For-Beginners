# JavaScript の基本: 配列とループ

![JavaScript Basics - Arrays](/sketchnotes/webdev101-js-arrays.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## レッスン前の小テスト
[レッスン前の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/13?loc=ja)

このレッスンでは、Web 上でインタラクティブな機能を提供する言語である JavaScript の基礎を学びます。このレッスンでは、データを操作するために使用される配列とループについて学びます。


[![Array](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Array")
[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")


## 配列

データを扱うのはどの言語でも共通の作業ですが、データが配列のような構造的な形式で整理されている場合は、より簡単な作業となります。配列では、データはリストに似た構造で保存されます。配列の大きな利点の1つは、1つの配列に異なるタイプのデータを格納できることです。

✅ 配列は身近なところにある!? 太陽光パネルの配列など、実際の配列の例を思い浮かべることができますか？

配列の構文は角括弧のペアです。

```javascript
let myArray = [];
```

これは空の配列ですが、配列はすでにデータを埋めた状態で宣言することができます。配列内の複数の値はカンマで区切られます。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

配列の値には、**インデックス** と呼ばれる一意の値が割り当てられ、配列の先頭からの距離に基づいて整数が割り当てられます。上の例では、文字列の値 "Chocolate" のインデックスは 0 で、"Rocky Road" のインデックスは 4 です。 配列の値を取得、変更、挿入するには、角括弧付きのインデックスを使用します。

✅ 配列のインデックスが 0 から始まるのは驚きですか？いくつかのプログラミング言語では、インデックスは1から始まります。これには興味深い歴史があり、[ウィキペディア](https://en.wikipedia.org/wiki/Zero-based_numbering) で読むことができます。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

このように、インデックスにレバレッジをかけて値を変更することができます。

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //"Rocky Road" を "Butter Pecan" に変更
```

そして、このように与えられたインデックスに新しい値を挿入することができます。

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //"Cookie Dough" を追加しました。
```

✅ 値を配列にプッシュするより一般的な方法は、 array.push() のような配列演算子を使用することです。

配列の中に何個の項目があるかを調べるには、`length` プロパティを使用します。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ 自分で試してみましょう。ブラウザのコンソールを使って、自分で作成した配列を作成して操作してみましょう。

## ループ

ループは、反復または**イテレーション**のタスクを可能にし、多くの時間とコードを節約することができます。各反復は、その変数、値、条件を変えることができます。JavaScript には異なるタイプのループがあり、小さな違いはありますが、基本的には同じことをします。

### For ループ

`for`ループは反復するために3つの部分を必要とする。
    - `counter` 典型的には反復回数をカウントする数値で初期化される変数
    - `condition` 比較演算子を用いて、`false` のときにループを停止させる式
    - `iteration-expression` 各反復の最後に実行され，通常はカウンタの値を変更するために使用されます
  
```javascript
// 10までカウントアップ
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ このコードをブラウザのコンソールで実行してください。カウンタ、条件、反復式に小さな変更を加えるとどうなりますか？カウントダウンを作成して逆走させることはできますか？

### While ループ

`for` ループの構文とは異なり、`while` ループは `false` のときにループを停止する条件を必要とするだけです。ループ内の条件は通常、カウンタのような他の値に依存しており、ループ中に管理しなければなりません。カウンタの開始値はループの外で作成しなければならず、カウンタの変更を含めて条件を満たすための式はすべてループ内で維持しなければなりません。

```javascript
//10までカウントアップ
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ for loop と while loop のどちらかを選ぶ理由は何ですか? 同じ質問が StackOverflow で約2万回閲覧されていましたが、その意見の中には[あなたにとって興味深いものもあるかもしれません](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript)。

## ループと配列

ほとんどの条件がループを止めるために配列の長さを必要とし、インデックスはカウンタの値になることもあるため、配列はループと一緒によく使われます。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //すべてのフレーバーがプリントされた時点で終了
```

✅ ブラウザのコンソールで、自分で作った配列をループさせてみてください。

---

## 🚀 チャレンジ

配列をループする方法は for ループと while ループ以外にもあります。[forEach](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)、[for-of](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of)、[map](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) があります。これらのテクニックのいずれかを使って、配列のループを書き換えてください。

## レッスン後の小テスト
[レッスン後の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/14?loc=ja)


## 復習と自己学習

JavaScript の配列には多くのメソッドがあり、データ操作に非常に便利です。[これらのメソッドを読んでください](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)。そして、あなたが作成した配列でそれらのいくつか (push, pop, slice, splice など) を試してみてください。

## 課題

[配列のループ](assignment.ja.md)
