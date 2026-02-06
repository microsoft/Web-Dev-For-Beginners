# AGENTS.md

## 專案概述

這是一個用於教導初學者網頁開發基礎的教育課程資源庫。課程為為期12週的完整課程，由微軟雲端倡導者開發，包含24堂實作課程，涵蓋 JavaScript、CSS 與 HTML。

### 主要組成部分

- **教育內容**：24堂結構化課程，依專案模組編排
- **實作專案**：溫室、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用、程式碼編輯器與 AI 聊天助手
- **互動測驗**：48組測驗，每組3題（課前／課後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯成超過50種語言
- **技術使用**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AI 專案）

### 架構

- 以課程為架構的教育資源庫
- 每堂課資料夾包含說明文件、程式碼範例與解答
- 獨立專案置於獨立目錄中（quiz-app、各堂專案）
- 使用 GitHub Actions（co-op-translator）進行翻譯系統
- 文件以 Docsify 呈現，並提供 PDF 格式

## 安裝指令

此資源庫主要用作教育內容閱讀。若需使用特定專案：

### 主要資源庫安裝

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用安裝（Vue 3 + Vite）

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
npm run lint       # 執行 ESLint
npm run format     # 使用 Prettier 格式化
```

### 瀏覽器擴充功能專案

```bash
cd 5-browser-extension/solution
npm install
# 遵循瀏覽器專用的擴充功能載入指示
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
# 設定 GITHUB_TOKEN 環境變數
python api.py
```

## 開發工作流程

### 對內容貢獻者

1. **Fork 本資源庫**到您的 GitHub 帳戶
2. **在本機 Clone 您的 Fork**
3. **建立新分支**以便進行修改
4. 修改課程內容或程式碼範例
5. 在相關專案資料夾測試程式碼修改
6. 依照貢獻指南提交 Pull Request

### 對學習者

1. Fork 或 Clone 資源庫
2. 按順序瀏覽各課程資料夾
3. 閱讀每堂課的 README 檔案
4. 完成 https://ff-quizzes.netlify.app/web/ 中課前測驗
5. 實作課程資料夾內的程式碼範例
6. 完成作業與挑戰任務
7. 參加課後測驗

### 實時開發

- **文件服務**：在根目錄執行 `docsify serve`（使用 3000 埠）
- **測驗應用**：於 quiz-app 目錄執行 `npm run dev`
- **專案**：靜態 HTML 項目可使用 VS Code Live Server 外掛
- **API 專案**：分別目錄中執行 `npm start`

## 測試說明

### 測驗應用測試

```bash
cd quiz-app
npm run lint       # 檢查代碼風格問題
npm run build      # 確認編譯成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查代碼風格問題
node server.js     # 驗證伺服器啟動時無錯誤
```

### 一般測試流程

- 此為教育用資源庫，無全面自動化測試
- 手動測試重點有：
  - 程式碼範例無錯誤運行
  - 文件中連結均可正常運作
  - 專案成功 build
  - 範例遵守最佳實務

### 提交前檢查項目

- 在有 package.json 目錄下執行 `npm run lint`
- 驗證 markdown 鏈接有效
- 在瀏覽器或 Node.js 中測試程式碼範例
- 確保翻譯內容維持正確結構

## 程式碼風格指引

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案內提供的標準 ESLint 配置
- 使用具意義變數與函式命名以利教學理解
- 添加注釋以講解概念給學習者
- 透過 Prettier 格式化（若已配置）

### HTML/CSS

- 使用語意化 HTML5 元素
- 採用響應式設計原則
- 清晰的 class 命名規範
- 添加 CSS 技巧說明注釋以利學習者

### Python

- 遵守 PEP 8 標準
- 清楚且具教學意義的程式碼範例
- 在適用處添加型別提示協助學習

### Markdown 文件

- 清晰的標題層級
- 帶語言標識的程式碼區塊
- 附上額外資源連結
- `images/` 資料夾中的截圖與圖片
- 圖片備註文字以改善無障礙

### 檔案組織

- 課程依序編號（1-getting-started-lessons、2-js-basics 等）
- 專案中常有 `solution/` 及 `start/` 或 `your-work/` 目錄
- 圖片存放於對應課程的 `images/` 資料夾
- 翻譯位於 `translations/{language-code}/` 結構

## 建置與部署

### 測驗 App 部署（Azure Static Web Apps）

quiz-app 已配置用於 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送至主分支時透過 GitHub Actions 工作流程部署
```

Azure Static Web Apps 配置：
- **App 位置**：`/quiz-app`
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

每個專案目錄可能有獨立建置流程：
- Vue 專案：`npm run build` 產生生產包
- 靜態專案：無建置步驟，直接提供靜態檔案

## Pull Request 準則

### 標題格式

