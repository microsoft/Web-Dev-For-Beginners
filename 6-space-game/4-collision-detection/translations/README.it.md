# Costruire un Gioco Spaziale Parte 4: Aggiungere un Laser e Rilevare le Collisioni

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/35?loc=it)

In questa lezione si imparererà come fare fuoco con i laser con JavaScript! Verranno aggiunte due cose al gioco:

- **Un laser**: questo laser viene sparato dall'astronave del proprio eroe e verticalmente verso l'alto
- **Rilevamento delle collisioni**, come parte dell'implementazione della capacità di *sparare* , si aggiungeranno anche alcune simpatiche regole di gioco:
   - Il **laser colpisce il nemico**: il nemico muore se colpito da un laser
   - Il **laser raggiunge lo schermo superiore**: un laser viene distrutto se raggiunge la parte superiore dello schermo
   - **Collisione tra nemico ed eroe**: un nemico e l'eroe vengono distrutti se entrano in collisione
   - Il **nemico raggiunge la parte inferiore dello schermo**: un nemico e un eroe vengono distrutti se il nemico raggiunge la parte inferiore dello schermo

In breve, il giocatore - *l'eroe* - deve colpire tutti i nemici con un laser prima che riescano a raggiungere la parte inferiore dello schermo.

✅ Fare una piccola ricerca sul primissimo gioco per computer mai scritto. Qual era la sua funzionalità?

Diventiamo eroici insieme!

## Rilevamento della collisione.

Come si rilevano le collisioni? Occorre pensare agli oggetti di gioco come rettangoli che si muovono. Perché, ci si potrebbe chiedere? Bene, l'immagine usata per disegnare un oggetto di gioco è un rettangolo: ha una `x`, una `y`, una larghezza (`width`) e un'altezza (`height`).

Se due rettangoli, cioè un eroe e un nemico *si intersecano*, si verifica una collisione. Ciò che dovrebbe accadere dipende dalle regole del gioco. Per implementare il rilevamento delle collisioni è quindi necessario quanto segue:

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

2. Una funzione di confronto, questa funzione può assomigliare a questa:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Come si distruggono le cose

Per distruggere le cose in un gioco si deve far sapere al gioco stesso che non dovrebbe più disegnare un certo oggetto nel ciclo di gioco che si attiva in un certo intervallo. Un modo per farlo è contrassegnare un oggetto del gioco come *morto* quando succede qualcosa, in questo modo:

```javascript
// si è verificata una collisione
enemy.dead = true
```

Quindi si procede a filtrare gli oggetti *morti* prima di ridipingere lo schermo, in questo modo:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Come si spara un laser

Sparare un laser si traduce nel rispondere a un evento da tastiera e creare un oggetto che si muove in una certa direzione. Occorre quindi eseguire i seguenti passaggi:

1. **Creare un oggetto laser**: dalla cima dell' astronave dell'eroe, che al momento della creazione inizia a muoversi in alto verso la parte superiore dello schermo.
2. **Allegare codice a un evento da tastiera**: si deve scegliere un tasto sulla tastiera che rappresenti il giocatore che spara il laser.
3. **Creare un oggetto di gioco che assomigli a un laser** quando viene premuto il tasto.

## Raffreddamento del laser

