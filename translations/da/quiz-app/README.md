<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-26T23:20:22+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "da"
}
-->
# Quiz-app

Disse quizzer er før- og efterforelæsningsquizzer for data science-pensumet på https://aka.ms/webdev-beginners

## Tilføjelse af et oversat quizsæt

Tilføj en quizoversættelse ved at oprette tilsvarende quizstrukturer i mappen `assets/translations`. De originale quizzer findes i `assets/translations/en`. Quizzerne er opdelt i flere grupperinger. Sørg for at justere nummereringen, så den passer til den korrekte quizsektion. Der er i alt 40 quizzer i dette pensum, og nummereringen starter ved 0.

  
<details>
<summary>Sådan ser strukturen af en oversættelsesfil ud:</summary>

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

Efter at have redigeret oversættelserne, skal du redigere index.js-filen i oversættelsesmappen for at importere alle filerne i henhold til konventionerne i `en`.

Rediger `index.js`-filen i `assets/translations` for at importere de nye oversatte filer. 

For eksempel, hvis din oversættelses-JSON er i `ex.json`, skal du gøre 'ex' til lokaliseringsnøglen og derefter tilføje den som vist nedenfor for at importere den.

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

## Kør Quiz-appen lokalt

### Forudsætninger

- En GitHub-konto
- [Node.js og Git](https://nodejs.org/)

### Installation og opsætning

1. Opret et repository fra denne [skabelon](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Klon dit nye repository, og naviger til quiz-appen

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Installer npm-pakker og afhængigheder

   ```bash
   npm install
   ```

### Byg appen

1. For at bygge løsningen skal du køre:

   ```bash
   npm run build
   ```

### Start appen

1. For at køre løsningen skal du køre:

    ```bash
    npm run dev
    ```

### [Valgfrit] Linting

1. For at sikre, at koden er lintet, skal du køre:

    ```bash
    npm run lint
    ```

## Udrul Quiz-appen til Azure 

### Forudsætninger
- Et Azure-abonnement. Tilmeld dig gratis [her](https://aka.ms/azure-free).

    _Omkostningsestimat for at udrulle denne quiz-app: GRATIS_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Når du er logget ind på Azure via linket ovenfor, skal du vælge et abonnement og en ressourcegruppe og derefter:

- Detaljer om Static Web App: Angiv et navn og vælg en hostingplan
- GitHub-login: Angiv din udrulningskilde som GitHub, log ind, og udfyld de nødvendige felter i formularen:
    - *Organisation* – Vælg din organisation.
    - *Repository* – Vælg Web Dev for Beginners-pensumets repository. 
    - *Branch* - Vælg en branch (main) 
- Byggepræferencer: Azure Static Web Apps bruger en detektionsalgoritme til at identificere det framework, der bruges i din applikation. 
    - *App-placering* - ./quiz-app
    - *Api-placering* -
    - *Output-placering* - dist
- Udrulning: Klik på 'Review + Create', og derefter 'Create'

    Når udrulningen er fuldført, vil en workflow-fil blive oprettet i *.github*-mappen i dit repository. Denne workflow-fil indeholder instruktioner om hændelser, der vil udløse en genudrulning af appen til Azure, for eksempel _et **push** på branch **main**_ osv.

    <details>
    <summary>Eksempel på workflow-fil</summary>
    Her er et eksempel på, hvordan GitHub Actions workflow-filen kan se ud:
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

- Efter udrulning: Når udrulningen er fuldført, skal du klikke på 'Go to Deployment' og derefter 'View app in browser'.

Når din GitHub Action (workflow) er udført med succes, skal du opdatere den live side for at se din applikation.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.