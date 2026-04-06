# AGENTS.md

## Přehled projektu

Toto je vzdělávací repozitář kurikula pro výuku základů webového vývoje pro začátečníky. Kurikulum je komplexní 12týdenní kurz vyvinutý Microsoft Cloud Advocates, obsahující 24 praktických lekcí zaměřených na JavaScript, CSS a HTML.

### Klíčové součásti

- **Vzdělávací obsah**: 24 strukturovaných lekcí organizovaných do modulů založených na projektech
- **Praktické projekty**: Terrárium, Hra na psaní, Rozšíření prohlížeče, Vesmírná hra, Bankovní aplikace, Kódový editor a AI Chat asistent
- **Interaktivní kvízy**: 48 kvízů s 3 otázkami každého (před a po lekci)
- **Podpora vícejazyčnosti**: Automatizované překlady do více než 50 jazyků pomocí GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pro AI projekty)

### Architektura

- Vzdělávací repozitář se strukturou založenou na lekcích
- Každá složka lekce obsahuje README, příklady kódu a řešení
- Samostatné projekty v oddělených adresářích (quiz-app, různorodé projekty lekcí)
- Překladový systém používající GitHub Actions (co-op-translator)
- Dokumentace poskytována přes Docsify a dostupná jako PDF

## Příkazy pro nastavení

Tento repozitář je primárně určen ke konzumaci vzdělávacího obsahu. Pro práci s konkrétními projekty:

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

### Bankovní API projekt (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Spusťte API server
npm run lint       # Spusťte ESLint
npm run format     # Formátujte pomocí Prettier
```

### Projekty rozšíření prohlížeče

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podle pokynů pro načítání rozšíření specifických pro prohlížeč
```

### Projekty vesmírné hry

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

### Pro přispěvovatele obsahu

1. **Forkujte repozitář** do svého GitHub účtu
2. **Klonujte svůj fork** lokálně
3. **Vytvořte novou větev** pro své změny
4. Proveďte změny v obsahu lekcí nebo příkladech kódu
5. Testujte jakékoliv změny kódu v příslušných adresářích projektů
6. Odešlete pull requesty podle pokynů pro přispívání

### Pro studenty

1. Forkujte nebo klonujte repozitář
2. Procházejte složky lekcí sekvenčně
3. Čtěte README soubory každé lekce
4. Dokončete před- lekční kvízy na https://ff-quizzes.netlify.app/web/
5. Procházejte příklady kódu ve složkách lekcí
6. Dokončete úkoly a výzvy
7. Udělejte post- lekční kvízy

### Živý vývoj

- **Dokumentace**: Spusťte `docsify serve` v kořenovém adresáři (port 3000)
- **Quiz App**: Spusťte `npm run dev` ve složce quiz-app
- **Projekty**: Použijte VS Code Live Server rozšíření pro HTML projekty
- **API projekty**: Spusťte `npm start` v příslušných API adresářích

## Instrukce k testování

### Testování Quiz App

```bash
cd quiz-app
npm run lint       # Zkontrolujte problémy se stylem kódu
npm run build      # Ověřte, že sestavení proběhne úspěšně
```

### Testování Bank API

```bash
cd 7-bank-project/api
npm run lint       # Zkontrolujte problémy s kódovacím stylem
node server.js     # Ověřte, že server startuje bez chyb
```

### Obecný přístup k testování

- Toto je vzdělávací repozitář bez komplexních automatizovaných testů
- Manuální testování se zaměřuje na:
  - Příkladový kód bez chyb při spuštění
  - Funkčnost odkazů v dokumentaci
  - Úspěšné sestavení projektů
  - Příklady vyhovují zásadám best practices

### Kontroly před odesláním změn

- Spusťte `npm run lint` ve složkách s package.json
- Ověřte, že odkazy v markdownu jsou platné
- Otestujte příklady kódu v prohlížeči nebo Node.js
- Zkontrolujte, že překlady zachovávají správnou strukturu

## Směrnice stylu kódu

### JavaScript

- Používejte moderní ES6+ syntaxi
- Dodržujte standardní konfigurace ESLint v projektech
- Používejte názvy proměnných a funkcí, které jsou srozumitelné pro výuku
- Přidávejte komentáře vysvětlující koncepty pro studenty
- Formátujte pomocí Prettier tam, kde je nakonfigurováno

