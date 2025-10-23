<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-22T23:31:05+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "it"
}
-->
# Progetto Terrario Parte 2: Introduzione al CSS

![Introduzione al CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.it.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

Ricordi com'era semplice il tuo terrario in HTML? Con il CSS possiamo trasformare quella struttura basilare in qualcosa di visivamente accattivante.

Se l'HTML è come costruire la struttura di una casa, allora il CSS è tutto ciò che la rende accogliente: i colori delle pareti, la disposizione dei mobili, l'illuminazione e il modo in cui le stanze si collegano tra loro. Pensa a come il Palazzo di Versailles è passato da essere un semplice padiglione di caccia a diventare uno degli edifici più magnifici del mondo grazie all'attenzione ai dettagli e alla disposizione.

Oggi trasformeremo il tuo terrario da funzionale a raffinato. Imparerai a posizionare gli elementi con precisione, a creare layout che si adattano a diverse dimensioni dello schermo e a creare quell'appeal visivo che rende i siti web coinvolgenti.

Alla fine di questa lezione, vedrai come uno stile strategico con il CSS può migliorare notevolmente il tuo progetto. Aggiungiamo un po' di stile al tuo terrario.

## Quiz Pre-Lettura

[Quiz pre-lettura](https://ff-quizzes.netlify.app/web/quiz/17)

## Introduzione al CSS

Il CSS è spesso considerato solo come "qualcosa che rende le cose belle", ma ha uno scopo molto più ampio. Il CSS è come essere il regista di un film: controlli non solo l'aspetto di tutto, ma anche il movimento, l'interazione e l'adattamento a diverse situazioni.

Il CSS moderno è incredibilmente potente. Puoi scrivere codice che adatta automaticamente i layout per telefoni, tablet e computer desktop. Puoi creare animazioni fluide che guidano l'attenzione degli utenti dove necessario. I risultati possono essere davvero impressionanti quando tutto funziona insieme.

> 💡 **Consiglio Pro**: Il CSS è in continua evoluzione con nuove funzionalità e capacità. Controlla sempre [CanIUse.com](https://caniuse.com) per verificare il supporto dei browser per le nuove funzionalità CSS prima di utilizzarle nei progetti di produzione.

**Ecco cosa realizzeremo in questa lezione:**
- **Creare** un design visivo completo per il tuo terrario utilizzando tecniche CSS moderne
- **Esplorare** concetti fondamentali come la cascata, l'ereditarietà e i selettori CSS
- **Implementare** strategie di posizionamento e layout responsive
- **Costruire** il contenitore del terrario utilizzando forme e stili CSS

### Prerequisiti

Dovresti aver completato la struttura HTML del tuo terrario dalla lezione precedente e averla pronta per essere stilizzata.

> 📺 **Risorsa Video**: Dai un'occhiata a questo utile video tutorial
>
> [![Tutorial CSS Basics](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Configurare il File CSS

Prima di iniziare a stilizzare, dobbiamo collegare il CSS al nostro HTML. Questo collegamento indica al browser dove trovare le istruzioni di stile per il nostro terrario.

Nella cartella del tuo terrario, crea un nuovo file chiamato `style.css`, quindi collegalo nella sezione `<head>` del tuo documento HTML:

```html
<link rel="stylesheet" href="./style.css" />
```

**Cosa fa questo codice:**
- **Crea** una connessione tra i file HTML e CSS
- **Indica** al browser di caricare e applicare gli stili da `style.css`
- **Utilizza** l'attributo `rel="stylesheet"` per specificare che si tratta di un file CSS
- **Riferisce** il percorso del file con `href="./style.css"`

## Comprendere la Cascata del CSS

Ti sei mai chiesto perché il CSS si chiama "Cascading Style Sheets"? Gli stili scorrono come una cascata e a volte entrano in conflitto tra loro.

Pensa a come funzionano le strutture di comando militari: un ordine generale potrebbe dire "tutte le truppe indossano il verde", ma un ordine specifico per la tua unità potrebbe dire "indossate l'uniforme blu per la cerimonia". L'istruzione più specifica ha la precedenza. Il CSS segue una logica simile e comprendere questa gerarchia rende il debug molto più gestibile.

### Sperimentare con la Priorità della Cascata

Vediamo la cascata in azione creando un conflitto di stile. Per prima cosa, aggiungi uno stile inline al tuo tag `<h1>`:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Cosa fa questo codice:**
- **Applica** un colore rosso direttamente all'elemento `<h1>` utilizzando lo stile inline
- **Utilizza** l'attributo `style` per incorporare il CSS direttamente nell'HTML
- **Crea** la regola di stile con la priorità più alta per questo specifico elemento

Successivamente, aggiungi questa regola al tuo file `style.css`:

```css
h1 {
  color: blue;
}
```

**In questo caso abbiamo:**
- **Definito** una regola CSS che si applica a tutti gli elementi `<h1>`
- **Impostato** il colore del testo su blu utilizzando un foglio di stile esterno
- **Creato** una regola di priorità inferiore rispetto agli stili inline

✅ **Verifica delle Conoscenze**: Quale colore viene visualizzato nella tua app web? Perché quel colore prevale? Riesci a pensare a scenari in cui potresti voler sovrascrivere gli stili?

> 💡 **Ordine di Priorità del CSS (dal più alto al più basso):**
> 1. **Stili inline** (attributo style)
> 2. **ID** (#myId)
> 3. **Classi** (.myClass) e attributi
> 4. **Selettori di elementi** (h1, div, p)
> 5. **Default del browser**

## L'Ereditarietà del CSS in Azione

L'ereditarietà del CSS funziona come la genetica: gli elementi ereditano alcune proprietà dai loro elementi genitori. Se imposti la famiglia di caratteri sull'elemento body, tutto il testo al suo interno utilizzerà automaticamente lo stesso font. È simile a come la caratteristica distintiva della mascella della famiglia degli Asburgo è apparsa attraverso le generazioni senza essere specificata per ogni individuo.

Tuttavia, non tutto viene ereditato. Gli stili di testo come i font e i colori vengono ereditati, ma le proprietà di layout come margini e bordi no. Proprio come i figli possono ereditare tratti fisici ma non le scelte di moda dei genitori.

### Osservare l'Ereditarietà dei Font

Vediamo l'ereditarietà in azione impostando una famiglia di caratteri sull'elemento `<body>`:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Analisi di ciò che accade qui:**
- **Imposta** la famiglia di caratteri per l'intera pagina, prendendo di mira l'elemento `<body>`
- **Utilizza** uno stack di font con opzioni di fallback per una migliore compatibilità tra browser
- **Applica** font di sistema moderni che hanno un aspetto ottimale su diversi sistemi operativi
- **Garantisce** che tutti gli elementi figli ereditino questo font a meno che non venga specificamente sovrascritto

Apri gli strumenti per sviluppatori del tuo browser (F12), vai alla scheda Elementi e ispeziona il tuo elemento `<h1>`. Vedrai che eredita la famiglia di caratteri dal body:

![font ereditato](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.it.png)

✅ **Tempo di Esperimento**: Prova a impostare altre proprietà ereditabili sul `<body>` come `color`, `line-height` o `text-align`. Cosa succede al tuo titolo e agli altri elementi?

> 📝 **Proprietà Ereditabili**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Proprietà Non Ereditabili**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Padroneggiare i Selettori CSS

I selettori CSS sono il tuo modo per individuare specifici elementi da stilizzare. Funzionano come dare indicazioni precise: invece di dire "la casa", potresti dire "la casa blu con la porta rossa in via Maple".

Il CSS offre diversi modi per essere specifici, e scegliere il selettore giusto è come scegliere lo strumento appropriato per il compito. A volte devi stilizzare ogni porta del quartiere, altre volte solo una porta specifica.

### Selettori di Elementi (Tag)

I selettori di elementi prendono di mira gli elementi HTML in base al loro nome di tag. Sono perfetti per impostare stili di base che si applicano ampiamente alla tua pagina:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Comprendere questi stili:**
- **Imposta** una tipografia coerente su tutta la pagina con il selettore `body`
- **Rimuove** i margini e i padding predefiniti del browser per un controllo migliore
- **Stilizza** tutti gli elementi di intestazione con colore, allineamento e spaziatura
- **Utilizza** unità `rem` per dimensioni dei font scalabili e accessibili

Mentre i selettori di elementi funzionano bene per lo stile generale, avrai bisogno di selettori più specifici per stilizzare componenti individuali come le piante nel tuo terrario.

### Selettori ID per Elementi Unici

I selettori ID utilizzano il simbolo `#` e prendono di mira elementi con attributi `id` specifici. Poiché gli ID devono essere unici in una pagina, sono perfetti per stilizzare elementi individuali e speciali come i contenitori delle piante a sinistra e a destra.

Creiamo lo stile per i contenitori laterali del nostro terrario dove vivranno le piante:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Cosa fa questo codice:**
- **Posiziona** i contenitori ai bordi estremi sinistro e destro utilizzando il posizionamento `absolute`
- **Utilizza** unità `vh` (altezza della finestra) per un'altezza responsive che si adatta alla dimensione dello schermo
- **Applica** `box-sizing: border-box` per includere il padding nella larghezza totale
- **Rimuove** unità `px` inutili dai valori zero per un codice più pulito
- **Imposta** un colore di sfondo sottile più gradevole rispetto al grigio intenso

✅ **Sfida di Qualità del Codice**: Nota come questo CSS viola il principio DRY (Don't Repeat Yourself). Riesci a riorganizzarlo utilizzando sia un ID che una classe?

**Approccio migliorato:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```


### Selettori di Classe per Stili Riutilizzabili

I selettori di classe utilizzano il simbolo `.` e sono perfetti quando vuoi applicare gli stessi stili a più elementi. A differenza degli ID, le classi possono essere riutilizzate in tutto il tuo HTML, rendendole ideali per modelli di stile coerenti.

Nel nostro terrario, ogni pianta necessita di uno stile simile ma anche di un posizionamento individuale. Utilizzeremo una combinazione di classi per stili condivisi e ID per il posizionamento unico.

**Ecco la struttura HTML per ogni pianta:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.it.png" />
</div>
```

**Elementi chiave spiegati:**
- **Utilizza** `class="plant-holder"` per uno stile coerente del contenitore tra tutte le piante
- **Applica** `class="plant"` per lo stile e il comportamento condivisi delle immagini
- **Include** un `id="plant1"` unico per il posizionamento individuale e l'interazione con JavaScript
- **Fornisce** testo alternativo descrittivo per l'accessibilità dei lettori di schermo

Ora aggiungi questi stili al tuo file `style.css`:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Analisi di questi stili:**
- **Crea** un posizionamento relativo per il contenitore della pianta per stabilire un contesto di posizionamento
- **Imposta** ogni contenitore della pianta a un'altezza del 13%, garantendo che tutte le piante si adattino verticalmente senza scorrimento
- **Sposta** leggermente i contenitori a sinistra per centrare meglio le piante nei loro contenitori
- **Permette** alle piante di scalare in modo responsive con le proprietà `max-width` e `max-height`
- **Utilizza** `z-index` per posizionare le piante sopra altri elementi nel terrario
- **Aggiunge** un effetto hover sottile con transizioni CSS per una migliore interazione con l'utente

✅ **Riflessione Critica**: Perché abbiamo bisogno sia dei selettori `.plant-holder` che `.plant`? Cosa accadrebbe se provassimo a usarne solo uno?

> 💡 **Modello di Design**: Il contenitore (`.plant-holder`) controlla il layout e il posizionamento, mentre il contenuto (`.plant`) controlla l'aspetto e la scalabilità. Questa separazione rende il codice più manutenibile e flessibile.

## Comprendere il Posizionamento CSS

Il posizionamento CSS è come essere il regista di una rappresentazione teatrale: decidi dove ogni attore deve stare e come deve muoversi sul palco. Alcuni attori seguono la formazione standard, mentre altri necessitano di un posizionamento specifico per un effetto drammatico.

Una volta compreso il posizionamento, molte sfide di layout diventano gestibili. Hai bisogno di una barra di navigazione che rimanga in alto mentre gli utenti scorrono? Il posizionamento lo gestisce. Vuoi un tooltip che appaia in una posizione specifica? Anche quello è possibile grazie al posizionamento.

### I Cinque Valori di Posizionamento

| Valore di Posizionamento | Comportamento | Caso d'Uso |
|--------------------------|---------------|------------|
| `static` | Flusso predefinito, ignora top/left/right/bottom | Layout normale del documento |
| `relative` | Posizionato rispetto alla sua posizione normale | Piccoli aggiustamenti, creazione di contesto di posizionamento |
| `absolute` | Posizionato rispetto all'antenato posizionato più vicino | Posizionamento preciso, sovrapposizioni |
| `fixed` | Posizionato rispetto alla finestra di visualizzazione | Barre di navigazione, elementi flottanti |
| `sticky` | Passa da relativo a fisso in base allo scorrimento | Intestazioni che si fissano durante lo scorrimento |

### Posizionamento nel Nostro Terrario

Il nostro terrario utilizza una combinazione strategica di tipi di posizionamento per creare il layout desiderato:

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**Comprendere la strategia di posizionamento:**
- **I contenitori assoluti** vengono rimossi dal flusso normale del documento e fissati ai bordi dello schermo
- **I contenitori relativi delle piante** creano un contesto di posizionamento pur rimanendo nel flusso del documento
- **Le piante assolute** possono essere posizionate con precisione all'interno dei loro contenitori relativi
- **Questa combinazione** consente alle piante di essere disposte verticalmente pur essendo posizionabili individualmente

> 🎯 **Perché è Importante**: Gli elementi `plant` necessitano di un posizionamento assoluto per diventare trascinabili nella prossima lezione. Il posizionamento assoluto li rimuove dal flusso normale del layout, rendendo possibili le interazioni drag-and-drop.

✅ **Tempo di Esperimento**: Prova a cambiare i valori di posizionamento e osserva i risultati:
- Cosa succede se cambi `.container` da `absolute` a `relative`?
- Come cambia il layout se `.plant-holder` utilizza `absolute` invece di `relative`?
- Cosa accade quando cambi `.plant` a un posizionamento `relative`?

## Costruire il Terrario con il CSS

Ora costruiremo un barattolo di vetro utilizzando solo il CSS - senza immagini o software grafici.

Creare effetti realistici di vetro, ombre e profondità utilizzando il posizionamento e la trasparenza dimostra le capacità visive del CSS. Questa tecnica rispecchia il modo in cui gli architetti del movimento Bauhaus utilizzavano forme geometriche semplici per creare strutture complesse e belle. Una volta compresi questi principi, riconoscerai le tecniche CSS dietro molti design web.

### Creare i Componenti del Barattolo di Vetro
Costruiamo il barattolo del terrario pezzo per pezzo. Ogni parte utilizza il posizionamento assoluto e dimensioni basate su percentuali per un design responsivo:

```css
.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 1rem;
  position: absolute;
  bottom: 0.5%;
  left: 20%;
  opacity: 0.5;
  z-index: 1;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 80.5%;
  left: 25%;
  opacity: 0.7;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
}

.dirt {
  width: 60%;
  height: 5%;
  background: #3a241d;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  bottom: 1%;
  left: 20%;
  opacity: 0.7;
  z-index: -1;
}
```

**Comprendere la costruzione del terrario:**
- **Utilizza** dimensioni basate su percentuali per una scalabilità responsiva su tutte le dimensioni dello schermo
- **Posiziona** gli elementi in modo assoluto per impilarli e allinearli con precisione
- **Applica** diversi valori di opacità per creare l'effetto di trasparenza del vetro
- **Implementa** il layering con `z-index` affinché le piante appaiano all'interno del barattolo
- **Aggiunge** ombre leggere e bordi arrotondati per un aspetto più realistico

### Design Responsivo con Percentuali

Nota come tutte le dimensioni utilizzano percentuali anziché valori fissi in pixel:

**Perché è importante:**
- **Garantisce** che il terrario si adatti proporzionalmente a qualsiasi dimensione dello schermo
- **Mantiene** le relazioni visive tra i componenti del barattolo
- **Offre** un'esperienza coerente dai telefoni cellulari ai grandi monitor desktop
- **Permette** al design di adattarsi senza compromettere il layout visivo

### Unità CSS in Azione

Stiamo utilizzando unità `rem` per il border-radius, che si adattano alla dimensione del font radice. Questo crea design più accessibili che rispettano le preferenze di font degli utenti. Scopri di più sulle [unità relative CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths) nella specifica ufficiale.

✅ **Esperimenti Visivi**: Prova a modificare questi valori e osserva gli effetti:
- Cambia l'opacità del barattolo da 0.5 a 0.8 – come cambia l'aspetto del vetro?
- Modifica il colore della terra da `#3a241d` a `#8B4513` – che impatto visivo ha?
- Cambia lo `z-index` della terra a 2 – cosa succede al layering?

---

## Sfida dell'Agente GitHub Copilot 🚀

Usa la modalità Agente per completare la seguente sfida:

**Descrizione:** Crea un'animazione CSS che faccia oscillare dolcemente le piante del terrario, simulando l'effetto di una brezza naturale. Questo ti aiuterà a praticare animazioni CSS, trasformazioni e keyframes, migliorando l'appeal visivo del tuo terrario.

**Prompt:** Aggiungi animazioni keyframe CSS per far oscillare dolcemente le piante nel terrario da un lato all'altro. Crea un'animazione di oscillazione che ruoti leggermente ogni pianta (2-3 gradi) a sinistra e a destra con una durata di 3-4 secondi, e applicala alla classe `.plant`. Assicurati che l'animazione si ripeta all'infinito e abbia una funzione di easing per un movimento naturale.

Scopri di più sulla [modalità agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## 🚀 Sfida: Aggiungere Riflessioni sul Vetro

Pronto a migliorare il tuo terrario con riflessi realistici sul vetro? Questa tecnica aggiungerà profondità e realismo al design.

Creerai riflessi sottili che simulano il modo in cui la luce si riflette sulle superfici di vetro. Questo approccio è simile a quello utilizzato dai pittori rinascimentali come Jan van Eyck per far sembrare il vetro dipinto tridimensionale. Ecco cosa stai cercando di ottenere:

![terrario finito](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.it.png)

**La tua sfida:**
- **Crea** forme ovali bianche o di colore chiaro per i riflessi sul vetro
- **Posizionale** strategicamente sul lato sinistro del barattolo
- **Applica** opacità e effetti di sfocatura appropriati per un riflesso realistico della luce
- **Usa** `border-radius` per creare forme organiche simili a bolle
- **Sperimenta** con gradienti o ombre per un realismo maggiore

## Quiz Post-Lettura

[Quiz post-lettura](https://ff-quizzes.netlify.app/web/quiz/18)

## Amplia le tue conoscenze CSS

Il CSS può sembrare complesso inizialmente, ma comprendere questi concetti di base fornisce una solida base per tecniche più avanzate.

**Le tue prossime aree di apprendimento CSS:**
- **Flexbox** - semplifica l'allineamento e la distribuzione degli elementi
- **CSS Grid** - offre strumenti potenti per creare layout complessi
- **Variabili CSS** - riducono la ripetizione e migliorano la manutenibilità
- **Design responsivo** - garantisce che i siti funzionino bene su diverse dimensioni dello schermo

### Risorse Interattive per l'Apprendimento

Metti in pratica questi concetti con questi giochi coinvolgenti e interattivi:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Impara Flexbox attraverso sfide divertenti
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Impara CSS Grid coltivando carote virtuali
- 🎯 [CSS Battle](https://cssbattle.dev/) - Metti alla prova le tue abilità CSS con sfide di programmazione

### Ulteriori Approfondimenti

Per una comprensione completa dei fondamenti del CSS, completa questo modulo di Microsoft Learn: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Compito

[Refactoring CSS](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.