# Progetto di Estensione del Browser Parte 2: Chiamare un'API, utilizzare Local Storage

## Quiz Pre-Lezione

[Quiz Pre-Lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/25?loc=it)

### Introduzione

In questa lezione, si chiamerà un'API inviando il form dell'estensione del browser e si visualizzeranno i risultati nell'estensione del browser. Inoltre, si imparerà come archiviare i dati nella memoria locale del browser per riferimento e utilizzo futuri.

✅ Seguire i segmenti numerati nei file appropriati per sapere dove posizionare il codice

### Impostare gli elementi da manipolare nell'estensione:

A questo punto è stato creato l'HTML per il form e i risultati  `<div>` per l'estensione del browser. D'ora in poi, si dovrà lavorare nel file `/src/index.js` e costruire la propria estensione un po 'alla volta. Si faccia riferimento alla [lezione precedente](../../1-about-browsers/translations/README.it.md) su come impostare il progetto e sul processo di compilazione.

Lavorando nel file `index.js` , si inizia creando alcune variabili `const` per contenere i valori associati ai vari campi:

```JavaScript
// campi del form
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// risultati
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Tutti questi campi sono referenziati dalla loro classe CSS, così come è stata impostata nell'HTML nella lezione precedente.

### Aggiungere event listener

Successivamente, andranno aggiungi gli event listener al form e il pulsante di cancellazione che reimposta il form, in modo che se un utente invia il form o fa clic su quel pulsante di ripristino, accadrà qualcosa; aggiungere la chiamata per inizializzare l'app alla fine del file:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Notare l'abbreviazione utilizzata per ascoltare un evento submit o click e come l'evento viene passato alle funzioni handleSubmit o reset. Si può scrivere l'equivalente di questa scorciatoia in un formato più lungo? Quale si preferisce?

### Costruire la funzione init() e la funzione reset():

Ora si creerà la funzione che inizializza l'estensione, che si chiama init():

```JavaScript
function init() {
	//se c'è qulacosa in localStorage si recupera
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//imposta icona a un verde generico
	//da fare

	if (storedApiKey === null || storedRegion === null) {
		//se non si hanno le chiavi si mostra il form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		//se si sono salvate chiave/regioni in localStorage, si mostrano i risultati al caricamento
		displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//pulisce local storage solo per la regione
	localStorage.removeItem('regionName');
	init();
}

```
In questa funzione c'è una logica interessante. Leggendola, si riesce a vedere cosa succede?

- due `const` vengono impostate per verificare se l'utente ha memorizzato una chiave APIKey e il codice regionale nella memoria del browser.
- se uno di queste è nullo, si mostra il form cambiando il suo stile in modo che venga visualizzato come blocco
- nascondere i div che mostrano risultati, caricamento e il pulsante clearBtn e impostare qualsiasi testo di errore su una stringa vuota
- se esiste una chiave e una regione, avviare una routine per:
   - chiamare l'API per ottenere i dati sull'utilizzo del carbonio
   - nascondere l'area dei risultati
   - nascondere il form
   - mostrare il pulsante di reset

Prima di proseguire, è utile conoscere un concetto molto importante disponibile nei browser: [LocalStorage](https://developer.mozilla.org/it/docs/Web/API/Window/localStorage). LocalStorage è un modo utile per memorizzare le stringhe nel browser come coppia `chiave-valore` . Questo tipo di archiviazione web può essere manipolato da JavaScript per gestire i dati nel browser. LocalStorage non scade, mentre il contenuto di SessionStorage, un altro tipo di archiviazione web, viene cancellato alla chiusura del browser. I vari tipi di archiviazione hanno vantaggi e svantaggi per il loro utilizzo.

> Nota: l'estensione del browser ha la propria memoria locale; la finestra principale del browser è un'istanza diversa e si comporta separatamente.

Ad esempio, si può impostare il proprio apiKey in modo che abbia un valore di stringa e si può vedere come è impostato su Edge "ispezionando" una pagina web (si può fare clic con il pulsante destro del mouse sul browser per farlo) e andando alla scheda Applicazioni per vedere il i dati di conservazione.

![Pannello di Memorizzazione Locale](../images/localstorage.png)

✅ Si pensi a situazioni in cui NON si vorrebbero memorizzare alcuni dati in LocalStorage. In generale, posizionare le chiavi API in LocalStorage è una cattiva idea! Si può intuire perché? In questo caso, poiché l'app è esclusivamente per l'apprendimento e non verrà distribuita in un app store, si utilizzerà questo metodo.

Si noti che si utilizza l'API Web per manipolare LocalStorage, utilizzando `getItem()`, `setItem()` o `removeItem()`. È ampiamente supportata sui vari tipi di browser.

Prima di costruire la funzione `displayCarbonUsage()` chiamata in `init()`, si costruirà la funzionalità per gestire l'invio iniziale del form.

### Gestire l'invio del form

Creare una funzione chiamata `handleSubmit` che accetta un evento come argomento `(e)`. Fermare la propagazione dell'evento (in questo caso, si vuole fermare l'aggiornamento del browser) e chiamare una nuova funzione, `setUpUser`, passando gli argomenti `apiKey.value` e `region.value`. In questo modo, si utilizzano i due valori che vengono inseriti tramite il form iniziale quando vengono compilati i campi appropriati.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```
✅ Per rinfrescarsi la memoria: l'HTML impostato nell'ultima lezione ha due campi di input i cui attributi `value` vengono catturati tramite `const` che si è impostata all'inizio del file e sono entrambi obbligatori (`required`) in modo che il browser impedisca agli utenti di inserire valori nulli.

### Configurare l'utente

Passando alla funzione `setUpUser`, qui è dove si impostano i valori di archiviazione locale per apiKey e regionName. Aggiungere una nuova funzione

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//esecuzione della chiamata iniziale
	displayCarbonUsage(apiKey, regionName);
}
```
Questa funzione imposta un messaggio di caricamento da mostrare mentre viene chiamata l'API. A questo punto si è arrivati a creare la funzione più importante di questa estensione per browser!

### Visualizzare il consumo di carbonio

Finalmente è il momento di interrogare l'API!

Prima di andare oltre, si dovrebbe parlare delle API. Le API, o [Application Programming Interface](https://www.webopedia.com/TERM/A/API.html) (interfacce di programmazione dell'applicazione), sono un elemento critico della cassetta degli attrezzi di uno sviluppatore web. Forniscono modi standard per i programmi per interagire e interfacciarsi tra loro. Ad esempio, se si sta costruendo un sito web che deve interrogare un database, qualcuno potrebbe aver creato un'API da usare. Sebbene esistano molti tipi di API, uno dei tipi più popolari è un' [API REST](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Il termine "REST" sta per "Representational State Transfer" e prevede l'utilizzo di URL variamente configurati per recuperare dati. Fare una piccola ricerca sui vari tipi di API disponibili per gli sviluppatori. Quale formato piace?

Ci sono cose importanti da notare su questa funzione. Per prima cosa nota la [parola chiave `async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Scrivere le funzioni in modo che vengano eseguite in modo asincrono significa che attendono il completamento di un'azione, come la restituzione dei dati, prima di continuare.

