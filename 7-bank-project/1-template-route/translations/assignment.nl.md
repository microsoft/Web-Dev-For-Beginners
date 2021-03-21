# Verbeter de routing

## Instructies

De routes-declaratie bevat momenteel alleen de te gebruiken sjabloon-ID. Maar bij het tonen van een nieuwe pagina is soms iets meer nodig. Laten we onze routeringsimplementatie verbeteren met twee extra functies:

- Geef elk sjabloon een titel en werk de venstertitel bij met deze nieuwe titel wanneer de sjabloon verandert.
- Voeg een optie toe om wat code uit te voeren nadat de sjabloon is gewijzigd. Elke keer dat de dashboardpagina wordt weergegeven willen we `'Dashboard wordt weergegeven'` in de ontwikkelaarsconsole afdrukken. 

## Rubriek

| Criteria | Voorbeeldig                                                                                                                          | Voldoende                                                                                                                                                                                  | Moet worden verbeterd                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | De twee functies zijn geïmplementeerd en werken. Titel en codetoevoeging werken ook voor een nieuwe route die is toegevoegd in de `routes`-aangifte. | De twee functies werken, maar het gedrag is hard gecodeerd en kan niet worden geconfigureerd via de `routes`-aangifte. Het toevoegen van een derde route met toevoeging van titel en code werkt niet of gedeeltelijk. | Een van de functies ontbreekt of werkt niet goed. |