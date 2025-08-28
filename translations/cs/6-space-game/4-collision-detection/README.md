<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-28T03:57:28+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "cs"
}
-->
# Vytvořte vesmírnou hru, část 4: Přidání laseru a detekce kolizí

## Kvíz před lekcí

[Kvíz před lekcí](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/35)

V této lekci se naučíte střílet lasery pomocí JavaScriptu! Do naší hry přidáme dvě věci:

- **Laser**: tento laser bude vystřelen z lodi vašeho hrdiny a bude se pohybovat vertikálně nahoru
- **Detekce kolizí**, jako součást implementace schopnosti *střílet* přidáme také několik herních pravidel:
   - **Laser zasáhne nepřítele**: Nepřítel zemře, pokud ho zasáhne laser
   - **Laser zasáhne horní část obrazovky**: Laser bude zničen, pokud zasáhne horní část obrazovky
   - **Kolize nepřítele a hrdiny**: Nepřítel i hrdina budou zničeni, pokud do sebe narazí
   - **Nepřítel zasáhne spodní část obrazovky**: Nepřítel i hrdina budou zničeni, pokud nepřítel zasáhne spodní část obrazovky

Stručně řečeno, vy -- *hrdina* -- musíte zasáhnout všechny nepřátele laserem, než se dostanou na spodní část obrazovky.

✅ Udělejte si malý průzkum o úplně první počítačové hře, která byla kdy napsána. Jaká byla její funkčnost?

Buďme hrdinové společně!

## Detekce kolizí

Jak provádíme detekci kolizí? Musíme si představit herní objekty jako obdélníky, které se pohybují. Proč? Protože obrázek použitý k vykreslení herního objektu je obdélník: má `x`, `y`, `šířku` a `výšku`.

Pokud se dva obdélníky, například hrdina a nepřítel, *protnou*, dojde ke kolizi. Co by se mělo stát, záleží na pravidlech hry. K implementaci detekce kolizí tedy potřebujete následující:

1. Způsob, jak získat obdélníkové vyjádření herního objektu, například takto:

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

2. Porovnávací funkci, která může vypadat takto:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Jak ničíme objekty

Abychom mohli ve hře něco zničit, musíme hře sdělit, že tento objekt již nemá být vykreslen v herní smyčce, která se spouští v určitém intervalu. Jedním ze způsobů je označit herní objekt jako *mrtvý*, když se něco stane, například takto:

```javascript
// collision happened
enemy.dead = true
```

Poté můžete *mrtvé* objekty odstranit před opětovným vykreslením obrazovky, například takto:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Jak vystřelit laser

Vystřelení laseru znamená reagovat na klávesovou událost a vytvořit objekt, který se pohybuje určitým směrem. Musíme tedy provést následující kroky:

1. **Vytvořit laserový objekt**: z horní části lodi našeho hrdiny, který se po vytvoření začne pohybovat směrem nahoru k horní části obrazovky.
2. **Přiřadit kód ke klávesové události**: musíme vybrat klávesu na klávesnici, která bude představovat střelbu laseru hráčem.
3. **Vytvořit herní objekt, který vypadá jako laser**, když je klávesa stisknuta.

## Časový limit pro laser

Laser musí být vystřelen pokaždé, když stisknete klávesu, například *mezerník*. Aby hra nevytvářela příliš mnoho laserů v krátkém čase, musíme to opravit. Řešením je implementace tzv. *časového limitu*, časovače, který zajistí, že laser může být vystřelen jen v určitých intervalech. To můžete implementovat následujícím způsobem:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ Podívejte se na lekci 1 v sérii vesmírných her, abyste si připomněli, jak fungují *časové limity*.

## Co vytvořit

Vezmete stávající kód (který byste měli vyčistit a refaktorovat) z předchozí lekce a rozšíříte ho. Buď začněte s kódem z části II, nebo použijte kód z [části III - startovací](../../../../6-space-game/4-collision-detection/your-work).

> tip: laser, se kterým budete pracovat, je již ve vaší složce s prostředky a je odkazován vaším kódem

- **Přidejte detekci kolizí**, když laser narazí na něco, měla by platit následující pravidla:
   1. **Laser zasáhne nepřítele**: nepřítel zemře, pokud ho zasáhne laser
   2. **Laser zasáhne horní část obrazovky**: laser bude zničen, pokud zasáhne horní část obrazovky
   3. **Kolize nepřítele a hrdiny**: nepřítel i hrdina budou zničeni, pokud do sebe narazí
   4. **Nepřítel zasáhne spodní část obrazovky**: nepřítel i hrdina budou zničeni, pokud nepřítel zasáhne spodní část obrazovky

## Doporučené kroky

Najděte soubory, které byly pro vás vytvořeny ve složce `your-work`. Měla by obsahovat následující:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Spusťte svůj projekt ve složce `your_work` zadáním:

```bash
cd your-work
npm start
```

Tím se spustí HTTP server na adrese `http://localhost:5000`. Otevřete prohlížeč a zadejte tuto adresu, aktuálně by se měl zobrazit hrdina a všichni nepřátelé, nic se však zatím nehýbe :).

### Přidání kódu

1. **Nastavte obdélníkové vyjádření svého herního objektu pro zpracování kolizí**. Následující kód umožňuje získat obdélníkové vyjádření `GameObject`. Upravte svou třídu GameObject, aby ji rozšířila:

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

2. **Přidejte kód, který kontroluje kolize**. Toto bude nová funkce, která testuje, zda se dva obdélníky protínají:

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

3. **Přidejte schopnost střílet laser**
   1. **Přidejte zprávu pro klávesovou událost**. Klávesa *mezerník* by měla vytvořit laser těsně nad lodí hrdiny. Přidejte tři konstanty do objektu Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Zpracujte klávesu mezerník**. Upravte funkci `window.addEventListener` pro událost keyup, aby zpracovávala mezerník:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Přidejte posluchače**. Upravte funkci `initGame()`, aby hrdina mohl střílet, když je stisknut mezerník:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       a přidejte novou funkci `eventEmitter.on()`, aby se zajistilo chování, když nepřítel narazí na laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Pohyb objektu**, zajistěte, aby se laser postupně pohyboval k horní části obrazovky. Vytvoříte novou třídu Laser, která rozšiřuje `GameObject`, stejně jako dříve: 
   
      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **Zpracování kolizí**, implementujte pravidla kolizí pro laser. Přidejte funkci `updateGameObjects()`, která testuje kolidující objekty:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      Ujistěte se, že jste přidali `updateGameObjects()` do herní smyčky v `window.onload`.

   4. **Implementujte časový limit** pro laser, aby mohl být vystřelen jen v určitých intervalech.

      Nakonec upravte třídu Hero, aby mohla používat časový limit:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
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

V tomto bodě má vaše hra určitou funkčnost! Můžete se pohybovat pomocí šipek, střílet laser mezerníkem a nepřátelé zmizí, když je zasáhnete. Skvělá práce!

---

## 🚀 Výzva

Přidejte explozi! Podívejte se na herní prostředky v [repozitáři Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) a zkuste přidat explozi, když laser zasáhne mimozemšťana.

## Kvíz po lekci

[Kvíz po lekci](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/36)

## Přehled a samostudium

Experimentujte s intervaly ve své hře. Co se stane, když je změníte? Přečtěte si více o [časových událostech v JavaScriptu](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Zadání

[Prozkoumejte kolize](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.