# AGENTS.md

## 項目概述

這是一個教育課程存儲庫，旨在向初學者教授網頁開發基礎知識。該課程由微軟雲端推廣者開發，為期12週，包含24個實作課程，涵蓋JavaScript、CSS和HTML。

### 主要組件

- <strong>教育內容</strong>：24個結構化課程，分為基於項目的模組
- <strong>實踐項目</strong>：生態瓶、打字遊戲、瀏覽器擴展、太空遊戲、銀行應用、代碼編輯器及AI聊天助理
- <strong>互動測驗</strong>：48個測驗，每個包含3個問題（課前/課後評估）
- <strong>多語言支援</strong>：透過GitHub Actions自動翻譯超過50種語言
- <strong>技術棧</strong>：HTML、CSS、JavaScript、Vue.js 3、Vite、Node.js、Express、Python（用於AI項目）

### 架構

- 教育存儲庫，採用課程為基礎的結構
- 每個課程資料夾包含README、代碼範例和解決方案
- 獨立項目位於不同目錄（quiz-app，各種課程項目）
- 使用GitHub Actions（co-op-translator）進行翻譯系統
- 通過Docsify提供文件服務，並可生成PDF版本

## 設置命令

本存儲庫主要用於教育內容的學習。若需操作特定項目：

### 主存儲庫設置

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### 測驗應用設置（Vue 3 + Vite）

```bash
cd quiz-app
npm install
npm run dev        # 啟動開發伺服器
npm run build      # 為生產環境構建
npm run lint       # 執行 ESLint
```

### 銀行項目API（Node.js + Express）

```bash
cd 7-bank-project/api
npm install
npm start          # 啟動 API 伺服器
npm run lint       # 執行 ESLint
npm run format     # 用 Prettier 格式化
```

### 瀏覽器擴展項目

```bash
cd 5-browser-extension/solution
npm install
# 遵循瀏覽器特定的擴充功能載入指示
```

### 太空遊戲項目

```bash
cd 6-space-game/solution
npm install
# 在瀏覽器中打開 index.html 或使用 Live Server
```

### 聊天項目（Python後端）

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# 設置 GITHUB_TOKEN 環境變數
python api.py
```

## 開發工作流程

### 內容貢獻者

1. <strong>Fork本存儲庫</strong>至您的GitHub帳戶
2. **本地克隆您的 fork**
3. <strong>建立新分支</strong>以進行更改
4. 修改課程內容或代碼範例
5. 在相關項目目錄中測試代碼更改
6. 按貢獻指南提交拉取請求

### 學習者

1. Fork或克隆存儲庫
2. 按順序瀏覽課程目錄
3. 閱讀每課程的README檔案
4. 完成課前測驗，網址：https://ff-quizzes.netlify.app/web/
5. 學習課程中的代碼範例
6. 完成作業和挑戰
7. 參加課後測驗

### 實時開發

- <strong>文件服務</strong>：在根目錄執行 `docsify serve`（端口3000）
- <strong>測驗應用</strong>：在quiz-app目錄執行 `npm run dev`
- <strong>項目</strong>：使用VS Code Live Server擴展提供HTML項目服務
- **API項目**：在對應API目錄運行 `npm start`

## 測試說明

### 測驗應用測試

```bash
cd quiz-app
npm run lint       # 檢查代碼風格問題
npm run build      # 驗證構建是否成功
```

### 銀行API測試

```bash
cd 7-bank-project/api
npm run lint       # 檢查程式碼風格問題
node server.js     # 驗證伺服器無錯誤啟動
```

### 一般測試方法

- 本存儲庫為教育用途，無全面自動化測試
- 手動測試專注於：
  - 代碼範例無錯誤執行
  - 文件中的鏈接正常運作
  - 項目可成功構建
  - 範例遵循最佳實踐

### 提交前檢查

- 在含有package.json的目錄執行 `npm run lint`
- 驗證Markdown鏈接有效性
- 在瀏覽器或Node.js中測試代碼範例
- 確保翻譯結構正確

## 代碼風格指引

### JavaScript

- 使用現代ES6+語法
- 遵循項目中標準ESLint配置
- 使用有意義的變量與函數名稱，便於學習理解
- 添加註釋解釋概念給學習者
- 在配置好的地方使用Prettier格式化

### HTML/CSS

- 使用語義化HTML5元素
- 採用響應式設計原則
- 清晰的類命名規範
- 添加CSS技巧註釋給學習者

### Python

- 遵循PEP 8風格指導
- 清晰且具教育意義的代碼範例
- 在有助於學習處加上類型提示

### Markdown 文檔

- 清晰的標題層級結構
- 帶語言標示的代碼區塊
- 提供附加資源鏈接
- 在 `images/` 目錄中放置截圖與圖片
- 圖片配有替代文字以提升無障礙性

### 文件組織

- 課程依序編號（1-getting-started-lessons，2-js-basics 等）
- 每個項目都有 `solution/` 及通常 `start/` 或 `your-work/` 目錄
- 圖片置於課程專屬的 `images/` 文件夾
- 翻譯按照 `translations/{language-code}/` 結構存放

## 編譯與部署

### 測驗應用部署（Azure 靜態網站）

quiz-app已配置為Azure靜態網站部署：

```bash
cd quiz-app
npm run build      # 建立 dist/ 資料夾
# 在推送至 main 時透過 GitHub Actions 工作流程部署
```

Azure 靜態網站配置：
- <strong>應用位置</strong>：`/quiz-app`
- <strong>輸出位置</strong>：`dist`
- <strong>工作流程</strong>：`.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### 文件PDF生成

