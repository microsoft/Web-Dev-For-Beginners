# AGENTS.md

## Projekt áttekintés

Ez egy oktatási tantervi tárhely, amely a webfejlesztés alapjainak kezdőknek történő tanítására szolgál. A tanterv egy átfogó, 12 hetes kurzus, amelyet a Microsoft Cloud Advocates fejlesztett ki, és 24 gyakorlati leckét tartalmaz, amelyek lefedik a JavaScript, CSS és HTML témaköröket.

### Fő összetevők

- **Oktatási tartalom**: 24 strukturált lecke projektalapú modulokban
- **Gyakorlati projektek**: Terrárium, gépelős játék, böngészőbővítmény, űrjáték, banki alkalmazás, kódszerkesztő és AI chat asszisztens
- **Interaktív kvízek**: 48 kvíz, egyenként 3 kérdéssel (elő- és utóleckés értékelések)
- **Többnyelvű támogatás**: Automatikus fordítás 50+ nyelvre GitHub Actions segítségével
- **Technológiák**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektekhez)

### Architektúra

- Oktatási tárhely leckék szerinti struktúrával
- Minden lecke mappában README, kódpéldák és megoldások találhatók
- Külön projektek külön mappákban (quiz-app, különféle lecke projektek)
- Fordítási rendszer GitHub Actions-al (co-op-translator)
- Dokumentáció Docsify segítségével, PDF-ben is elérhető

## Beállítási parancsok

Ez a tárhely elsősorban oktatási tartalom fogyasztására szolgál. Konkrét projektekkel való munka esetén:

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
npm run build      # Éles verzió készítése
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

### Tartalomszolgáltatók számára

1. **Forkold a tárhelyet** a GitHub fiókodba
2. **Klonozd le a forkot** helyileg
3. **Hozz létre egy új ágat** a változtatásaidhoz
4. Végezze el a leckék vagy kódpéldák módosítását
5. Teszteld a kódváltoztatásokat az érintett projektmappákban
6. Küldj pull requesteket a hozzájárulási irányelvek szerint

### Tanulók számára

1. Forkold vagy klónozd le a tárhelyet
2. Lépj sorban a lecke mappákba
3. Olvasd el az egyes leckék README fájljait
4. Töltsd ki a leckék előtti kvízeket a https://ff-quizzes.netlify.app/web/ oldalon
5. Dolgozd át a kódpéldákat a lecke mappákban
6. Teljesítsd a feladatokat és kihívásokat
7. Töltsd ki az utóleckés kvízeket

### Élő fejlesztés

- **Dokumentáció**: Futtasd a `docsify serve` parancsot a gyökérben (port 3000)
- **Quiz App**: Futtasd az `npm run dev` parancsot a quiz-app mappában
- **Projektek**: Használj VS Code Live Server bővítményt HTML projektekhez
- **API projektek**: Futtasd az `npm start` parancsot az adott API mappákban

## Tesztelési útmutató

### Quiz App tesztelése

```bash
cd quiz-app
npm run lint       # Ellenőrizze a kódstílus-problémákat
npm run build      # Ellenőrizze, hogy a build sikeres-e
```

### Bank API tesztelése

```bash
cd 7-bank-project/api
npm run lint       # Ellenőrizze a kódstílus problémákat
node server.js     # Ellenőrizze, hogy a szerver hiba nélkül indul-e
```

### Általános tesztelési megközelítés

- Ez egy oktatási tárhely, nincs átfogó automatizált tesztelés
- Kézi tesztelés fókuszai:
  - Kódpéldák futtatása hibák nélkül
  - Dokumentáció hivatkozások működése
  - Projektek sikeres buildelése
  - Példák legjobb gyakorlatok betartása

### Beküldés előtti ellenőrzések

- Futtasd az `npm run lint` parancsot a package.json-t tartalmazó mappákban
- Ellenőrizd a markdown hivatkozásokat
- Teszteld a kódpéldákat böngészőben vagy Node.js-ben
- Ellenőrizd, hogy a fordítások megőrzik a megfelelő struktúrát

## Kódstílus irányelvek

### JavaScript

- Használj modern ES6+ szintaxist
- Kövesd az ESLint szabályokat, amelyeket a projektek tartalmaznak
- Használj értelmes változó- és függvényneveket az oktatási érthetőségért
- Tegyél megjegyzéseket az elképzelések magyarázatára a tanulók számára
- Formázd Prettier-rel, ahol be van állítva

### HTML/CSS

- Szemiantikus HTML5 elemek használata
- Reszponzív dizájn elvei
- Egyértelmű osztályelnevezési szabályok
- Megjegyzések a CSS technikákról a tanulók számára

### Python

- PEP 8 stílusirányelvek betartása
- Tiszta, oktatási kódpéldák
- Típusjelölések, ahol a tanulást segítik

