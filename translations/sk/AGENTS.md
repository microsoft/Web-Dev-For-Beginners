# AGENTS.md

## Prehľad projektu

Toto je edukačné úložisko kurikula určené na výučbu základov webového vývoja pre začiatočníkov. Kurikulum je komplexný 12-týždňový kurz vyvinutý Microsoft Cloud Advocates, zahŕňajúci 24 praktických lekcií pokrývajúcich JavaScript, CSS a HTML.

### Hlavné komponenty

- **Edukačný obsah**: 24 štruktúrovaných lekcií organizovaných do modulov založených na projektoch
- **Praktické projekty**: Terrárium, Hra na písanie, Rozšírenie prehliadača, Vesmírna hra, Banková aplikácia, Kódový editor a AI Chat asistent
- **Interaktívne kvízy**: 48 kvízov so 3 otázkami každý (pred a po lekcii)
- **Viacjazyčná podpora**: Automatické preklady do 50+ jazykov pomocou GitHub Actions
- **Technológie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pre AI projekty)

### Architektúra

- Edukačné úložisko so štruktúrou založenou na lekciách
- Každá lekcia obsahuje README, ukážky kódu a riešenia
- Samostatné projekty v oddelených adresároch (quiz-app, rôzne lekčné projekty)
- Prekladový systém využívajúci GitHub Actions (co-op-translator)
- Dokumentácia poskytovaná cez Docsify a dostupná aj vo formáte PDF

## Príkazy na nastavenie

Toto úložisko je primárne určené na štúdium edukačného obsahu. Pre prácu so špecifickými projektmi:

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
npm run build      # Vytvoriť produkčnú verziu
npm run lint       # Spustiť ESLint
```

### Bankový projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Spustiť API server
npm run lint       # Spustiť ESLint
npm run format     # Naformátovať pomocou Prettier
```

### Projekty rozšírení prehliadača

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podľa pokynov na načítanie rozšírení špecifických pre prehliadač
```

### Projekty vesmírnej hry

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

## Vývojový pracovný tok

### Pre prispievateľov obsahu

1. **Vytvorte fork úložiska** na svoj GitHub účet
2. **Naklonujte svoj fork** lokálne
3. **Vytvorte novú vetvu** pre svoje zmeny
4. Upraviť obsah lekcií alebo ukážky kódu
5. Otestujte zmeny kódu v relevantných projektových adresároch
6. Odoslať pull requesty podľa pravidiel prispievania

### Pre študentov

1. Forknite alebo klonujte úložisko
2. Postupujte sekvenčne adresáre s lekciami
3. Čítajte README súbory ku každej lekcii
4. Vykonajte predlekcné kvízy na https://ff-quizzes.netlify.app/web/
5. Prejdite si kódové ukážky vo vnútri lekčných adresárov
6. Splňte zadania a výzvy
7. Vykonajte po lekcii kvízy

### Live vývoj

- **Dokumentácia**: Spustite `docsify serve` v koreňovom adresári (port 3000)
- **Quiz App**: Spustite `npm run dev` v adresári quiz-app
- **Projekty**: Použite VS Code rozšírenie Live Server pre HTML projekty
- **API projekty**: Spustite `npm start` v príslušných adresároch API

## Inštrukcie na testovanie

### Testovanie Quiz App

```bash
cd quiz-app
npm run lint       # Skontrolujte problémy so štýlom kódu
npm run build      # Overte úspešnosť zostavenia
```

### Testovanie Bank API

```bash
cd 7-bank-project/api
npm run lint       # Skontrolujte problémy so štýlom kódu
node server.js     # Overte, či sa server spustí bez chýb
```

### Všeobecný testovací postup

- Ide o edukačné úložisko bez komplexných automatizovaných testov
- Manuálne testovanie sa zameriava na:
  - Kódové ukážky sa spúšťajú bez chybných hlásení
  - Odkazy v dokumentácii fungujú správne
  - Projekty sa úspešne zostavujú
  - Ukážky dodržiavajú osvedčené postupy

### Kontroly pred odoslaním

- Spustite `npm run lint` v adresároch, kde je package.json
- Overte, že markdown odkazy sú platné
- Otestujte ukážky kódu v prehliadači alebo Node.js
- Skontrolujte, či preklady zachovávajú správnu štruktúru

## Pravidlá štýlu kódu

### JavaScript

- Používajte moderný ES6+ syntax
- Dodržiavajte štandardné ESLint konfigurácie definované v projektoch
- Používajte zrozumiteľné názvy premenných a funkcií pre lepšie pochopenie
- Pridávajte komentáre vysvetľujúce koncepty pre študentov
- Formátujte kód pomocou Prettier tam, kde je nastavený

### HTML/CSS

- Používajte sémantické HTML5 prvky
- Dodržiavajte princípy responzívneho dizajnu
- Jasné pomenovanie CSS tried
- Komentáre vysvetľujúce CSS techniky pre študentov

### Python

- Dodržiavajte štandard PEP 8
- Jasné, edukačné ukážky kódu
- Používajte typové anotácie tam, kde sú užitočné pre učenie

### Markdown dokumentácia

- Jasná hierarchia nadpisov
- Bloky kódu so špecifikáciou jazyka
- Odkazy na ďalšie zdroje
- Screenshoty a obrázky v adresároch `images/`
- Alt text pre obrázky pre zlepšenie prístupnosti

### Organizácia súborov

- Lekcie číslované postupne (1-getting-started-lessons, 2-js-basics atď.)
- Každý projekt má adresáre `solution/` a často aj `start/` alebo `your-work/`
- Obrázky uložené v lekciových `images/` zložkách
- Preklady v štruktúre `translations/{jazykový-kód}/`

## Sestavenie a nasadenie

### Nasadenie Quiz App (Azure Static Web Apps)

Quiz-app je nakonfigurovaná pre nasadenie na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytvára priečinok dist/
# Nasadzuje cez workflow GitHub Actions pri pushi do main
```

