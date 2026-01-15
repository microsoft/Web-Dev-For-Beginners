<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2026-01-06T19:42:06+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "pl"
}
-->
# Implementacja dialogu "Dodaj transakcję"

## Przegląd

Twoja aplikacja bankowa posiada teraz solidne zarządzanie stanem i trwałość danych, ale brakuje jej kluczowej funkcji, której potrzebują prawdziwe aplikacje bankowe: możliwości dodawania własnych transakcji przez użytkowników. W tym zadaniu zaimplementujesz kompletny dialog "Dodaj transakcję", który będzie się płynnie integrować z istniejącym systemem zarządzania stanem.

To zadanie łączy wszystkie umiejętności, których nauczyłeś się podczas czterech lekcji bankowości: szablonowanie HTML, obsługę formularzy, integrację z API oraz zarządzanie stanem.

## Cele nauki

Po ukończeniu tego zadania:
- **Stworzysz** przyjazny dla użytkownika interfejs dialogu do wprowadzania danych
- **Zaimplementujesz** dostępny design formularza z obsługą klawiatury i czytników ekranu
- **Zintegrujesz** nowe funkcje z istniejącym systemem zarządzania stanem
- **Poćwiczysz** komunikację z API i obsługę błędów
- **Zastosujesz** nowoczesne wzorce tworzenia stron internetowych w praktycznej funkcji

## Instrukcje

### Krok 1: Przycisk Dodaj transakcję

**Utwórz** przycisk "Dodaj transakcję" na stronie pulpitu, który użytkownicy łatwo znajdą i będą mogli z niego skorzystać.

**Wymagania:**
- **Umieść** przycisk w logicznym miejscu na pulpicie
- **Użyj** jasnego, zachęcającego tekstu na przycisku
- **Ostyluj** przycisk zgodnie z istniejącym designem UI
- **Zadbaj** o dostępność przycisku z poziomu klawiatury

### Krok 2: Implementacja dialogu

Wybierz jeden z tych dwóch sposobów implementacji dialogu:

**Opcja A: Osobna strona**
- **Stwórz** nowy szablon HTML dla formularza transakcji
- **Dodaj** nową ścieżkę do swojego systemu routingu
- **Zaimplementuj** nawigację do i z strony formularza

