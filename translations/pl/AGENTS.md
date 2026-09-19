# AGENTS.md

## Przegląd projektu

To repozytorium kursu edukacyjnego do nauczania podstaw tworzenia stron internetowych dla początkujących. Program nauczania to kompleksowy, 12-tygodniowy kurs opracowany przez Microsoft Cloud Advocates, zawierający 24 praktyczne lekcje obejmujące JavaScript, CSS i HTML.

### Kluczowe elementy

- **Treści edukacyjne**: 24 uporządkowane lekcje zorganizowane w moduły oparte na projektach
- **Projekty praktyczne**: Terrarium, Gra w Pisanie na Klawiaturze, Rozszerzenie przeglądarki, Gra Kosmiczna, Aplikacja Bankowa, Edytor Kodów i Asystent czatu AI
- **Interaktywne quizy**: 48 quizów po 3 pytania każdy (testy przed i po lekcji)
- **Wsparcie wielojęzyczne**: Automatyczne tłumaczenia na ponad 50 języków dzięki GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (do projektów AI)

### Architektura

- Edukacyjne repozytorium z strukturą opartą na lekcjach
- Każdy folder lekcji zawiera plik README, przykłady kodu i rozwiązania
- Samodzielne projekty w osobnych katalogach (quiz-app, różne projekty lekcyjne)
- System tłumaczeń wykorzystujący GitHub Actions (co-op-translator)
- Dokumentacja serwowana przez Docsify i dostępna jako PDF

## Polecenia konfiguracji

To repozytorium jest przeznaczone głównie do konsumpcji treści edukacyjnych. W celu pracy nad konkretnymi projektami:

### Konfiguracja głównego repozytorium

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Konfiguracja Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Uruchom serwer deweloperski
npm run build      # Zbuduj do produkcji
npm run lint       # Uruchom ESLint
```

### API Projekt Bankowy (Node.js + Express)

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

### Projekty Gry Kosmicznej

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

## Przepływ pracy przy tworzeniu

### Dla osób wnoszących treść

1. **Utwórz fork repozytorium** na swoim koncie GitHub
2. **Sklonuj swój fork** lokalnie
3. **Utwórz nową gałąź** dla swoich zmian
4. Wprowadź zmiany w treści lekcji lub przykładach kodu
5. Przetestuj zmiany kodu w odpowiednich katalogach projektów
6. Prześlij pull request zgodnie z wytycznymi dotyczącymi wkładu

### Dla uczących się

1. Zrób fork lub sklonuj repozytorium
2. Przechodź kolejno do folderów lekcji
3. Czytaj pliki README dla każdej lekcji
4. Wykonaj quizy przed lekcją na https://ff-quizzes.netlify.app/web/
5. Przerabiaj przykłady kodu w folderach lekcji
6. Wykonaj zadania i wyzwania
7. Zrób quizy po lekcji

### Programowanie na żywo

- **Dokumentacja**: Uruchom `docsify serve` w katalogu głównym (port 3000)
- **Quiz App**: Uruchom `npm run dev` w katalogu quiz-app
- **Projekty**: Użyj rozszerzenia VS Code Live Server dla projektów HTML
- **Projekty API**: Uruchom `npm start` w odpowiednich katalogach API

## Instrukcje testowania

### Testowanie Quiz App

```bash
cd quiz-app
npm run lint       # Sprawdź problemy ze stylem kodu
npm run build      # Zweryfikuj, czy budowanie powiodło się
```

### Testowanie API Bankowego

```bash
cd 7-bank-project/api
npm run lint       # Sprawdź problemy ze stylem kodu
node server.js     # Sprawdź, czy serwer uruchamia się bez błędów
```

### Ogólne podejście do testowania

- To jest repozytorium edukacyjne bez kompleksowych automatycznych testów
- Testowanie manualne koncentruje się na:
  - Przykłady kodu działają bez błędów
  - Linki w dokumentacji działają poprawnie
  - Budowy projektów przebiegają pomyślnie
  - Przykłady stosują najlepsze praktyki

### Sprawdzenia przed wysłaniem

- Uruchom `npm run lint` w katalogach zawierających package.json
- Sprawdź poprawność linków markdown
- Przetestuj przykłady kodu w przeglądarce lub Node.js
- Sprawdź, czy tłumaczenia zachowują odpowiednią strukturę

## Wytyczne dotyczące stylu kodu

### JavaScript

- Używaj nowoczesnej składni ES6+
- Stosuj standardowe konfiguracje ESLint dostarczone w projektach
- Używaj znaczących nazw zmiennych i funkcji dla jasności edukacyjnej
- Dodawaj komentarze wyjaśniające koncepcje dla uczących się
- Formatuj kod przy pomocy Prettier tam, gdzie jest skonfigurowany

### HTML/CSS

- Semantyczne elementy HTML5
- Zasady responsywnego projektowania
- Jasne konwencje nazywania klas
- Komentarze wyjaśniające techniki CSS dla uczniów

### Python

- Wytyczne stylu PEP 8
- Jasne, edukacyjne przykłady kodu
- Wskazówki typów tam, gdzie pomocne dla nauki

### Dokumentacja Markdown

- Jasna hierarchia nagłówków
- Bloki kodu z określeniem języka
- Linki do dodatkowych zasobów
- Zrzuty ekranu i obrazy w katalogach `images/`
- Teksty alternatywne dla obrazów dla dostępności

### Organizacja plików

- Lekcje ponumerowane kolejno (1-getting-started-lessons, 2-js-basics itd.)
- Każdy projekt ma katalog `solution/` i często `start/` lub `your-work/`
- Obrazy przechowywane w folderach `images/` specyficznych dla lekcji
- Tłumaczenia w strukturze `translations/{language-code}/`

## Kompilacja i wdrożenie

### Wdrożenie Quiz App (Azure Static Web Apps)

quiz-app jest skonfigurowany do wdrożenia jako Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tworzy folder dist/
# Wdraża za pomocą workflow GitHub Actions przy pushu do main
```

