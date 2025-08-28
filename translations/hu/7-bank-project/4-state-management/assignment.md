<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-28T03:35:36+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "hu"
}
-->
# "Tranzakció hozzáadása" párbeszédpanel megvalósítása

## Útmutató

Banki alkalmazásunkból még mindig hiányzik egy fontos funkció: az új tranzakciók rögzítésének lehetősége. 
A korábbi négy leckében tanultakat felhasználva valósítsd meg a "Tranzakció hozzáadása" párbeszédpanelt:

- Adj hozzá egy "Tranzakció hozzáadása" gombot a vezérlőpult oldalán
- Hozz létre egy új oldalt egy HTML sablonnal, vagy használd a JavaScriptet a párbeszédpanel HTML-jének megjelenítésére/elrejtésére anélkül, hogy elhagynád a vezérlőpult oldalt (ehhez használhatod a [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) tulajdonságot vagy CSS osztályokat)
- Gondoskodj a párbeszédpanel [billentyűzet- és képernyőolvasó hozzáférhetőségéről](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/)
- Valósíts meg egy HTML űrlapot az adatok beviteléhez
- Az űrlap adataiból hozz létre JSON adatokat, és küldd el az API-nak
- Frissítsd a vezérlőpult oldalt az új adatokkal

Nézd meg a [szerver API specifikációit](../api/README.md), hogy megtudd, melyik API-t kell meghívnod, és milyen JSON formátumot várnak.

Íme egy példa az elkészült feladat eredményére:

![Példa képernyőkép a "Tranzakció hozzáadása" párbeszédpanelről](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.hu.png)

## Értékelési szempontok

| Kritérium | Kiváló                                                                                          | Megfelelő                                                                                                              | Fejlesztésre szorul                          |
| --------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
|           | A tranzakció hozzáadása teljes mértékben megvalósítva, a leckékben látott legjobb gyakorlatok szerint. | A tranzakció hozzáadása megvalósítva, de nem a leckékben látott legjobb gyakorlatok szerint, vagy csak részben működik. | A tranzakció hozzáadása egyáltalán nem működik. |

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.