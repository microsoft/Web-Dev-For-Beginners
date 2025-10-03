<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:38:26+00:00",
  "source_file": "AGENTS.md",
  "language_code": "sk"
}
-->
# AGENTS.md

## Prehľad projektu

Toto je vzdelávací repozitár určený na výučbu základov webového vývoja pre začiatočníkov. Kurikulum je komplexný 12-týždňový kurz vyvinutý tímom Microsoft Cloud Advocates, ktorý obsahuje 24 praktických lekcií zameraných na JavaScript, CSS a HTML.

### Kľúčové komponenty

- **Vzdelávací obsah**: 24 štruktúrovaných lekcií organizovaných do modulov založených na projektoch
- **Praktické projekty**: Terárium, Hra na písanie, Rozšírenie prehliadača, Hra vo vesmíre, Banková aplikácia, Editor kódu a AI chatovací asistent
- **Interaktívne kvízy**: 48 kvízov, každý s 3 otázkami (pred/po lekcii)
- **Podpora viacerých jazykov**: Automatizované preklady do viac ako 50 jazykov pomocou GitHub Actions
- **Technológie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pre AI projekty)

### Architektúra

- Vzdelávací repozitár so štruktúrou založenou na lekciách
- Každý priečinok lekcie obsahuje README, príklady kódu a riešenia
- Samostatné projekty v oddelených adresároch (quiz-app, rôzne projekty lekcií)
- Systém prekladov pomocou GitHub Actions (co-op-translator)
- Dokumentácia dostupná cez Docsify a vo formáte PDF

## Príkazy na nastavenie

Tento repozitár je primárne určený na konzumáciu vzdelávacieho obsahu. Pre prácu s konkrétnymi projektmi:

