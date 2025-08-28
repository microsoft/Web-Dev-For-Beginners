<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-28T03:36:38+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "hu"
}
-->
# Banki alkalmazás készítése 1. rész: HTML sablonok és útvonalak egy webalkalmazásban

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/41)

### Bevezetés

A JavaScript megjelenése óta a böngészőkben a weboldalak interaktívabbá és összetettebbé váltak, mint valaha. A webes technológiákat ma már gyakran használják teljes funkcionalitású alkalmazások létrehozására, amelyek közvetlenül a böngészőben futnak, és amelyeket [webalkalmazásoknak](https://en.wikipedia.org/wiki/Web_application) nevezünk. Mivel a webalkalmazások rendkívül interaktívak, a felhasználók nem szeretnének minden egyes művelet végrehajtásakor teljes oldalfrissítést várni. Ezért használják a JavaScriptet az HTML közvetlen frissítésére a DOM segítségével, hogy gördülékenyebb felhasználói élményt nyújtsanak.

Ebben a leckében lefektetjük egy banki webalkalmazás alapjait, HTML sablonokat használva több képernyő létrehozásához, amelyeket frissítés nélkül megjeleníthetünk és módosíthatunk.

### Előfeltétel

Szükséged lesz egy helyi webszerverre, hogy tesztelhesd a webalkalmazást, amelyet ebben a leckében készítünk. Ha nincs ilyen, telepítsd a [Node.js](https://nodejs.org) programot, és használd a `npx lite-server` parancsot a projektmappádból. Ez létrehoz egy helyi webszervert, és megnyitja az alkalmazásodat egy böngészőben.

### Előkészület

A számítógépeden hozz létre egy `bank` nevű mappát, benne egy `index.html` nevű fájllal. Kezdjük ezzel az HTML [alapsablonnal](https://en.wikipedia.org/wiki/Boilerplate_code):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## HTML sablonok

Ha több képernyőt szeretnél létrehozni egy weboldalhoz, az egyik megoldás az lehet, hogy minden megjeleníteni kívánt képernyőhöz külön HTML fájlt hozol létre. Ez a megoldás azonban néhány kényelmetlenséggel jár:

- Az egész HTML-t újra kell tölteni képernyőváltáskor, ami lassú lehet.
- Nehéz adatokat megosztani a különböző képernyők között.

Egy másik megközelítés az, hogy csak egy HTML fájlt használunk, és több [HTML sablont](https://developer.mozilla.org/docs/Web/HTML/Element/template) definiálunk a `<template>` elem segítségével. A sablon egy újrafelhasználható HTML blokk, amelyet a böngésző nem jelenít meg, és amelyet futásidőben JavaScript segítségével kell létrehozni.

### Feladat

Készítsünk egy banki alkalmazást két képernyővel: a bejelentkezési oldallal és a vezérlőpulttal. Először adjunk hozzá egy helyőrző elemet az HTML törzséhez, amelyet az alkalmazás különböző képernyőinek megjelenítésére használunk:

```html
<div id="app">Loading...</div>
```

Egy `id` attribútumot adunk neki, hogy később JavaScript segítségével könnyebben megtaláljuk.

> Tipp: mivel ennek az elemnek a tartalma cserélve lesz, tehetünk bele egy betöltési üzenetet vagy jelzőt, amely az alkalmazás betöltése közben jelenik meg.

Ezután adjuk hozzá az HTML sablont a bejelentkezési oldalhoz. Egyelőre csak egy címet és egy szekciót helyezünk el benne, amely egy navigációs linket tartalmaz.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Majd adjunk hozzá egy másik HTML sablont a vezérlőpult oldalhoz. Ez az oldal különböző szekciókat fog tartalmazni:

- Egy fejlécet címmel és kijelentkezési linkkel
- A bankszámla aktuális egyenlegét
- Egy tranzakciós listát, amely egy táblázatban jelenik meg

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> Tipp: HTML sablonok létrehozásakor, ha meg szeretnéd nézni, hogyan fog kinézni, a `<template>` és `</template>` sorokat megjegyzésbe teheted `<!-- -->` használatával.

✅ Miért használunk `id` attribútumokat a sablonokon? Használhatnánk valami mást, például osztályokat?

## Sablonok megjelenítése JavaScript segítségével

Ha megnyitod a jelenlegi HTML fájlt egy böngészőben, azt fogod látni, hogy a `Loading...` üzenetnél elakad. Ez azért van, mert JavaScript kódot kell hozzáadnunk a HTML sablonok létrehozásához és megjelenítéséhez.

Egy sablon létrehozása általában 3 lépésben történik:

1. A sablonelem lekérése a DOM-ból, például [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById) használatával.
2. A sablonelem klónozása [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode) segítségével.
3. A DOM-hoz való csatolása egy látható elem alá, például [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) használatával.

✅ Miért kell klónozni a sablont, mielőtt a DOM-hoz csatoljuk? Mi történne, ha kihagynánk ezt a lépést?

### Feladat

Hozz létre egy új fájlt `app.js` néven a projektmappádban, és importáld ezt a fájlt az HTML `<head>` szekciójába:

```html
<script src="app.js" defer></script>
```

Most a `app.js` fájlban hozzunk létre egy új `updateRoute` nevű függvényt:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Itt pontosan a fent leírt 3 lépést hajtjuk végre. Létrehozzuk a sablont a `templateId` azonosítóval, és annak klónozott tartalmát az alkalmazás helyőrzőjébe helyezzük. Figyelj arra, hogy a `cloneNode(true)` használatával az egész sablonfát másoljuk.

Most hívd meg ezt a függvényt az egyik sablonnal, és nézd meg az eredményt.

```js
updateRoute('login');
```

✅ Mi a célja ennek a kódnak: `app.innerHTML = '';`? Mi történik nélküle?

## Útvonalak létrehozása

Webalkalmazás esetén az *útvonalkezelés* azt jelenti, hogy **URL-eket** rendelünk hozzá a megjelenítendő képernyőkhöz. Egy több HTML fájlt tartalmazó weboldalon ez automatikusan történik, mivel a fájlútvonalak tükröződnek az URL-ben. Például, ha ezek a fájlok vannak a projektmappádban:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Ha létrehozol egy webszervert `mywebsite` gyökérként, az URL-hozzárendelés így néz ki:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Azonban a webalkalmazásunkhoz egyetlen HTML fájlt használunk, amely az összes képernyőt tartalmazza, így ez az alapértelmezett viselkedés nem segít nekünk. Ezt a hozzárendelést manuálisan kell létrehoznunk, és JavaScript segítségével frissítenünk a megjelenített sablont.

### Feladat

Egy egyszerű objektumot fogunk használni, hogy megvalósítsunk egy [térképet](https://en.wikipedia.org/wiki/Associative_array) az URL-útvonalak és a sablonjaink között. Add hozzá ezt az objektumot az `app.js` fájl tetejére.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Most módosítsuk egy kicsit az `updateRoute` függvényt. Ahelyett, hogy közvetlenül a `templateId`-t adnánk át argumentumként, először meg kell néznünk az aktuális URL-t, majd a térképünket használva meg kell szereznünk a megfelelő sablonazonosítót. A [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) segítségével csak az URL útvonal szakaszát kapjuk meg.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Itt az általunk deklarált útvonalakat hozzárendeltük a megfelelő sablonhoz. Kipróbálhatod, hogy helyesen működik-e, ha manuálisan megváltoztatod az URL-t a böngésződben.

✅ Mi történik, ha egy ismeretlen útvonalat írsz be az URL-be? Hogyan oldhatnánk meg ezt?

## Navigáció hozzáadása

Az alkalmazásunk következő lépése az, hogy lehetőséget adjunk az oldalak közötti navigációra anélkül, hogy manuálisan kellene megváltoztatni az URL-t. Ez két dolgot jelent:

1. Az aktuális URL frissítése
2. A megjelenített sablon frissítése az új URL alapján

A második részt már megoldottuk az `updateRoute` függvénnyel, így ki kell találnunk, hogyan frissítsük az aktuális URL-t.

JavaScriptet kell használnunk, pontosabban a [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState) metódust, amely lehetővé teszi az URL frissítését és egy új bejegyzés létrehozását a böngészési előzményekben, anélkül, hogy újratöltenénk az HTML-t.

> Megjegyzés: Bár az HTML horgony elem [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) önmagában is használható különböző URL-ekre mutató hivatkozások létrehozására, alapértelmezés szerint újratölti az HTML-t. Ezt a viselkedést meg kell akadályoznunk, amikor egyedi JavaScript útvonalkezelést használunk, a `preventDefault()` függvény használatával a kattintási eseményen.

### Feladat

Hozzunk létre egy új függvényt, amelyet az alkalmazásunkban navigációra használhatunk:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Ez a metódus először frissíti az aktuális URL-t az adott útvonal alapján, majd frissíti a sablont. A `window.location.origin` tulajdonság visszaadja az URL gyökerét, lehetővé téve, hogy egy adott útvonalból teljes URL-t állítsunk össze.

Most, hogy megvan ez a függvény, foglalkozhatunk azzal a problémával, amely akkor jelentkezik, ha egy útvonal nem egyezik a meghatározott útvonalak egyikével sem. Módosítjuk az `updateRoute` függvényt úgy, hogy hozzáadunk egy visszaesést egy meglévő útvonalhoz, ha nem találunk egyezést.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Ha egy útvonal nem található, mostantól a `login` oldalra irányítunk.

Most hozzunk létre egy függvényt, amely az URL-t kapja meg, amikor egy linkre kattintanak, és megakadályozza a böngésző alapértelmezett link viselkedését:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Egészítsük ki a navigációs rendszert azzal, hogy kötéseket adunk az HTML *Bejelentkezés* és *Kijelentkezés* linkjeihez.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

A fenti `event` objektum rögzíti a `click` eseményt, és átadja azt az `onLinkClick` függvényünknek.

Az [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) attribútum használatával kötjük a `click` eseményt JavaScript kódhoz, itt a `navigate()` függvény hívásához.

Próbáld ki ezeket a linkeket, most már képesnek kell lenned az alkalmazás különböző képernyői között navigálni.

✅ A `history.pushState` metódus az HTML5 szabvány része, és [minden modern böngészőben](https://caniuse.com/?search=pushState) implementálva van. Ha webalkalmazást készítesz régebbi böngészőkhöz, van egy trükk, amelyet használhatsz ennek az API-nak a helyett: a [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) használatával az útvonalkezelést megvalósíthatod, amely működik a szokásos horgonynavigációval, és nem tölti újra az oldalt, mivel eredetileg belső hivatkozások létrehozására szolgált egy oldalon belül.

## A böngésző vissza- és előre gombjainak kezelése

A `history.pushState` használata új bejegyzéseket hoz létre a böngésző navigációs előzményeiben. Ezt ellenőrizheted, ha lenyomva tartod a böngésződ *vissza gombját*, valami ilyesmit kell látnod:

![Navigációs előzmények képernyőképe](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.hu.png)

Ha néhányszor rákattintasz a vissza gombra, látni fogod, hogy az aktuális URL megváltozik, és az előzmények frissülnek, de ugyanaz a sablon jelenik meg.

Ez azért van, mert az alkalmazás nem tudja, hogy minden alkalommal, amikor az előzmények megváltoznak, meg kell hívnunk az `updateRoute()` függvényt. Ha megnézed a [`history.pushState` dokumentációját](https://developer.mozilla.org/docs/Web/API/History/pushState), láthatod, hogy ha az állapot megváltozik - azaz egy másik URL-re léptünk -, a [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) esemény aktiválódik. Ezt fogjuk használni a probléma megoldására.

### Feladat

Annak biztosítása érdekében, hogy a megjelenített sablon frissüljön, amikor a böngésző előzményei megváltoznak, egy új függvényt csatolunk, amely meghívja az `updateRoute()` függvényt. Ezt az `app.js` fájl alján tesszük meg:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Megjegyzés: itt egy [nyílfüggvényt](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) használtunk a `popstate` eseménykezelő deklarálásához tömörség érdekében, de egy hagyományos függvény is ugyanúgy működne.

Itt van egy frissítő videó a nyílfüggvényekről:

[![Nyílfüggvények](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Nyílfüggvények")

> 🎥 Kattints a fenti képre egy videóért a nyílfüggvényekről.

Most próbáld ki a böngésződ vissza- és előre gombjait, és ellenőrizd, hogy a megjelenített útvonal helyesen frissül-e ezúttal.

---

## 🚀 Kihívás

Adj hozzá egy új sablont és útvonalat egy harmadik oldalhoz, amely az alkalmazás készítőinek nevét mutatja.

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/42)

## Áttekintés és önálló tanulás

Az útvonalkezelés a webfejlesztés egyik meglepően bonyolult része, különösen, ahogy a web a lapfrissítési viselkedésekről az Egylapos Alkalmazások lapfrissítéseire vált. Olvass egy kicsit arról, hogy az [Azure Static Web App szolgáltatás](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) hogyan kezeli az útvonalakat. Meg tudod magyarázni, miért szükségesek az ott leírt döntések?

## Feladat

[Fejleszd az útvonalkezelést](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális, emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.