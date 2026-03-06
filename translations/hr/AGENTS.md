# AGENTS.md

## Pregled projekta

Ovo je edukativni repozitorij za podučavanje osnova web razvoja početnicima. Kurikulum je sveobuhvatni 12-tjedni tečaj razvijen od strane Microsoft Cloud Advocates, koji obuhvaća 24 praktične lekcije koje pokrivaju JavaScript, CSS i HTML.

### Ključne komponente

- **Edukativni sadržaj**: 24 strukturirane lekcije organizirane u module temeljene na projektima
- **Praktični projekti**: Terrarij, igra tipkanja, proširenje za preglednik, svemirska igra, bankarska aplikacija, uređivač koda i AI chat asistent
- **Interaktivni kvizovi**: 48 kvizova s po 3 pitanja svaki (procjene prije i nakon lekcije)
- **Podrška za više jezika**: Automatski prijevodi na više od 50 jezika putem GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Edukativni repozitorij s lekcijama
- Svaka mapa lekcije sadrži README, primjere koda i rješenja
- Samostalni projekti u zasebnim direktorijima (quiz-app, razni projekti lekcija)
- Sustav prijevoda koristeći GitHub Actions (co-op-translator)
- Dokumentacija dostupna putem Docsify i kao PDF

## Komande za postavljanje

Ovaj repozitorij je prvenstveno za konzumaciju edukativnog sadržaja. Za rad s određenim projektima:

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
npm run build      # Izgradi za produkciju
npm run lint       # Pokreni ESLint
```

### Bankarski projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pokreni API poslužitelj
npm run lint       # Pokreni ESLint
npm run format     # Formatiraj s Prettier
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

## Radni proces razvoja

### Za suradnike na sadržaju

1. **Forkajte repozitorij** na svoj GitHub račun
2. **Klonirajte svoj fork** lokalno
3. **Kreirajte novu granu** za svoje promjene
4. Izmijenite sadržaj lekcija ili primjere koda
5. Testirajte bilo kakve promjene koda u relevantnim projekt mapama
6. Pošaljite pull requestove prema smjernicama za doprinos

### Za učenike

1. Forkajte ili klonirajte repozitorij
2. Redom idite u mape lekcija
3. Čitajte README datoteke za svaku lekciju
4. Riješite kvizove prije lekcije na https://ff-quizzes.netlify.app/web/
5. Radite kroz primjere koda u mapama lekcija
6. Završite zadatke i izazove
7. Riješite kvizove nakon lekcije

### Razvoj uživo

- **Dokumentacija**: Pokrenite `docsify serve` u korijenu (port 3000)
- **Quiz App**: Pokrenite `npm run dev` u quiz-app direktoriju
- **Projekti**: Koristite VS Code Live Server ekstenziju za HTML projekte
- **API projekti**: Pokrenite `npm start` u odgovarajućim API direktorijima

## Upute za testiranje

### Testiranje Quiz App

```bash
cd quiz-app
npm run lint       # Provjerite ima li problema sa stilom koda
npm run build      # Provjerite je li gradnja uspjela
```

### Testiranje Bank API

```bash
cd 7-bank-project/api
npm run lint       # Provjerite probleme sa stilom koda
node server.js     # Provjerite pokreće li se poslužitelj bez grešaka
```

### Opći pristup testiranju

- Ovo je edukativni repozitorij bez sveobuhvatnih automatiziranih testova
- Ručno testiranje fokusira se na:
  - Pokretanje primjera koda bez pogrešaka
  - Ispravnost linkova u dokumentaciji
  - Uspješan završetak build procesa projekata
  - Primjeri slijede najbolje prakse

### Provjere prije slanja

- Pokrenite `npm run lint` u direktorijima s package.json
- Provjerite ispravnost markdown linkova
- Testirajte primjere koda u pregledniku ili Node.js
- Provjerite da prijevodi održavaju ispravnu strukturu

## Smjernice za stil koda

### JavaScript

- Koristite modernu ES6+ sintaksu
- Slijedite standardne ESLint konfiguracije u projektima
- Koristite smisleni nazive varijabli i funkcija za edukativnu jasnoću
- Dodajte komentare koji objašnjavaju koncepte za učenike
- Formatirajte koristeći Prettier gdje je konfigurirano

### HTML/CSS

- Semantički HTML5 elementi
- Principi responzivnog dizajna
- Jasne konvencije imenovanja klasa
- Komentari koji objašnjavaju CSS tehnike za učenike

### Python

- Smjernice stila PEP 8
- Jasni, edukativni primjeri koda
- Tipizacije gdje su korisne za učenje

### Markdown dokumentacija

- Jasna hijerarhija naslova
- Blokovi koda sa specifikacijom jezika
- Linkovi na dodatne resurse
- Screenshoti i slike u direktorijima `images/`
- Alt tekst za slike radi pristupačnosti

### Organizacija datoteka

- Lekcije numerirane redom (1-getting-started-lessons, 2-js-basics, itd.)
- Svaki projekt ima `solution/` i često `start/` ili `your-work/` direktorije
- Slike pohranjene u specifičnim `images/` mapama za lekcije
- Prijevodi u strukturi `translations/{language-code}/`

## Izgradnja i distribucija

### Deploy Quiz App (Azure Static Web Apps)

Quiz-app je konfiguriran za distribuciju putem Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Kreira mapu dist/
# Raspoređuje putem GitHub Actions workflow-a na push u main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Izlazna lokacija**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Instalirajte docsify-to-pdf
npm run convert               # Generirajte PDF iz dokumenata
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Instalirajte Docsify globalno
docsify serve                 # Poslužite na localhost:3000
```

