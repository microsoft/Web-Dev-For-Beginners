<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-23T23:52:57+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "hk"
}
-->
# 碳觸發瀏覽器擴展：啟動代碼

我們將使用 tmrow 的 Signal C02 API 來監測電力使用情況，並創建一個瀏覽器擴展，讓您可以直接在瀏覽器中獲得提醒，了解所在地區的電力使用情況。使用這個專門的擴展可以幫助您根據這些信息評估自己的活動。

![擴展截圖](../../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

需要先安裝 [npm](https://npmjs.com)。將此代碼下載到電腦中的一個文件夾。

安裝所有所需的套件：

```
npm install
```

使用 webpack 創建擴展：

```
npm run build
```

要在 Edge 上安裝，請使用瀏覽器右上角的“三點”菜單找到擴展面板。如果尚未啟用，請啟用開發者模式（左下角）。選擇“載入未壓縮的擴展”以載入新的擴展。在提示中打開“dist”文件夾，擴展將被載入。要使用此擴展，您需要一個 CO2 Signal API 的 API 密鑰（您可以[通過電子郵件獲取](https://www.co2signal.com/) - 在該頁面的框中輸入您的電子郵件）以及對應於[電力地圖](https://www.electricitymap.org/map)的[地區代碼](http://api.electricitymap.org/v3/zones)（例如，在波士頓，代碼是“US-NEISO”）。

![安裝](../../../../../5-browser-extension/install-on-edge.png)

當 API 密鑰和地區代碼輸入到擴展界面後，瀏覽器擴展欄中的彩色點應該會改變，以反映該地區的能源使用情況，並提供指導，告訴您哪些高能耗活動適合執行。這個“點”系統的概念是基於[Energy Lollipop 擴展](https://energylollipop.com/)提供的加州排放數據。

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。