# Quiz app

ಈ ಪ್ರಶ್ನೋತ್ತರಗಳು https://aka.ms/webdev-beginners ನಲ್ಲಿ ಡೇಟಾ ಸೈನ್ಸ್ ಪಠ್ಯಕ್ರಮದ ಮುಂಭಾಗ ಮತ್ತು ನಂತರದ ಪ್ರಶ್ನೋತ್ತರಗಳಾಗಿವೆ

## ಅನುವಾದಿತ ಪ್ರಶ್ನೋತ್ತರ ಸೆಟ್ ಸೇರಿಸುವುದು

`assets/translations` ಫೋಲ್ಡರ್‌ಗಳಲ್ಲಿ ಹೊಂದಾಣಿಕೆ ಪ್ರಶ್ನೋತ್ತರ ರಚನೆಗಳನ್ನು ರಚಿಸುವ ಮೂಲಕ ಪ್ರಶ್ನೆ-ọತ್ತರದ ಅನುವಾದವನ್ನು ಸೇರಿಸಿ. ಮಾನದಂಡ ಪ್ರಶ್ನೋತ್ತರಗಳು `assets/translations/en` ನಲ್ಲಿ ಇವೆ. ಪ್ರಶ್ನೋತ್ತರವನ್ನು ಹಲವು ಗುಂಪುಗಳಾಗಿ ವಿಂಗಡಿಸಲಾಗಿದೆ. ಸಂಖ್ಯೆಯಿಂದ ಸೂಕ್ತ ಪ್ರಶ್ನೋತ್ತರ ವಿಭಾಗಕ್ಕೆ ಹೊಂದಾಣಿಕೆ ಮಾಡಿಕೊಳ್ಳಿ. ಈ ಪಠ್ಯಕ್ರಮದಲ್ಲಿ ಒಟ್ಟು 40 ಪ್ರಶ್ನೋತ್ತರಗಳಿವೆ ಮತ್ತು ಎಣಿಕೆ 0 ರಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.

  
<details>
<summary>ಇದು ಅನುವಾದ ಫೈಲ್‌ನ ಆಕಾರ:</summary>

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

ಅನುವಾದಗಳನ್ನು ತಿದ್ದುಪಡಿ ಮಾಡಿದ ನಂತರ, `en` ನಲ್ಲಿ ನಿಬಂಧನೆಗಳನ್ನು ಅನುಸರಿಸಿ ಎಲ್ಲಾ ಫೈಲ್‌ಗಳನ್ನು ಆಮದು ಮಾಡಲು ಅನುವಾದ ಫೋಲ್ಡರ್‌ನ index.js ಫೈಲ್ ಅನ್ನು ಸಂಪಾದಿಸಿ.

ಹೊಸ ಅನುವಾದಿತ ಫೈಲ್‌ಗಳನ್ನು ಆಮದು ಮಾಡಲು `assets/translations` ನಲ್ಲಿ ಇರುವ `index.js` ಫೈಲ್‌ನ್ನು ಸಂಪಾದಿಸಿ.

ಉದಾಹರಣೆಗೆ, ನಿಮ್ಮ ಅನುವಾದ JSON `ex.json` ನಲ್ಲಿ ಇದ್ದರೆ, 'ex' ಅನ್ನು ಸ್ಥಳೀಯೀಕರಣ ಕೀ ಆಗಿ ಮಾಡಿ, ನಂತರ ಕೆಳಗಿನಂತೆ ಇದನ್ನು ಆಮದು ಮಾಡಲು ನಮೂದಿಸಿ

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

## Quiz App ಅನ್ನು ಸ್ಥಳೀಯವಾಗಿ ಚಾಲನೆ ಮಾಡುವುದು

### ಅಗತ್ಯಗಳು

