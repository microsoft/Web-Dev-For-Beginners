<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-24T19:50:53+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "hu"
}
-->
# JavaScript Alapok: Metódusok és Függvények

![JavaScript Alapok - Függvények](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előadás előtti kvíz
[Előadás előtti kvíz](https://ff-quizzes.netlify.app)

Ugyanazt a kódot újra és újra megírni a programozás egyik leggyakoribb frusztrációja. A függvények megoldják ezt a problémát, mivel lehetővé teszik, hogy a kódot újrafelhasználható blokkokba csomagoljuk. Gondolj a függvényekre úgy, mint a szabványosított alkatrészekre, amelyek Henry Ford futószalagját forradalmasították – ha egyszer létrehozol egy megbízható komponenst, bárhol használhatod anélkül, hogy újra kellene építened.

A függvények lehetővé teszik, hogy a kód egyes részeit összecsomagold, és újra felhasználhasd a programodban. Ahelyett, hogy ugyanazt a logikát másolnád és beillesztenéd mindenhová, egyszer létrehozhatsz egy függvényt, és szükség esetén meghívhatod. Ez a megközelítés rendezetten tartja a kódot, és sokkal könnyebbé teszi a frissítéseket.

Ebben a leckében megtanulod, hogyan hozhatsz létre saját függvényeket, hogyan adhatsz át információt nekik, és hogyan kaphatsz vissza hasznos eredményeket. Megismered a különbséget a függvények és a metódusok között, megtanulod a modern szintaxis megközelítéseit, és látni fogod, hogyan működhetnek a függvények más függvényekkel. Lépésről lépésre építjük fel ezeket a fogalmakat.

[![Metódusok és Függvények](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metódusok és Függvények")

> 🎥 Kattints a fenti képre egy videóért a metódusokról és függvényekről.

> Ezt a leckét elérheted a [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) oldalon!

## Függvények

A függvény egy önálló kódrészlet, amely egy adott feladatot végez el. Olyan logikát foglal magába, amelyet bármikor végrehajthatsz.

Ahelyett, hogy ugyanazt a kódot többször írnád meg a programodban, csomagolhatod egy függvénybe, és szükség esetén meghívhatod. Ez a megközelítés tisztán tartja a kódot, és sokkal könnyebbé teszi a frissítéseket. Gondolj bele, milyen karbantartási kihívás lenne, ha a logikát a kódod 20 különböző helyén kellene megváltoztatni.

Fontos, hogy a függvényeidet érthetően nevezd el. Egy jól elnevezett függvény egyértelműen kommunikálja a célját – amikor meglátod a `cancelTimer()` függvényt, azonnal megérted, mit csinál, ugyanúgy, ahogy egy jól felcímkézett gomb megmondja, mi fog történni, ha rákattintasz.

## Függvény létrehozása és meghívása

Nézzük meg, hogyan hozhatunk létre egy függvényt. A szintaxis következetes mintát követ:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Nézzük meg részletesen:
- A `function` kulcsszó azt mondja a JavaScriptnek: "Hé, egy függvényt hozok létre!"
- A `nameOfFunction` az a hely, ahol a függvényednek egy leíró nevet adhatsz
- A zárójelek `()` azok, ahol paramétereket adhatsz hozzá (erről később lesz szó)
- A kapcsos zárójelek `{}` tartalmazzák a tényleges kódot, amely akkor fut le, amikor meghívod a függvényt

Hozzunk létre egy egyszerű üdvözlő függvényt, hogy lássuk ezt működés közben:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Ez a függvény kiírja a "Hello, world!" üzenetet a konzolra. Miután definiáltad, annyiszor használhatod, ahányszor csak szükséges.

A függvény végrehajtásához (vagy "meghívásához") írd le a nevét, majd zárójeleket. A JavaScript lehetővé teszi, hogy a függvényt a meghívás előtt vagy után definiáld – a JavaScript motor kezeli a végrehajtási sorrendet.

```javascript
// calling our function
displayGreeting();
```

Amikor ezt a sort futtatod, végrehajtja az összes kódot a `displayGreeting` függvényedben, és megjeleníti a "Hello, world!" üzenetet a böngésződ konzoljában. Ezt a függvényt többször is meghívhatod.

> **Megjegyzés:** Az eddigi leckék során **metódusokat** használtál. A `console.log()` egy metódus – lényegében egy függvény, amely a `console` objektumhoz tartozik. A fő különbség az, hogy a metódusok objektumokhoz kapcsolódnak, míg a függvények önállóan állnak. Sok fejlesztő ezeket a kifejezéseket informális beszélgetésben felcserélve használja.

### Függvények írásának legjobb gyakorlatai

Íme néhány tipp, hogy nagyszerű függvényeket írj:

- Adj a függvényeidnek egyértelmű, leíró neveket – a jövőbeli önmagad hálás lesz érte!
- Használj **camelCase**-t több szóból álló nevekhez (például `calculateTotal` a `calculate_total` helyett)
- Tartsd minden függvényt egy dologra fókuszálva, amit jól csinál

## Információ átadása egy függvénynek

A `displayGreeting` függvényünk korlátozott – csak "Hello, world!" üzenetet tud megjeleníteni mindenkinek. A paraméterek lehetővé teszik, hogy a függvények rugalmasabbak és hasznosabbak legyenek.

**Paraméterek** olyan helyőrzőként működnek, ahová különböző értékeket illeszthetsz be minden alkalommal, amikor használod a függvényt. Így ugyanaz a függvény különböző információkkal dolgozhat minden meghíváskor.

A paramétereket a zárójelekben sorolod fel, amikor definiálod a függvényt, több paramétert vesszővel elválasztva:

```javascript
function name(param, param2, param3) {

}
```

Minden paraméter helyőrzőként működik – amikor valaki meghívja a függvényt, tényleges értékeket ad meg, amelyek ezekbe a helyekbe kerülnek.

Frissítsük az üdvözlő függvényünket, hogy elfogadja valakinek a nevét:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Figyeld meg, hogyan használunk backtickeket (`` ` ``) és `${}`-t, hogy közvetlenül beillesszük a nevet az üzenetünkbe – ezt sablonliterálnak hívják, és nagyon praktikus módja a változókkal kevert szövegek létrehozásának.

Most, amikor meghívjuk a függvényt, bármilyen nevet átadhatunk:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

A JavaScript veszi a `'Christopher'` sztringet, hozzárendeli a `name` paraméterhez, és létrehozza a személyre szabott üzenetet: "Hello, Christopher!"

## Alapértelmezett értékek

Mi van, ha néhány paramétert opcionálissá szeretnénk tenni? Itt jönnek jól az alapértelmezett értékek!

Tegyük fel, hogy szeretnénk, ha az emberek testre szabhatnák az üdvözlő szót, de ha nem adnak meg egyet, akkor "Hello"-t használunk alapértelmezettként. Az alapértelmezett értékeket az egyenlőségjel használatával állíthatod be, akárcsak egy változó beállításakor:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Itt a `name` továbbra is kötelező, de a `salutation` tartalék értéke `'Hello'`, ha senki nem ad meg más üdvözlést.

Most kétféleképpen hívhatjuk meg ezt a függvényt:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

Az első hívásnál a JavaScript az alapértelmezett "Hello"-t használja, mivel nem adtunk meg üdvözlést. A második hívásnál a saját "Hi"-nkat használja helyette. Ez a rugalmasság lehetővé teszi, hogy a függvények különböző helyzetekhez alkalmazkodjanak.

## Visszatérési értékek

Az eddigi függvényeink csak üzeneteket írtak ki a konzolra, de mi van, ha azt szeretnénk, hogy egy függvény számítson valamit, és adja vissza az eredményt?

Itt jönnek képbe a **visszatérési értékek**. Ahelyett, hogy csak megjelenítenének valamit, a függvények visszaadhatnak egy értéket, amelyet elmenthetsz egy változóba, vagy felhasználhatsz a kód más részeiben.

Ahhoz, hogy egy értéket visszaadj, használd a `return` kulcsszót, amelyet az általad visszaadni kívánt érték követ:

```javascript
return myVariable;
```

Fontos: amikor egy függvény eléri a `return` utasítást, azonnal leáll, és visszaadja az értéket annak, aki meghívta.

Módosítsuk az üdvözlő függvényünket, hogy az üzenetet visszaadja ahelyett, hogy kiírná:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Most ahelyett, hogy kiírná az üdvözlést, ez a függvény létrehozza az üzenetet, és visszaadja nekünk.

A visszaadott érték használatához elmenthetjük egy változóba, akárcsak bármely más értéket:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Most a `greetingMessage` tartalmazza a "Hello, Christopher" üzenetet, és bárhol felhasználhatjuk a kódunkban – például megjeleníthetjük egy weboldalon, beilleszthetjük egy e-mailbe, vagy átadhatjuk egy másik függvénynek.

## Függvények függvények paramétereként

Függvényeket átadhatunk paraméterként más függvényeknek. Bár ez a koncepció kezdetben bonyolultnak tűnhet, ez egy erőteljes funkció, amely rugalmas programozási mintákat tesz lehetővé.

Ez a minta nagyon gyakori, amikor azt szeretnénk mondani: "ha valami történik, csináld ezt a másik dolgot." Például: "ha a visszaszámláló lejár, futtasd ezt a kódot" vagy "ha a felhasználó rákattint a gombra, hívd meg ezt a függvényt."

Nézzük meg a `setTimeout`-ot, amely egy beépített függvény, amely egy bizonyos ideig vár, majd futtat egy kódot. Meg kell mondanunk neki, hogy milyen kódot futtasson – tökéletes eset a függvény átadására!

Próbáld ki ezt a kódot – 3 másodperc múlva üzenetet fogsz látni:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Figyeld meg, hogyan adjuk át a `displayDone` függvényt (zárójelek nélkül) a `setTimeout`-nak. Nem mi hívjuk meg a függvényt – átadjuk a `setTimeout`-nak, és azt mondjuk: "hívd meg ezt 3 másodperc múlva."

### Névtelen függvények

Néha csak egy dologra van szükséged egy függvényre, és nem akarod nevet adni neki. Gondolj bele – ha csak egyszer használod a függvényt, miért terhelnéd a kódodat egy extra névvel?

A JavaScript lehetővé teszi, hogy **névtelen függvényeket** hozz létre – olyan függvényeket, amelyeknek nincs neve, és közvetlenül ott definiálhatod, ahol szükséged van rájuk.

Így írhatjuk át az időzítő példánkat névtelen függvény használatával:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Ez ugyanazt az eredményt éri el, de a függvényt közvetlenül a `setTimeout` hívásban definiáljuk, kiküszöbölve a külön függvénydeklaráció szükségességét.

### Nyílfüggvények

A modern JavaScript még rövidebb módot kínál a függvények írására, amelyet **nyílfüggvényeknek** hívnak. Ezek a `=>` jelet használják (ami úgy néz ki, mint egy nyíl – érted?) és nagyon népszerűek a fejlesztők körében.

A nyílfüggvények lehetővé teszik, hogy kihagyd a `function` kulcsszót, és tömörebb kódot írj.

Íme az időzítő példánk nyílfüggvény használatával:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

A `()` az a hely, ahová a paraméterek kerülnének (jelen esetben üres), majd jön a nyíl `=>`, és végül a függvénytörzs kapcsos zárójelekben. Ez ugyanazt a funkcionalitást biztosítja tömörebb szintaxissal.

### Mikor használjuk az egyes stratégiákat?

Mikor érdemes az egyes megközelítéseket használni? Egy gyakorlati iránymutatás: ha többször fogod használni a függvényt, adj neki nevet, és definiáld külön. Ha egy adott használatra van szükséged, fontold meg a névtelen függvényt. Mind a nyílfüggvények, mind a hagyományos szintaxis érvényes választás, bár a nyílfüggvények elterjedtek a modern JavaScript kódokban.

---



## 🚀 Kihívás

Meg tudod fogalmazni egy mondatban a különbséget a függvények és a metódusok között? Próbáld meg!

## GitHub Copilot Agent Kihívás 🚀

Használd az Agent módot a következő kihívás teljesítéséhez:

**Leírás:** Hozz létre egy matematikai függvényeket tartalmazó segédkönyvtárat, amely bemutatja a leckében tárgyalt különböző függvényfogalmakat, beleértve a paramétereket, alapértelmezett értékeket, visszatérési értékeket és nyílfüggvényeket.

**Feladat:** Hozz létre egy `mathUtils.js` nevű JavaScript fájlt, amely tartalmazza a következő függvényeket:
1. Egy `add` nevű függvényt, amely két paramétert vesz, és visszaadja azok összegét
2. Egy `multiply` nevű függvényt alapértelmezett paraméterértékekkel (a második paraméter alapértelmezett értéke 1)
3. Egy `square` nevű nyílfüggvényt, amely egy számot vesz, és visszaadja annak négyzetét
4. Egy `calculate` nevű függvényt, amely egy másik függvényt fogad paraméterként, valamint két számot, majd alkalmazza a függvényt ezekre a számokra
5. Mutasd be az egyes függvények meghívását megfelelő tesztesetekkel

További információ az [agent mód](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) használatáról itt.

## Előadás utáni kvíz
[Előadás utáni kvíz](https://ff-quizzes.netlify.app)

## Áttekintés és önálló tanulás

Érdemes [további információkat olvasni a nyílfüggvényekről](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), mivel egyre gyakrabban használják őket a kódokban. Gyakorold egy függ

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.