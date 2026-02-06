# AGENTS.md

## Project Overview

這是一個為初學者教授網頁開發基礎的教育課程庫。該課程是由 Microsoft Cloud Advocates 開發的全面 12 週課程，包含 24 個涵蓋 JavaScript、CSS 及 HTML 的實作課程。

### Key Components

- **教育內容**：24 個有結構的課程，組織成以專案為基礎的模組
- **實作專案**：Terrarium、生字打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用程式、程式碼編輯器及 AI 聊天助理
- **互動測驗**：48 個測驗，每個包含 3 題（課程開始前/後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯為 50 多種語言
- **技術**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 專案）

### Architecture

- 以課程為基礎架構的教育代碼庫
- 每個課程資料夾包含 README、程式碼範例及解答
- 獨立專案位於不同目錄（quiz-app，各種課程專案）
- 使用 GitHub Actions （co-op-translator）進行翻譯系統
- 文件以 Docsify 提供服務，並可下載 PDF

## Setup Commands

此代碼庫主要用於教育內容學習。若需使用特定專案：

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 啟動開發伺服器
npm run build      # 建立生產版本
npm run lint       # 執行 ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # 啟動 API 伺服器
npm run lint       # 執行 ESLint
npm run format     # 使用 Prettier 格式化
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# 遵從瀏覽器特定的擴展載入指示
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# 於瀏覽器中開啟 index.html 或使用 Live Server
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 設置 GITHUB_TOKEN 環境變量
python api.py
```

## Development Workflow

### For Content Contributors

1. **Fork 該代碼庫** 至您的 GitHub 帳戶
2. **在本地 Clone 您的 Fork**
3. **為您的修改建立新分支**
4. 修改課程內容或程式碼範例
5. 測試相關專案目錄中的程式碼更動
6. 根據貢獻指南提交 Pull Request

### For Learners

1. Fork 或 Clone 該代碼庫
2. 按順序瀏覽課程目錄
3. 讀取每課課程的 README 檔
4. 完成 https://ff-quizzes.netlify.app/web/ 上的課前測驗
5. 實作課程資料夾中的程式碼範例
6. 完成作業與挑戰
7. 進行課後測驗

### Live Development

- **文件**：在根目錄執行 `docsify serve`（預設埠 3000）
- **Quiz App**：在 quiz-app 目錄執行 `npm run dev`
- **專案**：對 HTML 專案使用 VS Code Live Server 擴充功能
- **API 專案**：在相應的 API 目錄執行 `npm start`

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # 檢查代碼風格問題
npm run build      # 確認建構成功
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # 檢查代碼風格問題
node server.js     # 驗證伺服器啟動是否無錯誤
```

### General Testing Approach

- 此為教育用代碼庫，無全面自動化測試
- 手動測試重點：
  - 程式碼範例執行無錯誤
  - 文件中的連結正確可用
  - 專案成功建置
  - 範例遵守最佳實務

### Pre-submission Checks

- 在含 package.json 的目錄執行 `npm run lint`
- 驗證 markdown 連結有效
- 在瀏覽器或 Node.js 中測試程式碼範例
- 確保翻譯結構保持正確

## Code Style Guidelines

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案指定的標準 ESLint 配置
- 變量與函數命名具教育意義
- 加入註解說明概念方便學習
- 使用 Prettier 格式化（有設定的情況下）

### HTML/CSS

- 使用語意化 HTML5 元素
- 響應式設計原則
- 清晰的類別命名規範
- CSS 技巧附註解說以利學習

### Python

- 遵守 PEP 8 風格指引
- 清楚、具教育意義的程式碼範例
- 需要時使用型別提示幫助理解

### Markdown Documentation

- 清晰的標題階層
- 指定語言的程式碼區塊
- 指向額外資源的連結
- `images/` 目錄內的截圖及圖片
- 圖片皆具備替代文字 (alt text) 以利存取性

### File Organization

- 課程依序編號（1-getting-started-lessons, 2-js-basics 等）
- 每個專案擁有 `solution/`，且常見有 `start/` 或 `your-work/` 目錄
- 圖片儲存在課程專用的 `images/` 資料夾
- 翻譯存放於 `translations/{language-code}/` 結構內

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app 已配置為 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送到 main 時，透過 GitHub Actions 工作流程部署
```

Azure Static Web Apps 配置：
- **應用程式位置**：`/quiz-app`
- **輸出位置**：`dist`
- **工作流程**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # 安裝 docsify-to-pdf
npm run convert               # 從 docs 生成 PDF
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # 全局安裝 Docsify
docsify serve                 # 在 localhost:3000 提供服務
```

### Project-specific Builds

各專案目錄可能有獨立建置過程：
- Vue 專案：`npm run build` 建立生產版本包
- 靜態專案：無需建置，直接提供檔案服務

## Pull Request Guidelines

### Title Format

