<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-08-29T15:28:22+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "tw"
}
-->
# 使用事件創建遊戲

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/21)

## 事件驅動編程

在創建基於瀏覽器的應用程式時，我們會提供一個圖形使用者介面（GUI），讓使用者能夠與我們構建的內容進行互動。與瀏覽器互動最常見的方式是通過點擊和在各種元素中輸入文字。作為開發者，我們面臨的挑戰是無法預測使用者何時會執行這些操作！

[事件驅動編程](https://en.wikipedia.org/wiki/Event-driven_programming) 是我們需要用來創建 GUI 的編程方式。如果我們稍微拆解這個詞語，會發現核心詞是 **事件**。根據 Merriam-Webster 的定義，[事件](https://www.merriam-webster.com/dictionary/event) 是指「某件事情發生」。這完美地描述了我們的情況。我們知道某件事情會發生，並希望在其發生時執行一些程式碼，但我們不知道它會在什麼時候發生。

我們標記希望執行的程式碼區段的方法是創建一個函數。當我們考慮[程序式編程](https://en.wikipedia.org/wiki/Procedural_programming)時，函數會按照特定的順序被調用。在事件驅動編程中也是如此，不同之處在於函數的調用方式。

為了處理事件（例如按鈕點擊、輸入文字等），我們需要註冊 **事件監聽器**。事件監聽器是一個函數，用於監聽事件的發生並在事件發生時執行相應的操作。事件監聽器可以更新 UI、向伺服器發送請求，或者執行其他需要根據使用者操作完成的任務。我們可以使用 [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) 並提供一個函數來添加事件監聽器。

> **NOTE:** 值得注意的是，創建事件監聽器有多種方式。你可以使用匿名函數，也可以創建命名函數。你可以使用各種快捷方式，例如設置 `click` 屬性，或者使用 `addEventListener`。在我們的練習中，我們將專注於使用 `addEventListener` 和匿名函數，因為這是網頁開發者最常用的技術之一。它也是最靈活的，因為 `addEventListener` 適用於所有事件，並且事件名稱可以作為參數提供。

### 常見事件

在創建應用程式時，有[數十種事件](https://developer.mozilla.org/docs/Web/Events)可供監聽。基本上，使用者在頁面上執行的任何操作都會觸發事件，這讓你擁有很大的權力來確保使用者獲得你期望的體驗。幸運的是，你通常只需要使用少數幾個事件。以下是一些常見的事件（包括我們在創建遊戲時會使用的兩個事件）：

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event)：使用者點擊某個元素，通常是按鈕或超連結
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)：使用者點擊右鍵
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event)：使用者選取了一些文字
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event)：使用者輸入了一些文字

## 創建遊戲

我們將創建一個遊戲來探索 JavaScript 中事件的工作原理。我們的遊戲將測試玩家的打字技能，這是所有開發者應該具備的一項非常重要的技能。我們都應該練習打字！遊戲的基本流程如下：

- 玩家點擊開始按鈕，並看到需要輸入的一段文字
- 玩家在文本框中盡可能快速地輸入文字
  - 每完成一個單詞，下一個單詞會被高亮顯示
  - 如果玩家輸入錯誤，文本框會變成紅色
  - 當玩家完成整段文字時，會顯示成功訊息以及所用時間

讓我們開始構建遊戲，並學習事件的相關知識！

### 文件結構

我們需要三個文件：**index.html**、**script.js** 和 **style.css**。讓我們先設置好這些文件，讓後續工作更輕鬆。

- 打開控制台或終端窗口，創建一個新文件夾，並執行以下命令：

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- 打開 Visual Studio Code

```bash
code .
```

- 在 Visual Studio Code 中向文件夾添加以下三個文件：
  - index.html
  - script.js
  - style.css

## 創建使用者介面

根據需求，我們知道在 HTML 頁面上需要一些元素。這有點像食譜，我們需要一些材料：

- 顯示玩家需要輸入的文字的地方
- 顯示訊息（例如成功訊息）的地方
- 用於輸入文字的文本框
- 開始按鈕

每個元素都需要有 ID，以便我們能夠在 JavaScript 中操作它們。我們還需要添加對 CSS 和 JavaScript 文件的引用。

創建一個名為 **index.html** 的新文件，並添加以下 HTML：

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### 啟動應用程式

最好以迭代方式開發，隨時查看效果。讓我們啟動應用程式。Visual Studio Code 有一個很棒的擴展名叫 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon)，它可以在本地托管你的應用程式，並在每次保存時刷新瀏覽器。

- 按照連結安裝 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon)，然後點擊 **Install**
  - 瀏覽器會提示你打開 Visual Studio Code，然後 Visual Studio Code 會提示你進行安裝
  - 如果有提示，請重新啟動 Visual Studio Code
- 安裝完成後，在 Visual Studio Code 中按 Ctrl-Shift-P（或 Cmd-Shift-P）打開命令面板
- 輸入 **Live Server: Open with Live Server**
  - Live Server 會開始托管你的應用程式
- 打開瀏覽器，並導航到 **https://localhost:5500**
- 你現在應該能看到你創建的頁面！

讓我們添加一些功能。

## 添加 CSS

在創建 HTML 後，讓我們添加核心樣式的 CSS。我們需要高亮玩家應該輸入的單詞，並在輸入錯誤時將文本框顯示為紅色。我們將使用兩個類來完成這些操作。

創建一個名為 **style.css** 的新文件，並添加以下語法。

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ 關於 CSS，你可以按照自己的喜好佈局頁面。花點時間讓頁面看起來更吸引人：

- 選擇不同的字體
- 為標題添加顏色
- 調整元素大小

## JavaScript

