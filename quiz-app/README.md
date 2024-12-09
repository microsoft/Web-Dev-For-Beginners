# Quiz app

These quizzes are the pre- and post-lecture quizzes for the data science curriculum at https://aka.ms/webdev-beginners

## Adding a translated quiz set

Add a quiz translation by creating matching quiz structures in the `assets/translations` folders. The canonical quizzes are in `assets/translations/en`. The quizzes are broken into several groupings. Make sure to align the numbering with the proper quiz section. There are 40 quizzes total in this curriculum, with the count starting at 0.

  
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

After editing the translations, edit the index.js file in the translation folder to import all the files following the conventions in `en`.

Edit the `index.js` file in `assets/translations` to import the new translated files. 

For example, if your translation JSON is in `ex.json`,  make 'ex' the localization key, then enter it as shown below to import it 

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

- A GitHub account
- [Node.js and Git](https://nodejs.org/)

### Install & Setup

1. Create a repository from this [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clone your new repository, and navigate to the quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Install the npm packages & dependencies

   ```bash
   npm install
   ```

### Build the app

1. To build the solution, run:

   ```bash
   npm run build
   ```

### Start the App

1. To run the solution, run:

    ```bash
    npm run dev
    ```

### [Optional] Linting

1. To ensure the code is linted, run:

    ```bash
    npm run lint
    ```

## Deploy the Quiz-app to Azure 

### Prerequisites
- An Azure Subscription. Sign up for one for free [here](https://aka.ms/azure-free).

    _Cost Estimate to deploy this quiz-app: FREE_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Once you are signed in on Azure through the link above, select a subscription and resource group then:

- Static Web App details: Provide a name and select a hosting plan
- GitHub Login: Set your deployment source as GitHub then log in and fill in the required fields on the form:
    - *Organization* – Choose your organization.
    - *Repository* – Select the Web Dev for Beginners curriculum repository. 
    - *Branch* - Select a branch (main) 
- Build Presets: Azure Static Web Apps uses a detection algorithm to detect the framework used in your application. 
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Deployment: Click 'Review + Create', then 'Create'

    Once deployed, a workflow file will be created in the *.github* directory of your repo.  This workflow file contains instructions of events that will trigger a re-deployment of the app to Azure, for example, _a **push** on branch **main**_ etc.

    <details>
    <summary>Example Workflow File</summary>
    Here’s an example of what the GitHub Actions workflow file might look like:
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

- Post-Deployment: After deployment is complete, click on 'Go to Deployment' then 'View app in browser'.

Once your GitHub Action (workflow) is executed successfully, refresh the live page to view your application.
