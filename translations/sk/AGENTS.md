# AGENTS.md

## Prehľad projektu

Toto je repozitár vzdelávacieho kurikula na výučbu základov webového vývoja pre začiatočníkov. Kurikulum je komplexný 12-týždňový kurz vyvinutý Microsoft Cloud Advocates, obsahujúci 24 praktických lekcií pokrývajúcich JavaScript, CSS a HTML.

### Kľúčové komponenty

- **Vzdelávací obsah**: 24 štruktúrovaných lekcií usporiadaných do modulov založených na projektoch
- **Praktické projekty**: Terrárium, Hra na písanie, Rozšírenie prehliadača, Hra vo vesmíre, Banková aplikácia, Editor kódu a AI Chat asistent
- **Interaktívne kvízy**: 48 kvízov s 3 otázkami každý (pred a po lekcii)
- **Podpora viacerých jazykov**: Automatizované preklady do 50+ jazykov pomocou GitHub Actions
- **Technológie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pre AI projekty)

### Architektúra

- Vzdelávací repozitár so štruktúrou založenou na lekciách
- Každá lekcia má priečinok s README, príkladmi kódu a riešeniami
- Samostatné projekty v oddelených adresároch (quiz-app, rôzne lekčné projekty)
- Prekladový systém využívajúci GitHub Actions (co-op-translator)
- Dokumentácia poskytovaná cez Docsify a dostupná aj vo formáte PDF

## Príkazy na nastavenie

Tento repozitár je primárne určený na konzumáciu vzdelávacieho obsahu. Pre prácu s konkrétnymi projektmi:

### Nastavenie hlavného repozitára

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Nastavenie Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Spustiť vývojový server
npm run build      # Vytvoriť build pre produkciu
npm run lint       # Spustiť ESLint
```

### Bankový projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Spustiť API server
npm run lint       # Spustiť ESLint
npm run format     # Formátovať pomocou Prettier
```

### Projekty rozšírenia prehliadača

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podľa pokynov pre načítanie rozšírení špecifických pre prehliadač
```

### Projekty hry vo vesmíre

```bash
cd 6-space-game/solution
npm install
# Otvorte index.html v prehliadači alebo použite Live Server
```

### Chat projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavte premennú prostredia GITHUB_TOKEN
python api.py
```

## Vývojový pracovný postup

### Pre prispievateľov obsahu

1. **Forknite repozitár** do svojho GitHub účtu
2. **Klonujte fork** lokálne
3. **Vytvorte novú vetvu** pre svoje zmeny
4. Urobte zmeny v obsahu lekcií alebo príkladoch kódu
5. Testujte zmeny v relevantných projektových adresároch
6. Odosielajte pull requesty podľa pravidiel pre príspevky

### Pre študentov

1. Forknite alebo klonujte repozitár
2. Postupujte po lekčných adresároch za sebou
3. Prečítajte si README súbory pre každú lekciu
4. Dokončite predlekcové kvízy na https://ff-quizzes.netlify.app/web/
5. Prejdite príklady kódu v adresároch lekcií
6. Splňte zadania a výzvy
7. Vyplňte pookrajové kvízy

### Živý vývoj

- **Dokumentácia**: Spustite `docsify serve` v koreňovom adresári (port 3000)
- **Quiz App**: Spustite `npm run dev` v adresári quiz-app
- **Projekty**: Použite VS Code Live Server rozšírenie pre HTML projekty
- **API projekty**: Spustite `npm start` v príslušných API adresároch

## Pokyny na testovanie

### Testovanie Quiz App

```bash
cd quiz-app
npm run lint       # Skontrolujte problémy so štýlom kódu
npm run build      # Overte úspešnosť zostavenia
```

### Testovanie Bank API

```bash
cd 7-bank-project/api
npm run lint       # Skontrolujte problémy so štýlom kódu
node server.js     # Overiť, či server štartuje bez chýb
```

### Všeobecný prístup k testovaniu

- Je to vzdelávací repozitár bez komplexných automatizovaných testov
- Manuálne testovanie sa zameriava na:
  - Bežanie príkladov kódu bez chýb
  - Funkčnosť odkazov v dokumentácii
  - Úspešné zostavenie projektov
  - Príklady dodržiavajú osvedčené postupy

### Kontroly pred odoslaním

- Spustite `npm run lint` v adresároch s package.json
- Overte platnosť odkazov v markdown súboroch
- Testujte príklady kódu v prehliadači alebo Node.js
- Skontrolujte, či preklady zachovávajú správnu štruktúru

## Pokyny pre štýl kódu

### JavaScript

