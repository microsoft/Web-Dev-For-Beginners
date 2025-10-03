<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:52:04+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "pl"
}
-->
## Podstawy GIT dla początkujących w web-dev 👶

## Co to jest `Git`?
1. Git to rozproszony system kontroli wersji.
2. Cała baza kodu i historia są dostępne na komputerze każdego dewelopera, co umożliwia łatwe tworzenie gałęzi i ich scalanie.
3. Jest używany jako system kontroli wersji (VCS) do śledzenia zmian w plikach komputerowych.

* Rozproszona kontrola wersji
* Koordynuje pracę między wieloma deweloperami  
* Kto wprowadził jakie zmiany i kiedy
* Możliwość cofnięcia się w dowolnym momencie
* Lokalne i zdalne repozytoria

## KONCEPTY GIT
* Śledzi historię kodu
* Robi "migawki" Twoich plików
* Ty decydujesz, kiedy zrobić migawkę, wykonując "commit"
* Możesz odwiedzić dowolną migawkę w dowolnym momencie
* Możesz przygotować pliki przed zatwierdzeniem (commit)

### Różnica między Git a GitHub

| Git | GitHub |
| ------- | ----------- |
| Git to oprogramowanie | GitHub to usługa w chmurze |
| Git jest instalowany lokalnie na systemie | GitHub jest hostowany w sieci |
| Jest narzędziem wiersza poleceń | Jest graficznym interfejsem użytkownika |
| Git jest utrzymywany przez Linux | GitHub jest utrzymywany przez Microsoft |
| Skupia się na kontroli wersji i udostępnianiu kodu | Skupia się na scentralizowanym hostowaniu kodu źródłowego |
| Git jest licencjonowany jako open-source | GitHub oferuje darmowy poziom oraz płatne opcje |
| Git został wydany w 2005 roku | GitHub został wydany w 2008 roku |

## Instalacja GIT
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Pobierz](http://git-scm.com/download/mac) dla Mac
* [Pobierz](http://git-scm.com/download/win) dla Windows

### Kroki procesu instalacji:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Następnie kliknij Dalej > Dalej > Dalej > <b>Instaluj</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Po instalacji musimy skonfigurować Git za pomocą Git Bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Komendy Git
___

### Pobieranie i tworzenie projektów

| Komenda | Opis |
| ------- | ----------- |
| `git init` | Inicjalizuje lokalne repozytorium Git |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Tworzy lokalną kopię zdalnego repozytorium |

### Podstawowe migawki

| Komenda | Opis |
| ------- | ----------- |
| `git status` | Sprawdza status |
| `git add [file-name.txt]` | Dodaje plik do obszaru staging |
| `git add -A` | Dodaje wszystkie nowe i zmienione pliki do obszaru staging |
| `git commit -m "[commit message]"` | Zatwierdza zmiany |
| `git rm -r [file-name.txt]` | Usuwa plik (lub folder) |
| `git push` | Wysyła zmiany do zdalnego repozytorium |
| `git pull` | Pobiera najnowsze zmiany ze zdalnego repozytorium |

### Tworzenie gałęzi i scalanie

| Komenda | Opis |
| ------- | ----------- |
| `git branch` | Wyświetla listę gałęzi (gwiazdka oznacza aktualną gałąź) |
| `git branch -a` | Wyświetla wszystkie gałęzie (lokalne i zdalne) |
| `git branch [branch name]` | Tworzy nową gałąź |
| `git branch -D [branch name]` | Usuwa gałąź |
| `git push origin --delete [branch name]` | Usuwa zdalną gałąź |
| `git checkout -b [branch name]` | Tworzy nową gałąź i przełącza się na nią |
| `git checkout -b [branch name] origin/[branch name]` | Klonuje zdalną gałąź i przełącza się na nią |
| `git branch -m [old branch name] [new branch name]` | Zmienia nazwę lokalnej gałęzi |
| `git checkout [branch name]` | Przełącza się na gałąź |
| `git checkout -` | Przełącza się na ostatnio używaną gałąź |
| `git checkout -- [file-name.txt]` | Odrzuca zmiany w pliku |
| `git merge [branch name]` | Scala gałąź z aktywną gałęzią |
| `git merge [source branch] [target branch]` | Scala gałąź z docelową gałęzią |
| `git stash` | Przechowuje zmiany w brudnym katalogu roboczym |
| `git stash clear` | Usuwa wszystkie przechowywane wpisy |

### Udostępnianie i aktualizowanie projektów

| Komenda | Opis |
| ------- | ----------- |
| `git push origin [branch name]` | Wysyła gałąź do zdalnego repozytorium |
| `git push -u origin [branch name]` | Wysyła zmiany do zdalnego repozytorium (i zapamiętuje gałąź) |
| `git push` | Wysyła zmiany do zdalnego repozytorium (zapamiętana gałąź) |
| `git push origin --delete [branch name]` | Usuwa zdalną gałąź |
| `git pull` | Aktualizuje lokalne repozytorium do najnowszego zatwierdzenia |
| `git pull origin [branch name]` | Pobiera zmiany ze zdalnego repozytorium |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Dodaje zdalne repozytorium |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Ustawia gałąź origin repozytorium na SSH |

### Inspekcja i porównanie

| Komenda | Opis |
| ------- | ----------- |
| `git log` | Wyświetla zmiany |
| `git log --summary` | Wyświetla zmiany (szczegółowo) |
| `git log --oneline` | Wyświetla zmiany (krótko) |
| `git diff [source branch] [target branch]` | Podgląd zmian przed scaleniem |

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego języku źródłowym powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.