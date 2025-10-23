<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-22T23:39:07+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "it"
}
-->
# Costruire un Gioco Spaziale Parte 6: Fine e Riavvio

Ogni grande gioco ha bisogno di condizioni di fine chiare e di un meccanismo di riavvio fluido. Hai costruito un impressionante gioco spaziale con movimento, combattimento e punteggio - ora è il momento di aggiungere gli ultimi pezzi che lo rendono completo.

Attualmente il tuo gioco funziona indefinitamente, come le sonde Voyager lanciate dalla NASA nel 1977 - che continuano a viaggiare nello spazio decenni dopo. Sebbene ciò sia accettabile per l'esplorazione spaziale, i giochi necessitano di punti finali definiti per creare esperienze soddisfacenti.

Oggi implementeremo condizioni di vittoria/sconfitta adeguate e un sistema di riavvio. Alla fine di questa lezione, avrai un gioco rifinito che i giocatori potranno completare e rigiocare, proprio come i classici giochi arcade che hanno definito il medium.

## Quiz Pre-Lettura

[Quiz pre-lettura](https://ff-quizzes.netlify.app/web/quiz/39)

## Comprendere le Condizioni di Fine del Gioco

Quando dovrebbe finire il tuo gioco? Questa domanda fondamentale ha plasmato il design dei giochi fin dall'era dei primi arcade. Pac-Man finisce quando vieni catturato dai fantasmi o quando hai mangiato tutti i punti, mentre Space Invaders finisce quando gli alieni raggiungono il fondo o li distruggi tutti.

Come creatore del gioco, sei tu a definire le condizioni di vittoria e sconfitta. Per il nostro gioco spaziale, ecco alcuni approcci collaudati che creano un gameplay coinvolgente:

- **Distruggere `N` navi nemiche**: È abbastanza comune dividere un gioco in diversi livelli in cui devi distruggere `N` navi nemiche per completare un livello.
- **La tua nave è stata distrutta**: Ci sono sicuramente giochi in cui perdi se la tua nave viene distrutta. Un altro approccio comune è il concetto di vite. Ogni volta che la tua nave viene distrutta, perdi una vita. Una volta che tutte le vite sono esaurite, perdi il gioco.
- **Hai raccolto `N` punti**: Un'altra condizione di fine comune è raccogliere punti. Come ottieni i punti dipende da te, ma è abbastanza comune assegnare punti a varie attività come distruggere una nave nemica o raccogliere oggetti che vengono *lasciati cadere* quando vengono distrutti.
- **Completare un livello**: Questo potrebbe coinvolgere diverse condizioni come `X` navi nemiche distrutte, `Y` punti raccolti o magari un oggetto specifico raccolto.

## Implementare la Funzionalità di Riavvio del Gioco

I buoni giochi incoraggiano la rigiocabilità attraverso meccanismi di riavvio fluidi. Quando i giocatori completano un gioco (o subiscono una sconfitta), spesso vogliono riprovare immediatamente - sia per battere il loro punteggio che per migliorare le loro prestazioni.

Tetris ne è un esempio perfetto: quando i tuoi blocchi raggiungono la cima, puoi iniziare immediatamente una nuova partita senza dover navigare in menu complessi. Costruiremo un sistema di riavvio simile che resetta pulitamente lo stato del gioco e riporta i giocatori in azione rapidamente.

✅ **Riflessione**: Pensa ai giochi che hai giocato. In quali condizioni finiscono e come ti invitano a ricominciare? Cosa rende un'esperienza di riavvio fluida rispetto a frustrante?

## Cosa Costruirai

Implementerai le funzionalità finali che trasformeranno il tuo progetto in un'esperienza di gioco completa. Questi elementi distinguono i giochi rifiniti dai prototipi di base.

**Ecco cosa aggiungeremo oggi:**

1. **Condizione di vittoria**: Distruggi tutti i nemici e goditi una celebrazione adeguata (te la sei meritata!)
2. **Condizione di sconfitta**: Esaurisci le vite e affronta la sconfitta con una schermata dedicata
3. **Meccanismo di riavvio**: Premi Invio per tornare subito in azione - perché una partita non basta mai
4. **Gestione dello stato**: Riparti da zero ogni volta - senza nemici residui o strani glitch dalla partita precedente

## Iniziamo

Prepariamo il tuo ambiente di sviluppo. Dovresti avere tutti i file del tuo gioco spaziale dalle lezioni precedenti pronti.

**Il tuo progetto dovrebbe apparire così:**

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

**Avvia il server di sviluppo:**

```bash
cd your-work
npm start
```

**Questo comando:**
- Avvia un server locale su `http://localhost:5000`
- Serve correttamente i tuoi file
- Si aggiorna automaticamente quando apporti modifiche

Apri `http://localhost:5000` nel tuo browser e verifica che il gioco funzioni. Dovresti essere in grado di muoverti, sparare e interagire con i nemici. Una volta confermato, possiamo procedere con l'implementazione.

> 💡 **Suggerimento Pro**: Per evitare avvisi in Visual Studio Code, dichiara `gameLoopId` all'inizio del tuo file come `let gameLoopId;` invece di dichiararlo all'interno della funzione `window.onload`. Questo segue le migliori pratiche moderne di dichiarazione delle variabili in JavaScript.

## Passaggi di Implementazione

### Passaggio 1: Creare Funzioni di Monitoraggio delle Condizioni di Fine

Abbiamo bisogno di funzioni per monitorare quando il gioco dovrebbe finire. Come i sensori sulla Stazione Spaziale Internazionale che monitorano costantemente i sistemi critici, queste funzioni controlleranno continuamente lo stato del gioco.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Ecco cosa succede dietro le quinte:**
- **Controlla** se il nostro eroe ha esaurito le vite (ahi!)
- **Conta** quanti nemici sono ancora vivi e attivi
- **Restituisce** `true` quando il campo di battaglia è libero dai nemici
- **Utilizza** una logica semplice true/false per mantenere tutto chiaro
- **Filtra** tutti gli oggetti di gioco per trovare i sopravvissuti

### Passaggio 2: Aggiornare i Gestori di Eventi per le Condizioni di Fine

Ora collegheremo questi controlli delle condizioni al sistema di eventi del gioco. Ogni volta che si verifica una collisione, il gioco valuterà se attiva una condizione di fine. Questo crea un feedback immediato per gli eventi critici del gioco.

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
    first.dead = true;
    second.dead = true;
    hero.incrementPoints();

    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
    enemy.dead = true;
    hero.decrementLife();
    if (isHeroDead())  {
      eventEmitter.emit(Messages.GAME_END_LOSS);
      return; // loss before victory
    }
    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.GAME_END_WIN, () => {
    endGame(true);
});
  
