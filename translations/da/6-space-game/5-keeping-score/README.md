<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-23T22:12:45+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "da"
}
-->
# Byg et Rumspil Del 5: Point og Liv

## Quiz før forelæsning

[Quiz før forelæsning](https://ff-quizzes.netlify.app/web/quiz/37)

Klar til at gøre dit rumspil til et rigtigt spil? Lad os tilføje point og håndtering af liv - de kerneelementer, der forvandlede tidlige arkadespil som Space Invaders fra simple demonstrationer til vanedannende underholdning. Det er her, dit spil bliver virkelig spilbart.

## Tegn tekst på skærmen - Din spils stemme

For at vise din score skal vi lære, hvordan man gengiver tekst på lærredet. Metoden `fillText()` er dit primære værktøj til dette - det er den samme teknik, som blev brugt i klassiske arkadespil til at vise point og statusinformation.

Du har fuld kontrol over tekstens udseende:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Dyk dybere ned i [tilføjelse af tekst til et lærred](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - du vil måske blive overrasket over, hvor kreativ du kan være med skrifttyper og styling!

## Liv - Mere end bare et tal

I spildesign repræsenterer et "liv" spillerens margin for fejl. Dette koncept går tilbage til flippermaskiner, hvor man fik flere kugler at spille med. I tidlige videospil som Asteroids gav liv spillerne tilladelse til at tage chancer og lære af deres fejl.

Visuel repræsentation betyder meget - at vise skibsikoner i stedet for blot "Liv: 3" skaber øjeblikkelig visuel genkendelse, ligesom tidlige arkadekabinetter brugte ikonografi til at kommunikere på tværs af sprogbarrierer.

## Byg dit spils belønningssystem

Nu implementerer vi de kernefeedbacksystemer, der holder spillerne engagerede:

- **Pointsystem**: Hvert ødelagt fjendeskib giver 100 point (runde tal er lettere for spillere at beregne mentalt). Scoren vises nederst til venstre.
- **Livstæller**: Din helt starter med tre liv - en standard etableret af tidlige arkadespil for at balancere udfordring med spilbarhed. Hver kollision med en fjende koster et liv. Vi viser de resterende liv nederst til højre med skibsikoner ![livsbillede](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.da.png).

## Lad os komme i gang!

Først skal du sætte din arbejdsplads op. Naviger til filerne i din `your-work` undermappe. Du bør se disse filer:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

For at teste dit spil skal du starte udviklingsserveren fra mappen `your_work`:

```bash
cd your-work
npm start
```

Dette kører en lokal server på `http://localhost:5000`. Åbn denne adresse i din browser for at se dit spil. Test kontrollerne med piletasterne og prøv at skyde fjender for at verificere, at alt fungerer.

### Tid til at kode!

1. **Hent de visuelle ressourcer, du skal bruge**. Kopier `life.png` ressourcen fra mappen `solution/assets/` til din `your-work` mappe. Tilføj derefter lifeImg til din window.onload funktion: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Glem ikke at tilføje `lifeImg` til din liste over ressourcer:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Opsæt dine spilvariabler**. Tilføj noget kode for at spore din samlede score (starter ved 0) og resterende liv (starter ved 3). Vi viser disse på skærmen, så spillerne altid ved, hvor de står.

3. **Implementer kollisionsdetektion**. Udvid din `updateGameObjects()` funktion til at opdage, når fjender kolliderer med din helt:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Tilføj livs- og pointsporing til din helt**. 
   1. **Initialiser tællerne**. Under `this.cooldown = 0` i din `Hero` klasse, opsæt liv og point:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Vis disse værdier til spilleren**. Opret funktioner til at tegne disse værdier på skærmen:

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

   1. **Integrer alt i din spilsløjfe**. Tilføj disse funktioner til din window.onload funktion lige efter `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementer konsekvenser og belønninger i spillet**. Nu tilføjer vi de feedbacksystemer, der gør spillerens handlinger meningsfulde:

   1. **Kollisioner koster liv**. Hver gang din helt støder ind i en fjende, skal du miste et liv.
   
      Tilføj denne metode til din `Hero` klasse:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **At skyde fjender giver point**. Hvert vellykket skud giver 100 point, hvilket giver øjeblikkelig positiv feedback for præcise skud.

      Udvid din Hero klasse med denne metode til at øge point:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Forbind nu disse funktioner til dine kollisionshændelser:

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

✅ Nysgerrig efter andre spil bygget med JavaScript og Canvas? Udforsk lidt - du vil måske blive overrasket over, hvad der er muligt!

Efter at have implementeret disse funktioner, test dit spil for at se det komplette feedbacksystem i aktion. Du bør se livsikoner nederst til højre, din score nederst til venstre, og se hvordan kollisioner reducerer liv, mens vellykkede skud øger din score.

Dit spil har nu de essentielle mekanikker, der gjorde tidlige arkadespil så fængslende - klare mål, øjeblikkelig feedback og meningsfulde konsekvenser for spillerens handlinger.

---

## GitHub Copilot Agent Challenge 🚀

Brug Agent mode til at fuldføre følgende udfordring:

**Beskrivelse:** Forbedr rumspillets pointssystem ved at implementere en high score funktion med persistent lagring og bonuspoint-mekanik.

**Opgave:** Opret et high score system, der gemmer spillerens bedste score i localStorage. Tilføj bonuspoint for konsekutive fjendedrab (kombosystem) og implementer forskellige pointværdier for forskellige fjendetyper. Inkluder en visuel indikator, når spilleren opnår en ny high score, og vis den aktuelle high score på spilskærmen.



## 🚀 Udfordring

Du har nu et funktionelt spil med point og liv. Overvej hvilke yderligere funktioner der kunne forbedre spilleroplevelsen.

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/38)

## Gennemgang & Selvstudie

Vil du udforske mere? Undersøg forskellige tilgange til spilscoring og livssystemer. Der findes fascinerende spilmotorer derude som [PlayFab](https://playfab.com), der håndterer scoring, ranglister og spillerudvikling. Hvordan kunne integration af noget lignende tage dit spil til næste niveau?

## Opgave

[Byg et Pointspil](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.