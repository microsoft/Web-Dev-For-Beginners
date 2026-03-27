# AGENTS.md

## Přehled projektu

Toto je vzdělávací repozitář kurikula pro výuku základů webového vývoje pro začátečníky. Kurikulum představuje komplexní 12týdenní kurz vyvinutý Microsoft Cloud Advocates, obsahující 24 praktických lekcí pokrývajících JavaScript, CSS a HTML.

### Klíčové komponenty

- **Vzdělávací obsah**: 24 strukturovaných lekcí organizovaných do modulů založených na projektech
- **Praktické projekty**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor a AI Chat Assistant
- **Interaktivní kvízy**: 48 kvízů s 3 otázkami každý (před/po lekci)
- **Podpora více jazyků**: Automatické překlady do více než 50 jazyků pomocí GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pro AI projekty)

### Architektura

- Vzdělávací repozitář s lekčně založenou strukturou
- Každá složka lekce obsahuje README, příklady kódu a řešení
- Samostatné projekty v oddělených adresářích (quiz-app, různé projekty lekcí)
- Překladový systém využívající GitHub Actions (co-op-translator)
- Dokumentace poskytována přes Docsify a dostupná i jako PDF

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

### Bankovní projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Spustit API server
npm run lint       # Spustit ESLint
npm run format     # Formátovat pomocí Prettier
```

### Projekty pro rozšíření prohlížeče

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podle pokynů pro načítání rozšíření specifických pro prohlížeč
```

### Projekty hry ve vesmíru

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

1. **Vytvořte fork repozitáře** do svého GitHub účtu
2. **Naklonujte svojí větev** lokálně
3. **Vytvořte novou větev** pro své změny
4. Proveďte změny v obsahu lekcí nebo příkladech kódu
5. Otestujte změny v příslušných projektech
6. Odešlete pull requesty dle zásad přispívání

### Pro studenty

1. Vytvořte fork nebo klonujte repozitář
2. Postupujte sekvenčně do adresářů lekcí
3. Čtěte README soubory každé lekce
4. Dokončete před/po- lekční kvízy na https://ff-quizzes.netlify.app/web/
5. Procvičujte si příklady kódu v adresářích lekcí
6. Plňte úkoly a výzvy
7. Absolvujte závěrečné kvízy

### Živý vývoj

- **Dokumentace**: Spusťte `docsify serve` v kořenovém adresáři (port 3000)
- **Quiz App**: Spusťte `npm run dev` v adresáři quiz-app
- **Projekty**: Použijte VS Code Live Server rozšíření pro HTML projekty
- **API projekty**: Spusťte `npm start` v příslušných API složkách

## Testování

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
node server.js     # Ověřte, zda server startuje bez chyb
```

### Obecný přístup k testování

- Tento repozitář je vzdělávací a nemá komplexní automatizované testy
- Manuální testování se zaměřuje na:
  - Spuštění příkladů kódu bez chyb
  - Funkčnost odkazů v dokumentaci
  - Úspěšné sestavení projektů
  - Dodržování osvědčených postupů v příkladech

### Předodeslání kontroly

- Spusťte `npm run lint` v adresářích s package.json
- Ověřte platnost markdown odkazů
- Testujte příklady kódu v prohlížeči nebo Node.js
- Zkontrolujte, že překlady zachovávají správnou strukturu

## Směrnice pro styl kódu

### JavaScript

- Používejte moderní ES6+ syntaxi
- Dodržujte standardní ESLint nastavení v projektech
- Používejte smysluplná jména proměnných a funkcí pro lepší porozumění
- Přidávejte komentáře vysvětlující pojmy pro studenty
- Formátujte kód pomocí Prettier tam, kde je nastaveno

### HTML/CSS

- Semantické elementy HTML5
- Principy responzivního designu
- Jasné konvence pojmenování tříd
- Komentáře vysvětlující CSS techniky pro studenty

### Python

- Dodržujte stylové pravidla PEP 8
- Jasné, vzdělávací příklady kódu
- Používejte typové anotace tam, kde je to pro učení užitečné

### Markdown dokumentace

- Jasná hierarchie nadpisů
- Bloky kódu s určením jazyka
- Odkazy na další zdroje
- Snímky obrazovky a obrázky ve složce `images/`
- Alt text pro obrázky pro zpřístupnění

### Organizace souborů

- Lekce číslované sekvenčně (1-getting-started-lessons, 2-js-basics apod.)
- Každý projekt má složky `solution/` a často `start/` nebo `your-work/`
- Obrázky uložené ve složkách `images/` jednotlivých lekcí
- Překlady ve struktuře `translations/{language-code}/`

## Build a nasazení

### Nasazení Quiz App (Azure Static Web Apps)

Quiz-app je nakonfigurována pro nasazení na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytváří složku dist/
# Nasazuje pomocí GitHub Actions workflow při pushi do main
```

