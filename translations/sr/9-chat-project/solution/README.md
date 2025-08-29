<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T13:05:11+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "sr"
}
-->
# Покрени код

## Подешавање

Креирај виртуелно окружење

```sh
cd backend
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

Пробај да укуцаш поруку у чету, требало би да видиш одговор (под условом да ово покрећеш у Codespace-у или да си подесио access token).

## Подеси access token (ако ово не покрећеш у Codespace-у)

Погледај [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Одрицање од одговорности**:  
Овај документ је преведен коришћењем услуге за превођење помоћу вештачке интелигенције [Co-op Translator](https://github.com/Azure/co-op-translator). Иако настојимо да обезбедимо тачност, молимо вас да имате у виду да аутоматски преводи могу садржати грешке или нетачности. Оригинални документ на изворном језику треба сматрати ауторитативним извором. За критичне информације препоручује се професионални превод од стране људи. Не сносимо одговорност за било каква погрешна тумачења или неспоразуме који могу произаћи из коришћења овог превода.