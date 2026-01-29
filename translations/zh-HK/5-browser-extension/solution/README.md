# Carbon Trigger 瀏覽器擴展：完成的代碼

使用 tmrow 的 C02 Signal API 追蹤電力使用情況，建立一個瀏覽器擴展，讓您可以在瀏覽器中直接提醒所在地區的電力使用情況。即時使用此擴展可以幫助您根據這些信息對活動進行判斷。

![擴展截圖](../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

您需要先安裝 [npm](https://npmjs.com)。將此代碼下載到電腦上的一個文件夾。

安裝所有所需的套件：

```
npm install
```

使用 webpack 建立擴展：

```
npm run build
```

在 Edge 瀏覽器上安裝擴展，使用瀏覽器右上角的「三點」菜單找到擴展面板。從那裡選擇「載入未打包的擴展」，然後在提示中打開「dist」文件夾，擴展就會被載入。要使用此擴展，您需要 CO2 Signal API 的 API 密鑰（[在此處通過電子郵件獲取](https://www.co2signal.com/) - 在該頁面上的框中輸入您的電子郵件）以及與 [Electricity Map](https://www.electricitymap.org/map) 對應的地區代碼（例如，在波士頓，我使用「US-NEISO」）[代碼列表](http://api.electricitymap.org/v3/zones)。

![安裝擴展](../../../../5-browser-extension/install-on-edge.png)

一旦在擴展界面中輸入 API 密鑰和地區代碼，瀏覽器擴展欄中的彩色點應該會根據您所在地區的能源使用情況進行變化，並給出指引，告訴您哪些高耗能活動適合進行。這個「點」系統的概念是受加州排放的 [Energy Lollipop 擴展](https://energylollipop.com/) 啟發而設計的。

**免責聲明**：  
本文件使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。