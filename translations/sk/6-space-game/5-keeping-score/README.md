<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-27T22:27:25+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "sk"
}
-->
# Vytvorte vesmírnu hru, časť 5: Body a životy

## Kvíz pred prednáškou

[Kvíz pred prednáškou](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

V tejto lekcii sa naučíte, ako pridať bodovanie do hry a počítať životy.

## Zobrazenie textu na obrazovke

Aby ste mohli zobrazovať skóre hry na obrazovke, musíte vedieť, ako umiestniť text na obrazovku. Odpoveďou je použitie metódy `fillText()` na objekte canvas. Môžete tiež ovládať ďalšie aspekty, ako napríklad aké písmo použiť, farbu textu a dokonca aj jeho zarovnanie (vľavo, vpravo, na stred). Nižšie je uvedený kód, ktorý zobrazuje text na obrazovke.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Prečítajte si viac o [tom, ako pridať text na plátno](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), a pokojne si ho upravte podľa svojich predstáv!

## Život ako herný koncept

Koncept života v hre je len číslo. V kontexte vesmírnej hry je bežné priradiť určitý počet životov, ktoré sa odpočítavajú jeden po druhom, keď vaša loď utrpí poškodenie. Je pekné, ak môžete namiesto čísla zobraziť grafickú reprezentáciu, ako sú malé lode alebo srdcia.

## Čo vytvoriť

Pridajte do svojej hry nasledujúce prvky:

- **Herné skóre**: Za každú zničenú nepriateľskú loď by mal hrdina získať body, odporúčame 100 bodov za loď. Herné skóre by sa malo zobrazovať v ľavom dolnom rohu.
- **Životy**: Vaša loď má tri životy. O život prídete zakaždým, keď do vás narazí nepriateľská loď. Počet životov by sa mal zobrazovať v pravom dolnom rohu a mal by byť reprezentovaný nasledujúcou grafikou ![obrázok života](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.sk.png).

## Odporúčané kroky

Nájdite súbory, ktoré boli pre vás vytvorené v podpriečinku `your-work`. Mali by obsahovať nasledujúce:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Spustite svoj projekt v priečinku `your_work` zadaním:

```bash
cd your-work
npm start
```

Vyššie uvedené spustí HTTP server na adrese `http://localhost:5000`. Otvorte prehliadač a zadajte túto adresu. Momentálne by sa mal zobraziť hrdina a všetci nepriatelia, a keď stlačíte šípky doľava a doprava, hrdina sa pohybuje a môže zostreľovať nepriateľov.

### Pridanie kódu

1. **Skopírujte potrebné zdroje** z priečinka `solution/assets/` do priečinka `your-work`; pridáte zdroj `life.png`. Pridajte `lifeImg` do funkcie `window.onload`:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Pridajte `lifeImg` do zoznamu zdrojov:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Pridajte premenné**. Pridajte kód, ktorý reprezentuje vaše celkové skóre (0) a zostávajúce životy (3), a zobrazte tieto hodnoty na obrazovke.

3. **Rozšírte funkciu `updateGameObjects()`**. Rozšírte funkciu `updateGameObjects()` tak, aby spracovávala kolízie s nepriateľmi:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Pridajte `life` a `points`**. 
   1. **Inicializujte premenné**. Pod `this.cooldown = 0` v triede `Hero` nastavte životy a body:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Zobrazte premenné na obrazovke**. Zobrazte tieto hodnoty na obrazovke:

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

   1. **Pridajte metódy do hernej slučky**. Uistite sa, že ste pridali tieto funkcie do funkcie `window.onload` pod `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementujte herné pravidlá**. Implementujte nasledujúce herné pravidlá:

   1. **Za každú kolíziu hrdinu s nepriateľom** odpočítajte jeden život.
   
      Rozšírte triedu `Hero`, aby vykonávala toto odpočítanie:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Za každý laser, ktorý zasiahne nepriateľa**, zvýšte herné skóre o 100 bodov.

      Rozšírte triedu `Hero`, aby vykonávala toto zvýšenie:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Pridajte tieto funkcie do vašich emitorov udalostí kolízie:

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

✅ Urobte si malý prieskum a objavte ďalšie hry, ktoré sú vytvorené pomocou JavaScriptu/Canvasu. Aké majú spoločné črty?

Na konci tejto práce by ste mali vidieť malé lode reprezentujúce životy v pravom dolnom rohu, body v ľavom dolnom rohu a mali by ste vidieť, ako sa počet životov znižuje pri kolíziách s nepriateľmi a body sa zvyšujú, keď zostreľujete nepriateľov. Skvelá práca! Vaša hra je takmer hotová.

---

## 🚀 Výzva

Váš kód je takmer hotový. Dokážete si predstaviť svoje ďalšie kroky?

## Kvíz po prednáške

[Kvíz po prednáške](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## Prehľad a samoštúdium

Preskúmajte spôsoby, ako môžete zvyšovať a znižovať herné skóre a životy. Existujú zaujímavé herné enginy, ako napríklad [PlayFab](https://playfab.com). Ako by použitie jedného z nich mohlo vylepšiť vašu hru?

## Zadanie

[Postavte hru s bodovaním](assignment.md)

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby na automatický preklad [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, upozorňujeme, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nezodpovedáme za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.