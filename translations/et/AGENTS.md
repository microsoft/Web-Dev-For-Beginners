# AGENTS.md

## Projekti ülevaade

See on hariduslik õppekursuse hoidla veebiarenduse põhitõdede õpetamiseks algajatele. Õppekava on Microsoft Cloud Advocatesi poolt välja töötatud põhjalik 12-nädalane kursus, mis sisaldab 24 praktilist õppetundi, katmas JavaScripti, CSSi ja HTMLi.

### Peamised komponendid

- **Hariduslik sisu**: 24 struktureeritud õppetundi projektipõhistes moodulites
- **Praktilised projektid**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor ja AI Chat Assistant
- **Interaktiivsed viktoriinid**: 48 viktoriini, igaüks 3 küsimusega (enne ja pärast õppetundi)
- **Mitmekeelne tugi**: Automaatne tõlge 50+ keelde GitHub Actions abil
- **Tehnoloogiad**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (tehisintellekti projektide jaoks)

### Arhitektuur

- Hariduslik hoidla õppetundidel põhineva struktuuriga
- Igas õppetunni kaustas on README, koodinäited ja lahendused
- Isetoimivad projektid eraldi kataloogides (quiz-app, erinevad õppetundide projektid)
- Tõlkesüsteem, mis kasutab GitHub Actions (co-op-translator)
- Dokumentatsioon esitatakse Docsify kaudu ja see on saadaval ka PDF-formaadis

## Seadistuse käsud

See hoidla on peamiselt mõeldud haridusliku sisu tarbimiseks. Spetsiifiliste projektidega töötamiseks:

### Peamine hoidla seadistamine

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Viktoriini äpi seadistamine (Vue 3 + Vite)

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
npm run format     # Vorminda Prettieriga
```

### Brauserilaienduse projektid

```bash
cd 5-browser-extension/solution
npm install
# Järgi brauseri-spetsiifilisi laienduste laadimise juhiseid
```

### Space Game projektid

```bash
cd 6-space-game/solution
npm install
# Ava index.html brauseris või kasuta Live Serverit
```

### Vestlusprojekti (Python back-end) seadistamine

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Määra GITHUB_TOKEN keskkonnamuutuja
python api.py
```

## Arendustöövoog

### Sisu panustajatele

1. **Forkige hoidla** oma GitHubi kontole
2. **Kloonige oma fork lokaalselt**
3. **Loo uus haru** oma muudatuste jaoks
4. Muutke õppetundide sisu või koodinäiteid
5. Testige koodi muudatusi vastavates projektikaustades
6. Esitage pull requeste vastavalt panustamise juhistele

### Õppijatele

1. Forkige või kloonige hoidla
2. Liikuge järjest õppetundide kataloogidesse
3. Lugege iga õppetunni README faile
4. Täitke e-viktoriinid aadressil https://ff-quizzes.netlify.app/web/
5. Töötage läbi õppetundide koodinäited
6. Täitke ülesanded ja väljakutsed
7. Sooritage pärast õppetundi viktoriinid

### Otse arendus

- **Dokumentatsioon**: Käivitage `docsify serve` juurkataloogis (port 3000)
- **Viktoriini äpp**: Käivitage `npm run dev` quiz-app kaustas
- **Projektid**: Kasutage VS Code Live Serveri laiendust HTML projektide jaoks
- **API projektid**: Käivitage `npm start` vastavates API kaustades

## Testimise juhised

### Viktoriini äpi testimine

```bash
cd quiz-app
npm run lint       # Kontrolli koodistiili probleeme
npm run build      # Kontrolli, et ehitus õnnestub
```

### Panga API testimine

```bash
cd 7-bank-project/api
npm run lint       # Kontrolli koodistiili probleeme
node server.js     # Kontrolli, et server algab ilma vigadeta
```

### Üldine testimislähenemine

- Tegevhoidla ilma põhjalike automaattestideta
- Manuaaltestimine keskendub:
  - Koodinäidete korrektsele käivitumisele
  - Dokumentatsiooni linkide toimimisele
  - Projektide koostamise edukusele
  - Näidete parimate tavade järgimisele

### Enne esitamist tehtavad kontrollid

- Käivitage `npm run lint` kaustades, kus on package.json
- Kontrollige, et markdowni lingid oleksid korrektsed
- Testige koodinäiteid brauseris või Node.js-is
- Kontrollige, et tõlked säilitavad nõuetekohase struktuuri

## Koodi stiilijuhised

### JavaScript

- Kasutage kaasaegset ES6+ süntaksit
- Järgige standardseid ESLint konfiguratsioone projektides
- Kasutage tähenduslikke muutujate ja funktsioonide nimesid hariduslikuks selguseks
- Lisage kommentaare kontseptsioonide selgitamiseks õppijatele
- Kasutage vormindamiseks, kus seadistatud, Prettierit

