# AGENTS.md

## Projektin yleiskatsaus

Tämä on opetusohjelman arkisto, joka on suunniteltu opettamaan verkkokehityksen perusteita aloittelijoille. Opetusohjelma on kattava 12 viikon kurssi, jonka Microsoft Cloud Advocates on kehittänyt. Se sisältää 24 käytännön oppituntia, jotka käsittelevät JavaScriptiä, CSS:ää ja HTML:ää.

### Keskeiset osat

- **Opetussisältö**: 24 jäsenneltyä oppituntia, jotka on järjestetty projektipohjaisiin moduuleihin
- **Käytännön projektit**: Terrarium, kirjoituspeli, selainlaajennus, avaruuspeli, pankkisovellus, koodieditori ja tekoäly-chat-avustaja
- **Interaktiiviset visailut**: 48 visailua, joissa on 3 kysymystä (ennen/jälkeen oppituntien arvioinnit)
- **Monikielinen tuki**: Automaattiset käännökset yli 50 kielelle GitHub Actionsin avulla
- **Teknologiat**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (tekoälyprojekteihin)

### Arkkitehtuuri

- Opetusarkisto, jossa oppituntipohjainen rakenne
- Jokainen oppituntikansio sisältää README-tiedoston, koodiesimerkkejä ja ratkaisuja
- Erilliset projektit omissa hakemistoissaan (quiz-app, eri oppituntiprojektit)
- Käännösjärjestelmä GitHub Actionsin avulla (co-op-translator)
- Dokumentaatio Docsifyn kautta ja saatavilla PDF-muodossa

## Asennuskomennot

Tämä arkisto on ensisijaisesti tarkoitettu opetussisällön käyttöön. Yksittäisten projektien kanssa työskentelyyn:

### Pääarkiston asennus

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Visailusovelluksen asennus (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Pankkiprojektin API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Selainlaajennusprojektit

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Avaruuspeli-projektit

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Chat-projekti (Python-taustajärjestelmä)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Kehitystyönkulku

### Sisällön tuottajille

1. **Forkkaa arkisto** GitHub-tilillesi
2. **Kloonaa forkattu arkisto** paikallisesti
3. **Luo uusi haara** muutoksillesi
4. Tee muutoksia oppituntisisältöön tai koodiesimerkkeihin
5. Testaa koodimuutokset asiaankuuluvissa projektihakemistoissa
6. Lähetä pull requestit noudattaen osallistumisohjeita

### Oppijoille

1. Forkkaa tai kloonaa arkisto
2. Siirry oppituntihakemistoihin järjestyksessä
3. Lue README-tiedostot jokaisesta oppitunnista
4. Suorita ennakkovisailut osoitteessa https://ff-quizzes.netlify.app/web/
5. Työskentele oppituntihakemistojen koodiesimerkkien parissa
6. Suorita tehtävät ja haasteet
7. Tee jälkivisailut

### Live-kehitys

- **Dokumentaatio**: Suorita `docsify serve` juurihakemistossa (portti 3000)
- **Visailusovellus**: Suorita `npm run dev` quiz-app-hakemistossa
- **Projektit**: Käytä VS Code Live Server -laajennusta HTML-projekteihin
- **API-projektit**: Suorita `npm start` asiaankuuluvissa API-hakemistoissa

## Testausohjeet

### Visailusovelluksen testaus

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Pankki-API:n testaus

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Yleinen testauslähestymistapa

- Tämä on opetusarkisto, jossa ei ole kattavia automatisoituja testejä
- Manuaalinen testaus keskittyy:
  - Koodiesimerkit toimivat ilman virheitä
  - Dokumentaation linkit toimivat oikein
  - Projektien rakennus onnistuu
  - Esimerkit noudattavat parhaita käytäntöjä

### Ennen lähettämistä tarkistettavat asiat

- Suorita `npm run lint` hakemistoissa, joissa on package.json
- Varmista, että markdown-linkit ovat kelvollisia
- Testaa koodiesimerkit selaimessa tai Node.js:ssä
- Tarkista, että käännökset säilyttävät oikean rakenteen

## Koodityyliohjeet

### JavaScript

- Käytä modernia ES6+ syntaksia
- Noudata projektien mukana tulevia ESLint-konfiguraatioita
- Käytä merkityksellisiä muuttuja- ja funktiotunnuksia opetuksen selkeyden vuoksi
- Lisää kommentteja, jotka selittävät käsitteitä oppijoille
- Muotoile Prettierillä, jos se on konfiguroitu

### HTML/CSS

- Semanttiset HTML5-elementit
- Responsiivisen suunnittelun periaatteet
- Selkeät luokkanimikonventiot
- Kommentit, jotka selittävät CSS-tekniikoita oppijoille

### Python

- PEP 8 -tyyliohjeet
- Selkeät, opettavaiset koodiesimerkit
- Tyyppivihjeet, jos ne auttavat oppimisessa

### Markdown-dokumentaatio

- Selkeä otsikkohierarkia
- Koodilohkot, joissa on kielimääritys
- Linkit lisäresursseihin
- Kuvakaappaukset ja kuvat `images/`-hakemistoissa
- Alt-teksti kuvien saavutettavuuden vuoksi

### Tiedostojen organisointi

- Oppitunnit numeroitu järjestyksessä (1-getting-started-lessons, 2-js-basics jne.)
- Jokaisessa projektissa on `solution/` ja usein `start/` tai `your-work/` hakemistot
- Kuvat tallennettu oppituntikohtaisiin `images/`-kansioihin
- Käännökset `translations/{language-code}/` rakenteessa

## Rakennus ja käyttöönotto

### Visailusovelluksen käyttöönotto (Azure Static Web Apps)

Visailusovellus on konfiguroitu Azure Static Web Apps -käyttöönottoa varten:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps -konfiguraatio:
- **Sovelluksen sijainti**: `/quiz-app`
- **Tuotoksen sijainti**: `dist`
- **Työnkulku**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentaation PDF-luonti

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify-dokumentaatio

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Projektikohtaiset rakennukset

Jokaisella projektihakemistolla voi olla oma rakennusprosessi:
- Vue-projektit: `npm run build` luo tuotantopaketit
- Staattiset projektit: Ei rakennusvaihetta, palvele tiedostoja suoraan

## Pull Request -ohjeet

### Otsikkomuoto

Käytä selkeitä, kuvaavia otsikoita, jotka kertovat muutoksen alueen:
- `[Quiz-app] Lisää uusi visailu oppitunnille X`
- `[Lesson-3] Korjaa kirjoitusvirhe terrarium-projektissa`
- `[Translation] Lisää espanjankielinen käännös oppitunnille 5`
- `[Docs] Päivitä asennusohjeet`

### Vaaditut tarkistukset

Ennen PR:n lähettämistä:

1. **Koodin laatu**:
   - Suorita `npm run lint` asiaankuuluvissa projektihakemistoissa
   - Korjaa kaikki lint-virheet ja -varoitukset

2. **Rakennuksen tarkistus**:
   - Suorita `npm run build`, jos sovellettavissa
   - Varmista, ettei rakennusvirheitä ole

3. **Linkkien validointi**:
   - Testaa kaikki markdown-linkit
   - Varmista, että kuvaviittaukset toimivat

4. **Sisällön tarkistus**:
   - Oikolue oikeinkirjoitus ja kielioppi
   - Varmista, että koodiesimerkit ovat oikein ja opettavaisia
   - Tarkista, että käännökset säilyttävät alkuperäisen merkityksen

### Osallistumisvaatimukset

- Hyväksy Microsoft CLA (automaattinen tarkistus ensimmäisessä PR:ssä)
- Noudata [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Katso [CONTRIBUTING.md](./CONTRIBUTING.md) yksityiskohtaisia ohjeita varten
- Viittaa ongelmanumeroihin PR-kuvauksessa, jos sovellettavissa

### Tarkistusprosessi

- PR:t tarkistetaan ylläpitäjien ja yhteisön toimesta
- Opetuksen selkeys on etusijalla
- Koodiesimerkkien tulee noudattaa nykyisiä parhaita käytäntöjä
- Käännökset tarkistetaan tarkkuuden ja kulttuurisen sopivuuden osalta

## Käännösjärjestelmä

### Automaattinen käännös

- Käyttää GitHub Actionsia co-op-translator-työnkululla
- Kääntää automaattisesti yli 50 kielelle
- Lähdetiedostot päähakemistoissa
- Käännetyt tiedostot `translations/{language-code}/` hakemistoissa

### Manuaalisten käännösparannusten lisääminen

1. Etsi tiedosto `translations/{language-code}/` hakemistosta
2. Tee parannuksia säilyttäen rakenne
3. Varmista, että koodiesimerkit toimivat edelleen
4. Testaa lokalisoitu visailusisältö

### Käännöksen metadata

Käännetyt tiedostot sisältävät metadataotsikon:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Virheenkorjaus ja vianetsintä

### Yleiset ongelmat

**Visailusovellus ei käynnisty**:
- Tarkista Node.js-versio (suositus: v14+)
- Poista `node_modules` ja `package-lock.json`, suorita `npm install` uudelleen
- Tarkista porttikonfliktit (oletus: Vite käyttää porttia 5173)

**API-palvelin ei käynnisty**:
- Varmista, että Node.js-versio täyttää vähimmäisvaatimukset (node >=10)
- Tarkista, onko portti jo käytössä
- Varmista, että kaikki riippuvuudet on asennettu `npm install` -komennolla

**Selainlaajennus ei lataudu**:
- Varmista, että manifest.json on oikein muotoiltu
- Tarkista selaimen konsolista virheet
- Noudata selaimen erityisiä laajennuksen asennusohjeita

**Python-chat-projektin ongelmat**:
- Varmista, että OpenAI-paketti on asennettu: `pip install openai`
- Tarkista, että GITHUB_TOKEN ympäristömuuttuja on asetettu
- Tarkista GitHub Models -käyttöoikeudet

**Docsify ei palvele dokumentaatiota**:
- Asenna docsify-cli globaalisti: `npm install -g docsify-cli`
- Suorita arkiston juurihakemistosta
- Tarkista, että `docs/_sidebar.md` on olemassa

### Kehitysympäristövinkit

- Käytä VS Codea Live Server -laajennuksella HTML-projekteihin
- Asenna ESLint- ja Prettier-laajennukset yhtenäistä muotoilua varten
- Käytä selaimen DevToolsia JavaScriptin virheenkorjaukseen
- Vue-projekteihin asenna Vue DevTools -selaimen laajennus

### Suorituskykypohdinnat

- Suuri määrä käännettyjä tiedostoja (yli 50 kieltä) tarkoittaa, että täydet kloonaukset ovat suuria
- Käytä matalaa kloonausta, jos työskentelet vain sisällön parissa: `git clone --depth 1`
- Sulje käännökset pois hauista, kun työskentelet englanninkielisen sisällön parissa
- Rakennusprosessit voivat olla hitaita ensimmäisellä kerralla (npm install, Vite build)

## Tietoturvapohdinnat

### Ympäristömuuttujat

- API-avaimia ei koskaan saa sitouttaa arkistoon
- Käytä `.env`-tiedostoja (jo `.gitignore`-tiedostossa)
- Dokumentoi vaaditut ympäristömuuttujat projektien README-tiedostoissa

### Python-projektit

- Käytä virtuaaliympäristöjä: `python -m venv venv`
- Pidä riippuvuudet ajan tasalla
- GitHub-tunnuksilla tulisi olla vain vähimmäisvaaditut käyttöoikeudet

### GitHub Models -käyttöoikeudet

- Henkilökohtaiset käyttöoikeustunnukset (PAT) vaaditaan GitHub Models -käyttöön
- Tunnukset tulisi tallentaa ympäristömuuttujiin
- Älä koskaan sitouta tunnuksia tai tunnistetietoja

## Lisähuomautuksia

### Kohderyhmä

- Täysin aloittelijat verkkokehityksessä
- Opiskelijat ja itseopiskelijat
- Opettajat, jotka käyttävät opetusohjelmaa luokissaan
- Sisältö on suunniteltu saavutettavaksi ja taitojen asteittaiseen kehittämiseen

### Opetuksellinen filosofia

- Projektipohjainen oppiminen
- Usein toistuvat tietotestit (visailut)
- Käytännön koodausharjoitukset
- Esimerkkejä tosielämän sovelluksista
- Keskittyminen perusteisiin ennen kehyksiä

### Arkiston ylläpito

- Aktiivinen oppijoiden ja osallistujien yhteisö
- Säännölliset päivitykset riippuvuuksiin ja sisältöön
- Ylläpitäjät seuraavat ongelmia ja keskusteluja
- Käännöspäivitykset automatisoitu GitHub Actionsin avulla

### Liittyvät resurssit

- [Microsoft Learn -moduulit](https://docs.microsoft.com/learn/)
- [Student Hub -resurssit](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) suositellaan oppijoille
- Lisäkurssit: Generatiivinen tekoäly, data-analytiikka, ML, IoT-opetusohjelmat saatavilla

### Työskentely yksittäisten projektien kanssa

Yksityiskohtaiset ohjeet yksittäisistä projekteista löytyvät README-tiedostoista:
- `quiz-app/README.md` - Vue 3 visailusovellus
- `7-bank-project/README.md` - Pankkisovellus, jossa on autentikointi
- `5-browser-extension/README.md` - Selainlaajennuksen kehitys
- `6-space-game/README.md` - Canvas-pohjainen pelikehitys
- `9-chat-project/README.md` - Tekoäly-chat-avustajaprojekti

### Monorepo-rakenne

Vaikka tämä ei ole perinteinen monorepo, arkisto sisältää useita itsenäisiä projekteja:
- Jokainen oppitunti on itsenäinen
- Projektit eivät jaa riippuvuuksia
- Työskentele yksittäisten projektien parissa vaikuttamatta muihin
- Kloonaa koko arkisto saadaksesi täyden opetusohjelmakokemuksen

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.