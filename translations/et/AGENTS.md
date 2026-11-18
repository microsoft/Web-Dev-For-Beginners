# AGENTS.md

## Projekti ülevaade

See on õppekava hoidla veebiarenduse alusteadmiste õpetamiseks algajatele. Õppekava on põhjalik 12-nädalane kursus, mille on välja töötanud Microsoft Cloud Advocates, sisaldades 24 praktilist tundit JavaScripti, CSS-i ja HTML-i kohta.

### Peamised komponendid

- **Õppe sisu**: 24 struktureeritud tundi, organiseeritud projektipõhistesse moodulitesse
- **Praktilised projektid**: Terrarium, Klahvivajutuse mäng, Brauserilaiendus, Kosmosemäng, Panga rakendus, Koodiredaktor ja tehisintellekti vestlusassistent
- **Interaktiivsed viktoriinid**: 48 viktoriini, igaühes 3 küsimust (enne/järgi tunni hindamine)
- **Mitmekeelsus**: Automaatne tõlge 50+ keelde GitHub Actions abil
- **Tehnoloogiad**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (tehisintellekti projektide jaoks)

### Arhitektuur

- Õppehoidla, millel on tunnipõhine struktuur
- Igas tunni kaustas on README, koodinäited ja lahendused
- Iseseisvad projektid eraldi kataloogides (quiz-app, erinevad tundide projektid)
- Tõlkesüsteem kasutades GitHub Actions (co-op-translator)
- Dokumentatsioon on kättesaadav läbi Docsify ja PDF-vormingus

## Seadistuskäsud

See hoidla on peamiselt mõeldud õppe sisuga tutvumiseks. Konkreetsete projektidega töötamiseks:

### Peahoidla seadistus

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Viktoriini rakenduse seadistus (Vue 3 + Vite)

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

### Brauserilaienduste projektid

```bash
cd 5-browser-extension/solution
npm install
# Järgige brauserispetsiifilisi laienduste laadimisjuhiseid
```

### Kosmosemängu projektid

```bash
cd 6-space-game/solution
npm install
# Ava index.html brauseris või kasuta Live Serverit
```

### Vestlusprojekti (Python taust)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sea GITHUB_TOKEN keskkonnamuutuja
python api.py
```

## Arendusprotsess

### Sisulooja jaoks

1. **Looge hoidla forkitus** oma GitHubi kontole
2. **Kloonige oma fork kohalikult**
3. **Looge uus haru** oma muudatuste jaoks
4. Tehke muudatusi tunni sisus või koodinäidetes
5. Testige koodimuudatusi vastavates projektikaustades
6. Esitage pull requestid vastavalt panustamise juhistele

### Õppija jaoks

1. Forkige või kloonige hoidla
2. Liikuge järjestikku läbi tunnikaustade
3. Lugege iga tunni README-faile
4. Täitke enne tundi viktoriinid aadressil https://ff-quizzes.netlify.app/web/
5. Töötage läbi koodinäited tunnikaustades
6. Täitke ülesanded ja väljakutsed
7. Tehke pärast tundi viktoriinid

### Reaalajas arendus

- **Dokumentatsioon**: Käivitage `docsify serve` juurkataloogis (port 3000)
- **Viktoriinirakendus**: Käivitage `npm run dev` quiz-app kaustas
- **Projektid**: Kasutage VS Code Live Server laiendit HTML projektide jaoks
- **API projektid**: Käivitage `npm start` vastavates API kaustades

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
npm run lint       # Kontrolli koodistiili vigu
node server.js     # Kontrolli, et server käivitub ilma vigadeta
```

### Üldine testimislähenemine

- See on õppehoidla ilma täielike automatiseeritud testideta
- Käsitsi testimisel keskendutakse:
  - Koodinäited töötavad vigadeta
  - Dokumentatsiooni lingid toimivad korrektselt
  - Projektide ehitused lõppevad edukalt
  - Näited järgivad parimaid tavasid

### Enne esitamist kontrollid

- Käivitage `npm run lint` kaustades, kus on package.json
- Kontrollige markdowni lingid kehtivust
- Testige koodi näited brauseris või Node.js-s
- Veenduge, et tõlked säilitavad õige struktuuri

## Koodistiili juhised

### JavaScript

- Kasutage kaasaegset ES6+ süntaksit
- Järgige projektides olevaid standardseid ESLint konfiguratsioone
- Kasutage tähenduslikke muutujate ja funktsioonide nimesid hariduse lihtsustamiseks
- Lisage kommentaare kontseptsioonide selgitamiseks õppijatele
- Vormindage Prettier abil, kui see on seadistatud

### HTML/CSS

- Semeantiline HTML5 kasutamine
- Reageeriv disaini põhimõtted
- Selged klassinimed
- Kommentaarid CSS tehnikate selgitamiseks õppijatele

