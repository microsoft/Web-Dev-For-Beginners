# AGENTS.md

## Pregled projekta

To je repozitorij izobraževalnega kurikuluma za učenje osnov spletnega razvoja za začetnike. Kurikulum je celovit 12-tedenski tečaj, ki ga je razvila skupina Microsoft Cloud Advocates in vsebuje 24 praktičnih lekcij o JavaScriptu, CSS-u in HTML-u.

### Ključne Komponente

- **Izobraževalna vsebina**: 24 strukturiranih lekcij organiziranih v projektno usmerjene module
- **Praktični projekti**: Terrarium, Igra tipkanja, Razširitev brskalnika, Igra v vesolju, Bančni app, Urejevalnik kode in AI klepetalni pomočnik
- **Interaktivni kvizi**: 48 kvizov s po 3 vprašanji (pred/po lekciji)
- **Večjezična podpora**: avtomatski prevodi za več kot 50 jezikov preko GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Izobraževalni repozitorij z organizacijo po lekcijah
- Vsaka mapa lekcije vsebuje README, primere kode in rešitve
- Samostojni projekti v ločenih imenikih (quiz-app, različni projekti lekcij)
- Sistem za prevode z uporabo GitHub Actions (co-op-translator)
- Dokumentacija gostovana preko Docsify in na voljo tudi kot PDF

## Ukazi za nastavitev

Ta repozitorij je namenjen predvsem za porabo izobraževalne vsebine. Za delo s specifičnimi projekti:

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
npm run build      # Izgradi za produkcijo
npm run lint       # Zaženi ESLint
```

### Bančni projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Začni API strežnik
npm run lint       # Zaženi ESLint
npm run format     # Oblikuj s Prettierjem
```

### Projekti razširitve brskalnika

```bash
cd 5-browser-extension/solution
npm install
# Sledite navodilom za nalaganje razširitev, značilnih za brskalnik
```

### Projekti igre v vesolju

```bash
cd 6-space-game/solution
npm install
# Odprite index.html v brskalniku ali uporabite Live Server
```

### Klepetalni projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavite okoljsko spremenljivko GITHUB_TOKEN
python api.py
```

## Razvojni potek dela

### Za prispevatele vsebine

1. **Forkajte repozitorij** v svoj GitHub račun
2. **Klonirajte svoj fork** lokalno
3. **Ustvarite novo vejo** za svoje spremembe
4. Naredite spremembe lekcijske vsebine ali primerov kode
5. Testirajte spremembe kode v ustreznih projektnih mapah
6. Oddajte pull requeste v skladu s pravili prispevkov

### Za učence

1. Forkajte ali klonirajte repozitorij
2. Postopoma pregledujte mape lekcij
3. Berite README datoteke za vsako lekcijo
4. Opravite pred-lesson kvize na https://ff-quizzes.netlify.app/web/
5. Preizkusite primere kode v mapah lekcij
6. Izpolnite naloge in izzive
7. Opravite post-lesson kvize

### Živ razvoj

- **Dokumentacija**: Zaženite `docsify serve` v korenski mapi (port 3000)
- **Quiz App**: Zaženite `npm run dev` v mapi quiz-app
- **Projekti**: Uporabite VS Code Live Server extension za HTML projekte
- **API projekti**: Zaženite `npm start` v ustreznih API mapah

## Navodila za testiranje

### Testiranje Quiz App

```bash
cd quiz-app
npm run lint       # Preverite težave s slogom kode
npm run build      # Potrdite uspešnost gradnje
```

### Testiranje Bank API

```bash
cd 7-bank-project/api
npm run lint       # Preveri težave s slogom kode
node server.js     # Preveri, ali strežnik zažene brez napak
```

### Splošen pristop k testiranju

- To je izobraževalni repozitorij brez obsežnih avtomatiziranih testov
- Ročno testiranje se osredotoča na:
  - Primeri kode naj se izvajajo brez napak
  - Povezave v dokumentaciji delujejo pravilno
  - Projekti naj se uspešno zgradijo
  - Primeri sledijo najboljšim praksam

### Preverjanje pred oddajo

- Zaženite `npm run lint` v mapah z package.json
- Preverite veljavnost markdown povezav
- Testirajte primere kode v brskalniku ali Node.js
- Preverite, da prevodi ohranjajo pravilno strukturo

## Smernice za stil kode

### JavaScript

- Uporabljajte sodobno ES6+ sintakso
- Sledite standardnim ESLint nastavitvam, ki so v projektih
- Uporabljajte smiselne imena spremenljivk in funkcij za jasnost izobraževanja
- Dodajte komentarje, ki pojasnjujejo koncepte za učence
- Oblikujte kodo s Prettier tam, kjer je konfiguriran

### HTML/CSS

- Semantični HTML5 elementi
- Principi odzivnega oblikovanja
- Jasne konvencije za poimenovanje razredov
- Komentarji, ki razlagajo CSS tehnike za učence

### Python

- Smernice stila PEP 8
- Jasni, izobraževalni primeri kode
- Tipični namigi, kjer so koristni za učenje

### Markdown dokumentacija

- Jasna hierarhija naslovov
- Bloki kode z določenim jezikom
- Povezave do dodatnih virov
- Posnetki zaslona in slike v `images/` mapah
- Alt besedilo za slike zaradi dostopnosti

### Organizacija datotek

- Lekcije oštevilčene zaporedno (1-getting-started-lessons, 2-js-basics itd.)
- Vsak projekt ima `solution/` in pogosto `start/` ali `your-work/` mape
- Slike shranjene v lekcijsko specifičnih `images/` mapah
- Prevedene različice v `translations/{language-code}/` strukturi

## Gradnja in uvajanje

### Uvajanje Quiz App (Azure Static Web Apps)

Quiz-app je konfiguriran za uvajanje v Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Ustvari mapo dist/
# Izvede namestitev prek GitHub Actions poteka ob pushanju na main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Lokacija izhoda**: `dist`
- **Delovni tok**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Namestite docsify-to-pdf
npm run convert               # Ustvari PDF iz dokumentacije
```

