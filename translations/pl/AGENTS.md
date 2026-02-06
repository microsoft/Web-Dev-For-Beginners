# AGENTS.md

## Przegląd projektu

To repozytorium z kursem edukacyjnym do nauczania podstaw tworzenia stron internetowych dla początkujących. Program nauczania to kompleksowy, 12-tygodniowy kurs stworzony przez Microsoft Cloud Advocates, zawierający 24 praktyczne lekcje obejmujące JavaScript, CSS i HTML.

### Kluczowe komponenty

- **Materiał edukacyjny**: 24 zorganizowane lekcje pogrupowane w moduły projektowe
- **Projekty praktyczne**: Terrarium, Gra na pisanie, Rozszerzenie przeglądarki, Gra kosmiczna, Aplikacja bankowa, Edytor kodu i Asystent czatu AI
- **Interaktywne quizy**: 48 quizów po 3 pytania każdy (oceny przed i po lekcji)
- **Wsparcie wielojęzyczne**: Automatyczne tłumaczenia na 50+ języków za pomocą GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (dla projektów AI)

### Architektura

- Edukacyjne repozytorium z strukturą opartą na lekcjach
- Każdy folder z lekcją zawiera README, przykłady kodu i rozwiązania
- Projekty samodzielne w osobnych katalogach (quiz-app, różne projekty lekcji)
- System tłumaczeń używający GitHub Actions (co-op-translator)
- Dokumentacja udostępniana przez Docsify i dostępna jako PDF

## Komendy do konfiguracji

To repozytorium jest przeznaczone głównie do konsumpcji materiałów edukacyjnych. Aby pracować z konkretnymi projektami:

### Podstawowa konfiguracja repozytorium

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Konfiguracja Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Uruchom serwer deweloperski
npm run build      # Buduj do produkcji
npm run lint       # Uruchom ESLint
```

### API projektu Bank

```bash
cd 7-bank-project/api
npm install
npm start          # Uruchom serwer API
npm run lint       # Uruchom ESLint
npm run format     # Formatuj za pomocą Prettier
```

### Projekty Rozszerzenia przeglądarki

```bash
cd 5-browser-extension/solution
npm install
# Postępuj zgodnie z instrukcjami ładowania rozszerzeń specyficznymi dla przeglądarki
```

### Projekty Gry kosmicznej

```bash
cd 6-space-game/solution
npm install
# Otwórz index.html w przeglądarce lub użyj Live Servera
```

### Projekt czatu (backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Ustaw zmienną środowiskową GITHUB_TOKEN
python api.py
```

## Przebieg pracy programistycznej

### Dla osób dodających treści

1. **Utwórz fork repozytorium** na swoim koncie GitHub
2. **Sklonuj swój fork** lokalnie
3. **Utwórz nową gałąź** dla swoich zmian
4. Dokonaj zmian w treści lekcji lub przykładach kodu
5. Testuj zmiany w odpowiednich katalogach projektów
6. Złóż pull request zgodnie z wytycznymi dotyczącymi współpracy

### Dla uczących się

1. Zrób fork lub sklonuj repozytorium
2. Przechodź kolejno do folderów lekcji
3. Czytaj pliki README dla każdej lekcji
4. Wypełnij quizy przed lekcją na https://ff-quizzes.netlify.app/web/
5. Pracuj nad przykładami kodu w folderach lekcji
6. Wykonuj zadania i wyzwania
7. Podejmij quizy po zakończeniu lekcji

### Praca na żywo w trakcie rozwoju

- **Dokumentacja**: Uruchom `docsify serve` w katalogu głównym (port 3000)
- **Quiz App**: Uruchom `npm run dev` w katalogu quiz-app
- **Projekty**: Używaj rozszerzenia VS Code Live Server dla projektów HTML
- **Projekty API**: Uruchom `npm start` w odpowiednich katalogach API

## Instrukcje testowania

### Testowanie Quiz App

```bash
cd quiz-app
npm run lint       # Sprawdź problemy ze stylem kodu
npm run build      # Zweryfikuj, czy budowanie się powiodło
```

### Testowanie Bank API

```bash
cd 7-bank-project/api
npm run lint       # Sprawdź błędy stylu kodu
node server.js     # Zweryfikuj, czy serwer uruchamia się bez błędów
```

### Ogólne podejście do testowania

- To repozytorium edukacyjne, bez kompleksowych testów automatycznych
- Testowanie manualne koncentruje się na:
  - Poprawnym działaniu przykładów kodu bez błędów
  - Prawidłowym działaniu linków w dokumentacji
  - Pomyślnym przebiegu budowy projektów
  - Przykładach zgodnych z najlepszymi praktykami

### Weryfikacja przed wysłaniem PR

- Uruchom `npm run lint` w katalogach z package.json
- Sprawdź poprawność linków markdown
- Testuj przykłady kodu w przeglądarce lub Node.js
- Sprawdź czy tłumaczenia zachowują poprawną strukturę

## Wytyczne dotyczące stylu kodu

### JavaScript

