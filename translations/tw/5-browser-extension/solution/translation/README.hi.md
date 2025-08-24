<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-23T23:50:10+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "tw"
}
-->
# Carbon Trigger 瀏覽器擴充功能：完整程式碼

使用 tmrow 的 C02 Signal API 追蹤電力使用情況，建立一個瀏覽器擴充功能，提醒您所在區域的電力使用情況是否繁重。透過使用此擴充功能，您可以根據這些資訊來決定自己的活動。

![擴充功能截圖](../../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

您需要先安裝 [npm](https://npmjs.com)。將此程式碼下載到您電腦上的一個資料夾中。

安裝所有必要的套件：

```
npm install
```

使用 Webpack 建立擴充功能：

```
npm run build
```

要在 Edge 上安裝，請使用瀏覽器右上角的「三點」選單找到擴充功能面板。從那裡選擇「載入未封裝的擴充功能」，然後在提示中打開「dist」資料夾，擴充功能就會被載入。要使用此功能，您需要 CO2 Signal 的 API 金鑰（[透過電子郵件在此獲取](https://www.co2signal.com/)——在該頁面的框中輸入您的電子郵件）以及 [您所在區域的代碼](http://api.electricitymap.org/v3/zones)（例如，波士頓使用「US-NEISO」）[電力地圖](https://www.electricitymap.org/map)。

![安裝](../../../../../5-browser-extension/install-on-edge.png)

當 API 金鑰和區域代碼輸入到擴充功能介面後，瀏覽器擴充功能列中的彩色點應該會根據您所在區域的能源使用情況進行變化，並提供指示，告訴您哪些能源密集型活動適合您的操作表現。這個「點」系統的概念是我從加州排放的 [Energy Lollipop 擴充功能](https://energylollipop.com/) 中獲得的靈感。

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤讀概不負責。