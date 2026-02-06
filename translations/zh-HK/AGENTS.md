# AGENTS.md

## Project Overview

這是一個用於教導初學者網頁開發基礎的教育課程資源庫。課程為一個由微軟雲端推廣者所開發的完整12週課程，包含24堂涵蓋 JavaScript、CSS 及 HTML 的實作課程。

### Key Components

- **教育內容**：24堂結構化課程，分項目模組進行
- **實作專案**：溫室、生字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用程式、程式碼編輯器及 AI 聊天助理
- **互動測驗**：48個測驗，每個測驗3題（課前及課後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯超過50種語言
- **技術**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AI專案用）

### Architecture

- 教育資源庫，採課程為單位架構
- 每堂課資料夾包含 README、程式碼範例及解答
- 獨立專案於不同資料夾（quiz-app、各課程專案）
- 使用 GitHub Actions (co-op-translator) 實現翻譯系統
- 文件採用 Docsify 呈現，並提供 PDF 格式

## Setup Commands

此資源庫主要用於教育內容的瀏覽。針對特定專案的操作：

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
npm run build      # 為生產環境構建
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
# 遵循瀏覽器專用擴充功能載入指示
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

1. **將資源庫 Fork 到你的 GitHub 帳號**
2. **在本機複製你的 Fork**
3. **為你的變更建立新分支**
4. 修改課程內容或程式碼範例
5. 在相關專案資料夾測試程式碼變更
6. 依照貢獻指南提交 Pull Requests

### For Learners

1. Fork 或複製此資源庫
2. 依序進入各課程資料夾
3. 閱讀每堂課的 README 文件
4. 完成 https://ff-quizzes.netlify.app/web/ 的課前測驗
5. 進行課程資料夾中的程式碼實作
6. 完成作業及挑戰
7. 進行課後測驗

### Live Development

- **文件伺服器**：於根目錄執行 `docsify serve`（使用埠號3000）
- **Quiz App**：於 quiz-app 資料夾執行 `npm run dev`
- **專案**：使用 VS Code Live Server 擴充功能執行 HTML 專案
- **API 專案**：於相應 API 資料夾執行 `npm start`

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
node server.js     # 驗證服務器啟動無錯誤
```

### General Testing Approach

- 這是一個教育資源庫，無完整自動化測試
- 手動測試重點包括：
  - 程式碼範例正常執行無錯誤
  - 文件內的連結正常運作
  - 專案建置成功完成
  - 範例遵循最佳實務

### Pre-submission Checks

- 在包含 package.json 的資料夾執行 `npm run lint`
- 驗證 Markdown 連結有效
- 於瀏覽器或 Node.js 測試程式碼範例
- 確認翻譯內容結構維護正確

## Code Style Guidelines

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案內標準 ESLint 設定
- 使用有意義的變數與函式名稱，方便教學
- 加入注解解釋概念給學習者
- 在有設定時使用 Prettier 格式化

### HTML/CSS

- 採用語意化 HTML5 元素
- 響應式設計原則
- 清晰的類別命名規則
- 注解說明 CSS 技巧給學習者

### Python

- 遵循 PEP 8 風格指引
- 清晰且具教育意義的程式碼範例
- 適時加入型態提示以協助學習

### Markdown Documentation

- 清楚的標題階層
- 語言標示的程式碼區塊
- 連結至額外資源
- 螢幕截圖及圖片放於 `images/` 資料夾
- 圖片備註文字以提升無障礙

### File Organization

- 課程依序編號（1-getting-started-lessons，2-js-basics，等等）
- 每個專案有 `solution/` 等資料夾，通常還有 `start/` 或 `your-work/`
- 圖片存放在各課程的 `images/` 資料夾
- 翻譯置於 `translations/{language-code}/` 結構中

## Build and Deployment

### Quiz App Deployment (Azure Static Web Apps)

quiz-app 已設定用於 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 於推送至 main 時，透過 GitHub Actions 工作流程部署
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
docsify serve                 # 在 localhost:3000 上提供服務
```

### Project-specific Builds

每個專案資料夾可能有獨立建置流程：
- Vue 專案：`npm run build` 產生生產版本包
- 靜態專案：無建置步驟，直接提供檔案服務

## Pull Request Guidelines

### Title Format

使用清楚、描述性的標題，指示修改範圍：
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Required Checks

提交 PR 前須:

1. **程式碼品質**：
   - 於相關專案資料夾執行 `npm run lint`
   - 修正所有 lint 錯誤及警告

2. **建置驗證**：
   - 如有需要執行 `npm run build`
   - 確認無建置錯誤

