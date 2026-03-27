# AGENTS.md

## Pregled projekta

To je repozitorij izobraževalnega učnega načrta za poučevanje osnov spletnega razvoja za začetnike. Učni načrt je obsežen 12-tedenski tečaj, ki so ga razvili Microsoft Cloud Advocates, in vsebuje 24 praktičnih lekcij, ki pokrivajo JavaScript, CSS in HTML.

### Ključne sestavine

- **Izobraževalna vsebina**: 24 strukturiranih lekcij, organiziranih v module, ki temeljijo na projektih
- **Praktični projekti**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor in AI Chat Assistant
- **Interaktivni kvizi**: 48 kvizov s po 3 vprašanji (ocenjevanje pred/potem lekcije)
- **Večjezična podpora**: Avtomatizirani prevodi za več kot 50 jezikov preko GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Izobraževalni repozitorij z strukturo, ki temelji na lekcijah
- Vsaka mapa lekcije vsebuje README, primere kode in rešitve
- Samostojni projekti v ločenih imenikih (quiz-app, različni lekcijski projekti)
- Sistem prevajanja, ki uporablja GitHub Actions (co-op-translator)
- Dokumentacija je dostopna preko Docsify in na voljo kot PDF

## Ukazi za nastavitev

Ta repozitorij je namenjen predvsem za uporabo izobraževalne vsebine. Za delo s specifičnimi projekti:

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
npm run build      # Gradnja za produkcijo
npm run lint       # Zaženi ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Zaženi API strežnik
npm run lint       # Zaženi ESLint
npm run format     # Oblikuj s Prettierjem
```

### Projekti za razširitve brskalnika

```bash
cd 5-browser-extension/solution
npm install
# Sledite navodilom za nalaganje razširitev, specifičnih za brskalnik
```

### Projekti igre Space Game

```bash
cd 6-space-game/solution
npm install
# Odprite index.html v brskalniku ali uporabite Live Server
```

### Chat projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavite okoljsko spremenljivko GITHUB_TOKEN
python api.py
```

## Razvojni potek dela

### Za prispevke vsebin

1. **Razveji repozitorij** na svoj GitHub račun
2. **Kloniraj svoj razvej** lokalno
3. **Ustvari novo vejo** za svoje spremembe
4. Naredi spremembe v vsebini lekcij ali primerih kode
5. Preizkusi spremembe kode v relevantnih projektnih imenikih
6. Pošlji pull requeste skladno z navodili za prispevke

### Za učence

1. Razveji ali kloniraj repozitorij
2. Po vrsti obišči imenike lekcij
3. Preberi README datoteke za vsako lekcijo
4. Izpolni pred-lekcijske kvize na https://ff-quizzes.netlify.app/web/
5. Delaj skozi primere kode v mapah lekcij
6. Naredi naloge in izzive
7. Reši post-lekcijske kvize

### Razvoj v živo

- **Dokumentacija**: zaženi `docsify serve` v korenski mapi (port 3000)
- **Quiz App**: zaženi `npm run dev` v imeniku quiz-app
- **Projekti**: uporabi VS Code Live Server razširitev za HTML projekte
- **API projekti**: zaženi `npm start` v ustreznih API imenikih

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
node server.js     # Preveri, če strežnik zažene brez napak
```

### Splošen pristop k testiranju

- To je izobraževalni repozitorij brez celovitih avtomatiziranih testov
- Ročno testiranje se osredotoča na:
  - Primeri kode se izvajajo brez napak
  - Povezave v dokumentaciji delujejo pravilno
  - Projekti se uspešno zgradijo
  - Primeri sledijo najboljšim praksam

### Preverjanja pred oddajo

- Zaženi `npm run lint` v imenikih, kjer je package.json
- Preveri, da so markdown povezave veljavne
- Testiraj primere kode v brskalniku ali Node.js
- Preveri, da prevodi ohranjajo pravilno strukturo

## Smernice za stil kode

### JavaScript

- Uporabi sodobno sintakso ES6+
- Sledi standardnim ESLint konfiguracijam, predvidenim v projektih
- Uporabi smiselna imena spremenljivk in funkcij za jasnost izobraževanja
- Dodaj komentarje, ki pojasnjujejo koncepte za učence
- Formatiraj z uporabo Prettier, kjer je konfigurirano

### HTML/CSS

- Semantični HTML5 elementi
- Principi odzivnega oblikovanja
- Jasne konvencije poimenovanja razredov
- Komentarji, ki pojasnjujejo CSS tehnike za učence

### Python

- Smernice za stil PEP 8
- Jasni, izobraževalni primeri kode
- Tipizacije tam, kjer pomagajo pri učenju

### Markdown dokumentacija

- Jasna hierarhija naslovov
- Bloki kode z označevanjem jezika
- Povezave do dodatnih virov
- Posnetki zaslona in slike v imenikih `images/`
- Alt besedila za slike za dostopnost

### Organizacija datotek

- Lekcije so zaporedno oštevilčene (1-getting-started-lessons, 2-js-basics itd.)
- Vsak projekt ima imenike `solution/` in pogosto `start/` ali `your-work/`
- Slike so shranjene v lekcijsko specifičnih mapah `images/`
- Prevodi so v strukturi `translations/{language-code}/`

## Gradnja in namestitev

### Namestitev Quiz App (Azure Static Web Apps)

quiz-app je konfiguriran za namestitev v Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Ustvari mapo dist/
# Izvede nameščanje preko GitHub Actions toka dela ob potisku na main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Izhodna lokacija**: `dist`
- **Potek dela**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Namestite docsify-to-pdf
npm run convert               # Ustvarite PDF iz docs
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Namestite Docsify globalno
docsify serve                 # Strežite na localhost:3000
```

