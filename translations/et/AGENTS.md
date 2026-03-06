# AGENTS.md

## Projekti ülevaade

See on hariduslik õppekava hoidla algajatele veebiarenduse põhialuste õpetamiseks. Õppekava on Microsoft Cloud Advocatesi poolt koostatud põhjalik 12-nädalane kursus, mis sisaldab 24 praktilist õpetust JavaScripti, CSSi ja HTMLi kohta.

### Põhikomponendid

- **Hariduslik sisu**: 24 struktureeritud õpetust, mis on organiseeritud projekti-põhistesse moodulitesse  
- **Praktilised projektid**: Terrarium, Klahvivajutuste mäng, Brauserilaiend, Kosmose mäng, Pangarakendus, Koodiredaktor ja tehisintellekti vestlusassistent  
- **Interaktiivsed viktoriinid**: 48 viktoriini, igaühes 3 küsimust (enne ja pärast õpetust)  
- **Mitmekeelne tugi**: Automaatne tõlge 50+ keelde GitHub Actionsi abil  
- **Tehnoloogiad**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (tehisintellekti projektide jaoks)  

### Arhitektuur

- Hariduslik hoidla õpetuste põhise struktuuriga  
- Igas õppetõe kaustas on README, koodinäited ja lahendused  
- Sõltumatud projektid eraldi kaustades (quiz-app, erinevad õppetöö projektid)  
- Tõlkesüsteem kasutades GitHub Actionsi (co-op-translator)  
- Dokumentatsioon esitatakse Docsify kaudu ja on saadaval PDF-na  

## Seadistamiskäsud

See hoidla on peamiselt mõeldud haridusliku sisu tarbimiseks. Spetsiifiliste projektidega töötamiseks:

### Peahoidla seadistamine

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Viktoriini rakenduse seadistamine (Vue 3 + Vite)

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
npm run format     # See läbi Prettieriga
```

### Brauserilaiendite projektid

```bash
cd 5-browser-extension/solution
npm install
# Järgi brauserispetsiifilisi laienduste laadimise juhiseid
```

### Kosmose mängu projektid

```bash
cd 6-space-game/solution
npm install
# Ava index.html brauseris või kasuta Live Serverit
```

### Vestlusprojekti (Python taust) seadistamine

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sea GITHUB_TOKEN keskkonnamuutuja
python api.py
```

## Arendusvoog

### Sisu panustajatele

1. **Tee hoidla fork** oma GitHubi kontole  
2. **Klooni oma fork kohalikku keskkonda**  
3. **Loo uus haru** oma muudatuste jaoks  
4. Muuda õpetuse sisu või koodinäiteid  
5. Testi koodimuudatusi vastavates projektikaustades  
6. Esita pull request vastavalt panustamise juhistele  

### Õppijatele

1. Tee fork või klooni hoidla  
2. Liigu õppetöö kaustade vahel järjestikku  
3. Loe iga õppetöö README-faile  
4. Täida enne õppetööd viktoriinid aadressil https://ff-quizzes.netlify.app/web/  
5. Töötle läbi koodinäited õppetöö kaustades  
6. Täida ülesanded ja väljakutsed  
7. Tee pärast õppetööd viktoriinid  

### Reaalajas arendus

- **Dokumentatsioon**: Käivita `docsify serve` juurkataloogis (port 3000)  
- **Viktoriini rakendus**: Käivita `npm run dev` quiz-app kaustas  
- **Projektid**: Kasuta VS Code Live Serveri laiendust HTML projektide jaoks  
- **API projektid**: Käivita `npm start` vastavates API kaustades  

## Testimise juhised

### Viktoriini rakenduse testimine

```bash
cd quiz-app
npm run lint       # Kontrolli koodistiili probleeme
npm run build      # Kontrolli, kas ehitus õnnestub
```

### Panga API testimine

```bash
cd 7-bank-project/api
npm run lint       # Kontrolli koodistiili probleeme
node server.js     # Kontrolli, kas server käivitub ilma vigadeta
```

### Üldine testimisviis

- Tegemist on haridusliku hoidla, millel puudub täielik automatiseeritud testide kogum  
- Käsitsi testimine keskendub:  
  - Koodinäited töötavad ilma vigadeta  
  - Dokumentatsiooni lingid töötavad korrektselt  
  - Projektide build’id valmivad edukalt  
  - Näited järgivad häid tavasid  

### Enne esitust tehtavad kontrollid

- Käivita `npm run lint` kaustades, kus on package.json  
- Kontrolli markdown linkide kehtivust  
- Testi koodinäiteid brauseris või Node.js-is  
- Kontrolli, et tõlked säilitavad õiged struktuurid  

## Koodistiili juhised

### JavaScript

- Kasuta kaasaegset ES6+ süntaksit  
- Järgi projektides pakutud standardseid ESLinti konfiguratsioone  
- Kasuta tähenduslikke muutujate ja funktsioonide nimesid hariduslikul eesmärgil  
- Lisa kommentaare, mis selgitavad kontseptsioone õppijatele  
- Vorminda Prettieriga, kui see on konfigureeritud  

