# AGENTS.md

## Przegląd projektu

Jest to edukacyjne repozytorium z programem nauczania do nauki podstaw tworzenia stron internetowych dla początkujących. Program nauczania to kompleksowy 12-tygodniowy kurs opracowany przez Microsoft Cloud Advocates, zawierający 24 praktyczne lekcje obejmujące JavaScript, CSS i HTML.

### Kluczowe elementy

- **Treści edukacyjne**: 24 ustrukturyzowane lekcje zorganizowane w moduły oparte na projektach  
- **Projekty praktyczne**: Terrarium, Gra pisania na klawiaturze, Rozszerzenie przeglądarki, Gra kosmiczna, Aplikacja bankowa, Edytor kodu i Asystent czatu AI  
- **Interaktywne quizy**: 48 quizów po 3 pytania każdy (oceny przed i po lekcji)  
- **Wsparcie wielojęzyczne**: Automatyczne tłumaczenia na ponad 50 języków przez GitHub Actions  
- **Technologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (dla projektów AI)  

### Architektura

- Edukacyjne repozytorium z strukturą opartą na lekcjach  
- Każdy folder lekcji zawiera README, przykłady kodu i rozwiązania  
- Samodzielne projekty w osobnych katalogach (quiz-app, różne projekty lekcyjne)  
- System tłumaczeń wykorzystujący GitHub Actions (co-op-translator)  
- Dokumentacja serwowana przez Docsify i dostępna jako PDF  

## Komendy konfiguracji

To repozytorium jest głównie do konsumpcji treści edukacyjnych. Do pracy z konkretnymi projektami:

### Konfiguracja repozytorium głównego

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
  
