# AGENTS.md

## Projekt Áttekintés

Ez egy oktatási tananyag-repozitórium, amely a webfejlesztés alapjainak tanítására készült kezdők számára. A tananyag egy átfogó, 12 hetes kurzus, amelyet a Microsoft Cloud Advocates fejlesztett ki, és 24 gyakorlati leckét tartalmaz JavaScript, CSS és HTML témakörökben.

### Főbb Elemei

- **Oktatási Tartalom**: 24 strukturált lecke, projektalapú modulokba szervezve
- **Gyakorlati Projektek**: Terrárium, Gépelési Játék, Böngészőbővítmény, Űrjáték, Banki Alkalmazás, Kódszerkesztő és AI Chat Asszisztens
- **Interaktív Kvízek**: 48 kvíz, mindegyik 3 kérdéssel (lecke előtti/utáni értékelések)
- **Többnyelvű Támogatás**: Automatikus fordítások 50+ nyelvre GitHub Actions segítségével
- **Technológiák**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektekhez)

### Architektúra

- Oktatási repozitórium leckealapú struktúrával
- Minden lecke mappa tartalmaz README-t, kódpéldákat és megoldásokat
- Önálló projektek külön könyvtárakban (quiz-app, különböző leckeprojektek)
- Fordítási rendszer GitHub Actions segítségével (co-op-translator)
- Dokumentáció Docsify segítségével elérhető, valamint PDF formátumban

## Telepítési Parancsok

Ez a repozitórium elsősorban oktatási tartalom fogyasztására készült. Az egyes projektek használatához:

### Fő Repozitórium Telepítése

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Kvíz Alkalmazás Telepítése (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Bank Projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Böngészőbővítmény Projektek

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Űrjáték Projektek

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Chat Projekt (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Fejlesztési Munkafolyamat

### Tartalomhozzájárulók Számára

1. **Forkold a repozitóriumot** GitHub fiókodba
2. **Klónozd a forkot** helyben
3. **Hozz létre egy új ágat** a módosításokhoz
4. Végezzen módosításokat a lecke tartalmában vagy kódpéldákban
5. Teszteld a kódváltoztatásokat a releváns projektkönyvtárakban
6. Nyújts be pull requesteket a hozzájárulási irányelvek szerint

### Tanulók Számára

1. Forkold vagy klónozd a repozitóriumot
2. Haladj sorban a lecke könyvtárakban
3. Olvasd el az egyes leckék README fájljait
4. Töltsd ki a lecke előtti kvízeket a https://ff-quizzes.netlify.app/web/ oldalon
5. Dolgozd át a kódpéldákat a lecke mappákban
6. Teljesítsd a feladatokat és kihívásokat
7. Töltsd ki a lecke utáni kvízeket

### Élő Fejlesztés

- **Dokumentáció**: Futtasd a `docsify serve` parancsot a gyökérkönyvtárban (port 3000)
- **Kvíz Alkalmazás**: Futtasd a `npm run dev` parancsot a quiz-app könyvtárban
- **Projektek**: Használd a VS Code Live Server bővítményt HTML projektekhez
- **API Projektek**: Futtasd a `npm start` parancsot a megfelelő API könyvtárakban

## Tesztelési Útmutató

### Kvíz Alkalmazás Tesztelése

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Bank API Tesztelése

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Általános Tesztelési Megközelítés

- Ez egy oktatási repozitórium, amely nem tartalmaz átfogó automatizált teszteket
- Kézi tesztelésre összpontosít:
  - A kódpéldák hibamentesen futnak
  - A dokumentációban található linkek helyesen működnek
  - A projektépítések sikeresen befejeződnek
  - A példák követik a legjobb gyakorlatokat

### Benyújtás Előtti Ellenőrzések

- Futtasd a `npm run lint` parancsot a package.json fájlt tartalmazó könyvtárakban
- Ellenőrizd a markdown linkek érvényességét
- Teszteld a kódpéldákat böngészőben vagy Node.js-ben
- Győződj meg arról, hogy a fordítások megfelelő struktúrát tartanak fenn

## Kódstílus Irányelvek

### JavaScript

- Használj modern ES6+ szintaxist
- Kövesd a projektekben megadott standard ESLint konfigurációkat
- Használj érthető változó- és függvényneveket az oktatási cél érdekében
- Adj hozzá kommenteket, amelyek magyarázzák a fogalmakat a tanulók számára
- Formázd a kódot Prettier segítségével, ahol konfigurálva van

### HTML/CSS

- Szemantikus HTML5 elemek
- Reszponzív tervezési elvek
- Egyértelmű osztályelnevezési konvenciók
- Kommentek, amelyek magyarázzák a CSS technikákat a tanulók számára

### Python

- PEP 8 stílusirányelvek
- Érthető, oktatási célú kódpéldák
- Típusjelölések, ahol hasznosak a tanulás szempontjából

### Markdown Dokumentáció

- Egyértelmű címsor hierarchia
- Kódblokkok nyelvi specifikációval
- Linkek további forrásokhoz
- Képernyőképek és képek az `images/` könyvtárakban
- Alt szöveg a képekhez az akadálymentesség érdekében

### Fájlok Szervezése

- A leckék számozása sorrendben (1-getting-started-lessons, 2-js-basics, stb.)
- Minden projektnek van `solution/` és gyakran `start/` vagy `your-work/` könyvtára
- Képek a lecke-specifikus `images/` mappákban tárolva
- Fordítások a `translations/{language-code}/` struktúrában

## Építés és Telepítés

### Kvíz Alkalmazás Telepítése (Azure Static Web Apps)

A quiz-app az Azure Static Web Apps telepítésére van konfigurálva:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps konfiguráció:
- **App helye**: `/quiz-app`
- **Kimeneti hely**: `dist`
- **Munkafolyamat**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentáció PDF Generálása

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify Dokumentáció

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Projekt-specifikus Építések

Minden projektkönyvtárnak lehet saját építési folyamata:
- Vue projektek: `npm run build` létrehozza a produkciós csomagokat
- Statikus projektek: Nincs építési lépés, közvetlenül szolgáltasd a fájlokat

## Pull Request Irányelvek

### Címformátum

Használj egyértelmű, leíró címeket, amelyek jelzik a változtatás területét:
- `[Quiz-app] Új kvíz hozzáadása az X leckéhez`
- `[Lesson-3] Tippelési hiba javítása a terrárium projektben`
- `[Translation] Spanyol fordítás hozzáadása az 5. leckéhez`
- `[Docs] Telepítési útmutató frissítése`

### Szükséges Ellenőrzések

Pull request benyújtása előtt:

1. **Kódminőség**:
   - Futtasd a `npm run lint` parancsot az érintett projektkönyvtárakban
   - Javítsd ki az összes linting hibát és figyelmeztetést

2. **Építés Ellenőrzése**:
   - Futtasd a `npm run build` parancsot, ha alkalmazható
   - Győződj meg arról, hogy nincs építési hiba

3. **Link Ellenőrzés**:
   - Teszteld az összes markdown linket
   - Ellenőrizd, hogy a képhivatkozások működnek

4. **Tartalom Ellenőrzés**:
   - Ellenőrizd a helyesírást és nyelvtant
   - Győződj meg arról, hogy a kódpéldák helyesek és oktatási célúak
   - Ellenőrizd, hogy a fordítások megőrzik az eredeti jelentést

### Hozzájárulási Követelmények

- Fogadd el a Microsoft CLA-t (automatikus ellenőrzés az első PR-nél)
- Kövesd a [Microsoft Nyílt Forráskódú Magatartási Kódexet](https://opensource.microsoft.com/codeofconduct/)
- Lásd a [CONTRIBUTING.md](./CONTRIBUTING.md) fájlt részletes irányelvekért
- Hivatkozz az issue számokra a PR leírásában, ha alkalmazható

### Felülvizsgálati Folyamat

- A PR-eket a karbantartók és a közösség felülvizsgálja
- Az oktatási érthetőség prioritást élvez
- A kódpéldáknak követniük kell a jelenlegi legjobb gyakorlatokat
- A fordításokat pontosság és kulturális megfelelőség szempontjából vizsgálják

## Fordítási Rendszer

### Automatikus Fordítás

- GitHub Actions és co-op-translator munkafolyamatot használ
- Automatikusan fordít 50+ nyelvre
- Forrásfájlok a fő könyvtárakban
- Fordított fájlok a `translations/{language-code}/` könyvtárakban

### Manuális Fordítási Javítások Hozzáadása

1. Keresd meg a fájlt a `translations/{language-code}/` könyvtárban
2. Végezzen javításokat, miközben megőrzi a struktúrát
3. Győződj meg arról, hogy a kódpéldák továbbra is működnek
4. Teszteld a lokalizált kvíztartalmat

### Fordítási Metaadatok

A fordított fájlok metaadat fejlécet tartalmaznak:
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

## Hibakeresés és Hibaelhárítás

### Gyakori Problémák

**A kvíz alkalmazás nem indul el**:
- Ellenőrizd a Node.js verziót (ajánlott: v14+)
- Töröld a `node_modules` és `package-lock.json` fájlokat, majd futtasd újra az `npm install` parancsot
- Ellenőrizd a portütközéseket (alapértelmezett: Vite 5173-as portot használ)

**Az API szerver nem indul el**:
- Győződj meg arról, hogy a Node.js verzió megfelel a minimum követelményeknek (node >=10)
- Ellenőrizd, hogy a port már használatban van-e
- Győződj meg arról, hogy minden függőség telepítve van az `npm install` parancs segítségével

**A böngészőbővítmény nem töltődik be**:
- Ellenőrizd, hogy a manifest.json megfelelően van-e formázva
- Ellenőrizd a böngésző konzolt hibákért
- Kövesd a böngésző-specifikus bővítmény telepítési útmutatókat

**Python chat projekt problémák**:
- Győződj meg arról, hogy az OpenAI csomag telepítve van: `pip install openai`
- Ellenőrizd, hogy a GITHUB_TOKEN környezeti változó be van állítva
- Ellenőrizd a GitHub Models hozzáférési engedélyeket

**Docsify nem szolgáltatja a dokumentációt**:
- Telepítsd a docsify-cli-t globálisan: `npm install -g docsify-cli`
- Futtasd a repozitórium gyökérkönyvtárából
- Ellenőrizd, hogy létezik-e a `docs/_sidebar.md`

### Fejlesztési Környezet Tippek

- Használj VS Code-ot Live Server bővítménnyel HTML projektekhez
- Telepítsd az ESLint és Prettier bővítményeket a konzisztens formázás érdekében
- Használj böngészőfejlesztő eszközöket JavaScript hibakereséshez
- Vue projektekhez telepítsd a Vue DevTools böngészőbővítményt

### Teljesítmény Szempontok

- Nagy számú fordított fájl (50+ nyelv) miatt a teljes klónok mérete nagy
- Használj sekély klónt, ha csak angol tartalommal dolgozol: `git clone --depth 1`
- Zárd ki a fordításokat a keresésekből, ha angol tartalommal dolgozol
- Az építési folyamatok lassúak lehetnek az első futtatáskor (npm install, Vite build)

## Biztonsági Szempontok

### Környezeti Változók

- API kulcsokat soha ne kötelezz a repozitóriumba
- Használj `.env` fájlokat (már szerepel a `.gitignore`-ban)
- Dokumentáld a szükséges környezeti változókat a projekt README fájlokban

### Python Projektek

- Használj virtuális környezeteket: `python -m venv venv`
- Tartsd naprakészen a függőségeket
- A GitHub tokeneknek minimális szükséges engedélyekkel kell rendelkezniük

### GitHub Models Hozzáférés

- Személyes Hozzáférési Tokenek (PAT) szükségesek a GitHub Models-hez
- A tokeneket környezeti változóként kell tárolni
- Soha ne kötelezz tokeneket vagy hitelesítő adatokat

## További Megjegyzések

### Célközönség

- Teljesen kezdők a webfejlesztésben
- Diákok és önálló tanulók
- Tanárok, akik az osztályteremben használják a tananyagot
- A tartalom akadálymentességre és fokozatos készségfejlesztésre van tervezve

### Oktatási Filozófia

- Projektalapú tanulási megközelítés
- Gyakori tudásellenőrzések (kvízek)
- Gyakorlati kódolási gyakorlatok
- Valós alkalmazási példák
- A keretrendszerek előtt az alapokra helyezett fókusz

### Repozitórium Karbantartás

- Aktív tanulói és hozzájárulói közösség
- Rendszeres frissítések a függőségekben és tartalomban
- A karbantartók figyelemmel kísérik az issue-kat és a vitákat
- Fordítási frissítések automatizálva GitHub Actions segítségével

### Kapcsolódó Források

- [Microsoft Learn modulok](https://docs.microsoft.com/learn/)
- [Student Hub források](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ajánlott tanulók számára
- További kurzusok: Generatív AI, Adattudomány, ML, IoT tananyagok elérhetők

### Egyes Projektek Használata

Az egyes projektek részletes útmutatójáért lásd a README fájlokat:
- `quiz-app/README.md` - Vue 3 kvíz alkalmazás
- `7-bank-project/README.md` - Banki alkalmazás hitelesítéssel
- `5-browser-extension/README.md` - Böngészőbővítmény fejlesztés
- `6-space-game/README.md` - Vászon alapú játékfejlesztés
- `9-chat-project/README.md` - AI chat asszisztens projekt

### Monorepo Struktúra

Bár nem hagyományos monorepo, ez a repozitórium több független projektet tartalmaz:
- Minden lecke önálló
- A projektek nem osztanak meg függőségeket


---

**Felelősségi nyilatkozat**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével került lefordításra. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.