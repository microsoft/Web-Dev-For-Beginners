<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7aa6e4f270d38d9cb17f2b5bd86b863d",
  "translation_date": "2025-08-28T04:22:42+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "hu"
}
-->
# Kódszerkesztő használata

Ez a lecke bemutatja a [VSCode.dev](https://vscode.dev) webalapú kódszerkesztő alapjait, amely lehetővé teszi, hogy módosítsd a kódodat és hozzájárulj egy projekthez anélkül, hogy bármit telepítenél a számítógépedre.

## Tanulási célok

Ebben a leckében megtanulod:

- Hogyan használj kódszerkesztőt egy kódprojektben
- Hogyan kövesd nyomon a változásokat verziókezeléssel
- Hogyan testre szabhatod a szerkesztőt fejlesztéshez

### Előfeltételek

Mielőtt elkezdenéd, létre kell hoznod egy fiókot a [GitHub](https://github.com) oldalon. Látogass el a [GitHub](https://github.com/) oldalra, és hozz létre egy fiókot, ha még nem tetted meg.

### Bevezetés

A kódszerkesztő alapvető eszköz a programok írásához és meglévő kódprojektekben való együttműködéshez. Ha megérted a szerkesztő alapjait és megtanulod, hogyan használd ki a funkcióit, alkalmazni tudod őket a kódírás során.

## Első lépések a VSCode.dev használatával

A [VSCode.dev](https://vscode.dev) egy webalapú kódszerkesztő. Nem szükséges semmit telepíteni a használatához, csak meg kell nyitni, mint bármely más weboldalt. A szerkesztő elindításához nyisd meg a következő linket: [https://vscode.dev](https://vscode.dev). Ha nem vagy bejelentkezve a [GitHub](https://github.com/) oldalra, kövesd az utasításokat a bejelentkezéshez vagy hozz létre egy új fiókot, majd jelentkezz be.

Amikor betöltődik, hasonlóan kell kinéznie, mint az alábbi kép:

![Alapértelmezett VSCode.dev](../../../../translated_images/default-vscode-dev.5d06881d65c1b3234ce50cd9ed3b0028e6031ad5f5b441bcbed96bfa6311f6d0.hu.png)

Három fő szekció van, balról jobbra haladva:

1. Az _aktivitási sáv_, amely néhány ikont tartalmaz, például nagyítót 🔎, fogaskereket ⚙️ és néhány másikat.
2. Az aktivitási sáv kibővített része, amely alapértelmezés szerint az _Explorer_, más néven _oldalsáv_.
3. Végül a kódterület a jobb oldalon.

Kattints az ikonokra, hogy különböző menüket jeleníts meg. Ha végeztél, kattints az _Explorer_-re, hogy visszatérj az alapállapotba.

Amikor elkezdesz kódot írni vagy meglévő kódot módosítani, az a legnagyobb területen, a jobb oldalon fog történni. Ezt a területet fogod használni a meglévő kód megtekintésére is, amit a következő lépésben fogsz megtenni.

## GitHub-repozitórium megnyitása

Az első lépés egy GitHub-repozitórium megnyitása. Többféle módon lehet megnyitni egy repozitóriumot. Ebben a szekcióban két különböző módszert láthatsz, amelyekkel elkezdheted a változtatásokon való munkát.

### 1. A szerkesztővel

Használd magát a szerkesztőt egy távoli repozitórium megnyitásához. Ha ellátogatsz a [VSCode.dev](https://vscode.dev) oldalra, látni fogsz egy _"Open Remote Repository"_ gombot:

![Távoli repozitórium megnyitása](../../../../translated_images/open-remote-repository.bd9c2598b8949e7fc283cdfc8f4050c6205a7c7c6d3f78c4b135115d037d6fa2.hu.png)

Használhatod a parancspalettát is. A parancspaletta egy beviteli mező, ahol bármilyen szót beírhatsz, amely egy parancs vagy művelet része, hogy megtaláld a megfelelő parancsot. Használd a bal felső menüt, majd válaszd a _View_ opciót, és válaszd a _Command Palette_-t, vagy használd a következő billentyűkombinációt: Ctrl-Shift-P (MacOS esetén Command-Shift-P).

![Paletta menü](../../../../translated_images/palette-menu.4946174e07f426226afcdad707d19b8d5150e41591c751c45b5dee213affef91.hu.png)

Amikor a menü megnyílik, írd be, hogy _open remote repository_, majd válaszd az első opciót. Több repozitórium, amelynek tagja vagy, vagy amelyet nemrég megnyitottál, megjelenik. Használhatsz egy teljes GitHub URL-t is a kiválasztáshoz. Használd a következő URL-t, és illeszd be a mezőbe:

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ Ha sikeres, az összes fájlt látni fogod a repozitóriumban, betöltve a szövegszerkesztőbe.

### 2. URL használatával

URL-t is használhatsz egy repozitórium betöltéséhez. Például a jelenlegi repozitórium teljes URL-je [https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners), de a GitHub domain helyett `VSCode.dev/github`-ot használva közvetlenül betöltheted a repozitóriumot. Az eredményül kapott URL: [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners).

## Fájlok szerkesztése

Miután megnyitottad a repozitóriumot a böngészőben vagy a vscode.dev-ben, a következő lépés a projekt frissítése vagy módosítása.

### 1. Új fájl létrehozása

Új fájlt hozhatsz létre egy meglévő mappában, vagy a gyökérkönyvtárban/mappában. Új fájl létrehozásához nyisd meg azt a helyet/könyvtárat, ahová a fájlt menteni szeretnéd, és válaszd a _'New file ...'_ ikont az aktivitási sávon _(bal oldalon)_, adj neki nevet, majd nyomd meg az Entert.

![Új fájl létrehozása](../../../../translated_images/create-new-file.2814e609c2af9aeb6c6fd53156c503ac91c3d538f9cac63073b2dd4a7631f183.hu.png)

### 2. Fájl szerkesztése és mentése a repozitóriumban

A vscode.dev különösen hasznos, ha gyors frissítéseket szeretnél végrehajtani a projekteden anélkül, hogy bármilyen szoftvert helyileg betöltenél. A kód frissítéséhez kattints az 'Explorer' ikonra, amely szintén az aktivitási sávon található, hogy megtekintsd a repozitórium fájljait és mappáit. Válassz ki egy fájlt, hogy megnyisd a kódterületen, végezd el a módosításokat, majd mentsd el.

![Fájl szerkesztése](../../../../translated_images/edit-a-file.52c0ee665ef19f08119d62d63f395dfefddc0a4deb9268d73bfe791f52c5807a.hu.png)

Miután befejezted a projekt frissítését, válaszd a _`source control`_ ikont, amely tartalmazza az összes új változtatást, amit a repozitóriumhoz hozzáadtál.

A projektedben végrehajtott változtatások megtekintéséhez válaszd ki a fájl(oka)t a `Changes` mappában a kibővített aktivitási sávon. Ez megnyit egy 'Working Tree'-t, amelyben vizuálisan láthatod a fájlban végrehajtott változtatásokat. A piros szín a projektből való kihagyást jelzi, míg a zöld szín hozzáadást.

![Változtatások megtekintése](../../../../translated_images/working-tree.c58eec08e6335c79cc708c0c220c0b7fea61514bd3c7fb7471905a864aceac7c.hu.png)

Ha elégedett vagy a végrehajtott változtatásokkal, vidd az egeret a `Changes` mappára, és kattints a `+` gombra a változtatások szakaszolásához. A szakaszolás egyszerűen azt jelenti, hogy előkészíted a változtatásokat a GitHub-ra való elkötelezéshez.

Ha azonban nem vagy elégedett néhány változtatással, és el szeretnéd vetni őket, vidd az egeret a `Changes` mappára, és válaszd az `undo` ikont.

Ezután írj be egy `commit message`-t _(A projektben végrehajtott változtatások leírása)_, kattints a `check icon`-ra az elkötelezéshez és a változtatások feltöltéséhez.

Miután befejezted a projekteden való munkát, válaszd a bal felső sarokban található `hamburger menu icon`-t, hogy visszatérj a repozitóriumhoz a github.com oldalon.

![Változtatások szakaszolása és elkötelezése](../../../../8-code-editor/images/edit-vscode.dev.gif)

## Bővítmények használata

A bővítmények telepítése a VSCode-ban lehetővé teszi, hogy új funkciókat és testreszabott fejlesztési környezeti opciókat adj a szerkesztődhöz, hogy javítsd a fejlesztési munkafolyamatot. Ezek a bővítmények segítenek több programozási nyelv támogatásának hozzáadásában, és gyakran általános vagy nyelv-specifikus bővítmények.

Az összes elérhető bővítmény listájának böngészéséhez kattints az _`Extensions icon`_-ra az aktivitási sávon, és kezdj el gépelni a bővítmény nevét a _'Search Extensions in Marketplace'_ feliratú szövegmezőbe. Látni fogsz egy listát a bővítményekről, amelyek mindegyike tartalmazza **a bővítmény nevét, a kiadó nevét, egy mondatos leírást, a letöltések számát** és **egy csillagos értékelést**.

![Bővítmény részletei](../../../../translated_images/extension-details.9f8f1fd4e9eb2de5069ae413119eb8ee43172776383ebe2f7cf640e11df2e106.hu.png)

Megtekintheted az összes korábban telepített bővítményt az _`Installed folder`_ kibővítésével, a legtöbb fejlesztő által használt népszerű bővítményeket a _`Popular folder`_-ben, valamint az ajánlott bővítményeket, amelyeket ugyanazon munkaterület felhasználói vagy a nemrég megnyitott fájlok alapján ajánlanak a _`recommended folder`_-ben.

![Bővítmények megtekintése](../../../../translated_images/extensions.eca0e0c7f59a10b5c88be7fe24b3e32cca6b6058b35a49026c3a9d80b1813b7c.hu.png)

### 1. Bővítmények telepítése

Bővítmény telepítéséhez írd be a bővítmény nevét a keresőmezőbe, és kattints rá, hogy további információkat tekints meg róla a kódterületen, miután megjelenik a kibővített aktivitási sávon.

Kattinthatsz a _kék telepítés gombra_ a kibővített aktivitási sávon, vagy használhatod a telepítés gombot, amely a kódterületen jelenik meg, miután kiválasztottad a bővítményt, hogy betöltsd a további információkat.

![Bővítmények telepítése](../../../../8-code-editor/images/install-extension.gif)

### 2. Bővítmények testreszabása

A bővítmény telepítése után lehet, hogy módosítanod kell annak működését, és testre kell szabnod a preferenciáid alapján. Ehhez válaszd ki a Bővítmények ikont, és ezúttal a bővítményed megjelenik az _Installed folder_-ben, kattints a _**Gear icon**_-ra, és navigálj az _Extensions Setting_ menüponthoz.

![Bővítmény beállításainak módosítása](../../../../translated_images/extension-settings.21c752ae4f4cdb78a867f140ccd0680e04619d0c44bb4afb26373e54b829d934.hu.png)

### 3. Bővítmények kezelése

A bővítmény telepítése és használata után a vscode.dev különböző lehetőségeket kínál a bővítmény kezelésére az igényeid alapján. Például dönthetsz úgy, hogy:

- **Letiltod:** _(Ideiglenesen letilthatsz egy bővítményt, ha már nincs rá szükséged, de nem akarod teljesen eltávolítani)_

    Válaszd ki a telepített bővítményt a kibővített aktivitási sávon > kattints a Gear ikonra > válaszd a 'Disable' vagy 'Disable (Workspace)' opciót **VAGY** Nyisd meg a bővítményt a kódterületen, és kattints a kék Letiltás gombra.

- **Eltávolítod:** Válaszd ki a telepített bővítményt a kibővített aktivitási sávon > kattints a Gear ikonra > válaszd az 'Uninstall' opciót **VAGY** Nyisd meg a bővítményt a kódterületen, és kattints a kék Eltávolítás gombra.

---

## Feladat

[Hozz létre egy önéletrajz weboldalt a vscode.dev segítségével](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

## Áttekintés és önálló tanulás

Olvass többet a [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) funkcióiról és egyéb lehetőségeiről.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.