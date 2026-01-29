# Kódrefaktorálás és dokumentációs feladat

## Tanulási célok

A feladat elvégzésével gyakorolhatod azokat az alapvető szoftverfejlesztési készségeket, amelyeket a profi fejlesztők nap mint nap használnak. Megtanulod, hogyan szervezd a kódot a fenntarthatóság érdekében, hogyan csökkentsd a duplikációt absztrakcióval, és hogyan dokumentáld a munkádat a jövőbeli fejlesztők (beleértve saját magadat is!) számára.

A tiszta, jól dokumentált kód elengedhetetlen a valós webfejlesztési projektekben, ahol több fejlesztő dolgozik együtt, és a kódbázisok idővel fejlődnek.

## Feladat áttekintése

A banki alkalmazásod `app.js` fájlja jelentősen megnőtt a bejelentkezési, regisztrációs és irányítópult funkciókkal. Itt az ideje, hogy refaktoráld ezt a kódot professzionális fejlesztési gyakorlatok alkalmazásával, hogy javítsd az olvashatóságot, fenntarthatóságot és csökkentsd a duplikációt.

## Utasítások

Refaktoráld a jelenlegi `app.js` kódodat az alábbi három alapvető refaktorálási technika alkalmazásával:

### 1. Konfigurációs konstansok kivonása

**Feladat**: Hozz létre egy konfigurációs szekciót a fájl tetején újrahasznosítható konstansokkal.

**Megvalósítási útmutató:**
- Vonj ki a szerver API alap URL-t (jelenleg több helyen van keménykódolva)
- Hozz létre konstansokat a hibaüzenetekhez, amelyek több funkcióban is megjelennek
- Fontold meg az útvonalak és elemazonosítók kivonását, amelyeket többször használsz

**Példa struktúra:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Egységes kérés funkció létrehozása

**Feladat**: Építs egy újrahasznosítható `sendRequest()` funkciót, amely megszünteti a duplikált kódot a `createAccount()` és `getAccount()` között.

**Követelmények:**
- Kezelje a GET és POST kéréseket
- Tartalmazzon megfelelő hibakezelést
- Támogassa a különböző URL végpontokat
- Fogadjon opcionális kérés törzsadatokat

**Funkció aláírási útmutató:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Professzionális kód dokumentáció hozzáadása

**Feladat**: Dokumentáld a kódodat világos, hasznos megjegyzésekkel, amelyek elmagyarázzák a logika "miértjét".

**Dokumentációs szabványok:**
- Adj funkció dokumentációt, amely elmagyarázza a célját, paramétereit és visszatérési értékeit
- Tartalmazz inline megjegyzéseket a komplex logikához vagy üzleti szabályokhoz
- Csoportosítsd az összefüggő funkciókat szekciófejlécekkel
- Magyarázd el a nem nyilvánvaló kódmintákat vagy böngésző-specifikus megoldásokat

**Példa dokumentációs stílus:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Siker kritériumok

A refaktorált kódodnak az alábbi professzionális fejlesztési gyakorlatokat kell tükröznie:

### Kiemelkedő megvalósítás
- ✅ **Konstansok**: Minden "varázsstring" és URL egyértelműen elnevezett konstansokba van kivonva
- ✅ **DRY elv**: A közös kérés logika egy újrahasznosítható `sendRequest()` funkcióba van összevonva
- ✅ **Dokumentáció**: A funkciók világos JSDoc megjegyzésekkel rendelkeznek, amelyek elmagyarázzák a céljukat és paramétereiket
- ✅ **Szervezés**: A kód logikusan csoportosított szekciófejlécekkel és következetes formázással
- ✅ **Hibakezelés**: Javított hibakezelés az új kérés funkció használatával

### Megfelelő megvalósítás
- ✅ **Konstansok**: A legtöbb ismétlődő érték kivonva, néhány kisebb keménykódolt érték maradt
- ✅ **Faktorálás**: Alapvető `sendRequest()` funkció létrehozva, de nem kezeli az összes szélsőséges esetet
- ✅ **Megjegyzések**: Kulcsfontosságú funkciók dokumentálva, bár néhány magyarázat lehetne részletesebb
- ✅ **Olvashatóság**: A kód általában jól szervezett, néhány területen javítható

### Fejlesztésre szorul
- ❌ **Konstansok**: Sok "varázsstring" és URL továbbra is keménykódolt a fájlban
- ❌ **Duplikáció**: Jelentős kódduplikáció maradt a hasonló funkciók között
- ❌ **Dokumentáció**: Hiányzó vagy nem megfelelő megjegyzések, amelyek nem magyarázzák el a kód célját
- ❌ **Szervezés**: A kód nem rendelkezik egyértelmű struktúrával és logikus csoportosítással

## Refaktorált kód tesztelése

A refaktorálás után győződj meg róla, hogy a banki alkalmazásod továbbra is megfelelően működik:

1. **Teszteld az összes felhasználói folyamatot**: Regisztráció, bejelentkezés, irányítópult megjelenítése és hibakezelés
2. **Ellenőrizd az API hívásokat**: Győződj meg róla, hogy a `sendRequest()` funkció működik mind a fiók létrehozására, mind a lekérésére
3. **Teszteld a hibás forgatókönyveket**: Próbáld ki érvénytelen hitelesítő adatokkal és hálózati hibákkal
4. **Ellenőrizd a konzol kimenetet**: Győződj meg róla, hogy a refaktorálás során nem keletkeztek új hibák

## Beküldési irányelvek

Küldd be a refaktorált `app.js` fájlt az alábbiakkal:
- Világos szekciófejlécek, amelyek szervezik a különböző funkciókat
- Következetes kódformázás és behúzás
- Teljes JSDoc dokumentáció minden funkcióhoz
- Rövid megjegyzés a fájl tetején, amely elmagyarázza a refaktorálási megközelítésedet

**Bónusz kihívás**: Hozz létre egy egyszerű kód dokumentációs fájlt (`CODE_STRUCTURE.md`), amely elmagyarázza az alkalmazásod architektúráját és hogyan működnek együtt a különböző funkciók.

## Valós kapcsolódás

Ez a feladat tükrözi azt a fajta kódkarbantartást, amelyet a profi fejlesztők rendszeresen végeznek. Ipari környezetben:
- **Kódellenőrzések** értékelik az olvashatóságot és fenntarthatóságot, mint ebben a feladatban
- **Technikai adósság** halmozódik fel, ha a kódot nem refaktorálják és dokumentálják rendszeresen
- **Csapatmunka** függ a tiszta, jól dokumentált kódtól, amelyet az új csapattagok is megértenek
- **Hibajavítások** sokkal könnyebbek jól szervezett kódbázisokban, megfelelő absztrakciókkal

Az itt gyakorolt készségek - konstansok kivonása, duplikáció megszüntetése és világos dokumentáció írása - alapvetőek a professzionális szoftverfejlesztésben.

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.