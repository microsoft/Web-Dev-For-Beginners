# AGENTS.md

## Přehled projektu

Toto je vzdělávací repozitář pro výuku základů webového vývoje pro začátečníky. Kurikul je komplexní 12týdenní kurz vyvinutý Microsoft Cloud Advocates, obsahující 24 praktických lekcí pokrývajících JavaScript, CSS a HTML.

### Klíčové prvky

- **Vzdělávací obsah**: 24 strukturovaných lekcí organizovaných do modulů založených na projektech
- **Praktické projekty**: Terrárium, Hra na psaní, Rozšíření prohlížeče, Hra ve vesmíru, Bankovní aplikace, Editor kódu a AI chatovací asistent
- **Interaktivní kvízy**: 48 kvízů se 3 otázkami každý (hodnocení před a po lekci)
- **Podpora více jazyků**: Automatické překlady pro více než 50 jazyků pomocí GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pro AI projekty)

### Architektura

- Vzdělávací repozitář s lekční strukturou
- Každá složka lekce obsahuje README, příklady kódu a řešení
- Samostatné projekty v oddělených adresářích (quiz-app, různé lekční projekty)
- Překladový systém využívající GitHub Actions (co-op-translator)
- Dokumentace podávána přes Docsify a dostupná jako PDF

## Příkazy pro nastavení

Tento repozitář je primárně určen pro konzumaci vzdělávacího obsahu. Pro práci s konkrétními projekty:

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

### Projekty hry ve vesmíru

```bash
cd 6-space-game/solution
npm install
# Otevřete index.html v prohlížeči nebo použijte Live Server
```

### Chatovací projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavte proměnnou prostředí GITHUB_TOKEN
python api.py
```

## Vývojový workflow

### Pro přispěvatele obsahu

1. **Rozvětvěte (fork) repozitář** do svého GitHub účtu
2. **Naklonujte svůj fork** lokálně
3. **Vytvořte novou větev** pro své změny
4. Proveďte změny v obsahu lekce nebo příkladech kódu
5. Testujte kódové změny v příslušných projektových složkách
6. Podávejte pull requesty podle pokynů pro přispění

### Pro studenty

1. Rozvětvěte nebo naklonujte repozitář
2. Procházejte lekční složky postupně
3. Čtěte README soubory pro každou lekci
4. Dokončete předběžné kvízy na https://ff-quizzes.netlify.app/web/
5. Procházejte příklady kódu v lekčních složkách
6. Dokončete úkoly a výzvy
7. Absolvujte kvízy po lekci

### Živý vývoj

- **Dokumentace**: Spusťte `docsify serve` v rootu (port 3000)
- **Quiz App**: Spusťte `npm run dev` ve složce quiz-app
- **Projekty**: Použijte VS Code Live Server rozšíření pro HTML projekty
- **API projekty**: Spusťte `npm start` v příslušných API složkách

## Instrukce testování

### Testování Quiz App

```bash
cd quiz-app
npm run lint       # Zkontrolujte problémy se stylem kódu
npm run build      # Ověřte, že kompilace proběhla úspěšně
```

### Testování Bank API

```bash
cd 7-bank-project/api
npm run lint       # Zkontrolujte problémy s stylem kódu
node server.js     # Ověřte, že server startuje bez chyb
```

### Obecný přístup k testování

- Toto je vzdělávací repozitář bez rozsáhlých automatizovaných testů
- Manuální testování se zaměřuje na:
  - Příklady kódu bez chyb při spuštění
  - Funkčnost odkazů v dokumentaci
  - Úspěšné sestavení projektů
  - Příklady odpovídající nejlepší praxi

### Kontroly před odesláním

- Spusťte `npm run lint` ve složkách s package.json
- Ověřte platnost odkazů v markdownu
- Testujte příklady kódu v prohlížeči nebo Node.js
- Zkontrolujte, že překlady zachovávají správnou strukturu

## Zásady stylu kódu

### JavaScript

- Používejte moderní syntaxi ES6+
- Dodržujte standardní ESLint konfigurace v projektech
- Používejte smysluplné názvy proměnných a funkcí pro vzdělávací přehlednost
- Přidávejte komentáře vysvětlující koncepty pro studenty
- Formátujte pomocí Prettier tam, kde je nastaveno

### HTML/CSS

- Sémantické HTML5 elementy
- Principy responzivního designu
- Jasné konvence pojmenování tříd
- Komentáře vysvětlující CSS techniky pro studenty

### Python

- Dodržování PEP 8 stylu
- Jasné, vzdělávací příklady kódu
- Typové anotace tam, kde je to pro učení užitečné

### Markdown dokumentace

- Jasná hierarchie nadpisů
- Kódové bloky s určením jazyka
- Odkazy na další zdroje
- Snímky obrazovky a obrázky ve složkách `images/`
- Alt texty pro obrázky pro přístupnost

### Organizace souborů

- Lekce číslovány sekvenčně (1-getting-started-lessons, 2-js-basics, atd.)
- Každý projekt má složky `solution/` a často `start/` nebo `your-work/`
- Obrázky uložené v lekčně specifických složkách `images/`
- Překlady ve struktuře `translations/{jazykový-kód}/`

## Sestavení a nasazení

### Nasazení Quiz App (Azure Static Web Apps)

Quiz-app je konfigurován pro nasazení na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytváří složku dist/
# Nasazuje pomocí GitHub Actions workflow při pushi do main
```

