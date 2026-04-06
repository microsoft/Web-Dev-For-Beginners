# AGENTS.md

## Pregled projekta

Ovo je edukacijski repozitorij za podučavanje osnova web razvoja početnicima. Kurikulum je sveobuhvatan tečaj od 12 tjedana koji su razvili Microsoft Cloud zagovornici, sa 24 praktične lekcije koje pokrivaju JavaScript, CSS i HTML.

### Ključne komponente

- **Edukativni sadržaj**: 24 strukturirane lekcije organizirane u module temeljene na projektima
- **Praktični projekti**: Terrarium, igra tipkanja, ekstenzija za preglednik, svemirska igra, banka aplikacija, uređivač koda i AI chat asistent
- **Interaktivni kvizovi**: 48 kvizova sa po 3 pitanja (evaluacije prije i poslije lekcija)
- **Podrška za više jezika**: Automatizirani prijevodi za 50+ jezika putem GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Edukacijski repozitorij s lekcijskom strukturom
- Svaka mapa lekcije sadrži README, primjere koda i rješenja
- Samostalni projekti u zasebnim direktorijima (quiz-app, razni projekti lekcija)
- Sustav prijevoda koristeći GitHub Actions (co-op-translator)
- Dokumentacija dostupna preko Docsify i kao PDF

## Komande za postavljanje

Ovaj repozitorij je prvenstveno za konzumaciju edukativnog sadržaja. Za rad s pojedinim projektima:

### Postavljanje glavnog repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Postavljanje Quiz aplikacije (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Pokreni razvojni poslužitelj
npm run build      # Izgradi za produkciju
npm run lint       # Pokreni ESLint
```

### Bankovni projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pokreni API server
npm run lint       # Pokreni ESLint
npm run format     # Formatiraj s Prettierom
```

### Projekti ekstenzija za preglednik

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

### Chat projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Postavi GITHUB_TOKEN varijablu okoline
python api.py
```

## Radni tijek razvoja

### Za suradnike na sadržaju

1. **Forkajte repozitorij** na svoj GitHub račun
2. **Klonirajte svoj fork** lokalno
3. **Napravite novu granu** za svoje promjene
4. Izmijenite sadržaj lekcija ili primjere koda
5. Testirajte promjene koda u relevantnim direktorijima projekata
6. Pošaljite pull requestove prateći smjernice za doprinos

### Za učenike

1. Forkajte ili klonirajte repozitorij
2. Redom prolazite kroz direktorije lekcija
3. Čitajte README datoteke za svaku lekciju
4. Riješite pred-lezijske kvizove na https://ff-quizzes.netlify.app/web/
5. Prođite primjere koda u mapama lekcija
6. Ispratite zadatke i izazove
7. Odgovorite na post-lezijske kvizove

### Aktivni razvoj

- **Dokumentacija**: Pokrenite `docsify serve` u korijenu (port 3000)
- **Quiz App**: Pokrenite `npm run dev` u direktoriju quiz-app
- **Projekti**: Koristite VS Code Live Server ekstenziju za HTML projekte
- **API projekti**: Pokrenite `npm start` u odgovarajućim API direktorijima

## Upute za testiranje

### Testiranje Quiz aplikacije

```bash
cd quiz-app
npm run lint       # Provjerite ima li problema sa stilom koda
npm run build      # Provjerite je li izgradnja uspješna
```

### Testiranje Bank API-ja

```bash
cd 7-bank-project/api
npm run lint       # Provjerite probleme sa stilom koda
node server.js     # Provjerite pokreće li se server bez pogrešaka
```

### Opći pristup testiranju

- Ovo je edukacijski repozitorij bez sveobuhvatnih automatiziranih testova
- Ručno testiranje fokusira se na:
  - Primjere koda koji se izvršavaju bez grešaka
  - Ispravnost linkova u dokumentaciji
  - Uspješno dovršen build projekata
  - Primjere u skladu s najboljim praksama

### Provjere prije slanja

- Pokrenite `npm run lint` u direktorijima s package.json
- Provjerite valjanost markdown linkova
- Testirajte primjere koda u pregledniku ili Node.js
- Provjerite da prijevodi održavaju ispravnu strukturu

## Smjernice za stil koda

### JavaScript

- Koristite modernu ES6+ sintaksu
- Pridržavajte se standardnih ESLint konfiguracija u projektima
- Koristite značenjem bogate nazive varijabli i funkcija za edukativnu jasnoću
- Dodajte komentare koji objašnjavaju koncepte za učenike
- Formatirajte kod pomoću Prettiera gdje je konfigurirano

### HTML/CSS

- Semantički HTML5 elementi
- Principi responzivnog dizajna
- Jasan sustav imenovanja klasa
- Komentari koji pojašnjavaju CSS tehnike za učenike

### Python

- Slijedite PEP 8 stil
- Jasni, edukativni primjeri koda
- Tipizacija gdje pomaže za učenje

### Markdown dokumentacija

- Jasna hijerarhija naslova
- Blokovi koda s označenim jezikom
- Linkovi na dodatne resurse
- Screenshoti i slike u mapama `images/`
- Alt tekst za slike radi pristupačnosti

### Organizacija datoteka

- Lekcije numerirane uzlazno (1-getting-started-lessons, 2-js-basics itd.)
- Svaki projekt sadrži `solution/` i često `start/` ili `your-work/` mape
- Slike pohranjene u mapama `images/` specifičnim za lekciju
- Prijevodi u strukturi `translations/{language-code}/`

## Izgradnja i implementacija

### Implementacija Quiz aplikacije (Azure Static Web Apps)

Quiz-app je konfigurirana za implementaciju na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Stvara mapu dist/
# Raspoređuje putem GitHub Actions workflow-a prilikom push-a na main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Izlazna mapa**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Instalirajte docsify-to-pdf
npm run convert               # Generirajte PDF iz docsa
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Globalno instalirajte Docsify
docsify serve                 # Poslužite na localhost:3000
```

