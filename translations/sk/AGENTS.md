# AGENTS.md

## Prehľad projektu

Toto je vzdelávacia učebná osnova na výučbu základov webového vývoja pre začiatočníkov. Učebná osnova je komplexný 12-týždňový kurz vyvinutý Microsoft Cloud Advocates, obsahujúci 24 praktických lekcií pokrývajúcich JavaScript, CSS a HTML.

### Kľúčové komponenty

- **Vzdelávací obsah**: 24 štruktúrovaných lekcií organizovaných do projektovo orientovaných modulov
- **Praktické projekty**: Terrárium, Hra na písanie, Rozšírenie prehliadača, Hra v priestore, Banková aplikácia, Kódovací editor a AI Chat asistent
- **Interaktívne kvízy**: 48 kvízov s 3 otázkami v každom (pred a po lekcii)
- **Podpora viacerých jazykov**: Automatizované preklady do viac než 50 jazykov prostredníctvom GitHub Actions
- **Technológie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pre AI projekty)

### Architektúra

- Vzdelávacie úložisko so štruktúrou založenou na lekciách
- Každá zložka lekcie obsahuje README, príklady kódu a riešenia
- Samostatné projekty v samostatných adresároch (quiz-app, rôzne lekčné projekty)
- Prekladový systém využívajúci GitHub Actions (co-op-translator)
- Dokumentácia poskytovaná cez Docsify a dostupná ako PDF

## Príkazy na nastavenie

Toto úložisko je primárne na konzumáciu vzdelávacieho obsahu. Pre prácu s konkrétnymi projektmi:

