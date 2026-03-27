# AGENTS.md

## Pregled projekta

Ovo je repozitorij obrazovnog kurikuluma za podučavanje osnova web razvoja početnicima. Kurikulum je sveobuhvatan tečaj u trajanju od 12 tjedana, razvijen od strane Microsoft Cloud Advocates, sadrži 24 praktične lekcije koje pokrivaju JavaScript, CSS i HTML.

### Ključne komponente

- **Obrazovni sadržaj**: 24 strukturirane lekcije organizirane u module temeljene na projektima
- **Praktični projekti**: Terrarij, igra tipkanja, proširenje preglednika, svemirska igra, bankarska aplikacija, uređivač koda i AI chat asistent
- **Interaktivni kvizovi**: 48 kvizova s po 3 pitanja (procjena prije/nakon lekcije)
- **Podrška za više jezika**: Automatski prijevodi za više od 50 jezika putem GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Obrazovni repozitorij s lekcijsko-temeljnom strukturom
- Svaka mapa lekcije sadrži README, primjere koda i rješenja
- Samostalni projekti u posebnim direktorijima (quiz-app, različiti projekti lekcija)
- Sustav prijevoda koristeći GitHub Actions (co-op-translator)
- Dokumentacija dostupna putem Docsify i kao PDF

## Komande za postavljanje

Ovaj repozitorij je prvenstveno za konzumaciju obrazovnog sadržaja. Za rad sa specifičnim projektima:

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

### Bankarski projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pokreni API poslužitelj
npm run lint       # Pokreni ESLint
npm run format     # Formatiraj s Prettierom
```

### Projekti proširenja preglednika

```bash
cd 5-browser-extension/solution
npm install
# Slijedite upute za učitavanje proširenja specifična za preglednik
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

## Radni tok razvoja

### Za suradnike na sadržaju

1. **Forkajte repozitorij** na svoj GitHub račun
2. **Klonirajte svoj fork** lokalno
3. **Kreirajte novu granu** za svoje izmjene
4. Napravite izmjene u sadržaju lekcija ili primjerima koda
5. Testirajte izmjene koda u odgovarajućim direktorijima projekata
6. Pošaljite pull requestove prema smjernicama za doprinos

### Za učenike

1. Forkajte ili klonirajte repozitorij
2. Prolazite kroz direktorije lekcija redom
3. Čitajte README datoteke za svaku lekciju
4. Riješite pred-lekcijske kvizove na https://ff-quizzes.netlify.app/web/
5. Radite kroz primjere koda u mapama lekcija
6. Dovršite zadatke i izazove
7. Riješite post-lekcijske kvizove

### Razvoj uživo

- **Dokumentacija**: Pokrenite `docsify serve` u korijenu (port 3000)
- **Quiz aplikacija**: Pokrenite `npm run dev` u direktoriju quiz-app
- **Projekti**: Koristite VS Code Live Server ekstenziju za HTML projekte
- **API projekti**: Pokrenite `npm start` u odgovarajućim API direktorijima

## Upute za testiranje

### Testiranje Quiz aplikacije

```bash
cd quiz-app
npm run lint       # Provjerite probleme sa stilom koda
npm run build      # Provjerite uspjeh izgradnje
```

### Testiranje Bank API-ja

```bash
cd 7-bank-project/api
npm run lint       # Provjerite probleme sa stilom koda
node server.js     # Provjerite pokreće li se poslužitelj bez pogrešaka
```

### Općeniti pristup testiranju

- Ovo je obrazovni repozitorij bez sveobuhvatnih automatiziranih testova
- Ručno testiranje se fokusira na:
  - Primjere koda koji rade bez pogrešaka
  - Ispravnost poveznica u dokumentaciji
  - Uspješan završetak gradnje projekata
  - Primjere koji slijede najbolje prakse

### Provjere prije predaje

- Pokrenite `npm run lint` u direktorijima s package.json
- Provjerite valjanost markdown poveznica
- Testirajte primjere koda u pregledniku ili Node.js
- Provjerite da prijevodi održavaju pravilnu strukturu

## Smjernice za stil koda

### JavaScript

- Koristite modernu ES6+ sintaksu
- Slijedite standardne ESLint konfiguracije zadane u projektima
- Koristite smislen pripad imena varijabla i funkcija radi obrazovne jasnoće
- Dodajte komentare koji objašnjavaju koncepte za učenike
- Formatirajte pomoću Prettier gdje je konfigurirano