### Python

- PEP 8 stiiljuhised
- Selged, hariduslikud koodinäited
- Kui kasulik, siis tüüpi vihjed õppe hõlbustamiseks

### Markdown dokumentatsioon

- Selge pealkirjastruktuur
- Koodiblokid keelespetsiifikatsiooniga
- Lingid täiendavatele ressurssidele
- Ekraanipildid ja pildid `images/` kaustades
- Piltide alt-tekst ligipääsetavuse tagamiseks

### Failide organiseerimine

- Tunnid nummerdatud järjestikku (1-getting-started-lessons, 2-js-basics jne)
- Igal projektil on `solution/` ja sageli `start/` või `your-work/` kaustad
- Pildid on salvestatud konkreetse tunni `images/` kaustadesse
- Tõlked struktuuris `translations/{language-code}/`

## Ehitus ja juurutamine

### Viktoriinirakenduse juurutamine (Azure Static Web Apps)

Viktoriinirakendus on seadistatud Azure Static Web Apps jaoks:

```bash
cd quiz-app
npm run build      # Loob kausta dist/
# Käivitab juurutamise GitHub Actions töövoo kaudu, kui tehakse push main harusse
```

Azure Static Web Apps seadistus:
- **Rakenduse asukoht**: `/quiz-app`
- **Väljundi asukoht**: `dist`
- **Töövoog**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentatsiooni PDF genereerimine

```bash
npm install                    # Installi docsify-to-pdf
npm run convert               # Genereeri PDF docs-ist
```

### Docsify dokumentatsioon

```bash
npm install -g docsify-cli    # Installi Docsify globaalselt
docsify serve                 # Serveri aadressil localhost:3000
```

### Projektipõhised ehitused

Igal projekti kaustal võib olla oma ehitusprotsess:
- Vue projektid: `npm run build` loob tootmisversiooni pakid
- Staatilised projektid: ehitusetapp puudub, failid serveeritakse otse

## Pull requestide juhised

### Pealkirja vorming

Kasutage selgeid, kirjeldavaid pealkirju muudatuse teema täpsustamiseks:
- `[Quiz-app] Lisa uus viktoriin tunnile X`
- `[Lesson-3] Paranda kirjaviga terrarium projekti juures`
- `[Translation] Lisa hispaania tõlge tunnile 5`
- `[Docs] Uuenda seadistamise juhiseid`

### Vajalikud kontrollid

Enne PR esitamist:

1. **Koodi kvaliteet**:
   - Käivitage `npm run lint` mõjutanud projektikaustades
   - Parandage kõik lintimise vead ja hoiatused

2. **Ehituse kontroll**:
   - Käivitage `npm run build` kui rakendub
   - Veenduge, et ehitus ei ole ebaõnnestunud

3. **Linkide kontroll**:
   - Testige kõiki markdowni lingid
   - Kontrollige piltide viited töötavad

4. **Sisu ülevaatus**:
   - Toimetage õigekirja ja grammatika osas
   - Veenduge, et koodinäited on korrektsed ja õpetlikud
   - Kontrollige, et tõlked säilitavad algse tähenduse

### Panustamise tingimused

