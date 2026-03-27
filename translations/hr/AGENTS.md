# AGENTS.md

## Pregled projekta

Ovo je edukativni repozitorij za podučavanje temelja web razvoja početnicima. Kurikulum je obuhvatan tečaj u trajanju od 12 tjedana koji je razvijen od strane Microsoft Cloud Advocatesa, a sadrži 24 praktične lekcije pokrivajući JavaScript, CSS i HTML.

### Ključne komponente

- **Edukativni sadržaj**: 24 strukturirane lekcije organizirane u module temeljene na projektima  
- **Praktični projekti**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor i AI Chat Assistant  
- **Interaktivni kvizovi**: 48 kvizova sa po 3 pitanja (prije/poslije lekcije)  
- **Podrška za više jezika**: Automatski prijevodi za 50+ jezika preko GitHub Actions  
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Edukativni repozitorij s organizacijom po lekcijama  
- Svaka mapa lekcije sadrži README, primjere koda i rješenja  
- Samostalni projekti u zasebnim direktorijima (quiz-app, razni projekti lekcija)  
- Sustav za prijevod koristeći GitHub Actions (co-op-translator)  
- Dokumentacija dostupna preko Docsify i kao PDF

## Komande za postavljanje

Ovaj repozitorij je prvenstveno namijenjen za konzumaciju edukativnog sadržaja. Za rad na specifičnim projektima:

### Glavno postavljanje repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Postavljanje Quiz app (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Pokreni razvojni server
npm run build      # Izgradi za produkciju
npm run lint       # Pokreni ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pokreni API poslužitelj
npm run lint       # Pokreni ESLint
npm run format     # Formatiraj s Prettierom
```

### Projekti browser ekstenzija

```bash
cd 5-browser-extension/solution
npm install
# Slijedite upute za učitavanje proširenja specifične za preglednik
```

### Projekti Space game

```bash
cd 6-space-game/solution
npm install
# Otvorite index.html u pregledniku ili koristite Live Server
```

### Chat projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Postavite varijablu okoline GITHUB_TOKEN
python api.py
```

## Razvojni tijek rada

### Za suradnike na sadržaju

1. **Forkajte repozitorij** na svoj GitHub račun  
2. **Klonirajte svoj fork** lokalno  
3. **Napravite novu granu** za svoje promjene  
4. Izvršite izmjene u sadržaju lekcija ili primjerima koda  
5. Testirajte promjene koda u relevantnim direktorijima projekata  
6. Podnesite pull request slijedeći smjernice za doprinos

### Za učenike

1. Forkajte ili klonirajte repozitorij  
2. Krenite redom kroz mape lekcija  
3. Pročitajte README datoteke za svaku lekciju  
4. Riješite kvizove prije lekcije na https://ff-quizzes.netlify.app/web/  
5. Prođite kroz primjere koda u mapama lekcija  
6. Završite zadatke i izazove  
7. Riješite kvizove nakon lekcije

### Razvoj u stvarnom vremenu

- **Dokumentacija**: Pokrenite `docsify serve` u root direktoriju (port 3000)  
- **Quiz App**: Pokrenite `npm run dev` u quiz-app direktoriju  
- **Projekti**: Koristite VS Code Live Server ekstenziju za HTML projekte  
- **API projekti**: Pokrenite `npm start` u odgovarajućim API direktorijima

## Upute za testiranje

### Testiranje Quiz app

```bash
cd quiz-app
npm run lint       # Provjerite ima li problema sa stilom koda
npm run build      # Provjerite je li izgradnja uspješna
```

### Testiranje Bank API

```bash
cd 7-bank-project/api
npm run lint       # Provjeri probleme sa stilom koda
node server.js     # Provjeri da li se server pokreće bez grešaka
```

### Opći pristup testiranju

- Ovo je edukativni repozitorij bez potpune automatizirane testne pokrivenosti  
- Ručno testiranje fokusira se na:  
  - Primjere koda da se izvršavaju bez grešaka  
  - Da linkovi u dokumentaciji rade ispravno  
  - Da se projekti mogu uspješno buildati  
  - Primjere koji slijede najbolje prakse

### Provjere prije podnošenja

- Pokrenite `npm run lint` u direktorijima s package.json  
- Provjerite valjanost markdown linkova  
- Testirajte primjere koda u pregledniku ili Node.js  
- Provjerite održavanje strukture u prijevodima

## Smjernice za stil kodiranja

### JavaScript

- Koristite modernu ES6+ sintaksu  
- Slijedite standardne ESLint konfiguracije iz projekata  
- Koristite smisleno imenovanje varijabli i funkcija radi bolje edukativne jasnoće  
- Dodajte komentare koji objašnjavaju koncepte za učenike  
- Formatirajte kod koristeći Prettier gdje je konfigurirano

