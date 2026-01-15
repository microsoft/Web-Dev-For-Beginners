<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2025-10-24T20:19:29+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "hu"
}
-->
# "Tranzakció hozzáadása" párbeszédablak megvalósítása

## Áttekintés

A banki alkalmazásod már rendelkezik stabil állapotkezeléssel és adatmegőrzéssel, de hiányzik egy kulcsfontosságú funkció, amelyre minden valódi banki alkalmazásnak szüksége van: a felhasználók saját tranzakcióik hozzáadásának lehetősége. Ebben a feladatban egy teljes "Tranzakció hozzáadása" párbeszédablakot fogsz megvalósítani, amely zökkenőmentesen integrálódik a meglévő állapotkezelési rendszeredbe.

Ez a feladat összefoglalja mindazt, amit a négy banki leckében tanultál: HTML sablonkészítés, űrlapkezelés, API integráció és állapotkezelés.

## Tanulási célok

A feladat elvégzésével:
- **Létrehozol** egy felhasználóbarát párbeszédablakot az adatok beviteléhez
- **Megvalósítasz** egy akadálymentes űrlaptervezést billentyűzet- és képernyőolvasó-támogatással
- **Integrálod** az új funkciókat a meglévő állapotkezelési rendszeredbe
- **Gyakorlod** az API kommunikációt és a hibakezelést
- **Alkalmazod** a modern webfejlesztési mintákat egy valós funkció megvalósításához

## Útmutató

### 1. lépés: Tranzakció hozzáadása gomb

**Hozz létre** egy "Tranzakció hozzáadása" gombot a vezérlőpulton, amelyet a felhasználók könnyen megtalálhatnak és elérhetnek.

**Követelmények:**
- **Helyezd el** a gombot logikus helyen a vezérlőpulton
- **Használj** egyértelmű, cselekvésre ösztönző gombszöveget
- **Stilizáld** a gombot úgy, hogy illeszkedjen a meglévő UI dizájnhoz
- **Biztosítsd**, hogy a gomb billentyűzettel is elérhető legyen

### 2. lépés: Párbeszédablak megvalósítása

Válassz az alábbi két megközelítés közül a párbeszédablak megvalósításához:

**A opció: Külön oldal**
- **Hozz létre** egy új HTML sablont a tranzakciós űrlaphoz
- **Adj hozzá** egy új útvonalat az útvonalkezelő rendszeredhez
- **Valósítsd meg** a navigációt az űrlap oldalára és vissza

**B opció: Modal párbeszédablak (Ajánlott)**
- **Használj** JavaScriptet a párbeszédablak megjelenítéséhez/elrejtéséhez anélkül, hogy elhagynád a vezérlőpultot
- **Valósítsd meg** a [`hidden` tulajdonság](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) vagy CSS osztályok használatával
- **Hozz létre** egy zökkenőmentes felhasználói élményt megfelelő fókuszkezeléssel

### 3. lépés: Akadálymentesség megvalósítása