eventEmitter.on(Messages.GAME_END_LOSS, () => {
  endGame(false);
});
```

**Cosa succede qui:**
- **Il laser colpisce il nemico**: Entrambi scompaiono, guadagni punti e controlliamo se hai vinto
- **Il nemico ti colpisce**: Perdi una vita e controlliamo se sei ancora in gioco
- **Ordine intelligente**: Controlliamo prima la sconfitta (nessuno vuole vincere e perdere allo stesso tempo!)
- **Reazioni istantanee**: Appena accade qualcosa di importante, il gioco lo sa

### Passaggio 3: Aggiungere Nuove Costanti di Messaggio

Dovrai aggiungere nuovi tipi di messaggi al tuo oggetto costante `Messages`. Queste costanti aiutano a mantenere la coerenza e a prevenire errori di battitura nel tuo sistema di eventi.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**In questo caso, abbiamo:**
- **Aggiunto** costanti per gli eventi di fine gioco per mantenere la coerenza
- **Utilizzato** nomi descrittivi che indicano chiaramente lo scopo dell'evento
- **Seguito** la convenzione di denominazione esistente per i tipi di messaggi

### Passaggio 4: Implementare i Controlli di Riavvio

Ora aggiungerai i controlli da tastiera che consentono ai giocatori di riavviare il gioco. Il tasto Invio è una scelta naturale poiché è comunemente associato alla conferma delle azioni e all'avvio di nuovi giochi.

**Aggiungi il rilevamento del tasto Invio al tuo listener di eventi keydown esistente:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Aggiungi la nuova costante di messaggio:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Cosa devi sapere:**
- **Estende** il tuo sistema di gestione degli eventi da tastiera esistente
- **Utilizza** il tasto Invio come trigger per il riavvio per un'esperienza utente intuitiva
- **Emette** un evento personalizzato che altre parti del tuo gioco possono ascoltare
- **Mantiene** lo stesso schema dei tuoi altri controlli da tastiera

### Passaggio 5: Creare il Sistema di Visualizzazione dei Messaggi

Il tuo gioco deve comunicare chiaramente i risultati ai giocatori. Creeremo un sistema di messaggi che visualizza gli stati di vittoria e sconfitta utilizzando testo colorato, simile alle interfacce dei terminali dei primi sistemi informatici, dove il verde indicava successo e il rosso segnalava errori.

**Crea la funzione `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Passo dopo passo, ecco cosa succede:**
- **Imposta** la dimensione e la famiglia del carattere per un testo chiaro e leggibile
- **Applica** un parametro di colore con "rosso" come predefinito per gli avvisi
- **Centra** il testo orizzontalmente e verticalmente sulla canvas
- **Utilizza** parametri predefiniti moderni di JavaScript per opzioni di colore flessibili
- **Sfrutta** il contesto 2D della canvas per il rendering diretto del testo

