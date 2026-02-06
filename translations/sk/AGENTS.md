# AGENTS.md

## Prehľad projektu

Toto je vzdelávací repozitár pre výučbu základov webového vývoja pre začiatočníkov. Kurz je komplexný 12-týždňový program vyvinutý Microsoft Cloud Advocates, obsahujúci 24 praktických lekcií zameraných na JavaScript, CSS a HTML.

### Kľúčové komponenty

- **Vzdelávací obsah**: 24 štruktúrovaných lekcií organizovaných do modulov založených na projektoch  
- **Praktické projekty**: Terrárium, Hra na písanie, Rozšírenie prehliadača, Hra v priestore, Banková aplikácia, Editor kódu a AI Chat asistent  
- **Interaktívne kvízy**: 48 kvízov so 3 otázkami v každom (testy pred a po lekcii)  
- **Podpora viacerých jazykov**: Automatizované preklady do viac než 50 jazykov cez GitHub Actions  
- **Technológie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pre AI projekty)  

### Architektúra

- Vzdelávací repozitár so štruktúrou založenou na lekciách  
- Každý adresár lekcie obsahuje README, príklady kódu a riešenia  
- Samostatné projekty v oddelených adresároch (quiz-app, rôzne projekty lekcií)  
- Prekladový systém využívajúci GitHub Actions (co-op-translator)  
- Dokumentácia podávaná cez Docsify a dostupná ako PDF  

## Príkazy na nastavenie

Tento repozitár je primárne určený na konzumovanie vzdelávacieho obsahu. Pre prácu s konkrétnymi projektmi:  

### Nastavenie hlavného repozitára

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```
  
### Nastavenie Quiz Aplikácie (Vue 3 + Vite)  

```bash
cd quiz-app
npm install
npm run dev        # Spustiť vývojový server
npm run build      # Vytvoriť verziu pre produkciu
npm run lint       # Spustiť ESLint
```
  
### Bankový projekt API (Node.js + Express)  

```bash
cd 7-bank-project/api
npm install
npm start          # Spustiť API server
npm run lint       # Spustiť ESLint
npm run format     # Naformátovať pomocou Prettier
```
  
### Projekty Rozšírení prehliadača  

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podľa pokynov na načítanie rozšírení špecifických pre prehliadač
```
  
### Projekty Hry v priestore  

```bash
cd 6-space-game/solution
npm install
# Otvorte index.html v prehliadači alebo použite Live Server
```
  
### Chat Projekt (Python Backend)  

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavte premennú prostredia GITHUB_TOKEN
python api.py
```
  
## Vývojový pracovný tok

### Pre prispievateľov obsahu

1. **Vytvorte fork** repozitára do svojho GitHub účtu  
2. **Klonujte svoj fork** lokálne  
3. **Vytvorte novú vetvu** pre svoje zmeny  
4. Upravte obsah lekcií alebo príklady kódu  
5. Otestujte zmeny kódu v príslušných adresároch projektov  
6. Odoslať pull requesty podľa pravidiel prispievania  

### Pre študentov

1. Vytvorte fork alebo klon repozitára  
2. Prechádzajte adresáre lekcií postupne  
3. Čítajte README súbory ku každej lekcii  
4. Dokončite predlekčné kvízy na https://ff-quizzes.netlify.app/web/  
5. Pracujte s príkladmi kódu v adresároch lekcií  
6. Splňte úlohy a výzvy  
7. Vykonajte po lekčné kvízy  

### Priame vývojové prostredie

- **Dokumentácia**: Spustite `docsify serve` v koreňovom adresári (port 3000)  
- **Quiz App**: Spustite `npm run dev` v adresári quiz-app  
- **Projekty**: Použite VS Code Live Server rozšírenie pre HTML projekty  
- **API Projekty**: Spustite `npm start` v príslušných API adresároch  

## Inštrukcie na testovanie

### Testovanie Quiz Aplikácie

```bash
cd quiz-app
npm run lint       # Skontrolujte problémy so štýlom kódu
npm run build      # Overte, či je zostavenie úspešné
```
  
### Testovanie Bank API

```bash
cd 7-bank-project/api
npm run lint       # Skontrolujte problémy so štýlom kódu
node server.js     # Overte, či server štartuje bez chýb
```
  
### Všeobecný prístup k testovaniu

- Toto je vzdelávací repozitár bez komplexných automatizovaných testov  
- Manuálne testovanie sa zameriava na:  
  - Spustenie príkladov kódu bez chýb  
  - Funkčnosť odkazov v dokumentácii  
  - Úspešné zostavenie projektov  
  - Dodržiavanie najlepších postupov v príkladoch  

### Kontroly pred odoslaním

- Spustite `npm run lint` v adresároch obsahujúcich package.json  
- Overte platnosť odkazov v markdown súboroch  
- Otestujte príklady kódu v prehliadači alebo Node.js  
- Skontrolujte, že preklady zachovávajú správnu štruktúru  

## Pravidlá štýlu kódu

### JavaScript

- Používajte modernú syntax ES6+  
- Dodržiavajte štandardné ESLint konfigurácie v projektoch  
- Používajte zrozumiteľné mená premenných a funkcií pre lepšiu výučbu  
- Pridávajte komentáre vysvetľujúce koncepty pre študentov  
- Formátovanie pomocou Prettier tam, kde je nastavené  

### HTML/CSS

- Semantické HTML5 prvky  
- Princípy responzívneho dizajnu  
- Jasné pomenovanie CSS tried  
- Komentáre vysvetľujúce CSS techniky pre študentov  

### Python

- Dodržiavajte PEP 8 štýlové smernice  
- Čisté, vzdelávacie príklady kódu  
- Typové anotácie tam, kde pomáhajú pri učení  

### Markdown Dokumentácia

- Jasná hierarchia nadpisov  
- Bloky kódu s definovaním jazyka  
- Odkazy na doplnkové zdroje  
- Screenshoty a obrázky v adresároch `images/`  
- Alternatívny text pre obrázky pre prístupnosť  

### Organizácia súborov

- Lekcie sú očíslované postupne (1-getting-started-lessons, 2-js-basics atď.)  
- Každý projekt má adresáre `solution/` a často `start/` alebo `your-work/`  
- Obrázky sú uložené v špecifických adresároch lekcií `images/`  
- Preklady v adresárovej štruktúre `translations/{language-code}/`  

## Build a Nasadenie

### Nasadenie Quiz Aplikácie (Azure Static Web Apps)

Quiz-app je nakonfigurovaný pre nasadenie ako Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytvára priečinok dist/
# Nasadzuje cez workflow GitHub Actions pri push do main
```
  
