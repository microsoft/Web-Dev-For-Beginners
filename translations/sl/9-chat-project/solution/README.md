<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T13:05:25+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "sl"
}
-->
# Zagon kode

## Nastavitev

Ustvari virtualno okolje

```sh
cd backend
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

Poišči *app.js*, spremeni `BASE_URL` na URL svojega backend-a

Zaženi

```
npx http-server -p 8000
```

Poskusi vtipkati sporočilo v klepet, moral bi videti odgovor (če to izvajaš v Codespace ali si nastavil dostopni žeton).

## Nastavi dostopni žeton (če tega ne izvajaš v Codespace)

Poglej [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za strojno prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas opozarjamo, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo strokovno človeško prevajanje. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki bi izhajale iz uporabe tega prevoda.