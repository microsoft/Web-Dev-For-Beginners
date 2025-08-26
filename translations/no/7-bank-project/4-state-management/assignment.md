<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-26T23:13:18+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "no"
}
-->
# Implementer dialogen "Legg til transaksjon"

## Instruksjoner

Vår bankapp mangler fortsatt en viktig funksjon: muligheten til å legge inn nye transaksjoner.
Ved å bruke alt du har lært i de fire foregående leksjonene, implementer en dialog for "Legg til transaksjon":

- Legg til en knapp for "Legg til transaksjon" på dashbord-siden
- Enten opprett en ny side med en HTML-mal, eller bruk JavaScript for å vise/skjule dialogens HTML uten å forlate dashbord-siden (du kan bruke [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)-egenskapen for dette, eller CSS-klasser)
- Sørg for at du håndterer [tastatur- og skjermlesertilgjengelighet](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) for dialogen
- Implementer et HTML-skjema for å motta inputdata
- Opprett JSON-data fra skjemaet og send det til API-et
- Oppdater dashbord-siden med de nye dataene

Se på [serverens API-spesifikasjoner](../api/README.md) for å finne ut hvilket API du må kalle og hva som er det forventede JSON-formatet.

Her er et eksempelresultat etter å ha fullført oppgaven:

![Skjermbilde som viser et eksempel på dialogen "Legg til transaksjon"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.no.png)

## Vurderingskriterier

| Kriterier | Eksemplarisk                                                                                     | Tilfredsstillende                                                                                                      | Trenger forbedring                          |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|           | Å legge til en transaksjon er fullstendig implementert i henhold til alle beste praksiser fra leksjonene. | Å legge til en transaksjon er implementert, men ikke i henhold til beste praksiser fra leksjonene, eller fungerer bare delvis. | Å legge til en transaksjon fungerer ikke i det hele tatt. |

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.