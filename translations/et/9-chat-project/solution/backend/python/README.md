# Koodi käivitamine

## Seadistamine

Loo virtuaalne keskkond

```sh
python -m venv venv
source ./venv/bin/activate
```

## Paigalda sõltuvused

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Käivita API

```sh
# Meetod 1: Otsekäivitus
python api.py

# Meetod 2: Uvicorni kasutamine
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testi API-t

Külasta interaktiivset API dokumentatsiooni aadressil: `http://localhost:5000/docs`

## Käivita frontend

Veendu, et oled frontend kaustas

Leia *app.js*, muuda `BASE_URL` oma backend URL-iks

Käivita see

```
npx http-server -p 8000
```

Proovi saata sõnumi vestlusesse, sa peaksid nägema vastust (kui jooksutad seda Codespaces'is või oled seadistanud ligipääsutokeni).

## Ligipääsutokeni seadistamine (kui sa ei jookse seda Codespaces'is)

Vaata [Ligipääsutokeni seadistamine](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud tehisintellekti tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, tuleb arvestada, et automatiseeritud tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks lugeda ametlikuks allikaks. Olulise info puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate mõistmatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->