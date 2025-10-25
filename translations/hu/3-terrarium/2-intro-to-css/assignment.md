<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bee6762d4092a13fc7c338814963f980",
  "translation_date": "2025-10-24T20:15:30+00:00",
  "source_file": "3-terrarium/2-intro-to-css/assignment.md",
  "language_code": "hu"
}
-->
# CSS Refaktorálási Feladat

## Célkitűzés

Alakítsd át a terrárium projektedet modern CSS elrendezési technikák használatára! Refaktoráld a jelenlegi abszolút pozicionálási megközelítést, és valósítsd meg a **Flexbox** vagy **CSS Grid** használatát egy könnyebben karbantartható, reszponzív dizájn érdekében. Ez a feladat arra ösztönöz, hogy alkalmazd a modern CSS szabványokat, miközben megőrzöd a terrárium vizuális vonzerejét.

Az, hogy mikor és hogyan használjuk a különböző elrendezési módszereket, kulcsfontosságú készség a modern webfejlesztésben. Ez a gyakorlat hidat képez a hagyományos pozicionálási technikák és a korszerű CSS elrendezési rendszerek között.

## Feladat Utasítások

### 1. Fázis: Elemzés és Tervezés
1. **Tekintsd át a jelenlegi terrárium kódodat** - Azonosítsd, mely elemek használják jelenleg az abszolút pozicionálást
2. **Válaszd ki az elrendezési módszert** - Döntsd el, hogy a Flexbox vagy a CSS Grid jobban megfelel-e a dizájn céljaidnak
3. **Vázold fel az új elrendezési struktúrát** - Tervezd meg, hogyan lesznek elrendezve a konténerek és a növényi elemek

### 2. Fázis: Megvalósítás
1. **Hozz létre egy új verziót** a terrárium projektedből egy külön mappában
2. **Frissítsd a HTML struktúrát** a választott elrendezési módszer támogatásához
3. **Refaktoráld a CSS-t**, hogy Flexbox vagy CSS Grid alapú legyen az abszolút pozicionálás helyett
4. **Őrizd meg a vizuális konzisztenciát** - Biztosítsd, hogy a növények és a terrárium üveg ugyanazokon a helyeken jelenjenek meg
5. **Valósítsd meg a reszponzív viselkedést** - Az elrendezésnek zökkenőmentesen kell alkalmazkodnia a különböző képernyőméretekhez

### 3. Fázis: Tesztelés és Dokumentáció
1. **Keresztböngészős tesztelés** - Ellenőrizd, hogy a dizájn működik Chrome, Firefox, Edge és Safari böngészőkben
2. **Reszponzív tesztelés** - Ellenőrizd az elrendezést mobil, tablet és asztali képernyőméreteken
3. **Dokumentáció** - Adj hozzá megjegyzéseket a CSS-hez, amelyek magyarázzák az elrendezési választásaidat
4. **Képernyőképek** - Készíts képernyőképeket a terráriumról különböző böngészőkben és képernyőméretekben

## Technikai Követelmények

### Elrendezés Megvalósítása
- **Válassz EGYET**: Valósítsd meg vagy a Flexboxot, vagy a CSS Gridet (ne mindkettőt ugyanazon elemekhez)
- **Reszponzív Dizájn**: Használj relatív egységeket (`rem`, `em`, `%`, `vw`, `vh`) fix pixelek helyett
- **Hozzáférhetőség**: Tartsd meg a megfelelő szemantikus HTML struktúrát és alt szövegeket
- **Kódminőség**: Használj következetes elnevezési konvenciókat, és szervezd logikusan a CSS-t

### Modern CSS Funkciók, Amiket Tartalmazni Kell
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Böngésző Támogatási Követelmények
- **Chrome/Edge**: Legutóbbi 2 verzió
- **Firefox**: Legutóbbi 2 verzió  
- **Safari**: Legutóbbi 2 verzió
- **Mobil böngészők**: iOS Safari, Chrome Mobile

