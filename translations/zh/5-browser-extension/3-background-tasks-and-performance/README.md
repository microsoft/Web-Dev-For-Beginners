<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f198c6b817b4b2a99749f4662e7cae98",
  "translation_date": "2025-08-23T23:45:15+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "zh"
}
-->
# 浏览器扩展项目第3部分：了解后台任务和性能

## 课前测验

[课前测验](https://ff-quizzes.netlify.app/web/quiz/27)

### 简介

在本模块的前两节课中，你学习了如何构建一个表单和用于显示从 API 获取的数据的区域。这是一种非常标准的创建网页内容的方式。你甚至还学会了如何异步获取数据。你的浏览器扩展几乎已经完成了。

现在需要管理一些后台任务，包括刷新扩展图标的颜色，因此这是一个很好的时机来讨论浏览器如何管理这类任务。在构建网页资源时，让我们从性能的角度来思考这些浏览器任务。

## 网页性能基础

> “网站性能关乎两件事：页面加载速度和页面上代码的运行速度。” —— [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

如何让你的网站在各种设备、各种用户和各种情况下都能快速运行，这个话题自然非常广泛。以下是一些在构建标准网页项目或浏览器扩展时需要牢记的要点。

确保网站高效运行的第一步是收集其性能数据。最直接的地方就是在你的网页浏览器的开发者工具中。在 Edge 浏览器中，你可以点击“设置和更多”按钮（浏览器右上角的三点图标），然后导航到“更多工具 > 开发者工具”，并打开“性能”选项卡。你也可以使用快捷键 `Ctrl` + `Shift` + `I`（Windows）或 `Option` + `Command` + `I`（Mac）打开开发者工具。

“性能”选项卡包含一个分析工具。打开一个网站（例如尝试 [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)），点击“记录”按钮，然后刷新页面。随时停止记录，你将能够看到生成的“脚本”、“渲染”和“绘制”网站的例程：

![Edge 分析工具](../../../../5-browser-extension/3-background-tasks-and-performance/images/profiler.png)

✅ 查看 [Microsoft 文档](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) 中关于 Edge 性能面板的内容

> 提示：为了获得网站启动时间的准确读数，请清除浏览器缓存

选择性能时间轴中的元素，放大页面加载时发生的事件。

通过选择性能时间轴的一部分并查看摘要面板，获取页面性能的快照：

![Edge 分析工具快照](../../../../5-browser-extension/3-background-tasks-and-performance/images/snapshot.png)

检查事件日志面板，看看是否有任何事件耗时超过 15 毫秒：

![Edge 事件日志](../../../../5-browser-extension/3-background-tasks-and-performance/images/log.png)

✅ 熟悉你的分析工具！打开本网站的开发者工具，看看是否存在瓶颈。加载最慢的资源是什么？最快的又是什么？

## 性能分析检查

通常来说，每个网页开发者在构建网站时都应该注意一些“问题区域”，以避免在部署到生产环境时出现意外。

**资源大小**：近年来，网页变得“更重”了，因此也更慢了。这部分重量与图片的使用有关。

✅ 浏览 [Internet Archive](https://httparchive.org/reports/page-weight) 以查看页面重量的历史视图及更多信息。

一个好的做法是确保图片经过优化，并以适合用户的大小和分辨率进行交付。

**DOM 遍历**：浏览器需要根据你编写的代码构建其文档对象模型（DOM），因此为了良好的页面性能，应该尽量减少标签的使用，仅使用和样式化页面所需的内容。例如，与页面相关的多余 CSS 可以进行优化；仅在某个页面需要使用的样式不需要包含在主样式表中。

**JavaScript**：每个 JavaScript 开发者都应该注意“阻塞渲染”的脚本，这些脚本必须在浏览器遍历和绘制 DOM 之前加载完成。考虑在内联脚本中使用 `defer`（如在 Terrarium 模块中所做的那样）。

✅ 在 [网站速度测试网站](https://www.webpagetest.org/) 上尝试一些网站，了解更多关于确定网站性能的常见检查。

现在你已经了解了浏览器如何渲染你发送的资源，让我们看看完成扩展所需的最后几步：

### 创建一个计算颜色的函数

在 `/src/index.js` 中，在你设置的用于访问 DOM 的一系列 `const` 变量之后，添加一个名为 `calculateColor()` 的函数：

```JavaScript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

这里发生了什么？你传入一个值（来自上一课完成的 API 调用的碳强度值），然后计算其值与颜色数组中索引的接近程度。接着，你将最接近的颜色值发送到 chrome runtime。

chrome.runtime 提供了 [一个 API](https://developer.chrome.com/extensions/runtime)，用于处理各种后台任务，而你的扩展正在利用它：

> “使用 chrome.runtime API 检索后台页面，返回清单的详细信息，并监听和响应应用或扩展生命周期中的事件。你还可以使用此 API 将 URL 的相对路径转换为完全限定的 URL。”

✅ 如果你正在为 Edge 开发此浏览器扩展，可能会惊讶于你正在使用 chrome API。较新的 Edge 浏览器版本运行在 Chromium 浏览器引擎上，因此你可以利用这些工具。

> 注意，如果你想分析浏览器扩展，请从扩展本身启动开发者工具，因为它是一个独立的浏览器实例。

### 设置默认图标颜色

现在，在 `init()` 函数中，通过调用 chrome 的 `updateIcon` 操作，将图标初始设置为通用的绿色：

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```

### 调用函数并执行调用

接下来，通过将你刚刚创建的函数添加到 C02Signal API 返回的 promise 中来调用它：

```JavaScript
//let CO2...
calculateColor(CO2);
```

最后，在 `/dist/background.js` 中，为这些后台操作调用添加监听器：

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```

在这段代码中，你为任何发送到后台任务管理器的消息添加了一个监听器。如果消息名为 'updateIcon'，则运行接下来的代码，使用 Canvas API 绘制适当颜色的图标。

✅ 你将在 [太空游戏课程](../../6-space-game/2-drawing-to-canvas/README.md) 中了解更多关于 Canvas API 的内容。

现在，重新构建你的扩展（`npm run build`），刷新并启动你的扩展，观察颜色的变化。是时候去跑个腿或洗碗了吗？现在你知道了！

恭喜你，你已经构建了一个有用的浏览器扩展，并进一步了解了浏览器的工作原理以及如何分析其性能。

---

## 🚀 挑战

调查一些存在已久的开源网站，并根据它们的 GitHub 历史，看看它们是否在这些年间进行了性能优化。如果有，最常见的痛点是什么？

## 课后测验

[课后测验](https://ff-quizzes.netlify.app/web/quiz/28)

## 复习与自学

考虑订阅一个 [性能相关的新闻通讯](https://perf.email/)

通过浏览器的开发者工具中的性能选项卡，研究浏览器评估网页性能的一些方法。你发现了哪些主要差异？

## 作业

[分析一个网站的性能](assignment.md)

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档作为权威来源。对于关键信息，建议使用专业人工翻译。因使用本翻译而引起的任何误解或误读，我们概不负责。