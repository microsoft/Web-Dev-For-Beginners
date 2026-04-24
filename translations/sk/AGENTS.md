# AGENTS.md

## Prehľad projektu

Toto je vzdelávací repozitár kurikula na výučbu základov webového vývoja pre začiatočníkov. Kurikulum je komplexný 12-týždňový kurz vytvorený Microsoft Cloud Advocates, ktorý obsahuje 24 praktických lekcií pokrývajúcich JavaScript, CSS a HTML.

### Kľúčové komponenty

- **Vzdelávací obsah**: 24 štruktúrovaných lekcií usporiadaných do modulov založených na projektoch
- **Praktické projekty**: Terrárium, Typing Game, Rozšírenie prehliadača, Space Game, Banková aplikácia, Editor kódu a AI chat asistent
- **Interaktívne kvízy**: 48 kvízov s 3 otázkami každý (pred a po lekcii)
- **Podpora viacerých jazykov**: Automatické preklady do 50+ jazykov pomocou GitHub Actions
- **Technológie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pre AI projekty)

### Architektúra

- Vzdelávací repozitár so štruktúrou založenou na lekciách
- Každý priečinok lekcie obsahuje README, príklady kódu a riešenia
- Samostatné projekty v oddelených adresároch (quiz-app, rôzne projekty lekcií)
- Prekladový systém využívajúci GitHub Actions (co-op-translator)
- Dokumentácia podávaná cez Docsify a dostupná aj ako PDF

## Príkazy na nastavenie

Tento repozitár je primárne na konzumáciu vzdelávacieho obsahu. Pre prácu s konkrétnymi projektmi:

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

### Projekty rozšírenia prehliadača

```bash
cd 5-browser-extension/solution
npm install
# Postupujte podľa pokynov na načítanie rozšírenia špecifických pre prehliadač
```

### Projekty Space Game

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

## Vývojový pracovný tok

### Pre prispievateľov obsahu

1. **Rozvetvite repozitár** do svojho GitHub účtu
2. **Naklonujte svoj fork** lokálne
3. **Vytvorte novú vetvu** pre svoje zmeny
4. Urobte zmeny v obsahu lekcií alebo príkladoch kódu
5. Otestujte akékoľvek zmeny kódu v príslušných adresároch projektov
6. Podajte pull requesty podľa pokynov na prispievanie

### Pre študentov

