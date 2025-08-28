<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-27T23:04:22+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "tl"
}
-->
# Quiz app

Ang mga pagsusulit na ito ay pre- at post-lecture quizzes para sa data science curriculum sa https://aka.ms/webdev-beginners

## Pagdaragdag ng isinaling set ng pagsusulit

Magdagdag ng salin ng pagsusulit sa pamamagitan ng paggawa ng katugmang istruktura ng pagsusulit sa mga folder na `assets/translations`. Ang mga orihinal na pagsusulit ay nasa `assets/translations/en`. Ang mga pagsusulit ay hinati sa ilang grupo. Siguraduhing i-align ang pag-number sa tamang seksyon ng pagsusulit. May kabuuang 40 pagsusulit sa curriculum na ito, na nagsisimula sa 0.

  
<details>
<summary>Narito ang anyo ng isang file ng salin:</summary>

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

Pagkatapos i-edit ang mga salin, i-edit ang index.js file sa translation folder upang i-import ang lahat ng mga file ayon sa mga convention sa `en`.

I-edit ang `index.js` file sa `assets/translations` upang i-import ang mga bagong isinaling file. 

Halimbawa, kung ang iyong JSON na salin ay nasa `ex.json`, gawing 'ex' ang localization key, pagkatapos ay ilagay ito tulad ng ipinapakita sa ibaba upang i-import ito.

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

## Patakbuhin ang Quiz App nang lokal

### Mga Kinakailangan

- Isang GitHub account
- [Node.js at Git](https://nodejs.org/)

### Pag-install at Setup

1. Gumawa ng repository mula sa [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. I-clone ang iyong bagong repository, at mag-navigate sa quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. I-install ang npm packages at dependencies

   ```bash
   npm install
   ```

### I-build ang app

1. Upang i-build ang solusyon, patakbuhin:

   ```bash
   npm run build
   ```

### Simulan ang App

1. Upang patakbuhin ang solusyon, patakbuhin:

    ```bash
    npm run dev
    ```

### [Opsyonal] Linting

1. Upang matiyak na ang code ay na-lint, patakbuhin:

    ```bash
    npm run lint
    ```

## I-deploy ang Quiz-app sa Azure 

### Mga Kinakailangan
- Isang Azure Subscription. Mag-sign up nang libre [dito](https://aka.ms/azure-free).

    _Tinatayang Gastos sa pag-deploy ng quiz-app na ito: LIBRE_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Kapag naka-sign in ka na sa Azure sa pamamagitan ng link sa itaas, pumili ng subscription at resource group pagkatapos:

- Mga Detalye ng Static Web App: Magbigay ng pangalan at pumili ng hosting plan
- GitHub Login: Itakda ang iyong deployment source bilang GitHub pagkatapos mag-log in at punan ang mga kinakailangang field sa form:
    - *Organization* – Piliin ang iyong organisasyon.
    - *Repository* – Piliin ang Web Dev for Beginners curriculum repository. 
    - *Branch* - Piliin ang branch (main) 
- Build Presets: Gumagamit ang Azure Static Web Apps ng detection algorithm upang matukoy ang framework na ginamit sa iyong application. 
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Deployment: I-click ang 'Review + Create', pagkatapos 'Create'

    Kapag na-deploy na, isang workflow file ang malilikha sa *.github* directory ng iyong repo. Ang workflow file na ito ay naglalaman ng mga tagubilin sa mga event na magti-trigger ng re-deployment ng app sa Azure, halimbawa, _isang **push** sa branch **main**_ atbp.

    <details>
    <summary>Halimbawa ng Workflow File</summary>
    Narito ang isang halimbawa kung ano ang maaaring hitsura ng GitHub Actions workflow file:
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

- Post-Deployment: Pagkatapos makumpleto ang deployment, i-click ang 'Go to Deployment' pagkatapos 'View app in browser'.

Kapag matagumpay na na-execute ang iyong GitHub Action (workflow), i-refresh ang live page upang makita ang iyong application.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.