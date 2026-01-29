# CSS 重構作業

## 目標

將你的生態瓶專案轉換成使用現代 CSS 版面配置技術！將目前的絕對定位方式重構為使用**Flexbox** 或 **CSS Grid**，以實現更易維護、響應式的設計。本次作業挑戰你在保持生態瓶視覺吸引力的同時，運用現代 CSS 標準。

了解何時以及如何使用不同版面配置方法是現代網頁開發的重要技能。此練習橋接了傳統定位技術與當代 CSS 版面系統。

## 作業說明

### 第一階段：分析與規劃
1. **檢視目前的生態瓶程式碼** — 確認哪些元素目前使用絕對定位
2. **選擇版面配置方法** — 決定 Flexbox 或 CSS Grid 哪個更適合你的設計目標
3. **繪製新版面結構** — 規劃容器與植物元素如何組織

### 第二階段：實作
1. **在獨立資料夾建立新版本** 的生態瓶專案
2. **根據需求更新 HTML 結構**，以支援你選擇的版面配置方法
3. **重構 CSS**，改用 Flexbox 或 CSS Grid，替代絕對定位
4. **維持視覺一致性** — 確保植物與生態瓶罐位於相同位置
5. **實作響應式行為** — 版面配置應能優雅適應不同螢幕尺寸

### 第三階段：測試與文件撰寫
1. **跨瀏覽器測試** — 確認設計在 Chrome、Firefox、Edge 與 Safari 表現正常
2. **響應式測試** — 檢視設計在手機、平板與桌面大小螢幕上的效果
3. **文件註解** — 在 CSS 加入註解，說明版面配置選擇
4. **截圖** — 捕捉生態瓶於不同瀏覽器與螢幕尺寸的畫面

## 技術需求

### 版面配置實作
- **擇一實作**：Flexbox 或 CSS Grid（同一元素不可同時用兩者）
- **響應式設計**：使用相對單位（`rem`、`em`、`%`、`vw`、`vh`），取代固定像素
- **可及性**：保持正確語意化 HTML 結構及替代文字
- **程式碼品質**：命名一致且 CSS 結構邏輯清晰

### 現代 CSS 功能須包含
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
- **Chrome/Edge**：最新 2 個版本
- **Firefox**：最新 2 個版本  
- **Safari**：最新 2 個版本
- **行動瀏覽器**：iOS Safari、Chrome Mobile

## 交付項目

1. **更新後的 HTML 檔案**，增強語意結構
2. **重構後的 CSS 檔案**，採用現代版面配置技術
3. **截圖集**，展示跨瀏覽器相容性：
   - 桌面視角（1920x1080）
   - 平板視角（768x1024） 
   - 行動視角（375x667）
   - 至少兩種不同瀏覽器
4. **README.md 檔案**，記錄：
   - 你的版面配置選擇（Flexbox 與 Grid）及其原因
   - 重構時遇到的挑戰
   - 瀏覽器相容性說明
   - 執行程式碼的指引

## 評分標準

| 評分項目 | 優秀 (4) | 合格 (3) | 進步中 (2) | 初學 (1) |
|----------|----------|----------|------------|----------|
| **版面配置實作** | 精通使用 Flexbox/Grid 與進階功能；完全響應式 | 正確實作並具良好響應式行為 | 基本實作，響應式有小問題 | 版面配置不完整或錯誤 |
| **程式碼品質** | CSS 清晰、組織良好、有意義註解及一致命名 | 組織良好，包含部分註解 | 組織尚可，有少量註解 | 組織混亂，不易理解 |
| **跨瀏覽器相容性** | 各必要瀏覽器完全一致並附截圖 | 兼容性良好，有少部分差異並記錄 | 有兼容性問題但不影響功能 | 重大相容性問題或缺少測試 |
| **響應式設計** | 優異的行動優先設計，斷點流暢 | 反應良好，斷點適中 | 基本響應功能，有版面問題 | 響應式有限或失效 |
| **文件說明** | 完整 README，含詳細說明與見解 | 良好文件，涵蓋所有需求 | 基本文件，說明不足 | 文件不完整或遺漏 |

## 有用資源

### 版面配置導引
- 📖 [Flexbox 完整指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [CSS Grid 完整指南](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid — 選擇正確工具](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### 瀏覽器測試工具
- 🛠️ [瀏覽器開發工具響應模式](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - 功能支援](https://caniuse.com/)
- 🛠️ [BrowserStack - 跨瀏覽器測試](https://www.browserstack.com/)

### 程式碼品質工具
- ✅ [CSS 驗證器](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML 驗證器](https://validator.w3.org/)
- ✅ [WebAIM 對比檢查器](https://webaim.org/resources/contrastchecker/)

## 額外挑戰

🌟 **進階版面配置**：在設計中不同區塊同時使用 Flexbox 和 Grid  
🌟 **動畫整合**：加入與新版面配置配合的 CSS 過渡或動畫  
🌟 **暗黑模式**：實作基於 CSS 自訂屬性的主題切換  
🌟 **容器查詢**：運用現代容器查詢技術實現組件級響應

> 💡 **記住**：目標不只是讓它能運作，而是理解為何你選擇的版面配置方法是該設計挑戰的最佳解決方案！

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件係使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們力求準確，但請注意，自動翻譯可能包含錯誤或不精確之處。原始文件之母語版本應被視為權威來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用本翻譯而產生的任何誤解或誤釋負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->