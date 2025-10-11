<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-11T11:37:15+00:00",
  "source_file": "AGENTS.md",
  "language_code": "et"
}
-->
# AGENTS.md

## Projekti Ülevaade

See on hariduslik õppekava hoidla, mis on mõeldud veebiarenduse põhialuste õpetamiseks algajatele. Õppekava on Microsoft Cloud Advocates'i poolt välja töötatud 12-nädalane kursus, mis sisaldab 24 praktilist õppetundi JavaScripti, CSS-i ja HTML-i kohta.

### Põhikomponendid

- **Hariduslik sisu**: 24 struktureeritud õppetundi, mis on organiseeritud projektipõhisteks mooduliteks
- **Praktilised projektid**: Terrarium, Klaviatuurimäng, Brauserilaiendus, Kosmosemäng, Pangarakendus, Koodiredaktor ja AI vestlusassistent
- **Interaktiivsed viktoriinid**: 48 viktoriini, igaühes 3 küsimust (enne/pärast õppetundi hindamised)
- **Mitmekeelne tugi**: Automaatne tõlkimine enam kui 50 keelde GitHub Actionsi kaudu
- **Tehnoloogiad**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektide jaoks)

### Arhitektuur

- Hariduslik hoidla õppetundide põhise struktuuriga
- Iga õppetunni kaust sisaldab README-d, koodinäiteid ja lahendusi
- Iseseisvad projektid eraldi kataloogides (quiz-app, erinevad õppetundide projektid)
- Tõlkesüsteem GitHub Actionsi abil (co-op-translator)
- Dokumentatsioon Docsify kaudu ja saadaval PDF-vormingus

## Seadistuskäsud

See hoidla on peamiselt mõeldud haridusliku sisu tarbimiseks. Konkreetsete projektidega töötamiseks:

