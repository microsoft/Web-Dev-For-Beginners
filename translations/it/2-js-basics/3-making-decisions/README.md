<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-22T23:20:42+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "it"
}
-->
# Fondamenti di JavaScript: Prendere decisioni

![Fondamenti di JavaScript - Prendere decisioni](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.it.png)

> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

Ti sei mai chiesto come le applicazioni prendano decisioni intelligenti? Come un sistema di navigazione scelga il percorso più veloce o come un termostato decida quando accendere il riscaldamento? Questo è il concetto fondamentale del processo decisionale nella programmazione.

Proprio come il motore analitico di Charles Babbage era progettato per seguire diverse sequenze di operazioni basate su condizioni, i moderni programmi JavaScript devono fare scelte basate su circostanze variabili. Questa capacità di ramificarsi e prendere decisioni è ciò che trasforma il codice statico in applicazioni reattive e intelligenti.

In questa lezione imparerai come implementare la logica condizionale nei tuoi programmi. Esploreremo le istruzioni condizionali, gli operatori di confronto e le espressioni logiche che permettono al tuo codice di valutare le situazioni e rispondere in modo appropriato.

## Quiz Pre-Lettura

[Quiz pre-lettura](https://ff-quizzes.netlify.app/web/quiz/11)

La capacità di prendere decisioni e controllare il flusso del programma è un aspetto fondamentale della programmazione. Questa sezione copre come controllare il percorso di esecuzione dei tuoi programmi JavaScript utilizzando valori Booleani e logica condizionale.

[![Prendere decisioni](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Prendere decisioni")

> 🎥 Clicca sull'immagine sopra per un video su come prendere decisioni.

> Puoi seguire questa lezione su [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Un breve riepilogo sui Booleani

Prima di esplorare il processo decisionale, ripassiamo i valori Booleani dalla nostra lezione precedente. Nominati in onore del matematico George Boole, questi valori rappresentano stati binari – `true` o `false`. Non c'è ambiguità, nessuna via di mezzo.

Questi valori binari formano la base di tutta la logica computazionale. Ogni decisione che il tuo programma prende si riduce, in ultima analisi, a una valutazione Booleana.

Creare variabili Booleane è semplice:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Questo crea due variabili con valori Booleani espliciti.

✅ I Booleani prendono il nome dal matematico, filosofo e logico inglese George Boole (1815–1864).

## Operatori di confronto e Booleani

Nella pratica, raramente imposterai manualmente i valori Booleani. Piuttosto, li genererai valutando condizioni: "Questo numero è maggiore di quello?" oppure "Questi valori sono uguali?"

Gli operatori di confronto permettono queste valutazioni. Confrontano i valori e restituiscono risultati Booleani basati sulla relazione tra gli operandi.

| Simbolo | Descrizione                                                                                                                                                   | Esempio            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`     | **Minore di**: Confronta due valori e restituisce il tipo di dato Booleano `true` se il valore a sinistra è minore di quello a destra                          | `5 < 6 // true`    |
| `<=`    | **Minore o uguale a**: Confronta due valori e restituisce il tipo di dato Booleano `true` se il valore a sinistra è minore o uguale a quello a destra         | `5 <= 6 // true`   |
| `>`     | **Maggiore di**: Confronta due valori e restituisce il tipo di dato Booleano `true` se il valore a sinistra è maggiore di quello a destra                     | `5 > 6 // false`   |
| `>=`    | **Maggiore o uguale a**: Confronta due valori e restituisce il tipo di dato Booleano `true` se il valore a sinistra è maggiore o uguale a quello a destra     | `5 >= 6 // false`  |
| `===`   | **Uguaglianza stretta**: Confronta due valori e restituisce il tipo di dato Booleano `true` se i valori a destra e a sinistra sono uguali E dello stesso tipo | `5 === 6 // false` |
| `!==`   | **Disuguaglianza**: Confronta due valori e restituisce il valore Booleano opposto rispetto a quello che restituirebbe un operatore di uguaglianza stretta     | `5 !== 6 // true`  |

✅ Verifica la tua conoscenza scrivendo alcuni confronti nella console del tuo browser. Ti sorprende qualche dato restituito?

## Istruzione If

L'istruzione `if` è come fare una domanda nel tuo codice. "Se questa condizione è vera, allora fai questa cosa." Probabilmente è lo strumento più importante che userai per prendere decisioni in JavaScript.

Ecco come funziona:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

La condizione va tra parentesi e, se è `true`, JavaScript esegue il codice tra le parentesi graffe. Se è `false`, JavaScript salta tutto quel blocco.

Spesso utilizzerai operatori di confronto per creare queste condizioni. Vediamo un esempio pratico:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Poiché `1000 >= 800` si valuta come `true`, il codice all'interno del blocco viene eseguito, mostrando "Sto comprando un nuovo laptop!" nella console.

## Istruzione If..Else

Ma cosa succede se vuoi che il tuo programma faccia qualcosa di diverso quando la condizione è falsa? È qui che entra in gioco `else` – è come avere un piano di riserva.

L'istruzione `else` ti dà un modo per dire "se questa condizione non è vera, fai quest'altra cosa invece."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Ora, poiché `500 >= 800` è `false`, JavaScript salta il primo blocco ed esegue invece il blocco `else`. Vedrai "Non posso permettermi un nuovo laptop, per ora!" nella console.

✅ Metti alla prova la tua comprensione di questo codice e del codice seguente eseguendolo nella console del browser. Cambia i valori delle variabili currentMoney e laptopPrice per modificare il risultato di `console.log()`.

## Istruzione Switch

A volte hai bisogno di confrontare un valore con più opzioni. Anche se potresti concatenare diverse istruzioni `if..else`, questo approccio diventa poco pratico. L'istruzione `switch` offre una struttura più pulita per gestire più valori discreti.

Il concetto ricorda i sistemi di commutazione meccanica utilizzati nei primi centralini telefonici – un valore di input determina quale percorso specifico segue l'esecuzione.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Ecco come è strutturato:
- JavaScript valuta l'espressione una sola volta
- Cerca ogni `case` per trovare una corrispondenza
- Quando trova una corrispondenza, esegue quel blocco di codice
- Il `break` dice a JavaScript di fermarsi e uscire dal switch
- Se nessun caso corrisponde, esegue il blocco `default` (se presente)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

In questo esempio, JavaScript vede che `dayNumber` è `2`, trova il `case 2` corrispondente, imposta `dayName` su "Martedì" e poi esce dal switch. Il risultato? "Oggi è Martedì" viene registrato nella console.

✅ Metti alla prova la tua comprensione di questo codice e del codice seguente eseguendolo nella console del browser. Cambia i valori della variabile a per modificare il risultato di `console.log()`.

## Operatori logici e Booleani

Le decisioni complesse spesso richiedono la valutazione simultanea di più condizioni. Proprio come l'algebra booleana permette ai matematici di combinare espressioni logiche, la programmazione fornisce operatori logici per collegare più condizioni booleane.

Questi operatori consentono una logica condizionale sofisticata combinando semplici valutazioni di vero/falso.

| Simbolo | Descrizione                                                                                     | Esempio                                                                 |
| ------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`    | **AND logico**: Confronta due espressioni booleane. Restituisce true **solo** se entrambi i lati sono veri | `(5 > 3) && (5 < 10) // Entrambi i lati sono veri. Restituisce true` |
| `\|\|`  | **OR logico**: Confronta due espressioni booleane. Restituisce true se almeno uno dei lati è vero | `(5 > 10) \|\| (5 < 10) // Un lato è falso, l'altro è vero. Restituisce true` |
| `!`     | **NOT logico**: Restituisce il valore opposto di un'espressione booleana                         | `!(5 > 10) // 5 non è maggiore di 10, quindi "!" lo rende vero`         |

Questi operatori ti permettono di combinare le condizioni in modi utili:
- AND (`&&`) significa che entrambe le condizioni devono essere vere
- OR (`||`) significa che almeno una condizione deve essere vera  
- NOT (`!`) inverte il valore da vero a falso (e viceversa)

## Condizioni e decisioni con operatori logici

Vediamo questi operatori logici in azione con un esempio più realistico:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

In questo esempio: calcoliamo un prezzo scontato del 20% (640), quindi valutiamo se i nostri fondi disponibili coprono il prezzo pieno OPPURE il prezzo scontato. Poiché 600 soddisfa la soglia del prezzo scontato di 640, la condizione si valuta come vera.

### Operatore di negazione

A volte è più facile pensare a quando qualcosa NON è vero. Ad esempio, invece di chiedere "L'utente è loggato?", potresti voler chiedere "L'utente NON è loggato?" L'operatore punto esclamativo (`!`) inverte la logica per te.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

L'operatore `!` è come dire "il contrario di..." – se qualcosa è `true`, `!` lo rende `false`, e viceversa.

### Espressioni ternarie

Per assegnazioni condizionali semplici, JavaScript fornisce l'**operatore ternario**. Questa sintassi concisa ti permette di scrivere un'espressione condizionale in una sola riga, utile quando devi assegnare uno dei due valori basandoti su una condizione.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Si legge come una domanda: "Questa condizione è vera? Se sì, usa questo valore. Se no, usa quell'altro valore."

Ecco un esempio più concreto:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Prenditi un minuto per leggere questo codice alcune volte. Capisci come funzionano questi operatori?

Ecco cosa dice questa riga: "Il `firstNumber` è maggiore del `secondNumber`? Se sì, metti `firstNumber` in `biggestNumber`. Se no, metti `secondNumber` in `biggestNumber`."

L'operatore ternario è solo un modo più breve per scrivere questa tradizionale istruzione `if..else`:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Entrambi gli approcci producono risultati identici. L'operatore ternario offre concisione, mentre la struttura tradizionale if-else può essere più leggibile per condizioni complesse.

---

## 🚀 Sfida

Crea un programma scritto prima con operatori logici e poi riscrivilo usando un'espressione ternaria. Qual è la tua sintassi preferita?

---

## Sfida GitHub Copilot Agent 🚀

Usa la modalità Agent per completare la seguente sfida:

**Descrizione:** Crea un calcolatore di voti completo che dimostri diversi concetti di decision-making trattati in questa lezione, inclusi if-else statements, switch statements, operatori logici ed espressioni ternarie.

**Prompt:** Scrivi un programma JavaScript che prenda il punteggio numerico di uno studente (0-100) e determini il suo voto letterale usando i seguenti criteri:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Sotto 60

Requisiti:
1. Usa un'istruzione if-else per determinare il voto letterale
2. Usa operatori logici per verificare se lo studente passa (voto >= 60) E ha onori (voto >= 90)
3. Usa un'istruzione switch per fornire feedback specifici per ogni voto letterale
4. Usa un operatore ternario per determinare se lo studente è idoneo per il corso successivo (voto >= 70)
5. Includi la validazione dell'input per garantire che il punteggio sia tra 0 e 100

Testa il tuo programma con vari punteggi inclusi casi limite come 59, 60, 89, 90 e input non validi.

Scopri di più sulla [modalità agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## Quiz Post-Lettura

[Quiz post-lettura](https://ff-quizzes.netlify.app/web/quiz/12)

## Revisione e studio autonomo

Leggi di più sui numerosi operatori disponibili per l'utente [su MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Consulta il fantastico [operator lookup](https://joshwcomeau.com/operator-lookup/) di Josh Comeau!

## Compito

[Operatori](assignment.md)

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.