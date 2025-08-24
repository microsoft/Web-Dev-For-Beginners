<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-24T13:56:39+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "pl"
}
-->
# Aplikacja Quiz

Te quizy to quizy przed i po wykładach w ramach programu nauczania data science dostępnego na stronie https://aka.ms/webdev-beginners

## Dodawanie przetłumaczonego zestawu quizów

Dodaj tłumaczenie quizu, tworząc odpowiadające struktury quizów w folderach `assets/translations`. Kanoniczne quizy znajdują się w `assets/translations/en`. Quizy są podzielone na kilka grup. Upewnij się, że numeracja odpowiada właściwej sekcji quizu. W tym programie nauczania znajduje się łącznie 40 quizów, a numeracja zaczyna się od 0.

  
<details>
<summary>Oto struktura pliku tłumaczenia:</summary>

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

Po edycji tłumaczeń edytuj plik index.js w folderze tłumaczeń, aby zaimportować wszystkie pliki zgodnie z konwencjami w `en`.

Edytuj plik `index.js` w `assets/translations`, aby zaimportować nowe przetłumaczone pliki. 

Na przykład, jeśli Twoje tłumaczenie JSON znajduje się w `ex.json`, użyj 'ex' jako klucza lokalizacji, a następnie wprowadź go w następujący sposób, aby go zaimportować:

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

## Uruchamianie aplikacji Quiz lokalnie

### Wymagania wstępne

- Konto GitHub
- [Node.js i Git](https://nodejs.org/)

### Instalacja i konfiguracja

1. Utwórz repozytorium z tego [szablonu](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Sklonuj swoje nowe repozytorium i przejdź do folderu quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Zainstaluj pakiety npm i zależności

   ```bash
   npm install
   ```

### Budowanie aplikacji

1. Aby zbudować rozwiązanie, uruchom:

   ```bash
   npm run build
   ```

### Uruchamianie aplikacji

1. Aby uruchomić rozwiązanie, uruchom:

    ```bash
    npm run dev
    ```

### [Opcjonalne] Lintowanie

1. Aby upewnić się, że kod jest lintowany, uruchom:

    ```bash
    npm run lint
    ```

## Wdrażanie aplikacji Quiz na platformie Azure 

### Wymagania wstępne
- Subskrypcja Azure. Zarejestruj się za darmo [tutaj](https://aka.ms/azure-free).

    _Szacunkowy koszt wdrożenia tej aplikacji quizowej: BEZPŁATNIE_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Po zalogowaniu się na platformie Azure za pomocą powyższego linku, wybierz subskrypcję i grupę zasobów, a następnie:

- Szczegóły aplikacji statycznej: Podaj nazwę i wybierz plan hostingowy
- Logowanie do GitHub: Ustaw źródło wdrożenia jako GitHub, a następnie zaloguj się i wypełnij wymagane pola w formularzu:
    - *Organizacja* – Wybierz swoją organizację.
    - *Repozytorium* – Wybierz repozytorium programu nauczania Web Dev for Beginners. 
    - *Gałąź* - Wybierz gałąź (main) 
- Presety budowania: Azure Static Web Apps używa algorytmu wykrywania do identyfikacji frameworka użytego w Twojej aplikacji. 
    - *Lokalizacja aplikacji* - ./quiz-app
    - *Lokalizacja API* -
    - *Lokalizacja wynikowa* - dist
- Wdrożenie: Kliknij 'Review + Create', a następnie 'Create'

    Po wdrożeniu w katalogu *.github* Twojego repozytorium zostanie utworzony plik workflow. Ten plik workflow zawiera instrukcje dotyczące zdarzeń, które spowodują ponowne wdrożenie aplikacji na platformie Azure, na przykład _**push** na gałęzi **main**_ itp.

    <details>
    <summary>Przykładowy plik workflow</summary>
    Oto przykład, jak może wyglądać plik workflow GitHub Actions:
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

- Po wdrożeniu: Po zakończeniu wdrożenia kliknij 'Go to Deployment', a następnie 'View app in browser'.

Po pomyślnym wykonaniu akcji GitHub (workflow) odśwież stronę na żywo, aby zobaczyć swoją aplikację.

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.