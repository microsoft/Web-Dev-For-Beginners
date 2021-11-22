# JavaScript の基本: 意思決定

![JavaScript Basics - Making decisions](/sketchnotes/webdev101-js-decisions.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## レッスン前の小テスト
[レッスン前の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/11?loc=ja)

意思決定を行い、コードの実行順序を制御することで、コードを再利用可能で堅牢なものにします。このセクションでは、JavaScript のデータフローを制御するための構文と、ブール値データ型で使用される場合の意味について説明します。

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

## ブール値の簡単なまとめ

ブール値は2つの値だけを持つことができます。`true` か `false` です。ブール値は、特定の条件が満たされたときにどの行のコードを実行するかを決定するのに役立ちます。

以下のように、ブール値を true か false に設定します:

`let myTrueBool = true`
`let myFalseBool = false`

✅ ブール値は、イギリスの数学者、哲学者、論理学者のジョージ・ブール (1815-1864) にちなんで名づけられました。

## 比較演算子とブール値

演算子は、ブール値を生成するような比較をして条件を評価するために使用されます。以下に、よく使われる演算子の一覧を示します。

| シンボル | 説明                                                                                                  | 例                 |
| -------- | ----------------------------------------------------------------------------------------------------- | ------------------ |
| `<`      | **小なり**: 2つの値を比較し、左側の値が右側の値よりも小さい場合は `true` のブール値を返します。       | `5 < 6 // true`    |
| `<=`     | **小なりイコール**: 2つの値を比較し、左側の値が右側の値以下の場合は `true` のブール値を返します。     | `5 <= 6 // true`   |
| `>`      | **大なり**: 2つの値を比較し、左側の値が右側の値よりも大きい場合は `true` のブール値を返します。       | `5 > 6 // false`   |
| `>=`     | **大なりイコール**: 2つの値を比較し、左辺の値が右辺の値以上の場合は `true` のブール値を返します。     | `5 >= 6 // false`  |
| `===`    | **同値**: 2つの値を比較し、右と左の値が等しく、かつ同じデータ型であれば `true` のブール値を返します。 | `5 === 6 // false` |
| `!==`    | **非同値**: 2つの値を比較し、厳密な平等演算子が返す値の反対のブール値を返します。                     | `5 !== 6 // true`  |

✅ ブラウザのコンソールに比較を書き込んで、自分の知識を確認してみてください。返ってきたデータに驚きはありませんか？

## If 文

if 文は、条件が true であればブロック間でコードを実行します。

```javascript
if (condition){
    //条件は true でした。このブロック内のコードが実行されます。
}
```

論理演算子は、条件を形成するためによく使われます。

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //条件は true でした。このブロック内のコードが実行されます。
    console.log("新しいノートパソコンを手に入れよう!");
}
```

## IF..Else 文

`else` 文は、条件が false の場合にブロック間でコードを実行します。これは `if` 文ではオプションです。

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //条件は true でした。このブロック内のコードが実行されます。
    console.log("新しいノートパソコンを手に入れよう!");
}
else{
    //条件は false でした。このブロック内のコードが実行されます。
    console.log("新しいノートパソコンを買う余裕はまだない!");
}
```

✅ ブラウザのコンソールで実行して、このコードと次のコードの理解度をテストしてください。currentMoney 変数と laptopPrice 変数の値を変更して、返される `console.log()` を変更します。

## 論理演算子とブール値

意思決定には複数の比較が必要な場合があり、論理演算子を使ってブール値を生成することができます。

| シンボル | 説明                                                                                    | 例                                                                             |
| -------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `&&`     | **論理積**: 2つのブール式を逆さにします。両辺が真の場合 **のみ** true を返します。      | `(5 > 6) && (5 < 6 ) //片方が false、もう片方が true です。false を返します。` |
| `||`     | **論理和**: 2つのブール式を比較します。少なくとも片方が true であれば true を返します。 | `(5 > 6) || (5 < 6) //片方が false、もう片方が true です。true を返します。`   |
| `!`      | **論理否定**: ブール式の反対の値を返します。                                            | `!(5 > 6) // 5は6より大きくないが、"!" は true を返す`                         |

## 論理演算子を用いた条件と決定

論理演算子は、if...else 文で条件を形成するために使用できます。

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //ノートパソコンの価格が20％オフ

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //条件は true でした。このブロック内のコードが実行されます。
    console.log("新しいノートパソコンを手に入れよう!");
}
else {
    //条件は false でした。このブロック内のコードが実行されます。
    console.log("新しいノートパソコンを買う余裕はまだない!");
}
```

### 否定演算子

ここまでで、条件付きロジックを作成するために `if...else` 文を使用する方法を見てきました。`if` に入るものはすべて true/false を評価する必要があります。演算子 `!` を使用すると、式を _否定_ することができます。以下のようになります。

```javascript
if (!condition) {
  // 条件が false の場合に実行されます。
} else {
  // 条件が true の場合に実行されます。
}
```

### 三項式

意思決定ロジックを表現する方法は `if...else` だけではありません。三項演算子と呼ばれるものを使うこともできます。その構文は次のようになります。

```javascript
let variable = condition ? <true ならばこれを返す> : <false ならばこれを返す>`
```

以下でより具体的な例を挙げてみます。

```javascript
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```

✅ このコードを数回読むのに時間をかけてください。これらの演算子がどのように動作するか理解できましたか？

上の例では次のようになっています。
- `firstNumber` が `secondNumber` よりも大きければ
- `biggestNumber` に `firstNumber` を代入し、
- そうでなければ `secondNumber` に代入する
  
三項式は、以下のコードをコンパクトに書くだけです。

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

最初に論理演算子を使ってプログラムを作成し、それを三項式で書き換えます。お好みの構文は？

## レッスン後の小テスト

[レッスン後の小テスト](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/12?loc=ja)

## 復習と自己学習

ユーザーが利用できる多くの演算子についての詳細は [mdn](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators) をご覧ください。

Josh Comeau の素晴らしい [operator lookup](https://joshwcomeau.com/operator-lookup/) をご覧ください!

## 課題

[演算子](assignment.ja.md)
