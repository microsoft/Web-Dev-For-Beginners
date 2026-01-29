# Quiz-app

Deze quizzen zijn de pre- en post-lecture quizzen voor het data science curriculum op https://aka.ms/webdev-beginners

## Een vertaalde quizset toevoegen

Voeg een quizvertaling toe door bijpassende quizstructuren te maken in de map `assets/translations`. De originele quizzen staan in `assets/translations/en`. De quizzen zijn onderverdeeld in verschillende groepen. Zorg ervoor dat de nummering overeenkomt met de juiste quizsectie. Er zijn in totaal 40 quizzen in dit curriculum, waarbij de telling begint bij 0.

  
<details>
<summary>Hier is de structuur van een vertaalbestand:</summary>

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

Na het bewerken van de vertalingen, bewerk het bestand index.js in de vertaalmap om alle bestanden te importeren volgens de conventies in `en`.

Bewerk het bestand `index.js` in `assets/translations` om de nieuw vertaalde bestanden te importeren. 

Bijvoorbeeld, als je vertaalde JSON-bestand `ex.json` heet, maak dan 'ex' de lokalisatiesleutel en voer het als volgt in om het te importeren:

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

## De Quiz-app lokaal uitvoeren

### Vereisten

- Een GitHub-account
- [Node.js en Git](https://nodejs.org/)

### Installatie & Setup

1. Maak een repository aan via deze [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clone je nieuwe repository en navigeer naar de quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Installeer de npm-pakketten en afhankelijkheden

   ```bash
   npm install
   ```

### De app bouwen

1. Om de oplossing te bouwen, voer uit:

   ```bash
   npm run build
   ```

### De app starten

1. Om de oplossing uit te voeren, voer uit:

    ```bash
    npm run dev
    ```

### [Optioneel] Linting

1. Om ervoor te zorgen dat de code linted is, voer uit:

    ```bash
    npm run lint
    ```

## De Quiz-app naar Azure deployen 

### Vereisten
- Een Azure-abonnement. Meld je hier gratis aan [hier](https://aka.ms/azure-free).

    _Kostenraming voor het deployen van deze quiz-app: GRATIS_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Zodra je bent ingelogd op Azure via de bovenstaande link, selecteer een abonnement en resourcegroep, en:

- Details van Static Web App: Geef een naam op en selecteer een hostingplan
- GitHub Login: Stel je deploymentbron in als GitHub, log in en vul de vereiste velden in op het formulier:
    - *Organisatie* – Kies je organisatie.
    - *Repository* – Selecteer de Web Dev for Beginners curriculum repository. 
    - *Branch* - Selecteer een branch (main) 
- Build Presets: Azure Static Web Apps gebruikt een detectie-algoritme om het framework te detecteren dat in je applicatie wordt gebruikt. 
    - *App locatie* - ./quiz-app
    - *Api locatie* -
    - *Output locatie* - dist
- Deployment: Klik op 'Review + Create', en vervolgens op 'Create'

    Zodra de app is gedeployed, wordt er een workflowbestand aangemaakt in de map *.github* van je repository. Dit workflowbestand bevat instructies over gebeurtenissen die een her-deployment van de app naar Azure zullen triggeren, bijvoorbeeld _een **push** op branch **main**_ etc.

    <details>
    <summary>Voorbeeld Workflow Bestand</summary>
    Hier is een voorbeeld van hoe het GitHub Actions workflowbestand eruit zou kunnen zien:
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

- Post-Deployment: Nadat de deployment is voltooid, klik op 'Go to Deployment' en vervolgens op 'View app in browser'.

Zodra je GitHub Action (workflow) succesvol is uitgevoerd, ververs de live pagina om je applicatie te bekijken.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.