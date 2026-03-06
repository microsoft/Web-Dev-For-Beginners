# AGENTS.md

## Przegląd projektu

Jest to repozytorium programu nauczania służące do nauczania podstaw web developmentu dla początkujących. Program to kompleksowy, 12-tygodniowy kurs opracowany przez Microsoft Cloud Advocates, zawierający 24 praktyczne lekcje obejmujące JavaScript, CSS i HTML.

### Kluczowe elementy

- **Treści edukacyjne**: 24 ustrukturyzowane lekcje zorganizowane w moduły projektowe  
- **Projekty praktyczne**: Terrarium, Gra w pisanie, Rozszerzenie przeglądarki, Gra kosmiczna, Aplikacja bankowa, Edytor kodu oraz Asystent czatu AI  
- **Interaktywne quizy**: 48 quizów z 3 pytaniami każdy (wstępne i końcowe testy)  
- **Wsparcie wielojęzyczne**: Automatyczne tłumaczenia na ponad 50 języków dzięki GitHub Actions  
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (do projektów AI)  

### Architektura

- Repozytorium edukacyjne o strukturze lekcji  
- Każdy folder lekcji zawiera README, przykłady kodu i rozwiązania  
- Samodzielne projekty w oddzielnych katalogach (quiz-app, różne projekty lekcyjne)  
- System tłumaczeń wykorzystujący GitHub Actions (co-op-translator)  
- Dokumentacja serwowana przez Docsify i dostępna jako PDF  

## Komendy instalacyjne

To repozytorium służy głównie do korzystania z treści edukacyjnych. Aby pracować z konkretnymi projektami:

### Instalacja głównego repozytorium

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Instalacja Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Uruchom serwer deweloperski
npm run build      # Buduj do produkcji
npm run lint       # Uruchom ESLint
```

### API Bankowego Projektu (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Uruchom serwer API
npm run lint       # Uruchom ESLint
npm run format     # Sformatuj za pomocą Prettier
```

### Projekty Rozszerzeń Przeglądarki

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

### Projekt Czatowy (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Ustaw zmienną środowiskową GITHUB_TOKEN
python api.py
```

## Przepływ pracy developmentu

### Dla współtwórców treści

1. **Sforkuj repozytorium** na swoje konto GitHub  
2. **Sklonuj swój fork** lokalnie  
3. **Utwórz nową gałąź** na zmiany  
4. Wprowadzaj zmiany w treściach lekcji lub przykładach kodu  
5. Testuj zmiany kodu w odpowiednich katalogach projektów  
6. Prześlij pull requesty zgodnie z wytycznymi współpracy  

### Dla uczących się

1. Sforkuj lub sklonuj repozytorium  
2. Przechodź kolejno do katalogów lekcji  
3. Czytaj pliki README dla każdej lekcji  
4. Wykonuj quizy przed lekcją na https://ff-quizzes.netlify.app/web/  
5. Pracuj na przykładach kodu w folderach lekcji  
6. Realizuj zadania i wyzwania  
7. Wykonuj quizy po zakończeniu lekcji  

### Środowisko deweloperskie live

- **Dokumentacja**: Uruchom `docsify serve` w katalogu głównym (port 3000)  
- **Quiz App**: Uruchom `npm run dev` w katalogu quiz-app  
- **Projekty**: Użyj rozszerzenia VS Code Live Server do projektów HTML  
- **Projekty API**: Uruchom `npm start` w odpowiednich katalogach API  

## Instrukcje testowania

### Testowanie Quiz App

```bash
cd quiz-app
npm run lint       # Sprawdź problemy ze stylem kodu
npm run build      # Zweryfikuj, czy budowanie zakończy się sukcesem
```

### Testowanie API Bankowego

```bash
cd 7-bank-project/api
npm run lint       # Sprawdź problemy ze stylem kodu
node server.js     # Sprawdź, czy serwer uruchamia się bez błędów
```

### Ogólne podejście do testowania

- To jest repozytorium edukacyjne bez zaawansowanych automatycznych testów  
- Testowanie manualne skupia się na:  
  - Poprawnym działaniu przykładów kodu  
  - Prawidłowo działających linkach w dokumentacji  
  - Udanym budowaniu projektów  
  - Przykładach zgodnych z dobrymi praktykami  

### Sprawdzenia przed wysłaniem

- Uruchom `npm run lint` w katalogach zawierających package.json  
- Zweryfikuj poprawność linków markdown  
- Przetestuj przykłady kodu w przeglądarce lub Node.js  
- Sprawdź, czy tłumaczenia zachowują odpowiednią strukturę  

## Wytyczne dotyczące stylu kodu

### JavaScript

- Stosuj nowoczesną składnię ES6+  
- Przestrzegaj standardowych konfiguracji ESLint dostarczonych w projektach  
- Używaj znaczących nazw zmiennych i funkcji dla jasności edukacyjnej  
- Dodawaj komentarze tłumaczące koncepcje dla uczących się  
- Formatowanie przy użyciu Prettier tam, gdzie to skonfigurowane  

### HTML/CSS

- Semantyczne elementy HTML5  
- Zasady responsywnego designu  
- Jasne konwencje nazewnictwa klas  
- Komentarze wyjaśniające techniki CSS dla uczących się  

### Python

- Wytyczne stylu PEP 8  
- Jasne, edukacyjne przykłady kodu  
- Adnotacje typów tam, gdzie pomagają w nauce  

### Dokumentacja Markdown

- Przejrzysta hierarchia nagłówków  
- Bloki kodu z określeniem języka  
- Linki do dodatkowych zasobów  
- Zrzuty ekranu i obrazy w katalogach `images/`  
- Tekst alternatywny dla obrazów, dla dostępności  

### Organizacja plików

- Lekcje ponumerowane po kolei (1-getting-started-lessons, 2-js-basics, itd.)  
- Każdy projekt ma katalog `solution/` i często `start/` lub `your-work/`  
- Obrazy w folderach `images/` specyficznych dla lekcji  
- Tłumaczenia w strukturze `translations/{kod-języka}/`  

## Budowa i wdrożenie

### Wdrożenie Quiz App (Azure Static Web Apps)

quiz-app jest skonfigurowany do wdrożenia na Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Tworzy folder dist/
# Wdraża za pomocą workflow GitHub Actions przy pushu do main
```

