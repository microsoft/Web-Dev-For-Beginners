<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1ba61d96a11309a2a6ea507496dcf7e5",
  "translation_date": "2025-08-29T16:36:55+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "pl"
}
-->
# Korzystanie z edytora kodu

Ta lekcja obejmuje podstawy korzystania z [VSCode.dev](https://vscode.dev), edytora kodu działającego w przeglądarce, dzięki któremu możesz wprowadzać zmiany w swoim kodzie i współpracować nad projektem bez konieczności instalowania czegokolwiek na swoim komputerze.

## Cele nauki

W tej lekcji nauczysz się:

- Korzystać z edytora kodu w projekcie programistycznym
- Śledzić zmiany za pomocą systemu kontroli wersji
- Dostosowywać edytor do potrzeb programistycznych

### Wymagania wstępne

Zanim zaczniesz, musisz założyć konto na [GitHub](https://github.com). Przejdź na [GitHub](https://github.com/) i załóż konto, jeśli jeszcze tego nie zrobiłeś.

### Wprowadzenie

Edytor kodu to kluczowe narzędzie do pisania programów i współpracy nad istniejącymi projektami programistycznymi. Gdy zrozumiesz podstawy działania edytora i nauczysz się korzystać z jego funkcji, będziesz mógł zastosować tę wiedzę podczas pisania kodu.

## Pierwsze kroki z VSCode.dev

[VSCode.dev](https://vscode.dev) to edytor kodu działający w przeglądarce. Nie musisz niczego instalować, wystarczy otworzyć go jak każdą inną stronę internetową. Aby rozpocząć, otwórz następujący link: [https://vscode.dev](https://vscode.dev). Jeśli nie jesteś zalogowany na [GitHub](https://github.com/), postępuj zgodnie z instrukcjami, aby się zalogować lub utworzyć nowe konto, a następnie zaloguj się.

Po załadowaniu edytora powinien wyglądać podobnie do tego obrazu:

![Domyślny VSCode.dev](../../../../translated_images/default-vscode-dev.5d06881d65c1b3234ce50cd9ed3b0028e6031ad5f5b441bcbed96bfa6311f6d0.pl.png)

Są trzy główne sekcje, zaczynając od lewej strony i przesuwając się w prawo:

1. _Pasek aktywności_, który zawiera kilka ikon, takich jak lupa 🔎, koło zębate ⚙️ i kilka innych.
2. Rozwinięty pasek aktywności, który domyślnie pokazuje _Eksplorator_, nazywany _paskiem bocznym_.
3. Oraz obszar kodu po prawej stronie.

Kliknij każdą z ikon, aby wyświetlić różne menu. Po zakończeniu kliknij _Eksplorator_, aby wrócić do punktu wyjścia.

Gdy zaczniesz tworzyć kod lub modyfikować istniejący, będzie to odbywać się w największym obszarze po prawej stronie. W tym obszarze będziesz również przeglądać istniejący kod, co zrobisz w następnej kolejności.

## Otwieranie repozytorium GitHub

Pierwszym krokiem jest otwarcie repozytorium GitHub. Istnieje kilka sposobów na otwarcie repozytorium. W tej sekcji poznasz dwa różne sposoby, które pozwolą Ci rozpocząć pracę nad zmianami.

### 1. Za pomocą edytora

Użyj samego edytora, aby otworzyć zdalne repozytorium. Jeśli przejdziesz na [VSCode.dev](https://vscode.dev), zobaczysz przycisk _"Open Remote Repository"_:

![Otwórz zdalne repozytorium](../../../../translated_images/open-remote-repository.bd9c2598b8949e7fc283cdfc8f4050c6205a7c7c6d3f78c4b135115d037d6fa2.pl.png)

Możesz również skorzystać z palety poleceń. Paleta poleceń to pole tekstowe, w którym możesz wpisać dowolne słowo będące częścią polecenia lub akcji, aby znaleźć odpowiednie polecenie do wykonania. Użyj menu w lewym górnym rogu, wybierz _Widok_, a następnie _Paleta poleceń_, lub skorzystaj z następującego skrótu klawiaturowego: Ctrl-Shift-P (na MacOS Command-Shift-P).

![Menu palety](../../../../translated_images/palette-menu.4946174e07f426226afcdad707d19b8d5150e41591c751c45b5dee213affef91.pl.png)

Po otwarciu menu wpisz _open remote repository_, a następnie wybierz pierwszą opcję. Pojawią się repozytoria, których jesteś częścią lub które otwierałeś ostatnio. Możesz również użyć pełnego adresu URL GitHub, aby wybrać jedno z nich. Wklej następujący URL do pola tekstowego:

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ Jeśli operacja zakończy się sukcesem, zobaczysz wszystkie pliki tego repozytorium załadowane w edytorze tekstu.

### 2. Korzystając z URL

Możesz również użyć bezpośredniego adresu URL, aby załadować repozytorium. Na przykład pełny adres URL dla obecnego repozytorium to [https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners), ale możesz zamienić domenę GitHub na `VSCode.dev/github` i załadować repozytorium bezpośrednio. Wynikowy URL będzie wyglądał tak: [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners).

## Edytowanie plików

Po otwarciu repozytorium w przeglądarce/vscode.dev, kolejnym krokiem będzie wprowadzenie aktualizacji lub zmian w projekcie.

### 1. Tworzenie nowego pliku

Możesz utworzyć plik w istniejącym folderze lub w katalogu głównym. Aby utworzyć nowy plik, otwórz lokalizację/katalog, w którym chcesz zapisać plik, i wybierz ikonę _'New file ...'_ na pasku aktywności _(po lewej)_, nadaj mu nazwę i naciśnij Enter.

![Tworzenie nowego pliku](../../../../translated_images/create-new-file.2814e609c2af9aeb6c6fd53156c503ac91c3d538f9cac63073b2dd4a7631f183.pl.png)

### 2. Edytowanie i zapisywanie pliku w repozytorium

Korzystanie z vscode.dev jest przydatne, gdy chcesz szybko zaktualizować swój projekt bez konieczności instalowania oprogramowania lokalnie. Aby zaktualizować kod, kliknij ikonę 'Eksplorator', również znajdującą się na pasku aktywności, aby wyświetlić pliki i foldery w repozytorium. Wybierz plik, aby otworzyć go w obszarze kodu, wprowadź zmiany i zapisz.

![Edytowanie pliku](../../../../translated_images/edit-a-file.52c0ee665ef19f08119d62d63f395dfefddc0a4deb9268d73bfe791f52c5807a.pl.png)

Po zakończeniu aktualizacji projektu wybierz ikonę _`source control`_, która zawiera wszystkie nowe zmiany wprowadzone w repozytorium.

Aby zobaczyć zmiany wprowadzone w projekcie, wybierz plik(i) w folderze `Changes` na rozwiniętym pasku aktywności. Otworzy się 'Working Tree', w którym wizualnie zobaczysz zmiany wprowadzone w pliku. Kolor czerwony oznacza usunięcie, a zielony dodanie.

![Przeglądanie zmian](../../../../translated_images/working-tree.c58eec08e6335c79cc708c0c220c0b7fea61514bd3c7fb7471905a864aceac7c.pl.png)

Jeśli jesteś zadowolony ze zmian, które wprowadziłeś, najedź na folder `Changes` i kliknij przycisk `+`, aby przygotować zmiany do zatwierdzenia. Przygotowanie oznacza przygotowanie zmian do przesłania na GitHub.

Jeśli jednak nie jesteś zadowolony z niektórych zmian i chcesz je odrzucić, najedź na folder `Changes` i wybierz ikonę `cofnij`.

Następnie wpisz `commit message` _(Opis zmian wprowadzonych w projekcie)_, kliknij ikonę `check`, aby zatwierdzić i przesłać zmiany.

Po zakończeniu pracy nad projektem wybierz ikonę `hamburger menu` w lewym górnym rogu, aby powrócić do repozytorium na github.com.

![Przygotowanie i zatwierdzenie zmian](../../../../8-code-editor/images/edit-vscode.dev.gif)

## Korzystanie z rozszerzeń

Instalowanie rozszerzeń w VSCode pozwala dodawać nowe funkcje i opcje dostosowania środowiska programistycznego w edytorze, co poprawia przepływ pracy. Te rozszerzenia pomagają również w obsłudze wielu języków programowania i często są albo ogólne, albo specyficzne dla danego języka.

Aby przeglądać listę dostępnych rozszerzeń, kliknij ikonę _`Extensions`_ na pasku aktywności i zacznij wpisywać nazwę rozszerzenia w polu tekstowym oznaczonym _'Search Extensions in Marketplace'_. Zobaczysz listę rozszerzeń, z których każde zawiera **nazwę rozszerzenia, nazwę wydawcy, jednozdaniowy opis, liczbę pobrań** oraz **ocenę w gwiazdkach**.

![Szczegóły rozszerzenia](../../../../translated_images/extension-details.9f8f1fd4e9eb2de5069ae413119eb8ee43172776383ebe2f7cf640e11df2e106.pl.png)

Możesz również zobaczyć wszystkie wcześniej zainstalowane rozszerzenia, rozwijając folder _`Installed`_, popularne rozszerzenia używane przez większość programistów w folderze _`Popular`_ oraz rekomendowane rozszerzenia dla Ciebie, na podstawie użytkowników w tej samej przestrzeni roboczej lub ostatnio otwartych plików w folderze _`Recommended`_.

![Przeglądanie rozszerzeń](../../../../translated_images/extensions.eca0e0c7f59a10b5c88be7fe24b3e32cca6b6058b35a49026c3a9d80b1813b7c.pl.png)

### 1. Instalowanie rozszerzeń

Aby zainstalować rozszerzenie, wpisz jego nazwę w polu wyszukiwania i kliknij na nie, aby wyświetlić dodatkowe informacje o rozszerzeniu w obszarze kodu, gdy pojawi się na rozwiniętym pasku aktywności.

Możesz kliknąć _niebieski przycisk instalacji_ na rozwiniętym pasku aktywności, aby zainstalować rozszerzenie, lub użyć przycisku instalacji, który pojawia się w obszarze kodu po wybraniu rozszerzenia.

![Instalowanie rozszerzeń](../../../../8-code-editor/images/install-extension.gif)

### 2. Dostosowywanie rozszerzeń

Po zainstalowaniu rozszerzenia możesz potrzebować zmodyfikować jego działanie i dostosować je do swoich preferencji. Aby to zrobić, wybierz ikonę Extensions, a tym razem Twoje rozszerzenie pojawi się w folderze _Installed_. Kliknij ikonę _**Gear**_ i przejdź do _Extensions Setting_.

![Modyfikowanie ustawień rozszerzenia](../../../../translated_images/extension-settings.21c752ae4f4cdb78a867f140ccd0680e04619d0c44bb4afb26373e54b829d934.pl.png)

### 3. Zarządzanie rozszerzeniami

Po zainstalowaniu i użyciu rozszerzenia vscode.dev oferuje opcje zarządzania rozszerzeniem w zależności od różnych potrzeb. Na przykład możesz:

- **Wyłączyć:** _(Tymczasowo wyłącz rozszerzenie, gdy nie jest Ci potrzebne, ale nie chcesz go całkowicie odinstalować)_

    Wybierz zainstalowane rozszerzenie na rozwiniętym pasku aktywności > kliknij ikonę Gear > wybierz 'Disable' lub 'Disable (Workspace)' **LUB** Otwórz rozszerzenie w obszarze kodu i kliknij niebieski przycisk Disable.

- **Odinstalować:** Wybierz zainstalowane rozszerzenie na rozwiniętym pasku aktywności > kliknij ikonę Gear > wybierz 'Uninstall' **LUB** Otwórz rozszerzenie w obszarze kodu i kliknij niebieski przycisk Uninstall.

---

## Zadanie

[Stwórz stronę internetową z CV, korzystając z vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

## Przegląd i samodzielna nauka

Przeczytaj więcej o [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) i jego innych funkcjach.

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.