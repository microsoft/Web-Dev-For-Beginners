<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-27T21:06:32+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "nl"
}
-->
# Implementeer de dialoog "Transactie toevoegen"

## Instructies

Onze bankapp mist nog een belangrijke functie: de mogelijkheid om nieuwe transacties in te voeren. Gebruik alles wat je hebt geleerd in de vier voorgaande lessen om een dialoog "Transactie toevoegen" te implementeren:

- Voeg een knop "Transactie toevoegen" toe op de dashboardpagina
- Maak ofwel een nieuwe pagina met een HTML-sjabloon, of gebruik JavaScript om de HTML van de dialoog te tonen/verbergen zonder de dashboardpagina te verlaten (je kunt hiervoor de [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)-eigenschap of CSS-klassen gebruiken)
- Zorg ervoor dat je rekening houdt met [toegankelijkheid voor toetsenbord en schermlezers](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) voor de dialoog
- Implementeer een HTML-formulier om invoergegevens te ontvangen
- Maak JSON-gegevens van de formuliergegevens en stuur deze naar de API
- Werk de dashboardpagina bij met de nieuwe gegevens

Bekijk de [server-API-specificaties](../api/README.md) om te zien welke API je moet aanroepen en wat het verwachte JSON-formaat is.

Hier is een voorbeeldresultaat na het voltooien van de opdracht:

![Screenshot van een voorbeeld van de dialoog "Transactie toevoegen"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.nl.png)

## Beoordelingscriteria

| Criteria | Uitmuntend                                                                                       | Voldoende                                                                                                              | Onvoldoende                                 |
| -------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | Het toevoegen van een transactie is volledig geïmplementeerd volgens alle best practices uit de lessen. | Het toevoegen van een transactie is geïmplementeerd, maar niet volgens de best practices uit de lessen, of werkt slechts gedeeltelijk. | Het toevoegen van een transactie werkt helemaal niet. |

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in zijn oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.