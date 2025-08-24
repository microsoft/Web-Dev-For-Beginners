<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-24T13:42:04+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "pl"
}
-->
# Ulepszanie trasowania

## Instrukcje

Deklaracja tras zawiera obecnie tylko identyfikator szablonu do użycia. Jednak podczas wyświetlania nowej strony czasami potrzeba czegoś więcej. Ulepszmy naszą implementację trasowania, dodając dwie dodatkowe funkcje:

- Nadaj tytuły każdemu szablonowi i aktualizuj tytuł okna za pomocą tego nowego tytułu, gdy zmienia się szablon.
- Dodaj opcję uruchamiania kodu po zmianie szablonu. Chcemy, aby w konsoli deweloperskiej pojawiał się komunikat `'Dashboard is shown'` za każdym razem, gdy wyświetlana jest strona dashboardu.

## Kryteria oceny

| Kryterium | Wzorowe                                                                                                                          | Wystarczające                                                                                                                                                                              | Wymaga poprawy                                       |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|           | Obie funkcje są zaimplementowane i działają. Tytuł i dodanie kodu działają również dla nowej trasy dodanej w deklaracji `routes`. | Obie funkcje działają, ale ich zachowanie jest zakodowane na stałe i nie można ich skonfigurować za pomocą deklaracji `routes`. Dodanie trzeciej trasy z tytułem i kodem działa częściowo. | Jedna z funkcji jest brakująca lub nie działa poprawnie. |

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.