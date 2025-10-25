<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-24T20:33:52+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "hu"
}
-->
# Űrjáték készítése 4. rész: Lézer hozzáadása és ütközések érzékelése

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/35)

Gondolj arra a pillanatra a Star Wars-ban, amikor Luke proton torpedói eltalálták a Halálcsillag kipufogónyílását. Az a pontos ütközésérzékelés megváltoztatta a galaxis sorsát! A játékokban az ütközésérzékelés ugyanígy működik - meghatározza, mikor lépnek kölcsönhatásba az objektumok, és mi történik utána.

Ebben a leckében lézerfegyvereket adsz hozzá az űrjátékodhoz, és megvalósítod az ütközésérzékelést. Ahogy a NASA küldéstervezői kiszámítják az űrhajók pályáját, hogy elkerüljék a törmeléket, te is megtanulod érzékelni, amikor a játékobjektumok keresztezik egymást. Ezt kisebb, egymásra épülő lépésekre bontjuk.

A végére egy működő harci rendszert hozol létre, ahol a lézerek elpusztítják az ellenségeket, és az ütközések játékeseményeket váltanak ki. Ugyanezeket az ütközési elveket használják mindenben, a fizikai szimulációktól kezdve az interaktív webes felületekig.

✅ Kutass egy kicsit az első számítógépes játékról, amit valaha írtak. Mi volt a funkciója?

## Ütközésérzékelés

Az ütközésérzékelés olyan, mint az Apollo holdmodul közelségérzékelői - folyamatosan ellenőrzi a távolságokat, és riasztást ad, ha az objektumok túl közel kerülnek egymáshoz. A játékokban ez a rendszer határozza meg, mikor lépnek kölcsönhatásba az objektumok, és mi történjen utána.

Az általunk használt megközelítés minden játékobjektumot téglalapként kezel, hasonlóan ahhoz, ahogy a légiforgalmi irányító rendszerek egyszerű geometriai alakzatokat használnak a repülőgépek nyomon követésére. Ez a téglalap-alapú módszer talán alapvetőnek tűnik, de számítási szempontból hatékony, és a legtöbb játékszcenárióban jól működik.

### Téglalap reprezentáció

Minden játékobjektumnak koordinátahatárokra van szüksége, hasonlóan ahhoz, ahogy a Mars Pathfinder rover feltérképezte helyzetét a Mars felszínén. Így határozzuk meg ezeket a határkoordinátákat:

```javascript
rectFromGameObject() {
  return {
    top: this.y,
    left: this.x,
    bottom: this.y + this.height,
    right: this.x + this.width
  }
}
```

**Részletezzük:**
- **Felső él**: Ez az objektum függőleges kezdőpontja (y pozíciója)
- **Bal él**: Ez a vízszintes kezdőpontja (x pozíciója)
- **Alsó él**: Add hozzá a magasságot az y pozícióhoz - most már tudod, hol ér véget!
- **Jobb él**: Add hozzá a szélességet az x pozícióhoz - és megvan a teljes határ.

### Metszési algoritmus

A téglalapok metszésének érzékelése hasonló logikát használ, mint ahogy a Hubble Űrteleszkóp meghatározza, hogy a látómezőjében lévő égitestek átfedik-e egymást. Az algoritmus a szétválást ellenőrzi:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**A szétválási teszt úgy működik, mint a radar rendszerek:**
- Teljesen jobbra van-e a 2. téglalap az 1. téglalaptól?
- Teljesen balra van-e a 2. téglalap az 1. téglalaptól?
- Teljesen alul van-e a 2. téglalap az 1. téglalaptól?
- Teljesen felül van-e a 2. téglalap az 1. téglalaptól?

Ha egyik feltétel sem igaz, akkor a téglalapoknak átfedésben kell lenniük. Ez a megközelítés tükrözi, ahogy a radar kezelők meghatározzák, hogy két repülőgép biztonságos távolságban van-e.

## Objektumok életciklusának kezelése

Amikor egy lézer eltalál egy ellenséget, mindkét objektumot el kell távolítani a játékból. Azonban az objektumok törlése a ciklus közepén összeomlást okozhat - ezt a leckét az Apollo Guidance Computer korai számítógépes rendszereinél tanulták meg. Ehelyett egy "törlésre jelölés" megközelítést használunk, amely biztonságosan eltávolítja az objektumokat a képkockák között.

Így jelölünk meg valamit eltávolításra:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Miért működik ez a megközelítés:**
- Az objektumot "halottnak" jelöljük, de nem töröljük azonnal
- Ez lehetővé teszi, hogy az aktuális játék képkocka biztonságosan befejeződjön
- Nincs összeomlás abból, hogy valamit próbálunk használni, ami már nem létezik!

Ezután kiszűrjük a megjelölt objektumokat a következő renderelési ciklus előtt:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Mit csinál ez a szűrés:**
- Friss listát hoz létre csak az "élő" objektumokkal
- Kidobja azokat, amelyek "halottnak" vannak jelölve
- Zökkenőmentesen tartja a játékot
- Megakadályozza a memória túlterhelését az elpusztított objektumok felhalmozódása miatt

