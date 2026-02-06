# AGENTS.md

## Pregled projekta

To je repozitorij izobraževalnega kurikuluma za poučevanje osnov spletnega razvoja za začetnike. Kurikulum je obsežen 12-tedenski tečaj, ki ga je razvila ekipa Microsoft Cloud Advocates, in obsega 24 praktičnih lekcij o JavaScriptu, CSS-u in HTML-u.

### Ključne sestavine

- **Izobraževalna vsebina**: 24 strukturiranih lekcij, razporejenih v modulih s projekti  
- **Praktični projekti**: Terrarium, Igra tipkanja, Razširitev za brskalnik, Vesoljska igra, Bančniška aplikacija, Urejevalnik kode in AI Chat asistent  
- **Interaktivni kvizi**: 48 kvizov s po 3 vprašanji (pred in po lekciji)  
- **Večjezična podpora**: Avtomatski prevodi za več kot 50 jezikov preko GitHub Actions  
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)  

### Arhitektura

- Izobraževalni repozitorij z lekcijsko strukturo  
- Vsaka lekcija ima mapo s README-jem, primeri kode in rešitvami  
- Samostojni projekti v ločenih imenikih (quiz-app, različni projekti lekcij)  
- Sistem za prevajanje z uporabo GitHub Actions (co-op-translator)  
- Dokumentacija dostopna preko Docsify in PDF-ja  

## Ukazi za nastavitev

Ta repozitorij je primarno za potrošnjo izobraževalnih vsebin. Za delo s specifičnimi projekti:

### Nastavitev glavnega repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavitev Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Zaženite razvojni strežnik
npm run build      # Ustvari za produkcijo
npm run lint       # Zaženi ESLint
```

### API bankovnega projekta (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Zaženi API strežnik
npm run lint       # Zaženi ESLint
npm run format     # Formatiraj s Prettier-jem
```

### Projekti razširitev za brskalnik

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

### Chat projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavite okoljsko spremenljivko GITHUB_TOKEN
python api.py
```

## Razvojni potek

### Za prispevatele vsebine

1. **Razvejajte repozitorij** na svoj GitHub račun  
2. **Klonirajte svojo vejo** lokalno  
3. **Ustvarite novo vejo** za vaše spremembe  
4. Spremenite vsebino lekcij ali primere kode  
5. Preizkusite spremembe kode v ustreznih imenikih projektov  
6. Pošljite pull requeste v skladu z navodili za prispevanje  

### Za učence

1. Razvejajte ali klonirajte repozitorij  
2. Po vrsti odprite mape lekcij  
3. Preberite README datoteke za vsako lekcijo  
4. Rešite pred-lekcijske kvize na https://ff-quizzes.netlify.app/web/  
5. Delajte skozi primere kode v lekcijskih mapah  
6. Zaključite naloge in izzive  
7. Rešite povratne kvize po lekciji  

### Živi razvoj

- **Dokumentacija**: Povlecite `docsify serve` v korenski mapi (port 3000)  
- **Quiz App**: Zaženite `npm run dev` v mapi quiz-app  
- **Projekti**: Uporabite VS Code Live Server razširitev za HTML projekte  
- **API projekti**: Zaženite `npm start` v ustreznih API mapah  

## Navodila za testiranje

### Testiranje Quiz App

```bash
cd quiz-app
npm run lint       # Preveri težave s slogom kode
npm run build      # Preveri, ali se gradnja uspešno zaključi
```

### Testiranje API banke

```bash
cd 7-bank-project/api
npm run lint       # Preveri težave s slogom kode
node server.js     # Preveri, da se strežnik zažene brez napak
```

### Splošen pristop testiranja

- To je izobraževalni repozitorij brez celovitih avtomatiziranih testov  
- Ročno testiranje se osredotoča na:  
  - Koda teče brez napak  
  - Povezave v dokumentaciji delujejo pravilno  
  - Projekti se uspešno zgradijo  
  - Primeri sledijo najboljšim praksam  

### Preverjanje pred predajo

- Zaženite `npm run lint` v mapah z datoteko package.json  
- Preverite veljavnost markdown povezav  
- Testirajte primere kode v brskalniku ali Node.js  
- Preverite, da prevodi ne porušijo strukture  

## Smernice za stil kode

### JavaScript

- Uporabljajte sodobno sintakso ES6+  
- Sledite standardnim ESLint konfiguracijam v projektih  
- Uporabljajte smiselna imena spremenljivk in funkcij za jasnost učenja  
- Dodajajte komentarje, ki pojasnjujejo koncepte za učence  
- Oblikujte kodo po Prettier, kjer je nastavljeno  

### HTML/CSS

- Semantični HTML5 elementi  
- Principi odzivnega oblikovanja  
- Jasne konvencije za poimenovanje razredov  
- Komentarji, ki pojasnjujejo CSS tehnike za učence  

### Python

- Smernice stila PEP 8  
- Jasni, izobraževalni primeri kode  
- Tipizacija, kjer je koristna za učenje  

### Markdown dokumentacija

- Jasna hierarhija naslovov  
- Bloki kode z navedbo jezika  
- Povezave do dodatnih virov  
- Posnetki zaslona in slike v mapah `images/`  
- Alternativno besedilo za slike za dostopnost  

### Organizacija datotek

- Lekcije so oštevilčene zaporedno (1-getting-started-lessons, 2-js-basics itd.)  
- Vsak projekt ima mape `solution/` in pogosto `start/` ali `your-work/`  
- Slike so shranjene v lekcijsko specifičnih mapah `images/`  
- Prevodi so v strukturi `translations/{language-code}/`  

## Gradnja in objava

### Objavljanje Quiz App (Azure Static Web Apps)

Quiz-app je konfiguriran za objavo na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Ustvari mapo dist/
# Izvede namestitev prek GitHub Actions delovnega toka ob potisku na main
```

