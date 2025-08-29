<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f0c88c3e2cefa8952d356f802b1e47ca",
  "translation_date": "2025-08-29T10:39:57+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "hu"
}
-->
# Hozzáférhető weboldalak létrehozása

![Minden az akadálymentességről](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előadás előtti kvíz
[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/)

> Az internet ereje az egyetemességében rejlik. Az akadálymentes hozzáférés mindenki számára, függetlenül a fogyatékosságtól, alapvető fontosságú.
>
> \- Sir Timothy Berners-Lee, a W3C igazgatója és a World Wide Web feltalálója

Ez az idézet tökéletesen kiemeli a hozzáférhető weboldalak létrehozásának fontosságát. Egy alkalmazás, amely nem érhető el mindenki számára, definíció szerint kirekesztő. Webfejlesztőként mindig szem előtt kell tartanunk az akadálymentességet. Ha már a kezdetektől erre összpontosítunk, jó úton járunk afelé, hogy mindenki számára elérhetővé tegyük az általunk létrehozott oldalakat. Ebben a leckében megismerheted azokat az eszközöket, amelyek segítenek biztosítani, hogy webes tartalmaid akadálymentesek legyenek, és megtanulhatod, hogyan építsd be az akadálymentességet a tervezésbe.

> Ezt a leckét elérheted a [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon) oldalon!

## Használható eszközök

### Képernyőolvasók

Az egyik legismertebb akadálymentességi eszköz a képernyőolvasó.

A [képernyőolvasók](https://en.wikipedia.org/wiki/Screen_reader) olyan kliensprogramok, amelyeket látássérült emberek használnak. Ahogy időt szánunk arra, hogy a böngésző megfelelően közvetítse az általunk megosztani kívánt információkat, ugyanúgy biztosítanunk kell, hogy a képernyőolvasó is helyesen tegye ezt.

A képernyőolvasó alapvetően felülről lefelé, hangosan olvassa fel az oldalt. Ha az oldal csak szövegből áll, az olvasó hasonló módon közvetíti az információkat, mint egy böngésző. Természetesen a weboldalak ritkán állnak csak szövegből; tartalmazhatnak linkeket, grafikákat, színeket és más vizuális elemeket. Gondoskodni kell arról, hogy ezek az információk helyesen legyenek olvashatók a képernyőolvasó által.

Minden webfejlesztőnek meg kell ismerkednie egy képernyőolvasóval. Ahogy fentebb kiemeltük, ez az a kliens, amelyet a felhasználók használni fognak. Ugyanúgy, ahogy ismered, hogyan működik egy böngésző, meg kell tanulnod, hogyan működik egy képernyőolvasó. Szerencsére a képernyőolvasók a legtöbb operációs rendszerbe beépítve vannak.

Néhány böngészőben beépített eszközök és bővítmények is találhatók, amelyek képesek szöveget felolvasni, vagy akár alapvető navigációs funkciókat is biztosítani, például [ezek az Edge böngésző akadálymentességi eszközei](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Ezek szintén fontos akadálymentességi eszközök, de nagyon eltérően működnek a képernyőolvasóktól, és nem szabad őket képernyőolvasó tesztelő eszközöknek tekinteni.

✅ Próbálj ki egy képernyőolvasót és böngésző szövegolvasót. Windows rendszeren a [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) alapértelmezés szerint elérhető, és telepíthető a [JAWS](https://webaim.org/articles/jaws/) és az [NVDA](https://www.nvaccess.org/about-nvda/) is. macOS és iOS rendszeren a [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) alapértelmezés szerint telepítve van.

### Nagyítás

A látássérült emberek által gyakran használt másik eszköz a nagyítás. A legegyszerűbb típusú nagyítás a statikus nagyítás, amelyet a `Control + plusz jel (+)` billentyűkombinációval vagy a képernyőfelbontás csökkentésével lehet vezérelni. Ez a típusú nagyítás az egész oldalt átméretezi, ezért fontos a [reszponzív tervezés](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) alkalmazása, hogy jó felhasználói élményt nyújtsunk megnövelt nagyítási szinteken.

Egy másik típusú nagyítás speciális szoftvereket használ, amelyek a képernyő egy területét nagyítják és pásztázzák, hasonlóan egy valódi nagyító használatához. Windows rendszeren a [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) beépített eszköz, míg a [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) egy harmadik féltől származó nagyító szoftver, amely több funkcióval és nagyobb felhasználói bázissal rendelkezik. Mind a macOS, mind az iOS beépített nagyító szoftverrel rendelkezik, amelyet [Zoom](https://www.apple.com/accessibility/mac/vision/) néven ismerünk.

### Kontrasztellenőrzők

A weboldalak színeit gondosan kell megválasztani, hogy megfeleljenek a színvak felhasználók vagy azok igényeinek, akik nehezen látják az alacsony kontrasztú színeket.

✅ Tesztelj egy általad kedvelt weboldalt a színek használata szempontjából egy böngészőbővítménnyel, például a [WCAG színellenőrzőjével](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Mit tanulsz?

### Lighthouse

A böngésződ fejlesztői eszközei között megtalálható a Lighthouse eszköz. Ez az eszköz fontos, hogy első ránézésre megvizsgáljuk egy weboldal akadálymentességét (valamint más elemzéseket). Bár fontos, hogy ne kizárólag a Lighthouse-ra támaszkodjunk, egy 100%-os pontszám nagyon hasznos kiindulási alapként.

✅ Keresd meg a Lighthouse-t a böngésződ fejlesztői eszköz paneljében, és futtass elemzést bármelyik weboldalon. Mit fedezel fel?

## Akadálymentességre tervezés

Az akadálymentesség viszonylag nagy téma. Hogy segítsünk, számos forrás áll rendelkezésre.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Bár nem tudunk minden aspektust lefedni az akadálymentes oldalak létrehozásával kapcsolatban, az alábbiakban néhány alapvető elvet találsz, amelyeket érdemes megvalósítani. Az akadálymentes oldal tervezése a kezdetektől **mindig** könnyebb, mint egy meglévő oldal utólagos akadálymentesítése.

## Jó megjelenítési elvek

### Színbiztos paletták

Az emberek különböző módon látják a világot, beleértve a színeket is. Amikor színsémát választasz az oldaladhoz, biztosítanod kell, hogy az mindenki számára hozzáférhető legyen. Egy nagyszerű [eszköz színpaletták generálásához a Color Safe](http://colorsafe.co/).

✅ Azonosíts egy weboldalt, amely nagyon problémás a színek használata szempontjából. Miért?

### Használj megfelelő HTML-t

A CSS és JavaScript segítségével bármelyik elem bármilyen típusú vezérlőnek kinézővé tehető. A `<span>` használható `<button>` létrehozására, és a `<b>` válhat hiperhivatkozássá. Bár ez könnyebbnek tűnhet a stílus szempontjából, semmit sem közvetít a képernyőolvasónak. Használj megfelelő HTML-t, amikor vezérlőket hozol létre az oldalon. Ha hiperhivatkozást szeretnél, használj `<a>`-t. A megfelelő HTML használata a megfelelő vezérlőhöz a szemantikus HTML használatának nevezik.

✅ Látogass el bármelyik weboldalra, és nézd meg, hogy a tervezők és fejlesztők megfelelően használják-e a HTML-t. Találsz olyan gombot, amelynek linknek kellene lennie? Tipp: kattints jobb gombbal, és válaszd a 'View Page Source' lehetőséget a böngésződben, hogy megnézd az alapul szolgáló kódot.

### Hozz létre leíró címsorhierarchiát

A képernyőolvasó felhasználók [nagymértékben támaszkodnak a címsorokra](https://webaim.org/projects/screenreadersurvey8/#finding), hogy információt találjanak és navigáljanak az oldalon. Leíró címsortartalom írása és szemantikus címsorcímkék használata fontos az egyszerűen navigálható oldal létrehozásához a képernyőolvasó felhasználók számára.

### Használj jó vizuális jeleket

A CSS teljes kontrollt kínál az oldal bármely elemének megjelenése felett. Létrehozhatsz szövegdobozokat körvonal nélkül, vagy hiperhivatkozásokat aláhúzás nélkül. Sajnos ezeknek a jeleknek az eltávolítása megnehezítheti azok számára, akik ezekre támaszkodnak, hogy felismerjék a vezérlő típusát.

## A link szövegének fontossága

A hiperhivatkozások alapvetőek az interneten való navigációhoz. Ezért fontos, hogy a képernyőolvasó megfelelően olvassa a linkeket, hogy minden felhasználó navigálhasson az oldaladon.

### Képernyőolvasók és linkek

Ahogy várható, a képernyőolvasók ugyanúgy olvassák a link szövegét, mint az oldal bármely más szövegét. Ezt szem előtt tartva az alábbi példákban szereplő szöveg tökéletesen elfogadhatónak tűnhet.

> A kis pingvin, amelyet néha tündérpingvinnek is neveznek, a világ legkisebb pingvinje. [Kattints ide](https://en.wikipedia.org/wiki/Little_penguin) további információért.

> A kis pingvin, amelyet néha tündérpingvinnek is neveznek, a világ legkisebb pingvinje. Látogass el a https://en.wikipedia.org/wiki/Little_penguin oldalra további információért.

> **NOTE** Ahogy hamarosan olvasni fogod, **soha** ne hozz létre linkeket, amelyek úgy néznek ki, mint a fentiek.

Ne feledd, a képernyőolvasók más interfészt kínálnak, mint a böngészők, és más funkciókkal rendelkeznek.

### A probléma az URL használatával

A képernyőolvasók a szöveget olvassák. Ha egy URL megjelenik a szövegben, a képernyőolvasó az URL-t fogja olvasni. Általában az URL nem közvetít értelmes információt, és zavaróan hangozhat. Ezt tapasztalhattad, ha a telefonod valaha hangosan felolvasott egy URL-t tartalmazó szöveges üzenetet.

### A probléma a "kattints ide" használatával

A képernyőolvasók képesek csak a hiperhivatkozásokat olvasni az oldalon, hasonlóan ahhoz, ahogy egy látó személy átfutja az oldalt linkek után kutatva. Ha a link szövege mindig "kattints ide", a felhasználó csak azt fogja hallani, hogy "kattints ide, kattints ide, kattints ide, kattints ide, kattints ide, ..." Minden link megkülönböztethetetlenné válik egymástól.

### Jó link szöveg

A jó link szöveg röviden leírja, mi található a link másik oldalán. A fenti példában, amely a kis pingvinekről szól, a link a faj Wikipedia oldalára mutat. A *kis pingvinek* kifejezés tökéletes link szöveg lenne, mivel egyértelművé teszi, mit tanulhat valaki, ha rákattint a linkre - kis pingvineket.

> A [kis pingvin](https://en.wikipedia.org/wiki/Little_penguin), amelyet néha tündérpingvinnek is neveznek, a világ legkisebb pingvinje.

✅ Böngéssz az interneten néhány percig, hogy olyan oldalakat találj, amelyek homályos linkelési stratégiákat használnak. Hasonlítsd össze őket más, jobban linkelt oldalakkal. Mit tanulsz?

#### Megjegyzések keresőmotorokhoz

Az akadálymentesség biztosításával nemcsak a felhasználók számára teszed elérhetővé az oldaladat, hanem a keresőmotorok számára is segítesz navigálni az oldaladon. A keresőmotorok a link szövegét használják az oldalak témáinak megértéséhez. Tehát a jó link szöveg mindenki számára előnyös!

### ARIA

Képzeld el a következő oldalt:

| Termék       | Leírás             | Rendelés     |
| ------------ | ------------------ | ------------ |
| Widget       | [Leírás](../../../../1-getting-started-lessons/3-accessibility/')      | [Rendelés](../../../../1-getting-started-lessons/3-accessibility/') |
| Szuper widget | [Leírás](../../../../1-getting-started-lessons/3-accessibility/')     | [Rendelés](../../../../1-getting-started-lessons/3-accessibility/') |

Ebben a példában a leírás és rendelés szövegének ismétlése logikusnak tűnik egy böngészőt használó személy számára. Azonban egy képernyőolvasót használó személy csak a *leírás* és *rendelés* szavakat hallaná ismétlődve, kontextus nélkül.

Az ilyen típusú helyzetek támogatására a HTML támogat egy attribútumkészletet, amelyet [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) néven ismerünk. Ezek az attribútumok lehetővé teszik, hogy további információkat adj a képernyőolvasóknak.

> **NOTE**: Mint a HTML sok aspektusa, a böngésző és képernyőolvasó támogatás változhat. Azonban a legtöbb főbb kliens támogatja az ARIA attribútumokat.

Az `aria-label` használatával leírhatod a linket, amikor az oldal formátuma nem teszi lehetővé. A widget leírása beállítható így:

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Általában a fent leírt szemantikus jelölés használata előnyben részesíti az ARIA használatát, de néha nincs szemantikus megfelelője bizonyos HTML elemeknek. Jó példa erre egy fa. Nincs HTML megfelelője egy fának, ezért az elem generikus `<div>`-jét megfelelő szerepkörrel és ARIA értékekkel kell azonosítani. Az [MDN dokumentáció az ARIA-ról](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) további hasznos információkat tartalmaz.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Képek

Magától értetődik, hogy a képernyőolvasók nem tudják automatikusan elolvasni, mi van egy képen. A képek akadálymentessé tétele nem igényel sok munkát - erre való az `alt` attribútum. Minden jelentőséggel bíró képnek rendelkeznie kell `alt` attribútummal, amely leírja, mi van rajta.
A pusztán dekoratív képek `alt` attribútumát üres karakterláncra kell állítani:
Számos kormány rendelkezik törvényekkel az akadálymentességi követelményekről. Nézz utána a saját országod akadálymentességi törvényeinek. Mi tartozik ezek hatálya alá, és mi nem? Példaként szolgálhat [ez a kormányzati weboldal](https://accessibility.blog.gov.uk/).

## Feladat

[Elemezz egy nem akadálymentesített weboldalt](assignment.md)

Forrás: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) az Instrument-től

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.