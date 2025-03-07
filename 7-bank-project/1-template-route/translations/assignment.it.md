# Migliorare l'instradamento

## Istruzioni

La dichiarazione delle rotte contiene attualmente solo l'ID del modello da utilizzare. Quando si visualizza una nuova pagina, a volte è necessario un po 'di più. L'implementazione del routing viene migliorata con due funzionalità aggiuntive:

- Assegnare titoli a ciascun modello e aggiornare il titolo della finestra con questo nuovo titolo quando il modello cambia.
- Aggiungere un'opzione per eseguire del codice dopo le modifiche al modello. Si vuole stampare `"Il cruscotto è mostrato" nella` console per sviluppatori ogni volta che viene visualizzata la pagina del dashboard.

## Rubrica

| Criteri | Ottimo | Adeguato | Necessita miglioramento |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Le due funzionalità sono implementate e funzionanti. L'aggiunta di titolo e codice funziona anche per una nuova rotta aggiunta nella dichiarazione di `routes` . | Sono funzionanti i due comportamenti aggiuntivi, ma il comportamento è fisso nel codice e non è configurabile tramite la dichiarazione di `routes`. L'aggiunta di una terza rotta con l'aggiunta di titolo e codice non funziona o funziona parzialmente. | Una delle funzionalità manca o non funziona correttamente. |