# AGENTS.md

## Pregled projekta

To je repozitorij izobraževalnega kurikuluma za poučevanje osnov spletnega razvoja začetnikom. Kurikulum je obsežen 12-tedenski tečaj, ki ga je razvila skupina Microsoft Cloud Advocates, in vsebuje 24 praktičnih lekcij o JavaScriptu, CSS-ju in HTML-ju.

### Ključne komponente

- **Izobraževalna vsebina**: 24 strukturiranih lekcij, organiziranih v projektno usmerjene module
- **Praktični projekti**: Terrarij, igra tipkanja, razširitev brskalnika, vesoljska igra, bančna aplikacija, urejevalnik kode in AI klepetalni asistent
- **Interaktivni kvizi**: 48 kvizov s po 3 vprašanji (pred in po lekciji)
- **Večjezična podpora**: Samodejni prevodi v več kot 50 jezikov preko GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Izobraževalni repozitorij z strukturo, osnovano na lekcijah
- Vsaka mapa lekcije vsebuje datoteko README, primerke kode in rešitve
- Samostojni projekti v ločenih imenikih (quiz-app, različni projektni lekcije)
- Sistem prevajanja z GitHub Actions (co-op-translator)
- Dokumentacija postrežena preko Docsify in na voljo kot PDF

## Ukazi za nastavitev

Ta repozitorij je namenjen predvsem za uživanje izobraževalne vsebine. Za delo z določenimi projekti:

### Nastavitev glavnega repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavitev Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Zaženi razvojni strežnik
npm run build      # Sestavi za produkcijo
npm run lint       # Zaženi ESLint
```

### Banka Projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Zaženi API strežnik
npm run lint       # Zaženi ESLint
npm run format     # Oblikuj s Prettierjem
```

### Projekti za razširitev brskalnika

```bash
cd 5-browser-extension/solution
npm install
# Sledite navodilom za nalaganje razširitev, specifičnim za brskalnik
```

### Projekti vesoljske igre

```bash
cd 6-space-game/solution
npm install
# Odprite index.html v brskalniku ali uporabite Live Server
```

### Projekt Klepet (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavite okoljsko spremenljivko GITHUB_TOKEN
python api.py
```

## Razvojni potek

### Za prispevke k vsebini

1. **Forkajte repozitorij** na svoj GitHub račun
2. **Klonirajte svoj fork** lokalno
3. **Ustvarite novo vejo** za svoje spremembe
4. Izvedite spremembe na vsebini lekcij ali primerih kode
5. Testirajte vse spremembe kode v ustreznih projektnih imenikih
6. Pošljite pull request po smernicah za prispevke

### Za učence

1. Forkajte ali klonirajte repozitorij
2. Postopoma obiščite mape lekcij
3. Preberite datoteke README za vsako lekcijo
4. Opravite pred-lekcijske kvize na https://ff-quizzes.netlify.app/web/
5. Delo z izvorno kodo v mapah lekcij
6. Opravite naloge in izzive
7. Opravite po-lekcijske kvize

### Živi razvoj

- **Dokumentacija**: Zaženite `docsify serve` v korenski mapi (port 3000)
- **Quiz App**: Zaženite `npm run dev` v imeniku quiz-app
- **Projekti**: Uporabite razširitev VS Code Live Server za HTML projekte
- **API Projekti**: Zaženite `npm start` v ustreznih API imenikih

## Navodila za testiranje

### Testiranje Quiz App

```bash
cd quiz-app
npm run lint       # Preveri morebitne težave s slogom kode
npm run build      # Preveri, ali je gradnja uspešna
```

### Testiranje Banka API

```bash
cd 7-bank-project/api
npm run lint       # Preverite težave s slogom kode
node server.js     # Preverite, ali se strežnik zažene brez napak
```

### Splošni pristop k testiranju

- To je izobraževalni repozitorij brez obsežnih samodejnih testov
- Ročno testiranje se osredotoča na:
  - Primerke kode tečejo brez napak
  - Povezave v dokumentaciji delujejo pravilno
  - Projekti se uspešno zgradijo
  - Primeri sledijo najboljšim praksam

### Preverjanje pred oddajo

- Zaženite `npm run lint` v imenikih z package.json
- Preverite, da so povezave v markdownu veljavne
- Testirajte primere kode v brskalniku ali Node.js
- Preverite, da prevodi ohranjajo pravilno strukturo

## Smernice za stil kode

### JavaScript

- Uporabljajte sodobno sintakso ES6+
- Sledite standardnim konfiguracijam ESLint, ki so v projektih
- Upodobite razumljiva imena spremenljivk in funkcij za boljšo izobraževalno jasnost
- Dodajte komentarje za razlago konceptov za učence
- Uporabljajte Prettier kjer je konfiguriran

### HTML/CSS

- Semantični elementi HTML5
- Načela odzivne zasnove
- Jasna poimenovanja razredov
- Komentarji, ki pojasnjujejo tehnike CSS za učence

### Python

- Smernice sloga PEP 8
- Jasni, izobraževalni primeri kode
- Tipizacije tam, kjer pomagajo pri učenju

### Markdown dokumentacija

- Jasna hierarhija naslovov
- Bloki kode z označitvijo jezika
- Povezave do dodatnih virov
- Posnetki zaslona in slike v mapah `images/`
- Alt besedilo za slike za dostopnost

### Organizacija datotek

- Lekcije zaporedno številčene (1-getting-started-lessons, 2-js-basics, itd.)
- Vsak projekt ima mape `solution/` in pogosto `start/` ali `your-work/`
- Slike shranjene v lekcijsko-specifičnih mapah `images/`
- Prevodi v strukturi `translations/{jezikovna-koda}/`

## Gradnja in namestitev

### Namestitev Quiz App (Azure Static Web Apps)

Quiz-app je nastavljen za namestitev na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Ustvari mapo dist/
# Izvede namestitev preko GitHub Actions poteka dela ob potisku na main
```

