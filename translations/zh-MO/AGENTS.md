# AGENTS.md

## 專案概述

這是一個教育課程資源庫，用於教授初學者網頁開發的基礎知識。課程是一個由 Microsoft Cloud Advocates 開發的完整 12 週課程，包含 24 篇實作課程，涵蓋 JavaScript、CSS 和 HTML。

### 主要組成部分

- **教育內容**：24 篇結構化課程，組織成基於專案的模組
- **實作專案**：包括生態瓶、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用程式、程式碼編輯器和 AI 聊天助手
- **互動測驗**：48 個測驗，每個測驗包含 3 個問題（課前/課後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯成 50 多種語言
- **技術**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 專案）

### 架構

- 以課程為基礎的教育資源庫
- 每個課程資料夾包含 README、程式碼範例和解答
- 獨立專案存放於不同目錄（quiz-app、各課程專案）
- 使用 GitHub Actions 的翻譯系統（co-op-translator）
- 文件透過 Docsify 提供，並可下載 PDF 格式

## 設置指令

此資源庫主要用於教育內容的使用。若需操作特定專案：

### 主資源庫設置

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用程式設置（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### 銀行專案 API（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### 瀏覽器擴充功能專案

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### 太空遊戲專案

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### 聊天專案（Python 後端）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## 開發工作流程

### 對於內容貢獻者

1. **Fork 資源庫**到您的 GitHub 帳戶
2. **將 Fork 的資源庫克隆**到本地
3. **建立新分支**以進行修改
4. 修改課程內容或程式碼範例
5. 在相關專案目錄中測試程式碼修改
6. 根據貢獻指南提交 Pull Request

### 對於學習者

1. Fork 或克隆資源庫
2. 按順序進入課程目錄
3. 閱讀每個課程的 README 文件
4. 完成課前測驗：https://ff-quizzes.netlify.app/web/
5. 在課程資料夾中操作程式碼範例
6. 完成作業和挑戰
7. 完成課後測驗

### 即時開發

- **文件**：在根目錄執行 `docsify serve`（埠 3000）
- **測驗應用程式**：在 quiz-app 目錄執行 `npm run dev`
- **專案**：使用 VS Code 的 Live Server 擴充功能開啟 HTML 專案
- **API 專案**：在相關 API 目錄執行 `npm start`

## 測試指引

### 測驗應用程式測試

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### 一般測試方法

- 此資源庫為教育用途，未包含全面的自動化測試
- 手動測試重點：
  - 確保程式碼範例無錯誤執行
  - 文件中的連結正常運作
  - 專案成功完成建置
  - 範例遵循最佳實踐

### 提交前檢查

- 在包含 package.json 的目錄執行 `npm run lint`
- 驗證 Markdown 連結是否有效
- 在瀏覽器或 Node.js 中測試程式碼範例
- 確保翻譯保持正確結構

## 程式碼風格指南

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案提供的標準 ESLint 配置
- 使用具教育意義的變數和函數名稱
- 添加註解以解釋概念，方便學習者理解
- 在配置的地方使用 Prettier 格式化

### HTML/CSS

- 使用語義化的 HTML5 元素
- 遵循響應式設計原則
- 清晰的類名命名規範
- 添加註解以解釋 CSS 技術，方便學習者理解

### Python

- 遵循 PEP 8 風格指南
- 提供清晰的教育性程式碼範例
- 在需要時添加類型提示以幫助學習

### Markdown 文件

- 清晰的標題層次結構
- 使用語言指定的程式碼區塊
- 提供額外資源的連結
- 在 `images/` 目錄中存放截圖和圖片
- 為圖片添加替代文字以提高可訪問性

### 文件組織

- 課程按順序編號（1-getting-started-lessons、2-js-basics 等）
- 每個專案包含 `solution/`，通常還有 `start/` 或 `your-work/` 目錄
- 圖片存放於課程專屬的 `images/` 資料夾
- 翻譯存放於 `translations/{language-code}/` 結構中

## 建置與部署

### 測驗應用程式部署（Azure Static Web Apps）

測驗應用程式已配置為 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps 配置：
- **應用程式位置**：`/quiz-app`
- **輸出位置**：`dist`
- **工作流程**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文件 PDF 生成

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify 文件

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### 專案特定建置

每個專案目錄可能有自己的建置流程：
- Vue 專案：`npm run build` 生成生產環境包
- 靜態專案：無需建置步驟，直接提供檔案

## Pull Request 指南

### 標題格式

使用清晰、描述性的標題，指明修改範圍：
- `[Quiz-app] 為課程 X 添加新測驗`
- `[Lesson-3] 修正生態瓶專案中的拼寫錯誤`
- `[Translation] 添加課程 5 的西班牙語翻譯`
- `[Docs] 更新設置指令`