Konfiguracja Azure Static Web Apps:
- **Lokalizacja aplikacji**: `/quiz-app`
- **Lokalizacja wyjściowa**: `dist`
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

### Budowy specyficzne dla projektu

Każdy katalog projektu może mieć własny proces budowy:
- Projekty Vue: `npm run build` tworzy pakiety produkcyjne
- Projekty statyczne: brak kroku budowy, serwuj pliki bezpośrednio

## Wytyczne dotyczące pull requestów

### Format tytułu

Używaj jasnych, opisowych tytułów wskazujących obszar zmian:
- `[Quiz-app] Dodaj nowy quiz do lekcji X`
- `[Lesson-3] Popraw literówkę w projekcie terrarium`
- `[Translation] Dodaj tłumaczenie na hiszpański do lekcji 5`
- `[Docs] Aktualizuj instrukcje konfiguracji`

### Wymagane kontrole

Przed złożeniem PR:

1. **Jakość kodu**:
   - Uruchom `npm run lint` w dotkniętych katalogach projektów
   - Napraw wszystkie błędy i ostrzeżenia lint

2. **Weryfikacja budowy**:
   - Uruchom `npm run build` jeśli dotyczy
   - Upewnij się, że brak błędów budowania

3. **Walidacja linków**:
   - Przetestuj wszystkie linki w markdown
   - Zweryfikuj działanie odwołań do obrazów

4. **Przegląd treści**:
   - Korekta pod względem ortografii i gramatyki
   - Sprawdzenie, czy przykłady kodu są poprawne i edukacyjne
   - Weryfikacja tłumaczeń pod kątem zachowania oryginalnego znaczenia

### Wymagania dotyczące wkładu

- Zgoda na Microsoft CLA (automatyczne sprawdzenie przy pierwszym PR)
- Stosowanie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Zapoznaj się z [CONTRIBUTING.md](./CONTRIBUTING.md) dla szczegółowych wskazówek
- Odnoś się do numerów issue w opisie PR, jeśli dotyczy

### Proces przeglądu

- PR poddawane recenzji przez opiekunów i społeczność
- Priorytet na jasność edukacyjną
- Przykłady kodu powinny stosować aktualne najlepsze praktyki
- Tłumaczenia weryfikowane pod kątem dokładności i odpowiedniości kulturowej

## System tłumaczeń

### Automatyczne tłumaczenia

- Wykorzystuje GitHub Actions z workflow co-op-translator
- Automatycznie tłumaczy na ponad 50 języków
- Pliki źródłowe w głównych katalogach
- Przetłumaczone pliki w katalogach `translations/{language-code}/`

### Dodawanie ręcznych ulepszeń tłumaczeń

1. Zlokalizuj plik w `translations/{language-code}/`
2. Wprowadź poprawki, zachowując strukturę
3. Upewnij się, że przykłady kodu pozostają funkcjonalne
4. Przetestuj lokalizowane treści quizów

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

**Quiz app nie uruchamia się**:
- Sprawdź wersję Node.js (zalecane v14+)
- Usuń `node_modules` i `package-lock.json`, potem uruchom ponownie `npm install`
- Sprawdź konflikty portów (domyślnie Vite używa portu 5173)

