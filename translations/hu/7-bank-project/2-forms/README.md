<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b667b7d601e2ee19acb5aa9d102dc9f3",
  "translation_date": "2025-08-28T03:30:07+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "hu"
}
-->
# Banki alkalmazás készítése 2. rész: Bejelentkezési és regisztrációs űrlap létrehozása

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/43)

### Bevezetés

Szinte minden modern webalkalmazásban lehetőséged van fiók létrehozására, hogy saját privát tered legyen. Mivel egyszerre több felhasználó is hozzáférhet egy webalkalmazáshoz, szükség van egy mechanizmusra, amely külön tárolja az egyes felhasználók személyes adatait, és kiválasztja, hogy mely információkat jelenítse meg. Nem térünk ki arra, hogyan kell [biztonságosan kezelni a felhasználói azonosítást](https://en.wikipedia.org/wiki/Authentication), mivel ez önmagában is egy kiterjedt téma, de gondoskodunk arról, hogy minden felhasználó létrehozhasson egy (vagy több) bankszámlát az alkalmazásunkban.

Ebben a részben HTML-űrlapokat fogunk használni a bejelentkezés és regisztráció hozzáadásához a webalkalmazásunkhoz. Megnézzük, hogyan lehet programozottan adatokat küldeni egy szerver API-nak, és végül hogyan lehet alapvető érvényességi szabályokat meghatározni a felhasználói bemenetekhez.

### Előfeltétel

El kell végezned a webalkalmazás [HTML sablonok és útvonalak](../1-template-route/README.md) leckéjét. Telepítened kell a [Node.js](https://nodejs.org) alkalmazást, és [helyileg futtatnod kell a szerver API-t](../api/README.md), hogy adatokat tudj küldeni a fiókok létrehozásához.

**Fontos megjegyzés**  
Két terminált kell egyszerre futtatnod, az alábbiak szerint:  
1. Az általunk készített fő banki alkalmazás számára, amelyet a [HTML sablonok és útvonalak](../1-template-route/README.md) leckében készítettünk.  
2. A [Banki alkalmazás szerver API](../api/README.md) számára, amelyet az előzőekben állítottunk be.  

A lecke folytatásához mindkét szervert futtatnod kell. Ezek különböző portokon hallgatnak (port `3000` és port `5000`), így minden rendben kell, hogy működjön.

Ellenőrizheted, hogy a szerver megfelelően fut-e, ha végrehajtod az alábbi parancsot egy terminálban:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Űrlapok és vezérlők

A `<form>` elem egy HTML-dokumentum azon szakaszát foglalja magában, ahol a felhasználó adatokat adhat meg és küldhet el interaktív vezérlők segítségével. Számos felhasználói felület (UI) vezérlő használható egy űrlapon belül, amelyek közül a leggyakoribbak a `<input>` és `<button>` elemek.

Számos különböző [típus](https://developer.mozilla.org/docs/Web/HTML/Element/input) létezik a `<input>` elemekhez. Például, ha egy mezőt szeretnél létrehozni, ahol a felhasználó megadhatja a felhasználónevét, használhatod az alábbi kódot:

```html
<input id="username" name="username" type="text">
```

A `name` attribútumot a tulajdonság nevének használják, amikor az űrlap adatait elküldik. Az `id` attribútumot pedig arra használják, hogy egy `<label>` elemet társítsanak az űrlapvezérlőhöz.

> Nézd meg a [`<input>` típusok](https://developer.mozilla.org/docs/Web/HTML/Element/input) és [egyéb űrlapvezérlők](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) teljes listáját, hogy képet kapj az összes natív UI-elemről, amelyet használhatsz az UI építésekor.

✅ Fontos megjegyezni, hogy a `<input>` egy [üres elem](https://developer.mozilla.org/docs/Glossary/Empty_element), amelyhez *nem* kell záró címkét hozzáadni. Használhatod azonban az önzáró `<input/>` jelölést, de ez nem kötelező.

A `<button>` elem egy űrlapon belül kicsit különleges. Ha nem adsz meg `type` attribútumot, akkor alapértelmezés szerint elküldi az űrlap adatait a szervernek, amikor megnyomják. Az alábbiakban láthatók a lehetséges `type` értékek:

- `submit`: Alapértelmezett érték egy `<form>`-on belül, a gomb az űrlap elküldését indítja el.
- `reset`: A gomb visszaállítja az összes űrlapvezérlőt az eredeti értékeire.
- `button`: Nem rendel alapértelmezett viselkedést a gombhoz. Egyedi műveleteket rendelhetsz hozzá JavaScript segítségével.

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

Ha közelebbről megnézed, észreveheted, hogy itt egy `<label>` elemet is hozzáadtunk. A `<label>` elemeket arra használják, hogy nevet adjanak a UI-vezérlőknek, például a felhasználónév mezőnknek. A címkék fontosak az űrlapok olvashatósága szempontjából, de további előnyökkel is járnak:

- Egy címke társítása egy űrlapvezérlőhöz segíti a segítő technológiákat használó felhasználókat (például képernyőolvasót), hogy megértsék, milyen adatokat várnak tőlük.
- A címkére kattintva közvetlenül a kapcsolódó bemenetre helyezheted a fókuszt, ami megkönnyíti az elérést érintőképernyős eszközökön.

> A [hozzáférhetőség](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) a weben egy nagyon fontos téma, amelyet gyakran figyelmen kívül hagynak. A [szemantikus HTML-elemek](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) használatával nem nehéz hozzáférhető tartalmat létrehozni, ha megfelelően használod őket. [Olvass többet a hozzáférhetőségről](https://developer.mozilla.org/docs/Web/Accessibility), hogy elkerüld a gyakori hibákat, és felelősségteljes fejlesztővé válj.

Most adjunk hozzá egy második űrlapot a regisztrációhoz, közvetlenül az előző alá:

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

A `value` attribútum használatával alapértelmezett értéket adhatunk meg egy adott bemenethez.  
Figyeld meg, hogy a `balance` mezőhöz a `number` típust használtuk. Másképp néz ki, mint a többi mező? Próbáld ki, hogyan lehet vele interakcióba lépni.

✅ Tudsz navigálni és interakcióba lépni az űrlapokkal csak billentyűzet használatával? Hogyan tennéd ezt?

## Adatok elküldése a szervernek

Most, hogy van egy működő felhasználói felületünk, a következő lépés az adatok elküldése a szervernek. Próbáljuk ki gyorsan a jelenlegi kódunkkal: mi történik, ha rákattintasz a *Bejelentkezés* vagy *Regisztráció* gombra?

Észrevetted a változást a böngésződ URL-sávjában?

![Képernyőkép a böngésző URL-változásáról a Regisztráció gombra kattintás után](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.hu.png)

Az alapértelmezett művelet egy `<form>` esetében az, hogy az űrlapot elküldi az aktuális szerver URL-jére a [GET metódus](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3) használatával, az űrlap adatait közvetlenül az URL-hez fűzve. Ez a módszer azonban néhány hátránnyal jár:

- Az elküldött adatok mérete nagyon korlátozott (kb. 2000 karakter).
- Az adatok közvetlenül láthatók az URL-ben (nem ideális jelszavak esetén).
- Nem működik fájlok feltöltésével.

Ezért megváltoztathatod a metódust [POST metódusra](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5), amely az űrlap adatait a HTTP-kérés törzsében küldi el a szervernek, az előző korlátozások nélkül.

> Bár a POST a leggyakrabban használt módszer az adatok elküldésére, [bizonyos speciális esetekben](https://www.w3.org/2001/tag/doc/whenToUseGet.html) előnyösebb lehet a GET metódus használata, például keresőmező megvalósításakor.

### Feladat

Adj hozzá `action` és `method` tulajdonságokat a regisztrációs űrlaphoz:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Most próbálj meg regisztrálni egy új fiókot a neveddel. A *Regisztráció* gombra kattintás után valami ilyesmit kell látnod:

![Böngészőablak a localhost:5000/api/accounts címen, amely JSON-karakterláncot mutat a felhasználói adatokkal](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.hu.png)

Ha minden rendben van, a szerver válaszol a kérésedre egy [JSON](https://www.json.org/json-en.html) válasszal, amely tartalmazza a létrehozott fiók adatait.

✅ Próbálj meg újra regisztrálni ugyanazzal a névvel. Mi történik?
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

Bár ez a konkrét szervermegvalósítás nem szab meg konkrét korlátokat a mezők maximális hosszára, mindig jó gyakorlat ésszerű korlátokat meghatározni a felhasználói szövegbevitelnél.

Adj hozzá egy `maxlength` attribútumot a szövegmezőkhöz:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Ha most megnyomod a *Regisztráció* gombot, és egy mező nem felel meg az általunk meghatározott érvényességi szabályoknak, akkor valami ilyesmit kellene látnod:

![Képernyőkép, amely a validációs hibát mutatja, amikor megpróbáljuk elküldeni az űrlapot](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.hu.png)

Az ilyen validáció, amely *mielőtt* bármilyen adatot elküldenénk a szervernek történik, **kliensoldali** validációnak nevezik. De vedd figyelembe, hogy nem mindig lehetséges minden ellenőrzést elvégezni az adatok elküldése nélkül. Például itt nem tudjuk ellenőrizni, hogy létezik-e már egy fiók ugyanazzal a felhasználónévvel, anélkül hogy kérés küldenénk a szervernek. A szerveren végzett további ellenőrzést **szerveroldali** validációnak nevezzük.

Általában mindkettőt meg kell valósítani, és bár a kliensoldali validáció javítja a felhasználói élményt azáltal, hogy azonnali visszajelzést ad a felhasználónak, a szerveroldali validáció elengedhetetlen annak biztosításához, hogy a kezelt felhasználói adatok megbízhatóak és biztonságosak legyenek.

---

## 🚀 Kihívás

Mutass egy hibaüzenetet a HTML-ben, ha a felhasználó már létezik.

Íme egy példa arra, hogyan nézhet ki a végleges bejelentkezési oldal egy kis stílus hozzáadása után:

![Képernyőkép a bejelentkezési oldalról, miután CSS stílusokat adtunk hozzá](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.hu.png)

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/44)

## Áttekintés és önálló tanulás

A fejlesztők nagyon kreatívak lettek az űrlapkészítési megoldásaikban, különösen a validációs stratégiák terén. Ismerd meg a különböző űrlapfolyamatokat a [CodePen](https://codepen.com) böngészésével; találsz érdekes és inspiráló űrlapokat?

## Feladat

[Stílusozd a banki alkalmazásodat](assignment.md)

---

**Felelősségkizárás**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével készült. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt a professzionális, emberi fordítás igénybevétele. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.