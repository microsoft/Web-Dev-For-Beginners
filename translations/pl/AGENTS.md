<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:26:18+00:00",
  "source_file": "AGENTS.md",
  "language_code": "pl"
}
-->
# AGENTS.md

## Przegląd projektu

To repozytorium edukacyjne służy do nauczania podstaw tworzenia stron internetowych dla początkujących. Program nauczania to kompleksowy 12-tygodniowy kurs opracowany przez Microsoft Cloud Advocates, zawierający 24 praktyczne lekcje obejmujące JavaScript, CSS i HTML.

### Kluczowe elementy

- **Treści edukacyjne**: 24 uporządkowane lekcje zorganizowane w moduły oparte na projektach
- **Projekty praktyczne**: Terrarium, Gra w pisanie, Rozszerzenie przeglądarki, Gra kosmiczna, Aplikacja bankowa, Edytor kodu i Asystent czatu AI
- **Interaktywne quizy**: 48 quizów po 3 pytania każdy (oceny przed/po lekcji)
- **Wsparcie dla wielu języków**: Automatyczne tłumaczenia na ponad 50 języków za pomocą GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (dla projektów AI)

### Architektura

- Repozytorium edukacyjne z strukturą opartą na lekcjach
- Każdy folder lekcji zawiera README, przykłady kodu i rozwiązania
- Samodzielne projekty w oddzielnych katalogach (quiz-app, różne projekty lekcji)
- System tłumaczeń za pomocą GitHub Actions (co-op-translator)
- Dokumentacja udostępniana przez Docsify i dostępna jako PDF

## Polecenia konfiguracji

To repozytorium jest przeznaczone głównie do konsumpcji treści edukacyjnych. Aby pracować z konkretnymi projektami:

### Konfiguracja głównego repozytorium

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Konfiguracja aplikacji quizowej (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API projektu bankowego (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Projekty rozszerzeń przeglądarki

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Projekty gry kosmicznej

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Projekt czatu (backend w Pythonie)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Przepływ pracy deweloperskiej

### Dla współtwórców treści

1. **Sforkuj repozytorium** na swoje konto GitHub
2. **Sklonuj swój fork** lokalnie
3. **Utwórz nową gałąź** dla swoich zmian
4. Wprowadź zmiany w treści lekcji lub przykładach kodu
5. Przetestuj zmiany kodu w odpowiednich katalogach projektów
6. Zgłoś pull requesty zgodnie z wytycznymi dotyczącymi wkładu

### Dla uczących się

1. Sforkuj lub sklonuj repozytorium
2. Przejdź kolejno do katalogów lekcji
3. Przeczytaj pliki README dla każdej lekcji
4. Wykonaj quizy przed lekcją na https://ff-quizzes.netlify.app/web/
5. Pracuj nad przykładami kodu w folderach lekcji
6. Wykonaj zadania i wyzwania
7. Zrób quizy po lekcji

### Rozwój na żywo

- **Dokumentacja**: Uruchom `docsify serve` w katalogu głównym (port 3000)
- **Aplikacja quizowa**: Uruchom `npm run dev` w katalogu quiz-app
- **Projekty**: Użyj rozszerzenia Live Server w VS Code dla projektów HTML
- **Projekty API**: Uruchom `npm start` w odpowiednich katalogach API

## Instrukcje testowania

### Testowanie aplikacji quizowej

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Testowanie API bankowego

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Ogólne podejście do testowania

- To repozytorium edukacyjne nie zawiera kompleksowych testów automatycznych
- Testowanie ręczne koncentruje się na:
  - Uruchamianiu przykładów kodu bez błędów
  - Poprawności linków w dokumentacji
  - Sukcesie kompilacji projektów
  - Przestrzeganiu najlepszych praktyk w przykładach

### Kontrole przed zgłoszeniem

- Uruchom `npm run lint` w katalogach z plikiem package.json
- Zweryfikuj poprawność linków w markdown
- Przetestuj przykłady kodu w przeglądarce lub Node.js
- Sprawdź, czy tłumaczenia zachowują właściwą strukturę

## Wytyczne dotyczące stylu kodu

### JavaScript

- Używaj nowoczesnej składni ES6+
- Przestrzegaj standardowych konfiguracji ESLint dostarczonych w projektach
- Używaj znaczących nazw zmiennych i funkcji dla jasności edukacyjnej
- Dodawaj komentarze wyjaśniające koncepcje dla uczących się
- Formatowanie za pomocą Prettier, jeśli skonfigurowane

### HTML/CSS

- Semantyczne elementy HTML5
- Zasady projektowania responsywnego
- Jasne konwencje nazewnictwa klas
- Komentarze wyjaśniające techniki CSS dla uczących się

### Python

- Wytyczne stylu PEP 8
- Jasne, edukacyjne przykłady kodu
- Podpowiedzi typów tam, gdzie są pomocne dla nauki

### Dokumentacja Markdown

- Jasna hierarchia nagłówków
- Bloki kodu ze specyfikacją języka
- Linki do dodatkowych zasobów
- Zrzuty ekranu i obrazy w katalogach `images/`
- Tekst alternatywny dla obrazów dla dostępności

### Organizacja plików

- Lekcje numerowane sekwencyjnie (1-getting-started-lessons, 2-js-basics, itd.)
- Każdy projekt ma katalogi `solution/` i często `start/` lub `your-work/`
- Obrazy przechowywane w specyficznych dla lekcji folderach `images/`
- Tłumaczenia w strukturze `translations/{language-code}/`

## Budowa i wdrożenie

### Wdrożenie aplikacji quizowej (Azure Static Web Apps)

Aplikacja quizowa jest skonfigurowana do wdrożenia w Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Konfiguracja Azure Static Web Apps:
- **Lokalizacja aplikacji**: `/quiz-app`
- **Lokalizacja wynikowa**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generowanie dokumentacji PDF

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Dokumentacja Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Budowa specyficzna dla projektów

Każdy katalog projektu może mieć własny proces budowy:
- Projekty Vue: `npm run build` tworzy pakiety produkcyjne
- Projekty statyczne: Brak kroku budowy, pliki serwowane bezpośrednio

## Wytyczne dotyczące pull requestów

### Format tytułu

Używaj jasnych, opisowych tytułów wskazujących obszar zmiany:
- `[Quiz-app] Dodaj nowy quiz dla lekcji X`
- `[Lesson-3] Popraw literówkę w projekcie terrarium`
- `[Translation] Dodaj tłumaczenie na hiszpański dla lekcji 5`
- `[Docs] Zaktualizuj instrukcje konfiguracji`

### Wymagane kontrole

Przed zgłoszeniem PR:

1. **Jakość kodu**:
   - Uruchom `npm run lint` w dotkniętych katalogach projektów
   - Napraw wszystkie błędy i ostrzeżenia lintingu

2. **Weryfikacja budowy**:
   - Uruchom `npm run build`, jeśli dotyczy
   - Upewnij się, że nie ma błędów budowy

3. **Walidacja linków**:
   - Przetestuj wszystkie linki w markdown
   - Zweryfikuj poprawność odniesień do obrazów

4. **Przegląd treści**:
   - Sprawdź pisownię i gramatykę
   - Upewnij się, że przykłady kodu są poprawne i edukacyjne
   - Zweryfikuj, czy tłumaczenia zachowują oryginalne znaczenie

### Wymagania dotyczące wkładu

- Zgoda na Microsoft CLA (automatyczna kontrola przy pierwszym PR)
- Przestrzeganie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Zobacz [CONTRIBUTING.md](./CONTRIBUTING.md) dla szczegółowych wytycznych
- Odnoś numery problemów w opisie PR, jeśli dotyczy

### Proces przeglądu

- PR-y przeglądane przez opiekunów i społeczność
- Priorytetem jest jasność edukacyjna
- Przykłady kodu powinny przestrzegać aktualnych najlepszych praktyk
- Tłumaczenia przeglądane pod kątem dokładności i odpowiedniości kulturowej

## System tłumaczeń

### Automatyczne tłumaczenie

- Używa GitHub Actions z workflow co-op-translator
- Automatycznie tłumaczy na ponad 50 języków
- Pliki źródłowe w głównych katalogach
- Przetłumaczone pliki w katalogach `translations/{language-code}/`

### Dodawanie ręcznych ulepszeń tłumaczeń

1. Znajdź plik w `translations/{language-code}/`
2. Wprowadź ulepszenia, zachowując strukturę
3. Upewnij się, że przykłady kodu pozostają funkcjonalne
4. Przetestuj wszelkie zlokalizowane treści quizowe

### Metadane tłumaczeń

Przetłumaczone pliki zawierają nagłówek metadanych:
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

### Typowe problemy

**Aplikacja quizowa nie uruchamia się**:
- Sprawdź wersję Node.js (zalecana v14+)
- Usuń `node_modules` i `package-lock.json`, uruchom ponownie `npm install`
- Sprawdź konflikty portów (domyślnie: Vite używa portu 5173)

**Serwer API nie uruchamia się**:
- Zweryfikuj, czy wersja Node.js spełnia minimalne wymagania (node >=10)
- Sprawdź, czy port jest już używany
- Upewnij się, że wszystkie zależności są zainstalowane za pomocą `npm install`

**Rozszerzenie przeglądarki nie ładuje się**:
- Zweryfikuj, czy manifest.json jest poprawnie sformatowany
- Sprawdź konsolę przeglądarki pod kątem błędów
- Postępuj zgodnie z instrukcjami instalacji rozszerzenia specyficznymi dla przeglądarki

**Problemy z projektem czatu w Pythonie**:
- Upewnij się, że pakiet OpenAI jest zainstalowany: `pip install openai`
- Zweryfikuj, czy zmienna środowiskowa GITHUB_TOKEN jest ustawiona
- Sprawdź uprawnienia dostępu do GitHub Models

**Docsify nie serwuje dokumentacji**:
- Zainstaluj docsify-cli globalnie: `npm install -g docsify-cli`
- Uruchom z katalogu głównego repozytorium
- Sprawdź, czy istnieje `docs/_sidebar.md`

### Wskazówki dotyczące środowiska deweloperskiego

- Używaj VS Code z rozszerzeniem Live Server dla projektów HTML
- Zainstaluj rozszerzenia ESLint i Prettier dla spójnego formatowania
- Używaj narzędzi deweloperskich przeglądarki do debugowania JavaScript
- Dla projektów Vue zainstaluj rozszerzenie Vue DevTools dla przeglądarki

### Rozważania dotyczące wydajności

- Duża liczba przetłumaczonych plików (ponad 50 języków) oznacza, że pełne klony są duże
- Użyj płytkiego klonowania, jeśli pracujesz tylko nad treścią: `git clone --depth 1`
- Wyklucz tłumaczenia z wyszukiwań podczas pracy nad treścią w języku angielskim
- Procesy budowy mogą być wolne przy pierwszym uruchomieniu (npm install, Vite build)

## Rozważania dotyczące bezpieczeństwa

### Zmienne środowiskowe

- Klucze API nigdy nie powinny być dodawane do repozytorium
- Używaj plików `.env` (już w `.gitignore`)
- Dokumentuj wymagane zmienne środowiskowe w README projektów

### Projekty w Pythonie

- Używaj wirtualnych środowisk: `python -m venv venv`
- Aktualizuj zależności
- Tokeny GitHub powinny mieć minimalne wymagane uprawnienia

### Dostęp do GitHub Models

- Wymagane są Personal Access Tokens (PAT) dla GitHub Models
- Tokeny powinny być przechowywane jako zmienne środowiskowe
- Nigdy nie dodawaj tokenów ani danych uwierzytelniających

## Dodatkowe uwagi

### Docelowa grupa odbiorców

- Całkowici początkujący w tworzeniu stron internetowych
- Studenci i osoby uczące się samodzielnie
- Nauczyciele korzystający z programu nauczania w klasach
- Treści zaprojektowane z myślą o dostępności i stopniowym budowaniu umiejętności

### Filozofia edukacyjna

- Podejście oparte na projektach
- Częste sprawdzanie wiedzy (quizy)
- Praktyczne ćwiczenia kodowania
- Przykłady zastosowań w rzeczywistych sytuacjach
- Skupienie na podstawach przed przejściem do frameworków

### Utrzymanie repozytorium

- Aktywna społeczność uczących się i współtwórców
- Regularne aktualizacje zależności i treści
- Problemy i dyskusje monitorowane przez opiekunów
- Aktualizacje tłumaczeń automatyzowane za pomocą GitHub Actions

### Powiązane zasoby

- [Moduły Microsoft Learn](https://docs.microsoft.com/learn/)
- [Zasoby Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) polecany dla uczących się
- Dodatkowe kursy: Generative AI, Data Science, ML, IoT dostępne w programie nauczania

### Praca z konkretnymi projektami

Szczegółowe instrukcje dotyczące poszczególnych projektów znajdziesz w plikach README w:
- `quiz-app/README.md` - aplikacja quizowa Vue 3
- `7-bank-project/README.md` - aplikacja bankowa z uwierzytelnianiem
- `5-browser-extension/README.md` - rozwój rozszerzeń przeglądarki
- `6-space-game/README.md` - rozwój gry opartej na Canvas
- `9-chat-project/README.md` - projekt asystenta czatu AI

### Struktura monorepo

Chociaż nie jest to tradycyjne monorepo, to repozytorium zawiera wiele niezależnych projektów:
- Każda lekcja jest samodzielna
- Projekty nie dzielą zależności
- Pracuj nad poszczególnymi projektami bez wpływu na inne
- Sklonuj całe repozytorium, aby uzyskać pełne doświadczenie programu nauczania

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego języku źródłowym powinien być uznawany za autorytatywne źródło. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.