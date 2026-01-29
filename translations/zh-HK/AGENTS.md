# AGENTS.md

## 項目概述

這是一個教育課程資源庫，用於教授初學者網頁開發的基礎知識。課程是一個由 Microsoft Cloud Advocates 開發的全面 12 週課程，包含 24 節實踐課程，涵蓋 JavaScript、CSS 和 HTML。

### 主要組成部分

- **教育內容**：24 節結構化課程，按項目模塊組織
- **實踐項目**：包括生態瓶、打字遊戲、瀏覽器擴展、太空遊戲、銀行應用、代碼編輯器和 AI 聊天助手
- **互動測驗**：48 個測驗，每個測驗包含 3 個問題（課前/課後評估）
- **多語言支持**：通過 GitHub Actions 自動翻譯超過 50 種語言
- **技術**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 項目）

### 架構

- 以課程為基礎的教育資源庫
- 每個課程文件夾包含 README、代碼示例和解決方案
- 獨立項目存放於單獨目錄（quiz-app、各課程項目）
- 使用 GitHub Actions 的翻譯系統（co-op-translator）
- 文檔通過 Docsify 提供並可生成 PDF

## 設置命令

此資源庫主要用於教育內容的使用。針對特定項目操作：

### 主資源庫設置

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用設置（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### 銀行項目 API（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### 瀏覽器擴展項目

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### 太空遊戲項目

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### 聊天項目（Python 後端）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## 開發工作流程

### 對於內容貢獻者

1. **Fork 資源庫**到你的 GitHub 帳戶
2. **本地克隆你的 Fork**
3. **創建新分支**進行修改
4. 修改課程內容或代碼示例
5. 在相關項目目錄中測試代碼修改
6. 按照貢獻指南提交 Pull Request

### 對於學習者

1. Fork 或克隆資源庫
2. 按順序進入課程目錄
3. 閱讀每節課的 README 文件
4. 完成課前測驗：https://ff-quizzes.netlify.app/web/
5. 在課程文件夾中完成代碼示例
6. 完成作業和挑戰
7. 完成課後測驗

### 實時開發

- **文檔**：在根目錄運行 `docsify serve`（端口 3000）
- **測驗應用**：在 quiz-app 目錄運行 `npm run dev`
- **項目**：使用 VS Code 的 Live Server 擴展運行 HTML 項目
- **API 項目**：在相關 API 目錄運行 `npm start`

## 測試說明

### 測驗應用測試

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### 一般測試方法

- 此資源庫為教育用途，未包含全面的自動化測試
- 手動測試重點：
  - 代碼示例無錯誤運行
  - 文檔中的鏈接正確
  - 項目成功構建
  - 示例遵循最佳實踐

### 提交前檢查

- 在包含 package.json 的目錄運行 `npm run lint`
- 確保 Markdown 鏈接有效
- 在瀏覽器或 Node.js 中測試代碼示例
- 確保翻譯保持正確結構

## 代碼風格指南

### JavaScript

- 使用現代 ES6+ 語法
- 遵循項目提供的標準 ESLint 配置
- 使用有意義的變量和函數名稱以便教育清晰
- 添加注釋解釋概念以幫助學習者
- 在配置的地方使用 Prettier 格式化

### HTML/CSS

- 使用語義化的 HTML5 元素
- 遵循響應式設計原則
- 清晰的類名命名規範
- 添加注釋解釋 CSS 技術以幫助學習者

### Python

- 遵循 PEP 8 風格指南
- 提供清晰的教育代碼示例
- 在有助於學習的地方添加類型提示

### Markdown 文檔

- 清晰的標題層次結構
- 帶語言指定的代碼塊
- 提供額外資源的鏈接
- `images/` 目錄中的截圖和圖片
- 為圖片添加替代文字以提高可訪問性

### 文件組織

- 課程按順序編號（1-getting-started-lessons, 2-js-basics 等）
- 每個項目有 `solution/` 文件夾，通常還有 `start/` 或 `your-work/` 文件夾
- 圖片存放於課程專屬的 `images/` 文件夾
- 翻譯存放於 `translations/{language-code}/` 結構中

## 構建和部署

### 測驗應用部署（Azure Static Web Apps）

測驗應用已配置為 Azure Static Web Apps 部署：

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps 配置：
- **應用位置**：`/quiz-app`
- **輸出位置**：`dist`
- **工作流**：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文檔 PDF 生成

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify 文檔

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### 項目專屬構建

每個項目目錄可能有自己的構建過程：
- Vue 項目：`npm run build` 創建生產包
- 靜態項目：無需構建步驟，直接提供文件

## Pull Request 指南

### 標題格式

使用清晰、描述性的標題指示修改範圍：
- `[Quiz-app] 為課程 X 添加新測驗`
- `[Lesson-3] 修正生態瓶項目中的拼寫錯誤`
- `[Translation] 為課程 5 添加西班牙語翻譯`
- `[Docs] 更新設置說明`