Konfigurácia Azure Static Web Apps:  
- **Umiestnenie aplikácie**: `/quiz-app`  
- **Výstupné umiestnenie**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Generovanie PDF dokumentácie

```bash
npm install                    # Nainštalujte docsify-to-pdf
npm run convert               # Vygenerujte PDF z docs
```
  
### Dokumentácia Docsify

```bash
npm install -g docsify-cli    # Nainštalovať Docsify globálne
docsify serve                 # Spustiť na localhost:3000
```
  
### Projektovo špecifické buildy

Každý projektový adresár môže mať svoj vlastný build proces:  
- Vue projekty: `npm run build` vytvára produkčné balíky  
- Statické projekty: žiadny build krok, súbory sa servujú priamo  

## Pravidlá pre pull requesty

### Formát názvu

Používajte jasné, zrozumiteľné názvy indikujúce oblasť zmeny:  
- `[Quiz-app] Pridanie nového kvízu pre lekciu X`  
- `[Lesson-3] Oprava preklepu v projekte terrarium`  
- `[Translation] Pridanie španielskeho prekladu pre lekciu 5`  
- `[Docs] Aktualizácia inštrukcií pre nastavenie`  

### Povinné kontroly

Pred odoslaním PR:  

1. **Kvalita kódu**:  
   - Spustite `npm run lint` v ovplyvnených projektových adresároch  
   - Opravte všetky chyby a varovania z lintovania  

2. **Overenie buildovania**:  
   - Spustite `npm run build` pokiaľ je to relevantné  
   - Uistite sa, že nie sú žiadne chyby pri buildovaní  

3. **Validácia odkazov**:  
   - Otestujte všetky markdown odkazy  
   - Overte, že odkazy na obrázky fungujú  

4. **Kontrola obsahu**:  
   - Korektúra pravopisu a gramatiky  
   - Uistite sa, že príklady kódu sú správne a vzdelávacie  
   - Skontrolujte, že preklady zachovávajú pôvodný význam  

### Požiadavky na príspevky

- Súhlas s Microsoft CLA (automatická kontrola pri prvom PR)  
- Dodržiavanie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Pozrite [CONTRIBUTING.md](./CONTRIBUTING.md) pre podrobné pokyny  
- V PR popise uveďte čísla súvisiacich issues, ak sú relevantné  

### Proces preskúmania

- PR sú kontrolované správcom a komunitou  
- Prioritou je vzdelávacia zrozumiteľnosť  
- Príklady kódu by mali byť podľa súčasných najlepších praktík  
- Preklady sa kontrolujú z hľadiska presnosti a kultúrnej vhodnosti  

## Prekladový systém

### Automatizovaný preklad

- Využíva GitHub Actions s workflow co-op-translator  
- Automaticky prekladá do viac než 50 jazykov  
- Zdrojové súbory sú v hlavných adresároch  
- Preložené súbory v adresároch `translations/{language-code}/`  

### Pridávanie manuálnych vylepšení prekladu

1. Nájdite súbor v `translations/{language-code}/`  
2. Zlepšite obsah pri zachovaní štruktúry  
3. Zabezpečte, aby príklady kódu ostali funkčné  
4. Otestujte lokalizovaný obsah kvízov  

