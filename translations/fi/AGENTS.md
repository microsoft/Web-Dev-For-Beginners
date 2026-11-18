# AGENTS.md

## Projektin yleiskuvaus

Tämä on opetuskäyttöön tarkoitettu opetussuunnitelman arkisto, joka opettaa verkkokehityksen perusteita aloittelijoille. Opetussuunnitelma on kattava 12 viikon kurssi, jonka ovat kehittäneet Microsoft Cloud Advocates. Se sisältää 24 käytännön läpikäytävää oppituntia, joissa käsitellään JavaScriptiä, CSS:ää ja HTML:ää.

### Keskeiset osat

- **Opetussisältö**: 24 jäsenneltyä oppituntia projekti-pohjaisina moduuleina  
- **Käytännön projektit**: Terrarium, Typing Game, selainlaajennus, Space Game, pankkisovellus, koodieditori ja AI-chattiapuri  
- **Interaktiiviset visailut**: 48 visailua, joissa jokaisessa 3 kysymystä (ennen ja jälkeen oppitunnin arvioinnit)  
- **Monikielinen tuki**: Automaattiset käännökset yli 50 kielelle GitHub Actions -työkalun avulla  
- **Teknologiat**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI-projekteissa)

### Arkkitehtuuri

- Opetussisältö arkistona oppituntipohjaisella rakenteella  
- Jokaisen oppitunnin kansiossa README, koodiesimerkit ja ratkaisut  
- Riippumattomat projektit omissa kansioissaan (quiz-app, eri oppituntiprojektit)  
- Käännösjärjestelmä GitHub Actions (co-op-translator) avulla  
- Dokumentaatio tarjotaan Docsifylla ja myös PDF-muodossa

## Asennuskomennot

Tätä arkistoa käytetään pääasiassa opetussisällön kuluttamiseen. Jos haluat työskennellä tiettyjen projektien parissa:

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
  
### Selainlaajennusprojektit

```bash
cd 5-browser-extension/solution
npm install
# Noudata selaimen tiettyjä laajennuksen latausohjeita
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
# Aseta GITHUB_TOKEN -ympäristömuuttuja
python api.py
```
  
## Kehitysprosessi

### Sisällöntuottajille

1. **Forkkaa arkisto** GitHub-tilillesi  
2. **Kloonaa oma forkkaus** paikallisesti  
3. **Luo uusi haara** muutoksillesi  
4. Tee muutoksia oppituntisisältöön tai koodiesimerkkeihin  
5. Testaa koodimuutokset asiaankuuluvissa projektikansioissa  
6. Tee pull request -pyyntöjä noudattaen ohjeistusta

### Oppijoille

1. Forkkaa tai kloonaa arkisto  
2. Siirry oppituntikansioihin järjestyksessä  
3. Lue kaikkien oppituntien README-tiedostot  
4. Tee ennen oppituntia olevat visailut osoitteessa https://ff-quizzes.netlify.app/web/  
5. Käy läpi koodiesimerkit oppituntikansioissa  
6. Tee tehtävät ja haasteet  
7. Tee oppitunnin jälkeiset visailut

### Live-kehitys

- **Dokumentaatio**: Suorita `docsify serve` juurikansiossa (portti 3000)  
- **Quiz App**: Suorita `npm run dev` quiz-app-kansiossa  
- **Projektit**: Käytä VS Coden Live Server -laajennusta HTML-projekteihin  
- **API-projektit**: Suorita `npm start` asianmukaisissa API-kansioissa

## Testausohjeet

### Quiz Appin testaus

```bash
cd quiz-app
npm run lint       # Tarkista koodityyliongelmat
npm run build      # Varmista, että käännös onnistuu
```
  
### Pankki-API:n testaus

```bash
cd 7-bank-project/api
npm run lint       # Tarkista koodityylin ongelmat
node server.js     # Varmista, että palvelin käynnistyy ilman virheitä
```
  
