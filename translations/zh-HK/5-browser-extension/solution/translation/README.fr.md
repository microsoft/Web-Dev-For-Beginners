# 瀏覽器擴展 Carbon Trigger：完成的代碼

使用 tmrow 的 C02 Signal API 來追蹤電力消耗，創建一個瀏覽器擴展，讓您可以直接在瀏覽器中獲得有關您所在地區電力消耗的提醒。使用這個即時的擴展可以幫助您根據這些資訊對您的活動作出判斷。

![擴展截圖](../../../../../5-browser-extension/extension-screenshot.png)

## 開始

您需要安裝 [npm](https://npmjs.com)。將此代碼的副本下載到您電腦中的一個資料夾。

安裝所有所需的套件：

```
npm install
```

使用 webpack 構建擴展

```
npm run build
```

要在 Edge 上安裝，請使用瀏覽器右上角的“三點”菜單找到擴展面板。從那裡選擇“加載未壓縮的擴展”來加載新的擴展。在提示時打開 'dist' 資料夾，擴展就會被加載。要使用此擴展，您需要一個 CO2 Signal API 的 API 密鑰（[在這裡通過電子郵件獲取](https://www.co2signal.com/) - 在該頁面的框中輸入您的電子郵件）以及對應於 [電力地圖](https://www.electricitymap.org/map) 的 [地區代碼](http://api.electricitymap.org/v3/zones)（例如，在波士頓，我使用 'US-NEISO'）。

![安裝](../../../../../5-browser-extension/install-on-edge.png)

當您在擴展介面中輸入 API 密鑰和地區代碼後，瀏覽器擴展欄中的彩色點應該會改變，以反映您所在地區的能源消耗，並為您提供有關適合進行高耗能活動的指標。這個“點”系統的概念靈感來自 [Energy Lollipop 擴展](https://energylollipop.com/)，該擴展用於加州的排放情況。

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。