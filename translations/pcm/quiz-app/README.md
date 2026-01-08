<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2026-01-08T11:15:28+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "pcm"
}
-->
# Quiz app

These quizzes na di pre- and post-lecture quizzes for di data science curriculum for https://aka.ms/webdev-beginners

## Adding a translated quiz set

Add quiz translation by creating matching quiz structures for di `assets/translations` folders. Di canonical quizzes dey for `assets/translations/en`. Di quizzes don break into different groupings. Make sure say di numbering align with di correct quiz section. Dis curriculum get 40 quizzes total, and di count dey start for 0.

  
<details>
<summary>Here's the shape of a translation file:</summary>

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

After you don edit di translations, edit di index.js file wey dey di translation folder to import all di files wey follow di conventions for `en`.

Edit di `index.js` file wey dey `assets/translations` to import di new translated files.

For example, if your translation JSON dey for `ex.json`, make 'ex' di localization key, then put am as e dey below to import am

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

## Run the Quiz App locally

### Prerequisites

- GitHub account
- [Node.js and Git](https://nodejs.org/)

### Install & Setup

1. Create repository from dis [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clone your new repository, and waka go quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Install di npm packages & dependencies

   ```bash
   npm install
   ```

### Build the app

1. To build di solution, run:

   ```bash
   npm run build
   ```

### Start the App

1. To run di solution, run:

    ```bash
    npm run dev
    ```

### [Optional] Linting

1. To make sure say di code dey linted, run:

    ```bash
    npm run lint
    ```

## Deploy the Quiz-app to Azure 

### Prerequisites
- Azure Subscription. Sign up for one free [here](https://aka.ms/azure-free).

    _Cost Estimate to deploy dis quiz-app: FREE_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Once you don sign in for Azure through di link above, select subscription and resource group then:

- Static Web App details: Put name and select hosting plan
- GitHub Login: Set your deployment source as GitHub then log in and fill di required fields for di form:
    - *Organization* – Choose your organization.
    - *Repository* – Select di Web Dev for Beginners curriculum repository. 
    - *Branch* - Select branch (main) 
- Build Presets: Azure Static Web Apps dey use detection algorithm to detect di framework wey your app use. 
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Deployment: Click 'Review + Create', then 'Create'

    Once you deploy am, workflow file go dey created for *.github* directory for your repo. This workflow file get instructions for events wey go trigger re-deployment of di app to Azure, example, _a **push** to branch **main**_ etc.

    <details>
    <summary>Example Workflow File</summary>
    Na example be dis of how GitHub Actions workflow file fit be:
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

- Post-Deployment: After deployment complete, click 'Go to Deployment' then 'View app in browser'.

Once your GitHub Action (workflow) don run successfully, refresh di live page to see your application.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document na so AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator) translate am. Even though we try make e accurate, abeg sabi say automated translation fit get some mistake or no too correct. Original document wey dey im own language na di true source wey you suppose trust. For important matter, make person wey sabi do professional human translation do am. We no responsible if you no understand or if you misunderstand anything wey come from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->