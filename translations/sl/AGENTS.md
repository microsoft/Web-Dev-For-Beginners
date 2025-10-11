<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:41:43+00:00",
  "source_file": "AGENTS.md",
  "language_code": "sl"
}
-->
# AGENTS.md

## Pregled projekta

To je izobraževalni repozitorij za poučevanje osnov spletnega razvoja za začetnike. Kurikulum je obsežen 12-tedenski tečaj, ki so ga razvili Microsoftovi Cloud Advocates, in vključuje 24 praktičnih lekcij, ki pokrivajo JavaScript, CSS in HTML.

### Ključne komponente

- **Izobraževalna vsebina**: 24 strukturiranih lekcij, organiziranih v module, ki temeljijo na projektih
- **Praktični projekti**: Terarij, igra tipkanja, razširitev za brskalnik, vesoljska igra, bančna aplikacija, urejevalnik kode in AI klepetalni asistent
- **Interaktivni kvizi**: 48 kvizov s po 3 vprašanji (predhodne/naknadne ocene lekcij)
- **Podpora za več jezikov**: Samodejni prevodi v več kot 50 jezikov prek GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Izobraževalni repozitorij s strukturo, ki temelji na lekcijah
- Vsaka mapa lekcije vsebuje README, primere kode in rešitve
- Samostojni projekti v ločenih mapah (quiz-app, različni projekti lekcij)
- Sistem prevajanja prek GitHub Actions (co-op-translator)
- Dokumentacija na voljo prek Docsify in kot PDF

## Ukazi za nastavitev

Ta repozitorij je namenjen predvsem porabi izobraževalne vsebine. Za delo s specifičnimi projekti:

