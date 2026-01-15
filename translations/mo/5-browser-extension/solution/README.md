<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-25T23:50:22+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "mo"
}
-->
# Carbon Trigger 瀏覽器擴充功能：完成的程式碼

使用 tmrow 的 C02 Signal API 來追蹤電力使用情況，建立一個瀏覽器擴充功能，讓您可以在瀏覽器中即時提醒所在區域的電力使用負荷。透過這個擴充功能，您可以根據資訊來判斷是否進行某些活動。

![擴充功能截圖](../../../../translated_images/mo/extension-screenshot.0e7f5bfa110e92e3.png)

## 快速開始

您需要先安裝 [npm](https://npmjs.com)。將這份程式碼下載到電腦中的一個資料夾。

安裝所有必要的套件：

```
npm install
```

使用 webpack 建置擴充功能：

```
npm run build
```

在 Edge 瀏覽器中安裝擴充功能，請使用瀏覽器右上角的「三點」選單找到擴充功能面板。從那裡選擇「載入未封裝」以載入新的擴充功能。在提示中打開「dist」資料夾，擴充功能就會載入。要使用此功能，您需要 CO2 Signal API 的 API 金鑰（[在此透過電子郵件獲取](https://www.co2signal.com/) - 在此頁面輸入您的電子郵件）以及對應於 [Electricity Map](https://www.electricitymap.org/map) 的區域代碼（例如，在波士頓，我使用「US-NEISO」）[區域代碼查詢](http://api.electricitymap.org/v3/zones)。

![安裝擴充功能](../../../../translated_images/mo/install-on-edge.78634f02842c4828.png)

一旦在擴充功能介面中輸入 API 金鑰和區域代碼，瀏覽器擴充功能欄中的彩色點應該會改變，反映您所在區域的能源使用情況，並提供指引，告訴您哪些高耗能活動適合進行。這個「點」系統的概念是受到 [Energy Lollipop 擴充功能](https://energylollipop.com/)（針對加州排放）的啟發。

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。