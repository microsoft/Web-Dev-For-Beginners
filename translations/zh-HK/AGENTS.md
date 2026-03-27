# AGENTS.md

## Project Overview

這是一個教導初學者網頁開發基礎的教育課程資料庫。此課程是一個由 Microsoft Cloud Advocates 開發的完整 12 週課程，包含 24 節涵蓋 JavaScript、CSS 和 HTML 的實作課程。

### Key Components

- **教育內容**：24 節結構化課程，按專案模組組織
- **實作專案**：生態缸、打字遊戲、瀏覽器擴充套件、太空遊戲、銀行應用程式、程式碼編輯器和 AI 聊天助理
- **互動測驗**：48 小測驗，每個包含 3 題（課程前後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯超過 50 種語言
- **技術**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AI 專案）

### Architecture

- 以課程為基礎結構的教育資源庫
- 每個課程資料夾包含 README、程式碼範例及解答
- 各自獨立的專案目錄（quiz-app、各課程專案）
- 使用 GitHub Actions 的翻譯系統（co-op-translator）
- 文件使用 Docsify 提供並可輸出 PDF

## Setup Commands

此資料庫主要用於教育內容的學習。若要使用特定專案：

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
npm run build      # 編譯生產環境版本
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
# 遵循瀏覽器特定的擴充功能載入指示
```

### Space Game Projects

```bash
cd 6-space-game/solution
npm install
# 在瀏覽器中打開 index.html 或使用實時伺服器
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

1. **Fork 倉庫** 至您的 GitHub 帳號
2. **Clone 您的 fork** 至本地端
3. **建立新分支** 以做出變更
4. 修改課程內容或程式碼範例
5. 在相關專案目錄測試任何程式碼變更
6. 依貢獻指南提交 pull request

### For Learners

1. Fork 或 clone 這個倉庫
2. 按順序進入課程目錄
3. 閱讀每課程的 README 文件
4. 在 https://ff-quizzes.netlify.app/web/ 完成課前測驗
5. 練習課程資料夾內的程式碼範例
6. 完成作業及挑戰
7. 完成課後測驗

### Live Development

- **文件**：在根目錄執行 `docsify serve`（預設端口 3000）
- **Quiz App**：在 quiz-app 資料夾執行 `npm run dev`
- **專案**：使用 VS Code Live Server 擴充套件啟動 HTML 專案
- **API 專案**：在相應 API 資料夾執行 `npm start`

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

- 此為教育用途的資源庫，沒有全面自動化測試
- 手動測試重點：
  - 程式碼範例能正常執行無錯誤
  - 文件中的連結均正確運作
  - 專案能成功編譯建置
  - 範例遵循最佳實踐

### Pre-submission Checks

- 在有 package.json 的目錄執行 `npm run lint`
- 驗證 markdown 連結的有效性
- 瀏覽器或 Node.js 中測試程式碼範例
- 確認翻譯保持正確結構

## Code Style Guidelines

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案中的標準 ESLint 配置
- 使用具意義的變數和函式名稱以增進教育清晰度
- 加入說明概念的註解給學習者
- 使用已配置的 Prettier 進行格式化

### HTML/CSS

- 使用語意化 HTML5 元素
- 響應式設計原則
- 清晰的類別命名規範
- 加入說明 CSS 技巧的註解供學習者理解

### Python

- 遵循 PEP 8 風格指南
- 清晰且具教育意義的程式碼範例
- 適時使用型別提示以輔助學習

### Markdown Documentation

- 清楚的標題層級
- 使用指定語言的程式碼區塊
- 連結至額外資源
- 在 `images/` 目錄中放置截圖與圖片
- 圖片使用替代文字提高可及性

### File Organization

- 課程依序編號（1-getting-started-lessons、2-js-basics 等）
- 每個專案含有 `solution/`，並通常有 `start/` 或 `your-work/`
- 圖片存放於課程專屬的 `images/` 資料夾
- 翻譯存放在 `translations/{語言代碼}/` 結構中

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app 支援 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送至 main 時，透過 GitHub Actions 工作流程部署
```

Azure Static Web Apps 配置：
- **App location**：`/quiz-app`
- **Output location**：`dist`
- **Workflow**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentation PDF Generation

```bash
npm install                    # 安裝 docsify-to-pdf
npm run convert               # 從 docs 生成 PDF
```

### Docsify Documentation

```bash
npm install -g docsify-cli    # 全域安裝 Docsify
docsify serve                 # 在 localhost:3000 提供服務
```

### Project-specific Builds

每個專案目錄可能有專屬建置流程：
- Vue 專案：使用 `npm run build` 產生生產用套件
- 靜態專案：無需建置步驟，直接提供檔案

## Pull Request Guidelines

### Title Format

使用清楚描述變更範圍的標題：
- `[Quiz-app] 為第 X 課新增測驗`
- `[Lesson-3] 修正生態缸專案錯字`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新設定說明`

