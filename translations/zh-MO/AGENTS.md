# AGENTS.md

## 專案概覽

這是一個用於教導初學者網頁開發基礎的教育課程倉庫。課程是一個由 Microsoft Cloud Advocates 開發的完整12週課程，包含24個涵蓋 JavaScript、CSS 和 HTML 的實作課程。

### 主要組件

- **教育內容**：24個結構化課程，組織成專案模組
- **實作專案**：Terrarium、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用程式、程式碼編輯器與 AI 聊天助理
- **互動測驗**：48個測驗，每個包含3個問題（課前/課後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯超過50種語言
- **技術**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 專案）

### 架構

- 以課程為基礎的教育倉庫結構
- 每課程資料夾包含 README、程式碼範例與解決方案
- 獨立專案於不同目錄中（quiz-app、各種課程專案）
- 使用 GitHub Actions（co-op-translator）之翻譯系統
- 文件透過 Docsify 發佈並可下載 PDF

## 安裝指令

本倉庫主要供教育內容學習使用。針對特定專案操作：

### 主倉庫安裝

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用程式安裝（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # 啟動開發伺服器
npm run build      # 為生產環境建立
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
# 遵循瀏覽器特定擴展載入指示
```

### 太空遊戲專案

```bash
cd 6-space-game/solution
npm install
# 在瀏覽器中打開 index.html 或使用實時伺服器
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

1. **將倉庫 fork 到您的 GitHub 帳戶**
2. **在本地 clone 您的 fork**
3. **建立新的分支**以進行變更
4. 修改課程內容或程式碼範例
5. 在相關專案目錄測試程式碼變更
6. 提交 pull requests，遵循貢獻指南

### 學習者

1. fork 或 clone 倉庫
2. 按順序瀏覽課程目錄
3. 閱讀每課的 README 文件
4. 在 https://ff-quizzes.netlify.app/web/ 完成課前測驗
5. 練習課程資料夾中的程式碼範例
6. 完成作業與挑戰
7. 參加課後測驗

### 實時開發

- **文件**：在根目錄執行 `docsify serve`（預設連接埠3000）
- **測驗應用程式**：在 quiz-app 目錄執行 `npm run dev`
- **專案**：使用 VS Code Live Server 延伸功能打開 HTML 專案
- **API 專案**：在相應 API 目錄執行 `npm start`

## 測試說明

### 測驗應用程式測試

```bash
cd quiz-app
npm run lint       # 檢查代碼風格問題
npm run build      # 驗證構建是否成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查代碼風格問題
node server.js     # 驗證伺服器啟動時無錯誤
```

### 一般測試方法

- 這是教育性倉庫，無全面自動測試
- 主要手動測試項目：
  - 程式碼範例可正常執行無誤
  - 文件中的連結均正確運作
  - 專案可成功編譯
  - 範例符合最佳實踐

### 提交前檢查

- 在有 package.json 的目錄執行 `npm run lint`
- 驗證 markdown 連結有效
- 在瀏覽器或 Node.js 測試程式碼範例
- 確認翻譯結構維持一致

## 程式碼風格指引

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案中標準 ESLint 配置
- 使用有意義的變數與函式名稱，便於教學
- 添加註解說明概念
- 使用 Prettier 格式化（有配置的地方）

### HTML/CSS

- 使用語意化 HTML5 元素
- 採用響應式設計原則
- 清晰的類別命名規範
- 以註解解釋 CSS 技巧給學習者

### Python

- 遵循 PEP 8 風格指南
- 清晰且具教育意義的程式碼範例
- 有助學習的型別註記

### Markdown 文件

- 清晰標題層級
- 帶語言標示的程式碼區塊
- 連結至額外資源
- 在 `images/` 目錄中附有截圖與圖片
- 圖片附帶替代文字以利輔助使用

### 檔案組織

- 課程依序編號（1-getting-started-lessons、2-js-basics 等）
- 每專案含有 `solution/`，常有 `start/` 或 `your-work/` 目錄
- 圖片存放於各課程專用 `images/` 資料夾
- 翻譯文件於 `translations/{language-code}/` 結構

## 建置與部署

### 測驗應用程式部署（Azure Static Web Apps）

