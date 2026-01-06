<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2026-01-06T19:32:32+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "pl"
}
-->
# Stylizuj swoją aplikację bankową za pomocą nowoczesnego CSS

## Przegląd projektu

Przekształć swoją funkcjonalną aplikację bankową w atrakcyjną wizualnie, profesjonalnie wyglądającą aplikację internetową, korzystając z nowoczesnych technik CSS. Stworzysz spójny system projektowy, który poprawi doświadczenie użytkownika, zachowując jednocześnie zasady dostępności i projektowania responsywnego.

To zadanie zachęca do zastosowania współczesnych wzorców projektowania stron internetowych, wdrożenia spójnej tożsamości wizualnej oraz stworzenia interfejsu, który użytkownicy uznają za atrakcyjny i intuicyjny w nawigacji.

## Instrukcje

### Krok 1: Przygotuj swój arkusz stylów

**Stwórz podstawę CSS:**

1. **Utwórz** nowy plik o nazwie `styles.css` w katalogu głównym projektu  
2. **Podłącz** arkusz stylów w pliku `index.html`:  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Zacznij** od resetu CSS i nowoczesnych ustawień domyślnych:  
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```
  
### Krok 2: Wymagania systemu projektowego

**Zaimplementuj te podstawowe elementy projektowe:**

#### Paleta kolorów
- **Kolor podstawowy**: Wybierz profesjonalny kolor dla przycisków i wyróżnień  
- **Kolor dodatkowy**: Kolor uzupełniający dla akcentów i akcji drugorzędnych  
- **Kolory neutralne**: Odcienie szarości dla tekstu, obramowań i tła  
- **Kolory sukcesu/błędu**: Zieleń dla stanów sukcesu, czerwień dla błędów  

#### Typografia
- **Hierarchia nagłówków**: Wyraźne rozróżnienie między elementami H1, H2 i H3  
- **Tekst podstawowy**: Czytelny rozmiar czcionki (minimum 16px) i odpowiednia wysokość linii  
- **Etykiety formularzy**: Jasny, dostępny styl tekstu  

#### Układ i odstępy
- **Spójne odstępy**: Używaj skali odstępów (8px, 16px, 24px, 32px)  
- **System siatki**: Zorganizowany układ formularzy i sekcji treści  
- **Projekt responsywny**: Mobilne podejście z punktami przerwania  

### Krok 3: Stylizacja komponentów

**Stylizuj te konkretne komponenty:**

#### Formularze
- **Pola formularzy**: Profesjonalne obramowania, stany fokus oraz stylizacja walidacji  
- **Przyciski**: Efekty hover, stany nieaktywne oraz wskaźniki ładowania  
- **Etykiety**: Jasne pozycjonowanie i wskaźniki pól obowiązkowych  
- **Komunikaty o błędach**: Widoczna stylizacja błędów oraz pomocne treści  

#### Nawigacja
- **Nagłówek**: Czysta, markowa przestrzeń nawigacyjna  
- **Linki**: Wyraźne stany hover i wskaźniki aktywności  
- **Logo/Tytuł**: Charakterystyczny element brandingowy  

#### Obszary treści
- **Sekcje**: Wyraźne oddzielenie wizualne między różnymi obszarami  
- **Karty**: Jeżeli używasz układów kartowych, dodaj cienie i obramowania  
- **Tła**: Odpowiednie wykorzystanie przestrzeni białej i subtelnych teł  

### Krok 4: Zaawansowane funkcje (opcjonalne)

**Rozważ implementację tych zaawansowanych funkcji:**  
- **Tryb ciemny**: Przełącznik między jasnym a ciemnym motywem  
- **Animacje**: Subtelne przejścia i mikrointerakcje  
- **Stany ładowania**: Wizualne informacje zwrotne podczas wysyłania formularzy  
- **Responsywne obrazy**: Optymalizowane obrazy dla różnych rozmiarów ekranów  

## Inspiracje projektowe

**Charakterystyka nowoczesnej aplikacji bankowej:**  
- **Czysty, minimalistyczny design** z dużą ilością przestrzeni białej  
- **Profesjonalne schematy kolorystyczne** (odcienie niebieskiego, zielonego lub wyrafinowane neutralne)  
- **Wyraźna hierarchia wizualna** z widocznymi przyciskami wezwania do działania  
- **Dostępne kontrasty kolorów** spełniające wytyczne WCAG  
- **Responsywne układy mobilne** działające na wszystkich urządzeniach  

## Wymagania techniczne

### Organizacja CSS  
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```
  