**Opcja B: Modalny dialog (zalecane)**
- **Użyj** JavaScript do pokazania/ukrycia dialogu bez opuszczania pulpitu
- **Zaimplementuj** przy użyciu [właściwości `hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) lub klas CSS
- **Stwórz** płynne doświadczenie użytkownika z właściwym zarządzaniem fokusem

### Krok 3: Implementacja dostępności

**Zadbaj**, aby Twój dialog spełniał [standardy dostępności dla dialogów modalnych](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Nawigacja klawiaturą:**
- **Obsłuż** klawisz Escape do zamknięcia dialogu
- **Zatrzymaj** fokus w dialogu podczas jego otwarcia
- **Przywróć** fokus do przycisku wywołującego po zamknięciu

**Obsługa czytników ekranu:**
- **Dodaj** odpowiednie etykiety i role ARIA
- **Ogłoś** otwieranie/zamykanie dialogu czytnikom ekranu
- **Zapewnij** jasne etykiety pól formularza i komunikaty o błędach

### Krok 4: Tworzenie formularza

**Zaprojektuj** formularz HTML zbierający dane transakcji:

**Pola obowiązkowe:**
- **Data**: kiedy miała miejsce transakcja
- **Opis**: na co była transakcja
- **Kwota**: wartość transakcji (dodatnia dla dochodów, ujemna dla wydatków)

**Funkcje formularza:**
- **Zweryfikuj** dane użytkownika przed wysłaniem formularza
- **Zapewnij** jasne komunikaty błędów dla niepoprawnych danych
- **Dodaj** pomocniczy tekst zastępczy i etykiety
- **Ostyluj** w zgodzie z istniejącym wyglądem

### Krok 5: Integracja z API

**Połącz** formularz z backendowym API:

**Kroki implementacji:**
- **Przejrzyj** [specyfikacje API serwera](../api/README.md) dotyczące odpowiedniego endpointu i formatu danych
- **Utwórz** dane JSON z danych formularza
- **Wyślij** dane do API z odpowiednią obsługą błędów
- **Wyświetl** użytkownikowi komunikaty o sukcesie lub porażce
- **Obsłuż** błędy sieciowe w sposób przyjazny

### Krok 6: Integracja z zarządzaniem stanu

**Zaktualizuj** pulpit po dodaniu nowej transakcji:

**Wymagania dotyczące integracji:**
- **Odśwież** dane konta po poprawnym dodaniu transakcji
- **Zaktualizuj** wyświetlanie pulpitu bez konieczności przeładowania strony
- **Upewnij się**, że nowa transakcja pojawia się natychmiast
- **Zachowaj** spójność stanu podczas całego procesu

## Specyfikacje techniczne

**Szczegóły endpointu API:**  
Odniesienie do [dokumentacji API serwera](../api/README.md) zawierającej:  
- Wymagany format JSON danych transakcji  
- Metodę HTTP i adres endpointu  
- Oczekiwany format odpowiedzi  
- Obsługę odpowiedzi błędów

**Oczekiwany rezultat:**  
Po ukończeniu tego zadania Twoja aplikacja bankowa powinna mieć w pełni funkcjonalną funkcję "Dodaj transakcję", która wygląda i działa profesjonalnie:

![Zrzut ekranu pokazujący przykładowy dialog "Dodaj transakcję"](../../../../translated_images/pl/dialog.93bba104afeb79f1.webp)

## Testowanie implementacji

**Testy funkcjonalne:**  
1. **Sprawdź**, czy przycisk "Dodaj transakcję" jest wyraźnie widoczny i dostępny  
2. **Przetestuj**, czy dialog otwiera się i zamyka poprawnie  
3. **Potwierdź**, że walidacja formularza działa dla wszystkich obowiązkowych pól  
4. **Sprawdź**, czy udane transakcje pojawiają się natychmiast na pulpicie  
5. **Zadbaj**, aby obsługa błędów działała dla niepoprawnych danych i problemów z siecią

**Testy dostępności:**  
1. **Nawiguj** przez cały proces używając wyłącznie klawiatury  
2. **Przetestuj** z czytnikiem ekranu, aby potwierdzić poprawne ogłoszenia  
3. **Sprawdź**, czy zarządzanie fokusem działa poprawnie  
4. **Zweryfikuj**, że wszystkie elementy formularza mają odpowiednie etykiety

## Kryteria oceny

| Kryterium | Wzorowe | Wystarczające | Wymaga poprawy |
| -------- | --------- | -------- | ----------------- |
| **Funkcjonalność** | Funkcja dodawania transakcji działa bezbłędnie, zapewnia doskonałe doświadczenie użytkownika i stosuje wszystkie dobre praktyki z lekcji | Funkcja dodawania transakcji działa poprawnie, ale może nieco odbiegać od najlepszych praktyk lub ma drobne problemy z użytecznością | Funkcja dodawania transakcji działa częściowo lub ma poważne problemy z użytecznością |
| **Jakość kodu** | Kod jest dobrze zorganizowany, stosuje ustalone wzorce, zawiera odpowiednią obsługę błędów i płynnie integruje się z istniejącym systemem zarządzania stanem | Kod działa, ale może mieć problemy z organizacją lub niespójne wzorce względem istniejącej bazy kodu | Kod ma poważne problemy strukturalne lub słabo integruje się z istniejącymi wzorcami |
| **Dostępność** | Pełna obsługa nawigacji klawiaturą, kompatybilność z czytnikami ekranu oraz zgodność z wytycznymi WCAG z doskonałym zarządzaniem fokusowaniem | Podstawowe funkcje dostępności zaimplementowane, lecz mogą brakować niektórych usprawnień nawigacji klawiaturą lub czytników | Ograniczone lub brak implementacji dostępności |
| **Doświadczenie użytkownika** | Intuicyjny, dopracowany interfejs z jasną informacją zwrotną, płynne interakcje i profesjonalny wygląd | Dobre doświadczenie użytkownika z drobnymi obszarami do poprawy w zakresie informacji zwrotnej lub designu wizualnego | Słabe doświadczenie użytkownika z niewyraźnym interfejsem lub brakiem informacji zwrotnej |

## Dodatkowe wyzwania (opcjonalne)

Po ukończeniu podstawowych wymagań rozważ następujące ulepszenia:

**Rozszerzone funkcje:**
- **Dodaj** kategorie transakcji (jedzenie, transport, rozrywka itd.)
- **Zaimplementuj** walidację danych z natychmiastowym feedbackiem
- **Stwórz** skróty klawiaturowe dla zaawansowanych użytkowników
- **Dodaj** możliwość edycji i usuwania transakcji

**Zaawansowana integracja:**
- **Zaimplementuj** funkcję cofania ostatnio dodanych transakcji
- **Dodaj** masowy import transakcji z plików CSV
- **Stwórz** wyszukiwanie i filtrowanie transakcji
- **Zaimplementuj** eksport danych

Te opcjonalne funkcje pozwolą Ci przećwiczyć bardziej zaawansowane koncepcje web developmentu i stworzyć bardziej kompletną aplikację bankową!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo że dokładamy starań, aby tłumaczenie było jak najdokładniejsze, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym powinien być traktowany jako źródło wiążące. W przypadku informacji krytycznych zalecamy skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->