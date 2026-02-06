# AGENTS.md

## 專案概述

這是一個用於教導初學者網頁開發基礎的教育課程資源庫。此課程是一個完整的為期12週的課程，由 Microsoft Cloud Advocates 開發，包含24個實作課程，涵蓋 JavaScript、CSS 和 HTML。

### 主要組成部分

- **教育內容**：24 個有結構的課程，按專案模組組織
- **實作專案**：溫室、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用、程式碼編輯器和 AI 聊天助理
- **互動測驗**：48 組測驗，每組有3題（課前/課後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯超過50種語言
- **技術堆疊**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 專案）

### 架構

- 以課程為基礎的教育資源庫
- 每個課程資料夾包含 README、程式碼範例及解答
- 獨立專案位於不同目錄中（quiz-app、各種課程專案）
- 使用 GitHub Actions (co-op-translator) 進行翻譯系統
- 文件使用 Docsify 發佈並提供 PDF 版本

## 設定指令

此資源庫主要供教育內容學習使用。若要操作特定專案：

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
npm run build      # 構建生產環境
npm run lint       # 執行 ESLint
```

### 銀行專案 API（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # 啟動 API 伺服器
npm run lint       # 執行 ESLint
npm run format     # 用 Prettier 格式化
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
# 設置 GITHUB_TOKEN 環境變量
python api.py
```

## 開發工作流程

### 內容貢獻者指南

1. **分支複製（fork）** 本資源庫至你的 GitHub 帳號
2. **本地複製（clone）** 你的分支
3. **建立新分支** 進行修改
4. 編輯課程內容或程式碼範例
5. 在相關專案資料夾測試程式碼變更
6. 按貢獻指南提交拉取請求（pull request）

### 學習者指南

1. Fork 或 Clone 資源庫
2. 依序瀏覽課程目錄
3. 閱讀每課的 README 檔案
4. 完成 https://ff-quizzes.netlify.app/web/ 的課前測驗
5. 操作課程資料夾中的程式碼範例
6. 完成作業和挑戰
7. 參加課後測驗

### 即時開發

- **文件**：於根目錄執行 `docsify serve`（埠號 3000）
- **測驗應用程式**：於 quiz-app 目錄執行 `npm run dev`
- **專案**：使用 VS Code Live Server 外掛處理 HTML 專案
- **API 專案**：於對應 API 目錄內執行 `npm start`

## 測試指南

### 測驗應用程式測試

```bash
cd quiz-app
npm run lint       # 檢查代碼風格問題
npm run build      # 驗證構建成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查程式碼風格問題
node server.js     # 確認伺服器啟動時沒有錯誤
```

### 一般測試方法

- 此為教育資源庫，未設全面自動化測試
- 手動測試重點：
  - 程式碼範例無錯誤執行
  - 文件內連結正確
  - 專案可成功建置
  - 範例符合最佳實踐

### 送出前檢查

- 於含 package.json 資料夾執行 `npm run lint`
- 確認 markdown 連結有效
- 在瀏覽器或 Node.js 測試程式碼範例
- 檢查翻譯是否保有原有結構

## 程式碼風格指南

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案中的標準 ESLint 設定
- 為教育清晰使用具意義的變數、函式名稱
- 添加注釋說明概念，方便學習
- 在配置 Prettier 的地方使用格式化

### HTML/CSS

- 使用語義化 HTML5 元素
- 採用響應式設計原則
- 明確的類別命名規範
- 添加解釋 CSS 技巧的注釋

### Python

- 遵循 PEP 8 風格指南
- 清晰且具有教育意義的程式碼範例
- 在有助於學習處添加型別提示

### Markdown 文件

- 清楚的標題階層結構
- 含語言標示的程式碼區塊
- 連結至額外資源
- 使用 `images/` 目錄下的截圖及圖片
- 圖片含有替代文字以兼顧無障礙

### 檔案組織

- 課程依序編號（1-getting-started-lessons、2-js-basics 等）
- 每專案通常含有 `solution/` 和 `start/` 或 `your-work/` 目錄
- 圖片存放於課程專屬的 `images/` 資料夾
- 翻譯檔存於 `translations/{language-code}/` 架構中

## 建置與部署

### 測驗應用程式部署（Azure Static Web Apps）

