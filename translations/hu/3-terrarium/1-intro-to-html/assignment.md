<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2025-10-24T20:17:10+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "hu"
}
-->
# HTML Gyakorló Feladat: Blog Mockup Készítése

## Tanulási Célok

Alkalmazd HTML tudásodat egy teljes blog kezdőlapjának megtervezésével és kódolásával. Ez a gyakorlati feladat megerősíti a szemantikus HTML koncepciókat, az akadálymentességi legjobb gyakorlatokat, valamint a professzionális kódolási szervezési készségeket, amelyeket webfejlesztési pályafutásod során használni fogsz.

**A feladat teljesítésével:**
- Gyakorolhatod a weboldal elrendezésének tervezését kódolás előtt
- Megfelelően alkalmazhatod a szemantikus HTML elemeket
- Akadálymentes, jól strukturált jelölést hozhatsz létre
- Fejlesztheted a professzionális kódolási szokásokat kommentekkel és szervezéssel

## Projekt Követelmények

### 1. Rész: Tervezés (Vizuális Mockup)

**Készíts egy vizuális mockupot a blog kezdőlapjáról, amely tartalmazza:**
- Fejlécet a weboldal címével és navigációval
- Fő tartalmi területet legalább 2-3 blogbejegyzés előnézettel
- Oldalsávot további információkkal (bemutatkozó rész, legutóbbi bejegyzések, kategóriák)
- Láblécet kapcsolati információkkal vagy linkekkel

**Mockup Készítési Opciók:**
- **Kézzel rajzolt vázlat**: Használj papírt és ceruzát, majd fotózd le vagy szkenneld be a tervet
- **Digitális eszközök**: Figma, Adobe XD, Canva, PowerPoint vagy bármely rajzoló alkalmazás
- **Wireframe eszközök**: Balsamiq, MockFlow vagy hasonló wireframing szoftverek

**Címkézd fel a mockup szekcióit** azokkal a HTML elemekkel, amelyeket használni tervezel (pl. "Fejléc - `<header>`", "Blogbejegyzések - `<article>`").

### 2. Rész: HTML Elemtervezés

**Készíts egy listát, amely összekapcsolja a mockup minden szekcióját konkrét HTML elemekkel:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Kötelezően Használandó Elemek:**
A HTML kódodnak legalább 10 különböző szemantikus elemet kell tartalmaznia az alábbi listából:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### 3. Rész: HTML Megvalósítás

**Kódold le a blog kezdőlapját az alábbi szabványok szerint:**

1. **Dokumentum Struktúra**: Tartalmazza a megfelelő DOCTYPE, html, head és body elemeket
2. **Szemantikus Jelölés**: Használj HTML elemeket azok rendeltetésszerű céljára
3. **Akadálymentesség**: Adj meg megfelelő alt szöveget a képekhez és értelmes link szöveget
4. **Kódminőség**: Használj következetes behúzást és értelmes kommenteket
5. **Tartalom**: Tartalmazzon valósághű blog tartalmat (használhatsz helykitöltő szöveget)

**Mintakód HTML Struktúrához:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### 4. Rész: Reflexió

**Írj egy rövid reflexiót (3-5 mondat), amelyben kifejted:**
- Mely HTML elemek használatában voltál a legmagabiztosabb?
- Milyen kihívásokkal szembesültél a tervezés vagy kódolás során?
- Hogyan segített a szemantikus HTML a tartalom szervezésében?
- Mit csinálnál másképp a következő HTML projektedben?

## Beküldési Ellenőrzőlista

**Beküldés előtt ellenőrizd, hogy:**
- [ ] Vizuális mockup HTML elemekkel címkézve
- [ ] Teljes HTML fájl megfelelő dokumentum struktúrával
- [ ] Legalább 10 különböző szemantikus HTML elem megfelelő használata
- [ ] Értelmes kommentek, amelyek magyarázzák a kód struktúráját
- [ ] Érvényes HTML szintaxis (teszteld böngészőben)
- [ ] Írásos reflexió a megadott kérdésekre válaszolva

