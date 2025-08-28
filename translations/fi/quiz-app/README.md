<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-27T21:10:23+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "fi"
}
-->
# Visailusovellus

Nämä visailut ovat ennen ja jälkeen luentojen tehtäviä data-analytiikan opetusohjelmassa osoitteessa https://aka.ms/webdev-beginners

## Käännöksen lisääminen visailusarjaan

Lisää visailukäännös luomalla vastaavat visailurakenteet `assets/translations`-kansioon. Alkuperäiset visailut löytyvät `assets/translations/en`-kansiosta. Visailut on jaettu useisiin ryhmiin. Varmista, että numerointi vastaa oikeaa visailuosaa. Tässä opetusohjelmassa on yhteensä 40 visailua, ja numerointi alkaa nollasta.

  
<details>
<summary>Tässä on esimerkki käännöstiedoston rakenteesta:</summary>

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

Kun olet muokannut käännöksiä, muokkaa `index.js`-tiedostoa käännöskansiossa tuodaksesi kaikki tiedostot `en`-kansion mukaisilla käytännöillä.

Muokkaa `index.js`-tiedostoa `assets/translations`-kansiossa tuodaksesi uudet käännetyt tiedostot.

Esimerkiksi, jos käännöksesi JSON-tiedosto on nimeltään `ex.json`, tee 'ex' lokalisaatioavain ja lisää se seuraavasti:

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

## Visailusovelluksen suorittaminen paikallisesti

### Esivaatimukset

- GitHub-tili
- [Node.js ja Git](https://nodejs.org/)

### Asennus ja käyttöönotto

1. Luo uusi arkisto tästä [mallista](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Kloonaa uusi arkistosi ja siirry visailusovelluksen kansioon

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Asenna npm-paketit ja riippuvuudet

   ```bash
   npm install
   ```

### Sovelluksen rakentaminen

1. Rakentaaksesi ratkaisun, suorita:

   ```bash
   npm run build
   ```

### Sovelluksen käynnistäminen

1. Käynnistääksesi ratkaisun, suorita:

    ```bash
    npm run dev
    ```

### [Valinnainen] Koodin tarkistus

1. Varmistaaksesi, että koodi on tarkistettu, suorita:

    ```bash
    npm run lint
    ```

## Visailusovelluksen julkaisu Azureen 

### Esivaatimukset
- Azure-tilaus. Rekisteröidy ilmaiseksi [täällä](https://aka.ms/azure-free).

    _Arvioitu kustannus tämän visailusovelluksen julkaisemiselle: ILMAINEN_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Kun olet kirjautunut sisään Azureen yllä olevan linkin kautta, valitse tilaus ja resurssiryhmä, ja tee seuraavat:

- Staattisen verkkosovelluksen tiedot: Anna nimi ja valitse hosting-suunnitelma
- GitHub-kirjautuminen: Aseta GitHub lähteeksi ja kirjaudu sisään täyttääksesi lomakkeen vaaditut kentät:
    - *Organisaatio* – Valitse organisaatiosi.
    - *Arkisto* – Valitse Web Dev for Beginners -opetusohjelman arkisto. 
    - *Haara* - Valitse haara (main) 
- Rakennusasetukset: Azure Static Web Apps käyttää tunnistusalgoritmia sovelluksesi käyttämän kehyksen tunnistamiseen. 
    - *Sovelluksen sijainti* - ./quiz-app
    - *Api-sijainti* -
    - *Tulosteen sijainti* - dist
- Julkaisu: Klikkaa 'Review + Create', sitten 'Create'

    Kun julkaisu on valmis, *.github*-hakemistoon arkistossasi luodaan työnkulku-tiedosto. Tämä työnkulku-tiedosto sisältää ohjeet tapahtumista, jotka käynnistävät sovelluksen uudelleenjulkaisun Azureen, esimerkiksi _**push** haaraan **main**_ jne.

    <details>
    <summary>Esimerkki työnkulku-tiedostosta</summary>
    Tässä on esimerkki GitHub Actions -työnkulku-tiedostosta:
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

- Julkaisun jälkeen: Kun julkaisu on valmis, klikkaa 'Go to Deployment' ja sitten 'View app in browser'.

Kun GitHub Action (työnkulku) on suoritettu onnistuneesti, päivitä live-sivu nähdäksesi sovelluksesi.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.