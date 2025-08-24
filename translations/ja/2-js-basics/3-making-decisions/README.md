<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "888609c48329c280ca2477d2df40f2e5",
  "translation_date": "2025-08-23T22:38:38+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "ja"
}
-->
# JavaScriptの基本: 判断を行う

![JavaScript Basics - Making decisions](../../../../sketchnotes/webdev101-js-decisions.png)

> スケッチノート: [Tomomi Imura](https://twitter.com/girlie_mac)

## 講義前のクイズ

[講義前のクイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/11)

判断を行い、コードの実行順序を制御することで、コードを再利用可能で堅牢なものにすることができます。このセクションでは、JavaScriptでデータフローを制御するための構文と、Booleanデータ型と組み合わせた際の重要性について説明します。

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

> 🎥 上の画像をクリックすると、判断を行う方法についての動画が再生されます。

> このレッスンは[Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)で受講できます！

## Booleanの簡単な復習

Booleanは`true`または`false`の2つの値しか持ちません。Booleanは、特定の条件が満たされた場合にどのコード行を実行するかを判断するのに役立ちます。

Booleanを`true`または`false`に設定するには、以下のように記述します:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Booleanは、イギリスの数学者、哲学者、論理学者であるジョージ・ブール（1815–1864）にちなんで名付けられました。

## 比較演算子とBoolean

演算子は条件を評価し、Boolean値を生成するために使用されます。以下はよく使用される演算子の一覧です。

| 記号   | 説明                                                                                                                                                   | 例                  |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| `<`    | **より小さい**: 2つの値を比較し、左側の値が右側より小さい場合に`true`を返します                                                                       | `5 < 6 // true`     |
| `<=`   | **以下**: 2つの値を比較し、左側の値が右側以下の場合に`true`を返します                                                                                | `5 <= 6 // true`    |
| `>`    | **より大きい**: 2つの値を比較し、左側の値が右側より大きい場合に`true`を返します                                                                       | `5 > 6 // false`    |
| `>=`   | **以上**: 2つの値を比較し、左側の値が右側以上の場合に`true`を返します                                                                                | `5 >= 6 // false`   |
| `===`  | **厳密な等価性**: 2つの値を比較し、値が等しく、かつデータ型も同じ場合に`true`を返します                                                              | `5 === 6 // false`  |
| `!==`  | **不等価性**: 2つの値を比較し、厳密な等価性演算子が返す値の逆を返します                                                                             | `5 !== 6 // true`   |

✅ ブラウザのコンソールでいくつかの比較を書いてみて、返されるデータに驚くことがあるか確認してください。

## If文

If文は、条件が`true`の場合にブロック内のコードを実行します。

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

論理演算子は、条件を形成するためによく使用されます。

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else文

`else`文は、条件が`false`の場合にブロック内のコードを実行します。`if`文と組み合わせて使用することができますが、必須ではありません。

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ このコードと以下のコードをブラウザのコンソールで実行して理解を深めてください。`currentMoney`と`laptopPrice`変数の値を変更して、`console.log()`の結果を変えてみましょう。

## Switch文

`switch`文は、異なる条件に基づいて異なるアクションを実行するために使用されます。`switch`文を使用して、実行するコードブロックを選択します。

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ このコードと以下のコードをブラウザのコンソールで実行して理解を深めてください。変数`a`の値を変更して、`console.log()`の結果を変えてみましょう。

## 論理演算子とBoolean

判断には複数の比較が必要な場合があり、論理演算子を使ってBoolean値を生成することができます。

| 記号   | 説明                                                                                     | 例                                                                         |
| ------ | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `&&`   | **論理AND**: 2つのBoolean式を比較します。両方が`true`の場合にのみ`true`を返します         | `(5 > 6) && (5 < 6 ) //片方はfalse、もう片方はtrue。結果はfalse`           |
| `\|\|` | **論理OR**: 2つのBoolean式を比較します。少なくとも片方が`true`の場合に`true`を返します    | `(5 > 6) \|\| (5 < 6) //片方はfalse、もう片方はtrue。結果はtrue`          |
| `!`    | **論理NOT**: Boolean式の値を反転して返します                                              | `!(5 > 6) // 5は6より大きくないが、"!"はtrueを返します`                    |

## 論理演算子を使った条件と判断

論理演算子は、if..else文の条件を形成するために使用できます。

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### 否定演算子

これまでに`if...else`文を使って条件付きロジックを作成する方法を見てきました。`if`に入るものはすべて`true`または`false`に評価される必要があります。`!`演算子を使用することで、式を反転（否定）することができます。以下のように記述します:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### 三項演算子

`if...else`は判断ロジックを表現する唯一の方法ではありません。三項演算子と呼ばれるものを使用することもできます。その構文は以下のようになります:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

以下はより具体的な例です:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ このコードを数回読んでみてください。これらの演算子がどのように動作しているか理解できますか？

上記のコードは以下を意味します:

- `firstNumber`が`secondNumber`より大きい場合
- `firstNumber`を`biggestNumber`に代入する
- そうでない場合は`secondNumber`を代入する

三項演算子は以下のコードを簡潔に書く方法です:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 チャレンジ

まず論理演算子を使ってプログラムを書き、その後三項演算子を使って書き直してください。どちらの構文が好みですか？

---

## 講義後のクイズ

[講義後のクイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/12)

## 復習と自己学習

利用可能な多くの演算子についてさらに学ぶには、[MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators)を参照してください。

Josh Comeauの素晴らしい[演算子検索ツール](https://joshwcomeau.com/operator-lookup/)を試してみてください！

## 課題

[Operators](assignment.md)

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を期すよう努めておりますが、自動翻訳には誤りや不正確さが含まれる可能性があります。元の言語で記載された原文が公式な情報源と見なされるべきです。重要な情報については、専門の人間による翻訳をお勧めします。本翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。