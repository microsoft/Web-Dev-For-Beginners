# 瀏覽器擴充功能專案 Part 1：關於瀏覽器

![瀏覽器繪圖筆記](/sketchnotes/browser.jpg)
> 由 [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob) 繪製

## 課前測驗

[課前測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/23?loc=zh_tw)

### 大綱

瀏覽器擴充功能新增額外的功能給瀏覽器。在你建立之前，你應該學習瀏覽器是如何運作的。

### 關於瀏覽器

在這一系列的課程中，你會學習如何建立瀏覽器擴充功能，運作在 Chrome、Firefox 與 Edge 瀏覽器上。在這一章中，你會探索瀏覽器是如何運作，建立瀏覽器擴充功能的內容。

但到底何謂瀏覽器？它是幫助用戶顯示伺服器內容到網頁上的程式軟體。

✅ 小歷史：第一個網頁瀏覽器為 'WorldWideWeb'，由 Timothy Berners-Lee 爵士於 1990 年建立。

![早期的瀏覽器](../images/earlybrowsers.jpg)
> 這邊有一些早期的瀏覽器，請參考[Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

用戶使用網址 URL (Uniform Resource Locator) 位置連上網路，通常以 `http` 或 `https` 位置開頭使用超文本傳輸協定(Hypertext Transfer Protocol)，瀏覽器便能與該伺服器溝通並抓取網頁的資料。

這時，瀏覽器轉譯引擎會呈現到用戶的裝置上，可以是手機、桌機或是筆記型電腦。

瀏覽器也有能力暫存內容，不需要每一次都向伺服器請求內容。瀏覽器儲存用戶的瀏覽紀錄、儲存 'cookies'，一種包含用戶活動資訊的小型資料。

請記得一件重要的事，各家瀏覽器並不會相同！每一種瀏覽器都有各自的長處短處，專業的網頁開發人員必須了解如何讓網頁在不同瀏覽器上運作正常。這包含處理手機的小視窗，處理離線用戶的行為。

這邊有一個值得加到你書籤的實用網頁：[caniuse.com](https://www.caniuse.com)。當你在建構網頁時，你可以查詢 caniuse 技術支援清單，確保你能提供用戶最佳的使用體驗。

✅ 你知道你的網頁用戶最常使用什麼瀏覽器嗎？檢查你的分析程式，你可以安裝各種分析程式當作是你開發的一種環節，它們會告訴你那些瀏覽器最常被使用。

## 瀏覽器擴充功能

為什麼你需要建立瀏覽器擴充功能？它能附加在瀏覽器上，讓你快速地重複執行部分功能。舉例來說，如果你需要在網頁中檢查你所互動的顏色，你或許需要顏色選擇器擴充功能；如果你有記憶帳號密碼的困擾，你可能需要密碼管理擴充功能。

瀏覽器擴充功能在開發上也很有趣。它們有效地管理並執行少部分任務課題。

✅ 你最喜歡哪一項瀏覽器擴充功能？它們提供了什麼功能？

### 安裝擴充功能

在你建立擴充功能以前，先看看建制與安裝瀏覽器擴充功能的流程。每一種瀏覽器在管理套件上可能有些不同，Edge上的管理過程就與 Chrome 與 Firefox 相似：

![Edge 瀏覽器開啟 edge://extensions 中的設定選單截圖](../images/install-on-edge.png)

大體而言，過程為：

- 指令 `npm run build` 建制你的管理套件
- 在瀏覽器中的延伸模組區點擊右上方的「更多設定」按鈕
- 如果這是新的套件，選擇 `load unpacked` 從資料夾上傳新的擴充套件(在我們的例子中， `/dist` ) 
- 如果這是已安裝的套件，點擊 `reload` 按鈕

✅ 上述教學步驟讓你導入自己建立的擴充功能；若要安裝已公開的套件，你可以前往瀏覽器擴充功能商店，逛逛這些[商店](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home)並安裝你選擇的套件。

### 展開行動

你打算寫一套擴充功能來顯示你國家的碳足跡，顯示國家的能源使用量與可用能源量。套件內會有 API Key 來存取網頁 CO2 Signal 的 API。

**你需要：**

- [一組 API key](https://www.co2signal.com/)：在網頁上輸入你的電子信箱，它會寄一組鑰匙給你
- 給[Electricity Map](https://www.electricitymap.org/map)使用的[國家區域代碼](http://api.electricitymap.org/v3/zones) (舉個例子，在波士頓使用'US-NEISO')
- [程式碼](../../start)，下載 `start` 資料夾，你需要修改裡面的程式碼檔案。
- [NPM](https://www.npmjs.com)，NPM 是一套軟體包管理工具，在本地安裝的軟體包會被列在 `package.json` 檔案中，成為網頁利用的資源。

✅ 從[這個優質的學習套件](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-13441-cxa)中，學習更多關於軟體包管理。

花點時間看一下程式檔案結構

dist
    -|manifest.json (defaults set)
    -|index.html (前端 HTML)
    -|background.js (background JS)
    -|main.js (built JS)
src
    -|index.js (你的 JS 程式碼)

✅ 當你取得你的 API Key 與國家區域代碼後，紀錄在筆記中給之後的課程使用。

### 建立給擴充功能使用的 HTML

這套擴充功能有兩個重點。一個是取得 API Key 與國家區域代碼：

![在瀏覽器擴充功能中，顯示 API key與國家區域代碼的輸入欄截圖](../images/1.png)

與顯示國家的碳排放量：

![在瀏覽器擴充功能中，顯示 US-NEISO 地區碳排放量與石化燃料比例截圖](../images/2.png)

讓我們開始建立輸入欄位的 HTML 與它的 CSS 吧。

在資料夾 `/dist` 中，建立輸入表單與結果顯示區域。在檔案 `index.html` 中，規劃表單區域：

```HTML
<form class="form-data" autocomplete="on">
	<div>
		<h2>New? Add your Information</h2>
	</div>
	<div>
		<label for="region">Region Name</label>
		<input type="text" id="region" required class="region-name" />
	</div>
	<div>
		<label for="api">Your API Key from tmrow</label>
		<input type="text" id="api" required class="api-key" />
	</div>
	<button class="search-btn">Submit</button>
</form>	
```
這個表單儲存你的輸入資訊並儲存到 Local Storage 中。

接下來，建立結果輸出區。在 form tag 後面新增一些 divs：

```HTML
<div class="result">
	<div class="loading">loading...</div>
	<div class="errors"></div>
	<div class="data"></div>
	<div class="result-container">
		<p><strong>Region: </strong><span class="my-region"></span></p>
		<p><strong>Carbon Usage: </strong><span class="carbon-usage"></span></p>
		<p><strong>Fossil Fuel Percentage: </strong><span class="fossil-fuel"></span></p>
	</div>
	<button class="clear-btn">Change region</button>
</div>
```
這時，你可以試著建制這個專案。請確保安裝擴充套建的軟體依賴套件，輸入：

```
npm install
```

這項指令會使用 NPM (Node Package Manager)安裝 webpack 給你的擴充套件建制過程中使用。Webpack 是一個處理程式編譯的工具組合包。你可以在 `/dist/main.js` 看到它的執行後的結果 ── 程式碼已經被打好包了。

到目前為止，擴充套件已經被建制，如果你導入此套件到 Edge 中也能完整地呈現出來。

恭喜你，你已經達成建立擴充套件的第一步驟。在接下來的課程中，你會新增更多功能，讓它更加的實用。

---

## 🚀 挑戰

逛逛瀏覽器擴充商店，安裝一套擴充功能到你的瀏覽器中。你可以查看它的檔案群。你發現了什麼？

## 課後測驗

[課後測驗](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/24?loc=zh_tw)

## 複習與自學

這堂課中你學到了一些瀏覽器的歷史。趁這個機會閱讀更多它的歷史，學習網際網路的發明者是如何構思網路的應用。這邊有一些實用的網頁：

[瀏覽器的歷史](https://www.mozilla.org/firefox/browsers/browser-history/)

[網路的歷史](https://webfoundation.org/about/vision/history-of-the-web/)

[與 Tim Berners-Lee 的訪談](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## 作業

[重新造型你的套件](assignment.zh-tw.md)

