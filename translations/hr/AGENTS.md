# AGENTS.md

## Pregled projekta

Ovo je edukacijski repozitorij za podučavanje osnova web razvoja početnicima. Kurikulum je sveobuhvatan tečaj u trajanju od 12 tjedana koji je razvijen od strane Microsoft Cloud Advocatesa, a sadrži 24 praktične lekcije koje pokrivaju JavaScript, CSS i HTML.

### Ključne komponente

- **Edukativni sadržaj**: 24 strukturirane lekcije organizirane u module temeljene na projektima
- **Praktični projekti**: Terrarij, Igra tipkanja, Proširenje za preglednik, Svemirska igra, Bankarska aplikacija, Uređivač koda i AI chat asistent
- **Interaktivni kvizovi**: 48 kvizova sa po 3 pitanja (procjena prije i poslije lekcije)
- **Podrška za više jezika**: Automatska prijevodi za više od 50 jezika putem GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Edukativni repozitorij sa strukturom baziranom na lekcijama
- Svaka mapa lekcije sadrži README, primjere koda i rješenja
- Samostalni projekti u zasebnim direktorijima (quiz-app, različiti projekti lekcija)
- Sustav prevođenja koristeći GitHub Actions (co-op-translator)
- Dokumentacija se posluživava preko Docsify-a i dostupna je kao PDF

## Komande za postavljanje

Ovaj repozitorij je primarno za konzumaciju edukativnog sadržaja. Za rad s određenim projektima:

### Glavno postavljanje repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Postavljanje Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Pokreni razvojni poslužitelj
npm run build      # Izradi za produkciju
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

### Projekti Proširenja za preglednik

```bash
cd 5-browser-extension/solution
npm install
# Slijedite upute za učitavanje proširenja specificirane za preglednik
```

### Projekti Svemirske igre

```bash
cd 6-space-game/solution
npm install
# Otvorite index.html u pregledniku ili koristite Live Server
```

### Chat projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Postavite varijablu okruženja GITHUB_TOKEN
python api.py
```

## Radni proces razvoja

### Za suradnike na sadržaju

1. **Forkajte repozitorij** na svoj GitHub račun
2. **Klonirajte svoj fork** lokalno
3. **Kreirajte novu granu** za svoje promjene
4. Izmijenite sadržaj lekcija ili primjere koda
5. Testirajte bilo kakve izmjene koda u relevantnim direktorijima projekata
6. Pošaljite pull request-e u skladu s uputama za doprinos

### Za učenike

1. Forkajte ili klonirajte repozitorij
2. Posjećujte direktorije lekcija redom
3. Čitajte README datoteke za svaku lekciju
4. Riješite pred-lekcijske kvizove na https://ff-quizzes.netlify.app/web/
5. Radite kroz primjere koda u mapama lekcija
6. Završite zadatke i izazove
7. Riješite post-lekcijske kvizove

### Živi razvoj

- **Dokumentacija**: Pokrenite `docsify serve` u root direktoriju (port 3000)
- **Quiz App**: Pokrenite `npm run dev` u quiz-app direktoriju
- **Projekti**: Koristite VS Code Live Server ekstenziju za HTML projekte
- **API projekti**: Pokrenite `npm start` u odgovarajućim API direktorijima

## Upute za testiranje

### Testiranje Quiz App

```bash
cd quiz-app
npm run lint       # Provjerite probleme sa stilom koda
npm run build      # Potvrdite da izgradnja uspijeva
```

### Testiranje Bankovnog API-ja

```bash
cd 7-bank-project/api
npm run lint       # Provjerite ima li problema sa stilom koda
node server.js     # Provjerite pokreće li se server bez grešaka
```

### Opći pristup testiranju

- Ovaj repozitorij je edukativan i nema opsežne automatizirane testove
- Ručno testiranje se fokusira na:
  - Pokretanje primjera koda bez pogrešaka
  - Ispravnost veza u dokumentaciji
  - Uspješnu izgradnju projekata
  - Primjere koji slijede najbolje prakse

### Provjere prije slanja

- Pokrenite `npm run lint` u direktorijima s package.json
- Provjerite valjanost markdown linkova
- Testirajte primjere koda u pregledniku ili Node.js
- Provjerite očuvanost strukture prijevoda

## Smjernice za stil koda

### JavaScript

- Koristite modernu ES6+ sintaksu
- Slijedite standardne ESLint konfiguracije u projektima
- Koristite smisleno imenovanje varijabli i funkcija radi edukativne jasnoće
- Dodajte komentare koji objašnjavaju koncepte za učenike
- Formatirajte kod koristeći Prettier gdje je konfigurirano

### HTML/CSS

- Semantički HTML5 elementi
- Principi responzivnog dizajna
- Jasno imenovanje klasa
- Komentari koji objašnjavaju CSS tehnike za učenike

### Python

- PEP 8 smjernice stilskog pisanja
- Jasni, edukativni primjeri koda
- Tipizacija gdje je korisno za učenje

### Markdown dokumentacija

- Jasna hijerarhija naslova
- Blokovi koda s oznakom jezika
- Linkovi na dodatne resurse
- Screenshotti i slike u `images/` direktorijima
- Alt tekst za slike radi pristupačnosti

### Organizacija datoteka

- Lekcije numerirane uzlaznim redom (1-getting-started-lessons, 2-js-basics, itd.)
- Svaki projekt ima `solution/` i često `start/` ili `your-work/` direktorije
- Slike pohranjene u lekcijski specifičnim `images/` mapama
- Prijevodi u strukturi `translations/{jezik-kod}/`

## Izgradnja i implementacija

### Implementacija Quiz App (Azure Static Web Apps)

Quiz-app je konfiguriran za implementaciju preko Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Kreira mapu dist/
# Objavljuje putem GitHub Actions radnog procesa prilikom guranja na main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Lokacija izlaza**: `dist`
- **Radni tok**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Instalirajte docsify-to-pdf
npm run convert               # Generirajte PDF iz docsa
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Instalirajte Docsify globalno
docsify serve                 # posluživanje na localhost:3000
```

