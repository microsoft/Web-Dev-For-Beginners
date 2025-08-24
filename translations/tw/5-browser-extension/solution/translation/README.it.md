<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-23T23:52:49+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "tw"
}
-->
# 碳觸發瀏覽器擴充功能：啟動代碼

我們將使用 tmrow 的 Signal C02 API 來監控電力使用情況，並創建一個瀏覽器擴充功能，讓您可以直接在瀏覽器中獲得提醒，了解所在區域的電力使用情況。使用這個專門的擴充功能可以幫助您根據這些資訊評估自己的活動。

![擴充功能截圖](../../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

需要先安裝 [npm](https://npmjs.com)。將此代碼下載到電腦中的一個資料夾。

安裝所有必要的套件：

```
npm install
```

使用 webpack 建立擴充功能：

```
npm run build
```

要在 Edge 上安裝，請使用瀏覽器右上角的「三點」選單找到擴充功能面板。如果尚未啟用，請啟用開發者模式（左下角）。選擇「載入未壓縮的擴充功能」以載入新的擴充功能。在提示中打開 "dist" 資料夾，擴充功能就會被載入。要使用此擴充功能，您需要一個 CO2 Signal API 的 API 金鑰（可以[通過電子郵件獲取](https://www.co2signal.com/) - 在該頁面上的框中輸入您的電子郵件）以及對應於[電力地圖](https://www.electricitymap.org/map)的[區域代碼](http://api.electricitymap.org/v3/zones)（例如，在波士頓，區域代碼是 "US-NEISO"）。

![安裝](../../../../../5-browser-extension/install-on-edge.png)

當 API 金鑰和區域代碼輸入到擴充功能的介面後，瀏覽器擴充功能欄中的彩色點應該會改變，以反映所在區域的能源使用情況，並提供指引，告訴您哪些高耗能活動適合執行。這個「點」系統的概念是基於[加州排放的 Energy Lollipop 擴充功能](https://energylollipop.com/)所提供的想法。

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。