### Nastavenie hlavného repozitára

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavenie aplikácie Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API pre bankový projekt (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Projekty rozšírenia prehliadača

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Projekty hry vo vesmíre

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Projekt chatu (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Pracovný postup vývoja

### Pre prispievateľov obsahu

1. **Forknite repozitár** do svojho GitHub účtu
2. **Naklonujte svoj fork** lokálne
3. **Vytvorte novú vetvu** pre svoje zmeny
4. Upravte obsah lekcií alebo príklady kódu
5. Otestujte zmeny kódu v relevantných adresároch projektov
6. Podajte pull request podľa pokynov na prispievanie

### Pre študentov

1. Forknite alebo naklonujte repozitár
2. Postupne prechádzajte adresármi lekcií
3. Prečítajte si README súbory každej lekcie
4. Dokončite kvízy pred lekciou na https://ff-quizzes.netlify.app/web/
5. Prejdite si príklady kódu v priečinkoch lekcií
6. Splňte úlohy a výzvy
7. Dokončite kvízy po lekcii

### Živý vývoj

- **Dokumentácia**: Spustite `docsify serve` v root adresári (port 3000)
- **Quiz App**: Spustite `npm run dev` v adresári quiz-app
- **Projekty**: Použite rozšírenie Live Server vo VS Code pre HTML projekty
- **API projekty**: Spustite `npm start` v príslušných adresároch API

## Pokyny na testovanie

### Testovanie aplikácie Quiz App

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Testovanie Bank API

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Všeobecný prístup k testovaniu

- Toto je vzdelávací repozitár bez komplexných automatizovaných testov
- Manuálne testovanie sa zameriava na:
  - Spustenie príkladov kódu bez chýb
  - Funkčnosť odkazov v dokumentácii
  - Úspešné zostavenie projektov
  - Dodržiavanie najlepších praktík v príkladoch

### Kontroly pred odoslaním

- Spustite `npm run lint` v adresároch s package.json
- Overte platnosť odkazov v markdown súboroch
- Otestujte príklady kódu v prehliadači alebo Node.js
- Skontrolujte, či preklady zachovávajú správnu štruktúru

## Pokyny pre štýl kódu

### JavaScript

- Používajte modernú syntax ES6+
- Dodržiavajte štandardné konfigurácie ESLint uvedené v projektoch
- Používajte zrozumiteľné názvy premenných a funkcií pre vzdelávaciu jasnosť
- Pridávajte komentáre vysvetľujúce koncepty pre študentov
- Formátujte pomocou Prettier, kde je nakonfigurovaný

### HTML/CSS

- Semantické HTML5 elementy
- Princípy responzívneho dizajnu
- Jasné konvencie pomenovania tried
- Komentáre vysvetľujúce techniky CSS pre študentov

### Python

- Štýlové pokyny PEP 8
- Jasné, vzdelávacie príklady kódu
- Typové anotácie tam, kde sú užitočné pre učenie

### Dokumentácia v Markdown

- Jasná hierarchia nadpisov
- Bloky kódu so špecifikáciou jazyka
- Odkazy na ďalšie zdroje
- Screenshoty a obrázky v adresároch `images/`
- Alt text pre obrázky kvôli prístupnosti

### Organizácia súborov

- Lekcie číslované postupne (1-getting-started-lessons, 2-js-basics, atď.)
- Každý projekt má adresáre `solution/` a často aj `start/` alebo `your-work/`
- Obrázky uložené v špecifických adresároch lekcií `images/`
- Preklady v štruktúre `translations/{language-code}/`

## Zostavenie a nasadenie

### Nasadenie aplikácie Quiz App (Azure Static Web Apps)

Aplikácia quiz-app je nakonfigurovaná na nasadenie cez Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Konfigurácia Azure Static Web Apps:
- **Umiestnenie aplikácie**: `/quiz-app`
- **Umiestnenie výstupu**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generovanie PDF dokumentácie

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Dokumentácia Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Zostavenie špecifické pre projekty

Každý adresár projektu môže mať vlastný proces zostavenia:
- Projekty Vue: `npm run build` vytvára produkčné balíky
- Statické projekty: Žiadny krok zostavenia, súbory sa servírujú priamo

## Pokyny pre pull requesty

### Formát názvu

Používajte jasné, popisné názvy indikujúce oblasť zmeny:
- `[Quiz-app] Pridať nový kvíz pre lekciu X`
- `[Lesson-3] Opraviť preklep v projekte terária`
- `[Translation] Pridať španielsky preklad pre lekciu 5`
- `[Docs] Aktualizovať pokyny na nastavenie`

### Požadované kontroly

Pred odoslaním PR:

1. **Kvalita kódu**:
   - Spustite `npm run lint` v dotknutých adresároch projektov
   - Opravte všetky chyby a varovania lintingu

2. **Overenie zostavenia**:
   - Spustite `npm run build`, ak je to relevantné
   - Uistite sa, že nie sú žiadne chyby zostavenia

3. **Validácia odkazov**:
   - Otestujte všetky odkazy v markdown súboroch
   - Overte funkčnosť referencií na obrázky

4. **Kontrola obsahu**:
   - Skontrolujte pravopis a gramatiku
   - Uistite sa, že príklady kódu sú správne a vzdelávacie
   - Overte, že preklady zachovávajú pôvodný význam

### Požiadavky na prispievanie

- Súhlas s Microsoft CLA (automatická kontrola pri prvom PR)
- Dodržiavanie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pozrite si [CONTRIBUTING.md](./CONTRIBUTING.md) pre podrobné pokyny
- Referencujte čísla problémov v popise PR, ak je to relevantné

### Proces kontroly

- PR sú kontrolované správcami a komunitou
- Prioritou je vzdelávacia jasnosť
- Príklady kódu by mali dodržiavať aktuálne najlepšie praktiky
- Preklady sú kontrolované na presnosť a kultúrnu vhodnosť

## Systém prekladov

### Automatizovaný preklad

- Používa GitHub Actions s workflowom co-op-translator
- Automaticky prekladá do viac ako 50 jazykov
- Zdrojové súbory v hlavných adresároch
- Preložené súbory v adresároch `translations/{language-code}/`

### Pridávanie manuálnych vylepšení prekladu

1. Nájdite súbor v `translations/{language-code}/`
2. Urobte vylepšenia pri zachovaní štruktúry
3. Uistite sa, že príklady kódu zostávajú funkčné
4. Otestujte lokalizovaný obsah kvízov

### Metaúdaje prekladu

Preložené súbory obsahujú hlavičku metaúdajov:
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

**Aplikácia Quiz App sa nespustí**:
- Skontrolujte verziu Node.js (odporúčaná v14+)
- Odstráňte `node_modules` a `package-lock.json`, znova spustite `npm install`
- Skontrolujte konflikty portov (predvolené: Vite používa port 5173)

**API server sa nespustí**:
- Overte, že verzia Node.js spĺňa minimum (node >=10)
- Skontrolujte, či port už nie je obsadený
- Uistite sa, že všetky závislosti sú nainštalované pomocou `npm install`

**Rozšírenie prehliadača sa nenačíta**:
- Overte, že manifest.json je správne formátovaný
- Skontrolujte chyby v konzole prehliadača
- Postupujte podľa pokynov na inštaláciu rozšírenia pre konkrétny prehliadač

**Problémy s projektom Python chatu**:
- Uistite sa, že balík OpenAI je nainštalovaný: `pip install openai`
- Overte, že premenná prostredia GITHUB_TOKEN je nastavená
- Skontrolujte prístupové povolenia pre GitHub Models

**Docsify neservíruje dokumentáciu**:
- Nainštalujte docsify-cli globálne: `npm install -g docsify-cli`
- Spustite z root adresára repozitára
- Skontrolujte, že existuje `docs/_sidebar.md`

### Tipy pre vývojové prostredie

- Používajte VS Code s rozšírením Live Server pre HTML projekty
- Nainštalujte rozšírenia ESLint a Prettier pre konzistentné formátovanie
- Používajte DevTools prehliadača na ladenie JavaScriptu
- Pre projekty Vue nainštalujte rozšírenie Vue DevTools prehliadača

### Úvahy o výkone

- Veľký počet preložených súborov (50+ jazykov) znamená, že úplné klony sú veľké
- Použite plytký klon, ak pracujete iba na obsahu: `git clone --depth 1`
- Vylúčte preklady z vyhľadávania pri práci na anglickom obsahu
- Procesy zostavenia môžu byť pomalé pri prvom spustení (npm install, Vite build)

## Úvahy o bezpečnosti

### Premenné prostredia

- API kľúče by nikdy nemali byť commitované do repozitára
- Používajte `.env` súbory (už v `.gitignore`)
- Dokumentujte požadované premenné prostredia v README projektov

### Python projekty

- Používajte virtuálne prostredia: `python -m venv venv`
- Udržujte závislosti aktuálne
- Tokeny GitHub by mali mať minimálne požadované povolenia

### Prístup k GitHub Models

- Vyžadujú sa osobné prístupové tokeny (PAT) pre GitHub Models
- Tokeny by mali byť uložené ako premenné prostredia
- Nikdy necommitujte tokeny alebo prihlasovacie údaje

## Ďalšie poznámky

### Cieľová skupina

- Úplní začiatočníci vo webovom vývoji
- Študenti a samouci
- Učitelia používajúci kurikulum v triedach
- Obsah je navrhnutý pre prístupnosť a postupné budovanie zručností

### Vzdelávacia filozofia

- Prístup založený na projektoch
- Časté kontroly vedomostí (kvízy)
- Praktické cvičenia kódovania
- Príklady aplikácií z reálneho sveta
- Zameranie na základy pred frameworkami

### Údržba repozitára

- Aktívna komunita študentov a prispievateľov
- Pravidelné aktualizácie závislostí a obsahu
- Problémy a diskusie monitorované správcami
- Aktualizácie prekladov automatizované cez GitHub Actions

### Súvisiace zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Študentské zdroje Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) odporúčaný pre študentov
- Ďalšie kurzy: Generatívna AI, Data Science, ML, IoT kurikulum dostupné

### Práca s konkrétnymi projektmi

Pre podrobné pokyny k jednotlivým projektom si pozrite README súbory v:
- `quiz-app/README.md` - Aplikácia kvízov Vue 3
- `7-bank-project/README.md` - Banková aplikácia s autentifikáciou
- `5-browser-extension/README.md` - Vývoj rozšírenia prehliadača
- `6-space-game/README.md` - Vývoj hry na plátne
- `9-chat-project/README.md` - Projekt AI chatovacieho asistenta

### Štruktúra monorepo

Aj keď nejde o tradičné monorepo, tento repozitár obsahuje viacero nezávislých projektov:
- Každá lekcia je samostatná
- Projekty nezdieľajú závislosti
- Práca na jednotlivých projektoch bez ovplyvnenia ostatných
- Naklonujte celý repozitár pre kompletný zážitok z kurikula

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.