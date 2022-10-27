# 建立銀行網頁應用程式 Part 3：取得並使用資料

## 課前測驗

[課前測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/45?loc=zh_tw)

### 大綱

每一個網頁應用程式的核心為*資料*。資料有很多種格式，但它們的目的都是為了顯示使用者需要的資訊。網頁應用程式變得高互動性與複雜，使用者如何取得內容並與之進行互動變成網頁開發重要的一環。

在這堂課中，我們會了解伺服器是如何非同步地取得資料，並在不重新載入 HTML 的情況下，利用這些資料顯示在網頁上。

### 開始之前

你需要先完成系列課程 ── [登入與註冊表單](../../2-forms/translations/README.zh-tw.md)。你還需要安裝 [Node.js](https://nodejs.org) 並[執行伺服器 API](../../api/translations/README.zh-tw.md)。

你可以測試伺服器是否運作正常，在終端機中輸入指令：

```sh
curl http://localhost:5000/api
# -> 會回傳結果 "Bank API v1.0.0"
```

---

## AJAX 和取得資料

傳統的網頁在使用者點擊連結，或是提交表單資料時，重新載入全部的 HTML 頁面來更新網頁內容。每當資料要被更新時，伺服器就需要回傳全新的 HTML 頁面給瀏覽器處理，同時也干涉到使用者正在進行的動作，重新載入的機制也限制了許多互動功能。這種工作流程被稱為*多頁面應用程式(Multi-Page Application)*，簡稱 *MPA*。

![多頁面應用程式的更新流程](../images/mpa.png)

網頁應用程式變得更加複雜，促使新的技術問世：[AJAX (Asynchronous JavaScript and XML)](https://zh.wikipedia.org/wiki/AJAX)。

這個技巧允許網頁應用程式使用 JavaScript 非同步地傳遞與接收伺服器的資料，不需要重新載入 HTML 頁面，也反映在更快速的更新速率與更流暢的使用者體驗。在接收伺服器的新資料時，目前的 HTML 頁面可以被 JavaScript 利用 [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API 更新。自此之後，這種流程演變成現今的[*單一頁面應用程式(Single-Page Application)*，*SPA*](https://zh.wikipedia.org/wiki/%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8)。

![單一頁面應用程式的更新流程](../images/spa.png)

在 AJAX 早期，唯一取得資料的 API 為 [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)。但當代的瀏覽器已經建立出更方便且強大的 [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API)，它們使用 Promises 物件且更適合應用在 JSON 資料上。

> 許多當代瀏覽器支援 `Fetch API`，如果你想確認你的網頁應用程式是否運作在舊款的瀏覽器，檢查 [caniuse.com 上的相容性測試](https://caniuse.com/fetch)是一個好方法。

### 課題

在[前一堂課程中](../../2-forms/translations/README.zh-tw.md)，我們製作出註冊表單來建立新帳戶。現在我們來加入新程式，使用現有的帳戶登入，並取得其相關資料。開啟檔案 `app.js` 並新增函式 `login`：

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

現在我們利用 `getElementById()` 接收表單元素，並藉由 `loginForm.user.value` 取得輸入框內的使用者名稱。每一個表單控制可以以各自名稱(即 HTML 內的 `name` 屬性)來存取。

就像我們為註冊帳戶作的事一樣，我們建立另一個函式來執行伺服器請求，但這次是為了取得帳戶資料：

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

我們使用 `fetch` API 來向伺服器做非同步資料請求。這次我們不需要添加額外的參數，如網址，我們只詢問資料內容。預設上，`fetch` 建立出 [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP 請求，即我們想做的事情。

✅ 函式 `encodeURIComponent()` 可以轉換網址內的特殊字元。如果我們不呼叫這個函式，而是直接將 `user` 這項數值放入網址中，這會發生什麼問題？

讓我們來更新函式 `login`，使用 `getAccount`：

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

首先，`getAccount` 是一個非同步函式，它利用關鍵字 `await` 等待伺服器的回傳結果。就如其他伺服器請求一樣，我們也必須要處理錯誤的情況。現在我們只加錯誤訊息給這些情況，之後再回過頭解決這些問題。

接著，我們必須儲存資料，在之後可以輸出成儀表板的資訊。目前變數 `account` 還沒存在，我們建立它的全域變數在檔案最上方：

```js
let account = null;
```

在用戶資料存到變數中後，我們可以使用函式 `navigate()` 從*登入*頁面切換到*儀表板*頁面。

最後，在登入表單提交時，呼叫函式 `login`。修改 HTML 語法：

```html
<form id="loginForm" action="javascript:login()">
```

測試註冊功能，以及新註冊的帳戶的登入行為是否運作正常。

在進行下一步驟前，我們還必須完成函式 `register`。在此函式的最下方加入：

```js
account = result;
navigate('/dashboard');
```

✅ 你知道在預設上，你只能從*同一個網域(domain)與連接埠(port)*的網頁呼叫伺服器 APIs 嗎？這是瀏覽器強制性的安全機制。但我們的網頁應用程式在 `localhost:3000` 上執行，而伺服器 API 則在 `localhost:5000` 上執行。為什麼這樣能正常運作？利用[跨來源資源共用 (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS)，只要伺服器添加特殊的標頭檔到網頁回應中，我們就可以處理跨資源的 HTTP 請求，允許特殊的網域進行呼叫。

> 藉由前往[此課程](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art?WT.mc_id=academic-77807-sagibbon)學習更多有關 API 的資訊。

## 更新 HTML 顯示資料

現在取得完用戶資料，我們必須更新到現有的 HTML 上。我們已經知道如何接收 DOM 的元素，例子為 `document.getElementById()`。只要你有元素，這邊有一些 API 讓你修改，或是新增子元素上去：

- 使用 [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) 屬性，你可以改變元素的文字內容。注意改變此數值會刪除它的所有子元素(若存在的話)，並以該文字內容來替換它。同時，這也是個有效的方法來刪去所有的子成員，只要賦予它空字串 `''`。

- 使用 [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) 與 [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) 這兩方法，你可以建立並接上一到多個子元素成員。

✅ 使用 [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) 元素屬性也能改變 HTML 的內容，但這方法要避免使用。這可能會遭遇有關[跨網站指令碼 (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting)的攻擊。

### 課題

在來到儀表板畫面之前，我們還需要幫*登入*頁面加一件事。目前，如果你試著使用不存在的帳戶進行登入，訊息只會出現在命令欄中，而使用者不會發覺到任何事情改變，也不清楚網頁發生了什麼事。

我們在登入表單中新增顯示錯誤訊息的地方。最好的地方為登入按鈕 `<button>` 之前：

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

這個 `<div>` 元素為空的，代表著畫面不會印出任何訊息，直到我們添加內容進去。我們還給了它 `id`，讓 JavaScript 可以容易地存取它。

回到檔案 `app.js`，建立新的補助函數 `updateElement`：

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

這條就很直觀：給定元素的 *id* 與 *text*，它會更新 DOM 元素內符合 `id` 條件的文字內容。我們也使用這個方法到前面 `login` 函式的錯誤訊息中：

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

現在，試著以不合法的帳戶進行登入，你應該能看到像這樣的畫面：

![登入出現錯誤訊息之截圖](../images/login-error.png)

現在我們印出錯誤訊息，但螢幕報讀器並沒有做任何報讀。為了讓被動態加入的文字能被螢幕報讀器閱讀出來，我們需要使用 [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)。這邊我們使用一種 Live Region 的類型 alert：

```html
<div id="loginError" role="alert"></div>
```

建立同樣的行為到函式 `register` 的錯誤訊息當中，也別忘了更新你的 HTML。

## 在儀表板顯示資訊

使用同樣的技巧，我們需要將帳戶資訊印在儀表板頁面中。

這是從伺服器接收到的帳戶資料物件：

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

> 筆記：為了讓開發更加的容易，你可以使用已經存在資料的帳戶 `test`。

### 課題

我們開始置換掉 HTML 檔內的 "Balance" 區域，加入放置區：

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

我們還需要在下方新增區域來顯示帳戶資訊：

```html
<h2 id="description"></h2>
```

✅ 表示帳戶資訊的函式剛好為在內容的標題處，我們可以將它作為語義化的標頭。學習更多關於[標頭結構](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility)，它對於網頁親和力格外重要，也明顯地表達出頁面的標頭位置。

接著，我們在 `app.js` 檔案中加入新的函式來為放置區新增內容：

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

首先，我們需要先檢查帳戶的資料。使用我們之前建立的函式 `updateElement()` 來更新 HTML 檔。

> 為了讓帳戶餘額漂亮地呈現，我們使用 [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 這個方法，強迫數值只顯示到小數點第二位。

現在，每當儀表板被載入時，我們就需要呼叫函式 `updateDashboard()`。如果你已經完成[課程一的作業](../../1-template-route/translations/assignment.zh-tw.md)，就不需要額外做處理，不然你可以使用接下來的設定。

加入這段程式碼到函式 `updateRoute()` 的下方：

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

做完這些更動後，當儀表板要被呈現時，函式 `updateDashboard() 就會被呼叫。在你登入後就能看到帳戶的描述、餘額與交易狀況。

## 利用 HTML 模板動態建立表格列

在[第一堂課](../../1-template-route/translations/README.zh-tw.md)中，我們使用 HTML 模板與方法 [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) 來做出應用程式內的轉換。模板還能執行更小規模的行為，動態地改變一部份的頁面

我們使用類似的方式來顯示 HTML 表格中的交易清單。

### 課題

加入新的模板到 HTML 的 `<body>` 中：

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

這個模板表示單一條的表格列，其中包含了三格欄位：交易的*日期*、*物件* 與 *金額*。

接著，加入 `id` 屬性到模板的表格 `<tbody>` 元素中，讓 JavaScript 能更容易地取得：

```html
<tbody id="transactions"></tbody>
```

當我們的 HTML 準備好時，我們切換到 JavaScript 檔案中，加入新函式 `createTransactionRow`：

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

這個函式做就如它名字的功能：藉由剛建立的模板，建立出新的表格列並填入交易明細的資料。我們會在函式 `updateDashboard()` 中，利用它來更新表格：

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

這裡我們使用了方法 [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment)，建立新的 DOM 分段，再接到我們的 HTML 表格中。

我們還需要做一件事才能讓程式運作正常，目前函式 `updateElement()` 只能接受文字類型的內容。我們稍微修改一下程式碼：

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

我們使用方法 [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append)，它能連接文字或者是 [DOM 節點](https://developer.mozilla.org/docs/Web/API/Node)到父元素中，正好滿足我們的需求。

試著以 `test` 帳戶來登入，你應該能看到儀表板顯示出交易明細了 🎉。

---

## 🚀 挑戰

花功夫讓儀表板頁面看起來像是正規的銀行界面。如果你已經為你的應用程式做好造型，你可以試試 [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) 來建立出[回應式網頁設計](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)，它能完美地呈現在電腦或是行動裝置上。

這邊有造型過後的儀表板例子：

![造型化後的儀表板截圖](../../images/screen2.png)

## 課後測驗

[課後測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/46?loc=zh_tw)

## 作業

[重構並註解你的程式碼](assignment.zh-tw.md)
