# Kvízová aplikace

Tyto kvízy slouží jako přednáškové a popřednáškové kvízy pro kurikulum datové vědy na https://aka.ms/webdev-beginners

## Přidání přeložené sady kvízů

Přidejte překlad kvízu vytvořením odpovídajících struktur kvízů ve složkách `assets/translations`. Kanonické kvízy se nacházejí v `assets/translations/en`. Kvízy jsou rozděleny do několika skupin. Ujistěte se, že číslování odpovídá správné sekci kvízu. Celkem je v tomto kurikulu 40 kvízů, přičemž číslování začíná od 0.

  
<details>
<summary>Takto vypadá struktura souboru s překladem:</summary>

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

Po úpravě překladů upravte soubor index.js ve složce s překlady, aby importoval všechny soubory podle konvencí v `en`.

Upravte soubor `index.js` v `assets/translations`, aby importoval nové přeložené soubory.

Například pokud je váš překlad JSON v `ex.json`, nastavte 'ex' jako lokalizační klíč a zadejte jej, jak je uvedeno níže, pro import:

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

## Spuštění kvízové aplikace lokálně

### Předpoklady

- Účet na GitHubu
- [Node.js a Git](https://nodejs.org/)

### Instalace a nastavení

1. Vytvořte repozitář z této [šablony](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Naklonujte svůj nový repozitář a přejděte do složky quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Nainstalujte balíčky npm a závislosti

   ```bash
   npm install
   ```

### Sestavení aplikace

1. Pro sestavení řešení spusťte:

   ```bash
   npm run build
   ```

### Spuštění aplikace

1. Pro spuštění řešení spusťte:

    ```bash
    npm run dev
    ```

### [Volitelné] Lintování

1. Pro zajištění, že je kód lintován, spusťte:

    ```bash
    npm run lint
    ```

## Nasazení kvízové aplikace na Azure 

### Předpoklady
- Předplatné Azure. Zaregistrujte se zdarma [zde](https://aka.ms/azure-free).

    _Odhad nákladů na nasazení této kvízové aplikace: ZDARMA_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Jakmile se přihlásíte na Azure prostřednictvím výše uvedeného odkazu, vyberte předplatné a skupinu prostředků:

- Detaily statické webové aplikace: Zadejte název a vyberte hostingový plán
- Přihlášení na GitHub: Nastavte svůj zdroj nasazení jako GitHub, poté se přihlaste a vyplňte požadovaná pole ve formuláři:
    - *Organizace* – Vyberte svou organizaci.
    - *Repozitář* – Vyberte repozitář kurikula Web Dev for Beginners. 
    - *Větev* - Vyberte větev (main) 
- Předvolby sestavení: Azure Static Web Apps používá detekční algoritmus k určení frameworku použitého ve vaší aplikaci. 
    - *Umístění aplikace* - ./quiz-app
    - *Umístění API* -
    - *Umístění výstupu* - dist
- Nasazení: Klikněte na 'Review + Create', poté na 'Create'

    Po nasazení bude ve složce *.github* vašeho repozitáře vytvořen soubor workflow. Tento soubor workflow obsahuje instrukce o událostech, které spustí opětovné nasazení aplikace na Azure, například _**push** na větev **main**_ atd.

    <details>
    <summary>Příklad souboru workflow</summary>
    Zde je příklad, jak může vypadat soubor workflow GitHub Actions:
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

- Po nasazení: Po dokončení nasazení klikněte na 'Go to Deployment' a poté na 'View app in browser'.

Jakmile bude GitHub Action (workflow) úspěšně proveden, obnovte živou stránku, abyste viděli svou aplikaci.

---

**Upozornění**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Nezodpovídáme za jakékoli nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.