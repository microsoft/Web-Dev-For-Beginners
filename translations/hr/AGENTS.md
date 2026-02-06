# AGENTS.md

## Pregled projekta

Ovo je repozitorij kurikuluma za poučavanje osnova web razvoja početnicima. Kurikulum je sveobuhvatan tečaj u trajanju od 12 tjedana koji su razvili Microsoft Cloud Advocates, a sadrži 24 praktične lekcije koje pokrivaju JavaScript, CSS i HTML.

### Ključne komponente

- **Obrazovni sadržaj**: 24 strukturirane lekcije organizirane u module zasnovane na projektima
- **Praktični projekti**: Terrarij, Igra tipkanja, Proširenje preglednika, Igra svemira, Bankarska aplikacija, Uređivač koda i AI Chat pomoćnik
- **Interaktivni kvizovi**: 48 kvizova sa po 3 pitanja svaki (procjene prije i poslije lekcija)
- **Podrška za više jezika**: Automatski prijevodi za više od 50 jezika putem GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Obrazovni repozitorij sa strukturom temeljnom na lekcijama
- Svaka mapa lekcije sadrži README, primjere koda i rješenja
- Samostalni projekti u posebnim direktorijima (quiz-app, različiti projekti lekcija)
- Sustav prijevoda pomoću GitHub Actions (co-op-translator)
- Dokumentacija se poslužuje putem Docsify te je dostupna i kao PDF

## Komande za postavljanje

Ovaj repozitorij je prvenstveno za konzumaciju obrazovnog sadržaja. Za rad s određenim projektima:

### Postavljanje glavnog repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Postavljanje Quiz Aplikacije (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Pokreni razvojni poslužitelj
npm run build      # Izgradi za produkciju
npm run lint       # Pokreni ESLint
```

### Bankarski projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pokreni API poslužitelj
npm run lint       # Pokreni ESLint
npm run format     # Formatiraj s Prettierom
```

### Projekti za Proširenje Pretraživača

```bash
cd 5-browser-extension/solution
npm install
# Slijedite upute za učitavanje ekstenzija specifične za preglednik
```

### Projekti igre svemira

```bash
cd 6-space-game/solution
npm install
# Otvorite index.html u pregledniku ili koristite Live Server
```

### Chat projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Postavite varijablu okoline GITHUB_TOKEN
python api.py
```

## Radni proces razvoja

### Za suradnike na sadržaju

1. **Forkajte repozitorij** na svoj GitHub račun
2. **Kloneajte vaš fork** lokalno
3. **Kreirajte novu granu** za vaše promjene
4. Radite izmjene u sadržaju lekcija ili primjerima koda
5. Testirajte bilo koje promjene koda u relevantnim direktorijima projekata
6. Pošaljite pull requestove prateći pravila doprinosa

### Za učenike

1. Forkajte ili klonirajte repozitorij
2. Krenite redom kroz direktorije lekcija
3. Čitajte README datoteke za svaku lekciju
4. Odgovarajte na kvizove prije lekcija na https://ff-quizzes.netlify.app/web/
5. Radite kroz primjere koda u mapama lekcija
6. Završite zadatke i izazove
7. Uradite kvizove nakon lekcija

### Živi razvoj

- **Dokumentacija**: Pokrenite `docsify serve` u root folderu (port 3000)
- **Quiz aplikacija**: Pokrenite `npm run dev` u quiz-app direktoriju
- **Projekti**: Koristite VS Code Live Server ekstenziju za HTML projekte
- **API projekti**: Pokrenite `npm start` u odgovarajućim API direktorijima

## Upute za testiranje

### Testiranje Quiz aplikacije

```bash
cd quiz-app
npm run lint       # Provjerite probleme sa stilom koda
npm run build      # Provjerite da je izgradnja uspješna
```

### Testiranje Bank API-ja

```bash
cd 7-bank-project/api
npm run lint       # Provjerite probleme sa stilom koda
node server.js     # Provjerite pokreće li se poslužitelj bez grešaka
```

### Općeniti pristup testiranju

- Ovo je obrazovni repozitorij bez opsežnih automatiziranih testova
- Ručno testiranje fokusira se na:
  - Primjere koda koji se izvršavaju bez grešaka
  - Linkovi u dokumentaciji rade ispravno
  - Projekti se uspješno kompajliraju
  - Primjeri slijede najbolje prakse

### Provjere prije slanja

- Pokrenite `npm run lint` u direktorijima s package.json
- Provjerite jesu li markdown linkovi valjani
- Testirajte primjere koda u pregledniku ili Node.js-u
- Provjerite jesu li prijevodi pravilno strukturirani

## Smjernice za stil koda

### JavaScript

- Koristite modernu ES6+ sintaksu
- Slijedite standardne ESLint postavke dostupne u projektima
- Koristite smisleni nazive varijabli i funkcija radi boljeg razumijevanja
- Dodajte komentare koji objašnjavaju koncepte za učenike
- Formatirajte kod koristeći Prettier gdje je konfigurirano

### HTML/CSS

- Semantički HTML5 elementi
- Principi responzivnog dizajna
- Jasne konvencije imenovanja klasa
- Komentari koji objašnjavaju CSS tehnike za učenike

### Python

- Pravila stila po PEP 8
- Jasni, obrazovni primjeri koda
- Tipizacije tamo gdje pomažu učenju

### Markdown dokumentacija

- Jasna hijerarhija naslova
- Kodni blokovi s označenim jezikom
- Linkovi na dodatne resurse
- Sličice i slike u `images/` direktorijima
- Alt tekst za slike radi pristupačnosti

### Organizacija datoteka

- Lekcije numerirane po redu (1-getting-started-lessons, 2-js-basics itd.)
- Svaki projekt ima `solution/` i često `start/` ili `your-work/` direktorije
- Slike pohranjene u folderima `images/` specifičnim za lekcije
- Prijevodi u strukturi `translations/{language-code}/`

## Izrada i postavljanje

### Postavljanje Quiz aplikacije (Azure Static Web Apps)

Quiz aplikacija je konfigurirana za postavljanje na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Stvara mapu dist/
# Postavlja preko GitHub Actions tijeka rada prilikom guranja na main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Izlazna lokacija**: `dist`
- **Radni tijek**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Instalirajte docsify-to-pdf
npm run convert               # Generiraj PDF iz dokumenata
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Instalirajte Docsify globalno
docsify serve                 # Poslužite na localhost:3000
```

