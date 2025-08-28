<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f587e913e3f7c0b1c549a05dd74ee8e5",
  "translation_date": "2025-08-24T00:02:06+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "tw"
}
-->
# 建立銀行應用程式第 3 部分：抓取與使用資料的方法

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/45)

### 簡介

在每個網頁應用程式的核心都有一個關鍵元素：*資料*。資料可以有多種形式，但其主要目的是向使用者顯示資訊。隨著網頁應用程式變得越來越互動且複雜，使用者如何存取和互動資訊已成為網頁開發中的關鍵部分。

在本課中，我們將學習如何從伺服器非同步抓取資料，並使用這些資料在不重新載入 HTML 的情況下，在網頁上顯示資訊。

### 先決條件

在本課之前，你需要完成網頁應用程式的 [登入與註冊表單](../2-forms/README.md) 部分。此外，你需要安裝 [Node.js](https://nodejs.org) 並在本地執行 [伺服器 API](../api/README.md)，以便獲取帳戶資料。

你可以透過在終端機執行以下指令來測試伺服器是否正常運行：

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX 與資料抓取

傳統的網站在使用者點擊連結或提交表單時，會透過重新載入整個 HTML 頁面來更新顯示的內容。每次需要載入新資料時，網頁伺服器會返回一個全新的 HTML 頁面，瀏覽器需要重新處理，這會中斷當前的使用者操作並限制重新載入期間的互動。這種工作流程也被稱為 *多頁應用程式*（Multi-Page Application, MPA）。

![多頁應用程式的更新工作流程](../../../../7-bank-project/3-data/images/mpa.png)

隨著網頁應用程式變得更加複雜和互動性更強，一種名為 [AJAX（非同步 JavaScript 和 XML）](https://en.wikipedia.org/wiki/Ajax_(programming)) 的新技術應運而生。這種技術允許網頁應用程式使用 JavaScript 非同步地向伺服器發送和接收資料，而無需重新載入 HTML 頁面，從而實現更快的更新和更流暢的使用者互動。當從伺服器接收到新資料時，可以使用 [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API 透過 JavaScript 更新當前的 HTML 頁面。隨著時間的推移，這種方法演變成現在所謂的 [*單頁應用程式*（Single-Page Application, SPA）](https://en.wikipedia.org/wiki/Single-page_application)。

![單頁應用程式的更新工作流程](../../../../7-bank-project/3-data/images/spa.png)

在 AJAX 剛推出時，唯一可用的非同步抓取資料的 API 是 [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)。但現代瀏覽器現在也實現了更方便且功能更強大的 [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API)，它使用 Promise 並更適合處理 JSON 資料。

> 雖然所有現代瀏覽器都支援 `Fetch API`，但如果你希望你的網頁應用程式能在舊版或過時的瀏覽器上運行，最好先檢查 [caniuse.com 上的相容性表](https://caniuse.com/fetch)。

### 任務

在[上一課](../2-forms/README.md)中，我們實現了註冊表單來建立帳戶。現在我們將新增程式碼來使用現有帳戶登入並抓取其資料。打開 `app.js` 檔案，新增一個新的 `login` 函式：

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

我們首先使用 `getElementById()` 取得表單元素，然後透過 `loginForm.user.value` 從輸入欄位中獲取使用者名稱。每個表單控制項都可以透過其名稱（在 HTML 中使用 `name` 屬性設定）作為表單的屬性來存取。

類似於我們為註冊所做的，我們將建立另一個函式來執行伺服器請求，但這次是為了抓取帳戶資料：

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

我們使用 `fetch` API 非同步地向伺服器請求資料，但這次除了要呼叫的 URL 外，我們不需要其他額外的參數，因為我們只是查詢資料。預設情況下，`fetch` 會建立一個 [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP 請求，這正是我們需要的。

✅ `encodeURIComponent()` 是一個用於對 URL 中的特殊字元進行編碼的函式。如果我們不呼叫此函式而直接在 URL 中使用 `user` 值，可能會出現什麼問題？

現在我們來更新 `login` 函式以使用 `getAccount`：

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

首先，由於 `getAccount` 是一個非同步函式，我們需要使用 `await` 關鍵字來等待伺服器的結果。與任何伺服器請求一樣，我們還需要處理錯誤情況。目前我們只會新增一個日誌訊息來顯示錯誤，稍後再回來處理。

接著，我們需要將資料儲存到某個地方，以便稍後用於顯示儀表板資訊。由於 `account` 變數尚未存在，我們會在檔案的頂部建立一個全域變數：

```js
let account = null;
```

在使用者資料儲存到變數後，我們可以使用我們已有的 `navigate()` 函式從 *登入* 頁面導航到 *儀表板*。

最後，我們需要在提交登入表單時呼叫 `login` 函式，透過修改 HTML：

```html
<form id="loginForm" action="javascript:login()">
```

透過註冊新帳戶並嘗試使用相同帳戶登入，測試一切是否正常運行。

在進入下一部分之前，我們還可以透過在函式底部新增以下內容來完成 `register` 函式：

```js
account = result;
navigate('/dashboard');
```

✅ 你知道嗎？預設情況下，你只能從與你正在查看的網頁相同的 *域名與埠* 呼叫伺服器 API？這是瀏覽器強制執行的安全機制。但等等，我們的網頁應用程式運行在 `localhost:3000`，而伺服器 API 運行在 `localhost:5000`，為什麼它能正常運行？透過使用一種名為 [跨來源資源共享（CORS）](https://developer.mozilla.org/docs/Web/HTTP/CORS) 的技術，如果伺服器在回應中新增特殊標頭，允許特定域名的例外情況，就可以執行跨來源 HTTP 請求。

> 透過學習這個[課程](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)來進一步了解 API。

## 更新 HTML 以顯示資料

現在我們已經有了使用者資料，我們需要更新現有的 HTML 來顯示它。我們已經知道如何使用例如 `document.getElementById()` 從 DOM 中檢索元素。在獲取基礎元素後，以下是一些可以用來修改或新增子元素的 API：

- 使用 [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) 屬性可以更改元素的文字內容。請注意，更改此值會移除該元素的所有子元素（如果有的話），並用提供的文字取代。因此，將空字串 `''` 賦值給它也是一種有效的方法來移除給定元素的所有子元素。

- 使用 [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) 與 [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) 方法可以建立並附加一個或多個新的子元素。

✅ 使用元素的 [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) 屬性也可以更改其 HTML 內容，但應避免使用此方法，因為它容易受到 [跨站腳本（XSS）](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting) 攻擊。

### 任務

在進入 *儀表板* 畫面之前，我們還需要在 *登入* 頁面上完成一件事。目前，如果你嘗試使用不存在的使用者名稱登入，會在主控台顯示一條訊息，但對於普通使用者來說，畫面上什麼都沒變，完全不知道發生了什麼。

讓我們在登入表單中新增一個佔位元素，以便在需要時顯示錯誤訊息。一個不錯的位置是在登入 `<button>` 之前：

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

這個 `<div>` 元素是空的，這意味著在我們新增內容之前，畫面上不會顯示任何東西。我們還為它設定了一個 `id`，以便可以透過 JavaScript 輕鬆檢索它。

回到 `app.js` 檔案，建立一個新的輔助函式 `updateElement`：

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

這個函式非常簡單：給定一個元素 *id* 和 *text*，它會更新具有匹配 `id` 的 DOM 元素的文字內容。讓我們在 `login` 函式中用此方法取代之前的錯誤訊息：

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

現在，如果你嘗試使用無效帳戶登入，你應該會看到類似以下的畫面：

![登入時顯示錯誤訊息的截圖](../../../../7-bank-project/3-data/images/login-error.png)

現在我們有了視覺上顯示的錯誤文字，但如果你使用螢幕閱讀器嘗試，會發現什麼都沒有被宣告。為了讓動態新增到頁面的文字能被螢幕閱讀器宣告，我們需要使用一種名為 [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) 的技術。在這裡，我們將使用一種特定類型的 Live Region，稱為警示（alert）：

```html
<div id="loginError" role="alert"></div>
```

為 `register` 函式的錯誤實現相同的行為（別忘了更新 HTML）。

## 在儀表板上顯示資訊

使用我們剛剛學到的技術，我們還將處理在儀表板頁面上顯示帳戶資訊。

以下是從伺服器接收到的帳戶物件的樣子：

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

> 注意：為了讓你的操作更簡單，你可以使用已經填充了資料的預設 `test` 帳戶。

### 任務

首先，將 HTML 中的 "Balance" 區塊替換為新增的佔位元素：

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

接著，我們會在下方新增一個區塊來顯示帳戶描述：

```html
<h2 id="description"></h2>
```

✅ 由於帳戶描述作為其下方內容的標題，因此它被語意化地標記為標題。了解更多關於 [標題結構](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) 為何對無障礙性很重要，並批判性地檢視頁面，判斷還有哪些內容可以作為標題。

接下來，我們會在 `app.js` 中建立一個新函式來填充佔位元素：

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

首先，我們檢查是否有需要的帳戶資料，然後再繼續。接著，我們使用之前建立的 `updateElement()` 函式來更新 HTML。

> 為了讓餘額顯示得更漂亮，我們使用方法 [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 強制顯示小數點後 2 位數。

現在我們需要在每次載入儀表板時呼叫 `updateDashboard()` 函式。如果你已完成 [第一課的作業](../1-template-route/assignment.md)，這應該很簡單，否則你可以使用以下實現。

將以下程式碼新增到 `updateRoute()` 函式的結尾：

```js
if (typeof route.init === 'function') {
  route.init();
}
```

並更新路由定義為：

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

透過此更改，每次顯示儀表板頁面時，`updateDashboard()` 函式都會被呼叫。登入後，你應該能看到帳戶餘額、貨幣和描述。

## 使用 HTML 模板動態建立表格列

在[第一課](../1-template-route/README.md)中，我們使用 HTML 模板與 [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) 方法實現了應用程式中的導航。模板也可以更小，並用於動態填充頁面中重複的部分。

我們將使用類似的方法來在 HTML 表格中顯示交易列表。

### 任務

在 HTML `<body>` 中新增一個新模板：

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

此模板代表一個表格列，包含我們想要填充的 3 個欄位：交易的 *日期*、*物件* 和 *金額*。

接著，為儀表板模板中的表格 `<tbody>` 元素新增此 `id` 屬性，以便透過 JavaScript 更容易找到它：

```html
<tbody id="transactions"></tbody>
```

我們的 HTML 已準備好，現在切換到 JavaScript 程式碼並建立一個新函式 `createTransactionRow`：

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

此函式正如其名稱所示：使用我們先前建立的模板，建立一個新的表格列，並使用交易資料填充其內容。我們將在 `updateDashboard()` 函式中使用此函式來填充表格：

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

在這裡，我們使用方法 [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment)，它會建立一個新的 DOM 片段，我們可以在其上操作，然後最終將其附加到 HTML 表格中。

在此程式碼能正常運行之前，我們還需要做一件事，因為我們的 `updateElement()` 函式目前僅支援文字內容。讓我們稍微修改其程式碼：

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

我們使用 [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) 方法，因為它允許將文字或 [DOM 節點](https://developer.mozilla.org/docs/Web/API/Node) 附加到父元素，這非常適合我們的所有使用情境。
如果你嘗試使用 `test` 帳戶登入，現在應該可以在儀表板上看到交易清單了 🎉。

---

## 🚀 挑戰

一起合作讓儀表板頁面看起來像一個真正的銀行應用程式。如果你已經為你的應用程式設計了樣式，試著使用 [媒體查詢](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) 來創建一個 [響應式設計](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)，讓它在桌面和行動裝置上都能良好運作。

以下是一個設計過的儀表板頁面的範例：

![儀表板樣式化後的範例結果截圖](../../../../7-bank-project/images/screen2.png)

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/46)

## 作業

[重構並註解你的程式碼](assignment.md)

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對於因使用此翻譯而引起的任何誤解或誤讀概不負責。