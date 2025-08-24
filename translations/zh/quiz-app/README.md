<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-24T00:22:46+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "zh"
}
-->
# 测验应用程序

这些测验是数据科学课程（https://aka.ms/webdev-beginners）中的课前和课后测验。

## 添加翻译后的测验集

通过在 `assets/translations` 文件夹中创建匹配的测验结构来添加测验翻译。原始测验位于 `assets/translations/en` 文件夹中。测验被分为几个部分。请确保编号与正确的测验部分对齐。整个课程共有 40 个测验，编号从 0 开始。

  
<details>
<summary>以下是翻译文件的结构示例：</summary>

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

编辑翻译文件后，修改翻译文件夹中的 `index.js` 文件，按照 `en` 文件夹中的约定导入所有文件。

编辑 `assets/translations` 文件夹中的 `index.js` 文件以导入新的翻译文件。

例如，如果你的翻译 JSON 文件是 `ex.json`，将 'ex' 作为本地化键，然后按照以下方式导入：

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

## 本地运行测验应用程序

### 前置条件

- 一个 GitHub 账户
- [Node.js 和 Git](https://nodejs.org/)

### 安装与设置

1. 从这个 [模板](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 创建一个代码库

1. 克隆你的新代码库，并导航到 quiz-app 文件夹

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. 安装 npm 包和依赖项

   ```bash
   npm install
   ```

### 构建应用程序

1. 要构建解决方案，请运行：

   ```bash
   npm run build
   ```

### 启动应用程序

1. 要运行解决方案，请运行：

    ```bash
    npm run dev
    ```

### [可选] 代码检查

1. 要确保代码通过检查，请运行：

    ```bash
    npm run lint
    ```

## 将测验应用程序部署到 Azure 

### 前置条件
- 一个 Azure 订阅。你可以在 [这里](https://aka.ms/azure-free) 免费注册。

    _部署此测验应用程序的费用估算：免费_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

登录 Azure 后，选择一个订阅和资源组，然后：

- 静态 Web 应用详情：提供一个名称并选择一个托管计划
- GitHub 登录：将部署源设置为 GitHub，然后登录并填写表单中的必填字段：
    - *组织* – 选择你的组织。
    - *代码库* – 选择 Web Dev for Beginners 课程代码库。
    - *分支* - 选择一个分支（main）
- 构建预设：Azure Static Web Apps 使用检测算法来识别应用程序中使用的框架。
    - *应用位置* - ./quiz-app
    - *API 位置* -
    - *输出位置* - dist
- 部署：点击“Review + Create”，然后点击“Create”

    部署完成后，一个工作流文件将被创建在代码库的 *.github* 目录中。这个工作流文件包含触发应用程序重新部署到 Azure 的事件指令，例如，_在分支 **main** 上的 **push**_ 等。

    <details>
    <summary>工作流文件示例</summary>
    以下是 GitHub Actions 工作流文件的示例：
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

- 部署后：部署完成后，点击“Go to Deployment”，然后点击“View app in browser”。

当你的 GitHub Action（工作流）成功执行后，刷新页面即可查看你的应用程序。

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们对因使用此翻译而产生的任何误解或误读不承担责任。