Konfigurácia Azure Static Web Apps:
- **Umiestnenie aplikácie**: `/quiz-app`
- **Výstupné umiestnenie**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generovanie PDF dokumentácie

```bash
npm install                    # Nainštalujte docsify-to-pdf
npm run convert               # Vygenerujte PDF z docs
```

### Dokumentácia cez Docsify

```bash
npm install -g docsify-cli    # Nainštalujte Docsify globálne
docsify serve                 # Spustiť na localhost:3000
```

### Špecifické zostavenia projektov

Každý projektový adresár môže mať vlastný build proces:
- Vue projekty: `npm run build` vytvára produkčné balíky
- Statické projekty: Bez build kroku, súbory servované priamo

## Pravidlá pre pull requesty

### Formát nadpisu

Používajte jasné, popisné názvy vyjadrujúce oblasť zmeny:
- `[Quiz-app] Pridanie nového kvízu pre lekciu X`
- `[Lesson-3] Oprava preklepu v projekte terrárium`
- `[Translation] Pridanie španielskeho prekladu pre lekciu 5`
- `[Docs] Aktualizácia inštrukcií na nastavenie`

### Požadované kontroly

Pred odoslaním PR:

1. **Kvalita kódu**:
   - Spustite `npm run lint` v dotknutých projektových adresároch
   - Opravte všetky linting chyby a varovania

2. **Overenie buildu**:
   - Spustite `npm run build`, ak je to relevantné
   - Uistite sa, že nie sú chyby v build procese

3. **Validácia odkazov**:
   - Otestujte všetky markdown odkazy
   - Overte správne fungovanie odkazov na obrázky

4. **Kontrola obsahu**:
   - Korektúra pravopisu a gramatiky
   - Overenie správnosti a edukačnej hodnoty kódových príkladov
   - Overenie, že preklady zachovávajú pôvodný význam

### Požiadavky na prispievateľov

