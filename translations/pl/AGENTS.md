# AGENTS.md

## Przegląd projektu

To repozytorium kursu edukacyjnego do nauczania podstaw tworzenia stron internetowych dla początkujących. Program nauczania to kompleksowy 12-tygodniowy kurs opracowany przez Microsoft Cloud Advocates, zawierający 24 praktyczne lekcje obejmujące JavaScript, CSS i HTML.

### Kluczowe komponenty

- **Zawartość edukacyjna**: 24 uporządkowane lekcje zorganizowane w moduły projektowe
- **Praktyczne projekty**: Terrarium, Gra w pisanie na klawiaturze, Rozszerzenie przeglądarki, Gra kosmiczna, Aplikacja bankowa, Edytor kodu oraz Asystent czatu AI
- **Interaktywne quizy**: 48 quizów z 3 pytaniami każdy (oceny przed i po lekcji)
- **Wsparcie wielu języków**: Automatyczne tłumaczenia na ponad 50 języków za pomocą GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (dla projektów AI)

### Architektura

- Edukacyjne repozytorium o strukturze opartej na lekcjach
- Każdy folder lekcji zawiera plik README, przykłady kodu i rozwiązania
- Samodzielne projekty w osobnych katalogach (quiz-app, różne projekty lekcyjne)
- System tłumaczeń z wykorzystaniem GitHub Actions (co-op-translator)
- Dokumentacja udostępniana przez Docsify i dostępna w formacie PDF

## Komendy do konfiguracji

To repozytorium jest głównie do konsumpcji treści edukacyjnych. W przypadku pracy z konkretnymi projektami:

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
npm run build      # Buduj do produkcji
npm run lint       # Uruchom ESLint
```

### API projektu bankowego (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Uruchom serwer API
npm run lint       # Uruchom ESLint
npm run format     # Formatuj za pomocą Prettier
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

### Projekt czatu (Backend w Pythonie)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Ustaw zmienną środowiskową GITHUB_TOKEN
python api.py
```

## Przebieg pracy deweloperskiej

### Dla współtwórców treści

1. **Zrób fork repozytorium** na swoje konto GitHub
2. **Sklonuj swój fork** lokalnie
3. **Utwórz nową gałąź** dla swoich zmian
4. Wprowadzaj zmiany w zawartości lekcji lub przykładach kodu
5. Testuj zmiany kodu w odpowiednich katalogach projektów
6. Zgłaszaj pull requesty zgodnie z wytycznymi dotyczącymi wkładu

### Dla uczących się

1. Zrób fork lub sklonuj repozytorium
2. Przechodź kolejno do katalogów z lekcjami
3. Czytaj pliki README dla każdej lekcji
4. Wypełniaj quizy przed lekcją na https://ff-quizzes.netlify.app/web/
5. Pracuj nad przykładami kodu w folderach lekcji
6. Realizuj zadania i wyzwania
7. Wypełniaj quizy po lekcji

### Rozwój na żywo

- **Dokumentacja**: Uruchom `docsify serve` w katalogu głównym (port 3000)
- **Aplikacja quizowa**: Uruchom `npm run dev` w katalogu quiz-app
- **Projekty**: Użyj rozszerzenia VS Code Live Server dla projektów HTML
- **Projekty API**: Uruchom `npm start` w odpowiednich katalogach API

## Instrukcje testowania

### Testowanie aplikacji quizowej

```bash
cd quiz-app
npm run lint       # Sprawdź problemy ze stylem kodu
npm run build      # Zweryfikuj, czy kompilacja zakończyła się sukcesem
```

### Testowanie API bankowego

```bash
cd 7-bank-project/api
npm run lint       # Sprawdź problemy ze stylem kodu
node server.js     # Zweryfikuj, czy serwer uruchamia się bez błędów
```

### Ogólne podejście do testowania

- To repozytorium edukacyjne bez kompleksowych zautomatyzowanych testów
- Testy manualne skupiają się na:
  - poprawnym działaniu przykładów kodu bez błędów
  - działaniu linków w dokumentacji
  - poprawności kompilacji projektów
  - stosowaniu najlepszych praktyk w przykładach

### Kontrole przed przesłaniem

- Uruchom `npm run lint` w katalogach z package.json
- Sprawdź poprawność linków markdown
- Testuj przykłady kodu w przeglądarce lub Node.js
- Sprawdź, czy tłumaczenia zachowują odpowiednią strukturę

## Wytyczne dotyczące stylu kodu

### JavaScript

- Używaj nowoczesnej składni ES6+
- Stosuj standardowe konfiguracje ESLint dostarczone w projektach
- Używaj znaczących nazw zmiennych i funkcji dla klarowności edukacyjnej
- Dodawaj komentarze wyjaśniające koncepcje dla uczących się
- Formatowanie za pomocą Prettier tam, gdzie jest skonfigurowane