### HTML/CSS

- Semantické HTML5 prvky
- Principy responzivního designu
- Jasná konvence pojmenování tříd
- Komentáře vysvětlující CSS techniky pro studenty

### Python

- Směrnice stylu PEP 8
- Jasné, vzdělávací příklady kódu
- Typové nápovědy tam, kde pomáhají s učením

### Markdown dokumentace

- Jasná hierarchie nadpisů
- Bloky kódu s označením jazyka
- Odkazy na doplňkové zdroje
- Screenshoty a obrázky ve složkách `images/`
- Alternativní texty pro obrázky pro přístupnost

### Organizace souborů

- Lekce číslovány sekvenčně (1-getting-started-lessons, 2-js-basics, atd.)
- Každý projekt má složky `solution/` a často `start/` nebo `your-work/`
- Obrázky uložené v lekcemi specifických složkách `images/`
- Překlady ve struktuře `translations/{language-code}/`

## Sestavení a nasazení

### Nasazení Quiz App (Azure Static Web Apps)

Quiz-app je nastaven pro nasazení na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytváří složku dist/
# Nasazuje přes workflow GitHub Actions při pushnutí na main
```

Konfigurace Azure Static Web Apps:
- **Místo aplikace**: `/quiz-app`
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
docsify serve                 # Serve na localhost:3000
```

### Sestavení specifická pro projekty

Každý projekt může mít vlastní sestavovací proces:
- Vue projekty: `npm run build` vytváří produkční balíčky
- Statické projekty: Žádný sestavovací krok, soubory se přímo servírují

## Směrnice pro pull requesty

### Formát názvů

Používejte jasné, popisné názvy indikující oblast změny:
- `[Quiz-app] Přidat nový kvíz pro lekci X`
- `[Lesson-3] Opravit překlep v projekt terrária`
- `[Translation] Přidat španělský překlad pro lekci 5`
- `[Docs] Aktualizace instrukcí pro nastavení`

### Požadované kontroly

Před odesláním PR:

1. **Kvalita kódu**:
   - Spusťte `npm run lint` ve zasažených projech složkách
   - Opravte všechny linting chyby a varování

2. **Ověření sestavení**:
   - Spusťte `npm run build` pokud je to relevantní
   - Zajistěte, že nejsou chyby při sestavení

3. **Validace odkazů**:
   - Otestujte všechny markdown odkazy
   - Ověřte funkčnost odkazů na obrázky

4. **Kontrola obsahu**:
   - Korektura pravopisu a gramatiky
   - Ověření správnosti a vzdělávací hodnoty příkladů kódu
   - Validace, že překlady zachovávají původní význam

### Požadavky na přispívání

