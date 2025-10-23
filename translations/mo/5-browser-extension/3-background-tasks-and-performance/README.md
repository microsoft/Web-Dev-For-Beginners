<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-22T22:55:52+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "mo"
}
-->
# 瀏覽器擴充功能專案第三部分：了解背景任務與效能

是否曾經好奇為什麼有些瀏覽器擴充功能感覺快速且反應靈敏，而有些卻顯得遲鈍？秘密就在於幕後發生的事情。當使用者在您的擴充功能介面中點擊時，背景程序正在悄悄地管理數據抓取、圖示更新以及系統資源。

這是我們瀏覽器擴充功能系列的最後一課，我們將讓您的碳足跡追蹤器運行得更加流暢。您將添加動態圖示更新，並學習如何在效能問題成為問題之前就發現它們。這就像調整賽車一樣——小小的優化可以對整體運行產生巨大影響。

完成後，您將擁有一個精緻的擴充功能，並了解將普通網頁應用程式與卓越應用程式區分開來的效能原則。讓我們深入了解瀏覽器優化的世界吧。

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/27)

### 簡介

在之前的課程中，您已經建立了一個表單，將其連接到 API，並解決了非同步數據抓取的問題。您的擴充功能已經初具雛形。

現在，我們需要添加最後的潤色——例如讓擴充功能圖示根據碳數據改變顏色。這讓我想起 NASA 必須優化阿波羅太空船上的每個系統。他們不能浪費任何一個運算週期或記憶體，因為效能關乎生命安全。雖然我們的瀏覽器擴充功能並沒有那麼重要，但相同的原則適用——高效的程式碼能創造更好的使用者體驗。

## 網頁效能基礎

當您的程式碼運行高效時，人們可以真正*感受到*差異。您是否曾經有過網頁瞬間加載或動畫流暢運行的時刻？這就是良好效能的作用。

效能不僅僅是速度——它是關於創造自然流暢而非笨重和令人沮喪的網頁體驗。在計算機的早期，Grace Hopper 曾經在她的桌子上放了一根大約一英尺長的電線，來展示光在十億分之一秒內可以行進的距離。這是她解釋為什麼每一微秒在計算中都很重要的方式。讓我們來探索幫助您找出拖慢速度的偵測工具。

> 「網站效能關乎兩件事：網頁加載速度，以及其上的程式碼運行速度。」——[Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

如何讓您的網站在各種設備、各種使用者和各種情況下都能快速運行，這個主題自然非常廣泛。以下是一些在建立標準網頁專案或瀏覽器擴充功能時需要記住的要點。

優化網站的第一步是了解幕後實際發生的事情。幸運的是，您的瀏覽器內建了強大的偵測工具。

要在 Edge 中打開開發者工具，點擊右上角的三個點，然後選擇「更多工具 > 開發者工具」。或者使用鍵盤快捷鍵：Windows 上按 `Ctrl` + `Shift` + `I`，Mac 上按 `Option` + `Command` + `I`。進入後，點擊「效能」標籤——這是您進行調查的地方。

**以下是您的效能偵測工具包：**
- **打開**開發者工具（作為開發者，您會經常使用它！）
- **進入**效能標籤——將其視為您的網頁應用程式的健身追蹤器
- **點擊**記錄按鈕，觀察您的網頁運行情況
- **研究**結果，找出拖慢速度的原因

讓我們試試看。打開一個網站（Microsoft.com 是個不錯的選擇），然後點擊「記錄」按鈕。現在刷新網頁，觀察分析器捕捉到的所有活動。停止記錄後，您將看到瀏覽器如何「腳本化」、「渲染」和「繪製」網站的詳細分解。這讓我想起了任務控制中心在火箭發射期間監控每個系統的方式——您可以即時獲得有關發生的事情以及發生時間的數據。

✅ [Microsoft Documentation](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) 提供了更多詳細資訊，供您深入了解。

> 專業提示：在測試之前清除瀏覽器快取，以查看您的網站對首次訪問者的效能表現——通常與重複訪問者的表現非常不同！

選擇分析時間軸中的元素，放大網頁加載時發生的事件。

通過選擇分析時間軸的一部分並查看摘要窗格，獲得網頁效能的快照：

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.mo.png)

檢查事件日誌窗格，查看是否有任何事件耗時超過 15 毫秒：

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.mo.png)

✅ 熟悉您的分析器！在此網站上打開開發者工具，看看是否有任何瓶頸。哪個資產加載最慢？哪個最快？

## 分析時需要注意的事項

