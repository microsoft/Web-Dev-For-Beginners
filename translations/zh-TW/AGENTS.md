# AGENTS.md

## 專案概覽

這是一個用於教導初學者網頁開發基礎的教育課程資源庫。課程為微軟雲端推廣者所開發的12週完整課程，包含24個涵蓋 JavaScript、CSS 和 HTML 的實作課程。

### 主要組成部分

- **教育內容**：24堂結構化課程，以專案為基礎的模組安排
- **實務專案**：溫室生態缸、打字遊戲、瀏覽器擴充套件、太空遊戲、銀行應用程式、程式碼編輯器及 AI 聊天助手
- **互動測驗**：48次測驗，每次3題（課前/課後評量）
- **多語言支援**：透過 GitHub Actions 自動翻譯超過50種語言
- **技術使用**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AI專案）

### 架構

- 以課程為結構的教育資源庫
- 每堂課資料夾包含 README、範例程式與解答
- 單獨專案放在不同目錄（quiz-app、各種課程專案）
- 使用 GitHub Actions（co-op-translator）進行翻譯系統
- 使用 Docsify 提供文件，並有 PDF 版本

## 安裝指令

本資源庫主要供教育內容使用。若要操作指定專案：

### 主要資源庫安裝

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用程式安裝 (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 啟動開發伺服器
npm run build      # 編譯為生產版本
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

### 瀏覽器擴充套件專案

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

### 聊天專案 (Python 後端)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 設定 GITHUB_TOKEN 環境變數
python api.py
```

## 開發工作流程

### 給內容貢獻者

1. **Fork 此資源庫** 到你的 GitHub 帳號
2. **在本地端 clone 你的 fork**
3. **建立新的分支** 來做修改
4. 修改課程內容或者範例程式
5. 在相關專案目錄測試程式碼
6. 按照貢獻指南提交 Pull Requests

### 給學習者

1. Fork 或 clone 該資源庫
2. 按課程順序瀏覽課程目錄
3. 閱讀每堂課的 README 檔
4. 在 https://ff-quizzes.netlify.app/web/ 完成課前測驗
5. 練習課程目錄中的範例程式
6. 完成作業和挑戰任務
7. 進行課後測驗

### 即時開發

- **文件**：在根目錄執行 `docsify serve` （預設3000埠）
- **測驗應用程式**：在 quiz-app 目錄執行 `npm run dev`
- **專案**：使用 VS Code 的 Live Server 延伸套件開啟 HTML 專案
- **API 專案**：在對應 API 目錄執行 `npm start`

## 測試指引

### 測驗應用程式測試

```bash
cd quiz-app
npm run lint       # 檢查程式碼風格問題
npm run build      # 驗證建置成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查程式碼風格問題
node server.js     # 驗證伺服器啟動是否無錯誤
```

### 一般測試方法

- 本資源庫為教育用，無全面自動測試
- 人工測試重點：
  - 範例程式碼無錯誤執行
  - 文件中的連結可正常使用
  - 專案正確建置成功
  - 範例遵守最佳實務

### 送出前檢查

- 在有 package.json 的目錄執行 `npm run lint`
- 確認 markdown 連結有效
- 在瀏覽器或 Node.js 中測試範例程式
- 確保翻譯內容維持正確結構

## 程式碼風格指引

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案所提供的 ESLint 標準設定
- 使用具意義的變數與函式名稱以利教學
- 添加說明概念的註解協助學習者
- 在配置 Prettier 的環境下格式化程式碼

### HTML/CSS

- 使用語意化的 HTML5 元素
- 採用響應式設計原則
- 採用清晰的類別命名規則
- 加入說明 CSS 技術的註解幫助學習者理解

### Python

- 遵守 PEP 8 風格指引
- 使用清晰且易於教學的程式碼範例
- 輔助教學處使用型別提示

### Markdown 文件

- 清晰的標題層級結構
- 附帶語言標示的程式碼區塊
- 提供額外資源連結
- 在 `images/` 目錄含有截圖與圖片
- 圖片附加替代文字以利無障礙使用

### 檔案組織

- 課程依序編號（1-getting-started-lessons, 2-js-basics 等）
- 每個專案有 `solution/` 及常見的 `start/` 或 `your-work/` 目錄
- 圖片保存在特定課程的 `images/` 目錄
- 翻譯檔案置於 `translations/{language-code}/` 結構

## 建置與部署

### 測驗應用程式部署 (Azure 靜態網站)

測驗應用程式已設定用於 Azure 靜態網站部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送到 main 時透過 GitHub Actions 工作流程部署
```

Azure 靜態網站設定：
- **應用程式位置**：`/quiz-app`
- **輸出目錄**：`dist`
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

每個專案目錄可能有其建置流程：
- Vue 專案：`npm run build` 產生生產用套件
- 靜態專案：無需建置，直接提供檔案

## Pull Request 準則

### 標題格式

請用清楚描述更動範圍的標題：
- `[Quiz-app] 新增第 X 課測驗`
- `[Lesson-3] 修正溫室專案錯字`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新安裝說明`

### 必須檢查事項

提交 PR 前：

1. **程式碼品質**：
   - 在影響的專案目錄執行 `npm run lint`
   - 修正所有錯誤及警告

2. **建置驗證**：
   - 如適用，執行 `npm run build`
   - 確保建置無錯誤

3. **連結驗證**：
   - 測試所有 markdown 連結
   - 確認圖片路徑有效

4. **內容審核**：
   - 校對拼字及文法
   - 確認範例程式正確且具教學性
   - 確保翻譯保持原意

### 貢獻要求

- 同意微軟 CLA（第一次 PR 會自動檢查）
- 遵守 [Microsoft 開源行為準則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指引請見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如適用，於 PR 描述中提及議題編號

### 審查流程

- PR 由維護者與社群審查
- 優先確保教育清晰度
- 範例程式需依當前最佳實務
- 翻譯審查重視準確與文化適當性

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 配合 co-op-translator
- 自動翻譯超過50種語言
- 原始檔位於主目錄
- 翻譯檔置於 `translations/{language-code}/` 目錄

### 手動翻譯改進

1. 找出 `translations/{language-code}/` 中檔案
2. 在保留結構前提下進行改進
3. 確保範例程式仍可執行
4. 測試在地化測驗內容

### 翻譯元資料

翻譯檔含元資料標頭：
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

## 除錯與問題排解

### 常見問題

**測驗應用程式無法啟動**：
- 檢查 Node.js 版本（建議 v14 以上）
- 刪除 `node_modules` 和 `package-lock.json`，重新執行 `npm install`
- 檢查埠號衝突（Vite 預設使用 5173 埠）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低要求（node >=10）
- 檢查埠號是否被佔用
- 確保所有依賴已用 `npm install` 安裝

**瀏覽器擴充無法載入**：
- 確認 manifest.json 格式正確
- 檢查瀏覽器主控台錯誤訊息
- 遵循各瀏覽器擴充安裝指引

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認 GITHUB_TOKEN 環境變數已設置
- 檢查 GitHub Models 存取權限

**Docsify 無法提供文件服務**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄啟動
- 確認 `docs/_sidebar.md` 存在

### 開發環境建議

- 使用 VS Code 搭配 Live Server 擴充套件進行 HTML 開發
- 安裝 ESLint 和 Prettier 擴充維持一致格式
- 使用瀏覽器開發工具除錯 JavaScript
- Vue 專案安裝 Vue DevTools 瀏覽器擴充

### 性能考量

- 超過50種語言翻譯檔案多，完整克隆相當龐大
- 若只工作於內容可用淺度克隆：`git clone --depth 1`
- 編輯英文內容時可排除翻譯檔搜尋
- 初次執行建置流程可能較慢（npm 安裝、Vite 建置）

## 安全考量

### 環境變數

- API 金鑰切勿提交至資源庫
- 使用 `.env` 檔案（已列入 `.gitignore`）
- 必要環境變數於專案 README 文件中說明

### Python 專案

- 使用虛擬環境：`python -m venv venv`
- 定期更新相依套件
- GitHub token 使用最低權限原則

### GitHub Models 存取

- 需使用個人存取權杖 (PAT)
- 將 token 儲存在環境變數
- 切勿提交 token 或認證資訊

## 附註

### 目標對象

- 完全初學網頁開發者
- 學生與自學者
- 教師用於課堂教學
- 內容設計兼顧可及性與循序漸進培養技能

### 教育哲學

- 專案導向學習
- 頻繁的知識檢核（測驗）
- 實務程式練習
- 真實世界應用範例
- 先著重基礎，再談框架

### 資源庫維護

- 活躍的學習者與貢獻者社群
- 定期更新依賴與內容
- 由維護者監控議題與討論
- 翻譯更新自動化透過 GitHub Actions

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [Student Hub 資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程可參考

### 操作特定專案說明

各專案詳細說明請參閱對應 README：
- `quiz-app/README.md` - Vue 3 測驗應用程式
- `7-bank-project/README.md` - 包含驗證的銀行應用程式
- `5-browser-extension/README.md` - 瀏覽器擴充套件開發
- `6-space-game/README.md` - 基於 canvas 的遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### 多專案資源庫結構

雖非傳統 monorepo，內含多個獨立專案：
- 每堂課獨立完整
- 專案間無依賴共享
- 可獨立作業不影響其他專案
- 若需完整課程體驗可整個資源庫 clone

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件係使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們力求準確，但請注意自動翻譯可能包含錯誤或不精確之處。原始文件之母語版本應視為權威來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用本翻譯而造成之任何誤解或誤譯負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->