### HTML/CSS

- Semantiline HTML5 elementide kasutus  
- Reageeriv disainipõhimõtted  
- Selged klassinime reeglid  
- Kommentaarid, mis selgitavad CSS tehnikat õppijatele  

### Python

- Järgi PEP 8 stiilijuhiseid  
- Selged, õppe-mõeldud koodinäited  
- Tüübiviited, kus need aitavad õppimisel  

### Markdown dokumentatsioon

- Selge pealkirjade hierarhia  
- Koodiplokid keele määranguga  
- Lingid täiendavatele ressurssidele  
- Ekraanipildid ja pildid `images/` kaustades  
- Piltide alternatiivtekst ligipääsetavuse jaoks  

### Failide organiseerimine

- Õpetused nummerdatud järjestikku (1-getting-started-lessons, 2-js-basics jne)  
- Igal projektil on `solution/` ning sageli ka `start/` või `your-work/` kaustad  
- Pildid salvestatud konkreetsete õppetööde `images/` kaustades  
- Tõlked asuvad `translations/{language-code}/` struktuuris  

## Ehitus ja juurutamine

### Viktoriini rakenduse juurutus (Azure Static Web Apps)

Viktoriini rakendus on konfigureeritud Azure Static Web Apps juurutuseks:

```bash
cd quiz-app
npm run build      # Loob dist/ kausta
# Teeb juurutuse GitHub Actionsi töövoo kaudu, kui surutakse main harusse
```

Azure Static Web Apps konfigureerimine:  
- **Rakenduse asukoht**: `/quiz-app`  
- **Väljundkaust**: `dist`  
- **Töövoog**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Dokumentatsiooni PDF loomine

```bash
npm install                    # Installi docsify-to-pdf
npm run convert               # Genereeri PDF dokumentidest
```

### Docsify dokumentatsioon

```bash
npm install -g docsify-cli    # Paigalda Docsify globaalsetena
docsify serve                 # Serveri localhost:3000 peal
```

### Projekti-spetsiifilised ehitused

Igal projekti kaustal võib olla oma ehitusprotsess:  
- Vue projektid: `npm run build` loob tootmis-paketid  
- Staatilised projektid: ehitusastet ei ole, serveeritakse faile otse  

## Pull request’i juhised

### Pealkirja formaat

Kasuta selgeid ja kirjeldavaid pealkirju, mis näitavad muudatuste valdkonda:  
- `[Quiz-app] Lisa uus viktoriin õppetöö X jaoks`  
- `[Lesson-3] Paranda kirjaviga terrarium projekti puhul`  
- `[Translation] Lisa hispaania tõlge õppetöö 5 jaoks`  
- `[Docs] Uuenda seadistamise juhiseid`  

### Nõutavad kontrollid

Enne PR-i esitust:  

1. **Koodi kvaliteet**:  
   - Käivita `npm run lint` mõjutatud projektikaustades  
   - Paranda kõik lint vead ja hoiatused  

2. **Ehituse kontroll**:  
   - Käivita `npm run build`, kui rakendub  
   - Veendu, et ehitusel puuduvad vead  

3. **Linkide kontroll**:  
   - Testi kõik markdown lingid  
   - Kontrolli piltide osutusi  

4. **Sisu ülevaatamine**:  
   - Õigekeelsuse ja grammatika kontroll  
   - Veendu, et koodinäited on õiged ja hariduslikud  
   - Kontrolli tõlgete vastavust esialgsele tähendusele  

### Panustamise nõuded

