# AGENTS.md

## 專案概覽

這是一個用於教授初學者網頁開發基礎的教育課程資源庫。該課程為一個由 Microsoft Cloud Advocates 開發的完整 12 週課程，包含 24 個涵蓋 JavaScript、CSS 和 HTML 的實作課程。

### 主要組件

- <strong>教育內容</strong>：24 個結構化課程，組織於專案模組中
- <strong>實用專案</strong>：生態球、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用、程式碼編輯器及 AI 聊天助手
- <strong>互動測驗</strong>：48 次測驗，每次包含 3 題（課前/課後評估）
- <strong>多語言支援</strong>：透過 GitHub Actions 自動支援 50+ 種語言翻譯
- <strong>技術堆疊</strong>：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 專案）

### 架構

- 以課程為基礎結構的教育資源庫
- 每個課程資料夾包含 README、程式碼範例和解決方案
- 獨立專案位於獨立目錄中（quiz-app、各種課程專案）
- 透過 GitHub Actions (co-op-translator) 的翻譯系統
- 文件透過 Docsify 提供並可生成 PDF

## 設定指令

此資源庫主要供教育內容閱讀使用。若要操作特定專案，請依以下指引：

### 主要資源庫設定

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用程式設定（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # 啟動開發伺服器
npm run build      # 建立生產版本
npm run lint       # 執行 ESLint
```

### 銀行專案 API（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # 啟動 API 伺服器
npm run lint       # 運行 ESLint
npm run format     # 使用 Prettier 格式化
```

### 瀏覽器擴充功能專案

```bash
cd 5-browser-extension/solution
npm install
# 遵循瀏覽器特定的擴充功能載入指示
```

### 太空遊戲專案

```bash
cd 6-space-game/solution
npm install
# 在瀏覽器中打開 index.html 或使用 Live Server
```

### 聊天專案（Python 後端）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 設定 GITHUB_TOKEN 環境變量
python api.py
```

## 開發工作流程

### 對內容貢獻者

1. **將資源庫 fork 到您的 GitHub 帳號**
2. **將 fork 複製到本地端**
3. <strong>為您的修改建立新分支</strong>
4. 修改課程內容或程式碼範例
5. 在相關專案目錄中測試程式碼修改
6. 根據貢獻指南提交 pull requests

### 對學習者

1. Fork 或 Clone 此資源庫
2. 依序瀏覽課程資料夾
3. 閱讀每堂課的 README 檔案
4. 完成課前測驗，網址：https://ff-quizzes.netlify.app/web/
5. 實作課程資料夾內的程式碼範例
6. 完成作業與挑戰
7. 參加課後測驗

### 即時開發

- <strong>文件</strong>：在根目錄運行 `docsify serve`（預設埠 3000）
- <strong>測驗應用程式</strong>：在 quiz-app 目錄運行 `npm run dev`
- <strong>專案</strong>：HTML 專案使用 VS Code Live Server 擴充功能
- **API 專案**：在對應 API 目錄運行 `npm start`

## 測試說明

### 測驗應用程式測試

```bash
cd quiz-app
npm run lint       # 檢查代碼風格問題
npm run build      # 驗證編譯成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查代碼風格問題
node server.js     # 驗證伺服器無錯誤啟動
```

### 一般測試方式

- 此為教育資源庫，沒有全面自動化測試
- 手動測試重點：
  - 程式碼範例無錯誤執行
  - 文件中連結正常
  - 專案成功構建
  - 範例遵從最佳實務

### 提交前檢查

- 在含 package.json 的目錄執行 `npm run lint`
- 確認 Markdown 連結有效
- 在瀏覽器或 Node.js 中測試程式碼範例
- 確保翻譯結構無誤

## 程式碼風格指南

### JavaScript

- 使用現代 ES6+ 語法
- 遵從專案中提供的標準 ESLint 設定
- 變數及函式命名具意義以利學習理解
- 新增註解解釋概念給學習者
- 使用 Prettier 格式化（有配置時）

### HTML/CSS

- 使用語意化 HTML5 元素
- 響應式設計原則
- 清晰的 class 命名規則
- 註解說明 CSS 技術給學習者

### Python

- 遵守 PEP 8 風格指南
- 清楚且具教學性的程式碼範例
- 需要時使用型別提示以利學習

### Markdown 文件

- 清晰的標題階層
- 標明語言的程式區塊
- 連結至額外資源
- `images/` 資料夾的截圖與圖片
- 圖片具備替代文字以利無障礙

### 檔案組織

- 課程依序編號 (1-getting-started-lessons, 2-js-basics 等)
- 每個專案含有 `solution/`，通常有 `start/` 或 `your-work/`
- 圖片存放於課程專屬 `images/` 資料夾
- 翻譯存放於 `translations/{language-code}/` 結構

## 建構與部署

### 測驗應用程式部署（Azure Static Web Apps）

quiz-app 已配置 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送到 main 時，透過 GitHub Actions 工作流程部署
```

