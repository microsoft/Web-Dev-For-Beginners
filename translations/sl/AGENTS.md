# AGENTS.md

## Pregled projekta

To je izobraževalni kurikulum repozitorij za poučevanje osnov spletnega razvoja začetnikom. Kurikulum je obsežen 12-tedenski tečaj, razvit s strani Microsoft Cloud Advocates, ki vsebuje 24 praktičnih lekcij, ki zajemajo JavaScript, CSS in HTML.

### Ključne komponente

- **Izobraževalna vsebina**: 24 strukturiranih lekcij, organiziranih v modulih, temelječih na projektih  
- **Praktični projekti**: Terrarium, igra tipkanja, razširitev brskalnika, igra v vesolju, bančna aplikacija, urejevalnik kode in AI klepetalni pomočnik  
- **Interaktivni kvizi**: 48 kvizov s po 3 vprašanji (pred/po lekciji)  
- **Večjezična podpora**: Samodejni prevodi za več kot 50 jezikov preko GitHub Actions  
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)  

### Arhitektura

- Izobraževalni repozitorij z organizacijo po lekcijah  
- Vsaka mapa lekcije vsebuje README, primeri kode in rešitve  
- Samostojni projekti v ločenih imenikih (quiz-app, različni projekti lekcij)  
- Sistem prevajanja z GitHub Actions (co-op-translator)  
- Dokumentacija strežena preko Docsify in dostopna kot PDF  

## Ukazi za nastavitev

Ta repozitorij je namenjen predvsem za porabo izobraževalne vsebine. Za delo s specifičnimi projekti:

### Glavna nastavitev repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavitev Quiz Aplikacije (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Začni razvojni strežnik
npm run build      # Sestavi za proizvodnjo
npm run lint       # Zaženi ESLint
```

### API bančnega projekta (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Zaženi API strežnik
npm run lint       # Zaženi ESLint
npm run format     # Oblikuj s Prettierjem
```

### Projekti razširitve brskalnika

```bash
cd 5-browser-extension/solution
npm install
# Sledite navodilom za nalaganje razširitve, specifičnim za brskalnik
```

### Projekti igre v vesolju

```bash
cd 6-space-game/solution
npm install
# Odprite index.html v brskalniku ali uporabite Live Server
```

### Klepetalni projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavite okoljsko spremenljivko GITHUB_TOKEN
python api.py
```

## Razvojni potek dela

### Za prispevne vsebine

1. **Razveji repozitorij (fork)** na svoj GitHub račun  
2. **Kloniraj svoj fork** lokalno  
3. **Ustvari novo vejo** za spremembe  
4. Naredi spremembe vsebine lekcije ali primerov kode  
5. Preizkusi spremembe kode v ustreznih mapah projektov  
6. Pošlji pull request po navodilih za prispevke  

### Za učence

1. Razveji ali kloniraj repozitorij  
2. Pomikaj se po lekcijah zaporedoma  
3. Preberi README datoteke za vsako lekcijo  
4. Reši pred-kvizove na https://ff-quizzes.netlify.app/web/  
5. Delo z jeziki primeri v mapah lekcij  
6. Opravi naloge in izzive  
7. Reši post-kvizove  

### Živi razvoj

- **Dokumentacija**: Zaženi `docsify serve` v korenski mapi (port 3000)  
- **Quiz App**: Zaženi `npm run dev` v mapi quiz-app  
- **Projekti**: Uporabi VS Code Live Server razširitev za HTML projekte  
- **API Projekti**: Zaženi `npm start` v ustreznih API mapah  

## Navodila za testiranje

### Testiranje Quiz Aplikacije

```bash
cd quiz-app
npm run lint       # Preveri težave s slogom kode
npm run build      # Preveri, ali je sestavljanje uspešno
```

### Testiranje Bank API

```bash
cd 7-bank-project/api
npm run lint       # Preverite težave s slogom kode
node server.js     # Preverite, ali se strežnik zažene brez napak
```

### Splošni pristop testiranja

- To je izobraževalni repozitorij brez obsežnih avtomatiziranih testov  
- Ročno testiranje se osredotoča na:  
  - Primeri kode tečejo brez napak  
  - Povezave v dokumentaciji delujejo pravilno  
  - Projekti se uspešno zgradijo  
  - Primeri sledijo najboljšim praksam  

### Preverjanje pred oddajo

- Zaženi `npm run lint` v mapah z datoteko package.json  
- Preveri, da so povezave v markdownu veljavne  
- Testiraj primere kode v brskalniku ali Node.js  
- Preveri, da prevodi ohranjajo pravilno strukturo  

## Smernice za stil kode

### JavaScript

- Uporabi sodobno ES6+ sintakso  
- Upoštevaj standardne ESLint konfiguracije v projektih  
- Uporabi smiselna imena spremenljivk in funkcij za jasnost izobraževanja  
- Dodaj komentarje za razlago konceptov učencem  
- Formatiraj z orodjem Prettier, kjer je nastavljeno  

### HTML/CSS

- Semantični HTML5 elementi  
- Načela odzivnega oblikovanja  
- Jasne konvencije imen razredov  
- Komentarji za razlago CSS tehnik učencem  

### Python

- Smernice stila PEP 8  
- Jasni, izobraževalni primeri kode  
- Tipne namige, kjer pomagajo pri učenju  

### Dokumentacija v Markdownu

- Jasna hierarhija naslovov  
- Bloki kode z določitvijo jezika  
- Povezave do dodatnih virov  
- Posnetki zaslona in slike v mapah `images/`  
- Alt besedilo za slike za dostopnost  

### Organizacija datotek

- Lekcije zaporedno številčene (1-getting-started-lessons, 2-js-basics itd.)  
- Vsak projekt ima `solution/` in pogosto tudi `start/` ali `your-work/` mape  
- Slike shranjene v lekcijsko specifičnih mapah `images/`  
- Prevodi v strukturi `translations/{language-code}/`  

## Gradnja in nameščanje

### Namestitev Quiz Aplikacije (Azure Static Web Apps)

quiz-app je konfiguriran za nameščanje v Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Ustvari mapo dist/
# Izvedba z GitHub Actions potekom dela ob pushu na main
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
docsify serve                 # Postrezi na localhost:3000
```

