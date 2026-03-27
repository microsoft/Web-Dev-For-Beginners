# AGENTS.md

## 專案概述

這是一個針對初學者教授網頁開發基礎的教育課程資源庫。此課程是由 Microsoft Cloud Advocates 所設計的綜合性 12 週課程，包含 24 節實作課程，涵蓋 JavaScript、CSS 與 HTML。

### 主要組成

- **教育內容**：24 節結構化課程，按照專案模組組織
- **實際專案**：Terrarium、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用程式、程式碼編輯器及 AI 聊天助理
- **互動測驗**：48 個測驗，每個包含 3 題（課前/課後評量）
- **多語言支援**：透過 GitHub Actions 自動翻譯超過 50 種語言
- **技術棧**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AI 專案專用）

### 架構

- 教育資源庫，採用以課程為基礎的結構
- 每堂課的資料夾包含 README、程式碼範例與解答
- 獨立專案獨立在不同目錄（如 quiz-app、各課程專案）
- 使用 GitHub Actions (co-op-translator) 的翻譯系統
- 使用 Docsify 提供文件服務，並可匯出 PDF

## 安裝指令

此資源庫主要用於教育內容瀏覽。若需操作特定專案：

### 主要資源庫安裝

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用程式安裝（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # 啟動開發伺服器
npm run build      # 為生產環境進行建置
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
# 設定 GITHUB_TOKEN 環境變數
python api.py
```

## 開發流程

### 內容貢獻者

1. **將資源庫 fork** 至您的 GitHub 帳號
2. **在本機 clone 您的 fork**
3. **建立新分支** 進行修改
4. 對課程內容或程式碼範例進行修改
5. 在相關專案目錄測試程式碼變更
6. 按照貢獻指南提交 pull request

### 學習者

1. Fork 或 clone 此資源庫
2. 依序瀏覽課程目錄
3. 閱讀各課程的 README
4. 完成課前測驗，網址：https://ff-quizzes.netlify.app/web/
5. 練習課程資料夾中的程式碼範例
6. 完成作業與挑戰
7. 進行課後測驗

### 現場開發

- **文件**：於專案根目錄執行 `docsify serve` (監聽 3000 埠)
- **測驗應用程式**：於 quiz-app 目錄執行 `npm run dev`
- **專案**：對 HTML 專案使用 VS Code Live Server 擴充功能
- **API 專案**：於對應 API 目錄執行 `npm start`

## 測試說明

### 測驗應用程式測試

```bash
cd quiz-app
npm run lint       # 檢查程式碼風格問題
npm run build      # 驗證建置是否成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查程式碼風格問題
node server.js     # 確認伺服器啟動時無錯誤
```

### 一般測試方法

- 本資源庫為教育用途，未包含全面自動化測試
- 主要手動測試聚焦於：
  - 程式碼範例正確執行無誤
  - 文件中的連結正常
  - 專案建構成功
  - 範例遵循最佳實務

### 提交前檢查

- 於含 package.json 目錄執行 `npm run lint`
- 確認 markdown 連結有效
- 在瀏覽器或 Node.js 測試程式碼範例
- 確保翻譯保留正確結構

## 程式碼風格指南

### JavaScript

- 採用現代 ES6+ 語法
- 遵循專案中提供的標準 ESLint 設定
- 使用具意義的變數與函式名稱以便教學說明
- 加入註解解釋概念
- 於有配置處使用 Prettier 格式化

### HTML/CSS

- 使用語義化 HTML5 元素
- 採用響應式設計原則
- 清晰的類別命名約定
- 加入註解解釋 CSS 技巧以便學習

### Python

- 遵循 PEP 8 風格指南
- 清楚且具教育意義的程式碼範例
- 在有助於理解的地方加入型別提示

### Markdown 文件

- 清晰的標題階層
- 具語言標示的程式碼區塊
- 附加資源連結
- 包含截圖與位於 `images/` 目錄的圖片
- 圖片具備輔助功能的替代文字

### 檔案組織

- 課程依序編號（如 1-getting-started-lessons、2-js-basics 等）
- 各專案含有 `solution/`，常見有 `start/` 或 `your-work/` 目錄
- 圖片儲存在課程專屬的 `images/` 資料夾
- 翻譯依照 `translations/{language-code}/` 結構儲存

## 建置與部署

### 測驗應用程式部署（Azure 靜態網頁應用）

quiz-app 已配置可用於 Azure 靜態網頁應用部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送至 main 時透過 GitHub Actions 工作流程部署
```

Azure 靜態網頁應用配置：
- **App 位置**：`/quiz-app`
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
docsify serve                 # 在 localhost:3000 上提供服務
```

### 專案特定建置

各專案目錄可能有自己的建置流程：
- Vue 專案：使用 `npm run build` 製作生產用包
- 靜態專案：無建置步驟，直接提供檔案服務

## Pull Request 指南

### 標題格式

使用明確且描述性的標題指出變更範圍：
- `[Quiz-app] 新增第 X 課測驗`
- `[Lesson-3] 修正 terrarium 專案錯字`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新安裝說明`