Konfigurace Azure Static Web Apps:
- **Umístění aplikace**: `/quiz-app`
- **Výstupní složka**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generování PDF dokumentace

```bash
npm install                    # Nainstalujte docsify-to-pdf
npm run convert               # Vygenerujte PDF z dokumentace
```

### Docsify dokumentace

```bash
npm install -g docsify-cli    # Nainstalujte Docsify globálně
docsify serve                 # Přes server na localhost:3000
```

### Buildy specifické pro projekty

Každý adresář projektu může mít vlastní build proces:
- Vue projekty: `npm run build` vytváří produkční balíčky
- Statické projekty: Bez build kroku, soubory se servírují přímo

## Směrnice pro Pull Requesty

### Formát názvu

Používejte jasné, popisné názvy vyjadřující oblast změny:
- `[Quiz-app] Přidat nový kvíz pro lekci X`
- `[Lesson-3] Opravit překlep v projektu terrarium`
- `[Translation] Přidat španělský překlad pro lekci 5`
- `[Docs] Aktualizovat instrukce nastavení`

### Povinné kontroly

Před odesláním PR:

1. **Kvalita kódu**:
   - Spusťte `npm run lint` v dotčených projektech
   - Opravte všechny chyby a varování

2. **Ověření buildů**:
   - Spusťte `npm run build` kde je to potřeba
   - Zajistěte bezchybný build

3. **Ověření odkazů**:
   - Otestujte všechny markdown odkazy
   - Zkontrolujte funkčnost odkazů na obrázky

4. **Kontrola obsahu**:
   - Korektura pravopisu a gramatiky
   - Ověřte správnost a edukační hodnotu příkladů kódu
   - Překlady musí zachovat původný význam

### Požadavky na příspěvky

