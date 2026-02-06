# AGENTS.md

## Prehľad projektu

Toto je vzdelávací repozitár kurikula na výučbu základov webového vývoja pre začiatočníkov. Kurikulum je komplexný 12-týždňový kurz vyvinutý Microsoft Cloud Advocates, ktorý obsahuje 24 praktických lekcií pokrývajúcich JavaScript, CSS a HTML.

### Kľúčové súčasti

- **Vzdelávací obsah**: 24 štruktúrovaných lekcií organizovaných do modulov založených na projektoch
- **Praktické projekty**: Terrarium, Hra na písanie, Rozšírenie prehliadača, Hra vo vesmíre, Banková aplikácia, Kódový editor a AI chat asistent
- **Interaktívne kvízy**: 48 kvízov s 3 otázkami v každom (pred a po lekcii)
- **Podpora viacerých jazykov**: Automatické preklady do 50+ jazykov cez GitHub Actions
- **Technológie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pre AI projekty)

### Architektúra

- Vzdelávací repozitár so štruktúrou založenou na lekciách
- Každá zložka lekcie obsahuje README, príklady kódu a riešenia
- Samostatné projekty v oddelených adresároch (quiz-app, rôzne lekčné projekty)
- Prekladový systém používajúci GitHub Actions (co-op-translator)
- Dokumentácia podávaná pomocou Docsify a dostupná ako PDF

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
npm run format     # Naformátovať pomocou Prettier
```

### Projekty pre rozšírenie prehliadača

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podľa pokynov na načítanie rozšírení špecifických pre prehliadač
```

### Projekty vesmírnej hry

```bash
cd 6-space-game/solution
npm install
# Otvorte index.html v prehliadači alebo použite Live Server
```

### Chat projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nastavte environmentálnu premennú GITHUB_TOKEN
python api.py
```

## Vývojový pracovný postup

### Pre prispievateľov obsahu

1. **Vytvorte fork repozitára** do vášho GitHub účtu
2. **Naklonujte svoj fork** lokálne
3. **Vytvorte novú vetvu** pre vaše zmeny
4. Upravujte obsah lekcií alebo príklady kódu
5. Testujte akékoľvek zmeny kódu v príslušných adresároch projektov
6. Podávajte pull requesty podľa pokynov na prispievanie

### Pre študentov

1. Forknite alebo sklonujte repozitár
2. Sekvenčne prechádzajte adresármi lekcií
3. Čítajte README súbory ku každej lekcii
4. Vyplňte predlekčné kvízy na https://ff-quizzes.netlify.app/web/
5. Prechádzajte cez príklady kódu v adresároch lekcií
6. Dokončite úlohy a výzvy
7. Vyplňte popočaskové kvízy

### Živý vývoj

- **Dokumentácia**: Spustite `docsify serve` v koreňovom adresári (port 3000)
- **Quiz App**: Spustite `npm run dev` v adresári quiz-app
- **Projekty**: Použite VS Code Live Server rozšírenie pre HTML projekty
- **API projekty**: Spustite `npm start` v príslušných API adresároch

## Inštrukcie na testovanie

### Testovanie Quiz App

```bash
cd quiz-app
npm run lint       # Skontrolujte problémy so štýlom kódu
npm run build      # Overte, či zostavenie prebehne úspešne
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
  - Správne fungovanie odkazov v dokumentácii
  - Úspešné zostavenie projektov
  - Príklady dodržiavajú najlepšie postupy

### Kontroly pred odoslaním

- Spustite `npm run lint` v adresároch s package.json
- Overte, či sú markdown odkazy platné
- Testujte príklady kódu v prehliadači alebo Node.js
- Skontrolujte, či preklady zachovávajú správnu štruktúru

## Pokyny pre štýl kódu

### JavaScript

- Používajte modernú ES6+ syntax
- Dodržiavajte štandardné ESLint konfigurácie poskytnuté v projektoch
- Používajte zmysluplné názvy premenných a funkcií pre lepšie vzdelávanie
- Pridávajte komentáre vysvetľujúce koncepty pre študentov
- Formátujte pomocou Prettier tam, kde je nastavený

### HTML/CSS

