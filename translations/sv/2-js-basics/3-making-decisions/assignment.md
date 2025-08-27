<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-26T21:42:07+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "sv"
}
-->
# Operatorer

## Instruktioner

Experimentera med operatorer. Här är ett förslag på ett program du kan implementera:

Du har en grupp studenter från två olika betygssystem.

### Första betygssystemet

Ett betygssystem definieras som betyg från 1-5 där 3 och högre innebär att du klarar kursen.

### Andra betygssystemet

Det andra betygssystemet har följande betyg: `A, A-, B, B-, C, C-` där `A` är det högsta betyget och `C` är det lägsta godkända betyget.

### Uppgiften

Givet följande array `allStudents` som representerar alla studenter och deras betyg, skapa en ny array `studentsWhoPass` som innehåller alla studenter som klarar kursen.

> TIP, använd en for-loop och if...else samt jämförelseoperatorer:

```javascript
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
```

## Bedömningskriterier

| Kriterier | Exemplariskt                  | Tillräckligt                  | Behöver förbättras              |
| --------- | ----------------------------- | ----------------------------- | ------------------------------- |
|           | Komplett lösning presenteras  | Delvis lösning presenteras    | Lösning med fel presenteras     |

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.