# AGENTS.md

## Přehled projektu

Toto je vzdělávací repozitář kurikula pro výuku základů webového vývoje pro začátečníky. Kurikulum je komplexní 12týdenní kurz vyvinutý Microsoft Cloud Advocates, obsahující 24 praktických lekcí pokrývajících JavaScript, CSS a HTML.

### Klíčové součásti

- **Vzdělávací obsah**: 24 strukturovaných lekcí uspořádaných do modulů založených na projektech
- **Praktické projekty**: Terrárium, Hra na psaní, Rozšíření prohlížeče, Hra ve vesmíru, Bankovní aplikace, Editor kódu a AI chatovací asistent
- **Interaktivní kvízy**: 48 kvízů, každý s 3 otázkami (před a po lekci)
- **Vícejazyčná podpora**: Automatické překlady do více než 50 jazyků pomocí GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pro AI projekty)

### Architektura

- Vzdělávací repozitář s lekcemi strukturovanými podle lekcí
- Každá složka lekce obsahuje README, příklady kódu a řešení
- Samostatné projekty v oddělených adresářích (quiz-app, různé lekční projekty)
- Překladový systém používající GitHub Actions (co-op-translator)
- Dokumentace podávána přes Docsify a dostupná jako PDF

## Příkazy pro nastavení

Tento repozitář je primárně určen k výuce. Pro práci s konkrétními projekty:

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
npm run build      # Vytvořit build pro produkci
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
# Postupujte podle pokynů specifických pro načítání rozšíření v prohlížeči
```

### Projekty Hry ve vesmíru

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

## Vývojový pracovní postup

### Pro přispěvatele obsahu

1. **Vytvořte fork repozitáře** na svůj GitHub účet
2. **Naklonujte svůj fork** lokálně
3. **Vytvořte novou větev** pro své změny
4. Proveďte změny obsahu lekcí nebo příkladů kódu
5. Testujte jakékoli změny kódu v příslušných projektových složkách
6. Odesílejte pull requesty podle pravidel přispívání

### Pro studenty

1. Forkujte nebo naklonujte repozitář
2. Procházejte složky lekcí postupně
3. Čtěte README soubory ke každé lekci
4. Dokončete předlekční kvízy na https://ff-quizzes.netlify.app/web/
5. Procházejte příklady kódu ve složkách lekcí
6. Plňte úkoly a výzvy
7. Udělejte si post-lekční kvízy

### Živý vývoj

- **Dokumentace**: Spusťte `docsify serve` v kořenovém adresáři (port 3000)
- **Quiz App**: Spusťte `npm run dev` ve složce quiz-app
- **Projekty**: Použijte VS Code Live Server rozšíření pro HTML projekty
- **API projekty**: Spusťte `npm start` v příslušných API složkách

## Instrukce pro testování

### Testování Quiz App

```bash
cd quiz-app
npm run lint       # Zkontrolujte problémy se stylem kódu
npm run build      # Ověřte, že sestavení proběhlo úspěšně
```

### Testování bankovního API

```bash
cd 7-bank-project/api
npm run lint       # Zkontrolujte problémy s kódovým stylem
node server.js     # Ověřte, že server startuje bez chyb
```

### Obecný přístup k testování

- Jedná se o vzdělávací repozitář bez komplexních automatizovaných testů
- Manuální testování se zaměřuje na:
  - Spuštění příkladů kódu bez chyb
  - Funkčnost odkazů v dokumentaci
  - Úspěšné sestavení projektů
  - Dodržování osvědčených postupů v příkladech

### Kontroly před odesláním

- Spusťte `npm run lint` ve složkách s package.json
- Ověřte platnost markdown odkazů
- Testujte příklady kódu v prohlížeči nebo Node.js
- Zkontrolujte, že překlady zachovávají správnou strukturu

## Směrnice stylu kódu

### JavaScript

- Používejte moderní syntaxi ES6+
- Dodržujte standardní ESLint konfigurace v projektech
- Používejte smysluplné názvy proměnných a funkcí pro vzdělávací přehlednost
- Přidávejte komentáře vysvětlující koncepty pro studenty
- Formátujte pomocí Prettier, kde je nakonfigurováno

### HTML/CSS

- Sémantické HTML5 prvky
- Principy responzivního designu
- Jasné pojmenování tříd
- Komentáře vysvětlující CSS techniky pro studenty

### Python

- Dodržujte směrnice stylu PEP 8
- Jasné, vzdělávací příklady kódu
- Používejte typové nápovědy tam, kde jsou pro výuku užitečné

### Dokumentace v Markdown

- Jasná hierarchie nadpisů
- Bloky kódu s určením jazyka
- Odkazy na další zdroje
- Snímky a obrázky ve složkách `images/`
- Alt texty pro obrázky pro přístupnost

### Organizace souborů

- Lekce číslovány sekvenčně (1-getting-started-lessons, 2-js-basics atd.)
- Každý projekt má složky `solution/` a často `start/` nebo `your-work/`
- Obrázky uložené do lekčních složek `images/`
- Překlady v adresáři `translations/{language-code}/`

## Sestavení a nasazení

### Nasazení Quiz App (Azure Static Web Apps)

Quiz-app je nakonfigurován pro nasazení na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytváří složku dist/
# Nasazuje pomocí workflow GitHub Actions při pushnutí do větve main
```

