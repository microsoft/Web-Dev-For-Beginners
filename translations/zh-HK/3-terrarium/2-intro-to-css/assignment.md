# CSS 重構作業

## 目標

將你的玻璃花房項目轉換為使用現代 CSS 佈局技術！將目前的絕對定位方式重構為使用 **Flexbox** 或 **CSS Grid**，以實現更易於維護且響應式的設計。此作業挑戰你在保持玻璃花房視覺吸引力的同時，應用現代 CSS 標準。

理解什麼時候以及如何使用不同的佈局方法是現代網頁開發的重要技能。此練習將傳統定位技術與當代 CSS 佈局系統連接起來。

## 作業指示

### 第一階段：分析與規劃
1. **檢視你目前的玻璃花房程式碼**－找出哪些元素目前使用絕對定位
2. **選擇你的佈局方法**－決定 Flexbox 或 CSS Grid 哪個更適合你的設計目標
3. **繪製你的新佈局結構草圖**－規劃容器與植物元素如何被組織

### 第二階段：實作
1. **在另一個資料夾中建立你的玻璃花房新版本**
2. **依需要更新 HTML 結構**以支援你選擇的佈局方法
3. **重構 CSS**，用 Flexbox 或 CSS Grid 取代絕對定位
4. **保持視覺一致性**－確保植物和玻璃罐顯示於相同位置
5. **實作響應式行為**－你的佈局應能優雅地適應不同螢幕尺寸

### 第三階段：測試與文件撰寫
1. **跨瀏覽器測試**－確保你的設計在 Chrome、Firefox、Edge 及 Safari 中正常運作
2. **響應式測試**－在手機、平板及桌面尺寸上檢視佈局
3. **文件撰寫**－於 CSS 加入說明你的佈局選擇的註解
4. **截圖**－擷取不同瀏覽器與螢幕尺寸中你的玻璃花房畫面

## 技術規範

### 佈局實作
- **選擇其中一個**：實作 Flexbox 或 CSS Grid（相同元素不可兩者同時使用）
- **響應式設計**：使用相對單位（`rem`、`em`、`%`、`vw`、`vh`）替代固定像素
- **可及性**：保持適當的語義化 HTML 結構與替代文字 (alt)
- **程式碼品質**：使用一致命名規則且有條理地組織 CSS

### 要使用的現代 CSS 功能
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### 瀏覽器支援需求
- **Chrome/Edge**：最新兩個版本
- **Firefox**：最新兩個版本  
- **Safari**：最新兩個版本
- **行動瀏覽器**：iOS Safari, Chrome Mobile

## 交付項目

1. **更新過的 HTML 檔案**，結構更語義化
2. **重構後的 CSS 檔案**，使用現代佈局技術
3. **截圖集**，展示跨瀏覽器相容性：
   - 桌面版 (1920x1080)
   - 平板版 (768x1024) 
   - 手機版 (375x667)
   - 至少兩款不同瀏覽器
4. **README.md 文件**，記錄：
   - 你的佈局選擇（Flexbox 還是 Grid）及其理由
   - 重構過程中面臨的挑戰
   - 瀏覽器相容性說明
   - 執行程式碼的說明

## 評分標準

| 評分項目 | 優異 (4) | 精通 (3) | 發展中 (2) | 初學 (1) |
|----------|----------|----------|------------|----------|
| **佈局實作** | 熟練使用 Flexbox/Grid 進階功能；完全響應式 | 正確實作並具有良好響應式行為 | 基本實作，有輕微響應式問題 | 佈局實作不完整或錯誤 |
| **程式碼品質** | 乾淨、條理分明的 CSS，具意義的註解與一致命名 | 良好組織並附有部分註解 | 適當組織，註解較少 | 組織差，難以理解 |
| **跨瀏覽器相容性** | 在所有要求瀏覽器中完美一致，附截圖 | 良好相容，少量差異並有記錄 | 部分相容問題但不影響功能 | 重大相容問題或缺少測試 |
| **響應式設計** | 優秀的 mobile-first 策略，切換點順暢 | 良好響應性，切換點適當 | 基本響應功能，佈局有些問題 | 響應性有限或失效 |
| **文件撰寫** | 詳盡的 README，含充分解釋與見解 | 良好文件，涵蓋所有必需項目 | 基本文件，解釋不足 | 文件不完整或缺失 |

## 參考資源

### 佈局方法指南
- 📖 [Flexbox 完整指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [CSS Grid 完整指南](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - 選擇正確工具](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### 瀏覽器測試工具
- 🛠️ [瀏覽器開發者工具響應模式](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - 功能支援](https://caniuse.com/)
- 🛠️ [BrowserStack - 跨瀏覽器測試](https://www.browserstack.com/)

### 程式碼品質工具
- ✅ [CSS 驗證器](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML 驗證器](https://validator.w3.org/)
- ✅ [WebAIM 對比度檢查器](https://webaim.org/resources/contrastchecker/)

## 額外挑戰

🌟 **進階佈局**：於設計不同部分同時實作 Flexbox 和 Grid  
🌟 **動畫整合**：加入搭配新佈局的 CSS 過渡或動畫  
🌟 **暗黑模式**：實作基於 CSS 自訂屬性的主題切換器  
🌟 **容器查詢**：使用現代容器查詢技巧以達元件級響應式

> 💡 **記住**：目標不只是讓它能用，而是理解為何你選擇的佈局方法是這個設計挑戰的最佳解決方案！

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件經由 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意自動翻譯結果可能包含錯誤或不準確之處。原始文件的母語版本應被視為具權威性的來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用此翻譯而產生的任何誤解或誤釋承擔責任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->