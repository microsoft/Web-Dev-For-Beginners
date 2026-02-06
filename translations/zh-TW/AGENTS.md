# AGENTS.md

## 專案概述

這是一個教育課程資源庫，旨在教授初學者網頁開發基礎。該課程是由 Microsoft Cloud Advocates 開發的完整 12 週課程，包含 24 個實作課程，涵蓋 JavaScript、CSS 和 HTML。

### 主要組件

- **教育內容**：24 個結構化課程，組織成專案導向模組
- **實作專案**：Terrarium、打字遊戲、瀏覽器擴充功能、太空遊戲、銀行應用、程式碼編輯器和 AI 聊天助理
- **互動測驗**：48 組測驗，每組包含 3 題（課前/課後評估）
- **多語言支援**：透過 GitHub Actions 自動翻譯 50 多種語言
- **技術使用**：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於 AI 專案）

### 架構

- 以課程為基礎的教育資源庫
- 每個課程資料夾包含 README、程式碼範例及解答
- 独立專案在不同目錄（quiz-app、各種課程專案）
- 使用 GitHub Actions（co-op-translator）進行翻譯系統
- 文件透過 Docsify 提供並可轉為 PDF

## 設定指令

此資源庫主要用於教育內容的學習。若要操作特定專案：

### 主要資源庫設定

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
npm start          # 啟動 API 服務器
npm run lint       # 執行 ESLint
npm run format     # 使用 Prettier 格式化
```

### 瀏覽器擴充功能專案

```bash
cd 5-browser-extension/solution
npm install
# 遵循瀏覽器特定的擴充功能載入說明
```

### 太空遊戲專案

```bash
cd 6-space-game/solution
npm install
# 在瀏覽器中打開 index.html 或使用即時伺服器
```

### 聊天專案 (Python 後端)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 設定 GITHUB_TOKEN 環境變數
python api.py
```

## 開發工作流程

### 給內容貢獻者

1. **Fork 資源庫** 到你的 GitHub 帳號
2. **Clone 你的 fork** 到本地端
3. **建立新分支** 進行修改
4. 對課程內容或程式碼範例做出修改
5. 在相關專案資料夾測試程式碼修改
6. 遵循貢獻指南提交 pull request

### 給學習者

1. Fork 或 clone 資源庫
2. 依序瀏覽課程目錄
3. 閱讀每個課程的 README 檔案
4. 完成 https://ff-quizzes.netlify.app/web/ 的課前測驗
5. 進行課程資料夾中的程式碼範例
6. 完成作業與挑戰
7. 參加課後測驗

### 實時開發環境

- **文件**：於根目錄執行 `docsify serve` (port 3000)
- **測驗 App**：於 quiz-app 目錄執行 `npm run dev`
- **專案**：使用 VS Code Live Server 套件服務 HTML 專案
- **API 專案**：於各 API 目錄執行 `npm start`

## 測試說明

### 測驗應用程式測試

```bash
cd quiz-app
npm run lint       # 檢查程式碼風格問題
npm run build      # 確認建置成功
```

### 銀行 API 測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查程式碼風格問題
node server.js     # 驗證伺服器是否無錯誤啟動
```

### 一般測試方式

- 此為教育資源庫，無全面自動化測試
- 手動測試重點：
  - 程式碼範例無錯誤執行
  - 文件中連結正確
  - 專案成功編譯
  - 範例遵循最佳實務

### 提交前檢查

- 於含 package.json 的目錄執行 `npm run lint`
- 驗證 markdown 連結有效
- 在瀏覽器或 Node.js 中測試程式碼範例
- 確認翻譯保持正確結構

## 程式碼風格指南

### JavaScript

- 使用現代 ES6+ 語法
- 遵循專案內 ESLint 既有設定
- 使用具有意義的變數與函式命名以便教學理解
- 補充註解說明概念給學習者
- 配合 Prettier 格式化（配置時）

### HTML/CSS

- 使用語意化 HTML5 元素
- 響應式設計原則
- 明確的類別命名慣例
- 補充 CSS 技巧註解給學習者

### Python

- 遵守 PEP 8 風格指南
- 清晰且具教學性的程式碼範例
- 依需求加入型別提示輔助學習

### Markdown 文件

- 清楚標題層級
- 指定語言的程式碼區塊
- 連結至附加資源
- 在 `images/` 目錄中放置截圖與圖片
- 為圖片標註替代文字以提升可及性

### 檔案組織

- 課程依序編號（1-getting-started-lessons、2-js-basics 等）
- 每個專案包含 `solution/`，且常見 `start/` 或 `your-work/`
- 圖片儲存在各課程特定的 `images/` 資料夾
- 翻譯置於 `translations/{language-code}/` 結構中

## 建置與部署

### 測驗應用程式部署 (Azure 靜態網站)

quiz-app 已設置為 Azure 靜態網頁應用部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送到 main 時透過 GitHub Actions 工作流程部署
```

Azure 靜態網站配置：
- **應用程式位置**：`/quiz-app`
- **輸出位置**：`dist`
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

各專案目錄可能有專屬建置流程：
- Vue 專案：`npm run build` 建立產線包
- 靜態專案：無建置步驟，直接服務檔案

## Pull Request 指南

### 標題格式

