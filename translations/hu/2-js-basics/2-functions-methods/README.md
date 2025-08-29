<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-29T10:30:38+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "hu"
}
-->
# JavaScript Alapok: Metódusok és Függvények

![JavaScript Alapok - Függvények](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előadás előtti kvíz
[Előadás előtti kvíz](https://ff-quizzes.netlify.app)

Amikor kódot írunk, mindig arra törekszünk, hogy az olvasható legyen. Bár ez elsőre ellentmondásosnak tűnhet, a kódot sokkal többször olvassák, mint írják. Az egyik alapvető eszköz a fejlesztők eszköztárában az olvasható és karbantartható kód érdekében a **függvény**.

[![Metódusok és Függvények](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metódusok és Függvények")

> 🎥 Kattints a fenti képre egy videóért a metódusokról és függvényekről.

> Ezt a leckét elérheted a [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) oldalán!

## Függvények

A függvény alapvetően egy kódrészlet, amelyet igény szerint végrehajthatunk. Ez tökéletes olyan helyzetekben, amikor ugyanazt a feladatot többször kell elvégezni; ahelyett, hogy a logikát több helyen megismételnénk (ami nehézkessé tenné a frissítést), egy helyre központosíthatjuk, és akkor hívhatjuk meg, amikor szükség van rá – sőt, függvényeket más függvényekből is hívhatunk!

Ugyanilyen fontos a függvény elnevezése. Bár ez triviálisnak tűnhet, a név gyors módot biztosít a kód egy részének dokumentálására. Ezt úgy is elképzelhetjük, mint egy címkét egy gombon. Ha rákattintok egy "Időzítő törlése" feliratú gombra, tudom, hogy az megállítja az órát.

## Függvény létrehozása és meghívása

A függvény szintaxisa a következőképpen néz ki:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Ha például egy üdvözlő üzenetet megjelenítő függvényt szeretnék létrehozni, az így nézhet ki:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Amikor meg akarjuk hívni (vagy aktiválni) a függvényt, a függvény nevét követjük `()`-kal. Érdemes megjegyezni, hogy a függvényt definiálhatjuk azelőtt vagy azután, hogy meghívnánk; a JavaScript fordító megtalálja nekünk.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Létezik egy speciális függvénytípus, amelyet **metódusnak** nevezünk, és amelyet már használtál is! Valójában ezt láttuk a fenti példában, amikor a `console.log`-ot használtuk. Ami megkülönbözteti a metódust a függvénytől, az az, hogy a metódus egy objektumhoz van csatolva (például `console`), míg a függvény szabadon lebeg. Sok fejlesztő ezeket a kifejezéseket felcserélve használja.

### Függvényekkel kapcsolatos legjobb gyakorlatok

Néhány legjobb gyakorlatot érdemes szem előtt tartani függvények létrehozásakor:

- Mindig használj leíró neveket, hogy tudd, mit csinál a függvény
- Használj **camelCase**-t a szavak összekapcsolásához
- Tartsd a függvényeket egy adott feladatra fókuszálva

## Információ átadása egy függvénynek

Ahhoz, hogy egy függvény rugalmasabb legyen, gyakran szeretnénk információt átadni neki. Ha például a fenti `displayGreeting` példát nézzük, az csak **Hello, world!** üzenetet jelenít meg. Ez nem a leghasznosabb függvény, amit létrehozhatunk. Ha egy kicsit rugalmasabbá szeretnénk tenni, például lehetővé tenni, hogy valaki megadja az üdvözlendő személy nevét, hozzáadhatunk egy **paramétert**. A paraméter (néha **argumentumnak** is nevezik) egy további információ, amelyet a függvénynek küldünk.

A paramétereket a definícióban zárójelek között soroljuk fel, és vesszővel választjuk el őket, például így:

```javascript
function name(param, param2, param3) {

}
```

Frissíthetjük a `displayGreeting` függvényt, hogy elfogadjon egy nevet, és azt jelenítse meg.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Amikor meg akarjuk hívni a függvényt, és átadni a paramétert, azt a zárójelekben adjuk meg.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Alapértelmezett értékek

Még rugalmasabbá tehetjük a függvényt további paraméterek hozzáadásával. De mi van akkor, ha nem akarjuk, hogy minden értéket kötelezően megadjanak? Az üdvözlési példánál maradva, a nevet kötelezővé tehetjük (hiszen tudnunk kell, kit üdvözlünk), de lehetővé tehetjük, hogy az üdvözlés szövege tetszés szerint testreszabható legyen. Ha valaki nem akarja testreszabni, alapértelmezett értéket adunk meg. Az alapértelmezett érték megadásához a paramétert úgy állítjuk be, mint egy változó értékét - `parameterName = 'defaultValue'`. Egy teljes példa:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Amikor meghívjuk a függvényt, eldönthetjük, hogy megadunk-e értéket a `salutation` paraméternek.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Visszatérési értékek

Eddig a függvényünk mindig a [konzolra](https://developer.mozilla.org/docs/Web/API/console) írt ki. Néha ez pontosan az, amit keresünk, különösen akkor, amikor olyan függvényeket hozunk létre, amelyek más szolgáltatásokat hívnak meg. De mi van akkor, ha egy segédfüggvényt szeretnék létrehozni, amely egy számítást végez, és visszaadja az értéket, hogy máshol felhasználhassam?

Ezt úgy tehetjük meg, hogy **visszatérési értéket** használunk. A visszatérési értéket a függvény adja vissza, és ugyanúgy tárolható egy változóban, mint egy szöveg vagy szám.

Ha egy függvény visszaad valamit, akkor a `return` kulcsszót használjuk. A `return` kulcsszó egy értéket vagy hivatkozást vár arra, amit visszaadunk, például így:

```javascript
return myVariable;
```  

Létrehozhatunk egy függvényt, amely üdvözlő üzenetet készít, és visszaadja az értéket a hívónak.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Amikor meghívjuk ezt a függvényt, az értéket egy változóban tároljuk. Ez ugyanaz, mint amikor egy változót statikus értékre állítunk (például `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Függvények mint paraméterek más függvényekhez

Ahogy haladsz a programozói pályafutásod során, találkozni fogsz olyan függvényekkel, amelyek más függvényeket fogadnak paraméterként. Ez az ügyes trükk gyakran akkor hasznos, amikor nem tudjuk, mikor fog valami megtörténni vagy befejeződni, de tudjuk, hogy egy műveletet végre kell hajtanunk válaszként.

Például vegyük a [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) függvényt, amely elindít egy időzítőt, és kódot hajt végre, amikor az lejár. Meg kell mondanunk neki, milyen kódot szeretnénk végrehajtani. Ez tökéletes feladat egy függvény számára!

Ha futtatod az alábbi kódot, 3 másodperc múlva megjelenik az üzenet: **3 másodperc telt el**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Névtelen függvények

Nézzük meg újra, mit építettünk. Létrehozunk egy függvényt névvel, amelyet egyszer fogunk használni. Ahogy az alkalmazásunk bonyolultabbá válik, láthatjuk, hogy sok olyan függvényt hozunk létre, amelyeket csak egyszer hívunk meg. Ez nem ideális. Mint kiderült, nem mindig kell nevet adnunk!

Amikor egy függvényt paraméterként adunk át, elkerülhetjük, hogy előre létrehozzuk, és helyette a paraméter részeként építhetjük meg. Ugyanazt a `function` kulcsszót használjuk, de a paraméter részeként építjük meg.

Írjuk át a fenti kódot névtelen függvény használatára:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Ha futtatod az új kódot, ugyanazt az eredményt kapod. Létrehoztunk egy függvényt, de nem kellett nevet adnunk neki!

### Fat arrow függvények

Egy gyakori rövidítés sok programozási nyelvben (beleértve a JavaScriptet is) az úgynevezett **arrow** vagy **fat arrow** függvények használata. Ez egy speciális jelölést használ, `=>`, amely egy nyílra hasonlít – innen ered a neve! A `=>` használatával kihagyhatjuk a `function` kulcsszót.

Írjuk át a kódot még egyszer, hogy fat arrow függvényt használjunk:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Mikor használjuk melyik stratégiát?

Most már láttad, hogy három módon adhatunk át függvényt paraméterként, és talán azon tűnődsz, mikor használjuk melyiket. Ha tudod, hogy a függvényt többször fogod használni, hozd létre normál módon. Ha csak egy helyen fogod használni, általában a névtelen függvény a legjobb választás. Hogy fat arrow függvényt vagy a hagyományos `function` szintaxist használod, az rajtad múlik, de észre fogod venni, hogy a modern fejlesztők többsége a `=>`-t részesíti előnyben.

---

## 🚀 Kihívás

Meg tudod fogalmazni egy mondatban a különbséget a függvények és metódusok között? Próbáld meg!

## Előadás utáni kvíz
[Előadás utáni kvíz](https://ff-quizzes.netlify.app)

## Áttekintés és önálló tanulás

Érdemes [további információkat olvasni a fat arrow függvényekről](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), mivel egyre gyakrabban használják őket kódbázisokban. Gyakorold egy függvény írását, majd írd át ezt a szintaxist használva.

## Feladat

[Szórakozás a függvényekkel](assignment.md)

---

**Felelősségkizárás**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével készült. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt a professzionális, emberi fordítás igénybevétele. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.