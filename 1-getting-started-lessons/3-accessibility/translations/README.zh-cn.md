# 创造无障碍网页

![All About Accessibility](/sketchnotes/webdev101-a11y.png)
> 涂鸦笔记作者：[Tomomi Imura](https://twitter.com/girlie_mac)

## 课前小测
[课前小测](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/5?loc=zh_cn)

> 互联网的力量存在于其普适性中，让包括残障人士在内的每个人都能访问互联网，是其中不可或缺的一方面。
>
> —— Timothy Berners-Lee， W3C（万维网联盟）主席、万维网发明者

这段引言恰当地强调了创造无障碍网页的重要性。一个无法被所有人顺畅访问的应用按照定义来说是排他的，作为 Web 开发者我们应该始终将无障碍性牢记在心中。从一开始就关注到这一点，可以让你在确保每个人都能顺利访问你创造的页面这一方面做得很优秀。这节课中，你会了解到一些能帮助你确保你的网站资源无障碍的工具，也会学到该怎样将无障碍性牢记在心中。

## 相关工具

### 屏幕阅读器（Screen readers）

屏幕阅读器可以说是最知名的无障碍工具之一。

[屏幕阅读器](https://zh.wikipedia.org/wiki/%E8%9E%A2%E5%B9%95%E9%96%B1%E8%AE%80%E5%99%A8)在视力障碍者中被广泛使用。就像我们会花时间来确保浏览器正确地传达了我们想要分享的信息， 我们也必须要确保屏幕阅读器也可以达到同样的效果。

一般来说，屏幕阅读器会从上到下用语音阅读一个页面。如果你的页面全是文字，阅读器传达信息的方式和浏览器会是基本相似的。当然，网页几乎不会只有文字，还会包含链接、图像、颜色以及其他视觉组件。我们也必须得确保这些信息可以被屏幕阅读器正确阅读。

每一位 Web 开发者都需要去熟悉屏幕阅读器。正如上面强调的一样，这是你的用户会用到的一种客户端。就像你很熟悉浏览器的操作一样，你也应该去学习如何操作屏幕阅读器。幸运的是，多数操作系统都内置了屏幕阅读器。

一些浏览器也有内置的工具和扩展程序，可以读出文字甚至提供一些基本的导航功能，比如[这些以无障碍为目的的 Edge 浏览器工具](https://support.microsoft.com/zh-cn/microsoft-edge/microsoft-edge-%E4%B8%AD%E7%9A%84%E8%BE%85%E5%8A%A9%E5%8A%9F%E8%83%BD-4c696192-338e-9465-b2cd-bd9b698ad19a)。这些也是重要的无障碍工具，但是工作方式和屏幕阅读器非常不同，所以不该被错误地用来作为屏幕阅读器的测试工具。

✅ 试用一下屏幕阅读器和浏览器文本阅读器。在 Windows 系统中默认带有[讲述人](https://support.microsoft.com/zh-cn/windows/%E8%AE%B2%E8%BF%B0%E4%BA%BA%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97-e4397a0d-ef4f-b386-d8ae-c172f109bdb1)，也可以安装 [JAWS](https://webaim.org/articles/jaws/) 和 [NVDA](https://www.nvaccess.org/about-nvda/)。在 macOS 和 iOS 中默认装有[旁白](https://support.apple.com/zh-cn/guide/voiceover/welcome/10)。

### 缩放（Zoom）

另一个视力障碍者常用的工具是缩放。最基本的缩放功能是静态缩放，通过 `Control + 加号（+）` 或者降低屏幕分辨率达成。这样的缩放会导致整个页面尺寸被调整，所以使用[响应式设计（responsive design）](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design)对于提高了缩放级别的情况下的用户体验非常重要。

另一类缩放需要借助特定的软件来放大屏幕上的部分区域，就像一个真正的放大镜一样。在 Windows 上内置了[放大镜](https://support.microsoft.com/zh-cn/windows/%E4%BD%BF%E7%94%A8%E6%94%BE%E5%A4%A7%E9%95%9C%E5%8F%AF%E4%BD%BF%E5%B1%8F%E5%B9%95%E4%B8%8A%E7%9A%84%E5%86%85%E5%AE%B9%E6%9B%B4%E6%98%93%E4%BA%8E%E6%9F%A5%E7%9C%8B-414948ba-8b1c-d3bd-8615-0e5e32204198)，也可以使用 [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) 这样有更多特性和更大用户群体的第三方软件。在 macOS 和 iOS 上则内置了[放大器](https://www.apple.com.cn/accessibility/vision/)

### 对比度检查器（Contrast checkers）

我们要谨慎地挑选网页上的配色，以照顾到色盲人群和难以区分低对比度颜色的用户的需要。

✅ 用类似 [WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=zh-CN) 这样的浏览器插件来检测一下你喜爱的网站的颜色使用情况。你学到了什么？

### Lighthouse

在浏览器开发者工具中，你可以找到 Lighthouse 工具。这个工具可以让你一睹一个网站的无障碍性（以及其他性能分析）。尽管并不建议完全依赖 Lighthouse，但将 100% 满分作为一个基础将会很有用。

✅ 在你的浏览器开发者工具中找到 Lighthouse 栏，然后用它分析任何一个网站。你发现了什么？

## Designing for accessibility

无障碍性（accessibility）是一个相对比较大的主题，为了帮助你更深入地了解，这里许多你可以参考的资源。

- [Accessible U - 明尼苏达大学](https://accessibility.umn.edu/your-role/web-developers)

尽管我们没法在这里涵盖创建一个无障碍网站的方方面面，但下面还是提供了一些你会想要去实践的核心信条。从一开始就设计一个无障碍页面**总是**比回过头来让一个已经存在的页面变得无障碍会更容易。

## 不错的展示原则

### 使用安全色色板

每个人看待世界的方式都不尽相同，当然也包括颜色。当你为你的站点选择一套配色时，应该确保其对所有人都是无障碍的。这里有一个非常棒的[生成安全色色板的工具](http://colorsafe.co/)。

✅ 举出一个配色非常糟糕的网站的例子。你认为它糟糕在哪？

### 正确使用 HTML

使用 CSS 和 JavaScript 有能力让任何元素看起来在控制效果上是任何一种类型的元素。比如 `<span>` 可以被用来创建出一个 `<button>`，而 `<b>` 则可能会被弄成一个超链接。尽管有人可能认为这样会更加容易调整样式，但是它不会传达任何有效信息给屏幕阅读器。请使用合适的 HTML 来建立对于页面的控制效果，比如你想要一个超链接，请使用 `<a>` 标签。用正确的 HTML 来实现正确的控制效果，这就叫做实践了“语义化 HTML”（Semantic HTML）。

✅ 去任意一个网站看看设计师和开发者是否合理使用了 HTML。你能不能找出一个本该是链接的按钮？提示：在浏览器中右键点击并且选择“查看网页源代码”来查看底层代码（译注：此处使用“检查”/“审查元素”来观察或许会更加合适）。

### 建立描述性的标题层级

屏幕阅读器使用者为了寻找信息和在页面中导航，会[非常依赖页面中的标题](https://webaim.org/projects/screenreadersurvey8/#finding)。使用描述性的标题内容和语义化的标题标签，对于创建一个对屏幕阅读器使用者友好的网站是非常重要的。

### 使用良好的视觉线索

CSS 让你可以完全随意地控制页面中任何元素的外观。你可以创建一个没有轮廓的文本框或者一个没有下划线的超链接。但不幸的是，移除这些视觉线索会让一些习惯依靠这些线索的使用者难以认出它们的控制功能。

## 链接文本的重要性

对于网页导航来说，超链接非常关键。因此，确保屏幕阅读器可以准确阅读链接才能保证所有用户都可以顺利地在你的网站导航。

### 屏幕阅读器与链接

可想而知，屏幕阅读器会像阅读页面中其他文本一样阅读链接的文本。将这点牢记在心后，可以看看下面两种看起来似乎还能接受的写法。

> 小蓝企鹅，有时也被称作仙企鹅，是世界上最小的企鹅。[点击这里](https://zh.wikipedia.org/wiki/%E5%B0%8F%E8%97%8D%E4%BC%81%E9%B5%9D)来查看更多信息。

> 小蓝企鹅，有时也被称作仙企鹅，是世界上最小的企鹅。访问 https://zh.wikipedia.org/wiki/%E5%B0%8F%E8%97%8D%E4%BC%81%E9%B5%9D 来查看更多信息。

> **注意** 下文即将提到，你应该 **避免** 使用上面这两种写法。

记住，屏幕阅读器和浏览器功能上有一些差异，是不同的交互媒介。

### 使用 URL 的问题

屏幕阅读器会阅读文本，如果 URL 出现在了文本里，屏幕阅读器就会直接读出这段 URL。一般来说，URL 直接传递的信息都意义不大，而且听起来会很吵。如果你曾经在手机中将一段包含 URL 的文字用语音播放出来，就可能有类似体会。

### 使用“点击这里”的问题

屏幕阅读器也有只阅读页面中超链接的功能，就仿佛一个有视力的人扫视页面来找到所有链接一样。如果所有的链接文本都是“点击这里”，用户听到的就会一直是“点击这里，点击这里，点击这里，点击这里，点击这里……”，完全无法区分各个链接。

### 优秀的链接文本

优秀的链接文本会简要地描述链接另一侧是什么。在上面谈论小蓝企鹅的例子中，链接到的是关于这个物种的维基百科页面。使用*小蓝企鹅*作为链接文本将会非常合适，因为它能清楚地告诉人们如果他们点击了这个链接会了解到什么 —— 小蓝企鹅。

> [小蓝企鹅](https://zh.wikipedia.org/wiki/%E5%B0%8F%E8%97%8D%E4%BC%81%E9%B5%9D)，有时也被称作仙企鹅，是世界上最小的企鹅。

✅ 上网随便逛几分钟，找一找使用了难以理解的链接策略的网页。对比一下其他有更好的链接的网站，你有何体会？

#### 关于搜索引擎

保证你的网站对所有人都无障碍还能带来一个额外的好处：可以帮助搜索引擎导航你的网站。搜索引擎会使用链接文本来了解页面的主题，所以使用好的链接文本其实利人利己！

### ARIA

想象一个下面这样的网页：

| 产品         | 详情        | 预订        |
| ------------ | ----------- | ----------- |
| 小玩意       | [详情]('#') | [预订]('#') |
| 超棒的小玩意 | [详情]('#') | [预订]('#') |

在这个例子中，复制“详情”和“预订”这两个文本对于使用浏览器的用户来说是没有理解障碍的。然而，使用屏幕阅读器的用户则只会听到对 *详情* 和 *预订* 这两个词的两次毫无上下文的复读。

为了处理这类情况，HTML 支持一些被称为 [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA) 的属性。这些属性让你可以为屏幕阅读提供一些额外的信息。

> **注意**：正如 HTML 的其他方面一样，浏览器和屏幕阅读器对 ARIA 的支持情况可能会不同，但是多数主流客户端都是支持 ARIA 属性的。

当页面格式不允许你直接用文本描述链接时，你可以使用 `aria-label` 属性来对链接进行描述。对于一个小玩意的详情描述可以被设置为：

``` html
<a href="#" aria-label="小玩意的详情">详情</a>
```

✅ 一般来说，使用此前提到的语义化标签会比使用 ARIA 更好，但是有时确实存在没法找到合适的语义标签来描述一些 HTML 元素。比如“树”，没有和“树”语义等价的 HTML 标签，所以你可以给这个元素选用一般的 `<div>` 标签，然后加上合理的 role 和 aria 属性值。[MDN ARIA 文档](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA)有更多有用的相关信息。

```html
<h2 id="tree-label">文件查看器</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">上传</div>
</div>
```

## 图像

毫无疑问，屏幕阅读器是没法自动阅读图像内容的，但是让图像变得无障碍并不会很麻烦 —— 这正是 `alt` 属性所做的事。所有有意义的图像都应该有一个 `alt` 属性来描述它们的内容是什么。纯装饰性的图像应该有一个被设为空字符串的 `alt` 属性：`alt=""`，这样可以防止屏幕阅读器画蛇添足地描述这些装饰性图像。

✅ 没错，搜索引擎也无法理解图片的内容，它们也会使用 alt 属性中的文本。这又一次证明，确保你的页面无障碍可以带来额外的好处！

## 键盘

一些用户没法使用鼠标或者触控板，而是只能依赖键盘交互来从一个元素切换到下一个元素。在你的网站上以有逻辑的顺序来展示内容是很重要的，这样一来键盘用户可以在往下浏览页面时访问到每一个可交互元素。如果你用你语义化标签来构建页面并且用 CSS 来控制它们的视觉外观，你的页面就应该会是可用键盘导航的，但是最好还是手动测试一遍。可在[键盘导航策略](https://webaim.org/techniques/keyboard/)了解更多关于这方面的内容。

✅ 前往任意一个网站然后尝试只使用你的键盘来导航。哪些可以正常使用？哪些不可以？为什么？

## 总结

只有部分人才能顺利访问的网页算不上真正的万维网（world-wide web）。确保你创造的网站无障碍地最好方式就是从一开始就贯彻无障碍的最佳实践。尽管这可能会引入额外的步骤，但现在就将这些技术包含在你的工作流程中将意味着你创造的所有页面都会是无障碍的。

---

## 🚀 挑战

利用你学到的策略，尽可能将下方的 HTML 代码重写为无障碍的。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## 课后小测
[课后小测](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/6?loc=zh_cn)

## 复习 & 自学

许多政府有关于无障碍要求的法律，阅读一下你的国家与无障碍相关的法律。它涉及了哪些方面，又有哪些方面没有涉及？[这个政府网站](https://accessibility.blog.gov.uk/)是一个例子。

## 作业
 
[分析一个非无障碍网站](assignment.zh-cn.md)

参考：[Turtle Ipsum](https://github.com/Instrument/semantic-html-sample)，作者：Instrument
