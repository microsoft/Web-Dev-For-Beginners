<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-26T23:20:10+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "sv"
}
-->
# Quiz-app

Dessa quiz är för- och efterföreläsningsquiz för datavetenskapskursen på https://aka.ms/webdev-beginners

## Lägga till en översatt quizuppsättning

Lägg till en quizöversättning genom att skapa matchande quizstrukturer i mappen `assets/translations`. De ursprungliga quizzen finns i `assets/translations/en`. Quizzen är uppdelade i flera grupperingar. Se till att numreringen stämmer överens med rätt quizsektion. Det finns totalt 40 quiz i denna kurs, med numreringen som börjar på 0.

  
<details>
<summary>Så här ser en översättningsfil ut:</summary>

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

Efter att du har redigerat översättningarna, redigera index.js-filen i översättningsmappen för att importera alla filer enligt konventionerna i `en`.

Redigera `index.js`-filen i `assets/translations` för att importera de nya översatta filerna. 

Till exempel, om din översättnings-JSON finns i `ex.json`, gör 'ex' till lokaliseringsnyckeln och lägg till den som visas nedan för att importera den.

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

## Kör Quiz-appen lokalt

### Förutsättningar

- Ett GitHub-konto
- [Node.js och Git](https://nodejs.org/)

### Installera & Ställ in

1. Skapa ett repository från denna [mall](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Klona ditt nya repository och navigera till quiz-appen

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Installera npm-paketen och beroenden

   ```bash
   npm install
   ```

### Bygg appen

1. För att bygga lösningen, kör:

   ```bash
   npm run build
   ```

### Starta appen

1. För att köra lösningen, kör:

    ```bash
    npm run dev
    ```

### [Valfritt] Lintning

1. För att säkerställa att koden är lintad, kör:

    ```bash
    npm run lint
    ```

## Distribuera Quiz-appen till Azure 

### Förutsättningar
- Ett Azure-abonnemang. Registrera dig för ett gratis [här](https://aka.ms/azure-free).

    _Kostnadsuppskattning för att distribuera denna quiz-app: GRATIS_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

När du har loggat in på Azure via länken ovan, välj ett abonnemang och en resursgrupp och gör sedan följande:

- Detaljer för Static Web App: Ange ett namn och välj en hostingplan
- GitHub-inloggning: Ställ in din distributionskälla som GitHub, logga sedan in och fyll i de obligatoriska fälten i formuläret:
    - *Organisation* – Välj din organisation.
    - *Repository* – Välj repository för Web Dev for Beginners-kursen. 
    - *Branch* - Välj en branch (main) 
- Byggförinställningar: Azure Static Web Apps använder en detekteringsalgoritm för att identifiera ramverket som används i din applikation. 
    - *App-plats* - ./quiz-app
    - *Api-plats* -
    - *Output-plats* - dist
- Distribution: Klicka på 'Review + Create', sedan 'Create'

    När distributionen är klar kommer en arbetsflödesfil att skapas i *.github*-katalogen i ditt repository. Denna arbetsflödesfil innehåller instruktioner om händelser som kommer att trigga en omdistribution av appen till Azure, till exempel _en **push** på branch **main**_ etc.

    <details>
    <summary>Exempel på arbetsflödesfil</summary>
    Här är ett exempel på hur GitHub Actions arbetsflödesfil kan se ut:
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

- Efter distribution: När distributionen är klar, klicka på 'Go to Deployment' och sedan 'View app in browser'.

När din GitHub Action (arbetsflöde) har körts framgångsrikt, uppdatera den live-sidan för att se din applikation.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.