<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-23T23:50:20+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "hk"
}
-->
# Carbon Trigger 瀏覽器擴展：完成的代碼

使用 tmrow 的 C02 Signal API 追蹤電力使用情況，開發一個瀏覽器擴展，提醒您所在地區的電力使用情況是否繁重。使用此擴展可以幫助您根據這些資訊來決定自己的活動。

![擴展截圖](../../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

您需要安裝 [npm](https://npmjs.com)。將此代碼的副本下載到您的電腦中的一個資料夾。

安裝所有必要的套件：

```
npm install
```

使用 Webpack 建立擴展：

```
npm run build
```

要在 Edge 上安裝，請使用瀏覽器右上角的“三點”選單找到擴展面板。從那裡選擇“載入未封裝的擴展”，然後在提示中打開“dist”資料夾，擴展就會載入。要使用此擴展，您需要 CO2 Signal 的 API 金鑰（[通過電子郵件在此處獲取](https://www.co2signal.com/)——在該頁面的框中輸入您的電子郵件）以及 [您所在地區的代碼](http://api.electricitymap.org/v3/zones) [電力地圖](https://www.electricitymap.org/map)（例如，在波士頓，我使用 'US-NEISO'）。

![安裝](../../../../../5-browser-extension/install-on-edge.png)

一旦 API 金鑰和地區代碼輸入到擴展介面中，瀏覽器擴展欄中的彩色點應該會根據您所在地區的能源使用情況進行變化，並為您提供一個指標，告訴您哪些能源密集型活動適合您的操作。這個“點”系統的概念是我從加州排放的 [Energy Lollipop 擴展](https://energylollipop.com/) 中獲得的靈感。

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始語言的文件應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。