<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2025-10-22T23:20:00+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "it"
}
-->
# Divertiti con le Funzioni

## Istruzioni

In questo esercizio, praticherai la creazione di diversi tipi di funzioni per rafforzare i concetti che hai imparato sulle funzioni JavaScript, i parametri, i valori predefiniti e le istruzioni di ritorno.

Crea un file JavaScript chiamato `functions-practice.js` e implementa le seguenti funzioni:

### Parte 1: Funzioni di Base
1. **Crea una funzione chiamata `sayHello`** che non accetta parametri e stampa semplicemente "Ciao!" nella console.

2. **Crea una funzione chiamata `introduceYourself`** che accetta un parametro `name` e stampa un messaggio come "Ciao, mi chiamo [name]" nella console.

### Parte 2: Funzioni con Parametri Predefiniti
3. **Crea una funzione chiamata `greetPerson`** che accetta due parametri: `name` (obbligatorio) e `greeting` (opzionale, predefinito "Ciao"). La funzione dovrebbe stampare un messaggio come "[greeting], [name]!" nella console.

### Parte 3: Funzioni che Restituiscono Valori
4. **Crea una funzione chiamata `addNumbers`** che accetta due parametri (`num1` e `num2`) e restituisce la loro somma.

5. **Crea una funzione chiamata `createFullName`** che accetta i parametri `firstName` e `lastName` e restituisce il nome completo come una stringa unica.

### Parte 4: Metti Tutto Insieme
6. **Crea una funzione chiamata `calculateTip`** che accetta due parametri: `billAmount` (obbligatorio) e `tipPercentage` (opzionale, predefinito 15). La funzione dovrebbe calcolare e restituire l'importo della mancia.

### Parte 5: Testa le Tue Funzioni
Aggiungi chiamate alle funzioni per testare ciascuna di esse e visualizza i risultati utilizzando `console.log()`.

**Esempio di chiamate di test:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Rubrica

| Criteri | Esemplare | Adeguato | Da Migliorare |
| -------- | --------- | -------- | ----------------- |
| **Creazione delle Funzioni** | Tutte e 6 le funzioni sono implementate correttamente con sintassi e convenzioni di denominazione appropriate | 4-5 funzioni sono implementate correttamente con lievi problemi di sintassi | 3 o meno funzioni implementate o gravi errori di sintassi |
| **Parametri e Valori Predefiniti** | Utilizza correttamente i parametri obbligatori, opzionali e i valori predefiniti come specificato | Utilizza correttamente i parametri ma potrebbe avere problemi con i valori predefiniti | Implementazione dei parametri errata o mancante |
| **Valori Restituiti** | Le funzioni che dovrebbero restituire valori lo fanno correttamente, e le funzioni che non dovrebbero restituire valori eseguono solo azioni | La maggior parte dei valori restituiti è corretta con lievi problemi | Problemi significativi con le istruzioni di ritorno |
| **Qualità del Codice** | Codice pulito, ben organizzato con nomi di variabili significativi e corretta indentazione | Il codice funziona ma potrebbe essere più pulito o meglio organizzato | Codice difficile da leggere o strutturato male |
| **Test** | Tutte le funzioni sono testate con chiamate appropriate e i risultati sono visualizzati chiaramente | La maggior parte delle funzioni è testata adeguatamente | Test limitati o errati delle funzioni |

## Sfide Bonus (Opzionali)

Se vuoi metterti ulteriormente alla prova:

1. **Crea una versione con funzione freccia** di una delle tue funzioni
2. **Crea una funzione che accetti un'altra funzione come parametro** (come gli esempi di `setTimeout` dalla lezione)
3. **Aggiungi la validazione degli input** per garantire che le tue funzioni gestiscano correttamente gli input non validi

---

> 💡 **Suggerimento**: Ricorda di aprire la console del tuo browser (F12) per vedere l'output delle tue istruzioni `console.log()`!

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si consiglia una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.