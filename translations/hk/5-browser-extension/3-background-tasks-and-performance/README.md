<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "49b58721a71cfda824e2f3e1f46908c6",
  "translation_date": "2025-08-29T15:00:46+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "hk"
}
-->
# 瀏覽器擴展項目第3部分：了解背景任務與效能

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/27)

### 簡介

在這個模組的前兩節課中，你學會了如何建立一個表單以及用於顯示從 API 獲取數據的區域。這是一種非常標準的方式來建立網頁。你甚至學會了如何處理非同步數據獲取。你的瀏覽器擴展幾乎已經完成了。

現在剩下的就是管理一些背景任務，包括刷新擴展圖標的顏色，因此這是一個很好的時機來討論瀏覽器如何管理這類任務。在構建網頁資產時，我們可以從效能的角度來思考這些瀏覽器任務。

## 網頁效能基礎

> 「網站效能關乎兩件事：頁面加載的速度，以及頁面上的程式碼執行的速度。」-- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

如何讓你的網站在各種設備、各類用戶以及各種情況下都能快速運行，這個話題自然非常廣泛。以下是一些在構建標準網頁項目或瀏覽器擴展時需要記住的要點。

確保網站高效運行的第一步是收集其效能數據。第一個可以查看的地方是瀏覽器的開發者工具。在 Edge 瀏覽器中，你可以選擇「設定及更多」按鈕（右上角的三點圖標），然後導航到「更多工具 > 開發者工具」，並打開「效能」標籤。你也可以使用快捷鍵 `Ctrl` + `Shift` + `I`（Windows）或 `Option` + `Command` + `I`（Mac）來打開開發者工具。

「效能」標籤包含一個分析工具。打開一個網站（例如，[https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)），點擊「記錄」按鈕，然後刷新網站。隨時停止記錄，你將能夠看到生成的例程，包括「腳本」、「渲染」和「繪製」網站的過程：

![Edge 分析工具](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.hk.png)

✅ 查看 [Microsoft 文檔](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) 中關於 Edge 瀏覽器效能面板的介紹

> 提示：為了獲得網站啟動時間的準確讀數，請清除瀏覽器的快取

選擇剖析時間軸中的元素，放大頁面加載過程中的事件。

通過選擇剖析時間軸的一部分並查看摘要面板，獲取頁面效能的快照：

![Edge 分析工具快照](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.hk.png)

檢查事件日誌面板，看看是否有任何事件超過了 15 毫秒：

![Edge 事件日誌](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.hk.png)

✅ 熟悉你的分析工具！打開此網站的開發者工具，看看是否有任何瓶頸。哪個資產加載最慢？哪個最快？

## 剖析檢查

通常，為了避免在部署到生產環境時出現意外，每個網頁開發者都應該注意一些「問題區域」。

**資產大小**：過去幾年來，網頁變得越來越「重」，因此也變得更慢。部分原因是圖片的使用。

✅ 查看 [Internet Archive](https://httparchive.org/reports/page-weight) 以獲取頁面重量的歷史視圖及更多資訊。

一個好的做法是確保圖片已經過優化，並以適合用戶的大小和解析度交付。

**DOM 遍歷**：瀏覽器需要根據你編寫的程式碼構建其文件物件模型（DOM），因此為了良好的頁面效能，應保持標籤的最小化，只使用和樣式化頁面所需的內容。例如，僅用於某一頁面的樣式不需要包含在主樣式表中。

**JavaScript**：每個 JavaScript 開發者都應該注意「渲染阻塞」腳本，這些腳本必須在 DOM 被遍歷和繪製到瀏覽器之前加載。考慮對內聯腳本使用 `defer`（如在 Terrarium 模組中所示）。

✅ 在 [網站速度測試網站](https://www.webpagetest.org/) 上嘗試一些網站，了解更多關於網站效能檢查的常見方法。

現在你已經了解了瀏覽器如何渲染你發送的資產，讓我們來看看完成擴展所需的最後幾件事：

### 建立一個計算顏色的函數

在 `/src/index.js` 中，於你設置的一系列 `const` 變數之後，新增一個名為 `calculateColor()` 的函數，以獲取 DOM 的訪問權限：

```JavaScript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

這裡發生了什麼？你傳入一個值（來自上一課完成的 API 調用中的碳強度），然後計算該值與顏色數組中索引的接近程度。接著，你將最接近的顏色值發送到 chrome runtime。

chrome.runtime 提供了一個 [API](https://developer.chrome.com/extensions/runtime)，用於處理各種背景任務，而你的擴展正在利用這個功能：

> 「使用 chrome.runtime API 來檢索背景頁面、返回有關 manifest 的詳細資訊，並監聽和響應應用或擴展生命週期中的事件。你還可以使用此 API 將 URL 的相對路徑轉換為完全限定的 URL。」

✅ 如果你正在為 Edge 開發這個瀏覽器擴展，可能會驚訝於你正在使用 chrome API。新版 Edge 瀏覽器基於 Chromium 瀏覽器引擎，因此你可以利用這些工具。

> 注意，如果你想剖析瀏覽器擴展，請從擴展本身內部啟動開發者工具，因為它是一個獨立的瀏覽器實例。

### 設置默認圖標顏色

現在，在 `init()` 函數中，通過再次調用 chrome 的 `updateIcon` 操作，將圖標設置為默認的綠色：

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```

### 調用函數並執行調用

接下來，將你剛剛創建的函數添加到 C02Signal API 返回的 promise 中：

```JavaScript
//let CO2...
calculateColor(CO2);
```

最後，在 `/dist/background.js` 中，為這些背景操作調用新增監聽器：

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```

在這段程式碼中，你為任何發送到後端任務管理器的消息新增了一個監聽器。如果消息名稱是 'updateIcon'，則接下來的程式碼將運行，使用 Canvas API 繪製適當顏色的圖標。

✅ 你將在 [太空遊戲課程](../../6-space-game/2-drawing-to-canvas/README.md) 中學到更多關於 Canvas API 的知識。

現在，重新構建你的擴展（`npm run build`），刷新並啟動你的擴展，觀察顏色的變化。這是一個去跑腿或洗碗的好時機嗎？現在你知道了！

恭喜你，你已經構建了一個實用的瀏覽器擴展，並學到了更多關於瀏覽器的工作原理以及如何剖析其效能的知識。

---

## 🚀 挑戰

調查一些已經存在很長時間的開源網站，根據它們的 GitHub 歷史，看看它們是否在效能方面進行了優化。如果有，找出最常見的痛點是什麼？

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/28)

## 回顧與自學

考慮訂閱一份 [效能新聞簡報](https://perf.email/)

調查瀏覽器如何通過其網頁工具中的效能標籤來評估網頁效能。你是否發現了任何主要差異？

## 作業

[分析一個網站的效能](assignment.md)

---

**免責聲明**：  
此文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解讀概不負責。