### API projektu bankowego (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Uruchom serwer API
npm run lint       # Uruchom ESLint
npm run format     # Formatuj za pomocą Prettier
```
  
### Projekty rozszerzenia przeglądarki

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
  
## Przebieg rozwoju

### Dla osób dodających treści

1. **Sforkuj repozytorium** na swoje konto GitHub  
2. **Sklonuj swoją kopię** lokalnie  
3. **Utwórz nową gałąź** dla swoich zmian  
4. Wprowadź zmiany w treści lekcji lub przykładach kodu  
5. Przetestuj zmieniany kod w odpowiednich katalogach projektów  
6. Prześlij pull requesty zgodnie z wytycznymi współpracy  

### Dla uczących się

1. Sforkuj lub sklonuj repozytorium  
2. Przechodź kolejno do katalogów lekcji  
3. Czytaj pliki README dla każdej lekcji  
4. Wypełnij quizy przed lekcją na https://ff-quizzes.netlify.app/web/  
5. Pracuj nad przykładami kodu w folderach lekcji  
6. Wykonaj zadania i wyzwania  
7. Przystąp do quizów po lekcji  

### Praca na żywo

- **Dokumentacja**: Uruchom `docsify serve` w katalogu głównym (port 3000)  
- **Aplikacja Quiz**: Uruchom `npm run dev` w katalogu quiz-app  
- **Projekty**: Użyj rozszerzenia VS Code Live Server dla projektów HTML  
- **Projekty API**: Uruchom `npm start` w odpowiednich katalogach API  

## Instrukcje testowania

### Testowanie aplikacji Quiz

```bash
cd quiz-app
npm run lint       # Sprawdź problemy ze stylem kodu
npm run build      # Zweryfikuj pomyślność kompilacji
```
  
### Testowanie API bankowego

```bash
cd 7-bank-project/api
npm run lint       # Sprawdź problemy ze stylem kodu
node server.js     # Zweryfikuj, czy serwer uruchamia się bez błędów
```
  
### Ogólne podejście do testowania

- To jest repozytorium edukacyjne bez kompleksowych testów automatycznych  
- Testowanie manualne koncentruje się na:  
  - Przykłady kodu działają bez błędów  
  - Linki w dokumentacji działają prawidłowo  
  - Budowy projektów wykonują się poprawnie  
  - Przykłady przestrzegają najlepszych praktyk  

### Sprawdzenia przed zatwierdzeniem

- Uruchom w katalogach z package.json `npm run lint`  
- Zweryfikuj poprawność linków markdown  
- Testuj przykłady kodu w przeglądarce lub Node.js  
- Sprawdź czy tłumaczenia zachowują odpowiednią strukturę  

## Wytyczne stylu kodu

### JavaScript

- Używaj nowoczesnej składni ES6+  
- Przestrzegaj standardowej konfiguracji ESLint oferowanej w projektach  
- Nadawaj znaczące nazwy zmiennym i funkcjom dla czytelności edukacyjnej  
- Dodawaj komentarze tłumaczące koncepcje dla uczniów  
- Formatowanie używaj Prettier tam, gdzie jest skonfigurowany  

### HTML/CSS

- Semantyczne elementy HTML5  
- Zasady responsywnego designu  
- Jasne nazewnictwo klas  
- Komentarze tłumaczące techniki CSS dla uczniów  

### Python

- Zasady stylu PEP 8  
- Jasne, edukacyjne przykłady kodu  
- W razie potrzeby wskazówki typów dla nauki  

### Dokumentacja Markdown

- Jasna hierarchia nagłówków  
- Bloki kodu z podaniem języka  
- Linki do dodatkowych zasobów  
- Zrzuty ekranu i obrazy w katalogach `images/`  
- Teksty alternatywne dla obrazów zapewniające dostępność  

### Organizacja plików

- Lekcje ponumerowane kolejno (1-getting-started-lessons, 2-js-basics itd.)  
- Każdy projekt ma katalogi `solution/` i często `start/` lub `your-work/`  
- Obrazy przechowywane w folderach `images/` specyficznych dla lekcji  
- Tłumaczenia w strukturze `translations/{language-code}/`  

## Budowanie i wdrażanie

### Wdrażanie aplikacji Quiz (Azure Static Web Apps)

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

### Generowanie dokumentacji PDF

```bash
npm install                    # Zainstaluj docsify-to-pdf
npm run convert               # Wygeneruj plik PDF z dokumentów
```
  
### Dokumentacja Docsify

```bash
npm install -g docsify-cli    # Zainstaluj Docsify globalnie
docsify serve                 # Serwuj na localhost:3000
```
  
### Budowy specyficzne dla projektów

Każdy katalog projektowy może mieć własny proces budowy:  
- Projekty Vue: `npm run build` tworzy paczki produkcyjne  
- Projekty statyczne: brak kroku budowy, służenie plików bezpośrednio  

## Wytyczne do pull requestów

### Format tytułu

Używaj jasnych, opisowych tytułów wskazujących obszar zmian:  
- `[Quiz-app] Dodaj nowy quiz dla lekcji X`  
- `[Lesson-3] Popraw literówkę w projekcie terrarium`  
- `[Translation] Dodaj tłumaczenie na hiszpański dla lekcji 5`  
- `[Docs] Aktualizuj instrukcje konfiguracji`  

### Wymagane sprawdzenia

Przed przesłaniem PR:  

1. **Jakość kodu**:  
   - Uruchom `npm run lint` w dotkniętych katalogach projektów  
   - Napraw wszystkie błędy i ostrzeżenia  

2. **Weryfikacja budowy**:  
   - Uruchom `npm run build`, jeśli dotyczy  
   - Upewnij się, że nie występują błędy budowy  

3. **Walidacja linków**:  
   - Przetestuj wszystkie linki markdown  
   - Zweryfikuj, czy odwołania do obrazów działają  

4. **Przegląd treści**:  
   - Sprawdź pisownię i gramatykę  
   - Upewnij się, że przykłady kodu są poprawne i edukacyjne  
   - Zweryfikuj, że tłumaczenia zachowują oryginalne znaczenie  

### Wymagania dotyczące współpracy

- Zgoda na Microsoft CLA (automatyczna kontrola przy pierwszym PR)  
- Przestrzeganie [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Szczegóły w [CONTRIBUTING.md](./CONTRIBUTING.md)  
- Jeśli stosowne, uwzględniaj numery issue w opisie PR  

### Proces przeglądu

- PRy przeglądane przez opiekunów i społeczność  
- Priorytetem jest jasność edukacyjna  
- Przykłady kodu powinny przestrzegać aktualnych najlepszych praktyk  
- Tłumaczenia poddawane przeglądowi pod kątem dokładności i adekwatności kulturowej  

## System tłumaczeń

### Tłumaczenia automatyczne

- Wykorzystuje GitHub Actions z workflow co-op-translator  
- Automatyczne tłumaczenia na ponad 50 języków  
- Pliki źródłowe w głównych katalogach  
- Przetłumaczone pliki w folderach `translations/{language-code}/`  

### Dodawanie ręcznych ulepszeń tłumaczeń

1. Znajdź plik w `translations/{language-code}/`  
2. Wprowadź poprawki, zachowując strukturę  
3. Upewnij się, że przykłady kodu działają poprawnie  
4. Przetestuj przetłumaczone treści quizów  

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

**Aplikacja quiz nie uruchamia się:**  
- Sprawdź wersję Node.js (zalecana v14+)  
- Usuń `node_modules` i `package-lock.json`, uruchom ponownie `npm install`  
- Sprawdź konflikty portów (domyślnie Vite używa portu 5173)  

**Serwer API nie startuje:**  
- Upewnij się, że wersja Node.js jest co najmniej 10  
- Sprawdź, czy port nie jest zajęty  
- Zweryfikuj instalację wszystkich zależności (`npm install`)  

**Rozszerzenie przeglądarki się nie ładuje:**  
- Sprawdź poprawność manifest.json  
- Sprawdź konsolę przeglądarki pod kątem błędów  
- Postępuj zgodnie z instrukcjami instalacji dla konkretnej przeglądarki  

**Problemy z projektem czatu Python:**  
- Sprawdź, czy pakiet OpenAI jest zainstalowany: `pip install openai`  
- Upewnij się, że zmienna środowiskowa GITHUB_TOKEN jest ustawiona  
- Zweryfikuj uprawnienia dostępu do modeli GitHub  

**Docsify nie serwuje dokumentacji:**  
- Zainstaluj docsify-cli globalnie: `npm install -g docsify-cli`  
- Uruchom z katalogu głównego repozytorium  
- Sprawdź, czy istnieje plik `docs/_sidebar.md`  

### Wskazówki dotyczące środowiska deweloperskiego

- Używaj VS Code z rozszerzeniem Live Server dla projektów HTML  
- Zainstaluj rozszerzenia ESLint i Prettier dla spójnego formatowania  
- Korzystaj z narzędzi DevTools w przeglądarce do debugowania JavaScript  
- Dla projektów Vue zainstaluj Vue DevTools jako rozszerzenie przeglądarki  

### Wydajność

- Duża liczba tłumaczonych plików (50+ języków) powoduje duże pełne klony  
- Używaj klonowania płytkiego, jeśli pracujesz tylko nad treścią: `git clone --depth 1`  
- Wyłącz tłumaczenia w wyszukiwaniu podczas pracy nad treściami angielskimi  
- Procesy budowy mogą być powolne przy pierwszym uruchomieniu (npm install, build Vite)  

## Aspekty bezpieczeństwa

### Zmienne środowiskowe

- Klucze API nigdy nie powinny być zatwierdzane do repozytorium  
- Używaj plików `.env` (już w `.gitignore`)  
- Wymagane zmienne środowiskowe dokumentuj w README projektów  

### Projekty Python

- Używaj środowisk wirtualnych: `python -m venv venv`  
- Aktualizuj zależności  
- Tokeny GitHub powinny mieć minimalne wymagane uprawnienia  

### Dostęp do modeli GitHub

- Wymagane osobiste tokeny dostępu (PAT) dla modeli GitHub  
- Tokeny przechowuj jako zmienne środowiskowe  
- Nigdy nie zatwierdzaj tokenów ani haseł  

## Dodatkowe uwagi

### Grupa docelowa

- Kompletnych początkujących w tworzeniu stron internetowych  
- Studentów i samouków  
- Nauczycieli wykorzystujących program w klasach  
- Treści zaprojektowane z myślą o dostępności i stopniowym budowaniu umiejętności  

### Filozofia edukacyjna

- Podejście oparte na nauce przez projekty  
- Częste sprawdziany wiedzy (quizy)  
- Praktyczne ćwiczenia kodowania  
- Przykłady zastosowań w rzeczywistych sytuacjach  
- Skupienie na podstawach przed frameworkami  

### Utrzymanie repozytorium

- Aktywna społeczność uczących się i współtwórców  
- Regularne aktualizacje zależności i treści  
- Monitorowanie issue i dyskusji przez opiekunów  
- Automatyczne aktualizacje tłumaczeń przez GitHub Actions  

### Powiązane zasoby

- [Moduły Microsoft Learn](https://docs.microsoft.com/learn/)  
- [Zasoby Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) polecany dla uczących się  
- Dodatkowe kursy: Generatywna AI, Data Science, ML, IoT  

### Praca z konkretnymi projektami

Szczegółowe instrukcje dotyczące konkretnych projektów znajdują się w README:  
- `quiz-app/README.md` - aplikacja quizowa Vue 3  
- `7-bank-project/README.md` - aplikacja bankowa z uwierzytelnianiem  
- `5-browser-extension/README.md` - rozwój rozszerzenia przeglądarki  
- `6-space-game/README.md` - gra oparta na canvas  
- `9-chat-project/README.md` - projekt asystenta czatu AI  

### Struktura monorepo

Choć to nie tradycyjne monorepo, repozytorium zawiera wiele niezależnych projektów:  
- Każda lekcja jest samodzielna  
- Projekty nie dzielą zależności  
- Pracuj nad indywidualnymi projektami bez wpływu na inne  
- Sklonuj całe repo dla pełnego doświadczenia programu nauczania

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:
Niniejszy dokument został przetłumaczony przy użyciu usługi tłumaczeń AI [Co-op Translator](https://github.com/Azure/co-op-translator). Choć dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w języku źródłowym należy traktować jako źródło autorytatywne. W przypadku informacji krytycznych zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z korzystania z tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->