- Souhlas s Microsoft CLA (automatická kontrola při prvním PR)
- Dodržovat [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Viz [CONTRIBUTING.md](./CONTRIBUTING.md) pro podrobné pokyny
- Uveďte čísla issue v popisu PR, pokud je to relevantní

### Proces revize

- PR jsou kontrolovány správci a komunitou
- Prioritní je srozumitelnost pro vzdělávání
- Příklady kódu by měly odpovídat aktuálním osvědčeným postupům
- Překlady jsou pečlivě revidovány pro přesnost a kulturní vhodnost

## Překladový systém

### Automatický překlad

- Používá GitHub Actions s workflow co-op-translator
- Automaticky překládá do více než 50 jazyků
- Zdrojové soubory v hlavních adresářích
- Přeložené soubory ve složkách `translations/{language-code}/`

### Přidání manuálních vylepšení překladu

1. Najděte soubor ve složce `translations/{language-code}/`
2. Proveďte vylepšení se zachováním struktury
3. Ujistěte se, že příklady kódu zůstávají funkční
4. Otestujte lokalizovaný obsah kvízů

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

**Quiz app se nespustí**:
- Zkontrolujte verzi Node.js (doporučeno v14+)
- Odstraňte `node_modules` a `package-lock.json`, spusťte `npm install` znovu
- Zkontrolujte konflikt portů (výchozí: Vite používá port 5173)

**API server se nespustí**:
- Ověřte minimální verzi Node.js (node >=10)
- Zkontrolujte, zda port není již obsazen
- Ujistěte se, že jsou nainstalovány všechny závislosti pomocí `npm install`

**Rozšíření prohlížeče se nenahraje**:
- Ověřte správné formátování manifest.json
- Zkontrolujte chyby v konzoli prohlížeče
- Postupujte podle pokynů instalace pro konkrétní prohlížeč

**Problémy s Python chat projektem**:
- Ujistěte se, že balík OpenAI je nainstalovaný: `pip install openai`
- Ověřte nastavení proměnné prostředí GITHUB_TOKEN
- Zkontrolujte přístupová práva k GitHub Models

**Docsify neservíruje dokumentaci**:
- Nainstalujte docsify-cli globálně: `npm install -g docsify-cli`
- Spusťte z kořenového adresáře repozitáře
- Ujistěte se, že existuje soubor `docs/_sidebar.md`

### Tipy pro vývojové prostředí

- Používejte VS Code s rozšířením Live Server pro HTML projekty
- Nainstalujte rozšíření ESLint a Prettier pro konzistentní formátování
- Používejte DevTools prohlížeče pro ladění JavaScriptu
- Pro Vue projekty nainstalujte Vue DevTools rozšíření

### Výkonnostní úvahy

- Velké množství přeložených souborů (50+ jazyků) znamená, že klony jsou velké
- Použijte shallow clone, pokud pracujete pouze s obsahem: `git clone --depth 1`
- Při práci na anglickém obsahu vynechejte překlady z vyhledávání
- Build procesy mohou být pomalejší při prvním spuštění (npm install, Vite build)

## Bezpečnostní opatření

### Proměnné prostředí

- API klíče nikdy nezadávejte do repozitáře
- Používejte `.env` soubory (jsou uvedeny v `.gitignore`)
- Dokumentujte požadované proměnné v README projektů

### Python projekty

- Používejte virtuální prostředí: `python -m venv venv`
- Udržujte závislosti aktuální
- GitHub tokeny by měly mít minimální potřebná oprávnění

### Přístup k GitHub Models

- Osobní přístupové tokeny (PAT) jsou nutné pro GitHub Models
- Tokeny by měly být uloženy jako proměnné prostředí
- Nikdy neukládejte tokeny nebo přihlašovací údaje do repozitáře

## Další poznámky

### Cílová skupina

- Kompletní začátečníci ve webovém vývoji
- Studenti a samouci
- Učitelé využívající kurikulum ve třídách
- Obsah je navržen pro přístupnost a postupné budování dovedností

### Vzdělávací filozofie

- Přístup založený na projektech
- Časté kontroly znalostí (kvízy)
- Praktická cvičení v kódování
- Příklady z reálného světa
- Zaměření na základy před frameworky

### Údržba repozitáře

- Aktivní komunita studentů a přispěvatelů
- Pravidelné aktualizace závislostí a obsahu
- Problémy a diskuze jsou monitorovány správci
- Aktualizace překladů jsou automatizovány přes GitHub Actions

### Související zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) doporučený pro studenty
- Další kurzy: Generative AI, Data Science, ML, IoT kurikula k dispozici

### Práce se specifickými projekty

Pro podrobné instrukce k jednotlivým projektům viz README soubory v:
- `quiz-app/README.md` - Vue 3 aplikace kvízu
- `7-bank-project/README.md` - Bankovní aplikace s autentizací
- `5-browser-extension/README.md` - Vývoj rozšíření prohlížeče
- `6-space-game/README.md` - Vývoj hry na canvasu
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Struktura monorepa

I když to není tradiční monorepo, tento repozitář obsahuje více nezávislých projektů:
- Každá lekce je samostatná
- Projekty nesdílejí závislosti
- Pracujte na jednotlivých projektech bez ovlivnění ostatních
- Pro plný zážitek klonujte celý repozitář kurikula

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Prohlášení o vyloučení odpovědnosti**:  
Tento dokument byl přeložen pomocí AI překladatelské služby [Co-op Translator](https://github.com/Azure/co-op-translator). I když usilujeme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho mateřském jazyce by měl být považován za autoritativní zdroj. Pro kritické informace je doporučen profesionální lidský překlad. Nejsme odpovědní za jakákoliv nedorozumění nebo chybné interpretace vyplývající z použití tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->