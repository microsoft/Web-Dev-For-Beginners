<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8a07db14e75ac62f013b7de5df05981d",
  "translation_date": "2025-08-28T23:32:32+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "mo"
}
-->
# 建立銀行應用程式 第1部分：網頁應用中的HTML模板與路由

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/41)

### 簡介

自從JavaScript在瀏覽器中出現以來，網站變得比以往更加互動且複雜。網頁技術現在常被用來創建完全功能化的應用程式，這些應用程式直接在瀏覽器中運行，我們稱之為[網頁應用程式](https://en.wikipedia.org/wiki/Web_application)。由於網頁應用程式高度互動化，使用者不希望每次執行操作時都需要重新載入整個頁面。因此，JavaScript被用來直接使用DOM更新HTML，以提供更流暢的使用者體驗。

在本課程中，我們將奠定基礎，創建一個銀行網頁應用，使用HTML模板來創建多個畫面，這些畫面可以顯示並更新，而無需重新載入整個HTML頁面。

### 先決條件

您需要一個本地網頁伺服器來測試我們在本課程中構建的網頁應用。如果您還沒有，可以安裝[Node.js](https://nodejs.org)並從您的專案資料夾中使用指令 `npx lite-server`。這將創建一個本地網頁伺服器並在瀏覽器中打開您的應用。

### 準備工作

在您的電腦上，創建一個名為`bank`的資料夾，並在其中建立一個名為`index.html`的檔案。我們將從這個HTML[樣板代碼](https://en.wikipedia.org/wiki/Boilerplate_code)開始：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## HTML模板

如果您想為網頁創建多個畫面，一種解決方案是為您想顯示的每個畫面創建一個HTML檔案。然而，這種解決方案存在一些不便之處：

- 切換畫面時需要重新載入整個HTML，這可能會很慢。
- 在不同畫面之間共享數據會變得困難。

另一種方法是僅使用一個HTML檔案，並使用`<template>`元素定義多個[HTML模板](https://developer.mozilla.org/docs/Web/HTML/Element/template)。模板是一個可重複使用的HTML區塊，瀏覽器不會顯示它，必須在運行時使用JavaScript實例化。

### 任務

我們將創建一個具有兩個畫面的銀行應用：登入頁面和儀表板。首先，在HTML的`body`中添加一個佔位元素，我們將用它來實例化應用的不同畫面：

```html
<div id="app">Loading...</div>
```

我們給它一個`id`，以便稍後用JavaScript更容易找到它。

> 提示：由於此元素的內容將被替換，我們可以在其中放置一個加載消息或指示器，這將在應用加載時顯示。

接下來，在下面添加登入頁面的HTML模板。目前，我們只在其中放置一個標題和一個包含導航連結的區塊。

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

然後，我們將為儀表板頁面添加另一個HTML模板。此頁面將包含不同的區塊：

- 一個包含標題和登出連結的標頭
- 銀行帳戶的當前餘額
- 一個以表格形式顯示的交易清單

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> 提示：在創建HTML模板時，如果您想查看它的外觀，可以用`<!-- -->`將`<template>`和`</template>`行註解掉。

✅ 您認為我們為什麼在模板上使用`id`屬性？我們是否可以使用其他東西，例如類別？

## 使用JavaScript顯示模板

如果您在瀏覽器中嘗試當前的HTML檔案，您會看到它卡在顯示`Loading...`。這是因為我們需要添加一些JavaScript代碼來實例化並顯示HTML模板。

實例化模板通常分為三個步驟：

1. 在DOM中檢索模板元素，例如使用[`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById)。
2. 使用[`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)克隆模板元素。
3. 將其附加到可見元素下的DOM中，例如使用[`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild)。

✅ 為什麼我們需要在附加到DOM之前克隆模板？如果跳過這一步，您認為會發生什麼？

### 任務

在您的專案資料夾中創建一個名為`app.js`的新檔案，並在HTML的`<head>`部分中導入該檔案：

```html
<script src="app.js" defer></script>
```

現在在`app.js`中，我們將創建一個新函數`updateRoute`：

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

我們在這裡執行的正是上述的三個步驟。我們使用`templateId`實例化模板，並將其克隆的內容放入應用的佔位元素中。請注意，我們需要使用`cloneNode(true)`來複製模板的整個子樹。

現在調用此函數並傳入其中一個模板，查看結果。

```js
updateRoute('login');
```

✅ 這段代碼`app.innerHTML = '';`的目的是什麼？如果沒有它會發生什麼？

## 創建路由

在談論網頁應用時，我們稱*路由*為將**URL**映射到應顯示的特定畫面的意圖。在具有多個HTML檔案的網站上，這是自動完成的，因為檔案路徑會反映在URL上。例如，在您的專案資料夾中有以下檔案：

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

如果您以`mywebsite`作為根目錄創建一個網頁伺服器，URL映射將是：

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

然而，對於我們的網頁應用，我們使用的是包含所有畫面的單一HTML檔案，因此這種預設行為對我們沒有幫助。我們必須手動創建這個映射，並使用JavaScript更新顯示的模板。

### 任務

我們將使用一個簡單的物件來實現一個[映射](https://en.wikipedia.org/wiki/Associative_array)，將URL路徑與我們的模板對應起來。在`app.js`檔案的頂部添加此物件。

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

現在讓我們稍微修改一下`updateRoute`函數。我們不再直接將`templateId`作為參數傳遞，而是希望先查看當前的URL，然後使用我們的映射來獲取對應的模板ID值。我們可以使用[`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname)來僅獲取URL中的路徑部分。

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

在這裡，我們將聲明的路由映射到對應的模板。您可以嘗試手動更改瀏覽器中的URL，檢查是否正確運作。

✅ 如果您在URL中輸入一個未知路徑會發生什麼？我們該如何解決這個問題？

## 添加導航功能

應用的下一步是添加在頁面之間導航的功能，而不需要手動更改URL。這涉及兩件事：

1. 更新當前的URL  
2. 根據新URL更新顯示的模板  

第二部分我們已經通過`updateRoute`函數處理了，因此我們需要弄清楚如何更新當前的URL。

我們需要使用JavaScript，具體來說是[`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState)，它允許更新URL並在瀏覽歷史中創建新條目，而無需重新載入HTML。

> 注意：雖然HTML的錨點元素[`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a)本身可以用來創建指向不同URL的超連結，但它預設會使瀏覽器重新載入HTML。在處理自定義JavaScript路由時，需要使用`preventDefault()`函數來防止此行為。

### 任務

讓我們創建一個新函數，用於在應用中導航：

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

此方法首先根據給定的路徑更新當前URL，然後更新模板。屬性`window.location.origin`返回URL的根目錄，允許我們從給定路徑重建完整的URL。

現在我們有了這個函數，我們可以解決當路徑與任何定義的路由不匹配時的問題。我們將通過在`updateRoute`函數中添加一個回退到現有路由的邏輯來解決這個問題。

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

如果找不到路由，我們現在將重定向到`login`頁面。

接下來，我們創建一個函數來獲取點擊連結時的URL，並防止瀏覽器的預設連結行為：

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

最後，通過在HTML中的*登入*和*登出*連結上添加綁定來完成導航系統。

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

上述代碼中的`event`物件捕獲`click`事件並將其傳遞給我們的`onLinkClick`函數。

使用[`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick)屬性將`click`事件綁定到JavaScript代碼，這裡是對`navigate()`函數的調用。

嘗試點擊這些連結，您現在應該能夠在應用的不同畫面之間導航。

✅ `history.pushState`方法是HTML5標準的一部分，並在[所有現代瀏覽器](https://caniuse.com/?search=pushState)中實現。如果您正在為舊版瀏覽器構建網頁應用，有一個替代方法：使用[哈希（`#`）](https://en.wikipedia.org/wiki/URI_fragment)作為路徑前綴，您可以實現基於常規錨點導航的路由，且不會重新載入頁面，因為它的目的是在頁面內創建內部連結。

## 處理瀏覽器的返回與前進按鈕

使用`history.pushState`會在瀏覽器的導航歷史中創建新條目。您可以通過按住瀏覽器的*返回按鈕*來檢查，它應該顯示如下內容：

![導航歷史截圖](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.mo.png)

如果您嘗試多次點擊返回按鈕，您會看到當前URL發生了變化，歷史也被更新，但顯示的模板保持不變。

這是因為應用不知道每次歷史變化時需要調用`updateRoute()`。如果您查看[`history.pushState`文檔](https://developer.mozilla.org/docs/Web/API/History/pushState)，您會看到當狀態改變時（即我們移動到不同的URL），會觸發[`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)事件。我們將利用這一點來解決這個問題。

### 任務

為了確保當瀏覽器歷史變化時顯示的模板被更新，我們將附加一個新函數來調用`updateRoute()`。我們將在`app.js`檔案的底部完成這一操作：

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> 注意：我們在這裡使用了一個[箭頭函數](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)來聲明`popstate`事件處理器以簡化代碼，但普通函數也可以正常工作。

這裡有一段關於箭頭函數的回顧影片：

[![箭頭函數](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "箭頭函數")

> 🎥 點擊上方圖片觀看有關箭頭函數的影片。

現在嘗試使用瀏覽器的返回和前進按鈕，檢查這次顯示的路由是否正確更新。

---

## 🚀 挑戰

為此應用新增一個模板和路由，顯示應用的製作團隊名單。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/42)

## 回顧與自學

路由是網頁開發中出乎意料的棘手部分之一，特別是隨著網頁從頁面刷新行為轉向單頁應用的頁面刷新。閱讀一些關於[Azure靜態網頁應用服務如何處理路由](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon)的內容。您能解釋為什麼文檔中描述的一些決策是必要的嗎？

## 作業

[改進路由](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。