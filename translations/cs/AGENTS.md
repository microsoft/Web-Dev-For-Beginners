# AGENTS.md

## Přehled projektu

Toto je vzdělávací repozitář učebního plánu pro výuku základů webového vývoje pro začátečníky. Kurikulum je komplexní 12týdenní kurz vyvinutý Microsoft Cloud Advocates, obsahující 24 praktických lekcí pokrývajících JavaScript, CSS a HTML.

### Klíčové komponenty

- **Vzdělávací obsah**: 24 strukturovaných lekcí uspořádaných do modulů založených na projektech
- **Praktické projekty**: Terrarium, Hra na psaní, Rozšíření prohlížeče, Kosmická hra, Bankovní aplikace, Kódovací editor a AI chat asistent
- **Interaktivní kvízy**: 48 kvízů po 3 otázkách (před a po lekci)
- **Podpora vícejazyčnosti**: Automatizované překlady do více než 50 jazyků přes GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pro AI projekty)

### Architektura

- Vzdělávací repozitář s strukturou založenou na lekcích
- Každá složka lekce obsahuje README, ukázky kódu a řešení
- Samostatné projekty v oddělených adresářích (quiz-app, různé projekty lekcí)
- Překladový systém využívající GitHub Actions (co-op-translator)
- Dokumentace poskytovaná přes Docsify a dostupná jako PDF

## Příkazy pro nastavení

Tento repozitář je určen především ke konzumaci vzdělávacího obsahu. Pro práci s konkrétními projekty:

### Hlavní nastavení repozitáře

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

### Bankovní projekt API (Node.js + Express)

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
# Postupujte podle specifických pokynů pro načítání rozšíření v prohlížeči
```

### Projekty Kosmické hry

```bash
cd 6-space-game/solution
npm install
# Otevřete index.html v prohlížeči nebo použijte Live Server
```

### Chat projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavte proměnnou prostředí GITHUB_TOKEN
python api.py
```

## Vývojový workflow

### Pro přispěvatele obsahu

1. **Vytvořte fork** repozitáře na svém GitHub účtu
2. **Naklonujte svůj fork** lokálně
3. **Vytvořte novou větev** pro své změny
4. Proveďte změny v obsahu lekcí nebo ukázkách kódu
5. Otestujte případné změny kódu v příslušných adresářích projeků
6. Odešlete pull requesty podle pravidel přispívání

### Pro studenty

1. Vytvořte fork nebo naklonujte repozitář
2. Procházejte adresáře lekcí postupně
3. Čtěte README soubory každé lekce
4. Vyplňte kvízy před lekcí na https://ff-quizzes.netlify.app/web/
5. Propracujte se ukázkami kódu v adresářích lekcí
6. Dokončete úkoly a výzvy
7. Udělejte kvízy po lekci

### Živý vývoj

- **Dokumentace**: Spusťte `docsify serve` v kořenovém adresáři (port 3000)
- **Quiz App**: Spusťte `npm run dev` v adresáři quiz-app
- **Projekty**: Používejte VS Code Live Server rozšíření pro HTML projekty
- **API projekty**: Spusťte `npm start` v odpovídajících API adresářích

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

- Jedná se o vzdělávací repozitář bez rozsáhlých automatizovaných testů
- Manuální testování se zaměřuje na:
  - Ukázky kódu bez chybového běhu
  - Odkazy v dokumentaci fungují správně
  - Projekty se úspěšně sestaví
  - Ukázky dodržují osvědčené postupy

### Kontroly před odevzdáním

- Spusťte `npm run lint` v adresářích s package.json
- Ověřte validitu markdown odkazů
- Testujte ukázky kódu v prohlížeči nebo Node.js
- Zkontrolujte, že překlady zachovávají správnou strukturu

## Pravidla stylu kódu

### JavaScript

- Používejte moderní ES6+ syntaxi
- Řiďte se standardními ESLint konfiguracemi v projektech
- Používejte popisné názvy proměnných a funkcí pro snadné pochopení
- Přidávejte komentáře vysvětlující koncepty pro studenty
- Formátujte pomocí Prettier tam, kde je nastaveno

### HTML/CSS

- Používejte sémantické HTML5 elementy
- Principy responzivního designu
- Jasné konvence pojmenování tříd
- Komentáře vysvětlující CSS techniky pro studenty

