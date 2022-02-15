# 盆栽盒專案 Part 2： CSS 簡介

![CSS 簡介](/sketchnotes/webdev101-css.png)
> 由 [Tomomi Imura](https://twitter.com/girlie_mac) 繪製

## 課前測驗

[課前測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/17?loc=zh_tw)

### 大綱

階層式樣式表，CSS (Cascading Style Sheets)解決了網頁開發重要的問題：如何讓網頁變得漂亮。為你的應用造型化可以讓網頁更好用、更好看。你也可以使用 CSS 建立回應式網頁設計(Responsive Web Design - RWD)，依據你的視窗大小改變網頁的呈現方式。 CSS 不只讓網頁變美麗，它允許加入動畫以呈現更生動的互動體驗。CSS 工作組持續維護 CSS 的規格書，你可以在[全球資訊網協會官網](https://www.w3.org/Style/CSS/members)追蹤他們的作業。

> 筆記，CSS 是一種程式語言，但就像任何在網路上的東西一樣，並不是所有瀏覽器都支援最新的規格。請時常利用 [CanIUse.com](https://caniuse.com) 檢查你的設計是否支援相關瀏覽器。

這堂課中，我們會為我們的線上盆栽盒增加造型，學習更多 CSS 的概念：串接(Cascade)、繼承(Inheritance)、選擇器(Selectors)、定位(Positioning)與建立布局(Layout)。我們會規劃盆栽盒的布局，建立實際的盆栽盒。

### 開始之前

你需要確保你有盆栽盒的 HTML 程式碼，準備被造型化。

### 課題

在盆栽盒專案中，我們新增檔案 `style.css`。 在 HTML 檔案中匯入該檔案在 `<head>` 區塊中：

```html
<link rel="stylesheet" href="./style.css" />
```

---

## 串接(Cascade)

串接造型表單體現了造型依照表單上的優先度「串接」在網頁應用上。網頁作者利用程式碼設定造型優先度，行內樣式(inline styles)的優先度會比外部造型表單來的高。

### 課題

新增行內造型 "color: red" 到 `<h1>` 標籤中：

```HTML
<h1 style="color: red">My Terrarium</h1>
```

之後，也新增下列程式碼在 `style.css` 檔案中：

```CSS
h1 {
 color: blue;
}
```

✅ 你的網頁顯示了哪一種顏色？為什麼？你能找到方法覆蓋這個造型嗎？何時會讓你想用這套做法呢？又為什麼不呢？

---

## 繼承(Inheritance)

從父關係標籤到子關係標籤上繼承造型，如被嵌套的物件會繼承容器物件的造型。

### 課題

我們設定 body 的字體為特定字型，確認嵌套物件的字型：

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

開啟你的瀏覽器命令欄到 'Elements' 標籤中，觀察 H1 的字型。它繼承了 body 的字型，表現在瀏覽器上：

![inherited font](../images/1.png)

✅ 你能讓被嵌套元素繼承其他格式嗎？

---

## CSS 選擇器(Selectors)

### 標籤

到目前為止，你的 `style.css` 檔案只有一部份標籤被造型化，這讓程式看起來很怪：

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

這種造型方法只能控制被指定的元素，但如果你需要套用在每一種盆栽盒內的植物。你需要利用 CSS 選擇器。

### Ids

新增左容器與右容器造型布局。因為網頁內只有一個左容器與右容器，我們就這樣命名 id 標記。要造型化它們，使用 `#`：

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

這裡，你已經將容器擺在絕對位置上了，一個位在左側，一個位在右側。容器寬度使用百分比以確保它們在小螢幕裝置上也能運作正常。

✅ 這兩段樣式已經重複了，請不要照抄。你能找到更好的方式來造型化這些 ids 嗎？ 或許你可以從 id 或 class 來下手。讓 CSS 套用在容器上，我們需要改寫 HTML 程式碼：

```html
<div id="left-container" class="container"></div>
```

### Classes

在上述例子中，你成功地為兩樣物件新增造型。如果你想一次套用在多樣物件上，你就需要 CSS classes。利用這個方法來布局兩個容器。

注意每個植物的標記都有 ids 與 classes。JavaScript 使用 Id 標記來控制植物的擺放； class 則是被 CSS 套用特定的造型。

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

新增下列程式碼到 `style.css` 檔案中：

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

片段開頭是 CSS 的定位屬性，分為相對與絕對定位，我們會在下一個段落進行解述。我們來看看百分比高度的方式：

你設定了植物架高度為 13%，確保所有植物都能在不需要滾動容器的情況下，在每一個垂直的容器中顯示出來。

你設定了植物架向左移 10 像素，讓植物能在容器的正中間。圖片上亦有大區域的透明區域需要被拖曳過來，往左位移更適合呈現在畫面上。

之後，植物設定寬度為 150%。 當瀏覽器調整比例時，也能同時將植物圖片作大小的調整。試著改變瀏覽器檢視比例，植物依舊會保持在容器中。

我們換看 z-index，控制物件的相對高度，讓植物坐落在容器上方且在盆栽盒內部。

✅ 為什麼需要分為植物架與植物 CSS 選擇器？

## 定位(Positioning)

多樣的定位屬性，包含靜態(static)、相對(relative)、固定(fixed)、絕對(absolute)和黏貼(sticky)，有時候讓人難以駕馭，但成功設定完後，可以讓你完整地掌握元素坐落的位置。

絕對定位元素會依照他的父關係物件來決定定位位置，若沒有關係物件，整個文件的 body 就會成為定位依據。

相對定位元素則依照 CSS 指定的方向來調整他的起始位置。

在我們的樣本中，`plant-holder` 是相對定位元素，坐落在絕對定位的容器當中。因此，容器被定義在左側與右側，而被嵌入的植物架會調整它在容器的位置，保持植物之間的間隔。

> `plant` 本身也擁有絕對定位，為了讓圖片被拖曳，你能在下段課程中發現更多資訊。

✅ 試著改變容器與植物架的定位模式。發生了什麼事？

## 布局(Layouts)

現在，你已經善用你所學的，只用 CSS 建出盆栽盒！

首先，對 `.terrarium` 的 div 子關係物件加上圓邊矩形：

```CSS
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 10%;
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
	width: 58%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 4rem 4rem;
	bottom: 1%;
	left: 21%;
	opacity: 0.7;
	z-index: -1;
}
```

注意這邊百分比的用法，即使是 `border-radius` 也請留意。 當瀏覽器調整檢視比例時，你會發現玻璃罐也會受到調整。 其他值得注意的地方為：玻璃罐的寬度與高度百分比，每個元素絕對定位在中心與視窗的下方。

✅ 試著改變罐子的顏色與透明度，觀察泥土與罐子的關係。發生了什麼事？為什麼？

---

## 🚀 挑戰

新增「氣泡反光」在罐子左下方的位置，讓玻璃材質更擬真一些。你需要編輯 `.jar-glossy-long` 與 `.jar-glossy-short` 造型集來模擬罐子反光。下面是成果圖：

![盆栽盒成果圖](../images/terrarium-final.png)

在做課後測驗前，請先前往下列的學習頁面：[用 CSS 造型化你的網頁應用](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics?WT.mc_id=academic-13441-cxa)

## 課後測驗

[課後測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/18?loc=zh_tw)

## 複習與自學

CSS 看似很好上手，但要在所有瀏覽器與螢幕大小上運作正常，也會面臨到許多挑戰。CSS-Grid 與 Flexbox 這兩種工具讓上述作業變得比較好規劃與調整。藉由遊玩 [Flexbox Froggy](https://flexboxfroggy.com/) 與 [Grid Garden](https://codepip.com/games/grid-garden/) 來學習它們。

## 作業

[重構 CSS](assignment.zh-tw.md)
