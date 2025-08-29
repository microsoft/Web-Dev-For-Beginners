<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89d0df9854ed020f155e94882ae88d4c",
  "translation_date": "2025-08-28T23:30:16+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "mo"
}
-->
# 建立銀行應用程式第三部分：資料的獲取與使用方法

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/45)

### 介紹

在每個網頁應用程式的核心中都有一個重要元素：*資料*。資料可以有多種形式，但其主要目的是向使用者顯示資訊。隨著網頁應用程式越來越互動化和複雜，使用者如何存取和互動資訊已成為網頁開發的關鍵部分。

在本課程中，我們將學習如何以非同步方式從伺服器獲取資料，並使用這些資料在不重新載入 HTML 的情況下顯示於網頁上。

### 前置條件

您需要完成網頁應用程式的[登入與註冊表單](../2-forms/README.md)部分，並安裝 [Node.js](https://nodejs.org) 和[在本地執行伺服器 API](../api/README.md)，以便獲取帳戶資料。

您可以透過在終端機執行以下指令來測試伺服器是否正常運行：

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX 與資料獲取

傳統的網站在使用者選擇連結或使用表單提交資料時，會透過重新載入整個 HTML 頁面來更新顯示的內容。每次需要載入新資料時，網頁伺服器都會返回一個全新的 HTML 頁面，瀏覽器需要重新處理，這會中斷使用者的操作並限制重新載入期間的互動。這種工作流程也被稱為*多頁應用程式*（Multi-Page Application，MPA）。

![多頁應用程式的更新工作流程](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.mo.png)

隨著網頁應用程式變得越來越複雜和互動化，一種名為 [AJAX（非同步 JavaScript 和 XML）](https://en.wikipedia.org/wiki/Ajax_(programming)) 的新技術出現了。這項技術允許網頁應用程式使用 JavaScript 非同步地向伺服器發送和接收資料，而無需重新載入 HTML 頁面，從而實現更快的更新和更流暢的使用者互動。當從伺服器接收到新資料時，可以使用 [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API 透過 JavaScript 更新當前的 HTML 頁面。隨著時間的推移，這種方法演變成現在所謂的[*單頁應用程式*（Single-Page Application，SPA）](https://en.wikipedia.org/wiki/Single-page_application)。

![單頁應用程式的更新工作流程](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.mo.png)

在 AJAX 剛推出時，唯一可用的非同步獲取資料的 API 是 [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)。但現代瀏覽器現在也實現了更方便且功能更強大的 [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API)，它使用 Promise 並更適合處理 JSON 資料。

> 雖然所有現代瀏覽器都支援 `Fetch API`，但如果您希望您的網頁應用程式能在舊版或老舊瀏覽器上運行，最好先檢查 [caniuse.com 的相容性表](https://caniuse.com/fetch)。

### 任務

在[上一課程](../2-forms/README.md)中，我們實現了註冊表單以建立帳戶。現在我們將新增程式碼以使用現有帳戶登入並獲取其資料。打開 `app.js` 檔案並新增一個 `login` 函數：

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

首先，我們使用 `getElementById()` 獲取表單元素，然後透過 `loginForm.user.value` 從輸入欄位中獲取使用者名稱。每個表單控制項都可以透過其名稱（在 HTML 中使用 `name` 屬性設定）作為表單的屬性來存取。

與我們在註冊中所做的類似，我們將建立另一個函數來執行伺服器請求，但這次是用於獲取帳戶資料：

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

我們使用 `fetch` API 非同步地向伺服器請求資料，但這次除了要呼叫的 URL 外不需要任何額外的參數，因為我們只是查詢資料。預設情況下，`fetch` 會建立一個 [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP 請求，這正是我們需要的。

✅ `encodeURIComponent()` 是一個用於對 URL 中的特殊字元進行編碼的函數。如果我們不呼叫此函數而直接在 URL 中使用 `user` 值，可能會出現什麼問題？

現在我們來更新 `login` 函數以使用 `getAccount`：

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

首先，由於 `getAccount` 是一個非同步函數，我們需要使用 `await` 關鍵字來等待伺服器的結果。與任何伺服器請求一樣，我們還需要處理錯誤情況。目前我們只會新增一個日誌訊息來顯示錯誤，稍後再進一步處理。

接著，我們需要將資料儲存到某個地方，以便稍後用於顯示儀表板資訊。由於 `account` 變數尚未存在，我們會在檔案的頂部建立一個全域變數：

```js
let account = null;
```

在使用者資料儲存到變數後，我們可以使用已經存在的 `navigate()` 函數從*登入*頁面導航到*儀表板*。

最後，我們需要在提交登入表單時呼叫 `login` 函數，透過修改 HTML：

```html
<form id="loginForm" action="javascript:login()">
```

透過註冊新帳戶並嘗試使用相同帳戶登入，測試一切是否正常運行。

在進入下一部分之前，我們還可以完成 `register` 函數，透過在函數底部新增以下內容：

```js
account = result;
navigate('/dashboard');
```

✅ 您知道嗎？預設情況下，您只能從與您正在查看的網頁相同的*域名和埠*呼叫伺服器 API？這是瀏覽器強制執行的安全機制。但等等，我們的網頁應用程式運行在 `localhost:3000`，而伺服器 API 運行在 `localhost:5000`，為什麼它能正常運行？透過使用一種名為 [跨來源資源共享（CORS）](https://developer.mozilla.org/docs/Web/HTTP/CORS) 的技術，如果伺服器在回應中新增特殊標頭，允許特定域名的例外情況，就可以執行跨來源 HTTP 請求。

> 透過學習這個[課程](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)了解更多關於 API 的知識。

## 更新 HTML 以顯示資料

現在我們已經有了使用者資料，我們需要更新現有的 HTML 以顯示它。我們已經知道如何使用例如 `document.getElementById()` 從 DOM 中獲取元素。在獲取基礎元素後，以下是一些可以用來修改或新增子元素的 API：

- 使用 [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) 屬性可以更改元素的文字內容。請注意，更改此值會移除元素的所有子元素（如果有的話），並用提供的文字替換。因此，透過將空字串 `''` 賦值給它，也是一種有效的方法來移除給定元素的所有子元素。

- 使用 [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) 與 [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) 方法可以建立並附加一個或多個新的子元素。

✅ 使用元素的 [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) 屬性也可以更改其 HTML 內容，但應避免使用此方法，因為它容易受到[跨站腳本（XSS）](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting)攻擊。

### 任務

在進入儀表板畫面之前，我們需要在*登入*頁面上做一些額外的處理。目前，如果您嘗試使用不存在的使用者名稱登入，訊息會顯示在主控台中，但對普通使用者來說，畫面上沒有任何變化，您不知道發生了什麼。

讓我們在登入表單中新增一個佔位元素，以便在需要時顯示錯誤訊息。一個不錯的位置是登入 `<button>` 的前面：

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

這個 `<div>` 元素是空的，意味著在我們新增內容之前，畫面上不會顯示任何東西。我們還為它設定了一個 `id`，以便可以透過 JavaScript 輕鬆地獲取它。

回到 `app.js` 檔案並建立一個新的輔助函數 `updateElement`：

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

這個函數非常簡單：給定一個元素 *id* 和 *text*，它會更新具有匹配 `id` 的 DOM 元素的文字內容。讓我們在 `login` 函數中使用此方法來取代之前的錯誤訊息：

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

現在，如果您嘗試使用無效帳戶登入，您應該會看到類似以下的畫面：

![顯示登入錯誤訊息的截圖](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.mo.png)

現在我們有了視覺上顯示的錯誤文字，但如果您使用螢幕閱讀器嘗試，您會注意到什麼都沒有被宣告。為了讓動態新增到頁面的文字能被螢幕閱讀器宣告，我們需要使用一種名為[即時區域（Live Region）](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)的技術。這裡我們將使用一種特定類型的即時區域，稱為警告：

```html
<div id="loginError" role="alert"></div>
```

為 `register` 函數的錯誤實現相同的行為（別忘了更新 HTML）。

## 在儀表板上顯示資訊

使用我們剛剛學到的技術，我們也將處理在儀表板頁面上顯示帳戶資訊。

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

> 注意：為了讓您的操作更簡單，您可以使用已經填充了資料的預設 `test` 帳戶。

### 任務

首先，我們將替換 HTML 中的「餘額」部分，新增佔位元素：

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

接著，我們會在下面新增一個新部分以顯示帳戶描述：

```html
<h2 id="description"></h2>
```

✅ 由於帳戶描述作為內容下方的標題，它在語義上被標記為標題。了解更多關於[標題結構](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility)對於無障礙的重要性，並批判性地檢視頁面以確定還有哪些部分可以作為標題。

接下來，我們會在 `app.js` 中建立一個新函數以填充佔位元素：

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

首先，我們檢查是否有需要的帳戶資料，然後再進一步操作。接著，我們使用之前建立的 `updateElement()` 函數來更新 HTML。

> 為了讓餘額顯示更美觀，我們使用方法 [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 強制顯示小數點後 2 位數。

現在我們需要在每次載入儀表板時呼叫 `updateDashboard()` 函數。如果您已完成[第一課的作業](../1-template-route/assignment.md)，這應該很簡單，否則您可以使用以下實現。

將此程式碼新增到 `updateRoute()` 函數的末尾：

```js
if (typeof route.init === 'function') {
  route.init();
}
```

並更新路由定義：

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

透過此更改，每次顯示儀表板頁面時，會呼叫 `updateDashboard()` 函數。登入後，您應該能看到帳戶餘額、貨幣和描述。

## 使用 HTML 模板動態建立表格行

在[第一課](../1-template-route/README.md)中，我們使用 HTML 模板與 [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) 方法來實現應用程式的導航。模板也可以更小，並用於動態填充頁面中重複的部分。

我們將使用類似的方法在 HTML 表格中顯示交易列表。

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

此模板代表一個表格行，包含我們想要填充的三個欄位：交易的*日期*、*物件*和*金額*。

接著，將此 `id` 屬性新增到儀表板模板中的表格 `<tbody>` 元素，以便透過 JavaScript 更容易找到：

```html
<tbody id="transactions"></tbody>
```

我們的 HTML 已準備好，接下來切換到 JavaScript 程式碼並建立一個新函數 `createTransactionRow`：

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

此函數正如其名稱所示：使用我們之前建立的模板，建立一個新的表格行並使用交易資料填充其內容。我們會在 `updateDashboard()` 函數中使用此函數來填充表格：

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

這裡我們使用方法 [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment)，它建立一個新的 DOM 片段，我們可以在其上操作，最後將其附加到 HTML 表格中。

在此程式碼能正常運行之前，我們還需要做一件事，因為目前的 `updateElement()` 函數僅支援文字內容。我們需要稍微修改其程式碼：

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

![儀表板設計完成後的範例結果截圖](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.mo.png)

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/46)

## 作業

[重構並註解你的程式碼](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。