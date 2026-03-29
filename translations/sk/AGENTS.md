# AGENTS.md

## Prehľad projektu

Toto je repozitár vzdelávacieho učebného plánu na výučbu základov webového vývoja pre začiatočníkov. Učebný plán je komplexný 12-týždňový kurz vyvinutý Microsoft Cloud Advocates, ktorý obsahuje 24 praktických lekcií pokrývajúcich JavaScript, CSS a HTML.

### Kľúčové súčasti

- **Educational Content**: 24 štruktúrovaných lekcií organizovaných do modulov založených na projektoch
- **Practical Projects**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor, and AI Chat Assistant
- **Interactive Quizzes**: 48 kvízov po 3 otázky (hodnotenia pred/po lekcii)
- **Multi-language Support**: Automatické preklady do 50+ jazykov cez GitHub Actions
- **Technologies**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pre AI projekty)

### Architektúra

- Vzdelávací repozitár so štruktúrou založenou na lekciách
- Každá zložka lekcie obsahuje README, príklady kódu a riešenia
- Samostatné projekty v oddelených adresároch (quiz-app, rôzne projekty lekcií)
- Systém prekladov využívajúci GitHub Actions (co-op-translator)
- Dokumentácia servírovaná cez Docsify a dostupná ako PDF

## Príkazy na nastavenie

Tento repozitár je primárne určený na konzumáciu vzdelávacieho obsahu. Pre prácu s konkrétnymi projektmi:

### Hlavné nastavenie repozitára

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavenie Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Spustiť vývojový server
npm run build      # Zostaviť pre produkciu
npm run lint       # Spustiť ESLint
```

### API bankového projektu (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Spustiť API server
npm run lint       # Spustiť ESLint
npm run format     # Naformátovať pomocou Prettieru
```

### Projekty rozšírení prehliadača

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podľa pokynov na načítanie rozšírenia, ktoré sú špecifické pre prehliadač
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

## Vývojový pracovný postup

### Pre prispievateľov obsahu

1. **Vytvorte fork repozitára** do svojho GitHub účtu
2. **Klonujte svoj fork** lokálne
3. **Vytvorte novú vetvu** pre svoje zmeny
4. Upravte obsah lekcie alebo príklady kódu
5. Otestujte zmeny kódu v príslušných adresároch projektov
6. Odošlite pull requesty podľa pokynov na prispievanie

### Pre študentov

1. Vytvorte fork alebo sklonujte repozitár
2. Prejdite do priečinkov lekcií postupne
3. Prečítajte si README súbory pre každú lekciu
4. Vyplňte kvízy pred lekciou na https://ff-quizzes.netlify.app/web/
5. Prejdite si príklady kódu v priečinkoch lekcií
6. Dokončite úlohy a výzvy
7. Urobte kvízy po lekcii

### Živý vývoj

- **Dokumentácia**: Spustite `docsify serve` v koreňovom adresári (port 3000)
- **Quiz App**: Spustite `npm run dev` v adresári quiz-app
- **Projekty**: Použite rozšírenie VS Code Live Server pre HTML projekty
- **API projekty**: Spustite `npm start` v príslušných adresároch API

## Pokyny na testovanie

### Testovanie Quiz App

```bash
cd quiz-app
npm run lint       # Skontrolujte chyby v štýle kódu
npm run build      # Overte, že zostavenie bude úspešné
```

### Testovanie Bank API

```bash
cd 7-bank-project/api
npm run lint       # Skontrolujte problémy so štýlom kódu
node server.js     # Overte, že server sa spustí bez chýb
```

### Všeobecný prístup k testovaniu

- Toto je vzdelávací repozitár bez komplexných automatizovaných testov
- Manuálne testovanie sa zameriava na:
  - Príklady kódu sa spúšťajú bez chýb
  - Odkazy v dokumentácii fungujú správne
  - Buildy projektov sa úspešne dokončia
  - Príklady dodržiavajú osvedčené postupy

### Kontroly pred odoslaním

- Spustite `npm run lint` v adresároch s package.json
- Overte, že markdown odkazy sú platné
- Otestujte príklady kódu v prehliadači alebo Node.js
- Skontrolujte, že preklady zachovávajú správnu štruktúru

## Pokyny k štýlu kódu

### JavaScript

- Používajte modernú syntax ES6+
- Dodržiavajte štandardné konfigurácie ESLint poskytované v projektoch
- Používajte zmysluplné názvy premenných a funkcií pre vzdelávaciu zrozumiteľnosť
- Pridávajte komentáre vysvetľujúce koncepty pre študentov
- Formátujte pomocou Prettier tam, kde je nakonfigurovaný

