<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-23T22:38:22+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "no"
}
-->
# Bygg et Romspill Del 5: Poeng og Liv

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/37)

Klar for å gjøre romspillet ditt til et ekte spill? La oss legge til poengsystem og livshåndtering - de grunnleggende mekanismene som forvandlet tidlige arkadespill som Space Invaders fra enkle demonstrasjoner til avhengighetsskapende underholdning. Dette er punktet hvor spillet ditt blir virkelig spillbart.

## Tegne tekst på skjermen - Spillets stemme

For å vise poengsummen din, må vi lære hvordan vi kan vise tekst på lerretet. Metoden `fillText()` er ditt viktigste verktøy for dette - det er samme teknikk som ble brukt i klassiske arkadespill for å vise poengsummer og statusinformasjon.

Du har full kontroll over tekstens utseende:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Utforsk mer om [å legge til tekst på et lerret](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - du kan bli overrasket over hvor kreativ du kan være med skrifttyper og styling!

## Liv - Mer enn bare et tall

I spilldesign representerer et "liv" spillerens margin for feil. Dette konseptet stammer fra flipperspill, hvor du fikk flere baller å spille med. I tidlige videospill som Asteroids ga liv spillerne tillatelse til å ta risiko og lære av feil.

Visuell representasjon er svært viktig - å vise skip-ikoner i stedet for bare "Liv: 3" skaper umiddelbar visuell gjenkjennelse, på samme måte som tidlige arkadekabinetter brukte ikonografi for å kommunisere på tvers av språkbarrierer.

## Bygg belønningssystemet i spillet ditt

Nå skal vi implementere de grunnleggende tilbakemeldingssystemene som holder spillerne engasjert:

- **Poengsystem**: Hvert ødelagt fiendeskip gir 100 poeng (runde tall er enklere for spillere å regne ut mentalt). Poengsummen vises nederst til venstre.
- **Livsteller**: Helten din starter med tre liv - en standard etablert av tidlige arkadespill for å balansere utfordring med spillbarhet. Hver kollisjon med en fiende koster ett liv. Vi viser gjenværende liv nederst til høyre ved hjelp av skip-ikoner ![livsbilde](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.no.png).

## La oss komme i gang!

Først, sett opp arbeidsområdet ditt. Naviger til filene i `your-work` undermappen. Du bør se disse filene:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

For å teste spillet ditt, start utviklingsserveren fra `your_work`-mappen:

```bash
cd your-work
npm start
```

Dette kjører en lokal server på `http://localhost:5000`. Åpne denne adressen i nettleseren din for å se spillet ditt. Test kontrollene med piltastene og prøv å skyte fiender for å verifisere at alt fungerer.

### Tid for koding!

1. **Hent de visuelle ressursene du trenger**. Kopier `life.png`-ressursen fra `solution/assets/`-mappen til `your-work`-mappen din. Legg deretter til lifeImg i din window.onload-funksjon:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Ikke glem å legge til `lifeImg` i ressurslisten din:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Sett opp spillvariablene dine**. Legg til litt kode for å spore din totale poengsum (starter på 0) og gjenværende liv (starter på 3). Vi viser disse på skjermen slik at spillerne alltid vet hvor de står.

3. **Implementer kollisjonsdeteksjon**. Utvid `updateGameObjects()`-funksjonen din for å oppdage når fiender kolliderer med helten din:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Legg til livs- og poengsporing til helten din**. 
   1. **Initialiser tellerne**. Under `this.cooldown = 0` i din `Hero`-klasse, sett opp liv og poeng:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Vis disse verdiene til spilleren**. Lag funksjoner for å tegne disse verdiene på skjermen:

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

   1. **Koble alt til spill-loopen din**. Legg til disse funksjonene i din window.onload-funksjon rett etter `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementer konsekvenser og belønninger i spillet**. Nå skal vi legge til tilbakemeldingssystemene som gjør spillerens handlinger meningsfulle:

   1. **Kollisjoner koster liv**. Hver gang helten din krasjer inn i en fiende, bør du miste et liv.
   
      Legg til denne metoden i din `Hero`-klasse:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Å skyte fiender gir poeng**. Hvert vellykket treff gir 100 poeng, som gir umiddelbar positiv tilbakemelding for presis skyting.

      Utvid Hero-klassen din med denne inkrementeringsmetoden:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Koble nå disse funksjonene til kollisjonshendelsene dine:

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

✅ Nysgjerrig på andre spill laget med JavaScript og Canvas? Utforsk litt - du kan bli overrasket over hva som er mulig!

Etter å ha implementert disse funksjonene, test spillet ditt for å se det komplette tilbakemeldingssystemet i aksjon. Du bør se livsikoner nederst til høyre, poengsummen din nederst til venstre, og se hvordan kollisjoner reduserer livene mens vellykkede skudd øker poengsummen din.

Spillet ditt har nå de essensielle mekanismene som gjorde tidlige arkadespill så fengslende - klare mål, umiddelbar tilbakemelding og meningsfulle konsekvenser for spillerens handlinger.

---

## GitHub Copilot Agent Challenge 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Forbedre romspillets poengsystem ved å implementere en high score-funksjon med vedvarende lagring og bonuspoengmekanismer.

**Oppgave:** Lag et high score-system som lagrer spillerens beste poengsum til localStorage. Legg til bonuspoeng for påfølgende fiendedrap (kombosystem) og implementer forskjellige poengverdier for ulike fiendetyper. Inkluder en visuell indikator når spilleren oppnår en ny high score og vis den nåværende high scoren på spillskjermen.



## 🚀 Utfordring

Du har nå et funksjonelt spill med poeng og liv. Tenk over hvilke ekstra funksjoner som kan forbedre spilleropplevelsen.

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/38)

## Gjennomgang og selvstudium

Vil du utforske mer? Undersøk forskjellige tilnærminger til poeng- og livssystemer i spill. Det finnes fascinerende spillmotorer der ute som [PlayFab](https://playfab.com) som håndterer poengsummer, rangeringer og spillerutvikling. Hvordan kan integrering av noe slikt ta spillet ditt til neste nivå?

## Oppgave

[Bygg et poengspill](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.