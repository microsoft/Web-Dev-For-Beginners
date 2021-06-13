# 建立銀行網頁應用程式 Part 2：登入與註冊表單

## 課前測驗

[課前測驗](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/43?loc=zh_tw)

### 大綱

在大多數當代網頁應用程式中，你可以建立自己的帳戶來擁有自己的私人空間。許多用戶在同一時間可以存取同一個網頁應用程式，你就必須有一套機制分開儲存不同用戶的資料並顯示適當的資訊。我們不會涉及到如何管理[用戶個資的安全](https://zh.wikipedia.org/wiki/%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81)，它是個相當廣泛的主題，我們僅會確保每個用戶能在這款銀行應用上建立一到多個數位帳戶。

在這單元中，我們會使用 HTML 表單來新增登入與註冊的功能。我們會看到如何使用伺服器 API 傳遞資料，定義基本的用戶字串輸入之檢查機制。

### 開始之前

你需要完成第一單元 [HTML 模板與網頁路由](../../1-template-route/translations/README.zh-tw.md)的應用程式。你還需要安裝 [Node.js](https://nodejs.org) 與在本地端[運行伺服器 API](../../api/translations/README.zh-tw.md)以傳輸建立帳戶所需的資料。

你可以測試伺服器是否運作正常，在終端機內輸入指令：

```sh
curl http://localhost:5000/api
# -> 會回傳結果 "Bank API v1.0.0" 
```

---

## 表單與其控制

`<form>` 元素打包了 HTML 文件中使用者輸入與提交資料的地方。有許多種使用者介面(UI)以表單的方式呈現，最常見的內容會包含 `<input>` 與 `<button>` 元素。

有許多種 `<input>` 的[種類](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)，舉例來說，若要建立使用者輸入使用者名稱的地方，你可以：

```html
<input id="username" name="username" type="text">
```

`name` 屬性同時亦是表單傳輸資料的名稱。`id` 屬性是用來與 `<label>` 做表單控制(form control)的連接。

> 花點時間看看 [`<input>` 種類](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)的清單與[其他表單控制](https://developer.mozilla.org/en-US/docs/Learn/Forms/Other_form_controls)，讓你在建立使用者介面時，有全部供你使用的原生 UI 元素可以參考。

✅ 紀錄一下 `<input>` 是種[空元素](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)，你*不應該*在它後面加上對應的結束標籤。然而，你仍然可以在它的後面使用 `<input/>`，這沒有強制規定。

表單中的 `<button>` 元素是有些特別。如果你沒有指定它的 `type` 屬性，它會在你輸入文字時，自動地提交表單內容給伺服器。這邊有一些你可以設定的 `type` 內容：

- `submit`： `<form>` 內的預設型態，按鈕會觸發表單提交這項行為。
- `reset`： 按鈕會重置所有表單控制回初始狀態。
- `button`： 在按鈕按下時不執行預設行為。你可以藉由 JavaScript 自由定義之後的動作。

### 課題

在 `login` 模板內加入表單。我們需要*使用者名稱(username)*的輸入框與*登入(Login)*的按鈕。 

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

如果你仔細地看，你會注意到我們在這裡還加了 `<label>` 元素。`<label>` 元素被用來新增文字到 UI 上，譬如說我們的使用者名稱。為了讓表單得以被閱讀，標籤是很重要的，此外它還有額外的優點：

- 連結標籤到表單控制上，它能幫助使用者的額外工具，好比說螢幕報讀器，理解接下來該提供何種資料。
- 你可以點擊標籤，它會跳轉到相對應的輸入框，讓使用觸控型裝置的用戶更容易操作。

> [網頁親和力](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)是非常重要但常被忽視的主題。感謝[語義化 HTML 元素](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)的幫助，建立無障礙的網頁內容變得更加容易。你可以[閱讀更多有關網頁親和力的文章](https://developer.mozilla.org/en-US/docs/Web/Accessibility)，避免觸犯到常見的錯誤並成為負責任的開發者。

現在，我們加入第二張表單給用戶註冊使用，就像前一張一樣：

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

藉由 `value` 屬性，我們可以定義輸入框內的預設值。
注意一下 `balance` 的輸入類型為 `number`。它看起來與其他輸入框不一樣嗎？試著與它互動看看。

✅ 你能只利用鍵盤造訪表格，與表格互動嗎？你是如何做到的？

## 提交資料給伺服器

現在我們有可以使用的 UI 了，下一個步驟要將資料送給我們的伺服器。讓我們來快速地測試一下程式：在點擊 *Login* 或 *Register* 按鈕後，發生了什麼事？

你有注意到瀏覽器的網址列改變了嗎？

![截圖：點擊 Register 按鈕後，瀏覽器網址列改變](../images/click-register.png)

`<form>` 預設的行為：使用 [GET 方法](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3)提交表格，將表格資料接在網址後面，傳送給目前網址的伺服器。然而這個方法有一些缺點：

- 資料大小有上限限制(大約 2000 字元)
- 可以直接在網址內看到資料(對密碼而言，這並不恰當)
- 它不能做檔案的上傳

這也是為什麼你需要將它轉換為 [POST 方法](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5)，將表單資料存在 HTTP 請求的內容中。這樣就不會遇到上述的限制。

> POST 是常見的資料傳輸方法，[在一些特別的情況下](https://www.w3.org/2001/tag/doc/whenToUseGet.html)，使用 GET 方法相對起來比較恰當。例如進行搜尋的時候。

### 課題

加入 `action` 與 `method` 屬性到註冊表單之中：

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

現在，試著以你的名字申請新的帳戶。在點擊 *Register* 按鈕後，你應該能看到像這樣的畫面：

![瀏覽器網址為 localhost:5000/api/accounts，並顯示 JSON 的資料字串。](../images/form-post.png)

若所有事情都運作正常，伺服器應該會回應你的請求，附帶 [JSON](https://www.json.org/json-en.html) 包含著你剛建立的帳戶資料。

✅ 試著以相同名字再註冊一次。發生了什麼事？

## 不重新載入地提交資料

你可能會注意到，這些行動間出現了一個小問題：在提交表單時，我們離開了網頁應用，瀏覽器又重新導回到伺服器的網址。我們試著避免網頁應用重新載入所有的頁面，做出[單一頁面應用程式 (SPA)](https://zh.wikipedia.org/zh-tw/%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8)。

為了讓傳遞資料給伺服器時，不發生頁面重新載入的情況，我們需要使用 JavaScript。 

比起直接在 `<form>` 元素的 `action` 屬性加入網址，你可以使用 `javascript:` 字串接在程式語句前頭來執行自訂的行為。使用這方法也意味著你需要額外修改一些原本瀏覽器會做的行為。

- 接收表單資料
- 轉換並編碼表單資料成合適的格式
- 建立 HTTP 請求並傳遞給伺服器

### 課題

將註冊表單的 `action` 替換為：

```html
<form id="registerForm" action="javascript:register()">
```

開啟 `app.js`，加入新的函式 `register`：

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

我們使用 `getElementById()` 蒐集表單的元素，使用 [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) 協助從表單控制中取出 key/value 的數據對。
之後，利用 [`Object.fromEntries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) 轉換資料成正規物件，最後再將檔案轉成 [JSON](https://www.json.org/json-en.html) ── 一個在網路上常見的資料交換格式。

現在資料已經準備提交給伺服器了。建立新函式 `createAccount`：

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

這個函式做了什麼？首先，注意關鍵字 `async`，代表著函式包含了[**非同步化程式**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)。在與關鍵字 `await` 一起使用時，它會在繼續運行程式前，等待非同步的程式被執行，就像等待伺服器回應一樣。

這邊有關於使用 `async/await` 的影片：

[![Async 與 Await 管理 promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async 與 Await 管理 promises")

> 點擊上方圖片以觀看關於 async/await 的影片。

我們使用 API `fetch()` 來傳送 JSON 資料給伺服器。這個方法需要使用兩個參數：

- 伺服器的網址，在此使用 `//localhost:5000/api/accounts`。
- 網頁請求的設定，就是我們定義 `POST` 方法與提供請求的 `body`。當我們傳輸 JSON 資料給伺服器，我們還需要在標頭的 `Content-Type` 定為 `application/json`，伺服器才知道該如何解讀裡面的內容。

當伺服器以 JSON 回應請求後，我們可以使用 `await response.json()` 來取得 JSON 的內容並回傳結果。注意在此為非同步程式的方法，我們使用關鍵字 `await` 回傳任何在解讀封包時產生的錯誤訊息。

現在，在函式 `register` 中呼叫 `createAccount()`：

```js
const result = await createAccount(jsonData);
```

因為我們在這此使用了關鍵字 `await`，我們需要在註冊函式前新增關鍵字 `async`：

```js
async function register() {
```

最後，我們儲存一些紀錄來檢查結果。最後的函式應該會如下方格式：

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occured:', result.error);
  }

  console.log('Account created!', result);
}
```

過程有些冗長，但我們達成了！當你開啟[瀏覽器開發者工具](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)，試著註冊新的帳戶，你應該能看到網頁並沒有改變，但命令欄中會顯示帳戶成功註冊的訊息。

![瀏覽器命令欄中顯示紀錄訊息之截圖](../images/browser-console.png)

✅ 你覺得傳給伺服器的資料是安全的嗎？其他人有辦法攔截網頁請求嗎？你可以閱讀 [HTTPS](https://en.wikipedia.org/wiki/HTTPS)，了解更多關於安全的資料傳輸。

## 資料驗證

試著在註冊新帳戶時，不輸入你的使用者名稱，你會發現伺服器回傳了錯誤狀態訊息：[400 (Bad Request)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).)。

在傳輸資料給伺服器之前，最好先[驗證表單資料](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)，以確保我們傳送合法的網頁請求。 HTML5 表單控制內建包含了驗證方法，使用了多樣的屬性： controls provides built-in validation using various attributes:

- `required`： 輸入框必須被填寫，否則表單不能被提交。
- `minlength` 和 `maxlength`： 定義輸入框的文字下限與文字上限。
- `min` 和 `max`： 定義輸入框的數字下限與數字上限。
- `type`： 定義輸入框內的資料格式，例如`數字`、`email`、`檔案`或是[其他內建的格式](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)。這個屬性可能會改變表單控制的表現方法。
- `pattern`： 允許定義[正規表示法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)的字串，測試輸入的內容是否滿足它。

> 提示：你可以自定義表單控制的呈現方法，利用 CSS pseudo-classes `:valid` 和 `:invalid` 判斷內容是否合理。

### 課題

在建立新的合法帳戶時，有兩個必須被填寫的輸入框：使用者名稱與資產狀態，而其他選項則是可有可無。現在更新表單的 HTML 語法，使用 `required` 屬性並標記提示在標籤中：

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

伺服器並沒設定輸入框的文字上限，定義合理的文字輸入上限是必要的。

在文字框內加入 `maxlength` 屬性：

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

現在，如果文字框並沒有滿足我們所定義的規則時，在點擊了 *Register* 按鈕後，你會看到：

![傳輸錯誤表單而出現驗證失敗的截圖](../images/validation-error.png)

這類在傳輸資料給伺服器*之前*的驗證系統稱之為**用戶端(client-side)**驗證。但注意有些資料是沒有辦法在傳輸前被驗證的。舉例來說，我們沒辦法在發出請求前，確認是否已經存在著一組相同姓名的帳戶。伺服器上額外的驗證措施就稱之為**伺服器端(server-side)**驗證。

通常這兩個驗證都需要去編寫，用戶端驗證能及時回饋給用戶，提升使用者體驗；伺服器端驗證確保你要處理的用戶資料是合理且安全的。

---

## 🚀 挑戰

當相同使用者名稱的帳戶已經存在時，在 HTML 上顯示錯誤訊息。

這邊有做過一些造型的最終登入頁面範本。

![加上 CSS 造型的登入頁面截圖](../images/result.png)

## 課後測驗

[課後測驗](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/44?loc=zh_tw)

## 複習與自學

開發者在建立表單時需要發揮他們的創意，尤其是策畫資料驗證的規則。在 [CodePen](https://codepen.com) 上學習不同表單流程，你能發現什麼有趣且令人發想的表單嗎？

## 作業

[造型化你的銀行程式](assignment.zh-tw.md)
