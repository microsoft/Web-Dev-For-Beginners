<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2dcbb9259dee4f20a4f08d9a1aa2bd4c",
  "translation_date": "2025-08-29T10:38:12+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "hu"
}
-->
# Bevezetés a programozási nyelvekbe és az eszközök világába

Ez a lecke a programozási nyelvek alapjait tárgyalja. Az itt bemutatott témák a legtöbb modern programozási nyelvre alkalmazhatók. Az „Eszközök világa” részben hasznos szoftvereket ismerhetsz meg, amelyek segítenek fejlesztőként.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.hu.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előadás előtti kvíz
[Előadás előtti kvíz](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Bevezetés

Ebben a leckében az alábbiakat tárgyaljuk:

- Mi a programozás?
- Programozási nyelvek típusai
- Egy program alapvető elemei
- Hasznos szoftverek és eszközök a profi fejlesztők számára

> Ezt a leckét elérheted a [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon) oldalán!

## Mi a programozás?

A programozás (más néven kódolás) az a folyamat, amely során utasításokat írunk egy eszköz, például számítógép vagy mobil eszköz számára. Ezeket az utasításokat programozási nyelv segítségével írjuk, amelyet az eszköz értelmez. Ezeket az utasításokat különböző neveken ismerhetjük, például *program*, *számítógépes program*, *alkalmazás (app)* vagy *futtatható fájl*.

Egy *program* bármi lehet, amit kóddal írtak; weboldalak, játékok és telefonos alkalmazások is programok. Bár lehetséges programot létrehozni kód írása nélkül, az alapvető logikát az eszköz értelmezi, és ezt a logikát valószínűleg kóddal írták. Egy program, amely *fut* vagy *végrehajtja* a kódot, éppen utasításokat hajt végre. Az az eszköz, amelyen ezt a leckét olvasod, egy programot futtat, hogy megjelenítse a képernyődön.

✅ Kutass egy kicsit: kit tartanak a világ első számítógépes programozójának?

## Programozási nyelvek

A programozási nyelvek lehetővé teszik a fejlesztők számára, hogy utasításokat írjanak egy eszköz számára. Az eszközök csak bináris (1-esek és 0-ák) formátumot értenek, ami *a legtöbb* fejlesztő számára nem túl hatékony kommunikációs mód. A programozási nyelvek hidat képeznek az emberek és a számítógépek közötti kommunikációban.

A programozási nyelvek különböző formátumokban léteznek, és különböző célokat szolgálhatnak. Például a JavaScript elsősorban webalkalmazásokhoz használatos, míg a Bash elsősorban operációs rendszerekhez.

Az *alacsony szintű nyelvek* általában kevesebb lépést igényelnek az eszköz számára az utasítások értelmezéséhez, mint a *magas szintű nyelvek*. A magas szintű nyelvek azonban népszerűek az olvashatóságuk és a támogatottságuk miatt. A JavaScript például magas szintű nyelvnek számít.

Az alábbi kód példák bemutatják a különbséget egy magas szintű nyelv (JavaScript) és egy alacsony szintű nyelv (ARM assembly kód) között.

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

Egy program egyetlen utasítását *utasításnak* nevezzük, amely általában egy karakterrel vagy sortöréssel jelzi, hogy hol ér véget, vagyis *lezárul*. Az, hogy egy program hogyan zárja le az utasításokat, nyelvenként eltérő.

Az utasítások egy programban gyakran felhasználói vagy más forrásból származó adatokra támaszkodnak az utasítások végrehajtásához. Az adatok megváltoztathatják a program viselkedését, ezért a programozási nyelvek lehetőséget biztosítanak az adatok ideiglenes tárolására, hogy később felhasználhatók legyenek. Ezeket *változóknak* nevezzük. A változók olyan utasítások, amelyek arra utasítják az eszközt, hogy adatokat tároljon a memóriájában. A változók a programokban hasonlóak az algebrában használt változókhoz: egyedi nevük van, és értékük idővel változhat.

Előfordulhat, hogy egyes utasításokat az eszköz nem hajt végre. Ez általában a fejlesztő szándékos döntése, vagy véletlenül történik, amikor váratlan hiba lép fel. Ez a fajta kontroll egy alkalmazás felett robusztusabbá és karbantarthatóbbá teszi azt. Az ilyen változások általában bizonyos feltételek teljesülésekor következnek be. Egy gyakori utasítás, amelyet a modern programozásban használnak a program futásának irányítására, az `if..else` utasítás.

✅ Erről az utasításról többet tanulsz a következő leckékben.

## Az eszközök világa

[![Az eszközök világa](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Az eszközök világa")

> 🎥 Kattints a fenti képre egy videóért az eszközökről

Ebben a részben megismerhetsz néhány szoftvert, amelyeket hasznosnak találhatsz, amikor elkezded a profi fejlesztői utadat.

Egy **fejlesztői környezet** egyedi eszközök és funkciók halmaza, amelyeket egy fejlesztő gyakran használ a szoftverírás során. Ezek az eszközök a fejlesztő egyedi igényeihez igazodhatnak, és idővel változhatnak, ha a fejlesztő prioritásai megváltoznak a munkában, személyes projektekben, vagy ha más programozási nyelvet használ.

### Szerkesztők

Az egyik legfontosabb eszköz a szoftverfejlesztésben a szerkesztő. A szerkesztők azok a helyek, ahol a kódot írod, és néha futtatod is.

A fejlesztők több okból is támaszkodnak a szerkesztőkre:

- A *hibakeresés* segít feltárni a hibákat és problémákat, lépésről lépésre végighaladva a kódon. Néhány szerkesztő rendelkezik hibakeresési funkciókkal, amelyek testreszabhatók és hozzáadhatók bizonyos programozási nyelvekhez.
- A *szintaxiskiemelés* színeket és szövegformázást ad a kódhoz, megkönnyítve annak olvasását. A legtöbb szerkesztő lehetővé teszi a szintaxiskiemelés testreszabását.
- Az *integrációk és bővítmények* speciális eszközök, amelyeket fejlesztők készítettek fejlesztők számára. Ezek az eszközök nem részei az alap szerkesztőnek. Például sok fejlesztő dokumentálja a kódját, hogy elmagyarázza, hogyan működik. Telepíthetnek helyesírás-ellenőrző bővítményt, hogy segítsenek megtalálni a dokumentációban lévő elírásokat. A legtöbb bővítmény egy adott szerkesztőhöz készült, és a legtöbb szerkesztő lehetőséget biztosít a bővítmények keresésére.
- A *testreszabás* lehetővé teszi a fejlesztők számára, hogy egyedi fejlesztői környezetet hozzanak létre az igényeiknek megfelelően. A legtöbb szerkesztő rendkívül testreszabható, és lehetővé teszi egyedi bővítmények létrehozását is.

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

Sok böngésző rendelkezik *fejlesztői eszközökkel* (DevTools), amelyek hasznos funkciókat és információkat tartalmaznak, hogy segítsenek a fejlesztőknek fontos adatokat gyűjteni az alkalmazásukról. Például: Ha egy weboldalon hibák vannak, néha hasznos tudni, mikor történtek. A böngésző DevTools eszközei konfigurálhatók, hogy rögzítsék ezeket az információkat.

#### Népszerű böngészők és DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Parancssori eszközök

Néhány fejlesztő kevésbé grafikus nézetet részesít előnyben a napi feladataihoz, és a parancssort használja erre. A kódírás jelentős mennyiségű gépelést igényel, és néhány fejlesztő nem szeretné megszakítani a billentyűzeten való munkafolyamatát. A parancssor lehetővé teszi, hogy sok feladatot elvégezzenek anélkül, hogy az egér és a billentyűzet között váltogatnának. A parancssor másik előnye, hogy konfigurálható, és a beállítások menthetők, később módosíthatók, és más fejlesztői gépekre importálhatók. Mivel a fejlesztői környezetek annyira egyediek, egyes fejlesztők teljesen elkerülik a parancssort, mások teljes mértékben támaszkodnak rá, míg megint mások a kettő kombinációját részesítik előnyben.

### Népszerű parancssori lehetőségek

A parancssori lehetőségek az operációs rendszertől függően eltérőek.

*💻 = előre telepítve az operációs rendszeren.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (más néven CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Népszerű parancssori eszközök

- [Git](https://git-scm.com/) (💻 a legtöbb operációs rendszeren)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentáció

Amikor egy fejlesztő valami újat szeretne megtanulni, valószínűleg dokumentációhoz fordul, hogy megtudja, hogyan kell használni. A fejlesztők gyakran támaszkodnak a dokumentációra, hogy eligazodjanak az eszközök és nyelvek helyes használatában, valamint hogy mélyebb ismereteket szerezzenek azok működéséről.

#### Népszerű dokumentációk webfejlesztéshez

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), a Mozilla-tól, a [Firefox](https://www.mozilla.org/firefox/) böngésző kiadójától
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), a Google-tól, a [Chrome](https://www.google.com/chrome/) kiadójától
- [Microsoft fejlesztői dokumentációja](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), a [Microsoft Edge](https://www.microsoft.com/edge) böngészőhöz
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Kutass egy kicsit: Most, hogy ismered a webfejlesztői környezet alapjait, hasonlítsd össze egy webdizájner környezetével.

---

## 🚀 Kihívás

Hasonlíts össze néhány programozási nyelvet. Milyen egyedi jellemzői vannak a JavaScript-nek a Java-hoz képest? És mi a helyzet a COBOL-lal és a Go-val?

## Előadás utáni kvíz
[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/)

## Áttekintés és önálló tanulás

Tanulmányozd a programozók számára elérhető különböző nyelveket. Próbálj meg írni egy sort az egyik nyelven, majd írd át két másik nyelvre. Mit tanultál?

## Feladat

[Dokumentáció olvasása](assignment.md)

---

**Felelősségkizárás**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével készült. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt a professzionális, emberi fordítás igénybevétele. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.