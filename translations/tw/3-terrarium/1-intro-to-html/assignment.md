<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2026-01-06T14:13:31+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "tw"
}
-->
# HTML 練習作業：建立部落格模型

## 學習目標

運用 HTML 知識設計並編碼完整的部落格首頁結構。此實作作業將強化語意化 HTML 概念、無障礙最佳實務以及專業程式碼組織技巧，這些技能將伴隨你在網頁開發旅程中持續使用。

**完成此作業，你將能：**
- 練習在編碼前規劃網站版面配置
- 適當運用語意化 HTML 元素
- 建立可無障礙使用且結構良好的標記
- 養成以評論和組織維護專業程式碼的習慣

## 專案需求

### 第 1 部分：設計規劃（視覺模型）

**建立一個部落格首頁的視覺模型，包括：**
- 含網站標題和導覽列的頁首
- 主要內容區，至少包含 2-3 篇部落格文章預覽
- 側欄，展示附加資訊（關於區段、最新文章、分類）
- 頁尾，含聯絡資訊或連結

**製作模型的選項：**
- **手繪草圖**：使用紙筆繪製，再拍照或掃描你的設計
- **數位工具**：Figma、Adobe XD、Canva、PowerPoint，或任何繪圖應用程式
- **線框工具**：Balsamiq、MockFlow 或類似線框軟體

**在模型上標註各區段**預計會使用的 HTML 元素（例如「頁首 - `<header>`」、「部落格文章 - `<article>`」）。

### 第 2 部分：HTML 元素規劃

**建立一份清單，將模型的每個區段對應到具體的 HTML 元素：**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**必須包含的元素：**
HTML 中至少需包含下列清單中的 10 種不同語意元素：
- `<header>`、`<nav>`、`<main>`、`<article>`、`<section>`、`<aside>`、`<footer>`
- `<h1>`、`<h2>`、`<h3>`、`<p>`、`<ul>`、`<li>`、`<a>`
- `<img>`、`<time>`、`<blockquote>`、`<strong>`、`<em>`

### 第 3 部分：HTML 實作

**依照以下標準編碼你的部落格首頁：**

1. **文件結構**：包含適當的 DOCTYPE、html、head、body 元素
2. **語意化標記**：依元素用途使用 HTML
3. **無障礙設計**：圖片含適當的替代文字，連結文字具意義
4. **程式碼品質**：使用一致縮排與有意義註解
5. **內容**：包含真實感的部落格內容（可使用預置文字）

**範例 HTML 結構：**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### 第 4 部分：反思

**撰寫簡短反思（3-5 句）說明：**
- 哪些 HTML 元素是你最有信心使用的？
- 在規劃或編碼過程中遇到什麼挑戰？
- 語意化 HTML 如何協助你組織內容？
- 下一次 HTML 專案會有哪些不同的做法？

## 提交檢查清單

**提交前請確定你已完成：**
- [ ] 含標註 HTML 元素的視覺模型
- [ ] 完整 HTML 檔案，含適當文件結構
- [ ] 適當運用至少 10 種不同語意化 HTML 元素
- [ ] 有意義的評論說明程式碼結構
- [ ] 有效的 HTML 語法（請於瀏覽器測試）
- [ ] 回答題目要求的書面反思

## 評量準則

| 評量項目 | 優異 (4) | 良好 (3) | 進行中 (2) | 初學 (1) |
|----------|-----------|-----------|------------|---------|
| **規劃與設計** | 詳盡且標注良好的模型，清楚展現版面及語意結構理解 | 清楚的模型，多數區塊標註適當 | 基本模型並有部分標註，呈現大致理解 | 模型極少或不清楚，缺少區塊識別 |
| **語意化 HTML 使用** | 適切使用 10 種以上語意元素，展現深刻 HTML 與可及性理解 | 正確使用 8-9 種語意元素，具良好語意標記認識 | 使用 6-7 種語意元素，部分混淆用法 | 運用少於 6 種或誤用語意元素 |
| **程式碼品質與組織** | 程式碼極為整齊，縮排恰當，含完整註解，HTML 語法完美 | 程式碼整齊，縮排良好，有助於閱讀的註解，語法有效 | 大致有組織，偶有註解，語法小錯誤 | 整理不佳、註解很少，語法錯誤多 |
| **無障礙性與最佳實務** | 無障礙設計優異，替代文字清楚，標題階層合理，遵循所有現代最佳實務 | 無障礙功能良好，標題及替代文字適當，遵守多數最佳實務 | 有考慮無障礙性，替代文字與標題結構基本 | 無障礙功能不足，標題結構差，未遵循最佳實務 |
| **反思與學習** | 反思深刻，展現 HTML 概念的透徹理解及學習過程的細膩分析 | 反思良好，顯示關鍵概念理解及自我覺察 | 反思基本，對 HTML 概念或學習過程的見解有限 | 反思匱乏或缺少，對學到的概念了解不深 |

## 學習資源

**重要參考資料：**
- [MDN HTML 元素參考](https://developer.mozilla.org/docs/Web/HTML/Element) - 完整 HTML 元素指南
- [HTML5 語意元素](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - 理解語意標記
- [網頁無障礙準則](https://www.w3.org/WAI/WCAG21/quickref/) - 創建無障礙網頁內容
- [HTML 驗證器](https://validator.w3.org/) - 檢查 HTML 語法

**成功秘訣：**
- 在撰寫程式碼之前先從模型開始
- 使用瀏覽器的開發者工具檢視 HTML 結構
- 測試不同螢幕尺寸（即使沒有 CSS）
- 大聲朗讀你的 HTML，確認結構是否合邏輯
- 考慮螢幕閱讀器將如何解讀頁面結構

> 💡 **提醒**：此作業重點在 HTML 結構與語意。別擔心視覺樣式 - 那是 CSS 的工作！你的頁面可能看起來簡單，但應具良好結構與語意。

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：
本文件係使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意，機器自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要資訊，建議採用專業人工翻譯。本公司不對因使用本翻譯而產生的任何誤解或誤譯負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->