- GitHub ಖಾತೆ
- [Node.js ಮತ್ತು Git](https://nodejs.org/)

### ಇನ್‌ಸ್ಟಾಲ್ & ಸೆಟ್‌ಅಪ್

1. ಇದರ ಮೂಲಕ ಒಂದು ಸಂಗ್ರಹಣೆಯನ್ನು ರಚಿಸಿ [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. ನಿಮ್ಮ ಹೊಸ ಸಂಗ್ರಹಣೆಯನ್ನು ಕ್ಲೋನ್ ಮಾಡಿ, ಮತ್ತು quiz-app ಗೆ ನವಿಗೇಟ್ ಆಗಿ

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm ಪ್ಯಾಕೇಜ್‌ಗಳು ಮತ್ತು ಅವಲಂಬನೆಗಳನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ

   ```bash
   npm install
   ```

### ಆಪ್ ನಿರ್ಮಿಸಿ

1. ಪರಿಹಾರವನ್ನು ನಿರ್ಮಿಸಲು, ಚಾಲನೆ ಮಾಡಿ:

   ```bash
   npm run build
   ```

### ಆಪ್ ಪ್ರಾರಂಭಿಸಿ

1. ಪರಿಹಾರವನ್ನು ಚಾಲನೆ ಮಾಡಲು, ಚಾಲನೆ ಮಾಡಿ:

    ```bash
    npm run dev
    ```

### [ಐಚ್ಛಿಕ] ಲಿಂಟಿಂಗ್

1. ಕೋಡ್ ಲಿಂಟ್ ಆಗಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಲು, ಚಾಲನೆ ಮಾಡಿ:

    ```bash
    npm run lint
    ```

## Quiz-app ಅನ್ನು Azure ಗೆ ನಿಯೋಜಿಸಿ

### ಅಗತ್ಯಗಳು
- Azure ಸಬ್ಸ್ಕ್ರಿಪ್‌ಶನ್ ಒಂದು. ಉಚಿತವಾಗಿ ಈವರೆಗೆ ಸೈನ್ ಅಪ್ ಮಾಡಿ [ಮೀಡಿಯ](https://aka.ms/azure-free).

    _ಈ quiz-app ಅನ್ನು ನಿಯೋಜಿಸಲು ಖರ್ಚು ಅಂದಾಜು: ಉಚಿತ_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

ನೀವು ಮೇಲಿನ ಲಿಂಕ್ ಮೂಲಕ Azure ನಲ್ಲಿ ಲಾಗಿನ್ ಆದ ಮೇಲೆ, ಒಂದು ಸಬ್ಸ್ಕ್ರಿಪ್‌ಶನ್ ಮತ್ತು ರಿಸೋರ್ಸ್ ಗುಂಪನ್ನು ಆರಿಸಿ ನಂತರ:

- ಸ್ಟಾಟಿಕ್ ವೆಬ್ ಆಪ್ ವಿವರಗಳು: ಒಂದು ಹೆಸರು ಒದಗಿಸಿ ಮತ್ತು ಒಬ್ಬ ಹೋಸ್ಟಿಂಗ್ ಯೋಜನೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ
- GitHub ಲಾಗಿನ್: ನಿಮ್ಮ ನಿಯೋಜನೆ ಮೂಲವನ್ನು GitHub ಆಗಿ ಹೊಂದಿಸಿ ನಂತರ ಲಾಗಿನ್ ಮಾಡಿ ಮತ್ತು ಫಾರ್ಮ್‌ನ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ:
    - *ಸಂಘಟನೆ* – ನಿಮ್ಮ ಸಂಘಟನೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.
    - *ಸಂಗ್ರಹಣೆ* – Web Dev for Beginners ಪಠ್ಯಕ್ರಮ ಸಂಗ್ರಹಣೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.
    - *ಶಾಖೆ* - ಒಂದು ಶಾಖೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ (main)
- ನಿರ್ಮಾಣ ಪೂರ್ವನಿಯೋಜನೆಗಳು: Azure ಸ್ಟಾಟಿಕ್ ವೆಬ್ ಆಪ್ಸ್ ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ಬಳಸಿದ ಫ್ರೇಮ್ವರ್ಕ್ ಪತ್ತೆ ಮಾಡಲು ಪತ್ತೆ ಆಲ್ಗೋರಿದಮ್ ಬಳಸುತ್ತದೆ.
    - *ಆಪ್ ಸ್ಥಳ* - ./quiz-app
    - *Api ಸ್ಥಳ* -
    - *ಔಟ್‌ಪುಟ್ ಸ್ಥಳ* - dist
- ನಿಯೋಜನೆ: 'ಪುನರೀಕ್ಷೆ + ರಚಿಸಿ' ಕ್ಲಿಕ್ ಮಾಡಿ, ನಂತರ 'ರಚಿಸಿ' ಕ್ಲಿಕ್ ಮಾಡಿ

    ನಿಯೋಜನೆಯಾದ ನಂತರ, ನಿಮ್ಮ ಸಂಗ್ರಹಣೆಯ *.github* დირექტರಿಯಲ್ಲಿ ಒಂದು ವರ್ಕ್‌ಫ್ಲೋ ಫೈಲ್ ರಚಿಸಲಾಗುವುದು. ಈ ವರ್ಕ್‌ಫ್ಲೋ ಫೈಲ್ ಅಪ್ಲಿಕೇಶನ್ ಅನ್ನು Azure ಗೆ ಮರು-ನಿಯೋಜಿಸಲು ಇವೆಂಟ್‌ಗಳನ್ನು ಸೂಚಿಸುವ ಸೂಚನೆಗಳನ್ನು ಒಳಗೊಂಡಿದೆ, ಉದಾಹರಣೆಗೆ, _ಒಂದು **push** ಶಾಖೆಯ ಮೇಲೆ **main**_ ಇತ್ಯಾದಿ.

    <details>
    <summary>ಉದಾಹರಣೆಯ ವರ್ಕ್‌ಫ್ಲೋ ಫೈಲ್</summary>
    GitHub Actions ವರ್ಕ್‌ಫ್ಲೋ ಫೈಲ್ ಹೇಗಿರಬಹುದು ಎಂಬುದಕ್ಕೆ ಉದಾಹರಣೆ ಇಲ್ಲಿದೆ:
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

- ನಿಯೋಜನೆಯ ನಂತರ: ನಿಯೋಜನೆ ಪೂರ್ಣಗೊಂಡ ನಂತರ, ‘Go to Deployment’ ಕ್ಲಿಕ್ ಮಾಡಿ ನಂತರ ‘View app in browser’.

ನಿಮ್ಮ GitHub Action (workflow) ಯಶಸ್ವಿಯಾಗಿ ನಡೆಸಲು, ಲೈವ್ ಪುಟವನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಿ ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್ ನೋಡುವುದಕ್ಕೆ.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**ಒಪ್ಪಂದ ವಿನಾಯಿತಿ**:
ಈ ದಾಖಲೆ [Co-op Translator](https://github.com/Azure/co-op-translator) ಎಂಬ AI ಅನುವಾದ ಸೇವೆಯ ಮೂಲಕ ಅನುವಾದಿಸಲಾಗಿದೆ. ನಾವು ಶುದ್ಧತೆಯ ಮೇಲೆ ಪ್ರಯತ್ನಿಸಿದರೂ, ಸ್ವಯಂಚಾಲಿತ ಅನುವಾದಗಳಲ್ಲಿ ತಪ್ಪುಗಳು ಅಥವಾ ಅಶುದ್ಧತೆಗಳು ಇರಬಹುದು ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ಗಮನಿಸಿ. ಮೂಲ ಭಾಷೆಯಲ್ಲಿನ ಮೂಲ ದಾಖಲೆ ಆದೇಶಿಸಬೇಕಾದ ಪ್ರಾಮಾಣಿಕ ಮೂಲವೆಂದು ಪರಿಗಣಿಸಬೇಕು. ಮಹತ್ವಪೂರ್ಣ ಮಾಹಿತಿಗಾಗಿ, ವೃತ್ತಿಪರ ಮಾನವ ಅನುವಾದವನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ. ಈ ಅನುವಾದದ ಬಳಕೆಯಿಂದ ಉಂಟಾಗುವ ಯಾವುದೇ ತಪ್ಪುಗಳ ಅಥವಾ ತಪ್ಪಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಘಟನೆಗಳಿಗಾಗಿ ನಾವು ಹೊಣೆಗಾರರಲ್ಲ.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->