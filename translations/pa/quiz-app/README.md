<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-26T01:12:58+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "pa"
}
-->
# ਕਵਿਜ ਐਪ

ਇਹ ਕਵਿਜ ਡਾਟਾ ਸਾਇੰਸ ਕਰੀਕੁਲਮ ਲਈ ਲੈਕਚਰ ਤੋਂ ਪਹਿਲਾਂ ਅਤੇ ਬਾਅਦ ਦੇ ਕਵਿਜ ਹਨ, ਜੋ https://aka.ms/webdev-beginners 'ਤੇ ਉਪਲਬਧ ਹਨ।

## ਅਨੁਵਾਦਿਤ ਕਵਿਜ ਸੈੱਟ ਸ਼ਾਮਲ ਕਰਨਾ

ਅਨੁਵਾਦਿਤ ਕਵਿਜ ਸ਼ਾਮਲ ਕਰਨ ਲਈ, `assets/translations` ਫੋਲਡਰ ਵਿੱਚ ਮਿਲਦੇ ਜੁਲਦੇ ਕਵਿਜ ਸਟ੍ਰਕਚਰ ਬਣਾਓ। ਮੂਲ ਕਵਿਜ `assets/translations/en` ਵਿੱਚ ਹਨ। ਕਵਿਜ ਕਈ ਸਮੂਹਾਂ ਵਿੱਚ ਵੰਡੇ ਹੋਏ ਹਨ। ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਗਿਣਤੀ ਸਹੀ ਕਵਿਜ ਸੈਕਸ਼ਨ ਨਾਲ ਮਿਲਦੀ ਹੋਵੇ। ਇਸ ਕਰੀਕੁਲਮ ਵਿੱਚ ਕੁੱਲ 40 ਕਵਿਜ ਹਨ, ਜੋ 0 ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੇ ਹਨ।

  
<details>
<summary>ਇੱਥੇ ਅਨੁਵਾਦ ਫਾਈਲ ਦਾ ਫਾਰਮੈਟ ਦਿੱਤਾ ਗਿਆ ਹੈ:</summary>

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

ਅਨੁਵਾਦਾਂ ਨੂੰ ਸੋਧਣ ਤੋਂ ਬਾਅਦ, translation ਫੋਲਡਰ ਵਿੱਚ index.js ਫਾਈਲ ਨੂੰ ਸੋਧੋ ਅਤੇ `en` ਵਿੱਚ ਦਿੱਤੇ ਗਏ ਨਿਯਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰਦੇ ਹੋਏ ਸਾਰੀਆਂ ਫਾਈਲਾਂ ਨੂੰ ਇੰਪੋਰਟ ਕਰੋ।

`assets/translations` ਵਿੱਚ `index.js` ਫਾਈਲ ਨੂੰ ਸੋਧੋ ਅਤੇ ਨਵੇਂ ਅਨੁਵਾਦਿਤ ਫਾਈਲਾਂ ਨੂੰ ਇੰਪੋਰਟ ਕਰੋ।

ਉਦਾਹਰਣ ਲਈ, ਜੇ ਤੁਹਾਡੀ ਅਨੁਵਾਦ JSON ਫਾਈਲ `ex.json` ਵਿੱਚ ਹੈ, ਤਾਂ 'ex' ਨੂੰ ਲੋਕਲਾਈਜ਼ੇਸ਼ਨ ਕੀ ਬਣਾਓ ਅਤੇ ਇਸਨੂੰ ਹੇਠਾਂ ਦਿੱਤੇ ਤਰੀਕੇ ਨਾਲ ਇੰਪੋਰਟ ਕਰੋ:

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

## ਕਵਿਜ ਐਪ ਨੂੰ ਲੋਕਲ ਚਲਾਓ

### ਪੂਰਵ ਸ਼ਰਤਾਂ

