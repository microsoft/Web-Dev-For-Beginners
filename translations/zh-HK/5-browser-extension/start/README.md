# Carbon Trigger 瀏覽器擴展：入門代碼

使用 tmrow 的 C02 Signal API 來追蹤電力使用情況，建立一個瀏覽器擴展，讓你可以在瀏覽器中即時獲得有關你所在地區電力使用情況的提醒。隨時使用這個擴展可以幫助你根據這些資訊對你的活動作出判斷。

![擴展截圖](../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

你需要先安裝 [npm](https://npmjs.com)。將這段代碼下載到你電腦上的一個資料夾中。

安裝所有所需的套件：

```
npm install
```

使用 webpack 建置擴展：

```
npm run build
```

在 Edge 瀏覽器上安裝，使用瀏覽器右上角的「三點」選單找到擴展面板。從那裡選擇「載入未封裝的擴展」來載入新的擴展。在提示時打開「dist」資料夾，擴展就會被載入。要使用它，你需要一個 CO2 Signal API 的 API 金鑰（[點擊這裡通過電郵獲取](https://www.co2signal.com/) - 在此頁面輸入你的電郵地址）以及對應 [Electricity Map](https://www.electricitymap.org/map) 的 [地區代碼](http://api.electricitymap.org/v3/zones)（例如，在波士頓，我使用的是「US-NEISO」）。

![安裝中](../../../../5-browser-extension/install-on-edge.png)

一旦在擴展介面中輸入了 API 金鑰和地區代碼，瀏覽器擴展欄中的彩色圓點應該會改變，反映你所在地區的能源使用情況，並給你一些建議，告訴你哪些高耗能活動是適合進行的。這個「圓點」系統的概念來自 [Energy Lollipop 擴展](https://energylollipop.com/)，該擴展用於加州的排放情況。

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。