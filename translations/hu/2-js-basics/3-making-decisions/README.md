<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T19:52:30+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "hu"
}
-->
# JavaScript Alapok: Döntéshozatal

![JavaScript Alapok - Döntéshozatal](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.hu.png)

> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

Gondolkodtál már azon, hogyan hoznak okos döntéseket az alkalmazások? Például hogyan választja ki egy navigációs rendszer a leggyorsabb útvonalat, vagy hogyan dönti el egy termosztát, mikor kapcsolja be a fűtést? Ez a programozásban a döntéshozatal alapvető koncepciója.

Ahogy Charles Babbage Analitikai Gépe különböző műveletsorokat tudott végrehajtani feltételek alapján, a modern JavaScript programoknak is döntéseket kell hozniuk különböző körülmények alapján. Ez a képesség, hogy elágazásokat hozzunk létre és döntéseket hozzunk, az, ami a statikus kódot interaktív, intelligens alkalmazásokká alakítja.

Ebben a leckében megtanulod, hogyan valósíts meg feltételes logikát a programjaidban. Megvizsgáljuk a feltételes utasításokat, összehasonlító operátorokat és logikai kifejezéseket, amelyek lehetővé teszik, hogy a kódod értékelje a helyzeteket és megfelelően reagáljon.

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/11)

A döntéshozatal és a programfolyamat irányítása a programozás alapvető aspektusa. Ez a rész bemutatja, hogyan irányítsd JavaScript programjaid végrehajtási útvonalát logikai értékek és feltételes logika segítségével.

