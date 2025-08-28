<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e375c2aeb94e2407f2667633d39580bd",
  "translation_date": "2025-08-28T04:16:19+00:00",
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

A CSS, vagyis Cascading Style Sheets, egy fontos problémát old meg a webfejlesztésben: hogyan tegyük szép megjelenésűvé a weboldalunkat. Az alkalmazások stílusozása nemcsak használhatóbbá és esztétikusabbá teszi őket, hanem lehetővé teszi a Reszponzív Webdesign (RWD) létrehozását is – így az alkalmazások jól mutatnak bármilyen képernyőméreten. A CSS nem csupán az alkalmazások szépítéséről szól; a specifikációja animációkat és transzformációkat is tartalmaz, amelyek lehetővé teszik kifinomult interakciók létrehozását. A CSS Munkacsoport segít a jelenlegi CSS specifikációk karbantartásában; munkájukat követheted a [World Wide Web Consortium weboldalán](https://www.w3.org/Style/CSS/members).

> Fontos megjegyezni, hogy a CSS egy folyamatosan fejlődő nyelv, mint minden a weben, és nem minden böngésző támogatja a specifikáció újabb részeit. Mindig ellenőrizd a megvalósításokat a [CanIUse.com](https://caniuse.com) segítségével.

Ebben a leckében stílusokat adunk az online terráriumunkhoz, és megismerkedünk több CSS fogalommal: a kaszkáddal, az örökléssel, valamint a szelektorok, pozicionálás és a CSS használatával történő elrendezés készítésével. A folyamat során elrendezzük a terráriumot, és létrehozzuk magát a terráriumot.

### Előfeltétel

A terrárium HTML-jének már készen kell lennie, hogy stílusokat adhass hozzá.

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

A Cascading Style Sheets a stílusok „kaszkádjának” ötletét foglalja magában, amely szerint a stílus alkalmazása prioritás alapján történik. A weboldal készítője által beállított stílusok prioritást élveznek a böngésző által beállítottakkal szemben. Az „inline” stílusok pedig prioritást élveznek a külső stíluslapokon beállítottakkal szemben.

### Feladat

Adj hozzá egy „color: red” inline stílust az `<h1>` taghez:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Ezután add hozzá a következő kódot a `style.css` fájlhoz:

```CSS
h1 {
 color: blue;
}
```

✅ Milyen szín jelenik meg a webalkalmazásodban? Miért? Találsz módot a stílusok felülírására? Mikor lenne erre szükség, vagy miért nem?

---

## Öröklés

A stílusok öröklődnek az őselem stílusából a leszármazottba, így a beágyazott elemek öröklik a szülőik stílusait.

### Feladat

Állítsd be a body betűtípusát egy adott betűtípusra, és ellenőrizd egy beágyazott elem betűtípusát:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Nyisd meg a böngésződ konzolját az 'Elements' fülön, és figyeld meg az H1 betűtípusát. A body betűtípusát örökli, ahogy azt a böngésző jelzi:

![örökölt betűtípus](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.hu.png)

✅ Tudsz egy beágyazott stílust úgy beállítani, hogy egy másik tulajdonságot örököljön?

---

## CSS szelektorok

### Tag-ek

Eddig a `style.css` fájlodban csak néhány tag van stílusozva, és az alkalmazás elég furcsán néz ki:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Ez a tag stílusozási módja lehetővé teszi, hogy egyedi elemeket irányíts, de szükséged van arra, hogy sok növény stílusát irányítsd a terráriumodban. Ehhez a CSS szelektorokat kell használnod.

### Id-k

Adj stílust a bal és jobb konténerek elrendezéséhez. Mivel csak egy bal és egy jobb konténer van, ezek id-t kapnak a markupban. A stílusozáshoz használd a `#` jelet:

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

Itt abszolút pozicionálással helyezted el ezeket a konténereket a képernyő bal és jobb szélére, és százalékokat használtál a szélességükhöz, hogy kicsi mobilképernyőkön is méretezhetők legyenek.

✅ Ez a kód elég ismétlődő, tehát nem „DRY” (Don't Repeat Yourself); találsz jobb módot ezeknek az id-knek a stílusozására, esetleg egy id és egy osztály kombinációjával? Ehhez módosítanod kellene a markupot, és újra kellene strukturálnod a CSS-t:

```html
<div id="left-container" class="container"></div>
```

### Osztályok

A fenti példában két egyedi elemet stílusoztál a képernyőn. Ha azt szeretnéd, hogy a stílusok sok elemre vonatkozzanak a képernyőn, CSS osztályokat használhatsz. Tedd ezt a növények elrendezéséhez a bal és jobb konténerekben.

Figyeld meg, hogy minden növény a HTML markupban id-k és osztályok kombinációjával rendelkezik. Az id-ket itt a JavaScript használja, amelyet később hozzáadsz, hogy manipuláld a terrárium növényelhelyezését. Az osztályok viszont minden növénynek adott stílust biztosítanak.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Add hozzá a következőt a `style.css` fájlhoz:

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

Figyelemre méltó ebben a részletben a relatív és abszolút pozicionálás keveréke, amelyet a következő szekcióban tárgyalunk. Nézd meg, hogyan kezelik a magasságokat százalékokkal:

A növénytartó magasságát 13%-ra állítottad, ami jó szám ahhoz, hogy minden növény megjelenjen minden függőleges konténerben görgetés nélkül.

A növénytartót balra mozgattad, hogy a növények jobban középre kerüljenek a konténerükben. A képeknek nagy mennyiségű átlátszó háttere van, hogy könnyebben lehessen őket húzni, ezért balra kell tolni őket, hogy jobban illeszkedjenek a képernyőn.

Ezután magának a növénynek 150%-os max-szélességet adtál. Ez lehetővé teszi, hogy a böngésző méretének csökkenésével arányosan csökkenjen. Próbáld meg átméretezni a böngésződet; a növények a konténereikben maradnak, de méretük csökken, hogy illeszkedjenek.

Szintén figyelemre méltó a z-index használata, amely az elem relatív magasságát szabályozza (így a növények a konténer tetején helyezkednek el, és úgy tűnik, mintha a terráriumban lennének).

✅ Miért van szükséged külön növénytartó és növény CSS szelektorra?

## CSS pozicionálás

A pozíció tulajdonságok keverése (statikus, relatív, fix, abszolút és ragadós pozíciók) kissé trükkös lehet, de ha megfelelően alkalmazzák, jó irányítást biztosít az elemek elhelyezésében az oldalakon.

Az abszolút pozicionált elemek a legközelebbi pozicionált őselemhez viszonyítva helyezkednek el, és ha nincs ilyen, akkor a dokumentum törzséhez viszonyítva.

A relatív pozicionált elemek a CSS utasításai alapján helyezkednek el, amelyek elmozdítják őket az eredeti helyüktől.

A példánkban a `plant-holder` egy relatív pozicionált elem, amely egy abszolút pozicionált konténerben helyezkedik el. Az eredmény az, hogy az oldalsáv konténerek balra és jobbra vannak rögzítve, a növénytartó pedig beágyazott, és függőleges sorban helyet ad a növényeknek.

> Maga a `plant` is abszolút pozicionált, ami szükséges ahhoz, hogy húzható legyen, ahogy a következő leckében felfedezed.

✅ Kísérletezz az oldalsó konténerek és a növénytartó pozíciótípusainak cseréjével. Mi történik?

## CSS elrendezések

Most azt fogod használni, amit tanultál, hogy CSS segítségével megépítsd magát a terráriumot!

Először stílusozt a `.terrarium` div gyermekeit, hogy lekerekített téglalapként jelenjenek meg:

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

Figyeld meg a százalékok használatát itt. Ha lecsökkented a böngésződ méretét, láthatod, hogyan méreteződik a terrárium is. Figyeld meg az üveg elemek szélességét és magasságát százalékban, valamint azt, hogy minden elem abszolút pozicionált a középpontban, rögzítve az ablak aljához.

A `rem` használatát is alkalmazzuk a border-radius esetében, amely egy betűtípus-alapú relatív hossz. Olvass többet erről a relatív mértékről a [CSS specifikációban](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Próbáld meg megváltoztatni az üveg színeit és átlátszóságát a föld színeivel szemben. Mi történik? Miért?

---

## 🚀Kihívás

Adj egy „buborék” csillogást az üveg bal alsó részéhez, hogy üvegszerűbbnek tűnjön. A `.jar-glossy-long` és `.jar-glossy-short` elemeket fogod stílusozni, hogy visszatükröződő csillogást hozz létre. Így fog kinézni:

![kész terrárium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.hu.png)

A kvíz befejezéséhez menj végig ezen a Learn modulon: [Stílusozd HTML alkalmazásodat CSS-sel](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/18)

## Áttekintés és önálló tanulás

A CSS megtévesztően egyszerűnek tűnik, de számos kihívást jelent, amikor egy alkalmazást tökéletesen szeretnénk stílusozni minden böngészőre és képernyőméretre. A CSS-Grid és a Flexbox olyan eszközök, amelyeket azért fejlesztettek ki, hogy a munka egy kicsit strukturáltabb és megbízhatóbb legyen. Ismerd meg ezeket az eszközöket a [Flexbox Froggy](https://flexboxfroggy.com/) és a [Grid Garden](https://codepip.com/games/grid-garden/) játékokkal.

## Feladat

[CSS Refaktorálás](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.