# Progetto Terrario Parte 2: Introduzione a CSS

![Introduzione a CSS](/sketchnotes/webdev101-css.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/17?loc=it)

### Introduzione

CSS, o Cascading Style Sheets (Fogli di Stile a Cascata), risolve un problema importante dello sviluppo web: come rendere piacevole il proprio sito web. Lo stile delle proprie app le rende più utilizzabili e più belle; è anche possibile utilizzare CSS per creare Responsive Web Design (RWD), consentendo alle proprie app di avere un bell'aspetto indipendentemente dalle dimensioni dello schermo su cui vengono visualizzate. CSS non serve solo a rendere bella la propria app; le sue specifiche includono animazioni e trasformazioni che possono consentire interazioni sofisticate per le proprie app. Il CSS Working Group aiuta a mantenere le attuali specifiche CSS; è possibile seguire il loro lavoro sul [sito del World Wide Web Consortium](https://www.w3.org/Style/CSS/members).

> Nota, CSS è un linguaggio che si evolve, come tutto sul web, e non tutti i browser supportano parti più recenti delle specifiche. Controllare sempre le proprie implementazioni consultando [CanIUse.com](https://caniuse.com).

In questa lezione, si aggiungeranno stili al terrario online e si imparerà di più su diversi concetti CSS: la cascata, l'ereditarietà e l'uso di selettori, posizionamento e utilizzo dei CSS per disporre gli elementi. Nel processo si disporrà il posizionamento del terrario e si creerà il terrario stesso.

### Pre-requisiti

L'HTML per il proprio terrario dovrebbe essere a disposizione, costruito e pronto per applicarvi uno stile.

### Attività

Nella cartella terrarium, creare un nuovo file chiamato `style.css`. Importare quel file nella sezione `<head>`:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## La Cascata

I Fogli di Stile a Cascata (CSS) incorporano l'idea che gli stili "cascano" in modo tale che l'applicazione di uno stile sia guidata dalla sua priorità. Gli stili impostati dall'autore di un sito Web hanno la priorità su quelli impostati da un browser. Gli stili impostati "in linea" hanno la priorità su quelli impostati in un foglio di stile esterno.

### Attività

Aggiungere lo stile in linea "color: red" al tag `<h1>`:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Quindi, aggiungere il seguente codice al proprio file `style.css`:

```CSS
h1 {
 color: blue;
}
```

✅ Quale colore viene visualizzato nella propria app web? Perché? Si riesce a trovare un modo per ignorare gli stili? Quando si vorrebbe farlo o perché no?

---

## Ereditarietà

Gli stili vengono ereditati da uno stile antenato a uno discendente, in modo che gli elementi nidificati ereditino gli stili dei loro genitori.

### Attività

Impostare il carattere nell'elemento body su un dato font e controllare per vedere il carattere di un elemento nidificato:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Aprire la console del browser nella scheda "Elementi" e osservare il font di H1. Il suo tipo di font viene ereditato dall'elemento body, come dichiarato all'interno del browser:

![font ereditato](../images/1.png)

✅ È possibile fare in modo che uno stile annidato erediti una proprietà diversa?

---

## Selettori CSS

### Tag

Finora, il file `style.css` ha solo pochi tag ai quali si è applicato uno stile e l'app sembra piuttosto strana:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Questo modo di modellare un tag dà il controllo su elementi unici, ma si devono controllare gli stili di molte piante nel proprio terrario. Per farlo, si devono sfruttare i selettori CSS.

### ID

Viene aggiunto un po' di stile per la disposizione dei contenitori sinistro e destro. Poiché esiste un solo contenitore sinistro e un solo contenitore destro, ad essi vengono forniti degli ID nel markup. Per applicare lo stile, usare `#`:

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Qui, i contenitori sono stati posizionati con posizionamento assoluto all'estrema sinistra e destra dello schermo e si sono utilizzate le percentuali per la loro larghezza in modo che possano ridimensionarsi per piccoli schermi di dispositivi mobili.

✅ Questo codice è abbastanza ripetuto, quindi non "DRY" (Don't Repeat Yourself - Non ripetere se stessi); si può trovare un modo migliore per applicare uno stile a questi ID, magari con un ID e una classe? Si dovrebbe cambiare il markup e rifattorizzare il CSS:

```html
<div id="left-container" class="container"></div>
```

### Classi

Nell'esempio sopra, è stato applicato uno stile a due elementi unici sullo schermo. Se si vuole applicare gli stili a molti elementi sullo schermo, si possono  usare le classi CSS. Si fa questo per disporre le piante nei contenitori sinistro e destro.

Si noti che ogni pianta nel markup HTML ha una combinazione di id e classi. Gli id qui sono usati da JavaScript che verrà aggiunto in seguito per manipolare il posizionamento della pianta nel terrario. Le classi, tuttavia, danno a tutte le piante un determinato stile.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Aggiungere il seguente codice al proprio file `style.css` :

```css
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Da notare in questo frammento di codice è la combinazione di posizionamento relativo e assoluto, che verrà trattata nella prossima sezione. Si dia un'occhiata al modo in cui le altezze sono gestite in percentuale:

Si imposta l'altezza del porta piante al 13%, un buon numero per fare in modo che tutte le piante siano esposte in ogni contenitore verticale senza necessità di scorrimento.

Si imposta il supporto della pianta in modo che si sposti a sinistra per consentire alle piante di essere più centrate all'interno del loro contenitore. Le immagini hanno una grande quantità di sfondo trasparente in modo da renderle più trascinabili, quindi devono essere spinte a sinistra per adattarsi meglio allo schermo.

Quindi, alla pianta stessa viene assegnata una larghezza massima (max-width) del 150%. Ciò gli consente di ridimensionarsi man mano che il browser si riduce. Provare a ridimensionare il proprio browser; le piante rimangono nei loro contenitori ma si riducono per adattarsi.

Da notare anche l'uso di z-index, che controlla la profondità relativa di un elemento (in modo che le piante si posizionano sopra il contenitore e sembrano posizionarsi all'interno del terrario).

✅ Perché serve un selettore CSS sia per il supporto che per la pianta stessa?

## Posizionamento CSS

Mescolare le proprietà della posizione - ci sono posizioni statiche (static), relative (relative), fisse (fixed), assolute (absolute) e permanenti (sticky) - può essere un po' complicato, ma se fatto correttamente fornisce un buon controllo sugli elementi delle proprie pagine.

Gli elementi posizionati in modo assoluto sono posizionati rispetto alla posizione dei loro antenati più prossimi e, se non ce ne sono, vengono posizionati in base al corpo (body) del documento.

Gli elementi posizionati in modo relativo sono posizionati in base alle direttive CSS per regolare il loro posizionamento rispetto alla loro posizione iniziale.

In questo esempio, il porta piante `plant-holder` è un elemento in posizione relativa che viene posizionato all'interno di un contenitore in posizione assoluta. Il comportamento risultante è che i contenitori della barra laterale sono bloccati a sinistra e a destra, e il porta piante è annidato, regolando se stesso all'interno delle barre laterali, dando spazio alle piante da posizionare in una fila verticale.

> La classe `plant` stessa ha anche un posizionamento assoluto, necessario per renderla trascinabile, come si scoprirà nella prossima lezione.

✅ Sperimentare cambiando i tipi di posizionamento dei contenitori laterali e del porta pianta. Che cosa accade?

## Disposizione CSS

Ora si utilizzerà ciò che si è appreso per costruire il terrario stesso, il tutto usando CSS!

Innanzitutto, si applica lo stile al div figlio `.terrarium` in modo che sia un rettangolo con bordi arrotondati usando CSS:

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
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
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

Notare l'uso delle percentuali qui. Se si riduce la finestra del browser, si puòi vedere come si ridimensionano anche gli angoli del barattolo. Notare anche le percentuali di larghezza e altezza per gli elementi jar e come ogni elemento sia posizionato in modo assoluto al centro, bloccato nella parte inferiore della finestra visualizzata.

✅ Provare a cambiare i colori e l'opacità del barattolo rispetto a quelli della terra. Che cosa accade? Perché?

---

## 🚀 Sfida

Aggiungere una lucentezza a forma di bolla nell'area inferiore sinistra del barattolo per farlo sembrare più simile al vetro. Si parte applicando lo stile `.jar-glossy-long` e  `.jar-glossy-short` per ottenere la senzazione di una lucentezza riflessa. Ecco come dovrebbe apparire:

![terrario finito](../images/terrarium-final.png)

Per completare il quiz post-lezione, seguire questo modulo di apprendimento: [Applicare uno stile al codice HTML con CSS](https://docs.microsoft.com/it-it/learn/modules/build-simple-website/4-css-basics?WT.mc_id=academic-13441-cxa)

## Quiz Post-Lezione

[Quiz post-lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/18?loc=it)

## Revisione e Auto Apprendimento

CSS sembra apparentemente semplice, ma ci sono molte sfide quando si cerca di modellare un'app perfettamente per tutti i browser e tutte le dimensioni dello schermo. CSS-Grid e Flexbox sono strumenti che sono stati sviluppati per rendere il lavoro un po' più strutturato e più affidabile. Scoprire questi strumenti giocando a [Flexbox Froggy](https://flexboxfroggy.com/) e [Grid Garden](https://codepip.com/games/grid-garden/).

## Compito

[Refattorizzare CSS](assignment.it.md)
