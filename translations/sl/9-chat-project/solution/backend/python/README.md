<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:50:06+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "sl"
}
-->
# Zaženi kodo

## Nastavitev

Ustvari virtualno okolje

```sh
python -m venv venv
source ./venv/bin/activate
```

## Namesti odvisnosti

```sh
pip install openai flask flask-cors 
```

## Zaženi API

```sh
python api.py
```

## Zaženi frontend

Prepričaj se, da si v mapi frontend

Poišči *app.js*, spremeni `BASE_URL` na URL svojega backend strežnika

Zaženi

```
npx http-server -p 8000
```

Poskusi vtipkati sporočilo v klepetu, moral bi videti odgovor (če to izvajaš v Codespace ali si nastavil dostopni žeton).

## Nastavi dostopni žeton (če tega ne izvajaš v Codespace)

Glej [Nastavitev PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.