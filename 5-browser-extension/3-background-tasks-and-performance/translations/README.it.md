# Progetto di Estensione del Browser Parte 3: Conoscere le attività in background e le prestazioni

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/27?loc=it)

### Introduzione

Nelle ultime due lezioni di questo form, si è imparato a creare un form e un'area di visualizzazione per i dati recuperati da un'API. È un modo molto standard per creare presenze web. Si è anche appreso come gestire il recupero dei dati in modo asincrono. L'estensione del browser è quasi completa.

Restano da gestire alcune attività in background, incluso l'aggiornamento del colore dell'icona dell'estensione, quindi questo è un ottimo momento per parlare di come il browser gestisce questo tipo di attività. Si pensi a queste attività del browser nel contesto delle prestazioni delle proprie risorse web mentre vengono create.

## Nozioni di base sulle prestazioni web

> "Le prestazioni del sito web riguardano due cose: la velocità di caricamento della pagina e la velocità di esecuzione del codice su di essa." - [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

L'argomento su come rendere i propri siti web incredibilmente veloci su tutti i tipi di dispositivi, per tutti i tipi di utenti, in tutti i tipi di situazioni, non sorprende sia vasto. Di seguito sono riportati alcuni punti da tenere a mente quando si crea un progetto web standard o un'estensione del browser.

La prima cosa da fare per assicurarsi che il proprio sito funzioni in modo efficiente è raccogliere dati sulle sue prestazioni. Il primo posto per farlo è negli strumenti di sviluppo del proprio browser web. In Edge, selezionare il pulsante "Impostazioni e altro ancora" (l'icona dei tre punti in alto a destra nel browser), quindi accedere a Altri strumenti > Strumenti di sviluppo e aprire la scheda Prestazioni. Si può anche utilizzare la scorciatoia da tastiera `Ctrl` + `Maiusc` + `I` su Windows o `Opzione` + `Comando` + `I` su Mac per aprire gli strumenti di sviluppo.

La scheda Prestazioni contiene uno strumento di profilazione. Aprire un sito web (provare, ad esempio, https://www.microsoft.com) e fare clic sul pulsante "Registra", quindi aggiornare il sito. Interrompendo la registrazione in qualsiasi momento si sarà in grado di vedere le routine generate per "Esecuzione script",  "Rendering" e "Disegno" per il sito:

![Edge profiler](../images/profiler.png)

✅ Visitare la [documentazione Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance) nel pannello Prestazioni in Edge

> Suggerimento: per ottenere una lettura fedele del tempo di avvio del proprio sito web, svuotare la cache del browser

Selezionare elementi della sequenza temporale del profilo per ingrandire gli eventi che si verificano durante il caricamento della pagina.

Ottenere un'istantanea delle prestazioni della propria pagina selezionando una parte della sequenza temporale del profilo e guardando il riquadro di riepilogo:

![Snapshot di Edge Profiler](../images/snapshot.png)

Controllare il riquadro "Registro Eventi" per vedere se un evento ha richiesto più di 15 ms:

![Registro Eventi (Event Log)](../images/log.png)

✅ Conoscere il propro profilatore! Aprire gli strumenti di sviluppo su questo sito e verificare se ci sono colli di bottiglia. Qual è la risorsa a caricamento più lento? La più veloce?

## Controlli di profilazione

In generale ci sono alcune "aree problematiche" che ogni sviluppatore web dovrebbe tenere d'occhio durante la costruzione di un sito, in modo da evitare brutte sorprese quando è il momento di distribuire in produzione.

**Dimensioni delle risorse**: negli ultimi anni il Web è diventato "più pesante" e quindi più lento. Parte di questo peso ha a che fare con l'uso delle immagini.

✅ Cercare in [Internet Archive](https://httparchive.org/reports/page-weight) una visualizzazione storica del peso della pagina e altro ancora.

Una buona pratica è garantire che le proprie immagini siano ottimizzate, distribuite con le dimensioni e la risoluzione giuste per i propri utenti.

**Attraversamenti DOM**: il browser deve costruire il suo Document Object Model in base al codice che si scrive, quindi è nell'interesse di una buona prestazione della pagina mantenere i propri tag minimi, usando e disegnando solo ciò di cui la pagina ha bisogno. A questo punto si potrebbe ottimizzare il CSS in eccesso associato a una pagina; gli stili che devono essere utilizzati solo su una pagina non devono essere inclusi nel foglio di stile principale, ad esempio.

**JavaScript**: ogni sviluppatore JavaScript dovrebbe controllare che gli script che bloccano il rendering siano caricati prima che il resto del DOM possa essere attraversato e visualizzato nel browser. Si consideri l'idea di utilizzare `defer` con i propri script inline (come è stato fatto nel modulo Terrario).

✅ Provare alcuni siti su un [sito web che verifica la velocità](https://www.webpagetest.org/) dei siti per ulteriori informazioni sui controlli comuni eseguiti per determinare le prestazioni del sito.

Ora che si ha un'idea di come il browser esegue il rendering delle risorse che gli vengono inviate, si darà un'occhiata alle ultime cose da fare per completare la propria estensione:

### Creare una funzione per calcolare il colore

Lavorando in `/src/index.js`, aggiungere una funzione chiamata `calcolateColor()` dopo la serie di variabili `const` impostate per ottenere l'accesso a elementi del DOM:

```JavaScript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

Cosa sta succedendo qui? Si passa un valore (l'intensità di carbonio) dalla chiamata API completata nell'ultima lezione, quindi si calcola quanto è vicino il suo valore all'indice presentato nell'array colors. Quindi si invia il valore di colore più vicino al runtime di chrome.

chrome.runtime ha [un'API](https://developer.chrome.com/extensions/runtime) che gestisce tutti i tipi di attività in background e l'estensione sta facendo leva su questo:

> "Utilizzare l'API chrome.runtime per recuperare la pagina in background, restituire dettagli sul manifest e ascoltare e rispondere agli eventi nel ciclo di vita dell'app o dell'estensione. Si può anche utilizzare questa API per convertire il percorso relativo degli URL in percorsi URL completi ".

✅ Se si sta sviluppando questa estensione del browser per Edge, potrebbe sorprendere che si sta utilizzando un'API chrome. Le versioni più recenti del browser Edge vengono eseguite sul motore del browser Chromium, quindi si possono sfruttare questi strumenti.

> Nota, se si desidera profilare un'estensione del browser, avviare gli strumenti di sviluppo dall'interno dell'estensione stessa, poiché si tratta di un'istanza del browser separata.

### Impostare un colore predefinito per l'icona

Ora, nella funzione `init()` , impostare l'icona come verde generico per iniziare di nuovo chiamando l'azione `updateIcon` di chrome:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Chiamare la funzione, eseguire la chiamata

Successivamente chiamare la funzione appena creata aggiungendola alla promessa restituita dall'API C02Signal:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Infine, in `/dist/background.js,`aggiungere l'event listener per queste chiamate di azione in background:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//presa in presito dall'estensione energy lollipop, simpatiica funzionalità!
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```
In questo codice, si sta aggiungendo un listener per tutti i messaggi che arrivano al gestore di attività di backend. Se questo messaggio si chiama 'updateIcon', viene eseguito il codice successivo per disegnare un'icona del colore corretto utilizzando l'API Canvas.

✅ Si Imparerà di più sull'API Canvas nelle [lezioni di Gioco Spaziale](../../../6-space-game/2-drawing-to-canvas/translations/README.it.md).

Ora, ricompilare l'estensione (`npm run build`), aggiornare e avviare l'estensione e verificare il cambio di colore. È un buon momento per fare una commissione o lavare i piatti? Ecco, adesso è noto, non ci sono più scuse!

Congratulazioni, è stata creata un'utile estensione per il browser e si è imparato di più su come funziona il browser e su come profilarne le prestazioni.

---

## 🚀 Sfida

Esaminare alcuni siti web open source che esistono da molto tempo e, in base alla loro cronologia GitHub, vedere se si riesce a determinare come sono stati ottimizzate nel corso degli anni le prestazioni, se non del tutto. Qual è il punto dolente più comune?

## Quiz Post-Lezione

[Quiz post-lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/28?loc=it)

## Revisione e Auto Apprendimento

Considerare l'idea di iscriversi a una [newsletter sulle prestazioni](https://perf.email/)

Analizzare alcuni dei modi in cui i browser misurano le prestazioni web esaminando le schede delle prestazioni nei loro strumenti web. Si sono riscontrate differenze importanti?

## Compito

[Analizzare un sito per le prestazioni](assignment.it.md)

