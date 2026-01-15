<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71009af209f81cc01a1f2d324200375f",
  "translation_date": "2025-10-03T08:53:49+00:00",
  "source_file": "for-teachers.md",
  "language_code": "hk"
}
-->
### 給教育工作者

歡迎您在課堂上使用這份課程內容。它可以無縫配合 GitHub Classroom 和主流 LMS 平台使用，也可以作為獨立的資源庫供學生使用。

### 配合 GitHub Classroom 使用

為了按班級管理課程和作業，請為每節課創建一個獨立的資源庫，這樣 GitHub Classroom 就能獨立附加每個作業。

- 將此資源庫 Fork 到您的組織。
- 為每節課創建一個獨立的資源庫，將每節課的文件夾提取到自己的資源庫中。
  - 選項 A：創建空的資源庫（每節課一個），並將課程文件夾內容複製到每個資源庫中。
  - 選項 B：使用保留 Git 歷史記錄的方法（例如，將文件夾拆分到新資源庫中），如果您需要保留來源記錄。
- 在 GitHub Classroom 中，為每節課創建一個作業，並指向相應的課程資源庫。
- 推薦設置：
  - 資源庫可見性：設置為私有以保護學生的作業。
  - 使用課程資源庫的默認分支作為起始代碼。
  - 為測驗和提交添加 Issue 和 Pull Request 模板。
  - 如果課程中包含自動評分和測試，可以選擇性配置。
- 有助於管理的命名規範：
  - 資源庫名稱如 lesson-01-intro、lesson-02-html 等。
  - 標籤：quiz、assignment、needs-review、late、resubmission。
  - 按班級使用標籤/版本（例如，v2025-term1）。

提示：避免將資源庫存放在同步文件夾（例如 OneDrive/Google Drive）中，以防止在 Windows 上出現 Git 衝突。

### 配合 Moodle、Canvas 或 Blackboard 使用

此課程包含可導入的包，適用於常見的 LMS 工作流程。

- Moodle：使用 Moodle 上傳文件 [Moodle upload file](../../../../../../../teaching-files/webdev-moodle.mbz) 加載完整課程。
- Common Cartridge：使用 Common Cartridge 文件 [Common Cartridge file](../../../../../../../teaching-files/webdev-common-cartridge.imscc) 以獲得更廣泛的 LMS 兼容性。
- 注意事項：
  - Moodle Cloud 對 Common Cartridge 的支持有限。建議使用上面的 Moodle 文件，該文件也可以上傳到 Canvas。
  - 導入後，請檢查模塊、截止日期和測驗設置，以匹配您的學期安排。

![Moodle](../../translated_images/hk/moodle.94eb93d714a50cb2.webp)
> Moodle 課堂中的課程內容

![Canvas](../../translated_images/hk/canvas.fbd605ff8e5b8aff.webp)
> Canvas 課堂中的課程內容

### 直接使用資源庫（不使用 Classroom）

如果您不想使用 GitHub Classroom，可以直接從此資源庫運行課程。

- 同步/在線格式（Zoom/Teams）：
  - 進行短時間的導師引導暖場活動；使用分組討論室進行測驗。
  - 宣布測驗的時間窗口；學生以 GitHub Issues 提交答案。
  - 對於協作作業，學生在公共課程資源庫中工作並提交 Pull Requests。
- 私密/非同步格式：
  - 學生將每節課 Fork 到自己的 **私有** 資源庫，並將您添加為協作者。
  - 他們通過 Issues（測驗）和 Pull Requests（作業）提交到您的課堂資源庫或他們的私有 Fork。

### 最佳實踐

- 提供一節關於 Git/GitHub 基礎知識、Issues 和 PR 的入門課程。
- 在 Issues 中使用清單來管理多步驟的測驗/作業。
- 添加 CONTRIBUTING.md 和 CODE_OF_CONDUCT.md 以設置課堂規範。
- 添加無障礙使用的註釋（例如，替代文字、字幕），並提供可打印的 PDF。
- 按學期版本化您的內容，並在發布後凍結課程資源庫。

### 反饋與支持

我們希望這份課程能夠幫助您和您的學生。如果有任何錯誤、需求或改進建議，請在此資源庫中開啟新的 Issue，或者在 Teacher Corner 中發起討論。

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。