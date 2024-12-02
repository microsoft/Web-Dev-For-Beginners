# 项目 Terrarium 第 3 部分：DOM 操作和闭包

![DOM 和闭包](../../sketchnotes/webdev101-js.png)
> Sketchnote 由 [Tomomi Imura](https://twitter.com/girlie_mac) 创建

## 课前测验

[课前测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/19)

### 介绍

操作 DOM，或者称为 "文档对象模型"，是 Web 开发的一个关键方面。根据 [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction) 的说法，"文档对象模型（DOM）是 web 上的文档的结构和内容组成的对象的数据表示。" 在 Web 上进行 DOM 操作的挑战通常是使用 JavaScript 框架而不是纯 JavaScript 来管理 DOM 的动力，但我们将自己来处理！

此外，本课程还将介绍 [JavaScript 闭包](https://developer.mozilla.org/docs/Web/JavaScript/Closures) 的概念，您可以将其视为一个由另一个函数封闭的函数，以便内部函数可以访问外部函数的范围。

> JavaScript 闭包是一个广泛而复杂的主题。本课程只涉及最基本的概念，即在这个 terrarium 代码中，您会发现一个闭包：一个内部函数和一个外部函数以一种允许内部函数访问外部函数范围的方式构造。有关更多详细信息，请访问[广泛的文档](https://developer.mozilla.org/docs/Web/JavaScript/Closures)。

我们将使用闭包来操作 DOM。

将 DOM 想象成一棵树，代表了可以操作 Web 页面文档的所有方式。各种 API（应用程序接口）已经编写，以便程序员可以使用他们选择的编程语言访问 DOM 并进行编辑、更改、重新排列和管理它。

![DOM 树表示](./images/dom-tree.png)

> DOM 和引用它的 HTML 标记的表示。来自 [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

在本课程中，我们将通过创建 JavaScript 完成我们的交互式温室项目，使用户能够操作页面上的植物。

### 先决条件

您应该已经构建了温室的 HTML 和 CSS。在本课程结束时，您将能够通过拖动将植物放入和移出温室。

### 任务

在您的温室文件夹中，创建一个名为 `script.js` 的新文件。在 `<head>` 部分导入该文件：

```html
	<script src="./script.js" defer></script>
```

> 注意：当将外部 JavaScript 文件导入到 HTML 文件中时，请使用 `defer`，以便允许 JavaScript 仅在 HTML 文件完全加载后执行。您还可以使用 `async` 属性，它允许脚本在 HTML 文件解析时执行，但在我们的情况下，在允许拖动脚本执行之前，完整的 HTML 元素对于拖动是重要的。
---

## DOM 元素

首先，您需要创建对您要在 DOM 中操作的元素的引用。在我们的情况下，它们是当前等待在侧边栏中的 14 个植物。

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

这里正在进行的操作是引用文档并查找其 DOM，以找到具有特定 ID 的元素。在第一课关于 HTML 中，您为每个植物图像分配了单独的 ID（`id="plant1"`），您现在将利用这个工作。在识别每个元素之后，您将该项目传递给一个名为 `dragElement` 的函数，您将在接下来的一分钟内构建该函数。因此，HTML 中的元素现在是可拖动的，或者很快将变得可拖动。

✅ 为什么我们通过 ID 引用元素？为什么不通过它们的 CSS 类来引用？您可以参考以前关于 CSS 的课程来回答这个问题。

---

## 闭包

现在您已经准备好创建 `dragElement` 闭包了，它是一个包含内部函数或函数的外部函数（在我们的情况下，我们将有三个内部函数）。

当一个或多个函数需要访问外部函数的范围时，闭包非常有用。下面是一个示例：

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

在这个示例中，`displayCandy` 函数包围了一个函数，该函数将一个新的糖果类型推入已经存在于函数中的数组。如果运行这段代码，`candy` 数组将是未定义的，因为它是一个局部变量（局部于闭包）。

✅ 您如何使 `candy` 数组可访问？尝试将它移到闭包外部。这样，数组就变成了全局的，而不仅仅是在闭包的局部范围内可用。

### Task

在 `script.js` 中的元素声明下面，创建一个函数：

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

`dragElement` 函数从脚本顶部的声明获取它的 `terrariumElement` 对象。然后，您将传入函数的对象的一些本地位置设置为 `0`。这些是在闭包内为每个元素添加拖放功能时将被操作的本地变量。温室将由这些被拖动的元素填充，因此应用程序需要跟踪它们被放置的位置。

此外，传递给这个函数的 `terrariumElement` 被分配了一个 `pointerdown` 事件，这是用于帮助管理 DOM 的 [Web API](https://developer.mozilla.org/docs/Web/API) 的一部分。当按钮被按下时，或在我们的情况下，可拖动元素被触摸时，`onpointerdown` 事件处理程序将触发。这个事件处理程序在 [Web 和移动浏览器](https://caniuse.com/?search=onpointerdown) 上都可以使用，但有一些例外情况。

✅ [事件处理程序 `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) 在跨浏览器上有更多的支持；为什么在这里不使用它？考虑一下您试图在这里创建的屏幕交互的确切类型。

---

## The Pointerdrag function

`terrariumElement` 已经准备好可以拖动了；当触发 `onpointerdown` 事件时，将调用 `pointerDrag` 函数。在这一行下面添加该函数：`terrariumElement.onpointerdown = pointerDrag;`：

### Task 

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

发生了几件事情。首先，使用 `e.preventDefault();` 阻止了通常在 `pointerdown` 上发生的默认事件，这样您就可以更好地控制界面的行为。

> 在完全构建脚本文件后，尝试将此行删除并看看会发生什么。

其次，打开浏览器窗口中的 `index.html` 并检查界面。当您点击一个植物时，您可以看到如何捕获 'e' 事件。深入研究事件，看看一次 `pointerdown` 事件可以收集多少信息！

接下来，注意本地变量 `pos3` 和 `pos4` 如何设置为 `e.clientX`。您可以在检查面板中找到 `e` 的值。这些值捕获了您点击或触摸植物时的 x 和 y 坐标。您需要对植物的行为进行细粒度的控制，因此要跟踪它们的坐标。

✅ 是不是越来越清楚为什么整个应用程序都是用一个大的闭包构建的？如果不是，您将如何维护每个可拖动植物的作用域？

通过在 `pos4 = e.clientY` 下添加另外两个指针事件操作来完成初始函数：

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```
现在，您表示希望随着指针的移动，植物将被拖动，并且在取消选择植物时拖动手势会停止。`onpointermove` 和 `onpointerup` 都是与 `onpointerdown` 相同的 API 的一部分。由于您尚未定义 `elementDrag` 和 `stopElementDrag` 函数，因此界面现在将抛出错误，所以接下来要构建这两个函数。

## elementDrag 和 stopElementDrag 函数

您将通过添加另外两个内部函数来完成闭包，这些函数将处理在拖动植物和停止拖动植物时发生的情况。您想要的行为是，您可以随时拖动任何植物并将其放置在屏幕上的任何位置。这个界面相当不偏袒（例如，没有投放区域），可以通过添加、删除和重新定位植物来完全按照您的喜好设计您的温室。

### 任务

在 `pointerDrag` 的右大括号的后面添加 `elementDrag` 函数：

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
在这个函数中，您对外部函数中设置为本地变量的初始位置 1-4 进行了大量编辑。这里发生了什么？

在拖动过程中，通过将 `pos1` 重新赋值为 `pos3`（您之前设置为 `e.clientX` 的值）减去当前的 `e.clientX` 值来重新赋值 `pos1`。对 `pos2` 进行类似的操作。然后，您将 `pos3` 和 `pos4` 重置为元素的新 X 和 Y 坐标。在拖动时，您可以在控制台中查看这些更改。然后，您通过根据 `pos1` 和 `pos2` 的新位置来设置植物的新位置来操作植物的 CSS 样式，计算植物的顶部和左侧 X 和 Y 坐标，基于与这些新位置的比较来确定其偏移。

> `offsetTop` 和 `offsetLeft` 是基于父元素的位置设置 CSS 属性；其父元素可以是任何不是 `static` 定位的元素。

所有这些重新计算位置的操作都允许您对温室及其植物的行为进行微调。

### 任务

完成界面的最后一个任务是在 `elementDrag` 的右大括号之后添加 `stopElementDrag` 函数：

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

这个小函数重置了 `onpointerup` 和 `onpointermove` 事件，以便您可以重新开始拖动植物的进程，或者开始拖动新的植物。

✅ 如果不将这些事件设置为 null 会发生什么？

现在，您已经完成了您的项目！

🥇恭喜！您完成了美丽的温室。 ![finished terrarium](./images/terrarium-final.png)

---

## 🚀挑战

向您的闭包添加新的事件处理程序，以对植物进行更多操作；例如，双击植物将其移到最前面。发挥创造力！

## 讲座后测验

[讲座后测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/20)

## 复习与自学

虽然在屏幕上拖动元素似乎很简单，但根据您所寻求的效果，有许多方法可以实现，也有许多陷阱。实际上，有一个完整的[拖放 API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API)，您可以尝试使用。在这个模块中，我们没有使用它，因为我们想要的效果略有不同，但您可以在自己的项目中尝试使用这个 API，看看您能实现什么。

在[W3C文档](https://www.w3.org/TR/pointerevents1/)和[MDN web文档](https://developer.mozilla.org/docs/Web/API/Pointer_events)上找到有关指针事件的更多信息。

始终使用[CanIUse.com](https://caniuse.com/)检查浏览器的兼容性。

## 作业

[深入了解DOM](assignment.md)

