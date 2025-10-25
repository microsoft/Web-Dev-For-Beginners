<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-24T21:12:25+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "cs"
}
-->
# Vytvořte vesmírnou hru, část 5: Skóre a životy

## Kvíz před přednáškou

[Kvíz před přednáškou](https://ff-quizzes.netlify.app/web/quiz/37)

Připraveni udělat z vaší vesmírné hry skutečnou hru? Přidáme bodování a správu životů – základní mechaniky, které proměnily rané arkádové hry jako Space Invaders z jednoduchých ukázek na návykovou zábavu. Tady se vaše hra stává opravdu hratelnou.

## Zobrazení textu na obrazovce - Hlas vaší hry

Abychom zobrazili vaše skóre, musíme se naučit, jak vykreslit text na plátno. Metoda `fillText()` je vaším hlavním nástrojem – stejná technika byla použita v klasických arkádových hrách k zobrazení skóre a informací o stavu.

Máte úplnou kontrolu nad vzhledem textu:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Prozkoumejte více o [přidávání textu na plátno](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) – možná vás překvapí, jak kreativní můžete být s fonty a stylováním!

## Životy - Více než jen číslo

V herním designu "život" představuje hráčovu toleranci k chybám. Tento koncept pochází z pinballových strojů, kde jste měli více míčků na hraní. V raných videohrách jako Asteroids životy umožnily hráčům riskovat a učit se z chyb.

Vizualizace je velmi důležitá – zobrazení ikon lodí místo pouhého "Životy: 3" vytváří okamžité vizuální rozpoznání, podobně jako rané arkádové automaty používaly ikonografii k překonání jazykových bariér.

## Budování systému odměn vaší hry

Teď implementujeme základní systémy zpětné vazby, které udržují hráče zapojené:

- **Systém bodování**: Každá zničená nepřátelská loď přidává 100 bodů (kulatá čísla se hráčům snadněji počítají). Skóre se zobrazuje v levém dolním rohu.
- **Počítadlo životů**: Váš hrdina začíná se třemi životy – standard, který byl zaveden v raných arkádových hrách pro vyvážení výzvy a hratelnosti. Každá kolize s nepřítelem stojí jeden život. Zbývající životy zobrazíme v pravém dolním rohu pomocí ikon lodí ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.cs.png).

## Pojďme stavět!

Nejprve si připravte pracovní prostředí. Přejděte do složky `your-work`. Měli byste vidět tyto soubory:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Pro otestování vaší hry spusťte vývojový server ze složky `your_work`:

```bash
cd your-work
npm start
```

Tím spustíte lokální server na adrese `http://localhost:5000`. Otevřete tuto adresu ve svém prohlížeči, abyste viděli svou hru. Otestujte ovládání pomocí šipek a zkuste střílet na nepřátele, abyste ověřili, že vše funguje.

### Čas na kódování!

1. **Získejte vizuální prvky, které budete potřebovat**. Zkopírujte soubor `life.png` z adresáře `solution/assets/` do vaší složky `your-work`. Poté přidejte `lifeImg` do funkce window.onload: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Nezapomeňte přidat `lifeImg` do seznamu vašich aktiv:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Nastavte proměnné hry**. Přidejte kód pro sledování celkového skóre (začínající na 0) a zbývajících životů (začínající na 3). Tyto hodnoty zobrazíme na obrazovce, aby hráči vždy věděli, jak si stojí.

3. **Implementujte detekci kolizí**. Rozšiřte funkci `updateGameObjects()`, aby detekovala, kdy nepřátelé narazí do vašeho hrdiny:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Přidejte sledování životů a bodů vašemu hrdinovi**. 
   1. **Inicializujte počítadla**. Pod `this.cooldown = 0` ve třídě `Hero` nastavte životy a body:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Zobrazte tyto hodnoty hráči**. Vytvořte funkce pro vykreslení těchto hodnot na obrazovce:

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

   1. **Připojte vše do herní smyčky**. Přidejte tyto funkce do funkce window.onload hned po `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementujte důsledky a odměny hry**. Teď přidáme systémy zpětné vazby, které dávají hráčským akcím smysl:

   1. **Kolize stojí životy**. Pokaždé, když váš hrdina narazí do nepřítele, ztratíte jeden život.
   
      Přidejte tuto metodu do třídy `Hero`:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Střelba na nepřátele přináší body**. Každý úspěšný zásah přidává 100 bodů, což poskytuje okamžitou pozitivní zpětnou vazbu za přesnou střelbu.

      Rozšiřte třídu Hero o tuto metodu pro přičítání bodů:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Teď připojte tyto funkce k událostem kolize:

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

✅ Zajímá vás, jaké další hry byly vytvořeny pomocí JavaScriptu a Canvasu? Prozkoumejte to – možná budete překvapeni, co je možné!

Po implementaci těchto funkcí otestujte svou hru, abyste viděli kompletní systém zpětné vazby v akci. Měli byste vidět ikony životů v pravém dolním rohu, skóre v levém dolním rohu a sledovat, jak kolize snižují životy, zatímco úspěšné střely zvyšují skóre.

Vaše hra nyní obsahuje základní mechaniky, které učinily rané arkádové hry tak poutavými – jasné cíle, okamžitou zpětnou vazbu a smysluplné důsledky hráčských akcí.

---

## Výzva GitHub Copilot Agent 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Vylepšete bodovací systém vesmírné hry implementací funkce nejvyššího skóre s trvalým uložením a mechanikou bonusového bodování.

**Úkol:** Vytvořte systém nejvyššího skóre, který uloží nejlepší skóre hráče do localStorage. Přidejte bonusové body za po sobě jdoucí zničení nepřátel (systém komba) a implementujte různé hodnoty bodů pro různé typy nepřátel. Zahrňte vizuální indikátor, když hráč dosáhne nového nejvyššího skóre, a zobrazte aktuální nejvyšší skóre na obrazovce hry.



## 🚀 Výzva

Nyní máte funkční hru s bodováním a životy. Zvažte, jaké další funkce by mohly zlepšit zážitek hráče.

## Kvíz po přednášce

[Kvíz po přednášce](https://ff-quizzes.netlify.app/web/quiz/38)

## Opakování a samostudium

Chcete se dozvědět více? Prozkoumejte různé přístupy k bodování a systémům životů ve hrách. Existují fascinující herní enginy jako [PlayFab](https://playfab.com), které se zabývají bodováním, žebříčky a pokrokem hráčů. Jak by integrace něčeho takového mohla posunout vaši hru na další úroveň?

## Úkol

[Postavte hru s bodováním](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.