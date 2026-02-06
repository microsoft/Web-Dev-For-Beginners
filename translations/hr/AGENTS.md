# AGENTS.md

## Pregled projekta

Ovo je repozitorij edukativnog kurikuluma za podučavanje osnovama web razvoja početnicima. Kurikulum je sveobuhvatan tečaj u trajanju od 12 tjedana kojeg su razvili Microsoft Cloud Advocates, a sadrži 24 praktične lekcije koje pokrivaju JavaScript, CSS i HTML.

### Ključne komponente

- **Edukativni sadržaj**: 24 strukturirane lekcije organizirane u module temeljene na projektima
- **Praktični projekti**: Terrarij, Igra tipkanja, Proširenje za preglednik, Svemirska igra, Bankarska aplikacija, Uređivač koda i AI pomoćnik za chat
- **Interaktivni kvizovi**: 48 kvizova sa po 3 pitanja (procjene prije/nakon lekcija)
- **Podrška za više jezika**: Automatski prijevodi za 50+ jezika putem GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Edukativni repozitorij sa strukturom zasnovanom na lekcijama
- Svaka mapa lekcije sadrži README, primjere koda i rješenja
- Samostalni projekti u posebnim direktorijima (quiz-app, različiti projekti lekcija)
- Sustav prijevoda koristeći GitHub Actions (co-op-translator)
- Dokumentacija poslužena putem Docsify i dostupna kao PDF

## Komande za postavljanje

Ovaj repozitorij je prvenstveno za konzumaciju edukativnog sadržaja. Za rad sa specifičnim projektima:

### Postavljanje glavnog repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Postavljanje Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Pokreni razvojni poslužitelj
npm run build      # Izgradi za produkciju
npm run lint       # Pokreni ESLint
```

### Bankarski API projekt (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pokreni API poslužitelj
npm run lint       # Pokreni ESLint
npm run format     # Formatiraj s Prettierom
```

### Projekti proširenja za preglednik

```bash
cd 5-browser-extension/solution
npm install
# Slijedite upute za učitavanje proširenja specifične za preglednik
```

### Projekti svemirske igre

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

## Radni tijek razvoja

### Za suradnike na sadržaju

1. **Napravite fork repozitorija** na svoj GitHub račun
2. **Klonirajte fork** lokalno
3. **Kreirajte novu granu** za vaše izmjene
4. Izmijenite sadržaj lekcija ili primjere koda
5. Testirajte promjene koda u relevantnim mapama projekata
6. Pošaljite pull request prateći smjernice za doprinos

### Za učenike

1. Napravite fork ili klonirajte repozitorij
2. Prođite lekcije redom u direktorijima
3. Pročitajte README datoteke za svaku lekciju
4. Riješite pre-lesson kvizove na https://ff-quizzes.netlify.app/web/
5. Prođite kroz primjere koda u mapama lekcija
6. Završite zadatke i izazove
7. Riješite post-lesson kvizove

### Live razvoj

- **Dokumentacija**: Pokrenite `docsify serve` u korijenu (port 3000)
- **Quiz App**: Pokrenite `npm run dev` unutar direktorija quiz-app
- **Projekti**: Koristite VS Code Live Server ekstenziju za HTML projekte
- **API projekti**: Pokrenite `npm start` u odgovarajućim API direktorijima

## Upute za testiranje

### Testiranje Quiz App

```bash
cd quiz-app
npm run lint       # Provjeri probleme sa stilom koda
npm run build      # Provjeri uspjeh kompilacije
```

### Testiranje Bank API-ja

```bash
cd 7-bank-project/api
npm run lint       # Provjeri probleme sa stilom koda
node server.js     # Provjeri pokretanje servera bez grešaka
```

### Opći pristup testiranju

- Ovo je edukativni repozitorij bez opsežnih automatiziranih testova
- Ručno testiranje se fokusira na:
  - Primjere koda koji se izvršavaju bez grešaka
  - Ispravnost linkova u dokumentaciji
  - Uspješno dovršenje izgradnje projekata
  - Primjeri poštuju najbolje prakse

### Provjere prije predaje

- Pokrenite `npm run lint` u direktorijima s package.json
- Provjerite valjanost markdown linkova
- Testirajte primjere koda u pregledniku ili Node.js
- Provjerite da prijevodi održavaju ispravnu strukturu

## Smjernice za stil koda

### JavaScript

- Koristite modernu ES6+ sintaksu
- Slijedite standardne ESLint konfiguracije u projektima
- Koristite smislena imena varijabli i funkcija radi edukativne jasnoće
- Dodajte komentare koji objašnjavaju koncepte za učenike
- Formatirajte pomoću Prettier gdje je konfigurirano