### HTML/CSS

- Semantički HTML5 elementi  
- Principi responzivnog dizajna  
- Jasne konvencije imenovanja klasa  
- Komentari koji objašnjavaju CSS tehnike za učenike

### Python

- Smjernice za stil PEP 8  
- Jasni, edukativni primjeri koda  
- Tipizacija tamo gdje je korisna za učenje

### Markdown dokumentacija

- Jasna hijerarhija naslova  
- Blokovi koda s označenim jezikom  
- Linkovi na dodatne izvore  
- Screenshoti i slike u mapama `images/`  
- Alt tekst za slike radi pristupačnosti

### Organizacija datoteka

- Lekcije numerirane sekvencijalno (1-getting-started-lessons, 2-js-basics, itd.)  
- Svaki projekt ima mape `solution/` i često `start/` ili `your-work/`  
- Slike pohranjene u lekcijski specifičnim mapama `images/`  
- Prijevodi u strukturi `translations/{language-code}/`

## Izrada i deploy

### Deploy Quiz app (Azure Static Web Apps)

quiz-app je podešen za Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Stvara mapu dist/
# Postavlja putem GitHub Actions tijeka rada pri pushanju na main
```

Konfiguracija Azure Static Web Apps:  
- **Lokacija aplikacije**: `/quiz-app`  
- **Lokacija izlaza**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Instalirajte docsify-to-pdf
npm run convert               # Generiraj PDF iz docsa
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Instalirajte Docsify globalno
docsify serve                 # Poslužite na localhost:3000
```

### Build specifični za projekte

Svaki direktorij projekta može imati svoj build proces:  
- Vue projekti: `npm run build` kreira produkcijske bundleove  
- Statički projekti: Nema build koraka, služenje datoteka direktno

## Smjernice za pull requestove

### Format naslova

Koristite jasne, opisne naslove koji označavaju područje izmjene:  
- `[Quiz-app] Dodaj novi kviz za lekciju X`  
- `[Lesson-3] Ispravi tipfelere u terrarium projektu`  
- `[Translation] Dodaj španjolski prijevod za lekciju 5`  
- `[Docs] Ažuriraj upute za postavljanje`

### Potrebne provjere

Prije podnošenja PR-a:

1. **Kvaliteta koda**:  
   - Pokrenite `npm run lint` u pogođenim projekt direktorijima  
   - Ispravite sve lint greške i upozorenja  

2. **Provjera builda**:  
   - Pokrenite `npm run build` ako je primjenjivo  
   - Osigurajte da nema build grešaka  

3. **Provjera linkova**:  
   - Testirajte sve markdown linkove  
   - Provjerite da reference na slike rade  

4. **Pregled sadržaja**:  
   - Provjerite pravopis i gramatiku  
   - Potvrdite da su primjeri koda točni i edukativni  
   - Osigurajte da prijevodi zadržavaju izvornu poruku

### Zahtjevi za doprinos

- Prihvatite Microsoft CLA (automatska provjera pri prvom PR-u)  
- Slijedite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Pogledajte [CONTRIBUTING.md](./CONTRIBUTING.md) za detaljne smjernice  
- Referencirajte brojeve issue-a u opisu PR-a ako je primjenjivo

### Proces pregleda

- PR-ove pregledavaju maintaineri i zajednica  
- Prioritet je edukativna jasnoća  
- Primjeri koda trebaju slijediti aktualne najbolje prakse  
- Prijevodi se pregledavaju radi točnosti i prikladnosti kulture

## Sustav prijevoda

### Automatski prijevod

- Koristi GitHub Actions s co-op-translator workflowom  
- Automatski prevodi na 50+ jezika  
- Izvorne datoteke u glavnim direktorijima  
- Prevedene datoteke u mapama `translations/{language-code}/`

### Dodavanje ručnih poboljšanja prijevoda

1. Pronađite datoteku u `translations/{language-code}/`  
2. Napravite poboljšanja dok čuvate strukturu  
3. Osigurajte da primjeri koda ostaju funkcionalni  
4. Testirajte lokalizirani kviz sadržaj

### Metapodaci prijevoda

Prevedene datoteke sadrže zaglavlje metapodataka:  
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

## Otklanjanje pogrešaka i rješavanje problema

### Uobičajeni problemi

**Quiz app se ne pokreće**:  
- Provjerite verziju Node.js (preporučeno v14+)  
- Izbrišite `node_modules` i `package-lock.json`, zatim pokrenite `npm install` ponovno  
- Provjerite konflikt porta (default: Vite koristi port 5173)  

