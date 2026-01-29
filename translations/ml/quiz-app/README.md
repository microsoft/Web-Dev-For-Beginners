# ക്വിസ് ആപ്പ്

ഈ ക്വിസുകൾ https://aka.ms/webdev-beginners ൽ ഉള്ള ഡേറ്റാ സയൻസ് പാഠ്യപദ്ധതിയുടേതായി ലെക്ചർക്കു മുമ്പും ശേഷം നടത്തപ്പെടുന്ന ക്വിസുകളാണ്

## ഭാഷಾಂತರിച്ച ക്വിസ് സെറ്റ് ചേർക്കൽ

`assets/translations` ഫോൾഡറുകളിൽ പൊരുത്തമുള്ള ക്വിസ് ഘടനകൾ സൃഷ്ടിച്ച് ഒരു ക്വിസ് പരിഭാഷ ചേർക്കുക. മുൻനിര്‍ദേശിച്ച ക്വിസുകൾ `assets/translations/en` ൽ ഉണ്ട്. ക്വിസുകള്‍ നിരവധി ഗ്രൂപ്പുകളായി വിഭജിച്ചിരിക്കുന്നു. ക്വിസ് വിഭാഗങ്ങളുടെ നമ്പറിങ്ങുമായി ശരിയായി പൊരുത്തപ്പെടുന്നുണ്ടോയെന്ന് ഉറപ്പാക്കുക. ഈ പാഠ്യപദ്ധതിയിൽ 40 ക്വിസുകളുണ്ട്, എണ്ണം 0 മുതൽ ആരംഭിക്കുന്നു.

  
<details>
<summary>ഇവിടെ ഒരു പരിഭാഷ ഫയലിന്റെ രൂപം ഇപ്രകാരം:</summary>

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

പരിഭാഷകൾ എഡിറ്റ് ചെയ്തശേഷം, `en`ൽ ഉള്ള സൂചനകൾ പാലിച്ച് എല്ലാ ഫയലുകളും ഇൻഡക്സ്.js ഫയലിൽ ഇറക്കുമതി ചെയ്യുക.

പുതിയ പരിഭാഷാ ഫയലുകൾ ഇറക്കുമതി ചെയ്യുന്നതിന് `assets/translations` എന്നുള്ള ഡയറക്ടറിയിലെ `index.js` ഫയൽ എഡിറ്റ് ചെയ്യുക.

ഉദാഹരണത്തിന്, നിങ്ങൾ പരിഭാഷ സി‌ JSON ഫയലായ `ex.json` ൽ ഉണ്ടെങ്കിൽ, അതിന്റെ ലൊക്കലൈസേഷൻ കീ ആയി 'ex' നൽകുകയും താഴെ കാണുന്നതുപോലെ ഇറക്കുമതി ചെയ്യുക

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

## ക്വിസ് ആപ്പ് ലോക്കലായി പ്രവർത്തിപ്പിക്കൽ

### മുൻ‌റിയിപ്പുകൾ

