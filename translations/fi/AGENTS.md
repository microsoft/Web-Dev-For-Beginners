# AGENTS.md

## Projektin yleiskuvaus

Tämä on opetuskokonaisuus, joka sisältää verkkokehityksen perusteiden opettamisen aloittelijoille. Opetussuunnitelma on kattava 12 viikon kurssi, jonka ovat kehittäneet Microsoft Cloud Advocates -tiimin jäsenet. Kurssi koostuu 24 käytännön oppitunnista, joissa käydään läpi JavaScriptiä, CSS:ää ja HTML:ää.

### Keskeiset osat

- **Koulutussisältö**: 24 jäsenneltyä oppituntia, jotka on järjestetty projektipohjaisiin moduuleihin
- **Käytännön projektit**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor ja AI Chat Assistant
- **Interaktiiviset tietokilpailut**: 48 tietokilpailua, joissa jokaisessa on 3 kysymystä (ennakko-/jälkitestit)
- **Monikielinen tuki**: Automaattinen käännös yli 50 kielelle GitHub Actions -työkalun avulla
- **Teknologiat**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI-projekteihin)

### Arkkitehtuuri

- Opetussisältöarkisto oppituntipohjaisella rakenteella
- Jokainen oppituntikansio sisältää README-tiedoston, koodiesimerkit ja ratkaisut
- Erilliset projektit omissa hakemistoissaan (quiz-app, eri oppiprojektit)
- Käännösjärjestelmä GitHub Actions -työkalun (co-op-translator) avulla
- Dokumentaatio tarjotaan Docsify:n kautta ja on saatavilla PDF-muodossa

## Asennuskomennot

Tätä arkistoa käytetään ensisijaisesti opetussisällön kuluttamiseen. Työskentelyä varten omien projektien kanssa:

### Pääarkiston asennus

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz-sovelluksen asennus (Vue 3 + Vite)

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

### Selaimen laajennus -projektit

```bash
cd 5-browser-extension/solution
npm install
# Noudata selaimen erityisiä laajennusten latausohjeita
```

### Avaruuspeli-projektit

```bash
cd 6-space-game/solution
npm install
# Avaa index.html selaimessa tai käytä Live Serveriä
```

