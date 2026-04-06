# AGENTS.md

## Project Overview

這是一個用於教授初學者網頁開發基礎的教育課程儲存庫。該課程是一個由 Microsoft Cloud Advocates 開發的全面 12 週課程，包括 24 個涵蓋 JavaScript、CSS 和 HTML 的實作課程。

### Key Components

- <strong>教育內容</strong>：24 個結構化課程，組織成基於專案的模組
- <strong>實作專案</strong>：溫室生態箱、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用程式、程式碼編輯器及 AI 聊天助理
- <strong>互動測驗</strong>：48 個包含 3 題的測驗（課程前後評量）
- <strong>多語言支援</strong>：透過 GitHub Actions 自動翻譯 50 多種語言
- <strong>技術</strong>：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AI 專案用）

### Architecture

- 以課程為基礎結構的教育儲存庫
- 每個課程資料夾包含 README、程式碼範例和解決方案
- 獨立專案存放在單獨目錄（quiz-app、各課程專案）
- 使用 GitHub Actions (co-op-translator) 的翻譯系統
- 文件透過 Docsify 提供並有 PDF 格式

## Setup Commands

此儲存庫主要用於教育內容消費。若要操作特定專案：

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
npm run build      # 為生產環境編譯
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
# 遵循瀏覽器專用的擴充功能加載指示
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# 在瀏覽器中打開 index.html 或使用 Live Server
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 設定 GITHUB_TOKEN 環境變數
python api.py
```

## Development Workflow

### For Content Contributors

1. **Fork 儲存庫** 至您的 GitHub 帳號
2. **本地複製您的 fork**
3. <strong>建立新分支</strong> 以進行修改
4. 修改課程內容或程式碼範例
5. 在相關專案資料夾測試程式碼變更
6. 按照貢獻指南提交 pull requests

### For Learners

1. Fork 或複製儲存庫
2. 依序導覽各課程目錄
3. 閱讀每課程的 README 檔案
4. 完成 https://ff-quizzes.netlify.app/web/ 中的課前測驗
5. 練習課程資料夾中的程式範例
6. 完成作業及挑戰
7. 進行課後測驗

### Live Development

- <strong>文件</strong>：在根目錄執行 `docsify serve` (預設埠 3000)
- <strong>測驗應用程式</strong>：在 quiz-app 目錄執行 `npm run dev`
- <strong>專案</strong>：使用 VS Code 的 Live Server 外掛實作 HTML 專案服務
- **API 專案**：在對應 API 目錄執行 `npm start`

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # 檢查代碼風格問題
npm run build      # 驗證構建是否成功
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # 檢查代碼風格問題
node server.js     # 驗證服務器啟動時無錯誤
```

### General Testing Approach

- 這是教育儲存庫，沒有完整自動化測試
- 手動測試重點：
  - 程式碼範例可順利執行
  - 文件內連結功能正常
  - 專案建置成功
  - 範例遵循最佳實務

### Pre-submission Checks

- 在含有 package.json 的目錄執行 `npm run lint`
- 驗證 Markdown 連結有效
- 在瀏覽器或 Node.js 中測試程式範例
- 確認翻譯保持正確結構

## Code Style Guidelines

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案中提供的標準 ESLint 設定
- 使用有意義的變數與函數名稱以利教育理解
- 添加解說概念的註解給學習者
- 在有設定的地方使用 Prettier 格式化

### HTML/CSS

- 使用語義化 HTML5 元素
- 採用響應式設計原則
- 清晰的 class 命名規則
- 註解說明 CSS 技術給學習者

### Python

- 遵循 PEP 8 樣式指南
- 清晰且有教育意義的程式範例
- 在有助學習的地方使用型別提示

### Markdown Documentation

- 明確的標題階層
- 具語言宣告的程式碼區塊
- 連結到補充資源
- 在 `images/` 目錄包含截圖與圖片
- 圖片包含無障礙的替代文字

### File Organization

- 課程依序編號（1-getting-started-lessons、2-js-basics 等）
- 每個專案有 `solution/`，通常有 `start/` 或 `your-work/` 目錄
- 圖片儲存在特定課程的 `images/` 資料夾
- 翻譯在 `translations/{language-code}/` 結構中

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app 已配置為 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 當推送到 main 分支時透過 GitHub Actions 工作流程進行部署
```

Azure Static Web Apps 配置：
- <strong>應用程式位置</strong>：`/quiz-app`
- <strong>輸出位置</strong>：`dist`
- <strong>工作流程</strong>：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

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

每個專案目錄可能有獨立建置流程：
- Vue 專案：使用 `npm run build` 產生正式包
- 靜態專案：無建置步驟，直接提供檔案服務

## Pull Request Guidelines

### Title Format

使用清晰描述變更領域的標題：
- `[Quiz-app] 新增第 X 課的測驗`
- `[Lesson-3] 修正溫室生態箱專案的錯字`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新設置說明`