**Crea la funzione `endGame()`:**

```javascript
function endGame(win) {
  clearInterval(gameLoopId);

  // Set a delay to ensure any pending renders complete
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (win) {
      displayMessage(
        "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
        "green"
      );
    } else {
      displayMessage(
        "You died !!! Press [Enter] to start a new game Captain Pew Pew"
      );
    }
  }, 200)  
}
```

**Cosa fa questa funzione:**
- **Congela** tutto in posizione - niente più navi o laser in movimento
- **Prende** una piccola pausa (200ms) per permettere all'ultimo frame di completare il disegno
- **Pulisce** lo schermo e lo dipinge di nero per un effetto drammatico
- **Mostra** messaggi diversi per vincitori e perdenti
- **Codifica** le notizie con colori - verde per buone notizie, rosso per... beh, non così buone
- **Dice** ai giocatori esattamente come tornare in gioco

### Passaggio 6: Implementare la Funzionalità di Reset del Gioco

Il sistema di reset deve pulire completamente lo stato attuale del gioco e inizializzare una nuova sessione di gioco. Questo garantisce ai giocatori un nuovo inizio senza dati residui dalla partita precedente.

**Crea la funzione `resetGame()`:**

```javascript
function resetGame() {
  if (gameLoopId) {
    clearInterval(gameLoopId);
    eventEmitter.clear();
    initGame();
    gameLoopId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawPoints();
      drawLife();
      updateGameObjects();
      drawGameObjects(ctx);
    }, 100);
  }
}
```

**Comprendiamo ogni parte:**
- **Controlla** se un ciclo di gioco è attualmente in esecuzione prima di resettare
- **Cancella** il ciclo di gioco esistente per fermare tutte le attività di gioco correnti
- **Rimuove** tutti i listener di eventi per prevenire perdite di memoria
- **Reinizializza** lo stato del gioco con oggetti e variabili nuovi
- **Avvia** un nuovo ciclo di gioco con tutte le funzioni essenziali
- **Mantiene** lo stesso intervallo di 100ms per prestazioni di gioco costanti

