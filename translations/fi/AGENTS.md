# AGENTS.md

## Projektin yleiskatsaus

Tämä on opetuskokonaisuus, joka toimii verkkokehityksen perusteiden opetuksen opetusmateriaalivarastona aloittelijoille. Opetussuunnitelma on kattava 12 viikon kurssi, jonka ovat kehittäneet Microsoft Cloud Advocates -tiimin jäsenet. Kurssi sisältää 24 käytännönläheistä oppituntia, jotka kattavat JavaScriptin, CSS:n ja HTML:n.

### Keskeiset osat

- **Opetussisältö**: 24 rakenteellista oppituntia, jotka on organisoitu projektipohjaisiksi moduuleiksi
- **Käytännön projektit**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor ja AI Chat Assistant
- **Interaktiiviset testit**: 48 testiä, joissa jokaisessa 3 kysymystä (ennakko- ja jälkitestit)
- **Monikielinen tuki**: Automaattiset käännökset yli 50 kielelle GitHub Actionsin avulla
- **Teknologiat**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI-projekteissa)

### Arkkitehtuuri

- Opetussisältöinen arkisto oppituntirakenteella
- Jokaisessa oppituntikansiossa on README-tiedosto, koodiesimerkit ja ratkaisut
- Erilliset projektit omissa kansioissaan (quiz-app, erilaiset oppituntiprojektit)
- Käännösjärjestelmä GitHub Actionsilla (co-op-translator)
- Dokumentaatio tarjotaan Docsifyn kautta ja se on saatavilla PDF-muodossa

## Asennuskäskyt

Tätä arkistoa käytetään pääasiassa opetussisällön kuluttamiseen. Työskennellessäsi tiettyjen projektien parissa:

