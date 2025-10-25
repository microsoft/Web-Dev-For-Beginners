<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-24T20:36:14+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "hu"
}
-->
# Böngészőbővítmény Projekt 3. rész: Ismerd meg a Háttérfeladatokat és a Teljesítményt

Gondolkodtál már azon, miért tűnnek egyes böngészőbővítmények gyorsnak és reszponzívnak, míg mások lassúnak? A titok a háttérben zajló folyamatokban rejlik. Miközben a felhasználók kattintgatnak a bővítmény felületén, a háttérben egy egész világ dolgozik csendben: adatokat tölt le, ikonokat frissít, és kezeli a rendszer erőforrásait.

Ez a böngészőbővítmény-sorozat utolsó leckéje, és most azon fogunk dolgozni, hogy a szénlábnyom-követőd zökkenőmentesen működjön. Dinamikus ikonfrissítéseket fogsz hozzáadni, és megtanulod, hogyan lehet időben észrevenni a teljesítményproblémákat, mielőtt azok gondot okoznának. Ez olyan, mint egy versenyautó finomhangolása - apró optimalizálások hatalmas különbséget jelenthetnek a működésben.

Amikor végeztünk, egy kifinomult bővítményed lesz, és megérted azokat a teljesítményelvű alapelveket, amelyek megkülönböztetik a jó webalkalmazásokat a kiválóaktól. Merüljünk el a böngésző optimalizálás világában!

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/27)

### Bevezetés

Az előző leckékben létrehoztál egy űrlapot, összekapcsoltad egy API-val, és megoldottad az aszinkron adatlekérést. A bővítményed szépen formálódik.

Most hozzá kell adnunk az utolsó simításokat - például azt, hogy az ikon színe változzon a szén-dioxid adatok alapján. Ez arra emlékeztet, hogy a NASA-nak optimalizálnia kellett az Apollo űrhajó minden rendszerét. Nem engedhettek meg semmilyen felesleges ciklust vagy memóriát, mert az életek múlottak a teljesítményen. Bár a böngészőbővítményünk nem ennyire kritikus, ugyanazok az elvek érvényesek - a hatékony kód jobb felhasználói élményt teremt.

## Webes teljesítmény alapjai

Amikor a kódod hatékonyan fut, az emberek ténylegesen *érzik* a különbséget. Ismered azt a pillanatot, amikor egy oldal azonnal betöltődik, vagy egy animáció simán fut? Ez a jó teljesítmény hatása.

A teljesítmény nem csak a sebességről szól - hanem arról, hogy a webes élmények természetesek legyenek, ne pedig nehézkesek és frusztrálóak. A számítástechnika korai napjaiban Grace Hopper híresen tartott egy nanomásodpercet (egy körülbelül egy láb hosszú drótdarabot) az asztalán, hogy megmutassa, milyen messzire utazik a fény egy milliárdod másodperc alatt. Ez volt az ő módja annak, hogy elmagyarázza, miért számít minden mikroszekundum a számítástechnikában. Nézzük meg azokat a nyomozó eszközöket, amelyek segítenek kideríteni, mi lassítja le a dolgokat.

> "A weboldal teljesítménye két dologról szól: milyen gyorsan töltődik be az oldal, és milyen gyorsan fut rajta a kód." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Az a téma, hogy hogyan lehet a weboldalakat villámgyorssá tenni mindenféle eszközön, mindenféle felhasználó számára, mindenféle helyzetben, nem meglepő módon hatalmas. Íme néhány szempont, amit érdemes szem előtt tartani, amikor egy hagyományos webes projektet vagy böngészőbővítményt építesz.

Az első lépés az oldal optimalizálásában az, hogy megértsd, mi történik valójában a háttérben. Szerencsére a böngésződben erőteljes nyomozó eszközök vannak beépítve.

