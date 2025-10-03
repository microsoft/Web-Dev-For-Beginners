<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:41:06+00:00",
  "source_file": "AGENTS.md",
  "language_code": "hr"
}
-->
# AGENTS.md

## Pregled projekta

Ovo je repozitorij obrazovnog kurikuluma za podučavanje osnova web razvoja početnicima. Kurikulum je sveobuhvatan 12-tjedni tečaj koji su razvili Microsoft Cloud Advocates, a sadrži 24 praktične lekcije koje pokrivaju JavaScript, CSS i HTML.

### Ključne komponente

- **Obrazovni sadržaj**: 24 strukturirane lekcije organizirane u module temeljene na projektima
- **Praktični projekti**: Terarij, igra tipkanja, proširenje za preglednik, svemirska igra, bankarska aplikacija, uređivač koda i AI chat asistent
- **Interaktivni kvizovi**: 48 kvizova s po 3 pitanja (procjene prije i poslije lekcije)
- **Podrška za više jezika**: Automatski prijevodi na više od 50 jezika putem GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Obrazovni repozitorij sa strukturom temeljenom na lekcijama
- Svaka mapa lekcije sadrži README, primjere koda i rješenja
- Samostalni projekti u zasebnim direktorijima (quiz-app, razni projekti lekcija)
- Sustav za prijevod pomoću GitHub Actions (co-op-translator)
- Dokumentacija dostupna putem Docsify i kao PDF

## Postavljanje repozitorija

Ovaj repozitorij prvenstveno je namijenjen konzumaciji obrazovnog sadržaja. Za rad na specifičnim projektima:

### Postavljanje glavnog repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Postavljanje aplikacije za kviz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API za bankarski projekt (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Projekti proširenja za preglednik

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Projekti svemirske igre

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Projekt za chat (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Radni tijek razvoja

### Za suradnike na sadržaju

1. **Forkajte repozitorij** na svoj GitHub račun
2. **Klonirajte svoj fork** lokalno
3. **Kreirajte novu granu** za svoje promjene
4. Napravite promjene u sadržaju lekcija ili primjerima koda
5. Testirajte promjene koda u relevantnim direktorijima projekata
6. Pošaljite pull requestove prema smjernicama za doprinos

### Za učenike

1. Forkajte ili klonirajte repozitorij
2. Redom prolazite kroz direktorije lekcija
3. Čitajte README datoteke za svaku lekciju
4. Riješite kvizove prije lekcije na https://ff-quizzes.netlify.app/web/
5. Prođite kroz primjere koda u mapama lekcija
6. Završite zadatke i izazove
7. Riješite kvizove nakon lekcije

### Razvoj uživo

- **Dokumentacija**: Pokrenite `docsify serve` u root direktoriju (port 3000)
- **Aplikacija za kviz**: Pokrenite `npm run dev` u direktoriju quiz-app
- **Projekti**: Koristite VS Code Live Server ekstenziju za HTML projekte
- **API projekti**: Pokrenite `npm start` u odgovarajućim API direktorijima

## Upute za testiranje

### Testiranje aplikacije za kviz

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Testiranje bankarskog API-ja

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Opći pristup testiranju

- Ovo je obrazovni repozitorij bez sveobuhvatnih automatiziranih testova
- Ručno testiranje fokusira se na:
  - Primjeri koda rade bez grešaka
  - Linkovi u dokumentaciji ispravno funkcioniraju
  - Projekti se uspješno grade
  - Primjeri slijede najbolje prakse

### Provjere prije slanja

- Pokrenite `npm run lint` u direktorijima s package.json
- Provjerite valjanost markdown linkova
- Testirajte primjere koda u pregledniku ili Node.js-u
- Provjerite da prijevodi zadržavaju pravilnu strukturu

## Smjernice za stil koda

### JavaScript

- Koristite modernu ES6+ sintaksu
- Slijedite standardne ESLint konfiguracije dostupne u projektima
- Koristite smislena imena varijabli i funkcija za obrazovnu jasnoću
- Dodajte komentare koji objašnjavaju koncepte za učenike
- Formatirajte pomoću Prettier gdje je konfigurirano

### HTML/CSS

- Semantički HTML5 elementi
- Principi responzivnog dizajna
- Jasne konvencije imenovanja klasa
- Komentari koji objašnjavaju CSS tehnike za učenike

### Python

- PEP 8 smjernice za stil
- Jasni, obrazovni primjeri koda
- Tipovi podataka gdje su korisni za učenje

### Markdown dokumentacija

- Jasna hijerarhija naslova
- Blokovi koda s specifikacijom jezika
- Linkovi na dodatne resurse
- Snimke zaslona i slike u direktorijima `images/`
- Alt tekst za slike radi pristupačnosti

### Organizacija datoteka

- Lekcije numerirane redoslijedom (1-getting-started-lessons, 2-js-basics, itd.)
- Svaki projekt ima `solution/` i često `start/` ili `your-work/` direktorije
- Slike pohranjene u lekcijama specifičnim `images/` mapama
- Prijevodi u strukturi `translations/{language-code}/`

## Izgradnja i implementacija

### Implementacija aplikacije za kviz (Azure Static Web Apps)

Aplikacija za kviz konfigurirana je za implementaciju na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Lokacija izlaza**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Dokumentacija putem Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Izgradnje specifične za projekt

Svaki direktorij projekta može imati vlastiti proces izgradnje:
- Vue projekti: `npm run build` kreira produkcijske pakete
- Statički projekti: Nema koraka izgradnje, datoteke se poslužuju direktno

## Smjernice za pull requestove

### Format naslova

Koristite jasne, opisne naslove koji ukazuju na područje promjene:
- `[Quiz-app] Dodaj novi kviz za lekciju X`
- `[Lesson-3] Ispravi tipfeler u projektu terarij`
- `[Translation] Dodaj prijevod na španjolski za lekciju 5`
- `[Docs] Ažuriraj upute za postavljanje`

### Potrebne provjere

Prije slanja PR-a:

1. **Kvaliteta koda**:
   - Pokrenite `npm run lint` u zahvaćenim direktorijima projekta
   - Ispravite sve greške i upozorenja lintinga

2. **Provjera izgradnje**:
   - Pokrenite `npm run build` ako je primjenjivo
   - Osigurajte da nema grešaka u izgradnji

3. **Validacija linkova**:
   - Testirajte sve markdown linkove
   - Provjerite da reference na slike funkcioniraju

4. **Pregled sadržaja**:
   - Provjerite pravopis i gramatiku
   - Osigurajte da su primjeri koda ispravni i obrazovni
   - Provjerite da prijevodi zadržavaju izvorno značenje

### Zahtjevi za doprinos

- Pristanite na Microsoft CLA (automatska provjera pri prvom PR-u)
- Slijedite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pogledajte [CONTRIBUTING.md](./CONTRIBUTING.md) za detaljne smjernice
- Referencirajte brojeve problema u opisu PR-a ako je primjenjivo

### Proces pregleda

- PR-ove pregledavaju održavatelji i zajednica
- Prioritet je obrazovna jasnoća
- Primjeri koda trebaju slijediti trenutne najbolje prakse
- Prijevodi se pregledavaju radi točnosti i kulturne prikladnosti

## Sustav za prijevod

### Automatski prijevod

- Koristi GitHub Actions s co-op-translator workflowom
- Automatski prevodi na više od 50 jezika
- Izvorne datoteke u glavnim direktorijima
- Prevedene datoteke u `translations/{language-code}/` direktorijima

### Dodavanje poboljšanja ručnog prijevoda

1. Pronađite datoteku u `translations/{language-code}/`
2. Napravite poboljšanja uz očuvanje strukture
3. Osigurajte da primjeri koda ostanu funkcionalni
4. Testirajte lokalizirani sadržaj kviza

### Metapodaci prijevoda

Prevedene datoteke uključuju zaglavlje metapodataka:
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

## Debugging i rješavanje problema

### Uobičajeni problemi

**Aplikacija za kviz se ne pokreće**:
- Provjerite verziju Node.js (preporučeno v14+)
- Obrišite `node_modules` i `package-lock.json`, ponovno pokrenite `npm install`
- Provjerite konflikte portova (zadano: Vite koristi port 5173)

**API server se ne pokreće**:
- Provjerite da verzija Node.js zadovoljava minimum (node >=10)
- Provjerite je li port već u upotrebi
- Osigurajte da su sve ovisnosti instalirane s `npm install`

**Proširenje za preglednik se ne učitava**:
- Provjerite je li manifest.json pravilno formatiran
- Provjerite konzolu preglednika za greške
- Slijedite specifične upute za instalaciju proširenja u pregledniku

**Problemi s Python chat projektom**:
- Osigurajte da je OpenAI paket instaliran: `pip install openai`
- Provjerite je li GITHUB_TOKEN varijabla okruženja postavljena
- Provjerite dozvole za pristup GitHub Models

**Docsify ne poslužuje dokumentaciju**:
- Instalirajte docsify-cli globalno: `npm install -g docsify-cli`
- Pokrenite iz root direktorija repozitorija
- Provjerite da `docs/_sidebar.md` postoji

### Savjeti za razvojno okruženje

- Koristite VS Code s Live Server ekstenzijom za HTML projekte
- Instalirajte ESLint i Prettier ekstenzije za dosljedno formatiranje
- Koristite DevTools preglednika za debugiranje JavaScripta
- Za Vue projekte instalirajte Vue DevTools ekstenziju preglednika

### Razmatranja o performansama

- Velik broj prevedenih datoteka (50+ jezika) znači da su puni klonovi veliki
- Koristite plitki klon ako radite samo na sadržaju: `git clone --depth 1`
- Isključite prijevode iz pretraživanja kada radite na sadržaju na engleskom
- Procesi izgradnje mogu biti spori pri prvom pokretanju (npm install, Vite build)

## Sigurnosna razmatranja

### Varijable okruženja

- API ključevi nikada ne smiju biti predani u repozitorij
- Koristite `.env` datoteke (već u `.gitignore`)
- Dokumentirajte potrebne varijable okruženja u README datotekama projekta

### Python projekti

- Koristite virtualna okruženja: `python -m venv venv`
- Održavajte ovisnosti ažuriranima
- GitHub tokeni trebaju imati minimalne potrebne dozvole

### Pristup GitHub Models

- Potrebni su Personal Access Tokens (PAT) za GitHub Models
- Tokeni trebaju biti pohranjeni kao varijable okruženja
- Nikada ne predajte tokene ili vjerodajnice

## Dodatne napomene

### Ciljana publika

- Potpuni početnici u web razvoju
- Studenti i samouki učenici
- Nastavnici koji koriste kurikulum u učionicama
- Sadržaj je dizajniran za pristupačnost i postupno razvijanje vještina

### Obrazovna filozofija

- Pristup učenju temeljen na projektima
- Česte provjere znanja (kvizovi)
- Praktične vježbe kodiranja
- Primjeri primjene u stvarnom svijetu
- Fokus na osnovama prije korištenja okvira

### Održavanje repozitorija

- Aktivna zajednica učenika i suradnika
- Redovita ažuriranja ovisnosti i sadržaja
- Problemi i rasprave prate održavatelji
- Ažuriranja prijevoda automatizirana putem GitHub Actions

### Povezani resursi

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Resursi za studente](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) preporučuje se učenicima
- Dodatni tečajevi: Generativni AI, Data Science, ML, IoT kurikulumi dostupni

### Rad na specifičnim projektima

Za detaljne upute o pojedinim projektima, pogledajte README datoteke u:
- `quiz-app/README.md` - Vue 3 aplikacija za kviz
- `7-bank-project/README.md` - Bankarska aplikacija s autentifikacijom
- `5-browser-extension/README.md` - Razvoj proširenja za preglednik
- `6-space-game/README.md` - Razvoj igre temeljen na Canvasu
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Struktura monorepozitorija

Iako nije tradicionalni monorepozitorij, ovaj repozitorij sadrži više neovisnih projekata:
- Svaka lekcija je samostalna
- Projekti ne dijele ovisnosti
- Radite na pojedinim projektima bez utjecaja na druge
- Klonirajte cijeli repozitorij za cjelokupno iskustvo kurikuluma

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja mogu proizaći iz korištenja ovog prijevoda.