<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-22T22:46:58+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "mo"
}
-->
# 建立銀行應用程式第4部分：狀態管理概念

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/47)

## 介紹

狀態管理就像是旅行者號太空船上的導航系統——當一切運作順利時，你幾乎不會注意到它的存在。但當事情出錯時，它可能成為到達星際空間和迷失在宇宙虛空之間的分水嶺。在網頁開發中，狀態代表了應用程式需要記住的一切：用戶的登入狀態、表單資料、導航歷史以及臨時的介面狀態。

隨著你的銀行應用程式從一個簡單的登入表單演變成更複雜的應用程式，你可能已經遇到了一些常見的挑戰。刷新頁面後，用戶會意外地被登出。關閉瀏覽器後，所有進度都消失了。調試問題時，你需要在多個函數中尋找修改同一資料的不同方式。

這些並不是糟糕的編碼跡象——它們是應用程式達到一定複雜性門檻時自然會出現的成長痛。每個開發者都會在其應用程式從「概念驗證」過渡到「生產就緒」時面臨這些挑戰。

在本課程中，我們將實現一個集中式的狀態管理系統，將你的銀行應用程式轉變為一個可靠、專業的應用程式。你將學習如何以可預測的方式管理資料流，適當地保持用戶會話，並創造現代網頁應用程式所需的流暢用戶體驗。

## 先決條件

在深入了解狀態管理概念之前，你需要正確設置開發環境並建立銀行應用程式的基礎。本課程直接基於本系列前幾部分的概念和代碼。

請確保在繼續之前準備好以下組件：

