<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-23T23:48:21+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "tw"
}
-->
# Carbon Trigger 瀏覽器擴充功能：完成的程式碼

使用 tmrow 的 C02 Signal API 來追蹤電力使用情況，建立一個瀏覽器擴充功能，讓您可以在瀏覽器中即時收到有關您所在區域電力使用負載的提醒。即時使用此擴充功能，能幫助您根據這些資訊對您的活動進行判斷。

![擴充功能截圖](../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

您需要先安裝 [npm](https://npmjs.com)。將此程式碼下載到您電腦上的一個資料夾中。

安裝所有所需的套件：

```
npm install
```

使用 webpack 建置擴充功能：

```
npm run build
```

在 Edge 瀏覽器上安裝時，使用瀏覽器右上角的「三點」選單找到擴充功能面板。從那裡選擇「載入未封裝的擴充功能」來載入新的擴充功能。在提示時打開「dist」資料夾，擴充功能就會載入。要使用此功能，您需要 CO2 Signal API 的 API 金鑰（[在此處透過電子郵件獲取](https://www.co2signal.com/) - 在此頁面輸入您的電子郵件）以及對應於 [Electricity Map](https://www.electricitymap.org/map) 的 [區域代碼](http://api.electricitymap.org/v3/zones)（例如，在波士頓，我使用的是「US-NEISO」）。

![安裝中](../../../../5-browser-extension/install-on-edge.png)

一旦在擴充功能介面中輸入了 API 金鑰和區域代碼，瀏覽器擴充功能列中的彩色點應該會改變，反映您所在區域的能源使用情況，並為您提供建議，告訴您哪些高耗能活動適合進行。這個「點」系統的概念來自於 [Energy Lollipop 擴充功能](https://energylollipop.com/)，該功能專為加州的碳排放設計。

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。