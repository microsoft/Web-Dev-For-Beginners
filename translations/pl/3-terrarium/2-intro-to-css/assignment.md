<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bee6762d4092a13fc7c338814963f980",
  "translation_date": "2026-01-06T19:52:35+00:00",
  "source_file": "3-terrarium/2-intro-to-css/assignment.md",
  "language_code": "pl"
}
-->
# CSS Refactoring Assignment

## Cel

Przekształć swój projekt terrarium, aby używał nowoczesnych technik układu CSS! Zrefaktoryzuj obecne podejście z pozycjonowaniem absolutnym, wprowadzając **Flexbox** lub **CSS Grid** dla bardziej utrzymywalnego, responsywnego projektu. To zadanie stanowi wyzwanie, aby zastosować nowoczesne standardy CSS, jednocześnie zachowując atrakcyjny wygląd Twojego terrarium.

Zrozumienie kiedy i jak używać różnych metod układu to kluczowa umiejętność współczesnego tworzenia stron internetowych. To ćwiczenie łączy tradycyjne techniki pozycjonowania z nowoczesnymi systemami układów CSS.

## Instrukcje zadania

### Faza 1: Analiza i planowanie
1. **Przejrzyj obecny kod terrarium** - Zidentyfikuj elementy, które obecnie używają pozycjonowania absolutnego
2. **Wybierz metodę układu** - Zdecyduj, czy Flexbox czy CSS Grid lepiej odpowiada Twoim celom projektowym
3. **Szkicuj nową strukturę układu** - Zaplanuj, jak będą zorganizowane kontenery i elementy roślin

### Faza 2: Implementacja
1. **Stwórz nową wersję** swojego projektu terrarium w osobnym folderze
2. **Zaktualizuj strukturę HTML** w razie potrzeby, aby wspierała wybraną metodę układu
3. **Refaktoryzuj CSS**, używając Flexbox lub CSS Grid zamiast pozycjonowania absolutnego
4. **Zachowaj spójność wizualną** – upewnij się, że rośliny i słoik terrarium znajdują się w tych samych miejscach
5. **Zaakceptuj responsywne zachowanie** – układ powinien płynnie dostosowywać się do różnych rozmiarów ekranów

### Faza 3: Testowanie i dokumentacja
1. **Testowanie na różnych przeglądarkach** – sprawdź, czy projekt działa w Chrome, Firefox, Edge i Safari
2. **Testowanie responsywności** – sprawdź układ na ekranach mobilnych, tabletach i desktopach
3. **Dokumentacja** – dodaj komentarze do CSS wyjaśniające wybory dotyczące układu
4. **Zrzuty ekranu** – zrób zdjęcia swojego terrarium w różnych przeglądarkach i rozmiarach ekranów

## Wymagania techniczne

### Implementacja układu
- **Wybierz JEDNĄ metodę**: zastosuj Flexbox LUB CSS Grid (nie obie na tych samych elementach)
- **Projekt responsywny**: używaj jednostek względnych (`rem`, `em`, `%`, `vw`, `vh`), zamiast stałych pikseli
- **Dostępność**: zachowaj właściwą semantykę HTML i tekst alternatywny
- **Jakość kodu**: stosuj spójne konwencje nazewnictwa i logiczną organizację CSS

### Nowoczesne cechy CSS do uwzględnienia
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Wymagania dotyczące wsparcia przeglądarek
- **Chrome/Edge**: 2 najnowsze wersje
- **Firefox**: 2 najnowsze wersje  
- **Safari**: 2 najnowsze wersje
- **Przeglądarki mobilne**: iOS Safari, Chrome Mobile

## Produkty końcowe

1. **Zaktualizowany plik HTML** z ulepszoną strukturą semantyczną
2. **Zrefaktoryzowany plik CSS** używający nowoczesnych technik układu
3. **Zbiór zrzutów ekranu** pokazujących kompatybilność międzyprzeglądarkową:
   - Widok desktopowy (1920x1080)
   - Widok tabletowy (768x1024) 
   - Widok mobilny (375x667)
   - Co najmniej 2 różne przeglądarki