Konfiguracja Azure Static Web Apps:  
- **Lokalizacja aplikacji**: `/quiz-app`  
- **Lokalizacja wynikowa**: `dist`  
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

### Budowa poszczególnych projektów

Każdy katalog projektu może mieć własny proces budowy:  
- Projekty Vue: `npm run build` tworzy produkcyjne bundlery  
- Projekty statyczne: brak kroku budowy, pliki podawane bezpośrednio  

## Wytyczne dotyczące pull requestów

### Format tytułu

Używaj jasnych, opisowych tytułów wskazujących obszar zmian:  
- `[Quiz-app] Dodaj nowy quiz do lekcji X`  
- `[Lesson-3] Popraw literówkę w projekcie terrarium`  
- `[Translation] Dodaj tłumaczenie na hiszpański dla lekcji 5`  
- `[Docs] Aktualizuj instrukcje instalacji`  

### Wymagane sprawdzenia

Przed wysłaniem PR:  

1. **Jakość kodu**:  
   - Uruchom `npm run lint` w dotkniętych katalogach projektów  
   - Napraw wszystkie błędy i ostrzeżenia lint  

2. **Weryfikacja budowy**:  
   - Uruchom `npm run build` jeśli dotyczy  
   - Upewnij się, że nie ma błędów podczas kompilacji  

3. **Weryfikacja linków**:  
   - Przetestuj wszystkie linki markdown  
   - Sprawdź odwołania do obrazów  

4. **Przegląd treści**:  
   - Sprawdź pisownię i gramatykę  
   - Upewnij się, że przykłady kodu są poprawne i edukacyjne  
   - Zweryfikuj, czy tłumaczenia zachowują oryginalne znaczenie  

### Wymagania dotyczące współpracy

