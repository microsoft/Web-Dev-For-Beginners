<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "30f8903a1f290e3d438dc2c70fe60259",
  "translation_date": "2025-08-23T22:28:42+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "hk"
}
-->
# Terrarium Project Part 3: DOM 操作與閉包

![DOM 和閉包](../../../../sketchnotes/webdev101-js.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/19)

### 簡介

操作 DOM（Document Object Model，文件物件模型）是網頁開發中的重要部分。根據 [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) 的說法：「Document Object Model (DOM) 是網頁文件結構和內容的物件數據表示形式。」網頁上的 DOM 操作挑戰通常是促使開發者使用 JavaScript 框架而非原生 JavaScript 來管理 DOM 的原因，但我們將嘗試自己完成！

此外，本課程將介紹 [JavaScript 閉包](https://developer.mozilla.org/docs/Web/JavaScript/Closures) 的概念。閉包可以理解為一個函數包裹著另一個函數，使內部函數能夠訪問外部函數的作用域。

> JavaScript 閉包是一個廣泛且複雜的主題。本課程僅涉及最基本的概念。在這個 terrarium 的代碼中，你會看到一個閉包：一個內部函數和一個外部函數的結構，允許內部函數訪問外部函數的作用域。若想深入了解其工作原理，請參閱 [詳細文檔](https://developer.mozilla.org/docs/Web/JavaScript/Closures)。

我們將使用閉包來操作 DOM。

可以將 DOM 想像成一棵樹，代表了網頁文件可以被操作的所有方式。各種 API（應用程式介面）已被編寫，使得程式員可以使用自己選擇的程式語言來訪問 DOM，並進行編輯、更改、重新排列或其他管理操作。

![DOM 樹表示](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/dom-tree.png)

> DOM 和 HTML 標記的表示形式。來源：[Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

在本課程中，我們將完成互動式 terrarium 項目，通過創建 JavaScript 代碼，讓用戶能夠在頁面上操作植物。

### 前置條件

你應該已經完成了 terrarium 的 HTML 和 CSS 部分。在本課程結束時，你將能夠通過拖動將植物移入或移出 terrarium。

### 任務

在你的 terrarium 文件夾中，創建一個名為 `script.js` 的新文件。並在 `<head>` 部分導入該文件：

```html
	<script src="./script.js" defer></script>
```

> 注意：在將外部 JavaScript 文件導入 HTML 文件時，使用 `defer` 屬性，以便讓 JavaScript 在 HTML 文件完全加載後執行。你也可以使用 `async` 屬性，允許腳本在 HTML 文件解析時執行，但在我們的情況下，重要的是在執行拖動腳本之前，HTML 元素必須完全可用。

---

## DOM 元素

首先，你需要在 DOM 中創建對要操作的元素的引用。在我們的例子中，它們是側邊欄中等待的 14 個植物。

### 任務

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

這裡發生了什麼？你正在引用文件並在其 DOM 中查找具有特定 Id 的元素。記得在 HTML 的第一課中，你為每個植物圖片分配了唯一的 Id（例如 `id="plant1"`）嗎？現在你將利用這些努力。在識別每個元素後，你將該項目傳遞給一個名為 `dragElement` 的函數，稍後你將構建該函數。因此，HTML 中的元素現在已啟用拖動功能，或者即將啟用。

✅ 為什麼我們通過 Id 引用元素？為什麼不通過它們的 CSS 類？你可以回顧之前的 CSS 課程來回答這個問題。

---

## 閉包

現在你準備創建 `dragElement` 閉包，這是一個外部函數，包裹著一個或多個內部函數（在我們的例子中，我們將有三個）。

當一個或多個函數需要訪問外部函數的作用域時，閉包非常有用。以下是一個例子：

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

在這個例子中，`displayCandy` 函數包裹著一個函數，該函數將新的糖果類型推入已存在於函數中的數組。如果你運行這段代碼，`candy` 數組將是未定義的，因為它是一個局部變數（局限於閉包）。

✅ 如何使 `candy` 數組可訪問？嘗試將其移到閉包之外。這樣，數組就成為全局的，而不是僅限於閉包的局部作用域。

### 任務

在 `script.js` 中的元素聲明下，創建一個函數：

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

`dragElement` 從腳本頂部的聲明中獲取其 `terrariumElement` 對象。然後，你為傳遞到函數的對象設置一些初始位置為 `0` 的局部變數。這些是每個元素的局部變數，當你在閉包中為每個元素添加拖放功能時，這些變數將被操作。這些被拖動的元素將填充 terrarium，因此應用程序需要跟踪它們的放置位置。

此外，傳遞給該函數的 `terrariumElement` 被分配了一個 `pointerdown` 事件，這是 [web API](https://developer.mozilla.org/docs/Web/API) 的一部分，旨在幫助管理 DOM。`onpointerdown` 事件在按下按鈕時觸發，或者在我們的例子中，當觸摸可拖動的元素時觸發。該事件處理程序適用於 [網頁和移動瀏覽器](https://caniuse.com/?search=onpointerdown)，但有少數例外。

✅ [事件處理程序 `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) 在跨瀏覽器中有更廣泛的支持；為什麼不在這裡使用它？思考一下你想要創建的精確屏幕交互類型。

---

## Pointerdrag 函數

`terrariumElement` 已準備好被拖動；當觸發 `onpointerdown` 事件時，函數 `pointerDrag` 被調用。在這行代碼下方添加該函數：`terrariumElement.onpointerdown = pointerDrag;`：

### 任務 

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

發生了幾件事。首先，你使用 `e.preventDefault();` 阻止了通常在 pointerdown 上發生的默認事件。這樣你可以更好地控制界面的行為。

> 當你完全構建腳本文件後，回到這行代碼並嘗試不使用 `e.preventDefault()`——會發生什麼？

其次，在瀏覽器窗口中打開 `index.html`，並檢查界面。當你點擊植物時，你可以看到如何捕獲 'e' 事件。深入研究該事件，看看一次 pointerdown 事件收集了多少信息！

接下來，注意如何將局部變數 `pos3` 和 `pos4` 設置為 e.clientX。你可以在檢查面板中找到 `e` 的值。這些值捕獲了你點擊或觸摸植物時的 x 和 y 坐標。你需要對植物的行為進行精細控制，因此需要跟踪它們的坐標。

✅ 現在是否更清楚為什麼整個應用程序是用一個大的閉包構建的？如果不是閉包，你如何為 14 個可拖動的植物維持作用域？

完成初始函數，添加兩個指針事件操作到 `pos4 = e.clientY` 下方：

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```

現在你正在指示植物隨著指針移動而被拖動，並在取消選擇植物時停止拖動手勢。`onpointermove` 和 `onpointerup` 都是與 `onpointerdown` 相同的 API 的一部分。界面現在會拋出錯誤，因為你尚未定義 `elementDrag` 和 `stopElementDrag` 函數，因此接下來構建它們。

## elementDrag 和 stopElementDrag 函數

你將通過添加兩個內部函數來完成閉包，這些函數將處理拖動植物和停止拖動植物時的行為。你希望的行為是，隨時可以拖動任何植物並將其放置在屏幕上的任何位置。這個界面非常靈活（例如，沒有放置區域），允許你通過添加、移除和重新定位植物來自由設計你的 terrarium。

### 任務

在 `pointerDrag` 的閉括號後添加 `elementDrag` 函數：

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

在這個函數中，你對外部函數中設置的初始位置 1-4 進行了大量編輯。這裡發生了什麼？

當你拖動時，你通過將 `pos3`（之前設置為 `e.clientX`）減去當前的 `e.clientX` 值來重新分配 `pos1`。你對 `pos2` 進行了類似的操作。然後，你將 `pos3` 和 `pos4` 重置為元素的新 X 和 Y 坐標。你可以在拖動時在控制台中觀察這些變化。接著，你操作植物的 CSS 樣式，根據 `pos1` 和 `pos2` 的新位置計算植物的頂部和左側 X 和 Y 坐標，並設置其新位置。

> `offsetTop` 和 `offsetLeft` 是 CSS 屬性，根據其父元素設置元素的位置；其父元素可以是任何非 `static` 定位的元素。

所有這些位置重新計算使你能夠微調 terrarium 和植物的行為。

### 任務 

完成界面的最後一步是在 `elementDrag` 的閉括號後添加 `stopElementDrag` 函數：

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

這個小函數重置了 `onpointerup` 和 `onpointermove` 事件，使你可以重新開始拖動植物，或者開始拖動新的植物。

✅ 如果不將這些事件設置為 null，會發生什麼？

現在你已完成你的項目！

🥇恭喜！你已完成美麗的 terrarium！ ![完成的 terrarium](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/terrarium-final.png)

---

## 🚀挑戰

為你的閉包添加新的事件處理程序，讓植物有更多的互動；例如，雙擊植物使其置於最前方。發揮創意！

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/20)

## 回顧與自學

雖然在屏幕上拖動元素看似簡單，但有許多方法可以實現，並且根據你想要的效果可能會遇到許多陷阱。事實上，有一個完整的 [拖放 API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) 供你嘗試。我們在本模組中沒有使用它，因為我們想要的效果有所不同，但可以在自己的項目中嘗試該 API，看看能實現什麼。

在 [W3C 文檔](https://www.w3.org/TR/pointerevents1/) 和 [MDN 網頁文檔](https://developer.mozilla.org/docs/Web/API/Pointer_events) 中找到更多關於指針事件的信息。

始終使用 [CanIUse.com](https://caniuse.com/) 檢查瀏覽器的兼容性。

## 作業

[進一步操作 DOM](assignment.md)

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。