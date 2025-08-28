<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-24T00:19:18+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "hk"
}
-->
# 使用事件創建遊戲

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/21)

## 事件驅動編程

當我們創建一個基於瀏覽器的應用程式時，我們會提供一個圖形用戶界面（GUI），讓用戶可以與我們構建的內容進行互動。與瀏覽器互動最常見的方式是點擊和在各種元素中輸入文字。作為開發者，我們面臨的挑戰是，我們不知道用戶何時會執行這些操作！

[事件驅動編程](https://en.wikipedia.org/wiki/Event-driven_programming) 是我們需要用來創建 GUI 的編程類型。如果我們稍微拆解這個詞語，我們會發現核心詞是 **事件**。根據 Merriam-Webster 的定義，[事件](https://www.merriam-webster.com/dictionary/event) 是指「某些發生的事情」。這完美地描述了我們的情況。我們知道會有某些事情發生，我們希望執行一些代碼來響應，但我們不知道它何時會發生。

我們標記希望執行的代碼部分的方法是創建一個函數。當我們考慮[程序式編程](https://en.wikipedia.org/wiki/Procedural_programming)時，函數是按照特定順序調用的。在事件驅動編程中也是如此，不同之處在於函數的調用方式。

為了處理事件（按鈕點擊、輸入等），我們需要註冊 **事件監聽器**。事件監聽器是一個函數，用於監聽事件的發生並作出響應。事件監聽器可以更新用戶界面、向伺服器發送請求，或者執行其他需要響應用戶操作的任務。我們可以使用 [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) 並提供一個函數來添加事件監聽器。

> **NOTE:** 值得注意的是，創建事件監聽器有多種方法。你可以使用匿名函數，也可以創建命名函數。你可以使用各種快捷方式，例如設置 `click` 屬性，或者使用 `addEventListener`。在我們的練習中，我們將專注於 `addEventListener` 和匿名函數，因為這是網頁開發者最常用的技術之一。它也是最靈活的，因為 `addEventListener` 適用於所有事件，並且事件名稱可以作為參數提供。

### 常見事件

在創建應用程式時，有[數十種事件](https://developer.mozilla.org/docs/Web/Events)可供監聽。基本上，用戶在頁面上執行的任何操作都會觸發事件，這讓你有很大的能力來確保用戶獲得理想的體驗。幸運的是，你通常只需要少數幾種事件。以下是一些常見的事件（包括我們在創建遊戲時會用到的兩個）：

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event)：用戶點擊某個元素，通常是按鈕或超連結
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)：用戶點擊右鍵
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event)：用戶選取了一些文字
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event)：用戶輸入了一些文字

## 創建遊戲

我們將創建一個遊戲來探索 JavaScript 中的事件是如何工作的。我們的遊戲將測試玩家的打字技能，這是所有開發者應該具備的一項非常重要的技能。我們都應該多練習打字！遊戲的基本流程如下：

- 玩家點擊開始按鈕，並看到一段需要輸入的文字
- 玩家在文本框中盡可能快速地輸入這段文字
  - 每完成一個單詞，下一個單詞會被高亮顯示
  - 如果玩家輸入錯誤，文本框會變成紅色
  - 當玩家完成整段文字時，會顯示成功訊息以及所用時間

讓我們開始構建遊戲，並學習事件的相關知識吧！

### 文件結構

我們需要三個文件：**index.html**、**script.js** 和 **style.css**。讓我們先設置好這些文件，讓後續的工作更輕鬆。

- 打開控制台或終端窗口，輸入以下命令來創建一個新文件夾：

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

- 在 Visual Studio Code 中，為該文件夾添加以下三個文件：
  - index.html
  - script.js
  - style.css

## 創建用戶界面

根據需求，我們知道我們的 HTML 頁面需要一些元素。這有點像食譜，我們需要一些材料：

- 一個用於顯示用戶需要輸入的文字的區域
- 一個用於顯示訊息（例如成功訊息）的區域
- 一個用於輸入的文本框
- 一個開始按鈕

每個元素都需要有 ID，以便我們可以在 JavaScript 中操作它們。我們還需要添加對 CSS 和 JavaScript 文件的引用。

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

開發時最好採用迭代方式，隨時查看效果。讓我們啟動應用程式。Visual Studio Code 有一個很棒的擴展工具 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon)，它可以在本地託管你的應用程式，並在每次保存時自動刷新瀏覽器。

- 按照鏈接安裝 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon)，點擊 **Install**
  - 瀏覽器會提示你打開 Visual Studio Code，然後 Visual Studio Code 會提示你進行安裝
  - 如果有提示，請重新啟動 Visual Studio Code
- 安裝完成後，在 Visual Studio Code 中按 Ctrl-Shift-P（或 Cmd-Shift-P）打開命令面板
- 輸入 **Live Server: Open with Live Server**
  - Live Server 會開始託管你的應用程式
- 打開瀏覽器，導航到 **https://localhost:5500**
- 你現在應該能看到你創建的頁面！

接下來，我們添加一些功能。

## 添加 CSS

在創建 HTML 後，我們需要添加 CSS 來進行核心樣式設計。我們需要高亮玩家應該輸入的單詞，並在輸入錯誤時將文本框顯示為紅色。我們將使用兩個類來實現這些功能。

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

✅ 關於 CSS，你可以按照自己的喜好設計頁面。花點時間讓頁面更吸引人：

- 選擇不同的字體
- 為標題添加顏色
- 調整元素大小

## JavaScript

在創建了用戶界面後，現在我們將重點放在提供邏輯的 JavaScript 上。我們將把它分成幾個步驟：

