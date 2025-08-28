<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f7f87871312cf6cc12662da7d973182",
  "translation_date": "2025-08-25T21:46:58+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "mo"
}
-->
# JavaScript 基礎：陣列與迴圈

![JavaScript 基礎 - 陣列](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.mo.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 課前測驗
[課前測驗](https://ff-quizzes.netlify.app/web/quiz/13)

本課程涵蓋 JavaScript 的基礎知識，這是一種為網頁提供互動性的程式語言。在這堂課中，你將學習有關陣列與迴圈的知識，這些工具用於操作資料。

[![陣列](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "陣列")

[![迴圈](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "迴圈")

> 🎥 點擊上方圖片觀看有關陣列與迴圈的影片。

> 你可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon) 上學習這堂課！

## 陣列

處理資料是任何程式語言中常見的任務，而當資料以結構化格式（例如陣列）組織時，這項任務會變得更加容易。使用陣列時，資料會以類似清單的結構存儲。陣列的一大優勢是你可以在一個陣列中存儲不同類型的資料。

✅ 陣列無處不在！你能想到一個像太陽能板陣列這樣的現實生活中的陣列例子嗎？

陣列的語法是一對方括號。

```javascript
let myArray = [];
```

這是一個空陣列，但陣列也可以在宣告時就已經填充資料。陣列中的多個值以逗號分隔。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

陣列中的值會被分配一個獨特的值，稱為 **索引**，這是一個基於其距離陣列開頭的整數。在上面的例子中，字串值 "Chocolate" 的索引是 0，而 "Rocky Road" 的索引是 4。使用索引和方括號可以檢索、更改或插入陣列中的值。

✅ 你是否感到驚訝，陣列的索引是從零開始的？在某些程式語言中，索引是從 1 開始的。這背後有一段有趣的歷史，你可以在 [維基百科](https://en.wikipedia.org/wiki/Zero-based_numbering) 上閱讀相關內容。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

你可以利用索引來更改值，例如：

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

你也可以在指定索引處插入新值，例如：

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ 更常見的方式是使用陣列操作符，例如 array.push()，來向陣列中添加值。

要知道陣列中有多少項，可以使用 `length` 屬性。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ 自己試試看！使用瀏覽器的控制台創建並操作一個你自己設計的陣列。

## 迴圈

迴圈允許我們執行重複或 **迭代** 的任務，並且可以節省大量時間和程式碼。每次迭代可以在變數、值和條件上有所不同。JavaScript 中有不同類型的迴圈，它們之間有些微差異，但基本上都做同樣的事情：迴圈處理資料。

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

✅ 在瀏覽器控制台中執行這段程式碼。當你對計數器、條件或迭代表達式進行小改動時會發生什麼？你能讓它倒著執行，創建一個倒數嗎？

### While 迴圈

與 `for` 迴圈的語法不同，`while` 迴圈只需要一個條件，當條件變為 `false` 時迴圈停止。迴圈中的條件通常依賴於其他值（例如計數器），並且必須在迴圈中進行管理。計數器的初始值必須在迴圈外創建，並且任何滿足條件的表達式（包括更改計數器）必須在迴圈內維護。

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ 為什麼你會選擇使用 for 迴圈而不是 while 迴圈？17K 名觀眾在 StackOverflow 上有同樣的疑問，其中一些意見可能 [對你有趣](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript)。

## 迴圈與陣列

陣列通常與迴圈一起使用，因為大多數條件需要陣列的長度來停止迴圈，而索引也可以作為計數器的值。

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ 在瀏覽器的控制台中嘗試迴圈處理一個你自己設計的陣列。

---

## 🚀 挑戰

除了 for 和 while 迴圈之外，還有其他方式可以迴圈處理陣列，例如 [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)、[for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of) 和 [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map)。使用其中一種技術重寫你的陣列迴圈。

## 課後測驗
[課後測驗](https://ff-quizzes.netlify.app/web/quiz/14)

## 複習與自學

JavaScript 中的陣列附帶許多方法，這些方法對資料操作非常有用。[閱讀這些方法](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)，並嘗試在你自己設計的陣列上使用一些方法（例如 push、pop、slice 和 splice）。

## 作業

[迴圈處理陣列](assignment.md)

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。