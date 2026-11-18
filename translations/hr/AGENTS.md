# AGENTS.md

## Pregled projekta

Ovo je repozitorij s obrazovnim planom i programom za podučavanje osnova web razvoja početnicima. Plan i program je sveobuhvatan tečaj u trajanju od 12 tjedana koji su razvili Microsoft Cloud Advocates, sadrži 24 praktične lekcije koje pokrivaju JavaScript, CSS i HTML.

### Ključne komponente

- **Obrazovni sadržaj**: 24 strukturirane lekcije organizirane u module temeljene na projektima
- **Praktični projekti**: Terrarij, Igra tipkanja, Proširenje preglednika, Svemirska igra, Bankovna aplikacija, Uređivač koda i AI pomoćnik za chat
- **Interaktivni kvizovi**: 48 kvizova s po 3 pitanja (procjena prije i nakon lekcije)
- **Višejezična podrška**: Automatski prijevodi na više od 50 jezika putem GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Obrazovni repozitorij s lekcijski organiziranom strukturom
- Svaka mapa lekcije sadrži README, primjere koda i rješenja
- Samostalni projekti u zasebnim direktorijima (quiz-app, razni projektni lekcijski folderi)
- Sustav prijevoda preko GitHub Actions (co-op-translator)
- Dokumentacija poslužena putem Docsify i dostupna kao PDF

## Komande za postavljanje

Ovaj repozitorij prvenstveno služi za konzumaciju obrazovnog sadržaja. Za rad s određenim projektima:

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

### API projekta banke (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pokreni API server
npm run lint       # Pokreni ESLint
npm run format     # Formatiraj s Prettier
```

### Projekti proširenja preglednika

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

### Projekt chata (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Postavite varijablu okoline GITHUB_TOKEN
python api.py
```

## Radni tok razvoja

### Za suradnike na sadržaju

1. **Forkajte repozitorij** na svoj GitHub račun
2. **Klonirajte svoj fork** lokalno
3. **Kreirajte novu granu** za svoje izmjene
4. Izmijenite sadržaj lekcija ili primjere koda
5. Testirajte kod u relevantnim projektnim direktorijima
6. Pošaljite pull requestove prema smjernicama za doprinos

### Za učenike

1. Forkajte ili klonirajte repozitorij
2. Krenite redom kroz mape lekcija
3. Pročitajte README datoteke za svaku lekciju
4. Riješite pred-lekcijske kvizove na https://ff-quizzes.netlify.app/web/
5. Prođite kroz primjere koda u mapama lekcija
6. Riješite zadatke i izazove
7. Riješite post-lekcijske kvizove

### Razvoj uživo

- **Dokumentacija**: Pokrenite `docsify serve` u korijenu (port 3000)
- **Quiz aplikacija**: Pokrenite `npm run dev` u mapi quiz-app
- **Projekti**: Koristite VS Code Live Server ekstenziju za HTML projekte
- **API projekti**: Pokrenite `npm start` u odgovarajućim API mapama

## Upute za testiranje

### Testiranje Quiz aplikacije

```bash
cd quiz-app
npm run lint       # Provjerite za probleme s stilom koda
npm run build      # Provjerite je li izgradnja uspješna
```

### Testiranje Bank API-ja

```bash
cd 7-bank-project/api
npm run lint       # Provjerite probleme sa stilom koda
node server.js     # Provjerite pokreće li se poslužitelj bez pogrešaka
```

### Opći pristup testiranju

- Ovo je obrazovni repozitorij bez opsežnih automatiziranih testova
- Manualno testiranje usmjereno na:
  - Primjeri koda rade bez grešaka
  - Linkovi u dokumentaciji funkcioniraju ispravno
  - Projekti se mogu uspješno izgraditi
  - Primjeri slijede najbolje prakse

### Provjere prije predaje

- Pokrenite `npm run lint` u mapama koje sadrže package.json
- Provjerite valjanost markdown linkova
- Testirajte primjere koda u pregledniku ili Node.js-u
- Provjerite da prijevodi zadržavaju ispravnu strukturu

## Smjernice za stil koda

### JavaScript

- Koristite modernu ES6+ sintaksu
- Slijedite standardne ESLint konfiguracije u projektima
- Koristite smisleni nazive varijabli i funkcija za jasnoću učenja
- Dodajte komentare koji objašnjavaju koncepte za učenike
- Formatirajte pomoću Prettier tamo gdje je konfigurirano

### HTML/CSS

