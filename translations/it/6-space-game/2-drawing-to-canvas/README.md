<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-22T23:38:33+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "it"
}
-->
# Costruisci un gioco spaziale Parte 2: Disegna l'eroe e i mostri sulla Canvas

L'API Canvas è una delle funzionalità più potenti dello sviluppo web per creare grafica dinamica e interattiva direttamente nel tuo browser. In questa lezione, trasformeremo quell'elemento HTML `<canvas>` vuoto in un mondo di gioco pieno di eroi e mostri. Pensa alla canvas come alla tua tavola da disegno digitale dove il codice diventa visivo.

Stiamo costruendo su ciò che hai imparato nella lezione precedente, e ora ci immergeremo negli aspetti visivi. Imparerai come caricare e visualizzare gli sprite di gioco, posizionare gli elementi con precisione e creare la base visiva per il tuo gioco spaziale. Questo colma il divario tra pagine web statiche e esperienze dinamiche e interattive.

Alla fine di questa lezione, avrai una scena di gioco completa con la tua nave eroica posizionata correttamente e formazioni nemiche pronte per la battaglia. Capirai come i giochi moderni rendono la grafica nei browser e acquisirai competenze per creare le tue esperienze visive interattive. Esploriamo la grafica della canvas e diamo vita al tuo gioco spaziale!

## Quiz Pre-Lezione

[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/31)

## La Canvas

Cos'è esattamente questo elemento `<canvas>`? È la soluzione di HTML5 per creare grafica e animazioni dinamiche nei browser web. A differenza delle immagini o dei video regolari che sono statici, la canvas ti dà il controllo a livello di pixel su tutto ciò che appare sullo schermo. Questo la rende perfetta per giochi, visualizzazioni di dati e arte interattiva. Pensala come una superficie di disegno programmabile dove JavaScript diventa il tuo pennello.

Per impostazione predefinita, un elemento canvas appare come un rettangolo vuoto e trasparente sulla tua pagina. Ma è qui che risiede il potenziale! Il suo vero potere emerge quando usi JavaScript per disegnare forme, caricare immagini, creare animazioni e far rispondere le cose alle interazioni dell'utente. È simile a come i pionieri della grafica computerizzata dei Bell Labs negli anni '60 dovevano programmare ogni pixel per creare le prime animazioni digitali.

