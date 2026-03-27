# AGENTS.md

## Projektin yleiskuvaus

Tämä on opetussisältöjen arkisto, joka on tarkoitettu aloittelijoiden web-kehityksen perusteiden opettamiseen. Opetussuunnitelma on kattava 12 viikon kurssi, jonka ovat kehittäneet Microsoft Cloud Advocates, ja se sisältää 24 käytännönläheistä oppituntia JavaScriptin, CSS:n ja HTML:n parissa.

### Keskeiset osat

- **Opetussisältö**: 24 rakenteellista oppituntia, jotka on organisoitu projektiperusteisiin moduuleihin  
- **Käytännön projektit**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor ja AI Chat Assistant  
- **Interaktiiviset kyselyt**: 48 kyselyä, joissa on 3 kysymystä jokaisessa (ennen ja jälkeen oppituntiarvioinnit)  
- **Monikielinen tuki**: Automaattiset käännökset yli 50 kielelle GitHub Actionsilla  
- **Teknologiat**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI-projekteissa)  

### Arkkitehtuuri

- Opetussisältöarkisto oppituntirakenteella  
- Jokaisessa oppituntikansiossa README, koodiesimerkit ja ratkaisut  
- Itsenäiset projektit omissa hakemistoissaan (quiz-app, erilaiset oppituntiprojektit)  
- Käännösjärjestelmä GitHub Actionsin avulla (co-op-translator)  
- Dokumentaatio tarjotaan Docsifyllä ja saatavilla PDF-muodossa  

## Asennuskäskyt

Tämä arkisto on ensisijaisesti tarkoitettu opetussisällön kuluttamiseen. Jos työskentelet tiettyjen projektien kanssa:

### Pääarkiston pystytys

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
  
### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Käynnistä API-palvelin
npm run lint       # Aja ESLint
npm run format     # Muotoile Prettierillä
```
  
### Selainlaajennusprojektit

```bash
cd 5-browser-extension/solution
npm install
# Noudata selaimen erityisiä laajennusten latausohjeita
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
  
## Kehitystyönkulku

### Sisällöntuottajille

1. **Haarauta arkisto** GitHub-tilillesi  
2. **Kloonaa oma haarukkasi** paikallisesti  
3. **Luo uusi haara** muutoksille  
4. Tee muutoksia oppituntisisältöön tai koodiesimerkkeihin  
5. Testaa koodimuutokset sopivissa projektihakemistoissa  
6. Lähetä vetopyynnöt ohjeiden mukaisesti  

### Oppijoille

1. Haarauta tai kloonaa arkisto  
2. Siirry oppituntihakemistoihin peräkkäin  
3. Lue kunkin oppitunnin README-tiedostot  
4. Tee ennen oppituntia olevat kyselyt osoitteessa https://ff-quizzes.netlify.app/web/  
5. Työstä oppituntien koodiesimerkkejä kansioissa  
6. Suorita tehtävät ja haasteet  
7. Tee oppitunnin jälkeiset kyselyt  

### Live-kehitys

- **Dokumentaatio**: Aja `docsify serve` juurikansiossa (portti 3000)  
- **Quiz App**: Aja `npm run dev` quiz-app-hakemistossa  
- **Projektit**: Käytä VS Coden Live Server -laajennusta HTML-projekteille  
- **API-projektit**: Aja `npm start` vastaavissa API-hakemistoissa  

## Testausohjeet

### Quiz Appin testaus

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
  
### Yleinen testausmenetelmä

- Tämä on opetussisältöarkisto ilman kattavia automaattisia testejä  
- Manuaalisen testauksen painopisteet:  
  - Koodiesimerkkien suorittaminen ilman virheitä  
  - Dokumentaation linkkien toimivuus  
  - Projektien rakentamiset onnistuvat  
  - Esimerkit noudattavat parhaita käytäntöjä  

### Ennen lähettämistä tarkistukset

- Aja `npm run lint` saataville hakemistoissa, joissa on package.json  
- Varmista markdown-linkkien toimivuus  
- Testaa koodiesimerkkejä selaimessa tai Node.js:ssä  
- Tarkista, että käännökset säilyttävät oikean rakenteen  

## Koodityyliohjeet

### JavaScript

- Käytä nykyaikaista ES6+-syntaksia  
- Seuraa projektien tarjoamia ESLint-määrityksiä  
- Käytä merkityksellisiä muuttuja- ja funktioiden nimiä opetuksen selkeyden vuoksi  
- Lisää kommentteja käsitteiden selityksiin oppijoille  
- Muotoile koodi Prettierillä missä se on konfiguroitu  

### HTML/CSS

- Semanttiset HTML5-elementit  
- Responsiivisen suunnittelun periaatteet  
- Selkeät luokkien nimeämiskäytännöt  
- Kommentit CSS-tekniikoiden selittämiseksi oppijoille  

### Python

- PEP 8 -tyyliohjeiden seuraaminen  
- Selkeät, opettavaiset koodiesimerkit  
- Tyyppivihjeet, kun se tukee oppimista  

### Markdown-dokumentaatio

