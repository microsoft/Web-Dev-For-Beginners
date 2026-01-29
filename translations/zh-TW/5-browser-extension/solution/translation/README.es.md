# 瀏覽器擴充功能 Carbon Trigger：完整程式碼

使用 tmrow 的 C02 信號 API 來追蹤電力使用情況，開發一個瀏覽器擴充功能，讓您可以直接在瀏覽器中獲得有關您所在區域電力消耗的提醒。使用這個即時擴充功能，能幫助您根據這些資訊來決定您的活動。

![extension screenshot](../../../../../5-browser-extension/solution/start/extension-screenshot.png)

## 開始使用

您需要安裝 [npm](https://npmjs.com)。將此程式碼的副本下載到您電腦中的一個資料夾。

安裝所有必要的套件：

```
npm install
```

使用 webpack 建置擴充功能：

```
npm run build
```

要在 Edge 中安裝，請使用瀏覽器右上角的「三點」選單，找到「擴充功能」面板。從那裡選擇「載入未封裝的擴充功能」來載入新的擴充功能。當系統提示時，打開「dist」資料夾，擴充功能就會被載入。要使用此功能，您需要一個 CO2 Signal API 的 API 金鑰（[在這裡透過電子郵件獲取](https://www.co2signal.com/) - 在該頁面的框中輸入您的電子郵件）以及對應於 [電力地圖](https://www.electricitymap.org/map) 的 [區域代碼](http://api.electricitymap.org/v3/zones)（例如，在波士頓，我使用的是「US-NEISO」）。

![installing](../../../../../5-browser-extension/solution/start/install-on-edge.png)

一旦在擴充功能介面中輸入了 API 金鑰和區域代碼，瀏覽器擴充功能列中的顏色點應該會改變，以反映您所在區域的能源使用情況，並為您提供有關高耗能活動是否適合的指標。這個「顏色點」系統的概念靈感來自 [Energy Lollipop 擴充功能](https://energylollipop.com/)，該功能用於加州的排放量指標。

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤讀概不負責。