✅ Leggi [di più sull'API Canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API) su MDN.

Ecco come viene tipicamente dichiarata, come parte del corpo della pagina:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Ecco cosa fa questo codice:**
- **Imposta** l'attributo `id` per poter fare riferimento a questo specifico elemento canvas in JavaScript
- **Definisce** la `larghezza` in pixel per controllare la dimensione orizzontale della canvas
- **Stabilisce** l'`altezza` in pixel per determinare le dimensioni verticali della canvas

## Disegnare Geometrie Semplici

Ora che sai cos'è l'elemento canvas, esploriamo come disegnarci sopra! La canvas utilizza un sistema di coordinate che potrebbe sembrare familiare dalle lezioni di matematica, ma c'è una differenza importante specifica della grafica computerizzata.

La canvas utilizza coordinate cartesiane con un asse x (orizzontale) e un asse y (verticale) per posizionare tutto ciò che disegni. Ma ecco la differenza chiave: a differenza del sistema di coordinate della matematica, il punto di origine `(0,0)` inizia nell'angolo in alto a sinistra, con i valori x che aumentano spostandosi verso destra e i valori y che aumentano spostandosi verso il basso. Questo approccio risale ai primi display dei computer in cui i fasci di elettroni scansionavano dall'alto verso il basso, rendendo l'angolo in alto a sinistra il punto di partenza naturale.

![la griglia della canvas](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.it.png)
> Immagine da [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Per disegnare sull'elemento canvas, seguirai lo stesso processo in tre passaggi che forma la base di tutta la grafica della canvas. Una volta fatto alcune volte, diventerà naturale:

1. **Ottieni un riferimento** al tuo elemento Canvas dal DOM (proprio come qualsiasi altro elemento HTML)
2. **Ottieni il contesto di rendering 2D** – questo fornisce tutti i metodi di disegno
3. **Inizia a disegnare!** Usa i metodi integrati del contesto per creare la tua grafica

Ecco come appare nel codice:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Analizziamo questo passaggio per passaggio:**
- **Prendiamo** il nostro elemento canvas usando il suo ID e lo memorizziamo in una variabile
- **Otteniamo** il contesto di rendering 2D – questo è il nostro kit di strumenti pieno di metodi di disegno
- **Indichiamo** alla canvas che vogliamo riempire le cose con il rosso usando la proprietà `fillStyle`
- **Disegniamo** un rettangolo che inizia nell'angolo in alto a sinistra (0,0) largo e alto 200 pixel

✅ L'API Canvas si concentra principalmente su forme 2D, ma puoi anche disegnare elementi 3D su un sito web; per questo, potresti usare l'[API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Puoi disegnare tutti i tipi di cose con l'API Canvas come:

- **Forme geometriche**, abbiamo già mostrato come disegnare un rettangolo, ma c'è molto di più che puoi disegnare.
- **Testo**, puoi disegnare un testo con qualsiasi font e colore desideri.
- **Immagini**, puoi disegnare un'immagine basata su un asset immagine come un .jpg o .png, per esempio.

✅ Prova! Sai come disegnare un rettangolo, riesci a disegnare un cerchio su una pagina? Dai un'occhiata ad alcuni disegni interessanti su Canvas su CodePen. Ecco un [esempio particolarmente impressionante](https://codepen.io/dissimulate/pen/KrAwx).

## Caricare e Disegnare un Asset Immagine

Disegnare forme di base è utile per iniziare, ma la maggior parte dei giochi ha bisogno di immagini reali! Sprite, sfondi e texture sono ciò che dà ai giochi il loro fascino visivo. Caricare e visualizzare immagini sulla canvas funziona in modo diverso rispetto al disegno di forme geometriche, ma è semplice una volta compreso il processo.

Dobbiamo creare un oggetto `Image`, caricare il nostro file immagine (questo avviene in modo asincrono, cioè "in background"), e poi disegnarlo sulla canvas una volta che è pronto. Questo approccio garantisce che le tue immagini vengano visualizzate correttamente senza bloccare la tua applicazione durante il caricamento.

### Caricamento Base delle Immagini

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Ecco cosa succede in questo codice:**
- **Creiamo** un nuovo oggetto Image per contenere il nostro sprite o texture
- **Indichiamo** quale file immagine caricare impostando il percorso della sorgente
- **Ascoltiamo** l'evento di caricamento per sapere esattamente quando l'immagine è pronta per essere utilizzata

### Un Modo Migliore per Caricare Immagini

Ecco un modo più robusto per gestire il caricamento delle immagini che gli sviluppatori professionisti usano comunemente. Avvolgeremo il caricamento delle immagini in una funzione basata su Promise – questo approccio, reso popolare quando le Promesse JavaScript sono diventate standard in ES6, rende il tuo codice più organizzato e gestisce gli errori in modo elegante:

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**Cosa abbiamo fatto qui:**
- **Avvolto** tutta la logica di caricamento delle immagini in una Promise per gestirla meglio
- **Aggiunto** la gestione degli errori che ci dice effettivamente quando qualcosa va storto
- **Usato** la sintassi moderna async/await perché è molto più leggibile
- **Incluso** blocchi try/catch per gestire con grazia eventuali problemi di caricamento

Una volta che le tue immagini sono caricate, disegnarle sulla canvas è in realtà piuttosto semplice:

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**Analizziamo questo passaggio per passaggio:**
- **Carichiamo** sia le immagini dell'eroe che dei mostri in background usando await
- **Prendiamo** il nostro elemento canvas e otteniamo quel contesto di rendering 2D di cui abbiamo bisogno
- **Posizioniamo** l'immagine dell'eroe proprio al centro usando un rapido calcolo delle coordinate
- **Mettiamo** l'immagine del mostro nell'angolo in alto a sinistra per iniziare la formazione nemica
- **Catturiamo** eventuali errori che potrebbero verificarsi durante il caricamento o il rendering

## Ora è il Momento di Iniziare a Costruire il Tuo Gioco

Ora metteremo tutto insieme per creare la base visiva del tuo gioco spaziale. Hai una solida comprensione dei fondamenti della canvas e delle tecniche di caricamento delle immagini, quindi questa sezione pratica ti guiderà nella costruzione di uno schermo di gioco completo con sprite posizionati correttamente.

### Cosa Costruire

Creerai una pagina web con un elemento Canvas. Dovrebbe rendere uno schermo nero `1024*768`. Ti abbiamo fornito due immagini:

- Nave dell'eroe

   ![Nave dell'eroe](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.it.png)

- 5*5 mostri

   ![Nave del mostro](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.it.png)

### Passaggi Consigliati per Iniziare lo Sviluppo

Trova i file di partenza che sono stati creati per te nella sottocartella `your-work`. La struttura del tuo progetto dovrebbe contenere:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Ecco con cosa stai lavorando:**
- **Sprite di gioco** si trovano nella cartella `assets/` così tutto rimane organizzato
- **Il tuo file HTML principale** configura l'elemento canvas e prepara tutto
- **Un file JavaScript** dove scriverai tutta la magia del rendering del gioco
- **Un package.json** che configura un server di sviluppo per testare localmente

Apri questa cartella in Visual Studio Code per iniziare lo sviluppo. Avrai bisogno di un ambiente di sviluppo locale con Visual Studio Code, NPM e Node.js installati. Se non hai `npm` configurato sul tuo computer, [ecco come installarlo](https://www.npmjs.com/get-npm).

Avvia il tuo server di sviluppo navigando nella cartella `your-work`:

```bash
cd your-work
npm start
```

**Questo comando fa alcune cose piuttosto interessanti:**
- **Avvia** un server locale su `http://localhost:5000` per testare il tuo gioco
- **Serve** correttamente tutti i tuoi file in modo che il browser possa caricarli
- **Osserva** le modifiche ai tuoi file per uno sviluppo fluido
- **Ti offre** un ambiente di sviluppo professionale per testare tutto

> 💡 **Nota**: Il tuo browser mostrerà inizialmente una pagina vuota – è normale! Man mano che aggiungi codice, aggiorna il browser per vedere le modifiche. Questo approccio di sviluppo iterativo è simile a come la NASA ha costruito il computer di guida Apollo – testando ogni componente prima di integrarlo nel sistema più grande.

### Aggiungi codice

Aggiungi il codice richiesto a `your-work/app.js` per completare le seguenti attività:

1. **Disegna una canvas con sfondo nero**
   > 💡 **Ecco come**: Trova il TODO in `/app.js` e aggiungi solo due righe. Imposta `ctx.fillStyle` su nero, quindi usa `ctx.fillRect()` a partire da (0,0) con le dimensioni della tua canvas. Facile!

2. **Carica le texture del gioco**
   > 💡 **Ecco come**: Usa `await loadAsset()` per caricare le immagini del giocatore e del nemico. Conservale in variabili così potrai usarle più tardi. Ricorda – non appariranno finché non le disegnerai effettivamente!

3. **Disegna la nave dell'eroe nella posizione centrale in basso**
   > 💡 **Ecco come**: Usa `ctx.drawImage()` per posizionare il tuo eroe. Per la coordinata x, prova `canvas.width / 2 - 45` per centrarlo, e per la coordinata y usa `canvas.height - canvas.height / 4` per posizionarlo nella parte inferiore.

4. **Disegna una formazione di 5×5 navi nemiche**
   > 💡 **Ecco come**: Trova la funzione `createEnemies` e configura un ciclo annidato. Dovrai fare un po' di calcoli per spaziatura e posizionamento, ma non preoccuparti – ti mostrerò esattamente come!

Prima, stabilisci le costanti per un layout corretto della formazione nemica:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Analizziamo cosa fanno queste costanti:**
- **Impostiamo** 5 nemici per riga e colonna (una bella griglia 5×5)
- **Definiamo** quanto spazio mettere tra i nemici per evitare che sembrino ammassati
- **Calcoliamo** quanto sarà larga tutta la formazione
- **Determiniamo** dove iniziare e finire affinché la formazione sembri centrata

Poi, crea cicli annidati per disegnare la formazione nemica:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Ecco cosa fa questo ciclo annidato:**
- Il ciclo esterno **si muove** da sinistra a destra attraverso la formazione
- Il ciclo interno **va** dall'alto verso il basso per creare file ordinate
- **Disegniamo** ogni sprite nemico alle coordinate x,y esatte che abbiamo calcolato
- Tutto rimane **spaziato uniformemente** così sembra professionale e organizzato

## Risultato

Il risultato finale dovrebbe apparire così:

![Schermo nero con un eroe e 5*5 mostri](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.it.png)

## Soluzione

Prova a risolverlo da solo prima, ma se ti blocchi, dai un'occhiata a una [soluzione](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)

---

## Sfida GitHub Copilot Agent 🚀

Usa la modalità Agent per completare la seguente sfida:

**Descrizione:** Migliora la canvas del tuo gioco spaziale aggiungendo effetti visivi e elementi interattivi utilizzando le tecniche dell'API Canvas che hai imparato.

**Prompt:** Crea un nuovo file chiamato `enhanced-canvas.html` con una canvas che visualizza stelle animate sullo sfondo, una barra della salute pulsante per la nave dell'eroe e navi nemiche che si muovono lentamente verso il basso. Includi il codice JavaScript che disegna stelle scintillanti usando posizioni e opacità casuali, implementa una barra della salute che cambia colore in base al livello di salute (verde > giallo > rosso) e anima le navi nemiche per muoversi verso il basso a velocità diverse.

Scopri di più sulla [modalità agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## 🚀 Sfida

Hai imparato a disegnare con l'API Canvas focalizzata sul 2D; dai un'occhiata all'[API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API) e prova a disegnare un oggetto 3D.

## Quiz Post-Lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/32)

## Revisione & Studio Autonomo

Scopri di più sull'API Canvas [leggendo a riguardo](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Compito

[Gioca con l'API Canvas](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.