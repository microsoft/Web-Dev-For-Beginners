# AGENTS.md

## Přehled projektu

Toto je vzdělávací repozitář kurikula pro výuku základů webového vývoje pro začátečníky. Kurikulum je komplexní 12týdenní kurz vyvinutý Microsoft Cloud Advocates, obsahující 24 praktických lekcí pokrývajících JavaScript, CSS a HTML.

### Klíčové součásti

- **Vzdělávací obsah**: 24 strukturovaných lekcí uspořádaných v modulech založených na projektech
- **Praktické projekty**: Terrárium, Typovací hra, Rozšíření pro prohlížeč, Vesmírná hra, Bankovní aplikace, Editor kódu a AI chat asistent
- **Interaktivní kvízy**: 48 kvízů po 3 otázkách (před a po lekci)
- **Podpora více jazyků**: Automatické překlady do 50+ jazyků pomocí GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pro AI projekty)

### Architektura

- Vzdělávací repozitář se strukturou založenou na lekcích
- Každá složka lekce obsahuje README, ukázky kódu a řešení
- Samostatné projekty v oddělených adresářích (quiz-app, různé projekty lekcí)
- Překladový systém využívající GitHub Actions (co-op-translator)
- Dokumentace servírovaná přes Docsify a dostupná jako PDF

## Příkazy pro nastavení

Tento repozitář je primárně určen ke konzumaci vzdělávacího obsahu. Pro práci s konkrétními projekty:

### Nastavení hlavního repozitáře

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavení Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Spustit vývojový server
npm run build      # Sestavit pro produkci
npm run lint       # Spustit ESLint
```

### API projektu banky (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Spustit API server
npm run lint       # Spustit ESLint
npm run format     # Formátovat pomocí Prettier
```

### Projekty Rozšíření prohlížeče

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podle pokynů pro načítání rozšíření specifických pro prohlížeč
```

### Projekty Vesmírné hry

```bash
cd 6-space-game/solution
npm install
# Otevřete index.html v prohlížeči nebo použijte Live Server
```

### Chat projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavte proměnnou prostředí GITHUB_TOKEN
python api.py
```

## Vývojový workflow

### Pro přispěvatele obsahu

1. **Vytvořte fork** tohoto repozitáře na svůj GitHub účet
2. **Naklonujte svůj fork** lokálně
3. **Vytvořte novou větev** pro své změny
4. Proveďte změny obsahu lekcí nebo ukázek kódu
5. Otestujte všechny změny kódu v relevantních projektech
6. Odešlete pull request podle pokynů pro přispívání

### Pro studenty

1. Forkněte nebo naklonujte repozitář
2. Procházejte složky lekcí postupně
3. Čtěte README soubory ke každé lekci
4. Vyplňte předlekční kvízy na https://ff-quizzes.netlify.app/web/
5. Procházejte ukázky kódu v adresářích lekcí
6. Vyplňujte úkoly a výzvy
7. Vyplňte poválečné kvízy

### Živý vývoj

- **Dokumentace**: Spusťte `docsify serve` v kořenovém adresáři (port 3000)
- **Quiz App**: Spusťte `npm run dev` ve složce quiz-app
- **Projekty**: Použijte VS Code Live Server rozšíření pro HTML projekty
- **API Projekty**: Spusťte `npm start` v odpovídajících API složkách

## Instrukce pro testování

### Testování Quiz App

```bash
cd quiz-app
npm run lint       # Zkontrolujte problémy se stylem kódu
npm run build      # Ověřte úspěšnost sestavení
```

### Testování Bank API

```bash
cd 7-bank-project/api
npm run lint       # Zkontrolujte problémy se stylem kódu
node server.js     # Ověřte, že server startuje bez chyb
```

### Obecný přístup k testování

- Jedná se o vzdělávací repozitář bez komplexních automatických testů
- Manuální testování zahrnuje:
  - Ukázky kódu fungují bez chyb
  - Odkazy v dokumentaci jsou funkční
  - Projektové sestavení proběhne úspěšně
  - Ukázky dodržují nejlepší postupy

### Kontroly před odesláním

- Spusťte `npm run lint` ve složkách s package.json
- Ověřte platnost markdown odkazů
- Otestujte ukázky kódu v prohlížeči nebo Node.js
- Zkontrolujte, že překlady zachovávají správnou strukturu

## Pravidla stylu kódu

### JavaScript