- Používajte modernú syntax ES6+
- Dodržiavajte štandardné ESLint konfigurácie v projektoch
- Používajte zmysluplné mená premenných a funkcií pre vzdelávaciu zrozumiteľnosť
- Pridávajte komentáre vysvetľujúce koncepty pre študentov
- Formátujte pomocou Prettier tam, kde je nakonfigurovaný

### HTML/CSS

- Semantické HTML5 elementy
- Zásady responzívneho dizajnu
- Jasné pomenovanie tried
- Komentáre vysvetľujúce CSS techniky pre študentov

### Python

- Štýlové smernice podľa PEP 8
- Jasné, vzdelávacie príklady kódu
- Typové anotácie tam, kde sú užitočné pre učenie

### Markdown dokumentácia

- Jasná hierarchia nadpisov
- Kódové bloky so špecifikáciou jazyka
- Odkazy na ďalšie zdroje
- Snímky obrazovky a obrázky v adresároch `images/`
- Alternatívny text pre obrázky kvôli prístupnosti

### Organizácia súborov

- Lekcie číslované postupne (1-getting-started-lessons, 2-js-basics, atď.)
- Každý projekt má `solution/` a často aj `start/` alebo `your-work/` adresáre
- Obrázky uložené v lekčne špecifických priečinkoch `images/`
- Preklady v štruktúre `translations/{jazykový-kód}/`

## Skladanie a nasadenie

### Nasadenie Quiz App (Azure Static Web Apps)

