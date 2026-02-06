# AGENTS.md

## Projektin yleiskatsaus

Tämä on opetusohjelmakokoelma verkkokehityksen perusteiden opettamiseen aloittelijoille. Opetusohjelma on kattava 12 viikon kurssi, jonka on kehittänyt Microsoft Cloud Advocates, ja se sisältää 24 käytännönläheistä oppituntia, jotka kattavat JavaScriptin, CSS:n ja HTML:n.

### Keskeiset osat

- **Opetussisältö**: 24 rakenteellista oppituntia projektipohjaisissa moduuleissa
- **Käytännön projektit**: Terrarium, Typing Game, Selainlaajennus, Space Game, Pankkisovellus, Koodieditori ja AI Chat Assistant
- **Interaktiiviset tietovisat**: 48 tietovisaa, joissa kussakin 3 kysymystä (ennen ja jälkeen oppitunnin arvioinnit)
- **Monikielinen tuki**: Automaattiset käännökset yli 50 kielelle GitHub Actionsilla
- **Teknologiat**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI-projekteihin)

### Arkkitehtuuri

- Opetusrepo oppituntirakenteella
- Jokaisessa oppituntikansiossa README, koodiesimerkit ja ratkaisut
- Itsenäiset projektit omissa hakemistoissaan (quiz-app, eri oppituntiprojektit)
- Käännösjärjestelmä GitHub Actionsia käyttäen (co-op-translator)
- Dokumentaatio Docsifyllä ja PDF-muodossa saatavana

## Asennuskomennot

Tämä repo on pääasiassa opetussisällön kulutukseen. Työskennellessäsi tiettyjen projektien parissa:

### Päänäilon asetukset

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

### Selainlaajennusprojektit

```bash
cd 5-browser-extension/solution
npm install
# Noudata selainkohtaisia lisäosien latausohjeita
```

### Space Game -projektit

```bash
cd 6-space-game/solution
npm install
# Avaa index.html selaimessa tai käytä Live Serveriä
```

### Chat-projekti (Python-palvelin)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Aseta GITHUB_TOKEN-ympäristömuuttuja
python api.py
```

## Kehitystyön kulku

### Sisällöntuottajille

1. **Haarauta repositorio** GitHub-tilillesi
2. **Kloonaa haarasi** paikallisesti
3. **Luo uusi haara** muutoksillesi
4. Tee muutoksia oppituntisisältöön tai koodiesimerkkeihin
5. Testaa koodimuutoksia asianmukaisissa projektikansioissa
6. Lähetä pull requesteja seuraamalla ohjeita

### Oppijoille

1. Haarauta tai kloonaa repo
2. Siirry oppituntikansioihin peräkkäin
3. Lue jokaisen oppitunnin README-tiedostot
4. Tee oppituntien esikyselyt osoitteessa https://ff-quizzes.netlify.app/web/
5. Työstä koodiesimerkkejä oppituntikansioissa
6. Suorita tehtävät ja haasteet
7. Tee oppituntien jälkikyselyt

### Live-kehitys

- **Dokumentaatio**: Suorita `docsify serve` juurikansiossa (portti 3000)
- **Quiz-sovellus**: Suorita `npm run dev` quiz-app-kansiossa
- **Projektit**: Käytä VS Coden Live Server -laajennusta HTML-projekteissa
- **API-projektit**: Suorita `npm start` vastaavissa API-kansioissa

## Testausohjeet

### Quiz-sovelluksen testaus

```bash
cd quiz-app
npm run lint       # Tarkista koodityylivirheet
npm run build      # Varmista, että kokoaminen onnistuu
```

### Pankin API-testauksen ohjeet

```bash
cd 7-bank-project/api
npm run lint       # Tarkista koodityylin ongelmat
node server.js     # Varmista, että palvelin käynnistyy ilman virheitä
```

### Yleinen testausmenetelmä

- Tämä on opetusrepo ilman kattavia automaattisia testejä
- Käsin tehtävä testaus keskittyy:
  - Koodiesimerkkien virheettömään suoritukseen
  - Dokumentaation linkkien toimivuuteen
  - Projektien onnistuneeseen käännökseen
  - Esimerkkien parhaiden käytäntöjen noudattamiseen

### Esittäminen ennen tarkistusta

- Suorita `npm run lint` kansioissa, joissa on package.json
- Varmista markdown-linkkien toimivuus
- Testaa koodiesimerkit selaimessa tai Node.js:ssä
- Tarkista, että käännökset säilyttävät rakenteensa

## Koodityyliohjeet

### JavaScript

- Käytä modernia ES6+ syntaksia
- Noudata projektien mukana tulevia ESLint-asetuksia
- Käytä merkityksellisiä muuttuja- ja funktioiden nimiä opetusmukavuuden parantamiseksi
- Lisää kommentteja käsitteiden selittämiseksi oppijoille
- Muotoile Prettierillä, jos konfiguroitu

### HTML/CSS

- Semanttiset HTML5-elementit
- Responsiivisen suunnittelun periaatteet
- Selkeät luokkanimikkeet
- Kommentit CSS-tekniikoiden selittämiseksi oppijoille

### Python

- PEP 8 -tyyliohjeet
- Selkeät, opetukselliset koodiesimerkit
- Tyyppivihjeet oppimista tukemaan

### Markdown-dokumentaatio

- Selkeä otsikkorakenne
- Koodilohkot kielimääritteellä
- Linkit lisäresursseihin
- Kuvakaappaukset ja kuvat `images/`-kansioissa
- Kuvien tekstit saavutettavuuden vuoksi

### Tiedostojen järjestäminen

- Oppitunnit numeroin sequentialisesti (1-getting-started-lessons, 2-js-basics jne.)
- Jokaisella projektilla on `solution/` ja usein `start/` tai `your-work/` kansiot
- Kuvat säilytetään oppituntikohtaisissa `images/`-kansioissa
- Käännökset `translations/{language-code}/` rakenteessa

## Käännös ja julkaisuprosessi

### Quiz-sovelluksen julkaisuprosessi (Azure Static Web Apps)

Quiz-app on konfiguroitu Azure Static Web Apps -julkaisua varten:

```bash
cd quiz-app
npm run build      # Luo dist/-kansion
# Julkaisee GitHub Actions -työnkulun kautta, kun main-haaraan tehdään pushaus
```

Azure Static Web Apps -konfiguraatio:
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
docsify serve                 # Palvele osoitteessa localhost:3000
```

