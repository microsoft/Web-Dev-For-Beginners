<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T08:55:48+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "hk"
}
-->
***

# 使用代碼編輯器：掌握 [VSCode.dev](https://vscode.dev)

**歡迎！**  
本課程將帶你從基礎到進階使用 [VSCode.dev](https://vscode.dev)——一個功能強大的基於網頁的代碼編輯器。你將學習如何自信地編輯代碼、管理項目、追蹤更改、安裝擴展以及像專業人士一樣進行協作——全部都可以直接在瀏覽器中完成，無需安裝。

***

## 學習目標

完成本課程後，你將能夠：

- 高效地在任何項目上使用代碼編輯器，隨時隨地
- 使用內建的版本控制無縫追蹤工作
- 通過編輯器自定義和擴展提升你的開發工作流程

***

## 先決條件

開始之前，請**註冊一個免費的 [GitHub](https://github.com) 帳戶**，它可以幫助你管理代碼倉庫並與全球開發者協作。如果你還沒有帳戶，[點擊這裡創建一個](https://github.com/)。

***

## 為什麼使用基於網頁的代碼編輯器？

像 VSCode.dev 這樣的**代碼編輯器**是你編寫、編輯和管理代碼的指揮中心。它擁有直觀的界面、豐富的功能，並且可以直接通過瀏覽器訪問，你可以：

- 在任何設備上編輯項目
- 避免安裝的麻煩
- 即時協作和貢獻

一旦熟悉了 VSCode.dev，你就能隨時隨地應對各種編碼任務。

***

## 開始使用 VSCode.dev

打開 **[VSCode.dev](https://vscode.dev)**——無需安裝，無需下載。使用 GitHub 登錄可以解鎖完整功能，包括同步你的設置、擴展和倉庫。如果系統提示，請連接你的 GitHub 帳戶。

加載後，你的工作區將如下所示：

![Default VSCode.dev](../../../../8-code-editor/images/default-vscode-dev)

VSCode.dev 的界面分為三個核心部分：

- **活動欄：** 包括 🔎（搜索）、⚙️（設置）、文件、源代碼控制等圖標。
- **側邊欄：** 根據選擇的活動欄圖標改變上下文（默認為 *Explorer*，顯示文件）。
- **編輯器/代碼區域：** 右側最大部分——你實際編輯和查看代碼的地方。

點擊圖標探索功能，但記得返回 _Explorer_ 保持位置。

***

## 打開 GitHub 倉庫

### 方法一：通過編輯器

1. 打開 [VSCode.dev](https://vscode.dev)。點擊 **"Open Remote Repository"**。

   ![Open remote repository](../../../../8-code-editor/images/open-remote-repository)

   或者使用 _命令面板_（Ctrl-Shift-P，Mac 上為 Cmd-Shift-P）。

   ![Palette Menu](../../../../translated_images/palette-menu.4946174e07f426226afcdad707d19b8d5150e41591c751c45b5dee213affef91.hk.png)

   - 選擇該選項。
   - 粘貼你的 GitHub 倉庫 URL（例如 `https://github.com/microsoft/Web-Dev-For-Beginners`），然後按 Enter。

如果成功，你將看到整個項目加載並準備好進行編輯！

***

### 方法二：通過 URL 快速打開

將任何 GitHub 倉庫 URL 替換 `github.com` 為 `vscode.dev/github`，即可直接在 VSCode.dev 中打開。  
例如：

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

此功能能快速訪問任何項目。

***

## 編輯項目中的文件

倉庫打開後，你可以：

### 1. **創建新文件**
- 在 *Explorer* 側邊欄中，導航到你想要的文件夾或使用根目錄。
- 點擊 _‘New file ...’_ 圖標。
- 命名你的文件，按 **Enter**，文件會立即出現。

![Create a new file](../../../../8-code-editor/images/create-new-file)

### 2. **編輯和保存文件**

- 點擊 *Explorer* 中的文件以在代碼區域中打開。
- 根據需要進行更改。
- VSCode.dev 會自動保存你的更改，但你也可以按 Ctrl+S 手動保存。

![Edit a file](../../../../translated_images/edit-a-file.52c0ee665ef19f08119d62d63f395dfefddc0a4deb9268d73bfe791f52c5807a.hk.png)

### 3. **使用版本控制追蹤和提交更改**

VSCode.dev 集成了 **Git** 版本控制！

- 點擊 _'Source Control'_ 圖標查看所有更改。
- `Changes` 文件夾中的文件顯示新增（綠色）和刪除（紅色）。  
  ![View changes](../../../../translated_images/working-tree.c58eec08e6335c79cc708c0c220c0b7fea61514bd3c7fb7471905a864aceac7c.hk.png)

- 點擊文件旁的 `+` 準備提交更改。
- 點擊撤銷圖標 **丟棄** 不需要的更改。
- 輸入清晰的提交信息，然後點擊勾號提交並推送。

要返回 GitHub 倉庫，選擇左上角的漢堡菜單。

![Stage & commit changes](../../../../8-code-editor/images/edit-vscode.dev)

***

## 使用擴展提升功能

擴展可以為 VSCode.dev 添加語言支持、主題、調試工具和生產力工具——讓你的編碼生活更輕鬆、更有趣。

### 瀏覽和管理擴展

- 點擊活動欄上的 **Extensions 圖標**。
- 在 _'Search Extensions in Marketplace'_ 框中搜索擴展。

  ![Extension details](../../../../8-code-editor/images/extension-details)

  - **已安裝：** 所有你添加的擴展
  - **熱門：** 行業最受歡迎的擴展
  - **推薦：** 根據你的工作流程量身定制

  ![View extensions](

  

***

### 1. **安裝擴展**

- 在搜索框中輸入擴展名稱，點擊它，並在編輯器中查看詳細信息。
- 點擊側邊欄或主代碼區域中的 **藍色安裝按鈕**。

  ![Install extensions](../../../../8-code-editor/images/install-extension)

### 2. **自定義擴展**

- 找到你已安裝的擴展。
- 點擊 **齒輪圖標** → 選擇 _Extension Settings_，根據喜好微調行為。

  ![Modify extension settings](../../../../8-code-editor/images/extension-settings)

### 3. **管理擴展**
你可以：

- **禁用：** 暫時關閉擴展但保留安裝
- **卸載：** 如果不再需要，永久移除擴展

  找到擴展，點擊齒輪圖標，選擇 "Disable" 或 "Uninstall"，或者使用代碼區域中的藍色按鈕。

***

## 作業

測試你的技能：[使用 vscode.dev 創建一個簡歷網站](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## 深入探索和自學

- 通過 [VSCode Web 官方文檔](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) 深入了解。
- 探索進階工作區功能、快捷鍵和設置。

***

**現在你已準備好隨時隨地使用 VSCode.dev 進行編碼、創建和協作！**

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。