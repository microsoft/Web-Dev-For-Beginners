# Prendere Decisioni: Processore di Voti degli Studenti

## Obiettivi di Apprendimento

In questo esercizio, metterai in pratica i concetti di decision-making appresi in questa lezione creando un programma che elabora i voti degli studenti provenienti da diversi sistemi di valutazione. Utilizzerai istruzioni `if...else`, operatori di confronto e operatori logici per determinare quali studenti superano i loro corsi.

## La Sfida

Lavori per una scuola che si è recentemente fusa con un'altra istituzione. Ora devi elaborare i voti degli studenti provenienti da due sistemi di valutazione completamente diversi e determinare quali studenti stanno superando i corsi. Questa è un'ottima opportunità per esercitarti con la logica condizionale!

### Comprendere i Sistemi di Valutazione

#### Primo Sistema di Valutazione (Numerico)
- I voti sono espressi con numeri da 1 a 5
- **Voto sufficiente**: 3 e superiore (3, 4 o 5)
- **Voto insufficiente**: Inferiore a 3 (1 o 2)

#### Secondo Sistema di Valutazione (Lettere)
- I voti sono espressi con lettere: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Voti sufficienti**: `A`, `A-`, `B`, `B-`, `C`, `C-` (tutti i voti elencati sono sufficienti)
- **Nota**: Questo sistema non include voti insufficienti come `D` o `F`

### Il Tuo Compito

Dato il seguente array `allStudents` che rappresenta tutti gli studenti e i loro voti, costruisci un nuovo array `studentsWhoPass` contenente tutti gli studenti che superano i corsi secondo i rispettivi sistemi di valutazione.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Approccio Passo-Passo

1. **Imposta un ciclo** per esaminare ogni voto nell'array `allStudents`
2. **Controlla il tipo di voto** (è un numero o una stringa?)
3. **Applica le regole del sistema di valutazione appropriato**:
   - Per i numeri: verifica se il voto è >= 3
   - Per le stringhe: verifica se è uno dei voti validi sufficienti
4. **Aggiungi i voti sufficienti** all'array `studentsWhoPass`

### Tecniche di Codice Utili

Utilizza questi concetti di JavaScript dalla lezione:

- **Operatore typeof**: `typeof grade === 'number'` per verificare se è un voto numerico
- **Operatori di confronto**: `>=` per confrontare i voti numerici
- **Operatori logici**: `||` per verificare più condizioni di voto con lettere
- **Istruzioni if...else**: per gestire i diversi sistemi di valutazione
- **Metodi degli array**: `.push()` per aggiungere i voti sufficienti al nuovo array

### Output Atteso

Quando esegui il programma, `studentsWhoPass` dovrebbe contenere: `['A', 'B-', 4, 5]`

**Perché questi voti sono sufficienti:**
- `'A'` e `'B-'` sono voti validi con lettere (tutti i voti con lettere in questo sistema sono sufficienti)
- `4` e `5` sono voti numerici >= 3
- `1` e `2` sono insufficienti perché sono voti numerici < 3

## Testare la Soluzione

Testa il tuo codice con diversi scenari:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Sfide Bonus

Una volta completato l'esercizio base, prova queste estensioni:

1. **Aggiungi validazione**: Controlla la presenza di voti non validi (come numeri negativi o lettere non valide)
2. **Calcola statistiche**: Determina quanti studenti superano e quanti falliscono
3. **Conversione dei voti**: Converti tutti i voti in un unico sistema numerico (A=5, B=4, C=3, ecc.)

## Rubrica

| Criteri | Esemplare (4) | Competente (3) | In via di sviluppo (2) | Principiante (1) |
|---------|---------------|----------------|-------------------------|------------------|
| **Funzionalità** | Il programma identifica correttamente tutti i voti sufficienti da entrambi i sistemi | Il programma funziona con piccoli problemi o casi limite | Il programma funziona parzialmente ma ha errori logici | Il programma ha errori significativi o non funziona |
| **Struttura del Codice** | Codice pulito e ben organizzato con logica if...else appropriata | Buona struttura con istruzioni condizionali adeguate | Struttura accettabile con alcuni problemi organizzativi | Struttura scarsa, logica difficile da seguire |
| **Uso dei Concetti** | Utilizzo efficace di operatori di confronto, operatori logici e istruzioni condizionali | Buon utilizzo dei concetti della lezione con piccole lacune | Utilizzo parziale dei concetti della lezione ma mancano elementi chiave | Utilizzo limitato dei concetti della lezione |
| **Risoluzione del Problema** | Dimostra una chiara comprensione del problema e un approccio elegante alla soluzione | Buon approccio alla risoluzione del problema con logica solida | Approccio adeguato con qualche confusione | Approccio poco chiaro, non dimostra comprensione |

## Linee Guida per la Consegna

1. **Testa il tuo codice** accuratamente con gli esempi forniti
2. **Aggiungi commenti** per spiegare la tua logica, soprattutto per le istruzioni condizionali
3. **Verifica che l'output** corrisponda ai risultati attesi: `['A', 'B-', 4, 5]`
4. **Considera i casi limite** come array vuoti o tipi di dati imprevisti

> 💡 **Suggerimento Pro**: Parti dalle basi! Fai funzionare prima la funzionalità principale, poi aggiungi caratteristiche più sofisticate. Ricorda, l'obiettivo è esercitarti con la logica decisionale utilizzando gli strumenti appresi in questa lezione.

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.