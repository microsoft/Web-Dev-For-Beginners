<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "973e48ad87d67bf5bb819746c9f8e302",
  "translation_date": "2025-11-04T00:28:06+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "it"
}
-->
# Progetto Terrarium Parte 3: Manipolazione del DOM e Closures in JavaScript

```mermaid
journey
    title Your JavaScript DOM Journey
    section Foundation
      Understand DOM: 3: Student
      Learn closures: 4: Student
      Connect elements: 4: Student
    section Interaction
      Setup drag events: 4: Student
      Track coordinates: 5: Student
      Handle movement: 5: Student
    section Polish
      Add cleanup: 4: Student
      Test functionality: 5: Student
      Complete terrarium: 5: Student
```

![DOM e una closure](../../../../translated_images/it/webdev101-js.10280393044d7eaa.webp)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

Benvenuti in uno degli aspetti più coinvolgenti dello sviluppo web: rendere le cose interattive! Il Document Object Model (DOM) è come un ponte tra il tuo HTML e JavaScript, e oggi lo useremo per dare vita al tuo terrarium. Quando Tim Berners-Lee ha creato il primo browser web, immaginava un web in cui i documenti potessero essere dinamici e interattivi - il DOM rende possibile questa visione.

Esploreremo anche le closures in JavaScript, che inizialmente potrebbero sembrare intimidatorie. Pensa alle closures come a "tasche di memoria" in cui le tue funzioni possono ricordare informazioni importanti. È come se ogni pianta nel tuo terrarium avesse il proprio registro dati per tracciare la sua posizione. Alla fine di questa lezione, capirai quanto siano naturali e utili.

Ecco cosa stiamo costruendo: un terrarium in cui gli utenti possono trascinare e posizionare le piante ovunque vogliano. Imparerai le tecniche di manipolazione del DOM che alimentano tutto, dai caricamenti di file drag-and-drop ai giochi interattivi. Facciamo prendere vita al tuo terrarium.

```mermaid
mindmap
  root((DOM & JavaScript))
    DOM Tree
      Element Selection
      Property Access
      Event Handling
      Dynamic Updates
    Events
      Pointer Events
      Mouse Events
      Touch Events
      Event Listeners
    Closures
      Private Variables
      Function Scope
      Memory Persistence
      State Management
    Drag & Drop
      Position Tracking
      Coordinate Math
      Event Lifecycle
      User Interaction
    Modern Patterns
      Event Delegation
      Performance
      Cross-Device
      Accessibility
```

## Quiz Pre-Lezione

[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/19)

## Comprendere il DOM: La tua porta d'accesso alle pagine web interattive

Il Document Object Model (DOM) è il modo in cui JavaScript comunica con gli elementi HTML. Quando il tuo browser carica una pagina HTML, crea una rappresentazione strutturata di quella pagina in memoria - questo è il DOM. Pensalo come un albero genealogico in cui ogni elemento HTML è un membro della famiglia che JavaScript può accedere, modificare o riorganizzare.

La manipolazione del DOM trasforma le pagine statiche in siti web interattivi. Ogni volta che vedi un pulsante cambiare colore al passaggio del mouse, contenuti aggiornarsi senza ricaricare la pagina o elementi che puoi trascinare, è la manipolazione del DOM in azione.

```mermaid
flowchart TD
    A["Document"] --> B["HTML"]
    B --> C["Head"]
    B --> D["Body"]
    C --> E["Title"]
    C --> F["Meta Tags"]
    D --> G["H1: My Terrarium"]
    D --> H["Div: Page Container"]
    H --> I["Div: Left Container"]
    H --> J["Div: Right Container"]
    H --> K["Div: Terrarium"]
    I --> L["Plant Elements 1-7"]
    J --> M["Plant Elements 8-14"]
    
    L --> N["img#plant1"]
    L --> O["img#plant2"]
    M --> P["img#plant8"]
    M --> Q["img#plant9"]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style D fill:#e8f5e8
    style H fill:#fff3e0
    style N fill:#ffebee
    style O fill:#ffebee
    style P fill:#ffebee
    style Q fill:#ffebee
```

