<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:47:42+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "pl"
}
-->
# Uruchom kod

## Konfiguracja

Utwórz wirtualne środowisko

```sh
python -m venv venv
source ./venv/bin/activate
```

## Zainstaluj zależności

```sh
pip install openai flask flask-cors 
```

## Uruchom API

```sh
python api.py
```

## Uruchom frontend

Upewnij się, że znajdujesz się w folderze frontend

Znajdź *app.js*, zmień `BASE_URL` na URL swojego backendu

Uruchom

```
npx http-server -p 8000
```

Spróbuj wpisać wiadomość w czacie, powinieneś zobaczyć odpowiedź (zakładając, że uruchamiasz to w Codespace lub skonfigurowałeś token dostępu).

## Skonfiguruj token dostępu (jeśli nie uruchamiasz tego w Codespace)

Zobacz [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Zastrzeżenie**:  
Ten dokument został przetłumaczony za pomocą usługi tłumaczeniowej AI [Co-op Translator](https://github.com/Azure/co-op-translator). Chociaż dokładamy wszelkich starań, aby tłumaczenie było precyzyjne, prosimy pamiętać, że automatyczne tłumaczenia mogą zawierać błędy lub nieścisłości. Oryginalny dokument w jego rodzimym języku powinien być uznawany za wiarygodne źródło. W przypadku informacji o kluczowym znaczeniu zaleca się skorzystanie z profesjonalnego tłumaczenia przez człowieka. Nie ponosimy odpowiedzialności za jakiekolwiek nieporozumienia lub błędne interpretacje wynikające z użycia tego tłumaczenia.