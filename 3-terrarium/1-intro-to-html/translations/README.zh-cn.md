# 花艺瓶项目 Part 1： HTML 简介

![HTML 简介](/sketchnotes/webdev101-html.png)
> 由 [Tomomi Imura](https://twitter.com/girlie_mac) 绘制

## 课前测试

[课前测试](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/15?loc=zh_cn)

### 介绍

HTML，全称 HyperText Markup Language，它是网页的骨架。如果说 CSS 在装扮你的 HTML，并且 JavaScript 让它活起来，HTML 则是你的网页应用程序的身体。而 HTML 的语法也正好能证明这种看法，它包含了名为 "head"（头部）、 "body"（身子） 和 "footer"（脚部） 的标签。

在这次课程中，我们将会使用 HTML 去布局我们的虚拟**花艺瓶**界面的骨架。它将包含一个标题和三列内容：左右两列放置的可以拖拽的植物，中间的区域放置的是一个玻璃造型的花艺瓶。完成这堂课的内容，你应该可以看到放置着植物的列，但界面可能看起来有点奇怪。但没必要担心，在后面的内容里你会使用 CSS 编写样式使得它变得好看起来。

### 任务

在你的电脑上，创建一个名为 'terrarium' 的文件夹，并且在其中创建 'index.html'。你可以在 Visual Studio Code 中打开一个新的 VS Code 窗口去创建你的 terrarium 文件夹，点击「打开文件夹」来查看你的文件目录。在侧边管理面板中点击微小的「文档」按钮來创建新的文件：

![VS Code 的侧边管理面板](../images/vs-code-index.png)

也可以这样

在 git bash 中执行以下命令：
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` 或是 `nano index.html`

> index.html 文件会被你的浏览器识别为文件夹中的默认要打开的文件。例如这个网址：`https://anysite.com/test` 所对应的项目，是以包含着名为 `test` 目录且该目录存在 `index.html` 文件的结构构建的。并且 `index.html` 不需要展示在网址的末尾。

---

## DocType（文档类型声明） 和 html 标签

HTML 文件的第一行就是文档类型声明。要将这一行内容放在文档的最顶端的位置实在会让人有点惊讶，但是它却能告诉旧版本浏览器，它应该使用当前指定的 HTML 规范以标准的模式来渲染页面。

> 提示：在 VS Code 中，你可以把鼠标悬浮在标签上，以此来获取 MDN 参考指南中关于其使用的信息。

文档的第二行就应该是 `<html>` 的起始标签，后面应该跟着的是 `</html>` 的结束标签。这对标签是我们编写的界面的根元素。

### 任务

把这几行内容写到你的 `index.html` 文档开头：

```HTML
<!DOCTYPE html>
<html></html>
```

✅ 通过设置带有查询字符串（query string）的 DocType 可以设定几种不同的模式：[怪异模式与标准模式](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)。这些模式用于支持现在非常不常用的古老浏览器(Netscape Navigator 4 和 Internet Explorer 5)。你仍可以使用标准的文档类型声明。

---

## 文档的 'head'（脑袋）

HTML 文档中的 'head' 包含的区域有很多关于页面的重要信息，它也被称作[元数据(metadata)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)。在我们的例子中，我们告诉 web 服务器这个页面将依据哪些信息被发送进行渲染，主要是四种:

-   网页的标题
-   网页的元数据，它包含：
    -   字符集(Character Set)，说明在页面中使用的字符编码。
    -   浏览器信息，包括 `x-ua-compatible`，表示支持 IE=edge 浏览器
    -   关于视图在加载时应该如何表现的信息。将视口设置为初始比例为 1 可以控制页面首次加载时的缩放级别。

### 任务

在文档中，新增 'head' 部分在 `<html>` 的标签里。

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ 当你把视图信息标签的内容设置成这个样子 `<meta name="viewport" content="width=600">` 会发生什么事情？ 请阅读更多关于 [Viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag) 的信息吧。

---

## 文件的 `body`（身子）

### HTML 标签

在 HTML 中，往你的 .html 文档中添加标签去创建元素到你的页面中。每个标签都通常都有一个开始标签和结束标签，像是：`<p>hello</p>` 就表明是一个段落。 使用一组 `<body>` 标签放在 `<html>` 标签中以创建你界面的身体部分，现在你的文档应该变成下面这样：

### 任务

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

现在，你可以开始构建你的页面了。一般来说，你会使用 `<div>` 标签在页面中创建单独的元素。我们将创建一系列包含图片的 `<div>` 元素。

### 图片

有一个不需要结束标签的 html 标签就是 `<img>` 标签，因为它有一个 `src` 元素，它包含页面渲染该项所需的所有信息。

在你的项目目录中创建一个名为 `images` 的文件夹，把[源代码文件夹](../../solution/images)中所有的图片都放到新建的文件夹中。（里面总共有14张植物的图片）

### 任务

把这些植物图片分为两列放到 `<body></body>` 标签里：

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> 笔记： Spans 和 Divs。 Divs 是块元素，而 Spans 是行内元素。如果把它们替换了会发生什么？

更新完我们代码后，屏幕上植物图片都展示出来了。只是看起来十分糟糕，因为我们还没有用 CSS 样式来美化它们，我们会在下一节课里面去处理。

每个图像都有 alt 文本，当你无法看到或者无法渲染图片的时候就会出现。这是可访问性的一个重要属性。你可以在在以后的课程中了解更多关于可访问性的内容；现在，只需要记住，如果用户由于某种原因不能查看图像，alt 属性为图像提供替代信息(造成的原因可能有 加载太慢、src 属性错误、或者用户可能使用的是屏幕阅读器等)。

✅ 你注意到每张图片都有相同的 alt 标签了吗？这是好的实现吗？为什么或为什么不？你能改进这个代码吗？

---

## 语义化的标签

一般来说，在编写 HTML 时，最好使用有意义的 “语义” 。这是什么意思？这意味着你使用 HTML 标签来表示它们所被设计的数据或交互的类型。举个例子，网页上的核心标题就应该使用 `<h1>` 标签。

在开头的 `<body>` 标签下面添加以下一行:

```html
<h1>My Terrarium</h1>
```

使用语义化的标签例如：标题使用 `<h1>` 、无序列表使用 `<ul>` ，这样能帮助屏幕阅读器理解页面的内容。一般来说，按钮需要写作 `<button>` 而列表被写作 `<li>`。并且我们当然 _可以_ 使用有特殊样式的包含点击处理的 `<span>` 元素来当作按钮使用，但如果元素以按钮的形式出现，残疾用户可以很方便的使用现有的技术来确定按钮在页面上的位置，并与之交互。因此，尽量使用语义化的标记。

✅ 看看屏幕阅读器是[如何去处理的一个网页的](https://www.youtube.com/watch?v=OUDV1gqs9GA)。你看到了非语义化标签对他们造成的障碍了吗？

## 花艺瓶

这个界面的最后一部分涉及创建标记，这些标记后面将被装饰成一个花艺瓶。

### 任务

把这段代码添加到最后一个 `</div>` 标签上面:

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

✅ 即使在屏幕上添加了这些内容，你仍然看不到任何东西渲染出来。为什么?

---

## 🚀 挑战

HTML 中还有一些狂野的'旧'标签，玩起来仍然很有趣。虽然[这些标签](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Obsolete_and_deprecated_elements)不推荐你使用，但是，你还是可以试试，能否用 `<marquee>` 标签让 h1 标题文字变成纵向展示的吗？（如果你这么尝试了，不要忘了在后面移除它们）

## 课后测试

[课后测试](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/16?loc=zh_ch)

## 复习 & 预习

HTML是 '久经考验的' 构建模块系统，它帮助构建了今天的 web 。通过研究一些旧的和新的标签来了解它的历史。你能找出为什么有些标签被弃用而有些被添加吗？未来可能引入哪些标签？

要了解更多关于为 web 和移动设备建立网站的信息，请访问：[Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-13441-cxa)。


## 作业

[练习你的 HTML：建立一个博客模型](assignment.zh-cn.md)
