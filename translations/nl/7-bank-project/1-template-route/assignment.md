<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-23T01:01:39+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "nl"
}
-->
# Verbeter de Routering

## Instructies

Nu je een basis routeringssysteem hebt gebouwd, is het tijd om het te verbeteren met professionele functies die de gebruikerservaring verbeteren en betere ontwikkelaarstools bieden. Toepassingen in de echte wereld hebben meer nodig dan alleen het wisselen van templates – ze vereisen dynamische paginatitels, lifecycle hooks en uitbreidbare architecturen.

In deze opdracht breid je je routeringsimplementatie uit met twee essentiële functies die vaak voorkomen in productie-webapplicaties. Deze verbeteringen zorgen ervoor dat je bankapplicatie professioneler aanvoelt en bieden een basis voor toekomstige functionaliteit.

De routeverklaring bevat momenteel alleen de template-ID die gebruikt moet worden. Maar bij het weergeven van een nieuwe pagina is soms wat meer nodig. Laten we onze routeringsimplementatie verbeteren met twee extra functies:

### Functie 1: Dynamische Paginatitels
**Doel:** Geef titels aan elke template en werk de venstertitel bij met deze nieuwe titel wanneer de template verandert.

**Waarom dit belangrijk is:**
- **Verbetert** de gebruikerservaring door beschrijvende browser-tabtitels weer te geven
- **Verhoogt** de toegankelijkheid voor schermlezers en ondersteunende technologieën  
- **Biedt** betere context voor bladwijzers en browsergeschiedenis
- **Volgt** professionele webontwikkelingspraktijken

**Implementatieaanpak:**
- **Breid** het routes-object uit om titelinformatie voor elke route op te nemen
- **Wijzig** de functie `updateRoute()` om `document.title` dynamisch bij te werken
- **Test** of titels correct veranderen bij het navigeren tussen schermen

### Functie 2: Route Lifecycle Hooks  
**Doel:** Voeg een optie toe om code uit te voeren nadat de template is gewijzigd. We willen dat `'Dashboard is shown'` wordt afgedrukt in de ontwikkelaarsconsole telkens wanneer de dashboardpagina wordt weergegeven.

**Waarom dit belangrijk is:**
- **Maakt** het mogelijk om aangepaste logica uit te voeren wanneer specifieke routes worden geladen
- **Biedt** hooks voor analytics, logging of initialisatiecode
- **Creëert** een basis voor complexer routegedrag
- **Demonstreert** het observerpatroon in webontwikkeling

**Implementatieaanpak:**
- **Voeg** een optionele callbackfunctie-eigenschap toe aan routeconfiguraties
- **Voer** de callbackfunctie uit (indien aanwezig) nadat de template-rendering is voltooid
- **Zorg ervoor** dat de functie werkt voor elke route met een gedefinieerde callback
- **Test** of het consolebericht verschijnt bij het bezoeken van het dashboard

## Rubriek

| Criteria | Uitmuntend                                                                                                                          | Voldoende                                                                                                                                                                                  | Verbetering nodig                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | De twee functies zijn geïmplementeerd en werken. Titel en code-uitvoering werken ook voor een nieuwe route die is toegevoegd in de `routes`-verklaring. | De twee functies werken, maar het gedrag is hardcoded en niet configureerbaar via de `routes`-verklaring. Het toevoegen van een derde route met titel en code-uitvoering werkt niet of werkt gedeeltelijk. | Een van de functies ontbreekt of werkt niet goed. |

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.