Az Edge-ben a Fejlesztői eszközök megnyitásához kattints a jobb felső sarokban lévő három pontra, majd válaszd a További eszközök > Fejlesztői eszközök lehetőséget. Vagy használd a billentyűkombinációt: `Ctrl` + `Shift` + `I` Windows-on vagy `Option` + `Command` + `I` Mac-en. Ha már ott vagy, kattints a Teljesítmény fülre - itt fogsz nyomozni.

**Íme a teljesítmény nyomozó eszköztárad:**
- **Nyisd meg** a Fejlesztői eszközöket (fejlesztőként folyamatosan használni fogod!)
- **Menj** a Teljesítmény fülre - gondolj rá úgy, mint a webalkalmazásod fitnesz nyomkövetőjére
- **Nyomd meg** a Felvétel gombot, és figyeld az oldalad működését
- **Tanulmányozd** az eredményeket, hogy észrevedd, mi lassítja le a dolgokat

Próbáld ki ezt. Nyiss meg egy weboldalt (például a Microsoft.com-ot), és kattints a 'Felvétel' gombra. Most frissítsd az oldalt, és figyeld, ahogy a profilozó mindent rögzít, ami történik. Amikor leállítod a felvételt, részletes bontást láthatsz arról, hogyan 'szkriptel', 'renderel' és 'fest' a böngésző az oldalt. Ez arra emlékeztet, ahogy az irányítóközpont minden rendszert figyel egy rakétaindítás során - valós idejű adatokat kapsz arról, hogy mi történik és mikor.

✅ A [Microsoft Dokumentáció](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) rengeteg további részletet tartalmaz, ha mélyebben szeretnél belemerülni.

> Tipp: Tisztítsd meg a böngésző gyorsítótárát tesztelés előtt, hogy lásd, hogyan teljesít az oldal az első látogatók számára - ez általában nagyon különbözik az ismételt látogatásoktól!

Válassz ki elemeket a profil idővonalából, hogy nagyítsd az eseményeket, amelyek az oldal betöltése közben történnek.

Készíts pillanatképet az oldal teljesítményéről úgy, hogy kiválasztasz egy részt a profil idővonalából, és megnézed az összefoglaló panelt:

![Edge profilozó pillanatkép](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.hu.png)

Nézd meg az Eseménynapló panelt, hogy lássad, van-e olyan esemény, amely több mint 15 ms-ig tartott:

![Edge eseménynapló](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.hu.png)

✅ Ismerd meg a profilozódat! Nyisd meg a fejlesztői eszközöket ezen az oldalon, és nézd meg, vannak-e szűk keresztmetszetek. Mi a leglassabban betöltődő elem? A leggyorsabb?

## Mit kell keresni a profilozás során

A profilozó futtatása csak a kezdet - az igazi készség az, hogy tudd, mit mondanak neked azok a színes diagramok. Ne aggódj, hamarosan belejössz az értelmezésükbe. A tapasztalt fejlesztők megtanulták észrevenni a figyelmeztető jeleket, mielőtt azok teljes problémává válnának.

Beszéljünk a szokásos gyanúsítottakról - a teljesítményproblémákról, amelyek hajlamosak becsúszni a webes projektekbe. Ahogy Marie Curie-nek gondosan figyelnie kellett a sugárzási szinteket a laborjában, nekünk is figyelnünk kell bizonyos mintákra, amelyek bajt jelezhetnek. Ezek korai felismerése sok frusztrációtól megkímélhet téged (és a felhasználókat).

**Eszközméretek**: Az évek során a weboldalak egyre "nehezebbek" lettek, és ennek nagy része a képekből származik. Olyan, mintha egyre több dolgot pakolnánk a digitális bőröndjeinkbe.

