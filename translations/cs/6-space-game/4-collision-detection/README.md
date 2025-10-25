<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-24T21:11:09+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "cs"
}
-->
# Vytvořte vesmírnou hru, část 4: Přidání laseru a detekce kolizí

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/35)

Představte si moment ve Star Wars, kdy protonové torpédo Luka Skywalkera zasáhne výfukový port Hvězdy smrti. Tato přesná detekce kolize změnila osud galaxie! Ve hrách funguje detekce kolizí stejně - určuje, kdy se objekty vzájemně ovlivňují a co se stane dál.

V této lekci přidáte laserové zbraně do své vesmírné hry a implementujete detekci kolizí. Stejně jako plánovači misí NASA počítají trajektorie kosmických lodí, abyste se vyhnuli troskám, naučíte se detekovat, kdy se herní objekty protínají. Rozdělíme to na zvládnutelné kroky, které na sebe navazují.

Na konci budete mít funkční bojový systém, kde lasery ničí nepřátele a kolize spouštějí herní události. Tyto principy detekce kolizí se používají ve všem od simulací fyziky až po interaktivní webové rozhraní.

✅ Udělejte si malý průzkum o úplně první počítačové hře, která byla kdy napsána. Jaká byla její funkčnost?

## Detekce kolizí

Detekce kolizí funguje jako senzory blízkosti na lunárním modulu Apollo - neustále kontroluje vzdálenosti a spouští upozornění, když se objekty příliš přiblíží. Ve hrách tento systém určuje, kdy se objekty vzájemně ovlivňují a co by se mělo stát dál.

Přístup, který použijeme, zachází s každým herním objektem jako s obdélníkem, podobně jako systémy řízení letového provozu používají zjednodušené geometrické tvary ke sledování letadel. Tento obdélníkový přístup se může zdát jednoduchý, ale je výpočetně efektivní a dobře funguje pro většinu herních scénářů.

### Reprezentace obdélníku

Každý herní objekt potřebuje hranice souřadnic, podobně jako rover Mars Pathfinder mapoval svou polohu na povrchu Marsu. Zde je, jak definujeme tyto hranice souřadnic:

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

**Rozložme si to:**
- **Horní hrana**: To je místo, kde váš objekt začíná vertikálně (jeho y pozice)
- **Levý okraj**: Kde začíná horizontálně (jeho x pozice)
- **Spodní hrana**: Přidejte výšku k y pozici - teď víte, kde končí!
- **Pravý okraj**: Přidejte šířku k x pozici - a máte kompletní hranice

### Algoritmus průniku

Detekce průniku obdélníků používá logiku podobnou tomu, jak Hubbleův vesmírný teleskop určuje, zda se nebeské objekty překrývají v jeho zorném poli. Algoritmus kontroluje oddělení:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Test oddělení funguje jako radarové systémy:**
- Je obdélník 2 úplně napravo od obdélníku 1?
- Je obdélník 2 úplně nalevo od obdélníku 1?
- Je obdélník 2 úplně pod obdélníkem 1?
- Je obdélník 2 úplně nad obdélníkem 1?

Pokud žádná z těchto podmínek není pravdivá, obdélníky se musí překrývat. Tento přístup zrcadlí způsob, jakým operátoři radarů určují, zda jsou dvě letadla v bezpečné vzdálenosti.

## Správa životního cyklu objektů

Když laser zasáhne nepřítele, oba objekty musí být odstraněny ze hry. Nicméně mazání objektů během smyčky může způsobit pády - lekce naučená těžce v raných počítačových systémech, jako je Apollo Guidance Computer. Místo toho používáme přístup "označit k odstranění", který bezpečně odstraňuje objekty mezi snímky.

Zde je, jak označíme něco k odstranění:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Proč tento přístup funguje:**
- Označíme objekt jako "mrtvý", ale ihned ho neodstraníme
- To umožňuje aktuálnímu hernímu snímku bezpečně dokončit
- Žádné pády z pokusu použít něco, co už je pryč!

Poté před dalším cyklem vykreslování odfiltrujeme označené objekty:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Co toto filtrování dělá:**
- Vytvoří nový seznam pouze s "živými" objekty
- Vyřadí vše označené jako mrtvé
- Udržuje vaši hru hladce běžící
- Zabraňuje hromadění paměti zničenými objekty

## Implementace mechaniky laseru

Laserové projektily ve hrách fungují na stejném principu jako fotonová torpéda ve Star Treku - jsou to diskrétní objekty, které se pohybují po přímkách, dokud něco nezasáhnou. Každé stisknutí mezerníku vytvoří nový laserový objekt, který se pohybuje po obrazovce.

Aby to fungovalo, musíme koordinovat několik různých částí:

**Klíčové komponenty k implementaci:**
- **Vytvořit** laserové objekty, které se objeví na pozici hrdiny
- **Zpracovat** vstup z klávesnice k aktivaci vytvoření laseru
- **Spravovat** pohyb laseru a jeho životní cyklus
- **Implementovat** vizuální reprezentaci laserových projektilů

## Implementace kontroly rychlosti střelby

Neomezené rychlosti střelby by přetížily herní engine a učinily hru příliš snadnou. Skutečné zbraňové systémy čelí podobným omezením - dokonce i phasery USS Enterprise potřebovaly čas na dobití mezi výstřely.

Implementujeme systém ochlazování, který zabrání nadměrnému střílení a zároveň zachová citlivé ovládání:

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

**Jak funguje ochlazování:**
- Při vytvoření je zbraň "horká" (zatím nemůže střílet)
- Po uplynutí časového limitu se stane "chladnou" (připravená ke střelbě)
- Před střelbou kontrolujeme: "Je zbraň chladná?"
- To zabraňuje nadměrnému klikání a zároveň zachovává citlivé ovládání

✅ Podívejte se na lekci 1 ze série vesmírných her, abyste si připomněli systém ochlazování.

## Vytvoření systému detekce kolizí

Rozšíříte svůj stávající kód vesmírné hry, abyste vytvořili systém detekce kolizí. Stejně jako automatizovaný systém vyhýbání se kolizím Mezinárodní vesmírné stanice bude vaše hra neustále sledovat polohy objektů a reagovat na jejich průniky.

Na základě kódu z předchozí lekce přidáte detekci kolizí s konkrétními pravidly, která upravují interakce objektů.

> 💡 **Tip**: Sprite laseru je již zahrnut ve vaší složce s aktivy a odkazován ve vašem kódu, připraven k implementaci.

### Pravidla kolizí k implementaci

**Herní mechaniky k přidání:**
1. **Laser zasáhne nepřítele**: Objekt nepřítele je zničen, když ho zasáhne laserový projektil
2. **Laser zasáhne hranici obrazovky**: Laser je odstraněn, když dosáhne horního okraje obrazovky
3. **Kolize nepřítele a hrdiny**: Oba objekty jsou zničeny, když se protínají
4. **Nepřítel dosáhne dna**: Stav hry "konec hry", když nepřátelé dosáhnou spodního okraje obrazovky

## Nastavení vývojového prostředí

Dobrá zpráva - většinu základů jsme pro vás již připravili! Všechny vaše herní aktiva a základní struktura čekají ve složce `your-work`, připravené k přidání skvělých funkcí detekce kolizí.

### Struktura projektu

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Porozumění struktuře souborů:**
- **Obsahuje** všechny obrázky sprite potřebné pro herní objekty
- **Zahrnuje** hlavní HTML dokument a soubor JavaScript aplikace
- **Poskytuje** konfiguraci balíčku pro lokální vývojový server

### Spuštění vývojového serveru

Přejděte do složky projektu a spusťte lokální server:

```bash
cd your-work
npm start
```

**Tato sekvence příkazů:**
- **Změní** adresář na vaši pracovní složku projektu
- **Spustí** lokální HTTP server na `http://localhost:5000`
- **Poskytne** vaše herní soubory pro testování a vývoj
- **Umožní** živý vývoj s automatickým načítáním

Otevřete svůj prohlížeč a přejděte na `http://localhost:5000`, abyste viděli aktuální stav své hry s vykresleným hrdinou a nepřáteli na obrazovce.

### Postupná implementace

Stejně jako systematický přístup, který NASA použila k naprogramování kosmické lodi Voyager, implementujeme detekci kolizí metodicky, budováním každé komponenty krok za krokem.

#### 1. Přidání hranic obdélníkové kolize

Nejprve naučíme naše herní objekty, jak popsat své hranice. Přidejte tuto metodu do své třídy `GameObject`:

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

**Tato metoda zajišťuje:**
- **Vytváří** objekt obdélníku s přesnými hranicemi souřadnic
- **Vypočítává** spodní a pravé hrany pomocí pozice plus rozměrů
- **Vrací** objekt připravený pro algoritmy detekce kolizí
- **Poskytuje** standardizované rozhraní pro všechny herní objekty

#### 2. Implementace detekce průniku

Nyní vytvoříme našeho detektiva kolizí - funkci, která dokáže říct, kdy se dva obdélníky překrývají:

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
- **Testuje** čtyři podmínky oddělení mezi obdélníky
- **Vrací** `false`, pokud je pravdivá jakákoli podmínka oddělení
- **Indikuje** kolizi, když neexistuje žádné oddělení
- **Používá** negaci pro efektivní testování průniku