3. **連結驗證**：
   - 測試所有 Markdown 連結
   - 確認圖片參考可用

4. **內容審核**：
   - 拼字及文法校對
   - 確認程式碼範例正確且具備教育意義
   - 確認翻譯保持原意

### Contribution Requirements

- 同意微軟 CLA（首個 PR 會自動檢查）
- 遵守 [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- 參考 [CONTRIBUTING.md](./CONTRIBUTING.md) 詳細指南
- 如有相關 issue，請在 PR 描述內提及 issue 編號

### Review Process

- PR 由維護者及社群共同審核
- 優先考量教育清晰度
- 程式碼範例應遵循現代最佳實務
- 翻譯內容須審核準確性及文化適切性

## Translation System

### Automated Translation

- 使用 GitHub Actions 與 co-op-translator 工作流程
- 自動翻譯成50多種語言
- 原始檔案位於主要目錄
- 翻譯檔案位於 `translations/{language-code}/` 資料夾

### Adding Manual Translation Improvements

1. 尋找 `translations/{language-code}/` 中檔案
2. 在保留結構下做改善
3. 確保程式碼範例依然可用
4. 測試任何本地化的測驗內容

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

**Quiz app 無法啟動**：
- 檢查 Node.js 版本（建議 v14+）
- 刪除 `node_modules` 及 `package-lock.json`，重新執行 `npm install`
- 檢查埠號衝突（預設：Vite 使用 5173 埠）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低需求（node >=10）
- 檢查埠號是否已被占用
- 確保執行了 `npm install` 安裝所有依賴

**瀏覽器擴充功能無法載入**：
- 確認 manifest.json 格式正確
- 查看瀏覽器主控台錯誤訊息
- 依瀏覽器特定安裝步驟操作

**Python 聊天專案問題**：
- 確認已安裝 openai 套件：`pip install openai`
- 檢查 GITHUB_TOKEN 環境變數是否設定
- 確認 GitHub Models 的存取權限

**Docsify 文件無法服務**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄執行
- 檢查 `docs/_sidebar.md` 是否存在

### Development Environment Tips

- 使用 VS Code 並安裝 Live Server 擴充功能作 HTML 專案開發
- 安裝 ESLint 和 Prettier 擴充保持格式一致
- 利用瀏覽器開發者工具除錯 JavaScript
- Vue 專案可安裝 Vue DevTools 瀏覽器擴充

### Performance Considerations

- 大量翻譯檔案（50+ 語言）導致完整 clone 容量大
- 只工作於內容時可使用淺層 clone：`git clone --depth 1`
- 針對英文內容開發時排除翻譯目錄搜尋
- 初次執行建置流程時（npm install、Vite build）可能較慢

## Security Considerations

### Environment Variables

- API 金鑰切勿提交至資源庫
- 使用 `.env` 檔案（已加入 `.gitignore`）
- 在專案 README 中說明所需環境變數

### Python Projects

- 使用虛擬環境：`python -m venv venv`
- 保持依賴為最新版本
- GitHub token 撥放最小權限

### GitHub Models Access

- 需個人存取權杖（PAT）取得 GitHub Models 權限
- 權杖應以環境變數保存
- 嚴禁提交權杖或憑證

## Additional Notes

### Target Audience

- 網頁開發初學者
- 學生及自學者
- 在教室使用課程的教師
- 內容設計注重無障礙及漸進技能建立

### Educational Philosophy

- 專案導向學習方法
- 頻繁知識檢核（測驗）
- 動手編碼練習
- 真實世界應用範例
- 先建立基礎，再學框架

### Repository Maintenance

- 積極的學習者與貢獻者社群
- 定期更新相依性與內容
- 維護者監控 issue 與討論
- 利用 GitHub Actions 自動化翻譯更新

### Related Resources

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 額外課程：生成式 AI、資料科學、機器學習、物聯網課程可取得

### Working with Specific Projects

個別專案詳細說明，請參閱 README 檔案：
- `quiz-app/README.md` - Vue 3 測驗應用程式
- `7-bank-project/README.md` - 銀行應用含驗證
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - Canvas遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo Structure

此非傳統 monorepo，但包含多個獨立專案：
- 每堂課獨立運作
- 專案不共享依賴
- 可在不影響他專案下工作
- 若要完整學習體驗，建議 clone 全部資源庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件乃使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻譯而成。雖然我們努力確保準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始語言版本的文件應被視為權威來源。對於關鍵資訊，建議採用專業人工翻譯。我們概不對因使用本翻譯而引致的任何誤解或誤譯承擔責任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->