### Nastavenie hlavného úložiska

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavenie quiz aplikácie (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Spustiť vývojový server
npm run build      # Vytvoriť zostavu pre produkciu
npm run lint       # Spustiť ESLint
```

### API banka projekt (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Spustiť API server
npm run lint       # Spustiť ESLint
npm run format     # Formátovať pomocou Prettier
```

### Projekty rozšírení prehliadača

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podľa pokynov na načítanie rozšírení špecifických pre prehliadač
```

### Projekty hry v priestore

```bash
cd 6-space-game/solution
npm install
# Otvorte index.html v prehliadači alebo použite Live Server
```

### Chat projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavte premennú prostredia GITHUB_TOKEN
python api.py
```

## Vývojový workflow

### Pre prispievateľov obsahu

1. **Forknite úložisko** do svojho GitHub účtu
2. **Naklonujte svoj fork** lokálne
3. **Vytvorte nový branch** pre svoje zmeny
4. Upravujte obsah lekcií alebo príklady kódu
5. Testujte akékoľvek kódové zmeny v príslušných projektových adresároch
6. Podajte pull requesty podľa smerníc pre prispievanie

### Pre študentov

1. Forknite alebo naklonujte úložisko
2. Postupujte sekvenčne do adresárov lekcií
3. Čítajte README súbory ku každej lekcii
4. Vyplňte predlekčné kvízy na https://ff-quizzes.netlify.app/web/
5. Pracujte na príkladoch v adresároch lekcií
6. Dokončite úlohy a výzvy
7. Vyplňte post-lekčné kvízy

### Živý vývoj

- **Dokumentácia**: Spustite `docsify serve` v koreňovom adresári (port 3000)
- **Quiz aplikácia**: Spustite `npm run dev` v adresári quiz-app
- **Projekty**: Použite VS Code Live Server rozšírenie pre HTML projekty
- **API projekty**: Spustite `npm start` v príslušných API adresároch

## Testovacie pokyny

### Testovanie quiz aplikácie

```bash
cd quiz-app
npm run lint       # Skontrolujte problémy so štýlom kódu
npm run build      # Overte úspešnosť zostavenia
```

### Testovanie bankového API

```bash
cd 7-bank-project/api
npm run lint       # Skontrolujte problémy so štýlom kódu
node server.js     # Overte, či server štartuje bez chýb
```

### Všeobecný prístup k testovaniu

- Toto je vzdelávacie úložisko bez komplexných automatizovaných testov
- Manuálne testovanie sa zameriava na:
  - Spustenie príkladov kódu bez chýb
  - Funkčnosť odkazov v dokumentácii
  - Úspešné zostavenie projektov
  - Dodržiavanie najlepších praktík v príkladoch

### Kontroly pred zaslaním PR

- Spustite `npm run lint` v adresároch s package.json
- Overte platnosť markdown odkazov
- Otestujte príklady kódu v prehliadači alebo Node.js
- Skontrolujte, či preklady zachovávajú správnu štruktúru

## Návody na štýl kódu

### JavaScript

- Používajte modernú ES6+ syntax
- Dodržiavajte štandardné ESLint konfigurácie poskytnuté v projektoch
- Používajte významné mená premenných a funkcií pre vzdelávaciu jasnosť
- Pridávajte komentáre vysvetľujúce koncepty pre študentov
- Formátujte pomocou Prettier tam, kde je nastavený

### HTML/CSS

- Sémantické HTML5 elementy
- Zásady responzívneho dizajnu
- Jasné pomenovanie tried
- Komentáre vysvetľujúce CSS techniky pre študentov

### Python

- Štýlové smernice PEP 8
- Jasné, vzdelávacie príklady kódu
- Používanie typových anotácií tam, kde pomáhajú výučbe

### Markdown dokumentácia

- Jasná hierarchia nadpisov
- Kódové bloky so špecifikáciou jazyka
- Odkazy na ďalšie zdroje
- Snímky obrazovky a obrázky v `images/` adresároch
- Alternatívny text pre obrázky na prístupnosť

### Organizácia súborov

- Lekcie číslované sekvenčne (1-getting-started-lessons, 2-js-basics a pod.)
- Každý projekt má `solution/` a často `start/` alebo `your-work/` adresáre
- Obrázky uložené v špecifických `images/` priečinkoch lekcií
- Preklady v štruktúre `translations/{language-code}/`

## Zostavenie a nasadenie

### Nasadenie quiz aplikácie (Azure Static Web Apps)

Quiz-app je nakonfigurovaný pre nasadenie na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytvára priečinok dist/
# Nasadzuje pomocou workflow GitHub Actions pri pushnutí do main
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

### Docsify dokumentácia

```bash
npm install -g docsify-cli    # Nainštalujte Docsify globálne
docsify serve                 # Spustiť na localhost:3000
```

### Zostavenie špecifické pre projekt

Každý projektový adresár môže mať vlastný proces zostavenia:
- Vue projekty: `npm run build` vytvára produkčné balíčky
- Statické projekty: Žiadny build krok, súbory sa poskytujú priamo

## Smernice pre pull requesty

### Formát názvu

Používajte jasné, popisné názvy označujúce oblasť zmeny:
- `[Quiz-app] Pridanie nového kvízu pre lekciu X`
- `[Lesson-3] Oprava preklepu v projekte terrarium`
- `[Translation] Pridanie španielskeho prekladu pre lekciu 5`
- `[Docs] Aktualizácia inštrukcií na nastavenie`

### Povinné kontroly

Pred odoslaním PR:

1. **Kvalita kódu**:
   - Spustite `npm run lint` v ovplyvnených projektových adresároch
   - Opravte všetky chyby a varovania lintera

2. **Overenie build-u**:
   - Spustite `npm run build`, ak je to relevantné
   - Uistite sa, že nie sú žiadne chyby zostavenia

3. **Validácia odkazov**:
   - Otestujte všetky markdown odkazy
   - Overte fungovanie referencií na obrázky

4. **Kontrola obsahu**:
   - Korektúra pravopisu a gramatiky
   - Overenie správnosti a vzdelávacieho aspektu príkladov kódu
   - Kontrola, či preklady zachovávajú pôvodný význam

### Požiadavky na príspevok

- Súhlas so zmluvou Microsoft CLA (automatická kontrola pri prvom PR)
- Dodržiavanie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Viac detailov v [CONTRIBUTING.md](./CONTRIBUTING.md)
- Referencia na čísla issue v popise PR, ak je to relevantné

### Proces preskúmania

- PR prehliadajú správci a komunita
- Prioritou je vzdelávacia zrozumiteľnosť
- Príklady kódu by mali dodržiavať súčasné najlepšie praktiky
- Preklady sú preskúmavané na presnosť a kultúrnu vhodnosť

## Prekladový systém

### Automatizovaný preklad

- Používa GitHub Actions so workflow co-op-translator
- Prekladá do viac než 50 jazykov automaticky
- Zdrojové súbory sú v hlavných adresároch
- Preložené súbory sú v `translations/{language-code}/` adresároch

### Pridávanie manuálnych zlepšení prekladu

1. Nájdite súbor v `translations/{language-code}/`
2. Zlepšite obsah pri zachovaní štruktúry
3. Zabezpečte, že príklady kódu zostanú funkčné
4. Otestujte lokalizovaný obsah kvízov

### Metadata prekladu

Preložené súbory obsahujú hlavičku s metadátami:
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

**Quiz aplikácia sa nespustí**:
- Skontrolujte verziu Node.js (odporúča sa v14+)
- Vymažte `node_modules` a `package-lock.json`, znovu spustite `npm install`
- Overte konflikty portov (predvolené: Vite používa port 5173)

**API server sa nespustí**:
- Skontrolujte, či verzia Node.js spĺňa minimálne požiadavky (node >=10)
- Overte, či port nie je už obsadený
- Uistite sa, že všetky závislosti sú nainštalované cez `npm install`

**Rozšírenie prehliadača sa nenačíta**:
- Overte správne formátovanie manifest.json
- Skontrolujte konzolu prehliadača na chyby
- Postupujte podľa inštrukcií pre inštaláciu rozšírení špecifických pre prehliadač

**Problémy s Python chat projektom**:
- Overte, či je nainštalovaný balík OpenAI: `pip install openai`
- Skontrolujte nastavenie environmentálnej premennej GITHUB_TOKEN
- Skontrolujte prístupové práva k GitHub Models

**Docsify neposkytuje dokumentáciu**:
- Nainštalujte docsify-cli globálne: `npm install -g docsify-cli`
- Spustite z koreňového adresára úložiska
- Overte, že existuje `docs/_sidebar.md`

### Tipy pre vývojové prostredie

- Používajte VS Code s rozšírením Live Server pre HTML projekty
- Nainštalujte rozšírenia ESLint a Prettier pre konzistentné formátovanie
- Používajte DevTools prehliadača na ladenie JavaScriptu
- Pre Vue projekty nainštalujte rozšírenie Vue DevTools do prehliadača

### Výkonnostné úvahy

- Veľké množstvo preložených súborov (50+ jazykov) znamená, že úplné klony sú veľké
- Používajte shallow clone, ak pracujete iba s obsahom: `git clone --depth 1`
- Pri práci s anglickým obsahom vylúčte preklady z vyhľadávania
- Build procesy môžu byť pri prvom spustení pomalé (npm install, Vite build)

## Bezpečnostné upozornenia

### Environmentálne premenne

- API kľúče by nikdy nemali byť commitnuté do repozitára
- Používajte `.env` súbory (už v `.gitignore`)
- Dokumentujte potrebné environmentálne premenne v README projektov

### Python projekty

- Používajte virtuálne prostredia: `python -m venv venv`
- Udržiavajte závislosti aktualizované
- GitHub tokeny by mali mať minimálne potrebné povolenia

### Prístup k GitHub Models

- Osobné prístupové tokeny (PAT) sú vyžadované pre GitHub Models
- Tokeny by mali byť uložené ako environmentálne premenne
- Nikdy necommitujte tokeny alebo prihlasovacie údaje

## Dodatočné poznámky

### Cieľové publikum

- Úplní začiatočníci vo webovom vývoji
- Študenti a samoukovia
- Učitelia používajúci osnovu vo vyučovaní
- Obsah navrhnutý pre prístupnosť a postupné budovanie zručností

### Vzdelávacia filozofia

- Projektovo orientované učenie
- Časté kontroly poznatkov (kvízy)
- Praktické kódovacie cvičenia
- Príklady aplikácií z reálneho sveta
- Dôraz na základy pred frameworkmi

### Údržba úložiska

- Aktívna komunita študentov a prispievateľov
- Pravidelné aktualizácie závislostí a obsahu
- Issue a diskusie monitorované správcom
- Aktualizácie prekladov automatizované cez GitHub Actions

### Súvisiace zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) odporúčaný pre študentov
- Ďalšie kurzy: Generatívna AI, Data Science, ML, IoT učebné osnovy dostupné

### Práca s konkrétnymi projektmi

Pre podrobné inštrukcie k jednotlivým projektom si pozrite README súbory v:
- `quiz-app/README.md` - Vue 3 quiz aplikácia
- `7-bank-project/README.md` - Banková aplikácia s autentifikáciou
- `5-browser-extension/README.md` - Vývoj rozšírení prehliadača
- `6-space-game/README.md` - Vývoj hry založenej na Canvas
- `9-chat-project/README.md` - AI chat asistent projekt

### Štruktúra monorepa

Aj keď nejde o tradičné monorepo, toto úložisko obsahuje niekoľko nezávislých projektov:
- Každá lekcia je samostatná
- Projekty nezdieľajú závislosti
- Pracujte na jednotlivých projektoch bez vplyvu na ostatné
- Naklonujte celé repozitárum pre kompletný zážitok z osnovy

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vymedzenie zodpovednosti**:  
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme zabezpečiť presnosť, majte prosím na pamäti, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Originálny dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu nenesieme zodpovednosť.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->