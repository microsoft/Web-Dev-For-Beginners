<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T00:07:56+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "it"
}
-->
# Costruire un Gioco Spaziale Parte 4: Aggiungere un Laser e Rilevare Collisioni

## Quiz Pre-Lezione

[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/35)

In questa lezione imparerai a sparare laser con JavaScript! Aggiungeremo due elementi al nostro gioco:

- **Un laser**: questo laser viene sparato dalla nave del tuo eroe verso l'alto
- **Rilevamento delle collisioni**, come parte dell'implementazione della capacità di *sparare*, aggiungeremo anche alcune regole di gioco interessanti:
   - **Il laser colpisce un nemico**: il nemico muore se colpito da un laser
   - **Il laser colpisce la parte superiore dello schermo**: un laser viene distrutto se colpisce la parte superiore dello schermo
   - **Collisione tra nemico ed eroe**: un nemico e l'eroe vengono distrutti se si scontrano
   - **Il nemico raggiunge il fondo dello schermo**: un nemico e l'eroe vengono distrutti se il nemico raggiunge il fondo dello schermo

In breve, tu -- *l'eroe* -- devi colpire tutti i nemici con un laser prima che riescano a raggiungere il fondo dello schermo.

✅ Fai una piccola ricerca sul primissimo videogioco mai creato. Qual era la sua funzionalità?

Diventiamo eroici insieme!

## Rilevamento delle collisioni

Come facciamo a rilevare le collisioni? Dobbiamo pensare ai nostri oggetti di gioco come a rettangoli in movimento. Perché, ti chiederai? Beh, l'immagine usata per disegnare un oggetto di gioco è un rettangolo: ha un `x`, `y`, `width` e `height`.

Se due rettangoli, ad esempio un eroe e un nemico, *si intersecano*, hai una collisione. Cosa dovrebbe succedere in quel caso dipende dalle regole del gioco. Per implementare il rilevamento delle collisioni, hai bisogno di quanto segue:

1. Un modo per ottenere una rappresentazione rettangolare di un oggetto di gioco, qualcosa del genere:

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. Una funzione di confronto, che può avere questo aspetto:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Come distruggere gli oggetti

Per distruggere oggetti in un gioco, devi far sapere al gioco che non deve più disegnare quell'oggetto nel ciclo di gioco che si attiva a un certo intervallo. Un modo per farlo è contrassegnare un oggetto di gioco come *morto* quando succede qualcosa, come segue:

```javascript
// collision happened
enemy.dead = true
```

Poi puoi procedere a escludere gli oggetti *morti* prima di ridisegnare lo schermo, come segue:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Come sparare un laser

Sparare un laser significa rispondere a un evento di pressione di un tasto e creare un oggetto che si muove in una certa direzione. Dobbiamo quindi eseguire i seguenti passaggi:

1. **Creare un oggetto laser**: dalla parte superiore della nave del nostro eroe, che al momento della creazione inizia a muoversi verso l'alto, verso la parte superiore dello schermo.
2. **Associare il codice a un evento di pressione di un tasto**: dobbiamo scegliere un tasto sulla tastiera che rappresenti il giocatore che spara il laser.
3. **Creare un oggetto di gioco che sembri un laser** quando il tasto viene premuto.

## Cooldown del laser

Il laser deve essere sparato ogni volta che premi un tasto, ad esempio *spazio*. Per evitare che il gioco produca troppi laser in un breve periodo, dobbiamo risolvere questo problema. La soluzione consiste nell'implementare un cosiddetto *cooldown*, un timer, che garantisce che un laser possa essere sparato solo a intervalli regolari. Puoi implementarlo in questo modo:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ Consulta la lezione 1 della serie sul gioco spaziale per ricordarti dei *cooldown*.

## Cosa costruire

Prenderai il codice esistente (che dovresti aver ripulito e rifattorizzato) dalla lezione precedente e lo estenderai. Puoi iniziare con il codice della parte II o utilizzare il codice in [Parte III - starter](../../../../../../../../../your-work).

> Suggerimento: il laser con cui lavorerai è già nella tua cartella delle risorse ed è referenziato dal tuo codice.

- **Aggiungi il rilevamento delle collisioni**, quando un laser collide con qualcosa, devono essere applicate le seguenti regole:
   1. **Il laser colpisce un nemico**: il nemico muore se colpito da un laser
   2. **Il laser colpisce la parte superiore dello schermo**: un laser viene distrutto se colpisce la parte superiore dello schermo
   3. **Collisione tra nemico ed eroe**: un nemico e l'eroe vengono distrutti se si scontrano
   4. **Il nemico raggiunge il fondo dello schermo**: un nemico e l'eroe vengono distrutti se il nemico raggiunge il fondo dello schermo

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

Il comando sopra avvierà un server HTTP all'indirizzo `http://localhost:5000`. Apri un browser e inserisci quell'indirizzo, al momento dovrebbe mostrare l'eroe e tutti i nemici, ma nulla si muove - ancora :).

### Aggiungi codice

1. **Configura una rappresentazione rettangolare del tuo oggetto di gioco per gestire le collisioni**. Il codice seguente ti consente di ottenere una rappresentazione rettangolare di un `GameObject`. Modifica la tua classe GameObject per estenderla:

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **Aggiungi codice che controlla le collisioni**. Questa sarà una nuova funzione che verifica se due rettangoli si intersecano:

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **Aggiungi la capacità di sparare laser**
   1. **Aggiungi un messaggio per l'evento del tasto**. Il tasto *spazio* dovrebbe creare un laser appena sopra la nave dell'eroe. Aggiungi tre costanti nell'oggetto Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Gestisci il tasto spazio**. Modifica la funzione `window.addEventListener` per il keyup per gestire il tasto spazio:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Aggiungi listener**. Modifica la funzione `initGame()` per assicurarti che l'eroe possa sparare quando viene premuto il tasto spazio:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       e aggiungi una nuova funzione `eventEmitter.on()` per garantire il comportamento quando un nemico collide con un laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Muovi l'oggetto**, assicurati che il laser si muova gradualmente verso la parte superiore dello schermo. Creerai una nuova classe Laser che estende `GameObject`, come hai fatto in precedenza: 
   
      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **Gestisci le collisioni**, implementa le regole di collisione per il laser. Aggiungi una funzione `updateGameObjects()` che verifica gli oggetti in collisione:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      Assicurati di aggiungere `updateGameObjects()` nel tuo ciclo di gioco in `window.onload`.

   4. **Implementa il cooldown** per il laser, in modo che possa essere sparato solo a intervalli regolari.

      Infine, modifica la classe Hero in modo che possa gestire il cooldown:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

A questo punto, il tuo gioco ha una certa funzionalità! Puoi navigare con i tasti freccia, sparare un laser con la barra spaziatrice e i nemici scompaiono quando li colpisci. Ben fatto!

---

## 🚀 Sfida

Aggiungi un'esplosione! Dai un'occhiata alle risorse di gioco nel [repo Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) e prova ad aggiungere un'esplosione quando il laser colpisce un alieno.

## Quiz Post-Lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/36)

## Revisione e Studio Autonomo

Sperimenta con gli intervalli nel tuo gioco fino a questo punto. Cosa succede quando li cambi? Leggi di più sugli [eventi di temporizzazione in JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Compito

[Esplora le collisioni](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.