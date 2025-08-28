<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e375c2aeb94e2407f2667633d39580bd",
  "translation_date": "2025-08-23T22:32:44+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "tw"
}
-->
# Terrarium Project Part 2: CSS 簡介

![CSS 簡介](../../../../sketchnotes/webdev101-css.png)
> [Tomomi Imura](https://twitter.com/girlie_mac) 的手繪筆記

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/17)

### 簡介

CSS，全名為層疊樣式表（Cascading Style Sheets），解決了網頁開發中的一個重要問題：如何讓你的網站看起來更美觀。為應用程式設計樣式不僅能提升其可用性，還能讓它更具吸引力；此外，CSS 還能用來創建響應式網頁設計（Responsive Web Design，RWD），使你的應用程式在不同螢幕尺寸下都能保持良好的外觀。CSS 不僅僅是讓應用程式看起來漂亮，它的規範還包括動畫和變形功能，能為應用程式提供更複雜的互動效果。CSS 工作小組負責維護最新的 CSS 規範，你可以在 [World Wide Web Consortium 的網站](https://www.w3.org/Style/CSS/members)上關注他們的工作。

> 注意，CSS 是一種不斷演進的語言，就像網路上的所有事物一樣，並非所有瀏覽器都支援最新的規範。請務必透過 [CanIUse.com](https://caniuse.com) 檢查你的實現。

在本課程中，我們將為線上植物箱添加樣式，並深入了解 CSS 的幾個概念：層疊、繼承，以及選擇器的使用、定位和利用 CSS 建立佈局。在此過程中，我們將設計植物箱的佈局並創建實際的植物箱。

### 先決條件

你應該已經完成植物箱的 HTML 建立，並準備好進行樣式設計。

> 查看影片

> 
> [![Git 和 GitHub 基礎影片](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### 任務

在你的植物箱資料夾中，建立一個名為 `style.css` 的新檔案。將該檔案匯入到 `<head>` 區段中：

```html
<link rel="stylesheet" href="./style.css" />
```

---

## 層疊

層疊樣式表的核心概念是樣式的「層疊」，即樣式的應用是根據其優先級來決定的。由網站作者設定的樣式優先於瀏覽器設定的樣式。內嵌樣式的優先級高於外部樣式表中的樣式。

### 任務

在你的 `<h1>` 標籤中添加內嵌樣式 "color: red"：

```HTML
<h1 style="color: red">My Terrarium</h1>
```

接著，將以下程式碼添加到你的 `style.css` 檔案中：

```CSS
h1 {
 color: blue;
}
```

✅ 你的網頁應用程式中顯示了哪種顏色？為什麼？你能找到覆蓋樣式的方法嗎？什麼情況下你會想要這樣做，或者不想這樣做？

---

## 繼承

樣式可以從祖先元素繼承到後代元素，嵌套的元素會繼承其父元素的樣式。

### 任務

將 body 的字型設置為指定字型，並檢查嵌套元素的字型：

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

打開瀏覽器的控制台，進入「Elements」標籤，觀察 H1 的字型。它繼承了 body 的字型，瀏覽器中會顯示這一點：

![繼承的字型](../../../../3-terrarium/2-intro-to-css/images/1.png)

✅ 你能讓嵌套樣式繼承不同的屬性嗎？

---

## CSS 選擇器

### 標籤

目前，你的 `style.css` 檔案只設置了少量標籤樣式，應用程式看起來有些奇怪：

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

這種設置標籤樣式的方法能讓你控制獨特的元素，但你需要控制植物箱中許多植物的樣式。為此，你需要利用 CSS 選擇器。

### Ids

為左側和右側容器添加一些樣式。由於標記中只有一個左側容器和一個右側容器，因此它們被賦予了 id。要設置它們的樣式，使用 `#`：

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

在這裡，你使用了絕對定位將這些容器放置在螢幕的最左側和最右側，並使用百分比設置它們的寬度，以便它們能適應小型行動裝置螢幕。

✅ 這段程式碼重複性很高，因此不符合「DRY」（Don't Repeat Yourself）的原則；你能找到更好的方法來設置這些 id 的樣式嗎？或許可以使用 id 和 class 的組合？你需要修改標記並重構 CSS：

```html
<div id="left-container" class="container"></div>
```

### Classes

在上述範例中，你設置了螢幕上的兩個獨特元素的樣式。如果你希望樣式應用於螢幕上的多個元素，可以使用 CSS 類別。為左側和右側容器中的植物設置樣式。

注意，HTML 標記中的每個植物都有 id 和 class 的組合。這裡的 id 是供稍後添加的 JavaScript 使用，用於操作植物箱中的植物位置。而 class 則為所有植物提供統一的樣式。

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

將以下程式碼添加到你的 `style.css` 檔案中：

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

此程式碼中值得注意的是相對定位和絕對定位的混合使用，我們會在下一節中詳細介紹。請注意高度是如何以百分比處理的：

你將植物容器的高度設置為 13%，這是一個不錯的數值，能確保所有植物都能顯示在每個垂直容器中，而不需要滾動。

你將植物容器向左移動，使植物在容器中更居中。圖片有大量透明背景，這樣可以使它們更容易拖動，因此需要向左移動以更好地適應螢幕。

接著，植物本身的最大寬度設置為 150%。這使得它能隨著瀏覽器縮小而縮小。嘗試調整瀏覽器大小，植物會保持在容器中，但會縮小以適應。

另一個值得注意的是 z-index 的使用，它控制元素的相對高度（使植物位於容器之上，看起來像是放在植物箱內）。

✅ 為什麼需要同時使用植物容器和植物的 CSS 選擇器？

## CSS 定位

混合使用定位屬性（包括 static、relative、fixed、absolute 和 sticky）可能有些棘手，但如果使用得當，能很好地控制頁面上的元素。

絕對定位的元素是相對於最近的定位祖先進行定位的，如果沒有定位祖先，則相對於文件的 body 進行定位。

相對定位的元素是根據 CSS 的指示，從其初始位置進行偏移。

在我們的範例中，`plant-holder` 是一個相對定位的元素，位於一個絕對定位的容器內。其結果是側邊欄容器固定在左側和右側，而 plant-holder 則嵌套在側邊欄內，調整自身位置以在側邊欄內垂直排列植物。

> `plant` 本身也使用了絕對定位，這是使其可拖動的必要條件，你會在下一課中了解更多。

✅ 嘗試切換側邊容器和 plant-holder 的定位類型。會發生什麼？

## CSS 佈局

現在你將使用所學的內容，完全使用 CSS 建立植物箱本身！

首先，使用 CSS 將 `.terrarium` div 的子元素設置為圓角矩形：

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

注意此處使用了百分比。如果縮小瀏覽器，你可以看到植物箱也會縮小。還請注意植物箱元素的寬度和高度百分比，以及每個元素如何絕對定位在中心，並固定在視窗底部。

我們還使用了 `rem` 作為邊框半徑的單位，這是一種相對於字型大小的長度。可以在 [CSS 規範](https://www.w3.org/TR/css-values-3/#font-relative-lengths) 中了解更多關於這種相對測量的方法。

✅ 嘗試更改植物箱的顏色和透明度與泥土的顏色和透明度。會發生什麼？為什麼？

---

## 🚀挑戰

在植物箱的左下角添加一個「氣泡」光澤，使其看起來更像玻璃。你將設置 `.jar-glossy-long` 和 `.jar-glossy-short` 的樣式，使其看起來像反射的光澤。完成後效果如下：

![完成的植物箱](../../../../3-terrarium/2-intro-to-css/images/terrarium-final.png)

要完成課後測驗，請參考以下 Learn 模組：[使用 CSS 為 HTML 應用程式設計樣式](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/18)

## 回顧與自學

CSS 看似簡單，但要為所有瀏覽器和螢幕尺寸完美設計應用程式樣式卻充滿挑戰。CSS-Grid 和 Flexbox 是為了讓這項工作更結構化、更可靠而開發的工具。透過遊玩 [Flexbox Froggy](https://flexboxfroggy.com/) 和 [Grid Garden](https://codepip.com/games/grid-garden/) 來學習這些工具。

## 作業

[CSS 重構](assignment.md)

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原始語言的文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對於因使用此翻譯而引起的任何誤解或誤讀概不負責。