**API server se ne pokreće**:  
- Provjerite je li verzija Node.js minimalno node >=10  
- Provjerite koristi li neko drugi već port  
- Osigurajte da su sve ovisnosti instalirane s `npm install`  

**Browser ekstenzija se ne učitava**:  
- Provjerite da je manifest.json pravilno formatiran  
- Provjerite konzolu preglednika radi grešaka  
- Slijedite upute za instalaciju specifične za preglednik

**Problemi s Python chat projektom**:  
- Provjerite je li instaliran OpenAI paket: `pip install openai`  
- Provjerite je li varijabla okoline GITHUB_TOKEN postavljena  
- Provjerite pristupni token za GitHub modele

**Docsify ne prikazuje dokumentaciju**:  
- Instalirajte docsify-cli globalno: `npm install -g docsify-cli`  
- Pokrenite iz root direktorija repozitorija  
- Provjerite postoji li `docs/_sidebar.md`

### Savjeti za razvojno okruženje

- Koristite VS Code s Live Server ekstenzijom za HTML projekte  
- Instalirajte ESLint i Prettier ekstenzije za konzistentno formatiranje  
- Koristite browser DevTools za debugiranje JavaScript-a  
- Za Vue projekte instalirajte Vue DevTools ekstenziju u preglednik

### Razmatranja performansi

- Velik broj prevedenih datoteka (50+ jezika) znači velike full clone-ove  
- Koristite shallow clone ako radite samo na sadržaju: `git clone --depth 1`  
- Isključite prijevode iz pretraživanja kada radite na engleskom sadržaju  
- Build procesi mogu biti spori pri prvom pokretanju (npm install, Vite build)

## Sigurnosne napomene

### Okolišne varijable

- API ključevi nikada ne smiju biti komitirani u repozitorij  
- Koristite `.env` datoteke (već u `.gitignore`)  
- Dokumentirajte potrebne okolišne varijable u README-ima projekata

### Python projekti

- Koristite virtualna okruženja: `python -m venv venv`  
- Održavajte ovisnosti ažurnima  
- GitHub tokeni trebaju imati minimalna potrebna dopuštenja

### Pristup GitHub modelima

- Potrebni su Personal Access Tokens (PAT) za GitHub modele  
- Tokene treba čuvati kao okolišne varijable  
- Nikada nemojte komitirati tokene ili pristupne podatke

## Dodatne napomene

### Ciljana publika

- Potpuni početnici u web razvoju  
- Studenti i samouki učenici  
- Nastavnici koji koriste kurikulum u učionicama  
- Sadržaj je dizajniran za pristupačnost i postupno usvajanje vještina

### Edukativna filozofija

- Pristup temeljen na projektima  
- Česti provjeri znanja (kvizovi)  
- Praktične vježbe kodiranja  
- Primjeri primjene u stvarnom svijetu  
- Fokus na temelje prije frameworka

### Održavanje repozitorija

- Aktivna zajednica učenika i suradnika  
- Redovita ažuriranja ovisnosti i sadržaja  
- Pratiti issue-e i diskusije maintaineri  
- Ažuriranja prijevoda automatizirana preko GitHub Actions

### Povezani resursi

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)  
- [Student Hub resursi](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) preporučen za učenike  
- Dodatni tečajevi: Generativni AI, Data Science, ML, IoT kurikulumi dostupni

### Rad sa specifičnim projektima

Za detaljne upute o pojedinačnim projektima, pogledajte README datoteke u:  
- `quiz-app/README.md` - Vue 3 aplikacija za kviz  
- `7-bank-project/README.md` - Bankarska aplikacija s autentifikacijom  
- `5-browser-extension/README.md` - Razvoj browser ekstenzije  
- `6-space-game/README.md` - Razvoj igre u canvasu  
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Struktura Monorepo-a

Iako nije tradicionalni monorepo, ovaj repozitorij sadrži više neovisnih projekata:  
- Svaka lekcija je samostalna cjelina  
- Projekti ne dijele ovisnosti  
- Radite pojedinačno na projektima bez utjecaja na druge  
- Klonirajte cijeli repozitorij za potpuni kurikulum iskustvo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Odricanje**:
Ovaj dokument preveden je pomoću AI prevoditeljskog servisa [Co-op Translator](https://github.com/Azure/co-op-translator). Iako težimo točnosti, molimo imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku smatra se službenim izvorom. Za kritične informacije preporučuje se profesionalni ljudski prijevod. Ne snosimo odgovornost za bilo kakve nesporazume ili pogrešna tumačenja proizašla iz korištenja ovog prijevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->