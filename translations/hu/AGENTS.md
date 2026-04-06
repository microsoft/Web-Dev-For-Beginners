# AGENTS.md

## Projekt áttekintés

Ez egy oktatási tananyag tárhely, amely kezdők számára tanítja a webfejlesztés alapjait. A tananyag egy átfogó 12 hetes kurzus, amelyet a Microsoft Cloud Advocates fejlesztett ki, és 24 gyakorlati leckét tartalmaz JavaScript, CSS és HTML témakörökben.

### Főbb elemek

- **Oktatási tartalom**: 24 strukturált lecke, projekt alapú modulokba rendezve
- **Gyakorlati projektek**: Terrárium, gépelős játék, böngészőbővítmény, űrjáték, banki alkalmazás, kódszerkesztő és AI chat asszisztens
- **Interaktív kvízek**: 48 kvíz, mindegyikben 3 kérdés (elő- és utóleckés értékelés)
- **Többnyelvű támogatás**: Automatikus fordítás 50+ nyelvre GitHub Actions használatával
- **Technológiák**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektekhez)

### Architektúra

- Oktatási tárhely lecke-alapú szerkezettel
- Minden lecke mappa tartalmaz README fájlt, kód példákat és megoldásokat
- Önálló projektek külön könyvtárakban (quiz-app, különféle lecke projektek)
- Fordítási rendszer GitHub Actions segítségével (co-op-translator)
- Dokumentáció Docsify-n keresztül elérhető és PDF-ként is rendelkezésre áll

## Beállítási parancsok

Ez a tárhely elsősorban oktatási tartalom fogyasztására szolgál. Az egyes projektek használatához:

### Fő tárhely beállítása

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App beállítása (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Fejlesztői szerver indítása
npm run build      # Build előállítása éles környezetre
npm run lint       # ESLint futtatása
```

### Bank projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Indítsa el az API szervert
npm run lint       # Futtassa az ESLint-et
npm run format     # Formázás Prettier-rel
```

### Böngészőbővítmény projektek

```bash
cd 5-browser-extension/solution
npm install
# Kövesse a böngészőspecifikus kiterjesztés betöltési utasításait
```

### Űrjáték projektek

```bash
cd 6-space-game/solution
npm install
# Nyisd meg az index.html fájlt böngészőben vagy használd a Live Server-t
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

1. **Forkold le a tárhelyet** a GitHub fiókodba
2. **Clone-old le lokálisan** a saját forkodat
3. **Hozz létre egy új ágat** a változtatásaidnak
4. Végezze el a változtatásokat a leckék tartalmában vagy kódpéldákban
5. Teszteld a kódváltozásokat a projekt könyvtárakban
6. Küldj be pull request-et a hozzájárulási irányelvek szerint

### Tanulóknak

1. Forkold vagy clone-ld le a tárhelyet
2. Haladj sorban a lecke könyvtárakban
3. Olvasd el az egyes leckék README fájljait
4. Töltsd ki a tanulás előtti kvízeket a https://ff-quizzes.netlify.app/web/ oldalon
5. Haladj a lecke mappák kódpéldáin keresztül
6. Végezd el a feladatokat és kihívásokat
7. Töltsd ki az utóleckés kvízeket

### Élő fejlesztés

- **Dokumentáció**: Futtasd a `docsify serve` parancsot a gyökérben (3000-es port)
- **Quiz App**: Futtasd az `npm run dev` parancsot a quiz-app könyvtárban
- **Projektek**: Használd a VS Code Live Server kiterjesztést HTML projektekhez
- **API projektek**: Futassd az `npm start` parancsot a megfelelő API könyvtárakban

## Tesztelési utasítások

### Quiz App tesztelése

```bash
cd quiz-app
npm run lint       # Ellenőrizze a kódstílus problémákat
npm run build      # Ellenőrizze, hogy a build sikeres-e
```

### Bank API tesztelése

```bash
cd 7-bank-project/api
npm run lint       # Ellenőrizze a kódstílus problémákat
node server.js     # Ellenőrizze, hogy a szerver hibák nélkül indul-e
```

### Általános tesztelési megközelítés

- Ez egy oktatási tárhely, nem tartalmaz teljes körű automatizált teszteket
- Kézi tesztelés fókuszpontjai:
  - A kódpéldák futnak hiba nélkül
  - A dokumentációban lévő linkek működnek
  - A projekt build sikeres
  - A példák követik a legjobb gyakorlatokat

### Beküldés előtti ellenőrzések

- Futtasd az `npm run lint` parancsot a package.json-t tartalmazó könyvtárakban
- Ellenőrizd a markdown linkek érvényességét
- Teszteld a kódpéldákat böngészőben vagy Node.js alatt
- Ellenőrizd, hogy a fordítások megőrzik a megfelelő struktúrát

## Kódstílus útmutató

### JavaScript

- Használd a modern ES6+ szintaxist
- Kövesd a projektekben adott standard ESLint konfigurációkat
- Használj jelentésgazdag változó- és függvényneveket oktatási tisztaság érdekében
- Kommentáld a kódot a tanulók számára
- Formázd a kódot Prettier-rel ahol be van állítva

### HTML/CSS

- Szémantikus HTML5 elemek
- Reszponzív dizájn elvek
- Egyértelmű osztálynevezések
- Kommentáld a CSS technikákat a tanulók számára

### Python

- Kövesd a PEP 8 stílus útmutatót
- Egyértelmű, oktatási kódpéldák
- Használj típusjelöléseket, ha segítséget nyújt a tanulásban

### Markdown dokumentáció

- Tiszta fejléc hierarchia
- Kódblokkok nyelvi megjelöléssel
- Linkek további erőforrásokhoz
- Képernyőképek és képek az `images/` könyvtárakban
- Alternatív szöveg a képekhez az akadálymentesség érdekében

### Fájlok szervezése

- A leckék sorban számozva (1-getting-started-lessons, 2-js-basics stb.)
- Minden projektnek van `solution/` és gyakran `start/` vagy `your-work/` könyvtára
- Képek lecke specifikus `images/` mappákban tárolva
- Fordítások a `translations/{language-code}/` struktúrában

## Build és telepítés

### Quiz App telepítés (Azure Static Web Apps)

A quiz-app konfigurálva van Azure Static Web Apps telepítésre:

```bash
cd quiz-app
npm run build      # Létrehozza a dist/ mappát
# Telepítés GitHub Actions munkafolyamat révén a main ágba történő push esetén
```

Azure Static Web Apps konfiguráció:
- **App helye**: `/quiz-app`
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
docsify serve                 # Szolgáljon a localhost:3000 címen
```

### Projektspecifikus build folyamatok

Minden projekt könyvtárnak saját build folyamata lehet:
- Vue projektek: `npm run build`, amely létrehozza a produkciós csomagokat
- Statikus projektek: nincs build lépés, a fájlokat közvetlenül szolgálják ki

## Pull Request irányelvek

### Cím formátum

Használj tiszta, leíró címeket, amelyek jelzik a változtatás területét:
- `[Quiz-app] Új kvíz hozzáadása az X. leckéhez`
- `[Lesson-3] Hibajavítás a terrárium projektben`
- `[Translation] Spanyol fordítás hozzáadása az 5. leckéhez`
- `[Docs] Beállítási utasítások frissítése`

### Kötelező ellenőrzések

Pull request beküldése előtt:

1. **Kódminőség**:
   - Futtasd az `npm run lint` parancsot az érintett projektek könyvtáraiban
   - Javíts minden lint hibát és figyelmeztetést

2. **Build ellenőrzés**:
   - Futtasd az `npm run build` parancsot ha szükséges
   - Bizonyosodj meg, hogy nincs build hiba

3. **Link validáció**:
   - Teszteld az összes markdown linket
   - Ellenőrizd a kép hivatkozásokat

4. **Tartalom átvizsgálás**:
   - Ellenőrizd a helyesírást és nyelvtant
   - Győződj meg róla, hogy a kódpéldák helyesek és oktatók
   - Ellenőrizd, hogy a fordítások megőrzik az eredeti jelentést

### Hozzájárulási követelmények

- Fogadd el a Microsoft CLA-t (automatikus ellenőrzés az első PR-nál)
- Kövesd a [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) irányelveit
- Részletes irányelvek a [CONTRIBUTING.md](./CONTRIBUTING.md) fájlban
- Hivatkozz issue számokra a PR leírásában, ha alkalmazható

### Áttekintési folyamat

- PR-eket fenntartók és a közösség is átnézi
- Oktatási érthetőség prioritás
- Kódpéldák követik a jelenlegi legjobb gyakorlatokat
- Fordításokat pontosság és kulturális megfelelőség szerint vizsgálják

## Fordítási rendszer

### Automatikus fordítás

- GitHub Actions-t használ co-op-translator munkafolyamattal
- Több mint 50 nyelvre fordít automatikusan
- Forrásfájlok a fő könyvtárakban
- Fordított fájlok a `translations/{language-code}/` könyvtárakban

### Kézi fordítási javítások hozzáadása

1. Keress rá a fájlra a `translations/{language-code}/` könyvtárban
2. Végezd el a javításokat a struktúra megtartásával
3. Bizonyosodj meg róla, hogy a kódpéldák működőképesek maradnak
4. Teszteld a lokalizált kvíz tartalmakat

### Fordítási metaadatok

A fordított fájlok tartalmazzák a metaadat fejlécet:
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

**Nem indul el a quiz app**:
- Ellenőrizd a Node.js verzióját (ajánlott v14+)
- Töröld a `node_modules` és `package-lock.json` fájlokat, majd futtasd újra az `npm install` parancsot
- Ellenőrizd a port ütközéseket (alapértelmezett: Vite a 5173-as portot használja)

**API szerver nem indul**:
- Győződj meg arról, hogy a Node.js verzió >=10
- Nézd meg, hogy a port nincs foglalva
- Ellenőrizd, hogy minden függőség fel van telepítve az `npm install`-lal

**Böngészőbővítmény nem töltődik be**:
- Ellenőrizd a manifest.json helyes formázását
- Nézd meg a böngésző konzolt hibák után
- Kövesd a böngésző specifikus bővítmény telepítési útmutatót

**Python chat projekt problémák**:
- Győződj meg arról, hogy az OpenAI csomag telepítve van: `pip install openai`
- Ellenőrizd a GITHUB_TOKEN környezeti változó meglétét
- Nézd meg a GitHub Modellekhez való hozzáférést

**Docsify nem szolgálja ki a dokumentációt**:
- Telepítsd globálisan a docsify-cli-t: `npm install -g docsify-cli`
- Futtasd a tárhely gyökérkönyvtárából
- Ellenőrizd, hogy a `docs/_sidebar.md` fájl létezik

### Fejlesztési környezet tippek

- Használd a VS Code Live Server kiterjesztését HTML projektekhez
- Telepítsd az ESLint és Prettier kiterjesztéseket a konzisztens formázáshoz
- Használd a böngésző DevTools-t JavaScript hibakereséshez
- Vue projektekhez telepítsd a Vue DevTools böngésző kiterjesztést

### Teljesítmény szempontok

- Nagyszámú fordított fájl (50+ nyelv) miatt a teljes klón nagy méretű
- Használj shallow klónt, ha csak tartalmon dolgozol: `git clone --depth 1`
- A keresésekből zárd ki a fordításokat, ha angol tartalmon dolgozol
- Az első futtatáskor (npm install, Vite build) a build folyamatok lassúak lehetnek

## Biztonsági szempontok

### Környezeti változók

- API kulcsok soha ne kerüljenek a tárhelyre commitálásra
- Használj `.env` fájlokat (már a `.gitignore`-ban szerepelnek)
- Dokumentáld a szükséges környezeti változókat a projekt README-jeiben

### Python projektek

- Használj virtuális környezeteket: `python -m venv venv`
- Tartsd naprakészen a függőségeket
- A GitHub tokeneknek minimális jogosultságokkal kell rendelkezniük

### GitHub Modellekhez való hozzáférés

- Személyes hozzáférési tokenek (PAT) szükségesek a GitHub Modellekhez
- A tokeneket környezeti változóként kell tárolni
- Tokeneket és hitelesítő adatokat soha ne commitálj

## Egyéb megjegyzések

### Célközönség

- Teljesen kezdők a webfejlesztésben
- Diákok és önálló tanulók
- Tanárok, akik az oktatási anyagot osztályteremben használják
- A tartalom akadálymentes és fokozatos készségfejlesztésre tervezett

### Oktatási filozófia

- Projekt alapú tanulás
- Gyakori tudásellenőrzések (kvízek)
- Gyakorlati kódolási feladatok
- Valós alkalmazási példák
- Alapok előtérbe helyezése a keretrendszerek előtt

### Tárhely karbantartás

- Aktív közösség tanulókkal és hozzájárulókkal
- Rendszeres frissítések függőségekben és tartalomban
- Az issue-k és viták fenntartók által monitorozva
- Fordítások automatikusan frissülnek GitHub Actions segítségével

### Kapcsolódó erőforrások

- [Microsoft Learn modulok](https://docs.microsoft.com/learn/)
- [Student Hub források](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ajánlott tanulóknak
- Egyéb kurzusok: Generatív AI, Adattudomány, ML, IoT tananyagok elérhetőek

### Egyedi projektek kezelése

Az egyes projektek részletes útmutatói elérhetőek a README fájlokban:
- `quiz-app/README.md` - Vue 3 kvíz alkalmazás
- `7-bank-project/README.md` - Banki alkalmazás hitelesítéssel
- `5-browser-extension/README.md` - Böngészőbővítmény fejlesztés
- `6-space-game/README.md` - Canvas alapú játék fejlesztés
- `9-chat-project/README.md` - AI chat asszisztens projekt

### Monorepo szerkezet

Habár nem egy hagyományos monorepo, ez a tárhely több önálló projektet tartalmaz:
- Minden lecke önállóan működik
- A projektek nem osztanak meg függőségeket
- Az egyes projekteken önállóan dolgozhatsz befolyás nélkül a többire
- A teljes tananyag élményért klónozd a teljes tárhelyet

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Felelősség kizárása**:  
Ez a dokumentum az AI fordító szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével készült. Bár az pontosságra törekszünk, kérjük, vegye figyelembe, hogy az automatikus fordítás hibákat vagy pontatlanságokat tartalmazhat. Az eredeti dokumentum a saját nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén professzionális emberi fordítást javaslunk. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->