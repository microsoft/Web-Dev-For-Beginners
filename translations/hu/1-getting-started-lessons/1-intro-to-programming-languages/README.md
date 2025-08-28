<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c63675cfaf1d223b37bb9fecbfe7c252",
  "translation_date": "2025-08-28T04:29:57+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "hu"
}
-->
# Bevezetés a programozási nyelvekbe és az eszközök világába

Ez a lecke a programozási nyelvek alapjait tárgyalja. Az itt bemutatott témák a legtöbb modern programozási nyelvre alkalmazhatók. Az „Eszközök világa” részben megismerkedhetsz hasznos szoftverekkel, amelyek segítenek fejlesztőként.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.hu.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előadás előtti kvíz
[Előadás előtti kvíz](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Bevezetés

Ebben a leckében az alábbiakról lesz szó:

- Mi a programozás?
- Programozási nyelvek típusai
- Egy program alapvető elemei
- Hasznos szoftverek és eszközök a profi fejlesztők számára

> Ezt a leckét elérheted a [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon) oldalán!

## Mi a programozás?

A programozás (más néven kódolás) az a folyamat, amely során utasításokat írunk egy eszköz, például számítógép vagy mobil eszköz számára. Ezeket az utasításokat programozási nyelven írjuk, amelyet az eszköz értelmez. Ezeket az utasításokat különböző neveken ismerhetjük, például *program*, *számítógépes program*, *alkalmazás (app)* vagy *futtatható fájl*.

Egy *program* bármi lehet, amit kóddal írtak; weboldalak, játékok és telefonos alkalmazások is programok. Bár lehetséges programot létrehozni kódolás nélkül, az alapvető logikát az eszköz értelmezi, és ezt a logikát valószínűleg kóddal írták. Egy program, amely *fut* vagy *végrehajt* kódot, éppen utasításokat hajt végre. Az eszköz, amelyen ezt a leckét olvasod, egy programot futtat, hogy megjelenítse a képernyődön.

✅ Kutass egy kicsit: kit tartanak a világ első számítógépes programozójának?

## Programozási nyelvek

A programozási nyelvek lehetővé teszik a fejlesztők számára, hogy utasításokat írjanak egy eszköz számára. Az eszközök csak bináris (1-esek és 0-ák) formátumot értenek, ami a *legtöbb* fejlesztő számára nem túl hatékony kommunikációs mód. A programozási nyelvek hidat képeznek az emberek és a számítógépek közötti kommunikációban.

A programozási nyelvek különböző formátumokban léteznek, és különböző célokat szolgálhatnak. Például a JavaScript elsősorban webalkalmazásokhoz használatos, míg a Bash elsősorban operációs rendszerekhez.

Az *alacsony szintű nyelvek* általában kevesebb lépést igényelnek az eszköz számára az utasítások értelmezéséhez, mint a *magas szintű nyelvek*. A magas szintű nyelvek azonban olvashatóságuk és támogatottságuk miatt népszerűek. A JavaScript például magas szintű nyelvnek számít.

Az alábbi kód példát mutat arra, hogy egy magas szintű nyelv (JavaScript) és egy alacsony szintű nyelv (ARM assembly kód) hogyan különbözik egymástól.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Hihetetlen, de *mindkettő ugyanazt csinálja*: egy Fibonacci-sorozatot nyomtat ki 10-ig.

✅ A Fibonacci-sorozatot úgy [határozzák meg](https://en.wikipedia.org/wiki/Fibonacci_number), mint egy számhalmazt, ahol minden szám az előző kettő összege, kezdve 0-val és 1-gyel. Az első 10 szám a Fibonacci-sorozatban: 0, 1, 1, 2, 3, 5, 8, 13, 21 és 34.

## Egy program elemei

Egy program egyetlen utasítását *utasításnak* nevezzük, amely általában egy karakterrel vagy sortöréssel jelzi, hogy hol ér véget, vagyis *lezárul*. Az, hogy egy program hogyan zárul le, nyelvenként eltérő.

Az utasítások egy programban gyakran a felhasználó által megadott vagy máshonnan származó adatokra támaszkodnak az utasítások végrehajtásához. Az adatok megváltoztathatják a program viselkedését, ezért a programozási nyelvek lehetőséget biztosítanak arra, hogy az adatokat ideiglenesen tároljuk, hogy később felhasználhassuk őket. Ezeket *változóknak* nevezzük. A változók olyan utasítások, amelyek arra utasítják az eszközt, hogy adatokat tároljon a memóriájában. A változók a programozásban hasonlóak az algebrában használt változókhoz: egyedi nevük van, és értékük idővel változhat.

Előfordulhat, hogy egyes utasításokat az eszköz nem hajt végre. Ez általában a fejlesztő szándékos döntése, vagy véletlenül történik, amikor váratlan hiba lép fel. Az alkalmazás feletti ilyen típusú kontroll robusztusabbá és karbantarthatóbbá teszi azt. Ezek a kontrollváltozások általában bizonyos feltételek teljesülésekor következnek be. Egy gyakori utasítás, amelyet a modern programozásban használnak a program futásának irányítására, az `if..else` utasítás.

✅ Erről az utasítástípusról a következő leckékben tanulsz majd többet.

## Eszközök világa

[![Eszközök világa](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Eszközök világa")

> 🎥 Kattints a fenti képre egy videóért az eszközökről

Ebben a részben megismerkedhetsz néhány olyan szoftverrel, amelyet hasznosnak találhatsz, amikor elkezded szakmai fejlesztői utadat.

Egy **fejlesztői környezet** egyedi eszközök és funkciók halmaza, amelyeket a fejlesztők gyakran használnak szoftverírás közben. Ezeket az eszközöket a fejlesztő egyedi igényeihez igazították, és idővel változhatnak, ha a fejlesztő prioritásai megváltoznak a munkában, személyes projektekben, vagy ha más programozási nyelvet használ.

### Szerkesztők

Az egyik legfontosabb eszköz a szoftverfejlesztésben a szerkesztő. A szerkesztők azok a helyek, ahol a kódot írod, és néha futtatod is.

A fejlesztők több okból is támaszkodnak a szerkesztőkre:

- A *hibakeresés* segít feltárni a hibákat és problémákat, lépésről lépésre végighaladva a kódon. Néhány szerkesztő rendelkezik hibakeresési funkciókkal, amelyek testreszabhatók és hozzáadhatók bizonyos programozási nyelvekhez.
- A *szintaxiskiemelés* színeket és szövegformázást ad a kódhoz, megkönnyítve annak olvasását. A legtöbb szerkesztő lehetővé teszi a szintaxiskiemelés testreszabását.
- Az *extensionök és integrációk* speciális eszközök, amelyeket fejlesztők készítettek fejlesztők számára. Ezek az eszközök nem voltak beépítve az alap szerkesztőbe. Például sok fejlesztő dokumentálja a kódját, hogy elmagyarázza, hogyan működik. Telepíthetnek helyesírás-ellenőrző bővítményt, hogy segítsenek megtalálni a dokumentációban lévő elírásokat.
- A *testreszabás* lehetővé teszi a fejlesztők számára, hogy egyedi fejlesztői környezetet hozzanak létre saját igényeikhez igazítva.

#### Népszerű szerkesztők és webfejlesztési bővítmények

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [Sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Böngészők

Egy másik kulcsfontosságú eszköz a böngésző. A webfejlesztők a böngészőre támaszkodnak, hogy lássák, hogyan fut a kódjuk a weben. A böngésző megjeleníti azokat a vizuális elemeket is, amelyeket a szerkesztőben írtak, például a HTML-t.

Sok böngésző rendelkezik *fejlesztői eszközökkel* (DevTools), amelyek hasznos funkciókat és információkat tartalmaznak, hogy segítsenek a fejlesztőknek fontos adatokat gyűjteni az alkalmazásukról.

#### Népszerű böngészők és DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Parancssori eszközök

Néhány fejlesztő kevésbé grafikus nézetet részesít előnyben napi feladataihoz, és a parancssorra támaszkodik. A parancssor lehetővé teszi, hogy billentyűzeten maradva gyorsan végezz el feladatokat, anélkül hogy az egeret használnád.

#### Népszerű parancssori lehetőségek

- Windows: [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon), CMD
- MacOS: [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac), iTerm
- Linux: [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html), KDE Konsole

#### Népszerű parancssori eszközök

- [Git](https://git-scm.com/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentáció

A fejlesztők gyakran dokumentációhoz fordulnak, hogy új dolgokat tanuljanak meg, vagy mélyebb ismereteket szerezzenek.

#### Népszerű dokumentációk

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev)
- [Microsoft fejlesztői dokumentáció](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Kutass: Most, hogy ismered a webfejlesztői környezet alapjait, hasonlítsd össze egy webdizájner környezetével.

---

## 🚀 Kihívás

Hasonlíts össze néhány programozási nyelvet. Milyen egyedi jellemzői vannak a JavaScriptnek a Javához képest? És mi a helyzet a COBOL és a Go esetében?

## Előadás utáni kvíz
[Előadás utáni kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## Áttekintés és önálló tanulás

Tanulmányozd a programozók számára elérhető különböző nyelveket. Próbálj meg írni egy sort egy nyelven, majd írd át két másik nyelvre. Mit tanultál?

## Feladat

[Dokumentáció olvasása](assignment.md)

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális, emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.