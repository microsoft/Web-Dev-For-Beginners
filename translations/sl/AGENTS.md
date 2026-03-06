# AGENTS.md

## Pregled projekta

To je učni učni načrt za poučevanje osnov razvoja spletnih strani za začetnike. Učni načrt je obsežen 12-tedenski tečaj, ki so ga razvili Microsoft Cloud Advocates in vsebuje 24 praktičnih lekcij, ki pokrivajo JavaScript, CSS in HTML.

### Ključne sestavine

- **Izobraževalna vsebina**: 24 strukturiranih lekcij, organiziranih v module na osnovi projektov
- **Praktični projekti**: Terrarium, Tipkovniška igra, Razširitev brskalnika, Vesoljska igra, Bančniški pripomoček, Urejevalnik kode in AI klepetalni pomočnik
- **Interaktivni kvizi**: 48 kvizov s po 3 vprašanji (ocenjevanje pred/nad lekcijo)
- **Podpora več jezikom**: Avtomatski prevodi za več kot 50 jezikov prek GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Izobraževalno skladišče z strukturo po lekcijah
- Vsaka mapa lekcije vsebuje README, primere kode in rešitve
- Samostojni projekti v ločenih imenikih (quiz-app, različni projektni lekciji)
- Sistem prevajanja z GitHub Actions (co-op-translator)
- Dokumentacija dostopna prek Docsify in kot PDF

## Ukazi za nastavitev

To skladišče je primarno namenjeno za uporabo izobraževalne vsebine. Za delo s specifičnimi projekti:

### Nastavitev glavnega skladišča

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavitev Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Zaženi razvojni strežnik
npm run build      # Zgradi za produkcijo
npm run lint       # Zaženi ESLint
```

### API za bankovni projekt (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Zaženi API strežnik
npm run lint       # Zaženi ESLint
npm run format     # Oblikuj s Prettier
```

### Projekti za razširitve brskalnika

```bash
cd 5-browser-extension/solution
npm install
# Sledite navodilom za nalaganje razširitev, značilnim za brskalnik
```

### Projekti vesoljske igre

```bash
cd 6-space-game/solution
npm install
# Odprite index.html v brskalniku ali uporabite Live Server
```

### Projekt klepetalnega pomočnika (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavite okoljsko spremenljivko GITHUB_TOKEN
python api.py
```

## Razvojni potek dela

### Za prispevajoče vsebino

1. **Razvezi skladišče (fork)** na svoj GitHub račun
2. **Kloniraj svoj fork** lokalno
3. **Ustvari novo vejo** za svoje spremembe
4. Naredi spremembe v vsebini lekcij ali primerih kode
5. Preizkusi spremembe kode v relevantnih projektnikih
6. Pošlji pull requeste v skladu z navodili za prispevke

### Za učence

1. Razvezi ali kloniraj skladišče
2. Postopoma obišči mape lekcij
3. Preberi README datoteke za vsako lekcijo
4. Opravi pred-lekcijske kvize na https://ff-quizzes.netlify.app/web/
5. Prehod skozi primere kode v mapah lekcij
6. Dokončaj naloge in izzive
7. Opravi po-lekcijske kvize

### Živi razvoj

- **Dokumentacija**: Zaženi `docsify serve` v korenski mapi (port 3000)
- **Quiz App**: Zaženi `npm run dev` v mapi quiz-app
- **Projekti**: Uporabi VS Code Live Server razširitev za HTML projekte
- **API projekti**: Zaženi `npm start` v ustreznih API mapah

## Navodila za testiranje

### Testiranje Quiz App

```bash
cd quiz-app
npm run lint       # Preverite težave s slogom kode
npm run build      # Preverite, ali se gradnja uspešno zaključi
```

### Testiranje Bank API

```bash
cd 7-bank-project/api
npm run lint       # Preveri težave s slogom kode
node server.js     # Preveri, da strežnik začne brez napak
```

### Splošni pristop k testiranju

- To je učni repozitorij brez obsežnih avtomatskih testov
- Ročno testiranje se osredotoča na:
  - Primere kode, ki se izvajajo brez napak
  - Delovanje povezav v dokumentaciji
  - Uspešno gradnjo projektov
  - Primeri sledijo najboljšim praksam

### Preverjanja pred oddajo

- Zaženi `npm run lint` v mapah z datoteko package.json
- Preveri, da so markdown povezave veljavne
- Testiraj primere kode v brskalniku ali Node.js
- Preveri, da prevodi ohranjajo pravilno strukturo

## Smernice glede sloga kode

### JavaScript

- Uporabljaj sodoben ES6+ zapis
- Sledi standardnim ESLint konfiguracijam v projektih
- Uporabljaj pomenljive spremenljivke in imena funkcij za jasnost izobraževanja
- Dodaj komentarje za razlago konceptov učencem
- Formatiraj s Prettier, kjer je konfiguriran

### HTML/CSS

- Semantični HTML5 elementi
- Principi odzivnega dizajna
- Jasne konvencije poimenovanja razredov
- Komentarji, ki pojasnjujejo CSS tehnike za učence

### Python

- Smernice sloga PEP 8
- Jasni, izobraževalni primeri kode
- Tipizacije tam, kjer so uporabne za učenje

### Markdown dokumentacija

- Jasna hierarhija naslovov
- Kode v blokih z določeno jezikovno označbo
- Povezave do dodatnih virov
- Posnetki zaslona in slike v imeniku `images/`
- Alt besedilo za slike zaradi dostopnosti

### Organizacija datotek

- Lekcije oštevilčene zaporedno (1-getting-started-lessons, 2-js-basics, itd.)
- Vsak projekt ima mape `solution/` in pogosto `start/` ali `your-work/`
- Slike shranjene v mapah lekcije v `images/`
- Prevodi v strukturi `translations/{language-code}/`

## Gradnja in nameščanje

### Namestitev Quiz App (Azure Static Web Apps)

Quiz-app je konfiguriran za nameščanje na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Ustvari mapo dist/
# Izvede nameščanje prek GitHub Actions poteka dela ob potisku na main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Izhodna lokacija**: `dist`
- **Potek dela**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Namestite docsify-to-pdf
npm run convert               # Ustvari PDF iz docs
```

