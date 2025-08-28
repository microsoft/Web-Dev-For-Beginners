<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-26T21:54:04+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "no"
}
-->
# Bygg et romspill del 5: Poeng og liv

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/37)

I denne leksjonen vil du lære hvordan du legger til poeng i et spill og beregner liv.

## Tegn tekst på skjermen

For å kunne vise poengsummen til et spill på skjermen, må du vite hvordan du plasserer tekst på skjermen. Svaret er å bruke metoden `fillText()` på canvas-objektet. Du kan også kontrollere andre aspekter som hvilken font som skal brukes, fargen på teksten og til og med dens justering (venstre, høyre, midtstilt). Nedenfor er litt kode som tegner tekst på skjermen.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Les mer om [hvordan du legger til tekst på et canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), og føl deg fri til å gjøre din versjon mer fancy!

## Liv, som et spillkonsept

Konseptet med å ha liv i et spill er bare et tall. I konteksten av et romspill er det vanlig å tildele et sett med liv som blir trukket fra ett etter ett når skipet ditt tar skade. Det er fint om du kan vise en grafisk representasjon av dette, som små skip eller hjerter, i stedet for et tall.

## Hva skal bygges

La oss legge til følgende i spillet ditt:

- **Spillpoeng**: For hver fiendtlige skip som blir ødelagt, bør helten få noen poeng. Vi foreslår 100 poeng per skip. Spillpoengene skal vises nederst til venstre.
- **Liv**: Skipet ditt har tre liv. Du mister et liv hver gang et fiendtlig skip kolliderer med deg. Livet skal vises nederst til høyre og være laget av følgende grafikk ![livsbilde](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.no.png).

## Anbefalte steg

Finn filene som er opprettet for deg i undermappen `your-work`. Den skal inneholde følgende:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Start prosjektet ditt i `your_work`-mappen ved å skrive:

```bash
cd your-work
npm start
```

Ovennevnte vil starte en HTTP-server på adressen `http://localhost:5000`. Åpne en nettleser og skriv inn den adressen. Akkurat nå skal den vise helten og alle fiendene, og når du trykker på venstre og høyre piltaster, beveger helten seg og kan skyte ned fiender.

### Legg til kode

1. **Kopier over nødvendige ressurser** fra mappen `solution/assets/` til `your-work`-mappen; du vil legge til ressursen `life.png`. Legg til `lifeImg` i `window.onload`-funksjonen:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Legg til `lifeImg` i listen over ressurser:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Legg til variabler**. Legg til kode som representerer din totale poengsum (0) og gjenværende liv (3), og vis disse verdiene på skjermen.

3. **Utvid funksjonen `updateGameObjects()`**. Utvid funksjonen `updateGameObjects()` for å håndtere kollisjoner med fiender:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Legg til `liv` og `poeng`**. 
   1. **Initialiser variabler**. Under `this.cooldown = 0` i klassen `Hero`, sett liv og poeng:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Tegn variabler på skjermen**. Tegn disse verdiene på skjermen:

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

   1. **Legg til metoder i spill-løkken**. Sørg for å legge til disse funksjonene i `window.onload`-funksjonen under `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementer spillregler**. Implementer følgende spillregler:

   1. **For hver kollisjon mellom helten og en fiende**, trekk fra et liv.
   
      Utvid klassen `Hero` for å gjøre denne reduksjonen:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **For hver laser som treffer en fiende**, øk spillpoengene med 100 poeng.

      Utvid klassen `Hero` for å gjøre denne økningen:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Legg til disse funksjonene i dine kollisjonshendelsesutløsere:

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

✅ Gjør litt research for å oppdage andre spill som er laget med JavaScript/Canvas. Hva er deres vanlige trekk?

Når du er ferdig med dette arbeidet, bør du se de små "liv"-skipene nederst til høyre, poeng nederst til venstre, og du bør se at livene dine reduseres når du kolliderer med fiender og poengene dine øker når du skyter fiender. Bra jobbet! Spillet ditt er nesten ferdig.

---

## 🚀 Utfordring

Koden din er nesten ferdig. Kan du se for deg neste steg?

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/38)

## Gjennomgang og selvstudie

Undersøk noen måter du kan øke og redusere spillpoeng og liv. Det finnes noen interessante spillmotorer som [PlayFab](https://playfab.com). Hvordan kunne bruk av en av disse forbedret spillet ditt?

## Oppgave

[Bygg et poengspill](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.