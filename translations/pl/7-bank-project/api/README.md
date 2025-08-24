<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-24T13:27:20+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "pl"
}
-->
# Bank API

> Bank API zbudowane za pomocą [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API jest już gotowe i nie jest częścią tego ćwiczenia.

Jeśli jednak chcesz nauczyć się, jak zbudować takie API, możesz skorzystać z tej serii filmów: https://aka.ms/NodeBeginner (filmy od 17 do 21 obejmują dokładnie to API).

Możesz również zapoznać się z tym interaktywnym samouczkiem: https://aka.ms/learn/express-api

## Uruchamianie serwera

Upewnij się, że masz zainstalowany [Node.js](https://nodejs.org).

1. Sklonuj repozytorium [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Otwórz terminal i przejdź do folderu `Web-Dev-For-Beginners/7-bank-project/api`.
3. Uruchom `npm install` i poczekaj, aż pakiety zostaną zainstalowane (może to chwilę potrwać, w zależności od jakości połączenia internetowego).
4. Po zakończeniu instalacji uruchom `npm start` i wszystko gotowe.

Serwer powinien zacząć nasłuchiwać na porcie `5000`.
*Ten serwer będzie działał razem z głównym serwerem aplikacji bankowej (nasłuchującym na porcie `3000`), nie zamykaj go.*

> Uwaga: wszystkie dane są przechowywane w pamięci i nie są trwałe, więc po zatrzymaniu serwera wszystkie dane zostaną utracone.

## Szczegóły API

Ścieżka                                      | Opis
---------------------------------------------|------------------------------------
GET    /api/                                 | Pobierz informacje o serwerze
POST   /api/accounts/                        | Utwórz konto, np.: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Pobierz wszystkie dane dla określonego konta
DELETE /api/accounts/:user                   | Usuń określone konto
POST   /api/accounts/:user/transactions      | Dodaj transakcję, np.: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Usuń określoną transakcję

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczenia AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za autorytatywne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.