### HTML/CSS

- Semantilised HTML5 elemendid
- Reageeriv disain
- Selged klassinimede konventsioonid
- Kommentaarid CSS tehnikate selgitamiseks õppijatele

### Python

- PEP 8 stiilijuhised
- Selged, harivad koodinäited
- Tippimisvihjed õppimise hõlbustamiseks

### Markdown dokumentatsioon

- Selge pealkirjade hierarhia
- Koodiplokid koos keele määratlusega
- Lingid lisamaterjalidele
- Ekraanipildid ja pildid `images/` kataloogides
- Ligipääsetavuse huvides piltide alt-tekstid

### Failide korraldus

- Õppetunnid nummerdatud järjest (1-getting-started-lessons, 2-js-basics jne)
- Igal projektil on `solution/` ja sageli ka `start/` või `your-work/` kaustad
- Pildid talletatud õppetundidele spetsiifilistes `images/` kaustades
- Tõlked paigutatud `translations/{language-code}/` kataloogistruktuuri

## Koostamine ja juurutamine

### Viktoriini äpi juurutamine (Azure Static Web Apps)

Quiz-app on seadistatud Azure Static Web Apps juurutuseks:

```bash
cd quiz-app
npm run build      # Loob kausta dist/
# Käivitab GitHub Actionsi töövoo, kui tehakse push main harusse
```

Azure Static Web Apps konfiguratsioon:
- **Rakenduse asukoht**: `/quiz-app`
- **Väljundi asukoht**: `dist`
- **Töövoog**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentatsiooni PDF genereerimine

```bash
npm install                    # Installi docsify-to-pdf
npm run convert               # Loo PDF docsist
```

### Docsify dokumentatsioon

```bash
npm install -g docsify-cli    # Paigalda Docsify globaalselt
docsify serve                 # Serveeri aadressil localhost:3000
```

### Projektipõhised ehitused

Igal projektikaustal võib olla oma ehitusprotsess:
- Vue projektid: `npm run build` loob tootmisversiooni pakette
- Staatilised projektid: ehitusfaasi pole, failid serveeritakse otse

## Pull requesti juhised

### Pealkirja formaat

Kasutage selgeid, kirjeldavaid pealkirju, mis näitavad muudatuste valdkonda:
- `[Quiz-app] Lisa uus viktoriin õppetunnile X`
- `[Lesson-3] Paranda kirjaviga terrarium projektis`
- `[Translation] Lisa hispaania tõlge õppetunnile 5`
- `[Docs] Uuenda seadistusjuhiseid`

### Nõutavad kontrollid

Enne PR-i esitamist:

1. **Koodi kvaliteet**:
   - Käivitage `npm run lint` mõjutatud projektikaustades
   - Parandage kõik lintimisvead ja hoiatused

2. **Ehituskontroll**:
   - Käivitage `npm run build`, kui see on asjakohane
   - Veenduge, et ehitusvead puuduvad

3. **Linkide valideerimine**:
   - Kontrollige kõiki markdowni linke
   - Veenduge, et pildiviited töötavad

4. **Sisukontroll**:
   - Oikige õigekirja ja grammatika
   - Veenduge, et koodinäited on korrektsed ja harivad
   - Kontrollige, et tõlked säilitavad algse tähenduse

### Panustamise nõuded