### HTML/CSS

- Semantički HTML5 elementi
- Principi responzivnog dizajna
- Jasne konvencije imenovanja klasa
- Komentari koji objašnjavaju CSS tehnike za učenike

### Python

- Smjernice stila PEP 8
- Jasni, edukativni primjeri koda
- Tipizacija gdje je korisno za učenje

### Markdown dokumentacija

- Jasna hijerarhija naslova
- Blokovi koda s definicijom jezika
- Linkovi ka dodatnim izvorima
- Snimke zaslona i slike u direktorijima `images/`
- Alt tekst za slike radi pristupačnosti

### Organizacija datoteka

- Lekcije numerirane sekvencijalno (1-getting-started-lessons, 2-js-basics, itd.)
- Svaki projekt ima `solution/` i često `start/` ili `your-work/` direktorije
- Slike pohranjene u lekcijsko-specifičnim `images/` mapama
- Prijevodi u `translations/{language-code}/` strukturi

## Izgradnja i implementacija

### Implementacija Quiz App (Azure Static Web Apps)

Quiz-app je konfiguriran za Azure Static Web Apps implementaciju:

```bash
cd quiz-app
npm run build      # Kreira dist/ mapu
# Raspoređuje putem GitHub Actions tijeka rada pri pushu na main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Izlazna lokacija**: `dist`
- **Radni tijek**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Instalirajte docsify-to-pdf
npm run convert               # Generirajte PDF iz docsa
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Instalirajte Docsify globalno
docsify serve                 # Pokrenite na localhost:3000
```

### Izgradnje specifične za projekte

Svaki projektni direktorij može imati vlastiti proces izgradnje:
- Vue projekti: `npm run build` kreira produkcijske bundle-ove
- Statički projekti: Nema koraka izgradnje, datoteke se poslužuju direktno

## Smjernice za pull requestove

### Format naslova

Koristite jasne, opisne naslove koji označavaju područje promjene:
- `[Quiz-app] Dodaj novi kviz za lekciju X`
- `[Lesson-3] Ispravi tipfeler u projektu terrarij`
- `[Translation] Dodaj španjolski prijevod za lekciju 5`
- `[Docs] Ažuriraj upute za postavljanje`

### Potrebne provjere

Prije slanja PR-a:

1. **Kvaliteta koda**:
   - Pokrenite `npm run lint` u pogođenim projektnim direktorijima
   - Ispravite sve linting greške i upozorenja

2. **Provjera izgradnje**:
   - Pokrenite `npm run build` ako je primjenjivo
   - Osigurajte da nema grešaka u izgradnji

3. **Provjera linkova**:
   - Testirajte sve markdown linkove
   - Provjerite da referenci slika rade

4. **Pregled sadržaja**:
   - Lektura pravopisa i gramatike
   - Provjerite ispravnost i edukativnost primjera koda
   - Provjerite točnost i smisao prijevoda

### Zahtjevi za doprinos

- Prihvatite Microsoft CLA (automatska provjera prilikom prvog PR-a)
- Slijedite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pogledajte [CONTRIBUTING.md](./CONTRIBUTING.md) za detaljne smjernice
- Referencirajte brojeve issues u opisu PR-a ako je primjenjivo

### Proces pregleda

- PR-ovi pregledavaju održavatelji i zajednica
- Prioritet je edukativna jasnoća
- Primjeri koda trebaju slijediti postojeće najbolje prakse
- Prijevodi se pregledavaju radi točnosti i kulturne prikladnosti

## Sustav prijevoda

### Automatizirani prijevod

- Koristi GitHub Actions s co-op-translator workflowom
- Automatski prevodi na 50+ jezika
- Izvorne datoteke u glavnim direktorijima
- Prevedene datoteke u `translations/{language-code}/` direktorijima

### Dodavanje ručnih poboljšanja prijevoda

1. Lokacijski pronađite datoteku u `translations/{language-code}/`
2. Izvršite poboljšanja dok održavate strukturu
3. Osigurajte funkcionalnost primjera koda
4. Testirajte lokalizirani sadržaj kvizova

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

## Otklanjanje pogrešaka i rješavanje problema

### Česti problemi

**Quiz app ne može pokrenuti**:
- Provjerite verziju Node.js (preporučeno v14+)
- Obrišite `node_modules` i `package-lock.json`, pokrenite `npm install` ponovno
- Provjerite konflikte porta (zadani: Vite koristi port 5173)