### Gradnja specifičnih projektov

Vsak projektni imenik lahko vsebuje svoj gradbeni postopek:
- Vue projekti: `npm run build` ustvari produkcijske pakete
- Statični projekti: brez gradbenega koraka, streže datoteke neposredno

## Navodila za pull requeste

### Oblika naslova

Uporabi jasne, opisne naslove, ki označujejo področje spremembe:
- `[Quiz-app] Dodaj nov kviz za lekcijo X`
- `[Lesson-3] Popravi tipkarsko napako v projektu terrarium`
- `[Translation] Dodaj španski prevod za lekcijo 5`
- `[Docs] Posodobi navodila za nastavitev`

### Zahtevana preverjanja

Pred oddajo PR:

1. **Kakovost kode**:
   - Zaženi `npm run lint` v prizadetih imenikih projektov
   - Odpravi vse napake in opozorila linterja

2. **Preverjanje gradnje**:
   - Zaženi `npm run build`, če je primerno
   - Zagotovi, da ni napak pri gradnji

3. **Preverjanje povezav**:
   - Preizkusi vse markdown povezave
   - Preveri delovanje slikovnih referenc

4. **Pregled vsebine**:
   - Preveri pravopis in slovnico
   - Zagotovi, da so primeri kode pravilni in izobraževalni
   - Preveri, da prevodi ohranjajo prvotni pomen

### Zahteve za prispevanje

