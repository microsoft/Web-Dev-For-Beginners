<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b91cbf14240ee59411b96448b994ace1",
  "translation_date": "2025-10-03T12:15:56+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "zh"
}
-->
# 浏览器扩展项目第三部分：了解后台任务和性能

## 课前测验

[课前测验](https://ff-quizzes.netlify.app/web/quiz/27)

### 简介

在本模块的前两节课中，你学习了如何构建一个表单和一个用于显示从 API 获取的数据的区域。这是一种非常标准的创建网页的方式。你甚至学会了如何异步获取数据。你的浏览器扩展几乎已经完成了。

接下来需要管理一些后台任务，包括刷新扩展图标的颜色，因此这是一个很好的时机来讨论浏览器如何管理这类任务。在构建网页资源时，我们可以从性能的角度来思考这些浏览器任务。

## 网页性能基础

> “网站性能主要涉及两件事：页面加载速度和页面代码运行速度。” -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

如何让你的网站在各种设备、各种用户和各种情况下都能快速运行，这个话题自然非常广泛。以下是一些在构建标准网页项目或浏览器扩展时需要注意的要点。

确保网站高效运行的第一步是收集其性能数据。首选工具是网页浏览器的开发者工具。在 Edge 浏览器中，你可以点击右上角的“三点”图标（设置和更多按钮），然后导航到“更多工具 > 开发者工具”，打开“性能”选项卡。你也可以使用快捷键 `Ctrl` + `Shift` + `I`（Windows）或 `Option` + `Command` + `I`（Mac）打开开发者工具。

“性能”选项卡包含一个分析工具。打开一个网站（例如 [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)），点击“记录”按钮，然后刷新网站。随时停止记录，你将能够看到生成的脚本、渲染和绘制网站的例程：

![Edge 分析工具](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.zh.png)

✅ 访问 [Microsoft 文档](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon)，了解 Edge 中性能面板的使用方法。

> 提示：为了获得网站启动时间的准确读数，请清除浏览器缓存。

选择性能时间轴中的元素，放大页面加载时发生的事件。

通过选择性能时间轴的一部分并查看摘要面板，获取页面性能的快照：

![Edge 分析工具快照](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.zh.png)

检查事件日志面板，查看是否有任何事件耗时超过 15 毫秒：

![Edge 事件日志](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.zh.png)

✅ 熟悉分析工具！打开本网站的开发者工具，看看是否存在瓶颈。加载最慢的资源是什么？最快的又是什么？

## 性能检查

通常来说，每个网页开发者在构建网站时都应该注意一些“问题区域”，以避免在部署到生产环境时出现意外。

**资源大小**：近年来，网页变得“更重”，因此加载速度也变慢了。这种“重量”部分是由于图片的使用。

✅ 浏览 [互联网档案馆](https://httparchive.org/reports/page-weight)，查看网页重量的历史变化及更多信息。

一个好的做法是确保图片经过优化，并以适合用户的大小和分辨率进行传输。

**DOM 遍历**：浏览器需要根据你编写的代码构建其文档对象模型，因此为了良好的页面性能，应该尽量简化标签，仅使用和样式化页面所需的内容。例如，与页面相关的多余 CSS 可以进行优化，仅在某些页面需要的样式不需要包含在主样式表中。

**JavaScript**：每个 JavaScript 开发者都应该注意“渲染阻塞”脚本，这些脚本必须在浏览器能够遍历和绘制 DOM 之前加载。考虑在内联脚本中使用 `defer`（如在 Terrarium 模块中所做）。

✅ 在 [网站速度测试网站](https://www.webpagetest.org/) 上尝试一些网站，了解常见的性能检查方法。

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

这里发生了什么？你传入一个值（来自上节课完成的 API 调用的碳强度），然后计算其值与颜色数组中索引的接近程度。接着，你将最接近的颜色值发送到 chrome runtime。

chrome.runtime 有一个 [API](https://developer.chrome.com/extensions/runtime)，可以处理各种后台任务，而你的扩展正在利用它：

> “使用 chrome.runtime API 检索后台页面，返回有关清单的详细信息，并监听和响应应用或扩展生命周期中的事件。你还可以使用此 API 将 URL 的相对路径转换为完全限定的 URL。”

✅ 如果你正在为 Edge 开发此浏览器扩展，可能会惊讶于你正在使用 chrome API。较新的 Edge 浏览器版本运行在 Chromium 浏览器引擎上，因此你可以利用这些工具。

> 注意，如果你想分析浏览器扩展，请从扩展本身内部启动开发者工具，因为它是一个独立的浏览器实例。

### 设置默认图标颜色

现在，在 `init()` 函数中，通过调用 chrome 的 `updateIcon` 操作，将图标设置为初始的绿色：

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### 调用函数并执行调用

接下来，通过将其添加到 C02Signal API 返回的 promise 中，调用你刚刚创建的函数：

```JavaScript
//let CO2...
calculateColor(CO2);
```

最后，在 `/dist/background.js` 中，为这些后台操作调用添加监听器：

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = new OffscreenCanvas(200, 200);
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```

在这段代码中，你为任何发送到后台任务管理器的消息添加了一个监听器。如果消息名为 'updateIcon'，则运行接下来的代码，使用 Canvas API 绘制正确颜色的图标。

✅ 你将在 [太空游戏课程](../../6-space-game/2-drawing-to-canvas/README.md) 中学习更多关于 Canvas API 的内容。

现在，重新构建你的扩展（`npm run build`），刷新并启动你的扩展，观察颜色变化。是时候去跑个腿或洗碗了吗？现在你知道了！

恭喜你，你已经构建了一个实用的浏览器扩展，并进一步了解了浏览器的工作原理以及如何分析其性能。

---

## 🚀 挑战

调查一些存在已久的开源网站，并根据其 GitHub 历史记录，看看它们是否在性能方面进行了优化。如果有，是什么时候进行的？最常见的痛点是什么？

## 课后测验

[课后测验](https://ff-quizzes.netlify.app/web/quiz/28)

## 复习与自学

考虑订阅一个 [性能新闻简报](https://perf.email/)

通过浏览器的开发者工具中的性能选项卡，调查浏览器评估网页性能的一些方法。你发现了哪些主要差异？

## 作业

[分析一个网站的性能](assignment.md)

---

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于关键信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。