<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-06T20:05:08+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "pl"
}
-->
# Uruchom kod

## Konfiguracja

Utwórz środowisko wirtualne

```sh
python -m venv venv
source ./venv/bin/activate
```

## Instalacja zależności

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Uruchom API

```sh
# Metoda 1: Bezpośrednie wykonanie
python api.py

# Metoda 2: Użycie uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testowanie API

Odwiedź interaktywną dokumentację API pod adresem: `http://localhost:5000/docs`

## Uruchom frontend

Upewnij się, że znajdujesz się w folderze frontend

Znajdź *app.js*, zmień `BASE_URL` na adres URL twojego backendu

Uruchom go

```
npx http-server -p 8000
```

Spróbuj wpisać wiadomość na czacie, powinieneś zobaczyć odpowiedź (pod warunkiem, że uruchamiasz to w Codespace lub skonfigurowałeś token dostępu).

## Konfiguracja tokena dostępu (jeśli nie uruchamiasz tego w Codespace)

Zobacz [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczeń AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż staramy się zapewnić dokładność, prosimy pamiętać, że tłumaczenia automatyczne mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego ojczystym języku powinien być uznawany za źródło autorytatywne. W przypadku istotnych informacji zaleca się skorzystanie z profesjonalnego tłumaczenia wykonanego przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->