### Wymagania dostępności  
- **Kontrast kolorów**: Zapewnij co najmniej 4.5:1 dla zwykłego tekstu  
- **Wskaźniki fokusu**: Widoczne stany fokusu dla nawigacji klawiaturą  
- **Etykiety formularzy**: Poprawne powiązanie z polami formularza  
- **Projekt responsywny**: Użyteczny na ekranach o szerokości od 320px do 1920px  

## Kryteria oceny

| Kryterium | Wzorowy (A) | Kompetentny (B) | Rozwijający się (C) | Wymaga poprawy (F) |
|----------|-------------|-----------------|--------------------|-------------------|
| **System projektowy** | Implementuje kompleksowy system projektowy z konsekwentnymi kolorami, typografią i odstępami | Stosuje spójną stylizację z jasnymi wzorcami projektowymi i dobrą hierarchią wizualną | Podstawowa stylizacja z pewnymi problemami spójności lub brakującymi elementami | Minimalna stylizacja z niekonsekwentnymi lub sprzecznymi projektami |
| **Doświadczenie użytkownika** | Tworzy intuicyjny, profesjonalny interfejs o doskonałej użyteczności i atrakcyjności wizualnej | Zapewnia dobre doświadczenie użytkownika z jasną nawigacją i czytelną zawartością | Podstawowa użyteczność z potrzebą ulepszeń UX | Słaba użyteczność, trudności w nawigacji lub czytaniu |
| **Implementacja techniczna** | Stosuje nowoczesne techniki CSS, uporządkowaną strukturę kodu i najlepsze praktyki | Efektywne wykorzystanie CSS z dobrą organizacją i odpowiednimi technikami | CSS działa poprawnie, ale może brakować organizacji lub nowoczesnych podejść | Słaba implementacja CSS z problemami technicznymi lub kompatybilnością przeglądarek |
| **Projekt responsywny** | W pełni responsywny projekt działający doskonale na wszystkich rozmiarach urządzeń | Dobre zachowanie responsywności z drobnymi problemami na niektórych rozmiarach ekranów | Podstawowa responsywność z pewnymi problemami układu | Brak responsywności lub znaczące problemy na urządzeniach mobilnych |
| **Dostępność** | Spełnia wytyczne WCAG z doskonałą nawigacją klawiaturą i wsparciem czytników ekranu | Dobre praktyki dostępności z odpowiednim kontrastem i wskaźnikami fokusu | Podstawowe rozważania dostępności z niektórymi brakującymi elementami | Słaba dostępność, trudna w obsłudze dla osób z niepełnosprawnościami |

## Wytyczne dotyczące zgłoszenia

**Dołącz do swojego zgłoszenia:**  
- **styles.css**: Twój kompletny arkusz stylów  
- **Zaktualizowany HTML**: Wszelkie modyfikacje HTML, które wprowadziłeś  
- **Zrzuty ekranu**: Obrazy pokazujące Twój projekt na desktopie i urządzeniach mobilnych  
- **README**: Krótki opis Twoich decyzji projektowych i palety kolorów  

**Dodatkowe punkty za:**  
- **Własne właściwości CSS** dla łatwego zarządzania motywami  
- **Zaawansowane funkcje CSS** takie jak Grid, Flexbox lub animacje CSS  
- **Optymalizację wydajności** jak zoptymalizowany CSS i minimalny rozmiar pliku  
- **Testy międzyprzeglądarkowe** zapewniające kompatybilność z różnymi przeglądarkami  

> 💡 **Praktyczna wskazówka**: Zacznij od projektowania na urządzenia mobilne, a następnie ulepszaj dla większych ekranów. To podejście mobile-first pozwala na prawidłowe działanie aplikacji na wszystkich urządzeniach i jest zgodne z najlepszymi praktykami nowoczesnego tworzenia stron internetowych.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony przy użyciu usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się o jak największą dokładność, prosimy o świadomość, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym należy uznać za źródło autorytatywne. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikłe w związku z użyciem tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->