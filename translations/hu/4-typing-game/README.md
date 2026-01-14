<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efa2ab875b8bb5a7883816506da6b6d2",
  "translation_date": "2026-01-07T02:21:04+00:00",
  "source_file": "4-typing-game/README.md",
  "language_code": "hu"
}
-->
# Eseményvezérelt programozás - Készíts egy gépelős játékot

```mermaid
journey
    title A gépelős játék fejlesztési utad
    section Alapok
      Játékszerkezet tervezése: 3: Student
      Felhasználói felület tervezése: 4: Student
      HTML elemek beállítása: 4: Student
    section Funkcionalitás
      Felhasználói bemenet kezelése: 4: Student
      Időzítés nyomon követése: 5: Student
      Pontosság kiszámítása: 5: Student
    section Jellemzők
      Vizuális visszajelzés hozzáadása: 5: Student
      Játéklogika megvalósítása: 5: Student
      Élmény csiszolása: 5: Student
```
## Bevezetés

Itt van valami, amit minden fejlesztő tud, de ritkán beszél róla: gyorsan gépelni egy szuperképesség! 🚀 Gondolj csak bele – minél gyorsabban tudod az ötleteidet az agyadból a kódszerkesztőbe juttatni, annál jobban áramolhat a kreativitásod. Olyan, mintha közvetlen csővezeték lenne a gondolataid és a képernyő között.

```mermaid
pie title Játékfunkciók
    "Valós idejű visszajelzés" : 25
    "Teljesítménykövetés" : 20
    "Interaktív felhasználói felület" : 20
    "Időzítő rendszer" : 15
    "Idézetkezelés" : 10
    "Eredmények megjelenítése" : 10
```
Szeretnéd tudni a legjobb módszerek egyikét ennek a képességnek a fejlesztésére? Kitaláltad – készítünk egy játékot!

```mermaid
flowchart LR
    A[Játékos elindítja a játékot] --> B[Random idézet megjelenítve]
    B --> C[Játékos gépel karaktereket]
    C --> D{Karakter helyes?}
    D -->|Igen| E[Zöld kiemelés]
    D -->|Nem| F[Piros kiemelés]
    E --> G[Pontosság frissítése]
    F --> G
    G --> H{Idézet befejezett?}
    H -->|Nem| C
    H -->|Igen| I[Számolja a WPM-et]
    I --> J[Eredmények megjelenítése]
    J --> K[Még egyszer játszik?]
    K -->|Igen| B
    K -->|Nem| L[Játék vége]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```
> Készítsünk együtt egy szuper gépelős játékot!

Készen állsz arra, hogy az összes eddig tanult JavaScript, HTML és CSS tudásodat bevetd? Olyan gépelős játékot fogunk készíteni, amely véletlenszerű idézetekkel tesztel téged a legendás detektív [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes) tollából. A játék követni fogja, milyen gyorsan és pontosan tudsz gépelni – és hidd el, ez sokkal addiktívabb, mint gondolnád!

```mermaid
mindmap
  root((Írásjáték Fejlesztése))
    User Interface
      Input Elements
      Visual Feedback
      Responsive Design
      Accessibility
    Game Logic
      Quote Selection
      Timer Management
      Accuracy Tracking
      Score Calculation
    Event Handling
      Keyboard Input
      Button Clicks
      Real-time Updates
      Game State Changes
    Performance Metrics
      Words Per Minute
      Character Accuracy
      Error Tracking
      Progress Display
    User Experience
      Immediate Feedback
      Clear Instructions
      Engaging Content
      Achievement System
```
![demo](../../../4-typing-game/images/demo.gif)

## Amiket Tudnod Kell

```mermaid
flowchart TD
    A[Felhasználói művelet] --> B{Eseménytípus?}
    B -->|Billentyűleütés| C[Billentyűzet esemény]
    B -->|Gombkattintás| D[Egér esemény]
    B -->|Időzítő| E[Idő esemény]
    
    C --> F[Karakter ellenőrzése]
    D --> G[Játék indítása/visszaállítása]
    E --> H[Időzítő frissítése]
    
    F --> I{Helyes?}
    I -->|Igen| J[Zöld kiemelés]
    I -->|Nem| K[Piros kiemelés]
    
    J --> L[Pontszám frissítése]
    K --> L
    L --> M[Játék állapotának ellenőrzése]
    
    G --> N[Új idézet generálása]
    H --> O[Idő megjelenítése]
    
    M --> P{Játék befejeződött?}
    P -->|Igen| Q[Eredmények megjelenítése]
    P -->|Nem| R[Játék folytatása]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```
