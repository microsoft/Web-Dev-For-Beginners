<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-25T23:55:43+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "mo"
}
-->
# Carbon Trigger 瀏覽器擴充功能：完整代碼

使用 tmrow 的 CO2 Signal API 來監測電力使用情況，建立一個瀏覽器擴充功能，讓您能在瀏覽器中收到關於您所在區域電力使用情況的提醒。使用這個擴充功能可以幫助您根據這些資訊來調整您的活動。

![瀏覽器擴充功能截圖](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.mo.png)

## 從這裡開始

您需要安裝 [npm](https://npmjs.com)。將此代碼的副本下載到您電腦上的資料夾。

安裝所有必要的套件：

```
npm install
```

使用 webpack 建立擴充功能：

```
npm run build
```

要在 Edge 瀏覽器中安裝，請使用瀏覽器右上角的「三點」選單找到擴充功能面板。從那裡選擇「載入未封裝」以載入新的擴充功能。根據提示打開 'dist' 資料夾，擴充功能就會被載入。要使用它，您需要一個 CO2 Signal API 的 API 金鑰（[在這裡透過電子郵件獲取](https://www.co2signal.com/) - 在頁面上的框中輸入您的電子郵件）以及 [您的區域代碼](http://api.electricitymap.org/v3/zones)，該代碼與 [電力地圖](https://www.electricitymap.org/map) 相符（例如，在波士頓，我使用 'US-NEISO'）。

![正在下載](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.mo.png)

當您將 API 金鑰和區域代碼輸入到擴充功能介面後，瀏覽器擴充功能列上的彩色點將會改變，以反映您所在區域的能源使用情況，並提供您適合進行的活動建議。這個「點」系統的概念是受到 [Energy Lollipop 瀏覽器擴充功能](https://energylollipop.com/) 的啟發，該擴充功能專為加州的排放量設計。

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。