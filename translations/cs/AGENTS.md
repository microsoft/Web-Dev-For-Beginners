# AGENTS.md

## Přehled projektu

Toto je vzdělávací úložiště určené k výuce základů webového vývoje pro začátečníky. Kurikulum je komplexní 12týdenní kurz vyvinutý Microsoft Cloud Advocates, který obsahuje 24 praktických lekcí zaměřených na JavaScript, CSS a HTML.

### Klíčové komponenty

- **Vzdělávací obsah**: 24 strukturovaných lekcí organizovaných do modulů založených na projektech
- **Praktické projekty**: Terárium, hra na psaní, rozšíření pro prohlížeč, vesmírná hra, bankovní aplikace, editor kódu a AI chatovací asistent
- **Interaktivní kvízy**: 48 kvízů, každý s 3 otázkami (před/po lekci)
- **Podpora více jazyků**: Automatické překlady do více než 50 jazyků pomocí GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pro AI projekty)

### Architektura

- Vzdělávací úložiště se strukturou založenou na lekcích
- Každá složka lekce obsahuje README, příklady kódu a řešení
- Samostatné projekty v oddělených adresářích (quiz-app, různé projekty lekcí)
- Systém překladů pomocí GitHub Actions (co-op-translator)
- Dokumentace poskytovaná přes Docsify a dostupná jako PDF

## Příkazy pro nastavení

Toto úložiště je primárně určeno pro konzumaci vzdělávacího obsahu. Pro práci s konkrétními projekty:

### Nastavení hlavního úložiště

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavení aplikace Quiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API bankovního projektu (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Projekty rozšíření pro prohlížeč

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Projekty vesmírné hry

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

## Pracovní postup vývoje

### Pro přispěvatele obsahu

1. **Forkněte úložiště** na svůj GitHub účet
2. **Naklonujte svůj fork** lokálně
3. **Vytvořte novou větev** pro své změny
4. Proveďte změny v obsahu lekcí nebo příkladech kódu
5. Otestujte změny kódu v relevantních adresářích projektů
6. Odešlete pull requesty podle pokynů pro přispívání

### Pro studenty

1. Forkněte nebo naklonujte úložiště
2. Postupujte sekvenčně v adresářích lekcí
3. Přečtěte si README soubory pro každou lekci
4. Dokončete kvízy před lekcí na https://ff-quizzes.netlify.app/web/
5. Projděte příklady kódu v složkách lekcí
6. Dokončete úkoly a výzvy
7. Absolvujte kvízy po lekci

### Živý vývoj

- **Dokumentace**: Spusťte `docsify serve` v rootu (port 3000)
- **Aplikace Quiz**: Spusťte `npm run dev` v adresáři quiz-app
- **Projekty**: Použijte rozšíření Live Server ve VS Code pro HTML projekty
- **API projekty**: Spusťte `npm start` v příslušných adresářích API

## Pokyny pro testování

### Testování aplikace Quiz

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Testování API bankovního projektu

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Obecný přístup k testování

- Toto je vzdělávací úložiště bez komplexních automatizovaných testů
- Manuální testování se zaměřuje na:
  - Příklady kódu běží bez chyb
  - Odkazy v dokumentaci fungují správně
  - Projekty se úspěšně sestaví
  - Příklady dodržují nejlepší praktiky

### Kontroly před odesláním

- Spusťte `npm run lint` v adresářích s package.json
- Ověřte platnost odkazů v markdownu
- Otestujte příklady kódu v prohlížeči nebo Node.js
- Zkontrolujte, že překlady zachovávají správnou strukturu

## Pokyny pro styl kódu

### JavaScript

- Používejte moderní syntaxi ES6+
- Dodržujte standardní konfigurace ESLint poskytované v projektech
- Používejte smysluplné názvy proměnných a funkcí pro vzdělávací přehlednost
- Přidávejte komentáře vysvětlující koncepty pro studenty
- Formátujte pomocí Prettier, kde je nakonfigurován

### HTML/CSS

- Semantické HTML5 prvky
- Principy responzivního designu
- Jasné konvence pojmenování tříd
- Komentáře vysvětlující techniky CSS pro studenty

### Python

- Pokyny pro styl PEP 8
- Jasné, vzdělávací příklady kódu
- Typové anotace tam, kde jsou užitečné pro výuku

### Dokumentace v Markdownu

- Jasná hierarchie nadpisů
- Bloky kódu se specifikací jazyka
- Odkazy na další zdroje
- Snímky obrazovky a obrázky v adresářích `images/`
- Alternativní text pro obrázky kvůli přístupnosti

### Organizace souborů

- Lekce číslované sekvenčně (1-getting-started-lessons, 2-js-basics, atd.)
- Každý projekt má `solution/` a často `start/` nebo `your-work/` adresáře
- Obrázky uložené v lekci-specifických složkách `images/`
- Překlady ve struktuře `translations/{language-code}/`

## Sestavení a nasazení

### Nasazení aplikace Quiz (Azure Static Web Apps)

Aplikace quiz-app je nakonfigurována pro nasazení na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Konfigurace Azure Static Web Apps:
- **Umístění aplikace**: `/quiz-app`
- **Umístění výstupu**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generování PDF dokumentace

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Dokumentace Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Sestavení specifické pro projekt

Každý adresář projektu může mít vlastní proces sestavení:
- Projekty Vue: `npm run build` vytvoří produkční balíčky
- Statické projekty: Žádný krok sestavení, soubory se servírují přímo

## Pokyny pro pull requesty

### Formát názvu

Používejte jasné, popisné názvy označující oblast změny:
- `[Quiz-app] Přidat nový kvíz pro lekci X`
- `[Lesson-3] Opravit překlep v projektu terária`
- `[Translation] Přidat španělský překlad pro lekci 5`
- `[Docs] Aktualizovat pokyny pro nastavení`

### Požadované kontroly

Před odesláním PR:

1. **Kvalita kódu**:
   - Spusťte `npm run lint` v ovlivněných adresářích projektů
   - Opravte všechny chyby a varování lintingu

2. **Ověření sestavení**:
   - Spusťte `npm run build`, pokud je to relevantní
   - Ujistěte se, že nejsou žádné chyby sestavení

3. **Validace odkazů**:
   - Otestujte všechny odkazy v markdownu
   - Ověřte, že odkazy na obrázky fungují

4. **Revize obsahu**:
   - Zkontrolujte pravopis a gramatiku
   - Ujistěte se, že příklady kódu jsou správné a vzdělávací
   - Ověřte, že překlady zachovávají původní význam

### Požadavky na přispívání

- Souhlas s Microsoft CLA (automatická kontrola při prvním PR)
- Dodržování [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Viz [CONTRIBUTING.md](./CONTRIBUTING.md) pro podrobné pokyny
- Odkazujte čísla problémů v popisu PR, pokud je to relevantní

### Proces revize

- PR jsou revidovány správci a komunitou
- Prioritou je vzdělávací přehlednost
- Příklady kódu by měly dodržovat aktuální nejlepší praktiky
- Překlady jsou revidovány z hlediska přesnosti a kulturní vhodnosti

## Systém překladů

### Automatický překlad

- Používá GitHub Actions s workflow co-op-translator
- Automaticky překládá do více než 50 jazyků
- Zdrojové soubory v hlavních adresářích
- Přeložené soubory ve struktuře `translations/{language-code}/`

### Přidání manuálních vylepšení překladu

1. Najděte soubor ve `translations/{language-code}/`
2. Proveďte vylepšení při zachování struktury
3. Ujistěte se, že příklady kódu zůstávají funkční
4. Otestujte jakýkoli lokalizovaný obsah kvízů

### Metadata překladu

Přeložené soubory obsahují záhlaví metadat:
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

**Aplikace Quiz se nespustí**:
- Zkontrolujte verzi Node.js (doporučeno v14+)
- Smažte `node_modules` a `package-lock.json`, znovu spusťte `npm install`
- Zkontrolujte konflikty portů (výchozí: Vite používá port 5173)

**API server se nespustí**:
- Ověřte, že verze Node.js splňuje minimum (node >=10)
- Zkontrolujte, zda port již není používán
- Ujistěte se, že všechny závislosti jsou nainstalovány pomocí `npm install`

**Rozšíření prohlížeče se nenačte**:
- Ověřte, že manifest.json je správně formátován
- Zkontrolujte chyby v konzoli prohlížeče
- Postupujte podle pokynů pro instalaci rozšíření specifických pro prohlížeč

**Problémy s projektem Python chatu**:
- Ujistěte se, že je nainstalován balíček OpenAI: `pip install openai`
- Ověřte, že je nastavena proměnná prostředí GITHUB_TOKEN
- Zkontrolujte oprávnění přístupu k GitHub Models

**Docsify neobsluhuje dokumenty**:
- Nainstalujte docsify-cli globálně: `npm install -g docsify-cli`
- Spusťte z kořenového adresáře úložiště
- Zkontrolujte, že existuje `docs/_sidebar.md`

### Tipy pro vývojové prostředí

- Používejte VS Code s rozšířením Live Server pro HTML projekty
- Nainstalujte rozšíření ESLint a Prettier pro konzistentní formátování
- Používejte DevTools prohlížeče pro ladění JavaScriptu
- Pro projekty Vue nainstalujte rozšíření Vue DevTools prohlížeče

### Úvahy o výkonu

- Velký počet přeložených souborů (50+ jazyků) znamená, že úplné klony jsou velké
- Použijte mělký klon, pokud pracujete pouze na obsahu: `git clone --depth 1`
- Vyloučte překlady z vyhledávání při práci na obsahu v angličtině
- Procesy sestavení mohou být při prvním spuštění pomalé (npm install, Vite build)

## Úvahy o bezpečnosti

### Proměnné prostředí

- API klíče by nikdy neměly být přidány do úložiště
- Používejte `.env` soubory (již v `.gitignore`)
- Dokumentujte požadované proměnné prostředí v README projektů

### Python projekty

- Používejte virtuální prostředí: `python -m venv venv`
- Udržujte závislosti aktuální
- Tokeny GitHub by měly mít minimální požadovaná oprávnění

### Přístup k GitHub Models

- Vyžadovány osobní přístupové tokeny (PAT) pro GitHub Models
- Tokeny by měly být uloženy jako proměnné prostředí
- Nikdy nepřidávejte tokeny nebo přihlašovací údaje

## Další poznámky

### Cílová skupina

- Úplní začátečníci ve webovém vývoji
- Studenti a samouci
- Učitelé používající kurikulum ve třídách
- Obsah je navržen pro přístupnost a postupné budování dovedností

### Vzdělávací filozofie

- Přístup založený na projektech
- Časté kontroly znalostí (kvízy)
- Praktická cvičení v kódování
- Příklady aplikací z reálného světa
- Důraz na základy před frameworky

### Údržba úložiště

- Aktivní komunita studentů a přispěvatelů
- Pravidelné aktualizace závislostí a obsahu
- Problémy a diskuse monitorovány správci
- Aktualizace překladů automatizované pomocí GitHub Actions

### Související zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) doporučený pro studenty
- Další kurzy: Generativní AI, Data Science, ML, IoT kurikula k dispozici

### Práce s konkrétními projekty

Pro podrobné pokyny k jednotlivým projektům viz README soubory v:
- `quiz-app/README.md` - aplikace kvízů Vue 3
- `7-bank-project/README.md` - bankovní aplikace s autentizací
- `5-browser-extension/README.md` - vývoj rozšíření pro prohlížeč
- `6-space-game/README.md` - vývoj hry založené na Canvasu
- `9-chat-project/README.md` - projekt AI chatovacího asistenta

### Struktura monorepo

I když nejde o tradiční monorepo, toto úložiště obsahuje několik nezávislých projektů:
- Každá lekce je samostatná
- Projekty nesdílejí závislosti
- Práce na jednotlivých projektech bez ovlivnění ostatních
- Naklonujte celé úložiště pro plný zážitek z kurikula

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.