- Používejte moderní syntaxi ES6+
- Dodržujte standardní ESLint konfigurace uváděné v projektech
- Používejte smysluplné názvy proměnných a funkcí pro lepší vzdělávací srozumitelnost
- Přidávejte komentáře vysvětlující koncepty pro studenty
- Formátujte pomocí Prettier tam, kde je nastaven

### HTML/CSS

- Sémantické HTML5 prvky
- Principy responzivního designu
- Jasná pravidla pojmenování tříd
- Komentáře vysvětlující CSS techniky pro studenty

### Python

- Dodržujte stylové zásady PEP 8
- Jasné vzdělávací příklady kódu
- Typové anotace kde pomáhají s učením

### Markdown dokumentace

- Jasná hierarchie nadpisů
- Kódové bloky s uvedením jazyka
- Odkazy na doplňkové zdroje
- Screenshoty a obrázky ve složkách `images/`
- Alternativní texty obrázků pro přístupnost

### Organizace souborů

- Lekce číslené pořadově (1-getting-started-lessons, 2-js-basics, atd.)
- Každý projekt má složky `solution/` a často `start/` nebo `your-work/`
- Obrázky uchovávány ve složkách `images/` specifických pro lekci
- Překlady ve struktuře `translations/{language-code}/`

## Sestavení a nasazení

### Nasazení Quiz App (Azure Static Web Apps)

