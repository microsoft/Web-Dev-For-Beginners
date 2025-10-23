<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-22T22:35:24+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "mo"
}
-->
# JavaScript 基礎：做出決策

![JavaScript 基礎 - 做出決策](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.mo.png)

> Sketchnote 作者：[Tomomi Imura](https://twitter.com/girlie_mac)

你是否曾經好奇應用程式是如何做出聰明的決策？例如導航系統如何選擇最快的路線，或者溫控器如何決定何時開啟暖氣？這就是程式設計中決策的基本概念。

就像查爾斯·巴貝奇的分析機被設計用來根據條件執行不同的操作序列一樣，現代的 JavaScript 程式也需要根據不同的情況做出選擇。這種分支和決策的能力使靜態程式碼轉變為具有反應性和智能的應用程式。

在本課程中，你將學習如何在程式中實現條件邏輯。我們將探討條件語句、比較運算符和邏輯表達式，這些工具可以讓你的程式碼評估情況並做出適當的回應。

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/11)

能夠做出決策並控制程式的流程是程式設計的一個基本方面。本節將介紹如何使用布林值和條件邏輯來控制 JavaScript 程式的執行路徑。

[![做出決策](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "做出決策")

> 🎥 點擊上方圖片觀看有關做出決策的影片。

> 你可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon) 上學習本課程！

## 布林值簡介

在探索決策之前，讓我們回顧一下上一課中提到的布林值。布林值以數學家 George Boole 命名，代表二元狀態——`true` 或 `false`。沒有模糊性，也沒有中間狀態。

這些二元值構成了所有計算邏輯的基礎。你的程式所做的每一個決策最終都歸結為布林值的評估。

創建布林變數非常簡單：

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

這段程式碼創建了兩個具有明確布林值的變數。

✅ 布林值以英國數學家、哲學家和邏輯學家 George Boole (1815–1864) 命名。

## 比較運算符與布林值

在實際應用中，你很少會手動設置布林值。相反，你會通過評估條件來生成它們，例如：「這個數字是否大於那個數字？」或者「這些值是否相等？」

比較運算符使這些評估成為可能。它們比較值並根據操作數之間的關係返回布林結果。

| 符號 | 描述                                                                                                                                                   | 範例                |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **小於**：比較兩個值，如果左側的值小於右側，則返回 `true` 的布林值                                                                                   | `5 < 6 // true`    |
| `<=`   | **小於或等於**：比較兩個值，如果左側的值小於或等於右側，則返回 `true` 的布林值                                                                       | `5 <= 6 // true`   |
| `>`    | **大於**：比較兩個值，如果左側的值大於右側，則返回 `true` 的布林值                                                                                   | `5 > 6 // false`   |
| `>=`   | **大於或等於**：比較兩個值，如果左側的值大於或等於右側，則返回 `true` 的布林值                                                                       | `5 >= 6 // false`  |
| `===`  | **嚴格相等**：比較兩個值，如果左右兩側的值相等且類型相同，則返回 `true` 的布林值                                                                     | `5 === 6 // false` |
| `!==`  | **不相等**：比較兩個值，返回與嚴格相等運算符相反的布林值                                                                                            | `5 !== 6 // true`  |

✅ 在瀏覽器的控制台中寫一些比較來檢查你的知識。是否有任何返回的數據讓你感到驚訝？

## If 語句

`if` 語句就像是在程式中提出問題。「如果這個條件為真，那麼執行這件事。」這可能是你在 JavaScript 中用來做出決策的最重要工具。

它的工作原理如下：

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

條件放在括號內，如果條件為 `true`，JavaScript 就會執行大括號內的程式碼。如果條件為 `false`，JavaScript 就會跳過整個區塊。

你通常會使用比較運算符來創建這些條件。讓我們看看一個實際的例子：

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

由於 `1000 >= 800` 的結果為 `true`，區塊內的程式碼會執行，並在控制台中顯示「Getting a new laptop!」。

## If..Else 語句

但如果你希望程式在條件為假時執行其他操作怎麼辦？這時候就需要用到 `else`，它就像是備選方案。

`else` 語句讓你可以說「如果這個條件不為真，那麼就執行其他事情。」

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

現在，由於 `500 >= 800` 的結果為 `false`，JavaScript 會跳過第一個區塊並執行 `else` 區塊。你會在控制台中看到「Can't afford a new laptop, yet!」。

✅ 在瀏覽器控制台中運行這段程式碼和以下程式碼來測試你的理解。更改 currentMoney 和 laptopPrice 變數的值以改變返回的 `console.log()`。

## Switch 語句

有時候你需要將一個值與多個選項進行比較。雖然你可以串聯多個 `if..else` 語句，但這種方法會變得笨重。`switch` 語句提供了一個更清晰的結構來處理多個離散值。

這個概念類似於早期電話交換機中的機械切換系統——一個輸入值決定了執行的特定路徑。

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