在創建 UI 後，現在是時候專注於提供邏輯的 JavaScript 了。我們將分成幾個步驟：

- [創建常量](../../../../4-typing-game/typing-game)
- [開始遊戲的事件監聽器](../../../../4-typing-game/typing-game)
- [輸入文字的事件監聽器](../../../../4-typing-game/typing-game)

首先，創建一個名為 **script.js** 的新文件。

### 創建常量

我們需要一些項目來讓編程更輕鬆。類似於食譜，以下是我們需要的內容：

- 包含所有文字的陣列
- 用於存儲當前文字的所有單詞的空陣列
- 用於存儲玩家當前輸入的單詞索引的空間
- 玩家點擊開始的時間

我們還需要引用 UI 元素：

- 文本框（**typed-value**）
- 顯示文字的元素（**quote**）
- 顯示訊息的元素（**message**）

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ 為你的遊戲添加更多文字

> **NOTE:** 我們可以在程式碼中隨時使用 `document.getElementById` 獲取元素。由於我們會經常引用這些元素，因此使用常量可以避免字符串字面值的拼寫錯誤。像 [Vue.js](https://vuejs.org/) 或 [React](https://reactjs.org/) 這樣的框架可以幫助你更好地集中管理程式碼。

花點時間觀看一段關於使用 `const`、`let` 和 `var` 的影片

[![變數類型](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "變數類型")

> 🎥 點擊上方圖片觀看有關變數的影片。

### 添加開始邏輯

為了開始遊戲，玩家需要點擊開始按鈕。當然，我們不知道他們什麼時候會點擊開始。這就是[事件監聽器](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)的作用。事件監聽器允許我們監聽某件事情的發生（事件），並在事件發生時執行程式碼。在我們的情況下，我們希望在使用者點擊開始時執行程式碼。

當使用者點擊 **開始** 時，我們需要選擇一段文字，設置使用者介面，並設置當前單詞和計時的追蹤。以下是需要添加的 JavaScript；我們在程式碼塊後進行討論。

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

讓我們分解程式碼！

- 設置單詞追蹤
  - 使用 [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 和 [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 隨機選擇 `quotes` 陣列中的一段文字
  - 將 `quote` 轉換為 `words` 陣列，以便追蹤玩家當前輸入的單詞
  - 將 `wordIndex` 設置為 0，因為玩家將從第一個單詞開始
- 設置 UI
  - 創建 `spanWords` 陣列，其中包含每個單詞的 `span` 元素
    - 這將允許我們高亮顯示文字
  - 使用 `join` 將陣列轉換為字符串，並更新 `quoteElement` 的 `innerHTML`
    - 這將向玩家顯示文字
  - 將第一個 `span` 元素的 `className` 設置為 `highlight`，以高亮顯示為黃色
  - 通過設置 `messageElement` 的 `innerText` 為 `''` 清空訊息
- 設置文本框
  - 清空 `typedValueElement` 的當前 `value`
  - 將焦點設置到 `typedValueElement`
- 通過調用 `getTime` 開始計時

### 添加輸入邏輯

當玩家輸入時，會觸發 `input` 事件。此事件監聽器將檢查玩家是否正確輸入單詞，並處理遊戲的當前狀態。回到 **script.js**，在末尾添加以下程式碼。我們稍後會進行分解。

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

讓我們分解程式碼！我們首先獲取當前單詞和玩家目前輸入的值。接著，我們使用瀑布邏輯檢查文字是否完成、單詞是否完成、單詞是否正確，或者（最後）是否有錯誤。

- 文字完成，條件是 `typedValue` 等於 `currentWord`，且 `wordIndex` 等於 `words` 的 `length` 減一
  - 通過將當前時間減去 `startTime` 計算 `elapsedTime`
  - 將 `elapsedTime` 除以 1,000，將毫秒轉換為秒
  - 顯示成功訊息
- 單詞完成，條件是 `typedValue` 以空格結尾（單詞結束），且 `typedValue` 等於 `currentWord`
  - 將 `typedElement` 的 `value` 設置為 `''`，以便輸入下一個單詞
  - 增加 `wordIndex`，移動到下一個單詞
  - 遍歷 `quoteElement` 的所有 `childNodes`，將 `className` 設置為 `''`，恢復默認顯示
  - 將當前單詞的 `className` 設置為 `highlight`，以標記為下一個需要輸入的單詞
- 單詞目前輸入正確（但未完成），條件是 `currentWord` 以 `typedValue` 開頭
  - 通過清空 `className` 確保 `typedValueElement` 顯示為默認狀態
- 如果到這裡，則表示有錯誤
  - 將 `typedValueElement` 的 `className` 設置為 `error`

## 測試你的應用程式

你已經完成了！最後一步是確保應用程式正常運行。試試看吧！如果有錯誤，不要擔心；**所有開發者**都會遇到錯誤。檢查訊息並根據需要進行調試。

點擊 **開始**，然後開始輸入！它應該看起來像我們之前看到的動畫。

![遊戲運行中的動畫](../../../../4-typing-game/images/demo.gif)

---

## 🚀 挑戰

添加更多功能

- 在完成後禁用 `input` 事件監聽器，並在按鈕被點擊時重新啟用
- 在玩家完成文字後禁用文本框
- 顯示一個模態對話框，包含成功訊息
- 使用 [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) 存儲最高分
## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/22)

## 回顧與自學

閱讀 [所有可用的事件](https://developer.mozilla.org/docs/Web/Events)，了解網頁瀏覽器提供給開發者的選項，並思考每個事件適合使用的情境。

## 作業

[創建一個新的鍵盤遊戲](assignment.md)

---

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而產生的任何誤解或錯誤解讀概不負責。