<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fc6aef8ecfdd5b0ad2afa6e6ba52bfde",
  "translation_date": "2025-08-25T21:56:15+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "it"
}
-->
# Fondamenti di JavaScript: Tipi di Dati

![Fondamenti di JavaScript - Tipi di dati](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.it.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Lezione
[Quiz pre-lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/7)

Questa lezione copre i fondamenti di JavaScript, il linguaggio che fornisce interattività sul web.

> Puoi seguire questa lezione su [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variabili](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variabili in JavaScript")

[![Tipi di dati in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tipi di dati in JavaScript")

> 🎥 Clicca sulle immagini sopra per i video su variabili e tipi di dati

Iniziamo con le variabili e i tipi di dati che le popolano!

## Variabili

Le variabili memorizzano valori che possono essere utilizzati e modificati nel tuo codice.

Creare e **dichiarare** una variabile ha la seguente sintassi **[keyword] [name]**. È composta da due parti:

- **Keyword**. Le keyword possono essere `let` o `var`.  

✅ La keyword `let` è stata introdotta in ES6 e assegna alla variabile un cosiddetto _block scope_. È consigliato utilizzare `let` al posto di `var`. Approfondiremo i block scope nelle parti successive.
- **Il nome della variabile**, che è un nome scelto da te.

### Compito - lavorare con le variabili

1. **Dichiarare una variabile**. Dichiariamo una variabile usando la keyword `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` è stata ora dichiarata usando la keyword `let`. Attualmente non ha un valore.

1. **Assegnare un valore**. Memorizza un valore in una variabile con l'operatore `=` seguito dal valore desiderato.

    ```javascript
    myVariable = 123;
    ```

   > Nota: l'uso di `=` in questa lezione indica un "operatore di assegnazione", utilizzato per impostare un valore a una variabile. Non denota uguaglianza.

   `myVariable` è stata ora *inizializzata* con il valore 123.

1. **Refactor**. Sostituisci il tuo codice con la seguente istruzione.

    ```javascript
    let myVariable = 123;
    ```

    Quanto sopra è chiamato _inizializzazione esplicita_ quando una variabile viene dichiarata e le viene assegnato un valore contemporaneamente.

1. **Cambiare il valore della variabile**. Cambia il valore della variabile nel seguente modo:

   ```javascript
   myVariable = 321;
   ```

   Una volta dichiarata una variabile, puoi cambiarne il valore in qualsiasi momento nel tuo codice con l'operatore `=` e il nuovo valore.

   ✅ Provalo! Puoi scrivere JavaScript direttamente nel tuo browser. Apri una finestra del browser e vai agli Strumenti per sviluppatori. Nella console troverai un prompt; digita `let myVariable = 123`, premi invio, poi digita `myVariable`. Cosa succede? Nota, imparerai di più su questi concetti nelle lezioni successive.

## Costanti

La dichiarazione e l'inizializzazione di una costante seguono gli stessi concetti di una variabile, con l'eccezione della keyword `const`. Le costanti sono solitamente dichiarate con tutte le lettere maiuscole.

```javascript
const MY_VARIABLE = 123;
```

Le costanti sono simili alle variabili, con due eccezioni:

- **Devono avere un valore**. Le costanti devono essere inizializzate, altrimenti si verificherà un errore durante l'esecuzione del codice.
- **Il riferimento non può essere modificato**. Il riferimento di una costante non può essere modificato una volta inizializzato, altrimenti si verificherà un errore durante l'esecuzione del codice. Vediamo due esempi:
   - **Valore semplice**. Quanto segue NON è permesso:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Il riferimento dell'oggetto è protetto**. Quanto segue NON è permesso.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Il valore dell'oggetto non è protetto**. Quanto segue È permesso:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Sopra stai cambiando il valore dell'oggetto ma non il riferimento stesso, il che lo rende permesso.

   > Nota, un `const` significa che il riferimento è protetto dalla riassegnazione. Tuttavia, il valore non è _immutabile_ e può cambiare, specialmente se è una struttura complessa come un oggetto.

## Tipi di Dati

Le variabili possono memorizzare molti tipi diversi di valori, come numeri e testo. Questi vari tipi di valori sono conosciuti come **tipi di dati**. I tipi di dati sono una parte importante dello sviluppo software perché aiutano gli sviluppatori a prendere decisioni su come il codice dovrebbe essere scritto e su come il software dovrebbe funzionare. Inoltre, alcuni tipi di dati hanno caratteristiche uniche che aiutano a trasformare o estrarre ulteriori informazioni da un valore.

✅ I tipi di dati sono anche chiamati primitive di dati JavaScript, poiché sono i tipi di dati di livello più basso forniti dal linguaggio. Ci sono 7 tipi di dati primitivi: string, number, bigint, boolean, undefined, null e symbol. Prenditi un minuto per visualizzare cosa potrebbe rappresentare ciascuna di queste primitive. Cos'è una `zebra`? E `0`? `true`?

### Numeri

Nella sezione precedente, il valore di `myVariable` era un tipo di dato numerico.

`let myVariable = 123;`

Le variabili possono memorizzare tutti i tipi di numeri, inclusi decimali o numeri negativi. I numeri possono anche essere utilizzati con operatori aritmetici, trattati nella [sezione successiva](../../../../2-js-basics/1-data-types).

### Operatori Aritmetici

Ci sono diversi tipi di operatori da utilizzare per eseguire funzioni aritmetiche, e alcuni sono elencati qui:

| Simbolo | Descrizione                                                              | Esempio                          |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Addizione**: Calcola la somma di due numeri                            | `1 + 2 //risultato atteso è 3`   |
| `-`    | **Sottrazione**: Calcola la differenza tra due numeri                    | `1 - 2 //risultato atteso è -1`  |
| `*`    | **Moltiplicazione**: Calcola il prodotto di due numeri                   | `1 * 2 //risultato atteso è 2`   |
| `/`    | **Divisione**: Calcola il quoziente di due numeri                        | `1 / 2 //risultato atteso è 0.5` |
| `%`    | **Resto**: Calcola il resto della divisione tra due numeri               | `1 % 2 //risultato atteso è 1`   |

✅ Provalo! Prova un'operazione aritmetica nella console del tuo browser. I risultati ti sorprendono?

### Stringhe

Le stringhe sono insiemi di caratteri racchiusi tra virgolette singole o doppie.

- `'Questa è una stringa'`
- `"Questa è anche una stringa"`
- `let myString = 'Questa è una stringa memorizzata in una variabile';`

Ricorda di usare le virgolette quando scrivi una stringa, altrimenti JavaScript presumerà che sia un nome di variabile.

### Formattare le Stringhe

Le stringhe sono testuali e richiedono formattazione di tanto in tanto.

Per **concatenare** due o più stringhe, o unirle insieme, usa l'operatore `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Perché `1 + 1 = 2` in JavaScript, ma `'1' + '1' = 11?` Pensaci. E `'1' + 1`?

**Template literals** sono un altro modo per formattare le stringhe, tranne che invece delle virgolette si usa il backtick. Qualsiasi cosa che non sia testo semplice deve essere inserita nei segnaposto `${ }`. Questo include qualsiasi variabile che potrebbe essere una stringa.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Puoi raggiungere i tuoi obiettivi di formattazione con entrambi i metodi, ma i template literals rispetteranno eventuali spazi e interruzioni di riga.

✅ Quando useresti un template literal rispetto a una stringa semplice?

### Booleani

I booleani possono avere solo due valori: `true` o `false`. I booleani possono aiutare a prendere decisioni su quali linee di codice devono essere eseguite quando vengono soddisfatte determinate condizioni. In molti casi, gli [operatori](../../../../2-js-basics/1-data-types) aiutano a impostare il valore di un booleano e spesso noterai e scriverai variabili che vengono inizializzate o i cui valori vengono aggiornati con un operatore.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Una variabile può essere considerata 'truthy' se si valuta come un booleano `true`. Curiosamente, in JavaScript, [tutti i valori sono truthy a meno che non siano definiti come falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Sfida

JavaScript è noto per i suoi modi sorprendenti di gestire i tipi di dati in alcune occasioni. Fai un po' di ricerca su questi 'gotchas'. Ad esempio: la sensibilità alle maiuscole può essere insidiosa! Prova questo nella tua console: `let age = 1; let Age = 2; age == Age` (risolve `false` -- perché?). Quali altri gotchas riesci a trovare?

## Quiz Post-Lezione
[Quiz post-lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/8)

## Revisione & Studio Autonomo

Dai un'occhiata a [questa lista di esercizi JavaScript](https://css-tricks.com/snippets/javascript/) e prova uno. Cosa hai imparato?

## Compito

[Pratica sui Tipi di Dati](assignment.md)

**Disclaimer (Avvertenza)**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.