### Buildovi specifični za projekte

Svaki projekt može imati svoj proces builda:
- Vue projekti: `npm run build` kreira produkcijske paketove
- Statični projekti: nema build koraka, datoteke se služe direktno

## Smjernice za pull requestove

### Format naslova

Koristite jasne i opisne naslove koji označavaju područje promjene:
- `[Quiz-app] Dodaj novi kviz za lekciju X`
- `[Lesson-3] Ispravi tipfelere u terrarij projektu`
- `[Translation] Dodaj španjolski prijevod za lekciju 5`
- `[Docs] Ažuriraj upute za postavljanje`

### Potrebne provjere

Prije slanja PR-a:

1. **Kvaliteta koda**:
   - Pokrenite `npm run lint` u zahvaćenim projekt direktorijima
   - Ispravite sve linting pogreške i upozorenja

2. **Provjera builda**:
   - Pokrenite `npm run build` ako je primjenjivo
   - Osigurajte da nema build pogrešaka

3. **Provjera linkova**:
   - Testirajte sve markdown linkove
   - Provjerite ispravnost poveznica na slike

4. **Pregled sadržaja**:
   - Lektura pravopisa i gramatike
   - Provjera ispravnosti i edukativnosti primjera koda
   - Provjera točnosti prijevoda

### Zahtjevi za doprinos

- Prihvatite Microsoft CLA (automatska provjera kod prvog PR-a)
- Slijedite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pogledajte [CONTRIBUTING.md](./CONTRIBUTING.md) za detaljne smjernice
- Referencirajte brojeve problema u opisu PR-a ako je primjenjivo

### Proces pregleda

- PR-ovi pregledavaju održavatelji i zajednica
- Prioritet je edukativna jasnoća
- Primjeri koda trebaju slijediti važeće najbolje prakse
- Prijevodi se pregledavaju na točnost i kulturološku prikladnost

## Sustav prijevoda

### Automatski prijevod

- Koristi GitHub Actions s co-op-translator workflowom
- Automatski prevodi na više od 50 jezika
- Izvorne datoteke u glavnim direktorijima
- Prijevodne datoteke u `translations/{language-code}/` direktorijima

### Dodavanje ručnih poboljšanja prijevoda

1. Pronađite datoteku u `translations/{language-code}/`
2. Napravite poboljšanja pritom održavajući strukturu
3. Osigurajte da primjeri koda ostanu funkcionalni
4. Testirajte lokalizirani kviz sadržaj

### Metapodaci prijevoda

Prijevodne datoteke uključuju zaglavlje metapodataka:
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
- Izbrišite `node_modules` i `package-lock.json`, zatim pokrenite `npm install`
- Provjerite konflikt porta (prema zadanim postavkama: Vite koristi port 5173)

