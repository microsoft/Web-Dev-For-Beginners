<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T17:08:48+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "lt"
}
-->
# Paleiskite kodą

## Paruošimas

Sukurkite virtualią aplinką

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Įdiekite priklausomybes

```sh
pip install openai flask flask-cors 
```

## Paleiskite API

```sh
python api.py
```

## Paleiskite frontendą

Įsitikinkite, kad esate frontend aplanke

Suraskite *app.js*, pakeiskite `BASE_URL` į savo backend URL

Paleiskite

```
npx http-server -p 8000
```

Pabandykite įvesti žinutę pokalbyje, turėtumėte matyti atsakymą (jei tai vykdote Codespace aplinkoje arba nustatėte prieigos raktą).

## Nustatykite prieigos raktą (jei nevykdote to Codespace aplinkoje)

Žr. [Nustatyti PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.