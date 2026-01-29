# Aplicație de Quiz

Aceste quiz-uri sunt quiz-uri pre- și post-lectură pentru curriculumul de știința datelor de la https://aka.ms/webdev-beginners

## Adăugarea unui set de quiz-uri tradus

Adaugă o traducere a quiz-urilor prin crearea unor structuri de quiz corespunzătoare în folderele `assets/translations`. Quiz-urile canonice se află în `assets/translations/en`. Quiz-urile sunt împărțite în mai multe grupuri. Asigură-te că numerotarea se aliniază cu secțiunea corectă de quiz. În total, sunt 40 de quiz-uri în acest curriculum, cu numerotarea începând de la 0.

  
<details>
<summary>Iată structura unui fișier de traducere:</summary>

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

După ce editezi traducerile, editează fișierul index.js din folderul de traduceri pentru a importa toate fișierele conform convențiilor din `en`.

Editează fișierul `index.js` din `assets/translations` pentru a importa noile fișiere traduse.

De exemplu, dacă traducerea ta JSON este în `ex.json`, folosește 'ex' ca cheie de localizare, apoi introdu-o astfel pentru a o importa:

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

## Rulează aplicația de Quiz local

### Cerințe preliminare

- Un cont GitHub
- [Node.js și Git](https://nodejs.org/)

### Instalare și configurare

1. Creează un repository din acest [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clonează noul tău repository și navighează la quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Instalează pachetele npm și dependențele

   ```bash
   npm install
   ```

### Construiește aplicația

1. Pentru a construi soluția, rulează:

   ```bash
   npm run build
   ```

### Pornește aplicația

1. Pentru a rula soluția, rulează:

    ```bash
    npm run dev
    ```

### [Opțional] Linting

1. Pentru a te asigura că codul este verificat, rulează:

    ```bash
    npm run lint
    ```

## Publică aplicația de Quiz pe Azure 

### Cerințe preliminare
- Un abonament Azure. Înscrie-te gratuit [aici](https://aka.ms/azure-free).

    _Estimare de cost pentru publicarea acestei aplicații de quiz: GRATUIT_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

După ce te autentifici pe Azure prin linkul de mai sus, selectează un abonament și un grup de resurse, apoi:

- Detalii despre aplicația web statică: Oferă un nume și selectează un plan de găzduire
- Autentificare GitHub: Setează sursa de publicare ca GitHub, apoi autentifică-te și completează câmpurile necesare din formular:
    - *Organizație* – Alege organizația ta.
    - *Repository* – Selectează repository-ul curriculumului Web Dev for Beginners. 
    - *Branch* - Selectează un branch (main) 
- Presetări de construcție: Azure Static Web Apps folosește un algoritm de detectare pentru a identifica framework-ul utilizat în aplicația ta. 
    - *Locația aplicației* - ./quiz-app
    - *Locația API-ului* -
    - *Locația output-ului* - dist
- Publicare: Click pe 'Review + Create', apoi 'Create'

    După publicare, un fișier workflow va fi creat în directorul *.github* al repository-ului tău. Acest fișier workflow conține instrucțiuni despre evenimentele care vor declanșa o re-publicare a aplicației pe Azure, de exemplu, _un **push** pe branch-ul **main**_ etc.

    <details>
    <summary>Exemplu de fișier Workflow</summary>
    Iată un exemplu de cum ar putea arăta fișierul workflow pentru GitHub Actions:
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

- Post-publicare: După ce publicarea este completă, click pe 'Go to Deployment', apoi 'View app in browser'.

După ce acțiunea GitHub (workflow-ul) este executată cu succes, reîmprospătează pagina live pentru a vedea aplicația ta.

---

**Declinarea responsabilității**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși depunem eforturi pentru a asigura acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm răspunderea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.