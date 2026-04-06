# AGENTS.md

## 專案概覽

這是一個用於教學網頁開發基礎的教育課程儲存庫，適合初學者。課程由 Microsoft Cloud Advocates 開發，為期 12 週，包含 24 個實作課程，涵蓋 JavaScript、CSS 與 HTML。

### 主要組成

- <strong>教育內容</strong>：24 個結構化課程，依專案模組組織
- <strong>實作專案</strong>：生態瓶、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用程式、代碼編輯器與 AI 聊天助理
- <strong>互動測驗</strong>：48 個測驗，每項包含 3 個問題（課前/課後評估）
- <strong>多語言支援</strong>：透過 GitHub Actions 自動翻譯至 50+ 種語言
- <strong>技術棧</strong>：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（專案使用 AI）

### 架構

- 教育專案庫，依課程組織結構
- 每堂課資料夾內包含 README、程式碼範例及解答
- 獨立專案存放於獨立目錄（quiz-app 及各課程專案）
- 透過 GitHub Actions（co-op-translator）進行翻譯系統管理
- 文件使用 Docsify 服務，並提供 PDF 版本

## 設置指令

本儲存庫主要用於教育內容瀏覽。針對特定專案開發：

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
npm run build      # 建置生產環境
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
# 請依照瀏覽器特定的擴充功能載入指示進行操作
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

### 內容貢獻者指南

1. **Fork 儲存庫** 至您的 GitHub 帳號
2. **本地 Clone 您的 Fork**
3. <strong>建立新分支</strong> 以進行變更
4. 修改課程內容或程式碼範例
5. 在相關專案資料夾測試程式碼變更
6. 提交 PR，遵循貢獻指導規範

### 學習者指南

1. Fork 或 clone 本儲存庫
2. 按順序瀏覽課程資料夾
3. 閱讀每課 README 文件
4. 完成課前測驗：https://ff-quizzes.netlify.app/web/
5. 操作課程內的程式碼範例
6. 完成作業及挑戰任務
7. 參加課後測驗

### 即時開發

- <strong>文件</strong>：在根目錄執行 `docsify serve`（預設埠 3000）
- <strong>測驗應用</strong>：在 quiz-app 目錄執行 `npm run dev`
- <strong>專案</strong>：使用 VS Code Live Server 外掛運行 HTML 專案
- **API 專案**：在相應 API 目錄執行 `npm start`

## 測試指令

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
node server.js     # 確認伺服器啟動無錯誤
```

### 測試一般方針

- 本教育儲存庫無全面自動化測試
- 手動測試重點：
  - 程式碼範例無錯誤執行
  - 文件中的連結有效
  - 專案能成功建置
  - 範例遵循最佳實踐

### 提交前檢查

- 在含有 package.json 的目錄執行 `npm run lint`
- 驗證 markdown 連結有效性
- 在瀏覽器或 Node.js 測試程式碼範例
- 確認翻譯檔結構正確

## 程式碼風格指南

### JavaScript

- 採用現代 ES6+ 語法
- 遵循專案內的 ESLint 標準設定
- 使用具意義的變數及函數名稱，加強教育清晰度
- 加入說明概念的註解
- 有設定時使用 Prettier 格式化

### HTML/CSS

- 採用語意化 HTML5 元素
- 響應式設計原則
- 明確的 class 命名規範
- 加入說明 CSS 技巧的註解，方便學習者

### Python

- 遵守 PEP 8 風格規範
- 提供清晰且具教育意義的程式碼範例
- 適用時添加型別提示促進學習

### Markdown 文件

- 明確的標題層級
- 程式碼區塊標明語言
- 連結額外資源
- 在 `images/` 資料夾存放截圖與圖片
- 圖片添加替代文字以利無障礙

### 檔案組織

- 課程目錄依序編號 (1-getting-started-lessons, 2-js-basics 等)
- 各專案含 `solution/` 及多為 `start/` 或 `your-work/` 目錄
- 圖片存放於各課程專屬 `images/` 資料夾
- 翻譯存於 `translations/{language-code}/` 架構

## 建置與部署

### 測驗應用部署 (Azure 靜態網站應用)

quiz-app 配置用於 Azure 靜態網站應用部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送到 main 分支時，透過 GitHub Actions 工作流程部署
```

Azure 靜態網站應用設定：
- <strong>應用位置</strong>：`/quiz-app`
- <strong>輸出位置</strong>：`dist`
- <strong>工作流程</strong>：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文件 PDF 產生

```bash
npm install                    # 安裝 docsify-to-pdf
npm run convert               # 從 docs 生成 PDF
```

### Docsify 文件

```bash
npm install -g docsify-cli    # 全局安裝 Docsify
docsify serve                 # 在 localhost:3000 提供服務
```