- Używaj nowoczesnej składni ES6+
- Stosuj konfiguracje ESLint dostępne w projektach
- Używaj znaczących nazw zmiennych i funkcji dla jasności edukacyjnej
- Dodawaj komentarze wyjaśniające koncepcje dla uczących się
- Formatowanie za pomocą Prettier tam gdzie to skonfigurowano

### HTML/CSS

- Semantyczne elementy HTML5
- Zasady responsywnego projektowania
- Jasna konwencja nazewnictwa klas
- Komentarze wyjaśniające techniki CSS dla uczących się

### Python

- Wytyczne stylu PEP 8
- Jasne, edukacyjne przykłady kodu
- Wskazówki typów tam, gdzie pomagają w uczeniu się

### Dokumentacja Markdown

- Jasna hierarchia nagłówków
- Bloki kodu ze specyfikacją języka
- Linki do dodatkowych zasobów
- Zrzuty ekranu i obrazy w katalogach `images/`
- Tekst alternatywny dla obrazów dla dostępności

### Organizacja plików

- Lekcje ponumerowane kolejno (1-getting-started-lessons, 2-js-basics itd.)
- Każdy projekt ma katalog `solution/` i często `start/` lub `your-work/`
- Obrazy przechowywane w folderach lekcji `images/`
- Tłumaczenia w strukturze `translations/{language-code}/`

## Budowanie i wdrażanie

### Wdrażanie Quiz App (Azure Static Web Apps)