### HTML/CSS

- Semantički HTML5 elementi
- Principi responzivnog dizajna
- Jasne konvencije imenovanja klasa
- Komentari koji objašnjavaju CSS tehnike za učenike

### Python

- Smjernice stilskog vodiča PEP 8
- Jasni, obrazovni primjeri koda
- Tipovi (type hints) gdje pomažu u učenju

### Markdown dokumentacija

- Jasna hijerarhija naslova
- Blokovi koda s označenim jezikom
- Poveznice na dodatne resurse
- Snimke zaslona i slike u direktorijima `images/`
- Alt tekst za slike radi pristupačnosti

### Organizacija datoteka

- Lekcije numerirane uzastopno (1-getting-started-lessons, 2-js-basics itd.)
- Svaki projekt ima `solution/` i često `start/` ili `your-work/` direktorije
- Slike pohranjene u lekcijskim `images/` mapama
- Prijevodi u strukturi `translations/{language-code}/`

## Izgradnja i postavljanje

### Postavljanje Quiz aplikacije (Azure Static Web Apps)

quiz-app je konfiguriran za Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Stvara mapu dist/
# Objavljuje putem GitHub Actions tijeka rada pri pushu na main
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
docsify serve                 # Poslužite na localhost:3000
```

### Izgradnja specifičnih projekata

Svaki direktorij projekta može imati vlastiti proces izgradnje:
- Vue projekti: `npm run build` za proizvodne pakete
- Statički projekti: Nema koraka izgradnje, posluživanje datoteka direktno

## Smjernice za pull requestove

### Format naslova

Koristite jasne, opisne naslove koji označavaju područje promjene:
- `[Quiz-app] Dodaj novi kviz za lekciju X`
- `[Lesson-3] Ispravi tipografsku pogrešku u terrarium projektu`
- `[Translation] Dodaj španjolski prijevod za lekciju 5`
- `[Docs] Ažuriraj upute za postavljanje`

### Obavezne provjere

Prije slanja PR-a:

1. **Kvaliteta koda**:
   - Pokrenite `npm run lint` u zahvaćenim projektima
   - Ispravite sve lint pogreške i upozorenja

2. **Provjera gradnje**:
   - Pokrenite `npm run build` ako je primjenjivo
   - Osigurajte da nema grešaka u gradnji

3. **Provjera poveznica**:
   - Testirajte sve markdown poveznice
   - Provjerite referencirane slike

4. **Pregled sadržaja**:
   - Provjerite pravopis i gramatiku
   - Osigurajte da su primjeri koda ispravni i obrazovni
   - Provjerite da prijevodi zadržavaju izvorno značenje

### Zahtjevi za doprinos

- Slažete se s Microsoft CLA (automatska provjera pri prvom PR-u)
- Slijedite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pogledajte [CONTRIBUTING.md](./CONTRIBUTING.md) za detaljne smjernice
- Referencirajte broj/e problema u opisu PR-a ako je primjenjivo

### Proces pregleda

- PR-ove pregledavaju održavatelji i zajednica
- Prioritet je obrazovna jasnoća
- Primjeri koda trebaju slijediti aktualne najbolje prakse
- Prijevodi se pregledavaju na točnost i kulturnu prikladnost

## Sustav prijevoda

### Automatski prijevod

- Koristi GitHub Actions s co-op-translator workflow
- Automatski prevodi na više od 50 jezika
- Izvorne datoteke u glavnim direktorijima
- Prevedene datoteke u `translations/{language-code}/` direktorijima

### Dodavanje ručnih poboljšanja prijevoda

1. Pronađite datoteku u `translations/{language-code}/`
2. Unesite poboljšanja dok održavate strukturu
3. Osigurajte da primjeri koda ostanu funkcionalni
4. Testirajte sve lokalizirane kviz sadržaje

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

**Quiz aplikacija se ne pokreće**:
- Provjerite verziju Node.js (preporučeno v14+)
- Obrišite `node_modules` i `package-lock.json`, ponovno pokrenite `npm install`
- Provjerite sukobe porta (zadano: Vite koristi port 5173)

**API server se ne pokreće**:
- Provjerite da je verzija Node.js zadovoljavajuća (node >=10)
- Provjerite koristi li port drugi proces
- Osigurajte instalirane sve ovisnosti s `npm install`

**Proširenje preglednika se ne učitava**:
- Provjerite ispravnost formata manifest.json
- Pregledajte konzolu preglednika zbog pogrešaka
- Slijedite upute za instalaciju specifične za preglednik

**Problemi s Python chat projektom**:
- Osigurajte instaliran OpenAI paket: `pip install openai`
- Provjerite je li varijabla okoliša GITHUB_TOKEN postavljena
- Provjerite dozvole za pristup GitHub Models

**Docsify ne poslužuje dokumente**:
- Globalno instalirajte docsify-cli: `npm install -g docsify-cli`
- Pokrenite iz korijenskog direktorija repozitorija
- Provjerite postojanje `docs/_sidebar.md`

### Savjeti za razvojno okruženje

- Koristite VS Code s Live Server ekstenzijom za HTML projekte
- Instalirajte ESLint i Prettier ekstenzije za dosljedno formatiranje
- Koristite DevTools preglednika za otklanjanje JavaScript pogrešaka
- Za Vue projekte instalirajte Vue DevTools ekstenziju preglednika

### Razmatranja performansi

- Veliki broj prevedenih datoteka (50+ jezika) znači da su puni klonovi veliki
- Koristite shallow clone ako radite samo na sadržaju: `git clone --depth 1`
- Isključite prijevode iz pretraživanja pri radu na engleskom
- Procesi gradnje mogu biti spori pri prvom pokretanju (npm install, Vite build)

## Sigurnosne napomene

### Varijable okoliša

- API ključevi nikada ne smiju biti spremljeni u repozitorij
- Koristite `.env` datoteke (već u `.gitignore`)
- Dokumentirajte potrebne varijable okoliša u README datotekama projekata

### Python projekti

- Koristite virtualne okoline: `python -m venv venv`
- Održavajte ovisnosti ažuriranima
- GitHub tokeni trebaju imati minimalne potrebne dozvole

### Pristup GitHub Models

- Potrebni su Personal Access Tokens (PAT) za GitHub Models
- Tokeni trebaju biti pohranjeni kao varijable okoliša
- Nikada ne committajte tokene ili vjerodajnice

## Dodatne napomene

### Ciljana publika

- Potpuni početnici u web razvoju
- Učenici i samouki
- Nastavnici koji koriste kurikulum u učionicama
- Sadržaj je dizajniran za pristupačnost i postupno usvajanje vještina

### Obrazovna filozofija

- Pristup učenja temeljen na projektima
- Česte provjere znanja (kvizovi)
- Praktične vježbe kodiranja
- Primjeri iz stvarnog svijeta
- Fokus na osnove prije frameworka

### Održavanje repozitorija

- Aktivna zajednica učenika i suradnika
- Redovita ažuriranja ovisnosti i sadržaja
- Problemi i diskusije pregledavani od strane održavatelja
- Automatska ažuriranja prijevoda putem GitHub Actions

### Povezani resursi

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub resursi](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) preporučen za učenike
- Dodatni tečajevi: Generativni AI, Data Science, ML, IoT kurikulumi dostupni

### Rad sa specifičnim projektima

Za detaljne upute o pojedinim projektima, pogledajte README datoteke u:
- `quiz-app/README.md` - Vue 3 aplikacija za kvizove
- `7-bank-project/README.md` - Bankarska aplikacija s autentifikacijom
- `5-browser-extension/README.md` - Razvoj proširenja preglednika
- `6-space-game/README.md` - Razvoj igre u Canvasu
- `9-chat-project/README.md` - AI chat asistent projekt

### Struktura monorepa

Iako nije tradicionalni monorepo, ovaj repozitorij sadrži više neovisnih projekata:
- Svaka lekcija je samostalna
- Projekti ne dijele ovisnosti
- Radite na pojedinim projektima bez utjecaja na druge
- Klonirajte cijeli repozitorij za cjelokupni kurikulum iskustvo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Odricanje od odgovornosti**:
Ovaj dokument je preveden korištenjem AI usluge prevođenja [Co-op Translator](https://github.com/Azure/co-op-translator). Iako težimo točnosti, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na njegovom izvornom jeziku treba smatrati službenim i autoritativnim izvorom. Za važne informacije preporučuje se profesionalni prijevod čovjeka. Ne snosimo odgovornost za bilo kakve nesporazume ili kriva tumačenja koja proizlaze iz korištenja ovog prijevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->