Mielőtt belevágnánk, győződj meg róla, hogy ezekkel a fogalmakkal magabiztosan bánsz (ne aggódj, ha egy kis gyors ismétlés kell – mindannyian jártunk már így!):

- Szövegbeviteli mezők és gombok létrehozása
- CSS és osztályokkal történő stílusbeállítás  
- JavaScript alapok
  - Tömb létrehozása
  - Véletlenszám generálása
  - Aktuális idő lekérése

Ha valamelyik kicsit rozsdásnak tűnik, az teljesen rendben van! Néha a legjobb módja annak, hogy megszilárdítsd a tudásod, ha belevágsz egy projektbe, és menet közben fedezed fel a dolgokat.

### 🔄 **Pedagógiai ellenőrzés**
**Alapok felmérése**: Fejlesztés megkezdése előtt győződj meg róla, hogy érted a következőket:
- ✅ Hogyan működnek a HTML űrlapok és beviteli elemek
- ✅ CSS osztályok és dinamikus stílusok
- ✅ JavaScript eseményfigyelők és kezelők
- ✅ Tömb-kezelés és véletlenszerű kiválasztás
- ✅ Időmérés és számítások

**Gyors önellenőrzés**: El tudod magyarázni, hogyan működnek ezek a fogalmak együtt egy interaktív játékban?
- **Események** aktiválódnak, amikor a felhasználók interakcióba lépnek az elemekkel
- **Kezelők** feldolgozzák ezeket az eseményeket és frissítik a játék állapotát
- **CSS** vizuális visszajelzést ad a felhasználói műveletekre
- **Időzítés** lehetővé teszi a teljesítmény mérését és a játék előrehaladását

```mermaid
quadrantChart
    title Gépelős játék készségek fejlesztése
    x-axis Kezdő --> Szakértő
    y-axis Statikus --> Interaktív
    quadrant-1 Fejlett játékok
    quadrant-2 Valós idejű alkalmazások
    quadrant-3 Alap oldalak
    quadrant-4 Interaktív oldalak
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```
## Álljunk neki!

[Gépelős játék készítése eseményvezérelt programozással](./typing-game/README.md)

### ⚡ **Mit tehetsz az elkövetkező 5 percben**
- [ ] Nyisd meg a böngésző konzolt és próbálj meg billentyűzet eseményeket figyelni `addEventListener` segítségével
- [ ] Készíts egy egyszerű HTML oldalt egy beviteli mezővel, és teszteld a gépelés észlelését
- [ ] Gyakorold a szöveg manipulálását a begépelt és a célszöveg összehasonlításával
- [ ] Kísérletezz a `setTimeout`-tal, hogy megértsd az időzítő funkciókat

### 🎯 **Mit érhetsz el ebben az órában**
- [ ] Fejezd be az utólagos kvízt, és értsd meg az eseményvezérelt programozást
- [ ] Építsd fel a gépelős játék alapváltozatát szavas validációval
- [ ] Adj vizuális visszajelzést helyes és hibás gépelésre
- [ ] Valósíts meg egy egyszerű pontszám rendszert a sebesség és pontosság alapján
- [ ] Stílusold a játékot CSS segítségével, hogy vizuálisan vonzó legyen

### 📅 **Hétközbeni játékfejlesztés**
- [ ] Fejezd be a teljes gépelős játékot minden funkcióval és csiszolással
- [ ] Adj hozzá nehézségi szinteket változó szóbonyolultsággal
- [ ] Valósíts meg felhasználói statisztika követést (szavak per perc, pontosság az idő múlásával)
- [ ] Készíts hanghatásokat és animációkat a jobb felhasználói élményért
- [ ] Tedd mobilra optimalizálttá érintőképernyős eszközökhöz
- [ ] Oszd meg a játékod online, és gyűjts visszajelzést a felhasználóktól

