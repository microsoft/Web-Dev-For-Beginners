<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9029f96b0e034839c1799f4595e4bb66",
  "translation_date": "2025-08-29T15:24:44+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "tw"
}
-->
# JavaScript 基礎：陣列與迴圈

![JavaScript 基礎 - 陣列](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.tw.png)
> 由 [Tomomi Imura](https://twitter.com/girlie_mac) 繪製的筆記圖

## 課前測驗
[課前測驗](https://ff-quizzes.netlify.app/web/quiz/13)

本課程涵蓋 JavaScript 的基礎知識，這是一種為網頁提供互動性的語言。在本課程中，您將學習有關陣列和迴圈的知識，這些工具用於操作數據。

[![陣列](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "陣列")

[![迴圈](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "迴圈")

> 🎥 點擊上方圖片觀看有關陣列和迴圈的影片。

> 您可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon) 上學習本課程！

## 陣列

處理數據是任何程式語言中的常見任務，而當數據以結構化格式（如陣列）組織時，這項任務會變得更加簡單。使用陣列時，數據會以類似清單的結構存儲。陣列的一大優勢是您可以在一個陣列中存儲不同類型的數據。

✅ 陣列無處不在！您能想到一個現實生活中的陣列例子嗎，例如太陽能板陣列？

陣列的語法是一對方括號。

```javascript
let myArray = [];
```

這是一個空陣列，但陣列也可以在宣告時就已經填充數據。陣列中的多個值以逗號分隔。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

陣列中的值會被分配一個稱為 **索引** 的唯一值，這是一個根據其與陣列開頭的距離分配的整數。在上面的例子中，字串值 "Chocolate" 的索引為 0，而 "Rocky Road" 的索引為 4。使用方括號和索引可以檢索、更改或插入陣列值。

✅ 您是否對陣列從零索引開始感到驚訝？在某些程式語言中，索引是從 1 開始的。這背後有一段有趣的歷史，您可以在 [維基百科](https://en.wikipedia.org/wiki/Zero-based_numbering) 上閱讀相關內容。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

您可以利用索引來更改值，如下所示：

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

您也可以在指定索引處插入新值，如下所示：

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ 更常見的方式是使用陣列操作符，例如 array.push()，將值推入陣列。

要知道陣列中有多少項目，可以使用 `length` 屬性。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ 試試看！使用瀏覽器的控制台創建並操作您自己設計的陣列。

## 迴圈

迴圈允許我們執行重複或 **迭代** 的任務，這可以節省大量時間和程式碼。每次迭代的變數、值和條件都可以不同。JavaScript 中有不同類型的迴圈，它們之間有些微差異，但基本上都執行相同的功能：遍歷數據。

### For 迴圈

`for` 迴圈需要三個部分來進行迭代：
- `counter` 一個變數，通常初始化為一個數字，用於計算迭代次數
- `condition` 使用比較運算符的表達式，當結果為 `false` 時迴圈停止
- `iteration-expression` 在每次迭代結束時執行，通常用於更改計數器的值

```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ 在瀏覽器控制台中運行此程式碼。當您對計數器、條件或迭代表達式進行小改動時會發生什麼？您能讓它倒著運行，創建一個倒數嗎？

### While 迴圈

與 `for` 迴圈的語法不同，`while` 迴圈只需要一個條件，當條件變為 `false` 時迴圈停止。迴圈中的條件通常依賴於其他值（如計數器），並且必須在迴圈中進行管理。計數器的初始值必須在迴圈外創建，並且任何滿足條件的表達式（包括更改計數器）都必須在迴圈內維護。

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ 您為什麼會選擇使用 for 迴圈而不是 while 迴圈？17K 名讀者在 StackOverflow 上有相同的疑問，其中一些意見可能會 [引起您的興趣](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript)。

## 迴圈與陣列

陣列經常與迴圈一起使用，因為大多數條件需要依賴陣列的長度來停止迴圈，而索引也可以作為計數器的值。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ 在瀏覽器的控制台中，嘗試對您自己創建的陣列進行迴圈操作。

---

## 🚀 挑戰

除了 for 和 while 迴圈之外，還有其他方式可以遍歷陣列，例如 [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)、[for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of) 和 [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map)。使用其中一種技術重寫您的陣列迴圈。

## 課後測驗
[課後測驗](https://ff-quizzes.netlify.app/web/quiz/14)

## 複習與自學

JavaScript 中的陣列有許多附加的方法，這些方法對數據操作非常有用。[閱讀這些方法](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) 並嘗試在您創建的陣列上使用一些方法（例如 push、pop、slice 和 splice）。

## 作業

[迴圈一個陣列](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而產生的任何誤解或錯誤解讀概不負責。