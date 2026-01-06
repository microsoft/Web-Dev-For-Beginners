<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2026-01-06T13:01:24+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "hk"
}
-->
# HTML 練習作業：建立博客模型

## 學習目標

透過設計和編寫完整的博客首頁結構，應用你的 HTML 知識。這個實作作業將加強語意化 HTML 概念、無障礙最佳實踐以及專業的程式碼組織技能，這些都是你在整個網頁開發旅程中會使用到的。

**完成此作業後，你將能夠：**
- 練習在編碼前規劃網站佈局
- 適當應用語意化的 HTML 元素
- 創建無障礙且結構良好的標記
- 培養帶有註解和組織的專業編碼習慣

## 專案需求

### 第 1 部分：設計規劃（視覺模型）

**創建你的博客首頁視覺模型，內容包括：**
- 含網站標題和導覽的頁首
- 主要內容區域，至少有 2-3 篇博客文章預覽
- 側邊欄，包含額外資訊（關於區塊、最新文章、分類）
- 含聯絡資訊或連結的頁尾

**模型創建方式選項：**
- **手繪草圖**：使用紙張和鉛筆，然後拍照或掃描你的設計
- **數位工具**：Figma、Adobe XD、Canva、PowerPoint 或任何繪圖應用程式
- **線框工具**：Balsamiq、MockFlow 或類似線框軟體

**在你的模型區塊上標註** 你計畫使用的 HTML 元素（例如：「頁首 - `<header>`」、「博客文章 - `<article>`」）。

### 第 2 部分：HTML 元素規劃

**建立一個清單，將你的模型中每個區塊對應到特定的 HTML 元素：**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**必須包含的元素：**
你的 HTML 必須包含此列表中至少 10 個不同的語意元素：
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### 第 3 部分：HTML 實作

**依照以下標準編寫你的博客首頁：**

1. **文件結構**：包含適當的 DOCTYPE、html、head 和 body 元素
2. **語意標記**：依元素原始用途使用 HTML 元素
3. **無障礙設計**：圖片需附有適切的 alt 文字，連結文字需具意義
4. **程式碼品質**：使用一致縮排與有意義的註解
5. **內容**：包含真實的博客內容（可使用佔位文字）

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
- 你最有信心使用哪些 HTML 元素？
- 在規劃或編碼時遇到哪些挑戰？
- 語意化 HTML 如何幫助你組織內容？
- 下一個 HTML 專案你會做哪些不同的事情？

## 提交清單

**提交前，請確認你已完成：**
- [ ] 有標註 HTML 元素的視覺模型
- [ ] 完整且有正確文件結構的 HTML 檔案
- [ ] 使用至少 10 種不同的語意 HTML 元素且適當運用
- [ ] 有意義的註解解釋你的程式碼結構
- [ ] 合法的 HTML 語法（可在瀏覽器測試）
- [ ] 回答指示問題的反思文字

## 評分標準

| 評量標準 | 優秀 (4) | 精通 (3) | 發展中 (2) | 初學 (1) |
|----------|------------|------------|-------------|----------|
| **規劃與設計** | 詳細且標註完善的模型，顯示對佈局和 HTML 語意結構的清楚理解 | 清楚的模型，大部分區塊標註適當 | 基本模型，有部分標註，呈現一般理解 | 模型不完整或不清楚，缺乏適當區塊識別 |
| **語意 HTML 使用** | 適當使用 10 個以上語意元素，展現對 HTML 結構及無障礙深刻理解 | 正確使用 8-9 個語意元素，展現良好標記理解 | 使用 6-7 個語意元素，對適當使用有些混淆 | 使用少於 6 個元素，或語意元素誤用 |
| **程式碼品質與組織** | 程式碼組織優良，縮排正確，有完整註解與完美的 HTML 語法 | 組織良好，縮排適當，有幫助的註解且語法有效 | 大致組織，部分註解，少量語法問題 | 組織差，註解極少，多處語法錯誤 |
| **無障礙與最佳實務** | 無障礙設計優良，alt 文本具意義，標題階層適切，符合所有現代 HTML 最佳實務 | 無障礙功能良好，適當使用標題與 alt 文本，符合多數最佳實務 | 有些無障礙考量，基本 alt 文本與標題結構 | 無障礙功能有限，標題結構差，未遵循最佳實務 |
| **反思與學習** | 深刻且有見地的反思，展現對 HTML 概念的理解與學習過程的深入分析 | 良好的反思，展現對主要概念的理解與學習自覺 | 基本反思，對 HTML 概念或學習過程的見解有限 | 反思甚少或缺乏，對所學概念理解不足 |

## 學習資源

**重要參考資料：**
- [MDN HTML 元素參考](https://developer.mozilla.org/docs/Web/HTML/Element) - 完整的 HTML 元素指南
- [HTML5 語意元素](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - 理解語意標記
- [網頁無障礙指引](https://www.w3.org/WAI/WCAG21/quickref/) - 創造無障礙網頁內容
- [HTML 驗證器](https://validator.w3.org/) - 檢查你的 HTML 語法

**成功小撇步：**
- 編寫程式碼前先做好原型模型
- 使用瀏覽器開發者工具檢視 HTML 結構
- 在不同螢幕尺寸測試頁面（即使沒有 CSS）
- 大聲朗讀你的 HTML，檢查結構是否合邏輯
- 想想螢幕閱讀器如何解讀你的頁面結構

> 💡 **記得**：此作業專注於 HTML 結構與語意。無需擔心視覺樣式——那是 CSS 的工作！你的頁面可能看起來樸素，但應該結構良好且有意義。

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件乃使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 所翻譯。儘管我們力求準確，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要資訊，建議採用專業人工翻譯。對於因使用本翻譯而引起的任何誤解或錯誤詮釋，我們概不負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->