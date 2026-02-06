# 測驗應用程式

這些測驗是資料科學課程的課前和課後測驗，課程網址為：https://aka.ms/webdev-beginners

## 新增翻譯的測驗集

透過在 `assets/translations` 資料夾中建立相應的測驗結構來新增測驗翻譯。原始測驗位於 `assets/translations/en`。測驗分為多個組別。請確保編號與正確的測驗部分對齊。在此課程中共有 40 個測驗，編號從 0 開始。

  
<details>
<summary>以下是翻譯檔案的結構範例：</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

編輯翻譯後，請編輯翻譯資料夾中的 index.js 檔案，按照 `en` 中的慣例匯入所有檔案。

編輯 `assets/translations` 中的 `index.js` 檔案以匯入新的翻譯檔案。

例如，如果您的翻譯 JSON 檔案是 `ex.json`，請將 'ex' 設為本地化鍵，然後按照以下方式匯入：

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## 在本地執行測驗應用程式

### 先決條件

- 一個 GitHub 帳戶
- [Node.js 和 Git](https://nodejs.org/)

### 安裝與設置

1. 從此 [範本](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 建立一個儲存庫

1. 複製您的新儲存庫，並導航至 quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. 安裝 npm 套件與依賴項

   ```bash
   npm install
   ```

### 建置應用程式

1. 要建置解決方案，請執行：

   ```bash
   npm run build
   ```

### 啟動應用程式

1. 要執行解決方案，請執行：

    ```bash
    npm run dev
    ```

### [可選] 程式碼檢查

1. 要確保程式碼已檢查，請執行：

    ```bash
    npm run lint
    ```

## 部署測驗應用程式至 Azure 

### 先決條件
- 一個 Azure 訂閱。您可以在 [此處](https://aka.ms/azure-free) 免費註冊。

    _部署此測驗應用程式的成本估算：免費_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

登入 Azure 後，選擇一個訂閱和資源群組，然後：

- 靜態網頁應用程式詳細資訊：提供名稱並選擇一個主機方案
- GitHub 登入：將您的部署來源設置為 GitHub，然後登入並填寫表單中的必要欄位：
    - *組織* – 選擇您的組織。
    - *儲存庫* – 選擇 Web Dev for Beginners 課程儲存庫。
    - *分支* - 選擇分支（main）
- 建置預設值：Azure 靜態網頁應用程式使用檢測算法來檢測您的應用程式所使用的框架。
    - *應用程式位置* - ./quiz-app
    - *API 位置* -
    - *輸出位置* - dist
- 部署：點擊 'Review + Create'，然後點擊 'Create'

    部署完成後，工作流程檔案將會在您的儲存庫的 *.github* 資料夾中建立。此工作流程檔案包含觸發應用程式重新部署至 Azure 的事件指令，例如，_在 **main** 分支上的 **push**_ 等。

    <details>
    <summary>工作流程檔案範例</summary>
    以下是 GitHub Actions 工作流程檔案的範例：
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- 部署後：部署完成後，點擊 'Go to Deployment'，然後點擊 'View app in browser'。

當您的 GitHub Action（工作流程）成功執行後，刷新線上頁面以查看您的應用程式。

**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。儘管我們努力確保翻譯的準確性，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於關鍵資訊，建議尋求專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋不承擔責任。