- Nõustuge Microsofti CLA-ga (automatiseeritud kontroll esimese PR-i puhul)
- Järgige [Microsoft Open Source käitumiskoodeksit](https://opensource.microsoft.com/codeofconduct/)
- Lisateave panustamise kohta on [CONTRIBUTING.md](./CONTRIBUTING.md)
- Tõstke PR kirjelduses esile seotud issue numbrid, kui asjakohane

### Käsitlusprotsess

- PR-id vaatavad üle hoidla hooldajad ja kogukond
- Eelistatakse hariduslikku selgust
- Koodinäited peaksid järgima parimaid tavasid
- Tõlked vaadatakse üle täpsuse ja kultuurilise sobivuse osas

## Tõlkesüsteem

### Automaatne tõlge

- Kasutab GitHub Actions koos co-op-translator töövooga
- Tõlgib automaatselt 50+ keelde
- Allikafailid on peakaustades
- Tõlgitud failid asuvad `translations/{language-code}/` kataloogides

### Käsitsi tõlke paranduste lisamine

1. Leidke fail `translations/{language-code}/`
2. Tehke parandusi, säilitades struktuuri
3. Veenduge, et koodinäited töötavad jätkuvalt
4. Testige kohalikku viktoriini sisu

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

**Viktoriini äpp ei käivitu**:
- Kontrollige Node.js versiooni (soovitav v14+)
- Kustutage `node_modules` ja `package-lock.json`, käivitage uuesti `npm install`
- Kontrollige portide konflikte (vaikimisi kasutab Vite porti 5173)

**API server ei käivitu**:
- Kontrollige, et Node.js versioon vastab nõuetele (node >=10)
- Kontrollige, kas port on juba kasutuses
- Veenduge, et kõik sõltuvused on installitud `npm install` abil

**Brauserilaiend ei laadi**:
- Kontrollige, et manifest.json on korrektselt vormindatud
- Vaadake brauseri konsoolist veateateid
- Järgige brauseripõhiseid laiendi installi juhiseid

**Python vestlusprojekti probleemid**:
- Veenduge, et OpenAI pakett on installitud: `pip install openai`
- Kontrollige, et GITHUB_TOKEN keskkonnamuutuja on seadistatud
- Kontrollige GitHub Models'i ligipääsuõigusi

**Docsify ei serveeri dokumente**:
- Paigaldage globaalne docsify-cli: `npm install -g docsify-cli`
- Käivitage hoidla juurkataloogist
- Kontrollige, et `docs/_sidebar.md` fail on olemas

### Arenduskeskkonna näpunäiteid

- Kasutage VS Code'i koos Live Server laiendusega HTML projektide jaoks
- Paigaldage ESLint ja Prettier laiendused ühtlaseks vormindamiseks
- Kasutage brauseri DevTools’i JavaScripti silumiseks
- Vue projektide jaoks paigaldage Vue DevTools brauserilaiend

### Jõudluse kaalutlused

- Suurem hulk tõlgitud faile (50+ keelt) teeb täiskloonid mahukaks
- Kasutage ülasidumist, kui töötate ainult sisuga: `git clone --depth 1`
- Välistage tõlked ingliskeelse sisuga töötades otsingutest
- Esimene kord võivad ehitusprotsessid olla aeglased (npm install, Vite build)

## Turvalisuse kaalutlused

### Keskkonnamuutujad

- API võtit ei tohi kunagi hoidlas hoida
- Kasutage `.env` faile (juba `.gitignore`-s)
- Dokumenteerige vajalikud keskkonnamuutujad projekti README-des

### Python projektid

- Kasutage virtuaalset keskkonda: `python -m venv venv`
- Hoidke sõltuvused uuendatud
- GitHubi tokenitel peaks olema minimaalne nõutav ligipääs

### GitHub Models ligipääs

- Isiklikud ligipääsu tokenid (PAT) on vajalikud GitHub Models'ile
- Tokenid tuleks hoida keskkonnamuutujatena
- Ärge kunagi pange tokeneid või kasutajatunnuseid hoidlasse

## Lisamärkused

### Sihtgrupp

- Täielikud algajad veebiarenduses
- Õpilased ja isetegijad
- Õpetajad, kes kasutavad õppekava klassiruumis
- Sisu on loodud ligipääsetavaks ja oskuste järkjärguliseks kujundamiseks

### Hariduslik filosoofia

- Projektipõhine õppe lähenemine
- Sageli tehtavad teadmiste kontrollid (viktoriinid)
- Praktiseerivad kodeerimisülesanded
- Reaalsete rakenduste näited
- Fookus põhitalitustel enne raamistikke

### Hoidla hooldus

- Aktiivne kogukond õppijate ja panustajatega
- Sõltuvuste ja sisu regulaarne uuendamine
- Hoiuluründed ja arutelud hooldajate poolt jälgitavad
- Tõlkeuuendused automatiseeritud GitHub Actions abil

### Seotud ressursid

- [Microsoft Learn moodulid](https://docs.microsoft.com/learn/)
- [Student Hub ressursid](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) soovitatav õppijatele
- Täiendavad kursused: Generative AI, Data Science, ML, IoT õppekavad saadaval

### Spetsiaalprojektidega töötamine

Üksikute projektide üksikasjalike juhiste jaoks vt README faile:
- `quiz-app/README.md` - Vue 3 viktoriini rakendus
- `7-bank-project/README.md` - Panga rakendus autentimisega
- `5-browser-extension/README.md` - Brauserilaiendi arendamine
- `6-space-game/README.md` - Canvas-põhine mänguarendus
- `9-chat-project/README.md` - AI vestlusabilise projekt

### Monorepo struktuur

Kuigi ei ole traditsiooniline monorepo, sisaldab see hoidla mitut sõltumatut projekti:
- Iga õppetund on iseseisev
- Projektid ei jaga sõltuvusi
- Töötage üksikute projektidega mõjutamata teisi
- Kloonige kogu hoidla kogu õppekava kogemuse saamiseks

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest vabastamine**:
Seda dokumenti on tõlgitud kasutades AI tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi me püüdleme täpsuse poole, olge teadlik, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada autoriteetseks allikaks. Tähtsa teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta ühegi arusaamatuse ega tõlgenduse eest, mis võivad tuleneda selle tõlke kasutamisest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->