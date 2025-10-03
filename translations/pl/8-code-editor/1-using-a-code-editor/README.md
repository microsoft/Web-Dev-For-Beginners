<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T09:40:18+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "pl"
}
-->
***

# Korzystanie z edytora kodu: Opanowanie [VSCode.dev](https://vscode.dev)

**Witamy!**  
Ta lekcja przeprowadzi Cię od podstaw do zaawansowanego korzystania z [VSCode.dev](https://vscode.dev)—potężnego, przeglądarkowego edytora kodu. Nauczysz się pewnie edytować kod, zarządzać projektami, śledzić zmiany, instalować rozszerzenia i współpracować jak profesjonalista—wszystko z poziomu przeglądarki, bez konieczności instalacji.

***

## Cele nauki

Po ukończeniu tej lekcji będziesz potrafić:

- Efektywnie korzystać z edytora kodu w dowolnym projekcie, gdziekolwiek jesteś
- Bezproblemowo śledzić swoją pracę dzięki wbudowanej kontroli wersji
- Personalizować i usprawniać swój proces tworzenia dzięki dostosowaniom edytora i rozszerzeniom

***

## Wymagania wstępne

Aby rozpocząć, **załóż darmowe konto na [GitHub](https://github.com)**, które pozwoli Ci zarządzać repozytoriami kodu i współpracować z ludźmi na całym świecie. Jeśli jeszcze nie masz konta, [utwórz je tutaj](https://github.com/).

***

## Dlaczego warto korzystać z edytora kodu w przeglądarce?

**Edytor kodu**, taki jak VSCode.dev, to Twoje centrum dowodzenia do pisania, edytowania i zarządzania kodem. Dzięki intuicyjnemu interfejsowi, mnóstwu funkcji i natychmiastowemu dostępowi przez przeglądarkę możesz:

- Edytować projekty na dowolnym urządzeniu
- Uniknąć problemów związanych z instalacją
- Współpracować i wnosić wkład natychmiastowo

Gdy opanujesz VSCode.dev, będziesz gotowy do realizacji zadań programistycznych z dowolnego miejsca i o każdej porze.

***

## Pierwsze kroki z VSCode.dev

Przejdź do **[VSCode.dev](https://vscode.dev)**—bez instalacji, bez pobierania. Logowanie za pomocą GitHub odblokowuje pełny dostęp, w tym synchronizację ustawień, rozszerzeń i repozytoriów. Jeśli pojawi się komunikat, połącz swoje konto GitHub.

Po załadowaniu, Twoje środowisko pracy będzie wyglądać tak:

![Domyślny VSCode.dev](../images/default-vscode-dev ma trzy główne sekcje od lewej do prawej:
- **Pasek aktywności:** Ikony takie jak 🔎 (Szukaj), ⚙️ (Ustawienia), pliki, kontrola źródła itp.
- **Panel boczny:** Zmienia kontekst w zależności od wybranej ikony na pasku aktywności (domyślnie *Eksplorator*, aby wyświetlić pliki).
- **Obszar edytora/kodu:** Największa sekcja po prawej—tu będziesz edytować i przeglądać kod.

Klikaj ikony, aby odkrywać funkcje, ale wróć do _Eksploratora_, aby zachować orientację.

***

## Otwieranie repozytorium GitHub

### Metoda 1: Z poziomu edytora

1. Przejdź do [VSCode.dev](https://vscode.dev). Kliknij **"Open Remote Repository."**

   ![Otwórz zdalne repozytorium](../../../../8-code-editor/images/open-remote-repository użyj _Command Palette_ (Ctrl-Shift-P lub Cmd-Shift-P na Macu).

   ![Menu palety](../images/palette-menu.pngopen remote repository.”
   - Wybierz opcję.
   - Wklej URL swojego repozytorium GitHub (np. `https://github.com/microsoft/Web-Dev-For-Beginners`) i naciśnij Enter.

Jeśli wszystko się powiedzie, zobaczysz cały projekt załadowany i gotowy do edycji!

***

### Metoda 2: Natychmiast przez URL

Przekształć dowolny URL repozytorium GitHub, aby otworzyć go bezpośrednio w VSCode.dev, zastępując `github.com` przez `vscode.dev/github`.  
Np.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Ta funkcja znacznie przyspiesza dostęp do dowolnego projektu.

***

## Edytowanie plików w projekcie

Gdy Twoje repozytorium jest otwarte, możesz:

### 1. **Utworzyć nowy plik**
- W panelu *Eksploratora* przejdź do wybranego folderu lub użyj katalogu głównego.
- Kliknij ikonę _‘New file ...’_.
- Nazwij plik, naciśnij **Enter**, a plik pojawi się natychmiast.

![Utwórz nowy plik](../images/create-new-file 2. **Edytować i zapisywać pliki**

- Kliknij plik w *Eksploratorze*, aby otworzyć go w obszarze kodu.
- Wprowadź potrzebne zmiany.
- VSCode.dev automatycznie zapisuje zmiany, ale możesz nacisnąć Ctrl+S, aby zapisać ręcznie.

![Edytuj plik](../images/edit-a-file.png. **Śledzenie i zatwierdzanie zmian za pomocą kontroli wersji**

VSCode.dev ma wbudowaną kontrolę wersji **Git**!

- Kliknij ikonę _'Source Control'_, aby zobaczyć wszystkie wprowadzone zmiany.
- Pliki w folderze `Changes` pokazują dodatki (zielone) i usunięcia (czerwone).  
  ![Zobacz zmiany](../images/working-tree.png zmiany, klikając `+` obok plików, aby przygotować je do zatwierdzenia.
- **Odrzuć** niechciane zmiany, klikając ikonę cofania.
- Wpisz jasny komunikat zatwierdzenia, a następnie kliknij znaczek, aby zatwierdzić i wypchnąć zmiany.

Aby wrócić do swojego repozytorium na GitHub, wybierz menu hamburgerowe w lewym górnym rogu.

![Zatwierdź zmiany](../images/edit-vscode.dev Rozszerzenia

Rozszerzenia pozwalają dodawać języki, motywy, debugery i narzędzia zwiększające produktywność do VSCode.dev—ułatwiając i uprzyjemniając pracę z kodem.

### Przeglądanie i zarządzanie rozszerzeniami

- Kliknij ikonę **Rozszerzenia** na pasku aktywności.
- Wyszukaj rozszerzenie w polu _'Search Extensions in Marketplace'_.

  ![Szczegóły rozszerzenia](../images/extension-details:
  - **Zainstalowane:** Wszystkie dodane rozszerzenia
  - **Popularne:** Ulubione w branży
  - **Polecane:** Dostosowane do Twojego stylu pracy

  ![Zobacz rozszerzenia](

  

***

### 1. **Instalowanie rozszerzeń**

- Wpisz nazwę rozszerzenia w wyszukiwarce, kliknij je i przejrzyj szczegóły w edytorze.
- Naciśnij **niebieski przycisk Instaluj** w panelu bocznym _lub_ w głównym obszarze kodu.

  ![Instaluj rozszerzenia](../images/install-extension 2. **Dostosowywanie rozszerzeń**

- Znajdź zainstalowane rozszerzenie.
- Kliknij ikonę **Koła zębatego** → wybierz _Ustawienia rozszerzenia_, aby dostosować jego działanie do swoich potrzeb.

  ![Modyfikuj ustawienia rozszerzenia](../images/extension-settings 3. **Zarządzanie rozszerzeniami**
Możesz:

- **Wyłączyć:** Tymczasowo wyłączyć rozszerzenie, pozostawiając je zainstalowane
- **Odinstalować:** Trwale usunąć, jeśli nie jest już potrzebne

  Znajdź rozszerzenie, kliknij ikonę Koła zębatego i wybierz ‘Wyłącz’ lub ‘Odinstaluj’, albo użyj niebieskich przycisków w obszarze kodu.

***

## Zadanie

Sprawdź swoje umiejętności: [Stwórz stronę CV za pomocą vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Dalsze eksplorowanie i samodzielna nauka

- Zgłębiaj temat dzięki [oficjalnej dokumentacji VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Odkrywaj zaawansowane funkcje środowiska pracy, skróty klawiaturowe i ustawienia.

***

**Teraz jesteś gotowy, aby kodować, tworzyć i współpracować—z dowolnego miejsca, na dowolnym urządzeniu, korzystając z VSCode.dev!**

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego języku źródłowym powinien być uznawany za wiarygodne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.