# AGENTS.md

## Pregled projekta

To je izobraževalno skladišče kurikuluma za učenje osnov spletnega razvoja za začetnike. Kurikulum je obsežen 12-tedenski tečaj, ki ga je razvil Microsoft Cloud Advocates in vsebuje 24 praktičnih lekcij o JavaScriptu, CSS-u in HTML-u.

### Ključne sestavine

- **Izobraževalna vsebina**: 24 strukturiranih lekcij organiziranih v modulih na osnovi projektov
- **Praktični projekti**: Terrarium, Typing Game, Razširitev brskalnika, Space Game, Banking App, Urejevalnik kode in AI Chat Assistant
- **Interaktivni kvizi**: 48 kvizov s po 3 vprašanji (pred/post-ocenjevanje lekcij)
- **Podpora za več jezikov**: Samodejni prevodi v več kot 50 jezikov preko GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Izobraževalno skladišče z lekcijsko zasnovo
- Vsaka mapa lekcije vsebuje README, primer kode in rešitve
- Samostojni projekti v ločenih imenikih (quiz-app, različni lekcijski projekti)
- Sistem prevajanja z uporabo GitHub Actions (co-op-translator)
- Dokumentacija strežena preko Docsify in na voljo kot PDF

## Ukazi za namestitev

To skladišče je namenjeno predvsem za izobraževalno porabo vsebin. Za delo s specifičnimi projekti:

### Glavna nastavitev skladišča

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavitev Quiz Aplikacije (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Zaženi razvojni strežnik
npm run build      # Zgradi za produkcijo
npm run lint       # Zaženi ESLint
```

### API za Bankarski projekt (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Zaženi API strežnik
npm run lint       # Zaženi ESLint
npm run format     # Formatiraj s Prettierjem
```

### Projekti razširitev brskalnika

```bash
cd 5-browser-extension/solution
npm install
# Sledite navodilom za nalaganje razširitve, ki so specifična za brskalnik
```

### Projekti Space Game

```bash
cd 6-space-game/solution
npm install
# Odprite index.html v brskalniku ali uporabite Live Server
```

### Chat projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavite spremenljivko okolja GITHUB_TOKEN
python api.py
```

## Razvojni potek

### Za prispevavce vsebin

1. **Forkajte skladišče** na svoj GitHub račun
2. **Klonirajte svoj fork** lokalno
3. **Ustvarite novo vejo** za svoje spremembe
4. Spreminjajte vsebino lekcije ali primere kode
5. Preizkusite spremembe v relevantnih projektnih mapah
6. Pošljite pull requeste skladno s pravili prispevkov

### Za učence

1. Forkajte ali klonirajte skladišče
2. Zaporedno se pomikajte skozi lekcijske mape
3. Preberite datoteke README za vsako lekcijo
4. Opravite pred-lekcijske kvize na https://ff-quizzes.netlify.app/web/
5. Izvedite primere kode v lekcijskih mapah
6. Opravite domače naloge in izzive
7. Opravite post-lekcijske kvize

### Razvoj v živo

- **Dokumentacija**: Zaženite `docsify serve` v korenskem imeniku (port 3000)
- **Quiz Aplikacija**: Zaženite `npm run dev` v imeniku quiz-app
- **Projekti**: Uporabite razširitev VS Code Live Server za HTML projekte
- **API Projekti**: Zaženite `npm start` v ustreznih API imenikih

## Navodila za testiranje

### Testiranje Quiz aplikacije

```bash
cd quiz-app
npm run lint       # Preveri težave s slogom kode
npm run build      # Preveri, da je gradnja uspešna
```

### Testiranje Bank API

```bash
cd 7-bank-project/api
npm run lint       # Preveri težave s slogom kode
node server.js     # Preveri, ali se strežnik zažene brez napak
```

### Splošen pristop testiranja

- To je izobraževalno skladišče brez obsežnih avtomatiziranih testov
- Ročno testiranje se osredotoča na:
  - Koda se izvaja brez napak
  - Povezave v dokumentaciji delujejo pravilno
  - Projekti se uspešno zgradijo
  - Primeri sledijo dobrim praksam

### Preverjanja pred oddajo

- Zaženite `npm run lint` v imenikih z package.json
- Preverite, da so markdown povezave veljavne
- Preizkusite primere kode v brskalniku ali Node.js
- Preverite, da prevodi ohranjajo pravilno strukturo

## Smernice za slog kode

### JavaScript

- Uporabljajte sodobno sintakso ES6+
- Sledite standardnim konfiguracijam ESLint v projektih
- Uporabljajte smiselna imena spremenljivk in funkcij za jasnost
- Dodajte komentarje, ki razlagajo pojme za učence
- Formatirajte s Prettier, kjer je nastavljeno

### HTML/CSS

- Semantični HTML5 elementi
- Principi odzivnega oblikovanja
- Jasne konvencije za poimenovanje razredov
- Komentarji, ki pojasnjujejo CSS tehnike za učence

### Python

- Smernice sloga PEP 8
- Jasni, izobraževalni primeri kode
- Tipizacije, kjer so koristne za učenje

### Markdown dokumentacija

- Jasna hierarhija naslovov
- Bloki kode z navedbo jezika
- Povezave do dodatnih virov
- Posnetki zaslona in slike v mapah `images/`
- Alt besedilo za slike za dostopnost

### Organizacija datotek

- Lekcije oštevilčene zaporedno (1-getting-started-lessons, 2-js-basics, itd.)
- Vsak projekt ima mape `solution/` in pogosto `start/` ali `your-work/`
- Slike shranjene v lekcijsko specifičnih mapah `images/`
- Prevodi v strukturi `translations/{language-code}/`

## Izgradnja in nameščanje

### Namestitev Quiz aplikacije (Azure Static Web Apps)

Quiz-aplikacija je konfigurirana za nameščanje na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Ustvari mapo dist/
# Izvede nameščanje prek GitHub Actions delovnega toka ob potisku v main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Izhodna lokacija**: `dist`
- **Delovni tok**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Namestite docsify-to-pdf
npm run convert               # Ustvari PDF iz docs
```

### Dokumentacija Docsify

```bash
npm install -g docsify-cli    # Namestite Docsify globalno
docsify serve                 # Postrezite na localhost:3000
```

### Specifične gradnje projektov

Vsaka projektna mapa ima lahko lasten postopek gradnje:
- Vue projekti: `npm run build` ustvarja produkcijske pakete
- Statični projekti: brez gradnje, datoteke strežete neposredno

## Pravila za pull requeste

### Oblika naslova

Uporabljajte jasne, opisne naslove, ki kažejo področje spremembe:
- `[Quiz-app] Dodaj nov kviz za lekcijo X`
- `[Lesson-3] Popravi tipkarsko napako v terrarium projektu`
- `[Translation] Dodaj španski prevod za lekcijo 5`
- `[Docs] Posodobitev navodil za namestitev`

### Zahtevane kontrole

Pred oddajo PR:

1. **Kakovost kode**:
   - Zaženite `npm run lint` v prizadetih imenikih
   - Odpravite vse napake in opozorila

2. **Preverjanje gradnje**:
   - Zaženite `npm run build`, če je potrebno
   - Zagotovite, da ni napak pri gradnji

3. **Preverjanje povezav**:
   - Testirajte vse markdown povezave
   - Preverite delovanje referenc slik

4. **Pregled vsebine**:
   - Preverite pravopis in slovnico
   - Zagotovite pravilnost in izobraževalno vrednost primerov kode
   - Preverite, da prevodi ohranjajo prvotni pomen

### Zahteve za prispevek

- Strinjajte se z Microsoft CLA (avtomatska kontrola ob prvem PR)
- Sledite [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Oglejte si [CONTRIBUTING.md](./CONTRIBUTING.md) za podrobna navodila
- V opisu PR navedite številke issuejev, kjer je primerno

### Postopek pregleda

- PR-e pregledajo vzdrževalci in skupnost
- Prioriteta je izobraževalna jasnost
- Primeri kode naj sledijo trenutnim najboljšim praksam
- Prevodi pregledani zaradi natančnosti in kulturne ustreznosti

## Sistem prevajanja

### Avtomatski prevod

- Uporablja GitHub Actions z delovnim tokov co-op-translator
- Samodejno prevaja v več kot 50 jezikov
- Izvorne datoteke v glavnih imenikih
- Prevedene datoteke v mapah `translations/{language-code}/`

### Dodajanje ročnih izboljšav prevoda

1. Poiščite datoteko v `translations/{language-code}/`
2. Izboljšajte vsebino, ohranjajte strukturo
3. Zagotovite delovanje primerov kode
4. Testirajte lokalizirano vsebino kviza

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

## Razhroščevanje in odpravljanje težav

### Pogoste težave

**Quiz aplikacija se ne zažene**:
- Preverite verzijo Node.js (priporočeno v14+)
- Izbrišite `node_modules` in `package-lock.json`, nato zaženite `npm install`
- Preverite konflikte vrat (privzeto: Vite uporablja port 5173)

**API strežnik se ne zažene**:
- Preverite, da je verzija Node.js >=10
- Preverite, če vrata že niso v uporabi
- Zagotovite, da so vse odvisnosti nameščene z `npm install`

**Razširitev brskalnika se ne naloži**:
- Preverite pravilnost formata manifest.json
- Preglejte konzolo brskalnika za napake
- Upoštevajte navodila za namestitev razširitve za določen brskalnik

**Težave s Python chat projektom**:
- Preverite, da je nameščen OpenAI paket: `pip install openai`
- Preverite, da je nastavljena okoljska spremenljivka GITHUB_TOKEN
- Preverite dovoljenja za dostop do GitHub modelov

**Docsify ne streže dokumentacije**:
- Namestite docsify-cli globalno: `npm install -g docsify-cli`
- Zaženite v korenskem imeniku skladišča
- Preverite, da obstaja `docs/_sidebar.md`

### Nasveti za razvojno okolje

- Uporabljajte VS Code z razširitvijo Live Server za HTML projekte
- Namestite razširitve ESLint in Prettier za enotno oblikovanje
- Uporabite brskalniška orodja za razvijalce za razhroščevanje JavaScript-a
- Za Vue projekte namestite Vue DevTools razširitev za brskalnik

### Razmisleki o zmogljivosti

- Veliko število prevedenih datotek (več kot 50 jezikov) pomeni velike klone
- Za delo le z vsebino uporabite plitek klon: `git clone --depth 1`
- Izključite prevode iz iskanja med delom na angleški vsebini
- Gradnje so lahko počasne ob prvem zagonu (npm install, Vite build)

## Varnostni vidiki

### Okoljske spremenljivke

- Nikoli ne komitirajte API ključev v repozitorij
- Uporabljajte `.env` datoteke (že v `.gitignore`)
- Dokumentirajte potrebne okoljske spremenljivke v README-jih projektov

### Python projekti

- Uporabljajte virtualna okolja: `python -m venv venv`
- Redno posodabljajte odvisnosti
- GitHub žetoni naj imajo minimalna potrebna dovoljenja

### Dostop do GitHub modelov

- Za GitHub modele so potrebni osebni dostopni žetoni (PAT)
- Žetone shranjujte v okoljske spremenljivke
- Nikoli ne komitirajte žetonov ali poverilnic

## Dodatne opombe

### Ciljna publika

- Popolni začetniki pri spletnem razvoju
- Študentje in samouki
- Učitelji, ki uporabljajo kurikulum v učilnicah
- Vsebina je zasnovana za dostopnost in postopno gradnjo znanja

### Filozofija izobraževanja

- Pristop učenja na osnovi projektov
- Pogoste preveritve znanja (kvizi)
- Praktične vaje programiranja
- Primeri uporabe v realnem svetu
- Osredotočenost na osnove pred ogrodji

### Vzdrževanje skladišča

- Aktivna skupnost učencev in prispevavcev
- Redne posodobitve odvisnosti in vsebine
- Vzdrževalci spremljajo issueje in razprave
- Posodobitve prevodov avtomatizirane z GitHub Actions

### Povezani viri

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub viri](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) priporočeno za učence
- Dodatni tečaji: Generativna AI, Podatkovna znanost, ML, IoT kurikulumi na voljo

### Delo s specifičnimi projekti

Za podrobna navodila o posameznih projektih si oglejte README datoteke:
- `quiz-app/README.md` - Vue 3 quiz aplikacija
- `7-bank-project/README.md` - Bančniška aplikacija z avtentikacijo
- `5-browser-extension/README.md` - Razvoj razširitev za brskalnik
- `6-space-game/README.md` - Razvoj igre na osnovi canvas-a
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Struktura monorepo skladišča

Čeprav ni tradicionalni monorepo, to skladišče vsebuje več samostojnih projektov:
- Vsaka lekcija je samostojna
- Projekti ne delijo odvisnosti
- Delo na posameznih projektih brez vpliva na druge
- Klonirajte celotno skladišče za celoten kurikulum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo AI prevajalske storitve [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da avtomatizirani prevodi lahko vsebujejo napake ali netočnosti. Izvirni dokument v izvorni jezik velja za uradni vir. Za kritične informacije priporočamo strokoven človeški prevod. Za morebitne nesporazume ali napačne interpretacije, ki izhajajo iz uporabe tega prevoda, ne prevzemamo odgovornosti.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->