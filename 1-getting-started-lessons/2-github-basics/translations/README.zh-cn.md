# GitHub 介绍

这节课涵盖了 GitHub 的基础知识，这是一个可以用来存放代码和管理代码变更的平台。

![Intro to GitHub](/sketchnotes/webdev101-github.png)
> 涂鸦笔记作者：[Tomomi Imura](https://twitter.com/girlie_mac)

## 课前小测
[课前小测](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/3?loc=zh_cn)

## 大纲

这节课我们将会介绍：

- 在你的电脑上追踪你的工作
- 与他人协同开发项目
- 如何参与开源软件贡献

### 开始之前

开始之前，你需要确保安装了 Git，在终端（译注：即上一节课中介绍的命令行）中输入：
`git --version`

如果没有安装 Git，请先[下载并安装 Git](https://git-scm.com/downloads)。然后用如下命令设置你的本地 Git 使用者配置文件：
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

要检查 Git 使用者是否配置完成，可以输入：
`git config --list`

你还需要一个 GitHub 账户，一个代码编辑器（比如 Visual Studio Code），并且要打开你的终端（或者其他命令行）。

如果你没有现成的 Github 账号，去 [github.com](https://github.com/) 创建一个。如果已经有账号，就登录进去并且完成个人资料的配置。

✅ GitHub 并不是世界上唯一的代码仓库，但是最知名的。

### 课前准备

你需要在本地（你的笔记本或 PC）创建一个项目文件夹，还需要在 GitHub 上创建一个公开的仓库（译注：后文会有指引），作为本节课中向其他人的项目提贡献的示例。

---

## 代码管理

假如你在本地有一个代码项目的文件夹，你希望开始使用 Git （版本控制系统）来追踪你的进度。有的人将使用 Git 比作给未来的你自己写一封情书，在数日、数周乃至数月后阅读你的提交信息（commit messages）时，你就可以想起你做出某个决定的原因，或者回滚（rollback）一次变更 —— 前提是你写了不错的提交信息。

### 任务：创建仓库并提交代码

1. **在 GitHub 上创建仓库**。进入 GitHub.com，在 “Repositories” 标签或者右上角导航栏找到 **New repository** 按钮。

   1. 给你的仓库取个名字；
   1. 点击 **Create repository**。

1. **前往你的工作目录**。在你的终端中，通过输入下方命令切换到你希望开始追踪的文件夹（即目录）：

   ```bash
   cd [文件名称/目录路径]
   ```

1. **初始化一个 Git 仓库**。在你的项目下输入：

   ```bash
   git init
   ```

1. **检查状态**。要检查你的仓库状态，输入：

   ```bash
   git status
   ```

   输出看起来将会像这样：

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   一般来说 `git status` 命令会告诉你诸如什么文件已经 _被保存到_ 仓库内或者有一些你可能想要保留的变更之类的事。

1. **追踪所有文件**
   这个操作也叫做暂存（stage）文件或者将文件添加到暂存区（staging area）。

   ```bash
   git add .
   ```

   `git add` 命令加上 `.` 参数将会追踪你的所有文件和变更。

1. **只追踪选定的文件**

   ```bash
   git add [文件或文件夹名]
   ```

   如果你不想一次性将所有文件添加到暂存区，可以用这个命令仅仅添加选定的文件。

1. **取消所有文件的追踪**

   ```bash
   git reset
   ```

   这条命令可以帮我们取消暂存（unstage）所有文件。

1. **取消特定文件的追踪**

   ```bash
   git reset [文件或文件夹名]
   ```

   如果你在下次提交中不希望提交某个已经暂存的文件，可以用这条命令取消它的暂存。

1. **保存你的工作**。现在你应该已经将文件添加到了所谓 _暂存区_ 中，这是 Git 追踪你的文件的地方。为了永久地保存变更，你需要 _提交（commit）_ 这些文件。你可以用 `git commit` 命令创建一次 _提交_。一次 _提交_ 代表你的仓库历史中的一个存档点。输入下方命令来创建一次 _提交_：

   ```bash
   git commit -m "first commit"
   ```

   这会提交你暂存区中的所有文件，并带上一条提交信息 —— “first commit”。在以后的提交信息中你会想要加入更加准确的描述，比如一些表示你这次变更的类型的信息。

1. **将你的本地仓库连接到 GitHub**。现在 Git 仓库已经能在你的本地机器上正常运作，但是有时候你会想要将你的文件备份到别处，或者希望邀请其他人来一起参与这个仓库的协作。GitHub 就是一个可以满足你要求的好地方。我们此前已经在 GitHub 上创建了一个仓库，现在只需要将本地 Git 仓库连接到 GitHub 就可以了，用 `git remote add` 命令就可以做到。输入下面的命令：

   > 注意，在你输入命令前，需要前往你的 GitHub 仓库而页面来找到仓库的地址（URL），用它来替换命令中 `username/repository_name` 这一部分。

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   这会创建一个被命名为 “origin” 的 _远程仓库位置（remote）_，也可以理解为一个连接，指向你早先创建的 GitHub 仓库。

1. **将本地文件上传至 GitHub**。现在你已经创建了一个本地仓库和 GitHub 仓库间的 _连接_。让我们通过 `git push` 命令将这些文件上传至 GitHub，就像这样：

   ```bash
   git push -u origin main
   ```

   这样就会把你的提交上传到 GitHub 上你的 “main” 分支了。

1. **添加更多的变更**。如果你想继续搞点变更并且将它们传到 GitHub 上，你只需要使用下面的三行命令：

   ```bash
   git add .
   git commit -m "在这里填写你的提交信息"
   git push
   ```

   > 提示，你可能还需要建立一个 `.gitignore` 文件来防止 Git 追踪一些文件并且让它们不会被上传到 GitHub，比如一些你写在本地仓库但并不想放到公开仓库的笔记文件。你可以在 [.gitignore templates](https://github.com/github/gitignore) 找到一些现成的 `.gitignore` 文件模板。

#### 提交信息（Commit Messages）

一条好的 Git 提交信息标题（subject line）可以理解为下方句子的填空：
如果生效，这次提交将会 <你的提交信息标题>

在标题内，使用祈使语气和现在时态，即使用 “change” 而非 “changed” 或 “changes”。 
同理，在正文（body，可选）中也要用祈使语气和现在时态。正文中需要包括更改的动机，并对比与更改前后行为的变化。确保你说明的是`为什么`，而不是`怎么做`。

✅ 花几分钟逛逛 GitHub。你能找到感觉非常棒的提交信息吗？你可以找到非常简洁的提交信息吗？你认为在一条提交信息中，传达什么信息是最重要和有用的？

### 任务：协作

将项目放到 GitHub 的主要原因是让和其他开发者协作开发成为可能。

## 和其他人协作开发项目

在你的仓库中，前往 `Insights > Community` 来查看你的项目和推荐的社区规范的对比。

   这里有一些你可以改进你的项目仓库的点：
   - **项目描述（Description）**。你为你的项目添加了描述吗？
   - **README**。你有添加 README 吗？GitHub 提供了撰写 [README](https://docs.github.com/articles/about-readmes/) 的指南。
   - **贡献指南（Contributing guideline）**。你的项目是否有[贡献指南](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/)？
   - **行为准则（Code of Conduct）**。添加一份 [行为准则](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)
   - **开源协议（License）**。或许是最重要的，添加一个[开源协议](https://docs.github.com/articles/adding-a-license-to-a-repository/)


所有这些资源对于新加入的团队成员都是很有好处的，这些一般是新的贡献者在看你的代码前会更先去看的东西，以确认你的项目是否值得他们在这上面花费时间。

✅ 尽管很多人都准备了 README 文件，但常常会因为太忙而疏于维护。你能找到一个这样的例子吗？注：这里有一些可以[用于创建优秀的 README 的工具](https://www.makeareadme.com/)，你或许愿意试试。

### 任务：合并（Merge）一些代码

贡献文档帮助人们对项目做贡献，其中说明了你正需要什么样的贡献以及贡献的过程该是怎样的。贡献者需要完成一系列步骤才能在 GitHub 上参与你项目的贡献：


1. **复刻（Fork）你的仓库**。你可能希望人们 _复刻_ 你的项目。复刻意味着在他们自己的 GitHub 账户下创建你的项目的一份副本。
1. **克隆（Clone）**。在这里他们将会将项目克隆到他们的本地机器上。
1. **创建一个分支（Branch）**。你可能希望他们能创建一个 _分支_ 来进行他们的工作。
1. **集中进行一个区域的修改**。要求贡献者每次贡献只专注做一件事，这样你才更可能 _合并_ 他们的工作。想象一下如果他们修了一个 BUG，添加了一个新特性，然后更新了几个测试，而你其实只想要其中的一个或两个更改时该怎么办？

✅ 想一想分支在什么情况下对于编写和发布优质的代码非常重要？你能想到哪些使用实例？

> 注意，要以身作则，对你自己的工作也要创建分支。任何提交都需要在当前“检出（checked out）”的分支上进行。使用 `git status` 来查看是哪一个分支。

让我们走一遍贡献者的工作流程。假设贡献者已经 _复刻_ 并 _克隆_ 了仓库，他们在本地机器已经有了一个可以工作的仓库：

1. **创建一个分支**。使用命令 `git branch` 来创建一个他们希望用来包含计划进行的变更的分支：

   ```bash
   git branch [分支名]
   ```

1. **切换到工作分支**。使用 `git checkout` 来切换到指定分支并且更新工作目录中的文件：

   ```bash
   git checkout [分支名]
   ```

1. **干活**。现在你可以添加你的变更了，别忘了用下面的命令告诉 Git 你所做的工作：

   ```bash
   git add .
   git commit -m "变更内容"
   ```

   确保你的提交有一个好名字，不论是对你自己还是你正在帮助的仓库维护者来说都有好处。

1. **将你的工作合入 `main` 分支**。在完成工作后，你打算将你的工作和 `main` 分支上的合并。`main` 分支可能同时有了一些新的变更，所以要先用以下命令确保将其更新至最新版本：

   ```bash
   git checkout main
   git pull
   ```

   这时你想确认是否存在 _冲突（conflicts）_，即 Git 没法简单地将这些变化 _合入_ 你的分支的情况。为此运行下面的命令：

   ```bash
   git checkout [分支名]
   git merge main
   ```

   这将会把所有 `main` 分支上的变更带入到你的分支上。运气好的话一切都会自动搞定，否则 VS Code 会告诉你哪些文件 Git _不确定_ 该如何合并，你只需要手动修改对应文件来解决冲突即可。

1. **将你的工作上传至 GitHub**。将你的工作上传至 GitHub 意味着两件事：把你的分支上传到你自己的仓库，然后开启一个 PR（Pull Request）：

   ```bash
   git push --set-upstream origin [分支名]
   ```

   上述命令在你复刻的仓库中创建了一个分支。

1. **开启一个 PR**。接下来，你打算开启一个 PR。前往 GitHub 上你打算贡献的仓库，你将会看到一个消息条询问你是否想要创建一个新的 PR，点击后即可进入创建 PR 的界面。在这里你可以更改提交标题，给出更准确的描述。创建 PR 后，仓库维护者将会看到这个，如果 _一切顺利_ 的话他们会表示感谢并且 _合并_ 你的 PR。你现在就是一位贡献者啦！ :)

1. **清理**。成功合入一个 PR 后，做做 _清理_ 是一个好习惯。你会想要清理本地和你上传到 GitHub 的分支。首先让我们通过下面的命令来删除本地的分支：

   ```bash
   git branch -d [分支名]
   ```

   接下来请确保前往 GitHub 中对应仓库的页面并删除你刚才上传的分支。

`Pull request` 这个术语看起来有些憨，因为你确实打算把你的变更提交到这个项目中。但是在将你的变更合入到项目的 `main` 分支前，维护者（项目拥有者）或者核心团队需要考虑和检查你的变更，这意味着你实际上是在请求（request）维护者的变更决定。

Pull Request 是一个可以用来比较和讨论一个分支引入的改动的地方，并有代码审查、评论、集成测试等功能。优质的 Pull Request 严格遵照与提交信息相同的规则。如果你的工作是为了修复一个 Issues 面板中的事项，你可以在 PR 中提及这个事项。具体做法是写一个 `#` 加上事项的编号，比如 `#97`。

🤞如果一切顺利，所有的检查都通过后项目拥有者就会将你的变更合入项目🤞

使用这个命令即可将 GitHub 上对应远程分支的所有新提交更新到当前本地的工作分支上：

`git pull`

## 如何参与开源贡献

首先，让我们在 GitHub 上找到一个你感兴趣且愿意参与贡献的仓库（**repo**），你会复制一份它的内容到你的机器上。

✅ 一个寻找对入门者友好的仓库的好办法是[搜索 “good-first-issue” 标签](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)。

![Copy a repo locally](../images/clone_repo.png)

有很多种复制代码的方法，其中一种就是“克隆”仓库的内容，可以用 HTTPS、SSH 或者 GitHub CLI（Command Line Interface）来做到。

打开你的终端并且用类似下方的命令来克隆仓库：
`git clone https://github.com/ProjectURL`

切换到正确的工作目录：
`cd ProjectURL`

你也可以用 [Codespaces](https://github.com/features/codespaces) 来打开整个项目，这是 GitHub 内置的代码编辑器和云开发环境，或者用 [GitHub Desktop](https://desktop.github.com/)。

当然，你也可以直接下载代码的压缩包。

### 更多 GitHub 的有趣小知识

你可以收藏（star）、关注（watch）和复刻（fork）GitHub 上的任何公开仓库。可以在右上角的下拉菜单找到你收藏的仓库，这就像书签一样，但收藏的是代码。

项目都有一个事项面板（issue tracker），用于让人们讨论和这个项目相关的事项，事项面板基本都在 GitHub 的 “Issues” 标签页中，偶尔也会指明在其他地方。而 “Pull Requests” 标签页则是人们讨论和检查正在进行的变更的地方。

项目也可能会在论坛、邮件列表或者如 Slack、Discord、IRC 这样的聊天频道进行讨论。

✅ 看看你新建立的 GitHub 仓库，尝试做一些其他事，比如编辑设置、为仓库增加信息、创建一个 Project（类似看板），有很多可以尝试的东西！

---

## 🚀 挑战

找朋友一起编辑彼此的代码。协作创建一个项目、复刻代码、创建分支，然后合并变更。

## 课后小测
[课后小测](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/4?loc=zh_cn)

## 复习 & 自学

了解更多 [如何提交贡献](https://opensource.guide/zh-hans/how-to-contribute/#%E5%A6%82%E4%BD%95%E6%8F%90%E4%BA%A4%E8%B4%A1%E7%8C%AE)。

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/)。

练习，练习，再练习。GitHub 在 [lab.github.com](https://lab.github.com/) 提供了很棒的学习路径：

- [在 GitHub 的第一周](https://lab.github.com/githubtraining/first-week-on-github)

你还可以在上面找到更多高阶的实验内容。

## 作业 

完成 [在 GitHub 的第一周](https://lab.github.com/githubtraining/first-week-on-github)
