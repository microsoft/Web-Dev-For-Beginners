<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-26T21:42:19+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "da"
}
-->
# Operatorer

## Instruktioner

Leg med operatorer. Her er et forslag til et program, du kan implementere:

Du har et sæt af studerende fra to forskellige karaktersystemer.

### Første karaktersystem

Et karaktersystem er defineret som karakterer fra 1-5, hvor 3 og derover betyder, at du består kurset.

### Andet karaktersystem

Det andet karaktersystem har følgende karakterer: `A, A-, B, B-, C, C-`, hvor `A` er den højeste karakter, og `C` er den laveste beståede karakter.

### Opgaven

Givet følgende array `allStudents`, som repræsenterer alle studerende og deres karakterer, skal du konstruere et nyt array `studentsWhoPass`, der indeholder alle studerende, der består.

> TIP: Brug en for-løkke, if...else og sammenligningsoperatorer:

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

## Vurderingskriterier

| Kriterier | Fremragende                   | Tilstrækkelig                 | Kræver forbedring               |
| --------- | ----------------------------- | ----------------------------- | ------------------------------- |
|           | Komplet løsning præsenteres  | Delvis løsning præsenteres    | Løsning med fejl præsenteres    |

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.