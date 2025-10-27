<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2025-10-24T20:36:51+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "hu"
}
-->
# Webhely teljesítményének elemzése

## Feladat áttekintése

A teljesítmény elemzése kulcsfontosságú készség a modern webfejlesztők számára. Ebben a feladatban egy valós weboldal átfogó teljesítményvizsgálatát kell elvégezned, böngészőalapú eszközök és harmadik fél által nyújtott szolgáltatások segítségével, hogy azonosítsd a szűk keresztmetszeteket és javaslatokat tegyél optimalizálási stratégiákra.

A feladatod egy részletes teljesítményjelentés elkészítése, amely bemutatja a webes teljesítmény alapelveinek megértését, valamint a professzionális elemző eszközök hatékony használatát.

## Feladat utasításai

**Válassz egy weboldalt** elemzésre - válassz az alábbi lehetőségek közül:
- Egy népszerű weboldal, amelyet gyakran használsz (híroldal, közösségi média, e-kereskedelem)
- Egy nyílt forráskódú projekt weboldala (GitHub oldalak, dokumentációs oldalak)
- Egy helyi vállalkozás weboldala vagy portfólióoldal
- Saját projekted vagy korábbi tanfolyami munkád

**Végezz több eszközzel elemzést**, legalább három különböző megközelítést alkalmazva:
- **Böngésző DevTools** - Használd a Chrome/Edge Performance fület részletes profilozáshoz
- **Online auditáló eszközök** - Próbáld ki a Lighthouse, GTmetrix vagy WebPageTest szolgáltatásokat
- **Hálózati elemzés** - Vizsgáld meg az erőforrások betöltését, fájlméreteket és kérési mintákat

**Dokumentáld az eredményeidet** egy átfogó jelentésben, amely tartalmazza:

### Teljesítménymetrikák elemzése
- **Betöltési idő mérések** több eszköz és nézőpont alapján
- **Core Web Vitals** pontszámok (LCP, FID, CLS) és azok következményei
- **Erőforrás bontás**, amely megmutatja, mely elemek járulnak hozzá leginkább a betöltési időhöz
- **Hálózati vízesés elemzés**, amely azonosítja a blokkoló erőforrásokat

### Probléma azonosítása
- **Konkrét teljesítmény szűk keresztmetszetek** támogató adatokkal
- **Gyökérok elemzés**, amely megmagyarázza, miért fordulnak elő az egyes problémák
- **Felhasználói hatás értékelése**, amely leírja, hogyan érintik a problémák a valódi felhasználókat
- **Problémák prioritási rangsora** súlyosság és javítási nehézség alapján

### Optimalizálási javaslatok
- **Konkrét, cselekvésre alkalmas javítások** várható hatással
- **Megvalósítási stratégiák** minden javasolt változtatáshoz
- **Modern legjobb gyakorlatok**, amelyek alkalmazhatók (lustabetöltés, tömörítés stb.)
- **Eszközök és technikák** a folyamatos teljesítményfigyeléshez

## Kutatási követelmények

**Ne csak böngészőeszközökre támaszkodj** - bővítsd az elemzésedet az alábbiakkal:

**Harmadik fél auditáló szolgáltatások:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Átfogó auditok
- [GTmetrix](https://gtmetrix.com/) - Teljesítmény és optimalizálási betekintések
- [WebPageTest](https://www.webpagetest.org/) - Valós tesztelési körülmények
- [Pingdom](https://tools.pingdom.com/) - Globális teljesítményfigyelés

**Speciális elemző eszközök:**
- [Bundle Analyzer](https://bundlephobia.com/) - JavaScript csomagméret elemzés
- [Képoptimalizáló eszközök](https://squoosh.app/) - Eszközoptimalizálási lehetőségek
- [Biztonsági fejlécek elemzése](https://securityheaders.com/) - Biztonsági teljesítmény hatása

## Leadandó formátuma

Készíts egy professzionális jelentést (2-3 oldal), amely tartalmazza:

1. **Vezetői összefoglaló** - Kulcsfontosságú megállapítások és javaslatok áttekintése
2. **Módszertan** - Használt eszközök és tesztelési megközelítés
3. **Jelenlegi teljesítmény értékelése** - Alapvető metrikák és mérések
4. **Azonosított problémák** - Részletes problémaelemzés támogató adatokkal
5. **Javaslatok** - Prioritást élvező javítási stratégiák
6. **Megvalósítási ütemterv** - Lépésről lépésre optimalizálási terv

**Tartalmazzon vizuális bizonyítékokat:**
- Teljesítményeszközök és metrikák képernyőképei
- Teljesítményadatokat bemutató diagramok vagy grafikonok
- Előtte/utána összehasonlítások, ahol lehetséges
- Hálózati vízesés diagramok és erőforrás bontások

## Értékelési szempontok

| Kritérium | Kiváló (90-100%) | Megfelelő (70-89%) | Fejlesztésre szorul (50-69%) |
| --------- | ---------------- | ------------------ | --------------------------- |
| **Elemzés mélysége** | Átfogó elemzés 4+ eszközzel, részletes metrikák, gyökérok elemzés és felhasználói hatás értékelés | Jó elemzés 3 eszközzel, világos metrikák és alapvető problémaazonosítás | Alapvető elemzés 2 eszközzel, korlátozott mélység és minimális problémaazonosítás |
| **Eszközök sokszínűsége** | Böngészőeszközök + 3+ harmadik fél szolgáltatás összehasonlító elemzéssel és betekintésekkel | Böngészőeszközök + 2 harmadik fél szolgáltatás némi összehasonlító elemzéssel | Böngészőeszközök + 1 harmadik fél szolgáltatás korlátozott összehasonlítással |
| **Problémaazonosítás** | 5+ konkrét teljesítményprobléma részletes gyökérok elemzéssel és számszerűsített hatással | 3-4 teljesítményprobléma jó elemzéssel és némi hatásméréssel | 1-2 teljesítményprobléma alapvető elemzéssel |
| **Javaslatok** | Konkrét, cselekvésre alkalmas javaslatok megvalósítási részletekkel, várható hatással és modern legjobb gyakorlatokkal | Jó javaslatok némi megvalósítási útmutatóval és várható eredményekkel | Alapvető javaslatok korlátozott megvalósítási részletekkel |
| **Professzionális bemutatás** | Jól szervezett jelentés világos struktúrával, vizuális bizonyítékokkal, vezetői összefoglalóval és professzionális formázással | Jó szervezés némi vizuális bizonyítékkal és világos struktúrával | Alapvető szervezés minimális vizuális bizonyítékokkal |

## Tanulási eredmények

A feladat elvégzésével bizonyítod, hogy képes vagy:
- **Alkalmazni** professzionális teljesítményelemző eszközöket és módszertanokat
- **Azonosítani** teljesítmény szűk keresztmetszeteket adatvezérelt elemzéssel
- **Elemezni** a kódminőség és a felhasználói élmény közötti kapcsolatot
- **Javaslatot tenni** konkrét, cselekvésre alkalmas optimalizálási stratégiákra
- **Kommunikálni** technikai megállapításokat professzionális formátumban

Ez a feladat megerősíti a leckében tanult teljesítményfogalmakat, miközben gyakorlati készségeket épít, amelyeket webfejlesztői karriered során használni fogsz.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.