quiz-app jest skonfigurowany pod wdrożenie na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tworzy folder dist/
# Wdraża za pomocą GitHub Actions workflow przy pushu do main
```

Konfiguracja Azure Static Web Apps:
- **Lokalizacja aplikacji**: `/quiz-app`
- **Lokalizacja wyjściowa**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generowanie PDF dokumentacji

```bash
npm install                    # Zainstaluj docsify-to-pdf
npm run convert               # Wygeneruj PDF z docs
```

### Dokumentacja Docsify

```bash
npm install -g docsify-cli    # Zainstaluj Docsify globalnie
docsify serve                 # Serwuj na localhost:3000
```

### Budowy specyficzne dla projektów

Każdy katalog projektu może mieć własny proces budowania:
- Projekty Vue: `npm run build` tworzy bundlery produkcyjne
- Projekty statyczne: brak kroku kompilacji, pliki serwowane bezpośrednio

## Zasady dotyczące pull requestów

### Format tytułu

Używaj jasnych, opisowych tytułów wskazujących obszar zmian:
- `[Quiz-app] Dodaj nowy quiz do lekcji X`
- `[Lesson-3] Popraw literówkę w projekcie terrarium`
- `[Translation] Dodaj tłumaczenie na hiszpański dla lekcji 5`
- `[Docs] Aktualizuj instrukcje konfiguracji`

### Wymagane kontrole

Przed złożeniem PR:

1. **Jakość kodu**:
   - Uruchom `npm run lint` w zmienionych katalogach projektów
   - Napraw wszystkie błędy i ostrzeżenia lintingu

2. **Weryfikacja budowy**:
   - Uruchom `npm run build` jeśli dotyczy
   - Upewnij się, że nie ma błędów budowania

3. **Weryfikacja linków**:
   - Przetestuj wszystkie linki markdown
   - Sprawdź, czy odwołania do obrazów działają

4. **Przegląd treści**:
   - Korekta pod kątem ortografii i gramatyki
   - Upewnij się, że przykłady kodu są poprawne i edukacyjne
   - Zweryfikuj, że tłumaczenia zachowują oryginalne znaczenie

### Wymagania dotyczące wkładu

- Zgoda na Microsoft CLA (automatyczna weryfikacja przy pierwszym PR)
- Przestrzeganie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Szczegółowe wytyczne w [CONTRIBUTING.md](./CONTRIBUTING.md)
- Odniesienie numerów issue w opisie PR, jeśli dotyczy

### Proces przeglądu

- PR są przeglądane przez opiekunów i społeczność
- Priorytetem jest jasność edukacyjna
- Przykłady kodu powinny stosować bieżące najlepsze praktyki
- Tłumaczenia weryfikowane pod kątem poprawności i dopasowania kulturowego

## System tłumaczeń

### Automatyczne tłumaczenie

- Wykorzystuje GitHub Actions z workflow co-op-translator
- Tłumaczy automatycznie na 50+ języków
- Pliki źródłowe w głównych katalogach
- Pliki tłumaczone w katalogach `translations/{language-code}/`

### Dodawanie ręcznych poprawek tłumaczeń

1. Znajdź plik w `translations/{language-code}/`
2. Wprowadź poprawki z zachowaniem struktury
3. Upewnij się, że przykłady kodu pozostają funkcjonalne
4. Przetestuj wszelkie lokalizowane treści quizów

### Metadane tłumaczenia

Pliki tłumaczone zawierają nagłówek metadanych:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Debugowanie i rozwiązywanie problemów

### Częste problemy

**Quiz app nie uruchamia się**:
- Sprawdź wersję Node.js (zalecane v14+)
- Usuń `node_modules` i `package-lock.json`, potem `npm install`
- Sprawdź konflikty portów (domyślnie Vite używa portu 5173)

**Serwer API się nie uruchamia**:
- Sprawdź minimalną wersję Node.js (node >=10)
- Sprawdź, czy port nie jest zajęty
- Upewnij się, że wszystkie zależności zostały zainstalowane (`npm install`)

**Rozszerzenie przeglądarki się nie ładuje**:
- Sprawdź poprawność manifest.json
- Sprawdź konsolę przeglądarki pod kątem błędów
- Postępuj zgodnie z instrukcjami instalacji specyficznymi dla przeglądarki

**Problemy z projektem czatu Python**:
- Upewnij się, że pakiet OpenAI jest zainstalowany: `pip install openai`
- Sprawdź, czy zmienna środowiskowa GITHUB_TOKEN jest ustawiona
- Zweryfikuj uprawnienia dostępu do GitHub Models

**Docsify nie udostępnia dokumentacji**:
- Zainstaluj docsify-cli globalnie: `npm install -g docsify-cli`
- Uruchom z katalogu głównego repozytorium
- Sprawdź istnienie pliku `docs/_sidebar.md`

### Wskazówki dotyczące środowiska deweloperskiego

- Używaj VS Code z rozszerzeniem Live Server dla projektów HTML
- Zainstaluj rozszerzenia ESLint i Prettier dla spójnego formatowania
- Używaj DevTools przeglądarki do debugowania JavaScript
- Dla projektów Vue zainstaluj przeglądarkowe rozszerzenie Vue DevTools

### Rozważania dotyczące wydajności

- Duża liczba plików tłumaczeń (50+ języków) powoduje duże klony pełne
- Używaj shallow clone jeśli pracujesz tylko z treścią: `git clone --depth 1`
- Wyłącz tłumaczenia z wyszukiwań przy pracy z angielską zawartością
- Procesy budowania mogą być wolne podczas pierwszego uruchomienia (npm install, kompilacja Vite)

## Rozważania bezpieczeństwa

### Zmienne środowiskowe

- Klucze API nigdy nie powinny być commitowane do repozytorium
- Używaj plików `.env` (już w `.gitignore`)
- Udokumentuj wymagane zmienne środowiskowe w plikach README projektów

### Projekty Python

- Używaj środowisk wirtualnych: `python -m venv venv`
- Aktualizuj zależności
- Tokeny GitHub powinny mieć minimalne wymagane uprawnienia

### Dostęp do GitHub Models

- Wymagane Personal Access Tokens (PAT) do modeli GitHub
- Tokeny przechowuj jako zmienne środowiskowe
- Nigdy nie commituj tokenów ani danych uwierzytelniających

## Dodatkowe uwagi

### Grupa docelowa

- Zupełni początkujący w tworzeniu stron internetowych
- Studenci i samoucy
- Nauczyciele korzystający z programu w klasach
- Treści zaprojektowane z myślą o dostępności i stopniowym rozwoju umiejętności

### Filozofia edukacyjna

- Podejście projektowe do nauki
- Częste sprawdzanie wiedzy (quizy)
- Ćwiczenia praktyczne z kodowaniem
- Przykłady zastosowań w rzeczywistych sytuacjach
- Skupienie na podstawach przed frameworkami

### Utrzymanie repozytorium

- Aktywna społeczność uczących się i współtwórców
- Regularne aktualizacje zależności i treści
- Monitorowanie problemów i dyskusji przez opiekunów
- Automatyczne aktualizacje tłumaczeń przez GitHub Actions

### Powiązane zasoby

- [Moduły Microsoft Learn](https://docs.microsoft.com/learn/)
- [Zasoby Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) polecany dla uczących się
- Dodatkowe kursy: AI generatywne, Data Science, ML, IoT

### Praca z konkretnymi projektami

Szczegółowe instrukcje dotyczące poszczególnych projektów znajdują się w plikach README:
- `quiz-app/README.md` - aplikacja quizowa Vue 3
- `7-bank-project/README.md` - aplikacja bankowa z uwierzytelnianiem
- `5-browser-extension/README.md` - rozwój rozszerzenia przeglądarki
- `6-space-game/README.md` - tworzenie gry na canvasie
- `9-chat-project/README.md` - projekt asystenta czatu AI

### Struktura monorepo

Choć to nie klasyczne monorepo, to repozytorium zawiera wiele niezależnych projektów:
- Każda lekcja jest samodzielna
- Projekty nie współdzielą zależności
- Pracuj nad pojedynczymi projektami bez wpływu na inne
- Sklonuj całe repozytorium dla pełnego doświadczenia kursu

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:
Niniejszy dokument został przetłumaczony przy użyciu automatycznego serwisu tłumaczeniowego AI [Co-op Translator](https://github.com/Azure/co-op-translator). Choć dokładamy starań, aby tłumaczenie było jak najbardziej precyzyjne, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym powinien być uznawany za źródło wiążące. W przypadku informacji krytycznych zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->