## Leadandók

1. **Frissített HTML fájl** javított szemantikus struktúrával
2. **Refaktorált CSS fájl** modern elrendezési technikák használatával
3. **Képernyőkép gyűjtemény** keresztböngészős kompatibilitásról:
   - Asztali nézet (1920x1080)
   - Tablet nézet (768x1024) 
   - Mobil nézet (375x667)
   - Legalább 2 különböző böngésző
4. **README.md fájl**, amely dokumentálja:
   - Az elrendezési választásodat (Flexbox vs Grid) és az indoklást
   - A refaktorálás során felmerült kihívásokat
   - Böngésző kompatibilitási megjegyzéseket
   - Utasításokat a kód futtatásához

## Értékelési Rubrika

| Kritérium | Kiemelkedő (4) | Jó (3) | Fejlődő (2) | Kezdő (1) |
|-----------|----------------|--------|-------------|-----------|
| **Elrendezés Megvalósítása** | Mesteri Flexbox/Grid használat fejlett funkciókkal; teljesen reszponzív | Helyes megvalósítás jó reszponzív viselkedéssel | Alapvető megvalósítás kisebb reszponzív problémákkal | Hiányos vagy helytelen elrendezés megvalósítás |
| **Kódminőség** | Tiszta, jól szervezett CSS értelmes megjegyzésekkel és következetes elnevezéssel | Jó szervezés néhány megjegyzéssel | Megfelelő szervezés minimális megjegyzésekkel | Rossz szervezés; nehezen érthető |
| **Keresztböngészős Kompatibilitás** | Tökéletes konzisztencia minden szükséges böngészőben képernyőképekkel | Jó kompatibilitás kisebb különbségekkel dokumentálva | Néhány kompatibilitási probléma, ami nem rontja a funkcionalitást | Jelentős kompatibilitási problémák vagy hiányzó tesztelés |
| **Reszponzív Dizájn** | Kivételes mobil-első megközelítés sima töréspontokkal | Jó reszponzív viselkedés megfelelő töréspontokkal | Alapvető reszponzív funkciók néhány elrendezési problémával | Korlátozott vagy hibás reszponzív viselkedés |
| **Dokumentáció** | Átfogó README részletes magyarázatokkal és betekintésekkel | Jó dokumentáció, amely lefedi az összes szükséges elemet | Alapvető dokumentáció minimális magyarázatokkal | Hiányos vagy hiányzó dokumentáció |

## Hasznos Források

### Elrendezési Módszerek Útmutatói
- 📖 [Teljes útmutató a Flexboxhoz](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Teljes útmutató a CSS Gridhez](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Válaszd a megfelelő eszközt](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Böngésző Tesztelési Eszközök
- 🛠️ [Böngésző DevTools Reszponzív Mód](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Funkció Támogatás](https://caniuse.com/)
- 🛠️ [BrowserStack - Keresztböngészős Tesztelés](https://www.browserstack.com/)

### Kódminőség Eszközök
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Kontraszt Ellenőrző](https://webaim.org/resources/contrastchecker/)

## Bónusz Kihívások

🌟 **Fejlett Elrendezések**: Valósítsd meg a Flexboxot ÉS a Gridet a dizájn különböző részein  
🌟 **Animáció Integráció**: Adj hozzá CSS átmeneteket vagy animációkat, amelyek működnek az új elrendezéssel  
🌟 **Sötét Mód**: Valósíts meg egy CSS egyéni tulajdonságokon alapuló téma váltót  
🌟 **Konténer Lekérdezések**: Használj modern konténer lekérdezési technikákat komponens szintű reszponzivitás érdekében  

> 💡 **Ne feledd**: A cél nem csak az, hogy működjön, hanem hogy megértsd, MIÉRT a választott elrendezési módszer a legjobb megoldás erre a konkrét dizájn kihívásra!

---

**Felelősségi nyilatkozat**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.