### Metaúdaje prekladu

Preložené súbory obsahujú hlavičku s metaúdajmi:  
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

**Quiz aplikácia sa nespustí**:  
- Skontrolujte verziu Node.js (odporúčaná v14+)  
- Vymažte `node_modules` a `package-lock.json`, potom spustite `npm install` znova  
- Skontrolujte konflikty portov (prednastavený port Vite je 5173)  

**API server sa nespustí**:  
- Overte minimálnu požadovanú verziu Node.js (node >=10)  
- Skontrolujte, či nie je port obsadený  
- Uistite sa, že všetky závislosti sú nainštalované cez `npm install`  

**Rozšírenie prehliadača sa nenahodí**:  
- Skontrolujte správnosť formátu súboru manifest.json  
- Pozrite konzolu prehliadača na chyby  
- Postupujte podľa špecifických inštrukcií prehliadača na inštaláciu rozšírení  

**Problémy s chat projektom v Pythone**:  
- Uistite sa, že balík OpenAI je nainštalovaný: `pip install openai`  
- Overte nastavenie environmentálnej premennej GITHUB_TOKEN  
- Skontrolujte prístupové práva pre GitHub Models  

**Docsify neservuje dokumentáciu**:  
- Globálne nainštalujte docsify-cli: `npm install -g docsify-cli`  
- Spustite z koreňového adresára repozitára  
- Skontrolujte, či existuje `docs/_sidebar.md`  

### Tipy pre vývojové prostredie

- Používajte VS Code s rozšírením Live Server pre HTML projekty  
- Nainštalujte si ESLint a Prettier rozšírenia pre konzistentné formátovanie  
- Používajte DevTools v prehliadači pre ladenie JavaScriptu  
- Pre Vue projekty nainštalujte Vue DevTools rozšírenie prehliadača  

### Výkonnostné úvahy

- Veľké množstvo preložených súborov (50+ jazykov) znamená veľké klony  
- Používajte shallow clone pre prácu iba s obsahom: `git clone --depth 1`  
- Vynechajte preklady z vyhľadávania, keď pracujete v angličtine  
- Build procesy môžu byť pri prvom spustení pomalé (npm install, Vite build)  

## Bezpečnostné upozornenia

### Environmentálne premenné

- API kľúče by nikdy nemali byť commitnuté do repozitára  
- Používajte `.env` súbory (už sú v `.gitignore`)  
- Dokumentujte požadované environmentálne premenné v README projektoch  

### Python Projekty

- Používajte virtuálne prostredia: `python -m venv venv`  
- Udržiavajte závislosti aktuálne  
- GitHub tokeny by mali mať minimálne potrebné oprávnenia  

### Prístup k GitHub Models

- Osobné prístupové tokeny (PAT) sú vyžadované pre GitHub Models  
- Tokeny by mali byť uložené ako environmentálne premenné  
- Nikdy necommitujte tokeny alebo prístupové údaje  

## Dodatočné poznámky

### Cieľová skupina

- Úplní začiatočníci v oblasti webového vývoja  
- Študenti a samoukovia  
- Učitelia využívajúci tento kurz v triedach  
- Obsah navrhnutý pre prístupnosť a postupné zvyšovanie zručností  

### Vzdelávacia filozofia

- Projektovo orientovaný prístup k učeniu  
- Časté overovanie poznatkov (kvízy)  
- Praktické cvičenia s kódom  
- Príklady použitia v reálnych situáciách  
- Zameranie na základy pred frameworkmi  

### Údržba repozitára

- Aktívna komunita študentov a prispievateľov  
- Pravidelné aktualizácie závislostí a obsahu  
- Issues a diskusie spravované udržiavateľmi  
- Preklady aktualizované automaticky cez GitHub Actions  

### Súvisiace zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)  
- [Zdroje pre študentov](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) odporúčaný pre študentov  
- Ďalšie kurzy: Generatívna AI, Data Science, ML, IoT dostupné  

### Práca s konkrétnymi projektmi

Pre podrobné návody ku jednotlivým projektom si prečítajte README súbory v:  
- `quiz-app/README.md` - Vue 3 kvízová aplikácia  
- `7-bank-project/README.md` - Banková aplikácia s autentifikáciou  
- `5-browser-extension/README.md` - Vývoj rozšírenia prehliadača  
- `6-space-game/README.md` - Vývoj hry pomocou Canvasu  
- `9-chat-project/README.md` - Projekt AI chat asistenta  

### Štruktúra monorepa

Hoci to nie je tradičné monorepo, repozitár obsahuje viacero nezávislých projektov:  
- Každá lekcia je samostatná  
- Projekty nezdieľajú závislosti  
- Pracujte na jednotlivých projektoch bez ovplyvnenia ostatných  
- Klonujte celý repozitár pre kompletný kurzový zážitok  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vyhlásenie o zodpovednosti**:
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, majte prosím na pamäti, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Originálny dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne výklady vyplývajúce z použitia tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->