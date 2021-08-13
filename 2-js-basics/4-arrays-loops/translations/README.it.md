# Nozioni di base di JavaScript: Array e Cicli

![Nozioni di base su JavaScript - Array](/sketchnotes/webdev101-js-arrays.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Lezione
[Quiz Pre-Lezione](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/13?loc=it)

Questa lezione tratta le basi di javascript, il linguaggio che fornisce interattività sul web. In questa lezione, si conosceranno gli array e i cicli, usati per manipolare i dati.


[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Array")
[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")



## Array

Lavorare con i dati è un'attività comune per qualsiasi linguaggio ed è un'attività molto più semplice quando i dati sono organizzati in un formato strutturale, come gli array. Con gli array, i dati vengono memorizzati in una struttura simile a un elenco. Uno dei principali vantaggi degli array è che si possono memorizzare diversi tipi di dati in un array.

✅ Gli array sono tutti intorno a noi! Si riesce a pensare a un esempio reale di un array, come un array di pannelli solari?

La sintassi per un array è una coppia di parentesi quadre.

`let myArray = [];`

Questo è un array vuoto, ma gli array possono essere dichiarati già popolati con i dati. Più valori in un array sono separati da una virgola.

`let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];`

Ai valori dell'array viene assegnato un valore univoco chiamato **indice**, un numero intero che viene assegnato a un elemento in base alla sua distanza dall'inizio dell'array. Nell'esempio precedente, il valore di stringa "Chocolate" ha un indice di 0 e l'indice di "Rocky Road" è 4. Si utilizza l'indice all'interno di parentesi quadre per recuperare, modificare o inserire valori di matrice.

✅ Sorprende che gli array inizino con l'indice zero? In alcuni linguaggi di programmazione, gli indici iniziano da 1. C'è una storia interessante a questo proposito, che si può [leggere su Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Si può sfruttare l'indice per modificare un valore, in questo modo:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Modificato "Rocky Road" in "Butter Pecan"
```

Si può inserire un nuovo valore a una data posizione in questo modo:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Aggiunto "Cookie Dough"
```

✅ Un modo più comune per inviare valori a un array è usare operatori di array come array.push()

Per scoprire quanti elementi ci sono in un array, si usa la proprietà `length` .

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

Fare una prova! Si usi la console del proprio browser per creare e manipolare un array che si è creato.

## Cicli

I cicli consentono attività ripetitive o **iterative** e possono far risparmiare molto tempo e codice. Ogni iterazione può variare nelle proprie variabili, valori e condizioni. Esistono diversi tipi di cicli in JavaScript e presentano piccole differenze, ma essenzialmente fanno la stessa cosa: iterare sui dati.

### Ciclo For

Il ciclo `for` richiede 3 parti per iterare:

- `counter`: Una variabile tipicamente inizializzata con un numero che conta il numero di iterazioni.
- `condizione`: Espressione che utilizza operatori di confronto per arrestare il ciclo quando viene ritornato `true`
- `espressione-di-iterazione`: Viene eseguita alla fine di ogni iterazione, tipicamente utilizzata per modificare il valore del contatore

```javascript
    //Conta fino a 10
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
```

✅ Si esegua questo codice in una console del browser. Cosa succede quando si apportano piccole modifiche al contatore, alla condizione o all'espressione di iterazione? E' possibile farlo funzionare all'indietro, creando un conto alla rovescia?

### Ciclo While

A differenza della sintassi per il ciclo `for` , i cicli `while` richiedono solo una condizione che interromperà il ciclo quando ritorna `true`. Le condizioni nei cicli di solito si basano su altri valori come i contatori e devono essere gestite durante il ciclo. I valori iniziali per i contatori devono essere creati all'esterno del ciclo e qualsiasi espressione per soddisfare una condizione, inclusa la modifica del contatore, deve essere mantenuta all'interno del ciclo.

```javascript
//Conta fino a 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Perché si sceglierebbe un ciclo for invece di un ciclo while? 17k di di utenti di StackOverflow hanno fatto la stessa domanda e alcune opinioni [potrebbero essere interessanti](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Cicli e Array

Gli array vengono spesso utilizzati con i cicli perché la maggior parte delle condizioni verifica la lunghezza dell'array per interrompere il ciclo e l'indice può anche essere il valore del contatore.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Termina quando tutti i gusti sono stati stampati
```

✅ Sperimentare l'iterazione su un array di propria creazione nella console del browser.

---

## 🚀 Sfida

Esistono altri modi per eseguire un ciclo sugli array. diversi dai cicli for e while. Ci sono [forEach](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Statements/for...of) e [map](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Riscrivere il ciclo sull'array usando una di queste tecniche.

## Quiz Post-Lezione
[Quiz Post-Lezione](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/14?loc=it)


## Revisione e Auto Apprendimento

Gli array in JavaScript hanno molti metodi ad essi assegnati, estremamente utili per la manipolazione dei dati. [Informarsi su questi metodi](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array) e provarne alcuni (come push, pop, slice e splice) su un array di propria creazione.

## Compito

[Ciclo su un Array](assignment.it.md)
