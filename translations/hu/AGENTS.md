# AGENTS.md

## Projekt áttekintése

Ez egy oktatási tananyag tárhelye, amely kezdők számára tanítja a webfejlesztés alapjait. A tananyag egy átfogó, 12 hetes kurzus, amelyet a Microsoft Cloud Advocates fejlesztett ki, 24 gyakorlati leckével, amelyek a JavaScript, CSS és HTML témákat fedik le.

### Fő összetevők

- **Oktatási tartalom**: 24 strukturált lecke, projekt-alapú modulokba szervezve
- **Gyakorlati projektek**: Terrarium, Gépelős játék, Böngészőbővítmény, Űrjáték, Banki alkalmazás, Kód szerkesztő és AI csevegő asszisztens
- **Interaktív kvízek**: 48 kvíz, mindegyik 3 kérdéssel (lecke előtti/utáni értékelések)
- **Többnyelvű támogatás**: Több mint 50 nyelv automatikus fordítása GitHub Actions segítségével
- **Technológiák**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektekhez)

### Architektúra

- Oktatási tárhely, lecke-alapú struktúrával
- Minden lecke mappa README-t, kód példákat és megoldásokat tartalmaz
- Önálló projektek külön könyvtárakban (quiz-app, különböző lecke projektek)
- Fordítási rendszer GitHub Actions segítségével (co-op-translator)
- Dokumentáció Docsify segítségével, PDF formátumban is elérhető

## Beállítási parancsok

Ez a tárhely elsősorban oktatási tartalom fogyasztására szolgál. Konkrét projektekkel való munkához:

### Fő tárhely beállítása

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App beállítás (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Fejlesztői szerver indítása
npm run build      # Build előállítása éles környezethez
npm run lint       # ESLint futtatása
```

### Bank projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Indítsa el az API szervert
npm run lint       # Futtassa az ESLint-et
npm run format     # Formázza a Prettier-rel
```

### Böngészőbővítmény projektek

```bash
cd 5-browser-extension/solution
npm install
# Kövesse a böngészőspecifikus bővítmény betöltési utasításokat
```

### Űrjáték projektek

```bash
cd 6-space-game/solution
npm install
# Nyisd meg az index.html fájlt a böngészőben vagy használd a Live Servert
```

### Csevegő projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Állítsa be a GITHUB_TOKEN környezeti változót
python api.py
```

## Fejlesztési munkafolyamat

### Tartalomszolgáltatók számára

1. **Forkold le a tárhelyet** a saját GitHub fiókodba
2. **Klónozd le a forkodat** helyileg
3. **Hozz létre egy új ágat** a változtatásaidhoz
4. Végezzen módosításokat a lecke tartalmán vagy a kód példákon
5. Teszteld a kódváltoztatásokat a megfelelő projekt könyvtárakban
6. Küldj be pull requesteket a hozzájárulási irányelvek szerint

### Tanulók számára

1. Forkold vagy klónozd le a tárhelyet
2. Kövesd sorban a lecke könyvtárakat
3. Olvasd el a README fájlokat minden leckéhez
4. Oldd meg a lecke előtti kvízeket a https://ff-quizzes.netlify.app/web/ oldalon
5. Dolgozz a lecke könyvtárakban található kód példákon
6. Teljesítsd a feladatokat és kihívásokat
7. Oldd meg a lecke utáni kvízeket

### Élő fejlesztés

- **Dokumentáció**: Futtasd a `docsify serve` parancsot a gyökérkönyvtárban (3000-es port)
- **Quiz App**: Futtasd az `npm run dev` parancsot a quiz-app könyvtárban
- **Projektek**: Használd a VS Code Live Server kiterjesztést HTML projektekhez
- **API projektek**: Fuss az `npm start` a megfelelő API könyvtárakban

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
npm run lint       # Ellenőrizze a kód stílusproblémáit
node server.js     # Ellenőrizze, hogy a szerver hibák nélkül indul-e
```

### Általános tesztelési megközelítés

- Ez egy oktatási tárhely, nem tartalmaz átfogó automatizált teszteket
- Manuális tesztelés fókuszai:
  - A kód példák lefutnak hiba nélkül
  - A dokumentációban szereplő linkek helyesen működnek
  - A projekt build sikeresen lefut
  - A példák megfelelnek a legjobb gyakorlatoknak

### Beküldés előtti ellenőrzések

- Futtasd az `npm run lint` parancsot a package.json fájlt tartalmazó könyvtárakban
- Ellenőrizd, hogy a markdown linkek érvényesek
- Teszteld a kód példákat böngészőben vagy Node.js-ben
- Ellenőrizd, hogy a fordítások megőrzik a megfelelő struktúrát

## Kódstílus irányelvek

### JavaScript

- Használj modern ES6+ szintaxist
- Kövesd a projektekben megadott ESLint beállításokat
- Használj jelentést hordozó változó- és függvényneveket az oktatási tisztaság érdekében
- Írj megjegyzéseket a fogalmak magyarázatához a tanulók számára
- Használj Prettier formázást ahol beállították

### HTML/CSS

- Szemantikus HTML5 elemek használata
- Reszponzív tervezési elvek
- Egyértelmű osztálynév konvenciók
- CSS technikák magyarázata megjegyzések formájában a tanulók számára

### Python

- PEP 8 stílus irányelvek betartása
- Tiszta, oktatási célú kód példák
- Típus annotációk, ahol hasznos a tanuláshoz

### Markdown dokumentáció

- Világos címsor hierarchia
- Nyelv-specifikus kód blokkok
- Linkek további forrásokhoz
- Képernyőképek és képek az `images/` könyvtárakban
- Alternatív szöveg képekhez akadálymentességért

### Fájl szervezés

- A leckék számozva egymás után (1-getting-started-lessons, 2-js-basics, stb.)
- Minden projektnek van `solution/` és gyakran `start/` vagy `your-work/` könyvtára
- Képek leckékre bontva a `images/` mappákban
- Fordítások a `translations/{language-code}/` struktúrában

## Build és telepítés

### Quiz App telepítés (Azure Static Web Apps)

A quiz-app konfigurálva van az Azure Static Web Apps telepítéshez:

```bash
cd quiz-app
npm run build      # Létrehozza a dist/ mappát
# Telepítés GitHub Actions munkafolyamattal a main ágra történő push esetén
```

Azure Static Web Apps konfiguráció:
- **App helye**: `/quiz-app`
- **Kimeneti hely**: `dist`
- **Munkafolyamat**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentáció PDF generálás

```bash
npm install                    # Telepítse a docsify-to-pdf-t
npm run convert               # PDF generálása docsból
```

### Docsify dokumentáció

```bash
npm install -g docsify-cli    # A Docsify telepítése globálisan
docsify serve                 # Futtatás a localhost:3000 címen
```

### Projekt specifikus build folyamatok

Minden projekt könyvtárnak lehet saját build folyamata:
- Vue projektek: `npm run build` létrehozza a produkciós csomagokat
- Statikus projektek: nincs build lépés, a fájlokat közvetlenül szolgálja ki

## Pull request irányelvek

### Cím formátum

Használj egyértelmű, leíró címeket, amelyek a változtatás területét jelzik:
- `[Quiz-app] Új kvíz hozzáadva az X leckéhez`
- `[Lesson-3] Elírás javítása a terrarium projektben`
- `[Translation] Spanyol fordítás hozzáadva az 5. leckéhez`
- `[Docs] Beállítási utasítások frissítése`

### Kötelező ellenőrzések

PR beküldése előtt:

1. **Kódminőség**:
   - Futtasd az `npm run lint` a érintett projekt könyvtárakban
   - Javíts minden lint hibát és figyelmeztetést

2. **Build ellenőrzés**:
   - Futtasd az `npm run build` ahol alkalmazható
   - Biztosítsd, hogy nincs build hiba

3. **Link ellenőrzés**:
   - Teszteld az összes markdown linket
   - Ellenőrizd, hogy a képek hivatkozásai működnek

4. **Tartalom átnézés**:
   - Ellenőrizd helyesírás és nyelvhelyesség szempontjából
   - Biztosítsd, hogy a kód példák helyesek és oktatók
   - Bizonyosodj meg arról, hogy a fordítások megőrzik az eredeti jelentést

### Hozzájárulási követelmények

- Beleegyezés a Microsoft CLA-ba (automatikus ellenőrzés az első PR-nél)
- Kövesd a [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) szabályzatát
- Lásd a [CONTRIBUTING.md](./CONTRIBUTING.md) irányelveit részletesen
- Hibaszámokat tüntess fel a PR leírásában, ha van ilyen

### Áttekintési folyamat

- A PR-eket a karbantartók és a közösség is átnézi
- Oktatási érthetőség prioritást élvez
- A kód példáknak követniük kell a jelenlegi legjobb gyakorlatokat
- A fordítások pontosságát és kulturális megfelelőségét is átnézik

## Fordítási rendszer

### Automatikus fordítás

- GitHub Actions használata co-op-translator munkafolyamattal
- Több mint 50 nyelvre automatikus fordítás
- Forrásfájlok a fő könyvtárakban
- Fordított fájlok a `translations/{language-code}/` könyvtárakban

### Kézi fordítási javítások hozzáadása

1. Keress rá a fájlra a `translations/{language-code}/` könyvtárban
2. Végezz javításokat, miközben megőrzöd a struktúrát
3. Biztosítsd, hogy a kód példák továbbra is működnek
4. Teszteld a lokalizált kvíz tartalmakat

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

## Hibakeresés és problémamegoldás

### Gyakori problémák

**A Quiz app nem indul el**:
- Ellenőrizd a Node.js verziót (javasolt v14+)
- Töröld a `node_modules` és `package-lock.json` fájlokat, majd futtasd újra az `npm install` parancsot
- Ellenőrizd, nincs-e port ütközés (alapértelmezetten a Vite a 5173 portot használja)

**API szerver nem indul el**:
- Ellenőrizd, hogy a Node.js verzió megfelel-e az elvártnak (node >=10)
- Ellenőrizd, nincs-e már elfoglalva a port
- Győződj meg róla, hogy minden függőség telepítve van az `npm install` segítségével

**Böngészőbővítmény nem töltődik be**:
- Ellenőrizd a manifest.json helyes formátumát
- Nézd meg a böngésző konzolt hibákért
- Kövesd a böngésző specifikus bővítmény telepítési útmutatóját

**Python chat projekt problémák**:
- Ellenőrizd, hogy az OpenAI csomag telepítve van: `pip install openai`
- Győződj meg róla, hogy a GITHUB_TOKEN környezeti változó be van állítva
- Ellenőrizd a GitHub Models hozzáférési engedélyeket

**Docsify nem szolgálja ki a dokumentációt**:
- Telepítsd globálisan a docsify-cli-t: `npm install -g docsify-cli`
- Fuss a tárhely gyökérkönyvtárából
- Ellenőrizd, hogy a `docs/_sidebar.md` létezik

### Fejlesztői környezet tippek

- Használd a VS Code Live Server kiterjesztést HTML projektekhez
- Telepítsd az ESLint és Prettier kiterjesztéseket az egységes formázáshoz
- Használd a böngésző fejlesztői eszközeit JavaScript hibakereséshez
- Vue projektekhez telepítsd a Vue DevTools böngésző kiterjesztést

### Teljesítmény szempontok

- A nagyon sok fordított fájl (50+ nyelv) miatt a teljes klón nagy méretű
- Használj sekély klónozást, ha csak a tartalmon dolgozol: `git clone --depth 1`
- Kizárhatod a fordításokat a keresésekből angol tartalom fejlesztésekor
- A build folyamatok lehetnek lassúak az első futtatáskor (npm install, Vite build)

## Biztonsági szempontok

### Környezeti változók

- API kulcsokat soha ne committolj a tárhelyre
- Használj `.env` fájlokat (már benne vannak a `.gitignore`-ban)
- Dokumentáld a szükséges környezeti változókat a projekt README fájljaiban

### Python projektek

- Használj virtuális környezeteket: `python -m venv venv`
- Tartsd naprakészen a függőségeket
- A GitHub tokeneknek minimális jogosultságokat kell adni

### GitHub Models hozzáférés

- Személyes hozzáférési tokenek (PAT) kellenek GitHub Models használathoz
- A tokeneket környezeti változóként tárold
- Soha ne committold a tokeneket vagy hitelesítő adatokat

## További megjegyzések

### Célközönség

- Teljesen kezdő webfejlesztők
- Diákok és önálló tanulók
- Tanárok, akik az oktatási anyagot osztálytermekben használják
- A tartalom akadálymentes és fokozatos képességfejlesztésre tervezett

### Oktatási filozófia

- Projekt-alapú tanulási megközelítés
- Gyakori tudásellenőrzések (kvízek)
- Gyakorlati kódolási feladatok
- Valós életből vett alkalmazási példák
- Az alapokra helyezett hangsúly a keretrendszerek előtt

### Tárhely karbantartás

- Aktív tanulói és hozzájárulói közösség
- Rendszeres frissítések a függőségekhez és tartalomhoz
- Hibák és viták felügyelete karbantartók által
- Fordítási frissítések automatizálva GitHub Actions segítségével

### Kapcsolódó források

- [Microsoft Learn modulok](https://docs.microsoft.com/learn/)
- [Student Hub források](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ajánlott tanulóknak
- További tanfolyamok: Generatív AI, Adattudomány, ML, IoT tananyagok állnak rendelkezésre

### Konkrét projektekkel való munka

Részletes útmutatók az egyes projektekhez a megfelelő README fájlokban találhatók:
- `quiz-app/README.md` – Vue 3 alapú kvíz alkalmazás
- `7-bank-project/README.md` – Banki alkalmazás hitelesítéssel
- `5-browser-extension/README.md` – Böngészőbővítmény fejlesztés
- `6-space-game/README.md` – Canvas alapú játék fejlesztés
- `9-chat-project/README.md` – AI csevegő asszisztens projekt

### Monorepo struktúra

Habár nem egy hagyományos monorepo, ez a tárhely több független projektet tartalmaz:
- Minden lecke önálló
- A projektek nem osztanak meg függőségeket
- Egyedi projekteken dolgozhatsz anélkül, hogy másokat befolyásolnál
- Az egész tárhely klónozásával megkaphatod a teljes tananyagot

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Kizáró nyilatkozat**:
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével készült. Bár igyekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum a saját nyelvén tekintendő hivatalos forrásnak. Kritikus információk esetén szakmai emberi fordítást javaslunk. Nem vállalunk felelősséget az ebből eredő félreértésekért vagy téves értelmezésekért.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->