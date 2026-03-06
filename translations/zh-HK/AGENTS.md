# AGENTS.md

## Project Overview

這是一個教育課程倉庫，用於教授初學者網頁開發基礎。該課程由 Microsoft Cloud Advocates 開發，是一個為期12週的綜合課程，包含24堂實作課程，涵蓋 JavaScript、CSS 和 HTML。

### Key Components

- **教育內容**：24堂結構化課程，組織成以專案為基礎的模組
- **實作專案**：溫室模擬器、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用、程式碼編輯器及 AI 聊天助理
- **互動測驗**：48個測驗，每個3題（課前／課後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯超過50種語言
- **技術棧**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 專案）

### Architecture

- 以課程為基礎的教育倉庫結構
- 每堂課資料夾包含README、程式碼範例及解答
- 獨立專案位於不同目錄（quiz-app、多個課程專案）
- 使用 GitHub Actions 的翻譯系統（co-op-translator）
- 文件使用 Docsify 提供，並可匯出 PDF

## Setup Commands

此倉庫主要用於教育內容學習。若要操作特定專案：

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
npm run build      # 建置生產版本
npm run lint       # 執行 ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # 啟動 API 伺服器
npm run lint       # 運行 ESLint
npm run format     # 使用 Prettier 格式化
```

### Browser Extension Projects

```bash
cd 5-browser-extension/solution
npm install
# 遵循瀏覽器專屬的擴充功能載入指引
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
# 設定 GITHUB_TOKEN 環境變數
python api.py
```

## Development Workflow

### For Content Contributors

1. **Fork 倉庫** 至您的 GitHub 帳號
2. **Clone 您的 fork** 至本地
3. **建立新分支** 以提交更改
4. 修改課程內容或程式碼範例
5. 在相關專案資料夾測試程式碼更動
6. 遵循貢獻指南提交 pull request

### For Learners

1. Fork 或 clone 此倉庫
2. 依序瀏覽課程資料夾
3. 閱讀每課的 README 檔案
4. 在 https://ff-quizzes.netlify.app/web/ 完成課前測驗
5. 練習課程中的程式碼範例
6. 完成作業與挑戰
7. 參加課後測驗

### Live Development

- **文件**：在根目錄執行 `docsify serve`（預設埠號 3000）
- **測驗應用**：在 quiz-app 目錄執行 `npm run dev`
- **專案**：對 HTML 專案使用 VS Code 的 Live Server 擴充
- **API 專案**：在相應 API 目錄執行 `npm start`

## Testing Instructions

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # 檢查代碼風格問題
npm run build      # 確認建置成功
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # 檢查代碼風格問題
node server.js     # 確認伺服器啟動時無錯誤
```

### General Testing Approach

- 這是教育倉庫，沒有完整自動化測試
- 手動測試重點：
  - 程式碼範例能正常執行
  - 文件中的連結可正常使用
  - 專案能成功建置
  - 範例遵守最佳實踐

### Pre-submission Checks

- 在有 package.json 的目錄執行 `npm run lint`
- 驗證 markdown 連結有效
- 在瀏覽器或 Node.js 中測試程式碼範例
- 確認翻譯結構正確

## Code Style Guidelines

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案提供的 ESLint 標準配置
- 使用具意義的變數與函式名稱，利於教學理解
- 加入說明性註解方便學習者
- 在有設定的地方使用 Prettier 格式化

### HTML/CSS

- 使用語意化的 HTML5 元素
- 採用響應式設計原則
- 清晰的類別命名慣例
- 用註解說明 CSS 技巧便於學習

### Python

- 遵守 PEP 8 風格指南
- 範例程式碼簡潔且具教育意義
- 必要時使用型別提示，輔助學習

### Markdown Documentation

- 清晰的標題結構層級
- 程式碼區塊標明語言
- 提供額外資源連結
- 在 `images/` 目錄放置截圖與圖片
- 圖片有替代文字以符合無障礙要求

### File Organization