- Selkeä otsikkohierarkia  
- Koodilohkot kielimäärittelyillä  
- Linkit lisäresursseihin  
- Kuvakaappaukset ja kuvat `images/`-hakemistoissa  
- Kuville alt-tekstit saavutettavuutta varten  

### Tiedostojen organisointi

- Oppitunnit numeroitu peräkkäin (1-getting-started-lessons, 2-js-basics jne.)  
- Jokaisessa projektissa on `solution/` ja usein `start/` tai `your-work/` -kansiot  
- Kuvat ovat oppituntikohtaisissa `images/`-kansioissa  
- Käännökset sijaitsevat `translations/{language-code}/` -rakenteessa  

## Kokoaminen ja käyttöönotto

### Quiz Appin käyttöönotto (Azure Static Web Apps)

Quiz-app on konfiguroitu Azure Static Web Apps -käyttöönottoa varten:

```bash
cd quiz-app
npm run build      # Luo dist/ kansion
# Julkaisee GitHub Actions -työnkulun kautta push-toiminnolla main-haaraan
```
  
Azure Static Web Apps -konfigurointi:  
- **Sovelluksen sijainti**: `/quiz-app`  
- **Tulostussijainti**: `dist`  
- **Työnkulku**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Dokumentaation PDF:n generointi

```bash
npm install                    # Asenna docsify-to-pdf
npm run convert               # Luo PDF docs-sisällöstä
```
  
### Docsify-dokumentaatio

```bash
npm install -g docsify-cli    # Asenna Docsify globaalisti
docsify serve                 # Palvele localhost:3000:ssa
```
  
### Projektikohtaiset kokoamiset

Jokaisella projektihakemistolla voi olla oma build-prosessinsa:  
- Vue-projektit: `npm run build` luo tuotantopaketteja  
- Staattiset projektit: Ei build-vaihetta, tiedostot palvellaan suoraan  

## Vetopyyntöohjeet

### Otsikon muotoilu

Käytä selkeitä, kuvaavia otsikoita, jotka osoittavat muutoksen alueen:  
- `[Quiz-app] Lisää uusi kysely oppitunnille X`  
- `[Lesson-3] Korjaa kirjoitusvirhe terrarium-projektissa`  
- `[Translation] Lisää espanjankielinen käännös oppitunnille 5`  
- `[Docs] Päivitä asennusohjeet`  

### Pakolliset tarkistukset

Ennen vetopyynnön lähettämistä:

1. **Koodin laatu**:  
   - Aja `npm run lint` kyseisissä projektihakemistoissa  
   - Korjaa kaikki lint-virheet ja varoitukset  

2. **Buildin varmistus**:  
   - Aja `npm run build` tarvittaessa  
   - Varmista, ettei build-virheitä ilmene  

3. **Linkkien validointi**:  
   - Testaa kaikki markdown-linkit  
   - Varmista kuvaviitteiden toimivuus  

4. **Sisältötarkastus**:  
   - Oikolue oikeinkirjoitus ja kielioppi  
   - Varmista, että koodiesimerkit ovat oikein ja opetuksellisia  
   - Varmista, että käännökset säilyttävät alkuperäisen merkityksen  

### Osallistumisen vaatimukset

