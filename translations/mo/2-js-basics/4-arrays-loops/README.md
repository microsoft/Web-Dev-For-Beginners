<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-22T22:34:51+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "mo"
}
-->
# JavaScript 基礎：陣列與迴圈

![JavaScript 基礎 - 陣列](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.mo.png)
> Sketchnote 作者：[Tomomi Imura](https://twitter.com/girlie_mac)

## 課前測驗
[課前測驗](https://ff-quizzes.netlify.app/web/quiz/13)

你是否曾經好奇網站是如何追蹤購物車中的商品或顯示好友列表的？這就是陣列和迴圈的用途。陣列就像是數位容器，可以存放多個資訊，而迴圈則能讓你有效率地處理這些資料，避免重複撰寫程式碼。

這兩個概念結合起來，形成了處理程式中資訊的基礎。你將學會如何從手動逐步撰寫每個步驟，轉變為撰寫能快速處理數百甚至數千項目資料的智能高效程式碼。

在本課程結束時，你將了解如何僅用幾行程式碼完成複雜的資料處理任務。讓我們一起探索這些重要的程式設計概念吧。

[![陣列](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "陣列")

[![迴圈](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "迴圈")

> 🎥 點擊上方圖片觀看有關陣列和迴圈的影片。

> 你可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon) 上學習本課程！

## 陣列

可以把陣列想像成一個數位檔案櫃——與其每個抽屜只存放一份文件，不如將多個相關項目組織在一個結構化的容器中。用程式設計的術語來說，陣列可以讓你將多個資訊存放在一個有組織的包裹中。

無論你是在建立相簿、管理待辦事項清單，還是追蹤遊戲中的高分，陣列都為資料組織提供了基礎。讓我們來看看它是如何運作的。

✅ 陣列無處不在！你能想到一個現實生活中的陣列例子嗎，例如太陽能板陣列？

### 建立陣列

建立陣列非常簡單——只需使用方括號！

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**這裡發生了什麼？**
你剛剛使用方括號 `[]` 建立了一個空的容器。可以把它想像成一個空的圖書館書架——它已經準備好存放你想要組織的書籍。

你也可以直接在一開始就填入初始值：

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**值得注意的酷事：**
- 你可以在同一個陣列中存放文字、數字，甚至是 true/false 值
- 只需用逗號分隔每個項目——非常簡單！
- 陣列非常適合用來存放相關的資訊

### 陣列索引

有件事可能一開始會讓你覺得不太習慣：陣列的項目編號是從 0 開始，而不是 1。這種以零為基礎的索引源於電腦記憶體的運作方式——自從像 C 語言這樣的早期程式語言開始，這就成為了一種程式設計慣例。陣列中的每個位置都有自己的地址編號，稱為 **索引**。

| 索引 | 值 | 描述 |
|-------|-------|-------------|
| 0 | "Chocolate" | 第一個元素 |
| 1 | "Strawberry" | 第二個元素 |
| 2 | "Vanilla" | 第三個元素 |
| 3 | "Pistachio" | 第四個元素 |
| 4 | "Rocky Road" | 第五個元素 |

✅ 陣列從零索引開始是否讓你感到驚訝？在某些程式語言中，索引是從 1 開始的。這背後有一段有趣的歷史，你可以在 [維基百科](https://en.wikipedia.org/wiki/Zero-based_numbering) 上了解更多。

**存取陣列元素：**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**這裡發生了什麼？**
- **使用** 索引號和方括號來存取元素
- **返回** 陣列中該特定位置存放的值
- **從** 0 開始計數，第一個元素的索引為 0

**修改陣列元素：**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**在上面的例子中，我們：**
- **修改** 索引 4 的元素，從 "Rocky Road" 改為 "Butter Pecan"
- **新增** 一個新元素 "Cookie Dough" 到索引 5
- **自動擴展** 陣列長度，當新增元素超出目前範圍時

### 陣列長度與常用方法

陣列附帶了內建的屬性和方法，讓處理資料變得更加容易。

**找出陣列長度：**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**需要記住的重點：**
- **返回** 陣列中的元素總數
- **自動更新** 當元素被新增或移除時
- **提供** 動態計數，對迴圈和驗證非常有用

**重要的陣列方法：**

```javascript
const fruits = ["apple", "banana", "orange"];

// Add elements
fruits.push("grape");           // Adds to end: ["apple", "banana", "orange", "grape"]
fruits.unshift("strawberry");   // Adds to beginning: ["strawberry", "apple", "banana", "orange", "grape"]

// Remove elements
const lastFruit = fruits.pop();        // Removes and returns "grape"
const firstFruit = fruits.shift();     // Removes and returns "strawberry"

// Find elements
const index = fruits.indexOf("banana"); // Returns 1 (position of "banana")
const hasApple = fruits.includes("apple"); // Returns true
```

**理解這些方法：**
- 使用 `push()`（尾部）和 `unshift()`（開頭）**新增**元素
- 使用 `pop()`（尾部）和 `shift()`（開頭）**移除**元素
- 使用 `indexOf()` **定位**元素，並用 `includes()` 檢查是否存在
- **返回** 有用的值，例如移除的元素或位置索引

✅ 自己試試看！使用瀏覽器的控制台建立並操作一個你自己創建的陣列。

## 迴圈

想像一下查爾斯·狄更斯小說中，學生被懲罰要在石板上重複寫句子的情景。如果你能簡單地指示某人「把這句話寫100次」，並讓它自動完成，那就是迴圈在程式碼中所做的事情。

迴圈就像擁有一個不知疲倦的助手，可以無誤地重複執行任務。無論你需要檢查購物車中的每個項目，還是顯示相簿中的所有照片，迴圈都能高效地處理重複的工作。

JavaScript 提供了幾種迴圈類型供你選擇。讓我們來看看每一種迴圈，並了解它們的使用時機。

### For 迴圈

`for` 迴圈就像設置一個計時器——你知道確切需要執行的次數。它非常有條理且可預測，這使得它非常適合處理陣列或需要計數的情況。

**For 迴圈結構：**

| 組件 | 用途 | 範例 |
|-----------|---------|----------|
| **初始化** | 設定起始點 | `let i = 0` |
| **條件** | 繼續執行的條件 | `i < 10` |
| **遞增** | 如何更新 | `i++` |

```javascript
// Counting from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`);
}

// More practical example: processing scores
const testScores = [85, 92, 78, 96, 88];
for (let i = 0; i < testScores.length; i++) {
  console.log(`Student ${i + 1}: ${testScores[i]}%`);
}
```

**逐步解析發生了什麼：**
- **初始化** 計數器變數 `i`，起始值為 0
- **檢查** 條件 `i < 10`，在每次迴圈執行前
- **執行** 當條件為真時的程式碼區塊
- **遞增** 每次迴圈後將 `i` 加 1
- **停止** 當條件變為假（當 `i` 到達 10 時）

✅ 在瀏覽器控制台中執行這段程式碼。當你對計數器、條件或迴圈表達式進行小改動時會發生什麼？你能讓它倒數，創建一個倒計時嗎？

### While 迴圈

`while` 迴圈就像在說「一直做這件事直到...」——你可能不知道它會執行多少次，但你知道什麼時候停止。它非常適合像是要求使用者輸入直到他們給出你需要的答案，或是搜尋資料直到找到你要的內容。

**While 迴圈特性：**
- **持續執行** 只要條件為真
- **需要** 手動管理任何計數器變數
- **在每次迴圈前檢查** 條件
- **可能有風險** 如果條件永遠不為假，可能導致無限迴圈

```javascript
// Basic counting example
let i = 0;
while (i < 10) {
  console.log(`While count: ${i}`);
  i++; // Don't forget to increment!
}

// More practical example: processing user input
let userInput = "";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "quit" && attempts < maxAttempts) {
  userInput = prompt(`Enter 'quit' to exit (attempt ${attempts + 1}):`);
  attempts++;
}

if (attempts >= maxAttempts) {
  console.log("Maximum attempts reached!");
}
```

**理解這些範例：**
- **手動管理** 迴圈內的計數器變數 `i`
- **遞增** 計數器以防止無限迴圈
- **展示** 實際應用情境，例如使用者輸入和嘗試次數限制
- **包含** 防止無限執行的安全機制

### 現代迴圈替代方案

JavaScript 提供了現代的迴圈語法，可以讓你的程式碼更易讀且更少出錯。

**For...of 迴圈 (ES6+):**

```javascript
const colors = ["red", "green", "blue", "yellow"];

// Modern approach - cleaner and safer
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Compare with traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(`Color: ${colors[i]}`);
}
```

**For...of 的主要優勢：**
- **消除** 索引管理和潛在的越界錯誤
- **直接提供** 陣列元素的存取
- **提升** 程式碼可讀性並減少語法複雜性

**forEach 方法：**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**關於 forEach 你需要知道的：**
- **執行** 每個陣列元素的函數
- **提供** 元素值和索引作為參數
- **無法** 提前停止（與傳統迴圈不同）
- **返回** undefined（不會創建新陣列）

✅ 為什麼你會選擇使用 for 迴圈而不是 while 迴圈？17K 名觀眾在 StackOverflow 上也有同樣的疑問，有些意見 [可能會讓你感興趣](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript)。

## 迴圈與陣列

將陣列與迴圈結合可以創造強大的資料處理能力。這種組合是許多程式設計任務的基礎，從顯示列表到計算統計數據。

**傳統的陣列處理：**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Classic for loop approach
for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(`Flavor ${i + 1}: ${iceCreamFlavors[i]}`);
}

// Modern for...of approach
for (const flavor of iceCreamFlavors) {
  console.log(`Available flavor: ${flavor}`);
}
```

