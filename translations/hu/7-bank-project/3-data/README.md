<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89d0df9854ed020f155e94882ae88d4c",
  "translation_date": "2025-08-29T10:19:55+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "hu"
}
-->
# Banki alkalmazás készítése 3. rész: Adatok lekérése és felhasználása

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/45)

### Bevezetés

Minden webalkalmazás középpontjában az *adatok* állnak. Az adatok sokféle formát ölthetnek, de fő céljuk mindig az, hogy információt jelenítsenek meg a felhasználó számára. Ahogy a webalkalmazások egyre interaktívabbá és összetettebbé válnak, az, hogy a felhasználó hogyan fér hozzá és hogyan lép kapcsolatba az információval, kulcsfontosságúvá vált a webfejlesztésben.

Ebben a leckében azt fogjuk megvizsgálni, hogyan lehet aszinkron módon adatokat lekérni egy szerverről, és ezeket az adatokat úgy megjeleníteni egy weboldalon, hogy közben ne kelljen újratölteni a HTML-t.

### Előfeltételek

Ehhez a leckéhez szükséges, hogy már elkészítetted a webalkalmazás [Bejelentkezési és Regisztrációs űrlap](../2-forms/README.md) részét. Továbbá telepítened kell a [Node.js](https://nodejs.org) alkalmazást, és helyileg futtatnod kell a [szerver API-t](../api/README.md), hogy hozzáférj a fiókadatokhoz.

Ellenőrizheted, hogy a szerver megfelelően fut-e, ha a következő parancsot futtatod egy terminálban:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX és adatlekérés

A hagyományos weboldalak a tartalom frissítéséhez, amikor a felhasználó egy linkre kattint vagy adatokat küld el egy űrlapon keresztül, az egész HTML-oldalt újratöltik. Minden alkalommal, amikor új adatokra van szükség, a webszerver egy teljesen új HTML-oldalt küld vissza, amelyet a böngészőnek fel kell dolgoznia, megszakítva ezzel a felhasználó aktuális tevékenységét, és korlátozva az interakciókat az újratöltés ideje alatt. Ezt a munkafolyamatot *többoldalas alkalmazásnak* (*Multi-Page Application* vagy *MPA*) is nevezik.

![Frissítési munkafolyamat egy többoldalas alkalmazásban](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.hu.png)

Amikor a webalkalmazások egyre összetettebbé és interaktívabbá váltak, megjelent egy új technika, az [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)). Ez a technika lehetővé teszi, hogy a webalkalmazások JavaScript segítségével aszinkron módon küldjenek és fogadjanak adatokat a szerverről, anélkül hogy újratöltenék a HTML-oldalt, gyorsabb frissítéseket és gördülékenyebb felhasználói élményt biztosítva. Amikor új adatok érkeznek a szerverről, a jelenlegi HTML-oldal JavaScript segítségével frissíthető a [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API használatával. Idővel ez a megközelítés fejlődött azzá, amit ma [*egyetlen oldalas alkalmazásnak* (*Single-Page Application* vagy *SPA*)](https://en.wikipedia.org/wiki/Single-page_application) nevezünk.

![Frissítési munkafolyamat egy egyoldalas alkalmazásban](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.hu.png)

Amikor az AJAX először megjelent, az egyetlen elérhető API az aszinkron adatlekéréshez az [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) volt. Azonban a modern böngészők már implementálták a kényelmesebb és erősebb [`Fetch` API-t](https://developer.mozilla.org/docs/Web/API/Fetch_API), amely ígéreteket használ, és jobban alkalmas JSON adatok kezelésére.

> Bár minden modern böngésző támogatja a `Fetch API`-t, ha azt szeretnéd, hogy a webalkalmazásod régebbi vagy elavult böngészőkön is működjön, mindig érdemes először ellenőrizni a [caniuse.com kompatibilitási táblázatát](https://caniuse.com/fetch).

### Feladat

Az [előző leckében](../2-forms/README.md) megvalósítottuk a regisztrációs űrlapot, hogy létrehozzunk egy fiókot. Most kódot fogunk hozzáadni a meglévő fiókkal történő bejelentkezéshez és az adatok lekéréséhez. Nyisd meg az `app.js` fájlt, és adj hozzá egy új `login` függvényt:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Itt azzal kezdjük, hogy a `getElementById()` segítségével lekérjük az űrlap elemet, majd az `loginForm.user.value` segítségével megszerezzük a felhasználónevet az input mezőből. Minden űrlapvezérlő elérhető a nevével (amelyet a HTML-ben a `name` attribútummal állítunk be) az űrlap tulajdonságaként.

Hasonlóan ahhoz, amit a regisztrációnál tettünk, létrehozunk egy másik függvényt a szerver kérés végrehajtásához, de ezúttal a fiókadatok lekérésére:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

A `fetch` API-t használjuk az adatok aszinkron lekérésére a szerverről, de ezúttal nincs szükségünk más paraméterekre, mint a hívandó URL-re, mivel csak adatokat kérdezünk le. Alapértelmezés szerint a `fetch` egy [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP-kérést hoz létre, ami pontosan az, amire itt szükségünk van.

✅ Az `encodeURIComponent()` egy olyan függvény, amely speciális karaktereket kódol URL-ekhez. Milyen problémák merülhetnek fel, ha nem hívjuk meg ezt a függvényt, és közvetlenül használjuk a `user` értéket az URL-ben?

Most frissítsük a `login` függvényünket, hogy használja a `getAccount`-ot:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Először, mivel a `getAccount` egy aszinkron függvény, az `await` kulcsszóval kell párosítanunk, hogy megvárjuk a szerver eredményét. Mint minden szerverkérésnél, itt is kezelni kell a hibás eseteket. Egyelőre csak egy naplóüzenetet adunk hozzá a hiba megjelenítéséhez, és később visszatérünk rá.

Ezután el kell tárolnunk az adatokat valahol, hogy később felhasználhassuk őket a műszerfal információinak megjelenítésére. Mivel az `account` változó még nem létezik, létrehozunk egy globális változót a fájl tetején:

```js
let account = null;
```

Miután a felhasználói adatokat elmentettük egy változóba, a *bejelentkezési* oldalról a *műszerfalra* navigálhatunk a már meglévő `navigate()` függvény használatával.

Végül, a `login` függvényünket akkor kell meghívni, amikor a bejelentkezési űrlapot elküldik, az alábbi HTML módosításával:

```html
<form id="loginForm" action="javascript:login()">
```

Teszteld, hogy minden megfelelően működik-e, ha regisztrálsz egy új fiókot, majd megpróbálsz bejelentkezni ugyanazzal a fiókkal.

Mielőtt továbblépnénk a következő részre, kiegészíthetjük a `register` függvényt azzal, hogy a következő kódot hozzáadjuk a függvény végéhez:

```js
account = result;
navigate('/dashboard');
```

✅ Tudtad, hogy alapértelmezés szerint csak ugyanarról a *domainről és portról* lehet szerver API-kat hívni, mint amelyen a megtekintett weboldal fut? Ez egy böngészők által érvényesített biztonsági mechanizmus. De várjunk csak, a webalkalmazásunk a `localhost:3000`-en fut, míg a szerver API a `localhost:5000`-en, akkor miért működik? A [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS) nevű technika használatával lehetőség van kereszt-domain HTTP-kérések végrehajtására, ha a szerver speciális fejléceket ad a válaszhoz, amelyek engedélyezik a kivételeket bizonyos domainek számára.

> Tudj meg többet az API-król ebben a [leckében](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon).

## HTML frissítése az adatok megjelenítéséhez

Most, hogy megvannak a felhasználói adatok, frissítenünk kell a meglévő HTML-t, hogy megjelenítsük azokat. Már tudjuk, hogyan lehet egy elemet lekérni a DOM-ból például a `document.getElementById()` segítségével. Miután van egy alap elemünk, itt van néhány API, amelyet használhatunk annak módosítására vagy gyermekelemek hozzáadására:

- A [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) tulajdonság használatával megváltoztathatjuk egy elem szövegét. Vegyük figyelembe, hogy ennek az értéknek a megváltoztatása eltávolítja az elem összes gyermekét (ha van), és helyettesíti a megadott szöveggel. Így ez egy hatékony módszer arra is, hogy egy adott elem összes gyermekét eltávolítsuk, ha üres karakterláncot (`''`) rendelünk hozzá.

- A [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) és az [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) metódusok használatával létrehozhatunk és csatolhatunk egy vagy több új gyermekelemet.

✅ Az [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) tulajdonság használatával egy elem HTML-tartalmát is megváltoztathatjuk, de ezt érdemes elkerülni, mivel sebezhetővé teszi az oldalt a [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting) támadásokkal szemben.

### Feladat

Mielőtt továbblépnénk a műszerfal képernyőre, van még egy dolog, amit meg kell tennünk a *bejelentkezési* oldalon. Jelenleg, ha megpróbálsz bejelentkezni egy nem létező felhasználónévvel, egy üzenet jelenik meg a konzolban, de egy átlagos felhasználó számára semmi sem változik, és nem tudja, mi történik.

Adjunk hozzá egy helyőrző elemet a bejelentkezési űrlaphoz, ahol szükség esetén megjeleníthetünk egy hibaüzenetet. Egy jó hely lehet például a bejelentkezési `<button>` előtt:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Ez a `<div>` elem üres, ami azt jelenti, hogy semmi sem jelenik meg a képernyőn, amíg nem adunk hozzá tartalmat. Az `id` attribútumot is megadjuk, hogy könnyen lekérhessük JavaScript segítségével.

Térj vissza az `app.js` fájlhoz, és hozz létre egy új segédfüggvényt `updateElement` néven:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Ez a függvény elég egyszerű: egy elem *id*-jét és *szövegét* megadva frissíti a megfelelő `id`-val rendelkező DOM elem szövegtartalmát. Használjuk ezt a metódust a korábbi hibaüzenet helyett a `login` függvényben:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Most, ha megpróbálsz bejelentkezni egy érvénytelen fiókkal, valami ilyesmit kell látnod:

![Képernyőkép a bejelentkezés közbeni hibaüzenet megjelenítéséről](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.hu.png)

Most már van egy vizuálisan megjelenő hibaüzenetünk, de ha képernyőolvasóval próbálod, észre fogod venni, hogy semmi sem kerül bejelentésre. Ahhoz, hogy a dinamikusan hozzáadott szöveget a képernyőolvasók is bejelentsék, egy úgynevezett [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) használatára lesz szükség. Itt egy speciális típusú live regiont, egy figyelmeztetést (alert) fogunk használni:

```html
<div id="loginError" role="alert"></div>
```

Ugyanezt a viselkedést valósítsd meg a `register` függvény hibái esetén is (ne felejtsd el frissíteni a HTML-t).

## Információk megjelenítése a műszerfalon

Ugyanazokat a technikákat használva, amelyeket az imént láttunk, gondoskodunk a fiókadatok megjelenítéséről a műszerfal oldalon.

Ez így néz ki egy szervertől kapott fiókobjektum:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> Megjegyzés: hogy megkönnyítsük a dolgodat, használhatod az előre feltöltött `test` fiókot, amely már tartalmaz adatokat.

### Feladat

Kezdjük azzal, hogy a HTML-ben lecseréljük az "Egyenleg" szekciót helyőrző elemekre:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Hozzáadunk egy új szekciót is közvetlenül alatta, hogy megjelenítsük a fiókleírást:

```html
<h2 id="description"></h2>
```

✅ Mivel a fiókleírás címként funkcionál az alatta lévő tartalomhoz, szemantikailag címsorként van megjelölve. Tudj meg többet arról, hogy a [címsorok struktúrája](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) miért fontos az akadálymentesség szempontjából, és vizsgáld meg kritikusan az oldalt, hogy meghatározd, mi más lehetne címsor.

Ezután hozzunk létre egy új függvényt az `app.js` fájlban a helyőrzők kitöltéséhez:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

Először ellenőrizzük, hogy rendelkezünk-e a szükséges fiókadatokkal, mielőtt továbbmennénk. Ezután a korábban létrehozott `updateElement()` függvényt használjuk a HTML frissítéséhez.

> Az egyenleg megjelenítésének szebbé tételéhez a [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) metódust használjuk, hogy az értéket 2 tizedesjeggyel jelenítsük meg.

Most minden alkalommal, amikor a műszerfal betöltődik, meg kell hívnunk az `updateDashboard()` függvényt. Ha már befejezted az [1. lecke feladatát](../1-template-route/assignment.md), ez egyszerű lesz, különben használhatod a következő megvalósítást.

Add hozzá ezt a kódot az `updateRoute()` függvény végéhez:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

És frissítsd az útvonalak definícióját ezzel:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Ezzel a változtatással minden alkalommal, amikor a műszerfal oldal megjelenik, az `updateDashboard()` függvény hívódik meg. Bejelentkezés után látnod kell az egyenleget, a pénznemet és a leírást.

## Táblázatsorok dinamikus létrehozása HTML sablonokkal

Az [első leckében](../1-template-route/README.md) HTML sablonokat használtunk a navigáció megvalósításához az alkalmazásunkban, a [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) metódussal együtt. A sablonok kisebbek is lehetnek, és használhatók az oldal ismétlődő részeinek dinamikus kitöltésére.

Hasonló megközelítést fogunk alkalmazni a tranzakciók listájának megjelenítésére a HTML táblázatban.

### Feladat

Adj hozzá egy új sablont a HTML `<body>` részéhez:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Ez a sablon egyetlen
Ha a `test` fiókot használod a bejelentkezéshez, most már látnod kell egy tranzakciós listát a vezérlőpulton 🎉.

---

## 🚀 Kihívás

Dolgozzatok együtt azon, hogy a vezérlőpult oldal úgy nézzen ki, mint egy valódi banki alkalmazás. Ha már formáztátok az alkalmazást, próbáljátok meg [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) használatával [reszponzív dizájnt](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) készíteni, amely jól működik mind asztali, mind mobil eszközökön.

Íme egy példa egy formázott vezérlőpult oldalra:

![Példa eredmény képernyőképe a vezérlőpult formázása után](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.hu.png)

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/46)

## Feladat

[Refaktoráld és kommentáld a kódodat](assignment.md)

---

**Felelősségkizárás**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével készült. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális, emberi fordítást igénybe venni. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.