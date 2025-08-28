<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05666cecb8983a72cf0ce1d18932b5b7",
  "translation_date": "2025-08-23T23:17:56+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "hk"
}
-->
# GitHub 簡介

這節課涵蓋了 GitHub 的基礎知識，這是一個用於託管和管理程式碼變更的平台。

![GitHub 簡介](../../../../sketchnotes/webdev101-github.png)
> [Tomomi Imura](https://twitter.com/girlie_mac) 的手繪筆記

## 課前測驗
[課前測驗](https://ff-quizzes.netlify.app/web/quiz/3)

## 簡介

在這節課中，我們將學習：

- 如何追蹤你在電腦上的工作
- 如何與他人合作完成專案
- 如何為開源軟件做出貢獻

### 先決條件

在開始之前，你需要檢查是否已安裝 Git。在終端機輸入：  
`git --version`

如果未安裝 Git，請[下載 Git](https://git-scm.com/downloads)。然後，在終端機中設置你的本地 Git 配置檔：
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

要檢查 Git 是否已配置，可以輸入：
`git config --list`

你還需要一個 GitHub 帳戶、一個程式碼編輯器（例如 Visual Studio Code），並打開你的終端機（或命令提示符）。

前往 [github.com](https://github.com/) 註冊帳戶（如果尚未註冊），或者登入並完善你的個人資料。

✅ GitHub 並不是世界上唯一的程式碼儲存庫；還有其他選擇，但 GitHub 是最知名的。

### 準備工作

你需要在本地電腦（筆記本或 PC）上準備一個包含程式碼專案的資料夾，還需要在 GitHub 上建立一個公共儲存庫，這將作為如何為他人專案做出貢獻的示例。

---

## 程式碼管理

假設你在本地有一個包含程式碼專案的資料夾，並希望使用 Git（版本控制系統）開始追蹤你的進度。有些人將使用 Git 比作寫一封給未來自己的情書。當你幾天、幾週甚至幾個月後閱讀你的提交訊息時，你將能回憶起為什麼做出某個決定，或者「回滾」某個更改——前提是你寫了好的「提交訊息」。

### 任務：建立儲存庫並提交程式碼  

> 查看影片  
> 
> [![Git 和 GitHub 基礎影片](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **在 GitHub 上建立儲存庫**。在 GitHub.com 上，進入儲存庫標籤，或從右上角的導航欄找到 **new repo** 按鈕。

   1. 為你的儲存庫（資料夾）命名
   1. 選擇 **create repository**。

1. **導航到你的工作資料夾**。在終端機中，切換到你想要開始追蹤的資料夾（也稱為目錄）。輸入：

   ```bash
   cd [name of your folder]
   ```

1. **初始化 Git 儲存庫**。在你的專案中輸入：

   ```bash
   git init
   ```

1. **檢查狀態**。要檢查儲存庫的狀態，輸入：

   ```bash
   git status
   ```

   輸出可能看起來像這樣：

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   通常，`git status` 命令會告訴你哪些檔案已準備好被「保存」到儲存庫，或者有哪些檔案有更改需要持久化。

1. **添加所有檔案進行追蹤**  
   這也稱為暫存檔案/將檔案添加到暫存區。

   ```bash
   git add .
   ```

   `git add` 加上 `.` 參數表示將所有檔案和更改添加到追蹤中。

1. **選擇性添加檔案進行追蹤**

   ```bash
   git add [file or folder name]
   ```

   當你不想一次提交所有檔案時，這可以幫助我們僅添加選定的檔案到暫存區。

1. **取消暫存所有檔案**

   ```bash
   git reset
   ```

   此命令可幫助我們一次取消暫存所有檔案。

1. **取消暫存特定檔案**

   ```bash
   git reset [file or folder name]
   ```

   此命令可幫助我們一次取消暫存特定檔案，這些檔案我們不想包含在下一次提交中。

1. **保存你的工作**。此時，你已將檔案添加到所謂的 _暫存區_，這是一個 Git 正在追蹤你的檔案的地方。要使更改永久化，你需要 _提交_ 這些檔案。為此，你需要使用 `git commit` 命令創建一個 _提交_。_提交_ 代表儲存庫歷史中的一個保存點。輸入以下命令以創建一個 _提交_：

   ```bash
   git commit -m "first commit"
   ```

   這會提交所有檔案，並添加訊息「first commit」。對於未來的提交訊息，你需要更具描述性，以傳達你所做更改的類型。

1. **將本地 Git 儲存庫與 GitHub 連接**。本地的 Git 儲存庫很好，但某些時候你可能希望將檔案備份到某個地方，並邀請其他人與你一起合作。一個很棒的地方就是 GitHub。記得我們已經在 GitHub 上創建了一個儲存庫，所以現在唯一需要做的就是將本地 Git 儲存庫與 GitHub 連接。`git remote add` 命令可以做到這一點。輸入以下命令：

   > 注意，在輸入命令之前，請前往你的 GitHub 儲存庫頁面找到儲存庫的 URL。你將在以下命令中使用它。將 ```https://github.com/username/repository_name.git``` 替換為你的 GitHub URL。

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   這會創建一個名為 "origin" 的 _遠端_，指向你之前創建的 GitHub 儲存庫。

1. **將本地檔案發送到 GitHub**。到目前為止，你已經在本地儲存庫和 GitHub 儲存庫之間建立了 _連接_。現在使用以下命令 `git push` 將這些檔案發送到 GitHub，如下所示：

   > 注意，你的分支名稱可能與 ```main``` 預設不同。

   ```bash
   git push -u origin main
   ```

   這會將你的「main」分支中的提交發送到 GitHub。

2. **添加更多更改**。如果你想繼續進行更改並將它們推送到 GitHub，你只需要使用以下三個命令：

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > 提示，你可能還想採用 `.gitignore` 檔案，以防止你不想追蹤的檔案出現在 GitHub 上——例如，你存儲在同一資料夾中的筆記檔案，但它不適合放在公共儲存庫中。你可以在[.gitignore 模板](https://github.com/github/gitignore)中找到 `.gitignore` 檔案的模板。

#### 提交訊息

一個好的 Git 提交主題行應該能完成以下句子：  
如果應用，這次提交將 <你的主題行在此>

主題行應使用祈使句，現在時態：「更改」而不是「已更改」或「正在更改」。  
與主題行一樣，在正文（可選）中也使用祈使句，現在時態。正文應包括更改的動機，並與之前的行為形成對比。你是在解釋「為什麼」，而不是「如何」。

✅ 花幾分鐘瀏覽 GitHub。你能找到一個非常棒的提交訊息嗎？你能找到一個非常簡略的嗎？你認為在提交訊息中傳達哪些資訊最重要且最有用？

### 任務：協作

將內容放到 GitHub 上的主要原因是讓其他開發者能夠協作。

## 與他人合作專案

> 查看影片  
>
> [![Git 和 GitHub 基礎影片](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

在你的儲存庫中，導航到 `Insights > Community`，查看你的專案與推薦的社群標準相比如何。

以下是一些可以改進你的 GitHub 儲存庫的事項：
- **描述**。你是否為你的專案添加了描述？
- **README**。你是否添加了 README？GitHub 提供了撰寫 [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon) 的指導。
- **貢獻指南**。你的專案是否有[貢獻指南](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)？
- **行為準則**。是否有[行為準則](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)？
- **授權條款**。或許最重要的是，是否有[授權條款](https://docs.github.com/articles/adding-a-license-to-a-repository/)？

所有這些資源都將有助於新團隊成員的加入。而這些通常是新貢獻者在查看你的程式碼之前會先查看的內容，以確定你的專案是否值得他們投入時間。

✅ README 檔案雖然需要時間準備，但經常被忙碌的維護者忽略。你能找到一個特別詳細的例子嗎？注意：有一些[工具可以幫助創建好的 README](https://www.makeareadme.com/)，你可能會想試試看。

### 任務：合併一些程式碼

貢獻文檔幫助人們為專案做出貢獻。它解釋了你正在尋找的貢獻類型以及流程如何運作。貢獻者需要完成一系列步驟才能為你的 GitHub 儲存庫做出貢獻：

1. **分叉你的儲存庫**。你可能希望人們 _分叉_ 你的專案。分叉意味著在他們的 GitHub 個人檔案上創建你的儲存庫的副本。
1. **克隆**。接著，他們會將專案克隆到本地電腦。
1. **創建分支**。你會希望他們為自己的工作創建一個 _分支_。
1. **專注於一個區域的更改**。請求貢獻者一次專注於一件事——這樣你能合併他們工作的機率會更高。想像一下，他們修復了一個錯誤，添加了一個新功能，並更新了幾個測試——如果你只想實施其中的 2 項或 1 項更改，該怎麼辦？

✅ 想像一個情況，分支對於撰寫和交付良好的程式碼特別重要。你能想到哪些使用情境？

> 注意，成為你希望看到的改變，為自己的工作也創建分支。你所做的任何提交都將在你當前「檢出」的分支上進行。使用 `git status` 查看當前所在的分支。

讓我們來看看貢獻者的工作流程。假設貢獻者已經 _分叉_ 並 _克隆_ 了儲存庫，因此他們在本地電腦上有一個可以工作的 Git 儲存庫：

1. **創建分支**。使用 `git branch` 命令創建一個包含他們想要貢獻的更改的分支：

   ```bash
   git branch [branch-name]
   ```

1. **切換到工作分支**。切換到指定分支並使用 `git switch` 更新工作目錄：

   ```bash
   git switch [branch-name]
   ```

1. **進行工作**。此時，你可以添加更改。別忘了使用以下命令告訴 Git：

   ```bash
   git add .
   git commit -m "my changes"
   ```

   確保為你的提交命名得當，這對你自己以及你幫助的儲存庫維護者都很重要。

1. **將你的工作與 `main` 分支合併**。當你完成工作並希望將你的更改與 `main` 分支合併時，`main` 分支可能已經發生了變化，因此請確保首先使用以下命令更新它：

   ```bash
   git switch main
   git pull
   ```

   此時，你需要確保任何 _衝突_（Git 無法輕鬆 _合併_ 的更改）發生在你的工作分支中。因此，運行以下命令：

   ```bash
   git switch [branch_name]
   git merge main
   ```

   這將把 `main` 中的所有更改帶入你的分支，希望你可以繼續。如果不能，VS Code 會告訴你 Git _困惑_ 的地方，你只需修改受影響的檔案，指出哪個內容最準確即可。

1. **將你的工作發送到 GitHub**。將你的工作發送到 GitHub 意味著兩件事。將你的分支推送到你的儲存庫，然後打開一個 PR（Pull Request）。

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   上述命令會在你的分叉儲存庫上創建該分支。

1. **打開 PR**。接下來，你需要打開一個 PR。你可以通過導航到 GitHub 上的分叉儲存庫來完成此操作。你會在 GitHub 上看到一個提示，詢問你是否要創建一個新的 PR，點擊它，你將進入一個介面，可以更改提交訊息標題，並給出更合適的描述。現在，你分叉的儲存庫的維護者將看到這個 PR，_希望_ 他們會欣賞並 _合併_ 你的 PR。你現在是一名貢獻者，太棒了 :)

1. **清理**。成功合併 PR 後，清理工作被認為是良好的做法。你需要清理本地分支和推送到 GitHub 的分支。首先，使用以下命令在本地刪除它：

   ```bash
   git branch -d [branch-name]
   ```
確保你前往 GitHub 頁面，找到你剛剛推送的分支，並移除該遠端分支。

`Pull request` 這個詞聽起來有點奇怪，因為實際上你是想將你的更改推送到專案中。但專案的維護者（專案擁有者）或核心團隊需要在合併到專案的 "main" 分支之前審核你的更改，因此你實際上是在向維護者請求更改的決定。

Pull request 是一個用來比較和討論分支中引入的差異的地方，並且可以進行審核、評論、整合測試等操作。一個好的 pull request 大致遵循與提交訊息相同的規則。當你的工作解決了一個問題時，你可以在問題追蹤器中引用該問題。這可以通過使用 `#` 後接問題編號來完成。例如 `#97`。

🤞希望所有檢查都通過，並且專案擁有者合併你的更改到專案中🤞

更新你目前的本地工作分支，將 GitHub 上對應的遠端分支的所有新提交拉取下來：

`git pull`

## 如何貢獻開源專案

首先，找到一個你感興趣並希望貢獻更改的 GitHub 儲存庫（或 **repo**）。你需要將其內容複製到你的電腦上。

✅ 找到「適合初學者」的儲存庫的一個好方法是 [透過標籤 'good-first-issue' 進行搜尋](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)。

![本地複製儲存庫](../../../../1-getting-started-lessons/2-github-basics/images/clone_repo.png)

有幾種複製程式碼的方法，其中一種是使用 HTTPS、SSH 或 GitHub CLI（命令列介面）來「克隆」儲存庫的內容。

打開你的終端機，像這樣克隆儲存庫：
`git clone https://github.com/ProjectURL`

要開始專案工作，切換到正確的資料夾：
`cd ProjectURL`

你也可以使用 [Codespaces](https://github.com/features/codespaces)（GitHub 的嵌入式程式碼編輯器/雲端開發環境）或 [GitHub Desktop](https://desktop.github.com/) 打開整個專案。

最後，你也可以下載壓縮檔案形式的程式碼。

### 關於 GitHub 的一些有趣事

你可以對 GitHub 上的任何公共儲存庫進行加星、關注或「fork」。你可以在右上角的下拉選單中找到你加星的儲存庫。這就像為程式碼加書籤。

專案通常有一個問題追蹤器，大多數情況下在 GitHub 的 "Issues" 標籤中，除非另有說明。在這裡，人們討論與專案相關的問題。而在 Pull Requests 標籤中，人們討論和審核正在進行的更改。

專案可能還有論壇、郵件列表或像 Slack、Discord 或 IRC 這樣的聊天頻道進行討論。

✅ 瀏覽你的新 GitHub 儲存庫並嘗試一些操作，例如編輯設定、向儲存庫添加資訊，以及創建專案（例如看板）。你可以做很多事情！

---

## 🚀 挑戰

與朋友配對，互相合作處理彼此的程式碼。共同創建一個專案，fork 程式碼，創建分支並合併更改。

## 課後測驗
[課後測驗](https://ff-quizzes.netlify.app/web/quiz/4)

## 回顧與自學

閱讀更多關於 [如何貢獻開源軟體](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution)。

[Git 速查表](https://training.github.com/downloads/github-git-cheat-sheet/)。

多練習，多嘗試。GitHub 提供了很棒的學習路徑：[skills.github.com](https://skills.github.com):

- [GitHub 的第一週](https://skills.github.com/#first-week-on-github)

你還可以找到更多進階課程。

## 作業

完成 [GitHub 的第一週課程](https://skills.github.com/#first-week-on-github)。

**免責聲明**：  
本文件使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋不承擔責任。