[![Döntéshozatal](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Döntéshozatal")

> 🎥 Kattints a fenti képre egy videóért a döntéshozatalról.

> Ezt a leckét elérheted a [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon) oldalon!

## Rövid áttekintés a Boole értékekről

Mielőtt a döntéshozatalt vizsgálnánk, térjünk vissza a Boole értékekhez az előző leckéből. George Boole matematikusról elnevezve ezek az értékek bináris állapotokat képviselnek – `true` vagy `false`. Nincs kétértelműség, nincs köztes állapot.

Ezek a bináris értékek képezik az összes számítógépes logika alapját. Minden döntés, amit a programod hoz, végső soron egy Boole értékelésre redukálódik.

Boole változók létrehozása egyszerű:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Ez két változót hoz létre explicit Boole értékekkel.

✅ A Boole értékek George Boole (1815–1864) angol matematikus, filozófus és logikus nevét viselik.

## Összehasonlító operátorok és Boole értékek

A gyakorlatban ritkán állítasz be manuálisan Boole értékeket. Ehelyett feltételek értékelésével generálod őket: "Ez a szám nagyobb, mint az a szám?" vagy "Ezek az értékek egyenlőek?"

Az összehasonlító operátorok lehetővé teszik ezeket az értékeléseket. Összehasonlítják az értékeket, és Boole eredményeket adnak vissza az operandusok közötti kapcsolat alapján.

| Szimbólum | Leírás                                                                                                                                                   | Példa              |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`       | **Kisebb mint**: Két értéket hasonlít össze, és `true` Boole adatot ad vissza, ha a bal oldali érték kisebb, mint a jobb                                 | `5 < 6 // true`    |
| `<=`      | **Kisebb vagy egyenlő**: Két értéket hasonlít össze, és `true` Boole adatot ad vissza, ha a bal oldali érték kisebb vagy egyenlő, mint a jobb            | `5 <= 6 // true`   |
| `>`       | **Nagyobb mint**: Két értéket hasonlít össze, és `true` Boole adatot ad vissza, ha a bal oldali érték nagyobb, mint a jobb                               | `5 > 6 // false`   |
| `>=`      | **Nagyobb vagy egyenlő**: Két értéket hasonlít össze, és `true` Boole adatot ad vissza, ha a bal oldali érték nagyobb vagy egyenlő, mint a jobb          | `5 >= 6 // false`  |
| `===`     | **Szigorú egyenlőség**: Két értéket hasonlít össze, és `true` Boole adatot ad vissza, ha a jobb és bal oldali értékek egyenlőek ÉS azonos típusúak       | `5 === 6 // false` |
| `!==`     | **Egyenlőtlenség**: Két értéket hasonlít össze, és az ellenkező Boole értéket adja vissza, mint amit a szigorú egyenlőség operátor adna                   | `5 !== 6 // true`  |

✅ Ellenőrizd tudásodat úgy, hogy néhány összehasonlítást írsz a böngésződ konzoljába. Meglepett valamelyik visszaadott adat?

## If utasítás

Az `if` utasítás olyan, mintha kérdést tennél fel a kódodban. "Ha ez a feltétel igaz, akkor csináld ezt." Ez valószínűleg a legfontosabb eszköz, amit a JavaScriptben a döntéshozatalhoz használsz.

Így működik:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

A feltétel a zárójelek közé kerül, és ha `true`, a JavaScript végrehajtja a kódot a kapcsos zárójelek között. Ha `false`, a JavaScript egyszerűen kihagyja az egész blokkot.

Gyakran használod összehasonlító operátorokat ezeknek a feltételeknek a létrehozásához. Nézzünk egy gyakorlati példát:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Mivel a `1000 >= 800` értékelése `true`, a blokkban lévő kód végrehajtódik, és a konzolban megjelenik: "Új laptopot veszek!"

## If..Else utasítás

De mi van akkor, ha azt szeretnéd, hogy a programod mást csináljon, amikor a feltétel hamis? Itt jön képbe az `else` – olyan, mintha lenne egy tartalék terv.

Az `else` utasítás lehetőséget ad arra, hogy azt mondd: "ha ez a feltétel nem igaz, csináld helyette ezt."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Most, mivel a `500 >= 800` értékelése `false`, a JavaScript kihagyja az első blokkot, és helyette az `else` blokkot hajtja végre. A konzolban ezt látod: "Még nem engedhetem meg magamnak az új laptopot!"

✅ Teszteld a kód megértését úgy, hogy futtatod a böngésző konzoljában. Változtasd meg a currentMoney és laptopPrice változók értékeit, hogy megváltoztasd a visszaadott `console.log()` eredményét.

## Switch utasítás

Néha egy értéket több lehetőséghez kell hasonlítanod. Bár több `if..else` utasítást is láncolhatsz, ez a megközelítés nehezen kezelhetővé válik. A `switch` utasítás tisztább struktúrát biztosít több különálló érték kezelésére.

A koncepció hasonlít a korai telefonközpontok mechanikus kapcsolórendszereire – egy bemeneti érték határozza meg, hogy melyik konkrét útvonalon halad tovább a végrehajtás.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Így van felépítve:
- A JavaScript egyszer értékeli ki a kifejezést
- Végignézi az egyes `case`-eket, hogy találjon egyezést
- Ha talál egyezést, végrehajtja az adott kódblokkot
- A `break` megmondja a JavaScriptnek, hogy álljon meg és lépjen ki a switch-ből
- Ha nincs egyezés, végrehajtja az `default` blokkot (ha van ilyen)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

Ebben a példában a JavaScript látja, hogy a `dayNumber` értéke `2`, megtalálja a megfelelő `case 2`-t, beállítja a `dayName` értékét "Kedd"-re, majd kilép a switch-ből. Az eredmény? A konzolban megjelenik: "Ma kedd van."

✅ Teszteld a kód megértését úgy, hogy futtatod a böngésző konzoljában. Változtasd meg az `a` változó értékét, hogy megváltoztasd a visszaadott `console.log()` eredményét.

## Logikai operátorok és Boole értékek

A komplex döntések gyakran több feltétel egyidejű értékelését igénylik. Ahogy a Boole algebra lehetővé teszi a matematikusok számára, hogy logikai kifejezéseket kombináljanak, a programozás logikai operátorokat biztosít több Boole feltétel összekapcsolására.

Ezek az operátorok lehetővé teszik összetett feltételes logika létrehozását egyszerű igaz/hamis értékelések kombinálásával.

| Szimbólum | Leírás                                                                                     | Példa                                                                 |
| --------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`      | **Logikai ÉS**: Két Boole kifejezést hasonlít össze. Csak akkor ad vissza true értéket, ha mindkét oldal igaz | `(5 > 3) && (5 < 10) // Mindkét oldal igaz. Visszaad true értéket` |
| `\|\|`    | **Logikai VAGY**: Két Boole kifejezést hasonlít össze. Akkor ad vissza true értéket, ha legalább az egyik oldal igaz | `(5 > 10) \|\| (5 < 10) // Az egyik oldal hamis, a másik igaz. Visszaad true értéket` |
| `!`       | **Logikai NEM**: Egy Boole kifejezés ellentétes értékét adja vissza                             | `!(5 > 10) // 5 nem nagyobb, mint 10, így a "!" igaz értéket ad`         |

Ezek az operátorok lehetővé teszik a feltételek hasznos kombinálását:
- ÉS (`&&`) azt jelenti, hogy mindkét feltételnek igaznak kell lennie
- VAGY (`||`) azt jelenti, hogy legalább az egyik feltételnek igaznak kell lennie  
- NEM (`!`) az igazat hamissá teszi (és fordítva)

## Feltételek és döntések logikai operátorokkal

Nézzük meg ezeket a logikai operátorokat egy valósághű példában:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Ebben a példában: kiszámítjuk a 20%-os kedvezményes árat (640), majd értékeljük, hogy a rendelkezésre álló pénzünk fedezi-e a teljes árat VAGY a kedvezményes árat. Mivel a 600 megfelel a kedvezményes ár küszöbének (640), a feltétel értékelése igaz.

### Negációs operátor

Néha könnyebb arra gondolni, amikor valami NEM igaz. Például ahelyett, hogy azt kérdeznéd: "Be van jelentkezve a felhasználó?", azt kérdezheted: "Nincs bejelentkezve a felhasználó?" A felkiáltójel (`!`) operátor megfordítja a logikát.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

A `!` operátor olyan, mintha azt mondanád: "az ellenkezője annak, hogy..." – ha valami `true`, a `!` hamissá teszi, és fordítva.

### Ternáris kifejezések

Egyszerű feltételes hozzárendelésekhez a JavaScript biztosítja a **ternáris operátort**. Ez a tömör szintaxis lehetővé teszi, hogy egy feltételes kifejezést egyetlen sorban írj meg, hasznos, ha két érték közül kell választanod egy feltétel alapján.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Úgy olvasható, mint egy kérdés: "Ez a feltétel igaz? Ha igen, használd ezt az értéket. Ha nem, használd azt az értéket."

Az alábbiakban egy kézzelfoghatóbb példa:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Szánj egy percet arra, hogy többször elolvasd ezt a kódot. Érted, hogyan működnek ezek az operátorok?

Ez a sor azt mondja: "A `firstNumber` nagyobb, mint a `secondNumber`? Ha igen, tedd a `firstNumber`-t a `biggestNumber`-be. Ha nem, tedd a `secondNumber`-t a `biggestNumber`-be."

A ternáris operátor csak egy rövidebb módja annak, hogy ezt a hagyományos `if..else` utasítást írd meg:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Mindkét megközelítés azonos eredményt ad. A ternáris operátor tömörséget kínál, míg a hagyományos if-else struktúra olvashatóbb lehet összetett feltételek esetén.

---



## 🚀 Kihívás

Írj egy programot, amelyet először logikai operátorokkal írsz meg, majd írd át ternáris kifejezéssel. Melyik szintaxis a kedvenced?

---

## GitHub Copilot Agent Kihívás 🚀

Használd az Agent módot a következő kihívás teljesítéséhez:

**Leírás:** Hozz létre egy átfogó jegyszámító programot, amely bemutatja a döntéshozatal több koncepcióját ebből a leckéből, beleértve az if-else utasításokat, switch utasításokat, logikai operátorokat és ternáris kifejezéseket.

**Feladat:** Írj egy JavaScript programot, amely egy diák numerikus pontszámát (0-100) veszi alapul, és meghatározza a betűs osztályzatát az alábbi kritériumok alapján:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: 60 alatt

Követelmények:
1. Használj if-else utasítást az osztályzat meghatározásához
2. Használj logikai operátorokat annak ellenőrzésére, hogy a diák átment-e (osztályzat >= 60) ÉS kitüntetéssel (osztályzat >= 90)
3. Használj switch utasítást, hogy konkrét visszajelzést adj az egyes osztályzatokhoz
4. Használj ternáris operátort annak meghatározásához, hogy a diák jogosult-e a következő kurzusra (osztályzat >= 70)
5. Tartalmazzon bemeneti érvényesítést, hogy a pontszám 0 és 100 között legyen

Teszteld a programodat különböző pontszámokkal, beleértve a szélsőséges eseteket, mint 59, 60, 89, 90 és érvénytelen bemenetek.

További információ az [agent mód](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) használatáról itt található.


## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/12)

## Áttekintés és önálló tanulás

Olvass többet a felhasználó számára elérhető számos operátorról [az MDN-en](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Nézd át Josh Comeau csodálatos [operátor keresőjét](https://joshwcomeau.com/operator-lookup/)!

## Feladat

[Operátorok](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.