**Serwer API nie startuje**:
- Sprawdź, czy wersja Node.js spełnia minimum (node >=10)
- Sprawdź, czy port nie jest zajęty
- Upewnij się, że wszystkie zależności zainstalowane przez `npm install`

**Rozszerzenie przeglądarki się nie ładuje**:
- Sprawdź, czy manifest.json jest poprawnie sformatowany
- Sprawdź błędy w konsoli przeglądarki
- Postępuj zgodnie z instrukcjami instalacji dla danej przeglądarki

**Problemy z projektem czatu Python**:
- Upewnij się, że pakiet OpenAI jest zainstalowany: `pip install openai`
- Sprawdź, czy zmienna środowiskowa GITHUB_TOKEN jest ustawiona
- Zweryfikuj uprawnienia dostępu do GitHub Models

**Docsify nie serwuje dokumentacji**:
- Zainstaluj docsify-cli globalnie: `npm install -g docsify-cli`
- Uruchom z katalogu głównego repozytorium
- Sprawdź, czy istnieje plik `docs/_sidebar.md`

### Wskazówki dotyczące środowiska deweloperskiego

- Używaj VS Code z rozszerzeniem Live Server dla projektów HTML
- Zainstaluj rozszerzenia ESLint i Prettier dla jednolitego formatowania
- Korzystaj z narzędzi developerskich przeglądarki do debugowania JavaScript
- Dla projektów Vue zainstaluj Vue DevTools jako rozszerzenie przeglądarki

### Wydajność

- Duża liczba przetłumaczonych plików (ponad 50 języków) powoduje duże klony repozytorium
- Używaj płytkiego klonowania, jeśli pracujesz tylko na treści: `git clone --depth 1`
- Wyłącz tłumaczenia z wyszukiwania podczas pracy nad angielską wersją
- Procesy budowania mogą być wolne przy pierwszym uruchomieniu (npm install, build Vite)

## Aspekty bezpieczeństwa

### Zmienne środowiskowe

- Klucze API nigdy nie powinny być zapisywane w repozytorium
- Używaj plików `.env` (już w `.gitignore`)
- Dokumentuj wymagane zmienne środowiskowe w README projektów

### Projekty Python

- Używaj wirtualnych środowisk: `python -m venv venv`
- Aktualizuj zależności
- Tokeny GitHub powinny mieć minimalne wymagane uprawnienia

### Dostęp do GitHub Models

- Wymagane są Personal Access Tokens (PAT) do modeli GitHub
- Tokeny przechowuj jako zmienne środowiskowe
- Nigdy nie commituj tokenów ani poświadczeń

## Dodatkowe uwagi

### Grupa docelowa

- Kompletnie początkujący w tworzeniu stron internetowych
- Studenci i samoucy
- Nauczyciele wykorzystujący program nauczania na zajęciach
- Treści zaprojektowane z uwzględnieniem dostępności i stopniowego rozwoju umiejętności

### Filozofia edukacyjna

- Podejście oparte na projektach
- Częste sprawdzanie wiedzy (quizy)
- Praktyczne ćwiczenia kodowania
- Przykłady zastosowań w realnym świecie
- Skupienie na fundamentach przed frameworkami

### Utrzymanie repozytorium

- Aktywna społeczność uczących się i współtwórców
- Regularne aktualizacje zależności i treści
- Monitorowanie zgłoszeń i dyskusji przez opiekunów
- Aktualizacje tłumaczeń automatyzowane przez GitHub Actions

### Powiązane zasoby

- [Moduły Microsoft Learn](https://docs.microsoft.com/learn/)
- [Zasoby Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) polecany dla uczących się
- Dodatkowe kursy: Generative AI, Data Science, ML, IoT dostępne

### Praca z konkretnymi projektami

Szczegółowe instrukcje dotyczące poszczególnych projektów znajdują się w plikach README:
- `quiz-app/README.md` - aplikacja quizowa Vue 3
- `7-bank-project/README.md` - aplikacja bankowa z uwierzytelnianiem
- `5-browser-extension/README.md` - rozwój rozszerzeń przeglądarki
- `6-space-game/README.md` - tworzenie gry na Canvas
- `9-chat-project/README.md` - projekt asystenta czatu AI

### Struktura monorepo

Chociaż nie jest to tradycyjne monorepo, to repozytorium zawiera wiele niezależnych projektów:
- Każda lekcja jest samodzielna
- Projekty nie współdzielą zależności
- Pracuj nad poszczególnymi projektami nie wpływając na inne
- Sklonuj całe repozytorium, aby przejść cały kurs

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony przy użyciu usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy mieć na uwadze, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uważany za źródło autorytatywne. W przypadku informacji krytycznych zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->