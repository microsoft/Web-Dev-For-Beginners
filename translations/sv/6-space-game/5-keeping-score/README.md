<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-23T21:49:02+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "sv"
}
-->
# Bygg ett rymdspel del 5: Poäng och liv

## Quiz före föreläsningen

[Quiz före föreläsningen](https://ff-quizzes.netlify.app/web/quiz/37)

Redo att göra ditt rymdspel till ett riktigt spel? Låt oss lägga till poäng och hantering av liv - de grundläggande mekanismerna som förvandlade tidiga arkadspel som Space Invaders från enkla demonstrationer till beroendeframkallande underhållning. Det är här ditt spel blir riktigt spelbart.

## Visa text på skärmen - spelets röst

För att visa din poäng måste vi lära oss hur man renderar text på canvas. Metoden `fillText()` är ditt främsta verktyg för detta - det är samma teknik som användes i klassiska arkadspel för att visa poäng och statusinformation.

Du har full kontroll över textens utseende:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Utforska mer om [att lägga till text på en canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - du kanske blir förvånad över hur kreativ du kan vara med typsnitt och styling!

## Liv - mer än bara en siffra

Inom speldesign representerar ett "liv" spelarens marginal för misstag. Detta koncept går tillbaka till flipperspel, där man fick flera bollar att spela med. I tidiga videospel som Asteroids gav liv spelarna tillåtelse att ta risker och lära sig av sina misstag.

Visuell representation är mycket viktig - att visa skeppsikoner istället för bara "Liv: 3" skapar omedelbar visuell igenkänning, precis som tidiga arkadkabinetter använde ikonografi för att kommunicera över språkbarriärer.

## Bygg ditt spels belöningssystem

Nu ska vi implementera de grundläggande feedbacksystemen som håller spelarna engagerade:

- **Poängsystem**: Varje förstört fiendeskepp ger 100 poäng (runda siffror är lättare för spelare att räkna mentalt). Poängen visas i det nedre vänstra hörnet.
- **Livräknare**: Din hjälte börjar med tre liv - en standard som etablerades av tidiga arkadspel för att balansera utmaning med spelbarhet. Varje kollision med en fiende kostar ett liv. Vi visar återstående liv i det nedre högra hörnet med skeppsikoner ![livsbild](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.sv.png).

## Låt oss börja bygga!

Först, ställ in din arbetsyta. Navigera till filerna i din `your-work` undermapp. Du bör se dessa filer:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

För att testa ditt spel, starta utvecklingsservern från mappen `your_work`:

```bash
cd your-work
npm start
```

Detta kör en lokal server på `http://localhost:5000`. Öppna denna adress i din webbläsare för att se ditt spel. Testa kontrollerna med piltangenterna och försök skjuta fiender för att verifiera att allt fungerar.

### Dags att koda!

1. **Hämta de visuella resurser du behöver**. Kopiera `life.png`-resursen från mappen `solution/assets/` till din `your-work`-mapp. Lägg sedan till lifeImg i din window.onload-funktion: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Glöm inte att lägga till `lifeImg` i din resurslista:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Ställ in dina spelvariabler**. Lägg till lite kod för att spåra din totala poäng (startar på 0) och återstående liv (startar på 3). Vi kommer att visa dessa på skärmen så att spelarna alltid vet var de står.

3. **Implementera kollisionsdetektering**. Utöka din `updateGameObjects()`-funktion för att upptäcka när fiender kolliderar med din hjälte:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Lägg till liv- och poängspårning till din hjälte**. 
   1. **Initiera räknarna**. Under `this.cooldown = 0` i din `Hero`-klass, ställ in liv och poäng:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Visa dessa värden för spelaren**. Skapa funktioner för att visa dessa värden på skärmen:

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

   1. **Koppla allt till din spel-loop**. Lägg till dessa funktioner i din window.onload-funktion direkt efter `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementera konsekvenser och belöningar i spelet**. Nu ska vi lägga till feedbacksystemen som gör spelarens handlingar meningsfulla:

   1. **Kollisioner kostar liv**. Varje gång din hjälte kraschar in i en fiende, ska du förlora ett liv.
   
      Lägg till denna metod i din `Hero`-klass:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Att skjuta fiender ger poäng**. Varje lyckad träff ger 100 poäng, vilket ger omedelbar positiv feedback för träffsäker skjutning.

      Utöka din Hero-klass med denna inkrementeringsmetod:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Koppla nu dessa funktioner till dina kollisionshändelser:

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

✅ Nyfiken på andra spel som byggts med JavaScript och Canvas? Utforska lite - du kanske blir förvånad över vad som är möjligt!

Efter att ha implementerat dessa funktioner, testa ditt spel för att se det kompletta feedbacksystemet i aktion. Du bör se livsikoner i det nedre högra hörnet, din poäng i det nedre vänstra hörnet, och se hur kollisioner minskar liv medan lyckade skott ökar din poäng.

Ditt spel har nu de grundläggande mekanismerna som gjorde tidiga arkadspel så fängslande - tydliga mål, omedelbar feedback och meningsfulla konsekvenser för spelarens handlingar.

---

## GitHub Copilot Agent Challenge 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Förbättra rymdspelets poängsystem genom att implementera en funktion för högsta poäng med beständig lagring och bonuspoängsmekanik.

**Uppmaning:** Skapa ett system för högsta poäng som sparar spelarens bästa poäng i localStorage. Lägg till bonuspoäng för konsekutiva fiendeträffar (kombosystem) och implementera olika poängvärden för olika fiendetyper. Inkludera en visuell indikator när spelaren uppnår en ny högsta poäng och visa den aktuella högsta poängen på spelskärmen.



## 🚀 Utmaning

Du har nu ett fungerande spel med poäng och liv. Fundera på vilka ytterligare funktioner som kan förbättra spelupplevelsen.

## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/38)

## Granskning & Självstudier

Vill du utforska mer? Undersök olika tillvägagångssätt för poäng- och livsystem i spel. Det finns fascinerande spelmotorer där ute som [PlayFab](https://playfab.com) som hanterar poäng, topplistor och spelarutveckling. Hur skulle en integration av något sådant kunna ta ditt spel till nästa nivå?

## Uppgift

[Bygg ett poängspel](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.