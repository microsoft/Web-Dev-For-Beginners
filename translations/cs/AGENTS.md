# AGENTS.md

## Přehled projektu

Toto je vzdělávací repozitář kurikula pro výuku základů webového vývoje pro začátečníky. Kurikulum je komplexní 12-týdenní kurz vyvinutý týmem Microsoft Cloud Advocates, obsahující 24 praktických lekcí pokrývajících JavaScript, CSS a HTML.

### Klíčové součásti

- **Vzdělávací obsah**: 24 strukturovaných lekcí uspořádaných do modulů založených na projektech  
- **Praktické projekty**: Terrárium, Hra psaní, Rozšíření prohlížeče, Hra ve vesmíru, Bankovní aplikace, Kódový editor a AI chatovací asistent  
- **Interaktivní kvízy**: 48 kvízů s 3 otázkami každý (před/po lekci)  
- **Vícejazyčná podpora**: Automatizované překlady do více než 50 jazyků pomocí GitHub Actions  
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pro AI projekty)  

### Architektura

- Vzdělávací repozitář se strukturou založenou na lekcích  
- Každá složka lekce obsahuje README, příklady kódu a řešení  
- Samostatné projekty ve zvláštních adresářích (quiz-app, různé projekty lekcí)  
- Překladový systém využívající GitHub Actions (co-op-translator)  
- Dokumentace servírovaná přes Docsify a dostupná jako PDF  

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
npm run dev        # Spusťte vývojový server
npm run build      # Vytvořit produkční verzi
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

## Vývojový proces

### Pro přispěvatele obsahu

1. **Forkněte repozitář** na svůj GitHub účet  
2. **Naklonujte svůj fork** lokálně  
3. **Vytvořte novou větev** pro změny  
4. Proveďte změny v obsahu lekcí nebo příkladech kódu  
5. Testujte jakékoliv změny kódu v příslušných adresářích projektů  
6. Odesílejte pull requesty v souladu s pokyny na přispívání  

### Pro studenty

1. Forkněte nebo klonujte repozitář  
2. Procházejte adresáře lekcí postupně  
3. Čtěte README soubory u každé lekce  
4. Dokončete před-lekční kvízy na https://ff-quizzes.netlify.app/web/  
5. Projděte příklady kódu v adresářích lekcí  
6. Dokončete úkoly a výzvy  
7. Absolvujte kvízy po lekci  

### Live vývoj

- **Dokumentace**: Spusťte `docsify serve` v kořenovém adresáři (port 3000)  
- **Quiz App**: Spusťte `npm run dev` v adresáři quiz-app  
- **Projekty**: Použijte VS Code Live Server rozšíření pro HTML projekty  
- **API projekty**: Spusťte `npm start` v příslušných API adresářích  

## Instrukce pro testování

### Testování Quiz App

```bash
cd quiz-app
npm run lint       # Zkontrolujte problémy se stylem kódu
npm run build      # Ověřte, že sestavení je úspěšné
```

### Testování Bank API

```bash
cd 7-bank-project/api
npm run lint       # Zkontrolujte problémy se stylem kódu
node server.js     # Ověřte, že server startuje bez chyb
```

### Obecný přístup k testování

- Tento repozitář je vzdělávací a neobsahuje rozsáhlé automatizované testy  
- Ruční testování se zaměřuje na:  
  - Příklady kódu bez chyb při spuštění  
  - Funkčnost odkazů v dokumentaci  
  - Úspěšné sestavení projektů  
  - Dodržování nejlepších praktik v příkladech  

### Kontroly před odesláním

- Spusťte `npm run lint` v adresářích s package.json  
- Ověřte validitu markdown odkazů  
- Otestujte příklady kódu v prohlížeči nebo Node.js  
- Zkontrolujte, že překlady zachovávají správnou strukturu  

## Pravidla stylu kódu

### JavaScript

- Používejte moderní syntax ES6+  
- Dodržujte standardní konfigurace ESLint v projektech  
- Používejte smysluplná jména proměnných a funkcí pro lepší vzdělávací přehlednost  
- Přidávejte komentáře vysvětlující koncepty pro studenty  
- Formátujte pomocí Prettier tam, kde je nakonfigurován  

### HTML/CSS

- Používejte sémantické elementy HTML5  
- Principy responsivního designu  
- Jasné pojmenování tříd  
- Komentáře vysvětlující CSS techniky pro studenty  