✅ Nézd meg az [Internet Archívumot](https://httparchive.org/reports/page-weight), hogy lásd, hogyan nőttek az oldalméretek az idők során - elég tanulságos.

**Így tarthatod optimalizáltan az eszközeidet:**
- **Tömörítsd** a képeket! A modern formátumok, mint a WebP, drámaian csökkenthetik a fájlméreteket
- **Szolgáltasd** a megfelelő képméretet minden eszközre - nincs szükség hatalmas asztali képeket küldeni telefonokra
- **Minimalizáld** a CSS-t és JavaScriptet - minden byte számít
- **Használj** késleltetett betöltést, hogy a képek csak akkor töltődjenek le, amikor a felhasználók ténylegesen görgetnek hozzájuk

**DOM bejárások**: A böngészőnek fel kell építenie a Dokumentum Objektum Modelljét az általad írt kód alapján, így az oldal jó teljesítménye érdekében érdemes minimalizálni a tageket, csak azt használva és stílusozva, amire az oldalnak szüksége van. Például az oldalhoz kapcsolódó felesleges CSS optimalizálható; az egyetlen oldalon használt stílusok nem szükségesek a fő stíluslapba.

**Kulcsstratégiák a DOM optimalizálásához:**
- **Minimalizáld** a HTML elemek és beágyazási szintek számát
- **Távolítsd el** a nem használt CSS szabályokat, és hatékonyan konszolidáld a stíluslapokat
- **Szervezd** a CSS-t úgy, hogy csak azt töltse be, amire az oldalnak szüksége van
- **Strukturáld** a HTML-t szemantikusan a jobb böngészőelemzés érdekében

**JavaScript**: Minden JavaScript fejlesztőnek figyelnie kell azokra a 'render-blokkoló' szkriptekre, amelyeket be kell tölteni, mielőtt a DOM többi része bejárható és megjeleníthető lenne a böngészőben. Fontold meg a `defer` használatát az inline szkriptekkel (ahogy a Terrárium modulban is történik).

**Modern JavaScript optimalizálási technikák:**
- **Használja** a `defer` attribútumot a szkriptek betöltésére a DOM elemzése után
- **Alkalmazza** a kód szétválasztását, hogy csak a szükséges JavaScript töltődjön be
- **Alkalmazza** a késleltetett betöltést a nem kritikus funkciókhoz
- **Minimalizálja** a nehéz könyvtárak és keretrendszerek használatát, amikor lehetséges

✅ Próbálj ki néhány oldalt egy [Weboldal Sebességteszt weboldalon](https://www.webpagetest.org/), hogy többet megtudj a gyakori ellenőrzésekről, amelyeket az oldal teljesítményének meghatározására végeznek.

Most, hogy van egy elképzelésed arról, hogyan rendereli a böngésző az általad küldött eszközöket, nézzük meg az utolsó néhány dolgot, amit meg kell tenned a bővítményed befejezéséhez:

### Hozz létre egy funkciót a szín kiszámításához

Most létrehozunk egy funkciót, amely a numerikus adatokat jelentőségteljes színekké alakítja. Gondolj rá úgy, mint egy közlekedési lámpa rendszerre - zöld a tiszta energia, piros a magas szén-dioxid intenzitás.

Ez a funkció az API-ból származó CO2 adatokat fogja használni, hogy meghatározza, melyik szín képviseli legjobban a környezeti hatást. Hasonló ahhoz, ahogy a tudósok színkódolást használnak hőtérképekben, hogy összetett adatmintákat vizualizáljanak - az óceán hőmérsékletétől a csillagképződésig. Adjuk hozzá ezt a `/src/index.js` fájlhoz, közvetlenül azok után a `const` változók után, amelyeket korábban beállítottunk:

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**Nézzük meg, mit csinál ez az ügyes kis funkció:**
- **Beállít** két tömböt - egyet a CO2 szintekhez, egyet a színekhez (zöld = tiszta, barna = szennyezett!)
- **Megkeresi** a legközelebbi egyezést a tényleges CO2 értékünkhöz néhány ügyes tömb rendezéssel
- **Megfogja** a megfelelő színt a findIndex() metódus segítségével
- **Üzenetet küld** a Chrome háttérszkriptjének a választott színünkkel
- **Használ** sablon literálokat (azokat a backtick-eket) a tisztább szövegformázáshoz
- **Mindent szervezetten tart** const deklarációkkal

A `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) olyan, mint a bővítményed idegrendszere - kezeli az összes háttérben zajló kommunikációt és feladatot:

> "Használd a chrome.runtime API-t a háttéroldal eléréséhez, a manifest részleteinek visszaadásához, és az alkalmazás vagy bővítmény életciklusában bekövetkező események figyeléséhez és válaszadásához. Ezt az API-t arra is használhatod, hogy az URL-ek relatív útvonalát teljesen kvalifikált URL-ekre alakítsd."

**Miért olyan hasznos a Chrome Runtime API:**
- **Lehetővé teszi** a bővítmény különböző részeinek kommunikációját
- **Kezeli** a háttérmunkát anélkül, hogy lefagyasztaná a felhasználói felületet
- **Kezeli** a bővítmény életciklus eseményeit
- **Egyszerűvé teszi** az üzenetküldést a szkriptek között

✅ Ha ezt a böngészőbővítményt Edge-re fejleszted, meglephet, hogy Chrome API-t használsz. Az újabb Edge böngészőverziók a Chromium böngészőmotoron futnak, így kihasználhatod ezeket az eszközöket.

> **Tipp**: Ha egy böngészőbővítményt szeretnél profilozni, indítsd el a fejlesztői eszközöket magából a bővítményből, mivel az egy külön böngészőpéldányként működik. Ez hozzáférést biztosít a bővítmény-specifikus teljesítménymutatókhoz.

### Állíts be egy alapértelmezett ikon színt

Mielőtt elkezdenénk valódi adatokat lekérni, adjunk a bővítményünknek egy kezdőpontot. Senki sem szeret egy üres vagy törött kinézetű ikont nézni. Kezdjük egy zöld színnel, hogy a felhasználók tudják, hogy a bővítmény működik a telepítés pillanatától kezdve.

Az `init()` funkciódban állítsuk be az alapértelmezett zöld ikont:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Mit ér el ez az inicializálás:**
- **Beállít** egy semleges zöld színt alapértelmezett állapotként
- **Azonnali vizuális visszajelzést ad**, amikor a bővítmény betöltődik
- **Létrehozza** a kommunikációs mintát a háttérszkripttel
- **Biztosítja**, hogy a felhasználók egy működő bővítményt lássanak, mielőtt az adatok betöltődnek

### Hívd meg a funkció
Itt egy érdekes detektívküldetés: válassz néhány nyílt forráskódú weboldalt, amelyek már évek óta működnek (gondolj például a Wikipédiára, GitHubra vagy Stack Overflow-ra), és nézd meg a commit történetüket. Fel tudod fedezni, hol végeztek teljesítményjavításokat? Milyen problémák jelentek meg újra és újra?

**Nyomozási megközelítésed:**
- **Keress** commit üzenetekben olyan szavakat, mint "optimalizálás", "teljesítmény" vagy "gyorsabb"
- **Figyeld meg** a mintákat - vajon ugyanazokat a problémákat javítják folyamatosan?
- **Azonosítsd** a gyakori okokat, amelyek lelassítják a weboldalakat
- **Oszd meg** amit felfedeztél - más fejlesztők tanulhatnak valós példákból

## Előadás utáni kvíz

[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/quiz/28)

## Áttekintés és önálló tanulás

Fontold meg, hogy feliratkozol egy [teljesítmény hírlevélre](https://perf.email/)

Vizsgáld meg, hogyan mérik a böngészők a webes teljesítményt, ha átnézed a teljesítményfüleket a webes eszközeikben. Találsz jelentős különbségeket?

## Feladat

[Elemezz egy weboldalt teljesítmény szempontjából](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.