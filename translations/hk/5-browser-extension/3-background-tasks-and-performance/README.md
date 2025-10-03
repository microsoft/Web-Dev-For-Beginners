<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b91cbf14240ee59411b96448b994ace1",
  "translation_date": "2025-10-03T12:17:03+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "hk"
}
-->
# 瀏覽器擴展項目第三部分：了解背景任務和性能

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/27)

### 簡介

在本模組的前兩節課中，你學習了如何建立一個表單以及顯示從 API 獲取的數據區域。這是一種非常標準的方式來在網絡上建立網絡存在。你甚至學會了如何異步獲取數據。你的瀏覽器擴展幾乎已經完成。

現在需要管理一些背景任務，包括刷新擴展圖標的顏色，因此這是一個很好的時機來討論瀏覽器如何管理這類任務。在構建網絡資產時，讓我們從性能的角度來思考這些瀏覽器任務。

## 網絡性能基礎

> 「網站性能主要涉及兩件事：頁面加載速度，以及頁面上的代碼運行速度。」 -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

如何讓你的網站在各種設備、各種用戶和各種情況下都能快速運行是一個非常廣泛的話題。以下是一些在構建標準網絡項目或瀏覽器擴展時需要注意的要點。

確保網站高效運行的第一步是收集其性能數據。第一個地方可以查看的是網絡瀏覽器的開發者工具。在 Edge 中，你可以選擇「設置及更多」按鈕（瀏覽器右上角的三點圖標），然後導航到「更多工具 > 開發者工具」，並打開「性能」選項卡。你也可以使用快捷鍵 `Ctrl` + `Shift` + `I`（Windows）或 `Option` + `Command` + `I`（Mac）來打開開發者工具。

「性能」選項卡包含一個分析工具。打開一個網站（例如，[https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)），然後點擊「記錄」按鈕，刷新網站。隨時停止記錄，你將能看到生成的例程，包括「腳本」、「渲染」和「繪製」網站：

![Edge 分析工具](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.hk.png)

✅ 查看 [Microsoft 文檔](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) 中有關 Edge 性能面板的內容

> 提示：為了獲得網站啟動時間的準確讀數，請清除瀏覽器的緩存

選擇性能時間線的元素，放大頁面加載時發生的事件。

通過選擇性能時間線的一部分並查看摘要窗格，獲取頁面性能的快照：

![Edge 分析工具快照](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.hk.png)

檢查事件日誌窗格，查看是否有任何事件超過了 15 毫秒：

![Edge 事件日誌](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.hk.png)

✅ 熟悉你的分析工具！打開本網站的開發者工具，看看是否有任何瓶頸。哪個資產加載最慢？哪個最快？

## 分析檢查

通常，為了避免在部署到生產環境時出現意外問題，每個網絡開發者都應該注意一些「問題區域」。

**資產大小**：過去幾年，網絡變得「更重」，因此也更慢。其中一些重量與使用圖片有關。

✅ 查看 [Internet Archive](https://httparchive.org/reports/page-weight) 以了解頁面重量的歷史視圖及更多信息。

一個好的做法是確保你的圖片已經過優化，並以適合用戶的大小和分辨率交付。

**DOM 遍歷**：瀏覽器需要根據你編寫的代碼構建其文檔對象模型，因此為了良好的頁面性能，應保持標籤的最小化，只使用和樣式化頁面所需的內容。基於此，與頁面相關的多餘 CSS 可以進行優化；僅需在某一頁面使用的樣式不需要包含在主樣式表中。

**JavaScript**：每個 JavaScript 開發者都應注意「渲染阻塞」腳本，這些腳本必須在 DOM 遍歷和繪製到瀏覽器之前加載。考慮在內聯腳本中使用 `defer`（如在 Terrarium 模組中所做）。

✅ 在 [網站速度測試網站](https://www.webpagetest.org/) 上嘗試一些網站，了解用於確定網站性能的常見檢查。

現在你已經了解瀏覽器如何渲染你發送的資產，讓我們來看看完成擴展所需的最後幾件事：

### 創建計算顏色的函數

在 `/src/index.js` 中，添加一個名為 `calculateColor()` 的函數，放在你設置的用於訪問 DOM 的一系列 `const` 變量之後：

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

這裡發生了什麼？你傳入一個值（來自上一課完成的 API 調用中的碳強度），然後計算其值與顏色數組中索引的接近程度。接著，你將最接近的顏色值發送到 chrome runtime。

chrome.runtime 有一個 [API](https://developer.chrome.com/extensions/runtime)，可以處理各種背景任務，而你的擴展正在利用它：

> 「使用 chrome.runtime API 獲取背景頁面，返回有關清單的詳細信息，並監聽和響應應用或擴展生命周期中的事件。你還可以使用此 API 將 URL 的相對路徑轉換為完全限定的 URL。」

✅ 如果你正在為 Edge 開發此瀏覽器擴展，可能會驚訝於你正在使用 chrome API。新版 Edge 瀏覽器基於 Chromium 瀏覽器引擎，因此你可以利用這些工具。

> 注意，如果你想分析瀏覽器擴展，請從擴展本身內部啟動開發者工具，因為它是獨立的瀏覽器實例。

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

接下來，通過將其添加到 C02Signal API 返回的 promise 中，調用你剛剛創建的函數：

```JavaScript
//let CO2...
calculateColor(CO2);
```

最後，在 `/dist/background.js` 中，為這些背景操作調用添加監聽器：

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = new OffscreenCanvas(200, 200);
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```

在此代碼中，你為任何發送到後端任務管理器的消息添加了一個監聽器。如果消息名為 'updateIcon'，則接下來的代碼將使用 Canvas API 繪製適當顏色的圖標。

✅ 你將在 [太空遊戲課程](../../6-space-game/2-drawing-to-canvas/README.md) 中學到更多有關 Canvas API 的知識。

現在，重新構建你的擴展（`npm run build`），刷新並啟動你的擴展，觀察顏色變化。是時候去跑腿或洗碗了嗎？現在你知道了！

恭喜你，你已經構建了一個有用的瀏覽器擴展，並且更深入地了解了瀏覽器的工作原理以及如何分析其性能。

---

## 🚀 挑戰

調查一些已存在很久的開源網站，根據其 GitHub 歷史，看看它們是否在多年來進行了性能優化。如果有，最常見的痛點是什麼？

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/28)

## 回顧與自學

考慮訂閱一份 [性能新聞簡報](https://perf.email/)

調查瀏覽器通過其網絡工具中的性能選項卡來衡量網絡性能的一些方式。你是否發現了任何主要差異？

## 作業

[分析網站性能](assignment.md)

---

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。