### Izgradnja specifična za projekte

Svaki projektni direktorij može imati vlastiti proces izgradnje:
- Vue projekti: `npm run build` kreira produkcijske pakete
- Statični projekti: Nema koraka izgradnje, datoteke se serviraju direktno

## Smjernice za Pull Request

### Format naslova

Koristite jasne, opisne naslove koji definiraju područje promjene:
- `[Quiz-app] Dodaj novi kviz za lekciju X`
- `[Lesson-3] Ispravi tipfeler u projektu terrarija`
- `[Translation] Dodaj španjolski prijevod za lekciju 5`
- `[Docs] Ažuriraj upute za postavljanje`

### Potrebne provjere

Prije slanja PR-a:

1. **Kvaliteta koda**:
   - Pokrenite `npm run lint` u zahvaćenim projekt direktorijima
   - Ispravite sve lint greške i upozorenja

2. **Provjera izgradnje**:
   - Pokrenite `npm run build` gdje je primjenjivo
   - Osigurajte da nema pogrešaka u izgradnji

3. **Provjera linkova**:
   - Testirajte sve markdown linkove
   - Provjerite ispravnost slika

4. **Pregled sadržaja**:
   - Provjerite pravopis i gramatiku
   - Uvjerite se da su primjeri koda ispravni i edukativni
   - Provjerite točnost prijevoda

### Zahtjevi za doprinos

- Prihvatite Microsoft CLA (automatska provjera pri prvom PR-u)
- Slijedite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pogledajte [CONTRIBUTING.md](./CONTRIBUTING.md) za detaljne upute
- U opisu PR-a referencirajte brojeve problema ako su primjenjivi

### Proces pregleda

- PR-eve pregledavaju održavatelji i zajednica
- Prioritet je edukativna jasnoća
- Primjeri koda trebaju slijediti najbolje prakse
- Prijevodi se pregledavaju za točnost i kulturološku prikladnost

## Sustav prijevoda

### Automatski prijevod

- Koristi GitHub Actions s co-op-translator radnim tokom
- Prevodi u više od 50 jezika automatski
- Izvorne datoteke su u glavnim direktorijima
- Prevedene datoteke u `translations/{jezik-kod}/` direktorijima

### Dodavanje ručnih poboljšanja prijevoda

1. Pronađite datoteku unutar `translations/{jezik-kod}/`
2. Napravite poboljšanja uz očuvanje strukture
3. Osigurajte da primjeri koda ostanu funkcionalni
4. Testirajte lokalizirani sadržaj kvizova

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

### Česti problemi

**Quiz app se ne pokreće**:
- Provjerite verziju Node.js (preporučeno v14+)
- Izbrišite `node_modules` i `package-lock.json`, zatim pokrenite `npm install`
- Provjerite konflikte porta (zadano: Vite koristi port 5173)

