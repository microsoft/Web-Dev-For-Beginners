<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T08:13:14+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "da"
}
-->
# Byg et Rumspil Del 5: Point og Liv

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/37)

I denne lektion lærer du, hvordan du tilføjer point til et spil og beregner liv.

## Tegn tekst på skærmen

For at kunne vise en spilscore på skærmen skal du vide, hvordan man placerer tekst på skærmen. Svaret er at bruge `fillText()`-metoden på canvas-objektet. Du kan også styre andre aspekter som hvilken skrifttype, der skal bruges, tekstens farve og endda dens justering (venstre, højre, center). Nedenfor er noget kode, der tegner tekst på skærmen.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Læs mere om [hvordan man tilføjer tekst til et canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), og føl dig fri til at gøre din version mere fancy!

## Liv som et spilkoncept

Konceptet med at have liv i et spil er blot et tal. I konteksten af et rumspil er det almindeligt at tildele et sæt liv, som trækkes fra ét ad gangen, når dit skib tager skade. Det er en god idé at vise en grafisk repræsentation af dette, som for eksempel små skibe eller hjerter i stedet for et tal.

## Hvad skal bygges

Lad os tilføje følgende til dit spil:

- **Spilscore**: For hver fjendeskib, der bliver ødelagt, skal helten tildeles nogle point. Vi foreslår 100 point pr. skib. Spilscoren skal vises nederst til venstre.
- **Liv**: Dit skib har tre liv. Du mister et liv, hver gang et fjendeskib kolliderer med dig. En livscore skal vises nederst til højre og bestå af følgende grafik ![livsbillede](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.da.png).

## Anbefalede trin

Find de filer, der er blevet oprettet til dig i undermappen `your-work`. Den bør indeholde følgende:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Du starter dit projekt i mappen `your_work` ved at skrive:

```bash
cd your-work
npm start
```

Ovenstående vil starte en HTTP-server på adressen `http://localhost:5000`. Åbn en browser og indtast den adresse. Lige nu bør den vise helten og alle fjenderne, og når du trykker på dine venstre og højre piletaster, bevæger helten sig og kan skyde fjender ned.

### Tilføj kode

1. **Kopier de nødvendige ressourcer** fra mappen `solution/assets/` til mappen `your-work`; du skal tilføje en `life.png`-ressource. Tilføj `lifeImg` til `window.onload`-funktionen:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Tilføj `lifeImg` til listen over ressourcer:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Tilføj variabler**. Tilføj kode, der repræsenterer din samlede score (0) og resterende liv (3), og vis disse scores på skærmen.

3. **Udvid `updateGameObjects()`-funktionen**. Udvid `updateGameObjects()`-funktionen til at håndtere fjendekollisioner:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Tilføj `liv` og `point`**. 
   1. **Initialiser variabler**. Under `this.cooldown = 0` i `Hero`-klassen, sæt liv og point:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Tegn variabler på skærmen**. Tegn disse værdier på skærmen:

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

   1. **Tilføj metoder til spilloopet**. Sørg for at tilføje disse funktioner til din `window.onload`-funktion under `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementer spilleregler**. Implementer følgende spilleregler:

   1. **For hver helt og fjendekollision**, træk et liv fra.
   
      Udvid `Hero`-klassen til at gøre dette fradrag:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **For hver laser, der rammer en fjende**, øg spilscoren med 100 point.

      Udvid `Hero`-klassen til at gøre denne forøgelse:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Tilføj disse funktioner til dine Collision Event Emitters:

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

✅ Lav lidt research for at opdage andre spil, der er lavet med JavaScript/Canvas. Hvad er deres fællestræk?

Når du er færdig med dette arbejde, bør du kunne se de små 'livsskibe' nederst til højre, point nederst til venstre, og du bør se din livstæller falde, når du kolliderer med fjender, og dine point stige, når du skyder fjender. Godt gået! Dit spil er næsten færdigt.

---

## 🚀 Udfordring

Din kode er næsten færdig. Kan du forestille dig dine næste skridt?

## Quiz efter lektionen

[Quiz efter lektionen](https://ff-quizzes.netlify.app/web/quiz/38)

## Gennemgang & Selvstudie

Undersøg nogle måder, hvorpå du kan øge og mindske spilscore og liv. Der findes nogle interessante spilmotorer som [PlayFab](https://playfab.com). Hvordan kunne brugen af en af disse forbedre dit spil?

## Opgave

[Byg et Pointspil](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os intet ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.