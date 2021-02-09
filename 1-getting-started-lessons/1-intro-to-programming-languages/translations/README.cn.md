# 业内编程语言和工具介绍

本课程涵盖了编程语言的基础知识，并适用于大多数现代编程语言。在“工具”部分，你会接触到一些对开发者很有用的软件。

![Intro Programming](webdev101-programming.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 课前测验
[课前测验](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/1?loc=cn)

## 介绍

本课程包括了：

- 何为编程？
- 编程语言的种类
- 程序的基本要素
- 适用于专业开发者的软件和工具

## 何为编程？

编程（也称编码），是向诸如计算机或移动设备之类的设备发出指令的过程。我们使用编程语言编写这些指令，然后由设备进行解析。这些指令集可能会被各种名称指代，但我们通常使用*程序*，*计算机程序*，*应用（APP）*，以及*可执行文件*等。


*程序*可以是任何用代码编写的东西。网站，游戏或者手机 APP 都是程序。尽管有些程序可以不用代码来构建，但实际上，他们的底层逻辑都将被设备解析，并且很有可能是用代码编写的。那些正在*运行*或正在*执行代码*的程序，实际上都在执行指令。你当前正在用来阅读本课程的设备，也正运行着一个将课程输出到屏幕上的程序。

✅ 查一查：谁被认为是世界上第一位计算机程序员？

## 编程语言

编程语言的主要目的是：让开发者可以构造指令并将它们输送到设备中。设备只能读取二进制（也就是一堆1和0），对于*绝大多数*开发者而言，这不是一种高效的交流方式。而编程语言，就是人类和计算机之间的通讯工具。

出于各种目的，编程语言被分为不同的种类。例如，JavaScript 主要被用在Web应用上，而 Bash 则主要被用于操作系统。

对于设备来说，*低级语言*在解释指令上通常比*高级语言*需要更少的步骤。但是，高级语言拥有更好的可读性和支持，因此它们更加流行。JavaScript 就被认为是一种高级语言。

下面这段代码展示了作为高级语言的 JavaScript 和作为低级语言的 ARM 汇编代码之间的区别。

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

不管你行不信，*它们都做了同一件事*：打印斐波那契数列的前10位。

✅ [斐波那契数列](https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97) 是由0和1开始，之后的数由它之前的两位数相加得出的数列。

## 程序的基本要素

程序中的一条指令被称为一个*语句*，通常会有一个字符或换行符来标识指令的*结束*。程序的结束方式因编程语言而异。

许多程序依赖于用户输入的数据，程序的语句会根据这些数据执行不同的指令。由于数据会改变程序的行为，因此编程语言提供了一种存储临时数据的方法，以便之后使用。 这种数据被称作*变量*。变量是让设备将数据保存到其内存中的语句。程序中的变量与代数中的变量相似，它们都拥有一个独立的名称，并可能随时间而改变。

有些语句可能不会被设备执行。这通常用于处理一些由开发者编写或由意外产生的错误。这么做可以使应用程序变得更加健壮和可维护。通常，这些控制会在满足某些条件时触发。在现代编程语言中，最常见的条件控制语句是`if..slse`语句。

✅ 在后续的课程中，你会学到更多此类语句的知识。

## 业内常用工具

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

本节会介绍一些软件，让你能像专业开发者那样开始你的旅程。

**开发环境**一组经常用于软件开发的独特工具和功能。在不同的时间下，开发者可能会拥有不同的工作内容，或使用不同的编程语言，因此他们也会根据自身需求对这些工具进行定制。每一个开发环境都是独特的，就如使用它们的开发者一样。

### 编辑器

编辑器是软件开发中最关键的工具之一。你可以用它编辑代码，有时甚至能运行你的代码。

除此之外，开发者选用编辑器还有这些理由：

- *Debugging* 开发者可以逐行逐步地排查找出代码中的问题和错误。一些编辑器拥有debug的能力，或者可以为特定的编程语言定制这些功能。  
- *语法高亮* 通过设置代码颜色和格式来使代码更易于阅读。大多数编辑器允许自定义语法高亮。
- *插件和集成* 开发者可以添加某些特定的插件来获得一些编辑器原本并不支持的功能。例如，许多开发者需要编写一些文档来解释它们的代码是如何工作的，这时他们就需要一些拼写检查工具来检查是否打错了单词。大多数插件只能在特定的编辑器里使用，同时，大多数编辑器都提供了让你搜索插件的方法。
- *定制化* 大多数编辑器都允许你进行定制，开发者可以根据自己的需要配置出最合适的开发环境。某些编辑器还允许开发者开发属于自己的拓展功能。

#### 主流编辑器和Web开发插件

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### 浏览器

浏览器是Web开发中另一样关键的工具。Web开发者需要依靠浏览器来看到他们的代码是如何在Web上运行的，同时，浏览器也被用来查看编辑器中编写的例如HTML页面中的虚拟元素。

多数浏览器自带了*开发者工具*（DevTools）,它提供了了许多有用的功能来帮助开发者收集和分析，应用程序的行为。例如，如果一个Web页面出错了，开发者工具有时能帮助你找到这个错误是如何产生的。浏览器的开发者工具也可以配置如何捕捉这些信息。

#### 主流浏览器和开发者工具

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### 命令行工具

一些开发者喜欢较少的图形视图来执行日常任务，因此它们会选用命令行工具。编写代码常常需要巨量的输入，一些开发者不希望自己敲击键盘的操作被打断，因此会使用快捷键来切换窗口，在不同文件直接操作，或使用不同工具。其实大多数操作也能通过鼠标完成，但使用命令行工具的好处在于你的手不需要在键盘和鼠标之间来回移动。另一个好处是，命令行工具通常是可以配置的，你可以随时保存和更改你的自定义配置，并在其他电脑中使用。由于每个开发者的开发环境都各不相同，一些开发者可能不怎么用命令行，或是曾经使用，但现在同时使用图形化工具和命令行。

### 主流的命令行选项

由于操作系统之间的差异，导致了每个系统中可用的命令行有所不同。

*💻 = 已经预装在操作系统中。*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/applications/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### 主流命令行工具

- [Git](https://git-scm.com/) (💻 在大多数系统中)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### 文档工具

开发者往往会从阅读文档开始入手学习一项新的东西。文档常常指导了开发者如何正确使用工具和语言，同时也让开发者能更深入的了解其工作原理。

#### Web 开发中主流的文档

- [Mozilla Developer Network](https://developer.mozilla.org/docs/Web)
- [Frontend Masters](https://frontendmasters.com/learn/)

✅ 思考：现在你对Web开发人员的环境已经有所了解，请将其与 Web设计师的环境进行对比。

---

## 🚀 挑战

比较一些编程语言。JavaScript和Java特点分别是什么？ COBOL和Go呢？

## 课后测验
[课后测验](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/2?loc=cn)

## 复习和自学

研究一下程序员可用的不同语言。尝试用某语言写一行，再试试用另外两种语言重写。你从中学到了什么？

## 作业

[阅读文档](assignment.cn.md)