## Értékelési Rubrika

| Kritérium | Kiemelkedő (4) | Jó (3) | Fejlődő (2) | Kezdő (1) |
|-----------|----------------|--------|-------------|-----------|
| **Tervezés és Mockup** | Részletes, jól címkézett mockup, amely egyértelműen mutatja az elrendezést és a szemantikus HTML struktúrát | Tiszta mockup, a legtöbb szekció megfelelően címkézve | Alapvető mockup némi címkézéssel, általános megértést mutat | Minimális vagy zavaros mockup, hiányzik a megfelelő szekció azonosítás |
| **Szemantikus HTML Használat** | 10+ szemantikus elem helyes használata, mély megértést mutat az HTML struktúráról és akadálymentességről | 8-9 szemantikus elem helyes használata, jó megértést mutat | 6-7 szemantikus elem használata, némi zavar a megfelelő használatban | Kevesebb mint 6 elem használata vagy szemantikus elemek helytelen használata |
| **Kódminőség és Szervezés** | Kivételesen jól szervezett, megfelelően behúzott kód, átfogó kommentekkel és tökéletes HTML szintaxissal | Jól szervezett kód, jó behúzás, hasznos kommentek, érvényes szintaxis | Többnyire szervezett kód néhány kommenttel, kisebb szintaxis hibák | Gyenge szervezés, minimális kommentek, több szintaxis hiba |
| **Akadálymentesség és Legjobb Gyakorlatok** | Kiváló akadálymentességi szempontok, értelmes alt szöveg, megfelelő címsor hierarchia, minden modern HTML legjobb gyakorlatot követ | Jó akadálymentességi funkciók, megfelelő címsorok és alt szöveg, a legtöbb legjobb gyakorlatot követi | Néhány akadálymentességi szempont, alapvető alt szöveg és címsor struktúra | Korlátozott akadálymentességi funkciók, gyenge címsor struktúra, nem követi a legjobb gyakorlatokat |
| **Reflexió és Tanulás** | Éleslátó reflexió, amely mély megértést mutat az HTML koncepciókról és átgondolt elemzést a tanulási folyamatról | Jó reflexió, amely megértést mutat a kulcsfontosságú koncepciókról és némi önismeretet a tanulásról | Alapvető reflexió, korlátozott betekintés az HTML koncepciókba vagy tanulási folyamatba | Minimális vagy hiányzó reflexió, kevés megértést mutat a tanult koncepciókról |

## Tanulási Források

**Alapvető Referenciák:**
- [MDN HTML Elemek Referencia](https://developer.mozilla.org/docs/Web/HTML/Element) - Teljes útmutató az összes HTML elemhez
- [HTML5 Szemantikus Elemek](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Szemantikus jelölés megértése
- [Web Akadálymentességi Irányelvek](https://www.w3.org/WAI/WCAG21/quickref/) - Akadálymentes webtartalom létrehozása
- [HTML Validator](https://validator.w3.org/) - Ellenőrizd a HTML szintaxist

**Tippek a Sikerhez:**
- Kezdd a mockup készítésével, mielőtt kódolni kezdenél
- Használd a böngésző fejlesztői eszközeit a HTML struktúra ellenőrzéséhez
- Teszteld az oldaladat különböző képernyőméreteken (CSS nélkül is)
- Olvasd fel hangosan a HTML kódodat, hogy ellenőrizd, logikus-e a struktúra
- Gondolj arra, hogyan értelmezné egy képernyőolvasó az oldalad struktúráját

> 💡 **Ne feledd**: Ez a feladat a HTML struktúrára és szemantikára fókuszál. Ne aggódj a vizuális stílus miatt – erre való a CSS! Az oldalad lehet, hogy egyszerűen néz ki, de jól strukturált és értelmes kell legyen.

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.