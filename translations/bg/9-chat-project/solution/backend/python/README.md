<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-24T22:40:03+00:00",
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
pip install openai fastapi uvicorn python-dotenv
```

## Стартирайте API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Тествайте API

Посетете интерактивната документация на API на адрес: `http://localhost:5000/docs`

## Стартирайте фронтенда

Уверете се, че сте в папката на фронтенда

Намерете *app.js*, променете `BASE_URL` на URL адреса на вашия бекенд

Стартирайте го

```
npx http-server -p 8000
```

Опитайте да напишете съобщение в чата, трябва да видите отговор (ако го стартирате в Codespace или сте настроили токен за достъп).

## Настройка на токен за достъп (ако не го стартирате в Codespace)

Вижте [Настройка на PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматизираните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия роден език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален човешки превод. Ние не носим отговорност за каквито и да било недоразумения или погрешни интерпретации, произтичащи от използването на този превод.