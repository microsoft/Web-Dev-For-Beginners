<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T12:50:24+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "sl"
}
-->
# Zgradite vesoljsko igro, 5. del: Točkovanje in življenja

## Predhodni kviz

[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/37)

V tej lekciji se boste naučili, kako dodati točkovanje v igro in izračunati življenja.

## Risanje besedila na zaslon

Da bi lahko prikazali rezultat igre na zaslonu, morate vedeti, kako postaviti besedilo na zaslon. Odgovor je uporaba metode `fillText()` na objektu canvas. Prav tako lahko nadzorujete druge vidike, kot so izbira pisave, barva besedila in celo poravnava (levo, desno, sredina). Spodaj je nekaj kode, ki riše besedilo na zaslon.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Preberite več o [dodajanju besedila na canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) in poskrbite, da bo vaše videti še bolj privlačno!

## Življenje kot koncept v igri

Koncept življenja v igri je zgolj številka. V kontekstu vesoljske igre je običajno dodeliti določeno število življenj, ki se zmanjšujejo eno za drugim, ko vaša ladja utrpi škodo. Lepo je, če lahko to prikažete grafično, na primer z mini ladjami ali srčki, namesto s številko.

## Kaj bomo zgradili

Dodajmo naslednje elemente v vašo igro:

- **Rezultat igre**: Za vsako sovražno ladjo, ki jo uničite, naj junak prejme nekaj točk, predlagamo 100 točk na ladjo. Rezultat igre naj bo prikazan v spodnjem levem kotu.
- **Življenje**: Vaša ladja ima tri življenja. Izgubite eno življenje vsakič, ko sovražna ladja trči v vas. Število življenj naj bo prikazano v spodnjem desnem kotu in naj bo sestavljeno iz naslednje grafike ![slika življenja](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.sl.png).

## Priporočeni koraki

Poiščite datoteke, ki so bile ustvarjene za vas v podmapi `your-work`. Vsebujejo naslednje:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Začnite svoj projekt v mapi `your_work` tako, da vnesete:

```bash
cd your-work
npm start
```

Zgornji ukaz bo zagnal HTTP strežnik na naslovu `http://localhost:5000`. Odprite brskalnik in vnesite ta naslov. Trenutno bi moral prikazati junaka in vse sovražnike, ter omogočiti premikanje junaka z levo in desno puščico ter streljanje na sovražnike.

### Dodajanje kode

1. **Kopirajte potrebne vire** iz mape `solution/assets/` v mapo `your-work`; dodali boste datoteko `life.png`. Dodajte `lifeImg` v funkcijo `window.onload`: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Dodajte `lifeImg` na seznam virov:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Dodajte spremenljivke**. Dodajte kodo, ki predstavlja vaš skupni rezultat (0) in preostala življenja (3), ter prikažite te vrednosti na zaslonu.

3. **Razširite funkcijo `updateGameObjects()`**. Razširite funkcijo `updateGameObjects()`, da obravnava trke s sovražniki:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Dodajte `življenje` in `točke`**. 
   1. **Inicializirajte spremenljivke**. Pod `this.cooldown = 0` v razredu `Hero` nastavite življenje in točke:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Narišite spremenljivke na zaslon**. Prikažite te vrednosti na zaslonu:

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

   1. **Dodajte metode v zanko igre**. Poskrbite, da dodate te funkcije v funkcijo `window.onload` pod `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Uvedite pravila igre**. Uvedite naslednja pravila igre:

   1. **Za vsak trk junaka in sovražnika** odštejte eno življenje.
   
      Razširite razred `Hero`, da izvedete to odštevanje:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Za vsak laser, ki zadene sovražnika**, povečajte rezultat igre za 100 točk.

      Razširite razred `Hero`, da izvedete to povečanje:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Dodajte te funkcije v sprožilce dogodkov za trke:

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

✅ Raziskujte, da odkrijete druge igre, ki so ustvarjene z uporabo JavaScript/Canvas. Kakšne so njihove skupne značilnosti?

Ko zaključite delo, bi morali videti majhne ladje 'življenja' v spodnjem desnem kotu, točke v spodnjem levem kotu, ter opaziti zmanjšanje števila življenj ob trkih s sovražniki in povečanje točk ob streljanju na sovražnike. Odlično! Vaša igra je skoraj končana.

---

## 🚀 Izziv

Vaša koda je skoraj končana. Ali si lahko zamislite naslednje korake?

## Zaključni kviz

[Zaključni kviz](https://ff-quizzes.netlify.app/web/quiz/38)

## Pregled in samostojno učenje

Raziskujte načine, kako lahko povečujete in zmanjšujete rezultate igre ter življenja. Obstajajo zanimivi igralni pogoni, kot je [PlayFab](https://playfab.com). Kako bi uporaba enega od teh izboljšala vašo igro?

## Naloga

[Zgradite igro s točkovanjem](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna napačna razumevanja ali napačne interpretacije, ki bi nastale zaradi uporabe tega prevoda.