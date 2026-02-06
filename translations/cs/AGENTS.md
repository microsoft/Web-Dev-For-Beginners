# AGENTS.md

## Přehled projektu

Toto je vzdělávací repozitář kurikula pro výuku základů webového vývoje pro začátečníky. Kurikulum je komplexní 12týdenní kurz vyvinutý Microsoft Cloud Advocates, obsahující 24 praktických lekcí pokrývajících JavaScript, CSS a HTML.

### Klíčové součásti

- **Vzdělávací obsah**: 24 strukturovaných lekcí uspořádaných do modulů založených na projektech
- **Praktické projekty**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor a AI Chat Assistant
- **Interaktivní kvízy**: 48 kvízů po 3 otázkách (před a po lekci)
- **Vícejazyčná podpora**: Automatické překlady do více než 50 jazyků pomocí GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pro AI projekty)

### Architektura

- Edukační repozitář se strukturou založenou na lekcích
- Každá složka lekce obsahuje README, ukázky kódu a řešení
- Samostatné projekty v oddělených adresářích (quiz-app, různé projektové lekce)
- Překladový systém používající GitHub Actions (co-op-translator)
- Dokumentace servírovaná pomocí Docsify a dostupná také jako PDF

## Příkazy pro nastavení

Tento repozitář je primárně určen ke konzumaci vzdělávacího obsahu. Pro práci se specifickými projekty:

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

### Bankovní API projekt (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Spustit API server
npm run lint       # Spustit ESLint
npm run format     # Formátovat pomocí Prettier
```

### Projekty rozšíření prohlížeče

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podle pokynů pro načítání rozšíření specifických pro prohlížeč
```

### Projekty Space Game

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

1. **Forkujte repozitář** do svého GitHub účtu
2. **Naklonujte svůj fork** lokálně
3. **Vytvořte novou větev** pro své změny
4. Proveďte změny ve výukovém obsahu nebo ukázkách kódu
5. Otestujte jakékoliv změny kódu v relevantních projektových složkách
6. Podávejte pull requesty podle pokynů k přispívání

### Pro studenty

1. Forkujte nebo naklonujte repozitář
2. Procházejte složky lekcí postupně
3. Čtěte README soubory každé lekce
4. Dokončete před-učební kvízy na https://ff-quizzes.netlify.app/web/
5. Procházejte ukázky kódu v lekčních složkách
6. Splňte úkoly a výzvy
7. Odevzdejte post-učební kvízy

### Živý vývoj

- **Dokumentace**: Spusťte `docsify serve` v kořenovém adresáři (port 3000)
- **Quiz App**: Spusťte `npm run dev` ve složce quiz-app
- **Projekty**: Používejte VS Code rozšíření Live Server pro HTML projekty
- **API Projekty**: Spouštějte `npm start` v příslušných API adresářích

## Testovací instrukce

### Testování Quiz App

```bash
cd quiz-app
npm run lint       # Zkontrolujte problémy se stylem kódu
npm run build      # Ověřte, že sestavení proběhlo úspěšně
```

### Testování Bank API

```bash
cd 7-bank-project/api
npm run lint       # Zkontrolujte problémy se stylem kódu
node server.js     # Ověřte, že server startuje bez chyb
```

### Obecný přístup k testování

- Jedná se o edukativní repozitář bez komplexních automatizovaných testů
- Manuální testování se zaměřuje na:
  - Spouštění ukázek kódu bez chyb
  - Fungování odkazů v dokumentaci
  - Úspěšné dokončení buildů projektů
  - Dodržování osvědčených postupů v příkladech

### Kontroly před odesláním

- Spusťte `npm run lint` v adresářích s package.json
- Ověřte správnost markdown odkazů
- Testujte ukázky kódu v prohlížeči nebo Node.js
- Zkontrolujte, že překlady zachovávají správnou strukturu

## Pravidla pro styl kódu

### JavaScript

- Používat moderní ES6+ syntaxi
- Dodržovat standardní ESLint konfigurace v projektech
- Používat smysluplné názvy proměnných a funkcí pro přehlednost
- Přidávat komentáře vysvětlující koncepty pro studenty
- Formátovat pomocí Prettier tam, kde je nastavena konfigurace

### HTML/CSS

