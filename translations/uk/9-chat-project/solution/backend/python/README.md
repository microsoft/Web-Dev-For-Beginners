<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-24T15:39:38+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "uk"
}
-->
# Запуск коду

## Налаштування

Створіть віртуальне середовище

```sh
python -m venv venv
source ./venv/bin/activate
```

## Встановіть залежності

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Запустіть API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Тестування API

Відвідайте інтерактивну документацію API за адресою: `http://localhost:5000/docs`

## Запустіть фронтенд

Переконайтеся, що ви знаходитеся в папці фронтенду

Знайдіть *app.js*, змініть `BASE_URL` на URL вашого бекенду

Запустіть його

```
npx http-server -p 8000
```

Спробуйте написати повідомлення в чаті, ви повинні побачити відповідь (за умови, що ви запускаєте це в Codespace або налаштували токен доступу).

## Налаштування токена доступу (якщо ви не запускаєте це в Codespace)

Дивіться [Налаштування PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Відмова від відповідальності**:  
Цей документ був перекладений за допомогою сервісу автоматичного перекладу [Co-op Translator](https://github.com/Azure/co-op-translator). Хоча ми прагнемо до точності, будь ласка, майте на увазі, що автоматичні переклади можуть містити помилки або неточності. Оригінальний документ на його рідній мові слід вважати авторитетним джерелом. Для критичної інформації рекомендується професійний людський переклад. Ми не несемо відповідальності за будь-які непорозуміння або неправильні тлумачення, що виникають внаслідок використання цього перекладу.