Il laser deve attivarsi ogni volta che si preme un tasto, come ad esempio la *barra spazio*. Per evitare che il gioco produca troppi laser in breve tempo, si deve risolvere questo problema. La soluzione è implementando un cosiddetto raffreddamento (*cooldown*), un timer, che garantisce che un laser possa essere sparato solo a intervallo determinato. Su può implementare nel modo seguente:

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
      // produce un laser
      this.cooldown = new Cooldown(500);
    } else {
      // non fa nulla - non si è ancora raffreddato
    }
  }
}
```

✅ Fare riferimento alla lezione 1 della serie gioco spaziale per quanto riguarda i tempi di *cooldown* (raffreddamento).

## Cosa costruire

Si prende il codice esistente (che dovrebbe essere stato ripulito e rifattorizzato) dalla lezione precedente e lo si estende Si inizia con il codice della parte II o si usa il codice [della parte III-starter](../your-work).

> suggerimento: il laser con cui lavorare è già nella cartella asset ed è referenziato nel proprio codice

- **Aggiungere il rilevamento delle collisioni**, quando un laser entra in collisione con qualcosa dovrebbero essere applicate le seguenti regole:
   1. Il **laser colpisce il nemico**: il nemico muore se colpito da un laser
   2. Il **laser raggiunge lo schermo superiore**: un laser viene distrutto se raggiunge la parte superiore dello schermo
   3. **Collisione tra nemico ed eroe**: un nemico e l'eroe vengono distrutti se entrano in collisione
   4. Il **nemico colpisce la parte inferiore dello schermo**: un nemico e un eroe vengono distrutti se il nemico raggiunge la parte inferiore dello schermo

## Passaggi consigliati

Individuare i file che già sono stati creati nella sottocartella `your-work`. Dovrebbe contenere quanto segue:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Si fa partire il progetto nella cartella `your_work` digitando:

```bash
cd your-work
npm start
```

Quanto sopra avvierà un server HTTP sull'indirizzo `http://localhost:5000`. Aprire un browser e inserire quell'indirizzo, in questo momento dovrebbe rendere l'eroe e tutti i nemici.

### Aggiungere codice

1. **Impostare una rappresentazione di un rettangolo di un oggetto di gioco, per gestire la collisione**. Il codice seguente consente di ottenere una rappresentazione di un rettangolo di un `GameObject`. Modificare la classe GameObject per estenderla:

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

2. **Aggiungere il codice che controlla la collisione** Questa sarà una nuova funzione che verifica se due rettangoli si intersecano:

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

3. **Aggiungere capacità di fuoco laser**
   1. **Aggiungere messaggio per un evento da tastiera**. Il tasto spazio (*space*) dovrebbe creare un laser appena sopra la astronave dell'eroe. Aggiungere tre costanti nell'oggetto Messages:

      ```javascript
       KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
       COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
       COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
      ```

   1. **Gestire il tasto barra spazio** Modificare la funzione keyup di `window.addEventListener` per gestire la barra spazio:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

   1. **Aggiungere listener**. Modificare la funzione `initGame()` per assicurarsi che l'eroe possa sparare quando viene premuta la barra spazio:

      ```javascript
      eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
       if (hero.canFire()) {
         hero.fire();
       }
      ```

      e aggiungere una nuova funzione `eventEmitter.on()` per garantire il comportamento quando un nemico si scontra con un laser:

      ```javascript
      eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
      })
      ```

   1. **Spostare l'oggetto**, assicurarsi che il laser si muova gradualmente verso parte superiore dello schermo. Creare una nuova classe Laser che estende `GameObject`, come fatto precedentemente:

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

   1. **Gestire le collisioni**, implementare le regole di collisione per il laser. Aggiungere una funzione `updateGameObjects()` che verifica gli oggetti in collisione per quelli colpiti

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // il laser ha colpito qualcosa
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

      Assicurarsi di aggiungere `updateGameObjects()` nel ciclo di gioco in `window.onload`.

   4. **Implementare il** raffreddamento sul laser, in modo che possa essere sparato solo a determinati intervalli.

      Infine, modificare la classe Hero in modo che possa eseguire il raffreddamento:

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

A questo punto, il tuo gioco ha alcune funzionalità! Si può navigare con i tasti freccia, sparare un laser con la barra spaziatrice e i nemici scompaiono quando colpiti. Ottimo lavoro!

---

## 🚀 Sfida

Aggiungere un'esplosione! Dare un'occhiata alle risorse di gioco [nel repository Space Art](../solution/spaceArt/readme.txt) e provare ad aggiungere un'esplosione quando il laser colpisce un alieno

## Quiz Post-Lezione

[Quiz post-lezione](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/36?loc=it)

## Revisione e Auto Apprendimento

Sperimentare con gli intervalli nel proprio gioco fino ad ora. Cosa succede quando si cambiano? Ulteriori informazioni sugli [eventi di temporizzazione JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Compito

[Esplorare le collisioni](assignment.it.md)
