<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-22T23:40:47+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "it"
}
-->
# Costruisci un Gioco Spaziale Parte 5: Punteggio e Vite

## Quiz Pre-Lettura

[Quiz pre-lettura](https://ff-quizzes.netlify.app/web/quiz/37)

Pronto a rendere il tuo gioco spaziale un vero gioco? Aggiungiamo il sistema di punteggio e la gestione delle vite - le meccaniche fondamentali che hanno trasformato i primi giochi arcade come Space Invaders da semplici dimostrazioni a intrattenimento coinvolgente. È qui che il tuo gioco diventa davvero giocabile.

## Disegnare Testo sullo Schermo - La Voce del Tuo Gioco

Per mostrare il tuo punteggio, dobbiamo imparare a rendere il testo sulla tela. Il metodo `fillText()` è il tuo strumento principale per questo - è la stessa tecnica utilizzata nei classici giochi arcade per mostrare punteggi e informazioni di stato.

Hai il controllo completo sull'aspetto del testo:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Approfondisci [aggiungere testo a una tela](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - potresti essere sorpreso da quanto puoi essere creativo con font e stile!

## Vite - Più di un Semplice Numero

Nel design dei giochi, una "vita" rappresenta il margine di errore del giocatore. Questo concetto risale ai flipper, dove si avevano più palline con cui giocare. Nei primi videogiochi come Asteroids, le vite permettevano ai giocatori di correre rischi e imparare dai propri errori.

La rappresentazione visiva è molto importante - mostrare icone di navi invece di un semplice "Vite: 3" crea un riconoscimento visivo immediato, simile a come i primi cabinati arcade usavano l'iconografia per comunicare oltre le barriere linguistiche.

## Costruire il Sistema di Ricompense del Tuo Gioco

Ora implementeremo i sistemi di feedback fondamentali che mantengono i giocatori coinvolti:

- **Sistema di punteggio**: Ogni nave nemica distrutta assegna 100 punti (i numeri tondi sono più facili da calcolare mentalmente per i giocatori). Il punteggio viene mostrato nell'angolo in basso a sinistra.
- **Contatore delle vite**: Il tuo eroe inizia con tre vite - uno standard stabilito dai primi giochi arcade per bilanciare la sfida con la giocabilità. Ogni collisione con un nemico costa una vita. Mostreremo le vite rimanenti nell'angolo in basso a destra usando icone di navi ![immagine vita](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.it.png).

## Iniziamo a Costruire!

Per prima cosa, configura il tuo spazio di lavoro. Vai ai file nella sottocartella `your-work`. Dovresti vedere questi file:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Per testare il tuo gioco, avvia il server di sviluppo dalla cartella `your_work`:

```bash
cd your-work
npm start
```

Questo avvierà un server locale su `http://localhost:5000`. Apri questo indirizzo nel tuo browser per vedere il tuo gioco. Prova i controlli con i tasti freccia e cerca di sparare ai nemici per verificare che tutto funzioni.

### È Ora di Codificare!

1. **Prendi le risorse visive necessarie**. Copia l'asset `life.png` dalla cartella `solution/assets/` nella tua cartella `your-work`. Poi aggiungi il `lifeImg` alla tua funzione window.onload: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Non dimenticare di aggiungere il `lifeImg` alla tua lista di risorse:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Configura le variabili del gioco**. Aggiungi del codice per tenere traccia del tuo punteggio totale (partendo da 0) e delle vite rimanenti (partendo da 3). Mostreremo questi valori sullo schermo così i giocatori sapranno sempre la loro situazione.

3. **Implementa il rilevamento delle collisioni**. Estendi la tua funzione `updateGameObjects()` per rilevare quando i nemici si scontrano con il tuo eroe:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Aggiungi il tracciamento delle vite e dei punti al tuo Eroe**. 
   1. **Inizializza i contatori**. Sotto `this.cooldown = 0` nella tua classe `Hero`, configura vite e punti:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Mostra questi valori al giocatore**. Crea funzioni per disegnare questi valori sullo schermo:

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

   1. **Collega tutto al ciclo del gioco**. Aggiungi queste funzioni alla tua funzione window.onload subito dopo `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementa conseguenze e ricompense nel gioco**. Ora aggiungeremo i sistemi di feedback che rendono significative le azioni del giocatore:

   1. **Le collisioni costano vite**. Ogni volta che il tuo eroe si scontra con un nemico, perdi una vita.
   
      Aggiungi questo metodo alla tua classe `Hero`:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Sparare ai nemici guadagna punti**. Ogni colpo riuscito assegna 100 punti, fornendo un feedback positivo immediato per un tiro preciso.

      Estendi la tua classe Hero con questo metodo di incremento:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Ora collega queste funzioni agli eventi di collisione:

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

✅ Curioso di altri giochi costruiti con JavaScript e Canvas? Fai qualche ricerca - potresti essere sorpreso da ciò che è possibile!

Dopo aver implementato queste funzionalità, testa il tuo gioco per vedere il sistema di feedback completo in azione. Dovresti vedere le icone delle vite nell'angolo in basso a destra, il tuo punteggio nell'angolo in basso a sinistra, e osservare come le collisioni riducono le vite mentre i colpi riusciti aumentano il punteggio.

Il tuo gioco ora ha le meccaniche essenziali che hanno reso i primi giochi arcade così coinvolgenti - obiettivi chiari, feedback immediato e conseguenze significative per le azioni del giocatore.

---

## Sfida GitHub Copilot Agent 🚀

Usa la modalità Agent per completare la seguente sfida:

**Descrizione:** Migliora il sistema di punteggio del gioco spaziale implementando una funzione di punteggio massimo con archiviazione persistente e meccaniche di punteggio bonus.

**Prompt:** Crea un sistema di punteggio massimo che salvi il miglior punteggio del giocatore in localStorage. Aggiungi punti bonus per uccisioni consecutive di nemici (sistema combo) e implementa valori di punteggio diversi per diversi tipi di nemici. Includi un indicatore visivo quando il giocatore raggiunge un nuovo punteggio massimo e mostra il punteggio massimo attuale sullo schermo del gioco.



## 🚀 Sfida

Ora hai un gioco funzionante con punteggio e vite. Pensa a quali funzionalità aggiuntive potrebbero migliorare l'esperienza del giocatore.

## Quiz Post-Lettura

[Quiz post-lettura](https://ff-quizzes.netlify.app/web/quiz/38)

## Revisione e Studio Autonomo

Vuoi esplorare di più? Ricerca diversi approcci ai sistemi di punteggio e vite nei giochi. Ci sono motori di gioco affascinanti come [PlayFab](https://playfab.com) che gestiscono punteggi, classifiche e progressione dei giocatori. Come potrebbe l'integrazione di qualcosa del genere portare il tuo gioco al livello successivo?

## Compito

[Costruisci un Gioco con Punteggio](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.