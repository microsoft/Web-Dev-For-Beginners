# AGENTS.md

## Projekti ülevaade

See on hariduslik õppekava hoidla veebiarenduse aluste õpetamiseks algajatele. Õppekava on Microsoft Cloud Advocatesi välja töötatud põhjalik 12-nädalane kursus, mis sisaldab 24 praktilist õppetundi, hõlmates JavaScripti, CSSi ja HTMLi.

### Põhikomponendid

- **Hariduslik sisu**: 24 struktureeritud õppetundi, korraldatud projektipõhistesse moodulitesse
- **Praktilised projektid**: Terrarium, Tippimismäng, Brauserilaiend, Kosmosemäng, Panga rakendus, Koodiredaktor ja tehisintellekti juturobot
- **Interaktiivsed viktoriinid**: 48 viktoriini, igas 3 küsimust (enne ja pärast õppetundi)
- **Mitmekeelne tugi**: Automaatne tõlkimine 50+ keelde GitHub Actions abil
- **Tehnoloogiad**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektide jaoks)

### Arhitektuur

- Hariduslik hoidla, millel on õppetundide põhine struktuur
- Igas õppetunni kaustas on README, koodinäited ja lahendused
- Iseseisvad projektid eraldi kaustades (quiz-app, erinevad õppetundide projektid)
- Tõlketeenus kasutades GitHub Actions (co-op-translator)
- Dokumentatsioon esitatakse Docsifyga ja on saadaval PDF-formaadis

## Käivitus käsud

See hoidla on peamiselt mõeldud haridusliku sisu tarbimiseks. Spetsiifiliste projektidega töötamiseks:

