# 瀏覽器擴充功能 Carbon Trigger：完整程式碼

使用 tmrow 的 C02 Signal API 來追蹤電力使用情況，開發一個瀏覽器擴充功能，讓您可以直接在瀏覽器中獲得所在區域的電力消耗提醒。使用這個即時擴充功能可以幫助您根據這些資訊來決定您的活動。

![擴充功能截圖](../../../../../translated_images/zh-MO/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## 開始使用

您需要先安裝 [npm](https://npmjs.com)。將此程式碼下載到您電腦中的一個資料夾。

安裝所有必要的套件：

```
npm install
```

使用 webpack 建置擴充功能：

```
npm run build
```

要在 Edge 中安裝，請使用瀏覽器右上角的「三點」選單找到擴充功能面板。從那裡選擇「載入未封裝」以載入新的擴充功能。當系統提示時，打開「dist」資料夾，擴充功能就會被載入。要使用此擴充功能，您需要一個 CO2 Signal API 的 API 金鑰（[在此處透過電子郵件獲取](https://www.co2signal.com/) - 在該頁面的框中輸入您的電子郵件）以及對應於 [電力地圖](https://www.electricitymap.org/map) 的 [區域代碼](http://api.electricitymap.org/v3/zones)（例如，在波士頓，我使用「US-NEISO」）。

![安裝](../../../../../translated_images/zh-MO/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

當您在擴充功能介面中輸入 API 金鑰和區域代碼後，瀏覽器擴充功能列中的顏色點應該會改變，以反映您所在區域的能源使用情況，並提供您是否適合進行高耗能活動的指示。這個「顏色點」系統的概念是受到 [Energy Lollipop 擴充功能](https://energylollipop.com/)（針對加州排放量）啟發而來的。

**免責聲明**：  
本文檔使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始語言的文件應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。