# Implementeer het dialoogvenster "Transactie toevoegen"

## Instructies

Onze bank-app mist nog één belangrijk kenmerk: de mogelijkheid om nieuwe transacties in te voeren.
Gebruik alles wat u in de vier voorgaande lessen heeft geleerd en implementeer een dialoogvenster "Transactie toevoegen":

- Voeg een knop "Transactie toevoegen" toe op de dashboardpagina
- Maak een nieuwe pagina met een HTML-sjabloon of gebruik JavaScript om de HTML-dialoog weer te geven/te verbergen zonder de dashboardpagina te verlaten (u kunt [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) eigenschap daarvoor gebruiken, of CSS-class)
- Zorg ervoor dat u [toetsenbord en schermlezer toegankelijkheid](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) afhandelt voor het dialoogvenster
- Implementeer een HTML-formulier om invoergegevens te ontvangen
- Maak JSON-gegevens van de formuliergegevens en stuur deze naar de API
- Werk de dashboardpagina bij met de nieuwe gegevens

Kijk naar de [server API-specificaties](../api/README.md) om te zien welke API u moet aanroepen en wat het verwachte JSON-formaat is.

Hier is een voorbeeldresultaat na het voltooien van de opdracht:

![Schermafbeelding met een voorbeeld "Transactie toevoegen" dialoogvenster](../images/dialog.png)

## Rubriek

| Criteria | Voorbeeldig                                                                                        | Voldoende                                                                                                                | Moet worden verbeterd                           |
| -------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | Het toevoegen van een transactie wordt volledig geïmplementeerd volgens alle best practices uit de lessen. | Het toevoegen van een transactie is geïmplementeerd, maar volgt niet de best practices uit de lessen, of werkt slechts gedeeltelijk. | Het toevoegen van een transactie werkt helemaal niet. |
