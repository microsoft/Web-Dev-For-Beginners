# GitHub 簡介

這堂課程講述一個提供加設與管理程式碼的平台 ── Github的基本功能。

![GitHub 簡介](/sketchnotes/webdev101-github.png)
> 由[Tomomi Imura](https://twitter.com/girlie_mac) 繪製

## 課前測驗
[課前測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/3?loc=zh_tw)

## 大綱

在這堂課中，包含：

- 追蹤裝置上的工作專案
- 與其他人共同開發專案
- 如何貢獻網路上的開源軟體

### 開始之前

在你開始課程之前，你需要安裝 Git 這套套件。在你的終端機上輸入：
`git --version`

若你的裝置上沒有安裝 Git，[請下載並安裝 Git](https://git-scm.com/downloads)。 安裝完之後，請設定裝置本地 Git 的使用者設定。
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

要確認 Git 使用者設定是否完成，你可以輸入：
`git config --list`

此外，你需要一組 GitHub 的帳戶、一款文字編輯器 (如：Visual Studio Code) 與你的終端機 (或 command prompt)。

若你缺少 GitHub 帳戶，請前往 [github.com](https://github.com/)建立並登入一組帳戶，遵循指示完成資料的填寫。 

✅ GitHub 不是唯一的程式碼數據庫，但 GitHub 是家喻戶曉的。

### 課前準備

你需要在裝置(筆電或電腦)上建立程式專案的資料夾，與 GitHub 公共的數據庫(Public Repository)。之後的例子會使用到此公共數據庫來與他人分享程式碼。

---

## 程式碼管理

假設你的本地端資料夾存放著一些程式專案，你想利用 Git 來作專案追蹤與版本控制，甚至是對未來的你寫一封情書。在一天、一週甚至是一個月後閱讀你的提交紀錄，了解當初你的決定，回想之前的更動。前提是當初你有寫一條完整的提交紀錄。

### 課題：建立數據庫並提交程式碼

1. **在 GitHub 上建立數據庫** 在 GitHub.com 上，在 "Repositories" 的標籤或導航欄的右上方，找到 **new repo** 的按鈕。

   1. 為你的數據庫資料夾取個名字。
   1. 選擇 **建立數據庫(create repository)**.

1. **調查本地的專案資料夾** 在終端機中開啟儲存程式碼的資料夾，在你想追蹤的目錄下輸入：

   ```bash
   cd [資料夾名稱]
   ```

1. **初始化 git 數據庫(repo)** 在目錄下輸入：

   ```bash
   git init
   ```

1. **檢查狀態** 若想檢查目前數據庫的狀態，輸入：

   ```bash
   git status
   ```

   它會輸出類似以下的訊息：

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   指令 `git status` 會回報那些檔案已經準備 _被存到_ 數據庫或是被更動過但不想更新上去。

1. **開始追蹤所有檔案**
   新增檔案到暫存區(staging area)。

   ```bash
   git add .
   ```

   `git add` 加上路徑 `.` 表示追蹤該路徑下所有的檔案。 

1. **只追蹤選擇的檔案**

   ```bash
   git add [檔案或資料夾路徑]
   ```

   上述指令幫助你只追蹤被選取的檔案，允許使用者分批提交。

1. **取消追蹤所有檔案**

   ```bash
   git reset
   ```

   上述指令能取消追蹤(unstage)暫存區的檔案。

1. **取消追蹤特定的檔案**

   ```bash
   git reset [檔案或資料夾路徑]
   ```

   上述指令只取消追蹤單一檔案，在下一次提交時不被圈選在裡面。

1. **保存工作狀態** 現在，已經有一些檔案被標記在 _暫存區(staging area)_。 Git 會追蹤區域內的檔案。若要保存這些檔案的狀態，你需要 _提交(commit)_ 這些檔案。 _提交_ 會記錄當下數據庫中檔案的狀態到歷史紀錄中。 你需要指令`git commit` 完成這項工作。

   ```bash
   git commit -m "first commit"
   ```

   這會提交暫存區內的檔案，"first commit"即提交紀錄。提交紀錄最好能識別出這次的提交主要做了那些更動。

1. **連接本地數據庫到 GitHub 遠端數據庫** 現在 Git 數據庫已經成功運行在你的本地裝置上，但有時候你希望能將檔案備份到其他地方，或是邀請他人參與這項程式專案。 GitHub 便是一個好地方。先前我們已經建立遠端數據庫在 GitHub 上，現在我們只要連接本地數據庫到 GitHub上。指令 `git remote add` 能完成這項課題：

   > 注意，在輸入指令前，你需要取得 GitHub 遠端數據庫的 URL 位置。請將下列的 `repository_name` 替換為你的遠端數據庫路徑。

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   這會在 GitHub 遠端數據庫上建立一個名叫 "origin" 的 _遠端位置(remote)_ ，或稱 _連接(connection)_。

1. **上傳本地檔案到 GitHub** 現在已經建好了遠端與本地的 _連接_。 利用指令 `git push` 可以將本地檔案上傳到遠端數據庫當中： 

   ```bash
   git push -u origin main
   ```

   所有的提交都會加到 GitHub 上 "main" 的分支當中。

1. **增加更多的更動** 若之後再對程式碼有所更動、提交並上傳到 GitHub 上，只要輸入：

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > 提示：建立 `.gitignore` 檔案可以讓你自動排除的特定檔案項目不被 GitHub 追蹤。好比是有一個在同一個目錄下的筆記檔不想被上傳到遠端數據庫。以下是 `.gitignore` 的參考版型： [.gitignore 參考版型](https://github.com/github/gitignore)。

#### 提交紀錄(Commit Messages)

一條好的 Git 提交標題行最好滿足下列條件：
提交完後，提交紀錄會顯示 <你的標題>

標題使用祈使語句，如使用 "change" 而非 "changed" 或 "changes"。
同理地，內文(選擇性)也使用祈使語句。內文須包含改動的動機與改動前後的差異。你需要解釋「為什麼改」而非「怎麼改」。

✅ 花點時間在 GitHub 上閒晃。你能找到很棒的提交紀錄嗎? 你能找到簡潔的提交紀錄嗎? 哪些資訊是你認為一個提交紀錄要有的重要資訊?

### 課題：多人合作

另一個將專案上傳到 GitHub 的主要原因是讓其他開發者能參與其中。

## 與其他人共同開發專案

在你的遠端資料庫中，前往 `Insights > Community` 來對比你的專案與其他推薦社群專案。

   以下是一些你的 GitHub 數據庫需要精進的地方：
   - **專案描述(Description)** 你有為你的專案新增描述嗎?
   - **README** 你有新增 README 嗎? GitHub 提供編寫 README 的指引與參考： [README](https://docs.github.com/articles/about-readmes/)
   - **開發指引(Contributing guideline)** 你的專案內有[開發指引](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/)嗎?
   - **行為準則(Code of Conduct)** [行為準則](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)
   - **授權條款License** 這或許是最重要的：[授權條款](https://docs.github.com/articles/adding-a-license-to-a-repository/)


這些資源對剛加入到專案的新成員有所幫助。這些是新的合作夥伴比看程式碼還優先查詢的地方。完善它們能有效縮減他人消化的時間。

✅ README 檔，雖然多數人都會配置，但忙碌的開發者都會疏於管理。 你能在社群中找到相關的例子嗎? 這邊有[關於建立 READMEs 的有利工具](https://www.makeareadme.com/)可以嘗試。

### 課題：合併程式碼

開發指引文件幫助他人了解如何共同開發專案。它提供專案需要被貢獻的部分與該如何運作。共同開發者需要經過下列步驟來與他人在 GitHub 共同開發專案：

1. **分叉(Fork)專案** 你或許希望別人能 _分叉(fork)_ 你的專案。 分叉代表別人建立一份你的專案副本到他人的 GitHub 數據庫中。
1. **複製(Clone)** 複製專案到他人的本地裝置中。
1. **建立分支(branch)** 依照工作需求建立 _分支(branch)_。 
1. **專注在他人投入的工作範圍** 要求他人只專注在單一課題上，這樣能提升他們工作 _合併(merge)_ 的機會。想像他們在修正錯誤，同時又新增新功能、更新測試機制......這時如果你只想合併其中的一個、或者是兩個功能呢? 

✅ 想像一個情況：一個重要的分支是編輯與分享的主軸，它能被如何應用?

> 注意，在做更動前，記得建立新的分支。任何提交都會在你所在的分支上，指令 `git status` 可以檢查你現在所在的分支。

現在，我們以共同開發者的角度來看。假設開發者已經 _分支_ 且 _複製_ 了他人的數據庫到自己的 Git 數據庫上，準備開始編輯檔案：

1. **建立新的分支** 利用指令 `git branch` 來建立新的分支，只做相關的工作改動。

   ```bash
   git branch [分支名稱]
   ```

1. **切換到該工作分支** 使用指令 `git switch` 來切換到特定分支，更新分支的檔案狀態：

   ```bash
   git switch [分支名稱]
   ```

1. **程式設計** 記得追蹤你所更改的地方，利用下列的指令來告訴 Git：

   ```bash
   git add .
   git commit -m "my changes"
   ```

   請確保提交都有適當的名稱，對管理者與你自己都有好處。

1. **將工作分支與 `main` 分支進行合併** 當工作完成時，你會需要將工作分支與 `main` 分支進行合併。 `main` 分支可能會被他人更新，在合併之前記得更新主分支：

   ```bash
   git switch main
   git pull
   ```

   這項步驟可能會面臨到 _衝突(conflicts)_，代表 Git 無法將本地的更動作 _合併(combine)_ 。此時你需要執行下列的指令：

   ```bash
   git switch [分支名稱]
   git merge main
   ```

   這會將所有 `main` 分支的改動加入到你的本地目錄中。若出現狀況，VS Code會告訴你 Git 會對衝突的檔案感到 _困惑(confused)_， 你需要判斷哪一項檔案或程式碼才是最適當的選擇。

1. **將你的成果上傳到 GitHub** 這代表著兩件事：將分支推到你的遠端數據庫以及準備建立 Pull Request(PR)。

   ```bash
   git push --set-upstream origin [分支名稱]
   ```

   上述的指令會在分叉的數據庫中新增分支。

1. **建立 PR** 藉由造訪分叉的數據庫中建立 PR，GitHub 會指示你是否要建立 PR，之後要填寫提交紀錄以及編寫詳細的說明。讓管理者了解你做了哪些更動並進行 _交叉比對(fingers crossed)_。 他們會感激你的貢獻並 _合併(merge)_ 你的 PR。完成這步後，你就成為了專案貢獻者，恭喜！

1. **清理專案** 在 PR 被成功合併後， _清除專案(clean up)_ 會是一個好習慣。 你需要清除你的本地分支以及你的遠端數據庫分支。首先，你可以利用下列的指令清除本地分支： 

   ```bash
   git branch -d [分支名稱]
   ```

   之後，請確保在 GitHub 頁面上刪除遠端分支。

`Pull request` 要求更新更動到「自己」的專案數據庫，這看起來很蠢。但管理者與核心組員必須謹慎地考量你的更動才能合併到專案的主分支中。這便是向管理者請求上傳許可。

一個 PR 提供比對以及討論的地方，解釋分支的意義、確認程式的合理性、留言與測試……等等。一個好的 PR 必須參照前述所說的提交紀錄準則。若你的 PR 有解決特定的 issue，記得標記在 PR 當中。使用 `#` 接在數字前面來標記 issue 編號，如 `#97`。

🤞 交叉比對每個程式環節都正確無誤後，專案管理者才合併你所作的更動 🤞

若要從 GitHub 遠端數據庫更新到目前的本地工作分支，使用：

`git pull`

## 如何貢獻網路上的開源軟體

首先，尋找一個你感興趣的數據庫，你會複製一份副本到自己的裝置上。

✅ 對新手而言，尋找「適合新手」的數據庫可以[搜尋 'good-first-issue' 標籤](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)。

![複製數據庫到本地](../images/clone_repo.png)

有許多方式來複製數據庫。 一種是利用 "clone" 整個數據庫的內容。可以使用 HTTPS、SSH 或是 GitHub CLI (Command Line Interface)。 

打開終端機並輸入下列指令來複製數據庫：
`git clone https://github.com/ProjectURL`

複製完後記得切換到正確的資料夾當中：
`cd ProjectURL`

你也可以利用[Codespaces](https://github.com/features/codespaces)來打開專案，一款嵌入在 GitHub 中的雲端開發環境，或是使用[GitHub Desktop](https://desktop.github.com/)。

最後，你也可以下載數據庫的壓縮檔。

### 有關 GitHub 的小知識

你可以為別人打星星(star)、追蹤(watch)或分叉(fork)任何一個 GitHub 上的共享數據庫。打上星星的數據庫會出現在右上方的導航欄中。就像是書籤，但是是給程式碼用的。

專案內會有 issue 追蹤器。大多數的 issue 會在 GitHub "Issue" 的標籤內(有些Issue會由作者另外說明)，供大家進行討論。 Pull Requests 標籤內會有正在討論與審核的程式更動。

專案也會有討論區、寄信功能以及聊天室如 Slack、Discord 或 IRC。

✅ 花點時間觀察你的新專案，試著更新設定、新增描述、或架構成一個大型專案(像個大看板一樣！)。你可以創造出任何東西！

---

## 🚀 挑戰

找朋友一起編輯彼此的程式。共同建立一項專案、分叉程式、建立分支、合併更動。

## 課後測驗
[課後測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/4?loc=zh_tw)

## 複習與自學

了解更多：

[貢獻開源軟體](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution)

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/)

練習，練習，再練習！ GitHub 有提供很好的學習管道：[lab.github.com](https://lab.github.com/)

- [第一週在 GitHub 上](https://lab.github.com/githubtraining/first-week-on-github)

你能找到更資深的實驗內容。 

## 作業

完成[第一週在 GitHub 上](https://lab.github.com/githubtraining/first-week-on-github)
