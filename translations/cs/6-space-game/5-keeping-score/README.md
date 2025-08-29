<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T10:50:52+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "cs"
}
-->
# Vytvořte vesmírnou hru, část 5: Skóre a životy

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/37)

V této lekci se naučíte, jak přidat skóre do hry a počítat životy.

## Zobrazení textu na obrazovce

Abyste mohli zobrazit skóre hry na obrazovce, musíte vědět, jak umístit text na plátno. Odpovědí je použití metody `fillText()` na objektu canvas. Můžete také ovládat další aspekty, jako je výběr fontu, barva textu a jeho zarovnání (vlevo, vpravo, na střed). Níže je ukázka kódu, který vykresluje text na obrazovce.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Přečtěte si více o [přidávání textu na plátno](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) a klidně si svůj text udělejte ještě hezčí!

## Život jako herní koncept

Koncept života ve hře je pouze číslo. V kontextu vesmírné hry je běžné přiřadit určitý počet životů, které se odečítají jeden po druhém, když vaše loď utrpí poškození. Je skvělé, pokud můžete zobrazit grafickou reprezentaci, například malé lodě nebo srdíčka, místo pouhého čísla.

## Co vytvořit

Přidejte do své hry následující:

- **Herní skóre**: Za každou zničenou nepřátelskou loď by měl hrdina získat body, doporučujeme 100 bodů za loď. Herní skóre by mělo být zobrazeno vlevo dole.
- **Životy**: Vaše loď má tři životy. O život přijdete pokaždé, když do vás narazí nepřátelská loď. Počet životů by měl být zobrazen vpravo dole a měl by být tvořen následující grafikou ![obrázek života](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.cs.png).

## Doporučené kroky

Najděte soubory, které byly vytvořeny pro vás ve složce `your-work`. Měla by obsahovat následující:

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

Výše uvedený příkaz spustí HTTP server na adrese `http://localhost:5000`. Otevřete prohlížeč a zadejte tuto adresu. V tuto chvíli by se měl zobrazit hrdina a všichni nepřátelé. Jakmile stisknete šipky vlevo a vpravo, hrdina se pohybuje a může sestřelovat nepřátele.

### Přidání kódu

1. **Zkopírujte potřebné prostředky** ze složky `solution/assets/` do složky `your-work`; přidáte grafiku `life.png`. Přidejte `lifeImg` do funkce `window.onload`:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Přidejte `lifeImg` do seznamu prostředků:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Přidejte proměnné**. Přidejte kód, který reprezentuje vaše celkové skóre (0) a zbývající životy (3), a zobrazte tyto hodnoty na obrazovce.

3. **Rozšiřte funkci `updateGameObjects()`**. Rozšiřte funkci `updateGameObjects()` tak, aby zpracovávala kolize s nepřáteli:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Přidejte `life` a `points`**. 
   1. **Inicializujte proměnné**. Pod `this.cooldown = 0` ve třídě `Hero` nastavte životy a body:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Zobrazte proměnné na obrazovce**. Vykreslete tyto hodnoty na obrazovku:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Přidejte metody do herní smyčky**. Ujistěte se, že tyto funkce přidáte do funkce `window.onload` pod `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementujte herní pravidla**. Implementujte následující pravidla:

   1. **Za každou kolizi hrdiny s nepřítelem** odečtěte jeden život.
   
      Rozšiřte třídu `Hero`, aby toto odečítání prováděla:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Za každý laser, který zasáhne nepřítele**, přičtěte ke skóre 100 bodů.

      Rozšiřte třídu `Hero`, aby toto přičítání prováděla:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Přidejte tyto funkce do vašich Collision Event Emitters:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Udělejte si malý průzkum a zjistěte, jaké další hry byly vytvořeny pomocí JavaScriptu/Canvasu. Jaké mají společné rysy?

Na konci této práce byste měli vidět malé lodě symbolizující životy vpravo dole, body vlevo dole a měli byste vidět, jak se počet životů snižuje při kolizích s nepřáteli a body přibývají při sestřelování nepřátel. Skvělá práce! Vaše hra je téměř hotová.

---

## 🚀 Výzva

Váš kód je téměř hotový. Dokážete si představit další kroky?

## Kvíz po lekci

[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/38)

## Recenze a samostudium

Prozkoumejte způsoby, jak můžete zvyšovat a snižovat herní skóre a životy. Existují zajímavé herní enginy, jako například [PlayFab](https://playfab.com). Jak by použití jednoho z nich mohlo vylepšit vaši hru?

## Zadání

[Vytvořte hru se skórováním](assignment.md)

---

**Upozornění**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o co největší přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.