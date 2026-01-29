# Przyjmij API

## Przegląd

API otwierają nieskończone możliwości kreatywnego tworzenia witryn internetowych! W tym zadaniu wybierzesz zewnętrzne API i zbudujesz rozszerzenie do przeglądarki, które rozwiązuje realny problem lub zapewnia użytkownikom wartościową funkcjonalność.

## Instrukcje

### Krok 1: Wybierz swoje API
Wybierz API z tej wyselekcjonowanej [listy darmowych publicznych API](https://github.com/public-apis/public-apis). Rozważ następujące kategorie:

**Popularne opcje dla początkujących:**
- **Rozrywka**: [Dog CEO API](https://dog.ceo/dog-api/) do losowych zdjęć psów
- **Pogoda**: [OpenWeatherMap](https://openweathermap.org/api) do aktualnych danych pogodowych
- **Cytaty**: [Quotable API](https://quotable.io/) do inspirujących cytatów
- **Wiadomości**: [NewsAPI](https://newsapi.org/) do najnowszych nagłówków
- **Ciekawostki**: [Numbers API](http://numbersapi.com/) do interesujących faktów o liczbach

### Krok 2: Zaplanuj swoje rozszerzenie
Przed kodowaniem odpowiedz na te pytania planistyczne:
- Jaki problem rozwiązuje twoje rozszerzenie?
- Kim jest twój docelowy użytkownik?
- Jakie dane będziesz przechowywać w lokalnej pamięci?
- Jak poradzisz sobie z awariami API lub limitami zapytań?

### Krok 3: Zbuduj swoje rozszerzenie
Twoje rozszerzenie powinno zawierać:

**Wymagane funkcje:**
- Pola formularza dla wszystkich wymaganych parametrów API
- Integracja API z odpowiednim obsługiwaniem błędów
- Lokalna pamięć dla preferencji użytkownika lub kluczy API
- Czysty, responsywny interfejs użytkownika
- Stany ładowania i informowanie użytkownika

**Wymagania dotyczące kodu:**
- Używaj nowoczesnego JavaScript (ES6+)
- Stosuj async/await do wywołań API
- Zawrzyj właściwą obsługę błędów w blokach try/catch
- Dodaj znaczące komentarze wyjaśniające kod
- Stosuj spójne formatowanie kodu

### Krok 4: Testuj i dopracuj
- Testuj rozszerzenie dla różnych danych wejściowych
- Obsługuj przypadki brzegowe (brak internetu, niepoprawne odpowiedzi API)
- Upewnij się, że rozszerzenie działa po ponownym uruchomieniu przeglądarki
- Dodaj przyjazne komunikaty o błędach

## Dodatkowe wyzwania

Wznieś swoje rozszerzenie na wyższy poziom:
- Dodaj wiele punktów końcowych API dla bogatszej funkcjonalności
- Zaimplementuj buforowanie danych, aby zmniejszyć liczbę wywołań API
- Stwórz skróty klawiszowe dla często wykonywanych akcji
- Dodaj funkcje eksportu/importu danych
- Zaimplementuj opcje personalizacji dla użytkownika

## Wymagania dotyczące zgłoszenia

1. **Działające rozszerzenie do przeglądarki**, które pomyślnie integruje się z wybranym API
2. **Plik README**, wyjaśniający:
   - Które API wybrałeś i dlaczego
   - Jak zainstalować i używać rozszerzenia
   - Wszelkie wymagane klucze API lub konfiguracje
   - Zrzuty ekranu pokazujące działanie rozszerzenia
3. **Czysty, komentowany kod** zgodny z nowoczesnymi praktykami JavaScript

## Kryteria oceny

| Kryteria | Wzorcowe (90-100%) | Zaawansowane (80-89%) | Średniozaawansowane (70-79%) | Początkujące (60-69%) |
|----------|--------------------|-----------------------|-----------------------------|-----------------------|
| **Integracja API** | Bezbłędna integracja API z kompleksową obsługą błędów i zarządzaniem przypadkami brzegowymi | Udana integracja API z podstawową obsługą błędów | API działa, ale z ograniczoną obsługą błędów | Integracja API ma poważne problemy |
| **Jakość kodu** | Czysty, dobrze komentowany nowoczesny JavaScript zgodny z najlepszymi praktykami | Dobra struktura kodu z odpowiednimi komentarzami | Kod działa, ale wymaga lepszej organizacji | Słaba jakość kodu z minimalnymi komentarzami |
| **Doświadczenie użytkownika** | Wypolerowany interfejs z doskonałymi stanami ładowania i informowaniem użytkownika | Dobry interfejs z podstawową informacją zwrotną | Podstawowy interfejs działający poprawnie | Słabe doświadczenie użytkownika z mylącym interfejsem |
| **Lokalna pamięć** | Zaawansowane wykorzystanie lokalnej pamięci z walidacją i zarządzaniem danych | Prawidłowa implementacja lokalnej pamięci dla kluczowych funkcji | Podstawowa implementacja lokalnej pamięci | Minimalne lub błędne użycie lokalnej pamięci |
| **Dokumentacja** | Kompleksowy README z instrukcjami konfiguracji i zrzutami ekranu | Dobra dokumentacja obejmująca większość wymagań | Podstawowa dokumentacja, której brakuje niektórych szczegółów | Słaba lub brak dokumentacji |

## Wskazówki na start

1. **Zacznij prosto**: wybierz API, które nie wymaga złożonej autoryzacji
2. **Czytaj dokumentację**: dokładnie poznaj punkty końcowe i odpowiedzi API
3. **Zaplanować interfejs**: naszkicuj interfejs rozszerzenia przed kodowaniem
4. **Testuj często**: buduj krok po kroku i testuj każdą funkcję podczas dodawania
5. **Obsługuj błędy**: zawsze zakładaj, że wywołania API mogą się nie powieść i planuj odpowiednio

## Zasoby

- [Dokumentacja rozszerzeń przeglądarki](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Przewodnik po Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Samouczek Local Storage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Parsowanie i obsługa JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Powodzenia w tworzeniu czegoś przydatnego i kreatywnego! 🚀

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczeń AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo że dążymy do dokładności, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub niedokładności. Oryginalny dokument w jego natywnym języku powinien być traktowany jako źródło ostateczne. W przypadku istotnych informacji zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->