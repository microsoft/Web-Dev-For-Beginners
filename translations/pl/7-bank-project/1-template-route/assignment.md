<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2026-01-06T19:35:27+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "pl"
}
-->
# Ulepszanie routingu

## Instrukcje

Teraz, gdy zbudowałeś podstawowy system routingu, czas wzbogacić go o profesjonalne funkcje, które poprawią doświadczenia użytkownika i dostarczą lepsze narzędzia dla programistów. Aplikacje produkcyjne potrzebują więcej niż tylko przełączania szablonów – wymagają dynamicznych tytułów stron, hooków cyklu życia oraz rozszerzalnych architektur.

W tym zadaniu rozszerzysz swoją implementację routingu o dwie niezbędne funkcje, które są powszechnie stosowane w produkcyjnych aplikacjach webowych. Te ulepszenia sprawią, że Twoja aplikacja bankowa będzie bardziej dopracowana i stworzą fundament pod przyszłą funkcjonalność.

Deklaracja tras zawiera obecnie tylko identyfikator szablonu do użycia. Jednak czasem przy wyświetlaniu nowej strony potrzeba trochę więcej. Ulepszmy naszą implementację routingu, dodając dwie dodatkowe funkcje:

### Funkcja 1: Dynamiczne tytuły stron
**Cel:** Nadać tytuły każdemu szablonowi i aktualizować tytuł okna na ten nowy tytuł przy zmianie szablonu.

**Dlaczego to ważne:**
- **Poprawia** doświadczenie użytkownika, pokazując opisowe tytuły kart przeglądarki
- **Zwiększa** dostępność dla czytników ekranu i technologii wspomagających  
- **Zapewnia** lepsze konteksty zakładek i historii przeglądarki
- **Stosuje** najlepsze praktyki profesjonalnego rozwoju webowego

**Podejście do implementacji:**
- **Rozszerz** obiekt tras o informacje z tytułem dla każdej trasy
- **Zmodyfikuj** funkcję `updateRoute()`, aby dynamicznie aktualizowała `document.title`
- **Przetestuj**, czy tytuły zmieniają się poprawnie podczas nawigacji między ekranami

### Funkcja 2: Hooki cyklu życia trasy  
**Cel:** Dodaj opcję uruchamiania kodu po zmianie szablonu. Chcemy wypisać `'Dashboard is shown'` w konsoli deweloperskiej za każdym razem, gdy wyświetlana jest strona dashboardu.

**Dlaczego to ważne:**
- **Umożliwia** wykonywanie niestandardowej logiki przy ładowaniu konkretnych tras
- **Zapewnia** hooki do analiz, logowania lub kodu inicjalizującego
- **Tworzy** fundament pod bardziej złożone zachowania tras
- **Demonstruje** wzorzec obserwatora w rozwoju webowym

**Podejście do implementacji:**
- **Dodaj** opcjonalną funkcję callback do konfiguracji tras
- **Uruchamiaj** funkcję callback (jeśli jest obecna) po zakończeniu renderowania szablonu
- **Zapewnij**, że funkcja działa dla każdej trasy, która ma zdefiniowany callback
- **Przetestuj**, czy komunikat w konsoli pojawia się podczas odwiedzania dashboardu

## Kryteria oceny

| Kryterium | Wzorowe                                                                                                                           | Wystarczające                                                                                                                                                                              | Wymaga poprawy                                        |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|           | Obie funkcje są zaimplementowane i działają. Dodanie tytułu i kodu działa również dla nowej trasy dodanej w deklaracji `routes`. | Obie funkcje działają, ale zachowanie jest na stałe zakodowane i nie da się go konfigurować przez deklarację `routes`. Dodanie trzeciej trasy z tytułem i kodem działa częściowo lub nie działa. | Brakuje jednej z funkcji lub nie działa poprawnie.  |

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony przy użyciu usługi tłumaczeń AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy starań, aby tłumaczenie było jak najdokładniejsze, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym należy traktować jako źródło autorytatywne. W przypadku istotnych informacji zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użytkowania tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->