Konfigurace Azure Static Web Apps:
- **Umístění aplikace**: `/quiz-app`
- **Umístění výstupu**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generování PDF dokumentace

```bash
npm install                    # Nainstalujte docsify-to-pdf
npm run convert               # Vygenerujte PDF z docs
```

### Docsify dokumentace

```bash
npm install -g docsify-cli    # Nainstalujte Docsify globálně
docsify serve                 # Spustit na localhost:3000
```

### Sestavení specifická pro projekt

Každý projekt může mít vlastní build proces:
- Vue projekty: `npm run build` vytváří produkční balíčky
- Statické projekty: žádný build krok, soubory se podávají přímo

## Pokyny pro pull requesty

### Formát názvu

Používejte jasné, popisné názvy uvádějící oblast změn:
- `[Quiz-app] Přidat nový kvíz pro lekci X`
- `[Lesson-3] Opravit překlep v projektu terrária`
- `[Translation] Přidat španělský překlad pro lekci 5`
- `[Docs] Aktualizovat instrukce pro nastavení`

### Povinné kontroly

Před odesláním PR:

1. **Kvalita kódu**:
   - Spusťte `npm run lint` v ovlivněných projektových složkách
   - Opravte všechny lintovací chyby a varování

2. **Ověření sestavení**:
   - Spusťte `npm run build`, pokud je relevantní
   - Zajistěte, že nejsou chyby sestavení

3. **Ověření odkazů**:
   - Otestujte všechny markdown odkazy
   - Ověřte fungování referencí obrázků

4. **Kontrola obsahu**:
   - Korektury pravopisu a gramatiky
   - Ověření správnosti a vzdělávací hodnoty příkladů kódu
   - Ověření, že překlady zachovávají původní význam

### Požadavky na přispění

