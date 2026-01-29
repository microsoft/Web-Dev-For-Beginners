# Készíts egy mintajátékot

## Feladat áttekintése

Most, hogy már elsajátítottad a játék vége feltételeit és az újraindítási funkciót az űrjátékodban, itt az ideje, hogy ezeket a fogalmakat egy teljesen új játékélményben alkalmazd. Tervezd meg és építsd fel saját játékodat, amely bemutatja a különböző befejezési mintákat és újraindítási mechanizmusokat.

Ez a feladat arra ösztönöz, hogy kreatívan gondolkodj a játéktervezésről, miközben gyakorolod az eddig tanult technikai készségeket. Fedezd fel a különböző győzelmi és vereségi forgatókönyveket, valósíts meg játékos fejlődést, és hozz létre izgalmas újraindítási élményeket.

## Projektkövetelmények

### Alapvető játékfunkciók

A játékodnak tartalmaznia kell az alábbi alapvető elemeket:

**Befejezési feltételek változatossága**: Legalább két különböző módot kell megvalósítanod, ahogyan a játék véget érhet:
- **Pont-alapú győzelem**: A játékos eléri a célpontszámot vagy összegyűjt bizonyos tárgyakat
- **Élet-alapú vereség**: A játékos elveszíti az összes rendelkezésre álló életet vagy életerő pontot
- **Cél teljesítése**: Minden ellenség legyőzése, bizonyos tárgyak összegyűjtése vagy célok elérése
- **Idő-alapú**: A játék véget ér egy meghatározott időtartam után vagy amikor a visszaszámlálás eléri a nullát

**Újraindítási funkció**: 
- **Játékállapot törlése**: Távolítsd el az összes korábbi játékelemet és állítsd vissza a változókat
- **Rendszerek újraindítása**: Kezdj frissen új játékos statisztikákkal, ellenségekkel és célokkal
- **Felhasználóbarát vezérlés**: Adj egyértelmű utasításokat a játék újraindításához

**Játékos visszajelzés**:
- **Győzelmi üzenetek**: Ünnepeld a játékos teljesítményét pozitív visszajelzésekkel
- **Vereségi üzenetek**: Adj bátorító üzeneteket, amelyek motiválják az újrajátszást
- **Haladási mutatók**: Mutasd az aktuális pontszámot, életeket vagy célállapotot

### Játékötletek és inspiráció

Válassz az alábbi játékötletek közül, vagy alkoss sajátot:

#### 1. Konzolos kalandjáték
Hozz létre egy szöveges kalandjátékot harci mechanikával:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Megvalósítandó kulcsfontosságú funkciók:**
- **Körökre osztott harc** különböző támadási opciókkal
- **Életerő pontok** a játékos és az ellenségek számára
- **Tárgylista rendszer** érmék vagy tárgyak gyűjtésére
- **Többféle ellenségtípus** különböző nehézségi szintekkel
- **Győzelmi feltétel**, amikor minden ellenség legyőzésre kerül

#### 2. Gyűjtögetős játék
- **Cél**: Gyűjts össze meghatározott tárgyakat, miközben elkerülöd az akadályokat
- **Befejezési feltételek**: Érd el a célgyűjtési számot vagy veszítsd el az összes életed
- **Haladás**: A tárgyak egyre nehezebben elérhetővé válnak, ahogy a játék folytatódik

#### 3. Kirakós játék
- **Cél**: Oldj meg egyre nehezebb kirakósokat
- **Befejezési feltételek**: Teljesítsd az összes szintet vagy fogyj ki a lépésekből/időből
- **Újraindítás**: Állítsd vissza az első szintre, törölt haladással

#### 4. Védekezős játék
- **Cél**: Védd meg a bázisodat az ellenségek hullámaitól
- **Befejezési feltételek**: Túlélj minden hullámot (győzelem) vagy a bázis elpusztul (vereség)
- **Haladás**: Az ellenségek hullámai egyre nehezebbé és nagyobb számban érkeznek

## Megvalósítási irányelvek

### Kezdés

1. **Tervezd meg a játékod dizájnját**:
   - Vázold fel az alapvető játékmenetet
   - Határozd meg egyértelműen a befejezési feltételeket
   - Azonosítsd, hogy milyen adatokat kell visszaállítani az újraindításkor

2. **Állítsd be a projekt struktúráját**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Hozd létre az alapvető játékmenetet**:
   - Inicializáld a játékállapotot
   - Kezeld a felhasználói bemeneteket
   - Frissítsd a játékmenetet
   - Ellenőrizd a befejezési feltételeket
   - Rendereld az aktuális állapotot

### Technikai követelmények

**Használj modern JavaScriptet**: 
- Alkalmazd a `const` és `let` változó deklarációkat
- Használj nyílfüggvényeket, ahol megfelelő
- Valósíts meg ES6+ funkciókat, mint például sablonliterálok és destrukturálás