### 必要檢查

提交 PR 前：

1. **程式碼品質**：
   - 在受影響的專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤和警告

2. **建置驗證**：
   - 如果適用，執行 `npm run build`
   - 確保無建置錯誤

3. **連結驗證**：
   - 測試所有 Markdown 連結
   - 確保圖片引用正常運作

4. **內容審查**：
   - 校對拼寫和語法
   - 確保程式碼範例正確且具教育性
   - 確保翻譯保持原意

### 貢獻要求

- 同意 Microsoft CLA（首次 PR 時自動檢查）
- 遵循 [Microsoft 開源行為準則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南請參閱 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如果適用，請在 PR 描述中引用問題編號

### 審查流程

- PR 由維護者和社群審查
- 優先考慮教育清晰度
- 程式碼範例應遵循最新最佳實踐
- 翻譯需審查準確性和文化適切性

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 和 co-op-translator 工作流程
- 自動翻譯成 50 多種語言
- 主目錄中的原始檔案
- 翻譯檔案存放於 `translations/{language-code}/` 目錄

### 添加手動翻譯改進

1. 在 `translations/{language-code}/` 中找到檔案
2. 在保持結構的情況下進行改進
3. 確保程式碼範例仍然可用
4. 測試任何本地化的測驗內容

### 翻譯元資料

翻譯檔案包含元資料標頭：
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

## 偵錯與故障排除

### 常見問題

**測驗應用程式無法啟動**：
- 檢查 Node.js 版本（建議 v14+）
- 刪除 `node_modules` 和 `package-lock.json`，重新執行 `npm install`
- 檢查埠衝突（預設：Vite 使用埠 5173）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低要求（node >=10）
- 檢查埠是否已被佔用
- 確保所有依賴已使用 `npm install` 安裝

**瀏覽器擴充功能無法載入**：
- 確認 manifest.json 格式正確
- 檢查瀏覽器主控台中的錯誤
- 遵循瀏覽器特定的擴充功能安裝指引

**Python 聊天專案問題**：
- 確保已安裝 OpenAI 套件：`pip install openai`
- 確認已設置 GITHUB_TOKEN 環境變數
- 檢查 GitHub Models 的存取權限

**Docsify 無法提供文件**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄執行
- 確認 `docs/_sidebar.md` 存在

### 開發環境提示

- 使用 VS Code 和 Live Server 擴充功能開啟 HTML 專案
- 安裝 ESLint 和 Prettier 擴充功能以保持一致的格式
- 使用瀏覽器開發工具偵錯 JavaScript
- 對於 Vue 專案，安裝 Vue DevTools 瀏覽器擴充功能

### 性能考量

- 大量翻譯檔案（50+ 種語言）導致完整克隆檔案較大
- 若僅需操作內容，使用淺層克隆：`git clone --depth 1`
- 在處理英文內容時排除翻譯檔案的搜尋
- 首次執行建置流程可能較慢（npm install、Vite build）

## 安全考量

### 環境變數

- API 金鑰絕不可提交到資源庫
- 使用 `.env` 檔案（已在 `.gitignore` 中）
- 在專案 README 中記錄所需的環境變數

### Python 專案

- 使用虛擬環境：`python -m venv venv`
- 保持依賴更新
- GitHub Token 應具有最低必要權限

### GitHub Models 存取

- 需要個人存取 Token（PAT）以使用 GitHub Models
- Token 應存放為環境變數
- 絕不可提交 Token 或憑證

## 附加說明

### 目標受眾

- 完全初學者的網頁開發學習者
- 學生和自學者
- 在課堂中使用課程的教師
- 內容設計以提高可訪問性並逐步建立技能

### 教育理念

- 基於專案的學習方法
- 頻繁的知識檢查（測驗）
- 實作程式碼練習
- 真實世界應用範例
- 在框架之前專注於基礎知識

### 資源庫維護

- 活躍的學習者和貢獻者社群
- 定期更新依賴和內容
- 維護者監控問題和討論
- 翻譯更新透過 GitHub Actions 自動化

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 建議學習者使用
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程均可用

### 操作特定專案

有關個別專案的詳細指引，請參閱以下目錄中的 README 文件：
- `quiz-app/README.md` - Vue 3 測驗應用程式
- `7-bank-project/README.md` - 帶有身份驗證的銀行應用程式
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - 基於 Canvas 的遊戲開發
- `9-chat-project/README.md` - AI 聊天助手專案

### Monorepo 結構

雖然不是傳統的 Monorepo，此資源庫包含多個獨立專案：
- 每個課程都是自包含的
- 專案之間不共享依賴
- 可獨立操作個別專案而不影響其他專案
- 克隆整個資源庫以獲得完整課程體驗

---

**免責聲明**：  
本文件已使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。