# Vykdyti kodą

## Paruošimas

Sukurti virtualią aplinką

```sh
python -m venv venv
source ./venv/bin/activate
```

## Įdiegti priklausomybes

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Vykdyti API

```sh
# Metodas 1: Tiesioginis vykdymas
python api.py

# Metodas 2: Naudojant uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testuoti API

Aplankykite interaktyvią API dokumentaciją adresu: `http://localhost:5000/docs`

## Vykdyti frontendą

Įsitikinkite, kad esate frontend aplanke

Suraskite *app.js*, pakeiskite `BASE_URL` į savo backend'o URL

Vykdykite jį

```
npx http-server -p 8000
```

Pabandykite įvesti žinutę pokalbyje, turėtumėte pamatyti atsakymą (jei vykdote tai Codespace aplinkoje arba esate nustatę prieigos tokeną).

## Prieigos tokeno nustatymas (jei nevykdote Codespace aplinkoje)

Žr. [Nustatyti PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, atkreipkite dėmesį, kad automatizuoti vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas gimtąja kalba laikomas autoritetingu šaltiniu. Esant kritinei informacijai, rekomenduojame naudoti profesionalų žmogaus atliktą vertimą. Mes neatsakome už bet kokius nesusipratimus ar klaidingus interpretavimus, kylančius iš šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->