### Yleinen testauslähestymistapa

- Tämä on oppimiseen tarkoitettu arkisto, jossa ei ole kattavia automatisoituja testejä  
- Manuaalinen testaus keskittyy:
  - Koodiesimerkkien sujuva toimivuus ilman virheitä  
  - Dokumentaation linkkien oikea toiminta  
  - Projektien kääntymisen onnistuminen  
  - Esimerkkien noudattavan hyviä käytäntöjä

### Tarkistukset ennen lähettämistä

- Suorita `npm run lint` niissä kansioissa, joissa on package.json  
- Varmista, että markdown-linkit ovat voimassa  
- Testaa koodiesimerkit selaimessa tai Node.js:ssä  
- Tarkista, että käännökset säilyttävät rakenteensa

## Koodityyliohjeet

### JavaScript

- Käytä modernia ES6+ syntaksia  
- Noudata projektien mukana tulevia ESLint-konfiguraatioita  
- Käytä merkityksellisiä muuttuja- ja funktioiden nimiä opetuksen selkeyden takia  
- Lisää kommentteja käsitteiden selittämiseen oppijoille  
- Muotoile Prettierilla, jos käyttö on konfiguroitu

### HTML/CSS

- Semanttiset HTML5-elementit  
- Responsiivisen suunnittelun periaatteet  
- Selkeät luokkien nimeämiskäytännöt  
- Kommentit CSS-tekniikoiden selittämiseen oppijoille

### Python

- PEP 8 -tyyliohjeiden noudattaminen  
- Selkeät, opetukselliset koodiesimerkit  
- Typet-vihjeet oppimista helpottamaan

### Markdown-dokumentaatio

- Selkeä otsikkohierarkia  
- Koodilohkot kielimäärityksillä  
- Linkit lisäresursseihin  
- Kuvakaappaukset ja kuvat `images/` kansioissa  
- Kuville saavutettavuustekstit (alt)

### Tiedostojen järjestäminen

- Oppitunnit numeroitu peräkkäin (1-getting-started-lessons, 2-js-basics, jne.)  
- Jokaisessa projektissa on yleensä `solution/` ja usein `start/` tai `your-work/` kansiot  
- Kuvat tallennetaan oppituntikohtaisiin `images/` kansioihin  
- Käännökset `translations/{language-code}/` -rakenteessa

## Kääntäminen ja käyttöönotto

### Quiz Appin käyttöönotto (Azure Static Web Apps)

Quiz-app on konfiguroitu Azure Static Web Apps -käyttöönottoa varten:

```bash
cd quiz-app
npm run build      # Luo dist/-kansion
# Ottaa käyttöön GitHub Actions -työnkulun kautta, kun pushataan main-haaraan
```
  
Azure Static Web Apps -konfiguraatio:  
- **App location**: `/quiz-app`  
- **Output location**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentaation PDF-generointi

```bash
npm install                    # Asenna docsify-to-pdf
npm run convert               # Luo PDF docsista
```
  
### Docsify dokumentaatio

```bash
npm install -g docsify-cli    # Asenna Docsify globaalisti
docsify serve                 # Palvele osoitteessa localhost:3000
```
  
### Projektikohtaiset käännösprosessit

Jokaisella projektikansiolla voi olla oma rakennusprosessi:  
- Vue-projekteissa `npm run build` luo tuotantopaketteja  
- Staattisissa projekteissa ei ole rakennusvaihetta, tiedostot tarjotaan suoraan

## Pull request -ohjeistus

### Otsikemuoto

Käytä selkeitä, kuvaavia otsikoita, jotka ilmaisevat muutoksen kohteen:  
- `[Quiz-app] Lisää uusi visailu oppitunnille X`  
- `[Lesson-3] Korjaa kirjoitusvirhe terrarium-projektissa`  
- `[Translation] Lisää espanjankielinen käännös oppitunnille 5`  
- `[Docs] Päivitä asennusohjeet`

