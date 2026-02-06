# AGENTS.md

## Projekti ülevaade

See on hariduslik õppekava hoidla veebiarenduse fundamentide õpetamiseks algajatele. Õppekava on põhjalik 12-nädalane kursus, mille on koostanud Microsoft Cloud Advocates, sisaldades 24 praktilist õppetundi, mis käsitlevad JavaScripti, CSS-i ja HTML-i.

### Peamised komponendid

- **Hariduslik sisu**: 24 struktureeritud õppetundi, mis on korraldatud projektipõhistesse moodulitesse
- **Praktilised projektid**: Terrarium, Tippimismäng, Brauserilaiendus, Kosmosemäng, Pangaäpp, Koodi redaktor ja AI juturobot
- **Interaktiivsed viktoriinid**: 48 viktoriini, igas 3 küsimust (enne/pärast tundi hindamine)
- **Mitmekeelne tugi**: Automaatne tõlkimine enam kui 50 keelde GitHub Actions abil
- **Tehnoloogiad**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektide jaoks)

### Arhitektuur

- Hariduslik hoidla õppetundidel põhineva struktuuriga
- Igas õppetundi kaustas on README, koodinäited ja lahendused
- Isetegutsevad projektid eraldi kaustades (quiz-app, erinevad õppetundide projektid)
- Tõlkesüsteem kasutades GitHub Actions (co-op-translator)
- Dokumentatsioon serveeritakse Docsify abil ja on saadaval PDF-ina

## Paigaldus käsud

See hoidla on peamiselt mõeldud haridusliku sisu tarbimiseks. Spetsiifiliste projektidega töötamiseks:

### Peamise hoidla seadistamine

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Viktoriini äpi seadistamine (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Käivita arendusserver
npm run build      # Loo tootmiseks
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
# Järgige brauserispetsiifilisi laienduste laadimise juhiseid
```

### Kosmosemängu projektid

```bash
cd 6-space-game/solution
npm install
# Ava index.html brauseris või kasuta Live Serverit
```

### Jutu projekti (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sea GITHUB_TOKEN keskkonnamuutuja
python api.py
```

## Arendusvoog

### Sisukontribuutoritele

1. **Forki hoidla** oma GitHub kontole
2. **Klooni oma fork** lokaalselt
3. **Loo uus haru** oma muudatuste jaoks
4. Tee muudatusi õppetundide sisus või koodinäidetes
5. Testi koodimuudatusi asjakohastes projektikaustades
6. Esita pull requesteid vastavalt panustamise juhistele

### Õppijatele

1. Forki või klooni hoidla
2. Liigu õppetundide kaustades järjekorras
3. Loe iga tunni README faile
4. Tee enne tundi viktoriinid aadressil https://ff-quizzes.netlify.app/web/
5. Pronksivõõra koodinäited õppetundide kaustades
6. Tee ülesanded ja väljakutsed
7. Võta pärast tundi viktoriinid

### Otsene arendus

- **Dokumentatsioon**: käivita juurkaustas `docsify serve` (port 3000)
- **Viktoriini äpp**: käivita `npm run dev` quiz-app kaustas
- **Projektid**: kasuta VS Code Live Serveri laiendust HTML projektide jaoks
- **API projektid**: käivita `npm start` vastavates API kaustades

## Testimise juhised

### Viktoriini äpi testimine

```bash
cd quiz-app
npm run lint       # Kontrolli koodi stiili probleeme
npm run build      # Kontrolli, kas ehitus õnnestub
```

### Panga API testimine

```bash
cd 7-bank-project/api
npm run lint       # Kontrolli koodistiili probleeme
node server.js     # Kontrolli, et server käivitub ilma vigadeta
```

### Üldine testimise lähenemine

- See on hariduslik hoidla ilma täielike automatiseeritud testideta
- Käsitsi testimine keskendub:
  - Koodinäidete käivitumine vigadeta
  - Dokumentatsiooni linkide toimimine
  - Projektide edukas ehitamine
  - Näidete vastavus parimatele tavadele

### Enne esitamist tehtavad kontrollid

- Käivita `npm run lint` kaustades, kus on package.json
- Kontrolli markdown linkide kehtivust
- Testi koodinäiteid brauseris või Node.js-is
- Veendu, et tõlked säilitavad õige struktuuri

## Koodistiili juhised

### JavaScript

- Kasuta kaasaegset ES6+ süntaksit
- Järgi ESLinti standardseid konfigureeringuid projektides
- Kasuta tähenduslikke muutujate ja funktsioonide nimesid hariduse selguse huvides
- Lisa kommentaare kontseptsioonide selgitamiseks õppijatele
- Formatteeri Prettieriga, kus seadistatud

### HTML/CSS

- Semantiline HTML5 elementide kasutamine
- Responsive disaini põhimõtted
- Selged klassinimed
- Kommentaarid CSS tehnikate selgitamiseks õppijatele

### Python

- PEP 8 stiili juhised
- Selged, hariduslikud koodinäited
- Tüübi vihjed, kui need aitavad õppimist

### Markdown dokumentatsioon

- Selge pealkirjade hierarhia
- Koodiplokid keelespetsiifikatsiooniga
- Lingid lisamaterjalidele
- Ekraanipildid ja pildid `images/` kaustades
- Piltide alternatiivtekst juurdepääsetavuse jaoks

### Failide organiseerimine

- Õppetunnid nummerdatud järjestikustena (1-getting-started-lessons, 2-js-basics jne)
- Igal projektil on `solution/` ja sageli `start/` või `your-work/` kaustad
- Pildid salvestatud õppetundipõhistesse `images/` kaustadesse
- Tõlked struktuuris `translations/{language-code}/`

## Ehitamine ja juurutamine

### Viktoriini äpi juurutamine (Azure Static Web Apps)

quiz-app on seadistatud Azure Static Web Apps juurutuseks:

```bash
cd quiz-app
npm run build      # Loob dist/ kausta
# Hõlbustab juurutamist GitHub Actions töövoo kaudu, kui tehakse push main harule
```

Azure Static Web Apps konfiguratsioon:
- **Rakenduse asukoht**: `/quiz-app`
- **Väljundi asukoht**: `dist`
- **Töövoog**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentatsiooni PDF genereerimine

```bash
npm install                    # Paigalda docsify-to-pdf
npm run convert               # Genereeri PDF docsist
```

### Docsify dokumentatsioon

```bash
npm install -g docsify-cli    # Installi Docsify globaalalt
docsify serve                 # Serveri aadressil localhost:3000
```

### Projekti-spetsiifilised ehitused

Igal projektikaustal võib olla oma ehitusprotsess:
- Vue projektid: `npm run build` loob tootmispaketid
- Staatilised projektid: ehitusetapp puudub, serveeri faile otse

## Pull requesti juhised

### Pealkirja formaat

Kasuta selgeid ja kirjeldavaid pealkirju, mis näitavad muudatuste valdkonda:
- `[Quiz-app] Lisa uus viktoriin õppetunni X jaoks`
- `[Lesson-3] Paranda trükk vigu terrarium projektis`
- `[Translation] Lisa hispaania keelne tõlge õppetunnile 5`
- `[Docs] Uuenda seadistusjuhiseid`

### Nõutavad kontrollid

Enne PR-i esitamist:

1. **Koodi kvaliteet**:
   - Käivita `npm run lint` mõjutatud projektikaustades
   - Paranda kõik lintimise vead ja hoiatused

2. **Ehituse kontrollimine**:
   - Käivita vajadusel `npm run build`
   - Veendu, et ehitusvigu pole

3. **Linkide valideerimine**:
   - Testi kõiki markdown linke
   - Kontrolli pildiviiteid

4. **Sisu läbivaatus**:
   - Luge ja paranda kirjavead ja grammatika
   - Veendu, et koodinäited on korrektsed ja hariduslikud
   - Kontrolli, et tõlked säilitavad algse tähenduse

### Panustamise nõuded

- Nõustu Microsofti CLA-ga (automaatkontroll esimese PR-i ajal)
- Järgi [Microsoft Open Source käitumiskoodeksit](https://opensource.microsoft.com/codeofconduct/)
- Vaata üksikasjalikke juhiseid [CONTRIBUTING.md](./CONTRIBUTING.md) failist
- Viita PR kirjelduse juures vajadusel probleemide numbritele

### Ülevaatusprotsess

- PR-e üle vaatavad hooldajad ja kogukond
- Eelistatakse hariduslikku selgust
- Koodinäited peaksid järgima hetke parimaid tavasid
- Tõlked vaadatakse läbi täpsuse ja kultuurilise sobivuse huvides

## Tõlkesüsteem

### Automaatne tõlkimine

- Kasutab GitHub Actions koos co-op-translator töövooga
- Tõlgib automaatselt enam kui 50 keelde
- Allikafailid peamistes kaustades
- Tõlgitud failid kaustades `translations/{language-code}/`

### Käsitsi tõlkeparanduste lisamine

1. Otsi fail kaustast `translations/{language-code}/`
2. Tee parandused, säilitades struktuuri
3. Veendu, et koodinäited toimivad edasi
4. Testi lokaliseeritud viktoriinisisu

### Tõlkemetaandmed

Tõlgitud failidel on metadata päis:
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

**Viktoriini äpp ei käivitu**:
- Kontrolli Node.js versiooni (v14+ soovitatav)
- Kustuta `node_modules` ja `package-lock.json`, käivita `npm install` uuesti
- Kontrolli pordi konflikte (vaikimisi: Vite kasutab porti 5173)

**API server ei käivitu**:
- Veendu, et Node.js versioon vastab minimaalsetele nõuetele (node >=10)
- Kontrolli, kas port on juba kasutuses
- Kontrolli, et kõik sõltuvused on installitud käsklusega `npm install`

**Brauserilaiendus ei laadi**:
- Kontrolli, et manifest.json on korrektselt vormindatud
- Vaata brauseri konsoolist vigu
- Järgi brauserispetsiifilisi laiendi paigaldamise juhiseid

**Python jutuprojekti probleemid**:
- Veendu, et OpenAI pakett on installitud: `pip install openai`
- Kontrolli, et GITHUB_TOKEN keskkonnamuutuja on seadistatud
- Kontrolli GitHub Models ligipääsu õiguseid

**Docsify ei serveeri dokumente**:
- Paigalda globaalne docsify-cli: `npm install -g docsify-cli`
- Käivita hoidla juurkataloogist
- Kontrolli, et `docs/_sidebar.md` olemas

### Arenduskeskkonna nõuanded

- Kasuta VS Code Live Server laiendust HTML projektidel
- Paigalda ESLint ja Prettier laiendid järjepidevaks vormindamiseks
- Kasuta brauseri DevTools JavaScripti silumiseks
- Vue projektide jaoks paigalda Vue DevTools brauserilaiendus

### Jõudlusküsimused

- Rohkem kui 50 keeles tõlgitud failide arv tähendab, et täielikud kloonid on suured
- Kasuta pindmist klooni, kui töötab ainult sisuga: `git clone --depth 1`
- Väldi tõlgete otsingut ingliskeelse sisu töötamisel
- Ehitamine võib esmakordselt olla aeglane (npm install, Vite ehitus)

## Turvaküsimused

### Keskkonnamuutujad

- API võtmeid ei tohi kunagi commitida hoidlasse
- Kasuta `.env` faile (juba `.gitignore`-s)
- Dokumenteeri nõutud keskkonnamuutujad projektide README-des

### Python projektid

- Kasuta virtuaalkeskkondi: `python -m venv venv`
- Hoia sõltuvusi ajakohasena
- GitHub tokenitel peaks olema miinimum vajalikud õigused

### GitHub Models ligipääs

- Isikliku ligipääsu tokeni (PAT) nõutakse GitHub Models jaoks
- Toksid tuleks hoida keskkonnamuutujatena
- Mitte kunagi ei commitiks tokeneid ega volitusi

## Lisamärkused

### Sihtgrupp

- Täielikud veebiarenduse algajad
- Õpilased ja isetegijad
- Õpetajad, kes kasutavad õppekava klassiruumis
- Sisu on loodud ligipääsetavaks ja oskuste järk-järguliseks arendamiseks

### Haridusfilosoofia

- Projektipõhine õppemeetod
- Sageli tehtavad teadmiste kontrollid (viktoriinid)
- Käed-külge kodeerimise harjutused
- Reaalmaailma rakenduste näited
- Keskendumine põhialustele enne raamistikke

### Hoidla hooldus

- Aktiivne kogukond õppijate ja panustajatega
- Regulaarne sõltuvuste ja sisu uuendamine
- Probleemide ja arutelude jälgimine hooldajate poolt
- Tõlkeuuendused automatiseeritud GitHub Actions abil

### Seotud ressursid

- [Microsoft Learn moodulid](https://docs.microsoft.com/learn/)
- [Õpilaskeskuse ressursid](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot), soovitatav õppijatele
- Lisa kursused: Generatiivne AI, Andmeteadus, ML, IoT õppekavad saadaval

### Töötamine spetsiifiliste projektidega

Detailse juhendi jaoks üksikprojektidele vaata README faile:
- `quiz-app/README.md` - Vue 3 viktoriini rakendus
- `7-bank-project/README.md` - Panga rakendus autentimisega
- `5-browser-extension/README.md` - Brauserilaienduse arendus
- `6-space-game/README.md` - Canvas baasil mängu arendus
- `9-chat-project/README.md` - AI juturoboti projekt

### Monorepo struktuur

Kuigi see ei ole traditsiooniline monorepo, sisaldab see hoidla mitut iseseisvat projekti:
- Iga õppetund on iseseisev
- Projektid ei jaga sõltuvusi
- Töötage üksikute projektidega mõjutamata teisi
- Klooni kogu hoidla tervikliku õppekava kogemuse jaoks

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüdleme täpsuse poole, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle emakeeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta käesoleva tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->