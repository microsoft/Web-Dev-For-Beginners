<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-25T23:26:14+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "mo"
}
-->
# 建立瀏覽器擴充功能

建立瀏覽器擴充功能是一種有趣且引人入勝的方式，可以在開發不同類型的網頁資產時思考應用程式的效能。本模組包含有關瀏覽器運作方式以及如何部署瀏覽器擴充功能的課程，還有如何建立表單、呼叫 API、使用本地存儲，以及如何評估網站效能並加以改進。

您將建立一個可在 Edge、Chrome 和 Firefox 上運作的瀏覽器擴充功能。這個擴充功能類似於一個專門針對特定任務的小型網站，它會檢查 [C02 Signal API](https://www.co2signal.com) 以了解指定地區的電力使用情況和碳強度，並返回該地區的碳足跡讀數。

使用者可以在輸入 API 金鑰和地區代碼到表單後，隨時調用此擴充功能，以確定本地電力使用情況，從而提供數據來影響使用者的電力決策。例如，在您所在地區電力使用量高的時段，可能更適合延遲使用衣物烘乾機（這是一項碳密集型活動）。

### 主題

1. [關於瀏覽器](1-about-browsers/README.md)
2. [表單與本地存儲](2-forms-browsers-local-storage/README.md)
3. [背景任務與效能](3-background-tasks-and-performance/README.md)

### 致謝

![一個綠色的瀏覽器擴充功能](../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.mo.png)

## 致謝

這個網頁碳觸發器的想法由 Asim Hussain 提供，他是 Microsoft 的綠色雲端倡導團隊的負責人，也是 [Green Principles](https://principles.green/) 的作者。最初它是一個 [網站專案](https://github.com/jlooper/green)。

瀏覽器擴充功能的結構受到 [Adebola Adeniran 的 COVID 擴充功能](https://github.com/onedebos/covtension) 的啟發。

「點」圖示系統的概念則受到 [Energy Lollipop](https://energylollipop.com/) 瀏覽器擴充功能中加州排放圖示結構的啟發。

這些課程由 [Jen Looper](https://www.twitter.com/jenlooper) 用 ♥️ 編寫。

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。