<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ea65b75e488aa33a3cc5cb1c6c3f047a",
  "translation_date": "2025-10-03T14:09:48+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "hu"
}
-->
# Bevezetés a GitHubhoz

Ez a lecke a GitHub alapjait tárgyalja, amely egy platform a kód tárolására és változtatások kezelésére.

![Bevezetés a GitHubhoz](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előzetes kvíz
[Előzetes kvíz](https://ff-quizzes.netlify.app)

## Bevezetés

Ebben a leckében az alábbiakat tárgyaljuk:

- a munkád nyomon követése a gépeden
- projektek közös munkája másokkal
- hogyan járulhatsz hozzá nyílt forráskódú szoftverekhez

### Előfeltételek

Mielőtt elkezdenéd, ellenőrizd, hogy telepítve van-e a Git. A terminálban írd be: 
`git --version`

Ha a Git nincs telepítve, [töltsd le a Gitet](https://git-scm.com/downloads). Ezután állítsd be a helyi Git profilodat a terminálban:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

Ellenőrizheted, hogy a Git már konfigurálva van-e, ha beírod:
`git config --list`

Szükséged lesz egy GitHub-fiókra, egy kódszerkesztőre (például Visual Studio Code), és meg kell nyitnod a terminált (vagy: parancssort).

Látogass el a [github.com](https://github.com/) oldalra, és hozz létre egy fiókot, ha még nincs, vagy jelentkezz be, és töltsd ki a profilodat. 

✅ A GitHub nem az egyetlen kódrepozitórium a világon; vannak mások is, de a GitHub a legismertebb.

### Előkészületek

Szükséged lesz egy mappára a helyi gépeden (laptop vagy PC) egy kódprojekttel, valamint egy nyilvános GitHub-repozitóriumra, amely példaként szolgál arra, hogyan járulhatsz hozzá mások projektjeihez.  

---

## Kódkezelés

Tegyük fel, hogy van egy helyi mappád egy kódprojekttel, és szeretnéd elkezdeni nyomon követni a haladásodat a git verziókezelő rendszer segítségével. Néhányan a git használatát úgy hasonlítják, mintha szerelmes levelet írnál a jövőbeli önmagadnak. Ha napokkal, hetekkel vagy hónapokkal később olvasod a commit üzeneteidet, képes leszel felidézni, miért hoztál egy döntést, vagy "visszavonni" egy változtatást - persze csak akkor, ha jó "commit üzeneteket" írsz.

### Feladat: Hozz létre egy repozitóriumot és commitold a kódot  

> Nézd meg a videót
> 
> [![Git és GitHub alapok videó](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)


1. **Repozitórium létrehozása a GitHubon**. A GitHub.com oldalon, a repozitóriumok fülön, vagy a jobb felső navigációs sávban keresd meg az **új repo** gombot.

   1. Adj nevet a repozitóriumodnak (mappának).
   1. Válaszd a **repozitórium létrehozása** lehetőséget.

1. **Navigálj a munkamappádhoz**. A terminálban válts arra a mappára (más néven könyvtárra), amelyet nyomon szeretnél követni. Írd be:

   ```bash
   cd [name of your folder]
   ```

1. **Git repozitórium inicializálása**. A projektedben írd be:

   ```bash
   git init
   ```

1. **Állapot ellenőrzése**. A repozitórium állapotának ellenőrzéséhez írd be:

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

   A `git status` parancs általában olyan információkat ad, mint például mely fájlok készek a _mentésre_ a repóba, vagy melyeken vannak olyan változtatások, amelyeket érdemes lehet megőrizni.

1. **Minden fájl hozzáadása nyomon követéshez**
   Ezt nevezik fájlok staging területre helyezésének/hozzáadásának.

   ```bash
   git add .
   ```

   A `git add` plusz `.` argumentum azt jelzi, hogy minden fájl és változtatás nyomon követésre kerül.

1. **Kiválasztott fájlok hozzáadása nyomon követéshez**

   ```bash
   git add [file or folder name]
   ```

   Ez lehetővé teszi, hogy csak kiválasztott fájlokat adj hozzá a staging területre, ha nem szeretnéd egyszerre az összes fájlt commitolni.

1. **Minden fájl unstagingelése**

   ```bash
   git reset
   ```

   Ez a parancs segít egyszerre unstagingelni az összes fájlt.

1. **Egy adott fájl unstagingelése**

   ```bash
   git reset [file or folder name]
   ```

   Ez a parancs segít csak egy adott fájlt unstagingelni, amelyet nem szeretnél a következő commitba belefoglalni.

1. **Munkád megőrzése**. Ezen a ponton hozzáadtad a fájlokat az úgynevezett _staging területre_. Ez egy hely, ahol a Git nyomon követi a fájljaidat. Ahhoz, hogy a változtatás végleges legyen, _commitolnod_ kell a fájlokat. Ehhez hozz létre egy _commitot_ a `git commit` paranccsal. A _commit_ egy mentési pontot képvisel a repó történetében. Írd be a következőt egy _commit_ létrehozásához:

   ```bash
   git commit -m "first commit"
   ```

   Ez commitolja az összes fájlodat, hozzáadva az "első commit" üzenetet. A jövőbeli commit üzeneteknél érdemes lesz részletesebb leírást adni, hogy közvetítsd, milyen típusú változtatást végeztél.

1. **Kapcsold össze a helyi Git repódat a GitHubbal**. Egy Git repó jó a gépeden, de egy ponton szeretnéd a fájljaidat valahol biztonságban tudni, és másokat is meghívni, hogy dolgozzanak veled a repón. Egy ilyen nagyszerű hely erre a GitHub. Ne feledd, már létrehoztunk egy repót a GitHubon, így csak össze kell kapcsolnunk a helyi Git repót a GitHubbal. A `git remote add` parancs pontosan ezt teszi. Írd be a következő parancsot:

   > Megjegyzés: mielőtt beírod a parancsot, menj a GitHub repó oldalára, hogy megtaláld a repozitórium URL-jét. Ezt fogod használni az alábbi parancsban. Cseréld ki ```https://github.com/username/repository_name.git```-et a GitHub URL-edre.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Ez létrehoz egy _távoli kapcsolatot_, vagyis egy "origin" nevű kapcsolatot, amely az általad korábban létrehozott GitHub repozitóriumra mutat.

1. **Helyi fájlok küldése a GitHubra**. Eddig létrehoztál egy _kapcsolatot_ a helyi repó és a GitHub repó között. Küldjük el ezeket a fájlokat a GitHubra a következő `git push` parancs segítségével:

   > Megjegyzés: az alapértelmezett branch neve eltérhet a ```main```-től.

   ```bash
   git push -u origin main
   ```

   Ez elküldi a commitjaidat a "main" branchben a GitHubra. Az `upstream` branch beállítása, beleértve a `-u` opciót a parancsban, kapcsolatot hoz létre a helyi branch és a távoli branch között, így a jövőben egyszerűen használhatod a git push vagy git pull parancsokat anélkül, hogy meg kellene adnod a branch nevét. A Git automatikusan az upstream branch-et fogja használni, és nem kell explicit módon megadnod a branch nevet a jövőbeli parancsokban.

2. **További változtatások hozzáadása**. Ha folytatni szeretnéd a változtatások végrehajtását és azok GitHubra történő feltöltését, csak a következő három parancsot kell használnod:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tipp: Érdemes lehet egy `.gitignore` fájlt is alkalmazni, hogy megakadályozd, hogy olyan fájlok, amelyeket nem szeretnél nyomon követni, megjelenjenek a GitHubon - például az a jegyzetfájl, amelyet ugyanabban a mappában tárolsz, de nincs helye egy nyilvános repozitóriumban. `.gitignore` fájl sablonokat találhatsz itt: [.gitignore templates](https://github.com/github/gitignore).

#### Commit üzenetek

Egy nagyszerű Git commit tárgysor a következő mondatot egészíti ki:
Ha alkalmazzuk, ez a commit <ide jön a tárgysorod>

A tárgyban használj felszólító, jelen idejű igét: "változtat" nem "változtatott" vagy "változtatások". 
Ahogy a tárgyban, a törzsben (opcionális) is használj felszólító, jelen idejű igét. A törzsnek tartalmaznia kell a változtatás motivációját, és kontrasztot kell állítania a korábbi viselkedéssel. A `miértet` magyarázod, nem a `hogyan`.

✅ Szánj néhány percet arra, hogy böngéssz a GitHubon. Találsz egy igazán nagyszerű commit üzenetet? Találsz egy igazán minimálisat? Szerinted milyen információk a legfontosabbak és leghasznosabbak egy commit üzenetben?

### Feladat: Együttműködés

A fő ok, amiért dolgokat feltöltünk a GitHubra, az az, hogy lehetővé tegyük más fejlesztőkkel való együttműködést.

## Projektek közös munkája másokkal

> Nézd meg a videót
>
> [![Git és GitHub alapok videó](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

A repozitóriumodban navigálj az `Insights > Community` menüpontra, hogy megnézd, hogyan viszonyul a projekted az ajánlott közösségi szabványokhoz.

   Íme néhány dolog, ami javíthatja a GitHub repódat:
   - **Leírás**. Adtál leírást a projektedhez?
   - **README**. Készítettél README-t? A GitHub útmutatást nyújt a [README írásához](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Hozzájárulási irányelvek**. Van a projektednek [hozzájárulási irányelve](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)? 
   - **Magatartási kódex**. Van [magatartási kódex](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)? 
   - **Licenc**. Talán a legfontosabb, van [licenc](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Ezek az erőforrások elősegítik az új csapattagok beilleszkedését. Ezek azok a dolgok, amelyeket az új hozzájárulók általában megnéznek, mielőtt a kódodat megvizsgálnák, hogy eldöntsék, a projekted megfelelő hely-e számukra, hogy idejükből áldozzanak rá.

✅ A README fájlok, bár időt igényelnek az elkészítésük, gyakran elhanyagoltak az elfoglalt karbantartók által. Találsz példát egy különösen leíró jellegű README-re? Megjegyzés: vannak [eszközök, amelyek segítenek jó README-ket készíteni](https://www.makeareadme.com/), amelyeket érdemes kipróbálni.

### Feladat: Kód összevonása

A hozzájárulási dokumentumok segítenek az embereknek hozzájárulni a projekthez. Elmagyarázzák, milyen típusú hozzájárulásokat keresel, és hogyan működik a folyamat. A hozzájárulóknak egy sor lépést kell követniük, hogy hozzájárulhassanak a GitHub repódhoz:

1. **A repód forkja**. Valószínűleg azt szeretnéd, hogy az emberek _forkolják_ a projektedet. A forkolás azt jelenti, hogy létrehoznak egy másolatot a repozitóriumodról a GitHub profiljukon.
1. **Klónozás**. Innen klónozzák a projektet a helyi gépükre. 
1. **Branch létrehozása**. Kérd meg őket, hogy hozzanak létre egy _branch_-et a munkájukhoz. 
1. **Változtatás egy területre koncentrálása**. Kérd meg a hozzájárulókat, hogy egyszerre egy dologra koncentrálják a hozzájárulásaikat - így nagyobb az esélye, hogy _össze tudod vonni_ a munkájukat. Képzeld el, hogy írnak egy hibajavítást, hozzáadnak egy új funkciót, és frissítenek több tesztet - mi van, ha csak 2-ből 3-at, vagy 1-ből 3 változtatást tudsz vagy akarsz megvalósítani?

✅ Képzelj el egy helyzetet, ahol a branch-ek különösen kritikusak a jó kód írásához és szállításához. Milyen felhasználási esetek jutnak eszedbe?

> Megjegyzés: légy te magad a változás, amit látni szeretnél a világban, és hozz létre branch-eket a saját munkádhoz is. Bármilyen commitot készítesz, az azon a branch-en lesz, amelyen éppen "ki vagy jelentkezve". Használd a `git status` parancsot, hogy lásd, melyik branch az.

Nézzük meg egy hozzájáruló munkafolyamatát. Tegyük fel, hogy a hozzájáruló már _forkolta_ és _klónozta_ a repót, így van egy Git repója, amely készen áll a munkára a helyi gépén:

1. **Branch létrehozása**. Használd a `git branch` parancsot egy branch létrehozásához, amely tartalmazza azokat a változtatásokat, amelyeket hozzájárulni szeretnél:

   ```bash
   git branch [branch-name]
   ```

1. **Váltás a munkabranch-re**. Válts az adott branch-re, és frissítsd a munkakönyvtárat a `git switch` paranccsal:

   ```bash
   git switch [branch-name]
   ```

1. **Munka elvégzése**. Ezen a ponton hozzáadhatod a változtatásaidat. Ne felejtsd el tájékoztatni a Gitet a következő parancsokkal:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Ügyelj arra, hogy jó nevet adj a commitodnak, a saját érdekedben, valamint annak a repó karbantartójának érdekében, akinek segítesz.

1. **Munkád összevonása a `main` branch-csel**. Egy ponton befejezed a munkát, és szeretnéd összevonni a munkádat a `main` branch-csel. A `main` branch időközben változhatott, ezért győződj meg róla, hogy először frissíted a legújabb verzióra a következő parancsokkal:

   ```bash
   git switch main
   git pull
   ```

   Ezen a ponton győződj meg róla, hogy minden _konfliktus_, olyan helyzetek, ahol a Git nem tudja könnyen _összevonni_ a változtatásokat, a munkabranch-edben történik. Ezért futtasd a következő parancsokat:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   A `git merge main` parancs behozza az összes változtatást a `main` branch-ből a branch-edbe. Remélhetőleg folytathatod a munkát. Ha nem, a VS Code megmutatja, hol van a Git _z
1. **Nyiss egy PR-t**. Következő lépésként nyiss egy PR-t. Ezt úgy teheted meg, hogy navigálsz a GitHubon a forkolt repóhoz. A GitHubon látni fogsz egy jelzést, amely megkérdezi, hogy szeretnél-e új PR-t létrehozni. Kattints rá, és egy felületre kerülsz, ahol módosíthatod a commit üzenet címét, és adhatsz neki egy megfelelőbb leírást. Most a forkolt repó karbantartója látni fogja ezt a PR-t, és _remélhetőleg_ értékelni fogja, majd _összevonja_ a PR-t. Mostantól te is hozzájáruló vagy, hurrá! :)

1. **Takarítás**. Jó gyakorlatnak számít, ha _kitakarítasz_ miután sikeresen összevonták a PR-t. Takarítsd ki mind a helyi branch-edet, mind azt a branch-et, amit GitHubra feltöltöttél. Először töröld helyben a következő parancs segítségével:

   ```bash
   git branch -d [branch-name]
   ```
  
   Ezután menj a GitHub oldalára a forkolt repóhoz, és távolítsd el a távoli branch-et, amit éppen feltöltöttél.

A `Pull request` kifejezés elsőre furcsának tűnhet, hiszen valójában a változtatásaidat szeretnéd feltölteni a projekthez. Azonban a karbantartónak (projekt tulajdonosának) vagy a core csapatnak meg kell fontolnia a változtatásaidat, mielőtt összevonják a projekt "main" branch-ével, tehát valójában egy döntést kérsz a karbantartótól a változtatásról.  

A pull request egy hely, ahol összehasonlíthatod és megvitathatod az adott branch által bevezetett különbségeket, véleményekkel, megjegyzésekkel, integrált tesztekkel és egyebekkel. Egy jó pull request nagyjából ugyanazokat a szabályokat követi, mint egy commit üzenet. Hivatkozhatsz egy problémára az issue trackerben, például ha a munkád megold egy problémát. Ezt úgy teheted meg, hogy egy `#` jelet írsz, amit a probléma száma követ. Például `#97`.

🤞Reméljük, hogy minden ellenőrzés sikeresen lezajlik, és a projekt tulajdonosa(i) összevonják a változtatásaidat a projektbe🤞

Frissítsd a jelenlegi helyi munkabranch-edet az összes új commit-tal, amely a GitHubon lévő megfelelő távoli branch-en található:

`git pull`

## Hogyan járulj hozzá nyílt forráskódú projektekhez

Először keress egy GitHub repót, amely érdekel, és amelyhez szeretnél hozzájárulni. A repó tartalmát le kell másolnod a gépedre.

✅ Jó módja annak, hogy 'kezdőbarát' repókat találj, ha [a 'good-first-issue' címkére keresel](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Repó másolása helyben](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.hu.png)

Számos módja van a kód másolásának. Az egyik módja, hogy "klónozod" a repó tartalmát HTTPS, SSH vagy a GitHub CLI (Command Line Interface) segítségével.

Nyisd meg a terminált, és klónozd a repót így:  
`git clone https://github.com/ProjectURL`

A projekten való munka érdekében lépj be a megfelelő mappába:  
`cd ProjectURL`

A teljes projektet megnyithatod [Codespaces](https://github.com/features/codespaces), a GitHub beépített kódszerkesztőjével / felhőalapú fejlesztési környezetével, vagy [GitHub Desktop](https://desktop.github.com/) segítségével is.

Végül letöltheted a kódot egy tömörített mappában.

### Néhány további érdekesség a GitHubról

Bármely nyilvános repót a GitHubon csillagozhatsz, követhetsz és/vagy "forkolhatsz". A csillagozott repóidat a jobb felső legördülő menüben találod. Ez olyan, mint a könyvjelzőzés, csak kódhoz.

A projekteknek van egy issue trackerük, többnyire a GitHubon az "Issues" fül alatt, hacsak másképp nincs jelezve, ahol az emberek a projekttel kapcsolatos problémákat vitatják meg. Az "Pull Requests" fül pedig az a hely, ahol az emberek a folyamatban lévő változtatásokat vitatják meg és véleményezik.

A projekteknek lehetnek fórumai, levelezőlistái vagy csevegőcsatornái, mint például Slack, Discord vagy IRC.

✅ Nézz körül az új GitHub repódban, és próbálj ki néhány dolgot, például a beállítások szerkesztését, információk hozzáadását a repóhoz, és egy projekt létrehozását (például egy Kanban táblát). Rengeteg dolgot tehetsz!

---

## 🚀 Kihívás

Dolgozz együtt egy barátoddal egymás kódján. Hozzatok létre közösen egy projektet, forkoljatok kódot, hozzatok létre branch-eket, és vonjátok össze a változtatásokat.

## Előadás utáni kvíz  
[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/en/)

## Áttekintés és önálló tanulás

Olvass többet a [nyílt forráskódú szoftverekhez való hozzájárulásról](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git segédlet](https://training.github.com/downloads/github-git-cheat-sheet/).

Gyakorolj, gyakorolj, gyakorolj. A GitHub remek tanulási útvonalakat kínál a [skills.github.com](https://skills.github.com) oldalon:

- [Első hét a GitHubon](https://skills.github.com/#first-week-on-github)

Itt további haladó kurzusokat is találsz.

## Feladat

Teljesítsd az [Első hét a GitHubon kurzust](https://skills.github.com/#first-week-on-github)

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.