**Eseményvezérelt architektúra**:
- Hozz létre eseménykezelőket a felhasználói interakciókhoz
- Valósíts meg játékállapot változásokat eseményeken keresztül
- Használj eseményfigyelőket az újraindítási funkcióhoz

**Tiszta kód gyakorlatok**:
- Írj olyan függvényeket, amelyek egyetlen felelősséggel bírnak
- Használj leíró változó- és függvényneveket
- Adj kommenteket, amelyek magyarázzák a játékmenetet és szabályokat
- Szervezd a kódot logikus szekciókba

## Beküldési követelmények

### Leadandók

1. **Teljes játékfájlok**: Minden HTML, CSS és JavaScript fájl, amely szükséges a játék futtatásához
2. **README.md**: Dokumentáció, amely elmagyarázza:
   - Hogyan kell játszani a játékot
   - Milyen befejezési feltételeket valósítottál meg
   - Újraindítási utasítások
   - Bármilyen különleges funkció vagy mechanika
3. **Kódközi kommentek**: Egyértelmű magyarázatok a játékmenet logikájáról és algoritmusairól

### Tesztelési ellenőrzőlista

Beküldés előtt ellenőrizd, hogy a játékod:

- [ ] **Hiba nélkül fut** a böngésző konzoljában
- [ ] **Több befejezési feltételt valósít meg**, ahogy előírtuk
- [ ] **Megfelelően újraindul** tiszta állapot visszaállítással
- [ ] **Egyértelmű visszajelzést ad** a játékosoknak a játék állapotáról
- [ ] **Modern JavaScript** szintaxist és legjobb gyakorlatokat használ
- [ ] **Átfogó dokumentációt tartalmaz** a README.md fájlban

## Értékelési rubrika

| Kritérium | Kiváló (4) | Jó (3) | Fejlődő (2) | Kezdő (1) |
|----------|------------|--------|-------------|-----------|
| **Játékfunkcionalitás** | Teljes játék több befejezési feltétellel, zökkenőmentes újraindítással és kidolgozott játékmenettel | Teljes játék alapvető befejezési feltételekkel és működő újraindítási mechanizmussal | Részleges játék néhány befejezési feltétellel, az újraindítás kisebb hibákkal | Hiányos játék korlátozott funkcionalitással és jelentős hibákkal |
| **Kódminőség** | Tiszta, jól szervezett kód modern JavaScript gyakorlatokkal, átfogó kommentekkel és kiváló struktúrával | Jó kódszervezés modern szintaxissal, megfelelő kommentekkel és világos struktúrával | Alapvető kódszervezés néhány modern gyakorlattal, minimális kommentekkel | Gyenge kódszervezés, elavult szintaxis, hiányzó kommentek és struktúra |
| **Felhasználói élmény** | Intuitív játékmenet egyértelmű utasításokkal, kiváló visszajelzésekkel és lebilincselő befejezés/újraindítás élménnyel | Jó játékmenet megfelelő utasításokkal és visszajelzésekkel, működő befejezés/újraindítás | Alapvető játékmenet minimális utasításokkal, korlátozott visszajelzéssel a játék állapotáról | Zavaros játékmenet, nem egyértelmű utasításokkal és gyenge felhasználói visszajelzéssel |
| **Technikai megvalósítás** | A játékfejlesztési koncepciók, eseménykezelés és állapotkezelés mesteri bemutatása | Szilárd megértés a játék koncepciókról, jó megvalósítással | Alapvető megértés elfogadható megvalósítással | Korlátozott megértés gyenge megvalósítással |
| **Dokumentáció** | Átfogó README egyértelmű utasításokkal, jól dokumentált kód és alapos tesztelési bizonyíték | Jó dokumentáció egyértelmű utasításokkal és megfelelő kódközi kommentekkel | Alapvető dokumentáció minimális utasításokkal | Gyenge vagy hiányzó dokumentáció |

### Értékelési skála
- **Kiváló (16-20 pont)**: Meghaladja az elvárásokat kreatív funkciókkal és kidolgozott megvalósítással
- **Jó (12-15 pont)**: Minden követelménynek megfelel, szilárd kivitelezéssel
- **Fejlődő (8-11 pont)**: A legtöbb követelménynek megfelel, kisebb problémákkal
- **Kezdő (4-7 pont)**: Néhány követelménynek megfelel, de jelentős fejlesztésre szorul

## További tanulási források

- [MDN Játékfejlesztési útmutató](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Játékfejlesztési oktatóanyagok](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Dokumentáció](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Játéktervezési alapelvek](https://www.gamasutra.com/blogs/)

> 💡 **Profi tipp**: Kezdj egyszerűen, és fokozatosan adj hozzá funkciókat. Egy jól kidolgozott egyszerű játék jobb, mint egy bonyolult játék hibákkal!

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.