<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-27T20:21:15+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtespel Deel 5: Score en Levens

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/37)

In deze les leer je hoe je een score toevoegt aan een spel en levens berekent.

## Tekst op het scherm weergeven

Om een spelscore op het scherm te tonen, moet je weten hoe je tekst op het scherm plaatst. Het antwoord is het gebruik van de `fillText()`-methode op het canvas-object. Je kunt ook andere aspecten regelen, zoals welk lettertype je gebruikt, de kleur van de tekst en zelfs de uitlijning (links, rechts, midden). Hieronder staat wat code die tekst op het scherm tekent.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Lees meer over [hoe je tekst toevoegt aan een canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), en voel je vrij om het er mooier uit te laten zien!

## Leven, als spelconcept

Het concept van een leven in een spel is simpelweg een getal. In de context van een ruimtespel is het gebruikelijk om een aantal levens toe te wijzen die één voor één worden afgetrokken wanneer je schip schade oploopt. Het is leuk als je dit grafisch kunt weergeven, bijvoorbeeld met mini-schepen of hartjes in plaats van een getal.

## Wat gaan we bouwen

Laten we het volgende aan je spel toevoegen:

- **Spelscore**: Voor elk vijandelijk schip dat wordt vernietigd, moet de held punten krijgen. We stellen 100 punten per schip voor. De spelscore moet linksonder worden weergegeven.
- **Levens**: Je schip heeft drie levens. Je verliest een leven elke keer dat een vijandelijk schip met je botst. Een levensscore moet rechtsonder worden weergegeven en bestaan uit de volgende afbeelding ![life image](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.nl.png).

## Aanbevolen stappen

Zoek de bestanden die voor je zijn aangemaakt in de submap `your-work`. Deze map zou het volgende moeten bevatten:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Start je project in de map `your_work` door het volgende in te typen:

```bash
cd your-work
npm start
```

Hiermee start je een HTTP-server op het adres `http://localhost:5000`. Open een browser en voer dat adres in. Op dit moment zou het de held en alle vijanden moeten weergeven, en als je op de linker- en rechterpijltjes drukt, beweegt de held en kan hij vijanden neerschieten.

### Code toevoegen

1. **Kopieer de benodigde assets** van de map `solution/assets/` naar de map `your-work`; je voegt een `life.png`-asset toe. Voeg de lifeImg toe aan de window.onload-functie:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Voeg de `lifeImg` toe aan de lijst met assets:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Voeg variabelen toe**. Voeg code toe die je totale score (0) en resterende levens (3) vertegenwoordigt, en toon deze scores op het scherm.

3. **Breid de `updateGameObjects()`-functie uit**. Breid de `updateGameObjects()`-functie uit om vijandelijke botsingen af te handelen:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Voeg `life` en `points` toe**. 
   1. **Initialiseer variabelen**. Onder `this.cooldown = 0` in de `Hero`-klasse, stel life en points in:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Teken variabelen op het scherm**. Teken deze waarden op het scherm:

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

   1. **Voeg methoden toe aan de gameloop**. Zorg ervoor dat je deze functies toevoegt aan je window.onload-functie onder `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementeer spelregels**. Implementeer de volgende spelregels:

   1. **Voor elke botsing tussen held en vijand**, trek een leven af.
   
      Breid de `Hero`-klasse uit om deze aftrekking te doen:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Voor elke laser die een vijand raakt**, verhoog de spelscore met 100 punten.

      Breid de Hero-klasse uit om deze verhoging te doen:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Voeg deze functies toe aan je Collision Event Emitters:

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

✅ Doe wat onderzoek naar andere spellen die zijn gemaakt met JavaScript/Canvas. Wat zijn hun gemeenschappelijke kenmerken?

Aan het einde van dit werk zou je de kleine 'leven'-schepen rechtsonder moeten zien, punten linksonder, en je zou je levensaantal moeten zien afnemen wanneer je met vijanden botst en je punten zien toenemen wanneer je vijanden neerschiet. Goed gedaan! Je spel is bijna klaar.

---

## 🚀 Uitdaging

Je code is bijna compleet. Kun je je volgende stappen bedenken?

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/38)

## Review & Zelfstudie

Onderzoek enkele manieren waarop je spelscores en levens kunt verhogen en verlagen. Er zijn interessante game-engines zoals [PlayFab](https://playfab.com). Hoe zou het gebruik van een van deze je spel kunnen verbeteren?

## Opdracht

[Bouw een Scoringsspel](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.