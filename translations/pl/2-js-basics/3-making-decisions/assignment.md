<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-24T12:15:10+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "pl"
}
-->
# Operatory

## Instrukcje

Pobaw się operatorami. Oto propozycja programu, który możesz zaimplementować:

Masz zestaw studentów z dwóch różnych systemów oceniania.

### Pierwszy system oceniania

Jeden system oceniania definiuje oceny w skali od 1 do 5, gdzie 3 i więcej oznacza zaliczenie kursu.

### Drugi system oceniania

Drugi system oceniania ma następujące oceny: `A, A-, B, B-, C, C-`, gdzie `A` to najwyższa ocena, a `C` to najniższa ocena pozwalająca zaliczyć.

### Zadanie

Mając poniższą tablicę `allStudents`, która reprezentuje wszystkich studentów i ich oceny, skonstruuj nową tablicę `studentsWhoPass`, zawierającą wszystkich studentów, którzy zdali.

> TIP, użyj pętli for, if...else oraz operatorów porównania:

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

## Kryteria oceny

| Kryteria | Wzorowe                       | Wystarczające                 | Wymaga poprawy                  |
| -------- | ----------------------------- | ----------------------------- | ------------------------------- |
|          | Przedstawiono kompletne rozwiązanie | Przedstawiono częściowe rozwiązanie | Przedstawiono rozwiązanie z błędami |

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.