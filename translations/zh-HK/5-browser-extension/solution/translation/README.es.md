# 瀏覽器擴展 Carbon Trigger：完整代碼

使用 tmrow 的 C02 信號 API 來追蹤電力使用情況，創建一個瀏覽器擴展，讓您可以直接在瀏覽器中獲得有關您所在地區電力消耗的提醒。使用這個即時的擴展可以幫助您根據這些資訊來決定您的活動。

![擴展截圖](../../../../../5-browser-extension/solution/start/extension-screenshot.png)

## 開始使用

您需要安裝 [npm](https://npmjs.com)。將此代碼的副本下載到您電腦中的一個資料夾。

安裝所有必要的套件：

```
npm install
```

使用 webpack 構建擴展：

```
npm run build
```

要在 Edge 中安裝，請使用瀏覽器右上角的「三點」菜單找到擴展面板。從那裡選擇「載入未封裝的擴展」來載入新的擴展。當系統提示時，打開「dist」資料夾，擴展就會被載入。要使用此擴展，您需要一個 CO2 Signal API 的 API 金鑰（[在這裡通過電子郵件獲取](https://www.co2signal.com/) - 在該頁面的框中輸入您的電子郵件）以及對應於 [電力地圖](https://www.electricitymap.org/map) 的 [地區代碼](http://api.electricitymap.org/v3/zones)（例如，在波士頓，我使用的是「US-NEISO」）。

![安裝中](../../../../../5-browser-extension/solution/start/install-on-edge.png)

一旦在擴展介面中輸入了 API 金鑰和地區代碼，瀏覽器擴展欄中的顏色點應該會改變，以反映您所在地區的能源使用情況，並為您提供有關高能耗活動是否適合的指標。這個「顏色點」系統的概念靈感來自 [Energy Lollipop 擴展](https://energylollipop.com/)，該擴展用於加州的排放情況。

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始語言的文件應被視為具權威性的來源。對於重要資訊，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。