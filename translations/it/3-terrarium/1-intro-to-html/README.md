<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-22T23:31:53+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "it"
}
-->
# Progetto Terrarium Parte 1: Introduzione a HTML

![Introduzione a HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.it.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, o HyperText Markup Language, è la base di ogni sito web che hai mai visitato. Pensa a HTML come allo scheletro che dà struttura alle pagine web – definisce dove va il contenuto, come è organizzato e cosa rappresenta ogni elemento. Mentre CSS "vestirà" il tuo HTML con colori e layout, e JavaScript lo animerà con interattività, HTML fornisce la struttura essenziale che rende tutto il resto possibile.

In questa lezione, creerai la struttura HTML per un'interfaccia di terrario virtuale. Questo progetto pratico ti insegnerà i concetti fondamentali di HTML mentre costruisci qualcosa di visivamente accattivante. Imparerai come organizzare il contenuto usando elementi semantici, lavorare con immagini e creare la base per un'applicazione web interattiva.

Alla fine di questa lezione, avrai una pagina HTML funzionante che mostra immagini di piante in colonne organizzate, pronta per essere stilizzata nella prossima lezione. Non preoccuparti se all'inizio sembra semplice – è esattamente ciò che HTML dovrebbe fare prima che CSS aggiunga il tocco visivo.

## Quiz Pre-Lezione

[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Guarda e Impara**: Dai un'occhiata a questo utile video introduttivo
> 
> [![Video Fondamenti di HTML](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Configurare il Progetto

Prima di immergerci nel codice HTML, creiamo un ambiente di lavoro adeguato per il tuo progetto terrario. Creare una struttura di file organizzata fin dall'inizio è un'abitudine cruciale che ti sarà utile durante il tuo percorso di sviluppo web.

### Compito: Crea la Struttura del Progetto

Creerai una cartella dedicata al tuo progetto terrario e aggiungerai il tuo primo file HTML. Ecco due approcci che puoi utilizzare:

**Opzione 1: Utilizzo di Visual Studio Code**
1. Apri Visual Studio Code
2. Clicca su "File" → "Apri Cartella" o usa `Ctrl+K, Ctrl+O` (Windows/Linux) o `Cmd+K, Cmd+O` (Mac)
3. Crea una nuova cartella chiamata `terrarium` e selezionala
4. Nel pannello Explorer, clicca sull'icona "Nuovo File"
5. Dai al file il nome `index.html`

![Esplora di VS Code che mostra la creazione di un nuovo file](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.it.png)

**Opzione 2: Utilizzo dei Comandi del Terminale**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Ecco cosa fanno questi comandi:**
- **Creano** una nuova directory chiamata `terrarium` per il tuo progetto
- **Navigano** nella directory terrarium
- **Creano** un file vuoto `index.html`
- **Aprono** il file in Visual Studio Code per la modifica

> 💡 **Suggerimento Pro**: Il nome del file `index.html` è speciale nello sviluppo web. Quando qualcuno visita un sito web, i browser cercano automaticamente `index.html` come pagina predefinita da visualizzare. Questo significa che un URL come `https://mysite.com/projects/` servirà automaticamente il file `index.html` dalla cartella `projects` senza bisogno di specificare il nome del file nell'URL.

## Comprendere la Struttura del Documento HTML

Ogni documento HTML segue una struttura specifica che i browser devono comprendere per visualizzarlo correttamente. Pensa a questa struttura come a una lettera formale – ha elementi richiesti in un ordine particolare che aiutano il destinatario (in questo caso, il browser) a elaborare correttamente il contenuto.

Iniziamo aggiungendo la base essenziale che ogni documento HTML necessita.

### La Dichiarazione DOCTYPE e l'Elemento Radice

Le prime due righe di qualsiasi file HTML servono come "introduzione" del documento al browser:

```html
<!DOCTYPE html>
<html></html>
```

**Cosa fa questo codice:**
- **Dichiara** il tipo di documento come HTML5 usando `<!DOCTYPE html>`
- **Crea** l'elemento radice `<html>` che conterrà tutto il contenuto della pagina
- **Stabilisce** gli standard web moderni per una corretta visualizzazione del browser
- **Garantisce** una visualizzazione coerente su diversi browser e dispositivi

> 💡 **Suggerimento VS Code**: Passa il mouse su qualsiasi tag HTML in VS Code per vedere informazioni utili dai MDN Web Docs, inclusi esempi di utilizzo e dettagli sulla compatibilità dei browser.

> 📚 **Per Saperne di Più**: La dichiarazione DOCTYPE impedisce ai browser di entrare in "quirks mode", che veniva utilizzata per supportare siti web molto vecchi. Lo sviluppo web moderno utilizza la semplice dichiarazione `<!DOCTYPE html>` per garantire un [rendering conforme agli standard](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

## Aggiungere Metadati Essenziali al Documento

La sezione `<head>` di un documento HTML contiene informazioni cruciali di cui i browser e i motori di ricerca hanno bisogno, ma che i visitatori non vedono direttamente sulla pagina. Pensa a questa sezione come alle "informazioni dietro le quinte" che aiutano la tua pagina web a funzionare correttamente e a essere visualizzata correttamente su diversi dispositivi e piattaforme.

Questi metadati dicono ai browser come visualizzare la tua pagina, quale codifica dei caratteri utilizzare e come gestire diverse dimensioni dello schermo – tutto essenziale per creare pagine web professionali e accessibili.

### Compito: Aggiungi la Sezione Head del Documento

Inserisci questa sezione `<head>` tra i tag di apertura e chiusura `<html>`:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Analisi di ciò che ogni elemento realizza:**
- **Imposta** il titolo della pagina che appare nelle schede del browser e nei risultati di ricerca
- **Specifica** la codifica dei caratteri UTF-8 per una corretta visualizzazione del testo in tutto il mondo
- **Garantisce** la compatibilità con le versioni moderne di Internet Explorer
- **Configura** il design responsivo impostando il viewport per adattarsi alla larghezza del dispositivo
- **Controlla** il livello di zoom iniziale per visualizzare il contenuto a dimensioni naturali

> 🤔 **Rifletti su Questo**: Cosa accadrebbe se impostassi un tag meta viewport come questo: `<meta name="viewport" content="width=600">`? Questo forzerebbe la pagina a essere sempre larga 600 pixel, compromettendo il design responsivo! Scopri di più sulla [configurazione corretta del viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Costruire il Corpo del Documento

L'elemento `<body>` contiene tutto il contenuto visibile della tua pagina web – tutto ciò che gli utenti vedranno e con cui interagiranno. Mentre la sezione `<head>` forniva istruzioni al browser, la sezione `<body>` contiene il contenuto effettivo: testo, immagini, pulsanti e altri elementi che creano la tua interfaccia utente.

Aggiungiamo la struttura del corpo e comprendiamo come i tag HTML lavorano insieme per creare contenuti significativi.

### Comprendere la Struttura dei Tag HTML

HTML utilizza tag accoppiati per definire gli elementi. La maggior parte dei tag ha un tag di apertura come `<p>` e un tag di chiusura come `</p>`, con il contenuto nel mezzo: `<p>Ciao, mondo!</p>`. Questo crea un elemento paragrafo contenente il testo "Ciao, mondo!".

### Compito: Aggiungi l'Elemento Body

Aggiorna il tuo file HTML per includere l'elemento `<body>`:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

**Ecco cosa fornisce questa struttura completa:**
- **Stabilisce** il framework di base del documento HTML5
- **Include** metadati essenziali per una corretta visualizzazione del browser
- **Crea** un corpo vuoto pronto per il tuo contenuto visibile
- **Segue** le migliori pratiche dello sviluppo web moderno

Ora sei pronto per aggiungere gli elementi visibili del tuo terrario. Useremo elementi `<div>` come contenitori per organizzare diverse sezioni di contenuto e tag `<img>` per visualizzare le immagini delle piante.

### Lavorare con Immagini e Contenitori di Layout

Le immagini sono speciali in HTML perché utilizzano tag "auto-chiudenti". A differenza di elementi come `<p></p>` che avvolgono il contenuto, il tag `<img>` contiene tutte le informazioni necessarie all'interno del tag stesso utilizzando attributi come `src` per il percorso del file immagine e `alt` per l'accessibilità.

Prima di aggiungere immagini al tuo HTML, dovrai organizzare correttamente i file del progetto creando una cartella immagini e aggiungendo le grafiche delle piante.

**Per prima cosa, configura le tue immagini:**
1. Crea una cartella chiamata `images` all'interno della cartella del progetto terrarium
2. Scarica le immagini delle piante dalla [cartella delle soluzioni](../../../../3-terrarium/solution/images) (14 immagini di piante in totale)
3. Copia tutte le immagini delle piante nella tua nuova cartella `images`

### Compito: Crea il Layout di Visualizzazione delle Piante

Ora aggiungi le immagini delle piante organizzate in due colonne tra i tag `<body></body>`:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.it.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.it.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.it.png" />
		</div>
	</div>
</div>
```

**Passo dopo passo, ecco cosa succede in questo codice:**
- **Crea** un contenitore principale della pagina con `id="page"` per contenere tutto il contenuto
- **Stabilisce** due contenitori di colonne: `left-container` e `right-container`
- **Organizza** 7 piante nella colonna sinistra e 7 piante nella colonna destra
- **Avvolge** ogni immagine di pianta in un div `plant-holder` per il posizionamento individuale
- **Applica** nomi di classi coerenti per la stilizzazione con CSS nella prossima lezione
- **Assegna** ID univoci a ciascuna immagine di pianta per l'interazione con JavaScript in seguito
- **Include** percorsi di file corretti che puntano alla cartella delle immagini

> 🤔 **Pensa a Questo**: Nota che tutte le immagini attualmente hanno lo stesso testo alternativo "pianta". Questo non è ideale per l'accessibilità. Gli utenti di lettori di schermo sentirebbero "pianta" ripetuto 14 volte senza sapere quale pianta specifica mostra ogni immagine. Riesci a pensare a un testo alternativo migliore e più descrittivo per ogni immagine?

> 📝 **Tipi di Elementi HTML**: Gli elementi `<div>` sono "a livello di blocco" e occupano tutta la larghezza, mentre gli elementi `<span>` sono "inline" e occupano solo la larghezza necessaria. Cosa pensi che accadrebbe se cambiassi tutti questi tag `<div>` in tag `<span>`?

Con questo markup aggiunto, le piante appariranno sullo schermo, anche se non sembreranno ancora rifinite – è per questo che serve CSS nella prossima lezione! Per ora, hai una solida base HTML che organizza correttamente il tuo contenuto e segue le migliori pratiche di accessibilità.

## Utilizzare HTML Semantico per l'Accessibilità

HTML semantico significa scegliere gli elementi HTML in base al loro significato e scopo, non solo al loro aspetto. Quando utilizzi un markup semantico, stai comunicando la struttura e il significato del tuo contenuto ai browser, ai motori di ricerca e alle tecnologie assistive come i lettori di schermo.

Questo approccio rende i tuoi siti web più accessibili agli utenti con disabilità e aiuta i motori di ricerca a comprendere meglio il tuo contenuto. È un principio fondamentale dello sviluppo web moderno che crea esperienze migliori per tutti.

### Aggiungere un Titolo Semantico alla Pagina

Aggiungiamo un titolo adeguato alla tua pagina del terrario. Inserisci questa riga subito dopo il tag di apertura `<body>`:

```html
<h1>My Terrarium</h1>
```

**Perché il markup semantico è importante:**
- **Aiuta** i lettori di schermo a navigare e comprendere la struttura della pagina
- **Migliora** l'ottimizzazione per i motori di ricerca (SEO) chiarendo la gerarchia del contenuto
- **Aumenta** l'accessibilità per gli utenti con disabilità visive o differenze cognitive
- **Crea** esperienze utente migliori su tutti i dispositivi e piattaforme
- **Segue** gli standard web e le migliori pratiche per uno sviluppo professionale

**Esempi di scelte semantiche vs. non semantiche:**

| Scopo | ✅ Scelta Semantica | ❌ Scelta Non Semantica |
|-------|---------------------|------------------------|
| Titolo principale | `<h1>Titolo</h1>` | `<div class="big-text">Titolo</div>` |
| Navigazione | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Pulsante | `<button>Clicca qui</button>` | `<span onclick="...">Clicca qui</span>` |
| Contenuto articolo | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Guarda in Azione**: Guarda [come i lettori di schermo interagiscono con le pagine web](https://www.youtube.com/watch?v=OUDV1gqs9GA) per capire perché il markup semantico è cruciale per l'accessibilità. Nota come una struttura HTML corretta aiuti gli utenti a navigare in modo efficiente.

## Creare il Contenitore del Terrario

Ora aggiungiamo la struttura HTML per il terrario stesso – il contenitore di vetro dove le piante saranno posizionate. Questa sezione dimostra un concetto importante: HTML fornisce la struttura, ma senza la stilizzazione CSS, questi elementi non saranno ancora visibili.

Il markup del terrario utilizza nomi di classi descrittivi che renderanno la stilizzazione con CSS intuitiva e facile da gestire nella prossima lezione.

### Compito: Aggiungi la Struttura del Terrario

Inserisci questo markup sopra l'ultimo tag `</div>` (prima del tag di chiusura del contenitore della pagina):

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

**Comprendere questa struttura del terrario:**
- **Crea** un contenitore principale del terrario con un ID unico per la stilizzazione
- **Definisce** elementi separati per ciascun componente visivo (parte superiore, pareti, terra, fondo)
- **Include** elementi nidificati per gli effetti di riflesso del vetro (elementi lucidi)
- **Utilizza** nomi di classi descrittivi che indicano chiaramente lo scopo di ciascun elemento
- **Prepara** la struttura per la stilizzazione CSS che creerà l'aspetto del terrario di vetro

> 🤔 **Nota Qualcosa?**: Anche se hai aggiunto questo markup, non vedi nulla di nuovo sulla pagina! Questo illustra perfettamente come HTML fornisca la struttura mentre CSS fornisce l'aspetto. Questi tag `<div>` esistono ma non hanno ancora una stilizzazione visiva – arriverà nella prossima lezione!

---

## Sfida Agente GitHub Copilot

Usa la modalità Agente per completare la seguente sfida:

**Descrizione:** Crea una struttura HTML semantica per una sezione di guida alla cura delle piante che potrebbe essere aggiunta al progetto terrario.
**Prompt:** Crea una sezione HTML semantica che includa un'intestazione principale "Guida alla cura delle piante", tre sottosezioni con le intestazioni "Irrigazione", "Requisiti di luce" e "Cura del terreno", ciascuna contenente un paragrafo di informazioni sulla cura delle piante. Usa i tag HTML semantici appropriati come `<section>`, `<h2>`, `<h3>` e `<p>` per strutturare il contenuto correttamente.

Scopri di più su [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## Sfida sulla storia dell'HTML

**Imparare l'evoluzione del web**

HTML si è evoluto significativamente da quando Tim Berners-Lee ha creato il primo browser web al CERN nel 1990. Alcuni tag più vecchi, come `<marquee>`, sono ora deprecati perché non si adattano bene agli standard moderni di accessibilità e ai principi di design responsivo.

**Prova questo esperimento:**
1. Avvolgi temporaneamente il tuo titolo `<h1>` in un tag `<marquee>`: `<marquee><h1>Il mio terrario</h1></marquee>`
2. Apri la tua pagina in un browser e osserva l'effetto di scorrimento
3. Rifletti sul motivo per cui questo tag è stato deprecato (suggerimento: pensa all'esperienza utente e all'accessibilità)
4. Rimuovi il tag `<marquee>` e torna a un markup semantico

**Domande di riflessione:**
- In che modo un titolo scorrevole potrebbe influire sugli utenti con disabilità visive o sensibilità al movimento?
- Quali tecniche moderne di CSS potrebbero ottenere effetti visivi simili in modo più accessibile?
- Perché è importante utilizzare gli standard web attuali invece di elementi deprecati?

Scopri di più sugli [elementi HTML obsoleti e deprecati](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) per capire come gli standard web si evolvono per migliorare l'esperienza utente.


## Quiz post-lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/16)

## Revisione e studio autonomo

**Approfondisci la tua conoscenza dell'HTML**

HTML è stato il fondamento del web per oltre 30 anni, evolvendosi da un semplice linguaggio di markup per documenti a una piattaforma sofisticata per la creazione di applicazioni interattive. Comprendere questa evoluzione ti aiuta ad apprezzare gli standard web moderni e a prendere decisioni di sviluppo migliori.

**Percorsi di apprendimento consigliati:**

1. **Storia ed evoluzione dell'HTML**
   - Ricerca la timeline da HTML 1.0 a HTML5
   - Esplora perché alcuni tag sono stati deprecati (accessibilità, compatibilità con dispositivi mobili, manutenibilità)
   - Indaga sulle nuove funzionalità HTML e sulle proposte emergenti

2. **Approfondimento sull'HTML semantico**
   - Studia l'elenco completo degli [elementi semantici di HTML5](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Esercitati a identificare quando utilizzare `<article>`, `<section>`, `<aside>` e `<main>`
   - Scopri gli attributi ARIA per migliorare l'accessibilità

3. **Sviluppo web moderno**
   - Esplora [la creazione di siti web responsivi](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) su Microsoft Learn
   - Comprendi come HTML si integra con CSS e JavaScript
   - Scopri le migliori pratiche per le prestazioni web e la SEO

**Domande di riflessione:**
- Quali tag HTML deprecati hai scoperto e perché sono stati rimossi?
- Quali nuove funzionalità HTML sono proposte per le versioni future?
- In che modo l'HTML semantico contribuisce all'accessibilità web e alla SEO?


## Compito

[Pratica il tuo HTML: Crea un mockup di blog](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.