Azure Static Web Apps 配置：
- <strong>應用程式位置</strong>：`/quiz-app`
- <strong>輸出位置</strong>：`dist`
- <strong>工作流程</strong>：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

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

### 專案專屬建構

每個專案目錄可能有自己的建構流程：
- Vue 專案：`npm run build` 建置正式包
- 靜態專案：無建置步驟，直接提供檔案服務

## Pull Request 指南

### 標題格式

使用清晰且描述性標題顯示修改範圍：
- `[Quiz-app] 新增第 X 課測驗`
- `[Lesson-3] 修正生態球專案拼寫錯誤`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新設定指示`

### 必要檢查事項

在提交 PR 前：

1. <strong>程式碼品質</strong>：
   - 在受影響專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤及警告

2. <strong>建構驗證</strong>：
   - 執行 `npm run build`（若適用）
   - 確保無建構錯誤

3. <strong>連結驗證</strong>：
   - 測試所有 Markdown 連結
   - 確認圖片參考可用

4. <strong>內容審查</strong>：
   - 校對拼字與語法
   - 確認程式碼範例正確且具教學意義
   - 確保翻譯保持原意

### 貢獻要求

- 同意 Microsoft CLA（首次 PR 自動檢查）
- 遵從 [Microsoft 開源行為守則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- PR 描述中引用相關 issue 編號（如適用）

### 審查流程

- PR 由維護者及社群共同審查
- 優先考量教育清晰度
- 範例程式要遵循當前最佳實務
- 翻譯須審核準確性及文化適切性

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 與 co-op-translator 工作流程
- 自動翻譯成 50 多種語言
- 原文檔案在主目錄
- 翻譯檔案存放於 `translations/{language-code}/` 目錄

### 手動翻譯改進

1. 定位檔案於 `translations/{language-code}/`
2. 在保留結構的情況下進行改進
3. 確保程式碼範例繼續可運作
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

<strong>測驗應用無法啟動</strong>：
- 檢查 Node.js 版本（建議 v14+）
- 刪除 `node_modules` 與 `package-lock.json`，重新執行 `npm install`
- 檢查埠號衝突（預設 Vite 使用 5173 埠）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低要求 (node >=10)
- 檢查埠號是否已被使用
- 確認所有依賴已安裝（`npm install`）

<strong>瀏覽器擴充功能無法載入</strong>：
- 確認 manifest.json 格式正確
- 查看瀏覽器主控台錯誤訊息
- 遵循瀏覽器專屬擴充功能安裝指示

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認 GITHUB_TOKEN 環境變數已設定
- 檢查 GitHub Models 存取權限

**Docsify 未提供文件服務**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄執行
- 確認 `docs/_sidebar.md` 已存在

### 開發環境提示

- 使用 VS Code 及 Live Server 擴充功能瀏覽 HTML 專案
- 安裝 ESLint 與 Prettier 擴充以統一格式
- 使用瀏覽器開發者工具偵錯 JavaScript
- Vue 專案安裝 Vue DevTools 瀏覽器擴充功能

### 性能考量

- 多達 50+ 種語言翻譯檔數量多，完整 clone 體積大
- 僅操作內容時可使用淺層 clone：`git clone --depth 1`
- 作英文內容時可排除搜尋翻譯檔
- 首次執行建構較慢（npm install、Vite build）

## 安全考量

### 環境變數

- API 金鑰絕不可提交到資源庫
- 使用 `.env` 檔案（已加入 `.gitignore`）
- 專案 README 有文件說明所需環境變數

### Python 專案

- 使用虛擬環境：`python -m venv venv`
- 維持依賴套件更新
- GitHub Token 需具最低必要權限

### GitHub Models 存取

- 需要個人存取權杖（PAT）存取 GitHub Models
- 權杖以環境變數儲存
- 絕不可將權杖或憑證提交

## 補充說明

### 目標對象

- 完全的網頁開發初學者
- 學生與自學者
- 在教室使用此課程的教師
- 內容設計注重無障礙及循序漸進技能建立

### 教育理念

- 專案導向學習
- 頻繁知識檢核（測驗）
- 實作程式練習
- 真實世界應用範例
- 先掌握基礎，再談框架

### 資源庫維護

- 活躍的學習者與貢獻者社群
- 依賴與內容定期更新
- 維護者監控 issues 與討論
- 使用 GitHub Actions 自動翻譯更新

### 相關資源

- [Microsoft Learn 課程模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程可用

### 操作特定專案

詳細說明請參考以下專案 README：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 含身份驗證銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - 基於 Canvas 的遊戲開發
- `9-chat-project/README.md` - AI 聊天助手專案

### Monorepo 架構

雖非傳統 monorepo，但此資源庫包含多個獨立專案：
- 每堂課程皆自成一格
- 專案間未共用依賴
- 可單獨開發專案，不影響其他專案
- 可整體 clone 以體驗完整課程

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件透過 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻譯。雖然我們致力於保持準確性，但請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應視為權威來源。對於重要資訊，建議使用專業人類翻譯。對於因使用此翻譯而引起的任何誤解或誤譯，我們概不負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->