# AGENTS.md

## 專案概覽

這是一個用於教學網頁開發基礎的教育課程資源庫。此課程是一個由 Microsoft Cloud Advocates 開發的全面 12 週課程，包含 24 節涵蓋 JavaScript、CSS 及 HTML 的實作課程。

### 主要組成

- <strong>教育內容</strong>：24 節結構化課程，依專案模組組織
- <strong>實務專案</strong>：生態瓶、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用程式、程式碼編輯器及 AI 聊天助理
- <strong>互動測驗</strong>：48 次測驗，每次 3 題（課前/課後評估）
- <strong>多語言支援</strong>：透過 GitHub Actions 自動翻譯至 50 多種語言
- <strong>技術堆疊</strong>：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（AI 專案用）

### 架構

- 以課程為主的教育資源庫結構
- 每個課程資料夾包含 README、程式碼範例與解答
- 獨立專案置於不同目錄（quiz-app、各課程專案）
- 使用 GitHub Actions（co-op-translator）實現翻譯系統
- 文件透過 Docsify 提供，並可匯出 PDF

## 安裝指令

此資源庫主要供教育內容學習使用。操作特定專案請參考以下指令：

### 主資源庫設定

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用程式設定 (Vue 3 + Vite)

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

### 瀏覽器擴充功能專案

```bash
cd 5-browser-extension/solution
npm install
# 請遵循特定瀏覽器的擴充功能載入說明
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

### 對內容貢獻者

1. **Fork 本資源庫** 到你的 GitHub 帳號
2. **Clone 你的 fork** 至本機端
3. <strong>建立新分支</strong> 用來變更程式碼
4. 修改課程內容或程式範例
5. 在相關專案目錄中測試程式碼變更
6. 依貢獻指南提交 pull requests

### 對學習者

1. Fork 或 clone 資源庫
2. 依序進入各課程目錄
3. 閱讀各課程 README 文件
4. 完成 https://ff-quizzes.netlify.app/web/ 上的課前測驗
5. 實作課程資料夾內的程式碼範例
6. 完成作業與挑戰
7. 進行課後測驗

### 線上開發

- <strong>文件</strong>：於根目錄執行 `docsify serve`（預設埠號 3000）
- <strong>測驗應用程式</strong>：於 quiz-app 目錄執行 `npm run dev`
- <strong>專案</strong>：以 VS Code Live Server 外掛提供 HTML 專案即時伺服
- **API 專案**：於相應 API 目錄執行 `npm start`

## 測試指令

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
node server.js     # 驗證伺服器啟動時無錯誤
```

### 一般測試方式

- 本為教育資源庫，未完善自動化測試
- 手動測試重點：
  - 程式碼範例可正常執行且無錯誤
  - 文件連結正確無誤
  - 專案可成功建置
  - 範例遵循最佳實務

### 提交前檢查

- 在含 package.json 目錄執行 `npm run lint`
- 驗證 markdown 連結有效
- 在瀏覽器或 Node.js 中測試程式碼範例
- 確認翻譯文件結構無誤

## 程式碼風格指南

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案提供的 ESLint 標準設定
- 變數與函式命名具教育意義
- 加註解說明概念方便學習者理解
- 在有設定的地方使用 Prettier 格式化

### HTML/CSS

- 採用語義化 HTML5 元素
- 響應式設計原則
- 清晰的 class 命名規範
- CSS 技巧的註解說明供學習用途

### Python

- 遵循 PEP 8 風格指南
- 清楚、具教學意義的程式範例
- 需要時提供型別提示以利學習

### Markdown 文件

- 清晰的標題階層
- 指定語言的程式碼區塊
- 附加資源超鏈結
- 圖片置於 `images/` 資料夾
- 圖片附有替代文字方便無障礙

### 檔案組織

- 課程以序號編排（1-getting-started-lessons、2-js-basics 等）
- 每個專案含 `solution/`，且常見 `start/` 或 `your-work/` 目錄
- 圖片放置於課程專屬 `images/` 資料夾
- 翻譯文件依 `translations/{language-code}/` 結構管理

## 建置與部署

### 測驗應用程式部署 (Azure 靜態網頁應用)

quiz-app 已設定用於 Azure 靜態網頁應用部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送至 main 時透過 GitHub Actions 工作流程進行部署
```

Azure 靜態網頁應用配置：
- <strong>應用程式位置</strong>：`/quiz-app`
- <strong>輸出位置</strong>：`dist`
- <strong>工作流程</strong>：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

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

### 專案建置

各專案目錄可能有自己的建置流程：
- Vue 專案：執行 `npm run build` 產生正式套件
- 靜態專案：無須建置，直接提供檔案伺服

## Pull Request 指引

### 標題格式

使用清楚的描述標題，表明更動領域：
- `[Quiz-app] 新增第 X 課測驗`
- `[Lesson-3] 修正生態瓶專案錯字`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新安裝指引`

### 必要檢查