### Dokumentacija Docsify

```bash
npm install -g docsify-cli    # Namestite Docsify globalno
docsify serve                 # Postrežite na localhost:3000
```

### Specifični projekti - gradnje

Vsaka projektna mapa lahko ima svoj postopek gradnje:
- Vue projekti: `npm run build` ustvari produkcijske pakete
- Statični projekti: brez gradbenega koraka, datoteke so služene neposredno

## Pravila za pull requeste

### Oblika naslova

Uporabljajte jasne, opisne naslove, ki označujejo področje spremembe:
- `[Quiz-app] Dodaj nov kviz za lekcijo X`
- `[Lesson-3] Popravi tipkarsko napako v terrarium projektu`
- `[Translation] Dodaj španski prevod za lekcijo 5`
- `[Docs] Posodobi navodila za nastavitev`

### Obvezne kontrole

Pred oddajo PR:

1. **Kakovost kode**:
   - Zaženite `npm run lint` v prizadetih projektnih mapah
   - Odpravite vse napake in opozorila

2. **Preverjanje gradnje**:
   - Zaženite `npm run build`, če velja
   - Zagotovite, da ni napak pri gradnji

3. **Preverjanje povezav**:
   - Testirajte vse markdown povezave
   - Preverite, da slike delujejo

4. **Pregled vsebine**:
   - Preverite pravopis in slovnico
   - Zagotovite pravilnost in izobraževalno vrednost primerov kode
   - Preverite, da prevodi ohranjajo pomen

### Zahteve za prispevanje

- Strinjajte se z Microsoft CLA (avtomatski pregled ob prvem PR)
- Sledite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Preberite [CONTRIBUTING.md](./CONTRIBUTING.md) za podrobne smernice
- Navedite številke vprašanj v opisu PR, če je potrebno

### Proces pregleda

- PR-e pregledajo vzdrževalci in skupnost
- Prednost ima jasnost izobraževanja
- Primeri kode naj sledijo najboljšim aktualnim praksam
- Prevodi se pregledajo zaradi natančnosti in kulturne ustreznosti

## Sistem prevajanja

### Avtomatski prevod

- Uporablja GitHub Actions s co-op-translator delovnim tokom
- Prevede v več kot 50 jezikov samodejno
- Izvorne datoteke v glavnih imenikih
- Prevedene datoteke v `translations/{language-code}/` mapah

### Dodajanje ročnih izboljšav prevoda

1. Poiščite datoteko v `translations/{language-code}/`
2. Naredite izboljšave ob ohranitvi strukture
3. Poskrbite, da primeri kode ostanejo funkcionalni
4. Testirajte lokalizirano vsebino kvizov

### Metapodatki prevoda

Prevedene datoteke vključujejo metapodatkovno glavo:
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

## Odpravljanje napak in težav

### Pogoste težave

**Quiz app ne začne delovati**:
- Preverite različico Node.js (priporočeno v14+)
- Izbrišite `node_modules` in `package-lock.json`, nato ponovno zaženite `npm install`
- Preverite konflikte vrat (privzeto: Vite uporablja vrata 5173)