quiz-app 已設定用於 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送到 main 時，透過 GitHub Actions 工作流程部署
```

Azure Static Web Apps 配置：
- **應用程式路徑**：`/quiz-app`
- **輸出路徑**：`dist`
- **工作流程**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文件 PDF 產生

```bash
npm install                    # 安裝 docsify-to-pdf
npm run convert               # 從 docs 產生 PDF
```

### Docsify 文件

```bash
npm install -g docsify-cli    # 全域安裝 Docsify
docsify serve                 # 在 localhost:3000 提供服務
```

### 專案專屬建置

各專案資料夾可能有自行建置流程：
- Vue 專案：`npm run build` 產生正式包
- 靜態專案：無建置步驟，直接提供檔案

## 拉取請求指南

### 標題格式

使用明確描述變更範圍的標題：
- `[Quiz-app] 新增第 X 課測驗`
- `[Lesson-3] 修正溫室專案錯字`
- `[Translation] 新增第 5 课西班牙語翻譯`
- `[Docs] 更新設定說明`

### 必要檢查

提交 PR 前：

1. **程式碼品質**：
   - 於受影響的專案資料夾執行 `npm run lint`
   - 修正所有錯誤與警告

2. **建置驗證**：
   - 如適用執行 `npm run build`
   - 確認無建置錯誤

3. **連結驗證**：
   - 測試所有 markdown 連結
   - 確保圖片引用正確

4. **內容審查**：
   - 校對拼寫及文法
   - 保證程式碼範例正確且具教育意義
   - 確認翻譯維持原意

### 貢獻規範

- 同意 Microsoft CLA（第一個 PR 自動檢查）
- 遵守 [Microsoft 開源行為守則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南請參考 [CONTRIBUTING.md](./CONTRIBUTING.md)
- PR 描述中如適用請附上相關議題編號

### 審核流程

- 維護者及社群會審核 PR
- 重視教育清晰度
- 程式碼範例應符合現有最佳實踐
- 翻譯需審核語意正確及文化合宜

## 翻譯系統

### 自動化翻譯

- 使用 GitHub Actions 與 co-op-translator 工作流程
- 自動翻譯超過50種語言
- 原始檔案於主要目錄
- 翻譯檔存於 `translations/{language-code}/`

### 加入人工翻譯改進

1. 尋找 `translations/{language-code}/` 內對應檔案
2. 在保有結構的前提下進行修訂
3. 確保程式碼範例依然可用
4. 測試當地化測驗內容

### 翻譯元資料

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

## 除錯與故障排除

### 常見問題

**測驗應用程式無法啟動**：
- 檢查 Node.js 版本（建議 v14 以上）
- 刪除 `node_modules` 與 `package-lock.json`，重新執行 `npm install`
- 檢查埠號衝突（預設：Vite 使用 5173 埠）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低需求（node >=10）
- 確認埠號未被占用
- 確保所有相依性已用 `npm install` 安裝完成

**瀏覽器擴充功能不載入**：
- 確認 manifest.json 格式正確
- 查看瀏覽器主控台錯誤訊息
- 遵循瀏覽器專屬擴充功能安裝說明

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認 GITHUB_TOKEN 環境變數已設定
- 檢查 GitHub Models 存取權限

**Docsify 文件無法服務**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄啟動
- 確認 `docs/_sidebar.md` 存在

### 開發環境建議

- 使用 VS Code 與 Live Server 外掛處理 HTML 專案
- 安裝 ESLint 與 Prettier 外掛保持格式一致
- 使用瀏覽器開發工具除錯 JavaScript
- Vue 專案可安裝 Vue DevTools 瀏覽器擴充功能

### 效能考量

- 多達50多種語言的翻譯檔案會造成完整複製資料庫龐大
- 若只處理內容，可使用淺複製：`git clone --depth 1`
- 在處理英文內容時排除翻譯資料夾搜尋
- 初次執行建置流程可能較慢（npm install、Vite build）

## 安全考量

### 環境變數

- API 密鑰嚴禁提交至資源庫
- 使用 `.env` 檔（已加入 `.gitignore`）
- 於專案 README 中記錄必要環境變數

### Python 專案

- 使用虛擬環境：`python -m venv venv`
- 保持依賴套件更新
- GitHub 訪問代幣應具備最小必要權限

### GitHub Models 存取

- 需要個人存取權杖（PAT）
- 代幣應妥善存放為環境變數
- 禁止提交代幣或憑證

## 附加說明

### 目標受眾

- 網頁開發完全初學者
- 學生及自學者
- 教師用於班級教學
- 內容設計兼顧無障礙與逐步技能養成

### 教育理念

- 專案導向學習
- 經常性知識檢核（測驗）
- 實作程式練習
- 真實世界應用範例
- 聚焦基礎，再談框架

### 資源庫維護

- 活躍的學習者與貢獻者社群
- 定期更新依賴套件和內容
- 維護者監控議題與討論
- 翻譯更新自動化透過 GitHub Actions

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、數據科學、機器學習、物聯網課程

### 專案操作說明

個別專案詳細指南請參考 README 檔案：
- `quiz-app/README.md` - Vue 3 測驗應用程式
- `7-bank-project/README.md` - 帶身份驗證的銀行應用程式
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - Canvas 遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo 結構

此資源庫非傳統 monorepo，但包含多個獨立專案：
- 每課程獨自成章
- 專案不共用依賴
- 可獨立操作各專案不互相影響
- 如需完整課程體驗請 clone 整個資源庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要資訊，建議尋求專業人工翻譯。我們對因使用本翻譯而引起的任何誤解或誤釋不承擔任何責任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->