- Strinjaj se z Microsoft CLA (avtomatska preverba ob prvem PR)
- Sledi [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Preberi [CONTRIBUTING.md](./CONTRIBUTING.md) za podrobna navodila
- V opisu PR po potrebi navedi številke issue-jev

### Proces pregleda

- PR-je pregledujejo vzdrževalci in skupnost
- Prioriteta je izobraževalna jasnost
- Primeri kode naj sledijo trenutnim najboljšim praksam
- Prevodi se pregledajo za točnost in kulturno ustreznost

## Sistem prevajanja

### Avtomatiziran prevod

- Uporablja GitHub Actions z delovnim tokom co-op-translator
- Samodejno prevaja v več kot 50 jezikov
- Izvorne datoteke v glavnih imenikih
- Prevedene datoteke v `translations/{language-code}/` imenikih

### Dodajanje ročnih izboljšav prevoda

1. Najdi datoteko v `translations/{language-code}/`
2. Izvedi izboljšave ob ohranjanju strukture
3. Poskrbi, da primeri kode ostanejo funkcionalni
4. Preizkusi vse lokalizirane vsebine kviza

### Metapodatki prevoda

Prevedene datoteke vsebujejo glavo metapodatkov:  
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

**Quiz aplikacija se ne zažene**:
- Preveri različico Node.js (priporočeno v14+)
- Izbriši `node_modules` in `package-lock.json`, znova zaženi `npm install`
- Preveri, ali je vrata v uporabi (privzeto Vite uporablja vrata 5173)

**API strežnik se ne zažene**:
- Preveri, da je različica Node.js ustrezna (node >=10)
- Preveri, če vrata niso že zasedena
- Poskrbi, da so vse odvisnosti nameščene z `npm install`

**Razširitev brskalnika se ne naloži**:
- Preveri pravilno oblikovan manifest.json
- Preveri konzolo brskalnika za napake
- Sledi navodilom za namestitev razširitve specifične za brskalnik

**Težave s Python chat projektom**:
- Preveri, da je nameščen paket OpenAI: `pip install openai`
- Preveri, da je nastavljena okoljska spremenljivka GITHUB_TOKEN
- Preveri dovoljenja za dostop do GitHub Modelov

**Docsify ne streže dokumentacije**:
- Namesti docsify-cli globalno: `npm install -g docsify-cli`
- Zaženi iz korenske mape repozitorija
- Preveri, da obstaja `docs/_sidebar.md`

### Nasveti za razvojno okolje

- Uporabi VS Code z razširitvijo Live Server za HTML projekte
- Namesti razširitve ESLint in Prettier za dosledno formatiranje
- Uporabi DevTools brskalnika za odpravljanje napak v JavaScriptu
- Za Vue projekte namesti Vue DevTools brskalniško razširitev

### Premisleki glede zmogljivosti

- Veliko število prevedenih datotek (več kot 50 jezikov) pomeni, da so popolni kloni veliki
- Za delo le z vsebino uporabi plitev klon: `git clone --depth 1`
- Prevode izključi iz iskanja pri delu z angleško vsebino
- Gradbeni procesi so lahko počasni ob prvi izvedbi (npm install, Vite build)

## Varnostni premisleki

### Okoljske spremenljivke

- Ključi API naj nikoli ne bodo dodani v repozitorij
- Uporabljaj `.env` datoteke (že vključene v `.gitignore`)
- Dokumentiraj zahtevane okoljske spremenljivke v README projektov

### Python projekti

- Uporabi virtualna okolja: `python -m venv venv`
- Redno posodabljaj odvisnosti
- GitHub tokeni naj imajo minimalna potrebna dovoljenja

### Dostop do GitHub Modelov

- Potrebni so osebni dostopni tokeni (PAT) za GitHub Modelle
- Tokene je treba hraniti kot okoljske spremenljivke
- Nikoli ne komitiraj tokenov ali gesel

## Dodatne opombe

### Ciljna publika

- Popolni začetniki v spletnem razvoju
- Študenti in samouki
- Učitelji, ki uporabljajo učni načrt v razredih
- Vsebina je zasnovana za dostopnost in postopno pridobivanje veščin

### Izobraževalna filozofija

- Projektno usmerjen način učenja
- Pogoste preveritve znanja (kvizi)
- Praktične vaje s kodiranjem
- Primeri za uporabo v resničnem svetu
- Osredotočenost na osnove pred okviri

### Vzdrževanje repozitorija

- Aktivna skupnost učencev in prispevnikov
- Redne posodobitve odvisnosti in vsebine
- Spremljanje težav in diskusij s strani vzdrževalcev
- Posodobitve prevodov avtomatizirane preko GitHub Actions

### Povezani viri

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)
- [Student Hub viri](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) priporočeno za učence
- Dodatni tečaji: Generativna AI, Data Science, ML, IoT učni načrti na voljo

### Delo s specifičnimi projekti

Za podrobna navodila za posamezne projekte glej README datoteke v:  
- `quiz-app/README.md` - Vue 3 kviz aplikacija  
- `7-bank-project/README.md` - Bančna aplikacija z avtentikacijo  
- `5-browser-extension/README.md` - Razvoj razširitve brskalnika  
- `6-space-game/README.md` - Razvoj igre na platnu (Canvas)  
- `9-chat-project/README.md` - Projekt AI klepetalnega asistenta

### Struktura monorepo

Čeprav to ni tradicionalni monorepo, ta repozitorij vsebuje več neodvisnih projektov:  
- Vsaka lekcija je samostojna  
- Projekti si ne delijo odvisnosti  
- Delo na posameznih projektih brez vpliva na druge  
- Kloniraj celoten repozitorij za celotno izkušnjo učnega načrta

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za avtomatski prevod [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas opozarjamo, da avtomatizirani prevodi lahko vsebujejo napake ali netočnosti. Izvirni dokument v njegovem matičnem jeziku velja za avtoritativni vir. Za pomembne informacije priporočamo strokovni človeški prevod. Za kakršna koli nesporazume ali napačne interpretacije, ki izhajajo iz uporabe tega prevoda, ne odgovarjamo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->