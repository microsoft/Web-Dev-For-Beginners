# AGENTS.md

## Prehľad projektu

Toto je vzdelávacie úložisko učebného plánu na výučbu základov webového vývoja pre začiatočníkov. Učebný plán je komplexný 12-týždňový kurz vyvinutý Microsoft Cloud Advocates, obsahujúci 24 praktických lekcií pokrývajúcich JavaScript, CSS a HTML.

### Kľúčové komponenty

- **Vzdelávací obsah**: 24 štruktúrovaných lekcií organizovaných do modulov založených na projektoch
- **Praktické projekty**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor a AI Chat Assistant
- **Interaktívne kvízy**: 48 kvízov s 3 otázkami každý (pred a po lekcii)
- **Podpora viacerých jazykov**: Automatické preklady do 50+ jazykov cez GitHub Actions
- **Technológie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pre AI projekty)

### Architektúra

- Vzdelávacie úložisko so štruktúrou založenou na lekciách
- Každý priečinok lekcie obsahuje README, ukážky kódu a riešenia
- Samostatné projekty v oddelených adresároch (quiz-app, rôzne projekty lekcií)
- Prekladový systém využívajúci GitHub Actions (co-op-translator)
- Dokumentácia servírovaná cez Docsify a dostupná aj vo formáte PDF

## Príkazy na nastavenie

Toto úložisko je primárne určené na konzumáciu vzdelávacieho obsahu. Pre prácu s konkrétnymi projektmi:

### Nastavenie hlavného úložiska

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavenie Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Spustiť vývojový server
npm run build      # Vytvoriť build pre produkciu
npm run lint       # Spustiť ESLint
```

### Bank API projektu (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Spustiť API server
npm run lint       # Spustiť ESLint
npm run format     # Formátovať pomocou Prettier
```

### Projekty rozšírenia prehliadača

```bash
cd 5-browser-extension/solution
npm install
# Dodržiavajte pokyny na načítanie rozšírení špecifické pre prehliadač
```

### Projekty Space Game

```bash
cd 6-space-game/solution
npm install
# Otvorte index.html v prehliadači alebo použite Live Server
```

### Chat projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavte premennú prostredia GITHUB_TOKEN
python api.py
```

## Vývojový pracovný postup

### Pre prispievateľov obsahu

1. **Vytvorte fork úložiska** do svojho GitHub účtu
2. **Naklonujte si svoj fork** lokálne
3. **Vytvorte novú vetvu** pre vaše zmeny
4. Urobte zmeny v obsahu lekcií alebo ukážkach kódu
5. Testujte akékoľvek zmeny kódu v príslušných projektových adresároch
6. Odosielajte pull requesty podľa pokynov pre prispievanie

### Pre študentov

1. Forknite alebo naklonujte úložisko
2. Postupne prechádzajte adresáre lekcií
3. Čítajte README súbory ku každej lekcii
4. Vyplňujte predlekčné kvízy na https://ff-quizzes.netlify.app/web/
5. Prechádzajte príklady kódu v adresároch lekcií
6. Splňte zadania a výzvy
7. Vyplňujte po- lekčné kvízy

### Živý vývoj

- **Dokumentácia**: Spustite `docsify serve` v koreňovom adresári (port 3000)
- **Quiz App**: Spustite `npm run dev` v adresári quiz-app
- **Projekty**: Použite VS Code Live Server rozšírenie pre HTML projekty
- **API projekty**: Spustite `npm start` v príslušných API adresároch

## Inštrukcie na testovanie

### Testovanie Quiz App

```bash
cd quiz-app
npm run lint       # Skontrolujte problémy so štýlom kódu
npm run build      # Overte, či zostavenie prebehlo úspešne
```

### Testovanie Bank API

```bash
cd 7-bank-project/api
npm run lint       # Skontrolujte problémy so štýlom kódu
node server.js     # Overte, či server štartuje bez chýb
```

### Všeobecný prístup k testovaniu

- Ide o vzdelávacie úložisko bez komplexných automatizovaných testov
- Manuálne testovanie sa zameriava na:
  - Ukážky kódu bežia bez chýb
  - Odkazy v dokumentácii fungujú správne
  - Projekty sa úspešne zostavujú
  - Príklady dodržiavajú najlepšie postupy

### Kontroly pred odoslaním

- Spustite `npm run lint` v adresároch s package.json
- Overte platnosť markdown odkazov
- Testujte príklady kódu v prehliadači alebo Node.js
- Skontrolujte, že preklady zachovávajú správnu štruktúru

## Pravidlá pre štýl kódu

### JavaScript

- Používajte moderný ES6+ syntax
- Dodržiavajte štandardné ESLint konfigurácie v projektoch
- Používajte zrozumiteľné názvy premenných a funkcií pre jasnosť výučby
- Pridávajte komentáre vysvetľujúce koncepty pre študentov
- Formátujte kód pomocou Prettier, kde je to nakonfigurované

### HTML/CSS

- Semantické HTML5 prvky
- Zásady responzívneho dizajnu
- Jasné pomenovávanie tried
- Komentáre vysvetľujúce CSS techniky pre študentov

### Python

- Štýl podľa PEP 8
- Jasné, vzdelávacie príklady kódu
- Type hints kde sú užitočné pre učenie

### Markdown dokumentácia

- Jasná hierarchia nadpisov
- Bloky kódu so špecifikovaným jazykom
- Odkazy na ďalšie zdroje
- Snímky obrazovky a obrázky v adresároch `images/`
- Alt text pre obrázky z dôvodu prístupnosti

### Organizácia súborov

- Lekcie číslované postupne (1-getting-started-lessons, 2-js-basics, atď.)
- Každý projekt má adresáre `solution/` a často `start/` alebo `your-work/`
- Obrázky uložené v lekciách špecifických `images/` priečinkoch
- Preklady v štruktúre `translations/{jazykový-kód}/`

## Sestavenie a nasadenie

### Nasadenie Quiz App (Azure Static Web Apps)

quiz-app je nakonfigurovaný pre nasadenie na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytvára priečinok dist/
# Nasadzuje cez GitHub Actions workflow pri push do main
```

