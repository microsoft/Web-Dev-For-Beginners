# AGENTS.md

## Projekti ülevaade

See on hariduslik õppekava hoidla, mis on mõeldud veebiarenduse põhimõtete õpetamiseks algajatele. Õppekava on Microsoft Cloud Advocates'i loodud põhjalik 12-nädalane kursus, mis sisaldab 24 praktilist õppetundi JavaScripti, CSS-i ja HTML-i kohta.

### Peamised komponendid

- **Hariduslik sisu**: 24 struktureeritud õppetundi, mis on korraldatud projektipõhistesse moodulitesse
- **Praktilised projektid**: Terrarium, Tippmäng, Brauserilaiendus, Kosmosemäng, Panga rakendus, Koodiredaktor ja AI juturobot
- **Interaktiivsed viktoriinid**: 48 viktoriini, igaühes 3 küsimust (enne ja pärast õppetundi)
- **Mitmekeelne tugi**: Automaatne tõlge 50+ keelde GitHub Actionsi kaudu
- **Tehnoloogiad**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektide jaoks)

### Arhitektuur

- Hariduslik hoidla õppetundide struktuuriga
- Igas õppetunni kaustas on README, koodi näited ja lahendused
- Iseseisvad projektid eraldi kataloogides (quiz-app, erinevad õppetundi projektid)
- Tõlkesüsteem kasutades GitHub Actionsi (co-op-translator)
- Dokumentatsioon serveeritakse Docsify abil ja on saadaval PDF-ina

## Seadistus-käsud

See hoidla on peamiselt mõeldud haridusliku sisu tarbimiseks. Konkreetsete projektidega töötamiseks:

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
# Järgige brauserispetsiifilisi laienduste laadimise juhiseid
```

### Kosmosemängu projektid

```bash
cd 6-space-game/solution
npm install
# Ava index.html brauseris või kasuta Live Serverit
```

### Jutu projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Sea GITHUB_TOKEN keskkonnamuutuja
python api.py
```

## Arenduse töövoog

### Sisu kaasautoritele

1. **Hargne hoidla** oma GitHubi kontole
2. **Kloonige oma hargnevus lokaalselt**
3. **Loo uus haru** oma muudatuste jaoks
4. Tee muudatusi õppetundide sisus või koodi näidetes
5. Testi koodimuudatusi vastavates projektikaustades
6. Esita pull-päringud vastavalt panustamisjuhistele

### Õppuritele

1. Hargne või klooni hoidla
2. Liigu õppetundide kaustades järjestikku
3. Loe iga õppetunni README faile
4. Täida enne õppetundi viktoriinid aadressil https://ff-quizzes.netlify.app/web/
5. Töötle läbi koodi näited õppetundide kaustades
6. Täida ülesanded ja väljakutsed
7. Tee pärast õppetundi viktoriinid

### Reaalajas arendus

- **Dokumentatsioon**: käivita juurkataloogis `docsify serve` (port 3000)
- **Viktoriini rakendus**: käivita `npm run dev` quiz-app kataloogis
- **Projektid**: kasuta VS Code Live Server laiendust HTML projektide jaoks
- **API projektid**: käivita vastavates API kataloogides `npm start`

## Testimise juhised

### Viktoriini rakenduse testimine

```bash
cd quiz-app
npm run lint       # Kontrolli koodistiili rikkumisi
npm run build      # Kontrolli, et ehitus õnnestub
```

### Panga API testimine

```bash
cd 7-bank-project/api
npm run lint       # Kontrolli koodistiili probleeme
node server.js     # Kontrolli, kas server käivitub ilma vigadeta
```

### Üldine testimisstrateegia

- Tegemist on haridusliku hoidla, millel ei ole põhjalikke automaatseid teste
- Käsitsi testimine keskendub:
  - Koodinäidete töötamisele ilma vigadeta
  - Dokumentatsiooni linkide õigele toimimisele
  - Projektide edukale ehitamisele
  - Näidete parimate tavade järgimisele

### Enne esitamise kontrollid

- Käivita `npm run lint` kataloogides, kus on package.json
- Kontrolli markdown linkide kehtivust
- Testi koodi näiteid brauseris või Node.js keskkonnas
- Veendu, et tõlked hoiaksid õiget struktuuri

## Koodi stiili juhised

### JavaScript

- Kasuta kaasaegset ES6+ süntaksit
- Järgi projektides määratud tavapäraseid ESLint konfiguratsioone
- Kasuta tähenduslikke muutujate ja funktsioonide nimesid haridusliku selguse jaoks
- Lisa kommentaare, mis selgitavad kontseptsioone õppijatele
- Vorminda Prettier abil seal, kus see on seadistatud

