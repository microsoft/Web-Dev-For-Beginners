# Implementare la finestra di dialogo "Aggiungi transazione"

## Istruzioni

All'app bancaria manca ancora una caratteristica importante: la possibilità di inserire nuove transazioni.
Utilizzando tutto quanto appreso nelle quattro lezioni precedenti, implementare una finestra di dialogo "Aggiungi transazione":

- Aggiungere un pulsante "Aggiungi transazione" nella pagina del cruscotto
- Creare una nuova pagina con un modello HTML o usare JavaScript per mostrare/nascondere l'HTML della finestra di dialogo senza lasciare la pagina del cruscotto (si può  usare la proprietà [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) per quello o le classi CSS)
- Assicurarsi di gestire l' [accessibilità dalla tastiera e dal lettore di schermo](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) per la finestra di dialogo
- Implementare un form HTML per ricevere i dati di input
- Creare dati JSON dai dati del form e inviarli all'API
- Aggiorna la pagina del cruscotto con i nuovi dati

Guardare [le specifiche dell'API del server](../api/README.md) per vedere quale API si devono chiamare e qual è il formato JSON previsto.

Ecco un esempio di risultato dopo aver completato il compito:

![Videata che mostra un esempio di dialogo "Aggiungi transizione"](../images/dialog.png)

## Rubrica

| Criteri | Ottimo | Adeguato | Necessita miglioramento |
| -------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | L'aggiunta di una transazione viene implementata seguendo completamente tutte le migliori pratiche viste nelle lezioni. | L'aggiunta di una transazione è implementata, ma non seguendo le migliori pratiche viste nelle lezioni o funzionante solo parzialmente. | L'aggiunta di una transazione non funziona affatto. |
