<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-28T03:27:22+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "hu"
}
-->
# Refaktoráld és kommentáld a kódodat

## Útmutató

Ahogy a kódbázisod növekszik, fontos, hogy rendszeresen refaktoráld a kódodat, hogy az hosszú távon is olvasható és karbantartható maradjon. Adj hozzá kommenteket, és refaktoráld az `app.js` fájlt a kódminőség javítása érdekében:

- Emeld ki a konstansokat, például a szerver API alap URL-jét
- Egységesítsd a hasonló kódokat: például létrehozhatsz egy `sendRequest()` függvényt, amely egyesíti a `createAccount()` és a `getAccount()` által használt kódot
- Szervezd át a kódot, hogy könnyebben olvasható legyen, és adj hozzá kommenteket

## Értékelési szempontok

| Kritérium | Kiemelkedő                                                                                                                                                   | Megfelelő                                                                                         | Fejlesztésre szorul                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|           | A kód kommentelt, jól szervezett különböző szekciókba, és könnyen olvasható. A konstansok ki vannak emelve, és egy egységesített `sendRequest()` függvény létre lett hozva. | A kód tiszta, de további kommentekkel, konstansok kiemelésével vagy egységesítéssel még javítható. | A kód rendezetlen, nincs kommentelve, a konstansok nincsenek kiemelve, és nincs egységesítve. |

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.