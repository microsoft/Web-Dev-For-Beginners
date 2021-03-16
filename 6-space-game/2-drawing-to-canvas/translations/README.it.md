# Costruire un Gioco Spaziale Parte 2: Disegnare Eroi e Mostri sull'elemento Canvas

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/31?loc=it)

## Canvas

Canvas è un elemento HTML che per impostazione predefinita non ha contenuto; è una lavagna vuota. Si può riempirla disegnandoci sopra.

✅ [Ulteriori informazioni sull'API Canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API) su MDN.

Ecco come viene tipicamente dichiarato, come parte dell'elemento body della pagina:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Sopra si è  impostato l'`id`entificativo, la larghezza `(width)` e l'altezza (`height`).

- `id`: va impostato in modo da poter ottenere un riferimento quando si deve interagire con l'elemento.
- `width`: questa è la larghezza dell'elemento.
- `height`: questa è l'altezza dell'elemento.

## Disegnare una geometria semplice

Canvas utilizza un sistema di coordinate cartesiane per disegnare le cose. Quindi utilizza un asse x e un asse y per esprimere dove si trova qualcosa. La posizione `0,0` è la posizione in alto a sinistra e quella in basso a destra è ciò che si è determinato come larghezza (WIDTH) e altezza (HEIGHT) del canvas

![la griglia del canvas](../canvas_grid.png)
> Immagine da [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Per disegnare sull'elemento canvas si dovranno eseguire i seguenti passaggi:

1. **Ottenere un riferimento** all'elemento Canvas.
1. **Ottenere un riferimento** all'elemento Context che si trova sull'elemento canvas.
1. **Eseguire un'operazione di disegno** utilizzando l'elemento context.

Il codice per i passaggi precedenti di solito ha questo aspetto:

```javascript
// disegna un rettangolo rosso
//1. ottiene il riferimento per il canvas
canvas = document.getElementById("myCanvas");

//2. ottiene l'oggetto context per disegnare forme basiche in 2D
ctx = canvas.getContext("2d");

//3. lo riempie con il colore rosso
ctx.fillStyle = 'red';

//4. e disegna un rettangolo con questi parametri, impostando posizione e dimensione
ctx.fillRect(0,0, 200, 200) // x,y,larghezza, altezza
```

✅ L'API Canvas si concentra principalmente su forme 2D, ma si possono anche disegnare elementi 3D su un sito web; per questo, si potrebbe utilizzare l' [API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Si può disegnare ogni sorta di cose con l'API Canvas come:

- **Forme geometriche**, è già stato mostrato come disegnare un rettangolo, ma c'è molto di più che si può disegnare.
- **Testo**, si può disegnare un testo con qualsiasi carattere e colore si desideri.
- **Immagini**, si puòdisegnare un'immagine basandosi su una risorsa immagine come .jpg o .png, ad esempio.

Si faccia una prova! Si sa come disegnare un rettangolo, si può disegnare un cerchio su una pagina? Si dia un'occhiata ad alcuni interessanti disegni su canvas su CodePen. Ecco un [esempio particolarmente degno di nota](https://codepen.io/dissimulate/pen/KrAwx).

## Caricare e disegnare una risorsa immagine

Si carica una risorsa immagine creando un oggetto `Image` e impostando la sua proprietà `src` . Quindi ci si mette in ascolto per l'evento di caricamento (`load`) per sapere quando è pronto per essere utilizzato. Il codice si presenta cosí:

### Caricamento risorsa

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // immagine caricata e pronta all'uso
}
```

### Modello di Caricamento Risorsa

Si consiglia di racchiudere quanto sopra in un costrutto come questo, così è più facile da usare e si tenta di manipolarlo solo quando è completamente caricato:

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // immagine caricata e pronta all'uso
      resolve(img);
    }
  })
}

// usarlo in questo modo

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

Per disegnare risorse di gioco su uno schermo, il codice sarà simile a questo:

```javascript
async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
  ctx.drawImage(monsterImg, 0,0);
}
```

## Ora è il momento di iniziare a costruire il  gioco

### Cosa costruire

Si costruirà una pagina web con un elemento Canvas. Si dovrebbe rendere uno schermo nero `1024 * 768`. Sono state fornite  due immagini:

- Astronave dell'eroe

   ![Nave dell'eroe](../solution/assets/player.png)

- Mostro 5*5

   ![Nave del  mostro](../solution/assets/enemyShip.png)

### Passaggi consigliati per iniziare lo sviluppo

Individuare i file che già sono stati creati nella sottocartella `your-work` della cartella di lavoro Dovrebbe contenere le seguenti informazioni:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Aprire una copia di questa cartella in Visual Studio Code. È necessario disporre di una configurazione di ambiente di sviluppo locale, preferibilmente con Visual Studio Code con NPM e Node installati. Se non si è impostato `npm` sul proprio computer, [ecco come farlo](https://www.npmjs.com/get-npm).

Inizializzare il proprio progetto accedendo alla cartella `your_work` :

```bash
cd your-work
npm start
```

Quanto sopra avvierà un server HTTP sull'indirizzo `http://localhost:5000`. Aprire un browser e inserire quell'indirizzo. Al momento è una pagina vuota, ma cambierà

> Nota: per vedere le modifiche sullo schermo, aggiornare il contenuto del browser.

### Aggiungere codice

Aggiungi il codice necessario al file `your-work/app.js` per risolvere quanto segue

1. **Disegnare** un oggetto canvas con sfondo nero
   > suggerimento: aggiungere due righe sotto il TODO appropriato in `/app.js`, impostando l'elemento `ctx` in modo che sia nero e le coordinate alto/sinistra a 0,0 e l'altezza e la larghezza uguali a quelle del canvas.
2. **Caricare** le strutture di gioco
   > suggerimento: aggiungere le immagini del giocatore e del nemico usando `await loadTexture`, passando il percorso dell'immagine. Non saranno ancora visibili sullo schermo!
3. **Disegnare** l'eroe al centro dello schermo nella metà inferiore
   > suggerimento: usare l'API `drawImage` per disegnare `heroImg` sullo schermo, impostando `canvas.width / 2 - 45` e `canvas.height - canvas.height / 4` come valori di coordinate x, y
4. **Disegnare** mostri 5*5
   > suggerimento: ora si può rimuovere il commento dal codice per disegnare i nemici sullo schermo. Successivamente, passare alla funzione `createEnemies` e crearla.

   Per prima cosa, impostare alcune costanti:

   ```javascript
   const MONSTER_TOTAL = 5;
   const MONSTER_WIDTH = MONSTER_TOTAL * 98;
   const START_X = (canvas.width - MONSTER_WIDTH) / 2;
   const STOP_X = START_X + MONSTER_WIDTH;
   ```

   quindi, creare un ciclo per disegnare l'array di mostri sullo schermo:

   ```javascript
   for (let x = START_X; x < STOP_X; x += 98) {
       for (let y = 0; y < 50 * 5; y += 50) {
         ctx.drawImage(enemyImg, x, y);
       }
     }
   ```

## Risultato

Il risultato finale dovrebbe essere così:

![Schermo nero con un eroe e mostri 5*5](../partI-solution.png)

## Soluzione

Per favore provare a risolverlo da soli, ma se si rimane bloccati, dare un'occhiata alla [soluzione](../solution/app.js)

---

## 🚀 Sfida

Si è imparato a disegnare con l'API Canvas incentrata sul 2D; dare un'occhiata all['API WebGL API](https://developer.mozilla.org/it/docs/Web/API/WebGL_API) e provare a disegnare un oggetto 3D.

## Quiz Post-Lezione

[Quiz post-lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/32?loc=it)

## Revisione e Auto Apprendimento

Scoprire di più sull'API Canvas raccogliendo [informazioni su di essa](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Compito

[Giocare con l'API Canvas](assignment.it.md)