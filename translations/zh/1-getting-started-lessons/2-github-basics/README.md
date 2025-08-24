<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05666cecb8983a72cf0ce1d18932b5b7",
  "translation_date": "2025-08-23T23:16:36+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "zh"
}
-->
# GitHub简介

本课程介绍了GitHub的基础知识，这是一个用于托管和管理代码变更的平台。

![GitHub简介](../../../../sketchnotes/webdev101-github.png)
> [Tomomi Imura](https://twitter.com/girlie_mac) 的手绘笔记

## 课前测验
[课前测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)

## 简介

在本课程中，我们将学习：

- 如何跟踪你在本地机器上的工作
- 如何与他人协作完成项目
- 如何为开源软件做贡献

### 前置条件

在开始之前，你需要检查是否安装了Git。在终端中输入：  
`git --version`

如果未安装Git，请[下载Git](https://git-scm.com/downloads)。然后，在终端中设置你的本地Git配置文件：
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

要检查Git是否已配置，可以输入：
`git config --list`

你还需要一个GitHub账号，一个代码编辑器（如Visual Studio Code），并打开你的终端（或命令提示符）。

访问 [github.com](https://github.com/) 创建一个账号（如果尚未创建），或者登录并完善你的个人资料。

✅ GitHub并不是世界上唯一的代码仓库平台；还有其他平台，但GitHub是最知名的。

### 准备工作

你需要一个本地机器（笔记本或PC）上的代码项目文件夹，以及一个GitHub上的公共仓库，这将作为如何为他人项目做贡献的示例。

---

## 代码管理

假设你在本地有一个代码项目文件夹，并希望使用Git（版本控制系统）开始跟踪你的进度。有些人将使用Git比作写给未来自己的情书。几天、几周或几个月后阅读你的提交信息时，你可以回忆起为什么做出某个决定，或者“回滚”某个更改——前提是你写了好的“提交信息”。

### 任务：创建仓库并提交代码  

> 查看视频  
> 
> [![Git和GitHub基础视频](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **在GitHub上创建仓库**。在GitHub.com的仓库标签中，或从右上角导航栏找到**新建仓库**按钮。

   1. 给你的仓库（文件夹）命名
   1. 选择**创建仓库**。

1. **导航到你的工作文件夹**。在终端中，切换到你想开始跟踪的文件夹（也称为目录）。输入：

   ```bash
   cd [name of your folder]
   ```

1. **初始化Git仓库**。在你的项目中输入：

   ```bash
   git init
   ```

1. **检查状态**。要检查仓库的状态，输入：

   ```bash
   git status
   ```

   输出可能如下所示：

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   通常，`git status`命令会告诉你哪些文件准备好被保存到仓库，或者哪些文件有更改需要持久化。

1. **添加所有文件进行跟踪**  
   这也称为暂存文件/将文件添加到暂存区。

   ```bash
   git add .
   ```

   `git add`加上`.`参数表示将所有文件和更改添加到跟踪中。

1. **添加选定文件进行跟踪**

   ```bash
   git add [file or folder name]
   ```

   当你不想一次提交所有文件时，这可以帮助我们仅添加选定文件到暂存区。

1. **取消暂存所有文件**

   ```bash
   git reset
   ```

   此命令帮助我们一次性取消暂存所有文件。

1. **取消暂存特定文件**

   ```bash
   git reset [file or folder name]
   ```

   此命令帮助我们一次性取消暂存特定文件，不将其包含在下一次提交中。

1. **持久化你的工作**。此时你已经将文件添加到所谓的暂存区，这是Git跟踪文件的地方。要使更改永久化，你需要提交文件。使用`git commit`命令创建一个提交。提交代表仓库历史中的一个保存点。输入以下命令创建提交：

   ```bash
   git commit -m "first commit"
   ```

   这会提交所有文件，并添加信息“首次提交”。对于未来的提交信息，你需要更具描述性，以传达你进行了什么类型的更改。

1. **将本地Git仓库连接到GitHub**。本地Git仓库很好，但最终你可能希望将文件备份到某个地方，并邀请其他人与你一起工作。GitHub是一个很好的选择。记住我们已经在GitHub上创建了一个仓库，现在只需要将本地Git仓库连接到GitHub。`git remote add`命令可以实现这一点。输入以下命令：

   > 注意，在输入命令之前，访问你的GitHub仓库页面以找到仓库URL。你将在下面的命令中使用它。将```https://github.com/username/repository_name.git```替换为你的GitHub URL。

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   这会创建一个名为“origin”的远程连接，指向你之前创建的GitHub仓库。

1. **将本地文件发送到GitHub**。到目前为止，你已经在本地仓库和GitHub仓库之间创建了连接。使用以下命令`git push`将这些文件发送到GitHub：

   > 注意，你的分支名称可能与```main```不同。

   ```bash
   git push -u origin main
   ```

   这会将你的“main”分支中的提交发送到GitHub。

2. **添加更多更改**。如果你想继续进行更改并将其推送到GitHub，你只需要使用以下三个命令：

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > 提示，你可能还需要采用`.gitignore`文件，以防止你不想跟踪的文件出现在GitHub上——例如存储在同一文件夹中的笔记文件，但不适合放在公共仓库中。你可以在[.gitignore模板](https://github.com/github/gitignore)中找到`.gitignore`文件的模板。

#### 提交信息

一个好的Git提交主题行可以完成以下句子：  
如果应用此提交，它将<你的主题行>

对于主题行，请使用命令式现在时：“更改”而不是“已更改”或“正在更改”。  
在正文中（可选）也使用命令式现在时。正文应包括更改的动机，并与之前的行为进行对比。你是在解释“为什么”，而不是“如何”。

✅ 花几分钟浏览GitHub。你能找到一个非常好的提交信息吗？你能找到一个非常简短的提交信息吗？你认为提交信息中最重要和最有用的信息是什么？

### 任务：协作

将内容放到GitHub上的主要原因是为了与其他开发者协作。

## 与他人协作完成项目

> 查看视频  
>
> [![Git和GitHub基础视频](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

在你的仓库中，导航到`Insights > Community`，查看你的项目与推荐的社区标准的比较。

以下是一些可以改善GitHub仓库的事项：
- **描述**。你是否为项目添加了描述？
- **README**。你是否添加了README？GitHub提供了编写[README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon)的指导。
- **贡献指南**。你的项目是否有[贡献指南](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)？
- **行为准则**。是否有[行为准则](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)？
- **许可证**。或许最重要的是，[许可证](https://docs.github.com/articles/adding-a-license-to-a-repository/)？

所有这些资源都将有助于新团队成员的入门。这些通常是新贡献者在查看你的代码之前会关注的内容，以了解你的项目是否值得他们投入时间。

✅ README文件虽然需要时间准备，但经常被忙碌的维护者忽略。你能找到一个特别详细的README示例吗？注意：有一些[工具可以帮助创建好的README](https://www.makeareadme.com/)，你可能会想尝试一下。

### 任务：合并代码

贡献文档帮助人们为项目做贡献。它解释了你希望的贡献类型以及流程如何运作。贡献者需要完成一系列步骤才能为你的GitHub仓库做贡献：

1. **Fork你的仓库**。你可能希望人们Fork你的项目。Fork意味着在他们的GitHub个人资料中创建你的仓库的副本。
1. **克隆**。然后他们会将项目克隆到本地机器。
1. **创建分支**。你会希望他们为自己的工作创建一个分支。
1. **专注于一个领域的更改**。要求贡献者一次专注于一个方面的贡献——这样你合并他们工作的可能性会更高。想象他们修复了一个bug，添加了一个新功能，并更新了几个测试——如果你只想实现其中的2个或3个，或者1个更改怎么办？

✅ 想象一个分支在编写和发布优质代码时特别重要的场景。你能想到哪些用例？

> 注意，成为你希望看到的改变，自己也为自己的工作创建分支。你进行的任何提交都会在当前“检出”的分支上进行。使用`git status`查看当前分支。

让我们来看看贡献者的工作流程。假设贡献者已经Fork并克隆了仓库，因此他们在本地机器上有一个准备工作的Git仓库：

1. **创建分支**。使用`git branch`命令创建一个分支，包含他们计划贡献的更改：

   ```bash
   git branch [branch-name]
   ```

1. **切换到工作分支**。使用`git switch`切换到指定分支并更新工作目录：

   ```bash
   git switch [branch-name]
   ```

1. **进行工作**。此时你可以添加更改。别忘了用以下命令告诉Git：

   ```bash
   git add .
   git commit -m "my changes"
   ```

   确保为你的提交起一个好名字，对你自己和维护者来说都很重要。

1. **将工作与`main`分支合并**。完成工作后，你希望将你的工作与`main`分支的工作合并。`main`分支可能已经发生了变化，因此请确保首先更新到最新状态，使用以下命令：

   ```bash
   git switch main
   git pull
   ```

   此时你需要确保任何冲突（Git无法轻松合并的情况）发生在你的工作分支中。因此运行以下命令：

   ```bash
   git switch [branch_name]
   git merge main
   ```

   这会将`main`中的所有更改带入你的分支，希望你可以继续。如果不能，VS Code会告诉你Git“困惑”的地方，你只需修改受影响的文件以确定哪个内容最准确。

1. **将工作发送到GitHub**。将工作发送到GitHub意味着两件事：将分支推送到你的仓库，然后打开一个PR（Pull Request）。

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   上述命令会在你的Fork仓库中创建分支。

1. **打开PR**。接下来，你需要打开一个PR。通过导航到GitHub上的Fork仓库，你会看到GitHub提示是否要创建一个新的PR，点击它，你会进入一个界面，可以更改提交信息标题，给出更合适的描述。现在你Fork的仓库的维护者会看到这个PR，_希望_他们会欣赏并合并你的PR。你现在是贡献者了，太棒了 :)

1. **清理**。成功合并PR后，清理工作被认为是良好的实践。你需要清理本地分支和推送到GitHub的分支。首先用以下命令在本地删除它：

   ```bash
   git branch -d [branch-name]
   ```
确保你进入了 GitHub 页面，找到你刚刚推送的远程分支，并将其删除。

`Pull request`（拉取请求）这个术语听起来有点奇怪，因为实际上你是想将你的更改推送到项目中。但项目的维护者（项目所有者）或核心团队需要在将你的更改合并到项目的“主”分支之前进行审查，因此实际上你是在请求维护者对更改做出决策。

拉取请求是一个用于比较和讨论分支中引入的差异的地方，可以进行审查、评论、集成测试等。一个好的拉取请求通常遵循与提交信息相似的规则。你可以在问题跟踪器中引用一个问题，例如当你的工作解决了某个问题时。这可以通过使用 `#` 后跟问题编号来完成，例如 `#97`。

🤞希望所有检查都通过，项目所有者将你的更改合并到项目中🤞

更新你当前的本地工作分支，使其包含 GitHub 上对应远程分支的所有新提交：

`git pull`

## 如何为开源项目做贡献

首先，找到一个你感兴趣并希望贡献更改的 GitHub 仓库（或 **repo**）。你需要将其内容复制到你的电脑上。

✅ 找到“适合初学者”的仓库的一个好方法是[通过标签 'good-first-issue' 进行搜索](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)。

![本地复制仓库](../../../../1-getting-started-lessons/2-github-basics/images/clone_repo.png)

有几种复制代码的方法，其中一种是使用 HTTPS、SSH 或 GitHub CLI（命令行界面）“克隆”仓库的内容。

打开你的终端并像这样克隆仓库：
`git clone https://github.com/ProjectURL`

要开始处理项目，切换到正确的文件夹：
`cd ProjectURL`

你还可以使用 [Codespaces](https://github.com/features/codespaces)（GitHub 的嵌入式代码编辑器/云开发环境）或 [GitHub Desktop](https://desktop.github.com/) 打开整个项目。

最后，你也可以下载代码的压缩文件夹。

### 关于 GitHub 的一些有趣的事情

你可以对 GitHub 上的任何公共仓库进行加星、关注或“fork”（派生）。你可以在右上角的下拉菜单中找到你加星的仓库。这就像为代码添加书签。

项目通常有一个问题跟踪器，大多数情况下在 GitHub 的“Issues”标签中，除非另有说明，人们会在这里讨论与项目相关的问题。而“Pull Requests”标签是人们讨论和审查正在进行的更改的地方。

项目可能还会在论坛、邮件列表或聊天频道（如 Slack、Discord 或 IRC）中进行讨论。

✅ 浏览一下你的新 GitHub 仓库，尝试一些操作，比如编辑设置、向仓库添加信息以及创建项目（例如看板）。你可以做很多事情！

---

## 🚀 挑战

与朋友配对，共同处理彼此的代码。协作创建一个项目，派生代码，创建分支并合并更改。

## 课后测验
[课后测验](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)

## 复习与自学

阅读更多关于[如何为开源软件做贡献](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution)的内容。

[Git 速查表](https://training.github.com/downloads/github-git-cheat-sheet/)。

多练习，多实践。GitHub 提供了很棒的学习路径：[skills.github.com](https://skills.github.com):

- [GitHub 的第一周](https://skills.github.com/#first-week-on-github)

你还可以找到更高级的课程。

## 作业

完成[GitHub 的第一周课程](https://skills.github.com/#first-week-on-github)。

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原文档的原始语言版本为权威来源。对于关键信息，建议使用专业人工翻译。我们对因使用本翻译而引起的任何误解或误读不承担责任。