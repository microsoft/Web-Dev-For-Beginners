<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acb5ae00cde004304296bb97da8ff4c3",
  "translation_date": "2025-08-29T10:33:28+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "hu"
}
-->
# Terrárium Projekt 2. rész: Bevezetés a CSS-be

![Bevezetés a CSS-be](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/17)

### Bevezetés

A CSS, vagyis a Cascading Style Sheets, egy fontos problémát old meg a webfejlesztésben: hogyan tegyük szebbé a weboldalunkat. Az alkalmazások stílusossá tétele nemcsak esztétikusabbá, hanem használhatóbbá is teszi őket; a CSS segítségével Responsive Web Design-t (RWD) is készíthetünk, amely lehetővé teszi, hogy az alkalmazások bármilyen képernyőméreten jól mutassanak. A CSS nem csupán az alkalmazások megjelenésének javításáról szól; a specifikációja tartalmaz animációkat és transzformációkat is, amelyekkel kifinomult interakciókat valósíthatunk meg. A CSS Munkacsoport segít a jelenlegi CSS specifikációk karbantartásában; munkájukat követheted a [World Wide Web Consortium oldalán](https://www.w3.org/Style/CSS/members).

> Fontos megjegyezni, hogy a CSS egy folyamatosan fejlődő nyelv, mint minden a weben, és nem minden böngésző támogatja a specifikáció újabb részeit. Mindig ellenőrizd a megvalósításaidat a [CanIUse.com](https://caniuse.com) segítségével.

Ebben a leckében stílusokat adunk az online terráriumunkhoz, és megismerkedünk több CSS fogalommal: a kaszkáddal, az öröklődéssel, a szelektorok használatával, a pozicionálással, valamint a CSS-el történő elrendezések készítésével. A folyamat során elrendezzük a terráriumot, és magát a terráriumot is elkészítjük.

### Előfeltétel

A terrárium HTML-jének már készen kell lennie, hogy stílusokat tudjunk hozzáadni.

> Nézd meg a videót

> 
> [![Git és GitHub alapok videó](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Feladat

A terrárium mappádban hozz létre egy új fájlt `style.css` néven. Importáld ezt a fájlt a `<head>` szekcióba:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## A kaszkád

A Cascading Style Sheets (kaszkádoló stíluslapok) alapelve, hogy a stílusok "kaszkádolnak", vagyis a stílus alkalmazását a prioritása határozza meg. A weboldal készítője által beállított stílusok elsőbbséget élveznek a böngésző által beállítottakkal szemben. Az "inline" stílusok pedig elsőbbséget élveznek a külső stíluslapokon beállítottakkal szemben.

### Feladat

Adj hozzá egy "color: red" inline stílust az `<h1>` címkéhez:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Ezután add hozzá a következő kódot a `style.css` fájlodhoz:

```CSS
h1 {
 color: blue;
}
```

✅ Milyen szín jelenik meg a webalkalmazásodban? Miért? Meg tudod találni a módját a stílusok felülírásának? Mikor lenne erre szükséged, vagy miért nem?

---

## Öröklődés

A stílusok öröklődnek egy ős stílusból egy leszármazottra, így a beágyazott elemek öröklik a szülőik stílusait.

### Feladat

Állítsd be a body betűtípusát egy adott betűtípusra, és ellenőrizd, hogy egy beágyazott elem betűtípusa öröklődik-e:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Nyisd meg a böngésződ konzolját az 'Elements' fülön, és figyeld meg az H1 betűtípusát. Ez örökli a betűtípust a body-tól, ahogy azt a böngésző is jelzi:

![örökölt betűtípus](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.hu.png)

✅ Meg tudsz adni egy beágyazott stílusnak egy másik tulajdonságot öröklés helyett?

---

## CSS Szelektorok

### Címkék

Eddig a `style.css` fájlodban csak néhány címke van stílusozva, és az alkalmazás elég furcsán néz ki:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Ez a címkék stílusozásának módja lehetővé teszi, hogy egyedi elemeket irányíts, de szükséged van arra, hogy sok növény stílusát irányítsd a terráriumodban. Ehhez a CSS szelektorokat kell használnod.

### Azonosítók

Adj stílust a bal és jobb konténerek elrendezéséhez. Mivel csak egy bal és egy jobb konténer van, azokat azonosítókkal látták el a jelölésben. A stílusozásukhoz használd a `#` jelet:

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Itt a konténereket abszolút pozicionálással helyezted el a képernyő bal és jobb szélén, és százalékokat használtál a szélességükhöz, hogy kicsi mobilképernyőkön is méretezhetők legyenek.

✅ Ez a kód elég ismétlődő, tehát nem "DRY" (Don't Repeat Yourself); találsz egy jobb módot az azonosítók stílusozására, például egy azonosító és egy osztály kombinációjával? Ehhez módosítanod kellene a jelölést és újra kellene strukturálnod a CSS-t:

```html
<div id="left-container" class="container"></div>
```

### Osztályok

A fenti példában két egyedi elemet stílusoztál a képernyőn. Ha azt szeretnéd, hogy a stílusok több elemre is vonatkozzanak a képernyőn, használhatsz CSS osztályokat. Ezt tedd a növények elrendezéséhez a bal és jobb konténerekben.

Figyeld meg, hogy az egyes növények a HTML jelölésben azonosítók és osztályok kombinációjával rendelkeznek. Az azonosítókat itt a JavaScript használja, amelyet később adsz hozzá, hogy manipulálja a terrárium növényelhelyezését. Az osztályok viszont minden növénynek egy adott stílust adnak.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Add hozzá a következőket a `style.css` fájlodhoz:

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Érdemes megjegyezni ebben a kódrészletben a relatív és abszolút pozicionálás keverékét, amelyet a következő szakaszban tárgyalunk. Nézd meg, hogyan kezelik a magasságokat százalékokkal:

A növénytartó magasságát 13%-ra állítottad, ami jó arány ahhoz, hogy az összes növény megjelenjen minden függőleges konténerben görgetés nélkül.

A növénytartót balra mozgattad, hogy a növények jobban középre kerüljenek a konténerükben. A képek nagy mennyiségű átlátszó hátteret tartalmaznak, hogy könnyebben mozgathatók legyenek, ezért balra kell tolni őket, hogy jobban illeszkedjenek a képernyőre.

Ezután a növénynek maximális szélességet adtál 150%-ban. Ez lehetővé teszi, hogy a böngésző méretének csökkenésével arányosan zsugorodjon. Próbáld meg átméretezni a böngésződet; a növények a konténereikben maradnak, de zsugorodnak, hogy illeszkedjenek.

Szintén figyelemre méltó a z-index használata, amely az elem relatív "magasságát" szabályozza (így a növények a konténer tetején helyezkednek el, és úgy tűnik, mintha a terráriumban lennének).

✅ Miért van szükséged külön növénytartó és növény CSS szelektorra?

## CSS Pozicionálás

A pozíció tulajdonságok keverése (statikus, relatív, rögzített, abszolút és ragadós pozíciók) kissé bonyolult lehet, de ha helyesen alkalmazzák, jó irányítást biztosít az elemek felett az oldalaidon.

Az abszolút pozicionált elemek a legközelebbi pozicionált ősükhöz viszonyítva helyezkednek el, és ha nincs ilyen, akkor a dokumentum törzséhez viszonyítva.

A relatív pozicionált elemek a CSS által megadott irányok alapján helyezkednek el az eredeti pozíciójukhoz képest.

A példánkban a `plant-holder` egy relatív pozicionált elem, amely egy abszolút pozicionált konténeren belül helyezkedik el. Az eredmény az, hogy az oldalsáv konténerek a bal és jobb oldalon rögzítettek, a növénytartó pedig beágyazott, és az oldalsávokon belül igazodik, helyet adva a növényeknek, hogy függőleges sorban helyezkedjenek el.

> Maga a `plant` is abszolút pozicionált, ami szükséges ahhoz, hogy mozgatható legyen, ahogy azt a következő leckében felfedezed.

✅ Kísérletezz az oldalsó konténerek és a növénytartó pozicionálási típusainak cseréjével. Mi történik?

## CSS Elrendezések

Most azt fogod használni, amit tanultál, hogy elkészítsd magát a terráriumot, mindezt CSS segítségével!

Először stílusozd a `.terrarium` div gyermekeit kerekített téglalapként a CSS használatával:

```CSS
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

Figyeld meg a százalékok használatát itt. Ha lekicsinyíted a böngésződet, láthatod, hogyan méreteződik a befőttesüveg is. Figyeld meg továbbá a befőttesüveg elemeinek szélesség- és magasság-százalékait, valamint azt, hogy minden elem abszolút módon a középpontban helyezkedik el, az alsó nézetablakhoz rögzítve.

A `rem` használatát is alkalmazzuk a border-radius esetében, amely egy betűmérethez viszonyított hossz. Olvass többet erről a relatív mértékről a [CSS specifikációban](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Próbáld megváltoztatni a befőttesüveg színeit és átlátszóságát a földhöz képest. Mi történik? Miért?

---

## 🚀Kihívás

Adj egy "buborék" csillogást a befőttesüveg bal alsó részéhez, hogy üvegszerűbbnek tűnjön. A `.jar-glossy-long` és `.jar-glossy-short` elemeket fogod stílusozni, hogy tükröződő csillogást hozz létre. Így fog kinézni:

![kész terrárium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.hu.png)

A leckét követő kvíz kitöltéséhez menj végig ezen a Learn modulon: [Stílusozd a HTML alkalmazásodat CSS-sel](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/18)

## Áttekintés és önálló tanulás

A CSS megtévesztően egyszerűnek tűnik, de számos kihívást jelent, amikor egy alkalmazást tökéletesen szeretnénk stílusozni minden böngészőre és képernyőméretre. A CSS-Grid és a Flexbox olyan eszközök, amelyeket azért fejlesztettek ki, hogy a munka egy kicsit strukturáltabb és megbízhatóbb legyen. Ismerd meg ezeket az eszközöket a [Flexbox Froggy](https://flexboxfroggy.com/) és a [Grid Garden](https://codepip.com/games/grid-garden/) játékokkal.

## Feladat

[CSS Refaktorálás](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.