**API server se ne pokreće**:
- Provjerite je li verzija Node.js minimalno zadovoljena (node >=10)
- Provjerite je li port već zauzet
- Provjerite jesu li sve ovisnosti instalirane s `npm install`

**Proširenje za preglednik se ne učitava**:
- Provjerite je li manifest.json ispravno formatiran
- Pogledajte konzolu preglednika za greške
- Slijedite upute za instalaciju prema pregledniku

**Problemi s Python chat projektom**:
- Provjerite je li OpenAI paket instaliran: `pip install openai`
- Provjerite je li GITHUB_TOKEN varijabla okoline postavljena
- Provjerite pristup GitHub Modelima

**Docsify ne poslužuje dokumente**:
- Instalirajte docsify-cli globalno: `npm install -g docsify-cli`
- Pokrenite iz korijena repozitorija
- Provjerite postoji li `docs/_sidebar.md`

### Savjeti za razvojno okruženje

- Koristite VS Code s Live Server ekstenzijom za HTML projekte
- Instalirajte ESLint i Prettier ekstenzije za dosljedno formatiranje
- Koristite DevTools preglednika za debugging JavaScript-a
- Za Vue projekte, instalirajte Vue DevTools ekstenziju za preglednik

### Razmatranja o performansama

- Veliki broj prevedenih datoteka (50+ jezika) znači da su punoklonovi veliki
- Koristite shallow clone ako radite samo na sadržaju: `git clone --depth 1`
- Isključite prijevode iz pretraga kada radite na engleskom sadržaju
- Procesi izgradnje mogu biti spori pri prvom pokretanju (npm install, Vite build)

## Sigurnosna razmatranja

### Varijable okoline

- API ključevi nikada ne smiju biti commitani u repozitorij
- Koristite `.env` datoteke (već u `.gitignore`)
- Dokumentirajte potrebne varijable okoline u README datotekama projekata

### Python projekti

- Koristite virtualna okruženja: `python -m venv venv`
- Održavajte ovisnosti ažuriranima
- GitHub tokeni trebaju imati minimalne potrebne dozvole

### Pristup GitHub Modelima

- Potrebni su Personal Access Tokens (PAT) za GitHub Models
- Tokeni trebaju biti pohranjeni kao varijable okoline
- Nikada nemojte commitati tokene ili vjerodajnice

## Dodatne napomene

### Ciljna publika

- Potpuni početnici u web razvoju
- Studenti i samostalni učenici
- Nastavnici koji koriste kurikulum u učionicama
- Sadržaj je dizajniran za dostupnost i postupno stjecanje vještina

### Edukativna filozofija

- Pristup učenju baziran na projektima
- Česte provjere znanja (kvizovi)
- Praktične vježbe kodiranja
- Primjeri primjene u stvarnom svijetu
- Fokus na osnove prije okvira

### Održavanje repozitorija

- Aktivna zajednica učenika i suradnika
- Redovita ažuriranja ovisnosti i sadržaja
- Praćenje issue-a i diskusija od strane održavatelja
- Automatizirane nadopune prijevoda putem GitHub Actions

### Povezani resursi

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub resursi](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) preporučen za učenike
- Dodatni tečajevi: Generativni AI, Data Science, ML, IoT kurikulumi dostupni

### Rad sa specifičnim projektima

Za detaljne upute o pojedinačnim projektima, pogledajte README datoteke u:
- `quiz-app/README.md` - Vue 3 aplikacija kviz
- `7-bank-project/README.md` - Bankarska aplikacija s autentikacijom
- `5-browser-extension/README.md` - Razvoj proširenja za preglednik
- `6-space-game/README.md` - Razvoj igre na canvasu
- `9-chat-project/README.md` - AI chat pomoćnički projekt

### Monorepo struktura

Iako nije klasični monorepo, ovaj repozitorij sadrži više nezavisnih projekata:
- Svaka lekcija je samostalna
- Projekti ne dijele ovisnosti
- Rad na pojedinačnim projektima bez utjecaja na druge
- Klonirajte cijeli repozitorij za potpuni doživljaj kurikuluma

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Odricanje od odgovornosti**:
Ovaj dokument je preveden korištenjem AI prevoditeljskog servisa [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo biti točni, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na njegovom izvornom jeziku treba smatrati autoritativnim izvorom. Za kritične informacije preporučuje se profesionalni ljudski prijevod. Nismo odgovorni za bilo kakve nesporazume ili netočne interpretacije koje proizlaze iz korištenja ovog prijevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->