- Používat sémantické HTML5 prvky
- Dodržovat principy responzivního designu
- Jasná konvence pojmenování tříd
- Komentáře vysvětlující CSS techniky pro studenty

### Python

- Dodržovat PEP 8 stylové směrnice
- Jasné, výukové příklady kódu
- Typové anotace tam, kde jsou užitečné pro učení

### Markdown dokumentace

- Jasná hierarchie nadpisů
- Kódové bloky s definicí jazyka
- Odkazy na doplňkové zdroje
- Snímky obrazovky a obrázky ve složkách `images/`
- Alternativní text obrázků pro přístupnost

### Organizace souborů

- Lekce číslovány do sekvence (1-getting-started-lessons, 2-js-basics, atd.)
- Každý projekt má složky `solution/` a často `start/` nebo `your-work/`
- Obrázky uloženy v lekcích specifických složkách `images/`
- Překlady ve složkách `translations/{language-code}/`

## Build a deploy

### Nasazení Quiz App (Azure Static Web Apps)

Quiz-app je nakonfigurován pro nasazení na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytváří složku dist/
# Nasazuje prostřednictvím workflow GitHub Actions při pushi do větve main
```

Konfigurace Azure Static Web Apps:
- **Umístění aplikace**: `/quiz-app`
- **Výstupní umístění**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generování PDF dokumentace

```bash
npm install                    # Nainstalujte docsify-to-pdf
npm run convert               # Vygenerujte PDF z docs
```

### Dokumentace Docsify

```bash
npm install -g docsify-cli    # Nainstalujte Docsify globálně
docsify serve                 # Podávejte na localhost:3000
```

### Specifické buildy projektů

Každý projekt může mít vlastní build proces:
- Vue projekty: `npm run build` vytváří produkční balíčky
- Statické projekty: Bez build kroku, servírují přímo soubory

## Pravidla pro pull requesty

### Formát názvu

Používejte jasné, popisné názvy indikující oblast změny:
- `[Quiz-app] Přidat nový kvíz pro lekci X`
- `[Lesson-3] Oprava překlepu v projektu terrarium`
- `[Translation] Přidat španělský překlad pro lekci 5`
- `[Docs] Aktualizovat instrukce pro nastavení`

### Povinné kontroly

Před odesláním PR:

1. **Kvalita kódu**:
   - Spusťte `npm run lint` v dotčených projektových složkách
   - Opravte všechny linting chyby a varování

2. **Ověření buildu**:
   - Spusťte `npm run build` je-li to relevantní
   - Zajistěte žádné build chyby

3. **Ověření odkazů**:
   - Testujte všechny markdown odkazy
   - Ověřte, že odkazy na obrázky fungují

4. **Kontrola obsahu**:
   - Korektura pravopisu a gramatiky
   - Přesnost a vzdělávací hodnota příkladů kódu
   - Přesnost a zachování smyslu překladu

### Požadavky na přispívání

- Souhlas s Microsoft CLA (automatická kontrola u prvního PR)
- Dodržování [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Viz [CONTRIBUTING.md](./CONTRIBUTING.md) pro podrobné pokyny
- Uvádění čísel issues v popisu PR, pokud relevantní

### Proces revize

- PR revidují správci a komunita
- Priorita na srozumitelnost pro vzdělávání
- Příklady kódu by měly reflektovat aktuální osvědčené postupy
- Překlady revidovány pro přesnost a kulturní vhodnost

## Překladový systém

### Automatický překlad

- Používá GitHub Actions s workflow co-op-translator
- Překlad do více než 50 jazyků automaticky
- Zdrojové soubory v hlavních adresářích
- Přeložené soubory v `translations/{language-code}/`

### Přidávání ručních překladových vylepšení

1. Najděte soubor v `translations/{language-code}/`
2. Proveďte úpravy se zachováním struktury
3. Ujistěte se, že příklady kódu fungují
4. Testujte jakýkoli lokalizovaný kvízový obsah

### Metadata překladu

Přeložené soubory obsahují hlavičku s metadata:
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

**Quiz app nelze spustit**:
- Zkontrolujte verzi Node.js (doporučeno v14+)
- Smažte `node_modules` a `package-lock.json`, spusťte `npm install` znovu
- Zkontrolujte konflikty portů (standardně Vite používá port 5173)

**API server se nespustí**:
- Ověřte, že verze Node.js splňuje minimum (node >=10)
- Zkontrolujte, zda port není již obsazený
- Zajistěte, že všechny závislosti jsou nainstalovány (`npm install`)

**Rozšíření prohlížeče se nenačte**:
- Ověřte správné formátování manifest.json
- Podívejte se do konzole prohlížeče na chyby
- Dodržujte instrukce pro instalaci podle prohlížeče

**Problémy s Python chat projektem**:
- Ujistěte se, že je nainstalován balíček OpenAI: `pip install openai`
- Ověřte nastavení prostředí proměnné GITHUB_TOKEN
- Zkontrolujte přístupová oprávnění GitHub Models

**Docsify neslouží dokumentaci**:
- Nainstalujte docsify-cli globálně: `npm install -g docsify-cli`
- Spusťte z kořenového adresáře repozitáře
- Zkontrolujte, že `docs/_sidebar.md` existuje

### Tipy pro vývojové prostředí

- Používejte VS Code s rozšířením Live Server pro HTML projekty
- Nainstalujte ESLint a Prettier pro konzistentní formátování
- Používejte DevTools v prohlížeči pro ladění JavaScriptu
- Pro Vue projekty nainstalujte Vue DevTools rozšíření prohlížeče

### Výkonové aspekty

- Velký počet přeložených souborů (50+ jazyků) znamená, že každý plný klon je velký
- Používejte shallow clone při práci jen s obsahem: `git clone --depth 1`
- Vylučujte překlady z vyhledávání při práci na anglickém obsahu
- Build procesy mohou být pomalé při prvním spuštění (npm install, Vite build)

## Bezpečnostní aspekty

### Proměnné prostředí

- API klíče by nikdy neměly být commitovány do repozitáře
- Používejte `.env` soubory (jsou již zahrnuty v `.gitignore`)
- Dokumentujte požadované proměnné prostředí v README projektech

### Python projekty

- Používejte virtuální prostředí: `python -m venv venv`
- Udržujte závislosti aktuální
- GitHub tokeny by měly mít minimální potřebná oprávnění

### Přístup k GitHub Models

- Osobní přístupové tokeny (PAT) jsou vyžadovány pro GitHub Models
- Tokeny ukládejte jako proměnné prostředí
- Nikdy necommitujte tokeny nebo přihlašovací údaje

## Další poznámky

### Cílová skupina

- Kompletní začátečníci ve webovém vývoji
- Studenti a samouci
- Učitelé používající kurikulum ve třídách
- Obsah je navržen pro přístupnost a postupné budování dovedností

### Vzdělávací filozofie

- Přístup založený na projektech
- Časté kontroly znalostí (kvízy)
- Praktické cvičení v kódování
- Příklady reálných aplikací
- Důraz na základy před rámcemi

### Údržba repozitáře

- Aktivní komunita studentů a přispěvatelů
- Pravidelné aktualizace závislostí a obsahu
- Správci monitorují issues a diskuze
- Aktualizace překladů automatizovány přes GitHub Actions

### Související zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) doporučený pro studenty
- Další kurzy: Generativní AI, Data Science, ML, IoT kurikula dostupná

### Práce se specifickými projekty

Pro podrobné instrukce k jednotlivým projektům viz README soubory v:
- `quiz-app/README.md` - Vue 3 quiz aplikace
- `7-bank-project/README.md` - Bankovní aplikace s autentizací
- `5-browser-extension/README.md` - Vývoj rozšíření prohlížeče
- `6-space-game/README.md` - Vývoj her na canvasu
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Struktura monorepo

I když to není tradiční monorepo, tento repozitář obsahuje více nezávislých projektů:
- Každá lekce je samostatná
- Projekty nesdílejí závislosti
- Pracujte na jednotlivých projektech bez ovlivnění ostatních
- Naklonujte celý repozitář pro kompletní zážitek kurikula

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Prohlášení o vyloučení odpovědnosti**:  
Tento dokument byl přeložen pomocí služeb automatického překladu AI [Co-op Translator](https://github.com/Azure/co-op-translator). I když usilujeme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho mateřském jazyce by měl být považován za autoritativní zdroj. Pro kritické informace se doporučuje profesionální lidský překlad. Nejsme odpovědni za případné nedorozumění nebo chybnou interpretaci vzniklou použitím tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->