### HTML/CSS

- Semantiline HTML5 elementide kasutus
- Reageeriva disaini põhimõtted
- Selged klassinime konventsioonid
- Kommentaarid, mis selgitavad CSS tehnikaid õppuritele

### Python

- PEP 8 stiilijuhised
- Selged, hariduslikud koodinäited
- Tüübiviited seal, kus need aitavad õppimist

### Markdown dokumentatsioon

- Selge päiste hierarhia
- Koodiblokid koos keele määratlusega
- Lingid lisamaterjalidele
- Ekraanipildid ja pildid `images/` kataloogides
- Piltide alt-tekst ligipääsetavuse tagamiseks

### Failide korraldus

- Õppetunnid numbritega järjestatud (nt 1-getting-started-lessons, 2-js-basics jne)
- Igal projektil on `solution/` ja tihti `start/` või `your-work/` kataloogid
- Pildid salvestatud õppetundide eripärastesse `images/` kaustadesse
- Tõlked asuvad `translations/{language-code}/` struktuuris

## Ehitamine ja juurutamine

### Viktoriinirakenduse juurutamine (Azure Static Web Apps)

quiz-app on seadistatud Azure Static Web Apps juurutamiseks:

```bash
cd quiz-app
npm run build      # Loob kausta dist/
# Teostab juurutamise GitHub Actions töövoo kaudu pushi korral main harusse
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
npm install -g docsify-cli    # Installi Docsify globaalselt
docsify serve                 # Serveeri aadressil localhost:3000
```

### Projektipõhised ehitused

Igal projektil võib olla oma ehitusprotsess:
- Vue projektid: `npm run build` loob tootmise komplektid
- Staatilised projektid: pole ehitusetappi, failid serveeritakse otse

## Pull-päringu juhised

### Pealkirja formaat

Kasuta selgeid, kirjeldavaid pealkirju, mis näitavad muudatuse valdkonda:
- `[Quiz-app] Lisa uus viktoriin õppetund X jaoks`
- `[Lesson-3] Paranda kirjaviga terrarium projektis`
- `[Translation] Lisa hispaania tõlge õppetund 5 jaoks`
- `[Docs] Uuenda seadistusjuhiseid`

### Nõutavad kontrollid

Enne PR-i esitamist:

1. **Koodi kvaliteet**:
   - Käivita `npm run lint` mõjutatud projektikataloogides
   - Paranda kõik lintimise vead ja hoiatused

2. **Ehituse kontroll**:
   - Käivita `npm run build`, kui see on kohaldatav
   - Veendu, et ehitus on edukas

3. **Linkide valideerimine**:
   - Testi kõik markdown lingid
   - Kontrolli pildiviiteid

4. **Sisu ülevaatus**:
   - Keele- ja õigekirjakontroll
   - Veendu, et koodi näited on õiged ja hariduslikud
   - Kontrolli, et tõlked säilitavad originaalse tähenduse

### Panustamise nõuded