- Souhlas se smlouvou Microsoft CLA (automatická kontrola při prvním PR)
- Dodržujte [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Viz [CONTRIBUTING.md](./CONTRIBUTING.md) pro podrobné pokyny
- V případě potřeby odkazujte čísla issue v popisu PR

### Proces revize

- PR kontrolují správci a komunita
- Prioritou je vzdělávací srozumitelnost
- Příklady kódu by měly odpovídat aktuálním nejlepším praktikám
- Překlady se kontrolují z hlediska přesnosti a kulturní vhodnosti

## Překladový systém

### Automatizovaný překlad

- Používá GitHub Actions s workflow co-op-translator
- Automaticky překládá do více než 50 jazyků
- Zdrojové soubory v hlavních adresářích
- Přeložené soubory v adresářích `translations/{jazykový-kód}/`

### Přidávání manuálních úprav překladů

1. Najděte soubor v `translations/{jazykový-kód}/`
2. Proveďte úpravy s zachováním struktury
3. Ověřte, že příklady kódu zůstávají funkční
4. Testujte lokalizovaný obsah kvízů

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

### Běžné problémy

**Quiz app se nespustí**:
- Zkontrolujte verzi Node.js (doporučeno v14+)
- Smažte `node_modules` a `package-lock.json`, spusťte znovu `npm install`
- Zkontrolujte konflikty portů (výchozí: Vite používá port 5173)

**API server se nespustí**:
- Ověřte, že verze Node.js splňuje minimální požadavky (node >=10)
- Zkontrolujte, zda port není již obsazen
- Ujistěte se, že jsou nainstalovány všechny závislosti `npm install`

**Rozšíření prohlížeče se nenačte**:
- Ověřte správné formátování manifest.json
- Zkontrolujte prohlížečovou konzoli na chyby
- Postupujte podle návodů k instalaci rozšíření specifických pro prohlížeč

**Problémy s Python chat projektem**:
- Ujistěte se, že balíček OpenAI je nainstalován: `pip install openai`
- Ověřte nastavení proměnné prostředí GITHUB_TOKEN
- Zkontrolujte oprávnění k přístupu k GitHub Models

**Docsify neposkytuje dokumentaci**:
- Nainstalujte docsify-cli globálně: `npm install -g docsify-cli`
- Spusťte z kořenového adresáře repozitáře
- Ověřte existenci `docs/_sidebar.md`

### Tipy pro vývojové prostředí

- Používejte VS Code s rozšířením Live Server pro HTML projekty
- Nainstalujte rozšíření ESLint a Prettier pro konzistentní formátování
- Použijte DevTools v prohlížeči pro debugování JavaScriptu
- Pro Vue projekty nainstalujte Vue DevTools rozšíření do prohlížeče

### Výkonové aspekty

- Velké množství překladových souborů (50+ jazyků) znamená velké klony
- Pro práci pouze s obsahem použijte shallow clone: `git clone --depth 1`
- Při práci s anglickým obsahem vylučujte překlady z vyhledávání
- První běh build procesů může být pomalý (npm install, Vite build)

## Bezpečnostní aspekty

### Proměnné prostředí

- API klíče by se nikdy neměly commitovat do repozitáře
- Používejte `.env` soubory (již v `.gitignore`)
- Dokumentujte požadované proměnné prostředí v README projektech

### Python projekty

- Používejte virtuální prostředí: `python -m venv venv`
- Udržujte závislosti aktuální
- GitHub tokeny by měly mít minimální potřebná oprávnění

### Přístup k GitHub Models

- Pro GitHub Models jsou potřeba Personal Access Tokens (PAT)
- Tokeny ukládejte jako proměnné prostředí
- Nikdy necommitujte tokeny či přihlašovací údaje

## Další poznámky

### Cílová skupina

- Úplní začátečníci ve webovém vývoji
- Studenti a samouci
- Učitelé používající kurikulum ve třídách
- Obsah je navržen pro přístupnost a postupné rozvíjení dovedností

### Vzdělávací filozofie

- Přístup založený na projektech
- Časté ověřování znalostí (kvízy)
- Praktická cvičení kódování
- Příklady využití v reálném světě
- Zaměření na základy před frameworky

### Údržba repozitáře

- Aktivní komunita studentů a přispěvatelů
- Pravidelné aktualizace závislostí a obsahu
- Sledují se issues a diskuse správci
- Aktualizace překladů automatizovány přes GitHub Actions

### Související zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) doporučený pro studenty
- Další kurzy: Generativní AI, Data Science, ML, IoT kurikula dostupná

### Práce s konkrétními projekty

Pro podrobné instrukce k jednotlivým projektům viz README soubory v:
- `quiz-app/README.md` - Vue 3 kvízová aplikace
- `7-bank-project/README.md` - Bankovní aplikace s autentifikací
- `5-browser-extension/README.md` - Vývoj rozšíření prohlížeče
- `6-space-game/README.md` - Vývoj hry s využitím Canvas
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Struktura monorepa

I když se nejedná o tradiční monorepo, tento repozitář obsahuje více nezávislých projektů:
- Každá lekce je samostatná
- Projekty nesdílí závislosti
- Pracujte na jednotlivých projektech, aniž byste ovlivnili ostatní
- Pro plný kurz si naklonujte celý repozitář

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vyloučení odpovědnosti**:
Tento dokument byl přeložen pomocí služby automatického překladu [Co-op Translator](https://github.com/Azure/co-op-translator). I když usilujeme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Originální dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Nejsme odpovědni za jakékoliv nedorozumění či nesprávné výklady vyplývající z použití tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->