### Izrade specifične za projekte

Svaki direktorij projekta može imati vlastiti proces izrade:
- Vue projekti: `npm run build` generira produkcijske pakete
- Statički projekti: bez koraka izrade, servirati datoteke direktno

## Pravila za pull requestove

### Format naslova

Koristite jasne, opisne naslove koji označavaju područje promjene:
- `[Quiz-app] Dodaj novi kviz za lekciju X`
- `[Lesson-3] Popravi tipfeler u projektu terrarij`
- `[Translation] Dodaj španjolski prijevod za lekciju 5`
- `[Docs] Ažuriraj upute za postavljanje`

### Potrebne provjere

Prije slanja PR-a:

1. **Kvaliteta koda**:
   - Pokrenite `npm run lint` u pogođenim direktorijima projekata
   - Ispravite sve lint greške i upozorenja

2. **Provjera izrade**:
   - Pokrenite `npm run build` ako je primjenjivo
   - Provjerite da nema grešaka pri izradi

3. **Provjera linkova**:
   - Testirajte sve markdown linkove
   - Provjerite da referencije na slike rade

4. **Pregled sadržaja**:
   - Provjerite pravopis i gramatiku
   - Osigurajte da su primjeri koda ispravni i obrazovni
   - Provjerite da prijevodi zadržavaju originalno značenje

### Zahtjevi za doprinos

- Prihvatite Microsoft CLA (automatska provjera pri prvom PR-u)
- Slijedite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pogledajte [CONTRIBUTING.md](./CONTRIBUTING.md) za detaljne smjernice
- U PR opisu navodite brojeve povezanih problema ako ih ima

### Proces pregleda

- PR-ove pregledavaju održavatelji i zajednica
- Prioritet je obrazovna jasnoća
- Primjeri koda trebaju slijediti aktualne najbolje prakse
- Prijevodi se pregledavaju radi točnosti i prikladnosti

## Sustav prijevoda

### Automatski prijevod

- Koristi GitHub Actions s co-op-translator workflowom
- Automatski prevodi na više od 50 jezika
- Izvorne datoteke u glavnim direktorijima
- Prevedene datoteke u `translations/{language-code}/` direktorijima

### Dodavanje ručnih poboljšanja prijevoda

1. Pronađite datoteku u `translations/{language-code}/`
2. Unesite poboljšanja uz očuvanje strukture
3. Pazite da primjeri koda ostanu funkcionalni
4. Testirajte lokalizirani sadržaj kvizova

### Meta podaci prijevoda

Prevedene datoteke sadrže zaglavlje meta podataka:
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

**Quiz aplikacija ne može startati**:
- Provjerite verziju Node.js (preporučeno v14+)
- Izbrišite `node_modules` i `package-lock.json`, zatim pokrenite `npm install` ponovno
- Provjerite da nema sukoba portova (zadani port: Vite koristi 5173)

