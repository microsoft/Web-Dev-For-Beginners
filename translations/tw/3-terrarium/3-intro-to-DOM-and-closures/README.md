<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "30f8903a1f290e3d438dc2c70fe60259",
  "translation_date": "2025-08-23T22:28:05+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "tw"
}
-->
# 玻璃花園專案第 3 部分：DOM 操作與閉包

![DOM 和閉包](../../../../sketchnotes/webdev101-js.png)  
> [Tomomi Imura](https://twitter.com/girlie_mac) 的手繪筆記

## 課前測驗

[課前測驗](https://ff-quizzes.netlify.app/web/quiz/19)

### 簡介

操作 DOM（文件物件模型）是網頁開發中的一個關鍵部分。根據 [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) 的定義：「文件物件模型 (DOM) 是一種數據表示形式，用於描述構成網頁結構和內容的物件。」由於操作 DOM 的挑戰，許多開發者選擇使用 JavaScript 框架來取代原生 JavaScript 進行 DOM 管理，但我們這次將自己動手完成！

此外，本課程還會介紹 [JavaScript 閉包](https://developer.mozilla.org/docs/Web/JavaScript/Closures) 的概念。你可以將閉包理解為一個被另一個函式包裹的函式，內部函式可以訪問外部函式的作用域。

> JavaScript 閉包是一個廣泛且複雜的主題。本課程僅涉及最基本的概念：在這個玻璃花園的程式碼中，你會發現一個閉包——一個內部函式和一個外部函式的結構，讓內部函式可以訪問外部函式的作用域。若想深入了解其運作方式，請參考 [詳細文檔](https://developer.mozilla.org/docs/Web/JavaScript/Closures)。

我們將使用閉包來操作 DOM。

可以將 DOM 想像成一棵樹，代表了網頁文件可以被操作的所有方式。各種 API（應用程式介面）被設計出來，讓程式員可以使用自己選擇的程式語言來訪問 DOM，並進行編輯、修改、重組或其他管理操作。

![DOM 樹結構表示](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/dom-tree.png)

> DOM 和對應的 HTML 標記的表示圖。來源：[Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

在本課程中，我們將完成互動式玻璃花園專案，通過 JavaScript 讓使用者能夠操作頁面上的植物。

### 前置條件

你應該已經完成了玻璃花園的 HTML 和 CSS 部分。在本課程結束時，你將能夠通過拖放功能將植物移入或移出玻璃花園。

### 任務

在你的玻璃花園資料夾中，建立一個名為 `script.js` 的新檔案，並在 `<head>` 區域中引入該檔案：

```html
	<script src="./script.js" defer></script>
```

> 注意：在將外部 JavaScript 檔案引入 HTML 時，使用 `defer` 屬性，這樣可以確保 JavaScript 在 HTML 完全加載後才執行。你也可以使用 `async` 屬性，允許腳本在 HTML 解析時執行，但在我們的案例中，確保 HTML 元素完全可用以進行拖放操作是很重要的。
---

## DOM 元素

首先，你需要在 DOM 中建立對要操作的元素的引用。在我們的案例中，這些元素是目前位於側邊欄的 14 個植物。

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

這裡發生了什麼？你正在引用文件，並在其 DOM 中尋找具有特定 Id 的元素。還記得我們在 HTML 課程中為每個植物圖片分配了唯一的 Id（例如 `id="plant1"`）嗎？現在你將利用這些 Id。識別每個元素後，你將該項目傳遞給一個名為 `dragElement` 的函式（稍後會建立）。因此，HTML 中的元素現在已啟用拖動功能，或者即將啟用。

✅ 為什麼我們通過 Id 引用元素？為什麼不使用它們的 CSS 類別？你可以回顧之前的 CSS 課程來回答這個問題。

---

## 閉包

現在你可以建立 `dragElement` 閉包了，這是一個外部函式，包裹了一個或多個內部函式（在我們的案例中是三個）。

當一個或多個函式需要訪問外部函式的作用域時，閉包非常有用。以下是一個範例：

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

在這個範例中，`displayCandy` 函式包裹了一個函式，該函式將新的糖果類型推入已存在於函式中的陣列。如果你執行這段程式碼，`candy` 陣列將是未定義的，因為它是閉包的區域變數。

✅ 如何讓 `candy` 陣列可訪問？嘗試將它移到閉包之外。這樣，該陣列將變為全域變數，而不是僅限於閉包的區域作用域。

### 任務

在 `script.js` 中的元素聲明下方，建立一個函式：

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

`dragElement` 從腳本頂部的聲明中獲取其 `terrariumElement` 物件。然後，你為傳遞到函式的物件設置了一些初始位置，這些位置的值為 `0`。這些是區域變數，將在閉包內部為每個元素添加拖放功能時進行操作。玻璃花園將由這些被拖動的元素填充，因此應用程式需要跟蹤它們的放置位置。

此外，傳遞給該函式的 `terrariumElement` 被分配了一個 `pointerdown` 事件，這是 [web API](https://developer.mozilla.org/docs/Web/API) 的一部分，旨在幫助管理 DOM。`onpointerdown` 事件在按下按鈕時觸發，或者在我們的案例中，當觸摸一個可拖動的元素時觸發。該事件處理器適用於 [網頁和行動瀏覽器](https://caniuse.com/?search=onpointerdown)，但有少數例外。

✅ [事件處理器 `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) 在跨瀏覽器方面有更廣泛的支援；為什麼不在這裡使用它？想一想你希望在這裡創建的精確螢幕互動類型。

---

## Pointerdrag 函式

`terrariumElement` 現在已準備好被拖動；當觸發 `onpointerdown` 事件時，函式 `pointerDrag` 被調用。在這行程式碼下方新增該函式：`terrariumElement.onpointerdown = pointerDrag;`：

### 任務 

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

這裡發生了幾件事。首先，你通過使用 `e.preventDefault();` 阻止了 `pointerdown` 事件的預設行為。這樣你可以更好地控制介面的行為。

> 當你完全建立腳本檔案後，回到這行程式碼並嘗試移除 `e.preventDefault()`——會發生什麼？

其次，打開瀏覽器中的 `index.html`，檢查介面。當你點擊一個植物時，你可以看到如何捕獲 'e' 事件。深入檢查該事件，看看在一次 `pointerdown` 事件中收集了多少資訊！

接下來，注意如何將區域變數 `pos3` 和 `pos4` 設置為 `e.clientX`。你可以在檢查面板中找到 `e` 的值。這些值捕獲了你點擊或觸摸植物時的 x 和 y 座標。由於你需要對植物的拖動行為進行精細控制，因此需要跟蹤它們的座標。

✅ 現在是否更清楚為什麼整個應用程式是用一個大的閉包構建的？如果不是閉包，你將如何為 14 個可拖動的植物維持作用域？

完成初始函式，通過在 `pos4 = e.clientY` 下方新增兩個指針事件操作：

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```

現在你正在指示希望植物隨著指針移動，並在取消選擇植物時停止拖動。`onpointermove` 和 `onpointerup` 都是與 `onpointerdown` 相同 API 的一部分。介面現在會拋出錯誤，因為你尚未定義 `elementDrag` 和 `stopElementDrag` 函式，因此接下來建立這些函式。

## elementDrag 和 stopElementDrag 函式

你將通過新增兩個內部函式來完成閉包，這些函式將處理拖動植物和停止拖動時的行為。你希望的行為是，隨時可以拖動任何植物，並將其放置在螢幕上的任何位置。這個介面非常自由（例如，沒有放置區域），讓你可以自由設計玻璃花園，隨意新增、移除和重新定位植物。

### 任務

在 `pointerDrag` 的結尾大括號後新增 `elementDrag` 函式：

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

在這個函式中，你對先前在外部函式中設置的初始位置 1-4 進行了大量編輯。這裡發生了什麼？

當你拖動時，你通過將 `pos3`（之前設置為 `e.clientX`）減去當前的 `e.clientX` 值來重新分配 `pos1`。對 `pos2` 進行了類似的操作。然後，你將 `pos3` 和 `pos4` 重設為元素的新 X 和 Y 座標。你可以在拖動時在控制台中觀察這些變化。接著，你操作植物的 CSS 樣式，根據這些新位置計算植物的上方和左側 X 和 Y 座標，並設置其新位置。

> `offsetTop` 和 `offsetLeft` 是 CSS 屬性，用於根據父元素設置元素的位置；其父元素可以是任何非 `static` 定位的元素。

所有這些位置的重新計算讓你可以微調玻璃花園和植物的行為。

### 任務 

完成介面的最後一步是在 `elementDrag` 的結尾大括號後新增 `stopElementDrag` 函式：

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

這個小函式重設了 `onpointerup` 和 `onpointermove` 事件，這樣你可以重新開始拖動植物，或者開始拖動新的植物。

✅ 如果你不將這些事件設置為 null，會發生什麼？

現在你已經完成了專案！

🥇恭喜！你已經完成了美麗的玻璃花園！  
![完成的玻璃花園](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/terrarium-final.png)

---

## 🚀挑戰

為你的閉包新增一個事件處理器，讓植物可以執行更多操作；例如，雙擊植物將其移到最前面。發揮創意吧！

## 課後測驗

[課後測驗](https://ff-quizzes.netlify.app/web/quiz/20)

## 複習與自學

雖然在螢幕上拖動元素看起來很簡單，但根據你想要的效果，有許多方法可以實現，並且可能會遇到許多陷阱。事實上，有一整套 [拖放 API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) 可供嘗試。我們在本模組中沒有使用該 API，因為我們想要的效果有些不同，但你可以在自己的專案中嘗試這個 API，看看能實現什麼。

在 [W3C 文檔](https://www.w3.org/TR/pointerevents1/) 和 [MDN 網頁文檔](https://developer.mozilla.org/docs/Web/API/Pointer_events) 上找到更多關於指針事件的資訊。

隨時使用 [CanIUse.com](https://caniuse.com/) 檢查瀏覽器的支援能力。

## 作業

[進一步操作 DOM](assignment.md)

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而產生的任何誤解或錯誤解釋不承擔責任。