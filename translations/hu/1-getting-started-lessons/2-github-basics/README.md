<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-24T20:05:03+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "hu"
}
-->
# Bevezetés a GitHub-hoz

Helló, leendő fejlesztő! 👋 Készen állsz, hogy csatlakozz a világ több millió kódolójához? Nagyon izgatott vagyok, hogy bemutathatom neked a GitHub-ot – gondolj rá úgy, mint a programozók közösségi média platformjára, ahol nem ebédképeket osztunk meg, hanem kódot, és együtt építünk fantasztikus dolgokat!

Ami teljesen lenyűgöz: minden alkalmazás a telefonodon, minden weboldal, amit meglátogatsz, és a legtöbb eszköz, amit megtanulsz használni, olyan fejlesztői csapatok által készült, akik GitHub-hoz hasonló platformokon működtek együtt. Az a zenei alkalmazás, amit szeretsz? Valaki, mint te, hozzájárult hozzá. Az a játék, amit nem tudsz letenni? Igen, valószínűleg GitHub együttműködéssel készült. És most TE fogod megtanulni, hogyan lehetsz része ennek a csodálatos közösségnek!

Tudom, hogy ez eleinte soknak tűnhet – emlékszem, amikor először néztem a GitHub oldalamat, és azt gondoltam: "Mi a csudát jelent ez az egész?" De a lényeg az, hogy minden egyes fejlesztő pontosan ott kezdte, ahol te most vagy. A lecke végére lesz saját GitHub tárolód (gondolj rá úgy, mint a személyes projektbemutatódra a felhőben), és tudni fogod, hogyan mentsd el a munkádat, oszd meg másokkal, sőt, hogyan járulj hozzá olyan projektekhez, amelyeket emberek milliói használnak.

Együtt fogjuk végigjárni ezt az utat, lépésről lépésre. Nincs rohanás, nincs nyomás – csak te, én, és néhány igazán klassz eszköz, amelyek hamarosan a legjobb barátaid lesznek!