提交 PR 前：

1. <strong>程式碼品質</strong>：
   - 在受影響專案目錄執行 `npm run lint`
   - 修正所有 lint 警告與錯誤

2. <strong>建置驗證</strong>：
   - 如需要執行 `npm run build`
   - 確認無建置錯誤

3. <strong>連結驗證</strong>：
   - 測試所有 markdown 連結
   - 確認圖片路徑正確

4. <strong>內容審查</strong>：
   - 校對拼寫與語法
   - 確認程式碼範例正確且具教學性
   - 驗證翻譯保留原意

### 貢獻要求

- 同意 Microsoft CLA（首次 PR 自動檢查）
- 遵守 [Microsoft 開源行為守則](https://opensource.microsoft.com/codeofconduct/)
- 詳細規範見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- PR 描述中註明議題編號（如有）

### 審查流程

- 由維護者與社群進行審查
- 強調教育清晰度
- 程式碼範例遵循最佳實務
- 翻譯審查正確性與文化適切性

## 翻譯系統

### 自動翻譯

- 使用 GitHub Actions 與 co-op-translator 工作流程
- 自動翻譯成 50 多種語言
- 原始文件位於主目錄
- 翻譯文件置於 `translations/{language-code}/` 目錄

### 手動翻譯改進

1. 找出 `translations/{language-code}/` 內對應檔案
2. 在保持結構不變下進行改良
3. 確保程式範例仍能正常執行
4. 測試本地化測驗內容

### 翻譯元資料

翻譯文件內含元資料標頭：
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

<strong>測驗應用程式無法啟動</strong>：
- 檢查 Node.js 版本（建議 v14 以上）
- 刪除 `node_modules` 與 `package-lock.json`，重新執行 `npm install`
- 確認埠號無衝突（Vite 預設使用 5173）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合需求（node >=10）
- 檢查埠號是否已使用
- 確保所有依賴安裝完整（npm install）

<strong>瀏覽器擴充功能載入失敗</strong>：
- 驗證 manifest.json 格式正確
- 查看瀏覽器主控台錯誤訊息
- 遵循瀏覽器擴充功能安裝指引

**Python 聊天專案問題**：
- 確認已安裝 OpenAI 套件：`pip install openai`
- 設定 GITHUB_TOKEN 環境變數
- 確認 GitHub Models 存取權限

**Docsify 無法提供文件**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 於資源庫根目錄執行
- 確認 `docs/_sidebar.md` 存在

### 開發環境小技巧

- 使用 VS Code 及 Live Server 外掛以支援 HTML 專案即時預覽
- 安裝 ESLint 與 Prettier 外掛以保持程式碼風格一致
- 利用瀏覽器開發工具除錯 JavaScript
- Vue 專案則安裝 Vue DevTools 瀏覽器外掛

### 效能考量

- 多達 50 多種語言翻譯檔案，完整 clone 容量大
- 僅作內容開發時可淺層 clone：`git clone --depth 1`
- 英文內容開發時排除翻譯目錄查詢
- 第一次執行建置流程較慢（npm install、Vite build）

## 安全考量

### 環境變數

- API 金鑰嚴禁提交至資源庫
- 使用 `.env` 檔案（已列入 `.gitignore`）
- 各專案 README 中記錄必須環境變數

### Python 專案

- 建議使用虛擬環境：`python -m venv venv`
- 保持依賴套件最新
- GitHub 令牌應設權限最小化

### GitHub Models 存取

- 需使用個人存取代幣 (PAT)
- 令牌存放於環境變數中
- 切勿提交令牌或認證資料

## 其他備註

### 目標對象

- 完全沒有網頁開發經驗者
- 學生及自學者
- 教師在課堂上使用此課程
- 內容設計兼顧無障礙及逐步技能養成

### 教學理念

- 專案導向學習
- 經常性知識檢核（測驗）
- 著重動手寫程式練習
- 應用真實範例
- 先建立基礎，再進入框架應用

### 資源庫維護

- 積極活躍的學習社群與貢獻者
- 定期更新套件與內容
- 維護者持續追蹤議題與討論
- 翻譯更新由 GitHub Actions 自動化

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 建議學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程可用

### 操作特定專案說明

詳細操作說明請參考以下專案 README：
- `quiz-app/README.md` - Vue 3 測驗應用
- `7-bank-project/README.md` - 含身分驗證的銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - Canvas 遊戲開發
- `9-chat-project/README.md` - AI 聊天助理專案

### 單一資源庫結構

本資源庫雖非傳統 monorepo，但包含多個獨立專案：
- 各課程單元彼此獨立
- 專案間不共用依賴
- 可單獨作業不影響他專案
- 完整課程體驗建議 clone 全部資源

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件由 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻譯而成。雖然我們致力於準確性，但請注意自動翻譯可能包含錯誤或不準確之處。原始文件的原文版本應視為權威來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用本翻譯而產生的任何誤解或誤譯負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->