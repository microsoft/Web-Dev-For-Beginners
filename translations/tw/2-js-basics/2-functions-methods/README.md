<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-23T22:40:31+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "tw"
}
-->
# JavaScript 基礎：方法與函式

![JavaScript 基礎 - 函式](../../../../sketchnotes/webdev101-js-functions.png)
> 繪圖筆記由 [Tomomi Imura](https://twitter.com/girlie_mac) 提供

## 課前測驗
[課前測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

在撰寫程式碼時，我們總是希望程式碼易於閱讀。雖然這聽起來有些矛盾，但事實上程式碼被閱讀的次數遠多於被撰寫的次數。開發者工具箱中的一個核心工具就是 **函式**，它能幫助我們確保程式碼的可維護性。

[![方法與函式](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "方法與函式")

> 🎥 點擊上方圖片觀看有關方法與函式的影片。

> 您可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) 上學習本課程！

## 函式

函式的核心是一段可以按需執行的程式碼。這非常適合需要多次執行相同任務的情境；與其在多個地方重複邏輯（這會在需要更新時變得困難），我們可以將邏輯集中在一個地方，並在需要執行操作時呼叫它——甚至可以從其他函式中呼叫函式！

同樣重要的是為函式命名的能力。雖然這看起來微不足道，但名稱提供了一種快速記錄程式碼片段的方式。您可以將其視為按鈕上的標籤。如果我點擊一個標有「取消計時器」的按鈕，我就知道它會停止時鐘的運行。

## 建立與呼叫函式

函式的語法如下所示：

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

如果我想建立一個函式來顯示問候語，它可能看起來像這樣：

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

每當我們想要呼叫（或執行）函式時，我們使用函式名稱後加上 `()`。值得注意的是，我們的函式可以在呼叫之前或之後定義；JavaScript 編譯器會幫您找到它。

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** 有一種特殊類型的函式稱為 **方法**，您已經在使用了！事實上，我們在上面的示例中使用 `console.log` 時就看到了這一點。方法與函式的不同之處在於，方法附加在物件上（例如我們的例子中的 `console`），而函式則是獨立的。您會發現許多開發者會交替使用這些術語。

### 函式的最佳實踐

在建立函式時，有一些最佳實踐需要記住：

- 一如既往，使用描述性的名稱，讓您知道函式的用途
- 使用 **camelCasing** 來結合多個單字
- 讓函式專注於特定的任務

## 傳遞資訊給函式

為了讓函式更具重用性，您通常需要向函式傳遞資訊。如果我們考慮上面的 `displayGreeting` 示例，它只會顯示 **Hello, world!**。這並不是一個非常有用的函式。如果我們想讓它更靈活，例如允許指定要問候的人的名字，我們可以添加一個 **參數**。參數（有時也稱為 **引數**）是傳遞給函式的額外資訊。

參數列在定義部分的括號內，並用逗號分隔，如下所示：

```javascript
function name(param, param2, param3) {

}
```

我們可以更新 `displayGreeting` 以接受名字並顯示該名字。

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

當我們想要呼叫函式並傳遞參數時，我們在括號內指定它。

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## 預設值

我們可以通過添加更多參數使函式更加靈活。但如果我們不希望每個值都必須指定呢？以問候語的例子為例，我們可以將名字設為必填（我們需要知道要問候誰），但希望允許問候語根據需要進行自定義。如果有人不想自定義，我們提供一個預設值。要為參數提供預設值，我們可以像為變數設置值一樣進行設置——`parameterName = 'defaultValue'`。完整示例如下：

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

當我們呼叫函式時，可以決定是否要為 `salutation` 設置值。

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## 回傳值

到目前為止，我們建立的函式會始終輸出到 [console](https://developer.mozilla.org/docs/Web/API/console)。有時這正是我們所需要的，特別是當我們建立的函式會呼叫其他服務時。但如果我想建立一個輔助函式來執行計算並將值回傳以便在其他地方使用呢？

我們可以通過使用 **回傳值** 來實現。回傳值由函式回傳，並可以像存儲字串或數字等靜態值一樣存儲在變數中。

如果函式確實回傳某些內容，則使用關鍵字 `return`。`return` 關鍵字需要一個值或引用作為回傳內容，如下所示：

```javascript
return myVariable;
```  

我們可以建立一個函式來建立問候語訊息並將值回傳給呼叫者。

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

呼叫此函式時，我們會將值存儲在變數中。這與我們將變數設置為靜態值（例如 `const name = 'Christopher'`）的方式非常相似。

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## 函式作為函式的參數

隨著您在程式設計職業生涯中的進步，您會遇到接受函式作為參數的函式。這個巧妙的技巧通常用於我們不知道某件事何時會發生或完成，但我們知道需要執行某個操作作為響應。

例如，[setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) 開始一個計時器並在完成時執行程式碼。我們需要告訴它我們想執行什麼程式碼。聽起來這正是函式的完美工作！

如果您執行以下程式碼，3 秒後您會看到訊息 **3 seconds has elapsed**。

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### 匿名函式

讓我們再看看我們建立的內容。我們建立了一個有名稱的函式，但它只會被使用一次。隨著應用程式變得更加複雜，我們可能會建立許多只會被呼叫一次的函式。這並不理想。事實證明，我們並不總是需要提供名稱！

當我們將函式作為參數傳遞時，可以跳過事先建立函式，而是在參數中直接建立它。我們使用相同的 `function` 關鍵字，但將其作為參數的一部分來建立。

讓我們重寫上面的程式碼以使用匿名函式：

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

如果您執行我們的新程式碼，您會注意到結果相同。我們建立了一個函式，但不需要給它命名！

### Fat Arrow 函式

許多程式語言（包括 JavaScript）中常見的一個快捷方式是使用所謂的 **箭頭** 或 **Fat Arrow** 函式。它使用特殊的指示符 `=>`，看起來像一個箭頭——因此得名！通過使用 `=>`，我們可以跳過 `function` 關鍵字。

讓我們再一次重寫程式碼以使用 Fat Arrow 函式：

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### 何時使用每種策略

您現在已經看到我們有三種方式將函式作為參數傳遞，可能會想知道何時使用哪一種。如果您知道函式會被多次使用，請正常建立它。如果只會在一個地方使用，通常最好使用匿名函式。至於使用 Fat Arrow 函式還是更傳統的 `function` 語法，則取決於您，但您會注意到大多數現代開發者更喜歡使用 `=>`。

---

## 🚀 挑戰

您能否用一句話說明函式與方法的區別？試試看！

## 課後測驗
[課後測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## 複習與自學

值得[深入了解箭頭函式](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，因為它們在程式碼中越來越常用。練習撰寫一個函式，然後使用此語法重寫它。

## 作業

[函式的趣味練習](assignment.md)

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。