# Carbon Trigger 瀏覽器擴展：完整代碼

使用 tmrow 的 C02 Signal API 來檢測電力使用情況，構建一個瀏覽器擴展，讓您可以在瀏覽器中收到有關您所在地區電力使用情況的提醒。使用這個擴展可以幫助您根據這些資訊來調整您的活動。

![瀏覽器擴展截圖](../../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

您需要安裝 [npm](https://npmjs.com)。將此代碼的副本下載到您電腦上的一個文件夾中。

安裝所有所需的套件：

```
npm install
```

使用 webpack 構建擴展：

```
npm run build
```

要在 Edge 中安裝，請使用瀏覽器右上角的“三點”菜單找到擴展面板。從那裡選擇“加載未打包的擴展”來加載新的擴展。根據提示打開“dist”文件夾，擴展就會被加載。要使用它，您需要一個 CO2 Signal API 的 API 密鑰（[在這裡通過電子郵件獲取](https://www.co2signal.com/) - 在頁面上的框中輸入您的電子郵件）以及 [對應於您地區的代碼](http://api.electricitymap.org/v3/zones)，這些代碼可以在 [Electricity Map](https://www.electricitymap.org/map) 上找到（例如，在波士頓，我使用的是“US-NEISO”）。

![正在下載](../../../../../5-browser-extension/install-on-edge.png)

當您將 API 密鑰和地區代碼輸入到擴展的界面後，瀏覽器擴展欄中的彩色點將會改變，以反映您所在地區的能源使用情況，並為您提供建議，告訴您哪些高耗能活動適合進行。這個“彩色點”系統的概念靈感來自 [Energy Lollipop 瀏覽器擴展](https://energylollipop.com/)，該擴展專為加州的排放量設計。

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。