1. Rozvetvite alebo naklonujte repozitár
2. Navigujte postupne do adresárov lekcií
3. Prečítajte si README súbory ku každej lekcii
4. Vyplňte predlekčné kvízy na https://ff-quizzes.netlify.app/web/
5. Pracujte s príkladmi kódu v priečinkoch lekcií
6. Dokončite zadania a výzvy
7. Vyplňte poprojektové kvízy

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
npm run build      # Overte, či zostavenie prebehne úspešne
```

### Testovanie Bank API

```bash
cd 7-bank-project/api
npm run lint       # Skontrolujte problémy so štýlom kódu
node server.js     # Overte, či sa server spustí bez chýb
```

### Všeobecný prístup k testovaniu

- Toto je vzdelávací repozitár bez komplexných automatizovaných testov
- Manuálne testovanie sa sústreďuje na:
  - Príklady kódu bežia bez chýb
  - Odkazy v dokumentácii fungujú správne
  - Projekty sa úspešne zostavujú
  - Príklady dodržiavajú osvedčené postupy

### Kontroly pred podaním

- Spustite `npm run lint` v adresároch s package.json
- Overte platnosť markdown odkazov
- Testujte príklady kódu v prehliadači alebo Node.js
- Skontrolujte, či preklady zachovávajú správnu štruktúru

## Pokyny pre štýl kódu

### JavaScript

- Používajte modernú syntax ES6+
- Dodržiavajte štandardné ESLint konfigurácie v projektoch
- Používajte zmysluplné názvy premenných a funkcií pre edukatívnu jasnosť
- Pridávajte komentáre vysvetľujúce koncepty pre študentov
- Formátujte pomocou Prettier tam, kde je nakonfigurovaný

### HTML/CSS

- Semantické HTML5 elementy
- Princípy responzívneho dizajnu
- Jasné pomenovanie tried
- Komentáre vysvetľujúce CSS techniky pre študentov

### Python

- Pokyny štýlu PEP 8
- Jasné, edukatívne príklady kódu
- Typové anotácie tam, kde pomáhajú pri učení

### Markdown dokumentácia

- Jasná hierarchia nadpisov
- Kódové bloky so špecifikáciou jazyka
- Odkazy na dodatočné zdroje
- Snímky obrazovky a obrázky v adresári `images/`
- Alternatívny text pre obrázky pre prístupnosť

### Organizácia súborov

- Lekcie číslované postupne (1-getting-started-lessons, 2-js-basics, atď.)
- Každý projekt má adresáre `solution/` a často `start/` alebo `your-work/`
- Obrázky uložené v adresároch `images/` podľa lekcií
- Preklady v štruktúre `translations/{language-code}/`

## Skladanie a nasadenie

### Nasadenie Quiz App (Azure Static Web Apps)

Quiz-app je nakonfigurovaný pre nasadenie na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Vytvára priečinok dist/
# Nasadzuje cez GitHub Actions workflow pri push na main
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

### Docsify dokumentácia

```bash
npm install -g docsify-cli    # Nainštalujte Docsify globálne
docsify serve                 # Spustiť na localhost:3000
```

### Skladby špecifické pre projekty

Každý adresár projektu môže mať vlastný build proces:
- Vue projekty: `npm run build` vytvára produkčné balíky
- Statické projekty: Žiadny build krok, súbory sa podávajú priamo

## Pokyny k pull requestom

### Formát názvu

Používajte jasné, popisné názvy indikujúce oblasť zmeny:
- `[Quiz-app] Pridanie nového kvízu pre lekciu X`
- `[Lesson-3] Oprava preklepu v projekte terrárium`
- `[Translation] Pridanie španielskeho prekladu pre lekciu 5`
- `[Docs] Aktualizácia inštrukcií na nastavenie`

### Povinné kontroly

Pred podaním PR:

1. **Kvalita kódu**:
   - Spustite `npm run lint` v dotknutých projektových adresároch
   - Opravte všetky chyby a varovania lintovania

2. **Overenie zostavenia**:
   - Ak je to vhodné, spustite `npm run build`
   - Overte, či nie sú chyby zostavenia

3. **Overenie odkazov**:
   - Otestujte všetky markdown odkazy
   - Overte, či referencie na obrázky fungujú

4. **Kontrola obsahu**:
   - Korektúra pravopisu a gramatiky
   - Overte správnosť a vzdelávaciu hodnotu príkladov kódu
   - Skontrolujte presnosť a význam prekladov

### Požiadavky na príspevky

- Súhlas s Microsoft CLA (automatická kontrola pri prvom PR)
- Dodržiavanie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Pozrite [CONTRIBUTING.md](./CONTRIBUTING.md) pre detailné pokyny
- Pri opisoch PR uvádzajte čísla issues, ak sa vzťahujú

### Proces recenzie

- PR sú recenzované správcami a komunitou
- Uprednostňuje sa vzdelávacia jasnosť
- Príklady kódu by mali dodržiavať aktuálne osvedčené postupy
- Preklady sa recenzujú z hľadiska presnosti a kultúrnej vhodnosti

## Prekladový systém

### Automatizovaný preklad

- Používa GitHub Actions s workflow co-op-translator
- Prekladá automaticky do 50+ jazykov
- Zdrojové súbory v hlavných adresároch
- Preložené súbory v adresároch `translations/{language-code}/`

### Pridanie manuálnych vylepšení prekladu

1. Vyhľadajte súbor v `translations/{language-code}/`
2. Urobte vylepšenia so zachovaním štruktúry
3. Zabezpečte funkčnosť príkladov kódu
4. Otestujte lokalizovaný obsah kvízov

### Metaúdaje prekladu

Preložené súbory obsahujú metaúdajový nadpis:
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

## Ladění a riešenie problémov

### Bežné problémy

**Quiz app sa nespustí**:
- Skontrolujte verziu Node.js (odporúčané v14+)
- Odstráňte `node_modules` a `package-lock.json`, potom spustite `npm install` znova
- Skontrolujte konflikty portov (štandardne Vite používa port 5173)

**API server sa nespustí**:
- Overte, či je verzia Node.js minimálne (node >=10)
- Skontrolujte, či port nie je už obsadený
- Uistite sa, že všetky závislosti sú nainštalované cez `npm install`

**Rozšírenie prehliadača sa nenačíta**:
- Overte, že manifest.json je správne naformátovaný
- Skontrolujte chyby v konzole prehliadača
- Postupujte podľa inštrukcií na inštaláciu rozšírení špecifických pre prehliadač

**Problémy s Python chat projektom**:
- Uistite sa, že balík OpenAI je nainštalovaný: `pip install openai`
- Overte nastavenie environmentálnej premennej GITHUB_TOKEN
- Skontrolujte oprávnenia na prístup k GitHub Models

**Docsify neslúži dokumentáciu**:
- Nainštalujte docsify-cli globálne: `npm install -g docsify-cli`
- Spustite z koreňového adresára repozitára
- Overte existenciu `docs/_sidebar.md`

### Tipy pre vývojové prostredie

- Používajte VS Code s Live Server rozšírením pre HTML projekty
- Nainštalujte rozšírenia ESLint a Prettier pre jednotné formátovanie
- Používajte DevTools prehliadača na ladenie JavaScriptu
- Pre Vue projekty, nainštalujte Vue DevTools rozšírenie prehliadača

### Výkonnostné úvahy

- Veľký počet preložených súborov (50+ jazykov) znamená veľké kompletné klony
- Používajte shallow clone, ak pracujete len s obsahom: `git clone --depth 1`
- Pri práci na anglickom obsahu vylúčte preklady z vyhľadávania
- Build procesy môžu byť pomalé pri prvom spustení (npm install, Vite build)

## Bezpečnostné úvahy

### Environmentálne premenné

- API kľúče by nikdy nemali byť commitované do repozitára
- Používajte `.env` súbory (už v `.gitignore`)
- Dokumentujte požadované environmentálne premenné v README projektov

### Python projekty

- Používajte virtuálne prostredia: `python -m venv venv`
- Udržiavajte závislosti aktuálne
- GitHub tokeny by mali mať minimálne potrebné povolenia

### Prístup k GitHub Models

- Osobné prístupové tokeny (PAT) potrebné pre GitHub Models
- Tokeny ukladajte ako environmentálne premenné
- Nikdy necommitujte tokeny alebo prihlasovacie údaje

## Ďalšie poznámky

### Cieľová skupina

- Úplní začiatočníci vo webovom vývoji
- Študenti a samouci
- Učitelia využívajúci kurikulum v triedach
- Obsah je navrhnutý pre prístupnosť a postupné budovanie zručností

### Edukačná filozofia

- Prístup založený na projektoch
- Časté overovanie vedomostí (kvízy)
- Praktické cvičenia v kódovaní
- Príklady reálnych aplikácií
- Zameranie na základy pred frameworkmi

### Údržba repozitára

- Aktívna komunita študentov a prispievateľov
- Pravidelné aktualizácie závislostí a obsahu
- Issues a diskusie monitorované správcom
- Automatizované aktualizácie prekladov cez GitHub Actions

### Súvisiace zdroje

- [Microsoft Learn moduly](https://docs.microsoft.com/learn/)
- [Student Hub zdroje](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) odporúčaný pre študentov
- Ďalšie kurzy: Generative AI, Data Science, ML, IoT kurikula dostupné

### Práca s konkrétnymi projektmi

Pre podrobné inštrukcie o jednotlivých projektoch pozrite README súbory v:
- `quiz-app/README.md` - Vue 3 kvíz aplikácia
- `7-bank-project/README.md` - Banková aplikácia s autentifikáciou
- `5-browser-extension/README.md` - Vývoj rozšírenia prehliadača
- `6-space-game/README.md` - Vývoj hry založenej na Canvas
- `9-chat-project/README.md` - AI chat asistent projekt

### Štruktúra monorepa

Aj keď nejde o tradičné monorepo, tento repozitár obsahuje viacero nezávislých projektov:
- Každá lekcia je samostatná
- Projekty nezdieľajú závislosti
- Pracujte na jednotlivých projektoch bez vplyvu na ostatné
- Klonujte celý repozitár pre kompletný zážitok z kurikula

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vyhlásenie o zodpovednosti**:  
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, vezmite prosím na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Považuje sa, že originálny dokument v jeho pôvodnom jazyku je autoritatívnym zdrojom. Pre kľúčové informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo chybné interpretácie vyplývajúce z použitia tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->