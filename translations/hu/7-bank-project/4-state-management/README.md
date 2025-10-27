<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-24T20:18:28+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "hu"
}
-->
# Banki Alkalmazás Készítése 4. rész: Állapotkezelési Koncepciók

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/47)

## Bevezetés

Az állapotkezelés olyan, mint a Voyager űrszonda navigációs rendszere – amikor minden zökkenőmentesen működik, alig veszed észre, hogy ott van. De amikor valami elromlik, az különbséget jelenthet az intersztelláris tér elérése és a kozmikus ürességben való elveszés között. A webfejlesztésben az állapot mindazt jelenti, amit az alkalmazásnak meg kell jegyeznie: a felhasználó bejelentkezési állapotát, űrlapadatokat, navigációs előzményeket és ideiglenes felületállapotokat.

Ahogy a banki alkalmazásod egy egyszerű bejelentkezési űrlapból egy kifinomultabb alkalmazássá fejlődött, valószínűleg találkoztál néhány gyakori kihívással. Frissítsd az oldalt, és a felhasználók váratlanul kijelentkeznek. Zárd be a böngészőt, és minden előrehaladás eltűnik. Hibakeresés közben több funkciót kell átnézned, amelyek mind különböző módon módosítják ugyanazt az adatot.

Ezek nem a rossz kódolás jelei – ezek a természetes növekedési fájdalmak, amelyek akkor jelentkeznek, amikor az alkalmazások elérnek egy bizonyos komplexitási küszöböt. Minden fejlesztő szembesül ezekkel a kihívásokkal, amikor az alkalmazásaik a "koncepció bizonyítása" szakaszból a "gyártásra kész" szakaszba lépnek.

Ebben a leckében egy központosított állapotkezelési rendszert fogunk megvalósítani, amely megbízható, professzionális alkalmazássá alakítja a banki alkalmazásodat. Megtanulod az adatfolyamok kiszámítható kezelését, a felhasználói munkamenetek megfelelő megőrzését, és a modern webalkalmazások által megkövetelt zökkenőmentes felhasználói élmény létrehozását.

## Előfeltételek

Mielőtt belevágnánk az állapotkezelési koncepciókba, szükséged lesz arra, hogy a fejlesztési környezeted megfelelően be legyen állítva, és a banki alkalmazásod alapjai készen álljanak. Ez a lecke közvetlenül az előző részekben bemutatott koncepciókra és kódokra épül.

Győződj meg róla, hogy a következő komponensek készen állnak:

**Szükséges beállítások:**
- Fejezd be az [adatlekérési leckét](../3-data/README.md) – az alkalmazásodnak sikeresen be kell töltenie és meg kell jelenítenie a számlaadatait
- Telepítsd a [Node.js](https://nodejs.org) rendszert a backend API futtatásához
- Indítsd el helyben a [szerver API-t](../api/README.md), hogy kezelje a számlaadatokkal kapcsolatos műveleteket

**A környezet tesztelése:**

Ellenőrizd, hogy az API szerver helyesen működik-e, az alábbi parancs végrehajtásával a terminálban:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Mit csinál ez a parancs:**
- **GET kérést küld** a helyi API szervernek
- **Teszteli** a kapcsolatot és ellenőrzi, hogy a szerver válaszol-e
- **Visszaadja** az API verzióinformációit, ha minden helyesen működik

---

## A jelenlegi állapotproblémák diagnosztizálása

Mint Sherlock Holmes, amikor egy bűnügyi helyszínt vizsgál, pontosan meg kell értenünk, mi történik a jelenlegi megvalósításunkban, mielőtt megoldhatnánk az eltűnő felhasználói munkamenetek rejtélyét.

Végezzünk el egy egyszerű kísérletet, amely feltárja az alapvető állapotkezelési kihívásokat:

**🧪 Próbáld ki ezt a diagnosztikai tesztet:**
1. Jelentkezz be a banki alkalmazásodba, és navigálj a vezérlőpultodra
2. Frissítsd a böngészőoldalt
3. Figyeld meg, mi történik a bejelentkezési állapotoddal

Ha visszairányítanak a bejelentkezési képernyőre, akkor felfedezted a klasszikus állapotmegőrzési problémát. Ez a viselkedés azért fordul elő, mert a jelenlegi megvalósításunk a felhasználói adatokat JavaScript változókban tárolja, amelyek minden oldalbetöltéskor visszaállnak.

**A jelenlegi megvalósítás problémái:**

A [korábbi leckében](../3-data/README.md) bemutatott egyszerű `account` változó három jelentős problémát okoz, amelyek hatással vannak a felhasználói élményre és a kód karbantarthatóságára:

| Probléma | Technikai ok | Felhasználói hatás |
|---------|--------|----------------|
| **Munkamenet elvesztése** | Az oldalfrissítés törli a JavaScript változókat | A felhasználóknak gyakran újra kell hitelesíteniük |
| **Szétszórt frissítések** | Több funkció közvetlenül módosítja az állapotot | A hibakeresés egyre nehezebbé válik |
| **Hiányos tisztítás** | A kijelentkezés nem törli az összes állapothivatkozást | Biztonsági és adatvédelmi aggályok |

**Az architekturális kihívás:**

Mint a Titanic rekeszes kialakítása, amely robusztusnak tűnt, amíg több rekesz egyszerre el nem árasztódott, ezeknek a problémáknak az egyenkénti javítása nem oldja meg az alapvető architekturális problémát. Átfogó állapotkezelési megoldásra van szükségünk.

> 💡 **Mit próbálunk valójában elérni?**

Az [állapotkezelés](https://en.wikipedia.org/wiki/State_management) valójában két alapvető rejtvény megoldásáról szól:

1. **Hol vannak az adataim?**: Nyomon követni, hogy milyen információink vannak és honnan származnak
2. **Mindenki ugyanazon az oldalon van?**: Biztosítani, hogy amit a felhasználók látnak, az megfeleljen annak, ami valójában történik

**A tervünk:**

Ahelyett, hogy körbe-körbe futnánk, létrehozunk egy **központosított állapotkezelési** rendszert. Gondolj rá úgy, mint egy igazán szervezett személyre, aki felelős minden fontos dologért:

![Séma, amely bemutatja az adatfolyamokat a HTML, a felhasználói műveletek és az állapot között](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.hu.png)

**Az adatfolyam megértése:**
- **Központosítja** az alkalmazás összes állapotát egy helyen
- **Irányítja** az állapotváltozásokat ellenőrzött funkciókon keresztül
- **Biztosítja**, hogy a felhasználói felület szinkronban maradjon az aktuális állapottal
- **Nyújt** egyértelmű, kiszámítható mintát az adatkezeléshez

> 💡 **Szakmai betekintés**: Ez a lecke az alapvető koncepciókra összpontosít. Összetett alkalmazások esetén olyan könyvtárak, mint a [Redux](https://redux.js.org), fejlettebb állapotkezelési funkciókat kínálnak. Ezeknek az alapelveknek a megértése segít bármilyen állapotkezelési könyvtár elsajátításában.

> ⚠️ **Haladó téma**: Nem foglalkozunk az automatikus UI frissítésekkel, amelyeket az állapotváltozások váltanak ki, mivel ez a [Reaktív Programozás](https://en.wikipedia.org/wiki/Reactive_programming) koncepcióit érinti. Tekintsd ezt a tanulási utad következő kiváló lépésének!

### Feladat: Állapotstruktúra központosítása

Kezdjük el átalakítani a szétszórt állapotkezelést egy központosított rendszerbe. Ez az első lépés megalapozza az összes további fejlesztést.

**1. lépés: Hozz létre egy központi állapotobjektumot**

Cseréld le az egyszerű `account` deklarációt:

```js
let account = null;
```

Egy strukturált állapotobjektumra:

```js
let state = {
  account: null
};
```

**Miért fontos ez a változtatás:**
- **Központosítja** az alkalmazás összes adatát egy helyen
- **Előkészíti** a struktúrát további állapottulajdonságok hozzáadására
- **Egyértelmű határt** hoz létre az állapot és más változók között
- **Mintát állít fel**, amely az alkalmazás növekedésével skálázható

**2. lépés: Frissítsd az állapot-hozzáférési mintákat**

Frissítsd a funkcióidat, hogy az új állapotstruktúrát használják:

**A `register()` és `login()` funkciókban**, cseréld le:
```js
account = ...
```

Ezzel:
```js
state.account = ...
```

**Az `updateDashboard()` funkcióban**, add hozzá ezt a sort az elejére:
```js
const account = state.account;
```

**Mit érnek el ezek a frissítések:**
- **Megőrzi** a meglévő funkcionalitást, miközben javítja a struktúrát
- **Előkészíti** a kódot a kifinomultabb állapotkezelésre
- **Konzisztens mintákat** hoz létre az állapotadatok eléréséhez
- **Megalapozza** a központosított állapotfrissítéseket

> 💡 **Megjegyzés**: Ez az átalakítás nem oldja meg azonnal a problémáinkat, de létrehozza az alapvető alapot a következő erőteljes fejlesztésekhez!

## Ellenőrzött állapotfrissítések megvalósítása

Az állapot központosításával a következő lépés az adatváltoztatások ellenőrzött mechanizmusainak létrehozása. Ez az eljárás biztosítja a kiszámítható állapotváltozásokat és az egyszerűbb hibakeresést.

Az alapelv hasonlít a légi irányításhoz: ahelyett, hogy több funkciót engednénk az állapot független módosítására, minden változást egyetlen, ellenőrzött funkción keresztül irányítunk. Ez a minta egyértelmű felügyeletet biztosít arról, hogy mikor és hogyan történnek az adatváltozások.

**Változatlan állapotkezelés:**

Az `state` objektumunkat [*változatlannak*](https://en.wikipedia.org/wiki/Immutable_object) fogjuk kezelni, ami azt jelenti, hogy soha nem módosítjuk közvetlenül. Ehelyett minden változás egy új állapotobjektumot hoz létre a frissített adatokkal.

Bár ez a megközelítés kezdetben hatástalannak tűnhet a közvetlen módosításokhoz képest, jelentős előnyöket nyújt a hibakeresés, tesztelés és az alkalmazás kiszámíthatóságának fenntartása terén.

**A változatlan állapotkezelés előnyei:**

| Előny | Leírás | Hatás |
|---------|-------------|--------|
| **Kiszámíthatóság** | A változások csak ellenőrzött funkciókon keresztül történnek | Könnyebb hibakeresés és tesztelés |
| **Történetkövetés** | Minden állapotváltozás új objektumot hoz létre | Lehetővé teszi a visszavonás/újra funkciót |
| **Mellékhatások megelőzése** | Nincsenek véletlen módosítások | Megakadályozza a rejtélyes hibákat |
| **Teljesítményoptimalizálás** | Könnyen észlelhető, amikor az állapot ténylegesen megváltozott | Hatékony UI frissítéseket tesz lehetővé |

**JavaScript változatlanság az `Object.freeze()` segítségével:**

A JavaScript az [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) segítségével megakadályozza az objektum módosítását:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Mi történik itt:**
- **Megakadályozza** a közvetlen tulajdonság-hozzárendeléseket vagy törléseket
- **Kivételt dob**, ha módosítási kísérletek történnek
- **Biztosítja**, hogy az állapotváltozások ellenőrzött funkciókon keresztül történjenek
- **Egyértelmű szerződést hoz létre**, hogy az állapot hogyan frissíthető

> 💡 **Mélyebb betekintés**: Ismerd meg a különbséget a *sekély* és *mély* változatlan objektumok között az [MDN dokumentációban](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Ennek a különbségnek a megértése kulcsfontosságú az összetett állapotstruktúrák esetében.

### Feladat

Hozz létre egy új `updateState()` funkciót:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Ebben a funkcióban egy új állapotobjektumot hozunk létre, és az előző állapotból másoljuk az adatokat a [*spread (`...`) operátor*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals) segítségével. Ezután felülírunk egy adott állapottulajdonságot az új adatokkal a [zárójel notáció](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` használatával. Végül zároljuk az objektumot, hogy megakadályozzuk a módosításokat az `Object.freeze()` segítségével. Jelenleg csak az `account` tulajdonságot tároljuk az állapotban, de ezzel a megközelítéssel annyi tulajdonságot adhatsz hozzá az állapothoz, amennyire szükséged van.

Frissítsd az `state` inicializálását is, hogy az inicializált állapot is zárolva legyen:

```js
let state = Object.freeze({
  account: null
});
```

Ezután frissítsd a `register` funkciót, cseréld le a `state.account = result;` hozzárendelést:

```js
updateState('account', result);
```

Ugyanezt tedd a `login` funkcióval, cseréld le a `state.account = data;` hozzárendelést:

```js
updateState('account', data);
```

Most kihasználjuk az alkalmat, hogy kijavítsuk azt a problémát, hogy a számlaadatai nem törlődnek, amikor a felhasználó a *Kijelentkezés* gombra kattint.

Hozz létre egy új `logout()` funkciót:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Az `updateDashboard()`-ban cseréld le az átirányítást `return navigate('/login');` helyett `return logout();`-ra;

Próbálj meg regisztrálni egy új fiókot, kijelentkezni, majd újra bejelentkezni, hogy ellenőrizd, minden továbbra is helyesen működik-e.

> Tipp: Megnézheted az összes állapotváltozást, ha hozzáadod a `console.log(state)` sort az `updateState()` aljára, és megnyitod a böngésző fejlesztői eszközeinek konzolját.

## Adatmegőrzés megvalósítása

Az előzőekben azonosított munkamenet-vesztési probléma megoldásához olyan megőrzési megoldásra van szükség, amely fenntartja a felhasználói állapotot a böngésző munkamenetei között. Ez az alkalmazásodat egy ideiglenes élményből megbízható, professzionális eszközzé alakítja.

Gondolj arra, hogyan tartják az atomórák pontos időt még áramszünetek esetén is, kritikus állapot
> 💡 **Haladó opció**: Összetett offline alkalmazásokhoz nagy adatállományokkal fontolja meg az [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) használatát. Ez egy teljes kliensoldali adatbázist biztosít, de bonyolultabb megvalósítást igényel.

### Feladat: Implementálja a localStorage perzisztenciát

Valósítsuk meg a perzisztens tárolást, hogy a felhasználók bejelentkezve maradjanak, amíg kifejezetten ki nem jelentkeznek. A `localStorage`-t fogjuk használni az account adatok böngésző munkamenetek közötti tárolására.

**1. lépés: Tárolási konfiguráció meghatározása**

```js
const storageKey = 'savedAccount';
```

**Mit biztosít ez a konstans:**
- **Létrehoz** egy következetes azonosítót a tárolt adatokhoz
- **Megelőzi** a tárolási kulcs hivatkozások elírásait
- **Egyszerűvé teszi** a tárolási kulcs megváltoztatását, ha szükséges
- **Követi** a fenntartható kódolás legjobb gyakorlatait

**2. lépés: Automatikus perzisztencia hozzáadása**

Adja hozzá ezt a sort az `updateState()` függvény végéhez:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Mi történik itt:**
- **Átalakítja** az account objektumot JSON stringgé a tároláshoz
- **Elmenti** az adatokat a következetes tárolási kulcs használatával
- **Automatikusan végrehajtja**, amikor állapotváltozások történnek
- **Biztosítja**, hogy a tárolt adatok mindig szinkronban legyenek az aktuális állapottal

> 💡 **Architektúra előnye**: Mivel az összes állapotfrissítést az `updateState()`-en keresztül központosítottuk, a perzisztencia hozzáadása csak egy sor kódot igényelt. Ez jól mutatja a jó architektúra erejét!

**3. lépés: Állapot visszaállítása az alkalmazás betöltésekor**

Hozzon létre egy inicializáló függvényt a mentett adatok visszaállításához:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

**Az inicializálási folyamat megértése:**
- **Lekéri** a korábban mentett account adatokat a localStorage-ból
- **JSON stringet** visszaalakítja JavaScript objektummá
- **Frissíti** az állapotot a kontrollált frissítési függvény használatával
- **Automatikusan visszaállítja** a felhasználó munkamenetét az oldal betöltésekor
- **A route frissítések előtt hajtja végre**, hogy az állapot elérhető legyen

**4. lépés: Alapértelmezett útvonal optimalizálása**

Frissítse az alapértelmezett útvonalat, hogy kihasználja a perzisztenciát:

Az `updateRoute()`-ban cserélje ki:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Miért van értelme ennek a változtatásnak:**
- **Hatékonyan kihasználja** az új perzisztencia rendszert
- **Lehetővé teszi**, hogy a dashboard kezelje az autentikációs ellenőrzéseket
- **Automatikusan átirányít** a bejelentkezéshez, ha nincs mentett munkamenet
- **Zökkenőmentesebb felhasználói élményt teremt**

**Az implementáció tesztelése:**

1. Jelentkezzen be a banki alkalmazásba
2. Frissítse a böngésző oldalt
3. Ellenőrizze, hogy bejelentkezve maradt-e és a dashboardon van-e
4. Zárja be és nyissa meg újra a böngészőt
5. Lépjen vissza az alkalmazásba, és győződjön meg róla, hogy továbbra is be van jelentkezve

🎉 **Elért eredmény**: Sikeresen implementálta a perzisztens állapotkezelést! Az alkalmazása most már úgy viselkedik, mint egy professzionális webalkalmazás.

## Perzisztencia és adatfrissesség egyensúlya

A perzisztencia rendszer sikeresen fenntartja a felhasználói munkameneteket, de új kihívást vezet be: az adatok elavulását. Amikor több felhasználó vagy alkalmazás módosítja ugyanazt a szerver adatot, a helyi gyorsítótár információi elavulttá válnak.

Ez a helyzet hasonlít a viking navigátorokhoz, akik tárolt csillagtérképekre és aktuális csillagászati megfigyelésekre támaszkodtak. A térképek következetességet biztosítottak, de a navigátoroknak friss megfigyelésekre volt szükségük a változó körülmények figyelembevételéhez. Hasonlóképpen, az alkalmazásunknak szüksége van perzisztens felhasználói állapotra és aktuális szerver adatokra.

**🧪 Az adatfrissesség problémájának felfedezése:**

1. Jelentkezzen be a dashboardra a `test` account használatával
2. Futtassa ezt a parancsot egy terminálban, hogy szimuláljon egy tranzakciót más forrásból:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Frissítse a dashboard oldalát a böngészőben
4. Figyelje meg, hogy látja-e az új tranzakciót

**Mit mutat ez a teszt:**
- **Megmutatja**, hogyan válhat a localStorage "elavulttá" (régi adatokká)
- **Valós szcenáriókat szimulál**, ahol az adatok az alkalmazáson kívül változnak
- **Feltárja** a perzisztencia és az adatfrissesség közötti feszültséget

**Az adat elavulásának kihívása:**

| Probléma | Ok | Felhasználói hatás |
|----------|----|--------------------|
| **Elavult adatok** | A localStorage soha nem jár le automatikusan | A felhasználók régi információkat látnak |
| **Szerver változások** | Más alkalmazások/felhasználók módosítják ugyanazt az adatot | Inkonzisztens nézetek platformok között |
| **Gyorsítótár vs. valóság** | A helyi gyorsítótár nem egyezik a szerver állapotával | Rossz felhasználói élmény és zavar |

**Megoldási stratégia:**

Egy "betöltéskor frissítés" mintát fogunk implementálni, amely egyensúlyt teremt a perzisztencia előnyei és az adatfrissesség szükségessége között. Ez a megközelítés fenntartja a zökkenőmentes felhasználói élményt, miközben biztosítja az adatok pontosságát.

### Feladat: Adatfrissítési rendszer implementálása

Olyan rendszert fogunk létrehozni, amely automatikusan friss adatokat tölt be a szerverről, miközben megőrzi a perzisztens állapotkezelés előnyeit.

**1. lépés: Account adatfrissítő létrehozása**

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

**Ennek a függvénynek a logikája:**
- **Ellenőrzi**, hogy a felhasználó be van-e jelentkezve (létezik-e state.account)
- **Átirányít** a kijelentkezéshez, ha nincs érvényes munkamenet
- **Friss adatokat tölt be** a szerverről az `getAccount()` függvény használatával
- **Kezeli** a szerver hibákat, érvénytelen munkamenetek kijelentkeztetésével
- **Frissíti** az állapotot friss adatokkal a kontrollált frissítési rendszer használatával
- **Automatikus localStorage perzisztenciát indít** az `updateState()` függvényen keresztül

**2. lépés: Dashboard frissítési kezelő létrehozása**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Mit ér el ez a frissítési függvény:**
- **Koordinálja** az adatfrissítést és a UI frissítési folyamatot
- **Megvárja**, hogy a friss adatok betöltődjenek, mielőtt frissíti a megjelenítést
- **Biztosítja**, hogy a dashboard a legfrissebb információkat mutassa
- **Tisztán elkülöníti** az adatkezelést és a UI frissítéseket

**3. lépés: Integráció az útvonal rendszerrel**

Frissítse az útvonal konfigurációt, hogy automatikusan indítsa el a frissítést:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Hogyan működik ez az integráció:**
- **Végrehajtja** a frissítési függvényt minden alkalommal, amikor a dashboard útvonal betöltődik
- **Biztosítja**, hogy friss adatok mindig megjelenjenek, amikor a felhasználók a dashboardra navigálnak
- **Fenntartja** a meglévő útvonal struktúrát, miközben hozzáadja az adatfrissességet
- **Következetes mintát biztosít** az útvonal-specifikus inicializáláshoz

**Az adatfrissítési rendszer tesztelése:**

1. Jelentkezzen be a banki alkalmazásba
2. Futtassa a korábbi curl parancsot, hogy létrehozzon egy új tranzakciót
3. Frissítse a dashboard oldalát, vagy navigáljon el és vissza
4. Ellenőrizze, hogy az új tranzakció azonnal megjelenik-e

🎉 **Tökéletes egyensúly elérve**: Az alkalmazása most ötvözi a perzisztens állapot zökkenőmentes élményét a friss szerver adatok pontosságával!

## GitHub Copilot Agent kihívás 🚀

Használja az Agent módot a következő kihívás teljesítéséhez:

**Leírás:** Valósítson meg egy átfogó állapotkezelési rendszert visszavonás/újra funkcióval a banki alkalmazáshoz. Ez a kihívás segít gyakorolni a fejlett állapotkezelési koncepciókat, beleértve az állapot történetének nyomon követését, az immutábilis frissítéseket és a felhasználói felület szinkronizálását.

**Feladat:** Hozzon létre egy fejlett állapotkezelési rendszert, amely tartalmazza: 1) Egy állapot történeti tömböt, amely nyomon követi az összes korábbi állapotot, 2) Visszavonás és újra funkciókat, amelyek visszaállítják a korábbi állapotokat, 3) UI gombokat a visszavonás/újra műveletekhez a dashboardon, 4) Maximum 10 állapot történeti korlátot a memória problémák elkerülése érdekében, és 5) A történet megfelelő tisztítását, amikor a felhasználó kijelentkezik. Biztosítsa, hogy a visszavonás/újra funkció működjön az account egyenleg változásaival, és perzisztáljon böngésző frissítések között.

További információ az [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) használatáról itt.

## 🚀 Kihívás: Tárolási optimalizálás

Az implementációja most hatékonyan kezeli a felhasználói munkameneteket, az adatfrissítést és az állapotkezelést. Azonban fontolja meg, hogy a jelenlegi megközelítés optimálisan egyensúlyozza-e a tárolási hatékonyságot és a funkcionalitást.

Mint a sakkmesterek, akik megkülönböztetik az alapvető figurákat és a feláldozható gyalogokat, a hatékony állapotkezelés megköveteli annak azonosítását, hogy mely adatoknak kell perzisztálniuk, és melyeknek kell mindig frissnek lenniük a szerverről.

**Optimalizálási elemzés:**

Értékelje a jelenlegi localStorage implementációját, és fontolja meg ezeket a stratégiai kérdéseket:
- Mi a minimális információ, amely szükséges a felhasználói autentikáció fenntartásához?
- Mely adatok változnak olyan gyakran, hogy a helyi gyorsítótárazás kevés előnyt nyújt?
- Hogyan javíthatja a tárolási optimalizálás a teljesítményt anélkül, hogy rontaná a felhasználói élményt?

Ez a fajta architektúra elemzés megkülönbözteti a tapasztalt fejlesztőket, akik a funkcionalitást és a hatékonyságot is figyelembe veszik a megoldásaikban.

**Implementációs stratégia:**
- **Azonosítsa** az alapvető adatokat, amelyeknek perzisztálniuk kell (valószínűleg csak a felhasználói azonosítás)
- **Módosítsa** a localStorage implementációt, hogy csak kritikus munkamenet adatokat tároljon
- **Biztosítsa**, hogy friss adatok mindig betöltődjenek a szerverről a dashboard látogatásakor
- **Tesztelje**, hogy az optimalizált megközelítés fenntartja-e ugyanazt a felhasználói élményt

**Haladó megfontolás:**
- **Hasonlítsa össze** a teljes account adatok tárolásának és csak az autentikációs tokenek tárolásának előnyeit és hátrányait
- **Dokumentálja** a döntéseit és az érvelését a jövőbeli csapattagok számára

Ez a kihívás segít úgy gondolkodni, mint egy profi fejlesztő, aki figyelembe veszi a felhasználói élményt és az alkalmazás hatékonyságát. Szánjon időt a különböző megközelítések kipróbálására!

## Utóelőadás kvíz

[Utóelőadás kvíz](https://ff-quizzes.netlify.app/web/quiz/48)

## Feladat

[Implementálja az "Add transaction" párbeszédablakot](assignment.md)

Íme egy példa eredmény a feladat teljesítése után:

![Példa képernyőkép az "Add transaction" párbeszédablakról](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.hu.png)

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.