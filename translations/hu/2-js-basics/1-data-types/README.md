<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-24T19:50:05+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "hu"
}
-->
# JavaScript Alapok: Adattípusok

![JavaScript Alapok - Adattípusok](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

Az adattípusok a JavaScript egyik alapvető fogalma, amely minden programban előfordul, amit írsz. Gondolj az adattípusokra úgy, mint az ókori alexandriai könyvtárosok által használt rendszerezési módszerre – külön helyek voltak a költészetet, matematikát és történelmi feljegyzéseket tartalmazó tekercsek számára. A JavaScript hasonló módon kategorizálja az információkat különböző típusok szerint.

Ebben a leckében megismerkedünk a JavaScript működését lehetővé tevő alapvető adattípusokkal. Megtanulod, hogyan kezeld a számokat, szövegeket, igaz/hamis értékeket, és megérted, miért fontos a megfelelő típus kiválasztása a programjaid számára. Ezek a fogalmak eleinte elvontnak tűnhetnek, de gyakorlással természetessé válnak.

Az adattípusok megértése sokkal világosabbá teszi a JavaScript többi részét. Ahogy az építészeknek ismerniük kell a különböző építőanyagokat, mielőtt katedrálist építenek, ezek az alapok támogatják mindazt, amit a jövőben létrehozol.

## Előzetes kvíz
[Előzetes kvíz](https://ff-quizzes.netlify.app/web/)

Ez a lecke a JavaScript alapjait fedi le, amely a web interaktivitását biztosítja.

> Ezt a leckét elérheted a [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon) oldalon!

[![Változók](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Változók a JavaScriptben")

[![Adattípusok a JavaScriptben](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Adattípusok a JavaScriptben")

> 🎥 Kattints a fenti képekre a változókról és adattípusokról szóló videókért

Kezdjük a változókkal és az őket kitöltő adattípusokkal!

## Változók

A változók alapvető építőelemek a programozásban. Ahogy a középkori alkimisták címkézett üvegeket használtak különböző anyagok tárolására, a változók lehetővé teszik, hogy információt tárolj, és leíró nevet adj neki, hogy később hivatkozhass rá. Szükséged van valakinek az életkorára? Tárold egy `age` nevű változóban. Felhasználói nevet szeretnél nyomon követni? Tartsd egy `userName` nevű változóban.

A JavaScriptben a változók létrehozásának modern megközelítésére fogunk összpontosítani. Az itt tanult technikák a nyelv fejlődésének és a programozói közösség által kidolgozott legjobb gyakorlatoknak az eredményei.

Egy változó **deklarálása** a következő szintaxist követi: **[kulcsszó] [név]**. Ez két részből áll:

- **Kulcsszó**. Használj `let`-et a változóhoz, amely megváltozhat, vagy `const`-ot az értékekhez, amelyek állandóak maradnak.
- **A változó neve**, ez egy leíró név, amit te választasz.

✅ A `let` kulcsszót az ES6 vezette be, és úgynevezett _blokkszkópot_ ad a változónak. Ajánlott a `let` vagy `const` használata a régebbi `var` kulcsszó helyett. A blokkszkópokat részletesebben a későbbi részekben tárgyaljuk.

### Feladat - változókkal dolgozás

1. **Deklarálj egy változót**. Kezdjük az első változónk létrehozásával:

    ```javascript
    let myVariable;
    ```

   **Mit érünk el ezzel:**
   - Ez azt mondja a JavaScriptnek, hogy hozzon létre egy `myVariable` nevű tárolóhelyet
   - A JavaScript memóriát foglal le ennek a változónak
   - A változónak jelenleg nincs értéke (undefined)

2. **Adj neki értéket**. Most tegyünk valamit a változónkba:

    ```javascript
    myVariable = 123;
    ```

   **Hogyan működik az értékadás:**
   - Az `=` operátor 123 értéket rendel a változónkhoz
   - A változó most ezt az értéket tartalmazza, nem pedig undefined
   - Ezt az értéket a kódodban bárhol hivatkozhatod `myVariable` segítségével

   > Megjegyzés: az `=` használata ebben a leckében azt jelenti, hogy egy "értékadó operátort" használunk, amelyet egy változó értékének beállítására használunk. Nem jelenti az egyenlőséget.

3. **Csináld okosan**. Valójában kombináljuk ezt a két lépést:

    ```javascript
    let myVariable = 123;
    ```

    **Ez a megközelítés hatékonyabb:**
    - Egyetlen utasításban deklarálod a változót és adsz neki értéket
    - Ez a fejlesztők körében szokásos gyakorlat
    - Csökkenti a kód hosszát, miközben megőrzi az érthetőséget

4. **Változtass meg egy értéket**. Mi van, ha egy másik számot szeretnénk tárolni?

   ```javascript
   myVariable = 321;
   ```

   **Az érték újrahozzárendelésének megértése:**
   - A változó most 321-et tartalmaz 123 helyett
   - Az előző érték felülíródik – a változók egyszerre csak egy értéket tárolnak
   - Ez a változók kulcsfontosságú jellemzője, amelyeket `let`-tel deklaráltak

   ✅ Próbáld ki! Írhatsz JavaScriptet közvetlenül a böngésződben. Nyiss meg egy böngészőablakot, és navigálj a Fejlesztői Eszközökhöz. A konzolban találsz egy promptot; írd be `let myVariable = 123`, nyomd meg az Entert, majd írd be `myVariable`. Mi történik? Megjegyzés: ezekről a fogalmakról többet fogsz tanulni a következő leckékben.

## Konstansok

Néha olyan információt kell tárolnod, amelynek soha nem szabad megváltoznia a program futása során. Gondolj a konstansokra úgy, mint az ókori Görögországban Euclid által megállapított matematikai elvekre – miután bizonyították és dokumentálták őket, minden jövőbeli hivatkozásra állandóak maradtak.

A konstansok hasonlóan működnek a változókhoz, de egy fontos korlátozással: miután értéket rendelsz hozzájuk, azt nem lehet megváltoztatni. Ez az állandóság segít megelőzni a programod kritikus értékeinek véletlen módosítását.

A konstans deklarálása és inicializálása ugyanazokat az elveket követi, mint a változóé, azzal a kivétellel, hogy a `const` kulcsszót használjuk. A konstansokat általában nagybetűkkel deklarálják.

```javascript
const MY_VARIABLE = 123;
```

**Ez a kód a következőket teszi:**
- **Létrehoz** egy `MY_VARIABLE` nevű konstansot 123 értékkel
- **Használja** a nagybetűs elnevezési konvenciót a konstansokhoz
- **Megakadályozza** az érték jövőbeli módosítását

A konstansoknak két fő szabálya van:

- **Azonnal értéket kell adni nekik** – üres konstansok nem megengedettek!
- **Az értékük soha nem változhat** – a JavaScript hibát dob, ha megpróbálod. Nézzük, mit jelent ez:

   **Egyszerű érték** - Az alábbi NEM megengedett:
   
      ```javascript
      const PI = 3;
      PI = 4; // nem megengedett
      ```

   **Amit meg kell jegyezni:**
   - **Újrahozzárendelési kísérletek** hibát okoznak
   - **Védelmet nyújt** a fontos értékek véletlen módosítása ellen
   - **Biztosítja**, hogy az érték következetes maradjon a programodban
 
   **Objektum hivatkozás védett** - Az alábbi NEM megengedett:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // nem megengedett
      ```

   **Ezeknek a fogalmaknak a megértése:**
   - **Megakadályozza** az egész objektum lecserélését egy újra
   - **Védelmet nyújt** az eredeti objektum hivatkozásának
   - **Fenntartja** az objektum identitását a memóriában

    **Objektum értéke nem védett** - Az alábbi MEGENGEDETT:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // megengedett
      ```

      **Mi történik itt:**
      - **Módosítja** az objektumon belüli tulajdonság értékét
      - **Megőrzi** az objektum hivatkozását
      - **Bemutatja**, hogy az objektum tartalma változhat, miközben a hivatkozás állandó marad

   > Megjegyzés, a `const` azt jelenti, hogy a hivatkozás védett az újrahozzárendeléstől. Az érték azonban nem _változtathatatlan_, és változhat, különösen, ha összetett szerkezet, például egy objektum.

## Adattípusok

A JavaScript különböző kategóriákba sorolja az információkat, amelyeket adattípusoknak nevezünk. Ez a koncepció tükrözi, ahogyan az ókori tudósok kategorizálták a tudást – Arisztotelész megkülönböztette a különböző típusú érveléseket, tudva, hogy a logikai elveket nem lehet egyformán alkalmazni a költészetre, matematikára és természetfilozófiára.

Az adattípusok fontosak, mert különböző műveletek különböző típusú információkkal működnek. Ahogy nem végezhetsz matematikai műveletet egy személy nevével, vagy nem alfabetizálhatsz egy matematikai egyenletet, a JavaScript megfelelő adattípust igényel minden művelethez. Ennek megértése megelőzi a hibákat, és megbízhatóbbá teszi a kódodat.

A változók sokféle értéket tárolhatnak, például számokat és szövegeket. Ezeket a különböző értéktípusokat **adattípusoknak** nevezzük. Az adattípusok fontos részét képezik a szoftverfejlesztésnek, mert segítenek a fejlesztőknek döntéseket hozni arról, hogyan kell írni a kódot és hogyan kell futtatni a szoftvert. Ezenkívül néhány adattípusnak egyedi jellemzői vannak, amelyek segítenek átalakítani vagy további információt kinyerni egy értékből.

✅ Az adattípusokat JavaScript adatprimitíveknek is nevezik, mivel ezek a nyelv által biztosított legalacsonyabb szintű adattípusok. 7 primitív adattípus létezik: string, number, bigint, boolean, undefined, null és symbol. Szánj egy percet arra, hogy elképzeld, mit képviselhetnek ezek a primitívek. Mi az a `zebra`? Mi a helyzet a `0`-val? `true`?

### Számok

A számok a JavaScript legegyszerűbb adattípusa. Akár egész számokkal, mint 42, tizedesekkel, mint 3.14, vagy negatív számokkal, mint -5 dolgozol, a JavaScript egységesen kezeli őket.

Emlékszel a korábbi változónkra? Az a 123, amit tároltunk, valójában egy szám adattípus volt:

```javascript
let myVariable = 123;
```

**Fő jellemzők:**
- A JavaScript automatikusan felismeri a numerikus értékeket
- Matematikai műveleteket végezhetsz ezekkel a változókkal
- Nincs szükség kifejezett típusdeklarációra

A változók mindenféle számot tárolhatnak, beleértve a tizedeseket vagy negatív számokat. A számok aritmetikai operátorokkal is használhatók, amelyeket a [következő szakaszban](../../../../2-js-basics/1-data-types) tárgyalunk.

### Aritmetikai operátorok

Az aritmetikai operátorok lehetővé teszik matematikai számítások elvégzését JavaScriptben. Ezek az operátorok ugyanazokat az elveket követik, amelyeket a matematikusok évszázadok óta használnak – ugyanazok a szimbólumok, amelyek megjelentek olyan tudósok, mint Al-Khwarizmi, az algebrai jelölés kidolgozója munkáiban.

Az operátorok úgy működnek, ahogy a hagyományos matematikában elvárnád: plusz az összeadáshoz, mínusz a kivonáshoz, és így tovább.

Számos operátor létezik, amelyeket aritmetikai funkciók végrehajtására használhatsz, és néhányat itt felsorolunk:

| Szimbólum | Leírás                                                                 | Példa                          |
| --------- | ---------------------------------------------------------------------- | ------------------------------ |
| `+`       | **Összeadás**: Két szám összegét számítja ki                          | `1 + 2 //várt válasz: 3`       |
| `-`       | **Kivonás**: Két szám különbségét számítja ki                         | `1 - 2 //várt válasz: -1`      |
| `*`       | **Szorzás**: Két szám szorzatát számítja ki                           | `1 * 2 //várt válasz: 2`       |
| `/`       | **Osztás**: Két szám hányadosát számítja ki                           | `1 / 2 //várt válasz: 0.5`     |
| `%`       | **Maradék**: Két szám osztásából származó maradékot számítja ki       | `1 % 2 //várt válasz: 1`       |

✅ Próbáld ki! Próbálj ki egy aritmetikai műveletet a böngésződ konzoljában. Meglepnek az eredmények?

### Szövegek

A JavaScriptben a szöveges adatokat szövegekként (string) ábrázolják. A "string" kifejezés abból a koncepcióból származik, hogy karakterek sorozatban vannak összefűzve, hasonlóan ahhoz, ahogy a középkori kolostorok írnokai összekapcsolták a betűket, hogy szavakat és mondatokat alkossanak kézirataikban.

A szövegek alapvetőek a webfejlesztésben. Minden szöveg, amely megjelenik egy weboldalon – felhasználónevek, gombfeliratok, hibaüzenetek, tartalom – szövegadatként van kezelve. A szövegek megértése elengedhetetlen a funkcionális felhasználói felületek létrehozásához.

A szövegek karakterek halmazai, amelyek egyes vagy dupla idézőjelek között helyezkednek el.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Ezeknek a fogalmaknak a megértése:**
- **Használja** az egyes idézőjeleket `'` vagy dupla idézőjeleket `"` a szövegek meghatározásához
- **Tárolja** a szöveges adatokat, amelyek tartalmazhatnak betűket, szám
A formázási céljaidat mindkét módszerrel elérheted, de a sablonliterálok tiszteletben tartják a szóközöket és a sortöréseket.

✅ Mikor használnál sablonliterált egy egyszerű sztring helyett?

### Booleans

A booleans a legegyszerűbb adatformát képviselik: csak két értéket tarthatnak – `true` vagy `false`. Ez a bináris logikai rendszer George Boole, a 19. századi matematikus munkájához vezethető vissza, aki kidolgozta a Boole-algebrát.

Egyszerűségük ellenére a booleans alapvetőek a programlogikában. Lehetővé teszik, hogy a kód döntéseket hozzon feltételek alapján – például, hogy egy felhasználó be van-e jelentkezve, megnyomtak-e egy gombot, vagy teljesültek-e bizonyos kritériumok.

A booleans csak két értéket vehetnek fel: `true` vagy `false`. A booleans segíthetnek eldönteni, hogy melyik kódsorok fussanak, amikor bizonyos feltételek teljesülnek. Sok esetben az [operátorok](../../../../2-js-basics/1-data-types) segítenek a Boolean értékének beállításában, és gyakran észre fogod venni, hogy változókat inicializálnak vagy értékeiket operátorral frissítik.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**A fentiekben:**
- **Létrehoztunk** egy változót, amely a Boolean értéket `true` tárolja
- **Bemutattuk**, hogyan lehet a Boolean értéket `false` tárolni
- **Használtuk** az `true` és `false` kulcsszavakat pontosan (idézőjelek nélkül)
- **Előkészítettük** ezeket a változókat feltételes utasításokban való használatra

✅ Egy változó 'igaznak' tekinthető, ha Boolean `true` értékre értékelődik. Érdekes módon JavaScriptben [minden érték igaznak számít, hacsak nem hamisnak van definiálva](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## GitHub Copilot Agent Kihívás 🚀

Használd az Agent módot a következő kihívás teljesítéséhez:

**Leírás:** Hozz létre egy személyes információkezelőt, amely bemutatja az összes JavaScript adattípust, amit ebben a leckében tanultál, miközben valós adatforgatókönyveket kezel.

**Feladat:** Készíts egy JavaScript programot, amely létrehoz egy felhasználói profil objektumot, amely tartalmazza: egy személy nevét (string), korát (number), diák státuszát (boolean), kedvenc színeit tömbként, és egy cím objektumot az utca, város és irányítószám tulajdonságokkal. Tartalmazzon funkciókat a profil információinak megjelenítésére és az egyes mezők frissítésére. Mutasd be a sztring összefűzést, sablonliterálokat, aritmetikai műveleteket a korral, és a diák státuszhoz kapcsolódó logikai műveleteket.

További információ az [agent módról](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) itt.

## 🚀 Kihívás

A JavaScript-nek vannak olyan viselkedései, amelyek meglephetik a fejlesztőket. Íme egy klasszikus példa, amit érdemes felfedezni: próbáld ki ezt a böngésző konzoljában: `let age = 1; let Age = 2; age == Age`, és figyeld meg az eredményt. `false`-t ad vissza – meg tudod határozni, miért?

Ez a JavaScript számos olyan viselkedésének egyike, amelyet érdemes megérteni. Az ilyen furcsaságok ismerete segít megbízhatóbb kódot írni és hatékonyabban hibakeresni.

## Előadás utáni kvíz
[Előadás utáni kvíz](https://ff-quizzes.netlify.app)

## Áttekintés és önálló tanulás

Nézd meg [ezt a JavaScript gyakorlatok listát](https://css-tricks.com/snippets/javascript/) és próbálj ki egyet. Mit tanultál?

## Feladat

[Adattípusok gyakorlása](assignment.md)

---

**Felelősségi nyilatkozat**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.