運行分析器只是開始——真正的技巧在於了解那些色彩繽紛的圖表實際在告訴您什麼。別擔心，您會逐漸掌握閱讀它們的技巧。經驗豐富的開發者已經學會在問題完全爆發之前識別警告信號。

讓我們來談談常見的嫌疑犯——那些往往會悄悄進入網頁專案的效能問題製造者。就像 Marie Curie 必須在她的實驗室中仔細監測輻射水平一樣，我們需要注意某些模式，這些模式表明問題正在醞釀。提前捕捉到這些問題將為您（以及您的使用者）節省大量的麻煩。

**資產大小**：隨著時間的推移，網站變得越來越「重」，其中大部分額外的負擔來自圖片。就像我們在數位行李箱中塞進越來越多的東西一樣。

✅ 查看 [Internet Archive](https://httparchive.org/reports/page-weight) 了解網頁大小隨時間增長的情況——非常有啟發性。

**以下是保持資產優化的方法：**
- **壓縮**圖片！使用像 WebP 這樣的現代格式可以大幅減少文件大小
- **提供**適合每個設備的圖片大小——不需要將巨大的桌面圖片發送到手機
- **壓縮**您的 CSS 和 JavaScript——每個字節都很重要
- **使用**延遲加載，讓圖片僅在使用者實際滾動到它們時下載

**DOM 遍歷**：瀏覽器必須根據您編寫的程式碼構建其文件物件模型，因此為了良好的網頁效能，應保持標籤的最小化，只使用和樣式化網頁所需的內容。舉例來說，與網頁相關的多餘 CSS 可以進行優化；僅需在一個網頁上使用的樣式不需要包含在主樣式表中。

**DOM 優化的關鍵策略：**
- **最小化** HTML 元素的數量和嵌套層次
- **移除**未使用的 CSS 規則，並有效地合併樣式表
- **組織** CSS 以僅加載每個網頁所需的內容
- **結構化** HTML，使其語義化，便於瀏覽器解析

**JavaScript**：每個 JavaScript 開發者都應該注意那些「渲染阻塞」的腳本，這些腳本必須在 DOM 被遍歷和繪製到瀏覽器之前加載。考慮在內嵌腳本中使用 `defer`（如在 Terrarium 模組中所做的）。

**現代 JavaScript 優化技術：**
- **使用** `defer` 屬性在 DOM 解析後加載腳本
- **實施**代碼分割以僅加載必要的 JavaScript
- **應用**延遲加載非關鍵功能
- **最小化**使用繁重的庫和框架，盡可能減少負擔

✅ 在 [Site Speed Test website](https://www.webpagetest.org/) 上嘗試一些網站，了解用於確定網站效能的常見檢查。

現在您已經了解瀏覽器如何渲染您提供的資產，讓我們來看看完成擴充功能所需的最後幾件事：

### 創建一個計算顏色的函數

現在我們將創建一個函數，將數值數據轉換為有意義的顏色。可以將其想像成一個交通燈系統——綠色代表清潔能源，紅色代表高碳強度。

此函數將從我們的 API 中獲取 CO2 數據，並確定最能代表環境影響的顏色。這類似於科學家如何在熱圖中使用顏色編碼來可視化複雜的數據模式——從海洋溫度到恆星形成。我們將其添加到 `/src/index.js` 中，就在之前設置的那些 `const` 變數之後：

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**讓我們分解這個巧妙的小函數：**
- **設置**兩個陣列——一個用於 CO2 水平，另一個用於顏色（綠色 = 清潔，棕色 = 污染！）
- **找到**最接近我們實際 CO2 值的匹配項，使用一些巧妙的陣列排序
- **抓取**匹配的顏色，使用 findIndex() 方法
- **發送**一個消息到 Chrome 的背景腳本，告訴它我們選擇的顏色
- **使用**模板字面值（那些反引號）來進行更清晰的字串格式化
- **保持**所有內容有條理，使用 const 聲明

`chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) 就像您的擴充功能的神經系統——它處理所有幕後的通信和任務：

> 「使用 chrome.runtime API 來檢索背景頁面，返回有關清單的詳細資訊，並監聽和響應應用程式或擴充功能生命週期中的事件。您還可以使用此 API 將 URL 的相對路徑轉換為完全限定的 URL。」

**為什麼 Chrome Runtime API 如此方便：**
- **允許**擴充功能的不同部分相互通信
- **處理**背景工作而不會凍結使用者介面
- **管理**擴充功能的生命週期事件
- **使**腳本之間的消息傳遞變得非常簡單

✅ 如果您正在為 Edge 開發此瀏覽器擴充功能，可能會驚訝於您正在使用 Chrome API。新版的 Edge 瀏覽器版本基於 Chromium 瀏覽器引擎，因此您可以利用這些工具。

> **專業提示**：如果您想分析瀏覽器擴充功能的效能，請直接從擴充功能內部啟動開發者工具，因為它是獨立的瀏覽器實例。這使您能夠訪問擴充功能特定的效能指標。

### 設置預設圖示顏色

在我們開始抓取真實數據之前，讓我們為擴充功能設置一個起始點。沒有人喜歡盯著一個空白或看起來壞掉的圖示。我們將從綠色開始，讓使用者知道擴充功能在安裝後立即開始運行。

在您的 `init()` 函數中，設置預設的綠色圖示：

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**此初始化完成的工作：**
- **設置**中性綠色作為預設狀態
- **提供**擴充功能加載時的即時視覺反饋
- **建立**與背景腳本的通信模式
- **確保**使用者在數據加載之前看到功能正常的擴充功能

### 呼叫函數，執行呼叫

現在讓我們將所有內容連接在一起，這樣當新的 CO2 數據進來時，您的圖示會自動更新為正確的顏色。這就像在電子設備中連接最後的電路——突然間所有的組件都作為一個系統運行。

在從 API 獲取 CO2 數據後，添加以下代碼：

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**此整合完成的工作：**
- **連接** API 數據流與視覺指示系統
- **自動觸發**新數據到達時的圖示更新
- **確保**基於當前碳強度的即時視覺反饋
- **保持**數據抓取與顯示邏輯之間的關係分離

最後，在 `/dist/background.js` 中，添加這些背景操作呼叫的監聽器：

```javascript
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});

