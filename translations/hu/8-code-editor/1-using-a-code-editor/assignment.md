<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "effe56ba51c38d7bdfad1ea38288666b",
  "translation_date": "2025-10-24T19:55:35+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "hu"
}
-->
# Készíts egy önéletrajz weboldalt a VSCode.dev segítségével

Fejleszd karrierlehetőségeidet egy professzionális önéletrajz weboldal létrehozásával, amely interaktív, modern formátumban mutatja be készségeidet és tapasztalataidat. A hagyományos PDF-ek küldése helyett képzeld el, hogy egy elegáns, reszponzív weboldalt biztosítasz a toborzóknak, amely nemcsak a képesítéseidet, hanem a webfejlesztési képességeidet is bemutatja.

Ez a gyakorlati feladat lehetőséget ad arra, hogy minden VSCode.dev készségedet gyakorold, miközben valami igazán hasznosat hozol létre a karriered számára. Megtapasztalhatod a teljes webfejlesztési munkafolyamatot – a repozitórium létrehozásától a telepítésig – mindezt a böngésződben.

A projekt befejezésével egy professzionális online jelenlétet hozol létre, amely könnyen megosztható a potenciális munkaadókkal, frissíthető, ahogy a készségeid fejlődnek, és testreszabható, hogy illeszkedjen a személyes márkádhoz. Ez pontosan az a gyakorlati projekt, amely valódi webfejlesztési készségeket mutat be.

## Tanulási célok

A feladat elvégzése után képes leszel:

- **Létrehozni** és kezelni egy teljes webfejlesztési projektet a VSCode.dev segítségével
- **Felépíteni** egy professzionális weboldalt szemantikus HTML elemekkel
- **Stílusozni** reszponzív elrendezéseket modern CSS technikákkal
- **Megvalósítani** interaktív funkciókat alapvető webtechnológiák használatával
- **Telepíteni** egy élő weboldalt, amely megosztható URL-en keresztül elérhető
- **Bemutatni** verziókezelési legjobb gyakorlatokat a fejlesztési folyamat során

## Előfeltételek

A feladat megkezdése előtt győződj meg róla, hogy rendelkezel:

- GitHub fiókkal (hozz létre egyet a [github.com](https://github.com/) oldalon, ha szükséges)
- A VSCode.dev leckéjének elvégzésével, amely az interfész navigációját és alapvető műveleteit ismerteti
- Alapvető HTML struktúra és CSS stílus fogalmak megértésével

## Projekt előkészítése és repozitórium létrehozása

Kezdjük a projekt alapjainak előkészítésével. Ez a folyamat tükrözi a valós fejlesztési munkafolyamatokat, ahol a projektek megfelelő repozitórium inicializálással és struktúra tervezéssel kezdődnek.

### 1. lépés: Hozd létre a GitHub repozitóriumodat

Egy dedikált repozitórium létrehozása biztosítja, hogy a projekted már a kezdetektől megfelelően szervezett és verziókezeléssel ellátott legyen.

1. **Navigálj** a [GitHub.com](https://github.com) oldalra, és jelentkezz be a fiókodba
2. **Kattints** a zöld "New" gombra vagy a jobb felső sarokban található "+" ikonra
3. **Nevezd el** a repozitóriumodat `my-resume` néven (vagy válassz egy személyre szabott nevet, például `john-smith-resume`)
4. **Adj hozzá** egy rövid leírást: "Professzionális önéletrajz weboldal HTML és CSS segítségével"
5. **Válaszd** a "Public" opciót, hogy az önéletrajzod elérhető legyen a potenciális munkaadók számára
6. **Jelöld be** az "Add a README file" opciót, hogy létrehozz egy kezdeti projektleírást
7. **Kattints** a "Create repository" gombra a beállítások véglegesítéséhez

> 💡 **Repozitórium elnevezési tipp**: Használj leíró, professzionális neveket, amelyek egyértelműen jelzik a projekt célját. Ez segít a megosztásnál vagy portfólió bemutatók során.

### 2. lépés: Projekt struktúra inicializálása

Mivel a VSCode.dev legalább egy fájlt igényel a repozitórium megnyitásához, létrehozzuk a fő HTML fájlunkat közvetlenül a GitHubon, mielőtt átváltanánk a webes szerkesztőre.

1. **Kattints** az "új fájl létrehozása" linkre az új repozitóriumodban
2. **Írd be** az `index.html` fájlnevet
3. **Add hozzá** ezt a kezdeti HTML struktúrát:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <h1>Your Name</h1>
    <p>Professional Resume Website</p>
</body>
</html>
```

4. **Írj** egy commit üzenetet: "Kezdeti HTML struktúra hozzáadása"
5. **Kattints** a "Commit new file" gombra a változtatások mentéséhez

![Kezdeti fájl létrehozása a GitHubon](../../../../translated_images/hu/new-file-github.com.c886796d800e8056.png)

**Ez a kezdeti beállítás a következőket valósítja meg:**
- **Létrehozza** a megfelelő HTML5 dokumentum struktúrát szemantikus elemekkel
- **Tartalmazza** a viewport meta tag-et a reszponzív design kompatibilitás érdekében
- **Beállítja** a leíró oldal címet, amely megjelenik a böngésző fülekben
- **Megteremti** a professzionális tartalom szervezésének alapját

## Munka a VSCode.dev-ben

Most, hogy a repozitórium alapja létrejött, váltsunk át a VSCode.dev-re a fő fejlesztési munkához. Ez a webalapú szerkesztő minden szükséges eszközt biztosít a professzionális webfejlesztéshez.

### 3. lépés: Nyisd meg a projektedet a VSCode.dev-ben

1. **Navigálj** a [vscode.dev](https://vscode.dev) oldalra egy új böngészőfülben
2. **Kattints** az "Open Remote Repository" gombra a kezdőképernyőn
3. **Másold** a repozitórium URL-jét a GitHubról, és illeszd be a mezőbe

   Formátum: `https://github.com/your-username/my-resume`
   
   *Cseréld ki a `your-username` részt a tényleges GitHub felhasználónevedre*

4. **Nyomd meg** az Entert a projekt betöltéséhez

✅ **Sikerjelző**: A projekt fájljait az Explorer oldalsávban kell látnod, az `index.html` pedig szerkesztésre elérhető a fő szerkesztő területen.

![Projekt betöltve a VSCode.dev-ben](../../../../translated_images/hu/project-on-vscode.dev.e79815a9a95ee7fe.png)

**Amit az interfészen látsz:**
- **Explorer oldalsáv**: **Megjeleníti** a repozitórium fájljait és mappastruktúráját
- **Szerkesztő terület**: **Mutatja** a kiválasztott fájlok tartalmát szerkesztésre
- **Tevékenység sáv**: **Hozzáférést biztosít** olyan funkciókhoz, mint a Source Control és Extensions
- **Állapotsáv**: **Jelzi** a kapcsolat állapotát és az aktuális branch információit

### 4. lépés: Építsd fel az önéletrajz tartalmát

Cseréld le az `index.html` helyőrző tartalmát egy átfogó önéletrajz struktúrára. Ez a HTML biztosítja a professzionális bemutatás alapját.

<details>
<summary><b>Teljes HTML önéletrajz struktúra</b></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <header id="header">
        <h1>Your Full Name</h1>
        <hr>
        <p class="role">Your Professional Title</p>
        <hr>
    </header>
    
    <main>
        <article id="mainLeft">
            <section>
                <h2>CONTACT</h2>
                <p>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:your.email@domain.com">your.email@domain.com</a>
                </p>
                <p>
                    <i class="fab fa-github" aria-hidden="true"></i>
                    <a href="https://github.com/your-username">github.com/your-username</a>
                </p>
                <p>
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                    <a href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a>
                </p>
            </section>
            
            <section>
                <h2>SKILLS</h2>
                <ul>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Responsive Web Design</li>
                    <li>Version Control (Git)</li>
                    <li>Problem Solving</li>
                </ul>
            </section>
            
            <section>
                <h2>EDUCATION</h2>
                <h3>Your Degree or Certification</h3>
                <p>Institution Name</p>
                <p>Start Date - End Date</p>
            </section>
        </article>
        
        <article id="mainRight">
            <section>
                <h2>ABOUT</h2>
                <p>Write a compelling summary that highlights your passion for web development, key achievements, and career goals. This section should give employers insight into your personality and professional approach.</p>
            </section>
            
            <section>
                <h2>WORK EXPERIENCE</h2>
                <div class="job">
                    <h3>Job Title</h3>
                    <p class="company">Company Name | Start Date – End Date</p>
                    <ul>
                        <li>Describe a key accomplishment or responsibility</li>
                        <li>Highlight specific skills or technologies used</li>
                        <li>Quantify impact where possible (e.g., "Improved efficiency by 25%")</li>
                    </ul>
                </div>
                
                <div class="job">
                    <h3>Previous Job Title</h3>
                    <p class="company">Previous Company | Start Date – End Date</p>
                    <ul>
                        <li>Focus on transferable skills and achievements</li>
                        <li>Demonstrate growth and learning progression</li>
                        <li>Include any leadership or collaboration experiences</li>
                    </ul>
                </div>
            </section>
            
            <section>
                <h2>PROJECTS</h2>
                <div class="project">
                    <h3>Project Name</h3>
                    <p>Brief description of what the project accomplishes and technologies used.</p>
                    <a href="#" target="_blank">View Project</a>
                </div>
            </section>
        </article>
    </main>
</body>
</html>
```
</details>

**Testreszabási irányelvek:**
- **Cseréld le** az összes helyőrző szöveget a tényleges információiddal
- **Igazítsd** a szekciókat a tapasztalati szintedhez és karrier fókuszodhoz
- **Adj hozzá** vagy távolíts el szekciókat szükség szerint (pl. Tanúsítványok, Önkéntes munka, Nyelvek)
- **Tartalmazz** linkeket a tényleges profiljaidhoz és projektjeidhez

### 5. lépés: Támogató fájlok létrehozása

A professzionális weboldalak szervezett fájlstruktúrát igényelnek. Hozd létre a CSS stíluslapot és a konfigurációs fájlokat, amelyek szükségesek a teljes projekthez.

1. **Vidd az egeret** a projekt mappa neve fölé az Explorer oldalsávban
2. **Kattints** az "Új fájl" ikonra (📄+), amely megjelenik
3. **Hozd létre** ezeket a fájlokat egyenként:
   - `style.css` (stílus és elrendezés)
   - `codeswing.json` (a preview bővítmény konfigurációjához)

**CSS fájl létrehozása (`style.css`):**

<details>
<summary><b>Professzionális CSS stílus</b></summary>

```css
/* Modern Resume Styling */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
    background-color: #f9f9f9;
}

/* Header Styling */
header {
    text-align: center;
    margin-bottom: 3em;
    padding: 2em;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 3em;
    letter-spacing: 0.1em;
    margin-bottom: 0.2em;
    font-weight: 300;
}

.role {
    font-size: 1.3em;
    font-weight: 300;
    margin: 1em 0;
}

/* Main Content Layout */
main {
    display: grid;
    grid-template-columns: 35% 65%;
    gap: 3em;
    margin-top: 3em;
    background: white;
    padding: 2em;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Typography */
h2 {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 1em;
    color: #667eea;
    border-bottom: 2px solid #667eea;
    padding-bottom: 0.3em;
}

h3 {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.5em;
    color: #444;
}

/* Section Styling */
section {
    margin-bottom: 2.5em;
}

#mainLeft {
    border-right: 1px solid #e0e0e0;
    padding-right: 2em;
}

/* Contact Links */
section a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
}

section a:hover {
    color: #764ba2;
    text-decoration: underline;
}

/* Icons */
i {
    margin-right: 0.8em;
    width: 20px;
    text-align: center;
    color: #667eea;
}

/* Lists */
ul {
    list-style: none;
    padding-left: 0;
}

li {
    margin: 0.5em 0;
    padding: 0.3em 0;
    position: relative;
}

li:before {
    content: "▸";
    color: #667eea;
    margin-right: 0.5em;
}

/* Work Experience */
.job, .project {
    margin-bottom: 2em;
    padding-bottom: 1.5em;
    border-bottom: 1px solid #f0f0f0;
}

.company {
    font-style: italic;
    color: #666;
    margin-bottom: 0.5em;
}

/* Responsive Design */
@media (max-width: 768px) {
    main {
        grid-template-columns: 1fr;
        gap: 2em;
    }
    
    #mainLeft {
        border-right: none;
        border-bottom: 1px solid #e0e0e0;
        padding-right: 0;
        padding-bottom: 2em;
    }
    
    h1 {
        font-size: 2.2em;
    }
    
    body {
        padding: 10px;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
        color: black;
        font-size: 12pt;
    }
    
    header {
        background: none;
        color: black;
        box-shadow: none;
    }
    
    main {
        box-shadow: none;
    }
}
```
</details>

**Konfigurációs fájl létrehozása (`codeswing.json`):**

```json
{
    "scripts": [],
    "styles": []
}
```

**CSS funkciók megértése:**
- **Használja** a CSS Grid-et a reszponzív, professzionális elrendezéshez
- **Megvalósítja** a modern színsémákat gradiens fejlécekkel
- **Tartalmazza** a hover effektusokat és sima átmeneteket az interaktivitás érdekében
- **Biztosítja** a reszponzív dizájnt, amely minden eszközméreten működik
- **Hozzáadja** a nyomtatásbarát stílusokat PDF generáláshoz

### 6. lépés: Bővítmények telepítése és konfigurálása

A bővítmények javítják a fejlesztési élményt élő előnézeti képességekkel és fejlesztett munkafolyamat eszközökkel. A CodeSwing bővítmény különösen hasznos webfejlesztési projektekhez.

**CodeSwing bővítmény telepítése:**

1. **Kattints** a Bővítmények ikonra (🧩) a Tevékenység sávban
2. **Keress** rá a "CodeSwing" kifejezésre a piactér keresőmezőjében
3. **Válaszd ki** a CodeSwing bővítményt a keresési eredmények közül
4. **Kattints** a kék "Install" gombra

![CodeSwing bővítmény telepítése](../../../../8-code-editor/images/install-extension.gif)

**Mit biztosít a CodeSwing:**
- **Lehetővé teszi** a weboldal élő előnézetét szerkesztés közben
- **Valós időben megjeleníti** a változtatásokat manuális frissítés nélkül
- **Támogatja** több fájltípust, beleértve a HTML-t, CSS-t és JavaScriptet
- **Biztosítja** az integrált fejlesztési környezet élményt

**Azonnali eredmények telepítés után:**
Amint a CodeSwing telepítve van, az önéletrajz weboldalad élő előnézete megjelenik a szerkesztőben. Ez lehetővé teszi, hogy pontosan lásd, hogyan néz ki az oldal, miközben változtatásokat végzel.

![CodeSwing bővítmény élő előnézetet mutat](../../../../translated_images/hu/after-codeswing-extension-pb.0ebddddcf73b5509.png)

**Az interfész fejlesztett megértése:**
- **Megosztott nézet**: **Mutatja** a kódot az egyik oldalon és az élő előnézetet a másikon
- **Valós idejű frissítések**: **Azonnal tükrözi** a változtatásokat gépelés közben
- **Interaktív előnézet**: **Lehetővé teszi** a linkek és interakciók tesztelését
- **Mobil szimuláció**: **Biztosítja** a reszponzív dizájn tesztelési képességeit

### 7. lépés: Verziókezelés és közzététel

Most, hogy az önéletrajz weboldalad elkészült, használd a Git-et a munkád mentésére és online elérhetővé tételére.

**Változtatások elkötelezése:**

1. **Kattints** a Verziókezelés ikonra (🌿) a Tevékenység sávban
2. **Tekintsd át** az összes létrehozott és módosított fájlt a "Changes" szekcióban
3. **Stage-eld** a változtatásokat a "+" ikonra kattintva minden fájl mellett
4. **Írj** egy leíró commit üzenetet, például:
   - "Teljes önéletrajz weboldal hozzáadása reszponzív dizájnnal"
   - "Professzionális stílus és tartalom struktúra megvalósítása"
5. **Kattints** a pipa (✓) ikonra a commit és push végrehajtásához

**Hatékony commit üzenet példák:**
- "Professzionális önéletrajz tartalom és stílus hozzáadása"
- "Reszponzív dizájn megvalósítása mobil kompatibilitáshoz"
- "Kapcsolati információk és projekt linkek frissítése"

> 💡 **Professzionális tipp**: A jó commit üzenetek segítenek nyomon követni a projekt fejlődését és bemutatják a részletekre való odafigyelést – olyan tulajdonságokat, amelyeket a munkaadók értékelnek.

**A közzétett oldal elérése:**
Miután elkötelezted a változtatásokat, visszatérhetsz a GitHub repozitóriumodhoz a bal felső sarokban található hamburger menü (☰) segítségével. Az önéletrajz weboldalad most már verziókezelve van, és készen áll a telepítésre vagy megosztásra.

## Eredmények és következő lépések

**Gratulálunk! 🎉** Sikeresen létrehoztál egy professzionális önéletrajz weboldalt a VSCode.dev segítségével. A projekted bemutatja:
**Bemutatott technikai készségek:**
- **Repozitórium kezelés**: Teljes projekt struktúra létrehozása és szervezése
- **Webfejlesztés**: Reszponzív weboldal építése modern HTML5 és CSS3 használatával
- **Verziókezelés**: Megfelelő Git munkafolyamat megvalósítása értelmes commitokkal
- **Eszközhasználat**: Hatékonyan használta a VSCode.dev interfészét és bővítményrendszerét

**Elért professzionális eredmények:**
- **Online jelenlét**: Egy megosztható URL, amely bemutatja a képesítéseidet
- **Modern formátum**: Egy interaktív alternatíva a hagyományos PDF önéletrajzokhoz
- **Bemutatható készségek**: Konkrét bizonyíték a webfejlesztési képességeidre
- **Könnyű frissítések**: Egy alap, amelyet folyamatosan fejleszthetsz és testreszabhatsz

### Telepítési lehetőségek

Hogy az önéletrajzod elérhető legyen a munkaadók számára, fontold meg ezeket a hosting opciókat:

**GitHub Pages (Ajánlott):**
1. Menj a repozitóriumod Beállítások részéhez a GitHubon
2. Görgess le a "Pages" szekcióhoz
3. Válaszd a "Deploy from a branch" opciót, és válaszd a "main" ágat
4. Az oldalad elérhető lesz a `https://your-username.github.io/my-resume` címen

