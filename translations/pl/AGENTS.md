# AGENTS.md

## Przegląd projektu

To jest repozytorium programu edukacyjnego do nauczania podstaw tworzenia stron internetowych dla początkujących. Program nauczania to kompleksowy, 12-tygodniowy kurs opracowany przez Microsoft Cloud Advocates, zawierający 24 praktyczne lekcje obejmujące JavaScript, CSS i HTML.

### Kluczowe elementy

- **Treści edukacyjne**: 24 uporządkowane lekcje zorganizowane w moduły oparte na projektach
- **Praktyczne projekty**: Terrarium, Gra w pisanie, Rozszerzenie przeglądarki, Gra kosmiczna, Aplikacja bankowa, Edytor kodu i Asystent czatu AI
- **Interaktywne quizy**: 48 quizów po 3 pytania każdy (oceny przed i po lekcji)
- **Wsparcie wielojęzyczne**: Automatyczne tłumaczenia na 50+ języków za pomocą GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (dla projektów AI)

### Architektura

- Repozytorium edukacyjne o strukturze lekcji
- Każdy folder lekcji zawiera README, przykłady kodu i rozwiązania
- Projekty samodzielne w osobnych katalogach (quiz-app, różne projekty lekcji)
- System tłumaczeń wykorzystujący GitHub Actions (co-op-translator)
- Dokumentacja udostępniana przez Docsify oraz dostępna jako PDF

## Polecenia konfiguracji

To repozytorium służy głównie do konsumpcji treści edukacyjnych. Aby pracować z konkretnymi projektami:

### Główna konfiguracja repozytorium

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Konfiguracja aplikacji quizowej (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Uruchom serwer deweloperski
npm run build      # Zbuduj wersję produkcyjną
npm run lint       # Uruchom ESLint
```

### API projektu bankowego (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Uruchom serwer API
npm run lint       # Uruchom ESLint
npm run format     # Sformatuj za pomocą Prettier
```

### Projekty rozszerzeń przeglądarki

```bash
cd 5-browser-extension/solution
npm install
# Postępuj zgodnie z instrukcjami ładowania rozszerzeń specyficznymi dla przeglądarki
```

### Projekty gry kosmicznej

```bash
cd 6-space-game/solution
npm install
# Otwórz index.html w przeglądarce lub użyj Live Server
```

### Projekt czatu (backend w Pythonie)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Ustaw zmienną środowiskową GITHUB_TOKEN
python api.py
```

## Przepływ pracy podczas rozwoju

### Dla współtwórców treści

1. **Utwórz fork repozytorium** na swoim koncie GitHub
2. **Sklonuj swoje fork** lokalnie
3. **Utwórz nową gałąź** na swoje zmiany
4. Dokonaj zmian w treści lekcji lub przykładach kodu
5. Przetestuj zmiany kodu w odpowiednich katalogach projektów
6. Prześlij pull request według wytycznych dotyczących wkładu

### Dla uczących się

1. Forkuj lub klonuj repozytorium
2. Przechodź sekwencyjnie do katalogów lekcji
3. Czytaj pliki README dla każdej lekcji
4. Wykonaj quizy przed lekcją na https://ff-quizzes.netlify.app/web/
5. Pracuj z przykładami kodu w folderach lekcji
6. Wykonaj zadania i wyzwania
7. Przystąp do quizów po lekcji

### Programowanie na żywo

- **Dokumentacja**: Uruchom `docsify serve` w katalogu głównym (port 3000)
- **Aplikacja quizowa**: Uruchom `npm run dev` w katalogu quiz-app
- **Projekty**: Użyj rozszerzenia VS Code Live Server dla projektów HTML
- **Projekty API**: Uruchom `npm start` w odpowiednich katalogach API

## Instrukcje testowania

### Testowanie aplikacji quizowej

```bash
cd quiz-app
npm run lint       # Sprawdź problemy ze stylem kodu
npm run build      # Zweryfikuj powodzenie kompilacji
```

### Testowanie API banku

```bash
cd 7-bank-project/api
npm run lint       # Sprawdź problemy ze stylem kodu
node server.js     # Zweryfikuj, czy serwer uruchamia się bez błędów
```

### Ogólne podejście do testowania

- To repozytorium edukacyjne bez kompletnego automatycznego testowania
- Testowanie manualne koncentruje się na:
  - Uruchamianiu przykładów kodu bez błędów
  - Działających linkach w dokumentacji
  - Pomyślnych kompilacjach projektów
  - Przykładach zgodnych z najlepszymi praktykami

### Kontrole przed zgłoszeniem

- Uruchom `npm run lint` w katalogach z package.json
- Zweryfikuj, czy linki markdown są poprawne
- Przetestuj przykłady kodu w przeglądarce lub Node.js
- Sprawdź, czy tłumaczenia zachowują poprawną strukturę

## Wytyczne dotyczące stylu kodu

### JavaScript

- Używaj nowoczesnej składni ES6+
- Stosuj standardowe konfiguracje ESLint dostarczane w projektach
- Używaj znaczących nazw zmiennych i funkcji dla jasności edukacyjnej
- Dodawaj komentarze wyjaśniające koncepcje dla uczących się
- Formatowanie przy pomocy Prettier tam, gdzie skonfigurowano

### HTML/CSS

- Semantyczne elementy HTML5
- Zasady projektowania responsywnego
- Jasne konwencje nazewnictwa klas
- Komentarze wyjaśniające techniki CSS dla uczących się

### Python

- Wytyczne stylu PEP 8
- Jasne, edukacyjne przykłady kodu
- Adnotacje typów tam, gdzie pomagają w nauce

### Dokumentacja Markdown

- Jasna hierarchia nagłówków
- Bloki kodu z określeniem języka
- Linki do dodatkowych zasobów
- Zrzuty ekranu i obrazy w katalogach `images/`
- Tekst alternatywny dla obrazów zgodnie z zasadami dostępności

### Organizacja plików

- Lekcje numerowane kolejno (1-getting-started-lessons, 2-js-basics itd.)
- Każdy projekt ma katalog `solution/` i często `start/` lub `your-work/`
- Obrazy przechowywane w katalogach `images/` związanych z lekcjami
- Tłumaczenia w strukturze `translations/{language-code}/`

## Budowa i wdrożenie

### Wdrożenie aplikacji quizowej (Azure Static Web Apps)

Aplikacja quizowa jest skonfigurowana do wdrożenia na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tworzy folder dist/
# Wdraża za pomocą workflow GitHub Actions przy pushu do main
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

### Budowy specyficzne dla projektu

Każdy katalog projektu może mieć własny proces budowy:
- Projekty Vue: `npm run build` tworzy produkcyjne pakiety
- Projekty statyczne: brak kroku budowy, serwowanie plików bezpośrednio

## Wytyczne dotyczące pull requestów

### Format tytułu

Używaj jasnych, opisowych tytułów wskazujących obszar zmian:
- `[Quiz-app] Dodaj nowy quiz do lekcji X`
- `[Lesson-3] Popraw literówkę w projekcie terrarium`
- `[Translation] Dodaj tłumaczenie na hiszpański dla lekcji 5`
- `[Docs] Aktualizuj instrukcje instalacji`

### Wymagane kontrole

Przed zgłoszeniem PR:

1. **Jakość kodu**:
   - Uruchom `npm run lint` w dotkniętych katalogach projektów
   - Napraw wszystkie błędy i ostrzeżenia lintingu

2. **Weryfikacja budowy**:
   - Uruchom `npm run build` jeśli dotyczy
   - Upewnij się, że brak błędów budowy

3. **Weryfikacja linków**:
   - Sprawdź wszystkie linki markdown
   - Zweryfikuj poprawność odniesień do obrazów

4. **Przegląd treści**:
   - Korekta pisowni i gramatyki
   - Upewnienie się, że przykłady kodu są poprawne i edukacyjne
   - Sprawdzenie, czy tłumaczenia zachowują oryginalne znaczenie

### Wymagania dotyczące wkładu

- Zgoda na Microsoft CLA (automatyczna weryfikacja przy pierwszym PR)
- Przestrzeganie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Sprawdź [CONTRIBUTING.md](./CONTRIBUTING.md) dla szczegółowych wytycznych
- Referuj numery zgłoszeń w opisie PR, jeśli dotyczy

### Proces przeglądu

- PR są przeglądane przez opiekunów i społeczność
- Priorytetem jest jasność edukacyjna
- Przykłady kodu powinny stosować aktualne najlepsze praktyki
- Tłumaczenia sprawdzane pod kątem dokładności i zgodności kulturowej

## System tłumaczeń

### Automatyczne tłumaczenie

- Wykorzystuje GitHub Actions z workflow co-op-translator
- Tłumaczy automatycznie na 50+ języków
- Pliki źródłowe w głównych katalogach
- Tłumaczone pliki w katalogach `translations/{language-code}/`

### Dodawanie ręcznych usprawnień tłumaczenia

1. Znajdź plik w `translations/{language-code}/`
2. Dokonaj poprawek zachowując strukturę
3. Upewnij się, że przykłady kodu pozostają funkcyjne
4. Przetestuj ewentualną lokalizację quizów

### Metadane tłumaczenia

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

### Częste problemy

**Aplikacja quizowa nie uruchamia się**:
- Sprawdź wersję Node.js (zalecane v14+)
- Usuń `node_modules` i `package-lock.json`, uruchom ponownie `npm install`
- Sprawdź konflikty portów (domyślnie Vite używa portu 5173)

**Serwer API nie startuje**:
- Sprawdź, czy wersja Node.js spełnia minimum (node >=10)
- Sprawdź, czy port nie jest zajęty
- Upewnij się, że wszystkie zależności zainstalowane (`npm install`)

**Rozszerzenie przeglądarki się nie ładuje**:
- Sprawdź prawidłowość pliku manifest.json
- Sprawdź konsolę przeglądarki pod kątem błędów
- Postępuj zgodnie z instrukcjami instalacji specyficznymi dla przeglądarki

**Problemy z projektem czatu Pythona**:
- Upewnij się, że pakiet OpenAI jest zainstalowany: `pip install openai`
- Sprawdź, czy zmienna środowiskowa GITHUB_TOKEN jest ustawiona
- Zweryfikuj uprawnienia do dostępu do modeli GitHub

**Docsify nie serwuje dokumentacji**:
- Zainstaluj docsify-cli globalnie: `npm install -g docsify-cli`
- Uruchom z katalogu głównego repozytorium
- Sprawdź, czy plik `docs/_sidebar.md` istnieje

### Wskazówki dotyczące środowiska deweloperskiego

- Używaj VS Code z rozszerzeniem Live Server dla projektów HTML
- Zainstaluj rozszerzenia ESLint i Prettier dla spójnego formatowania
- Używaj narzędzi deweloperskich przeglądarki do debugowania JavaScript
- Dla projektów Vue zainstaluj rozszerzenie Vue DevTools do przeglądarki

### Rozważania wydajnościowe

- Duża liczba przetłumaczonych plików (50+ języków) oznacza duże pełne klony
- Używaj płytkiego klonowania, jeśli pracujesz tylko z treścią: `git clone --depth 1`
- Wyłącz tłumaczenia z przeszukiwania podczas pracy w wersji angielskiej
- Procesy budowy mogą być wolne przy pierwszym uruchomieniu (npm install, budowa Vite)

## Rozważania dotyczące bezpieczeństwa

### Zmienne środowiskowe

- Klucze API nigdy nie powinny być commitowane do repozytorium
- Używaj plików `.env` (już w `.gitignore`)
- Dokumentuj wymagane zmienne środowiskowe w README projektów

### Projekty Pythona

- Używaj wirtualnych środowisk: `python -m venv venv`
- Aktualizuj na bieżąco zależności
- Tokeny GitHub powinny mieć minimalne wymagane uprawnienia

### Dostęp do modeli GitHub

- Wymagane Personal Access Tokens (PAT)
- Tokeny przechowuj jako zmienne środowiskowe
- Nigdy nie commituj tokenów ani danych uwierzytelniających

## Dodatkowe notatki

### Grupa docelowa

- Całkowici początkujący w tworzeniu stron internetowych
- Studenci i samoucy
- Nauczyciele korzystający z programu nauczania w klasie
- Treści zaprojektowane pod kątem dostępności i stopniowego budowania umiejętności

### Filozofia edukacyjna

- Podejście oparte na nauce przez projekty
- Częste sprawdzanie wiedzy (quizy)
- Praktyczne ćwiczenia kodowania
- Przykłady zastosowań w rzeczywistych projektach
- Skupienie na podstawach przed frameworkami

### Utrzymanie repozytorium

- Aktywna społeczność uczących się i współtwórców
- Regularne aktualizacje zależności i treści
- Monitorowanie zgłoszeń i dyskusji przez opiekunów
- Aktualizacje tłumaczeń automatyzowane za pomocą GitHub Actions

### Powiązane zasoby

- [Moduły Microsoft Learn](https://docs.microsoft.com/learn/)
- [Materiały Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekomendowany dla uczących się
- Dodatkowe kursy: Generatywne AI, Data Science, ML, IoT dostępne w programie nauczania

### Praca z konkretnymi projektami

Szczegółowe instrukcje dotyczące poszczególnych projektów znajdują się w plikach README:
- `quiz-app/README.md` - aplikacja quizowa Vue 3
- `7-bank-project/README.md` - aplikacja bankowa z uwierzytelnianiem
- `5-browser-extension/README.md` - rozwój rozszerzenia przeglądarki
- `6-space-game/README.md` - gra na canvasie
- `9-chat-project/README.md` - projekt asystenta czatu AI

### Struktura monorepo

Chociaż to nie jest tradycyjne monorepo, to repozytorium zawiera wiele niezależnych projektów:
- Każda lekcja jest samodzielna
- Projekty nie dzielą zależności
- Pracuj nad pojedynczymi projektami bez wpływu na inne
- Sklonuj całe repozytorium, aby uzyskać pełne doświadczenie programu nauczania

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:
Niniejszy dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy starań, aby tłumaczenie było jak najbardziej precyzyjne, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym powinien być uznawany za dokument nadrzędny. W przypadku informacji o krytycznym znaczeniu zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonywanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->