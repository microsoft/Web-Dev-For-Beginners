# Stílusosítsd a banki alkalmazásodat modern CSS-sel

## Projekt áttekintése

Alakítsd át a funkcionális banki alkalmazásodat egy vizuálisan vonzó, professzionális megjelenésű webalkalmazássá modern CSS technikák segítségével. Hozz létre egy egységes dizájnrendszert, amely javítja a felhasználói élményt, miközben megőrzi az akadálymentesség és a reszponzív dizájn elveit.

Ez a feladat arra ösztönöz, hogy alkalmazd a kortárs webdizájn mintákat, valósíts meg egy következetes vizuális identitást, és hozz létre egy olyan felületet, amelyet a felhasználók vonzónak és könnyen navigálhatónak találnak.

## Útmutató

### 1. lépés: Állítsd be a stíluslapodat

**Hozd létre a CSS alapot:**

1. **Hozz létre** egy új fájlt `styles.css` néven a projekt gyökérkönyvtárában.
2. **Kapcsold össze** a stíluslapot az `index.html` fájlban:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Kezdd** CSS reset és modern alapokkal:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```


### 2. lépés: Dizájnrendszer követelmények

**Valósítsd meg ezeket az alapvető dizájnelemeket:**

#### Színpaletta
- **Elsődleges szín**: Válassz egy professzionális színt a gombokhoz és kiemelésekhez.
- **Másodlagos szín**: Kiegészítő szín az akcentusokhoz és másodlagos műveletekhez.
- **Semleges színek**: Szürkék a szövegekhez, keretekhez és háttérhez.
- **Siker/Hiba színek**: Zöld a sikeres állapotokhoz, piros a hibákhoz.

#### Tipográfia
- **Címsor hierarchia**: Egyértelmű különbség H1, H2 és H3 elemek között.
- **Törzsszöveg**: Olvasható betűméret (minimum 16px) és megfelelő sortávolság.
- **Űrlap címkék**: Egyértelmű, akadálymentes szövegstílus.

#### Elrendezés és térközök
- **Következetes térközök**: Használj térköz skálát (8px, 16px, 24px, 32px).
- **Rácsrendszer**: Szervezett elrendezés az űrlapokhoz és tartalmi szekciókhoz.
- **Reszponzív dizájn**: Mobil-első megközelítés töréspontokkal.

### 3. lépés: Komponens stílusozás

**Stílusozd ezeket a konkrét komponenseket:**

#### Űrlapok
- **Beviteli mezők**: Professzionális keretek, fókuszállapotok és validációs stílusok.
- **Gombok**: Hover effektusok, letiltott állapotok és betöltési indikátorok.
- **Címkék**: Egyértelmű pozicionálás és kötelező mező jelölők.
- **Hibaüzenetek**: Látható hiba stílus és segítő üzenetek.

#### Navigáció
- **Fejléc**: Tiszta, márkázott navigációs terület.
- **Linkek**: Egyértelmű hover állapotok és aktív jelölők.
- **Logó/Cím**: Megkülönböztető márkaelem.

#### Tartalmi területek
- **Szekciók**: Egyértelmű vizuális elválasztás a különböző területek között.
- **Kártyák**: Ha kártya-alapú elrendezést használsz, árnyékok és keretek hozzáadása.
- **Háttér**: Megfelelő fehér tér és finom háttérhasználat.

### 4. lépés: Fejlett funkciók (opcionális)

**Fontold meg ezeknek a fejlett funkcióknak a megvalósítását:**
- **Sötét mód**: Váltás világos és sötét témák között.
- **Animációk**: Finom átmenetek és mikro-interakciók.
- **Betöltési állapotok**: Vizuális visszajelzés az űrlap beküldésekor.
- **Reszponzív képek**: Optimalizált képek különböző képernyőméretekhez.

## Dizájn inspiráció

**Modern banki alkalmazás jellemzői:**
- **Tiszta, minimalista dizájn** sok fehér térrel.
- **Professzionális színsémák** (kékek, zöldek vagy kifinomult semlegesek).
- **Egyértelmű vizuális hierarchia** kiemelkedő cselekvésre ösztönző gombokkal.
- **Akadálymentes kontrasztarányok**, amelyek megfelelnek a WCAG irányelveknek.
- **Mobil-reszponzív elrendezések**, amelyek minden eszközön működnek.

## Technikai követelmények

### CSS szervezés
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```