- 課程依序編號（1-getting-started-lessons、2-js-basics 等）
- 每個專案有 `solution/`，常見還有 `start/` 或 `your-work/` 目錄
- 圖片存放於各課獨立 `images/` 資料夾
- 翻譯置於 `translations/{language-code}/` 結構

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app 設定為 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 當推送至 main 時透過 GitHub Actions 工作流程部署
```

Azure Static Web Apps 配置：
- **App 位置**：`/quiz-app`
- **輸出位置**：`dist`
- **工作流程**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

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

各專案資料夾可能有自己的建置流程：
- Vue 專案：`npm run build` 產生生產封包
- 靜態專案：無建置步驟，直接提供檔案

## Pull Request Guidelines

### Title Format

使用清楚描述變更範圍的標題：
- `[Quiz-app] 新增第X課測驗`
- `[Lesson-3] 修正溫室模擬器專案中的錯字`
- `[Translation] 新增第5課西班牙文翻譯`
- `[Docs] 更新環境設定說明`

### Required Checks

提交 PR 前：

1. **程式碼品質**：
   - 在受影響專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤與警告

2. **建置驗證**：
   - 如適用執行 `npm run build`
   - 確保無建置錯誤

3. **連結檢查**：
   - 測試所有 markdown 連結
   - 確認圖片引用正常

4. **內容審核**：
   - 拼字與文法校對
   - 確保程式碼範例正確且具教育意義
   - 驗證翻譯維持原意

### Contribution Requirements

- 同意 Microsoft CLA（首次 PR 自動檢查）
- 遵守 [Microsoft 開源行為守則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南請見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如有議題，請在 PR 說明中參考議題編號

### Review Process

- PR 由維護者與社群共同審核
- 優先考慮教學清晰度
- 程式碼範例應符合當前最佳實踐
- 翻譯審核準確且符合文化習慣

## Translation System

### Automated Translation

- 使用 GitHub Actions 搭配 co-op-translator 工作流程
- 自動翻譯超過50種語言
- 原始檔案在主目錄
- 翻譯檔在 `translations/{language-code}/`

### Adding Manual Translation Improvements

1. 找到 `translations/{language-code}/` 內檔案
2. 在保留結構的前提下改善翻譯
3. 確保程式碼範例功能正常
4. 測試當地化測驗內容

### Translation Metadata

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

## Debugging and Troubleshooting

### Common Issues

**Quiz app 啟動失敗**：
- 檢查 Node.js 版本（建議 v14 以上）
- 刪除 `node_modules` 和 `package-lock.json` 後重新執行 `npm install`
- 檢查埠號衝突（預設: Vite 使用 5173 埠）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低要求（node >=10）
- 確認埠號是否已被占用
- 確保已執行 `npm install` 安裝所有依賴

**瀏覽器擴充功能無法載入**：
- 驗證 manifest.json 格式正確
- 檢查瀏覽器主控台錯誤訊息
- 遵守瀏覽器擴充安裝指引

**Python 聊天專案問題**：
- 確保已安裝 OpenAI 套件：`pip install openai`
- 確認 GITHUB_TOKEN 環境變數有設定
- 檢查 GitHub Models 存取權限

**Docsify 無法提供文件**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從倉庫根目錄執行
- 確認 `docs/_sidebar.md` 存在

### Development Environment Tips

- HTML 專案使用 VS Code 搭配 Live Server 擴充
- 安裝 ESLint 和 Prettier 擴充以保持格式一致
- 使用瀏覽器開發工具除錯 JavaScript
- Vue 專案安裝 Vue DevTools 瀏覽器擴充

### Performance Considerations

- 由於有大量翻譯檔（50+語言），完整 clone 檔案量大
- 如只需內容，使用淺層 clone：`git clone --depth 1`
- 在編輯英文內容時排除翻譯資料夾搜尋
- 初次執行建置流程較慢（npm install、Vite build）

## Security Considerations

### Environment Variables

- API 金鑰不可提交至倉庫
- 使用 `.env` 檔案（已在 `.gitignore` 中）
- 各專案 README 文檔需記錄必要環境變數

### Python Projects

- 使用虛擬環境：`python -m venv venv`
- 定期更新依賴套件
- GitHub Token 權限需最小化

### GitHub Models Access

- GitHub Models 需個人存取權杖（PAT）
- Token 應設為環境變數儲存
- 禁止提交 token 或憑證

## Additional Notes

### Target Audience

- 完全沒有網頁開發經驗者
- 學生與自學者
- 使用此課程的教師
- 內容設計注重無障礙與循序漸進技能養成

### Educational Philosophy

- 以專案為主軸的學習方法
- 頻繁知識檢測（測驗）
- 實作程式練習
- 引入現實應用案例
- 以基礎為主、框架為輔

### Repository Maintenance

- 積極的學習者與貢獻者社群
- 定期更新依賴與內容
- 維護者監控議題與討論
- 翻譯更新自動化透過 GitHub Actions

### Related Resources

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 額外課程：生成式 AI、資料科學、機器學習、物聯網課程皆可用

### Working with Specific Projects

詳細專案操作說明請見：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 含認證的銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - 基於 Canvas 的遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo Structure

此倉庫非典型 monorepo，但包含多個獨立專案：
- 每堂課均自成一格
- 專案間無共享依賴
- 可分別開發不影響其他專案
- 若需完整課程體驗，請完整 clone 倉庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們力求準確，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。如涉及重要資訊，建議採用專業人工翻譯。我們對因使用本翻譯而產生的任何誤解或曲解概不負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->