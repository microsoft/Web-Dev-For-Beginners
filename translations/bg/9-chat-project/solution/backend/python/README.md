<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:49:47+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "bg"
}
-->
# Стартиране на код

## Настройка

Създайте виртуална среда

```sh
python -m venv venv
source ./venv/bin/activate
```

## Инсталирайте зависимости

```sh
pip install openai flask flask-cors 
```

## Стартирайте API

```sh
python api.py
```

## Стартирайте фронтенда

Уверете се, че се намирате в папката на фронтенда

Намерете *app.js*, променете `BASE_URL` на URL адреса на вашия бекенд

Стартирайте го

```
npx http-server -p 8000
```

Опитайте да напишете съобщение в чата, трябва да видите отговор (ако го стартирате в Codespace или сте настроили access token).

## Настройка на access token (ако не го стартирате в Codespace)

Вижте [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматизираните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия роден език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален човешки превод. Ние не носим отговорност за недоразумения или погрешни интерпретации, произтичащи от използването на този превод.