- [創建常量](../../../../4-typing-game/typing-game)
- [為開始遊戲添加事件監聽器](../../../../4-typing-game/typing-game)
- [為輸入添加事件監聽器](../../../../4-typing-game/typing-game)

首先，創建一個名為 **script.js** 的新文件。

### 創建常量

我們需要一些項目來讓編程更輕鬆。這有點像食譜，以下是我們需要的內容：

- 包含所有文字段落的數組
- 用於存儲當前段落中所有單詞的空數組
- 用於存儲玩家當前輸入單詞索引的空間
- 玩家點擊開始時的時間

我們還需要引用用戶界面中的元素：

- 文本框（**typed-value**）
- 顯示文字的區域（**quote**）
- 訊息區域（**message**）

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

✅ 為你的遊戲添加更多的段落

> **NOTE:** 我們可以在代碼中隨時使用 `document.getElementById` 獲取元素。由於我們會經常引用這些元素，因此使用常量可以避免字符串拼寫錯誤。像 [Vue.js](https://vuejs.org/) 或 [React](https://reactjs.org/) 這樣的框架可以幫助你更好地集中管理代碼。

花點時間觀看一段關於使用 `const`、`let` 和 `var` 的視頻

[![變量類型](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "變量類型")

> 🎥 點擊上方圖片觀看關於變量的視頻。

### 添加開始邏輯

為了開始遊戲，玩家需要點擊開始按鈕。當然，我們不知道他們什麼時候會點擊開始。這就是 [事件監聽器](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) 的作用。事件監聽器允許我們監聽某些事情的發生（事件）並執行代碼作為響應。在我們的例子中，我們希望在用戶點擊開始時執行代碼。

當用戶點擊 **開始** 時，我們需要選擇一段文字，設置用戶界面，並設置當前單詞和計時的追蹤。以下是你需要添加的 JavaScript；我們會在代碼塊後進行討論。

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

讓我們分解代碼！

- 設置單詞追蹤
  - 使用 [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 和 [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 隨機選擇 `quotes` 數組中的一段文字
  - 將 `quote` 轉換為 `words` 數組，以便追蹤玩家當前輸入的單詞
  - 將 `wordIndex` 設置為 0，因為玩家將從第一個單詞開始
- 設置用戶界面
  - 創建一個 `spanWords` 數組，其中包含每個單詞的 `span` 元素
    - 這樣可以高亮顯示顯示區域中的單詞
  - 使用 `join` 將數組轉換為字符串，並更新 `quoteElement` 的 `innerHTML`
    - 這將顯示文字給玩家
  - 將第一個 `span` 元素的 `className` 設置為 `highlight`，以高亮顯示為黃色
  - 將 `messageElement` 的 `innerText` 設置為 `''` 清空訊息
- 設置文本框
  - 清空 `typedValueElement` 的當前 `value`
  - 將焦點設置到 `typedValueElement`
- 通過調用 `getTime` 開始計時

### 添加輸入邏輯

當玩家輸入時，會觸發 `input` 事件。這個事件監聽器將檢查玩家是否正確輸入單詞，並處理遊戲的當前狀態。在 **script.js** 中，將以下代碼添加到末尾。我們會在代碼塊後進行討論。

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

讓我們分解代碼！我們首先獲取當前單詞和玩家目前輸入的值。然後，我們使用瀑布邏輯檢查以下情況：整段文字是否完成，單詞是否完成，單詞是否正確，或者（最後）是否有錯誤。

- 整段文字完成，當 `typedValue` 等於 `currentWord`，且 `wordIndex` 等於 `words` 的 `length` 減一時
  - 通過將當前時間減去 `startTime` 計算 `elapsedTime`
  - 將 `elapsedTime` 除以 1,000，將毫秒轉換為秒
  - 顯示成功訊息
- 單詞完成，當 `typedValue` 以空格結尾（單詞結束）且 `typedValue` 等於 `currentWord` 時
  - 將 `typedElement` 的 `value` 設置為 `''`，以便輸入下一個單詞
  - 增加 `wordIndex`，移動到下一個單詞
  - 遍歷 `quoteElement` 的所有 `childNodes`，將 `className` 設置為 `''`，恢復默認顯示
  - 將當前單詞的 `className` 設置為 `highlight`，標記為下一個需要輸入的單詞
- 單詞當前輸入正確（但未完成），當 `currentWord` 以 `typedValue` 開頭時
  - 通過清空 `className` 確保 `typedValueElement` 顯示為默認狀態
- 如果到這裡，說明有錯誤
  - 將 `typedValueElement` 的 `className` 設置為 `error`

## 測試你的應用程式

你已經完成了！最後一步是確保應用程式正常運行。試試看吧！如果有錯誤，不用擔心；**所有開發者**都會遇到錯誤。檢查訊息並進行調試。

點擊 **開始**，然後開始輸入！它應該看起來像我們之前看到的動畫。

![遊戲運行動畫](../../../../4-typing-game/images/demo.gif)

---

## 🚀 挑戰

添加更多功能

- 在完成後禁用 `input` 事件監聽器，並在按下按鈕時重新啟用
- 在玩家完成文字後禁用文本框
- 顯示一個模態對話框，包含成功訊息
- 使用 [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) 儲存高分

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/22)

## 回顧與自學

閱讀 [所有可用的事件](https://developer.mozilla.org/docs/Web/Events)，了解網頁瀏覽器提供給開發者的功能，並思考在什麼情境下會使用每個事件。

## 作業

[創建一個新的鍵盤遊戲](assignment.md)

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。