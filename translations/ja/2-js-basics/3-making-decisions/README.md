<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T14:47:18+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "ja"
}
-->
# JavaScriptの基本: 判断をする

![JavaScript Basics - Making decisions](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.ja.png)

> スケッチノート: [Tomomi Imura](https://twitter.com/girlie_mac)

アプリケーションがどのようにして賢い判断をしているのか、不思議に思ったことはありませんか？例えば、ナビゲーションシステムが最速ルートを選んだり、サーモスタットが暖房をオンにするタイミングを決めたりする仕組みです。これがプログラミングにおける判断の基本的な概念です。

チャールズ・バベッジの解析機関が条件に基づいて異なる操作のシーケンスを実行するよう設計されていたように、現代のJavaScriptプログラムもさまざまな状況に応じて選択を行う必要があります。この分岐して判断を行う能力こそが、静的なコードを応答性のある知的なアプリケーションに変えるものです。

このレッスンでは、プログラムに条件付きロジックを実装する方法を学びます。条件文、比較演算子、論理式を探求し、コードが状況を評価して適切に応答できるようにします。

## 講義前のクイズ

[講義前のクイズ](https://ff-quizzes.netlify.app/web/quiz/11)

判断を行い、プログラムの流れを制御する能力は、プログラミングの基本的な側面です。このセクションでは、Boolean値と条件付きロジックを使用してJavaScriptプログラムの実行パスを制御する方法を説明します。

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

> 🎥 上の画像をクリックして、判断についてのビデオをご覧ください。

> このレッスンは[Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)で受講できます！

## Booleanについての簡単な復習

判断を探求する前に、前回のレッスンで学んだBoolean値を復習しましょう。数学者ジョージ・ブールにちなんで名付けられたこれらの値は、`true`または`false`という2つの状態を表します。曖昧さや中間の状態はありません。

これらの2進値は、すべての計算論理の基礎を形成します。プログラムが行うすべての判断は、最終的にBoolean評価に帰着します。

Boolean変数を作成するのは簡単です:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

これにより、明示的なBoolean値を持つ2つの変数が作成されます。

✅ Booleanは、イギリスの数学者、哲学者、論理学者であるジョージ・ブール（1815–1864）にちなんで名付けられました。

## 比較演算子とBoolean

実際には、Boolean値を手動で設定することはほとんどありません。代わりに、条件を評価して生成します。「この数値はあの数値より大きいか？」や「これらの値は等しいか？」といった具合です。

比較演算子はこれらの評価を可能にします。値を比較し、オペランド間の関係に基づいてBoolean結果を返します。

| 記号 | 説明                                                                                                                                                   | 例                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `<`  | **より小さい**: 2つの値を比較し、左側の値が右側より小さい場合に`true`を返します                                                                       | `5 < 6 // true`    |
| `<=` | **以下**: 2つの値を比較し、左側の値が右側以下の場合に`true`を返します                                                                                 | `5 <= 6 // true`   |
| `>`  | **より大きい**: 2つの値を比較し、左側の値が右側より大きい場合に`true`を返します                                                                       | `5 > 6 // false`   |
| `>=` | **以上**: 2つの値を比較し、左側の値が右側以上の場合に`true`を返します                                                                                 | `5 >= 6 // false`  |
| `===`| **厳密な等価性**: 右側と左側の値が等しく、かつ同じデータ型である場合に`true`を返します                                                                | `5 === 6 // false` |
| `!==`| **不等価**: 厳密な等価性演算子が返す結果の逆のBoolean値を返します                                                                                     | `5 !== 6 // true`  |

✅ ブラウザのコンソールでいくつかの比較を書いて知識を確認してください。返されたデータに驚くことはありますか？

## If文

`if`文は、コード内で質問をするようなものです。「この条件がtrueなら、このことをする。」これはJavaScriptで判断を行うために最も重要なツールです。

以下のように動作します:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

条件は括弧内に入り、`true`の場合、JavaScriptは波括弧内のコードを実行します。`false`の場合、JavaScriptはそのブロック全体をスキップします。

これらの条件を作成するために比較演算子をよく使用します。実際の例を見てみましょう:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

`1000 >= 800`が`true`と評価されるため、ブロック内のコードが実行され、コンソールに「新しいラップトップを購入します！」と表示されます。

## If..Else文

しかし、条件がfalseの場合にプログラムに別のことをさせたい場合はどうしますか？そこで`else`が登場します。これはバックアッププランのようなものです。

`else`文を使うことで、「この条件がtrueでない場合、代わりにこの別のことをする」と言うことができます。

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

ここでは`500 >= 800`が`false`であるため、JavaScriptは最初のブロックをスキップし、代わりに`else`ブロックを実行します。コンソールには「まだ新しいラップトップを買う余裕がありません！」と表示されます。

✅ このコードと以下のコードをブラウザのコンソールで実行して理解をテストしてください。`currentMoney`と`laptopPrice`変数の値を変更して、返される`console.log()`を変えてみましょう。

## Switch文

時には、1つの値を複数の選択肢と比較する必要があります。いくつかの`if..else`文を連鎖させることもできますが、この方法は扱いにくくなります。`switch`文は、複数の離散値を処理するためのよりクリーンな構造を提供します。

この概念は、初期の電話交換機で使用された機械的なスイッチングシステムに似ています。1つの入力値が実行がどの特定のパスをたどるかを決定します。

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

構造は以下の通りです:
- JavaScriptは式を一度評価します
- 各`case`を見て一致を探します
- 一致が見つかると、そのコードブロックを実行します
- `break`はJavaScriptに停止してswitchを終了するよう指示します
- どのケースとも一致しない場合、`default`ブロック（あれば）を実行します

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

この例では、JavaScriptは`dayNumber`が`2`であることを確認し、一致する`case 2`を見つけ、`dayName`を「火曜日」に設定し、switchを終了します。その結果、コンソールには「今日は火曜日です」と表示されます。

✅ このコードと以下のコードをブラウザのコンソールで実行して理解をテストしてください。変数`a`の値を変更して、返される`console.log()`を変えてみましょう。

## 論理演算子とBoolean

複雑な判断では、複数の条件を同時に評価する必要があります。Boolean代数が数学者に論理式を組み合わせる方法を提供するように、プログラミングでは複数のBoolean条件を接続するための論理演算子を提供します。

これらの演算子は、単純なtrue/false評価を組み合わせることで高度な条件付きロジックを可能にします。

| 記号 | 説明                                                                                     | 例                                                                 |
| ---- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `&&` | **論理AND**: 2つのBoolean式を比較します。両方がtrueの場合にのみtrueを返します             | `(5 > 3) && (5 < 10) // 両方がtrue。trueを返します` |
| `\|\|` | **論理OR**: 2つのBoolean式を比較します。少なくとも片方がtrueの場合にtrueを返します     | `(5 > 10) \|\| (5 < 10) // 片方がfalse、もう片方がtrue。trueを返します` |
| `!`  | **論理NOT**: Boolean式の反対の値を返します                                               | `!(5 > 10) // 5は10より大きくないので、"!"がtrueにします`         |

これらの演算子を使用すると、条件を便利に組み合わせることができます:
- AND (`&&`)は両方の条件がtrueである必要があります
- OR (`||`)は少なくとも1つの条件がtrueである必要があります  
- NOT (`!`)はtrueをfalseに（逆も同様に）反転します

## 論理演算子を使った条件と判断

これらの論理演算子を使用したより現実的な例を見てみましょう:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

この例では: 20%割引価格（640）を計算し、利用可能な資金が全額価格または割引価格のいずれかをカバーしているかどうかを評価します。600が割引価格の閾値640を満たしているため、条件はtrueと評価されます。

### 否定演算子

時には、何かがtrueでない場合を考える方が簡単なことがあります。例えば、「ユーザーがログインしているか？」ではなく、「ユーザーがログインしていないか？」と尋ねたい場合です。感嘆符（`!`）演算子はそのロジックを反転してくれます。

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

`!`演算子は「...の反対」という意味です。何かが`true`なら`!`は`false`にし、逆も同様です。

### 三項式

簡単な条件付き代入の場合、JavaScriptは**三項演算子**を提供します。この簡潔な構文により、条件式を1行で記述することができ、条件に基づいて2つの値のいずれかを割り当てる必要がある場合に便利です。

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

これは質問のように読めます: 「この条件はtrueですか？もしそうなら、この値を使用します。そうでない場合は、あの値を使用します。」

以下はより具体的な例です:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ このコードを数回読んでみてください。これらの演算子がどのように機能しているか理解できますか？

この行が言っていることは次の通りです: 「`firstNumber`が`secondNumber`より大きいですか？もしそうなら、`firstNumber`を`biggestNumber`に入れます。そうでない場合は、`secondNumber`を`biggestNumber`に入れます。」

三項演算子は、従来の`if..else`文を短く書く方法にすぎません:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

どちらの方法も同じ結果を生み出します。三項演算子は簡潔さを提供しますが、従来のif-else構造は複雑な条件に対してより読みやすい場合があります。

---



## 🚀 チャレンジ

まず論理演算子を使ってプログラムを書き、その後三項式を使って書き直してください。どちらの構文が好みですか？

---

## GitHub Copilot Agent Challenge 🚀

Agentモードを使用して以下のチャレンジを完了してください:

**説明:** このレッスンで学んだ複数の判断概念（if-else文、switch文、論理演算子、三項式）を示す包括的な成績計算プログラムを作成してください。

**プロンプト:** 学生の数値スコア（0-100）を受け取り、以下の基準に基づいてその成績を判定するJavaScriptプログラムを作成してください:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: 60未満

要件:
1. if-else文を使用して成績を判定する
2. 論理演算子を使用して学生が合格（grade >= 60）し、かつ優秀（grade >= 90）であるかを確認する
3. switch文を使用して各成績に対する具体的なフィードバックを提供する
4. 三項演算子を使用して学生が次のコースに進む資格があるかどうかを判定する（grade >= 70）
5. スコアが0から100の間であることを確認する入力検証を含める

59、60、89、90、および無効な入力など、さまざまなスコアでプログラムをテストしてください。

[agent modeについてさらに学ぶ](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)はこちら。

## 講義後のクイズ

[講義後のクイズ](https://ff-quizzes.netlify.app/web/quiz/12)

## 復習と自己学習

ユーザーが利用できる多くの演算子についてさらに詳しく知りたい場合は、[MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators)をご覧ください。

Josh Comeauの素晴らしい[operator lookup](https://joshwcomeau.com/operator-lookup/)をチェックしてみてください！

## 課題

[Operators](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当社は一切の責任を負いません。