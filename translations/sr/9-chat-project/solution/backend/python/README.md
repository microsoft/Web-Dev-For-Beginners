<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:49:53+00:00",
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
pip install openai flask flask-cors 
```

## Покрени API

```sh
python api.py
```

## Покрени фронтенд

Увери се да се налазиш у фасцикли фронтенда

Пронађи *app.js*, промени `BASE_URL` на URL твог бекенда

Покрени га

```
npx http-server -p 8000
```

Пробај да укуцаш поруку у чету, требало би да видиш одговор (под условом да ово покрећеш у Codespace-у или си подесио access token).

## Подеси access token (ако ово не покрећеш у Codespace-у)

Погледај [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Одрицање од одговорности**:  
Овај документ је преведен коришћењем услуге за превођење помоћу вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако се трудимо да превод буде тачан, молимо вас да имате у виду да аутоматизовани преводи могу садржати грешке или нетачности. Оригинални документ на његовом изворном језику треба сматрати меродавним извором. За критичне информације препоручује се професионални превод од стране људског преводиоца. Не преузимамо одговорност за било каква погрешна тумачења или неспоразуме који могу настати услед коришћења овог превода.