**Biztosítsd**, hogy a párbeszédablak megfeleljen a [modal párbeszédablakok akadálymentességi szabványainak](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Billentyűzet navigáció:**
- **Támogasd** az Escape billentyűt a párbeszédablak bezárásához
- **Zárd** a fókuszt a párbeszédablakban, amikor az nyitva van
- **Állítsd vissza** a fókuszt az aktiváló gombra, amikor bezárul

**Képernyőolvasó támogatás:**
- **Adj hozzá** megfelelő ARIA címkéket és szerepeket
- **Jelentsd** a párbeszédablak megnyitását/bezárását a képernyőolvasóknak
- **Biztosítsd** az űrlapmezők egyértelmű címkéit és hibaüzeneteit

### 4. lépés: Űrlap létrehozása

**Tervezd meg** egy HTML űrlapot, amely tranzakciós adatokat gyűjt:

**Kötelező mezők:**
- **Dátum**: Mikor történt a tranzakció
- **Leírás**: Mire vonatkozott a tranzakció
- **Összeg**: Tranzakció értéke (pozitív bevétel esetén, negatív kiadás esetén)

**Űrlap funkciók:**
- **Ellenőrizd** a felhasználói bemenetet beküldés előtt
- **Adj meg** egyértelmű hibaüzeneteket érvénytelen adatok esetén
- **Tartalmazz** hasznos helyőrző szöveget és címkéket
- **Stilizáld** az űrlapot úgy, hogy illeszkedjen a meglévő dizájnhoz

### 5. lépés: API integráció

**Kapcsold össze** az űrlapot a backend API-val:

**Megvalósítási lépések:**
- **Tekintsd át** a [szerver API specifikációit](../api/README.md) a megfelelő végpont és adatformátum érdekében
- **Hozz létre** JSON adatokat az űrlap bemeneteiből
- **Küldd el** az adatokat az API-nak megfelelő hibakezeléssel
- **Jelenítsd meg** a sikeres/sikertelen üzeneteket a felhasználónak
- **Kezeld** a hálózati hibákat zökkenőmentesen

### 6. lépés: Állapotkezelés integrációja

**Frissítsd** a vezérlőpultot az új tranzakcióval:

**Integrációs követelmények:**
- **Frissítsd** a fiókadatokat a tranzakció sikeres hozzáadása után
- **Frissítsd** a vezérlőpult megjelenítését oldal újratöltése nélkül
- **Biztosítsd**, hogy az új tranzakció azonnal megjelenjen
- **Tartsd fenn** az állapot konzisztenciáját a folyamat során

## Műszaki specifikációk

**API végpont részletei:**
Tekintsd meg a [szerver API dokumentációját](../api/README.md) az alábbiakhoz:
- A tranzakciós adatokhoz szükséges JSON formátum
- HTTP metódus és végpont URL
- Várható válaszformátum
- Hibaválaszok kezelése

**Várható eredmény:**
A feladat elvégzése után a banki alkalmazásodnak teljesen működőképes "Tranzakció hozzáadása" funkcióval kell rendelkeznie, amely professzionálisan néz ki és működik:

![Példa "Tranzakció hozzáadása" párbeszédablakot bemutató képernyőkép](../../../../translated_images/hu/dialog.93bba104afeb79f1.png)

## Az implementáció tesztelése

**Funkcionális tesztelés:**
1. **Ellenőrizd**, hogy a "Tranzakció hozzáadása" gomb jól látható és elérhető
2. **Teszteld**, hogy a párbeszédablak megfelelően nyílik és záródik
3. **Győződj meg**, hogy az űrlap validációja működik minden kötelező mező esetében
4. **Ellenőrizd**, hogy a sikeres tranzakciók azonnal megjelennek a vezérlőpulton
5. **Biztosítsd**, hogy a hibakezelés működik érvénytelen adatok és hálózati problémák esetén

**Akadálymentességi tesztelés:**
1. **Navigálj** végig az egész folyamaton csak a billentyűzet használatával
2. **Teszteld** képernyőolvasóval, hogy megfelelően történnek-e a bejelentések
3. **Ellenőrizd**, hogy a fókuszkezelés helyesen működik
4. **Győződj meg**, hogy minden űrlapelem rendelkezik megfelelő címkével

## Értékelési szempontok

| Kritérium | Kiváló | Megfelelő | Fejlesztésre szorul |
| --------- | ------- | --------- | ------------------- |
| **Funkcionalitás** | A tranzakció hozzáadása funkció hibátlanul működik, kiváló felhasználói élményt nyújt, és követi az összes legjobb gyakorlatot a leckékből | A tranzakció hozzáadása funkció helyesen működik, de nem követ minden legjobb gyakorlatot, vagy kisebb használhatósági problémái vannak | A tranzakció hozzáadása funkció részben működik, vagy jelentős használhatósági problémái vannak |
| **Kódminőség** | A kód jól szervezett, követi a bevált mintákat, megfelelő hibakezelést tartalmaz, és zökkenőmentesen integrálódik a meglévő állapotkezelésbe | A kód működik, de lehetnek szervezési problémák vagy következetlenségek a meglévő kódbázissal | A kód jelentős szerkezeti problémákkal rendelkezik, vagy nem integrálódik jól a meglévő mintákhoz |
| **Akadálymentesség** | Teljes billentyűzet-navigációs támogatás, képernyőolvasó kompatibilitás, és megfelel a WCAG irányelveknek kiváló fókuszkezeléssel | Alapvető akadálymentességi funkciók megvalósítva, de hiányozhat néhány billentyűzet-navigációs vagy képernyőolvasó funkció | Korlátozott vagy nincs akadálymentességi szempont figyelembe véve |
| **Felhasználói élmény** | Intuitív, kifinomult felület egyértelmű visszajelzéssel, zökkenőmentes interakciókkal és professzionális megjelenéssel | Jó felhasználói élmény kisebb visszajelzési vagy vizuális tervezési javítási lehetőségekkel | Gyenge felhasználói élmény zavaros felülettel vagy visszajelzés hiányával |

## További kihívások (Opcionális)

Miután teljesítetted az alapkövetelményeket, fontold meg ezeket a fejlesztéseket:

**Fejlett funkciók:**
- **Adj hozzá** tranzakciós kategóriákat (étel, közlekedés, szórakozás stb.)
- **Valósítsd meg** bemeneti validációt valós idejű visszajelzéssel
- **Hozz létre** billentyűparancsokat haladó felhasználók számára
- **Adj hozzá** tranzakciós szerkesztési és törlési lehetőségeket

**Haladó integráció:**
- **Valósítsd meg** visszavonási funkciót a nemrég hozzáadott tranzakciókhoz
- **Adj hozzá** tömeges tranzakció importálási lehetőséget CSV fájlokból
- **Hozz létre** tranzakció keresési és szűrési funkciókat
- **Valósítsd meg** adatexportálási funkciót

Ezek az opcionális funkciók segítenek abban, hogy gyakorold a fejlettebb webfejlesztési koncepciókat, és egy teljesebb banki alkalmazást hozz létre!

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.