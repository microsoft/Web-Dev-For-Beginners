<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0bb55e0b98600afab801eea115228873",
  "translation_date": "2025-08-23T23:42:09+00:00",
  "source_file": "5-browser-extension/1-about-browsers/README.md",
  "language_code": "zh"
}
-->
# 浏览器扩展项目第一部分：关于浏览器的一切

![浏览器手绘笔记](../../../../sketchnotes/browser.jpg)
> 手绘笔记由 [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob) 提供

## 课前测验

[课前测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/23)

### 简介

浏览器扩展为浏览器增加了额外的功能。但在构建扩展之前，你需要先了解一些关于浏览器如何工作的知识。

### 关于浏览器

在这一系列课程中，你将学习如何构建一个可以在 Chrome、Firefox 和 Edge 浏览器上运行的浏览器扩展。在这一部分，你将了解浏览器的工作原理，并搭建浏览器扩展的基本框架。

那么，浏览器到底是什么呢？它是一种软件应用程序，允许终端用户从服务器访问内容并在网页上显示。

✅ 一点历史：第一个浏览器名为“WorldWideWeb”，由蒂姆·伯纳斯-李爵士于1990年创建。

![早期浏览器](../../../../5-browser-extension/1-about-browsers/images/earlybrowsers.jpg)
> 一些早期的浏览器，图片来源 [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

当用户使用 URL（统一资源定位符）地址连接到互联网时，通常通过 `http` 或 `https` 地址使用超文本传输协议，浏览器会与网络服务器通信并获取网页。

此时，浏览器的渲染引擎会将网页显示在用户的设备上，这可能是手机、台式机或笔记本电脑。

浏览器还具有缓存内容的能力，这样就不需要每次都从服务器检索内容。它们可以记录用户的浏览历史，存储“cookies”（小型数据片段，用于保存用户活动信息），以及更多功能。

一个非常重要的事情是，浏览器并不完全相同！每个浏览器都有其优点和缺点，专业的网页开发人员需要了解如何让网页在不同浏览器中都能良好运行。这包括处理小屏幕设备（如手机）以及离线用户的情况。

一个非常有用的网站是 [caniuse.com](https://www.caniuse.com)，你可能应该将其加入你喜欢使用的浏览器的书签中。当你构建网页时，使用 caniuse 提供的技术支持列表可以帮助你更好地支持用户。

✅ 如何了解哪些浏览器在你的网站用户群中最受欢迎？检查你的分析数据——你可以在网页开发过程中安装各种分析工具，它们会告诉你不同浏览器的使用情况。

## 浏览器扩展

为什么要构建浏览器扩展？当你需要快速访问经常重复的任务时，浏览器扩展是一个非常方便的工具。例如，如果你经常需要检查网页上的颜色，你可以安装一个颜色选择器浏览器扩展。如果你难以记住密码，可以使用密码管理浏览器扩展。

开发浏览器扩展也很有趣。它们通常专注于有限的任务，并能很好地完成这些任务。

✅ 你最喜欢的浏览器扩展是什么？它们完成了哪些任务？

### 安装扩展

在开始构建之前，先了解一下构建和部署浏览器扩展的过程。虽然每个浏览器在管理这一任务时略有不同，但 Chrome 和 Firefox 的流程与 Edge 的示例类似：

![Edge 浏览器截图，显示打开的 edge://extensions 页面和设置菜单](../../../../5-browser-extension/1-about-browsers/images/install-on-edge.png)

> 注意：确保开启开发者模式并允许安装来自其他商店的扩展。

基本流程如下：

- 使用 `npm run build` 构建你的扩展  
- 在浏览器中通过右上角的“设置和更多”按钮（`...` 图标）导航到扩展页面  
- 如果是新安装，选择“加载未打包”以从其构建文件夹（在我们的例子中是 `/dist`）上传新的扩展  
- 或者，如果是重新加载已安装的扩展，点击“重新加载”  

✅ 这些说明适用于你自己构建的扩展；如果要安装已发布到浏览器扩展商店的扩展，你应该导航到这些 [商店](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) 并安装你选择的扩展。

### 开始构建

你将构建一个浏览器扩展，用于显示你所在地区的碳足迹，包括能源使用情况和能源来源。该扩展将包含一个表单，用于收集 API 密钥以访问 CO2 Signal 的 API。

**你需要：**

- [一个 API 密钥](https://www.co2signal.com/)；在页面上的输入框中输入你的电子邮件地址，密钥将发送给你  
- [你的地区代码](http://api.electricitymap.org/v3/zones)，对应于 [Electricity Map](https://www.electricitymap.org/map)（例如，在波士顿，我使用“US-NEISO”）  
- [起始代码](../../../../5-browser-extension/start)。下载 `start` 文件夹；你将在此文件夹中完成代码  
- [NPM](https://www.npmjs.com) - NPM 是一个包管理工具；在本地安装它，`package.json` 文件中列出的包将被安装以供你的网页资源使用  

✅ 在这个 [优秀的学习模块](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-77807-sagibbon) 中了解更多关于包管理的信息。

花点时间浏览代码库：

dist  
    -|manifest.json（默认设置在这里）  
    -|index.html（前端 HTML 标记在这里）  
    -|background.js（后台 JS 在这里）  
    -|main.js（构建后的 JS）  
src  
    -|index.js（你的 JS 代码写在这里）  

✅ 一旦你准备好 API 密钥和地区代码，请将它们存储在某个笔记中以备后用。

### 构建扩展的 HTML

这个扩展有两个视图。一个用于收集 API 密钥和地区代码：

![完成的扩展在浏览器中打开，显示一个包含地区名称和 API 密钥输入的表单。](../../../../5-browser-extension/1-about-browsers/images/1.png)

另一个用于显示地区的碳使用情况：

![完成的扩展显示 US-NEISO 地区的碳使用值和化石燃料百分比。](../../../../5-browser-extension/1-about-browsers/images/2.png)

我们先从构建表单的 HTML 开始，并用 CSS 对其进行样式化。

在 `/dist` 文件夹中，你将构建一个表单和一个结果区域。在 `index.html` 文件中，填充表单区域：

```HTML
<form class="form-data" autocomplete="on">
	<div>
		<h2>New? Add your Information</h2>
	</div>
	<div>
		<label for="region">Region Name</label>
		<input type="text" id="region" required class="region-name" />
	</div>
	<div>
		<label for="api">Your API Key from tmrow</label>
		<input type="text" id="api" required class="api-key" />
	</div>
	<button class="search-btn">Submit</button>
</form>	
```  
这是表单，保存的信息将被输入并存储到本地存储中。

接下来，创建结果区域；在最后一个表单标签下添加一些 div：

```HTML
<div class="result">
	<div class="loading">loading...</div>
	<div class="errors"></div>
	<div class="data"></div>
	<div class="result-container">
		<p><strong>Region: </strong><span class="my-region"></span></p>
		<p><strong>Carbon Usage: </strong><span class="carbon-usage"></span></p>
		<p><strong>Fossil Fuel Percentage: </strong><span class="fossil-fuel"></span></p>
	</div>
	<button class="clear-btn">Change region</button>
</div>
```  
此时，你可以尝试构建。确保安装此扩展的包依赖项：

```
npm install
```  

此命令将使用 npm（Node 包管理器）安装 webpack，用于扩展的构建过程。Webpack 是一个处理代码编译的打包工具。你可以通过查看 `/dist/main.js` 来看到此过程的输出——你会发现代码已经被打包。

目前，扩展应该可以构建，并且如果你将其部署到 Edge 作为扩展，你会看到一个整齐显示的表单。

恭喜你，你已经迈出了构建浏览器扩展的第一步。在后续课程中，你将使其更加功能化和实用。

---

## 🚀 挑战

浏览一个浏览器扩展商店并安装一个扩展到你的浏览器。你可以用有趣的方式检查它的文件。你发现了什么？

## 课后测验

[课后测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/24)

## 复习与自学

在本课中，你学习了一些关于网页浏览器历史的知识；利用这个机会，通过阅读更多相关历史来了解万维网的发明者如何设想它的用途。一些有用的网站包括：

[网页浏览器的历史](https://www.mozilla.org/firefox/browsers/browser-history/)

[万维网的历史](https://webfoundation.org/about/vision/history-of-the-web/)

[蒂姆·伯纳斯-李访谈](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## 作业

[重新设计你的扩展](assignment.md)

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于关键信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。