Konfigurace Azure Static Web Apps:
- **Umístění aplikace**: `/quiz-app`
- **Výstupní umístění**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generování PDF dokumentace

```bash
npm install                    # Nainstalujte docsify-to-pdf
npm run convert               # Vytvořte PDF z dokumentace
```

### Dokumentace Docsify

```bash
npm install -g docsify-cli    # Nainstalujte Docsify globálně
docsify serve                 # Spusťte na localhost:3000
```

### Sestavení specifické pro projekt

Každý projekt může mít svůj vlastní build proces:
- Vue projekty: `npm run build` vytváří produkční balíčky
- Statické projekty: žádný build krok, soubory se podávají přímo

## Pravidla pro pull requesty

### Formát názvu

Používejte jasné, výstižné názvy udávající oblast změny:
- `[Quiz-app] Přidat nový kvíz pro lekci X`
- `[Lesson-3] Opravit překlep v projektu terrárium`
- `[Translation] Přidat španělský překlad pro lekci 5`
- `[Docs] Aktualizovat instrukce pro nastavení`

### Povinné kontroly

Před odesláním PR:

1. **Kvalita kódu**:
   - Spusťte `npm run lint` ve zasažených projektových složkách
   - Opravte všechny chyby a varování lintu

2. **Ověření sestavení**:
   - Pokud je to možné, spusťte `npm run build`
   - Ujistěte se, že nejsou chyby build procesu

3. **Ověření odkazů**:
   - Otestujte všechny markdown odkazy
   - Ověřte, že odkazy na obrázky fungují

4. **Kontrola obsahu**:
   - Korektura pravopisu a gramatiky
   - Ověření správnosti a vzdělávací hodnoty příkladů kódu
   - Kontrola, že překlady zachovávají původní význam

### Požadavky na příspěvek

