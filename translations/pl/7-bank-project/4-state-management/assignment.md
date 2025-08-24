<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-24T13:47:54+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "pl"
}
-->
# Implementacja dialogu "Dodaj transakcję"

## Instrukcje

Nasza aplikacja bankowa wciąż nie posiada jednej ważnej funkcji: możliwości dodawania nowych transakcji. 
Korzystając ze wszystkiego, czego nauczyłeś się w czterech poprzednich lekcjach, zaimplementuj dialog "Dodaj transakcję":

- Dodaj przycisk "Dodaj transakcję" na stronie głównej (dashboard)
- Możesz stworzyć nową stronę z szablonem HTML lub użyć JavaScriptu, aby pokazać/ukryć HTML dialogu bez opuszczania strony głównej (możesz użyć właściwości [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) lub klas CSS)
- Upewnij się, że obsługujesz [dostępność dla klawiatury i czytników ekranu](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) dla dialogu
- Zaimplementuj formularz HTML do wprowadzania danych
- Utwórz dane JSON na podstawie danych z formularza i wyślij je do API
- Zaktualizuj stronę główną nowymi danymi

Sprawdź [specyfikację API serwera](../api/README.md), aby dowiedzieć się, które API należy wywołać i jaki jest oczekiwany format JSON.

Oto przykład rezultatu po ukończeniu zadania:

![Zrzut ekranu przedstawiający przykładowy dialog "Dodaj transakcję"](../../../../7-bank-project/4-state-management/images/dialog.png)

## Kryteria oceny

| Kryterium | Wzorowe                                                                                         | Zadowalające                                                                                                           | Wymaga poprawy                              |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|           | Dodawanie transakcji jest zaimplementowane w pełni, zgodnie ze wszystkimi najlepszymi praktykami z lekcji. | Dodawanie transakcji jest zaimplementowane, ale niezgodnie z najlepszymi praktykami z lekcji lub działa tylko częściowo. | Dodawanie transakcji w ogóle nie działa.    |

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.