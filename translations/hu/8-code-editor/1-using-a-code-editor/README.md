<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:32:51+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "hu"
}
-->
***

# Kódszerkesztő használata: [VSCode.dev](https://vscode.dev) elsajátítása

**Üdvözlünk!**  
Ez a lecke az alapoktól a haladó szintig vezet be a [VSCode.dev](https://vscode.dev) használatába—a hatékony, webalapú kódszerkesztőbe. Megtanulod magabiztosan szerkeszteni a kódot, kezelni a projekteket, nyomon követni a változásokat, telepíteni bővítményeket, és profi módon együttműködni—mindezt a böngészőből, telepítés nélkül.

***

## Tanulási célok

A lecke végére képes leszel:

- Hatékonyan használni egy kódszerkesztőt bármilyen projekten, bárhol
- Zökkenőmentesen nyomon követni a munkádat beépített verziókezeléssel
- Személyre szabni és javítani a fejlesztési munkafolyamatot szerkesztő testreszabásokkal és bővítményekkel

***

## Előfeltételek

A kezdéshez **regisztrálj egy ingyenes [GitHub](https://github.com) fiókot**, amely lehetővé teszi a kódrepozitóriumok kezelését és a globális együttműködést. Ha még nincs fiókod, [hozz létre egyet itt](https://github.com/).

***

## Miért használjunk webalapú kódszerkesztőt?

Egy **kódszerkesztő**, mint a VSCode.dev, a parancsnoki központod a kód írásához, szerkesztéséhez és kezeléséhez. Intuitív felületével, rengeteg funkciójával és azonnali böngészőn keresztüli hozzáféréssel lehetővé teszi:

- Projektek szerkesztését bármilyen eszközön
- Telepítési problémák elkerülését
- Azonnali együttműködést és hozzájárulást

Ha már magabiztosan használod a VSCode.dev-et, készen állsz arra, hogy bárhonnan, bármikor megoldj kódolási feladatokat.

***

## Első lépések a VSCode.dev használatával

Lépj be a **[VSCode.dev](https://vscode.dev)** oldalra—nincs telepítés, nincs letöltés. A GitHub-fiókkal való bejelentkezés teljes hozzáférést biztosít, beleértve a beállítások, bővítmények és repozitóriumok szinkronizálását. Ha szükséges, csatlakoztasd a GitHub-fiókodat.

Betöltés után a munkaterületed így fog kinézni:

![Alapértelmezett VSCode.dev](../images/default-vscode-dev három fő szekcióval balról jobbra:
- **Tevékenységsáv:** Ikonok, mint 🔎 (Keresés), ⚙️ (Beállítások), fájlok, verziókezelés stb.
- **Oldalsáv:** A tevékenységsáv ikonja alapján változik (alapértelmezés szerint *Felfedező*, amely a fájlokat mutatja).
- **Szerkesztő/kódterület:** A legnagyobb szekció jobbra—itt szerkesztheted és nézheted meg a kódot.

Kattints az ikonokra a funkciók felfedezéséhez, de térj vissza a _Felfedező_-höz, hogy megtartsd a helyed.

***

## GitHub repozitórium megnyitása

### 1. Módszer: A szerkesztőből

1. Lépj be a [VSCode.dev](https://vscode.dev) oldalra. Kattints az **"Távoli repozitórium megnyitása"** gombra.

   ![Távoli repozitórium megnyitása](../../../../8-code-editor/images/open-remote-repository használja a _Parancspalettát_ (Ctrl-Shift-P, vagy Mac-en Cmd-Shift-P).

   ![Paletta menü](../images/palette-menu.png távoli repozitórium megnyitása.”
   - Válaszd ki az opciót.
   - Illeszd be a GitHub repozitórium URL-jét (pl. `https://github.com/microsoft/Web-Dev-For-Beginners`) és nyomd meg az Entert.

Ha sikeres, az egész projekt betöltődik és készen áll a szerkesztésre!

***

### 2. Módszer: Azonnal URL-en keresztül

Bármely GitHub repozitórium URL-jét átalakíthatod, hogy közvetlenül megnyíljon a VSCode.dev-ben, ha a `github.com`-ot `vscode.dev/github`-ra cseréled.  
Példa:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Ez a funkció szupergyors hozzáférést biztosít bármely projekthez.

***

## Fájlok szerkesztése a projektben

Miután megnyitottad a repozitóriumot, a következőket teheted:

### 1. **Új fájl létrehozása**
- A *Felfedező* oldalsávban navigálj a kívánt mappához, vagy használd a gyökérkönyvtárat.
- Kattints az _‘Új fájl ...’_ ikonra.
- Nevezd el a fájlt, nyomd meg az **Entert**, és a fájl azonnal megjelenik.

![Új fájl létrehozása](../images/create-new-file 2. **Fájlok szerkesztése és mentése**

- Kattints egy fájlra a *Felfedező*-ben, hogy megnyisd a kódterületen.
- Végezd el a szükséges módosításokat.
- A VSCode.dev automatikusan menti a változtatásokat, de manuálisan is menthetsz Ctrl+S billentyűkombinációval.

![Fájl szerkesztése](../images/edit-a-file.png. **Változások nyomon követése és elkötelezése verziókezeléssel**

A VSCode.dev integrált **Git** verziókezeléssel rendelkezik!

- Kattints a _'Verziókezelés'_ ikonra, hogy megtekintsd az összes módosítást.
- A `Változások` mappában a fájlok zölddel (hozzáadások) és pirossal (törlések) jelennek meg.  
  ![Változások megtekintése](../images/working-tree.png változásokat a fájlok melletti `+` gombra kattintva készítsd elő az elkötelezéshez.
- **Elvetheted** a nem kívánt változtatásokat az undo ikonra kattintva.
- Írj egy egyértelmű elkötelezési üzenetet, majd kattints a pipára az elkötelezéshez és feltöltéshez.

A GitHub repozitóriumodhoz való visszatéréshez válaszd a bal felső sarokban lévő hamburger menüt.

![Változások előkészítése és elkötelezése](../images/edit-vscode.dev Bővítményekkel

A bővítmények lehetővé teszik, hogy nyelveket, témákat, hibakeresőket és produktivitási eszközöket adj hozzá a VSCode.dev-hez—könnyebbé és szórakoztatóbbá téve a kódolást.

### Bővítmények böngészése és kezelése

- Kattints a **Bővítmények ikonra** a tevékenységsávon.
- Keress egy bővítményt a _'Bővítmények keresése a piactéren'_ mezőben.

  ![Bővítmény részletei](../images/extension-details:
  - **Telepítve**: Az összes hozzáadott bővítmény
  - **Népszerű**: Az iparág kedvencei
  - **Ajánlott**: A munkafolyamatodhoz igazítva

  ![Bővítmények megtekintése](

  

***

### 1. **Bővítmények telepítése**

- Írd be a bővítmény nevét a keresőbe, kattints rá, és nézd meg a részleteket a szerkesztőben.
- Nyomd meg a **kék Telepítés gombot** az oldalsávon _vagy_ a fő kódterületen.

  ![Bővítmények telepítése](../images/install-extension 2. **Bővítmények testreszabása**

- Keresd meg a telepített bővítményt.
- Kattints a **Fogaskerék ikonra** → válaszd a _Bővítmény beállításai_ opciót, hogy finomhangold a működést.

  ![Bővítmény beállításainak módosítása](../images/extension-settings 3. **Bővítmények kezelése**
A következőket teheted:

- **Letiltás:** Ideiglenesen kikapcsolhatod a bővítményt, miközben telepítve marad
- **Eltávolítás:** Véglegesen törölheted, ha már nincs rá szükséged

  Keresd meg a bővítményt, nyomd meg a Fogaskerék ikont, és válaszd a ‘Letiltás’ vagy ‘Eltávolítás’ opciót, vagy használd a kék gombokat a kódterületen.

***

## Feladat

Teszteld a képességeidet: [Hozz létre egy önéletrajz weboldalt a vscode.dev használatával](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## További felfedezés és önálló tanulás

- Merülj el mélyebben [a hivatalos VSCode Web dokumentációban](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Fedezd fel a haladó munkaterület funkciókat, billentyűparancsokat és beállításokat.

***

**Most készen állsz arra, hogy kódolj, alkoss és együttműködj—bárhonnan, bármilyen eszközön, a VSCode.dev használatával!**

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.