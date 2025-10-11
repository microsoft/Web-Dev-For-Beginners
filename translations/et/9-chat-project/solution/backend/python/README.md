<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-10-11T11:55:08+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "et"
}
-->
# Koodi käivitamine

## Seadistamine

Loo virtuaalne keskkond

```sh
python -m venv venv
source ./venv/bin/activate
```

## Paigalda sõltuvused

```sh
pip install openai flask flask-cors 
```

## Käivita API

```sh
python api.py
```

## Käivita frontend

Veendu, et oled frontend-kaustas

Leia *app.js*, muuda `BASE_URL` oma backend URL-iks

Käivita see

```
npx http-server -p 8000
```

Proovi vestluses sõnumit sisestada, peaksid nägema vastust (eeldusel, et käivitad seda Codespace'is või oled seadistanud juurdepääsutunnuse).

## Juurdepääsutunnuse seadistamine (kui sa ei käivita seda Codespace'is)

Vaata [Juurdepääsutunnuse seadistamine](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.