- Sémantické HTML5 elementy
- Zásady responzívneho dizajnu
- Jasné pomenovanie tried
- Komentáre vysvetľujúce CSS techniky pre študentov

### Python

- Dodržiavajte štýlové smernice PEP 8
- Jasné, vzdelávacie príklady kódu
- Používajte typové hinty tam, kde sú užitočné pre učenie

### Markdown dokumentácia

- Jasná hierarchia nadpisov
- Kódové bloky s určením jazyka
- Odkazy na ďalšie zdroje
- Snímky obrazovky a obrázky v adresároch `images/`
- Alternatívny text pre obrázky pre prístupnosť

### Organizácia súborov

- Lekcie číslované po poradí (1-getting-started-lessons, 2-js-basics, atď.)
- Každý projekt má `solution/` a často `start/` alebo `your-work/` adresáre
- Obrázky uložené v lekciami špecifických `images/` priečinkoch
- Preklady v štruktúre `translations/{language-code}/`

## Sestavenie a nasadenie

### Nasadenie Quiz App (Azure Static Web Apps)

Quiz-app je nakonfigurovaný pre nasadenie na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytvára priečinok dist/
# Nasadzuje cez workflow GitHub Actions pri pushnutí do main
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
npm install -g docsify-cli    # Nainštalujte Docsify globálne
docsify serve                 # Spustite na localhost:3000
```

### Špecifické zostavenia projektov

Každý projektový adresár môže mať vlastný build proces:
- Vue projekty: `npm run build` vytvára produkčné balíky
- Statické projekty: Žiadny build krok, súbory sa servujú priamo

## Pokyny pre pull requesty

### Formát názvu

Používajte jasné, popisné názvy indikujúce oblasť zmeny:
- `[Quiz-app] Pridanie nového kvízu pre lekciu X`
- `[Lesson-3] Oprava preklepu v projekte terrárium`
- `[Translation] Pridanie španielskeho prekladu pre lekciu 5`
- `[Docs] Aktualizácia inštrukcií na nastavenie`

### Povinné kontroly

Pred odoslaním PR:

1. **Kvalita kódu**:
   - Spustite `npm run lint` v dotknutých projektových adresároch
   - Opravte všetky chyby a varovania lintu

2. **Overenie zostavenia**:
   - Spustite `npm run build`, ak je to potrebné
   - Uistite sa, že nevznikli žiadne chyby zostavenia

3. **Overenie odkazov**:
   - Otestujte všetky markdown odkazy
   - Overte, či obrázkové odkazy fungujú

4. **Kontrola obsahu**:
   - Skontrolujte pravopis a gramatiku
   - Uistite sa, že príklady kódu sú správne a vzdelávacie
   - Overte, či preklady zachovávajú pôvodný význam

### Požiadavky na prispievanie

- Súhlas s Microsoft CLA (automatická kontrola pri prvom PR)
- Dodržiavanie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pozrite [CONTRIBUTING.md](./CONTRIBUTING.md) pre podrobné pokyny
- V prípade potreby uvádzajte čísla issue v popise PR

### Proces revízie

- PR prezerajú správci a komunita
- Preferuje sa jasnosť pre vzdelávanie
- Príklady kódu by mali nasledovať aktuálne najlepšie postupy
- Preklady sú kontrolované na presnosť a kultúrnu vhodnosť

## Prekladový systém

### Automatický preklad

- Používa GitHub Actions s workflow co-op-translator
- Automaticky prekladá do 50+ jazykov
- Zdrojové súbory v hlavných adresároch
- Preložené súbory v `translations/{language-code}/` adresároch

### Pridávanie manuálnych zlepšení prekladu

1. Nájdite súbor v `translations/{language-code}/`
2. Vykonajte úpravy pri zachovaní štruktúry
3. Uistite sa, že príklady kódu zostávajú funkčné
4. Otestujte lokalizovaný obsah kvízu

### Metaúdaje o preklade

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

**Quiz app sa nespustí**:
- Skontrolujte verziu Node.js (odporúčané v14+)
- Vymažte `node_modules` a `package-lock.json`, spustite `npm install` znova
- Skontrolujte konflikty portov (predvolene: Vite používa port 5173)

**API server sa nespustí**:
- Overte, či verzia Node.js spĺňa minimum (node >=10)
- Skontrolujte, či port už nie je obsadený
- Uistite sa, že sú všetky závislosti nainštalované pomocou `npm install`

**Rozšírenie prehliadača sa nenačíta**:
- Skontrolujte, či je manifest.json správne naformátovaný
- Pozrite do konzoly prehliadača pre chyby
- Postupujte podľa špecifických inštrukcií na inštaláciu rozšírení pre daný prehliadač

**Problémy s Python chat projektom**:
- Uistite sa, že je nainštalovaný balík OpenAI: `pip install openai`
- Overte, či je nastavená environmentálna premenná GITHUB_TOKEN
- Skontrolujte prístupové povolenia pre GitHub Models

**Docsify nedodáva dokumenty**:
- Globálne nainštalujte docsify-cli: `npm install -g docsify-cli`
- Spúšťajte z koreňového adresára repozitára
- Overte, či existuje `docs/_sidebar.md`

### Tipy pre vývojové prostredie

- Používajte VS Code s rozšírením Live Server pre HTML projekty
- Nainštalujte rozšírenia ESLint a Prettier pre jednotné formátovanie
- Používajte DevTools prehliadača na ladenie JavaScriptu
- Pre Vue projekty nainštalujte Vue DevTools rozšírenie prehliadača

### Výkonnostné odporúčania

- Veľký počet preložených súborov (50+ jazykov) spôsobuje, že klony sú veľké
- Používajte shallow clone, ak pracujete iba s obsahom: `git clone --depth 1`
- Pri práci s anglickým obsahom vylúčte preklady zo vyhľadávania
- Build procesy môžu byť pri prvom spustení pomalé (npm install, Vite build)

## Bezpečnostné opatrenia

### Environmentálne premenné

- API kľúče by nikdy nemali byť commitované do repozitára
- Používajte `.env` súbory (už v `.gitignore`)
- Požadované environmentálne premenne dokumentujte v README projektov

### Python projekty

- Používajte virtuálne prostredia: `python -m venv venv`
- Udržiavajte závislosti aktuálne
- GitHub tokeny by mali mať minimálne potrebné povolenia

### Prístup k GitHub Models

- Pre GitHub Models sú potrebné osobné prístupové tokeny (PAT)
- Tokeny ukladajte ako environmentálne premenné
- Nikdy necommitujte tokeny alebo prihlasovacie údaje

## Ďalšie poznámky

### Cieľová skupina

- Úplní začiatočníci vo webovom vývoji
- Študenti a samoukovia
- Učitelia používajúci kurikulum v triedach
- Obsah navrhnutý pre prístupnosť a postupné zlepšovanie zručností

### Vzdelávacia filozofia

- Prístup založený na projektovom učení
- Časté overovanie vedomostí (kvízy)
- Praktické cvičenia s kódovaním
- Príklady reálnych aplikácií
- Zameranie na základy pred frameworkmi

### Údržba repozitára

- Aktívna komunita študentov a prispievateľov
- Pravidelné aktualizácie závislostí a obsahu
- Problémy a diskusie monitorované správcami
- Aktualizácie prekladov automatizované cez GitHub Actions

### Súvisiace zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) odporúčaný pre študentov
- Ďalšie kurzy: Generatívna AI, Data Science, ML, IoT kurikulum dostupné

### Práca s konkrétnymi projektmi

Pre podrobné inštrukcie k jednotlivým projektom nájdete README súbory v:
- `quiz-app/README.md` - Vue 3 quiz aplikácia
- `7-bank-project/README.md` - Banková aplikácia s autentifikáciou
- `5-browser-extension/README.md` - Vývoj rozšírenia prehliadača
- `6-space-game/README.md` - Vývoj hry založenej na Canvas
- `9-chat-project/README.md` - Projekt AI chat asistenta

### Štruktúra monorepo

Hoci nejde o tradičné monorepo, tento repozitár obsahuje viacero nezávislých projektov:
- Každá lekcia je samostatná
- Projekty si nesdielajú závislosti
- Pracujte na jednotlivých projektoch bez ovplyvnenia iných
- Naklonujte celý repozitár pre kompletný zážitok z kurikula

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Upozornenie**:  
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, berte prosím na vedomie, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre dôležité informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->