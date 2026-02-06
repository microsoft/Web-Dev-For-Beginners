# Quiz app

ဒီ quiz တွေက https://aka.ms/webdev-beginners မှာရှိတဲ့ data science curriculum အတွက် သင်ခန်းစာမတိုင်မီနှင့်ပြီးနောက် quiz တွေဖြစ်ပါတယ်။

## ဘာသာပြန်ထားတဲ့ quiz set တစ်ခုထည့်သွင်းခြင်း

ဘာသာပြန်ထားတဲ့ quiz set တစ်ခုထည့်သွင်းရန် `assets/translations` folder တွေထဲမှာ quiz structure တွေကိုလိုက်ဖက်အောင်ဖန်တီးပါ။ Canonical quizzes တွေက `assets/translations/en` မှာရှိပါတယ်။ Quiz တွေကို အုပ်စုအလိုက်ခွဲထားပါတယ်။ Quiz section နဲ့အမှန်တကယ်လိုက်ဖက်တဲ့ နံပါတ်တွေကို align လုပ်ထားဖို့သေချာပါ။ ဒီ curriculum မှာ quiz စုစုပေါင်း 40 ခုရှိပြီး 0 မှစတင်ရမည်။

  
<details>
<summary>ဘာသာပြန်ထားတဲ့ ဖိုင်ရဲ့ ပုံစံက ဒီလိုပါ:</summary>

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

ဘာသာပြန်ထားတဲ့ ဖိုင်တွေကို ပြင်ဆင်ပြီးနောက် `assets/translations` folder ထဲမှာရှိတဲ့ index.js ဖိုင်ကို ပြင်ဆင်ပြီး `en` မှာရှိတဲ့ convention တွေကိုလိုက်နာပြီး ဖိုင်တွေကို import လုပ်ပါ။

ဥပမာ၊ သင့်ဘာသာပြန် JSON ဖိုင်က `ex.json` ဖြစ်ရင် localization key ကို 'ex' လို့ထားပြီး အောက်မှာပြထားတဲ့အတိုင်း import လုပ်ပါ။

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

## Quiz App ကို local မှာ run လုပ်ခြင်း

### လိုအပ်ချက်များ

- GitHub အကောင့်တစ်ခု
- [Node.js နှင့် Git](https://nodejs.org/)

### Install & Setup

1. ဒီ [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) ကိုအသုံးပြုပြီး repository တစ်ခုဖန်တီးပါ။

1. သင့်အသစ်ဖန်တီးထားတဲ့ repository ကို clone လုပ်ပြီး quiz-app folder ကိုသွားပါ။

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm packages နှင့် dependencies တွေကို install လုပ်ပါ။

   ```bash
   npm install
   ```

### App ကို Build လုပ်ခြင်း

1. Solution ကို build လုပ်ရန် အောက်ပါ command ကို run လုပ်ပါ:

   ```bash
   npm run build
   ```

### App ကို Start လုပ်ခြင်း

1. Solution ကို run လုပ်ရန် အောက်ပါ command ကို run လုပ်ပါ:

    ```bash
    npm run dev
    ```

### [Optional] Linting

1. Code ကို linting လုပ်ရန် အောက်ပါ command ကို run လုပ်ပါ:

    ```bash
    npm run lint
    ```

## Quiz-app ကို Azure မှာ Deploy လုပ်ခြင်း 

### လိုအပ်ချက်များ
- Azure Subscription တစ်ခု။ အခမဲ့ [ဒီမှာ](https://aka.ms/azure-free) စာရင်းသွင်းပါ။

    _ဒီ quiz-app ကို deploy လုပ်ရန် ကုန်ကျစရိတ်: အခမဲ့_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

အထက်ပါ link မှာ Azure မှာ sign in လုပ်ပြီးနောက် subscription နှင့် resource group ကိုရွေးပါ:

- Static Web App details: နာမည်တစ်ခုပေးပြီး hosting plan ကိုရွေးပါ။
- GitHub Login: Deployment source ကို GitHub အဖြစ်သတ်မှတ်ပြီး log in လုပ်ပြီး form မှာလိုအပ်တဲ့ field တွေကိုဖြည့်ပါ:
    - *Organization* – သင့် organization ကိုရွေးပါ။
    - *Repository* – Web Dev for Beginners curriculum repository ကိုရွေးပါ။
    - *Branch* - Branch (main) ကိုရွေးပါ။
- Build Presets: Azure Static Web Apps က သင့် application မှာအသုံးပြုထားတဲ့ framework ကိုသိရှိရန် detection algorithm ကိုအသုံးပြုပါ။
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Deployment: 'Review + Create' ကိုနှိပ်ပြီး 'Create' ကိုနှိပ်ပါ။

    Deploy လုပ်ပြီးနောက် workflow ဖိုင်တစ်ခုကို သင့် repo ရဲ့ *.github* directory မှာဖန်တီးပါမည်။ ဒီ workflow ဖိုင်မှာ app ကို Azure မှာ re-deploy လုပ်ရန် trigger လုပ်မည့် event တွေကိုပါဝင်ပါတယ်၊ ဥပမာ _branch **main** မှာ **push** တစ်ခု_ စသည်ဖြင့်။

    <details>
    <summary>ဥပမာ Workflow ဖိုင်</summary>
    GitHub Actions workflow ဖိုင်က ဒီလိုပုံစံရှိနိုင်ပါတယ်:
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

- Post-Deployment: Deployment ပြီးဆုံးပြီးနောက် 'Go to Deployment' ကိုနှိပ်ပြီး 'View app in browser' ကိုနှိပ်ပါ။

GitHub Action (workflow) အောင်မြင်စွာ run ပြီးနောက် live page ကို refresh လုပ်ပြီး သင့် application ကိုကြည့်ရှုနိုင်ပါမည်။

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူလဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် ရှုလေ့လာသင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။