![Bevezetés a GitHub-hoz](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.hu.png)
> Sketchnote készítette: [Tomomi Imura](https://twitter.com/girlie_mac)

## Előzetes kvíz
[Előzetes kvíz](https://ff-quizzes.netlify.app)

## Bevezetés

Mielőtt belevágnánk az igazán izgalmas dolgokba, készítsük fel a számítógépedet egy kis GitHub varázslatra! Gondolj erre úgy, mint amikor rendbe rakod a művészeti kellékeidet, mielőtt mesterművet alkotsz – ha a megfelelő eszközök készen állnak, minden sokkal gördülékenyebb és szórakoztatóbb lesz.

Végigvezetlek minden beállítási lépésen személyesen, és ígérem, hogy nem olyan ijesztő, mint amilyennek elsőre tűnik. Ha valami nem világos azonnal, az teljesen normális! Emlékszem, amikor először állítottam be a fejlesztői környezetemet, olyan érzésem volt, mintha ősi hieroglifákat próbálnék megfejteni. Minden egyes fejlesztő pontosan ott volt, ahol te most vagy, azon tűnődve, hogy jól csinálja-e. Spoiler: ha itt vagy és tanulsz, máris jó úton jársz! 🌟

Ebben a leckében a következőkről lesz szó:

- hogyan követheted a munkádat a gépeden
- hogyan dolgozhatsz együtt másokkal projekteken
- hogyan járulhatsz hozzá nyílt forráskódú szoftverekhez

### Előfeltételek

Készítsük fel a számítógépedet egy kis GitHub varázslatra! Ne aggódj – ezt a beállítást csak egyszer kell elvégezni, és utána készen állsz az egész kódolási utadra.

Rendben, kezdjük az alapokkal! Először meg kell néznünk, hogy a Git már ott van-e a számítógépeden. A Git gyakorlatilag olyan, mint egy szuper okos asszisztens, amely emlékszik minden egyes változtatásra, amit a kódodban végzel – sokkal jobb, mint kétségbeesetten nyomogatni a Ctrl+S-t minden másodpercben (mindannyian voltunk már ott!).

Nézzük meg, hogy a Git már telepítve van-e, ezzel a varázsparanccsal a terminálban:
`git --version`

Ha a Git még nincs ott, ne aggódj! Csak menj a [Git letöltése](https://git-scm.com/downloads) oldalra, és szerezd be. Miután telepítetted, megfelelően be kell mutatnunk a Git-et neked:

> 💡 **Első beállítás**: Ezek a parancsok megmondják a Git-nek, hogy ki vagy. Ez az információ minden commit-hoz csatolva lesz, amit készítesz, szóval válassz egy nevet és e-mail címet, amit szívesen megosztasz nyilvánosan.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

Ha szeretnéd ellenőrizni, hogy a Git már konfigurálva van-e, írd be:
```bash
git config --list
```

Szükséged lesz egy GitHub fiókra, egy kódszerkesztőre (például Visual Studio Code), és meg kell nyitnod a terminált (vagy: parancssort).

Látogass el a [github.com](https://github.com/) oldalra, és hozz létre egy fiókot, ha még nincs, vagy jelentkezz be, és töltsd ki a profilodat.

💡 **Modern tipp**: Fontold meg az [SSH kulcsok](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) beállítását vagy a [GitHub CLI](https://cli.github.com/) használatát a jelszó nélküli egyszerűbb hitelesítés érdekében.

✅ A GitHub nem az egyetlen kód tároló a világon; vannak mások is, de a GitHub a legismertebb.

### Előkészületek

Szükséged lesz egy mappára a helyi gépeden (laptop vagy PC) egy kódprojekttel, és egy nyilvános tárolóra a GitHub-on, amely példaként szolgál arra, hogyan járulhatsz hozzá mások projektjeihez.

### A kódod biztonságban tartása

Beszéljünk egy pillanatra a biztonságról – de ne aggódj, nem fogunk elárasztani ijesztő dolgokkal! Gondolj ezekre a biztonsági gyakorlatokra úgy, mint amikor bezárod az autódat vagy a házadat. Egyszerű szokások, amelyek természetessé válnak, és megvédik a kemény munkádat.

Megmutatjuk neked a modern, biztonságos módszereket a GitHub használatához már az elejétől kezdve. Így olyan jó szokásokat alakíthatsz ki, amelyek egész kódolási karriered során hasznosak lesznek.

Amikor a GitHub-bal dolgozol, fontos, hogy kövesd a biztonsági legjobb gyakorlatokat:

| Biztonsági terület | Legjobb gyakorlat | Miért fontos? |
|--------------------|-------------------|---------------|
| **Hitelesítés** | Használj SSH kulcsokat vagy személyes hozzáférési tokeneket | A jelszavak kevésbé biztonságosak, és fokozatosan megszűnnek |
| **Kétfaktoros hitelesítés** | Engedélyezd a 2FA-t a GitHub fiókodon | Extra védelmi réteget ad a fiókodhoz |
| **Tároló biztonság** | Soha ne commit-olj érzékeny információkat | API kulcsok és jelszavak soha ne legyenek nyilvános tárolókban |
| **Függőségkezelés** | Engedélyezd a Dependabot frissítéseket | Biztonságban és naprakészen tartja a függőségeidet |

> ⚠️ **Fontos biztonsági emlékeztető**: Soha ne commit-olj API kulcsokat, jelszavakat vagy más érzékeny információkat semmilyen tárolóba. Használj környezeti változókat és `.gitignore` fájlokat az érzékeny adatok védelmére.

**Modern hitelesítési beállítás:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Profi tipp**: Az SSH kulcsok megszüntetik a jelszavak ismételt beírásának szükségességét, és biztonságosabbak a hagyományos hitelesítési módszereknél.

---

## Kezeld a kódodat, mint egy profi

Na, ITT kezdődik az igazán izgalmas rész! 🎉 Megtanuljuk, hogyan kövesd és kezeld a kódodat, mint a profik, és őszintén, ez az egyik kedvenc témám, mert annyira megváltoztatja a dolgokat.

Képzeld el: írsz egy csodálatos történetet, és szeretnéd nyomon követni minden vázlatot, minden zseniális szerkesztést, és minden "várj, ez zseniális!" pillanatot. Pontosan ezt teszi a Git a kódoddal! Olyan, mintha lenne egy hihetetlen időutazó jegyzetfüzeted, amely MINDENRE emlékszik – minden billentyűleütésre, minden változtatásra, minden "upsz, ez mindent tönkretett" pillanatra, amit azonnal visszavonhatsz.

Őszinte leszek – ez eleinte ijesztőnek tűnhet. Amikor elkezdtem, azt gondoltam: "Miért nem menthetem el egyszerűen a fájljaimat, mint normálisan?" De hidd el nekem: amint a Git összeáll neked (és össze fog!), lesz egy olyan "aha" pillanatod, amikor azt gondolod: "Hogy tudtam valaha Git nélkül kódolni?" Olyan, mintha rájönnél, hogy tudsz repülni, miközben eddig mindenhová gyalog mentél!

Tegyük fel, hogy van egy mappád helyben egy kódprojekttel, és szeretnéd elkezdeni nyomon követni a haladásodat a git – a verziókezelő rendszer – segítségével. Néhányan a git használatát úgy hasonlítják, mint egy szerelmes levelet írni a jövőbeli önmagadnak. Ha jó "commit üzeneteket" írsz, napokkal, hetekkel vagy hónapokkal később vissza tudsz emlékezni, miért hoztál egy adott döntést, vagy "visszagörgetheted" a változtatásokat.

### Feladat: Hozd létre az első tárolódat!

> 🎯 **Küldetésed (és nagyon izgatott vagyok miattad!)**: Együtt létrehozzuk az első GitHub tárolódat! Mire itt végzünk, lesz egy saját kis sarkod az interneten, ahol a kódod él, és elkészíted az első "commit"-odat (ez a fejlesztői nyelvben azt jelenti, hogy nagyon okosan mented el a munkádat).
>
> Ez őszintén egy különleges pillanat – hivatalosan csatlakozol a fejlesztők globális közösségéhez! Még mindig emlékszem az izgalomra, amikor létrehoztam az első tárolómat, és azt gondoltam: "Wow, tényleg csinálom ezt!"

Lépésről lépésre végigvezetlek ezen a kalandon. Szánj időt minden részre – nincs díj a sietségért, és ígérem, hogy minden egyes lépés érthető lesz. Ne feledd, minden kódolási szupersztár, akit csodálsz, egyszer ott ült, ahol te most, és az első tárolóját készítette. Milyen menő ez?

> Nézd meg a videót
> 
> [![Git és GitHub alapok videó](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Csináljuk együtt:**

1. **Hozd létre a tárolódat a GitHub-on**. Menj a GitHub.com-ra, és keresd meg azt a világos zöld **Új** gombot (vagy a **+** jelet a jobb felső sarokban). Kattints rá, és válaszd az **Új tároló** lehetőséget.

   Íme, mit kell tenned:
   1. Adj nevet a tárolódnak – legyen valami, ami jelentőséggel bír számodra!
   1. Adj hozzá leírást, ha szeretnéd (ez segít másoknak megérteni, miről szól a projekted)
   1. Döntsd el, hogy nyilvános (mindenki láthatja) vagy privát (csak neked szól) legyen
   1. Javaslom, hogy jelöld be a jelölőnégyzetet egy README fájl hozzáadásához – ez olyan, mint a projekted kezdőlapja
   1. Kattints a **Tároló létrehozása** gombra, és ünnepelj – most hoztad létre az első tárolódat! 🎉

2. **Navigálj a projektmappádhoz**. Most nyissuk meg a terminált (ne aggódj, nem olyan ijesztő, mint amilyennek látszik!). Meg kell mondanunk a számítógépednek, hol vannak a projektfájljaid. Írd be ezt a parancsot:

   ```bash
   cd [name of your folder]
   ```

   **Mit csinálunk itt:**
   - Alapvetően azt mondjuk a számítógépnek: "Hé, vigyél a projektmappámhoz"
   - Ez olyan, mintha megnyitnál egy konkrét mappát az asztalon, de szöveges parancsokkal tesszük
   - Cseréld ki a `[mappád neve]` részt a projektmappád tényleges nevére

3. **Alakítsd a mappádat Git tárolóvá**. Itt történik a varázslat! Írd be:

   ```bash
   git init
   ```

   **Ez történt (elég menő dolgok!):**
   - A Git létrehozott egy rejtett `.git` mappát a projektedben – nem fogod látni, de ott van!
   - A szokásos mappád most egy "tároló", amely nyomon tudja követni minden változtatásodat
   - Gondolj rá úgy, mintha szuperképességeket adnál a mappádnak, hogy mindenre emlékezzen

4. **Ellenőrizd, mi történik**. Nézzük meg, mit gondol a Git a projektedről jelenleg:

   ```bash
   git status
   ```

   **Értsd meg, mit mond a Git:**
   
   Lehet, hogy valami ilyesmit látsz:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Ne pánikolj! Ez azt jelenti:**
   - A **piros** fájlok olyan fájlok, amelyek változtak, de még nem állnak készen a mentésre
   - A **zöld** fájlok (amikor látod őket) készen állnak a mentésre
   - A Git segítőkész, és pontosan megmondja, mit tehetsz legközelebb

   > 💡 **Profi tipp**: A `git status` parancs a legjobb barátod! Használd, amikor csak zavarban vagy, hogy mi történik. Olyan, mintha megkérdeznéd a Git-et: "Hé, mi a helyzet most?"

5. **Készítsd elő a fájlokat a mentésre** (ezt hívják "staging"-nek):

   ```bash
   git add .
   ```

   **Ezt tettük:**
   - Azt mondtuk a Git-nek: "Hé, szeretném, ha MINDEN fájlomat beletennéd a következő mentésbe"
   - A `.` olyan, mintha azt mondanád: "minden ebben a mappában"
   - Most a fájljaid "staged" állapotban vannak, készen a következő lépésre

   **Szelektívebb szeretnél lenni?** Csak konkrét fájlokat is hozzáadhatsz:

   ```bash
   git add [file or folder name]
   ```

   **Miért lehet erre szükséged?**
   - Néha szeretnéd az összefüggő változtatásokat együtt menteni
   - Segít logikus egységekbe szervezni a munkádat
   - Könnyebbé teszi megérteni, mi változott és mikor

   **Meggondoltad magad?** Semmi gond!
- Létrehoztunk egy kapcsolatot a helyi projekted és a GitHub-tárhelyed között  
- Az "Origin" csak egy becenév a GitHub-tárhelyed számára – olyan, mintha egy kontaktot adnál hozzá a telefonodhoz  
- Most a helyi Git tudja, hova küldje a kódodat, amikor készen állsz megosztani azt  

💡 **Egyszerűbb módszer**: Ha telepítve van a GitHub CLI, ezt egyetlen paranccsal megteheted:  
   ```bash
   gh repo create my-repo --public --push --source=.
   ```
  
8. **Küldd el a kódodat a GitHub-ra** (a nagy pillanat!):  

   ```bash
   git push -u origin main
   ```
  
**🚀 Ez az! Feltöltöd a kódodat a GitHub-ra!**  

**Mi történik:**  
- A commitjaid a számítógépedről a GitHub-ra utaznak  
- A `-u` kapcsoló állandó kapcsolatot hoz létre, így a jövőbeli push-ok egyszerűbbek lesznek  
- A "main" az elsődleges branch neve (mint a fő mappa)  
- Ezután a jövőbeli feltöltésekhez elég lesz csak a `git push` parancsot beírni!  

💡 **Gyors megjegyzés**: Ha a branch-ed neve más (például "master"), használd azt a nevet. Ellenőrizheted a `git branch --show-current` paranccsal.  

9. **Az új napi kódolási ritmusod** (itt kezd igazán izgalmassá válni!):  

Mostantól, amikor változtatásokat végzel a projekteden, egy egyszerű háromlépéses folyamatot követsz:  

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```
  
**Ez lesz a kódolási szívdobbanásod:**  
- Végezz néhány fantasztikus változtatást a kódodon ✨  
- Állítsd be őket a `git add` paranccsal ("Hé Git, figyelj ezekre a változtatásokra!")  
- Mentsd el őket a `git commit` paranccsal és egy leíró üzenettel (a jövőbeli éned hálás lesz érte!)  
- Oszd meg őket a világgal a `git push` segítségével 🚀  
- Ismételd meg – komolyan, ez olyan természetessé válik, mint a lélegzés!  

Imádom ezt a munkafolyamatot, mert olyan, mintha több mentési pontod lenne egy videojátékban. Végeztél egy változtatást, amit szeretsz? Commitáld! Szeretnél valami kockázatosat kipróbálni? Semmi gond – mindig visszatérhetsz az utolsó commitodhoz, ha valami félresikerül!  

> 💡 **Tipp**: Érdemes lehet egy `.gitignore` fájlt is használni, hogy megakadályozd, hogy olyan fájlok kerüljenek fel a GitHub-ra, amelyeket nem akarsz követni – például egy jegyzetfájl, amit ugyanabban a mappában tárolsz, de nincs helye egy nyilvános tárhelyen. `.gitignore` fájl sablonokat találhatsz itt: [.gitignore templates](https://github.com/github/gitignore) vagy készíthetsz egyet a [gitignore.io](https://www.toptal.com/developers/gitignore) segítségével.  

#### Modern Git munkafolyamatok  

Fontold meg ezeknek a modern gyakorlatoknak az alkalmazását:  

- **Konvencionális commitok**: Használj szabványos commit üzenet formátumot, mint például `feat:`, `fix:`, `docs:` stb. További információ: [conventionalcommits.org](https://www.conventionalcommits.org/)  
- **Atomikus commitok**: Minden commit egyetlen logikai változtatást képviseljen  
- **Gyakori commitok**: Commitálj gyakran leíró üzenetekkel, ahelyett hogy ritkán, nagy commitokat készítenél  

#### Commit üzenetek  

Egy nagyszerű Git commit tárgysor kiegészíti a következő mondatot:  
Ha alkalmazzuk, ez a commit <a te tárgysorod itt>  

A tárgyban használj felszólító, jelen idejű formát: "változtat" ne "változtatott" vagy "változtatások".  
Ahogy a tárgyban, a törzsben (opcionális) is használj felszólító, jelen idejű formát. A törzsnek tartalmaznia kell a változtatás motivációját, és össze kell hasonlítania ezt a korábbi viselkedéssel. A `miért`-et magyarázod, nem a `hogyan`-t.  

✅ Szánj néhány percet arra, hogy körülnézz a GitHub-on. Találsz egy igazán nagyszerű commit üzenetet? Találsz egy igazán minimálisat? Szerinted milyen információk a legfontosabbak és leghasznosabbak egy commit üzenetben?  

## Másokkal való munka (A szórakoztató rész!)  

Kapcsolj rá, mert ITT válik a GitHub igazán varázslatossá! 🪄 Már elsajátítottad a saját kódod kezelését, de most belemerülünk az abszolút kedvenc részembe – együttműködés fantasztikus emberekkel a világ minden tájáról.  

Képzeld el: holnap reggel felébredsz, és látod, hogy valaki Tokióban javította a kódodat, amíg aludtál. Aztán valaki Berlinben kijavít egy hibát, amin már régóta dolgozol. Délutánra egy São Paulo-i fejlesztő hozzáad egy funkciót, amire sosem gondoltál volna. Ez nem tudományos fantasztikum – ez csak egy átlagos kedd a GitHub univerzumban!  

Ami igazán izgat, az az, hogy az együttműködési készségek, amiket most megtanulsz? Ezek PONTOSAN ugyanazok a munkafolyamatok, amelyeket a Google, a Microsoft és a kedvenc startupjaid csapatai használnak minden egyes nap. Nem csak egy menő eszközt tanulsz meg – megtanulod azt a titkos nyelvet, amely lehetővé teszi, hogy az egész szoftvervilág együtt dolgozzon.  

Komolyan, amint megtapasztalod azt az érzést, amikor valaki elfogadja az első pull request-edet, megérted, miért válnak a fejlesztők olyan szenvedélyessé az open source iránt. Olyan, mintha a világ legnagyobb, legkreatívabb csapatprojektjének lennél a része!  

> Nézd meg a videót  
>  
> [![Git és GitHub alapok videó](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)  

A fő ok, amiért dolgokat teszünk fel a GitHub-ra, az az, hogy lehetővé tegyük az együttműködést más fejlesztőkkel.  

A tárhelyeden navigálj az `Insights > Community` menüpontra, hogy megnézd, hogyan viszonyul a projekted az ajánlott közösségi szabványokhoz.  

Szeretnéd, hogy a tárhelyed professzionálisnak és barátságosnak tűnjön? Lépj a tárhelyedre, és kattints az `Insights > Community` menüpontra. Ez a remek funkció megmutatja, hogyan viszonyul a projekted ahhoz, amit a GitHub közösség "jó tárhely gyakorlatoknak" tart.  

> 🎯 **Tedd ragyogóvá a projektedet**: Egy jól szervezett tárhely jó dokumentációval olyan, mint egy tiszta, barátságos üzlethelyiség. Azt mutatja, hogy törődsz a munkáddal, és másokat is arra ösztönöz, hogy hozzájáruljanak!  

**Ez teszi nagyszerűvé a tárhelyet:**  

| Mit adj hozzá | Miért fontos | Mit tesz érted |
|---------------|--------------|----------------|
| **Leírás** | Az első benyomás számít! | Az emberek azonnal tudják, mit csinál a projekted |
| **README** | A projekted kezdőlapja | Mint egy barátságos idegenvezető az új látogatók számára |
| **Hozzájárulási irányelvek** | Megmutatja, hogy szívesen fogadsz segítséget | Az emberek pontosan tudják, hogyan segíthetnek neked |
| **Magatartási kódex** | Barátságos légkört teremt | Mindenki szívesen vesz részt |
| **Licenc** | Jogi tisztázás | Mások tudják, hogyan használhatják a kódodat |
| **Biztonsági irányelv** | Megmutatja, hogy felelősségteljes vagy | Professzionális gyakorlatokat mutat |

> 💡 **Profi tipp**: A GitHub sablonokat biztosít ezekhez a fájlokhoz. Új tárhely létrehozásakor jelöld be a négyzeteket, hogy automatikusan generálja ezeket a fájlokat.  

**Modern GitHub funkciók felfedezése:**  

🤖 **Automatizálás & CI/CD:**  
- **GitHub Actions** automatikus teszteléshez és telepítéshez  
- **Dependabot** automatikus függőségfrissítésekhez  

💬 **Közösség & Projektmenedzsment:**  
- **GitHub Discussions** közösségi beszélgetésekhez, amelyek túlmutatnak az issue-ken  
- **GitHub Projects** kanban-stílusú projektmenedzsmenthez  
- **Branch védelmi szabályok** a kódminőségi szabványok betartatásához  

Mindezek az erőforrások hasznosak lesznek az új csapattagok beillesztésében. És ezek általában azok a dolgok, amelyeket az új hozzájárulók megnéznek, mielőtt még a kódodat megnéznék, hogy eldöntsék, a projekted megfelelő hely-e számukra, hogy idejükbe fektessenek.  

✅ A README fájlok, bár időt igényelnek az elkészítésük, gyakran elhanyagoltak az elfoglalt karbantartók által. Találsz példát egy különösen leíró README fájlra? Megjegyzés: vannak [eszközök, amelyek segítenek jó README fájlokat készíteni](https://www.makeareadme.com/), amelyeket érdemes kipróbálni.  

### Feladat: Kód összevonása  

A hozzájárulási dokumentumok segítenek az embereknek hozzájárulni a projekthez. Elmagyarázza, milyen típusú hozzájárulásokat keresel, és hogyan működik a folyamat. A hozzájárulóknak egy sor lépést kell követniük, hogy hozzájárulhassanak a GitHub tárhelyedhez:  

1. **A tárhelyed fork-olása** Valószínűleg azt szeretnéd, hogy az emberek _fork-olják_ a projektedet. A fork-olás azt jelenti, hogy létrehoznak egy másolatot a tárhelyedről a GitHub profiljukon.  
1. **Klónozás**. Innen klónozzák a projektet a helyi gépükre.  
1. **Branch létrehozása**. Szeretnéd, ha létrehoznának egy _branch-et_ a munkájukhoz.  
1. **Változtatás egy területre koncentrálása**. Kérd meg a hozzájárulókat, hogy koncentrálják a hozzájárulásaikat egy dologra egyszerre – így nagyobb az esélye, hogy _össze tudod vonni_ a munkájukat. Képzeld el, hogy írnak egy hibajavítást, hozzáadnak egy új funkciót, és frissítenek több tesztet – mi van, ha csak 2-ből 3-at, vagy 1-ből 3 változtatást tudsz vagy akarsz megvalósítani?  

✅ Képzelj el egy helyzetet, ahol a branch-ek különösen kritikusak a jó kód írásához és szállításához. Milyen felhasználási esetek jutnak eszedbe?  

> Megjegyzés, légy a változás, amit látni szeretnél a világban, és hozz létre branch-eket a saját munkádhoz is. Bármilyen commitot készítesz, azon a branch-en készül, amelyre éppen "ki vagy jelentkezve". Használd a `git status` parancsot, hogy lásd, melyik branch az.  

Nézzük át egy hozzájáruló munkafolyamatát. Tegyük fel, hogy a hozzájáruló már _fork-olta_ és _klónozta_ a tárhelyet, így van egy Git repo-ja, amely készen áll a munkára a helyi gépén:  

1. **Branch létrehozása**. Használd a `git branch` parancsot, hogy létrehozz egy branch-et, amely tartalmazza a hozzájárulni kívánt változtatásokat:  

   ```bash
   git branch [branch-name]
   ```
  
   > 💡 **Modern megközelítés**: Egyetlen paranccsal létrehozhatod és válthatsz az új branch-re:  
   ```bash
   git switch -c [branch-name]
   ```
  
1. **Váltás a munkabranch-re**. Válts az adott branch-re, és frissítsd a munkakönyvtárat a `git switch` paranccsal:  

   ```bash
   git switch [branch-name]
   ```
  
   > 💡 **Modern megjegyzés**: A `git switch` a modern helyettesítője a `git checkout`-nak, amikor branch-eket váltasz. Érthetőbb és biztonságosabb kezdők számára.  

1. **Munka elvégzése**. Ezen a ponton hozzáadhatod a változtatásaidat. Ne felejtsd el megmondani a Git-nek a következő parancsokkal:  

   ```bash
   git add .
   git commit -m "my changes"
   ```
  
   > ⚠️ **Commit üzenet minősége**: Győződj meg róla, hogy jó nevet adsz a commitodnak, mind a saját érdekedben, mind annak a karbantartónak, akinek segítesz a tárhelyen. Légy konkrét arról, hogy mit változtattál!  

1. **A munkád összevonása a `main` branch-csel**. Egy bizonyos ponton befejezed a munkát, és szeretnéd összevonni a munkádat a `main` branch-csel. Lehet, hogy közben a `main` branch megváltozott, ezért először frissítsd a legújabb verzióra a következő parancsokkal:  

   ```bash
   git switch main
   git pull
   ```
  
   Ezen a ponton győződj meg róla, hogy minden _konfliktus_, olyan helyzetek, amikor a Git nem tudja könnyen _összevonni_ a változtatásokat, a munkabranch-edben történik. Ezért futtasd a következő parancsokat:  

   ```bash
   git switch [branch_name]
   git merge main
   ```
  
   A `git merge main` parancs behozza az összes változtatást a `main` branch-ből a te branch-edbe. Remélhetőleg folytathatod a munkát. Ha nem, a VS Code megmutatja, hol van a Git _összezavarodva_, és csak módosítanod kell az érintett fájlokat, hogy megmondd, melyik tartalom a legpontosabb.  

   💡 **Modern alternatíva**: Fontold meg a `git rebase` használatát a tisztább történet érdekében:  
   ```bash
   git rebase main
   ```
  
   Ez a commitjaidat a legújabb main branch tetejére helyezi, lineáris történetet hozva létre.  

1. **Küldd el a munkádat a GitHub-ra**. A munkád GitHub-ra küldése két dolgot jelent. A branch-ed feltöltése a tárhelyedre, majd egy PR, Pull Request megnyitása.  

   ```bash
   git push --set-upstream origin [branch-name]
   ```
  
   A fenti parancs létrehozza a branch-et a fork-olt tárhelyeden.  

1. **PR megnyitása**. Ezután meg kell nyitnod egy PR-t. Ezt úgy teheted meg, hogy navigálsz a fork-olt tárhelyre a GitHub-on. Látni fogsz egy jelzést a GitHub-on, amely megkérdezi, hogy szeretnél-e új PR-t létrehozni, rákattintasz, és egy felületre kerülsz, ahol megváltoztathatod a commit üzenet címét, és megfelelőbb leírást adhatsz neki. Most a tárhely karbantartója, akitől fork-oltál, látni fogja ezt a PR-t, és _ujjakat
🤞Reméljük, hogy minden ellenőrzés sikeres lesz, és a projekt tulajdonosai beolvassák a változtatásaidat a projektbe🤞

Frissítsd a helyi munkafiókodat az összes új commit-tal a GitHub megfelelő távoli ágáról:

`git pull`

## Hozzájárulás nyílt forráskódhoz (A lehetőség, hogy hatással legyél!)

Készen állsz valamire, ami teljesen lenyűgöz? 🤯 Beszéljünk a nyílt forráskódú projektekhez való hozzájárulásról – már a gondolattól is libabőrös leszek, hogy megoszthatom ezt veled!

Ez az esélyed, hogy valami igazán különleges részévé válj. Képzeld el, hogy javítasz azokon az eszközökön, amelyeket fejlesztők milliói használnak nap mint nap, vagy kijavítasz egy hibát egy alkalmazásban, amit a barátaid imádnak. Ez nem csak álom – pontosan erről szól a nyílt forráskódú hozzájárulás!

Ami minden alkalommal libabőrt okoz, amikor erre gondolok: minden egyes eszköz, amivel tanulsz – a kódszerkesztőd, a keretrendszerek, amelyeket felfedezünk, még az a böngésző is, amiben ezt olvasod – valaki pontosan olyan ember első hozzájárulásával kezdődött, mint te. Az a zseniális fejlesztő, aki megalkotta a kedvenc VS Code bővítményedet? Ő is egyszer kezdő volt, aki remegő kézzel kattintott a "pull request létrehozása" gombra, pont úgy, ahogy te is hamarosan.

És itt jön a legszebb rész: a nyílt forráskódú közösség olyan, mint az internet legnagyobb csoportos ölelése. A legtöbb projekt aktívan keresi az új tagokat, és "good first issue" címkével ellátott problémákat tart fenn kifejezetten olyan emberek számára, mint te! A karbantartók őszintén izgatottak lesznek, amikor új hozzájárulókat látnak, mert emlékeznek a saját első lépéseikre.

Nem csak kódolni tanulsz itt – arra készülsz, hogy csatlakozz egy globális építők családjához, akik minden nap arra gondolnak: "Hogyan tehetjük egy kicsit jobbá a digitális világot?" Üdv a klubban! 🌟

Először találjunk egy GitHub-on lévő tárolót (vagy **repo**), amely érdekel téged, és amelyhez szeretnél változtatást hozzáadni. Érdemes a tartalmát a gépedre másolni.

✅ Egy jó módja annak, hogy 'kezdőbarát' tárolókat találj, ha [a 'good-first-issue' címkére keresel](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Tároló másolása helyileg](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.hu.png)

Számos módja van a kód másolásának. Az egyik módja a tároló tartalmának "klónozása" HTTPS, SSH vagy a GitHub CLI (Command Line Interface) használatával.

Nyisd meg a terminált, és klónozd a tárolót így:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

A projekten való munka érdekében válts a megfelelő mappára:
`cd ProjectURL`

Az egész projektet megnyithatod az alábbi módokon is:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - GitHub felhőalapú fejlesztési környezete VS Code-dal a böngészőben
- **[GitHub Desktop](https://desktop.github.com/)** - Egy GUI alkalmazás Git műveletekhez  
- **[GitHub.dev](https://github.dev)** - Nyomd meg a `.` gombot bármely GitHub tárolón, hogy megnyisd a VS Code-ot a böngészőben
- **VS Code** a GitHub Pull Requests bővítménnyel

Végül letöltheted a kódot egy tömörített mappában.

### Néhány további érdekesség a GitHub-ról

Bármely nyilvános GitHub tárolót csillagozhatsz, figyelhetsz és/vagy "forkolhatsz". A csillagozott tárolóidat a jobb felső legördülő menüben találod. Ez olyan, mint a könyvjelzőzés, csak kódhoz.

A projekteknek van egy hibakövetője, amely többnyire a GitHub-on, az "Issues" fülön található, hacsak másként nem jelezték, ahol az emberek a projekttel kapcsolatos problémákat vitatják meg. A Pull Requests fülön pedig az emberek a folyamatban lévő változtatásokat vitatják meg és értékelik.

A projekteknek lehetnek fórumai, levelezőlistái vagy csevegőcsatornái, mint például Slack, Discord vagy IRC.

🔧 **Modern GitHub funkciók**:
- **GitHub Discussions** - Beépített fórum közösségi beszélgetésekhez
- **GitHub Sponsors** - Karbantartók pénzügyi támogatása  
- **Security tab** - Sérülékenységi jelentések és biztonsági tanácsok
- **Actions tab** - Automatizált munkafolyamatok és CI/CD csatornák megtekintése
- **Insights tab** - Elemzések a hozzájárulókról, commitokról és a projekt állapotáról
- **Projects tab** - GitHub beépített projektmenedzsment eszközei

✅ Nézz körül az új GitHub tárolódban, és próbálj ki néhány dolgot, például beállítások szerkesztése, információ hozzáadása a tárolóhoz, projekt létrehozása (például egy Kanban tábla), és GitHub Actions beállítása automatizáláshoz. Rengeteg mindent tehetsz!

---

## 🚀 Kihívás 

Rendben, itt az idő, hogy próbára tedd az új GitHub szuperképességeidet! 🚀 Itt egy kihívás, ami mindent a helyére tesz a legkielégítőbb módon:

Fogj egy barátot (vagy azt a családtagot, aki mindig kérdezi, hogy mit csinálsz ezzel a "számítógépes dologgal"), és induljatok közös kódolási kalandra! Itt történik az igazi varázslat – hozzatok létre egy projektet, hagyd, hogy forkolja, készítsetek néhány ágat, és egyesítsétek a változtatásokat, mint a profik, akikévé váltok.

Nem fogok hazudni – valószínűleg nevetni fogtok valamikor (különösen, amikor mindketten megpróbáljátok ugyanazt a sort megváltoztatni), talán megvakartok néhány fejet zavartságotokban, de biztosan lesznek azok a csodálatos "aha!" pillanatok, amelyek miatt megéri a tanulás. Ráadásul van valami különleges abban, hogy megosztod az első sikeres egyesítést valaki mással – ez olyan, mint egy apró ünneplés arról, hogy milyen messzire jutottál!

Még nincs kódoló társad? Semmi gond! A GitHub közösség tele van hihetetlenül barátságos emberekkel, akik emlékeznek, milyen volt újnak lenni. Keress olyan tárolókat, amelyek "good first issue" címkével vannak ellátva – ezek alapvetően azt mondják: "Hé, kezdők, gyertek tanulni velünk!" Mennyire klassz ez?

## Előadás utáni kvíz
[Előadás utáni kvíz](https://ff-quizzes.netlify.app/web/en/)

## Áttekintés és folytasd a tanulást

Hűha! 🎉 Nézd meg magad – épp most hódítottad meg a GitHub alapjait, mint egy igazi bajnok! Ha úgy érzed, hogy az agyad kicsit tele van, az teljesen normális, és őszintén szólva jó jel. Épp most tanultál meg olyan eszközöket, amelyekkel nekem hetekbe telt kényelmesen bánni, amikor elkezdtem.

A Git és a GitHub hihetetlenül erőteljesek (komolyan, nagyon erősek), és minden fejlesztő, akit ismerek – beleértve azokat is, akik most varázslóknak tűnnek – gyakorolt és botladozott egy kicsit, mielőtt minden összeállt. Az a tény, hogy végigcsináltad ezt a leckét, azt jelenti, hogy már úton vagy, hogy elsajátítsd a fejlesztői eszköztár legfontosabb eszközeit.

Íme néhány igazán fantasztikus forrás, amelyek segítenek gyakorolni és még jobbá válni:

- [Útmutató a nyílt forráskódú szoftverekhez való hozzájáruláshoz](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Az útmutatód a változtatásokhoz
- [Git segédlet](https://training.github.com/downloads/github-git-cheat-sheet/) – Tartsd kéznél gyors referencia céljából!

És ne feledd: a gyakorlás előrehaladást jelent, nem tökéletességet! Minél többet használod a Git-et és a GitHub-ot, annál természetesebbé válik. A GitHub létrehozott néhány csodálatos interaktív kurzust, amelyek lehetővé teszik, hogy biztonságos környezetben gyakorolj:

- [Bevezetés a GitHub-ba](https://github.com/skills/introduction-to-github)
- [Kommunikáció Markdown használatával](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Egyesítési konfliktusok kezelése](https://github.com/skills/resolve-merge-conflicts)

**Kalandvágyó vagy? Nézd meg ezeket a modern eszközöket:**
- [GitHub CLI dokumentáció](https://cli.github.com/manual/) – Ha úgy érzed, hogy parancssori varázsló akarsz lenni
- [GitHub Codespaces dokumentáció](https://docs.github.com/en/codespaces) – Kódolj a felhőben!
- [GitHub Actions dokumentáció](https://docs.github.com/en/actions) – Automatizálj mindent
- [Git legjobb gyakorlatok](https://www.atlassian.com/git/tutorials/comparing-workflows) – Emeld a munkafolyamatod szintjét 

## GitHub Copilot Agent Kihívás 🚀

Használd az Agent módot a következő kihívás teljesítéséhez:

**Leírás:** Hozz létre egy együttműködő webfejlesztési projektet, amely bemutatja a teljes GitHub munkafolyamatot, amit ebben a leckében tanultál. Ez a kihívás segít gyakorolni a tároló létrehozását, az együttműködési funkciókat és a modern Git munkafolyamatokat egy valós helyzetben.

**Feladat:** Hozz létre egy új nyilvános GitHub tárolót egy egyszerű "Webfejlesztési források" projekthez. A tárolónak tartalmaznia kell egy jól strukturált README.md fájlt, amely hasznos webfejlesztési eszközöket és forrásokat sorol fel kategóriák szerint (HTML, CSS, JavaScript stb.). Állítsd be a tárolót megfelelő közösségi szabványokkal, beleértve egy licencet, hozzájárulási irányelveket és egy magatartási kódexet. Hozz létre legalább két funkcióágat: egyet a CSS források hozzáadásához, és egyet a JavaScript forrásokhoz. Készíts commitokat minden ágon leíró commit üzenetekkel, majd hozz létre pull requesteket, hogy egyesítsd a változtatásokat a fő ággal. Engedélyezd a GitHub funkciókat, mint például az Issues, Discussions, és állíts be egy alapvető GitHub Actions munkafolyamatot automatizált ellenőrzésekhez.

## Feladat 

A küldetésed, ha elfogadod: Teljesítsd a [Bevezetés a GitHub-ba](https://github.com/skills/introduction-to-github) kurzust a GitHub Skills-en. Ez az interaktív kurzus lehetővé teszi, hogy mindent gyakorolj, amit tanultál, egy biztonságos, irányított környezetben. Ráadásul kapsz egy menő jelvényt, amikor befejezed! 🏅

**Készen állsz további kihívásokra?**
- Állítsd be az SSH hitelesítést a GitHub fiókodhoz (nincs több jelszó!)
- Próbáld ki a GitHub CLI-t a napi Git műveleteidhez
- Hozz létre egy tárolót GitHub Actions munkafolyamattal
- Fedezd fel a GitHub Codespaces-t úgy, hogy megnyitod ezt a tárolót egy felhőalapú szerkesztőben

Ne feledd: minden szakértő egyszer kezdő volt. Menni fog! 💪

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.