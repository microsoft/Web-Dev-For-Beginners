<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-24T20:14:48+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "hu"
}
-->
# Terrárium Projekt 2. rész: Bevezetés a CSS-be

![Bevezetés a CSS-be](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

Emlékszel, milyen egyszerű volt a HTML terráriumod? A CSS segítségével ezt az egyszerű szerkezetet vizuálisan vonzóvá alakítjuk.

Ha a HTML olyan, mint egy ház váza, akkor a CSS az, ami otthonossá teszi - a festék színei, a bútorok elrendezése, a világítás és a szobák összhangja. Gondolj arra, hogyan alakult a Versailles-i palota egy egyszerű vadászházból a világ egyik legpompásabb épületévé, a dekoráció és az elrendezés aprólékos figyelmének köszönhetően.

Ma átalakítjuk a terráriumodat funkcionálisból kifinomulttá. Megtanulod, hogyan helyezd el pontosan az elemeket, hogyan alkalmazz rugalmas elrendezéseket különböző képernyőméretekhez, és hogyan teremts vizuális vonzerőt, amely magával ragadja a weboldal látogatóit.

A lecke végére látni fogod, hogy a stratégiai CSS-stílusok hogyan javíthatják drámaian a projektedet. Adjunk stílust a terráriumodhoz!

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/17)

## CSS alapok elsajátítása

A CSS-t gyakran csak "szépítésként" emlegetik, de valójában sokkal többre képes. A CSS olyan, mint egy film rendezője - nemcsak azt irányítod, hogy minden hogyan nézzen ki, hanem azt is, hogyan mozogjon, reagáljon az interakciókra, és alkalmazkodjon különböző helyzetekhez.

A modern CSS rendkívül sokoldalú. Olyan kódot írhatsz, amely automatikusan igazítja az elrendezéseket telefonokhoz, tabletekhez és asztali számítógépekhez. Létrehozhatsz sima animációkat, amelyek oda irányítják a felhasználók figyelmét, ahol szükséges. Az eredmények lenyűgözőek lehetnek, ha minden harmonikusan működik együtt.

