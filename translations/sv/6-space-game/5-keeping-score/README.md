<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T07:54:23+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "sv"
}
-->
# Bygg ett rymdspel Del 5: Poäng och liv

## Quiz före föreläsningen

[Quiz före föreläsningen](https://ff-quizzes.netlify.app/web/quiz/37)

I den här lektionen kommer du att lära dig hur man lägger till poäng i ett spel och räknar liv.

## Rita text på skärmen

För att kunna visa en spelpoäng på skärmen behöver du veta hur man placerar text på skärmen. Svaret är att använda metoden `fillText()` på canvas-objektet. Du kan också kontrollera andra aspekter som vilket typsnitt som ska användas, textens färg och till och med dess justering (vänster, höger, centrerad). Nedan är lite kod som ritar text på skärmen.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Läs mer om [hur man lägger till text på en canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), och känn dig fri att göra din text snyggare!

## Liv, som ett spelkoncept

Konceptet att ha liv i ett spel är bara ett nummer. I ett rymdspel är det vanligt att tilldela ett antal liv som minskar ett i taget när ditt skepp tar skada. Det är trevligt om du kan visa en grafisk representation av detta, som små skepp eller hjärtan istället för ett nummer.

## Vad ska byggas

Låt oss lägga till följande i ditt spel:

- **Spelpoäng**: För varje fiendeskepp som förstörs ska hjälten få poäng, vi föreslår 100 poäng per skepp. Spelpoängen ska visas längst ner till vänster.
- **Liv**: Ditt skepp har tre liv. Du förlorar ett liv varje gång ett fiendeskepp kolliderar med dig. Antalet liv ska visas längst ner till höger och bestå av följande grafik ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.sv.png).

## Rekommenderade steg

Leta upp filerna som har skapats åt dig i undermappen `your-work`. Den bör innehålla följande:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Starta ditt projekt i mappen `your_work` genom att skriva:

```bash
cd your-work
npm start
```

Ovanstående kommer att starta en HTTP-server på adressen `http://localhost:5000`. Öppna en webbläsare och ange den adressen. Just nu bör den rendera hjälten och alla fiender, och när du trycker på vänster- och högerpilarna rör sig hjälten och kan skjuta ner fiender.

### Lägg till kod

1. **Kopiera över de nödvändiga resurserna** från mappen `solution/assets/` till mappen `your-work`; du kommer att lägga till en `life.png`-resurs. Lägg till `lifeImg` i funktionen `window.onload`:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Lägg till `lifeImg` i listan över resurser:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Lägg till variabler**. Lägg till kod som representerar din totala poäng (0) och antal kvarvarande liv (3), och visa dessa värden på skärmen.

3. **Utöka funktionen `updateGameObjects()`**. Utöka funktionen `updateGameObjects()` för att hantera fiendekollisioner:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Lägg till `life` och `points`**. 
   1. **Initiera variabler**. Under `this.cooldown = 0` i klassen `Hero`, sätt liv och poäng:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Rita variabler på skärmen**. Rita dessa värden på skärmen:

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

   1. **Lägg till metoder i spel-loopen**. Se till att du lägger till dessa funktioner i din `window.onload`-funktion under `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementera spelregler**. Implementera följande spelregler:

   1. **För varje kollision mellan hjälten och en fiende**, dra av ett liv.
   
      Utöka klassen `Hero` för att göra denna avdrag:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **För varje laser som träffar en fiende**, öka spelpoängen med 100 poäng.

      Utöka klassen `Hero` för att göra denna ökning:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Lägg till dessa funktioner i dina Collision Event Emitters:

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

✅ Gör lite efterforskning för att upptäcka andra spel som är skapade med JavaScript/Canvas. Vilka är deras gemensamma drag?

När du är klar med detta arbete bör du se de små "liv"-skeppen längst ner till höger, poängen längst ner till vänster, och du bör se att antalet liv minskar när du kolliderar med fiender och att poängen ökar när du skjuter fiender. Bra jobbat! Ditt spel är nästan klart.

---

## 🚀 Utmaning

Din kod är nästan klar. Kan du föreställa dig dina nästa steg?

## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/38)

## Granskning & Självstudier

Undersök några sätt att öka och minska spelpoäng och liv. Det finns några intressanta spelmotorer som [PlayFab](https://playfab.com). Hur skulle användningen av en sådan motor kunna förbättra ditt spel?

## Uppgift

[Bygg ett poängspel](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, vänligen notera att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på sitt originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.