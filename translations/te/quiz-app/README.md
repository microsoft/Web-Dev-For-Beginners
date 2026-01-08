<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2026-01-08T11:16:05+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "te"
}
-->
# Quiz app

ఈ ప్రశ్నా తరగతులు https://aka.ms/webdev-beginners వద్ద డేటా సైన్స్ కారిక్యులం కోసం పూర్వ మరియు అనంతర లెక్చర్ ప్రశ్నలుచే consist అవుతాయి

## అనువాదించిన ప్రశ్నల కురుసును జోడించడం

`assets/translations` ఫోల్డర్లలో సరిపోయే ప్రశ్నా నిర్మాణాలను సృష్టించడం ద్వారా ప్రశ్నల అనువాదాన్ని జోడించండి. మూల ప్రశ్నలు `assets/translations/en` లో ఉన్నాయి. ప్రశ్నలు కొన్ని విభాగాలుగా విభజించబడ్డాయి. సరైన ప్రశ్నా విభాగంతో సంఖ్యను సరిపోల్చుకోవాలి. ఈ কারిక్యులంలో మొత్తం 40 ప్రశ్నలు ఉన్నాయి, కౌంట్ 0 నుండి ప్రారంభవుతుంది.

  
<details>
<summary>ఇది అనువాద ఫైల్ ఆకారం:</summary>

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

అనువాదాలను సవరించిన తర్వాత, `en` లోని సాంప్రదాయాలను అనుసరించి అన్ని ఫైళ్లను దిగుమతి చేసేందుకు అనువాద ఫోల్డర్ లోని index.js ఫైలును సవరించండి.

కొత్త అనువాదించిన ఫైళ్లను దిగుమతి చేసేందుకు `assets/translations` లోని `index.js` ఫైలును సవరించండి.

ఉదాహరణకు, మీ అనువాద JSON `ex.json` లో ఉంటే, 'ex' ను స్థానికీకరణ కీగా చేయండి, ఆపై దిగుమతి చేసేందుకు క్రింద చూపినట్టు నమోదు చేయండి

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

## Quiz App ను స్థానికంగా నడపడం

### ముందస్తు సిద్ధతలు

- ఒక GitHub ఖాతా
- [Node.js మరియు Git](https://nodejs.org/)

### ఇన్‌స్టాల్ & సెటప్

1. ఈ [teamplate](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) నుంచి ఒక రిపోజిటరీ సృష్టించండి

1. మీ కొత్త రిపోజిటరీని క్లోన్ చేయండి, అప్పుడు quiz-app కి నావిగేట్ అవ్వండి

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm ప్యాకేజీలు & డిపెండెన్సీలను ఇన్‌స్టాల్ చేయండి

   ```bash
   npm install
   ```

### యాప్ ని నిర్మించండి

1. పరిష్కారాన్ని నిర్మించేందుకు, রান చేయండి:

   ```bash
   npm run build
   ```

### యాప్ ప్రారంభించండి

1. పరిష్కారాన్ని నడపడానికి, రన్ చేయండి:

    ```bash
    npm run dev
    ```

### [ఆప్షనల్] లింటింగ్

1. కోడ్ లింట్ అవుతుందో లేదో చూసేందుకు, రన్ చేయండి:

    ```bash
    npm run lint
    ```

## Quiz-app ను Azure కు మోపడం

### ముందస్తు సిద్ధతలు
- ఒక Azure సబ్‌స్క్రిప్షన్. ఒకటి ఉచితంగా సైన్ అప్ చేసుకోండి [ఇక్కడ](https://aka.ms/azure-free).

    _ఈ quiz-app ను మోపడానికి ఖర్చైన అంచనా: ఉచితం_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

మీరు పై లింక్ ద్వారా Azure లో సైన్ ఇన్ అయిన తర్వాత, ఒక సబ్‌స్క్రిప్షన్ మరియు రిసోర్స్ గ్రూప్ ఎంచుకోండి: 

- స్టాటిక్ వెబ్ యాప్ వివరాలు: ఒక పేరు ఇవ్వండి మరియు హోస్టింగ్ ప్లాన్ ఎంచుకోండి
- GitHub లాగిన్: మీ డిప్లాయ్ సోర్స్‌ను GitHub గా సెట్ చేసి, లాగిన్ అవ్వండి, ఫారమ్ లో అవసరమైన ఫీల్డ్ లను పూరించండి:
    - *ఆర్గనైజేషన్* – మీ ఆర్గనైజేషన్ ఎంచుకోండి.
    - *రిపోజిటరీ* – Web Dev for Beginners కారిక్యులం రిపోజిటరీ ఎంచుకోండి.
    - *బ్రాంచ్* - ఒక బ్రాంచ్ ఎంచుకోండి (main)
- బిల్డ్ ప్రీసెట్‌లు: Azure Static Web Apps మీ అప్లికేషన్ లో వాడే ఫ్రేమ్‌వర్క్‌ను గుర్తించడానికి అల్గొరిథమ్‌ను వాడుతుంది.
    - *యాప్ లొకేషన్* - ./quiz-app
    - *Api లొకేషన్* -
    - *అవుట్‌పుట్ లొకేషన్* - dist
- డిప్లాయ్‌మెంట్: 'Review + Create' ను క్లిక్ చేసి, ఆ తర్వాత 'Create' ను క్లిక్ చేయండి

    ఒకసారి డిప్లాయ్ చేసిన తరువాత, మీ రిపోలో *.github* డైరેક્ટరీలో ఒక workflow ఫైల్ సృష్టించబడుతుంది. ఈ workflow ఫైల్ డిప్లాయ్‌మెంట్‌ను తిరిగి Azure కు జరగడానికి ట్రిగ్గర్ చేసే ఈవెంట్ల వివరాలు కలిగి ఉంటుంది, ఉదాహరణకి, _ఒక **push** బ్రాంచ్ **main** లో_ మొదలయినవి.

    <details>
    <summary>ఉదాహరణ Workflow ఫైల్</summary>
    GitHub Actions workflow ఫైల్ ఎలా కనిపించొచ్చొదీ ఉదాహరణ ఇక్కడ ఉంది:
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

- డిప్లాయ్‌మెంట్ అనంతరం: డిప్లాయ్‌మెంట్ పూర్తయిన తర్వాత, 'Go to Deployment' పై క్లిక్ చేయండి, అప్పుడు 'View app in browser' పై క్లిక్ చేయండి.

మీ GitHub Action (workflow) విజయవంతంగా నడిచిన తర్వాత, మీ అప్లికేషన్ చూడడానికి live page ను రీఫ్రెష్ చేయండి.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**అస్పష్టత**:  
ఈ డాక్యుమెంట్ AI అనువాద సేవ [Co-op Translator](https://github.com/Azure/co-op-translator) ఉపయోగించి అనువదించబడింది. అసలు ఖచ్చితత్వానికి మనం మనస్పూర్తిగా శ్రమిస్తుంటే, ఆటోమేటెడ్ అనువాదాలలో తప్పిదాలు లేదా అసత్యతలు ఉండవచ్చు అని దయచేసి గమనించండి. స్థానిక భాషలో ఉన్న అసలు డాక్యుమెంట్ అధికారిక మూలంగా పరిగణించాలి. గౌరవప్రదమైన కీలక సమాచారం కోసం వృత్తిపరమైన మానవ అనువాదాన్ని సూచించబడును. ఈ అనువాదం వాడకం కారణంగా ఏర్పడిన ఏవైనా అవగాహనా లోపాలు లేదా తప్పుగా అర్థం తీసుకున్నదానికి మేము బాధ్యులు కావు.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->