![Rappresentazione dell'albero DOM](../../../../translated_images/it/dom-tree.7daf0e763cbbba92.webp)

> Una rappresentazione del DOM e del markup HTML che lo fa riferimento. Da [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

**Ecco cosa rende il DOM potente:**
- **Fornisce** un modo strutturato per accedere a qualsiasi elemento della tua pagina
- **Permette** aggiornamenti dinamici dei contenuti senza ricaricare la pagina
- **Consente** risposte in tempo reale alle interazioni dell'utente come clic e trascinamenti
- **Crea** la base per applicazioni web moderne e interattive

## Closures in JavaScript: Creare codice organizzato e potente

Una [closure in JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/Closures) è come dare a una funzione il proprio spazio di lavoro privato con memoria persistente. Considera come i fringuelli di Darwin nelle Isole Galápagos abbiano sviluppato beccucci specializzati in base al loro ambiente specifico - le closures funzionano in modo simile, creando funzioni specializzate che "ricordano" il loro contesto specifico anche dopo che la funzione genitore ha terminato.

Nel nostro terrarium, le closures aiutano ogni pianta a ricordare la propria posizione in modo indipendente. Questo schema appare in tutto lo sviluppo professionale di JavaScript, rendendolo un concetto prezioso da comprendere.

```mermaid
flowchart LR
    A["dragElement(plant1)"] --> B["Creates Closure"]
    A2["dragElement(plant2)"] --> B2["Creates Closure"]
    
    B --> C["Private Variables"]
    B2 --> C2["Private Variables"]
    
    C --> D["pos1, pos2, pos3, pos4"]
    C --> E["pointerDrag function"]
    C --> F["elementDrag function"]
    C --> G["stopElementDrag function"]
    
    C2 --> D2["pos1, pos2, pos3, pos4"]
    C2 --> E2["pointerDrag function"]
    C2 --> F2["elementDrag function"]
    C2 --> G2["stopElementDrag function"]
    
    H["Plant 1 remembers its position"] --> B
    H2["Plant 2 remembers its position"] --> B2
    
    style B fill:#e8f5e8
    style B2 fill:#e8f5e8
    style C fill:#fff3e0
    style C2 fill:#fff3e0
```

> 💡 **Comprendere le Closures**: Le closures sono un argomento significativo in JavaScript, e molti sviluppatori le usano per anni prima di comprendere appieno tutti gli aspetti teorici. Oggi ci concentreremo sull'applicazione pratica - vedrai che le closures emergono naturalmente mentre costruiamo le nostre funzionalità interattive. La comprensione si svilupperà man mano che vedrai come risolvono problemi reali.

![Rappresentazione dell'albero DOM](../../../../translated_images/it/dom-tree.7daf0e763cbbba92.webp)

> Una rappresentazione del DOM e del markup HTML che lo fa riferimento. Da [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

In questa lezione, completeremo il nostro progetto interattivo del terrarium creando il JavaScript che permetterà a un utente di manipolare le piante sulla pagina.

## Prima di iniziare: Prepararsi al successo

Avrai bisogno dei file HTML e CSS delle lezioni precedenti sul terrarium - stiamo per rendere interattivo quel design statico. Se ti unisci per la prima volta, completare prima quelle lezioni ti fornirà un contesto importante.

Ecco cosa costruiremo:
- **Trascinamento fluido** per tutte le piante del terrarium
- **Tracciamento delle coordinate** affinché le piante ricordino le loro posizioni
- **Un'interfaccia interattiva completa** usando JavaScript puro
- **Codice pulito e organizzato** utilizzando schemi di closure

## Configurare il file JavaScript

Creiamo il file JavaScript che renderà interattivo il tuo terrarium.

**Passaggio 1: Crea il tuo file script**

Nella cartella del terrarium, crea un nuovo file chiamato `script.js`.

**Passaggio 2: Collega il JavaScript al tuo HTML**

Aggiungi questo tag script alla sezione `<head>` del tuo file `index.html`:

```html
<script src="./script.js" defer></script>
```

**Perché l'attributo `defer` è importante:**
- **Garantisce** che il tuo JavaScript aspetti fino a quando tutto l'HTML è caricato
- **Previene** errori in cui JavaScript cerca elementi che non sono ancora pronti
- **Assicura** che tutti gli elementi delle piante siano disponibili per l'interazione
- **Fornisce** prestazioni migliori rispetto al posizionamento degli script in fondo alla pagina

> ⚠️ **Nota Importante**: L'attributo `defer` previene problemi di tempistica comuni. Senza di esso, JavaScript potrebbe tentare di accedere agli elementi HTML prima che siano caricati, causando errori.

---

## Collegare JavaScript agli elementi HTML

Prima di poter rendere gli elementi trascinabili, JavaScript deve localizzarli nel DOM. Pensalo come un sistema di catalogazione di una biblioteca - una volta che hai il numero di catalogo, puoi trovare esattamente il libro di cui hai bisogno e accedere a tutti i suoi contenuti.

Useremo il metodo `document.getElementById()` per fare queste connessioni. È come avere un sistema di archiviazione preciso - fornisci un ID e localizza esattamente l'elemento di cui hai bisogno nel tuo HTML.

### Abilitare la funzionalità di trascinamento per tutte le piante

Aggiungi questo codice al tuo file `script.js`:

```javascript
// Enable drag functionality for all 14 plants
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

**Ecco cosa fa questo codice:**
- **Localizza** ogni elemento pianta nel DOM usando il suo ID unico
- **Recupera** un riferimento JavaScript a ogni elemento HTML
- **Passa** ogni elemento a una funzione `dragElement` (che creeremo a breve)
- **Prepara** ogni pianta per l'interazione drag-and-drop
- **Collega** la struttura HTML alla funzionalità JavaScript

> 🎯 **Perché usare gli ID invece delle classi?** Gli ID forniscono identificatori unici per elementi specifici, mentre le classi CSS sono progettate per stilizzare gruppi di elementi. Quando JavaScript deve manipolare singoli elementi, gli ID offrono la precisione e le prestazioni di cui abbiamo bisogno.

> 💡 **Consiglio Pro**: Nota come stiamo chiamando `dragElement()` per ogni pianta individualmente. Questo approccio garantisce che ogni pianta abbia il proprio comportamento di trascinamento indipendente, essenziale per un'interazione utente fluida.

### 🔄 **Verifica Pedagogica**
**Comprensione della connessione DOM**: Prima di passare alla funzionalità di trascinamento, verifica di poter:
- ✅ Spiegare come `document.getElementById()` localizza gli elementi HTML
- ✅ Comprendere perché usiamo ID unici per ogni pianta
- ✅ Descrivere lo scopo dell'attributo `defer` nei tag script
- ✅ Riconoscere come JavaScript e HTML si connettono attraverso il DOM

**Test rapido**: Cosa accadrebbe se due elementi avessero lo stesso ID? Perché `getElementById()` restituisce solo un elemento?
*Risposta: Gli ID devono essere unici; se duplicati, viene restituito solo il primo elemento*

---

## Creare la Closure dragElement

Ora creeremo il cuore della nostra funzionalità di trascinamento: una closure che gestisce il comportamento di trascinamento per ogni pianta. Questa closure conterrà più funzioni interne che lavorano insieme per tracciare i movimenti del mouse e aggiornare le posizioni degli elementi.

Le closures sono perfette per questo compito perché ci permettono di creare variabili "private" che persistono tra le chiamate di funzione, dando a ogni pianta il proprio sistema di tracciamento delle coordinate indipendente.

### Comprendere le Closures con un esempio semplice

Lasciami dimostrare le closures con un esempio semplice che illustra il concetto:

```javascript
function createCounter() {
    let count = 0; // This is like a private variable
    
    function increment() {
        count++; // The inner function remembers the outer variable
        return count;
    }
    
    return increment; // We're giving back the inner function
}

const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
```

**Ecco cosa succede in questo schema di closure:**
- **Crea** una variabile privata `count` che esiste solo all'interno di questa closure
- **La funzione interna** può accedere e modificare quella variabile esterna (il meccanismo della closure)
- **Quando restituiamo** la funzione interna, mantiene la sua connessione a quei dati privati
- **Anche dopo** che `createCounter()` termina l'esecuzione, `count` persiste e ricorda il suo valore

### Perché le Closures sono perfette per la funzionalità di trascinamento

Per il nostro terrarium, ogni pianta deve ricordare le proprie coordinate di posizione attuali. Le closures forniscono la soluzione perfetta:

**Vantaggi chiave per il nostro progetto:**
- **Mantiene** variabili di posizione private per ogni pianta indipendentemente
- **Preserva** i dati delle coordinate tra gli eventi di trascinamento
- **Previene** conflitti di variabili tra diversi elementi trascinabili
- **Crea** una struttura di codice pulita e organizzata

> 🎯 **Obiettivo di apprendimento**: Non è necessario padroneggiare ogni aspetto delle closures in questo momento. Concentrati sul vedere come aiutano a organizzare il codice e a mantenere lo stato per la nostra funzionalità di trascinamento.

```mermaid
stateDiagram-v2
    [*] --> Ready: Page loads
    Ready --> DragStart: User presses down (pointerdown)
    DragStart --> Dragging: Mouse/finger moves (pointermove)
    Dragging --> Dragging: Continue moving
    Dragging --> DragEnd: User releases (pointerup)
    DragEnd --> Ready: Reset for next drag
    
    state DragStart {
        [*] --> CapturePosition
        CapturePosition --> SetupListeners
        SetupListeners --> [*]
    }
    
    state Dragging {
        [*] --> CalculateMovement
        CalculateMovement --> UpdatePosition
        UpdatePosition --> [*]
    }
    
    state DragEnd {
        [*] --> RemoveListeners
        RemoveListeners --> CleanupState
        CleanupState --> [*]
    }
```

### Creare la funzione dragElement

Ora costruiamo la funzione principale che gestirà tutta la logica di trascinamento. Aggiungi questa funzione sotto le dichiarazioni degli elementi delle piante:

```javascript
function dragElement(terrariumElement) {
    // Initialize position tracking variables
    let pos1 = 0,  // Previous mouse X position
        pos2 = 0,  // Previous mouse Y position  
        pos3 = 0,  // Current mouse X position
        pos4 = 0;  // Current mouse Y position
    
    // Set up the initial drag event listener
    terrariumElement.onpointerdown = pointerDrag;
}
```

**Comprendere il sistema di tracciamento delle posizioni:**
- **`pos1` e `pos2`**: Memorizzano la differenza tra le vecchie e nuove posizioni del mouse
- **`pos3` e `pos4`**: Tracciano le coordinate attuali del mouse
- **`terrariumElement`**: L'elemento specifico della pianta che stiamo rendendo trascinabile
- **`onpointerdown`**: L'evento che si attiva quando l'utente inizia a trascinare

**Ecco come funziona il pattern della closure:**
- **Crea** variabili di posizione private per ogni elemento pianta
- **Mantiene** queste variabili durante il ciclo di vita del trascinamento
- **Garantisce** che ogni pianta tracci le proprie coordinate indipendentemente
- **Fornisce** un'interfaccia pulita attraverso la funzione `dragElement`

### Perché usare gli eventi Pointer?

Potresti chiederti perché usiamo `onpointerdown` invece del più familiare `onclick`. Ecco la spiegazione:

| Tipo di evento | Migliore per | Svantaggi |
|----------------|-------------|-----------|
| `onclick` | Semplici clic su pulsanti | Non gestisce il trascinamento (solo clic e rilascio) |
| `onpointerdown` | Mouse e touch | Più recente, ma ben supportato oggi |
| `onmousedown` | Solo mouse desktop | Esclude gli utenti mobili |

**Perché gli eventi pointer sono perfetti per ciò che stiamo costruendo:**
- **Funzionano bene** sia che qualcuno usi un mouse, un dito o persino uno stilo
- **Si comportano allo stesso modo** su laptop, tablet o telefono
- **Gestiscono** il movimento effettivo di trascinamento (non solo clic e rilascio)
- **Creano** un'esperienza fluida che gli utenti si aspettano dalle app web moderne

> 💡 **Prepararsi al futuro**: Gli eventi pointer sono il modo moderno per gestire le interazioni dell'utente. Invece di scrivere codice separato per mouse e touch, ottieni entrambi gratuitamente. Abbastanza interessante, vero?

### 🔄 **Verifica Pedagogica**
**Comprensione della gestione degli eventi**: Fermati per confermare la tua comprensione degli eventi:
- ✅ Perché usiamo gli eventi pointer invece degli eventi mouse?
- ✅ Come le variabili delle closures persistono tra le chiamate di funzione?
- ✅ Qual è il ruolo di `preventDefault()` nel trascinamento fluido?
- ✅ Perché colleghiamo i listener al documento invece che agli elementi individuali?

**Connessione al mondo reale**: Pensa alle interfacce drag-and-drop che usi quotidianamente:
- **Caricamenti di file**: Trascinare file in una finestra del browser
- **Kanban board**: Spostare attività tra colonne
- **Gallerie di immagini**: Riordinare le foto
- **Interfacce mobili**: Scorrere e trascinare su touchscreen

---

## La funzione pointerDrag: Catturare l'inizio di un trascinamento

Quando un utente preme su una pianta (sia con un clic del mouse che con un tocco), la funzione `pointerDrag` entra in azione. Questa funzione cattura le coordinate iniziali e configura il sistema di trascinamento.

Aggiungi questa funzione all'interno della tua closure `dragElement`, subito dopo la linea `terrariumElement.onpointerdown = pointerDrag;`:

```javascript
function pointerDrag(e) {
    // Prevent default browser behavior (like text selection)
    e.preventDefault();
    
    // Capture the initial mouse/touch position
    pos3 = e.clientX;  // X coordinate where drag started
    pos4 = e.clientY;  // Y coordinate where drag started
    
    // Set up event listeners for the dragging process
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}
```

**Passo dopo passo, ecco cosa succede:**
- **Previene** comportamenti predefiniti del browser che potrebbero interferire con il trascinamento
- **Registra** le coordinate esatte in cui l'utente ha iniziato il gesto di trascinamento
- **Stabilisce** listener di eventi per il movimento di trascinamento in corso
- **Prepara** il sistema a tracciare il movimento del mouse/del dito su tutto il documento

### Comprendere la prevenzione degli eventi

La linea `e.preventDefault()` è cruciale per un trascinamento fluido:

**Senza prevenzione, i browser potrebbero:**
- **Selezionare** testo durante il trascinamento sulla pagina
- **Attivare** menu contestuali con clic destro durante il trascinamento
- **Interferire** con il nostro comportamento di trascinamento personalizzato
- **Creare** artefatti visivi durante l'operazione di trascinamento

> 🔍 **Esperimento**: Dopo aver completato questa lezione, prova a rimuovere `e.preventDefault()` e osserva come influisce sull'esperienza di trascinamento. Capirai rapidamente perché questa linea è essenziale!

### Sistema di tracciamento delle coordinate

Le proprietà `e.clientX` e `e.clientY` ci forniscono coordinate precise del mouse/tocco:

| Proprietà | Cosa misura | Caso d'uso |
|-----------|-------------|------------|
| `clientX` | Posizione orizzontale rispetto alla viewport | Tracciare il movimento sinistra-destra |
| `clientY` | Posizione verticale rispetto alla viewport | Tracciare il movimento su-giù |
**Comprendere queste coordinate:**
- **Fornisce** informazioni di posizionamento precise al pixel
- **Aggiorna** in tempo reale mentre l'utente muove il puntatore
- **Rimane** coerente su diverse dimensioni dello schermo e livelli di zoom
- **Consente** interazioni di trascinamento fluide e reattive

### Configurare i listener di eventi a livello di documento

Nota come colleghiamo gli eventi di movimento e arresto all'intero `document`, non solo all'elemento pianta:

```javascript
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```

**Perché collegarli al documento:**
- **Continua** a tracciare anche quando il mouse lascia l'elemento pianta
- **Previene** interruzioni nel trascinamento se l'utente si muove rapidamente
- **Fornisce** un trascinamento fluido su tutto lo schermo
- **Gestisce** casi limite in cui il cursore si sposta fuori dalla finestra del browser

> ⚡ **Nota sulle prestazioni**: Puliremo questi listener a livello di documento quando il trascinamento si interrompe per evitare perdite di memoria e problemi di prestazioni.

## Completare il sistema di trascinamento: movimento e pulizia

Ora aggiungeremo le due funzioni rimanenti che gestiscono il movimento effettivo del trascinamento e la pulizia quando il trascinamento si interrompe. Queste funzioni lavorano insieme per creare un movimento fluido e reattivo della pianta nel terrario.

### La funzione elementDrag: Tracciare il movimento

Aggiungi la funzione `elementDrag` subito dopo la parentesi graffa di chiusura di `pointerDrag`:

```javascript
function elementDrag(e) {
    // Calculate the distance moved since the last event
    pos1 = pos3 - e.clientX;  // Horizontal distance moved
    pos2 = pos4 - e.clientY;  // Vertical distance moved
    
    // Update the current position tracking
    pos3 = e.clientX;  // New current X position
    pos4 = e.clientY;  // New current Y position
    
    // Apply the movement to the element's position
    terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
    terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
}
```

**Comprendere la matematica delle coordinate:**
- **`pos1` e `pos2`**: Calcolano quanto si è mosso il mouse dall'ultimo aggiornamento
- **`pos3` e `pos4`**: Memorizzano la posizione attuale del mouse per il prossimo calcolo
- **`offsetTop` e `offsetLeft`**: Ottengono la posizione attuale dell'elemento sulla pagina
- **Logica di sottrazione**: Sposta l'elemento della stessa quantità di movimento del mouse

```mermaid
sequenceDiagram
    participant User
    participant Mouse
    participant JavaScript
    participant Plant
    
    User->>Mouse: Start drag at (100, 50)
    Mouse->>JavaScript: pointerdown event
    JavaScript->>JavaScript: Store initial position (pos3=100, pos4=50)
    JavaScript->>JavaScript: Setup move/up listeners
    
    User->>Mouse: Move to (110, 60)
    Mouse->>JavaScript: pointermove event
    JavaScript->>JavaScript: Calculate: pos1=10, pos2=10
    JavaScript->>Plant: Update: left += 10px, top += 10px
    Plant->>Plant: Render at new position
    
    User->>Mouse: Release at (120, 65)
    Mouse->>JavaScript: pointerup event
    JavaScript->>JavaScript: Remove listeners
    JavaScript->>JavaScript: Reset for next drag
```

**Ecco la suddivisione del calcolo del movimento:**
1. **Misura** la differenza tra le vecchie e nuove posizioni del mouse
2. **Calcola** quanto spostare l'elemento in base al movimento del mouse
3. **Aggiorna** le proprietà di posizione CSS dell'elemento in tempo reale
4. **Memorizza** la nuova posizione come base per il prossimo calcolo di movimento

### Rappresentazione visiva della matematica

```mermaid
sequenceDiagram
    participant Mouse
    participant JavaScript
    participant Plant
    
    Mouse->>JavaScript: Move from (100,50) to (110,60)
    JavaScript->>JavaScript: Calculate: moved 10px right, 10px down
    JavaScript->>Plant: Update position by +10px right, +10px down
    Plant->>Plant: Render at new position
```

### La funzione stopElementDrag: Pulizia

Aggiungi la funzione di pulizia dopo la parentesi graffa di chiusura di `elementDrag`:

```javascript
function stopElementDrag() {
    // Remove the document-level event listeners
    document.onpointerup = null;
    document.onpointermove = null;
}
```

**Perché la pulizia è essenziale:**
- **Previene** perdite di memoria da listener di eventi persistenti
- **Interrompe** il comportamento di trascinamento quando l'utente rilascia la pianta
- **Consente** ad altri elementi di essere trascinati indipendentemente
- **Reimposta** il sistema per la prossima operazione di trascinamento

**Cosa succede senza pulizia:**
- I listener di eventi continuano a funzionare anche dopo che il trascinamento si interrompe
- Le prestazioni si degradano man mano che i listener inutilizzati si accumulano
- Comportamenti imprevisti durante l'interazione con altri elementi
- Le risorse del browser vengono sprecate per la gestione di eventi inutili

### Comprendere le proprietà di posizione CSS

Il nostro sistema di trascinamento manipola due proprietà CSS chiave:

| Proprietà | Cosa controlla | Come la usiamo |
|-----------|----------------|----------------|
| `top` | Distanza dal bordo superiore | Posizionamento verticale durante il trascinamento |
| `left` | Distanza dal bordo sinistro | Posizionamento orizzontale durante il trascinamento |

**Informazioni chiave sulle proprietà offset:**
- **`offsetTop`**: Distanza attuale dal bordo superiore dell'elemento padre posizionato
- **`offsetLeft`**: Distanza attuale dal bordo sinistro dell'elemento padre posizionato
- **Contesto di posizionamento**: Questi valori sono relativi all'antenato posizionato più vicino
- **Aggiornamenti in tempo reale**: Cambiano immediatamente quando modifichiamo le proprietà CSS

> 🎯 **Filosofia di design**: Questo sistema di trascinamento è intenzionalmente flessibile – non ci sono "zone di rilascio" o restrizioni. Gli utenti possono posizionare le piante ovunque, dando loro il pieno controllo creativo sul design del terrario.

## Mettere tutto insieme: Il tuo sistema completo di trascinamento

Congratulazioni! Hai appena costruito un sofisticato sistema di trascinamento e rilascio utilizzando JavaScript puro. La tua funzione completa `dragElement` ora contiene una potente chiusura che gestisce:

**Cosa realizza la tua chiusura:**
- **Mantiene** variabili di posizione private per ogni pianta in modo indipendente
- **Gestisce** l'intero ciclo di vita del trascinamento dall'inizio alla fine
- **Fornisce** un movimento fluido e reattivo su tutto lo schermo
- **Pulisce** correttamente le risorse per prevenire perdite di memoria
- **Crea** un'interfaccia intuitiva e creativa per il design del terrario

### Testare il tuo terrario interattivo

Ora testa il tuo terrario interattivo! Apri il file `index.html` in un browser web e prova la funzionalità:

1. **Clicca e tieni premuto** su una pianta per iniziare il trascinamento
2. **Muovi il mouse o il dito** e osserva la pianta seguire fluidamente
3. **Rilascia** per posizionare la pianta nella sua nuova posizione
4. **Sperimenta** con diverse disposizioni per esplorare l'interfaccia

🥇 **Traguardo**: Hai creato un'applicazione web completamente interattiva utilizzando concetti fondamentali che gli sviluppatori professionisti utilizzano quotidianamente. Questa funzionalità di trascinamento e rilascio utilizza gli stessi principi alla base del caricamento di file, delle bacheche kanban e di molte altre interfacce interattive.

### 🔄 **Verifica pedagogica**
**Comprensione del sistema completo**: Verifica la tua padronanza del sistema di trascinamento completo:
- ✅ Come fanno le chiusure a mantenere uno stato indipendente per ogni pianta?
- ✅ Perché la matematica del calcolo delle coordinate è necessaria per un movimento fluido?
- ✅ Cosa accadrebbe se dimenticassimo di pulire i listener di eventi?
- ✅ Come si scala questo modello per interazioni più complesse?

**Riflessione sulla qualità del codice**: Rivedi la tua soluzione completa:
- **Design modulare**: Ogni pianta ha la propria istanza di chiusura
- **Efficienza degli eventi**: Configurazione e pulizia corretta dei listener
- **Supporto cross-device**: Funziona su desktop e dispositivi mobili
- **Consapevolezza delle prestazioni**: Nessuna perdita di memoria o calcoli ridondanti

![terrario finito](../../../../translated_images/it/terrarium-final.0920f16e87c13a84.webp)

---

## Sfida GitHub Copilot Agent 🚀

Usa la modalità Agent per completare la seguente sfida:

**Descrizione:** Migliora il progetto del terrario aggiungendo una funzionalità di reset che riporta tutte le piante alle loro posizioni originali con animazioni fluide.

**Prompt:** Crea un pulsante di reset che, quando cliccato, anima tutte le piante tornando alle loro posizioni originali nella barra laterale utilizzando transizioni CSS. La funzione dovrebbe memorizzare le posizioni originali quando la pagina viene caricata e far tornare le piante a quelle posizioni in modo fluido in 1 secondo quando il pulsante di reset viene premuto.

Scopri di più sulla [modalità agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## 🚀 Sfida aggiuntiva: Amplia le tue competenze

Pronto a portare il tuo terrario al livello successivo? Prova a implementare questi miglioramenti:

**Estensioni creative:**
- **Doppio clic** su una pianta per portarla in primo piano (manipolazione dello z-index)
- **Aggiungi feedback visivo** come un bagliore sottile quando si passa sopra le piante
- **Implementa confini** per impedire che le piante vengano trascinate fuori dal terrario
- **Crea una funzione di salvataggio** che memorizzi le posizioni delle piante utilizzando localStorage
- **Aggiungi effetti sonori** per il sollevamento e il posizionamento delle piante

> 💡 **Opportunità di apprendimento**: Ognuna di queste sfide ti insegnerà nuovi aspetti della manipolazione del DOM, della gestione degli eventi e del design dell'esperienza utente.

## Quiz post-lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/20)

## Revisione e studio autonomo: Approfondire la comprensione

Hai padroneggiato i fondamenti della manipolazione del DOM e delle chiusure, ma c'è sempre altro da esplorare! Ecco alcune strade per ampliare le tue conoscenze e competenze.

### Approcci alternativi al trascinamento e rilascio

Abbiamo utilizzato gli eventi del puntatore per la massima flessibilità, ma lo sviluppo web offre diversi approcci:

| Approccio | Ideale per | Valore educativo |
|-----------|------------|------------------|
| [API HTML Drag and Drop](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) | Caricamento di file, zone di trascinamento formali | Comprendere le capacità native del browser |
| [Eventi touch](https://developer.mozilla.org/docs/Web/API/Touch_events) | Interazioni specifiche per dispositivi mobili | Modelli di sviluppo mobile-first |
| Proprietà CSS `transform` | Animazioni fluide | Tecniche di ottimizzazione delle prestazioni |

### Argomenti avanzati sulla manipolazione del DOM

**Prossimi passi nel tuo percorso di apprendimento:**
- **Delegazione degli eventi**: Gestire gli eventi in modo efficiente per più elementi
- **Intersection Observer**: Rilevare quando gli elementi entrano/escono dal viewport
- **Mutation Observer**: Monitorare i cambiamenti nella struttura del DOM
- **Web Components**: Creare elementi UI riutilizzabili e incapsulati
- **Concetti di Virtual DOM**: Comprendere come i framework ottimizzano gli aggiornamenti del DOM

### Risorse essenziali per continuare a imparare

**Documentazione tecnica:**
- [Guida agli eventi del puntatore MDN](https://developer.mozilla.org/docs/Web/API/Pointer_events) - Riferimento completo sugli eventi del puntatore
- [Specifiche degli eventi del puntatore W3C](https://www.w3.org/TR/pointerevents1/) - Documentazione ufficiale degli standard
- [Approfondimento sulle chiusure JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/Closures) - Modelli avanzati di chiusure

**Compatibilità del browser:**
- [CanIUse.com](https://caniuse.com/) - Controlla il supporto delle funzionalità nei browser
- [Dati di compatibilità del browser MDN](https://github.com/mdn/browser-compat-data) - Informazioni dettagliate sulla compatibilità

**Opportunità di pratica:**
- **Costruisci** un gioco di puzzle utilizzando meccaniche di trascinamento simili
- **Crea** una bacheca kanban con gestione delle attività tramite trascinamento
- **Progetta** una galleria di immagini con disposizioni fotografiche trascinabili
- **Sperimenta** con gesti touch per interfacce mobili

> 🎯 **Strategia di apprendimento**: Il modo migliore per consolidare questi concetti è attraverso la pratica. Prova a costruire variazioni di interfacce trascinabili – ogni progetto ti insegnerà qualcosa di nuovo sull'interazione utente e sulla manipolazione del DOM.

### ⚡ **Cosa puoi fare nei prossimi 5 minuti**
- [ ] Apri DevTools del browser e digita `document.querySelector('body')` nella console
- [ ] Prova a cambiare il testo di una pagina web utilizzando `innerHTML` o `textContent`
- [ ] Aggiungi un listener di eventi di clic a qualsiasi pulsante o link su una pagina web
- [ ] Ispeziona la struttura dell'albero DOM utilizzando il pannello Elementi

### 🎯 **Cosa puoi realizzare in quest'ora**
- [ ] Completa il quiz post-lezione e rivedi i concetti di manipolazione del DOM
- [ ] Crea una pagina web interattiva che risponde ai clic dell'utente
- [ ] Pratica la gestione degli eventi con diversi tipi di eventi (clic, mouseover, pressione di tasti)
- [ ] Costruisci una semplice lista di cose da fare o un contatore utilizzando la manipolazione del DOM
- [ ] Esplora la relazione tra elementi HTML e oggetti JavaScript

### 📅 **Il tuo viaggio JavaScript di una settimana**
- [ ] Completa il progetto del terrario interattivo con funzionalità di trascinamento e rilascio
- [ ] Padroneggia la delegazione degli eventi per una gestione efficiente degli eventi
- [ ] Impara il ciclo degli eventi e JavaScript asincrono
- [ ] Pratica le chiusure costruendo moduli con stato privato
- [ ] Esplora le API moderne del DOM come Intersection Observer
- [ ] Costruisci componenti interattivi senza utilizzare framework

### 🌟 **La tua padronanza di JavaScript in un mese**
- [ ] Crea un'applicazione complessa a pagina singola utilizzando JavaScript puro
- [ ] Impara un framework moderno (React, Vue o Angular) e confrontalo con il DOM puro
- [ ] Contribuisci a progetti JavaScript open source
- [ ] Padroneggia concetti avanzati come web components ed elementi personalizzati
- [ ] Costruisci applicazioni web performanti con modelli DOM ottimali
- [ ] Insegna agli altri la manipolazione del DOM e i fondamenti di JavaScript

## 🎯 La tua timeline di padronanza del DOM JavaScript

```mermaid
timeline
    title DOM & JavaScript Learning Progression
    
    section Foundation (15 minutes)
        DOM Understanding: Element selection methods
                         : Tree structure navigation
                         : Property access patterns
        
    section Event Handling (20 minutes)
        User Interaction: Pointer event basics
                        : Event listener setup
                        : Cross-device compatibility
                        : Event prevention techniques
        
    section Closures (25 minutes)
        Scope Management: Private variable creation
                        : Function persistence
                        : State management patterns
                        : Memory efficiency
        
    section Drag System (30 minutes)
        Interactive Features: Coordinate tracking
                            : Position calculation
                            : Movement mathematics
                            : Cleanup procedures
        
    section Advanced Patterns (45 minutes)
        Professional Skills: Event delegation
                           : Performance optimization
                           : Error handling
                           : Accessibility considerations
        
    section Framework Understanding (1 week)
        Modern Development: Virtual DOM concepts
                          : State management libraries
                          : Component architectures
                          : Build tool integration
        
    section Expert Level (1 month)
        Advanced DOM APIs: Intersection Observer
                         : Mutation Observer
                         : Custom Elements
                         : Web Components
```

### 🛠️ Riepilogo del tuo toolkit JavaScript

Dopo aver completato questa lezione, ora hai:
- **Padronanza del DOM**: Selezione degli elementi, manipolazione delle proprietà e navigazione nell'albero
- **Esperienza con gli eventi**: Gestione delle interazioni cross-device con eventi del puntatore
- **Comprensione delle chiusure**: Gestione dello stato privato e persistenza delle funzioni
- **Sistemi interattivi**: Implementazione completa di trascinamento e rilascio da zero
- **Consapevolezza delle prestazioni**: Pulizia corretta degli eventi e gestione della memoria
- **Modelli moderni**: Tecniche di organizzazione del codice utilizzate nello sviluppo professionale
- **Esperienza utente**: Creazione di interfacce intuitive e reattive

**Competenze professionali acquisite**: Hai costruito funzionalità utilizzando le stesse tecniche di:
- **Bacheche Trello/Kanban**: Trascinamento delle schede tra colonne
- **Sistemi di caricamento file**: Gestione di file tramite trascinamento e rilascio
- **Gallerie di immagini**: Interfacce di disposizione fotografica
- **App mobili**: Modelli di interazione basati sul tocco

**Livello successivo**: Sei pronto per esplorare framework moderni come React, Vue o Angular che si basano su questi concetti fondamentali di manipolazione del DOM!

## Compito

[Lavora un po' di più con il DOM](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si consiglia una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.