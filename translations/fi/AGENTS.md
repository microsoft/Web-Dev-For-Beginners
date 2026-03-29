# AGENTS.md

## Projektin yleiskuvaus

Tämä on opetussisältövarasto, joka on tarkoitettu verkkokehityksen perusteiden opettamiseen aloittelijoille. Opetussuunnitelma on kattava 12 viikon kurssi, jonka ovat kehittäneet Microsoft Cloud Advocates, ja se sisältää 24 käytännönläheistä oppituntia JavaScriptistä, CSS:stä ja HTML:stä.

### Keskeiset osat

- **Opetussisältö**: 24 rakenteellista oppituntia, jotka on järjestetty projektipohjaisiksi moduuleiksi
- **Käytännön projektit**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor ja AI Chat Assistant
- **Interaktiiviset monivalintakyselyt**: 48 kyselyä, joissa on 3 kysymystä jokaisessa (ennen ja jälkeen oppitunnin arvioinnit)
- **Monikielinen tuki**: Automaattiset käännökset yli 50 kielelle GitHub Actionsin avulla
- **Teknologiat**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (tekoälyprojekteihin)

### Arkkitehtuuri

- Opetussisältövarasto, jossa on oppituntirakenne
- Jokainen oppituntikansio sisältää README-tiedoston, koodiesimerkkejä ja ratkaisuja
- Erilliset projektit omissa hakemistoissaan (quiz-app, eri oppituntiprojektit)
- Käännösjärjestelmä käyttäen GitHub Actionsia (co-op-translator)
- Dokumentaatio tarjolla Docsifylla ja PDF-muodossa

## Asennuskäskyt

Tämä varasto on ensisijaisesti tarkoitettu opetussisällön kuluttamiseen. Työskenneltäessä tietyissä projekteissa:

### Päävaraston asennus

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
npm run format     # Muotoile Prettierilla
```

### Selaimen laajennusprojektit

```bash
cd 5-browser-extension/solution
npm install
# Noudata selaimelle spesifisiä laajennuksen latausohjeita
```

### Space Game -projektit

```bash
cd 6-space-game/solution
npm install
# Avaa index.html selaimessa tai käytä Live Server -laajennusta
```

### Chat-projekti (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Aseta GITHUB_TOKEN-ympäristömuuttuja
python api.py
```

## Kehitysprosessin työkulku

### Sisällöntuottajille

1. **Luo haarukka** varastosta GitHub-tilillesi
2. **Kloonaa haarukkasi** paikallisesti
3. **Luo uusi haara** muutoksillesi
4. Tee muutoksia oppituntisisältöön tai koodiesimerkkeihin
5. Testaa kaikki koodimuutokset asiaankuuluvissa projektihakemistoissa
6. Lähetä pull-pyyntöjä noudattaen kontribuutiokäytäntöjä

### Oppijoille

1. Luo haarukka tai kloonaa varasto
2. Siirry oppituntihakemistoihin järjestyksessä
3. Lue jokaisen oppitunnin README-tiedostot
4. Tee ennen oppituntia tehtävät monivalintakyselyt osoitteessa https://ff-quizzes.netlify.app/web/
5. Työstä koodiesimerkkejä oppituntikansioissa
6. Tee tehtäviä ja haasteita
7. Tee oppitunnin jälkeiset monivalintakyselyt

### Live-kehitys

- **Dokumentaatio**: Suorita `docsify serve` juurihakemistossa (portti 3000)
- **Quiz App**: Suorita `npm run dev` quiz-app-hakemistossa
- **Projektit**: Käytä VS Code Live Server -laajennusta HTML-projekteille
- **API-projektit**: Suorita `npm start` vastaavissa API-hakemistoissa

## Testiohjeet

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

### Yleinen testauslähestymistapa

- Tämä on opetussisältövarasto ilman kattavia automatisoituja testejä
- Manuaalinen testaus keskittyy:
  - Koodiesimerkkien toimivuuteen ilman virheitä
  - Dokumentaation linkkien toimivuuteen
  - Projektien build-prosessien onnistumiseen
  - Esimerkkien parhaiden käytäntöjen noudattamiseen

### Tarkistukset ennen lähettämistä

- Suorita `npm run lint` hakemistoissa, joissa on package.json
- Varmista, että markdown-linkit ovat kelvollisia
- Testaa koodiesimerkkejä selaimessa tai Node.js:ssä
- Tarkista, että käännökset säilyttävät rakenteen

## Koodityyliohjeet

### JavaScript

- Käytä modernia ES6+ -syntaksia
- Noudata projektien standardoituja ESLint-configeja
- Käytä merkityksellisiä muuttuja- ja funktioiden nimiä opetuksellisuuden vuoksi
- Lisää kommentteja, jotka selittävät käsitteitä oppijoille
- Muotoile Prettierillä, jos se on määritetty

### HTML/CSS

- Semanttiset HTML5-elementit
- Responsiivisen suunnittelun periaatteet
- Selkeät luokkien nimeämiskäytännöt
- Kommentit, jotka selittävät CSS-tekniikoita oppijoille

### Python

