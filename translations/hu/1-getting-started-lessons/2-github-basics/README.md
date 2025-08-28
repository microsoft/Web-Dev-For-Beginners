<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05666cecb8983a72cf0ce1d18932b5b7",
  "translation_date": "2025-08-28T04:37:43+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "hu"
}
-->
# Bevezetés a GitHub használatába

Ez a lecke a GitHub alapjait ismerteti, amely egy platform a kód tárolására és változásainak kezelésére.

![Bevezetés a GitHub használatába](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előzetes kvíz
[Előzetes kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)

## Bevezetés

Ebben a leckében az alábbiakat fogjuk áttekinteni:

- a munkád nyomon követése a saját gépeden
- projektek közös munkája másokkal
- hogyan járulhatsz hozzá nyílt forráskódú szoftverekhez

### Előfeltételek

Mielőtt elkezdenéd, ellenőrizd, hogy telepítve van-e a Git. A terminálban írd be:  
`git --version`

Ha a Git nincs telepítve, [töltsd le a Git-et](https://git-scm.com/downloads). Ezután állítsd be a helyi Git profilt a terminálban:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

Ellenőrizheted, hogy a Git már konfigurálva van-e, ha beírod:
`git config --list`

Szükséged lesz egy GitHub fiókra, egy kódszerkesztőre (például Visual Studio Code), és meg kell nyitnod a terminált (vagy: parancssort).

Látogass el a [github.com](https://github.com/) oldalra, és hozz létre egy fiókot, ha még nem tetted meg, vagy jelentkezz be, és töltsd ki a profilodat.

✅ A GitHub nem az egyetlen kód-tároló a világon; vannak mások is, de a GitHub a legismertebb.

### Felkészülés

Szükséged lesz egy mappára a helyi gépeden (laptop vagy PC), amely tartalmaz egy kódprojektet, valamint egy nyilvános GitHub-tárhelyre, amely példaként szolgál arra, hogyan járulhatsz hozzá mások projektjeihez.

---

## Kódkezelés

Tegyük fel, hogy van egy mappád helyben, amely tartalmaz egy kódprojektet, és szeretnéd elkezdeni nyomon követni a haladásodat a git verziókezelő rendszer segítségével. Néhányan úgy hasonlítják a git használatát, mintha szerelmes levelet írnál a jövőbeli önmagadnak. Ha napokkal, hetekkel vagy hónapokkal később olvasod a commit üzeneteidet, emlékezni fogsz arra, miért hoztál egy adott döntést, vagy vissza tudsz állítani egy változtatást – persze csak akkor, ha jó "commit üzeneteket" írsz.

### Feladat: Hozz létre egy tárhelyet és commitolj kódot  

> Nézd meg a videót
> 
> [![Git és GitHub alapok videó](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Tárhely létrehozása a GitHub-on**. A GitHub.com oldalon, a tárhelyek fülön, vagy a jobb felső navigációs sávban keresd meg az **új tárhely** gombot.

   1. Adj nevet a tárhelyednek (mappának).
   1. Válaszd ki a **tárhely létrehozása** opciót.

1. **Navigálj a munkamappádhoz**. A terminálban válts arra a mappára (más néven könyvtárra), amelyet nyomon szeretnél követni. Írd be:

   ```bash
   cd [name of your folder]
   ```

1. **Git tárhely inicializálása**. A projektedben írd be:

   ```bash
   git init
   ```

1. **Állapot ellenőrzése**. A tárhely állapotának ellenőrzéséhez írd be:

   ```bash
   git status
   ```

   Az eredmény valahogy így nézhet ki:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Általában a `git status` parancs olyan információkat ad, mint például mely fájlok állnak készen a _mentésre_ a tárhelyen, vagy melyeken vannak olyan változások, amelyeket érdemes lehet megőrizni.

1. **Minden fájl hozzáadása nyomon követéshez**  
   Ezt nevezik fájlok staging területre való hozzáadásának.

   ```bash
   git add .
   ```

   A `git add` plusz `.` argumentum azt jelzi, hogy minden fájl és változás nyomon követésre kerül.

1. **Kiválasztott fájlok hozzáadása nyomon követéshez**

   ```bash
   git add [file or folder name]
   ```

   Ez segít abban, hogy csak kiválasztott fájlokat adj hozzá a staging területre, amikor nem akarod egyszerre az összes fájlt commitolni.

1. **Minden fájl unstagingelése**

   ```bash
   git reset
   ```

   Ez a parancs segít egyszerre minden fájlt unstagingelni.

1. **Egy adott fájl unstagingelése**

   ```bash
   git reset [file or folder name]
   ```

   Ez a parancs segít csak egy adott fájlt unstagingelni, amelyet nem akarsz a következő commitba belefoglalni.

1. **Munkád megőrzése**. Ezen a ponton hozzáadtad a fájlokat az úgynevezett _staging területre_. Ez egy hely, ahol a Git nyomon követi a fájljaidat. Ahhoz, hogy a változtatásokat véglegessé tedd, _commitolnod_ kell a fájlokat. Ehhez hozz létre egy _commitot_ a `git commit` paranccsal. A _commit_ egy mentési pontot képvisel a tárhelyed történetében. Írd be a következőt a _commit_ létrehozásához:

   ```bash
   git commit -m "first commit"
   ```

   Ez commitolja az összes fájlodat, hozzáadva az "első commit" üzenetet. A jövőbeli commit üzeneteknél érdemes lesz részletesebb leírást adni, hogy pontosan közvetítsd, milyen típusú változtatást végeztél.

1. **Kapcsold össze a helyi Git tárhelyedet a GitHubbal**. Egy Git tárhely jó a gépeden, de egy ponton szeretnéd a fájljaidat valahol biztonsági mentésként tárolni, és másokat is meghívni, hogy dolgozzanak veled a tárhelyeden. Egy ilyen nagyszerű hely erre a GitHub. Emlékezz, hogy már létrehoztunk egy tárhelyet a GitHubon, így csak össze kell kapcsolnunk a helyi Git tárhelyet a GitHubbal. A `git remote add` parancs pontosan ezt teszi. Írd be a következő parancsot:

   > Megjegyzés: mielőtt beírod a parancsot, menj a GitHub tárhelyed oldalára, hogy megtaláld a tárhely URL-jét. Ezt fogod használni az alábbi parancsban. Cseréld ki ```https://github.com/username/repository_name.git```-et a GitHub URL-edre.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Ez létrehoz egy _távoli kapcsolatot_, amelyet "origin"-nek neveznek, és amely a korábban létrehozott GitHub tárhelyre mutat.

1. **Helyi fájlok küldése a GitHubra**. Eddig létrehoztál egy _kapcsolatot_ a helyi tárhely és a GitHub tárhely között. Küldjük el ezeket a fájlokat a GitHubra a következő `git push` paranccsal:

   > Megjegyzés: az alapértelmezett branch neve eltérhet ```main```-től.

   ```bash
   git push -u origin main
   ```

   Ez elküldi a commitjaidat a "main" branchben a GitHubra.

2. **További változtatások hozzáadása**. Ha folytatni szeretnéd a változtatások végrehajtását és azok GitHubra való feltöltését, csak a következő három parancsot kell használnod:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tipp: Érdemes lehet egy `.gitignore` fájlt is alkalmazni, hogy megakadályozd, hogy olyan fájlok, amelyeket nem akarsz nyomon követni, megjelenjenek a GitHubon – például az a jegyzetfájl, amelyet ugyanabban a mappában tárolsz, de nincs helye egy nyilvános tárhelyen. `.gitignore` fájl sablonokat találhatsz itt: [.gitignore templates](https://github.com/github/gitignore).

#### Commit üzenetek

Egy nagyszerű Git commit tárgy sor a következő mondatot fejezi be:
Ha alkalmazzuk, ez a commit <ide jön a tárgy sorod>

A tárgy sorban használj felszólító, jelen idejű formát: "változtat" nem "változtatott" vagy "változtatások".  
Ahogy a tárgy sorban, a törzsben (opcionális) is használj felszólító, jelen idejű formát. A törzsnek tartalmaznia kell a változtatás motivációját, és ezt össze kell hasonlítani a korábbi viselkedéssel. A `miértet` magyarázod, nem a `hogyan-t`.

✅ Szánj néhány percet arra, hogy böngéssz a GitHubon. Találsz egy igazán nagyszerű commit üzenetet? Találsz egy igazán minimálisat? Szerinted milyen információk a legfontosabbak és leghasznosabbak egy commit üzenetben?

### Feladat: Együttműködés

A fő ok, amiért a dolgokat a GitHubra helyeztük, az volt, hogy lehetővé tegyük a közös munkát más fejlesztőkkel.

## Közös munka másokkal

> Nézd meg a videót
>
> [![Git és GitHub alapok videó](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

A tárhelyeden navigálj az `Insights > Community` menüponthoz, hogy megnézd, hogyan viszonyul a projekted az ajánlott közösségi szabványokhoz.

   Íme néhány dolog, ami javíthatja a GitHub tárhelyedet:
   - **Leírás**. Adtál leírást a projektedhez?
   - **README**. Készítettél README-t? A GitHub útmutatást nyújt a [README írásához](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Hozzájárulási irányelvek**. Van a projektednek [hozzájárulási irányelve](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
   - **Magatartási kódex**. Van [magatartási kódex](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)?
   - **Licenc**. Talán a legfontosabb, van [licenc](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Ezek az erőforrások elősegítik az új csapattagok beilleszkedését. Ezek általában azok a dolgok, amelyeket az új hozzájárulók megnéznek, mielőtt egyáltalán megnéznék a kódodat, hogy eldöntsék, a projekted megfelelő hely-e számukra, hogy időt töltsenek vele.

✅ A README fájlok, bár időt igényelnek az elkészítésük, gyakran elhanyagoltak az elfoglalt karbantartók által. Találsz példát egy különösen leíró jellegű README-re? Megjegyzés: vannak [eszközök, amelyek segítenek jó README-ket készíteni](https://www.makeareadme.com/), amelyeket érdemes kipróbálni.

### Feladat: Kód összevonása

A hozzájárulási dokumentumok segítenek az embereknek hozzájárulni a projekthez. Elmagyarázzák, milyen típusú hozzájárulásokat keresel, és hogyan működik a folyamat. A hozzájárulóknak egy sor lépést kell követniük, hogy hozzájárulhassanak a GitHub tárhelyedhez:

1. **Tárhelyed fork-olása**. Valószínűleg azt szeretnéd, hogy az emberek _forkolják_ a projektedet. A forkolás azt jelenti, hogy létrehoznak egy másolatot a tárhelyedről a GitHub profiljukon.
1. **Klónozás**. Innen klónozzák a projektet a helyi gépükre.
1. **Branch létrehozása**. Azt szeretnéd, hogy hozzanak létre egy _branch-et_ a munkájukhoz.
1. **Változtatásuk egy területre koncentrálása**. Kérd meg a hozzájárulókat, hogy koncentrálják a hozzájárulásaikat egy dologra egyszerre – így nagyobb az esélye annak, hogy _össze tudod vonni_ a munkájukat. Képzeld el, hogy írnak egy hibajavítást, hozzáadnak egy új funkciót, és frissítenek több tesztet – mi van, ha csak 2-ből 3-at, vagy 1-ből 3 változtatást tudsz vagy akarsz megvalósítani?

✅ Képzelj el egy helyzetet, ahol a branch-ek különösen kritikusak a jó kód írásához és szállításához. Milyen felhasználási esetek jutnak eszedbe?

> Megjegyzés: légy te magad a változás, amit látni szeretnél a világban, és hozz létre branch-eket a saját munkádhoz is. Bármilyen commitot készítesz, az azon a branch-en lesz, amelyen éppen "ki vagy jelentkezve". Használd a `git status` parancsot, hogy lásd, melyik branch az.

Nézzük meg egy hozzájáruló munkafolyamatát. Tegyük fel, hogy a hozzájáruló már _forkolta_ és _klónozta_ a tárhelyet, így van egy Git tárhelye, amely készen áll a munkára a helyi gépén:

1. **Branch létrehozása**. Használd a `git branch` parancsot egy branch létrehozásához, amely tartalmazza a változtatásokat, amelyeket hozzájárulni szeretne:

   ```bash
   git branch [branch-name]
   ```

1. **Váltás a munkabranch-re**. Válts az adott branch-re, és frissítsd a munkakönyvtárat a `git switch` paranccsal:

   ```bash
   git switch [branch-name]
   ```

1. **Munka elvégzése**. Ezen a ponton hozzáadhatod a változtatásaidat. Ne felejtsd el tájékoztatni a Git-et a következő parancsokkal:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Ügyelj arra, hogy jó nevet adj a commitodnak, a saját érdekedben, valamint annak a tárhely karbantartójának érdekében, akinek segítesz.

1. **Munkád összevonása a `main` branch-csel**. Egy ponton befejezed a munkát, és össze akarod vonni a munkádat a `main` branch-csel. A `main` branch közben változhatott, ezért győződj meg róla, hogy először frissíted a legújabb verzióra a következő parancsokkal:

   ```bash
   git switch main
   git pull
   ```

   Ezen a ponton győződj meg arról, hogy minden _konfliktus_, olyan helyzetek, ahol a Git nem tudja könnyen _összevonni_ a változtatásokat, a munkabranch-edben történik. Ezért futtasd a következő parancsokat:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Ez behozza az összes változtatást a `main` branch-ből a branch-edbe, és remélhetőleg folytathatod. Ha nem, a VS Code megmutatja, hol van a Git _zavarban_, és csak módosítanod kell az érintett fájlokat, hogy megmondhasd, melyik tartalom a legpontosabb.

1. **Munkád küldése a GitHubra**. A munkád GitHubra küldése két dolgot jelent. A branch-ed feltöltése a tárhelyedre, majd egy PR (Pull Request) megnyitása.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   A fenti parancs létrehozza a branch-et a forkolt tárhelyeden.

1. **PR meg
Győződj meg róla, hogy a GitHub oldalán a forkolt repóhoz tartozó távoli ágat eltávolítod, miután feltöltötted rá a változtatásaidat.

A `Pull request` kifejezés elsőre furcsának tűnhet, hiszen valójában a változtatásaidat szeretnéd "feltolni" a projekthez. Azonban a karbantartónak (a projekt tulajdonosának) vagy a fő csapatnak el kell bírálnia a változtatásaidat, mielőtt azokat egyesítenék a projekt "main" ágával, így valójában egy döntést kérsz a karbantartótól a változtatásaidról.

A pull request egy hely, ahol összehasonlíthatod és megvitathatod az ágon végzett változtatásokat véleményekkel, megjegyzésekkel, integrált tesztekkel és egyebekkel. Egy jó pull request nagyjából ugyanazokat a szabályokat követi, mint egy commit üzenet. Hivatkozhatsz egy problémára az issue trackerben, például ha a munkád megold egy problémát. Ezt úgy teheted meg, hogy a `#` jelet követően beírod a probléma számát, például `#97`.

🤞Reméljük, hogy minden ellenőrzés sikeresen lefut, és a projekt tulajdonosa(i) egyesítik a változtatásaidat a projekttel🤞

Frissítsd a helyi munkafiókodat az összes új commit-tal, amely a megfelelő távoli ágon található a GitHubon:

`git pull`

## Hogyan járulj hozzá nyílt forráskódú projektekhez

Először is, keress egy olyan GitHub repót (**repo**), amely érdekel, és amelyhez szeretnél hozzájárulni. A tartalmát le kell másolnod a gépedre.

✅ Egy jó módszer kezdőbarát repók keresésére, ha [a 'good-first-issue' címkére keresel](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Egy repo helyi másolása](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.hu.png)

Számos módja van a kód másolásának. Az egyik módja a repó tartalmának "klónozása" HTTPS, SSH vagy a GitHub CLI (Command Line Interface) használatával.

Nyisd meg a terminált, és klónozd a repót az alábbi módon:
`git clone https://github.com/ProjectURL`

A projekten való munkához válts a megfelelő mappára:
`cd ProjectURL`

A teljes projektet megnyithatod a [Codespaces](https://github.com/features/codespaces) segítségével, amely a GitHub beépített kódszerkesztője / felhőalapú fejlesztési környezete, vagy a [GitHub Desktop](https://desktop.github.com/) használatával.

Végül letöltheted a kódot egy tömörített mappában is.

### Néhány további érdekesség a GitHubról

Bármely nyilvános repót a GitHubon "csillagozhatsz", "figyelhetsz" vagy "forkolhatsz". A csillagozott repóidat a jobb felső legördülő menüben találod meg. Ez olyan, mint a könyvjelzőzés, csak kódokhoz.

A projekteknek van egy issue trackere, amely többnyire a GitHubon az "Issues" fül alatt található, hacsak máshol nincs feltüntetve. Itt az emberek a projekttel kapcsolatos problémákat vitatják meg. A Pull Requests fülön pedig az éppen folyamatban lévő változtatásokat vitatják meg és vizsgálják felül.

A projekteknek lehetnek fórumai, levelezőlistái vagy csevegőcsatornái, például Slack, Discord vagy IRC.

✅ Nézz körül az új GitHub repódban, és próbálj ki néhány dolgot, például a beállítások szerkesztését, információk hozzáadását a repóhoz, vagy egy projekt létrehozását (például egy Kanban táblát). Rengeteg mindent kipróbálhatsz!

---

## 🚀 Kihívás

Dolgozz együtt egy barátoddal egymás kódján. Hozzatok létre egy közös projektet, forkoljatok kódot, hozzatok létre ágakat, és egyesítsétek a változtatásokat.

## Utólagos kvíz
[Utólagos kvíz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)

## Áttekintés és önálló tanulás

Olvass többet a [nyílt forráskódú szoftverekhez való hozzájárulásról](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git puskázó](https://training.github.com/downloads/github-git-cheat-sheet/).

Gyakorolj, gyakorolj, gyakorolj. A GitHub remek tanulási útvonalakat kínál a [skills.github.com](https://skills.github.com) oldalon:

- [Első hét a GitHubon](https://skills.github.com/#first-week-on-github)

Itt haladóbb kurzusokat is találsz.

## Feladat

Teljesítsd az [Első hét a GitHubon kurzust](https://skills.github.com/#first-week-on-github).

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.