- Nõustu Microsoft CLA-ga (automaattest esimese PR ajal)  
- Järgi [Microsofti avatud lähtekoodi käitumiskoodeksit](https://opensource.microsoft.com/codeofconduct/)  
- Vaata üksikasjalikke juhiseid failist [CONTRIBUTING.md](./CONTRIBUTING.md)  
- Viita probleeminumbritele PR kirjelduse puhul, kui kehtib  

### Ülevaatusprotsess

- PR-e vaatavad läbi haldajad ja kogukond  
- Eristub hariduslik selgus  
- Koodinäited peaksid järgima parimaid tavasid  
- Tõlked vaadatakse üle täpsuse ja kultuurilise sobivuse jaoks  

## Tõlkesüsteem

### Automaatne tõlge

- Kasutab GitHub Actionsi koos co-op-translator töövooga  
- Tõlgib automaatselt 50+ keelde  
- Allikafailid paiknevad peamistes kaustades  
- Tõlgitud failid on `translations/{language-code}/` kaustades  

### Käsitsi tõlke täienduste lisamine

1. Leia fail kaustast `translations/{language-code}/`  
2. Tee parandused säilitades struktuuri  
3. Veendu, et koodinäited jäävad toimima  
4. Testi kõiki lokaliseeritud viktoriinisisusid  

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

### Levinud probleemid

**Viktoriini rakendus ei käivitu**:  
- Kontrolli Node.js versiooni (soovitatav v14+)  
- Kustuta `node_modules` ja `package-lock.json`, seejärel käivita `npm install` uuesti  
- Kontrolli pordi konflikte (vaikimisi: Vite kasutab porti 5173)  

**API server ei käivitu**:  
- Veendu, et Node.js versioon vastab miinimumile (node >=10)  
- Kontrolli, kas port on juba kasutuses  
- Veendu, et kõik sõltuvused installitud käsuga `npm install`  

**Brauserilaiend ei laadi**:  
- Kontrolli, et manifest.json on korrektselt vormindatud  
- Kontrolli brauseri konsooli vigade kohta  
- Järgi brauserispetsiifilisi laiendi paigaldamise juhiseid  

**Python vestlusprojekti probleemid**:  
- Veendu, et OpenAI pakett on installitud: `pip install openai`  
- Kontrolli, et GITHUB_TOKEN keskkonnamuutuja on määratud  
- Kontrolli GitHub Models juurdepääsu õigusi  

**Docsify ei serveeri dokumente**:  
- Installi globaalne docsify-cli: `npm install -g docsify-cli`  
- Käivita hoidla juurkataloogist  
- Kontrolli, et `docs/_sidebar.md` fail on olemas  

### Arenduskeskkonna näpunäited

- Kasuta VS Code’i koos Live Server laiendusega HTML projektide jaoks  
- Paigalda ESLint ja Prettier laiendused ühtseks vormindamiseks  
- Kasuta brauseri arendustööriistu JavaScripti silumiseks  
- Vue projektide puhul paigalda Vue DevTools brauserilaiend  

### Jõudluse kaalutlused

- Suur hulk tõlgitud faile (50+ keelt) teeb tervikhoidla klooni suureks  
- Kasuta madalat klooni, kui töötad ainult sisuga: `git clone --depth 1`  
- Väldi tõlgete otsimist töös, kui tegeled ingliskeelse sisuga  
- Ehitused võivad esimesel käivitamisel olla aeglased (npm install, Vite build)  

## Turvalisuse kaalutlused

### Keskkonnamuutujad

- API võtmeid ei tohiks kunagi hoidlasse commit’ida  
- Kasuta `.env` faile (juba lisatud `.gitignore` failile)  
- Dokumenteeri nõutud keskkonnamuutujad projekti README-des  

### Python projektid

- Kasuta virtuaalkeskkonda: `python -m venv venv`  
- Hoia sõltuvused ajakohased  
- GitHub tokenid peaksid omama minimaalset vajaminevat õigust  

### GitHub Models ligipääs

- GitHub Models kasutamiseks on vajalikud isikliku ligipääsu tokenid (PAT)  
- Tokenid peaksid olema salvestatud keskkonnamuutujatena  
- Ükski token ega tunnus ei tohi kunagi hoidlasse commit’ida  

## Lisamärkused

### Sihtgrupp

- Täielikud algajad veebiarenduses  
- Õpilased ja iseseisvad õppijad  
- Õpetajad, kes kasutavad õppekava klassiruumis  
- Sisu on loodud ligipääsetavaks ja oskuste järkjärguliseks arendamiseks  

### Haridusfilosoofia

- Projektipõhine õpe  
- Sageli korduvad teadmiste kontrollid (viktoriinid)  
- Käed-külge kodeerimise harjutused  
- Reaalsete olukordade rakendamise näited  
- Keskendumine põhialustele enne raamistikke  

### Hoidla hooldus

- Aktiivne õppijate ja panustajate kogukond  
- Regulaarne sisu ja sõltuvuste uuendamine  
- Probleemide ja arutelude jälgimine haldajate poolt  
- Tõlkevärskendused automatiseeritud GitHub Actionsi kaudu  

### Seotud ressursid

- [Microsoft Learn moodulid](https://docs.microsoft.com/learn/)  
- [Õpilaste keskuse ressursid](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) soovitatav õppijatele  
- Täiendavad kursused: Generatiivne AI, Andmeteadus, ML, IoT õppekavad kättesaadavad  

### Töötamine spetsiifiliste projektidega

Üksikasjad üksikute projektide kohta asuvad nende README failides:  
- `quiz-app/README.md` - Vue 3 viktoriini rakendus  
- `7-bank-project/README.md` - Panga rakendus autentimisega  
- `5-browser-extension/README.md` - Brauserilaiendi arendus  
- `6-space-game/README.md` - Canvas-põhine mänguarendus  
- `9-chat-project/README.md` - Tehisintellekti vestlusassistendi projekt  

### Monorepo struktuur

Kuigi ei ole traditsiooniline monorepo, sisaldab see hoidla mitmeid iseseisvaid projekte:  
- Iga õppetöö on iseseisev  
- Projektid ei jaga sõltuvusi  
- Üksikute projektidega töötab eraldi, ilma teistele mõju tegemata  
- Kogu hoidlasse kloonides saad täieliku õppekava kogemuse

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud kasutades tehisintellektil põhinevat tõlkesüsteemi [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->