### Akadálymentességi követelmények
- **Színkontraszt**: Biztosíts legalább 4.5:1 arányt normál szövegekhez.
- **Fókuszjelzők**: Látható fókuszállapotok billentyűzetes navigációhoz.
- **Űrlap címkék**: Helyesen társítva a beviteli mezőkhöz.
- **Reszponzív dizájn**: Használható 320px-től 1920px széles képernyőkön.

## Értékelési szempontok

| Kritérium | Kiváló (A) | Jó (B) | Fejlődő (C) | Fejlesztésre szorul (F) |
|----------|------------|--------|-------------|-------------------------|
| **Dizájnrendszer** | Átfogó dizájnrendszert valósít meg, következetes színekkel, tipográfiával és térközökkel | Következetes stílusok, egyértelmű dizájnminták és jó vizuális hierarchia | Alapvető stílusok alkalmazása némi következetlenséggel vagy hiányzó elemekkel | Minimális stílus, következetlen vagy ellentmondásos dizájnválasztások |
| **Felhasználói élmény** | Intuitív, professzionális felületet hoz létre kiváló használhatósággal és vizuális vonzerővel | Jó felhasználói élményt nyújt, egyértelmű navigációval és olvasható tartalommal | Alapvető használhatóság némi UX fejlesztési lehetőséggel | Gyenge használhatóság, nehéz navigálni vagy olvasni |
| **Technikai megvalósítás** | Modern CSS technikák, jól szervezett kódstruktúra és legjobb gyakorlatok alkalmazása | Hatékony CSS megvalósítás, jó szervezés és megfelelő technikák | CSS helyesen működik, de hiányozhat a szervezettség vagy a modern megközelítések | Gyenge CSS megvalósítás technikai problémákkal vagy böngészőkompatibilitási gondokkal |
| **Reszponzív dizájn** | Teljesen reszponzív dizájn, amely minden eszközméreten gyönyörűen működik | Jó reszponzív viselkedés, kisebb problémákkal néhány képernyőméreten | Alapvető reszponzív megvalósítás némi elrendezési problémával | Nem reszponzív vagy jelentős problémák mobil eszközökön |
| **Akadálymentesség** | Megfelel a WCAG irányelveknek, kiváló billentyűzetes navigációval és képernyőolvasó támogatással | Jó akadálymentességi gyakorlatok, megfelelő kontraszt és fókuszjelzők | Alapvető akadálymentességi szempontok némi hiányossággal | Gyenge akadálymentesség, nehéz a fogyatékkal élő felhasználók számára |

## Beküldési irányelvek

**Beküldéskor tartalmazd:**
- **styles.css**: A teljes stíluslapod.
- **Frissített HTML**: Az általad végzett HTML módosítások.
- **Képernyőképek**: Képek, amelyek bemutatják a dizájnodat asztali és mobil nézetben.
- **README**: Rövid leírás a dizájnválasztásaidról és a színpalettáról.

**Bónusz pontok járnak:**
- **CSS egyéni tulajdonságok** a fenntartható témázáshoz.
- **Fejlett CSS funkciók**, mint például Grid, Flexbox vagy CSS animációk.
- **Teljesítmény szempontok**, mint például optimalizált CSS és minimális fájlméret.
- **Keresztböngészős tesztelés**, amely biztosítja a kompatibilitást különböző böngészők között.

> 💡 **Profi tipp**: Kezdd a mobil dizájnnal, majd bővítsd nagyobb képernyőkre. Ez a mobil-első megközelítés biztosítja, hogy az alkalmazásod minden eszközön jól működjön, és megfeleljen a modern webfejlesztési legjobb gyakorlatoknak.

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.