### Pakolliset tarkistukset

Ennen PR:n lähettämistä:  

1. **Koodin laatu**:  
   - Suorita `npm run lint` muokatuissa projektikansioissa  
   - Korjaa kaikki lint-virheet ja varoitukset

2. **Käännöksen varmistus**:  
   - Suorita `npm run build` tarvittaessa  
   - Varmista, ettei rakennusvirheitä ole

3. **Linkkien tarkistus**:  
   - Testaa kaikki markdown-linkit  
   - Varmista kuvaviitteiden toimivuus

4. **Sisällön tarkastus**:  
   - Tarkista oikeinkirjoitus ja kielioppi  
   - Varmista, että koodiesimerkit ovat oikein ja opetuksellisia  
   - Tarkista käännösten tarkkuus ja merkityksen säilyminen

### Osallistumisvaatimukset

- Hyväksy Microsoftin CLA-sopimus (automaattinen tarkistus ensimmäisellä PR:llä)  
- Noudata [Microsoftin avoimen lähdekoodin käytännesääntöjä](https://opensource.microsoft.com/codeofconduct/)  
- Katso [CONTRIBUTING.md](./CONTRIBUTING.md) yksityiskohtaiset ohjeet  
- Viittaa mahdollisiin issue-numeroihin PR-kuvauksessa

### Tarkastusprosessi

- PR:t tarkistaa ylläpitäjät ja yhteisö  
- Painopisteenä opetuksellinen selkeys  
- Koodiesimerkkien tulee noudattaa tämänhetkisiä parhaita käytäntöjä  
- Käännökset tarkastetaan tarkkuuden ja kulttuurisen sopivuuden osalta

## Käännösjärjestelmä

### Automaattinen käännös

- Käyttää GitHub Actionsia co-op-translator työnkululla  
- Kääntää automaattisesti yli 50 kielelle  
- Lähdetiedostot pääkansioissa  
- Käännetyt tiedostot `translations/{language-code}/` kansioissa

### Manuaalisten käännösparannusten lisääminen

1. Etsi tiedosto `translations/{language-code}/` -kansiosta  
2. Tee parannukset rakenteen säilyttäen  
3. Varmista, että koodiesimerkit toimivat edelleen  
4. Testaa mahdollinen lokalisoitu visailusisältö

### Käännösmetadata

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

**Quiz app ei käynnisty**:  
- Tarkista Node.js versio (v14+ suositeltu)  
- Poista `node_modules` ja `package-lock.json`, suorita `npm install` uudelleen  
- Tarkista porttikonfliktit (oletus: Vite käyttää porttia 5173)

**API-palvelin ei käynnisty**:  
- Varmista, että Node.js versio on vähintään 10  
- Tarkista, onko portti varattu  
- Varmista että riippuvuudet on asennettu `npm install` komennolla

**Selainlaajennus ei lataudu**:  
- Varmista, että manifest.json on oikein muotoiltu  
- Tarkista selaimen konsolista virheilmoitukset  
- Noudata selaimelle spesifisiä laajennuksen asennusohjeita

**Python chat -projekti ei toimi oikein**:  
- Varmista, että OpenAI-paketti on asennettu: `pip install openai`  
- Tarkista, että GITHUB_TOKEN -ympäristömuuttuja on asetettu  
- Tarkista GitHub Models -käyttöoikeudet

**Docsify ei tarjoa dokumentaatiota**:  
- Asenna docsify-cli globaalisti: `npm install -g docsify-cli`  
- Suorita repositoryn juurikansiosta  
- Varmista, että `docs/_sidebar.md` tiedosto on olemassa

### Kehitysympäristön vinkkejä

- Käytä VS Codea Live Server -laajennuksella HTML-projekteissa  
- Asenna ESLint ja Prettier laajennukset yhtenäiseen muotoiluun  
- Käytä selaimen DevToolsia JavaScriptin debuggaamiseen  
- Vue-projekteissa asenna Vue DevTools selaimen laajennus

### Suorituskyvyn huomioita

- Suuri määrä käännettyjä tiedostoja (50+ kieltä) tekee koko kloonista suuren  
- Käytä kevyttä kloonausta, jos työskentelet vain sisällön parissa: `git clone --depth 1`  
- Poissulje käännökset hauista työskennellessäsi englanninkielisen sisällön parissa  
- Rakennusprosessit voivat olla hitaita ensimmäisellä ajokerralla (npm install, Vite build)

## Turvallisuusohjeet

### Ympäristömuuttujat

- API-avaimia ei koskaan saa sitoa arkistoon  
- Käytä `.env` tiedostoja (jo valmiiksi `.gitignore`-listattuina)  
- Dokumentoi tarvittavat ympäristömuuttujat projektin READMEissä

### Python-projektit

- Käytä virtuaaliympäristöjä: `python -m venv venv`  
- Pidä riippuvuudet ajan tasalla  
- GitHub tokenien käyttöoikeudet tulee olla mahdollisimman rajatut

### GitHub Models -käyttö

- Henkilökohtaiset Access Tokenit (PAT) vaaditaan GitHub Modelsin käyttöön  
- Tokenit säilytetään ympäristömuuttujina  
- Älä koskaan sitoa tokeneita tai tunnistetietoja arkistoon

## Lisätiedot

### Kohdeyleisö

- Täysin aloittelijat verkkokehityksessä  
- Opiskelijat ja itseopiskelijat  
- Opettajat, jotka käyttävät opetussuunnitelmaa luokkahuoneessa  
- Sisältö on suunniteltu saavutettavaksi ja taitotasoa asteittain kehittäväksi

### Opetushenkiset periaatteet

- Projekti-pohjainen oppiminen  
- Säännölliset tietotarkistukset (visailut)  
- Käytännön ohjelmointiharjoitukset  
- Todellisten esimerkkien hyödyntäminen  
- Painotus perusteissa ennen frameworkeja

### Arkiston ylläpito

- Aktiivinen oppijoiden ja osallistujien yhteisö  
- Riippuvuuksien ja sisällön säännölliset päivitykset  
- Kysymysten ja keskustelujen seuranta ylläpitäjien toimesta  
- Käännösten päivitykset automatisoitu GitHub Actionsin kautta

### Liittyvät resurssit

- [Microsoft Learn -moduulit](https://docs.microsoft.com/learn/)  
- [Student Hub -resurssit](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) suositellaan oppijoille  
- Lisäkursseja: Generative AI, Data Science, ML, IoT opetussuunnitelmat saatavilla

### Työskentely erityisten projektien kanssa

Yksityiskohtaiset ohjeet löytyvät seuraavilta README-tiedostoilta:  
- `quiz-app/README.md` - Vue 3 visailusovellus  
- `7-bank-project/README.md` - Pankkisovellus autentikoinnilla  
- `5-browser-extension/README.md` - Selainlaajennuksen kehitys  
- `6-space-game/README.md` - Canvas-pohjainen peli  
- `9-chat-project/README.md` - AI-chattiapurin projekti

### Monorepon rakenne

Vaikka kyseessä ei ole perinteinen monorepo, tämä arkisto sisältää useita erillisiä projekteja:  
- Jokainen oppitunti on itsenäinen kokonaisuus  
- Projektit eivät jaa riippuvuuksia keskenään  
- Työskentele yksittäisten projektien parissa vaikuttamatta muihin  
- Kloonaa koko arkisto saadaksesi täyden opetussuunnitelman kokemuksen

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälykäännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, otathan huomioon, että automaattiset käännökset saattavat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäiskielellä tulee pitää virallisena lähteenä. Kriittisissä tiedoissa suosittelemme ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä aiheutuvista väärinymmärryksistä tai väärintulkinnasta.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->