**Alternatív platformok:**
- **Netlify**: Automatikus telepítés egyedi domainekkel
- **Vercel**: Gyors telepítés modern hosting funkciókkal
- **GitHub Codespaces**: Fejlesztési környezet beépített előnézettel

### Fejlesztési javaslatok

Fejleszd tovább kész
- **Hozzáférhetőség**: Ismerd meg a WCAG irányelveket az inkluzív webdesign érdekében  
- **Teljesítmény**: Fedezd fel az optimalizálási eszközöket, mint például a Lighthouse  
- **SEO**: Értsd meg a keresőoptimalizálás alapjait  

**Szakmai fejlődés:**  
- **Portfólió építése**: Készíts további projekteket, hogy bemutathasd sokoldalú képességeidet  
- **Nyílt forráskód**: Vegyél részt meglévő projektekben, hogy tapasztalatot szerezz az együttműködésben  
- **Kapcsolatépítés**: Oszd meg az önéletrajz weboldaladat fejlesztői közösségekben visszajelzésért  
- **Folyamatos tanulás**: Kövesd a webfejlesztési trendeket és technológiákat  

---

**Következő lépések:** Oszd meg az önéletrajz weboldaladat barátokkal, családtagokkal vagy mentorokkal visszajelzésért. Használd az ő javaslataikat, hogy finomítsd és fejleszd a dizájnt. Ne feledd, ez a projekt nem csupán egy önéletrajz – ez a webfejlesztőként való fejlődésed bemutatása!

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.