它的結構如下：
- JavaScript 只評估一次表達式
- 它會檢查每個 `case` 以找到匹配項
- 當找到匹配項時，它會執行該程式碼區塊
- `break` 告訴 JavaScript 停止並退出 switch
- 如果沒有匹配的 case，它會執行 `default` 區塊（如果有的話）

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

在這個例子中，JavaScript 發現 `dayNumber` 是 `2`，找到匹配的 `case 2`，將 `dayName` 設置為「Tuesday」，然後退出 switch。結果是「Today is Tuesday」會顯示在控制台中。

✅ 在瀏覽器控制台中運行這段程式碼和以下程式碼來測試你的理解。更改變數 a 的值以改變返回的 `console.log()`。

## 邏輯運算符與布林值

複雜的決策通常需要同時評估多個條件。就像布林代數允許數學家結合邏輯表達式一樣，程式設計提供了邏輯運算符來連接多個布林條件。

這些運算符通過結合簡單的真/假評估來實現複雜的條件邏輯。

| 符號 | 描述                                                                                     | 範例                                                                 |
| ------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `&&`   | **邏輯與**：比較兩個布林表達式。僅當兩側都為真時返回 true                              | `(5 > 3) && (5 < 10) // 兩側都為真。返回 true` |
| `\|\|` | **邏輯或**：比較兩個布林表達式。只要至少一側為真就返回 true                           | `(5 > 10) \|\| (5 < 10) // 一側為假，另一側為真。返回 true` |
| `!`    | **邏輯非**：返回布林表達式的相反值                                                     | `!(5 > 10) // 5 不大於 10，所以 "!" 使其為真`         |

這些運算符讓你以有用的方式結合條件：
- 與 (`&&`) 表示兩個條件都必須為真
- 或 (`||`) 表示至少一個條件必須為真  
- 非 (`!`) 將真翻轉為假（反之亦然）

## 使用邏輯運算符進行條件和決策

讓我們用一個更實際的例子來看看這些邏輯運算符的應用：

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

在這個例子中：我們計算出 20% 的折扣價格（640），然後評估我們的可用資金是否能支付全額價格或折扣價格。由於 600 滿足折扣價格 640 的條件，因此該條件評估為真。

### 非運算符

有時候，思考某件事「不為真」會更容易。例如，與其問「使用者是否已登入？」你可能更想問「使用者是否未登入？」感嘆號 (`!`) 運算符可以幫助你翻轉邏輯。

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

`!` 運算符就像在說「...的相反」——如果某件事是 `true`，`!` 會使其變為 `false`，反之亦然。

### 三元運算符

對於簡單的條件賦值，JavaScript 提供了 **三元運算符**。這種簡潔的語法允許你在一行中編寫條件表達式，當你需要根據條件分配兩個值之一時非常有用。

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

它的語法就像一個問題：「這個條件是否為真？如果是，使用這個值。如果不是，使用那個值。」

以下是一個更具體的例子：

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ 花點時間多讀幾遍這段程式碼。你是否理解這些運算符的工作原理？

這行程式碼的意思是：「`firstNumber` 是否大於 `secondNumber`？如果是，將 `firstNumber` 賦值給 `biggestNumber`。如果不是，將 `secondNumber` 賦值給 `biggestNumber`。」

三元運算符只是用更簡短的方式來編寫傳統的 `if..else` 語句：

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

兩種方法產生的結果完全相同。三元運算符提供了簡潔性，而傳統的 if-else 結構在處理複雜條件時可能更易於閱讀。

---

## 🚀 挑戰

創建一個程式，首先使用邏輯運算符編寫，然後使用三元運算符重寫。你更喜歡哪種語法？

---

## GitHub Copilot Agent 挑戰 🚀

使用 Agent 模式完成以下挑戰：

**描述：** 創建一個全面的成績計算器，展示本課程中多種決策概念，包括 if-else 語句、switch 語句、邏輯運算符和三元運算符。

**提示：** 編寫一個 JavaScript 程式，接收學生的數字分數（0-100），並根據以下標準確定其字母成績：
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: 低於 60

要求：
1. 使用 if-else 語句來確定字母成績
2. 使用邏輯運算符檢查學生是否通過（分數 >= 60）且是否獲得榮譽（分數 >= 90）
3. 使用 switch 語句為每個字母成績提供具體的反饋
4. 使用三元運算符來確定學生是否有資格參加下一門課程（分數 >= 70）
5. 包括輸入驗證以確保分數在 0 到 100 之間

用各種分數測試你的程式，包括邊界情況，例如 59、60、89、90 和無效輸入。

了解更多有關 [Agent 模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) 的資訊。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/12)

## 回顧與自學

閱讀更多有關使用者可用的多種運算符 [在 MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators)。

瀏覽 Josh Comeau 的精彩 [運算符查詢工具](https://joshwcomeau.com/operator-lookup/)！

## 作業

[運算符](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而產生的任何誤解或誤釋不承擔責任。