### 專案專屬建置流程

各專案目錄可能有獨立建置流程：
- Vue 專案：執行 `npm run build` 生成生產包
- 靜態專案：無建置步驟，直接提供檔案

## 拉取請求指導方針

### 標題格式

使用清晰描述性標題，明確變更範圍：
- `[Quiz-app] 新增第 X 課測驗`
- `[Lesson-3] 修正生態瓶專案錯字`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新安裝指示`

### 必須檢查

提交 PR 前：

1. <strong>程式碼品質</strong>：
   - 在改動專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤與警告

2. <strong>建置驗證</strong>：
   - 如適用，執行 `npm run build`
   - 確認無建置錯誤

3. <strong>連結驗證</strong>：
   - 測試所有 markdown 連結
   - 確認圖片引用有效

4. <strong>內容審查</strong>：
   - 校對拼寫與文法
   - 確定程式碼範例正確且教學性佳
   - 確認翻譯保持原意

### 貢獻要求

- 同意 Microsoft CLA（首個 PR 自動檢查）
- 遵守 [Microsoft 開源行為準則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如有，於 PR 描述中參照議題編號

### 審核過程

- PR 由維護者與社群審核
- 優先考慮教育清晰度
- 程式碼範例應遵循當前最佳實踐
- 翻譯需準確且符合文化背景

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 配合 co-op-translator 工作流程
- 自動翻譯超過 50 種語言
- 原始檔位於主目錄
- 翻譯檔存放於 `translations/{language-code}/`

### 手動翻譯改進

1. 定位 `translations/{language-code}/` 中的檔案
2. 在保留結構下進行改進
3. 確保程式碼範例可正確運行
4. 測試任何本地化測驗內容

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
- 刪除 `node_modules` 與 `package-lock.json`，重啟 `npm install`
- 確認埠口無衝突（預設 Vite 埠 :5173）

**API 伺服器無法啟動**：
- 檢查 Node.js 版本（node >=10）
- 確認埠口未被佔用
- 確保已執行 `npm install` 安裝所有相依套件

<strong>瀏覽器擴充無法載入</strong>：
- 檢查 manifest.json 格式是否正確
- 查看瀏覽器控制台錯誤訊息
- 遵循瀏覽器專用擴充安裝說明

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 確認已設定 GITHUB_TOKEN 環境變數
- 檢查 GitHub Models 存取權限

**Docsify 無法提供文件服務**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 於儲存庫根目錄執行
- 確認存在 `docs/_sidebar.md`

### 開發環境提示

- 使用 VS Code 搭配 Live Server 外掛瀏覽 HTML 專案
- 安裝 ESLint 與 Prettier 外掛保持格式一致
- 透過瀏覽器開發者工具調試 JavaScript
- Vue 專案可安裝 Vue DevTools 瀏覽器外掛

### 性能考量

- 翻譯檔案量大（50+ 種語言）導致完整 clone 檔案龐大
- 若只處理內容，可用淺層 clone：`git clone --depth 1`
- 編輯英文內容時，可排除翻譯檔搜索
- 建置流程初次執行較慢（npm install、Vite 建置）

## 安全考量

### 環境變數

- API 金鑰切勿提交至儲存庫
- 使用 `.env` 檔（已列入 `.gitignore`）
- 文件中說明所需環境變數

### Python 專案

- 使用虛擬環境：`python -m venv venv`
- 維持相依性更新
- GitHub 令牌應限制在必須權限

### GitHub Models 存取

- 需個人存取令牌 (PAT)
- 將令牌設為環境變數保存
- 切勿提交令牌或認證資訊

## 補充說明

### 目標對象

- 完全沒有網頁開發經驗者
- 學生及自學者
- 教師於教室中使用此課程
- 內容設計強調無障礙與逐步技能建立

### 教育理念

- 專案導向學習法
- 頻繁的知識檢測（測驗）
- 動手編寫程式練習
- 實務應用範例
- 著重基礎概念，漸進探索框架

### 儲存庫維護

- 積極活躍的學習及貢獻社群
- 定期更新相依套件與內容
- 維護者監控議題與討論
- 翻譯透過 GitHub Actions 自動更新

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生資源中心](https://docs.microsoft.com/learn/student-hub/)
- 推薦使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程

### 個別專案操作

詳細說明請參閱下列 README：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 含驗證的銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充開發
- `6-space-game/README.md` - Canvas 遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo 結構

雖非傳統 monorepo，但包含多個獨立專案：
- 每堂課皆自成一格
- 專案間無相依共享
- 可單獨作業不影響其他專案
- 克隆完整儲存庫以取得完整課程體驗

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件係使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於保持準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應視為權威資料來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用本翻譯所引起之任何誤解或誤釋負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->