### HTML/CSS

- Sémantické elementy HTML5
- Zásady responzívneho dizajnu
- Jasné konvencie pomenovania tried
- Komentáre vysvetľujúce CSS techniky pre študentov

### Python

- Štýlové pokyny PEP 8
- Jasné, vzdelávacie príklady kódu
- Označovanie typov tam, kde pomáha pri učení

### Dokumentácia v Markdown

- Jasná hierarchia nadpisov
- Bloky kódu so špecifikáciou jazyka
- Odkazy na ďalšie zdroje
- Snímky obrazovky a obrázky v adresároch `images/`
- Alternatívny text pre obrázky z dôvodu prístupnosti

### Organizácia súborov

- Lekcie očíslované postupne (1-getting-started-lessons, 2-js-basics, etc.)
- Každý projekt má adresáre `solution/` a často `start/` alebo `your-work/`
- Obrázky uložené v priečinkoch `images/` pre každú lekciu
- Preklady v štruktúre `translations/{language-code}/`

## Build a nasadenie

### Nasadenie Quiz App (Azure Static Web Apps)

Quiz-app je nakonfigurovaný pre nasadenie na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytvorí priečinok dist/
# Nasadzuje cez workflow GitHub Actions pri pushi do vetvy main
```

Konfigurácia Azure Static Web Apps:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generovanie PDF dokumentácie

```bash
npm install                    # Nainštalovať docsify-to-pdf
npm run convert               # Vygenerovať PDF z dokumentácie
```

### Dokumentácia Docsify

```bash
npm install -g docsify-cli    # Nainštalujte Docsify globálne
docsify serve                 # Spustite server na localhost:3000
```

### Špecifické buildy projektov

Každý adresár projektu môže mať vlastný build proces:
- Vue projekty: `npm run build` vytvorí produkčné balíky
- Statické projekty: Bez kroku build, súbory podávajte priamo

## Pokyny pre Pull Requesty

### Formát názvu

Použite jasné, popisné názvy, ktoré uvádzajú oblasť zmeny:
- `[Quiz-app] Pridať nový kvíz pre lekciu X`
- `[Lesson-3] Opravte preklep v projekte terrarium`
- `[Translation] Pridať španielsky preklad pre lekciu 5`
- `[Docs] Aktualizujte inštrukcie na nastavenie`

### Povinné kontroly

Pred odoslaním PR:

1. **Kvalita kódu**:
   - Spustite `npm run lint` v postihnutých adresároch projektov
   - Opravte všetky linting chyby a varovania

2. **Overenie buildu**:
   - Spustite `npm run build`, ak je to relevantné
   - Uistite sa, že nie sú žiadne chyby pri buildovaní

3. **Overenie odkazov**:
   - Otestujte všetky markdown odkazy
   - Overte, že odkaz na obrázky funguje

4. **Kontrola obsahu**:
   - Korektúra pravopisu a gramatiky
   - Zabezpečte, aby boli príklady kódu správne a vzdelávacie
   - Overte, že preklady zachovávajú pôvodný význam

### Požiadavky na príspevok

- Súhlasiť s Microsoft CLA (automatická kontrola pri prvom PR)
- Dodržiavajte [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pozrite si [CONTRIBUTING.md](./CONTRIBUTING.md) pre podrobné usmernenia
- Uveďte čísla issue v popise PR, ak sú relevantné

### Proces revízie

- PR sú kontrolované maintainermi a komunitou
- Uprednostňuje sa vzdelávacia zrozumiteľnosť
- Príklady kódu by mali dodržiavať súčasné osvedčené postupy
- Preklady sa kontrolujú z hľadiska presnosti a kultúrnej vhodnosti

## Systém prekladov

### Automatizovaný preklad

- Využíva GitHub Actions s workflow co-op-translator
- Automaticky prekladá do 50+ jazykov
- Zdrojové súbory v hlavných adresároch
- Preložené súbory v adresároch `translations/{language-code}/`

### Pridávanie manuálnych vylepšení prekladov

1. Nájdite súbor v `translations/{language-code}/`
2. Urobte úpravy pri zachovaní štruktúry
3. Zabezpečte, aby príklady kódu zostali funkčné
4. Otestujte akýkoľvek lokalizovaný obsah kvízov

### Metadáta prekladu

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

**Quiz app sa nespustí**:
- Skontrolujte verziu Node.js (odporúčané v14+)
- Vymažte `node_modules` a `package-lock.json`, potom znova spustite `npm install`
- Skontrolujte konflikty portov (predvolené: Vite používa port 5173)

**API server sa nespustí**:
- Overte, že verzia Node.js spĺňa minimum (node >=10)
- Skontrolujte, či port už nie je používaný
- Uistite sa, že všetky závislosti sú nainštalované pomocou `npm install`

**Rozšírenie prehliadača sa nenačíta**:
- Overte, či je manifest.json správne naformátovaný
- Skontrolujte konzolu prehliadača pre chyby
- Postupujte podľa pokynov na inštaláciu rozšírenia špecifických pre prehliadač

**Problémy s Python chat projektom**:
- Uistite sa, že balík OpenAI je nainštalovaný: `pip install openai`
- Overte, že premenná prostredia GITHUB_TOKEN je nastavená
- Skontrolujte oprávnenia prístupu k GitHub Models

**Docsify nespúšťa dokumentáciu**:
- Nainštalujte docsify-cli globálne: `npm install -g docsify-cli`
- Spustite z koreňového adresára repozitára
- Skontrolujte, či existuje `docs/_sidebar.md`

### Tipy pre vývojové prostredie

- Používajte VS Code s rozšírením Live Server pre HTML projekty
- Nainštalujte rozšírenia ESLint a Prettier pre konzistentné formátovanie
- Používajte DevTools prehliadača na ladenie JavaScriptu
- Pre Vue projekty nainštalujte rozšírenie Vue DevTools do prehliadača

### Výkonové úvahy

- Veľký počet preložených súborov (50+ jazykov) znamená, že plné klony sú veľké
- Použite shallow clone, ak pracujete iba s obsahom: `git clone --depth 1`
- Vylúčte preklady z vyhľadávania pri práci s anglickým obsahom
- Build procesy môžu byť pri prvom spustení pomalé (npm install, Vite build)

## Bezpečnostné opatrenia

### Premenné prostredia

- API kľúče by nikdy nemali byť commitnuté do repozitára
- Používajte `.env` súbory (už v `.gitignore`)
- Zdokumentujte požadované premenné prostredia v README súboroch projektov

### Python projekty

- Používajte virtuálne prostredia: `python -m venv venv`
- Udržiavajte závislosti aktuálne
- GitHub tokeny by mali mať minimálne potrebné oprávnenia

### Prístup k GitHub Models

- Osobné prístupové tokeny (PAT) sú potrebné pre GitHub Models
- Tokeny by mali byť uložené ako premenné prostredia
- Nikdy necommitujte tokeny alebo poverenia

## Ďalšie poznámky

### Cieľové publikum

- Úplní začiatočníci vo webovom vývoji
- Študenti a samouci
- Učitelia používajúci učebný plán v triedach
- Obsah je navrhnutý pre prístupnosť a postupné budovanie zručností

### Vzdelávacia filozofia

- Prístup založený na učení sa cez projekty
- Časté kontroly vedomostí (kvízy)
- Praktické cvičenia v kódovaní
- Príklady reálnych aplikácií
- Zameranie na základy pred frameworkmi

### Údržba repozitára

- Aktívna komunita študentov a prispievateľov
- Pravidelné aktualizácie závislostí a obsahu
- Issues a diskusie sú monitorované maintainerami
- Aktualizácie prekladov automatizované cez GitHub Actions

### Súvisiace zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Zdroje Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) odporúčaný pre študentov
- Ďalšie kurzy: Generative AI, Data Science, ML, IoT učebné osnovy sú dostupné

### Práca s konkrétnymi projektmi

Pre podrobné inštrukcie k jednotlivým projektom sa odkazujte na README súbory v:
- `quiz-app/README.md` - Vue 3 kvízová aplikácia
- `7-bank-project/README.md` - Banková aplikácia s autentifikáciou
- `5-browser-extension/README.md` - Vývoj rozšírenia prehliadača
- `6-space-game/README.md` - Vývoj hry založenej na Canvas
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Štruktúra monorepa

Aj keď nejde o tradičné monorepo, tento repozitár obsahuje viacero nezávislých projektov:
- Každá lekcia je samostatná
- Projekty nezdieľajú závislosti
- Pracujte na jednotlivých projektoch bez ovplyvnenia ostatných
- Naklonujte celý repozitár pre kompletnú skúsenosť s učebným plánom

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vylúčenie zodpovednosti**:
Tento dokument bol preložený pomocou služby prekladu založenej na umelej inteligencii [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, upozorňujeme, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by sa mal považovať za záväzný zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne výklady vyplývajúce z použitia tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->