4. **Plik README.md** dokumentujący:
   - Wybór układu (Flexbox vs Grid) oraz uzasadnienie
   - Trudności napotkane podczas refaktoryzacji
   - Notatki o kompatybilności przeglądarek
   - Instrukcje uruchomienia Twojego kodu

## Kryteria oceny

| Kryteria | Wzorcowa (4) | Zaawansowana (3) | Średnia (2) | Początkowa (1) |
|----------|--------------|------------------|-------------|----------------|
| **Implementacja układu** | Mistrzowskie użycie Flexbox/Grid z zaawansowanymi funkcjami; w pełni responsywne | Poprawna implementacja z dobrą responsywnością | Podstawowa implementacja z drobnymi problemami responsywności | Niekompletna lub błędna implementacja układu |
| **Jakość kodu** | Czysty, dobrze zorganizowany CSS z znaczącymi komentarzami i spójnym nazewnictwem | Dobra organizacja z kilkoma komentarzami | Wystarczająca organizacja z minimalnymi komentarzami | Słaba organizacja; trudna do zrozumienia |
| **Kompatybilność międzyprzeglądarkowa** | Perfekcyjna spójność we wszystkich wymaganych przeglądarkach z zrzutami ekranu | Dobra kompatybilność z udokumentowanymi drobnymi różnicami | Niektóre problemy z kompatybilnością, które nie psują funkcjonalności | Poważne problemy lub brak testów kompatybilności |
| **Projekt responsywny** | Wyjątkowe podejście mobile-first z płynnymi punktami przerwania | Dobre zachowanie responsywne z odpowiednimi punktami przerwania | Podstawowe funkcje responsywne z pewnymi problemami układu | Ograniczone lub wadliwe zachowanie responsywne |
| **Dokumentacja** | Kompleksowy README z szczegółowymi wyjaśnieniami i wglądem | Dobra dokumentacja obejmująca wszystkie wymagane elementy | Podstawowa dokumentacja z minimalnymi wyjaśnieniami | Niepełna lub brak dokumentacji |

## Przydatne zasoby

### Przewodniki po metodach układu
- 📖 [Kompletny przewodnik po Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Kompletny przewodnik po CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - wybierz odpowiednie narzędzie](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Narzędzia do testowania przeglądarek
- 🛠️ [Tryb responsywny w narzędziach deweloperskich przeglądarki](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - wsparcie funkcji](https://caniuse.com/)
- 🛠️ [BrowserStack - testowanie międzyprzeglądarkowe](https://www.browserstack.com/)

### Narzędzia jakości kodu
- ✅ [Weryfikator CSS](https://jigsaw.w3.org/css-validator/)
- ✅ [Weryfikator HTML](https://validator.w3.org/)
- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Dodatkowe wyzwania

🌟 **Zaawansowane układy**: Zaimplementuj zarówno Flexbox, JAK i Grid w różnych częściach projektu  
🌟 **Integracja animacji**: Dodaj przejścia lub animacje CSS kompatybilne z nowym układem  
🌟 **Tryb ciemny**: Zaimplementuj przełącznik motywu bazujący na właściwościach niestandardowych CSS  
🌟 **Zapytania kontenerowe**: Użyj nowoczesnych technik zapytań kontenerowych do responsywności na poziomie komponentów

> 💡 **Pamiętaj**: Celem nie jest tylko sprawienie, by działało, ale zrozumienie, DLACZEGO wybrana metoda układu jest najlepszym rozwiązaniem dla tego wyzwania projektowego!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą serwisu tłumaczeń AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo że dokładamy starań, aby tłumaczenie było jak najbardziej precyzyjne, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego języku źródłowym powinien być uznawany za źródło wiarygodne. W przypadku informacji krytycznych zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z wykorzystania tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->