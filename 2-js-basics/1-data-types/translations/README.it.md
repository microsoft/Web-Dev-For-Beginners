# Nozioni di base su JavaScript: tipi di dato

![Nozioni di base su JavaScript: tipi di dati](/sketchnotes/webdev101-js-datatypes.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz pre-lezione
[Quiz pre-lezione](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/7?loc=it)

Questa lezione copre le basi di JavaScript, il linguaggio che fornisce l'interattività sul web.

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variables in JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Data Types in JavaScript")

Si comincia con le variabili e i tipi di dato che le popolano!

## Variabili

Le variabili memorizzano valori che possono essere utilizzati e modificati in tutto il codice.

La creazione e la **dichiarazione** di una variabile hanno la seguente sintassi **[parola chiave] [nome]**. È composto da due parti:

- **Parola chiave**. Le parole chiave possono essere `let` o `var`.

   > Nota, la parola chiave `let` è stata introdotta in ES6 e assegna alla variabile un cosiddetto _ambito di blocco_. Si consiglia di preferire `let` a `var`. Si trattereranno i blocchi di ambito in modo più approfondito nelle parti future.
- **Il nome della variabile**, questo è un nome che sceglie lo sviluppatore

### Compito - Lavorare con le variabili

1. **Dichiarare una variabile**. Si dichiari una variabile utilizzando la parola chiave `let` :

   ```javascript
   let myVariable;
   ```

   `myVariable` è stata ora dichiarata utilizzando la parola chiave `let` . Attualmente non ha un valore.

1. **Assegnare un valore**. Memorizzare un valore in una variabile con l 'operatore `=` , seguito dal valore atteso.

   ```javascript
   myVariable = 123;
   ```

   > Nota: l'uso di `=` in questa lezione significa che si utilizza un "operatore di assegnazione", utilizzato per assegnare un valore a una variabile. Non denota uguaglianza.

   `myVariable` è stata ora *inizializzata* con il valore 123.

1. **Esecuzione del refactoring**. Sostituire il proprio codice con la seguente dichiarazione.

   ```javascript
   let myVariable = 123;
   ```

   Quanto sopra è chiamato _inizializzazione esplicita_ quando una variabile viene dichiarata e viene assegnato un valore allo stesso tempo.

1. **Modificare il valore della variabile**. Si modifica il valore della variabile nel modo seguente:

   ```javascript
   myVariable = 321;
   ```

   Una volta dichiarata una variabile, è possibile modificarne il valore in qualsiasi punto del codice con l'operatore `=` e il nuovo valore.

   ✅ Proviamolo! Si può scrivere JavaScript direttamente nel proprio browser. Aprire una finestra del browser e andare a Developer Tools (Strumenti per Sviluppatori). Nella console si troverà un prompt; digitare `let myVariable = 123`, premere Invio, quindi digitare `myVariable`. Che cosa accade? Nota, si apprenderà di più su questi concetti nelle lezioni successive.

## Costanti

La dichiarazione e l'inizializzazione di una costante segue gli stessi concetti di una variabile, a eccezione della parola chiave `const` . Le costanti sono generalmente dichiarate con tutte le lettere maiuscole.

```javascript
const MY_VARIABLE = 123;
```

Le costanti sono simili alle variabili, con due eccezioni:

- **Devono avere un valore**. Le costanti devono essere inizializzate o si verificherà un errore durante l'esecuzione del codice.
- **Il riferimento non può essere modificato**. Il riferimento di una costante non può essere modificato una volta inizializzato o si verificherà un errore durante l'esecuzione del codice. Si considerino due esempi:
  - **Valore semplice**. Quanto segue NON è consentito:

      ```javascript
      const PI = 3;
      PI = 4; // non consentito
      ```

  - **Il riferimento all'oggetto è protetto**. Quanto segue NON è consentito:

      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // non consentito
      ```

  - **Il valore dell'oggetto NON è protetto**. Quanto segue E' consentito:

      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // consentito
      ```

      Sopra si sta modificando il valore dell'oggetto ma non il riferimento stesso, il che lo rende consentito.

   > Nota, `const` indica che il riferimento è protetto dalla riassegnazione. Il valore però non è _immutabile_ e può cambiare, soprattutto se si tratta di un costrutto complesso come un oggetto.

## Tipi di Dato

Le variabili possono memorizzare molti tipi diversi di valore, come numeri e testo. Questi vari tipi di valore sono noti come **tipo di dato**. I tipi di dato sono una parte importante dello sviluppo del software perché aiutano gli sviluppatori a prendere decisioni su come si dovrebbe scrivere il codice e su come si dovrebbe eseguire il software. Inoltre, alcuni tipi di dato hanno caratteristiche uniche che aiutano a trasformare o estrarre informazioni aggiuntive in un valore.

✅ I tipi di dato sono indicati anche come dati primitivi di JavaScript, poiché sono i tipi di dato di livello più basso forniti dal linguaggio. Esistono 6 tipi di dato primitivi: string, number, bigint, boolean, undefined e symbol. Si preda un minuto per visualizzare ciò che ciascuno di questi primitivi potrebbe rappresentare. Cos'è una `zebra`? Va bene `0`? `true`?

### Numeri

Nella sezione precedente, il valore di `myVariable` era un tipo di dato number (numero).

`let myVariable = 123;`

Le variabili possono memorizzare tutti i tipi di numero, inclusi decimali o numeri negativi. I numeri possono anche essere usati con operatori aritmetici, trattati nella [prossima sezione](#Operatori-aritmetici).

### Operatori aritmetici

Esistono diversi tipi di operatori da utilizzare quando si eseguono funzioni aritmetiche e alcuni sono elencati qui:

| Simbolo | Descrizione                                               | Esempio                           |
| ------- | --------------------------------------------------------- | --------------------------------- |
| `+`     | **Addizione**: calcola la somma di due numeri             | `1 + 2 // la risposta attesa è 3` |
| `-`     | **Sottrazione**: calcola la differenza tra due numeri     | `1-2 // la risposta attesa è -1`  |
| `*`     | **Moltiplicazione**: calcola il prodotto di due numeri    | `1 * 2 // la risposta attesa è 2` |
| `/`     | **Divisione**: calcola il quoziente di due numeri         | `1/2 // la risposta attesa è 0,5` |
| `%`     | **Resto**: calcola il resto dalla divisione di due numeri | `1 % 2 // la risposta attesa è 1` |

✅ Proviamolo! Provare un'operazione aritmetica nella console del proprio browser. I risultati sorprendono?

### Stringhe

Le stringhe sono insiemi di caratteri che risiedono tra virgolette singole o doppie.

- `'Questa è una stringa'`
- `"Anche questa è una stringa"`
- `let myString = 'Questo è un valore string memorizzato in una variabile';`

Ricordare di usare le virgolette quando si scrive una stringa, altrimenti JavaScript presumerà che sia un nome di variabile.

### Formattazione delle stringhe

Le stringhe sono testuali e richiedono una formattazione di volta in volta.

Per **concatenare** due o più stringhe o unirle insieme, utilizzare l'operatore `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Perchè `1 + 1 = 2 in` JavaScript, ma `'1' + '1' = 11?` Ci si rifletta. Che dire di `"1" + 1`?

I **template literal** sono un altro modo per formattare le stringhe, tranne per il fatto che al posto delle virgolette viene utilizzato il carattere backtick (\`). Tutto ciò che non è testo normale deve essere inserito nei segnaposto `${}`. Questo include tutte le variabili che possono essere stringhe.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Si possono raggiungere i propri obiettivi di formattazione con entrambi i metodi, ma i template literal rispetteranno eventuali spazi e interruzioni di riga.

✅ Quando si dovrebbe usare un template literal rispetto a una semplice stringa?

### Booleani

I  booleani possono avere solo due valori: vero (`true`) o falso (`false`). I booleani possono aiutare a prendere decisioni su quali righe di codice devono essere eseguite quando vengono soddisfatte determinate condizioni. In molti casi, [gli operatori](#Operatori-aritmetici) assistono nell'impostazione del valore di un Booleano e spesso si noteranno e scriveranno variabili inizializzate o i loro valori aggiornati con un operatore.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Una variabile può essere considerata "veritiera" se restituisce un valore booleano `true`. È interessante notare che in JavaScript [tutti i valori sono veritieri a meno che non siano definiti falsi](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Sfida

JavaScript è noto per i suoi modi sorprendenti di gestire talvolta i tipi di dato. Effettuare un po' di ricerca su questi "trabocchetti". Ad esempio: la distinzione tra maiuscole e minuscole può mordere! Provare questo nella propria console: `let age = 1; let Age = 2; age == Age` (risulta `false` - perché?). Quali altri trabocchetti si riescono a trovare?

## quiz post-lezione
[Quiz post-lezione](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/8?loc=it)

## Revisione e auto apprendimento

Esaminare [questo elenco di esercizi JavaScript](https://css-tricks.com/snippets/javascript/) e provarne uno. Che cosa si è imparato?

## Assegnazione

[Esercizi sui tipi di dato](assignment.it.md)
