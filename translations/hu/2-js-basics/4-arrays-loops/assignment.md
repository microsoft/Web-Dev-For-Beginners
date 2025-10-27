<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2025-10-24T19:52:15+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "hu"
}
-->
# Tömbök és ciklusok feladat

## Utasítások

Oldd meg az alábbi feladatokat, hogy gyakorold a tömbökkel és ciklusokkal való munkát. Minden feladat az órán tanult fogalmakra épül, és arra ösztönöz, hogy különböző ciklustípusokat és tömbmetódusokat alkalmazz.

### 1. Feladat: Számminta generátor
Készíts egy programot, amely felsorolja az 1-20 közötti minden 3. számot, és kiírja a konzolra.

**Követelmények:**
- Használj egy `for` ciklust egyedi lépésközzel
- Jelenítsd meg a számokat felhasználóbarát formátumban
- Adj hozzá leíró megjegyzéseket, amelyek elmagyarázzák a logikát

**Várható kimenet:**
```
3, 6, 9, 12, 15, 18
```

> **Tipp:** Módosítsd a `for` ciklus iterációs kifejezését, hogy kihagyja a számokat.

### 2. Feladat: Tömb elemzése
Hozz létre egy legalább 8 különböző számot tartalmazó tömböt, és írj függvényeket az adatok elemzésére.

**Követelmények:**
- Hozz létre egy `numbers` nevű tömböt legalább 8 értékkel
- Írj egy `findMaximum()` függvényt, amely visszaadja a legnagyobb számot
- Írj egy `findMinimum()` függvényt, amely visszaadja a legkisebb számot  
- Írj egy `calculateSum()` függvényt, amely visszaadja az összes szám összegét
- Teszteld minden függvényt, és jelenítsd meg az eredményeket

**Bónusz kihívás:** Készíts egy függvényt, amely megtalálja a második legnagyobb számot a tömbben.

### 3. Feladat: Szöveges tömb feldolgozása
Hozz létre egy tömböt a kedvenc filmjeidről/könyveidről/dalaidról, és gyakorold a különböző ciklustípusokat.

**Követelmények:**
- Hozz létre egy tömböt legalább 5 szöveges értékkel
- Használj hagyományos `for` ciklust az elemek számozott megjelenítéséhez (1. Elem neve)
- Használj `for...of` ciklust az elemek nagybetűs megjelenítéséhez
- Használj `forEach()` metódust az összes karakter számolásához és megjelenítéséhez

**Példa kimenet:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### 4. Feladat: Adatszűrés (Haladó)
Készíts egy programot, amely diákokat reprezentáló objektumokat tartalmazó tömböt dolgoz fel.

**Követelmények:**
- Hozz létre egy legalább 5 diák objektumot tartalmazó tömböt, amelynek tulajdonságai: `name`, `age`, `grade`
- Használj ciklusokat, hogy megtaláld a 18 éves vagy annál idősebb diákokat
- Számítsd ki az összes diák átlagos osztályzatát
- Hozz létre egy új tömböt, amely csak a 85 feletti osztályzatú diákokat tartalmazza

**Példa struktúra:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Kód tesztelése

Teszteld a programjaidat az alábbi módokon:
1. Futtasd minden feladatot a böngésződ konzoljában
2. Ellenőrizd, hogy a kimenetek megfelelnek a várt eredményeknek
3. Teszteld különböző adathalmazokkal
4. Ellenőrizd, hogy a kódod kezeli-e a szélsőséges eseteket (üres tömbök, egyetlen elem)

## Beküldési irányelvek

A beküldés tartalmazza:
- Jól kommentált JavaScript kódot minden feladathoz
- Képernyőképeket vagy szöveges kimenetet, amely bemutatja a programok futását
- Rövid magyarázatot arról, hogy melyik ciklustípust választottad az egyes feladatokhoz, és miért

## Értékelési szempontok

| Kritérium | Kiváló (3 pont) | Megfelelő (2 pont) | Fejlesztésre szorul (1 pont) |
| --------- | --------------- | ------------------ | --------------------------- |
| **Funkcionalitás** | Minden feladat helyesen megoldva, beleértve a bónusz kihívásokat | Minden kötelező feladat helyesen működik | Néhány feladat hiányos vagy hibás |
| **Kódminőség** | Tiszta, jól szervezett kód leíró változónevekkel | A kód működik, de lehetne tisztább | A kód rendezetlen vagy nehezen érthető |
| **Megjegyzések** | Átfogó megjegyzések, amelyek elmagyarázzák a logikát és döntéseket | Alapvető megjegyzések jelen vannak | Kevés vagy nincs megjegyzés |
| **Ciklusok használata** | Különböző ciklustípusok megfelelő alkalmazása | Ciklusok helyesen használva, de korlátozott változatosság | Hibás vagy nem hatékony ciklushasználat |
| **Tesztelés** | Alapos tesztelés több forgatókönyvvel | Alapvető tesztelés bemutatva | Kevés bizonyíték a tesztelésre |

## Reflektáló kérdések

A feladatok elvégzése után gondold át:
1. Melyik ciklustípus használata volt a legtermészetesebb, és miért?
2. Milyen kihívásokkal szembesültél a tömbökkel való munka során?
3. Hogyan alkalmazhatók ezek a készségek valós webfejlesztési projektekben?
4. Mit csinálnál másképp, ha optimalizálnod kellene a kódot a teljesítmény érdekében?

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.