### Markdown dokumentáció

- Egyértelmű címsorszintek
- Kódblokkok nyelvi specifikációval
- Hivatkozások további forrásokra
- Képernyőképek és képek az `images/` mappákban
- Alt szöveg a képekhez akadálymentesség miatt

### Fájlok rendszerezése

- Leckék számozva egymás után (pl. 1-getting-started-lessons, 2-js-basics stb.)
- Minden projektnek van `solution/` és gyakran `start/` vagy `your-work/` mappája
- Képek a lecke-specifikus `images/` mappákban
- Fordítások a `translations/{language-code}/` struktúrában

## Build és telepítés

### Quiz App telepítése (Azure Static Web Apps)

A quiz-app Azure Static Web Apps szolgáltatásra van konfigurálva:

```bash
cd quiz-app
npm run build      # Létrehozza a dist/ mappát
# GitHub Actions munkafolyamattal telepít a main ágra történő push esetén
```

Azure Static Web Apps beállítások:
- **App helye**: `/quiz-app`
- **Kimeneti hely**: `dist`
- **Folyamat**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentáció PDF generálás

```bash
npm install                    # docsify-to-pdf telepítése
npm run convert               # PDF generálása a docs alapján
```

### Docsify dokumentáció

```bash
npm install -g docsify-cli    # Telepítse a Docsify-t globálisan
docsify serve                 # Szolgáltatás localhost:3000 címen
```

### Projektspecifikus build folyamatok

Minden projekt mappának lehet saját build folyamata:
- Vue projektek: `npm run build` létrehozza az éles csomagokat
- Statikus projektek: nincs build lépés, a fájlokat direkt szolgáljuk ki

## Pull request irányelvek

### Címformátum

Használj világos, leíró címeket, melyek jelzik a változtatás területét:
- `[Quiz-app] Új kvíz hozzáadása az X. leckéhez`
- `[Lesson-3] Elírás javítása a terrárium projektben`
- `[Translation] Spanyol fordítás hozzáadása az 5. leckéhez`
- `[Docs] Beállítási útmutató frissítése`

### Kötelező ellenőrzések

PR beküldése előtt:

1. **Kódminőség**:
   - Futtasd az `npm run lint` parancsot az érintett projektmappákban
   - Javítsd az összes lint hibát és figyelmeztetést

2. **Build ellenőrzés**:
   - Futtasd az `npm run build` parancsot, ha van ilyen
   - Győződj meg, hogy nincs build hiba

3. **Linkek ellenőrzése**:
   - Teszteld az összes markdown linket
   - Ellenőrizd a képek hivatkozásait

4. **Tartalom átvizsgálása**:
   - Ellenőrizd helyesírást és nyelvtant
   - Győződj meg, hogy a kódpéldák helyesek és oktatók
   - Ollózkodj meg a fordítások megfelelőségéről

### Hozzájárulási feltételek