- Hyväksy Microsoftin CLA (automaattinen tarkistus ensimmäisellä PR:llä)  
- Noudata [Microsoft Open Source Code of Conductia](https://opensource.microsoft.com/codeofconduct/)  
- Katso [CONTRIBUTING.md](./CONTRIBUTING.md) yksityiskohtaiset ohjeet  
- Viittaa ongelmanumeroihin PR-kuvauksessa tarvittaessa  

### Arviointiprosessi

- Vetopyynnöt arvioivat ylläpitäjät ja yhteisö  
- Opetuksellisuus on prioriteetti  
- Koodiesimerkkien on noudatettava nykyisiä parhaita käytäntöjä  
- Käännökset tarkastetaan tarkkuuden ja kulttuurisopivuuden varmistamiseksi  

## Käännösjärjestelmä

### Automaattinen käännös

- Käyttää GitHub Actionseja co-op-translator-työnkululla  
- Kääntää yli 50 kielelle automaattisesti  
- Lähdetiedostot pääkansioissa  
- Käännetyt tiedostot kansioissa `translations/{language-code}/`  

### Manuaalisten käännösten parannusten lisääminen

1. Etsi tiedosto kansiosta `translations/{language-code}/`  
2. Tee parannuksia rakenteen säilyttämiseksi  
3. Varmista, että koodiesimerkit toimivat edelleen  
4. Testaa mahdolliset lokalisoidut kyselysisällöt  

### Käännösten metatiedot

Käännetyissä tiedostoissa on metatietopääte:  
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

**Quiz app ei käynnisty**:  
- Tarkista Node.js-versio (v14+ suositeltu)  
- Poista `node_modules` ja `package-lock.json`, aja `npm install` uudelleen  
- Tarkista porttikonfliktit (oletus: Vite käyttää porttia 5173)  

**API-palvelin ei käynnisty**:  
- Varmista, että Node.js-versio on vähintään 10 tai uudempi  
- Tarkista, onko portti jo käytössä  
- Varmista, että kaikki riippuvuudet on asennettu komennolla `npm install`  

**Selainlaajennus ei lataudu**:  
- Varmista manifest.json:n oikea muotoilu  
- Tarkista selaimen konsolivirheet  
- Noudata selainkohtaisia laajennuksen asennusohjeita  

**Pythonin chat-projektin ongelmat**:  
- Varmista, että OpenAI-paketti on asennettu: `pip install openai`  
- Varmista, että GITHUB_TOKEN-ympäristömuuttuja on asetettu  
- Tarkista GitHub Models -käyttöoikeudet  

**Docsify ei palvele dokumentaatiota**:  
- Asenna docsify-cli globaalisti: `npm install -g docsify-cli`  
- Aja arkiston juurikansiosta  
- Tarkista, että `docs/_sidebar.md` on olemassa  

### Kehitysympäristön vinkkejä

- Käytä VS Codea Live Server -laajennuksella HTML-projekteille  
- Asenna ESLint- ja Prettier-laajennukset yhtenäiseen muotoiluun  
- Käytä selaimen DevToolsia JavaScriptin virheenkorjaukseen  
- Vue-projekteissa asenna Vue DevTools -selaimien laajennus  

### Suorituskyvyn huomioita

- Suuri määrä käännettyjä tiedostoja (yli 50 kieltä) tekee täydellisistä klooneista suuria  
- Käytä matalaa kloonausta, jos työskentelet vain sisällön parissa: `git clone --depth 1`  
- Sulje käännökset haut pois haettaessa englanninkielistä sisältöä  
- Build-prosessit voivat olla hitaita ensimmäisellä kerralla (npm install, Vite build)  

## Turvallisuusnäkökohdat

### Ympäristömuuttujat

- API-avaimia ei koskaan tule tallentaa arkistoon  
- Käytä `.env`-tiedostoja (jo sisällytetty `.gitignoreen`)  
- Dokumentoi tarvittavat ympäristömuuttujat projektien READMEissä  

### Python-projektit

- Käytä virtuaaliympäristöjä: `python -m venv venv`  
- Pidä riippuvuudet ajan tasalla  
- GitHub-tokenien käyttöoikeuksien tulisi olla mahdollisimman rajatut  

### GitHub Models -käyttöoikeudet

- Henkilökohtaiset käyttöoikeustunnukset (PAT) vaaditaan GitHub Modelsille  
- Tunnukset tulee tallentaa ympäristömuuttujiin  
- Älä koskaan tallenna tunnuksia tai tunnistetietoja arkistoon  

## Lisähuomiot

### Kohdeyleisö

- Täysin aloittelijat web-kehityksessä  
- Opiskelijat ja itseopiskelijat  
- Opettajat, jotka käyttävät opetussuunnitelmaa luokkahuoneissa  
- Sisältö on suunniteltu saavutettavuus ja taitojen asteittaista kehittämistä varten  

### Opetuksellinen filosofia

- Projektipohjainen oppimismenetelmä  
- Usein toistuvat tietämyksen tarkistukset (kyselyt)  
- Käytännön koodausharjoitukset  
- Todelliset sovellusesimerkit  
- Painotus perusteissa ennen kehyskirjastoja  

### Arkiston ylläpito

- Aktiivinen oppijoiden ja sisällöntuottajien yhteisö  
- Riittävä päivitys riippuvuuksiin ja sisältöihin  
- Ongelmia ja keskusteluita valvovat ylläpitäjät  
- Käännöspäivitykset automatisoitu GitHub Actionsien avulla  

### Aiheeseen liittyvät resurssit

- [Microsoft Learn -moduulit](https://docs.microsoft.com/learn/)  
- [Student Hub -resurssit](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) suositellaan oppijoille  
- Lisäkursseja: Generative AI, Data Science, ML, IoT opetussuunnitelmat saatavilla  

### Työskentely tietyissä projekteissa

Yksityiskohtaiset ohjeet yksittäisille projekteille löytyvät näistä README-tiedostoista:  
- `quiz-app/README.md` - Vue 3 -kyselysovellus  
- `7-bank-project/README.md` - Pankkisovellus todennuksella  
- `5-browser-extension/README.md` - Selainlaajennuskehitys  
- `6-space-game/README.md` - Canvas-pohjainen pelikehitys  
- `9-chat-project/README.md` - AI-chat-avustajaprojekti  

### Monorepokoko

Vaikka kyseessä ei ole perinteinen monorepo, tämä arkisto sisältää useita riippumattomia projekteja:  
- Jokainen oppitunti on itsenäinen  
- Projektit eivät jaa riippuvuuksia  
- Työskentele yksittäisten projektien parissa ilman vaikutusta muihin  
- Kloonaa koko arkisto saadaksesi koko opetussuunnitelman kokemuksen  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastuuvapauslauseke**:
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, ota huomioon, että automaattiset käännökset saattavat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäiskielellä tulee pitää virallisena lähteenä. Tärkeiden tietojen osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa mahdollisista väärinymmärryksistä tai tulkinnoista, jotka johtuvat tämän käännöksen käytöstä.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->