### Python

- Dodržujte stylové směrnice PEP 8  
- Jasné a vzdělávací příklady kódu  
- Typové hinty tam, kde jsou užitečné pro učení  

### Markdown dokumentace

- Jasná hierarchie nadpisů  
- Bloky kódu s určením jazyka  
- Odkazy na další zdroje  
- Screenshoty a obrázky v adresářích `images/`  
- Alt texty obrázků pro přístupnost  

### Organizace souborů

- Lekce očíslovány postupně (1-getting-started-lessons, 2-js-basics atd.)  
- Každý projekt má adresáře `solution/` a často `start/` nebo `your-work/`  
- Obrázky uložené v adresářích specifických pro lekce `images/`  
- Překlady ve struktuře `translations/{jazykový-kód}/`  

## Sestavení a nasazení

### Nasazení Quiz App (Azure Static Web Apps)

Quiz-app je nakonfigurován pro nasazení na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytváří složku dist/
# Nasazuje pomocí GitHub Actions workflow při pushi do main
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
docsify serve                 # Spusťte na localhost:3000
```
  
### Specifická sestavení projektů

Každý projektový adresář může mít vlastní build proces:  
- Vue projekty: `npm run build` vytváří produkční balíčky  
- Statické projekty: žádný build krok, přímo servírujte soubory  

## Pokyny pro pull requesty

### Formát názvu

Používejte jasné, popisné názvy uvádějící oblast změny:  
- `[Quiz-app] Přidání nového kvízu pro lekci X`  
- `[Lesson-3] Oprava překlepu v projektu terrárium`  
- `[Translation] Přidání španělského překladu pro lekci 5`  
- `[Docs] Aktualizace instrukcí pro nastavení`  

### Nutné kontroly před odesláním PR

1. **Kvalita kódu**:  
   - Spusťte `npm run lint` v příslušných adresářích projektů  
   - Opravte všechny linting chyby a varování  

2. **Ověření sestavení**:  
   - Spusťte `npm run build`, pokud je potřeba  
   - Zajistěte, že nejsou žádné chyby při sestavování  

3. **Ověření odkazů**:  
   - Otestujte všechny odkazy v markdownu  
   - Ověřte funkčnost obrázkových referencí  

4. **Kontrola obsahu**:  
   - Korektury pravopisu a gramatiky  
   - Zajistěte, že příklady kódu jsou správné a vhodné pro vzdělávání  
   - Ověřte přesnost překladů a zachování významu  

### Požadavky na přispění

- Souhlas s Microsoft CLA (automatická kontrola při prvním PR)  
- Dodržování [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Viz [CONTRIBUTING.md](./CONTRIBUTING.md) pro podrobné pokyny  
- V případě potřeby uvádějte čísla issue v popisu PR  

### Proces revize

- PR jsou kontrolovány správci a komunitou  
- Převládá vzdělávací srozumitelnost  
- Příklady kódu by měly odpovídat aktuálním nejlepším praktikám  
- Překlady jsou kontrolovány z hlediska přesnosti a kulturní vhodnosti  

## Překladový systém

### Automatizovaný překlad

- Používá GitHub Actions s workflow co-op-translator  
- Automatický překlad do více než 50 jazyků  
- Zdrojové soubory v hlavních adresářích  
- Přeložené soubory v adresářích `translations/{jazykový-kód}/`  

### Přidávání manuálních zlepšení překladů

1. Najděte soubor v `translations/{jazykový-kód}/`  
2. Provádějte zlepšení s zachováním struktury  
3. Zajistěte funkčnost příkladů kódu  
4. Testujte lokalizovaný obsah kvízů  

### Metadata překladu

Přeložené soubory obsahují metadata hlavičku:  
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
- Smažte `node_modules` a `package-lock.json`, spusťte `npm install` znovu  
- Zkontrolujte konflikty portů (výchozí: Vite používá port 5173)  

**API server se nespustí**:  
- Ověřte, že Node.js má minimálně verzi (node >=10)  
- Zkontrolujte, zda port není již obsazen  
- Ujistěte se, že jsou nainstalovány všechny závislosti pomocí `npm install`  

**Rozšíření prohlížeče se nenačte**:  
- Ověřte správné formátování manifest.json  
- Zkontrolujte chyby v konzoli prohlížeče  
- Postupujte podle pokynů pro instalaci rozšíření specifických pro prohlížeč  

**Problémy s Python chat projektem**:  
- Ujistěte se, že je nainstalován balíček OpenAI: `pip install openai`  
- Přesvědčte se, že proměnná prostředí GITHUB_TOKEN je nastavena  
- Ověřte přístupová oprávnění k GitHub Models  

**Docsify neservíruje dokumentaci**:  
- Nainstalujte globálně docsify-cli: `npm install -g docsify-cli`  
- Spusťte z kořenového adresáře repozitáře  
- Zkontrolujte, že existuje soubor `docs/_sidebar.md`  

### Tipy pro vývojové prostředí

- Používejte VS Code s rozšířením Live Server pro HTML projekty  
- Nainstalujte ESLint a Prettier rozšíření pro konzistentní formátování  
- Používejte DevTools v prohlížeči pro ladění JavaScriptu  
- Pro Vue projekty nainstalujte Vue DevTools rozšíření do prohlížeče  

### Výkonové aspekty

- Velké množství přeložených souborů (50+ jazyků) znamená velké plné klony  
- Používejte shallow clone, pokud pracujete pouze s obsahem: `git clone --depth 1`  
- Vyjměte překlady z vyhledávání při práci s anglickým obsahem  
- Build procesy mohou být pomalé při prvním spuštění (npm install, Vite build)  

## Bezpečnostní aspekty

### Proměnné prostředí

- API klíče by nikdy neměly být commitovány do repozitáře  
- Používejte `.env` soubory (již v `.gitignore`)  
- Požadované proměnné dokumentujte v README projektů  

### Python projekty

- Používejte virtuální prostředí: `python -m venv venv`  
- Udržujte závislosti aktuální  
- GitHub tokeny by měly mít minimální potřebná oprávnění  

### Přístup k GitHub Models

- Pro GitHub Models jsou potřeba osobní přístupové tokeny (PAT)  
- Tokeny ukládejte jako proměnné prostředí  
- Nikdy necommitujte tokeny nebo přihlašovací údaje  

## Další poznámky

### Cílová skupina

- Úplní začátečníci ve webovém vývoji  
- Studenti a samouci  
- Učitelé používající kurikulum ve třídách  
- Obsah je navržen s důrazem na přístupnost a postupné budování dovedností  

### Vzdělávací filozofie

- Přístup založený na projektech  
- Časté prověřování znalostí (kvízy)  
- Praktická cvičení s kódováním  
- Příklady aplikací z reálného světa  
- Zaměření na základy před frameworky  

### Údržba repozitáře

- Aktivní komunita studentů a přispěvatelů  
- Pravidelné aktualizace závislostí a obsahu  
- Sledování issue a diskuzí správci  
- Automatizované aktualizace překladů pomocí GitHub Actions  

### Související zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)  
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) doporučený pro studenty  
- Další kurzy: Generativní AI, Data Science, ML, IoT kurikula dostupná  

### Práce s konkrétními projekty

Pro podrobné instrukce k jednotlivým projektům viz README soubory v:  
- `quiz-app/README.md` - Vue 3 quiz aplikace  
- `7-bank-project/README.md` - Bankovní aplikace s autentifikací  
- `5-browser-extension/README.md` - Vývoj rozšíření prohlížeče  
- `6-space-game/README.md` - Vývoj hry v Canvasu  
- `9-chat-project/README.md` - Projekt AI chat asistenta  

### Struktura monorepa

I když nejde o tradiční monorepo, tento repozitář obsahuje několik nezávislých projektů:  
- Každá lekce je soběstačná  
- Projekty nesdílí závislosti  
- Pracujte na jednotlivých projektech bez ovlivnění ostatních  
- Naklonujte celý repozitář pro kompletní zkušenost s kurikulem  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Prohlášení o vyloučení odpovědnosti**:
Tento dokument byl přeložen pomocí služby automatického překladu AI [Co-op Translator](https://github.com/Azure/co-op-translator). Přestože usilujeme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Originální dokument v jeho rodném jazyce by měl být považován za závazný zdroj. Pro zásadní informace se doporučuje profesionální lidský překlad. Nejsme odpovědní za jakákoliv nedorozumění nebo špatné výklady vzniklé z používání tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->