Konfigurácia Azure Static Web Apps:
- **Umiestnenie aplikácie**: `/quiz-app`
- **Výstupné umiestnenie**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generovanie PDF dokumentácie

```bash
npm install                    # Inštalovať docsify-to-pdf
npm run convert               # Generovať PDF z docs
```

### Dokumentácia Docsify

```bash
npm install -g docsify-cli    # Nainštalujte Docsify globálne
docsify serve                 # Spustiť na localhost:3000
```

### Špecifické zostavenia projektu

Každý projekt môže mať vlastný build proces:
- Vue projekty: `npm run build` vytvára produkčné balíky
- Statické projekty: Žiadny build krok, súbory sa servírujú priamo

## Pokyny pre pull requesty

### Formát názvu

Používajte jasné, popisné názvy indikujúce oblasť zmeny:
- `[Quiz-app] Pridanie nového kvízu pre lekciu X`
- `[Lesson-3] Oprava preklepu v projekte terrarium`
- `[Translation] Pridanie španielskeho prekladu pre lekciu 5`
- `[Docs] Aktualizácia inštrukcií na nastavenie`

### Požadované kontroly

Pred odoslaním PR:

1. **Kvalita kódu**:
   - Spustite `npm run lint` v zasiahnutých projektových adresároch
   - Opravte všetky lint chyby a varovania

2. **Overenie build-u**:
   - Spustite `npm run build` ak je to relevantné
   - Zabezpečte, že nie sú žiadne build chyby

3. **Validácia odkazov**:
   - Otestujte všetky markdown odkazy
   - Overte funkčnosť obrázkových referencií

4. **Kontrola obsahu**:
   - Korektúra pravopisu a gramatiky
   - Overenie správnosti a vzdelávacej hodnoty príkladov kódu
   - Overenie, že preklady zachovávajú pôvodný význam

### Požiadavky na príspevky

- Súhlas so zmluvou Microsoft CLA (automatická kontrola pri prvom PR)
- Dodržiavanie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pozrite [CONTRIBUTING.md](./CONTRIBUTING.md) pre podrobné pokyny
- Referencujte čísla issue v popise PR, ak je to relevantné

### Proces recenzie

- PR sú recenzované správcami a komunitou
- Prioritizuje sa vzdelávacia jasnosť
- Ukážky kódu by mali sledovať aktuálne najlepšie postupy
- Preklady sa kontrolujú na presnosť a kultúrnu vhodnosť

## Prekladový systém

### Automatizovaný preklad

- Používa GitHub Actions s workflow co-op-translator
- Automaticky prekladá do 50+ jazykov
- Zdrojové súbory v hlavných adresároch
- Preložené súbory v adresároch `translations/{jazykový-kód}/`

### Pridávanie manuálnych vylepšení prekladu

1. Nájdite súbor v `translations/{jazykový-kód}/`
2. Urobte vylepšenia pri zachovaní štruktúry
3. Zabezpečte, že príklady kódu sú funkčné
4. Otestujte lokalizovaný obsah kvízov

### Metaúdaje prekladu

