# AGENTS.md

## Projekti ülevaade

See on hariduslik õppekava hoidla veebiarenduse põhialuste õpetamiseks algajatele. Õppekava on põhjalik 12-nädalane kursus, mille on välja töötanud Microsoft Cloud Advocates, hõlmates 24 praktilist õppetundi JavaScripti, CSSi ja HTMLi kohta.

### Põhikomponendid

- **Hariduslik sisu**: 24 struktureeritud õppetundi, mis on organiseeritud projektipõhistesse moodulitesse
- **Praktilised projektid**: Terrarium, tippimise mäng, brauserilaiendus, kosmose mäng, pangarakendus, koodiredaktor ja AI juturobot
- **Interaktiivsed viktoriinid**: 48 viktoriini, igaühes 3 küsimust (enne/pärast õppetundi hindamine)
- **Mitmekeelne tugi**: Automaatne tõlkimine 50+ keelde GitHub Actionsi abil
- **Tehnoloogiad**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektide jaoks)

### Arhitektuur

- Hariduslik hoidla õppepõhise struktuuriga
- Iga õppetunni kaust sisaldab README-d, koodinäiteid ja lahendusi
- Iseteenindusprojektid eraldi kataloogides (quiz-app, erinevad õppetunniprojektid)
- Tõlkesüsteem kasutades GitHub Actionsi (co-op-translator)
- Dokumentatsioon edastatakse Docsify abil ja on saadaval PDF formaadis

## Paigalduskäsud

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

### Kosmose mängu projektid

```bash
cd 6-space-game/solution
npm install
# Ava index.html brauseris või kasuta Live Serverit
```