Konfiguracija Azure Static Web Apps:  
- **Lokacija aplikacije**: `/quiz-app`  
- **Izhodna lokacija**: `dist`  
- **Potek dela**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Generiranje dokumentacije v PDF

```bash
npm install                    # Namesti docsify-to-pdf
npm run convert               # Ustvari PDF iz docs
```

### Dokumentacija Docsify

```bash
npm install -g docsify-cli    # Namestite Docsify globalno
docsify serve                 # Strežite na localhost:3000
```

### Gradnje po posameznih projektih

Vsak projekt ima lahko lasten gradbeni proces:  
- Vue projekti: `npm run build` ustvari proizvodne pakete  
- Statični projekti: brez gradnje, datoteke se neposredno strežejo  

## Smernice za pull requeste

### Oblika naslova

Uporabite jasne, opisne naslove, ki označujejo področje spremembe:  
- `[Quiz-app] Dodaj nov kviz za lekcijo X`  
- `[Lesson-3] Popravi napako v projektu terrarium`  
- `[Translation] Dodaj španski prevod za lekcijo 5`  
- `[Docs] Posodobi navodila za namestitev`  

### Potrebni pregledi

Pred oddajo PR:  

1. **Kakovost kode**:  
   - Zaženite `npm run lint` v ustreznih projektnih mapah  
   - Odpravite vse napake in opozorila  

2. **Preverjanje gradnje**:  
   - Zaženite `npm run build`, če je potrebno  
   - Zagotovite, da ni napak pri gradnji  

3. **Preverjanje povezav**:  
   - Testirajte vse markdown povezave  
   - Preverite pravilnost slikovnih referenc  

4. **Pregled vsebine**:  
   - Preverite pravopis in slovnico  
   - Zagotovite pravilnost in izobraževalno vrednost primerov kode  
   - Preverite pravilnost prevodov in skladnost pomena  

### Zahteve za prispevanje