Quiz-app je nakonfigurován pro nasazení v Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytváří složku dist/
# Nasazuje pomocí pracovního postupu GitHub Actions při pushi do větve main
```

Konfigurace Azure Static Web Apps:
- **Umístění aplikace**: `/quiz-app`
- **Výstupní složka**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generování PDF dokumentace

```bash
npm install                    # Nainstalujte docsify-to-pdf
npm run convert               # Vygenerujte PDF z docs
```

### Dokumentace v Docsify

```bash
npm install -g docsify-cli    # Nainstalujte Docsify globálně
docsify serve                 # Spusťte na localhost:3000
```

### Sestavení specifické pro projekty

Každý projekt může mít vlastní build proces:
- Vue projekty: `npm run build` vytváří produkční balíčky
- Statické projekty: Nemají sestavení, soubory se servírují přímo

## Pravidla pro pull requesty

### Formát názvu

Používejte jasné, popisné názvy indikující oblast změny:
- `[Quiz-app] Přidat nový kvíz pro lekci X`
- `[Lesson-3] Opravit překlep v projektu terrárium`
- `[Translation] Přidat španělský překlad pro lekci 5`
- `[Docs] Aktualizovat instrukce pro nastavení`

### Požadované kontroly

Před odesláním PR:

1. **Kvalita kódu**:
   - Spusťte `npm run lint` v ovlivněných složkách
   - Opravte všechny linting chyby a varování

2. **Ověření sestavení**:
   - Spusťte `npm run build` pokud je relevantní
   - Zajistěte, že nejsou chyby při sestavení

3. **Validace odkazů**:
   - Otestujte všechny markdown odkazy
   - Ověřte, že obrázky jsou dostupné

4. **Kontrola obsahu**:
   - Korektura pravopisu a gramatiky
   - Ověření správnosti a vzdělávací hodnoty kódových příkladů
   - Kontrola, že překlady zachovávají původní význam

### Požadavky na přispívání

- Souhlas s Microsoft CLA (automatická kontrola při prvním PR)
- Dodržování [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Podrobné pokyny v [CONTRIBUTING.md](./CONTRIBUTING.md)
- Pokud relevantní, odkazování na čísla issue v popisu PR

### Proces recenze

- PR jsou recenzovány správci a komunitou
- Priorita vzdělávací srozumitelnosti
- Příklady kódu by měly odpovídat aktuálním nejlepším praktikám
- Překlady jsou kontrolovány z hlediska přesnosti a kulturní vhodnosti

## Překladový systém

### Automatický překlad

- Použití GitHub Actions s workflow co-op-translator
- Překlady do 50+ jazyků automaticky
- Zdrojové soubory v hlavních adresářích
- Přeložené soubory ve složkách `translations/{language-code}/`

### Úpravy manuálních překladů

1. Najděte soubor v `translations/{language-code}/`
2. Proveďte vylepšení při zachování struktury
3. Zajistěte funkčnost kódových ukázek
4. Testujte lokalizovaný obsah kvízů

### Metadata překladu

Přeložené soubory obsahují hlavičku s metadaty:
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

## Ladění a řešení problémů

### Běžné problémy

**Quiz app se nespouští**:
- Zkontrolujte verzi Node.js (doporučeno v14+)
- Smažte `node_modules` a `package-lock.json`, spusťte `npm install` znovu
- Zkontrolujte konflikt portů (výchozí: Vite používá port 5173)

**API server nenastartuje**:
- Ověřte, že verze Node.js je minimálně (node >=10)
- Zkontrolujte, jestli port není obsazen
- Ujistěte se, že jsou všechny závislosti nainstalovány přes `npm install`

**Rozšíření prohlížeče se nenačte**:
- Ověřte správné formátování manifest.json
- Zkontrolujte konzoli prohlížeče pro chyby
- Postupujte podle pokynů pro instalaci rozšíření v daném prohlížeči

**Problémy s Python chat projektem**:
- Ujistěte se, že balíček OpenAI je nainstalován: `pip install openai`
- Zkontrolujte, že je nastavená proměnná prostředí GITHUB_TOKEN
- Překontrolujte přístupová práva GitHub Models

**Docsify nenačítá dokumentaci**:
- Globálně nainstalujte docsify-cli: `npm install -g docsify-cli`
- Spusťte z kořenového adresáře repozitáře
- Ověřte, že existuje `docs/_sidebar.md`

### Tipy pro vývojové prostředí

- Používejte VS Code s rozšířením Live Server pro HTML projekty
- Nainstalujte si ESLint a Prettier rozšíření pro konzistentní formátování
- Používejte nástroje pro vývojáře v prohlížeči pro ladění JavaScriptu
- Pro Vue projekty nainstalujte Vue DevTools rozšíření do prohlížeče

### Výkonové poznámky

- Velké množství přeložených souborů (50+ jazyků) znamená, že plné klony jsou velké
- Použijte shallow clone, pokud pracujete pouze s obsahem: `git clone --depth 1`
- Vylučujte překlady z vyhledávání při práci na anglickém obsahu
- Build procesy mohou být při prvním spuštění pomalé (npm install, Vite build)

## Bezpečnostní aspekty

### Proměnné prostředí

- API klíče nikdy necommitujte do repozitáře
- Používejte `.env` soubory (jsou v `.gitignore`)
- Dokumentujte požadované proměnné prostředí v README souborech projektů

### Python projekty

- Používejte virtuální prostředí: `python -m venv venv`
- Udržujte závislosti aktualizované
- GitHub tokeny by měly mít minimální požadovaná oprávnění

### Přístup k GitHub Models

- Pro GitHub Models jsou vyžadovány Personal Access Tokeny (PAT)
- Tokeny ukládejte jako proměnné prostředí
- Nikdy necommitujte tokeny nebo přihlašovací údaje

## Další poznámky

### Cílová skupina

- Kompletní začátečníci ve webovém vývoji
- Studenti a samouci
- Učitelé používající kurikulum ve třídách
- Obsah navržený pro přístupnost a postupné budování dovedností

### Vzdělávací filozofie

- Přístup založený na projektech
- Časté kontroly znalostí (kvízy)
- Praktická cvičení v kódování
- Ukázky reálných aplikací
- Zaměření na základy před frameworky

### Údržba repozitáře

- Aktivní komunita studentů a přispěvatelů
- Pravidelné aktualizace závislostí a obsahu
- Problémy a diskuse sledovány správci
- Aktualizace překladů automatizovány GitHub Actions

### Související zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) doporučený pro studenty
- Další kurzy: Generativní AI, Data Science, ML, IoT kurikula k dispozici

### Práce s konkrétními projekty

Pro podrobné instrukce k jednotlivým projektům odkazujte na README soubory v:
- `quiz-app/README.md` - Vue 3 aplikace kvízu
- `7-bank-project/README.md` - Bankovní aplikace s autentizací
- `5-browser-extension/README.md` - Vývoj rozšíření prohlížeče
- `6-space-game/README.md` - Vývoj hry založené na Canvasu
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Struktura monorepa

I když se nejedná o tradiční monorepo, tento repozitář obsahuje několik nezávislých projektů:
- Každá lekce je samostatná
- Projekty nesdílejí závislosti
- Pracujte na jednotlivých projektech bez ovlivnění ostatních
- Naklonujte celý repozitář pro plný zážitek kurikula

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Prohlášení o vyloučení odpovědnosti**:  
Tento dokument byl přeložen pomocí AI překladatelské služby [Co-op Translator](https://github.com/Azure/co-op-translator). I když usilujeme o přesnost, uvědomte si, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro kritické informace se doporučuje profesionální lidský překlad. Nejsme odpovědní za jakékoli nedorozumění nebo nesprávné výklady vzniklé použitím tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->