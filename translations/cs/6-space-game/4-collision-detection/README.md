<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T10:51:19+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "cs"
}
-->
# Vytvořte vesmírnou hru, část 4: Přidání laseru a detekce kolizí

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/35)

V této lekci se naučíte, jak střílet lasery pomocí JavaScriptu! Do naší hry přidáme dvě věci:

- **Laser**: tento laser bude vystřelen z lodi vašeho hrdiny a bude se pohybovat vertikálně nahoru
- **Detekce kolizí**, jako součást implementace schopnosti *střílet* přidáme také několik herních pravidel:
   - **Laser zasáhne nepřítele**: Nepřítel zemře, pokud je zasažen laserem
   - **Laser zasáhne horní část obrazovky**: Laser je zničen, pokud zasáhne horní část obrazovky
   - **Kolize nepřítele a hrdiny**: Nepřítel i hrdina jsou zničeni, pokud do sebe narazí
   - **Nepřítel zasáhne spodní část obrazovky**: Nepřítel i hrdina jsou zničeni, pokud nepřítel zasáhne spodní část obrazovky

Stručně řečeno, vy -- *hrdina* -- musíte zasáhnout všechny nepřátele laserem dříve, než se dostanou na spodní část obrazovky.

✅ Udělejte si malý průzkum o úplně první počítačové hře, která byla kdy napsána. Jaká byla její funkčnost?

Buďme hrdinové společně!

## Detekce kolizí

Jak provádíme detekci kolizí? Musíme si představit herní objekty jako obdélníky, které se pohybují. Proč? Protože obrázek použitý k vykreslení herního objektu je obdélník: má `x`, `y`, `šířku` a `výšku`.

Pokud se dva obdélníky, například hrdina a nepřítel, *protnou*, dojde ke kolizi. Co by se mělo stát, záleží na pravidlech hry. K implementaci detekce kolizí tedy potřebujete následující:

1. Způsob, jak získat obdélníkové zastoupení herního objektu, něco jako toto:

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

Abychom mohli ničit objekty ve hře, musíme dát hře vědět, že tento objekt by se již neměl vykreslovat v herní smyčce, která se spouští v určitém intervalu. Jedním ze způsobů je označit herní objekt jako *mrtvý*, když se něco stane, například takto:

```javascript
// collision happened
enemy.dead = true
```

Poté můžete pokračovat s odstraněním *mrtvých* objektů před překreslením obrazovky, například takto:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Jak vystřelit laser

Vystřelení laseru znamená reagovat na událost klávesnice a vytvořit objekt, který se pohybuje určitým směrem. Proto musíme provést následující kroky:

1. **Vytvořit laserový objekt**: z horní části lodi našeho hrdiny, který se po vytvoření začne pohybovat směrem nahoru k horní části obrazovky.
2. **Připojit kód k události klávesnice**: musíme vybrat klávesu na klávesnici, která bude reprezentovat střelbu laseru hráčem.
3. **Vytvořit herní objekt, který vypadá jako laser**, když je klávesa stisknuta.

## Časový limit pro laser

Laser by měl být vystřelen pokaždé, když stisknete klávesu, například *mezerník*. Abychom zabránili hře vytvářet příliš mnoho laserů v krátkém čase, musíme to opravit. Řešením je implementace tzv. *časového limitu*, časovače, který zajistí, že laser může být vystřelen jen v určitých intervalech. Můžete to implementovat následujícím způsobem:

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

✅ Podívejte se na lekci 1 v sérii o vesmírné hře, abyste si připomněli, jak fungují *časové limity*.

## Co vytvořit

Vezmete existující kód (který byste měli mít vyčištěný a refaktorovaný) z předchozí lekce a rozšíříte ho. Buď začněte s kódem z části II, nebo použijte kód z [části III - startovací](../../../../6-space-game/4-collision-detection/your-work).

> tip: laser, se kterým budete pracovat, je již ve vaší složce s prostředky a je odkazován vaším kódem

- **Přidejte detekci kolizí**, když laser narazí na něco, měla by platit následující pravidla:
   1. **Laser zasáhne nepřítele**: nepřítel zemře, pokud je zasažen laserem
   2. **Laser zasáhne horní část obrazovky**: laser je zničen, pokud zasáhne horní část obrazovky
   3. **Kolize nepřítele a hrdiny**: nepřítel i hrdina jsou zničeni, pokud do sebe narazí
   4. **Nepřítel zasáhne spodní část obrazovky**: nepřítel i hrdina jsou zničeni, pokud nepřítel zasáhne spodní část obrazovky

## Doporučené kroky

Najděte soubory, které byly pro vás vytvořeny ve složce `your-work`. Měly by obsahovat následující:

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

Výše uvedené spustí HTTP server na adrese `http://localhost:5000`. Otevřete prohlížeč a zadejte tuto adresu, aktuálně by měl zobrazit hrdinu a všechny nepřátele, nic se zatím nehýbe :).

### Přidání kódu

1. **Nastavte obdélníkové zastoupení herního objektu pro zpracování kolizí**. Následující kód umožňuje získat obdélníkové zastoupení `GameObject`. Upravte svou třídu GameObject, aby ji rozšířila:

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
   1. **Přidejte zprávu pro událost klávesnice**. Klávesa *mezerník* by měla vytvořit laser těsně nad lodí hrdiny. Přidejte tři konstanty do objektu Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Zpracujte klávesu mezerník**. Upravte funkci `window.addEventListener` pro událost `keyup`, aby zpracovávala mezerník:

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

       a přidejte novou funkci `eventEmitter.on()`, která zajistí chování, když nepřítel narazí na laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Pohybujte objektem**, zajistěte, aby se laser postupně pohyboval k horní části obrazovky. Vytvoříte novou třídu Laser, která rozšiřuje `GameObject`, jak jste to udělali dříve: 
   
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

   1. **Zpracujte kolize**, implementujte pravidla kolizí pro laser. Přidejte funkci `updateGameObjects()`, která testuje kolidující objekty:

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

      Ujistěte se, že přidáte `updateGameObjects()` do herní smyčky v `window.onload`.

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

V tomto bodě má vaše hra nějakou funkčnost! Můžete se pohybovat pomocí šipek, střílet laser mezerníkem a nepřátelé mizí, když je zasáhnete. Skvělá práce!

---

## 🚀 Výzva

Přidejte explozi! Podívejte se na herní prostředky v [repozitáři Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) a zkuste přidat explozi, když laser zasáhne mimozemšťana.

## Kvíz po lekci

[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/36)

## Recenze a samostudium

Experimentujte s intervaly ve své hře. Co se stane, když je změníte? Přečtěte si více o [časových událostech v JavaScriptu](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Zadání

[Prozkoumejte kolize](assignment.md)

---

**Upozornění**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o co největší přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.