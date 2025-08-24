<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-23T23:51:03+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "tw"
}
-->
# Carbon Trigger 瀏覽器擴充功能：完整代碼

使用 tmrow 的 CO2 Signal API 來監測電力使用情況，建立一個瀏覽器擴充功能，讓您可以在瀏覽器中收到有關您所在地區電力使用情況的提醒。使用這個擴充功能可以幫助您根據這些資訊來調整您的活動。

![瀏覽器擴充功能截圖](../../../../../5-browser-extension/extension-screenshot.png)

## 從這裡開始

您需要安裝 [npm](https://npmjs.com)。將此代碼的副本下載到您電腦上的資料夾。

安裝所有必要的套件：

```
npm install
```

使用 webpack 建立擴充功能：

```
npm run build
```

要在 Edge 瀏覽器中安裝，請使用瀏覽器右上角的「三點」選單找到擴充功能面板。從那裡選擇「載入未封裝」以加載新的擴充功能。根據要求打開「dist」資料夾，擴充功能就會被加載。要使用它，您需要一個 CO2 Signal API 的 API 金鑰（[在這裡通過電子郵件獲取](https://www.co2signal.com/) - 在頁面上的框中輸入您的電子郵件）以及 [您的地區代碼](http://api.electricitymap.org/v3/zones)，該代碼與 [Electricity Map](https://www.electricitymap.org/map) 相對應（例如，在波士頓，我使用的是「US-NEISO」）。

![正在下載](../../../../../5-browser-extension/install-on-edge.png)

當 API 金鑰和地區代碼輸入到擴充功能介面後，瀏覽器擴充功能欄中的彩色點將會根據您所在地區的能源使用情況進行變化，並為您提供適合進行的高耗能活動的建議。這個「點」系統的概念是受到 [Energy Lollipop 瀏覽器擴充功能](https://energylollipop.com/) 的啟發，該擴充功能專為加州的能源排放設計。

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤讀概不負責。