<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T08:59:31+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "tw"
}
-->
***

# 使用程式碼編輯器：掌握 [VSCode.dev](https://vscode.dev)

**歡迎！**  
本課程將帶您從基礎到進階使用 [VSCode.dev](https://vscode.dev)——這是一款功能強大的基於網頁的程式碼編輯器。您將學習如何自信地編輯程式碼、管理專案、追蹤變更、安裝擴充功能，以及像專業人士一樣進行協作——全部都能直接在瀏覽器中完成，無需安裝。

***

## 學習目標

完成本課程後，您將能夠：

- 高效地在任何專案上使用程式碼編輯器，隨時隨地
- 使用內建版本控制無縫追蹤您的工作
- 透過編輯器自訂和擴充功能個性化並提升您的開發工作流程

***

## 先決條件

開始之前，請**註冊一個免費的 [GitHub](https://github.com) 帳戶**，這將幫助您管理程式碼倉庫並與全球開發者協作。如果您尚未擁有帳戶，請[在此建立](https://github.com/)。

***

## 為什麼使用基於網頁的程式碼編輯器？

像 VSCode.dev 這樣的**程式碼編輯器**是您撰寫、編輯和管理程式碼的指揮中心。它擁有直觀的介面、豐富的功能，並且可以直接透過瀏覽器訪問，您可以：

- 在任何設備上編輯專案
- 避免安裝的麻煩
- 即時協作和貢獻

一旦熟悉 VSCode.dev，您就能隨時隨地處理程式碼任務。

***

## 開始使用 VSCode.dev

前往 **[VSCode.dev](https://vscode.dev)**——無需安裝，無需下載。使用 GitHub 登錄可解鎖完整功能，包括同步您的設定、擴充功能和倉庫。如果系統提示，請連接您的 GitHub 帳戶。

載入後，您的工作區將如下所示：

![Default VSCode.dev](../../../../8-code-editor/images/default-vscode-dev)

工作區分為三個核心區域，從左到右：
- **活動欄：** 包括 🔎（搜尋）、⚙️（設定）、檔案、版本控制等圖示。
- **側邊欄：** 根據選擇的活動欄圖示改變上下文（預設為 *Explorer* 顯示檔案）。
- **編輯器/程式碼區域：** 最大的右側區域——您將在此編輯和查看程式碼。

點擊圖示探索功能，但請返回 _Explorer_ 以保持位置。

***

## 開啟 GitHub 倉庫

### 方法 1：透過編輯器

1. 前往 [VSCode.dev](https://vscode.dev)。點擊 **"Open Remote Repository"**。

   ![Open remote repository](../../../../8-code-editor/images/open-remote-repository)

   或使用 _命令面板_（Ctrl-Shift-P，或 Mac 上的 Cmd-Shift-P）。

   ![Palette Menu](../../../../translated_images/palette-menu.4946174e07f426226afcdad707d19b8d5150e41591c751c45b5dee213affef91.tw.png)

   - 選擇該選項。
   - 貼上您的 GitHub 倉庫 URL（例如 `https://github.com/microsoft/Web-Dev-For-Beginners`），然後按 Enter。

如果成功，您將看到整個專案已載入並準備好編輯！

***

### 方法 2：透過 URL 即時開啟

將任何 GitHub 倉庫 URL 替換 `github.com` 為 `vscode.dev/github`，即可直接在 VSCode.dev 中開啟。  
例如：

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

此功能能快速訪問任何專案。

***

## 編輯專案中的檔案

倉庫開啟後，您可以：

### 1. **建立新檔案**
- 在 *Explorer* 側邊欄中，導航至您想要的資料夾或使用根目錄。
- 點擊 _‘New file ...’_ 圖示。
- 命名您的檔案，按 **Enter**，檔案會立即出現。

![Create a new file](../../../../8-code-editor/images/create-new-file)

### 2. **編輯並儲存檔案**

- 點擊 *Explorer* 中的檔案以在程式碼區域中開啟。
- 根據需要進行修改。
- VSCode.dev 會自動儲存您的變更，但您也可以按 Ctrl+S 手動儲存。

![Edit a file](../../../../translated_images/edit-a-file.52c0ee665ef19f08119d62d63f395dfefddc0a4deb9268d73bfe791f52c5807a.tw.png)

### 3. **使用版本控制追蹤並提交變更**

VSCode.dev 集成了 **Git** 版本控制！

- 點擊 _'Source Control'_ 圖示以查看所有已做的變更。
- `Changes` 資料夾中的檔案顯示新增（綠色）和刪除（紅色）。  
  ![View changes](../../../../translated_images/working-tree.c58eec08e6335c79cc708c0c220c0b7fea61514bd3c7fb7471905a864aceac7c.tw.png)

- 點擊檔案旁的 `+` 以準備提交變更。
- 點擊撤銷圖示以**丟棄**不需要的變更。
- 輸入清晰的提交訊息，然後點擊勾選符號以提交並推送。

要返回 GitHub 倉庫，請選擇左上角的漢堡菜單。

![Stage & commit changes](../../../../8-code-editor/images/edit-vscode.dev)

***

## 使用擴充功能提升工作效率

擴充功能可讓您為 VSCode.dev 添加語言、主題、除錯工具和生產力工具——使您的程式碼編輯更輕鬆、更有趣。

### 瀏覽和管理擴充功能

- 點擊活動欄中的 **擴充功能圖示**。
- 在 _'Search Extensions in Marketplace'_ 框中搜尋擴充功能。

  ![Extension details](../../../../8-code-editor/images/extension-details)

  - **已安裝：** 您已添加的所有擴充功能
  - **熱門：** 行業最受歡迎的擴充功能
  - **推薦：** 根據您的工作流程量身定制

  ![View extensions](

  

***

### 1. **安裝擴充功能**

- 在搜尋框中輸入擴充功能名稱，點擊它，並在編輯器中查看詳細資訊。
- 點擊側邊欄或程式碼區域中的 **藍色安裝按鈕**。

  ![Install extensions](../../../../8-code-editor/images/install-extension)

### 2. **自訂擴充功能**

- 找到您已安裝的擴充功能。
- 點擊 **齒輪圖示** → 選擇 _Extension Settings_ 以微調行為。

  ![Modify extension settings](../../../../8-code-editor/images/extension-settings)

### 3. **管理擴充功能**
您可以：

- **停用：** 暫時關閉擴充功能但保留安裝
- **卸載：** 如果不再需要，永久移除擴充功能

  找到擴充功能，點擊齒輪圖示，選擇‘Disable’或‘Uninstall’，或使用程式碼區域中的藍色按鈕。

***

## 作業

測試您的技能：[使用 vscode.dev 建立履歷網站](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## 進一步探索與自學

- 深入了解 [官方 VSCode Web 文件](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza)。
- 探索進階工作區功能、鍵盤快捷鍵和設定。

***

**現在您已準備好使用 VSCode.dev 隨時隨地進行程式碼編輯、創建和協作！**

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。