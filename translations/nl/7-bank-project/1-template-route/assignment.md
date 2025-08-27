<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-27T21:03:29+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "nl"
}
-->
# Verbeter de routing

## Instructies

De routeverklaring bevat momenteel alleen de template-ID die gebruikt moet worden. Maar bij het weergeven van een nieuwe pagina is soms wat meer nodig. Laten we onze routingimplementatie verbeteren met twee extra functies:

- Geef titels aan elke template en werk de titel van het venster bij met deze nieuwe titel wanneer de template verandert.
- Voeg een optie toe om wat code uit te voeren nadat de template verandert. We willen `'Dashboard is shown'` afdrukken in de ontwikkelaarsconsole elke keer dat de dashboardpagina wordt weergegeven.

## Rubric

| Criteria | Uitmuntend                                                                                                                         | Voldoende                                                                                                                                                                                 | Verbetering Nodig                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|          | De twee functies zijn geïmplementeerd en werken. Titel en code-uitvoering werken ook voor een nieuwe route die is toegevoegd in de `routes`-verklaring. | De twee functies werken, maar het gedrag is hardcoded en niet configureerbaar via de `routes`-verklaring. Het toevoegen van een derde route met titel en code-uitvoering werkt niet of werkt gedeeltelijk. | Eén van de functies ontbreekt of werkt niet goed.     |

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.