- Semantički HTML5 elementi
- Principi responzivnog dizajna
- Jasne konvencije imenovanja klasa
- Komentari koji objašnjavaju CSS tehnike za učenike

### Python

- PEP 8 smjernice za stil
- Jasni, obrazovni primjeri koda
- Tipizacija gdje je korisno za učenje

### Markdown dokumentacija

- Jasna hijerarhija naslova
- Blokovi koda s označenim jezikom
- Linkovi na dodatne resurse
- Screenshoti i slike u `images/` direktorijima
- Alt tekst za slike radi pristupačnosti

### Organizacija datoteka

- Lekcije numerički označene (1-getting-started-lessons, 2-js-basics itd.)
- Svaki projekt ima `solution/` i često `start/` ili `your-work/` direktorije
- Slike pohranjenje u lekcijski specifičnim `images/` mapama
- Prijevodi u strukturi `translations/{language-code}/`

## Izgradnja i implementacija

### Implementacija Quiz aplikacije (Azure Static Web Apps)

Quiz-app je konfiguriran za Azure Static Web Apps implementaciju:

```bash
cd quiz-app
npm run build      # Stvara dist/ mapu
# Deploya putem GitHub Actions workflowa pri pushanju na main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Izlazna lokacija**: `dist`
- **Radni tok**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Instaliraj docsify-to-pdf
npm run convert               # Generiraj PDF iz docsa
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Instalirajte Docsify globalno
docsify serve                 # Poslužite na localhost:3000
```

### Izgradnja specifična za projekte

Svaki projektni direktorij može imati vlastiti postupak izgradnje:
- Vue projekti: `npm run build` stvara produkcijske pakete
- Statički projekti: nema koraka izgradnje, datoteke se poslužuju direktno

## Smjernice za pull requestove

### Format naslova

Koristite jasne, opisne naslove koji navode područje izmjene:
- `[Quiz-app] Dodaj novi kviz za lekciju X`
- `[Lesson-3] Ispravi tipfeler u terrarium projektu`
- `[Translation] Dodaj španjolski prijevod za lekciju 5`
- `[Docs] Ažuriraj upute za postavljanje`

### Potrebne provjere

Prije slanja PR-a:

1. **Kvaliteta koda**:
   - Pokrenite `npm run lint` u zahvaćenim projektnim mapama
   - Ispravite sve linting greške i upozorenja

2. **Verifikacija izgradnje**:
   - Pokrenite `npm run build` ako je primjenjivo
   - Osigurajte da nema pogrešaka pri izgradnji

3. **Provjera linkova**:
   - Testirajte sve markdown linkove
   - Provjerite ispravnost referenci na slike

4. **Pregled sadržaja**:
   - Provjerite pravopis i gramatiku
   - Osigurajte da su primjeri koda točni i edukativni
   - Provjerite da prijevodi zadržavaju izvorno značenje

### Zahtjevi za doprinos

- Prihvatite Microsoft CLA (automatizirana provjera kod prvog PR-a)
- Slijedite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pogledajte [CONTRIBUTING.md](./CONTRIBUTING.md) za detaljne smjernice
- U opisu PR-a navedite brojeve povezanih issueova ako ih ima

### Proces pregleda

- PR-ovi pregledavaju održavatelji i zajednica
- Prioritet je obrazovna jasnoća
- Primjeri koda trebaju slijediti trenutne najbolje prakse
- Prijevodi se pregledavaju zbog točnosti i prikladnosti za ciljanu kulturu

## Sustav prijevoda

### Automatski prijevod

- Koristi GitHub Actions s co-op-translator radnim tokom
- Automatski prevodi na 50+ jezika
- Izvorne datoteke u glavnim direktorijima
- Prevedene datoteke u direktorijima `translations/{language-code}/`

### Dodavanje ručnih poboljšanja prijevoda

1. Pronađite datoteku u `translations/{language-code}/`
2. Napravite poboljšanja pri čuvanju strukture
3. Osigurajte da primjeri koda ostanu funkcionalni
4. Testirajte lokalizirani kviz sadržaj

### Metapodaci prijevoda

Prevedene datoteke uključuju zaglavlje s metapodacima:
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

## Debugiranje i rješavanje problema

### Uobičajeni problemi

**Quiz aplikacija ne uspijeva pokrenuti se**:
- Provjerite verziju Node.js (preporučeno v14+)
- Izbrišite `node_modules` i `package-lock.json`, ponovo pokrenite `npm install`
- Provjerite konflikte portova (zadano: Vite koristi port 5173)

