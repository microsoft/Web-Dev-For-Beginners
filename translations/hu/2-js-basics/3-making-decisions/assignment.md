<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-28T04:07:27+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "hu"
}
-->
# Operátorok

## Útmutató

Próbáld ki az operátorokat. Íme egy javaslat egy programra, amit megvalósíthatsz:

Van egy halmaz diákokkal, akik két különböző osztályozási rendszerben szerepelnek.

### Első osztályozási rendszer

Az egyik osztályozási rendszerben az osztályzatok 1-5 között vannak, ahol 3 és annál magasabb osztályzat azt jelenti, hogy a diák teljesítette a kurzust.

### Második osztályozási rendszer

A másik osztályozási rendszerben a következő osztályzatok vannak: `A, A-, B, B-, C, C-`, ahol az `A` a legjobb osztályzat, és a `C` a legalacsonyabb, ami még megfelel.

### Feladat

Az alábbi `allStudents` tömböt kapva, amely az összes diákot és azok osztályzatait tartalmazza, készíts egy új tömböt `studentsWhoPass` néven, amely csak azokat a diákokat tartalmazza, akik megfeleltek.

> TIP, használj for-ciklust, if...else-t és összehasonlító operátorokat:

```javascript
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
```

## Értékelési szempontok

| Kritérium | Kiemelkedő                     | Megfelelő                     | Fejlesztésre szorul             |
| --------- | ------------------------------ | ----------------------------- | ------------------------------- |
|           | Teljes megoldás bemutatva      | Részleges megoldás bemutatva  | Hibás megoldás bemutatva        |

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális, emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.