### Required Checks

提交 PR 前：

1. **程式碼品質**：
   - 在受影響專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤和警告

2. **建置驗證**：
   - 執行 `npm run build`（若適用）
   - 確保無建置錯誤

3. **連結驗證**：
   - 測試所有 markdown 連結
   - 驗證圖片路徑正確

4. **內容審核**：
   - 校對拼字與文法
   - 確認程式碼範例正確且具教育性
   - 確認翻譯保持原意

### Contribution Requirements

- 同意 Microsoft CLA（首次 PR 會自動檢查）
- 遵守 [Microsoft 共用開源行為準則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南請見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 若有，請在 PR 描述中提及議題編號

### Review Process

- PR 由維護者與社群審查
- 優先考量教育清晰度
- 程式碼範例須符合現行最佳實踐
- 翻譯需審核準確度與文化適應性

## Translation System

### Automated Translation

- 使用 GitHub Actions 搭配 co-op-translator 工作流程
- 自動翻譯超過 50 種語言
- 原始檔藏於主目錄
- 翻譯檔藏於 `translations/{語言代碼}/` 目錄

### Adding Manual Translation Improvements

1. 尋找 `translations/{語言代碼}/` 中的檔案
2. 進行改善，並保持結構完整
3. 確保程式碼範例持續正常
4. 測試任何在地化的測驗內容

### Translation Metadata

譯文檔包含元資料標頭：
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
- 確認 Node.js 版本符合最低要求（node >=10）
- 確認埠口未被佔用
- 確保執行 `npm install` 安裝所有依賴

**瀏覽器擴充套件無法載入**：
- 確認 manifest.json 格式正確
- 查看瀏覽器主控台錯誤訊息
- 遵循各瀏覽器特定擴充安裝指引

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認 GITHUB_TOKEN 環境變數已設定
- 檢查 GitHub Models 的存取權限

**Docsify 不讀取文件**：
- 全局安裝 docsify-cli：`npm install -g docsify-cli`
- 從倉庫根目錄執行
- 確認存在 `docs/_sidebar.md`

### Development Environment Tips

- 使用 VS Code 搭配 Live Server 擴充套件開發 HTML 專案
- 安裝 ESLint 和 Prettier 擴充套件維持一致格式
- 使用瀏覽器開發者工具除錯 JavaScript
- Vue 專案安裝 Vue DevTools 瀏覽器擴充套件

### Performance Considerations

- 支援超過 50 種語言的翻譯檔案多，完整克隆檔案較大
- 對內容作業者可使用淺層克隆：`git clone --depth 1`
- 作英文內容時建議排除翻譯目錄以提升搜尋效率
- 第一次運行建置流程可能較慢（npm install、Vite 建置）

## Security Considerations

### Environment Variables

- API 金鑰絕不可提交至版本庫
- 使用 `.env` 檔案（已有列入 `.gitignore`）
- 各專案 README 文件說明必須的環境變數

### Python Projects

- 使用虛擬環境：`python -m venv venv`
- 維持依賴最新
- GitHub token 授權應儘量精簡

### GitHub Models Access

- 使用個人存取權杖（PAT）作為 GitHub Models 存取憑證
- 權杖應儲存於環境變數中
- 禁止將權杖或憑證提交至版本庫

## Additional Notes

### Target Audience

- 完全初學者的網頁開發學習者
- 學生與自學者
- 在課堂使用此課程的教師
- 內容設計兼顧可及性及漸進式技能建立

### Educational Philosophy

- 專案導向學習法
- 頻繁的知識檢核（測驗）
- 實作程式練習
- 真實場景應用範例
- 著重基礎優先於框架

### Repository Maintenance

- 擁有活躍學習與貢獻社群
- 定期更新依賴與內容
- 維護者監控議題與討論
- 翻譯更新自動化透過 GitHub Actions

### Related Resources

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程

### Working with Specific Projects

個別專案詳細說明請參考 README：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 加入驗證的銀行應用程式
- `5-browser-extension/README.md` - 瀏覽器擴充套件開發
- `6-space-game/README.md` - 基於 Canvas 的遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo Structure

雖非典型 monorepo，但此資料庫包含多個獨立專案：
- 每堂課自行封裝
- 專案間不共用依賴
- 個別專案獨立開發不互相影響
- 想學完完整課程，請 clone 整個倉庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們致力於提供準確的翻譯，請注意，自動翻譯可能包含錯誤或不準確之處。原始文件以其本地語言版本為最具權威性的資料來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用本翻譯而引起的任何誤解或誤譯承擔責任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->