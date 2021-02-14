# Refattorizzare e commentare il codice

## Istruzioni

Man mano che la base del codice cresce, è importante rifattorizzare il codice frequentemente per mantenerlo leggibile e gestibile nel tempo. Aggiungere commenti e rifattorizzare la propria `app.js` per migliorare la qualità del codice:

- Estrarre costanti, come l'URL di base dell'API del server
- Fattorizzare codice simile: ad esempio si può creare una funzione `sendRequest()` per raggruppare il codice utilizzato sia in `createAccount()` che in `getAccount()`
- Riorganizzare il codice per renderlo più facile da leggere e aggiungere commenti

## Rubrica

| Criteri | Ottimo | Adeguato | Necessita miglioramento |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|          | Il codice è commentato, ben organizzato in diverse sezioni e di facile lettura. Le costanti vengono estratte ed è stata creata una funzione `sendRequest()` fattorizzata. | Il codice è pulito ma può ancora essere migliorato con più commenti, estrazione di costanti o fattorizzazione. | Il codice è disordinato, non commentato, le costanti non vengono estratte e il codice non è fattorizzato |
