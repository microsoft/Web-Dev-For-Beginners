# AGENTS.md

## Projektin yleiskuvaus

Tämä on opetuksellinen opetussuunnitelmarepositorio, joka on tarkoitettu web-kehityksen perusteiden opettamiseen aloittelijoille. Opetussuunnitelma on kattava 12 viikon kurssi, jonka ovat kehittäneet Microsoft Cloud Advocates, ja se sisältää 24 käytännön oppituntia, jotka kattavat JavaScriptin, CSS:n ja HTML:n.

### Keskeiset osat

- **Opetussisältö**: 24 rakenteellista oppituntia projektipohjaisissa moduuleissa
- **Käytännön projektit**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor ja AI Chat Assistant
- **Interaktiiviset tietovisat**: 48 tietovisaa, joissa on 3 kysymystä (ennen ja jälkeen oppitunnin arvioinnit)
- **Monikielinen tuki**: Automaattiset käännökset yli 50 kielelle GitHub Actionsin kautta
- **Teknologiat**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (tekoälyprojekteissa)

### Arkkitehtuuri

- Opetuksellinen arkisto oppituntipohjaisella rakenteella
- Jokainen oppituntikansio sisältää README-tiedoston, koodiesimerkkejä ja ratkaisuja
- Itsenäiset projektit omissa hakemistoissaan (quiz-app, eri oppituntiprojektit)
- Käännösjärjestelmä GitHub Actionsin (co-op-translator) avulla
- Dokumentaatio tarjotaan Docsifylla ja se on saatavilla myös PDF:nä

## Asennuskomennot

Tämä arkisto on ensisijaisesti tarkoitettu opetussisällön kulutukseen. Työskennellessäsi tiettyjen projektien kanssa:

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
npm run format     # Muotoile Prettierilla
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

