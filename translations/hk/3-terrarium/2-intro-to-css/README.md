<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e375c2aeb94e2407f2667633d39580bd",
  "translation_date": "2025-08-23T22:33:08+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "hk"
}
-->
# 微型生態瓶項目第二部分：CSS簡介

![CSS簡介](../../../../sketchnotes/webdev101-css.png)
> [Tomomi Imura](https://twitter.com/girlie_mac) 的手繪筆記

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/17)

### 簡介

CSS，全名為層疊樣式表（Cascading Style Sheets），解決了網頁開發中的一個重要問題：如何讓您的網站看起來更美觀。為應用程式設計樣式不僅能提升其可用性和外觀，還可以使用 CSS 創建響應式網頁設計（Responsive Web Design，RWD），使您的應用程式在任何螢幕尺寸下都能保持良好的顯示效果。CSS 不僅僅是讓您的應用程式看起來更漂亮，它的規範還包括動畫和變換功能，能為您的應用程式提供更複雜的互動效果。CSS 工作組負責維護最新的 CSS 規範，您可以在 [World Wide Web Consortium 的網站](https://www.w3.org/Style/CSS/members)上關注他們的工作。

> 注意，CSS 是一種不斷演進的語言，就像網路上的所有事物一樣，並非所有瀏覽器都支援最新的規範部分。請隨時透過 [CanIUse.com](https://caniuse.com) 檢查您的實現。

在本課中，我們將為線上微型生態瓶添加樣式，並深入了解幾個 CSS 概念：層疊、繼承，以及選擇器的使用、定位和使用 CSS 建立佈局。在此過程中，我們將設計微型生態瓶的佈局並創建實際的生態瓶。

### 先決條件

您應該已經建立好微型生態瓶的 HTML，並準備好進行樣式設計。

> 查看影片

> 
> [![Git 和 GitHub 基礎影片](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### 任務

在您的微型生態瓶資料夾中，創建一個名為 `style.css` 的新檔案。將該檔案匯入到 `<head>` 部分：

```html
<link rel="stylesheet" href="./style.css" />
```

---

## 層疊

層疊樣式表包含樣式“層疊”的概念，即樣式的應用是由其優先級決定的。由網站作者設定的樣式優先於瀏覽器設定的樣式。內聯樣式的優先級高於外部樣式表中的樣式。

### 任務

為您的 `<h1>` 標籤添加內聯樣式 "color: red"：

```HTML
<h1 style="color: red">My Terrarium</h1>
```

然後，將以下程式碼添加到您的 `style.css` 檔案中：

```CSS
h1 {
 color: blue;
}
```

✅ 您的網頁應用程式中顯示了哪種顏色？為什麼？您能找到覆蓋樣式的方法嗎？什麼情況下您會希望這樣做，或者不希望這樣做？

---

## 繼承

樣式是從祖先樣式繼承到後代的，嵌套元素會繼承其父元素的樣式。

### 任務

將 body 的字體設置為指定字體，並檢查嵌套元素的字體：

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

打開瀏覽器的控制台，進入“元素”標籤，觀察 H1 的字體。它繼承了 body 的字體，如瀏覽器所示：

![繼承的字體](../../../../3-terrarium/2-intro-to-css/images/1.png)

✅ 您能否讓嵌套樣式繼承不同的屬性？

---

## CSS 選擇器

### 標籤

到目前為止，您的 `style.css` 檔案只設置了少量標籤樣式，應用程式看起來有點奇怪：

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

這種設置標籤樣式的方法使您可以控制獨特的元素，但您需要控制微型生態瓶中許多植物的樣式。為此，您需要利用 CSS 選擇器。

### Ids

為左側和右側容器添加一些樣式。由於標記中只有一個左側容器和一個右側容器，因此它們被賦予 id。要設置它們的樣式，使用 `#`：

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

在這裡，您使用絕對定位將這些容器放置在螢幕的最左側和最右側，並使用百分比設置它們的寬度，以便它們可以適應小型行動裝置螢幕。

✅ 此程式碼重複性較高，因此不符合“DRY”（Don't Repeat Yourself）的原則；您能否找到更好的方法來設置這些 id 的樣式，例如使用 id 和 class 的組合？您需要更改標記並重構 CSS：

```html
<div id="left-container" class="container"></div>
```

### Classes

在上述示例中，您設置了螢幕上的兩個獨特元素的樣式。如果您希望樣式應用於螢幕上的多個元素，可以使用 CSS 類別。為左側和右側容器中的植物設置樣式。

注意，HTML 標記中的每個植物都有 id 和 class 的組合。這裡的 id 是供您稍後添加的 JavaScript 使用，以操作微型生態瓶中的植物位置。而 class 則為所有植物提供了統一的樣式。

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

將以下內容添加到您的 `style.css` 檔案中：

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

此程式碼片段中值得注意的是相對定位和絕對定位的混合，我們將在下一節中進一步探討。請查看高度如何通過百分比處理：

您將植物容器的高度設置為 13%，這是一個不錯的數值，確保所有植物都能顯示在每個垂直容器中，而無需滾動。

您將植物容器向左移動，使植物在其容器中更居中。圖片有大量透明背景，以便使它們更易於拖動，因此需要向左移動以更好地適應螢幕。

然後，植物本身的最大寬度設置為 150%。這使得它能隨瀏覽器縮小而縮小。嘗試調整瀏覽器大小，植物會保持在其容器中，但縮小以適應。

另一個值得注意的是 z-index 的使用，它控制元素的相對高度（使植物位於容器之上，看起來像是放置在微型生態瓶內）。

✅ 為什麼需要同時使用植物容器和植物的 CSS 選擇器？

## CSS 定位

混合使用定位屬性（包括 static、relative、fixed、absolute 和 sticky 定位）可能有點棘手，但如果使用得當，則可以很好地控制頁面上的元素。

絕對定位的元素是相對於其最近的定位祖先進行定位的，如果沒有定位祖先，則相對於文件的 body 進行定位。

相對定位的元素是根據 CSS 的指示，從其初始位置調整其位置。

在我們的示例中，`plant-holder` 是一個相對定位的元素，位於一個絕對定位的容器內。其結果是側邊欄容器固定在左側和右側，而 plant-holder 則嵌套在側邊欄內，調整自身位置以在側邊欄內垂直排列植物。

> `plant` 本身也具有絕對定位，這是使其可拖動所必需的，您將在下一課中了解更多。

✅ 嘗試切換側邊容器和 plant-holder 的定位類型。會發生什麼？

## CSS 佈局

現在，您將使用所學知識完全使用 CSS 建立微型生態瓶！

首先，使用 CSS 將 `.terrarium` div 子元素設置為圓角矩形：

```CSS
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

注意此處使用的百分比。如果您縮小瀏覽器，您可以看到瓶子也會縮小。還請注意瓶子元素的寬度和高度百分比，以及每個元素如何絕對定位在中心，固定在視窗底部。

我們還使用了 `rem` 作為邊框半徑的單位，這是一種相對於字體的長度。可以在 [CSS 規範](https://www.w3.org/TR/css-values-3/#font-relative-lengths) 中了解更多關於這種相對測量的方法。

✅ 嘗試更改瓶子顏色和透明度與泥土的顏色和透明度。會發生什麼？為什麼？

---

## 🚀挑戰

在瓶子的左下角添加一個“氣泡”光澤，使其看起來更像玻璃。您將設置 `.jar-glossy-long` 和 `.jar-glossy-short` 的樣式，使其看起來像反射的光澤。完成後效果如下：

![完成的微型生態瓶](../../../../3-terrarium/2-intro-to-css/images/terrarium-final.png)

要完成課後測驗，請通過以下 Learn 模組：[使用 CSS 為 HTML 應用程式設置樣式](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/18)

## 回顧與自學

CSS 看似簡單，但在嘗試為所有瀏覽器和所有螢幕尺寸完美設計應用程式時，會遇到許多挑戰。CSS-Grid 和 Flexbox 是為使工作更結構化、更可靠而開發的工具。通過玩 [Flexbox Froggy](https://flexboxfroggy.com/) 和 [Grid Garden](https://codepip.com/games/grid-garden/) 來學習這些工具。

## 作業

[CSS 重構](assignment.md)

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。