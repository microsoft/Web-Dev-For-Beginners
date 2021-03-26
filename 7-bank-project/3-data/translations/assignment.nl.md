# Refactoreer en becommentarieer uw code

## Instructies

Naarmate uw codebase groeit, is het belangrijk om uw code regelmatig te refactoren om deze in de loop van de tijd leesbaar en onderhoudbaar te houden. Voeg opmerkingen toe en refactoreer uw `app.js` om de kwaliteit van de code te verbeteren:

- Extraheer constanten, zoals de basis-URL van de server-API
- Factoriseer vergelijkbare code: u kunt bijvoorbeeld een `sendRequest()` functie maken om de code die wordt gebruikt in zowel `createAccount()` als `getAccount()` groeperen
- Reorganiseer de code zodat deze gemakkelijker leesbaar is en voeg opmerkingen toe

## Rubriek

| Criteria | Voorbeeldig                                                                                                                                                     | Voldoende                                                                                          | Moet worden verbeterd                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|          | Code is becommentarieerd, goed georganiseerd in verschillende secties en gemakkelijk te lezen. Constanten worden geëxtraheerd en er is een gefactoriseerde `sendRequest()`-functie gemaakt. | Code is schoon, maar kan nog worden verbeterd met meer opmerkingen, constante extractie of factorisatie. | Code is rommelig, er wordt geen commentaar op gegeven, constanten worden niet geëxtraheerd en code wordt niet in factoren verwerkt. |