### Peahoidla seadistamine

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Viktoriinirakenduse seadistamine (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Käivita arendusserver
npm run build      # Koosta tootmiseks
npm run lint       # Käivita ESLint
```

### Panga projekti API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Käivita API server
npm run lint       # Käivita ESLint
npm run format     # Vorminda Prettier'iga
```

### Brauserilaiendi projektid

```bash
cd 5-browser-extension/solution
npm install
# Järgige brauseripõhiseid laienduste laadimise juhiseid
```

### Kosmosemängu projektid

```bash
cd 6-space-game/solution
npm install
# Ava index.html brauseris või kasuta Live Serverit
```

### Jutuprojekti (Python taust)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sea GITHUB_TOKEN keskkonnamuutuja
python api.py
```

## Arendusvoog

### Sisu panustajatele

1. **Tee hoidlast fork** oma GitHubi kontole
2. **Klooni oma fork lokaalselt**
3. **Loo uus haru** oma muudatuste jaoks
4. Tee muudatusi õppetundide sisus või koodinäidetes
5. Testi koodimuudatusi vastavates projektikaustades
6. Esita pull requestid vastavalt panustamise juhistele

### Õppijatele

1. Tee fork või klooni hoidla
2. Liigu õppetundide kaustades järjestikku
3. Loe iga õppetunni README faile
4. Täida enne õppetundi viktoriinid aadressil https://ff-quizzes.netlify.app/web/
5. Tööta läbi koodinäited õppetundide kaustades
6. Täida ülesandeid ja väljakutseid
7. Tee pärast õppetundi viktoriinid

### Otse arendus

- **Dokumentatsioon**: käivita `docsify serve` juurkaustas (port 3000)
- **Viktoriinirakendus**: käivita `npm run dev` quiz-app kaustas
- **Projektid**: kasuta VS Code Live Serveri lisandit HTML projektide jaoks
- **API projektid**: käivita `npm start` vastavates API kaustades

## Testimise juhised

### Viktoriinirakenduse testimine

```bash
cd quiz-app
npm run lint       # Kontrolli koodi stiili probleeme
npm run build      # Kontrolli, kas ehitus õnnestub
```

### Panga API testimine

```bash
cd 7-bank-project/api
npm run lint       # Kontrolli koodi stiili probleeme
node server.js     # Kontrolli, kas server käivitub ilma vigadeta
```

### Üldine testimisstrateegia

- See on hariduslik hoidla, millel puuduvad põhjalikud automaattestid
- Käsitsi testimine keskendub:
  - Koodinäited käivituvad ilma vigadeta
  - Dokumentatsiooni lingid töötavad korrektselt
  - Projektide ehitused õnnestuvad
  - Näited järgivad parimaid praktikaid

### Enne esitust tehtavad kontrollid

- Käivita `npm run lint` kaustades, kus on package.json
- Kontrolli, et markdown lingid oleksid kehtivad
- Testi koodinäiteid brauseris või Node.js-is
- Kontrolli, et tõlked säilitavad korrektse struktuuri

## Koodi stiili juhised

### JavaScript

- Kasuta kaasaegset ES6+ süntaksit
- Järgi projektides antud standardseid ESLinti konfigureeringuid
- Kasuta tähenduslikke muutujate ja funktsioonide nimesid hariduse selguse huvides
- Lisa kommentaarid õppematerjali selgitamiseks
- Vorminda Prettieriga, kus see on seadistatud

### HTML/CSS

- Semantiline HTML5 elementide kasutus
- Paindlikud kujunduspõhimõtted
- Selged klassinimed
- Kommentaarid CSS tehnikate selgitamiseks õppijatele

### Python

- PEP 8 stiilijuhised
- Selged, hariduslikud koodinäited
- Tüübimärgised, kus õppimise huvides abiks

### Markdown dokumentatsioon

- Selge pealkirjade hierarhia
- Koodiplokid koos keelespetsifikatsiooniga
- Lingid lisamaterjalidele
- Ekraanitõmmised ja pildid `images/` kaustades
- Pildidel alternatiivtekst ligipääsetavuse jaoks

### Faili organiseerimine

- Õppetunnid nummerdatud järjestikku (1-getting-started-lessons, 2-js-basics jne)
- Igal projektil on `solution/` ja sageli `start/` või `your-work/` kaustad
- Pildid hoitakse õppetundipõhistes `images/` kaustades
- Tõlked kaustas `translations/{language-code}/`

## Ehitamine ja juurutamine

### Viktoriinirakenduse juurutamine (Azure Static Web Apps)

Quiz-app on seadistatud Azure Static Web Appsi juurutuseks:

```bash
cd quiz-app
npm run build      # Loob dist/ kausta
# Juurutab GitHub Actions töövoo kaudu, kui tehakse push main harusse
```

Azure Static Web Apps konfiguratsioon:
- **Rakenduse asukoht**: `/quiz-app`
- **Väljundkaust**: `dist`
- **Töövoog**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentatsiooni PDF loomine

```bash
npm install                    # Paigalda docsify-to-pdf
npm run convert               # Loo PDF docsist
```

### Docsify dokumentatsioon

```bash
npm install -g docsify-cli    # Paigalda Docsify globaalselt
docsify serve                 # Serveeri aadressil localhost:3000
```

### Projekti-spetsiifilised ehitused

Igal projekti kaustal võib olla oma ehitusprotsess:
- Vue projektid: `npm run build` loob tootmispakkumised
- Staatilised projektid: puudub ehitusaste, failid serveeritakse otse

## Pull requesti juhised

### Pealkirja vorming

Kasuta selgeid, kirjeldavaid pealkirju, mis näitavad muutuse valdkonda:
- `[Quiz-app] Lisa uus viktoriin õppetunnile X`
- `[Õppetund-3] Paranda trükiviga terrarium projektis`
- `[Tõlge] Lisa hispaania tõlge õppetunnile 5`
- `[Dokumentatsioon] Uuenda seadistuse juhiseid`

### Nõutavad kontrollid

Enne PR esitamist:

1. **Koodi kvaliteet**:
   - Käivita `npm run lint` mõjutatud projektikaustades
   - Paranda kõik lint vead ja hoiatused

2. **Ehituse kontroll**:
   - Kui sobib, tee `npm run build`
   - Veendu, et ehitus ei anna vigu

3. **Linkide kontroll**:
   - Testi kõiki markdown linke
   - Kontrolli, et pildi viited toimivad

4. **Sisu ülevaatus**:
   - Typosid ja grammatikat kontrolli
   - Veendu, et koodinäited on korrektsed ja hariduslikud
   - Kontrolli, et tõlked säilitavad originaalse tähenduse

### Panustamise tingimused

- Nõustu Microsoft CLA-ga (automaattest esimese PR ajal)
- Järgi [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Vaata üksikasjalikke juhiseid failist [CONTRIBUTING.md](./CONTRIBUTING.md)
- Viita asjakohastele issue numbritele PR kirjelduse juures

### Ülevaatusprotsess

- PR-e vaatavad üle hooldajad ja kogukond
- Eelistatakse hariduslikku selgust
- Koodinäited peaksid järgima parimaid praktikaid
- Tõlked kontrollitakse täpsuse ja kultuurilise sobivuse osas

## Tõlketeenus

### Automaatne tõlkimine

- Kasutab GitHub Actions koos co-op-translator töövooga
- Tõlgib automaatselt 50+ keelde
- Allikfailid põhikaustades
- Tõlgitud failid `translations/{language-code}/` kaustades

### Käsitsi tõlkeparanduste lisamine

1. Leia fail `translations/{language-code}/`
2. Tee parandused, säilitades struktuuri
3. Veendu, et koodinäited säilivad töökorras
4. Testi lokaalset viktoriini sisu

### Tõlke metaandmed

Tõlgitud failidel on metaandmete päis:
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

### Levinumad probleemid

**Viktoriinirakendus ei käivitu**:
- Kontrolli Node.js versiooni (soovitatav v14+)
- Kustuta `node_modules` ja `package-lock.json`, käivita uuesti `npm install`
- Kontrolli pordikonflikte (vaikimisi: Vite kasutab porti 5173)

**API server ei käivitu**:
- Veendu, et Node.js versioon on piisav (node >=10)
- Kontrolli, kas port on juba hõivatud
- Veendu, et kõik sõltuvused on paigaldatud käsuga `npm install`

**Brauserilaiendi laadimine ebaõnnestub**:
- Kontrolli, et manifest.json on õigesti vormindatud
- Vaata brauseri konsoolivigu
- Järgi konkreetse brauseri laiendi paigaldusjuhiseid

**Python jutuprojekti probleemid**:
- Veendu, et OpenAI pakett on paigaldatud: `pip install openai`
- Kontrolli, et GITHUB_TOKEN keskkonnamuutuja on määratud
- Kontrolli GitHubi mudelite ligipääsuõigusi

**Docsify ei serveeri dokumente**:
- Paigalda docsify-cli globaalne tööriist: `npm install -g docsify-cli`
- Käivita hoidla juurkataloogist
- Veendu, et fail `docs/_sidebar.md` olemas on

### Arenduskeskkonna näpunäited

- Kasuta VS Code'i koos Live Server lisandiga HTML projektide jaoks
- Paigalda ESLint ja Prettier laiendid ühtlase vorminduse jaoks
- Kasuta brauseri arendustööriistu JavaScripti silumiseks
- Vue projektide jaoks paigalda Vue DevTools brauserilaiend

### Jõudluskaalutlused

- Suur hulk tõlgitud faile (50+ keelt) muudab terviklikud kloonid mahukaks
- Kasuta madala sügavusega klooni, kui töötad ainult sisuga: `git clone --depth 1`
- Väldi tõlgete otsingut, kui töötad inglise sisuga
- Ehitusprotsessid võivad esimesel korral olla aeglased (npm install, Vite build)

## Turvalisuse kaalutlused

### Keskkonnamuutujad

- API võtmeid ei tohiks kunagi hoidlas salvestada
- Kasuta `.env` faile (on juba `.gitignore`-s)
- Dokumendi vajalikud keskkonnamuutujad projektide README-des

### Python projektid

- Kasuta virtuaalkeskkondi: `python -m venv venv`
- Hoia sõltuvused ajakohased
- GitHubi tokenitel peaksid olema minimaalsed vajalikud õigused

### GitHubi mudelite ligipääs

- Persoontõendid (PAT) on vajalikud GitHubi mudelite jaoks
- Tokenid tuleks hoida keskkonnamuutujatena
- Ära kunagi salvesta tokeneid ega mandaate hoidlas

## Lisamärkused

### Sihtgrupp

- Täielikud algajad veebiarenduses
- Õpilased ja iseseisvalt õppijad
- Õpetajad, kes kasutavad õppekava klassiruumis
- Sisu on loodud ligipääsetavaks ja oskuste järkjärguliseks arendamiseks

### Hariduslik filosoofia

- Projektipõhine õppemeetod
- Sage teadmiste kontroll (viktoriinid)
- Praktilised programmeerimisülesanded
- Reaalse maailma rakendusnäited
- Fookus alustel enne raamistikke

### Hoidla hooldus

- Aktiivne õppijate ja panustajate kogukond
- Regulaarne sõltuvuste ja sisu uuendamine
- Vead ja arutelud jälgitavad hooldajate poolt
- Tõlgete värskendused automatiseeritud GitHub Actions abil

### Seotud ressursid

- [Microsoft Learn moodulid](https://docs.microsoft.com/learn/)
- [Student Hub ressursid](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) soovitatud õppijatele
- Täiendavad kursused: Generatiivne tehisintellekt, andmeteadus, masinõpe, IoT õppekavad

### Töötamine spetsiifiliste projektidega

Põhjalike juhiste saamiseks vaata vastavate projektide README faile:
- `quiz-app/README.md` - Vue 3 viktoriinirakendus
- `7-bank-project/README.md` - Pangaline rakendus koos autentimisega
- `5-browser-extension/README.md` - Brauserilaiendi arendus
- `6-space-game/README.md` - Canvas-põhine mänguarendus
- `9-chat-project/README.md` - AI juturoboti projekt

### Monorepo struktuur

Kuigi see ei ole traditsiooniline monorepo, sisaldab see hoidla mitut iseseisvat projekti:
- Iga õppetund on iseseisev
- Projektid ei jaga sõltuvusi
- Töötada saab individuaalsete projektidega mõjutamata teisi
- Klooni kogu hoidla, et saada täielik õppekava kogemus

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud kasutades tehisintellekti tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, tuleb arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks lugeda autoriteetse allikana. Kõrge tähtsusega teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tingitud arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->