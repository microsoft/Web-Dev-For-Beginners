# AGENTS.md

## Projekt áttekintése

Ez egy oktatási tanterv adattára, amely kezdőknek tanítja a webfejlesztés alapjait. A tanterv egy átfogó, 12 hetes kurzus, amelyet a Microsoft Cloud Advocates fejlesztett ki, 24 gyakorlati leckével, amelyek lefedik a JavaScript, CSS és HTML témaköröket.

### Főbb összetevők

- **Oktatási tartalom**: 24 strukturált lecke projekt alapú modulokba rendezve
- **Gyakorlati projektek**: Terrárium, gépelős játék, böngészőbővítmény, űrjáték, banki alkalmazás, kódszerkesztő és AI chat asszisztens
- **Interaktív kvízek**: 48 kvíz 3 kérdéssel mindegyikben (óra előtti/utáni felmérések)
- **Többnyelvű támogatás**: automatikus fordítások több mint 50 nyelvre GitHub Actions segítségével
- **Technológiák**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektekhez)

### Architektúra

- Oktatási adattár lecke-alapú szerkezettel
- Minden lecke könyvtára tartalmaz README-t, kódpéldákat és megoldásokat
- Önálló projektek külön könyvtárakban (quiz-app, egyes lecke projektek)
- Fordítási rendszer GitHub Actions használatával (co-op-translator)
- Dokumentáció Docsify-val szolgáltatva, PDF-ként is elérhető

## Telepítési parancsok

Ez az adattár elsősorban oktatási tartalom fogyasztására szolgál. Egyes projektekhez való munkához:

### Fő adattár beállítása

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App beállítása (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Fejlesztői szerver indítása
npm run build      # Build létrehozása éles környezethez
npm run lint       # ESLint futtatása
```

### Bank projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Indítsd el az API szervert
npm run lint       # Futtasd az ESLintet
npm run format     # Formázd Prettier-rel
```

### Böngészőbővítmény projektek

```bash
cd 5-browser-extension/solution
npm install
# Kövesd a böngészőspecifikus bővítmény betöltési utasításait
```

### Űrjáték projektek

```bash
cd 6-space-game/solution
npm install
# Nyisd meg az index.html fájlt a böngészőben, vagy használd a Live Server-t
```

### Chat projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Állítsa be a GITHUB_TOKEN környezeti változót
python api.py
```

## Fejlesztési munkafolyamat

### Tartalomközreműködőknek

1. **Forkold az adattárat** a GitHub fiókodba
2. **Klónozd a forkot** helyileg
3. **Hozz létre egy új ágat** a változtatásaidhoz
4. Módosítsd a lecke tartalmát vagy kód példákat
5. Teszteld a kódváltoztatásokat a releváns projekt könyvtárakban
6. Küldd be a pull requesteket a hozzájárulási irányelvek szerint

### Tanulóknak

1. Forkold vagy klónozd az adattárat
2. Haladj sorban a lecke könyvtárakba
3. Olvasd el a README fájlokat minden leckéhez
4. Töltsd ki az előtti kvízeket a https://ff-quizzes.netlify.app/web/ oldalon
5. Dolgozz át a lecke könyvtárak kód példáin
6. Végezd el a feladatokat és kihívásokat
7. Töltsd ki a tanóra utáni kvízeket

### Élő fejlesztés

- **Dokumentáció**: Futtasd a `docsify serve` parancsot a gyökérkönyvtárban (port 3000)
- **Quiz App**: Futtasd az `npm run dev` parancsot a quiz-app könyvtárban
- **Projektek**: Használd a VS Code Live Server bővítményt HTML projektekhez
- **API projektek**: Futtasd az `npm start` parancsot a megfelelő API könyvtárakban

## Tesztelési utasítások

### Quiz App tesztelés

```bash
cd quiz-app
npm run lint       # Ellenőrizze a kód stílusának problémáit
npm run build      # Ellenőrizze, hogy a build sikeres-e
```

### Bank API tesztelés

```bash
cd 7-bank-project/api
npm run lint       # Ellenőrizze a kódstílus problémákat
node server.js     # Ellenőrizze, hogy a szerver hiba nélkül indul-e
```

### Általános tesztelési megközelítés

- Ez egy oktatási adattár, nem tartalmaz átfogó automatizált teszteket
- Kézi tesztelés fókuszpontjai:
  - Kód példák hibamentes futtatása
  - Dokumentációban lévő linkek helyes működése
  - Projektek sikeres buildelése
  - Példák követik a bevált gyakorlatokat

### Beküldés előtti ellenőrzések

- Futtasd az `npm run lint` parancsot a package.json fájlt tartalmazó könyvtárakban
- Ellenőrizd a markdown linkek érvényességét
- Teszteld a kód példákat böngészőben vagy Node.js-ben
- Ellenőrizd, hogy a fordítások megőrzik a megfelelő szerkezetet

## Kódstílus irányelvek

### JavaScript

- Használj modern ES6+ szintaxist
- Kövesd a projektben található standard ESLint konfigurációkat
- Használj érthető változó- és függvényneveket az oktatási átláthatóság érdekében
- Adj kommenteket a fogalmak magyarázatára a tanulók számára
- Használj Prettier-t, ahol konfigurálva van

### HTML/CSS

- Szemantikus HTML5 elemek használata
- Reszponzív tervezési alapelvek alkalmazása
- Egyértelmű osztálynév konvenciók
- Kommentek a CSS technikák magyarázatára tanulóknak

### Python

- PEP 8 stílusirányelvek követése
- Világos, oktatási célú kód példák
- Típusannotációk, ahol hasznos a tanulásban

### Markdown dokumentáció

- Tiszta fejezet hierarchia
- Kódblokkok nyelvi megjelöléssel
- Hivatkozások további forrásokra
- Képernyőfotók és képek az `images/` könyvtárakban
- Képekhez alt szöveg az akadálymentesség érdekében

### Fájl szervezés

- A leckék számozása folytonos (1-getting-started-lessons, 2-js-basics stb.)
- Minden projektnek van `solution/` és gyakran `start/` vagy `your-work/` könyvtára
- Képek a leckékhez tartozó `images/` mappákban tárolva
- Fordítások a `translations/{nyelvkód}/` struktúrában

## Build és telepítés

### Quiz App telepítés (Azure Static Web Apps)

A quiz-app konfigurálva van Azure Static Web Apps telepítéshez:

```bash
cd quiz-app
npm run build      # Létrehozza a dist/ mappát
# GitHub Actions munkafolyamat segítségével telepít a main ágra történő push esetén
```

Azure Static Web Apps konfiguráció:
- **App elérési út**: `/quiz-app`
- **Kimeneti könyvtár**: `dist`
- **Munkafolyamat**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentáció PDF generálás

```bash
npm install                    # Telepítse a docsify-to-pdf-t
npm run convert               # PDF generálása a docs-ból
```

### Docsify dokumentáció

```bash
npm install -g docsify-cli    # Telepítse a Docsify-t globálisan
docsify serve                 # Szolgáltatás localhost:3000 címen
```

### Projekt-specifikus build

Minden projekt könyvtárnak lehet saját build folyamata:
- Vue projektek: `npm run build` létrehozza a produkciós csomagokat
- Statikus projektek: nincs build lépés, a fájlokat közvetlenül szolgálja ki

## Pull request irányelvek

### Cím formátum

Használj egyértelmű, leíró címeket, amelyek jelzik a változtatás területét:
- `[Quiz-app] Új kvíz hozzáadása a X. leckéhez`
- `[Lesson-3] Elírás javítása a terrárium projektnél`
- `[Translation] Spanyol fordítás hozzáadása az 5. leckéhez`
- `[Docs] Telepítési utasítások frissítése`

### Szükséges ellenőrzések

PR beküldése előtt:

1. **Kódminőség**:
   - Futtasd az `npm run lint` parancsot az érintett projekt könyvtárakban
   - Javítsd az összes lint hibát és figyelmeztetést

2. **Build ellenőrzés**:
   - Futtasd az `npm run build` parancsot, ha van
   - Győződj meg róla, hogy nincs build hiba

3. **Linkek ellenőrzése**:
   - Teszteld az összes markdown linket
   - Ellenőrizd a képek működését

4. **Tartalom ellenőrzése**:
   - Ellenőrizd helyesírást és nyelvtant
   - Győződj meg róla, hogy a kód példák helyesek és oktató jellegűek
   - Ellenőrizd, hogy a fordítások megőrzik az eredeti jelentést

### Hozzájárulási feltételek

- Fogadd el a Microsoft CLA-t (automatikus ellenőrzés az első PR-nél)
- Kövesd a [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) szabályzatot
- Lásd a [CONTRIBUTING.md](./CONTRIBUTING.md) fájlt részletes útmutatásért
- Hivatkozz hibaszámokra a PR leírásban, ha releváns

### Felülvizsgálati folyamat

- A PR-eket karbantartók és a közösség felülvizsgálja
- Előnyben részesül az oktatási tisztaság
- A kód példák kövessék a legjobb gyakorlatokat
- A fordításokat pontosság és kulturális megfelelőség alapján értékelik

## Fordítási rendszer

### Automatikus fordítás

- GitHub Actions használata a co-op-translator munkafolyamattal
- Több mint 50 nyelvre fordít automatikusan
- Forrásfájlok a főkönyvtárban
- Fordított fájlok a `translations/{nyelvkód}/` könyvtárakban

### Manuális fordítási fejlesztések hozzáadása

1. Keresd meg a fájlt a `translations/{nyelvkód}/` könyvtárban
2. Végezz javításokat úgy, hogy megőrzöd a szerkezetet
3. Biztosítsd, hogy a kódpéldák működőképesek maradjanak
4. Teszteld a lokalizált kvíz tartalmat

### Fordítási metaadatok

A fordított fájlok tartalmaznak egy metaadat fejlécet:
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

## Hibakeresés és problémamegoldás

### Gyakori problémák

**A quiz app nem indul el**:
- Ellenőrizd a Node.js verziót (ajánlott v14+)
- Töröld a `node_modules` és `package-lock.json` fájlokat, majd futtasd az `npm install`-t újra
- Ellenőrizd a portütközéseket (alapértelmezett: Vite a 5173-as portot használja)

**Az API szerver nem indul**:
- Győződj meg, hogy a Node.js verzió eléri a minimumot (node >=10)
- Ellenőrizd, hogy a port nem foglalt
- Biztosítsd, hogy minden függőség telepítve van az `npm install`-lal

**A böngészőbővítmény nem töltődik be**:
- Ellenőrizd, hogy a manifest.json helyesen van formázva
- Nézd meg a böngésző konzolját hibák után
- Kövesd a böngésző specifikus bővítmény telepítési utasításokat

**Python chat projekt problémái**:
- Győződj meg, hogy az OpenAI csomag telepítve van: `pip install openai`
- Ellenőrizd, hogy be van állítva a GITHUB_TOKEN környezeti változó
- Nézd meg a GitHub Models hozzáférési engedélyeket

**Docsify nem szolgáltat dokumentációt**:
- Telepítsd a docsify-cli-t globálisan: `npm install -g docsify-cli`
- Futtasd az adattár gyökérkönyvtárából
- Ellenőrizd, hogy létezik a `docs/_sidebar.md`

### Fejlesztői környezeti tippek

- Használd a VS Code Live Server bővítményt HTML projektekhez
- Telepítsd az ESLint és Prettier bővítményeket a konzisztens formázáshoz
- Használd a böngésző fejlesztői eszközeit JavaScript hibakereséshez
- Vue projektekhez telepítsd a Vue DevTools böngésző bővítményt

### Teljesítmény szempontok

- A sok fordított fájl (50+ nyelv) miatt a teljes klón nagy
- Használj sekély klónt, ha csak tartalommal dolgozol: `git clone --depth 1`
- Bontsd ki a fordításokat a keresésekből, ha angol tartalommal dolgozol
- A build folyamatok lassúak lehetnek az első futtatáskor (npm install, Vite build)

## Biztonsági szempontok

### Környezeti változók

- API kulcsokat soha ne tölts be az adattárba
- Használj `.env` fájlokat (már szerepelnek a `.gitignore`-ban)
- Dokumentáld a szükséges környezeti változókat a projekt README-jeiben

### Python projektek

- Használj virtuális környezeteket: `python -m venv venv`
- Tartsd naprakészen a függőségeket
- A GitHub tokeneknek minimális szükséges jogosultságokkal kell rendelkezniük

### GitHub Models hozzáférés

- Személyes hozzáférési tokenek (PAT) szükségesek a GitHub Models-hez
- A tokeneket környezeti változóként tárold
- Soha ne töltsd fel a tokeneket vagy hitelesítő adatokat az adattárba

## Egyéb megjegyzések

### Célközönség

- Teljes webfejlesztő kezdők
- Diákok és önálló tanulók
- Tanárok, akik az órán használják a tananyagot
- A tartalom akadálymentes és fokozatos képességfejlesztésre tervezett

### Oktatási filozófia

- Projekt alapú tanulási megközelítés
- Gyakori tudásellenőrzések (kvízek)
- Gyakorlati kódolási feladatok
- Valós alkalmazási példák
- Az alapokra helyezi a hangsúlyt a keretrendszerek előtt

### Adattár karbantartás

- Aktív közösség tanulókból és hozzájárulókból
- Rendszeres frissítések a függőségekben és tartalmakban
- Hibák és beszélgetések karbantartók által felügyelve
- Fordítási frissítések automatizáltak GitHub Actions segítségével

### Kapcsolódó források

- [Microsoft Learn modulok](https://docs.microsoft.com/learn/)
- [Student Hub erőforrások](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ajánlott tanulóknak
- További kurzusok: Generatív AI, Adattudomány, ML, IoT tananyagok elérhetők

### Egyes projektek kezelése

Az egyes projektek részletes utasításai a README fájlokban találhatók:
- `quiz-app/README.md` - Vue 3 kvíz alkalmazás
- `7-bank-project/README.md` - Banki alkalmazás hitelesítéssel
- `5-browser-extension/README.md` - Böngészőbővítmény fejlesztés
- `6-space-game/README.md` - Canvas alapú játékfejlesztés
- `9-chat-project/README.md` - AI chat asszisztens projekt

### Monorepo szerkezet

Bár nem hagyományos monorepo, ez az adattár több független projektet tartalmaz:
- Minden lecke önállóan működik
- A projektek nem osztanak meg függőségeket
- Egyes projektek fejlesztése nem befolyásolja a többit
- A teljes tananyag élményhez klónozd az egész adattárat

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Jogi nyilatkozat**:
Ezt a dokumentumot az AI fordító szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével fordítottuk le. Bár a pontosságra törekszünk, kérjük, vegye figyelembe, hogy az automatikus fordítások tartalmazhatnak hibákat vagy pontatlanságokat. Az eredeti dokumentum a saját nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén szakmai emberi fordítást javaslunk. Nem vállalunk felelősséget az ebből eredő félreértésekért vagy téves értelmezésekért.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->