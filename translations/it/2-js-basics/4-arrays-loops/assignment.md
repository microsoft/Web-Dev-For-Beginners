# Compiti su Array e Cicli

## Istruzioni

Completa i seguenti esercizi per praticare l'uso di array e cicli. Ogni esercizio si basa sui concetti della lezione e ti incoraggia ad applicare diversi tipi di cicli e metodi sugli array.

### Esercizio 1: Generatore di Pattern Numerico
Crea un programma che elenchi ogni terzo numero tra 1 e 20 e lo stampi sulla console.

**Requisiti:**
- Usa un ciclo `for` con un incremento personalizzato
- Mostra i numeri in un formato comprensibile per l'utente
- Aggiungi commenti descrittivi che spiegano la tua logica

**Output previsto:**
```
3, 6, 9, 12, 15, 18
```

> **Suggerimento:** Modifica l'espressione di iterazione nel tuo ciclo for per saltare i numeri.

### Esercizio 2: Analisi di un Array
Crea un array di almeno 8 numeri diversi e scrivi funzioni per analizzare i dati.

**Requisiti:**
- Crea un array chiamato `numbers` con almeno 8 valori
- Scrivi una funzione `findMaximum()` che restituisca il numero più alto
- Scrivi una funzione `findMinimum()` che restituisca il numero più basso  
- Scrivi una funzione `calculateSum()` che restituisca il totale di tutti i numeri
- Testa ogni funzione e mostra i risultati

**Sfida Bonus:** Crea una funzione che trovi il secondo numero più alto nell'array.

### Esercizio 3: Elaborazione di Array di Stringhe
Crea un array dei tuoi film/libri/canzoni preferiti e pratica diversi tipi di cicli.

**Requisiti:**
- Crea un array con almeno 5 valori di tipo stringa
- Usa un ciclo `for` tradizionale per mostrare gli elementi con numeri (1. Nome dell'elemento)
- Usa un ciclo `for...of` per mostrare gli elementi in maiuscolo
- Usa il metodo `forEach()` per contare e mostrare il totale dei caratteri

**Esempio di Output:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Esercizio 4: Filtraggio dei Dati (Avanzato)
Crea un programma che elabori un array di oggetti che rappresentano studenti.

**Requisiti:**
- Crea un array di almeno 5 oggetti studente con proprietà: `name`, `age`, `grade`
- Usa i cicli per trovare gli studenti che hanno 18 anni o più
- Calcola la media dei voti di tutti gli studenti
- Crea un nuovo array contenente solo gli studenti con voti superiori a 85

**Struttura Esempio:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Test del Codice

Testa i tuoi programmi:
1. Eseguendo ogni esercizio nella console del browser
2. Verificando che gli output corrispondano ai risultati previsti
3. Testando con diversi set di dati
4. Controllando che il tuo codice gestisca i casi limite (array vuoti, singoli elementi)

## Linee Guida per la Consegna

Includi nella tua consegna:
- Codice JavaScript ben commentato per ogni esercizio
- Screenshot o output testuale che mostrano i tuoi programmi in esecuzione
- Breve spiegazione del tipo di ciclo scelto per ogni attività e il motivo

## Griglia di Valutazione

| Criteri | Esemplare (3 punti) | Adeguato (2 punti) | Da Migliorare (1 punto) |
| -------- | -------------------- | ------------------- | --------------------------- |
| **Funzionalità** | Tutti gli esercizi completati correttamente con le sfide bonus | Tutti gli esercizi richiesti funzionano correttamente | Alcuni esercizi incompleti o contengono errori |
| **Qualità del Codice** | Codice pulito, ben organizzato con nomi di variabili descrittivi | Il codice funziona ma potrebbe essere più pulito | Codice disordinato o difficile da comprendere |
| **Commenti** | Commenti completi che spiegano la logica e le decisioni | Presenti commenti di base | Commenti minimi o assenti |
| **Uso dei Cicli** | Dimostra comprensione dei diversi tipi di cicli in modo appropriato | Usa i cicli correttamente ma con varietà limitata | Uso errato o inefficiente dei cicli |
| **Test** | Evidenza di test approfonditi con scenari multipli | Test di base dimostrati | Poca evidenza di test |

## Domande di Riflessione

Dopo aver completato gli esercizi, considera:
1. Quale tipo di ciclo ti è sembrato più naturale da usare e perché?
2. Quali difficoltà hai incontrato lavorando con gli array?
3. Come potrebbero queste competenze applicarsi a progetti di sviluppo web nel mondo reale?
4. Cosa faresti diversamente se dovessi ottimizzare il tuo codice per le prestazioni?

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.