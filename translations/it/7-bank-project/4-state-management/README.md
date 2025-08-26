<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4fa20c513e367e9cdd401bf49ae16e33",
  "translation_date": "2025-08-26T00:47:14+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "it"
}
-->
# Costruire un'app bancaria Parte 4: Concetti di gestione dello stato

## Quiz Pre-Lezione

[Quiz pre-lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/47)

### Introduzione

Man mano che un'applicazione web cresce, diventa una sfida tenere traccia di tutti i flussi di dati. Quale codice ottiene i dati, quale pagina li utilizza, dove e quando devono essere aggiornati... è facile finire con un codice disordinato e difficile da mantenere. Questo è particolarmente vero quando è necessario condividere dati tra diverse pagine della tua app, ad esempio i dati dell'utente. Il concetto di *gestione dello stato* è sempre esistito in tutti i tipi di programmi, ma poiché le app web continuano a crescere in complessità, è ora un punto chiave da considerare durante lo sviluppo.

In questa parte finale, esamineremo l'app che abbiamo costruito per ripensare a come viene gestito lo stato, consentendo il supporto per il refresh del browser in qualsiasi momento e la persistenza dei dati tra le sessioni utente.

### Prerequisiti

Devi aver completato la parte [data fetching](../3-data/README.md) dell'app web per questa lezione. Inoltre, devi installare [Node.js](https://nodejs.org) e [eseguire l'API del server](../api/README.md) localmente per gestire i dati dell'account.

Puoi verificare che il server stia funzionando correttamente eseguendo questo comando in un terminale:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Ripensare la gestione dello stato

Nella [lezione precedente](../3-data/README.md), abbiamo introdotto un concetto di base di stato nella nostra app con la variabile globale `account` che contiene i dati bancari dell'utente attualmente loggato. Tuttavia, la nostra implementazione attuale presenta alcune lacune. Prova a ricaricare la pagina quando sei sulla dashboard. Cosa succede?

Ci sono 3 problemi con il codice attuale:

- Lo stato non è persistente, poiché un refresh del browser ti riporta alla pagina di login.
- Ci sono molte funzioni che modificano lo stato. Man mano che l'app cresce, può diventare difficile tracciare i cambiamenti ed è facile dimenticare di aggiornare qualcosa.
- Lo stato non viene ripulito, quindi quando clicchi su *Logout* i dati dell'account sono ancora presenti anche se sei sulla pagina di login.

Potremmo aggiornare il nostro codice per affrontare questi problemi uno per uno, ma ciò creerebbe più duplicazione di codice e renderebbe l'app più complessa e difficile da mantenere. Oppure potremmo fermarci per qualche minuto e ripensare la nostra strategia.

> Quali problemi stiamo cercando di risolvere realmente?

