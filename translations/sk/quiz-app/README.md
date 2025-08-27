<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-27T22:51:37+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "sk"
}
-->
# Aplikácia kvízov

Tieto kvízy sú prednáškové a po-prednáškové kvízy pre kurikulum dátovej vedy na https://aka.ms/webdev-beginners

## Pridanie preloženého súboru kvízov

Pridajte preklad kvízov vytvorením zodpovedajúcich štruktúr kvízov v priečinku `assets/translations`. Kanonické kvízy sa nachádzajú v `assets/translations/en`. Kvízy sú rozdelené do niekoľkých skupín. Uistite sa, že číslovanie je zarovnané s príslušnou sekciou kvízov. Celkovo je v tomto kurikule 40 kvízov, pričom číslovanie začína od 0.

  
<details>
<summary>Tu je štruktúra prekladového súboru:</summary>

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

Po úprave prekladov upravte súbor index.js v priečinku prekladov tak, aby importoval všetky súbory podľa konvencií v `en`.

Upravte súbor `index.js` v `assets/translations`, aby importoval nové preložené súbory. 

Napríklad, ak je váš prekladový JSON v `ex.json`, nastavte 'ex' ako lokalizačný kľúč a potom ho zadajte takto, aby ste ho importovali:

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

## Spustenie aplikácie kvízov lokálne

### Predpoklady

- Účet na GitHub
- [Node.js a Git](https://nodejs.org/)

### Inštalácia a nastavenie

1. Vytvorte repozitár z tejto [šablóny](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Naklonujte svoj nový repozitár a prejdite do priečinka quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Nainštalujte npm balíčky a závislosti

   ```bash
   npm install
   ```

### Vytvorenie aplikácie

1. Na vytvorenie riešenia spustite:

   ```bash
   npm run build
   ```

### Spustenie aplikácie

1. Na spustenie riešenia spustite:

    ```bash
    npm run dev
    ```

### [Voliteľné] Lintovanie

1. Na zabezpečenie správneho lintovania kódu spustite:

    ```bash
    npm run lint
    ```

## Nasadenie aplikácie kvízov na Azure 

### Predpoklady
- Predplatné na Azure. Zaregistrujte sa zadarmo [tu](https://aka.ms/azure-free).

    _Odhad nákladov na nasadenie tejto aplikácie kvízov: ZADARMO_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Po prihlásení na Azure cez vyššie uvedený odkaz vyberte predplatné a skupinu zdrojov, potom:

- Detaily statickej webovej aplikácie: Zadajte názov a vyberte hostingový plán
- Prihlásenie na GitHub: Nastavte zdroj nasadenia ako GitHub, potom sa prihláste a vyplňte požadované polia vo formulári:
    - *Organizácia* – Vyberte svoju organizáciu.
    - *Repozitár* – Vyberte repozitár kurikula Web Dev for Beginners. 
    - *Vetva* - Vyberte vetvu (main) 
- Prednastavenia zostavenia: Azure Static Web Apps používa detekčný algoritmus na zistenie frameworku použitého vo vašej aplikácii. 
    - *Umiestnenie aplikácie* - ./quiz-app
    - *Umiestnenie API* -
    - *Umiestnenie výstupu* - dist
- Nasadenie: Kliknite na 'Review + Create', potom 'Create'

    Po nasadení bude vo vašom repozitári v adresári *.github* vytvorený súbor workflow. Tento súbor workflow obsahuje inštrukcie o udalostiach, ktoré spustia opätovné nasadenie aplikácie na Azure, napríklad _**push** na vetvu **main**_ atď.

    <details>
    <summary>Príklad súboru workflow</summary>
    Tu je príklad, ako môže vyzerať súbor workflow pre GitHub Actions:
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

- Po nasadení: Po dokončení nasadenia kliknite na 'Go to Deployment' a potom na 'View app in browser'.

Keď sa váš GitHub Action (workflow) úspešne vykoná, obnovte živú stránku, aby ste si mohli pozrieť svoju aplikáciu.

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.