**API server se ne pokreće**:
- Provjerite zadovoljava li verzija Node.js minimum (node >=10)
- Provjerite koristi li već netko port
- Osigurajte da su sve ovisnosti instalirane s `npm install`

**Proširenje preglednika se ne učitava**:
- Provjerite da je manifest.json ispravno formatiran
- Provjerite konzolu preglednika za greške
- Slijedite upute za instalaciju specifične za preglednik

**Problemi s Python chat projektom**:
- Provjerite je li paket OpenAI instaliran: `pip install openai`
- Provjerite da je postavljena varijabla okoline GITHUB_TOKEN
- Provjerite dozvole pristupa GitHub modelima

**Docsify ne poslužuje dokumente**:
- Instalirajte docsify-cli globalno: `npm install -g docsify-cli`
- Pokrenite iz korijena repozitorija
- Provjerite postojanje datoteke `docs/_sidebar.md`

### Savjeti za razvojno okruženje

- Koristite VS Code s Live Server ekstenzijom za HTML projekte
- Instalirajte ESLint i Prettier ekstenzije za dosljedno formatiranje
- Koristite DevTools u pregledniku za debugiranje JavaScript-a
- Za Vue projekte instalirajte Vue DevTools ekstenziju za preglednik

### Performanse

- Velik broj prevedenih datoteka (50+ jezika) čini cjelokupne klonove velikima
- Koristite shallow clone ako radite samo na sadržaju: `git clone --depth 1`
- Isključite prijevode iz pretraživanja dok radite na engleskom sadržaju
- Postupci izgradnje mogu biti spori pri prvom pokretanju (npm install, Vite build)

## Sigurnosni čimbenici

### Varijable okoline

- API ključevi se nikada ne smiju pohranjivati u repozitorij
- Koristite `.env` datoteke (već u `.gitignore`)
- Dokumentirajte potrebne varijable okoline u README datotekama projekata

### Python projekti

- Koristite virtualna okruženja: `python -m venv venv`
- Održavajte ovisnosti ažuriranima
- GitHub tokeni trebaju imati minimalne potrebne dozvole

### Pristup GitHub modelima

- Potrebni su Personal Access Tokeni (PAT) za GitHub modele
- Tokeni se trebaju pohranjivati kao varijable okoline
- Nikada ne commitajte tokene ili vjerodajnice

## Dodatne bilješke

### Ciljna publika

- Potpuni početnici u web razvoju
- Studenti i samouki polaznici
- Nastavnici koji koriste plan i program u učionicama
- Sadržaj dizajniran za pristupačnost i postupno stjecanje vještina

### Obrazovna filozofija

- Pristup učenju kroz projekte
- Česte provjere znanja (kvizovi)
- Praktične vježbe kodiranja
- Primjeri iz stvarnog svijeta
- Fokus na osnove prije okvira

### Održavanje repozitorija

- Aktivna zajednica učenika i suradnika
- Redovna ažuriranja ovisnosti i sadržaja
- Problemi i rasprave nadgledaju održavatelji
- Automatska ažuriranja prijevoda putem GitHub Actions

### Povezani resursi

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub resursi](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) preporučeno za učenike
- Dodatni tečajevi: Generativni AI, znanost o podacima, ML, IoT planovi i programi

### Rad s određenim projektima

Za detaljne upute o pojedinačnim projektima pogledajte README datoteke u:
- `quiz-app/README.md` - Vue 3 aplikacija za kvizove
- `7-bank-project/README.md` - Bankovna aplikacija s autentifikacijom
- `5-browser-extension/README.md` - Razvoj proširenja preglednika
- `6-space-game/README.md` - Razvoj igre na canvasu
- `9-chat-project/README.md` - AI pomoćnik za chat

### Struktura monorepoa

Iako nije tradicionalni monorepo, ovaj repozitorij sadrži više neovisnih projekata:
- Svaka lekcija je samostalna
- Projekti ne dijele ovisnosti
- Radite na pojedinačnim projektima bez utjecaja na druge
- Klonirajte cijeli repozitorij za cjelokupno iskustvo plana i programa

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Izjava o odricanju od odgovornosti**:  
Ovaj je dokument preveden pomoću AI usluge prevođenja [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo postići točnost, imajte na umu da automatski prijevodi mogu sadržavati greške ili netočnosti. Izvorni dokument na izvornom jeziku treba se smatrati autoritativnim izvorištem. Za kritične informacije preporučuje se profesionalni ljudski prijevod. Nismo odgovorni za bilo kakva nesporazuma ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->