### Pääarkistoasennus

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App -asennus (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Käynnistä kehityspalvelin
npm run build      # Rakenna tuotantoon
npm run lint       # Suorita ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Käynnistä API-palvelin
npm run lint       # Suorita ESLint
npm run format     # Muotoile Prettierillä
```

### Selainlaajennusprojektit

```bash
cd 5-browser-extension/solution
npm install
# Noudata selainkohtaisia laajennuksen latausohjeita
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

1. **Forkkaa arkisto** GitHub-tilillesi
2. **Kloonaa oma fork** paikallisesti
3. **Luo uusi haara** muutoksillesi
4. Tee muutoksia oppituntien sisältöön tai koodiesimerkkeihin
5. Testaa koodimuutokset asianmukaisissa projektihakemistoissa
6. Lähetä pull requestit noudattaen kontribuutio-ohjeita

### Oppijoille

1. Forkkaa tai kloonaa arkisto
2. Siirry oppituntikansioihin järjestyksessä
3. Lue jokaisen oppitunnin README-tiedostot
4. Suorita ennakkotestit osoitteessa https://ff-quizzes.netlify.app/web/
5. Käy läpi oppituntien koodiesimerkit
6. Suorita tehtävät ja haasteet
7. Tee jälkitestit

### Live-kehitykseen

- **Dokumentaatio**: Aja `docsify serve` juurikansiossa (portti 3000)
- **Quiz App**: Aja `npm run dev` quiz-app-hakemistossa
- **Projektit**: Käytä VS Coden Live Server -laajennusta HTML-projekteihin
- **API-projektit**: Aja `npm start` kyseisissä API-hakemistoissa

## Testausohjeet

### Quiz App -testaus

```bash
cd quiz-app
npm run lint       # Tarkista koodityylin ongelmat
npm run build      # Varmista, että käännös onnistuu
```

### Bank API -testaus

```bash
cd 7-bank-project/api
npm run lint       # Tarkista koodityylin ongelmat
node server.js     # Varmista, että palvelin käynnistyy ilman virheitä
```

### Yleinen testausmenetelmä

- Tämä on opetussisältöarkisto ilman kattavia automatisoituja testejä
- Manuaalinen testaus keskittyy:
  - Koodiesimerkkien virheettömään ajamiseen
  - Dokumentaation linkkien toimivuuteen
  - Projektien käännösten onnistumiseen
  - Esimerkkien parhaiden käytäntöjen noudattamiseen

### Ennen lähettämistä tehtävät tarkistukset

- Aja `npm run lint` hakemistoissa, joissa on package.json
- Varmista markdown-linkkien toimivuus
- Testaa koodiesimerkit selaimella tai Node.js:llä
- Tarkista, että käännökset säilyttävät rakenteen

## Koodityyliohjeet

### JavaScript

- Käytä nykyaikaista ES6+ syntaksia
- Noudata projektien ESLint-konfiguraatioita
- Käytä merkityksellisiä muuttuja- ja funktioiden nimiä opetuksen selkeyttämiseksi
- Lisää kommentteja, jotka selittävät konsepteja oppijoille
- Muotoile Prettierillä, jos määritelty

### HTML/CSS

- Semanttiset HTML5-elementit
- Responsiivisen suunnittelun periaatteet
- Selkeät luokkien nimeämiskäytännöt
- CSS-tekniikoiden selitykset kommentteina oppijoille

### Python

- PEP 8 -tyyliohjeiden noudattaminen
- Selkeät ja opetukselliset koodiesimerkit
- Tyyppivihjeet, jos hyödyllisiä oppimisessa

### Markdown-dokumentaatio

- Selkeä otsikkohierarkia
- Koodilohkot kielimäärittelyllä
- Linkit lisäresursseihin
- Kuvakaappaukset ja kuvat `images/` -kansioissa
- Kuvien vaihtoehtoinen teksti saavutettavuuden vuoksi

### Tiedostojen organisointi

- Oppitunnit numeroituna peräkkäin (1-getting-started-lessons, 2-js-basics jne.)
- Jokaisessa projektissa on `solution/` ja usein `start/` tai `your-work/` -kansiot
- Kuvat oppituntikohtaisissa `images/` -kansioissa
- Käännökset kansiorakenteessa `translations/{language-code}/`

## Rakennus ja käyttöönotto

### Quiz App -käyttöönotto (Azure Static Web Apps)

Quiz-app on konfiguroitu Azure Static Web Apps -käyttöönottoa varten:

```bash
cd quiz-app
npm run build      # Luo dist/-kansion
# Julkaisee GitHub Actions -työnkulun avulla, kun tehdään push main-haaraan
```

Azure Static Web Apps -asetukset:
- **Sovelluksen sijainti**: `/quiz-app`
- **Tulostuskansio**: `dist`
- **Työnkulku**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentaation PDF-generointi

```bash
npm install                    # Asenna docsify-to-pdf
npm run convert               # Luo PDF docsista
```

### Docsify-dokumentaatio

```bash
npm install -g docsify-cli    # Asenna Docsify globaalisti
docsify serve                 # Palvele paikallisesti osoitteessa localhost:3000
```

### Projektikohtaiset rakennusprosessit

Jokaisella projektille on mahdollisesti oma rakennusprosessi:
- Vue-projekteissa: `npm run build` luo tuotantopaketteja
- Staattisissa projekteissa: Ei rakennusvaihetta, tiedostot palvelimelle suoraan

## Pull requestin ohjeet

### Otsikkomuoto

Käytä selkeitä, kuvaavia otsikoita muutettavalta alueelta:
- `[Quiz-app] Lisää uusi testi oppitunnille X`
- `[Lesson-3] Korjaa kirjoitusvirhe terrarium-projektissa`
- `[Translation] Lisää espanjankielinen käännös oppitunnille 5`
- `[Docs] Päivitä asennusohjeet`

### Vaatimukset ennen PR:n lähettämistä

1. **Koodin laatu**:
   - Aja `npm run lint` vaikuttavissa projektikansioissa
   - Korjaa kaikki lint-virheet ja -varoitukset

2. **Rakennuksen tarkastus**:
   - Aja `npm run build` jos tarpeen
   - Varmista ettei rakennuksessa ole virheitä

3. **Linkkien validointi**:
   - Testaa kaikki markdown-linkit
   - Varmista kuvaviitteiden toimivuus

4. **Sisällön tarkistus**:
   - Oikolue oikeinkirjoitus ja kielioppi
   - Varmista, että koodiesimerkit ovat oikein ja opettavaisia
   - Varmista, että käännökset säilyttävät alkuperäisen merkityksen

### Kontribuutiovaatimukset

- Hyväksy Microsoftin CLA (automaattinen tarkistus ensimmäisessä PR:ssä)
- Noudata [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) -käyttäytymisohjeita
- Katso [CONTRIBUTING.md](./CONTRIBUTING.md) yksityiskohtaiset ohjeet
- Viittaa mahdollisiin issue-numeroihin PR-kuvauksessa

### Tarkistusprosessi

- PR:t tarkistaa ylläpitäjät ja yhteisö
- Opetuksellinen selkeys on etusijalla
- Koodiesimerkkien tulee noudattaa nykyisiä parhaita käytäntöjä
- Käännökset tarkistetaan tarkkuuden ja kulttuurisen sopivuuden varmistamiseksi

## Käännösjärjestelmä

### Automaattinen käännös

- Käyttää GitHub Actions -työnkulkua co-op-translator
- Kääntää yli 50 kielelle automaattisesti
- Lähdetiedostot pääkansioissa
- Käännetyt tiedostot kansioissa `translations/{language-code}/`

### Manuaaliset käännösten parannukset

1. Etsi tiedosto `translations/{language-code}/` kansiosta
2. Tee parannuksia säilyttäen rakenne
3. Varmista, että koodiesimerkit toimivat edelleen
4. Testaa mahdollinen paikallinen testisisältö

### Käännöstiedostojen metatiedot

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

## Virheenkorjaus ja ongelmanratkaisu

### Yleiset ongelmat

**Quiz-sovellus ei käynnisty**:
- Tarkista Node.js -versio (v14+ suositeltu)
- Poista `node_modules` ja `package-lock.json`, aja `npm install` uudelleen
- Tarkista porttien yhteentörmäykset (Vite käyttää oletuksena porttia 5173)

**API-palvelin ei käynnisty**:
- Varmista, että Node.js on vähintään versio 10
- Tarkista, onko portti jo käytössä
- Varmista, että riippuvuudet ovat asennettu `npm install` komennolla

**Selainlaajennus ei lataudu**:
- Tarkista, että manifest.json on oikein muotoiltu
- Katso selaimen konsolista virheilmoituksia
- Noudata selainkohtaisia asennusohjeita

**Python chat-projektin ongelmat**:
- Asenna OpenAI-paketti: `pip install openai`
- Varmista, että GITHUB_TOKEN -ympäristömuuttuja on asetettu
- Tarkista GitHub Models -käyttöoikeudet

**Docsifyn dokumentaatio ei palvele**:
- Asenna docsify-cli globaalisti: `npm install -g docsify-cli`
- Aja arkiston juurihakemistosta
- Tarkista, että `docs/_sidebar.md` on olemassa

### Kehitysympäristövinkit

- Käytä VS Codea Live Server -laajennuksella HTML-projekteissa
- Asenna ESLint ja Prettier laajennukset yhtenäiseen muotoiluun
- Käytä selainten DevToolsia JavaScriptin virheenkorjaukseen
- Vue-projekteissa asenna Vue DevTools -selainlaajennus

### Suorituskykymuutokset

- Suuret määrät käännettyjä tiedostoja (50+ kieltä) tekevät täyden kloonauksen raskaaksi
- Käytä matalan syvyyden kloonausta vain, jos työskentelet sisällön parissa: `git clone --depth 1`
- Poissulje käännökset hauta, kun työskentelet englanninkielisen sisällön kanssa
- Rakennusprosessit saattavat olla hitaita ensimmäisillä kerroilla (npm install, Vite build)

## Turvallisuusnäkökohdat

### Ympäristömuuttujat

- API-avaimia ei saa koskaan sitoa arkistoon
- Käytä `.env`-tiedostoja (jo mukana .gitignore)
- Dokumentoi tarvittavat ympäristömuuttujat projektin READMEissä

### Python-projektit

- Käytä virtuaaliympäristöjä: `python -m venv venv`
- Pidä riippuvuudet päivitettyinä
- GitHub-tokenien tulee olla minimioikeuksilla

### GitHub Models -käyttöoikeudet

- Henkilökohtaiset käyttöoikeusavaimet (PAT) vaaditaan GitHub Models -käyttöön
- Avaimet tulee tallentaa ympäristömuuttujiin
- Älä koskaan tallenna avaimia tai tunnuksia arkistoon

## Lisätiedot

### Kohdeyleisö

- Täysin aloittelijat verkkokehityksessä
- Opiskelijat ja itseopiskelijat
- Opettajat, jotka käyttävät opetussuunnitelmaa luokkahuoneissa
- Sisältö suunniteltu saavutettavuuden ja taitojen asteittaisen kartuttamisen mukaisesti

### Opetuksellinen filosofia

- Projektipohjainen oppiminen
- Tiheät tietämyksen tarkistukset (testit)
- Käytännön koodausharjoitukset
- Todellisia esimerkkisovelluksia
- Perusteet ensin, kehykset myöhemmin

### Arkiston ylläpito

- Aktiivinen yhteisö oppijoista ja kontribuoijista
- Riittävä päivitys riippuvuuksiin ja sisältöön
- Issueiden ja keskustelujen seuranta ylläpitäjiltä
- Käännösten päivitys automatisoitu GitHub Actionsilla

### Liittyvät resurssit

- [Microsoft Learn -moduulit](https://docs.microsoft.com/learn/)
- [Student Hub -resurssit](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) suositellaan oppijoille
- Lisäkursseja: Generatiivinen AI, Data Science, ML, IoT -opetussuunnitelmat saatavilla

### Työskentely tietyissä projekteissa

Yksityiskohtaiset ohjeet löytyvät kunkin projektin README-tiedostoista:
- `quiz-app/README.md` - Vue 3:n testi-sovellus
- `7-bank-project/README.md` - Pankkisovellus autentikoinnilla
- `5-browser-extension/README.md` - Selainlaajennuksen kehitys
- `6-space-game/README.md` - Canvas-pohjainen peli
- `9-chat-project/README.md` - AI-chat-avustajaprojekti

### Monorepo-rakenne

Vaikka ei ole tyypillinen monorepo, tämä arkisto sisältää useita itsenäisiä projekteja:
- Jokainen oppitunti on itsenäinen
- Projektit eivät jaa riippuvuuksia
- Työskentele yksittäisten projektien parissa ilman vaikutusta muihin
- Kloonaa koko arkisto saadaksesi täyden opetussuunnitelmakokemuksen

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälykäännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, automaattiset käännökset saattavat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäiskielellä tulee pitää auktoritatiivisena lähteenä. Tärkeissä tiedoissa suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä aiheutuvista väärinkäsityksistä tai tulkinnoista.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->