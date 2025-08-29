<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T15:20:33+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "tw"
}
-->
# 瀏覽器擴充功能專案第 2 部分：呼叫 API，使用本地儲存

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/25)

### 簡介

在這節課中，你將透過提交瀏覽器擴充功能的表單來呼叫 API，並在擴充功能中顯示結果。此外，你還將學習如何將資料儲存在瀏覽器的本地儲存中，以供未來參考和使用。

✅ 請按照適當檔案中的編號段落，了解應該在哪裡放置程式碼。

### 設置擴充功能中需要操作的元素：

到目前為止，你已經為瀏覽器擴充功能建立了表單和結果 `<div>` 的 HTML。接下來，你需要在 `/src/index.js` 檔案中工作，逐步構建你的擴充功能。可以參考[上一節課](../1-about-browsers/README.md)來了解如何設置專案和構建流程。

在 `index.js` 檔案中，首先建立一些 `const` 變數來保存與各個欄位相關的值：

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

所有這些欄位都是通過其 CSS 類名來引用的，這些類名是在上一節課的 HTML 中設置的。

### 添加監聽器

接下來，為表單和重置按鈕添加事件監聽器，這樣當使用者提交表單或點擊重置按鈕時，會觸發相應的操作，並在檔案底部添加初始化應用程式的呼叫：

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ 注意這裡使用的簡寫方式來監聽提交或點擊事件，以及事件如何被傳遞到 handleSubmit 或 reset 函數中。你能用更長的格式寫出這個簡寫的等價形式嗎？你更喜歡哪種方式？

### 構建 init() 函數和 reset() 函數：

現在你將構建初始化擴充功能的函數，該函數名為 init()：

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

在這個函數中，有一些有趣的邏輯。閱讀後你能看出發生了什麼嗎？

- 設置兩個 `const` 來檢查使用者是否在本地儲存中儲存了 APIKey 和地區代碼。
- 如果其中任何一個為 null，則通過將表單的樣式顯示為 'block' 來顯示表單。
- 隱藏結果區域、加載區域和清除按鈕，並將任何錯誤訊息設為空字串。
- 如果存在金鑰和地區代碼，則啟動一個流程：
  - 呼叫 API 獲取碳使用數據。
  - 隱藏結果區域。
  - 隱藏表單。
  - 顯示重置按鈕。

在繼續之前，了解瀏覽器中一個非常重要的概念是很有幫助的：[LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)。LocalStorage 是一種將字串以 `key-value` 配對形式儲存在瀏覽器中的實用方式。這種類型的網頁儲存可以通過 JavaScript 來操作，以管理瀏覽器中的資料。LocalStorage 不會過期，而另一種網頁儲存 SessionStorage 則會在瀏覽器關閉時清除。這些不同類型的儲存方式各有優缺點。

> 注意 - 瀏覽器擴充功能有其自己的本地儲存；主瀏覽器視窗是另一個實例，行為是分開的。

例如，你可以將 APIKey 設置為一個字串值，並且可以通過 "檢查" 網頁（你可以右鍵點擊瀏覽器進行檢查）並進入 Applications 標籤來查看儲存內容。

![本地儲存面板](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.tw.png)

✅ 想一想有哪些情況下你不應該將某些資料儲存在 LocalStorage 中。一般來說，將 API 金鑰儲存在 LocalStorage 中是一個壞主意！你能理解為什麼嗎？在我們的案例中，由於我們的應用程式純粹是為了學習，並且不會部署到應用程式商店，因此我們將使用這種方法。

注意，你可以使用 Web API 來操作 LocalStorage，通過使用 `getItem()`、`setItem()` 或 `removeItem()`。這在各大瀏覽器中都有廣泛支援。

在構建 `displayCarbonUsage()` 函數（在 `init()` 中被呼叫）之前，讓我們先構建處理初始表單提交的功能。

### 處理表單提交

