# AGENTS.md

## Projekt áttekintése

Ez egy oktatási tananyag-tár, amely a webfejlesztés alapjainak tanítására szolgál kezdők számára. A tananyag egy átfogó, 12 hetes kurzus, amelyet a Microsoft Cloud Advocates fejlesztett ki, és 24 gyakorlati leckét tartalmaz, amelyek JavaScript-et, CSS-t és HTML-t fednek le.

### Főbb elemek

- **Oktatási tartalom**: 24 strukturált lecke, projekt-alapú modulokba rendezve
- **Gyakorlati projektek**: Terrárium, Gépelős játék, Böngészőbővítmény, Űrjáték, Banki alkalmazás, Kódszerkesztő és AI csevegőasszisztens
- **Interaktív kvízek**: 48 kvíz, mindegyik 3 kérdéssel (elő- és utóleckés értékelések)
- **Többnyelvű támogatás**: Automatikus fordítás 50+ nyelvre GitHub Actions segítségével
- **Technológiák**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektekhez)

### Architektúra

- Oktatási tárhely lecke-alapú struktúrával
- Minden lecke mappája tartalmaz README-t, kódpéldákat és megoldásokat
- Önálló projektek külön könyvtárakban (quiz-app, különböző lecke projektek)
- Fordítási rendszer GitHub Actions (co-op-translator) használatával
- Dokumentáció Docsify-val szolgáltatva és PDF-ben elérhető

## Telepítési parancsok

Ez a tárhely elsősorban oktatási tartalom fogyasztására szolgál. Egyedi projektekkel való munka esetén:

### Fő tárhely beállítása

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Kvíz alkalmazás beállítása (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Fejlesztői szerver indítása
npm run build      # Termelésre építés
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
# Kövesse a böngészőspecifikus bővítménybetöltési utasításokat
```

### Űrjáték projektek

```bash
cd 6-space-game/solution
npm install
# Nyisd meg az index.html-t böngészőben vagy használd a Live Server-t
```

### Csevegő projekt (Python háttér)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Állítsa be a GITHUB_TOKEN környezeti változót
python api.py
```

## Fejlesztési munkafolyamat

### Tartalomszolgáltatók számára

1. **Forkold a tárhelyet** a saját GitHub fiókodba
2. **Klónozd le** a forkot helyileg
3. **Hozz létre egy új ágat** a változtatásaid számára
4. Módosítsd a lecke tartalmát vagy a kódpéldákat
5. Teszteld a kódváltoztatásokat a vonatkozó projekt könyvtáraiban
6. Küldj pull requesteket a hozzájárulási útmutató szerint

### Tanulók számára

1. Forkold vagy klónozd a tárhelyet
2. Lépj sorban a lecke könyvtárakba
3. Olvasd el az egyes leckék README fájljait
4. Teljesítsd az előleckés kvízeket a https://ff-quizzes.netlify.app/web/ oldalon
5. Dolgozz át a lecke mappák kódpéldáin
6. Végezd el a feladatokat és kihívásokat
7. Teljesítsd a utóleckés kvízeket

### Élő fejlesztés

- **Dokumentáció**: Futtasd a `docsify serve` parancsot a gyökérkönyvtárban (3000-es porton)
- **Kvíz alkalmazás**: Futtasd az `npm run dev` parancsot a quiz-app könyvtárban
- **Projektek**: Használd a VS Code Live Server kiterjesztését HTML projektekhez
- **API projektek**: Futtasd az `npm start` parancsot a megfelelő API könyvtárakban

## Tesztelési utasítások

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
node server.js     # Ellenőrizze, hogy a szerver hibamentesen indul-e
```

### Általános tesztelési megközelítés

- Ez egy oktatási tárhely, átfogó automatikus tesztek nélkül
- Manuális tesztelés fókuszpontjai:
  - Kódpéldák hibamentes futása
  - Dokumentáció linkjeinek helyessége
  - Projektek sikeres buildelése
  - Példák legjobb gyakorlatokat követnek

### Beküldés előtti ellenőrzések

- Futtasd az `npm run lint` parancsot a package.json fájlt tartalmazó könyvtárakban
- Ellenőrizd a markdown linkeket
- Teszteld a kódpéldákat böngészőben vagy Node.js-ben
- Ellenőrizd, hogy a fordítások megfelelő szerkezetet tartanak fenn

## Kódstílus irányelvek

### JavaScript

- Használj modern ES6+ szintaxist
- Kövesd a projektekben megadott szabványos ESLint konfigurációkat
- Használj érthető változó- és függvényneveket az oktatási érthetőségért
- Adj hozzá kommenteket a fogalmak magyarázatához tanulók számára
- Formázd a kódot Prettier-rel, ahol be van állítva

### HTML/CSS

- Szemantikus HTML5 elemek
- Reszponzív tervezési elvek
- Áttekinthető osztályelnevezések
- Kommentekkel magyarázott CSS technikák tanulóknak

### Python

- PEP 8 stílus előírások
- Tiszta, oktató jellegű kódpéldák
- Típusjelzések, ha hasznos a tanuláshoz

### Markdown dokumentáció

- Világos címsor struktúra
- Kódblokkok nyelvi megjelöléssel
- Hivatkozások további forrásokra
- Képernyőképek és képek az `images/` könyvtárakban
- Alternatív szöveg a képekhez hozzáférhetőség miatt

### Fájlok szervezése

- A leckék folyamatos számozással (1-getting-started-lessons, 2-js-basics stb.)
- Minden projektnek van `solution/`, gyakran `start/` vagy `your-work/` könyvtára
- Képek lecke-specifikus `images/` mappákban tárolva
- Fordítások a `translations/{language-code}/` struktúrában

## Build és telepítés

### Kvíz alkalmazás telepítése (Azure Static Web Apps)

A quiz-app konfigurálva van Azure Static Web Apps telepítéshez:

```bash
cd quiz-app
npm run build      # Létrehozza a dist/ mappát
# GitHub Actions munkafolyamat segítségével telepít a main ágra történő push esetén
```

Azure Static Web Apps konfiguráció:
- **App helye**: `/quiz-app`
- **Kimeneti hely**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentáció PDF generálás

```bash
npm install                    # Telepítse a docsify-to-pdf csomagot
npm run convert               # PDF generálása dokumentációból
```

### Docsify dokumentáció

```bash
npm install -g docsify-cli    # Docsify telepítése globálisan
docsify serve                 # Szolgáltatás futtatása a localhost:3000 címen
```

### Projekt-specifikus build folyamatok

Minden projekt könyvtárában lehet saját build lépés:
- Vue projektek: az `npm run build` elkészíti a gyártási csomagokat
- Statikus projektek: nincs külön build lépés, a fájlokat közvetlen szolgálja ki

## Pull request irányelvek

### Címsor formátum

Használj tiszta, leíró címsorokat, amelyek jelzik a változtatás területét:
- `[Quiz-app] Új kvíz hozzáadása az X. leckéhez`
- `[Lesson-3] Elírás javítása a terrárium projektben`
- `[Translation] Spanyol fordítás hozzáadása az 5. leckéhez`
- `[Docs] Telepítési utasítások frissítése`

### Kötelező ellenőrzések

PR beküldése előtt:

1. **Kódminőség**:
   - Futás `npm run lint` a érintett projekt könyvtáraiban
   - Javíts minden lint hibát és figyelmeztetést

2. **Build ellenőrzés**:
   - Futtasd az `npm run build` parancsot, ha van ilyen lépés
   - Győződj meg, hogy nincs build hiba

3. **Hivatkozások ellenőrzése**:
   - Teszteld a markdown linkeket
   - Ellenőrizd a kép hivatkozásokat

4. **Tartalom átnézése**:
   - Ellenőrizd helyesírást és nyelvtant
   - Győződj meg a kódpéldák helyességéről és oktatási jellegéről
   - Ellenőrizd, hogy a fordítások megőrzik az eredeti jelentést

### Hozzájárulási feltételek

- Fogadj el Microsoft CLA-t (automatikus ellenőrzés az első PR-nál)
- Kövesd a [Microsoft nyílt forráskódú magatartási kódexét](https://opensource.microsoft.com/codeofconduct/)
- Részletes útmutatók a [CONTRIBUTING.md](./CONTRIBUTING.md) fájlban
- Ha van, hivatkozz issue számokra a PR leírásában

### Áttekintési folyamat

- A PR-eket a karbantartók és a közösség vizsgálja át
- Oktatási érthetőség az elsődleges szempont
- Kódpéldák kövessék a legjobb aktuális gyakorlatokat
- A fordításokat pontosság és kulturális megfelelőség alapján értékelik

## Fordítási rendszer

### Automatikus fordítás

- GitHub Actions használatával, co-op-translator workflow-val
- 50+ nyelvre automatikusan fordít
- Forrásfájlok a fő könyvtárakban
- Fordított fájlok a `translations/{language-code}/` mappákban

### Kézi fordítási javítások hozzáadása

1. Keresd meg a fájlt a `translations/{language-code}/` könyvtárban
2. Javításokat végezz a szerkezet megtartásával
3. Biztosítsd, hogy a kódpéldák továbbra is működnek
4. Teszteld a lokalizált kvíz tartalmakat

### Fordítás metaadatok

A fordított fájlok tartalmazzák az alábbi metaadat fejléceket:
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

**Kvíz alkalmazás nem indul**:
- Ellenőrizd a Node.js verziót (v14+ ajánlott)
- Töröld a `node_modules` és a `package-lock.json` fájlokat, majd futtasd újra az `npm install` parancsot
- Ellenőrizd a port ütközéseket (alapértelmezett: Vite 5173-as portot használ)

**API szerver nem indul**:
- Ellenőrizd, hogy a Node.js verzió megfelel-e a minimum követelménynek (node >=10)
- Ellenőrizd, hogy a port nincs-e már használatban
- Győződj meg róla, hogy minden függőség telepítve van az `npm install` futtatásával

**Böngészőbővítmény nem töltődik be**:
- Ellenőrizd, hogy a manifest.json megfelelő formátumú
- Nézd meg a böngésző konzolját hibák után
- Kövesd a böngésző-specifikus bővítmény telepítési utasításokat

**Python chat projekt problémák**:
- Győződj meg róla, hogy az OpenAI csomag telepítve van: `pip install openai`
- Ellenőrizd, hogy a GITHUB_TOKEN környezeti változó be van-e állítva
- Vizsgáld meg a GitHub Models hozzáférési jogosultságokat

**Docsify nem szolgáltat dokumentációt**:
- Telepítsd globálisan a docsify-cli-t: `npm install -g docsify-cli`
- Futtasd a parancsot a tárhely gyökeréből
- Ellenőrizd, hogy létezik a `docs/_sidebar.md` fájl

### Fejlesztési környezet tippek

- Használj VS Code-ot Live Server kiterjesztéssel HTML projektekhez
- Telepítsd az ESLint és Prettier bővítményeket az egységes formázáshoz
- Használd a böngésző fejlesztői eszközeit JavaScript hibakereséshez
- Vue projektekhez telepítsd a Vue DevTools böngésző kiterjesztést

### Teljesítményre vonatkozó megfontolások

- A több mint 50 nyelvű fordítás miatt a teljes klónozás nagy méretű lehet
- Használj sekély klónozást, ha csak a tartalmon dolgozol: `git clone --depth 1`
- A kereséseknél kizárhatod a fordításokat, ha csak angol tartalmon dolgozol
- Az első futtatásnál (npm install, Vite build) lassúak lehetnek a build folyamatok

## Biztonsági megfontolások

### Környezeti változók

- Az API kulcsokat soha ne köteleződjenek el a tárhelyen
- Használj `.env` fájlokat (amelyek már benne vannak a `.gitignore`-ban)
- Dokumentáld a szükséges környezeti változókat a projekt README fájljaiban

### Python projektek

- Használj virtuális környezeteket: `python -m venv venv`
- Tartsd naprakészen a függőségeket
- A GitHub tokenek rendelkezzenek csak a szükséges minimális jogosultságokkal

### GitHub Models hozzáférés

- Személyes hozzáférési token (PAT) szükséges a GitHub Models használatához
- A tokeneket környezeti változóként tárold
- Soha ne köteleződj el tokeneket vagy hitelesítő adatokat

## Egyéb megjegyzések

### Célközönség

- Teljesen kezdő webfejlesztők
- Tanulók és önálló tanulók
- Tanárok, akik az oktatási tananyagot osztálytermi használatra alkalmazzák
- A tartalom hozzáférhető és fokozatos képességfejlesztést biztosít

### Oktatási filozófia

- Projektalapú tanulás
- Gyakori tudásellenőrző kvízek
- Gyakorlati kódolási feladatok
- Valós világban használható példák
- Alapokra fókuszálás a keretrendszerek előtt

### Tárhely karbantartása

- Aktív tanulói és közreműködő közösség
- Rendszeres frissítések a függőségekhez és tartalomhoz
- Issue-k és beszélgetések karbantartói felügyelete
- Fordítások automatikusan frissülnek GitHub Actions segítségével

### Kapcsolódó források

- [Microsoft Learn modulok](https://docs.microsoft.com/learn/)
- [Student Hub erőforrások](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ajánlott a tanulóknak
- További kurzusok: Generatív AI, Data Science, ML, IoT tananyagok elérhetők

### Egyedi projektek kezelése

Egyéni projektek részletes útmutatói elérhetők a README fájlokban:
- `quiz-app/README.md` - Vue 3 kvíz alkalmazás
- `7-bank-project/README.md` - Banki alkalmazás hitelesítéssel
- `5-browser-extension/README.md` - Böngészőbővítmény fejlesztés
- `6-space-game/README.md` - Canvas alapú játék fejlesztés
- `9-chat-project/README.md` - AI csevegő asszisztens projekt

### Monorepo struktúra

Bár nem hagyományos monorepóról van szó, ez a tárhely több független projektet tartalmaz:
- Minden lecke önálló egység
- A projektek nem osztanak meg függőségeket
- Egyedi projekteken dolgozhatsz anélkül, hogy másokat befolyásolnál
- Teljes tananyag élményéhez klónozd az egész tárhelyet

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Felelősségkizárás**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordító szolgáltatás segítségével készült. Bár a pontosságra törekszünk, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az anyanyelvén tekintendő hivatalos forrásnak. Kritikus információk esetén professzionális emberi fordítást javasolt igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy helytelen értelmezésért, amely ebből a fordításból adódik.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->