```bash
npm install                    # 安裝 docsify-to-pdf
npm run convert               # 從 docs 生成 PDF
```

### Docsify 文件服務

```bash
npm install -g docsify-cli    # 全局安裝 Docsify
docsify serve                 # 在 localhost:3000 提供服務
```

### 項目專屬編譯

每個項目目錄可能有自己編譯流程：
- Vue項目：使用 `npm run build` 生成生產包
- 靜態項目：無編譯步驟，直接提供文件服務

## 拉取請求指引

### 標題格式

使用清晰描述且說明更改範圍的標題：
- `[Quiz-app] 新增第X課測驗`
- `[Lesson-3] 修正生態瓶項目錯字`
- `[Translation] 為第5課新增西班牙語翻譯`
- `[Docs] 更新設置指引`

### 必須檢查

提交PR前：

1. **代碼品質：**
   - 在相關項目目錄執行 `npm run lint`
   - 修復所有lint錯誤與警告

2. **構建驗證：**
   - 如適用執行 `npm run build`
   - 確保無構建錯誤

3. **鏈接核查：**
   - 測試所有Markdown鏈接
   - 確認圖片引用有效

4. **內容審核：**
   - 校對拼字與語法
   - 確保代碼範例正確且有教育意義
   - 驗證翻譯準確且保持原意

### 貢獻要求

