# 编程语言概述与工具介绍

这节课涵盖了编程语言的基础知识，涉及到的内容适用于如今大多数现代编程语言。在“工具介绍”部分，你会了解到一些对开发者很有用的软件。

![Intro Programming](/sketchnotes/webdev101-programming.png)
> 涂鸦笔记作者：[Tomomi Imura](https://twitter.com/girlie_mac)

## 课前小测
[课前小测](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/1?loc=zh_cn)

## 大纲

这节课我们将会介绍：

- 什么是编程？
- 编程语言的种类
- 程序的基本要素
- 对专业开发者很有用的软件和工具

## 什么是编程？

编程（programming） ，俗称写代码（coding），是向诸如计算机或移动设备之类的设备写入指令的过程。我们使用编程语言来编写这些指令，然后交由设备去解释（interpret）。这些指令的集合有许多叫法，常见的有*程序（program）*、*计算机程序（computer program）*、*应用程序（application / app）*和*可执行文件（executable）*。

*程序*可以是任何由代码编写的东西，比如网站、游戏和手机应用。尽管的确有办法不编写任何代码就创建一个程序，但是设备还是会去解析其底层逻辑，这个逻辑大概率是由代码编写的。所谓*正在运行*或是*执行代码*的程序所做的其实都是执行指令。你现在用来阅读这段文字的设备，也正在运行一个将文字输出到你的屏幕上的程序。

✅ 查一查：谁被认为是世界上第一位计算机程序员？

## 编程语言

编程语言的主要目的是：让开发者可以构建指令并将它们传递给设备。设备只能理解二进制（一堆 0 和 1），这对*大多数*开发者来说实在不算是高效的交流方式，而编程语言正是人类与计算机之间沟通的桥梁。

编程语言有着不同的形式，也可能用于不同的目的。比如 JavaScript 主要用于 Web 应用，而 Bash 则主要用于操作系统。

对于设备来说看，解释*低级语言（low level languages）*的指令一般会比解释*高级语言（high level languages）*的指令需要更少的步骤。然而，高级语言因为其可读性和兼容性会更加常用。JavaScript 就是一种高级语言。

下面的代码展示了高级语言（以 JavaScript 为例）和低级语言（以 ARM 汇编代码为例）的区别：

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

不管你信不信，*它们做的事完全相同*：打印斐波那契数列的前 10 位。

✅ [斐波那契数列](https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97)是一个由 0 和 1 开头，每个数字都是它之前两个数字之和的数列。

## 程序的基本要素

程序中的单条指令（instruction）被称作*语句（statement）*，常用一个字符或是空行来标识指令结束的位置，这种标识可被称为*终止符（terminates）*。程序的结束方式也因语言而异。

多数程序都需要用到从用户或其他地方获取到的数据（data），此时语句会根据这些数据来执行指令。数据会改变程序的行为，所以编程语言提供了一种临时存储此后会被用到的数据的方法。这些数据被称作*变量（variables）*。变量也是语句，用来指示设备将数据存到它的内存中。和代数学中的变量类似，程序中的变量也有独立的命名，其值在之后也可能发生改变。

有的语句可能不会被设备执行，这通常是开发者有意为之，否则就是发生了意外的错误。这样的控制可以让应用程序更加稳定和可维护。一般来说这些控制的切换会在满足特定条件的情况下发生。`if..else` 语句就是一个在现代编程语言中常见的用于控制程序的语句。

✅ 你会在此后的课程中学到更多关于此类语句的知识

## 工具介绍

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "工具介绍")

在这一部分，你将会了解到一些能在你的专业开发之旅中颇有帮助的软件。

**开发环境（development environment）** 指的是一位开发者自己在编写软件时常会用到的工具和功能的集合。其中一些工具会按照开发者的特定需求被自定义配置，这些工具集也会随着时间发生变化，原因可能是开发者在工作或个人项目中改变了需求的优先级，抑或是切换到了另一种编程语言。开发环境往往因人而异。

### 编辑器

编辑器（Editors）是软件开发中最关键的工具之一，是你用来编写甚至运行你的代码的地方。

开发者选用编辑器还有这些原因：

- *调试（Debugging）* 通过逐步或逐行地运行代码来发现漏洞和错误。一些编辑器自身带有调试功能，或者可以被自定义添加对特定编程语言的调试功能。
- *语法高亮（Syntax highlighting）* 为代码添加颜色和文本格式以便阅读。多数编辑器都可以对语法高亮进行自定义。
- *插件和集成（Extensions and Integrations）* 开发者可以根据自身需要为编辑器添加其原生本不包含的功能。比如，许多开发者需要为代码撰写文档来解释其工作原理，就会安装一个拼写检查插件来检查有没有拼写错误。多数插件都只支持特定的编辑器，多数编辑器也会提供搜索可用插件的方法。
- *自定义（Customization）* 多数编辑器都是高度可自定义的，每一位开发者都能根据自身需要来自定义自己的开发环境。许多开发者还会编写自己的插件。

#### 主流编辑器和 Web 开发插件

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### 浏览器

另一个关键工具是浏览器。Web 开发者需要用浏览器来观察它们的代码如何在网页上运行，还可以看到编辑器中编写的元素（如 HTML 元素）如何展现在网页上。

许多浏览器都提供了*开发者工具*（DevTools），包括一系列有用的功能和信息，用以辅助开发者收集和捕获它们应用程序的重要信息。例如当网页发生错误时，获知错误是何时发生的有助于解决错误，而浏览器 DevTools 就可以被配置来捕获这个信息。

#### 主流浏览器和 DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### 命令行工具（Command Line Tools）

一些开发者更喜欢使用较少的图形化界面来执行日常任务，因此选择使用命令行。开发代码需要大量的文字输入，一些开发者不喜欢自己在键盘上的工作流被打断，会使用键盘快捷键来切换桌面窗口、切换工作文件、使用工具等。大多数任务都可以通过鼠标完成，而使用命令行的一个好处就是无需再鼠标和键盘之间切换就能完成多数工作。命令行的另一个好处是它们是可配置的，所以你可以保存你的配置并随时修改，还可以将其导入到新的开发设备上。但开发环境毕竟因人而异，有人完全不想用命令行，有人则希望在命令行做所有事，还有一些人两种方式都乐意接受。

### 常用命令行选择

命令行选择基于你使用的操作系统会有所不同。

*💻 表示会预装在对应操作系统上*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (即 CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### 常用命令行工具

- [Git](https://git-scm.com/) (💻 <- 在多数操作系统上)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### 文档

当一位开发者想要学点新东西，他们基本都会去找文档（Documentation）来学习如何使用。开发者会依靠文档来指引他们如何合理地使用工具和语言，并且从中获取更多关于实现原理的深层知识。

#### Web 开发常用文档

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), 来自 Mozilla，[Firefox](https://www.mozilla.org/firefox/) 的出版商
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev)，来自 Google，[Chrome](https://www.google.com/chrome/) 的发布者
- [Microsoft 自己的开发人员文档](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers)，用于 [Microsoft Edge](https://www.microsoft.com/edge)

✅ 查一查：既然你已经对 Web 开发者的环境有所了解，何不比较一下其与 Web 设计师的环境的差异？

---

## 🚀 挑战

比较一些编程语言。JavaScript 和 Java 相互之间有什么独特的特征？COBOL 和 Go 之间呢？

## 课后小测
[课后小测](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/2?loc=zh_cn)

## 复习 & 自学

尝试接触一些不同的编程语言，用一种语言写一行代码，然后用另外两种语言重写这一行代码，你有什么感悟吗？

## 作业

[阅读文档](assignment.zh-cn.md)