- PEP 8 -tyyliohjeiden noudattaminen
- Selkeät, opetukselliset koodiesimerkit
- Tyyppivihjeet, joissa ne auttavat oppimisessa

### Markdown-dokumentaatio

- Selkeä otsikkohierarkia
- Koodilohkot, joissa kielimääritys
- Linkit lisäresursseihin
- Kuvakaappaukset ja kuvat `images/`-kansioissa
- Kuvien alt-teksti saavutettavuuden vuoksi

### Tiedostojen järjestäminen

- Oppitunnit numeroitu peräkkäin (1-getting-started-lessons, 2-js-basics jne.)
- Jokaisella projektilla on `solution/` ja usein myös `start/` tai `your-work/` -kansiot
- Kuvat säilytetään oppituntikohtaisissa `images/`-kansioissa
- Käännökset hakemistossa `translations/{language-code}/`

## Rakennus ja julkaisu

### Quiz App -julkaisu (Azure Static Web Apps)

Quiz-app on konfiguroitu Azure Static Web Apps -julkaisua varten:

```bash
cd quiz-app
npm run build      # Luo dist/-kansion
# Ottaa käyttöön GitHub Actions -työnkulun kautta, kun push tapahtuu päähaaraan
```

Azure Static Web Appsin konfigurointi:
- **Sovelluksen sijainti**: `/quiz-app`
- **Tulossijainti**: `dist`
- **Työnkulku**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentaation PDF:ksi generointi

```bash
npm install                    # Asenna docsify-to-pdf
npm run convert               # Luo PDF docsista
```

### Docsify-dokumentaatio

```bash
npm install -g docsify-cli    # Asenna Docsify globaalisti
docsify serve                 # Palvele osoitteessa localhost:3000
```

### Projektikohtaiset build-prosessit

Jokaisella projektihakemistolla voi olla oma build-prosessinsa:
- Vue-projektit: `npm run build` tuottaa tuotantopaketteja
- Staattiset projektit: Ei build-vaihetta, tiedostot tarjotaan suoraan

## Pull-pyyntöjen ohjeet

### Otsikkomuoto

Käytä selkeitä, kuvaavia otsikoita, jotka kertovat muutosten alueen:
- `[Quiz-app] Lisää uusi tietovisa oppitunnille X`
- `[Lesson-3] Korjaa kirjoitusvirhe terrarium-projektissa`
- `[Translation] Lisää espanjankielinen käännös oppitunnille 5`
- `[Docs] Päivitä asennusohjeet`

### Vaaditut tarkistukset

Ennen PR:n lähettämistä:

1. **Koodin laatu**:
   - Suorita `npm run lint` asiaankuuluvissa projektihakemistoissa
   - Korjaa kaikki lint-virheet ja varoitukset

2. **Buildin varmistus**:
   - Suorita `npm run build`, jos sovellettavissa
   - Varmista, ettei build-virheitä ilmene

3. **Linkkien tarkistus**:
   - Testaa kaikki markdown-linkit
   - Varmista, että kuvalinkit toimivat

4. **Sisällön tarkistus**:
   - Tarkista oikeinkirjoitus ja kielioppi
   - Varmista, että koodiesimerkit ovat oikein ja opetuksellisia
   - Tarkista, että käännökset säilyttävät alkuperäisen merkityksen

### Panostusvaatimukset