使用清楚描述變更範圍的標題：
- `[Quiz-app] 新增第 X 課測驗`
- `[Lesson-3] 修正 terrarium 專案錯字`
- `[Translation] 新增第 5 課西班牙語翻譯`
- `[Docs] 更新設定指令`

### 必要檢查

提出 PR 前：

1. **程式碼品質**：
   - 在受影響專案目錄執行 `npm run lint`
   - 修正所有 lint 錯誤與警告

2. **建置驗證**：
   - 如適用，執行 `npm run build`
   - 確認無建置失敗

3. **連結驗證**：
   - 測試所有 markdown 連結
   - 確認圖片參考正常

4. **內容審查**：
   - 校對拼字和文法
   - 確保程式碼範例正確且具教學意義
   - 驗證翻譯保持原意

### 貢獻要求

- 同意 Microsoft CLA（首次 PR 會自動檢查）
- 遵守 [Microsoft 開源行為守則](https://opensource.microsoft.com/codeofconduct/)
- 詳細指南見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 如有適用，在 PR 描述中引用議題號碼

### 審查流程

- PR 經維護者及社群審核
- 優先確保教育的清晰度
- 程式碼範例應遵循現行最佳實務
- 翻譯需審核精確與文化適切性

## 翻譯系統

### 自動翻譯

- 利用 GitHub Actions 搭配 co-op-translator 工作流程
- 自動翻譯超過 50 種語言
- 源檔置於主要目錄
- 翻譯檔置於 `translations/{language-code}/` 目錄

### 手動翻譯改進

1. 找到 `translations/{language-code}/` 下對應檔案
2. 保持結構下改進翻譯
3. 確保程式碼範例仍可正常運行
4. 測試本地化測驗內容

### 翻譯檔元數據

翻譯檔含元資料標頭：
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
- 檢查 Node.js 版本（建議 v14 以上）
- 刪除 `node_modules` 和 `package-lock.json` 並重新執行 `npm install`
- 檢查埠號衝突（預設：Vite 使用 port 5173）

**API 伺服器無法啟動**：
- 確認 Node.js 版本符合最低需求（node >=10）
- 確認埠號未被佔用
- 確保已執行 `npm install` 安裝依賴

**瀏覽器擴充功能無法載入**：
- 確認 manifest.json 格式正確
- 查看瀏覽器主控台錯誤
- 遵照瀏覽器專屬的擴充功能安裝指引

**Python 聊天專案問題**：
- 確認安裝 OpenAI 套件：`pip install openai`
- 檢查 GITHUB_TOKEN 環境變數是否設定
- 驗證 GitHub Models 存取權限

**Docsify 無法提供文件**：
- 全域安裝 docsify-cli：`npm install -g docsify-cli`
- 從資源庫根目錄執行
- 確認 `docs/_sidebar.md` 存在

### 開發環境提示

- HTML 專案使用 VS Code Live Server 擴充
- 安裝 ESLint 和 Prettier 擴充以保格式一致
- 利用瀏覽器開發者工具除錯 JavaScript
- Vue 專案建議安裝 Vue DevTools 瀏覽器擴充

### 性能考量

- 大量翻譯檔案（50 多語言）使整體 clone 變大
- 只作內容工作者可用淺層 clone：`git clone --depth 1`
- 工作英語內容時可排除翻譯檔搜尋
- 初次運行建置流程速度可能較慢（npm install、Vite build）

## 安全考量

### 環境變數

- API 金鑰不得提交至資源庫
- 使用 `.env` 檔案（已在 `.gitignore`）
- 專案 README 中紀錄必要環境變數

### Python 專案

- 使用虛擬環境：`python -m venv venv`
- 保持依賴最新版
- GitHub 令牌應授予最小必要權限

### GitHub Models 存取

- 需個人存取令牌 (PAT) 以存取 GitHub Models
- 将令牌存為環境變數
- 禁止提交令牌或憑證

## 附加說明

### 目標對象

- 完全初學者網頁開發者
- 學生與自學者
- 教師用於課堂教學
- 內容設計以無障礙與循序漸進建構技能為主

### 教育理念

- 專案導向學習方式
- 頻繁知識檢測（測驗）
- 動手程式練習
- 實境應用範例
- 強調基礎再介紹框架

### 資源庫維護

- 積極學習者與貢獻者社群
- 定期更新依賴與內容
- 維護者監控議題與討論
- 翻譯由 GitHub Actions 自動更新

### 相關資源

- [Microsoft Learn 模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用 [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 其他課程：生成式 AI、資料科學、機器學習、物聯網課程等

### 使用特定專案說明

個別專案詳細說明請參考以下 README：

- `quiz-app/README.md` - Vue 3 測驗應用程式
- `7-bank-project/README.md` - 含身份驗證的銀行應用程式
- `5-browser-extension/README.md` - 瀏覽器擴充功能開發
- `6-space-game/README.md` - 以 Canvas 製作的遊戲
- `9-chat-project/README.md` - AI 聊天助理專案

### Monorepo 結構

雖非傳統 monorepo，但本資源庫含多個獨立專案：

- 每堂課自成一體
- 專案間無共享依賴
- 可獨立開發專案，不影響其他專案
- 若需完整課程體驗，請克隆整個資源庫

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：
本文件係使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們努力確保翻譯的準確性，但請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應視為權威依據。對於重要資訊，建議尋求專業人工翻譯。我們不對因使用本翻譯而產生的任何誤解或誤譯負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->