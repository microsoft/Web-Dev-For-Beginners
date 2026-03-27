# AGENTS.md

## Projekt áttekintése

Ez egy oktatási tanterv-tár, amely a kezdők számára tanítja a webfejlesztés alapjait. A tanterv egy átfogó, 12 hetes kurzus, amelyet a Microsoft Cloud Advocates fejlesztett ki, 24 gyakorlati órával, amelyek JavaScript-et, CSS-t és HTML-t fednek le.

### Fő komponensek

- **Oktatási tartalom**: 24 strukturált lecke projekt-alapú modulokban szervezve
- **Gyakorlati projektek**: Terrárium, Gépelő játék, Böngészőbővítmény, Űrjáték, Banki alkalmazás, Kódszerkesztő és AI chat asszisztens
- **Interaktív kvízek**: 48 kvíz, mindegyik 3 kérdéssel (elő- és utóleckés felmérések)
- **Többnyelvű támogatás**: Automatikus fordítás 50+ nyelvre GitHub Actions segítségével
- **Technológiák**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektekhez)

### Architektúra

- Oktatási tár tanulási egységek szerint felépítve
- Minden lecke mappája README-t, kódpéldákat és megoldásokat tartalmaz
- Önálló projektek külön könyvtárakban (quiz-app, különféle lecke projektek)
- Fordító rendszer GitHub Actions használatával (co-op-translator)
- Dokumentáció Docsify-val szolgáltatva, PDF formátumban is elérhető

## Beállítási parancsok

Ez a tároló elsősorban az oktatási tartalmak fogyasztására szolgál. Egyes projektekhez való munkához:

### Fő tár beállítása

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Kvíz alkalmazás beállítása (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Fejlesztői szerver indítása
npm run build      # Építés éles környezetre
npm run lint       # ESLint futtatása
```

### Bank projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Indítsa el az API szervert
npm run lint       # Futtassa az ESLint-et
npm run format     # Formázza Prettier-rel
```

### Böngészőbővítmény projektek

```bash
cd 5-browser-extension/solution
npm install
# Kövesse a böngészőspecifikus bővítmény betöltési utasításait
```

### Űrjáték projektek

```bash
cd 6-space-game/solution
npm install
# Nyisd meg az index.html fájlt a böngészőben vagy használd a Live Server-t
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

1. **Forkold a tárat** a GitHub fiókodba
2. **Klónozd le a forkodat** helyileg
3. **Hozz létre egy új ágat** a változtatásaidhoz
4. Végezze el a módosításokat a leckék tartalmán vagy kód példákon
5. Tesztelje a kódváltozásokat az érintett projekt mappákban
6. Küldj be pull requesteket a hozzájárulási irányelvek szerint

### Tanulóknak

1. Forkold vagy klónozd le a tárat
2. Folytasd a leckék mappáiban egymás után
3. Olvasd el az egyes leckék README fájljait
4. Teljesítsd az elő-lecke kvízeket a https://ff-quizzes.netlify.app/web/ címen
5. Dolgozz át a leckék mappa kód példáin
6. Fejezd be a feladatokat és kihívásokat
7. Csakazután végezd el az utó-lecke kvízeket

### Élő fejlesztés

- **Dokumentáció**: Futtasd a `docsify serve` parancsot a gyökérben (3000-es porton)
- **Kvíz alkalmazás**: `npm run dev` a quiz-app mappában
- **Projektek**: Használd a VS Code Live Server kiterjesztését HTML projektekhez
- **API projektek**: Futtasd az `npm start` parancsot a megfelelő API mappákban

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
node server.js     # Ellenőrizze, hogy a szerver hibák nélkül indul-e
```

### Általános tesztelési megközelítés

- Ez egy oktatási tár, nincs teljes körű automatizált tesztelés
- Manuális tesztek fókuszpontjai:
  - Kódpéldák hibamentesen futnak
  - Dokumentációban lévő linkek helyesek
  - Projektek sikeresen épülnek
  - Példák követik a legjobb gyakorlatokat

### Előzetes ellenőrzések benyújtás előtt

- Futtasd az `npm run lint` parancsot azokban a mappákban, ahol van package.json
- Ellenőrizd a markdown linkek érvényes működését
- Teszteld a kódpéldákat böngészőben vagy Node.js-ben
- Ellenőrizd, hogy a fordítások megfelelő szerkezetet tartanak meg

## Kódszabvány irányelvek

### JavaScript

- Használj modern ES6+ szintaxist
- Kövesd a projektekben megadott szabványos ESLint beállításokat
- Használj értelmes változó- és függvénynév adás a tanulók érthetőségéért
- Tegyél bele magyarázó kommenteket a fogalmak elmagyarázásához
- Formázd Prettier-rel, ahol be van állítva

### HTML/CSS

- Szemiantikus HTML5 elemek használata
- Reszponzív tervezési alapelvek
- Egyértelmű osztálynév konvenciók
- Kommentek CSS technikák elmagyarázásához a tanulók számára

### Python

- PEP 8 stílusirányelvek követése
- Világos, oktató jellegű kódpéldák
- Típusjavaslatok, ahol segítik a tanulást

### Markdown dokumentáció

- Átlátható címsor hierarchia
- Kódrészek nyelvi specifikációval
- Hivatkozások további forrásokra
- Képernyőképek és képek az `images/` könyvtárakban
- Képekhez alt szöveg az akadálymentességért

### Fájl szervezés

- A leckék sorszámozott sorrendben (1-getting-started-lessons, 2-js-basics stb.)
- Minden projekthez tartozik `solution/` és gyakran `start/` vagy `your-work/` mappa
- Képek a lecke-specifikus `images/` könyvtárakban tárolva
- Fordítások a `translations/{language-code}/` struktúrában

## Build és telepítés

### Kvíz alkalmazás telepítése (Azure Static Web Apps)

A quiz-app konfigurálva van Azure Static Web Apps telepítésre:

```bash
cd quiz-app
npm run build      # Létrehozza a dist/ mappát
# GitHub Actions munkafolyamattal telepít nyomásra a main ágban
```

Azure Static Web Apps beállítás:
- **Alkalmazás helye**: `/quiz-app`
- **Kimeneti hely**: `dist`
- **Folyamat**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentáció PDF generálás

```bash
npm install                    # docsify-to-pdf telepítése
npm run convert               # PDF generálása dokumentumokból
```

### Docsify dokumentáció

```bash
npm install -g docsify-cli    # Telepítse a Docsify-t globálisan
docsify serve                 # Szolgáltatás localhost:3000 címen
```

### Projekt-specifikus build folyamatok

Minden projekthez lehet saját build folyamat:
- Vue projektek: `npm run build` előállítja a gyártásra kész csomagokat
- Statikus projektek: nincs build lépés, fájlokat közvetlenül szolgáltatja

## Pull request irányelvek

### Cím formátuma

Használj világos, leíró címeket, amelyek jelzik a változtatás területét:
- `[Quiz-app] Új kvíz a X. leckéhez`
- `[Lesson-3] Elírás javítása a terrárium projektnél`
- `[Translation] Spanyol fordítás hozzáadása az 5. leckéhez`
- `[Docs] Beállítási útmutató frissítése`

### Kötelező ellenőrzések

Pull request beküldése előtt:

1. **Kódminőség**:
   - Futtasd az `npm run lint` parancsot a változtatott projektekben
   - Javítsd a minden lint figyelmeztetést és hibát

2. **Build ellenőrzés**:
   - Futtasd az `npm run build`-et, ha van ilyen lépés
   - Győződj meg, hogy nincs build hiba

3. **Linkellenőrzés**:
   - Teszteld az összes markdown linket
   - Ellenőrizd a képek hivatkozásának működését

4. **Tartalom átvizsgálás**:
   - Ellenőrizd a helyesírást és nyelvtant
   - Győződj meg a kódpéldák helyességéről és oktató jellegről
   - Vizsgáld a fordítások pontosságát és eredeti jelentéstartalmat

### Hozzájárulási követelmények

- Fogadd el a Microsoft CLA-t (automatikus ellenőrzés az első PR-nál)
- Kövesd a [Microsoft Open Source Etikai Kódexét](https://opensource.microsoft.com/codeofconduct/)
- Részletes szabályok a [CONTRIBUTING.md](./CONTRIBUTING.md) fájlban
- PR leírásában hivatkozz issue számokra, ha releváns

### Átvizsgálási folyamat

- PR-eket a karbantartók és a közösség bírálja el
- Oktatási világosság előnyben
- Kódpéldák kövessék a jelenlegi legjobb gyakorlatokat
- Fordításokat ellenőrzik pontosság és kulturális illeszkedés szempontjából

## Fordítási rendszer

### Automatikus fordítás

- GitHub Actions használata co-op-translator munkafolyamattal
- Automatikusan fordít 50+ nyelvre
- Forrásfájlok a fő könyvtárakban
- Fordított fájlok a `translations/{language-code}/` mappákban

### Kézi fordítási javítások hozzáadása

1. Keresd meg a fájlt a `translations/{language-code}/` könyvtárban
2. Végezze el a javításokat, miközben megőrzi a szerkezetet
3. Gondoskodj arról, hogy a kódpéldák továbbra is működjenek
4. Teszteld az esetleges lokalizált kvíz tartalmakat

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

## Hibakeresés és hibaelhárítás

### Gyakori problémák

**A kvíz alkalmazás nem indul el**:
- Ellenőrizd a Node.js verziót (javasolt v14+)
- Töröld a `node_modules` és a `package-lock.json` fájlokat, majd futtasd újra az `npm install` parancsot
- Ellenőrizd, hogy nincs portütközés (alapértelmezés szerint: Vite a 5173-as portot használja)

**API szerver nem indul**:
- Ellenőrizd, hogy a Node.js verzió legalább 10-es
- Ellenőrizd, hogy a port szabad-e
- Győződj meg róla, hogy minden függőség telepítve van az `npm install`-lal

**Böngészőbővítmény nem töltődik be**:
- Ellenőrizd, hogy a manifest.json helyesen van-e formázva
- Nézd meg a böngésző konzolját hibákért
- Kövesd a böngésző-specifikus bővítmény telepítési útmutatóját

**Python chat projekt problémák**:
- Biztosítsd, hogy az OpenAI csomag telepítve legyen: `pip install openai`
- Ellenőrizd, hogy a GITHUB_TOKEN környezeti változó be van állítva
- Nézd meg a GitHub Models hozzáférési jogosultságokat

**Docsify nem szolgáltat dokumentációt**:
- Telepítsd globálisan: `npm install -g docsify-cli`
- Futtasd a tár gyökérkönyvtárából
- Ellenőrizd, hogy létezik a `docs/_sidebar.md` fájl

### Fejlesztési környezet tippek

- Használd VS Code-ot Live Server kiterjesztéssel HTML projektekhez
- Telepítsd az ESLint és Prettier kiterjesztéseket az egységes formázáshoz
- Használd a böngésző fejlesztői eszközeit JavaScript hibakereséshez
- Vue projektekhez telepítsd a Vue DevTools böngésző kiegészítőt

### Teljesítmény szempontok

- Nagyszámú fordított fájl (50+ nyelv) miatt a teljes klón nagy méretű
- Használj sekély klónt, ha csak a tartalmakon dolgozol: `git clone --depth 1`
- Fordításokat zárd ki a keresésből, ha angol tartalmakon dolgozol
- A build folyamatok lassúak lehetnek első futtatáskor (npm install, Vite build)

## Biztonsági megfontolások

### Környezeti változók

- API kulcsokat soha ne tárolj a tárban
- Használj `.env` fájlokat (ezek már benne vannak a `.gitignore`-ban)
- Dokumentáld a szükséges környezeti változókat a projektek README-jeiben

### Python projektek

- Használj virtuális környezeteket: `python -m venv venv`
- Tartsd naprakészen a függőségeket
- GitHub tokenek csak minimálisan szükséges jogosultságokkal legyenek beállítva

### GitHub Models hozzáférés

- Személyes hozzáférési tokenek (PAT) szükségesek GitHub Models használatához
- Tokeneket környezeti változóként tárold
- Soha ne tárold vagy commitáld a tokeneket vagy hitelesítő adatokat

## További megjegyzések

### Célközönség

- Teljesen kezdő webfejlesztők
- Diákok és önálló tanulók
- Tanárok, akik ezt a tantervet használják osztálytermekben
- A tartalom akadálymentes és fokozatos készségfejlesztést szolgál

### Oktatási filozófia

- Projekt-alapú tanulás
- Gyakori tudásellenőrzések (kvízek)
- Gyakorlati kódolási feladatok
- Valós példák alkalmazásra
- Alapok elsajátítása keretrendszerek előtt

### Tároló karbantartása

- Aktív tanulói és közreműködői közösség
- Függőségek és tartalom rendszeres frissítése
- Hibák és viták karbantartói felügyelete
- Fordítások automatikus frissítése GitHub Actions által

### Kapcsolódó források

- [Microsoft Learn modulok](https://docs.microsoft.com/learn/)
- [Student Hub források](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ajánlott tanulóknak
- Kiegészítő kurzusok: Generatív AI, Adattudomány, ML, IoT tantervek elérhetőek

### Egyedi projektek kezelése

Részletes útmutatás egyes projektekhez a README fájlokban:
- `quiz-app/README.md` - Vue 3-alapú kvíz alkalmazás
- `7-bank-project/README.md` - Banki alkalmazás hitelesítéssel
- `5-browser-extension/README.md` - Böngészőbővítmény fejlesztés
- `6-space-game/README.md` - Canvas alapú játékfejlesztés
- `9-chat-project/README.md` - AI chat asszisztens projekt

### Monorepo szerkezet

Bár nem hagyományos monorepo, ez a tár több független projektet tartalmaz:
- Minden lecke önálló
- Projektek nem osztoznak függőségeken
- Egyedi projekteken dolgozhatsz anélkül, hogy a többit érintenéd
- A teljes tantervi élményhez klónozd az egész tárat

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Felelősségkizárás**:
Ezt a dokumentumot a [Co-op Translator](https://github.com/Azure/co-op-translator) mesterséges intelligencia fordító szolgáltatás segítségével fordítottuk le. Bár az pontosságra törekszünk, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az anyanyelvén tekintendő hivatalos forrásnak. Kritikus információk esetén szakmai emberi fordítást javaslunk. Nem vállalunk felelősséget az ebből a fordításból eredő félreértésekért vagy félreértelmezésekért.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->