### 必要檢查

提交 PR 前：

1. **程式碼品質**：
   - 在受影響專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤與警告

2. **建置驗證**：
   - 如適用，執行 `npm run build`
   - 確認無建置錯誤

3. **連結驗證**：
   - 測試所有 markdown 連結
   - 確認圖片引用正常

4. **內容校對**：
   - 文稿拼寫與文法檢查
   - 確認程式碼範例正確且具教育意義
   - 驗證翻譯保有原意

### 貢獻要求

- 同意 Microsoft CLA（首次 PR 進行自動檢查）
- 遵循 [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如適用，於 PR 描述中參考 issue 編號

### 審查流程

- PR 由維護者與社群審查
- 優先考量教育清晰度
- 程式碼範例應遵循最新最佳實踐
- 翻譯檢視準確度與文化適當性

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 且採 co-op-translator 工作流程
- 自動翻譯超過 50 種語言
- 原始檔案在主要目錄
- 翻譯檔案儲存在 `translations/{language-code}/`

### 新增人工翻譯改進

1. 找出 `translations/{language-code}/` 中的檔案
2. 進行改進時維持結構不變
3. 確保程式碼範例能正常運作
4. 測試本地化的測驗內容

### 翻譯元數據

翻譯檔包含如下元資料標頭：
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

## 偵錯與問題排解

### 常見問題

**測驗應用程式無法啟動**：
- 檢查 Node.js 版本（建議最低 v14）
- 刪除 `node_modules` 及 `package-lock.json` 後重新執行 `npm install`
- 檢查埠號衝突（預設 Vite 使用埠 5173）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低要求（node >=10）
- 確認埠號未被占用
- 確保所有依賴已安裝（`npm install`）

**瀏覽器擴充無法載入**：
- 確認 manifest.json 格式正確
- 檢查瀏覽器控制台錯誤訊息
- 遵循瀏覽器特定擴充安裝說明

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認已設定 GITHUB_TOKEN 環境變數
- 檢查 GitHub Models 存取權限

**Docsify 無法提供文件**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄執行
- 確認存在 `docs/_sidebar.md`

### 開發環境建議

- HTML 專案使用 VS Code Live Server 擴充
- 安裝 ESLint 與 Prettier 擴充以維持格式一致
- 使用瀏覽器開發工具偵錯 JavaScript
- Vue 專案可安裝 Vue DevTools 瀏覽器擴充

### 效能考量

- 翻譯檔案眾多（超過 50 種語言），完整 clone 會很大
- 僅需內容時建議使用淺層 clone：`git clone --depth 1`
- 使用中英文內容時，建議排除翻譯檔案搜尋
- 初次執行可能建置緩慢（npm install、Vite 建置）

## 安全考量

### 環境變數

- API 金鑰絕不可被提交至資源庫
- 使用 `.env` 檔案（已於 `.gitignore` 中忽略）
- 專案 README 中記錄必要環境變數

### Python 專案

- 使用虛擬環境：`python -m venv venv`
- 保持依賴更新
- GitHub token 需設置最低必要權限

### GitHub Models 存取

- 需使用個人存取權杖 (PAT)
- 權杖應存放於環境變數
- 絕不可提交權杖或憑證

## 附加說明

### 目標族群

- 網頁開發完全初學者
- 學生與自學者
- 教室中使用本課程的教師
- 內容設計注重無障礙與技能漸進培養

### 教育理念

- 以專案為基礎的學習方式
- 常態性的知識檢測（測驗）
- 實作編碼練習
- 強調實務應用範例
- 先學習基礎原理，再接觸框架

### 資源庫維護

- 學習者與貢獻者活躍社群
- 定期更新依賴與內容
- 維護者監控議題與討論
- 使用 GitHub Actions 自動化翻譯更新

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 附加課程：生成式 AI、資料科學、機器學習、物聯網課程內容

### 個別專案操作

關於各專案詳細說明請參考對應 README：
- `quiz-app/README.md` — Vue 3 測驗應用
- `7-bank-project/README.md` — 銀行應用含認證功能
- `5-browser-extension/README.md` — 瀏覽器擴充功能開發
- `6-space-game/README.md` — Canvas 太空遊戲開發
- `9-chat-project/README.md` — AI 聊天助理專案

### Monorepo 結構

本資源庫非傳統 monorepo，但包含多個獨立專案：
- 每堂課自成一格
- 專案不共用依賴
- 可獨立作業不影響他專案
- 想完整體驗這門課請 clone 整個資源庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們力求準確，但請注意自動翻譯可能包含錯誤或不精確之處。原始文件的母語版本應被視為權威資料來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用本翻譯而產生的任何誤解或誤譯負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->