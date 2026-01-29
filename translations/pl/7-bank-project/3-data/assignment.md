# Refaktoryzacja kodu i zadanie z dokumentacji

## Cele nauki

Wykonując to zadanie, poćwiczysz podstawowe umiejętności programistyczne, z których korzystają zawodowi programiści na co dzień. Nauczysz się organizować kod, aby był łatwy w utrzymaniu, redukować powtórzenia poprzez abstrakcję oraz dokumentować swoją pracę dla przyszłych programistów (w tym dla siebie!).

Czysty, dobrze udokumentowany kod jest kluczowy w rzeczywistych projektach webowych, gdzie pracuje wielu programistów, a bazy kodu ewoluują z czasem.

## Przegląd zadania

Plik `app.js` Twojej aplikacji bankowej znacząco urósł wraz z funkcjami logowania, rejestracji i pulpitu użytkownika. Nadszedł czas, aby zrefaktoryzować ten kod, stosując profesjonalne praktyki programistyczne, poprawiając czytelność, utrzymywalność oraz zmniejszając powielanie kodu.

## Instrukcje

Przekształć swój aktualny kod `app.js`, realizując te trzy podstawowe techniki refaktoryzacji:

### 1. Wyodrębnij stałe konfiguracyjne

**Zadanie**: Utwórz sekcję konfiguracji u góry pliku z wielokrotnie używanymi stałymi.

**Wskazówki realizacji:**
- Wyodrębnij bazowy URL API serwera (aktualnie zakodowany w wielu miejscach)
- Utwórz stałe dla komunikatów o błędach występujących w wielu funkcjach
- Rozważ wyodrębnienie ścieżek routingu i identyfikatorów elementów, które są używane wielokrotnie

**Przykładowa struktura:**
```javascript
// Stałe konfiguracyjne
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Stwórz zunifikowaną funkcję zapytań

**Zadanie**: Zbuduj wielokrotnego użytku funkcję `sendRequest()`, która wyeliminuje zduplikowany kod pomiędzy `createAccount()` i `getAccount()`.

**Wymagania:**
- Obsługa zarówno żądań GET, jak i POST
- Zawiera odpowiednie zarządzanie błędami
- Wspiera różne końcówki URL
- Przyjmuje opcjonalne dane w ciele zapytania

**Wskazówki do podpisu funkcji:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Twoja implementacja tutaj
}
```

### 3. Dodaj profesjonalną dokumentację kodu

**Zadanie**: Udokumentuj swój kod jasnymi, pomocnymi komentarzami wyjaśniającymi "dlaczego" stojące za logiką.

**Standardy dokumentacji:**
- Dodaj dokumentację funkcji opisującą cel, parametry i wartości zwracane
- Dołącz komentarze inline dla skomplikowanej logiki lub reguł biznesowych
- Grupuj powiązane funkcje razem z nagłówkami sekcji
- Wyjaśnij wszelkie nieoczywiste wzorce kodu lub obejścia specyficzne dla przeglądarek

**Przykładowy styl dokumentacji:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Zapobiegaj domyślnemu przesłaniu formularza, aby obsłużyć to za pomocą JavaScript
  event.preventDefault();
  
  // Twoja implementacja...
}
```

## Kryteria sukcesu

Twój zrefaktoryzowany kod powinien demonstrować następujące profesjonalne praktyki rozwojowe:

### Wzorcowa realizacja
- ✅ **Stałe**: Wszystkie magiczne stringi i URL-e są wyodrębnione do wyraźnie nazwanych stałych
- ✅ **Zasada DRY**: Wspólna logika zapytań jest skonsolidowana w wielokrotnego użytku funkcję `sendRequest()`
- ✅ **Dokumentacja**: Funkcje posiadają jasne komentarze JSDoc wyjaśniające cel i parametry
- ✅ **Organizacja**: Kod jest logicznie pogrupowany z nagłówkami sekcji i spójnym formatowaniem
- ✅ **Obsługa błędów**: Ulepszona obsługa błędów przy użyciu nowej funkcji zapytań

### Wystarczająca realizacja
- ✅ **Stałe**: Większość powtarzających się wartości została wyodrębniona, z nielicznymi wartościami zakodowanymi na sztywno
- ✅ **Faktoryzacja**: Podstawowa funkcja `sendRequest()` utworzona, ale może nie obsługiwać wszystkich przypadków brzegowych
- ✅ **Komentarze**: Kluczowe funkcje są udokumentowane, choć niektóre wyjaśnienia mogłyby być pełniejsze
- ✅ **Czytelność**: Kod jest generalnie dobrze zorganizowany z kilkoma obszarami do poprawy

### Wymaga poprawy
- ❌ **Stałe**: Wiele magicznych stringów i URL-i pozostaje zakodowanych na sztywno w całym pliku
- ❌ **Powielanie**: Znaczne powielanie kodu pomiędzy podobnymi funkcjami
- ❌ **Dokumentacja**: Brak lub niewystarczające komentarze nie wyjaśniające celu kodu
- ❌ **Organizacja**: Kod pozbawiony wyraźnej struktury i logicznego grupowania

## Testowanie zrefaktoryzowanego kodu

Po refaktoryzacji upewnij się, że Twoja aplikacja bankowa działa poprawnie:

1. **Przetestuj wszystkie ścieżki użytkownika**: Rejestracja, logowanie, wyświetlanie pulpitu i obsługa błędów
2. **Zweryfikuj wywołania API**: Potwierdź, że funkcja `sendRequest()` działa zarówno dla tworzenia konta, jak i jego pobierania
3. **Sprawdź scenariusze błędów**: Testuj niepoprawne dane logowania i błędy sieciowe
4. **Przejrzyj konsolę**: Upewnij się, że podczas refaktoryzacji nie pojawiły się nowe błędy

## Wytyczne dotyczące zgłaszania

Prześlij swój zrefaktoryzowany plik `app.js` z:
- Jasnymi nagłówkami sekcji organizującymi różne funkcjonalności
- Spójnym formatowaniem i wcięciami w kodzie
- Kompletna dokumentacją JSDoc dla wszystkich funkcji
- Krótkim komentarzem u góry wyjaśniającym podejście do refaktoryzacji

**Bonus**: Stwórz prosty plik dokumentacji kodu (`CODE_STRUCTURE.md`), który wyjaśni architekturę Twojej aplikacji i jak współpracują różne funkcje.

## Połączenie z rzeczywistością

To zadanie odzwierciedla rodzaj utrzymania kodu, który profesjonaliści wykonują regularnie. W środowisku produkcyjnym:
- **Przeglądy kodu** oceniają czytelność i utrzymywalność podobnie jak to zadanie
- **Dług technologiczny** narasta, gdy kod nie jest regularnie refaktoryzowany i dokumentowany
- **Współpraca zespołowa** zależy od jasnego, dobrze udokumentowanego kodu, który nowi członkowie zespołu mogą zrozumieć
- **Poprawki błędów** są znacznie łatwiejsze w dobrze zorganizowanych bazach kodu z odpowiednimi abstrakcjami

Umiejętności, które tutaj ćwiczysz — wyodrębnianie stałych, eliminowanie powtórzeń, oraz tworzenie jasnej dokumentacji — są fundamentem profesjonalnego rozwoju oprogramowania.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Dokument ten został przetłumaczony przy użyciu automatycznej usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było jak najbardziej precyzyjne, prosimy pamiętać, że automatyczne przekłady mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym należy traktować jako wersję wiążącą. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->