**API server ne starta**:
- Provjerite da Node.js zadovoljava minimalnu verziju (node >=10)
- Provjerite je li port zauzet
- Provjerite jesu li sve ovisnosti instalirane putem `npm install`

**Proširenje preglednika se ne učitava**:
- Provjerite je li manifest.json pravilno formatiran
- Provjerite konzolu preglednika za greške
- Slijedite upute za instalaciju prema pregledniku

**Problemi s Python chat projektom**:
- Provjerite da je OpenAI paket instaliran: `pip install openai`
- Provjerite da je varijabla okruženja GITHUB_TOKEN postavljena
- Provjerite pristupe za GitHub modele

**Docsify ne servisira dokumente**:
- Instalirajte docsify-cli globalno: `npm install -g docsify-cli`
- Pokrenite iz root direktorija repozitorija
- Provjerite da `docs/_sidebar.md` postoji

### Savjeti za razvojno okruženje

- Koristite VS Code s Live Server ekstenzijom za HTML projekte
- Instalirajte ESLint i Prettier ekstenzije za dosljedno formatiranje
- Koristite DevTools u pregledniku za otklanjanje JavaScript pogrešaka
- Za Vue projekte instalirajte Vue DevTools ekstenziju za preglednik

### Razmatranja performansi

- Veliki broj prevedenih datoteka (50+ jezika) znače velike kopije repozitorija
- Koristite plitki clone ako radite samo na sadržaju: `git clone --depth 1`
- Isključite prijevode iz pretraživanja kada radite na engleskom sadržaju
- Procesi izrade mogu biti spori pri prvom pokretanju (npm install, Vite build)

## Sigurnosna razmatranja

### Varijable okruženja

- API ključevi ne smiju biti u repozitoriju
- Koristite `.env` datoteke (već ih `.gitignore` ignorira)
- Dokumentirajte potrebne varijable okruženja u README datotekama projekata

### Python projekti

- Koristite virtualna okruženja: `python -m venv venv`
- Održavajte ovisnosti ažuriranima
- GitHub tokeni trebaju imati minimalne potrebne ovlasti

### Pristup GitHub modelima

- Potrebni su Personal Access Tokeni (PAT) za GitHub modele
- Tokeni treba pohraniti kao varijable okruženja
- Nikada nemojte committati tokene ili vjerodajnice

## Dodatne bilješke

### Ciljana publika

- Potpuni početnici u web razvoju
- Učenici i samouki
- Nastavnici koji koriste kurikulum u učionicama
- Sadržaj je dizajniran za pristupačnost i postupno stjecanje vještina

### Pedagoška filozofija

- Pristup učenja kroz projekte
- Česte provjere znanja (kvizovi)
- Praktične vježbe kodiranja
- Primjeri za stvarne primjene
- Fokus na temelje prije okvira

### Održavanje repozitorija

- Aktivna zajednica učenika i suradnika
- Redovita ažuriranja ovisnosti i sadržaja
- Praćenje problema i diskusija od strane održavatelja
- Ažuriranja prijevoda automatizirana preko GitHub Actions

### Povezani resursi

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub resursi](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) preporučen za učenike
- Dodatni tečajevi: Generativni AI, Data Science, ML, IoT kurikulumi dostupni

### Rad s određenim projektima

Za detaljne upute za pojedinačne projekte, pogledajte README datoteke u:
- `quiz-app/README.md` - Vue 3 quiz aplikacija
- `7-bank-project/README.md` - Bankarska aplikacija s autentifikacijom
- `5-browser-extension/README.md` - Razvoj proširenja za preglednik
- `6-space-game/README.md` - Razvoj igre zasnovane na Canvasu
- `9-chat-project/README.md` - AI chat pomoćnik projekt

### Struktura monorepa

Iako nije tradicionalni monorepo, ovaj repozitorij sadrži više nezavisnih projekata:
- Svaka lekcija je samostalna
- Projekti ne dijele ovisnosti
- Radite na pojedinačnim projektima bez utjecaja na ostale
- Klonirajte cijeli repozitorij za cjelokupno iskustvo kurikuluma

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Odricanje od odgovornosti**:
Ovaj je dokument preveden korištenjem AI prevoditeljske usluge [Co-op Translator](https://github.com/Azure/co-op-translator). Iako težimo točnosti, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na njegovom izvornom jeziku treba se smatrati autoritativnim izvorom. Za kritične informacije preporučuje se profesionalni ljudski prijevod. Ne snosimo odgovornost za bilo kakva nesporazumevanja ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->