**必要設置：**
- 完成[資料獲取課程](../3-data/README.md) - 你的應用程式應能成功載入並顯示帳戶資料
- 在系統上安裝 [Node.js](https://nodejs.org) 以運行後端API
- 本地啟動 [伺服器API](../api/README.md) 以處理帳戶資料操作

**測試你的環境：**

通過在終端執行以下命令來驗證你的API伺服器是否正常運行：

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**此命令的作用：**
- **發送**一個GET請求到你的本地API伺服器
- **測試**連接並驗證伺服器是否有回應
- **返回**API版本資訊（如果一切正常）

---

## 診斷當前狀態問題

像福爾摩斯檢查犯罪現場一樣，我們需要了解當前實現中到底發生了什麼，才能解決用戶會話消失的問題。

讓我們進行一個簡單的實驗，揭示底層的狀態管理挑戰：

**🧪 試試這個診斷測試：**
1. 登入你的銀行應用程式並導航到儀表板
2. 刷新瀏覽器頁面
3. 觀察你的登入狀態發生了什麼變化

如果你被重定向回登入頁面，那麼你就發現了典型的狀態持久性問題。這種行為的原因是我們當前的實現將用戶資料存儲在每次頁面加載時都會重置的JavaScript變數中。

**當前實現問題：**

我們在[上一課程](../3-data/README.md)中使用的簡單`account`變數導致了三個主要問題，影響了用戶體驗和代碼的可維護性：

| 問題 | 技術原因 | 用戶影響 |
|------|----------|----------|
| **會話丟失** | 刷新頁面會清除JavaScript變數 | 用戶必須頻繁重新驗證 |
| **更新分散** | 多個函數直接修改狀態 | 調試變得越來越困難 |
| **清理不完整** | 登出時未清除所有狀態引用 | 潛在的安全和隱私問題 |

**架構挑戰：**

就像泰坦尼克號的分隔艙設計在多個艙室同時進水時顯得脆弱一樣，單獨修復這些問題並不能解決底層的架構問題。我們需要一個全面的狀態管理解決方案。

> 💡 **我們實際上想要達成什麼？**

[狀態管理](https://en.wikipedia.org/wiki/State_management)實際上是為了解決兩個基本難題：

1. **我的資料在哪裡？**：追蹤我們擁有的資訊以及它的來源
2. **大家是否在同一頁面上？**：確保用戶看到的內容與實際發生的情況一致

**我們的計劃：**

與其追逐問題，我們將建立一個**集中式狀態管理**系統。想像一下有一個非常有條理的人負責所有重要的事情：

![顯示HTML、用戶操作和狀態之間資料流的架構圖](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.mo.png)

**理解這個資料流：**
- **集中化**所有應用程式狀態於一個位置
- **通過**受控函數路由所有狀態變更
- **確保**UI與當前狀態保持同步
- **提供**一個清晰、可預測的資料管理模式

> 💡 **專業見解**：本課程專注於基本概念。對於複雜的應用程式，像 [Redux](https://redux.js.org) 這樣的庫提供了更高級的狀態管理功能。理解這些核心原則將幫助你掌握任何狀態管理庫。

> ⚠️ **進階主題**：我們不會涵蓋由狀態變更觸發的自動UI更新，因為這涉及到[反應式編程](https://en.wikipedia.org/wiki/Reactive_programming)的概念。這可以作為你學習旅程中的下一步！

### 任務：集中化狀態結構

讓我們開始將分散的狀態管理轉變為集中式系統。這第一步為後續的改進奠定了基礎。

**步驟1：建立集中式狀態物件**

替換簡單的`account`宣告：

```js
let account = null;
```

使用結構化的狀態物件：

```js
let state = {
  account: null
};
```

**這一改變的重要性：**
- **集中化**所有應用程式資料於一個位置
- **準備**結構以便後續添加更多狀態屬性
- **創建**狀態與其他變數之間的清晰界限
- **建立**一個隨應用程式成長而擴展的模式

**步驟2：更新狀態訪問模式**

更新你的函數以使用新的狀態結構：

**在`register()`和`login()`函數中**，替換：
```js
account = ...
```

為：
```js
state.account = ...
```

**在`updateDashboard()`函數中**，在頂部添加以下行：
```js
const account = state.account;
```

**這些更新的作用：**
- **保持**現有功能同時改善結構
- **準備**你的代碼以進行更複雜的狀態管理
- **創建**一致的狀態資料訪問模式
- **建立**集中式狀態更新的基礎

> 💡 **注意**：這次重構不會立即解決我們的問題，但它為即將到來的強大改進奠定了必要的基礎！

## 實現受控的狀態更新

隨著我們的狀態集中化，下一步是建立受控的資料修改機制。這種方法確保狀態變更可預測且易於調試。

核心原則類似於空中交通管制：與其允許多個函數獨立修改狀態，我們將通過一個單一的受控函數來管理所有變更。這種模式提供了清晰的監管，確保資料變更的時機和方式。

**不可變狀態管理：**

我們將把`state`物件視為[*不可變*](https://en.wikipedia.org/wiki/Immutable_object)，這意味著我們永遠不直接修改它。相反，每次變更都會創建一個新的狀態物件，並包含更新後的資料。

雖然這種方法相比直接修改可能看起來效率較低，但它在調試、測試和保持應用程式可預測性方面提供了顯著的優勢。

**不可變狀態管理的好處：**

| 好處 | 描述 | 影響 |
|------|------|------|
| **可預測性** | 變更僅通過受控函數發生 | 更容易調試和測試 |
| **歷史追蹤** | 每次狀態變更都創建一個新物件 | 支援撤銷/重做功能 |
| **防止副作用** | 沒有意外修改 | 防止神秘的錯誤 |
| **性能優化** | 容易檢測狀態是否實際改變 | 支援高效的UI更新 |

**使用`Object.freeze()`實現JavaScript不可變性：**

JavaScript提供[`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)來防止物件修改：

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**解析此操作的過程：**
- **防止**直接屬性賦值或刪除
- **拋出**異常（如果嘗試進行修改）
- **確保**狀態變更必須通過受控函數
- **創建**一個清晰的狀態更新契約

> 💡 **深入了解**：在[MDN文檔](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze)中了解*淺層*和*深層*不可變物件的區別。理解這一點對於處理複雜的狀態結構至關重要。

### 任務

讓我們創建一個新的`updateState()`函數：

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

在此函數中，我們創建了一個新的狀態物件，並使用[*展開運算符(`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals)從先前的狀態中複製資料。然後，我們使用[方括號表示法](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]`進行賦值，覆蓋狀態物件的特定屬性，最後使用`Object.freeze()`鎖定物件以防止修改。目前我們僅在狀態中存儲了`account`屬性，但使用此方法，你可以在狀態中添加任意多的屬性。

我們還將更新`state`初始化，確保初始狀態也被凍結：

```js
let state = Object.freeze({
  account: null
});
```

之後，更新`register`函數，將`state.account = result;`賦值替換為：

```js
updateState('account', result);
```

對`login`函數執行相同操作，將`state.account = data;`替換為：

```js
updateState('account', data);
```

我們現在將趁機修復用戶點擊*登出*時未清除帳戶資料的問題。

創建一個新的函數`logout()`：

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

在`updateDashboard()`中，將重定向`return navigate('/login');`替換為`return logout();`

嘗試註冊新帳戶，登出並再次登入，檢查一切是否仍然正常運作。

> 提示：你可以通過在`updateState()`底部添加`console.log(state)`並打開瀏覽器的開發工具中的控制台來查看所有狀態變更。

## 實現資料持久性

我們之前識別的會話丟失問題需要一個持久性解決方案，以保持用戶狀態在瀏覽器會話之間的持續性。這將把我們的應用程式從一個臨時體驗轉變為一個可靠、專業的工具。

想像原子鐘如何通過存儲關鍵狀態在非易失性記憶體中，即使在停電期間也能保持精確時間。同樣，網頁應用程式需要持久存儲機制，以在瀏覽器會話和頁面刷新之間保存重要的用戶資料。

**資料持久性的策略性問題：**

在實現持久性之前，請考慮以下關鍵因素：

| 問題 | 銀行應用程式背景 | 決策影響 |
|------|----------------|----------|
| **資料是否敏感？** | 帳戶餘額、交易歷史 | 選擇安全的存儲方法 |
| **應持續多久？** | 登入狀態 vs. 臨時UI偏好 | 選擇適當的存儲期限 |
| **伺服器是否需要？** | 驗證令牌 vs. UI設置 | 確定共享需求 |

**瀏覽器存儲選項：**

現代瀏覽器提供了幾種存儲機制，每種都針對不同的使用情境設計：

**主要存儲API：**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**：持久性[鍵值存儲](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **持久化**資料，跨瀏覽器會話無限期保存  
   - **存活**於瀏覽器重啟和電腦重啟後
   - **範圍**限定於特定網站域名
   - **非常適合**用戶偏好和登入狀態

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**：臨時會話存儲
   - **功能**與localStorage在活動會話期間相同
   - **自動清除**瀏覽器標籤頁關閉時
   - **理想**用於不應持久的臨時資料

3. **[HTTP Cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**：伺服器共享存儲
   - **自動**隨每次伺服器請求發送
   - **非常適合**[驗證](https://en.wikipedia.org/wiki/Authentication)令牌
   - **大小有限**且可能影響性能

**資料序列化需求：**

`localStorage`和`sessionStorage`僅存儲[字串](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)：

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**理解序列化：**
- **使用**[`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)將JavaScript物件轉換為JSON字串
- **使用**[`JSON.parse()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)從JSON重建物件
- **自動處理**複雜的嵌套物件和陣列
- **無法處理**函數、未定義值和循環引用
> 💡 **進階選項**：對於具有大型數據集的複雜離線應用程式，可以考慮使用 [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API)。它提供完整的客戶端資料庫，但需要更複雜的實現。

### 任務：實現 localStorage 持久化

讓我們實現持久化存儲，確保使用者在明確登出之前保持登入狀態。我們將使用 `localStorage` 在瀏覽器會話之間存儲帳戶數據。

**步驟 1：定義存儲配置**

```js
const storageKey = 'savedAccount';
```

**此常數提供的功能：**
- **創建**我們存儲數據的一致標識符
- **防止**存儲鍵引用中的拼寫錯誤
- **方便**在需要時更改存儲鍵
- **遵循**可維護代碼的最佳實踐

**步驟 2：添加自動持久化**

在 `updateState()` 函數的末尾添加以下行：

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**此處發生的事情解析：**
- **將**帳戶對象轉換為 JSON 字符串以進行存儲
- **使用**我們的一致存儲鍵保存數據
- **在**每次狀態更改時自動執行
- **確保**存儲的數據始終與當前狀態同步

> 💡 **架構優勢**：由於我們通過 `updateState()` 集中所有狀態更新，添加持久化僅需一行代碼。這展示了良好架構決策的力量！

**步驟 3：在應用程式加載時恢復狀態**

創建一個初始化函數以恢復保存的數據：

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

**理解初始化過程：**
- **檢索**來自 localStorage 的任何先前保存的帳戶數據
- **解析** JSON 字符串回 JavaScript 對象
- **使用**我們的受控更新函數更新狀態
- **在頁面加載時自動恢復**使用者的會話
- **在路由更新之前執行**以確保狀態可用

**步驟 4：優化默認路由**

更新默認路由以利用持久化：

在 `updateRoute()` 中替換：
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**為什麼此更改合理：**
- **有效利用**我們的新持久化系統
- **允許**儀表板處理身份驗證檢查
- **如果沒有保存的會話，則自動重定向**到登入頁面
- **創建**更流暢的使用者體驗

**測試您的實現：**

1. 登入您的銀行應用程式
2. 刷新瀏覽器頁面
3. 驗證您仍然登入並停留在儀表板上
4. 關閉並重新打開瀏覽器
5. 返回您的應用程式並確認您仍然登入

🎉 **成就解鎖**：您已成功實現持久化狀態管理！您的應用程式現在表現得像專業的網頁應用程式。

## 平衡持久性與數據新鮮度

我們的持久化系統成功保持了使用者會話，但也引入了一個新挑戰：數據陳舊性。當多個使用者或應用程式修改相同的伺服器數據時，本地緩存的信息可能會過時。

這種情況類似於維京航海家依賴存儲的星圖和當前的天文觀測。星圖提供了一致性，但航海家需要新鮮的觀測來應對不斷變化的條件。同樣，我們的應用程式需要持久的使用者狀態和當前的伺服器數據。

**🧪 發現數據陳舊問題：**

1. 使用 `test` 帳戶登入儀表板
2. 在終端中運行以下命令以模擬來自其他來源的交易：

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. 刷新瀏覽器中的儀表板頁面
4. 查看是否能看到新的交易

**此測試展示了什麼：**
- **顯示** localStorage 如何可能變得“陳舊”（過時）
- **模擬**真實世界場景，其中數據在您的應用程式之外發生變化
- **揭示**持久性與數據新鮮度之間的矛盾

**數據陳舊挑戰：**

| 問題 | 原因 | 使用者影響 |
|------|------|------------|
| **數據陳舊** | localStorage 不會自動過期 | 使用者看到過時的信息 |
| **伺服器更改** | 其他應用程式/使用者修改相同數據 | 平台之間視圖不一致 |
| **緩存與現實** | 本地緩存與伺服器狀態不匹配 | 使用者體驗差且產生混淆 |

**解決方案策略：**

我們將實現一個“加載時刷新”模式，平衡持久性優勢與數據新鮮度需求。此方法既保持流暢的使用者體驗，又確保數據準確性。

### 任務：實現數據刷新系統

我們將創建一個系統，自動從伺服器獲取新鮮數據，同時保持我們的持久化狀態管理的優勢。

**步驟 1：創建帳戶數據更新器**

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

**理解此函數的邏輯：**
- **檢查**使用者是否當前已登入（state.account 存在）
- **重定向**到登出頁面，如果未找到有效的會話
- **使用**現有的 `getAccount()` 函數從伺服器獲取新鮮的帳戶數據
- **優雅地處理**伺服器錯誤，通過登出無效的會話
- **使用**我們的受控更新系統更新狀態以獲取新鮮數據
- **通過** `updateState()` 函數觸發自動 localStorage 持久化

**步驟 2：創建儀表板刷新處理器**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**此刷新函數完成的工作：**
- **協調**數據刷新和 UI 更新過程
- **等待**新鮮數據加載完成後再更新顯示
- **確保**儀表板顯示最新信息
- **保持**數據管理與 UI 更新的清晰分離

**步驟 3：與路由系統集成**

更新您的路由配置以自動觸發刷新：

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**此集成如何工作：**
- **在每次儀表板路由加載時執行**刷新函數
- **確保**使用者導航到儀表板時始終顯示新鮮數據
- **保持**現有的路由結構，同時添加數據新鮮度
- **提供**路由特定初始化的一致模式

**測試您的數據刷新系統：**

1. 登入您的銀行應用程式
2. 運行之前的 curl 命令以創建新交易
3. 刷新您的儀表板頁面或導航到其他頁面再返回
4. 驗證新交易是否立即顯示

🎉 **完美平衡達成**：您的應用程式現在結合了持久狀態的流暢體驗與新鮮伺服器數據的準確性！

## GitHub Copilot Agent 挑戰 🚀

使用 Agent 模式完成以下挑戰：

**描述：** 為銀行應用程式實現一個全面的狀態管理系統，包含撤銷/重做功能。此挑戰將幫助您練習高級狀態管理概念，包括狀態歷史跟蹤、不可變更新和使用者界面同步。

**提示：** 創建一個增強的狀態管理系統，包括：1）跟蹤所有先前狀態的狀態歷史數組，2）可以恢復到先前狀態的撤銷和重做功能，3）儀表板上的撤銷/重做操作的 UI 按鈕，4）防止記憶體問題的最大歷史限制為 10 個狀態，5）使用者登出時正確清理歷史。確保撤銷/重做功能適用於帳戶餘額更改並在瀏覽器刷新後保持持久性。

了解更多 [Agent 模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) 的信息。

## 🚀 挑戰：存儲優化

您的實現現在有效地處理了使用者會話、數據刷新和狀態管理。然而，請考慮我們當前的方法是否在存儲效率與功能之間達到了最佳平衡。

就像國際象棋大師能區分重要棋子和可犧牲的棋子一樣，有效的狀態管理需要識別哪些數據必須持久化，哪些數據應始終從伺服器獲取最新。

**優化分析：**

評估您當前的 localStorage 實現並考慮以下策略性問題：
- 維持使用者身份驗證所需的最少信息是什麼？
- 哪些數據變化頻率足以使本地緩存幾乎沒有好處？
- 如何在不降低使用者體驗的情況下通過存儲優化提高性能？

**實現策略：**
- **識別**必須持久化的關鍵數據（可能僅限於使用者身份信息）
- **修改**您的 localStorage 實現以僅存儲關鍵會話數據
- **確保**每次訪問儀表板時都從伺服器加載新鮮數據
- **測試**您的優化方法是否保持相同的使用者體驗

**進階考量：**
- **比較**存儲完整帳戶數據與僅存儲身份驗證令牌之間的權衡
- **記錄**您的決策和理由以供未來的團隊成員參考

此挑戰將幫助您像專業開發者一樣思考，既考慮使用者體驗又考慮應用程式效率。請花時間嘗試不同的方法！

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/48)

## 作業

[實現“添加交易”對話框](assignment.md)

以下是完成作業後的示例結果：

![顯示示例“添加交易”對話框的截圖](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.mo.png)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。