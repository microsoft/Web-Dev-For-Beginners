<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-25T23:32:19+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "it"
}
-->
# Progetto Estensione Browser Parte 2: Chiamare un'API, usare Local Storage

## Quiz Pre-Lezione

[Quiz pre-lezione](https://ff-quizzes.netlify.app/web/quiz/25)

### Introduzione

In questa lezione, chiamerai un'API inviando il modulo della tua estensione browser e visualizzando i risultati nella tua estensione. Inoltre, imparerai come memorizzare i dati nel local storage del browser per un uso futuro.

✅ Segui i segmenti numerati nei file appropriati per sapere dove inserire il tuo codice.

### Configura gli elementi da manipolare nell'estensione:

A questo punto, hai già creato l'HTML per il modulo e il `<div>` dei risultati della tua estensione browser. Da ora in poi, lavorerai nel file `/src/index.js` e costruirai la tua estensione passo dopo passo. Consulta la [lezione precedente](../1-about-browsers/README.md) per configurare il progetto e il processo di build.

Lavorando nel file `index.js`, inizia creando alcune variabili `const` per memorizzare i valori associati ai vari campi:

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Tutti questi campi sono referenziati tramite la loro classe CSS, come impostato nell'HTML nella lezione precedente.

### Aggiungi i listener

Successivamente, aggiungi i listener per gli eventi al modulo e al pulsante di reset che reimposta il modulo, in modo che, se un utente invia il modulo o clicca sul pulsante di reset, accada qualcosa. Aggiungi anche la chiamata per inizializzare l'app alla fine del file:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Nota la sintassi abbreviata utilizzata per ascoltare un evento di submit o click e come l'evento viene passato alle funzioni `handleSubmit` o `reset`. Riesci a scrivere l'equivalente di questa sintassi abbreviata in un formato più lungo? Quale preferisci?

### Costruisci le funzioni `init()` e `reset()`:

Ora costruirai la funzione che inizializza l'estensione, chiamata `init()`:

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

In questa funzione, c'è una logica interessante. Leggendola, riesci a capire cosa succede?

- Vengono impostate due `const` per verificare se l'utente ha memorizzato un `APIKey` e un codice regione nel local storage.
- Se uno dei due è nullo, mostra il modulo cambiando il suo stile per visualizzarlo come 'block'.
- Nascondi i risultati, il caricamento e il pulsante di reset, e imposta eventuali messaggi di errore come stringhe vuote.
- Se esistono una chiave e una regione, avvia una routine per:
  - Chiamare l'API per ottenere i dati sull'uso del carbonio.
  - Nascondere l'area dei risultati.
  - Nascondere il modulo.
  - Mostrare il pulsante di reset.

Prima di procedere, è utile imparare un concetto molto importante disponibile nei browser: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage è un modo utile per memorizzare stringhe nel browser come coppie `key-value`. Questo tipo di archiviazione web può essere manipolato tramite JavaScript per gestire i dati nel browser. LocalStorage non scade, mentre SessionStorage, un altro tipo di archiviazione web, viene cancellato quando il browser viene chiuso. I vari tipi di archiviazione hanno pro e contro nel loro utilizzo.

> Nota - la tua estensione browser ha il proprio local storage; la finestra principale del browser è un'istanza diversa e si comporta separatamente.

Puoi impostare il tuo `APIKey` con un valore stringa, ad esempio, e puoi verificarlo su Edge "ispezionando" una pagina web (puoi fare clic con il tasto destro su un browser per ispezionare) e andando alla scheda Applicazioni per vedere l'archiviazione.

![Pannello local storage](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.it.png)

✅ Pensa a situazioni in cui NON vorresti memorizzare alcuni dati nel LocalStorage. In generale, memorizzare le API Key nel LocalStorage è una cattiva idea! Riesci a capire perché? Nel nostro caso, poiché la nostra app è puramente educativa e non verrà distribuita in un app store, utilizzeremo questo metodo.

Nota che utilizzi le Web API per manipolare il LocalStorage, utilizzando `getItem()`, `setItem()` o `removeItem()`. È ampiamente supportato nei browser.

Prima di costruire la funzione `displayCarbonUsage()` chiamata in `init()`, costruiamo la funzionalità per gestire l'invio iniziale del modulo.

### Gestisci l'invio del modulo

Crea una funzione chiamata `handleSubmit` che accetta un argomento evento `(e)`. Interrompi la propagazione dell'evento (in questo caso, vogliamo impedire al browser di aggiornarsi) e chiama una nuova funzione, `setUpUser`, passando gli argomenti `apiKey.value` e `region.value`. In questo modo, utilizzi i due valori forniti tramite il modulo iniziale quando i campi appropriati sono popolati.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Rinfresca la memoria: l'HTML che hai impostato nella lezione precedente ha due campi di input i cui `values` vengono catturati tramite le `const` impostate all'inizio del file, e sono entrambi `required`, quindi il browser impedisce agli utenti di inserire valori nulli.

### Configura l'utente

Passando alla funzione `setUpUser`, qui è dove imposti i valori del local storage per `apiKey` e `regionName`. Aggiungi una nuova funzione:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

Questa funzione mostra un messaggio di caricamento mentre l'API viene chiamata. A questo punto, sei arrivato a creare la funzione più importante di questa estensione browser!

### Visualizza l'uso del carbonio

Finalmente, è il momento di interrogare l'API!

Prima di procedere, dovremmo discutere delle API. Le API, o [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), sono un elemento fondamentale nella cassetta degli attrezzi di uno sviluppatore web. Forniscono modi standard per i programmi di interagire e interfacciarsi tra loro. Ad esempio, se stai costruendo un sito web che deve interrogare un database, qualcuno potrebbe aver creato un'API per te. Sebbene esistano molti tipi di API, uno dei più popolari è un'API [REST](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Il termine 'REST' sta per 'Representational State Transfer' e prevede l'uso di URL configurati in vari modi per recuperare dati. Fai una piccola ricerca sui vari tipi di API disponibili per gli sviluppatori. Quale formato ti piace di più?

Ci sono cose importanti da notare su questa funzione. Prima di tutto, nota la parola chiave [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Scrivere le tue funzioni in modo che funzionino in modo asincrono significa che attendono il completamento di un'azione, come il ritorno dei dati, prima di continuare.

Ecco un breve video su `async`:

[![Async e Await per gestire le promesse](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async e Await per gestire le promesse")

> 🎥 Clicca sull'immagine sopra per un video su async/await.

Crea una nuova funzione per interrogare l'API C02Signal:

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
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

Questa è una funzione complessa. Cosa succede qui?

- Seguendo le best practice, utilizzi la parola chiave `async` per far sì che questa funzione si comporti in modo asincrono. La funzione contiene un blocco `try/catch` poiché restituirà una promessa quando l'API restituirà i dati. Poiché non hai controllo sulla velocità con cui l'API risponderà (potrebbe non rispondere affatto!), devi gestire questa incertezza chiamandola in modo asincrono.
- Stai interrogando l'API co2signal per ottenere i dati della tua regione, utilizzando la tua API Key. Per utilizzare quella chiave, devi utilizzare un tipo di autenticazione nei parametri dell'header.
- Una volta che l'API risponde, assegni vari elementi dei suoi dati di risposta alle parti dello schermo che hai impostato per mostrare questi dati.
- Se c'è un errore o non ci sono risultati, mostri un messaggio di errore.

✅ Utilizzare modelli di programmazione asincrona è un altro strumento molto utile nella tua cassetta degli attrezzi. Leggi [i vari modi](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) in cui puoi configurare questo tipo di codice.

Congratulazioni! Se costruisci la tua estensione (`npm run build`) e la aggiorni nel pannello delle estensioni, hai un'estensione funzionante! L'unica cosa che non funziona è l'icona, e la sistemerai nella prossima lezione.

---

## 🚀 Sfida

Abbiamo discusso di diversi tipi di API finora in queste lezioni. Scegli un'API web e ricerca in profondità cosa offre. Ad esempio, dai un'occhiata alle API disponibili nei browser come l'[HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Cosa rende un'API eccezionale secondo te?

## Quiz Post-Lezione

[Quiz post-lezione](https://ff-quizzes.netlify.app/web/quiz/26)

## Revisione e Studio Autonomo

In questa lezione hai imparato a conoscere LocalStorage e le API, entrambi strumenti molto utili per uno sviluppatore web professionista. Riesci a pensare a come queste due cose lavorano insieme? Pensa a come progetteresti un sito web che memorizza elementi da utilizzare tramite un'API.

## Compito

[Adotta un'API](assignment.md)

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali fraintendimenti o interpretazioni errate derivanti dall'uso di questa traduzione.