# AGENTS.md

## Project Overview

這是一個用於教授初學者網頁開發基礎的教育課程資源庫。課程是一個全面的 12 週課程，由 Microsoft Cloud Advocates 開發，包含 24 個涵蓋 JavaScript、CSS 和 HTML 的實作課程。

### Key Components

- **教育內容**：24 個依專案模塊組織的結構化課程
- **實作專案**：Terrarium、Typing Game、Browser Extension、Space Game、Banking App、Code Editor 和 AI 聊天助理
- **互動小測驗**：48 個小測驗，每個有3題（課程前後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯超過 50 種語言
- **技術**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 專案）

### Architecture

- 以課程為基礎結構的教育資源庫
- 每個課程資料夾包含 README、程式碼範例及解答
- 獨立專案位於不同目錄（quiz-app、各課程專案）
- 使用 GitHub Actions（co-op-translator）進行翻譯
- 文件由 Docsify 提供，且有 PDF 格式可用

## Setup Commands

此資源庫主要供教育內容瀏覽。使用特定專案時：

### Main Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 開始開發伺服器
npm run build      # 為生產環境建立
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
# 按照瀏覽器特定的擴充功能載入指示
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# 喺瀏覽器開啟 index.html 或者用 Live Server
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 設定 GITHUB_TOKEN 環境變量
python api.py
```

## Development Workflow

### For Content Contributors

1. **Fork 該資源庫** 到你的 GitHub 帳號
2. **將 fork 克隆** 到本地
3. **建立新分支** 以進行修改
4. 修改課程內容或程式碼範例
5. 在相關專案目錄測試程式碼變更
6. 按照貢獻指引提交 pull request

### For Learners

1. Fork 或克隆該資源庫
2. 按順序瀏覽課程目錄
3. 閱讀每課的 README 文件
4. 在 https://ff-quizzes.netlify.app/web/ 完成課前小測
5. 實作課程資料夾中的程式碼範例
6. 完成作業與挑戰
7. 參加課後小測驗

### Live Development

- **文件**：在根目錄執行 `docsify serve`（預設埠 3000）
- **Quiz App**：在 quiz-app 目錄執行 `npm run dev`
- **專案**：使用 VS Code Live Server 外掛服務 HTML 專案
- **API 專案**：在各 API 目錄執行 `npm start`

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # 檢查代碼風格問題
npm run build      # 驗證建構成功
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # 檢查程式碼風格問題
node server.js     # 驗證伺服器啟動時無錯誤
```

### General Testing Approach

- 本資源庫為教育用途，無完善的自動化測試
- 手動測試重點：
  - 程式碼範例能正常執行且無錯誤
  - 文件中的連結功能正常
  - 專案能成功建置
  - 範例編寫遵循最佳實踐

### Pre-submission Checks

- 在有 package.json 的目錄執行 `npm run lint`
- 驗證 markdown 連結有效
- 在瀏覽器或 Node.js 中測試程式碼範例
- 確認翻譯保留正確結構

## Code Style Guidelines

### JavaScript

- 使用現代 ES6+ 語法
- 遵守專案中提供的標準 ESLint 設定
- 使用有意義的變數及函數名稱，便於教學理解
- 加入說明概念的註解
- 於配置 Prettier 的地方使用自動格式化

### HTML/CSS

- 使用語意化的 HTML5 元素
- 採用響應式設計原則
- 清晰的 class 命名規範
- CSS 技術附帶學習解說註解

### Python

- 遵循 PEP 8 樣式指引
- 提供清晰且具教育意義的程式碼範例
- 需要時使用型別提示以輔助學習

### Markdown Documentation

- 清楚的標題階層結構
- 指定語言的程式碼區塊
- 附加資源連結
- screenshots 與圖片存放於 `images/` 目錄
- 圖片具有替代文字以提升無障礙性

### File Organization

- 課程依序編號（1-getting-started-lessons、2-js-basics 等）
- 每專案有 `solution/`，通常帶有 `start/` 或 `your-work/` 目錄
- 圖片放在課程專用的 `images/` 資料夾
- 翻譯存放於 `translations/{language-code}/` 結構

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app 已配置用於 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送到 main 時透過 GitHub Actions 工作流程部署
```

Azure Static Web Apps 配置：
- **App 位置**：`/quiz-app`
- **輸出位置**：`dist`
- **Workflow**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

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

各專案目錄可能有專屬建置流程：
- Vue 專案：執行 `npm run build` 建立生產版本
- 靜態專案：無建置步驟，直接提供檔案使用

## Pull Request Guidelines

### Title Format

使用清晰且描述性的標題指出變更範圍：
- `[Quiz-app] 新增第 X 課小測`
- `[Lesson-3] 修正 terrarium 專案打字錯誤`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新設置指引`