### Svojstvene gradnje projekata

Svaki projekt može imati svoj proces izgradnje:
- Vue projekti: `npm run build` kreira produkcijske bundle
- Statički projekti: Nema izgradnje, datoteke se serviraju direktno

## Smjernice za pull request

### Format naslova

Koristite jasne, opisne naslove koji označavaju područje promjene:
- `[Quiz-app] Dodaj novi kviz za lekciju X`
- `[Lesson-3] Ispravi tipfeler u terrarium projektu`
- `[Translation] Dodaj španjolski prijevod za lekciju 5`
- `[Docs] Ažuriraj upute za postavljanje`

### Potrebne provjere

Prije slanja PR-a:

1. **Kvaliteta koda**:
   - Pokrenite `npm run lint` u pogođenim direktorijima projekata
   - Ispravite sve linting greške i upozorenja

2. **Provjera builda**:
   - Pokrenite `npm run build` ako je primjenjivo
   - Provjerite da nema grešaka u buildu

3. **Validacija linkova**:
   - Testirajte sve markdown linkove
   - Provjerite ispravnost referenci na slike

4. **Pregled sadržaja**:
   - Le Korrekture pravopisa i gramatike
   - Osigurajte da su primjeri koda točni i edukativni
   - Provjerite da prijevodi točno prenose značenje

### Zahtjevi za doprinos

