# 盆栽盒專案 Part 3 - DOM 元素控制與閉包

![DOM 元素與閉包](/sketchnotes/webdev101-js.png)
> 由 [Tomomi Imura](https://twitter.com/girlie_mac) 繪製

## 課前測驗

[課前測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/19?loc=zh_tw)

### 大綱

操作 DOM (Document Object Model) 是網頁開發的一項關鍵。根據 [MDN 文件](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction)， 「Document Object Model (DOM) 元素能根據網頁文件的結構與內容來呈現物件」。藉由使用 JavaScript 框架而非原始的 JavaScript 程式碼來管理 DOM，在網頁上操作 DOM 的挑戰已經不比以前困難了，但這裡我們要自己來管理它們！

此外，這堂課也會介紹有關[JavaScript 閉包(Closure)](https://developer.mozilla.org/docs/Web/JavaScript/Closures)的概念，你可以想像成一個函式被包在另一個函式中，以訪問外面函式範圍中的變數。

> JavaScript 閉包是個廣闊且複雜的主題。本堂課只觸及建立盆栽盒需要的最基礎概念。你能得知一個閉包為：內部函式和外部函式建立一項關係，允許內部函式存取外部函式的變數等作用域。要得知更多關於閉包的原理，請造訪觀看[額外的文件](https://developer.mozilla.org/docs/Web/JavaScript/Closures)。

我們會使用閉包來操控 DOM。

想像 DOM 就像一棵樹，表現出所有操作網頁的方式。多樣的 APIs (Application Program Interfaces) 提供程式開發者，依照自己使用的程式語言，以存取、編輯、編排等方式管理 DOM 元素。

![DOM 樹的表達](../images/dom-tree.png)

> HTML 語法會參考 DOM 的呈現方式。出自 [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)。

在這堂課中，我們會完成我們的盆栽盒專案，建立 JavaScript 來對網頁中的植物進行互動式操作。

### 開始之前

確保盆栽盒的 HTML 與 CSS 已經編輯完成。這堂課會新增拖曳植物進出盆栽罐的功能。

### 課題

在專案資料夾中，新增檔案 `script.js`。 匯入該檔案在 HTML 檔 `<head>` 的部分：

```html
	<script src="./script.js" defer></script>
```

> 筆記：匯入外部 JavaScript 檔案到 HTML 檔案須使用 `defer`，讓 JavaScript 檔案只有在 HTML 被完全載入時才被執行。你也可以使用 `async` 的屬性，允許 JavaScript 在解析 HTML 檔時就被執行。這項專案中，我們必須確保 HTML 的元件被完整建立後才允許使用拖曳功能。
---

## DOM 元素

我們要做的第一件事是建立 DOM 下，要被操控的物件的連結。在專案例子中，我們有罐子外的十四株植物等著被拖曳。

### 課題

```html
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

發生了什麼事？你正以 DOM 搜尋網頁檔內的物件，藉由 Id 作為依據來搜尋。回想第一堂 HTML 課中，我們可每一株植物一個專屬的 Id (`id="plant1"`)，現在你就可以使用它。在辨別完每一株植物物件後，傳遞給待編輯的函式 `dragElement`，讓 HTML 物件可以被拖曳。

✅ 為什麼我們要以 Id 作為物件的參考？為什麼不以 CSS 的 class 作為參考？請參考以前的 CSS 課程回答此問題。

---

## 閉包(Closure)

現在，你已經準備好要建立 dragElement 閉包，建立包在外部函式內的內部函式組，在我們的例子中，會用上三個函式。 

閉包在一或多個以上函式要存取外部函式時非常好用。看看下面的例子：

```javascript
function displayCandy(){
	let candy = ['jellybeans'];
	function addCandy(candyType) {
		candy.push(candyType)
	}
	addCandy('gumdrops');
}
displayCandy();
console.log(candy)
```

這項例子中，函式 displayCandy 包住另一個函式 addCandy，新增新的糖果樣式到已存在的矩陣當中。當執行這段程式時，矩陣 `candy` 會被認作是未定義，因為它是函式的本地變數。 

✅ 你能讓矩陣 `candy` 被存取嗎？試著將它移到閉包外面。這時，矩陣會變成全域變數，取消閉包內的存取限制。

### 課題

在檔案 `script.js` 的元素宣告下方，新增函式：

```javascript
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
```

`dragElement` 藉由程式定義的參數取得 `terrariumElement` 物件。之後，設定一些位置 `0` 的變數給函式內的物件使用。它們是本地變數，給每一個進到拖曳函式內的物件操控。盆栽盒會被這些拖曳物件填充，我們的網頁應用必須要持續追蹤這些物件的位置。

此外，進到函式的 terrariumElement 也被新增了 `pointerdown` 事件，它是管理 DOM 的其中一項[網頁 APIs](https://developer.mozilla.org/docs/Web/API)。當按鈕按下時，或是在我們案例中，一個拖曳物件被點擊時，`onpointerdown` 事件就會被觸發。這個事件處理器(event handler)皆運作在[網頁與行動瀏覽器](https://caniuse.com/?search=onpointerdown)上，只有少部分的例外。

✅ [事件處理器 `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick)支援更多的瀏覽器。為什麼我們不在這邊使用它？ 想想看我們在這此建立的視窗互動類型。

---

## 函式 pointerDrag

terrariumElement 已經準備好被拖曳了。當觸發 `onpointerdown` 事件時，函式 pointerDrag 會參與其中。新增這項函式在程式碼 `terrariumElement.onpointerdown = pointerDrag;` 下方：

### 課題

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

許多事情會發生。首先，你使用 `e.preventDefault();` 取消掉 pointerdown 原先的預設事件。這樣你可以操作更多的介面行為。

> 回到你建立的程式碼中，試著刪除 `e.preventDefault()` 並執行看看，發生了什麼事？

第二，用瀏覽器打開 `index.html` 並調查我們的介面。當你點擊植物時，你可以發現 'e' 事件被觸發了。專研一下，一個 pointerdown 事件會產生多少資訊！  

接下來，紀錄本地變數 `pos3` 和 `pos4` 被設定為 e.clientX 和 e.clientY。你可以在觀察面板中，會發現 `e` 的數值。這項數值取得按下植物瞬間的 x 與 y 座標資訊。為了全面的控制植物行為，在拖曳植物時，我們會持續更新座標資訊。

✅ 將整個網頁應用建立在一個大閉包下，會讓程式碼變得比較清楚嗎？如果沒有，你有其他方法管理這十四株可拖曳的植物嗎？

增加初始化函式，在程式碼 `pos4 = e.clientY` 下方加上下列兩行事件處理：

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```

現在，在游標拖曳時，你的植物能跟著你的游標走，而在你取消點擊時停下來。`onpointermove` 和 `onpointerup` 也是 `onpointerdown` 類型相同的 API。然而，現在介面會出現錯誤訊息，因為我們還沒建立函式 `elementDrag` 與 `stopElementDrag`。

## 函式 elementDrag 與 stopElementDrag

新增兩條內部函式在閉包中，它們會處理拖曳植物與停止拖曳的事件。你希望你可以拖曳任何一株植物且放在螢幕上的任一地方。介面並沒有強制你盆栽盒的配置格式，你可以自由地增加、移除與移動盆栽罐內的植物。

### 課題

新增函式 `elementDrag` 在函式閉包 `pointerDrag` 宣告列的正下方：

```javascript
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
```

在這條函式之前，你編輯了四個本地變數位置的初始值在外部函式中。這邊又做了什麼事？

當你拖曳物件時，你更新數值 `pos1` 為 `pos3` 減去現在的 `e.clientX`，而 `pos3` 在之前被初始化為為 `e.clientX`。同樣的行為套用在 `pos2`上。之後，你更新 `pos3` 與 `pos4` 到新的 XY 座標點位置。你能在 console 下看到數值在拖曳下更新的情況。我們也更新植物的 CSS 造型中的定位點為 `pos1` 與 `pos2`，比較植物左上方座標點與新座標點的關係。

> `offsetTop` 和 `offsetLeft` 是 CSS 的屬性，決定物件與它父關係物件的定位關係。父關係物件可以是任何元素，只要它的定位屬性不為 `static`。

這些座標點的計算式讓你成功校整了植物與盆栽盒之間的行為。

### 課題

最後的課題是在介面上新增 `stopElementDrag` 函式，我們將它加在函式閉包 `elementDrag` 的正下方：

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

這條小函式重制 `onpointerup` 與 `onpointermove` 事件，這樣你可以重新開始該植物的拖曳事件，或是拖曳新的植物。

✅ 如果不將這些事件設為空值時，會發生什麼事？

我們終於完成了這項專案！

🥇 恭喜你！你建立了一個漂亮的盆栽盒。![盆栽盒成果圖](../images/terrarium-final.png)

---

## 🚀 挑戰

新增新的事件處理器到你的閉包中，讓你能對植物做更多的事情。舉例來說，雙擊植物讓它排列到最上層。發揮你的創意吧！

## 課後測驗

[課後測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/20?loc=zh_tw)

## 複習與自學

在螢幕上拖曳物件看似簡單，但依照不同的目的與實現方法會遭遇到不同的問題。事實上，這邊有一份關於你可以嘗試的[拖曳 API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API)。我們沒在專案中使用是為了建立不一樣的實現方法，試著使用這些 API 到專案中，看看你能完成什麼。

在 [W3C 文件](https://www.w3.org/TR/pointerevents1/) 和 [MDN 網頁文件](https://developer.mozilla.org/docs/Web/API/Pointer_events)上取得更多關於 pointer 的事件。

記得習慣性用 [CanIUse.com](https://caniuse.com/) 檢查網頁的瀏覽器兼容性。

## 作業

[用 DOM 做更多事](assignment.zh-tw.md)