// Draw dynamic icon using Canvas API
// Borrowed from energy lollipop extension - nice feature!
function drawIcon(value) {
	// Create an offscreen canvas for better performance
	const canvas = new OffscreenCanvas(200, 200);
	const context = canvas.getContext('2d');

	// Draw a colored circle representing carbon intensity
	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	// Return the image data for the browser icon
	return context.getImageData(50, 50, 100, 100);
}
```

**此背景腳本的功能：**
- **監聽**來自主腳本的消息（就像接待員接聽電話）
- **處理**那些「updateIcon」請求以更改工具列圖示
- **使用** Canvas API 動態創建新圖示
- **繪製**一個簡單的彩色圓圈，顯示當前的碳強度
- **更新**瀏覽器工具列上的最新圖示
- **使用** OffscreenCanvas 以確保效能流暢（不阻塞 UI）

✅ 您將在 [Space Game 課程](../../6-space-game/2-drawing-to-canvas/README.md) 中了解更多有關 Canvas API 的資訊。

**測試您的擴充功能：**
- **構建**所有內容，使用 `npm run build`
- **重新加載**您的瀏覽器擴充功能（不要忘記這一步）
- **打開**您的擴充功能，觀察圖示顏色的變化
- **檢查**它如何響應來自世界各地的真實碳數據

現在，您可以一目了然地知道是否適合洗衣服，或者是否應該等待更清潔的能源。您剛剛構建了一個真正有用的東西，並在此過程中學到了有關瀏覽器效能的知識。

## GitHub Copilot Agent 挑戰 🚀

使用 Agent 模式完成以下挑戰：

**描述：** 增強瀏覽器擴充功能的效能監控能力，添加一個功能來追蹤並顯示擴充功能不同組件的加載時間。

**提示：** 創建一個效能監控系統，用於測量和記錄從 API 抓取 CO2 數據、計算顏色以及更新圖示所需的時間。添加一個名為 `performanceTracker` 的函數，使用 Performance API 測量這些操作，並在瀏覽器控制台中顯示結果，包括時間戳和持續時間指標。

了解更多有關 [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) 的資訊。

## 🚀 挑戰
這是一個有趣的偵探任務：挑選幾個已存在多年的開源網站（例如 Wikipedia、GitHub 或 Stack Overflow），深入研究它們的提交歷史。你能找到它們進行性能改進的地方嗎？有哪些問題不斷出現？

**你的調查方法：**
- **搜尋**提交訊息中的關鍵字，例如「optimize」、「performance」或「faster」
- **觀察**模式——是否不斷修復相同類型的問題？
- **識別**導致網站速度變慢的常見原因
- **分享**你的發現——其他開發者可以從真實案例中學習

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/28)

## 回顧與自學

考慮訂閱一份[性能相關的電子報](https://perf.email/)

透過瀏覽器的開發工具中的性能標籤，研究瀏覽器如何評估網頁性能。你是否發現了任何主要的差異？

## 作業

[分析網站性能](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。