# 碳觸發瀏覽器擴展功能：完成的代碼

使用 tmrow 的 C02 Signal API 來追蹤電力使用情況，並在瀏覽器上顯示您所在地區的電力使用量作為提醒。透過這個瀏覽器擴展功能，您可以根據這些資訊來判斷自己的活動。

![擴展功能截圖](../../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

您需要先安裝 [npm](https://npmjs.com)。將此代碼的副本下載到您電腦上的資料夾中。

安裝所有必要的套件。

```
npm install
```

使用 webpack 來構建擴展功能。

```
npm run build
```

要在 Edge 中安裝，請在瀏覽器右上角的「三點」菜單中找到「擴展功能」面板。從那裡選擇「載入未打包的擴展功能」，然後載入新的擴展功能。在提示中打開「dist」資料夾，擴展功能就會被載入。要使用此功能，您需要 CO2 Signal API 的 API 金鑰 ([在此處通過電子郵件獲取](https://www.co2signal.com/) - 在該頁面的框中輸入您的電子郵件) 和 [Electricity Map](https://www.electricitymap.org/map) 對應的 [您所在地區的代碼](http://api.electricitymap.org/v3/zones) (例如，在波士頓使用 'US-NEISO')。

![安裝](../../../../../5-browser-extension/install-on-edge.png)

在擴展介面中輸入 API 金鑰和地區代碼後，瀏覽器擴展欄中的彩色圓點會根據您所在地區的能源使用情況進行變化，並提示您進行哪些活動是適合的。這個「圓點」系統的概念是受加州排放量的 [Energy Lollipop 擴展功能](https://energylollipop.com/) 啟發而來的。

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。