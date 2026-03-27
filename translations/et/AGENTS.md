# AGENTS.md

## Projekti ülevaade

See on hariduslik õppekava hoidla veebiarenduse põhialuste õpetamiseks algajatele. Õppekava on põhjalik 12-nädalane kursus, mille on välja töötanud Microsoft Cloud Advocates, pakkudes 24 praktilist tundi, mis hõlmavad JavaScripti, CSS-i ja HTML-i.

### Põhikomponendid

- **Hariduslik sisu**: 24 struktureeritud tundi, mis on organiseeritud projektipõhistesse moodulitessse
- **Praktilised projektid**: terrarium, tippmäng, brauserilaiendus, kosmose-mäng, pangarakendus, koodiredaktor ja tehisintellekti vestlusassistent
- **Interaktiivsed viktoriinid**: 48 viktoriini, igaühes 3 küsimust (enne ja pärast tundi)
- **Mitmekeelne tugi**: automatiseeritud tõlked üle 50 keelde GitHub Actions abil
- **Tehnoloogiad**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (tehisintellekti projektide jaoks)

### Arhitektuur

- Hariduslik hoidla õppetundide-põhise struktuuriga
- Iga õppetunni kaust sisaldab README-d, koodinäiteid ja lahendusi
- Sõltumatud projektid eraldiseisvates kataloogides (quiz-app, erinevad õppetundide projektid)
- Tõlkesüsteem kasutades GitHub Actions’i (co-op-translator)
- Dokumentatsioon on kättesaadav Docsify kaudu ja PDF-formaadis

## Paigaldamiskäsud

See hoidla on peamiselt mõeldud haridusliku sisu tarbimiseks. Konkreetselt projektidega töötamiseks:

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
npm run build      # Ehita tootmiseks
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
# Järgige brauseri-põhiseid laienduse laadimise juhiseid
```

### Kosmose mänguprojektid

```bash
cd 6-space-game/solution
npm install
# Ava index.html brauseris või kasuta Live Serverit
```

### Vestluse projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Määra GITHUB_TOKEN keskkonnamuutuja
python api.py
```

## Arendusprotsess

### Sisu panustajatele

1. **Hargne hoidla** oma GitHubi kontole
2. **Klooni oma haru** lokaalselt
3. **Loo uus haru** oma muudatuste jaoks
4. Tee muudatusi õppetundide sisus või koodinäidetes
5. Testi kõiki koodimuudatusi vastavates projektikataloogides
6. Esita pull request'id vastavalt panustamise juhistele

### Õppijatele

1. Hargne või klooni hoidla
2. Liigu õppetundide kataloogides järjestikku
3. Loe iga õppetunni README faile
4. Tee ette-viktoriinid aadressil https://ff-quizzes.netlify.app/web/
5. Töötle läbi koodinäited õppetundide kaustades
6. Täida ülesanded ja väljakutsed
7. Tee järel-viktoriinid

### Reaalajas arendus