## Lézer mechanika megvalósítása

A lézer lövedékek a játékokban ugyanazon az elven működnek, mint a Star Trek fotontorpedói - diszkrét objektumok, amelyek egyenes vonalban haladnak, amíg el nem találnak valamit. Minden szóköz billentyű lenyomása új lézer objektumot hoz létre, amely a képernyőn mozog.

Ahhoz, hogy ez működjön, néhány különböző elemet kell összehangolnunk:

**Kulcsfontosságú elemek a megvalósításhoz:**
- **Lézer objektumok létrehozása**, amelyek a hős pozíciójából indulnak
- **Billentyűzet bemenet kezelése**, hogy a lézer létrehozását kiváltsa
- **Lézer mozgásának és életciklusának kezelése**
- **Vizualizáció megvalósítása** a lézer lövedékekhez

## Lövési sebesség szabályozásának megvalósítása

Korlátlan lövési sebesség túlterhelné a játék motort, és túl könnyűvé tenné a játékot. A valódi fegyverrendszerek hasonló korlátokkal szembesülnek - még az USS Enterprise fázerei is időt igényeltek a feltöltéshez a lövések között.

Egy lehűlési rendszert fogunk megvalósítani, amely megakadályozza a gyors tüzelést, miközben fenntartja a gyors reagálást:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time);
  }
}

class Weapon {
  constructor() {
    this.cooldown = null;
  }
  
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // Create laser projectile
      this.cooldown = new Cooldown(500);
    } else {
      // Weapon is still cooling down
    }
  }
}
```

**Hogyan működik a lehűlési rendszer:**
- Létrehozáskor a fegyver "forró" állapotban van (még nem lőhet)
- A várakozási idő után "hideg" állapotba kerül (készen áll a lövésre)
- Lövés előtt ellenőrizzük: "Hideg a fegyver?"
- Ez megakadályozza a gyors kattintást, miközben a vezérlés érzékeny marad

✅ Nézd meg az űrjáték sorozat 1. leckéjét, hogy emlékeztesd magad a lehűlési rendszerekre.

## Ütközési rendszer építése

A meglévő űrjáték kódodat kiterjeszted, hogy létrehozz egy ütközésérzékelő rendszert. Ahogy a Nemzetközi Űrállomás automatikus ütközéselkerülő rendszere, a játékod folyamatosan figyeli az objektumok pozícióját, és reagál az átfedésekre.

A korábbi lecke kódjából kiindulva hozzáadod az ütközésérzékelést konkrét szabályokkal, amelyek az objektumok kölcsönhatásait irányítják.

> 💡 **Profi tipp**: A lézer sprite már benne van az eszközök mappájában, és hivatkozva van a kódodban, készen az implementációra.

### Ütközési szabályok megvalósítása

**Hozzáadandó játékmenet mechanikák:**
1. **Lézer eltalálja az ellenséget**: Az ellenség objektum megsemmisül, amikor egy lézer lövedék eltalálja
2. **Lézer eléri a képernyő határát**: A lézer eltávolításra kerül, amikor eléri a képernyő felső szélét
3. **Ellenség és hős ütközése**: Mindkét objektum megsemmisül, amikor keresztezik egymást
4. **Ellenség eléri az alsó részt**: Játék vége feltétel, amikor az ellenségek elérik a képernyő alját

## Fejlesztési környezet beállítása

Jó hír - már előkészítettük számodra az alapokat! Minden játékeszközöd és alapstruktúrád készen áll a `your-work` almappában, készen arra, hogy hozzáadd a menő ütközési funkciókat.

### Projekt struktúra

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**A fájlstruktúra megértése:**
- **Tartalmazza** az összes sprite képet, amely a játékobjektumokhoz szükséges
- **Tartalmazza** a fő HTML dokumentumot és JavaScript alkalmazásfájlt
- **Biztosítja** a helyi fejlesztési szerver csomagkonfigurációját

### Fejlesztési szerver indítása

Navigálj a projekt mappádba, és indítsd el a helyi szervert:

```bash
cd your-work
npm start
```

**Ez a parancssorozat:**
- **Átvált** a munkaprojekt mappádba
- **Elindít** egy helyi HTTP szervert a `http://localhost:5000` címen
- **Kiszolgálja** a játékfájlokat tesztelésre és fejlesztésre
- **Lehetővé teszi** az élő fejlesztést automatikus újratöltéssel

Nyisd meg a böngésződet, és navigálj a `http://localhost:5000` címre, hogy lásd a jelenlegi játékállapotot a hőssel és az ellenségekkel a képernyőn.

### Lépésről lépésre történő megvalósítás

Ahogy a NASA módszeresen programozta a Voyager űrszondát, mi is módszeresen fogjuk megvalósítani az ütközésérzékelést, lépésről lépésre építve minden komponenst.

#### 1. Téglalap ütközési határok hozzáadása

