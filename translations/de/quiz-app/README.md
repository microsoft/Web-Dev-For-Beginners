<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-24T13:56:13+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "de"
}
-->
# Quiz-App

Diese Quizze sind die Vor- und Nachlese-Quizze für den Data-Science-Lehrplan unter https://aka.ms/webdev-beginners

## Hinzufügen eines übersetzten Quiz-Sets

Fügen Sie eine Quiz-Übersetzung hinzu, indem Sie passende Quiz-Strukturen in den Ordnern `assets/translations` erstellen. Die ursprünglichen Quizze befinden sich in `assets/translations/en`. Die Quizze sind in mehrere Gruppen unterteilt. Stellen Sie sicher, dass die Nummerierung mit dem entsprechenden Quiz-Abschnitt übereinstimmt. Insgesamt gibt es 40 Quizze in diesem Lehrplan, beginnend mit der Nummer 0.

  
<details>
<summary>So sieht eine Übersetzungsdatei aus:</summary>

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

Nachdem Sie die Übersetzungen bearbeitet haben, bearbeiten Sie die Datei `index.js` im Übersetzungsordner, um alle Dateien gemäß den Konventionen in `en` zu importieren.

Bearbeiten Sie die Datei `index.js` in `assets/translations`, um die neuen übersetzten Dateien zu importieren. 

Zum Beispiel, wenn Ihre Übersetzungs-JSON-Datei `ex.json` ist, machen Sie 'ex' zum Lokalisierungsschlüssel und fügen Sie ihn wie unten gezeigt ein, um ihn zu importieren:

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

## Quiz-App lokal ausführen

### Voraussetzungen

- Ein GitHub-Konto
- [Node.js und Git](https://nodejs.org/)

### Installation & Einrichtung

1. Erstellen Sie ein Repository aus dieser [Vorlage](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Klonen Sie Ihr neues Repository und navigieren Sie zur Quiz-App

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Installieren Sie die npm-Pakete und Abhängigkeiten

   ```bash
   npm install
   ```

### App erstellen

1. Um die Lösung zu erstellen, führen Sie aus:

   ```bash
   npm run build
   ```

### App starten

1. Um die Lösung auszuführen, führen Sie aus:

    ```bash
    npm run dev
    ```

### [Optional] Linting

1. Um sicherzustellen, dass der Code überprüft wird, führen Sie aus:

    ```bash
    npm run lint
    ```

## Quiz-App auf Azure bereitstellen 

### Voraussetzungen
- Ein Azure-Abonnement. Registrieren Sie sich kostenlos [hier](https://aka.ms/azure-free).

    _Kostenabschätzung für die Bereitstellung dieser Quiz-App: KOSTENLOS_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Sobald Sie sich über den obigen Link bei Azure angemeldet haben, wählen Sie ein Abonnement und eine Ressourcengruppe aus:

- Details zur statischen Web-App: Geben Sie einen Namen an und wählen Sie einen Hosting-Plan aus.
- GitHub-Login: Legen Sie Ihre Bereitstellungsquelle als GitHub fest, melden Sie sich an und füllen Sie die erforderlichen Felder im Formular aus:
    - *Organisation* – Wählen Sie Ihre Organisation.
    - *Repository* – Wählen Sie das Repository des Web Dev for Beginners-Lehrplans. 
    - *Branch* - Wählen Sie einen Branch (main) 
- Build-Voreinstellungen: Azure Static Web Apps verwendet einen Erkennungsalgorithmus, um das Framework Ihrer Anwendung zu erkennen. 
    - *App-Standort* - ./quiz-app
    - *API-Standort* -
    - *Ausgabe-Standort* - dist
- Bereitstellung: Klicken Sie auf 'Überprüfen + Erstellen', dann auf 'Erstellen'.

    Nach der Bereitstellung wird eine Workflow-Datei im *.github*-Verzeichnis Ihres Repos erstellt. Diese Workflow-Datei enthält Anweisungen zu Ereignissen, die eine erneute Bereitstellung der App auf Azure auslösen, z. B. _ein **Push** auf Branch **main**_ usw.

    <details>
    <summary>Beispiel-Workflow-Datei</summary>
    Hier ist ein Beispiel, wie die GitHub Actions Workflow-Datei aussehen könnte:
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

- Nach der Bereitstellung: Nachdem die Bereitstellung abgeschlossen ist, klicken Sie auf 'Zur Bereitstellung gehen' und dann auf 'App im Browser anzeigen'.

Sobald Ihre GitHub-Aktion (Workflow) erfolgreich ausgeführt wurde, aktualisieren Sie die Live-Seite, um Ihre Anwendung anzuzeigen.

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.