- **Dokumentatsioon**: käivita `docsify serve` juurkataloogis (port 3000)
- **Viktoriini rakendus**: käivita `npm run dev` quiz-app kataloogis
- **Projektid**: kasuta VS Code Live Server laiendust HTML projektide jaoks
- **API projektid**: käivita `npm start` vastavates API kataloogides

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
node server.js     # Kontrolli, et server käivituks ilma vigadeta
```

### Üldine testimise lähenemine

- See on hariduslik hoidla ilma ulatuslike automatiseeritud testideta
- Käsitsi testimine keskendub:
  - Koodinäited jooksevad ilma vigadeta
  - Dokumendis olevad lingid toimivad korrektselt
  - Projektide ehitused õnnestuvad
  - Näited järgivad parimaid tavasid

### Enne esitamist kontrollid

- Käivita `npm run lint` kataloogides, kus on package.json
- Kontrolli, et markdown lingid on kehtivad
- Testi koodinäiteid brauseris või Node.js keskkonnas
- Veendu, et tõlked säilitavad õige struktuuri

## Koodi stiili juhised

### JavaScript

- Kasuta kaasaegset ES6+ süntaksit
- Järgi projektides pakutud ESLint konfiguratsioone
- Kasuta tähenduslikke muutujate ja funktsioonide nimesid haridusliku selguse tagamiseks
- Lisa kommentaare mõistete selgitamiseks õppijatele
- Vorminda Prettieriga seal, kus on seadistatud

### HTML/CSS

- Semantiline HTML5 elemendid
- Reageeriv disaini põhimõtted
- Selged klassinimede konventsioonid
- Kommentaarid, mis selgitavad CSS-tehnikaid õppijatele

### Python

- PEP 8 stiilijuhised
- Selged, hariduslikud koodinäited
- Tüüpi vihjed sealsamas, kus need aitavad õppimisel

### Markdown dokumentatsioon

- Selge pealkirjade hierarhia
- Koodiblokid keelega märgistatud
- Lingid lisamaterjalide juurde
- Ekraanipildid ja pildid `images/` kataloogides
- Piltide alt-tekst ligipääsetavuseks

### Failide organiseerimine

- Õppetunnid nummerdatud järjestikku (1-getting-started-lessons, 2-js-basics jne)
- Igal projektil on `solution/` ja tihti ka `start/` või `your-work/` kataloogid
- Pildid talletatud konkreetse õppetunni `images/` kaustas
- Tõlked `translations/{language-code}/` struktuuris

## Buildimine ja juurutamine

### Viktoriini rakenduse juurutamine (Azure Static Web Apps)

Quiz-app on seadistatud Azure Static Web Apps-ile juurutamiseks:

```bash
cd quiz-app
npm run build      # Loob kausta dist/
# Rakendab GitHub Actionsi töövoo kaudu pushi korral põhisagarasse
```

Azure Static Web Apps konfiguratsioon:
- **Rakenduse asukoht**: `/quiz-app`
- **Väljundkaust**: `dist`
- **Töövoog**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentatsiooni PDF genereerimine

```bash
npm install                    # Installi docsify-to-pdf
npm run convert               # Genereeri PDF docsist
```

### Docsify dokumentatsioon

```bash
npm install -g docsify-cli    # Paigalda Docsify ülemaailmselt
docsify serve                 # Serveeri lokaalselt aadressil localhost:3000
```

### Projektipõhised ehitused

Igal projekti kataloogil võib olla oma ehitusprotsess:
- Vue projektid: `npm run build` loob tootmiseks valmis paketid
- Staatilised projektid: ehitusastet ei ole, serveeritakse failid otse

## Pull Request'i juhised

### Pealkirja formaat

Kasuta selgeid ja kirjeldavaid pealkirju, mis näitavad muudatuse ala:
- `[Quiz-app] Lisa uus viktoriin õppetunni X jaoks`
- `[Lesson-3] Paranda trükiviga terrarium projekti juures`
- `[Translation] Lisa hispaania keelne tõlge õppetunnile 5`
- `[Docs] Uuenda paigaldusjuhiseid`

### Nõutavad kontrollid

Enne PR-i esitamist:

1. **Koodi kvaliteet**:
   - Käivita `npm run lint` mõjutatud projektikataloogides
   - Paranda kõik lintimise vead ja hoiatused

2. **Buildi kontroll**:
   - Käivita `npm run build`, kui see on aktuaalne
   - Veendu, et build ei viska vigu

3. **Lingide valideerimine**:
   - Testi kõiki markdown linke
   - Kontrolli pildiviiteid

4. **Sisu ülevaatus**:
   - Paranda õigekirja ja grammatika vead
   - Veendu, et koodinäited on õiged ja hariduslikud
   - Kontrolli, et tõlked säilitavad algse tähenduse

### Panustamise nõuded

- Nõustu Microsoft CLA-ga (automaatne kontroll esimesel PR-il)
- Järgi [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Vaata [CONTRIBUTING.md](./CONTRIBUTING.md) üksikasjalike juhiste jaoks
- Viita issue numbritele PR kirjelduse juures, kui sobib

### Ülevaatusprotsess

- PR-id üle vaatavad hooldajad ja kogukond
- Hariduslik selgus on esimene prioriteet
- Koodinäited peaksid järgima parimaid tavasid
- Tõlked kontrollitakse täpsuse ja kultuurilise sobivuse osas

## Tõlkesüsteem

### Automatiseeritud tõlge

- Kasutab GitHub Actions’i koos co-op-translator töövooga
- Tõlgib automaatselt üle 50 keelde
- Allikfailid paiknevad peakaustades
- Tõlgitud failid on `translations/{language-code}/` kataloogides

### Käsitsi tõlke parenduste lisamine

1. Leia fail kataloogist `translations/{language-code}/`
2. Tee parendused, säilitades struktuuri
3. Veendu, et koodinäited jäävad töökorras
4. Testi kõiki lokaliseeritud viktoriine

### Tõlke metaandmed

Tõlgitud failid sisaldavad metaandmetega päist:
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

**Viktoriini rakendus ei käivitu**:
- Kontrolli Node.js versiooni (soovitatav v14+)
- Kustuta `node_modules` ja `package-lock.json`, käivita uuesti `npm install`
- Kontrolli portide konflikte (vaikimisi: Vite kasutab porti 5173)

**API server ei käivitu**:
- Veendu, et Node.js versioon on piisavalt uus (node >=10)
- Kontrolli, kas port on juba hõivatud
- Veendu, et kõik sõltuvused on paigaldatud käsuga `npm install`

**Brauserilaiendust ei laadita**:
- Kontrolli, et manifest.json on korrektselt vormistatud
- Vaata brauseri konsoolist vigu
- Järgi brauseri-spetsiifilisi laienduse paigaldusjuhiseid

**Python vestluse projekti probleemid**:
- Veendu, et OpenAI pakett on paigaldatud: `pip install openai`
- Veendu, et GITHUB_TOKEN keskkonnamuutuja on seadistatud
- Kontrolli GitHubi mudelite kasutusõigusi

**Docsify ei serveeri dokumentatsiooni**:
- Paigalda docsify-cli globaalselt: `npm install -g docsify-cli`
- Käivita hoidla juurkataloogist
- Kontrolli, et `docs/_sidebar.md` fail eksisteerib

### Arenduskeskkonna näpunäited

- Kasuta VS Code’i Live Server laiendust HTML projektide jaoks
- Paigalda ESLint ja Prettier laiendused vorminduse järjepidevuseks
- Kasuta brauseri DevToolsi JavaScripti silumiseks
- Vue projektide jaoks paigalda Vue DevTools brauserilaiendus

### Jõudluse kaalutlused

- Suur hulk tõlgitud faile (üle 50 keele) muudab kloonid suurt e mahukaks
- Kasuta ligikaudset klooni, kui töötad ainult sisuga: `git clone --depth 1`
- Välista tõlked otsingutest, kui töötad ingliskeelse sisuga
- Ehitusprotsessid võivad olla esmakordsel käivitamisel aeglased (npm install, Vite ehitus)

## Turvalisuse kaalutlused

### Keskkonnamuutujad

- API võtmeid ei tohi kunagi hoidlas hoida
- Kasuta `.env` faile (mis on juba `.gitignore`-s)
- Dokumendeeri nõutud keskkonnamuutujad projektide README-des

### Python projektid

- Kasuta virtuaalkeskkonda: `python -m venv venv`
- Hoia sõltuvused ajakohased
- GitHubi tokenitel peaks olema minimaalne vajalik ligipääs

### GitHub mudelite ligipääs

- GitHubi mudelite jaoks on vaja isiklikke juurdepääsu võtmeid (PAT)
- Tokeneid hoitakse keskkonnamuutujatena
- Ära kunagi pane tokeneid või mandaate hoidla külge

## Lisamärkused

### Sihtgrupp

- Täielikud algajad veebiarenduses
- Üliõpilased ja iseseisvad õppijad
- Õpetajad, kes kasutavad õppekava klassiruumis
- Sisu on loodud ligipääsetavaks ja oskuste järkjärgulise kasvatamise jaoks

### Haridusfilosoofia

- Projektipõhine õppekava lähenemine
- Sageli teadmiste kontrollid (viktoriinid)
- Praktilised kodeerimisharjutused
- Reaalmaailma rakenduste näited
- Fookus põhialustel enne raamistikke

### Hoidla hooldus

- Aktiivne õppijate ja panustajate kogukond
- Regulaarne sisu ja sõltuvuste uuendamine
- Hoiatuste ja arutelude jälgimine hooldajate poolt
- Tõlgete automatiseeritud uuendamine GitHub Actions’i kaudu

### Seotud ressursid

- [Microsoft Learn moodulid](https://docs.microsoft.com/learn/)
- [Student Hub ressursid](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) soovitatav õppijatele
- Lisakursused: Generatiivne AI, Andmeteadus, ML, IoT õppekavad olemas

### Töötamine konkreetsete projektidega

Üksikasjaliku juhendi leiad iga projekti README failidest:
- `quiz-app/README.md` - Vue 3 viktoriinirakendus
- `7-bank-project/README.md` - Panga rakendus koos autentimisega
- `5-browser-extension/README.md` - Brauserilaienduse arendus
- `6-space-game/README.md` - Canvas-põhine mänguarendus
- `9-chat-project/README.md` - Tehisintellekti vestlusassistendi projekt

### Monorepo struktuur

Kuigi ei ole traditsiooniline monorepo, sisaldab see hoidla mitut sõltumatut projekti:
- Iga õppetund on iseseisev
- Projektid ei jaga sõltuvusi
- Töötada saab iga projektiga iseseisvalt, ilma teistele mõjuta
- Klooni kogu hoidla, et saada täielik õppekogemus

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Tähelepanek**:  
See dokument on tõlgitud kasutades tehisintellekti tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada usaldusväärseks allikaks. Olulise teabe puhul soovitatakse professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste ega valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->