- Súhlas s Microsoft CLA (automatická kontrola pri prvom PR)
- Dodržiavať [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Viac info v [CONTRIBUTING.md](./CONTRIBUTING.md)
- Uvádzať čísla issues v popise PR, ak sa to týka

### Proces revízie

- PR prehliadajú správcovia a komunita
- Priorita je edukačná zrozumiteľnosť
- Kódové príklady by mali dodržiavať aktuálne osvedčené postupy
- Preklady sa kontrolujú z hľadiska presnosti a kultúrnej vhodnosti

## Prekladový systém

### Automatizovaný preklad

- Využíva GitHub Actions so workflow co-op-translator
- Automaticky prekladá do 50+ jazykov
- Zdrojové súbory v hlavných adresároch
- Preložené súbory v `translations/{jazykový-kód}/`

### Pridávanie manuálnych vylepšení prekladu

1. Nájdite súbor v `translations/{jazykový-kód}/`
2. Vykonajte úpravy pri zachovaní štruktúry
3. Uistite sa, že kódové príklady zostávajú funkčné
4. Otestujte lokalizovaný obsah kvízu

### Metadata prekladu

Preložené súbory obsahujú hlavičku metadata:
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

**Quiz app sa nespúšťa**:
- Skontrolujte verziu Node.js (odporúčaná v14+)
- Odstráňte `node_modules` a `package-lock.json`, spustite `npm install` znova
- Skontrolujte konflikt portov (predvolené: Vite používa port 5173)

**API server sa nespúšťa**:
- Overte minimálnu požadovanú verziu Node.js (node >=10)
- Skontrolujte, či port nie je už obsadený
- Uistite sa, že všetky závislosti sú nainštalované cez `npm install`

**Rozšírenie prehliadača sa nenačíta**:
- Skontrolujte správne formátovanie manifest.json
- Prezrite konzolu prehliadača kvôli chybám
- Dodržiavajte inštrukcie inštalácie rozšírení pre daný prehliadač

**Problémy s Python chat projektom**:
- Overte, či je nainštalovaný balík OpenAI: `pip install openai`
- Skontrolujte, či je nastavená premenná prostredia GITHUB_TOKEN
- Overte prístupové práva k GitHub Models

**Docsify neservíruje dokumentáciu**:
- Nainštalujte docsify-cli globálne: `npm install -g docsify-cli`
- Spúšťajte z koreňového adresára repo
- Overte, že existuje súbor `docs/_sidebar.md`

### Tipy pre vývojové prostredie

- Používajte VS Code s rozšírením Live Server pre HTML projekty
- Inštalujte ESLint a Prettier rozšírenia pre konzistentné formátovanie
- Používajte prehliadačové DevTools na ladenie JavaScriptu
- Pre Vue projekty nainštalujte Vue DevTools rozšírenie prehliadača

### Výkonnostné úvahy

- Veľké množstvo prekladaných súborov (50+ jazykov) spôsobuje veľké clone repozitára
- Používajte shallow clone, ak pracujete len s obsahom: `git clone --depth 1`
- Vynechávajte preklady z vyhľadávania pri práci v angličtine
- Sestavovacie procesy môžu byť pomalé pri prvom spustení (npm install, Vite build)

## Bezpečnostné opatrenia

### Premenné prostredia

- API kľúče by nikdy nemali byť commitované do úložiska
- Používajte `.env` súbory (už v `.gitignore`)
- Dokumentujte požadované premenné prostredia v README projektov

### Python projekty

- Používajte virtuálne prostredia: `python -m venv venv`
- Udržiavajte závislosti aktuálne
- GitHub tokeny by mali mať minimálne potrebné oprávnenia

### Prístup k GitHub Models

- Potrebné sú Personal Access Tokens (PAT)
- Tokeny ukladajte ako environmentálne premenné
- Nikdy necommitujte tokeny alebo prihlasovacie údaje

## Ďalšie poznámky

### Cieľová skupina

- Úplní začiatočníci vo webovom vývoji
- Študenti a samoukovia
- Učitelia používajúci kurikulum v triedach
- Obsah navrhnutý pre prístupnosť a postupné nadobúdanie zručností

### Edukačná filozofia

- Prístup založený na projektoch
- Časté kontrolné otázky (kvízy)
- Praktické programovacie cvičenia
- Príklady z reálneho sveta
- Dôraz na základy pred frameworkami

### Údržba úložiska

- Aktívna komunita študentov a prispievateľov
- Pravidelné aktualizácie závislostí a obsahu
- Správa issues a diskusií od správcov
- Automatické aktualizácie prekladov cez GitHub Actions

### Súvisiace zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) odporúčaný pre študentov
- Ďalšie kurzy: Generatívna AI, Data Science, ML, IoT kurikulum dostupné

### Práca so špecifickými projektmi

Pre podrobné inštrukcie k jednotlivým projektom si pozrite README súbory v:
- `quiz-app/README.md` - Vue 3 kvízová aplikácia
- `7-bank-project/README.md` - Banková aplikácia s autentifikáciou
- `5-browser-extension/README.md` - Vývoj rozšírení prehliadača
- `6-space-game/README.md` - Vývoj hry založenej na Canvas
- `9-chat-project/README.md` - AI chat asistent projekt

### Štruktúra monorepa

Aj keď nejde o tradičné monorepo, toto úložisko obsahuje viacero nezávislých projektov:
- Každá lekcia je samostatná
- Projekty nezdieľajú závislosti
- Pracujte na jednotlivých projektoch bez ovplyvnenia ostatných
- Naklonujte celé repo pre plné kurikulumové skúsenosti

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Upozornenie**:  
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, treba mať na pamäti, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Originálny dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vzniknuté z použitia tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->