- ഒരു GitHub അക്കൗണ്ട്
- [Node.js and Git](https://nodejs.org/)

### ഇൻസ്റ്റാൾ & സെറ്റപ്പ്

1. ഈ [ടെംപ്ലേറ്റ്](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) ഉപയോഗിച്ച് ഒരു റെപ്പോസിറ്ററി സൃഷ്ടിക്കുക

1. പുതിയ റെപ്പോസിറ്ററി ക്ലോൺ ചെയ്ത് quiz-app ലേക്ക് പോവുക

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm പാക്കേജുകളും ഡിപ്പെൻഡൻസികളും ഇൻസ്റ്റാൾ ചെയ്യുക

   ```bash
   npm install
   ```

### ആപ്പ് ബിൽഡ് ചെയ്യുക

1. സൊല്യൂഷൻ ബിൽഡ് ചെയ്യാൻ, ഇതു റൺ ചെയ്യുക:

   ```bash
   npm run build
   ```

### ആപ്പ് സ്റ്റാർട്ട് ചെയ്യുക

1. സൊല്യൂഷൻ റൺ ചെയ്യാൻ, ഇതു റൺ ചെയ്യുക:

    ```bash
    npm run dev
    ```

### [ഐച്ഛികം] ലിന്റിംഗ്

1. കോഡ് ലിന്റ് ചെയ്യപ്പെട്ടിട്ടുണ്ടെന്ന് ഉറപ്പാക്കാൻ, ഇതു റൺ ചെയ്യുക:

    ```bash
    npm run lint
    ```

## ക്വിസ് ആപ്പ് Azure ൽ ഡിപ്ലോയ് ചെയ്യുക

### മുൻ‌റിയിപ്പുകൾ
- ഒരു Azure സബ്സ്ക്രിപ്ഷൻ. സൗജന്യമായി ഒന്ന് റജിസ്റ്റർ ചെയ്യാൻ [ഇവിടെ](https://aka.ms/azure-free) ചെയ്യുക.

    _ഈ ക്വിസ് ആപ്പ് ഡിപ്ലോയ് ചെയ്യാനുള്ള ചെലവ്: സൗജന്യം_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

മുകളിലുള്ള ലിങ്കിൽ അതിലൂടെ Azureയിൽ സൈൻ ഇൻ ചെയ്തതിനു ശേഷം, ഒരു സബ്സ്ക്രിപ്ഷനും റിസോഴ്‌സ് ഗ്രൂപ്പും തിരഞ്ഞെടുത്ത്:

- സ്റ്റാറ്റിക് വെബ് ആപ്പ് വിശദാംശങ്ങൾ: ഒരു പേര് നൽകുക, ഹോസ്റ്റിങ് പ്ലാൻ തിരഞ്ഞെടുക്കുക
- GitHub ലോഗിൻ: ഡിപ്പ്ലോയ്‌മെന്റിന്റെ ഉറവിടമായി GitHub തിരഞ്ഞെടുക്കുക, പിന്നീട് ലോഗിൻ ചെയ്ത് ഫോമിലെ ആവശ്യമായ ഫീൽഡുകൾ പൂരിപ്പിക്കുക:
    - *ഓർഗനൈസേഷൻ* – നിങ്ങളുടെ ഓർഗനൈസേഷൻ തിരഞ്ഞെടുക്കുക.
    - *റിപ്പോസിറ്ററി* – Web Dev for Beginners പാഠ്യപദ്ധതി റെപ്പോസിറ്ററി തിരഞ്ഞെടുക്കുക.
    - *ബ്രാഞ്ച്* - ഒരു ബ്രാഞ്ച് (main) തിരഞ്ഞെടുക്കുക
- ബിൽഡ് പ്രിസെറ്റ്സ്: Azure സ്റ്റാറ്റിക് വെബ് ആപ്പുകൾ നിങ്ങളുടെ ആപ്പിൽ ഉപയോഗിക്കുന്ന ഫ്രെയിമ്വർക്കിനെ കണ്ടെത്താൻ ഒരു കണ്ടെത്തൽ ആൾഗോരിതം ഉപയോഗിക്കുന്നു.
    - *ആപ്പ് ലൊക്കേഷൻ* - ./quiz-app
    - *API ലൊക്കേഷൻ* -
    - *ഔട്ട്പുട്ട് ലൊക്കേഷൻ* - dist
- ഡിപ്ലോയ്‌മെന്റ്: 'Review + Create' ക്ലിക്ക് ചെയ്യുക, ശേഷം 'Create' ക്ലിക്ക് ചെയ്യുക

    ഡിപ്ലോയ്മെന്റ് കഴിഞ്ഞതോടെ നിങ്ങളുടെ റെപ്പോസിറ്ററിയുടെ *.github* ഡയറക്ടറിയിൽ ഒരു വർക്ക്‌ഫ്ലോ ഫയൽ സൃഷ്ടിക്കും. ആ വർക്ക്‌ഫ്ലോ ഫയലിൽ ആപ്പിനെ Azure-ൽ വീണ്ടും ഡിപ്ലോയ്മെന്റ് നടത്തുന്നതിനുള്ള ട്രിഗർ സംഭവങ്ങളുടെ നിർദ്ദേശങ്ങൾ ഉണ്ടാകും, ഉദാഹരണം ആയി _**main** ബ്രാഞ്ചിൽ **push**_ തുടങ്ങിയവ.

    <details>
    <summary>ഉദാഹരണ വർക്ക്‌ഫ്ലോ ഫയൽ</summary>
    GitHub Actions വർക്ക്‌ഫ്ലോ ഫയൽ എങ്ങനെ കാണിക്കാം എന്ന ഒരു ഉദാഹരണം ഇതാ:
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

- ഡിപ്ലോയ്‌മെന്റിന് ശേഷം: 'Go to Deployment' ശേഷം 'View app in browser' ക്ലിക്ക് ചെയ്യുക.

നിങ്ങളുടെ GitHub Action (വർക്ക്‌ഫ്ലോ) വിജയകരമായി പ്രവർത്തിച്ചശേഷം, നിങ്ങളുടെ ആപ്പ് കാണുവാൻ തത്സമയം പേജ് റിഫ്രഷ് ചെയ്യുക.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**അസൂയാചകം**:  
ഈ രേഖ AI അനുഭവം ഉപയോഗിച്ച് [കോ-ഓപ് ട്രാൻസ്ലേറ്റർ](https://github.com/Azure/co-op-translator) എന്ന അന്വയം സേവനം ഉപയോഗിച്ച് ബഹുഭാഷയാക്കി രൂപാന്തരം ചെയ്തതാണ്. ഞങ്ങൾ നിശ്ചിതത്വത്തിനായി ശ്രമിച്ചിട്ടും, സ്വയംകൃതപ്പെടുന്ന വിവർത്തനങ്ങളിൽ പിശകുകളും അച്ചടക്കക്കുറവുകളും ഉണ്ടായേക്കാമെന്ന് ദയവായി ശ്രദ്ധിക്കുക. സ്വന്തം ഭാഷയിലെ മൗലിക രേഖയാണ് സത്യസന്ധമായ ഉറവിടം എന്ന നിലയിൽ കണക്കാക്കേണ്ടത്. നിർണ്ണായകമായ വിവരങ്ങൾക്കായി, പ്രൊഫഷണൽ മാനവ വിവർത്തനം ശുപാർശ ചെയ്യപ്പെടുന്നു. ഈ വിവർത്തനം ഉപയോഗിക്കുന്നതിന്റെ ഭാഗമായി ഉണ്ടായ എത്രവും തെറ്റിദ്ധാരണകൾക്കും ഞങ്ങൾ ഉത്തരവാദികളല്ല.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->