### Required Checks

提交 PR 前須:

1. **程式碼品質**：
   - 在受影響專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤及警告

2. **建置驗證**：
   - 必要時執行 `npm run build`
   - 確保無建置錯誤

3. **連結驗證**：
   - 測試所有 markdown 連結
   - 確認圖片參考正常

4. **內容審查**：
   - 校對拼字與文法
   - 確認程式碼範例正確且具教育意義
   - 確認翻譯保留原意

### Contribution Requirements

- 同意 Microsoft CLA（首個 PR 會自動檢查）
- 遵循 [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- 詳細規則參考 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如有議題，於 PR 描述中提及編號

### Review Process

- PR 由維護者及社群審閱
- 優先確保教育清晰度
- 程式碼範例應採用當前最佳實踐
- 翻譯需確保準確性及文化適切性

## Translation System

### Automated Translation

- 使用 GitHub Actions 與 co-op-translator 工作流程
- 自動翻譯成超過 50 種語言
- 原始文件位於主目錄
- 翻譯檔案位於 `translations/{language-code}/` 目錄

### Adding Manual Translation Improvements

1. 尋找文件於 `translations/{language-code}/`
2. 在保留結構下進行改進
3. 確保程式碼範例仍可正常運作
4. 測試任何本地化的小測內容

### Translation Metadata

翻譯檔含有元資料標頭：
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

**Quiz app 無法啟動**：
- 檢查 Node.js 版本（建議 v14+）
- 刪除 `node_modules` 和 `package-lock.json` 後重新執行 `npm install`
- 檢查埠口衝突（預設 Vite 使用 5173）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合要求（node >=10）
- 確認埠口未被佔用
- 確保依賴透過 `npm install` 安裝完整

**瀏覽器擴充功能無法載入**：
- 驗證 manifest.json 格式無誤
- 查看瀏覽器控制檯錯誤訊息
- 依瀏覽器指示安裝擴充功能

**Python 聊天專案問題**：
- 確認 OpenAI 套件已安裝：`pip install openai`
- GITHUB_TOKEN 環境變量已設定
- 確認 GitHub Models 存取權限

**Docsify 無法提供文件**：
- 全局安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄執行
- 確認 `docs/_sidebar.md` 存在

### Development Environment Tips

- HTML 專案使用 VS Code Live Server 外掛
- 安裝 ESLint 與 Prettier 擴充套件保持格式一致
- 使用瀏覽器 DevTools 偵錯 JavaScript
- Vue 專案建議安裝 Vue DevTools 瀏覽器擴充

### Performance Considerations

- 有大量翻譯檔案（超過 50 種語言），完整複製較大
- 僅工作內容時可用淺層複製：`git clone --depth 1`
- 編輯英文內容時排除翻譯目錄搜尋
- 建置首次運行可能較慢（npm 安裝、Vite 建置）

## Security Considerations

### Environment Variables

- API 金鑰絕不可提交至資源庫
- 使用 `.env` 檔案（已包含於 `.gitignore`）
- 專案 README 記錄必要環境變量

### Python Projects

- 使用虛擬環境：`python -m venv venv`
- 保持依賴更新
- GitHub 令牌應只具必要最低權限

### GitHub Models Access

- 使用個人存取權杖 (PAT) 存取 GitHub Models
- 令牌存於環境變量中
- 絕不可將令牌或認證提交至資源庫

## Additional Notes

### Target Audience

- 完全初學者學習網頁開發
- 學生及自學者
- 教師在課堂中使用此課程
- 內容設計注重無障礙及技能循序漸進

### Educational Philosophy

- 專案導向學習方式
- 頻繁的知識測驗（小測）
- 實作編碼練習
- 以真實案例示範應用
- 先打穩基礎再學框架

### Repository Maintenance

- 活躍的學習者及貢獻者社群
- 定期更新相依元件及內容
- 維護者監控議題與討論
- 翻譯更新透過 GitHub Actions 自動化

### Related Resources

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [Student Hub 資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學員使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程可用

### Working with Specific Projects

各專案詳細指引見以下 README：
- `quiz-app/README.md` - Vue 3 小測應用
- `7-bank-project/README.md` - 含身分驗證的銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - Canvas 遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo Structure

雖非傳統 monorepo，但此資源庫包含多個獨立專案：
- 每課單獨成章
- 專案不共用相依套件
- 可單獨作業不影響其它專案
- 想獲得完整課程體驗，請克隆整個資源庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件係使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我哋致力於確保準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始語言版本的文件應被視為權威來源。對於重要信息，建議採用專業人工翻譯。因使用此翻譯而引起的任何誤解或錯誤詮釋，本公司概不負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->