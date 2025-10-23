<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-22T22:34:20+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "mo"
}
-->
# JavaScript 基礎：方法與函數

![JavaScript 基礎 - 函數](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.mo.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 課前測驗
[課前測驗](https://ff-quizzes.netlify.app)

重複撰寫相同的程式碼是程式設計中最常見的挫折之一。函數解決了這個問題，讓你可以將程式碼打包成可重複使用的模組。可以將函數想像成亨利·福特的裝配線革命性標準化零件——一旦你創建了一個可靠的元件，就可以在需要的地方使用它，而不需要重新從頭開始。

函數允許你將程式碼片段打包，讓你可以在整個程式中重複使用它們。與其在每個地方都複製和粘貼相同的邏輯，不如只需創建一次函數，然後在需要時調用它。這種方法可以讓你的程式碼更有條理，也更容易進行更新。

在這節課中，你將學習如何創建自己的函數，向它們傳遞信息，並獲得有用的結果。你將了解函數和方法的區別，學習現代語法方法，並了解函數如何與其他函數協同工作。我們將逐步構建這些概念。

[![方法與函數](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "方法與函數")

> 🎥 點擊上方圖片觀看有關方法與函數的影片。

> 你可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) 上學習這節課！

## 函數

函數是一個自包含的程式碼模組，用於執行特定任務。它封裝了邏輯，讓你可以在需要時執行。

與其在程式中多次撰寫相同的程式碼，不如將它打包到一個函數中，然後在需要時調用該函數。這種方法可以讓你的程式碼更簡潔，也更容易進行更新。想像一下，如果你需要更改分散在程式碼庫中 20 個不同位置的邏輯，維護起來會有多麼困難。

為你的函數命名時，使用描述性名稱是非常重要的。一個命名清晰的函數可以清楚地傳達它的用途——當你看到 `cancelTimer()` 時，你會立刻明白它的作用，就像一個標有清晰標籤的按鈕能告訴你點擊它後會發生什麼。

## 創建並調用函數

讓我們來看看如何創建一個函數。語法遵循一致的模式：

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

讓我們分解一下：
- `function` 關鍵字告訴 JavaScript "嘿，我正在創建一個函數！"
- `nameOfFunction` 是你給函數起的描述性名稱
- 圓括號 `()` 是你可以添加參數的地方（我們稍後會講到）
- 大括號 `{}` 包含了調用函數時實際執行的程式碼

讓我們創建一個簡單的問候函數來看看它的運作：

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

這個函數會在控制台中打印 "Hello, world!"。一旦你定義了它，就可以根據需要多次使用它。

要執行（或 "調用"）你的函數，請寫下它的名稱，然後加上圓括號。JavaScript 允許你在調用函數之前或之後定義它——JavaScript 引擎會處理執行順序。

```javascript
// calling our function
displayGreeting();
```

當你運行這行程式碼時，它會執行 `displayGreeting` 函數中的所有程式碼，並在瀏覽器的控制台中顯示 "Hello, world!"。你可以多次調用這個函數。

> **注意：** 在這些課程中，你已經使用了 **方法**。例如，`console.log()` 是一個方法——本質上是一個屬於 `console` 物件的函數。主要的區別在於方法附屬於物件，而函數則是獨立的。在日常對話中，許多開發者會將這些術語互換使用。

### 函數的最佳實踐

以下是一些幫助你撰寫出色函數的提示：

- 為你的函數起清晰、描述性的名稱——你的未來的自己會感謝你！
- 對多個單詞的名稱使用 **駝峰命名法**（例如 `calculateTotal` 而不是 `calculate_total`）
- 讓每個函數專注於做好一件事

## 向函數傳遞信息

我們的 `displayGreeting` 函數有些局限——它只能為所有人顯示 "Hello, world!"。參數讓我們可以讓函數更靈活和有用。

**參數** 就像是佔位符，你可以在每次使用函數時插入不同的值。這樣，同一個函數可以在每次調用時處理不同的信息。

在定義函數時，你可以在圓括號中列出參數，並用逗號分隔多個參數：

```javascript
function name(param, param2, param3) {

}
```

每個參數都像是一個佔位符——當有人調用你的函數時，他們會提供實際的值，這些值會插入到這些位置。

讓我們更新問候函數，使其可以接受某人的名字：

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

注意我們使用了反引號（`` ` ``）和 `${}` 直接將名字插入到訊息中——這被稱為模板字面值，它是一種非常方便的方式來構建包含變數的字串。

現在當我們調用函數時，可以傳入任意名字：

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript 會將字串 `'Christopher'` 賦值給 `name` 參數，並創建個性化訊息 "Hello, Christopher!"

## 預設值

如果我們希望某些參數是可選的呢？這時候預設值就派上用場了！

假設我們希望人們能夠自定義問候語，但如果他們沒有指定，我們就使用 "Hello" 作為備選。你可以通過使用等號來設置預設值，就像設置變數一樣：

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

在這裡，`name` 仍然是必需的，但 `salutation` 有一個備選值 `'Hello'`，如果沒有人提供其他問候語，它就會使用這個值。

現在我們可以用兩種不同的方式調用這個函數：

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

在第一次調用中，由於我們沒有指定問候語，JavaScript 使用了預設的 "Hello"。在第二次調用中，它使用了我們自定義的 "Hi"。這種靈活性使函數能夠適應不同的場景。

## 返回值

到目前為止，我們的函數只是將訊息打印到控制台，但如果你希望函數計算某些東西並將結果返回給你呢？

這就是 **返回值** 的作用。函數不僅可以顯示某些內容，還可以將一個值返回給你，讓你可以將它存儲在變數中或在程式碼的其他部分使用。

要返回一個值，你可以使用 `return` 關鍵字，後面跟著你想返回的內容：

```javascript
return myVariable;
```

有一件重要的事情：當函數遇到 `return` 語句時，它會立即停止運行，並將該值返回給調用它的地方。

讓我們修改問候函數，使其返回訊息而不是打印它：

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

現在，這個函數不再打印問候語，而是創建訊息並將其返回給我們。

要使用返回的值，我們可以像使用其他值一樣將其存儲在變數中：

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

現在 `greetingMessage` 包含 "Hello, Christopher"，我們可以在程式碼中的任何地方使用它——例如顯示在網頁上、包含在電子郵件中，或者傳遞給另一個函數。

## 函數作為函數的參數

函數可以作為參數傳遞給其他函數。雖然這個概念一開始可能看起來很複雜，但它是一個強大的功能，可以實現靈活的程式設計模式。

這種模式在你想要表達 "當某件事發生時，執行另一件事" 時非常常見。例如，"當計時器結束時，運行這段程式碼" 或 "當使用者點擊按鈕時，調用這個函數"。

讓我們來看看 `setTimeout`，它是一個內建函數，可以等待一定的時間，然後運行一些程式碼。我們需要告訴它要運行什麼程式碼——這正是傳遞函數的完美用例！

試試這段程式碼——3 秒後，你會看到一條訊息：

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

注意我們將 `displayDone`（不帶圓括號）傳遞給 `setTimeout`。我們並沒有自己調用函數——我們將它交給 `setTimeout`，並告訴它 "在 3 秒後調用這個函數"。

### 匿名函數

有時候你只需要一個函數來完成某件事，並且不想給它命名。想想看——如果你只使用一次函數，為什麼要用一個額外的名字來讓程式碼變得更複雜呢？

JavaScript 允許你創建 **匿名函數**——沒有名字的函數，你可以在需要的地方直接定義它們。

以下是我們如何使用匿名函數重寫計時器範例：

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

這實現了相同的結果，但函數直接在 `setTimeout` 調用中定義，省去了單獨的函數聲明。

### 箭頭函數

現代 JavaScript 提供了一種更簡潔的函數撰寫方式，稱為 **箭頭函數**。它使用 `=>`（看起來像箭頭——明白了吧？），並且在開發者中非常流行。

箭頭函數讓你可以省略 `function` 關鍵字，撰寫更簡潔的程式碼。

以下是使用箭頭函數的計時器範例：

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

`()` 是參數的位置（此例中為空），然後是箭頭 `=>`，最後是大括號中的函數主體。這提供了相同的功能，但語法更簡潔。

### 何時使用每種策略

什麼時候應該使用哪種方法？一個實用的指導原則是：如果你會多次使用該函數，請給它起一個名字並單獨定義。如果它只用於一個特定用途，可以考慮使用匿名函數。箭頭函數和傳統語法都是有效的選擇，雖然箭頭函數在現代 JavaScript 程式碼庫中更為流行。

---

## 🚀 挑戰

你能用一句話說明函數和方法的區別嗎？試試看！

## GitHub Copilot Agent 挑戰 🚀

使用 Agent 模式完成以下挑戰：

**描述：** 創建一個數學函數的工具庫，展示本課中涵蓋的不同函數概念，包括參數、預設值、返回值和箭頭函數。

**提示：** 創建一個名為 `mathUtils.js` 的 JavaScript 文件，其中包含以下函數：
1. 一個名為 `add` 的函數，接受兩個參數並返回它們的和
2. 一個名為 `multiply` 的函數，具有預設參數值（第二個參數預設為 1）
3. 一個箭頭函數 `square`，接受一個數字並返回其平方
4. 一個名為 `calculate` 的函數，接受另一個函數作為參數以及兩個數字，然後將該函數應用於這些數字
5. 演示調用每個函數的適當測試案例

在這裡了解更多關於 [Agent 模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)。

## 課後測驗
[課後測驗](https://ff-quizzes.netlify.app)

## 回顧與自學

值得[多了解一下箭頭函數](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，因為它們在程式碼庫中越來越常用。練習撰寫一個函數，然後使用這種語法重寫它。

## 作業

[有趣的函數](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。