# Costruire un Gioco Spaziale parte 5: Punteggio e Vite

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/37?loc=it)

In questa lezione si imparerà come aggiungere punteggi a una partita e calcolare le vite.

## Disegnare testo sullo schermo

Per poter visualizzare il punteggio di una partita sullo schermo, serve sapere come posizionare il testo sullo schermo. La risposta è usando il metodo `fillText()` sull'oggetto canvas. Si possono anche controllare altri aspetti come il tipo di carattere da usare, il colore del testo e anche il suo allineamento (sinistra, destra, centro). Di seguito è riportato del codice che disegna testo sullo schermo.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Si legga di più su [come aggiungere testo a un oggetto canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), ci si senta liberi di far sembrare il proprio più elaborato!

## La vita, come concetto di gioco

Il concetto di avere una vita in un gioco è solo un numero. Nel contesto di un gioco spaziale è comune assegnare una serie di vite che vengono detratte una per una quando la propria astronave subisce danni. Sarebbe bello se si potesse mostrare una rappresentazione grafica di questo come mini astronavi o cuori invece di un numero.

## Cosa costruire

Si aggiunge quanto segue al gioco:

- **Punteggio del gioco**: per ogni astronave nemica che viene distrutta, l'eroe dovrebbe ricevere alcuni punti, si suggerisce 100 punti per astronave. Il punteggio del gioco dovrebbe essere mostrato in basso a sinistra.
- **Vita**: la propria astronave ha tre vite. Si perde una vita ogni volta che una astronave nemica si scontra con la propria. Un punteggio di vita dovrebbe essere visualizzato in basso a destra ed essere ricavato dalla seguente immagine ![immagine grafica di una vita](../solution/assets/life.png).

## Passaggi consigliati

Individuare i file che già sono stati creati nella sottocartella `your-work`. Dovrebbe contenere le seguenti informazioni:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Si fa partire il progetto dalla cartella `your_work` digitando:

```bash
cd your-work
npm start
```

Quanto sopra avvierà un server HTTP all'indirizzo `http://localhost:5000`. Aprire un browser e inserire quell'indirizzo, in questo momento dovrebbe rendere l'eroe e tutti i nemici, e premendo le frecce sinistra e destra, si fa muovere l'eroe che può abbattere i nemici.

### Aggiungere codice

1. **Copiare le risorse necessarie** dalla cartella `solution/assets` nella cartella `your-work`; aggiungere una risorsa `life.png`. Aggiungere lifeImg alla funzione window.onload:

   ```javascript
   lifeImg = await loadTexture("assets/life.png");
   ```

1. Aggiungere `lifeImg` all'elenco delle risorse:

   ```javascript
   let heroImg,
   ...
   lifeImg,
   ...
   eventEmitter = new EventEmitter();
   ```

2. **Aggiungere variabili**. Aggiungere il codice che rappresenta il punteggio totale (0) e le vite rimaste (3), visualizzare questi punteggi sullo schermo.

3. **Estendere la funzione `updateGameObjects()`** . Estendere la funzione `updateGameObjects()` per gestire le collisioni con il nemico:

   ```javascript
   enemies.forEach(enemy => {
       const heroRect = hero.rectFromGameObject();
       if (intersectRect(heroRect, enemy.rectFromGameObject())) {
         eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
       }
     })
   ```

4. **Aggiungere vita (`life`) e punti (`points`)**.
   1. **Inizializzare le variabili**. Sotto `this.cooldown = 0` nella classe `Hero`, impostare la vita e i punti:

      ```javascript
      this.life = 3;
      this.points = 0;
      ```

   1. **Disegnare variabili sullo schermo**. Disegnare questi valori sullo schermo:

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

   1. **Aggiungere metodi al ciclo di gioco**. Assicurarsi di aggiungere queste funzioni alla funzione window.onload sotto `updateGameObjects()`:

      ```javascript
      drawPoints();
      drawLife();
      ```

1. **Implementare le regole del gioco**. Implementare le seguenti regole di gioco:

   1. **Per ogni collisione di eroi e nemici**, togliere una vita.

      Estendere la classe `Hero` per eseguire questa sottrazione:

      ```javascript
      decrementLife() {
        this.life--;
        if (this.life === 0) {
          this.dead = true;
        }
      }
      ```

   2. **Per ogni laser che colpisce un nemico**, aumentare il punteggio del gioco di 100 punti.

      Estendere la classe Hero per fare questo incremento:

      ```javascript
        incrementPoints() {
          this.points += 100;
        }
      ```

      Aggiungere queste funzioni agli event listener di Collision:

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

✅ Fare una piccola ricerca per scoprire altri giochi creati utilizzando JavaScript/Canvas. Quali sono i loro tratti comuni?

Alla fine di questo lavoro, si dovrebbero vedere le piccole astronavi che rappresentano le vite in basso a destra, i punti in basso a sinistra, e si dovrebbe vedere il numero di vite diminuire quando si entra in collisione con i nemici e i punti aumentare quando si colpiscono i nemici. Ottimo lavoro! Il gioco è quasi completo.

---

## 🚀 Sfida

Il codice è quasi completo. Si riescono a immaginare i prossimi passi?

## Quiz Post-Lezione

[Quiz post-lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/38?loc=it)

## Revisione e Auto Apprendimento

Cercare alcuni modi per aumentare e diminuire i punteggi e le vite del gioco. Ci sono alcuni motori di gioco interessanti come [PlayFab](https://playfab.com). In che modo l'utilizzo di uno di questi potrebbe migliorare il proprio gioco?

## Compito

[Costruire un Gioco di Punteggio](assignment.it.md)
