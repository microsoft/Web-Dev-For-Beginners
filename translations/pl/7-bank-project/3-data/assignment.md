<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-24T13:37:31+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "pl"
}
-->
# Refaktoryzacja i komentowanie kodu

## Instrukcje

W miarę rozwoju bazy kodu, ważne jest, aby regularnie refaktoryzować kod, aby był czytelny i łatwy do utrzymania. Dodaj komentarze i zrefaktoryzuj swój `app.js`, aby poprawić jakość kodu:

- Wyodrębnij stałe, takie jak podstawowy URL API serwera
- Zgrupuj podobny kod: na przykład możesz stworzyć funkcję `sendRequest()`, aby połączyć kod używany zarówno w `createAccount()`, jak i `getAccount()`
- Przeorganizuj kod, aby był łatwiejszy do odczytania, i dodaj komentarze

## Kryteria oceny

| Kryterium | Wzorowe                                                                                                                                                     | Wystarczające                                                                                     | Wymaga poprawy                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|           | Kod jest skomentowany, dobrze zorganizowany w różnych sekcjach i łatwy do odczytania. Stałe są wyodrębnione, a zrefaktoryzowana funkcja `sendRequest()` została utworzona. | Kod jest czysty, ale można go jeszcze poprawić poprzez dodanie większej liczby komentarzy, wyodrębnienie stałych lub refaktoryzację. | Kod jest chaotyczny, nieskomentowany, stałe nie są wyodrębnione, a kod nie jest zrefaktoryzowany. |

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby zapewnić precyzję, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.