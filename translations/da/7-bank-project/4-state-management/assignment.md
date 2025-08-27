<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-26T23:13:09+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "da"
}
-->
# Implementer "Tilføj transaktion"-dialog

## Instruktioner

Vores bankapp mangler stadig en vigtig funktion: muligheden for at indtaste nye transaktioner.  
Brug alt, hvad du har lært i de fire foregående lektioner, til at implementere en "Tilføj transaktion"-dialog:

- Tilføj en "Tilføj transaktion"-knap på dashboard-siden
- Opret enten en ny side med en HTML-skabelon, eller brug JavaScript til at vise/skjule dialogens HTML uden at forlade dashboard-siden (du kan bruge [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)-attributten til dette, eller CSS-klasser)
- Sørg for at håndtere [tastatur- og skærmlæsertilgængelighed](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) for dialogen
- Implementer en HTML-formular til at modtage inputdata
- Opret JSON-data fra formularens input og send det til API'et
- Opdater dashboard-siden med de nye data

Se [server-API-specifikationerne](../api/README.md) for at finde ud af, hvilket API du skal kalde, og hvilket JSON-format der forventes.

Her er et eksempel på resultatet efter at have fuldført opgaven:

![Skærmbillede, der viser et eksempel på "Tilføj transaktion"-dialog](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.da.png)

## Bedømmelseskriterier

| Kriterier | Fremragende                                                                                     | Tilstrækkelig                                                                                                          | Kræver Forbedring                           |
| --------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|           | Tilføjelse af en transaktion er implementeret fuldstændigt i overensstemmelse med bedste praksis fra lektionerne. | Tilføjelse af en transaktion er implementeret, men ikke i overensstemmelse med bedste praksis fra lektionerne, eller fungerer kun delvist. | Tilføjelse af en transaktion fungerer slet ikke. |

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.