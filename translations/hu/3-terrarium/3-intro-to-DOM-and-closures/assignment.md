<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "947ca5ce7c94aee9c7de7034e762bc17",
  "translation_date": "2025-10-24T20:13:46+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/assignment.md",
  "language_code": "hu"
}
-->
# DOM Elemzés Feladat

## Áttekintés

Most, hogy első kézből megtapasztaltad a DOM manipuláció erejét, itt az ideje, hogy felfedezd a DOM interfészek szélesebb világát. Ez a feladat elmélyíti a megértésedet arról, hogyan működnek együtt a különböző webes technológiák a DOM-mal, nem csupán elemek mozgatásán keresztül.

## Tanulási célok

A feladat elvégzésével:
- **Kutatod** és mélyebben megérted egy konkrét DOM interfészt
- **Elemzed** a DOM manipuláció valós példáit
- **Kapcsolatot teremtesz** az elméleti koncepciók és gyakorlati alkalmazások között
- **Fejleszted** a technikai dokumentáció és elemzés készségeidet

## Útmutató

### 1. lépés: Válassz egy DOM interfészt

Látogass el az MDN átfogó [DOM interfészek listájára](https://developer.mozilla.org/docs/Web/API/Document_Object_Model), és válassz egy olyan interfészt, amely érdekel. Érdemes az alábbi kategóriákból választani a változatosság érdekében:

**Kezdőbarát lehetőségek:**
- `Element.classList` - CSS osztályok dinamikus kezelése
- `Document.querySelector()` - Haladó elem kiválasztás
- `Element.addEventListener()` - Eseménykezelés a mutató eseményeken túl
- `Window.localStorage` - Adattárolás kliensoldalon

**Középhaladó kihívások:**
- `Intersection Observer API` - Elem láthatóságának érzékelése
- `MutationObserver` - DOM változások figyelése
- `Drag and Drop API` - Alternatíva a mutató-alapú megközelítéshez
- `Geolocation API` - Felhasználó helyének elérése

**Haladó felfedezés:**
- `Web Components` - Egyedi elemek és shadow DOM
- `Canvas API` - Programozott grafika
- `Web Workers` - Háttérfeldolgozás
- `Service Workers` - Offline funkcionalitás

### 2. lépés: Kutatás és dokumentáció

Készíts egy átfogó elemzést (300-500 szó), amely tartalmazza:

#### Technikai áttekintés
- **Határozd meg**, hogy mit csinál az általad választott interfész, egyszerű, kezdőbarát nyelvezettel
- **Magyarázd el** a kulcsfontosságú metódusokat, tulajdonságokat vagy eseményeket, amelyeket biztosít
- **Írd le**, milyen problémák megoldására tervezték

#### Valós alkalmazás
- **Keress** egy weboldalt, amely használja az általad választott interfészt (vizsgáld meg a kódot vagy kutass példákat)
- **Dokumentáld** a konkrét megvalósítást, ha lehetséges, kódrészletekkel
- **Elemezd**, miért választották ezt a megközelítést a fejlesztők
- **Magyarázd el**, hogyan javítja ez a felhasználói élményt

#### Gyakorlati alkalmazás
- **Hasonlítsd össze** az interfészt a terrárium projektben használt technikákkal
- **Javasold**, hogyan javíthatná vagy bővíthetné az interfész a terrárium funkcionalitását
- **Azonosíts** más projekteket, ahol ez az interfész értékes lehetne

### 3. lépés: Kódpélda

Tartalmazz egy egyszerű, működő kódpéldát, amely bemutatja az interfész működését. Ennek:
- **Működőképesnek** kell lennie - A kódnak ténylegesen működnie kell teszteléskor
- **Kommentált** - Magyarázd el, mit csinál az egyes részek
- **Relevánsnak** - Kapcsolódnia kell egy valós használati esethez
- **Kezdőbarátnak** - Érthetőnek kell lennie egy webfejlesztést tanuló számára

## Beküldési formátum

Strukturáld a beküldésedet egyértelmű címsorokkal:

```markdown
# [Interface Name] DOM Investigation

## What It Does
[Technical overview]

## Real-World Example
[Website analysis and implementation details]

## Code Demonstration
[Your working example with comments]

## Reflection
[How this connects to our terrarium project and future applications]
```

## Értékelési szempontok

| Kritérium | Kiváló (A) | Jó (B) | Fejlődő (C) | Fejlesztésre szorul (D) |
|-----------|------------|--------|-------------|-------------------------|
| **Technikai megértés** | Mély megértést mutat pontos magyarázatokkal és megfelelő terminológiával | Szilárd megértést mutat, többnyire pontos magyarázatokkal | Alapvető megértés néhány téves elképzeléssel | Korlátozott megértés jelentős hibákkal |
| **Valós elemzés** | Azonosítja és alaposan elemzi a tényleges megvalósítást konkrét példákkal | Talál valós példát megfelelő elemzéssel | Talál példát, de az elemzés nem elég mély | Homályos vagy pontatlan valós kapcsolat |
| **Kódpélda** | Működő, jól kommentált kód, amely egyértelműen bemutatja az interfészt | Működő kód megfelelő kommentekkel | A kód működik, de jobb dokumentációra lenne szükség | A kód hibás vagy rosszul magyarázott |
| **Írásminőség** | Tiszta, érdekfeszítő írás megfelelő struktúrával és technikai kommunikációval | Jól szervezett, jó technikai írás | Megfelelő szervezettség és érthetőség | Gyenge szervezettség vagy homályos kommunikáció |
| **Kritikai gondolkodás** | Éleslátó kapcsolatokat teremt a koncepciók között, és innovatív alkalmazásokat javasol | Jó analitikus gondolkodást és releváns kapcsolatokat mutat | Néhány elemzés jelen van, de lehetne mélyebb | Korlátozott kritikai gondolkodás bizonyítéka |

## Tippek a sikerhez

**Kutatási stratégiák:**
- **Kezdd** az MDN dokumentációval, hogy megbízható információkat kapj
- **Keress** kódpéldákat a GitHubon vagy a CodePen-en
- **Ellenőrizd** népszerű weboldalakat böngésző fejlesztői eszközökkel
- **Nézz** oktatóvideókat vizuális magyarázatokért

**Írási irányelvek:**
- **Használj** saját szavakat, ne másold a dokumentációt
- **Tartalmazz** konkrét példákat és kódrészleteket
- **Magyarázd el** a technikai koncepciókat úgy, mintha egy barátodnak tanítanád
- **Kapcsolódj** az interfészhez szélesebb webfejlesztési kontextusban

**Kódpélda ötletek:**
- **Készíts** egy egyszerű demót, amely bemutatja az interfész fő funkcióit
- **Építs** a terrárium projekt koncepcióira, ahol releváns
- **Koncentrálj** a funkcionalitásra a vizuális dizájn helyett
- **Teszteld** a kódot, hogy biztosan helyesen működjön

## Beküldési határidő

[Írd be a határidőt]

## Kérdések?

Ha bármilyen kérdésed van a feladattal kapcsolatban, ne habozz kérdezni! Ez az elemzés elmélyíti a megértésedet arról, hogyan teszi lehetővé a DOM az interaktív webes élményeket, amelyeket nap mint nap használunk.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.