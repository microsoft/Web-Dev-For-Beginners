# 瀏覽器擴充套件 Carbon Trigger：完成的程式碼

使用 tmrow 的 C02 Signal API 來追蹤電力消耗，創建一個瀏覽器擴充套件，讓您可以直接在瀏覽器中獲得您所在地區的電力消耗提醒。使用這個即時擴充套件可以幫助您根據這些資訊對您的活動做出判斷。

![擴充套件截圖](../../../../../translated_images/zh-MO/extension-screenshot.0e7f5bfa110e92e3.webp)

## 開始

您需要先安裝 [npm](https://npmjs.com)。將此程式碼的副本下載到您電腦中的一個資料夾。

安裝所有必要的套件：

```
npm install
```

使用 webpack 建置擴充套件

```
npm run build
```

要在 Edge 上安裝，請使用瀏覽器右上角的「三點」選單找到擴充套件面板。從那裡選擇「載入未壓縮的擴充套件」以載入新的擴充套件。在提示中打開 'dist' 資料夾，擴充套件就會被載入。要使用此擴充套件，您需要一個 CO2 Signal API 的 API 金鑰（[在此處透過電子郵件獲取](https://www.co2signal.com/) - 在該頁面上的框中輸入您的電子郵件）以及對應於 [電力地圖](https://www.electricitymap.org/map) 的 [地區代碼](http://api.electricitymap.org/v3/zones)（例如，在波士頓，我使用 'US-NEISO'）。

![安裝](../../../../../translated_images/zh-MO/install-on-edge.78634f02842c4828.webp)

當 API 金鑰和地區代碼輸入到擴充套件介面後，瀏覽器擴充套件欄中的彩色點應該會改變，以反映您所在地區的能源消耗，並為您提供指標，幫助您判斷是否適合進行耗能活動。這個「點」系統的概念是受到 [Energy Lollipop 擴充套件](https://energylollipop.com/) 的啟發，用於加州的排放量指標。

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。