**API strežnik se ne zažene**:
- Preverite, da je Node.js verzija vsaj 10
- Preverite, ali vrata že niso zasedena
- Prepričajte se, da so vse odvisnosti nameščene z `npm install`

**Razširitev brskalnika se ne naloži**:
- Preverite pravilno oblikovanje manifest.json
- Preverite konzolo brskalnika za napake
- Sledite navodilom za namestitev specifičnim za brskalnik

**Težave s Python klepetalnim projektom**:
- Preverite, da je nameščena knjižnica OpenAI: `pip install openai`
- Preverite, da je okoljska spremenljivka GITHUB_TOKEN nastavljena
- Preverite dovoljenja za dostop do GitHub Models

**Docsify ne streže dokumentacije**:
- Namestite docsify-cli globalno: `npm install -g docsify-cli`
- Zaženite iz korenske mape repozitorija
- Preverite, da obstaja `docs/_sidebar.md`

### Nasveti za razvojno okolje

- Uporabljajte VS Code z Live Server razširitvijo za HTML projekte
- Namestite ESLint in Prettier razširitve za enotno oblikovanje
- Uporabljajte brskalniška orodja za odpravljanje napak v JavaScriptu
- Za Vue projekte namestite Vue DevTools razširitev za brskalnik

### Razmisleki o zmogljivosti

- Veliko število prevedenih datotek (več kot 50 jezikov) pomeni, da so kloni veliki
- Uporabite plitek klon, če delate samo na vsebini: `git clone --depth 1`
- Izključite prevode iz iskanja, če delate na angleški vsebini
- Gradbeni postopki so lahko počasni ob prvem zagonu (npm install, Vite build)

## Varnostni vidiki

### Okoljske spremenljivke

- API ključi se nikoli ne smejo oddajati v repozitorij
- Uporabljajte `.env` datoteke (že vključeno v `.gitignore`)
- Dokumentirajte potrebne okoljske spremenljivke v README-ih posameznih projektov

### Python projekti

- Uporabljajte virtualna okolja: `python -m venv venv`
- Ohranjajte odvisnosti posodobljene
- GitHub žetoni naj imajo minimalna potrebna dovoljenja

### Dostop do GitHub Modelov

- Potrebni so osebni dostopni žetoni (PAT) za GitHub Models
- Žetone shranjujte kot okoljske spremenljivke
- Žetoni ali poverilnice nikoli ne smejo biti oddani

## Dodatne opombe

### Ciljna publika

- Popolni začetniki v spletni razvoj
- Študenti in samouki
- Učitelji, ki uporabljajo kurikulum v razredu
- Vsebina je zasnovana za dostopnost in postopno nadgrajevanje znanja

### Izobraževalna filozofija

- Projektno usmerjen pristop k učenju
- Pogoste kontrole znanja (kvizi)
- Praktične vaje s kodo
- Primeri uporabe iz resničnega sveta
- Osredotočenost na osnove pred okviri

### Vzdrževanje repozitorija

- Aktivna skupnost učencev in prispevateľev
- Redne posodobitve odvisnosti in vsebine
- Spremljanje vprašanj in razprav s strani vzdrževalcev
- Samodejne posodobitve prevodov preko GitHub Actions

### Sorodni viri

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub viri](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) priporočeno za učence
- Dodatni tečaji: Generativni AI, Podatkovna znanost, ML, IoT kurikulumi na voljo

### Delo s specifičnimi projekti

Za podrobna navodila o posameznih projektih glejte README datoteke:
- `quiz-app/README.md` - Vue 3 aplikacija kviza
- `7-bank-project/README.md` - Bančna aplikacija z autentikacijo
- `5-browser-extension/README.md` - Razvoj razširitve brskalnika
- `6-space-game/README.md` - Razvoj igre na platnu (canvas)
- `9-chat-project/README.md` - Projekt AI klepetalnega pomočnika

### Struktura Monorepo

Čeprav ni tipični monorepo, ta repozitorij vsebuje več neodvisnih projektov:
- Vsaka lekcija je samostojna
- Projekti ne delijo odvisnosti
- Delo na posameznih projektih brez vpliva na druge
- Klonirajte celoten repozitorij za celotno izkušnjo kurikuluma

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Opozorilo**:
Ta dokument je bil preveden z uporabo AI prevajalske storitve [Co-op Translator](https://github.com/Azure/co-op-translator). Kljub prizadevanjem za natančnost vas prosimo, da upoštevate, da avtomatizirani prevodi lahko vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku naj velja za avtoritativni vir. Za ključne informacije priporočamo strokovni človeški prevod. Za morebitna nesporazume ali napačne interpretacije, ki izhajajo iz uporabe tega prevoda, ne prevzemamo nobene odgovornosti.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->