- Zaakceptuj Microsoft CLA (automatyczna weryfikacja podczas pierwszego PR)  
- Przestrzegaj [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Zobacz [CONTRIBUTING.md](./CONTRIBUTING.md) po szczegółowe wytyczne  
- Odwołuj się do numerów issue w opisie PR, jeśli dotyczy  

### Proces przeglądu

- PR-y są przeglądane przez opiekunów i społeczność  
- Priorytetem jest przejrzystość edukacyjna  
- Przykłady kodu powinny stosować aktualne najlepsze praktyki  
- Tłumaczenia są weryfikowane pod kątem dokładności i kulturowej adekwatności  

## System tłumaczeń

### Automatyczne tłumaczenia

- Używa GitHub Actions z workflow co-op-translator  
- Automatycznie tłumaczy na ponad 50 języków  
- Pliki źródłowe w głównych katalogach  
- Pliki tłumaczone w katalogach `translations/{kod-języka}/`  

### Dodawanie ręcznych poprawek tłumaczeń

1. Znajdź plik w `translations/{kod-języka}/`  
2. Wprowadź poprawki zachowując strukturę  
3. Upewnij się, że przykłady kodu działają poprawnie  
4. Przetestuj lokalizowane treści quizów  

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

**Quiz app nie startuje**:  
- Sprawdź wersję Node.js (zalecane v14+)  
- Usuń `node_modules` i `package-lock.json`, uruchom ponownie `npm install`  
- Sprawdź konflikty portów (domyślnie Vite używa portu 5173)  

**Serwer API nie startuje**:  
- Zweryfikuj wersję Node.js (node >=10)  
- Sprawdź, czy port nie jest zajęty  
- Upewnij się, że wszystkie zależności zainstalowane (`npm install`)  

**Rozszerzenie przeglądarki się nie ładuje**:  
- Sprawdź poprawność pliku manifest.json  
- Sprawdź konsolę przeglądarki pod kątem błędów  
- Postępuj zgodnie z instrukcjami instalacji specyficznymi dla przeglądarki  

**Problemy z projektem czatu w Pythonie**:  
- Upewnij się, że pakiet OpenAI jest zainstalowany: `pip install openai`  
- Sprawdź, czy zmienna środowiskowa GITHUB_TOKEN jest ustawiona  
- Zweryfikuj uprawnienia dostępu do GitHub Models  

**Docsify nie serwuje dokumentacji**:  
- Zainstaluj docsify-cli globalnie: `npm install -g docsify-cli`  
- Uruchom z katalogu głównego repozytorium  
- Sprawdź, czy istnieje `docs/_sidebar.md`  

### Wskazówki dotyczące środowiska developerskiego

- Używaj VS Code z rozszerzeniem Live Server do projektów HTML  
- Zainstaluj rozszerzenia ESLint i Prettier dla spójnego formatowania  
- Używaj DevTools przeglądarki do debugowania JavaScript  
- W projektach Vue zainstaluj rozszerzenie Vue DevTools do przeglądarki  

### Aspekty wydajności

- Duża liczba przetłumaczonych plików (50+ języków) oznacza duże klony pełne  
- Używaj płytkiego klonu, jeśli pracujesz tylko na treści: `git clone --depth 1`  
- Wyklucz tłumaczenia z wyszukiwań podczas pracy nad angielską zawartością  
- Procesy budowy mogą być wolne przy pierwszym uruchomieniu (npm install, budowa Vite)  

## Aspekty bezpieczeństwa

### Zmienne środowiskowe

- Klucze API nigdy nie powinny być commitowane do repozytorium  
- Używaj plików `.env` (już w `.gitignore`)  
- Udokumentuj wymagane zmienne środowiskowe w README projektów  

### Projekty Python

- Używaj środowisk wirtualnych: `python -m venv venv`  
- Aktualizuj zależności  
- Tokeny GitHub powinny mieć minimalne potrzebne uprawnienia  

### Dostęp do GitHub Models

- Wymagane Personal Access Tokens (PAT) do GitHub Models  
- Tokeny przechowuj jako zmienne środowiskowe  
- Nigdy nie commituj tokenów ani danych uwierzytelniających  

## Dodatkowe uwagi

### Grupa docelowa

- Całkowicie początkujący w web development  
- Studenci i samoucy  
- Nauczyciele korzystający z programu w klasach  
- Treści zaprojektowane z myślą o dostępności i stopniowym rozwijaniu umiejętności  

### Filozofia edukacyjna

- Podejście oparte na projektach  
- Częste sprawdzanie wiedzy (quizy)  
- Ćwiczenia praktyczne z kodowaniem  
- Przykłady zastosowań z rzeczywistego świata  
- Skupienie na podstawach przed frameworkami  

### Utrzymanie repozytorium

- Aktywna społeczność uczących się i współtwórców  
- Regularne aktualizacje zależności i treści  
- Monitorowanie zgłoszeń i dyskusji przez opiekunów  
- Automatyczne aktualizacje tłumaczeń przez GitHub Actions  

### Powiązane zasoby

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)  
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) polecany dla uczących się  
- Dodatkowe kursy: Generative AI, Data Science, ML, IoT dostępne  

### Praca z konkretnymi projektami

Szczegółowe instrukcje dotyczące pojedynczych projektów dostępne w plikach README w:  
- `quiz-app/README.md` - aplikacja quizowa Vue 3  
- `7-bank-project/README.md` - aplikacja bankowa z uwierzytelnianiem  
- `5-browser-extension/README.md` - rozwój rozszerzeń przeglądarki  
- `6-space-game/README.md` - tworzenie gry na Canvas  
- `9-chat-project/README.md` - projekt asystenta czatu AI  

### Struktura monorepo

Chociaż nie jest to tradycyjne monorepo, to repozytorium zawiera wiele niezależnych projektów:  
- Każda lekcja jest samodzielna  
- Projekty nie współdzielą zależności  
- Pracuj nad pojedynczymi projektami bez wpływu na inne  
- Sklonuj całe repo dla pełnego doświadczenia programu nauczania  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mimo że dążymy do dokładności, prosimy mieć na uwadze, że tłumaczenia automatyczne mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za źródło wiarygodne. W przypadku informacji krytycznych zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->