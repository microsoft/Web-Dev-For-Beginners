<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c63675cfaf1d223b37bb9fecbfe7c252",
  "translation_date": "2025-08-23T23:27:05+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "zh"
}
-->
# 编程语言与工具介绍

本课程涵盖了编程语言的基础知识。这里讨论的主题适用于当今大多数现代编程语言。在“工具介绍”部分，您将学习一些对开发者非常有用的软件。

![编程简介](../../../../sketchnotes/webdev101-programming.png)  
> 速记笔记由 [Tomomi Imura](https://twitter.com/girlie_mac) 提供

## 课前测验  
[课前测验](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## 介绍

在本课中，我们将讨论：

- 什么是编程？
- 编程语言的类型
- 程序的基本元素
- 专业开发者常用的软件和工具

> 您可以在 [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon) 上学习本课程！

## 什么是编程？

编程（也称为编码）是为计算机或移动设备等设备编写指令的过程。我们使用编程语言来编写这些指令，设备会对其进行解释。这些指令集可能有不同的名称，例如 *程序*、*计算机程序*、*应用程序（app）* 和 *可执行文件* 等。

*程序* 是用代码编写的任何东西；网站、游戏和手机应用都是程序。虽然可以在不编写代码的情况下创建程序，但设备解释的底层逻辑很可能是用代码编写的。一个正在 *运行* 或 *执行* 代码的程序正在执行指令。您正在使用的设备运行了一个程序，将本课程内容显示在屏幕上。

✅ 做一些研究：谁被认为是世界上第一位计算机程序员？

## 编程语言

编程语言使开发者能够为设备编写指令。设备只能理解二进制（1 和 0），而对于 *大多数* 开发者来说，这并不是一种高效的交流方式。编程语言是人类与计算机之间的交流工具。

编程语言有不同的格式，并可能服务于不同的目的。例如，JavaScript 主要用于 Web 应用程序，而 Bash 主要用于操作系统。

*低级语言* 通常比 *高级语言* 需要更少的步骤来让设备解释指令。然而，高级语言因其可读性和支持性而受到欢迎。JavaScript 被认为是一种高级语言。

以下代码展示了使用 JavaScript 的高级语言和使用 ARM 汇编代码的低级语言之间的区别。

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

相信或不相信，*它们都在做同一件事*：打印前 10 个斐波那契数列。

✅ 斐波那契数列是 [定义](https://en.wikipedia.org/wiki/Fibonacci_number) 为一组数字，其中每个数字是前两个数字之和，起始值为 0 和 1。前 10 个斐波那契数列是 0, 1, 1, 2, 3, 5, 8, 13, 21 和 34。

## 程序的基本元素

程序中的单条指令称为 *语句*，通常会有一个字符或行间距标记指令的结束或 *终止*。程序如何终止因语言而异。

程序中的语句可能依赖用户或其他地方提供的数据来执行指令。数据可以改变程序的行为，因此编程语言提供了一种临时存储数据的方法，以便稍后使用。这些被称为 *变量*。变量是指示设备将数据保存在内存中的语句。程序中的变量类似于代数中的变量，它们有一个唯一的名称，其值可能会随时间变化。

有些语句可能不会被设备执行。这通常是开发者有意设计的，或者是由于意外错误而发生的。这种对应用程序的控制使其更加健壮和可维护。通常，当满足某些条件时，这种控制会发生变化。在现代编程中，`if..else` 语句是常用的控制程序运行的语句。

✅ 您将在后续课程中学习更多关于这种语句的内容。

## 工具介绍

[![工具介绍](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "工具介绍")

> 🎥 点击上方图片观看关于工具的视频

在本节中，您将了解一些在开始您的专业开发旅程时可能非常有用的软件。

**开发环境** 是开发者在编写软件时经常使用的一组独特工具和功能。这些工具可能根据开发者的具体需求进行了定制，并可能随着开发者的工作重点、个人项目或使用的编程语言的变化而改变。开发环境如同开发者本身一样独特。

### 编辑器

软件开发中最重要的工具之一是编辑器。编辑器是您编写代码的地方，有时也是运行代码的地方。

开发者依赖编辑器的几个额外原因：

- *调试* 通过逐行检查代码来发现错误和问题。一些编辑器具有调试功能；它们可以为特定的编程语言进行定制和添加。
- *语法高亮* 为代码添加颜色和文本格式，使其更易于阅读。大多数编辑器允许自定义语法高亮。
- *扩展和集成* 是为开发者设计的专业工具。这些工具并未内置于基础编辑器中。例如，许多开发者会为代码添加文档以解释其工作原理。他们可能会安装拼写检查扩展来帮助发现文档中的拼写错误。大多数扩展是为特定编辑器设计的，大多数编辑器都提供了搜索可用扩展的方法。
- *自定义* 使开发者能够创建适合自己需求的独特开发环境。大多数编辑器都非常可定制，并且可能允许开发者创建自定义扩展。

#### 流行的编辑器和 Web 开发扩展

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)  
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)  
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)  
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
- [Atom](https://atom.io/)  
  - [spell-check](https://atom.io/packages/spell-check)  
  - [teletype](https://atom.io/packages/teletype)  
  - [atom-beautify](https://atom.io/packages/atom-beautify)  
- [Sublimetext](https://www.sublimetext.com/)  
  - [emmet](https://emmet.io/)  
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)  

### 浏览器

另一个重要的工具是浏览器。Web 开发者依赖浏览器查看其代码在 Web 上的运行效果。浏览器还用于显示在编辑器中编写的网页的视觉元素，例如 HTML。

许多浏览器都带有 *开发者工具*（DevTools），其中包含一组有用的功能和信息，帮助开发者收集和捕获有关其应用程序的重要信息。例如：如果网页出现错误，了解错误发生的时间有时会很有帮助。浏览器中的开发者工具可以配置为捕获这些信息。

#### 流行的浏览器和开发者工具

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)  
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)  
- [Firefox](https://developer.mozilla.org/docs/Tools)  

### 命令行工具

一些开发者更喜欢使用更少图形化的界面来完成日常任务，并依赖命令行来实现这一点。编写代码需要大量的输入，一些开发者更喜欢不打断键盘上的工作流。他们会使用键盘快捷键在桌面窗口之间切换、处理不同文件并使用工具。虽然大多数任务可以通过鼠标完成，但使用命令行的一个好处是可以在不切换鼠标和键盘的情况下完成许多任务。命令行的另一个好处是它们是可配置的，您可以保存自定义配置，稍后更改，并将其导入到其他开发机器中。由于开发环境对每个开发者来说都是独特的，有些人会完全避免使用命令行，有些人会完全依赖它，还有些人喜欢两者结合使用。

### 流行的命令行选项

命令行选项会因您使用的操作系统而异。

*💻 = 操作系统预装。*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻  
- [命令行](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon)（也称为 CMD）💻  
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)  
- [mintty](https://mintty.github.io/)  

#### MacOS

- [终端](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻  
- [iTerm](https://iterm2.com/)  
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)  

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻  
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)  
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)  

#### 流行的命令行工具

- [Git](https://git-scm.com/)（💻 在大多数操作系统上预装）  
- [NPM](https://www.npmjs.com/)  
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)  

### 文档

当开发者想学习新知识时，他们很可能会查阅文档以了解如何使用它。开发者经常依赖文档来指导他们正确使用工具和语言，并深入了解其工作原理。

#### 流行的 Web 开发文档

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web)，由 [Firefox](https://www.mozilla.org/firefox/) 浏览器的发布者 Mozilla 提供  
- [Frontend Masters](https://frontendmasters.com/learn/)  
- [Web.dev](https://web.dev)，由 [Chrome](https://www.google.com/chrome/) 的发布者 Google 提供  
- [Microsoft 的开发者文档](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers)，适用于 [Microsoft Edge](https://www.microsoft.com/edge)  
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)  

✅ 做一些研究：现在您已经了解了 Web 开发者的环境，试着将其与 Web 设计师的环境进行比较和对比。

---

## 🚀 挑战

比较一些编程语言。JavaScript 和 Java 有哪些独特的特性？COBOL 和 Go 又如何？

## 课后测验  
[课后测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## 复习与自学

学习一下程序员可用的不同语言。尝试用一种语言写一行代码，然后用另外两种语言重写它。您学到了什么？

## 作业

[阅读文档](assignment.md)

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们对因使用此翻译而产生的任何误解或误读不承担责任。