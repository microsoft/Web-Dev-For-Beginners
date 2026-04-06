# AGENTS.md

## Przegląd projektu

To repozytorium edukacyjne służy do nauczania podstaw rozwoju stron internetowych dla początkujących. Program nauczania to kompleksowy kurs trwający 12 tygodni, opracowany przez Microsoft Cloud Advocates, zawierający 24 praktyczne lekcje obejmujące JavaScript, CSS i HTML.

### Kluczowe elementy

- **Treści edukacyjne**: 24 strukturalne lekcje podzielone na moduły projektowe
- **Projekty praktyczne**: Terrarium, Gra w pisanie, Rozszerzenie przeglądarki, Gra kosmiczna, Aplikacja bankowa, Edytor kodu oraz Asystent czatu AI
- **Interaktywne quizy**: 48 quizów po 3 pytania każdy (oceny przed i po lekcji)
- **Wsparcie wielojęzyczne**: Automatyczne tłumaczenia na ponad 50 języków za pomocą GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (dla projektów AI)

### Architektura

- Edukacyjne repozytorium z strukturą lekcji
- Każdy folder lekcji zawiera README, przykłady kodu i rozwiązania
- Samodzielne projekty w oddzielnych katalogach (quiz-app, różne projekty lekcji)
- System tłumaczeń wykorzystujący GitHub Actions (co-op-translator)
- Dokumentacja dostępna przez Docsify oraz w formacie PDF

## Polecenia instalacyjne

To repozytorium służy głównie do konsumpcji materiałów edukacyjnych. Aby pracować z konkretnymi projektami:

### Główna instalacja repozytorium

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Instalacja Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Uruchom serwer deweloperski
npm run build      # Zbuduj do produkcji
npm run lint       # Uruchom ESLint
```

### API projektu Bank (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Uruchom serwer API
npm run lint       # Uruchom ESLint
npm run format     # Formatuj za pomocą Prettiera
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

### Projekt czatu (backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Ustaw zmienną środowiskową GITHUB_TOKEN
python api.py
```

## Przebieg prac rozwojowych

### Dla osób tworzących treści

1. **Zrób fork repozytorium** na swoje konto GitHub
2. **Sklonuj swojego forka** lokalnie
3. **Utwórz nową gałąź** dla swoich zmian
4. Wprowadzaj zmiany w treści lekcji lub przykładach kodu
5. Testuj zmiany kodu w odpowiednich katalogach projektów
6. Składaj pull requesty zgodnie z wytycznymi dotyczącymi współpracy

### Dla uczących się

1. Zrób fork lub sklonuj repozytorium
2. Przechodź kolejno do katalogów z lekcjami
3. Czytaj pliki README każdej lekcji
4. Wykonuj quizy przed lekcją na https://ff-quizzes.netlify.app/web/
5. Pracuj z przykładami kodu w folderach lekcji
6. Wykonuj zadania i wyzwania
7. Przystępuj do quizów po lekcji

### Praca na żywo

- **Dokumentacja**: Uruchom `docsify serve` w katalogu głównym (port 3000)
- **Quiz App**: Uruchom w katalogu quiz-app `npm run dev`
- **Projekty**: Używaj rozszerzenia Live Server w VS Code dla projektów HTML
- **Projekty API**: Uruchom `npm start` w odpowiednich katalogach API

## Instrukcje testowania

### Testowanie Quiz App

```bash
cd quiz-app
npm run lint       # Sprawdź problemy ze stylem kodu
npm run build      # Zweryfikuj, czy kompilacja się powiodła
```

### Testowanie Bank API

```bash
cd 7-bank-project/api
npm run lint       # Sprawdź problemy ze stylem kodu
node server.js     # Sprawdź, czy serwer uruchamia się bez błędów
```

### Ogólne podejście do testowania

- To repozytorium edukacyjne bez kompleksowych testów automatycznych
- Testowanie manualne koncentruje się na:
  - Bezbłędnym uruchamianiu przykładów kodu
  - Poprawności linków w dokumentacji
  - Prawidłowym budowaniu projektów
  - Przykłady zgodne z dobrymi praktykami

### Kontrole przed wysłaniem

- Uruchom `npm run lint` w katalogach z package.json
- Sprawdź ważność linków markdown
- Testuj przykłady kodu w przeglądarce lub Node.js
- Sprawdź, czy tłumaczenia zachowują właściwą strukturę

## Wytyczne dotyczące stylu kodu

### JavaScript