### Dokumentacija Docsify

```bash
npm install -g docsify-cli    # Namestite Docsify globalno
docsify serve                 # Postrežite na localhost:3000
```

### Gradnje specifične za projekte

Vsak projekt lahko ima svoj postopek gradnje:
- Vue projekti: `npm run build` ustvari produkcijske pakete
- Statični projekti: brez koraka gradnje, streže datoteke neposredno

## Smernice za pull requeste

### Oblika naslova

Uporabi jasne, opisne naslove, ki kažejo področje spremembe:
- `[Quiz-app] Dodaj nov kviz za lekcijo X`
- `[Lesson-3] Popravi tipkarsko napako v projektu terrarium`
- `[Translation] Dodaj španski prevod za lekcijo 5`
- `[Docs] Posodobi navodila za nastavitev`

### Zahtevana preverjanja

Pred oddajo PR:

1. **Kakovost kode**:
   - Zaženi `npm run lint` v prizadetih projektnih mapah
   - Odpravi vse napake in opozorila linterja

2. **Preverjanje gradnje**:
   - Zaženi `npm run build`, če je potrebno
   - Prepričaj se, da ni napak pri gradnji

3. **Preverjanje povezav**:
   - Preizkusi vse markdown povezave
   - Preveri, da so reference na slike delujoče

4. **Pregled vsebine**:
   - Preberi za pravopisne in slovnične napake
   - Preveri pravilnost in izobraževalno vrednost primerov kode
   - Preveri, da prevodi ohranjajo prvotni pomen

### Zahteve za prispevke