### Juturoboti projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Määra keskkonnamuutuja GITHUB_TOKEN
python api.py
```

## Arendustöövoog

### Sisu panustajatele

1. **Põlvitage hoidla** oma GitHubi kontole
2. **Klooni oma põlvvärk lokaalselt**
3. **Loo uus haru** oma muudatuste jaoks
4. Muutke õppetunni sisu või koodinäiteid
5. Testige koodimuudatusi vastavates projekti kataloogides
6. Esitage pull requeste vastavalt panustamise juhistele

### Õppijatele

1. Põlvitage või klooni hoidla
2. Liikuge järjestikku õppetundide kataloogidesse
3. Loe iga õppetunni README faile
4. Täitke enne õppetundi viktoriinid aadressil https://ff-quizzes.netlify.app/web/
5. Töötage läbi koodinäited õppetunni kaustades
6. Täitke ülesanded ja väljakutsed
7. Tehke pärast õppetundi viktoriinid

### Reaalajas arendamine

- **Dokumentatsioon**: Käivitage `docsify serve` põhikaustas (port 3000)
- **Viktoriini rakendus**: Käivitage `npm run dev` quiz-app kataloogis
- **Projektid**: Kasutage VS Code Live Serveri laiendust HTML projektide jaoks
- **API projektid**: Käivitage `npm start` vastavates API kataloogides

## Testimise juhised

### Viktoriini rakenduse testimine

```bash
cd quiz-app
npm run lint       # Kontrolli koodistiili probleeme
npm run build      # Kontrolli, kas koostamine õnnestub
```

### Panga API testimine

```bash
cd 7-bank-project/api
npm run lint       # Kontrolli koodistiili probleemide osas
node server.js     # Kontrolli, kas server käivitub ilma vigadeta
```

### Üldine testimislähenemine

- See on hariduslik hoidla ilma põhjalike automaatsete testideta
- Manuaalne testimine keskendub:
  - Koodinäited töötavad ilma vigadeta
  - Dokumentatsiooni lingid toimivad õigesti
  - Projektide ehitused õnnestuvad
  - Näited järgivad parimaid praktikaid

### Enne esitamist tehtavad kontrollid

- Käivitage `npm run lint` kaustades, kus on package.json
- Kontrollige, et markdowni lingid on kehtivad
- Testige koodinäiteid brauseris või Node.js keskkonnas
- Kontrollige, et tõlked säilitavad korrektse struktuuri

## Koodi stiili juhised

### JavaScript

- Kasutage kaasaegset ES6+ süntaksit
- Järgige projektides olevaid standardseid ESLinti konfiguratsioone
- Kasutage tähenduslikke muutujate ja funktsioonide nimesid haridusliku selguse tagamiseks
- Lisage kommentaare, mis selgitavad kontseptsioone õppijatele
- Vormindage Prettieriga, kui see on seadistatud

### HTML/CSS

- Semantiline HTML5 elementide kasutamine
- Reageerivad disainipõhimõtted
- Selged klassi nimetamise konventsioonid
- Kommentaarid, mis selgitavad CSS tehnikat õppijatele

### Python

- PEP 8 stiiliajuhised
- Selged, hariduslikud koodinäited
- Tüüpi vihjed seal, kus need aitavad õppimist

### Markdown dokumentatsioon

- Selge pealkirjade hierarhia
- Koodiblokid koos keele määratlusega
- Lingid täiendavatele ressurssidele
- Ekraanitõmmised ja pildid `images/` kataloogides
- Piltide alternatiivtekst ligipääsetavuse jaoks

### Failide korraldus

- Õppetunnid nummerdatud järjestikku (1-getting-started-lessons, 2-js-basics jne)
- Igal projektil on `solution/` ja sageli `start/` või `your-work/` kataloogid
- Pildid salvestatud õppetunni-spetsiifilistesse `images/` kaustadesse
- Tõlked asuvad `translations/{language-code}/` struktuuris

## Ehitamine ja juurutamine

### Viktoriini rakenduse juurutamine (Azure Static Web Apps)

Viktoriini rakendus on konfigureeritud Azure Static Web Apps juurutamiseks:

```bash
cd quiz-app
npm run build      # Loob dist/ kausta
# Käivitab juurutamise GitHub Actions töövoo kaudu, kui tehakse push main haru
```

Azure Static Web Apps konfiguratsioon:
- **Rakenduse asukoht**: `/quiz-app`
- **Väljundkaust**: `dist`
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

### Projektikohtased ehitused

Igal projekti kataloogil võib olla oma ehitusprotsess:
- Vue projektid: `npm run build` loob tootmispaketid
- Staatilised projektid: ei ole ehitusastet, teenindatakse faile otse

## Pull requestide juhised

### Pealkirja vorming

Kasutage selgeid, kirjeldavaid pealkirju muudetava valdkonna väljendamiseks:
- `[Quiz-app] Lisa uus viktoriin õppetunnile X`
- `[Lesson-3] Paranda trükiviga terrarium projekti juures`
- `[Translation] Lisa hispaania tõlge õppetunnile 5`
- `[Docs] Uuenda seadistuste juhiseid`

### Nõutavad kontrollid

Enne PR esitamist:

1. **Koodi kvaliteet**:
   - Käivitage `npm run lint` mõjutatud projektikaustades
   - Parandage kõik lintimise vead ja hoiatused

2. **Ehituskontroll**:
   - Käivitage vajadusel `npm run build`
   - Veenduge, et ehitusvead puuduvad

3. **Lingide kontroll**:
   - Testige kõiki markdowni linke
   - Kontrollige pildiviiteid

4. **Sisu ülevaade**:
   - Parandage õigekirja ja grammatikat
   - Veenduge, et koodinäited on õiged ja hariduslikud
   - Kontrollige, et tõlked säilitavad algse tähenduse

### Panustamise nõuded

- Nõustuge Microsoft CLA-ga (automaatne kontroll esimesel PR-il)
- Järgige [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Vaadake [CONTRIBUTING.md](./CONTRIBUTING.md) üksikasjalike juhiste jaoks
- Lisage PR kirjeldusse teemade numbrid, kui see on asjakohane

### Ülevaatusprotsess

- PR-e vaatavad läbi hooldajad ja kogukond
- Eelistatakse hariduslikku selgust
- Koodinäited peaksid järgima hetke parimaid praktikaid
- Tõlked vaadatakse üle täpsuse ja kultuurilise sobivuse osas

## Tõlkesüsteem

### Automaatne tõlkimine

- Kasutab GitHub Actionsi koos co-op-translator töövooguga
- Tõlgib automaatselt 50+ keelde
- Algsed failid põhikataloogides
- Tõlgitud failid `translations/{language-code}/` kataloogides

### Käsitsi tõlke paranduste lisamine

1. Leidke fail `translations/{language-code}/`
2. Tehke parandusi säilitades struktuuri
3. Veenduge, et koodinäited töötavad ka edaspidi
4. Testige kõiki lokaliseeritud viktoriiniküsimusi

### Tõlkemetaandmed

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
- Kontrollige Node.js versiooni (soovitatav v14+)
- Kustutage `node_modules` ja `package-lock.json`, seejärel käivitage `npm install`
- Kontrollige pordi konflikte (vaikimisi: Vite kasutab porti 5173)

**API server ei käivitu**:
- Veenduge, et Node.js versioon vastab miinimumile (node >=10)
- Kontrollige, kas port on juba kasutusel
- Veenduge, et kõik sõltuvused on installitud käsuga `npm install`

**Brauserilaiendust ei laeta**:
- Kontrollige, et manifest.json on korrektselt vormindatud
- Kontrollige brauseri konsooli vigade osas
- Järgige brauserispetsiifilisi laienduse paigaldamise juhiseid

**Python juturoboti probleemid**:
- Veenduge, et OpenAI pakett on installitud: `pip install openai`
- Kontrollige, et GITHUB_TOKEN keskkonnamuutuja on seatud
- Kontrollige GitHub Models juurdepääsu õiguseid

**Docsify ei paku dokumente**:
- Paigaldage globaalselt docsify-cli: `npm install -g docsify-cli`
- Käivitage hoidla juurkataloogist
- Veenduge, et `docs/_sidebar.md` on olemas

### Arenduskeskkonna näpunäited

- Kasutage VS Code'i koos Live Serveri laiendusega HTML projektide jaoks
- Paigaldage ESLint ja Prettier laiendused järjepideva vormindamise jaoks
- Kasutage brauseri arendustööriistu JavaScripti silumiseks
- Vue projektide puhul paigaldage Vue DevTools brauserilaiendus

### Töövõime kaalutlused

- Suur tõlgitud failide arv (50+ keelt) tähendab, et täiskloonid on suured
- Kasutage siledat klooni, kui töötate ainult sisuga: `git clone --depth 1`
- Välistage tõlked otsingutest, kui töötate inglise sisuga
- Ehituste protsessid võivad olla esmakordsel käivitamisel aeglased (npm install, Vite ehitus)

## Turvalisuse kaalutlused

### Keskkonnamuutujad

- API võtmeid ei tohi kunagi hoidlas hoida
- Kasutage `.env` faile (mille .gitignore juba sisaldub)
- Dokumenteerige vajalikud keskkonnamuutujad projektide README-des

### Python projektid

- Kasutage virtuaalseid keskkondi: `python -m venv venv`
- Hoidke sõltuvused ajakohasena
- GitHubi tokenid peaksid omama minimaalset vajaliku õigustega

### GitHub Modelsi juurdepääs

- Isiklikud ligipääsutokenid (PAT) vajalikud GitHub Modelsile
- Tokenid tuleb hoida keskkonnamuutujatena
- Ärge kunagi hoidlas hoida tokeneid ega mandaate

## Lisamärkmed

### Sihtgrupp

- Täielikud veebiarenduse algajad
- Õpilased ja iseseisvalt õppijad
- Õpetajad, kes kasutavad õppekava klassiruumis
- Sisu on loodud juurdepääsetavaks ja oskuste järkjärguliseks ülesehitamiseks

### Hariduslik filosoofia

- Projektipõhine õppemeetod
- Sageli toimuvad teadmiste kontrollid (viktoriinid)
- Praktikakood harjutused
- Reaalmaailma rakenduste näited
- Keskendumine põhialustele enne raamistikke

### Hoidla hooldus

- Aktiivne õppijate ja panustajate kogukond
- Regulaarne sõltuvuste ja sisu uuendamine
- Teemad ja arutelud jälgitud hooldajate poolt
- Tõlke uuendused on automatiseeritud GitHub Actionsi kaudu

### Seotud ressursid

- [Microsoft Learn moodulid](https://docs.microsoft.com/learn/)
- [Õpilaste keskuse ressursid](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) soovitatav õppijatele
- Täiendavad kursused: Generatiivne AI, Andmeteadus, ML, IoT õppekavad

### Spetsiifiliste projektidega töötamine

Üksikasjalike juhiste jaoks vaadake iga projekti README faile:
- `quiz-app/README.md` - Vue 3 viktoriinirakendus
- `7-bank-project/README.md` - Panga rakendus autentimisega
- `5-browser-extension/README.md` - Brauserilaienduse arendamine
- `6-space-game/README.md` - Canvas-põhine mänguarendus
- `9-chat-project/README.md` - AI juturoboti projekt

### Monorepo struktuur

Kuigi ei ole traditsiooniline monorepo, sisaldab see hoidla mitut sõltumatut projekti:
- Iga õppetund on iseseisev
- Projektid ei jaga sõltuvusi
- Töötage individuaalsete projektidega mõjutamata teisi
- Klooni kogu hoidla täiskogemuse saamiseks

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud kasutades tehisintellektil põhinevat tõlke teenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsuse, tuleb arvestada, et automatiseeritud tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitatakse kasutada professionaalsete inimtõlkide teenust. Me ei vastuta ühegi arusaamatuse ega valesti tõlgendamise eest, mis võivad tuleneda selle tõlke kasutamisest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->