- Fogadd el a Microsoft CLA-t (automatikusan ellenőrzik az első PR-nál)
- Kövesd a [Microsoft Open Source Kódex](https://opensource.microsoft.com/codeofconduct/) szabályait
- Részletekért lásd a [CONTRIBUTING.md](./CONTRIBUTING.md) fájlt
- Amennyiben van, hivatkozz PR leírásban issue számokra

### Áttekintési folyamat

- A PR-ket karbantartók és közösség vizsgálja
- Oktatási érthetőség prioritás
- Kódpéldák kövessék a jelenlegi legjobb gyakorlatokat
- Fordításokat átvizsgálják pontosság és kulturális megfelelőség szempontjából

## Fordítási rendszer

### Automatikus fordítás

- GitHub Actions használ co-op-translator munkafolyamatot
- Több mint 50 nyelvre automatikus fordítás
- Forrásfájlok a fő könyvtárakban
- Fordított fájlok a `translations/{language-code}/` könyvtárakban

### Manuális fordítási javítások hozzáadása

1. Keresd meg a fájlt a `translations/{language-code}/` mappában
2. Javítsd miközben megtartod a struktúrát
3. Biztosítsd, hogy a kódpéldák továbbra is működnek
4. Teszteld az adott nyelvű kvíz tartalmakat

### Fordítás metaadatok

A fordított fájlok tartalmaznak metaadat fejlécet:
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

## Hibakeresés és problémaelhárítás

### Gyakori problémák

**Quiz app nem indul el**:
- Ellenőrizd a Node.js verziót (ajánlott v14+)
- Töröld a `node_modules` és `package-lock.json` fájlokat, majd futtasd újra az `npm install` parancsot
- Ellenőrizd, hogy nincs port ütközés (alapértelmezett port: Vite használja az 5173-at)

**API szerver nem indul**:
- Ellenőrizd a Node.js verzióját (node >=10 minimum)
- Nézd meg, hogy a port nincs-e már használatban
- Győződj meg róla, hogy az összes függőség telepítve van az `npm install` által

**Böngészőbővítmény nem töltődik be**:
- Ellenőrizd a manifest.json helyes formázását
- Nézd meg a böngésző konzolját hibák után
- Kövesd a böngészőspecifikus bővítmény telepítési utasításokat

**Python chat projekt problémák**:
- Győződj meg róla, hogy az OpenAI csomag telepítve van: `pip install openai`
- Ellenőrizd, hogy a GITHUB_TOKEN környezeti változó be van állítva
- Ellenőrizd a GitHub Models hozzáférési engedélyeket

**Docsify nem szolgáltat dokumentációt**:
- Telepítsd globálisan a docsify-cli-t: `npm install -g docsify-cli`
- A tárhely gyökeréből futtasd
- Ellenőrizd, hogy a `docs/_sidebar.md` fájl létezik

### Fejlesztési környezeti tippek

- Használj VS Code Live Server bővítményt HTML projektekhez
- Telepítsd az ESLint és Prettier bővítményeket az egységes formázáshoz
- Használd a böngésző DevTools-t JavaScript hibakereséshez
- Vue projektekhez telepítsd a Vue DevTools böngészőbővítményt

### Teljesítmény szempontok

- A sok fordított fájl (50+ nyelv) miatt a teljes klón nagy méretű
- Használj sekély klónt, ha csak tartalmakkal dolgozol: `git clone --depth 1`
- Angol tartalmon dolgozáskor zárd ki a fordításokat a keresésekből
- Build folyamatok lassúak lehetnek az első futtatáskor (npm install, Vite build)

## Biztonsági szempontok

### Környezeti változók

- API kulcsokat soha ne tölts fel a tárhelyre
- Használj `.env` fájlokat (amelyek `.gitignore`-ba vannak véve)
- Dokumentáld a szükséges környezeti változókat a projekt README-kben

### Python projektek

- Használj virtuális környezeteket: `python -m venv venv`
- Tartsd naprakészen a függőségeket
- A GitHub tokeneknek minimális jogosultságokkal kell rendelkezniük

### GitHub Models hozzáférés

- Személyes hozzáférési tokenek (PAT) szükségesek a GitHub Models használatához
- A tokeneket környezeti változóként tárold
- Tokeneket vagy hitelesítő adatokat soha ne tölts fel

## Egyéb megjegyzések

### Célközönség

- Teljesen kezdő webfejlesztők
- Diákok és önálló tanulók
- Tanárok, akik az órákon használják a tananyagot
- A tartalom akadálymentességre és fokozatos készségfejlesztésre lett tervezve

### Oktatási filozófia

- Projektalapú tanulási megközelítés
- Gyakori tudásellenőrzések (kvízek)
- Gyakorlati kódolási feladatok
- Valós alkalmazási példák
- Alapokra fókuszálás a keretrendszerek előtt

### Tárhely karbantartás

- Aktív közösség tanulókból és hozzájárulókból
- Függőségek és tartalom rendszeres frissítése
- Issue-k és viták karbantartói felügyelettel
- Fordítási frissítések automatizáltak GitHub Actions segítségével

### Kapcsolódó források

- [Microsoft Learn modulok](https://docs.microsoft.com/learn/)
- [Student Hub erőforrások](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ajánlott a tanulóknak
- További kurzusok: Generatív AI, Adattudomány, ML, IoT tantervek elérhetők

### Konkrét projektek kezelése

Részletes utasítások az egyes projektekhez a README fájlokban:
- `quiz-app/README.md` - Vue 3 kvíz alkalmazás
- `7-bank-project/README.md` - Banki alkalmazás hitelesítéssel
- `5-browser-extension/README.md` - Böngészőbővítmény fejlesztés
- `6-space-game/README.md` - Vászon alapú játék fejlesztés
- `9-chat-project/README.md` - AI chat asszisztens projekt

### Monorepo szerkezet

Bár nem hagyományos monorepo, ez a tárhely több független projektet tartalmaz:
- Minden lecke önálló
- A projektek nem osztanak meg függőségeket
- Egyes projekteken dolgozhatsz anélkül, hogy másokat érintenél
- Teljes tantervélményhez klónozd az egész tárhelyet

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Jogi nyilatkozat**:
Ezt a dokumentumot a [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordító szolgáltatás segítségével fordítottuk. Habár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum anyanyelvű változata tekintendő hivatalos forrásnak. Fontos információk esetén professzionális, emberi fordítást javasolunk. Nem vállalunk felelősséget semmilyen félreértésért vagy félrepontozásért, amely ebből a fordításból ered.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->