### Gradnje za posamezne projekte

Vsaka projektna mapa ima lahko svoj postopek gradnje:  
- Vue projekti: `npm run build` ustvari produkcijske pakete  
- Statični projekti: Brez koraka gradnje, neposredno strežemo datoteke  

## Smernice za Pull Requeste

### Oblika naslova

Uporabi jasne in opisne naslove, ki označujejo področje spremembe:  
- `[Quiz-app] Dodaj nov kviz za lekcijo X`  
- `[Lesson-3] Popravi tipkarsko napako v projektu terrarium`  
- `[Translation] Dodaj španski prevod za lekcijo 5`  
- `[Docs] Posodobi navodila za nastavitev`  

### Zahtevani pregledi

Pred oddajo PR:  

1. **Kakovost kode**:  
   - Zaženi `npm run lint` v prizadetih projektnih mapah  
   - Odpravi vse napake in opozorila pri lintingu  

2. **Preverjanje gradnje**:  
   - Zaženi `npm run build`, če je potrebno  
   - Poskrbi, da ni napak pri gradnji  

3. **Validacija povezav**:  
   - Preizkusi vse markdown povezave  
   - Preveri delovanje referenc slik  

4. **Pregled vsebine**:  
   - Preveri pravopis in slovnico  
   - Zagotovi, da so primeri kode pravilni in izobraževalni  
   - Preveri, da prevodi ohranjajo prvotni pomen  

### Zahteve za prispevke

