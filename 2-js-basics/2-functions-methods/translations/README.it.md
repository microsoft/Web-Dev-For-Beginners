# Nozioni di base su JavaScript: Metodi e Funzioni

![Nozioni di base su JavaScript - Funzioni](/sketchnotes/webdev101-js-functions.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz pre-lezione

[Quiz Pre-Lezione](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/9?loc=it)

Quando si pensa di scrivere codice, ci si vuole sempre assicurare che il proprio codice sia leggibile. Anche se questo sembra controintuitivo, il codice viene letto molte più volte di quanto non venga scritto. Uno strumento base nella cassetta degli attrezzi dello sviluppatore è la **funzione**

[![Methods and Functions](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

## Funzioni

Essenzialmente, una funzione è un blocco di codice che si può eseguire su richiesta. Questo è perfetto per gli scenari in cui si deve eseguire la stessa attività più volte; invece di duplicare la logica in più posizioni (il che renderebbe difficile l'aggiornamento quando arriva il momento), è possibile centralizzarla in una posizione e chiamarla ogni volta che serve eseguire quell'operazione - è possibile persino chiamare funzioni da altre funzioni!.

Altrettanto importante è la capacità di nominare una funzione. Anche se questo potrebbe sembrare banale, il nome fornisce un modo rapido per documentare una sezione di codice. Si potrebbe pensare a questo come un'etichetta su un pulsante. Se clicco su un pulsante che dice "Annulla timer", so che interromperà il conteggio del tempo.

## Creare e chiamare una funzione

La sintassi di una funzione è simile alla seguente:

```javascript
function nameOfFunction() { // definizione della funzione
 // definizione della funzione/corpo
}
```

Se si volesse creare una funzione per visualizzare un saluto, potrebbe assomigliare a questo:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Ogniqualvolta si voglia chiamare (o invocare) una funzione, si usa il nome della funzione seguito da `()`. Vale la pena notare il fatto che la funzione può essere definita prima o dopo aver deciso di chiamarla; il compilatore JavaScript la troverà da solo.

```javascript
// chiamata della funzione
displayGreeting();
```

> Esiste un tipo speciale di funzione, noto come metodo, che già si sta usando! In effetti questo si è visto nella demo di cui sopra quando si è usato  `console.log`. Quello che rende un metodo diverso da una funzione è che il metodo è attaccato a un oggetto (la console nell'esempio), mentre una funzione è libera.Si sentiranno molti sviluppatori usare questi termini in modo intercambiabile.

### Migliori pratiche per la funzione

Ci sono alcune buone pratiche da tenere a mente quando si creano funzioni

- Come sempre, usare nomi descrittivi in modo da sapere cosa farà la funzione
- Usare la notazione a cammello (camelCase) per combinare le parole
- Mantenere le proprie funzioni concentrate su un'attività specifica

## Passare di informazioni a una funzione

Per rendere una funzione più riutilizzabile spesso si vorrà passarle delle informazioni. Se si considera la funzione di esempio `displayGreeting` qui sopra, visualizzerà solamente `Hello, world!`.Non è la funzione più utile che si possa creare. Se la si vuole rendere un poco più flessibile, tipo consentire a qualcuno di specificare il nome della persona da salutare, si può aggiungere un **parametro**. Un parametro (talvota chiamato anche **argomento**), è una informazione addizionale inviata alla funzione.

I parametri sono elencati nella parte di definizione tra parentesi e sono separati da virgole in questo modo:

```javascript
function name(param, param2, param3) {

}
```

E' possibile aggiornare la funzione `displayGreeting` in modo che accetti un nome e lo visualizzi.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Quando si vuole chiamare la funzione e passare il parametro, lo si specifica tra parentesi.

```javascript
displayGreeting('Christopher');
// visualizza "Hello, Christopher!" quando eseguita
```

## Valori predefiniti

E' possibile rendere la funzione ancora più flessibile aggiungendo più parametri. Ma cosa succede se non si vuole richiedere che ogni valore sia specificato? Continuando con l'esempio di saluto, si potrebbe lasciare il nome come richiesto (serve sapere chi si sta salutando), ma si vuole personalizzare coma desiderato anche il saluto. Se qualcuno non vuole personalizzarlo, si fornisce invece un valore predefinito. Per fornire a un parametro un valore predefinito, lo si imposta in modo praticamente uguale a come si assegna un valore a una variabile - `nomeParametro = 'valorePredefinito'`. Ecco un esempio completo:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Quando si chiama la funzione, è possibile poi decidere se si vuole impostare un valore per `salutation`.

```javascript
displayGreeting('Christopher');
// visualizza "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// visualizza "Hi, Christopher"
```

## Valori restituiti

Fino ad ora la funzione costruita mostrerà sempre il suo risultato alla [console](https://https://developer.mozilla.org/it/docs/Web/API/Console). A volte questo può essere esattamente quello che si sta cercando, specialmente quando si creano funzioni che chiameranno altri servizi. Ma cosa succede se si vuole creare una funzione di supporto per eseguire un calcolo e ritornare il valore in modo da poterlo utilizzare altrove?

Si può fare utilizzando un **valore di ritorno**. Un valore di ritorno viene restituito dalla funzione e può essere memorizzato in una variabile proprio come si potrebbe memorizzare un valore letterale come una stringa o un numero.

Se una funzione ritorna qualcosa allora si deve usare la parola chiave `return`. La parola chiave `return` si attende un valore o un riferimento a ciò che viene ritornato, in questo modo:

```javascript
return myVariable;
```

Si potrebbe creare una funzione per creare un messaggio di saluto e restituire il valore al chiamante

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Quando si chiama questa funzione, il valore verrà memorizzato in una variabile. E' praticamente lo stesso modo nel quale si imposterebbe una variabile a un valore statico (tipo `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funzioni come parametri per funzioni

Man mano che si progredisce nella propria carriera di programmatore, ci si imbatterà in funzioni che accettano funzioni come parametri. Questo trucco è comunemente usato quando non si sa quando qualcosa accadrà o sarà completata, ma si sa che si deve eseguire un'operazione in risposta.

Come esempio si consideri [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), che fa partire un timer ed eseguirà del codice il tempo viene esaurito. Occorre dirgli quale codice si vuole eseguire. Sembra un lavoro perfetto per una funzione!

Se si esegue il codice qui sopra, dopo 3 secondi si vedrà il messaggio **3 seconds has elapsed** (sono trascorsi 3 secondi).


```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// il valore del timer è in millisecondi
setTimeout(displayDone, 3000);
```

### Funzioni anonime

Si dia un'altra occhiata a ciò che è stato costruito. Si sta creando una funzione con un nome che verrà utilizzata una volta. Man mano che la propria applicazione diventa più complessa, si può prevedere che verranno create molte funzioni che verranno chiamate solo una volta. Questo non è l'ideale. A quanto pare, non è sempre necessario fornire un nome!

Quando si passa una funzione come parametro, è possibile evitare di crearla in anticipo e invece costruirne una come parte del parametro. Si usa la stessa parola chiave `function`, ma invece la si costruisce come parametro.

Il codice qui sopra viene riscritto per utilizzare una funzione anonima:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Se si esegue adesso  il nuovo codice si noterà che vengono ottenuti gli stessi risultati. E' stata creata una funzione, ma non si è dovuto darle un nome!

### Funzioni fat arrow

Una scorciatoia comune in molti linguaggi di programmazione (incluso JavaScript) è la possibilità di utilizzare quella che viene chiamata una funzione **freccia** o funzione **fat arrow** . Utilizza un indicatore speciale,  `=>`, che assomiglia a una freccia, da cui il nome! Usando `=>`, è possibile saltare la parola chiave `function` .

Ora il codice viene riscritto ancora una volta (refattorizzato) per utilizzare una funzione fat arrow:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Quando utilizzare ciascuna strategia

Ora che si è visto che ci sono tre modi per passare una funzione come parametro ci si potrebbe chiedere quando usare ciascuno di essi. Se si sa che funzione verrà utilizzata più di una volta, si crea  normalmente. Se la si utilizzerà solo per una posizione, in genere è meglio utilizzare una funzione anonima. Se si usa o meno una funzione fat arrow o la sintassi più tradizionale `function` dipende dallo sviluppatore, ma si noterà che la maggior parte degli sviluppatori moderni preferisce `=>`.

---

## 🚀 Sfida

Si riesce ad articolare in una frase la differenza tra funzioni e metodi? Fare un tentativo!

## Quiz post-lezione

[Quiz post-lezione](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/10?loc=it)

## Revisione e auto apprendimento

Vale la pena [leggere un poco di più sulle funzioni arrow](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), poiché sono sempre più utilizzate nelle basi di codice. Esercitarsi a scrivere una funzione, quindi riscriverla con questa sintassi.

## Compito

[Divertimento con le funzioni](assignment.it.md)