La [gestione dello stato](https://en.wikipedia.org/wiki/State_management) riguarda principalmente il trovare un buon approccio per risolvere questi due problemi particolari:

- Come mantenere i flussi di dati in un'app comprensibili?
- Come mantenere i dati dello stato sempre sincronizzati con l'interfaccia utente (e viceversa)?

Una volta affrontati questi problemi, qualsiasi altro problema che potresti avere potrebbe essere già risolto o diventare più facile da risolvere. Ci sono molti approcci possibili per risolvere questi problemi, ma utilizzeremo una soluzione comune che consiste nel **centralizzare i dati e i modi per modificarli**. I flussi di dati funzionerebbero così:

![Schema che mostra i flussi di dati tra l'HTML, le azioni dell'utente e lo stato](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.it.png)

> Qui non tratteremo la parte in cui i dati aggiornano automaticamente la vista, poiché è legata a concetti più avanzati di [Programmazione Reattiva](https://en.wikipedia.org/wiki/Reactive_programming). È un buon argomento di approfondimento se sei interessato a un'immersione più profonda.

✅ Esistono molte librerie con approcci diversi alla gestione dello stato, [Redux](https://redux.js.org) è una delle opzioni più popolari. Dai un'occhiata ai concetti e ai modelli utilizzati, poiché spesso è un buon modo per imparare quali problemi potenziali potresti affrontare in grandi app web e come possono essere risolti.

### Compito

Inizieremo con un po' di refactoring. Sostituisci la dichiarazione di `account`:

```js
let account = null;
```

Con:

```js
let state = {
  account: null
};
```

L'idea è di *centralizzare* tutti i dati della nostra app in un unico oggetto stato. Per ora abbiamo solo `account` nello stato, quindi non cambia molto, ma crea una base per evoluzioni future.

Dobbiamo anche aggiornare le funzioni che lo utilizzano. Nelle funzioni `register()` e `login()`, sostituisci `account = ...` con `state.account = ...`;

All'inizio della funzione `updateDashboard()`, aggiungi questa riga:

```js
const account = state.account;
```

Questo refactoring di per sé non ha portato grandi miglioramenti, ma l'idea era di gettare le basi per i prossimi cambiamenti.

## Tracciare i cambiamenti dei dati

Ora che abbiamo messo in atto l'oggetto `state` per memorizzare i nostri dati, il passo successivo è centralizzare gli aggiornamenti. L'obiettivo è rendere più facile tenere traccia di qualsiasi cambiamento e quando avvengono.

Per evitare che vengano apportate modifiche all'oggetto `state`, è anche una buona pratica considerarlo [*immutabile*](https://en.wikipedia.org/wiki/Immutable_object), il che significa che non può essere modificato affatto. Questo implica che devi creare un nuovo oggetto stato se vuoi cambiare qualcosa in esso. Facendo così, costruisci una protezione contro potenziali [effetti collaterali](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) indesiderati e apri possibilità per nuove funzionalità nella tua app, come implementare undo/redo, rendendo anche più facile il debug. Ad esempio, potresti registrare ogni cambiamento fatto allo stato e mantenere una cronologia dei cambiamenti per capire la fonte di un bug.

In JavaScript, puoi usare [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) per creare una versione immutabile di un oggetto. Se provi a fare modifiche a un oggetto immutabile, verrà sollevata un'eccezione.

✅ Conosci la differenza tra un oggetto immutabile *superficiale* e uno *profondo*? Puoi leggerne [qui](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Compito

Creiamo una nuova funzione `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

In questa funzione, stiamo creando un nuovo oggetto stato e copiando i dati dallo stato precedente usando l'[*operatore spread (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Poi sovrascriviamo una particolare proprietà dell'oggetto stato con i nuovi dati usando la [notazione con parentesi](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` per l'assegnazione. Infine, blocchiamo l'oggetto per impedire modifiche usando `Object.freeze()`. Per ora abbiamo solo la proprietà `account` memorizzata nello stato, ma con questo approccio puoi aggiungere tutte le proprietà necessarie.

Aggiorneremo anche l'inizializzazione dello stato per assicurarci che lo stato iniziale sia bloccato:

```js
let state = Object.freeze({
  account: null
});
```

Dopo di ciò, aggiorna la funzione `register` sostituendo l'assegnazione `state.account = result;` con:

```js
updateState('account', result);
```

Fai lo stesso con la funzione `login`, sostituendo `state.account = data;` con:

```js
updateState('account', data);
```

Ora cogliamo l'occasione per risolvere il problema dei dati dell'account che non vengono cancellati quando l'utente clicca su *Logout*.

Crea una nuova funzione `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

In `updateDashboard()`, sostituisci il reindirizzamento `return navigate('/login');` con `return logout()`;

Prova a registrare un nuovo account, disconnetterti e accedere di nuovo per verificare che tutto funzioni correttamente.

> Suggerimento: puoi dare un'occhiata a tutti i cambiamenti dello stato aggiungendo `console.log(state)` alla fine di `updateState()` e aprendo la console negli strumenti di sviluppo del browser.

## Persistenza dello stato

La maggior parte delle app web ha bisogno di persistere i dati per funzionare correttamente. Tutti i dati critici sono solitamente memorizzati in un database e accessibili tramite un'API del server, come i dati dell'account utente nel nostro caso. Ma a volte, è anche interessante persistere alcuni dati nell'app client che gira nel browser, per migliorare l'esperienza utente o le prestazioni di caricamento.

Quando vuoi persistere i dati nel browser, ci sono alcune domande importanti che dovresti porti:

- *I dati sono sensibili?* Dovresti evitare di memorizzare dati sensibili sul client, come le password degli utenti.
- *Per quanto tempo hai bisogno di conservare questi dati?* Vuoi accedere a questi dati solo per la sessione corrente o vuoi che siano memorizzati per sempre?

Esistono diversi modi per memorizzare informazioni all'interno di un'app web, a seconda di ciò che vuoi ottenere. Ad esempio, puoi utilizzare gli URL per memorizzare una query di ricerca e renderla condivisibile tra gli utenti. Puoi anche utilizzare i [cookie HTTP](https://developer.mozilla.org/docs/Web/HTTP/Cookies) se i dati devono essere condivisi con il server, come le informazioni di [autenticazione](https://en.wikipedia.org/wiki/Authentication).

Un'altra opzione è utilizzare una delle molte API del browser per memorizzare i dati. Due di esse sono particolarmente interessanti:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): un [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) che consente di persistere dati specifici per il sito web corrente tra diverse sessioni. I dati salvati in esso non scadono mai.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): funziona allo stesso modo di `localStorage` tranne per il fatto che i dati memorizzati in esso vengono cancellati quando la sessione termina (quando il browser viene chiuso).

Nota che entrambe queste API consentono solo di memorizzare [stringhe](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Se vuoi memorizzare oggetti complessi, dovrai serializzarli nel formato [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) usando [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Se vuoi creare un'app web che non funziona con un server, è anche possibile creare un database sul client utilizzando l'API [`IndexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Questa opzione è riservata a casi d'uso avanzati o se hai bisogno di memorizzare una quantità significativa di dati, poiché è più complessa da utilizzare.

### Compito

Vogliamo che i nostri utenti rimangano loggati fino a quando non cliccano esplicitamente sul pulsante *Logout*, quindi utilizzeremo `localStorage` per memorizzare i dati dell'account. Per prima cosa, definiamo una chiave che utilizzeremo per memorizzare i nostri dati.

```js
const storageKey = 'savedAccount';
```

Poi aggiungi questa riga alla fine della funzione `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Con questo, i dati dell'account utente saranno persistenti e sempre aggiornati poiché abbiamo centralizzato in precedenza tutti gli aggiornamenti dello stato. È qui che iniziamo a beneficiare di tutti i nostri refactoring precedenti 🙂.

Poiché i dati vengono salvati, dobbiamo anche occuparci di ripristinarli quando l'app viene caricata. Dato che inizieremo ad avere più codice di inizializzazione, potrebbe essere una buona idea creare una nuova funzione `init`, che includa anche il nostro codice precedente alla fine di `app.js`:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

Qui recuperiamo i dati salvati e, se ci sono, aggiorniamo lo stato di conseguenza. È importante farlo *prima* di aggiornare la route, poiché potrebbe esserci codice che si basa sullo stato durante l'aggiornamento della pagina.

Possiamo anche rendere la pagina *Dashboard* la pagina predefinita della nostra applicazione, poiché ora stiamo persistenziando i dati dell'account. Se non vengono trovati dati, la dashboard si occupa di reindirizzare alla pagina *Login* comunque. In `updateRoute()`, sostituisci il fallback `return navigate('/login');` con `return navigate('/dashboard');`.

Ora accedi all'app e prova a ricaricare la pagina. Dovresti rimanere sulla dashboard. Con questo aggiornamento abbiamo risolto tutti i nostri problemi iniziali...

## Aggiornare i dati

...Ma potremmo anche averne creato uno nuovo. Oops!

Vai alla dashboard utilizzando l'account `test`, quindi esegui questo comando su un terminale per creare una nuova transazione:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Prova a ricaricare la pagina della dashboard nel browser ora. Cosa succede? Vedi la nuova transazione?

Lo stato è persistente indefinitamente grazie a `localStorage`, ma ciò significa anche che non viene mai aggiornato fino a quando non esci dall'app e accedi di nuovo!

Una possibile strategia per risolvere questo problema è ricaricare i dati dell'account ogni volta che la dashboard viene caricata, per evitare dati obsoleti.

### Compito

Crea una nuova funzione `updateAccountData`:

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

Questo metodo verifica che siamo attualmente loggati e poi ricarica i dati dell'account dal server.

Crea un'altra funzione chiamata `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Questa funzione aggiorna i dati dell'account e poi si occupa di aggiornare l'HTML della pagina dashboard. È ciò che dobbiamo chiamare quando la route della dashboard viene caricata. Aggiorna la definizione della route con:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Prova a ricaricare la dashboard ora, dovrebbe mostrare i dati dell'account aggiornati.

---

## 🚀 Sfida

Ora che ricarichiamo i dati dell'account ogni volta che la dashboard viene caricata, pensi che sia ancora necessario persistere *tutti i dati dell'account*?

Prova a lavorare insieme per modificare ciò che viene salvato e caricato da `localStorage` per includere solo ciò che è assolutamente necessario per il funzionamento dell'app.

## Quiz Post-Lezione
[Quiz post-lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/48)

## Compito

[Implementa la finestra di dialogo "Aggiungi transazione"](assignment.md)

Ecco un esempio del risultato dopo aver completato il compito:

![Screenshot che mostra un esempio della finestra di dialogo "Aggiungi transazione"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.it.png)

**Disclaimer (Avvertenza)**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.