### Projektikohtaiset käännökset

Jokaisessa projektihakemistossa voi olla oma käännösprosessi:
- Vue-projekteissa: `npm run build` tuottaa tuotantopaketteja
- Staattisissa projekteissa: Ei käännösvaihetta, tarjoillaan tiedostot suoraan

## Pull request -ohjeet

### Otsikkomuoto

Käytä selkeitä, kuvailevia otsikoita ilmoittaen muutoksen alue:
- `[Quiz-app] Lisää uusi tietovisa oppitunnille X`
- `[Lesson-3] Korjaa kirjoitusvirhe terrarium-projektissa`
- `[Translation] Lisää espanjankielinen käännös oppitunnille 5`
- `[Docs] Päivitä asennusohjeet`

### Vaatimukset tarkistuksille

Ennen PR:n lähettämistä:

1. **Koodin laatu**:
   - Suorita `npm run lint` vaikuttavissa projektikansioissa
   - Korjaa kaikki lint-virheet ja -varoitukset

2. **Käännöksen varmentaminen**:
   - Suorita `npm run build` tarvittaessa
   - Varmista, ettei käännöksessä ole virheitä

3. **Linkkien tarkastus**:
   - Testaa kaikki markdown-linkit
   - Varmista, että kuvat toimivat

4. **Sisältöarviointi**:
   - Tarkista oikeinkirjoitus ja kielioppi
   - Varmista koodiesimerkkien oikeellisuus ja opettavuus
   - Tarkista käännösten säilyttäneen alkuperäisen merkityksen

### Osallistumisvaatimukset

- Hyväksy Microsoftin CLA (automaattinen tarkastus ensimmäisellä PR:llä)
- Noudata [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) -käyttäytymissääntöä
- Katso yksityiskohdat [CONTRIBUTING.md](./CONTRIBUTING.md) -tiedostosta
- Viittaa issue-numeroihin PR-kuvauksessa tarvittaessa

### Tarkastusprosessi

- PR:t tarkistetaan ylläpitäjien ja yhteisön toimesta
- Opetuksellinen selkeys on etusijalla
- Koodiesimerkkien tulee noudattaa parhaita käytäntöjä
- Käännökset tarkistetaan tarkkuuden ja kulttuurin sopivuuden osalta

## Käännösjärjestelmä

### Automaattinen käännös

- Käyttää GitHub Actionsia ja co-op-translator-työnkulkua
- Kääntää automaattisesti yli 50 kielelle
- Lähdetiedostot pääkansioissa
- Käännetyt tiedostot `translations/{language-code}/` hakemistoissa

### Manuaalisten käännösten parannukset

1. Etsi tiedosto `translations/{language-code}/` kansiosta
2. Tee parannukset säilyttäen rakenne
3. Varmista, että koodiesimerkit toimivat edelleen
4. Testaa mahdollinen paikallinen tietovisa sisältö

### Käännöksen metatiedot

Käännetyt tiedostot sisältävät metatietopään:

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

## Virheenkorjaus ja vianratkaisu

### Yleiset ongelmat

**Quiz-sovellus ei käynnisty**:
- Tarkista Node.js-versio (v14+ suositeltu)
- Poista `node_modules` ja `package-lock.json`, suorita `npm install` uudelleen
- Tarkista porttien ristiriidat (oletus: Vite käyttää porttia 5173)

**API-palvelin ei käynnisty**:
- Varmista Node.js-version vaatimukset (node >=10)
- Tarkista, onko portti jo käytössä
- Varmista, että kaikki riippuvuudet on asennettu komennolla `npm install`

