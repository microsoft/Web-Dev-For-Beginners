# AGENTS.md

## 項目概覽

這是一個用於教導初學者網頁開發基礎的教育課程庫。該課程為一個由 Microsoft Cloud Advocates 開發的全面12週課程，包含24個涵蓋 JavaScript、CSS 和 HTML 的實作課程。

### 主要組成部分

- <strong>教育內容</strong>：24堂結構化課程，組織成以項目為基礎的模塊
- <strong>實作項目</strong>：植物生態瓶、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用程式、程式碼編輯器及 AI 聊天助理
- <strong>互動測驗</strong>：48個測驗，每個測驗有3題（課前/課後評估）
- <strong>多語言支援</strong>：透過 GitHub Actions 自動翻譯超過50種語言
- <strong>技術棧</strong>：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AI 項目用）

### 架構

- 以課程為基礎結構的教學倉庫
- 各課程資料夾包含 README、程式碼範例及解決方案
- 獨立項目位於不同目錄（quiz-app、各種課程項目）
- 使用 GitHub Actions 的翻譯系統（co-op-translator）
- 文件以 Docsify 提供，亦可下載 PDF

## 設置指令

此倉庫主要用於教育內容的使用。如欲使用特定項目：

### 主要倉庫設置

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用程式設置 (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # 開始開發伺服器
npm run build      # 為生產環境建置
npm run lint       # 執行 ESLint
```

### 銀行項目 API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # 啟動 API 伺服器
npm run lint       # 執行 ESLint
npm run format     # 使用 Prettier 格式化
```

### 瀏覽器擴充功能項目

```bash
cd 5-browser-extension/solution
npm install
# 遵循瀏覽器特定的擴展加載說明
```

### 太空遊戲項目

```bash
cd 6-space-game/solution
npm install
# 於瀏覽器中開啟 index.html 或使用即時伺服器
```

### 聊天項目 (Python 後端)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 設定 GITHUB_TOKEN 環境變數
python api.py
```

## 開發工作流程

### 內容貢獻者指南

1. <strong>Fork 倉庫</strong>到你的 GitHub 帳戶
2. <strong>Clone 你的 Fork</strong>到本地
3. <strong>建立新分支</strong>以進行修改
4. 修改課程內容或程式碼範例
5. 在相關項目目錄中測試程式碼變更
6. 根據貢獻指引提交 Pull Request

### 學習者指南

1. Fork 或 clone 此倉庫
2. 按順序進入課程目錄
3. 閱讀每堂課的 README
4. 完成 https://ff-quizzes.netlify.app/web/ 上的課前測驗
5. 操作課程資料夾中的程式碼範例
6. 完成作業與挑戰
7. 進行課後測驗

### 實時開發

- <strong>文件</strong>：在根目錄運行 `docsify serve` (默認埠 3000)
- <strong>測驗應用</strong>：在 quiz-app 目錄中執行 `npm run dev`
- <strong>項目</strong>：對 HTML 項目使用 VS Code Live Server 擴充
- **API 項目**：在相應 API 目錄中運行 `npm start`

## 測試說明

### 測驗應用測試

```bash
cd quiz-app
npm run lint       # 檢查程式碼風格問題
npm run build      # 驗證建置成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查程式碼風格問題
node server.js     # 確認伺服器無錯誤啟動
```

### 一般測試方法

- 此為教育用倉庫，未配置全面自動測試
- 手動測試聚焦於：
  - 程式碼範例能無錯誤執行
  - 文件中的連結能正常運作
  - 項目能成功構建
  - 範例符合最佳實踐

### 送出前檢查

- 在含 package.json 目錄下執行 `npm run lint`
- 確認 Markdown 連結有效
- 在瀏覽器或 Node.js 測試程式碼範例
- 確認翻譯保持正確結構

## 程式碼風格指南

### JavaScript

- 使用現代 ES6+ 語法
- 遵循項目中提供的標準 ESLint 配置
- 使用有意義的變量及函式名稱以利教育理解
- 添加註解解釋概念供學習者理解
- 在配置了 Prettier 的地方進行格式化

### HTML/CSS

- 使用語義化 HTML5 元素
- 遵循響應式設計原則
- 明確的類別命名規則
- 添加 CSS 技巧註解供學習者參考

### Python

- 遵循 PEP 8 風格指引
- 清晰且具教育意義的程式碼範例
- 適當使用型別提示以協助學習

### Markdown 文件

- 清楚的標題層級
- 含語言標示的程式碼區塊
- 連結至額外資源
- `images/` 目錄中的截圖與圖片
- 圖片備註文字以輔助無障礙

### 檔案組織

- 課程依序編號 (1-getting-started-lessons, 2-js-basics 等)
- 每個項目包含 `solution/`，常有 `start/` 或 `your-work/` 目錄
- 圖片存放於課程專屬的 `images/` 資料夾
- 翻譯存放於 `translations/{language-code}/` 結構

## 建置與部署

### 測驗應用部署 (Azure 靜態網站)

quiz-app 已配置為 Azure 靜態網站部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送到 main 時，透過 GitHub Actions 工作流程進行部署
```

Azure 靜態網站配置：
- <strong>應用程式位置</strong>：`/quiz-app`
- <strong>輸出位置</strong>：`dist`
- <strong>工作流程</strong>：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文件 PDF 生成

```bash
npm install                    # 安裝 docsify-to-pdf
npm run convert               # 從 docs 產生 PDF
```

### Docsify 文件

```bash
npm install -g docsify-cli    # 全局安裝 Docsify
docsify serve                 # 在 localhost:3000 上提供服務
```

### 各項目專用建置

每個項目目錄可能有其專屬建置流程：
- Vue 項目：使用 `npm run build` 建立生產束檔
- 靜態項目：無建置步驟，直接提供檔案服務

## Pull Request 指引

### 標題格式

使用清晰描述修改範圍的標題：
- `[Quiz-app] 新增第X課測驗`
- `[Lesson-3] 修正植物生態瓶項目錯字`
- `[Translation] 新增第5課西班牙語翻譯`
- `[Docs] 更新設定指引`

### 必要檢查

提交 PR 之前：

1. <strong>程式碼品質</strong>：
   - 在影響的項目目錄執行 `npm run lint`
   - 修正所有 lint 錯誤及警告

2. <strong>建置驗證</strong>：
   - 如適用，執行 `npm run build`
   - 確保無建置錯誤

3. <strong>連結驗證</strong>：
   - 測試所有 Markdown 連結
   - 確認圖片引用可用

4. <strong>內容審查</strong>：
   - 拼字及文法校對
   - 確認程式碼範例正確且具教育意義
   - 確認翻譯維持原意

### 貢獻要求

- 同意 Microsoft CLA（首次 PR 自動檢查）
- 遵循 [Microsoft 開源行為守則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如有，於 PR 描述中引用 Issue 號碼

### 審查流程

- PR 由維護者及社群審查
- 優先以教育清晰度為準
- 程式碼範例應遵循當前最佳實踐
- 翻譯需審核準確性與文化適切性

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 和 co-op-translator 工作流
- 自動翻譯超過50種語言
- 原始檔案位於主目錄
- 翻譯檔案位於 `translations/{language-code}/` 目錄

### 手動翻譯改進

1. 尋找 `translations/{language-code}/` 中的檔案
2. 在保留結構的前提下改進翻譯
3. 確保程式碼範例維持可用性
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

## 除錯與疑難排解

### 常見問題

<strong>測驗應用無法啟動</strong>：
- 檢查 Node.js 版本 (建議 v14+)
- 刪除 `node_modules` 與 `package-lock.json`，重新執行 `npm install`
- 檢查埠號衝突（預設：Vite 使用埠 5173）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低要求（node >=10）
- 檢查埠號是否已被使用
- 確認所有相依已使用 `npm install` 安裝完成

<strong>瀏覽器擴充功能無法載入</strong>：
- 確保 manifest.json 格式正確
- 查看瀏覽器主控台錯誤訊息
- 遵循瀏覽器專屬擴充安裝指引

**Python 聊天項目問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認 GITHUB_TOKEN 環境變量已設定
- 檢查 GitHub Models 存取權限

**Docsify 無法提供文件**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從倉庫根目錄執行
- 確認存在 `docs/_sidebar.md`

### 開發環境提示

- 對 HTML 項目使用 VS Code 與 Live Server 擴充功能
- 安裝 ESLint 與 Prettier 擴充以統一格式
- 使用瀏覽器開發者工具偵錯 JavaScript
- Vue 項目安裝 Vue DevTools 瀏覽器擴充

### 性能注意事項

- 大量翻譯檔案（50+語言）導致完整 clone 較大
- 僅需處理內容時，可使用淺層 clone：`git clone --depth 1`
- 編輯英文內容時，建議排除翻譯目錄搜索
- 首次運行建置流程可能較慢（npm install、Vite 建置）

## 安全注意事項

### 環境變量

- API 金鑰嚴禁提交至倉庫
- 使用 `.env` 檔案（已加入 `.gitignore`）
- 必要環境變量於項目 README 中記錄

### Python 項目

- 使用虛擬環境：`python -m venv venv`
- 保持依賴更新
- GitHub 令牌應設定最低必要權限

### GitHub Models 存取

- GitHub Models 需個人訪問令牌（PAT）
- 令牌應存為環境變量
- 絕對不得提交令牌或憑證

## 附加說明

### 目標受眾

- 完全初學者的網頁開發學習者
- 學生與自學者
- 用於課堂教學的教師
- 內容設計符合無障礙並逐步增強技能

### 教學理念

- 以項目導向學習
- 頻繁的知識檢測（測驗）
- 實作編碼練習
- 真實應用案例
- 重視基礎再談框架

### 倉庫維護

- 積極的學習者與貢獻者社群
- 定期更新相依與內容
- 維護者監控 Issues 和討論
- 透過 GitHub Actions 自動更新翻譯

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 額外課程：生成式 AI、資料科學、機器學習、物聯網課程可用

### 特定項目操作指南

個別項目詳細說明見以下 README 檔案：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 具認證功能銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充開發
- `6-space-game/README.md` - Canvas 遊戲開發
- `9-chat-project/README.md` - AI 聊天助理項目

### Monorepo 結構

雖非傳統 monorepo，此倉庫包含多個獨立項目：
- 各課程自成一體
- 項目間不共享依賴
- 可獨立工作不互相影響
- 克隆整個倉庫可獲得完整課程體驗

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：
本文件由 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們力求準確，但請注意自動翻譯可能包含錯誤或不準確之處。原始文件之原文版本應視為權威來源。對於重要資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋概不負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->