Először tanítsuk meg a játékobjektumokat, hogyan írják le a határaikat. Add hozzá ezt a metódust a `GameObject` osztályhoz:

```javascript
rectFromGameObject() {
    return {
      top: this.y,
      left: this.x,
      bottom: this.y + this.height,
      right: this.x + this.width,
    };
  }
```

**Ez a metódus:**
- **Létrehoz** egy téglalap objektumot pontos határkoordinátákkal
- **Kiszámítja** az alsó és jobb éleket a pozíció plusz méretek alapján
- **Visszaad** egy objektumot, amely készen áll az ütközésérzékelő algoritmusokra
- **Egységes interfészt biztosít** minden játékobjektum számára

#### 2. Metszésérzékelés megvalósítása

Most hozzuk létre az ütközés detektívünket - egy függvényt, amely meg tudja mondani, amikor két téglalap átfedi egymást:

```javascript
function intersectRect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}
```

**Ez az algoritmus:**
- **Teszteli** négy szétválási feltételt a téglalapok között
- **`false`-t ad vissza**, ha bármelyik szétválási feltétel igaz
- **Ütközést jelez**, amikor nincs szétválás
- **Hatékony metszésérzékelést biztosít** negációs logikával

#### 3. Lézer lövési rendszer megvalósítása

Itt kezd izgalmassá válni! Állítsuk be a lézer lövési rendszert.

##### Üzenetkonstansok

Először definiáljunk néhány üzenettípust, hogy a játék különböző részei kommunikálni tudjanak egymással:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Ezek a konstansok:**
- **Egységesítik** az eseményneveket az alkalmazásban
- **Lehetővé teszik** a következetes kommunikációt a játék rendszerei között
- **Megakadályozzák** a hibákat az eseménykezelő regisztrációban

##### Billentyűzet bemenet kezelése

Add hozzá a szóköz billentyű érzékelését a billentyű eseményfigyelőhöz:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Ez a bemenetkezelő:**
- **Érzékeli** a szóköz billentyű lenyomását a keyCode 32 segítségével
- **Kibocsát** egy egységesített eseményüzenetet
- **Lehetővé teszi** a lövési logika leválasztását

##### Eseményfigyelő beállítása

Regisztráld a lövési viselkedést az `initGame()` függvényben:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Ez az eseményfigyelő:**
- **Reagál** a szóköz billentyű eseményekre
- **Ellenőrzi** a lövési lehűlési állapotot
- **Létrehoz** lézert, amikor engedélyezett

Add hozzá az ütközéskezelést a lézer-ellenség interakciókhoz:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Ez az ütközéskezelő:**
- **Fogadja** az ütközési esemény adatokat mindkét objektummal
- **Megjelöli** mindkét objektumot eltávolításra
- **Biztosítja** a megfelelő tisztítást az ütközés után

#### 4. Lézer osztály létrehozása

Valósíts meg egy lézer lövedéket, amely felfelé mozog, és kezeli saját életciklusát:

```javascript
class Laser extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 9;
    this.height = 33;
    this.type = 'Laser';
    this.img = laserImg;
    
    let id = setInterval(() => {
      if (this.y > 0) {
        this.y -= 15;
      } else {
        this.dead = true;
        clearInterval(id);
      }
    }, 100);
  }
}
```

**Ez az osztály:**
- **Kiterjeszti** a GameObject-et, hogy örökölje az alapvető funkciókat
- **Beállítja** a lézer sprite megfelelő méreteit
- **Automatikus felfelé mozgást hoz létre** a `setInterval()` segítségével
- **Kezeli** az önmegsemmisítést, amikor eléri a képernyő tetejét
- **Kezeli** saját animációs időzítését és tisztítását

#### 5. Ütközésérzékelő rendszer megvalósítása

Hozz létre egy átfogó ütközésérzékelő függvényt:

```javascript
function updateGameObjects() {
  const enemies = gameObjects.filter(go => go.type === 'Enemy');
  const lasers = gameObjects.filter(go => go.type === "Laser");
  
  // Test laser-enemy collisions
  lasers.forEach((laser) => {
    enemies.forEach((enemy) => {
      if (intersectRect(laser.rectFromGameObject(), enemy.rectFromGameObject())) {
        eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
          first: laser,
          second: enemy,
        });
      }
    });
  });

  // Remove destroyed objects
  gameObjects = gameObjects.filter(go => !go.dead);
}
```

**Ez az ütközési rendszer:**
- **Szűri** a játékobjektumokat típus szerint a hatékony tesztelés érdekében
- **Teszteli** minden lézert minden ellenséggel átfedésekre
- **Kibocsát** ütközési eseményeket, amikor átfedések észlelhetők
- **Tisztítja** az elpusztított objektumokat az ütközés feldolgozása után

> ⚠️ **Fontos**: Add hozzá az `updateGameObjects()`-t a fő játékciklushoz a `window.onload`-ban, hogy engedélyezd az ütközésérzékelést.

#### 6. Lehűlési rendszer hozzáadása a Hero osztályhoz

Egészítsd ki a Hero osztályt lövési mechanikával

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.