- Souhlas s Microsoft CLA (automatická kontrola u prvního PR)
- Dodržování [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Viz [CONTRIBUTING.md](./CONTRIBUTING.md) pro podrobné pokyny
- Veškeré PR by měly odkazovat na čísla issues, pokud je to relevantní

### Přezkum PR

- PR jsou přezkoumávány správci i komunitou
- Preferována je vzdělávací srozumitelnost
- Příklady kódu by měly odpovídat současným nejlepším praktikám
- Překlady jsou kontrolovány z hlediska přesnosti a kulturní vhodnosti

## Překladový systém

### Automatický překlad

- Používá GitHub Actions s workflow co-op-translator
- Automaticky překládá do více než 50 jazyků
- Zdrojové soubory jsou v hlavních adresářích
- Přeložené soubory jsou v `translations/{language-code}/`

### Přidávání manuálních překladatelských vylepšení

1. Najděte soubor v `translations/{language-code}/`
2. Proveďte vylepšení, přičemž zachovejte strukturu
3. Ujistěte se, že příklady kódu zůstávají funkční
4. Otestujte lokalizovaný obsah kvízu

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

## Ladění a odstraňování problémů

### Běžné problémy

**Quiz app se nespustí**:
- Zkontrolujte verzi Node.js (doporučeno v14+)
- Smažte `node_modules` a `package-lock.json`, spusťte znovu `npm install`
- Zkontrolujte konflikt portů (výchozí: Vite používá port 5173)

**API server se nespustí**:
- Ověřte minimální verzi Node.js (node >=10)
- Zkontrolujte, zda port není již obsazený
- Ujistěte se, že všechny závislosti jsou nainstalovány pomocí `npm install`

**Rozšíření prohlížeče se nenačte**:
- Ověřte správné formátování manifest.json
- Prohlédněte si konzoli prohlížeče pro chyby
- Postupujte podle specifických instrukcí pro instalaci rozšíření v prohlížeči

**Problémy s Python chat projektem**:
- Zajistěte instalaci balíčku OpenAI: `pip install openai`
- Ověřte nastavení proměnné prostředí GITHUB_TOKEN
- Zkontrolujte oprávnění pro přístup k GitHub Models

**Docsify negeneruje dokumentaci**:
- Globálně nainstalujte docsify-cli: `npm install -g docsify-cli`
- Spusťte z kořenového adresáře repozitáře
- Ujistěte se, že existuje soubor `docs/_sidebar.md`

### Tipy pro vývojové prostředí

- Používejte VS Code s rozšířením Live Server pro HTML projekty
- Nainstalujte ESLint a Prettier pro konzistentní formátování
- Používejte browser DevTools pro ladění JavaScriptu
- Pro projekty Vue nainstalujte Vue DevTools rozšíření do prohlížeče

### Výkonové úvahy

- Velký počet překladů (50+ jazyků) znamená velké kompletní klony
- Použijte shallow clone, pokud pracujete jen s obsahem: `git clone --depth 1`
- Vylučujte překlady ze vyhledávání při práci na anglickém obsahu
- Build procesy mohou být při prvním spuštění pomalé (npm install, Vite build)

## Bezpečnostní opatření

### Proměnné prostředí

- API klíče by nikdy neměly být commitovány do repozitáře
- Používejte `.env` soubory (již uvedeny v `.gitignore`)
- Dokumentujte požadované proměnné prostředí v README projektech

### Python projekty

- Používejte virtuální prostředí: `python -m venv venv`
- Udržujte závislosti aktuální
- GitHub tokeny by měly mít minimální potřebná oprávnění

### Přístup k GitHub Models

- Pro GitHub Models jsou potřeba osobní přístupové tokeny (PAT)
- Tokeny by měly být uloženy v proměnných prostředí
- Nikdy neukládejte tokeny nebo přihlašovací údaje do repozitáře

## Další poznámky

### Cílová skupina

- Naprostí začátečníci ve webovém vývoji
- Studenti a samouci
- Učitelé používající kurikulum ve třídách
- Obsah navržený pro přístupnost a postupné budování dovedností

### Vzdělávací filozofie

- Přístup založený na projektech
- Časté ověřování znalostí (kvízy)
- Praktické cvičení v kódování
- Reálné ukázky použití
- Zaměření na základy před frameworky

### Údržba repozitáře

- Aktivní komunita studentů a přispěvatelů
- Pravidelné aktualizace závislostí a obsahu
- Sledování issues a diskuzí správci
- Aktualizace překladů automatizované přes GitHub Actions

### Související zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) doporučený pro studenty
- Další kurzy: Generativní AI, Data Science, ML, IoT kurikula dostupná

### Práce s konkrétními projekty

Pro podrobné instrukce k jednotlivým projektům viz README soubory v:
- `quiz-app/README.md` - Vue 3 aplikace kvízu
- `7-bank-project/README.md` - Bankovní aplikace s autentizací
- `5-browser-extension/README.md` - Vývoj rozšíření prohlížeče
- `6-space-game/README.md` - Vývoj hry založené na Canvasu
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Struktura Monorepo

I když se nejedná o tradiční monorepo, tento repozitář obsahuje více nezávislých projektů:
- Každá lekce je samostatná
- Projekty nesdílejí závislosti
- Pracujte na jednotlivých projektech bez ovlivnění ostatních
- Naklonujte celý repozitář pro kompletní zážitek kurikula

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Prohlášení o omezení odpovědnosti**:  
Tento dokument byl přeložen pomocí AI překladatelské služby [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoliv usilujeme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho mateřském jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Nejsme odpovědni za jakékoli nedorozumění nebo mylné výklady vyplývající z použití tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->