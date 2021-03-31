# Progetto di Estensione del Browser Parte 1: Tutto sui Browser

![schizzo di un browser](/sketchnotes/browser.jpg)
> Sketchnote di [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/23?loc=it)

### Introduzione

Le estensioni del browser aggiungono funzionalità a un browser. Ma prima di crearne una, si dovrebbe imparare qualcosa su come i browser svolgono il loro lavoro.

### Informazioni sul browser

In questa serie di lezioni si imparerà come creare un'estensione per il browser che funzionerà con i browser Chrome, Firefox ed Edge. In questa parte si scoprirà come funzionano i browser e come impacchettare gli elementi dell'estensione del browser.

Ma cos'è esattamente un browser? È un'applicazione software che consente a un utente finale di accedere ai contenuti da un server e visualizzarli su pagine web.

✅ Un po' di storia: il primo browser si chiamava "WorldWideWeb" ed fu creato da Sir Timothy Berners-Lee nel 1990.

![primi browser](../images/earlybrowsers.jpg)
> Alcuni dei primi browser, tramite [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

Quando un utente si connette a Internet utilizzando un indirizzo URL (Uniform Resource Locator), solitamente utilizzando Hypertext Transfer Protocol tramite un indirizzo `http` o `https` , il browser comunica con un server web e recupera una pagina web.

A questo punto, il motore di rendering del browser la visualizza sul dispositivo dell'utente, che potrebbe essere un telefono cellulare, un desktop o un laptop.

I browser hanno anche la capacità di memorizzare nella cache il contenuto in modo che non debba essere recuperato dal server ogni volta. Possono registrare la cronologia dell'attività di navigazione di un utente, memorizzare i "cookie", che sono piccoli frammenti di dati che contengono informazioni utilizzate per memorizzare l'attività di un utente e altro ancora.

Una cosa davvero importante da ricordare sui browser è che non sono tutti uguali! Ogni browser ha i suoi punti di forza e di debolezza e uno sviluppatore web professionista deve capire come far funzionare bene le pagine web su più browser. Ciò include la gestione di piccoli schermi come quelli di un telefono cellulare, così come la gestione di un utente offline.

Un sito web davvero utile che probabilmente si dovrebbe aggiungere ai preferiti da usare in qualunque browser preferisci è [caniuse.com](https://www.caniuse.com). Quando si creano pagine web, è molto utile utilizzare gli elenchi di tecnologie supportate forniti da caniuse in modo da poter supportare al meglio i propri utenti.

✅ Come si può sapere quali browser sono più popolari con la base di utenti del proprio sito web? Controllando le analitiche: si possono installare vari pacchetti di analisi come parte del proprio processo di sviluppo web e che evidenzieranno quali browser sono più utilizzati tra i vari browser popolari.

## Estensioni del browser

Perché si vorrebbe creare un'estensione per il browser? È una cosa utile da collegare al  browser quando si ha bisogno di un rapido accesso ad attività che si tende a ripetere. Ad esempio, se ci si ritrova a dover controllare i colori nelle varie pagine Web con cui si interagisce, si potrebbe installare un'estensione del browser per la selezione dei colori. Se si hanno problemi a ricordare le password, si potrebbe utilizzare un'estensione del browser per la gestione delle password.

Anche le estensioni del browser sono divertenti da sviluppare. Tendono a gestire un numero finito di compiti che svolgono bene.

✅ Quali sono le proprie estensioni browser preferite? Quali compiti svolgono?

### Installazione di estensioni

Prima di iniziare a creare, si dia un'occhiata al processo di creazione e distribuzione di un'estensione del browser. Mentre ogni browser varia leggermente nel modo in cui gestiscono questa attività, il processo è simile su Chrome e Firefox rispetto a questo esempio su Edge:

![videata del browser Edge che mostra la pagina delle estensioni edge:// aperte e il menu delle impostazioni aperto](../images/install-on-edge.png)

In sostanza, il processo sarà:

- creare la propria estensione usando `npm build`
- navigare nel browser fino al menu Estensioni utilizzando il pulsante "Impostazioni e altro ancora" (l'icona `...` ) in alto a destra
- abilitare la "Modalità sviluppatore" (switch in basso a sinistra), quindi se si tratta di una nuova installazione scegliere `Carica decompresssa` per caricare una nuova estensione dalla sua cartella di compilazione (nel nostro caso è `/dist`)
- oppure, fare clic su `Aggiorna` se si sta ricaricando l'estensione già installata

✅ Queste istruzioni riguardano le estensioni create dallo sviluppatore; per installare le estensioni che sono state rilasciate nello store di estensioni del browser associato a ciascun browser, è necessario accedere a tali [store](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) e installare l'estensione di propria scelta.

### Si comincia

Verrè costruita un'estensione del browser che mostra l'impronta di carbonio della propria regione,  mostrando l'utilizzo e la fonte di energia. L'estensione avrà un form che raccoglie una chiave API in modo che ai possa accedere all'API di CO2 Signal.

**Occorrente:**

- [una chiave API](https://www.co2signal.com/); inserire la propria email nella casella in questa pagina e se ne riceverà una
- il [codice della propria regione](http://api.electricitymap.org/v3/zones) corrispondente alla [Electricity Map](https://www.electricitymap.org/map) (a Boston, ad esempio, si utilizza "US-NEISO").
- il [codice di partenza](../../start). Scaricare la cartella `start`; si completerà il codice in questa cartella.
- [NPM](https://www.npmjs.com) - NPM è uno strumento di gestione dei pacchetti; si installa localmente e i pacchetti elencati nel file `package.json` verranno installati per essere utilizzati dalla propria risorsa web

✅ Ulteriori informazioni sulla gestione dei pacchetti in questo [eccellente modulo di apprendimento](https://docs.microsoft.com/it-it/learn/modules/create-nodejs-project-dependencies/)

Ci si prenda un minuto per esaminare la base di codice:

```
dist
 - | manifest.json (valori predefiniti impostati qui)
 - | index.html (markup e front-end HTML qui)
 - | background.js (background JS qui)
 - | main.js (compilato JS)

 src
 - | index.js (il proprio codice JS va qui)
```

✅ Una volta che si ha a portata di mano la chiave API e il codice regionale, andranno memorizzati da qualche parte in una nota per un utilizzo futuro.

### Creare l'HTML per l'estensione

Questa estensione ha due viste. Una per raccogliere la chiave API e il codice regionale:

![videata dell'estensione completata aperta in un browser, che mostra un form con input per il nome della regione e la chiave API.](../images/1.png)

e la seconda per visualizzare l'utilizzo di carbonio della regione:

![videata dell'estensione completata che mostra i valori per l'utilizzo di carbonio e la percentuale di combustibili fossili per la regione USA-NEISO.](../images/2.png)

Si inizia costruendo l'HTML per il form e applicando uno stile con CSS.

Nella cartella `/dist` si creerà un form e un'area dei risultati. Nel file `index.html` , popolare l'area del form contraddistinta da "<!-- form area -->:

```HTML
<form class="form-data" autocomplete="on">
	<div>
		<h2>Nuovo? Aggiungi le tue informazioni</h2>
	</div>
	<div>
		<label for="region">Nome Regione</label>
		<input type="text" id="region" required class="region-name" />
	</div>
	<div>
		<label for="api">La tua chiave API da tmrow</label>
		<input type="text" id="api" required class="api-key" />
	</div>
	<button class="search-btn">Invia</button>
</form>	
```
Questo è il form in cui le proprie informazioni recuperate verranno inserite e salvate nella memoria locale del browser (local storage)

Successivamente, creare l'area dei risultati; sotto il tag di chiusura del form, dopo '<!-- result area --> aggiungere alcuni div:

```HTML
<div class="result">
	<div class="loading">caricamento...</div>
	<div class="errors"></div>
	<div class="data"></div>
	<div class="result-container">
		<p><strong>Regione: </strong><span class="my-region"></span></p>
		<p><strong>Utilizzo Carbonio: </strong><span class="carbon-usage"></span></p>
		<p><strong>Percentuale di Combustibile Fossile: </strong><span class="fossil-fuel"></span></p>
	</div>
	<button class="clear-btn">Cambia regione</button>
</div>
```
A questo punto, si può provare una compilazione. Assicurarsi di installare le dipendenze del pacchetto di questa estensione:

```
npm install
```

Questo comando utilizzerà npm, il Node Package Manager, per installare webpack per il processo di compilazione dell'estensione. Webpack è un *bundler* che gestisce la compilazione del codice (un *bundler* è uno strumento che prande pezzi di codice javascript e dipendenze e li raggruppa in un unico file che verrà in genere usato nel browser - n.d.t.). Si può vedere l'output di questo processo guardando in `/dist/main.js -` si vede che il codice è stato raggruppato.

Per ora, l'estensione dovrebbe essere compilata e, se la si distribuisce in Edge come estensione, si vedrebbe un form ben disposto.

Congratulazioni, si sono compiuti i primi passi verso la creazione di un'estensione per il browser. Nelle lezioni successive verrà resa più funzionale e utile.

---

## 🚀 Sfida

Si dia un'occhiata alle estensioni del browser in uno store e se ne installi una nel proprio browser. Si possono esaminare i suoi file in modi interessanti. Cosa si è scoperto?

## Quiz Post-Lezione

[Quiz post-lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/24?loc=it)

## Revisione e Auto Apprendimento

In questa lezione si è imparato qualcosa sulla storia del browser web; si colga l'occasione per informarsi su come gli inventori del World Wide Web ne immaginavano l'uso leggendo di più sulla sua storia. Alcuni siti utili includono:

[La storia dei browser web](https://www.mozilla.org/it/firefox/browsers/browser-history/)

[Storia del web (in inglese)](https://webfoundation.org/about/vision/history-of-the-web/)

[Un'intervista con Tim Berners-Lee (in inglese)](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## Compito

[Restyling dell'estensione](assignment.it.md)