#### 3. Implementace systému střelby laserem

Teď to začne být vzrušující! Nastavíme systém střelby laserem.

##### Konstanty zpráv

Nejprve definujeme typy zpráv, aby různé části naší hry mohly spolu komunikovat:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Tyto konstanty poskytují:**
- **Standardizují** názvy událostí v celé aplikaci
- **Umožňují** konzistentní komunikaci mezi herními systémy
- **Zabraňují** překlepům při registraci obsluhy událostí

##### Zpracování vstupu z klávesnice

Přidejte detekci stisknutí mezerníku do svého posluchače událostí klávesnice:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Tento zpracovatel vstupu:**
- **Detekuje** stisknutí mezerníku pomocí keyCode 32
- **Vysílá** standardizovanou zprávu o události
- **Umožňuje** oddělenou logiku střelby

##### Nastavení posluchače událostí

Zaregistrujte chování střelby ve své funkci `initGame()`:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Tento posluchač událostí:**
- **Reaguje** na události stisknutí mezerníku
- **Kontroluje** stav ochlazování střelby
- **Spouští** vytvoření laseru, pokud je to povoleno

Přidejte zpracování kolizí pro interakce laser-nepřítel:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Tento zpracovatel kolizí:**
- **Přijímá** data událostí kolize s oběma objekty
- **Označuje** oba objekty k odstranění
- **Zajišťuje** správné vyčištění po kolizi

#### 4. Vytvoření třídy Laser

Implementujte laserový projektil, který se pohybuje vzhůru a spravuje svůj vlastní životní cyklus:

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

**Tato implementace třídy:**
- **Rozšiřuje** GameObject pro zdědění základní funkčnosti
- **Nastavuje** vhodné rozměry pro sprite laseru
- **Vytváří** automatický pohyb vzhůru pomocí `setInterval()`
- **Zpracovává** vlastní zničení při dosažení horního okraje obrazovky
- **Spravuje** vlastní časování animace a vyčištění

#### 5. Implementace systému detekce kolizí

Vytvořte komplexní funkci detekce kolizí:

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

**Tento systém detekce kolizí:**
- **Filtruje** herní objekty podle typu pro efektivní testování
- **Testuje** každý laser proti každému nepříteli na průniky
- **Vysílá** události kolize, když jsou detekovány průniky
- **Čistí** zničené objekty po zpracování kolizí

> ⚠️ **Důležité**: Přidejte `updateGameObjects()` do hlavní herní smyčky v `window.onload`, aby byla detekce kolizí aktivní.

#### 6. Přidání systému ochlazování do třídy Hero

Vylepšete třídu Hero o mechaniku střelby a omezení rychlosti střelby:

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

**Porozumění vylepšené třídě Hero:**
- **Inicializuje** časovač ochlazování na nulu (připraven ke střelbě)
- **Vytváří** laserové objekty umístěné nad lodí hrdiny
- **Nastavuje** dobu ochlazování, aby se zabránilo nadměrnému střílení
- **Snižuje** časovač ochlazování pomocí aktualizací založených na intervalech
- **Poskytuje** kontrolu stavu střelby prostřednictvím metody `canFire()`

### Testování vaší implementace

Vaše vesmírná hra nyní obsahuje kompletní systém detekce kolizí a bojovou mechaniku. 🚀 Otestujte tyto nové schopnosti:
- **Pohybujte se** pomocí šipek a ověřte ovládání pohybu
- **Střílejte lasery** pomocí mezerníku - všimněte si, jak ochlazování zabraňuje nadměrnému klikání
- **Pozorujte kolize**, když lasery zasáhnou nepřátele, což spustí jejich odstranění
- **Ověřte vyčištění**, jak zničené objekty mizí ze hry

Úspěšně jste implementovali systém detekce kolizí pomocí stejných matematických principů, které řídí navigaci kosmických lodí a robotiku.

## Výzva GitHub Copilot Agent 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Vylepšete systém detekce kolizí implementací power-upů, které se náhodně objevují a poskytují dočasné schopnosti při jejich sběru lodí hrdiny.

**Výzva:** Vytvořte třídu PowerUp, která rozšiřuje GameObject, a implementujte detekci kolizí mezi hrdinou a power-upy. Přidejte alespoň dva typy power-upů: jeden, který zvyšuje rychlost střelby (snižuje ochlazování), a druhý, který vytváří dočasný štít. Zahrňte logiku spawnování, která vytváří power-upy v náhodných intervalech a pozicích.

---

## 🚀 Výzva

Přidejte explozi! Podívejte se na herní aktiva v [repozitáři Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) a zkuste přidat explozi, když laser zasáhne mimozemšťana.

## Kvíz po lekci

[K

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.