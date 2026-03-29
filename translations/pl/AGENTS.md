# AGENTS.md

## Przegląd projektu

To jest repozytorium edukacyjne do nauczania podstaw tworzenia stron internetowych dla początkujących. Program nauczania to kompleksowy 12-tygodniowy kurs opracowany przez Microsoft Cloud Advocates, zawierający 24 praktyczne lekcje obejmujące JavaScript, CSS i HTML.

### Kluczowe elementy

- **Treści edukacyjne**: 24 uporządkowane lekcje zorganizowane w moduły oparte na projektach
- **Praktyczne projekty**: Terrarium, Gra pisania, Rozszerzenie przeglądarki, Gra kosmiczna, Aplikacja bankowa, Edytor kodu i Asystent czatu AI
- **Interaktywne quizy**: 48 quizów po 3 pytania każdy (oceny przed/po lekcji)
- **Wsparcie wielojęzyczne**: Automatyczne tłumaczenia na 50+ języków za pomocą GitHub Actions
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (dla projektów AI)

### Architektura

- Edukacyjne repozytorium o strukturze opartej na lekcjach
- Każdy folder lekcji zawiera README, przykłady kodu i rozwiązania
- Samodzielne projekty w osobnych katalogach (quiz-app, różne projekty lekcyjne)
- System tłumaczeń wykorzystujący GitHub Actions (co-op-translator)
- Dokumentacja udostępniana przez Docsify oraz dostępna w formacie PDF

## Komendy konfiguracji

To repozytorium służy głównie do konsumpcji treści edukacyjnych. Aby pracować z konkretnymi projektami:

### Konfiguracja głównego repozytorium

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Konfiguracja aplikacji Quiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Uruchom serwer deweloperski
npm run build      # Kompiluj do produkcji
npm run lint       # Uruchom ESLint
```

### Bankowy projekt API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Uruchom serwer API
npm run lint       # Uruchom ESLint
npm run format     # Formatowanie za pomocą Prettier
```

### Projekty rozszerzeń przeglądarki

