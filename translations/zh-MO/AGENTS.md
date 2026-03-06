# AGENTS.md

## 項目概覽

這是一個用於教導初學者網頁開發基礎的教育課程資源庫。課程為一個由 Microsoft Cloud Advocates 開發的完整 12 週課程，包含 24 節實作課程，涵蓋 JavaScript、CSS 和 HTML。

### 主要組成部分

- **教育內容**：24 節結構化課程，組織成以專案為基礎的模組
- **實作專案**：Terrarium、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用程式、程式碼編輯器和 AI 聊天助理
- **互動測驗**：48 個測驗，每個有 3 題（課前/課後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯 50 多種語言
- **技術**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 專案）

### 架構

- 以課程為基礎的教育資源庫架構
- 每個課程資料夾包含 README、程式碼示例和解答
- 獨立專案分置於不同目錄中（quiz-app、各課程專案）
- 使用 GitHub Actions（co-op-translator）進行翻譯系統
- 文件使用 Docsify 呈現，並提供 PDF 版本

## 設置命令

該資源庫主要用於教育內容消費。若要操作特定專案：

### 主資源庫設置

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用設置 (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 開始開發伺服器
npm run build      # 生產環境建構
npm run lint       # 執行 ESLint
```

### 銀行專案 API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # 啟動 API 伺服器
npm run lint       # 執行 ESLint
npm run format     # 使用 Prettier 格式化
```

### 瀏覽器擴充專案

```bash
cd 5-browser-extension/solution
npm install
# 遵循瀏覽器特定的擴充功能載入指示
```

### 太空遊戲專案

```bash
cd 6-space-game/solution
npm install
# 在瀏覽器中開啟 index.html 或使用即時伺服器
```

### 聊天專案 (Python 後端)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 設定 GITHUB_TOKEN 環境變量
python api.py
```

## 開發工作流程

### 對內容貢獻者

1. **Fork 該資源庫** 至你的 GitHub 帳號
2. **將你的 fork 複製** 至本地
3. **為你的更改創建新分支**
4. 修改課程內容或程式碼範例
5. 在相關專案目錄中測試任何程式碼更動
6. 根據貢獻規範提交 Pull Request

### 對學習者

1. Fork 或複製該資源庫
2. 按順序瀏覽課程資料夾
3. 閱讀每節課的 README 文件
4. 完成 https://ff-quizzes.netlify.app/web/ 上的課前測驗
5. 按課程資料夾操作程式碼範例
6. 完成作業和挑戰
7. 進行課後測驗

### 實時開發

- **文件**：在根目錄執行 `docsify serve` (端口 3000)
- **測驗應用**：在 quiz-app 目錄執行 `npm run dev`
- **專案**：HTML 專案使用 VS Code Live Server 擴充套件
- **API 專案**：分別在 API 目錄執行 `npm start`

## 測試說明

### 測驗應用測試

```bash
cd quiz-app
npm run lint       # 檢查程式碼風格問題
npm run build      # 確認建構成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查程式碼風格問題
node server.js     # 確認伺服器啟動無錯誤
```

### 一般測試方法

- 本教育資源庫無全面自動化測試
- 人工作測重點：
  - 程式碼範例可正常執行
  - 文件中的連結功能正常
  - 專案成功構建
  - 範例符合最佳實踐

### 提交前檢查

- 在有 package.json 的目錄下執行 `npm run lint`
- 驗證 Markdown 連結有效性
- 在瀏覽器或 Node.js 測試程式碼範例
- 確認翻譯保持適當架構

## 代碼風格指導

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案中 ESLint 標準配置
- 使用具教育意義的變數和函數命名
- 添加解釋概念的註解以利學習者理解
- 在配置了 Prettier 的地方進行格式化

### HTML/CSS

- 語意化的 HTML5 元素
- 響應式設計原則
- 清晰的類名命名規則
- CSS 技術附加註解以供學習參考

### Python

- 遵循 PEP 8 風格指南
- 清晰且具教育意義的程式碼範例
- 需時可加上型別提示以助學習

### Markdown 文件

- 清晰的標題層級
- 附帶語言標示的程式碼區塊
- 指向額外資源的連結
- `images/` 資料夾中的截圖和圖片
- 具可及性的圖片替代文字

### 檔案組織

- 課程依序編號 （1-getting-started-lessons、2-js-basics 等）
- 每個專案有 `solution/` 且通常有 `start/` 或 `your-work/` 目錄
- 圖片存放於課程專屬的 `images/` 文件夾
- 翻譯文件在 `translations/{language-code}/` 結構中

## 建置和部署

### 測驗應用部署 (Azure Static Web Apps)

quiz-app 配置用於 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在 push 到 main 時透過 GitHub Actions 工作流程部署
```

Azure Static Web Apps 配置：
- **應用位置**：`/quiz-app`
- **輸出位置**：`dist`
- **工作流程**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文件 PDF 產生

```bash
npm install                    # 安裝 docsify-to-pdf
npm run convert               # 從 docs 生成 PDF
```

### Docsify 文件

```bash
npm install -g docsify-cli    # 全域安裝 Docsify
docsify serve                 # 在 localhost:3000 提供服務
```

### 專案特定建置

每個專案目錄可能擁有自己的建置流程：
- Vue 專案：使用 `npm run build` 產生生產環境包
- 靜態專案：無建置步驟，直接提供檔案服務

## Pull Request 指引

### 標題格式

使用清晰且描述變更範圍的標題：
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### 必須檢查事項

提交 PR 前：

1. **代碼品質**：
   - 在受影響專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤及警告

2. **建置驗證**：
   - 如適用執行 `npm run build`
   - 確保無建置錯誤

3. **連結驗證**：
   - 測試所有 Markdown 連結
   - 驗證圖片引用是否有效

4. **內容審核**：
   - 校對拼寫與文法
   - 確認程式碼範例正確且具教育意義
   - 驗證翻譯內容保持原意

### 貢獻要求

- 同意 Microsoft CLA（首個 PR 自動檢查）
- 遵守 [Microsoft 開源行為守則](https://opensource.microsoft.com/codeofconduct/)
- 詳細規範見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如適用，PR 描述中引用議題號碼

### 審核流程

- PR 由維護者及社群審核
- 優先考量教學清晰度
- 程式碼範例應遵循現行最佳實踐
- 翻譯審核確保準確且符合文化

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 搭配 co-op-translator 工作流程
- 自動翻譯至 50 多種語言
- 原始檔置於主目錄
- 翻譯檔案於 `translations/{language-code}/` 目錄

### 手動翻譯改善

1. 定位至 `translations/{language-code}/` 中檔案
2. 在保留架構前提下進行改進
3. 確保程式碼範例持續可用
4. 測試任何本地化的測驗內容

### 翻譯元資料

翻譯檔包含元資料標頭：
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## 除錯與故障排除

### 常見問題

**測驗應用啟動失敗**：
- 檢查 Node.js 版本（建議 v14 以上）
- 刪除 `node_modules` 和 `package-lock.json`，重新執行 `npm install`
- 檢查埠口衝突（預設：Vite 使用端口 5173）

**API 服務器無法啟動**：
- 確認 Node.js 版本符合最低需求（node >=10）
- 檢查埠口是否被佔用
- 確保所有依賴皆已安裝 (`npm install`)

**瀏覽器擴充功能無法載入**：
- 確認 manifest.json 格式正確
- 檢查瀏覽器控制台錯誤訊息
- 遵循瀏覽器特定的擴充安裝說明

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認已設定 GITHUB_TOKEN 環境變數
- 檢查 GitHub Models 存取權限

**Docsify 未提供文件服務**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄執行
- 確認 `docs/_sidebar.md` 存在

### 開發環境小提示

- 使用 VS Code 搭配 Live Server 擴充套件開發 HTML 專案
- 安裝 ESLint 與 Prettier 擴充以維持格式一致
- 使用瀏覽器開發工具除錯 JavaScript
- Vue 專案安裝 Vue DevTools 瀏覽器擴充

### 效能考量

- 翻譯檔案多（50 多種語言）使整體複製體積大
- 對僅操作內容者可用淺層複製：`git clone --depth 1`
- 編輯英文內容時，盡量排除翻譯目錄搜尋
- 建置過程首次執行可能較慢（npm install、Vite 建置）

## 安全考量

### 環境變數

- API 金鑰絕不可提交至資源庫
- 使用 `.env` 檔案（已加入 `.gitignore`）
- 在專案 README 中記錄所需環境變數

### Python 專案

- 使用虛擬環境管理依賴：`python -m venv venv`
- 保持依賴更新
- GitHub 令牌需設定最小權限

### GitHub Models 存取

- 需使用個人存取令牌（PAT）
- 將令牌存為環境變數
- 絕不可將令牌或認證資料提交到資源庫

## 補充說明

### 目標受眾

- 完全初學網頁開發者
- 學生及自學者
- 教師課堂使用者
- 內容設計注重無障礙及循序漸進技術提升

### 教育理念

- 以專案為核心的學習方式
- 頻繁知識檢測（測驗）
- 實作練習為主
- 實務範例導入
- 先學基礎概念再進階框架

### 資源庫維護

- 積極活躍的學習者和貢獻者社群
- 定期更新依賴和內容
- 維護者監控議題和討論
- 翻譯更新自動執行於 GitHub Actions

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、數據科學、機器學習、物聯網課程可用

### 使用特定專案說明

個別專案詳細說明見相應 README：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 帶認證的銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - Canvas 遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo 結構說明

雖然非傳統 monorepo，此資源庫包含多個獨立專案：
- 每節課程獨立自主
- 專案間無依賴共用
- 可單獨作業不影響他人
- 複製整個資源庫以獲得完整課程體驗

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件由 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻譯。雖然我們力求準確，但請注意，自動翻譯可能包含錯誤或不準確之處。原始語言文件應被視為具權威性的來源。對於重要資訊，建議採用專業人工翻譯。我們對因使用本翻譯而產生的任何誤解或誤譯概不負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->