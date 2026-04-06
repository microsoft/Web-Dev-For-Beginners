# កម្មវិធី Quiz

កម្រងសំណួរទាំងនេះគឺជាសំណួរមុន និងបន្ទាប់ម៉ោងបង្រៀនសម្រាប់កម្មវិធីបណ្តុះបណ្តាលវិទ្យាសាស្រ្តទិន្នន័យនៅ https://aka.ms/webdev-beginners

## ការបន្ថែមកម្រងសំណួរបកប្រែ

បន្ថែមការបកប្រែសំណួរដោយបង្កើតរចនាសម្ព័ន្ធសំណួរដូចគ្នាក្នុងថត `assets/translations`។ កម្រងសំណួរដើមមាននៅក្នុង `assets/translations/en`។ សំណួរត្រូវបានបំបែកចេញជាក្រុមជាច្រើន។ សូមធានាថាចំនួនសំណួរត្រូវបានតម្រឹមទៅតាមផ្នែកសំណួរដែលត្រឹមត្រូវ។ មានសំណួរជា ៤០ ក្នុងកម្មវិធីបណ្តុះបណ្តាលនេះ ដែលចាប់ផ្តើមរាប់ចំនួនពី 0។

  
<details>
<summary>រាងរូបរាងនៃឯកសារបកប្រែមានរូបរាងដូចខាងក្រោម:</summary>

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

បន្ទាប់មកកែសម្រួលការបកប្រែ បន្ទាប់មកកែសម្រួលឯកសារ index.js ក្នុងថតបកប្រែ ដើម្បីនាំចូលឯកសារទាំងអស់តាមច្បាប់នៅក្នុង `en`។

កែសម្រួលឯកសារ `index.js` ក្នុងថត `assets/translations` ដើម្បីនាំចូលឯកសារបកប្រែថ្មី។

ឧទាហរណ៍ ប្រសិនបើ JSON បកប្រែរបស់អ្នកមានក្នុង `ex.json` សូមធ្វើឲ្យ 'ex' ជាគន្លងសម្រាប់ localization ហើយបញ្ចូលវាតាមដែលបង្ហាញខាងក្រោមដើម្បីនាំចូលវា

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

## ចាប់ផ្តើមរត់កម្មវិធី Quiz App នៅលើកុំព្យូទ័រផ្ទាល់ខ្លួន

### លក្ខខណ្ឌមុន

- គណនី GitHub
- [Node.js និង Git](https://nodejs.org/)

### ដំឡើង និង តំឡើង

1. បង្កើត repository មួយពី [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft)

1. Clone repository ថ្មីរបស់អ្នក ហើយចូលទៅក្នុង quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. ដំឡើង npm packages និង dependencies

   ```bash
   npm install
   ```

### បង្កើតកម្មវិធី

1. ដើម្បីបង្កើតដំណោះស្រាយ ចាប់ផ្តើមរត់៖

   ```bash
   npm run build
   ```

### ចាប់ផ្ដើមកម្មវិធី

1. ដើម្បីរត់ដំណោះស្រាយ ចាប់ផ្តើមរត់៖

    ```bash
    npm run dev
    ```

### [ជាជំរើស] ការត្រួតពិនិត្យបញ្ហា Linting

1. ដើម្បីធានាថា code ត្រូវបាន linted, ចាប់ផ្តើមរត់៖

    ```bash
    npm run lint
    ```

## ប្រើប្រាស់ Quiz-app ដើម្បីដាក់ឡើងជាមួយ Azure

### លក្ខខណ្ឌមុន
- មានសមាជិកភាព Azure ។ ចុះឈ្មោះឥតគិតថ្លៃ [នៅទីនេះ](https://aka.ms/azure-free)។  

    _ការប៉ាន់ប្រមាណថ្លៃដើមដើម្បីដាក់កម្មវិធី quiz-app នេះ: ឥតគិតថ្លៃ_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

បន្ទាប់ពីអ្នកចូលប្រើ Azure តាមតំណភ្ជាប់ខាងលើ សូមជ្រើសរើស subscription និង resource group រួចបន្ត៖

- ពត៌មានអំពី Static Web App: ផ្ដល់ឈ្មោះ និងជ្រើសរើសផែនការតាំងចន្លោះ
- ការចូល GitHub: កំណត់ប្រភព deployment របស់អ្នកជា GitHub បន្ទាប់មកចូលប្រើ ហើយបំពេញវាលដែលត្រូវការនៅលើទម្រង់៖ 
    - *Organization* – ជ្រើសរើសអង្គការរបស់អ្នក។
    - *Repository* – ជ្រើសរើសកម្មវិធី Web Dev for Beginners repository។
    - *Branch* - ជ្រើសរើសសាខា (main)
- Build Presets: Azure Static Web Apps ប្រើអាល់ហ្គរីធម៍យល់ដឹងដើម្បីរកឃើញ framework ដែលបានប្រើនៅក្នុងកម្មវិធីរបស់អ្នក។
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Deployment: ចុច 'Review + Create' បន្ទាប់មក 'Create'

    បន្ទាប់ពីបានដាក់ឡើង workflow file នឹងត្រូវបានបង្កើតនៅក្នុងថត *.github* នៃ repo របស់អ្នក។ ឯកសារ workflow នេះមានលក្ខណៈជាការណែនាំសម្រាប់ព្រឹត្តិការណ៍ដែលនឹងបណ្តាលឲ្យមានការដាក់ឡើងថ្មីម្តងទៀតនៃកម្មវិធីទៅ Azure, ឧទាហរណ៍ _ការជំរុញ (**push**) នៅសាខា **main**_ ជាដើម។

    <details>
    <summary>ឯកសារ Workflow ឧទាហរណ៍</summary>
    នេះជាឧទាហរណ៍នៃរបៀបឯកសារ GitHub Actions workflow ដែលប្រហែលជាទន់ចិត្ត:
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

- បន្ទាប់ពីដាក់ឡើង: បន្ទាប់ពីដាក់ឡើងបានសម្រេច សូមចុច 'Go to Deployment' បន្ទាប់មក 'View app in browser'។

បន្ទាប់ពី GitHub Action (workflow) របស់អ្នកបានដំណើរការជោគជ័យ សូមធ្វើការផ្ទុកទំព័រឡើងវិញ ដើម្បីមើលកម្មវិធីរបស់អ្នក។

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**ច័ន្ទបញ្ញតិការ**:  
ឯកសារនេះត្រូវបានបកប្រែដោយប្រើសេវាកម្មបកប្រែ AI [Co-op Translator](https://github.com/Azure/co-op-translator)។ ក្នុងខណៈពេលដែលយើងខិតខំធ្វើឲ្យបានត្រឹមត្រូវខ្ពស់ សូមយល់ដឹងថាការបកប្រែដោយស្វ័យប្រវត្តិអាចមានកំហុសឬភាពមិនត្រឹមត្រូវ។ ឯកសារដើមជាភាសាដើមគួរត្រូវបានទទួលស្គាល់ជាមូលដ្ឋានមានសុពលភាព។ សម្រាប់ព័ត៌មានសំខាន់ណាស់ សូមណែនាំឱ្យប្រើការបកប្រែដោយមនុស្សវិជ្ជាជីវៈ។ យើងមិនទទួលខុសត្រូវចំពោះការយល់ច្រឡំនៅណាកើតចេញពីការប្រើប្រាស់ការបកប្រែនេះឡើយ។
<!-- CO-OP TRANSLATOR DISCLAIMER END -->