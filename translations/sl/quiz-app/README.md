# Aplikacija za kvize

Ti kvizi so predhodni in zaključni kvizi za učni načrt podatkovne znanosti na https://aka.ms/webdev-beginners

## Dodajanje prevedenega nabora kvizov

Dodajte prevod kviza tako, da ustvarite ustrezne strukture kvizov v mapah `assets/translations`. Izvirni kvizi so v `assets/translations/en`. Kvizi so razdeljeni v več skupin. Poskrbite, da bo številčenje usklajeno z ustreznim delom kviza. V tem učnem načrtu je skupaj 40 kvizov, pri čemer se šteje od 0 naprej.

  
<details>
<summary>Takšna je struktura datoteke s prevodom:</summary>

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

Po urejanju prevodov uredite datoteko index.js v mapi za prevode, da uvozite vse datoteke v skladu s konvencijami v `en`.

Uredite datoteko `index.js` v `assets/translations`, da uvozite nove prevedene datoteke.

Na primer, če je vaš prevod JSON v `ex.json`, nastavite 'ex' kot ključ lokalizacije, nato pa ga vnesite, kot je prikazano spodaj, da ga uvozite.

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

## Zagon aplikacije za kvize lokalno

### Predpogoji

- GitHub račun
- [Node.js in Git](https://nodejs.org/)

### Namestitev in nastavitev

1. Ustvarite repozitorij iz te [predloge](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Klonirajte svoj novi repozitorij in se pomaknite do aplikacije za kvize

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Namestite npm pakete in odvisnosti

   ```bash
   npm install
   ```

### Sestavite aplikacijo

1. Za sestavo rešitve zaženite:

   ```bash
   npm run build
   ```

### Zaženite aplikacijo

1. Za zagon rešitve zaženite:

    ```bash
    npm run dev
    ```

### [Neobvezno] Lintanje

1. Za preverjanje kode zaženite:

    ```bash
    npm run lint
    ```

## Namestitev aplikacije za kvize na Azure 

### Predpogoji
- Naročnina na Azure. Prijavite se za brezplačno [tukaj](https://aka.ms/azure-free).

    _Ocenjeni stroški za namestitev te aplikacije za kvize: BREZPLAČNO_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Ko se prijavite v Azure prek zgornje povezave, izberite naročnino in skupino virov, nato:

- Podrobnosti statične spletne aplikacije: Vnesite ime in izberite načrt gostovanja
- Prijava v GitHub: Nastavite vir namestitve kot GitHub, nato se prijavite in izpolnite zahtevana polja v obrazcu:
    - *Organizacija* – Izberite svojo organizacijo.
    - *Repozitorij* – Izberite repozitorij učnega načrta Web Dev for Beginners. 
    - *Branch* - Izberite vejo (main) 
- Prednastavitve gradnje: Azure Static Web Apps uporablja algoritem za zaznavanje, da zazna okvir, uporabljen v vaši aplikaciji. 
    - *Lokacija aplikacije* - ./quiz-app
    - *Lokacija API-ja* -
    - *Lokacija izhoda* - dist
- Namestitev: Kliknite 'Pregled + Ustvari', nato 'Ustvari'

    Ko je aplikacija nameščena, bo datoteka delovnega toka ustvarjena v imeniku *.github* vašega repozitorija. Ta datoteka delovnega toka vsebuje navodila o dogodkih, ki bodo sprožili ponovno namestitev aplikacije na Azure, na primer _**push** na vejo **main**_ itd.

    <details>
    <summary>Primer datoteke delovnega toka</summary>
    Tukaj je primer, kako bi lahko izgledala datoteka delovnega toka GitHub Actions:
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

- Po namestitvi: Ko je namestitev končana, kliknite 'Pojdi na namestitev', nato 'Ogled aplikacije v brskalniku'.

Ko se vaš GitHub Action (delovni tok) uspešno izvede, osvežite živo stran, da si ogledate svojo aplikacijo.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.