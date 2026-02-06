# Programu ya Maswali ya Quiz

Maswali haya ni ya kabla na baada ya mihadhara katika mtaala wa sayansi ya data kwenye https://aka.ms/webdev-beginners

## Kuongeza seti ya maswali yaliyotafsiriwa

Ongeza tafsiri ya maswali kwa kuunda miundo inayolingana ya maswali katika folda za `assets/translations`. Maswali ya msingi yapo kwenye `assets/translations/en`. Maswali yamegawanywa katika makundi kadhaa. Hakikisha unalinganisha namba na sehemu sahihi ya maswali. Kuna jumla ya maswali 40 katika mtaala huu, na hesabu inaanza kutoka 0.

  
<details>
<summary>Hivi ndivyo faili ya tafsiri inavyopaswa kuwa:</summary>

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

Baada ya kuhariri tafsiri, hariri faili ya index.js katika folda ya tafsiri ili kuingiza faili zote kufuatia kanuni za `en`.

Hariri faili ya `index.js` katika `assets/translations` ili kuingiza faili mpya zilizotafsiriwa. 

Kwa mfano, ikiwa tafsiri yako ya JSON ipo kwenye `ex.json`, tumia 'ex' kama ufunguo wa utafsiri, kisha ingiza kama inavyoonyeshwa hapa chini:

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

## Endesha Programu ya Maswali ya Quiz kwa Lokal

### Mahitaji ya Awali

- Akaunti ya GitHub
- [Node.js na Git](https://nodejs.org/)

### Kusakinisha na Kuweka

1. Unda hazina kutoka kwa [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Kloni hazina yako mpya, na nenda kwenye programu ya quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Sakinisha vifurushi vya npm na utegemezi

   ```bash
   npm install
   ```

### Jenga Programu

1. Ili kujenga suluhisho, endesha:

   ```bash
   npm run build
   ```

### Anzisha Programu

1. Ili kuendesha suluhisho, endesha:

    ```bash
    npm run dev
    ```

### [Hiari] Kukagua Kanuni

1. Ili kuhakikisha kanuni imekaguliwa, endesha:

    ```bash
    npm run lint
    ```

## Tuma Programu ya Maswali ya Quiz kwenye Azure 

### Mahitaji ya Awali
- Usajili wa Azure. Jisajili bure [hapa](https://aka.ms/azure-free).

    _Makadirio ya Gharama ya kutuma programu hii ya quiz: BURE_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Baada ya kuingia kwenye Azure kupitia kiungo hapo juu, chagua usajili na kikundi cha rasilimali kisha:

- Maelezo ya Programu ya Wavuti ya Static: Toa jina na uchague mpango wa upangishaji
- Kuingia kwa GitHub: Weka chanzo cha utumaji kama GitHub kisha ingia na ujaze sehemu zinazohitajika kwenye fomu:
    - *Shirika* – Chagua shirika lako.
    - *Hazina* – Chagua hazina ya mtaala wa Web Dev for Beginners. 
    - *Tawi* - Chagua tawi (main) 
- Mapendeleo ya Ujenzi: Azure Static Web Apps hutumia algorithimu ya kugundua mfumo uliotumika katika programu yako. 
    - *Mahali pa Programu* - ./quiz-app
    - *Mahali pa Api* -
    - *Mahali pa Matokeo* - dist
- Utumaji: Bonyeza 'Review + Create', kisha 'Create'

    Baada ya kutumwa, faili ya mtiririko wa kazi (workflow) itaundwa kwenye saraka ya *.github* ya hazina yako. Faili hii ya mtiririko wa kazi ina maagizo ya matukio ambayo yataanzisha utumaji upya wa programu kwenye Azure, kwa mfano, _**push** kwenye tawi **main**_ n.k.

    <details>
    <summary>Faili ya Mfano ya Mtiririko wa Kazi</summary>
    Hapa kuna mfano wa jinsi faili ya mtiririko wa kazi wa GitHub Actions inaweza kuonekana:
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

- Baada ya Utumaji: Baada ya utumaji kukamilika, bonyeza 'Go to Deployment' kisha 'View app in browser'.

Baada ya Hatua ya GitHub Action (mtiririko wa kazi) kutekelezwa kwa mafanikio, fresha ukurasa wa moja kwa moja ili kuona programu yako.

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.