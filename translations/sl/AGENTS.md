# AGENTS.md

## Pregled projekta

To je repozitorij izobraževalnega kurikuluma za učenje osnov spletnega razvoja za začetnike. Kurikulum je obsežen 12-tedenski tečaj, ki ga je razvilo Microsoft Cloud Advocates, z 24 praktičnimi lekcijami, ki pokrivajo JavaScript, CSS in HTML.

### Ključne komponente

- **Izobraževalna vsebina**: 24 strukturiranih lekcij, organiziranih v module, osnovane na projektih
- **Praktični projekti**: Terrarium, Igra tipkanja, Razširitev brskalnika, Igra vesolja, Bančna aplikacija, Urejevalnik kode in AI klepetalni asistent
- **Interaktivni kvizi**: 48 kvizov s po 3 vprašanji (pred- in po-lekcijski preizkusi)
- **Podpora več jezikom**: Avtomatizirani prevodi za več kot 50 jezikov preko GitHub Actions
- **Tehnologije**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (za AI projekte)

### Arhitektura

- Izobraževalni repozitorij z lekcijsko strukturo
- Vsaka mapa lekcij vsebuje README, kode primere in rešitve
- Samostojni projekti v ločenih imenikih (quiz-app, različni lekcijski projekti)
- Sistem prevajanja preko GitHub Actions (co-op-translator)
- Dokumentacija na voljo preko Docsify in kot PDF

## Ukazi za nastavitev

Ta repozitorij je namenjen predvsem za uporabo izobraževalne vsebine. Za delo z določenimi projekti:

### Nastavitev glavnega repozitorija

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavitev Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Začni razvojni strežnik
npm run build      # Zgradi za produkcijo
npm run lint       # Zaženi ESLint
```

### Bančni API projekt (Node.js + Express)

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
# Sledite navodilom za nalaganje razširitev, specifičnih za brskalnik
```

### Projekti igre vesolja

```bash
cd 6-space-game/solution
npm install
# Odprite index.html v brskalniku ali uporabite Live Server
```

### Klepetalni projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavi okoljsko spremenljivko GITHUB_TOKEN
python api.py
```

## Razvojni potek

### Za prispevatele vsebine

1. **Razvezi repozitorij** na svoj GitHub račun
2. **Nakloni svoj razvejani repozitorij** lokalno
3. **Ustvari novo vejo** za svoje spremembe
4. Spremeni lekcijsko vsebino ali kode primere
5. Testiraj spremembe kode v ustreznih projektnih mapah
6. Pošlji pull requeste v skladu s pravili prispevkov

### Za učence

1. Razvezi ali nakloni repozitorij
2. Postopno pojdi skozi mape lekcij
3. Preberi README datoteke za vsako lekcijo
4. Izpolni pred-lekcijske kvize na https://ff-quizzes.netlify.app/web/
5. Delo po primerih kode v lekcijskih mapah
6. Reši naloge in izzive
7. Izpolni po-lekcijske kvize

### Živ razvoj

- **Dokumentacija**: Zaženi `docsify serve` v korenskem imeniku (vrata 3000)
- **Quiz App**: Zaženi `npm run dev` v mapi quiz-app
- **Projekti**: Uporabi VS Code Live Server razširitev za HTML projekte
- **API projekti**: Zaženi `npm start` v ustreznih API mapah

## Navodila za testiranje

### Testiranje Quiz App

```bash
cd quiz-app
npm run lint       # Preveri težave s slogom kode
npm run build      # Preveri, ali je izdelava uspešna
```

### Testiranje Bank API

```bash
cd 7-bank-project/api
npm run lint       # Preveri morebitne težave s slogom kode
node server.js     # Preveri, ali se strežnik zažene brez napak
```

### Splošen pristop k testiranju

- Gre za izobraževalni repozitorij brez celovitih avtomatiziranih testov
- Ročno testiranje fokusira na:
  - Kode primere delujejo brez napak
  - Povezave v dokumentaciji delujejo pravilno
  - Projekti se uspešno zgradijo
  - Primeri sledijo najboljšim praksam

### Kontrole pred oddajo

- Zaženi `npm run lint` v mapah s package.json
- Preveri, da so oznake v markdown povezavah veljavne
- Testiraj kode primere v brskalniku ali Node.js
- Preveri, da prevodi ohranjajo pravilno strukturo

## Smernice za slog kode

### JavaScript

- Uporabljaj sodobno ES6+ sintakso
- Sledi standardnim ESLint konfiguracijam, ki so v projektih
- Uporabljaj pomenljive imena spremenljivk in funkcij za jasno učenje
- Dodaj komentarje za razlago konceptov učencem
- Oblikuj po Prettier kjer je konfiguriran

### HTML/CSS

- Semantični HTML5 elementi
- Principi odzivnega dizajna
- Jasne konvencije imenovanja razredov
- Komentarji, ki razlagajo CSS tehnike za učence

### Python

- Smernice sloga PEP 8
- Jasni, izobraževalni kode primeri
- Tipni namigi tam, kjer so uporabni za učenje

### Markdown dokumentacija

- Jasna hierarhija naslovov
- Bloki kode z določanjem jezika
- Povezave do dodatnih virov
- Posnetki zaslona in slike v mapah `images/`
- Alt besedilo za slike za dostopnost

### Organizacija datotek

- Lekcije oštevilčene zaporedno (1-getting-started-lessons, 2-js-basics, itd.)
- Vsak projekt ima `solution/` in pogosto `start/` ali `your-work/` mape
- Slike shranjene v lekcijsko specifičnih `images/` mapah
- Prevodi v `translations/{language-code}/` strukturi

## Gradnja in implementacija

### Implementacija Quiz App (Azure Static Web Apps)

Quiz-app je konfiguriran za implementacijo Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Ustvari mapo dist/
# Izvede namestitev preko GitHub Actions delovnega toka ob pushu na main
```