使用明確、描述性標題說明變更領域：
- `[Quiz-app] 新增第X堂課測驗`
- `[Lesson-3] 修正溫室專案錯字`
- `[Translation] 新增第5課西班牙語翻譯`
- `[Docs] 更新安裝說明`

### 必要檢查

提交 PR 前：

1. **程式碼品質**：
   - 於受影響的專案目錄跑 `npm run lint`
   - 修正所有 lint 錯誤與警告

2. **建置驗證**：
   - 若有，執行 `npm run build`
   - 確認無建置錯誤

3. **連結驗證**：
   - 測試所有 markdown 連結
   - 確認圖片引用正確

4. **內容審核**：
   - 校對拼寫與文法
   - 確保程式碼範例正確且具教學價值
   - 核對翻譯內容忠實原意

### 貢獻要求

- 同意微軟 CLA（首次 PR 會自動檢查）
- 遵守 [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- 詳見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如適用，在 PR 描述中引用 issue 編號

### 審查機制

- PR 將由維護者及社群檢視
- 優先考慮教育清晰度
- 程式碼範例應符合現行最佳實務
- 翻譯檢視準確性與文化適切性

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 與 co-op-translator 工作流程
- 自動翻譯成超過 50 種語言
- 原始檔置於主要目錄
- 翻譯檔在 `translations/{language-code}/` 目錄

### 手動翻譯改良

1. 定位於 `translations/{language-code}/` 中的檔案
2. 在維持結構的條件下進行改善
3. 確保程式碼範例仍可正常運作
4. 測試本地化測驗內容

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

**測驗應用啟動失敗**：
- 檢查 Node.js 版本（建議 v14+）
- 刪除 `node_modules` 與 `package-lock.json`，重新執行 `npm install`
- 檢查埠號衝突（預設：Vite 使用 5173 埠）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低要求（node >=10）
- 確認埠號是否被佔用
- 確保所有相依套件已執行 `npm install`

**瀏覽器擴充無法載入**：
- 確認 manifest.json 格式正確
- 檢查瀏覽器控制台錯誤訊息
- 依照瀏覽器特定的安裝說明操作

**Python 聊天專案問題**：
- 確認 OpenAI 套件安裝：`pip install openai`
- 檢查 GITHUB_TOKEN 環境變數設置
- 確認具備 GitHub Models 存取權限

**Docsify 無法提供文件**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄執行
- 確認存在 `docs/_sidebar.md` 檔案

### 開發環境建議

- HTML 專案使用 VS Code 與 Live Server 擴充套件
- 安裝 ESLint 與 Prettier 擴充以維持格式一致
- 使用瀏覽器 DevTools 除錯 JavaScript
- Vue 專案可安裝 Vue DevTools 瀏覽器擴充

### 效能考量

- 超過 50 種語言翻譯檔數量龐大，完整 clone 容量大
- 只工作於內容時可用淺層 clone：`git clone --depth 1`
- 編輯英文內容時可排除搜尋翻譯檔
- 建置流程首次執行時可能較慢（npm install、Vite build）

## 安全性考量

### 環境變數

- API 金鑰絕不可提交至資源庫
- 使用 `.env` 文件（已包含於 `.gitignore`）
- 在專案 README 中說明必需之環境變數

### Python 專案

- 使用虛擬環境：`python -m venv venv`
- 持續更新相依套件
- GitHub Token 應有最小必要權限

### GitHub Models 存取

- 使用個人存取權杖（PAT）以存取 GitHub Models
- 將 Token 儲存為環境變數
- 切勿提交 Token 或憑證

## 額外說明

### 目標受眾

- 對網頁開發全然新手者
- 學生與自學者
- 使用課程於教室教學的老師
- 內容設計以無障礙與技能循序漸進為主

### 教學理念

- 專案導向學習法
- 頻繁知識檢核（測驗）
- 實作編碼練習
- 真實世界應用範例
- 強調基礎先於框架

### 資源庫維護

- 具活躍學習者與貢獻社群
- 定期更新相依套件與內容
- 維護者監督問題及討論
- 透過 GitHub Actions 自動化翻譯更新

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 予學習者
- 另有生成式 AI、資料科學、機器學習、物聯網等課程可參考

### 使用特定專案說明

詳細指引請參考 README：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 含認證的銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充開發
- `6-space-game/README.md` - Canvas 基礎遊戲
- `9-chat-project/README.md` - AI 聊天助手專案

### Monorepo 結構

此非傳統 monorepo，但包含多個獨立專案：
- 每堂課自主完整
- 各專案無相依共享
- 可專注於單一專案開發
- 若要完整體驗請 clone 整個資源庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：
本文件係使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們努力確保準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件以其原文為最具權威之版本。對於重要資訊，建議聘用專業人工翻譯。我們不對因使用此翻譯而產生的任何誤解或誤譯承擔責任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->