- Souhlas se smlouvou Microsoft CLA (automatická kontrola při prvním PR)
- Dodržování [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Viz [CONTRIBUTING.md](./CONTRIBUTING.md) pro podrobné pokyny
- Odkazování na čísla issues v popisu PR, pokud je to relevantní

### Proces revize

- PRs jsou revidovány správci i komunitou
- Prioritizuje se vzdělávací srozumitelnost
- Příklady kódu by měly odpovídat aktuálním best practices
- Překlady jsou kontrolovány na přesnost a kulturní vhodnost

## Překladový systém

### Automatizovaný překlad

- Používá GitHub Actions s workflow co-op-translator
- Překládá do více než 50 jazyků automaticky
- Zdrojové soubory v hlavních adresářích
- Přeložené soubory v adresářích `translations/{language-code}/`

### Přidání manuálních vylepšení překladu

1. Najděte soubor v `translations/{language-code}/`
2. Proveďte vylepšení při zachování struktury
3. Zajistěte, že příklady kódu zůstanou funkční
4. Otestujte případný lokalizovaný obsah kvízů

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

## Ladění a odstraňování potíží

### Běžné problémy

**Quiz app se nespustí**:
- Zkontrolujte verzi Node.js (doporučeno v14+)
- Odstraňte `node_modules` a `package-lock.json`, znovu spusťte `npm install`
- Zkontrolujte konflikty portu (výchozí: Vite používá port 5173)

**API server se nespustí**:
- Ověřte verzi Node.js (node >=10)
- Zkontrolujte, zda port není již obsazen
- Ujistěte se, že všechny závislosti jsou nainstalovány pomocí `npm install`

**Rozšíření prohlížeče se nenačte**:
- Ověřte správné formátování manifest.json
- Kontrolujte konzoli prohlížeče na chyby
- Postupujte podle specifických instrukcí pro instalaci rozšíření v daném prohlížeči

**Problémy s Python chat projektem**:
- Ujistěte se, že je nainstalovaný balíček OpenAI: `pip install openai`
- Ověřte nastavení proměnné prostředí GITHUB_TOKEN
- Zkontrolujte oprávnění přístupu k GitHub Models

**Docsify neslouží dokumentaci**:
- Nainstalujte docsify-cli globálně: `npm install -g docsify-cli`
- Spouštějte z kořenového adresáře repozitáře
- Ověřte, že existuje `docs/_sidebar.md`

### Tipy pro vývojové prostředí

- Používejte VS Code s Live Server rozšířením pro HTML projekty
- Instalujte rozšíření ESLint a Prettier pro konzistentní formátování
- Používejte DevTools prohlížeče pro ladění JavaScriptu
- Pro Vue projekty instalujte Vue DevTools rozšíření prohlížeče

### Výkonové aspekty

- Velké množství přeložených souborů (50+ jazyků) znamená velké klony repozitáře
- Použijte shallow clone, pokud pracujete jen s obsahem: `git clone --depth 1`
- Při práci s anglickým obsahem vylučujte překlady z vyhledávání
- Sestavovací procesy mohou být pomalé při prvním spuštění (npm install, Vite build)

## Bezpečnostní aspekty

### Proměnné prostředí

- API klíče by neměly být nikdy commitnuty do repozitáře
- Používejte `.env` soubory (jsou v `.gitignore`)
- Dokumentujte požadované proměnné prostředí v README projektů

### Python projekty

- Používejte virtuální prostředí: `python -m venv venv`
- Udržujte závislosti aktualizované
- GitHub tokeny by měly mít minimální potřebná oprávnění

### Přístup k GitHub Models

- Vyžaduje se osobní přístupový token (PAT)
- Tokeny ukládejte jako proměnné prostředí
- Nikdy necommitujte tokeny nebo přihlašovací údaje

## Další poznámky

### Cílová skupina

- Kompletní začátečníci ve webovém vývoji
- Studenti a samouci
- Učitelé používající kurikulum ve třídách
- Obsah je navržen pro přístupnost a postupné budování dovedností

### Vzdělávací filozofie

- Případová výuka založená na projektech
- Časté kontroly znalostí (kvízy)
- Praktické programovací cvičení
- Příklady reálného použití
- Zaměření na základy před frameworky

### Údržba repozitáře

- Aktivní komunita studentů a přispěvatelů
- Pravidelné aktualizace závislostí a obsahu
- Problémy a diskuze monitorované správci
- Automatické aktualizace překladů přes GitHub Actions

### Související zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) doporučeno pro studenty
- Další kurzy: Generativní AI, Data Science, ML, IoT kurikula dostupná

### Práce s konkrétními projekty

Pro detailní instrukce k jednotlivým projektům odkazujte na README soubory v:
- `quiz-app/README.md` - Vue 3 aplikace kvízu
- `7-bank-project/README.md` - Bankovní aplikace s ověřováním
- `5-browser-extension/README.md` - Vývoj rozšíření prohlížeče
- `6-space-game/README.md` - Vývoj hry založené na canvasu
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Struktura monorepa

I když nejde o tradiční monorepo, tento repozitář obsahuje více nezávislých projektů:
- Každá lekce je samostatná
- Projekty nesdílí závislosti
- Práce na jednotlivých projektech bez ovlivnění ostatních
- Klonujte celý repozitář pro plný zážitek z kurikula

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Upozornění**:  
Tento dokument byl přeložen pomocí AI překladatelské služby [Co-op Translator](https://github.com/Azure/co-op-translator). I když usilujeme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho mateřském jazyce by měl být považován za autorizovaný zdroj. Pro zásadní informace se doporučuje profesionální lidský překlad. Nejsme odpovědni za žádné nedorozumění či chybné interpretace vyplývající z použití tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->