### Required Checks

提交 PR 前：

1. <strong>程式碼品質</strong>：
   - 在受影響的專案目錄執行 `npm run lint`
   - 修復所有錯誤與警告

2. <strong>建置驗證</strong>：
   - 如適用執行 `npm run build`
   - 確保無建置錯誤

3. <strong>連結檢查</strong>：
   - 測試所有 Markdown 連結
   - 確認圖片引用正確

4. <strong>內容審核</strong>：
   - 校對拼字與文法
   - 確保程式範例正確且具教育意義
   - 確認翻譯保持原意

### Contribution Requirements

- 同意 Microsoft CLA（首次 PR 有自動檢查）
- 遵守 [Microsoft 開源行為守則](https://opensource.microsoft.com/codeofconduct/)
- 參考 [CONTRIBUTING.md](./CONTRIBUTING.md) 詳細指引
- 如適用，在 PR 描述中引用 Issue 編號

### Review Process

- PR 由維護者與社群審核
- 優先考量教育清晰度
- 程式範例需遵循最新最佳實務
- 翻譯會審核準確性與文化適切性

## Translation System

### Automated Translation

- 使用 GitHub Actions 與 co-op-translator 工作流程
- 自動翻譯至 50 多種語言
- 原始檔在主要目錄
- 翻譯檔位於 `translations/{language-code}/` 目錄

### Adding Manual Translation Improvements

1. 找到 `translations/{language-code}/` 中的檔案
2. 在保持結構下進行修正
3. 確保程式碼範例依然可用
4. 測試本地化的測驗內容

### Translation Metadata

翻譯檔案包含 metadata 標頭：
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
- 檢查埠號衝突（預設：Vite 使用埠 5173）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低需求（node >=10）
- 檢查埠號是否被佔用
- 確保所有相依套件已用 `npm install` 安裝

<strong>瀏覽器擴充功能無法載入</strong>：
- 確認 manifest.json 格式正確
- 檢查瀏覽器控制台錯誤
- 按瀏覽器特定擴充安裝說明操作

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認 GITHUB_TOKEN 環境變數已設定
- 稽核 GitHub Models 權限是否正常

**Docsify 不能提供文件服務**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從儲存庫根目錄執行
- 確認 `docs/_sidebar.md` 存在

### Development Environment Tips

- 使用 VS Code 並安裝 Live Server 外掛來服務 HTML 專案
- 安裝 ESLint 與 Prettier 擴充以保持格式一致
- 使用瀏覽器 DevTools 除錯 JavaScript
- Vue 專案安裝 Vue DevTools 瀏覽器擴充

### Performance Considerations

- 大量翻譯檔案（50+ 語言），完整 clone 容量龐大
- 若僅處理內容，使用淺層 clone：`git clone --depth 1`
- 工作英文內容時，排除翻譯目錄搜尋
- 第一次運行建置可能較慢（npm install、Vite build）

## Security Considerations

### Environment Variables

- API 金鑰絕不可提交到儲存庫
- 使用 `.env` 檔（已加到 `.gitignore`）
- 在專案 README 文件中記錄所需環境變數

### Python Projects

- 使用虛擬環境：`python -m venv venv`
- 維持相依套件更新
- GitHub 令牌需具最小必要權限

### GitHub Models Access

- 使用個人存取權杖 (PAT) 存取 GitHub Models
- 將令牌存於環境變數
- 絕不可提交令牌或認證資料

## Additional Notes

### Target Audience

- 完全沒有經驗的網頁開發入門者
- 學生及自學者
- 在課堂使用本課程的教師
- 內容設計考量無障礙與逐步技能培養

### Educational Philosophy

- 採用專案導向學習方法
- 頻繁知識檢核（測驗）
- 實作程式練習
- 真實世界應用範例
- 先打好基礎再談框架

### Repository Maintenance

- 積極活躍的學習與貢獻社群
- 定期更新相依套件與內容
- 維護者監控 Issues 與討論
- 翻譯更新由 GitHub Actions 自動化

### Related Resources

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 建議學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程

### Working with Specific Projects

詳見各專案 README 指引：
- `quiz-app/README.md` - Vue 3 測驗應用程式
- `7-bank-project/README.md` - 含身份驗證銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - Canvas 遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo Structure

雖非傳統 monorepo，本儲存庫包含多個獨立專案：
- 每個課程自包含
- 專案彼此不共享相依
- 專注個別專案開發不影響其他專案
- 全部課程體驗可複製整個儲存庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
此文件是使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的原文版本應被視為權威來源。對於重要資訊，建議進行專業人工翻譯。我們不對因使用此翻譯而產生的任何誤解或誤釋負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->