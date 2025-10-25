<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-24T21:48:13+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie vesmírnej hry, časť 4: Pridanie lasera a detekcia kolízií

## Kvíz pred prednáškou

[Prednáškový kvíz](https://ff-quizzes.netlify.app/web/quiz/35)

Spomeňte si na moment v Star Wars, keď Lukeove protónové torpéda zasiahli výfukový port Hviezdnej smrti. Táto presná detekcia kolízie zmenila osud galaxie! V hrách funguje detekcia kolízií rovnako - určuje, kedy objekty interagujú a čo sa stane ďalej.

V tejto lekcii pridáte laserové zbrane do svojej vesmírnej hry a implementujete detekciu kolízií. Rovnako ako plánovači misií NASA vypočítavajú trajektórie kozmických lodí, aby sa vyhli troskám, naučíte sa detekovať, keď sa herné objekty pretínajú. Rozdelíme to na zvládnuteľné kroky, ktoré na seba nadväzujú.

Na konci budete mať funkčný bojový systém, kde lasery ničia nepriateľov a kolízie spúšťajú herné udalosti. Tieto princípy detekcie kolízií sa používajú vo všetkom, od simulácií fyziky až po interaktívne webové rozhrania.

✅ Urobte si malý prieskum o úplne prvej počítačovej hre, ktorá bola kedy napísaná. Aká bola jej funkčnosť?

## Detekcia kolízií

Detekcia kolízií funguje ako senzory blízkosti na lunárnom module Apollo - neustále kontroluje vzdialenosti a spúšťa upozornenia, keď sa objekty dostanú príliš blízko. V hrách tento systém určuje, kedy objekty interagujú a čo by sa malo stať ďalej.

Prístup, ktorý použijeme, považuje každý herný objekt za obdĺžnik, podobne ako systémy riadenia leteckej dopravy používajú zjednodušené geometrické tvary na sledovanie lietadiel. Tento obdĺžnikový prístup sa môže zdať základný, ale je výpočtovo efektívny a funguje dobre vo väčšine herných scenárov.

### Reprezentácia obdĺžnika

Každý herný objekt potrebuje hranice súradníc, podobne ako rover Mars Pathfinder mapoval svoju polohu na povrchu Marsu. Tu je spôsob, ako definujeme tieto hranice súradníc:

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

**Rozdelenie na časti:**
- **Horný okraj**: To je miesto, kde váš objekt začína vertikálne (jeho y pozícia)
- **Ľavý okraj**: Miesto, kde začína horizontálne (jeho x pozícia)
- **Spodný okraj**: Pridajte výšku k y pozícii - teraz viete, kde končí!
- **Pravý okraj**: Pridajte šírku k x pozícii - a máte kompletné hranice

### Algoritmus prekrývania

Detekcia prekrývania obdĺžnikov používa logiku podobnú tomu, ako Hubbleov vesmírny teleskop určuje, či sa nebeské objekty prekrývajú vo svojom zornom poli. Algoritmus kontroluje oddelenie:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Test oddelenia funguje ako radarové systémy:**
- Je obdĺžnik 2 úplne napravo od obdĺžnika 1?
- Je obdĺžnik 2 úplne naľavo od obdĺžnika 1?
- Je obdĺžnik 2 úplne pod obdĺžnikom 1?
- Je obdĺžnik 2 úplne nad obdĺžnikom 1?

Ak žiadna z týchto podmienok nie je pravdivá, obdĺžniky sa musia prekrývať. Tento prístup odráža spôsob, akým operátori radaru určujú, či sú dve lietadlá v bezpečnej vzdialenosti.

## Správa životného cyklu objektov

Keď laser zasiahne nepriateľa, oba objekty musia byť odstránené z hry. Avšak mazanie objektov počas cyklu môže spôsobiť pády - lekcia, ktorú sa ťažko naučili v skorých počítačových systémoch, ako je Apollo Guidance Computer. Namiesto toho používame prístup "označiť na odstránenie", ktorý bezpečne odstraňuje objekty medzi snímkami.

Tu je spôsob, ako niečo označiť na odstránenie:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Prečo tento prístup funguje:**
- Označíme objekt ako "mŕtvy", ale neodstránime ho hneď
- To umožňuje aktuálnemu hernému cyklu bezpečne skončiť
- Žiadne pády z pokusu použiť niečo, čo už neexistuje!

Potom pred ďalším cyklom vykreslenia odfiltrujeme označené objekty:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Čo toto filtrovanie robí:**
- Vytvára nový zoznam iba so "živými" objektmi
- Vyhadzuje všetko označené ako mŕtve
- Udržuje vašu hru plynulú
- Zabraňuje pamäťovému preťaženiu z hromadenia zničených objektov

## Implementácia mechaniky lasera

Laserové projektily v hrách fungujú na rovnakom princípe ako fotónové torpéda v Star Treku - sú to diskrétne objekty, ktoré sa pohybujú po priamke, kým niečo zasiahnu. Každé stlačenie medzerníka vytvorí nový laserový objekt, ktorý sa pohybuje po obrazovke.

Aby to fungovalo, musíme koordinovať niekoľko rôznych častí:

**Kľúčové komponenty na implementáciu:**
- **Vytvoriť** laserové objekty, ktoré sa objavia z pozície hrdinu
- **Spracovať** vstup z klávesnice na spustenie vytvorenia lasera
- **Spravovať** pohyb a životný cyklus lasera
- **Implementovať** vizuálne zobrazenie laserových projektilov

## Implementácia kontroly rýchlosti streľby

Neobmedzené rýchlosti streľby by preťažili herný engine a urobili hru príliš jednoduchou. Skutočné zbraňové systémy čelia podobným obmedzeniam - dokonca aj fázer USS Enterprise potreboval čas na dobitie medzi výstrelmi.

Implementujeme systém ochladenia, ktorý zabráni nadmernému strieľaniu a zároveň zachová citlivé ovládanie:

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

**Ako funguje ochladenie:**
- Pri vytvorení je zbraň "horúca" (ešte nemôže strieľať)
- Po uplynutí časového limitu sa stane "chladnou" (pripravená na streľbu)
- Pred streľbou kontrolujeme: "Je zbraň chladná?"
- To zabraňuje spamovaniu kliknutím a zároveň zachováva citlivé ovládanie

✅ Pozrite si lekciu 1 zo série vesmírnych hier, aby ste si pripomenuli systém ochladenia.

## Budovanie systému detekcie kolízií

Rozšírite existujúci kód svojej vesmírnej hry, aby ste vytvorili systém detekcie kolízií. Rovnako ako automatizovaný systém vyhýbania sa kolíziám Medzinárodnej vesmírnej stanice, vaša hra bude neustále monitorovať polohy objektov a reagovať na ich prekrývanie.

Na základe kódu z predchádzajúcej lekcie pridáte detekciu kolízií s konkrétnymi pravidlami, ktoré riadia interakcie objektov.

> 💡 **Tip**: Sprite lasera je už zahrnutý vo vašom priečinku s aktívami a je referencovaný vo vašom kóde, pripravený na implementáciu.

### Pravidlá kolízií na implementáciu

**Herné mechaniky na pridanie:**
1. **Laser zasiahne nepriateľa**: Objekt nepriateľa je zničený, keď ho zasiahne laserový projektil
2. **Laser zasiahne hranicu obrazovky**: Laser je odstránený, keď dosiahne horný okraj obrazovky
3. **Kolízia nepriateľa a hrdinu**: Oba objekty sú zničené, keď sa prekrývajú
4. **Nepriateľ dosiahne spodok**: Stav konca hry, keď nepriatelia dosiahnu spodok obrazovky

## Nastavenie vývojového prostredia

Dobrá správa - väčšinu základov sme už pre vás pripravili! Všetky vaše herné aktíva a základná štruktúra čakajú v podpriečinku `your-work`, pripravené na pridanie skvelých funkcií detekcie kolízií.

### Štruktúra projektu

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Porozumenie štruktúre súborov:**
- **Obsahuje** všetky obrázky sprite potrebné pre herné objekty
- **Zahŕňa** hlavný HTML dokument a JavaScript aplikáciu
- **Poskytuje** konfiguráciu balíka pre lokálny vývojový server

### Spustenie vývojového servera

Prejdite do svojho priečinka projektu a spustite lokálny server:

```bash
cd your-work
npm start
```

**Táto sekvencia príkazov:**
- **Zmení** adresár na váš pracovný priečinok projektu
- **Spustí** lokálny HTTP server na `http://localhost:5000`
- **Poskytne** vaše herné súbory na testovanie a vývoj
- **Umožní** živý vývoj s automatickým načítaním

Otvorte svoj prehliadač a prejdite na `http://localhost:5000`, aby ste videli aktuálny stav svojej hry s vykresleným hrdinom a nepriateľmi na obrazovke.

### Implementácia krok za krokom

Rovnako ako systematický prístup, ktorý NASA použila na programovanie kozmickej lode Voyager, implementujeme detekciu kolízií metodicky, budujúc každý komponent krok za krokom.

#### 1. Pridanie hraníc kolízie obdĺžnika

Najprv naučíme naše herné objekty, ako popísať svoje hranice. Pridajte túto metódu do svojej triedy `GameObject`:

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

**Táto metóda dosahuje:**
- **Vytvára** objekt obdĺžnika s presnými hranicami súradníc
- **Vypočíta** spodné a pravé okraje pomocou pozície plus rozmery
- **Vracia** objekt pripravený na algoritmy detekcie kolízií
- **Poskytuje** štandardizované rozhranie pre všetky herné objekty

#### 2. Implementácia detekcie prekrývania

Teraz vytvoríme nášho detektíva kolízií - funkciu, ktorá dokáže povedať, kedy sa dva obdĺžniky prekrývajú:

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

**Tento algoritmus funguje takto:**
- **Testuje** štyri podmienky oddelenia medzi obdĺžnikmi
- **Vracia** `false`, ak je pravdivá akákoľvek podmienka oddelenia
- **Indikuje** kolíziu, keď neexistuje žiadne oddelenie
- **Používa** negáciu logiky na efektívne testovanie prekrývania

#### 3. Implementácia systému streľby laserom

Tu sa veci stávajú vzrušujúce! Nastavíme systém streľby laserom.

##### Konštanty správ

Najprv definujeme niektoré typy správ, aby rôzne časti našej hry mohli spolu komunikovať:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Tieto konštanty poskytujú:**
- **Štandardizujú** názvy udalostí v celej aplikácii
- **Umožňujú** konzistentnú komunikáciu medzi hernými systémami
- **Zabraňujú** preklepom pri registrácii obsluhy udalostí

##### Spracovanie vstupu z klávesnice

Pridajte detekciu stlačenia medzerníka do svojho poslucháča udalostí klávesnice:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Tento obslužný program vstupu:**
- **Detekuje** stlačenie medzerníka pomocou keyCode 32
- **Vysiela** štandardizovanú správu o udalosti
- **Umožňuje** oddelenú logiku streľby

##### Nastavenie poslucháča udalostí

Zaregistrujte správanie streľby vo svojej funkcii `initGame()`:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Tento poslucháč udalostí:**
- **Reaguje** na udalosti stlačenia medzerníka
- **Kontroluje** stav ochladenia streľby
- **Spúšťa** vytvorenie lasera, keď je to povolené

Pridajte spracovanie kolízií pre interakcie laser-nepriateľ:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Tento obslužný program kolízií:**
- **Prijíma** údaje o udalostiach kolízie s oboma objektmi
- **Označuje** oba objekty na odstránenie
- **Zabezpečuje** správne vyčistenie po kolízii

#### 4. Vytvorenie triedy Laser

Implementujte laserový projektil, ktorý sa pohybuje nahor a spravuje svoj vlastný životný cyklus:

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

**Táto implementácia triedy:**
- **Rozširuje** GameObject na zdedenie základnej funkčnosti
- **Nastavuje** vhodné rozmery pre sprite lasera
- **Vytvára** automatický pohyb nahor pomocou `setInterval()`
- **Spracováva** samodeštrukciu pri dosiahnutí vrcholu obrazovky
- **Spravuje** vlastné časovanie animácie a vyčistenie

#### 5. Implementácia systému detekcie kolízií

Vytvorte komplexnú funkciu detekcie kolízií:

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

**Tento systém kolízií:**
- **Filtruje** herné objekty podľa typu na efektívne testovanie
- **Testuje** každý laser proti každému nepriateľovi na prekrývanie
- **Vysiela** udalosti kolízie, keď sa prekrývanie zistí
- **Čistí** zničené objekty po spracovaní kolízií

> ⚠️ **Dôležité**: Pridajte `updateGameObjects()` do hlavného herného cyklu v `window.onload`, aby ste umožnili detekciu kolízií.

#### 6. Pridanie systému ochladenia do triedy Hero

Vylepšite triedu Hero o mechaniku streľby a obmedzenie rýchlosti:

```javascript
class Hero extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 99;
    this.height = 75;
    this.type = "Hero";
    this.speed = { x: 0, y: 0 };
    this.cooldown = 0;
  }
  
  fire() {
    gameObjects.push(new Laser(this.x + 45, this.y - 10));
    this.cooldown = 500;

    let id = setInterval(() => {
      if (this.cooldown > 0) {
        this.cooldown -= 100;
      } else {
        clearInterval(id);
      }
    }, 200);
  }
  
  canFire() {
    return this.cooldown === 0;
  }
}
```

**Porozumenie vylepšenej triedy Hero:**
- **Inicializuje** časovač ochladenia na nulu (pripravený na streľbu)
- **Vytvára** laserové objekty umiestnené nad loďou hrdinu
- **Nastavuje** obdobie ochladenia na zabránenie rýchlej streľby
- **Znižuje** časovač ochladenia pomocou aktualizácií založených na intervaloch
- **Poskytuje** kontrolu stavu streľby cez metódu `canFire()`

### Testovanie vašej implementácie

Vaša vesmírna hra teraz obsahuje kompletnú detekciu kolízií a mechaniku boja. 🚀 Otestujte tieto nové schopnosti:
- **Navigujte** pomocou šípok na overenie ovládania pohybu
- **Strieľajte lasery** medzerníkom - všimnite si, ako ochladenie zabraňuje spamovaniu kliknutím
- **Pozorujte kolízie**, keď lasery zasiahnu nepriateľov, čo spustí ich odstránenie
- **Overte vyčistenie**, keď zničené objekty zmiznú z hry

Úspešne ste implementovali systém detekcie kolízií pomocou rovnakých matematických princípov, ktoré riadia navigáciu kozmických lodí a robotiku.

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vylepšite systém detekcie kolízií implementáciou power-upov, ktoré sa náhodne objavujú a poskytujú dočasné schopnosti, keď ich hrdinská loď získa.

**Výzva:** Vytvorte triedu PowerUp, ktorá rozširuje GameObject, a implementujte detekciu kolízií medzi hrdinom a power-upmi. Pridajte aspoň dva typy power-upov: jeden, ktorý zvyšuje rýchlosť streľby (znižuje ochladenie), a druhý, ktorý vytvára dočasný št

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.