**API server se ne pokreće**:
- Provjerite zadovoljava li verzija Node.js minimalni zahtjev (node >=10)
- Provjerite je li port već zauzet
- Osigurajte da su sve ovisnosti instalirane s `npm install`

**Proširenje za preglednik se ne učitava**:
- Provjerite ispravnost manifest.json datoteke
- Provjerite konzolu preglednika za greške
- Slijedite specifične upute za instalaciju proširenja u pregledniku

**Problemi s Python chat projektom**:
- Osigurajte da je paket OpenAI instaliran: `pip install openai`
- Provjerite je li varijabla okoline GITHUB_TOKEN postavljena
- Provjerite pristup dozvolama za GitHub modele

**Docsify ne servira dokumente**:
- Instalirajte docsify-cli globalno: `npm install -g docsify-cli`
- Pokrenite iz root direktorija repozitorija
- Provjerite postoji li `docs/_sidebar.md`

### Savjeti za razvojno okruženje

- Koristite VS Code s Live Server ekstenzijom za HTML projekte
- Instalirajte ESLint i Prettier ekstenzije za dosljedan stil
- Koristite DevTools preglednika za debugiranje JavaScripta
- Za Vue projekte, instalirajte Vue DevTools ekstenziju u pregledniku

### Razmatranja performansi

- Veliki broj prevedenih datoteka (50+ jezika) znači da su puni klonovi veliki
- Koristite shallow clone ako radite samo na sadržaju: `git clone --depth 1`
- Isključite prijevode iz pretraga kad radite na engleskom sadržaju
- Procesi izgradnje mogu biti spori pri prvom pokretanju (npm install, Vite build)

## Sigurnosna razmatranja

### Varijable okoline

- API ključevi nikada ne smiju biti uključeni u repozitorij
- Koristite `.env` datoteke (već u `.gitignore`)
- Dokumentirajte potrebne varijable okoline u README-ima projekta

### Python projekti

- Koristite virtualna okruženja: `python -m venv venv`
- Održavajte ovisnosti ažurnima
- GitHub tokeni trebaju imati minimalne potrebne dozvole

### Pristup GitHub modelima

- Potrebni su Personal Access Token-i (PAT) za GitHub modele
- Tokeni trebaju biti pohranjeni kao varijable okoline
- Nikada nemojte commitati tokene ili akreditive

## Dodatne napomene

### Ciljana publika

- Totalni početnici u web razvoju
- Studenti i samouki
- Nastavnici koji koriste kurikulum u učionicama
- Sadržaj je dizajniran za pristupačnost i postupni razvoj vještina

### Edukativna filozofija

- Pristup učenju baziran na projektima
- Česte provjere znanja (kvizovi)
- Praktične vježbe kodiranja
- Primjeri iz stvarnog svijeta
- Fokus na osnove prije okvira

### Održavanje repozitorija

- Aktivna zajednica učenika i suradnika
- Redovna ažuriranja ovisnosti i sadržaja
- Problemi i diskusije se nadziru od strane održavatelja
- Ažuriranja prijevoda automatizirana preko GitHub Actions

### Povezani resursi

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub resursi](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) preporučen za učenike
- Dodatni tečajevi: Generativni AI, Data Science, ML, IoT kurikulumi dostupni

### Rad s određenim projektima

Za detaljne upute o pojedinačnim projektima pogledajte README datoteke u:
- `quiz-app/README.md` - Vue 3 aplikacija kviza
- `7-bank-project/README.md` - Bankarska aplikacija s autentikacijom
- `5-browser-extension/README.md` - Razvoj proširenja za preglednik
- `6-space-game/README.md` - Razvoj igre temeljene na Canvasu
- `9-chat-project/README.md` - AI chat asistent projekt

### Struktura monorepozitorija

Iako nije tradicionalni monorepo, ovaj repozitorij sadrži više nezavisnih projekata:
- Svaka lekcija je samostalna
- Projekti ne dijele ovisnosti
- Radite na pojedinačnim projektima bez utjecaja na druge
- Klonirajte cijeli repozitorij za potpuni doživljaj kurikuluma

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Odricanje od odgovornosti**:
Ovaj je dokument preveden korištenjem AI usluge prevođenja [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo postići točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na njegovom izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni ljudski prijevod. Ne snosimo odgovornost za bilo kakva nesporazumevanja ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->