### HTML/CSS

- Semantyczne elementy HTML5
- Zasady responsywnego projektowania
- Jasne konwencje nazewnictwa klas
- Komentarze wyjaśniające techniki CSS dla uczących się

### Python

- Wytyczne stylu PEP 8
- Jasne, edukacyjne przykłady kodu
- Wskazówki typów tam, gdzie pomagają w nauce

### Dokumentacja Markdown

- Jasna hierarchia nagłówków
- Bloki kodu ze specyfikacją języka
- Linki do dodatkowych zasobów
- Zrzuty ekranu i obrazy w katalogach `images/`
- Tekst alternatywny dla obrazków dla dostępności

### Organizacja plików

- Lekcje numerowane kolejno (1-getting-started-lessons, 2-js-basics itd.)
- Każdy projekt zawiera katalogi `solution/`, często też `start/` lub `your-work/`
- Obrazy przechowywane w folderach `images/` specyficznych dla lekcji
- Tłumaczenia w strukturze `translations/{kod-języka}/`

## Budowanie i wdrażanie

### Wdrażanie aplikacji quizowej (Azure Static Web Apps)

Aplikacja quizowa jest skonfigurowana do wdrożenia na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tworzy folder dist/
# Wdraża za pomocą workflow GitHub Actions przy pushu do main
```

Konfiguracja Azure Static Web Apps:
- **Lokalizacja aplikacji**: `/quiz-app`
- **Lokalizacja wyjścia**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generowanie dokumentacji PDF

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

Każdy katalog projektu może mieć własny proces budowy:
- Projekty Vue: `npm run build` tworzy pakiety produkcyjne
- Projekty statyczne: brak kroku budowania, pliki serwowane bezpośrednio

## Wytyczne dotyczące pull requestów

### Format tytułu

Używaj jasnych, opisowych tytułów wskazujących obszar zmian:
- `[Quiz-app] Dodaj nowy quiz dla lekcji X`
- `[Lesson-3] Popraw literówkę w projekcie terrarium`
- `[Translation] Dodaj tłumaczenie na hiszpański dla lekcji 5`
- `[Docs] Aktualizacja instrukcji konfiguracji`

### Wymagane kontrole

Przed przesłaniem PR:

1. **Jakość kodu**:
   - Uruchom `npm run lint` w odpowiednich katalogach projektów
   - Napraw wszystkie błędy i ostrzeżenia lint

2. **Weryfikacja budowania**:
   - Uruchom `npm run build` jeśli dotyczy
   - Sprawdź brak błędów budowania

3. **Weryfikacja linków**:
   - Przetestuj wszystkie linki markdown
   - Sprawdź działanie odwołań do obrazów

4. **Przegląd treści**:
   - Korekta pisowni i gramatyki
   - Sprawdzenie poprawności i edukacyjnej wartości przykładów kodu
   - Weryfikacja tłumaczeń pod kątem zachowania sensu oryginału

### Wymogi dotyczące wkładu

- Akceptacja Microsoft CLA (automatyczna weryfikacja przy pierwszym PR)
- Przestrzeganie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Szczegółowe wytyczne w [CONTRIBUTING.md](./CONTRIBUTING.md)
- Wzmianka o numerach issue w opisie PR, jeśli dotyczy

### Proces przeglądu

- PR-y są przeglądane przez opiekunów i społeczność
- Priorytetem jest jasność edukacyjna
- Przykłady kodu powinny opierać się na aktualnych najlepszych praktykach
- Tłumaczenia poddawane weryfikacji pod kątem dokładności i odpowiedniości kulturowej

## System tłumaczeń

### Automatyczne tłumaczenie

- Wykorzystuje GitHub Actions ze workflow co-op-translator
- Tłumaczy automatycznie na ponad 50 języków
- Pliki źródłowe w głównych katalogach
- Przetłumaczone pliki w katalogach `translations/{kod-języka}/`

### Dodawanie ręcznych poprawek tłumaczeń

1. Znajdź plik w `translations/{kod-języka}/`
2. Wprowadź poprawki zachowując strukturę
3. Upewnij się, że przykłady kodu pozostają funkcjonalne
4. Przetestuj zlokalizowaną zawartość quizów

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
- Sprawdź wersję Node.js (zalecane v14+)
- Usuń `node_modules` i `package-lock.json`, uruchom ponownie `npm install`
- Sprawdź konflikty portów (domyślnie Vite używa portu 5173)

**Serwer API nie startuje**:
- Zweryfikuj, czy wersja Node.js spełnia minimalne wymagania (node >=10)
- Sprawdź, czy port nie jest już zajęty
- Upewnij się, że wszystkie zależności zainstalowano przez `npm install`

**Rozszerzenie przeglądarki się nie ładuje**:
- Sprawdź poprawność formatu manifest.json
- Sprawdź błędy w konsoli przeglądarki
- Postępuj zgodnie z instrukcjami instalacji rozszerzenia dla danej przeglądarki

**Problemy z projektem czatu w Pythonie**:
- Upewnij się, że jest zainstalowany pakiet OpenAI: `pip install openai`
- Sprawdź, czy zmienna środowiskowa GITHUB_TOKEN jest ustawiona
- Zweryfikuj uprawnienia dostępu do GitHub Models

**Docsify nie serwuje dokumentacji**:
- Zainstaluj globalnie docsify-cli: `npm install -g docsify-cli`
- Uruchom z katalogu głównego repozytorium
- Sprawdź, czy istnieje plik `docs/_sidebar.md`

### Wskazówki dotyczące środowiska deweloperskiego

- Używaj VS Code z rozszerzeniem Live Server dla projektów HTML
- Zainstaluj rozszerzenia ESLint i Prettier dla spójnego formatowania
- Korzystaj z DevTools w przeglądarce do debugowania JavaScriptu
- Dla projektów Vue zainstaluj rozszerzenie Vue DevTools do przeglądarki

### Rozważania dotyczące wydajności

- Duża liczba przetłumaczonych plików (ponad 50 języków) oznacza duże pełne klony
- Używaj płytkiego klonowania, jeśli pracujesz tylko z treścią: `git clone --depth 1`
- Wyłącz tłumaczenia z wyszukiwania przy pracy z zawartością w języku angielskim
- Procesy budowania mogą być powolne przy pierwszym uruchomieniu (`npm install`, budowa Vite)

## Aspekty bezpieczeństwa

### Zmienne środowiskowe

- Klucze API nigdy nie powinny być zatwierdzane do repozytorium
- Używaj plików `.env` (już w `.gitignore`)
- Dokumentuj wymagane zmienne środowiskowe w plikach README projektów

### Projekty Python

- Korzystaj ze środowisk wirtualnych: `python -m venv venv`
- Aktualizuj zależności
- Tokeny GitHub powinny mieć minimalne wymagane uprawnienia

### Dostęp do GitHub Models

- Wymagane są Personal Access Tokens (PAT) dla GitHub Models
- Tokeny powinny być przechowywane jako zmienne środowiskowe
- Nigdy nie zatwierdzaj tokenów ani danych uwierzytelniających

## Dodatkowe uwagi

### Grupa docelowa

- Całkowicie początkujący w web developmencie
- Studenci i samoucy
- Nauczyciele wykorzystujący program w klasach
- Zawartość zaprojektowana z myślą o dostępności i stopniowym budowaniu umiejętności

### Filozofia edukacyjna

- Podejście oparte na nauce poprzez projekt
- Częste sprawdzanie wiedzy (quizy)
- Ćwiczenia praktyczne z kodowania
- Przykłady zastosowań w świecie rzeczywistym
- Koncentracja na podstawach przed frameworkami

### Utrzymanie repozytorium

- Aktywna społeczność uczących się i współtwórców
- Regularne aktualizacje zależności i zawartości
- Monitorowanie issues i dyskusji przez opiekunów
- Aktualizacje tłumaczeń automatyzowane przez GitHub Actions

### Powiązane zasoby

- [Moduły Microsoft Learn](https://docs.microsoft.com/learn/)
- [Zasoby Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekomendowany dla uczących się
- Dodatkowe kursy: AI generatywne, Data Science, ML, IoT dostępne

### Praca z konkretnymi projektami

Szczegółowe instrukcje dotyczące indywidualnych projektów znajdują się w plikach README:
- `quiz-app/README.md` - aplikacja quizowa Vue 3
- `7-bank-project/README.md` - aplikacja bankowa z uwierzytelnianiem
- `5-browser-extension/README.md` - rozwój rozszerzeń przeglądarki
- `6-space-game/README.md` - gra oparta na Canvas
- `9-chat-project/README.md` - projekt asystenta czatu AI

### Struktura monorepo

Chociaż nie jest to tradycyjne monorepo, to repozytorium zawiera wiele niezależnych projektów:
- Każda lekcja jest samodzielna
- Projekty nie dzielą zależności
- Pracuj nad pojedynczymi projektami bez wpływu na inne
- Sklonuj całe repozytorium, aby uzyskać pełne doświadczenie kursu

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony przy użyciu usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo że staramy się o dokładność, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego języku źródłowym należy uważać za dokument autorytatywny. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikłe z użycia tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->