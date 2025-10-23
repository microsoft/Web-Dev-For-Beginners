<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-22T22:19:58+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "ru"
}
-->
# Запуск кода

## Настройка

Создайте виртуальное окружение

```sh
python -m venv venv
source ./venv/bin/activate
```

## Установите зависимости

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Запустите API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Тестирование API

Откройте интерактивную документацию API по адресу: `http://localhost:5000/docs`

## Запуск фронтенда

Убедитесь, что вы находитесь в папке фронтенда

Найдите *app.js*, измените `BASE_URL` на URL вашего бэкенда

Запустите

```
npx http-server -p 8000
```

Попробуйте ввести сообщение в чат, вы должны увидеть ответ (при условии, что вы запускаете это в Codespace или настроили токен доступа).

## Настройка токена доступа (если вы не запускаете это в Codespace)

См. [Настройка PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Отказ от ответственности**:  
Этот документ был переведен с использованием сервиса автоматического перевода [Co-op Translator](https://github.com/Azure/co-op-translator). Несмотря на наши усилия обеспечить точность, автоматические переводы могут содержать ошибки или неточности. Оригинальный документ на его родном языке следует считать авторитетным источником. Для получения критически важной информации рекомендуется профессиональный перевод человеком. Мы не несем ответственности за любые недоразумения или неправильные интерпретации, возникающие в результате использования данного перевода.