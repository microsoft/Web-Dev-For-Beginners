<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-24T20:32:26+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "hu"
}
-->
# Űrjáték készítése 6. rész: Befejezés és újrakezdés

Minden nagyszerű játékhoz szükség van egyértelmű befejezési feltételekre és egy gördülékeny újrakezdési mechanizmusra. Már egy lenyűgöző űrjátékot építettél mozgással, harccal és pontszerzéssel - most itt az ideje, hogy hozzáadd az utolsó elemeket, amelyek teljessé teszik.

A játékod jelenleg végtelenül fut, mint a NASA által 1977-ben indított Voyager szondák - amelyek évtizedek óta utaznak az űrben. Bár ez rendben van az űrkutatás szempontjából, a játékoknak meghatározott végpontokra van szükségük, hogy kielégítő élményt nyújtsanak.

Ma megfelelő győzelmi/vereségi feltételeket és egy újrakezdési rendszert fogunk megvalósítani. A lecke végére egy olyan kifinomult játékot kapsz, amelyet a játékosok befejezhetnek és újra játszhatnak, akárcsak a klasszikus arcade játékok, amelyek meghatározták a médiumot.

## Előadás előtti kvíz

[Előadás előtti kvíz](https://ff-quizzes.netlify.app/web/quiz/39)

## A játék befejezési feltételeinek megértése

Mikor kell véget érnie a játékodnak? Ez az alapvető kérdés formálta a játéktervezést az arcade korszak óta. A Pac-Man akkor ér véget, amikor elkapnak a szellemek, vagy amikor az összes pontot begyűjtöd, míg a Space Invaders akkor ér véget, amikor az idegenek elérik az alját, vagy amikor mindet elpusztítod.

Mint a játék készítője, te határozod meg a győzelmi és vereségi feltételeket. Az űrjátékunkhoz itt van néhány bevált megközelítés, amelyek izgalmas játékmenetet teremtenek:

- **`N` ellenséges hajó megsemmisítése**: Gyakori, hogy ha a játékot különböző szintekre osztod, akkor `N` ellenséges hajót kell megsemmisítened a szint teljesítéséhez.
- **A hajód megsemmisült**: Vannak olyan játékok, ahol elveszíted a játékot, ha a hajód megsemmisül. Egy másik gyakori megközelítés az, hogy életek koncepcióját használod. Minden alkalommal, amikor a hajód megsemmisül, egy életet elveszítesz. Ha minden életet elveszítettél, akkor veszítesz.
- **`N` pontot gyűjtöttél**: Egy másik gyakori befejezési feltétel az, hogy pontokat gyűjtesz. Hogy hogyan szerzel pontokat, az rajtad múlik, de gyakori, hogy különböző tevékenységekhez rendelnek pontokat, például ellenséges hajó megsemmisítéséhez vagy tárgyak gyűjtéséhez, amelyeket a tárgyak *eldobnak*, amikor megsemmisülnek.
- **Szint teljesítése**: Ez több feltételt is magában foglalhat, például `X` ellenséges hajó megsemmisítése, `Y` pontok gyűjtése, vagy esetleg egy adott tárgy begyűjtése.

## A játék újrakezdési funkciójának megvalósítása

A jó játékok újrajátszhatóságot ösztönöznek gördülékeny újrakezdési mechanizmusokkal. Amikor a játékosok befejeznek egy játékot (vagy vereséget szenvednek), gyakran azonnal újra szeretnék kezdeni - akár azért, hogy megdöntsék a pontszámukat, akár hogy javítsák a teljesítményüket.

A Tetris tökéletes példája ennek: amikor a blokkok elérik a tetejét, azonnal új játékot kezdhetsz anélkül, hogy bonyolult menükön kellene navigálnod. Egy hasonló újrakezdési rendszert fogunk építeni, amely tisztán visszaállítja a játék állapotát, és gyorsan visszajuttatja a játékosokat az akcióba.

✅ **Reflexió**: Gondolj azokra a játékokra, amelyeket játszottál. Milyen feltételek mellett érnek véget, és hogyan ösztönöznek az újrakezdésre? Mi teszi az újrakezdési élményt gördülékennyé vagy frusztrálóvá?

## Amit építeni fogsz

A végső funkciókat fogod megvalósítani, amelyek átalakítják a projektedet egy teljes játékélménnyé. Ezek az elemek különböztetik meg a kifinomult játékokat az alapvető prototípusoktól.

**Íme, amit ma hozzáadunk:**

1. **Győzelmi feltétel**: Pusztítsd el az összes ellenséget, és kapj egy megfelelő ünneplést (megérdemelted!)
2. **Vereségi feltétel**: Fogyjanak el az életeid, és nézz szembe a vereség képernyőjével
3. **Újrakezdési mechanizmus**: Nyomd meg az Entert, hogy azonnal visszaugorj - mert egy játék sosem elég
4. **Állapotkezelés**: Tiszta lap minden alkalommal - nincs maradék ellenség vagy furcsa hibák az előző játékból

## Kezdjük el

Készítsd elő a fejlesztési környezetedet. Minden korábbi leckéből származó űrjáték fájlodnak készen kell állnia.

**A projektednek valahogy így kell kinéznie:**

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

**Indítsd el a fejlesztési szervert:**

```bash
cd your-work
npm start
```

**Ez a parancs:**
- Helyi szervert futtat a `http://localhost:5000` címen
- Megfelelően szolgáltatja a fájlokat
- Automatikusan frissíti a változtatásokat

Nyisd meg a `http://localhost:5000` címet a böngésződben, és ellenőrizd, hogy a játékod fut-e. Mozognod, lőnöd és interakcióba lépned kell az ellenségekkel. Ha ez megerősítést nyert, folytathatjuk a megvalósítást.

> 💡 **Profi tipp**: A Visual Studio Code figyelmeztetéseinek elkerülése érdekében deklaráld a `gameLoopId`-t a fájl tetején `let gameLoopId;` formában, ahelyett, hogy a `window.onload` függvényen belül deklarálnád. Ez követi a modern JavaScript változó deklarációs legjobb gyakorlatokat.

## Megvalósítási lépések

### 1. lépés: Befejezési feltételeket nyomon követő függvények létrehozása

Szükségünk van olyan függvényekre, amelyek figyelik, mikor kell véget érnie a játéknak. Mint az International Space Station szenzorai, amelyek folyamatosan figyelik a kritikus rendszereket, ezek a függvények folyamatosan ellenőrzik a játék állapotát.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Mi történik a háttérben:**
- **Ellenőrzi**, hogy a hősünknek elfogytak-e az életei (au!)
- **Számolja**, hány ellenség van még életben
- **`true` értéket ad vissza**, amikor a csatatér tiszta az ellenségektől
- **Egyszerű igaz/hamis logikát használ**, hogy egyértelmű legyen
- **Szűri** az összes játékelem között, hogy megtalálja a túlélőket

### 2. lépés: Eseménykezelők frissítése a befejezési feltételekhez

Most összekapcsoljuk ezeket a feltétel-ellenőrzéseket a játék eseményrendszerével. Minden ütközéskor a játék értékeli, hogy kiváltja-e a befejezési feltételt. Ez azonnali visszajelzést ad a kritikus játékeseményekről.

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
    first.dead = true;
    second.dead = true;
    hero.incrementPoints();

    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
    enemy.dead = true;
    hero.decrementLife();
    if (isHeroDead())  {
      eventEmitter.emit(Messages.GAME_END_LOSS);
      return; // loss before victory
    }
    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.GAME_END_WIN, () => {
    endGame(true);
});
  
