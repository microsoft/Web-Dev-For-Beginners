<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:47:27+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "hk"
}
-->
## GIT 基礎知識：適合網頁開發初學者👶

## 什麼是 `Git`？
1. Git 是一個分散式版本控制系統。
2. 整個代碼庫及其歷史記錄都存儲在每位開發者的電腦上，方便進行分支和合併操作。
3. 它被用作版本控制系統 (VCS)，用於追蹤電腦文件的變更。

* 分散式版本控制
* 協調多位開發者的工作
* 誰在什麼時候做了哪些修改
* 隨時回退到之前的版本
* 本地與遠端倉庫

## GIT 的概念
* 追蹤代碼歷史
* 為文件拍攝 "快照"
* 由你決定何時拍攝快照，通過 "提交" 完成
* 你可以隨時訪問任何快照
* 提交前可以先暫存文件

### Git 與 GitHub 的區別

| Git | GitHub |
| ------- | ----------- |
| Git 是一個軟件 | GitHub 是一個雲端服務 |
| Git 安裝在本地系統 | GitHub 是基於網絡的 |
| 它是一個命令行工具 | 它是一個圖形化界面 |
| Git 由 Linux 維護 | GitHub 由 Microsoft 維護 |
| 它專注於版本控制和代碼共享 | 它專注於集中式代碼托管 |
| Git 是開源的 | GitHub 提供免費和付費等級 |
| Git 發布於 2005 年 | GitHub 發布於 2008 年 |

## GIT 安裝
* Linux(Debian)
    `$sudo apt-get install git`
* Linux(Fedora)
    `$sudo yum install git`
* [下載](http://git-scm.com/download/mac) Mac 版本
* [下載](http://git-scm.com/download/win) Windows 版本

### 安裝步驟：
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. 然後繼續點擊 Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### 安裝完成後需要使用 Git Bash 配置 Git
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git 指令
___

### 獲取與創建項目

| 指令 | 描述 |
| ------- | ----------- |
| `git init` | 初始化本地 Git 倉庫 |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | 創建遠端倉庫的本地副本 |

### 基本快照操作

| 指令 | 描述 |
| ------- | ----------- |
| `git status` | 檢查狀態 |
| `git add [file-name.txt]` | 添加文件到暫存區 |
| `git add -A` | 添加所有新文件和已修改文件到暫存區 |
| `git commit -m "[commit message]"` | 提交更改 |
| `git rm -r [file-name.txt]` | 刪除文件（或文件夾） |
| `git push` | 推送到遠端倉庫 |
| `git pull` | 從遠端倉庫拉取最新更改 |

### 分支與合併

| 指令 | 描述 |
| ------- | ----------- |
| `git branch` | 列出分支（星號表示當前分支） |
| `git branch -a` | 列出所有分支（本地和遠端） |
| `git branch [branch name]` | 創建新分支 |
| `git branch -D [branch name]` | 刪除分支 |
| `git push origin --delete [branch name]` | 刪除遠端分支 |
| `git checkout -b [branch name]` | 創建新分支並切換到該分支 |
| `git checkout -b [branch name] origin/[branch name]` | 克隆遠端分支並切換到該分支 |
| `git branch -m [old branch name] [new branch name]` | 重命名本地分支 |
| `git checkout [branch name]` | 切換到分支 |
| `git checkout -` | 切換到上次檢出的分支 |
| `git checkout -- [file-name.txt]` | 放棄文件的更改 |
| `git merge [branch name]` | 合併分支到當前分支 |
| `git merge [source branch] [target branch]` | 合併分支到目標分支 |
| `git stash` | 暫存工作目錄中的更改 |
| `git stash clear` | 清除所有暫存的條目 |

### 分享與更新項目

| 指令 | 描述 |
| ------- | ----------- |
| `git push origin [branch name]` | 推送分支到遠端倉庫 |
| `git push -u origin [branch name]` | 推送更改到遠端倉庫（並記住分支） |
| `git push` | 推送更改到遠端倉庫（記住的分支） |
| `git push origin --delete [branch name]` | 刪除遠端分支 |
| `git pull` | 更新本地倉庫到最新提交 |
| `git pull origin [branch name]` | 從遠端倉庫拉取更改 |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | 添加遠端倉庫 |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | 設置倉庫的遠端分支為 SSH |

### 檢查與比較

| 指令 | 描述 |
| ------- | ----------- |
| `git log` | 查看更改 |
| `git log --summary` | 查看詳細更改 |
| `git log --oneline` | 簡要查看更改 |
| `git diff [source branch] [target branch]` | 合併前預覽更改 |

---

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。