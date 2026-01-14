<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2026-01-06T19:26:57+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "pl"
}
-->
# Analiza witryny pod kątem wydajności

## Przegląd zadania

Analiza wydajności jest kluczową umiejętnością współczesnych programistów webowych. W tym zadaniu przeprowadzisz kompleksowy audyt wydajności rzeczywistej strony internetowej, korzystając zarówno z narzędzi przeglądarkowych, jak i usług zewnętrznych, aby zidentyfikować wąskie gardła i zaproponować strategie optymalizacji.

Twoim zadaniem jest przygotowanie szczegółowego raportu wydajności, który pokaże Twoje zrozumienie zasad wydajności stron internetowych oraz umiejętność efektywnego korzystania z profesjonalnych narzędzi analitycznych.

## Instrukcje do zadania

**Wybierz stronę do analizy** – wybierz jedną z poniższych opcji:
- Popularna strona, której często używasz (serwis informacyjny, media społecznościowe, e-commerce)
- Strona projektu open-source (strony na GitHub Pages, witryny dokumentacyjne)
- Strona lokalnej firmy lub portfolio
- Twój własny projekt lub poprzednie prace kursowe

**Przeprowadź analizę za pomocą wielu narzędzi** wykorzystując co najmniej trzy różne metody:
- **Narzędzia deweloperskie przeglądarki** – użyj zakładki Wydajność (Performance) w Chrome/Edge do szczegółowego profilowania
- **Narzędzia audytowe online** – wypróbuj Lighthouse, GTmetrix lub WebPageTest
- **Analiza sieci** – zbadaj ładowanie zasobów, rozmiary plików i wzorce żądań

**Udokumentuj swoje ustalenia** w kompleksowym raporcie, który powinien zawierać:

### Analiza metryk wydajności
- **Pomiar czasu ładowania** z wielu narzędzi i perspektyw
- Wyniki **Core Web Vitals** (LCP, FID, CLS) i ich znaczenie
- **Podział zasobów** pokazujący, które elementy najbardziej wpływają na czas ładowania
- **Analiza wykresu wodospadu sieci** wskazująca zasoby blokujące

### Identyfikacja problemów
- **Konkretnie zidentyfikowane wąskie gardła wydajności** z danymi wspierającymi
- **Analiza przyczyn źródłowych** wyjaśniająca, dlaczego każdy problem występuje
- **Ocena wpływu na użytkownika** opisująca, jak problemy wpływają na rzeczywistych użytkowników
- **Lista priorytetów** problemów według ich powagi i trudności naprawy

### Rekomendacje optymalizacji
- **Konkretne, możliwe do wdrożenia usprawnienia** z oczekiwanym efektem
- **Strategie wdrożeniowe** dla każdej rekomendacji
- **Nowoczesne najlepsze praktyki** które mogą zostać zastosowane (np. lazy loading, kompresja)
- **Narzędzia i techniki** do ciągłego monitorowania wydajności

## Wymagania badawcze

**Nie ograniczaj się tylko do narzędzi przeglądarki** – rozszerz swoją analizę korzystając z:

**Zewnętrznych usług audytowych:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) – kompleksowe audyty
- [GTmetrix](https://gtmetrix.com/) – wgląd w wydajność i optymalizację
- [WebPageTest](https://www.webpagetest.org/) – testy w warunkach rzeczywistych
- [Pingdom](https://tools.pingdom.com/) – globalny monitoring wydajności

**Specjalistyczne narzędzia analityczne:**
- [Bundle Analyzer](https://bundlephobia.com/) – analiza rozmiaru paczek JavaScript
- [Narzędzia optymalizacji obrazów](https://squoosh.app/) – możliwości optymalizacji zasobów
- [Analiza nagłówków bezpieczeństwa](https://securityheaders.com/) – wpływ zabezpieczeń na wydajność

## Format dostarczonych materiałów

Stwórz profesjonalny raport (2-3 strony), który powinien zawierać:

1. **Streszczenie wykonawcze** – kluczowe wnioski i przegląd rekomendacji
2. **Metodologię** – użyte narzędzia i podejście testowe
3. **Obecną ocenę wydajności** – wyjściowe metryki i pomiary
4. **Zidentyfikowane problemy** – szczegółową analizę problemów z danymi wspierającymi
5. **Rekomendacje** – priorytetowe strategie poprawy
6. **Plan wdrożenia** – krok po kroku plan optymalizacji

**Dołącz dowody wizualne:**
- Zrzuty ekranu z narzędzi analitycznych i metryk
- Wykresy i diagramy prezentujące dane o wydajności
- Porównania przed i po tam, gdzie to możliwe
- Wykresy wodospadu sieci i podziały zasobów

## Kryteria oceny

| Kryterium | Wzorowa (90-100%) | Zadowalająca (70-89%) | Wymaga poprawy (50-69%) |
| --------- | ----------------- | --------------------- | ---------------------- |
| **Głębokość analizy** | Kompleksowa analiza z użyciem 4+ narzędzi, szczegółowymi metrykami, analizą przyczyn i oceną wpływu na użytkownika | Dobra analiza z 3 narzędziami, jasnymi metrykami i podstawową identyfikacją problemów | Podstawowa analiza z 2 narzędziami, ograniczona głębokość i minimalna identyfikacja problemów |
| **Różnorodność narzędzi** | Użycie narzędzi przeglądarki + 3+ zewnętrznych usług z analizą porównawczą i wnioskami z każdego | Użycie narzędzi przeglądarki + 2 zewnętrznych usług z częściową analizą porównawczą | Użycie narzędzi przeglądarki + 1 zewnętrznej usługi z ograniczonym porównaniem |
| **Identyfikacja problemów** | Identyfikacja 5+ specyficznych problemów wydajności z dokładną analizą przyczyn i określonym wpływem | Identyfikacja 3-4 problemów z dobrą analizą i częściową oceną wpływu | Identyfikacja 1-2 problemów z podstawową analizą |
| **Rekomendacje** | Specyficzne, wykonalne zalecenia z detalami wdrożenia, oczekiwanym efektem i nowoczesnymi praktykami | Dobre rekomendacje z pewnym wskazaniem wdrożenia i oczekiwanym wynikiem | Podstawowe zalecenia z ograniczonymi szczegółami wdrożenia |
| **Prezentacja zawodowa** | Raport dobrze zorganizowany, klarowna struktura, dowody wizualne, streszczenie wykonawcze i profesjonalna forma | Dobra organizacja z częściowymi dowodami wizualnymi i jasną strukturą | Podstawowa organizacja z minimalną ilością dowodów wizualnych |

## Efekty uczenia się

Realizując to zadanie, wykażesz się zdolnością do:
- **Stosowania** profesjonalnych narzędzi i metod analizy wydajności
- **Identyfikowania** wąskich gardeł wydajności na podstawie analizy danych
- **Analizowania** związku między jakością kodu a doświadczeniem użytkownika
- **Rekomendowania** konkretnych, wykonalnych strategii optymalizacji
- **Komunikowania** wyników technicznych w profesjonalnym formacie

To zadanie utrwala poznane pojęcia dotyczące wydajności i rozwija praktyczne umiejętności, które wykorzystasz przez całą karierę web developera.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony przy użyciu usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo że dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub niedokładności. Oryginalny dokument w języku źródłowym powinien być uznawany za ostateczne i wiążące źródło informacji. W przypadku ważnych danych zalecamy skorzystanie z profesjonalnego, ludzkiego tłumaczenia. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z wykorzystania tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->