quiz-app je nakonfigurovaná pre nasadenie pomocou Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytvára priečinok dist/
# Nasadzuje cez workflow GitHub Actions pri pushi do main
```

Konfigurácia Azure Static Web Apps:
- **Umiestnenie aplikácie**: `/quiz-app`
- **Výstupné umiestnenie**: `dist`
- **Pracovný tok**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generovanie PDF dokumentácie

```bash
npm install                    # Nainštalujte docsify-to-pdf
npm run convert               # Vygenerujte PDF z docs
```

### Dokumentácia Docsify

```bash
npm install -g docsify-cli    # Nainštalujte Docsify globálne
docsify serve                 # Spustiť na localhost:3000
```

### Zostavenie špecifické pre projekt

Každý projekt môže mať vlastný build proces:
- Vue projekty: `npm run build` vytvára produkčné balíky
- Statické projekty: žiadny build krok, súbory sa podávajú priamo

## Pokyny pre pull requesty

### Formát názvu

Používajte jasné, popisné názvy uvádzajúce oblasť zmeny:
- `[Quiz-app] Pridaj nový kvíz pre lekciu X`
- `[Lesson-3] Oprav preklep v projekte terrarium`
- `[Translation] Pridaj španielsky preklad pre lekciu 5`
- `[Docs] Aktualizuj inštrukcie na nastavenie`

### Požadované kontroly

Pred odoslaním PR:

1. **Kvalita kódu**:
   - Spustite `npm run lint` v ovplyvnených projektových adresároch
   - Opravte všetky chyby a varovania

2. **Overenie buildovania**:
   - Spustite `npm run build` ak je to potrebné
   - Zabezpečte, že nie sú žiadne chyby pri buildovaní

3. **Overenie odkazov**:
   - Testujte všetky odkazy v markdown
   - Skontrolujte funkčnosť odkazov na obrázky

4. **Kontrola obsahu**:
   - Korektúra pravopisu a gramatiky
   - Overte správnosť a vzdelávaciu hodnotu príkladov kódu
   - Skontrolujte presnosť prekladov

### Požiadavky na príspevky

- Súhlas s Microsoft CLA (automatická kontrola pri prvom PR)
- Dodržiavanie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pozrite si [CONTRIBUTING.md](./CONTRIBUTING.md) pre podrobné pokyny
- V prípade potreby odkazujte čísla issue v popise PR

### Proces revízie

- PR kontrolujú maintaineri a komunita
- Uprednostňuje sa vzdelávacia zrozumiteľnosť
- Príklady kódu by mali dodržiavať aktuálne osvedčené postupy
- Preklady sa kontrolujú na presnosť a kultúrnu vhodnosť

## Prekladový systém

### Automatický preklad

- Používa GitHub Actions s pracovným tokom co-op-translator
- Automatický preklad do 50+ jazykov
- Zdrojové súbory v hlavných adresároch
- Preložené súbory v adresároch `translations/{jazykový-kód}/`

### Pridávanie manuálnych vylepšení prekladov

1. Nájdite súbor v `translations/{jazykový-kód}/`
2. Vykonajte úpravy s zachovaním štruktúry
3. Zabezpečte funkčnosť príkladov kódu
4. Otestujte lokalizovaný kvízový obsah

### Metaúdaje prekladov

Preložené súbory obsahujú metaúdaje:
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

**Quiz app sa nespúšťa**:
- Skontrolujte verziu Node.js (odporúčaná v14+)
- Vymažte `node_modules` a `package-lock.json`, spustite `npm install` znovu
- Skontrolujte konflikty portov (predvolený port pre Vite je 5173)

**API server sa nespúšťa**:
- Overte minimálnu verziu Node.js (node >=10)
- Skontrolujte, či port nie je už obsadený
- Uistite sa, že všetky závislosti sú nainštalované pomocou `npm install`

**Rozšírenie prehliadača sa nenačíta**:
- Overte správne naformátovanie manifest.json
- Skontrolujte chyby v konzole prehliadača
- Dodržiavajte inštrukcie na inštaláciu špecifické pre prehliadač

**Problémy s Python chat projektom**:
- Uistite sa, že je nainštalovaný balík OpenAI: `pip install openai`
- Overte, či je nastavená premenná prostredia GITHUB_TOKEN
- Skontrolujte povolenia prístupu ku GitHub Models

**Docsify neslúži dokumentáciu**:
- Nainštalujte docsify-cli globálne: `npm install -g docsify-cli`
- Spustite z koreňového adresára repozitára
- Skontrolujte, že existuje `docs/_sidebar.md`

### Tipy pre vývojové prostredie

- Používajte VS Code s rozšírením Live Server pre HTML projekty
- Nainštalujte si ESLint a Prettier rozšírenia pre konzistentné formátovanie
- Používajte DevTools prehliadača na ladenie JavaScriptu
- Pre Vue projekty nainštalujte Vue DevTools rozšírenie do prehliadača

### Výkonnostné úvahy

- Veľký počet preložených súborov (50+ jazykov) znamená veľké full klony
- Použite shallow clone, ak pracujete len s obsahom: `git clone --depth 1`
- Pri práci na anglickom obsahu vynechajte preklady z vyhľadávania
- Build procesy môžu byť pri prvom spustení pomalé (npm install, Vite build)

## Bezpečnostné úvahy

### Premenné prostredia

- API kľúče by nikdy nemali byť ukladané do repozitára
- Používajte `.env` súbory (už zahrnuté v `.gitignore`)
- Požadované premenné prostredia zdokumentujte v README projektov

### Python projekty

- Používajte virtuálne prostredia: `python -m venv venv`
- Udržiavajte závislosti aktuálne
- GitHub tokeny by mali mať minimálne potrebné povolenia

### Prístup ku GitHub Models

- Pre prístup ku GitHub Models sú potrebné Personal Access Tokens (PAT)
- Tokeny ukladajte ako premenné prostredia
- Nikdy neukladajte tokeny alebo prihlasovacie údaje do repozitára

## Ďalšie poznámky

### Cieľová skupina

- Úplní začiatočníci vo webovom vývoji
- Študenti a samoukovia
- Učitelia používajúci kurikulum v triedach
- Obsah je navrhnutý pre prístupnosť a postupné budovanie zručností

### Vzdelávacia filozofia

- Prístup učenia založený na projektoch
- Časté overenia vedomostí (kvízy)
- Praktické cvičenia programovania
- Príklady reálnych aplikácií
- Zameranie na základy pred frameworkmi

### Údržba repozitára

- Aktívna komunita študentov a prispievateľov
- Pravidelné aktualizácie závislostí a obsahu
- Údržba prostredníctvom sledovania issue a diskusií
- Aktualizácie prekladov automatizované cez GitHub Actions

### Súvisiace zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Študentské centrum zdrojov](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) odporúčaný pre študentov
- Ďalšie kurzy: Generatívna AI, Data Science, ML, IoT kurikula dostupné

### Práca s konkrétnymi projektmi

Podrobné inštrukcie pre jednotlivé projekty nájdete v README súboroch:
- `quiz-app/README.md` - Vue 3 quiz aplikácia
- `7-bank-project/README.md` - Banková aplikácia s autentifikáciou
- `5-browser-extension/README.md` - Vývoj rozšírenia prehliadača
- `6-space-game/README.md` - Vývoj hry na canvas
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Štruktúra monorepa

Aj keď to nie je tradičné monorepo, tento repozitár obsahuje niekoľko nezávislých projektov:
- Každá lekcia je samostatná
- Projekty nesdielajú závislosti
- Pracujte na jednotlivých projektoch bez vplyvu na ostatné
- Naklonujte celý repozitár pre kompletný zážitok kurikula

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vylúčenie zodpovednosti**:  
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, vezmite prosím na vedomie, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Originálny dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre dôležité informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie, ktoré môžu vzniknúť použitím tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->