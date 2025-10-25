<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-24T21:49:25+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "sk"
}
-->
# Vytvor vesmírnu hru, časť 5: Skóre a životy

## Kvíz pred prednáškou

[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/quiz/37)

Pripravený urobiť z tvojej vesmírnej hry skutočnú hru? Poďme pridať bodovanie a spravovanie životov - základné mechaniky, ktoré premenili skoré arkádové hry ako Space Invaders z jednoduchých ukážok na návykovú zábavu. Tu sa tvoja hra stáva naozaj hrateľnou.

## Zobrazenie textu na obrazovke - hlas tvojej hry

Aby sme zobrazili tvoje skóre, musíme sa naučiť, ako vykresliť text na plátno. Metóda `fillText()` je tvojím hlavným nástrojom - je to rovnaká technika, aká sa používala v klasických arkádových hrách na zobrazenie skóre a informácií o stave.

Máš úplnú kontrolu nad vzhľadom textu:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Ponor sa hlbšie do [pridávania textu na plátno](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - možno ťa prekvapí, aký kreatívny môžeš byť s fontami a štýlovaním!

## Životy - viac než len číslo

V hernom dizajne "život" predstavuje hráčovu rezervu na chyby. Tento koncept pochádza z pinballových automatov, kde si dostal viacero guličiek na hranie. V skorých videohrách ako Asteroids životy umožnili hráčom riskovať a učiť sa z chýb.

Vizualizácia je veľmi dôležitá - zobrazenie ikon lodí namiesto jednoduchého "Životy: 3" vytvára okamžité vizuálne rozpoznanie, podobne ako skoré arkádové automaty používali ikonografiu na komunikáciu naprieč jazykovými bariérami.

## Budovanie odmeňovacieho systému tvojej hry

Teraz implementujeme základné systémy spätnej väzby, ktoré udržujú hráčov zapojených:

- **Systém bodovania**: Každá zničená nepriateľská loď prináša 100 bodov (okrúhle čísla sa hráčom ľahšie počítajú v hlave). Skóre sa zobrazuje v ľavom dolnom rohu.
- **Počítadlo životov**: Tvoj hrdina začína s tromi životmi - štandard, ktorý zaviedli skoré arkádové hry na vyváženie výzvy a hrateľnosti. Každá zrážka s nepriateľom stojí jeden život. Zostávajúce životy zobrazíme v pravom dolnom rohu pomocou ikon lodí ![ikona života](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.sk.png).

## Poďme na to!

Najprv si nastav pracovné prostredie. Prejdi do súborov v podpriečinku `your-work`. Mal by si vidieť tieto súbory:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Na otestovanie hry spusti vývojový server z priečinka `your_work`:

```bash
cd your-work
npm start
```

Toto spustí lokálny server na adrese `http://localhost:5000`. Otvor túto adresu vo svojom prehliadači, aby si videl svoju hru. Otestuj ovládanie pomocou šípok a vyskúšaj strieľať na nepriateľov, aby si overil, že všetko funguje.

### Čas na kódovanie!

1. **Získaj vizuálne prvky, ktoré budeš potrebovať**. Skopíruj súbor `life.png` z priečinka `solution/assets/` do svojho priečinka `your-work`. Potom pridaj `lifeImg` do funkcie window.onload: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Nezabudni pridať `lifeImg` do zoznamu svojich aktív:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Nastav premenné hry**. Pridaj kód na sledovanie celkového skóre (začína na 0) a zostávajúcich životov (začína na 3). Tieto hodnoty zobrazíme na obrazovke, aby hráči vždy vedeli, kde sa nachádzajú.

3. **Implementuj detekciu zrážok**. Rozšír svoju funkciu `updateGameObjects()` tak, aby detekovala, keď sa nepriatelia zrazia s tvojím hrdinom:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Pridaj sledovanie životov a bodov k svojmu hrdinovi**. 
   1. **Inicializuj počítadlá**. Pod `this.cooldown = 0` vo svojej triede `Hero` nastav životy a body:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Zobraz tieto hodnoty hráčovi**. Vytvor funkcie na vykreslenie týchto hodnôt na obrazovke:

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

   1. **Prepoj všetko do herného cyklu**. Pridaj tieto funkcie do svojej funkcie window.onload hneď po `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementuj dôsledky a odmeny hry**. Teraz pridáme systémy spätnej väzby, ktoré dávajú hráčskym akciám zmysel:

   1. **Zrážky stoja životy**. Zakaždým, keď sa tvoj hrdina zrazí s nepriateľom, stratíš jeden život.
   
      Pridaj túto metódu do svojej triedy `Hero`:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Strieľanie nepriateľov prináša body**. Každý úspešný zásah prináša 100 bodov, čo poskytuje okamžitú pozitívnu spätnú väzbu za presné strieľanie.

      Rozšír svoju triedu Hero o túto metódu na zvýšenie bodov:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Teraz prepoj tieto funkcie s udalosťami zrážok:

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

✅ Zvedavý na ďalšie hry vytvorené pomocou JavaScriptu a Canvasu? Preskúmaj ich - možno budeš prekvapený, čo všetko je možné!

Po implementácii týchto funkcií otestuj svoju hru, aby si videl kompletný systém spätnej väzby v akcii. Mal by si vidieť ikony životov v pravom dolnom rohu, svoje skóre v ľavom dolnom rohu a sledovať, ako zrážky znižujú životy, zatiaľ čo úspešné zásahy zvyšujú skóre.

Tvoja hra teraz obsahuje základné mechaniky, ktoré robili skoré arkádové hry takými pútavými - jasné ciele, okamžitú spätnú väzbu a zmysluplné dôsledky hráčskych akcií.

---

## Výzva GitHub Copilot Agent 🚀

Použi režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vylepši bodovací systém vesmírnej hry implementáciou funkcie najvyššieho skóre s trvalým uložením a mechanikou bonusového bodovania.

**Úloha:** Vytvor systém najvyššieho skóre, ktorý uloží najlepší hráčov skóre do localStorage. Pridaj bonusové body za po sebe idúce zničenie nepriateľov (systém komba) a implementuj rôzne hodnoty bodov pre rôzne typy nepriateľov. Zahrň vizuálny indikátor, keď hráč dosiahne nové najvyššie skóre, a zobraz aktuálne najvyššie skóre na obrazovke hry.



## 🚀 Výzva

Teraz máš funkčnú hru s bodovaním a životmi. Zamysli sa nad tým, aké ďalšie funkcie by mohli zlepšiť zážitok hráča.

## Kvíz po prednáške

[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/38)

## Prehľad a samostatné štúdium

Chceš preskúmať viac? Preskúmaj rôzne prístupy k bodovacím a životným systémom v hrách. Existujú fascinujúce herné enginy ako [PlayFab](https://playfab.com), ktoré sa zaoberajú bodovaním, rebríčkami a hráčským pokrokom. Ako by integrácia niečoho takého mohla posunúť tvoju hru na vyššiu úroveň?

## Zadanie

[Postav hru s bodovaním](assignment.md)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, uvedomte si, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.