### Python

- Dodržujte PEP 8 styl
- Jasné, vzdělávací ukázky kódu
- Používejte typové hinty tam, kde je to užitečné pro učení

### Markdown dokumentace

- Jasná hierarchie nadpisů
- Kódové bloky s označením jazyka
- Odkazy na doplňková zdroje
- Snímky obrazovek a obrázky v adresářích `images/`
- Alt text pro obrázky pro přístupnost

### Organizace souborů

- Lekce číslovány sekvenčně (1-getting-started-lessons, 2-js-basics atd.)
- Každý projekt obsahuje adresáře `solution/` a často `start/` nebo `your-work/`
- Obrázky ukládány do specifických `images/` složek lekcí
- Překlady v adresářové struktuře `translations/{language-code}/`

## Sestavení a nasazení

### Nasazení Quiz App (Azure Static Web Apps)

Quiz-app je nakonfigurována pro nasazení v Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytváří složku dist/
# Nasazuje pomocí workflow GitHub Actions při push do hlavní větve
```

Konfigurace Azure Static Web Apps:
- **Umístění aplikace**: `/quiz-app`
- **Výstupní umístění**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generování PDF dokumentace

```bash
npm install                    # Nainstalujte docsify-to-pdf
npm run convert               # Vytvořit PDF z docs
```

### Dokumentace Docsify

```bash
npm install -g docsify-cli    # Nainstalujte Docsify globálně
docsify serve                 # Spusťte na localhost:3000
```

### Projektově-specifické sestavení

Každý projekt může mít vlastní proces sestavení:
- Vue projekty: `npm run build` vytvoří produkční balíčky
- Statické projekty: Žádný build krok, soubory se přímo servírují

## Pravidla pro pull requesty

### Formát názvu

Používejte jasné, popisné názvy s označením oblasti změny:
- `[Quiz-app] Přidat nový kvíz pro lekci X`
- `[Lesson-3] Opravit překlep v terrarium projektu`
- `[Translation] Přidat španělský překlad pro lekci 5`
- `[Docs] Aktualizovat instalační instrukce`

### Povinné kontroly

Před odesláním PR:

1. **Kvalita kódu**:
   - Spusťte `npm run lint` v příslušných projektových složkách
   - Opravte všechny lintovací chyby a varování

2. **Ověření sestavení**:
   - Spusťte `npm run build` pokud je to relevantní
   - Zajistěte, že nejsou žádné chyby sestavení

3. **Validace odkazů**:
   - Otestujte všechny markdown odkazy
   - Ověřte fungování odkazů na obrázky

4. **Revize obsahu**:
   - Korektura pravopisu a gramatiky
   - Ověřte, že ukázky kódu jsou správné a vzdělávací
   - Zkontrolujte, že překlady zachovávají původní význam

### Požadavky na přispívání

- Souhlas s Microsoft CLA (automatická kontrola při prvním PR)
- Dodržování [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Podrobné instrukce v [CONTRIBUTING.md](./CONTRIBUTING.md)
- Uvádějte čísla issues v popisu PR, pokud je to relevantní

### Proces revize

- PR kontrolují maintainers a komunita
- Priorita jasnost vzdělávacího obsahu
- Ukázky kódu by měly dodržovat současné nejlepší praktiky
- Překlady jsou kontrolovány na přesnost a kulturní vhodnost

## Překladový systém

### Automatizovaný překlad

- Používá GitHub Actions s workflow co-op-translator
- Automaticky překládá do více než 50 jazyků
- Zdrojové soubory v hlavních adresářích
- Přeložené soubory v adresářích `translations/{language-code}/`

### Přidávání ručních vylepšení překladů

1. Najděte soubor v `translations/{language-code}/`
2. Proveďte úpravy při zachování struktury
3. Ujistěte se, že ukázky kódu zůstávají funkční
4. Otestujte lokalizovaný obsah kvízů

### Metadata překladu

Přeložené soubory obsahují hlavičku metadat:
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

### Časté problémy

**Quiz aplikace nenaběhne**:
- Zkontrolujte verzi Node.js (doporučeno v14+)
- Odstraňte `node_modules` a `package-lock.json`, spusťte `npm install` znovu
- Zkontrolujte konflikty portů (výchozí: Vite používá port 5173)

**API server nenaběhne**:
- Ověřte verzi Node.js (minimálně node >=10)
- Zkontrolujte, zda port není obsazený
- Ujistěte se, že jsou nainstalované všechny závislosti příkazem `npm install`

**Rozšíření prohlížeče se nenačítá**:
- Ověřte správné formátování manifest.json
- Kontrola chyb v konzoli prohlížeče
- Postupujte podle instrukcí specifických pro prohlížeč

**Problémy s Python chat projektem**:
- Ujistěte se, že je nainstalován balíček OpenAI: `pip install openai`
- Ověřte, že je nastavena proměnná prostředí GITHUB_TOKEN
- Zkontrolujte oprávnění přístupu k GitHub modelům

**Docsify neservíruje dokumentaci**:
- Globálně nainstalujte docsify-cli: `npm install -g docsify-cli`
- Spusťte v kořenovém adresáři repozitáře
- Ověřte, že existuje `docs/_sidebar.md`

### Tipy pro vývojové prostředí

- Používejte VS Code s rozšířením Live Server pro HTML projekty
- Nainstalujte ESLint a Prettier rozšíření pro jednotné formátování
- K debugu JavaScriptu používejte DevTools v prohlížeči
- Pro Vue projekty nainstalujte Vue DevTools rozšíření prohlížeče

### Výkonové aspekty

- Velké množství přeložených souborů (50+ jazyků) znamená velké klony
- Použijte shallow clone, pokud pracujete pouze s obsahem: `git clone --depth 1`
- Při práci s anglickým obsahem vylučujte překlady z vyhledávání
- Procesy build mohou být při prvním spuštění pomalé (npm install, build Vite)

## Bezpečnostní aspekty

### Proměnné prostředí

- API klíče nikdy neukládejte do repozitáře
- Používejte `.env` soubory (jsou uvedeny v `.gitignore`)
- Dokumentujte požadované proměnné prostředí v README projektů

### Python projekty

- Používejte virtuální prostředí: `python -m venv venv`
- Udržujte závislosti aktuální
- GitHub tokeny by měly mít minimální potřebná oprávnění

### Přístup k GitHub modelům

- Vyžadovány personal access tokens (PAT)
- Tokeny ukládejte jako proměnné prostředí
- Nikdy neukládejte tokeny ani přihlašovací údaje do repozitáře

## Další poznámky

### Cílová skupina

- Kompletní začátečníci ve webovém vývoji
- Studenti a samouci
- Učitelé využívající kurikulum ve třídě
- Obsah navržen pro přístupnost a postupné budování dovedností

### Vzdělávací filozofie

- Projektově orientované učení
- Časté ověřování znalostí (kvízy)
- Praktická cvičení v psaní kódu
- Reálné příklady použití
- Důraz na základy před frameworky

### Údržba repozitáře

- Aktivní komunita studentů a přispěvatelů
- Pravidelné aktualizace závislostí a obsahu
- Issues a diskuse sledovány maintainery
- Aktualizace překladů automatizované přes GitHub Actions

### Související zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) doporučený pro studenty
- Další kurzy: Generativní AI, Data Science, ML, IoT kurikula dostupná

### Práce s konkrétními projekty

Pro podrobné instrukce k jednotlivým projektům viz README soubory v:
- `quiz-app/README.md` - Vue 3 kvízová aplikace
- `7-bank-project/README.md` - Bankovní aplikace s autentizací
- `5-browser-extension/README.md` - Vývoj rozšíření prohlížeče
- `6-space-game/README.md` - Vývoj hry založené na Canvas
- `9-chat-project/README.md` - AI chat asistent projekt

### Struktura Monorepo

Ačkoliv nejde o tradiční monorepo, tento repozitář obsahuje více nezávislých projektů:
- Každá lekce je samostatná
- Projekty nesdílí závislosti
- Pracujte na jednotlivých projektech bez ovlivnění ostatních
- Naklonujte celý repozitář pro plný zážitek kurikula

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Prohlášení o vyloučení odpovědnosti**:  
Tento dokument byl přeložen pomocí služby automatického překladu [Co-op Translator](https://github.com/Azure/co-op-translator). I když usilujeme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho mateřském jazyce by měl být považován za autoritativní zdroj. U kritických informací se doporučuje využít profesionální lidský překlad. Nejsme odpovědní za jakákoli nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->