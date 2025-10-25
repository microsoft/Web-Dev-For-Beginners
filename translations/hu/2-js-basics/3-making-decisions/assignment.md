<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-24T19:53:02+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "hu"
}
-->
# Döntéshozatal: Diákjegyek feldolgozása

## Tanulási célok

Ebben a feladatban gyakorolhatod az óra során tanult döntéshozatali koncepciókat, miközben egy programot készítesz, amely különböző osztályozási rendszerekből származó diákjegyeket dolgoz fel. `if...else` utasításokat, összehasonlító operátorokat és logikai operátorokat fogsz használni annak meghatározására, hogy mely diákok teljesítik a kurzusaikat.

## A kihívás

Egy olyan iskolában dolgozol, amely nemrég egy másik intézménnyel egyesült. Most két teljesen eltérő osztályozási rendszerből származó diákjegyeket kell feldolgoznod, és meg kell határoznod, hogy mely diákok teljesítenek. Ez tökéletes alkalom a feltételes logika gyakorlására!

### Az osztályozási rendszerek megértése

#### Első osztályozási rendszer (Számok)
- A jegyek 1-től 5-ig terjedő számok
- **Teljesítő jegy**: 3 és afölött (3, 4 vagy 5)
- **Elbukó jegy**: 3 alatt (1 vagy 2)

#### Második osztályozási rendszer (Betűjegyek)
- A jegyek betűket használnak: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Teljesítő jegyek**: `A`, `A-`, `B`, `B-`, `C`, `C-` (az összes felsorolt jegy teljesítő)
- **Megjegyzés**: Ez a rendszer nem tartalmaz bukó jegyeket, mint például `D` vagy `F`

### Feladatod

Az alábbi `allStudents` tömböt kapod, amely az összes diákot és jegyeiket tartalmazza. Készíts egy új `studentsWhoPass` tömböt, amely csak azokat a diákokat tartalmazza, akik a saját osztályozási rendszerük szerint teljesítenek.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Lépésről lépésre megközelítés

1. **Állíts be egy ciklust**, amely végigmegy az `allStudents` tömb minden jegyén
2. **Ellenőrizd a jegy típusát** (szám vagy szöveg?)
3. **Alkalmazd a megfelelő osztályozási rendszer szabályait**:
   - Számok esetén: ellenőrizd, hogy a jegy >= 3
   - Szövegek esetén: ellenőrizd, hogy érvényes teljesítő betűjegy-e
4. **Add hozzá a teljesítő jegyeket** a `studentsWhoPass` tömbhöz

### Hasznos kódtechnikák

Használd az óra során tanult JavaScript koncepciókat:

- **typeof operátor**: `typeof grade === 'number'` annak ellenőrzésére, hogy szám-e
- **Összehasonlító operátorok**: `>=` a számjegyek összehasonlításához
- **Logikai operátorok**: `||` több betűjegy feltétel ellenőrzéséhez
- **if...else utasítások**: különböző osztályozási rendszerek kezelésére
- **Tömb metódusok**: `.push()` a teljesítő jegyek hozzáadásához az új tömbhöz

### Várható kimenet

Amikor futtatod a programot, a `studentsWhoPass` tömbnek ezt kell tartalmaznia: `['A', 'B-', 4, 5]`

**Miért teljesítenek ezek a jegyek:**
- `'A'` és `'B-'` érvényes betűjegyek (ebben a rendszerben minden betűjegy teljesítő)
- `4` és `5` számjegyek >= 3
- `1` és `2` elbuknak, mert számjegyek < 3

## A megoldás tesztelése

Teszteld a kódodat különböző forgatókönyvekkel:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Bónusz kihívások

Miután befejezted az alapfeladatot, próbáld ki ezeket a kiegészítéseket:

1. **Érvényesítés hozzáadása**: Ellenőrizd az érvénytelen jegyeket (például negatív számok vagy érvénytelen betűk)
2. **Statisztikák számítása**: Számold ki, hány diák teljesít és hány bukik
3. **Jegyek átalakítása**: Alakítsd át az összes jegyet egyetlen számos rendszerre (A=5, B=4, C=3, stb.)

## Értékelési szempontok

| Kritérium | Kiváló (4) | Jó (3) | Fejlődő (2) | Kezdő (1) |
|-----------|------------|--------|-------------|-----------|
| **Funkcionalitás** | A program helyesen azonosítja az összes teljesítő jegyet mindkét rendszerből | A program működik kisebb hibákkal vagy szélsőséges esetekkel | A program részben működik, de logikai hibákat tartalmaz | A program jelentős hibákat tartalmaz vagy nem fut |
| **Kódstruktúra** | Tiszta, jól szervezett kód megfelelő if...else logikával | Jó struktúra megfelelő feltételes utasításokkal | Elfogadható struktúra néhány szervezési problémával | Gyenge struktúra, nehezen követhető logika |
| **Koncepciók használata** | Hatékonyan használja az összehasonlító operátorokat, logikai operátorokat és feltételes utasításokat | Jó koncepcióhasználat kisebb hiányosságokkal | Néhány koncepció használata, de hiányoznak kulcselemek | Korlátozott koncepcióhasználat |
| **Problémamegoldás** | Egyértelmű problémaértés és elegáns megoldási megközelítés | Jó problémamegoldási megközelítés szilárd logikával | Megfelelő problémamegoldás némi zavarral | Nem egyértelmű megközelítés, nem mutatja a probléma megértését |

## Beküldési irányelvek

1. **Teszteld a kódodat** alaposan a megadott példákkal
2. **Adj hozzá megjegyzéseket**, amelyek magyarázzák a logikádat, különösen a feltételes utasításoknál
3. **Ellenőrizd, hogy a kimenet** megfelel-e a várt eredményeknek: `['A', 'B-', 4, 5]`
4. **Vedd figyelembe a szélsőséges eseteket**, mint például üres tömbök vagy váratlan adattípusok

> 💡 **Profi tipp**: Kezdd egyszerűen! Először az alapfunkcionalitást készítsd el, majd adj hozzá kifinomultabb funkciókat. Ne feledd, a cél az, hogy gyakorold a döntéshozatali logikát az óra során tanult eszközökkel.

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.