Konfiguracija Azure Static Web Apps:
- **Lokacija aplikacije**: `/quiz-app`
- **Lokacija izhoda**: `dist`
- **Delovni tok**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generiranje PDF dokumentacije

```bash
npm install                    # Namestite docsify-to-pdf
npm run convert               # Ustvarite PDF iz docs
```

### Dokumentacija Docsify

```bash
npm install -g docsify-cli    # Namestite Docsify globalno
docsify serve                 # Postrežite na localhost:3000
```

### Gradnje specifične za projekt

Vsaka projektna mapa ima lahko svoj build proces:
- Vue projekti: `npm run build` ustvari produkcijske pakete
- Statični projekti: brez gradnje, datoteke streže neposredno

## Pravila za pull requeste

### Format naslova

Uporabi jasne, opisne naslove, ki označujejo področje spremembe:
- `[Quiz-app] Dodaj nov kviz za lekcijo X`
- `[Lesson-3] Popravi tipkarsko napako v projektu terrarium`
- `[Translation] Dodaj španski prevod za lekcijo 5`
- `[Docs] Posodobi navodila za namestitev`

### Obvezne kontrole

Pred pošiljanjem PR:

1. **Kakovost kode**:
   - Zaženi `npm run lint` v prizadetih projektnem mapah
   - Odpravi vse napake in opozorila

2. **Preverjanje gradnje**:
   - Zaženi `npm run build`, če je potrebno
   - Poskrbi, da ni napak pri gradnji

3. **Preverjanje povezav**:
   - Preizkusi vse markdown povezave
   - Potrdi, da reference slik delujejo

4. **Pregled vsebine**:
   - Preveri črkovanje in slovnico
   - Zagotovi pravilnost in poučnost kode primerov
   - Preveri, da prevodi ohranjajo prvotni pomen

### Zahteve za prispevek

