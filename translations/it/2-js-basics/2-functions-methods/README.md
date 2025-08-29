<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-29T00:09:27+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "it"
}
-->
# Nozioni di base su JavaScript: Metodi e Funzioni

![JavaScript Basics - Functions](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.it.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Lezione
[Quiz pre-lezione](https://ff-quizzes.netlify.app)

Quando pensiamo a scrivere codice, vogliamo sempre assicurarci che sia leggibile. Anche se può sembrare controintuitivo, il codice viene letto molte più volte di quante venga scritto. Uno strumento fondamentale nella cassetta degli attrezzi di uno sviluppatore per garantire un codice manutenibile è la **funzione**.

[![Metodi e Funzioni](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metodi e Funzioni")

> 🎥 Clicca sull'immagine sopra per un video su metodi e funzioni.

> Puoi seguire questa lezione su [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funzioni

Alla base, una funzione è un blocco di codice che possiamo eseguire su richiesta. Questo è perfetto per scenari in cui dobbiamo svolgere lo stesso compito più volte; invece di duplicare la logica in più punti (rendendo difficile l'aggiornamento in futuro), possiamo centralizzarla in un unico luogo e richiamarla ogni volta che abbiamo bisogno di eseguire quell'operazione - possiamo persino richiamare funzioni da altre funzioni!

Un aspetto altrettanto importante è la possibilità di dare un nome a una funzione. Anche se potrebbe sembrare banale, il nome fornisce un modo rapido per documentare una sezione di codice. Puoi pensarlo come un'etichetta su un pulsante. Se clicco su un pulsante con scritto "Annulla timer", so che fermerà il cronometro.

## Creare e richiamare una funzione

La sintassi per una funzione è simile alla seguente:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Se volessi creare una funzione per mostrare un saluto, potrebbe apparire così:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Ogni volta che vogliamo richiamare (o invocare) la nostra funzione, utilizziamo il nome della funzione seguito da `()`. Vale la pena notare che la nostra funzione può essere definita prima o dopo che decidiamo di richiamarla; il compilatore JavaScript la troverà per noi.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Esiste un tipo speciale di funzione noto come **metodo**, che hai già utilizzato! Infatti, lo abbiamo visto nella nostra demo sopra quando abbiamo usato `console.log`. Ciò che distingue un metodo da una funzione è che un metodo è associato a un oggetto (`console` nel nostro esempio), mentre una funzione è indipendente. Sentirai molti sviluppatori usare questi termini in modo intercambiabile.

### Migliori pratiche per le funzioni

Ci sono alcune buone pratiche da tenere a mente quando si creano funzioni:

- Come sempre, usa nomi descrittivi per sapere cosa farà la funzione
- Usa il **camelCasing** per combinare le parole
- Mantieni le tue funzioni focalizzate su un compito specifico

## Passare informazioni a una funzione

Per rendere una funzione più riutilizzabile, spesso vorrai passarle delle informazioni. Se consideriamo il nostro esempio `displayGreeting` sopra, mostrerà solo **Hello, world!**. Non è la funzione più utile che si possa creare. Se vogliamo renderla un po' più flessibile, ad esempio permettendo a qualcuno di specificare il nome della persona da salutare, possiamo aggiungere un **parametro**. Un parametro (a volte chiamato anche **argomento**) è un'informazione aggiuntiva inviata a una funzione.

I parametri sono elencati nella parte di definizione tra parentesi e sono separati da virgole, come segue:

```javascript
function name(param, param2, param3) {

}
```

Possiamo aggiornare il nostro `displayGreeting` per accettare un nome e mostrarlo.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Quando vogliamo richiamare la nostra funzione e passare il parametro, lo specifichiamo tra parentesi.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Valori predefiniti

Possiamo rendere la nostra funzione ancora più flessibile aggiungendo più parametri. Ma cosa succede se non vogliamo che ogni valore sia obbligatorio? Restando nel nostro esempio di saluto, potremmo lasciare il nome come obbligatorio (dobbiamo sapere chi stiamo salutando), ma vogliamo permettere che il saluto stesso sia personalizzabile. Se qualcuno non vuole personalizzarlo, forniamo un valore predefinito. Per fornire un valore predefinito a un parametro, lo impostiamo nello stesso modo in cui impostiamo un valore per una variabile - `nomeParametro = 'valorePredefinito'`. Per vedere un esempio completo:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Quando richiamiamo la funzione, possiamo decidere se vogliamo impostare un valore per `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Valori di ritorno

Fino ad ora, la funzione che abbiamo costruito mostrerà sempre l'output nella [console](https://developer.mozilla.org/docs/Web/API/console). A volte questo può essere esattamente ciò che cerchiamo, specialmente quando creiamo funzioni che richiameranno altri servizi. Ma cosa succede se voglio creare una funzione di supporto per eseguire un calcolo e fornire il valore indietro in modo che possa essere utilizzato altrove?

Possiamo farlo utilizzando un **valore di ritorno**. Un valore di ritorno viene restituito dalla funzione e può essere memorizzato in una variabile proprio come possiamo memorizzare un valore letterale come una stringa o un numero.

Se una funzione restituisce qualcosa, viene utilizzata la parola chiave `return`. La parola chiave `return` si aspetta un valore o un riferimento di ciò che viene restituito, come segue:

```javascript
return myVariable;
```  

Potremmo creare una funzione per creare un messaggio di saluto e restituire il valore al chiamante.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Quando richiamiamo questa funzione, memorizzeremo il valore in una variabile. Questo è molto simile a come imposteremmo una variabile su un valore statico (come `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funzioni come parametri per altre funzioni

Man mano che progredisci nella tua carriera di programmatore, incontrerai funzioni che accettano altre funzioni come parametri. Questo trucco interessante è comunemente usato quando non sappiamo quando qualcosa accadrà o sarà completato, ma sappiamo che dobbiamo eseguire un'operazione in risposta.

Ad esempio, considera [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), che avvia un timer ed eseguirà il codice al termine. Dobbiamo dirgli quale codice vogliamo eseguire. Sembra un lavoro perfetto per una funzione!

Se esegui il codice qui sotto, dopo 3 secondi vedrai il messaggio **3 secondi trascorsi**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Funzioni anonime

Diamo un'altra occhiata a ciò che abbiamo costruito. Stiamo creando una funzione con un nome che verrà utilizzato una sola volta. Man mano che la nostra applicazione diventa più complessa, possiamo immaginare di creare molte funzioni che verranno chiamate solo una volta. Questo non è ideale. A quanto pare, non sempre è necessario fornire un nome!

Quando passiamo una funzione come parametro, possiamo evitare di crearne una in anticipo e invece costruirla come parte del parametro. Usiamo la stessa parola chiave `function`, ma la costruiamo come parametro.

Riscriviamo il codice sopra per utilizzare una funzione anonima:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Se esegui il nostro nuovo codice, noterai che otteniamo gli stessi risultati. Abbiamo creato una funzione, ma non abbiamo dovuto darle un nome!

### Funzioni a freccia (fat arrow functions)

Un'altra scorciatoia comune in molti linguaggi di programmazione (incluso JavaScript) è la possibilità di utilizzare ciò che viene chiamato **arrow function** o **fat arrow function**. Utilizza un indicatore speciale `=>`, che assomiglia a una freccia - da cui il nome! Utilizzando `=>`, possiamo saltare la parola chiave `function`.

Riscriviamo il nostro codice un'altra volta per utilizzare una funzione a freccia:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Quando utilizzare ciascuna strategia

Ora hai visto che abbiamo tre modi per passare una funzione come parametro e potresti chiederti quando utilizzare ciascuno. Se sai che utilizzerai la funzione più di una volta, creala normalmente. Se la utilizzerai solo in una posizione, è generalmente meglio utilizzare una funzione anonima. Se utilizzare una funzione a freccia o la sintassi più tradizionale `function` dipende da te, ma noterai che la maggior parte degli sviluppatori moderni preferisce `=>`.

---

## 🚀 Sfida

Riesci a spiegare in una frase la differenza tra funzioni e metodi? Prova!

## Quiz Post-Lezione
[Quiz post-lezione](https://ff-quizzes.netlify.app)

## Revisione e Studio Autonomo

Vale la pena [approfondire un po' di più sulle funzioni a freccia](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), poiché sono sempre più utilizzate nei progetti. Esercitati a scrivere una funzione e poi riscrivila utilizzando questa sintassi.

## Compito

[Divertiti con le Funzioni](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale eseguita da un traduttore umano. Non siamo responsabili per eventuali fraintendimenti o interpretazioni errate derivanti dall'uso di questa traduzione.