Preložené súbory obsahujú metaúdajový hlavičkový blok:
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

## Ladenie a riešenie problémov

### Bežné problémy

**Quiz app sa nespustí**:
- Skontrolujte verziu Node.js (odporúčané v14+)
- Vymažte `node_modules` a `package-lock.json`, spustite `npm install` znova
- Skontrolujte konflikty portov (predvolený: Vite používa port 5173)

**API server sa nespustí**:
- Overte, či verzia Node.js spĺňa minimum (node >=10)
- Skontrolujte, či port nie je už obsadený
- Uistite sa, že sú nainštalované všetky závislosti cez `npm install`

**Rozšírenie prehliadača sa nenačíta**:
- Skontrolujte správne formátovanie manifest.json
- Skontrolujte konzolu prehliadača na chyby
- Postupujte podľa inštrukcií pre inštaláciu rozšírenia v konkrétnom prehliadači

**Problémy s Python chat projektom**:
- Uistite sa, že balík OpenAI je nainštalovaný: `pip install openai`
- Overte, že premenná prostredia GITHUB_TOKEN je nastavená
- Skontrolujte povolenia na prístup ku GitHub Models

**Docsify neservíruje dokumentáciu**:
- Nainštalujte docsify-cli globálne: `npm install -g docsify-cli`
- Spustite z koreňového adresára úložiska
- Overte, že existuje `docs/_sidebar.md`

### Tipy pre vývojové prostredie

- Používajte VS Code s rozšírením Live Server pre HTML projekty
- Nainštalujte rozšírenia ESLint a Prettier pre konzistentné formátovanie
- Používajte DevTools v prehliadači na ladenie JavaScriptu
- Pre Vue projekty nainštalujte Vue DevTools rozšírenie prehliadača

### Výkonové úvahy

- Veľké množstvo preložených súborov (50+ jazykov) znamená veľké klony
- Používajte shallow clone pri práci len s obsahom: `git clone --depth 1`
- Vylúčte preklady z vyhľadávania pri práci na anglickom obsahu
- Build procesy môžu byť pomalé pri prvom spustení (npm install, Vite build)

## Bezpečnostné úvahy

### Premenné prostredia

- API kľúče nikdy neukladajte do úložiska
- Používajte `.env` súbory (už v `.gitignore`)
- Dokumentujte potrebné premenné prostredia v README projektov

### Python projekty

- Používajte virtuálne prostredia: `python -m venv venv`
- Udržiavajte závislosti aktualizované
- GitHub tokeny by mali mať minimálne potrebné oprávnenia

### Prístup k GitHub Models

- Osobné prístupové tokeny (PAT) sú potrebné pre GitHub Models
- Tokeny ukladajte ako premenné prostredia
- Nikdy neukladajte tokeny ani prihlasovacie údaje do repozitára

## Ďalšie poznámky

### Cieľová skupina

- Úplní začiatočníci vo webovom vývoji
- Študenti a samoštúdium
- Učitelia používajúci učebný plán v triedach
- Obsah navrhnutý pre prístupnosť a postupný rozvoj zručností

### Vzdelávacia filozofia

- Prístup založený na projektoch
- Časté kontroly vedomostí (kvízy)
- Praktické cvičenia v kódovaní
- Príklady z reálneho sveta
- Zameranie na základy pred frameworkmi

### Údržba úložiska

- Aktívna komunita študentov a prispievateľov
- Pravidelné aktualizácie závislostí a obsahu
- Problémy a diskusie monitorované správcami
- Aktualizácie prekladov automatizované cez GitHub Actions

### Súvisiace zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) odporúčaný pre študentov
- Ďalšie kurzy: Generatívna AI, Data Science, ML, IoT učebné plány dostupné

### Práca s konkrétnymi projektmi

Pre podrobné inštrukcie ku jednotlivým projektom nájdete README súbory v:
- `quiz-app/README.md` - Vue 3 kvízová aplikácia
- `7-bank-project/README.md` - Banková aplikácia s autentifikáciou
- `5-browser-extension/README.md` - Vývoj rozšírenia prehliadača
- `6-space-game/README.md` - Vývoj hry s canvasom
- `9-chat-project/README.md` - AI chat asistent projekt

### Štruktúra monorepa

Aj keď nejde o tradičné monorepo, toto úložisko obsahuje viacero nezávislých projektov:
- Každá lekcia je samostatná
- Projekty nezdieľajú závislosti
- Pracujte na jednotlivých projektoch bez ovplyvnenia ostatných
- Naklonujte celé repozitórium pre kompletný zážitok kurzu

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím majte na pamäti, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho natívnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->