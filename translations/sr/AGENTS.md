# AGENTS.md

## Pregled projekta

Ovo je repozitorijum obrazovnog kurikuluma za podučavanje osnova web razvoja za početnike. Kurikulum je sveobuhvatan 12-nedeljski kurs koji su razvili Microsoft Cloud Advocates, i sadrži 24 praktične lekcije koje pokrivaju JavaScript, CSS i HTML.

### Ključne komponente

- **Obrazovni sadržaj**: 24 strukturirane lekcije organizovane u module zasnovane na projektima
- **Praktični projekti**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor i AI Chat Assistant
- **Interaktivni kvizovi**: 48 kvizova sa po 3 pitanja (testovi pre i posle lekcija)
- **Podrška za više jezika**: Automatski prevodi na više od 50 jezika putem GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Obrazovni repozitorijum sa strukturom baziranom na lekcijama
- Svaka fascikla lekcije sadrži README, primere koda i rešenja
- Samostalni projekti u posebnim direktorijumima (quiz-app, različiti projekti lekcija)
- Sistem za prevod koristeći GitHub Actions (co-op-translator)
- Dokumentacija se servisira putem Docsify i dostupna je kao PDF

## Komande za podešavanje

Ovaj repozitorijum je prvenstveno za konzumiranje obrazovnog sadržaja. Za rad sa određenim projektima:

### Podešavanje glavnog repozitorijuma

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Podešavanje Quiz aplikacije (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Покрени сервер за развој
npm run build      # Направи верзију за продукцију
npm run lint       # Покрени ESLint
```

### API Bankarskog projekta (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Покрени API сервер
npm run lint       # Покрени ESLint
npm run format     # Форматирај помоћу Prettier-а
```

### Projekti za Browser Extension

```bash
cd 5-browser-extension/solution
npm install
# Пратите упутства за учитавање екстензија специфичних за претраживач
```

### Projekti za Space Game

```bash
cd 6-space-game/solution
npm install
# Отворите index.html у прегледачу или користите Live Server
```

### Chat projekat (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Поставите GITHUB_TOKEN променљиву окружења
python api.py
```

## Razvojni tok rada

### Za saradnike na sadržaju

1. **Forkujte repozitorijum** na svoj GitHub nalog
2. **Klonirajte vaš fork** lokalno
3. **Kreirajte novu granu** za vaše izmene
4. Izmenite sadržaj lekcija ili primere koda
5. Testirajte bilo koje izmene koda u relevantnim direktorijumima projekata
6. Podnesite pull zahteve u skladu sa smernicama za doprinos

### Za učenike

1. Forkujte ili klonirajte repozitorijum
2. Posetite direktorijume lekcija redom
3. Čitajte README fajlove za svaku lekciju
4. Završite pre-lesson kvizove na https://ff-quizzes.netlify.app/web/
5. Radite kroz primere koda u fasciklama lekcija
6. Završite zadatke i izazove
7. Uradite post-lesson kvizove

### Živi razvoj

- **Dokumentacija**: Pokrenite `docsify serve` u root direktorijumu (port 3000)
- **Quiz App**: Pokrenite `npm run dev` u direktorijumu quiz-app
- **Projekti**: Koristite VS Code Live Server ekstenziju za HTML projekte
- **API Projekti**: Pokrenite `npm start` u odgovarajućim API direktorijumima

## Uputstva za testiranje

### Testiranje Quiz aplikacije

```bash
cd quiz-app
npm run lint       # Провери проблеме у стилу кода
npm run build      # Потврди да израда успешно прође
```

### Testiranje Bank API-ja

```bash
cd 7-bank-project/api
npm run lint       # Проверите стил кода за проблеме
node server.js     # Потврдите да сервер покреће без грешака
```

### Opšti pristup testiranju

- Ovo je obrazovni repozitorijum bez sveobuhvatnih automatizovanih testova
- Ručno testiranje se fokusira na:
  - Primere koda koji rade bez grešaka
  - Linkove u dokumentaciji koji funkcionišu ispravno
  - Uspešne build procese projekata
  - Primeri koji slede najbolje prakse

### Provere pre podnošenja

- Pokrenite `npm run lint` u direktorijumima sa package.json
- Proverite da li su markdown linkovi važeći
- Testirajte primere koda u pregledaču ili Node.js
- Proverite da li prevodi održavaju pravilnu strukturu

## Smernice za stil koda

### JavaScript

- Koristite modernu ES6+ sintaksu
- Pratite standardne ESLint konfiguracije u projektima
- Koristite smislene nazive promenljivih i funkcija radi jasnoće u obrazovanju
- Dodajte komentare koji objašnjavaju koncepte za učenike
- Formatirajte koristeći Prettier tamo gde je konfigurisano

### HTML/CSS

- Semantički HTML5 elementi
- Principi responzivnog dizajna
- Jasne konvencije imenovanja klasa
- Komentari koji objašnjavaju CSS tehnike za učenike

### Python

- PEP 8 smernice za stil
- Jasni, obrazovni primeri koda
- Tipizacija gde je korisno za učenje

### Markdown dokumentacija

- Jasna hijerarhija naslova
- Kod blokovi sa specificiranim jezikom
- Linkovi ka dodatnim resursima
- Snimci ekrana i slike u `images/` direktorijumima
- Alternativni tekst za slike radi pristupačnosti

### Organizacija fajlova

- Lekcije numerisane sekvencijalno (1-getting-started-lessons, 2-js-basics, itd.)
- Svaki projekat ima `solution/` i često `start/` ili `your-work/` direktorijume
- Slike se čuvaju u lekcijsko-specifičnim `images/` fasciklama
- Prevod u strukturi `translations/{language-code}/`

## Izgradnja i implementacija

### Implementacija Quiz aplikacije (Azure Static Web Apps)

quiz-app je konfigurisan za implementaciju na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Креира фасциклу dist/
# Објављује преко GitHub Actions рада на додавање у main грану
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Output lokacija**: `dist`
- **Tok rada**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generisanje PDF dokumentacije

```bash
npm install                    # Инсталирај docsify-to-pdf
npm run convert               # Генериши PDF из документације
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Инсталирајте Docsify глобално
docsify serve                 # Пуштајте на localhost:3000
```

### Build procesi specifični za projekte

Svaki direktorijum projekta može imati svoj build proces:
- Vue projekti: `npm run build` kreira produkcione pakete
- Statički projekti: Nema koraka izgradnje, fajlovi se direktno serviraju

## Smernice za pull zahteve

### Format naslova

Koristite jasne, opisne naslove koji ukazuju na oblast izmene:
- `[Quiz-app] Dodajte novi kviz za lekciju X`
- `[Lesson-3] Ispravka greške u terrarium projektu`
- `[Translation] Dodajte španski prevod za lekciju 5`
- `[Docs] Ažurirajte uputstva za podešavanje`

### Potrebne provere

Pre podnošenja PR:

1. **Kvalitet koda**:
   - Pokrenite `npm run lint` u pogođenim projekt direktorijumima
   - Ispravite sve lint greške i upozorenja

2. **Provera build-a**:
   - Pokrenite `npm run build` ako je potrebno
   - Osigurajte da nema grešaka u build-u

3. **Validacija linkova**:
   - Testirajte sve markdown linkove
   - Proverite da reference slika funkcionišu

4. **Pregled sadržaja**:
   - Pročitajte radi pravopisa i gramatike
   - Osigurajte da su primeri koda ispravni i obrazovni
   - Proverite da prevodi održavaju originalno značenje

### Zahtevi za doprinos

- Prihvatite Microsoft CLA (automatska provera prilikom prvog PR-a)
- Pratite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pogledajte [CONTRIBUTING.md](./CONTRIBUTING.md) za detaljne smernice
- Referencirajte brojeve problema u opisu PR-a ako je primenljivo

### Proces revizije

- PR-ove pregledaju održavaoci i zajednica
- Prioritet je obrazovna jasnoća
- Primeri koda treba da slede najnovije najbolje prakse
- Prevod se proverava za tačnost i kulturnu prikladnost

## Sistem za prevod

### Automatski prevod

- Koristi GitHub Actions sa co-op-translator workflow-om
- Automatski prevodi na više od 50 jezika
- Izvorni fajlovi u glavnim direktorijumima
- Prevedeni fajlovi u `translations/{language-code}/` direktorijumima

### Dodavanje manuelnih poboljšanja prevoda

1. Pronađite fajl u `translations/{language-code}/`
2. Napravite poboljšanja uz očuvanje strukture
3. Osigurajte da primeri koda ostanu funkcionalni
4. Testirajte lokalizovani sadržaj kvizova

### Metapodaci prevoda

Prevedeni fajlovi uključuju zaglavlje sa metapodacima:
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

## Debugovanje i rešavanje problema

### Uobičajeni problemi

**Quiz app ne može da se pokrene**:
- Proverite verziju Node.js (preporučena v14+)
- Obrišite `node_modules` i `package-lock.json`, zatim pokrenite `npm install`
- Proverite sukobe portova (podrazumevano: Vite koristi port 5173)

**API server ne može da se pokrene**:
- Proverite da li je verzija Node.js minimalna (node >=10)
- Proverite da li je port zauzet
- Uverite se da su svi zavisni paketi instalirani sa `npm install`

**Browser extension se ne učitava**:
- Proverite da li je manifest.json pravilno formatiran
- Proverite konzolu browser-a za greške
- Pratite uputstva za instalaciju proširenja specifična za pretraživač

**Problemi sa Python chat projektom**:
- Osigurajte da je instaliran OpenAI paket: `pip install openai`
- Proverite da je postavljena promenljiva okruženja GITHUB_TOKEN
- Proverite dozvole za pristup GitHub Models

**Docsify ne servira dokumentaciju**:
- Instalirajte docsify-cli globalno: `npm install -g docsify-cli`
- Pokrenite iz root direktorijuma repozitorijuma
- Proverite da `docs/_sidebar.md` postoji

### Saveti za razvojno okruženje

- Koristite VS Code sa Live Server ekstenzijom za HTML projekte
- Instalirajte ESLint i Prettier ekstenzije za dosledno formatiranje
- Koristite DevTools u pregledaču za debugovanje JavaScript-a
- Za Vue projekte, instalirajte Vue DevTools ekstenziju za pretraživač

### Razmatranja performansi

- Veliki broj prevedenih fajlova (50+ jezika) znači da su potpuni klonovi veliki
- Koristite plitak klon ako radite samo na sadržaju: `git clone --depth 1`
- Isključite prevode iz pretraga kada radite na engleskom sadržaju
- Build procesi mogu biti spori pri prvom pokretanju (npm install, Vite build)

## Bezbednosna razmatranja

### Promenljive okruženja

- API ključevi nikada ne treba da budu commitovani u repozitorijum
- Koristite `.env` fajlove (već u `.gitignore`)
- Dokumentujte potrebne promenljive okruženja u README fajlovima projekata

### Python projekti

- Koristite virtuelna okruženja: `python -m venv venv`
- Držite zavisnosti ažurnim
- GitHub tokeni treba da imaju minimalne potrebne dozvole

### Pristup GitHub Models

- Personal Access Tokens (PAT) su potrebni za GitHub Models
- Tokeni treba da budu čuvani kao promenljive okruženja
- Nikada nemojte commitovati tokene ili lozinke

## Dodatne napomene

### Ciljna publika

- Potpuni početnici u web razvoju
- Studenti i samouci
- Nastavnici koji koriste kurikulum u učionicama
- Sadržaj je dizajniran za pristupačnost i postepeno sticanje veština

### Obrazovna filozofija

- Pristup učenja zasnovan na projektima
- Česte provere znanja (kvizovi)
- Praktične vežbe programiranja
- Primeri primene u stvarnom svetu
- Fokus na osnove pre okvira

### Održavanje repozitorijuma

- Aktivna zajednica učenika i saradnika
- Redovna ažuriranja zavisnosti i sadržaja
- Održavaoci prate probleme i diskusije
- Ažuriranja prevoda su automatizovana preko GitHub Actions

### Povezani resursi

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub resursi](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) preporučen za učenike
- Dodatni kursevi: Generativni AI, Data Science, ML, IoT kurikulumi dostupni

### Rad sa određenim projektima

Za detaljna uputstva o pojedinačnim projektima, pogledajte README fajlove u:
- `quiz-app/README.md` - Vue 3 aplikacija za kviz
- `7-bank-project/README.md` - Bankarska aplikacija sa autentifikacijom
- `5-browser-extension/README.md` - Razvoj browser ekstenzije
- `6-space-game/README.md` - Razvoj igre bazirane na Canvas-u
- `9-chat-project/README.md` - AI chat asistent projekat

### Struktura monorepozitorijuma

Iako nije tradicionalni monorepo, ovaj repozitorijum sadrži više nezavisnih projekata:
- Svaka lekcija je samostalna
- Projekti ne dele zavisnosti
- Radite na pojedinačnim projektima bez uticaja na ostale
- Klonirajte ceo repozitorijum za potpuno iskustvo kurikuluma

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Одрицање**:
Овај документ је превео вештачки преводилац [Co-op Translator](https://github.com/Azure/co-op-translator). Иако тежимо прецизности, имајте у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом матерњем језику треба сматрати ауторитетним извором. За критичне информације препоручује се професионални људски превод. Нисмо одговорни за било какве неспоразуме или погрешне тумачења настала употребом овог превода.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->