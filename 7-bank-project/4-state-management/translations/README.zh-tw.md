# 建立銀行網頁應用程式 Part 4： 狀態控管的概念

## 課前測驗

[課前測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/47?loc=zh_tw)

### 大綱

隨著網頁應用越來越龐大，追蹤資料流的動向也是一種挑戰。程式取得了何種資料、網頁如何處理它、何時何處被更新上去……這些很容易地導致程式碼凌亂而難以維護。尤其是當你需要在不同頁面上做資料共享時，好比說使用者的資料。*狀態控管(state management)* 的觀念已經存在於所有程式中，我們也開始需要在開發複雜的網頁應用程式時，注意這個關鍵點。

在這個最終章內，我們會總覽整個程式並重新思考該如何管理程式狀態，讓瀏覽器能在任何時刻做重新整理，在不同的使用者階段維持資料的狀態。

### 開始之前

你需要先完成[取得資料](../../3-data/translations/README.zh-tw.md)的網頁開發章節。你還需要安裝 [Node.js](https://nodejs.org) 並於本地端[執行伺服器 API](../../api/translations/README.zh-tw.md)以管理使用者資料。 

你可以測試伺服器是否運作正常，在終端機中輸入指令：

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## 思考狀態控管

在[前一堂課](../../3-data/translations/README.zh-tw.md)中，我們介紹了應用程式基本的狀態，全域變數 `account` 提供登入帳戶的相關銀行資料。然而，現在的專案存在著一些瑕疵。試著在儀表板介面中重新整理。發生了什麼事？

目前我們的程式碼有三個問題：

- 網頁狀態並沒有被儲存，當瀏覽器重新整理時，會被導回登入頁面。
- 有許多函式會修改網頁狀態。隨著應用程式變大，我們很難去追蹤之後的改變，時刻地去更新相關的網頁狀態。
- 網頁狀態並不完整，當你*登出*帳戶時，帳戶資訊仍然顯示在登入頁面上。

我們是可以逐一的解決這些問題，但這樣會創造出許多獨立的程式碼，讓應用程式更複雜而難以去管理。或者是我們停下來思考一下我們的策略。

> 我們究竟要解決什麼問題？

[狀態控管(State management)](https://en.wikipedia.org/wiki/State_management)可以為兩項問題提供良好的解決方案：

- 如何讓應用程式中的資料流容易理解？
- 如何讓網頁狀態一直與使用者介面，或是相關物件進行同步？

一旦你處理好這些問題，其他問題可以被簡化，甚至被一併解決。有許多可能的方法能解決這些問題，但我們使用一種常見的解法：**中心化資料與更新方式**。資料流會呈現下列模式：

![HTML、使用者行為與網頁狀態的架構圖](../images/data-flow.png)

> 我們不會處理如何讓資料同步觸發頁面的更新，這比較像是關於[回應式程式設計](https://zh.wikipedia.org/wiki/%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BC%96%E7%A8%8B)的更進階知識。當你更深入網頁開發領域時，這是個很好的發展方向。

✅ 有許多函式庫提供狀態管理的方式，[Redux](https://redux.js.org) 就是常見的選擇。閱讀它的概念與運作模式，這是種有效的的學習方式，讓你在大型的網頁開發中預測潛在的風險，並預想解決方案。

### 課題

我們會先做一些程式重構。替換掉 `account` 的定義：

```js
let account = null;
```

變成：

```js
let state = {
  account: null
};
```

這個構想是要*中心化*應用程式資料到一個狀態物件中。目前我們只有 `account` 在狀態中，但這能提供未來新增新功能的基礎。

我們還需要更新與它相關的函式。在函式 `register()` 和 `login()` ，將 `account = ...` 替換為 `state.account = ...`。

在函式 `updateDashboard()` 的上方，加入此行：

```js
const account = state.account;
```

這個重構並不會帶來任何提升，但這是之後改變上的基礎。
This refactoring by itself did not bring much improvements, but the idea was to lay out the foundation for the next changes.

## 追蹤資料改變

現在我們有 `state` 物件儲存資料了，接下來要來中心化這些更新。目標是能輕易地追蹤任何被觸發的改變。

為了避免改動 `state` 物件，我們考慮使它[*不可變*](https://zh.wikipedia.org/wiki/%E4%B8%8D%E5%8F%AF%E8%AE%8A%E7%89%A9%E4%BB%B6)，意味著它不能被做任何的修改。
這也代表你必須建立新的狀態物件來替換它。藉由這個方式，你就有一套保護措施阻絕潛在非預期[風險](https://zh.wikipedia.org/wiki/%E5%89%AF%E4%BD%9C%E7%94%A8_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))，也開創出應用程式內還原與重做的功能，讓程式偵錯更加的容易。舉例來說，你可以紀錄狀態的改變，儲存狀態的歷史紀錄來了解錯誤的來源。

在 JavaScript 中，你可以使用 [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 來建立不可變物件。若你想在不可變物件上做更動，例外處理(exception)就會發生。

✅ 你知道*淺複製(shallow)*和*深複製(deep)*這兩種不可變物件的差別嗎？你可以從[這裡](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze)閱讀相關資訊。

### 課題

我們來建立新的函式 `updateState()`：

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

在這個函式中，我們會建立新的狀態物件，並利用[*展開運算子(`...`)(Spread Operator)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals)複製前一個資料狀態。接著，我們使用[括弧記法(Bracket Notation)](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` 賦予並覆蓋特定的狀態物件。最後，我們為物件上鎖，`Object.freeze()` 避免任何的改動。目前我們只有 `account` 資料存在狀態中，利用此方法可以讓你新增任何你想要的資料。

我們會更新 `state` 初始化設定，確保初始狀態也被上鎖：

```js
let state = Object.freeze({
  account: null
});
```

接著，更新函式 `register`，將 `state.account = result;` 替換為：

```js
updateState('account', result);
```

在函式 `login` 上做一樣的事，將 `state.account = data;` 替換為：

```js
updateState('account', data);
```

藉由這個機會，我們能解決帳戶資料在*登出*時，不會被清除的問題。

建立新的函式 `logout()`：

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

在 `updateDashboard()` 中，替換重新導向 `return navigate('/login');` 為 `return logout()`。

試著註冊新的帳戶，登入登出以確保功能都運作正常。

> 提示：你可以觀察所有的狀態改變，在 `updateState()` 裡的最下方加入 `console.log(state)`，開啟瀏覽器開發工具，命令欄就會顯示狀態的紀錄。

## 紀錄狀態

多數的網頁應用程式需要儲存資料以確保運作正常。所有重要的資料都會存在資料庫中，並藉由伺服器 API 來存取，就像我們專案中的帳戶資料。但有時候，瀏覽器用戶端的應用程式也需要儲存一些資料，提供更好的使用者體驗與增進負載效能。

當你想在瀏覽器內儲存資料，你必須思考幾項重要的問題：

- *這項資料很危險嗎？* 你應該要避免在用戶端儲存敏感的資料，例如帳戶密碼。
- *你需要儲存資料多久？* 你打算短時間內做存取，還是永久地保存？

網頁應用程式中有許多儲存資訊的方法，一切都取決於你想達成的目標。舉例來說，你可以利用網址來儲存搜尋資訊，讓使用者間能共享資訊。若資料需要與伺服器共享，好比說[認證](https://zh.wikipedia.org/wiki/%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81)資訊，你可以使用 [HTTP cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)。

另一個選擇是使用其中一個廣大的瀏覽器 API 來儲存資料。下列這兩項就特別有趣：

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)：[Key/Value 儲存法](https://zh.wikipedia.org/wiki/%E9%94%AE-%E5%80%BC%E5%AD%98%E5%82%A8)可以保存不同時刻的網頁資料。這些資料不會有期限的限制。
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)：它的運作模式與 `localStorage` 相同，只差在資料會在網頁段落結束時被清除，如瀏覽器關閉時。

紀錄一下這兩個 API 只能儲存[字串](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)格式。
如果你想儲存更複雜的物件，你需要利用 [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 將資料整理成 [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) 格式。

✅ 如果你想要建立不仰賴伺服器的網頁應用程式，你有辦法在用戶端建立資料庫。[`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) 可以應用在更進階的案例上，儲存更大量的資料，當然使用上也相對複雜。

### 課題

我們想讓使用者在登出之前，保持登入狀態。所以我們使用 `localStorage` 來儲存帳戶資料。首先，定義一組 key 來紀錄我們的資料內容。

```js
const storageKey = 'savedAccount';
```

在函式 `updateState()` 末端加入此行：

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

藉由此方式，帳戶資料就能保存下來，並隨著之前中心化後的狀態而更新。我們開始從之前的重構獲取效益了 🙂。

當資料被儲存後，我們還需要在程式讀取時載入資料。在 `app.js` 下方編寫更多的初始化程式，建立新的函式 `init` 並收入之前的程式碼：

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // 之前的初始化程式
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

我們在此接收了儲存資料，並同步地更新狀態資訊。這必須在更新路由*之前*完成，否則有些程式碼會在頁面更新時，依據狀態來決定其行為。

當儲存完帳戶資料後，我們也定義了*儀表板*頁面為我們的預設首頁。若程式沒有找到資料，儀表板頁面也能重新導向回*登入*頁面。在 `updateRoute()` 中，替換回傳值 `return navigate('/login');` 為 `return navigate('/dashboard');`。

登入應用程式並重新整理頁面。你應該能維持在儀表板那頁。這個改變也解決了我們最初面臨的問題......

## 重整資料

......但我們可能也產生了新問題。啊呀！

使用 `test` 帳戶進入儀表板頁面，在終端機內執行下列指令以建立新的交易項目：

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

試著重新整理瀏覽器內儀表板頁面。發生了什麼事？你有看到新的交易項目嗎？

感謝 `localStorage` 的幫助，狀態成功的儲存下來，但也代表我們在登出登入之前，不能再改變它的內容了！

一個可能的修復策略是在儀表板載入時，重新載入帳戶資訊以避免資料不同步。

### 課題

建立新的函式 `updateAccountData`：

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

這個方法能檢查我們是否已經登入，重新從伺服器載入用戶資料。

建立另一個函式 `refresh`：

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

這能更新帳戶資料，更新 HTML 中的儀表板頁面。這是在儀表板路由被載入時，我們所需要呼叫的函式。更新路由定義為：

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

試著重新載入儀表板，它現在應該能顯示更新後的帳戶資料。

---

## 🚀 挑戰

每一次儀表板載入時，我們都會重新載入帳戶資料，你認為我們還需要在用戶端儲存*所有的帳戶*資料嗎？

試著改變 `localStorage` 內的儲存內容，只包含我們能運行程式的必要資料。

## 課後測驗

[課後測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/48?loc=zh_tw)

## 作業

[編寫"加入交易明細"視窗](assignment.zh-tw.md)

這邊有完成之後的結果：

!["加入交易明細"視窗的例子截圖](../images/dialog.png)
