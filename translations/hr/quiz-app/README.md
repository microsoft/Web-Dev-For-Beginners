# Aplikacija za kviz

Ovi kvizovi su uvodni i završni kvizovi za kurikulum znanosti o podacima na https://aka.ms/webdev-beginners

## Dodavanje prevedenog seta kvizova

Dodajte prijevod kviza stvaranjem odgovarajućih struktura kvizova u mapama `assets/translations`. Izvorni kvizovi nalaze se u `assets/translations/en`. Kvizovi su podijeljeni u nekoliko grupa. Pobrinite se da uskladite numeraciju s odgovarajućim dijelom kviza. Ukupno postoji 40 kvizova u ovom kurikulumu, a brojenje počinje od 0.

  
<details>
<summary>Ovako izgleda datoteka prijevoda:</summary>

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

Nakon uređivanja prijevoda, uredite datoteku index.js u mapi prijevoda kako biste uvezli sve datoteke prema konvencijama u `en`.

Uredite datoteku `index.js` u `assets/translations` kako biste uvezli nove prevedene datoteke. 

Na primjer, ako je vaš JSON prijevod u `ex.json`, postavite 'ex' kao ključ lokalizacije, a zatim ga unesite kao što je prikazano dolje za uvoz:

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

## Pokretanje aplikacije za kviz lokalno

### Preduvjeti

- GitHub račun
- [Node.js i Git](https://nodejs.org/)

### Instalacija i postavljanje

1. Kreirajte repozitorij iz ovog [predloška](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Klonirajte svoj novi repozitorij i navigirajte do aplikacije za kviz

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Instalirajte npm pakete i ovisnosti

   ```bash
   npm install
   ```

### Izgradnja aplikacije

1. Za izgradnju rješenja, pokrenite:

   ```bash
   npm run build
   ```

### Pokretanje aplikacije

1. Za pokretanje rješenja, pokrenite:

    ```bash
    npm run dev
    ```

### [Opcionalno] Linting

1. Za provjeru koda, pokrenite:

    ```bash
    npm run lint
    ```

## Postavljanje aplikacije za kviz na Azure 

### Preduvjeti
- Azure pretplata. Prijavite se za besplatnu [ovdje](https://aka.ms/azure-free).

    _Procjena troškova za postavljanje ove aplikacije za kviz: BESPLATNO_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Nakon što se prijavite na Azure putem gornje poveznice, odaberite pretplatu i grupu resursa, zatim:

- Detalji statične web aplikacije: Unesite naziv i odaberite plan hostinga
- GitHub prijava: Postavite izvor postavljanja kao GitHub, zatim se prijavite i ispunite potrebna polja u obrascu:
    - *Organizacija* – Odaberite svoju organizaciju.
    - *Repozitorij* – Odaberite repozitorij kurikuluma Web Dev for Beginners. 
    - *Grana* - Odaberite granu (main) 
- Predlošci za izgradnju: Azure Static Web Apps koristi algoritam za detekciju kako bi otkrio okvir korišten u vašoj aplikaciji. 
    - *Lokacija aplikacije* - ./quiz-app
    - *Lokacija API-ja* -
    - *Lokacija izlaza* - dist
- Postavljanje: Kliknite 'Review + Create', zatim 'Create'

    Nakon postavljanja, datoteka radnog tijeka bit će kreirana u *.github* direktoriju vašeg repozitorija. Ova datoteka radnog tijeka sadrži upute o događajima koji će pokrenuti ponovno postavljanje aplikacije na Azure, na primjer, _**push** na granu **main**_ itd.

    <details>
    <summary>Primjer datoteke radnog tijeka</summary>
    Evo primjera kako bi datoteka radnog tijeka GitHub Actions mogla izgledati:
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

- Nakon postavljanja: Nakon što je postavljanje završeno, kliknite na 'Go to Deployment', zatim 'View app in browser'.

Nakon što se vaš GitHub Action (radni tijek) uspješno izvrši, osvježite stranicu uživo kako biste vidjeli svoju aplikaciju.

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja mogu proizaći iz korištenja ovog prijevoda.