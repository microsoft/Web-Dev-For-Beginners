<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-23T01:06:45+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "nl"
}
-->
# Bouw een Ruimtespel Deel 5: Punten en Levens

## Pre-Les Quiz

[Pre-les quiz](https://ff-quizzes.netlify.app/web/quiz/37)

Klaar om je ruimtespel echt als een spel te laten voelen? Laten we punten toevoegen en levens beheren - de kernmechanieken die vroege arcadespellen zoals Space Invaders transformeerden van eenvoudige demonstraties tot verslavend entertainment. Dit is waar je spel echt speelbaar wordt.

## Tekst op het Scherm Tekenen - De Stem van je Spel

Om je score weer te geven, moeten we leren hoe we tekst op het canvas kunnen renderen. De `fillText()`-methode is je belangrijkste hulpmiddel hiervoor - dezelfde techniek die in klassieke arcadespellen werd gebruikt om scores en statusinformatie te tonen.

Je hebt volledige controle over het uiterlijk van de tekst:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Duik dieper in [tekst toevoegen aan een canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - je zult verrast zijn hoe creatief je kunt zijn met lettertypen en stijlen!

## Levens - Meer dan Alleen een Nummer

In game design vertegenwoordigt een "leven" de foutmarge van de speler. Dit concept gaat terug tot flipperkasten, waar je meerdere ballen kreeg om mee te spelen. In vroege videogames zoals Asteroids gaven levens spelers de vrijheid om risico's te nemen en van fouten te leren.

Visuele representatie is enorm belangrijk - het tonen van scheepsiconen in plaats van alleen "Levens: 3" zorgt voor directe visuele herkenning, vergelijkbaar met hoe vroege arcade-kasten iconografie gebruikten om over taalbarrières heen te communiceren.

## Het Beloningssysteem van je Spel Bouwen

Nu gaan we de kernfeedbacksystemen implementeren die spelers betrokken houden:

- **Puntensysteem**: Elk vernietigd vijandelijk schip levert 100 punten op (ronde getallen zijn gemakkelijker voor spelers om mentaal te berekenen). De score wordt weergegeven in de linkerbenedenhoek.
- **Leventeller**: Je held begint met drie levens - een standaard die door vroege arcadespellen werd vastgesteld om uitdaging en speelbaarheid in balans te brengen. Elke botsing met een vijand kost één leven. We tonen de resterende levens in de rechterbenedenhoek met scheepsiconen ![leven afbeelding](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.nl.png).

## Laten we Beginnen!

Stel eerst je werkruimte in. Navigeer naar de bestanden in je `your-work` submap. Je zou deze bestanden moeten zien:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Om je spel te testen, start de ontwikkelserver vanuit de `your_work` map:

```bash
cd your-work
npm start
```

Dit draait een lokale server op `http://localhost:5000`. Open dit adres in je browser om je spel te zien. Test de besturing met de pijltjestoetsen en probeer vijanden neer te schieten om te verifiëren dat alles werkt.

### Tijd om te Coderen!

1. **Pak de visuele assets die je nodig hebt**. Kopieer het `life.png` asset uit de `solution/assets/` map naar je `your-work` map. Voeg vervolgens de lifeImg toe aan je window.onload functie:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Vergeet niet om de `lifeImg` toe te voegen aan je lijst met assets:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Stel je spelvariabelen in**. Voeg wat code toe om je totale score (beginnend bij 0) en resterende levens (beginnend bij 3) bij te houden. We zullen deze op het scherm weergeven zodat spelers altijd weten waar ze staan.

3. **Implementeer botsingsdetectie**. Breid je `updateGameObjects()` functie uit om te detecteren wanneer vijanden botsen met je held:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Voeg levens- en puntentracking toe aan je Held**. 
   1. **Initialiseer de tellers**. Onder `this.cooldown = 0` in je `Hero` klasse, stel levens en punten in:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Toon deze waarden aan de speler**. Maak functies om deze waarden op het scherm te tekenen:

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

   1. **Koppel alles aan je gameloop**. Voeg deze functies toe aan je window.onload functie direct na `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementeer spelgevolgen en beloningen**. Nu voegen we de feedbacksystemen toe die de acties van de speler betekenisvol maken:

   1. **Botsingen kosten levens**. Elke keer dat je held tegen een vijand botst, verlies je een leven.
   
      Voeg deze methode toe aan je `Hero` klasse:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Vijanden neerschieten levert punten op**. Elke succesvolle treffer levert 100 punten op, wat directe positieve feedback geeft voor nauwkeurig schieten.

      Breid je Hero klasse uit met deze incrementeermethode:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Verbind nu deze functies met je botsingsevenementen:

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

✅ Nieuwsgierig naar andere spellen gebouwd met JavaScript en Canvas? Doe wat onderzoek - je zult versteld staan van wat er mogelijk is!

Na het implementeren van deze functies, test je je spel om het complete feedbacksysteem in actie te zien. Je zou levensiconen in de rechterbenedenhoek moeten zien, je score in de linkerbenedenhoek, en zien hoe botsingen levens verminderen terwijl succesvolle schoten je score verhogen.

Je spel heeft nu de essentiële mechanieken die vroege arcadespellen zo boeiend maakten - duidelijke doelen, directe feedback en betekenisvolle gevolgen voor acties van de speler.

---

## GitHub Copilot Agent Uitdaging 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Verbeter het puntensysteem van het ruimtespel door een highscorefunctie met persistente opslag en bonuspuntenmechanismen te implementeren.

**Prompt:** Maak een highscore-systeem dat de beste score van de speler opslaat in localStorage. Voeg bonuspunten toe voor opeenvolgende vijandelijke kills (combosysteem) en implementeer verschillende puntenwaarden voor verschillende vijandtypes. Voeg een visuele indicator toe wanneer de speler een nieuwe highscore behaalt en toon de huidige highscore op het scherm van het spel.



## 🚀 Uitdaging

Je hebt nu een functioneel spel met punten en levens. Overweeg welke extra functies de spelerservaring zouden kunnen verbeteren.

## Post-Les Quiz

[Post-les quiz](https://ff-quizzes.netlify.app/web/quiz/38)

## Review & Zelfstudie

Wil je meer ontdekken? Onderzoek verschillende benaderingen van puntensystemen en levenssystemen in games. Er zijn fascinerende game-engines zoals [PlayFab](https://playfab.com) die scores, ranglijsten en spelersprogressie beheren. Hoe zou het integreren van zoiets je spel naar een hoger niveau kunnen tillen?

## Opdracht

[Bouw een Puntenspel](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.