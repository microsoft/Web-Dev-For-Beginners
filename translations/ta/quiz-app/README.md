<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-10-11T11:40:41+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "ta"
}
-->
# கேள்வி பதில் செயலி

இந்த கேள்வி பதில்கள் https://aka.ms/webdev-beginners என்ற தரவியல் அறிவியல் பாடத்திட்டத்தின் முன் மற்றும் பின் சொற்பொழிவு கேள்வி பதில்கள் ஆகும்.

## மொழிபெயர்க்கப்பட்ட கேள்வி தொகுப்பை சேர்க்க

மொழிபெயர்க்கப்பட்ட கேள்வி தொகுப்பை `assets/translations` கோப்பகங்களில் பொருந்தும் கேள்வி அமைப்புகளை உருவாக்குவதன் மூலம் சேர்க்கவும். மூல கேள்வி பதில்கள் `assets/translations/en` இல் உள்ளன. கேள்வி பதில்கள் பல பிரிவுகளாக பிரிக்கப்பட்டுள்ளன. சரியான கேள்வி பிரிவுடன் எண்களை ஒழுங்குபடுத்த உறுதிப்படுத்தவும். இந்த பாடத்திட்டத்தில் மொத்தம் 40 கேள்வி பதில்கள் உள்ளன, எண்ணிக்கை 0-இல் தொடங்குகிறது.

  
<details>
<summary>மொழிபெயர்ப்பு கோப்பின் வடிவம் இங்கே:</summary>

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

மொழிபெயர்ப்புகளை திருத்திய பிறகு, `en` இல் உள்ள வழிமுறைகளை பின்பற்றி மொழிபெயர்ப்பு கோப்பகத்தில் உள்ள index.js கோப்பை திருத்தி அனைத்து கோப்புகளையும் இறக்குமதி செய்யவும்.

`assets/translations` இல் உள்ள `index.js` கோப்பை திருத்தி புதிய மொழிபெயர்க்கப்பட்ட கோப்புகளை இறக்குமதி செய்யவும்.

உதாரணமாக, உங்கள் மொழிபெயர்ப்பு JSON `ex.json` இல் இருந்தால், 'ex' ஐ உள்ளூர் மொழி விசையாக மாற்றி, கீழே காட்டப்பட்டுள்ளபடி அதை இறக்குமதி செய்யவும்:

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

## கேள்வி பதில் செயலியை உள்ளூரில் இயக்கவும்

### முன் தேவைகள்

- GitHub கணக்கு
- [Node.js மற்றும் Git](https://nodejs.org/)

### நிறுவல் மற்றும் அமைப்பு

1. இந்த [வார்ப்புருவில்](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) இருந்து ஒரு repository உருவாக்கவும்.

1. உங்கள் புதிய repository ஐ clone செய்து, quiz-app கோப்பகத்திற்குச் செல்லவும்.

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm தொகுப்புகள் மற்றும் சார்புகளை நிறுவவும்.

   ```bash
   npm install
   ```

### செயலியை உருவாக்கவும்

1. தீர்வை உருவாக்க, கீழே உள்ளதை இயக்கவும்:

   ```bash
   npm run build
   ```

### செயலியை தொடங்கவும்

1. தீர்வை இயக்க, கீழே உள்ளதை இயக்கவும்:

    ```bash
    npm run dev
    ```

### [விருப்பம்] Linting

1. குறியீடு சரியாக இருக்க உறுதிப்படுத்த, கீழே உள்ளதை இயக்கவும்:

    ```bash
    npm run lint
    ```

## கேள்வி பதில் செயலியை Azure-க்கு வெளியிடவும்

### முன் தேவைகள்
- Azure சந்தா. இலவசமாக [இங்கே](https://aka.ms/azure-free) பதிவு செய்யவும்.

    _இந்த கேள்வி பதில் செயலியை வெளியிட செலவு மதிப்பீடு: இலவசம்_

[![Azure-க்கு வெளியிடவும்](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

மேலே உள்ள இணைப்பின் மூலம் Azure-இல் உள்நுழைந்த பிறகு, ஒரு சந்தா மற்றும் resource group ஐத் தேர்ந்தெடுக்கவும்:

- Static Web App விவரங்கள்: ஒரு பெயரை வழங்கி, ஒரு hosting திட்டத்தைத் தேர்ந்தெடுக்கவும்.
- GitHub உள்நுழைவு: உங்கள் வெளியீட்டு மூலமாக GitHub ஐ அமைத்து, உள்நுழைந்து படிவத்தில் தேவையான புலங்களை நிரப்பவும்:
    - *Organization* – உங்கள் அமைப்பைத் தேர்ந்தெடுக்கவும்.
    - *Repository* – Web Dev for Beginners பாடத்திட்ட repository ஐத் தேர்ந்தெடுக்கவும்.
    - *Branch* - ஒரு branch (main) ஐத் தேர்ந்தெடுக்கவும்.
- Build Presets: Azure Static Web Apps உங்கள் செயலியில் பயன்படுத்தப்படும் framework ஐ கண்டறிய ஒரு கண்டறிதல் algorithm ஐப் பயன்படுத்துகிறது.
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Deployment: 'Review + Create' ஐ கிளிக் செய்து, பின்னர் 'Create' ஐ கிளிக் செய்யவும்.

    வெளியீட்டுக்குப் பிறகு, உங்கள் repo-வின் *.github* கோப்பகத்தில் ஒரு workflow கோப்பு உருவாக்கப்படும். இந்த workflow கோப்பு, செயலியை Azure-க்கு மீண்டும் வெளியிட எந்த நிகழ்வுகள் trigger செய்யும் என்பதை விவரிக்கிறது, உதாரணமாக, _branch **main**-இல் ஒரு **push**_ போன்றவை.

    <details>
    <summary>உதாரண Workflow கோப்பு</summary>
    GitHub Actions workflow கோப்பு எப்படி இருக்கும் என்பதை இங்கே காணலாம்:
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

- வெளியீட்டுக்குப் பிறகு: வெளியீடு முடிந்தவுடன், 'Go to Deployment' ஐ கிளிக் செய்து, 'View app in browser' ஐத் தேர்ந்தெடுக்கவும்.

உங்கள் GitHub Action (workflow) வெற்றிகரமாக செயல்படுத்தப்பட்ட பிறகு, உங்கள் செயலியைப் பார்க்க live பக்கத்தை refresh செய்யவும்.

---

**அறிவிப்பு**:  
இந்த ஆவணம் [Co-op Translator](https://github.com/Azure/co-op-translator) என்ற AI மொழிபெயர்ப்பு சேவையை பயன்படுத்தி மொழிபெயர்க்கப்பட்டுள்ளது. நாங்கள் துல்லியத்திற்காக முயற்சிக்கிறோம், ஆனால் தானியங்கி மொழிபெயர்ப்புகளில் பிழைகள் அல்லது தவறுகள் இருக்கக்கூடும் என்பதை தயவுசெய்து கவனத்தில் கொள்ளவும். அதன் சொந்த மொழியில் உள்ள மூல ஆவணம் அதிகாரப்பூர்வ ஆதாரமாக கருதப்பட வேண்டும். முக்கியமான தகவல்களுக்கு, தொழில்முறை மனித மொழிபெயர்ப்பு பரிந்துரைக்கப்படுகிறது. இந்த மொழிபெயர்ப்பைப் பயன்படுத்துவதால் ஏற்படும் எந்த தவறான புரிதல்களுக்கும் அல்லது தவறான விளக்கங்களுக்கும் நாங்கள் பொறுப்பல்ல.