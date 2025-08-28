<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-28T03:38:13+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "hu"
}
-->
# Javítsuk a routingot

## Útmutató

A jelenlegi útvonalak deklarációja csak a használni kívánt sablon azonosítóját tartalmazza. Azonban egy új oldal megjelenítésekor néha ennél többre van szükség. Fejlesszük tovább a routing megvalósítását két további funkcióval:

- Adjunk címeket minden sablonnak, és frissítsük az ablak címét az új címmel, amikor a sablon megváltozik.
- Adjunk hozzá egy lehetőséget, hogy kódot futtassunk a sablon megváltozása után. Azt szeretnénk, hogy minden alkalommal, amikor a dashboard oldal megjelenik, a fejlesztői konzolban megjelenjen a következő üzenet: `'Dashboard is shown'`.

## Értékelési szempontok

| Kritérium | Kiváló                                                                                                                             | Megfelelő                                                                                                                                                                                 | Fejlesztésre szorul                                      |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|           | A két funkció megvalósítva és működik. A cím és a kód hozzáadása egy új útvonalhoz a `routes` deklarációban szintén működik.         | A két funkció működik, de a viselkedés hardkódolt, és nem konfigurálható a `routes` deklaráción keresztül. Egy harmadik útvonal hozzáadása címmel és kóddal nem működik, vagy csak részben. | Az egyik funkció hiányzik vagy nem működik megfelelően. |

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.