- Nõustuge Microsoft CLA-ga (automaatne kontroll esimesel PR-il)
- Järgige [Microsofti avatud lähtekoodi käitumisreegleid](https://opensource.microsoft.com/codeofconduct/)
- Vaadake üksikasjalikke juhiseid failist [CONTRIBUTING.md](./CONTRIBUTING.md)
- Viidake probleeminumbritele PR kirjelduse juures, kui asjakohane

### Ülevaatusprotsess

- PR-e vaatavad üle hoidjate ja kogukonna liikmed
- Eetiline hariduslik selgus on prioriteet
- Koodinäited peaksid järgima parimaid praktikaid
- Tõlked kontrollitakse täpsuse ja kultuurilise sobivuse suhtes

## Tõlkesüsteem

### Automaatne tõlge

- Kasutatakse GitHub Actions koos co-op-translator töövooga
- Tõlgib automaatselt enam kui 50 keelde
- Allikfailid asuvad põhikaustades
- Tõlgitud failid asuvad struktuuris `translations/{language-code}/`

### Käsitsi tõlkeparanduste lisamine

1. Leidke fail kaustast `translations/{language-code}/`
2. Tehke parandused säilitades struktuuri
3. Veenduge, et koodinäited jäävad töökorras
4. Testige tõlgitud viktoriini sisu

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

## Silumine ja probleemide lahendamine

### Tavalised probleemid

**Viktoriinirakendus ei käivitu**:
- Kontrollige Node.js versiooni (soovitatav v14+)
- Kustutage `node_modules` ja `package-lock.json`, käivitage uuesti `npm install`
- Kontrollige pordi konflikte (vaikimisi Vite kasutab porti 5173)

**API server ei käivitu**:
- Kontrollige, et Node.js versioon on minimaalne (node >=10)
- Veenduge, et port ei ole juba kasutusel
- Veenduge, et kõik sõltuvused on installitud käsuga `npm install`

**Brauserilaiendus ei laadi**:
- Kontrollige, et manifest.json on õigesti vormindatud
- Vaadake brauseri konsooli vigade osas
- Järgige konkreetse brauseri laienduse paigaldamise juhiseid

**Python vestlusprojekti probleemid**:
- Veenduge, et OpenAI pakett on installitud: `pip install openai`
- Veenduge, et keskkonnamuutuja GITHUB_TOKEN on määratud
- Kontrollige GitHubi mudelite ligipääsu õigusi

**Docsify ei serveeri dokumente**:
- Installige globaalne docsify-cli: `npm install -g docsify-cli`
- Käivitage hoidla juurkataloogist
- Kontrollige, et `docs/_sidebar.md` on olemas

### Arenduskeskkonna nõuanded

- Kasutage VS Code ja Live Server laiendit HTML projektide jaoks
- Installige ESLint ja Prettier laiendid ühtlase vorminduse tagamiseks
- Kasutage brauseri arendajatööriistu JavaScripti silumiseks
- Vue projektide puhul installige Vue DevTools brauserilaiendus

### Jõudluse kaalutlused

- Paljud tõlgitud failid (50+ keelt) muudavad täiskloonimise suureks
- Kasutage sügava klooni asemel madalat klooni, kui töötate ainult sisuga: `git clone --depth 1`
- Välistage tõlked otsingutest, kui töötate ingliskeelse sisuga
- Ehitused võivad olla esineb esmakordsel käivitamisel aeglased (npm install, Vite build)

## Turvakaalutlused

### Keskkonnamuutujad

- API võtmeks ei tohi kunagi olla kodeeritud hoidlas
- Kasutage `.env` faile (juba .gitignore-s)
- Dokumenteerige nõutavad keskkonnamuutujad projekti README-des

### Python projektid

- Kasutage virtuaalseid keskkondi: `python -m venv venv`
- Hoidke sõltuvused ajakohasena
- GitHubi tokenid peaksid olema minimaalsete õigustega

### GitHub mudelite ligipääs

- Isiklikud ligipääsu tokenid (PAT) on vajalikud GitHubi mudelite jaoks
- Tokenid tuleb hoida keskkonnamuutujatena
- Ärge kunagi pange tokeneid ega mandaate hoidlasse

## Lisamärkused

### Sihtgrupp

- Täielikud algajad veebiarenduses
- Õpilased ja iseseisvalt õppijad
- Õpetajad, kes kasutavad õppekava klassiruumis
- Sisu on loodud ligipääsetavaks ja järkjärguliseks oskuste arendamiseks

### Haridusfilosoofia

- Projektipõhine õpe
- Sageli teadmiste kontrollid (viktoriinid)
- Praktilised kodeerimise harjutused
- Reaalmaailma rakenduste näited
- Fookus algteadmistel enne raamistikke

### Hoidla hooldus

- Aktiivne õppijate ja panustajate kogukond
- Regulaarne sisu ja sõltuvuste uuendamine
- Probleemide ja arutelude jälgimine hoidjate poolt
- Tõlke uuendused automatiseeritud GitHub Actions abil

### Seotud ressursid

- [Microsoft Learn moodulid](https://docs.microsoft.com/learn/)
- [Õpilaste tugikeskuse ressursid](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) soovitatav õppijatele
- Täiendavad kursused: generatiivne AI, andmeteadus, ML, IoT õppekavad kättesaadavad

### Konkreetsete projektidega töötamine

Üksikasjalikeks juhisteks konkreetsetes projektides vaadake README-faile:
- `quiz-app/README.md` - Vue 3 viktoriinirakendus
- `7-bank-project/README.md` - Panga rakendus autentimisega
- `5-browser-extension/README.md` - Brauserilaienduse arendus
- `6-space-game/README.md` - Canvas põhine mänguarendus
- `9-chat-project/README.md` - Tehisintellekti vestlusassistent

### Monorepo struktuur

Kuigi ei ole traditsiooniline monorepo, sisaldab see hoidla mitut iseseisvat projekti:
- Iga tund on iseseisev
- Projektid ei jaga sõltuvusi
- Tööta üksikute projektidega mõjutamata teisi
- Klooni kogu hoidla, et saada kogu õppekava kogemus

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:  
See dokument on tõlgitud kasutades tehisintellekti tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, palun arvestage, et automatiseeritud tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks lugeda autoriteetse allikana. Kriitilise info puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta ühegi arusaamatuse või valesti mõistmise eest, mis võib tekkida selle tõlke kasutamisest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->