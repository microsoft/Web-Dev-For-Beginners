<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-24T00:18:07+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "zh"
}
-->
# 使用事件创建游戏

## 课前测验

[课前测验](https://ff-quizzes.netlify.app/web/quiz/21)

## 事件驱动编程

在创建基于浏览器的应用程序时，我们会为用户提供一个图形用户界面（GUI），以便用户与我们构建的内容进行交互。用户与浏览器交互的最常见方式是点击和在各种元素中输入内容。作为开发者，我们面临的挑战是无法预测用户何时会执行这些操作！

[事件驱动编程](https://en.wikipedia.org/wiki/Event-driven_programming) 是我们需要用来创建 GUI 的一种编程方式。如果我们稍微拆解一下这个术语，可以发现核心词是 **事件**。根据 Merriam-Webster 的定义，[事件](https://www.merriam-webster.com/dictionary/event) 是指“某件发生的事情”。这完美地描述了我们的情况。我们知道会发生某些事情，我们希望在这些事情发生时执行一些代码，但我们不知道它们具体会在什么时候发生。

我们通过创建函数来标记希望执行的代码段。在 [过程式编程](https://en.wikipedia.org/wiki/Procedural_programming) 中，函数是按照特定顺序调用的。在事件驱动编程中也是如此，不同之处在于函数的调用方式。

为了处理事件（如按钮点击、输入等），我们需要注册 **事件监听器**。事件监听器是一个监听事件发生并作出响应的函数。事件监听器可以更新用户界面、向服务器发送请求，或者完成其他需要响应用户操作的任务。我们通过使用 [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) 并提供一个要执行的函数来添加事件监听器。

> **NOTE:** 值得注意的是，创建事件监听器有多种方式。你可以使用匿名函数，也可以创建命名函数。你还可以使用各种快捷方式，比如设置 `click` 属性，或者使用 `addEventListener`。在我们的练习中，我们将专注于 `addEventListener` 和匿名函数，因为这是 Web 开发者最常用的技术之一。它也是最灵活的，因为 `addEventListener` 适用于所有事件，并且事件名称可以作为参数提供。

### 常见事件

在创建应用程序时，你可以监听的 [事件种类繁多](https://developer.mozilla.org/docs/Web/Events)。基本上，用户在页面上执行的任何操作都会触发事件，这为你提供了极大的灵活性来确保用户获得理想的体验。幸运的是，你通常只需要使用少数几种事件。以下是一些常见的事件（包括我们在创建游戏时会用到的两种）：

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event)：用户点击了某个元素，通常是按钮或超链接
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)：用户点击了鼠标右键
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event)：用户高亮了一些文本
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event)：用户输入了一些文本

## 创建游戏

我们将通过创建一个游戏来探索 JavaScript 中事件的工作原理。我们的游戏将测试玩家的打字技能，这是所有开发者都应该具备但常常被低估的一项技能。我们都应该练习打字！游戏的总体流程如下：

- 玩家点击开始按钮，看到一段需要输入的文字
- 玩家尽可能快地在文本框中输入这段文字
  - 每完成一个单词，下一个单词会被高亮显示
  - 如果玩家输入错误，文本框会变成红色
  - 当玩家完成输入后，会显示一条成功消息以及所用时间

让我们开始构建游戏，同时学习事件的相关知识吧！

### 文件结构

我们需要创建三个文件：**index.html**、**script.js** 和 **style.css**。让我们先设置好这些文件，以便后续开发更加顺利。

- 打开控制台或终端窗口，输入以下命令创建一个新文件夹：

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- 打开 Visual Studio Code

```bash
code .
```

- 在 Visual Studio Code 中为文件夹添加以下三个文件：
  - index.html
  - script.js
  - style.css

## 创建用户界面

根据需求分析，我们知道 HTML 页面需要以下几个元素。这有点像做菜时需要准备的食材：

- 一个用于显示玩家需要输入的文字的区域
- 一个用于显示消息（如成功消息）的区域
- 一个用于输入的文本框
- 一个开始按钮

每个元素都需要一个 ID，以便我们在 JavaScript 中操作它们。我们还需要添加对 CSS 和 JavaScript 文件的引用。

创建一个名为 **index.html** 的新文件，并添加以下 HTML：

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

### 启动应用程序

开发时最好采用迭代方式，随时查看效果。让我们启动应用程序。Visual Studio Code 有一个非常棒的扩展 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)，它可以在本地托管你的应用程序，并在每次保存时刷新浏览器。

- 按照链接安装 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - 浏览器会提示你打开 Visual Studio Code，然后 Visual Studio Code 会提示你进行安装
  - 如果有提示，请重启 Visual Studio Code
- 安装完成后，在 Visual Studio Code 中按 Ctrl-Shift-P（或 Cmd-Shift-P）打开命令面板
- 输入 **Live Server: Open with Live Server**
  - Live Server 会开始托管你的应用程序
- 打开浏览器，导航到 **https://localhost:5500**
- 你现在应该能看到刚刚创建的页面！

接下来让我们添加一些功能。

## 添加 CSS

HTML 创建完成后，我们需要添加核心样式的 CSS。我们需要高亮玩家应该输入的单词，并在玩家输入错误时为文本框着色。我们将通过两个类来实现这些功能。

创建一个名为 **style.css** 的新文件，并添加以下语法。

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

✅ 关于 CSS，你可以根据自己的喜好设计页面布局。花点时间让页面更美观：

- 选择不同的字体
- 为标题添加颜色
- 调整元素大小

