<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:50:27+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "lt"
}
-->
# Paleiskite kodą

## Paruošimas

Sukurkite virtualią aplinką

```sh
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

Žiūrėkite [Nustatyti PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.