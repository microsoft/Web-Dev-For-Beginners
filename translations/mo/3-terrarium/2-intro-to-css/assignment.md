<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bee6762d4092a13fc7c338814963f980",
  "translation_date": "2025-10-22T22:45:57+00:00",
  "source_file": "3-terrarium/2-intro-to-css/assignment.md",
  "language_code": "mo"
}
-->
# CSS重構作業

## 目標

將你的玻璃花園專案轉換為使用現代CSS佈局技術！重構目前的絕對定位方式，改用**Flexbox**或**CSS Grid**，以實現更易於維護且具響應式的設計。本次作業旨在挑戰你運用現代CSS標準，同時保持玻璃花園的視覺吸引力。

了解何時以及如何使用不同的佈局方法是現代網頁開發的重要技能。本次練習將傳統定位技術與當代CSS佈局系統相結合。

## 作業指導

### 第一階段：分析與規劃
1. **檢視你目前的玻璃花園程式碼** - 找出目前使用絕對定位的元素
2. **選擇佈局方法** - 決定Flexbox或CSS Grid更適合你的設計目標
3. **繪製新的佈局結構草圖** - 規劃容器和植物元素的組織方式

### 第二階段：實施
1. **在單獨的資料夾中建立新版本**的玻璃花園專案
2. **根據需要更新HTML結構**以支援你選擇的佈局方法
3. **重構CSS**，改用Flexbox或CSS Grid取代絕對定位
4. **保持視覺一致性** - 確保植物和玻璃花園罐的位置保持不變
5. **實現響應式行為** - 你的佈局應能在不同螢幕尺寸下優雅地適應

### 第三階段：測試與文件撰寫
1. **跨瀏覽器測試** - 確保你的設計在Chrome、Firefox、Edge和Safari中正常運作
2. **響應式測試** - 在手機、平板和桌面螢幕尺寸上檢查你的佈局
3. **文件撰寫** - 在CSS中添加註解，解釋你的佈局選擇
4. **截圖** - 捕捉你的玻璃花園在不同瀏覽器和螢幕尺寸下的效果

## 技術要求

### 佈局實施
- **選擇一種方法**：僅使用Flexbox或CSS Grid（同一元素不可同時使用兩者）
- **響應式設計**：使用相對單位（`rem`、`em`、`%`、`vw`、`vh`），避免使用固定像素
- **無障礙性**：保持正確的語義HTML結構和替代文字
- **程式碼品質**：使用一致的命名規範並有條理地組織CSS

### 包含的現代CSS功能
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

### 瀏覽器支援要求
- **Chrome/Edge**：最新2個版本
- **Firefox**：最新2個版本  
- **Safari**：最新2個版本
- **行動瀏覽器**：iOS Safari、Chrome Mobile

## 交付內容

1. **更新的HTML檔案**，具有改進的語義結構
2. **重構的CSS檔案**，使用現代佈局技術
3. **截圖集**，顯示跨瀏覽器的相容性：
   - 桌面視圖（1920x1080）
   - 平板視圖（768x1024） 
   - 手機視圖（375x667）
   - 至少2個不同的瀏覽器
4. **README.md檔案**，記錄：
   - 你的佈局選擇（Flexbox或Grid）及其理由
   - 重構過程中遇到的挑戰
   - 瀏覽器相容性說明
   - 執行程式的指導

## 評估標準

| 評估標準 | 卓越 (4) | 熟練 (3) | 發展中 (2) | 初學 (1) |
|----------|----------|----------|----------|----------|
| **佈局實施** | 熟練運用Flexbox/Grid，包含進階功能；完全響應式 | 正確實施，響應式表現良好 | 基本實施，存在小的響應式問題 | 佈局實施不完整或不正確 |
| **程式碼品質** | 乾淨、有條理的CSS，包含有意義的註解和一致的命名 | 組織良好，包含部分註解 | 組織尚可，註解較少 | 組織混亂，難以理解 |
| **跨瀏覽器相容性** | 在所有要求的瀏覽器中完全一致，附有截圖 | 相容性良好，記錄了小的差異 | 存在一些相容性問題，但不影響功能 | 主要相容性問題或缺乏測試 |
| **響應式設計** | 出色的以行動裝置優先的設計，斷點平滑 | 響應式表現良好，斷點適當 | 基本響應式功能，存在一些佈局問題 | 限制或響應式表現不佳 |
| **文件撰寫** | 詳盡的README，包含詳細解釋和見解 | 良好的文件，涵蓋所有必要元素 | 基本文件，解釋有限 | 文件不完整或缺失 |

## 有用資源

### 佈局方法指南
- 📖 [Flexbox完整指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [CSS Grid完整指南](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - 選擇合適的工具](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### 瀏覽器測試工具
- 🛠️ [瀏覽器開發工具響應模式](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - 功能支援](https://caniuse.com/)
- 🛠️ [BrowserStack - 跨瀏覽器測試](https://www.browserstack.com/)

### 程式碼品質工具
- ✅ [CSS驗證器](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML驗證器](https://validator.w3.org/)
- ✅ [WebAIM對比檢查器](https://webaim.org/resources/contrastchecker/)

## 額外挑戰

🌟 **進階佈局**：在設計的不同部分同時實施Flexbox和Grid  
🌟 **動畫整合**：添加與新佈局相配的CSS過渡或動畫  
🌟 **深色模式**：實施基於CSS自訂屬性的主題切換功能  
🌟 **容器查詢**：使用現代容器查詢技術實現元件級響應式設計  

> 💡 **請記住**：目標不僅僅是讓它運作，而是要理解為什麼你選擇的佈局方法是解決此特定設計挑戰的最佳方案！

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。