- Strinjanje z Microsoft CLA (avtomatizirana preveritev ob prvem PR)  
- Sledenje [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Podrobna pravila so v [CONTRIBUTING.md](./CONTRIBUTING.md)  
- V opisu PR navedi številke izdaj, če je relevantno  

### Postopek pregleda

- PR pregledujejo vzdrževalci in skupnost  
- Prioriteta je jasnost izobraževalne vsebine  
- Primeri kode morajo slediti trenutnim najboljšim praksam  
- Prevodi se pregledajo za točnost in kulturno primernost  

## Sistem prevajanja

### Samodejni prevod

- Uporablja GitHub Actions z delovnim tokom co-op-translator  
- Samodejno prevaja v več kot 50 jezikov  
- Izvorne datoteke v glavnih mapah  
- Prevedene datoteke v `translations/{language-code}/` mapah  

### Dodajanje ročnih izboljšav prevodov

1. Poišči datoteko v `translations/{language-code}/`  
2. Naredi izboljšave ob ohranitvi strukture  
3. Poskrbi, da primeri kode ostanejo funkcionalni  
4. Testiraj vso lokalizirano vsebino kvizov  

### Metapodatki prevodov

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
- Preveri verzijo Node.js (priporočeno v14+)  
- Izbriši `node_modules` in `package-lock.json`, ponovno zaženi `npm install`  
- Preveri konflikte portov (privzeto: Vite uporablja port 5173)  

**API strežnik se ne zažene**:  
- Preveri, da je verzija Node.js zadostna (node >=10)  
- Preveri, če je port že v uporabi  
- Poskrbi, da so vse odvisnosti nameščene z `npm install`  

**Razširitev brskalnika se ne naloži**:  
- Preveri, da je manifest.json pravilno oblikovan  
- Preveri napake v konzoli brskalnika  
- Sledi navodilom za nameščanje razširitev za določen brskalnik  

**Težave s Python klepetalnim projektom**:  
- Poskrbi, da je paket OpenAI nameščen: `pip install openai`  
- Preveri, da je okoljska spremenljivka GITHUB_TOKEN nastavljena  
- Preveri dovoljenja za dostop do GitHub modelov  

**Docsify ne streže dokumentacije**:  
- Namesti docsify-cli globalno: `npm install -g docsify-cli`  
- Zaženi iz korenske mape repozitorija  
- Preveri, da `docs/_sidebar.md` obstaja  

### Nasveti za razvojno okolje

- Uporabi VS Code z Live Server razširitvijo za HTML projekte  
- Namesti ESLint in Prettier razširitve za dosledno oblikovanje  
- Uporabi brskalniška razvojna orodja za odpravljanje napak v JavaScriptu  
- Za Vue projekte namesti Vue DevTools brskalniško razširitev  

### Premisleki o zmogljivosti

- Veliko število prevedenih datotek (više kot 50 jezikov) pomeni velike kloniranja  
- Uporabi plitev klon, če delaš le z vsebino: `git clone --depth 1`  
- Izključi prevode iz iskanj, ko delaš na angleški vsebini  
- Procesi gradnje so lahko počasni ob prvem izvajanju (npm install, Vite build)  

## Varnostni premisleki

### Okoljske spremenljivke

- API ključi nikoli ne smejo biti v repozitoriju  
- Uporabi `.env` datoteke (že vključene v `.gitignore`)  
- Dokumentiraj zahtevane okoljske spremenljivke v README projektov  

### Python projekti

- Uporabi virtualna okolja: `python -m venv venv`  
- Ohrani odvisnosti posodobljene  
- GitHub tokeni naj imajo minimalne potrebne pravice  

### Dostop do GitHub modelov

- Potrebni so osebni dostopni tokeni (PAT) za GitHub modele  
- Tokeni naj bodo shranjeni kot okoljske spremenljivke  
- Nikoli ne komitiraj tokenov ali poverilnic  

## Dodatne opombe

### Ciljna publika

- Popolni začetniki v spletnem razvoju  
- Študenti in samouki  
- Učitelji, ki uporabljajo kurikulum v učilnicah  
- Vsebina je zasnovana za dostopnost in postopno gradnjo veščin  

### Izobraževalna filozofija

- Pristop učenja preko projektov  
- Pogoste preveritve znanja (kvizi)  
- Praktične vaje s kodiranjem  
- Primeri uporabe v resničnem svetu  
- Osredotočenost na osnove pred ogrodji  

### Vzdrževanje repozitorija

- Aktivna skupnost učencev in prispevnikov  
- Redne posodobitve odvisnosti in vsebine  
- Izzivi in razprave nadzirani s strani vzdrževalcev  
- Posodobitve prevodov avtomatizirane preko GitHub Actions  

### Sorodni viri

- [Microsoft Learn moduli](https://docs.microsoft.com/learn/)  
- [Student Hub viri](https://docs.microsoft.com/learn/student-hub/)  
- Priporočeno za učence: [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)  
- Dodatni tečaji: Generativna AI, podatkovna znanost, ML, IoT kurikuli  

### Delo s specifičnimi projekti

Za podrobna navodila glede posameznih projektov glej README datoteke v:  
- `quiz-app/README.md` - Vue 3 kviz aplikacija  
- `7-bank-project/README.md` - Bančna aplikacija z avtentikacijo  
- `5-browser-extension/README.md` - Razvoj razširitve brskalnika  
- `6-space-game/README.md` - Razvoj igre na platnu (canvas)  
- `9-chat-project/README.md` - AI klepetalni pomočnik  

### Struktura monorepa

Čeprav ni klasični monorepo, ta repozitorij vsebuje več neodvisnih projektov:  
- Vsaka lekcija je samostojna  
- Projekti ne delijo odvisnosti  
- Delo na posameznih projektih brez vpliva na ostale  
- Kloniraj celoten repozitorij za celotno kurikulum izkušnjo  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za AI prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, prosimo, upoštevajte, da avtomatizirani prevodi lahko vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku je treba šteti za avtoritativni vir. Za ključne informacije je priporočljivo uporabiti strokovni človeški prevod. Nismo odgovorni za morebitna nesporazume ali napačne interpretacije, ki izhajajo iz uporabe tega prevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->