- Nõustu Microsofti CLA-ga (esimese PR-i automatiseeritud kontroll)
- Järgi [Microsofti avatud lähtekoodi käitumisreegleid](https://opensource.microsoft.com/codeofconduct/)
- Vaata üksikasjalikke juhiseid [CONTRIBUTING.md](./CONTRIBUTING.md) failist
- Viita PR kirjelduse juures vajadusel probleemide numbritele

### Ülevaatusprotsess

- PR-sid vaatavad läbi hooldajad ja kogukond
- Prioriteediks on hariduslik selgus
- Koodi näited peavad järgima hetke parimaid praktikaid
- Tõlgetel on ülevaatus täpsuse ja kultuurilise sobivuse tagamiseks

## Tõlkesüsteem

### Automaatne tõlge

- Kasutab GitHub Actionsi koos co-op-translator töövooga
- Tõlgib automaatselt 50+ keelde
- Allikafailid on põhikaustades
- Tõlgitud failid asuvad `translations/{language-code}/` kataloogides

### Käsitsi tõlkeparanduste lisamine

1. Leia fail `translations/{language-code}/` kataloogist
2. Tee parandused, hoides struktuuri
3. Veendu, et koodi näited töötavad jätkuvalt
4. Testi kõiki kohandatud viktoriini sisu osi

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

## Silumine ja probleemide lahendamine

### Levinumad probleemid

**Viktoriinirakendus ei käivitu**:
- Kontrolli Node.js versiooni (soovituslik v14+)
- Kustuta `node_modules` ja `package-lock.json`, käivita `npm install` uuesti
- Kontrolli pordikonflikte (vaikimisi: Vite kasutab porti 5173)

**API server ei käivitu**:
- Kontrolli, et Node.js versioon on vähemalt 10 või uuem
- Kontrolli, kas port on juba hõivatud
- Veendu, et kõik sõltuvused on paigaldatud `npm install` abil

**Brauserilaiendus ei lae**:
- Kontrolli, et manifest.json on õigesti vormistatud
- Vaata brauseri konsoolist veateateid
- Järgi brauseripõhiseid laienduse paigaldusjuhiseid

**Python juturoboti probleemid**:
- Veendu, et OpenAI pakett on paigaldatud: `pip install openai`
- Kontrolli, et GITHUB_TOKEN keskkonnamuutuja on seatud
- Kontrolli GitHub mudelitele juurdepääsu õigusi

**Docsify ei serveeri dokumente**:
- Paigalda docsify-cli globaalselt: `npm install -g docsify-cli`
- Käivita hoidla juurkataloogist
- Kontrolli, et fail `docs/_sidebar.md` on olemas

### Arenduskeskkonna näpunäited

- Kasuta VS Code’i koos Live Server laiendusega HTML projektide jaoks
- Paigalda ESLint ja Prettier laiendused ühtlaseks vormindamiseks
- Kasuta brauseri arendustööriistu JavaScripti silumiseks
- Vue projektide puhul paigalda Vue DevTools brauserilaiendus

### Jõudluse kaalutlused

- Palju tõlgitud faile (50+ keeltes) tähendab suurt klooni suurust
- Kasuta madalat klooni, kui töötad ainult sisuga: `git clone --depth 1`
- Väldi tõlgete otsimist, kui keskendud inglisekeelsele sisule
- Ehitused võivad esimesel korral olla aeglased (npm install, Vite build)

## Turvalisuse kaalutlused

### Keskkonnamuutujad

- API võtmeid ei tohi kunagi hoidlasse panna
- Kasuta `.env` faile (juba `.gitignore`-s)
- Dokumenteeri nõutud keskkonnamuutujad projekti READMEs

### Python projektid

- Kasuta virtuaalset keskkonda: `python -m venv venv`
- Hoia sõltuvused ajakohased
- GitHubi tokenid peaksid omama minimaalseid vajalikke õigusi

### GitHub mudelitele juurdepääs

- GitHub mudelite jaoks on vajalikud personaalsed juurdepääsutokenid (PAT)
- Tokenid tuleks hoida keskkonnamuutujatena
- Ära kunagi pane tokenit või mandaate hoidla hulka

## Lisamärkused

### Sihtgrupp

- Täielikud algajad veebiarenduses
- Üliõpilased ja iseseisvad õppijad
- Õpetajad, kes kasutavad õppekava klassiruumis
- Sisu on loodud ligipääsetavaks ning oskuste järkjärguliseks arendamiseks

### Haridusalane filosoofia

- Projektipõhine õppe lähenemine
- Sageli toimuvad teadmiste kontrollid (viktoriinid)
- Praktilised kodeerimisharjutused
- Reaalmaailma rakenduste näited
- Keskendumine põhitõdedele enne raamistikke

### Hoidla hooldus

- Aktiivne kogukond õppijate ja panustajatega
- Regulaarne sisu ja sõltuvuste uuendamine
- Hooldajad jälgivad issue-sid ja arutelusid
- Tõlkete uuendused on automatiseeritud GitHub Actionsi kaudu

### Seotud ressursid

- [Microsoft Learn moodulid](https://docs.microsoft.com/learn/)
- [Õpilaskeskuse ressursid](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) soovitatav õppuritele
- Täiendavad kursused: Generatiivne AI, Andmeteadus, ML, IoT õppekavad saadaval

### Töötamine konkreetsete projektidega

Üksikasjalike juhiste jaoks üksikprojektidele vaata READMEsid:
- `quiz-app/README.md` - Vue 3 viktoriinirakendus
- `7-bank-project/README.md` - pangarakendus autentimisega
- `5-browser-extension/README.md` - brauserilaienduse arendus
- `6-space-game/README.md` - Canvas-põhine mänguarendus
- `9-chat-project/README.md` - AI juturoboti projekt

### Monorepo struktuur

Kuigi see ei ole traditsiooniline monorepo, sisaldab see hoidla mitut sõltumatut projekti:
- Iga õppetund on iseseisev
- Projektidel pole ühiseid sõltuvusi
- Töötada saab eraldi projektide kallal ilma teistele mõjuta
- Klooni kogu hoidla kogu õppekava kogemuse saamiseks

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:  
See dokument on tõlgitud, kasutades AI tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi me püüdleme täpsuse poole, palun pange tähele, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tekkida võivate arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->