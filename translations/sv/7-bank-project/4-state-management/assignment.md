<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-26T23:13:01+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "sv"
}
-->
# Implementera dialogrutan "Lägg till transaktion"

## Instruktioner

Vår bankapp saknar fortfarande en viktig funktion: möjligheten att lägga till nya transaktioner.
Använd allt du har lärt dig under de fyra tidigare lektionerna för att implementera en dialogruta för "Lägg till transaktion":

- Lägg till en knapp "Lägg till transaktion" på instrumentpanelsidan
- Skapa antingen en ny sida med en HTML-mall, eller använd JavaScript för att visa/dölja dialogens HTML utan att lämna instrumentpanelsidan (du kan använda [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)-egenskapen för detta, eller CSS-klasser)
- Se till att du hanterar [tangentbords- och skärmläsartillgänglighet](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) för dialogen
- Implementera ett HTML-formulär för att ta emot inmatningsdata
- Skapa JSON-data från formulärdata och skicka det till API:et
- Uppdatera instrumentpanelsidan med de nya uppgifterna

Titta på [serverns API-specifikationer](../api/README.md) för att se vilket API du behöver anropa och vilket JSON-format som förväntas.

Här är ett exempel på resultat efter att uppgiften är slutförd:

![Skärmdump som visar ett exempel på dialogrutan "Lägg till transaktion"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.sv.png)

## Bedömningskriterier

| Kriterier | Exemplariskt                                                                                     | Tillräckligt                                                                                                           | Behöver förbättras                          |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|           | Att lägga till en transaktion är implementerat fullständigt och följer alla bästa praxis från lektionerna. | Att lägga till en transaktion är implementerat, men följer inte bästa praxis från lektionerna eller fungerar endast delvis. | Att lägga till en transaktion fungerar inte alls. |

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.