- Prihvatite Microsoft CLA (automatska provjera kod prvog PR-a)
- Pridržavajte se [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pogledajte [CONTRIBUTING.md](./CONTRIBUTING.md) za detaljne smjernice
- Uključite brojeve problema u opis PR-a ako je primjenjivo

### Proces pregleda

- PR-ove pregledavaju održavatelji i zajednica
- Prioritet je edukativna jasnoća
- Primjeri koda trebaju slijediti aktualne najbolje prakse
- Prijevodi se pregledavaju zbog točnosti i kulturne prikladnosti

## Sustav prijevoda

### Automatski prijevod

- Koristi GitHub Actions s co-op-translator workflowom
- Automatski prevodi na 50+ jezika
- Izvorne datoteke u glavnim direktorijima
- Prevedene datoteke u `translations/{language-code}/` direktorijima

### Dodavanje ručnih poboljšanja prijevoda

1. Pronađite datoteku u `translations/{language-code}/`
2. Izvršite poboljšanja uz očuvanje strukture
3. Provjerite da primjeri koda ostaju funkcionalni
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

## Debugiranje i rješavanje problema

### Česti problemi

**Quiz aplikacija se ne pokreće**:
- Provjerite verziju Node.js (preporuka v14+)
- Obrišite `node_modules` i `package-lock.json`, pokrenite ponovno `npm install`
- Provjerite konflikte portova (zadano: Vite koristi port 5173)

**API server se ne pokreće**:
- Provjerite minimalnu verziju Node.js (node >=10)
- Provjerite je li port zauzet
- Osigurajte da su sve ovisnosti instalirane s `npm install`

**Ekstenzija preglednika se ne učitava**:
- Provjerite je li manifest.json ispravno formatiran
- Provjerite konzolu preglednika za greške
- Slijedite upute za instalaciju ekstenzija za konkretan preglednik

**Problemi s chat projektom u Pythonu**:
- Osigurajte da je paket OpenAI instaliran: `pip install openai`
- Provjerite je li postavljena varijabla okoline GITHUB_TOKEN
- Provjerite dozvole pristupa GitHub Models

**Docsify ne prikazuje dokumente**:
- Instalirajte docsify-cli globalno: `npm install -g docsify-cli`
- Pokrenite iz korijena repozitorija
- Provjerite postoji li `docs/_sidebar.md`

### Savjeti za razvojno okruženje

- Koristite VS Code s Live Server ekstenzijom za HTML projekte
- Instalirajte ESLint i Prettier ekstenzije za dosljedno formatiranje
- Koristite DevTools preglednika za debugiranje JavaScript-a
- Za Vue projekte instalirajte Vue DevTools ekstenziju preglednika

### Performanse

- Velik broj prevedenih datoteka (50+ jezika) znači da su puni klonovi veliki
- Koristite shallow clone ako radite samo na sadržaju: `git clone --depth 1`
- Izuzmite prijevode iz pretraživanja prilikom rada na engleskom sadržaju
- Procesi buildanja mogu biti spori pri prvom pokretanju (npm install, Vite build)

## Sigurnosne napomene

### Varijable okoline

- API ključevi se nikada ne smiju komitirati u repozitorij
- Koristite `.env` datoteke (već u `.gitignore`)
- Dokumentirajte potrebne varijable okoline u README-ima projekata

### Python projekti

- Koristite virtualna okruženja: `python -m venv venv`
- Održavajte ovisnosti ažurirane
- GitHub tokeni trebaju imati minimalne potrebne dozvole

### Pristup GitHub Models

- Za GitHub Models potrebni su Personal Access Tokeni (PAT)
- Tokeni se trebaju pohraniti kao varijable okoline
- Nikad ne komitirajte tokene ili pristupne podatke

## Dodatne napomene

### Ciljana publika

- Potpuni početnici u web razvoju
- Studenti i samouki učenici
- Nastavnici koji koriste kurikulum u učionicama
- Sadržaj je dizajniran za pristupačnost i postupno izgrađivanje vještina

### Edukativna filozofija

- Projektno učenje
- Česte provjere znanja (kvizovi)
- Praktične vježbe kodiranja
- Primjeri primjene u stvarnom svijetu
- Fokus na osnovama prije frameworka

### Održavanje repozitorija

- Aktivna zajednica učenika i suradnika
- Redovna ažuriranja ovisnosti i sadržaja
- Problemi i diskusije nadzirani od strane održavatelja
- Ažuriranja prijevoda automatizirana putem GitHub Actions

### Povezani resursi

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub resursi](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) preporučen za učenike
- Dodatni tečajevi: Generative AI, Data Science, ML, IoT kurikulumi dostupni

### Rad s pojedinim projektima

Za detaljne upute o pojedinačnim projektima, pogledajte README datoteke u:
- `quiz-app/README.md` - Vue 3 aplikacija kviza
- `7-bank-project/README.md` - Bankovna aplikacija s autentikacijom
- `5-browser-extension/README.md` - Razvoj ekstenzije za preglednik
- `6-space-game/README.md` - Razvoj igre koristeći Canvas
- `9-chat-project/README.md` - AI chat asistent projekt

### Struktura monorepa

Iako nije tradicionalni monorepo, ovaj repozitorij sadrži više neovisnih projekata:
- Svaka lekcija je samostalna
- Projekti ne dijele ovisnosti
- Radite na pojedinim projektima bez utjecaja na druge
- Klonirajte cijeli repozitorij za kompletno iskustvo kurikuluma

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Odricanje od odgovornosti**:  
Ovaj dokument preveden je koristeći AI servis za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako težimo točnosti, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku smatra se autoritativnim izvorom. Za kritične informacije preporučuje se profesionalni ljudski prijevod. Ne snosimo odgovornost za bilo kakva nesporazuma ili pogrešne interpretacije koje proizlaze iz uporabe ovog prijevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->