- Sprejmi Microsoft CLA (samodejni pregled ob prvem PR)
- Sledi [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Preglej [CONTRIBUTING.md](./CONTRIBUTING.md) za podrobna pravila
- V opisu PR navajaj številke issue-jev, če je potrebno

### Proces pregleda

- PR pregledujejo vzdrževalci in skupnost
- Prednost ima jasnost za učenje
- Code primere naj sledijo najboljšim praksam
- Prevode pregledajo glede natančnosti in ustreznosti

## Sistem prevajanja

### Avtomatiziran prevod

- Uporablja GitHub Actions s co-op-translator delovnim tokom
- Samodejno prevaja v več kot 50 jezikov
- Izvorne datoteke v glavnih mapah
- Prevedene datoteke v `translations/{language-code}/` mapah

### Dodajanje ročnih izboljšav prevoda

1. Poišči datoteko v `translations/{language-code}/`
2. Izboljšaj prevod ob ohranitvi strukture
3. Poskrbi, da so primeri kode še vedno funkcionalni
4. Testiraj lokalizirano vsebino kviza

### Metapodatki prevoda

Prevedene datoteke vključujejo meta podatkovni glavi:
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
- Izbriši `node_modules` in `package-lock.json`, nato zaženi `npm install`
- Preveri konflikte vrat (privzeto: Vite uporablja vrata 5173)

**API strežnik se ne zažene**:
- Preveri, če je Node.js verzija vsaj 10 ali višja
- Preveri, ali vrat že niso zasedena
- Zagotovi, da so vse odvisnosti nameščene z `npm install`

**Razširitev brskalnika se ne naloži**:
- Preveri, ali je manifest.json pravilno oblikovan
- Preveri konzolo brskalnika za napake
- Sledi navodilom za namestitev razširitve za določen brskalnik

**Težave s Python klepetalnim projektom**:
- Preveri, da je paket OpenAI nameščen: `pip install openai`
- Preveri, da je okoljska spremenljivka GITHUB_TOKEN nastavljena
- Preveri pravice dostopa do GitHub modelov

**Docsify ne streže dokumentacije**:
- Namesti docsify-cli globalno: `npm install -g docsify-cli`
- Zaženi iz korenskega imenika repozitorija
- Preveri, da obstaja `docs/_sidebar.md`

### Nasveti za razvojno okolje

- Uporabljaj VS Code z Live Server razširitvijo za HTML projekte
- Namesti razširitve ESLint in Prettier za konsistentno oblikovanje
- Uporabljaj DevTools v brskalniku za razhroščevanje JavaScript
- Za Vue projekte namesti Vue DevTools razširitev za brskalnik

### Razmišljanja o zmogljivosti

- Veliko število prevedenih datotek (50+) pomeni, da so polne kopije velike
- Uporabi plitvo kloniranje, če delaš samo z vsebino: `git clone --depth 1`
- Izključi prevode iz iskanj pri delu z angleško vsebino
- Proces gradnje je lahko počasnejši ob prvem zagonu (npm install, Vite build)

## Varnostni vidiki

### Okoljske spremenljivke

- Ključi API nikoli ne smejo biti s pomočjo commit-a v repozitoriju
- Uporabljaj `.env` datoteke (že v `.gitignore`)
- Zahtevane okoljske spremenljivke dokumentiraj v README projektov

### Python projekti

- Uporabljaj virtualna okolja: `python -m venv venv`
- Ohrani odvisnosti posodobljene
- GitHub žetoni naj imajo minimalne potrebne pravice

### Dostop do GitHub modelov

- Osebni dostopni žetoni (PAT) so potrebni za GitHub modele
- Žetoni naj bodo shranjeni kot okoljske spremenljivke
- Nikoli ne nastavljaj žetonov ali poverilnic v repozitorij

## Dodatne opombe

### Ciljna publika

- Popolni začetniki v spletni razvoj
- Študentje in samouki
- Učitelji, ki uporabljajo kurikulum v razredih
- Vsebina je zasnovana za dostopnost in postopno pridobivanje veščin

### Izobraževalna filozofija

- Pristop učenja preko projektov
- Pogoste preveritve znanja (kvizi)
- Praktične vaje s kodiranjem
- Resnični primeri uporabe
- Osredotočanje na osnove pred okvirji

### Vzdrževanje repozitorija

- Aktivna skupnost učencev in prispevkov
- Redne posodobitve odvisnosti in vsebine
- Spremljanje težav in razprav s strani vzdrževalcev
- Avtomatizirane posodobitve prevodov preko GitHub Actions

### Sorodni viri

- [Moduli Microsoft Learn](https://docs.microsoft.com/learn/)
- [Viri Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) priporočen za učence
- Dodatni tečaji: Generativna AI, Data Science, ML, IoT kurikulumi na voljo

### Delo z določenimi projekti

Za podrobna navodila o posameznih projektih glej README datoteke v:
- `quiz-app/README.md` - Vue 3 aplikacija za kvize
- `7-bank-project/README.md` - Bančna aplikacija z avtentikacijo
- `5-browser-extension/README.md` - Razvoj brskalniške razširitve
- `6-space-game/README.md` - Razvoj igre na platnu (canvas)
- `9-chat-project/README.md` - AI klepetalni asistent

### Struktura monorepoja

Čeprav ni tradicionalni monorepo, ta repozitorij vsebuje več samostojnih projektov:
- Vsaka lekcija je samostojna
- Projekti ne uporabljajo skupnih odvisnosti
- Delo na posameznih projektih brez vpliva na druge
- Nakloni celoten repozitorij za popolno izkušnjo kurikuluma

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Omejitev odgovornosti**:
Ta dokument je bil preveden z uporabo AI prevajalske storitve [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da avtomatski prevodi lahko vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku velja za avtoritativni vir. Za ključne informacije je priporočljivo uporabiti strokovni človeški prevod. Nismo odgovorni za morebitna nesporazume ali napačne interpretacije, ki izhajajo iz uporabe tega prevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->