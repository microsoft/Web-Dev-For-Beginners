# AGENTS.md

## 專案概覽

這是一個教育課程資源庫，用於教授初學者網頁開發基礎知識。課程是一個由 Microsoft Cloud Advocates 開發的完整 12 週課程，包含 24 節實作課程，涵蓋 JavaScript、CSS 和 HTML。

### 主要組成

- **教育內容**：24 節有結構的課程，組成專案導向模組
- **實務專案**：植物生態箱、打字遊戲、瀏覽器擴充套件、太空遊戲、銀行應用程式、程式碼編輯器以及 AI 聊天助理
- **互動測驗**：48 次測驗，每次有 3 題（課前/課後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯成 50 多種語言
- **技術堆疊**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AI 專案）

### 架構

- 以課程為基礎的教育資源庫
- 每個課程資料夾包含 README、程式碼範例和解答
- 獨立專案位於不同資料夾（quiz-app、各種課程專案）
- 使用 GitHub Actions（co-op-translator）做翻譯系統
- 文件透過 Docsify 提供並可下載 PDF

## 設定指令

此資源庫主要是供教育內容使用。如需操作特定專案：

### 主要資源庫設定

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用設定 (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 啟動開發伺服器
npm run build      # 建立生產版本
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

### 瀏覽器擴充專案

```bash
cd 5-browser-extension/solution
npm install
# 遵循瀏覽器特定的擴充功能加載說明
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

### 內容貢獻者

1. **將資源庫 fork** 至您的 GitHub 帳號
2. **將 fork 的版本 clone** 到本地
3. **建立新分支** 以進行修改
4. 修改課程內容或程式碼範例
5. 在相關專案資料夾測試程式碼更動
6. 按貢獻指引提交 pull request

### 學習者

1. Fork 或 clone 資源庫
2. 按順序瀏覽課程資料夾
3. 閱讀每課 README 檔案
4. 完成課前測驗，網址為 https://ff-quizzes.netlify.app/web/
5. 運行課程資料夾中的程式碼範例
6. 完成作業與挑戰
7. 參加課後測驗

### 線上開發

- **文件**：於根目錄執行 `docsify serve`（預設埠號 3000）
- **測驗應用**：於 quiz-app 目錄執行 `npm run dev`
- **專案**：使用 VS Code Live Server 擴充套件服務 HTML 專案
- **API 專案**：於對應的 API 目錄執行 `npm start`

## 測試指導

### 測驗應用測試

```bash
cd quiz-app
npm run lint       # 檢查程式碼風格問題
npm run build      # 驗證建置是否成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查程式碼風格問題
node server.js     # 驗證伺服器啟動是否無錯誤
```

### 一般測試方法

- 本教育資源庫無完整自動化測試
- 以人工測試為主，重點在：
  - 程式碼範例能正常執行無錯誤
  - 文件中的連結正常運作
  - 專案能成功打造（build）
  - 範例遵循最佳實務

### 提交前檢查

- 在有 package.json 的目錄執行 `npm run lint`
- 確認 markdown 連結有效
- 在瀏覽器或 Node.js 測試程式碼範例
- 檢查翻譯內容結構是否保持正確

## 程式碼風格指南

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案中提供的標準 ESLint 設定
- 使用具教育意義的變數與函式名稱
- 添加註解以解釋概念，幫助學習者理解
- 使用配置好的 Prettier 格式化

### HTML/CSS

- 使用語義化的 HTML5 元素
- 採用響應式設計原則
- 清晰的類別命名慣例
- 用註解闡述 CSS 技巧以便教學

### Python

- 遵守 PEP 8 風格指南
- 清晰、具教育意義的程式碼範例
- 必要時使用型別提示，便利學習

### Markdown 文件

- 清晰的標題層級結構
- 語言標明的程式碼區塊
- 提供相關資源鏈結
- `images/` 資料夾內的截圖與圖片
- 圖片皆有替代文字以便無障礙使用

### 檔案組織

- 課程依序編號（如 1-getting-started-lessons、2-js-basics 等）
- 每個專案包含 `solution/`，常見還有 `start/` 或 `your-work/` 目錄
- 圖片存放於每課特定的 `images/` 資料夾
- 翻譯檔案置於 `translations/{language-code}/` 結構

## 建置與部署

### 測驗應用部署 (Azure 靜態網頁應用)

quiz-app 已設定 Azure 靜態網頁應用部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送到 main 時，透過 GitHub Actions 工作流程進行部署
```

Azure 靜態網頁應用配置：
- **應用位置**：`/quiz-app`
- **輸出位置**：`dist`
- **工作流程**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文件 PDF 生成

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

每個專案目錄可能有各自的建置流程：
- Vue 專案：`npm run build` 產生生產環境套件
- 靜態專案：無需建置，直接提供靜態檔案

## Pull Request 指引

### 標題格式

使用清晰且描述性的標題來表示更動範圍：
- `[Quiz-app] 新增課程 X 測驗`
- `[Lesson-3] 修正植物生態箱專案的錯字`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新安裝說明`

### 必要檢查

提交 PR 前：

1. **程式碼品質**：
   - 在受影響的專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤及警告

2. **建置驗證**：
   - 如有需建置，執行 `npm run build`
   - 確認無建置錯誤

3. **連結驗證**：
   - 測試所有 markdown 連結
   - 確認圖片引用正確

4. **內容審核**：
   - 校對拼字及語法
   - 確認程式碼範例正確且具教育意義
   - 檢查翻譯是否維持原意

### 貢獻要求

- 同意 Microsoft CLA（第一個 PR 會自動檢查）
- 遵守 [Microsoft 開源行為守則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指引請參考 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 若有相關議題，請於 PR 描述中引用議題編號

### 審查流程

- PR 將由維護者與社群共同審查
- 優先考量教育內容清晰度
- 程式碼範例應符合當前最佳實務
- 翻譯審查求精確與文化適切

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 搭配 co-op-translator 工作流程
- 自動翻譯超過 50 種語言
- 原始檔置於主要目錄
- 翻譯檔存於 `translations/{language-code}/` 目錄

### 手動優化翻譯

1. 找到檔案於 `translations/{language-code}/`
2. 改善翻譯內容，同時保持結構
3. 確保程式碼範例可正常執行
4. 測試本地化的測驗內容

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

**測驗應用無法啟動**：
- 檢查 Node.js 版本（建議 v14+）
- 刪除 `node_modules` 和 `package-lock.json`，重新執行 `npm install`
- 檢查埠號衝突（預設 Vite 使用 5173 埠）

**API 伺服器無法啟動**：
- 確認 Node.js 版本最低符合（node >=10）
- 檢查埠號是否已被佔用
- 確保所有依賴已透過 `npm install` 安裝

**瀏覽器擴充無法載入**：
- 確認 manifest.json 格式正確
- 查看瀏覽器主控台有無錯誤
- 遵循瀏覽器專屬的擴充安裝說明

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認 GITHUB_TOKEN 環境變數已設置
- 檢查 GitHub Models 存取權限

**Docsify 不提供文件服務**：
- 全球安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄啟動
- 確認存在 `docs/_sidebar.md`

### 開發環境提示

- HTML 專案使用 VS Code Live Server 擴充套件
- 安裝 ESLint 和 Prettier 擴充以維持一致格式
- 使用瀏覽器開發者工具除錯 JavaScript
- Vue 專案安裝 Vue DevTools 瀏覽器擴充

### 效能考量

- 50 多種語言的翻譯檔案數量龐大，完整複製(repo clone)容量大
- 如僅操作內容，建議使用淺層 clone：`git clone --depth 1`
- 進行英文內容工作時，可排除翻譯資料夾搜索
- 第一次操作建置流程可能較慢（npm install、Vite build）

## 安全性考量

### 環境變數

- API 金鑰絕不可提交至資源庫
- 使用 `.env` 檔案（已加入 `.gitignore`）
- 在專案 README 中說明必要環境變數

### Python 專案

- 建議使用虛擬環境：`python -m venv venv`
- 維持依賴套件更新
- GitHub Token 應授予最低必要權限

### GitHub Models 存取

- 需使用個人存取權杖 (PAT)
- 權杖應儲存為環境變數
- 絕不提交權杖或憑證

## 附加說明

### 目標對象

- 完全初學者的網頁開發者
- 學生及自學者
- 使用此課程於教室教學的教師
- 內容設計注重無障礙與循序漸進

### 教育理念

- 採用專案導向學習
- 經常性的知識檢測（測驗）
- 實作編碼練習
- 提供真實世界應用範例
- 強調基礎知識優於框架

### 資源庫維護

- 有活躍的學習者與貢獻者社群
- 定期更新依賴與課程內容
- 維護者監控議題與討論
- 翻譯更新透過 GitHub Actions 自動化

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 更多課程：生成式 AI、資料科學、機器學習、物聯網課程可用

### 操作特定專案

關於各個專案的詳細說明，請參考以下 README 檔：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 含認證的銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充開發
- `6-space-game/README.md` - 基於 Canvas 的遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo 結構

雖非傳統 monorepo，該資源庫包含多個獨立專案：
- 每課程皆獨立封裝
- 專案間不共享相依套件
- 可分別開發而不影響其他專案
- 完整體驗請 clone 全部資源庫提供的課程

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件係使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們盡力確保翻譯的準確性，但請注意自動翻譯可能包含錯誤或不準確之處。原始文件的原文版本應視為權威來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用本翻譯而產生的任何誤解或誤譯負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->