### Nastavitev glavnega repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavitev aplikacije za kvize (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API za bančni projekt (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Projekti razširitev za brskalnik

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Projekti vesoljske igre

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Projekt klepeta (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Delovni proces razvoja

### Za prispevajoče k vsebini

1. **Forkajte repozitorij** na svoj GitHub račun
2. **Klonirajte svoj fork** lokalno
3. **Ustvarite novo vejo** za svoje spremembe
4. Naredite spremembe v vsebini lekcij ali primerih kode
5. Preizkusite spremembe kode v ustreznih mapah projektov
6. Pošljite pull requeste v skladu s smernicami za prispevanje

### Za učence

1. Forkajte ali klonirajte repozitorij
2. Zaporedno se premikajte po mapah lekcij
3. Preberite README datoteke za vsako lekcijo
4. Opravite kvize pred lekcijo na https://ff-quizzes.netlify.app/web/
5. Delajte skozi primere kode v mapah lekcij
6. Opravite naloge in izzive
7. Opravite kvize po lekciji

### Razvoj v živo

- **Dokumentacija**: Zaženite `docsify serve` v korenu (port 3000)
- **Aplikacija za kvize**: Zaženite `npm run dev` v mapi quiz-app
- **Projekti**: Uporabite razširitev Live Server v VS Code za HTML projekte
- **API projekti**: Zaženite `npm start` v ustreznih API mapah

## Navodila za testiranje

### Testiranje aplikacije za kvize

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Testiranje bančnega API-ja

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Splošni pristop k testiranju

- To je izobraževalni repozitorij brez obsežnih avtomatiziranih testov
- Ročno testiranje se osredotoča na:
  - Primeri kode se izvajajo brez napak
  - Povezave v dokumentaciji delujejo pravilno
  - Projekti se uspešno gradijo
  - Primeri sledijo najboljšim praksam

### Preverjanja pred oddajo

- Zaženite `npm run lint` v mapah s package.json
- Preverite, ali so povezave v markdownu veljavne
- Testirajte primere kode v brskalniku ali Node.js
- Preverite, ali prevodi ohranjajo pravilno strukturo

## Smernice za slog kode

### JavaScript

- Uporabljajte sodobno sintakso ES6+
- Sledite standardnim ESLint konfiguracijam, ki so na voljo v projektih
- Uporabljajte smiselna imena spremenljivk in funkcij za izobraževalno jasnost
- Dodajte komentarje, ki razlagajo koncepte za učence
- Formatirajte s Prettier, kjer je konfiguriran

### HTML/CSS

- Semantični HTML5 elementi
- Načela odzivnega oblikovanja
- Jasne konvencije poimenovanja razredov
- Komentarji, ki razlagajo CSS tehnike za učence

### Python

- Smernice sloga PEP 8
- Jasni, izobraževalni primeri kode
- Namigi tipov, kjer so koristni za učenje

### Dokumentacija v Markdownu

- Jasna hierarhija naslovov
- Bloki kode z navedbo jezika
- Povezave do dodatnih virov
- Posnetki zaslona in slike v mapah `images/`
- Alt besedilo za slike za dostopnost

### Organizacija datotek

- Lekcije oštevilčene zaporedno (1-getting-started-lessons, 2-js-basics itd.)
- Vsak projekt ima `solution/` in pogosto `start/` ali `your-work/` mape
- Slike shranjene v lekcijsko specifičnih mapah `images/`
- Prevedene datoteke v strukturi `translations/{language-code}/`

## Gradnja in razmestitev

### Razmestitev aplikacije za kvize (Azure Static Web Apps)

Aplikacija quiz-app je konfigurirana za razmestitev na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Lokacija izhoda**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Dokumentacija Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Gradnje specifične za projekt

Vsaka mapa projekta ima lahko svoj proces gradnje:
- Vue projekti: `npm run build` ustvari produkcijske pakete
- Statični projekti: Brez koraka gradnje, datoteke se strežejo neposredno

## Smernice za pull requeste

### Format naslova

Uporabljajte jasne, opisne naslove, ki nakazujejo področje spremembe:
- `[Quiz-app] Dodaj nov kviz za lekcijo X`
- `[Lesson-3] Popravi tipkarsko napako v projektu terarij`
- `[Translation] Dodaj španski prevod za lekcijo 5`
- `[Docs] Posodobi navodila za nastavitev`

### Zahtevana preverjanja

Pred oddajo PR:

1. **Kakovost kode**:
   - Zaženite `npm run lint` v prizadetih mapah projektov
   - Popravite vse napake in opozorila lintanja

2. **Preverjanje gradnje**:
   - Zaženite `npm run build`, če je primerno
   - Prepričajte se, da ni napak pri gradnji

3. **Validacija povezav**:
   - Testirajte vse markdown povezave
   - Preverite, ali reference slik delujejo

4. **Pregled vsebine**:
   - Preverite črkovanje in slovnico
   - Prepričajte se, da so primeri kode pravilni in izobraževalni
   - Preverite, ali prevodi ohranjajo izvirni pomen

### Zahteve za prispevanje

- Strinjajte se z Microsoft CLA (avtomatsko preverjanje ob prvem PR)
- Sledite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Glejte [CONTRIBUTING.md](./CONTRIBUTING.md) za podrobne smernice
- V opisu PR navedite številke težav, če je primerno

### Proces pregleda

- PR-je pregledajo vzdrževalci in skupnost
- Izobraževalna jasnost je prioriteta
- Primeri kode naj sledijo trenutnim najboljšim praksam
- Prevedene vsebine pregledane za natančnost in kulturno ustreznost

## Sistem prevajanja

### Samodejni prevod

- Uporablja GitHub Actions z delovnim tokom co-op-translator
- Samodejno prevaja v več kot 50 jezikov
- Izvorne datoteke v glavnih mapah
- Prevedene datoteke v mapah `translations/{language-code}/`

### Dodajanje izboljšav ročnih prevodov

1. Poiščite datoteko v `translations/{language-code}/`
2. Naredite izboljšave ob ohranjanju strukture
3. Prepričajte se, da primeri kode ostanejo funkcionalni
4. Testirajte lokalizirano vsebino kvizov

### Metapodatki prevodov

Prevedene datoteke vključujejo glavo metapodatkov:
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

## Odpravljanje napak in težav

### Pogoste težave

**Aplikacija za kvize se ne zažene**:
- Preverite verzijo Node.js (priporočeno v14+)
- Izbrišite `node_modules` in `package-lock.json`, ponovno zaženite `npm install`
- Preverite konflikte portov (privzeto: Vite uporablja port 5173)

**API strežnik se ne zažene**:
- Preverite, ali verzija Node.js ustreza minimumu (node >=10)
- Preverite, ali je port že v uporabi
- Prepričajte se, da so vse odvisnosti nameščene z `npm install`

**Razširitev za brskalnik se ne naloži**:
- Preverite, ali je manifest.json pravilno oblikovan
- Preverite napake v konzoli brskalnika
- Sledite navodilom za namestitev razširitev specifičnih za brskalnik

**Težave s projektom Python klepeta**:
- Prepričajte se, da je nameščen paket OpenAI: `pip install openai`
- Preverite, ali je okoljska spremenljivka GITHUB_TOKEN nastavljena
- Preverite dovoljenja za dostop do GitHub Models

**Docsify ne streže dokumentacije**:
- Namestite docsify-cli globalno: `npm install -g docsify-cli`
- Zaženite iz korenske mape repozitorija
- Preverite, ali `docs/_sidebar.md` obstaja

### Nasveti za razvojno okolje

- Uporabljajte VS Code z razširitvijo Live Server za HTML projekte
- Namestite razširitve ESLint in Prettier za dosledno oblikovanje
- Uporabljajte DevTools brskalnika za odpravljanje napak JavaScript
- Za Vue projekte namestite razširitev Vue DevTools za brskalnik

### Premisleki o zmogljivosti

- Veliko število prevedenih datotek (50+ jezikov) pomeni, da so polni kloni veliki
- Uporabite plitki klon, če delate samo na vsebini: `git clone --depth 1`
- Izključite prevode iz iskanj, ko delate na vsebini v angleščini
- Procesi gradnje so lahko počasni ob prvem zagonu (npm install, Vite build)

## Premisleki o varnosti

### Okoljske spremenljivke

- API ključi nikoli ne smejo biti vključeni v repozitorij
- Uporabljajte `.env` datoteke (že v `.gitignore`)
- Dokumentirajte zahtevane okoljske spremenljivke v README datotekah projektov

### Python projekti

- Uporabljajte virtualna okolja: `python -m venv venv`
- Ohranjajte odvisnosti posodobljene
- GitHub tokeni naj imajo minimalna potrebna dovoljenja

### Dostop do GitHub Models

- Osebni dostopni tokeni (PAT) so potrebni za GitHub Models
- Tokeni naj bodo shranjeni kot okoljske spremenljivke
- Nikoli ne vključujte tokenov ali poverilnic

## Dodatne opombe

### Ciljna publika

- Popolni začetniki v spletnem razvoju
- Študenti in samouki
- Učitelji, ki uporabljajo kurikulum v učilnicah
- Vsebina je zasnovana za dostopnost in postopno gradnjo veščin

### Izobraževalna filozofija

- Pristop učenja, ki temelji na projektih
- Pogosti preverjanja znanja (kvizi)
- Praktične vaje kodiranja
- Primeri uporabe v resničnem svetu
- Osredotočenost na osnove pred uporabo ogrodij

### Vzdrževanje repozitorija

- Aktivna skupnost učencev in prispevajočih
- Redne posodobitve odvisnosti in vsebine
- Težave in razprave spremljajo vzdrževalci
- Posodobitve prevodov samodejne prek GitHub Actions

### Povezani viri

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Viri Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) priporočeno za učence
- Dodatni tečaji: Generativna AI, podatkovna znanost, ML, IoT kurikulumi na voljo

### Delo s specifičnimi projekti

Za podrobna navodila o posameznih projektih glejte README datoteke v:
- `quiz-app/README.md` - Vue 3 aplikacija za kvize
- `7-bank-project/README.md` - Bančna aplikacija z avtentikacijo
- `5-browser-extension/README.md` - Razvoj razširitev za brskalnik
- `6-space-game/README.md` - Razvoj igre na osnovi Canvas
- `9-chat-project/README.md` - Projekt AI klepetalnega asistenta

### Struktura monorepoja

Čeprav ni tradicionalni monorepo, ta repozitorij vsebuje več neodvisnih projektov:
- Vsaka lekcija je samostojna
- Projekti ne delijo odvisnosti
- Delajte na posameznih projektih, ne da bi vplivali na druge
- Klonirajte celoten repozitorij za celotno kurikulum izkušnjo

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna napačna razumevanja ali napačne interpretacije, ki izhajajo iz uporabe tega prevoda.