eventEmitter.on(Messages.GAME_END_LOSS, () => {
  endGame(false);
});
```

**Mi történik itt:**
- **Lézer eltalálja az ellenséget**: Mindkettő eltűnik, pontokat kapsz, és ellenőrizzük, hogy nyertél-e
- **Ellenség eltalál téged**: Elveszítesz egy életet, és ellenőrizzük, hogy még életben vagy-e
- **Okos sorrend**: Először a vereséget ellenőrizzük (senki sem akar egyszerre nyerni és veszíteni!)
- **Azonnali reakciók**: Amint valami fontos történik, a játék tud róla

### 3. lépés: Új üzenetkonstansok hozzáadása

Új üzenettípusokat kell hozzáadnod a `Messages` konstans objektumhoz. Ezek a konstansok segítenek fenntartani a konzisztenciát és megelőzni a gépelési hibákat az eseményrendszerben.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**A fentiekben:**
- **Hozzáadtunk** konstansokat a játék végi eseményekhez a konzisztencia fenntartása érdekében
- **Leíró neveket használtunk**, amelyek egyértelműen jelzik az esemény célját
- **Követtük** az üzenettípusok meglévő elnevezési konvencióját

### 4. lépés: Újrakezdési vezérlők megvalósítása

Most hozzáadod a billentyűzetvezérlést, amely lehetővé teszi a játékosok számára a játék újrakezdését. Az Enter billentyű természetes választás, mivel általában a műveletek megerősítéséhez és az új játékok indításához kapcsolódik.

**Add hozzá az Enter billentyű érzékelését a meglévő keydown eseményfigyelődhöz:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Add hozzá az új üzenetkonstanst:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Amit tudnod kell:**
- **Kiterjeszti** a meglévő billentyűzet eseménykezelő rendszeredet
- **Az Enter billentyűt használja** az újrakezdés indítójaként az intuitív felhasználói élmény érdekében
- **Egyedi eseményt bocsát ki**, amelyet a játék más részei figyelhetnek
- **Fenntartja** ugyanazt a mintát, mint a többi billentyűzetvezérlés

### 5. lépés: Üzenetmegjelenítő rendszer létrehozása

A játékodnak egyértelműen kommunikálnia kell az eredményeket a játékosokkal. Létrehozunk egy üzenetrendszert, amely színkódolt szöveggel jeleníti meg a győzelmi és vereségi állapotokat, hasonlóan a korai számítógépes rendszerek terminál interfészeihez, ahol a zöld a sikert, a piros pedig a hibákat jelezte.

**Hozd létre a `displayMessage()` függvényt:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Lépésről lépésre, mi történik:**
- **Beállítja** a betűméretet és a betűtípust az egyértelmű, olvasható szöveghez
- **Alkalmazza** az alapértelmezett színparamétert, amely "piros" a figyelmeztetésekhez
- **Középre helyezi** a szöveget vízszintesen és függőlegesen a vásznon
- **Modern JavaScript alapértelmezett paramétereket használ** a rugalmas színopciókhoz
- **A vászon 2D kontextusát használja** közvetlen szövegmegjelenítéshez

**Hozd létre az `endGame()` függvényt:**

```javascript
function endGame(win) {
  clearInterval(gameLoopId);

  // Set a delay to ensure any pending renders complete
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (win) {
      displayMessage(
        "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
        "green"
      );
    } else {
      displayMessage(
        "You died !!! Press [Enter] to start a new game Captain Pew Pew"
      );
    }
  }, 200)  
}
```

**Mit csinál ez a függvény:**
- **Megállít** mindent - nincs több mozgó hajó vagy lézer
- **Kis szünetet tart** (200ms), hogy az utolsó képkocka befejezhesse a rajzolást
- **Tisztára törli** a képernyőt, és drámai hatásként feketére festi
- **Különböző üzeneteket jelenít meg** a győzteseknek és veszteseknek
- **Színkódolja** a híreket - zöld a jó, piros a... nos, nem annyira jó
- **Pontosan megmondja** a játékosoknak, hogyan ugorjanak vissza

### 6. lépés: Játék visszaállítási funkció megvalósítása

A visszaállítási rendszernek teljesen tisztítania kell az aktuális játékállapotot, és új játékülést kell indítania. Ez biztosítja, hogy a játékosok tiszta kezdést kapjanak, anélkül, hogy bármilyen maradék adat maradna az előző játékból.

**Hozd létre a `resetGame()` függvényt:**

```javascript
function resetGame() {
  if (gameLoopId) {
    clearInterval(gameLoopId);
    eventEmitter.clear();
    initGame();
    gameLoopId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawPoints();
      drawLife();
      updateGameObjects();
      drawGameObjects(ctx);
    }, 100);
  }
}
```

**Értsük meg az egyes részeket:**
- **Ellenőrzi**, hogy jelenleg fut-e egy játékkör, mielőtt visszaállítaná
- **Törli** a meglévő játékkört, hogy leállítsa az aktuális játék tevékenységeit
- **Eltávolítja** az összes eseményfigyelőt, hogy elkerülje a memória szivárgását
- **Újra inicializálja** a játék állapotát friss objektumokkal és változókkal
- **Új játékkört indít** az összes alapvető játékműködéssel
- **Fenntartja** ugyanazt a 100ms-os intervallumot a következetes játék teljesítmény érdekében

**Add hozzá az Enter billentyű eseményfigyelőt az `initGame()` függvényedhez:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Add hozzá a `clear()` metódust az EventEmitter osztályodhoz:**

```javascript
clear() {
  this.listeners = {};
}
```

**Fontos pontok, amelyeket meg kell jegyezni:**
- **Összekapcsolja** az Enter billentyű lenyomását a játék visszaállítási funkciójával
- **Regisztrálja** ezt az eseményfigyelőt a játék inicializálása során
- **Tiszta módot biztosít** az összes eseményfigyelő eltávolítására a játékok között
- **Megakadályozza** a memória szivárgást az eseménykezelők törlésével a játékok között
- **Visszaállítja** a figyelők objektumot üres állapotba a friss inicializáláshoz

## Gratulálok! 🎉

👽 💥 🚀 Sikeresen felépítettél egy teljes játékot az alapoktól kezdve. Akárcsak az 1970-es évek első videojátékainak programozói, te is átalakítottad a kódsorokat egy interaktív élménnyé, megfelelő játékmenettel és felhasználói visszajelzéssel. 🚀 💥 👽

**Ezt érted el:**
- **Megvalósítottad** a teljes győzelmi és vereségi feltételeket felhasználói visszajelzéssel
- **Létrehoztál** egy zökkenőmentes újrakezdési rendszert a folyamatos játékmenethez
- **Megtervezted** a játékállapotok egyértelmű vizuális kommunikációját
- **Kezelted** az összetett játékállapot-váltásokat és tisztítást
- **Összeállítottad** az összes komponenst egy összefüggő, játszható játékká

## GitHub Copilot Agent kihívás 🚀

Használd az Agent módot a következő kihívás teljesítéséhez:

**Leírás:** Fejleszd az űrjátékot egy szintlépési rendszer megvalósításával, növekvő nehézségi szintekkel és bónusz funkciókkal.

**Feladat:** Hozz létre egy többszintű űrjáték rendszert, ahol minden szinten több ellenséges hajó van, nagyobb sebességgel és életerővel. Adj hozzá egy pontszám szorzót, amely minden szinttel növekszik, és valósíts meg erősítőket (

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.