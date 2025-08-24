<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-23T23:53:42+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "tw"
}
-->
# 碳觸發瀏覽器擴充功能：完成的程式碼

使用 tmrow 的 C02 Signal API 來追蹤電力使用情況，並在瀏覽器中顯示您所在區域的電力使用量作為提醒。透過這個擴充功能，您可以根據這些資訊來判斷自己的活動。

![擴充功能截圖](../../../../../5-browser-extension/extension-screenshot.png)

## 開始使用

您需要先安裝 [npm](https://npmjs.com)。將此程式碼的副本下載到您電腦上的資料夾中。

安裝所有必要的套件。

```
npm install
```

使用 webpack 建置擴充功能。

```
npm run build
```

要在 Edge 中安裝，請在瀏覽器右上角的「三個點」選單中找到「擴充功能」面板。從那裡選擇「載入未封裝的擴充功能」，然後載入新的擴充功能。在提示中打開「dist」資料夾，擴充功能就會被載入。要使用此功能，您需要 CO2 Signal API 的 API 金鑰 ([透過電子郵件獲取](https://www.co2signal.com/) - 在該頁面的框中輸入您的電子郵件) 和 [Electricity Map](https://www.electricitymap.org/map) 對應的 [您所在區域的代碼](http://api.electricitymap.org/v3/zones) (例如，在波士頓使用 'US-NEISO')。

![安裝](../../../../../5-browser-extension/install-on-edge.png)

在擴充功能介面中輸入 API 金鑰和區域代碼後，瀏覽器擴充工具列中顯示的彩色圓點會根據您所在區域的能源使用情況進行變化，並提示您進行哪些活動是適合的。這個「圓點」系統的概念是受到加州排放量的 [Energy Lollipop 擴充功能](https://energylollipop.com/) 的啟發。

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。