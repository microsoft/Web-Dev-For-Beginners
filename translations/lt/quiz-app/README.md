# Viktorinos programa

Šios viktorinos yra prieš ir po paskaitų skirtos duomenų mokslo mokymo programai adresu https://aka.ms/webdev-beginners

## Kaip pridėti išverstą viktorinų rinkinį

Pridėkite viktorinų vertimą, sukurdami atitinkamas viktorinų struktūras aplanke `assets/translations`. Originalios viktorinos yra aplanke `assets/translations/en`. Viktorinų rinkiniai suskirstyti į kelias grupes. Įsitikinkite, kad numeracija atitinka tinkamą viktorinų sekciją. Šioje mokymo programoje yra iš viso 40 viktorinų, numeracija prasideda nuo 0.

  
<details>
<summary>Štai kaip atrodo vertimo failo struktūra:</summary>

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

Po vertimo redagavimo, redaguokite `index.js` failą vertimų aplanke, kad importuotumėte visus failus pagal `en` konvencijas.

Redaguokite `index.js` failą aplanke `assets/translations`, kad importuotumėte naujus išverstus failus.

Pavyzdžiui, jei jūsų vertimo JSON failas yra `ex.json`, naudokite 'ex' kaip lokalizacijos raktą, tada įveskite jį taip, kaip parodyta žemiau:

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

## Paleiskite viktorinų programą lokaliai

### Reikalavimai

- GitHub paskyra
- [Node.js ir Git](https://nodejs.org/)

### Įdiegimas ir nustatymas

1. Sukurkite saugyklą iš šio [šablono](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Nukopijuokite savo naują saugyklą ir pereikite į aplanką quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Įdiekite npm paketus ir priklausomybes

   ```bash
   npm install
   ```

### Sukurkite programą

1. Norėdami sukurti sprendimą, paleiskite:

   ```bash
   npm run build
   ```

### Paleiskite programą

1. Norėdami paleisti sprendimą, paleiskite:

    ```bash
    npm run dev
    ```

### [Pasirinktinai] Kodo tikrinimas

1. Norėdami užtikrinti, kad kodas būtų patikrintas, paleiskite:

    ```bash
    npm run lint
    ```

## Viktorinų programos diegimas Azure platformoje 

### Reikalavimai
- Azure prenumerata. Užsiregistruokite nemokamai [čia](https://aka.ms/azure-free).

    _Šios viktorinų programos diegimo kaina: NEMOKAMA_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Kai prisijungsite prie Azure per aukščiau pateiktą nuorodą, pasirinkite prenumeratą ir resursų grupę, tada:

- Statinės interneto programos detalės: Įveskite pavadinimą ir pasirinkite talpinimo planą
- GitHub prisijungimas: Nustatykite diegimo šaltinį kaip GitHub, tada prisijunkite ir užpildykite reikiamus laukus formoje:
    - *Organizacija* – Pasirinkite savo organizaciją.
    - *Saugykla* – Pasirinkite Web Dev for Beginners mokymo programos saugyklą. 
    - *Šaka* - Pasirinkite šaką (main) 
- Kūrimo nustatymai: Azure Static Web Apps naudoja aptikimo algoritmą, kad nustatytų jūsų programoje naudojamą sistemą. 
    - *Programos vieta* - ./quiz-app
    - *Api vieta* -
    - *Rezultatų vieta* - dist
- Diegimas: Spustelėkite 'Review + Create', tada 'Create'

    Po diegimo *.github* aplanke jūsų saugykloje bus sukurtas darbo eigos failas. Šis darbo eigos failas apima instrukcijas apie įvykius, kurie inicijuos programos per-diegimą Azure platformoje, pavyzdžiui, _**push** į šaką **main**_ ir pan.

    <details>
    <summary>Pavyzdinis darbo eigos failas</summary>
    Štai kaip gali atrodyti GitHub Actions darbo eigos failas:
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

- Po diegimo: Kai diegimas bus baigtas, spustelėkite 'Go to Deployment', tada 'View app in browser'.

Kai jūsų GitHub Action (darbo eiga) bus sėkmingai įvykdyta, atnaujinkite tiesioginį puslapį, kad pamatytumėte savo programą.

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.