**API server se ne pokreće**:
- Provjerite da Node.js verzija zadovoljava minimum (node >=10)
- Provjerite koristi li port već druga aplikacija
- Osigurajte da su sve ovisnosti instalirane putem `npm install`

**Proširenje za preglednik se ne učitava**:
- Provjerite je li manifest.json pravilno formatiran
- Provjerite konzolu preglednika za pogreške
- Slijedite upute za instalaciju specifične za preglednik

**Problemi s Python chat projektom**:
- Provjerite je li paket OpenAI instaliran: `pip install openai`
- Provjerite da je postavljena varijabla okoline GITHUB_TOKEN
- Provjerite dozvole pristupa GitHub modelima

**Docsify ne posluje s dokumentacijom**:
- Instalirajte docsify-cli globalno: `npm install -g docsify-cli`
- Pokrenite iz root direktorija repozitorija
- Provjerite da `docs/_sidebar.md` postoji

### Savjeti za razvojno okruženje

- Koristite VS Code s Live Server ekstenzijom za HTML projekte
- Instalirajte ESLint i Prettier ekstenzije za dosljedno formatiranje
- Koristite DevTools preglednika za debuggiranje JavaScript koda
- Za Vue projekte instalirajte Vue DevTools ekstenziju za preglednike

### Razmatranja performansi

- Veliki broj prevedenih datoteka (50+ jezika) znači da su puni klonovi veliki
- Koristite shallow clone ako radite samo na sadržaju: `git clone --depth 1`
- Isključite prijevode iz pretraživanja dok radite na engleskom sadržaju
- Build procesi mogu biti spori pri prvom pokretanju (npm install, Vite build)

## Sigurnosna razmatranja

### Varijable okruženja

- API ključevi se nikada ne smiju uključivati u repozitorij
- Koristite `.env` datoteke (već su u `.gitignore`)
- Dokumentirajte potrebne varijable okruženja u README datotekama projekata

### Python projekti

- Koristite virtualna okruženja: `python -m venv venv`
- Održavajte ovisnosti ažurnima
- GitHub tokeni trebaju imati minimalne potrebne dozvole

### Pristup GitHub modelima

- Za GitHub modele potrebni su Personal Access Tokeni (PAT)
- Tokeni trebaju biti pohranjeni kao varijable okoline
- Nikada ne uključujte tokene ili vjerodajnice u repozitorij

## Dodatne napomene

### Ciljana publika

- Potpuni početnici u web razvoju
- Studenti i samostalni učenici
- Nastavnici koji koriste kurikulum u učionicama
- Sadržaj je dizajniran za pristupačnost i postepeno usavršavanje vještina

### Edukativna filozofija

- Pristup učenju temeljen na projektima
- Česte provjere znanja (kvizovi)
- Praktične kodne vježbe
- Primjeri iz stvarnog svijeta
- Fokus na temelje prije frameworka

### Održavanje repozitorija

- Aktivna zajednica učenika i suradnika
- Redovita ažuriranja ovisnosti i sadržaja
- Praćenje problema i rasprava od strane održavatelja
- Ažuriranja prijevoda automatizirana kroz GitHub Actions

### Povezani resursi

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub resursi](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) preporučen za učenike
- Dodatni tečajevi: Generativni AI, Data Science, ML, IoT kurikulumi dostupni

### Rad s određenim projektima

Za detaljne upute za pojedine projekte, pogledajte README datoteke u:
- `quiz-app/README.md` - Vue 3 quiz aplikacija
- `7-bank-project/README.md` - Bankarska aplikacija s autentifikacijom
- `5-browser-extension/README.md` - Razvoj proširenja za preglednik
- `6-space-game/README.md` - Razvoj igre na canvas-u
- `9-chat-project/README.md` - AI chat asistent projekt

### Struktura monorepoa

Iako nije tradicionalni monorepo, ovaj repozitorij sadrži više neovisnih projekata:
- Svaka lekcija je samostalna
- Projekti ne dijele ovisnosti
- Radite na pojedinim projektima bez utjecaja na druge
- Klonirajte cijeli repozitorij za kompletno iskustvo kurikuluma

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI prevoditeljske usluge [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo postići točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za kritične informacije preporučuje se profesionalni ljudski prijevod. Ne snosimo odgovornost za bilo kakve nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->