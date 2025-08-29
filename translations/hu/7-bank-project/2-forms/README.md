<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8baca047d77a5f43fa4099c0578afa42",
  "translation_date": "2025-08-29T10:20:58+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "hu"
}
-->
# Banki Alkalmazás Készítése 2. rész: Bejelentkezési és Regisztrációs Űrlap Készítése

## Előadás Előtti Kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/43)

### Bevezetés

Szinte minden modern webalkalmazásban létrehozhatsz egy fiókot, hogy saját privát tered legyen. Mivel több felhasználó is hozzáférhet egy webalkalmazáshoz egyszerre, szükség van egy mechanizmusra, amely külön tárolja minden felhasználó személyes adatait, és kiválasztja, hogy mely információkat jelenítse meg. Nem foglalkozunk azzal, hogyan kezeljük [a felhasználói identitást biztonságosan](https://en.wikipedia.org/wiki/Authentication), mivel ez önmagában egy kiterjedt téma, de gondoskodunk arról, hogy minden felhasználó létrehozhasson egy (vagy több) bankszámlát az alkalmazásunkban.

Ebben a részben HTML űrlapokat fogunk használni, hogy bejelentkezési és regisztrációs funkciót adjunk a webalkalmazásunkhoz. Megnézzük, hogyan küldhetjük el az adatokat programozottan egy szerver API-nak, és végül hogyan határozhatunk meg alapvető érvényességi szabályokat a felhasználói bemenetekhez.

### Előfeltétel

El kell végezned a webalkalmazás [HTML sablonok és útvonalak](../1-template-route/README.md) részét ehhez a leckéhez. Továbbá telepítened kell a [Node.js](https://nodejs.org) programot, és [helyben futtatnod kell a szerver API-t](../api/README.md), hogy adatokat küldhess a fiókok létrehozásához.

**Fontos megjegyzés**
Két terminált kell futtatnod egyszerre, az alábbiak szerint:
1. A fő banki alkalmazás, amelyet a [HTML sablonok és útvonalak](../1-template-route/README.md) leckében készítettünk.
2. A [Banki Alkalmazás szerver API](../api/README.md), amelyet az előbb állítottunk be.

Mindkét szervert futtatnod kell, hogy folytathasd a lecke további részét. Ezek különböző portokon hallgatnak (port `3000` és port `5000`), így minden rendben kell működjön.

Ellenőrizheted, hogy a szerver megfelelően fut-e, ha végrehajtod ezt a parancsot egy terminálban:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Űrlap és vezérlők

A `<form>` elem egy HTML dokumentum azon szakaszát foglalja magában, ahol a felhasználó interaktív vezérlőkkel adatokat adhat meg és küldhet el. Számos felhasználói felület (UI) vezérlő használható egy űrlapon belül, a leggyakoribbak a `<input>` és `<button>` elemek.

Számos különböző [típus](https://developer.mozilla.org/docs/Web/HTML/Element/input) létezik a `<input>` elemekhez. Például, ha szeretnél egy mezőt létrehozni, ahol a felhasználó megadhatja a felhasználónevét, használhatod:

```html
<input id="username" name="username" type="text">
```

A `name` attribútum lesz a tulajdonság neve, amikor az űrlap adatai elküldésre kerülnek. Az `id` attribútumot pedig arra használjuk, hogy egy `<label>` elemet társítsunk az űrlap vezérlőjéhez.

> Nézd meg a [`<input>` típusok](https://developer.mozilla.org/docs/Web/HTML/Element/input) teljes listáját és [más űrlap vezérlőket](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls), hogy képet kapj az összes natív UI elemről, amelyet használhatsz az UI építésekor.

✅ Fontos megjegyezni, hogy a `<input>` egy [üres elem](https://developer.mozilla.org/docs/Glossary/Empty_element), amelyhez *nem* kell záró címkét hozzáadni. Használhatod azonban az önzáró `<input/>` jelölést, de ez nem kötelező.

A `<button>` elem egy űrlapon belül kicsit különleges. Ha nem adsz meg `type` attribútumot, akkor automatikusan elküldi az űrlap adatait a szervernek, amikor megnyomják. Az alábbiakban láthatók a lehetséges `type` értékek:

- `submit`: Alapértelmezett egy `<form>`-on belül, a gomb elindítja az űrlap elküldési műveletét.
- `reset`: A gomb visszaállítja az összes űrlap vezérlőt az eredeti értékére.
- `button`: Nem rendel alapértelmezett viselkedést a gombhoz, amikor megnyomják. Egyedi műveleteket rendelhetsz hozzá JavaScript segítségével.

### Feladat

Kezdjük azzal, hogy hozzáadunk egy űrlapot a `login` sablonhoz. Szükségünk lesz egy *felhasználónév* mezőre és egy *Bejelentkezés* gombra.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Ha közelebbről megnézed, észreveheted, hogy itt egy `<label>` elemet is hozzáadtunk. A `<label>` elemeket arra használjuk, hogy nevet adjunk a UI vezérlőknek, például a felhasználónév mezőnknek. A címkék fontosak az űrlapok olvashatósága szempontjából, de további előnyökkel is járnak:

- Egy címke társítása egy űrlap vezérlőhöz segíti a segítő technológiákat használó felhasználókat (például képernyőolvasót), hogy megértsék, milyen adatokat várnak tőlük.
- A címkére kattintva közvetlenül fókuszba helyezheted a társított bemenetet, ami megkönnyíti az elérést érintőképernyős eszközökön.

> [Hozzáférhetőség](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) a weben egy nagyon fontos téma, amelyet gyakran figyelmen kívül hagynak. A [szemantikus HTML elemek](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) használatával nem nehéz hozzáférhető tartalmat létrehozni, ha megfelelően használod őket. [Olvass többet a hozzáférhetőségről](https://developer.mozilla.org/docs/Web/Accessibility), hogy elkerüld a gyakori hibákat, és felelősségteljes fejlesztővé válj.

Most hozzáadunk egy második űrlapot a regisztrációhoz, közvetlenül az előző alá:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

A `value` attribútum segítségével alapértelmezett értéket adhatunk meg egy adott bemenethez.
Figyeld meg, hogy a `balance` mező `number` típusú. Másképp néz ki, mint a többi bemenet? Próbáld ki, hogyan lehet vele interakcióba lépni.

✅ Tudsz navigálni és interakcióba lépni az űrlapokkal csak billentyűzet segítségével? Hogyan tennéd ezt?

## Adatok elküldése a szervernek

Most, hogy van egy működőképes UI, a következő lépés az adatok elküldése a szervernek. Tegyünk egy gyors tesztet a jelenlegi kódunkkal: mi történik, ha rákattintasz a *Bejelentkezés* vagy *Regisztráció* gombra?

Észrevetted a változást a böngésződ URL szakaszában?

![Képernyőkép a böngésző URL változásáról a Regisztráció gomb megnyomása után](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.hu.png)

Az alapértelmezett művelet egy `<form>` esetében az, hogy az űrlapot elküldi az aktuális szerver URL-re a [GET metódus](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3) használatával, közvetlenül az URL-hez csatolva az űrlap adatokat. Ez a módszer azonban néhány korláttal rendelkezik:

- Az elküldött adatok mérete nagyon korlátozott (kb. 2000 karakter)
- Az adatok közvetlenül láthatók az URL-ben (nem ideális jelszavak esetében)
- Nem működik fájlok feltöltésével

Ezért megváltoztathatod, hogy a [POST metódust](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) használja, amely az űrlap adatokat az HTTP kérés törzsében küldi el a szervernek, az előző korlátok nélkül.

> Bár a POST a leggyakrabban használt módszer az adatok elküldésére, [bizonyos specifikus helyzetekben](https://www.w3.org/2001/tag/doc/whenToUseGet.html) előnyösebb lehet a GET metódus használata, például keresőmező megvalósításakor.

### Feladat

Adj hozzá `action` és `method` tulajdonságokat a regisztrációs űrlaphoz:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Most próbálj meg regisztrálni egy új fiókot a neveddel. A *Regisztráció* gomb megnyomása után valami ilyesmit kell látnod:

![Böngészőablak a localhost:5000/api/accounts címen, amely JSON karakterláncot mutat a felhasználói adatokkal](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.hu.png)

Ha minden jól megy, a szerver válaszolni fog a kérésedre egy [JSON](https://www.json.org/json-en.html) válasszal, amely tartalmazza a létrehozott fiók adatait.

✅ Próbálj meg újra regisztrálni ugyanazzal a névvel. Mi történik?

## Adatok elküldése az oldal újratöltése nélkül

Ahogy valószínűleg észrevetted, van egy kis probléma az általunk használt megközelítéssel: amikor elküldjük az űrlapot, kilépünk az alkalmazásunkból, és a böngésző átirányít a szerver URL-re. Arra törekszünk, hogy elkerüljük az összes oldal újratöltést a webalkalmazásunkban, mivel [Egyoldalas alkalmazást (SPA)](https://en.wikipedia.org/wiki/Single-page_application) készítünk.

Ahhoz, hogy az űrlap adatokat elküldjük a szervernek anélkül, hogy kényszerítenénk az oldal újratöltését, JavaScript kódot kell használnunk. Ahelyett, hogy egy URL-t helyeznénk el a `<form>` elem `action` tulajdonságában, bármilyen JavaScript kódot használhatunk, amelyet a `javascript:` karakterlánc előz meg, hogy egyedi műveletet hajtsunk végre. Ennek használata azt is jelenti, hogy néhány feladatot, amelyeket korábban automatikusan végzett a böngésző, neked kell megvalósítanod:

- Az űrlap adatok lekérése
- Az űrlap adatok átalakítása és kódolása megfelelő formátumba
- Az HTTP kérés létrehozása és elküldése a szervernek

### Feladat

Cseréld ki a regisztrációs űrlap `action` tulajdonságát erre:

```html
<form id="registerForm" action="javascript:register()">
```

Nyisd meg az `app.js` fájlt, és adj hozzá egy új `register` nevű függvényt:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Itt az űrlap elemet a `getElementById()` segítségével lekérjük, és a [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) segédprogramot használjuk, hogy a vezérlőkből származó értékeket kulcs/érték párok halmazaként kinyerjük. Ezután az adatokat egy szokásos objektummá alakítjuk a [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) segítségével, végül pedig [JSON](https://www.json.org/json-en.html) formátumba sorosítjuk, amelyet gyakran használnak az adatok cseréjére a weben.

Az adatok készen állnak a szervernek való elküldésre. Hozz létre egy új `createAccount` nevű függvényt:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Mit csinál ez a függvény? Először is, figyeld meg az `async` kulcsszót itt. Ez azt jelenti, hogy a függvény olyan kódot tartalmaz, amely [**aszinkron módon**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) fog végrehajtódni. Az `await` kulcsszóval együtt használva lehetővé teszi, hogy várjunk az aszinkron kód végrehajtására - például itt a szerver válaszára - mielőtt folytatnánk.

Itt egy gyors videó az `async/await` használatáról:

[![Async és Await a promesek kezeléséhez](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async és Await a promesek kezeléséhez")

> 🎥 Kattints a fenti képre egy videóért az async/await használatáról.

A `fetch()` API-t használjuk, hogy JSON adatokat küldjünk a szervernek. Ez a módszer 2 paramétert vesz:

- A szerver URL-jét, így itt visszahelyezzük a `//localhost:5000/api/accounts` címet.
- A kérés beállításait. Itt állítjuk be a metódust `POST`-ra, és megadjuk a kérés `body`-ját. Mivel JSON adatokat küldünk a szervernek, be kell állítanunk a `Content-Type` fejlécet `application/json` értékre, hogy a szerver tudja, hogyan értelmezze a tartalmat.

Mivel a szerver JSON válasszal fog válaszolni a kérésre, használhatjuk az `await response.json()`-t, hogy elemezzük a JSON tartalmat, és visszaadjuk az eredményül kapott objektumot. Figyelj arra, hogy ez a módszer aszinkron, így itt használjuk az `await` kulcsszót, mielőtt visszatérnénk, hogy megbizonyosodjunk arról, hogy az elemzés során fellépő hibák is kezelve vannak.

Most adj hozzá néhány kódot a `register` függvényhez, hogy meghívja a `createAccount()`-ot:

```js
const result = await createAccount(jsonData);
```

Mivel itt használjuk az `await` kulcsszót, hozzá kell adnunk az `async` kulcsszót a register függvény elé:

```js
async function register() {
```

Végül adj hozzá néhány naplózást az eredmény ellenőrzéséhez. A végső függvénynek így kell kinéznie:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

Ez egy kicsit hosszú volt, de eljutottunk ide! Ha megnyitod a [böngésző fejlesztői eszközeit](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools), és megpróbálsz regisztrálni egy új fiókot, nem kell változást látnod a weboldalon, de egy üzenet jelenik meg a konzolon, amely megerősíti, hogy minden működik.

![Képernyőkép, amely naplóüzenetet mutat a böngésző konzoljában](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.hu.png)

✅ Gondolod, hogy az adatok biztonságosan kerülnek elküldésre a szervernek? Mi történik, ha valaki képes lenne elfogni a kérést? Olvass az [HTTPS-ről](https://en.wikipedia.org/wiki/HTTPS), hogy többet tudj meg a biztonságos adatkommunikációról.

## Adatok érvényesítése

Ha megpróbálsz regisztrálni egy új fiókot anélkül, hogy először megadnál egy felhasználónevet, láthatod, hogy a szerver hibát ad vissza a [400 (Hibás kérés)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).) státuszk
Tipp: A `:valid` és `:invalid` CSS pszeudo-osztályok használatával testre szabhatod az űrlapvezérlők megjelenését attól függően, hogy érvényesek-e vagy sem.
### Feladat

Egy új fiók létrehozásához két kötelező mező van: a felhasználónév és a pénznem, a többi mező opcionális. Frissítsd a form HTML-jét úgy, hogy a `required` attribútumot és a mező címkéjében szereplő szöveget is használd:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Bár ez a konkrét szervermegvalósítás nem szab meg konkrét korlátokat a mezők maximális hosszára, mindig jó gyakorlat ésszerű korlátokat meghatározni bármilyen felhasználói szövegbevitel esetén.

Adj hozzá egy `maxlength` attribútumot a szövegmezőkhöz:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Most, ha megnyomod a *Regisztráció* gombot, és valamelyik mező nem felel meg az általunk meghatározott érvényességi szabályoknak, valami ilyesmit kellene látnod:

![Képernyőkép, amely a validációs hibát mutatja, amikor megpróbáljuk elküldeni az űrlapot](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.hu.png)

Az ilyen validáció, amely *mielőtt* bármilyen adatot elküldenénk a szervernek történik, **kliensoldali** validációnak nevezik. De vedd figyelembe, hogy nem mindig lehetséges minden ellenőrzést elvégezni az adatok elküldése nélkül. Például itt nem tudjuk ellenőrizni, hogy létezik-e már egy fiók ugyanazzal a felhasználónévvel, anélkül hogy kérés küldenénk a szervernek. A szerveren végzett további ellenőrzést **szerveroldali** validációnak nevezzük.

Általában mindkettőt meg kell valósítani, és bár a kliensoldali validáció javítja a felhasználói élményt azáltal, hogy azonnali visszajelzést ad a felhasználónak, a szerveroldali validáció elengedhetetlen annak biztosításához, hogy a feldolgozott felhasználói adatok megbízhatóak és biztonságosak legyenek.

---

## 🚀 Kihívás

Mutass egy hibaüzenetet a HTML-ben, ha a felhasználó már létezik.

Íme egy példa arra, hogyan nézhet ki a végleges bejelentkezési oldal egy kis stílus hozzáadása után:

![Képernyőkép a bejelentkezési oldalról, miután CSS stílusokat adtunk hozzá](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.hu.png)

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/44)

## Áttekintés és önálló tanulás

A fejlesztők nagyon kreatívak lettek az űrlapkészítési erőfeszítéseik során, különösen a validációs stratégiák tekintetében. Ismerd meg a különböző űrlapfolyamatokat a [CodePen](https://codepen.com) böngészésével; találsz érdekes és inspiráló űrlapokat?

## Feladat

[Stílusozd a banki alkalmazásodat](assignment.md)

---

**Felelősségkizárás**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével készült. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális, emberi fordítást igénybe venni. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.