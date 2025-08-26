<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-25T22:05:32+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "it"
}
-->
# Costruire un Gioco Spaziale Parte 5: Punteggio e Vite

## Quiz Pre-Lettura

[Quiz pre-lettura](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

In questa lezione, imparerai come aggiungere un punteggio a un gioco e calcolare le vite.

## Disegnare testo sullo schermo

Per poter visualizzare il punteggio del gioco sullo schermo, devi sapere come posizionare il testo. La risposta è utilizzare il metodo `fillText()` sull'oggetto canvas. Puoi anche controllare altri aspetti come il font da usare, il colore del testo e persino il suo allineamento (sinistra, destra, centro). Di seguito c'è un codice che disegna del testo sullo schermo.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Leggi di più su [come aggiungere testo a un canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) e sentiti libero di renderlo più elegante!

## La vita, come concetto di gioco

Il concetto di avere una vita in un gioco è semplicemente un numero. Nel contesto di un gioco spaziale, è comune assegnare un set di vite che vengono sottratte una alla volta quando la tua nave subisce danni. È bello se puoi mostrare una rappresentazione grafica di questo, come mini-navi o cuori, invece di un numero.

## Cosa costruire

Aggiungiamo i seguenti elementi al tuo gioco:

- **Punteggio del gioco**: Per ogni nave nemica distrutta, l'eroe dovrebbe guadagnare dei punti, suggeriamo 100 punti per nave. Il punteggio del gioco dovrebbe essere mostrato in basso a sinistra.
- **Vite**: La tua nave ha tre vite. Perdi una vita ogni volta che una nave nemica collide con te. Il punteggio delle vite dovrebbe essere visualizzato in basso a destra e rappresentato dal seguente grafico ![immagine della vita](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.it.png).

## Passaggi consigliati

Trova i file che sono stati creati per te nella sottocartella `your-work`. Dovrebbe contenere quanto segue:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Avvia il tuo progetto nella cartella `your_work` digitando:

```bash
cd your-work
npm start
```

Quanto sopra avvierà un server HTTP all'indirizzo `http://localhost:5000`. Apri un browser e inserisci quell'indirizzo, al momento dovrebbe visualizzare l'eroe e tutti i nemici, e mentre premi le frecce sinistra e destra, l'eroe si muove e può abbattere i nemici.

### Aggiungere codice

1. **Copia gli asset necessari** dalla cartella `solution/assets/` nella cartella `your-work`; aggiungerai un asset `life.png`. Aggiungi il `lifeImg` alla funzione window.onload: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Aggiungi il `lifeImg` alla lista degli asset:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Aggiungi variabili**. Aggiungi codice che rappresenta il tuo punteggio totale (0) e le vite rimaste (3), visualizza questi punteggi sullo schermo.

3. **Estendi la funzione `updateGameObjects()`**. Estendi la funzione `updateGameObjects()` per gestire le collisioni con i nemici:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Aggiungi vite e punti**. 
   1. **Inizializza variabili**. Sotto `this.cooldown = 0` nella classe `Hero`, imposta vite e punti:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Disegna variabili sullo schermo**. Disegna questi valori sullo schermo:

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

   1. **Aggiungi metodi al ciclo di gioco**. Assicurati di aggiungere queste funzioni alla tua funzione window.onload sotto `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementa le regole del gioco**. Implementa le seguenti regole del gioco:

   1. **Per ogni collisione tra eroe e nemico**, sottrai una vita.
   
      Estendi la classe `Hero` per fare questa sottrazione:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Per ogni laser che colpisce un nemico**, aumenta il punteggio del gioco di 100 punti.

      Estendi la classe Hero per fare questo incremento:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Aggiungi queste funzioni ai tuoi Collision Event Emitters:

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

✅ Fai una piccola ricerca per scoprire altri giochi creati usando JavaScript/Canvas. Quali sono i loro tratti comuni?

Alla fine di questo lavoro, dovresti vedere le piccole navi 'vita' in basso a destra, i punti in basso a sinistra, e dovresti vedere il conteggio delle vite diminuire quando collidi con i nemici e i punti aumentare quando abbatti i nemici. Ben fatto! Il tuo gioco è quasi completo.

---

## 🚀 Sfida

Il tuo codice è quasi completo. Riesci a immaginare i prossimi passi?

## Quiz Post-Lettura

[Quiz post-lettura](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## Revisione e Studio Autonomo

Ricerca alcuni modi per incrementare e decrementare i punteggi e le vite nei giochi. Ci sono alcuni motori di gioco interessanti come [PlayFab](https://playfab.com). Come potrebbe l'utilizzo di uno di questi migliorare il tuo gioco?

## Compito

[Costruisci un gioco con punteggio](assignment.md)

**Disclaimer (Avvertenza)**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di tenere presente che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale eseguita da un traduttore umano. Non siamo responsabili per eventuali malintesi o interpretazioni errate derivanti dall'uso di questa traduzione.