**Selainlaajennus ei lataudu**:
- Tarkista manifest.json on oikein muotoiltu
- Tarkista selaimen konsolin virheet
- Noudata selaimeen liittyviä laajennuksen asennusohjeita

**Python-chat-projektin ongelmat**:
- Varmista, että OpenAI-paketti on asennettu: `pip install openai`
- Tarkista GITHUB_TOKEN-ympäristömuuttujan asetus
- Tarkista GitHub Models -käyttöoikeudet

**Docsify ei tarjoa dokumentaatiota**:
- Asenna docsify-cli globaaliin käyttöön: `npm install -g docsify-cli`
- Suorita repovaraston juuresta
- Tarkista, että `docs/_sidebar.md` on olemassa

### Kehitysympäristön vinkit

- Käytä VS Codea Live Server -laajennuksella HTML-projekteissa
- Asenna ESLint ja Prettier -laajennukset yhtenäiseen muotoiluun
- Käytä selaimen DevToolsia JavaScriptin virheenkorjaukseen
- Vue-projekteille asenna Vue DevTools -laajennus selaimeen

### Suorituskyvyn huomioita

- Suuri määrä käännettyjä tiedostoja (50+ kieliä) tekee täydellisestä kloonista raskaan
- Käytä kevyttä kloonausta, jos työskentelet vain sisällön parissa: `git clone --depth 1`
- Sulje käännökset hausta pois työskentelyssä englannin kanssa
- Käännösprosessit voivat olla hitaita ensimmäisellä ajolla (npm install, Vite build)

## Turvallisuusohjeet

### Ympäristömuuttujat

- API-avaimia ei koskaan saa sitoa repositorioon
- Käytä `.env`-tiedostoja (jo .gitignore:ssa)
- Dokumentoi tarvittavat ympäristömuuttujat projektin README-tiedostoihin

### Python-projektit

- Käytä virtuaaliympäristöjä: `python -m venv venv`
- Pidä riippuvuudet ajan tasalla
- GitHub-tokenien tulee olla mahdollisimman rajatuin oikeuksin

### GitHub Models -käyttöoikeudet

- Henkilökohtaiset Access Tokenit (PAT) vaaditaan GitHub Models -käyttöön
- Tokenit säilytettävä ympäristömuuttujina
- Älä koskaan sitoudu tokenia tai tunnistetietoja repositorioon

## Lisätiedot

### Kohdeyleisö

- Täysin aloittelijat verkkokehityksessä
- Opiskelijat ja itseopiskelijat
- Opettajat, jotka käyttävät opetussuunnitelmaa luokissa
- Sisältö on suunniteltu saavutettavaksi ja taitojen asteittaiseksi kehittämiseksi

### Opetuksellinen filosofia

- Projektiin perustuva oppiminen
- Usein toteutettavat tietovisat
- Käytännön koodiharjoitukset
- Todellisten sovellusesimerkkien käyttö
- Painotus perusteissa ennen kehysten käyttöä

### Kokoelman ylläpito

- Aktiivinen oppijoiden ja osallistujien yhteisö
- Riippuvuuksien ja sisällön säännöllinen päivitys
- Issues ja keskustelut ylläpitäjien valvonnassa
- Käännösten päivitykset automatisoitu GitHub Actionsilla

### Aiheeseen liittyvät resurssit

- [Microsoft Learn -moduulit](https://docs.microsoft.com/learn/)
- [Student Hub -resurssit](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) suositellaan oppijoille
- Lisää kursseja: Generatiivinen AI, Data Science, ML, IoT-kurssit saatavilla

### Työskentely erityisten projektien parissa

Yksityiskohtaiset ohjeet yksittäisiin projekteihin löytyvät README-tiedostoista:
- `quiz-app/README.md` - Vue 3 -tietovisasovellus
- `7-bank-project/README.md` - Pankkisovellus autentikoinnilla
- `5-browser-extension/README.md` - Selainlaajennuskehitys
- `6-space-game/README.md` - Canvas-pohjainen peli
- `9-chat-project/README.md` - AI chat assistant -projekti

### Monorepo-rakenne

Vaikka tämä ei ole perinteinen monorepo, se sisältää useita itsenäisiä projekteja:
- Jokainen oppitunti on itsenäinen kokonaisuus
- Projektit eivät jaa riippuvuuksia
- Työskentele yksittäisten projektien kanssa vaikuttamatta muihin
- Kloonaa koko repo saadaksesi täydellisen opetusohjelman kokemuksen

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastuuvapauslauseke**:
Tämä asiakirja on käännetty käyttäen tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, otathan huomioon, että automaattikäännöksissä voi esiintyä virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäiskielellä on aina virallinen lähde. Tärkeiden tietojen osalta suositellaan ammattilaisen tekemää ihmiskäännöstä. Emme ole vastuussa mahdollisista väärinymmärryksistä tai virhetulkintojen seurauksista, jotka johtuvat tästä käännöksestä.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->