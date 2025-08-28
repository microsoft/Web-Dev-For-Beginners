<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "30f8903a1f290e3d438dc2c70fe60259",
  "translation_date": "2025-08-23T22:27:02+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "zh"
}
-->
# 玻璃花园项目第三部分：DOM操作与闭包

![DOM与闭包](../../../../sketchnotes/webdev101-js.png)
> [Tomomi Imura](https://twitter.com/girlie_mac) 的手绘笔记

## 课前测验

[课前测验](https://ff-quizzes.netlify.app/web/quiz/19)

### 简介

操作DOM（文档对象模型）是网页开发的关键部分。根据 [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) 的定义，“文档对象模型（DOM）是网页中构成文档结构和内容的对象的数据表示形式。” 由于网页上的DOM操作的复杂性，开发者通常会选择使用JavaScript框架而不是原生JavaScript来管理DOM，但在本课程中，我们将自己动手完成！

此外，本课程将介绍 [JavaScript闭包](https://developer.mozilla.org/docs/Web/JavaScript/Closures) 的概念。闭包可以理解为一个函数被另一个函数包裹，使得内部函数可以访问外部函数的作用域。

> JavaScript闭包是一个广泛且复杂的主题。本课程仅涉及最基础的概念。在玻璃花园的代码中，你会发现一个闭包：一个内部函数和一个外部函数构造在一起，使得内部函数可以访问外部函数的作用域。想要了解更多关于闭包的工作原理，请访问 [详细文档](https://developer.mozilla.org/docs/Web/JavaScript/Closures)。

我们将使用闭包来操作DOM。

可以将DOM想象成一棵树，代表了网页文档可以被操作的所有方式。各种API（应用程序接口）被设计出来，使得程序员可以使用自己选择的编程语言访问DOM并进行编辑、修改、重新排列或其他管理操作。

![DOM树表示](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/dom-tree.png)

> DOM及其对应HTML标记的表示形式。图片来源：[Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

在本课程中，我们将完成互动玻璃花园项目，通过创建JavaScript代码让用户能够在页面上操作植物。

### 前置条件

你应该已经完成了玻璃花园的HTML和CSS部分。在本课程结束时，你将能够通过拖动将植物移入或移出玻璃花园。

### 任务

在你的玻璃花园文件夹中，创建一个名为 `script.js` 的新文件。在 `<head>` 部分导入该文件：

```html
	<script src="./script.js" defer></script>
```

> 注意：在将外部JavaScript文件导入HTML文件时，使用 `defer` 属性可以确保JavaScript代码在HTML文件完全加载后才执行。你也可以使用 `async` 属性，它允许脚本在HTML文件解析时执行，但在我们的案例中，确保HTML元素完全加载后再执行拖动脚本是很重要的。
---

## DOM元素

首先，你需要在DOM中创建对你想要操作的元素的引用。在我们的案例中，这些元素是当前位于侧边栏的14个植物。

### 任务

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

这里发生了什么？你正在引用文档并在其DOM中查找具有特定Id的元素。还记得在HTML课程中你为每个植物图片分配了单独的Id（例如 `id="plant1"`）吗？现在你将利用这些Id。识别每个元素后，你将该元素传递给一个名为 `dragElement` 的函数（稍后会创建）。因此，HTML中的元素现在可以被拖动，或者很快就可以被拖动。

✅ 为什么我们通过Id引用元素，而不是通过CSS类？你可以参考之前关于CSS的课程来回答这个问题。

---

## 闭包

现在你可以创建 `dragElement` 闭包了，这是一个外部函数，包裹了一个或多个内部函数（在我们的案例中是三个）。

当一个或多个函数需要访问外部函数的作用域时，闭包非常有用。以下是一个示例：

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

在这个示例中，`displayCandy` 函数包裹了一个函数，该函数将新的糖果类型推入已经存在于函数中的数组。如果你运行这段代码，`candy` 数组将是未定义的，因为它是一个局部变量（局限于闭包的作用域）。

✅ 如何让 `candy` 数组可访问？尝试将它移到闭包外部。这样，数组就变成了全局变量，而不是仅限于闭包的局部作用域。

### 任务

在 `script.js` 文件的元素声明部分下，创建一个函数：

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

`dragElement` 从脚本顶部的声明中获取其 `terrariumElement` 对象。然后，你为传递给函数的对象设置一些初始位置为 `0` 的局部变量。这些局部变量将在闭包中为每个元素添加拖动功能时被操作。玻璃花园将通过这些拖动的元素填充，因此应用程序需要跟踪它们的放置位置。

此外，传递给该函数的 `terrariumElement` 被分配了一个 `pointerdown` 事件，这是 [web API](https://developer.mozilla.org/docs/Web/API) 的一部分，旨在帮助管理DOM。`onpointerdown` 在按钮被按下时触发，或者在我们的案例中，当一个可拖动的元素被触摸时触发。这个事件处理程序适用于 [网页和移动浏览器](https://caniuse.com/?search=onpointerdown)，但有一些例外。

✅ [事件处理程序 `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) 在跨浏览器支持方面更广泛；为什么不在这里使用它？思考一下你想要创建的屏幕交互的具体类型。

---

## Pointerdrag函数

`terrariumElement` 已准备好被拖动；当触发 `onpointerdown` 事件时，函数 `pointerDrag` 被调用。在这行代码下添加该函数：`terrariumElement.onpointerdown = pointerDrag;`：

### 任务 

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

发生了几件事。首先，你通过使用 `e.preventDefault();` 阻止了在 `pointerdown` 上通常发生的默认事件。这样你可以更好地控制界面的行为。

> 完成脚本文件后，回到这一行，尝试去掉 `e.preventDefault()` ——会发生什么？

其次，在浏览器窗口中打开 `index.html`，并检查界面。当你点击一个植物时，你可以看到如何捕获 'e' 事件。深入研究事件，看看一个 `pointerdown` 事件可以收集多少信息！

接下来，注意局部变量 `pos3` 和 `pos4` 如何被设置为 `e.clientX`。你可以在检查面板中找到 `e` 的值。这些值捕获了你点击或触摸植物时的x和y坐标。你需要对植物的行为进行精细控制，因此需要跟踪它们的坐标。

✅ 为什么整个应用程序是用一个大的闭包构建的是否变得更清晰了？如果不是闭包，你如何为14个可拖动的植物维护作用域？

完成初始函数后，在 `pos4 = e.clientY` 下添加两个指针事件操作：

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```
现在你正在指示植物随着指针移动而被拖动，并在取消选择植物时停止拖动。`onpointermove` 和 `onpointerup` 都是与 `onpointerdown` 属于同一API的一部分。界面现在会抛出错误，因为你尚未定义 `elementDrag` 和 `stopElementDrag` 函数，因此接下来构建这些函数。

## elementDrag 和 stopElementDrag 函数

通过添加两个内部函数来完成闭包，这些函数将处理拖动植物和停止拖动时发生的事情。你希望的行为是，用户可以随时拖动任何植物并将其放置在屏幕上的任意位置。这个界面非常灵活（例如没有特定的放置区域），允许用户通过添加、移除和重新定位植物来自由设计玻璃花园。

### 任务

在 `pointerDrag` 的结束大括号后添加 `elementDrag` 函数：

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
在这个函数中，你对外部函数中设置的初始位置1-4进行了大量编辑。这里发生了什么？

在拖动过程中，你通过将 `pos3`（之前设置为 `e.clientX`）减去当前的 `e.clientX` 值来重新分配 `pos1`。对 `pos2` 进行了类似的操作。然后，你将 `pos3` 和 `pos4` 重置为元素的新x和y坐标。你可以在拖动时在控制台中观察这些变化。接着，你操作植物的CSS样式，根据与这些新位置的偏移量计算植物的顶部和左侧x和y坐标，从而设置其新位置。

> `offsetTop` 和 `offsetLeft` 是CSS属性，用于根据其父元素设置元素的位置；其父元素可以是任何非 `static` 定位的元素。

所有这些位置重新计算使你能够微调玻璃花园及其植物的行为。

### 任务 

完成界面的最后一步是在 `elementDrag` 的结束大括号后添加 `stopElementDrag` 函数：

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

这个小函数重置了 `onpointerup` 和 `onpointermove` 事件，使得用户可以通过重新开始拖动植物或开始拖动新植物来重新启动植物的进程。

✅ 如果不将这些事件设置为null，会发生什么？

现在你已经完成了你的项目！

🥇恭喜！你完成了美丽的玻璃花园！ ![完成的玻璃花园](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/terrarium-final.png)

---

## 🚀挑战

为你的闭包添加新的事件处理程序，让植物实现更多功能；例如，双击植物将其置于最前面。发挥创意吧！

## 课后测验

[课后测验](https://ff-quizzes.netlify.app/web/quiz/20)

## 复习与自学

虽然在屏幕上拖动元素看起来很简单，但实现这一功能有很多方法和陷阱，具体取决于你想要的效果。事实上，有一个完整的 [拖放API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) 供你尝试。我们没有在本模块中使用它，因为我们想要的效果有所不同，但你可以在自己的项目中尝试这个API，看看能实现什么。

在 [W3C文档](https://www.w3.org/TR/pointerevents1/) 和 [MDN网页文档](https://developer.mozilla.org/docs/Web/API/Pointer_events) 上找到更多关于指针事件的信息。

始终使用 [CanIUse.com](https://caniuse.com/) 检查浏览器兼容性。

## 作业

[进一步练习DOM操作](assignment.md)

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原文档的原始语言版本为权威来源。对于关键信息，建议使用专业人工翻译。因使用本翻译而引起的任何误解或误读，我们概不负责。