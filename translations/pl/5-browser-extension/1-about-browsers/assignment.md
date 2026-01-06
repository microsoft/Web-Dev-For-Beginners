<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2026-01-06T19:29:17+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "pl"
}
-->
# Zadanie: Przeprojektuj swoje rozszerzenie przeglądarki

## Przegląd

Teraz, gdy zbudowałeś strukturę HTML swojego rozszerzenia przeglądarki dotyczącego śladu węglowego, czas, aby uczynić je wizualnie atrakcyjnym i przyjaznym dla użytkownika. Świetny design poprawia doświadczenia użytkownika i sprawia, że Twoje rozszerzenie jest bardziej profesjonalne i angażujące.

Twoje rozszerzenie zawiera podstawowe style CSS, ale to zadanie wyzwala Cię do stworzenia unikalnej identyfikacji wizualnej, która odzwierciedla Twój osobisty styl, jednocześnie zachowując doskonałą użyteczność.

## Instrukcje

### Część 1: Analiza obecnego projektu

Przed wprowadzeniem zmian, przeanalizuj istniejącą strukturę CSS:

1. **Zlokalizuj** pliki CSS w projekcie rozszerzenia
2. **Przejrzyj** aktualne podejście do stylizacji i schemat kolorów
3. **Zidentyfikuj** obszary do poprawy w układzie, typografii i hierarchii wizualnej
4. **Rozważ**, jak design wspiera cele użytkownika (łatwe wypełnianie formularza i czytelne wyświetlanie danych)

### Część 2: Zaprojektuj własne style

Stwórz spójną oprawę wizualną, która obejmuje:

**Schemat kolorów:**
- Wybierz główną paletę kolorów odwołującą się do tematów środowiskowych
- Zapewnij wystarczający kontrast dla dostępności (użyj narzędzi takich jak WebAIM contrast checker)
- Zastanów się, jak kolory będą wyglądać w różnych motywach przeglądarek

**Typografia:**
- Wybierz czytelne czcionki dobrze działające przy małych rozmiarach rozszerzenia
- Ustal jasną hierarchię z odpowiednimi rozmiarami i wagami fontów
- Zadbaj o czytelność tekstu w jasnych i ciemnych motywach przeglądarki

**Układ i odstępy:**
- Ulepsz wizualną organizację elementów formularza i wyświetlanie danych
- Dodaj odpowiednie paddingi i marginesy dla lepszej czytelności
- Uwzględnij zasady projektowania responsywnego dla różnych rozmiarów ekranów

### Część 3: Wdrożenie projektu

Zmodyfikuj pliki CSS, aby zaimplementować swój projekt:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Kluczowe obszary do stylizacji:**
- **Elementy formularza**: pola wprowadzania, etykiety i przycisk zatwierdzania
- **Wyświetlanie wyników**: kontener danych, styl tekstu oraz stany ładowania
- **Elementy interaktywne**: efekty po najechaniu, stany przycisków i przejścia
- **Ogólny układ**: odstępy kontenera, kolory tła i hierarchia wizualna

### Część 4: Testowanie i dopracowanie

1. **Zbuduj** rozszerzenie przy pomocy `npm run build`
2. **Załaduj** zaktualizowane rozszerzenie do przeglądarki
3. **Przetestuj** wszystkie stany wizualne (wprowadzanie formularza, ładowanie, wyświetlanie wyników, błędy)
4. **Zweryfikuj** dostępność za pomocą narzędzi developerskich przeglądarki
5. **Dopracuj** style na podstawie rzeczywistego użytkowania

## Wyzwania kreatywne

### Poziom podstawowy
- Zaktualizuj kolory i czcionki, tworząc spójny motyw
- Popraw odstępy i wyrównanie w całym interfejsie
- Dodaj subtelne efekty po najechaniu na elementy interaktywne

### Poziom średnio zaawansowany
- Zaprojektuj niestandardowe ikony lub grafiki dla rozszerzenia
- Zaimplementuj płynne przejścia między różnymi stanami
- Stwórz unikalną animację ładowania dla wywołań API

