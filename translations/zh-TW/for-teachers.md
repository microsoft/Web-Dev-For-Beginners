### 給教育工作者

歡迎您在課堂上使用這份課程內容。它可以無縫整合到 GitHub Classroom 和主流 LMS 平台中，也可以作為獨立的倉庫供學生使用。

### 使用 GitHub Classroom

若要按班級管理課程和作業，請為每節課建立一個倉庫，這樣 GitHub Classroom 就能獨立附加每個作業。

- 將此倉庫分叉到您的組織。
- 為每節課建立一個獨立的倉庫，方法是將每節課的文件夾提取到自己的倉庫中。
  - 選項 A：建立空的倉庫（每節課一個），並將課程文件夾內容複製到每個倉庫中。
  - 選項 B：使用保留 Git 歷史記錄的方法（例如，將文件夾拆分到新倉庫中），如果您需要追溯來源。
- 在 GitHub Classroom 中，為每節課建立一個作業，並指向相應的課程倉庫。
- 推薦設置：
  - 倉庫可見性：設置為私有以保護學生作品。
  - 使用課程倉庫的默認分支作為起始代碼。
  - 為測驗和提交添加 Issue 和 Pull Request 模板。
  - 如果課程包含自動評分和測試，可選擇配置相關功能。
- 有助於管理的命名規範：
  - 倉庫名稱如 lesson-01-intro、lesson-02-html 等。
  - 標籤：quiz、assignment、needs-review、late、resubmission。
  - 按班級添加標籤/版本（例如，v2025-term1）。

提示：避免將倉庫存放在同步文件夾（例如 OneDrive/Google Drive）中，以防止在 Windows 上出現 Git 衝突。

### 使用 Moodle、Canvas 或 Blackboard

此課程包含可導入的包，適用於常見的 LMS 工作流程。

- Moodle：使用 Moodle 上傳文件 [Moodle upload file](../../../../../../../teaching-files/webdev-moodle.mbz) 加載完整課程。
- Common Cartridge：使用 Common Cartridge 文件 [Common Cartridge file](../../../../../../../teaching-files/webdev-common-cartridge.imscc) 以獲得更廣泛的 LMS 兼容性。
- 注意事項：
  - Moodle Cloud 對 Common Cartridge 的支持有限。建議使用上述 Moodle 文件，該文件也可上傳到 Canvas。
  - 導入後，請檢查模組、截止日期和測驗設置，以匹配您的學期安排。

![Moodle](../../translated_images/zh-TW/moodle.94eb93d714a50cb2.webp)
> Moodle 課堂中的課程內容

![Canvas](../../translated_images/zh-TW/canvas.fbd605ff8e5b8aff.webp)
> Canvas 課堂中的課程內容

### 直接使用倉庫（不使用 Classroom）

如果您不想使用 GitHub Classroom，可以直接從此倉庫運行課程。

- 同步/在線格式（Zoom/Teams）：
  - 進行短時間的導師引導暖場；使用分組討論室進行測驗。
  - 宣布測驗的時間窗口；學生以 GitHub Issues 提交答案。
  - 對於協作作業，學生在公共課程倉庫中工作並開啟 Pull Requests。
- 私密/非同步格式：
  - 學生將每節課分叉到自己的 **私有** 倉庫，並將您添加為協作者。
  - 他們通過 Issues（測驗）和 Pull Requests（作業）提交到您的課堂倉庫或他們的私有分叉。

### 最佳實踐

- 提供一節關於 Git/GitHub 基礎、Issues 和 PR 的入門課程。
- 在 Issues 中使用清單來管理多步測驗/作業。
- 添加 CONTRIBUTING.md 和 CODE_OF_CONDUCT.md 以設置課堂規範。
- 添加無障礙使用的註釋（例如替代文字、字幕），並提供可打印的 PDF。
- 按學期版本化您的內容，並在發布後凍結課程倉庫。

### 反饋與支持

我們希望這份課程能幫助您和您的學生。如果有錯誤、需求或改進建議，請在此倉庫中開啟新的 Issue，或在教師交流區開始討論。

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵信息，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。