### Chat-projekti (Python-taustapalvelu)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Aseta GITHUB_TOKEN-ympäristömuuttuja
python api.py
```

## Kehitystyön työnkulku

### Sisällöntuottajille

1. **Tee fork** arkistosta omaan GitHub-tiliisi
2. **Kloonaa fork** paikallisesti
3. **Luo uusi haara** muutoksiasi varten
4. Tee muutoksia oppitunneissa tai koodiesimerkeissä
5. Testaa muutokset asianmukaisissa projektihakemistoissa
6. Lähetä pull request -pyyntöjä osallistumisohjeiden mukaisesti

### Oppijoille

1. Tee fork tai kloonaa arkisto
2. Siirry oppituntihakemistoihin järjestyksessä
3. Lue kunkin oppitunnin README-tiedostot
4. Tee ennakkotehtävät osoitteessa https://ff-quizzes.netlify.app/web/
5. Käy läpi koodiesimerkit oppituntikansioissa
6. Tee tehtävät ja haasteet
7. Suorita jälkitestit

### Kehitys livenä

- **Dokumentaatio**: Suorita `docsify serve` juurikansiossa (portti 3000)
- **Quiz-sovellus**: Suorita `npm run dev` quiz-app-hakemistossa
- **Projektit**: Käytä VS Code Live Server -laajennusta HTML-projekteihin
- **API-projektit**: Suorita `npm start` niille varatuissa API-kansioissa

## Testausohjeet

### Quiz-sovelluksen testaus

```bash
cd quiz-app
npm run lint       # Tarkista koodityylin ongelmat
npm run build      # Varmista, että käännös onnistuu
```

### Bank API:n testaus

```bash
cd 7-bank-project/api
npm run lint       # Tarkista koodityylin ongelmat
node server.js     # Varmista, että palvelin käynnistyy ilman virheitä
```

### Yleinen testauslähestymistapa

- Tämä on opetuskäyttöön tarkoitettu arkisto ilman kattavia automatisoituja testejä
- Manuaalitestaus painottuu:
  - Koodiesimerkkien virheettömään suorittamiseen
  - Dokumentaation linkkien toimivuuteen
  - Projektien onnistuneeseen käännökseen
  - Esimerkkien noudattavan parhaita käytäntöjä

### Ennen lähettämistä tehtävät tarkistukset

- Suorita `npm run lint` kansioissa, joissa on package.json
- Varmista, että markdown-linkit ovat toimivia
- Testaa koodiesimerkit selaimessa tai Node.js:ssä
- Tarkista, että käännökset säilyttävät rakenteen

## Koodityyliohjeet

### JavaScript

- Käytä nykyaikaista ES6+-syntaksia
- Noudata projektien tarjoamia ESLint-asetuksia
- Käytä selkeitä muuttuja- ja funktioiden nimiä opetuksellisuuden vuoksi
- Lisää kommentteja, jotka selittävät käsitteitä oppijoille
- Muotoile Prettierillä, jos se on määritelty

### HTML/CSS

- Semanttiset HTML5-elementit
- Responsiivisen suunnittelun periaatteet
- Selkeät luokkien nimeämiskäytännöt
- Kommentit, jotka selittävät CSS-tekniikoita oppijoille

### Python

- PEP 8 -tyyliohjeet
- Selkeät ja opetukselliset koodiesimerkit
- Tyyppivihjeet oppimisen tukena

### Markdown-dokumentaatio

- Selkeä otsikkorakenne
- Koodilohkot, joissa kielimääritys
- Linkit lisämateriaaleihin
- Kuvakaappaukset ja kuvat `images/`-hakemistoissa
- Vaihtoehtoinen teksti kuville saavutettavuuden vuoksi

### Tiedostojen organisointi

- Oppitunnit numeroitu peräkkäin (1-getting-started-lessons, 2-js-basics jne.)
- Jokaisessa projektissa on `solution/` ja usein `start/` tai `your-work/` -hakemistot
- Kuvia säilytetään oppituntikohtaisissa `images/`-kansioissa
- Käännökset kansiorakenteessa `translations/{language-code}/`

## Käännös- ja käyttöönotto

### Quiz-sovelluksen käyttöönotto (Azure Static Web Apps)

Quiz-sovellus on konfiguroitu Azure Static Web Apps -käyttöönottoa varten:

```bash
cd quiz-app
npm run build      # Luo dist/ -kansion
# Ottaa käyttöön GitHub Actions -työnkulun päivityksessä mainiin
```

Azure Static Web Apps -asetukset:
- **Sovelluksen sijainti**: `/quiz-app`
- **Tulostehakemisto**: `dist`
- **Työnkulku**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentaation PDF-generointi

```bash
npm install                    # Asenna docsify-to-pdf
npm run convert               # Luo PDF docs-sisällöstä
```

### Docsify-dokumentaatio

```bash
npm install -g docsify-cli    # Asenna Docsify globaalisti
docsify serve                 # Tarjoa paikallisesti osoitteessa localhost:3000
```

### Projektikohtaiset käännökset

Jokaisella projektihakemistolla voi olla oma rakennusprosessi:
- Vue-projekteilla: `npm run build` tuottaa tuotantopaketteja
- Staattisissa projekteissa ei ole erillistä rakennusvaihetta, tiedostot palvellaan suoraan

## Pull Request -ohjeet

### Otsikon muotoilu

Käytä selkeitä ja kuvaavia otsikoita, jotka kertovat muutoksen alueen:
- `[Quiz-app] Lisää uusi tietovisa oppitunnille X`
- `[Lesson-3] Korjaa kirjoitusvirhe terrarium-projektissa`
- `[Translation] Lisää espanjankielinen käännös oppitunnille 5`
- `[Docs] Päivitä asennusohjeet`

### Vaatimukset ennen lähettämistä

1. **Koodin laatu**:
   - Suorita `npm run lint` vaikutuksen alaisissa projektin kansioissa
   - Korjaa kaikki mahdolliset lint-virheet ja varoitukset

2. **Rakennuksen varmistus**:
   - Suorita tarvittaessa `npm run build`
   - Varmista, ettei rakennuksessa ole virheitä

3. **Linkkien tarkastus**:
   - Testaa kaikki markdown-linkit toimiviksi
   - Varmista kuvaviittausten toimivuus

4. **Sisällön tarkastus**:
   - Tarkista kirjoitus- ja kielioppivirheet
   - Varmista, että koodiesimerkit ovat oikein ja opetuksellisia
   - Tarkista käännösten tarkkuus ja alkuperäisen säilyminen

### Osallistumisen vaatimukset

- Hyväksy Microsoft CLA (automaattinen tarkistus ensimmäisessä PR:ssä)
- Noudata [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) -käyttäytymisohjetta
- Lue yksityiskohtaiset ohjeet [CONTRIBUTING.md](./CONTRIBUTING.md)-tiedostosta
- Mainitse PR-kuvauksessa asiaankuuluvat issue-numerot

### Tarkistusprosessi

- PR:t tarkistetaan ylläpitäjien ja yhteisön toimesta
- Opetuksellinen selkeys on etusijalla
- Koodiesimerkkien tulee noudattaa hyviä käytäntöjä
- Käännökset tarkistetaan oikeellisuuden ja kulttuurisen sopivuuden osalta

## Käännösjärjestelmä

### Automaattinen käännös

- Käyttää GitHub Actionsia co-op-translator-työnkululla
- Kääntää automaattisesti yli 50 kielelle
- Lähtötiedostot ovat päähakemistoissa
- Käännetyt tiedostot sijaitsevat `translations/{language-code}/`-kansioissa

### Käsin tehtävien parannusten lisääminen

1. Etsi tiedosto kansiosta `translations/{language-code}/`
2. Tee parannuksia rakenteen säilyttäen
3. Varmista, että koodiesimerkit toimivat edelleen
4. Testaa lokalisoitu tietovisasisältö

### Käännösmetadata

Käännetyt tiedostot sisältävät metatietopäätettä:
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

### Yleisiä ongelmia

**Quiz-sovellus ei käynnisty**:
- Tarkista Node.js:n versio (v14+ suositeltu)
- Poista `node_modules` ja `package-lock.json`, suorita `npm install` uudelleen
- Tarkista, ettei portti ole varattu (Viten oletusportti 5173)

**API-palvelin ei käynnisty**:
- Varmista, että Node.js:n versio on vähintään 10
- Tarkista portin varaus
- Varmista, että kaikki riippuvuudet on asennettu komennolla `npm install`

**Selaimen laajennus ei lataudu**:
- Tarkista, että manifest.json on oikein muotoiltu
- Tarkista selainkonsoli virheilmoituksille
- Noudata selaimen laajennuksen asennusohjeita

**Python-chat-projektin ongelmat**:
- Varmista, että OpenAI-paketti on asennettu: `pip install openai`
- Tarkista GITHUB_TOKEN-ympäristömuuttuja
- Varmista GitHub-mallien käyttöoikeudet

**Docsify ei tarjoa dokumentaatiota**:
- Asenna docsify-cli globaalisti: `npm install -g docsify-cli`
- Aja komento arkiston juurihakemistosta
- Varmista, että `docs/_sidebar.md` on olemassa

### Kehitysympäristövinkkejä

- Käytä VS Codea Live Server -laajennuksella HTML-projekteissa
- Asenna ESLint- ja Prettier-laajennukset yhtenäiseen muotoiluun
- Hyödynnä selaimen kehittäjätyökaluja JavaScriptin virheenkorjaukseen
- Vue-projekteissa asenna Vue DevTools -selaimen laajennus

### Suorituskykysiirtymät

- Suuri määrä käännettyjä tiedostoja (yli 50 kieltä) tekee kloonauksesta raskaan
- Käytä kevyttä kloonausta, jos työskentelet vain sisällön parissa: `git clone --depth 1`
- Sulje käännökset hausta, kun työskentelet englanninkielisen sisällön parissa
- Rakennusprosessit voivat olla hitaita ensimmäisellä suorituskerroilla (npm install, Vite build)

## Turvallisuusseikat

### Ympäristömuuttujat

- API-avaimia ei saa koskaan tallentaa arkistoon
- Käytä `.env`-tiedostoja (joita ei ole versioitu)
- Dokumentoi vaaditut ympäristömuuttujat projektien READMEissa

### Python-projektit

- Käytä virtuaaliympäristöjä: `python -m venv venv`
- Pidä riippuvuudet ajan tasalla
- GitHub-tokenien käyttöoikeudet tulee olla mahdollisimman rajatut

### GitHub-mallien käyttöoikeus

- Personaaliset käyttöoikeustokenit (PAT) vaaditaan GitHub-malleihin
- Tokenit tulee säilyttää ympäristömuuttujina
- Älä koskaan tallenna tokeneita tai tunnistetietoja arkistoon

## Lisätiedot

### Kohdeyleisö

- Täysin aloittelijat verkkokehityksessä
- Opiskelijat ja itseopiskelijat
- Opettajat, jotka käyttävät opetussuunnitelmaa luokkahuoneissa
- Sisältö on suunniteltu saavutettavaksi ja asteittaisen taitojen kehittämiseen

### Opetuksellinen filosofia

- Projektipohjainen oppiminen
- Usein toistuvat tietovisat tiedon tarkistamiseen
- Käytännön ohjelmointiharjoitukset
- Todelliset sovellusesimerkit
- Perusteiden hallinta ennen kehysten käyttöä

### Arkiston ylläpito

- Aktiivinen oppijoiden ja osallistujien yhteisö
- Riittävä päivitystiheys riippuvuuksiin ja sisältöön
- Issue-ja keskusteluseuranta ylläpitäjien toimesta
- Käännösten päivitykset automatisoitu GitHub Actionsin kautta

### Lisäresurssit

- [Microsoft Learn -moduulit](https://docs.microsoft.com/learn/)
- [Student Hub -resurssit](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) suositeltu oppijoille
- Lisäkursseja: Generatiivinen AI, Data Science, ML, IoT opetussuunnitelmat saatavilla

### Työskentely yksittäisten projektien kanssa

Yksittäisiä projekteja koskevat ohjeet löytyvät README-tiedostoista:
- `quiz-app/README.md` – Vue 3 quiz-sovellus
- `7-bank-project/README.md` – Pankkisovellus autentikoinnilla
- `5-browser-extension/README.md` – Selaimen laajennuksen kehitys
- `6-space-game/README.md` – Canvas-pohjainen peli
- `9-chat-project/README.md` – AI-chat avustajajärjestelmä

### Monorepo-rakenne

Vaikka tämä ei ole perinteinen monorepo, arkistossa on useita itsenäisiä projekteja:
- Jokainen oppitunti on itsenäinen kokonaisuus
- Projektit eivät jaa riippuvuuksia
- Työskentele projekteissa erikseen toinen toisiinsa vaikuttamatta
- Kloonaa koko arkisto saadaksesi täyden opetuskokemuksen

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastuuvapauslauseke**:
Tämä asiakirja on käännetty käyttäen tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, ole hyvä ja huomioi, että automaattikäännökset saattavat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja alkuperäiskielellä tulee pitää auktoriteettisena lähteenä. Tärkeiden tietojen osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä aiheutuvista väärinymmärryksistä tai tulkinnoista.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->