### Poziom zaawansowany
- Zaprojektuj wiele opcji motywów (jasny/ciemny/wysoki kontrast)
- Zaimplementuj responsywny design dla różnych rozmiarów okna przeglądarki
- Dodaj mikro-interakcje, które poprawią doświadczenie użytkownika

## Wytyczne dotyczące zgłoszenia

Twoje ukończone zadanie powinno zawierać:

- **Zmodyfikowane pliki CSS** z własną stylizacją
- **Zrzuty ekranu** pokazujące rozszerzenie w różnych stanach (formularz, ładowanie, wyniki)
- **Krótki opis** (2-3 zdania) wyjaśniający wybory projektowe i sposób, w jaki poprawiają doświadczenie użytkownika

## Kryteria oceny

| Kryteria | Wzorowy (4) | Dobry (3) | Rozwijający się (2) | Początkujący (1) |
|----------|-------------|-----------|---------------------|------------------|
| **Projekt wizualny** | Kreatywny, spójny design zwiększający użyteczność i odzwierciedlający silne zasady projektowania | Dobre wybory stylistyczne z konsekwentną grafiką oraz jasną hierarchią wizualną | Podstawowe ulepszenia designu z pewnymi problemami konsekwencji | Minimalne zmiany styli lub niespójny design |
| **Funkcjonalność** | Wszystkie style działają perfekcyjnie we wszystkich stanach i środowiskach przeglądarek | Style działają dobrze z drobnymi problemami w wyjątkowych przypadkach | Większość stylów działa, ale z pewnymi problemami wyświetlania | Znaczące problemy ze stylami, które wpływają na użyteczność |
| **Jakość kodu** | Czysty, dobrze zorganizowany CSS z sensownymi nazwami klas i efektywnymi selektorami | Dobry układ CSS z odpowiednim użyciem selektorów i właściwości | Akceptowalny CSS z pewnymi problemami organizacji | Słaba struktura CSS lub zbyt skomplikowane style |
| **Dostępność** | Doskonały kontrast kolorów, czytelne czcionki i uwzględnienie potrzeb osób z niepełnosprawnościami | Dobre praktyki dostępności z drobnymi obszarami do poprawy | Podstawowe rozważania dostępności z pewnymi problemami | Ograniczona dbałość o wymagania związane z dostępnością |

## Wskazówki na sukces

> 💡 **Wskazówka projektowa**: Zacznij od subtelnych zmian i stopniowo przechodź do bardziej dramatycznych stylizacji. Małe poprawki w typografii i odstępach często mają duży wpływ na postrzeganą jakość.

**Zalecane praktyki:**
- **Testuj** rozszerzenie zarówno w jasnym, jak i ciemnym motywie przeglądarki
- **Używaj** jednostek względnych (em, rem) dla lepszej skalowalności
- **Utrzymuj** spójne odstępy za pomocą własności CSS
- **Weź pod uwagę**, jak Twój design będzie wyglądał u użytkowników z różnymi potrzebami wzrokowymi
- **Waliduj** CSS, aby upewnić się, że jest poprawny składniowo

> ⚠️ **Częsty błąd**: Nie poświęcaj użyteczności na rzecz atrakcyjności wizualnej. Twoje rozszerzenie powinno być zarówno piękne, jak i funkcjonalne.

**Pamiętaj, aby:**
- **Zachować** ważne informacje łatwo czytelne
- **Zapewnić**, że przyciski i elementy interaktywne są łatwe do kliknięcia
- **Utrzymać** wyraźną wizualną informację zwrotną dla działań użytkownika
- **Testować** projekt z prawdziwymi danymi, a nie tylko tekstem zastępczym

Powodzenia w tworzeniu rozszerzenia przeglądarki, które jest zarówno funkcjonalne, jak i wizualnie olśniewające!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że tłumaczenia automatyczne mogą zawierać błędy lub niedokładności. Oryginalny dokument w jego rodzimym języku powinien być uważany za źródło autorytatywne. W przypadku informacji o istotnym znaczeniu zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->