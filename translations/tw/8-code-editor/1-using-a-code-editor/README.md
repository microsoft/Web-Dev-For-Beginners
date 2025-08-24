<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7aa6e4f270d38d9cb17f2b5bd86b863d",
  "translation_date": "2025-08-23T23:32:03+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "tw"
}
-->
# 使用程式碼編輯器

本課程介紹如何使用 [VSCode.dev](https://vscode.dev) 這款基於網頁的程式碼編輯器，讓您可以在不需要安裝任何軟體的情況下修改程式碼並參與專案。

## 學習目標

在本課程中，您將學習如何：

- 在程式碼專案中使用程式碼編輯器
- 使用版本控制追蹤變更
- 自訂編輯器以進行開發

### 先決條件

在開始之前，您需要先建立 [GitHub](https://github.com) 帳戶。如果尚未建立帳戶，請前往 [GitHub](https://github.com/) 註冊。

### 簡介

程式碼編輯器是撰寫程式及協作現有程式專案的重要工具。一旦了解編輯器的基本功能及如何使用其特性，您便能在撰寫程式碼時靈活運用。

## 開始使用 VSCode.dev

[VSCode.dev](https://vscode.dev) 是一款基於網頁的程式碼編輯器。您不需要安裝任何軟體，只需像開啟其他網站一樣使用它。要開始使用編輯器，請開啟以下連結：[https://vscode.dev](https://vscode.dev)。如果您尚未登入 [GitHub](https://github.com/)，請按照提示登入或建立新帳戶後再登入。

載入後，畫面應該看起來類似以下圖片：

![預設 VSCode.dev](../../../../8-code-editor/images/default-vscode-dev.png)

主要有三個區域，從左到右分別是：

1. _活動列_，包含一些圖示，例如放大鏡 🔎、齒輪 ⚙️ 等。
2. 展開的活動列，預設為 _檔案總管_，稱為 _側邊欄_。
3. 最右側的程式碼區域。

點擊每個圖示以顯示不同的選單。完成後，點擊 _檔案總管_，回到初始位置。

當您開始撰寫程式碼或修改現有程式碼時，操作將在右側最大的區域進行。您也可以在此區域查看現有程式碼，接下來將進行相關操作。

## 開啟 GitHub 儲存庫

首先，您需要開啟一個 GitHub 儲存庫。有多種方式可以開啟儲存庫，本節將介紹兩種方法，讓您可以開始進行修改。

### 1. 使用編輯器

使用編輯器本身開啟遠端儲存庫。進入 [VSCode.dev](https://vscode.dev)，您會看到一個 _"Open Remote Repository"_ 按鈕：

![開啟遠端儲存庫](../../../../8-code-editor/images/open-remote-repository.png)

您也可以使用指令面板。指令面板是一個輸入框，您可以輸入任何指令或動作的關鍵字來找到相應的指令。使用左上方的選單，選擇 _檢視_，然後選擇 _指令面板_，或使用以下快捷鍵：Ctrl-Shift-P（MacOS 上為 Command-Shift-P）。

![指令面板選單](../../../../8-code-editor/images/palette-menu.png)

開啟選單後，輸入 _open remote repository_，然後選擇第一個選項。您參與的或最近開啟的多個儲存庫將顯示出來。您也可以使用完整的 GitHub URL 選擇一個儲存庫。將以下 URL 貼入輸入框：

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ 如果成功，您將看到該儲存庫的所有檔案載入到文字編輯器中。

### 2. 使用 URL

您也可以直接使用 URL 載入儲存庫。例如，目前儲存庫的完整 URL 是 [https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)，但您可以將 GitHub 網域替換為 `VSCode.dev/github`，直接載入儲存庫。結果 URL 為 [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners)。

## 編輯檔案

在瀏覽器或 vscode.dev 中開啟儲存庫後，下一步是更新或修改專案。

### 1. 建立新檔案

您可以在現有資料夾中建立檔案，也可以在根目錄/資料夾中建立檔案。要建立新檔案，請開啟您希望儲存檔案的位置/目錄，選擇活動列 _(左側)_ 的 _'New file ...'_ 圖示，命名檔案並按下 Enter。

![建立新檔案](../../../../8-code-editor/images/create-new-file.png)

### 2. 編輯並儲存儲存庫中的檔案

使用 vscode.dev 非常方便，尤其是在您需要快速更新專案而不想在本地載入任何軟體時。
要更新程式碼，點擊活動列上的 '檔案總管' 圖示以查看儲存庫中的檔案和資料夾。
選擇一個檔案以在程式碼區域中開啟，進行修改並儲存。

![編輯檔案](../../../../8-code-editor/images/edit-a-file.png)

完成專案更新後，選擇 _`版本控制`_ 圖示，該圖示包含您對儲存庫所做的所有新變更。

要查看您對專案所做的變更，選擇展開的活動列中 `Changes` 資料夾中的檔案。這將開啟一個 '工作樹'，讓您直觀地查看檔案的變更。紅色表示刪除，綠色表示新增。

![查看變更](../../../../8-code-editor/images/working-tree.png)

如果您對所做的變更感到滿意，將滑鼠移至 `Changes` 資料夾並點擊 `+` 按鈕以暫存變更。暫存表示準備將變更提交到 GitHub。

如果您對某些變更不滿意並希望捨棄它們，將滑鼠移至 `Changes` 資料夾並選擇 `撤銷` 圖示。

接著，輸入 `提交訊息` _(描述您對專案所做的變更)_，點擊 `勾選圖示` 提交並推送您的變更。

完成專案工作後，選擇左上方的 `漢堡選單圖示` 返回 github.com 上的儲存庫。

![暫存並提交變更](../../../../8-code-editor/images/edit-vscode.dev.gif)

## 使用擴充功能

在 VSCode 中安裝擴充功能可以為編輯器新增功能並自訂開發環境選項，以改善您的開發工作流程。這些擴充功能還能幫助您支援多種程式語言，通常分為通用擴充功能或基於語言的擴充功能。

要瀏覽所有可用擴充功能的列表，點擊活動列上的 _`擴充功能圖示`_，並在標記為 _'Search Extensions in Marketplace'_ 的文字框中輸入擴充功能名稱。
您將看到一個擴充功能列表，每個擴充功能包含 **名稱、發佈者名稱、一句描述、下載次數** 和 **星級評分**。

![擴充功能詳情](../../../../8-code-editor/images/extension-details.png)

您還可以透過展開 _`已安裝資料夾`_ 查看所有已安裝的擴充功能，透過 _`熱門資料夾`_ 查看大多數開發者使用的熱門擴充功能，以及透過 _`推薦資料夾`_ 查看基於您最近開啟的檔案或相同工作區使用者推薦的擴充功能。

![查看擴充功能](../../../../8-code-editor/images/extensions.png)

### 1. 安裝擴充功能

要安裝擴充功能，請在搜尋框中輸入擴充功能名稱，並點擊它以在展開的活動列中查看該擴充功能的更多資訊。

您可以點擊展開的活動列中的 _藍色安裝按鈕_ 安裝，或在選擇擴充功能以載入更多資訊後，使用程式碼區域中的安裝按鈕。

![安裝擴充功能](../../../../8-code-editor/images/install-extension.gif)

### 2. 自訂擴充功能

安裝擴充功能後，您可能需要根據自己的偏好修改其行為並進行自訂。要執行此操作，選擇擴充功能圖示，這次您的擴充功能將出現在 _已安裝資料夾_ 中，點擊 _**齒輪圖示**_ 並導航至 _擴充功能設定_。

![修改擴充功能設定](../../../../8-code-editor/images/extension-settings.png)

### 3. 管理擴充功能

安裝並使用擴充功能後，vscode.dev 提供了根據不同需求管理擴充功能的選項。例如，您可以選擇：

- **停用：** _(當您暫時不需要擴充功能但不想完全卸載時，可以停用它)_

    選擇展開的活動列中的已安裝擴充功能 > 點擊齒輪圖示 > 選擇 '停用' 或 '停用（工作區）' **或** 開啟程式碼區域中的擴充功能並點擊藍色停用按鈕。

- **卸載：** 選擇展開的活動列中的已安裝擴充功能 > 點擊齒輪圖示 > 選擇 '卸載' **或** 開啟程式碼區域中的擴充功能並點擊藍色卸載按鈕。

---

## 作業

[使用 vscode.dev 建立履歷網站](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

## 複習與自學

閱讀更多關於 [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) 及其其他功能的資訊。

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件作為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。