quiz-app 配置為 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在 push 到 main 時透過 GitHub Actions 工作流程部署
```

Azure Static Web Apps 配置：
- **應用程式路徑**：`/quiz-app`
- **輸出路徑**：`dist`
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

### 專案專屬建置

各專案目錄可能有其建置程序：
- Vue 專案：執行 `npm run build` 建置生產版本
- 靜態專案：無建置步驟，直接提供檔案

## Pull Request 指引

### 標題格式

使用清楚、描述變更範圍的標題：
- `[Quiz-app] 新增第X課測驗`
- `[Lesson-3] 修正 terrarium 專案錯字`
- `[Translation] 新增第5課西班牙語翻譯`
- `[Docs] 更新安裝說明`

### 必須檢查項目

提交 PR 前：

1. **程式碼品質**：
   - 在影響專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤與警告

2. **建置驗證**：
   - 如適用，執行 `npm run build`
   - 確認無建置錯誤

3. **連結檢查**：
   - 測試所有 markdown 連結
   - 確認圖片參考可用

4. **內容審查**：
   - 校對拼字與文法
   - 確保程式碼範例正確且具有教學意義
   - 確認翻譯維持原意

### 貢獻要求

- 同意 Microsoft CLA（第一次 PR 會自動檢查）
- 遵守 [Microsoft 開源行為準則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- PR 描述中附相關 issue 編號（如適用）

### 審查程序

- PR 由維護者與社群審核
- 優先考量教育清晰度
- 程式碼範例須符合現行最佳實踐
- 翻譯需審核準確性與文化貼切度

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 的 co-op-translator 工作流程
- 支援自動翻譯50多種語言
- 原始檔案位於主目錄
- 翻譯檔案位於 `translations/{language-code}/` 目錄

### 手動翻譯改進

1. 定位於 `translations/{language-code}/` 內的檔案
2. 在保留結構前提下進行改進
3. 確保程式碼範例仍舊可用
4. 測試在地化的測驗內容

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

## 除錯與疑難排解

### 常見問題

**測驗應用程式無法啟動**：
- 檢查 Node.js 版本（建議 v14+）
- 刪除 `node_modules` 與 `package-lock.json` ，重新執行 `npm install`
- 注意連接埠衝突（預設 Vite 使用 5173 埠）

**API 伺服器無法啟動**：
- 檢視 Node.js 版本是否符合最低需求（node >=10）
- 確認連接埠是否已被佔用
- 確保使用 `npm install` 安裝所有依賴

**瀏覽器擴充功能無法載入**：
- 確認 manifest.json 格式正確
- 檢查瀏覽器控制台是否有錯誤
- 按照瀏覽器擴充功能安裝指引操作

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 封裝：`pip install openai`
- 設定 GITHUB_TOKEN 環境變數
- 檢查 GitHub 模型存取權限

**Docsify 無法提供文件**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 在倉庫根目錄執行
- 確認 `docs/_sidebar.md` 存在

### 開發環境建議

- 使用帶有 Live Server 延伸功能的 VS Code 開發 HTML 專案
- 安裝 ESLint 與 Prettier 扩展以保持格式一致
- 使用瀏覽器開發者工具偵錯 JavaScript
- Vue 專案安裝 Vue DevTools 瀏覽器擴展

### 性能考量

- 多達50+語言的翻譯檔案，完整 clone 容量較大
- 若只操作內容，建議用淺 clone：`git clone --depth 1`
- 英文內容工作時可排除翻譯檔案搜尋
- 第一次執行建置程序較慢（npm install，Vite 建置）

## 安全考量

### 環境變數

- API 金鑰絕不可提交入版本庫
- 使用 `.env` 檔案（已加入 `.gitignore`）
- 在專案 README 中文件化必要環境變數

### Python 專案

- 使用虛擬環境：`python -m venv venv`
- 依賴庫保持更新
- GitHub 令牌授權應最小化

### GitHub 模型存取

- 需個人存取令牌 (PAT)
- 將令牌存為環境變數
- 切勿提交令牌或敏感資料

## 額外說明

### 目標受眾

- 網頁開發完全初學者
- 學生與自學者
- 教師用於課堂教學
- 內容設計注重無障礙與逐步累積技能

### 教育理念

- 專案導向學習方式
- 頻繁的知識檢測（測驗）
- 動手編碼練習
- 真實世界應用範例
- 重點在基礎而非框架

### 倉庫維護

- 活躍的學習者與貢獻者社群
- 定期更新依賴及內容
- 由維護者監控 issues 與討論
- 使用 GitHub Actions 自動更新翻譯

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程

### 使用特定專案說明

詳細操作請參考 README 檔：
- `quiz-app/README.md` - Vue 3 測驗應用程式
- `7-bank-project/README.md` - 含身份驗證的銀行應用程式
- `5-browser-extension/README.md` - 瀏覽器擴充開發
- `6-space-game/README.md` - Canvas 遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo 結構

雖非傳統 Monorepo，但本倉庫包含多獨立專案：
- 每課程獨立封裝
- 專案無相依共享
- 可獨立作業不影響其他專案
- 若需整套課程，請完整 clone 倉庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們力求準確，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的原文版本應被視為權威來源。對於重要資訊，建議使用專業人工翻譯。我們不對因使用本翻譯而引起的任何誤解或誤譯負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->