建立一個名為 `handleSubmit` 的函數，該函數接受一個事件參數 `(e)`。阻止事件的傳播（在這種情況下，我們希望阻止瀏覽器刷新），並呼叫一個新函數 `setUpUser`，傳遞 `apiKey.value` 和 `region.value` 作為參數。通過這種方式，你可以使用初始表單中填寫的兩個值。

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ 回顧一下記憶 - 你在上一節課中設置的 HTML 包含兩個輸入欄位，其 `values` 是通過你在檔案頂部設置的 `const` 捕獲的，並且它們都是 `required`，因此瀏覽器會阻止使用者輸入空值。

### 設置使用者

接下來是 `setUpUser` 函數，這裡你將為 apiKey 和 regionName 設置本地儲存值。新增一個新函數：

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

這個函數在呼叫 API 時顯示一條加載訊息。到這裡，你已經來到了這個瀏覽器擴充功能中最重要的函數！

### 顯示碳使用數據

最後，是時候查詢 API 了！

在進一步操作之前，我們應該討論一下 API。API，即[應用程式介面](https://www.webopedia.com/TERM/A/API.html)，是網頁開發人員工具箱中的關鍵元素。它們為程式之間的互動和介面提供了標準方式。例如，如果你正在建立一個需要查詢資料庫的網站，可能有人已經為你建立了一個 API 可以使用。雖然有許多類型的 API，但其中一種最受歡迎的是 [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)。

✅ "REST" 代表 "表現層狀態轉換"（Representational State Transfer），其特點是使用各種配置的 URL 來獲取資料。稍微研究一下開發人員可用的各種類型的 API。哪種格式最吸引你？

這個函數有幾個重要的地方需要注意。首先，注意 [`async` 關鍵字](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)。將函數寫成非同步的方式意味著它會等待某個動作（例如資料返回）完成後再繼續執行。

這裡有一段關於 `async` 的快速影片：

[![管理 Promise 的 Async 和 Await](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "管理 Promise 的 Async 和 Await")

> 🎥 點擊上方圖片觀看關於 async/await 的影片。

建立一個新函數來查詢 C02Signal API：

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

這是一個較大的函數。這裡發生了什麼？

- 遵循最佳實踐，你使用了 `async` 關鍵字，使這個函數以非同步方式運行。該函數包含一個 `try/catch` 區塊，因為當 API 返回資料時，它會返回一個 Promise。由於你無法控制 API 回應的速度（它可能根本不回應！），因此需要通過非同步方式來處理這種不確定性。
- 你正在查詢 co2signal API 以獲取你所在地區的數據，並使用你的 API 金鑰。為了使用該金鑰，你需要在標頭參數中使用一種類型的身份驗證。
- 一旦 API 回應，你將其回應資料的各個元素分配給你設置的螢幕部分以顯示這些資料。
- 如果出現錯誤，或者沒有結果，你將顯示一條錯誤訊息。

✅ 使用非同步程式設計模式是工具箱中的另一個非常有用的工具。閱讀[關於這種類型程式碼的各種配置方式](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function)。

恭喜！如果你構建了擴充功能（`npm run build`）並在擴充功能面板中刷新它，你已經擁有了一個可運行的擴充功能！唯一尚未完成的是圖示，你將在下一節課中修復它。

---

## 🚀 挑戰

在這些課程中，我們已經討論了幾種類型的 API。選擇一個網頁 API，深入研究它提供的功能。例如，查看瀏覽器中可用的 API，例如 [HTML 拖放 API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API)。在你看來，什麼樣的 API 是一個出色的 API？

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/26)

## 回顧與自學

在這節課中，你學習了 LocalStorage 和 API，這兩者對於專業的網頁開發人員來說都非常有用。你能想到這兩者如何協同工作嗎？想一想你會如何設計一個網站，將項目儲存起來以供 API 使用。

## 作業

[採用一個 API](assignment.md)

---

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而產生的任何誤解或錯誤解讀概不負責。