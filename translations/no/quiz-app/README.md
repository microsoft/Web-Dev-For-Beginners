<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-26T23:20:36+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "no"
}
-->
# Quiz-app

Disse quizene er forhånds- og etterforelesningsquizer for data science-pensumet på https://aka.ms/webdev-beginners

## Legge til et oversatt quizsett

Legg til en oversettelse av en quiz ved å opprette tilsvarende quizstrukturer i `assets/translations`-mappene. De originale quizene finnes i `assets/translations/en`. Quizene er delt inn i flere grupper. Sørg for å justere nummereringen med riktig quizseksjon. Det er totalt 40 quizer i dette pensumet, og nummereringen starter på 0.

  
<details>
<summary>Her er strukturen til en oversettelsesfil:</summary>

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

Etter at du har redigert oversettelsene, rediger `index.js`-filen i oversettelsesmappen for å importere alle filene i henhold til konvensjonene i `en`.

Rediger `index.js`-filen i `assets/translations` for å importere de nye oversatte filene. 

For eksempel, hvis oversettelsen din er i `ex.json`, bruk 'ex' som lokaliseringsnøkkel, og legg den inn som vist nedenfor for å importere den.

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

## Kjør Quiz-appen lokalt

### Forutsetninger

- En GitHub-konto
- [Node.js og Git](https://nodejs.org/)

### Installering og oppsett

1. Opprett et repository fra denne [malen](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Klon det nye repositoryet ditt, og naviger til quiz-appen

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Installer npm-pakkene og avhengighetene

   ```bash
   npm install
   ```

### Bygg appen

1. For å bygge løsningen, kjør:

   ```bash
   npm run build
   ```

### Start appen

1. For å kjøre løsningen, kjør:

    ```bash
    npm run dev
    ```

### [Valgfritt] Linting

1. For å sikre at koden er lintet, kjør:

    ```bash
    npm run lint
    ```

## Distribuer Quiz-appen til Azure 

### Forutsetninger
- Et Azure-abonnement. Registrer deg for et gratis [her](https://aka.ms/azure-free).

    _Kostnadsestimat for å distribuere denne quiz-appen: GRATIS_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Når du er logget inn på Azure via lenken ovenfor, velg et abonnement og en ressursgruppe, og deretter:

- Detaljer for Static Web App: Oppgi et navn og velg en hostingplan
- GitHub-innlogging: Sett distribusjonskilden din som GitHub, logg inn og fyll ut de nødvendige feltene i skjemaet:
    - *Organisasjon* – Velg organisasjonen din.
    - *Repository* – Velg Web Dev for Beginners-pensumrepositoryet. 
    - *Branch* - Velg en branch (main) 
- Byggeforhåndsinnstillinger: Azure Static Web Apps bruker en deteksjonsalgoritme for å oppdage rammeverket som brukes i applikasjonen din. 
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Distribusjon: Klikk 'Review + Create', deretter 'Create'

    Når distribusjonen er fullført, vil en workflow-fil bli opprettet i *.github*-mappen i repositoryet ditt. Denne workflow-filen inneholder instruksjoner om hendelser som vil utløse en ny distribusjon av appen til Azure, for eksempel _et **push** på branch **main**_ osv.

    <details>
    <summary>Eksempel på workflow-fil</summary>
    Her er et eksempel på hvordan GitHub Actions workflow-filen kan se ut:
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

- Etter distribusjon: Når distribusjonen er fullført, klikk på 'Go to Deployment' og deretter 'View app in browser'.

Når GitHub Action (workflow) er vellykket utført, oppdater den live siden for å se applikasjonen din.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.