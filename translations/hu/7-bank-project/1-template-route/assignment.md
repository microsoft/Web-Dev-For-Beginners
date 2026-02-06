# Javítsd az útvonalkezelést

## Útmutató

Most, hogy elkészítetted az alapvető útvonalkezelő rendszert, itt az ideje, hogy professzionális funkciókkal bővítsd, amelyek javítják a felhasználói élményt és jobb fejlesztői eszközöket biztosítanak. A valós alkalmazásoknak többre van szükségük, mint egyszerű sablonváltásra – dinamikus oldal címekre, életciklus horgokra és bővíthető architektúrákra van szükségük.

Ebben a feladatban két alapvető funkcióval bővíted az útvonalkezelési megvalósítást, amelyek gyakran megtalálhatók a gyártásban használt webalkalmazásokban. Ezek a fejlesztések kifinomultabbá teszik a banki alkalmazásodat, és alapot biztosítanak a jövőbeli funkciókhoz.

Az útvonalak deklarációja jelenleg csak a használni kívánt sablon ID-t tartalmazza. Azonban egy új oldal megjelenítésekor néha ennél többre van szükség. Javítsuk az útvonalkezelési megvalósítást két további funkcióval:

### Funkció 1: Dinamikus oldal címek
**Cél:** Adj címeket minden sablonnak, és frissítsd az ablak címét az új címmel, amikor a sablon megváltozik.

**Miért fontos ez:**
- **Javítja** a felhasználói élményt azáltal, hogy leíró böngészőfül címeket jelenít meg
- **Növeli** a hozzáférhetőséget képernyőolvasók és segítő technológiák számára  
- **Jobb** könyvjelzőzési és böngészési előzmény kontextust biztosít
- **Követi** a professzionális webfejlesztési legjobb gyakorlatokat

**Megvalósítási megközelítés:**
- **Bővítsd** az útvonalak objektumot, hogy cím információt tartalmazzon minden útvonalhoz
- **Módosítsd** az `updateRoute()` függvényt, hogy dinamikusan frissítse a `document.title`-t
- **Teszteld**, hogy a címek helyesen változnak-e a képernyők közötti navigáció során

### Funkció 2: Útvonal életciklus horgok  
**Cél:** Adj lehetőséget arra, hogy kódot futtassunk a sablonváltás után. Azt szeretnénk, hogy minden alkalommal, amikor a dashboard oldal megjelenik, a fejlesztői konzolban megjelenjen a `'Dashboard is shown'` üzenet.

**Miért fontos ez:**
- **Lehetővé teszi** egyedi logika végrehajtását, amikor bizonyos útvonalak betöltődnek
- **Biztosít** horgokat analitikához, naplózáshoz vagy inicializáló kódhoz
- **Alapot teremt** összetettebb útvonal viselkedésekhez
- **Bemutatja** az observer mintát a webfejlesztésben

**Megvalósítási megközelítés:**
- **Adj hozzá** egy opcionális visszahívó függvény tulajdonságot az útvonal konfigurációkhoz
- **Hajtsd végre** a visszahívó függvényt (ha van) a sablon megjelenítése után
- **Biztosítsd**, hogy a funkció működjön minden olyan útvonal esetében, amelyhez visszahívó van definiálva
- **Teszteld**, hogy a konzol üzenet megjelenik-e, amikor a dashboard oldalra látogatunk

## Értékelési szempontok

| Kritérium | Kiváló                                                                                                                          | Megfelelő                                                                                                                                                                                  | Fejlesztésre szorul                                       |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|           | A két funkció megvalósítva és működik. A címek és kód hozzáadása egy új útvonalhoz az `routes` deklarációban szintén működik.     | A két funkció működik, de a viselkedés kódolva van, és nem konfigurálható az `routes` deklaráción keresztül. Egy harmadik útvonal hozzáadása címekkel és kóddal nem működik vagy részben működik. | Az egyik funkció hiányzik vagy nem működik megfelelően. |

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.