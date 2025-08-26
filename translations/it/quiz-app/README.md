<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-26T01:13:40+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "it"
}
-->
# App di Quiz

Questi quiz sono i quiz pre- e post-lezione per il curriculum di data science su https://aka.ms/webdev-beginners

## Aggiungere un set di quiz tradotto

Aggiungi una traduzione dei quiz creando strutture di quiz corrispondenti nelle cartelle `assets/translations`. I quiz canonici si trovano in `assets/translations/en`. I quiz sono suddivisi in diversi gruppi. Assicurati di allineare la numerazione con la sezione corretta del quiz. Ci sono 40 quiz in totale in questo curriculum, con il conteggio che inizia da 0.

  
<details>
<summary>Ecco la struttura di un file di traduzione:</summary>

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

Dopo aver modificato le traduzioni, modifica il file index.js nella cartella delle traduzioni per importare tutti i file seguendo le convenzioni in `en`.

Modifica il file `index.js` in `assets/translations` per importare i nuovi file tradotti. 

Ad esempio, se il tuo JSON di traduzione è in `ex.json`, usa 'ex' come chiave di localizzazione, quindi inseriscilo come mostrato di seguito per importarlo.

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

## Esegui l'app di Quiz localmente

### Prerequisiti

- Un account GitHub
- [Node.js e Git](https://nodejs.org/)

### Installazione e configurazione

1. Crea un repository da questo [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clona il tuo nuovo repository e naviga fino alla cartella quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Installa i pacchetti npm e le dipendenze

   ```bash
   npm install
   ```

### Compila l'app

1. Per compilare la soluzione, esegui:

   ```bash
   npm run build
   ```

### Avvia l'app

1. Per eseguire la soluzione, esegui:

    ```bash
    npm run dev
    ```

### [Opzionale] Linting

1. Per assicurarti che il codice sia lintato, esegui:

    ```bash
    npm run lint
    ```

## Distribuisci l'app di Quiz su Azure 

### Prerequisiti
- Un abbonamento Azure. Registrati gratuitamente [qui](https://aka.ms/azure-free).

    _Stima dei costi per distribuire questa app di quiz: GRATUITO_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Una volta effettuato l'accesso ad Azure tramite il link sopra, seleziona un abbonamento e un gruppo di risorse, quindi:

- Dettagli dell'app web statica: Fornisci un nome e seleziona un piano di hosting
- Login GitHub: Imposta la tua sorgente di distribuzione come GitHub, quindi accedi e compila i campi richiesti nel modulo:
    - *Organizzazione* – Scegli la tua organizzazione.
    - *Repository* – Seleziona il repository del curriculum Web Dev for Beginners. 
    - *Branch* - Seleziona un branch (main) 
- Preset di compilazione: Azure Static Web Apps utilizza un algoritmo di rilevamento per identificare il framework utilizzato nella tua applicazione. 
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Distribuzione: Clicca su 'Review + Create', quindi su 'Create'

    Una volta distribuito, un file di workflow verrà creato nella directory *.github* del tuo repository. Questo file di workflow contiene istruzioni sugli eventi che attiveranno una nuova distribuzione dell'app su Azure, ad esempio, _un **push** sul branch **main**_ ecc.

    <details>
    <summary>Esempio di file di workflow</summary>
    Ecco un esempio di come potrebbe apparire il file di workflow di GitHub Actions:
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

- Post-Distribuzione: Dopo che la distribuzione è completata, clicca su 'Go to Deployment' quindi su 'View app in browser'.

Una volta che la tua GitHub Action (workflow) è stata eseguita con successo, aggiorna la pagina live per visualizzare la tua applicazione.

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un esperto umano. Non siamo responsabili per eventuali fraintendimenti o interpretazioni errate derivanti dall'uso di questa traduzione.