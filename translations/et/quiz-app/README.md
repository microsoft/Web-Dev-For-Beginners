# Viktoriinirakendus

Need viktoriinid on andmeteaduse õppekava eel- ja järelloengute viktoriinid aadressil https://aka.ms/webdev-beginners

## Tõlgitud viktoriinikomplekti lisamine

Lisa viktoriini tõlge, luues vastavad viktoriinistruktuurid kaustadesse `assets/translations`. Originaalviktoriinid asuvad kaustas `assets/translations/en`. Viktoriinid on jaotatud mitmeks grupiks. Veendu, et numbrid vastaksid õigetele viktoriini osadele. Selles õppekavas on kokku 40 viktoriini, alustades numbrist 0.

  
<details>
<summary>Siin on tõlkefaili struktuur:</summary>

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

Pärast tõlgete redigeerimist muuda tõlke kaustas olevat index.js faili, et importida kõik failid vastavalt `en` kaustas olevatele konventsioonidele.

Muuda `index.js` faili kaustas `assets/translations`, et importida uued tõlgitud failid.

Näiteks, kui sinu tõlke JSON on failis `ex.json`, siis tee 'ex' lokaliseerimise võtme nimeks ja lisa see allpool näidatud viisil:

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

## Käivita viktoriinirakendus kohalikult

### Eeltingimused

- GitHubi konto
- [Node.js ja Git](https://nodejs.org/)

### Paigaldamine ja seadistamine

1. Loo uus repositoorium sellest [mallist](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Klooni oma uus repositoorium ja liigu kausta quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Paigalda npm paketid ja sõltuvused

   ```bash
   npm install
   ```

### Rakenduse ehitamine

1. Lahenduse ehitamiseks käivita:

   ```bash
   npm run build
   ```

### Rakenduse käivitamine

1. Lahenduse käivitamiseks käivita:

    ```bash
    npm run dev
    ```

### [Valikuline] Lintimine

1. Koodi lintimise tagamiseks käivita:

    ```bash
    npm run lint
    ```

## Viktoriinirakenduse juurutamine Azure'i

### Eeltingimused
- Azure'i tellimus. Registreeru tasuta [siin](https://aka.ms/azure-free).

    _Selle viktoriinirakenduse juurutamise hinnanguline maksumus: TASUTA_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Kui oled Azure'is ülaltoodud lingi kaudu sisse loginud, vali tellimus ja ressursigrupp, seejärel:

- Staatilise veebirakenduse üksikasjad: Sisesta nimi ja vali hostimisplaan
- GitHubi sisselogimine: Määra oma juurutamise allikaks GitHub, logi sisse ja täida vormil nõutud väljad:
    - *Organisatsioon* – Vali oma organisatsioon.
    - *Repositoorium* – Vali Web Dev for Beginners õppekava repositoorium. 
    - *Haru* - Vali haru (main) 
- Ehituse eelseaded: Azure Static Web Apps kasutab tuvastusalgoritmi, et tuvastada sinu rakenduses kasutatav raamistik. 
    - *Rakenduse asukoht* - ./quiz-app
    - *Api asukoht* -
    - *Väljundi asukoht* - dist
- Juurutamine: Klõpsa 'Review + Create', seejärel 'Create'

    Kui juurutamine on lõpule viidud, luuakse sinu repositooriumi *.github* kausta töövoo fail. See töövoo fail sisaldab juhiseid sündmuste kohta, mis käivitavad rakenduse uuesti juurutamise Azure'i, näiteks _**push** harule **main**_ jne.

    <details>
    <summary>Näide töövoo failist</summary>
    Siin on näide, milline GitHub Actions töövoo fail võib välja näha:
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

- Pärast juurutamist: Kui juurutamine on lõpule viidud, klõpsa 'Go to Deployment', seejärel 'View app in browser'.

Kui sinu GitHub Action (töövoog) on edukalt täidetud, värskenda reaalajas lehte, et näha oma rakendust.

---

**Lahtiütlus**:  
See dokument on tõlgitud, kasutades AI tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algkeeles tuleks lugeda autoriteetseks allikaks. Olulise teabe puhul on soovitatav kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valede tõlgenduste eest.