Ecco un breve video su `async`:

[![Async e Await per la](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk " gestione di promesse")

> Fare clic sull'immagine sopra per un video su async/await.

Creare una nuova funzione per interrogare l'API C02Signal:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grammi (grammi di C02 emessi per kilowatt/ora)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentuale di combustibile fossile usato per generare elettricità)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Spiacente, non ci sono dati per la regione richiesta.';
	}
}
```

Questa è una grande funzione. Cosa sta succedendo qui?

- seguendo le migliori pratiche, si utilizza la parola chiave `async` per fare in modo che questa funzione si comporti in modo asincrono. La funzione contiene un blocco `try/catch` poiché restituirà una promessa quando l'API restituirà i dati. Poiché non si ha il controllo sulla velocità con cui l'API risponderà (potrebbe non rispondere affatto!), si devi gestire questa incertezza chiamandola in modo asincrono.
- si sta interrogando l'API co2signal per ottenere i dati della propria regione, utilizzando la propria chiave API. Per utilizzare quella chiave, si deve utilizzare un tipo di autenticazione nei parametri dell'intestazione della richiesta (header)
- una volta che l'API risponde, si assegnano i vari elementi dei suoi dati di risposta alle parti dello schermo che sono state impostate per mostrare questi dati.
- se c'è un errore, o se non c'è risultato, viene mostrato un messaggio di errore.

✅ L'utilizzo di schemi di programmazione asincrona è un altro strumento molto utile nella propria cassetta degli attrezzi. Informarsi [sui vari modi in](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) cui si può configurare questo tipo di codice.

Complimenti! Se si compila la propria estensione`(npm run build`) e la si aggiorna nel pannello delle estensioni, si avrà un'estensione funzionante! L'unica cosa che non funziona è l'icona, verrà risolto nella prossima lezione.

---

## 🚀 Sfida

Finora si è discusso sui diversi tipi di API in queste lezioni. Scegliere un'API web e cercare in profondità cosa offre. Ad esempio, dare un'occhiata alle API disponibili nei browser come l' [API HTML Drag and Drop](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Cosa si ritiene renda grande un'API?

## Quiz Post-Lezione

[Quiz post-lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/26?loc=it)

## Revisione e Auto Apprendimento

In questa lezione si è imparato a conoscere LocalStorage e le API, entrambi molto utili per lo sviluppatore web professionista. Si riesce a pensare come funzionano queste due cose insieme? Si pensi come progettare un sito web che memorizza gli elementi per essere utilizzati da un'API.

## Compito

[Adottare un'API](assignment.it.md)


