<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-24T23:21:44+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "sr"
}
-->
# Покрени код

## Подешавање

Креирај виртуелно окружење

```sh
python -m venv venv
source ./venv/bin/activate
```

## Инсталирај зависности

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Покрени API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Тестирај API

Посети интерактивну документацију API-ја на: `http://localhost:5000/docs`

## Покрени фронтенд

Увери се да се налазиш у фасцикли фронтенда

Пронађи *app.js*, промени `BASE_URL` на URL твог бекенда

Покрени га

```
npx http-server -p 8000
```

Покушај да укуцаш поруку у чету, требало би да видиш одговор (под условом да ово покрећеш у Codespace-у или си подесио access token).

## Подеси access token (ако не покрећеш ово у Codespace-у)

Погледај [Подешавање PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Одрицање од одговорности**:  
Овај документ је преведен коришћењем услуге за превођење помоћу вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако настојимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати меродавним извором. За критичне информације препоручује се професионални превод од стране људи. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.