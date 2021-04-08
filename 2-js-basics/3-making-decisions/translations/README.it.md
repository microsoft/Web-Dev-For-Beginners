# Nozioni di base su JavaScript: Prendere Decisioni

![Nozioni di base su JavaScript - Prendere decisioni](/sketchnotes/webdev101-js-decisions.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Lezione
[Quiz Pre-Lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/11?loc=it)

Prendere decisioni e controllare l'ordine in cui il proprio codice viene eseguito lo rende riutilizzabile e robusto. Questa sezione descrive la sintassi per il controllo del flusso di dati in JavaScript e il suo significato quando viene utilizzato con tipi di dato Booleani

[![Making Decisions](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

## Un Breve Riepilogo sui Booleani

I Booleani possono avere solo due valori: `true` (vero) o `false` (falso). I booleani possono aiutare a prendere decisioni su quali righe di codice devono essere eseguite quando vengono soddisfatte determinate condizioni.

Si impostano i booleani come vero o falso in questo modo:

`let myTrueBool = true`
`let myFalseBool = false` 

✅ I Booleani prendono il nome dal matematico, filosofo e logico inglese George Boole (1815–1864).

## Operatori di Confronto e Booleani

Gli operatori vengono utilizzati per valutare condizioni effettuando confronti che creeranno un valore Booleano. Di seguito è riportato un elenco di operatori utilizzati di frequente.

| Simbolo | Descrizione                                                                                                                                                                 | Esempio            |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`     | **Minore di**: Confronta due valori e restituisce il tipo di dato booleano `true` se il valore sul lato sinistro è minore di quello del lato di destra                      | `5 < 6 // true`    |
| `<=`    | **Minore di o uguale a**: Confronta due valori e restituisce il tipo di dato Booleano `true` se il valore sul lato sinistro è minore o uguale a quello di destra            | `5 <= 6 // true`   |
| `>`     | **Maggiore di**: Confronta due valori e restituisce il tipo di dato Booleano `true` se il valore sul lato sinistro è maggiore di quello del lato destro                     | `5 > 6 // false`   |
| `>=`    | **Maggiore di o uguale a**: Confronta due valori e restituisce il tipo di dato Booleano `true` se il valore sul lato sinistro è maggiore o uguale a quello del  lato destro | `5 >= 6 // false`  |
| `===`   | **Uguaglianza rigorosa**: Confronta due valori e restituisce il tipo di dato Booleano `true` se i valori a destra e a sinistra sono uguali E sono lo stesso tipo di dato.   | `5 === 6 // false` |
| `!==`   | **Disuguaglianza**: Confronta due valori e restituisce il valore Booleano opposto di quello che restituirebbe un operatore di uguaglianza rigorosa                          | `5! == 6 // true`  |

✅ Verificare le proprie conoscenze scrivendo alcuni confronti nella console del browser. I dati restituiti sorprendono?

## Istruzione If

L'istruzione if eseguirà il codice tra i suoi blocchi se la condizione è vera.

```javascript
if (condition){
    //Condition era vero. Verra eseguito il codice in questo blocco.
}
```

Gli operatori logici vengono spesso utilizzati per formare la condizione.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Condition era vero. Verra eseguito il codice in questo blocco.
    console.log("Getting a new laptop!");
}
```

## Istruzione if..else

L 'istruzione `else` eseguirà il codice tra i suoi blocchi quando la condizione è falsa. È opzionale con un'istruzione `if` .

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Condizione era vero. Verra eseguito il codice in questo blocco.
    console.log("Getting a new laptop!");
}
else{
    //Condizione era falsa. Verra eseguito il codice in questo blocco.
    console.log("Can't afford a new laptop, yet!");
}
```

✅ Verificare la comprensione di questo codice e del codice seguente eseguendolo in una console del browser. Modificare i valori delle variabili currentMoney e laptopPrice per modificare il valore restituito da `console.log()`.

## Operatori Logici e Booleani

Le decisioni potrebbero richiedere più di un confronto e possono essere combinate con operatori logici per produrre un valore Booleano.

| Simbolo | Descrizione                                                                                                  | Esempio                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| `&&`    | **AND logico**: Confronta due espressioni Booleane. Restituisce vero **solo** se entrambe le parti sono vere | `(5 > 6) && (5 < 6) // Un lato è falso, l'altro è vero. Restituisce false` |
| `\|\|`  | **OR logico**: Confronta due espressioni Booleane. Restituisce vero se almeno una parte è vera               | `(5 > 6) || (5 < 6) // Un lato è falso, l'altro è vero. Restituisce true`  |
| `!`     | **NOT logico**: Restituisce il valore opposto di un'espressione Booleana                                     | `!(5 > 6) // 5 non è maggiore di 6, ma "!" restituirà true`                |

## Condizioni e Decisioni con Operatori Logici

Gli operatori logici possono essere utilizzati per formare condizioni nelle istruzioni if..else.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Condizione era vero. Verra eseguito il codice in questo blocco.
    console.log("Getting a new laptop!");
}
else {
    //Condizion era falsa. Verra eseguito il codice in questo blocco.
    console.log("Can't afford a new laptop, yet!");
}
```

### Operatore di Negazione

Finora si è visto come if può usare un'istruzione `if... else` per creare logica condizionale. Tutto ciò che va in un `if` deve essere valutato come vero / falso. Utilizzando l'operatore `!` si può _negare_ l'espressione. Sarebbe così:

```javascript
if (!condition) {
  // si esegue se condition è falso
} else {
  // si esegue se condition è vero
}
```

### Espressioni ternarie

`if...else` non è l'unico modo per esprimere la logica decisionale. Si può anche usare qualcosa chiamato operatore ternario. La sintassi è simile alla seguente:

```javascript
let variable = condition ? <ritorna questo se vero> : <ritorna questo se falso>
```

Di seguito è riportato un esempio più tangibile:

```javascript
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```

✅ Ci si prenda un minuto per leggere questo codice alcune volte. Si capisce come lavorano questi operatori?

Quanto sopra afferma che

- se `firstNumber` è maggiore di `secondNumber` 
- allora assegna `firstNumber` a `biggestNumber` 
- altrimenti assegna `secondNumber`.

L'espressione ternaria è solo un modo compatto per scrivere il codice seguente:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Sfida

Creare un programma che viene scritto prima con operatori logici, quindi riscriverlo utilizzando un'espressione ternaria. Qual è la propria sintassi preferita?

---
## Quiz Post-Lezione
[Quiz post-lezione](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/12?loc=it)

## Revisione e Auto Apprendimento

Ulteriori informazioni sui numerosi operatori a disposizione dell'utente [su MDN](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Operators).

Esaminare la meravigliosa [consultazione sugli operatori di Josh Comeau](https://joshwcomeau.com/operator-lookup/)!

## Compito

[Operatori](assignment.it.md)
