# Progetto Terrario Parte 1: Introduzione all'HTML

![Introduzione all'HTML](/sketchnotes/webdev101-html.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/15?loc=it)

### Introduzione

HTML, o HyperText Markup Language, è lo "scheletro" del web. Se CSS "veste" il proprio HTML e JavaScript lo porta in vita, HTML è il corpo della propria applicazione web. Anche La sintassi dell'HTML riflette questa idea, poiché include i tag "head" (testa), "body" (corpo) e "footer" (piè di pagina).

In questa lezione si userà l'HTML per impaginare lo "scheletro" dell'interfaccia del terrario virtuale. Avrà un titolo e tre colonne: una destra e una sinistra dove vivono le piante trascinabili e un'area centrale che sarà il vero terrario dall'aspetto di un vaso di vetro. Alla fine di questa lezione, si sarà in grado di vedere le piante nelle colonne, ma l'interfaccia apparirà un po' strana; non deve preoccupare, nella prossima sezione si aggiungeranno stili CSS all'interfaccia per renderla migliore.

### Attività

Sul proprio computer, creare una cartella chiamata "terrarium" e al suo interno un file chiamato "index.html". Puoi farlo in Visual Studio Code dopo aver creato la cartella del terrario aprendo una nuova finestra di VS Code, facendo clic su "apri cartella" e accedendo alla nuova cartella. Fare clic sul piccolo pulsante "file" nel riquadro Explorer e creare il nuovo file:

![explorer in VS Code](../images/vs-code-index.png)

Oppure

Usare questi comandi sul proprio git bash:

* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` oppure `nano index.html`

> I file index.html indicano a un browser che è il file predefinito in una cartella; URL come `https://anysite.com/test` potrebbero essere creati utilizzando una struttura di cartelle che includa una cartella chiamata `test` con `index.html` al suo interno; `index.html` non deve essere visualizzato in un URL.

---

## I tag DocType e html

La prima riga di un file HTML è il suo doctype. È un po' sorprendente che sia necessario avere questa riga all'inizio del file, ma indica ai browser meno recenti che il browser deve eseguire il rendering della pagina in una modalità standard, seguendo le specifiche html correnti.

> Suggerimento: in VS Code, si può passare il mouse su un tag e ottenere informazioni sul suo utilizzo dalle guide di riferimento MDN.

La seconda riga dovrebbe essere il tag di apertura del tag `<html>`, seguito subito dal suo tag di chiusura `</html>`. Questi tag sono gli elementi radice dell'interfaccia.

### Attività

Aggiungere queste righe all'inizio del file `index.html` :

```HTML
<!DOCTYPE html>
<html></html>
```

✅ Ci sono alcune modalità differenti che possono essere determinate impostando DocType con una stringa di query: [Quirks Mode e Standards Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode). Queste modalità supportano browser molto vecchi che non vengono normalmente utilizzati al giorno d'oggi (Netscape Navigator 4 e Internet Explorer 5). Ci si può attenere alla dichiarazione doctype standard.

---

## La "testa" del documento (tag head)

L'area "head" del documento HTML include informazioni cruciali sulla propria pagina web, note anche come [metadati](https://developer.mozilla.org/docs/Web/HTML/Element/meta). In questo caso, si dice al server web a cui verrà inviata questa pagina per essere renderizzata, queste quattro cose:

- il titolo della pagina
- metadati della pagina tra cui:
	- l'"insieme di caratteri", che indica quale codifica dei caratteri viene utilizzata nella pagina
  - informazioni sul browser, incluso `x-ua-compatibile` che indica che il browser IE=edge è supportato
   - informazioni su come dovrebbe comportarsi il viewport quando viene caricato. L'impostazione della visualizzazione (viewport) in modo che abbia una scala iniziale di 1 controlla il livello di zoom quando la pagina viene caricata per la prima volta.

### Attività

Aggiungere un blocco "head" al proprio documento tra i tag di apertura e di chiusura `<html>`.

```html
<head>
	<title>Benvenuti al mio Terrario Virtuale</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ Cosa accadrebbe se il meta tag viewport viene impostato come questo: `<meta name="viewport" content="width=600">`? Ulteriori informazioni sul [viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

---

## Il corpo (`body`) del documento

### Etichette HTML

In HTML, si aggiungono tag al proprio file .html per creare elementi di una pagina web. Ogni tag di solito ha un tag di apertura e chiusura, come questo: `<p>ciao</p>` per indicare un paragrafo. Il corpo dell'interfaccia si crea aggiungendo una coppia di  tag `<body>` all'interno della coppia di tag `<html>`; il markup (marcatura) ora ha questo aspetto:

### Attività

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Benvenuti al mio Terrario Virtuale</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

Ora è possibile iniziare a costruire la propria pagina. Normalmente, si usano i tag `<div>` per creare elementi separati in una pagina. Verranno creati una serie di elementi `<div>` che conterranno immagini.

### Immagini

Un tag html che non necessita di un tag di chiusura è il tag `<img>`, perché ha un elemento `src` che contiene tutte le informazioni di cui la pagina ha bisogno per eseguire il rendering dell'elemento.

Creare una cartella nella propria app chiamata `images` e in quella aggiungere tutte le immagini nella [cartella del codice sorgente](../../solution/images); (ci sono 14 immagini di piante).

### Attività

Aggiungere quelle immagini di piante nelle due colonne tra i tag `<body></body>`:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> Nota: Span contro Div. I div sono considerati elementi "blocco" e gli span sono "in linea". Cosa succederebbe se si trasformassero questi div in span?

Con questo markup, le piante ora vengono visualizzate sullo schermo. Sembra piuttosto brutto, perché non hanno ancora lo stile utilizzando CSS e verrà fatto nella prossima lezione.

Ogni immagine ha un testo alternativo che apparirà anche se non è possibile vedere o renderizzare un'immagine. Questo è un attributo importante da includere per l'accessibilità. Ulteriori informazioni sull'accessibilità nelle lezioni future; per ora, occorre ricordare che l'attributo alt fornisce informazioni alternative per un'immagine se un utente per qualche motivo non può visualizzarla (a causa di una connessione lenta, un errore nell'attributo src o se l'utente utilizza un lettore di schermo).

✅ Si è notato che ogni immagine ha lo stesso tag alt? È una buona pratica? Se sì, perché? Se no, perché? Si può migliorare questo codice?

---

## Markup semantico

In generale, è preferibile utilizzare una "semantica" significativa quando si scrive HTML. Cosa significa? Significa che si utilizzano i tag HTML per rappresentare il tipo di dati o interazione per cui sono stati progettati. Ad esempio, il testo del titolo principale di una pagina dovrebbe utilizzare un tag `<h1>`.

Aggiungere la seguente riga proprio sotto il tag di apertura ` <body> `:

```html
<h1>My Terrarium</h1>
```

L'utilizzo di markup semantico tipo avere delle intestazioni come `<h1>` e il rendering di elenchi non ordinati come `<ul>` aiuta i lettori di schermo a navigare in una pagina. In generale, i pulsanti dovrebbero essere scritti come  `<button>` e gli elenchi come `<li>`. Sebbene sia _possibile_ utilizzare elementi con uno stile speciale  `<span>` con gestori di clic per simulare i pulsanti, è meglio per gli utenti disabili utilizzare le tecnologie per determinare dove risiede un pulsante in una pagina e interagire con esso, se l'elemento appare come un pulsante. Per questo motivo, si dovebbe cercare di utilizzare il più possibile il markup semantico.

✅ Si dia un'occhiata a un lettore di schermo e a [come interagisce con una pagina web](https://www.youtube.com/watch?v=OUDV1gqs9GA). Si riusce a capire perché avere un markup non semantico potrebbe frustrare l'utente?

## Il terrario

L'ultima parte di questa interfaccia prevede la creazione di markup che verrà disegnato per creare un terrario.

### Attività:

Aggiungere questo markup sopra l'ultimo tag `</div>`:

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

✅ Anche se questo markup è stato aggiunto allo schermo, non si assolutamente nulla di renderizzato. Perché?

---

## 🚀 Sfida

Ci sono alcuni "vecchi" selvaggi tag in HTML con cui è ancora divertente giocare, anche se non si dovrebero usare tag deprecati come [questi tag](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) nel proprio markup. Tuttavia, si può usare il vecchio tag `<marquee>` per far scorrere orizzontalmente il titolo h1? (se viene fatto, non dimenticarsi di rimuoverlo dopo)

## Quiz Post-Lezione

[Quiz post-lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/16?loc=it)

## Revisione e Auto Apprendimento

L'HTML è il sistema di blocchi costitutivi "collaudato e vero" che ha contribuito a trasformare il Web in quello che è oggi. Imparare un po' sulla sua storia studiando alcuni tag vecchi e nuovi. Si riusce a capire perché alcuni tag sono stati deprecati e altri aggiunti? Quali tag potrebbero essere introdotti in futuro?

Ulteriori informazioni sulla creazione di siti per il Web e i dispositivi mobili in [Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon).


## Compito

[Fare pratica con il proprio HTML: creare un modello di blog](assignment.it.md)
