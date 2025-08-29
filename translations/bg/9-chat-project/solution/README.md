<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T13:05:04+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "bg"
}
-->
# Стартиране на код

## Настройка

Създайте виртуална среда

```sh
cd backend
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

Уверете се, че сте в папката на фронтенда

Намерете *app.js*, променете `BASE_URL` на URL адреса на вашия бекенд

Стартирайте го

```
npx http-server -p 8000
```

Опитайте да напишете съобщение в чата, трябва да видите отговор (ако го стартирате в Codespace или сте настроили токен за достъп).

## Настройка на токен за достъп (ако не го стартирате в Codespace)

Вижте [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Отказ от отговорност**:  
Този документ е преведен с помощта на AI услуга за превод [Co-op Translator](https://github.com/Azure/co-op-translator). Въпреки че се стремим към точност, моля, имайте предвид, че автоматичните преводи може да съдържат грешки или неточности. Оригиналният документ на неговия изходен език трябва да се счита за авторитетен източник. За критична информация се препоръчва професионален превод от човек. Ние не носим отговорност за каквито и да е недоразумения или погрешни интерпретации, произтичащи от използването на този превод.