### 🌟 **Hónapos interaktív fejlesztés**
- [ ] Építs több játékot, amelyek különböző interakciós mintákat vizsgálnak
- [ ] Tanulj meg játék ciklusokról, állapotkezelésről és teljesítmény-optimalizálásról
- [ ] Vegyél részt nyílt forráskódú játékfejlesztési projektekben
- [ ] Sajátítsd el az előrehaladott időzítési koncepciókat és a sima animációkat
- [ ] Hozz létre egy portfóliót, ami különféle interaktív alkalmazásokat mutat be
- [ ] Mentorálj másokat, akik érdeklődnek a játékfejlesztés és felhasználói interakció iránt

## 🎯 A gépelős játék mesteri ütemezése

```mermaid
timeline
    title Játékfejlesztési tanulási folyamat
    
    section Beállítás (10 perc)
        Projekt struktúra: HTML alapok
                         : CSS stílus beállítás
                         : JavaScript fájl létrehozás
        
    section Felhasználói felület (20 perc)
        Interaktív elemek: Bemeneti mezők
                         : Gombvezérlők
                         : Megjelenítési területek
                         : Reszponzív elrendezés
        
    section Eseménykezelés (25 perc)
        Felhasználói interakció: Billentyűzet események
                              : Egér események
                              : Valós idejű visszajelzés
                              : Állapotkezelés
        
    section Játék logika (30 perc)
        Alapfunkcionalitás: Idézet generálás
                           : Karakter összehasonlítás
                           : Pontosság számítás
                           : Időzítő megvalósítása
        
    section Teljesítmény követés (35 perc)
        Mutatók & elemzések: WPM számítás
                            : Hibakövetés
                            : Haladás vizualizáció
                            : Eredmények megjelenítése
        
    section Finomhangolás & fejlesztés (45 perc)
        Felhasználói élmény: Vizuális visszajelzés
                           : Hanghatások
                           : Animációk
                           : Akadálymentesítési funkciók
        
    section Haladó funkciók (1 hét)
        Kiterjesztett funkcionalitás: Nehézségi szintek
                                   : Ranglisták
                                   : Egyedi idézetek
                                   : Többjátékos opciók
        
    section Professzionális készségek (1 hónap)
        Játékfejlesztés: Teljesítmény optimalizálás
                        : Kód architektúra
                        : Tesztelési stratégiák
                        : Telepítési minták
```
### 🛠️ Játékfejlesztő eszköztárad összefoglalója

A projekt befejezése után elsajátítod:
- **Eseményvezérelt programozás**: Reagáló felhasználói felületek, amelyek válaszolnak a bemenetre
- **Valós idejű visszajelzés**: Azonnali vizuális és teljesítménybeli frissítések
- **Teljesítménymérés**: Pontos időzítés és pontozási rendszerek
- **Játékmenet állapotkezelés**: Az alkalmazás folyamatának és felhasználói élményének irányítása
- **Interaktív dizájn**: Lekötő, függőséget okozó felhasználói élmények készítése
- **Modern webes API-k**: Böngésző képességek kihasználása gazdag interakciókhoz
- **Akadálymentesítési minták**: Minden felhasználó számára befogadó tervezés

**Valós alkalmazási területek**: Ezek a képességek közvetlenül alkalmazhatók
- **Webes alkalmazások**: Bármilyen interaktív felület vagy irányítópult
- **Oktatási szoftverek**: Tanulási platformok és készségfelmérő eszközök
- **Hatékonyságnövelő eszközök**: Szövegszerkesztők, IDE-k és együttműködési szoftverek
- **Játékipar**: Böngészős játékok és interaktív szórakoztatás
- **Mobilfejlesztés**: Érintőképernyős felületek és gesztuskezelés

**Következő lépés**: Készen állsz, hogy felfedezd a fejlett játékszkripteket, valós idejű többszereplős rendszereket, vagy összetett interaktív alkalmazásokat!

## Köszönetnyilvánítás

Szerző: ♥️ [Christopher Harrison](http://www.twitter.com/geektrainer)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Jogi nyilatkozat**:
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) mesterséges intelligencia fordítószolgáltatásával készült. Bár a pontosságra törekszünk, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti, anyanyelvi dokumentum tekintendő a hiteles forrásnak. Fontos információk esetén professzionális, emberi fordítást javasolunk. Nem vállalunk felelősséget az ebből eredő félreértésekért vagy téves értelmezésekért.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->