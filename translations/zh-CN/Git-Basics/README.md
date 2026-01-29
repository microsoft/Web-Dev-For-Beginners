## 面向网页开发初学者的 GIT 基础👶

## 什么是 `Git`？
1. Git 是一种分布式版本控制系统。
2. 整个代码库和历史记录都存储在每个开发者的电脑上，这使得分支和合并变得非常容易。
3. 它被用作版本控制系统 (VCS)，用于跟踪计算机文件的更改。

* 分布式版本控制
* 协调多个开发者之间的工作  
* 记录谁在什么时候做了哪些更改
* 随时回滚到之前的版本
* 本地和远程仓库

## GIT 的概念
* 跟踪代码历史
* 对文件进行“快照”
* 你可以通过“提交”来决定何时拍摄快照
* 你可以随时访问任何快照
* 提交之前可以暂存文件

### Git 和 GitHub 的区别

| Git | GitHub |
| ------- | ----------- |
| Git 是一个软件 | GitHub 是一个云服务 |
| Git 安装在本地系统上 | GitHub 托管在网络上 |
| 它是一个命令行工具 | 它是一个图形用户界面 |
| Git 由 Linux 维护 | GitHub 由微软维护 |
| 它专注于版本控制和代码共享 | 它专注于集中式源码托管 |
| Git 是开源许可的 | GitHub 提供免费和付费服务 |
| Git 于 2005 年发布 | GitHub 于 2008 年发布 |

## GIT 安装
* Linux(Debian)
    `$sudo apt-get install git`
* Linux(Fedora)
    `$sudo yum install git`
* [下载](http://git-scm.com/download/mac) Mac 版本
* [下载](http://git-scm.com/download/win) Windows 版本

### 安装步骤：
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. 然后继续点击 Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### 安装完成后需要通过 git bash 配置 Git
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git 命令
___

### 获取和创建项目

| 命令 | 描述 |
| ------- | ----------- |
| `git init` | 初始化本地 Git 仓库 |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | 创建远程仓库的本地副本 |

### 基本快照操作

| 命令 | 描述 |
| ------- | ----------- |
| `git status` | 检查状态 |
| `git add [file-name.txt]` | 将文件添加到暂存区 |
| `git add -A` | 将所有新增和修改的文件添加到暂存区 |
| `git commit -m "[commit message]"` | 提交更改 |
| `git rm -r [file-name.txt]` | 删除文件（或文件夹） |
| `git push` | 推送到远程仓库 |
| `git pull` | 从远程仓库拉取最新更改 |

### 分支与合并

| 命令 | 描述 |
| ------- | ----------- |
| `git branch` | 列出分支（星号表示当前分支） |
| `git branch -a` | 列出所有分支（本地和远程） |
| `git branch [branch name]` | 创建新分支 |
| `git branch -D [branch name]` | 删除分支 |
| `git push origin --delete [branch name]` | 删除远程分支 |
| `git checkout -b [branch name]` | 创建新分支并切换到该分支 |
| `git checkout -b [branch name] origin/[branch name]` | 克隆远程分支并切换到该分支 |
| `git branch -m [old branch name] [new branch name]` | 重命名本地分支 |
| `git checkout [branch name]` | 切换到某个分支 |
| `git checkout -` | 切换到上次检出的分支 |
| `git checkout -- [file-name.txt]` | 丢弃文件的更改 |
| `git merge [branch name]` | 将某分支合并到当前分支 |
| `git merge [source branch] [target branch]` | 将某分支合并到目标分支 |
| `git stash` | 将工作目录中的更改暂存 |
| `git stash clear` | 清除所有暂存的条目 |

### 项目共享与更新

| 命令 | 描述 |
| ------- | ----------- |
| `git push origin [branch name]` | 推送分支到远程仓库 |
| `git push -u origin [branch name]` | 推送更改到远程仓库（并记住分支） |
| `git push` | 推送更改到远程仓库（记住的分支） |
| `git push origin --delete [branch name]` | 删除远程分支 |
| `git pull` | 更新本地仓库到最新提交 |
| `git pull origin [branch name]` | 从远程仓库拉取更改 |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | 添加远程仓库 |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | 设置仓库的远程分支为 SSH |

### 检查与比较

| 命令 | 描述 |
| ------- | ----------- |
| `git log` | 查看更改 |
| `git log --summary` | 查看详细更改 |
| `git log --oneline` | 简要查看更改 |
| `git diff [source branch] [target branch]` | 合并前预览更改 |

---

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于关键信息，建议使用专业人工翻译。因使用本翻译而导致的任何误解或误读，我们概不负责。