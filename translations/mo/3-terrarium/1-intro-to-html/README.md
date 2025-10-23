<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-22T22:46:11+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "mo"
}
-->
# 玻璃花園專案第一部分：HTML入門

![HTML入門](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.mo.png)
> 繪圖筆記由 [Tomomi Imura](https://twitter.com/girlie_mac) 提供

HTML（超文本標記語言）是您曾經瀏覽過的每個網站的基礎。可以將HTML想像成網頁的骨架——它定義了內容的位置、組織方式以及每個部分的意義。雖然CSS稍後會用顏色和佈局來“裝飾”您的HTML，JavaScript則會通過互動性使其“活起來”，但HTML提供了使其他一切成為可能的基本結構。

在本課程中，您將為虛擬玻璃花園介面創建HTML結構。這個動手專案將教您基本的HTML概念，同時構建一些視覺上吸引人的內容。您將學習如何使用語義元素組織內容、處理圖片以及為互動式網頁應用程式建立基礎。

在本課程結束時，您將擁有一個工作中的HTML頁面，顯示有序排列的植物圖片，為下一課程中的樣式設置做好準備。不要擔心它一開始看起來很基本——在CSS添加視覺效果之前，HTML的作用就是如此。

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **觀看並學習**：查看這段有用的影片概述
> 
> [![HTML基礎影片](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## 設置您的專案

在我們深入HTML代碼之前，讓我們為您的玻璃花園專案設置一個合適的工作空間。從一開始就創建一個有組織的文件結構是一個重要的習慣，這將在您的網頁開發過程中對您大有幫助。

### 任務：創建您的專案結構

您將為您的玻璃花園專案創建一個專用文件夾並添加您的第一個HTML文件。以下是您可以使用的兩種方法：

**選項1：使用Visual Studio Code**
1. 打開Visual Studio Code
2. 點擊“File” → “Open Folder”或使用快捷鍵`Ctrl+K, Ctrl+O`（Windows/Linux）或`Cmd+K, Cmd+O`（Mac）
3. 創建一個名為`terrarium`的新文件夾並選擇它
4. 在Explorer面板中，點擊“New File”圖標
5. 將文件命名為`index.html`

![VS Code Explorer顯示新文件創建](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.mo.png)

**選項2：使用終端命令**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**這些命令的作用：**
- **創建**一個名為`terrarium`的新目錄作為您的專案文件夾
- **進入**terrarium目錄
- **創建**一個空的`index.html`文件
- **打開**該文件以便在Visual Studio Code中進行編輯

> 💡 **專業提示**：文件名`index.html`在網頁開發中具有特殊意義。當有人訪問網站時，瀏覽器會自動尋找`index.html`作為默認顯示的頁面。這意味著像`https://mysite.com/projects/`這樣的URL會自動從`projects`文件夾中提供`index.html`文件，而無需在URL中指定文件名。

## 理解HTML文件結構

每個HTML文件都遵循特定的結構，瀏覽器需要這些結構來正確理解和顯示內容。可以將這種結構想像成一封正式的信件——它有特定順序的必要元素，幫助接收者（在這裡是瀏覽器）正確處理內容。

讓我們從添加每個HTML文件所需的基本框架開始。

### DOCTYPE聲明和根元素

任何HTML文件的前兩行都是向瀏覽器介紹文件的“開場白”：

```html
<!DOCTYPE html>
<html></html>
```

**理解這段代碼的作用：**
- **聲明**文件類型為HTML5，使用`<!DOCTYPE html>`
- **創建**包含所有頁面內容的根`<html>`元素
- **建立**現代網頁標準以確保瀏覽器正確渲染
- **確保**在不同瀏覽器和設備上的一致顯示

> 💡 **VS Code提示**：在VS Code中將鼠標懸停在任何HTML標籤上，可以查看MDN Web Docs提供的有用信息，包括使用示例和瀏覽器兼容性細節。

> 📚 **了解更多**：DOCTYPE聲明可以防止瀏覽器進入“怪異模式”，該模式曾用於支持非常舊的網站。現代網頁開發使用簡單的`<!DOCTYPE html>`聲明來確保[符合標準的渲染](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)。

## 添加必要的文件元數據

HTML文件的`<head>`部分包含瀏覽器和搜索引擎需要的重要信息，但訪問者不會直接在頁面上看到這些信息。可以將其視為幫助您的網頁正常運行並在不同設備和平台上正確顯示的“幕後信息”。

這些元數據告訴瀏覽器如何顯示您的頁面、使用什麼字符編碼以及如何處理不同的屏幕尺寸——這些都是創建專業、可訪問網頁的必要條件。

### 任務：添加文件頭部

在您的開頭和結尾`<html>`標籤之間插入以下`<head>`部分：

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**分解每個元素的作用：**
- **設置**在瀏覽器標籤和搜索結果中顯示的頁面標題
- **指定**UTF-8字符編碼以便全球範圍內正確顯示文本
- **確保**與現代版本的Internet Explorer兼容
- **配置**響應式設計，通過設置視窗與設備寬度匹配
- **控制**初始縮放級別以自然大小顯示內容

> 🤔 **思考一下**：如果您設置了一個像這樣的視窗meta標籤：`<meta name="viewport" content="width=600">`會發生什麼？這將強制頁面始終保持600像素寬，破壞響應式設計！了解更多關於[正確的視窗配置](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag)。

## 建立文件主體

`<body>`元素包含網頁的所有可見內容——用戶將看到和交互的所有內容。雖然`<head>`部分向瀏覽器提供指令，但`<body>`部分包含實際內容：文本、圖片、按鈕以及創建用戶介面的其他元素。

讓我們添加主體結構並了解HTML標籤如何協同工作以創建有意義的內容。

### 理解HTML標籤結構

HTML使用成對的標籤來定義元素。大多數標籤都有像`<p>`這樣的開頭標籤和像`</p>`這樣的結尾標籤，中間包含內容：`<p>Hello, world!</p>`。這創建了一個包含文本“Hello, world!”的段落元素。

### 任務：添加主體元素

更新您的HTML文件以包含`<body>`元素：

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

**這個完整結構提供了以下內容：**
- **建立**基本的HTML5文件框架
- **包含**正確的元數據以便瀏覽器正確渲染
- **創建**一個空的主體以容納可見內容
- **遵循**現代網頁開發的最佳實踐

現在您已準備好添加玻璃花園的可見元素。我們將使用`<div>`元素作為容器來組織不同的內容部分，並使用`<img>`元素顯示植物圖片。

### 使用圖片和佈局容器

圖片在HTML中是特殊的，因為它們使用“自閉合”標籤。與`<p></p>`等包裹內容的元素不同，`<img>`標籤在標籤本身內包含所有必要信息，使用像`src`（圖片文件路徑）和`alt`（可訪問性）這樣的屬性。

在將圖片添加到HTML之前，您需要通過創建一個圖片文件夾並添加植物圖形來正確組織您的專案文件。

**首先，設置您的圖片：**
1. 在您的玻璃花園專案文件夾內創建一個名為`images`的文件夾
2. 從[解決方案文件夾](../../../../3-terrarium/solution/images)下載植物圖片（共14張植物圖片）
3. 將所有植物圖片複製到您的新`images`文件夾中

### 任務：創建植物展示佈局

現在在您的`<body></body>`標籤之間添加有序排列的植物圖片：

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.mo.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.mo.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.mo.png" />
		</div>
	</div>
</div>
```

**逐步解析此代碼的作用：**
- **創建**一個`id="page"`的主頁面容器以容納所有內容
- **建立**兩個列容器：`left-container`和`right-container`
- **組織**左列7個植物，右列7個植物
- **將**每個植物圖片包裹在`plant-holder`的div中以便單獨定位
- **應用**一致的類名以便在下一課程中進行CSS樣式設置
- **分配**唯一的ID給每個植物圖片以便稍後進行JavaScript交互
- **包含**指向圖片文件夾的正確文件路徑

> 🤔 **思考一下**：注意所有圖片目前都有相同的alt文字“plant”。這對於可訪問性來說並不理想。使用螢幕閱讀器的用戶會聽到“plant”重複14次，無法知道每張圖片顯示的是哪種植物。您能否為每張圖片想出更好、更具描述性的alt文字？

> 📝 **HTML元素類型**：`<div>`元素是“塊級”的，佔據整個寬度，而`<span>`元素是“內聯”的，只佔據必要的寬度。如果您將所有這些`<div>`標籤更改為`<span>`標籤，您認為會發生什麼？

添加此標記後，植物將出現在螢幕上，儘管它們看起來還不夠精緻——這就是下一課程中CSS的作用！目前，您已經擁有一個堅實的HTML基礎，可以正確地組織您的內容並遵循可訪問性最佳實踐。

## 使用語義HTML提升可訪問性

語義HTML意味著根據元素的意義和用途選擇HTML元素，而不僅僅是它們的外觀。當您使用語義標記時，您是在向瀏覽器、搜索引擎和像螢幕閱讀器這樣的輔助技術傳達內容的結構和意義。

這種方法使您的網站對於有障礙的用戶更具可訪性，並幫助搜索引擎更好地理解您的內容。這是現代網頁開發的一個基本原則，旨在為所有人創造更好的使用體驗。

### 添加語義頁面標題

讓我們為您的玻璃花園頁面添加一個合適的標題。在您的開頭`<body>`標籤之後插入以下行：

```html
<h1>My Terrarium</h1>
```

**語義標記的重要性：**
- **幫助**螢幕閱讀器導航和理解頁面結構
- **改善**搜索引擎優化（SEO），明確內容層次結構
- **增強**視障或認知障礙用戶的可訪性
- **創造**更好的跨所有設備和平台的用戶體驗
- **遵循**網頁標準和專業開發的最佳實踐

**語義與非語義選擇的示例：**

| 用途 | ✅ 語義選擇 | ❌ 非語義選擇 |
|------|------------|--------------|
| 主標題 | `<h1>標題</h1>` | `<div class="big-text">標題</div>` |
| 導航 | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| 按鈕 | `<button>點擊我</button>` | `<span onclick="...">點擊我</span>` |
| 文章內容 | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **觀看實際操作**：觀看[螢幕閱讀器如何與網頁互動](https://www.youtube.com/watch?v=OUDV1gqs9GA)，了解語義標記對可訪性的重要性。注意正確的HTML結構如何幫助用戶高效地導航。

## 創建玻璃花園容器

現在讓我們添加玻璃花園本身的HTML結構——植物最終將被放置的玻璃容器。這部分展示了一個重要概念：HTML提供結構，但如果沒有CSS樣式，這些元素尚未可見。

玻璃花園的標記使用了描述性的類名，這將使下一課程中的CSS樣式設置更加直觀和易於維護。

### 任務：添加玻璃花園結構

在最後的`</div>`標籤（頁面容器的閉合標籤之前）插入以下標記：

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

**理解這個玻璃花園結構：**
- **創建**一個具有唯一ID的主玻璃花園容器以便樣式設置
- **定義**每個視覺組件的單獨元素（頂部、牆壁、泥土、底部）
- **包含**用於玻璃反射效果的嵌套元素（光澤元素）
- **使用**清晰指示每個元素用途的描述性類名
- **準備**結構以便在下一課程中使用CSS樣式設置，創建玻璃花園外觀

> 🤔 **注意到什麼了嗎？**：即使您添加了此標記，頁面上也不會出現任何新內容！這完美地說明了HTML如何提供結構，而CSS則提供外觀。這些`<div>`元素已存在，但尚未有任何視覺樣式——這部分將在下一課程中完成！

---

## GitHub Copilot Agent 挑戰

使用Agent模式完成以下挑戰：

**描述：** 為可以添加到玻璃花園專案中的植物護理指南部分創建語義HTML結構。
**提示：** 建立一個語義化的 HTML 區段，包括主標題「植物護理指南」，三個子區段分別為「澆水」、「光照需求」和「土壤護理」，每個子區段包含一段植物護理資訊。使用適當的語義化 HTML 標籤，例如 `<section>`、`<h2>`、`<h3>` 和 `<p>` 來適當地結構化內容。

了解更多關於 [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)。

## 探索 HTML 歷史挑戰

**了解網頁演進**

自從 Tim Berners-Lee 在 1990 年於 CERN 創建第一個網頁瀏覽器以來，HTML 已經有了顯著的演進。一些較舊的標籤，例如 `<marquee>`，現在已被棄用，因為它們不符合現代的無障礙標準和響應式設計原則。

**試試這個實驗：**
1. 暫時將你的 `<h1>` 標題包裹在 `<marquee>` 標籤中：`<marquee><h1>我的小型植物園</h1></marquee>`
2. 在瀏覽器中打開你的頁面並觀察滾動效果
3. 思考為什麼這個標籤被棄用（提示：考慮用戶體驗和無障礙性）
4. 移除 `<marquee>` 標籤並返回語義化標記

**反思問題：**
- 滾動的標題可能如何影響視覺障礙或對運動敏感的用戶？
- 有哪些現代 CSS 技術可以更無障礙地實現類似的視覺效果？
- 為什麼使用當前的網頁標準而不是棄用的元素很重要？

探索更多關於 [過時和棄用的 HTML 元素](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements)，了解網頁標準如何演進以改善用戶體驗。

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/16)

## 回顧與自學

**深化你的 HTML 知識**

HTML 作為網頁的基礎已經超過 30 年，從一個簡單的文檔標記語言演變為構建互動式應用程序的複雜平台。了解這種演進有助於你更好地理解現代網頁標準並做出更好的開發決策。

**推薦學習路徑：**

1. **HTML 的歷史與演進**
   - 研究從 HTML 1.0 到 HTML5 的時間線
   - 探索為什麼某些標籤被棄用（無障礙性、移動友好性、可維護性）
   - 調查新興的 HTML 功能和提案

2. **語義化 HTML 深入探討**
   - 學習完整的 [HTML5 語義元素列表](https://developer.mozilla.org/docs/Web/HTML/Element)
   - 練習何時使用 `<article>`、`<section>`、`<aside>` 和 `<main>`
   - 了解用於增強無障礙性的 ARIA 屬性

3. **現代網頁開發**
   - 探索如何在 Microsoft Learn 上 [建立響應式網站](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon)
   - 理解 HTML 如何與 CSS 和 JavaScript 集成
   - 學習網頁性能和 SEO 的最佳實踐

**反思問題：**
- 你發現了哪些被棄用的 HTML 標籤？它們為什麼被移除？
- 有哪些新的 HTML 功能正在提議用於未來版本？
- 語義化 HTML 如何促進網頁的無障礙性和 SEO？

## 作業

[練習你的 HTML：建立一個部落格模型](assignment.md)

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。