- Sprejmi Microsoftovo CLA (avtomatski pregled ob prvem PR)
- Sledi [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Poglej [CONTRIBUTING.md](./CONTRIBUTING.md) za podrobna navodila
- V primeru potrebuje povezave do številk issue v opisu PR

### Postopek pregleda

- PR pregledujejo vzdrževalci in skupnost
- Prednost ima jasnost izobraževalne vsebine
- Primeri kode naj sledijo trenutnim najboljšim praksam
- Prevodi se pregledajo za točnost in kulturno ustreznost

## Sistem prevajanja

### Avtomatizirani prevodi

- Uporablja GitHub Actions z co-op-translator workflow
- Samodejno prevaja v več kot 50 jezikov
- Izvorne datoteke v glavnih mapah
- Prevedene datoteke v mapi `translations/{language-code}/`

### Dodajanje ročnih izboljšav prevodov

1. Najdi datoteko v `translations/{language-code}/`
2. Naredi izboljšave ob ohranjanju strukture
3. Poskrbi, da primeri kode ostanejo funkcionalni
4. Preizkusi vse lokalizirane kviz vsebine

### Metapodatki za prevode

Prevedene datoteke vsebujejo metapodatkovni naslov:
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
- Preveri različico Node.js (priporočen v14+)
- Izbriši `node_modules` in `package-lock.json`, ponovno zaženi `npm install`
- Preveri konflikte vrat (privzeto: Vite uporablja port 5173)

**Strežnik API se ne zažene**:
- Preveri minimalno različico Node.js (node >=10)
- Preveri, če vrata že niso zasedena
- Zagotovi, da so vse odvisnosti nameščene z `npm install`

**Razširitev brskalnika se ne naloži**:
- Preveri, ali je manifest.json pravilno oblikovan
- Preveri napake v konzoli brskalnika
- Sledi navodilom za namestitev razširitve za določen brskalnik

**Težave s projektnim klepetom (Python)**:
- Poskrbi, da je nameščen paket OpenAI: `pip install openai`
- Preveri, da je okoljska spremenljivka GITHUB_TOKEN nastavljena
- Preveri dostopne pravice GitHub Modelov

**Docsify ne streže dokumentacije**:
- Namesti docsify-cli globalno: `npm install -g docsify-cli`
- Zaženi z korenske mape repozitorija
- Preveri, da datoteka `docs/_sidebar.md` obstaja

### Nasveti za razvojno okolje

- Uporabljaj VS Code z Live Server razširitvijo za HTML projekte
- Namesti ESLint in Prettier razširitve za konsistentno oblikovanje
- Uporabi DevTools v brskalniku za odpravljanje napak v JavaScriptu
- Za Vue projekte namesti Vue DevTools razširitev brskalnika

### Upoštevanje zmogljivosti

- Veliko število prevedenih datotek (50+ jezikov) pomeni velike klone
- Uporabi plitek klon, če delaš samo z vsebino: `git clone --depth 1`
- Izključi prevode iz iskanja med delom z angleško vsebino
- Gradbeni procesi so lahko počasni pri prvem zagonu (npm install, Vite build)

## Varnostni ukrepi

### Okoljske spremenljivke

- Ključi API naj nikoli niso vključeni v repozitorij
- Uporabljaj `.env` datoteke (že vključene v `.gitignore`)
- Zabeleži potrebne okoljske spremenljivke v README projektov

### Python projekti

- Uporabljaj virtualna okolja: `python -m venv venv`
- Održi odvisnosti posodobljene
- GitHub tokeni naj imajo minimalne potrebne pravice

### Dostop do GitHub Modelov

- Potrebni so osebni dostopni žetoni (PAT)
- Žetone je treba shranjevati kot okoljske spremenljivke
- Nikoli jih ne vključi v repozitorij ali delilne datoteke

## Dodatne opombe

### Ciljna publika

- Popolni začetniki v razvoju spletnih strani
- Študenti in samostojni učenci
- Učitelji, ki uporabljajo učni načrt v učilnicah
- Vsebina je namenjena dostopnosti in postopnemu razvijanju veščin

### Izobraževalna filozofija

- Pristop učenja na osnovi projektov
- Pogoste preizkuse znanja (kvizi)
- Praktične vaje s kodo
- Prikazi primerov iz resničnega sveta
- Poudarek na osnovah pred okviri

### Vzdrževanje repozitorija

- Aktivna skupnost učencev in prispevkov
- Redne posodobitve odvisnosti in vsebine
- Vzdrževalci spremljajo zadeve in razprave
- Posodobitve prevodov avtomatizirane prek GitHub Actions

### Sorodni viri

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub viri](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) priporočeno za učence
- Dodatni tečaji: Generativna AI, Data Science, ML, IoT učni načrti na voljo

### Delo s specifičnimi projekti

Za podrobna navodila o posameznih projektih glej README datoteke v:
- `quiz-app/README.md` - Vue 3 aplikacija za kvize
- `7-bank-project/README.md` - Bančna aplikacija z avtentikacijo
- `5-browser-extension/README.md` - Razvoj razširitve brskalnika
- `6-space-game/README.md` - Razvoj igre na Canvasu
- `9-chat-project/README.md` - AI klepetalni pomočnik

### Struktura monorepo

Čeprav ni tradicionalni monorep, to skladišče vsebuje več neodvisnih projektov:
- Vsaka lekcija je samostojna
- Projekti ne delijo odvisnosti
- Delo na posameznih projektih brez vpliva na druge
- Kloniraj celotno skladišče za polno učni izkušnjo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Omejitev odgovornosti**:
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas opozarjamo, da avtomatizirani prevodi lahko vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku velja za avtoritativni vir. Za ključne informacije priporočamo strokovni prevod, ki ga opravi človek. Nismo odgovorni za morebitna nesporazumevanja ali napačne interpretacije, ki izhajajo iz uporabe tega prevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->