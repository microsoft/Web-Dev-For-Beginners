<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-23T23:41:22+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "tw"
}
-->
# Carbon Trigger 瀏覽器擴充功能：入門代碼

使用 tmrow 的 C02 Signal API 來追蹤電力使用情況，建立一個瀏覽器擴充功能，讓您可以直接在瀏覽器中提醒自己所在區域的電力使用負荷。隨機使用此擴充功能可以幫助您根據這些資訊做出活動的判斷。

![擴充功能截圖](../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

您需要先安裝 [npm](https://npmjs.com)。將此代碼下載到您電腦上的一個資料夾。

安裝所有必要的套件：

```
npm install
```

使用 webpack 建置擴充功能：

```
npm run build
```

要在 Edge 上安裝，請使用瀏覽器右上角的「三點」選單找到擴充功能面板。從那裡選擇「載入未封裝」以載入新的擴充功能。在提示時打開「dist」資料夾，擴充功能就會載入。要使用它，您需要 CO2 Signal API 的 API 金鑰（[在此處透過電子郵件獲取](https://www.co2signal.com/) - 在此頁面上的框中輸入您的電子郵件）以及對應於 [Electricity Map](https://www.electricitymap.org/map) 的區域代碼（例如，在波士頓，我使用「US-NEISO」）[代碼查詢](http://api.electricitymap.org/v3/zones)。

![安裝](../../../../5-browser-extension/install-on-edge.png)

一旦在擴充功能介面中輸入 API 金鑰和區域代碼，瀏覽器擴充功能欄中的彩色點應該會改變，以反映您所在區域的能源使用情況，並給您指引哪些高耗能活動適合進行。這個「點」系統的概念是由 [Energy Lollipop 擴充功能](https://energylollipop.com/) 提供的，用於加州的排放情況。

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤讀概不負責。