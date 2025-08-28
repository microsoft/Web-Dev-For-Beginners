<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-23T22:40:52+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "hk"
}
-->
# JavaScript 基礎：方法與函數

![JavaScript 基礎 - 函數](../../../../sketchnotes/webdev101-js-functions.png)
> Sketchnote 由 [Tomomi Imura](https://twitter.com/girlie_mac) 提供

## 課前測驗
[課前測驗](https://ff-quizzes.netlify.app/web/quiz/9)

當我們考慮撰寫程式碼時，總是希望程式碼具有可讀性。雖然這聽起來有些違背直覺，但程式碼被閱讀的次數遠多於被撰寫的次數。開發者工具箱中的一個核心工具就是 **函數**，它能幫助我們確保程式碼的可維護性。

[![方法與函數](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "方法與函數")

> 🎥 點擊上方圖片觀看有關方法與函數的影片。

> 你可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) 上學習這節課！

## 函數

從本質上來說，函數是一段可以按需執行的程式碼。這非常適合需要多次執行相同任務的情境；與其在多個地方重複相同的邏輯（這會在需要更新時變得困難），我們可以將邏輯集中在一個地方，並在需要執行操作時調用它——甚至可以從其他函數中調用函數！

同樣重要的是為函數命名的能力。雖然這看似微不足道，但名稱為程式碼的一部分提供了一種快速的文件化方式。你可以將其視為按鈕上的標籤。如果我點擊一個標有「取消計時器」的按鈕，我就知道它會停止計時。

## 建立與調用函數

函數的語法如下所示：

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

如果我想建立一個函數來顯示問候語，它可能看起來像這樣：

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

每當我們想要調用（或執行）函數時，我們使用函數名稱後加上 `()`。值得注意的是，我們的函數可以在調用之前或之後定義；JavaScript 編譯器會幫你找到它。

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** 有一種特殊類型的函數稱為 **方法**，你已經在使用了！事實上，我們在上面的示例中使用 `console.log` 時就看到了這一點。方法與函數的區別在於，方法附加在一個物件上（在我們的例子中是 `console`），而函數則是獨立的。你會發現許多開發者會將這些術語交替使用。

### 函數的最佳實踐

在建立函數時，有一些最佳實踐需要記住：

- 一如既往，使用描述性的名稱，這樣你就知道函數的用途
- 使用 **camelCasing** 來組合單詞
- 讓你的函數專注於特定的任務

## 傳遞資訊給函數

為了讓函數更具重用性，你通常會希望向函數傳遞資訊。如果我們考慮上面的 `displayGreeting` 示例，它只會顯示 **Hello, world!**。這並不是一個最有用的函數。如果我們想讓它更靈活一些，比如允許指定要問候的人的名字，我們可以新增一個 **參數**。參數（有時也稱為 **引數**）是傳遞給函數的額外資訊。

參數在定義部分列於括號內，並用逗號分隔，如下所示：

```javascript
function name(param, param2, param3) {

}
```

我們可以更新 `displayGreeting` 來接受一個名字並顯示它。

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

當我們想要調用函數並傳遞參數時，我們在括號內指定它。

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## 預設值

我們可以通過新增更多參數使函數更加靈活。但如果我們不希望每個值都必須指定呢？以我們的問候語示例為例，我們可以將名字設為必需（我們需要知道要問候誰），但我們希望允許問候語本身根據需要進行自定義。如果有人不想自定義它，我們可以提供一個預設值。要為參數提供預設值，我們可以像為變數設置值一樣進行設置 - `parameterName = 'defaultValue'`。以下是一個完整的示例：

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

當我們調用函數時，我們可以決定是否為 `salutation` 設置值。

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## 返回值

到目前為止，我們建立的函數會始終輸出到 [console](https://developer.mozilla.org/docs/Web/API/console)。有時這正是我們所需要的，特別是當我們建立會調用其他服務的函數時。但如果我想建立一個輔助函數來執行計算並將值返回，以便在其他地方使用呢？

我們可以通過使用 **返回值** 來實現。返回值由函數返回，並可以像存儲字串或數字這樣的靜態值一樣存儲在變數中。

如果函數確實返回某些內容，那麼會使用關鍵字 `return`。`return` 關鍵字需要一個值或引用作為返回內容，如下所示：

```javascript
return myVariable;
```  

我們可以建立一個函數來建立問候語訊息並將值返回給調用者。

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

當調用這個函數時，我們會將值存儲在變數中。這與我們將變數設置為靜態值（例如 `const name = 'Christopher'`）的方式非常相似。

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## 函數作為函數的參數

隨著你在程式設計職涯中的進步，你會遇到接受函數作為參數的函數。這個巧妙的技巧通常用於我們不知道某件事何時會發生或完成，但我們知道需要在響應中執行某個操作的情況。

例如，考慮 [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)，它啟動一個計時器並在完成時執行程式碼。我們需要告訴它我們想執行什麼程式碼。聽起來這正是函數的完美工作！

如果你運行以下程式碼，3 秒後你會看到訊息 **3 seconds has elapsed**。

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### 匿名函數

讓我們再看看我們建立的內容。我們建立了一個將被使用一次的具名函數。隨著應用程式變得更加複雜，我們可能會建立許多只會被調用一次的函數。這並不理想。事實證明，我們並不總是需要提供名稱！

當我們將函數作為參數傳遞時，我們可以跳過事先建立它，而是在參數中直接建立。我們使用相同的 `function` 關鍵字，但將其作為參數的一部分來建立。

讓我們重寫上面的程式碼以使用匿名函數：

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

如果你運行我們的新程式碼，你會注意到我們得到了相同的結果。我們建立了一個函數，但不需要給它命名！

### Fat Arrow 函數

許多程式語言（包括 JavaScript）中常見的一個快捷方式是使用所謂的 **箭頭函數** 或 **Fat Arrow 函數**。它使用一個特殊的符號 `=>`，看起來像一個箭頭——因此得名！通過使用 `=>`，我們可以跳過 `function` 關鍵字。

讓我們再一次重寫程式碼以使用 Fat Arrow 函數：

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### 何時使用哪種策略

你現在已經看到了三種將函數作為參數的方式，可能會想知道何時使用哪一種。如果你知道你會多次使用該函數，請按正常方式建立它。如果你只會在一個地方使用它，通常最好使用匿名函數。至於你是否使用 Fat Arrow 函數或更傳統的 `function` 語法，這取決於你，但你會注意到大多數現代開發者更喜歡使用 `=>`。

---

## 🚀 挑戰

你能用一句話說明函數與方法的區別嗎？試試看！

## 課後測驗
[課後測驗](https://ff-quizzes.netlify.app/web/quiz/10)

## 複習與自學

值得[多了解一些有關箭頭函數的內容](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，因為它們在程式碼中越來越常用。練習撰寫一個函數，然後用這種語法重寫它。

## 作業

[函數的樂趣](assignment.md)

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。