**讓我們理解每種方法：**
- **使用** 陣列的長度屬性來確定迴圈邊界
- **透過索引存取** 傳統 for 迴圈中的元素
- **直接存取** for...of 迴圈中的元素
- **精確處理** 每個陣列元素一次

**實際資料處理範例：**

```javascript
const studentGrades = [85, 92, 78, 96, 88, 73, 89];
let total = 0;
let highestGrade = studentGrades[0];
let lowestGrade = studentGrades[0];

// Process all grades with a single loop
for (let i = 0; i < studentGrades.length; i++) {
  const grade = studentGrades[i];
  total += grade;
  
  if (grade > highestGrade) {
    highestGrade = grade;
  }
  
  if (grade < lowestGrade) {
    lowestGrade = grade;
  }
}

const average = total / studentGrades.length;
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestGrade}`);
console.log(`Lowest: ${lowestGrade}`);
```

**這段程式碼如何運作：**
- **初始化** 用於追蹤的變數，例如總和和極值
- **處理** 每個分數，僅用一個高效的迴圈
- **累積** 總分以計算平均值
- **追蹤** 最高和最低值在迴圈中
- **在迴圈完成後計算** 最終統計數據

✅ 在瀏覽器的控制台中嘗試迴圈遍歷你自己創建的陣列。

---

## GitHub Copilot Agent 挑戰 🚀

使用 Agent 模式完成以下挑戰：

**描述：** 建立一個綜合的資料處理函數，結合陣列和迴圈來分析數據集並生成有意義的洞察。

**提示：** 創建一個名為 `analyzeGrades` 的函數，該函數接收一個包含學生分數物件的陣列（每個物件包含 name 和 score 屬性），並返回一個包含統計數據的物件，包括最高分、最低分、平均分、通過的學生數（分數 >= 70），以及一個分數高於平均分的學生姓名陣列。在解決方案中至少使用兩種不同的迴圈類型。

在這裡了解更多關於 [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)。

## 🚀 挑戰

JavaScript 提供了幾種現代的陣列方法，可以用來取代特定任務中的傳統迴圈。探索 [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)、[for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of)、[map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map)、[filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 和 [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)。

**你的挑戰：** 使用至少三種不同的陣列方法重構學生分數範例。注意使用現代 JavaScript 語法後，程式碼變得多麼簡潔和易讀。

## 課後測驗
[課後測驗](https://ff-quizzes.netlify.app/web/quiz/14)

## 複習與自學

JavaScript 中的陣列附帶了許多非常有用的資料操作方法。[閱讀這些方法](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)，並在你自己創建的陣列上嘗試一些方法（例如 push、pop、slice 和 splice）。

## 作業

[迴圈陣列](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。