### Peamise hoidla seadistamine

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Viktoriinirakenduse seadistamine (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Panga projekti API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Brauserilaienduste projektid

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Kosmosemängu projektid

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Vestlusprojekt (Python tagapõhi)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Arendustöövoog

### Sisu panustajatele

1. **Forki hoidla** oma GitHubi kontole
2. **Klooni oma fork** kohalikult
3. **Loo uus haru** oma muudatuste jaoks
4. Tee muudatusi õppetundide sisus või koodinäidetes
5. Testi koodimuudatusi vastavates projektikataloogides
6. Esita pull request vastavalt panustamise juhistele

### Õppijatele

1. Forki või klooni hoidla
2. Liigu järjestikku õppetundide kataloogides
3. Loe iga õppetunni README faile
4. Täida õppetunni eelsed viktoriinid aadressil https://ff-quizzes.netlify.app/web/
5. Töötle koodinäiteid õppetundide kaustades
6. Täida ülesandeid ja väljakutseid
7. Tee õppetunni järgsed viktoriinid

### Reaalajas arendus

- **Dokumentatsioon**: Käivita `docsify serve` juurkataloogis (port 3000)
- **Viktoriinirakendus**: Käivita `npm run dev` quiz-app kataloogis
- **Projektid**: Kasuta VS Code Live Server laiendust HTML projektide jaoks
- **API projektid**: Käivita `npm start` vastavates API kataloogides

## Testimisjuhised

### Viktoriinirakenduse testimine

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Panga API testimine

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Üldine testimisviis

- See on hariduslik hoidla, millel puuduvad ulatuslikud automaatsed testid
- Käsitsi testimine keskendub:
  - Koodinäited töötavad ilma vigadeta
  - Dokumentatsiooni lingid töötavad korrektselt
  - Projektide ehitamine õnnestub
  - Näited järgivad parimaid praktikaid

### Enne esitust kontrollid

- Käivita `npm run lint` kataloogides, kus on package.json
- Kontrolli markdowni linkide kehtivust
- Testi koodinäiteid brauseris või Node.js-is
- Veendu, et tõlked säilitavad õige struktuuri

## Koodistiili juhised

### JavaScript

- Kasuta kaasaegset ES6+ süntaksit
- Järgi projektides pakutud standardseid ESLint konfiguratsioone
- Kasuta tähenduslikke muutujate ja funktsioonide nimesid haridusliku selguse huvides
- Lisa kommentaare, mis selgitavad õppijatele mõisteid
- Vorminda Prettieriga, kui see on seadistatud

### HTML/CSS

- Semantilised HTML5 elemendid
- Responsiivse disaini põhimõtted
- Selged klassinimede konventsioonid
- Kommentaarid, mis selgitavad CSS-i tehnikaid õppijatele

### Python

- PEP 8 stiilijuhised
- Selged, hariduslikud koodinäited
- Tüübiviited, kus need on õppimise jaoks kasulikud

### Markdown dokumentatsioon

- Selge pealkirjade hierarhia
- Koodiplokid keele spetsifikatsiooniga
- Lingid lisamaterjalidele
- Ekraanipildid ja pildid kataloogis `images/`
- Piltide alt-tekst ligipääsetavuse jaoks

### Failide organiseerimine

- Õppetunnid nummerdatud järjestikku (1-getting-started-lessons, 2-js-basics jne)
- Igal projektil on `solution/` ja sageli `start/` või `your-work/` kataloogid
- Pildid salvestatud õppetundide spetsiifilistesse `images/` kaustadesse
- Tõlked kataloogis `translations/{language-code}/` struktuuriga

## Ehitus ja juurutamine

### Viktoriinirakenduse juurutamine (Azure Static Web Apps)

Viktoriinirakendus on konfigureeritud Azure Static Web Apps juurutamiseks:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps konfiguratsioon:
- **Rakenduse asukoht**: `/quiz-app`
- **Väljundi asukoht**: `dist`
- **Töövoog**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentatsiooni PDF-i genereerimine

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify dokumentatsioon

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Projektispetsiifilised ehitused

Igal projektikataloogil võib olla oma ehitusprotsess:
- Vue projektid: `npm run build` loob tootmisvalmis paketid
- Staatilised projektid: Ehitusetapp puudub, serveeri failid otse

## Pull Request juhised

### Pealkirja formaat

Kasuta selgeid, kirjeldavaid pealkirju, mis viitavad muudatuste valdkonnale:
- `[Quiz-app] Lisa uus viktoriin õppetunni X jaoks`
- `[Lesson-3] Paranda kirjaviga terrariumi projektis`
- `[Translation] Lisa hispaania keele tõlge õppetunnile 5`
- `[Docs] Uuenda seadistusjuhiseid`

### Nõutavad kontrollid

Enne PR-i esitamist:

1. **Koodi kvaliteet**:
   - Käivita `npm run lint` mõjutatud projektikataloogides
   - Paranda kõik lintingu vead ja hoiatused

2. **Ehitus kinnitamine**:
   - Käivita `npm run build`, kui see on asjakohane
   - Veendu, et ehitusvead puuduvad

3. **Linkide valideerimine**:
   - Testi kõiki markdowni linke
   - Kontrolli, et pildiviited töötavad

4. **Sisu ülevaatus**:
   - Kontrolli õigekirja ja grammatikat
   - Veendu, et koodinäited on korrektsed ja hariduslikud
   - Kontrolli, et tõlked säilitavad algse tähenduse

### Panustamise nõuded

- Nõustu Microsoft CLA-ga (automaatne kontroll esimesel PR-il)
- Järgi [Microsofti avatud lähtekoodi käitumisjuhendit](https://opensource.microsoft.com/codeofconduct/)
- Vaata [CONTRIBUTING.md](./CONTRIBUTING.md) üksikasjalike juhiste jaoks
- Viita probleemide numbritele PR-i kirjelduses, kui see on asjakohane

### Ülevaatusprotsess

- PR-e vaatavad üle haldajad ja kogukond
- Hariduslik selgus on prioriteet
- Koodinäited peaksid järgima praeguseid parimaid praktikaid
- Tõlked vaadatakse üle täpsuse ja kultuurilise sobivuse osas

## Tõlkesüsteem

### Automaatne tõlkimine

- Kasutab GitHub Actionsi koos co-op-translator töövooga
- Tõlgib automaatselt enam kui 50 keelde
- Algfailid peamistes kataloogides
- Tõlgitud failid kataloogis `translations/{language-code}/`

### Käsitsi tõlke paranduste lisamine

1. Leia fail kataloogist `translations/{language-code}/`
2. Tee parandusi, säilitades struktuuri
3. Veendu, et koodinäited jäävad funktsionaalseks
4. Testi lokaliseeritud viktoriinisisu

### Tõlke metaandmed

Tõlgitud failid sisaldavad metaandmete päist:
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

## Silumine ja tõrkeotsing

### Levinud probleemid

**Viktoriinirakendus ei käivitu**:
- Kontrolli Node.js versiooni (soovitatav v14+)
- Kustuta `node_modules` ja `package-lock.json`, käivita uuesti `npm install`
- Kontrolli porti konflikte (vaikimisi: Vite kasutab porti 5173)

**API server ei käivitu**:
- Veendu, et Node.js versioon vastab miinimumile (node >=10)
- Kontrolli, kas port on juba kasutusel
- Veendu, et kõik sõltuvused on paigaldatud `npm install` abil

**Brauserilaiendus ei laadi**:
- Kontrolli, et manifest.json on korrektselt vormindatud
- Kontrolli brauseri konsooli vigade osas
- Järgi brauserispetsiifilisi laienduse paigaldamise juhiseid

**Python vestlusprojekti probleemid**:
- Veendu, et OpenAI pakett on paigaldatud: `pip install openai`
- Kontrolli, et GITHUB_TOKEN keskkonnamuutuja on seadistatud
- Kontrolli GitHub Models juurdepääsuõigusi

**Docsify ei serveeri dokumente**:
- Paigalda docsify-cli globaalselt: `npm install -g docsify-cli`
- Käivita hoidla juurkataloogist
- Kontrolli, et `docs/_sidebar.md` eksisteerib

### Arenduskeskkonna näpunäited

- Kasuta VS Code'i koos Live Server laiendusega HTML projektide jaoks
- Paigalda ESLint ja Prettier laiendused ühtlaseks vormindamiseks
- Kasuta brauseri DevTools'i JavaScripti silumiseks
- Vue projektide jaoks paigalda Vue DevTools brauserilaiendus

### Jõudluse kaalutlused

- Suur hulk tõlgitud faile (50+ keelt) tähendab, et täielikud kloonid on mahukad
- Kasuta madalat klooni, kui töötad ainult sisuga: `git clone --depth 1`
- Välista tõlked otsingutest, kui töötad ingliskeelse sisuga
- Ehituse protsessid võivad esmakordsel käivitamisel olla aeglased (npm install, Vite build)

## Turvalisuse kaalutlused

### Keskkonnamuutujad

- API võtmeid ei tohiks kunagi hoidlasse lisada
- Kasuta `.env` faile (juba `.gitignore`-is)
- Dokumenteeri nõutavad keskkonnamuutujad projekti README-des

### Python projektid

- Kasuta virtuaalset keskkonda: `python -m venv venv`
- Hoia sõltuvused ajakohased
- GitHubi tokenid peaksid omama minimaalset vajalikku õigust

### GitHub Models juurdepääs

- Isiklikud juurdepääsutokenid (PAT) on vajalikud GitHub Models jaoks
- Tokenid tuleks salvestada keskkonnamuutujatena
- Ära kunagi lisa tokenit või mandaate hoidlasse

## Täiendavad märkused

### Sihtgrupp

- Täielikud algajad veebiarenduses
- Õpilased ja iseseisvad õppijad
- Õpetajad, kes kasutavad õppekava klassiruumis
- Sisu on loodud ligipääsetavuse ja järkjärgulise oskuste arendamise jaoks

### Haridusfilosoofia

- Projektipõhine õppe lähenemine
- Sagedased teadmiste kontrollid (viktoriinid)
- Praktilised koodiharjutused
- Päriselu rakenduste näited
- Keskendumine põhialustele enne raamistikke

### Hoidla hooldus

- Aktiivne õppijate ja panustajate kogukond
- Regulaarne sõltuvuste ja sisu uuendamine
- Probleemide ja arutelude jälgimine haldajate poolt
- Tõlkeuuendused automatiseeritud GitHub Actionsi kaudu

### Seotud ressursid

- [Microsoft Learn moodulid](https://docs.microsoft.com/learn/)
- [Student Hub ressursid](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) soovitatav õppijatele
- Täiendavad kursused: Generatiivne AI, Andmeteadus, ML, IoT õppekavad saadaval

### Konkreetsete projektidega töötamine

Üksikasjalike juhiste jaoks individuaalsete projektide kohta vaata README faile:
- `quiz-app/README.md` - Vue 3 viktoriinirakendus
- `7-bank-project/README.md` - Pangarakendus autentimisega
- `5-browser-extension/README.md` - Brauserilaienduse arendus
- `6-space-game/README.md` - Canvas-põhine mänguarendus
- `9-chat-project/README.md` - AI vestlusassistendi projekt

### Monorepo struktuur

Kuigi mitte traditsiooniline monorepo, sisaldab see hoidla mitmeid iseseisvaid projekte:
- Iga õppetund on iseseisev
- Projektid ei jaga sõltuvusi
- Töötage individuaalsete projektidega, mõjutamata teisi
- Klooni kogu hoidla täieliku õppekava kogemuse jaoks

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.