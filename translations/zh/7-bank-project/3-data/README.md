<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f587e913e3f7c0b1c549a05dd74ee8e5",
  "translation_date": "2025-08-24T00:01:35+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "zh"
}
-->
# 构建银行应用程序第三部分：数据获取与使用方法

## 课前测验

[课前测验](https://ff-quizzes.netlify.app/web/quiz/45)

### 简介

在每个网页应用的核心部分都有一个重要元素：*数据*。数据可以有多种形式，但其主要目的是向用户展示信息。随着网页应用变得越来越互动和复杂，用户如何访问和交互信息已经成为网页开发的关键部分。

在本课中，我们将学习如何从服务器异步获取数据，并使用这些数据在网页上显示信息，而无需重新加载 HTML。

### 前置条件

你需要完成本课的网页应用的[登录和注册表单](../2-forms/README.md)部分。此外，你需要安装 [Node.js](https://nodejs.org) 并[在本地运行服务器 API](../api/README.md)，以便获取账户数据。

你可以通过在终端中执行以下命令来测试服务器是否正常运行：

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX 和数据获取

传统网站在用户选择链接或通过表单提交数据时，会通过重新加载整个 HTML 页面来更新显示的内容。每次需要加载新数据时，网页服务器都会返回一个全新的 HTML 页面，浏览器需要重新处理这些页面，从而中断当前用户操作并限制加载期间的交互。这种工作流程也被称为*多页面应用*（Multi-Page Application，MPA）。

![多页面应用中的更新工作流程](../../../../7-bank-project/3-data/images/mpa.png)

随着网页应用变得更加复杂和互动，一种新的技术出现了，即 [AJAX（异步 JavaScript 和 XML）](https://en.wikipedia.org/wiki/Ajax_(programming))。这种技术允许网页应用使用 JavaScript 异步地向服务器发送和检索数据，而无需重新加载 HTML 页面，从而实现更快的更新和更流畅的用户交互。当从服务器接收到新数据时，可以使用 [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API 通过 JavaScript 更新当前的 HTML 页面。随着时间的推移，这种方法演变为现在的[*单页面应用*（Single-Page Application，SPA）](https://en.wikipedia.org/wiki/Single-page_application)。

![单页面应用中的更新工作流程](../../../../7-bank-project/3-data/images/spa.png)

在 AJAX 刚推出时，唯一可用的异步获取数据的 API 是 [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)。但现代浏览器现在还实现了更方便且功能更强大的 [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API)，它使用 Promise，并且更适合处理 JSON 数据。

> 虽然所有现代浏览器都支持 `Fetch API`，但如果你希望你的网页应用在旧版或遗留浏览器上运行，最好先查看 [caniuse.com 的兼容性表](https://caniuse.com/fetch)。

### 任务

在[上一课](../2-forms/README.md)中，我们实现了注册表单以创建账户。现在我们将添加代码以使用现有账户登录并获取其数据。打开 `app.js` 文件并添加一个新的 `login` 函数：

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

我们首先使用 `getElementById()` 获取表单元素，然后通过 `loginForm.user.value` 从输入中获取用户名。每个表单控件都可以通过其名称（在 HTML 中通过 `name` 属性设置）作为表单的属性来访问。

类似于我们为注册所做的操作，我们将创建另一个函数来执行服务器请求，这次是为了检索账户数据：

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

我们使用 `fetch` API 异步地从服务器请求数据，但这次除了调用的 URL 外不需要任何额外参数，因为我们只是查询数据。默认情况下，`fetch` 创建一个 [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP 请求，这正是我们需要的。

✅ `encodeURIComponent()` 是一个用于对 URL 中的特殊字符进行转义的函数。如果我们不调用此函数而直接在 URL 中使用 `user` 值，可能会出现什么问题？

现在我们更新 `login` 函数以使用 `getAccount`：

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

首先，由于 `getAccount` 是一个异步函数，我们需要使用 `await` 关键字来等待服务器结果。与任何服务器请求一样，我们还需要处理错误情况。目前我们只添加一个日志消息来显示错误，稍后再处理。

然后我们需要将数据存储在某个地方，以便稍后用于显示仪表盘信息。由于 `account` 变量尚不存在，我们将在文件顶部创建一个全局变量：

```js
let account = null;
```

在用户数据保存到变量后，我们可以使用已有的 `navigate()` 函数从*登录*页面导航到*仪表盘*。

最后，我们需要在登录表单提交时调用我们的 `login` 函数，通过修改 HTML：

```html
<form id="loginForm" action="javascript:login()">
```

通过注册新账户并尝试使用相同账户登录，测试一切是否正常工作。

在继续下一部分之前，我们还可以通过在函数底部添加以下内容来完成 `register` 函数：

```js
account = result;
navigate('/dashboard');
```

✅ 你知道吗？默认情况下，你只能从与当前网页相同的*域名和端口*调用服务器 API。这是浏览器强制执行的安全机制。但等等，我们的网页应用运行在 `localhost:3000`，而服务器 API 运行在 `localhost:5000`，为什么它能正常工作？通过使用一种称为[跨域资源共享（CORS）](https://developer.mozilla.org/docs/Web/HTTP/CORS)的技术，如果服务器在响应中添加特殊头部，允许特定域名的例外，就可以执行跨域 HTTP 请求。

> 通过学习这节[课程](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)，了解更多关于 API 的知识。

## 更新 HTML 以显示数据

现在我们有了用户数据，我们需要更新现有 HTML 以显示这些数据。我们已经知道如何使用例如 `document.getElementById()` 从 DOM 中检索元素。在获取基础元素后，可以使用以下 API 修改或添加子元素：

- 使用 [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) 属性可以更改元素的文本。注意，更改此值会移除元素的所有子元素（如果有），并用提供的文本替换。因此，将空字符串 `''` 分配给它也是一种高效的方法来移除给定元素的所有子元素。

- 使用 [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) 和 [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) 方法可以创建并附加一个或多个新的子元素。

✅ 使用元素的 [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) 属性也可以更改其 HTML 内容，但应避免使用此方法，因为它容易受到[跨站脚本（XSS）](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting)攻击。

### 任务

在进入*仪表盘*屏幕之前，我们需要在*登录*页面上做一件事。目前，如果你尝试使用不存在的用户名登录，控制台会显示一条消息，但普通用户不会看到任何变化，也不知道发生了什么。

让我们在登录表单中添加一个占位元素，以便在需要时显示错误消息。一个不错的位置是登录 `<button>` 之前：

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

这个 `<div>` 元素是空的，这意味着在我们添加内容之前，屏幕上不会显示任何内容。我们还为它设置了一个 `id`，以便通过 JavaScript 轻松检索。

回到 `app.js` 文件并创建一个新的辅助函数 `updateElement`：

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

这个函数非常简单：给定一个元素 *id* 和 *text*，它会更新与该 `id` 匹配的 DOM 元素的文本内容。让我们在 `login` 函数中用此方法替换之前的错误消息：

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

现在，如果你尝试使用无效账户登录，你应该会看到类似这样的内容：

![显示登录错误消息的截图](../../../../7-bank-project/3-data/images/login-error.png)

现在我们有了一个视觉上显示的错误文本，但如果你使用屏幕阅读器尝试，你会发现没有任何提示。为了让动态添加到页面的文本被屏幕阅读器宣布，我们需要使用一种称为[实时区域（Live Region）](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)的技术。这里我们将使用一种特定类型的实时区域，称为警报：

```html
<div id="loginError" role="alert"></div>
```

为 `register` 函数的错误实现相同的行为（别忘了更新 HTML）。

## 在仪表盘上显示信息

使用我们刚刚看到的相同技术，我们还将处理在仪表盘页面上显示账户信息。

以下是从服务器接收到的账户对象的样子：

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> 注意：为了让你的操作更简单，你可以使用已经填充数据的预先存在的 `test` 账户。

### 任务

首先，我们替换 HTML 中的“余额”部分以添加占位元素：

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

我们还将在下面添加一个新部分以显示账户描述：

```html
<h2 id="description"></h2>
```

✅ 由于账户描述充当了内容下方的标题，它在语义上被标记为标题。了解更多关于[标题结构](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility)对可访问性的重要性，并批判性地审视页面以确定还有哪些内容可以作为标题。

接下来，我们将在 `app.js` 中创建一个新函数以填充占位符：

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

首先，我们检查是否有需要的账户数据，然后再继续。然后我们使用之前创建的 `updateElement()` 函数更新 HTML。

> 为了让余额显示更美观，我们使用方法 [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 强制显示小数点后两位。

现在我们需要在每次加载仪表盘时调用 `updateDashboard()` 函数。如果你已经完成了[第一课的作业](../1-template-route/assignment.md)，这应该很简单，否则你可以使用以下实现。

将以下代码添加到 `updateRoute()` 函数的末尾：

```js
if (typeof route.init === 'function') {
  route.init();
}
```

并使用以下代码更新路由定义：

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

通过此更改，每次显示仪表盘页面时，都会调用 `updateDashboard()` 函数。登录后，你应该能够看到账户余额、货币和描述。

## 使用 HTML 模板动态创建表格行

在[第一课](../1-template-route/README.md)中，我们使用 HTML 模板和 [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) 方法实现了应用中的导航。模板也可以更小，并用于动态填充页面的重复部分。

我们将使用类似的方法在 HTML 表格中显示交易列表。

### 任务

在 HTML `<body>` 中添加一个新模板：

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

此模板表示单个表格行，包含我们想要填充的三个列：交易的*日期*、*对象*和*金额*。

然后，将此 `id` 属性添加到仪表盘模板中表格的 `<tbody>` 元素，以便通过 JavaScript 更容易找到：

```html
<tbody id="transactions"></tbody>
```

我们的 HTML 准备好了，现在切换到 JavaScript 代码并创建一个新函数 `createTransactionRow`：

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

此函数正如其名称所示：使用我们之前创建的模板，它创建一个新的表格行并使用交易数据填充其内容。我们将在 `updateDashboard()` 函数中使用它来填充表格：

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

这里我们使用方法 [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment)，它创建一个新的 DOM 片段，我们可以在其上操作，然后最终将其附加到我们的 HTML 表格中。

还有一件事我们需要做才能让此代码正常工作，因为我们的 `updateElement()` 函数目前仅支持文本内容。让我们稍微修改一下它的代码：

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

我们使用 [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) 方法，因为它允许将文本或 [DOM 节点](https://developer.mozilla.org/docs/Web/API/Node) 附加到父元素，这非常适合我们的所有用例。
如果你尝试使用 `test` 账户登录，现在应该可以在仪表板上看到交易列表了 🎉。

---

## 🚀 挑战

合作将仪表板页面打造成一个真实的银行应用。如果你已经为应用程序设计了样式，尝试使用 [媒体查询](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) 来创建一个 [响应式设计](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)，使其在桌面和移动设备上都能良好运行。

以下是一个经过样式设计的仪表板页面示例：

![仪表板样式化后的示例结果截图](../../../../7-bank-project/images/screen2.png)

## 课后测验

[课后测验](https://ff-quizzes.netlify.app/web/quiz/46)

## 作业

[重构并注释你的代码](assignment.md)

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档作为权威来源。对于关键信息，建议使用专业人工翻译。因使用本翻译而引起的任何误解或误读，我们概不负责。