```bash
cd 5-browser-extension/solution
npm install
# Postępuj zgodnie z instrukcjami ładowania rozszerzenia specyficznymi dla przeglądarki
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

## Przebieg rozwoju

### Dla współtwórców treści

1. **Zrób fork repozytorium** na swoje konto GitHub
2. **Sklonuj swój fork** lokalnie
3. **Utwórz nową gałąź** dla swoich zmian
4. Wprowadź zmiany w treści lekcji lub przykładach kodu
5. Przetestuj zmiany w kodzie w odpowiednich folderach projektów
6. Prześlij pull request zgodnie z wytycznymi dotyczącymi kontrybucji

### Dla uczniów

1. Zrób fork lub sklonuj repozytorium
2. Przechodź kolejno do folderów lekcji
3. Czytaj pliki README każdej lekcji
4. Wykonaj quizy przed lekcją na https://ff-quizzes.netlify.app/web/
5. Pracuj poprzez przykłady kodu w folderach lekcji
6. Wykonuj zadania i wyzwania
7. Wykonaj quizy po lekcji

### Programowanie na żywo

- **Dokumentacja**: Uruchom `docsify serve` w katalogu głównym (port 3000)
- **Aplikacja Quiz**: Uruchom `npm run dev` w katalogu quiz-app
- **Projekty**: Użyj rozszerzenia Live Server w VS Code dla projektów HTML
- **Projekty API**: Uruchom `npm start` w odpowiednich katalogach API

## Instrukcje testowania

### Testowanie aplikacji Quiz

```bash
cd quiz-app
npm run lint       # Sprawdź problemy ze stylem kodu
npm run build      # Zweryfikuj, czy kompilacja zakończyła się sukcesem
```

### Testowanie API Bankowego

```bash
cd 7-bank-project/api
npm run lint       # Sprawdź problemy ze stylem kodu
node server.js     # Sprawdź, czy serwer uruchamia się bez błędów
```

### Ogólne podejście do testowania

- To repozytorium edukacyjne bez kompleksowych testów automatycznych
- Testy manualne koncentrują się na:
  - Prawidłowym działaniu przykładów kodu
  - Poprawności linków w dokumentacji
  - Powodzeniu procesu budowania projektów
  - Przestrzeganiu najlepszych praktyk w przykładach

### Sprawdzenia przed wysłaniem

- Uruchom `npm run lint` w katalogach zawierających package.json
- Zweryfikuj poprawność linków w markdownie
- Przetestuj przykłady kodu w przeglądarce lub Node.js
- Sprawdź, czy tłumaczenia zachowują odpowiednią strukturę

## Wytyczne dotyczące stylu kodu

### JavaScript

- Używaj nowoczesnej składni ES6+
- Przestrzegaj standardowych konfiguracji ESLint udostępnianych w projektach
- Stosuj sensowne nazwy zmiennych i funkcji dla przejrzystości edukacyjnej
- Dodawaj komentarze wyjaśniające koncepcje dla uczniów
- Formatuj kod za pomocą Prettier tam, gdzie jest skonfigurowany

### HTML/CSS

- Semantyczne elementy HTML5
- Zasady responsywnego projektowania
- Jasne konwencje nazewnictwa klas
- Komentarze wyjaśniające techniki CSS dla uczniów

### Python

- Wytyczne stylu PEP 8
- Przejrzyste, edukacyjne przykłady kodu
- Typowanie tam, gdzie pomaga to w nauce

### Dokumentacja Markdown

- Jasna hierarchia nagłówków
- Bloki kodu ze wskazaniem języka
- Linki do dodatkowych zasobów
- Zrzuty ekranu i obrazy w katalogach `images/`
- Tekst alternatywny dla obrazów dla dostępności

### Organizacja plików

- Lekcje ponumerowane kolejno (1-getting-started-lessons, 2-js-basics, itd.)
- Każdy projekt posiada katalog `solution/` i często `start/` lub `your-work/`
- Obrazy przechowywane w specyficznych dla lekcji folderach `images/`
- Tłumaczenia w strukturze `translations/{language-code}/`

## Budowa i wdrożenie

### Wdrożenie aplikacji Quiz (Azure Static Web Apps)

quiz-app jest skonfigurowany do wdrożenia na Azure Static Web Apps:

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

### Budowanie projektów specyficznych

Każdy katalog projektu może mieć własny proces budowania:
- Projekty Vue: `npm run build` tworzy paczki produkcyjne
- Projekty statyczne: brak kroku budowania, serwuj pliki bezpośrednio

## Wytyczne dotyczące pull requestów

### Format tytułu

Używaj jasnych, opisowych tytułów wskazujących obszar zmian:
- `[Quiz-app] Dodaj nowy quiz do lekcji X`
- `[Lesson-3] Popraw literówkę w projekcie terrarium`
- `[Translation] Dodaj tłumaczenie na hiszpański dla lekcji 5`
- `[Docs] Zaktualizuj instrukcje konfiguracji`

### Wymagane kontrole

Przed przesłaniem PR:

1. **Jakość kodu**:
   - Uruchom `npm run lint` w dotkniętych katalogach projektów
   - Napraw wszystkie błędy i ostrzeżenia lintingu

2. **Weryfikacja budowy**:
   - Uruchom `npm run build` jeśli dotyczy
   - Upewnij się, że nie ma błędów budowania

3. **Weryfikacja linków**:
   - Przetestuj wszystkie linki markdown
   - Zweryfikuj odwołania do obrazów

4. **Przegląd treści**:
   - Poprawność ortograficzna i gramatyczna
   - Prawidłowość i edukacyjna wartość przykładów kodu
   - Wierność tłumaczeń oryginalnemu znaczeniu

### Wymagania dotyczące kontrybucji

- Zgoda na Microsoft CLA (automatyczna weryfikacja przy pierwszym PR)
- Przestrzeganie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Zobacz [CONTRIBUTING.md](./CONTRIBUTING.md) dla szczegółowych wytycznych
- Zamieszczaj numery issue w opisie PR, jeśli dotyczy

### Proces recenzji

- PR-y są recenzowane przez opiekunów i społeczność
- Priorytet wręczany jasności edukacyjnej
- Przykłady kodu powinny stosować aktualne najlepsze praktyki
- Tłumaczenia są sprawdzane pod kątem dokładności i zgodności kulturowej

## System tłumaczeń

### Automatyczne tłumaczenia

- Wykorzystuje GitHub Actions z workflow co-op-translator
- Automatycznie tłumaczy na 50+ języków
- Pliki źródłowe w głównych katalogach
- Tłumaczenia w katalogach `translations/{language-code}/`

### Dodawanie ręcznych ulepszeń tłumaczeń

1. Zlokalizuj plik w `translations/{language-code}/`
2. Wprowadź poprawki zachowując strukturę
3. Upewnij się, że przykłady kodu pozostają działające
4. Przetestuj wszelki zlokalizowany quiz

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

**Aplikacja quiz nie uruchamia się**:
- Sprawdź wersję Node.js (zalecana v14+)
- Usuń `node_modules` i `package-lock.json`, uruchom ponownie `npm install`
- Sprawdź konflikty portów (domyślnie Vite korzysta z portu 5173)

**Serwer API nie startuje**:
- Zweryfikuj minimalną wersję Node.js (node >=10)
- Sprawdź, czy port nie jest już zajęty
- Upewnij się, że wszystkie zależności są zainstalowane przez `npm install`

**Rozszerzenie przeglądarki się nie ładuje**:
- Sprawdź poprawność pliku manifest.json
- Sprawdź konsolę przeglądarki pod kątem błędów
- Postępuj zgodnie z instrukcjami instalacji dla przeglądarki

**Problemy z projektem czatu Python**:
- Upewnij się, że pakiet OpenAI jest zainstalowany: `pip install openai`
- Sprawdź, czy zmienna środowiskowa GITHUB_TOKEN jest ustawiona
- Zweryfikuj uprawnienia dostępu do modeli GitHub

**Docsify nie serwuje dokumentacji**:
- Zainstaluj docsify-cli globalnie: `npm install -g docsify-cli`
- Uruchom z katalogu głównego repozytorium
- Sprawdź, czy istnieje `docs/_sidebar.md`

### Wskazówki dotyczące środowiska deweloperskiego

- Używaj VS Code z rozszerzeniem Live Server dla projektów HTML
- Zainstaluj rozszerzenia ESLint i Prettier dla spójnego formatowania
- Używaj narzędzi DevTools w przeglądarce do debugowania JavaScript
- Dla projektów Vue zainstaluj rozszerzenie Vue DevTools do przeglądarki

### Rozważania dotyczące wydajności

- Duża liczba przetłumaczonych plików (50+ języków) powoduje duże klony repozytorium
- Używaj płytkiego klonu, jeśli pracujesz tylko nad treścią: `git clone --depth 1`
- Wyklucz tłumaczenia z wyszukiwań podczas pracy nad angielską zawartością
- Procesy budowania mogą być wolne przy pierwszym uruchomieniu (npm install, budowa Vite)

## Rozważania bezpieczeństwa

### Zmienne środowiskowe

- Klucze API nigdy nie powinny być dodawane do repozytorium
- Używaj plików `.env` (już w `.gitignore`)
- Dokumentuj wymagane zmienne środowiskowe w README projektów

### Projekty Python

- Używaj środowisk wirtualnych: `python -m venv venv`
- Aktualizuj zależności na bieżąco
- Tokeny GitHub powinny mieć minimalne niezbędne uprawnienia

### Dostęp do modeli GitHub

- Wymagane są Personal Access Tokens (PAT) do modeli GitHub
- Tokeny przechowuj jako zmienne środowiskowe
- Nigdy nie umieszczaj tokenów ani danych uwierzytelniających w repozytorium

## Dodatkowe uwagi

### Grupa docelowa

- Całkowici początkujący w tworzeniu stron internetowych
- Studenci i samoucy
- Nauczyciele wykorzystujący program nauczania w klasach
- Treści zaprojektowane z myślą o dostępności i stopniowym budowaniu umiejętności

### Filozofia edukacyjna

- Podejście oparte na projektach
- Częste sprawdzanie wiedzy (quizy)
- Ćwiczenia praktyczne w kodowaniu
- Przykłady zastosowań w realnym świecie
- Skupienie na podstawach przed frameworkami

### Utrzymanie repozytorium

- Aktywna społeczność uczniów i współtwórców
- Regularne aktualizacje zależności i treści
- Monitorowanie zgłoszeń i dyskusji przez opiekunów
- Automatyzacja aktualizacji tłumaczeń przez GitHub Actions

### Powiązane zasoby

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) zalecany dla uczniów
- Dodatkowe kursy: Generatywne AI, Data Science, ML, IoT dostępne

### Praca z konkretnymi projektami

Szczegółowe instrukcje do poszczególnych projektów znajdują się w plikach README:
- `quiz-app/README.md` - aplikacja quizowa Vue 3
- `7-bank-project/README.md` - aplikacja bankowa z uwierzytelnianiem
- `5-browser-extension/README.md` - rozwój rozszerzeń przeglądarki
- `6-space-game/README.md` - rozwój gry na canvasie
- `9-chat-project/README.md` - projekt asystenta czatu AI

### Struktura monorepo

Chociaż to nie jest tradycyjne monorepo, repozytorium zawiera wiele niezależnych projektów:
- Każda lekcja jest samodzielna
- Projekty nie dzielą zależności
- Pracuj nad indywidualnymi projektami bez wpływu na inne
- Sklonuj całe repozytorium, aby uzyskać pełne doświadczenie kursu

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Niniejszy dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dążymy do dokładności, prosimy mieć na uwadze, że tłumaczenia automatyczne mogą zawierać błędy lub niedokładności. Oryginalny dokument w jego rodzimym języku powinien być uznawany za źródło autorytatywne. W przypadku informacji krytycznych zalecane jest skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->