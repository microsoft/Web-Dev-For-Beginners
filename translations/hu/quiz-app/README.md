# Kvíz alkalmazás

Ezek a kvízek a data science tananyag előtti és utáni előadásokhoz kapcsolódó kvízek a következő oldalon: https://aka.ms/webdev-beginners

## Fordított kvízkészlet hozzáadása

Adj hozzá egy kvízfordítást úgy, hogy létrehozod a megfelelő kvízstruktúrákat az `assets/translations` mappákban. Az eredeti kvízek az `assets/translations/en` mappában találhatók. A kvízek több csoportba vannak osztva. Ügyelj arra, hogy a számozás igazodjon a megfelelő kvízszekcióhoz. Ebben a tananyagban összesen 40 kvíz található, a számozás 0-tól kezdődik.

  
<details>
<summary>Íme, hogyan néz ki egy fordítási fájl:</summary>

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

A fordítások szerkesztése után szerkeszd a translation mappában található index.js fájlt, hogy importáld az összes fájlt az `en` mappában található konvenciók szerint.

Szerkeszd az `index.js` fájlt az `assets/translations` mappában, hogy importáld az új fordított fájlokat.

Például, ha a fordítás JSON fájlod neve `ex.json`, akkor az 'ex' lesz a lokalizációs kulcs, és az alábbiak szerint add hozzá az importáláshoz:

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

## A Kvíz alkalmazás futtatása helyben

### Előfeltételek

- Egy GitHub fiók
- [Node.js és Git](https://nodejs.org/)

### Telepítés és beállítás

1. Hozz létre egy repót ebből a [sablonból](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Klónozd az új repót, és navigálj a kvíz-alkalmazás mappájába

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Telepítsd az npm csomagokat és függőségeket

   ```bash
   npm install
   ```

### Az alkalmazás felépítése

1. Az alkalmazás felépítéséhez futtasd:

   ```bash
   npm run build
   ```

### Az alkalmazás indítása

1. Az alkalmazás futtatásához futtasd:

    ```bash
    npm run dev
    ```

### [Opcionális] Lintelés

1. A kód lintelésének biztosításához futtasd:

    ```bash
    npm run lint
    ```

## A Kvíz alkalmazás telepítése Azure-ra 

### Előfeltételek
- Egy Azure előfizetés. Itt regisztrálhatsz ingyenesen: [itt](https://aka.ms/azure-free).

    _A kvíz alkalmazás telepítésének becsült költsége: INGYENES_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Miután bejelentkeztél az Azure-ra a fenti linken keresztül, válassz egy előfizetést és egy erőforráscsoportot, majd:

- Statikus webalkalmazás részletei: Adj meg egy nevet, és válassz egy tárhelyi tervet
- GitHub bejelentkezés: Állítsd be a telepítési forrást GitHub-ra, majd jelentkezz be, és töltsd ki az űrlap szükséges mezőit:
    - *Szervezet* – Válaszd ki a szervezetedet.
    - *Repository* – Válaszd ki a Web Dev for Beginners tananyag repóját. 
    - *Branch* - Válassz egy ágat (main) 
- Build Presets: Az Azure Static Web Apps egy észlelési algoritmust használ az alkalmazásodban használt keretrendszer felismerésére. 
    - *App location* - ./quiz-app
    - *Api location* -
    - *Output location* - dist
- Telepítés: Kattints a 'Review + Create', majd a 'Create' gombra.

    Miután a telepítés megtörtént, egy workflow fájl jön létre a repo *.github* könyvtárában. Ez a workflow fájl tartalmazza azokat az eseményeket, amelyek újratelepítést indítanak az alkalmazás Azure-ra, például _egy **push** a **main** ágon stb.

    <details>
    <summary>Példa Workflow fájl</summary>
    Íme, hogyan nézhet ki a GitHub Actions workflow fájl:
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

- Telepítés után: Miután a telepítés befejeződött, kattints a 'Go to Deployment', majd a 'View app in browser' gombra.

Miután a GitHub Action (workflow) sikeresen lefutott, frissítsd az élő oldalt, hogy megtekinthesd az alkalmazásodat.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.