- Używaj nowoczesnej składni ES6+
- Stosuj standardową konfigurację ESLint dostarczoną w projektach
- Używaj znaczących nazw zmiennych i funkcji dla jasności edukacyjnej
- Dodawaj komentarze tłumaczące koncepcje dla uczących się
- Formatowanie kodu za pomocą Prettier, jeśli jest skonfigurowane

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
- Tekst alternatywny dla obrazów dla dostępności

### Organizacja plików

- Lekcje ponumerowane kolejno (1-getting-started-lessons, 2-js-basics itd.)
- Każdy projekt ma katalog `solution/` i często `start/` lub `your-work/`
- Obrazy przechowywane w specyficznych folderach `images/` dla lekcji
- Tłumaczenia w strukturze `translations/{kod-języka}/`

## Budowanie i wdrażanie

### Wdrażanie Quiz App (Azure Static Web Apps)

quiz-app jest skonfigurowany do wdrażania na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tworzy folder dist/
# Wdraża za pomocą workflow GitHub Actions przy pushu do main
```

Konfiguracja Azure Static Web Apps:
- **Lokalizacja aplikacji**: `/quiz-app`
- **Lokalizacja wyjściowa**: `dist`
- **Proces workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

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
- Projekty Vue: `npm run build` tworzy produkcyjne pakiety
- Projekty statyczne: brak etapu build, pliki serwowane bezpośrednio

## Wytyczne dotyczące pull requestów

### Format tytułu

Używaj jasnych, opisowych tytułów wskazujących obszar zmiany:
- `[Quiz-app] Dodaj nowy quiz do lekcji X`
- `[Lesson-3] Popraw literówkę w projekcie terrarium`
- `[Translation] Dodaj tłumaczenie na hiszpański do lekcji 5`
- `[Docs] Aktualizacja instrukcji instalacji`

### Wymagane kontrole

Przed wysłaniem PR:

1. **Jakość kodu**:
   - Uruchom `npm run lint` w katalogach projektów objętych zmianami
   - Usuń wszystkie błędy i ostrzeżenia lintingu

2. **Weryfikacja budowy**:
   - Jeśli dotyczy, uruchom `npm run build`
   - Upewnij się, że nie ma błędów budowy

3. **Walidacja linków**:
   - Testuj wszystkie linki markdown
   - Sprawdź poprawność obrazów

4. **Przegląd zawartości**:
   - Korekta pisowni i gramatyki
   - Upewnij się, że przykłady kodu są poprawne i edukacyjne
   - Weryfikuj, czy tłumaczenia zachowują pierwotne znaczenie

### Wymagania dotyczące współpracy

- Zgoda na Microsoft CLA (automatyczna weryfikacja przy pierwszym PR)
- Przestrzeganie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Szczegółowe wytyczne w [CONTRIBUTING.md](./CONTRIBUTING.md)
- Jeżeli dotyczy, podawaj numery issue w opisie PR

### Proces przeglądu

- PR są przeglądane przez maintainerów i społeczność
- Priorytet dla jasności edukacyjnej
- Przykłady kodu powinny stosować aktualne najlepsze praktyki
- Tłumaczenia przeglądane pod kątem dokładności i kulturowej adekwatności

## System tłumaczeń

### Tłumaczenie automatyczne

- Używa GitHub Actions z workflow co-op-translator
- Automatycznie tłumaczy na ponad 50 języków
- Pliki źródłowe w głównych katalogach
- Pliki tłumaczeń w katalogach `translations/{kod-języka}/`

### Dodawanie ręcznych poprawek tłumaczeń

1. Znajdź plik w `translations/{kod-języka}/`
2. Wprowadź poprawki z zachowaniem struktury
3. Upewnij się, że przykłady kodu pozostają funkcjonalne
4. Testuj lokalizowaną treść quizów

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

### Najczęstsze problemy

**Quiz app nie uruchamia się**:
- Sprawdź wersję Node.js (zalecane v14+)
- Usuń `node_modules` i `package-lock.json`, uruchom ponownie `npm install`
- Sprawdź, czy port nie jest zajęty (domyślnie Vite używa portu 5173)

**Serwer API nie startuje**:
- Sprawdź, czy wersja Node.js spełnia minimalną (node >=10)
- Sprawdź, czy port nie jest już zajęty
- Upewnij się, że wszystkie zależności zostały zainstalowane (`npm install`)

**Rozszerzenie przeglądarki nie ładuje się**:
- Sprawdź poprawność pliku manifest.json
- Sprawdź konsolę przeglądarki pod kątem błędów
- Postępuj zgodnie z instrukcjami instalacji dla danej przeglądarki

**Problemy z projektem czatu w Pythonie**:
- Upewnij się, że pakiet OpenAI jest zainstalowany: `pip install openai`
- Sprawdź, czy zmienna środowiskowa GITHUB_TOKEN jest ustawiona
- Zweryfikuj uprawnienia dostępu do GitHub Models

**Docsify nie serwuje dokumentacji**:
- Zainstaluj docsify-cli globalnie: `npm install -g docsify-cli`
- Uruchom z katalogu głównego repozytorium
- Sprawdź, czy istnieje `docs/_sidebar.md`

### Wskazówki dotyczące środowiska programistycznego

- Używaj VS Code z rozszerzeniem Live Server dla projektów HTML
- Zainstaluj rozszerzenia ESLint i Prettier dla spójnego formatowania
- Używaj narzędzi deweloperskich przeglądarki do debugowania JavaScript
- Dla projektów Vue zainstaluj rozszerzenie Vue DevTools do przeglądarki

### Aspekty wydajnościowe

- Duża liczba tłumaczeń (ponad 50 języków) powoduje, że pełne klony są duże
- Stosuj płytkie klony, jeśli pracujesz tylko z treścią: `git clone --depth 1`
- Wyklucz tłumaczenia z przeszukiwania podczas pracy nad angielską zawartością
- Procesy budowania mogą być powolne przy pierwszym uruchomieniu (npm install, budowa Vite)

## Aspekty bezpieczeństwa

### Zmienne środowiskowe

- Klucze API nigdy nie powinny być commitowane do repozytorium
- Używaj plików `.env` (są uwzględnione w `.gitignore`)
- Dokumentuj wymagane zmienne środowiskowe w plikach README projektów

### Projekty Python

- Używaj środowisk wirtualnych: `python -m venv venv`
- Aktualizuj zależności
- Tokeny GitHub powinny posiadać minimalne wymagane uprawnienia

### Dostęp do GitHub Models

- Do GitHub Models wymagane są Personal Access Tokens (PAT)
- Tokeny powinny być przechowywane jako zmienne środowiskowe
- Nigdy nie commituj tokenów ani danych uwierzytelniających

## Dodatkowe uwagi

### Grupa docelowa

- Zupełni początkujący w rozwoju stron internetowych
- Studenci i samoucy
- Nauczyciele korzystający z programu nauczania w klasach
- Zawartość zaprojektowana pod kątem dostępności i stopniowego rozwoju umiejętności

### Filozofia edukacyjna

- Podejście oparte na nauce przez projekty
- Częste sprawdzanie wiedzy (quizy)
- Ćwiczenia praktyczne z kodem
- Przykłady zastosowania w rzeczywistych sytuacjach
- Skupienie na podstawach przed frameworkami

### Utrzymanie repozytorium

- Aktywna społeczność uczących się i współtwórców
- Regularne aktualizacje zależności i treści
- Monitorowanie zgłoszeń i dyskusji przez maintainerów
- Aktualizacje tłumaczeń automatyzowane przez GitHub Actions

### Powiązane zasoby

- [Moduły Microsoft Learn](https://docs.microsoft.com/learn/)
- [Student Hub – zasoby](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) polecany dla uczących się
- Dodatkowe kursy: Generative AI, Data Science, ML, IoT dostępne

### Praca z konkretnymi projektami

Szczegółowe instrukcje dotyczące poszczególnych projektów znajdują się w plikach README:
- `quiz-app/README.md` - aplikacja quizowa Vue 3
- `7-bank-project/README.md` - aplikacja bankowa z uwierzytelnianiem
- `5-browser-extension/README.md` - rozwój rozszerzenia przeglądarki
- `6-space-game/README.md` - gra na kanwie Canvas
- `9-chat-project/README.md` - projekt asystenta czatu AI

### Struktura monorepo

Choć to nie jest tradycyjne monorepo, to repozytorium zawiera wiele niezależnych projektów:
- Każda lekcja jest samodzielna
- Projekty nie dzielą zależności
- Można pracować nad pojedynczymi projektami, nie wpływając na inne
- Sklonuj całe repozytorium, aby uzyskać pełne doświadczenie kursu

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony przy użyciu automatycznej usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy starań, aby tłumaczenie było precyzyjne, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub niedokładności. Oryginalny dokument w języku źródłowym powinien być uznawany za źródło nadrzędne. W przypadku informacji krytycznych zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->