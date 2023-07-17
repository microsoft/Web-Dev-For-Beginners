# 花艺瓶项目 Part 1： CSS 简介

![Introduction to CSS](../../../sketchnotes/webdev101-css.png)
> 由 [Tomomi Imura](https://twitter.com/girlie_mac) 绘制

## 课前测试

[课前测试](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/17)

### 介绍

CSS，即层叠样式表，解决了网络开发的一个重要问题：如何让你的网站看起来更漂亮。对你的应用程序进行样式设计可以使它们更实用、更美观；你还可以使用 CSS 来创建响应式网页设计（RWD）--使你的网页可以根据不同窗口大小改变呈现方式。CSS 不仅可以让你的网页看起来漂亮；它还包括动画和转换，可以为你的网页提供复杂的交互。CSS 工作组帮助维护当前的 CSS 规范；你可以在[万维网联盟的网站](https://www.w3.org/Style/CSS/members).上关注他们的工作。

> 注意，CSS 是一种不断发展的语言，就像网络上的所有东西一样，并不是所有的浏览器都支持规范的最新部分。要经常通过 [CanIUse.com](https://caniuse.com) 来检查你的实现在相关浏览器的支持情况。

在本课中，我们将为我们的在线花艺瓶添加样式，并进一步了解几个 CSS 概念：层叠（Cascade）、继承（Inheritance）和选择器（Selectors）的使用、定位（Positioning）以及使用 CSS 构建布局（Layout）。在这个过程中，我们将对花艺瓶进行布局，并创建实际的花艺瓶本身。

### 先决条件

你应该已经为你的水族箱建立了HTML，并准备好了样式。

### 任务

在你的 `terrarium` 目录中，创建一个名为 `style.css` 的新文件。在 `<head>` 部分导入该文件：

```html
<link rel="stylesheet" href="./style.css" />
```

---

## 层叠（Cascade）

层叠样式表包含了样式“层叠”的概念，即一个样式的应用由其优先级来指导。由网站作者设置的样式优先于由浏览器设置的样式。“内联（Inline）”设置的样式优先于外部样式表中设置的样式。

### 任务
在你的 `<h1>` 标签上添加内联样式 `"color: red"`：

```HTML
<h1 style="color: red">My Terrarium</h1>
```

然后，在你的`style.css`文件中添加以下代码：

```CSS
h1 {
 color: blue;
}
```

✅ 你的网页显示了哪种颜色？为什么？你能找到一个覆盖该样式的方法吗？你什么时候会想这样做，或者为什么不这样做？

---

## 继承（Inheritance）

样式会从一个父级的样式继承到一个子级的样式，这样嵌套的元素就继承了它们父级的样式。

### 任务

将 body 的字体设置为给定的字体，并检查查看嵌套元素的字体：

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

打开你的浏览器控制台的“元素”标签，观察 H1 的字体。如浏览器中所述，它的字体继承自 body：

![inherited font](images/1.png)

✅ 你能让被嵌套的样式继承其他属性吗？

---

## CSS 选择器（Selectors)

### 标签

到目前为止，你的 `style.css` 文件只有几个标签的样式，而且页面看起来很奇怪：

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

这种给标签样式的方式只能控制特别的元素。当你需要控制你的花艺瓶中许多植物的样式时，你需要利用 CSS 选择器。

### ID（Ids）

添加一些样式来布局左边和右边的容器。由于只有一个左边的容器和一个右边的容器，它们在标记中被赋予了 id 标记。要为它们设计样式，请使用 `#`。

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

在这里，你把这些容器用绝对定位放在屏幕的最左边和右边，并对它们的宽度使用了百分比，这样它们就可以在小屏幕上缩放来正常显示。

✅ 这段代码相当重复，因此不要照抄；你能找到一个更好的方法来给这些 id 样式，也许可以用一个 id 和一个 class ？你需要修改 HTML 和 CSS。

```html
<div id="left-container" class="container"></div>
```

### 类（Classes）

在上面的例子中，你为屏幕上两个独特的元素设计了样式。如果你想让样式应用于屏幕上的许多元素，你可以使用 CSS 类。利用这种方法在左边和右边的容器中布局植物。

请注意，HTML 中的每个植物都有一个 id 和 class 的组合。JavaScript 稍后会利用 id 控制植物的摆放；CSS 则会使用 class 来选择并将样式套用在相应的植物上。

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

在你的 `style.css` 文件中添加以下内容：

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

这个片段中值得注意的是相对和绝对定位的混合，我们将在下一节中介绍。我们先来看看使用百分比处理高度的方式：

你将 `plant-holder` 的高度设置为 13%，这是一个很好的数字，可以确保在不需要滚动的情况下，所有的植物都显示在每个垂直容器中。

你设置植物支架向左移动，让植物在其容器中居中。图片有大量的透明区域需要被拖拽进来，向左移动可以更好地在屏幕上显示。

然后，植物本身被赋予 150% 的最大宽度。这使得它可以随着浏览器的缩小而缩小。试着调整你的浏览器的窗口大小；植物将保持在它们的容器中，靠缩小尺寸以适应窗口大小。

同样值得注意的是 z-index 的使用，它可以控制一个元素的相对高度（这样，植物就可以坐在容器的顶部，看起来就像坐在花艺瓶内部一样）。

✅ 为什么你同时需要一个 `plant-holder` 和一个植物 CSS 选择器？

## 定位（Positioning）

混合位置属性（包括静态（Static）、相对（Relative）、固定（Fixed）、绝对（Absolute）和粘性（Sticky）位置）可能有点棘手，但如果操作得当，它可以让你很好地控制页面上的元素。

绝对定位的元素是相对于其父级元素定位的，如果没有，则根据 body 定位。

相对定位的元素是根据 CSS 指定的方向来调整其相对初始位置的位置。

在我们的例子中，`plant-holder` 是一个相对定位的元素，被定位在一个绝对定位的容器中。因此，容器被左右夹住，而嵌入其中的 `plant-holder` 会调整它在容器中的位置，为植物的竖排放置提供空间。

> `plant` 本身也有绝对定位，这是为了使其可拖动，你可以在下阶段课程中了解更多。

✅ 试着切换一下容器和 `plant-holder` 的定位类型。会发生什么？

## 布局（Layouts）

现在，你将利用你所学到的知识来建造花艺瓶本身，所有这些都是用CSS来完成的。

首先，使用CSS将 `.terrarium` div 的子级样式化为一个圆角矩形：

```CSS
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
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
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

注意这里使用的是百分比。如果你缩小你的浏览器窗口，你可以看到罐子是如何缩放的。也可以注意到罐子元素的宽度和高度百分比，以及每个元素是如何被绝对定位在中心，钉在窗口的底部的。

我们还使用 `rem` 来表示 `border-radius`，这是一种字体相对的长度。在 [CSS 规范](https://www.w3.org/TR/css-values-3/#font-relative-lengths)中阅读更多关于这种相对测量的类型。

✅ 试着改变罐子的颜色和不透明度与泥土的颜色。会发生什么？为什么？

---

## 🚀挑战

在瓶子的左边底部区域添加一个“气泡反光”，使其看起来更像玻璃。你将对 `.jar-glossy-long` 和 `.jar-glossy-short` 进行样式化，使其看起来像一个反射的光泽。下面是它的成果图：

![花艺瓶成果图](../images/terrarium-final.png)

要完成课后测验，请通过这个学习模块：[用 CSS 样式化你的 HTML 网页](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics?WT.mc_id=academic-13441-cxa)

## 课后测试

[课后测试](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/18)

## 复习 & 预习

CSS 看似简单明了，但在试图为所有浏览器和所有屏幕尺寸完美地设计一个应用程序时，却存在许多挑战。CSS-Grid 和 Flexbox 是为了使这项工作更有条理、更可靠而开发的工具。通过游玩 [Flexbox Froggy](https://flexboxfroggy.com/) 和 [Grid Garden](https://codepip.com/games/grid-garden/) 来了解这些工具。

## 作业

[CSS 重构](assignment.md)