> 💡 **Profi tipp**: A CSS folyamatosan fejlődik új funkciókkal és képességekkel. Mindig ellenőrizd a [CanIUse.com](https://caniuse.com) oldalon, hogy a böngészők támogatják-e az újabb CSS funkciókat, mielőtt azokat produkciós projektekben használnád.

**A következőket érjük el ebben a leckében:**
- **Létrehozunk** egy teljes vizuális dizájnt a terráriumodhoz modern CSS technikák segítségével
- **Felfedezzük** az alapvető fogalmakat, mint a kaszkád, öröklődés és CSS szelektorok
- **Megvalósítjuk** a rugalmas pozicionálási és elrendezési stratégiákat
- **Felépítjük** a terrárium konténerét CSS formák és stílusok használatával

### Előfeltétel

El kell készítened a terrárium HTML szerkezetét az előző leckéből, és készen kell állnia a stílusozásra.

> 📺 **Videós forrás**: Nézd meg ezt a hasznos videós bemutatót
>
> [![CSS Alapok Oktatóvideó](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### CSS fájl beállítása

Mielőtt elkezdenénk a stílusozást, össze kell kapcsolnunk a CSS-t a HTML-lel. Ez a kapcsolat megmondja a böngészőnek, hol találja a terrárium stílusutasításait.

A terrárium mappádban hozz létre egy új fájlt `style.css` néven, majd linkeld be a HTML dokumentum `<head>` szekciójába:

```html
<link rel="stylesheet" href="./style.css" />
```

**Ez a kód a következőket teszi:**
- **Kapcsolatot hoz létre** a HTML és CSS fájlok között
- **Megmondja** a böngészőnek, hogy töltse be és alkalmazza a `style.css` stílusait
- **Használja** a `rel="stylesheet"` attribútumot, hogy jelezze, ez egy CSS fájl
- **Hivatkozik** a fájl elérési útjára a `href="./style.css"` segítségével

## A CSS kaszkád megértése

Valaha elgondolkodtál azon, miért hívják a CSS-t "kaszkád" stíluslapoknak? A stílusok úgy folynak le, mint egy vízesés, és néha ütköznek egymással.

Gondolj arra, hogyan működnek a katonai parancsstruktúrák - egy általános parancs azt mondhatja, hogy "minden katona viseljen zöldet", de egy konkrét parancs az egységednek azt mondhatja, hogy "viseljetek ünnepi kék ruhát a ceremóniára". A konkrétabb utasítás élvez elsőbbséget. A CSS hasonló logikát követ, és ennek a hierarchiának a megértése sokkal kezelhetőbbé teszi a hibakeresést.

### Kísérletezés a kaszkád prioritással

Nézzük meg a kaszkád működését egy stílusütközés létrehozásával. Először adj hozzá egy inline stílust az `<h1>` taghez:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Mit csinál ez a kód:**
- **Alkalmaz** egy piros színt közvetlenül az `<h1>` elemre az inline stílus használatával
- **Használja** a `style` attribútumot, hogy közvetlenül a HTML-ben ágyazza be a CSS-t
- **Létrehoz** egy legmagasabb prioritású stílusszabályt erre a konkrét elemre

Ezután add hozzá ezt a szabályt a `style.css` fájlodhoz:

```css
h1 {
  color: blue;
}
```

**A fentiekben:**
- **Meghatároztunk** egy CSS szabályt, amely az összes `<h1>` elemet célozza
- **Beállítottuk** a szöveg színét kékre egy külső stíluslapon keresztül
- **Létrehoztunk** egy alacsonyabb prioritású szabályt az inline stílusokhoz képest

✅ **Tudásellenőrzés**: Milyen szín jelenik meg a webalkalmazásodban? Miért az a szín érvényesül? Tudsz olyan helyzeteket elképzelni, amikor felül kell írni a stílusokat?

> 💡 **CSS prioritási sorrend (legmagasabbtól a legalacsonyabbig):**
> 1. **Inline stílusok** (style attribútum)
> 2. **Azonosítók** (#myId)
> 3. **Osztályok** (.myClass) és attribútumok
> 4. **Elem szelektorok** (h1, div, p)
> 5. **Böngésző alapértelmezések**

## CSS öröklődés működés közben

A CSS öröklődés olyan, mint a genetika - az elemek bizonyos tulajdonságokat örökölnek a szülő elemeiktől. Ha beállítod a betűtípust a body elemre, az összes szöveg automatikusan ugyanazt a betűtípust használja. Ez hasonló ahhoz, ahogy a Habsburg család jellegzetes állkapcsa generációkon keresztül megjelent anélkül, hogy minden egyes egyénnél külön meg lett volna határozva.

Azonban nem minden öröklődik. A szövegstílusok, mint a betűtípusok és színek öröklődnek, de az elrendezési tulajdonságok, mint a margók és keretek nem. Ahogy a gyerekek örökölhetik a fizikai jellemzőket, de nem feltétlenül a szüleik divatválasztásait.

### Betűtípus öröklődés megfigyelése

Nézzük meg az öröklődést, ha beállítunk egy betűtípust a `<body>` elemre:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**A történtek elemzése:**
- **Beállítja** a betűtípust az egész oldalra a `<body>` elem célzásával
- **Használ** egy betűtípus halmazt tartalék opciókkal a jobb böngészőkompatibilitás érdekében
- **Alkalmaz** modern rendszerbetűtípusokat, amelyek jól mutatnak különböző operációs rendszereken
- **Biztosítja**, hogy minden gyermekelem örökölje ezt a betűtípust, hacsak nincs kifejezetten felülírva

Nyisd meg a böngésződ fejlesztői eszközeit (F12), navigálj az Elemek fülre, és vizsgáld meg az `<h1>` elemet. Látni fogod, hogy örökli a betűtípust a body-tól:

![örökölt betűtípus](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.hu.png)

✅ **Kísérletezési idő**: Próbálj meg más örökölhető tulajdonságokat beállítani a `<body>` elemre, mint például `color`, `line-height` vagy `text-align`. Mi történik a címsoroddal és más elemekkel?

> 📝 **Örökölhető tulajdonságok közé tartozik**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Nem örökölhető tulajdonságok közé tartozik**: `margin`, `padding`, `border`, `width`, `height`, `position`

## CSS szelektorok elsajátítása

A CSS szelektorok segítségével célozhatod meg az elemeket a stílusozáshoz. Olyan, mintha pontos utasításokat adnál - ahelyett, hogy azt mondanád "a ház", azt mondhatod "a kék ház a piros ajtóval a Juhar utcában".

A CSS különböző módokat kínál a pontosságra, és a megfelelő szelektor kiválasztása olyan, mint a megfelelő eszköz kiválasztása a feladathoz. Néha az összes ajtót kell stílusoznod a környéken, néha csak egy konkrét ajtót.

### Elem szelektorok (Tag-ek)

Az elem szelektorok HTML elemeket céloznak meg a tag nevük alapján. Tökéletesek az alapstílusok beállításához, amelyek széles körben alkalmazhatók az oldalon:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Ezeknek a stílusoknak a megértése:**
- **Beállítja** az egész oldal tipográfiáját a `body` szelektorral
- **Eltávolítja** az alapértelmezett böngésző margókat és paddingot a jobb irányítás érdekében
- **Stílusozza** az összes címsorelemet színnel, igazítással és térközzel
- **Használja** a `rem` egységeket a skálázható, hozzáférhető betűméretezéshez

Az elem szelektorok jól működnek általános stílusozáshoz, de specifikusabb szelektorokra lesz szükséged az egyedi komponensek, például a terrárium növényeinek stílusozásához.

### Azonosító szelektorok egyedi elemekhez

Az azonosító szelektorok a `#` szimbólumot használják, és olyan elemeket céloznak meg, amelyeknek specifikus `id` attribútumuk van. Mivel az azonosítóknak egyedinek kell lenniük egy oldalon, tökéletesek egyedi, különleges elemek stílusozásához, például a bal és jobb növénytartó konténerekhez.

Hozzuk létre a terrárium oldalsó konténereinek stílusát, ahol a növények lesznek:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Ez a kód a következőket éri el:**
- **Pozicionálja** a konténereket a bal és jobb szélekre `absolute` pozicionálással
- **Használja** a `vh` (viewport height) egységeket a képernyőmérethez igazodó magasság érdekében
- **Alkalmazza** a `box-sizing: border-box`-ot, hogy a padding beleszámítson a teljes szélességbe
- **Eltávolítja** a felesleges `px` egységeket a nulla értékekből a tisztább kód érdekében
- **Beállít** egy finom háttérszínt, amely kevésbé terheli a szemet, mint a szürke

✅ **Kódminőségi kihívás**: Figyeld meg, hogyan sérti ez a CSS a DRY (Ne Ismételd Magad) elvet. Tudod refaktorálni az azonosító és osztály kombinációjával?

**Javított megközelítés:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### Osztály szelektorok újrafelhasználható stílusokhoz

Az osztály szelektorok a `.` szimbólumot használják, és tökéletesek, ha ugyanazt a stílust több elemre szeretnéd alkalmazni. Az azonosítókkal ellentétben az osztályok újrahasználhatók a HTML-ben, így ideálisak az egységes stílusmintákhoz.

A terráriumunkban minden növénynek hasonló stílusra van szüksége, de egyedi pozicionálásra is. Az osztályok kombinációját fogjuk használni a közös stílusokhoz és az azonosítókat az egyedi pozicionáláshoz.

**Íme a HTML szerkezete minden növényhez:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.hu.png" />
</div>
```

**Kulcselemek magyarázata:**
- **Használja** a `class="plant-holder"`-t az egységes konténer stílushoz minden növény esetében
- **Alkalmazza** a `class="plant"`-et a közös képstílushoz és viselkedéshez
- **Tartalmazza** az egyedi `id="plant1"`-et az egyedi pozicionáláshoz és JavaScript interakcióhoz
- **Biztosít** leíró alt szöveget a képernyőolvasó hozzáférhetőség érdekében

Most add hozzá ezeket a stílusokat a `style.css` fájlodhoz:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Ezeknek a stílusoknak a bontása:**
- **Létrehoz** relatív pozicionálást a növénytartóhoz, hogy pozicionálási kontextust hozzon létre
- **Beállítja** minden növénytartót 13% magasságra, biztosítva, hogy minden növény függőlegesen elférjen görgetés nélkül
- **Kissé balra tolja** a tartókat, hogy jobban középre helyezze a növényeket a konténereken belül
- **Lehetővé teszi** a növények skálázását a `max-width` és `max-height` tulajdonságokkal
- **Használja** a `z-index`-et, hogy a növények a terrárium más elemei fölé kerüljenek
- **Hozzáad** egy finom hover effektet CSS átmenetekkel a jobb felhasználói interakció érdekében

✅ **Kritikus gondolkodás**: Miért van szükségünk mind a `.plant-holder`, mind a `.plant` szelektorokra? Mi történne, ha csak egyet próbálnánk használni?

> 💡 **Tervezési minta**: A konténer (`.plant-holder`) az elrendezést és pozicionálást irányítja, míg a tartalom (`.plant`) a megjelenést és skálázást. Ez a szétválasztás karbantarthatóbbá és rugalmasabbá teszi a kódot.

## CSS pozicionálás megértése

A CSS pozicionálás olyan, mint egy színházi rendező - te irányítod, hol álljon minden szereplő és hogyan mozogjanak a színpadon. Néhány szereplő követi az alapformációt, míg másoknak specifikus pozicionálásra van szükségük a drá
Rakjuk össze a terráriumot lépésről lépésre. Minden elem abszolút pozicionálást és százalékos méretezést használ a reszponzív dizájn érdekében:

```css
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
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
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
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
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

**A terrárium felépítésének megértése:**
- **Használ** százalékos méreteket a reszponzív skálázás érdekében minden képernyőméreten
- **Pozicionálja** az elemeket abszolút módon, hogy pontosan egymásra helyezze és igazítsa őket
- **Alkalmaz** különböző átlátszósági értékeket az üveg áttetszőség hatásának létrehozásához
- **Használ** `z-index` rétegezést, hogy a növények a befőttesüveg belsejében jelenjenek meg
- **Ad hozzá** finom árnyékot és kifinomult szegélylekerekítést a valósághűbb megjelenés érdekében

### Reszponzív dizájn százalékos értékekkel

Figyeld meg, hogy minden méret százalékos értékeket használ, nem pedig fix pixelértékeket:

**Miért fontos ez:**
- **Biztosítja**, hogy a terrárium arányosan skálázódjon bármilyen képernyőméreten
- **Fenntartja** a vizuális kapcsolatokat az üveg részei között
- **Nyújt** konzisztens élményt mobiltelefonoktól a nagy asztali monitorokig
- **Lehetővé teszi**, hogy a dizájn alkalmazkodjon anélkül, hogy megtörné a vizuális elrendezést

### CSS egységek használata

`rem` egységeket használunk a szegélylekerekítéshez, amelyek a gyökér betűméretéhez viszonyítva skálázódnak. Ez hozzáférhetőbb dizájnt eredményez, amely tiszteletben tartja a felhasználói betűméret-beállításokat. Tudj meg többet a [CSS relatív egységekről](https://www.w3.org/TR/css-values-3/#font-relative-lengths) az hivatalos specifikációban.

✅ **Vizuális kísérletezés**: Próbáld meg módosítani ezeket az értékeket, és figyeld meg a hatásokat:
- Változtasd meg az üveg átlátszóságát 0.5-ről 0.8-ra – hogyan befolyásolja ez az üveg megjelenését?
- Állítsd a föld színét `#3a241d`-ről `#8B4513`-ra – milyen vizuális hatása van ennek?
- Módosítsd a föld `z-index` értékét 2-re – mi történik a rétegezéssel?

---

## GitHub Copilot Agent kihívás 🚀

Használd az Agent módot a következő kihívás teljesítéséhez:

**Leírás:** Hozz létre egy CSS animációt, amely a terrárium növényeit finoman ide-oda lengi, szimulálva a természetes szellő hatását. Ez segít gyakorolni a CSS animációkat, transzformációkat és kulcskockákat, miközben növeli a terrárium vizuális vonzerejét.

**Feladat:** Adj hozzá CSS kulcskocka animációkat, hogy a terrárium növényei finoman ide-oda lengjenek. Hozz létre egy lengő animációt, amely minden növényt kissé (2-3 fokkal) balra és jobbra forgat, 3-4 másodperces időtartammal, és alkalmazd a `.plant` osztályra. Biztosítsd, hogy az animáció végtelenül ismétlődjön, és legyen egy könnyítő funkció a természetes mozgás érdekében.

Tudj meg többet az [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) funkcióról itt.

## 🚀 Kihívás: Üveg tükröződések hozzáadása

Készen állsz arra, hogy valósághű üveg tükröződésekkel gazdagítsd a terráriumot? Ez a technika mélységet és realizmust ad a dizájnnak.

Finom kiemeléseket fogsz létrehozni, amelyek szimulálják, hogyan tükröződik a fény az üvegfelületeken. Ez a megközelítés hasonló ahhoz, ahogyan a reneszánsz festők, például Jan van Eyck, a fényt és a tükröződést használták, hogy a festett üveg háromdimenziósnak tűnjön. Íme, amit el szeretnél érni:

![kész terrárium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.hu.png)

**A kihívásod:**
- **Hozz létre** finom fehér vagy világos színű ovális formákat az üveg tükröződésekhez
- **Pozicionáld** őket stratégiailag az üveg bal oldalára
- **Alkalmazd** a megfelelő átlátszóságot és elmosódási hatásokat a valósághű fénytükrözés érdekében
- **Használj** `border-radius`-t, hogy organikus, buborékszerű formákat hozz létre
- **Kísérletezz** gradienssel vagy árnyékokkal a fokozott realizmus érdekében

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/18)

## Bővítsd CSS tudásodat

A CSS kezdetben bonyolultnak tűnhet, de ezeknek az alapfogalmaknak a megértése szilárd alapot nyújt a fejlettebb technikákhoz.

**A következő CSS tanulási területeid:**
- **Flexbox** - egyszerűsíti az elemek igazítását és elosztását
- **CSS Grid** - erőteljes eszközöket kínál összetett elrendezések létrehozásához
- **CSS változók** - csökkenti az ismétlést és javítja a karbantarthatóságot
- **Reszponzív dizájn** - biztosítja, hogy a weboldalak jól működjenek különböző képernyőméreteken

### Interaktív tanulási források

Gyakorold ezeket a fogalmakat ezekkel az interaktív, gyakorlati játékokkal:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Sajátítsd el a Flexboxot szórakoztató kihívásokkal
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Tanuld meg a CSS Grid használatát virtuális répák termesztésével
- 🎯 [CSS Battle](https://cssbattle.dev/) - Teszteld CSS tudásodat kódolási kihívásokkal

### További tanulás

A CSS alapjainak átfogó megértéséhez végezd el ezt a Microsoft Learn modult: [Stílusozd HTML alkalmazásodat CSS-sel](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Feladat

[CSS Refactoring](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.