- Strinjajte se z Microsoft CLA (avtomatska kontrola pri prvem PR)  
- Sledite [Microsoftovemu kodeksu ravnanja za odprto kodo](https://opensource.microsoft.com/codeofconduct/)  
- Preberite [CONTRIBUTING.md](./CONTRIBUTING.md) za podrobna navodila  
- Referencirajte številke težav v opisu PR, če je primerno  

### Postopek pregleda

- PR-e pregledajo vzdrževalci in skupnost  
- Prioriteta je jasnost izobraževalnih vsebin  
- Primeri kode naj sledijo najboljšim trenutnim praksam  
- Prevodi so pregledani glede točnosti in kulturne ustreznosti  

## Sistem prevajanja

### Avtomatski prevod

- Uporablja GitHub Actions s co-op-translator potekom dela  
- Samodejno prevaja v več kot 50 jezikov  
- Izvorne datoteke v glavnih direktorijih  
- Prevedene datoteke v `translations/{language-code}/` mapah  

### Dodajanje ročnih izboljšav prevodov

1. Poiščite datoteko v `translations/{language-code}/`  
2. Izboljšajte vsebino ob ohranitvi strukture  
3. Zagotovite delovanje primerov kode  
4. Preizkusite lokalizirane kvize, če so prisotni  

### Metapodatki prevodov

Prevedene datoteke vključujejo glavo metapodatkov:  
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

**Aplikacija kvizov se ne zažene**:  
- Preverite različico Node.js (priporočeno v4+ ali višje)  
- Izbrišite `node_modules` in `package-lock.json`, znova zaženite `npm install`  
- Preverite konflikte pristanišč (privzeto Vite uporablja port 5173)  

**API strežnik se ne zažene**:  
- Preverite, ali je različica Node.js zadostna (node >=10)  
- Preverite, ali je pristanišče že v uporabi  
- Prepričajte se, da so vse odvisnosti nameščene preko `npm install`  

**Razširitev za brskalnik se ne naloži**:  
- Preverite pravilno oblikovan manifest.json  
- Preverite konzolo brskalnika za napake  
- Sledite navodilom za namestitev specifičnim za brskalnik  

**Težave s Python chat projektom**:  
- Prepričajte se, da je nameščen paket OpenAI: `pip install openai`  
- Preverite, da je okoljska spremenljivka GITHUB_TOKEN nastavljena  
- Preverite dovoljenja za dostop do GitHub modelov  

**Docsify ne streže dokumentacije**:  
- Namestite docsify-cli globalno: `npm install -g docsify-cli`  
- Zaženite v korenski mapi repozitorija  
- Preverite, ali obstaja `docs/_sidebar.md`  

### Nasveti za razvojno okolje

- Uporabljajte VS Code z razširitvijo Live Server za HTML projekte  
- Namestite ESLint in Prettier razširitve za skladno oblikovanje  
- Uporabljajte DevTools v brskalniku za razhroščevanje JavaScripta  
- Za Vue projekte namestite Vue DevTools razširitev za brskalnik  

### Upoštevanje zmogljivosti

- Veliko število prevedenih datotek (50+ jezikov) pomeni velike klone  
- Uporabite plitek klon, če delate samo z vsebino: `git clone --depth 1`  
- Izključite prevode iz iskanja pri delu na angleški vsebini  
- Gradbeni postopki so lahko počasni ob prvem zagonu (npm install, Vite build)  

## Varnostne usmeritve

### Okoljske spremenljivke

- API ključi nikoli naj ne bodo vključeni v repozitorij  
- Uporabite `.env` datoteke (že v `.gitignore`)  
- Dokumentirajte potrebne okoljske spremenljivke v README-jih projektov  

### Python projekti

- Uporabljajte virtualna okolja: `python -m venv venv`  
- Ohranjajte odvisnosti posodobljene  
- GitHub tokeni naj imajo minimalne potrebne pravice  

### Dostop do GitHub modelov

- Za GitHub modele so potrebni osebni dostopni tokeni (PAT)  
- Tokeni naj se hranijo v okoljskih spremenljivkah  
- Nikoli ne vključujte tokenov ali poverilnic v repozitorij  

## Dodatne opombe

### Ciljna publika

- Popolni začetniki v spletnem razvoju  
- Študenti in samostojni učeči se  
- Učitelji, ki uporabljajo kurikulum v razredih  
- Vsebina je zasnovana za dostopnost in postopno gradnjo znanja  

### Izobraževalna filozofija

- Pristop učenja skozi projekte  
- Pogoste preveritve znanja (kvizi)  
- Praktikum programiranja  
- Primeri iz resničnega sveta  
- Osredotočenost na osnove pred ogrodji  

### Vzdrževanje repozitorija

- Aktivna skupnost učencev in prispevalcev  
- Redne posodobitve odvisnosti in vsebine  
- Spremljanje težav in razprav s strani vzdrževalcev  
- Posodobitve prevodov avtomatizirane preko GitHub Actions  

### Sorodni viri

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)  
- [Student Hub viri](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) priporočen za učence  
- Dodatni tečaji: Generativni AI, Data Science, ML, IoT kurikulumi na voljo  

### Delo s specifičnimi projekti

Za podrobna navodila posameznih projektov glejte README datoteke v:  
- `quiz-app/README.md` - Vue 3 aplikacija kviza  
- `7-bank-project/README.md` - Bančniška aplikacija z avtentikacijo  
- `5-browser-extension/README.md` - Razvoj razširitve za brskalnik  
- `6-space-game/README.md` - Razvoj igre na platnu (Canvas)  
- `9-chat-project/README.md` - Projekt AI chat asistenta  

### Struktura Monorepo

Čeprav ne gre za tradicionalni monorepo, ta repozitorij vsebuje več neodvisnih projektov:  
- Vsaka lekcija je samostojna  
- Projekti ne delijo odvisnosti  
- Delo na posameznih projektih brez vpliva na druge  
- Klonirajte celoten repozitorij za celotno kurikularno izkušnjo  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Opozorilo**:  
Ta dokument je bil preveden z uporabo AI prevajalske storitve [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, upoštevajte, da avtomatski prevodi lahko vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku velja za zanesljiv vir. Za pomembne informacije priporočamo strokovni človeški prevod. Za morebitne nesporazume ali napačne interpretacije, ki izhajajo iz uporabe tega prevoda, ne odgovarjamo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->