使用清楚描述改動範圍的標題：
- `[Quiz-app] 新增第 X 課測驗`
- `[Lesson-3] 修改 terrarium 專案的拼寫錯誤`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新設定指南`

### Required Checks

提交 PR 前：

1. **程式碼品質**：
   - 在相關專案目錄執行 `npm run lint`
   - 修正所有錯誤與警告

2. **建置驗證**：
   - 如果適用，執行 `npm run build`
   - 確保無建置錯誤

3. **連結驗證**：
   - 測試所有 markdown 連結
   - 確認圖片參考正常

4. **內容檢閱**：
   - 校對拼字與文法
   - 確保程式碼範例正確及具教育意味
   - 核對翻譯保持原意

### Contribution Requirements

- 同意 Microsoft CLA（第一次 PR 自動檢查）
- 遵守 [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- 詳情請見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 若適用，於 PR 描述中參考相關 issue 編號

### Review Process

- 由維護者與社群審閱 PR
- 優先教育內容的清晰性
- 程式碼範例應符合當前最佳實務
- 翻譯審核準確度及文化適應性

## Translation System

### Automated Translation

- 使用 GitHub Actions 與 co-op-translator 工作流程
- 自動將內容翻譯為 50 多種語言
- 原始檔案保存在主目錄
- 翻譯檔案存放於 `translations/{language-code}/` 目錄

### Adding Manual Translation Improvements

1. 找到 `translations/{language-code}/` 內相關檔案
2. 在保留結構前提下進行優化
3. 確保程式碼範例仍可正常運作
4. 測試本地化測驗內容

### Translation Metadata

翻譯檔案含頭部元資料：
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

## Debugging and Troubleshooting

### Common Issues

**Quiz app 啟動失敗**：
- 檢查 Node.js 版本（建議 v14+）
- 刪除 `node_modules` 和 `package-lock.json`，重新執行 `npm install`
- 檢查埠口衝突（預設 Vite 使用 5173 埠）

**API 伺服器無法啟動**：
- 確認 Node.js 版本達最小要求（node >=10）
- 檢查埠口是否被占用
- 確保執行了 `npm install` 安裝所有相依套件

**瀏覽器擴充功能無法載入**：
- 確認 manifest.json 格式正確
- 檢查瀏覽器主控台錯誤訊息
- 遵循瀏覽器專屬擴充功能安裝說明

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認 GITHUB_TOKEN 環境變數已設定
- 檢查 GitHub Models 存取權限

**Docsify 文件無法啟動**：
- 全局安裝 docsify-cli：`npm install -g docsify-cli`
- 從代碼庫根目錄執行
- 確認 `docs/_sidebar.md` 存在

### Development Environment Tips

- HTML 專案使用 VS Code 及 Live Server 擴充功能
- 安裝 ESLint 與 Prettier 擴充，保持格式一致
- 使用瀏覽器開發工具調試 JavaScript
- Vue 專案安裝 Vue DevTools 瀏覽器擴充功能

### Performance Considerations

- 多語言翻譯檔案眾多（50+ 種語言），完整 Clone 會很大
- 如只需處理內容，使用淺層 Clone：`git clone --depth 1`
- 在處理英文內容時排除翻譯結果以加快搜尋
- 建置流程初次執行時（npm install、Vite build）較慢

## Security Considerations

### Environment Variables

- API 金鑰絕不可提交到代碼庫
- 使用 `.env` 檔案（已加入 `.gitignore`）
- README 文件說明所需環境變數

### Python Projects

- 使用虛擬環境：`python -m venv venv`
- 維持依賴套件更新
- GitHub Token 限制在最小必要權限

### GitHub Models Access

- 使用個人訪問 Token（PAT）存取 GitHub Models
- Token 透過環境變數儲存
- 避免提交 Token 或憑證

## Additional Notes

### Target Audience

- 完全初學者的網頁開發學生
- 自學者
- 使用課程於教室的教師
- 內容設計兼顧無障礙及循序漸進能力建構

### Educational Philosophy

- 專案導向學習方法
- 經常性知識檢核（問答測驗）
- 實作程式碼練習
- 真實世界應用範例
- 先重基礎再談框架

### Repository Maintenance

- 活躍的學習者與貢獻者社群
- 依賴套件及內容定期更新
- 維護者監控 issue 與討論
- 翻譯系統自動化透過 GitHub Actions

### Related Resources

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 建議學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程可用

### Working with Specific Projects

詳細個別專案說明，請參閱：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 具驗證功能銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - Canvas 遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo Structure

雖非傳統 monorepo，此代碼庫含多個獨立專案：
- 每個課程自成一體
- 專案之間無相依共享套件
- 可單獨工作於各專案不影響其他
- 若需完整課程體驗，Clone 整個儲存庫即可

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：
本文件乃使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 所翻譯。雖然我們致力於確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用此翻譯而引起之任何誤解或誤釋負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->