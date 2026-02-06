# AGENTS.md

## 專案概述

這是一個用於教導初學者網頁開發基礎的教育課程儲存庫。課程為一套完整的12週課程，由 Microsoft Cloud Advocates 開發，包含24堂涵蓋 JavaScript、CSS 與 HTML 的實作課程。

### 主要組成部分

- **教育內容**：24堂有結構性的課程，分為以專案為基礎的模組
- **實作專案**：溫室生態箱、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用、程式碼編輯器與 AI 聊天助理
- **互動測驗**：48個測驗，每個有3題（課前/課後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯超過50種語言
- **技術堆疊**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 專案）

### 架構

- 以課程單元為結構的教育儲存庫
- 每堂課資料夾包含 README、程式範例及解答
- 獨立專案放在不同目錄（quiz-app，各種課程專案）
- 使用 GitHub Actions（co-op-translator）執行翻譯系統
- 文件透過 Docsify 提供，並可匯出為 PDF

## 設置指令

此儲存庫主要是用來使用教育內容。若要操作特定專案：

### 主要儲存庫設置

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用設置 (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 啟動開發伺服器
npm run build      # 生產環境構建
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

### 聊天專案 (Python 後端)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 設置 GITHUB_TOKEN 環境變量
python api.py
```

## 開發工作流程

### 內容貢獻者

1. **將儲存庫 fork** 到你的 GitHub 帳號
2. **在本地端 clone 你的 fork**
3. **建立新分支** 進行變更
4. 修改課程內容或程式範例
5. 在相關專案目錄測試程式碼變更
6. 提交 pull request 並遵循貢獻指南

### 學習者流程

1. Fork 或 clone 該儲存庫
2. 按順序前往各課程目錄
3. 閱讀每堂課的 README 檔案
4. 完成 https://ff-quizzes.netlify.app/web/ 的課前測驗
5. 進行課堂程式範例練習
6. 完成作業與挑戰
7. 進行課後測驗

### 即時開發

- **文件服務**：在根目錄執行 `docsify serve` （預設使用埠號 3000）
- **測驗應用**：在 quiz-app 目錄執行 `npm run dev`
- **專案**：HTML 專案使用 VS Code Live Server 擴充功能
- **API 專案**：分別於對應 API 目錄執行 `npm start`

## 測試說明

### 測驗應用測試

```bash
cd quiz-app
npm run lint       # 檢查程式碼風格問題
npm run build      # 驗證建置是否成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查代碼風格問題
node server.js     # 驗證伺服器啟動時無錯誤
```

### 一般測試方法

- 本教育儲存庫無完整自動化測試
- 手動測試重點：
  - 程式範例執行無誤
  - 文件內連結皆可正常使用
  - 專案可成功建置
  - 範例符合最佳實務

### 提交前檢查

- 在有 package.json 的目錄執行 `npm run lint`
- 驗證 markdown 連結有效性
- 在瀏覽器或 Node.js 中測試程式範例
- 確認翻譯檔保持正確結構

## 程式碼風格指南

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案中 ESLint 預設規範
- 變數與函式名稱具教育意義
- 加入註解解釋概念供學習者理解
- 使用 Prettier 進行格式化（若已設定）

### HTML/CSS

- 使用語意化 HTML5 標籤
- 採用響應式設計原則
- 清楚的 class 命名慣例
- CSS 內加入教學性註解

### Python

- 遵循 PEP 8 風格指南
- 提供清晰且具教育意義的程式碼範例
- 在有助於學習的地方加入類型提示

### Markdown 文件

- 清楚的標題層級結構
- 標示語言的程式碼區塊
- 引用額外資源連結
- `images/` 目錄中的截圖與圖片
- 圖片提供替代文字以提升可及性

### 檔案組織

- 課程目錄依序號命名（1-getting-started-lessons，2-js-basics 等）
- 每專案都包含 `solution/` 常見有 `start/` 或 `your-work/`
- 圖片置於每堂課專用的 `images/` 資料夾中
- 翻譯檔案存於 `translations/{language-code}/` 結構

## 建置與部署

### 測驗應用部署（Azure 靜態網站服務）

quiz-app 已設定用於 Azure 靜態網站部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送至 main 時，透過 GitHub Actions 工作流程進行部署
```

Azure 靜態網站服務設定：
- **應用位置**：`/quiz-app`
- **輸出位置**：`dist`
- **工作流程**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文件 PDF 產生

```bash
npm install                    # 安裝 docsify-to-pdf
npm run convert               # 由 docs 產生 PDF
```

### Docsify 文件服務

```bash
npm install -g docsify-cli    # 全域安裝 Docsify
docsify serve                 # 在 localhost:3000 提供服務
```

### 專案個別建置

每個專案目錄可能有自己的建置流程：
- Vue 專案：執行 `npm run build` 產生正式版套件
- 靜態專案：無建置步驟，直接提供檔案

## Pull Request 指引

### 標題格式

使用清楚且描述變更範圍的標題：
- `[Quiz-app] 新增第X課測驗`
- `[Lesson-3] 修正溫室專案錯字`
- `[Translation] 第5課西班牙語翻譯`
- `[Docs] 更新安裝指引`

### 必要檢查

提交 PR 前：

1. **程式碼品質**：
   - 在相關專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤與警告

2. **建置驗證**：
   - 如適用執行 `npm run build`
   - 確保無建置錯誤

3. **連結驗證**：
   - 測試所有 markdown 連結
   - 確認圖片引用正常

4. **內容檢查**：
   - 校對拼字與文法
   - 確保程式範例正確且具教學價值
   - 確認翻譯符合原意

### 貢獻要求

- 同意 Microsoft CLA（首次 PR 時自動檢查）
- 遵守 [Microsoft 開源行為守則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南請見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 若適用，於 PR 說明中引用議題編號

### 審查流程

- 由維護者與社群共同審查 PR
- 優先考量教育的清晰度
- 程式範例遵循目前最佳實務
- 翻譯經過準確性與文化適切性審核

## 翻譯系統

### 自動翻譯

- 透過 GitHub Actions 及 co-op-translator 工作流程運作
- 自動翻譯超過 50 種語言
- 原始檔位於主目錄
- 翻譯檔位於 `translations/{language-code}/` 目錄

### 手動翻譯改進

1. 找到 `translations/{language-code}/` 中的檔案
2. 在保持結構的前提下進行改進
3. 確保程式範例仍可正常運作
4. 測試本地化的測驗內容

### 翻譯檔元資料

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

## 疑難解答與除錯

### 常見問題

**測驗應用無法啟動**：
- 檢查 Node.js 版本（建議 v14+）
- 刪除 `node_modules` 與 `package-lock.json`，重新執行 `npm install`
- 注意埠號衝突（預設 Vite 使用 5173 埠）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低需求（node >=10）
- 檢查埠號是否已被佔用
- 確保所有依賴皆已安裝（執行 `npm install`）

**瀏覽器擴充功能無法載入**：
- 確認 manifest.json 格式正確
- 查看瀏覽器開發者主控台錯誤訊息
- 遵循瀏覽器專用的擴充功能安裝說明

**Python 聊天專案問題**：
- 確認安裝 OpenAI 套件：`pip install openai`
- 環境變數 GITHUB_TOKEN 已設定
- GitHub Models 權限正確

**Docsify 不提供服務**：
- 全局安裝 docsify-cli：`npm install -g docsify-cli`
- 於儲存庫根目錄執行
- 確認 `docs/_sidebar.md` 存在

### 開發環境建議

- 使用 VS Code 搭配 Live Server 擴充功能開發 HTML 專案
- 安裝 ESLint 與 Prettier 擴充功能，保持格式統一
- 使用瀏覽器 DevTools 偵錯 JavaScript
- Vue 專案安裝 Vue DevTools 瀏覽器擴充功能

### 性能考量

- 由於超過 50 種語言翻譯，完整 clone 資料龐大
- 若僅處理內容，可用淺層 clone：`git clone --depth 1`
- 英文內容工作時，排除翻譯資料夾搜尋
- 第一次執行建置流程時較慢（npm install、Vite 建置）

## 安全考量

### 環境變數

- API 金鑰絕不可提交至儲存庫
- 使用 `.env` 檔案（已列入 `.gitignore`）
- 於專案 README 文件中說明所需環境變數

### Python 專案

- 使用虛擬環境：`python -m venv venv`
- 依賴需定期更新
- GitHub 代幣應有最小必要權限

### GitHub Models 存取

- 需使用個人存取代幣（PAT）存取 GitHub Models
- 代幣應儲存為環境變數
- 嚴禁將代幣或憑證提交至儲存庫

## 附註

### 目標受眾

- 完全沒有網頁開發經驗的初學者
- 學生與自學者
- 使用此課程於教室教學的教師
- 內容設計有可及性且著重於循序漸進的技能建立

### 教學理念

- 以專案為基礎的學習法
- 常態性知識檢測（測驗）
- 實作演練
- 具真實世界應用範例
- 先掌握基礎後學習框架

### 儲存庫維護

- 活躍的學習者與貢獻社群
- 定期更新依賴與內容
- 維護者監控問題與討論
- 翻譯更新由 GitHub Actions 自動化

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程皆有提供

### 個別專案操作說明

詳細說明見各專案資料夾的 README：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 帶驗證銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - 基於 Canvas 的遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo 結構

雖非傳統monorepo，本儲存庫包含多個獨立專案：
- 每堂課為自成一格單元
- 專案間不共用依賴
- 專注於個別專案，不會互相影響
- 若需完整課程體驗，請完整 clone 儲存庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件係使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力確保翻譯之準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件以其母語版本為權威來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用本翻譯而引致之任何誤解或誤譯負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->