## JavaScript

用户界面创建完成后，我们将重点放在提供逻辑的 JavaScript 上。我们将把它分解为几个步骤：

- [创建常量](../../../../4-typing-game/typing-game)
- [添加开始游戏的事件监听器](../../../../4-typing-game/typing-game)
- [添加输入事件监听器](../../../../4-typing-game/typing-game)

首先，创建一个名为 **script.js** 的新文件。

### 创建常量

我们需要一些内容来简化编程。类似于做菜的配料清单，我们需要以下内容：

- 包含所有句子的数组
- 用于存储当前句子中所有单词的空数组
- 用于存储玩家当前输入单词索引的变量
- 玩家点击开始按钮的时间

我们还需要引用以下用户界面元素：

- 文本框（**typed-value**）
- 显示句子的区域（**quote**）
- 显示消息的区域（**message**）

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

✅ 为你的游戏添加更多句子

> **NOTE:** 我们可以通过 `document.getElementById` 在代码中随时获取这些元素。由于我们会经常引用这些元素，为了避免字符串拼写错误，我们使用常量来管理它们。像 [Vue.js](https://vuejs.org/) 或 [React](https://reactjs.org/) 这样的框架可以帮助你更好地集中管理代码。

花点时间观看关于 `const`、`let` 和 `var` 的视频

[![变量类型](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "变量类型")

> 🎥 点击上方图片观看关于变量的视频。

### 添加开始逻辑

游戏开始时，玩家会点击开始按钮。当然，我们无法预测玩家何时点击开始按钮。这时 [事件监听器](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) 就派上用场了。事件监听器允许我们监听某些事件的发生，并在事件发生时执行代码。在我们的例子中，我们希望在用户点击开始按钮时执行代码。

当用户点击 **开始** 时，我们需要选择一个句子，设置用户界面，并初始化当前单词和计时的追踪。以下是需要添加的 JavaScript，我们将在代码块后进行讲解。

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

让我们分解代码！

- 设置单词追踪
  - 使用 [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 和 [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 随机选择 `quotes` 数组中的一个句子
  - 将 `quote` 转换为 `words` 数组，以便追踪玩家当前输入的单词
  - 将 `wordIndex` 设置为 0，因为玩家从第一个单词开始
- 设置用户界面
  - 创建一个包含每个单词的 `span` 元素的 `spanWords` 数组
    - 这样我们可以高亮显示当前单词
  - 使用 `join` 方法将数组转换为字符串，并更新 `quoteElement` 的 `innerHTML`
    - 这会将句子显示给玩家
  - 将第一个 `span` 元素的 `className` 设置为 `highlight`，以黄色高亮显示
  - 通过将 `messageElement` 的 `innerText` 设置为空字符串来清空消息区域
- 设置文本框
  - 清空 `typedValueElement` 的当前 `value`
  - 将焦点设置到 `typedValueElement`
- 通过调用 `getTime` 开始计时

### 添加输入逻辑

当玩家输入时，会触发 `input` 事件。这个事件监听器将检查玩家输入是否正确，并处理游戏的当前状态。在 **script.js** 文件末尾添加以下代码。我们将在代码块后进行讲解。

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

让我们分解代码！我们首先获取当前单词和玩家目前输入的内容。然后通过一系列逻辑检查，判断句子是否完成、单词是否完成、单词是否正确，或者是否存在错误。

- 句子完成：当 `typedValue` 等于 `currentWord` 且 `wordIndex` 等于 `words` 长度减一时
  - 通过将当前时间减去 `startTime` 计算 `elapsedTime`
  - 将 `elapsedTime` 除以 1,000，将毫秒转换为秒
  - 显示成功消息
- 单词完成：当 `typedValue` 以空格结尾（表示单词结束）且 `typedValue` 等于 `currentWord` 时
  - 将 `typedElement` 的 `value` 设置为空，以便输入下一个单词
  - 增加 `wordIndex`，以移动到下一个单词
  - 遍历 `quoteElement` 的所有 `childNodes`，将 `className` 设置为空，恢复默认显示
  - 将当前单词的 `className` 设置为 `highlight`，标记为下一个需要输入的单词
- 当前单词输入正确（但未完成）：当 `currentWord` 以 `typedValue` 开头时
  - 通过清空 `className` 确保 `typedValueElement` 显示为默认状态
- 如果以上条件都不满足，则存在错误
  - 将 `typedValueElement` 的 `className` 设置为 `error`

## 测试你的应用程序

你已经完成了！最后一步是确保我们的应用程序能够正常运行。试试看吧！如果出现错误也不用担心，**所有开发者**都会遇到错误。检查错误信息并进行调试。

点击 **开始**，然后开始输入！它应该看起来像我们之前看到的动画。

![游戏运行动画](../../../../4-typing-game/images/demo.gif)

---

## 🚀 挑战

添加更多功能

- 在完成游戏时禁用 `input` 事件监听器，并在点击按钮时重新启用
- 在玩家完成句子时禁用文本框
- 显示一个模态对话框，包含成功消息
- 使用 [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) 存储高分

## 课后测验

[课后测验](https://ff-quizzes.netlify.app/web/quiz/22)

## 复习与自学

阅读 [浏览器中可用的所有事件](https://developer.mozilla.org/docs/Web/Events)，并思考每种事件适用的场景。

## 作业

[创建一个新的键盘游戏](assignment.md)

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档作为权威来源。对于关键信息，建议使用专业人工翻译。我们对于因使用此翻译而引起的任何误解或误读不承担责任。