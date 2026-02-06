# AGENTS.md

## Projekt áttekintése

Ez egy oktatási tananyag-tár, amely kezdőknek szóló webfejlesztési alapok oktatására szolgál. A tananyag egy átfogó, 12 hetes kurzus, amelyet a Microsoft Cloud Advocates fejlesztett ki, és 24 gyakorlati leckét tartalmaz JavaScript, CSS és HTML témakörökben.

### Fő összetevők

- **Oktatási tartalom**: 24 strukturált lecke projektalapú modulokba rendezve
- **Gyakorlati projektek**: Terrárium, gépelős játék, böngészőbővítmény, űr játék, banki alkalmazás, kódszerkesztő, és AI csevegősegéd
- **Interaktív kvízek**: 48 kvíz, mindegyik 3 kérdéssel (leckék előtti/utáni értékelés)
- **Többnyelvű támogatás**: Automatikus fordítás több mint 50 nyelvre GitHub Actions által
- **Technológiák**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektekhez)

### Architektúra

- Oktatási tár leckékre bontott szerkezettel
- Minden lecke mappája tartalmaz README-t, kódpéldákat és megoldásokat
- Önálló projektek külön könyvtárakban (quiz-app, különböző lecke projektek)
- Fordító rendszer GitHub Actions-szel (co-op-translator)
- Dokumentáció Docsify-val szolgáltatva és PDF formátumban elérhető

## Beállítási parancsok

Ez a tár elsősorban oktatási tartalom fogyasztására szolgál. Specifikus projektekkel való munkához:

### Fő tár beállítás

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Kvíz alkalmazás beállítása (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Fejlesztői szerver indítása
npm run build      # Építés éles környezethez
npm run lint       # ESLint futtatása
```

### Bank projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API szerver indítása
npm run lint       # ESLint futtatása
npm run format     # Formázás Prettier-rel
```

### Böngészőbővítmény projektek

```bash
cd 5-browser-extension/solution
npm install
# Kövesse a böngészőspecifikus bővítmény betöltési utasításait
```

### Űr játék projektek

```bash
cd 6-space-game/solution
npm install
# Nyissa meg az index.html fájlt a böngészőben vagy használja a Live Server-t
```

### Csevegőprojekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Állítsa be a GITHUB_TOKEN környezeti változót
python api.py
```

## Fejlesztési munkafolyamat

### Tartalomhozzájárulók számára

1. **Válaszd le a tárat** a saját GitHub fiókodba
2. **Klónozd le a saját forkodat** helyileg
3. **Hozz létre egy új ágat** a változtatásaidnak
4. Végezz módosításokat a lecke tartalmakban vagy kódpéldákban
5. Teszteld a kódbeli változtatásokat a releváns projektkönyvtárakban
6. Küldd be a kérésed a hozzájárulási irányelvek szerint

### Tanulók számára

1. Forkold vagy klónozd le a tárat
2. Sorban haladj a lecke mappákban
3. Olvasd el az egyes leckék README fájljait
4. Teljesítsd a leckék előtti kvízeket az https://ff-quizzes.netlify.app/web/ oldalon
5. Dolgozz a lecke mappák kódpéldáin
6. Készítsd el a feladatokat és kihívásokat
7. Tedd meg a post-lecke kvízeket

### Élő fejlesztés

- **Dokumentáció**: Futtasd a `docsify serve` parancsot a gyökérben (3000-es port)
- **Kvíz alkalmazás**: Futtasd a `npm run dev` parancsot a quiz-app mappában
- **Projektek**: Használd a VS Code Live Server bővítményt HTML projektekhez
- **API projektek**: Futtasd a `npm start` parancsot a megfelelő API könyvtárakban

## Tesztelési útmutató

### Kvíz alkalmazás tesztelése

```bash
cd quiz-app
npm run lint       # Ellenőrizze a kódstílus problémákat
npm run build      # Ellenőrizze, hogy a build sikeres-e
```

### Bank API tesztelése

```bash
cd 7-bank-project/api
npm run lint       # Ellenőrizze a kódstílus problémákat
node server.js     # Ellenőrizze, hogy a szerver hiba nélkül indul-e
```

### Általános tesztelési megközelítés

- Ez egy oktatási tár, nem tartalmaz teljes automatizált teszteket
- Manuális tesztelés fókuszában:
  - Kód példák futtatása hibamentesen
  - Dokumentációban lévő linkek megfelelő működése
  - Projektek sikeres lefordítása
  - Példák a legjobb gyakorlatok betartásával

### Beküldés előtti ellenőrzés

- Futtasd az `npm run lint` parancsot a package.json fájlt tartalmazó mappákban
- Ellenőrizd a markdown linkeket, hogy érvényesek-e
- Teszteld a kód példákat böngészőben vagy Node.js-ben
- Bizonyosodj meg róla, hogy a fordítások megtartják az eredeti struktúrát

## Kódstílus irányelvek

### JavaScript

- Használj modern ES6+ szintaxist
- Kövesd a projektekben definiált alap ESLint beállításokat
- Használj érthető változó- és függvényneveket az oktatási érthetőség érdekében
- Kommentáld a koncepciókat a tanulók számára
- Formázd Prettier-rel, ahol van konfigurálva

### HTML/CSS

- Szemantikus HTML5 elemek
- Reszponzív tervezési elvek
- Egyértelmű osztályelnevezések
- Kommentek a CSS technikák magyarázatához tanulók számára

### Python

- PEP 8 stílus irányelvek
- Tiszta, oktatási kód példák
- Típusjelzések, ahol hasznosak a tanuláshoz

### Markdown dokumentáció

- Áttekinthető címsor hierarchia
- Kódblokkok nyelvi megjelöléssel
- Hivatkozások további erőforrásokra
- Képernyőkép és képek az `images/` mappákban
- Alt szöveg a képekhez az akadálymentességért

### Fájlszervezés

- Leckék számozva egymás után (1-getting-started-lessons, 2-js-basics stb.)
- Minden projektnek vannak `solution/`, és gyakran `start/` vagy `your-work/` mappái
- Képek a lecke specifikus `images/` mappákban tárolva
- Fordítások a `translations/{language-code}/` struktúrában

## Build és telepítés

### Kvíz alkalmazás telepítése (Azure Static Web Apps)

A kvíz-app Azure Static Web Apps telepítéshez konfigurált:

```bash
cd quiz-app
npm run build      # Létrehozza a dist/ mappát
# Telepítés GitHub Actions munkafolyamaton keresztül a main ágra történő push esetén
```

Azure Static Web Apps beállítással:
- **Alkalmazás helye**: `/quiz-app`
- **Kimeneti hely**: `dist`
- **Munkafolyamat**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentáció PDF generálás

```bash
npm install                    # Telepítse a docsify-to-pdf csomagot
npm run convert               # PDF generálása a docs-ból
```

### Docsify dokumentáció

```bash
npm install -g docsify-cli    # Telepítse a Docsify-t globálisan
docsify serve                 # Szolgáltatás futtatása a localhost:3000 címen
```

### Projekt-specifikus build folyamatok

Minden projekt könyvtárában lehet saját build folyamat:
- Vue projektek: `npm run build` gyártási csomagokat hoz létre
- Statikus projektek: nincs build lépés, fájlokat közvetlenül szolgáltatja

## Pull Request irányelvek

### Cím formátum

Használj világos, leíró címeket, amelyek mutatják a változtatás területét:
- `[Quiz-app] Új kvíz hozzáadása az X. leckéhez`
- `[Lesson-3] Elírás javítása terrárium projektben`
- `[Translation] Spanyol fordítás hozzáadása az 5. leckéhez`
- `[Docs] Beállítási utasítások frissítése`

### Kötelező ellenőrzések

PR beküldése előtt:

1. **Kódminőség**:
   - Futtasd az `npm run lint` parancsot az érintett projektkönyvtárakban
   - Javítsd az összes lint hibát és figyelmeztetést

2. **Build ellenőrzés**:
   - Futtasd az `npm run build` parancsot, ha alkalmazható
   - Bizonyosodj meg arról, hogy nincs build hiba

3. **Link validálás**:
   - Teszteld az összes markdown linket
   - Ellenőrizd a képhivatkozások működését

4. **Tartalom átnézés**:
   - Ellenőrizd helyesírást és nyelvtant
   - Győződj meg róla, hogy a kód példák helyesek és oktatók
   - Ellenőrizd a fordítások helyességét és eredeti jelentés megtartását

### Hozzájárulási követelmények

- Fogadd el a Microsoft CLA-t (automatikus ellenőrzés az első PR-nál)
- Kövesd a [Microsoft nyílt forráskódú magatartási kódexét](https://opensource.microsoft.com/codeofconduct/)
- Lásd a [CONTRIBUTING.md](./CONTRIBUTING.md) fájlt részletes útmutatásért
- Hivatkozz az issue számokra a PR leírásában, ha releváns

### Felülvizsgálati folyamat

- PR-eket karbantartók és a közösség nézi át
- Oktatási érthetőség az elsődleges szempont
- Kódpéldák kövessék a jelenlegi legjobb gyakorlatokat
- Fordításokat pontosság és kulturális megfelelőség szerint ellenőrzik

## Fordító rendszer

### Automatikus fordítás

- GitHub Actions használatával co-op-translator munkafolyamat
- Több mint 50 nyelvre automatikus fordítás
- Forrásfájlok a fő könyvtárakban
- Fordított fájlok a `translations/{language-code}/` könyvtárakban

### Manuális fordítási javítások hozzáadása

1. Keresd meg a fájlt a `translations/{language-code}/` könyvtárban
2. Javíts a szövegen a struktúra megtartásával
3. Gondoskodj róla, hogy a kódpéldák működjenek továbbra is
4. Teszteld az esetleges lokalizált kvíz tartalmat

### Fordítási metaadatok

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

## Hibakeresés és hibaelhárítás

### Gyakoribb problémák

**A kvíz alkalmazás nem indul**:
- Ellenőrizd a Node.js verziót (ajánlott v14+)
- Töröld a `node_modules` és `package-lock.json` fájlokat, majd futtasd újra az `npm install`-t
- Ellenőrizd a port ütközést (alapértelmezett: Vite port 5173)

**API szerver nem indul**:
- Ellenőrizd a Node.js minimum verziót (node >=10)
- Nézd meg, hogy a port nincs-e használatban
- Győződj meg róla, hogy minden függőség telepítve van az `npm install` után

**Böngészőbővítmény nem töltődik be**:
- Ellenőrizd, hogy a manifest.json megfelelő formátumú-e
- Nézd át a böngésző konzolját hibákért
- Kövesd a böngésző-specifikus bővítmény telepítési útmutatót

**Python csevegőprojektnél problémák**:
- Ellenőrizd, hogy az OpenAI csomag telepítve van-e: `pip install openai`
- Győződj meg róla, hogy a GITHUB_TOKEN környezeti változó be van állítva
- Nézd meg a GitHub Modellekhez való hozzáférési jogosultságokat

**Docsify nem szolgáltat dokumentációt**:
- Telepítsd globálisan a docsify-cli-t: `npm install -g docsify-cli`
- Futtasd a tár gyökeréből
- Ellenőrizd, hogy a `docs/_sidebar.md` létezik

### Fejlesztői környezeti tippek

- Használd a VS Code Live Server bővítményét HTML projektekhez
- Telepíts ESLint és Prettier bővítményeket az egységes formázáshoz
- Használd a böngésző DevTools-t JavaScript hibakereséshez
- Vue projektekhez telepítsd a Vue DevTools böngészőbővítményt

### Teljesítmény szempontok

- Nagyszámú fordított fájl (50+ nyelv) miatt a teljes klónozás nagy méretű
- Használj sekély klónozást, ha csak a tartalmon dolgozol: `git clone --depth 1`
- Fordításokat ne keresd át angol tartalom szerkesztésekor
- Build folyamatok lassúak lehetnek első futtatáskor (npm install, Vite build)

## Biztonsági szempontok

### Környezeti változók

- API kulcsokat soha ne kövess a tárba
- Használj `.env` fájlokat (már a `.gitignore`-ban vannak)
- Dokumentáld a szükséges környezeti változókat a projekt README-jeiben

### Python projektek

- Használj virtuális környezetet: `python -m venv venv`
- Tartsd naprakészen a függőségeket
- GitHub tokeneknek csak minimálisan szükséges jogosultságokat adj

### GitHub Modellekhez való hozzáférés

- Személyes hozzáférési tokenek (PAT) szükségesek a GitHub Modellekhez
- A tokeneket környezeti változóként tárold
- Soha ne kövesd be a tokeneket vagy hitelesítő adatokat

## Egyéb megjegyzések

### Célközönség

- Teljes kezdők a webfejlesztésben
- Tanulók és önálló tanulók
- Tanárok, akik osztálytermekben használják a tananyagot
- A tartalom akadálymentességhez és fokozatos készségepítéshez készült

### Oktatási filozófia

- Projektalapú tanulási megközelítés
- Gyakori tudásellenőrzések (kvízek)
- Gyakorlati kódolási feladatok
- Valós alkalmazási példák
- Az alapokra fókuszálás a keretrendszerek előtt

### Tár karbantartás

- Aktív tanulói és hozzájárulói közösség
- Rendszeres frissítések függőségekben és tartalomban
- Issue-k és beszélgetések figyelemmel kísérése karbantartók által
- Fordítás frissítések automatizálva GitHub Actions által

### Kapcsolódó források

- [Microsoft Learn modulok](https://docs.microsoft.com/learn/)
- [Student Hub erőforrások](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ajánlott tanulóknak
- Egyéb kurzusok: Generative AI, Data Science, ML, IoT tananyagok elérhetők

### Specifikus projektekkel való munka

Részletes útmutató egyes projektekhez a README fájlokban:
- `quiz-app/README.md` - Vue 3 alapú kvíz alkalmazás
- `7-bank-project/README.md` - Banki alkalmazás autentikációval
- `5-browser-extension/README.md` - Böngészőbővítmény fejlesztés
- `6-space-game/README.md` - Vászon alapú játék fejlesztés
- `9-chat-project/README.md` - AI csevegősegéd projekt

### Monorepo szerkezet

Bár nem hagyományos monorepóról van szó, ez a tár több önálló projektet tartalmaz:
- Minden lecke önálló
- A projektek nem osztanak meg függőségeket
- Egyéni projekteken dolgozz anélkül, hogy a többire hatnál
- Klónozd az egész tárat a teljes tanulási élményért

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Jogi nyilatkozat**:
Ezt a dokumentumot az AI fordítószolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) használatával fordítottuk le. Bár a pontosságra törekszünk, kérjük, vegye figyelembe, hogy az automatikus fordítások tartalmazhatnak hibákat vagy pontatlanságokat. Az eredeti dokumentum a saját nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén szakmai emberi fordítást javaslunk. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy félreértelmezésekért.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->