- Hyväksy Microsoft CLA (automaattinen tarkistus ensimmäisessä PR:ssä)
- Noudata [Microsoftin avoimen lähdekoodin käytösohjeita](https://opensource.microsoft.com/codeofconduct/)
- Katso [CONTRIBUTING.md](./CONTRIBUTING.md) yksityiskohtia varten
- Viittaa ongelmanumeroihin PR-kuvauksessa tarvittaessa

### Tarkastusprosessi

- PR:t tarkistetaan ylläpitäjien ja yhteisön toimesta
- Opetuksellisuus on etusijalla
- Koodiesimerkkien tulee noudattaa nykyaikaisia parhaita käytäntöjä
- Käännökset tarkistetaan tarkkuuden ja kulttuurisen sopivuuden mukaan

## Käännösjärjestelmä

### Automaattinen käännös

- Käyttää GitHub Actionsia co-op-translator-työnkululla
- Kääntää automaattisesti yli 50 kielelle
- Lähdetiedostot pääkansioissa
- Käännetyt tiedostot hakemistossa `translations/{language-code}/`

### Käsin tehdyt parannukset käännöksiin

1. Etsi tiedosto kansiosta `translations/{language-code}/`
2. Tee parannukset säilyttäen rakenne
3. Varmista, että koodiesimerkit säilyvät toimivina
4. Testaa mahdolliset paikallistetut tietovisaosiot

### Käännöksen metatiedot

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

## Virheiden etsintä ja vianmääritys

### Yleiset ongelmat

**Quiz-app ei käynnisty**:
- Tarkista Node.js-versio (v14+ suositeltu)
- Poista `node_modules` ja `package-lock.json`, suorita `npm install` uudelleen
- Tarkista porttikonfliktit (oletuksena: Vite käyttää porttia 5173)

**API-palvelin ei käynnisty**:
- Varmista, että Node.js-versio täyttää minimivaatimuksen (node >=10)
- Tarkista, onko portti jo käytössä
- Varmista, että kaikki riippuvuudet on asennettu komennolla `npm install`

**Selaimen laajennus ei lataudu**:
- Varmista, että manifest.json on oikein muotoiltu
- Tarkista selaimen konsolista virheet
- Noudata selainkohtaisia laajennuksen asennusohjeita

**Python-chat-projektin ongelmat**:
- Varmista, että OpenAI-paketti on asennettu: `pip install openai`
- Tarkista, että GITHUB_TOKEN-ympäristömuuttuja on asetettu
- Tarkista GitHub Models -käyttöoikeudet

**Docsify ei tarjoa dokumentaatiota**:
- Asenna docsify-cli globaaliin käyttöön: `npm install -g docsify-cli`
- Suorita varaston juuressa
- Varmista, että tiedosto `docs/_sidebar.md` on olemassa

### Kehitysympäristön vinkit

- Käytä VS Codea ja Live Server -laajennusta HTML-projekteissa
- Asenna ESLint- ja Prettier-laajennukset yhtenäisyyden vuoksi
- Käytä selaimen DevTools-työkaluja JavaScriptin vianetsintään
- Vue-projekteissa asenna Vue DevTools -selainlaajennus

### Suorituskykyyn liittyvät seikat

- Suuri määrä käännettyjä tiedostoja (50+ kieltä) tekee kopioinneista isoja
- Käytä matalatasoista kloonausta, jos työskentelet vain sisällön parissa: `git clone --depth 1`
- Sulje pois käännökset hauista, kun työskentelet englanninkielisen sisällön kanssa
- Build-prosessit saattavat olla hitaita ensimmäisellä suorituskerralla (npm install, Vite build)

## Turvallisuusnäkökohdat

### Ympäristömuuttujat

- API-avaimia ei koskaan saa sitoa varastoon
- Käytä `.env`-tiedostoja (jo kuuluvat `.gitignoreen`)
- Dokumentoi vaaditut ympäristömuuttujat projektin README-tiedostoissa

### Python-projektit

- Käytä virtuaaliympäristöjä: `python -m venv venv`
- Pidä riippuvuudet ajantasalla
- GitHub-tokenien käyttöoikeuksien tulee olla vähimmäisvaatimusten mukaisia

### GitHub Modelsin käyttö

- Henkilökohtaiset käyttöoikeustokenit (PAT) vaaditaan GitHub Models -pääsyyn
- Säilytä tokenit ympäristömuuttujissa
- Älä koskaan tallenna tokeneita tai tunnuksia julkisesti

## Lisähuomiot

### Kohdeyleisö

- Täysin aloittelijat verkkokehityksessä
- Opiskelijat ja itseopiskelijat
- Opettajat, jotka käyttävät opetussuunnitelmaa luokkahuoneissa
- Sisältö suunniteltu saavutettavaksi ja asteittain taitoja kehittäväksi

### Opetuksellinen filosofia

- Projektipohjainen oppiminen
- Säännölliset tiedon tarkistukset (kyselyt)
- Käytännön koodiharjoitukset
- Todellisten sovellusesimerkkien hyödyntäminen
- Painotus perusasioissa ennen frameworkkeja

### Varaston ylläpito

- Aktiivinen oppijoiden ja kontribuenttien yhteisö
- Riippuvuuksien ja sisällön säännölliset päivitykset
- Ongelmien ja keskustelujen seuraaminen ylläpitäjien toimesta
- Käännösten päivitys automatisoitu GitHub Actionsilla

### Aiheeseen liittyvät resurssit

- [Microsoft Learnin moduulit](https://docs.microsoft.com/learn/)
- [Student Hubin resurssit](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) suositeltu oppijoille
- Lisäkurssit: Generatiivinen AI, Data Science, ML, IoT -opetussuunnitelmat saatavilla

### Työskentely tietyissä projekteissa

Yksityiskohtaiset ohjeet yksittäisistä projekteista löytyvät README-tiedostoista:
- `quiz-app/README.md` - Vue 3 tietovisaohjelma
- `7-bank-project/README.md` - Pankkisovellus todennuksella
- `5-browser-extension/README.md` - Selaimen laajennuksen kehitys
- `6-space-game/README.md` - Canvas-pohjainen peli
- `9-chat-project/README.md` - AI-chat-avustajaprojekti

### Monorepon rakenne

Vaikka tämä ei ole perinteinen monorepo, varastossa on useita itsenäisiä projekteja:
- Jokainen oppitunti on itsenäinen kokonaisuus
- Projektit eivät jaa riippuvuuksia
- Työskentele yksittäisten projektien parissa vaikuttamatta muihin
- Kloonaa koko varasto saadaksesi koko opetussuunnitelmakokemuksen

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, otathan huomioon, että automaattiset käännökset saattavat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäiskielisenä versiona tulee pitää auktoritatiivisena lähteenä. Tärkeissä tiedoissa suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä johtuvista väärinymmärryksistä tai tulkinnoista.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->