### Chat-projekti (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Aseta GITHUB_TOKEN-ympäristömuuttuja
python api.py
```

## Kehitysprosessi

### Sisällön tekijöille

1. **Forkkaa arkisto** GitHub-tilillesi
2. **Kloonaa forkki** paikallisesti
3. **Luo uusi haara** muutoksillesi
4. Tee muutoksia oppituntisisältöön tai koodiesimerkkeihin
5. Testaa koodimuutokset asiaankuuluvissa projektihakemistoissa
6. Lähetä pull requestit ohjeiden mukaisesti

### Oppijoille

1. Forkkaa tai kloonaa arkisto
2. Siirry oppituntihakemistoihin peräkkäin
3. Lue jokaisen oppitunnin README-tiedostot
4. Täytä oppituntia edeltävät tietovisat osoitteessa https://ff-quizzes.netlify.app/web/
5. Työskentele koodiesimerkkien parissa oppituntikansioissa
6. Suorita tehtävät ja haasteet
7. Tee oppituntia seuraavat tietovisat

### Live-kehitys

- **Dokumentaatio**: Suorita `docsify serve` juurihakemistossa (portti 3000)
- **Quiz-sovellus**: Suorita `npm run dev` quiz-app-hakemistossa
- **Projektit**: Käytä VS Code Live Server -laajennusta HTML-projekteissa
- **API-projektit**: Suorita `npm start` vastaavissa API-hakemistoissa

## Testausohjeet

### Quiz-sovelluksen testaus

```bash
cd quiz-app
npm run lint       # Tarkista koodityyliongelmat
npm run build      # Varmista, että käännös onnistuu
```

### Pankki-API:n testaus

```bash
cd 7-bank-project/api
npm run lint       # Tarkista koodityyliongelmat
node server.js     # Varmista, että palvelin käynnistyy virheittä
```

### Yleinen testausmenetelmä

- Tämä on opetuksellinen arkisto ilman kattavia automatisoituja testejä
- Manuaalinen testaus keskittyy:
  - Koodiesimerkkien virheettömään suorittamiseen
  - Dokumentaation linkkien toimivuuteen
  - Projektikäännösten onnistumiseen
  - Esimerkkien noudattavan parhaita käytäntöjä

### Ennen lähettämistä tehtävät tarkistukset

- Suorita `npm run lint` hakemistoissa, joissa on package.json
- Varmista markdown-linkkien pätevyys
- Testaa koodiesimerkit selaimessa tai Node.js:ssä
- Tarkista, että käännökset säilyttävät rakenteen

## Koodityyliohjeet

### JavaScript

- Käytä modernia ES6+ syntaksia
- Noudata projektien antamia ESLint-asetuksia
- Käytä merkityksellisiä muuttuja- ja funktioiden nimiä opetuksen selkeyden vuoksi
- Lisää kommentteja, jotka selittävät käsitteitä oppijoille
- Muotoile Prettierillä, missä konfiguroitu

### HTML/CSS

- Semanttiset HTML5-elementit
- Responsiivisen suunnittelun periaatteet
- Selkeät luokkien nimikäytännöt
- Kommentit, jotka selittävät CSS-tekniikoita oppijoille

### Python

- PEP 8 -tyyliohjeet
- Selkeät, opetukselliset koodiesimerkit
- Tyyppivihjeet, jos hyödyllisiä oppimisen kannalta

### Markdown-dokumentaatio

- Selkeä otsikkohierarkia
- Koodilohkot kielimäärittelyillä
- Linkit lisäresursseihin
- Kuvakaappaukset ja kuvat `images/` hakemistoissa
- Kuvien alt-tekstit saavutettavuutta varten

### Tiedostojen järjestely

- Oppitunnit numeroitu peräkkäin (1-getting-started-lessons, 2-js-basics jne.)
- Jokaisella projektilla on `solution/` ja usein `start/` tai `your-work/` hakemistot
- Kuvat tallennettu oppituntikohtaisiin `images/` kansioihin
- Käännökset sijaitsevat `translations/{language-code}/` rakenteessa

## Kokoaminen ja julkaisu

### Quiz-sovelluksen julkaisu (Azure Static Web Apps)

Quiz-app on konfiguroitu Azure Static Web Apps -julkaisua varten:

```bash
cd quiz-app
npm run build      # Luo dist/-kansion
# Ottaa käyttöön GitHub Actions -työnkulun kautta siirron yhteydessä main-haaraan
```

Azure Static Web Apps -konfiguraatio:
- **Sovelluksen sijainti**: `/quiz-app`
- **Tulosteen sijainti**: `dist`
- **Työnkulku**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentaation PDF:n luonti

```bash
npm install                    # Asenna docsify-to-pdf
npm run convert               # Luo PDF docsista
```

### Docsify-dokumentaatio

```bash
npm install -g docsify-cli    # Asenna Docsify globaalisti
docsify serve                 # Tarjoa palvelu localhost:3000:ssa
```

### Projektikohtaiset rakentamiset

Jokaisella projektihakemistolla voi olla oma rakennusprosessi:
- Vue-projektit: `npm run build` luo tuotantopaketteja
- Staattiset projektit: Ei rakennusvaihetta, palvele tiedostot suoraan

## Pull request -ohjeet

### Otsikkomuoto

Käytä selkeitä, kuvaavia otsikoita, jotka kertovat muutoksen alueen:
- `[Quiz-app] Lisää uusi tietovisa oppitunnille X`
- `[Lesson-3] Korjaa kirjoitusvirhe terrarium-projektissa`
- `[Translation] Lisää espanjankielinen käännös oppitunnille 5`
- `[Docs] Päivitä asennusohjeet`

### Vaadittavat tarkistukset

Ennen PR:n lähettämistä:

1. **Koodin laatu**:
   - Suorita `npm run lint` vaikutuksille joutuvissa hakemistoissa
   - Korjaa kaikki lint-virheet ja -varoitukset

2. **Rakennuksen varmistus**:
   - Suorita `npm run build` jos sovellettavissa
   - Varmista ettei rakennusvirheitä ilmene

3. **Linkkien tarkistus**:
   - Testaa kaikki markdown-linkit
   - Varmista kuvaviitteiden toimivuus

4. **Sisällön tarkastus**:
   - Tarkista oikeinkirjoitus ja kielioppi
   - Varmista koodiesimerkkien oikeellisuus ja opetuksellisuus
   - Tarkista, että käännökset säilyttävät alkuperäisen merkityksen

### Osallistumisvaatimukset

- Hyväksy Microsoft CLA (automaattinen tarkistus ensimmäisessä PR:ssa)
- Noudata [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Katso yksityiskohtaiset ohjeet [CONTRIBUTING.md](./CONTRIBUTING.md) tiedostosta
- Viittaa issue-numeroihin PR-kuvauksessa, jos sovellettavissa

### Tarkastusprosessi

- PR:t tarkastetaan ylläpitäjien ja yhteisön toimesta
- Opetuksellinen selkeys on prioriteetti
- Koodiesimerkkien tulee noudattaa nykyisiä parhaita käytäntöjä
- Käännökset tarkastetaan tarkkuudesta ja kulttuurillisesta sopivuudesta

## Käännösjärjestelmä

### Automaattinen käännös

- Käyttää GitHub Actionsia co-op-translator -työnkulun kanssa
- Kääntää automaattisesti yli 50 kielelle
- Lähdetiedostot ovat pääkansioissa
- Käännetyt tiedostot ovat `translations/{language-code}/` hakemistoissa

### Käsin tehtävät käännösten parannukset

1. Etsi tiedosto `translations/{language-code}/` hakemistosta
2. Tee parannuksia säilyttäen rakenne
3. Varmista, että koodiesimerkit toimivat edelleen
4. Testaa mahdolliset lokalisoidut tietovisasisällöt

### Käännösten metatiedot

Käännetyt tiedostot sisältävät metatietojen otsikon:
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

### Yleisimmät ongelmat

**Quiz-sovellus ei käynnisty**:
- Tarkista Node.js:n versio (v14+ suositeltava)
- Poista `node_modules` ja `package-lock.json`, suorita `npm install` uudelleen
- Tarkista, etteivät portit ole varattu (oletus: Vite käyttää porttia 5173)

**API-palvelin ei käynnisty**:
- Varmista, että Node.js versio on vähintään (node >=10)
- Tarkista, onko portti jo käytössä
- Varmista, että kaikki riippuvuudet on asennettu `npm install` komennolla

**Selaimen laajennus ei lataudu**:
- Varmista, että manifest.json on oikein muotoiltu
- Tarkista selaimen konsolista virheet
- Noudata selaimesta riippuvia asennusohjeita laajennukselle

**Python chat-projektin ongelmat**:
- Varmista, että OpenAI-paketti on asennettu: `pip install openai`
- Varmista, että GITHUB_TOKEN -ympäristömuuttuja on asetettu
- Tarkista GitHub Models -käyttöoikeudet

**Docsify ei tarjoa dokumentaatiota**:
- Asenna docsify-cli globaalisti: `npm install -g docsify-cli`
- Suorita reposta juurihakemistosta
- Varmista, että `docs/_sidebar.md` tiedosto on olemassa

### Kehitysympäristön vinkit

- Käytä VS Codea Live Server -laajennuksella HTML-projekteissa
- Asenna ESLint ja Prettier -laajennukset yhdenmukaiseen muotoiluun
- Käytä selaimen DevToolsia JavaScriptin virheenkorjaukseen
- Vue-projekteissa asenna Vue DevTools -selaimen laajennus

### Suorituskyvyn huomioita

- Suuri määrä käännettyjä tiedostoja (yli 50 kieltä) tekee kokonaishakkereista suuria
- Käytä kevyttä kloonausta, jos työskentelet vain sisällön kanssa: `git clone --depth 1`
- Poissulje käännökset hauista, kun työskentelet englanninkielisen sisällön parissa
- Rakennusprosessit voivat olla hitaita ensimmäisellä kerralla (npm install, Vite build)

## Turvallisuusnäkökohdat

### Ympäristömuuttujat

- API-avaimia ei tulisi koskaan sitoa arkistoon
- Käytä `.env`-tiedostoja (jo sisällytetty `.gitignore`-tiedostoon)
- Dokumentoi tarvittavat ympäristömuuttujat projektien READMEihin

### Python-projektit

- Käytä virtuaaliympäristöjä: `python -m venv venv`
- Pidä riippuvuudet ajan tasalla
- GitHub-tokeneilla tulisi olla vain tarvittavat vähimmäisoikeudet

### GitHub Models -käyttö

- Henkilökohtaiset käyttöoikeustokenit (PAT) vaaditaan GitHub Models -käyttöön
- Tokeneita tulee säilyttää ympäristömuuttujina
- Älä koskaan sido tokeneita tai tunnuksia arkistoon

## Lisätiedot

### Kohdeyleisö

- Täysin aloittelijat web-kehityksessä
- Opiskelijat ja itseopiskelijat
- Opettajat, jotka käyttävät opetussuunnitelmaa luokkahuoneissa
- Sisältö on suunniteltu saavutettavaksi ja taitojen asteittaiseen kehittämiseen

### Opetuksellinen filosofia

- Projektipohjainen oppimisen lähestymistapa
- Säännölliset tietovisat tiedon tarkistamiseksi
- Käytännön koodausharjoitukset
- Todellisen maailman sovellusesimerkit
- Perusteiden painotus ennen kehyksiä

### Arkiston ylläpito

- Aktiivinen oppijoiden ja osallistujien yhteisö
- Säännölliset päivitykset riippuvuuksiin ja sisältöön
- Ongelmatilanteet ja keskustelut ylläpitäjien valvonnassa
- Käännöspäivitykset automatisoitu GitHub Actionsin avulla

### Aiheeseen liittyvät resurssit

- [Microsoft Learn -moduulit](https://docs.microsoft.com/learn/)
- [Student Hubin resurssit](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) suositellaan oppijoille
- Lisäkursseja: Generative AI, Data Science, ML, IoT -opetussuunnitelmia saatavilla

### Työskentely yksittäisten projektien kanssa

Yksityiskohtaiset ohjeet yksittäisistä projekteista löytyvät README-tiedostoista:
- `quiz-app/README.md` - Vue 3 tietovisasovellus
- `7-bank-project/README.md` - Pankkisovellus autentikoinnilla
- `5-browser-extension/README.md` - Selaimen laajennuksen kehitys
- `6-space-game/README.md` - Canvas-pohjainen peli
- `9-chat-project/README.md` - Tekoälyllä toimivan chat-avustajan projekti

### Monorepo-rakenne

Vaikka tämä ei ole perinteinen monorepo, tämä arkisto sisältää useita itsenäisiä projekteja:
- Jokainen oppitunti on itsenäinen
- Projektit eivät jaa riippuvuuksia
- Työskentele yksittäisten projektien parissa vaikuttamatta muihin
- Kloonaa koko arkisto saadaksesi koko opetussuunnitelman kokemuksen

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastuuvapauslauseke**:
Tämä asiakirja on käännetty käyttäen tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, on hyvä huomioida, että automaattiset käännökset saattavat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäiskielellä tulee pitää auktoritatiivisena lähteenä. Tärkeissä asioissa suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa mistään väärinymmärryksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->