**Aggiungi il gestore di eventi del tasto Invio alla tua funzione `initGame()`:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Aggiungi il metodo `clear()` alla tua classe EventEmitter:**

```javascript
clear() {
  this.listeners = {};
}
```

**Punti chiave da ricordare:**
- **Collega** la pressione del tasto Invio alla funzionalità di reset del gioco
- **Registra** questo listener di eventi durante l'inizializzazione del gioco
- **Fornisce** un modo pulito per rimuovere tutti i listener di eventi durante il reset
- **Previene** perdite di memoria cancellando i gestori di eventi tra le partite
- **Resetta** l'oggetto dei listener a uno stato vuoto per una nuova inizializzazione

## Congratulazioni! 🎉

👽 💥 🚀 Hai costruito con successo un gioco completo da zero. Come i programmatori che hanno creato i primi videogiochi negli anni '70, hai trasformato linee di codice in un'esperienza interattiva con meccaniche di gioco e feedback utente adeguati. 🚀 💥 👽

**Hai raggiunto:**
- **Implementato** condizioni di vittoria e sconfitta complete con feedback per l'utente
- **Creato** un sistema di riavvio fluido per un gameplay continuo
- **Progettato** una comunicazione visiva chiara per gli stati del gioco
- **Gestito** transizioni complesse dello stato del gioco e pulizia
- **Assemblato** tutti i componenti in un gioco coeso e giocabile

## Sfida GitHub Copilot Agent 🚀

Usa la modalità Agent per completare la seguente sfida:

**Descrizione:** Migliora il gioco spaziale implementando un sistema di progressione a livelli con difficoltà crescente e funzionalità bonus.

**Prompt:** Crea un sistema di gioco a più livelli in cui ogni livello ha più navi nemiche con velocità e salute aumentate. Aggiungi un moltiplicatore di punteggio che aumenta con ogni livello e implementa potenziamenti (come fuoco rapido o scudo) che appaiono casualmente quando i nemici vengono distrutti. Includi un bonus per il completamento del livello e visualizza il livello corrente sullo schermo insieme al punteggio e alle vite esistenti.

Scopri di più sulla [modalità agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## 🚀 Sfida di Miglioramento Opzionale

**Aggiungi Audio al Tuo Gioco**: Migliora l'esperienza di gioco implementando effetti sonori! Considera di aggiungere audio per:

- **Colpi di laser** quando il giocatore spara
- **Distruzione del nemico** quando le navi vengono colpite
- **Danno all'eroe** quando il giocatore subisce colpi
- **Musica di vittoria** quando il gioco viene vinto
- **Suono di sconfitta** quando il gioco viene perso

**Esempio di implementazione audio:**

```javascript
// Create audio objects
const laserSound = new Audio('assets/laser.wav');
const explosionSound = new Audio('assets/explosion.wav');

// Play sounds during game events
function playLaserSound() {
  laserSound.currentTime = 0; // Reset to beginning
  laserSound.play();
}
```

**Cosa devi sapere:**
- **Crea** oggetti Audio per diversi effetti sonori
- **Resetta** il `currentTime` per consentire effetti sonori rapidi
- **Gestisce** le politiche di autoplay del browser attivando i suoni dalle interazioni dell'utente
- **Gestisce** il volume e il timing audio per una migliore esperienza di gioco

> 💡 **Risorsa di Apprendimento**: Esplora questo [sandbox audio](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) per saperne di più sull'implementazione dell'audio nei giochi JavaScript.

## Quiz Post-Lettura

[Quiz post-lettura](https://ff-quizzes.netlify.app/web/quiz/40)

## Revisione e Studio Autonomo

Il tuo compito è creare un nuovo gioco di esempio, quindi esplora alcuni dei giochi interessanti là fuori per vedere che tipo di gioco potresti costruire.

## Compito

[Costruisci un Gioco di Esempio](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.