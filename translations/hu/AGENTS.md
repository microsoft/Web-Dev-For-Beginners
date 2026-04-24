# AGENTS.md

## Projekt áttekintése

Ez egy oktatási tanterv tárház, amely kezdők számára tanítja meg a webfejlesztés alapjait. A tanterv egy átfogó 12 hetes kurzus, amelyet a Microsoft Cloud Advocates fejlesztett ki, 24 gyakorlati leckével, amelyek JavaScriptet, CSS-t és HTML-t fednek le.

### Fő összetevők

- **Oktatási tartalom**: 24 strukturált lecke, projekt-alapú modulokba szervezve
- **Gyakorlati projektek**: Terrárium, Gépelős játék, Böngészőbővítmény, Űrjáték, Banki alkalmazás, Kód szerkesztő és AI csevegőasszisztens
- **Interaktív kvízek**: 48 kvíz, mindegyik 3 kérdéssel (elő- és utóleckés értékelések)
- **Többnyelvű támogatás**: Automatikus fordítások 50+ nyelvre GitHub Actions segítségével
- **Technológiák**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektekhez)

### Architektúra

- Oktatási tárház, leckénkénti struktúrával
- Minden lecke mappája tartalmaz README-t, kód példákat és megoldásokat
- Önálló projektek külön könyvtárakban (quiz-app, különböző lecke projektek)
- Fordítási rendszer GitHub Actions segítségével (co-op-translator)
- Dokumentáció Docsify-val szolgáltatva, PDF formátumban is elérhető

## Beállítási parancsok

Ez a tárház elsősorban oktatási tartalom fogyasztására szolgál. Egyedi projektekhez:

### Fő tárház beállítása

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Kvíz alkalmazás beállítása (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Fejlesztői szerver indítása
npm run build      # Éles verzió készítése
npm run lint       # ESLint futtatása
```

### Bank projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Indítsa el az API szervert
npm run lint       # Futtassa az ESLint-et
npm run format     # Formázza Prettierral
```

### Böngészőbővítmény projektek

```bash
cd 5-browser-extension/solution
npm install
# Kövesse a böngészőre jellemző bővítmény betöltési utasításokat
```

### Űrjáték projektek

```bash
cd 6-space-game/solution
npm install
# Nyisd meg az index.html fájlt böngészőben vagy használd a Live Server-t
```

### Csevegő projekt (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Állítsa be a GITHUB_TOKEN környezeti változót
python api.py
```

## Fejlesztési munkafolyamat

### Tartalmi közreműködőknek

1. **Forkold a tárházat** a GitHub fiókodba
2. **Klónozd le a fork-odat** helyileg
3. **Hozz létre új ágat** a változtatásaidnak
4. Végezz változtatásokat a lecke tartalmakban vagy kód példákban
5. Teszteld a kódváltozásokat az érintett projekt könyvtárakban
6. Küldj be pull requestet a hozzájárulási irányelvek szerint

### Tanulók számára

1. Forkold vagy klónozd le a tárházat
2. Lépj sorban a lecke könyvtárakba
3. Olvasd el a README fájlokat minden leckéhez
4. Teljesítsd az előleckés kvízeket a https://ff-quizzes.netlify.app/web/ oldalon
5. Dolgozz a kód példákon a lecke könyvtárakban
6. Oldd meg a feladatokat és kihívásokat
7. Tedd meg az utóleckés kvízeket

### Élő fejlesztés

- **Dokumentáció**: Futtasd a `docsify serve` parancsot a gyökérkönyvtárban (3000-es port)
- **Kvíz alkalmazás**: Futtasd az `npm run dev` parancsot a quiz-app könyvtárban
- **Projektek**: Használd a VS Code Live Server bővítményt HTML projektekhez
- **API projektek**: Futtasd az `npm start` parancsot a megfelelő API könyvtárakban

## Tesztelési utasítások

### Kvíz alkalmazás tesztelése

```bash
cd quiz-app
npm run lint       # Ellenőrizze a kód stílus problémákat
npm run build      # Ellenőrizze, hogy a build sikeres-e
```

### Bank API tesztelés

```bash
cd 7-bank-project/api
npm run lint       # Ellenőrizze a kódstílus-problémákat
node server.js     # Ellenőrizze, hogy a szerver hibák nélkül indul-e
```

### Általános tesztelési megközelítés

- Ez egy oktatási tárház átfogó automatizált tesztek nélkül
- Kézi tesztelés fókuszban:
  - Kód példák hibamentes futtatása
  - Dokumentáció linkek helyes működése
  - Projektek sikeres buildelése
  - Példák követik a legjobb gyakorlatokat

### Beküldés előtti ellenőrzések

- Futtasd az `npm run lint` parancsot a package.json tartalmú könyvtárakban
- Ellenőrizd a markdown linkek érvényességét
- Teszteld a kód példákat böngészőben vagy Node.js-ben
- Győződj meg, hogy a fordítások megőrzik a helyes struktúrát

## Kódstílus irányelvek

### JavaScript

- Használj modern ES6+ szintaxist
- Kövesd a projektekben található ESLint beállításokat
- Használj érthető változó- és függvényneveket az oktatás érdekében
- Adj hozzá magyarázó kommenteket a tanulók számára
- Használd a Prettier objektív formázást ahol konfigurálva van

### HTML/CSS

- Szemantikus HTML5 elemek
- Reszponzív tervezési elvek
- Egyértelmű osztálynévrendszer
- Kommentek, amelyek magyarázzák a CSS technikákat a tanulóknak

### Python

- PEP 8 stílus előírások
- Világos, oktató jellegű kód példák
- Típusjelölések, ahol hasznos a tanulásban

### Markdown dokumentáció

- Világos címsor hierarchia
- Kódrészletek nyelvi megjelöléssel
- Linkek további forrásokhoz
- Képernyőképek és képek a `images/` könyvtárakban
- Képek alt szövege az akadálymentességért

### Fájl szervezés

- Leckék sorszámozva (1-getting-started-lessons, 2-js-basics, stb.)
- Minden projekt tartalmaz `solution/`, gyakran `start/` vagy `your-work/` könyvtárat
- Képek a lecke-specifikus `images/` mappákban tárolva
- Fordítások a `translations/{language-code}/` struktúrában

## Build és telepítés

### Kvíz alkalmazás telepítés (Azure Static Web Apps)

A quiz-app konfigurálva van Azure Static Web Apps telepítéshez:

```bash
cd quiz-app
npm run build      # Létrehozza a dist/ mappát
# Telepít a GitHub Actions munkafolyamat segítségével, ha a main ágra történik push
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
npm install -g docsify-cli    # Telepítsd a Docsify-t globálisan
docsify serve                 # Szolgáltatás localhost:3000 címen
```

### Projekt-specifikus build folyamatok

Minden projekt könyvtárnak lehet saját build folyamata:
- Vue projektek: `npm run build` létrehozza a produkciós csomagokat
- Statikus projektek: nincs build lépés, a fájlok közvetlen kiszolgálása

## Pull request irányelvek

### Cím formátum

Használj világos, leíró címeket, amelyek jelzik a változtatás területét:
- `[Quiz-app] Új kvíz hozzáadása az X. leckéhez`
- `[Lesson-3] Elírás javítása a terrárium projektben`
- `[Translation] Spanyol fordítás hozzáadása az 5. leckéhez`
- `[Docs] Beállítási utasítások frissítése`

### Kötelező ellenőrzések

PR beküldése előtt:

1. **Kódminőség**:
   - Futtasd az `npm run lint` parancsot az érintett projekt könyvtárakban
   - Javíts minden lint hibát és figyelmeztetést

2. **Build ellenőrzés**:
   - Futtasd az `npm run build` parancsot amennyiben releváns
   - Győződj meg, hogy nincs build hiba

3. **Link ellenőrzés**:
   - Teszteld minden markdown linket
   - Ellenőrizd a kép hivatkozások működését

4. **Tartalomellenőrzés**:
   - Ellenőrizd helyesírást és nyelvtant
   - Győződj meg róla, hogy a kód példák helyesek és oktató jellegűek
   - Biztosítsd, hogy a fordítások megtartják az eredeti jelentést

### Hozzájárulási feltételek

- Fogadd el a Microsoft CLA-t (automatikus ellenőrzés első PR esetén)
- Kövesd a [Microsoft Nyílt Forráskódú Magatartási Kódexét](https://opensource.microsoft.com/codeofconduct/)
- Részletes irányelvek a [CONTRIBUTING.md](./CONTRIBUTING.md) fájlban
- Hivatkozz a issue számokra a PR leírásában, ha releváns

### Felülvizsgálati folyamat

- PR-eket a karbantartók és a közösség vizsgálja át
- Oktatási érthetőség előtérben
- A kód példáknak követniük kell a jelenlegi legjobb gyakorlatokat
- Fordításokat pontosság és kulturális megfelelőség alapján bírálják

## Fordítási rendszer

### Automatikus fordítás

- GitHub Actions és co-op-translator munkafolyamat használata
- Több mint 50 nyelvre automatikus fordítás
- Forrásfájlok a fő könyvtárakban
- Fordított fájlok a `translations/{language-code}/` könyvtárakban

### Manuális fordítási javítások hozzáadása

1. Keresd meg a fájlt a `translations/{language-code}/` könyvtárban
2. Végezze el a javításokat, miközben megőrzöd a struktúrát
3. Győződj meg róla, hogy a kód példák működőképesek maradnak
4. Teszteld a lokalizált kvíz tartalmakat

### Fordítási metaadatok

A fordított fájlok tartalmaznak metadata fejlécet:
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

**A kvíz alkalmazás nem indul el**:
- Ellenőrizd a Node.js verziót (javasolt v14+)
- Töröld a `node_modules` és `package-lock.json` fájlokat, majd futtasd újra az `npm install` parancsot
- Ellenőrizd a portütközéseket (alapértelmezett: Vite a 5173-as portot használja)

**Az API szerver nem indul el**:
- Ellenőrizd a Node.js verziót (min. node >=10)
- Ellenőrizd, hogy a port szabad-e
- Győződj meg arról, hogy minden függőség telepítve van az `npm install` használatával

**A böngészőbővítmény nem töltődik be**:
- Ellenőrizd, hogy a manifest.json helyesen formázott-e
- Nézd meg a böngésző konzolját hibákért
- Kövesd a böngésző-specifikus bővítmény telepítési utasításokat

**Python csevegő projekt problémák**:
- Győződj meg arról, hogy az OpenAI csomag telepítve van: `pip install openai`
- Ellenőrizd, hogy a GITHUB_TOKEN környezeti változó be van állítva
- Nézd meg a GitHub Models hozzáférési jogosultságokat

**A Docsify nem szolgáltatja a dokumentációt**:
- Telepítsd a docsify-cli-t globálisan: `npm install -g docsify-cli`
- Futtasd a tárház gyökérkönyvtárából
- Ellenőrizd, hogy az `docs/_sidebar.md` létezik

### Fejlesztési környezet tippek

- Használd a VS Code Live Server bővítményt HTML projektekhez
- Telepítsd az ESLint és Prettier bővítményeket az egységes formázáshoz
- Használd a böngésző DevTools-t a JavaScript hibakereséshez
- Vue projektekhez telepítsd a Vue DevTools böngésző bővítményt

### Teljesítményelvárások

- A sok fordított fájl miatt (50+ nyelv) a teljes klón nagy méretű
- Használj "shallow" klónt, ha csak tartalommal dolgozol: `git clone --depth 1`
- Kizárhatod a fordításokat a keresésekből angol tartalom esetén
- A build folyamatok első futáskor lassúak lehetnek (npm install, Vite build)

## Biztonsági megfontolások

### Környezeti változók

- Az API kulcsokat soha ne tárold a tárházban
- Használj `.env` fájlokat (már benne vannak a `.gitignore`-ban)
- Dokumentáld a szükséges környezeti változókat a projekt README fájljaiban

### Python projektek

- Használj virtuális környezetet: `python -m venv venv`
- Tartsd naprakészen a függőségeket
- A GitHub tokenek minimális jogosultsággal rendelkezzenek

### GitHub Models hozzáférés

- Személyes hozzáférési tokenek (PAT) szükségesek a GitHub Models használatához
- A tokeneket környezeti változóként tárold
- Soha ne kötelezz el tokeneket vagy hitelesítő adatokat

## Egyéb megjegyzések

### Célközönség

- Teljesen kezdő webfejlesztők
- Diákok és önálló tanulók
- Tanárok, akik az oktatási tervet tanórákon használják
- A tartalom akadálymentes és fokozatos képességfejlesztést céloz

### Oktatási filozófia

- Projekt-alapú tanulási megközelítés
- Gyakori tudásellenőrzések (kvízek)
- Gyakorlati kódolási feladatok
- Valós példák alkalmazásokra
- Alapok erősítése a keretrendszerek előtt

### Tárház karbantartás

- Aktív tanuló és közreműködő közösség
- Rendszeres frissítések a függőségekben és tartalomban
- Hibaajánlások és megbeszélések nyomon követve a karbantartók által
- Fordítási frissítések automatizáltak GitHub Actions használatával

### Kapcsolódó források

- [Microsoft Learn modulok](https://docs.microsoft.com/learn/)
- [Student Hub erőforrások](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ajánlott tanulóknak
- További kurzusok: Generatív AI, Adattudomány, ML, IoT tantervek elérhetőek

### Egyedi projektek kezelése

Részletes utasítások egyes projektekhez a README fájlokban:
- `quiz-app/README.md` - Vue 3 kvíz alkalmazás
- `7-bank-project/README.md` - Banki alkalmazás hitelesítéssel
- `5-browser-extension/README.md` - Böngészőbővítmény fejlesztés
- `6-space-game/README.md` - Vászon alapú játék fejlesztés
- `9-chat-project/README.md` - AI csevegő asszisztens projekt

### Monorepo felépítés

Bár nem hagyományos monorepo, ez a tárház több független projektet tartalmaz:
- Minden lecke önálló
- A projektek nem osztanak meg függőségeket
- Egyedi projekteken dolgozhatsz anélkül, hogy másokat érintenél
- A teljes tananyag élményéért klónozd le az egész tárházat

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Jogi nyilatkozat**:
Ezt a dokumentumot az AI fordító szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével fordítottuk le. Bár a pontosságra törekszünk, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az anyanyelvén tekintendő hiteles forrásnak. Kritikus információk esetén professzionális emberi fordítást javaslunk. Nem vállalunk felelősséget az ebből a fordításból eredő félreértésekért vagy félreértelmezésekért.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->