- 同意微軟CLA（首次PR時自動檢查）
- 遵守 [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- 詳細指引見 [CONTRIBUTING.md](./CONTRIBUTING.md)
- 在PR描述中引用相關議題編號（如適用）

### 審核流程

- PR由維護者與社群共同審核
- 優先保證教育內容清晰易懂
- 代碼範例應遵循現行最佳實踐
- 翻譯審核精確且文化適切

## 翻譯系統

### 自動翻譯

- 使用GitHub Actions與co-op-translator工作流程
- 自動翻譯超過50種語言
- 源文件位於主目錄
- 翻譯文件存於 `translations/{language-code}/` 目錄

### 添加手動翻譯改進

1. 在 `translations/{language-code}/` 找到文件
2. 保持結構進行改進
3. 確保代碼範例功能正常
4. 測試本地化測驗內容

### 翻譯元資料

翻譯文件包含元資料頭信息：
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

## 偵錯與故障排除

### 常見問題

<strong>測驗應用無法啟動</strong>：
- 檢查Node.js版本（建議v14+）
- 刪除 `node_modules` 與 `package-lock.json`，重新執行 `npm install`
- 檢查端口是否衝突（預設：Vite使用端口5173）

**API伺服器無法啟動**：
- 確認Node.js版本達到最低需求（node >=10）
- 檢查端口是否已被佔用
- 確保全部依賴已安裝，執行 `npm install`

<strong>瀏覽器擴展無法載入</strong>：
- 檢查manifest.json格式正確
- 查看瀏覽器控制台錯誤
- 遵循各瀏覽器擴展安裝說明

**Python聊天項目問題**：
- 確認安裝OpenAI套件：`pip install openai`
- 檢查GITHUB_TOKEN環境變量設定
- 確保GitHub Models存取權限

**Docsify無法提供文件服務**：
- 全局安裝docsify-cli：`npm install -g docsify-cli`
- 從存儲庫根目錄執行
- 確認存在 `docs/_sidebar.md`

### 開發環境建議

- 使用帶Live Server擴展的VS Code瀏覽HTML項目
- 安裝ESLint和Prettier擴展保持格式統一
- 使用瀏覽器開發者工具調試JavaScript
- Vue項目建議安裝Vue DevTools瀏覽器擴展

### 性能考量

- 超過50種語言的翻譯文件數量龐大，完整克隆體積較大
- 若僅需內容，使用淺克隆：`git clone --depth 1`
- 編寫英文內容時排除翻譯目錄搜索
- 初次構建（npm install、Vite build）可能較慢

## 安全考量

### 環境變量

- API密鑰絕不可提交至存儲庫
- 使用 `.env` 文件（已列入 `.gitignore`）
- 在項目README中記錄需要的環境變量

### Python項目

- 使用虛擬環境：`python -m venv venv`
- 保持依賴更新
- GitHub令牌應具最小必要權限

### GitHub Models存取

- 需要個人訪問令牌（PAT）
- 將令牌作為環境變量存儲
- 絕不可提交令牌或憑證

## 附加說明

### 目標受眾

- 初學網頁開發的新人
- 學生和自學者
- 課堂使用此課程的教師
- 內容設計符合無障礙及循序漸進的技能培養

### 教育理念

- 基於項目學習方法
- 透過測驗持續檢驗知識
- 實踐編碼練習
- 範例具真實應用背景
- 先掌握基礎，再學習框架

### 存儲庫維護

- 活躍的學習者與貢獻者社群
- 定期更新依賴與內容
- 維護者監控問題與討論
- 翻譯更新透過GitHub Actions自動化

### 相關資源

- [Microsoft Learn模組](https://docs.microsoft.com/learn/)
- [學生中心資源](https://docs.microsoft.com/learn/student-hub/)
- 推薦學習者使用[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- 額外課程：生成式AI、數據科學、機器學習、物聯網課程

### 專案使用說明

詳細說明請參見個別項目README：
- `quiz-app/README.md` - Vue 3測驗應用
- `7-bank-project/README.md` - 帶身份驗證的銀行應用
- `5-browser-extension/README.md` - 瀏覽器擴展開發
- `6-space-game/README.md` - Canvas遊戲開發
- `9-chat-project/README.md` - AI聊天助理項目

### Monorepo 結構

雖非傳統monorepo，該存儲庫包含多個獨立項目：
- 每節課皆自成一體
- 項目間不共享依賴
- 單獨作業不影響其他項目
- 克隆整個存儲庫可完整體驗課程內容

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件經由 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻譯。雖然我們致力於準確性，但請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應視為權威來源。針對重要資訊，建議採用專業人工翻譯。我們不對因使用此翻譯而導致的任何誤解或誤譯承擔責任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->