- ਇੱਕ GitHub ਖਾਤਾ
- [Node.js ਅਤੇ Git](https://nodejs.org/)

### ਇੰਸਟਾਲ ਅਤੇ ਸੈਟਅੱਪ

1. ਇਸ [ਟੈਂਪਲੇਟ](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) ਤੋਂ ਇੱਕ ਰਿਪੋਜ਼ਟਰੀ ਬਣਾਓ।

1. ਆਪਣੀ ਨਵੀਂ ਰਿਪੋਜ਼ਟਰੀ ਕਲੋਨ ਕਰੋ ਅਤੇ ਕਵਿਜ-ਐਪ ਵਿੱਚ ਜਾਓ:

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm ਪੈਕੇਜ ਅਤੇ ਡਿਪੈਂਡੈਂਸੀਜ਼ ਇੰਸਟਾਲ ਕਰੋ:

   ```bash
   npm install
   ```

### ਐਪ ਬਣਾਓ

1. ਹੱਲ ਬਣਾਉਣ ਲਈ, ਇਹ ਚਲਾਓ:

   ```bash
   npm run build
   ```

### ਐਪ ਸ਼ੁਰੂ ਕਰੋ

1. ਹੱਲ ਚਲਾਉਣ ਲਈ, ਇਹ ਚਲਾਓ:

    ```bash
    npm run dev
    ```

### [ਵਿਕਲਪਿਕ] ਲਿੰਟਿੰਗ

1. ਕੋਡ ਨੂੰ ਲਿੰਟ ਕਰਨ ਲਈ, ਇਹ ਚਲਾਓ:

    ```bash
    npm run lint
    ```

## ਕਵਿਜ ਐਪ ਨੂੰ Azure 'ਤੇ ਡਿਪਲੌਇ ਕਰੋ

### ਪੂਰਵ ਸ਼ਰਤਾਂ
- ਇੱਕ Azure ਸਬਸਕ੍ਰਿਪਸ਼ਨ। ਇੱਕ ਮੁਫ਼ਤ ਖਾਤਾ ਬਣਾਓ [ਇੱਥੇ](https://aka.ms/azure-free)।

    _ਇਸ ਕਵਿਜ ਐਪ ਨੂੰ ਡਿਪਲੌਇ ਕਰਨ ਦੀ ਲਾਗਤ: ਮੁਫ਼ਤ_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

ਉਪਰ ਦਿੱਤੇ ਲਿੰਕ ਰਾਹੀਂ Azure 'ਤੇ ਸਾਈਨ ਇਨ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਇੱਕ ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਅਤੇ ਰਿਸੋਰਸ ਗਰੁੱਪ ਚੁਣੋ, ਫਿਰ:

- ਸਟੈਟਿਕ ਵੈੱਬ ਐਪ ਵੇਰਵੇ: ਇੱਕ ਨਾਮ ਦਿਓ ਅਤੇ ਹੋਸਟਿੰਗ ਪਲਾਨ ਚੁਣੋ।
- GitHub ਲੌਗਇਨ: ਆਪਣਾ ਡਿਪਲੌਇਮੈਂਟ ਸਰੋਤ GitHub ਸੈੱਟ ਕਰੋ, ਫਿਰ ਲੌਗ ਇਨ ਕਰੋ ਅਤੇ ਫਾਰਮ ਵਿੱਚ ਲੋੜੀਂਦੇ ਖੇਤਰ ਭਰੋ:
    - *ਸੰਗਠਨ* – ਆਪਣੀ ਸੰਗਠਨ ਚੁਣੋ।
    - *ਰਿਪੋਜ਼ਟਰੀ* – Web Dev for Beginners ਕਰੀਕੁਲਮ ਰਿਪੋਜ਼ਟਰੀ ਚੁਣੋ।
    - *ਸ਼ਾਖਾ* - ਇੱਕ ਸ਼ਾਖਾ ਚੁਣੋ (ਮੁੱਖ)
- ਬਿਲਡ ਪ੍ਰੀਸੈਟਸ: Azure Static Web Apps ਤੁਹਾਡੇ ਐਪਲੀਕੇਸ਼ਨ ਵਿੱਚ ਵਰਤੀ ਗਈ ਫਰੇਮਵਰਕ ਦੀ ਪਛਾਣ ਕਰਨ ਲਈ ਇੱਕ ਡਿਟੈਕਸ਼ਨ ਐਲਗੋਰਿਦਮ ਵਰਤਦਾ ਹੈ।
    - *ਐਪ ਸਥਾਨ* - ./quiz-app
    - *Api ਸਥਾਨ* -
    - *ਆਉਟਪੁੱਟ ਸਥਾਨ* - dist
- ਡਿਪਲੌਇਮੈਂਟ: 'Review + Create' ਤੇ ਕਲਿੱਕ ਕਰੋ, ਫਿਰ 'Create' ਤੇ ਕਲਿੱਕ ਕਰੋ।

    ਜਦੋਂ ਡਿਪਲੌਇਮੈਂਟ ਪੂਰਾ ਹੋ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਇੱਕ ਵਰਕਫਲੋ ਫਾਈਲ ਤੁਹਾਡੀ ਰਿਪੋਜ਼ਟਰੀ ਦੇ *.github* ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਬਣਾਈ ਜਾਵੇਗੀ। ਇਹ ਵਰਕਫਲੋ ਫਾਈਲ ਉਹ ਹਦਾਇਤਾਂ ਰੱਖਦੀ ਹੈ ਜੋ ਐਪ ਨੂੰ Azure 'ਤੇ ਮੁੜ ਡਿਪਲੌਇ ਕਰਨ ਵਾਲੇ ਇਵੈਂਟਸ ਨੂੰ ਟ੍ਰਿਗਰ ਕਰਦੀ ਹੈ, ਉਦਾਹਰਣ ਲਈ, _ਸ਼ਾਖਾ **ਮੁੱਖ** 'ਤੇ **ਪੁਸ਼**_ ਆਦਿ।

    <details>
    <summary>ਵਰਕਫਲੋ ਫਾਈਲ ਦਾ ਉਦਾਹਰਣ</summary>
    ਇੱਥੇ GitHub Actions ਵਰਕਫਲੋ ਫਾਈਲ ਦਾ ਉਦਾਹਰਣ ਦਿੱਤਾ ਗਿਆ ਹੈ:
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

- ਡਿਪਲੌਇਮੈਂਟ ਤੋਂ ਬਾਅਦ: ਡਿਪਲੌਇਮੈਂਟ ਪੂਰਾ ਹੋਣ ਤੋਂ ਬਾਅਦ, 'Go to Deployment' ਤੇ ਕਲਿੱਕ ਕਰੋ, ਫਿਰ 'View app in browser' ਤੇ ਕਲਿੱਕ ਕਰੋ।

ਜਦੋਂ ਤੁਹਾਡਾ GitHub Action (ਵਰਕਫਲੋ) ਸਫਲਤਾਪੂਰਵਕ ਚਲਦਾ ਹੈ, ਤਾਂ ਲਾਈਵ ਪੇਜ ਨੂੰ ਰੀਫ੍ਰੈਸ਼ ਕਰੋ ਅਤੇ ਆਪਣੀ ਐਪਲੀਕੇਸ਼ਨ ਵੇਖੋ।

**ਅਸਵੀਕਾਰਨਾ**:  
ਇਹ ਦਸਤਾਵੇਜ਼ AI ਅਨੁਵਾਦ ਸੇਵਾ [Co-op Translator](https://github.com/Azure/co-op-translator) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦ ਕੀਤਾ ਗਿਆ ਹੈ। ਜਦੋਂ ਕਿ ਅਸੀਂ ਸਹੀ ਹੋਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ ਕਿ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਜਾਂ ਅਸੁੱਤੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਮੂਲ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਇਸਦੀ ਮੂਲ ਭਾਸ਼ਾ ਵਿੱਚ ਅਧਿਕਾਰਤ ਸਰੋਤ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਲਈ, ਪੇਸ਼ੇਵਰ ਮਨੁੱਖੀ ਅਨੁਵਾਦ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਇਸ ਅਨੁਵਾਦ ਦੀ ਵਰਤੋਂ ਤੋਂ ਪੈਦਾ ਹੋਣ ਵਾਲੇ ਕਿਸੇ ਵੀ ਗਲਤਫਹਿਮੀ ਜਾਂ ਗਲਤ ਵਿਆਖਿਆ ਲਈ ਅਸੀਂ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।