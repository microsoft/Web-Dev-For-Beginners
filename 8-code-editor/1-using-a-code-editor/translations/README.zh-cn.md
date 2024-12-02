# 使用代码编辑器

本课程将介绍 [VSCode.dev](https://vscode.dev) —— 一款基于网络的代码编辑器，的基础使用。这样你就可以在不安装任何软件的情况下，修改代码、参与项目。

<!----
TODO: add an optional image
![Using a code editor](../../sketchnotes/webdev101-vscode-dev.png)
> Sketchnote by [Author name](https://example.com)
---->

<!---
## Pre-Lecture Quiz
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)
---->

## 学习目标

在本课程中，你将学习:

- 在一个代码项目中使用编辑器
- 通过版本控制来跟踪进度
- 为不同开发情况自定义编辑器

### 前置条件

在开始之前，你需要一个 [GitHub](https://github.com) 账号。如果没有账号，可通过此链接创建 [GitHub](https://github.com/) 账号。

### 简介

代码编辑器是编写程序与参与已有代码项目的必要工具。一旦你了解编辑器的基础知识和其功能的使用。你就可以在编写代码时得心应手。


## 上手 VSCode.dev

[VSCode.dev](https://vscode.dev) 是一款基于网页的代码编辑器。也就是说你无需安装任何软件就可以轻松使用，就像打开网页一样轻松。打开如下链接：[https://vscode.dev](https://vscode.dev) 即可使用。如果你没有登陆 [GitHub](https://github.com/)账号， 按照提示登录或创建账户并登录。

当编辑器加载完成，它应该看起来如下图所示:

![默认 VSCode.dev](../../images/default-vscode-dev.png)

其拥有三个主要部分，从左到右依次为

1. _活动栏_ 包含了许多图标, 例如放大镜 🔎, 齿轮 ⚙️, 等。
2. 当活动栏展开，其默认显示的是 _资源管理器_, 这个区域被称为 _侧栏_.
3. 最右边为显示代码的区域。

尝试点击每一个图标观察其功能。最后点击 _资源管理器_ 回到默认。

右侧最大的区域，是你查看、编写、修改代码的地方。

## 打开 GitHub 存储库

首先你需要打开一个 Github 存储库。打开存储库的方法有许多，本课程将展示打开存储库的两种不同方式。

### 1. 通过编辑器

使用编辑器打开远程存储库。在 [VSCode.dev](https://vscode.dev) 中，使用 _"打开远程存储库"_ 按钮:

![打开远程存储库](../../images/open-remote-repository.png)

你也可以通过命令面板来实现. 命令面板是一个输入框，你可以在其中输入部分命令或操作的名称，来找到并执行正确的命令。通过左上角的菜单，选择 _查看_ ，然后 _命令面板_ 。或通过键盘快捷键: Ctrl-Shift-P 或
Command-Shift-P (MacOS).

![命令面板](../../images/palette-menu.png)

在输入框中, 输入 _打开远程存储库_ , 然后选择第一个选项。这时你将会看到一些你参与的或是最近打开过的存储库可供选择。或者通过输入完整 Github URL 来选择想要的存储库。将下列URL粘贴至输入框：

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ 如果成功，你将会看到此存储库的所有文件显示在编辑器中。

### 2. 通过 URL
你也可以直接通过 URL 直接加载存储库。例如，当前的存储库的完整URL为[https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners) ，但你也可以通过将 Github 域名更改为`VSCode.dev/github` 来加载存储库。例如之前的URL将变成 [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners) 。


## 修改文件
在 vscode.dev 中打开存储库之后，你的下一步是修改当前项目。

### 1. 创建新文件

你可以在现存文件夹中或在根目录中创建新文件。要创建新文件，点击你想要放置文件的目录/文件夹，点击 _'新建文件 ...'_ 图标来创建文件，输入名字并按回车键保存。

![新建文件](../../images/create-new-file.png)

### 2. 在存储库中修改并保存文件

通过 vscode.dev 你可以十分便捷的快速更新项目而不需要在本地加载。
如需更新代码，点击 '资源管理器' 图标来显示文件夹和文件。点击想要更改的文件，其代码将显示在右侧代码区域。

![修改文件](../../images/edit-a-file.png)

当你完成对代码的修改，点击 _`源代码管理`_ 图标，即可看到所有你对存储库的修改。

如要查看对项目的修改，点击 `更改` 栏中的文件。这将打开此文件的'工作树'来直观的展现你对此文件的修改。红色背景的代码表示被删减，而绿色背景代码表示新增。

![查看更改](../../images/working-tree.png)

如果你对之前的更改满意，将鼠标放置 `更改` 栏并点击 `+` 按钮将更改暂存。所谓暂存，简单来说就是准备将更改提交到 GitHub。

如果你对修改不满意并想要放弃更改，将鼠标放置 `更改` 栏并点击 `放弃所有更改` 图标。

最后，编写 `提交说明` _(你对项目更改的描述)_, 点击 `对勾✅` 图标提交并推送更改。

当完成对项目的更改，点击左上角的 `三` 图标并选择'转到存储库'跳转到其 Github 页面。

![暂存并提交更改](../../images/edit-vscode.dev.gif)

## 使用扩展
通过在 VSCode 中安装扩展，你可以添加新的功能、自定义开发环境来改善你的工作流。这些扩展还可以帮助你添加对多种编程语言的支持，它们通常是通用扩展或特定语言专用的扩展。

通过点击活动栏的 _`拓展图标`_ ，并在显示 _'在应用商店中搜索拓展'_ 输入框中输入想要使用的拓展的名字，你就可以查看所有可用的拓展。
在所有可用的拓展中，每一个都包含 **拓展名称, 发布者名称, 用一句话概括的简介, 下载数量** 以及 **评分**.

![拓展详情](../../images/extension-details.png)
你也可以通过展开 _`已安装`_ 来查看所有已安装的拓展。_`热门`_ 中展示了大部分开发者会使用的热门拓展。_`推荐`_ 展示了基于同工作区中用户所使用，或最近打开文件所推荐的拓展。

![查看拓展](../../images/extensions.png)


### 1. 安装拓展
如要安装拓展，将想要安装的拓展的名称输入至搜索框，点击拓展可查看其详细信息。

你可以通过点击拓展旁边的 _蓝色安装按钮_ 安装。或点击拓展，在详情页中通过安装按钮安装。

![安装拓展](../../images/install-extension.gif)

### 2. 自定义拓展
在安装推展后，你需要基于你的习惯对拓展进行一些设置与自定义。要做这一步，你需要点击拓展图标，你已安装的拓展将显示在 _已安装_ 标签下，点击 _**齿轮图标**_, 并选择 _拓展设置_ 。

![修改拓展设置](../../images/extension-settings.png)

### 3. 管理拓展
在安装拓展后，你可以在 vscode.dev 中基于不同需求设置拓展。
例如，你可以：
- **禁用:**  _(在你想要暂时停用，但不希望卸载拓展时，你可以禁用拓展)_
    在拓展，已安装标签下，点击拓展上的齿轮图标，选择 '禁用' 或 '禁用 (工作区)'。**或者** 点击拓展，在右边详情页面中选择蓝色的禁用按钮。

   
- **卸载:** 在拓展，已安装标签下，点击拓展上的齿轮图标，选择 '卸载'。**或者** 点击拓展，点击拓展，在右边详情页面中选择蓝色的卸载按钮。



---

## 作业
[使用 vscode.dev 来创建简历网页](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)


<!----
## Post-Lecture Quiz
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)
---->

## 复习和自学

通过此链接了解更多 [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) 以及其功能。