### 必需檢查

提交 PR 前：

1. **代碼質量**：
   - 在受影響的項目目錄運行 `npm run lint`
   - 修復所有 lint 錯誤和警告

2. **構建驗證**：
   - 如果適用，運行 `npm run build`
   - 確保無構建錯誤

3. **鏈接驗證**：
   - 測試所有 Markdown 鏈接
   - 確保圖片引用正常

4. **內容審核**：
   - 校對拼寫和語法
   - 確保代碼示例正確且具有教育性
   - 確保翻譯保持原意

### 貢獻要求

- 同意 Microsoft CLA（首次 PR 時自動檢查）
- 遵循 [Microsoft 開源行為準則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南請參閱 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如果適用，在 PR 描述中引用問題編號

### 審核流程

- PR 由維護者和社區審核
- 優先考慮教育清晰性
- 代碼示例應遵循當前最佳實踐
- 翻譯需審核準確性和文化適用性

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 和 co-op-translator 工作流
- 自動翻譯至 50+ 種語言
- 主目錄中的源文件
- 翻譯文件存放於 `translations/{language-code}/` 目錄

### 添加手動翻譯改進

1. 在 `translations/{language-code}/` 中找到文件
2. 在保持結構的情況下進行改進
3. 確保代碼示例仍然可用
4. 測試任何本地化的測驗內容

### 翻譯元數據

翻譯文件包含元數據頭：
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

## 調試和故障排除

### 常見問題

**測驗應用無法啟動**：
- 檢查 Node.js 版本（建議 v14+）
- 刪除 `node_modules` 和 `package-lock.json`，重新運行 `npm install`
- 檢查端口衝突（默認：Vite 使用端口 5173）

**API 服務器無法啟動**：
- 確保 Node.js 版本符合最低要求（node >=10）
- 檢查端口是否已被佔用
- 確保所有依賴已通過 `npm install` 安裝

**瀏覽器擴展無法加載**：
- 確保 manifest.json 格式正確
- 檢查瀏覽器控制台中的錯誤
- 遵循瀏覽器特定的擴展安裝說明

**Python 聊天項目問題**：
- 確保已安裝 OpenAI 包：`pip install openai`
- 確保設置了 GITHUB_TOKEN 環境變量
- 檢查 GitHub Models 的訪問權限

**Docsify 無法提供文檔**：
- 全局安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄運行
- 確保 `docs/_sidebar.md` 存在

### 開發環境提示

- 對於 HTML 項目，使用 VS Code 和 Live Server 擴展
- 安裝 ESLint 和 Prettier 擴展以保持一致的格式
- 使用瀏覽器開發工具調試 JavaScript
- 對於 Vue 項目，安裝 Vue DevTools 瀏覽器擴展

### 性能考量

- 大量翻譯文件（50+ 種語言）導致完整克隆文件較大
- 如果僅處理內容，使用淺克隆：`git clone --depth 1`
- 在處理英文內容時排除翻譯文件的搜索
- 首次運行構建過程可能較慢（npm install, Vite build）

## 安全考量

### 環境變量

- API 密鑰絕不可提交到資源庫
- 使用 `.env` 文件（已在 `.gitignore` 中）
- 在項目 README 中記錄所需的環境變量

### Python 項目

- 使用虛擬環境：`python -m venv venv`
- 保持依賴更新
- GitHub 令牌應具有最低必要權限

### GitHub Models 訪問

- 需要個人訪問令牌（PAT）用於 GitHub Models
- 令牌應存儲為環境變量
- 絕不可提交令牌或憑據

## 附加說明

### 目標受眾

- 完全初學者的網頁開發
- 學生和自學者
- 在課堂中使用課程的教師
- 內容設計以提高可訪問性和逐步技能提升

### 教育理念

- 基於項目的學習方法
- 頻繁的知識檢查（測驗）
- 實踐編碼練習
- 真實世界應用示例
- 在框架之前專注於基礎知識

### 資源庫維護

- 活躍的學習者和貢獻者社區
- 定期更新依賴和內容
- 維護者監控問題和討論
- 通過 GitHub Actions 自動更新翻譯

### 相關資源

- [Microsoft Learn 模塊](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) 建議學習者使用
- 其他課程：生成式 AI、數據科學、機器學習、物聯網課程可用

### 處理特定項目

有關單個項目的詳細說明，請參閱以下目錄中的 README 文件：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 帶身份驗證的銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴展開發
- `6-space-game/README.md` - 基於 Canvas 的遊戲開發
- `9-chat-project/README.md` - AI 聊天助手項目

### Monorepo 結構

雖然不是傳統的 Monorepo，此資源庫包含多個獨立項目：
- 每節課程是自包含的
- 項目之間不共享依賴
- 可單獨處理項目而不影響其他項目
- 克隆整個資源庫以獲得完整課程體驗

---

**免責聲明**：  
此文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。應以原文文件為權威來源。如涉及關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或誤釋概不負責。