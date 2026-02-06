# AGENTS.md

## Projektin yleiskuvaus

Tämä on opetussisältöjen arkisto, joka on tarkoitettu web-kehityksen perusteiden opettamiseen aloittelijoille. Opetussuunnitelma on kattava 12 viikon kurssi, jonka ovat kehittäneet Microsoft Cloud Advocates -tiimi, ja se sisältää 24 käytännön oppituntia käsitellen JavaScriptiä, CSS:ää ja HTML:ää.

### Keskeiset osat

- **Opetussisältö**: 24 rakenteellista oppituntia projektipohjaisissa moduuleissa
- **Käytännön projektit**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor ja AI Chat Assistant
- **Interaktiiviset visailut**: 48 visaa, joissa jokaisessa 3 kysymystä (ennakoivat/jälkeiset arvioinnit)
- **Monikielinen tuki**: Automaattiset käännökset yli 50 kielelle GitHub Actionsin kautta
- **Teknologiat**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI-projekteihin)

### Arkkitehtuuri

- Opetussisältöihin perustuva arkisto oppituntirakenteella
- Jokaisessa oppituntikansiossa README, koodiesimerkit ja ratkaisut
- Erilliset projektit omissa hakemistoissaan (quiz-app, erilaiset oppimisprojektit)
- Käännösjärjestelmä GitHub Actionsin avulla (co-op-translator)
- Dokumentaatio tarjolla Docsifyn kautta ja PDF-muodossa

## Asennuskomennot

Tätä arkistoa käytetään pääasiassa opetussisällön kuluttamiseen. Työskenneltäessä tiettyjen projektien parissa:

### Pääarkiston asennus

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz Appin asennus (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Käynnistä kehityspalvelin
npm run build      # Rakenna tuotantoon
npm run lint       # Suorita ESLint
```

### Pankkiprojektin API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Käynnistä API-palvelin
npm run lint       # Suorita ESLint
npm run format     # Muotoile Prettierillä
```

### Selaimen laajennusprojektit

```bash
cd 5-browser-extension/solution
npm install
# Noudata selaimen erityisiä laajennuksen latausohjeita
```

### Space Game -projektit

```bash
cd 6-space-game/solution
npm install
# Avaa index.html selaimessa tai käytä Live Serveriä
```

### Chat-projekti (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Aseta GITHUB_TOKEN-ympäristömuuttuja
python api.py
```

## Kehitysprosessi

### Sisällöntuottajille

1. **Tee oma fork** arkistosta GitHub-tilillesi
2. **Kloonaa fork paikallisesti**
3. **Luo uusi haara** muutoksillesi
4. Tee muutoksia oppituntisisältöön tai koodiesimerkkeihin
5. Testaa tekemäsi koodimuutokset asianmukaisissa projektihakemistoissa
6. Lähetä pull requesteja noudattaen kontribuutiokäytäntöjä

### Oppijoille

1. Tee fork tai kloonaa arkisto
2. Siirry oppituntikansioihin peräkkäin
3. Lue jokaisen oppitunnin README-tiedostot
4. Suorita ennakkovisailut osoitteessa https://ff-quizzes.netlify.app/web/
5. Työstä koodiesimerkkejä oppituntikansioissa
6. Suorita tehtävät ja haasteet
7. Osallistu jälkeisiin visoihin

### Live-kehitys

- **Dokumentaatio**: Käynnistä `docsify serve` juurikansiossa (portti 3000)
- **Quiz App**: Käynnistä `npm run dev` quiz-app-hakemistossa
- **Projektit**: Käytä VS Code Live Server -laajennusta HTML-projekteille
- **API-projektit**: Käynnistä `npm start` vastaavissa API-hakemistoissa

## Testausohjeet

### Quiz Appin testaus

```bash
cd quiz-app
npm run lint       # Tarkista koodityylivirheet
npm run build      # Varmista, että käännös onnistuu
```

### Bank API:n testaus

```bash
cd 7-bank-project/api
npm run lint       # Tarkista koodityyliongelmat
node server.js     # Varmista, että palvelin käynnistyy ilman virheitä
```

### Yleinen testauslähestymistapa

- Tämä on opetussisältöarkisto ilman kattavia automatisoituja testejä
- Manuaalinen testaus keskittyy:
  - Koodiesimerkkien virheettömään suoritukseen
  - Dokumentaation linkkien toimivuuteen
  - Projektien onnistuneeseen kääntämiseen
  - Esimerkkien oikeellisuuteen ja käytäntöjen noudattamiseen

### Tarkistukset ennen lähettämistä

- Suorita `npm run lint` hakemistoissa, joissa on package.json
- Varmista markdown-linkkien toimivuus
- Testaa koodiesimerkit selaimessa tai Node.js:ssä
- Tarkista, että käännökset säilyttävät oikean rakenteen

## Koodityyliohjeet

### JavaScript

- Käytä modernia ES6+-syntaksia
- Noudata projektien ESLint-konfiguraatioita
- Käytä merkityksellisiä muuttuja- ja funktioiden nimiä opetuksellisuuden vuoksi
- Lisää kommentteja oppijan havainnollistamiseksi
- Muotoile Prettierillä, jos se on määritetty

### HTML/CSS

- Semanttiset HTML5-elementit
- Responsiivisen suunnittelun periaatteet
- Selkeät luokkien nimikäytännöt
- Kommentit CSS-tekniikoiden selittämiseen oppijoille

### Python

- PEP 8 -tyylistandardit
- Selkeät, opetukselliset koodiesimerkit
- Tyyppivihjeet oppimisen tukemiseksi

### Markdown-dokumentaatio

- Selkeä otsikkohierarkia
- Koodilohkot kielimäärittelyllä
- Linkit lisäresursseihin
- Kuvankaappauksia ja kuvia `images/`-hakemistoissa
- Kuvien alt-tekstit saavutettavuuden vuoksi

### Tiedostojen järjestely

- Oppitunnit numeroitu peräkkäin (1-getting-started-lessons, 2-js-basics jne.)
- Jokaisella projektilla on `solution/` ja usein myös `start/` tai `your-work/`-hakemistot
- Kuvat tallennettuna oppituntikohtaisiin `images/`-kansioihin
- Käännökset `translations/{language-code}/` -rakenteessa

## Kääntäminen ja julkaisu

### Quiz Appin julkaisu (Azure Static Web Apps)

Quiz-app on konfiguroitu Azure Static Web Apps -julkaisua varten:

```bash
cd quiz-app
npm run build      # Luo dist/ kansion
# Julkaisee GitHub Actions -työnkulun kautta, kun tehdään push mainiin
```

Azure Static Web Apps -konfiguraatio:
- **Sovelluksen sijainti**: `/quiz-app`
- **Tulostuskansio**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentaation PDF-luonti

```bash
npm install                    # Asenna docsify-to-pdf
npm run convert               # Luo PDF dokumentaatiosta
```

### Docsify-dokumentaatio

```bash
npm install -g docsify-cli    # Asenna Docsify globaalisti
docsify serve                 # Palvele paikallisessa isännässä portissa 3000
```

### Projektikohtaiset käännökset

Jokaisella projektihakemistolla voi olla oma build-prosessinsa:
- Vue-projekteilla: `npm run build` luo tuotantopakettit
- Staattisilla projekteilla: Ei erillistä käännöstä, tarjoillaan tiedostot suoraan

## Pull request -ohjeet

### Otsikkomuoto

Käytä selkeitä ja kuvaavia otsikoita, jotka osoittavat muutoksen kohteen:
- `[Quiz-app] Lisää uusi visa oppitunnille X`
- `[Lesson-3] Korjaa kirjoitusvirhe terrarium-projektissa`
- `[Translation] Lisää espanjan käännös oppitunnille 5`
- `[Docs] Päivitä asennusohjeet`

### Pakolliset tarkistukset

Ennen PR:n lähettämistä:

1. **Koodin laatu**:
   - Suorita `npm run lint` vaikuttavissa projektihakemistoissa
   - Korjaa kaikki lint-virheet ja varoitukset

2. **Käännösten varmistus**:
   - Suorita `npm run build` tarvittaessa
   - Varmista ettei käännösvirheitä esiinny

3. **Linkkien tarkistus**:
   - Testaa kaikki markdown-linkit
   - Varmista kuvaviittausten toimivuus

4. **Sisällön tarkastus**:
   - Tarkista oikeinkirjoitus ja kielioppi
   - Varmista koodiesimerkkien oikeellisuus ja opetuksellisuus
   - Tarkista käännösten pysyvyys alkuperäisessä merkityksessä

### Kontribuution vaatimukset

- Hyväksy Microsoft CLA (automaattinen tarkistus ensimmäisessä PR:ssä)
- Noudata [Microsoft Open Source Code of Conductia](https://opensource.microsoft.com/codeofconduct/)
- Katso [CONTRIBUTING.md](./CONTRIBUTING.md) yksityiskohtaiset ohjeet
- Viittaa issue-numeroihin PR-kuvauksessa, jos mahdollista

### Tarkastusprosessi

- PR:t tarkastetaan ylläpitäjien ja yhteisön toimesta
- Opetuksellisen selkeyden korostaminen
- Koodiesimerkkien noudattavan parhaimpia käytäntöjä
- Käännökset arvioidaan tarkkuuden ja kulttuurisen sopivuuden perusteella

## Käännösjärjestelmä

### Automaattinen käännös

- Käyttää GitHub Actionsin co-op-translator workflow’ta
- Kääntää yli 50 kielelle automaattisesti
- Lähdetiedostot pääkansioissa
- Käännetyt tiedostot `translations/{language-code}/` -hakemistoissa

### Manuaalisten käännösten parannukset

1. Etsi tiedosto `translations/{language-code}/` -hakemistosta
2. Tee parannuksia säilyttäen rakenne
3. Varmista, että koodiesimerkit toimivat edelleen
4. Testaa paikallistetut visasisällöt

### Käännösten metadata

Käännetyissä tiedostoissa on metadataotsikko:
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

## Virheenkorjaus ja ongelmanratkaisu

### Yleiset ongelmat

**Quiz app ei käynnisty**:
- Tarkista Node.js:n versio (v14+ suositeltu)
- Poista `node_modules` ja `package-lock.json`, suorita `npm install` uudelleen
- Tarkista porttikonfliktit (Vite käyttää oletuksena porttia 5173)

**API-palvelin ei käynnisty**:
- Varmista, että Node.js-versio on vähintään 10
- Tarkista, onko portti jo käytössä
- Varmista, että kaikki riippuvuudet on asennettu `npm install` -komennolla

**Selaimen laajennusta ei ladata**:
- Varmista, että manifest.json on oikein muotoiltu
- Tarkista selaimen konsoli virheiden varalta
- Seuraa selaimen laajennuksen asennusohjeita

**Python-chat-projektin ongelmat**:
- Varmista OpenAI-paketin asennus: `pip install openai`
- Tarkista, että GITHUB_TOKEN-ympäristömuuttuja on asetettu
- Tarkista GitHub Models -käyttöoikeudet

**Docsify ei palvele dokumentaatiota**:
- Asenna docsify-cli globaalisti: `npm install -g docsify-cli`
- Käynnistä arkiston juuresta
- Tarkista, että `docs/_sidebar.md` on olemassa

### Kehitysympäristön vinkkejä

- Käytä VS Codea Live Server -laajennuksella HTML-projekteille
- Asenna ESLint ja Prettier yhdenmukaista muotoilua varten
- Käytä selaimen DevToolsia JavaScriptin virheenkorjaukseen
- Vue-projekteissa asenna Vue DevTools -selaimen lisäosa

### Suorituskyvyn huomioita

- Suuri määrä käännettyjä tiedostoja (50+) tekee koko kloonauksesta raskaan
- Käytä matalaa kloonausta sisällön muokkaamiseen: `git clone --depth 1`
- Poista käännökset haun kohteista työskennellessäsi englanninkielisen sisällön kanssa
- Käännösprosessit voivat olla hitaita ensimmäisellä suorituksella (npm install, Vite build)

## Turvallisuusnäkökulmat

### Ympäristömuuttujat

- API-avaimia ei tule koskaan sitoa arkistoon
- Käytä `.env`-tiedostoja (jo sisältyy `.gitignoreen`)
- Dokumentoi tarvittavat ympäristömuuttujat projektin README-tiedostoissa

### Python-projektit

- Käytä virtuaaliympäristöjä: `python -m venv venv`
- Pidä riippuvuudet ajan tasalla
- GitHub-tunnuksilla tulee olla vain tarvittavat oikeudet

### GitHub Models -käyttö

- Henkilökohtaiset access tokenit (PAT) vaaditaan GitHub Models -käyttöön
- Tokenit tulee tallentaa ympäristömuuttujiin
- Älä koskaan lähetä tokeneita tai tunnisteita arkistoon

## Lisähuomiot

### Kohdeyleisö

- Täysin web-kehityksen aloittelijat
- Opiskelijat ja itseopiskelijat
- Opettajat, jotka käyttävät opetussuunnitelmaa luokkahuoneissa
- Sisältö on suunniteltu saavutettavaksi ja taidot rakentavaksi

### Opetuksellinen filosofia

- Projektipohjainen oppiminen
- Säännölliset tietojen tarkastukset (visat)
- Käytännön koodausharjoitukset
- Todelliset sovellus-esimerkit
- Painotus perusteissa ennen frameworkkeja

### Arkiston ylläpito

- Aktiivinen yhteisö oppijoita ja kontribuoijia
- Säännölliset päivitykset riippuvuuksiin ja sisältöön
- Issueiden ja keskustelujen valvonta ylläpitäjien toimesta
- Käännösten päivitykset automatisoitu GitHub Actionsilla

### Liittyvät resurssit

- [Microsoft Learn -moduulit](https://docs.microsoft.com/learn/)
- [Student Hub -resurssit](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) suositellaan oppijoille
- Lisäkurssit: Generatiivinen AI, Data Science, ML, IoT opetussuunnitelmat saatavilla

### Työskentely tietyissä projekteissa

Yksityiskohtaiset ohjeet löytyvät projektien README-tiedostoista:
- `quiz-app/README.md` - Vue 3 visasovellus
- `7-bank-project/README.md` - Pankkisovellus autentikoinnilla
- `5-browser-extension/README.md` - Selaimen laajennuskehitys
- `6-space-game/README.md` - Canvas-pohjainen peli
- `9-chat-project/README.md` - AI-chat-avustajan projekti

### Monorepo-rakenne

Tämä ei ole perinteinen monorepo, mutta sisältää useita itsenäisiä projekteja:
- Jokainen oppitunti on itsenäinen kokonaisuus
- Projektit eivät jaa riippuvuuksia
- Työskentele yksittäisten projektien parissa vaikuttamatta muihin
- Kloonaa koko arkisto saadaksesi täydellisen opetussuunnitelman kokemuksen

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastuuvapauslauseke**:
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Pyrimme tarkkuuteen, mutta ota huomioon, että automaattikäännöksissä saattaa esiintyä virheitä tai epätarkkuuksia. Alkuperäinen asiakirja omalla kielellään on virallinen lähde. Tärkeissä asioissa suosittelemme ammattimaista ihmiskäännöstä. Emme ole vastuussa mahdollisista väärinymmärryksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->