Azure Static Web Apps konfiguracija:
- **Lokacija aplikacije**: `/quiz-app`
- **Izhodna lokacija**: `dist`
- **Delovni potek**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Namestite docsify-to-pdf
npm run convert               # Ustvari PDF iz docs
```

### Dokumentacija Docsify

```bash
npm install -g docsify-cli    # Namestite Docsify globalno
docsify serve                 # Strežite na localhost:3000
```

### Projektno-specifične gradnje

Vsak projekt lahko ima lasten proces gradnje:
- Vue projekti: `npm run build` ustvarja produkcijske pakete
- Statični projekti: brez gradnje, datoteke se postrežejo neposredno

## Smernice za pull requeste

### Oblika naslova

Uporabljajte jasne, opisne naslove, ki označujejo področje sprememb:
- `[Quiz-app] Dodaj nov kviz za lekcijo X`
- `[Lesson-3] Popravi tipkarsko napako v projektu terrarij`
- `[Translation] Dodaja španski prevod za lekcijo 5`
- `[Docs] Posodobitev navodil za nastavitev`

### Zahtevana preverjanja

Pred oddajo PR:

1. **Kakovost kode**:
   - Zaženite `npm run lint` v prizadetih projektnih imenikih
   - Popravite vse napake in opozorila linterja

2. **Preverjanje gradnje**:
   - Zaženite `npm run build`, če je potrebno
   - Zagotovite, da ni napak pri gradnji

3. **Preverjanje povezav**:
   - Testirajte vse povezave v markdownu
   - Preverite, da reference do slik delujejo

4. **Pregled vsebine**:
   - Preverite pravopis in slovnico
   - Prepričajte se, da so primeri kode pravilni in izobraževalni
   - Preverite, da prevodi ohranjajo prvotni pomen

### Zahteve za prispevek

- Soglasje z Microsoft CLA (samodejno preverjanje ob prvem PR-ju)
- Sledite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Ogled [CONTRIBUTING.md](./CONTRIBUTING.md) za podrobna navodila
- V opis PR vključite številke zadev, če je primerno

### Postopek pregleda

- PR-e pregledujejo vzdrževalci in skupnost
- Prioriteta je izobraževalna jasnost
- Primeri kode naj sledijo sodobnim najboljšim praksam
- Prevodi se pregledajo glede natančnosti in kulturne primernosti

## Sistem za prevajanje

### Samodejni prevod

- Uporablja GitHub Actions z delovnim tokom co-op-translator
- Prevede v več kot 50 jezikov samodejno
- Izvorne datoteke v glavnih imenikih
- Prevedene datoteke v imenikih `translations/{jezikovna-koda}/`

### Dodajanje ročnih izboljšav prevoda

1. Poiščite datoteko v `translations/{jezikovna-koda}/`
2. Izvedite izboljšave ob ohranjanju strukture
3. Poskrbite, da primeri kode ostanejo funkcionalni
4. Testirajte vsak lokalizirani kviz

### Metapodatki prevoda

Prevedene datoteke vsebujejo glavo z metapodatki:
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

## Odpravljanje napak in reševanje težav

### Pogoste težave

**Quiz app se ne zažene**:
- Preverite verzijo Node.js (priporočeno v14+)
- Izbrišite `node_modules` in `package-lock.json`, znova zaženite `npm install`
- Preverite konflikte porte (privzeto: Vite uporablja port 5173)

**API strežnik se ne zažene**:
- Preverite, da verzija Node.js ustreza minimalni zahtevani (node >=10)
- Preverite, ali je port že zaseden
- Preverite, da so vse odvisnosti nameščene z `npm install`

**Razširitev brskalnika se ne naloži**:
- Preverite, da je manifest.json pravilno oblikovan
- Preverite konzolo brskalnika za napake
- Sledite navodilom za namestitev, specifičnim za brskalnik

**Težave s Python klepetalnim projektom**:
- Poskrbite, da je paket OpenAI nameščen: `pip install openai`
- Preverite, da je okoljska spremenljivka GITHUB_TOKEN nastavljena
- Preverite dostopna dovoljenja za GitHub Models

**Docsify ne postreže dokumentacije**:
- Namestite docsify-cli globalno: `npm install -g docsify-cli`
- Zaženite z korenske mape repozitorija
- Preverite, da datoteka `docs/_sidebar.md` obstaja

### Nasveti za razvojno okolje

- Uporabljajte VS Code z razširitvijo Live Server za HTML projekte
- Namestite razširitve ESLint in Prettier za dosledno oblikovanje
- Uporabite orodja brskalnika za odpravljanje napak v JavaScriptu
- Za Vue projekte namestite Vue DevTools razširitev za brskalnik

### Razmisleki o zmogljivosti

- Veliko število prevedenih datotek (več kot 50 jezikov) pomeni, da so kloni veliki
- Za delo samo z vsebino uporabite plitek klon: `git clone --depth 1`
- Izključite prevode iz iskanja, ko delate v angleški vsebini
- Procesi gradnje so lahko počasni pri prvem zagonu (npm install, Vite build)

## Varnostni vidiki

### Okoljske spremenljivke

- API ključi se nikoli ne smejo shranjevati v repozitorij
- Uporabljajte `.env` datoteke (že dodane v `.gitignore`)
- Dokumentirajte zahtevane okoljske spremenljivke v README-jih projektov

### Python projekti

- Uporabljajte virtualna okolja: `python -m venv venv`
- Posodabljajte odvisnosti
- GitHub tokeni naj imajo minimalna potrebna dovoljenja

### Dostop do GitHub Models

- Za GitHub Models so potrebni osebni dostopni žetoni (PAT)
- Ti žetoni naj se shranjujejo kot okoljske spremenljivke
- Žetonov ali poverilnic nikoli ne oddajajte v repozitorij

## Dodatne opombe

### Ciljna publika

- Popolni začetniki v spletni razvoj
- Študenti in samostojni učenci
- Učitelji, ki uporabljajo kurikulum v razredih
- Vsebina je zasnovana za dostopnost in postopno nabiranje znanja

### Izobraževalna filozofija

- Pristop učenja na podlagi projektov
- Pogoste preveritve znanja (kvizi)
- Praktične vaje kodiranja
- Primeri iz resničnega sveta
- Osredotočenost na osnove pred okvirji (frameworki)

### Vzdrževanje repozitorija

- Aktivna skupnost učencev in prispevkarjev
- Redne posodobitve odvisnosti in vsebine
- Spremljanje zadev in razprav s strani vzdrževalcev
- Prevodi se posodabljajo samodejno preko GitHub Actions

### Povezani viri

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub viri](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) priporočeno za učence
- Dodatni tečaji: Generativna umetna inteligenca, podatkovna znanost, ML, IoT kurikuli na voljo

### Delo z določenimi projekti

Za podrobna navodila o posameznih projektih si oglejte datoteke README v:
- `quiz-app/README.md` - Vue 3 aplikacija za kvize
- `7-bank-project/README.md` - Bančna aplikacija z avtentikacijo
- `5-browser-extension/README.md` - Razvoj razširitve brskalnika
- `6-space-game/README.md` - Razvoj igre na podlagi Canvas
- `9-chat-project/README.md` - Projekt AI klepetalnega asistenta

### Struktura Monorepo

Čeprav ni tradicionalni monorepo, ta repozitorij vsebuje več neodvisnih projektov:
- Vsaka lekcija je samostojna
- Projekti ne delijo odvisnosti
- Delajte na posameznih projektih brez vpliva na druge
- Klonite celoten repozitorij za popolno izkušnjo kurikuluma

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za strojno prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za pravilnost, upoštevajte, da avtomatizirani prevodi lahko vsebujejo napake ali netočnosti. Izvirni dokument v svojem matičnem jeziku velja za avtoritativni vir. Za kritične informacije priporočamo strokovni človeški prevod. Za morebitna nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda, ne odgovarjamo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->