<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "361249da70432ddfd4741c917d1a6f50",
  "translation_date": "2025-08-29T10:40:55+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "hu"
}
-->
# Bevezetés a GitHub-hoz

Ez a lecke a GitHub alapjait tárgyalja, amely egy platform a kód tárolására és változásainak kezelésére.

![Bevezetés a GitHub-hoz](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előzetes kvíz
[Előzetes kvíz](https://ff-quizzes.netlify.app)

## Bevezetés

Ebben a leckében az alábbiakat fogjuk áttekinteni:

- hogyan követheted nyomon a munkádat a gépeden
- hogyan dolgozhatsz együtt másokkal projekteken
- hogyan járulhatsz hozzá nyílt forráskódú szoftverekhez

### Előfeltételek

Mielőtt elkezdenéd, ellenőrizd, hogy a Git telepítve van-e. A terminálban írd be:  
`git --version`

Ha a Git nincs telepítve, [töltsd le a Git-et](https://git-scm.com/downloads). Ezután állítsd be a helyi Git profilodat a terminálban:
* `git config --global user.name "saját-neved"`
* `git config --global user.email "saját-email-címed"`

Ellenőrizheted, hogy a Git már konfigurálva van-e, ha beírod:
`git config --list`

Szükséged lesz egy GitHub-fiókra, egy kódszerkesztőre (például Visual Studio Code), és meg kell nyitnod a terminált (vagy: parancssort).

Látogass el a [github.com](https://github.com/) oldalra, és hozz létre egy fiókot, ha még nincs, vagy jelentkezz be, és töltsd ki a profilodat.

✅ A GitHub nem az egyetlen kódtárhely a világon; vannak mások is, de a GitHub a legismertebb.

### Felkészülés

Szükséged lesz egy mappára a helyi gépeden (laptop vagy PC) egy kódprojekttel, valamint egy nyilvános GitHub-tárhelyre, amely példaként szolgál arra, hogyan járulhatsz hozzá mások projektjeihez.

---

## Kódkezelés

Tegyük fel, hogy van egy helyi mappád egy kódprojekttel, és szeretnéd nyomon követni a haladásodat a git verziókezelő rendszer segítségével. Egyesek a git használatát ahhoz hasonlítják, mintha szerelmes levelet írnál a jövőbeli önmagadnak. Ha napokkal, hetekkel vagy hónapokkal később elolvasod a commit üzeneteidet, emlékezni fogsz arra, hogy miért hoztál egy adott döntést, vagy vissza tudsz vonni egy változtatást – feltéve, hogy jó "commit üzeneteket" írsz.

### Feladat: Hozz létre egy tárhelyet és commitold a kódot  

> Nézd meg a videót
> 
> [![Git és GitHub alapok videó](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Hozz létre egy tárhelyet a GitHub-on**. A GitHub.com-on, a tárhelyek fülön, vagy a jobb felső navigációs sávban keresd meg az **új tárhely** gombot.

   1. Adj nevet a tárhelyednek (mappádnak).
   1. Válaszd a **tárhely létrehozása** opciót.

1. **Navigálj a munkamappádhoz**. A terminálban válts arra a mappára (más néven könyvtárra), amelyet nyomon szeretnél követni. Írd be:

   ```bash
   cd [name of your folder]
   ```

1. **Inicializálj egy git tárhelyet**. A projektedben írd be:

   ```bash
   git init
   ```

1. **Ellenőrizd az állapotot**. A tárhely állapotának ellenőrzéséhez írd be:

   ```bash
   git status
   ```

   A kimenet valahogy így nézhet ki:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   A `git status` parancs általában olyan információkat ad, mint például mely fájlok állnak készen a tárhelyre való _mentésre_, vagy melyeken vannak olyan változások, amelyeket érdemes lehet rögzíteni.

1. **Adj hozzá minden fájlt a nyomon követéshez**  
   Ezt hívják fájlok stagingelésének / a staging területhez való hozzáadásának.

   ```bash
   git add .
   ```

   A `git add` és a `.` argumentum azt jelzi, hogy az összes fájlodat és változásodat nyomon követésre jelölöd.

1. **Válassz ki fájlokat a nyomon követéshez**

   ```bash
   git add [file or folder name]
   ```

   Ez lehetővé teszi, hogy csak kiválasztott fájlokat adj hozzá a staging területhez, ha nem akarod egyszerre az összes fájlt commitolni.

1. **Távolíts el minden fájlt a staging területről**

   ```bash
   git reset
   ```

   Ez a parancs segít egyszerre eltávolítani az összes fájlt a staging területről.

1. **Távolíts el egy adott fájlt a staging területről**

   ```bash
   git reset [file or folder name]
   ```

   Ez a parancs segít egyszerre csak egy adott fájlt eltávolítani, amelyet nem szeretnél a következő commitba belefoglalni.

1. **Rögzítsd a munkádat**. Ezen a ponton hozzáadtad a fájlokat az úgynevezett _staging területhez_. Ez egy hely, ahol a Git nyomon követi a fájljaidat. Ahhoz, hogy a változtatás végleges legyen, _commitot_ kell létrehoznod a `git commit` paranccsal. A _commit_ egy mentési pontot képvisel a tárhelyed történetében. Írd be a következőt egy _commit_ létrehozásához:

   ```bash
   git commit -m "first commit"
   ```

   Ez az összes fájlodat commitolja, a "first commit" üzenettel. A jövőbeli commit üzeneteknél érdemes részletesebb leírást adni, hogy pontosan közvetítsd, milyen típusú változtatást végeztél.

1. **Kapcsold össze a helyi Git tárhelyedet a GitHub-bal**. Egy Git tárhely a gépeden jó dolog, de előbb-utóbb szeretnéd a fájljaid biztonsági mentését máshol is elvégezni, és másokat is meghívni, hogy dolgozzanak veled a tárhelyeden. Egy ilyen nagyszerű hely a GitHub. Emlékezz, hogy már létrehoztunk egy tárhelyet a GitHub-on, így csak össze kell kapcsolnunk a helyi Git tárhelyet a GitHub-bal. A `git remote add` parancs pontosan ezt teszi. Írd be a következő parancsot:

   > Megjegyzés: Mielőtt beírod a parancsot, menj a GitHub tárhelyed oldalára, hogy megtaláld a tárhely URL-jét. Ezt fogod használni az alábbi parancsban. Cseréld ki az ```https://github.com/username/repository_name.git```-et a GitHub URL-edre.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Ez létrehoz egy _távoli kapcsolatot_, amely az "origin" névre hallgat, és a korábban létrehozott GitHub tárhelyre mutat.

1. **Küldd el a helyi fájlokat a GitHub-ra**. Eddig létrehoztál egy _kapcsolatot_ a helyi tárhely és a GitHub tárhely között. Küldjük el ezeket a fájlokat a GitHub-ra a következő `git push` paranccsal:

   > Megjegyzés: Az alapértelmezett branch neve eltérhet az ```main```-től.

   ```bash
   git push -u origin main
   ```

   Ez elküldi a "main" branch commitjait a GitHub-ra.

2. **További változtatások hozzáadása**. Ha folytatni szeretnéd a változtatások végrehajtását és azok GitHub-ra küldését, csak a következő három parancsot kell használnod:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tipp: Érdemes lehet egy `.gitignore` fájlt is használni, hogy megakadályozd, hogy olyan fájlok jelenjenek meg a GitHub-on, amelyeket nem szeretnél nyomon követni – például egy jegyzetfájl, amelyet ugyanabban a mappában tárolsz, de nincs helye egy nyilvános tárhelyen. `.gitignore` fájl sablonokat találhatsz itt: [.gitignore templates](https://github.com/github/gitignore).

#### Commit üzenetek

Egy nagyszerű Git commit tárgysor a következő mondatot egészíti ki:
Ha alkalmazzuk, ez a commit <a te tárgysorod itt>.

A tárgysorban használj felszólító, jelen idejű formát: "változtat" ne "változtatott" vagy "változtatások".  
Ahogy a tárgysorban, a törzsben (opcionális) is használj felszólító, jelen idejű formát. A törzsnek tartalmaznia kell a változtatás motivációját, és össze kell hasonlítania ezt az előző viselkedéssel. A `miért`-et magyarázod, nem a `hogyan`-t.

✅ Szánj néhány percet a GitHub böngészésére. Találsz egy igazán nagyszerű commit üzenetet? Találsz egy igazán minimálisat? Szerinted milyen információ a legfontosabb és leghasznosabb egy commit üzenetben?

### Feladat: Együttműködés

A fő ok, amiért a dolgokat a GitHub-ra helyeztük, az volt, hogy lehetővé tegyük az együttműködést más fejlesztőkkel.

## Együttműködés másokkal projekteken

> Nézd meg a videót
>
> [![Git és GitHub alapok videó](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

A tárhelyeden navigálj az `Insights > Community` menüponthoz, hogy lásd, hogyan viszonyul a projekted az ajánlott közösségi szabványokhoz.

   Íme néhány dolog, ami javíthatja a GitHub tárhelyedet:
   - **Leírás**. Adtál leírást a projektedhez?
   - **README**. Hozzáadtál egy README-t? A GitHub útmutatást nyújt a [README írásához](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Hozzájárulási irányelvek**. Van a projektednek [hozzájárulási irányelve](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
   - **Magatartási kódex**. Van [magatartási kódex](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)?
   - **Licenc**. Talán a legfontosabb, van [licenc](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Ezek az erőforrások mind hasznosak az új csapattagok beilleszkedéséhez. Ezek azok a dolgok, amelyeket az új hozzájárulók általában megnéznek, mielőtt még a kódodat átnéznék, hogy eldöntsék, a projekted megfelelő hely-e számukra.

✅ A README fájlok, bár időt igényelnek az elkészítésük, gyakran elhanyagoltak a túlterhelt karbantartók által. Találsz példát egy különösen részletesre? Megjegyzés: vannak [eszközök, amelyek segítenek jó README-ket készíteni](https://www.makeareadme.com/), amelyeket érdemes kipróbálni.

### Feladat: Kód egyesítése

A hozzájárulási dokumentumok segítenek az embereknek hozzájárulni a projekthez. Elmagyarázza, hogy milyen típusú hozzájárulásokat keresel, és hogyan működik a folyamat. A hozzájárulóknak egy sor lépést kell követniük, hogy hozzájárulhassanak a GitHub tárhelyedhez:

1. **Tárhely forkolása**. Valószínűleg azt szeretnéd, hogy az emberek _forkolják_ a projektedet. A forkolás azt jelenti, hogy létrehoznak egy másolatot a tárhelyedről a saját GitHub profiljukon.
1. **Klónozás**. Ezután klónozzák a projektet a helyi gépükre.
1. **Branch létrehozása**. Kérd meg őket, hogy hozzanak létre egy _brancht_ a munkájukhoz.
1. **Változtatások egy területre koncentrálása**. Kérd meg a hozzájárulókat, hogy egyszerre csak egy dologra koncentráljanak – így nagyobb az esélye, hogy a munkájukat _egyesíteni_ tudod. Képzeld el, hogy írnak egy hibajavítást, hozzáadnak egy új funkciót, és frissítenek néhány tesztet – mi van, ha csak 2-ből 3-at, vagy 1-ből 3-at szeretnél megvalósítani?

✅ Képzelj el egy helyzetet, ahol a branchek különösen kritikusak a jó kód írásához és szállításához. Milyen felhasználási esetek jutnak eszedbe?

> Megjegyzés: Légy te a változás, amit látni szeretnél a világban, és hozz létre brancheket a saját munkádhoz is. Bármilyen commitot készítesz, az azon a branchen lesz, amelyre éppen "ki vagy választva". Használd a `git status` parancsot, hogy lásd, melyik branch az.

Nézzük meg egy hozzájáruló munkafolyamatát. Tegyük fel, hogy a hozzájáruló már _forkolta_ és _klónozta_ a tárhelyet, így van egy Git tárhelye, amelyen dolgozhat a helyi gépén:

1. **Branch létrehozása**. Használd a `git branch` parancsot egy branch létrehozásához, amely tartalmazza a hozzájárulni kívánt változtatásokat:

   ```bash
   git branch [branch-name]
   ```

1. **Váltás a munkabranchre**. Válts az adott branchre, és frissítsd a munkakönyvtárat a `git switch` paranccsal:

   ```bash
   git switch [branch-name]
   ```

1. **Munka elvégzése**. Ezen a ponton hozzáadhatod a változtatásaidat. Ne felejtsd el a Gitnek jelezni a következő parancsokkal:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Ügyelj arra, hogy jó nevet adj a commitodnak, a saját érdekedben, valamint a tárhely karbantartójának érdekében, akinek segítesz.

1. **A munkád egyesítése a `main` branch-csel**. Egy bizonyos ponton befejezed a munkát, és szeretnéd egyesíteni a munkádat a `main` branch-csel. A `main` branch időközben változhatott, ezért győződj meg róla, hogy először frissíted a legújabb verzióra a következő parancsokkal:

   ```bash
   git switch main
   git pull
   ```

   Ezen a ponton győződj meg arról, hogy bármilyen _konfliktus_, olyan helyzet, ahol a Git nem tudja könnyen _egyesíteni_ a változtatásokat, a munkabranchben történik. Ezért futtasd a következő parancsokat:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Ez behozza az összes változtatást a `main` branchből a te branchedbe, és remélhetőleg folytathatod a munkát. Ha nem, a VS Code megmutatja, hol van a Git _zavarban_, és egyszerűen módosíthatod az érintett fájlokat, hogy megmondd, melyik tartalom a legpontosabb.

1. **Küldd el a munkádat a GitHub-ra**. A munkád GitHub-ra küldése két dolgot jelent. A branched feltöltését a tárhelyedre, majd egy PR (Pull Request) megnyitását.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   A fenti parancs létrehozza a branched a forkolt tárhelyeden.

1. **
A `Pull request` kifejezés elsőre furcsának tűnhet, hiszen valójában a változtatásaidat szeretnéd "feltolni" a projektbe. Azonban a karbantartónak (projekt tulajdonosa) vagy a magcsapatnak meg kell vizsgálnia a változtatásaidat, mielőtt azokat összevonják a projekt "main" ágával, így valójában egy döntést kérsz a karbantartótól a változtatásról.

A pull request egy hely, ahol összehasonlíthatod és megvitathatod az adott ágon bevezetett különbségeket véleményekkel, megjegyzésekkel, integrált tesztekkel és egyebekkel. Egy jó pull request nagyjából ugyanazokat a szabályokat követi, mint egy commit üzenet. Hivatkozhatsz egy problémára az issue trackerben, például ha a munkád megold egy problémát. Ezt úgy teheted meg, hogy `#` jelet írsz, majd a probléma számát, például `#97`.

🤞Reméljük, hogy minden ellenőrzés sikeresen lefut, és a projekt tulajdonosai beolvasszák a változtatásaidat a projektbe🤞

Frissítsd a jelenlegi helyi munkafiókodat az összes új commit-tal, amely a GitHub megfelelő távoli ágán található:

`git pull`

## Hogyan járulj hozzá nyílt forráskódú projektekhez

Először találj egy GitHub repót, amely érdekel, és amelyhez szeretnél hozzájárulni. A repó tartalmát le kell másolnod a gépedre.

✅ Egy jó módja annak, hogy "kezdőbarát" repókat találj, ha [a 'good-first-issue' címkére keresel](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Másolj egy repót helyileg](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.hu.png)

A kód másolásának több módja van. Az egyik módja, hogy "klónozod" a repó tartalmát HTTPS, SSH vagy a GitHub CLI (Command Line Interface) használatával.

Nyisd meg a terminált, és klónozd a repót így:
`git clone https://github.com/ProjectURL`

A projekten való munkához válts a megfelelő mappára:
`cd ProjectURL`

A teljes projektet megnyithatod [Codespaces](https://github.com/features/codespaces), a GitHub beépített kódszerkesztőjével / felhőalapú fejlesztési környezetével, vagy [GitHub Desktop](https://desktop.github.com/) használatával is.

Végül letöltheted a kódot egy tömörített mappában.

### Néhány további érdekesség a GitHubról

Bármely nyilvános repót csillagozhatsz, követhetsz, vagy "forkolhatsz" a GitHubon. A csillagozott repóidat a jobb felső legördülő menüben találod. Ez olyan, mint a könyvjelzőzés, csak kódhoz.

A projekteknek van egy issue trackere, általában a GitHubon az "Issues" fül alatt, hacsak másképp nincs jelezve, ahol az emberek a projekttel kapcsolatos problémákat vitatják meg. A Pull Requests fül pedig az a hely, ahol az emberek a folyamatban lévő változtatásokat vitatják meg és ellenőrzik.

A projekteknek lehetnek fórumai, levelezőlistái vagy csevegőcsatornái, például Slack, Discord vagy IRC.

✅ Nézz körül az új GitHub repódban, és próbálj ki néhány dolgot, például a beállítások szerkesztését, információk hozzáadását a repóhoz, és egy projekt létrehozását (például egy Kanban táblát). Rengeteg dolgot kipróbálhatsz!

---

## 🚀 Kihívás

Dolgozz együtt egy barátoddal egymás kódján. Hozzatok létre közösen egy projektet, forkoljatok kódot, hozzatok létre ágakat, és vonjátok össze a változtatásokat.

## Előadás utáni kvíz
[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/en/)

## Áttekintés és önálló tanulás

Olvass többet arról, hogyan járulhatsz hozzá [nyílt forráskódú szoftverekhez](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git segédlet](https://training.github.com/downloads/github-git-cheat-sheet/).

Gyakorolj, gyakorolj, gyakorolj. A GitHub remek tanulási útvonalakat kínál a [skills.github.com](https://skills.github.com) oldalon:

- [Első hét a GitHubon](https://skills.github.com/#first-week-on-github)

Itt találhatsz haladóbb kurzusokat is.

## Feladat

Teljesítsd [az Első hét a GitHubon kurzust](https://skills.github.com/#first-week-on-github).

---

**Felelősségkizárás**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével készült. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt a professzionális, emberi fordítás igénybevétele. Nem vállalunk felelősséget a fordítás használatából eredő félreértésekért vagy téves értelmezésekért.