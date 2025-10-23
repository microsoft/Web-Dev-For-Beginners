<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c8fc39a014d08247c082878122e2ba73",
  "translation_date": "2025-10-22T23:40:38+00:00",
  "source_file": "6-space-game/1-introduction/assignment.md",
  "language_code": "it"
}
-->
# Progettare un Gioco: Applicare i Design Pattern

## Panoramica dell'assegnazione

Metti in pratica le tue nuove conoscenze sui design pattern creando un prototipo di gioco semplice! Questo compito ti aiuterà a esercitarti sia con i pattern architetturali (ereditarietà o composizione) sia con il sistema di comunicazione pub/sub che hai imparato nella lezione.

## Istruzioni

Crea una rappresentazione di gioco semplice che dimostri i design pattern trattati in questa lezione. Il tuo gioco dovrebbe essere funzionale, ma non è necessario che abbia una grafica complessa – concentrati sull'architettura sottostante e sui modelli di comunicazione.

### Requisiti

**Scegli il tuo pattern architetturale:**
- **Opzione A**: Usa l'ereditarietà basata su classi (come l'esempio `GameObject` → `Movable` → `Hero`)
- **Opzione B**: Usa la composizione (come l'approccio con funzione factory e comportamenti misti)

**Implementa la comunicazione:**
- **Includi** una classe `EventEmitter` per la messaggistica pub/sub
- **Configura** almeno 2-3 tipi di messaggi diversi (come `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Collega** l'input dell'utente (tastiera/mouse) agli eventi del gioco tramite il sistema di eventi

**Elementi di gioco da includere:**
- Almeno un personaggio controllato dal giocatore
- Almeno un altro oggetto di gioco (nemico, oggetto da raccogliere o elemento ambientale)
- Interazione di base tra gli oggetti (collisione, raccolta o comunicazione)

### Idee di gioco suggerite

**Giochi semplici da considerare:**
- **Gioco del Serpente** – I segmenti del serpente seguono la testa, il cibo appare casualmente
- **Variante di Pong** – La racchetta risponde agli input, la pallina rimbalza sui muri
- **Gioco del Collezionista** – Il giocatore si muove raccogliendo oggetti ed evitando ostacoli
- **Base di Tower Defense** – Le torri rilevano e sparano ai nemici in movimento

### Linee guida per la struttura del codice

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testare la tua implementazione

**Verifica che il tuo codice funzioni:**
- **Testando** che gli oggetti si muovano o cambino quando gli eventi vengono attivati
- **Confermando** che più oggetti possano rispondere allo stesso evento
- **Controllando** che sia possibile aggiungere nuovi comportamenti senza modificare il codice esistente
- **Assicurandoti** che l'input da tastiera/mouse attivi correttamente gli eventi del gioco

## Linee guida per la consegna

**La tua consegna dovrebbe includere:**
1. **File JavaScript** con l'implementazione del tuo gioco
2. **File HTML** per eseguire e testare il tuo gioco (può essere semplice)
3. **Commenti** che spiegano quale pattern hai scelto e perché
4. **Breve documentazione** dei tipi di messaggi e delle loro funzioni

## Griglia di valutazione

| Criteri | Esemplare (3 punti) | Adeguato (2 punti) | Da migliorare (1 punto) |
|---------|---------------------|--------------------|--------------------------|
| **Pattern architetturale** | Implementa correttamente l'ereditarietà OPPURE la composizione con una chiara gerarchia di classi/oggetti | Usa il pattern scelto con lievi problemi o incoerenze | Tenta di usare il pattern ma l'implementazione presenta problemi significativi |
| **Implementazione Pub/Sub** | EventEmitter funziona correttamente con più tipi di messaggi e flusso di eventi appropriato | Sistema pub/sub di base funziona con una gestione degli eventi adeguata | Sistema di eventi presente ma non funziona in modo affidabile |
| **Funzionalità del gioco** | Tre o più elementi interattivi che comunicano tramite eventi | Due elementi interattivi con comunicazione di eventi di base | Un elemento risponde agli eventi o ha un'interazione di base |
| **Qualità del codice** | Codice pulito, ben commentato, con organizzazione logica e JavaScript moderno | Codice generalmente ben organizzato con commenti adeguati | Il codice funziona ma manca di organizzazione o di commenti chiari |

**Punti bonus:**
- **Meccaniche di gioco creative** che mostrano usi interessanti dei pattern
- **Metodi di input multipli** (eventi da tastiera E mouse)
- **Architettura scalabile** che sarebbe facile da estendere con nuove funzionalità

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.